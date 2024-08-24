import HeroImg from '../img/T.png';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Hero() {
    const config= {
        subtitle: 'I am a Full-stack developer and Designer'
    }



    return <section className='md:flex flex-col md:flex-row px-5 py-32 bg-hero justify-center'>
        <div className='w-1/2 flex flex-col'> 
        <h1 className=' text-white text-6xl font-hero-font'>Hi,<br/> <span className='text-black'>I am</span> Suba Selvam
        <p className='text-2xl'>{config.subtitle} </p>
        </h1>
        <div className='flex py-10'>
            <a href='#' className='pr-5 hover:text-red-600'><FaInstagram size={40}/></a>
            <a href='#' className='pr-5 hover:text-blue-500'><FaTwitter size={40}/></a>
            <a href='#' className='pr-5 hover:text-blue-600'><FaFacebook size={40}/></a>
            <a href='#' className='pr-5 hover:text-blue-700'><FaLinkedin size={40}/></a>
            
        </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}