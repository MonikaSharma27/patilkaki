import React,{useState} from 'react';
import { Link } from "react-router-dom";
import image1 from "../images/logo.png";
import { FaUser, FaCartPlus , FaBars} from "react-icons/fa";
import { HiX } from "react-icons/hi"

const data = [
    {
        page: "Traditional",
        categories: {
            first: "Karanji",
            second: "Modak",
            third: "Puranpoli"
        }
    },
    {
        page: "Healthy",
        categories: {
            first: "Dink Ladoo",
            second: "Methi Ladoo",
            third: "Protein Ladoo",
            fourth: "Panjiri Ladoo"
        }
    },
    {
        page: "Namkeen Specials",
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
        categories: {
            first: "Dry Fruits Ladoo",
            second: "Besan Ladoo",
            third: "Nachni Ladoo",
            fourth: "Rava Ladoo"
        }
    },
    {
        page: "Upvas Snacks",
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

const [showDiv, setShowDiv] = useState(false)

const handleClick =()=>{
    setShowDiv(!showDiv);
   
};


    return (
        <div>
            <nav className='fixed top-0' >
                <div className="contact bg-slate-200 w-[100vw] flex justify-around text-orange-500 font-medium text-lg p-0.5">
                    <p className='sm:hidden text-sm'>85000+ Orders Delivered With 4.8/5 Rating</p>
                    <p className='hidden sm:block'>+91 85913 36124</p>
                    <a className='hidden sm:block'>About</a>
                </div>

                <div className='navigation flex items-center justify-around h-20 bg-white'>
                    <div className='logo w-32'>
                        <Link to={"/"}>
                            <img src={image1} alt="Logo" />
                        </Link>
                    </div>

                    <div className='options hidden lg:block '>
                        <ul className='flex text-lg '>
                            {data.map((item, index) => (
                                <li key={index} className='p-5 group relative '>
                                    <p className='hover:font-bold hover:text-orange-500' >
                                        {item.page}
                                    </p>
                                    <div className='bg-gray-100  p-4 absolute   left-auto mt-1 rounded-md hidden group-hover:block '>
                                        <div className='flex flex-col w-40'>
                                        {Object.values(item.categories).map((category, idx) => (
                                            <Link key={idx} className="text-black p-1  hover:text-orange-500 hover:font-medium " to={category}>{category}</Link>
                                        ))}
                                        </div>
                                       
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                   

                    <div className='icons flex '>
                        <div className='p-3 hidden lg:block'>
                            <FaUser size={25} />
                        </div>
                        <button className='hidden lg:block'>Sign In</button>
                        <div className='p-3 hidden lg:block'>
                            <FaCartPlus size={25} />
                        </div>
                    </div>

                    <div className='menubar lg:hidden ' >
                        {
                             showDiv ? <HiX className='text-white bg-orange-500  w-10 h-9 rounded-md' size={20} onClick={handleClick}/> :  <FaBars className='text-white bg-orange-500  w-10 h-9 rounded-md' onClick={handleClick}  size={20}/>
                        }
                       
                        <div className={` ${showDiv ? "block" : "hidden"} inline-block bg-white absolute top-28 right-0 w-56`}>
                        <ul className=' text-lg '>
                            {data.map((item, index) => (
                                <li key={index} className='p-5 group relative '>
                                    <p className='hover:font-bold hover:text-orange-500' >
                                        {item.page}
                                    </p>
                                    <div className='bg-gray-100  p-4 absolute z-50  left-auto mt-1 rounded-md hidden group-hover:block '>
                                        <div className='flex flex-col w-40 '>
                                        {Object.values(item.categories).map((category, idx) => (
                                            <Link key={idx} className="text-black p-1  hover:text-orange-500 hover:font-medium " to={category}>{category}</Link>
                                        ))}
                                        </div>
                                       
                                    </div>
                                </li>
                            ))}
                        </ul>
                        </div>

                    </div>
                </div>

                <div className='bg-blue-900 h-9 '>

                </div>
            </nav>




        </div>
    );
}

export default Navbar;