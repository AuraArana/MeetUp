import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Moment from "react-moment";

export const Events = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let cityGroups = "";
	let NameGroups = "";
	let stateGroups = "";
	return (
		<div className="mb-5">
			<div className="container-fluid">
				<ul className="list-group">
					{store.events.map((item, index) => {
						let gr = parseInt(params.theid);

						for (let i in store.groups) {
							if (store.groups[i].ID === item.meta_keys._groupId) {
								cityGroups = store.groups[i].city;
								stateGroups = store.groups[i].state;
								NameGroups = store.groups[i].post_content;
							}
						}

						if (item.ID === gr) {
							return (
								<div key={index}>
									<div className="bg-dark text-white">
										<div className="row bg-dark text-white">
											<p className="col-md-8 ml-4 mt-3">
												<Moment style={{ fontSize: "12px" }} format="MMMM Do YYYY">
													{item.meta_keys.day}
												</Moment>
												<p style={{ fontSize: "50px" }}>{item.post_title}</p>
												<Link to={"/groups/" + item.meta_keys._groupId}>
													<p style={{ fontSize: "16px" }}>{NameGroups}</p>
												</Link>
											</p>
											<div
												className="card mb-5 mt-3"
												style={{ backgroundColor: "grey", width: 275 }}>
												<div className="card-body">
													<p className="text-center">
														<p>People Going</p>

														<center>
															<button
																type="button"
																className="btn btn-primary d-flex justify-content-center mb-3">
																Login to RSVP
															</button>
														</center>
														<p>
															<i
																className="fab fa-twitter mt-2 mr-4"
																style={{ fontSize: "30px" }}
															/>
															<i
																className="fab fa-facebook-square mt-2"
																style={{ fontSize: "30px" }}
															/>
														</p>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row container">
											<div className="col-md-9 mt-4 position-relative">
												<h1 className>
													<div
														className="centerevents d-flex justify-content-center"
														style={{ color: "grey" }}>
														800 X 500
													</div>
												</h1>
												<p className="fw-bold">Details</p>
												<p>{item.post_Description}</p>
											</div>
											<div className="col-md-3 mt-4 card" style={{ height: 200 }}>
												<p className="card-body row">
													<div className="col-2 mr-2">
														<i
															className="fas fa-clock mt-2 mr-2"
															style={{ fontSize: "30px" }}
														/>
													</div>
													<div className="col-8 ml-2">
														{" "}
														<Moment format="MMMM Do YYYY">{item.meta_keys.day}</Moment>
														<p className="d-flex justify-content-start">
															{item.meta_keys.time}
														</p>
														<p className="d-flex justify-content-start">
															{item.meta_keys.repetition}
														</p>
													</div>
												</p>
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

Events.propTypes = {
	match: PropTypes.object
};
