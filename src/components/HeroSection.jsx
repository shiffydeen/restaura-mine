import video  from '../assets/hero.mp4';
import hero from '../assets/hero.jpeg';
import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
   <section className='h-screen relative flex justify-center'>
        <div className='absolute inset-0 w-full h-full -z-20'>
            <video autoPlay loop src={video} className='w-full h-full object-cover'/>
        </div>
        <div className='absolute h-screen bg-gradient-to-b -z-10 from-transparent to-black from-70% inset-0'/>
        <div className='h-screen flex flex-col justify-end pb-20 z-10'>
            <img src={logo} alt="" className='w-full p-4'/>
            <p className='p-4 tracking-tighter'>Paris</p>
        </div>
   </section>
  )
}

export default HeroSection
