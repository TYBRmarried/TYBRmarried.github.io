import React from "react";
import { getRandomInt } from "../common";
import "../css/ShareButtonGroup.css";

const ShareButtonGroup = () => {
    const shareDefault = async () => {
        const url = 'https://tybrmarried.github.io';
        const title = '보라태용결혼하는거제목어떻게넣을까요';
        const description = '#어떤 #내용을넣는게 #좋을까요 이건 몇 줄 정도 적어도 돼요';

        try {
            await navigator.share({
                title,
                text: description,
                url,
            });
        } catch (error) {
            console.log('Error sharing:', error.message);
        }
    };

    const shareKakao = async () => {
        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }
            kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '보라태용결혼하는거제목어떻게넣을까요',
                    description: '#어떤 #내용을넣는게 #좋을까요',
                    imageUrl: `${process.env.PUBLIC_URL}/${getRandomInt(1, process.env.REACT_APP_IMAGE_COUNT)}.png`,
                    link: {
                        mobileWebUrl: "https://tybrmarried.github.io",
                        webUrl: "https://tybrmarried.github.io",
                    },
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: "https://tybrmarried.github.io",
                            webUrl: "https://tybrmarried.github.io",
                        },
                    },
                ],
            });
        }
    };

    return (
        <div className="button-group">
            <div className="kakao-share">
                <img
                    src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                    alt="카카오톡 공유 보내기 버튼" onClick={shareKakao}
                />
            </div>
            <div className="default-share" >
                <div onClick={shareDefault}>
                    <img
                        src={`${process.env.PUBLIC_URL}/icon_share.png`}
                        alt="공유 보내기 버튼"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShareButtonGroup;
