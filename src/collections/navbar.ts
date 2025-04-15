import { CollectionConfig } from "payload";

const Navbar: CollectionConfig = {
  slug: "navbar",
  labels: {
    singular: "Navbar Item",
    plural: "Navbar Items",
  },
  admin: {
    useAsTitle: "label",
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: "Navigation Label",
    },
    {
      name: "url",
      type: "text",
      label: "Navigation URL",
    },
    {
      name: "order",
      type: "number",
      required: true,
      label: "Display Order",
      defaultValue: 0,
    },
    {
      name: "dropdown",
      type: "array",
      label: "Dropdown Items",
      fields: [
        {
          name: "category",
          type: "select",
          label: "Category",
          required: true,
          options: [
            { label: "Domain-based", value: "domain_based" },
            { label: "Role-based", value: "role_based" },
          ],
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Dropdown Icon",
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Dropdown Label",
        },
        {
          name: "details",
          type: "textarea",
          label: "Dropdown Details",
        },
        {
          name: "url",
          type: "text",
          label: "Dropdown URL",
          defaultValue: "/courses/",
        },
      ],
    },
  ],
};

export default Navbar;
