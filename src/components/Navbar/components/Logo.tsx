import React from 'react';
import Image from 'next/image';

const Logo: React.FC = ({}) => {
    return(
        <div>
            <Image 
                src='https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/brand.png' 
                alt="logo" 
                width={140} 
                height={200}
                className="w-[158px] h-auto"
            />
    </div>
    );
};

export default Logo;