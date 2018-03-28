import React, { Component } from 'react';

class NewPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state= {
      input: '',
      disabled: true,
      beenEdited: false,
      beenEmptied: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      input: event.target.value,
      beenEdited: true
    });


    if (16 >= event.target.value.length >= 1 ) {
      this.setState({disabled: false})
    } else if (event.target.value.length >= 16) {
      this.setState({
        disabled: true
      })
    } else if (beenEdited && this.state.input.length <= 1) {
      this.setState({
        beenEmptied: true,
        disabled: true
      })
    }
    console.log(this.beenEdited, this.beenEmptied)
  }

  handleSubmit(event){
    event.preventDefault();
    if (!this.state.disabled) {
      console.log(this.state.input);
      this.setState({
        input: '',
        disabled: true
      });
    }
  }


  render() {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" placeholder="enter playlist title" value={this.state.input} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className={"btn btn-success " + (this.state.disabled ? 'disabled' : null) } onClick={this.handleSubmit}>Create Playlist</button>
                <br />

                <div className={"alert alert-warning " + (this.state.input.length > 16 ? null : 'hidden')}>Playlist title must be shorter than 16 characters</div>

                <div className={"alert alert-warning " + (this.state.beenEdited && this.state.input.length === 0 ? 'visible' : 'hidden')}>Please enter a playlist name
                </div>
              </div>

            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NewPlaylist;
