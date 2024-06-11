import AboutMe from "./Components/About Me/AboutMe";
import HeroArea from "./Components/HeroArea";
import OurService from "./Components/Our Service/OurService";
import TrustedComapny from "./Components/TrustedCompany/TrustedComapny";

export default function Home() {
  return (
    <>
      <HeroArea />
      <TrustedComapny />
      <OurService />
      <svg
        width="1440"
        height="130"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 129.842V0.568253H1440L0 129.842Z" fill="#F6F8FF" />
      </svg>
      <AboutMe/>
    </>
  );
}
