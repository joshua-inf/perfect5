import { Link } from 'react-router-dom'
import facebook from '../../icons/facebook1.svg'
import image from '../../images/p5logo.png'
import {AiFillFacebook, AiFillInstagram,AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="bg-black" style={{minHeight:'200px'}}>
                    <div className="text-white p-3">
                        <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-10 col-12'>
                            <div className="row">
                            <div className="col-12 col-md-5">
                                <div style={{textAlign:'center'}}>
                                    <div>
                                        <div>
                                            <img src={image} width='150px' alt='image' />
                                        </div>
                                        <div className='text-white d-flex justify-content-end' style={{gap:'20px'}}>
                                        <AiFillFacebook className='fs-3' />
                                        <AiFillInstagram className='fs-3' />
                                        <ImTwitter className='fs-3'/>
                                        </div>
                                    </div>
                                    <hr className='color-light'/>
                                    <div className='d-flex justify-content-evenly p-4'>
                                        <div style={{gap:'20px'}} className='d-flex flex-column'>
                                            <Link>HOME</Link>
                                            <Link>ABOUT US</Link>
                                            <Link>SERVICES</Link>
                                        </div>
                                        <div style={{gap:'20px'}} className='d-flex flex-column'>
                                            <Link>OUR PRODUCTS</Link>
                                            <Link>CONTACT US</Link>
                                            <button className='btn btn-outline-light rounded-0 px-5'>inquiry </button>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className='d-flex mb-3 justify-content-evenly'>
                                        <div>
                                            <AiOutlineMail className='fs-3' />
                                             {' '}email.email.com
                                        </div>
                                        <div className='d-flex'>
                                            <div className='d-flex flex-column px-4 justify-content-center'>
                                                <BsFillTelephoneFill className='fs-3'/>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span>+260 999 999 999</span>
                                                <span>+260 999 999 999</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'flex', justifyContent:'center'}} className="col-md-7 col-12">
                            <div style={{maxWidth:'800px'}} className='border border-white'>
                                <div className='p-4'>
                                    <h3>Inquiry</h3>
                                    <div className='py-2'>
                                        <div className='d-flex' style={{gap:'5px'}}>
                                            <input placeholder='firstname' style={{height:'50px', outline:'none'}} type='text' className='p-3 bg-dark text-white w-100'/>
                                            <input placeholder='lastname' style={{height:'50px', outline:'none'}} className='p-3 mb-3 bg-dark text-white w-100'/>
                                        </div>
                                        <div>
                                            <input placeholder='emai address' style={{height:'50px', outline:'none'}} className='p-3 mb-3 bg-dark text-white w-100'/><br/>
                                            <input placeholder='phone number' style={{height:'50px', outline:'none'}} className='p-3 mb-3 bg-dark text-white w-100'/><br/>
                                            <input placeholder='let us know how we can help' style={{height:'80px', outline:'none'}} className='p-3 bg-dark text-white w-100'/>
                                        </div>
                                    </div>
                                    <button className='btn px-5  py-3 rounded-0 btn-outline-light'>
                                        Submit
                                    </button>
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
        </>
    )
}

export default Footer