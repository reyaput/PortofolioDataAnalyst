import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Judul proyek, misal: Sales Dashboard Q3',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Agar bisa crop gambar dashboard dengan pas
      },
    }),
    defineField({
      name: 'impact',
      title: 'Impact Metric / Summary',
      type: 'text',
      rows: 2,
      description: 'Satu kalimat singkat yang menjual. Contoh: Reduced churn by 15%',
    }),
    defineField({
      name: 'tags',
      title: 'Tech Stack Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Contoh: Python, SQL, Tableau',
    }),
    defineField({
      name: 'projectLink',
      title: 'Link to Project (GitHub/Tableau)',
      type: 'url',
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Repository Link',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
  ],
})