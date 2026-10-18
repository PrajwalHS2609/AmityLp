
"use client";

import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";

import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import Carousel from "react-bootstrap/Carousel";
import { client } from '@/Components/sanity/client';

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => builder.image(source);

/* ================= TYPES ================= */

interface CustomTableValue {
  title?: string;
  subtitle?: string;
  headers?: string[];
  rows?: {
    _key?: string;
    cells?: string[];
  }[];
  note?: string;
}

interface AccordionBlockValue {
  title?: string;
  content?: PortableTextBlock[];
}

interface FAQValue {
  title?: string;
  question?: string;
  answer?: string | PortableTextBlock[];
  faqs?: {
    _key?: string;
    question?: string;
    answer?: string | PortableTextBlock[];
  }[];
}

interface QuoteBlockValue {
  text?: string;
  author?: string;
}

interface HighlightBlockValue {
  title?: string;
  content?: PortableTextBlock[];
}

interface SEOKeywordsBlockValue {
  title?: string;
  keywords?: string[];
}

interface CarouselImage {
  _key?: string;
  asset?: {
    _ref?: string;
  };
  alt?: string;
  caption?: string;
  link?: string;
}

interface CarouselBlockValue {
  title?: string;
  images?: CarouselImage[];
}

interface AnchorBlockValue {
  id?: string;
  title?: string;
}

/* ================= HELPERS ================= */

const renderRichText = (
  content?: string | PortableTextBlock[]
) => {
  if (typeof content === "string") {
    return <p>{content}</p>;
  }

  if (Array.isArray(content) && content.length > 0) {
    return (
      <PortableText
        value={content}
        components={homePortableTextComponents}
      />
    );
  }

  return null;
};

/* ================= PORTABLE TEXT ================= */

