import { CollectionConfig } from 'payload'

const Cards: CollectionConfig = {
  slug: 'cards',
  admin: {
    useAsTitle: 'title',
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
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'points',
          type: 'array',
          label: 'List Points',
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
        {
          name: 'likeText',
          type: 'text',
          label: 'Bottom Like Text',
          defaultValue: 'Did you like it?',
        },
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

export default Cards
