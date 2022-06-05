import React from 'react';
import { Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
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
                        <input className='btn btn-primary w-full' type="submit" value="Sing Up" />
                    </form>
                    
                    <p>Already haven an Account Please ? <Link className='text-secondary font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;