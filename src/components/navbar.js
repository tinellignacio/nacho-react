import CardWidget from "./cartWidget";
// import HomeWidget from "./homeWidget";

function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
				<div class="container-fluid">
					<a className="navbar-brand" href="index.html">
						Home
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarNav"
					>
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link" href="productos.html">
									Productos
								</a>
							</li>
							<li class="nav-item">
								<CardWidget />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
