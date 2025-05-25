# DB Package (packages/db)

This package handles database interactions and schema management for BlissCMS, primarily using Prisma.

## Prisma Setup

-   **Prisma Client**: Uses `@prisma/client` for type-safe database access.
-   **Schema**: The Prisma schema is defined in `prisma/schema.prisma`. It includes initial models and will be expanded as features are added.
-   **Migrations**: Prisma Migrate (`npx prisma migrate dev`) is used for schema migrations. Migrations are stored in the `prisma/migrations` directory.
-   **Database Connection**: The database connection URL is configured via the `DATABASE_URL` environment variable, typically defined in a `.env` file in this package's root (`packages/db/.env`).

### Current Schema

The schema currently includes an example `Post` model:
```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  tenantId  String   // To associate the post with a specific tenant

  @@index([tenantId])
}
```
A `tenantId` field is included in models that require tenant isolation.

## Multi-Tenancy Strategy (Schema-per-Tenant with RLS)

The planned multi-tenancy strategy involves a combination of schema-per-tenant and Row-Level Security (RLS) for defense in depth.

1.  **Schema-per-Tenant (Conceptual Approach)**:
    *   **Dynamic Schema Selection**: While Prisma doesn't natively support dynamic schema switching for a single client instance in the same way as some other ORMs, the typical approach with PostgreSQL is to alter the `search_path` for a given connection or transaction.
    *   **Connection String Modification**: For BlissCMS, this will likely involve a central mechanism (potentially within this package or in tenant-aware middleware) that provides a Prisma Client instance configured for the correct tenant's schema. This could be achieved by:
        *   Maintaining separate connection pools per tenant (can be resource-intensive).
        *   Modifying the `DATABASE_URL` or Prisma datasource configuration dynamically before instantiating the client for a request, to include `?schema=<tenant_schema_name>`.
        *   Executing `SET search_path TO <tenant_schema_name>;` on a connection before use.
    *   **Tenant Provisioning**: When a new tenant is provisioned, a new PostgreSQL schema will be created for them, and their version of the tables will be migrated within that schema.
    *   **Shared `public` Schema**: A `public` schema might still be used for shared tables (e.g., a `Tenants` table listing all tenants and their schema names).

2.  **Row-Level Security (RLS)**:
    *   **Defense in Depth**: RLS policies will be applied to tables within each tenant's schema (and potentially shared tables).
    *   **Policy Enforcement**: These policies will ensure that even if a query accidentally targets the wrong schema or attempts a broader query, the database itself restricts access to rows based on the current user's session variables (e.g., `current_setting('app.tenant_id')`).
    *   **Implementation**: RLS policies will be defined as part of Prisma Migrate's SQL migration files or managed separately. The application will be responsible for setting the appropriate session variables (like `app.tenant_id`) when a connection is established or a transaction begins.

## Prisma Client Generation

To generate the Prisma Client based on the schema, run:
```bash
npm run prisma:generate
# or npx prisma generate
```
This should be done whenever the `schema.prisma` file is changed.

## Development Workflow

1.  Define or update models in `prisma/schema.prisma`.
2.  Run `npm run prisma:migrate:dev -- --name <migration_name>` to create and apply a new migration.
3.  The `prisma:generate` command is usually run automatically by `migrate dev`, but can be run manually if needed.
4.  Use the generated Prisma Client in your application code.
