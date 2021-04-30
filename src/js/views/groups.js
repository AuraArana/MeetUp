import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Moment from "react-moment";

export const Groups = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let cityGroups = "";
	let NameGroups = "";
	let stateGroups = "";
	let gr = parseInt(params.theid);

	for (let i in store.groups) {
		if (store.groups[i].ID === gr) {
			cityGroups = store.groups[i].city;
			stateGroups = store.groups[i].state;
			NameGroups = store.groups[i].post_content;
		}
	}

	return (
		<div>
			<div className="container-fluid bg-dark text-white">
				<div className="container" />
				<div className="row">
					<div className="col-md-6 d-flex justify-content-center mb-3">
						<h1>
							<div className="col-md-12 center mt-3" style={{ color: "grey" }}>
								600 X 350
							</div>
						</h1>
					</div>
					<p className="col-md-6">
						<p style={{ fontSize: "30px" }}>{NameGroups}</p>
						<p style={{ fontSize: "14px", color: "darkgrey" }}>Location</p>
						<p style={{ fontSize: "18px" }}>
							{cityGroups} , {stateGroups}
						</p>
					</p>
				</div>
			</div>

			<div className="container d-flex justify-content-center mb-5">
				<ul className="list-group">
					<p className="ml-2 mt-2">Next Events</p>
					{store.events.reverse().map((item, index) => {
						if (item.meta_keys._groupId === gr) {
							return (
								<div key={index}>
									<div className="container">
										<div
											className="card mt-2 mb-2 d-flex justify-content-center "
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
														<Link to={"/events/" + item.meta_keys._groupId}>
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
									</div>
								</div>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};

Groups.propTypes = {
	match: PropTypes.object
};
