import { defineType, defineField } from "sanity";

export default defineType({
  name: "carouselBlock",
  title: "Carousel Block",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Section Title (optional)",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Carousel Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Short description for accessibility.",
            },
            {
              name: "caption",
              title: "Caption (optional)",
              type: "string",
            },
            {
              name: "link",
              title: "Image Link (optional)",
              type: "url",
              description: "Add a URL to make the image clickable.",
            },
          ],
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
    prepare({ title, media }) {
      return {
        title: title || "Carousel Block",
        media,
      };
    },
  },
});
