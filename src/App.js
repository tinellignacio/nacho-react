import "./App.css";
// import Header from "./components/header";
// import Body from "./components/body";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import CardWidget from "./components/cartWidget";
import ItemListContainer from "./components/itemListContainer";
import HomeWidget from "./components/homeWidget";

function App() {
	return (
		<main>
			{/* <Header /> */}
			<NavBar>
				<HomeWidget />
				<CardWidget />
			</NavBar>
			<ItemListContainer />
			{/* <Body /> */}
			<Footer />
		</main>
	);
}

export default App;

// import { useState } from "react";
// const [name, setName] = useState("Jorge");
// name={name} setName={setName}
