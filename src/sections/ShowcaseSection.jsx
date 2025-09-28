import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);

    
    useGSAP(()=>{
        const projects=[project1Ref.current,project2Ref.current,project3Ref.current]; //storing these in array to iterate through each one and make them animate.
    
        projects.forEach((card,index) => {
            gsap.fromTo(
                card,
                {
                    y:50, opacity:0 //oapcity 0 means it will not be visible
                },
                {
                    y:0,
                    opacity:1, //opacity 1 means it will be visible
                    delay:0.3*(index+1), //this gives the delay to every card so that it gets shown one by one
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1,duration:1.5} 
        )
    },[]);// [] is for: It controls when the animation code inside useGSAP should run.
    //[] means:“Run this only once, when the component mounts, and never again unless the component is unmounted and remounted.”
    
  return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className='text-content'>
                            <h2>Step Inside My World – An Immersive 3D Portfolio Experience</h2>
                            <p className='text-white-50 md:text-xl'>
                                A web app built with React, Three.js, TailwindCSS, and GSAP for a stunning, interactive, and fluid experience.  
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    {/* <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2_img.png" alt="3D Portfolio" />
                            </div>
                            <h2>Step Inside My World - A 3D Portfolio Experience</h2>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
  )
}

export default ShowcaseSection