import React,{useState} from 'react'
import Image14 from "../images/gujiya.jpg"

const Karanji = (props) => {
const [count, setCount]= useState(0);

const handleDecrease= ()=>{
 if (count>0){
  setCount(count-1);
 }
}

const handleIncrease = () =>{
  setCount(count+1);
}

  return (
    <div >
      <div className='mt-44 mb-3'>
      <h1 className='ml-11 font-bold text-gray-700 md:text-xl'>Home / Products / Karanji / Gujiya – Double Layer</h1>
      </div>
     
      <div className='md:grid md:grid-cols-[2fr_3fr] md:ml-3 '>
        <div className='img mt-4 '>
          <img className='md:h-5/6 md:ml-5 w-full md:pr-5' src={props.image || Image14}></img>
        </div>
        <div className='content mt-16 p-2 md:m-4 '>
            <div>
            <h1 className='font-bold text-lg text-center mb-5 text-gray-700 md:text-start md:text-xl'>Karanji / Gujiya – Double Layer (200 gms)</h1>
            <p className='font-medium text-gray-700 '>One of the best traditional sweets of Maharashtra, Karanji is a sweet savory snack often made for festive occasions like Diwali and Ganesh Chaturthi. It is very popular in North India as Gujiya. Our Karanjis are made of double layer, which means an extra layer of crunchiness. Once you have that, the filling hits your mouth and it is such a pleasant feeling that it only keeps you wanting more and more. Missing Karanjis because you can only have them once in a year? Problem solved- our Karanjis are available year round.</p>
            </div>
            <div className='flex mt-3 '>
                <span className='line-through p-1 font-bold text-2xl text-gray-700'>₹ 249</span>
                <p className='p-1 font-bold text-2xl text-orange-500'>₹219</p>
                <p className=' text-sm  font-bold bg-orange-100 text-gray-700 p-2 rounded-md ml-2 '>12% Off</p>
                <span className='text-orange-500 ml-2 text-2xl'>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            <div className=' border-2 border-gray-500 border-dashed m-2 font-bold text-gray-500 md:w-[30vw]'>
                <h1 className='p-1'>Buy More & Save More :</h1>
                <div className='flex justify-center items-center text-xs p-2'>
                <div className='w-[30vw] p-2' >
                    <p>With 10% off</p>
                    <p className='text-center text-lg'>₹197.1</p>
                    <p className='text-green-800 border-2 border-green-800 '>LOWEST PRICE</p>

                </div>
                <div className='h-20 border-l-2 border-gray-400 '></div>
                <div className='w-[70vw] p-2'>
                    <p className='text-sm text-gray-700'>With coupon <span className='text-orange-500'> ILOVEKAKI</span>  on cart value above ₹0</p>
                </div>

                </div>
                <p className='pl-4 pr-4 text-center text-green-800 pb-4'>Coupon successfully unlocked! Check your cart now</p>
                
            </div>

            <div className='flex justify-between items-center mt-8 md:w-[33vw] '>
              <div className='border-2 border-gray-300 '>
                <select name='Dropdown ' className='text-xl text-gray-700 p-2 pl-3 pr-3' >
                     <option value="200 gms" >200 gms</option>
                </select>
              </div>
              <div className=' text-2xl  '>
                <button className='bg-orange-500 p-2 pl-4 pr-4 border-t-2 border-b-2 border-orange-500 border-solid text-white' onClick={handleDecrease}>-</button>
                <button className='p-2 pl-3 pr-3 border-t-2 border-b-2 border-gray-300 border-solid text-orange-500'>{count}</button>
                <button className='bg-orange-500 p-2  pl-4 pr-4 border-t-2 border-b-2 border-orange-500 border-solid text-white'  onClick={handleIncrease}>+</button>
              </div>
          </div>
        
        <div className='md:text-start  text-center'>
          <button className='bg-orange-500 text-white w-[80vw] mt-6 text-xl p-2 rounded-full md:w-[33vw]'>Add to Cart</button>
        </div>
        </div>
       
     </div>
    </div>
  )
}

export default Karanji
