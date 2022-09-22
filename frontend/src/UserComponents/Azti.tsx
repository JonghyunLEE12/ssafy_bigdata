// Image
import azti_img from "../assets/azti_img.png"

// MUI
import  Grid  from "@mui/material/Grid"


// Components
import AztiQuestion from "./AztiQuestion"

import react from 'react'

function Azti () {

    return(
        <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={azti_img} alt="logo" width="100%"/>
        <AztiQuestion/>

        </Grid>
    )

}
export default Azti