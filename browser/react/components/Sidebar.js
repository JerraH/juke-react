import React from 'react';
import { Link } from 'react-router-dom';
import NewPlaylist from './NewPlaylist.js';

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/artists">ARTISTS</Link>
        </h4>
      </section>
      <hr />
        <section>
          <h4 className="text-muted">PLAYLISTS</h4>
          <h4>
            <div className="btn btn-primary btn-block">
            <Link to="/new-playlist" >
              <span className="glyphicon glyphicon-plus"></span> PLAYLIST
            </Link>
            </div>
          </h4>
        </section>
    </sidebar>
  );
}

export default Sidebar;
