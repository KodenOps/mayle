import React from 'react';
import logo from '../../public/assets/logo-2.png';
import Image from 'next/image';
import { IoSearchSharp } from 'react-icons/io5';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiMenu4Fill } from 'react-icons/ri';

const Navbar = () => {
	return (
		<div className='md:p-10 md:pb-4 p-5 pb-2 flex items-center justify-between bg-white shadow-md'>
			<div className='logo'>
				<Image
					src={logo}
					alt='logo navbar image'
					width={50}
				/>
			</div>
			<div className='search md:flex items-center  gap-4 border-2 px-4 py-2 md:w-md border-[#c4c4c4] rounded-sm hidden'>
				<IoSearchSharp
					size={25}
					color='#c4c4c4'
				/>
				<input
					type='text'
					placeholder='Search/CTRL K'
					className='outline-none border-transparent bg-transparent font-medium'
				/>
			</div>
			<div className='userprof md:flex items-center gap-4 hidden'>
				<FaRegCircleUser
					size={40}
					color='#07998C'
				/>

				<div className='right flex flex-col justify-items-center'>
					<h4 className='text-lg font-semibold'>Segun, Aina</h4>
					<p className='text-sm text-[#737272]'>segun@gmail.com</p>
				</div>
			</div>
			<div className='mobile_menu md:hidden block'>
				<RiMenu4Fill size={40} />
			</div>
		</div>
	);
};

export default Navbar;
