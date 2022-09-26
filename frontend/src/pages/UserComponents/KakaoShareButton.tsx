// MUI
import Button from "@mui/material/Button"
// import kakaoBtn from "../../assets/kakao_login_btn.png";

import react , { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {RootState} from '../userStore/store'

const KakaoShareButton = () => {
    const SelectUserAzti = useSelector((state : RootState) => state.userazti)

    useEffect(() => {
        createKakaoButton()
    },[])
    const createKakaoButton = () => {
        const kakao = window.Kakao
        if (!kakao.isInitialized()) {
            kakao.init('89e4c9af570a0b14275d27488ed9a9ec')
        }
        console.log(window.location.href)
        kakao.Link.createDefaultButton({
            container : '#kakao_share_btn',
            objectType : 'feed',
            content : {
                title : `나는 ${SelectUserAzti.user_azti_type} 아재 입니다.`,
                description : '#그집어데고 #노포 #아재 #그림왕양치기',
                imageUrl: 'https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/'+SelectUserAzti.user_azti+'.png',
                link : {
                    mobileWebUrl : window.location.href,
                    webUrl : window.location.href
                }
            },
            // social: {
            //     likeCount: 77,
            //     commentCount: 55,
            //     sharedCount: 333,
            // },
            buttons: [
                {
                  title: '나는 어떤 아재 일까?',
                  link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                  },
                }
            ],
        })
    }
    return (
        <div className="kakao-share-button">
            <Button
            id='kakao_share_btn'
            onClick={createKakaoButton}>
                공유하기
            </Button>
        </div>
    )

}

export default KakaoShareButton