# GitHub Actions for CI/CD Support (ci/github)

This directory contains GitHub Actions workflows that support the overall CI/CD process for the BlissCMS platform. These workflows primarily serve as triggers or complementary actions to the main Kubernetes-native CI/CD system managed by Tekton.

## Workflows Location

The workflows themselves are located in the `workflows/` subdirectory (`ci/github/workflows/`).

**Note on Path**: The standard path for GitHub Actions workflows is typically `.github/workflows/` in the root of the repository. However, for this project, CI-related helper Actions that might trigger external systems (like Tekton) are organized here under `ci/github/` as per the project scaffolding specification.

## Planned Workflows

The following workflows are defined:

### 1. **`workflows/validate.yml`**
    *   **Name**: PR Validation
    *   **Purpose**: Performs quick validation tasks on Pull Requests to ensure code quality and correctness before merging or triggering more resource-intensive Tekton pipelines.
    *   **Triggers**:
        *   On `pull_request` to `main`, `develop` (and other specified long-lived branches).
    *   **Key Steps**:
        *   Checks out code (with full fetch depth for Nx).
        *   Sets up Node.js and installs dependencies using `npm ci`.
        *   Leverages Nx to lint, test, and optionally build only the projects affected by the PR, using commands like:
            *   `npx nx affected --target=lint`
            *   `npx nx affected --target=test`
            *   `npx nx affected --target=build` (optional)
    *   **Notes**: Assumes an Nx monorepo setup for optimal performance.

### 2. **`workflows/trigger-tekton.yml`**
    *   **Name**: Trigger Tekton Pipeline
    *   **Purpose**: Responsible for initiating Tekton Pipelines in the Kubernetes cluster (e.g., for building images, deploying applications).
    *   **Triggers**:
        *   On `push` to `main` branch (typically for production-related pipelines).
        *   On `push` to `develop` branch (typically for staging-related pipelines).
        *   On `workflow_dispatch` (manual trigger) with inputs for:
            *   `pipeline_name` (e.g., `build-and-push`, `helm-release`)
            *   `target_environment` (e.g., `staging`, `prod`)
            *   `image_tag` (optional, defaults to commit SHA)
    *   **Key Steps**:
        *   Determines parameters (pipeline name, environment, image tag, git revision) based on the trigger event.
        *   Authenticates to Kubernetes (requires `KUBECONFIG_CREDENTIALS` secret).
        *   Dynamically generates a Tekton `PipelineRun` YAML and applies it using `kubectl apply -f <generated-pipelinerun.yaml>` in the `tekton-ci` namespace.
        *   (Alternative, commented out: Can be adapted to send a webhook to a Tekton EventListener if one is configured, requiring a `TEKTON_WEBHOOK_URL` secret).
    *   **Notes**: The structure of the `PipelineRun` YAML depends on the specific Tekton Pipeline definitions.

### 3. **`workflows/build-image.yml`**
    *   **Name**: Build Image (Fallback)
    *   **Purpose**: Provides a manual, fallback mechanism for building and pushing container images directly within GitHub Actions, bypassing Tekton if needed.
    *   **Triggers**:
        *   On `workflow_dispatch` (manual trigger) with inputs for:
            *   `image_name` (e.g., `my-app`, `keystone`)
            *   `image_tag` (e.g., `latest`, `v1.0.0`)
            *   `dockerfile_path` (path to the Dockerfile)
            *   `build_context` (build context directory)
            *   `registry_user` (optional; if empty, defaults to GitHub Container Registry, otherwise used for registries like Docker Hub).
    *   **Key Steps**:
        *   Sets up QEMU (optional, for multi-platform builds) and Docker Buildx.
        *   Determines registry details:
            *   Defaults to GitHub Container Registry (`ghcr.io/OWNER/IMAGE_NAME`) using `GITHUB_TOKEN` for authentication if `registry_user` input is empty.
            *   For other registries (e.g., Docker Hub), uses `registry_user` and expects secrets like `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`.
        *   Logs into the specified container registry.
        *   Builds the Docker image using `docker/build-push-action` and pushes it to the registry.
        *   Utilizes Docker layer caching for faster subsequent builds.
    *   **Permissions**: Requires `packages: write` for pushing to GHCR.

These workflows aim to create a robust CI foundation, integrating GitHub Actions with Tekton for a comprehensive CI/CD solution.
