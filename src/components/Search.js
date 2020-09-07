import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { CityContext, CityIdContext } from "./Context";
import axios from "axios";

import { AiOutlineSearch } from "react-icons/ai";

const SearchContainer = styled.div`
	max-width: 450px;
	width: 33%;
	background: #1e213a;
	height: 100vh;
	padding: 2em;
	@media (max-width: 1200px) {
		max-width: 100%;
		width: 100%;
		height: 100vh;
	}
`;

const SearchFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SearchInput = styled.input`
	border: 1px solid white;
	height: 50px;
	font-family: Raleway;
	background: none;
	flex: 2;
	margin-right: 1em;
	color: inherit;
	padding: 1em 2em;
`;

const SearchButton = styled.button`
	background: #3c47e9;
	font-family: Raleway;
	color: #e7e7eb;
	border: none;
	cursor: pointer;
	height: 50px;
	padding: 0 1em;
`;

const CloseBtn = styled.button`
	border: none;
	background-repeat: no-repeat;
	color: white;
	font-family: Raleway;
	background-color: Transparent;
	cursor: pointer;
	outline: none;
`;

const Search = ({ setSearch }) => {
	const [input, setInput] = useState("");
	const [city, setCity] = useContext(CityContext);
	const [cityId, setCityId] = useContext(CityIdContext);
	//const [fetching, isFetching] = useContext(false);

	useEffect(() => {
		const url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`;
		axios
			.get(url)
			.then((response) => {
				// handle success
				setCityId(response.data[0].woeid);
				//isFetching(false)
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	}, [city]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setCity(input);
		setInput("");
		//isFetching(true)
	};

	return (
		<SearchContainer>
			<CloseBtn onClick={() => setSearch(false)}>X</CloseBtn>
			<p>i'm the search component</p>
			<form onSubmit={handleSubmit}>
				<SearchFlex>
					<AiOutlineSearch size="2em" />
					<SearchInput
						onChange={(e) => setInput(e.target.value)}
						value={input}
						placeholder="search location"
					/>
					<SearchButton>Search</SearchButton>
				</SearchFlex>
			</form>
		</SearchContainer>
	);
};

export default Search;
