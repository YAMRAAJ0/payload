import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: ({ req: { user } }) => {
      // Only allow users with 'owner' or 'employee' role to create
      return user?.roles?.includes('owner') || user?.roles?.includes('employee') || false
    },
    read: ({ req: { user }, data }) => {
      // Allow users with 'owner' or 'employee' role to view all users
      // Allow regular users to view their own profile
      return (user?.roles?.includes('owner') || user?.roles?.includes('employee')) || user?.id === data?.id
    },
    update: ({ req: { user } }) => {
      // Only allow users with 'owner' or 'employee' role to update
      return user?.roles?.includes('owner') || user?.roles?.includes('employee') || false
    },
    delete: ({ req: { user } }) => {
      // Only allow users with 'owner' role to delete
      return user?.roles?.includes('owner') || false
    }
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Employee', value: 'employee' }
      ],
      required: true,
      defaultValue: ['employee'],
      access: {
        update: ({ req: { user } }) => {
          // Only allow users with 'owner' role to update roles
          return Boolean(user?.roles?.includes('owner'))
        }
      }
    },
    {
      name: 'firstName',
      type: 'text',
      required: true
    },
    {
      name: 'department',
      type: 'text',
    },
    {
      name: 'joiningDate',
      type: 'date',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'address',
      type: 'textarea',
    }
  ],
}
