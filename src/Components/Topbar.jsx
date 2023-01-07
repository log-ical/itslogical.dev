import React from 'react';
import { TopbarData } from './TopbarData';
import '../CSS/Topbar.css';

function Topbar() {
	
	return(
		<>	
		<div className="header">
			<div className="logotext">	
\_______________________________________________________________________________________________<br/>
\_____ __ _____ __ __________ _ __________ __ ___ __ ____________________________________________<br/>
\___(_) /______/ /___&nbsp;&nbsp;____ _(_)________ _/ /____/ /__ _&nbsp;&nbsp;&nbsp;___________________________________<br/>
\__/ / __/ ___/ / __ \/ __ `/ / ___/ __ `/ // __&nbsp;&nbsp;/ _ \ | / / _____________________________<br/>
\_/ / /_(__&nbsp;&nbsp;) / /_/ / /_/ / / /__/ /_/ / // /_/ /&nbsp;&nbsp;__/ |/ / _______________<br/>
\/_/\__/____/_/\____/\__, /_/\___/\__,_/_(_)__,_/\___/|___/ __________________ <br/>         
\__________________ /____/ ___________________________________________________________________<br/>
\__________________________________________________________________________________________<br/><br/>
			</div>
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
