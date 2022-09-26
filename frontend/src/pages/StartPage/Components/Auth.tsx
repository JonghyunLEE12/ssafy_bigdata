import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth() {
  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "vCiFAO1F3QiMUYfXmR1pddgTcLYFkMFN";

<<<<<<< HEAD:frontend/src/pages/StartPage/Components/Auth.tsx
  const navigate = useNavigate();
=======
  const url = "http://localhost:8080/api/oauth/login/kakao/"
>>>>>>> 12cd0f118c6e7d8f95809a88681b20b7e4459469:frontend/src/UserComponents/Auth.tsx
  const code = new URL(window.location.href).searchParams.get("code");
  // axios 로 백엔드 전송 및 받아와햐 하는데
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          `http://localhost:8080/api/oauth/login/kakao?code=${code}`
        );
        console.log(res.data);
        navigate("/main");
      } catch (e) {
        navigate("/");
      }
    })();
  }, []);

  // 인가코드

<<<<<<< HEAD:frontend/src/pages/StartPage/Components/Auth.tsx
=======
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8080/api/oauth/login/kakao/"+code);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);


  const url2 = "https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=2"

  axios.get(url+code)
  .then((res) => {
    console.log(res)
  })
  .catch((e)=> {
    console.log(e)
  })

  
>>>>>>> 12cd0f118c6e7d8f95809a88681b20b7e4459469:frontend/src/UserComponents/Auth.tsx
  return null;
}
export default Auth;
