
"use client";

import React, { useState } from "react";
import { PortableText } from "@portabletext/react";
import { homePortableTextComponents } from "@/Components/portableTextComponents";
import "./HomeContent.css";

const HomeContent = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const initialContent = Array.isArray(data?.initialContent)
    ? data.initialContent
    : [];

  const expandedContent = Array.isArray(data?.expandedContent)
    ? data.expandedContent
    : [];

  return (
    <section className="contentHead">
      <div className="contentHead-wrapper">
        {initialContent.length > 0 && (
          <div className="contentHead-content">
            <PortableText
              value={initialContent}
              components={homePortableTextComponents}
            />
          </div>
        )}

        {expanded && expandedContent.length > 0 && (
          <div className="contentHead-content">
            <PortableText
              value={expandedContent}
              components={homePortableTextComponents}
            />
          </div>
        )}

        {expandedContent.length > 0 && (
          <button
            type="button"
            className="readMoreBtn"
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
        )}
      </div>
    </section>
  );
};

export default HomeContent;
