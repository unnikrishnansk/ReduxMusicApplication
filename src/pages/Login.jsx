import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/Authreducer/action';
import { USER_LOGIN_SUCCESS } from '../Redux/Authreducer/actionTypes';

const Login = () => {

  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    if(username && password)
    {
        dispatch(login({username,password}))
        .then((r)=> {
          if(r.type === USER_LOGIN_SUCCESS){
            navigate("/");
          }
        })
    }
  }

  return (
    <div>

      <h2>LOGIN</h2>

      <form onSubmit={handlesubmit}>

        <div>
          <label>Username</label>
          <input type="email" placeholder='enter email' value={username} onChange={(e) => setusername(e.target.value)} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder='enter password' value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>

        <button type='submit'>LOGIN</button>

      </form>
    </div>
  )
}

export default Login;