import { useEffect, useRef } from "react";
import Header from "./Header"
import bg from "./assets/Gemini_Generated_Image_817ehy817ehy817e.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)


function App() {

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  const imgref = useRef(null)
  console.log(imgref);

  const container = useRef(null)
  const headingref = useRef(null)
  const headingref2 = useRef(null)
  const maindivRef = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // small screens
    mm.add("(max-width: 767px)", () => {
      gsap.to(imgref.current.children, {
        y: -127,
      });
    });

    mm.add("(min-width:435px) and (max-width:768px)", () => {
      gsap.to(imgref.current.children, {
        y: -57,
      });
    });

    // md and above
    mm.add("(min-width: 768px)", () => {
      gsap.to(imgref.current.children, {
        y: -77,
      });
    });
    gsap.to(headingref.current, {
      y: -7,
      opacity: 1
    })
    gsap.from(headingref2.current.children, {
      y: 40,
      opacity: 0,
      duration: 0.1,
      stagger: 0.1,
      ease: "power3.out"
    });
    gsap.to(maindivRef.current, {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: maindivRef.current,
        scrub: 1,
        start: "15% top",
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
  const page1 = useRef(null);

  useEffect(() => {
    const handleMove = (dets) => {
      if (pointer.current) {
        pointer.current.style.left = dets.clientX + "px"
        pointer.current.style.top = dets.clientY + 10 + "px"
        pointer.current.classList.remove("hidden")
      }
    }



    document.addEventListener("mousemove", handleMove)

  }, []);

  const page3 = useRef(null)
  const svgRef = useRef(null)


  useEffect(() => {

    const pathLength = svgRef.current.getTotalLength()

    svgRef.current.style.strokeDasharray = pathLength;
    svgRef.current.style.strokeDashoffset = pathLength;

    gsap.to(svgRef.current, {
      strokeDashoffset: 0,
      strokeWidth: 80,
      strokeOpacity: 0.2,
      stroke: "#FFFF00",
      ease: "linear",
      // duration:2,
      scrollTrigger: {
        trigger: page3.current,
        scrub: 2,
        start: "top 15%",
        end: "bottom bottom",
        // markers: true
      }
    })

  }, [])

  const backgroundRef = useRef(null)

  useEffect(() => {

    const handleMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 30;
      gsap.to(backgroundRef.current, {
        x: `${xMove * 0.2}%`,
        ease: "linear",
      });
    }
    document.addEventListener("mousemove", handleMove)


    return () => {
      document.removeEventListener("mousemove", handleMove)
    }

  }, [])

  const page2Enter = () => {
    pointer.current.classList.add("-translate-y-20")
    pointer.current.classList.add("-translate-x-10")
    pointer.current.classList.add("scale-[10]")
    pointer.current.classList.add(
      "bg-yellow-200/30",
      "blur-md",
      "shadow-[0_0_40px_10px_rgba(250,204,21,0.4)]"
    )

  }

  const page2Leave = () => {
    pointer.current.classList.remove("-translate-y-20")
    pointer.current.classList.remove("-translate-x-10")
    pointer.current.classList.remove("scale-[10]")
    pointer.current.classList.remove(
      "bg-yellow-200/30",
      "blur-md",
      "shadow-[0_0_40px_10px_rgba(250,204,21,0.4)]"
    )
  }

  const page4Enter = () => {
    pointer.current.classList.add("bg-yellow-500")

  }

  const page4Leave = () => {

    pointer.current.classList.remove("bg-yellow-500",)
  }



  const page4 = useRef(null)
  const contactheading = useRef(null)
  const contacthead = useRef(null)
  const contactIcons = useRef(null)



  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: page4.current,
        scrub: 3,
        start: "-20% 70%",
        end: "-20% 40%",
      }
    })
    tl.from(page4.current, {
      x: 350,
      y: 450,
      duration: 3,
      width: "800px",
      borderRadius: "150%",
      ease: "power2.inOut"
    })
    tl.from(contactheading.current, {
      opacity: 0
    })
    tl.from(contacthead.current, {
      opacity: 0,
      y: 10,
      ease: "power2.inOut"
    })
    tl.from(contactIcons.current.children, {
      y: -35,
      opacity: 0,
      stagger: 0.5,
      duration: 2,
      ease: "power2.inOut"
    })
  }, [])



  // contact email

  const form = useRef();
  const messegeRef = useRef(null)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneref = useRef(null)




  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e);

    if (!form.current.from_name.value || !form.current.user_email.value || !form.current.phone.value || !form.current.message.value) {

      toast.error('Fill the form completly')
    } else {
      emailjs
        .sendForm('service_7zqvkrn', 'template_j7gcidc', form.current, {
          publicKey: 'S9wa21gcdHg18UVhO',
        })
        .then(
          () => {
            toast.success("Email Send")
            form.current.reset()
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        )
    }
  }


  const scrollToHome = () => {
    page1.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const scrollToAbout = () => {
    page2.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const scrollToProjects = () => {
    page3.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const scrollToContact = () => {
    page4.current.scrollIntoView({
      behavior: "smooth"
    })
  }


  return (
    <>
      <Header pointer={pointer} scrollToHome={scrollToHome} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <img ref={backgroundRef} id="backgroundimg" src={bg} alt="" />
      <div ref={maindivRef} id="main" className="relative overflow-hidden">
        <div ref={pointer} id="pointer" className="h-3 w-3 rounded-full hidden z-10 bg-white fixed"></div>
        <div ref={page1} id="page1" className="h-screen w-full text-white flex flex-col justify-center items-center">

          <div id="logoheader" ref={imgref} className="font-extrabold  md:h-16 overflow-hidden text-6xl md:text-7xl">
            <h1>RISHI SANKAR</h1>
            <h1>RISHI SANKAR</h1>
          </div>
          <div className="mt-5">
            <h1 ref={headingref} className="text-2xl font-light opacity-0 translate-y-39 uppercase">Fronted Developer</h1>
          </div>
          <Toaster />
          <div ref={container} className="flex gap-5 opacity-100 text-4xl mt-5">
            <a className="icon" href="https://www.linkedin.com/in/rishi-sankar-r-430a4a362/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
            <a className="icon" href="https://github.com/Rishi2057?tab=repositories" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
            <a className="icon" href="https://vercel.com/rishi2057s-projects" target="_blank" rel="noopener noreferrer"> <IoLogoVercel /></a>
          </div>
          <div className="flex justify-center pt-5">
            <a href="/React.pdf" download>
              <h1 ref={headingref2} className="flex">
                <span>D</span>
                <span>o</span>
                <span>w</span>
                <span>n</span>
                <span>l</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span className="">&nbsp;</span>
                <span>C</span>
                <span>V</span>
              </h1>
            </a>
          </div>
        </div>
        <div ref={page2} onMouseEnter={page2Enter} onMouseLeave={page2Leave} id="page2" className=" h-[70vh] w-full text-white scroll-mt-25">
          <h1 id="abouth1" className="uppercase font-extrabold text-5xl md:text-8xl text-center">About ME</h1>
          <p id="parapage2" className="px-10 md:px-55 mt-5 md:mt-10 text-justify">
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
        <div ref={page3} id="page3" className="relative z-50 scroll-mt-25 text-white min-h-screen w-full">

          <div className="flex justify-center">
            <h1 id="projecth1" className="uppercase font-extrabold text-5xl md:text-8xl text-center">
              Projects
            </h1>
          </div>
          <div className="px-10 md:px-20 py-35 z-50 min-h-fit  relative">
            {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque quis eveniet, sunt non consequuntur praesentium optio molestiae, ab ad nostrum iure error beatae velit sint deleniti accusantium nam laboriosam, necessitatibus ut earum provident iusto! Exercitationem expedita, debitis ab ratione accusantium tempore. At consequatur laborum veritatis quae minima corporis pariatur ad quas, possimus corrupti nostrum maiores eligendi consectetur tempora hic rerum reiciendis. Nam temporibus nihil consectetur voluptatem recusandae modi, libero deleniti accusamus veniam dolore maiores atque? Cum perspiciatis ad deleniti? Deserunt, optio provident impedit accusantium, quidem ipsam possimus unde in, ab qui doloribus? Alias eos architecto possimus, reprehenderit at eum!</h1> */}
            <div id="projects" className="mt-5 space-y-5">
              <div className="md:flex gap-5">
                <img className=" md:w-110" src="https://portfolio-react-sand-seven.vercel.app/assets/restuarant-BchGQAgi.png" alt="" />
                <div>
                  <p>Spice Veda is a simple and fully responsive static restaurant website created with pure HTML and CSS. It showcases the restaurant’s menu, special dishes, and brand story through a clean and minimal layout. Designed for smooth browsing and fast loading, it works on all screen sizes without using JavaScript or frameworks.</p>
                  <button id="btn-click"><a target="_blank" href="https://restuarent-five.vercel.app/">Click Here</a></button>
                </div>
              </div>
              <div className="md:flex gap-5">
                <img className="md:w-110" src="https://portfolio-react2-iota.vercel.app/assets/travel-CwQM8Tr5.png" alt="" />
                <div>
                  <p>Luxura Travels is a fully static website built using HTML, CSS, and Tailwind CSS. It highlights luxury travel destinations, exclusive packages, and easy-to-browse sections that give users a smooth and elegant viewing experience. Designed for speed and simplicity, it works perfectly across devices without requiring any backend or database.</p>
                  <button id="btn-click"><a target="_blank" href="https://luxura-travels-nine.vercel.app/">Click Here</a></button>
                </div>
              </div>
              <div className="md:flex gap-5">
                <img className="md:w-110" src="https://portfolio-react2-iota.vercel.app/assets/course-D1UX8NI3.png" alt="" />
                <div>
                  <p>Built a frontend clone of the Udemy platform focusing on course listings, category pages, and responsive UI components. The project uses React.js for a modular, component-based architecture and Tailwind CSS for fast, modern, and consistent styling. Reusable components and optimized layouts improve performance and maintain a clean, uniform user experience across devices</p>
                  <button id="btn-click"><a target="_blank" href="https://react-course-selling-app.vercel.app/">Click Here</a></button>
                </div>
              </div>
              <div className="md:flex gap-5">
                <img className="md:w-110" src="https://portfolio-react2-iota.vercel.app/assets/resume-D6w4gvsR.png" alt="" />
                <div>
                  <p>RBuilder is a simple and efficient CRUD application built using React. It allows users to create, read, update, and delete resume data with a clean and responsive interface. The project uses a local db.json file (via JSON Server) to simulate a backend, enabling fast development and smooth data handling without a full database setup. Reusable components and organized layouts ensure a consistent user experience.</p>
                  <button id="btn-click"><a target="_blank" href="https://resume-builder-fronted.vercel.app/">Click Here</a></button>
                </div>
              </div>

            </div>
          </div>
          <div className=" absolute top-0 left-0 w-full h-full z-1">
            <svg width="100%" height="100%" viewBox="0 0 1394 1024" fill="none">
              <path
                id="svgg"
                ref={svgRef}
                d="M52.6822 11C29.5239 62.9397 43.3622 113.446 52.6822 144C62.0022 174.554 133.124 245.38 138.682 237.5C239.804 293.524 296.283 276.356 397.182 282.5H688.682C884.182 282.5 908.182 282.5 999.182 320.5C1090.18 358.5 1126.08 420.208 1084.68 502.5C999.182 638.5 721.182 627.516 602.682 660.5C484.182 693.484 175.682 740.5 397.182 610C618.682 479.5 753.793 553.668 367.182 769C-19.429 984.332 436.682 895.731 602.682 830.5C768.682 765.269 709.18 787.129 756.182 769C803.185 750.871 954.682 748 1016.18 780C1077.68 812 1164.18 898.5 1242.68 873.5C1321.18 848.5 1364.18 1027 1364.18 1027"
                stroke="#ffffff"
                strokeOpacity="0"
                strokeWidth="350"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div ref={page4} onMouseEnter={page4Enter} onMouseLeave={page4Leave} id="page4" className=" h-screen w-full bg-white  text-white">
          <div className="flex justify-center pt-25">
            <h1 ref={contactheading}  id="contacth1" className="uppercase font-extrabold text-5xl md:text-8xl text-center">
              Contact
            </h1>
          </div>
          <div className="grid md:grid-cols-2 w-100 md:w-full md:px-15">

            {/* left */}
            <div ref={contacthead} className=' text-black pt-10'>
              <div></div>
              <form ref={form} onSubmit={sendEmail} className='space-y-10'>
                <div className='px-10'>
                  <input ref={nameRef} type="text" name="from_name" className='border-l-2 outline-0 border-b-2 w-full py-2 px-3' placeholder='ENTER YOUR NAME*' />
                </div>
                <div className='px-10'>
                  <input ref={emailRef} type="text" name="user_email" className='border-l-2 outline-0 border-b-2 w-full py-2 px-3' placeholder='ENTER YOUR EMAIL*' />
                </div>
                <div className='px-10'>
                  <input ref={phoneref} type="text" name="phone" className='border-l-2 outline-0 border-b-2 w-full py-2 px-3' placeholder='PHONE NUMBER*' />
                </div>
                <div className='px-10'>
                  <textarea ref={messegeRef} name="message" className='border-l-2 outline-0 border-b-2 w-full pb-8 px-3' placeholder='YOUR MESSEGE*' id=""></textarea>
                </div>
                <div className='flex justify-center'>
                  <button type='submit' className='border-l-2 border-r-2 outline-0 px-8 cursor-pointer py-1 font-medium'>
                    SUBMIT
                  </button>
                </div>
              </form>
              <div></div>
            </div>
            {/* right */}
            <div ref={contactIcons} className="flex mt-20 md:mt-0 justify-center items-center text-4xl md:text-7xl gap-5 text-black ">
              <a className="icon" href="https://www.linkedin.com/in/rishi-sankar-r-430a4a362/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
              <a className="icon" href="https://github.com/Rishi2057?tab=repositories" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
              <a className="icon" href="https://vercel.com/rishi2057s-projects" target="_blank" rel="noopener noreferrer"> <IoLogoVercel /></a>
              <a className="icon" href="https://wa.me/918848062876" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
