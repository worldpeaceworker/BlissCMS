# BlissCMS

BlissCMS is an early-stage open-source monorepo for a cloud-native content
platform designed with a much larger destination in mind: a decentralized,
modular digital ecosystem where people and communities can own their content,
identity, and online spaces.

Today, this repository is primarily an architecture foundation. Over time, the
project aims to grow beyond a traditional CMS into infrastructure for
publishing, communities, creator economies, trusted digital identity, and
blockchain-aligned services.

## Overview

BlissCMS should be understood as more than a CMS scaffold. The long-term goal is
to create a platform that combines:

- headless CMS and structured content management
- modular applications and reusable APIs
- cloud-native deployment patterns
- peer-to-peer and federated networking concepts
- decentralized identity and ownership models
- social-media-grade community and service capabilities

The repository already reflects this direction in its architecture choices:
multiple apps, shared platform packages, Kubernetes-oriented infrastructure, and
GitOps-friendly deployment structure. At the same time, many of the features
described here remain aspirational and are not yet implemented.

## Mission

BlissCMS exists to empower people and communities to own, manage, and
distribute their content, identities, and digital experiences without depending
entirely on centralized platforms.

The project aims to support a future in which users are not locked into a
single provider, community operators can self-govern their digital spaces, and
platform capabilities are built on open, portable, and interoperable
foundations.

## Vision

The vision for BlissCMS is a future-facing decentralized platform that brings
together:

- **Headless CMS capabilities** for structured content, workflows, and delivery
- **Modular apps and APIs** for administration, publishing, identity, and
  service integrations
- **Peer-to-peer and federated networking concepts** to reduce dependence on
  single hosting or distribution models
- **Blockchain-enabled identity, ownership, and trust layers** where they add
  meaningful user value
- **Social-media-grade services and community features** for profiles,
  interaction, moderation, and collaboration

In this vision, BlissCMS becomes a composable base layer for digital ecosystems
rather than a single-purpose application.

## Aspirations

BlissCMS is intended to evolve into:

- a foundation for decentralized publishing
- a platform for community-owned digital spaces
- a modular ecosystem for social, content, commerce, and governance
  applications
- an infrastructure layer where users retain control over identity, data, and
  digital assets

These are project aspirations and platform direction, not statements about the
current implementation status of this repository.

## Current State

BlissCMS is currently in an **early-stage monorepo scaffold / architecture
foundation** phase.

What exists today is primarily:

- repository structure for apps, shared packages, infrastructure, CI/CD, and
  cluster management
- placeholder documentation describing intended responsibilities of major
  components
- root formatting and linting configuration
- infrastructure directories oriented around Kubernetes, Talos, Helm,
  Terraform, Tekton, and GitOps-style cluster definitions

What does **not** yet exist in this repository is a fully implemented
decentralized platform. Many capabilities discussed in this README are planned,
directional, or aspirational rather than available today.

## Repository Structure

The repository is organized as a monorepo with application, package, platform,
and infrastructure boundaries.

### Applications

- **`apps/admin`**  
  Planned Next.js 14 admin panel for platform administration, with documented
  intentions around Keycloak integration and Sign-In with Ethereum (SIWE).

- **`apps/cms-api`**  
  Planned NestJS-based API layer, intended to support observability and
  tenant-aware middleware.

- **`apps/keystone`**  
  Planned KeystoneJS-based headless CMS application with documented goals around
  Prisma, RBAC, and multi-tenant architecture.

- **`apps/keycloak-theme`**  
  Planned custom branding overlay for Keycloak.

### Shared packages

- **`packages/auth-utils`**  
  Planned shared authentication helpers, including SIWE, Keycloak, and JWT
  utility concepts.

- **`packages/config`**  
  Planned centralized shared configuration package for TypeScript, ESLint, and
  Prettier settings.

- **`packages/db`**  
  Planned database and schema management package, including multi-tenant schema
  switching and row-level security direction.

- **`packages/middleware`**  
  Planned shared middleware package for tenant context and observability.

- **`packages/ui`**  
  Planned shared UI component library, with Tailwind CSS and Storybook called
  out as intended tooling.

### Infrastructure and operations

- **`infra/terraform`**  
  Terraform infrastructure definitions.

- **`infra/talos`**  
  Talos OS machine configuration area for Kubernetes nodes, aligned with a
  secure-by-default operating model.

- **`infra/helm`**  
  Helm charts for deploying platform services.

