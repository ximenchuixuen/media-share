import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLogin from '@react-login-page/page2';
import { Email, Password, Submit, Title, Logo, Reset, Input } from '@react-login-page/page2';
import defaultBannerImage from '@react-login-page/page2/banner-image';
import { UserContext } from './UserContext';

export default function Login(props) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  function handleChangeUser(e) {
    const { value } = e.target;
    setUsername(value);
  }

  function handleChangePass(e) {
    const { value } = e.target;
    setPassword(value);
  }

  function handleLogin() {
    //send fetch req to /login
    //check if status equal to 200, then redirect to the homepage
    //otherwise, catch error alert invalid username or password

    // let navigate = useNavigate();
    // const routeChange = () =>{
    //   let path = `newPath`;
    //   navigate(path);
    // }

    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => 
        {
          if (!res.ok) {
            throw new Error('Invalid username or password')
          }
          return res.json();
        }
      // {
      //   if (!res.ok== 200) {
      //     console.log(res.body);
      //     setLoggedIn(true);
      //     navigate('/home');
      //     res.json;
      //   } else {
      //     // navigate('/home');
      //     // res.json;
      //     alert('Wrong Username/Password');
      //     throw new Error('Wrong Username/Password');
      //   }
      // }
      )
      .then((data) => {
        const userDt = { id: data[0]._id, username: data[0].username };
        setUserData({ id: data[0]._id, username: data[0].username });
        // 将username和id存储在sessionStorage中
        sessionStorage.setItem('username', data[0].username);
        sessionStorage.setItem('userid', data[0]._id);

        navigate('/home');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <PageLogin style={{ height: 580 }}>
        <PageLogin.Banner>
          <img src={defaultBannerImage} />
        </PageLogin.Banner>
        <Email name="userUserName"  visible={false}/>
        <Input name="username" onChange={handleChangeUser} value={username} index={0} placeholder="user ID">
        <div>ID</div>
        </Input>
        <PageLogin.Password name="password" index={1} value={password} onChange={handleChangePass} placeholder="user password">
          <div>pd</div>
        </PageLogin.Password>
        <Submit onClick={handleLogin}>提交</Submit>
      </PageLogin>
    </div>
  );
}
