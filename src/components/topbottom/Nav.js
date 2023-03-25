import image from '../../images/p5logo.png';
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
    return (
        <>
        <div>
            <div className='bg-success px-4 d-flex justify-content-between' >
                <div className='text-white'>
                    contact us:  09something
                </div>
                <div className='text-white'>
                    email address: something@mail.com
                </div>
                <div className='text-white'>
                    social
                </div>
            </div>
        </div>
            <div  style={{position:'sticky', top:'0', zIndex:'3'}}>
                <div className='d-flex nav justify-content-between px-4 py-2' style={{position:'absolute', right:'0', left:'0',transition:'0.5s', backgroundColor:`${color ? 'rgba(0,0,0,0.8)':'rgba(0,0,0,0.4)'}` }}>
                    <div className='d-flex justify-content-center flex-column'>
                        <img src={image} alt='image' width='70px' />
                    </div>
                    <div className='d-sm-flex d-none justify-content-around flex-column'>
                        <ul className='d-flex' style={{listStyle:'none', gap:'5px'}}>
                            <li><NavLink className='text-decoration-none' to='/'>Home</NavLink></li>
                            <li><NavLink className='text-decoration-none' to='/aboutUs/'>about us</NavLink></li>
                            <li><NavLink className=' text-decoration-none' to='/services'>services</NavLink></li>
                            <li><NavLink className=' text-decoration-none' to='/ourProducts'>our products</NavLink></li>
                            <li><NavLink className='text-decoration-none' to='/contactUs'>contact us</NavLink></li>
                            <li><button className='btn btn-success'>get your inquiry now</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}