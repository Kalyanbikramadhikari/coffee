import React, { useEffect } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Home = () => {

    // gsap.to('.coffeecup', {
    //     scrollTrigger: '.coffeecup', // start the animation when ".box" enters the viewport (once)
    //     x: 500
    // })
    useEffect(() => {
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Coffee cup animation
        gsap.to('.coffeecup', {
            top: '140%',
            left: '10px',
            rotate: '10',
            scrollTrigger: {
                trigger: '.about',
                start: 'top 98%', // Start the animation when the top of the coffee cup is 98% down the viewport
                end: 'bottom top', // End when the bottom of the coffee cup reaches the top of the viewport
                markers: true, // Enable markers for debugging
                scrub: true, // Smooth animation
            }
        });


        gsap.to('.coffeethree', {
            top: '190%',
            left: '35px',
            scrollTrigger: {
                trigger: '.about',
                start: 'top 98%', // Start the animation when the top of the coffee cup is 98% down the viewport
                end: 'bottom top', // End when the bottom of the coffee cup reaches the top of the viewport
                markers: true, // Enable markers for debugging
                scrub: true, // Smooth animation
            }
        })
        gsap.to('.coffeefour', {
            top: '170%',
            left: '10px',
            scrollTrigger: {
                trigger: '.about',
                start: 'top 98%', // Start the animation when the top of the coffee cup is 98% down the viewport
                end: 'bottom top', // End when the bottom of the coffee cup reaches the top of the viewport
                markers: true, // Enable markers for debugging
                scrub: true, // Smooth animation
            }
        })
        gsap.to('.coffeefive', {
            top: '180%',
            left: '10px',
            scrollTrigger: {
                trigger: '.about',
                start: 'top 98%', // Start the animation when the top of the coffee cup is 98% down the viewport
                end: 'bottom top', // End when the bottom of the coffee cup reaches the top of the viewport
                markers: true, // Enable markers for debugging
                scrub: true, // Smooth animation
            }
        })
    }, []);


    return (
        <div className='p-16 h-1vh '>

            <div className="flex container">
                <img src="/images/coffeecup.png" alt="" className='h-[420px] b absolute right-48 top-20 coffeecup ' />

                <div className="">

                    <img src="/images/coffeesplash.png" alt="" className='h-96 absolute bottom-60 right-11 ' />
                </div>

                {/* below are coffe beans */}
                <div className="">
                    <img src="/images/coffeethree.png" alt="" className='h-12 absolute top-32 right-56 coffeethree ' />
                </div>
                <div className="">
                    <img src="/images/coffeefive.png" alt="" className='h-12 absolute top-[300px] right-[500px] coffeefive' />
                </div>
                <div className="">
                    <img src="/images/coffeethree.png" alt="" className='h-12 absolute top-[600px] right-[600px] ' />
                </div>
                <div className="">
                    <img src="/images/coffeefour.png" alt="" className='h-12 absolute bottom-44 right-[400px] coffeefour' />
                </div>
                <div className="">
                    <img src="/images/coffeethree.png" alt="" className='h-12 absolute bottom-44 right-[200px] transform rotate-90' />
                </div>
                {/* <div className="">
    <img src="/images/" alt="" />
</div> */}
            </div>








        </div>
    )
}

export default Home