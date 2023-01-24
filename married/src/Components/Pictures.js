import React from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Pictures.css"

export default function Pictures() {
    return (
        <Row className="pictures">
            <Col>
                사진 1
            </Col>
            <Col>
                사진 2
            </Col>
            <Col>
                사진 3
            </Col>
            <Col>
                사진 4
            </Col>
        </Row>
    );
};
