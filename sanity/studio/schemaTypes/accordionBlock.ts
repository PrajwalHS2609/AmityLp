import { defineType, defineField } from "sanity";

export default defineType({
  name: "accordionBlock",
  title: "Accordion",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Accordion Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Accordion Content",
      type: "array",
      of: [{ type: "block" }], // Rich text content inside accordion
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return {
        title: `📂 ${title || "Untitled Accordion"}`,
      };
    },
  },
});
