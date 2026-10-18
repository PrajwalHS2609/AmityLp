import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'highlightBlock',
  title: 'Highlight Box',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content.0.children.0.text',
    },
    prepare({title, content}) {
      return {
        title: title || 'Highlight Box',
        subtitle: content || '',
      }
    },
  },
})
