import { CollectionConfig } from "payload";

const ListCards: CollectionConfig = {
  slug: "list",
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
      ],
    },
  ],
};

export default ListCards;
