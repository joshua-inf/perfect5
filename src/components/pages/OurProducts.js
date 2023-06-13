import image from '../../images/image20.jpg'
import image2 from '../../images/basket.png'
import image3 from '../../images/clean2.jpeg'
import image4 from '../../images/clean0.jpg'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination'
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
                <Swiper style={{ background: 'linear-gradient( rgb(0,0,0), rgb(33, 37, 41))' }} className=''
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <div>
                            <div className="" style={{ background: `url(${image3}) fixed right`, backgroundSize: 'cover', height: '70vh' }}>
                                <div className='row p-5 h-100' >
                                    <div className='col-12 col-md-5  d-flex flex-column justify-content-center'>
                                        <div className=''>
                                            <div className='text-white p-2' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                                <div className='text-uppercase ' style={{ fontSize: '60px' }}>welcome to our store</div>
                                                <div style={{ fontSize: '30px' }}>
                                                    Lorem ipsum dolor sit amet
                                                </div>
                                                <div>
                                                    <button className='btn m-2 p-4 text-uppercase fw-bolder btn-success'>contact us now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-7 d-md-block d-none'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="" style={{ background: `url(${image4}) fixed right`, backgroundSize: 'cover', height: '70vh' }}>
                                <div className='row p-5 h-100' >
                                    <div className='col-12 col-md-5  d-flex flex-column justify-content-center'>
                                        <div className=''>
                                            <div className='text-white p-2' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                                <div className='text-uppercase ' style={{ fontSize: '60px' }}>welcome to our store</div>
                                                <div style={{ fontSize: '30px' }}>
                                                    Lorem ipsum dolor sit amet
                                                </div>
                                                <div>
                                                    <button className='btn m-2 p-4 text-uppercase fw-bolder btn-success'>contact us now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-7 d-md-block d-none'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
                <div className='p-3'>
                    <div className='text-white d-flex flex-column justify-content-center' style={{ minHeight: '75vh' }}>
                        <div className='text-uppercase p-4'>
                            <h2>products</h2>
                            <hr />
                        </div>
                        <Swiper style={{ width: '100%' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            navigation
                            modules={[Navigation]}
                            transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
                        >
                            <SwiperSlide>
                                <div >
                                    <ContainerProduct1 />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div >
                                    <ContainerProduct1 />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='bg-light my-4'>
                    <div>
                        <div className='row h-100'>
                            <div className='col-12 col-md-4 bg-info'>
                                <div className='text-dark d-flex justify-content-center flex-column p-5'>
                                    <div className='fw-bold h1'>
                                        Gear up in Gorpcore!
                                    </div>
                                    <div className=''>

                                        Shop the look from Salomon, The North Face, and more!
                                    </div>
                                    <div className='mt-5'>
                                        <button className='btn btn-outline-dark btn-lg p-2 rounded-0'>Check this out</button>

                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-8 m-0 p-0'>
                                <div style={{ height: '50vh', overflow: 'hidden' }}>
                                    <img style={{ maxWidth: '100%', minHeight: '100%' }} src={image} />
                                </div>
                            </div>

                        </div>
                    </div>
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

                </div>
                
            </motion.div>
        </>
    )
}


export default OurProducts