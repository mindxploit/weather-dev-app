import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Context, BusyContext, CityIdContext, CityContext } from "./Context";

const MainContainer = styled.div`
	display: flex;
	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

const Main = ({ children }) => {
	const [todayData, setTodayData] = useContext(Context);
	const [isBusy, setIsBusy] = useContext(BusyContext);
	const [city, setCity] = useContext(CityContext);
	const [cityId, setCityId] = useContext(CityIdContext);

	useEffect(() => {
		const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cityId}/`;
		axios
			.get(url)
			.then((response) => {
				// handle success
				setTodayData(response.data);
				console.log(cityId + " new todayData");
				setIsBusy(false);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	}, [cityId]);

	useEffect(() => {
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
	}, []);

	return (
		<>{!isBusy ? <MainContainer isBusy={isBusy}>{children}</MainContainer> : <h1>Loading...</h1>}</>
	);
};

export default Main;
