import React from 'react';

const ButtonHalf = ({text, link}) => {
    return (
       
        <a className="text-[#078D84] px-6 py-4 bg-transparent border border-[#078D84]  rounded-lg" href={link}>
        {text}
        </a>
        
    );
};

export default ButtonHalf;