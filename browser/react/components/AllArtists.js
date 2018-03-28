import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {

  constructor () {
    super();
    this.state = {
      artists: [],
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({ artists }));
  }

  handleChange(event){
    this.setState({ searchValue: event.target.value });
    //filtering the artists by the searchValue

  }

  render () {

    //CURRENT ISSUEEEEEE
    let mySearch= new RegExp(this.state.searchValue, "i");

    const artists = this.state.artists.filter(artist => artist.name.match(mySearch) ? artist.name : null);

    //Ok this is currently giving us all the things that do NOT match the value provided :'D so if you put in "b" it gives you everything that does not have a b.

    console.log(artists);

    return (
      <div>
        <form action="" className="form-group">
            <input type="text" className="form-control"
            placeholder='Enter artist name' onChange={this.handleChange} />
        </form>
        <h3>Artists</h3>
        <div className="list-group">
          {

            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
