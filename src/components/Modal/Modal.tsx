import React from 'react';

interface Props {
	active: boolean
	setActive: React.Dispatch<React.SetStateAction<boolean>>
	children?: React.ReactNode
}
const Modal: React.FC<Props> = ({ children, active, setActive }) => {
	return (
		<div
			className={active ? 'modalActive' : 'modal'}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={active ? 'contentActive' : 'content'}>
				{children}
			</div>
		</div>
	);
};

export default Modal;