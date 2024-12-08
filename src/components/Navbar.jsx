import React from 'react';
import { Link } from "react-router-dom";
import image1 from "../images/logo.png";
import { FaUser, FaCartPlus } from "react-icons/fa";

const data = [
    {
        page: "Traditional",
        link: "/",
        categories: {
            first: "Karanji",
            second: "Modak",
            third: "Puranpoli"
        }
    },
    {
        page: "Healthy",
        link: "/healthy",
        categories: {
            first: "Dink Ladoo",
            second: "Methi Ladoo",
            third: "Protein Ladoo",
            fourth: "Panjiri Ladoo"
        }
    },
    {
        page: "Namkeen Specials",
        link: "/namkeen-specials",
        categories: {
            first: "Kanda Sev",
            second: "Thiki Sev",
            third: "Garlic Sev",
            fourth: "Chakli",
            fifth: "Masala Chakli"
        }
    },
    {
        page: "Ladoos",
        link: "/ladoos",
        categories: {
            first: "Dry Fruits Ladoo",
            second: "Besan Ladoo",
            third: "Nachni Ladoo",
            fourth: "Rava Ladoo"
        }
    },
    {
        page: "Upvas Snacks",
        link: "/upvas-snacks",
        categories: {
            first: "Sabudana Sticks",
            second: "Sago Farali Chivda",
            third: "Sabudana Puri",
            fourth: "Sp Faral Chivda",
            fifth: "Sabudana Fry"
        }
    },
];

function Navbar() {
    return (
        <div>
            <nav>
                <div className="contact bg-slate-200 w-[100vw] flex justify-around text-orange-500 font-medium text-xl p-0.5">
                    <p className='sm:hidden text-sm'>85000+ Orders Delivered With 4.8/5 Rating</p>
                    <p className='hidden sm:block'>+91 85913 36124</p>
                    <a className='hidden sm:block'>About</a>
                </div>

                <div className='navigation flex items-center justify-around'>
                    <div className='logo w-32'>
                        <Link to={"/"}>
                            <img src={image1} alt="Logo" />
                        </Link>
                    </div>

                    <div className='options'>
                        <ul className='flex text-lg'>
                            {data.map((item, index) => (
                                <li key={index} className='p-5 group relative'>
                                    <Link className='hover:font-bold hover:text-gray-600' to={item.link}>
                                        {item.page}
                                    </Link>
                                    <div className='bg-red-500 w-[100vw] p-4 absolute left-0 mt-3 hidden group-hover:block'>
                                        {Object.values(item.categories).map((category, idx) => (
                                            <p key={idx} className="text-white p-1">{category}</p>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='icons flex'>
                        <div className='p-3'>
                            <FaUser size={25} />
                        </div>
                        <button>Sign In</button>
                        <div className='p-3'>
                            <FaCartPlus size={25} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;