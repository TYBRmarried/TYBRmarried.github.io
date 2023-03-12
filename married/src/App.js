
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import WeddingDay from './Components/WeddingDay';
import Welcome from './Components/Welcome';
import Calendar from './Components/Calendar';
import Pictures from './Components/Pictures';
import NaverMap from './Components/NaverMap';
import CoupleInfo from './Components/CoupleInfo';
import ShareButtonGroup from './Components/ShareButtonGroup';
import Footer from './Components/Footer';

function App() {
	return (
		<div id="App">
			<div className="container">
				<NavigationBar />
				<WeddingDay />
				<Welcome />
				<Calendar />
				<Pictures />
				<NaverMap />		
				<CoupleInfo />
				<ShareButtonGroup />
				<Footer />
				{/* <div style={{height: "100px"}}></div> */}
			</div>
		</div>
	);
}

export default App;
