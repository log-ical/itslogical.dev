import './App.css';
import Sidebar from './Components/Topbar';
import Resources from './Components/Resources';
import Home from './Components/Home'
import HTML404 from './Components/404';
import LanGuide from './Components/CSSLanGuide';
import ServerBuilder from './Components/ServerBuilder';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
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
					<Route path="/resources" component={Resources}/>
					<Route path="/lan" component={LanGuide}/>
					<Route path="/builder" component={ServerBuilder}/>
					<Route path="/about" component={AboutMe}/>
					<Route path="/projects" component={Projects}/>
					<Route exact path="/server/maps/.index.php"/>
					<Route component={HTML404}></Route>
      		  	</Switch>
      		</Router>
    	</div>
		</>
	)
}

export default App;