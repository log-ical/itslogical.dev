import React from 'react'
import { Mapping, Guides } from './ResourceData'
import '../CSS/Resources.css'

function Resources() {
    return (
        <>
        <div className="main_content">
            
            <div className="content_resources">

                <h3>Tools</h3>
                    <h4>Mapping</h4>
                        <div className="map">
                            {Mapping.map(MappingFunc)}
                        </div>

                <h3>Guides</h3>

                    <h4>Mapping</h4>
                        <div id="map2" className="map2">
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


export default Resources