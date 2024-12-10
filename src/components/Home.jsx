import React from 'react'
import image2 from "../images/homeback.png"
import image3 from "../images/heroimg.png"
import image4 from "../images/specialimg.jpeg"
import image5 from "../images/healthimg.png"
import image6 from "../images/traditionalimg.png"
import image7 from "../images/snackimg.png"
import image8 from "../images/ladoosimg.png"
import image9 from "../images/chakli.jpg"
import image10 from "../images/puranpoliimg.jpg"
import image11 from "../images/modak.jpg"
import image12 from "../images/kachori.jpg"
import image13 from "../images/chivda.jpg"



const sliderData = [
    {
        image:image9,
        name: "Bhajani Chakli",
        price:'169',

    },
    {
        image:image10,
        name: "Handmade Puranpoli",
        price:'199',

    },
    {
        image:image11,
        name: "Handmade Ukadiche Modak",
        price:'219',

    },
    {
        image:image12,
        name: "Kachori",
        price:'169',

    },
    {
        image:image13,
        name: "Chivda",
        price:'179',

    },
]

const Home = () => {
    
  return (
    <div >
        <div className='mt-32 '>
         <img className='h-96 sm:h-auto' src={image2}/>
        </div>

        <div className='flex flex-col mt-9 items-center justify-center text-gray-700 md:w-[80vw] md:mx-auto'>
            <p className='font-bold text-lg text-center lg:text-3xl'>Bringing ‘Maa-ke-haath’ ka khana to your doorstep!</p>
            <p className='text-sm text-center mt-6 p-2 lg:text-lg lg:pl-16 lg:pr-16'>Our home made snacks are the way to bring you quality binge-time experiences. We’ve stocked a range of yummy goodies that will enliven your taste buds and make you come back for more</p>
            <img className='mt-8 ' src={image3}/>
        
        </div>

        <div className='mt-14 md:w-[80vw] md:mx-auto '>
               <h1 className='text-center font-bold text-gray-700 mb-14 lg:text-3xl'>Snacks by Category </h1>
               <div className='md:flex '>
                <div className='left p-6 '>
                    <img src={image4}/>

                </div>
                <div className='right grid grid-cols-2 gap-6 p-6 text-sm font-medium text-gray-700'>
                    <div className='bg-pink-100'>
                        <h1 className='pt-2 pl-2'>#Healthy</h1>
                    <img  src={image5}/>
                    </div>
                <div className='bg-blue-100'>
                <h1  className='pt-2 pl-2'>#OfficeSnacking</h1>
                <img  src={image7}/>
                </div>
               <div className='bg-orange-100'>
               <h1  className='pt-2 pl-2'>#Traditional</h1>
               <img  src={image6}/>
               </div>
               <div className='bg-yellow-100'>
               <h1  className='pt-2 pl-2'>#Laddoos</h1>
               <img  src={image8}/>
               </div>
               

                </div>
               </div>

        </div>
             
       <div className='mt-14 sm:w-[80vw] sm:mx-auto '>
        <h1 className='text-center font-bold text-gray-700 mb-14 sm:text-xl md:text-3xl '>Most Loved Snacks</h1>
        <div className='grid grid-cols-2 gap-2 p-3 rounded-md m-1 sm:grid-cols-3 lg:grid-cols-4'>
        {
            
            sliderData.map((item ,key)=>(
                <div className='shadow-lg shadow-gray-400 shadow-blur-lg m-1  rounded-md'>
                         <img className=' w-full rounded-tl-md rounded-tr-md '  key={key} src={item.image}/> 
                         <p className='text-orange-500 font-medium m-2'> {item.name}</p>
                         <div className='flex text-orange-500 justify-between p-2 font-medium mt-8'>
                         <p> &#x20b9;{item.price}</p>
                         <button className='bg-orange-500 text-white p-1 rounded-md pl-2 pr-2'>Add to Cart</button>
                         </div>
                         
                </div>
            ))
            
        }
       
        </div>
        
        

       </div>

      
      
    </div>
  )
}

export default Home
