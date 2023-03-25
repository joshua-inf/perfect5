import image from '../../images/clean5.jpeg'
import { motion, useAnimation } from 'framer-motion'
import image1 from '../../images/7740.png'
import image2 from '../../images/walk.png'
import image3 from '../../images/stuff.png'
import image4 from '../../images/stuff.jpg'
import image5 from '../../images/stuff1.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Mini from './HomeComp/MiniServicesSection'
import { Carousel } from 'react-bootstrap'
export function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
                className=''>
                <div className="App" style={{ background: `url(${image}) no-repeat center`, backgroundSize: 'cover', height: '100vh' }}>
                    <div className='d-flex flex-column justify-content-center' style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,0.6)', height: '100%' }}>
                        <div className='text-white mx-4 d-flex justify-content-center flex-column'>
                            <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                                <h3 className='display-2 fw-bold text-uppercase'> perfect <span className='text-success'>5</span></h3>
                                <p className='fw-light h2'>
                                    cleaning solutions
                                </p>
                                <button className='rounded-0 btn btn-outline-success text-uppercase btn-lg'>reach out </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-white text-center'>
                        <div className='d-flex flex-column justify-content-center p-3' style={{ minHeight: '40vh' }}>
                            <div className='row'>
                                <div className='col-2'></div>
                                <div className='col-8'>
                                    <div className='d-flex flex-column justify-content-center' style={{ minHeight: '100vh' }}>
                                        <div data-aos='fade-left'>
                                            <h3 className='display-6 pb-5'>How perfect 5 Works</h3>
                                            <div className='row' >
                                                <div className='col-4'>
                                                    <div>
                                                        <div style={{ fontSize: '50px' }}>
                                                            <i class="fa-solid fa-bookmark"></i>
                                                        </div>
                                                        <h3>book</h3>
                                                        <p>
                                                            Select the date and time you’d like your professional to show up.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div>
                                                        <div style={{ fontSize: '50px' }}>
                                                            <i class="fa-solid fa-broom"></i>
                                                        </div>
                                                        <h3>clean</h3>
                                                        <p>
                                                            A certified cleaner comes over and cleans your place.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='col-4'>
                                                    <div>
                                                        <div style={{ fontSize: '50px' }}>
                                                            <i style={{ fontSize: '50px' }} class=" fa-solid fa-mug-hot"></i>
                                                        </div>
                                                        <h3>Relax</h3>
                                                        <p>
                                                            Sit back and relax. Enjoy your sparkling home in no time.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-5'>
                                            <button className='btn btn-outline-light btn-lg text-uppercase'>book us now and get and an enguiry</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'></div>
                            </div>

                        </div>
                        <Mini image1={image1} image2={image2} />
                    </div>
                </div>
                <div className='text-white d-flex flex-column justify-content-center' style={{minHeight:'90vh'}}>
                    <div className='p-3 ' >
                        <div className='row'>
                            <div className='col-1'></div>
                            <div className='col-10'>
                                <div className=''>
                                    <div className='row '>
                                        <div className='col-6'>
                                            <div data-aos='fade-right'>
                                                <Carousel>
                                                    <Carousel.Item>
                                                        <img width='100%'
                                                            className="d-block w-100"
                                                            src={image3}
                                                            alt="First slide"
                                                        />

                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image4}
                                                            alt="Second slide"
                                                        />


                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image5}
                                                            alt="Third slide"
                                                        />


                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <div>
                                                <div data-aos='fade-left'>
                                                    <h3 className='text-uppercase'>we have cleaning products of all ranges</h3>
                                                    <div>
                                                        <p>
                                                        surfaces can prevent infections. That is why at Merry Maids, we want to give you the option to have 
                                                                    our expert cleaners come in to thoroughly clean your home and disinfect the high-touch surfaces for you. Through our existing safety protocols
                                                                    and driven by the shared cleaning expert
                                                        </p>
                                                    </div>
                                                    <div className='text-end'>
                                                        <button className='btn btn-outline-secondary rounded-0 text-uppercase'>Check out our products</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-1'></div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    )
}