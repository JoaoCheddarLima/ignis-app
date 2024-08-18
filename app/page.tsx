'use client';

import { Inter_Tight } from 'next/font/google';
import Link from 'next/link';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { DashboardButton } from './components/home/dashboard';
import { Pitchs } from './components/home/pitchs';
import { Supported } from './components/home/supported';
import MainTopNav from './components/nav/mainNav';
import { Texts } from './lib/texts';

const ITW = Inter_Tight({
  weight: '700',
  subsets: ['latin'],
})

const IT = Inter_Tight({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div>
      <MainTopNav />
      <div className='w-3/4 mx-auto'>
        <div className='items-center flex flex-col py-20 border-b-2 border-[#141414]'>
          <h1
            className={`text-8xl font-extrabold ${ITW.className} text-center`}
            style={
              {
                background: "linear-gradient(to right, #e9e9e9, #d6d6d6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }
            }
          >
            {`${Texts.BRAND_NAME}`}
          </h1>
          <h1
            className={`text-6xl font-extrabold p-1 ${ITW.className} text-center`}
            style={
              {
                background: "linear-gradient(to right, #A42A55, #F0C344, #F07A22, #EA973A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }
            }
          >
            {Texts.SLOGAN}
          </h1>
          <p className={`text-gray-400 max-w-3xl text-center font-thin pt-2`}>
            Empower your work with {`${Texts.BRAND_NAME}`}, a definitive solution for your repetitive social tasks! Upgrade your
            quality and productivity, find out more about us and how do we empower you.
          </p>

          <div className='flex flex-col md:flex-row gap-3 py-5'>
            <DashboardButton />
            <Link href="/" className='text-gray-400 flex gap-1 items-center px-3 py-1 border-[1px] rounded-md'>
              Learn more
              <OpenInNewIcon />
            </Link>
          </div>
        </div>
        <Supported />
        <Pitchs />
      </div>
    </div>
  );
}