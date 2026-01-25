import HomeApproval from './../Components/HomePage/HomeApproval/HomeApproval';
import HomeHeroSection from './../Components/HomePage/HomeHeroSection/HomeHeroSection';
import HomeExpertise from './../Components/HomePage/HomeExpertise/HomeExpertise';
import HomeWorth from './../Components/HomePage/HomeWorth/HomeWorth';
import HomeDifferent from './../Components/HomePage/HomeDifferent/HomeDifferent';
import HomeFaq from './../Components/HomePage/HomeFaq/HomeFaq';
import HomeAdmission from './../Components/HomePage/HomeAdmission/HomeAdmission';
import HomeSpecialization from './../Components/HomePage/HomeSpecilization/HomeSpecialization';
import HomeFee from './../Components/HomePage/HomeFee/HomeFee';
import HomeAdapts from './../Components/HomePage/HomeAdapts/HomeAdapts';
import HomeProgram from './../Components/HomePage/HomeProgram/HomeProgram';
import HomeEligibility from './../Components/HomePage/HomeEligibility/HomeEligibility';
import HomePartner from './../Components/HomePage/HomePartner/HomePartner';
import HomeFaculty from './../Components/HomePage/HomeFaculty/HomeFaculty';

export default function HomePage() {
  return (
    <div>
      <HomeHeroSection />
      <HomeApproval />
      <HomeExpertise />
      <HomeDifferent />
      <HomeWorth />
      <HomeProgram />
      <HomeSpecialization />
      <HomeAdapts />
      <HomeFee />
      <HomeEligibility />
      <HomeFaculty/>
      <HomePartner />
      <HomeAdmission />
      <HomeFaq />
    </div>
  )
}