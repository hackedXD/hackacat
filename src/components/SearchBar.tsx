import { useRef } from "react";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
	const searchInput = useRef<HTMLInputElement>(null);
	const searchURL = "https://google.com/search";

	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter" && searchInput.current != null) {
			if (document.activeElement !== searchInput.current) {
				e.preventDefault();
				searchInput.current.focus();
			}
		}
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let url = new URL(searchURL);
		url.searchParams.set("q", searchInput.current?.value ?? "");
		window.location.href = url.toString();
	};

	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	return (
		<div className="flex flex-row">
			<form className="flex w-full" onSubmit={onSubmit}>
				<div className="flex flex-1 w-full relative">
					<IoSearch className="absolute inset-y-0 left-0 h-full ml-4 flex justify-center items-center" />
					<input
						type="text"
						className="transition-all placeholder:italic placeholder:text-ctp-overlay2 bg-ctp-surface0 border border-ctp-surface1 text-ctp-text text-sm rounded-lg focus:border-ctp-blue block w-full pl-10 p-2.5"
						placeholder="Search"
						ref={searchInput}
						autoCorrect="off"
					/>
				</div>
				<button
					type="submit"
					className="flex flex-none items-center justify-center transition-colors p-2.5 ml-2 text-sm font-medium text-white bg-ctp-blue rounded-lg hover:bg-ctp-mauve"
				>
					<IoSearch />
				</button>
			</form>
		</div>
	);
}

export default SearchBar;
