import React, { useContext, useState, useEffect } from "react";
import { Context, ModeContext } from "../components/Context";
import styled from "styled-components";
import { BiTargetLock } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import Search from "./Search";

const TodayContainer = styled.div`
	max-width: 450px;
	width: 33%;
	background: #1e213a;
	min-height: 100%;
	padding: 2em;
	@media (max-width: 1200px) {
		max-width: 100%;
		heigh: 100%;
		width: 100%;
	}
`;

const BtnContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Button = styled.button`
	cursor: pointer;
	color: #e7e7eb;
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border: none;
	font-family: Raleway;
	background: #6e707a;
	transition: 1s;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	&:hover {
		background: #63646d;
	}
`;

const GpsBtn = styled.button`
	cursor: pointer;
	width: 40px;
	height: 40px;
	border: none;
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 1s;
	&:hover {
		background: rgba(255, 255, 255, 0.17);
	}
`;

const ImgWeather = styled.img`
	max-width: 100%;
	max-width: 300px;
	display: block;
	margin: 5em auto;
	width: 50%;
`;

const Text = styled.div`
	text-align: center;
`;

const Temperature = styled.h1`
	font-weight: 500;
	font-size: 9rem;
	margin: 0;
`;

const Desc = styled.h3`
	font-size: 2.25em;
	color: #a09fb1;
	font-weight: 600;
	margin-bottom: 2em;
	margin-top: 1em;
`;

const Info = styled.p`
	font-size: 1.125em;
	color: #88869d;
	font-weight: 600;
`;

const Today = ({ isBusy }) => {
	const todayData = useContext(Context);
	const [mode, setMode] = useContext(ModeContext);
	const [search, setSearch] = useState(false);
	const [city, setCity] = useState("");
	let temp = Number(todayData[0].consolidated_weather[0].the_temp.toString().substring(0, 2));

	let today = new Date();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const callGps = () => {
		if ("geolocation" in navigator) {
			console.log("Available");
		} else {
			console.log("Not Available");
		}

		navigator.geolocation.getCurrentPosition(
			function (position) {
				console.log(position);
			},
			function (error) {
				console.error("Error Code = " + error.code + " - " + error.message);
			}
		);
	};

	return (
		<>
			{!isBusy && !search ? (
				<TodayContainer>
					<BtnContainer>
						<Button onClick={() => setSearch(true)}>Search for places</Button>
						<GpsBtn onClick={() => callGps()}>
							<BiTargetLock color="#E7E7EB" size="1.8em" />
						</GpsBtn>
					</BtnContainer>
					<ImgWeather
						src={require(`../img/${todayData[0].consolidated_weather[0].weather_state_name.replace(
							/\s/g,
							""
						)}.png`)}
					/>
					<Text>
						<Temperature>
							{mode === "C" ? temp : Math.floor((temp * 9) / 5 + 32)}°{mode}
						</Temperature>
						<Desc>{todayData[0].consolidated_weather[0].weather_state_name}</Desc>
						<Info>Today ~ {String(days[today.getDay()] + " " + today.getDate())}</Info>
						<Info className="location">
							<MdLocationOn size="1em" />
							{todayData[0].title}
						</Info>
					</Text>
				</TodayContainer>
			) : (
				<Search setSearch={setSearch} />
			)}
		</>
	);
};

export default Today;
