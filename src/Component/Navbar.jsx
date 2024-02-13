import ayoba from '../assets/ayoba.png'
import logo from '../assets/ADANIAN LOGO 1.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Navbar = ({ setShowSponsorBox, setShowExhibitorBox }) => {
  const handleSponsorClick = () => {
    setShowSponsorBox(true);
    setShowExhibitorBox(false);
};

const handleExhibitorClick = () => {
    setShowSponsorBox(false);
    setShowExhibitorBox(true);
};

  return (
    <div className='px-[60px] py-[10px] font-nunito'>
        <div className='lg:flex xs:hidden justify-between'>
           <div className='flex justify-between items-center gap-[10rem]'>
           <Link to='https://www.ayoba.me/web/home?lang=en' target='_blank'>
                <img src={ayoba}/>
            </Link>
            <Link to='hhtps://www.adanianlabs.io/' target='_blank'>
                <img src={logo} className='lg:w-[164.27px] h-[56px]' />
            </Link>
           </div>
           <div className='flex gap-[2rem] items-center'>
                <div className='bg-[#0161A2] lg:w-[150px] h-[45px] rounded-[8px] p-[10px] flex justify-center text-[#fff] text-[16px] font-[400] leading-[22px]' onClick={handleSponsorClick}><Link to='#sponsorSection'>Sponsorship</Link></div>
                <div className='border-[1px] border-solid border-[#0161A2] lg:w-[150px] h-[45px] rounded-[8px] p-[10px] flex justify-center text-[#0161A2] text-[16px] font-[400] leading-[22px]' onClick={handleExhibitorClick}><Link to='#exhibitorSection'>Exhibitor</Link></div>
            </div>
        </div>
    </div>
  )
}

Navbar.propTypes = {
  setShowSponsorBox: PropTypes.func.isRequired,
  setShowExhibitorBox: PropTypes.func.isRequired
};

export default Navbar