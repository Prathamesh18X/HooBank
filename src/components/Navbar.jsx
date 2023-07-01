import {useState} from 'react';
import {close ,menu, logo} from '../assets';
import {navLinks} from '../constants';




const Navbar = () =>{
  const [Active , setActive] = useState("Home")
  const [Toggle , setToggle] = useState(false)
  
return(
<nav className=' w-full flex p-6 justify-between items-center navbar fixed left-0 right-0 top-0 backdrop-blur z-[6]'>
      <img src={logo} className="w-32 h-10" />

{/*Mobile First , tabs*/}
      <div className='sm:hidden flex items-center'>
        <img src={Toggle ? close : menu} 
              onClick = {()=>setToggle(!Toggle)}
              className={`object-containt cursor-pointer w-8 h-8`} />

          <div class={`${Toggle ?"flex":"hidden"} bg-black-gradient absolute top-20 right-0 mx-6 my-2 rounded-lg min-w-[6rem]`}>
            <ul className=' list-none flex justify-end items-center flex-1 flex-col'>
              {navLinks.map((nav) => (
                <li className={`cursor-pointer font-medium mx-8 my-3
                                ${Active === nav.title ? "text-white" : "text-dimWhite"}`} onClick = {() => setActive(nav.title)}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>        
        </div>
      </div>
      
{/*Desktop , largeScreen*/}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li className={`cursor-pointer font-medium first-letter ml-5
                          ${Active === nav.title ? "text-white" : "text-dimWhite"}`} onClick = {() => setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

    
    </nav>
  )
}
export default Navbar