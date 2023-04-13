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
            <div style={{ background: `url(${image}) fixed no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center bottom', height: '50vh' }}>
                    <div className='d-flex flex-column justify-content-center text-center' style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%' }}>
                        <motion.div initial={{ y: '15vh', opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: 'spring', duration: 4 } }}>
                            <h3 className='display-2 fw-bold text-white text-uppercase'> our<span className='text-success'> services</span></h3>
                        </motion.div>
                    </div>
                </div>
                <div className='px-3 py-5'>
                    <div className='d-flex flex-column justify-content-center' style={{minHeight:'100vh'}}>
                        <div>
                            <div>
                                <div    className='row'>
                                    <div className='col-12 col-md-6'>
                                        <div className=''>
                                            <div >
                                                <img width='100%' src={image1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 py-2 col-md-6'>
                                        <div>
                                            <div className='text-white'>
                                                <h3>Commercial Cleaning Services</h3>
                                                <p>
                                                Simple Clean offers a full range of cleaning services to suit any 
                                                business and any budget. From light office cleaning to deep institutional 
                                                kitchen cleaning, our highly trained staff will ensure your environment is 
                                                pleasant, safe, and healthy. For your peace of mind, we carry comprehensive 
                                                general liability and property damage insurance,
                                                 and all our staff members are covered by Workers’ Compensation
                                                </p>
                                                <h3>Simple and Clean Solutions Your Business Deserves</h3>
                                                <p>
                                                A clean working environment is a healthy and productive working environment.
                                                 Our methodical approach to establishing and maintaining high standards of cleanliness
                                                  means you can focus on your work and your customers. Quality control is very important
                                                   to us. Over our many years in the business, we’ve developed a foolproof system of weekly,
                                                    monthly, and yearly janitorial maintenance that guarantees results.

We provide services to many different commercial locations. Contact us today and tell us about your commercial space needs.
                                                </p>

                                            </div>
                                            <button className='btn btn-success rounded-0'>Contact us now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>  
                            <div className=''>
                                <div>
                                    <img src={image2} width='100%' alt='imagecover' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center py-5' style={{minHeight:'100vh'}}>
                        <div>
                            <div>
                                <h2 className='text-white text-center text-uppercase'>category of cleaning services</h2>
                            </div>
                            <hr className='text-white m-0'/>
                            <div className='row'>
                                <div className='col-md-4 p-2 col-12'>
                                    <div className='bg-secondary' style={{height:'400px',position:'relative', overflow:'hidden'}}>
                                        <div style={{position:'absolute', top:'0', bottom:'0'}}>
                                            <img width='100%' style={{transform:'scale(1.5)'}} src={image1} />
                                        </div>
                                        <div style={{position:'absolute', top:'0', bottom:'0', right:'0', left:'0',backgroundColor:'rgba(0,0,0,0.5)', backdropFilter:'blur(3px)'}} className='d-flex justify-content-center h-100'>
                                            <div className='d-flex flex-column  justify-content-center'>
                                                <div className='text-center text-white text-uppercase h3'>
                                                    name of category
                                                </div>
                                                <button className='btn btn-outline-light text-uppercase p-3 fw-bold rounded-0'>call to action</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 p-2 col-12'>
                                    <div className='bg-secondary' style={{height:'400px',position:'relative', overflow:'hidden'}}>
                                        <div style={{position:'absolute', top:'0', bottom:'0'}}>
                                            <img width='100%' style={{transform:'scale(1.5)'}} src={image1} />
                                        </div>
                                        <div style={{position:'absolute', top:'0', bottom:'0', right:'0', left:'0',backgroundColor:'rgba(0,0,0,0.5)', backdropFilter:'blur(3px)'}} className='d-flex justify-content-center h-100'>
                                            <div className='d-flex flex-column  justify-content-center'>
                                                <div className='text-center text-white text-uppercase h3'>
                                                    name of category
                                                </div>
                                                <button className='btn btn-outline-light text-uppercase p-3 fw-bold rounded-0'>call to action</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 p-2 col-12'>
                                    <div className='bg-secondary' style={{height:'400px',position:'relative', overflow:'hidden'}}>
                                        <div style={{position:'absolute', top:'0', bottom:'0'}}>
                                            <img width='100%' style={{transform:'scale(1.5)'}} src={image1} />
                                        </div>
                                        <div style={{position:'absolute', top:'0', bottom:'0', right:'0', left:'0',backgroundColor:'rgba(0,0,0,0.5)', backdropFilter:'blur(3px)'}} className='d-flex justify-content-center h-100'>
                                            <div className='d-flex flex-column  justify-content-center'>
                                                <div className='text-center text-white text-uppercase h3'>
                                                    name of category
                                                </div>
                                                <button className='btn btn-outline-light text-uppercase p-3 fw-bold rounded-0'>call to action</button>
                                            </div>
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