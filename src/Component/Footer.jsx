import ayoba from '../assets/ayoba_white.png'
import logo from '../assets/ADANIAN LOGO 1.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#001F34] px-[60px] py-[70px]'>
        <div className='lg:flex justify-between items-center'>
            <Link to='https://www.ayoba.me/web/home?lang=en' target='_blank'>
                <img src={ayoba} className='w-[200px] h-[64px]' />
            </Link>
            <div className='flex text-[24px] gap-[1rem] text-[#fff] lg:mt-0 xs:mt-[5rem]'>
                <Link to='' target="_blank"><FaFacebook/></Link>
                <Link to='https://www.instagram.com/adanianlabsng' target="_blank"><FaInstagram/></Link>
                <Link to='https://twitter.com/adanianlabsng' target="_blank"><FaTwitter/></Link>
                <Link to='https://www.linkedin.com/company/adanianlabsnigeria/' target="_blank"><FaLinkedin/></Link>
            </div>
            <Link to='hhtps://www.adanianlabs.io/' target='_blank'>
                <h3 className='text-[#fff] text-[18px] font-[400] lg:mt-0 xs:mt-[5rem]'>Powered by</h3>
                <img src={logo} className='w-[154px] h-[56px]' />
            </Link>
        </div>
    </div>
  )
}

export default Footer