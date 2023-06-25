import image from '../../images/services.jpg';
import image1 from '../../images/clean8.jpg';
import image2 from '../../images/perfectsomething.jpg'
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <div style={{ background: `url(${image}) fixed no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center bottom', minHeight: '100vh' }}>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.6)'}}>
                        <div className='d-flex flex-column justify-content-center text-center' style={{ height: '70vh' }}>
                            <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                                <h3 className='display-2 fw-bold text-white text-uppercase'> our<span className='text-success'> services</span></h3>
                            </motion.div>
                        </div>

                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-12 col-md-10'>
                                    <div className='p-4 mb-4 border' style={{ transform: 'translateY(-90px)', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <div>
                                            <div className='text-uppercase fw-bold text-white  text-center h2'>general cleaning services</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 my-3 col-md-4'>
                                                <div className='shadow bg-secondary'>
                                                    <div className='p-3 d-flex flex-column justify-content-center' style={{ height: '200px' }}>
                                                        <div className='text-uppercase fw-bold text-white  text-center'>Bulding care</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 my-3 col-md-4'>
                                                <div className='shadow bg-secondary'>
                                                    <div className='p-3 d-flex flex-column justify-content-center' style={{ height: '200px' }}>
                                                        <div className='text-uppercase fw-bold text-white  text-center'>External high cleaning</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 my-3 col-md-4'>
                                                <div className='shadow bg-secondary'>
                                                    <div className='p-3 d-flex flex-column justify-content-center' style={{ height: '200px' }}>
                                                        <div className='text-uppercase fw-bold text-white  text-center'>office care</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 my-3 col-md-4'>
                                                <div className='shadow bg-secondary'>
                                                    <div className='p-3 d-flex flex-column justify-content-center' style={{ height: '200px' }}>
                                                        <div className='text-uppercase fw-bold text-white  text-center'>trans care</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-4 my-4 border' style={{ transform: 'translateY(-90px)', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                        <div>
                                            <div className='text-uppercase fw-bold text-white  text-center h2'>house care services</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 my-3 col-md-4'>
                                                <div className='shadow bg-secondary'>
                                                    <div className='p-3 d-flex flex-column justify-content-center' style={{ height: '200px' }}>
                                                        <div className='text-uppercase fw-bold text-white  text-center'>spring cleaning</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 my-3 col-md-4'>
                                                <div className='shadow bg-secondary'>
                                                    <div className='p-3 d-flex flex-column justify-content-center' style={{ height: '200px' }}>
                                                        <div className='text-uppercase fw-bold text-white  text-center'>houskeeping</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 my-3 col-md-4'>
                                                <div className='shadow bg-secondary'>
                                                    <div className='p-3 d-flex flex-column justify-content-center' style={{ height: '200px' }}>
                                                        <div className='text-uppercase fw-bold text-white  text-center'>cleaning chemicals</div>
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