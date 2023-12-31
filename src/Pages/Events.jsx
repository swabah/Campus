import React from 'react'
import { EventData} from '../Data/Eventdata'
import EventStories from '../Components/Event/EventStories'
import PatternBg from '../assets/Img/bgPattern.jpg'

function Events() {
  return (
    <div className='w-full h-full bg-white '>
        {EventData.slice(0,1).map((item)=>(
        <div className='flex flex-col items-center justify-center w-full h-full px-3 py-20 space-y-12 text-center md:px-10 lg:px-10 xl:px-36'>
            <h1 className='text-[#619A46] md:px-8 lg:px-16 xl:px-24 text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{item.title}</h1>
            <img className='w-full h-[60vh] rounded object-cover' src={item.img} alt="" />
            <p className='mt-4 text-center text-[#555555] text-base md:text-xl font-sans  lg:text-2xl font-light leading-snug tracking-wide'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ounknown printef type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uns of Lorem Ipsum.Lorem Ipsum is simply dummy text of en the industry's standard dumm the 1500s, when</p>
        </div>
        ))}
        <div style={{backgroundImage: `url(${PatternBg})`}} className='relative w-full h-full py-8 bg-no-repeat md:py-14 '>
          <div className='w-full h-full bg-[#619A46]  opacity-5 absolute top-0 left-0 '></div>
          <EventStories/>
        </div>
    </div>
  )
}

export default Events