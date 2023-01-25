import { useState } from "react";

export const Game = () => {
	const [currentTurn, setCurrentTurn] = useState("x");
	const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);

	const markBoard = (boxIndex: number) => {
		if (boxes[boxIndex] === "") {
			const turn = currentTurn === "x" ? "x" : "o";
			setBoxes((prevState) => prevState.map((box, index) => (index === boxIndex ? turn : box)));
		}

		setCurrentTurn((prevState) => (prevState === "x" ? "o" : "x"));
	};

	const calculateWinner = (squares: any) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	};

	const winner = calculateWinner(boxes);
	const reset = () => {
		setBoxes(["", "", "", "", "", "", "", "", ""]);
		setCurrentTurn("x");
	};

	return (
		<div className="mt-5">
			<div className="flex items-center justify-between">
				<div className="flex ">
					<img src="assets/icon-x.svg" alt="X" className="w-8 h-8 mr-2" />
					<img src="assets/icon-o.svg" alt="o" className="w-8 h-8" />
				</div>
				{winner && <div>{winner === "x" ? "x wins" : "o wins"}</div>}
				<div className="flex items-center bg-semi_dark_navy shadow-[inset_0px_-4px_0px_#10212A] rounded-md px-3 pt-2 pb-3 ">
					{currentTurn === "x" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							className="fill-silver w-4 h-4">
							<path
								d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
								fillRule="evenodd"
							/>
						</svg>
					)}
					{currentTurn === "o" && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							className="fill-silver w-4 h-4">
							<path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
						</svg>
					)}
					<span className="text-[0.875rem] font-bold text-silver ml-2">Turn</span>
				</div>

				<button
					onClick={() => reset()}
					className="bg-silver px-[.625rem] pb-[.75rem] pt-[.5rem] rounded-lg shadow-[inset_0px_-4px_0px_#6B8997]">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4 ">
						<path
							d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
							fill="#1F3641"
						/>
					</svg>
				</button>
			</div>
			<div className="grid grid-cols-3 grid-rows-3 gap-4 mt-10 ">
				{boxes.map((box, index) => {
					return (
						<button
							key={index}
							onClick={() => markBoard(index)}
							className="bg-semi_dark_navy shadow-[inset_0px_-8px_0px_#10212A] rounded-2xl h-[96px] w-[96px] flex items-center justify-center">
							{box === "x" && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 64 64"
									className="fill-light_blue w-11 h-11">
									<path
										d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
										fillRule="evenodd"
									/>
								</svg>
							)}

							{box === "o" && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 64 64"
									className="fill-light_yellow w-11 h-11 mb-2">
									<path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
								</svg>
							)}
						</button>
					);
				})}
			</div>
		</div>
	);
};
