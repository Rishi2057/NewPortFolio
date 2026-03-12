import { gsap } from "gsap";
import portfolio from "./assets/Adobe Express - file (5).png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Header({ pointer,scrollToProjects,scrollToAbout,scrollToContact,scrollToHome }) {
  console.log(pointer.current);

  const headerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        scrub: true,
        // markers:true,
        start: "top top",
        end: "top -20%"

      }
    })

    tl.to(headerRef.current, {
      height: 100,
      backgroundColor: "white",
      color: "#000",
      ease: "linear",
    })
  }, [])

  const handleEnter = () => {
    pointer.current.classList.add("-translate-y-7")
    pointer.current.classList.add("-translate-x-3")
    pointer.current.classList.replace("h-3", "h-10")
    pointer.current.classList.replace("w-3", "w-10")
    pointer.current.classList.replace("bg-white", "bg-transparent")
    pointer.current.classList.add(
      "border-yellow-500",
      "border-5",
    )
  }

  const handleLeave = () => {
    pointer.current.classList.remove("-translate-y-7")
    pointer.current.classList.remove("-translate-x-3")
    pointer.current.classList.replace("h-10", "h-3")
    pointer.current.classList.replace("bg-transparent", "bg-white")
    pointer.current.classList.replace("w-10", "w-3")
    pointer.current.classList.remove(
      "border-yellow-500",
      "border-5",
    )
  }

  return (
    <>
      <div id="logoheader" ref={headerRef} className="h-30 w-full z-99 text-white px-5 md:px-20 py-5 bg-transparent flex justify-start gap-5 md:gap-15 items-center fixed">
        <div className="h-15 cursor-not-allowed">
          <div>
            <img onClick={scrollToHome} className="w-29" src={portfolio} alt="" />
          </div>
        </div>
        <h4 onClick={scrollToAbout} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="font-bold font-poppins  uppercase text-xs whitespace-nowrap md:text-xl hover:translate-x-1 headerLink">About Me</h4>
        <h4 onClick={scrollToProjects} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="font-bold font-poppins  uppercase text-xs whitespace-nowrap md:text-xl hover:translate-x-1 headerLink">Projects</h4>
        <h4 onClick={scrollToContact} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="font-bold font-poppins  uppercase text-xs whitespace-nowrap md:text-xl hover:translate-x-1 headerLink">Contact</h4>
      </div>
    </>
  )
}

export default Header