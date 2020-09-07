import React, { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "./Context";

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 1.5em;
`;

const ModeBtn = styled.button`
	outline: none;
	margin-left: 0.7em;
	cursor: pointer;
	width: 40px;
	height: 40px;
	border: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Raleway;
	font-weight: 800;
	font-size: 1.125rem;
	background: ${(props) => (props.selected ? "#E7E7EB" : "#585676")};
	color: ${(props) => (props.selected ? "#110E3C" : "#E7E7EB")};
`;

const Mode = () => {
	const [mode, setMode] = useContext(ModeContext);

	return (
		<Container>
			<ModeBtn onClick={() => setMode("C")} selected={mode === "C" ? true : false}>
				°C
			</ModeBtn>
			<ModeBtn onClick={() => setMode("F")} selected={mode === "F" ? true : false}>
				°F
			</ModeBtn>
		</Container>
	);
};

export default Mode;
