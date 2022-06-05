import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className='lg:shadow-lg lg:w-4/12 p-8'>
                <h1 className='text-3xl mb-3 text-orange-500 font-bold text-center'>Contact Me </h1>
                <form className='w-full mx-auto'>
                    <input type="text" placeholder="Subject" class="input mb-3 input-bordered w-full " />

                    <input type="email" placeholder="Email" class="input mb-3 input-bordered w-full " />
                    <textarea placeholder='Please Text Your Message' className=' p-2 border-2 mb-3 rounded-lg h-32 w-full' name="" id=""></textarea>
                    <input className='btn btn-accent w-full' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;