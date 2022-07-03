import React from 'react';
import '../CSS/AboutMe.css';
import { Timeline, TimelineData } from './AboutMeData';

export default AboutMe;

function AboutMe() {
    const [showData, setShowData] = React.useState(Array(TimelineData.length).fill(false));
    
    const [animate, setAnimate] = React.useState(Array(TimelineData.length).fill('FadeOut'));

    let mousePosition = {
        x: 0,
        y: 0
    };

    const mouseDown = (e) =>{
        mousePosition.x = e.screenX;
        mousePosition.y = e.screenY;
    }
      

    const handleExpand = (e, i) => {
        if (
            mousePosition.x !== e.screenX &&
            mousePosition.y !== e.screenY
        )  
            return;
        const ani = [...animate];
        ani[i] === '' ? ani[i] = 'FadeOut' : ani[i] = '';
        setAnimate(ani)
        if(animate[i] === "")
        {
            //TODO: Will invert transition animations if clicked faster than timeout time. Fix this later.
            setTimeout(() => {
                const data = [...showData];
                data[i] = !data[i];
                setShowData(data);
            }, 295); 
        }
        else{
            const data = [...showData];
            data[i] = !data[i];
            setShowData(data);
        }
    };
	return(
		<>	
		<div className="container_aboutme">
            <div className="timeline">
                <h2>Who am I?</h2>
                That's a great question that I'm glad <sup><b>you</b></sup> asked!<br/><br/>

                My name is Ryan!<br/>
                I enjoy doing a little bit of everything in my free time. I play lacrosse. I play guitar. I make music sometimes. I like cars, especially the cool, fast, and loud ones. I enjoy learning foreign languages and linguistics in general. <br/>
                I love learning and trying out new things. I do feel that everyone should be able to learn more and enjoy it too, which is partially the reason why I wish to go to college and study education and computer science. Computer science is a field which has always interested me and with it's continuous growth with new technologies and advancements into our everyday world, it makes it more important than ever before for all of us to explore.
                 <br/><br/><br/><br/>

            </div>
            <div className="timeline">
                <h2>Programming Timeline</h2>   
                <samp>Click to expand</samp><br/>
                <sub>Not all projects and or contributions have been listed below. These are snippets of things I've done over time.</sub>
                {Timeline.map((events)=>{
                    return(
                        <>
                        <a onMouseDown={mouseDown} onClick={(e) => handleExpand(e, events.id)} >
                            <div className="timeline_outside">
                                <div className="timeline_container"> 
                                    <div className='timeline_title'>
                                        {events.title}
                                    </div> 
                                    <div className='timeline_subtitle'>
                                        {events.subtitle}
                                    </div>
                                    {showData[events.id] && TimelineData.filter(x => x.id==events.id).map((val)=>{
                                        return(
                                        <>
                                            <div className="timeline_event" animate={animate[events.id]}>
                                                <div className="timeline_event_title">
                                                    <h2>{val.title}</h2>
                                                </div>
                                                <div className="timeline_event_subtitle">
                                                    {val.subtitle}
                                                </div>
                                                <div className='timeline_event_content'>
                                                    {val.text}
                                                </div>
                                            </div>
                                        </>
                                        )
                                    })}
                                    
                                </div>  
                            </div>
                        </a>
                        </>
                    )
                })}
            </div>
		</div>
		</>
	)	
}


