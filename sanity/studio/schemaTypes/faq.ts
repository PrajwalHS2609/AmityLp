import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeFaq",
  title: "Home FAQ",
  type: "document",

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
        defineField({
          name: "faq",
          title: "FAQ",
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),

            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});