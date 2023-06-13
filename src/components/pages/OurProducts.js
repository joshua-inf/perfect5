import image from '../../images/image20.jpg'
import image5 from '../../images/image22.jpg'
import image6 from '../../images/image21.jpg'
import image7 from '../../images/111.webp'
import image8 from '../../images/image20.jpg'
import image9 from '../../images/image20.jpg'
import image10 from '../../images/image20.jpg'

import image2 from '../../images/basket.png'
import image3 from '../../images/clean2.jpeg'
import image4 from '../../images/clean0.jpg'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css';
import { Link } from 'react-router-dom'


const OurProducts = () => {

    const ContainerProduct1 = () => {

        const ContainerProduct2 = (props) => {
            return (
                <>
                    <Link className='m-2 shadow rounded bg-secondary' style={{ minWidth: '300px' }}>
                        <div className=' my-2'>
                            <div className=''>
                                <img src={props.images} width='100%' />
                            </div>
                            <div className='p-2'>
                                <div>
                                    <div className='text-uppercase text-white' style={{ fontSize: '20px', textDecoration:'none' }}>product name</div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </>
            )
        }
        return (
            <>
                <div className=' d-flex py-2' style={{ overflowX: "scroll", overflow: 'auto' }}>
                    <ContainerProduct2 images={image2} />
                    <ContainerProduct2 images={image2} />
                    <ContainerProduct2 images={image2} />
                    <ContainerProduct2 images={image2} />
                    <ContainerProduct2 images={image2} />
                    <ContainerProduct2 images={image2} />
                    <ContainerProduct2 images={image2} />
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
                    modules={[Navigation, Pagination]}
                >
                    <SwiperSlide>
                        <div>
                            <div className="" style={{ background: `url(${image3}) fixed right`, backgroundSize: 'cover', height: '70vh' }}>
                                <div className='row p-5 h-100' >
                                    <div className='col-12 col-md-5  d-flex flex-column justify-content-center'>
                                        <div className=''>
                                            <div className=' p-4 bg-light shadow rounded' >
                                                <div className='text-uppercase' style={{ fontSize: '25px', fontWeight: 'bold' }}>welcome to our store</div>
                                                <div style={{ fontSize: '30px' }}>
                                                    Lorem ipsum dolor sit amet
                                                </div>
                                                <div>
                                                    <button className='btn m-2 rounded-0 p-3 text-uppercase fw-bolder btn-outline-success'>contact us now</button>
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
                                            <div className='p-4 bg-light shadow rounded' >
                                                <div className='text-uppercase' style={{ fontSize: '25px', fontWeight: 'bold' }}>welcome to our store</div>
                                                <div style={{ fontSize: '30px' }}>
                                                    Lorem ipsum dolor sit amet
                                                </div>
                                                <div>
                                                    <button className='btn m-2 rounded-0 p-3 text-uppercase fw-bolder btn-outline-success'>contact us now</button>
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

                <div className='' style={{ overflow: 'hidden' }}>
                    <div className='text-white d-flex flex-column justify-content-center' style={{ minHeight: '75vh' }}>
                        <div className='text-uppercase'>
                            <h2>products </h2>
                            <hr />
                        </div>

                        <ContainerProduct1 />
                    </div>
                    <div className='bg-secondary my-4'>
                        <div className=''>
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
                            <div className=' px-4 text-uppercase h3'>
                                Browse by category
                            </div>
                            <hr className='m-4 my-0' />
                            <div>
                                
                                <div className='row p-4'>
                                    <div className='col-6 col-md-3 p-2'>
                                        <div className='col-cat bg-light' style={{ overflow:'hidden'}}>
                                            <img width='100%' className='img-1' src={image7} /> 
                                        </div>
                                        <div className='text-uppercase fw-bold'>
                                            Body wash
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-3 p-2'>
                                        <div className='col-cat bg-light' style={{ overflow:'hidden'}}>
                                            <img width='100%' className='img-1' src={image7} /> 
                                        </div>
                                        <div className='text-uppercase fw-bold'>
                                            dish wash
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-3 p-2'>
                                        <div className='col-cat bg-light' style={{ overflow:'hidden'}}>
                                            <img width='100%' className='img-1' src={image7} /> 
                                        </div>
                                        <div className='text-uppercase fw-bold'>
                                            floor cleaner
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-3 p-2'>
                                        <div className='col-cat bg-light' style={{ overflow:'hidden'}}>
                                            <img width='100%' className='img-1' src={image7} /> 
                                        </div>
                                        <div className='text-uppercase fw-bold'>
                                            animal cleaner
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-secondary my-4'>
                        <div className=''>
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
                                        <img style={{ maxWidth: '100%', minHeight: '100%' }} src={image6} />
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