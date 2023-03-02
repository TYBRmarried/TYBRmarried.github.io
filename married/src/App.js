
import './App.css';
import NavigationBar from './Components/NavigationBar';
import WeddingDay from './Components/WeddingDay';
import Welcome from './Components/Welcome';
import Pictures from './Components/Pictures';
import NaverMap from './Components/NaverMap';
import ShareButtonGroup from './Components/ShareButtonGroup';
import Footer from './Components/Footer';

function App() {
	return (
		<div id="App">
			<div className="container">
				<NavigationBar />
				<WeddingDay />
				<Welcome />
				<Pictures />
				<NaverMap />		
				<div className="contact" style={{height: "50px"}}>
					이 곳에는 연락처가 들어갈 곳입니다.
				</div>
				<ShareButtonGroup />
				{/* <Footer /> */}
			</div>
		</div>
	);
}

export default App;
