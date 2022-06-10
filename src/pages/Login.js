import React from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/google.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import { useSignInWithEmailAndPassword, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../components/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);

    let errorMessage = <p className='text-red-500'> {error?.message} </p> ;
    
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }

    if(loading ){
        return <Loading></Loading>
    }



    return (
        <div class="hero h-main lg:p-10  bg-accent">
            <div class="card flex-shrink-0 mt-3 w-full max-w-sm lg:shadow-2xl bg-base-100">
                <div class="card-body ">
                    <form onSubmit={handleLogin}>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" class="input input-bordered" />

                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn btn-primary btn-outline w-full mt-3' type="submit" value="Login" />
                    </form>
                    <p>New Account create please ?  <Link className='text-secondary font-bold' to='/signup'>Sign Up</Link></p>

                    <div class="divider">OR</div>

                    <div className='flex justify-around items-center btn btn-primary btn-outline '>
                        continue with google
                        <img className=' p-2 ml-4 w-12 h-12' src={google} alt="" />
                    </div>
                    <div className='flex justify-around items-center btn btn-primary btn-outline '>
                        continue with github
                        <img className=' p-2 ml-4 w-12 h-12' src={github} alt="" />
                    </div>
                    <div onClick={() => signInWithFacebook()} className='flex justify-around items-center btn btn-primary btn-outline '>
                        continue with facebook
                        <img className=' p-2 ml-4 w-12 h-12' src={facebook} alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;