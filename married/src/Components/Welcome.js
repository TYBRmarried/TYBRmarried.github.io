import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Welcome.css"

export default function Welcome() {
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    return (
        <Row className="welcome">
            <img src={`${process.env.PUBLIC_URL}/${getRandomInt(1, process.env.REACT_APP_IMAGE_COUNT)}.jpg`} alt="" />
            <Row>
                <Col className="text">
                    서로의 마음을 확인한 두 사람,<br />
                    사랑을 고백하며 새로운 시작을 합니다.<br />
                    사랑 이야기의 새로운 한 장면을 함께 해주세요.
                </Col>
            </Row>
        </Row>
    );
};
