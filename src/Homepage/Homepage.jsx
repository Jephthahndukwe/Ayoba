import { useState } from "react"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import ayoba from '../assets/ayoba.png'
import woman from '../assets/women_chopped.png'
import rectangle from '../assets/Rectangle 1.png'
import Gain from "./Gain"
import { Link } from "react-router-dom"
import Sponsors from "./Sponsors"

const Homepage = () => {
    const [showSponsorBox, setShowSponsorBox] = useState(true); // Set to true by default
    const [showExhibitorBox, setShowExhibitorBox] = useState(false);


  return (
    <div>
        <Navbar
             setShowSponsorBox={setShowSponsorBox}
             setShowExhibitorBox={setShowExhibitorBox}
        />
        <div>
            <div>
                    <div className="lg:px-[60px] xs:px-[12px] mt-[5rem] lg:flex gap-[450px]">
                        <div>
                            <img src={ayoba} className="lg:w-[400px] xs:w-[200px] lg:h-[122px]" />
                            <h2 className="text-[#0061A1] text-[20px] font-[600]"><span className="text-[#FDB933]">SME</span> ACCELERATOR, Nigeria 2023</h2>
                            <div className="flex gap-2 mt-[1rem] items-center">
                                <span className="text-[#FDB933] lg:text-[25px] xs:text-[20px] font-[700]">Exhibition</span> 
                                <div className="w-[2px] h-[25px] bg-[#494B4A]"/> 
                                <span className="text-[#FDB933] lg:text-[25px] lg:text-[25px] xs:text-[20px] font-[700]">Graduation</span> 
                                <div className="w-[2px] h-[25px] bg-[#494B4A]"/> 
                                <span className="text-[#FDB933] lg:text-[25px] lg:text-[25px] xs:text-[20px] font-[700]">Awards</span>
                            </div>
                            <h2 className="text-[#FDB933] xs:text-[20px] lg:text-[25px] font-[400] mt-[40px]"><span className="font-[700]">Ballroom</span>, Lagos Oriental Hotel.</h2>
                            <h2 className="bg-[#FFEFCE] mt-[10px] text-[#0161A2] text-[25px] font-[400] w-[370px] px-[10px]">10AM - 16PM | <span className="font-[700]">27th Mar </span> 2024 </h2>
                           <p className="lg:mt-[10rem] xs:mt-[3rem] relative"><Link to='/' className="bg-[#0161A2] lg:w-[361px] xs:w-[50px] text-[#fff] lg:text-[18px] xs:text-[14px] font-[400] h-[77px] rounded-[8px] p-[12px]">Download Concept Note</Link></p>
                        </div>
                        <div>
                            <img src={woman} className="lg:absolute lg:mt-0 xs:mt-[5rem]" />
                        </div>
                    </div>
                    <div className="lg:mt-[-6.8rem]">
                        <img src={rectangle} className="w-[100%] lg:block xs:hidden" />
                    </div>
                </div>
        </div>
        <Sponsors
             showSponsorBox={showSponsorBox}
             showExhibitorBox={showExhibitorBox} 
             setShowSponsorBox={setShowSponsorBox}
             setShowExhibitorBox={setShowExhibitorBox}
        />
        <Gain/>
        <Footer/>
    </div>
  )
}

export default Homepage