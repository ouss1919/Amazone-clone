import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { auth } from './firebase';
import './Login.css'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('/')
            }).catch(error => alert(error.message))
    }

    const createAccount = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" className="amazonLogo"/>
            <div className="login_form">
                <form>
                    <h2>Sign in</h2>
                    <strong>E-mail</strong>
                    <input type="email" id="email" name="email" value = {email} onChange= {e => setEmail( e.target.value)}/>
                    <strong>Password</strong>
                    <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type= "submit" className="signIn" onClick={signIn}>SignIn</button>
                </form>
                <p>By placing your order, you agree to Amazon’s terms and conditions. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className="createAcount" onClick={createAccount}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
