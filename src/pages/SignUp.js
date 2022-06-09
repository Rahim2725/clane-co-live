import React from 'react';
import { Link} from 'react-router-dom';
import google from '../assets/google.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'

const SignUp = () => {
    return (
        <div class="hero h-screen lg:pt-10 bg-accent">
            <div class="card w-full max-w-sm lg:shadow-2xl bg-base-100">
                <div class="card-body ">
                    <form>
                        <div className="form-control">
                            <label className='label'>
                                <span className='label-text'> Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input input-bordered" />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className='btn btn-primary btn-outline w-full' type="submit" value="Sing Up" />
                    </form>
                    
                    <p>Already haven an Account Please ? <Link className='text-secondary font-bold' to='/login'>Login</Link></p>

                    <div class="divider">OR</div>
                    
                    <div className='flex justify-around items-center btn btn-primary btn-outline '>
                        continue with google
                        <img className=' p-2 ml-4 w-12 h-12' src={google} alt="" />
                    </div>
                    <div className='flex justify-around items-center btn btn-primary btn-outline '>
                        continue with github
                        <img className=' p-2 ml-4 w-12 h-12' src={github} alt="" />
                    </div>
                    <div className='flex justify-around items-center btn btn-primary btn-outline '>
                        continue with facebook
                        <img className=' p-2 ml-4 w-12 h-12' src={facebook} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;