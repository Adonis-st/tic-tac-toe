import { markAtom } from "@/store";
import { Dialog, Transition } from "@headlessui/react";
import { useAtom } from "jotai";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

interface Props {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	winner: string | null;
	tie: boolean;
	reset: () => void;
	restartGame: () => void;
}

export const GameModal = ({ setOpenModal, winner, reset, tie, restartGame }: Props) => {
	const closeModal = () => setOpenModal(false);
	const [mark] = useAtom(markAtom);

	return (
		<>
			<Transition appear show={true} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={() => {}}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black/40 " />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-semi_dark_navy py-11 mb-10 align-middle  transition-all flex flex-col items-center">
									{winner && (
										<h3 className="text-[.875rem] font-bold text-silver tracking-[.88px]">
											{mark === winner ? "Player 1 Wins!" : "Player 2 Wins!"}
										</h3>
									)}

									<div className="mt-2 ">
										{!winner ? (
											<>
												<div className="text-silver font-bold text-[1.5rem] tracking-[1.5px]">
													{tie ? "Round Tied" : "Restart Game?"}
												</div>
											</>
										) : (
											<div
												className={`${
													winner === "x" ? "text-light_blue" : "text-light_yellow"
												} heading-m  flex items-center justify-center`}>
												{winner === "x" && (
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
												{winner === "o" && (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 64 64"
														className="fill-light_yellow w-11 h-11 mb-2">
														<path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
													</svg>
												)}
												<span className="ml-2">Takes The Round</span>
											</div>
										)}
									</div>

									<div className="mt-4 flex justify-center">
										{winner || tie ? (
											<>
												<button
													onClick={() => closeModal()}
													className="bg-silver text-dark_navy shadow-[inset_0px_-4px_0px_#6B8997] rounded-lg px-5 py-[.85rem] heading-xs mr-4">
													Quit
												</button>
												<button
													onClick={() => reset()}
													className="bg-light_yellow text-dark_navy shadow-[inset_0px_-4px_0px_#CC8B13] rounded-lg px-5 py-[.85rem] heading-xs">
													Next Round
												</button>
											</>
										) : (
											<>
												{/* Restart Game */}
												<button
													onClick={() => closeModal()}
													className="bg-silver text-dark_navy shadow-[inset_0px_-4px_0px_#6B8997] rounded-lg px-5 py-[.85rem] heading-xs mr-4">
													No, Cancel
												</button>
												<button
													onClick={() => restartGame()}
													className="bg-light_yellow text-dark_navy shadow-[inset_0px_-4px_0px_#CC8B13] rounded-lg px-5 py-[.85rem] heading-xs">
													Yes, Restart
												</button>
											</>
										)}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
