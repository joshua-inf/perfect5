import { Link } from 'react-router-dom'
import image2 from '../../images/Perfect 5 -side White.png'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { ImTwitter } from 'react-icons/im'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="bg-black">
                    <div className="text-white p-3">
                        <div className='row'>
                            <div className='col-12 col-md-2 text-center'>
                                <div className=''>
                                    <img src={image2} width='200px' alt='image' />
                                </div>
                            </div>
                            <div className='col-12 d-none d-sm-block col-md-10'>
                                <div className='d-flex row justify-content-center p-4'>
                                    <div style={{ gap: '20px' }} className='d-flex justify-content-evenly'>
                                        <Link>HOME</Link>
                                        <Link>ABOUT US</Link>
                                        <Link>SERVICES</Link>
                                        <Link>OUR PRODUCTS</Link>
                                        <Link>CONTACT US</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='d-flex text-secondary p-2 justify-content-evenly' >
                    <div className='d-flex' >
                        <div className='d-flex justify-content-center flex-column me-2'>Socials &#124;</div>
                        <div className=' d-flex justify-content-center flex-column'>
                            <div className='text-white d-flex justify-content-end' style={{ gap: '20px' }}>
                                <AiFillFacebook className='fs-5' />
                                <AiFillInstagram className='fs-5' />
                                <ImTwitter className='fs-5'/>
                            </div>
                        </div>
                    </div>
                    <div> &copy;2023 | Perfect 5 </div>
                    <div>Terms of use | Privacy Policy</div>
                </div>
            </div>
        </>
    )
}

export default Footer