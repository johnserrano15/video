import React, { Component } from 'react';
import Media from './media.js';
import './playlist.sass';

// Un component funcional no tiene ciclo de vida
function PlayList(props) {
  const playlist = props.data.categories[0].playlist;
  const playlist_2 = props.data.categories[1].playlist;
  console.log(props.data);
  return (
    <div>
      <section className="Playlist">
        {
          playlist.map((item) => {
            // return <Media title={item.title} key={item.id} />
            return <Media {...item} key={item.id} />
          })
        }
      </section>
      <section className="Playlist">
        {
          playlist_2.map((item) => {
            // return <Media title={item.title} key={item.id} />
            return <Media {...item} key={item.id} />
          })
        }
      </section>
    </div>
  )
}

/*class PlayList extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist;
    const playlist_2 = this.props.data.categories[1].playlist;
    console.log(this.props.data);
    return (
      <div>
        <section className="Playlist">
          {
            playlist.map((item) => {
              // return <Media title={item.title} key={item.id} />
              return <Media {...item} key={item.id} />
            })
          }
        </section>
        <section className="Playlist">
          {
            playlist_2.map((item) => {
              // return <Media title={item.title} key={item.id} />
              return <Media {...item} key={item.id} />
            })
          }
        </section>
      </div>
    )
  }
}*/

export default PlayList;
