import group from '../assets/Group 1.png'
import group2 from '../assets/Group 2.png'
import group3 from '../assets/Group 3.png'
import group4 from '../assets/Group 4.png'

const Gain = () => {
  return (
    <div className="bg-[#0161A2] lg:px-[60px] xs:p-[15px] py-[40px]">
        <h1 className="text-[#FDB933] text-[30px] font-[600] text-center mt-[3rem]">WHAT DO YOU GAIN?</h1>
        <div className='lg:flex gap-[13rem] items-center mt-[5rem]'>
            <div>
                <h2 className='text-[30px] text-[#fff] font-[500]'>Exhibition Booth</h2>
                <p className='lg:w-[536px] text-[20px] mt-[1rem] text-[#fff] font-[400]'>Immerse yourself in a world of innovation and creativity as we showcase the remarkable projects and artworks crafted by our talented graduates. From breathtaking artwork to cutting-edge designs and groundbreaking innovations, you&apos;ll witness the limitless potential of our graduates.</p>
            </div>
            <div className='lg:mt-0 xs:mt-[4rem]'>
                <img src={group} />
            </div>
        </div>
        <div className='lg:flex gap-[13rem] items-center mt-[5rem]'>
            <div>
                <img src={group2} />
            </div>
            <div className='lg:mt-0 xs:mt-[4rem]'>
                <h2 className='text-[30px] text-[#fff] font-[500]'>Network with like-minded <br/> entrepreneurs</h2>
                <ul className='lg:w-[536px] text-[20px] mt-[1rem] text-[#fff] font-[400] list-decimal ms-[2rem]'>
                    <li>Gain inspiration from the incredible projects and artwork on display.</li>
                    <li>Celebrate the achievements of our graduates and share in their joyous moment.</li>
                    <li>Discover emerging talent and groundbreaking innovations that are shaping the future.</li>
                </ul>
            </div>
        </div>
        <div className='lg:flex gap-[13rem] items-center mt-[5rem]'>
            <div>
                <h2 className='text-[30px] text-[#fff] font-[500]'>Award Recognitions</h2>
                   <p className='lg:w-[536px] text-[20px] mt-[1rem] text-[#fff] font-[400]'>Recognizing excellence and outstanding achievements, our Award Ceremony will shine a spotlight on individuals who have demonstrated exceptional talent, leadership, and innovation. Witness the excitement as we announce the winners and celebrate their remarkable contributions.</p>
            </div>
            <div className='lg:mt-0 xs:mt-[4rem]'>
                <img src={group3} />
            </div>
        </div>
        <div className='lg:flex gap-[13rem] items-center mt-[5rem] pb-[7rem]'>
            <div>
                <img src={group4} />
            </div>
            <div className='lg:mt-0 xs:mt-[4rem]'>
                <h2 className='text-[30px] text-[#fff] font-[500]'>Investment and fund-raising <b/> opportunities</h2>
                   <p className='lg:w-[536px] text-[20px] mt-[1rem] text-[#fff] font-[400]'>Lorem ipsum dolor sit amet consectetur. Ac ipsum sit aenean ipsum arcu tempor commodo libero quis. Fames ullamcorper lectus scelerisque accumsan faucibus. Egestas dolor.</p>
            </div>
        </div>
    </div>
  )
}

export default Gain