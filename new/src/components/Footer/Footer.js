import React from 'react';
import Image from '../Video/user/user2.png'

const Title = "Welcome to ";
const user = Image;

function Footer() {
    return (
     
        <div className="footer">
            <div className="user_footer">
                <h1>{Title}</h1>
                <img src={user}
                    alt="user"
                />
            </div>
            <input
                placeholder="Enter a Email"
                type="email"
                required
            />
                <button>Subscribe</button>
            <p className="owner">Create by Harman Deep</p>
            
        </div>
    )
}

export default Footer;
