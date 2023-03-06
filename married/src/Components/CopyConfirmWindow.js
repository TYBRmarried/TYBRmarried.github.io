import React from "react";
import ReactModal from 'react-modal';
import "../css/CopyConfirmWindow.css";

ReactModal.setAppElement("#root");


export default function CopyConfirmWindow(props) {
	return (
        <ReactModal
            isOpen={true}
            className={props.className ? props.className : "default"}
            style={{ overlay: {}, content: {} }}
            portalClassName={"copy-confirm-window"}
        >
			<div className="close">
				<img src={process.env.PUBLIC_URL + `/x.png`} onClick={props.onConfirm}
					alt=""
				/>
            </div>
            <div className="custom-modal-content">
                <div className="custom-modal-icon">
                    <img src={`${process.env.PUBLIC_URL}/copy_icon.png`} alt="" />
                </div>
                <div className="custom-modal-header">
                    <strong>{props.copyTargetText}</strong><br />클립보드에 복사 되었습니다.
                </div>
            </div>
            <div className="custom-modal-footer">
                <button
                    className={"confirm"}
                    onClick={props.onConfirm}
                >
                    확인
                </button>
            </div>
        </ReactModal>
    );
}