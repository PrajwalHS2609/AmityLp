
import HomeApproval from "./../Components/HomePage/HomeApproval/HomeApproval";
import HomeHeroSection from "./../Components/HomePage/HomeHeroSection/HomeHeroSection";
import HomeExpertise from "./../Components/HomePage/HomeExpertise/HomeExpertise";
import HomeWorth from "./../Components/HomePage/HomeWorth/HomeWorth";
import HomeDifferent from "./../Components/HomePage/HomeDifferent/HomeDifferent";
import HomeFaq from "./../Components/HomePage/HomeFaq/HomeFaq";
import HomeAdmission from "./../Components/HomePage/HomeAdmission/HomeAdmission";
import HomeSpecialization from "./../Components/HomePage/HomeSpecilization/HomeSpecialization";
import HomeFee from "./../Components/HomePage/HomeFee/HomeFee";
import HomeAdapts from "./../Components/HomePage/HomeAdapts/HomeAdapts";
import HomeProgram from "./../Components/HomePage/HomeProgram/HomeProgram";
import HomeEligibility from "./../Components/HomePage/HomeEligibility/HomeEligibility";
import HomePartner from "./../Components/HomePage/HomePartner/HomePartner";
import HomeFaculty from "./../Components/HomePage/HomeFaculty/HomeFaculty";

import HomeContent from "./../Components/HomeConrtent/HomeContent";
import Keyword from "./../Components/HomeKeyword/HomeKeyword";

// Sanity Client
import { client } from "@/Components/sanity/client";

// =====================================
// SANITY QUERIES
// =====================================

// Home Content
const homeContentQuery = `
  *[_type == "homeContent"][0]{
    initialContent,
    expandedContent
  }
`;

// FAQ
const faqQuery = `
  *[_type == "homeFaq"][0]{
    title,
    faqs[]{
      _key,
      question,
      answer
    }
  }
`;

// Keywords
const keywordsQuery = `
  *[_type == "homeKeywords"][0]{
    keywords
  }
`;

// =====================================
// HOME PAGE
// =====================================

export default async function HomePage() {
  // Fetch all three Sanity documents
  const [homeContentData, faqData, keywordsData] =
    await Promise.all([
      client.fetch(
        homeContentQuery,
        {},
        { cache: "no-store" }
      ),
      client.fetch(
        faqQuery,
        {},
        { cache: "no-store" }
      ),
      client.fetch(
        keywordsQuery,
        {},
        { cache: "no-store" }
      ),
    ]);

  // Debugging - visible in VS Code terminal
  console.log("HOME CONTENT:", homeContentData);
  console.log("FAQ DATA:", faqData);
  console.log("KEYWORDS DATA:", keywordsData);

  return (
    <div>
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Home Sections */}
      <HomeApproval />
      <HomeExpertise />
      <HomeDifferent />
      <HomeWorth />
      <HomeProgram />
      <HomeSpecialization />
      <HomeAdapts />
      <HomeFee />
      <HomeEligibility />
      <HomeFaculty />
      <HomePartner />
      <HomeAdmission />

      {/* FAQ from Sanity */}
      <HomeFaq data={faqData} />

      {/* Home Content from Sanity */}
      <HomeContent data={homeContentData} />

      {/* Keywords from Sanity */}
      <Keyword data={keywordsData} />
    </div>
  );
}
