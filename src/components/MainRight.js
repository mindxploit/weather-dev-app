import React from "react";
import styled from "styled-components";
import Days from "./Days";
import Mode from "./Mode";
import Highlights from "./Highlights";

const Wrapper = styled.div`
	background: #100e1d;
	width: 100%;
`;

const Container = styled.div`
	width: 80%;
	margin: auto;
`;

const MainRight = () => {
	return (
		<Wrapper>
			<Container>
				<Mode />
				<Days />
				<Highlights />
			</Container>
		</Wrapper>
	);
};

export default MainRight;
