
import './App.css';
import Logo from '../src/Asset/Logo.svg'
import Zag from '../src/Asset/Section2design.svg'
import House from '../src/Asset/house2.svg'
import Call from '../src/Asset/callcalling.svg'
import Drawing from '../src/Asset/drawing.svg'
import Star from '../src/Asset/Star.svg'
import Shape from '../src/Asset/Shape.svg'
import Mail from '../src/Asset/Mail.svg'
import UserIcon from '../src/Asset/UserIcon.svg'







function App() {
  return (
    <div className="App">
      <div className='section1Container'>

        {/* NAVIGATION BAR */}
      <div className='navbar'>
      <div className='brandLogo'>
    <img src={Logo} alt='Brand Logo'/>
      </div>
      <div >
        <button className='priorityBtn'>Get Priority Access</button>
      </div>
      </div>

{/* SECTION1 */}
      <div className='section1'>
        <div className='ball'></div>
        <div className='ball2'></div>
      <img src={Star} className='star1'/>
      <img src={Star} className='star2'/>
      <img src={Star} className='star3'/>
      <img src={Star} className='star4'/>
      
        
        {/* <div className='ball3'></div> */}

        <p className='section1para1'>Turn your best customers into Loyal fans</p>
        <p className='section1para2'>
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.
        </p>
      </div>

      {/* Form */}
    <div className='section1b'>
      <img src={Drawing} className='drawing'/>
      <form>
      <div className='tyy'>
          <img src={UserIcon}/>
          <input type='email' 
        placeholder='Tell us your name'
        className='inputss'
        />

        </div>
        <div className='tyy2'>
          <img src={Mail}/>
          <input type='email' 
        placeholder='Enter Your Email Address'
        className='inputss'
        />

        </div>

        <div className='section1Btn'>
          <button type='submit' className='sec2Btn'>Get early Access</button>
        </div>

      <div className='flexAll'>
        <div className='flexNameBox'>
        <p className='no1'>G</p>
        <p className='no2'>O</p>
        <p className='no3'>U</p>
        <p className='no4'>M</p>
        </div>
        <div className='flexAllContent'>
          +57 joined
        </div>
      </div>
      </form>
    </div>

    </div>

    {/* SECTION 2 */}
      <div className='section2'>
        <div className='section2Sub1'>

          {/* MAKING OF ROUNDED BALLS */}
          <div className='ball4'></div>
          {/* STARS */}
          <img src={Star} className='star5'/>
      <img src={Star} className='star6'/>
      <img src={Star} className='star7'/>

      {/* POLYGON SHAPE */}
      <img src={Shape} className='shape'/>
      <img src={Shape} className='shape2'/>


      {/* FIRST DIV CONTENTS */}
          <h1 className='section2Head'>Priority Access</h1>
          <div className='sec2des'>
          <img src={Zag} alt='design1'/>
          </div>
          <p className='section2Sub1Content'>
          Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!
          </p>
        </div>

          {/* SECOND DIV IN SECTION2 */}
        <div className='secondForm'>
          <h3 className='secondFormHead'>Book a Consultation with us</h3>
        {/* FORM */}
          <form>
            <div className=''>
              <input type='text' placeholder='Enter your full name' className='secondFormInput'/>
            </div>
            <div className='inputContainer'>
              <input type='email' placeholder='Enter your work email' className='secondFormInput'/>
            </div>
            <div className='inputContainer'>
              <input type='text' placeholder='Mobile number' className='secondFormInput'/>
            </div>
            <div className='inputContainer'>
              <input type='text' placeholder='Company Name' className='secondFormInput'/>
            </div>
            <div className='inputContainerDiff'>
              <select className='SelectCont' id='country' name='country'>
                <option className='SelectCont' value='select'>Select your Country</option>
                <option className='SelectCont' value='nigeria'>Nigeria</option>
                <option className='SelectCont' value='usa'>United State of Africa</option>
              </select>
            </div>
            <div className='inputContainer'>
              <textarea className='textArea' placeholder='Drop a message.....'></textarea>
            </div>
            <button className='secondFormBtn' type='submit'>Send Request</button>
          </form>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className='footerContainer'>
        <hr/>
        <div className='footer'>

        <div className='footerDiv'>
          <img src={House}/>
          <p className='firstP'>2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
        </div>
        <div>
          <p className='secondP'>Loyalbaze is almost here.</p>
        </div>
        <div className='footerDiv'>
        <img src={Call} className='call'/>
          <p className='thirdP'>+234 903 618 9485</p>
        </div>
        </div>
      </div>
    </div>

  );
}

export default App;
