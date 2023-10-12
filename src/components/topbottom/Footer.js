import image from '../../images/Perfect5-side.png'
import image2 from '../../images/choice.png'
import {BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoTwitter} from 'react-icons/bi'
const Footer = () => {
    return (
        <>
            <div>
                <div className='bg-dark text-white p-3'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-12 col-md-10'>
                            <div className=''>
                                <div className='d-flex flex-column flex-md-row text-center justify-content-around  py-3' >
                                    <div className='d-flex my-3 justify-content-center flex-md-column'>
                                        <img src={image} width='200px' />
                                    </div>
                                    <div className='d-flex my-3 justify-content-center flex-column'>
                                        <div className='text-center'>
                                            <div>Stay intouch</div>
                                            <hr/>
                                            <div style={{gap:'10px'}} className='fs-3 d-flex justify-content-evenly'>
                                                <BiLogoFacebookSquare/>
                                                <BiLogoInstagramAlt/>
                                                <BiLogoTwitter/>
                                                <BiLogoLinkedinSquare/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' d-flex my-3 justify-content-end flex-column py-3'>
                                        <div style={{ fontSize: '11px' }}>
                                            created by <br />
                                            <a href="http://choicecreations.co.zm/"><img src={image2} width='150px' /></a>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '11px' }} className='text-center d-flex  flex-column justify-content-center'>
                                    <div>Copyright &copy;2023 | Perfect 5 Cleaning Solutions</div>
                                    <div>Terms of use | Privacy Policy</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer