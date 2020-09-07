import React, { useContext } from "react";
import { ModeContext } from "./Context";
import styled from "styled-components";

const Card = styled.div`
	width: 120px;
	height: 177px;
	padding: 1em;
	background: #1e213a;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 1200px) {
		margin-bottom: 2em;
	}
`;

const Img = styled.img`
	max-width: 56px;
`;

const Temps = styled.div`
	display: flex;
	justify-content: space-between;
	.temp,
	.tempLight {
		margin: 0 0.4em;
	}
	.tempLight {
		color: #a09fb1;
	}
`;

const Text = styled.p`
	font-size: 1rem;
	margin: 0;
`;

const DayCard = ({ day, tempMin, tempMax, name }) => {
	const [mode, setMode] = useContext(ModeContext);
	const max = tempMax.toString().substring(0, 2);
	const min = tempMin.toString().substring(0, 2);
	return (
		<Card>
			<Text>{day}</Text>
			<Img src={require(`../img/${name}.png`)} />
			<Temps>
				<Text className="temp">
					{mode === "C" ? max : Math.floor((max * 9) / 5 + 32)}°{mode}
				</Text>
				<Text className="tempLight">
					{mode === "C" ? min : Math.floor((min * 9) / 5 + 32)}°{mode}
				</Text>
			</Temps>
		</Card>
	);
};

export default DayCard;
