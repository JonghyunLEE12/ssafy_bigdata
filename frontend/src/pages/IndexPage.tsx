import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import Components and Pages
import MainPage from "./MainPage/MainPage"
import MyPage from "./MyPage/MyPage"
import Bottombar from "./CommonComp/BottomBar"
import RestoDetail from "./DetailPage/RestoDetail"
import ReviewForm from "../Form/ReviewForm"
import NeedConfirm from "../needConfirm/NeedConfirm"
import MyInfoUpdate from "./MyPage/MyInfoUpdate"

export default function IndexPage() {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setBrowserWidth(window.innerWidth)
  })

  return (
    <>
      <Routes>
        <Route path="main" element={<MainPage />} />
        <Route path="my-page" element={<MyPage />} />
        <Route path="my-page/update" element={<MyInfoUpdate />} />
        <Route path="restos/:restoId" element={<RestoDetail />} />
        <Route path="restos/:restoId/review" element={<ReviewForm />} />
        {/* 실험실 */}
        <Route path="need-confirm" element={<NeedConfirm />} />
      </Routes>
      <Bottombar />
    </>
  )
}
