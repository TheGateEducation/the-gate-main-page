import React from 'react';
import Image from 'next/image';

interface LogoProps {
    width?: number,
    height?: number,
    className?: string
}

const Logo: React.FC<LogoProps> = ({width = 140, height = 200, className=""}) => {
    return(
        <div>
            <Image 
                src='https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/brand.png' 
                alt="logo" 
                width={width} 
                height={height}
                className={className}
            />
    </div>
    );
};

export default Logo;