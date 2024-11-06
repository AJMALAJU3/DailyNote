import React from 'react'
import Header from '../components/Header/Header'
import LeftBar from '../components/MenuBar/LeftBar'
import Container from '../components/Container'

function Home() {
  return (
    <div 
    className='w-[100vw] h-[100vh] absolute top-0 left-0 m-0 flex justify-center items-center ' >
   <Header />
   <div className='pt-16 w-[100vw] h-[100vh] flex'>

    <LeftBar />
    <Container />
   </div>
  </div>
  )
}

export default Home
