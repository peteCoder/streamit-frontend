import React, {useState} from 'react'
import { Link } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

import { useAuthContext } from '../context/useAuthContext';
import { images } from '../assets'
import { useForm } from "react-hook-form";
import { GoogleLogin } from '@react-oauth/google';


const SignUp = () => {

  const {signUp, loading, successMessage, error: signUpError} = useAuthContext();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    
    const { username, email, password } = data;
    signUp(username, email, password);
  }

  const responseFacebook = (response) => {
    console.log(response)
  }

  const getGoogleDetails = (credentialResponse) => {
    console.log(credentialResponse)

  }


  return (
    <div className='w-full bg-center bg-cover relative'>
      <img src={images.TSLBG} className='hidden sm:block object-cover absolute top-0 bottom-0 right-0 left-0 -z-[1] min-h-[100vh] sm:min-h-[100vh] md:min-h-[100vh]' />
      <div className='w-full h-screen absolute top-0 left-0 bottom-0 right-0 sm:min-h-[100vh]'>
        <div className='relative w-screen h-screen'>
          <div className='absolute top-0 left-0 w-screen z-20 min-h-[90px] flex'>
            <img src={images.tslLogo} className="w-[130px] sm:w-[167px] ml-[31.5px] self-center" alt="" />
          </div>
          <div className="pt-[80px] min-h-screen flex justify-center items-center">

            {/* Form */}
            <form method="POST" onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-[430px] h-fit bg-black
              sm:bg-[rgba(0,0,0,.75)] bg-transparent rounded-md flex flex-col px-[20px] sm:px-[40px] md:px-[60px] py-3">
                
                <div>
                    <h1 className='text-white mb-7 text-[25px] sm:text-[30px] md:text-[32px] font-[500]'>Sign Up</h1>
                    {signUpError && (
                      <div className="validation text-[#e87c03] text-[12px] mb-1 py-[6px] px-[3px]">{signUpError}</div>
                    )}
                    {successMessage && (
                      <div className="validation text-[green] text-[12px] mb-1 py-[6px] px-[3px]">{successMessage}</div>
                    )}
                    
                    <div className='mt-3 relative w-full h-[50px] text-[#8c8c8c] ]'>
                      <input {...register("username", { required: true })} placeholder='Username' type="text" name="username" id="username" className={`w-full outline-none bg-[#333] h-full rounded text-white pb-0 px-5 placeholder:text-[gray] focus:bg-[#454545] font-light placeholder:text-[15px]`} />
                    </div>
                    {errors.username && (
                      <div id="validation" className="validation text-[#e87c03] text-[12px] py-[6px] px-[3px]">
                        Please enter a non-existent username.
                      </div>
                    )}

                    <div className='mt-3 relative w-full h-[50px] text-[#8c8c8c] ]'>
                      <input {...register("email", { required: true })} placeholder='Enter Email' type="text" name="email" id="email" className={`w-full outline-none bg-[#333] h-full rounded text-white pb-0 px-5 placeholder:text-[gray] focus:bg-[#454545] font-light placeholder:text-[15px]`} />
                    </div>
                    
                    {errors.email && (
                      <div id="validation" className="validation text-[#e87c03] text-[12px] py-[6px] px-[3px]">
                        Please enter a valid email.
                      </div>
                    )}
                  
                    <div className='mt-3 relative w-full h-[50px] text-[#8c8c8c] ]'>
                      <input {...register("password", { required: true, minLength: 6, maxLength: 60 })} placeholder='Password' type="password" name="password" id="password" className={`w-full outline-none bg-[#333] h-full rounded text-white pb-0 px-5 placeholder:text-[gray] focus:bg-[#454545] font-light placeholder:text-[15px]`} />
                    </div>
                    {errors.password && (
                      <div id="validation" className="validation text-[#e87c03] text-[12px] py-[6px] px-[3px]">
                        Your password must contain between 6 and 60 characters.
                      </div>
                    )}


                    <button className='mt-3 mb-3 mx-0 font-[500] rounded text-[16px] w-full p-3 sm:p-3 text-white bg-[#80D200] flex items-center justify-center'>
                      {loading ? <Spinner /> : <span>Sign up</span>}
                    </button>
                    {/* <FacebookLogin
                      appId="931737201320768"
                      autoLoad={true}
                      fields="name,email,picture"
                      callback={responseFacebook}
                      cssClass="my-facebook-button-class"
                      // icon={<TiSocialFacebookCircular />}
                    /> */}
                    {/* Facebook */}
                    {/* <FacebookLogin
                      appId="931737201320768"
                      autoLoad
                      callback={responseFacebook}
                      render={renderProps => (
                        <button className='mt-1 mb-3 mx-0 font-[500] rounded text-[16px] w-full p-3 sm:p-3 text-white bg-blue-700'>Facebook</button>
                      )}
                    /> */}

                    {/* Google */}
                    {/* <button 
                      className='mt-1 mb-3 mx-0 font-[500] rounded text-[16px] w-full 
                        p-3 sm:p-3 text-green-700 bg-white'
                        onClick={() => login()}
                    >Google</button> */}
                    <div className='py-2'>
                      <GoogleLogin
                        onSuccess={credentialResponse => {
                          getGoogleDetails(credentialResponse)
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                      />
                    </div>
                    
                    

                </div>

                <div className='text-[#b3b3b3] font-light text-[13px] w-full flex items-center justify-between mt-5'>
                  <div className='flex items-center'>
                    <input className='mr-1 p-2' type="checkbox" name="" id="" />
                    <label className=''>Remember me</label> 
                  </div>
                  
                  <a className='' href="">Need help? </a>
                </div>

                <div className='text-white mt-[10px]'>
                  <div className="text-[#737373] text-[16px] font-[400] mt-4">
                  Already have an account? {" "} <Link to='/login' className='text-white hover:underline'>Log in</Link>
                  </div>
                  <div className='text-[13px] my-[16px] mx-0'>
                    <span className='text-[#8c8c8c]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
                    <a className='text-[#80D200]' href="#">Learn more.</a>
                  </div>
                </div>
            </form>

          </div>

          <div className='sm:bg-[rgba(0,0,0,.75)] bg-black py-8'>
            <div className='max-w-[1000px] w-[90%] mx-auto py-8'>
              <div className="text-[#737373] mb-8">
                <a className='text-[1em]' href="">Questions? Contact us.</a>
              </div>

              <ul className='text-[#737373]'>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px] hover:underline' href="">FAQ</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px] hover:underline' href="">Help Center</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px] hover:underline' href="">Terms of Use</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px] hover:underline' href="">Privacy</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px] hover:underline' href="">Cookie Preference</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px] hover:underline' href="">Corporate Information</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp