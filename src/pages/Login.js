import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    }

    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleLogin}>

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

                        <input className='btn btn-primary w-full mt-3' type="submit" value="Login" />
                    </form>
                    <p>New Account create please ?  <Link className='text-secondary font-bold' to='/signup'>Sign Up</Link></p>

                    <div class="divider">OR</div>
                    <div className='btn btn-primary'>
                        continue with google
                        <img src="" alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;