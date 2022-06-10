import React from 'react';

const AddService = () => {

    const addNewService = event => {
        event.preventDefault();
        const name = event.target.name_service.value ;
        const price = event.target.price.value ;
        const img = event.target.img.value ;

        const service = {
            name_service: name ,
            price,
            img,

        }

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },body:JSON.stringify(service)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        
        
        console.log(name, price, img);
        event.target.reset();
    }
   
    return (
        <div className='flex justify-center  items-center h-full bg-accent'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-4xl text-secondary">Add New Service</h2>
                    <form onSubmit={addNewService}>

                        <input  type="text" placeholder="Service Name" name='name_service' class="mt-3 input input-bordered input-primary w-full max-w-xs" required />

                        <input type="number" placeholder="Price" name='price' class="mt-3 input input-bordered input-primary w-full max-w-xs" required />

                        <input  type="text" placeholder="img URL" name='img' class="mt-3 input input-bordered input-primary w-full max-w-xs" required/>

                        <input  className='w-full btn  btn-secondary mt-3' type="submit" value="Add Service" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;