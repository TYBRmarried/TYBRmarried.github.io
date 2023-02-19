import React, { useRef } from "react";
import ImageGallery from 'react-image-gallery';
import ReactModal from 'react-modal';
import "../css/ImagePreviewWindow.css";

ReactModal.setAppElement("#root");

const images = Array.from({ length: process.env.REACT_APP_IMAGE_COUNT }).map((_, i) => (
	{
		original: `${process.env.PUBLIC_URL}/${i + 1}.jpg`,
		thumbnail: `${process.env.PUBLIC_URL}/${i + 1}.png`,
	}
));

export default function ImagePreviewWindow(props) {
	const imageGalleryRef = useRef(null);

	return (
        <ReactModal
            isOpen={true}
            className={props.className ? props.className : "default"}
            style={{ overlay: {}, content: {} }}
            portalClassName={"image-preview"}
        >
			<div className="close">
				<img src={process.env.PUBLIC_URL + `/x.png`} onClick={props.onCancel}
					alt=""
				/>
			</div>
            <div>
                <ImageGallery
                    ref={imageGalleryRef}
                    items={images}
					showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={true}
					thumbnailPosition={"bottom"}
                />
            </div>
        </ReactModal>
    );
}