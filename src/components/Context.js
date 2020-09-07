import React, { createContext, useState } from "react";

export const Context = createContext([]);
export const ModeContext = createContext("C");
export const BusyContext = createContext(true);
export const CityContext = createContext("");
export const CityIdContext = createContext(2459115);

export const GlobalContext = ({ children }) => {
	const [todayData, setTodayData] = useState();
	const [mode, setMode] = useState("C");
	const [isBusy, setIsBusy] = useState(true);
	const [city, setCity] = useState("");
	const [cityId, setCityId] = useState(2459115);
	return (
		<Context.Provider value={[todayData, setTodayData]}>
			<ModeContext.Provider value={[mode, setMode]}>
				<BusyContext.Provider value={[isBusy, setIsBusy]}>
					<CityContext.Provider value={[city, setCity]}>
						<CityIdContext.Provider value={[cityId, setCityId]}>{children}</CityIdContext.Provider>
					</CityContext.Provider>
				</BusyContext.Provider>
			</ModeContext.Provider>
		</Context.Provider>
	);
};
