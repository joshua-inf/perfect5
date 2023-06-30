import image from '../../images/pleased-holding-bucket-cleaning-tools-with-sponge-young-africanamerican-cleaner-male-uniform-with-gloves-isolated-green-background.jpg'
import image6 from '../../images/full-shot-people-cleaning-office.jpg'
import image7 from '../../images/hands-holding-cleaning-tools-solutions.jpg'
import image8 from '../../images/african-american-woman-with-braided-hair-wearing-apron-holding-cleaning-products-smiling-happy-doing-ok-sign-with-hand-eye-looking-through-fingers.jpg'
import image9 from '../../images/close-up-hands-holding-cleaning-supplies.jpg'
import image10 from '../../images/technology-digital-cyberspace-with-particles-digital-data-network-connections-big-data-connection-data-analysis-technology-digital-abstract-background-3d-rendering.jpg'

import image2 from '../../images/basket.png'
import image3 from '../../images/wepik-export-202306302146339TsJ.png'
import image4 from '../../images/wepik-export-20230627143828I8tM.png'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css';
import { Link } from 'react-router-dom'


const goRight = () => {
    const scroller = document.getElementById('scroller')
    scroller.style.scrollBehavior = 'smooth';
    scroller.scrollLeft = scroller.scrollLeft -= 300;
}
const goLeft = () => {

    const scroller = document.getElementById('scroller')
    scroller.style.scrollBehavior = 'smooth';
    scroller.scrollLeft = scroller.scrollLeft += 300;
}

