import ResumeImg from '../img/M.png';
export default function Resume () {

    const config = {
        link: 'https://pdfobject.com/pdf/sample.pdf'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-resume px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[500px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[130px] font-bold'>Resume</h1>
            <p className='pb-5'>
                You can view my resume <a  className='btn' href={config.link}>Download</a>
                            </p>
            
            </div>
        </div>
    </section>
}