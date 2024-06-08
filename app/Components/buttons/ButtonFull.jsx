import React from 'react';

const ButtonFull = ({text, link}) => {
    return (
       
            <a className="text-white px-6 py-4 bg-[#078D84] rounded-lg" href={link}>
                        {text}
                        </a>
        
    );
};

export default ButtonFull;