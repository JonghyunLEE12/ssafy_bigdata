import React from "react"
import RestoInfo from "../../CommonComp/RestoInfo"
import { Box } from "@mui/material"

const resto = {
  id: 0,
  restoName: "만선옥",
  address: "연신내",
  menu1: "노가리",
  menu2: "팥빙수",
  imageUrl: "https://t1.daumcdn.net/cfile/tistory/99843E4F5B2F94582F",
}

export default function BestResto() {
  return (
    <Box sx={{ px: "18px", marginBottom: "40px" }}>
      <p className="title-text-lg" style={{ textAlign: "left" }}>
        남바-원!
      </p>
      <RestoInfo resto={resto} />
    </Box>
  )
}
