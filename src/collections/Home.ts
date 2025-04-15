// payload/globals/Home.ts
import { CollectionConfig } from "payload";
const Home: CollectionConfig = {
  slug: "home",
  labels:{
    singular: "home",
    plural: "home",
  },
  fields: [
    {
      name: "heroTitle",
      type: "text",
      label: "Hero Title",
      required: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media", 
    },
    {
        name: "heroetext",
        type: "text",
        label: "Hero text",
        required: true,
      },
    {
      name: "features",
      type: "array",
      label: "Features",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
  ],
};

export default Home;
