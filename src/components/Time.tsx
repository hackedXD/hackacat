import { useEffect } from "react";
import { useState } from "react";

function Time() {
	const [dateState, setDateState] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setDateState(new Date());
		}, 100);
	}, []);

	return (
		<p className="font-mono self-end mb-3 md:mb-4 font-bold text-xs md:text-base h-3 text-ctp-text">
			{dateState.toLocaleTimeString()}
		</p>
	);
}

export default Time;
