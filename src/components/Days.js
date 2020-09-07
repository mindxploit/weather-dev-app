import React, { useContext } from "react";
import DayCard from "./DayCard";
import styled from "styled-components";
import { Context } from "./Context";

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 3em 0;
	@media (max-width: 1200px) {
		flex-wrap: wrap;
	}
`;

const Days = () => {
	const todayData = useContext(Context);
	const data = todayData[0];
	let today = new Date();
	let dd = today.getDate();
	let day = today.getDay();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return (
		<CardContainer>
			<DayCard
				day="Tomorrow"
				tempMax={data.consolidated_weather[1].max_temp}
				tempMin={data.consolidated_weather[1].min_temp}
				name={data.consolidated_weather[1].weather_state_name.replace(/\s/g, "")}
			/>
			<DayCard
				day={`${days[day + 1]} ${dd + 1}`}
				tempMax={data.consolidated_weather[2].max_temp}
				tempMin={data.consolidated_weather[2].min_temp}
				name={data.consolidated_weather[2].weather_state_name.replace(/\s/g, "")}
			/>
			<DayCard
				day={`${days[day + 2]} ${dd + 2}`}
				tempMax={data.consolidated_weather[3].max_temp}
				tempMin={data.consolidated_weather[3].min_temp}
				name={data.consolidated_weather[3].weather_state_name.replace(/\s/g, "")}
			/>
			<DayCard
				day={`${days[day + 3]} ${dd + 3}`}
				tempMax={data.consolidated_weather[4].max_temp}
				tempMin={data.consolidated_weather[4].min_temp}
				name={data.consolidated_weather[4].weather_state_name.replace(/\s/g, "")}
			/>
			<DayCard
				day={`${days[day + 4]} ${dd + 4}`}
				tempMax={data.consolidated_weather[5].max_temp}
				tempMin={data.consolidated_weather[5].min_temp}
				name={data.consolidated_weather[5].weather_state_name.replace(/\s/g, "")}
			/>
		</CardContainer>
	);
};

export default Days;
