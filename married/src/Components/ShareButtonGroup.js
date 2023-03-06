import React from "react";
import { getRandomInt } from "../common";
import "../css/ShareButtonGroup.css";

const ShareButtonGroup = () => {
    const shareDefault = async () => {
        const url = 'https://tybrmarried.github.io';
        const title = '태용 ❤ 보라';
        const description = '사랑 이야기의 새로운 한 장면을 함께 해주세요.';

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
                    title: '태용 ❤ 보라',
                    description: '사랑 이야기의 새로운 한 장면을 함께 해주세요.',
                    imageUrl: `https://tybrmarried.github.io/${getRandomInt(1, process.env.REACT_APP_IMAGE_COUNT)}.png`,
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
