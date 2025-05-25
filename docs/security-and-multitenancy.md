# Security and Multi-Tenancy Strategy

This document outlines the planned strategies for implementing security and multi-tenancy across the BlissCMS platform, as per Section 7 of the project requirements. These are foundational principles that will be incorporated into the design and development of various components.

## 1. Keycloak: Realm-per-Tenant

-   **Strategy**: Each tenant will be provisioned with a dedicated realm in Keycloak.
-   **Benefits**: This provides strong isolation for users, roles, and authentication policies on a per-tenant basis. It simplifies management and customization for individual tenants.
-   **Implementation**: Configuration and management of realms will need to be automated as part of tenant onboarding. The `apps/admin` and other relevant applications will be configured to interact with Keycloak based on the current tenant's realm.

## 2. Postgres: Schema-per-Tenant + RLS

-   **Strategy**: A schema-per-tenant approach will be used for data isolation in the PostgreSQL database. Additionally, Row-Level Security (RLS) policies will be implemented as a defense-in-depth measure.
-   **Benefits**: Schema-per-tenant offers strong data isolation. RLS provides an additional layer of security, ensuring that queries (even if misconfigured at the application level) cannot access data from another tenant.
-   **Implementation**: The `packages/db` (Prisma + schema switching + RLS policies) will be responsible for managing database connections, schema switching logic based on the current tenant, and defining RLS policies. Applications like `apps/keystone` and `apps/cms-api` will utilize this package.

## 3. Middleware: Tenant ID Injection & Scoping

-   **Strategy**: Middleware will be developed to inject the current tenant's ID into application requests and enforce data scoping.
-   **Benefits**: Ensures that all application logic operates within the context of a specific tenant, preventing accidental data leakage or cross-tenant operations.
-   **Implementation**: The `packages/middleware` will provide this functionality. This middleware will be integrated into backend applications like `apps/cms-api` and potentially `apps/keystone`. It will be responsible for identifying the tenant (e.g., from a JWT token or subdomain) and making the tenant ID available to the application logic.

## 4. Container Security

-   **Strategy**: Apply security best practices for containers running in Kubernetes.
    -   **Non-root User (UID 10001)**: Containers will be run with a non-root user (e.g., UID 10001).
    -   **Seccomp Profiles**: Seccomp profiles will be applied to restrict the system calls containers can make.
    -   **Read-only Root Filesystem**: Where possible, containers will be configured with a read-only root filesystem.
    -   **Resource Limits**: CPU and memory requests and limits will be defined for all pods.
-   **Benefits**: Reduces the attack surface and potential impact of a container compromise.
-   **Implementation**: These security contexts and resource settings will be defined in the Helm charts for each application (under `infra/helm/charts/`). Kubernetes Pod Security Admission (PSA) policies or OPA Gatekeeper constraints will be used to enforce these standards across the cluster.

## 5. Vault: Secrets Management (Raft HA)

-   **Strategy**: HashiCorp Vault, operating in high-availability (HA) mode using the Raft storage backend, will serve as the central source for managing and distributing secrets.
-   **Benefits**: Secure storage, fine-grained access control, and dynamic secret injection for applications. Raft HA mode provides resilience.
-   **Implementation**: Vault will be deployed into the Kubernetes cluster (likely via its own Helm chart). Applications will use Vault agent sidecars or init containers to fetch secrets, or integrate with Vault SDKs. Secrets will be injected into application pods as environment variables or files.

---

This document provides a high-level overview. Detailed implementation will occur within the respective application, package, and infrastructure components.
