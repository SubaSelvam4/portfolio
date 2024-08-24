export default function Contact () {

    const config = {
        email: ' subaselvam298@gmail.com',
        phone: ' +917708796480'
    }
    return <section id='contact' className='flex flex-col bg-contact px-5 py-32'>
                
                <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[130px] font-bold'>Contact</h1>
            <p className='pb-5'>
                If you want to discuss more in detail, please contact
                            </p>
                            <p className="py-2 p-one"><span className="font-bold">Email : </span> {config.email}</p>
                            <p className="py-2 p-two"><span className="font-bold">Phone : </span> {config.phone}</p>
            
            </div>
    </section>
}