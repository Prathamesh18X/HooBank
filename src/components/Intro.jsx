import React from 'react'
import styles from '../style'
import {discount , robot} from '../assets'
import GetStarted from './GetStarted'

const Intro = () => {
  return (
    <section id = "home" className={`flex flex-col md:flex-row mt-20 ${styles.paddingY}`}>
      <div className={`flex-col flex-1 ${styles.flexStart} xl:px-0 sm:px-16`}>
        <div className={`flex flex-row items-center py-1 px-3 bg-discount-gradient rounded-lg mb-2`}>
          <img src={discount} className={`h-8 w-8`} />
          <p className={`${styles.paragraph} text-white`}> 20% 
          <span className={`text-gray-500`}> DISCOUNT FOR </span> 
              1 MONTH 
          <span className={`text-gray-500`}> ACCOUNT</span></p>
        </div>

        <div className={`flex flex-row justify-between w-full items-center`}>
          <h1 className={`font-poppins  flex-1  text-white text-5xl font-semibold ss:text-7xl`}>The Next<br className={`sm:block hidden`} />
            <span className={`text-gradient`}> Generation</span>
          </h1>

          <div className="ss:flex hidden md:mx-6 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className={`font-poppins  flex-1  text-white text-5xl font-semibold ss:text-7xl`}>Payment Method.</h1>
          <p className={`${styles.paragraph} max-w-[30] mt-5`}> Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates,annual fees.</p>
      </div>
      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className="w-[100%] h-[100%] z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className="flex flex-row justify-evenly flex-1 ss:hidden md:mx-6 mr-0">
            <GetStarted />
          </div>
    </section>
    )
}

export default Intro