import { CollectionConfig } from "payload";

const GridCards: CollectionConfig = {
  slug: "grid-cards",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "textarea",
      required: true,
    },
    {
      name: "cards",
      type: "array",
      label: "Grid Cards",
      required: true,
      fields: [
        {
          name: "cardTitle",
          type: "text",
          required: true,
        },
        {
          name: "cardDescription",
          type: "textarea",
          required: true,
        },
        {
          name: "listItems",
          type: "array",
          label: "Card List Items",
          fields: [
            {
              name: "liTitle",
              type: "text",
              required: true,
            },
            {
              name: "liText",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default GridCards;
