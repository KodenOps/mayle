import LinkBox from '@/component/LinkBox';
import Navbar from '@/component/Navbar';
import Title from '@/component/Title';
import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';

const page = () => {
	return (
		<div>
			<Navbar />
			<div className='homeBannerLinks px-10 py-6'>
				{/* title */}
				<Title
					header='Welcome, James'
					subtext='What will you like to do today?'
				/>
				<div className='linksPlane flex items-center justify-between gap-4 mt-4 flex-wrap'>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#D6EFF0'
						Icon={BiMessageDetail}
					/>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#F0E1D6'
						Icon={BiMessageDetail}
					/>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#D6DAF0'
						Icon={BiMessageDetail}
					/>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#F0D6E4'
						Icon={BiMessageDetail}
					/>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#ECEEB8'
						Icon={BiMessageDetail}
					/>
					<LinkBox
						url='/'
						title='Unread Inbox'
						color='#D6F0D6'
						Icon={BiMessageDetail}
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
