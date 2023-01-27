import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { images } from '../assets'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div className='relative w-full h-full'>
      <img src={images.banner} className='hidden sm:block object-cover absolute top-0 bottom-0 right-0 left-0 z-5 min-h-[180vh] sm:min-h-[160vh] md:min-h-[160vh]' />
      <div className='bg-black sm:bg-black/60 w-full h-full absolute top-0 left-0 bottom-0 right-0 min-h-[180vh] sm:min-h-[160vh]'>
        <div className='relative w-full h-full'>
          <div className='absolute top-0 left-0 w-full z-20 min-h-[90px] flex'>
            <img src={images.logo} className="w-[130px] sm:w-[167px] ml-[31.5px] self-center" alt="" />
          </div>
          <div className="pt-[80px] min-h-screen flex justify-center items-center">

            {/* Form */}
            <form action="" className="w-full sm:w-[430px] h-[660px] mb-[90px] 
              sm:bg-[rgba(0,0,0,.75)] bg-transparent rounded-md flex flex-col pt-[60px] px-[20px] sm:px-[40px] md:px-[60px] pb-[100px]">
                
                <div>
                  <h1 className='text-white mb-7 text-[25px] sm:text-[30px] md:text-[32px] font-[500]'>Sign In</h1>
                    <div className='relative w-full h-[50px] text-[#8c8c8c] ]'>
                      <input placeholder='Email or phone nummber' type="text" name="email" id="email" className={`w-full outline-none bg-[#333] h-full rounded text-white pb-0 px-5 placeholder:text-gray-400 font-light placeholder:text-[15px]`} />
                    </div>
                    <div id="" className="validation text-[#e87c03] text-[13px] mb-1 py-[6px] px-[3px]">
                      Please enter a valid email or phone number.
                    </div>
                  
                    <div className='relative w-full h-[50px] text-[#8c8c8c] ]'>
                      <input placeholder='Password' type="password" name="email" id="email" className={`w-full outline-none bg-[#333] h-full rounded text-white pb-0 px-5 placeholder:text-gray-400 font-light placeholder:text-[15px]`} />
                    </div>
                    <div id="" className="validation text-[#e87c03] text-[13px] mb-1 py-[6px] px-[3px]">
                      Your password must contain between 4 and 60 characters.
                    </div>

                    <button className='mt-6 mb-3 mx-0 font-[500] rounded text-[16px] w-full p-3 sm:p-3 text-white bg-[#e50914]'>Sign In</button>
                    

                </div>

                <div className='text-[#b3b3b3] font-light text-[13px] w-full flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input className='mr-1 p-2' type="checkbox" name="" id="" />
                    <label className=''>Remember me</label> 
                  </div>
                  
                  <a className='' href="">Need help? </a>
                </div>

                <div className='text-white mt-[50px]'>
                  <div className="text-[#737373] text-[16px] font-[400] mt-4">
                    Don't have an account? {" "} <Link to='/login' className='text-white hover:underline'>Login</Link>
                  </div>
                  <div className='text-[13px] my-[16px] mx-0'>
                    <span className='text-[#8c8c8c]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
                    <a className='text-[#0071eb]' href="#">Learn more.</a>
                  </div>
                </div>
            </form>

          </div>

          <div className='sm:bg-[rgba(0,0,0,.75)] bg-transparent min-h-[30vh]'>
            <div className='max-w-[1000px] w-[90%] mx-auto py-8'>
              <div className="text-[#737373] mb-8">
                <a className='text-[1em]' href="">Questions? Contact us.</a>
              </div>

              <ul className='text-[#737373]'>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px]' href="">FAQ</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px]' href="">Help Center</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px]' href="">Terms of Use</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px]' href="">Privacy</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px]' href="">Cookie Preference</a>
                </li>
                <li className='inline-block w-[25%] min-w-[100px] mb-4 pr-3 align-top'>
                  <a className='text-[13px]' href="">Corporate Information</a>
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