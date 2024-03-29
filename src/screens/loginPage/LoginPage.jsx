import React, { useEffect, useState } from "react";
import axios from "axios";
import './LoginPageStyle.css'
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('swipe_user_basket')){
      console.log('корзина уже есть')
    }else{
      localStorage.setItem('swipe_user_basket','[]')
    }
  },[])

  const setLocalData = (name,email,image) => {
    localStorage.setItem('swipe_user_name',name)
    localStorage.setItem('swipe_user_email',email)
    localStorage.setItem('swipe_user_image',image)
    // localStorage.setItem('swipe_user_id',id)

  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://10.1.1.100:5000/api/user/registration",
        {
          username,
          email,
          password,
        }
      );
      const token = res.data.token;
      localStorage.setItem("swipe_user_jwt", `Bearer ${token}`);
      setLocalData(username,email,res.data.user.img);
      console.log(res);
      navigate('/home')

    } catch (error) {
      if (error.response.status === 404) {
        console.log(error.response.data.message);
      } else {
        console.log("Не предвиденная ошибка");
      }
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
        let token = localStorage.getItem('swipe_user_jwt');
        console.log(token)
        const res = await axios.post('http://10.1.1.100:5000/api/user/login',
        {email,password},{
            headers: {
                authorization: token,
            }
        })
        token = res.data.token;
        localStorage.setItem("swipe_user_jwt", `Bearer ${token}`);
        console.log(res.data)
        setLocalData(res.data.user.username,email,res.data.user.img);
        console.log(res)
      navigate('/home')

    } catch (error) {
        if(error.response.status === 401){
            console.log(error.response.data.message)
        } else {
            console.log("Не предвиденная ошибка");
        }
    }
  }

  const handleClick = () => {
    setIsLogin(!isLogin)
  }
  return (
      (isLogin)?(
        <>
        <div className="login_wrapper">
      <img height='100px' src="/svgs/logo.svg" alt="" />
      <form>
        <p>Вход</p>
        <p>E-mail</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogIn}>Войти</button>
      </form>
    <p onClick={handleClick} >Нет аккаунта? Создайте</p>

    </div>
    </>
    ) : (

        <>
        <div className="login_wrapper">
    <img height='100px' src="/svgs/logo.svg" alt="" />
      
      <form>

        <p>Регистрация </p>
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>E-mail</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegistration}>Войти</button>
      </form>
    <p onClick={handleClick} >У вас есть аккаунт? Войдите.</p>

    </div>
    </>
    )
    




  );
};

export default LoginPage;
