# BlissCMS

## Overview

BlissCMS is an early-stage open-source monorepo for a cloud-native,
decentralization-oriented digital platform.

The project is intended to grow beyond a traditional CMS scaffold into a
foundation for community-owned publishing, identity, social interaction, and
service ecosystems. Its long-term direction combines headless content
management, modular application architecture, peer-to-peer and federated
networking concepts, and blockchain-aligned trust and ownership models.

Today, this repository should be understood honestly as an architecture
foundation: a structured starting point that defines the major application,
package, and infrastructure areas the platform is expected to evolve through.

## Mission

BlissCMS exists to help people, creators, and communities own, manage, and
distribute their content, identities, and digital experiences without being
fully dependent on centralized platforms.

The project is motivated by the belief that digital infrastructure should
support autonomy, portability, interoperability, and durable community control
over data, presence, and participation.

## Vision

BlissCMS is envisioned as a future-facing decentralized platform that brings
together:

- headless CMS capabilities for structured content and editorial workflows
- modular apps and shared APIs for composing platform services
- peer-to-peer and federated networking concepts for resilience and reach
- blockchain-enabled identity, ownership, and trust layers where useful
- social-media-grade services for communities, creators, and collaborative
  spaces

The goal is not only to manage content, but to provide the foundation for a
broader digital ecosystem where publishing, interaction, identity, governance,
and ownership can coexist in a modular and open architecture.

## Aspirations

BlissCMS aims to become:

- a foundation for decentralized publishing
- a platform for community-owned digital spaces
- a modular ecosystem for social, content, commerce, and governance
  applications
- an infrastructure layer where users retain control over identity, data, and
  digital assets

Over time, the platform is intended to support a range of experiences spanning
websites, communities, creator networks, service integrations, and
trust-sensitive digital workflows.

## Current State

This repository is currently an early-stage monorepo scaffold and architecture
foundation.

That means:

- the repository structure is intentionally organized around future platform
  domains
- several directories currently describe planned responsibilities rather than
  fully implemented applications or services
- infrastructure, identity, and deployment layers are represented as a
  foundation for future build-out

BlissCMS should therefore be viewed as a serious directional base for a larger
platform vision, not yet as a feature-complete CMS or decentralized network.

## Repository Structure

The repository is currently organized into the following major areas:

### Applications

- `apps/admin` - planned admin panel surface for platform administration and
  management
- `apps/cms-api` - planned CMS API service layer
- `apps/keystone` - planned KeystoneJS-based headless CMS area
- `apps/keycloak-theme` - planned custom branding and theming overlay for
  Keycloak

### Shared Packages

- `packages/auth-utils` - planned shared authentication utilities, including
  identity-related helpers
- `packages/config` - planned centralized shared configuration package
- `packages/db` - planned database and schema-management layer
- `packages/middleware` - planned shared middleware for concerns such as tenancy
  and observability
- `packages/ui` - planned shared UI component library

### Infrastructure and Operations

- `infra/terraform` - Terraform-based infrastructure definitions
- `infra/talos` - Talos OS configuration area for Kubernetes nodes
- `infra/helm` - Helm chart area for application and service deployment
- `ci/tekton` - Tekton pipeline definitions for Kubernetes-native CI/CD
- `clusters` - GitOps-oriented cluster state and environment configuration

Together, these directories show the intended shape of the platform: application
services, shared packages, and cloud-native operational infrastructure managed
as a cohesive monorepo.

## Platform Direction

BlissCMS is being shaped as more than a content backend. The intended platform
direction includes:

- modular service composition across applications, APIs, packages, and
  infrastructure
- support for multi-tenant and community-oriented deployments
- cloud-native operations using Kubernetes, GitOps, and infrastructure as code
- extensibility for future identity, social, publishing, and creator workflows

The long-term ambition is to make it possible to assemble digital spaces that
are not locked into a single vendor, single application model, or single trust
provider.

## Decentralization and Blockchain

### Decentralized and P2P Direction

BlissCMS is intended to evolve toward a platform that can support:

- peer-to-peer or federated networking patterns where appropriate
- decentralized identity models
- data portability between deployments, communities, and services
- stronger user and community ownership over spaces and content
- censorship resistance in contexts where distributed publishing is important
- resilient distributed service architecture that reduces dependence on single
  centralized control points

These are future goals and architectural directions. They should not be read as
claims that the current repository already implements a peer-to-peer network,
federation layer, or decentralized data plane.

### Blockchain and Web3 Direction

BlissCMS also aspires to support blockchain-aligned capabilities such as:

- wallet-based authentication, including Sign-In with Ethereum (SIWE)-style
  flows
- verifiable identity and attestations
- ownership models for digital assets, memberships, and content rights
- optional smart-contract integrations for specific applications
- transparent governance and community coordination mechanisms

Some repository areas already reference identity-related and SIWE-oriented
intent, but these should be understood as planned capabilities rather than
complete production features.

## Social Ecosystem Goals

The broader ambition for BlissCMS is to support an ecosystem of services with
breadth closer to modern social and community platforms than to a narrow CMS
alone.

Potential future platform capabilities include:

- publishing and editorial workflows
- user profiles and identity-rich presence
- community spaces and group coordination
- messaging, notifications, or activity streams
- media sharing and content distribution
- creator tools and monetization-oriented services
- moderation, trust, and safety systems
- extensible third-party integrations and application modules

In that sense, BlissCMS is meant to be an extensible digital foundation for
communities, creators, publishers, and networks that want more control over how
their platforms operate and evolve.

## Principles and Values

BlissCMS is guided by the following principles:

- openness
- modularity
- interoperability
- privacy
- ownership
- portability
- security
- transparency
- community empowerment

These principles are intended to shape both the technical architecture and the
governance posture of the project as it matures.

## Tooling / Infrastructure

The repository already reflects a strong cloud-native and platform-engineering
orientation through its structure:

- infrastructure as code with Terraform
- Kubernetes node configuration with Talos
- deployment packaging with Helm
- Kubernetes-native CI/CD with Tekton
- GitOps-oriented cluster configuration under `clusters/`

This infrastructure footprint is part of the project's long-range goal of
building a resilient, portable, operator-friendly platform foundation.

## Contributing / Future Development

BlissCMS is at a foundational stage, and future development is expected to
expand the repository from scaffolded architecture into working platform
components.

Contributions are most useful when they:

- preserve the distinction between current implementation and future direction
- strengthen the modular structure of the monorepo
- improve infrastructure, platform clarity, and shared building blocks
- align with the project's goals around openness, ownership, interoperability,
  and community empowerment

As the project evolves, this README should continue to document both what exists
today and what BlissCMS is intentionally building toward.

## License

BlissCMS is released under the [MIT License](./LICENSE).
