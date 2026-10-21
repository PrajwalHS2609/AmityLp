
import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeSeo",
  title: "Home SEO Metadata",
  type: "document",

  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) => Rule.required().max(70),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),

    defineField({
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      initialValue: "https://prizmaacademy.com/",
    }),

    defineField({
      name: "ogImage",
      title: "Social Sharing Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
