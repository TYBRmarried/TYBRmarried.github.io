import React, { useRef, useEffect } from "react";
import "../css/NaverMap.css"

const NaverMap = () => {
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.2775351, 127.0362441);
        const mapOptions = {
            center: location,
            zoom: 17,
            zoomControl: false,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);

        const markerOptions = {
            position: location.destinationPoint(0, 0),
            map: map,
            icon: {
                url: process.env.PUBLIC_URL + `/marker.png`,
                size: new naver.maps.Size(50, 50),
                scaledSize: new naver.maps.Size(50, 50),
            }
        };
        const marker = new naver.maps.Marker(markerOptions);
        // const contentString = [
        //     '<div class="" style="text-align: center;">',
        //     '   <div>공연장 찾아오시는 길</div>',
        //     '   <div><bold>수원 더 아리엘</bold> 6층 스카이 가든</div>',
        //     '   <p>경기도 수원시 팔달구 중부대로 181<br />',
        //     '       <img src="'+ process.env.PUBLIC_URL + '/그룹_임시.png" width="55" height="55" /><br />',
        //     '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
        //     '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
        //     '   </p>',
        //     '</div>'
        // ].join('');

        // const infowindow = new naver.maps.InfoWindow({
        //     content: contentString,
        //     maxWidth: 300,
        //     backgroundColor: "#fff",
        //     borderColor: "#bcd8db",
        //     borderWidth: 2,
        //     anchorSize: new naver.maps.Size(30, 30),
        //     anchorSkew: true,
        //     anchorColor: "#fff",
        //     pixelOffset: new naver.maps.Point(0, 0)
        // });

        // infowindow.open(map, marker);

        // naver.maps.Event.addListener(marker, "click", function (e) {
        //     if (infowindow.getMap()) {
        //         infowindow.close();
        //     } else {
        //         infowindow.open(map, marker);
        //     }
        // });
    }, []);


    return (
        <div className="naver-map">
            <div className="sub-title">오시는 길</div>
            <div ref={mapElement} style={{ minHeight: '300px', borderRadius: '8px' }} />
            <div className="info">
                <div>
                    <strong>수원 더 아리엘</strong> 6층 스카이가든
                </div>
                <div>
                    경기도 수원시 팔달구 중부대로 181 (우만동147-7)
                </div>
                <div>
                    <strong>문의</strong> 031.214.9300
                </div>
            </div>
            <div className="sub-title">주차 안내</div>
            <div style={{marginBottom: "30px"}}>
                <div>
                    <strong>주차장</strong> 건물 내 지하 1,2층 주차장, 주차 타워
                </div>
                <div>
                    <strong>외부 주차장</strong> 주차원 안내 받고 다른 주차장으로 이동
                </div>
            </div>
        </div>
    );
};

export default NaverMap;
