import {BsBuildings} from 'react-icons/bs'
import {IoShieldCheckmark } from  'react-icons/io5'
import {FaHouseChimneyMedical } from 'react-icons/fa6'
import { motion } from 'framer-motion';
import { GeneralSev, Logogs } from './services/components';



//images being used on the page
import image from '../../images/hands-holding-cleaning-tools-solutions.jpg';
import image1 from '../../images/side-view-adult-male-cleaning-window.jpg';
import image2 from '../../images/colorful-composition-with.jpg'
import image3 from '../../images/cleaning-concept-set-cleaning-.jpg'


//Logos of the products for perfect five
import logo from '../../logo/logos-1.png'
import logo1 from '../../logo/logos-2.png'
import logo2 from '../../logo/logos-3.png'
import logo3 from '../../logo/logos-4.png'
import logo4 from '../../logo/logos-5.png'
import logo5 from '../../logo/logos-6.png'
import logo6 from '../../logo/logos-7.png'
import logo7 from '../../logo/logos-8.png'

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
                                                <div className='' style={{ height: '100%', overflow: 'hidden' }}>
                                                    <img className='bg-light' src={image1} width='100%' />
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
                                                <div className='display-6 fw-bold text-uppercase'>interested in our products?</div>
                                                <div>
                                                    <p className='fs-5'>
well look no further. contact us now
                                                    </p>
                                                    <div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='btn-cont text-uppercase fw-bold'>contact us!!!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div style={{minHeight:'100vh'}}>
                            <div className='p-3'>
                                <div className='row'>
                                    <div className='col-md-1'></div>
                                    <div className='col-12 col-md-10'>
                                        <div className='my-5 text-white'>
                                            <div className='text-center'>
                                                <h1 className='display-5 fw-bold'>GENERAL CLEANING SERVICES</h1>
                                            </div>
                                        
                                        </div>
                                        <div>
                                            <div className='row'>
                                                <div className='col-12 col-lg-7'>
                                                    <img alt='constraction image for some peoplr' src={image} width='100%' />
                                                </div>
                                                <div className='col-lg-5 col-12 p-4'>
                                                    <div>
                                                        <GeneralSev 
                                                        info='Building maintenance cleaning services caters for day to day  maintenance of Building, shopping complex, trading centers, finance, workshop,  ware house, sports stadium and theme park, concert hall school etc.'
                                                        title='Building Care Services'
                                                        icon={BsBuildings}
                                                        />
                                                        <GeneralSev
                                                            info={(<>
                                                                <>
                                                                    <p>
                                                                        General house cleaning services caters for luxurious apartment, hotels, hostels, lodges and cabin cleaning
                                                                    </p>
                                                                    <p>
                                                                        At perfect five cleaning solution, we are focussed on the job in hand and we would like to do it with satisfaction
                                                                        based on our experience in the cleaning industry we know that quality control is the key element to customers satisfaction.
                                                                    </p>
                                                                </>
                                                            </>)}
                                                        title='Home Care Services'
                                                        icon={FaHouseChimneyMedical}
                                                        />
                                                        
                                                        <GeneralSev 
                                                        info={(<>
                                                                <div>
                                                                    <p>
                                                                        At perfect five cleaning solution, we realize on your image. The management of your company had worked very hard and spent a big amount of money to create look and
                                                                        feel of your company environmet. we know that your company's trust on your cleaning compnay to enhance and preserve its apearance and ambience. We also know our feature
                                                                        success depend on your consistence satisifaction at perfect five cleaning solution, our objective is to accommodate your cleaning needs. Our cleaning labour management techniques can provide verity
                                                                        of options for your customised cleaning schedules. We have established a reputation in the cleaning requirement.
                                                                    </p>
                                                                </div>
                                                        </>)}
                                                        title='Quality Control'
                                                        icon={IoShieldCheckmark }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-1'></div>
                                </div>
                            </div>
                        </div>





                        <div>
                            <div style={{minHeight:'100vh', position:'relative', background:` url(${image3}) no-repeat center`, backgroundSize:'cover'}}>
                                <div className='p-4' style={{backgroundColor:'rgba(0,0,0,0.5)',  width:'100%', minHeight:'100vh'}}>
                                    <div style={{height:'100%'}}>
                                        <div className='py-5 my-5'>
                                            <h4 className='display-4 text-white text-center fw-bold'>SOME OF OUR PRODUCT BRANDS</h4>
                                        </div>
                                        <div className='p-4'>
                                            <div className='row'>
                                                <Logogs logo={logo} />
                                                <Logogs logo={logo1} />
                                                <Logogs logo={logo2} />
                                                <Logogs logo={logo3} />
                                                <Logogs logo={logo4} />
                                                <Logogs logo={logo5} />
                                                <Logogs logo={logo6} />
                                                <Logogs logo={logo7} />
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