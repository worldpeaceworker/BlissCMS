# GitHub Actions for CI/CD Support (ci/github)

This directory contains GitHub Actions workflows that support the overall CI/CD process for the BlissCMS platform. These workflows primarily serve as triggers or complementary actions to the main Kubernetes-native CI/CD system managed by Tekton.

## Workflows Location

The workflows themselves are located in the `workflows/` subdirectory (`ci/github/workflows/`).

**Note on Path**: The standard path for GitHub Actions workflows is typically `.github/workflows/` in the root of the repository. However, for this project, CI-related helper Actions that might trigger external systems (like Tekton) are organized here under `ci/github/` as per the project scaffolding specification.

## Planned Workflows

The following workflows are planned:

1.  **`workflows/validate.yml`**:
    *   **Trigger**: Pull Requests.
    *   **Purpose**: Performs quick validation tasks such as linting, running unit tests, or other checks that can be done efficiently within GitHub Actions before triggering more extensive (and potentially resource-intensive) Tekton pipelines.

2.  **`workflows/trigger-tekton.yml`**:
    *   **Trigger**: Specific events like pushes to main branches, tag creation, or manual dispatch.
    *   **Purpose**: Responsible for triggering the appropriate Tekton Pipelines (e.g., `build-and-push`, `helm-release`) in the Kubernetes cluster. This might involve sending a webhook to a Tekton EventListener or using `kubectl` with proper authentication if a more direct method is set up.

3.  **`workflows/build-image.yml`**:
    *   **Trigger**: Potentially manual dispatch or specific scenarios.
    *   **Purpose**: Acts as a fallback or alternative mechanism for building container images directly within GitHub Actions (e.g., using Docker build and push actions). This could be useful if the primary Tekton-based image building is unavailable or for specific types of images not suitable for the Tekton pipeline.

These workflows will be defined in their respective YAML files within the `workflows/` subdirectory.
