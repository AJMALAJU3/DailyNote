import React from 'react'
import profilePic from '../../assets/dust.jpg'

function Profile() {
    return (
        <div className='bg-zinc-800 rounded-xl p-5'>
            <div className='flex justify-between'>
                <div className='flex gap-x-2'>
                    <div className='p-1 rounded-xl bg-teal-500'></div>
                    <p className='text-xl font-semibold text-zinc-200'>Personal Information</p>
                </div>
                <div>
                    <button>edit</button>
                </div>
            </div>
            <div className='m-2 mt-5 grid grid-cols-6 '>
                <div className='flex justify-center item-center'>
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="h-36 w-36 rounded-full object-cover cursor-pointer border-2 border-gray-600"
                    />
                </div>
                <div className='col-span-5 flex flex-col justify-center gap-y-7'>
                    <div>
                        <p className='text-xl'>My name</p>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='gap-y-4'>
                            <p>phone</p>
                            <p>3458934578989</p>
                        </div>
                        <div className='gap-y-4'>
                            <p>email</p>
                            <p>asdfoalsdj@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 p-3'>
                <div className='bg-zinc-700 rounded-lg h-20'></div>
                <div className='bg-zinc-700 rounded-lg  h-20'></div>
                <div className='bg-zinc-700 rounded-lg  h-20'></div>
                <div className='bg-zinc-700 rounded-lg  h-20'></div>
            </div>
        </div>
    )
}

export default Profile
