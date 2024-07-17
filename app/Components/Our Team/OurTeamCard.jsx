import Image from 'next/image';
import React from 'react';

const OurTeamCard = ({name, img, title}) => {
    return (
        <div className='flex mt-10 items-center justify-center gap-3 p-2 h-20 rounded-md bg-white mx-5'>
                    <Image src={img} className='rounded-md' width={50} height={50}/>
                    <div>
                        <p className='text-xl font-bold mb-1'>{name}</p>
                        <p className='text-sm font-medium'>{title}</p>

                    </div>
                </div>
    );
};

export default OurTeamCard;