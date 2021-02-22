import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// CAMBIAR NOMBRE FUNCION
export const Infoplanets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron bg-transparent">
			<div className="row">
				<div className="col-6">
					{/* CAMBIAR URL */}
					<img src="https://media.wired.com/photos/5955b6d796d7ef123a1d4300/master/w_1600%2Cc_limit/ForceAwakens5.gif" />
				</div>
				<div className="col-6 text-center">
					{/* CAMBIAR NOMBRE FUNCION QUE ES LO QUE HAY EN PLANETA .MAP */}
					<h1 className="display-4">{store.planetsarray[params.theid].name}</h1>
					<p>A planet far far away...</p>
				</div>
			</div>
			<hr className="my-4 bg-warning" />
			<div className="row">
				<div className="col-2 text-center">
					<h2>Name</h2>
					{/* IGUAL QUE AQUÍ Y EN LOS OTROS */}
					<p>{store.planetsarray[params.theid].name}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Climate</h2>
					<p>{store.planetsarray[params.theid].climate}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Population</h2>
					<p>{store.planetsarray[params.theid].population}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Orbital Period</h2>
					<p>{store.planetsarray[params.theid].orbital}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Rotation Period</h2>
					<p>{store.planetsarray[params.theid].Rotation}</p>
				</div>
				<div className="col-2 text-center">
					<h2>Diameter</h2>
					<p>{store.planetsarray[params.theid].Diameter}</p>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<Link to="/">
					<span className="btn btn-warning btn-lg" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

// NOMBRE DEL COMPONENTE
Infoplanets.propTypes = {
	match: PropTypes.object
};
