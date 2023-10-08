import { useState } from "react";

function LoginForm() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // console.log("userName:" + userName);
  // console.log("password:" + password);


  function clickHandler() {
    const body = {
      userName: userName,
      password: password
    }
    console.log(body);
  }

  return (
    <>
      <div>
        <div>
          <span>Kullanıcı Adı : </span>
          <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <br />
        <div>
          <span>Parola : </span>
          <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <br />
        <button onClick={clickHandler}>Giriş Yap</button>
      </div>
    </>
  );
}

export default LoginForm;

/*
2 tane input 1 tane buton yapacagız
kayıt alacak
ne lazım bize input a bişey yazıldıgında elimizde tutmaya ihtiyacımız var
ilk olarak
onChange içindekileri de funchion olarak yazıp sadece funchion isminide verebilirdik funchion olusturmadan yazmak istedim
input yazdıgında input içinde olusan value den tarayıcıda yazdıgın degere ulasabiliyorsun
2 tane state olusturduk kullanıcıadı ve şifre için onchange demek tarayıcıda degıstır demek oluyor
baska bir funchion olusturup onuda giriş yap için yazdık 
tıklandıgında obje içine kayıt etsin diye
*/