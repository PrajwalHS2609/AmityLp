
import { defineField, defineType } from "sanity";

export default defineType({
  name: "ServiceCategory",
  title: "Service Category",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

  

    defineField({
      name: "body1",
      title: "Body 1",
      type: "blockContent",
    }),

    defineField({
      name: "body2",
      title: "Body 2",
      type: "blockContent",
    }),

    defineField({
      name: "customTable",
      title: "Custom Table",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Table Title",
          type: "string",
        }),

        defineField({
          name: "headers",
          title: "Table Headers",
          type: "array",
          of: [{ type: "string" }],
        }),

        defineField({
          name: "rows",
          title: "Table Rows",
          type: "array",
          of: [
            {
              type: "object",
              name: "tableRow",
              title: "Row",
              fields: [
                {
                  name: "cells",
                  title: "Cells",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        }),
      ],
    }),

    // ===================================
    // SEO METADATA
    // ===================================

    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "SEO title displayed in Google search results",
      validation: (Rule) => Rule.max(70),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "SEO description displayed in Google search results",
      validation: (Rule) => Rule.max(160),
    }),

    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description:
        "Enter the preferred full URL, e.g. https://uaeattestationbangalore.com/",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
    }),

    defineField({
      name: "youtubeVideoUrl",
      title: "YouTube Video URL",
      type: "url",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "language",
      media: "mainImage",
    },
  },
});
