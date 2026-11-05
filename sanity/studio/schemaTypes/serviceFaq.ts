
import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceFaq",
  title: "Service FAQ",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "FAQ Title",
      type: "string",
    }),

    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          name: "faqItem",
          title: "FAQ Item",
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});
