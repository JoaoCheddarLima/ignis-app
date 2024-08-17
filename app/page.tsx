'use client';

import Link from 'next/link';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Home() {
  return (
    <div>
      <div className='items-center flex flex-col py-10'>
        <h1
          className="text-8xl font-extrabold"
          style={
            {
              background: "linear-gradient(to right, #e9e9e9, #d6d6d6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }
          }
        >
          Fire Automate
        </h1>
        <h1
          className="text-6xl font-extrabold p-1"
          style={
            {
              background: "linear-gradient(to right, #A42A55, #F0C344, #F07A22, #EA973A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }
          }
        >
          Facilitating your life
        </h1>
        <p className="text-gray-400 max-w-3xl text-center font-thin pt-2">
          Empower your work with Fire Automate, a definitive solution for your daily tasks! Upgrade your work
          quality and productivity, find out more about our services and how we can help you.
        </p>

        <div className='flex gap-3 py-5'>
          <Link href="/dashboard" className='flex gap-1 items-center px-4 py-1 rounded-md bg-blue-600'>
            Get started
            <ExitToAppIcon />
          </Link>
          <Link href="/" className='text-gray-400 flex gap-1 items-center px-3 py-1 border-[1px] rounded-md'>
            Learn more
            <OpenInNewIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}