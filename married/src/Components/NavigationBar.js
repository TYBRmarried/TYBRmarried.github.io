import React from "react";
import { Row, Col } from "react-bootstrap";

export default function NavigationBar() {
    return (
        <Row className="navigation-bar">
            <Col>오시는길</Col>
            <Col>|</Col>
            <Col>연락처</Col>
        </Row>
    );
};
