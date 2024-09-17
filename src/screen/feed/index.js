/*import React from "react";

export default function Aboutus() {
  return <div className="screen-container">aboutus</div>;
}

import React from 'react';

function Feed() {
  return (
    <>
      <table width="100%" style={{ backgroundColor: 'rosybrown', color: '#fff', textAlign: 'center', padding: '20px 0' }}>
        <tbody>
          <tr>
            <td>
              <h1 style={{ fontFamily: 'Arial Black', fontSize: '36px' }}>About Us</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%">
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#fff', padding: '20px' }}>
              <h2 style={{ color: 'rosybrown', fontFamily: 'Arial Black' }}>Mission</h2>
              <p style={{ color: '#333', fontFamily: 'Arial Black' }}>Our mission is to provide high-quality skincare products that enhance natural beauty and promote healthy skin.</p>
            </td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
              <h2 style={{ color: 'rosybrown', fontFamily: 'Arial Black' }}>Vision</h2>
              <p style={{ color: '#333', fontFamily: 'Arial Black' }}>Our vision is to become a trusted global leader in the skincare industry, known for our commitment to excellence and innovation.</p>
            </td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#fff', padding: '20px' }}>
              <h2 style={{ color: 'rosybrown', fontFamily: 'Arial Black' }}>History</h2>
              <p style={{ color: '#333', fontFamily: 'Arial Black' }}>Founded in 2019, our company began with a passion for skincare and a desire to create products that make a difference. Over the years, we've grown into a renowned brand, beloved by customers worldwide.</p>
            </td>
          </tr>
          <tr>
            <td style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
              <h2 style={{ color: 'rosybrown', fontFamily: 'Arial Black' }}>Our Team</h2>
              <table width="100%" cellSpacing="20" cellPadding="0">
                <tbody>
                  <tr>
                    <td align="center">
                      <p style={{ color: '#333', fontFamily: 'Verdana, sans-serif' }}>Ipshita Jain</p>
                      <p style={{ color: '#333', fontFamily: 'Verdana, sans-serif' }}>Product Developer</p>
                    </td>
                    {/* Add other team members similarly }
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%" style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0' }}>
        <tbody>
          <tr>
            <td>
              <p>&copy; 2024 Forever Beautiful pvt.ltd. All rights reserved.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Feed;
*/

import React from 'react';
import './feed.css';

function AboutUs() {
  return (
    <div className="container">
      <div className="section">
        <h2>About Us</h2>
        <p>Welcome to MOODI, where music meets mood in perfect harmony.</p>
      </div>
      <div className="section">
        <h2>Mission</h2>
        <p>Our mission is to innovate and personalize music discovery, amplifying the joy of harmonious connections.</p>
      </div>
      <div className="section">
        <h2>Vision</h2>
        <p>At MOODI, we believe that music has the power to shape our emotions, uplift our spirits, and paint the soundtrack to our lives. Our mission is simple: to make discovering music that resonates with your current state of mind effortless and enjoyable. </p>
      </div>
      <div className="section">
        <h2>Our Team</h2>
        <p>Ishita Sinha</p>
        <p>Kashish Chauhan</p>
        <p>Sapna Singh</p>
        <p>Raksha Kumari</p>
      </div>
    </div>
  );
}

export default AboutUs;