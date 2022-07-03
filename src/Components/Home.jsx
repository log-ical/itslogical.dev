import React from 'react'
import '../CSS/Home.css'

function Home() {
    return (
        <>
        <div className="main_content">
            <div className="content_home">
                <div className="profile">
                    <samp>
                        Hello I'm <h1>Ryan</h1>
                        <br></br>
                        <div className="description">
                            A self-taught developer and an aspiring computer science teacher with a fascination with programming, linguistics, and math.<br/><br/>
                            <h3>Things I Know</h3>
                            	<a href="https://www.typescriptlang.org/">TypeScript</a><br/>
                            	<a href="https://www.javascript.com/">JavaScript</a><br/>
                            	<a href="https://www.java.com/en/">Java</a><br/>
                                <a href="https://github.com/alliedmodders/sourcepawn">SourcePawn</a><br/>
                            	<a href="https://nodejs.org/">Node.js</a><br/>
                                <a href="https://reactjs.org/">React.js</a><br/>
                            	<a href="https://www.mysql.com/">MySQL</a><br/>
                            	<br/>
                            <h3> Things I'm Learning </h3>
                            	<a href="https://www.rust-lang.org/">Rust</a><br/>
                                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a><br/>
                                <br/>
                            <h3> Things I Don't Know But Want To Learn </h3>
                                <a href="https://go.dev/">Go</a><br/>
                            	<a href="https://julialang.org/">Julia</a><br/>
                            	<br/>
                        </div>
                        <br/><br/>
                        <h3>Awards and Certifications</h3>
                        Javascript LinkedIn Skill Assessment badge (top 5% of 1.9M people)<br/>
                        HTML LinkedIn Skill Assessment badge (top 15% of 2.9M people)<br/>
                        CSS LinkedIn Skill Assessment badge (top 5% of 1.5M people)<br/>
                        Front-End Development LinkedIn Skill Assessment badge (top 5% of 637.0k people)<br/><br/>

                        <h2>Learn more about me <a href="/about">here</a>.</h2>
                    </samp>
                </div>
            </div>
        </div>
        </>
    )
}


export default Home