export const homePortableTextComponents: PortableTextComponents = {
  /* ---------- HEADINGS & PARAGRAPHS ---------- */

  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,

    normal: ({ children }) => <p>{children}</p>,

    blockquote: ({ children }) => (
      <blockquote>{children}</blockquote>
    ),
  },

  /* ---------- LISTS ---------- */

  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  /* ---------- INLINE MARKS ---------- */

  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,

    link: ({ children, value }) => {
      const href = String(value?.href || "");

      const isSafe =
        href.startsWith("/") ||
        href.startsWith("#") ||
        /^https?:\/\//i.test(href);

      if (!isSafe) return <>{children}</>;

      const external = /^https?:\/\//i.test(href);

      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },

  /* ================= CUSTOM BLOCKS ================= */

  types: {
    /* ---------- IMAGE ---------- */

    image: ({ value }) => {
      if (!value?.asset) return null;

      const imageUrl = urlFor(value as SanityImageSource)
        .width(1200)
        .auto("format")
        .url();

      const alt = String(value.alt || "Content image");
      const link = typeof value.link === "string" ? value.link : "";
      const safeLink = /^https?:\/\//i.test(link);

      const image = (
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
        />
      );

      return (
        <div className="portableImg">
          {safeLink ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image}
            </a>
          ) : (
            image
          )}
        </div>
      );
    },

    /* ---------- CUSTOM TABLE ---------- */

    customTable: ({ value }) => {
      const table = value as unknown as CustomTableValue;

      if (!table.headers?.length) return null;

      return (
        <div className="content-table-container">
          {(table.title || table.subtitle) && (
            <div className="content-table-heading">
              {table.title && <h2>{table.title}</h2>}
              {table.subtitle && <h3>{table.subtitle}</h3>}
            </div>
          )}

          <div className="content-table-scroll">
            <table className="content-table">
              <thead>
                <tr>
                  {table.headers.map((header, index) => (
                    <th key={index} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {table.rows?.map((row, index) => (
                  <tr key={row._key || index}>
                    {row.cells?.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {table.note && <p>{table.note}</p>}
        </div>
      );
    },

    /* ---------- ACCORDION ---------- */

    accordionBlock: ({ value }) => {
      const accordion =
        value as unknown as AccordionBlockValue;

      if (!accordion.title && !accordion.content?.length) {
        return null;
      }

      return (
        <details className="accordion-item">
          <summary className="accordion-title">
            {accordion.title || "More information"}
          </summary>

          <div className="accordion-content">
            {renderRichText(accordion.content)}
          </div>
        </details>
      );
    },

    /* ---------- FAQ ---------- */

    faq: ({ value }) => {
      const faq = value as unknown as FAQValue;

      const items = faq.faqs?.length
        ? faq.faqs
        : faq.question
          ? [{
              question: faq.question,
              answer: faq.answer,
            }]
          : [];

      if (!items.length) return null;

      return (
        <div className="portable-faq">
          {faq.title && <h2>{faq.title}</h2>}

          {items.map((item, index) => (
            <details
              className="accordion-item"
              key={item._key || index}
            >
              <summary className="accordion-title">
                {item.question}
              </summary>

              <div className="accordion-content">
                {renderRichText(item.answer)}
              </div>
            </details>
          ))}
        </div>
      );
    },

    /* ---------- QUOTE ---------- */

    quoteBlock: ({ value }) => {
      const quote = value as unknown as QuoteBlockValue;

      if (!quote.text) return null;

      return (
        <blockquote className="quote-block">
          <p className="quote-text">{quote.text}</p>

          {quote.author && (
            <cite className="quote-author">
              — {quote.author}
            </cite>
          )}
        </blockquote>
      );
    },

    /* ---------- HIGHLIGHT ---------- */

    highlightBlock: ({ value }) => {
      const highlight =
        value as unknown as HighlightBlockValue;

      if (!highlight.title && !highlight.content?.length) {
        return null;
      }

      return (
        <div className="highlight-box">
          {highlight.title && <h5>{highlight.title}</h5>}

          {renderRichText(highlight.content)}
        </div>
      );
    },

    /* ---------- SEO KEYWORDS ---------- */

    seoKeywordsBlock: ({ value }) => {
      const seo = value as unknown as SEOKeywordsBlockValue;

      if (!seo.keywords?.length) return null;

      return (
        <div className="seo-keywords-block">
          {seo.title && <h2>{seo.title}</h2>}

          <ul className="seo-keywords-list">
            {seo.keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      );
    },

    /* ---------- CAROUSEL ---------- */

    carouselBlock: ({ value }) => {
      const carousel =
        value as unknown as CarouselBlockValue;

      const images = carousel.images?.filter(
        (img) => img.asset?._ref
      ) || [];

      if (!images.length) return null;

      return (
        <div className="carouselContainer">
          {carousel.title && <h2>{carousel.title}</h2>}

          <Carousel interval={3000}>
            {images.map((img, index) => {
              const imageUrl = urlFor(
                img as SanityImageSource
              )
                .width(1200)
                .auto("format")
                .url();

              const image = (
                <img
                  src={imageUrl}
                  alt={img.alt || `Slide ${index + 1}`}
                  className="d-block w-100"
                  loading="lazy"
                />
              );

              const hasSafeLink =
                typeof img.link === "string" &&
                /^https?:\/\//i.test(img.link);

              return (
                <Carousel.Item key={img._key || index}>
                  {hasSafeLink ? (
                    <a
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {image}
                    </a>
                  ) : (
                    image
                  )}

                  {img.caption && (
                    <Carousel.Caption>
                      <h3>{img.caption}</h3>
                    </Carousel.Caption>
                  )}
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      );
    },

    /* ---------- ANCHOR ---------- */

    anchorBlock: ({ value }) => {
      const anchor = value as unknown as AnchorBlockValue;

      if (!anchor.id) return null;

      return (
        <section
          id={anchor.id}
          className="content-anchor"
        >
          {anchor.title && <h2>{anchor.title}</h2>}
        </section>
      );
    },
  },
};
