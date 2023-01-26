import React, { useState } from "react";
import { useEffect } from "react";

function Bongo(this: any) {
	const [isMouthOpened, setIsMouthOpened] = useState(false);
	const [leftPawDown, setLeftPawDown] = useState(false);
	const [rightPawDown, setRightPawDown] = useState(false);
	let currentHand = "left";

	const keyDown = (e: KeyboardEvent) => {
		if (e.code === "Space") {
			setIsMouthOpened(true);
		} else if (currentHand === "left") {
			setLeftPawDown(true);
		} else {
			setRightPawDown(true);
		}
	};

	const keyUp = (e: KeyboardEvent) => {
		if (e.code === "Space") {
			setIsMouthOpened(false);
		} else if (currentHand === "left") {
			setLeftPawDown(false);
			currentHand = "right";
		} else {
			setRightPawDown(false);
			currentHand = "left";
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", keyDown);
		window.addEventListener("keyup", keyUp);
		return () => {
			window.removeEventListener("keydown", keyDown);
			window.addEventListener("keyup", keyUp);
		};
	}, []);

	return (
		<div className="cat-container w-[800px] h-[450px] absolute -top-[15%] md:-top-[10%] xl:-top-[5%] -right-[30%] md:-right-[10%] xl:-right-[5%] rotate-[20deg] scale-50 md:scale-75 xl:scale-[85% z-20">
			<hr className="relative block h-1 bg-black border-none rotate-[13.5deg] w-[500%] ml-[-200%] mt-[140px] " />
			<div className="cat absolute inset-0 h-full w-full">
				<div className="cat absolute inline-block t-0 h-full w-full bg-no-repeat bg-[url('./assets/cat.png')] h-full z-10" />
				<div
					className={`mouth absolute inline-block t-0 h-full w-full bg-no-repeat bg-[url('./assets/mouth.png')] h-full z-20 ${
						isMouthOpened ? "moved" : ""
					}`}
				/>
				<div
					className={`paw-left absolute inline-block t-0 h-full w-full bg-no-repeat bg-[url('./assets/paw-left.png')] h-full z-30 ${
						leftPawDown ? "moved" : ""
					}`}
				/>
				<div
					className={`paw-right absolute inline-block t-0 h-full w-full bg-no-repeat bg-[url('./assets/paw-right.png')] h-full z-30 ${
						rightPawDown ? "moved" : ""
					}`}
				/>
			</div>
		</div>
	);
}

export default Bongo;
