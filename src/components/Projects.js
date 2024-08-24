import WebsiteImg1 from '../img/Z.jpg';
import WebsiteImg2 from '../img/X.jpg';
import WebsiteImg3 from '../img/Y.jpg';
export default function Projects() {
    return <section id='project' className="flex flex-col py-20 px-5 justify-center bg-project text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl  text-white border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
            <p>These are some of my best projects. I have build these with React MERN and vanilla CSS. Click them out.</p>
            </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5 '>
            <div className='relative'>
<img  className='h-[250px] w-[50000px]' src={WebsiteImg1}/>
<div className='project-desc'>
    <p className='text-center px-5 py-5'> Civil Service Provider</p>
    </div>
    </div>
        <div className='relative'>
<img  className='h-[250px] w-[50000px]' src={WebsiteImg2}/>
<div className='project-desc'>
    <p className='text-center px-5 py-5'>Online Tiffin Management System</p>
</div>
</div>
        <div className='relative'>
<img  className='h-[250px] w-[50000px]' src={WebsiteImg3}/>
<div className='project-desc'>
    <p className='text-center px-5 py-5'>Online Marketing Management System</p>
</div>
</div>
         </div>
        </div>
    </section>
}