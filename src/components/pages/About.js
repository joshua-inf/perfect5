import { motion } from 'framer-motion'
import image from '../../images/perfectfivebuilding.jpg'
import image1 from '../../images/multicultural-businesswomen-group-meeting.jpg'
import image2 from '../../logos/bw-choppi-logo.webp'
import image3 from '../../logos/logo-1.png'
import image4 from '../../logos/DAPPZambia-logo.svg'
import image5 from '../../logos/zambia-sugar-white.svg'
import image6 from '../../images/light-bulb-lit-many-lights.jpg'
import image7 from '../../images/bullseye-score-dartboard.jpg'
import image8 from '../../images/successful-happy-business-team.jpg'
import image9 from '../../images/business-people-shaking-hands-finishing-up-meeting-deals-business-concept.jpg'
import image10 from '../../images/people-conference-with-laptops-table.jpg'
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
                <div className='d-flex flex-column justify-content-center' style={{ minHeight: '100vh' }}>

                    <div className='text-white  mt-4'>
                        <div>
                            <div className='text-center text-uppercase'></div>
                            <div className='d-flex justify-content-center'>
                                <div className=''>
                                    <div className='p-3' >
                                        <div>
                                            <div className='row'>
                                                <div className='col-12 col-md-12'>
                                                    <div>
                                                        <div className='row'>
                                                        <div className='col-12 col-md-6'>
                                                                <div className='bg-dark' >
                                                                    <img src={image1} width='100%' />
                                                                </div>
                                                            </div>
                                                            <div className='px-2 col-md-6 col-12 ' style={{ textAlign: 'justify' }}>
                                                                <div className=' h1'>Who We Are</div>
                                                                <p className='' style={{ fontSize: '' }}>
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
                                                                <p>
                                                                    At perfect five cleaning solution, we realize on your
                                                                    image. The management  of your company had worked very hard and spent a big amount of money to
                                                                    create look and feel of your company environment. We know that your company's trust on

                                                                </p>
                                                            </div>
                                                            

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='' >
                                                            <div className='bg-success px-4 d-flex flex-column justify-content-center' style={{ minHeight: '200px' }}>
                                                                <div className='row'>
                                                                    <div className='col-12 col-md-3'>
                                                                        <div className='text-uppercase h1'>our values</div>
                                                                    </div>
                                                                    <div className='col-12 col-md-9 d-flex' style={{ gap: '20px' }}>
                                                                        <div className='bg-light d-none d-md-block' style={{ height: '100%', width: '5px' }}></div>
                                                                        <div className='d-flex flex-column justify-content-center'>
                                                                            <div>hese are part of our DNA. They guide our behaviours, inspire our future and govern all that we do.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='' style={{ overflow: 'hidden' }}>
                                                                <div className='row my-2'>
                                                                    <div className='col-12 d-none d-md-block col-md-6 bg-dark'>
                                                                        <div className='d-flex flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                            <div className='text-uppercase text-center h1'>efficiency</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-12 col-md-6  bg-light p-0'>
                                                                        <div style={{ minHeight: '300px', background: `url(${image6}) center`, backgroundSize: 'cover', height: '100%', width: '100%' }}>
                                                                            <div style={{ backgroundColor: 'rgba(69,75,27,0.5)', height: '100%' }}>
                                                                                <div className='d-md-none d-flex  flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                                    <div className='text-uppercase text-center h1'>efficiency</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    <div className='col-12 col-md-6 bg-light m-0 p-0'>
                                                                        <div style={{ background: `url(${image7}) center`, backgroundSize: 'cover', height: '100%', width: '100%' }}>
                                                                            <div style={{ minHeight: '300px', backgroundColor: 'rgba(69,75,27,0.5)', height: '100%' }}>
                                                                            <div className='d-flex d-md-none flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                            <div className='text-uppercase text-center h1'>Consistency</div>
                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-12 d-none d-md-block col-md-6 bg-dark'>
                                                                        <div className='d-flex flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                            <div className='text-uppercase text-center h1'>Consistency</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    <div className='col-12 d-none d-md-block col-md-6 bg-dark'>
                                                                        <div className='d-flex flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                            <div className='text-uppercase text-center h1'>staff focus</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-12 col-md-6  bg-light p-0'>
                                                                        <div style={{ minHeight: '300px', background: `url(${image8}) center`, backgroundSize: 'cover', height: '100%', width: '100%' }}>
                                                                            <div style={{ backgroundColor: 'rgba(69,75,27,0.5)', height: '100%' }}>
                                                                                <div className='d-md-none d-flex  flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                                    <div className='text-uppercase text-center h1'>staff focus</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    <div className='col-12 col-md-6 bg-light m-0 p-0'>
                                                                        <div style={{ background: `url(${image9}) center`, backgroundSize: 'cover', height: '100%', width: '100%' }}>
                                                                            <div style={{ minHeight: '300px', backgroundColor: 'rgba(69,75,27,0.5)', height: '100%' }}>
                                                                            <div className='d-flex d-md-none flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                            <div className='text-uppercase text-center h1'>customer focus</div>
                                                                        </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-12 d-none d-md-block col-md-6 bg-dark'>
                                                                        <div className='d-flex flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                            <div className='text-uppercase text-center h1'>customer focus</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row my-2'>
                                                                    <div className='col-12 d-none d-md-block col-md-6 bg-dark'>
                                                                        <div className='d-flex flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                            <div className='text-uppercase text-center h1'>corporate friendship</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-12 col-md-6  bg-light p-0'>
                                                                        <div style={{ minHeight: '300px', background: `url(${image10}) center`, backgroundSize: 'cover', height: '100%', width: '100%' }}>
                                                                            <div style={{ backgroundColor: 'rgba(69,75,27,0.5)', height: '100%' }}>
                                                                                <div className='d-md-none d-flex  flex-column justify-content-center' style={{ minHeight: '300px' }}>
                                                                                    <div className='text-uppercase text-center h1'>corporate friendship</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                            <div className='text-center'>
                                <img src={image2} width='20%' />
                                <img src={image3} width='20%' />
                                <img src={image4} className='bg-danger p-1' width='20%' />
                                <img src={image5} width='20%' />
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