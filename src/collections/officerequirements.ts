import { CollectionConfig } from "payload";

const OfficeRequirements: CollectionConfig = {
  slug: "officerequirements",
  admin: {
    useAsTitle: "title",
    group: "Office Management",
  },
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        if (req.user && !data.submittedBy) {
          return {
            ...data,
            submittedBy: req.user.id,
          };
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Requirement Title",
    },
    {
      name: "submittedBy",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      label: "Submitted By",
      access: {
        read: () => true,
        update: () => false,
      },
    },
    {
      name: "department",
      type: "select",
      required: true,
      options: [
        { label: "HR", value: "hr" },
        { label: "IT", value: "it" },
        { label: "Finance", value: "finance" },
        { label: "Operations", value: "operations" },
        { label: "Marketing", value: "marketing" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "priority",
      type: "select",
      required: true,
      defaultValue: "medium",
      options: [
        { label: "High", value: "high" },
        { label: "Medium", value: "medium" },
        { label: "Low", value: "low" },
      ],
    },
    {
      name: "requiredBy",
      type: "date",
      required: true,
      label: "Required By Date",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Office Supplies", value: "office_supplies" },
        { label: "Equipment", value: "equipment" },
        { label: "Software", value: "software" },
        { label: "Furniture", value: "furniture" },
        { label: "Maintenance", value: "maintenance" },
        { label: "Miscellaneous", value: "miscellaneous" },
      ],
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Requirement Description",
    },
    {
      name: "quantity",
      type: "number",
      required: true,
      label: "Quantity Required",
    },
    {
      name: "estimatedCost",
      type: "number",
      required: true,
      label: "Estimated Cost (₹)",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending Approval", value: "pending_approval" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
        { label: "In Progress", value: "in_progress" },
        { label: "Completed", value: "completed" },
      ],
    },
    {
      name: "approver",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      label: "Approved By",
    },
    {
      name: "approvalDate",
      type: "date",
      label: "Approval Date",
    },
    {
      name: "document",
      type: "upload",
      relationTo: "media",
      label: "Supporting Documents",
    },
    {
      name: "notes",
      type: "textarea",
      label: "Additional Notes",
    },
  ],
};

export default OfficeRequirements;
