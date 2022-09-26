import "./App.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Pages
<<<<<<< HEAD
import { mainPage, myPage, startPage, search } from "./pages/pageIndex";
import NeedConfirm from "./needConfirm/NeedConfirm";
import DetailPage from "./pages/DetailPage/RestoDetail";
// Components
import { bottomBar } from "./pages/pageIndex";
import Auth from "./pages/StartPage/Components/Auth";
=======
import StartPage from "./pages/StartPage/StartPage"
import MainPage from "./pages/MainPage/MainPage"
import AllComponents from "./pages/AllComponents"
import SearchPage from "./pages/SearchPage/SearchPage"
import MyPage from "./pages/MyPage/MyPage"
import BottomBar from "./components/BottomBar"
import Auth from "./UserComponents/Auth"
import Azti from "./UserComponents/Azti"

// // Provider
// import { Provider } from "react-redux";
// import { store } from "./userStore/index"
>>>>>>> 12cd0f118c6e7d8f95809a88681b20b7e4459469

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
<<<<<<< HEAD
    <>
      <Router>
        <Routes>
          <Route path="/" element={startPage()} />
          <Route path="/main" element={mainPage()} />
          <Route path="/search" element={search()} />
          <Route path="/my-page" element={myPage()} />
          <Route path="/restos/:restoId" element={<DetailPage />} />
          <Route path="/need-confirm" element={<NeedConfirm />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
        {bottomBar()}
      </Router>
    </>
  );
=======
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/dev" element={<AllComponents />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
        {/* <Provider store={store}>
          <Route path="/azti" element={<Azti />}/>
        </Provider> */}
        <Route path="/azti" element={<Azti />}/>

      </Routes>
      <BottomBar />
    </Router>
  )
>>>>>>> 12cd0f118c6e7d8f95809a88681b20b7e4459469
}

export default App;
