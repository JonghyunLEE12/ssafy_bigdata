import React from "react"
import RestoInfo from "../../CommonComp/RestoInfo"
import { Box } from "@mui/material"
import Carousel from "better-react-carousel"

const resto = {
  id: 0,
  restoName: "만선옥",
  address: "연신내",
  menu1: "노가리",
  menu2: "팥빙수",
  imageUrl: "https://t1.daumcdn.net/cfile/tistory/99843E4F5B2F94582F",
}

export default function OtherRestos() {
  return (
    <Box sx={{ px: "18px", marginBottom: "40px" }}>
      <p className="title-text-lg" style={{ textAlign: "left" }}>
        여기도 참으로 맛있는데!
      </p>
      <Carousel cols={2} rows={1} gap={2} loop>
        <Carousel.Item>
          <RestoInfo resto={resto} />
        </Carousel.Item>
        <Carousel.Item>
          <RestoInfo resto={resto} />
        </Carousel.Item>
        <Carousel.Item>
          <RestoInfo resto={resto} />
        </Carousel.Item>
        <Carousel.Item>
          <RestoInfo resto={resto} />
        </Carousel.Item>
        <Carousel.Item>
          <RestoInfo resto={resto} />
        </Carousel.Item>
      </Carousel>
    </Box>
  )
}
