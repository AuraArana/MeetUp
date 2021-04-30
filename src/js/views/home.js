import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Moment from "react-moment";

//Please install
//npm install --save moment-timezone
//npm install --save moment react-moment

import "../../styles/home.scss";

export const Home = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let NameGroups = "";
	return (
		<div>
			<div className="container-fluid bg-dark text-white">
				<div className="container">
					<h2 className="d-flex justify-content-center">
						<p>The Meetup Clone</p>
					</h2>
					<p className="d-flex justify-content-center">This is a mini project create by Aura Arana</p>
					<p className="d-flex justify-content-center" style={{ fontSize: "10px" }}>
						Using: ReactJs, Bootstrap, @FontAwesome, Moment, React-router
					</p>
					<br />
				</div>
			</div>

			<div className="container d-flex justify-content-center mb-5 mt-4">
				<ul className="list-group">
					{store.events.reverse().map((item, index) => {
						for (let i in store.groups) {
							if (store.groups[i].ID === item.meta_keys._groupId) {
								NameGroups = store.groups[i].post_content;
							}
						}

						return (
							<div
								className="card mt-2 mb-2 d-flex justify-content-center "
								key={index}
								style={{ width: "400px" }}>
								<div className="card-header">
									<h5>
										<Moment format="MMMM Do">{item.meta_keys.day}</Moment>
									</h5>
								</div>
								<div className="card-body" />
								<div />
								<div className="row">
									<div className="col-md-4">
										<h5 className="card-title d-flex justify-content-center">
											{item.meta_keys.time}
										</h5>
									</div>
									<div className="col-md-8">
										<p className="card-text">
											<Link to={"/events/" + item.ID}>
												<span>{item.post_title}</span>
											</Link>
										</p>
										<p className="card-text mb-2">
											<Link to={"/groups/" + item.meta_keys._groupId}>
												<span>{NameGroups}</span>
											</Link>
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

Home.propTypes = {
	match: PropTypes.object
};
