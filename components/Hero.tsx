'use client'
import Image from 'next/image';
import { animate, useMotionTemplate,motion, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react'
import profilepic from '../assets/profilepic.png'
import object from '../assets/obj1.png'
import { FiArrowRight } from 'react-icons/fi';
import { RainbowButton } from './ui/RainbowButton';
import { BackgroundLines } from './ui/Backgroundlines';
import { GradualSpacing } from './ui/GradualSpacing';

const COLORS_TOP = ["#13ffaa","#1e67c6","#ce84cf","#DD335c"]
export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(()=>{
    animate(color,COLORS_TOP,{
      ease:"easeInOut",
      duration:10,
      repeat:Infinity,
      repeatType:"mirror",
    })
  },[])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%,${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  return (
   
     <motion.section style={{backgroundImage}}
    className='relative min-h-screen grid place-items-center overflow-hidden px-4 text-gray-50'>
      <BackgroundLines className='z-10 flex flex-col items-center md:mt-[15dvh] mt-[0dvh]'>
        <span className='mb-1.5 absolute md:translate-y-40  translate-y-36 translate-x-28 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
        Open to Work</span>
        <GradualSpacing text="Hi, I am" className='text-white/40 text-4xl md:text-5xl font-black'/>
        <GradualSpacing text="Uday Sharma" className='max-w-3xl text-4xl text-center bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent sm:text-5xl md:text-7xl'/>
        <Image 
        src={profilepic}
         alt="profile Pic"
         width={230}
         className='z-10'
         />
         <RainbowButton className='flex justify-center items-center space-x-2 p-2 mb-4 shadow-xl backdrop-blur-lg filter bg-white/10 rounded-3xl'>
          <Image
          src={object} 
          alt='Object Image'
          width={30}
          className='rounded-2xl mx-auto'
          />
          <Image
          src={object} 
          alt='Object Image'
          width={30}
          className='rounded-2xl mx-auto'
          />
          <Image
          src={object} 
          alt='Object Image'
          width={30}
          className='rounded-2xl mx-auto'
          />
          <p className='font-medium md:text-lg text-md'>Developing apps like a boss</p>
         </RainbowButton>
         <p className=' max-w-lg text-center mb-2'>Frontend | Backend | MERN Stack Developer🖥️| Full Stack Developer🖥️| Gen AI🤖 | LLM🤖 </p>
      
      <motion.button
       style={{border,boxShadow}}
       whileHover={{
        scale:1.015
       }}
       whileTap={{
        scale:0.985
       }}
       className='flex justify-center items-center px-4 py-2 w-fit mx-auto rounded-2xl'
       >
        Download CV<FiArrowRight/>
        </motion.button>
      </BackgroundLines>
     
        <div className='bg-circle-container'>
          <div className='bg-circle-background'></div>
          <div className='bg-circle'></div>
        </div>
    </motion.section>
  )
}
