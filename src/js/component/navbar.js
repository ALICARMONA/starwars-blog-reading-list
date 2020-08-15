import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starIcon from "../../img/staricon.png";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src={starIcon} className="nav-icon" alt="star" width="50" height="50" />
					</span>
				</Link>

				<DropdownButton id="dropdown-basic-button" title={"Favorites " + store.favorites.length}>
					{store.favorites.map((favorites, id) => {
						return (
							<>
								<Dropdown.ItemText key={id} className="d-flex justify-content-between">
									<a>{favorites.favorito}</a>
									<i className="fas fa-trash-alt m-2" onClick={e => actions.deleteFavorite(e, id)} />
								</Dropdown.ItemText>
							</>
						);
					})}
				</DropdownButton>
			</nav>
		</>
	);
};
