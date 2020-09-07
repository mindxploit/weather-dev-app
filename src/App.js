import React from "react";
import { createGlobalStyle } from "styled-components";
import Today from "./components/Today";
import MainRight from "./components/MainRight";
import Main from "./components/Main";
import { GlobalContext } from "./components/Context";
import Search from "./components/Search";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&display=swap');    
    *, *::after, *::before {
      box-sizing: border-box;
    }
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Raleway, sans-serif;
      color: #e7e7eb;
    }
`;

function App() {
	return (
		<GlobalContext>
			<GlobalStyle />
			<Main>
				<Today />
				<MainRight />
			</Main>
		</GlobalContext>
	);
}

export default App;
