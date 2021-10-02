import React from 'react'
import { Mapping, Guides } from './HomeData'
import '../CSS/Home.css'

function Home() {
    return (
        <>
        <div className="main_content">
            
            <div class="content">

            <h3>Tools</h3>
                <h4>Mapping</h4>
                    <div className="map">
                        {Mapping.map(MappingFunc)}
                    </div>
                    
            <h3>Guides</h3>

                <h4>Mapping</h4>
                    <div id="map2" class="map2">
                        {Guides.map(GuideFunc)}      
                    </div>
            </div>
        </div>
        </>
    )
}

function MappingFunc(val, key)
{
    return(
        <>
            <a  href={val.link}
                target="_blank"
                id="link">
            {val.title}
            </a>
            <p>{val.description}</p>
        </>
    )
}

function GuideFunc(val, key)
{
    return(
        <>
            <a  href={val.link}
                target="_blank"
                id="link">
            {val.title}
            </a>
            <p>{val.description}</p>
        </>
    )
}


export default Home