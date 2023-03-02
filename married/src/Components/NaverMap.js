import React, { useRef, useEffect } from "react";

const NaverMap = () => {
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.2775351, 127.0360741);
        const mapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);

        const markerOptions = {
            position: location.destinationPoint(90, 15),
            map: map,
            icon: {
                url: process.env.PUBLIC_URL + `/그룹_임시.png`,
                size: new naver.maps.Size(50, 52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
            }
        };
        const marker = new naver.maps.Marker(markerOptions);
        const contentString = [
            '<div class="" style="text-align: center;">',
            '   <h3>수원 더 아리엘</h3>',
            '   <p>경기도 수원시 팔달구 중부대로 181<br />',
            '       <img src="'+ process.env.PUBLIC_URL + '/그룹_임시.png" width="55" height="55" /><br />',
            '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
            '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
            '   </p>',
            '</div>'
        ].join('');

        const infowindow = new naver.maps.InfoWindow({
            content: contentString,
            maxWidth: 200,
            backgroundColor: "#fff",
            borderColor: "#bcd8db",
            borderWidth: 2,
            anchorSize: new naver.maps.Size(30, 30),
            anchorSkew: true,
            anchorColor: "#fff",
            pixelOffset: new naver.maps.Point(0, 0)
        });

        infowindow.open(map, marker);

        naver.maps.Event.addListener(marker, "click", function (e) {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
        });
    }, []);


    return <div className="naver-map" ref={mapElement} style={{ minHeight: '400px', borderRadius: '8px', marginBottom: '30px' }} />;
};

export default NaverMap;
