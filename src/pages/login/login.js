import React, {useState,useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../components/context/auth-context';
import './login.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Alert } from 'react-bootstrap';


function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  const navigate = useNavigate()
  const {signIn} = useContext(UserContext)

const emailInputHandler = (event) => {
setEmail(event.target.value)
}

const passwordInputHandler = (event) => {
  setPassword(event.target.value)
  }

const onSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    setIsError('')
    setLoading(true)
    await signIn(email, password)
   navigate('/account' )
  }catch{
  setIsError('failed to sign in')

  }

  setEmail('')
  setPassword('')  

    

    

    

}



return (  
<div>
<main class="form-signin w-100 m-auto">
  <form onSubmit={onSubmitHandler}>
     
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    {isError && <Alert variant="danger">{isError}</Alert>}

    <div class="form-floating">
      <input style={{borderBlockColor:isError && 'red' }} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={emailInputHandler} value={email} />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input style={{borderBlockColor:isError && 'red' }} type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={passwordInputHandler} value={password}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button disabled={loading} class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form> 
  <text>dont have an account? <Link to="/sign-up">sign up</Link></text>
  </main>

</div>

  )
}

export default Login