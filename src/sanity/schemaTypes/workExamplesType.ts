// Write a sanity.io schema type for a workExamples document type. The workExamples document type should have the following fields: title, description, website link, and images

import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const workExamplesType = defineType({
  name: 'workExamples',
  title: 'Work Examples',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
            source: 'title',
        },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'websiteLink',
      type: 'url',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
});