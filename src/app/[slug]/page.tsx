import { client } from "@/Components/sanity/client";
import ServiceContent from "@/Components/SanityContent/SanityContent";
import type { Metadata } from "next";
import { notFound } from "next/navigation";


// Change this path to your actual SanityService component location

const serviceQuery = `
  *[
    _type == "ServiceCategory" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    language,
    body1,
    body2,
    "mainImage": {
      "asset": {
        "url": mainImage.asset->url
      }
    },
    customTable,
    youtubeVideoUrl,
    metaTitle,
    metaDescription,
    canonicalUrl
  }
`;

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getService(slug: string) {
  return client.fetch(
    serviceQuery,
    { slug },
    { cache: "no-store" }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Page Not Found",
      robots: { index: false },
    };
  }

  const title = service.metaTitle || service.title;
  const description = service.metaDescription || "";
  const canonical =
    service.canonicalUrl ||
    `https://yourdomain.com/${encodeURIComponent(slug)}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceContent content={service} />;
}
