import React, { useContext, useEffect } from "react";
import placeHolder from "../../img/300.png";
import "../../styles/home.scss";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	// El fetch se ejecuta despues del renderizado
	useEffect(() => {
		actions.fetchPersonajes();
		actions.fetchPlanets();
		actions.fetchvehicles();
	}, []);

	return (
		<>
			{/* Grupo de cards que muestran personajes */}
			<h1 className="text-dark ml-2 my-2 margen">Personajes</h1>
			<div className="">
				<CardGroup className="card-group-scroll">
					{store.people.map((personajes, id) => (
						<Card key={id} style={{ width: "100px" }} className="m-4 card">
							<Card.Img variant="top" src={placeHolder} />
							<Card.Body>
								<Card.Title>{personajes.name}</Card.Title>
								<Card.Text>{`Genero: ${personajes.gender}`}</Card.Text>
								<Card.Text>{`Color de Pelo: ${personajes.hair_color}`}</Card.Text>
								<Card.Text>{`Color de Ojos: ${personajes.eye_color}`}</Card.Text>
								<Button
									className="m-2"
									variant="outline-primary"
									onClick={e => history.push(`/cardPersonaje/${id}`)}>
									Ver Detalles
								</Button>
								<Button
									variant="outline-success"
									onClick={e => actions.addFavorites(e, personajes.name)}>
									Like
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</div>
			{/* Grupo de cards que muestran Planetas */}
			<h1 className="text-dark ml-4">Planetas</h1>
			<div className="">
				<CardGroup className="card-group-scroll">
					{store.planets.map((planets, id) => (
						<Card key={id} style={{ width: "18rem" }} className="m-4 card">
							<Card.Img variant="top" src={placeHolder} />
							<Card.Body>
								<Card.Title>{planets.name}</Card.Title>
								<Card.Text>{`Poblacion: ${planets.population}`}</Card.Text>
								<Card.Text>{`Terreno: ${planets.terrain}`}</Card.Text>
								<Button
									className="m-2"
									variant="outline-primary"
									onClick={e => history.push(`/cardPlanet/${id}`)}>
									Ver Detalles
								</Button>
								<Button variant="outline-success" onClick={e => actions.addFavorites(e, planets.name)}>
									Like
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</div>
			{/* Grupo de cards que muestran vehiculos */}
			<h1 className="text-dark ml-4">Vehiculos</h1>
			<div className="justify-content-center">
				<CardGroup className="card-group-scroll ">
					{store.vehicles.map((vehicles, id) => (
						<Card key={id} style={{ width: "18rem" }} className="m-4 card">
							<Card.Img variant="top" src={placeHolder} />
							<Card.Body>
								<Card.Title>{vehicles.name}</Card.Title>
								<Card.Text>{`Tripulacion: ${vehicles.crew}`}</Card.Text>
								<Card.Text>{`Modelo: ${vehicles.model}`}</Card.Text>
								<Card.Text>{`Capacidad: ${vehicles.cargo_capacity}`}</Card.Text>
								<Button
									className="m-2"
									variant="outline-primary"
									onClick={e => history.push(`/cardVehiculo/${id}`)}>
									Ver Detalles
								</Button>
								<Button variant="outline-success" onClick={e => actions.addFavorites(e, vehicles.name)}>
									Like
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			</div>
		</>
	);
};
