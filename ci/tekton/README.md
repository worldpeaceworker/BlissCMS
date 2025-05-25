# Tekton CI/CD (ci/tekton)

This directory holds all Tekton-related configurations for implementing Kubernetes-native CI/CD pipelines.

## Namespace
All Tekton resources should be targeted for the `tekton-ci` namespace.

## GitHub Integration
- Pipelines will be triggered by GitHub webhooks.
- A GitHub secret is expected to be mounted as a Kubernetes Secret in the `tekton-ci` namespace for webhook validation and potentially for git cloning.

## Planned Reusable Pipelines

1.  **`build-and-push.yaml`**:
    *   Builds distroless application images (using Kaniko or Ko).
    *   Pushes images to a container registry (e.g., Harbor or GitHub Container Registry).

2.  **`helm-release.yaml`**:
    *   Lints, templates, and upgrades Helm charts from `infra/helm-charts/`.
    *   Targets `staging` or `prod` clusters via parameters.

3.  **`e2e-test.yaml`**:
    *   Runs end-to-end tests (e.g., Cypress or Playwright) against preview environments.

## Triggers & Resources
- `TriggerTemplates` and `EventListeners` will be defined to react to GitHub events (PRs, tags).
- Reusable tasks from the Tekton Hub catalog, such as `git-clone` and `buildah` (or Kaniko/Ko for image building), will be utilized.
- Kubernetes Secrets for `.dockerconfigjson` (registry authentication) will be mounted into relevant Tasks.
- Tekton Chains may be optionally enabled for supply chain signing.

These definitions will be further detailed in their respective YAML files within this directory.
