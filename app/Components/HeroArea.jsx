import Image from "next/image";
import  "../Components/HeroArea.css"
import HeroImg from "../../public/hero image.png"
const HeroArea = () => {
    return (
        <div className="srsHeroParent pt-28">
            <div className="srsContentParent max-w-[1280px] flex mx-auto items-center justify-center gap-20">
                <div className="srsTextContent pb-20 flex flex-col gap-6 max-w-[584px]">
                    <p className="text-base text-[#1C1C57]">Hi there,My name is Jane Cooper</p>
                    <h2 className="text-[56px] text-[#1C1C57]">Showcase Your Work with Airfolio's Creative Solutions</h2>
                    <p className="text-base text-[#1C1C57]">Create stunning portfolios and websites with Airfolio's UI/UX design and Webflow development services.</p>
                    <div className="flex items-center  gap-4">
                        <a className="text-white px-6 py-4 bg-[#078D84] rounded-lg" href="#">
                        Hire Me
                        </a>
                        <a className="text-[#078D84] px-6 py-4 bg-transparent border border-[#078D84]  rounded-lg" href="#">
                        Portfolio
                        </a>
                    </div>
                </div>
                <div className="srsImageArea max-w-[616px]">
                    <Image src={HeroImg} alt="hero image"/>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;