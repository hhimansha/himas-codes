import React, { useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import MagneticEffect from "./MagneticEffect";
import { useRef } from "react";
import prof from "../assets/prof.png";
import proj1Img from "../assets/mediamodifier_image.png";
import DocubotImage from "../assets/DocubotImage.png";
import Hipro from "../assets/Hipro.jpg";
import Gigask from "../assets/Gigask.jpg";
import Services from "./Services";

export default function ProjectsContact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    return (
        <div>
            <Projects scrollYProgress={scrollYProgress} />
            <Contact scrollYProgress={scrollYProgress} />

        </div>
    )
}

const Projects = ({ scrollYProgress }) => {

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <motion.div
            id="projects"
            // style={{ scale }}
            className="flex relative flex-wrap max-w-screen-xl h-fit gap-20 mb-20 mx-auto items-center justify-center"
        >
            <div className="flex flex-wrap  md:gap-14 gap-10 w-full">
                <div className="md:ml-0 mx-auto font-bold text-black md:my-10 my-0 md:top-40  top-20  lg:sticky h-full">
                    <h1 className="xl:text-6xl lg:text-8xl md:text-7xl sm:text-6xl xs: text-6xl ">
                        PROJECTS
                    </h1>
                    <div className="grid gap-10 mt-10">
                        <h1 className="lg:text-4xl text-3xl font-semibold grid">Innovative<span className="text-sm">Third eye creativity</span></h1>
                        <h1 className="lg:text-4xl text-3xl font-semibold grid">Creative<span className="text-sm">Third eye creativity</span></h1>
                        <h1 className="lg:text-4xl text-3xl font-semibold grid">Full-stack<span className="text-sm">Third eye creativity</span></h1>
                    </div>
                </div>
                <div>
                    <div className="grid md:grid-cols-2 gap-4 md:col-span-2 md:gap-4 md:mt-10 mt-0 mx-auto">
                        <div class=" flex w-[430px]  flex-col overflow-hidden rounded-2xl border ">
                            <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <span className="text-white absolute  right-2 top-2  bg-blue-600 font-semibold shadow-xl px-2 py-1 rounded-full text-xs">Under Development</span>
                              <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 absolute  right-2 bottom-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>

                                <img class="w-full " src={Gigask} alt="product image" />
                            </a>
                            <div class="mt-4 px-5 pb-5">
                                <a href="#" className="grid gap-2">
                                    <h5 class="text-xl tracking-tight font-semibold text-black">GigAsk / <span className="text-gray-400 font-semibold">Web Application</span></h5>
                                    <h4 className="text-sm text-gray-400">A Web app to hire industry professionals, form teams, or sell your skills</h4>
                                </a>

                            </div>
                        </div>
                        


                        <div class=" flex  w-[430px]  flex-col overflow-hidden rounded-2xl border ">
                            <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 absolute  right-2 bottom-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>

                                <img class="w-full" src={DocubotImage} alt="product image" />
                            </a>
                            <div class="mt-4 px-5 pb-5">
                                <a href="#" className="grid gap-1">
                                    <h5 class="text-xl tracking-tight font-semibold text-black">Docubot AI / <span className="text-gray-400 font-semibold">Web Application</span></h5>
                                    <h4 className="text-sm text-gray-400">An intelligent chatbot that can interact with your PDFs using Artificial Intelligence</h4>
                                </a>

                            </div>
                        </div>
                        <div class=" flex  w-[430px]  flex-col overflow-hidden rounded-2xl border ">
                            <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 absolute  right-2 bottom-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>

                                <img class="w-full " src={proj1Img} alt="product image" />
                            </a>
                            <div class="mt-4 px-5 pb-5">
                                <a href="#" className="grid gap-1">
                                    <h5 class="text-xl tracking-tight font-semibold text-black">HiTask / <span className="text-gray-400 font-semibold">Mobile Application</span></h5>
                                    <h4 className="text-sm text-gray-400">Mobile app that can manage your tasks and schedule them </h4>
                                </a>

                            </div>
                        </div>
                        <div class=" flex  w-[430px] flex-col overflow-hidden rounded-2xl border ">
                            <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 absolute  right-2 bottom-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
                            <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe p-2 absolute  right-12 bottom-2 bg-black rounded-full"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></a>

                                <img class="w-full " src={Hipro} alt="product image" />
                            </a>
                            <div class="mt-4 px-5 pb-5">
                                <a href="#" className="grid gap-1">
                                    <h5 class="text-xl tracking-tight font-semibold text-black">HiProtein/ <span className="text-gray-400 font-semibold">Web Application</span></h5>
                                    <h4 className="text-sm text-gray-400">An Online suppliments store with fully functional admin dashboard</h4>
                                </a>

                            </div>
                        </div>

                    </div>

                    <div>

<div class="w-full">
  
<div class="mx-auto mt-8 ">
  <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
    <p class="flex-1 text-lg font-bold text-black">Other Projects</p>

    
  </div>

  <div class="mt-6 overflow-hidden rounded-xl border ">
    <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
      

      <tbody class="lg:border-gray-300">
        <tr class="">
          <td class="whitespace-no-wrap py-4 text-sm font-bold text-black sm:px-6">
          Sri Madhura  / <span className="text-gray-500 font-normal">Web App</span>
            <div class="mt-1 lg:hidden">
              <p class="font-normal text-gray-500">Inventory & sales management system</p>
            </div>
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">Inventory & sales management system</td>

          <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
            2024
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
            </td>
        </tr>

        <tr class="">
          <td class="whitespace-no-wrap py-4 text-sm font-bold text-black sm:px-6">
          HiMemory / <span className="text-gray-500 font-normal">Mobile App</span>
            <div class="mt-1 lg:hidden">
              <p class="font-normal text-gray-500">Android game that helps to improve memory of childs</p>
            </div>
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">Android game that helps to improve memory of childs</td>

          <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
            2024
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
            </td>
        </tr>

        <tr class="">
          <td  class="whitespace-no-wrap py-4 text-sm font-bold text-black sm:px-6">
          IEEE-RAS / <span className="text-gray-500 font-normal">Web Site</span>
            <div class="mt-1 lg:hidden">
              <p class="font-normal text-gray-500">Website for IEEE Robotics & Automation Society of SLIIT</p>
            </div>
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">Website for IEEE Robotics & Automation Society of SLIIT</td>

          <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
            2024
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
            </td>
        </tr>

        <tr class="">
          <td class="whitespace-no-wrap py-4 text-sm font-bold text-black sm:px-6">
          IEEE-WIE  / <span className="text-gray-500 font-normal">Web Site</span>
            <div class="mt-1 lg:hidden">
              <p class="font-normal text-gray-500">Website for IEEE Women In Ingineering Society of SLIIT</p>
            </div>
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">Website for IEEE Women In Ingineering Society of SLIIT</td>

          <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
            2024
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
            </td>
        </tr>

        <tr class="">
          <td  class="whitespace-no-wrap py-4 text-sm font-bold text-black sm:px-6">
          E-Tech / <span className="text-gray-500 font-normal">Web App</span>
            <div class="mt-1 lg:hidden">
              <p class="font-normal text-gray-500">E-commerce web app using MVC architecture</p>
            </div>
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">E-commerce web app using MVC architecture</td>

          <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
            2023
          </td>

          <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                <a href="/hhhh" className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github p-2 bg-black rounded-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</div>
                    </div>


                </div>
            </div>

            <Services/>

            
        </motion.div>
    )
}

