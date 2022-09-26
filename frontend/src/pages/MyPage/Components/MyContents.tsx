import React, { useState, Dispatch, SetStateAction } from "react"
import { Grid, Box, Button } from "@mui/material"

const btnList = ["좋아요", "내 리-뷰", "가본 곳"]

interface propTypes {
  contentNum: Number
  setContentNum: Dispatch<SetStateAction<number>>
}

export default function MyContents({ contentNum, setContentNum }: propTypes) {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Grid container display="flex" spacing={2}>
        {btnList.map((btn, index) => {
          return (
            <Grid item key={index} xs={4}>
              <Button
                fullWidth
                color="warning"
                variant={contentNum === index ? "contained" : "outlined"}
                onClick={() => setContentNum(index)}
              >
                <span style={{ fontFamily: "BMEULJIRO", fontSize: "20px" }}>
                  {btn}
                </span>
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
