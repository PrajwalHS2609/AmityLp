
"use client";
import "./SanityContent.css"
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { homePortableTextComponents } from "../portableTextComponents";
import HomeWorth from "../HomePage/HomeWorth/HomeWorth";
import HomeProgram from "../HomePage/HomeProgram/HomeProgram";
import HomeSpecialization from "../HomePage/HomeSpecilization/HomeSpecialization";
import HomeAdapts from "../HomePage/HomeAdapts/HomeAdapts";
import HomeFee from "../HomePage/HomeFee/HomeFee";
import HomeApproval from "../HomePage/HomeApproval/HomeApproval";
import HomeExpertise from "../HomePage/HomeExpertise/HomeExpertise";
import HomeEligibility from "../HomePage/HomeEligibility/HomeEligibility";
import HomeFaculty from "../HomePage/HomeFaculty/HomeFaculty";
import HomePartner from "../HomePage/HomePartner/HomePartner";
import HomeAdmission from "../HomePage/HomeAdmission/HomeAdmission";
import ContentHeader from './../ContentHeader/ContentHeader';


export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: {
    cells: string[];
  }[];
};

export type ServiceContentType = {
  _id: string;
  title: string;
  slug: string | { current: string };
  language: string;

  body1?: PortableTextBlock[];
  body2?: PortableTextBlock[];

  mainImage?: {
    asset?: {
      url?: string;
    };
  };

  youtubeVideoUrl?: string;
  customTable?: CustomTable;

  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
};

function getYoutubeEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();

    let videoId = "";

    if (
      hostname === "youtu.be" ||
      hostname === "www.youtu.be"
    ) {
      videoId = parsedUrl.pathname.split("/")[1];
    } else if (
      hostname === "youtube.com" ||
      hostname.endsWith(".youtube.com")
    ) {
      if (parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/")[2];
      } else if (
        parsedUrl.pathname.startsWith("/embed/")
      ) {
        videoId = parsedUrl.pathname.split("/")[2];
      } else {
        videoId = parsedUrl.searchParams.get("v") || "";
      }
    }

    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return null;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
}

export default function ServiceContent({
  content,
}: {
  content: ServiceContentType;
}) {
  const imageUrl = content.mainImage?.asset?.url;

  const youtubeEmbedUrl = content.youtubeVideoUrl
    ? getYoutubeEmbedUrl(content.youtubeVideoUrl)
    : null;

  return (
    <div className="main-container service-wrapper1">
      {/* HEADER */}
      {imageUrl && (
  <ContentHeader
    img={imageUrl}
    heading={content.title}
  />
      )}

      {/* PAGE TITLE */}
      {/* <h1>{content.title}</h1> */}

      {/* BODY 1 */}
      {content.body1 && (
        <div className="slugContent-wrapper">
          <div className="slugContent-container">
            <PortableText
              value={content.body1}
              components={homePortableTextComponents}
            />
          </div>
        </div>
      )}

      {/* HOME COMPONENTS */}
      <div className="head-container">
        
  <HomeApproval />
      <HomeExpertise />
      {/* <HomeDifferent /> */}
      <HomeWorth />
      <HomeProgram />
      <HomeSpecialization />
      <HomeAdapts />
      <HomeFee />
      <HomeEligibility />
      <HomeFaculty />
      <HomePartner />
      <HomeAdmission />
        {/* YOUTUBE VIDEO */}
        {youtubeEmbedUrl && (
          <div className="youtube-container">
            <iframe
              width="100%"
              height="500"
              src={youtubeEmbedUrl}
              title={content.title}
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* BODY 2 */}
      {content.body2 && (
        <div className="slugContent-wrapper">
          <div className="slugContent-container">
            <PortableText
              value={content.body2}
              components={homePortableTextComponents}
            />
          </div>
        </div>
      )}

      {/* CUSTOM TABLE */}
      {content.customTable && (
        <div className="slugContent-wrapper">
          <div className="slugContent-container">
            <div className="custom-table">
              {content.customTable.title && (
                <h3>{content.customTable.title}</h3>
              )}

              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead>
                    <tr>
                      {content.customTable.headers?.map(
                        (header, index) => (
                          <th key={index}>{header}</th>
                        )
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    {content.customTable.rows?.map(
                      (row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.cells?.map(
                            (cell, cellIndex) => (
                              <td key={cellIndex}>
                                {cell}
                              </td>
                            )
                          )}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
