import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import placeHolder from "../../img/300.png";
import "../../styles/home.scss";

export function CardPersonaje() {
	const { store, actions } = useContext(Context);
	const { detailsId } = useParams();

	return (
		<>
			{store.people.map((personaje, id) => {
				if (id === parseInt(detailsId)) {
					return (
						<>
							<div key={id} className="margen">
								<div className="d-flex flex-column">
									<div className="m-3 d-flex justify-content-center">
										<img src={placeHolder} width="500px" height="500px" />
									</div>
									<div className="text-center">
										<h1>{personaje.name}</h1>
										<p className="m-3">
											{
												"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
											}
										</p>
									</div>
								</div>
								<div style={{ width: "1200px", height: "2px" }} className="m-5 bg-dark container" />
								<div className="d-flex justify-content-between container">
									<div className="text-danger text-center m-3">
										<p className="text-danger">
											<strong>Name</strong>
										</p>
										<p className="text-dark">{personaje.name}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Birth Year</strong>
										</p>
										<p className="text-dark">{personaje.birth_year}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Gender</strong>
										</p>
										<p className="text-dark">{personaje.gender}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Height</strong>
										</p>
										<p className="text-dark">{personaje.height}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Skin Color</strong>
										</p>
										<p className="text-dark">{personaje.skin_color}</p>
									</div>
									<div className="text-dark text-center m-3">
										<p className="text-dark">
											<strong>Eye Color</strong>
										</p>
										<p className="text-dark">{personaje.eye_color}</p>
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
