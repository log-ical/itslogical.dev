import React from 'react';
import '../CSS/404.css';

export default HTTP404;

function HTTP404() {
	return(
		<>	
		<center>

		{window.onload = function(ev) {
			for(let i=0; i<20; ++i)
			{
				let div = document.createElement('div');
				div.innerHTML = "404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found ";
				div.classList.add("main-content");
				document.body.appendChild(div);
			}
		}
		}
		{window.onscroll = function(ev) {
    	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       			let div = document.createElement('div');
				   div.innerHTML = "404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found 404 Not Found ";
				div.classList.add("main-content");
				document.body.appendChild(div);
    		}
		}}
		</center>
		</>
	)	
}


