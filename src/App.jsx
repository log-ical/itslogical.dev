import './App.css';
import React from 'react'
import Sidebar from './Components/Topbar';
import Resources from './Components/Resources';
//import Home from '../archive/Home'
import HTML404 from './Components/404';
import LanGuide from './Components/CSSLanGuide';
import ServerBuilder from './Components/ServerBuilder';
//import AboutMe from '../archive/AboutMe';
//import Projects from '../archive/Projects';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



function Redirect({url}) {
	React.useEffect(() => {
	  const timeout = setTimeout(() => {
		window.location.href = url;
	  }, 1000);
	  return () => clearTimeout(timeout);
	}, []);
  
	return <>Redirecting...</>;
  }

function App(){
	return(
		<>
		<Sidebar></Sidebar>
		<div className="main">
      		<BrowserRouter>
      		  	<Routes>
					<Route path="/" element={<Redirect url="http://itslogical.dev/"/>}/>
					<Route path="/about" element={<Redirect url="http://itslogical.dev/#about"/>}/>
					<Route path="/projects" element={<Redirect url="http://itslogical.dev/#projects"/>}/>

					<Route path="/resources" element={<Resources/>}/>
					<Route path="/lan" element={<LanGuide/>}/>
					<Route path="/builder" element={<ServerBuilder/>}/>

					
					<Route exact path="/server/maps/.index.php"/>
					<Route element={<HTML404/>}></Route>
      		  	</Routes>
      		</BrowserRouter>
    	</div>
		</>
	)
}

export default App;