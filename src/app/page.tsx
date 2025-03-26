import React from 'react';
import logo from '../../public/assets/logo.png';
import bg from '../../public/assets/bg.png';
import Image from 'next/image';
import { BiLogoGmail } from 'react-icons/bi';

const page = () => {
	return (
		<div className='w-full h-screen flex md:items-center justify-center relative overflow-hidden'>
			<div className='bg h-screen  w-full absolute'>
				<Image
					src={bg}
					alt='logo image'
					className='h-screen w-full object-cover'
				/>
			</div>
			<div className='wrapper z-20 md:mt-0 mt-20'>
				<div className='logo flex flex-col items-center gap-4'>
					<Image
						src={logo}
						alt='logo image'
						className='w-20'
					/>
					<p className='text-center text-white md:text-xl text-md'>
						The simplify way to handle emails...Literally
					</p>
				</div>
				<div className='loginForm py-8 md:px-20 px-4 bg-white rounded-sm mt-10 md:mx-0 mx-2'>
					<div>
						<h3 className='md:text-2xl text-xl font-semibold capitalize text-center text-[#07998C]'>
							Sign In
						</h3>
						<p className='md:text-md text-md mt-2 text-center w-full text-[#7A7676] font-medium '>
							You can only login with Google account currently
						</p>
					</div>
					<button className='p-4 bg-[#07998C] w-full rounded-sm md:mt-10 mt-6 font-semibold text-white cursor-pointer flex items-center justify-center gap-4'>
						<BiLogoGmail />
						Proceed to login
					</button>
				</div>
			</div>
		</div>
	);
};

export default page;
