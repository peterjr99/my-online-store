import React, {useState, useContext} from 'react'
import { Alert } from 'react-bootstrap'
import './sign-up.css'
import UserContext from '../../components/context/auth-context'
import {Link, useNavigate} from 'react-router-dom'


function Signup() {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  const navigate = useNavigate()
  const {createUser} = useContext(UserContext);
  
  

 const fullNameInputHandler = (event) => {
  setFullName(event.target.value)
  
 } 

const emailInputHandler = (event) => {
setEmail(event.target.value)
}

const passwordInputHandler = (event) => {
  setPassword(event.target.value)
  }

const onSubmitHandler = async (event) => {
  event.preventDefault();

  if(!password.trim().length < 6 ){
    try{
      setIsError('');
      setLoading(true)
     await createUser(email, password)
       
       navigate('/')

    }catch(e){
      setIsError('failed to create an account')
      
    }
    setLoading(false)
  }





      

    

    

    

setFullName('')   
setEmail('')
setPassword('')

}



    

  return (
    <div>


<main class="form-signin w-100 m-auto">
  <form onSubmit={onSubmitHandler} name='registration form'>
    
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
    {isError && <Alert variant="danger">{isError}</Alert>}
    
    <div class="form-floating">
      <input style={{borderBlockColor:isError && 'red' }} required type="text" class="form-control" id="floatingInput" placeholder="name" onChange={fullNameInputHandler} value={fullName} />
      <label for="floatingInput">Full Name</label>
    </div>
    <div class="form-floating">
      <input style={{borderBlockColor:isError && 'red' }} required type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={emailInputHandler} value={email} />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input style={{borderBlockColor:isError && 'red' }} required type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={passwordInputHandler} value={password}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button disabled={loading} class="btn btn-primary w-100 py-2" type="submit">Sign up</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form> 
  <p>Already have an account? <Link to="/login"> log in </Link> </p>
  </main>

</div>
  )
}

export default Signup