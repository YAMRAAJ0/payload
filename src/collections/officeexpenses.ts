import { CollectionConfig } from "payload";
const OfficeExpenses: CollectionConfig = {
  slug: "officeexpenses",
  admin: {
    useAsTitle: "title",
    group: "Finance",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Expense Title",
    },
    {
      name: "date",
      type: "date",
      required: true,
      defaultValue: new Date(),
    },
    {
      name: "amount",
      type: "number",
      required: true,
      label: "Amount (₹)",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Office Supplies", value: "office_supplies" },
        { label: "Rent", value: "rent" },
        { label: "Utilities", value: "utilities" },
        { label: "Maintenance", value: "maintenance" },
        { label: "Miscellaneous", value: "miscellaneous" },
      ],
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Expense Description",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
      ],
    },
    {
      name: "invoice",
      type: "upload",
      relationTo: "media",
      label: "Invoice/Receipt",
    },
    {
      name: "notes",
      type: "textarea",
      label: "Additional Notes",
    },
  ],
};
export default OfficeExpenses;
