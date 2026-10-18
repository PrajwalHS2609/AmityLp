import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customTable',
  title: 'Custom Table',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Table Title',
      type: 'string',
    }),
    defineField({
      name: 'headers',
      title: 'Table Headers',
      type: 'array',
      of: [{type: 'string'}], // Example: ["Visa Type", "Average Price Range", "Processing Time", "Medical Test Required"]
    }),
    defineField({
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tableRow',
          title: 'Row',
          fields: [
            {
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{type: 'string'}], // Example: ["Employment Visa", "₹6,000 – ₹8,500", "5-7 days", "Yes"]
            },
          ],
        },
      ],
    }),
  ],
})
