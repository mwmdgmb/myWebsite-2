import React from 'react';



const SiteBar = (props)=> {

    return(
        <div>

            <h1 className="my-4">{props.appTitle}</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
            <div className="btn-group-sm">
                <button className="btn btn-success my-2 mr-md-2 mr-sm-1 mr-2" onClick={props.Increment}>Increment Number { props.count }</button>
                <button className="btn btn-danger" onClick={props.Decrement}>Decrement Number</button>
            </div>

        </div>
    )
}

export default SiteBar ;