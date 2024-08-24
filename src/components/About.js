import AboutImg from '../img/F.png';
export default function About () {
    const config =  {
        line1 : 'Hi, My name is Suba Selvam. I am a Full-stack developer. I build beautiful websites with React.js and Tailwind CSS',
        line2 : 'I am proficient in Frontend skills like React.js, Tailwind CSS, HTML5, CSS3 and many More.',
        line3 : 'In backend I know MySql, SQL, MongoDB, and Mongoose.'
    }


    return <section className='flex flex-col md:flex-row bg-about px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>
                {config.line1}
            </p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}