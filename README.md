## MVP Completion Checklist

This checklist outlines the key milestones and integrations required for the BlissCMS MVP to be considered complete, based on the initial project specification.

-   [ ] Tekton controller installed and running in `tekton-ci` namespace.
-   [ ] All core Tekton pipelines (`build-and-push.yaml`, `helm-release.yaml`, `e2e-test.yaml`) are defined, versioned in `ci/tekton/`, and functional.
-   [ ] Tekton pipelines are successfully triggered via GitHub webhooks (configured through Tekton Triggers - EventListeners and TriggerTemplates).
-   [ ] CI-built container images are successfully pushed to the designated container registry (e.g., Harbor or GitHub Container Registry).
-   [ ] Helm releases for all applications are automated and successfully deployed to `staging` and `prod` target clusters via Argo CD.
-   [ ] GitHub Actions workflows in `ci/github/workflows/` are operational:
    -   [ ] `validate.yml`: Performs PR validation (e.g., linting, unit tests).
    -   [ ] `trigger-tekton.yml`: Successfully triggers Tekton pipelines.
    -   [ ] `build-image.yml`: Provides a functional fallback image build process if needed.
-   [ ] All core services (`keystone`, `cms-api`, `admin`) are deployable to Kubernetes via the GitOps workflow (Argo CD watching `clusters/staging/` and `clusters/prod/`).
-   [ ] Keystone CMS (`apps/keystone`) is set up with Prisma, RLS, and schema-per-tenant capabilities.
-   [ ] CMS API (`apps/cms-api`) is developed with NestJS, includes OpenTelemetry, and tenant-aware middleware.
-   [ ] Admin Panel (`apps/admin`) is developed with Next.js 14, integrates with Keycloak, and supports SIWE.
-   [ ] Custom Keycloak theme (`apps/keycloak-theme`) is created and deployable.
-   [ ] Shared UI components (`packages/ui`) are developed with Tailwind & Storybook.
-   [ ] Centralized configurations (`packages/config`) for tsconfig, ESLint, Prettier are in use.
-   [ ] Shared middleware (`packages/middleware`) for tenant ID injection and observability is functional.
-   [ ] Authentication utilities (`packages/auth-utils`) for SIWE, Keycloak, JWT are available and used.
-   [ ] Database package (`packages/db`) with Prisma, schema switching, and RLS policies is implemented.
-   [ ] Infrastructure (`infra/`) for Proxmox, Ceph, MetalLB is defined via Terraform.
-   [ ] Talos OS configurations (`infra/talos`) for controlplane and worker nodes are secure and functional.
-   [ ] Helm charts (`infra/helm/charts`) for individual apps and the umbrella chart are complete.
-   [ ] Security measures (Keycloak realm-per-tenant, Postgres schema-per-tenant + RLS, tenant-scoped middleware, container security policies, Vault for secrets) are implemented.
-   [ ] Observability stack (OpenTelemetry, Loki, Tempo, Prometheus, Grafana, Pixie, Parca) is deployed, and key dashboards are available in `docs/observability/`.
