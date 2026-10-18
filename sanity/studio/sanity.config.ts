import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure';
import { schemaTypes } from "./schemaTypes";
import { visionTool } from '@sanity/vision';


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
