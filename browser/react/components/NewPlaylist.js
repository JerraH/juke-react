import React, { Component } from 'react';

class NewPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state= {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ input: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.input);
    this.setState({
      input: ''
    });
  }


  render() {
    console.log(this.state.input);
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
                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default NewPlaylist;
