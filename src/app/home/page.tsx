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
import empty_task from '../../../public/assets/empty_task.png';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

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
			<div className='bottomplane flex w-full  min-[500px]  md:flex-row flex-col'>
				<div className='lefts flex-1 h-full'>
					<div className='box md:border-2  md:ml-10 md:mx-2 mx-4 my-2 p-4 rounded-sm border-[#ebebeb]'>
						<Title
							header='Email Responder'
							subtext="Received A mail you don't know what response to Give?"
						/>

						<div className='mailbox  mt-4 border-2 border-[#eeeeee] p-4'>
							<div className='flex items-start gap-2'>
								<FiMail
									size={20}
									color='#c4c4c4'
								/>

								<textarea
									name='name'
									className='w-full outline-none '
									id=''
									cols={20}
									rows={10}
									placeholder='Paste Email here'></textarea>
							</div>
							<div className='flex items-start gap-4'>
								<button className='px-6 py-[3px] bg-slate-300 rounded-full border-2 border-[#c4c4c4]'>
									Formal
								</button>
								<button className='px-6 py-[3px] bg-slate-300 rounded-full border-2 border-[#c4c4c4]'>
									Casual
								</button>
							</div>
						</div>
					</div>
				</div>
				<hr className='md:hidden block border-t-2 border-[#c4c4c4] my-4' />
				<div className='rights flex-1 h-full'>
					<div className='box md:border-2 md:mr-10  mx-2 my-2 p-4 rounded-sm border-[#ebebeb]'>
						<Title
							header='Pending Tasks'
							subtext='Your opened mails will appear here...'
						/>
						<div className='w-full h-auto flex items-center justify-center mt-10'>
							<div>
								<Image
									src={empty_task}
									alt='empty task image'
									width={270}
								/>
								<p className='text-md text-[#7A7676] font-medium text-center w-full'>
									No pending Task Currently
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
