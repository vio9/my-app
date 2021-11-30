import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardsList() {
	const [characters, setCharacters] = useState([]);
	const [starkOnly, setStartOnly] = useState(false);

	function starckOnlyClick() {
		setStartOnly(!starkOnly);
	}

	const getQuote = async () => {
		try {
			const result = await axios.get(
				"https://thronesapi.com/api/v2/Characters"
			);
			setCharacters(result.data);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getQuote();
	}, []);

	return (
		<>
			<div className="wrap-button">
				<button className="button-choice" onClick={starckOnlyClick}>
					get stark
				</button>
			</div>
			<div className="cardlist-wrapper">
				{characters
					.filter((chara) => !starkOnly || chara.lastName.includes("Star"))
					.map((character) => (
						<Card {...character} />
					))}
			</div>
		</>
	);
}
