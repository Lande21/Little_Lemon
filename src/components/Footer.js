import React from 'react';
import logo from '../icons_assets/Logo.svg';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional rescipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Suncity, CA, US 28743</li>
                        <li>Phone: <br/> +1 432 364 8599</li>
                        <li>E-mail: <br/> little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><SocialIcon network="facebook"></SocialIcon></li>
                        <li><SocialIcon network="instagram"></SocialIcon></li>
                        <li><SocialIcon network="twitter"></SocialIcon></li>
                    </ul>
                </div>
            </section>
        </footer>

    );
    
};
export default Footer;
