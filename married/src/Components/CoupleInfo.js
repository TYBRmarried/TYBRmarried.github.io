import React, { useState } from "react";
import "../css/CoupleInfo.css";
import Accordion from "./Accordion";
import { Row, Col } from "react-bootstrap";
import { copyToClipboard } from "../common";
import CopyConfirmWindow from "./CopyConfirmWindow";

const contactInfos = [
    ["", "신랑", "이태용", "010-6774-8959"],
    ["", "신부", "김보라", "010-6774-8959"],
    ["", "신랑 父", "이헌국", "010-6774-8959"],
    ["", "신랑 母", "윤일순", "010-6774-8959"],
    ["", "신부 父", "김완영", "010-6774-8959"],
    ["", "신부 母", "최미란", "010-6774-8959"],
]

const accountInfos = [
    ["", "신랑", "이태용", "국민 399101-04-235738"],
    ["", "신부", "김보라", "국민 399101-04-235738"],
    ["", "신랑 父", "이헌국", "국민 399101-04-235738"],
    ["", "신랑 母", "윤일순", "국민 399101-04-235738"],
    ["", "신부 父", "김완영", "국민 399101-04-235738"],
    ["", "신부 母", "최미란", "국민 399101-04-235738"],
];

const CoupleInfo = () => {
    const [state, setState] = useState({
        copyTargetText : "",
        show: false,
    });

    const createInfo = (contactInfo) => {
        return (
            <Row>
                <Col className="col-2 d-flex">
                    <div className="img"></div>
                </Col>

                <Col className="col-2">
                    <Row>
                        <Col>
                            {contactInfo[1]}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {contactInfo[2]}
                        </Col>
                    </Row>
                </Col>
                <Col className="col-6">{contactInfo[3]}</Col>
                <Col className="col-2">
                    <img
                        src={`${process.env.PUBLIC_URL}/copy_icon.png`}
                        alt="" 
                        onClick={() => {
                            copyToClipboard(contactInfo[3])
                            setState({ ...state, copyTargetText: contactInfo[3], show: true });
                        }}
                    />
                </Col>
            </Row>
        );
    };

    const createAccordionContent = (Infos) => {
        return (
            Infos.map(info => createInfo(info))
        );
    };

    return (
        <div className="couple-info">
            {state.show && <CopyConfirmWindow copyTargetText={state.copyTargetText} onConfirm={() => setState({ ...state, copyTargetText: "", show: false })} />}
            <Accordion
                open={true}
                className="contact"
                title={"연락처"}
                content={createAccordionContent(contactInfos)}
            />
            <Accordion
                open={false}
                className="account"
                title={"마음 전하기"}
                content={createAccordionContent(accountInfos)}
            />
        </div>
    );
};

export default CoupleInfo;
