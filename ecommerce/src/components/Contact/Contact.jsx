import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>

        <div className=' flexColStart c-left'>
        <span className='orangeText'>Our Contact</span>
        <span className='primaryText'>Easy to Contact</span>
        <span className='secondaryText'> we are always ready to help you there by providing our best service</span>
      <div className='flexColStart contactModes'>
        <div className='flexCenter row'>
            <div className='flexColCenter mode'>
        <div className='flexStart'>
        <div  className='flexCenter icon'>
         <MdCall size ={25}/>
        </div>
 <div className='flexColStart detail'>
    <span className='primaryText'>Call</span>
    <span className='secondaryText'>9817196469</span>
</div>
 </div>
 <div className='flexCenter button'>Call Now</div>
</div>
<div className='flexColCenter mode'>
        <div className='flexStart'>
        <div  className='flexCenter icon'>
         <BsFillChatDotsFill size ={25}/>
        </div>
 <div className='flexColStart detail'>
    <span className='primaryText'>Chat</span>
    <span className='secondaryText'>9817196469</span>
</div>
 </div>
 <div className='flexCenter button'>Chat  Now</div>
</div>
</div>
<div className='flexCenter row'>
            <div className='flexColCenter mode'>
        <div className='flexStart'>
        <div  className='flexCenter icon'>
         <BsFillChatDotsFill size ={25}/>
        </div>
 <div className='flexColStart detail'>
    <span className='primaryText'> V.Call</span>
    <span className='secondaryText'>9817196469</span>
</div>
 </div>
 <div className='flexCenter button'> Video Call Now</div>
</div>
<div className='flexColCenter mode'>
        <div className='flexStart'>
        <div  className='flexCenter icon'>
         <HiChatBubbleBottomCenter size ={25}/>
        </div>
 <div className='flexColStart detail'>
    <span className='primaryText'>Message</span>
    <span className='secondaryText'>9817196469</span>
</div>
 </div>
 <div className='flexCenter button'>Message Now  Now</div>
</div>
</div>
 </div>
 </div>

      <div className='c-right'>
        <motion.div 
        initial={{x:"7rem",opacity:0}}
        animate={{x: 0,opacity:1}}
        transition={{
          duration: 5,
          type:"spring",
        }}
        className="image-container">
            <img src="contact.jpg" alt="contactimg" />
        </motion.div>
      </div>


        </div>
    </section>
  )
}

export default Contact