import "../Our Service/Services.css";
import uiux from "../../../public/uiuxdesign.png"
import webFlow from "../../../public/webflow.png"
import marketing from "../../../public/marketing.png"
import branding from "../../../public/branding.png"
import Image from "next/image";
const CatSecServices = () => {
console.log(uiux)
    const serviceList = [
        {
            'icon': uiux,
            "name": "UIUX Design",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        },
        {
            'icon': webFlow,
            "name": "Webflow devlopment",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        },
        {
            'icon': marketing,
            "name": "Marketing",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        },
        {
            'icon': branding,
            "name": "Branding",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        },
    ]


  return (
    <div className="pt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
      {serviceList.map((service)=><div key={service?.icon} className="srsCardPr py-8 px-6 rounded-2xl">
        <div className="p-5 rounded-2xl w-[100px] srsIconBox mb-6">
          <Image width={60} height={60} src={service?.icon} alt={service?.name}/>
        </div>
        <h4 className="text-2xl text-black leading-[120%] pb-4">
        {service?.name}
        </h4>
        <p className="text-base text-[#1C1C57] pb-4">
            {service?.description}
        </p>
      </div>)}
    </div>
  );
};

export default CatSecServices;
