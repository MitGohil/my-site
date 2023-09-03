import React from 'react'
import Apichild from './16.1Apichild';

const Api = () => {
    return ( 
        <>
            <h1>API</h1>
            <h2>Application Programming Interface</h2>
            <p>Work as a mediator </p>
            <p>API connect backend and front-end</p>
            <p>Eroro code - 402, 403, 404 front-end error   </p>
            <p>API always in JSON (JavaScript Object Notation) formate</p>
            <p>JSON formate :- One array have multiple object. [{ }, { }, { }]</p>
            <p>API has 3 request</p>
            <p><b>API get :-</b> get data</p>
            <p><b>API post :-</b> send data</p>
            <p><b>API edit :-</b> edit data</p>
            <p>Get API using fetch, after API fetch use promise then()</p>

            <Apichild />
        </>
     );
}
 
export default Api;