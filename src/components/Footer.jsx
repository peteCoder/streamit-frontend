import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";

// GrFacebookOption
const Footer = () => {

    return (
    <>
        <footer
            id="footer"
            className="text-[gray] mt-5 mx-auto max-w-[980px] px-[4%] py-0 mb-5"
        >
        <div className="icons flex mb-[2em]">
            <a href="">
            <ImFacebook className="mr-[15px] text-[1.5rem] text-white" />
            </a>
            <a href="">
            <BsInstagram className="mr-[15px] text-[1.5rem] text-white" />
            </a>

            <a href="">
            <GrYoutube className="mr-[15px] text-[1.5rem] text-white" />
            </a>
        </div>
        <ul className="flex flex-wrap mb-6 p-0">
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Auto description
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Help Center
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Gift Card
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Media Center
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Investor Relations
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Jobs
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Terms of Use
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Privacy
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Legal Notice
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Cookie Preference
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Corporate Information
            </Link>
            </li>
            <li className="w-[100%] sm:w-[50%] md:w-[25%] lg:w-[20%] mb-[5px]">
            <Link to="#" className="text-[gray] text-[13px] hover:underline">
                Contact Us
            </Link>
            </li>
        </ul>

        <div>
            <button
            
            className="text-[13px] mb-[20px] px-[1em] py-2 bg-transparent border-[gray] border "
            >
            Server code
            </button>
        </div>

        <span className="block text-white text-[11px] mb-10">
            © 1997-2023 Netflix, Inc.
        </span>
        </footer>

    </>
    );
};

export default Footer;