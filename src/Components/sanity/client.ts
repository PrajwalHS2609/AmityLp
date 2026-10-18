import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "z81n7ml0",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: false,
});
export async function sanityFetch({ query }: { query: string }) {
  const data = await client.fetch(query)
  return { data }
}