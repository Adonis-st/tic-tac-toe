import { Game } from "@/components/Game";
import { NewGame } from "@/components/NewGame";
import { gameModeAtom } from "@/store";
import { useAtom } from "jotai";
import Head from "next/head";

export default function Home() {
	const [gameMode] = useAtom(gameModeAtom);
	return (
		<>
			<Head>
				<title>Tic Tac Toe</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="mx-auto w-[88%]">{!gameMode ? <NewGame /> : <Game />}</div>
		</>
	);
}
