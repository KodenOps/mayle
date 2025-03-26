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
		<button
			// href={url}
			className='py-8 w-40 flex items-center flex-col font-semibold text-[#453D3D] gap-2'
			style={{ backgroundColor: color }}>
			<Icon
				size={32}
				color='#59514F'
			/>
			{title}
		</button>
	);
};

export default LinkBox;
