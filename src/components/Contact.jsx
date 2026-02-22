import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin, FaSquareTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  return (
    <div className='h-screen mt-32 pb-10  '>
      <div className='w-full  mt-14 flex flex-col gap-2'>
        <div className='w-full text-white text-5xl pl-12'>
          <h1 >Contact</h1>
        </div>

        {/* Contact Form - No Box Background */}
        <div className='w-full flex flex-col gap-8 mt-6 pl-12'>
          {/* Let's Connect Header */}
          <h2 className='text-white text-3xl'>Let&apos;s Connect</h2>

          {/* Form Inputs - Arranged 2 per line */}
          <div className='flex flex-col gap-6 w-full px-3'>
            {/* Email and Name in one row */}
            <div className='flex flex-col md:flex-row gap-4'>
              <input className='input bgbox flex-1' placeholder='Your email' type="email" name="" id="" />
              <input className='input bgbox flex-1' placeholder='Your name' type="text" name="" id="" />
            </div>

            {/* Message in full width */}
            <textarea className='input bgbox message' placeholder='Text message' type="text" name="" id="" />

            {/* Connect Button */}
            <button className='p-5 border-green-500 rounded-xl text-2xl font-bold pl-12 pr-12 bg-green-500 greenshadow text-black'>Connect</button>
          </div>

          {/* Social Media Icons with or text - Centered below button */}
          <div className='flex flex-col items-center gap-4 mt-6'>
            <span className='text-slate-400'>or</span>
            <div className='flex gap-4'>
              <div className='dmdiv text-red-500 hover:scale-110 transition'>
                <a href="mailto:pottavarthivamshikumar@gmail.com" target='_blank' className='dm text-2xl'>
                  <SiGmail />
                </a>
              </div>
              <div className='dmdiv text-green-600 hover:scale-110 transition'>
                <a target='_blank' className='dm text-2xl' href="https://wa.me/+917416638648?text=Hey%20Brother!!!%20%20i%20have%20gone%20through%20your%20profolio ">
                  <BsWhatsapp />
                </a>
              </div>
              <div className='dmdiv text-blue-500 hover:scale-110 transition'>
                <a href="https://x.com/vamshi_0904" target='_blank' className='dm text-2xl'>
                  <FaSquareTwitter />
                </a>
              </div>
              <div className='dmdiv text-blue-500 hover:scale-110 transition'>
                <a href="https://www.linkedin.com/in/vamshikumarp" className='dm text-2xl'>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className='w-full flex flex-col items-center justify-center mt-20'>
          <div>
            <h1 className='text-center text-sm text-slate-400'>© 2024 Vamshi Kumar. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
