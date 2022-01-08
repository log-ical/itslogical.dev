import React from 'react';
import { TopbarData } from './TopbarData';
import '../CSS/Topbar.css';

function Topbar() {
	return(
		<>	
		<center>
		<div className="header">
			<pre className="logotext" 
			>		

    _ __       __            _            __     __         <br/>
   (_) /______/ /___  ____ _(_)________ _/ /____/ /__ _   __<br/>
  / / __/ ___/ / __ \/ __ `/ / ___/ __ `/ // __  / _ \ | / /<br/>
 / / /_(__  ) / /_/ / /_/ / / /__/ /_/ / // /_/ /  __/ |/ / <br/>
/_/\__/____/_/\____/\__, /_/\___/\__,_/_(_)__,_/\___/|___/  <br/>                   /____/                                   <br/>




			</pre>
			<div className="TopbarContainer">
				<div className="TopbarList">
					{TopbarData.map((val) => {
						return(
							<>
							<a	
								key={val.title} 
								className="tab" 
								id={window.location.pathname === val.link ? 'active' : ''}
								href={val.link}
								target={externalLink(val.key)}
							>
								{val.title}
							</a>
							&ensp;
							</>
						)
					})}
				</div>
			</div>
		</div>
		</center>
		</>
	)	
}



function externalLink(key)
{
	if(key == 1)
		return "";
	else if (key == 2)
		return "_blank";
}
export default Topbar;
