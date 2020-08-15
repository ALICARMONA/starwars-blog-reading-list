import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import placeHolder from "../../img/300.png";
import "../../styles/home.scss";

export function CardPlanet() {
	const { store, actions } = useContext(Context);
	const { detailsId } = useParams();

	return (
		<>
			{store.planets.map((planeta, id) => {
				if (id === parseInt(detailsId)) {
					return (
						<>
							<div key={id} className="margen">
								<div className="d-flex flex-column ">
									<div className="m-3 d-flex justify-content-center ">
										<img src={placeHolder} width="500px" height="500px" />
									</div>
									<div className="text-center">
										<h1>{planeta.name}</h1>
										<p className="m-3">
											{
												"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
											}
										</p>
									</div>
								</div>
								<div style={{ width: "1200px", height: "2px" }} className="m-5 bg-dark container" />
								<div className="d-flex justify-content-between container">
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Periometro de rotacion</strong>
										</p>
										<p className="text-dark">{planeta.rotation_period}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Gravedad</strong>
										</p>
										<p className="text-dark">{planeta.gravity}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Terreno</strong>
										</p>
										<p className="text-dark">{planeta.terrain}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>poblacion</strong>
										</p>
										<p className="text-dark">{planeta.population}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Clima</strong>
										</p>
										<p className="text-dark">{planeta.climate}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Superficie de agua</strong>
										</p>
										<p className="text-dark">{planeta.surface_water}</p>
									</div>
								</div>
							</div>
						</>
					);
				}
			})}
		</>
	);
}
