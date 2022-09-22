// MUI
import Button from "@mui/material/Button"

import React from "react"
import { useState } from "react"

// 결과 만 백엔드로 보내줄 것

function AztiQuestion() {
    const [ question_parameter , setParameter ] = useState<number>(1)
    const [ azti_list , setAzti_list] = useState([])

    const buttonClick = () => setParameter((event) => event += 1)
 
    if ( question_parameter === 1) {
        return(
            <div>
                <h1> 퀘-스챤 1</h1>
                <Button onClick={buttonClick}>제출하기</Button>
            </div>
        )
    } else if ( question_parameter === 2) {
        return (
            <div>
                <h1> 퀘-스챤 2</h1>
                <Button onClick={buttonClick}>제출하기</Button>
            </div>
        )
    } else if ( question_parameter == 3) {
        return (
            <div>
                <h1> 퀘-스챤 3</h1>
                <Button onClick={buttonClick}>제출하기</Button>
            </div>
        )
    } else if ( question_parameter == 4) {
        return (
            <div>
                <h1> 퀘-스챤 4</h1>
                <Button onClick={buttonClick}>제출하기</Button>
            </div>
        )
    } else if ( question_parameter == 5) {
        return (
            <div>
                <h1>결과</h1>
            </div>
        )
    }

}
export default AztiQuestion