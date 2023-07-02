import image from '../../images/services.jpg';
import image1 from '../../images/clean8.jpg';
import image2 from '../../images/colorful-composition-with.jpg'
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
                        <div className='d-flex flex-column justify-content-center text-center' style={{ minHeight: '50vh' }}>
                            <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                                <div className='d-flex flex-column justify-content-center'>
                                    <div>
                                        <h3 className='display-2 fw-bold text-white text-uppercase'> our<span className='text-success'> services</span></h3>
                                        <div className='text-white'>
                                            <div className='text-center'>Tempor sed consetetur ut dolores labore eos dolores at ut voluptua. Labore accusam diam stet.
                                                Clita eirmod est ipsum est lorem rebum elitr. <br /> Ipsum dolor magna elitr sed invidunt est amet. Sadipscing lorem accusam at.</div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-12 col-md-10'>
                                    <div className='my-5'>
                                        <div className='row'>
                                            <div className='col-12 col-md-7'>
                                                <img src={image1} width='100%' />
                                            </div>
                                            <div className='text-center col-12 col-md-5 text-white'>
                                                <div>
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
                                <div className='col-md-1'></div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div>
                                <div style={{ height: "70vh", background: `url(${image2}) no-repeat center`, backgroundSize: 'cover' }}>
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
                                    <div className='my-5'>
                                        <div className='row'>
                                            <div className='text-center col-12 p-3 col-md-6 text-white'>
                                                <div>
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
                                            <div className='text-center col-12 p-3 col-md-6 text-white'>
                                                <div>
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
                                <div className='col-md-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Services