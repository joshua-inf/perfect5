import { motion } from 'framer-motion'
import image from '../../images/perfectfivebuilding.jpg'
import image1 from '../../images/clean4.jpg'
import image2 from '../../images/p5logo.png'
const About = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <div style={{ background: `url(${image}) right no-repeat`, backgroundSize: 'cover', backgroundPositionY: '50%', height: '50vh' }}>
                    <div className='d-flex flex-column justify-content-center text-center' style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                        <h3 className='display-2  mx-5 fw-bold text-white text-uppercase'> about <span className='text-success'>us</span></h3>
                    </motion.div>
                    </div>
                </div>
                <div style={{minHeight:'70vh'}}>
                    
                    <div className='text-white  mt-4'>
                        <div>
                            <div className='text-center text-uppercase'></div>
                            <div className='d-flex justify-content-center'>
                                <div className='p-3'>
                                    <div className='p-3' >
                                        <div className=''>
                                            <div className='p-2' style={{ textAlign: 'CENTER' }}>
                                                <p className='' style={{ fontSize: '14px' }}>
                                                    Perfect five was founded by an individual with vast experience in both cleaning industry and
                                                    management skill way back in 2006 and in 2014 it was registered with the registrar of compa­ nies
                                                    in Zambia, although it started with modest amount of capital but today perfect five cleaning
                                                    service is growing fast in every aspect in order to meet the demand of the fast growing industry.
                                                </p>
                                                <p>
                                                    We are supported by a strong management team comprising of people with relevant technical
                                                    experience. We at perfect five cleaning solution believe that a good health is conducive to the
                                                    productivity and the quality of our surround­ ings; we strive to provide excellent cleaning
                                                    services to satisfy the challenging needs of our customers. Our customers are an evidence of our
                                                    achievements.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <h4 className='text-white text-uppercase text-center'>some of our top clients (companies)</h4>
                        <hr className='m-0 mx-5 text-white' />
                        <div className='px-5'>
                            <div className='row'>
                                <div className='col-lg-1 col-3 p-3'>
                                    <div className='bg-secondary' style={{ height: '100px' }}></div>
                                </div>
                                <div className='col-lg-1 col-3 p-3'>
                                    <div className='bg-secondary' style={{ height: '100px' }}></div>
                                </div>
                                <div className='col-lg-1 col-3 p-3'>
                                    <div className='bg-secondary' style={{ height: '100px' }}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                </div>
            </motion.div>
        </>
    )
}

export default About