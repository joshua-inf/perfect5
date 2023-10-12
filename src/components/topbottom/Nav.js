import image from '../../images/Perfect5-side.png';
import {NavLink} from  'react-router-dom';
import { InView, useInView } from 'react-intersection-observer';
import { useState } from 'react';
export function Nav() {
    const [color, setColor] = useState(false);
    const changecolor = () => {
        if(window.scrollY >= 90){
            setColor(true)
        }else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changecolor)

    const openNav = () => {
        document.getElementById('hidebar').style.display = 'block';
    }
    const closeNav = () => {
        document.getElementById('hidebar').style.display = 'none'
    }


    return (
        <>
        <div>
        </div>
            <div  style={{position:'sticky', top:'0', zIndex:'3'}}>
                <div className='d-flex nav justify-content-between px-4 py-2' style={{position:'absolute', right:'0', left:'0',transition:'0.5s', backgroundColor:`${color ? 'rgba(0,0,0,0.8)':'rgba(0,0,0,0.3)'}` }}>
                    <div className='d-flex justify-content-center  flex-column'>
                        <img src={image} alt='image' width='90px'/>
                    </div>
                    <div className='open-icon'>
                       <i onClick={openNav} class="fa text-white fs-1 fa-bars" aria-hidden="true"></i>
                    </div>
                    <div id='hidebar' className='custom-nav-links'>
                        <div className='d-flex flex-column justify-content-center'>
                            <ul className='d-flex' style={{listStyle:'none', gap:'15px'}}>
                                <div className=' p-3 text-white close-icon'>
                                    <li onClick={closeNav} style={{position:'absolute', top:'0', right:'0'}}><i class="fs-1 text-white fa fa-window-close" aria-hidden="true"></i></li>
                                </div>
                                <li className='d-flex flex-column justify-content-center'><NavLink className='text-decoration-none' to='/'>Home</NavLink></li>
                                <li className='d-flex flex-column justify-content-center'><NavLink className='text-decoration-none' to='/aboutUs/'>about us</NavLink></li>
                                <li className='d-flex flex-column justify-content-center'><NavLink className=' text-decoration-none' to='/services'>services</NavLink></li>
                                <li className='d-flex flex-column justify-content-center'><NavLink className=' text-decoration-none' to='/ourProducts'>our products</NavLink></li>
                                <li className='d-flex flex-column justify-content-center'><NavLink className='text-decoration-none' to='/ContactUs'>contact us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}