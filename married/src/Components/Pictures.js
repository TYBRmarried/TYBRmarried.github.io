import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/Pictures.css"
import ImagePreviewWindow from '../Components/ImagePreviewWindow';

export default function Pictures() {
    const [state, setState] = useState({
        index: -1,
        show: false,
    });

    const createPicture = () => {
        return Array.from({ length: process.env.REACT_APP_IMAGE_COUNT }).map((_, i) =>
            <Col key={i} onClick={() => setState({ ...state, index: i, show: true })}>
                <img src={`${process.env.PUBLIC_URL}/${i + 1}.png`} alt="" />
            </Col>
        );
    };

    return (
        <Row className="pictures">
            {state.show &&
                <ImagePreviewWindow
                    index={state.index}
                    onCancel={() => setState({ ...state, index: -1, show: false })}
                />
            }
            {createPicture()}
        </Row>
    );
};