- **`ci/tekton`**  
  Tekton CI/CD definitions intended for Kubernetes-native pipeline execution.

- **`clusters`**  
  Cluster desired-state configuration for environments such as `staging` and
  `prod`, intended for GitOps workflows.

## Platform Direction

BlissCMS is being framed as a foundation for a larger platform, not only as a
content management system.

The broader direction includes:

- modular service composition instead of a monolithic product assumption
- tenant-aware architecture suitable for organizations and communities
- API-first and headless delivery patterns
- portable infrastructure that can be self-hosted or operated by aligned
  providers
- an evolution path toward decentralized networking, identity, and trust
  systems

This direction matters because ownership, governance, identity, and content
distribution increasingly overlap. BlissCMS aims to sit at that intersection.

## Decentralization and Blockchain

### Decentralized and peer-to-peer direction

BlissCMS is intended to move toward a platform model that can support:

- peer-to-peer or federated networking patterns
- decentralized identity approaches
- data portability across applications and operators
- user and community ownership of spaces, profiles, and content
- censorship resistance where appropriate and responsibly designed
- resilient distributed service architecture that avoids unnecessary central
  points of failure

These items describe the intended direction of the platform. This repository
does **not** currently claim to implement peer-to-peer networking, federation,
or decentralized identity end to end.

### Blockchain and web3 direction

BlissCMS also has an intended blockchain-aligned direction, especially where
blockchain tools can support identity, ownership, and trust without turning the
platform into blockchain-only infrastructure.

Potential future capabilities include:

- wallet-based authentication and SIWE
- verifiable identity layers
- ownership models for digital assets and content rights
- optional smart-contract integrations
- transparent governance and community coordination mechanisms

Some repository areas already reference concepts such as SIWE, but blockchain
and web3 functionality should be understood as **roadmap direction**, not as
fully implemented platform capability in the current codebase.

## Social Ecosystem Goals

BlissCMS is intended to support an ecosystem of services comparable in breadth
to modern social and community platforms, while being more open, modular, and
user-controlled.

That long-term ecosystem may include:

- publishing and editorial workflows
- user profiles and identity-rich presence
- communities, groups, and shared spaces
- messaging, notifications, or activity streams
- media hosting and sharing experiences
- creator tools and monetization-adjacent workflows
- moderation, trust, and reputation systems
- extensible third-party integrations and composable services

The goal is not to clone any one platform, but to provide infrastructure on top
of which community-owned services and digital experiences can be built.

## Principles and Values

BlissCMS is guided by the following principles:

- **Openness** — build in the open and favor open standards
- **Modularity** — compose the platform from interoperable parts
- **Interoperability** — avoid unnecessary lock-in across identity, data, and
  services
- **Privacy** — respect user data and minimize avoidable exposure
- **Ownership** — support user and community control over digital presence and
  assets
- **Portability** — make migration and self-determination possible
- **Security** — prioritize secure defaults and resilient infrastructure
- **Transparency** — make architecture, governance direction, and tradeoffs
  legible
- **Community empowerment** — treat communities as first-class operators, not
  only end users

## Tooling / Infrastructure

Current repository-level tooling and platform scaffolding includes:

- **ESLint** via the root `.eslintrc.json`
- **Prettier** via the root `.prettierrc.json`
- **Commitlint** for conventional commit validation
- **Renovate** configuration for dependency update automation
- **Terraform** for infrastructure provisioning direction
- **Talos** for secure Kubernetes node configuration direction
- **Helm** for packaging and deployment direction
- **Tekton** for Kubernetes-native CI/CD direction
- **GitOps-oriented cluster configuration** under `clusters/`

This tooling reflects a cloud-native operating model even though the business
and platform capabilities are still in an early stage of development.

## Contributing / Future Development

Contributions are welcome from developers, infrastructure engineers, designers,
and systems thinkers who are interested in:

- headless and modular CMS architecture
- decentralized and federated platform design
- cloud-native operations and GitOps workflows
- identity, trust, and ownership models
- community tooling and creator ecosystems

At this stage, contributors should approach the repository as an emerging
foundation. A valuable contribution may be architecture work, implementation of
planned modules, infrastructure definitions, documentation, or platform design
refinement.

As the project matures, this README should evolve alongside a clearer roadmap,
working services, and more formal contribution guidance.

## License

BlissCMS is licensed under the [MIT License](./LICENSE).
