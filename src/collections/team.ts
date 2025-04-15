import { CollectionConfig } from 'payload'

const team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'team',
    plural: 'teams',
  },
  fields: [
    {
      name: 'title',      
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'member',      
      type: 'array',
      label: 'List Member',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'post',
          type: 'text',
        },
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'Link',      
          type: 'array',
          label: 'Link',
          fields: [
            {
              name: 'Link',
              type: 'text',
            },
          ],
        }        
      ],
    },
  ],
};

export default team;
