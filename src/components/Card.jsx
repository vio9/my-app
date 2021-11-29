import React from "react";

export default function Card({ firstName, lastName, title, imageUrl }) {
	return (
		<div className="character-wrapper">
			<h2>
				{firstName} {lastName}
			</h2>
			<img className="cw-img" src={imageUrl} alt="personnage portrait" />
			<p>{title}</p>
		</div>
	);
}
