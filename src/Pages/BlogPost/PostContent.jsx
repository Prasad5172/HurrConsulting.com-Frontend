import React from 'react'
import { useNavigate } from 'react-router-dom';

function PostContent() {
    const place = "abl"
    const city = "xyz"
  console.log(place.toLowerCase())
  function replaceSpacesWithHyphens(str) {
    return str.replace(/\s+/g, '-');
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }
  return (
    <div className="p-5 pt-0">
        <h1 className='font-semibold text-[25px] mb-5 dark:text-white'>When you make the switch to Boost Mobile, it’s easier than ever to pay your phone bill.</h1>
        <p className='text-[16px] mb-5 dark:text-[#e0e0e0]'> Has it become a struggle to <span className="font-bold">pay your phone bill</span>?  If so, you’re certainly not alone. The costs of many essentials have gone up drastically in the recent past, and some people are still struggling to find consistent work that allows them to pay their bills. But we offer affordable pricing for cell phone plans and devices, making it easier to pay your bill every month without feeling financially strained.</p>
        <img src="https://picsum.photos/600/400" alt="free phone" className='w-full mb-5' />
        <p className='text-[16px] mb-5 dark:text-[#e0e0e0]'>Some of the plans we have available are as little as $15 per month, and you won’t be locked into a service contract. This is one of the things that customers love about Boost Mobile – it’s a pay-as-you-go service that fits into any budget!</p>
        <p className='text-[16px] mb-5 dark:text-[#e0e0e0]'>When you make the switch to Boost Mobile, it’s easier than ever to pay your phone bill. You can use the user-friendly website to make a payment after you set up a My Boost Account. It’s also easy to <span className="font-bold">pay your phone bill</span>  through the My Boost mobile app, which you can download and access from your mobile device for free.</p>
        <p className='text-[16px] mb-5 dark:text-[#e0e0e0]'>If you prefer, you can contact Boost Mobile directly to add funds to your account and pay your bill, or you can dial #233 on your device to pay. All of these options are free and accessible from just about anywhere, thanks to our 99% nationwide coverage.</p>
        <p className='text-[16px] mb-5 dark:text-[#e0e0e0]'>If you’re in or around <span className="font-bold">{place}, {city}</span> , visit our store to browse the selection of devices and explore plan options. Our affordable and competitive plans are easy to get, and we make it easier than ever to pay your phone bill.</p>
        <hr className='border border-black' />
    </div>
  )
}

export default PostContent