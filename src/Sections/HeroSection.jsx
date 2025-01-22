import { useState } from "react";
import Button from "../Components/Button.jsx";
import ShoeCard from "../Components/ShoeCard.jsx";
import { statistics } from "../Constants/index.js";
import {arrowRight} from "../assets/icons/index.js";
import {bigShoe1} from "../assets/images/index.js";
import React from "react";
import { shoes } from "../Constants/index.js";

export default function HeroSection(){

    const[BigShoeImg, setBigShoeImg]=useState(bigShoe1)
    
    return (

        <section
            id="home"
            className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>

            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
                <p className='font-montserrat text-xl text-coral-red'>
                    Our Summer Collections
                </p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                   <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
                       The New Arrival
                   </span>
                    <br/>
                    <span className='text-coral-red inline-block mt-3'>
                        Nike
                    </span>
                    Shoes
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>

                <Button label="Shop Now"
                        iconURL={arrowRight}>
                </Button>

                <div className='flex w-full max-container gap-16 font-palanquin mt-20 items-start flex-wrap'>
                    {statistics.map((item)=>(
                        <div key={item}>
                            <p className='text-4xl font-bold font-palanquin'>
                                {item.value}
                            </p>
                            <p className='font-montserrat text-slate-gray justify-self-center'>
                                {item.label}
                            </p>
                        </div>
                        ))}
                </div>
            </div>

            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <img
                    src={BigShoeImg}
                    alt='shoe colletion'
                    width={610}
                    height={502}
                    className='z-10 object-contain relative'
                />

                <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%]'>
                      {shoes.map((item,index)=>(
                    <div key={index}>
                        <ShoeCard 
                        index={index}
                        imgURL={item} 
                        bigShoeImg={BigShoeImg} 
                        changeBigShoe={(shoe)=>setBigShoeImg(shoe)} />
                    </div>
                      ))} 
                </div>
            </div>
        </section>
    )
}