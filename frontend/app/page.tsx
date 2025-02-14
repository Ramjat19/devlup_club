"use client";
import React, { useState, useEffect } from 'react';
import logo_home from '@/public/logo_home.png'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import HeroVideoDialog from "@/frontend/components/magicui/hero-video-dialog";
import Gallery from '@/frontend/components/Gallery';
import Contact from '@/frontend/components/Contact';
import Principle from '@/components/Principle'
import ShinyButton from "@/frontend/components/magicui/shiny-button";
import axios from 'axios';

export default function Home() {

      const fetch = async()=>{
        const res= await axios.get("http://localhost:8000/api/video/");
        console.log(res.data)

      }
     useEffect(()=>{
        
     fetch()
     },[])


  return (
    <div className={styles.home}>
      <div className={styles.home_landing} >
        <div className={styles.home_container}>
          <div>
            <div style={{ fontSize: '60px', fontWeight: '800' }}>DevlUp Labs</div>
            <div style={{ fontSize: '40px' }}>Open Source Development  <br />  Enthusiasts Group @ IIT Jodhpur</div>
          </div>
          <div>
            <Image src={logo_home} alt="" />
          </div>
        </div>
      </div>
      <div className='flex justify-center text-4xl mb-20 font-black'>Guiding Principles</div>
      <Principle />
      <div className='flex justify-center text-4xl mb-20 font-black'>Gallery</div>
      <Gallery />
      <div className='video_container'>
        <div className='flex justify-center text-4xl mb-20 mt-20 font-black'>Video</div>
        <div className="relative w-100 flex gap-10 flex-row max-md:flex-col  my-20 p-8 pl-[20%] pr-[20%] max-sm:px-[5%] max-md:px-[5%] max-lg:px-[10%] max-xl:px-[10%]">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />

      {/* <iframe width="760" height="215" src="https://www.youtube.com/embed/56xFUD8O9yI?si=mBYliPDshPcXy-nv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>     */}
          {/* <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/56xFUD8O9yI?si=Mq0VaaV4mVTA_KO0"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="YouTube video player"
          /> */}
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
        <div className="relative w-100 flex gap-10 flex-row max-md:flex-col   p-8 pl-[20%] pr-[20%] max-sm:px-[5%] max-md:px-[5%] max-lg:px-[10%] max-xl:px-[10%]">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/56xFUD8O9yI?si=Mq0VaaV4mVTA_KO0"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="YouTube video player"
          />
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
        <div className="flex justify-center items-center pb-10  ">
          <a href="https://www.youtube.com/channel/UCFaRxxB8-BB5GXH-wlwGqIw" target="_blank" rel="noopener noreferrer">
            <ShinyButton>YOUTUBE CHANEL</ShinyButton>
          </a>

        </div>
        <Contact />
      </div>

    </div>
  );
}
