// MUI
import Button from "@mui/material/Button"

// CSS
import AztiQuestionCss from "./AztiQuestionCss.css"

import React from "react"
import { useState } from "react"

// 결과 만 백엔드로 보내줄 것

function AztiQuestion() {
    type azti = {
        mood : string,
        personal : string,
        is_korean : string,
        money : string,
    }
    const user_azti : azti = {
        mood : '',
        personal : '',
        is_korean : '',
        money : ''
    }
    const [ question_parameter , setParameter ] = useState<number>(1)
    const [ azti_list , setAzti_list] = useState([])

    const buttonClick = () => setParameter((event) => event += 1)
    const buttonGoback = ( ) => setParameter((event) => event -= 1)
 
    if ( question_parameter === 1) {
        return(
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 1</h1>
                <h3 className="text-orange-2"> 질문 </h3>
                <Button onClick={buttonClick}>제출하기</Button>
            </div>
        )
    } else if ( question_parameter === 2) {
        return (
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 2</h1>
                <h3 className="text-orange-2"> 질문 </h3>
                <Button onClick={buttonClick}>제출하기</Button>
                <Button onClick={buttonGoback}>뒤로가기</Button>
            </div>
        )
    } else if ( question_parameter == 3) {
        return (
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 3</h1>
                <h3 className="text-orange-2"> 질문 </h3>
                <Button onClick={buttonClick}>제출하기</Button>
                <Button onClick={buttonGoback}>뒤로가기</Button>

            </div>
        )
    } else if ( question_parameter == 4) {
        return (
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 4</h1>
                <h3 className="text-orange-2"> 질문 </h3>
                <Button onClick={buttonClick}>제출하기</Button>
                <Button onClick={buttonGoback}>뒤로가기</Button>

            </div>
        )
    } else if ( question_parameter == 5) {
        return (
            <div>
                <h1>결과</h1>
                <h3> 1: {user_azti.mood}</h3>
            </div>
        )
    }

}
export default AztiQuestion