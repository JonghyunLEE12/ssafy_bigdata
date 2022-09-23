// MUI
import Button from "@mui/material/Button"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';


// CSS
import  "./AztiQuestionCss.css"

import React from "react"
import { useState , useEffect } from "react"

// 결과 만 백엔드로 보내줄 것

function AztiQuestion() {
    type azti = {
        personal : string,
        mood : string,
        place : string,
        is_korean : string
    }
    // 리덕스로 중앙에 저장 해야 할 듯
    const user_azti : azti = {
        personal : '',
        mood : '',
        place : '',
        is_korean : ''
    }


    const [ question_parameter , setParameter ] = useState<number>(1)
    const [value, setValue] = React.useState('');
    const [helperText, setHelperText] = React.useState('Choose wisely');

    // radio button control
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setHelperText(' ');
    };

    // sumit event control
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if ( question_parameter === 1 ){
            user_azti.personal = value
            setParameter((event)=>event += 1)
            console.log(user_azti)
        } else if ( question_parameter === 2){
            user_azti.mood = value
            setParameter((event)=>event += 1)
            console.log(user_azti)
        }

    }

    // question_parameter 변경
    const buttonClick = () => setParameter((event) => event += 1)
    const buttonGoback = ( ) => setParameter((event) => event -= 1)
 
    if ( question_parameter === 1) {
        return(
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 1</h1>

                {/* azti question form */}
                <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel id="demo-error-radios">
                    <h1 className="text-orange-2"> 나는 닭갈비를 먹으러 춘천에 갈 수 있다. </h1>
                    </FormLabel>
                    <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                    >
                    <FormControlLabel value="emotion" control={<Radio />} label={<h3 className="text-blue-1">예-스</h3>} />
                    <FormControlLabel value="real" control={<Radio />} label={<h3 className="text-blue-1">노-우</h3>} />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit">
                    제출하기
                    </Button>
                </FormControl>
                </form>
            </div>
        )
    } else if ( question_parameter === 2) {
        return (
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 2</h1>
                {/* azti question form */}
                <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel id="demo-error-radios">
                    <h1 className="text-orange-2"> 일을 하던 도중, 비가오는 상황이다. 다음 중 생각나는 것은? </h1>
                    </FormLabel>
                    <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                    >
                    <FormControlLabel value="moist" control={<Radio />} label={<h3 className="text-blue-1">파전에 막걸리!</h3>} />
                    <FormControlLabel value="dry" control={<Radio />} label={<h3 className="text-blue-1">집에 가기 힘들겠다..</h3>} />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit">
                    제출하기
                    </Button>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={buttonGoback}>
                    뒤로가기
                    </Button>
                </FormControl>
                </form>
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