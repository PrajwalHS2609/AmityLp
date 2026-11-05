
import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceKeywords",
  title: "Service Keywords",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Keywords Title",
      type: "string",
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
