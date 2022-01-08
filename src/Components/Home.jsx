import React from 'react'
import '../CSS/Home.css'

function Home() {
    return (
        <>
        <div className="main_content">
            <div className="content">
                <div className="profile">
                    <samp>
                        Hello I'm <h1>Ryan W.</h1>
                        <br></br>
                        <div className="description">
                            Self-taught New York developer in high school that has a fascination with programming, languages, and math.<br></br>
                            <h4>Tools and languages I know:</h4>
		                    <a href="https://www.typescriptlang.org/">TypeScript</a><br></br>
		                    <a href="https://www.javascript.com/">JavaScript</a><br></br>
                            <a href="https://github.com/alliedmodders/sourcepawn">SourcePawn</a><br></br>
		                    <a href="https://nodejs.org/">Node.js</a><br></br>
                            <a href="https://reactjs.org/">React.js</a><br></br>
		                    <a href="https://www.mysql.com/">MySQL</a> <br></br>
                            <br></br>
                            <h4> Learning </h4>
		                    <a href="https://www.rust-lang.org/">Rust</a><br></br>
                            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a><br></br>
                            <br></br>

                        </div>
                    </samp>
                </div>
            </div>
        </div>
        </>
    )
}


export default Home