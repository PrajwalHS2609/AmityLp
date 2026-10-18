import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from "./schemaTypes";


export default defineConfig({
  name: 'default',
  title: 'Amity-Prizma',

  projectId: 'z81n7ml0',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
