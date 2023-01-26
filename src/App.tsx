import { useEffect } from "react";
import Bongo from "./components/Bongo";
import SearchBar from "./components/SearchBar";
import Time from "./components/Time";
import { Adsense } from "@ctrl/react-adsense";

function App() {
	return (
		<div className="app h-screen w-screen relative overflow-hidden ctp-latte bg-gradient-to-b from-ctp-base to-ctp-crust">
			<Bongo />
			<div className="flex flex-row justify-center items-center h-full">
				<div className="flex flex-col justify-center flex-none w-1/4 md:w-[30%] h-full">
					<Adsense client="ca-pub-7640562161899788" slot="7259870550" style={{ display: "block" }} />
					<hr className="flex self-end border border-[0.5px] mx-2 rounded-xl h-[40%] border-ctp-overlay0" />
				</div>

				<div className="flex flex-1 flex-col m-2 p-6 outline outline-ctp-pink rounded-lg bg-gradient-to-b from-ctp-mantle to-ctp-crust z-10 ">
					<Time />
					<h1 className="flex text-transparent mb-1.5 md:mb-3 font-mono font-bold text-xl md:text-3xl bg-clip-text bg-gradient-to-r from-ctp-pink to-ctp-mauve">
						hackacat
					</h1>
					<p className="text-ctp-mauve font-mono font-bold text-xs md:text-sm">
						a cat themed hackathon project
					</p>
					<hr className="flex self-center border border-[0.5px] rounded-xl w-[40%] mt-4 mb-4 border-ctp-overlay0" />
					<SearchBar />
				</div>
				<div className="flex-none w-1/4 md:w-[30%] h-full"></div>
			</div>
		</div>
	);
}
export default App;
