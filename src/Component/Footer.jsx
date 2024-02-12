import ayoba from '../assets/ayoba_white.png'
import logo from '../assets/ADANIAN LOGO 1.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#001F34] px-[60px] py-[70px]'>
        <div className='lg:flex justify-between items-center'>
            <div>
                <img src={ayoba} className='w-[200px] h-[64px]' />
            </div>
            <div className='flex text-[24px] gap-[1rem] text-[#fff] lg:mt-0 xs:mt-[5rem]'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedin/>
                <FaTiktok/>
            </div>
            <div>
                <h3 className='text-[#fff] text-[18px] font-[400] lg:mt-0 xs:mt-[5rem]'>Powered by</h3>
                <img src={logo} className='w-[154px] h-[56px]' />
            </div>
        </div>
    </div>
  )
}

export default Footer