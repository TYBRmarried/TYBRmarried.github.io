import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/NavigationBar.css"
import { scrollToInvalidElement } from '../common';

export default function NavigationBar() {
    return (
        <Row className="navigation-bar">
            <Col onClick={() => scrollToInvalidElement("naver-map")}>오시는길</Col>
            <div className="pipe"></div>
            <Col onClick={() => scrollToInvalidElement("contact")}>연락처</Col>
        </Row>
    );
};
