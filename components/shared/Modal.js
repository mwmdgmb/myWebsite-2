import React from 'react';



const Modal = ()=>{

    let closeButtonModal = null ;

    const submitModal = ()=>{
        alert('ssss')
        closeButtonModal.click()
    };
    return(
        <React.Fragment>
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                Create Movie
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" id="description"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Ratting">Ratting</label>
                                    <input type="number" max={5} min={0} className="form-control" id="Ratting"/>
                                    <small id="emailHelp" className="form-text text-muted" defaultValue="3">Max: 5 , Min: 0</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Image">Image</label>
                                    <input type="text" className="form-control" id="Image" placeholder="https://...."/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="LDescription">Long Description</label>
                                    <input type="text" className="form-control" id="LDescription"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Genre">Genre</label>
                                    <select multiple className="form-control" id="Genre">
                                        <option>drama</option>
                                        <option>action</option>
                                        <option>history</option>
                                        <option>fantasy</option>
                                    </select>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={(ele)=> closeButtonModal = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button  type="button" onClick={submitModal} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Modal;