import image from '../../images/hands-holding-cleaning-tools-solutions.jpg';
import image1 from '../../images/full-shot-people-cleaning-office.jpg';
import image2 from '../../images/colorful-composition-with.jpg'
import image3 from '../../images/cleaning-concept-set-cleaning-.jpg'
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <div style={{ backgroundSize: 'cover', backgroundPosition: 'center bottom', minHeight: '100vh' }}>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                        <div className='d-flex flex-column justify-content-center text-center' style={{ position: 'relative', minHeight: '50vh', background: `url(${image}) no-repeat`, backgroundSize: 'cover', backgroundPositionY: '50%' }}>
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: '0', bottom: '0', width: '100%' }}>
                                <motion.div style={{ height: '100%' }} initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                                    <div style={{ height: '100%' }} className='d-flex  flex-column justify-content-center'>
                                        <div>
                                            <h3 className='display-1 fw-bold text-white text-uppercase'> our<span className='text-success'> services</span></h3>

                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-12 col-md-10'>
                                    <div className='my-5'>
                                        <div className='row'>
                                            <div className='col-12 col-md-5 p-4'>
                                                <div>
                                                    <div className='text-white fs-5'>
                                                        <ul>
                                                            <li>We manufacture & supply cleaning products Water treatment </li>
                                                            <li>Fumigation</li>
                                                            <li>Environmental Management consultancy</li>
                                                            <li>Dangerous spillage treatment e.g. Acid</li>
                                                            <li>Rodent control</li>
                                                            <li>Factory cleaning services</li>
                                                            <li>Complex cleaning services</li>
                                                            <li>Office cleaning services</li>
                                                            <li>Building cleaning services</li>
                                                            <li>Man power supply</li>
                                                            <li>Landscaping and lawn maintenance</li>
                                                            <li>Cleaning consolation on cleaning management</li>
                                                            <li>Detail cleaning</li>
                                                            <li>Cleaning Chemicals supply.</li>
                                                        </ul>
                                                    </div>
                                                    <button className='btn btn-success btn-lg my-4'>Contact us now</button>
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-7'>
                                                <div className='bg-light' style={{ height: '100%', overflow: 'hidden' }}>
                                                    <img className='bg-light' src={image1} height='100%' />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-1'></div>
                            </div>
                        </div>


                        <div className='mt-5'>
                            <div>
                                <div style={{ height: "50vh", background: `url(${image2}) no-repeat center`, backgroundSize: 'cover' }}>
                                    <div className='d-flex justify-content-center' style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', width: '100%' }}>
                                        <div className='w-100 d-flex justify-content-center flex-column text-center col-5 text-white'>
                                            <div className='p-3'>
                                                <div className='display-6 fw-bold text-uppercase'>header detailing something in here</div>
                                                <div>
                                                    <p className='fs-5'>
                                                        Magna amet labore amet sed aliquyam. Voluptua lorem takimata clita ipsum diam kasd at clita
                                                        . Duo lorem ipsum voluptua ea ipsum voluptua eirmod, ipsum ut tempor labore kasd amet sed.
                                                    </p>
                                                    <div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='btn-cont text-uppercase fw-bold'>contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-12 col-md-10'>
                                    <div className='my-5 text-white'>
                                        <div>
                                            <h1 className='display-5 fw-bold'>GENERAL CLEANING SERVICES</h1>
                                        </div>
                                        <div className='fs-4'>
                                            <p>
                                                Building maintenance cleaning services caters for day to day maintenance of building, shopping complex, trading centers, factories, workshop,
                                                Building maintenance cleaning services caters for day to day maintenance of building, shopping complex, trading centers, factories, workshop,
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='row'>
                                            <div className='col-7'>
                                                <img alt='constraction image for some peoplr' src={image} width='100%' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-1'></div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div>
                                <div style={{ height: "50vh", background: `url(${image2}) no-repeat center`, backgroundSize: 'cover' }}>
                                    <div className='d-flex justify-content-center' style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', width: '100%' }}>
                                        <div className='w-100 d-flex justify-content-center flex-column text-center col-5 text-white'>
                                            <div className='p-3'>
                                                <div className='display-6 fw-bold text-uppercase'>header detailing something in here</div>
                                                <div>
                                                    <p className='fs-5'>
                                                        Magna amet labore amet sed aliquyam. Voluptua lorem takimata clita ipsum diam kasd at clita
                                                        . Duo lorem ipsum voluptua ea ipsum voluptua eirmod, ipsum ut tempor labore kasd amet sed.
                                                    </p>
                                                    <div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='btn-cont text-uppercase fw-bold'>contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div style={{minHeight:'100vh', position:'relative', background:` url(${image3}) no-repeat center`, backgroundSize:'cover'}}>
                                <div style={{backgroundColor:'rgba(0,0,0,0.5)', position:'absolute', width:'100%', top:'0', bottom:'0'}}>
                                    <div style={{height:'100%'}}>
                                        <div className='py-5 my-5'>
                                            <h4 className='display-4 text-white text-center fw-bold'>SOME OF OUR PRODUCT BRANDS</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Services