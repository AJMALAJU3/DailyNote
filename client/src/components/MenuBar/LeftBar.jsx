import React from 'react'
import { FiFile, FiHeart, FiArchive ,FiUser } from 'react-icons/fi'

function LeftBar() {
  return (
    <div className='w-72'>
      <div className='mt-2 '>
        <div className='p-4 rounded-tr-full rounded-br-full hover:bg-[#323232a1] cursor-pointer flex items-center'>
          <FiFile className="w-5 h-5 mr-6 " /> 
           Notes</div>
        <div className='p-4  rounded-tr-full rounded-br-full hover:bg-[#323232a1] cursor-pointer flex items-center'>
            <FiHeart className="w-5 h-5 mr-6 cursor-pointer" />
            Favourite
        </div>
        <div className='p-4  rounded-tr-full rounded-br-full hover:bg-[#323232a1] cursor-pointer flex items-center'>          
            <FiArchive className="w-5 h-5 mr-6  " />
            Archieve
        </div>
        <div className='p-4 bg-[#21bfbf3d]  rounded-tr-full rounded-br-full hover:bg-[#323232a1] cursor-pointer flex items-center' >
            <FiUser className='w-5 h-5 mr-6'/>
            Profile
        </div>
      </div>
    </div>
  )
}

export default LeftBar