const Contact = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <motion.div
            id="contacts"
            // style={{ scale }}
            className="flex relative flex-wrap max-w-full md:gap-40 gap-10 mx-auto  rounded-t-[60px] items-center justify-center bg-gray-200 ">
            <div className="grid gap-4 justify-center my-32">
                <div className="flex items-center gap-4 mx-auto sm:justify-center sm:w-full w-80">
                    <img src={prof} alt="Profile" className="w-20" />
                    <h1 className="md:text-7xl text-4xl font-semibold text-black">Let's work together</h1>
                </div>
                <ul className="md:flex justify-center gap-20 text-black text-4xl mx-auto mt-10 pb-5">
                    <MagneticEffect>
                        <a href="https://github.com/hhimansha" target="_blank"><li className="flex items-center gap-4 hover:border-b-4 transition-all  ease-in-out">GitHub</li></a>
                    </MagneticEffect>
                    <MagneticEffect>
                        <a href="https://www.linkedin.com/in/harithahimansha/" target="_blank"><li className="flex items-center gap-4 hover:border-b-4 transition-all  ease-in-out">LinkedIn</li></a>
                    </MagneticEffect>
                    <MagneticEffect>
                        <a href="https://github.com/hhimansha" target="_blank"><li className="flex items-center gap-4 hover:border-b-4 transition-all  ease-in-out">Medium</li></a>
                    </MagneticEffect>
                </ul>
                <div className="flex gap-10 justify-center mt-10 flex-wrap">
                    <MagneticEffect>
                        <button className="p-10 rounded-full font-semibold text-xl border-2 border-black text-white bg-black hover:bg-black hover:text-white transition-colors duration-500 ease-in-out">+94-71-252-8831</button>
                    </MagneticEffect>
                    <MagneticEffect>
                        <button className="p-10 rounded-full font-semibold text-xl border-2 border-black text-white bg-black hover:bg-black hover:text-white transition-colors duration-500 ease-in-out">himanshainfo@gmail.com</button>
                    </MagneticEffect>
                </div>
            </div>


        </motion.div>
    )
}