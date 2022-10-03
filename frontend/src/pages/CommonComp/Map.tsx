/* global kakao*/
import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { useAppSelector } from "../userStore/hooks"
import { selectResto } from "../userStore/restoSlice"
import PaperBackground from "./PaperBackground"
const kakao = (window as any).kakao

export default function Map() {
  const resto = useAppSelector(selectResto)

  useEffect(() => {
    // getPosition()
    let container = document.getElementById("map") //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(resto?.locationX, resto?.locationY), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    }

    let map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
  }, [resto])

  const titleArera = {
    fontFamily: "BMEULJIRO",
    fontSize: "36px",
    color: "rgb(2 49 119)",
    textAlign: "left",
    paddingLeft: "15px",
    fontWeight: "bold",
    marginBottom: "16px",
  }

  return (
    <>
      <Box sx={titleArera}>| 지도</Box>
      <PaperBackground>
        <Box sx={{ padding: "15px" }}>
          <div
            id="map"
            style={{ width: "100%", height: "60vw", margin: "auto" }}
          ></div>
        </Box>
      </PaperBackground>
    </>
  )
}
