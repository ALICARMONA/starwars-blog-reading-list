import React, { useContext } from "react";
import "../../styles/home.scss";
import ItemCard from "../component/ItemCard";

export const Home = () => {
	return (
		<div className="container">
			<div className="card">
				<img className="card-img-top" src="/images/pathToYourImage.png" alt="card-img-top" />
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">Some quick example text</p>
					<a href="#!" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