const OurProducts = () => {

    const ContainerProduct1 = () => {

        const ContainerProduct2 = (props) => {
            return (
                <>
                    <Link to='/OurProductsDet' className='m-2 shadow rounded bg-secondary' style={{ minWidth: '300px' }}>
                        <div className=' my-2'>
                            <div className=''>
                                <img alt='img' src={props.images} width='100%' />
                            </div>
                            <div className='p-2'>
                                <div>
                                    <div className='text-uppercase text-white' style={{ fontSize: '20px', textDecoration: 'none' }}>product name</div>
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
                <div style={{ position: 'relative' }}>
                    <div id='scroller' className='scroller d-flex py-2' style={{ overflowX: "scroll" }}>
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                        <ContainerProduct2 images={image2} />
                    </div>
                    <div style={{ position: 'absolute', cursor: 'pointer', right: '0', top: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.5)' }} className='text-white p-3 fs-2 d-none d-md-block' onClick={goLeft}>
                        <div className='d-flex flex-column h-100 justify-content-center '>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                    <div style={{ position: 'absolute', cursor: 'pointer', left: '0', top: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.5)' }} className='text-white fs-2 p-3 d-none d-md-block' onClick={goRight}>
                        <div className='d-flex flex-column h-100 justify-content-center '>
                            <AiOutlineArrowLeft /></div>
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
                    modules={[Navigation, Pagination]}

                >
                    <SwiperSlide>
                        <div>
                            <div style={{ backgroundColor: '#C5C6D0' }} className='px-5'>
                                <div className='row'>
                                    <div className='col-12 col-md-6' style={{ height: '70vh' }}>
                                        <div className='d-flex justify-content-center h-100'>
                                            <div className='d-flex justify-content-center flex-column'>
                                                <div>
                                                    <div className='display-1 fw-bold text-uppercase'>check out our products</div>
                                                    <div>Some text about the product in question</div>
                                                    <button className='btn btn-outline-secondary rounded-0 btn-sm text-uppercase fw-bold'>contact us</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 d-none d-md-block op'>
                                        <img src={image3} height='100%' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='bg-white'>
                    <div>
                        <div>
                            <div className='text-center display-4 fw-bold'>Top Products</div>
                            <div className='text-center'>Some text about the product in question</div>
                            <div>
                                <div className='p-2' style={{overflow:'hidden'}}>
                                    <div className='row mb-4'>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-4'>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <div style={{ height: '300px', background: `url(${image4}) no-repeat center`, backgroundSize: 'cover' }}>
                                <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%' }}>
                                    <div className='p-3 h-100'>
                                        <div className='h-100'>
                                            <div className='h-100'>
                                                <div className=' h-100 flex-column h-100 text-white h-100 ps-4 justify-content-center  d-flex'>
                                                    <div className='text-center'>
                                                        <div>some writing about this stuff</div>
                                                        <div className='fw-bold display-1'>Hair Shampoo</div>
                                                        <button className='btn btn-outline-light fw-bold text-uppercase'>contact us</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <div className='text-center display-4 fw-bold'>New Products</div>
                            <div className='text-center'>Some text about the product in question</div>
                            <div>
                                <div  className='p-2' style={{overflow:'hidden'}}>
                                <div className='row mb-4'>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row my-4'>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className='col-6 col-md-3 my-3'>
                                            <div className='bg-secondary rounded-4' style={{ height: '300px', width: '100%' }}>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='' style={{overflow:'hidden'}}>
                                <div className='row'>
                                    <div className='col-12 col-md-6 my-2'>
                                        <div className='bg-dark' style={{ height: '400px', width: '100%', background: `url(${image}) no-repeat right`, backgroundSize: 'cover' }}>
                                            <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%', width: '100%' }}>
                                                <div className='d-flex p-3 text-white justify-content-center flex-column h-100'>
                                                    <div className=''>
                                                        <div className='fw-light h4'>some fancy writing in here</div>
                                                        <div className='text-uppercase h1 fw-bold'>Some  Category</div>
                                                        <div className='h6 fw-normal'>some short description</div>
                                                        <div>
                                                            <button className='btn btn-outline-secondary btn-lg text-uppercase rounded-0'>Learn More</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 my-2'>
                                        <div className='bg-dark' style={{ height: '400px', width: '100%', background: `url(${image6}) no-repeat right`, backgroundSize: 'cover' }}>
                                            <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%', width: '100%' }}>
                                                <div className='d-flex p-3 text-white justify-content-center flex-column h-100'>
                                                    <div className=''>
                                                        <div className='fw-light h4'>some fancy writing in here</div>
                                                        <div className='text-uppercase h1 fw-bold'>Some  Category</div>
                                                        <div className='h6 fw-normal'>some short description</div>
                                                        <div>
                                                            <button className='btn btn-outline-secondary btn-lg text-uppercase rounded-0'>Collection</button>
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
                        <div className='p-2 bg-white' style={{overflow:'hidden'}}>
                            <div className='row'>
                                <div className='col-6 m-0 p-2 col-md-4 my-2'>
                                    <div>
                                        <div style={{ height: '300px', width: '100%', background: `url(${image7}) no-repeat center`, backgroundSize: 'cover', }}>
                                            <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%', width: '100%' }}>
                                                <div className='d-flex flex-column h-100 p-3 justify-content-center'>
                                                    <div className='text-white'>
                                                        <div className='h4 text-uppercase'>Some important writing here</div>
                                                        <div className='fw-light'>Some important writing here</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 m-0 p-2 my-2'>
                                    <div>
                                        <div style={{ height: '300px', width: '100%', background: `url(${image8}) no-repeat center`, backgroundSize: 'cover', }}>
                                            <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%', width: '100%' }}>
                                                <div className='d-flex flex-column h-100 p-3 justify-content-center'>
                                                    <div className='text-white'>
                                                        <div className='h4 text-uppercase'>Some important writing here</div>
                                                        <div className='fw-light'>Some important writing here</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 col-md-4 p-2 my-2'>
                                    <div>
                                        <div style={{ height: '300px', width: '100%', background: `url(${image9}) no-repeat center`, backgroundSize: 'cover', }}>
                                            <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%', width: '100%' }}>
                                                <div className='d-flex flex-column h-100 p-3 justify-content-center'>
                                                    <div className='text-white'>
                                                        <div className='h4 text-uppercase'>Some important writing here</div>
                                                        <div className='fw-light'>Some important writing here</div>
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
                        <div className='' style={{ background: `url(${image10}) no-repeat center`, backgroundSize: 'cover' }}>
                            <div className='p-4' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                <div className='text-white row'>
                                    <div className='col-md-6 col-12'>
                                        <div className='h4'>Sign Up For Newslaters</div>
                                        <div className='h6'>Get E-mail updates about our latest shop and <span className='text-warning'> spacial offers</span></div>
                                    </div>
                                    <div className='col-12 col-md-6'>
                                        <div>
                                            <div class="input-group my-3">
                                                <input type="text" style={{width:''}} class="form-control" placeholder="Your Email address" aria-describedby="basic-addon2"/>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-outline-success" type="button">Sign up</button>
                                                    </div>
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