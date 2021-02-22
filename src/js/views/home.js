import React from "react";
import { Peoplecards } from "./Peoplecards";
import { Planetscards } from "./Planetscards";
import "../../styles/home.scss";
import planeta from "../../img/planeta.png";
import personaje from "../../img/personaje.png";

export const Home = () => (
	<div className="container">
		<div className="character">
			<img src={personaje} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Characters</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Peoplecards />
			</div>
		</div>
		<div className="planeta">
			<img src={planeta} width="90rem" />
			<h1 className="fw-bold text-uppercase mt-4 mb-3">Planets</h1>
		</div>
		<div className="row d-flex">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<Planetscards />
			</div>
		</div>
	</div>
);
