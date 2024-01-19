import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../components/context/auth-context';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";




function Account() {

const {user, logout} = useContext(UserContext)
const navigate = useNavigate()

const Handlelogout = async () => {
try{
await logout()
navigate('/login')
}catch(e){
console.log(e.message)
}


}

  return (
    <div>
   <h1 className="h3 mb-3 fw-normal"> account</h1>
   <p className='mb-3'> user email: {user && user.email} </p>
   <button className='mb-3' onClick={Handlelogout} > logout</button>

    </div>
  )
}

export default Account