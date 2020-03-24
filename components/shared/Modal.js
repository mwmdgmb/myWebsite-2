import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButtonModal = null;
  }
  closeModal = () => {
    this.closeButtonModal.click();
  };
  submitModal = () => {
    alert("ssss");
    this.closeModal();
  };
  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Movie
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  ref={ele => (this.closeButtonModal = ele)}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button
                    type="button"
                    onClick={this.submitModal}
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
