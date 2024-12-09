import React from 'react'
import image2 from "../images/homeback.png"
import image3 from "../images/heroimg.png"
import image4 from "../images/specialimg.jpeg"
import image5 from "../images/healthimg.png"
import image6 from "../images/traditionalimg.png"
import image7 from "../images/snackimg.png"
import image8 from "../images/ladoosimg.png"
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
             


      
      
    </div>
  )
}

export default Home
