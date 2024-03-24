import scrollAnimationData from '../../assets/animation/scroll.json'
import Lottie from 'react-lottie';
import { PiPhoneCall } from "react-icons/pi";
import {FaInstagram} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import { MdOutlineLocationOn } from "react-icons/md";

const Hero = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: scrollAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div className="w-screen h-screen bg-hero-background bg-cover flex flex-col items-center justify-center text-white">
        <div className='flex-grow'></div>
        
        <section className="flex items-center justify-between w-10/12 mx-auto">
        <div>
            <p className="text-9xl font-bold">Zemenay</p>
            <p className="text-9xl font-bold">Leather</p>
            
        </div>

        {/* descriptions */}
        <div className="flex items-center space-x-5">
            <p className='max-w-64 justify-end'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, incidunt qui quas ex quisquam voluptates aperiam veniam veritatis consectetur animi a debitis quasi! Dignissimos laborum, rerum nostrum alias tempore atque?
            </p>
            <div className="flex-grow"></div>
        {/* Icons */}
            <div className='flex flex-col space-y-6'>
             <FaTelegramPlane size={40}/>   
             <FaInstagram size={40}/>   
             <MdOutlineEmail size={40}/>   
            
            
        </div>

        </div>

       
        </section>


        <div className='flex-grow'></div>

       <div className='my-5'>
             <Lottie  options={defaultOptions} width={30} height={45} ></Lottie>
       </div>

        <div className='flex justify-between items-end my-5 w-10/12'>
                <div>
                    <div className='flex items-center space-x-3 '>
                        <PiPhoneCall size={32}/>
                        <p className='text-2xl font-semibold'>Call Us</p>
                    </div>
                    <p className='font-light text-4xl py-5'>+251908883884/67</p>
                </div>
                <div>
                    <div className='flex items-center space-x-3 '>
                        <MdOutlineEmail size={32}/>
                        <p className='text-2xl font-semibold'>Email Us</p>
                    </div>
                    <p className='font-light text-4xl py-5'>contact@zemenay.com</p>
                </div>
                <div>
                    <div className='flex items-center space-x-3 '>
                        <MdOutlineLocationOn size={32}/>
                        <p className='text-2xl font-semibold'>Location</p>
                    </div>
                    <p className='font-light text-4xl py-5'>Ethiopia, Addis Abeba</p>
                </div>
        </div>
        
    </div>
  )
}

export default Hero