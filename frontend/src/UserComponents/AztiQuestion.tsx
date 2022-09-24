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
import { useState , useEffect , useCallback } from "react"
import { ConstructionOutlined } from "@mui/icons-material";
import { useSelector , useDispatch } from 'react-redux'
import {RootState} from '../userStore/store'
import { userinfo } from "../userStore/userSlice"

// 결과 만 백엔드로 보내줄 것


function AztiQuestion() {
    useEffect(() => {
        const sendUserAzti = () => {
            dispatch(userinfo(user_status))
        }
        sendUserAzti()
    },[])

    const SelectUserAzti = useSelector((state : RootState) => state.userazti)
    console.log(SelectUserAzti)

    useEffect(() => {
        // useSelector((state : RootState) => state.userazti)
    },[])
    const dispatch = useDispatch()
    type azti = {
        personal : string,
        mood : string,
        place : string,
        is_korean : string
    }
    const user_azti : azti = {
        personal : '',
        mood : '',
        place : '',
        is_korean : ''
    }


    const [ question_parameter , setParameter ] = useState<number>(1)
    const [value, setValue] = React.useState('');
    const [ user_status , setUserazti] = useState<azti>(user_azti)
    const [ buttonCheck , setButtonCheck] = useState<number>(0)

    // radio button control
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setValue((event.target as HTMLInputElement).value);
        setButtonCheck((event) => event += 1)
    };


    // sumit event control
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if ( question_parameter === 1 ){
            user_status.personal = value
            // 숫자 증가
            buttonClick()
            // buttonCheck 초기화
            setButtonCheck((event) => event = 0)

        } else if ( question_parameter === 2){
            user_status.mood = value
            // 숫자 증가
            buttonClick()
            // buttonCheck 초기화
            setButtonCheck((event) => event = 0)

        } else if ( question_parameter === 3) {
            user_status.place = value
            // 숫자 증가
            buttonClick()
            // buttonCheck 초기화
            setButtonCheck((event) => event = 0)

        } else if (question_parameter === 4) {
            user_status.is_korean = value
            // 숫자 증가
            buttonClick()
            // buttonCheck 초기화
            setButtonCheck((event) => event = 0)

        } else if ( question_parameter === 5) {
            console.log('hi')
        }

    }

    // question_parameter 변경
    const buttonClick = () => setParameter((event) => event += 1)
    const resetButton = () => setParameter((event) => event = 1)
    

    // button 상태 변경
    const buttonGoback = () => {
        setParameter((event) => event -= 1)
        setButtonCheck((event) => event = 0)
    }


    // 현재 문제
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
                    <FormControlLabel value="real" control={<Radio />}  label={<h3 className="text-blue-1">노-우</h3>} />
                    </RadioGroup>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" disabled={buttonCheck == 0}>
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
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" disabled={buttonCheck == 0}>
                    제출하기
                    </Button>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={buttonGoback}>
                    뒤로가기
                    </Button>
                </FormControl>
                </form>
            </div>
        )
    } else if ( question_parameter === 3) {
        return (
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 3</h1>
                {/* azti question form */}
                <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel id="demo-error-radios">
                    <h1 className="text-orange-2"> 동네에서 새로운 맛집을 발견했다! 당신의 선택은? </h1>
                    </FormLabel>
                    <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                    >
                    <FormControlLabel value="hipster" control={<Radio />} label={<h3 className="text-blue-1">친한 친구들에게만 알려준다.</h3>} />
                    <FormControlLabel value="insider" control={<Radio />} label={<h3 className="text-blue-1">인스타에 공유에 모두에게 알려준다.</h3>} />
                    </RadioGroup>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" disabled={buttonCheck == 0}>
                    제출하기
                    </Button>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={buttonGoback}>
                    뒤로가기
                    </Button>
                </FormControl>
                </form>

            </div>
        )
    } else if ( question_parameter === 4) {
        return (
            <div>
                <h1 className="text-yellow-1"> 퀘-스챤 4</h1>
                <h3 className="text-orange-2"> 질문 </h3>
                {/* azti question form */}
                <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel id="demo-error-radios">
                    <h1 className="text-orange-2"> 현재 매우 배가고픈 당신, 눈앞에 있는 두 가게 중 당신의 선택은? </h1>
                    </FormLabel>
                    <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                    >
                    <FormControlLabel value="korean" control={<Radio />} label={<h3 className="text-blue-1">처음 보는 상표의 국밥집.</h3>} />
                    <FormControlLabel value="alien" control={<Radio />} label={<h3 className="text-blue-1">기본적인 맛이 보장되어 있는 패스트푸드점</h3>} />
                    </RadioGroup>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" disabled={buttonCheck == 0}>
                    제출하기
                    </Button>
                    <Button sx={{ mt: 1, mr: 1 }} onClick={buttonGoback}>
                    뒤로가기
                    </Button>
                </FormControl>
                </form>

            </div>
        )
    } else if ( question_parameter === 5) {
        // const ClickButton = useEffect(() => {
        //     const sendUserAzti = () => {
        //         dispatch(userinfo(user_status))
        //     }
        //     sendUserAzti()
        // },[])
        // const sendUserAzti = () => {
        //     dispatch(userinfo(user_status))
        // }
        return (
            <div>
                <h1>결과</h1>
                <h3>{user_status.personal}</h3>
                <h3>{user_status.mood}</h3>
                <h3>{user_status.place}</h3>
                <h3>{user_status.is_korean}</h3>
                <h3>아재</h3>

                {/* <Button onClick={() => dispatch({type : userinfo(), payload: user_status})}></Button> */}
                <Button onClick={() => dispatch(userinfo(user_status))}>
                {/* <Button onClick={ClickButton}> */}
                    추천 받기
                </Button>
                <Button onClick={resetButton}>
                    다시하기
                </Button>
            </div>
        )
    }

}
export default AztiQuestion