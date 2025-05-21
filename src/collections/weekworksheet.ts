import { CollectionConfig } from "payload";

const WeekWorksheet: CollectionConfig = {
  slug: "weekworksheet",
  admin: {
    useAsTitle: "employeeName",
  },
  fields: [
    {
      name: "employeeName",
      type: "text",
      required: true,
      label: "Employee Name"
    },
    {
      name: "weekStartDate",
      type: "date",
      required: true,
      label: "Week Start Date (Monday)",
      admin: {
        position: "sidebar"
      }
    },
    {
      name: "monday",
      type: "group",
      label: "Monday",
      fields: [
        {
          name: "tasks",
          type: "textarea",
          label: "Tasks Performed"
        },
        {
          name: "hours",
          type: "number",
          label: "Hours Worked"
        },
        {
          name: "notes",
          type: "textarea",
          label: "Additional Notes"
        }
      ]
    },
    {
      name: "tuesday",
      type: "group",
      label: "Tuesday",
      fields: [
        {
          name: "tasks",
          type: "textarea",
          label: "Tasks Performed"
        },
        {
          name: "hours",
          type: "number",
          label: "Hours Worked"
        },
        {
          name: "notes",
          type: "textarea",
          label: "Additional Notes"
        }
      ]
    },
    {
      name: "wednesday",
      type: "group",
      label: "Wednesday",
      fields: [
        {
          name: "tasks",
          type: "textarea",
          label: "Tasks Performed"
        },
        {
          name: "hours",
          type: "number",
          label: "Hours Worked"
        },
        {
          name: "notes",
          type: "textarea",
          label: "Additional Notes"
        }
      ]
    },
    {
      name: "thursday",
      type: "group",
      label: "Thursday",
      fields: [
        {
          name: "tasks",
          type: "textarea",
          label: "Tasks Performed"
        },
        {
          name: "hours",
          type: "number",
          label: "Hours Worked"
        },
        {
          name: "notes",
          type: "textarea",
          label: "Additional Notes"
        }
      ]
    },
    {
      name: "friday",
      type: "group",
      label: "Friday",
      fields: [
        {
          name: "tasks",
          type: "textarea",
          label: "Tasks Performed"
        },
        {
          name: "hours",
          type: "number",
          label: "Hours Worked"
        },
        {
          name: "notes",
          type: "textarea",
          label: "Additional Notes"
        }
      ]
    },
    {
      name: "totalHours",
      type: "number",
      label: "Total Weekly Hours",
      admin: {
        position: "sidebar"
      }
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      options: [
        { label: "Pending Review", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" }
      ],
      defaultValue: "pending"
    }
  ],
};

export default WeekWorksheet;
