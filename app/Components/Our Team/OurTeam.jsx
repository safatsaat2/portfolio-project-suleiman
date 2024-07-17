import React from 'react';
import "./OurTeam.css"
import Marquee from 'react-fast-marquee';
import OurTeamCard from './OurTeamCard';

const OurTeam = () => {
    const members = [
        {
            name:"Md Kawsar Ahmed",
            title: "SEO Specialist",
            img: "/Kawser.jpg"
        },
        {
            name:"Abu Sayed Masum",
            title: "Data Entry Specialist",
            img: "/Masum.jpg"
        },
        {
            name:"Sakibur Rahman Safat",
            title: "Full Stack Developer",
            img: "/Safat.png"
        },
        {
            name:"Shihab Rahman",
            title: "Brand Promoter",
            img: "/Shihab.jpg"
        },
        {
            name:"Md Maruf Ahmed",
            title: "YouTube Specialist",
            img: "/Maruf.jpg"
        },
        {
            name:"Md Ibrahim Ahmed",
            title: "Digital Marketer",
            img: "/Ibrahim.jpg"
        },
    ]
    return (
        <div className='srs_team py-32 text-center px-5'>
            <h2 className="text-center text-white text-4xl">
            My Team
        </h2>

            <Marquee speed={80} >
                {members.map((member)=> <OurTeamCard key={member?.name} name={member?.name} title={member?.title} img={member?.img} />)}
            </Marquee>
        </div>
    );
};

export default OurTeam;