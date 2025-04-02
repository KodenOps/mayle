import LinkBox from '@/component/LinkBox';
import Navbar from '@/component/Navbar';
import Title from '@/component/Title';
import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';
import { GiFiles } from 'react-icons/gi';
import { GoReport } from 'react-icons/go';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LiaUserClockSolid } from 'react-icons/lia';

import { IoMdAlarm } from 'react-icons/io';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { IoSearchSharp } from 'react-icons/io5';

const page = () => {
	return (
		<div>
			<Navbar />
			<div className='content md:px-10 px-6 w-full py-6'>
				{/* the title layer */}
				<div className='greet flex items-center gap-4'>
					<MdOutlineMessage
						size={32}
						color='#56646D'
					/>
					<Title
						header='Unread Inbox'
						subtext='What will you like to do today?'
					/>
				</div>
				{/* Main content */}
				<div className='main w-full border-1 border-[#c4c4c4] min-h-10 mt-4 rounded-sm p-4'>
					<h3 className='font-semibold text-md text-[#1D4642]'>Categories</h3>
					<div className='emailCategories flex items-center md:justify-start justify-around md:gap-4 gap-2 w-full mt-4 flex-wrap'>
						<LinkBox
							url='/inbox'
							title='Unclassified'
							color='#D6EFF0'
							Icon={GiFiles}
						/>
						<LinkBox
							url='/inbox'
							title='Urgent'
							color='#E4E4E3'
							Icon={GoReport}
						/>
						<LinkBox
							url='/inbox'
							title='Deadline Near'
							color='#E4E4E3'
							Icon={IoMdAlarm}
						/>
						<LinkBox
							url='/inbox'
							title='Reports'
							color='#E4E4E3'
							Icon={HiOutlineDocumentReport}
						/>
						<LinkBox
							url='/inbox'
							title='Complaints'
							color='#E4E4E3'
							Icon={LiaUserClockSolid}
						/>
						<LinkBox
							url='/inbox'
							title='Escalations'
							color='#E4E4E3'
							Icon={HiOutlineBellAlert}
						/>
						<hr className='w-[94%] mx-[3%] border-1 border-[#c4c4c4]' />
						<div className='emailList w-full'>
							<div className='header flex md:items-center justify-between w-full  md:flex-row flex-col'>
								<h3 className='font-semibold text-md text-[#1D4642]'>
									Unclassified Inbox{' '}
									<span className='text-sm text-[#59514F]'>(234 mails)</span>
								</h3>
								<div className='search md:w-auto  w-full'>
									<div className='search flex items-center  gap-4 border-1 px-4 py-2 md:w-md border-[#ebebeb] rounded-sm mt-4'>
										<IoSearchSharp
											size={25}
											color='#c4c4c4'
										/>
										<input
											type='text'
											placeholder='Search mail'
											className='outline-none w-full placeholder:text-md border-transparent bg-transparent font-medium'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
