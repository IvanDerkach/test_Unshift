import React from 'react';
import "./UpdateModal.css";

export class UpdateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toogle: false
    };
  }

  onClickHandler = () => {
    this.setState({ toogle: !this.state.toogle });
  };

  render() {
    return (
      <>
        <button className='updateBtn' onClick={this.onClickHandler}>
          {this.state.toogle ? "Update" : "Update"}
        </button>
        {this.state.toogle && (
          <div id="modal" className='update__modal'>
            <div className='update__modal_content'>
              <input className='modal__input' type="text" value={this.props.body}/>
              <button className="modal_edit" onClick={this.onClickHandler}>
                {this.state.toogle ? "Edit" : "Update"}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
