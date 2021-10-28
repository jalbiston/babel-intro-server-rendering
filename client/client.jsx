import React from 'react';
import ReactDom from 'react-dom';

const App =()=>(
    <div>
        This is a React component!
    </div>
)

ReactDOM.render(< App/>, document.querySelector("#Container"));