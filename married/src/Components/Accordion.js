import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import "../css/Accordion.css";
// import './Accordion.css';

function Accordion({ title, content, className, open }) {
	const [isOpen, setIsOpen] = useState(open);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`accordion ${className}`}>
			<div className="title sub-title" onClick={handleClick}>
				{title}
				{className === "account" &&
					<div className={`icon ${isOpen ? "open" : ""}`}></div>
				}
			</div>
			<CSSTransition
				in={isOpen}
				timeout={300}
				classNames="content"
				unmountOnExit
			>
				<div className="content">
					{content}
				</div>
			</CSSTransition>
		</div>
	);
}

export default Accordion;