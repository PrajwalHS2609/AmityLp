
import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeContent",
  title: "Home Content",
  type: "document",

  fields: [
    defineField({
      name: "initialContent",
      title: "Initial Content",
      description: "Content visible before clicking Read More",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "expandedContent",
      title: "Read More Content",
      description: "Content displayed after clicking Read More",
      type: "blockContent",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Home Content",
      };
    },
  },
});
