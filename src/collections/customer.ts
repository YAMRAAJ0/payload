import { CollectionConfig } from 'payload'

const customer: CollectionConfig = {
  slug: 'customer',
  labels: {
    singular: 'Customer',
    plural: 'Customers',
  },
  fields: [
    {
      name: 'title',      
      type: 'text',
    },
    {
      name: 'logos',      
      type: 'array',
      label: 'List Points',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};

export default customer;
