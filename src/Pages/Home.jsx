import React from 'react'
import football from '../Images/home-stadium.png'
import VIP from '../Images/VIP.png'
import Free from '../Images/Free.jpg'
const Home = () => {
  return (
    <div className='Home mt-10 '>
      {/* Introduction Portion */}
      <div className='Top flex-grow flex justify-between pl-14  bg-gray-700 flex-col md:flex-row md:justify-center lg:justify-end'>
        <div className='mx-2'>
          <h1 className=' text-xl md:text-6xl font-mono font-bold pt-10 leading-relaxed text-yellow-50'>The Best Free <br /> Betting Tips For <br />  Every Day</h1>
          <hr className="my-4  border-t-2"  />
          <p className='text-white text-sm'>Get fresh winning tips and accumulators daily <br /> from Pro Tipsters and become an expert in <br /> sports betting</p>
          <button className="bg-sky-400 hover:bg-sky-200 text-white font-bold py-2 px-14 mt-4 mb-4 rounded">Free Tip</button>
        </div>
        <div className='pt-14 mx-2'>
          <img src={football} alt="" style={{ width: '600px', height: '400px' }} />
        </div>
      </div>
      {/* Main Portion */}
      <div className='Middle  '>
        <h1 className='text-center text-4xl mt-7 font-bold font-mono'>Services We Provide</h1>
        <div className='flex-grow flex justify-between mt-14 flex-col md:flex-row md:justify-center lg:justify-end'>
          {/* vip */}
          <div className='VIP ' >
            <h2 className='font-bold text-2xl text-center'>VIP Service</h2>
            <div className='flex'>
            <div className="flex-none">
              <img src={VIP} alt="" style={{ width: '200px', height: '200px' }}  className="w-24 h-24 object-cover" />  
            </div>
            <div className="flex-grow pl-4">
              <p>Leo vel fringilla est ullamcorper eget nulla. Sem nulla pharetra diam sit. Accumsan in nisl nisi scelerisque eu.</p>
              <p>Lectus urna duis convallis convallis tellus id interdum. Ornare quam viverra orci sagittis eu. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. </p> 
           </div>
           </div>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-64 mb-20"> Register Now</button>
        </div>
          {/* free tip */}
        <div>
          <h2 className='font-bold text-2xl text-center'>Free Tip</h2>
          <div className='flex flex-row-reverse'>
            <div className="flex-none">
              <img src={Free} alt="" style={{ width: '200px', height: '200px' }}  className="w-24 h-24 object-cover" />  
            </div>
           <div className="flex-grow pl-4">
            <p>Leo vel fringilla est ullamcorper eget nulla. Sem nulla pharetra diam sit. Accumsan in nisl nisi scelerisque eu.
            <p>Lectus urna duis convallis convallis tellus id interdum. Ornare quam viverra orci sagittis eu. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. </p> </p>
           </div>
          </div>
        </div>
       </div>
    </div>
      {/* Footer */}
    <div className='Footer bg-gray-700 mt-0 text-center pt-4 pb-4 leading-relaxed justify-between flex'>
      <nav className='flex flex-col md:flex-row md:justify-center lg:justify-end'>
        <a className="mr-5 mx-2 text-white hover:text-gray-900" href="#">Instagram</a>
        <a className="mr-5 mx-2 text-white hover:text-gray-900" href="#">Telegram</a>
        <a className="mr-5 mx-2 text-white hover:text-gray-900" href="#">Tiktok</a>
      </nav>
      <div>
        <p className='text-white'>Ethio-Kemer</p>
      </div>
      <div className='text-white'>Follow us for More!</div>
    </div>
  </div>
  )
}

export default Home