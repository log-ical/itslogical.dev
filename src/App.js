import './App.css';
import Sidebar from './Components/Topbar';
import Home from './Components/Home'
import HTML404 from './Components/404';
import LanGuide from './Components/CSSLanGuide';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
	const reload = () => window.location.reload();
	return(
		<>
		<Sidebar></Sidebar>
		<div className="main">
      		<Router>
      		  	<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/lan" component={LanGuide}/>
					<Route exact path="/server/maps/.index.php"/>
					<Route component={HTML404}></Route>
      		  	</Switch>
      		</Router>
    	</div>
		</>
	)
}

export default App;