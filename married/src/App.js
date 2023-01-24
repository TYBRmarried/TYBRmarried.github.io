
import './App.css';
import NavigationBar from './Components/NavigationBar';
import WeddingDay from './Components/WeddingDay';
import Welcome from './Components/Welcome';
import Pictures from './Components/Pictures';
import Footer from './Components/Footer';

function App() {
	return (
		<div id="App">
			<div className="container">
				<NavigationBar />
				<WeddingDay />
				<Welcome />
				<Pictures />
				<Footer />
			</div>
		</div>
	);
}

export default App;
