import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeKeywords",
  title: "Home Keywords",
  type: "document",

  fields: [
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "keywords",
    },
    prepare({ title }) {
      return {
        title: "Home Keywords",
        subtitle: title ? `${title.length} keywords` : "No keywords",
      };
    },
  },
});
