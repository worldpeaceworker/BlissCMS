# Production Environment Configuration (clusters/prod/)

This directory contains the Kubernetes configurations that define the desired state for the **production environment**.

**Caution: Changes to this directory directly impact the live production environment.**

## GitOps with Argo CD

Argo CD monitors this path (or specific Application CRs defined herein) to automatically synchronize the production cluster. All changes should be thoroughly tested and approved before being merged here.

## Application Management

Applications deployed to this environment will be managed declaratively, likely using:
-   Helm charts, with environment-specific values.
-   Argo CD `Application` Custom Resources.
-   Argo CD `ApplicationSet` resources to automate the configuration of applications based on templates or Git directory structures.

The configurations here represent the live, user-facing environment.
