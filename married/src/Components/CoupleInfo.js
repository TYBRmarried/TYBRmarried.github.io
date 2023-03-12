import React, { useState } from "react";
import "../css/CoupleInfo.css";
import Accordion from "./Accordion";
import { Row, Col } from "react-bootstrap";
import { copyToClipboard } from "../common";
import CopyConfirmWindow from "./CopyConfirmWindow";

const contactInfos = [
    ["신랑.png", "신랑", "이태용", "010-6774-8959"],
    ["신랑아버지.png", "신랑 父", "이헌국", "010-5232-8959"],
    ["신랑어머니.png", "신랑 母", "윤일순", "010-2077-8951"],
    ["신부.png", "신부", "김보라", "010-4030-6579"],
    ["신부아버지.png", "신부 父", "김완영", "010-2714-2022"],
    ["신부어머니.png", "신부 母", "최미란", "010-5386-5184"],
]

const accountInfos = [
    ["신랑.png", "신랑", "이태용", "국민 399101-04-235738"],
    ["신랑아버지.png", "신랑 父", "이헌국", "국민 630301-01-052833"],
    ["신랑어머니.png", "신랑 母", "윤일순", "국민 399101-04-130990"],
    ["신부.png", "신부", "김보라", "우리 1002-340-393951"],
    ["신부아버지.png", "신부 父", "김완영", "농협 207098-52-080853"],
    ["신부어머니.png", "신부 母", "최미란", "하나 468-810053-24507"],
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
                    <div>                        
                        <img src={`${process.env.PUBLIC_URL}/${contactInfo[0]}`} alt="" />
                    </div>
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
