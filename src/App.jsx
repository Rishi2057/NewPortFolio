import { useEffect, useRef } from "react";
import Header from "./Header"
import bg from "./assets/Gemini_Generated_Image_817ehy817ehy817e.png"
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function App() {
  const imgref = useRef(null)
  console.log(imgref);

  const container = useRef(null)
  const headingref = useRef(null)
  const maindivRef = useRef(null)

  useEffect(() => {
    gsap.to(imgref.current.children, {
      y: -77,
    })
    gsap.to(headingref.current, {
      y: -7,
      opacity: 1
    })
    gsap.to(maindivRef.current, {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: maindivRef.current,
        scrub: 1,
        start: "22% top",
        end: "top -20%",
        // markers: true
      }
    })
    const ctx = gsap.context(() => {
      gsap.from(".icon", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });
    }, container);

    return () => ctx.revert();

  }, [])

  const pointer = useRef(null);
  const page2 = useRef(null);

  useEffect(() => {
    const handleMove = (dets) => {
      if (pointer.current) {
        pointer.current.style.left = dets.clientX - 3 + "px";
        pointer.current.style.top = dets.clientY + "px";
        pointer.current.classList.remove("hidden");
      }
    };

    const page2Enter = () => {
      if (pointer.current) {
        pointer.current.classList.replace("h-5", "h-52");
        pointer.current.classList.replace("w-5", "w-52");

        pointer.current.classList.add(
          "bg-yellow-200/30",   // 30% opacity
          "blur-md",
          "shadow-[0_0_40px_10px_rgba(250,204,21,0.4)]"
        );
      }
    };

    const page2Leave = () => {
      if (pointer.current) {
        pointer.current.classList.replace("h-52", "h-5");
        pointer.current.classList.replace("w-52", "w-5");

        pointer.current.classList.remove(
          "bg-yellow-200/30",
          "blur-md",
          "shadow-[0_0_40px_10px_rgba(250,204,21,0.4)]"
        );
      }
    };
    const page2El = page2.current; // store reference

    document.addEventListener("mousemove", handleMove);

    if (page2El) {
      page2El.addEventListener("mouseenter", page2Enter);
      page2El.addEventListener("mouseleave", page2Leave);
    }

    return () => {
      document.removeEventListener("mousemove", handleMove);

      if (page2El) {
        page2El.removeEventListener("mouseenter", page2Enter);
        page2El.removeEventListener("mouseleave", page2Leave);
      }
    };

   

  }, []);

   const page3 = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {

    const pathLength = svgRef.current.getTotalLength();

    svgRef.current.style.strokeDasharray = pathLength;
    svgRef.current.style.strokeDashoffset = pathLength;

    gsap.to(svgRef.current, {
      strokeDashoffset: 0,
      ease: "linear",
      // duration:2,
      opacity:1,
      scrollTrigger: {
        trigger: page3.current,
        scrub: 2,
        start: "top top",
        end: "bottom bottom"
      }
    });

  }, []);



  return (
    <>
      <Header />
      <img id="backgroundimg" src={bg} alt="" />
      <div ref={maindivRef} id="main" className="relative">
        <div ref={pointer} id="pointer" className="h-5 w-5 rounded-full hidden bg-white fixed"></div>
        <div id="page1" className="h-screen w-full text-white flex flex-col justify-center items-center">

          <div id="logoheader" ref={imgref} className="font-extrabold  h-16 overflow-hidden text-7xl">
            <h1>RISHI SANKAR</h1>
            <h1>RISHI SANKAR</h1>
          </div>
          <div className="mt-5">
            <h1 ref={headingref} className="text-2xl font-light opacity-0 translate-y-39 uppercase">Fronted Developer</h1>
          </div>
          <div ref={container} className="flex gap-5 opacity-100 text-4xl mt-5">
            <a className="icon" href="https://www.linkedin.com/in/rishi-sankar-r-430a4a362/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
            <a className="icon" href="https://github.com/Rishi2057?tab=repositories" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
            <a className="icon" href="https://vercel.com/rishi2057s-projects" target="_blank" rel="noopener noreferrer"> <IoLogoVercel /></a>
          </div>
        </div>
        <div ref={page2} id="page2" className="h-[70vh] w-full text-white">
          <h1 id="abouth1" className="uppercase font-extrabold text-8xl text-center">About ME</h1>
          <p id="parapage2" className="px-55 mt-10">
            I am a passionate Frontend Developer who has completed a MEARN Stack Development course at Luminar Technolab. I specialize in building responsive, interactive, and user-friendly web interfaces using technologies such as HTML, CSS, JavaScript, and React.

            I focus on writing clean and maintainable code while creating modern UI designs that deliver smooth user experiences. My goal is to transform ideas into visually appealing and functional web applications.

            As a developer, I continuously explore new frontend tools, frameworks, and best practices to stay updated in the ever-evolving field of web development. My journey in tech is driven by curiosity, creativity, and a passion for building engaging digital experiences.
          </p>
          <div id="banners">
            <div id="banner">
              <h1>HTML</h1><h1>CSS</h1><h1>JAVASCRIPT</h1><h1>REACT</h1><h1>TAILWIND</h1></div>
            <div id="banner">
              <h1>HTML</h1><h1>CSS</h1><h1>JAVASCRIPT</h1><h1>REACT</h1><h1>TAILWIND</h1></div>
          </div>

        </div>
        <div ref={page3} id="page3" className="min-h-fit w-full">
          <h1 id="projecth1" className="uppercase font-extrabold text-8xl text-center">Projects</h1>
          <div className="">
            <svg width="full" height="1024" viewBox="0 0 1394 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref={svgRef} d="M52.6822 11C29.5239 62.9397 43.3622 113.446 52.6822 144C62.0022 174.554 133.124 245.38 138.682 237.5C239.804 293.524 296.283 276.356 397.182 282.5H688.682C884.182 282.5 908.182 282.5 999.182 320.5C1090.18 358.5 1126.08 420.208 1084.68 502.5C999.182 638.5 721.182 627.516 602.682 660.5C484.182 693.484 175.682 740.5 397.182 610C618.682 479.5 753.793 553.668 367.182 769C-19.429 984.332 436.682 895.731 602.682 830.5C768.682 765.269 709.18 787.129 756.182 769C803.185 750.871 954.682 748 1016.18 780C1077.68 812 1164.18 898.5 1242.68 873.5C1321.18 848.5 1364.18 1027 1364.18 1027" stroke="#FFFF00" strokeWidth="80" strokeLinecap="round" />
            </svg>



          </div>
        </div>
      </div>
    </>
  )
}

export default App
