import "./App.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import { mainPage, myPage, startPage,search } from "./pages/pageIndex";
import NeedConfirm from "./needConfirm/NeedConfirm";
import DetailPage from "./pages/DetailPage/RestoDetail";
// Components
import { bottomBar } from "./pages/pageIndex";
import Auth from "./pages/UserComponents/Auth";
import Azti from "./pages/UserComponents/Azti"
import isLogin from "./pages/UserComponents/isLogin"
import PrivateRoute from "./PrivateRoute"

// Mui
import { createTheme , ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";


function App() {
  // muiTheme
  const theme = createTheme({
    palette:{
      secondary : {
        main: "rgb(77, 152, 182)",
        light : "#ff9100"
      }
    },
    typography: {
        fontFamily: "BMEULJIRO"
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* 인증 여부 상관 없이 접속 가능한 페이지 정의 */}
          <Route index element={startPage()}/>
          <Route path="/oauth/kakao/callback" element={<Auth />} />

          {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
          <Route element={<PrivateRoute authentication={true}/>}>
          <Route path="/" element={startPage()} />
            <Route path="/main" element={mainPage()} />
            <Route path="/search" element={search()} />
            <Route path="/my-page" element={myPage()} />
            <Route path="/restos/:restoId" element={<DetailPage />} />
            <Route path="/need-confirm" element={<NeedConfirm />} />
            <Route path="/azti" element={<Azti/>} />
            <Route path="*" element={startPage()} />
          </Route>
        </Routes>
        {bottomBar()}
      </Router>
    </ThemeProvider>
  )
}

export default App;
