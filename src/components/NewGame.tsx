import { useAtom } from "jotai";
import { gameModeAtom, markAtom } from "@/store";

export const NewGame = () => {
	const [mark, setMark] = useAtom(markAtom);
	const [, setGamemode] = useAtom(gameModeAtom);

	return (
		<div className="mt-28">
			<div className="flex justify-center">
				<img src="assets/icon-x.svg" alt="X" className="w-8 h-8 mr-2" />
				<img src="assets/icon-o.svg" alt="o" className="w-8 h-8" />
			</div>

			<div className="bg-semi_dark_navy px-2 pt-5 pb-6 rounded-lg flex flex-col uppercase mt-8 items-center shadow-[inset_0px_-8px_0px_#10212A;]">
				<div className="heading-xs text-silver">Pick Player 1's Mark</div>
				<div className="mt-4 bg-dark_navy w-[90%] flex justify-between px-2 py-2 rounded-lg">
					<button
						onClick={() => setMark("x")}
						className={`${
							mark === "x" ? "bg-silver fill-dark_navy" : "fill-silver"
						} choose-mark-btn`}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-8 h-8">
							<path
								d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
								fillRule="evenodd"
							/>
						</svg>
					</button>

					<button
						onClick={() => setMark("o")}
						className={`${
							mark === "o" ? "bg-silver fill-dark_navy" : "fill-silver"
						} choose-mark-btn  `}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className=" h-8 w-8 ">
							<path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
						</svg>
					</button>
				</div>
				<div className="body text-silver/50 mt-3">Remeber: X Goes First</div>
			</div>
			<button onClick={() => setGamemode("cpu")} className="yellow-btn uppercase mt-8 ">
				New Game &#40;Vs Cpu&#41;
			</button>
			<button onClick={() => setGamemode("player")} className="blue-btn mt-5 uppercase">
				New Game &#40;Vs Player&#41;
			</button>
		</div>
	);
};
