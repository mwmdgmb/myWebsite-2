import React from 'react';
import Modal from "./Modal";


const SiteBar = (props)=> {
    const {category , loading} = props ;
    return(
        <div>
            <Modal />
            <h1 className="my-4">{props.appTitle}</h1>
            {loading ? (<div className="list-group">
                {category.map(c=> <a
                    key={c.id}
                    href="#"
                    className="list-group-item"
                >
                    {c.name}
                </a>)}
            </div>) : (<div className="card p-5">
                <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>)}

        </div>
    )
}

export default SiteBar ;