import { gsap } from "gsap";
import portfolio from "./assets/Adobe Express - file (5).png"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Header() {

  const headerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        // markers: true,
        scrub: true,
        start: "top top",
        end: "top -40%"

      }
    })

    tl.to(headerRef.current, {
      height: 100,
      backgroundColor: "white",
      color: "#000",
      ease: "linear",
    })
  }, [])

  const onMouseEnter = (e)=>{
    console.log(e);
    
  }

  return (
    <>
      <div id="logoheader" ref={headerRef} className="h-30 w-full z-99 text-white px-20 py-5 bg-transparent flex justify-start gap-15 items-center fixed">
        <div className="h-15 cursor-not-allowed">
          <div>
            <img className="w-29" src={portfolio} alt="" />
          </div>
        </div>
        <h4 onMouseEnter={()=>("About")} className="font-bold font-poppins  uppercase text-xl">About Me</h4>
        <h4 onMouseEnter={()=>("Projects")} className="font-bold font-poppins  uppercase text-xl">Projects</h4>
        <h4 onMouseEnter={()=>("Contact")} className="font-bold font-poppins  uppercase text-xl">Contact</h4>
      </div>
    </>
  )
}

export default Header