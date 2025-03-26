import React from 'react';

interface myprops {
	header: string;
	subtext: string;
}
const Title = ({ header, subtext }: myprops) => {
	return (
		<div>
			<div className='top text-[#07998C] font-semibold md:text-xl text-md'>
				{header}
			</div>
			<div className='bottom md:text-[14px] text-[12px] text-[#5E5B5B]'>
				{subtext}
			</div>
		</div>
	);
};

export default Title;
