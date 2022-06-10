import React from 'react';

const AddService = () => {
    return (
        <div className='flex justify-center  items-center h-full bg-accent'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-4xl text-secondary">Add New Service</h2>
                    <form>
                        <input type="text" placeholder="Type here" class="mt-3 input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="mt-3 input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="mt-3 input input-bordered input-primary w-full max-w-xs" />

                        <input className='w-full btn  btn-secondary mt-3' type="submit" value="Add Service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;