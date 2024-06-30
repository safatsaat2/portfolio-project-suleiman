import AboutMe from "./Components/About Me/AboutMe";
import HeroArea from "./Components/HeroArea";
import MyExperience from "./Components/My Experience/MyExperience";
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
      <AboutMe />
      <svg
        width="1940"
        height="131"
        viewBox="0 0 1440 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0.842285V130.116H0L1440 0.842285Z" fill="#F6F8FF" />
      </svg>
      <MyExperience />
      <svg
        width="1440"
        height="130"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 129.842V0.568253H1440L0 129.842Z" fill="#F6F8FF" />
      </svg>
    </>
  );
}
