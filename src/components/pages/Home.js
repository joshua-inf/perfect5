import image from '../../images/clean5.jpeg'
import { motion, useAnimation } from 'framer-motion'

import image3 from '../../images/stuff.png'
import image4 from '../../images/stuff.jpg'
import image5 from '../../images/stuff1.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <>
        <div style={{maxWidth:'100%', overflow:'hidden'}}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
                className=''>
                <div className="App" style={{ background: `url(${image}) no-repeat fixed center`, backgroundSize: 'cover', minHeight: '100vh' }}>
                    <div className='d-flex flex-column justify-content-center' style={{paddingTop:'100px', backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,0.6)', minHeight: '100vh' }}>
                        <div className='text-white d-flex justify-content-center flex-column'>
                            <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                                <div className='d-flex flex-column justify-content-center' style={{minHeight:'30vh'}}>
                                    <h3 className='display-2 fw-bold text-uppercase'> perfect <span className='text-success'>5</span></h3>
                                    <p className='fw-light h2'>
                                        cleaning solutions
                                    </p>
                                </div>
                                <div>
                                    <div style={{minHeight:'70vh'}} className='d-flex flex-column justify-content-center text-white text-center'>
                                        <div className='p-3'>
                                            <div>
                                                <div className='row'>
                                                    <div className='col-1'></div>
                                                    <div className='col-10'>
                                                        <div className='d-flex flex-column justify-content-center' >
                                                            <div className='text-uppercase'>
                                                                <h3 className='display-6'>How perfect 5 Works</h3>
                                                                <p>
                                                                Welcome to Perfect Five Cleaning Solution your one-stop solution for all things clean! We take pride in offering
                                                                 a range of professional cleaning
                                                                 services and manufacturing high-quality cleaning products to help you maintain a clean and healthy environment.
                                                                </p>
                                                                <hr className='text-white  mb-4' />
                                                                <div className='row' >
                                                                    <div className='col-md-4 col-6 '>
                                                                        <div>
                                                                            <div style={{ fontSize: '20px' }}>
                                                                                <i class="fa-solid fa-bookmark"></i>
                                                                            </div>
                                                                            <div style={{fontSize:'15px'}}>BOOK NOW</div>
                                                                            <p style={{fontSize:'10px'}}>
                                                                            Select the date and time you’d like your professional to show up.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4 col-6'>
                                                                        <div>
                                                                            <div style={{ fontSize: '20px' }}>
                                                                                <i class="fa-solid fa-broom"></i>
                                                                            </div>
                                                                            <h3 style={{fontSize:'15px'}}>CLEAN/CLEANING PRODUCTS</h3>
                                                                            <p style={{fontSize:'10px'}}>
                                                                            We are a certified cleaning and a manufacturer of high-quality
                                                                             cleaning products company who comes over to your premises and cleans.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4 col-12'>
                                                                        <div className='row'>
                                                                            <div className='col-12 text-center'>
                                                                                <div>
                                                                                    <div style={{ fontSize: '20px' }}>
                                                                                        <i style={{ fontSize: '20px' }} class=" fa-solid fa-mug-hot"></i>
                                                                                    </div>
                                                                                    <h3 style={{fontSize:'15px'}}>RELAX</h3>
                                                                                    <p style={{fontSize:'10px'}}>
                                                                                    Sit back and relax. Enjoy your sparkling home in no time.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='py-5'>
                                                            <Link to='/ContactUs'>
                                                                <button  className='btn btn-outline-light btn-lg text-uppercase'>book us now and get and an enguiry</button>
                                                            </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-1'></div>
                                                </div>
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        
                    </div>
                </div>
             
            </motion.div>
        </div>
        </>
    )
}