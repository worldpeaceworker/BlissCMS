# BlissCMS

BlissCMS is a monorepo scaffold for a multi-tenant, cloud-native CMS
platform. It brings together application code, shared packages,
deployment assets, and infrastructure definitions in one repository.

## Repository overview

The repository is organized around four main areas:

- `apps/` - deployable applications
- `packages/` - shared libraries and configuration
- `infra/` - infrastructure and platform definitions
- `ci/` - CI/CD pipeline resources
- `clusters/` - GitOps environment configuration

## Applications

- `apps/keystone` - planned KeystoneJS headless CMS
- `apps/cms-api` - planned NestJS API with tenant-aware middleware
- `apps/admin` - planned Next.js 14 admin panel
- `apps/keycloak-theme` - planned custom Keycloak theme assets

## Shared packages

- `packages/db` - planned Prisma and multi-tenant database support
- `packages/ui` - planned shared UI components
- `packages/middleware` - planned middleware utilities
- `packages/auth-utils` - planned authentication helpers
- `packages/config` - planned shared configuration for tooling

## Platform and operations

- `infra/terraform` - infrastructure provisioning
- `infra/talos` - Talos OS Kubernetes node configuration
- `infra/helm` - Helm charts for deployments
- `ci/tekton` - Tekton pipeline definitions
- `clusters/staging` - staging cluster desired state
- `clusters/prod` - production cluster desired state

## Tooling conventions

- ESLint is configured in `.eslintrc.json`
- Prettier is configured in `.prettierrc.json`
- Conventional commits are enforced by `commitlint.config.js`
- Dependency updates are managed through `renovate.json`

## Current state

This repository currently serves as a structured foundation for the
BlissCMS platform. Most subdirectories contain planning-oriented
README files that describe the intended responsibilities of each app,
package, and infrastructure area.

## License

[MIT](LICENSE)
