import { config, list } from '@keystone-6/core';
import { text, checkbox, timestamp, relationship } from '@keystone-6/core/fields';
// import { document } from '@keystone-6/fields-document'; // We can add this later if needed for rich text

// Import the PrismaClient from your db package.
// This assumes your monorepo setup (e.g., via tsconfig paths or npm workspaces)
// allows resolving @blisscms/db. For now, this is a conceptual import.
// We will need to ensure the actual PrismaClient instance from packages/db is used.
import { PrismaClient } from '@prisma/client'; // This line is for type safety during dev

export default config({
  db: {
    provider: 'postgresql', // Or your chosen provider
    url: process.env.KEYSTONE_DATABASE_URL || process.env.DATABASE_URL || 'postgresql://user:password@host:port/dbname',
    // IMPORTANT: We need to ensure this uses the Prisma Client from `packages/db`
    // and respects the multi-tenancy (schema-per-tenant) strategy.
    // This might involve a custom adapter or specific Prisma client instance.
    // For now, this is a standard setup.
    //
    // useMigrations: true, // Recommended for production, ensures Prisma migrations are applied
    // prismaClient_DEPRECATED: new PrismaClient({
    //   datasources: {
    //     db: {
    //       url: process.env.KEYSTONE_DATABASE_URL || process.env.DATABASE_URL!,
    //     },
    //   },
    // }),
    // The above prismaClient_DEPRECATED is how you might pass a specific client,
    // but actual integration with packages/db needs to be more robust for multi-tenancy.
  },
  lists: {
    Post: list({
      fields: {
        title: text({ validation: { isRequired: true } }),
        content: text({ ui: { displayMode: 'textarea' } }), // Consider using 'document' field for rich text
        published: checkbox({ defaultValue: false }),
        tenantId: text({
          // This field is crucial for multi-tenancy.
          // It should likely be set programmatically and not directly editable by most users.
          // Access control will be vital here.
          label: 'Tenant ID',
          isIndexed: 'unique', // Or 'true' if multiple posts can share a tenantId but it's indexed
          ui: {
            itemView: { fieldMode: 'read' }, // Example: make it read-only in item view
            listView: { fieldMode: 'read' }, // Example: make it read-only in list view
          }
        }),
        createdAt: timestamp({
          defaultValue: { kind: 'now' },
          ui: { itemView: { fieldMode: 'read' } },
        }),
        updatedAt: timestamp({
          db: { updatedAt: true },
          ui: { itemView: { fieldMode: 'read' } },
        }),
        // If you had a Tenant list:
        // tenant: relationship({ ref: 'Tenant.posts', many: false }),
      },
      // Access control to be defined later, especially for tenantId
      // access: { ... }
    }),
    // Example of a Tenant list if you manage tenants via Keystone
    // Tenant: list({
    //   fields: {
    //     name: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    //     // other tenant specific fields
    //     posts: relationship({ ref: 'Post.tenant', many: true }),
    //   },
    // }),
  },
  // Session store and session secret configuration will be needed for auth.
  // For now, using a basic in-memory session store for simplicity.
  // session: { ... } // We will configure auth and sessions later.
  ui: {
    // Show the Admin UI only for those who have session access
    isAccessAllowed: (context) => !!context.session,
  },
  // Further configuration for storage, server, etc., will go here.
});
