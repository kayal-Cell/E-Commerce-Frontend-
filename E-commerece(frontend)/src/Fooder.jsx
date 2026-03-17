import React from 'react'
import "./Fooder.css";  
function Fooder() {
  return (
    <div className='footer-items'>
        <footer>
            <table>
                <tr>
                    <th>About</th>
                    <th>Social</th>
                    <th>Help</th>
                </tr>
                <tr>
                    <td>Contact Us</td>
                    <td><img src="src/assets/images/fb.svg" alt="Facebook" srcset="" /> Facebook</td>
                    <td>Payments</td>
                </tr>
                <tr>
                  <td>About Us</td>
                  <td><img src="src/assets/images/ig.svg" alt="Instagram" srcset="" /> Instagram</td>
                  <td>Skipping</td>
                </tr>
               <tr>
                <td>Careers</td>
                <td><img src="src/assets/images/youtube.svg" alt="Youtube" srcset="" /> Youtube</td>
                <td></td>
               </tr>
            </table>
            <div className='copyright'>
                <p>© 1996-2026,xxx.com, Inc. or its affiliates</p>
            </div>
        </footer>
    </div>
  )
}

export default Fooder