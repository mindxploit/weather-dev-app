import React, { useContext } from "react";
import styled from "styled-components";
import { Context, BusyContext } from "./Context";

const Title = styled.h2`
	font-weight: 700;
	margin: 1em;
	margin-left: 0;
`;

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 1200px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const Desc = styled.h4`
	font-size: 1rem;
	font-weight: 500;
	margin: 0;
`;

const Number = styled.h1`
	font-size: 4em;
	margin: 0;
`;

const Card = styled.div`
	background: #1e213a;
	padding: 2em;
	margin-bottom: 3em;
	width: 50%;
	max-width: 400px;
	text-align: center;
	@media (max-width: 1200px) {
		width: 100%;
		max-width: 100%;
	}
`;

const Thin = styled.span`
	font-size: 2rem;
	font-weight: 400;
`;

const ProgressBar = styled.div`
	margin-top: 2em;
	border-radius: 20px;
	border: 0.5px solid white;
	height: 10px;
	background-color: grey;
`;

const Progress = styled.div`
	width: 50%;
	height: 9px;
	border-radius: 20px;
	background-color: #ffec65;
`;

const Highlights = () => {
	const todayData = useContext(Context);
	const data = todayData[0].consolidated_weather[0];
	return (
		<>
			<Title>Today's Hightlights</Title>
			<CardContainer>
				<Card>
					<Desc>Wind status</Desc>
					<Number>
						{Math.floor(data.wind_speed)}
						<Thin> mph</Thin>
					</Number>
				</Card>
				<Card>
					<Desc>Humidity</Desc>
					<Number>
						{data.humidity}
						<Thin>%</Thin>
					</Number>
					<ProgressBar>
						<Progress style={{ width: `${data.humidity}%` }}></Progress>
					</ProgressBar>
				</Card>
				<Card>
					<Desc>Visibility</Desc>
					<Number>
						{Math.floor(data.visibility)} <Thin>miles</Thin>
					</Number>
				</Card>
				<Card>
					<Desc>Air pressure</Desc>
					<Number>
						{Math.floor(data.air_pressure)} <Thin>mb</Thin>
					</Number>
				</Card>
			</CardContainer>
		</>
	);
};

export default Highlights;
