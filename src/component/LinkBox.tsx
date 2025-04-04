import Link from 'next/link';
import React from 'react';
interface linkBox {
	url: string;
	title: string;
	color: string;
	Icon: React.ElementType;
}
const LinkBox = ({ url, title, color, Icon }: linkBox) => {
	return (
		<Link
			href={url}
			className='py-8  w-[calc(100%/2.3)] md:w-[calc(100%/6.5)] flex items-center flex-col font-medium text-[#453D3D] gap-2 md:text-md text-sm cursor-pointer'
			style={{ backgroundColor: color }}>
			<Icon
				size={32}
				color='#59514F'
			/>
			{title}
		</Link>
	);
};

export default LinkBox;
