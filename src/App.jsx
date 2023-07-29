import { useState } from 'react';
import './App.css';
import wobetLogo from './images/wobot-logo.png'

function App() {


  return (
    <div className='home'>
      <div className="bacgroudDiv">
      {/* <div className='bg1 background'></div> */}
      <div className='bg2 background'>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      {/* <div className='bg3 background'></div> */}
      </div>
      <div className="box">
        <div className="logo">
          <img src={wobetLogo} alt="logo" />
        </div>
        <div className="insideBox">
          <div className="insidelogo">
            <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="11.0477" height="27.8427" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)" fill="#3766E8"></rect><rect width="11.0477" height="42.3694" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)" fill="#3766E8"></rect><rect width="11.0477" height="21.5479" rx="5.52383" transform="matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)" fill="#3766E8"></rect></svg>
          </div>
          <h1>It is delight to have you onboard</h1>
          <p className='p1'>Help us know you better.</p>
          <p className='p2'>(This is how we optimize Wobot as per your business needs)</p>
          <div className='form'>
            <div className='inputFields'>
              <label>Your Name</label>
              <input type="text" placeholder='e.g. John Smith' />
            </div>
            <div className='inputFields'>
              <label>Company Name</label>
              <input type="text" placeholder='e.g. Alpha Inc.' />
            </div>
            <div className='inputFields'>
              <label>Industary</label>
              <select>
                <option value="">Select</option>
              </select>
            </div>
            <div className='inputFields'>
              <label>Number of Locations</label>
              <div className='noLocation'>
                <div className="num">1-20</div>
                <div className="num">21-50</div>
                <div className="num numblue">51-200</div>
                <div className="num">201-500</div>
                <div className="num">500+</div>
              </div>
            </div>
            <button className='getStarted'>Get Started</button>
          </div>

        </div>
          <div className='underText'>
            <p>Terms of use</p>
            <span className='line'>|</span>
            <p className='privacy'>Privacy</p>
          </div>
      </div>
    </div>
  );
}

export default App;
