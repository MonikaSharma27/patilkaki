import React from 'react';
import { Link } from "react-router-dom";

const data =[
    {
        page:"Traditional ",
        link: "/",
        categories:{
            first:"Karanji",
            srcond:"Modak",
            Third:"Puranpoli"
        }
    },
    {
        page:"Healthy ",
        link: "/healthy",
        categories:{
            first:"Dink Ladoo",
            srcond:"Methi Ladoo",
            Third:"Protein Ladoo",
            Fourth:"Panjiri Ladoo"
        }
    },
    {
        page:"Namkeen Specials",
        link: "/namkeen specials",
        categories:{
            first:"Kanda Sev",
            srcond:"Thiki Sev",
            Third:"Garlic Sev",
            Fourth:"Chakli",
            Fifth:"Masala Chakli"
        }
    },
    {
        page:"Ladoos",
        link: "/ladoos",
        categories:{
            first:"Dry Fruits Ladoo",
            srcond:"Besan Ladoo",
            Third:"Nachni Ladoo",
            Fourth:"Rava Ladoo"
        }
    },
    {
        page:"Upvas Snacks",
        link: "/upvas snacks",
        categories:{
            first:"Sabudana Sticks",
            srcond:"Sago Farali Chivda",
            Third:"Sabudana Puri",
            Fourth:"Sp Faral Chivda",
            Fifth:"Sabudana Fry"
        }
    },
]


function Navbar() {
    return (
        <div>
            <nav>
                <div className="contact bg-slate-200 w-[100vw] flex justify-around text-orange-500 font-medium text-xl p-0.5 ">
                  <p className='sm:hidden text-sm'>85000+Orders Delivered With 4.8/5 Rating</p>
                  <p className='hidden sm:block'>+91 85913 36124</p>
                  <a className='hidden sm:block'>About</a>
                </div>

                <div>
                    <Link to={"/"}></Link>
                   
                </div>



            </nav>

        </div>
    )
}

export default Navbar
