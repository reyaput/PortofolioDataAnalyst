import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience & Education',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      description: 'Contoh: Data Analyst Intern',
    }),
    defineField({
      name: 'company',
      title: 'Company / Institution',
      type: 'string',
      description: 'Contoh: DANA Indonesia',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Kosongkan jika masih berlangsung (Present)',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }], // Rich text agar bisa bullet points
    }),
    defineField({
      name: 'isEducation',
      title: 'Is this Education?',
      type: 'boolean',
      initialValue: false,
      description: 'Centang jika ini adalah Pendidikan (Universitas), bukan Pekerjaan.',
    }),
  ],
})