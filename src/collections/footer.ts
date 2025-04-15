import { CollectionConfig } from "payload";

const Footer: CollectionConfig = {
  slug: "footer1",
  labels: {
    singular: "Footer Item",
    plural: "Footer Items",
  },
  admin: {
    useAsTitle: "title", 
  },
  fields: [
    {
      name: "title", 
      type: "text",
      required: true,
      label: "Title",
    },
    {
      name: "brand",
      type: "group",
      label: "Brand Information",
      fields: [
        { name: "name", type: "text", required: true, label: "Brand Name" },
        { name: "logo", type: "upload", relationTo: "media", label: "Logo URL" },
        { name: "address", type: "textarea", label: "Address" },
        { name: "email", type: "email", label: "Email" },
        {
          name: "phone",
          type: "array",
          label: "Phone Numbers",
          fields: [{ name: "number", type: "text", label: "Phone Number" }],
        },
      ],
    },
    {
      name: "socials",
      type: "array",
      label: "Social Links",
      fields: [
        { name: "platform", type: "text", required: true, label: "Platform" },
        { name: "url", type: "text", required: true, label: "URL" },
        { name: "icon", type: "upload", relationTo: "media", label: "Icon" },
      ],
    },
    {
      name: "sections",
      type: "array",
      label: "Footer Sections",
      fields: [
        { name: "title", type: "text", required: true, label: "Section Title" },
        {
          name: "links",
          type: "array",
          label: "Section Links",
          fields: [
            { name: "label", type: "text", required: true, label: "Link Label" },
            { name: "href", type: "text", required: true, label: "Link URL" },
          ],
        },
      ],
    },
    {
      name: "copyright",
      type: "text",
      label: "Copyright Text",
      required: true,
    },
  ],
};

export default Footer;
