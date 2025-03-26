import LinkBox from '@/component/LinkBox';
import Navbar from '@/component/Navbar';
import Title from '@/component/Title';
import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import { CiCircleList } from 'react-icons/ci';
import { TbCalendarTime } from 'react-icons/tb';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { TbBulb } from 'react-icons/tb';
import { HiUserPlus } from 'react-icons/hi2';

const page = () => {
	return (
		<div>
			<Navbar />
			<div className='homeBannerLinks md:px-10 px-6 w-full py-6 border-2 border-[#e7e7e7]'>
				{/* title */}
				<Title
					header='Welcome, James'
					subtext='What will you like to do today?'
				/>
				<div className='linksPlane flex items-center md:justify-start justify-around md:gap-4 gap-2 w-full mt-4 flex-wrap '>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#D6EFF0'
						Icon={BiMessageDetail}
					/>
					<LinkBox
						url='/'
						title='View Queue'
						color='#F0E1D6'
						Icon={CiCircleList}
					/>
					<LinkBox
						url='/'
						title='Scheduled Replies'
						color='#D6DAF0'
						Icon={TbCalendarTime}
					/>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#F0D6E4'
						Icon={HiUserPlus}
					/>
					<LinkBox
						url='/'
						title='Escalations'
						color='#ECEEB8'
						Icon={HiOutlineBellAlert}
					/>
					<LinkBox
						url='/'
						title='View Insights'
						color='#D6F0D6'
						Icon={TbBulb}
					/>
				</div>
			</div>
			<div className='bottomplane flex w-full bg-red-100 h-[500px] flex-wrap md:flex-row flex-col'>
				<div className='left flex-1'>
					<div className='box border-2 md:mx-10 mx-2 my-2 p-4 rounded-sm'>
						hello
					</div>
				</div>
				<div className='right flex-1 bg-green-200'>
					<div className='box border-2 md:mx-10 mx-2 my-2 p-4 rounded-sm'>
						hello
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
