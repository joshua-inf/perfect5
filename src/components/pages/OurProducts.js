import image from '../../images/flowers.jpg'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

const OurProducts = () => {
    const ContainerProduct1 = () => {
        const ContainerProduct2 = () => {
            return (
                <>
                    <div className='col-md-3 col-12 '>
                        <div className='shadow my-2'>
                            <div className='bg-dark' style={{ height: '250px' }}></div>
                            <div className='p-2'>
                                <div>
                                    <h3 className='text-uppercase h4'>product name</h3>
                                </div>
                                <div>
                                    <p>
                                        product details here. and some more information about said product
                                    </p>
                                </div>
                                <div>
                                    <button className='btn btn-info'>call to action</button>
                                    <a className='text-white px-3' style={{ fontSize: '10px', textDecoration: 'none' }} href=''>or may be another option</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        return (
            <>
                <div className='bg-secondary' style={{ minHeight: '400px' }}>
                    <div className='p-4'>
                        <div className='row d-flex'>
                            <ContainerProduct2 />
                            <ContainerProduct2 />
                            <ContainerProduct2 />
                            <ContainerProduct2 />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
            >
                <Swiper className=''
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div>
                            <div className="bg-secondary" style={{height:'100vh'}}>
                                <div className='d-flex h-100 flex-column justify-content-center'>
                                    <div className='d-flex justify-content-start'>
                                        <div className=' text-white text-uppercase p-2'>
                                            <h2>welcome to our store</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
                <div className='p-3'>
                    <div className='text-white d-flex flex-column justify-content-center' style={{ minHeight: '75vh' }}>
                        <div className='text-uppercase p-4'>
                            <h2>products</h2>
                            <hr />
                        </div>
                        <ContainerProduct1 />
                    </div>
                    <div className='text-white d-flex flex-column justify-content-center my-2' style={{ minHeight: '75vh' }}>
                        <div>
                            <div className='row'>
                                <div className='col-md-6 col-12'>
                                    <div className='bg-secondary' style={{ height: '400px' }}>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12'>
                                    <div className=''>
                                        <div>
                                            <div className='h1 text-uppercase'>product name</div>
                                        </div>
                                        <div>
                                            <p>
                                                product description in detail this time   product description in detail this time
                                                product description in detail this time   product description in detail this time
                                                product description in detail this time   product description in detail this time
                                                product description in detail this time   product description in detail this time
                                                product description in detail this time   product description in detail this time
                                                product description in detail this time   product description in detail this time
                                            </p>
                                        </div>
                                        <div>
                                            <button className='btn btn-info'>call to action</button>
                                            <a className='text-white px-3' style={{ fontSize: '10px', textDecoration: 'none' }} href=''>or may be another option</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-white'>
                            <h2 className='text-uppercase'>category</h2>
                            <hr />
                            <div className='row p-3'>
                                <div style={{ height: '400px' }} className='col-md-6 col-12 bg-secondary'>
                                    <div className='d-flex flex-column h-100 justify-content-center'>
                                        <div className='d-flex p-5 justify-content-center'>
                                            <div>
                                                <h3 className='text-uppercase'>category name</h3>
                                                <div className=''>
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time
                                                </div>
                                                <button className='btn btn-success shadow px-4 py-2'>call to action</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '400px' }} className='bg-dark col-md-6 col-12'>
                                    <div className='d-flex flex-column h-100 justify-content-center'>
                                        <div className='d-flex p-5 justify-content-center'>
                                            <div>
                                                <h3 className='text-uppercase'>category name</h3>
                                                <div className=''>
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time
                                                </div>
                                                <button className='btn btn-success shadow px-4 py-2'>call to action</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '400px' }} className='bg-dark col-md-6 col-12'>
                                    <div className='d-flex flex-column h-100 justify-content-center'>
                                        <div className='d-flex p-5 justify-content-center'>
                                            <div>
                                                <h3 className='text-uppercase'>category name</h3>
                                                <div className=''>
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time
                                                </div>
                                                <button className='btn btn-success shadow px-4 py-2'>call to action</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '400px' }} className='col-md-6 col-12 bg-secondary'>
                                    <div className='d-flex flex-column h-100 justify-content-center'>
                                        <div className='d-flex p-5 justify-content-center'>
                                            <div>
                                                <h3 className='text-uppercase'>category name</h3>
                                                <div className=''>
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time   product description in detail this time
                                                    product description in detail this time
                                                </div>
                                                <button className='btn btn-success shadow px-4 py-2'>call to action</button>
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


export default OurProducts