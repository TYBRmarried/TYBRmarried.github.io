import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Welcome.css"

export default function Welcome() {
    return (
        <Row className="welcome">
            <img src={`${process.env.PUBLIC_URL}/임시이미지.jpg`} alt="" />
            <Row>
                <Col className="text">
                    태용, 보라
                    <br />
                    공연 중 퇴장 시 재입장은 불가합니다.
                </Col>
            </Row>
        </Row>
    );
};
