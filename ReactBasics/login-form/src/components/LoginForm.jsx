import { useState } from 'react'
import './LoginForm.css';

export function LoginForm () {
    const [showPassword, setPasswordVisibility] = useState(false);

    function passwordVisibility() {
        if (showPassword) {
            setPasswordVisibility(false);
        } else {
            setPasswordVisibility(true);
        }
    }

    return (
          <>
            <p className="greeting">Hello, welcome to my website</p>
            <div>
                <input placeholder="Email"
                    className="input-field"
                />
            </div> 
            <div>
                <input placeholder="Password" 
                    type={showPassword ? 'text' : 'password'}
                    className="input-field"       
                />
                <button 
                    className="password-button"
                    onClick={passwordVisibility}
                >Show</button>
            </div>
            
            <div className="buttons">
                <button className="button-style">Login</button> 
                <button className="button-style">Sign up</button>
            </div>
        </>  
    )

}  