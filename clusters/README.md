# Cluster Configurations (clusters/)

This directory holds the desired state configurations for various Kubernetes cluster environments. It is designed to be used with a GitOps tool like Argo CD.

## Target Environments

-   **`staging/`**: Contains configurations for the staging environment. Argo CD will monitor this path to synchronize applications to the staging cluster.
-   **`prod/`**: Contains configurations for the production environment. Argo CD will monitor this path to synchronize applications to the production cluster.

## Configuration Management

The subdirectories (`staging/`, `prod/`) will typically contain:
-   Kubernetes manifest files.
-   Kustomize overlays for environment-specific customizations.
-   Helm chart values files.
-   Argo CD Application Custom Resources (CRs) or ApplicationSets that define how applications are deployed and managed in each environment.

The goal is to define the entire state of each cluster declaratively in Git.
