import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import WhiteLogo from "../../img/WhiteLogo.png";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark text-white ">
				<Link to={"/"} className="sidebar-brand d-flex align-items-center justify-content-center">
					<div className="sidebar-brand-icon">
						<img src={WhiteLogo} style={{ width: 150, height: 53 }} />
					</div>
				</Link>
				<div className="ml-auto text-dark">
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
						Login
					</button>

					<div
						className="modal fade text-dark"
						id="exampleModal"
						role="dialog"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title  text-dark" id="exampleModalLabel">
										Login
									</h5>
								</div>
								<div className="modal-body text-dark">
									<div className="row">
										<div className="col-md-5">
											<div className="input-group mb-3">
												<input
													type="text"
													className="form-control"
													placeholder="Username"
													aria-label="Username"
													aria-describedby="basic-addon2"
												/>
												<div className="input-group-append">
													<span className="input-group-text" id="basic-addon2">
														<i className="fas fa-user" />
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-5">
											<div className="input-group mb-3">
												<input
													type="text"
													className="form-control"
													placeholder="Password"
													aria-label="Password"
													aria-describedby="basic-addon2"
												/>
												<div className="input-group-append">
													<span className="input-group-text" id="basic-addon2">
														<i className="fas fa-key" />
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">
										Close
									</button>
									<button type="button" className="btn btn-primary">
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
