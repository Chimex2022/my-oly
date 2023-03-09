import React, { useEffect } from 'react'
import { data } from './Data'
import { motion } from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";
import imageK from '../assets/image4.png'
import imageL from '../assets/Group 8644.png'
import imageM from '../assets/spec (7).png'
import imageN from '../assets/spec (8).png'
import imageO from '../assets/image13.png'
import imageP from '../assets/Group 8650.png'
import imageQ from '../assets/spec (6).png'




const LandingPage = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="container flex items-center h-screen p-6 mx-auto mt-6 space-y-0 justify-evenly md:space-y-0">
        <div data-aos="zoom-out" data-aos-duration="1000" className='flex flex-col px-6 py-6'>
          <h1 className='p-4 mt-6 text-5xl font-semibold text-white'>We are the <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>future</span><br /> of business intelligence</h1>
          <p className='p-4 text-[#BBBBBB] text-left max-w-2xl'>Octave-Melody-AI is a product that leverages data science and web application technologies to operationalize business data by building predictive web applications <br /> that tracks performance KPIs using interactive dashboards in real time.</p>
          <button className='text-[#ffffff] mt-6 bg-gradient-to-r from-[#E975A8] to-[#726CF8] w-fit px-3 py-3 ml-5 rounded'>Request Consultation</button>
        </div>
  

        <motion.div
            initial={{motionRotation: 0}}
            animate={{ rotate: 360}}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 4.5, repeat: Infinity, restSpeed: 0.01, repeatType: "mirror" }} > 

         <div className=" grab-image">
          <img src={imageK}  alt="" className='w-[390px] hover:cursor-grab'/>
        </div>

        </motion.div>
      </div>

      <section className='mt-6 p-6 h-screen bg-[#333333]'>
        <div className='w-full mt-8 font-semibold text-center text-md'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>YOUR BUSINESS, </span>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>OUR PROBLEM</span>
        </div>

        
        <h1 className=' font-medium text-center mt-2 max-w-screen text-2xl text-[#ffffff]'>BUILD PREDICTIVE WEB APPLICATIONS FOR YOUR BUSINESS</h1>
        <div data-aos="zoom-in" data-aos-duration="2000" className='flex items-center justify-between mx-auto'>
          {data.map(({ id, image, info, name }) => {
            return (
               <div className ='flex flex-col items-center justify-center p-4 mt-20 ml-6 border border-r-purple-800 border-b-purple-800 border-t-pink-400 border-l-pink-400'>
                <div className='w-20 h-20 rounded-full portfolio_item-image '>
                  <img src={image} alt={name} />
                </div>
                <h3 className='p-3 text-white'>{name}</h3>
                <p className='text-left max-w-md text-[#BBBBBB] p-3'>{info}</p>
              </div>     
        )
        })}
          </div>

      </section>
      
      <section className='bg-[#282828] h-screen'>
      <div data-aos="fade-up" data-aos-duration="3000" className='flex pt-24 mx-auto items-center justify-evenly relative'>
        <img src={imageL} alt="" className='w-[350px]' />
          
        <div className='flex flex-col p-6'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8] font-semibold text-2xl '>DATA INSIGHTS</h1>
          <h2 className='text-white text-left font-semibold pt-6 text-3xl'>Business Data Insights In Real Time</h2>
          <p className='text-left text-[#BBBBBB] max-w-md pt-6'>Stay ahead of your competition by using insights derived from your data in real time to make informed decisions and increase business revenue exponentially.</p>
          <p className='text-left text-[#BBBBBB] max-w-md pt-6'>Stay ahead of your competition by using insights derived from your data in real time to make informed decisions and increase business revenue exponentially.</p>     
        </div>

        <div>
          <img src={imageM} alt="" className='w-[80px] absolute top-10' />
          </div>
      </div>

      <div className='flex items-start ml-24 mt-16'>
      <img src={imageN} alt="" />
      </div>
      </section>

      <section data-aos="zoom-out" data-aos-duration="3000" className='flex justify-evenly mx-auto bg-[#282828] pt-20 '>
        <div className='flex flex-col'>
        <h2 className='text-left bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8] font-semibold'>SALES PREDICTION</h2>
        <h2 className='text-left text-white text-lg font-semi-bold'>Predict your Sales</h2>
        <p className='text-left pt-1 text-[#BBBBBB] max-w-md mt-6'>Stay ahead of your competition by using insights derived from your data in real time to make informed decisions and increase business revenue exponentially.</p>
        <p className='text-left pt-1 text-[#BBBBBB] max-w-md'>Stay ahead of your competition by using insights derived from your data in real time to make informed decisions and increase business revenue exponentially.</p>

        </div>
        <div>
        <img src={imageO} alt="" className='w-[350px]' />
        </div>
      </section>

      
<section className='bg-[#282828] h-screen pt-20'>
      <div data-aos="slide-up" data-aos-duration="3000"  className='flex pt-24 mx-auto items-center justify-evenly relative'>
        <img src={imageP} alt="" className='w-[350px]' />
          
        <div className='flex flex-col p-6'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8] font-semibold text-md '>METRICS</h1>
          <h2 className='text-white text-left font-semibold pt-6 text-3xl'>Monitor Business Metrics</h2>
          <p className='text-left text-[#BBBBBB] max-w-md pt-6'>Stay ahead of your competition by using insights derived from your data in real time to make informed decisions and increase business revenue exponentially.</p>
          <p className='text-left text-[#BBBBBB] max-w-md pt-6'>Stay ahead of your competition by using insights derived from your data in real time to make informed decisions and increase business revenue exponentially.</p>     
        </div>

        <div>
          <img src={imageQ} alt="" className='w-[80px] absolute right-20 top-10' />
          </div>
      </div>

      </section>
      
  </>
          
  )}

              
export default LandingPage