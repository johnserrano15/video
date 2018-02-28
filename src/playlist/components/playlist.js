import React, { Component } from 'react';
import Media from './media.js';
import './playlist.sass';
// import Play from '../../icons/components/play';
// import Pausa from '../../icons/components/pausa';
// import Volumen from '../../icons/components/volumen';
// import Full from '../../icons/components/full';

// Un component funcional no tiene ciclo de vida
function PlayList(props) {
  // const playlist = props.data.categories[0].playlist;
  // const playlist_2 = props.data.categories[1].playlist;
  // console.log(props.data);
  return (
    <div>
     {/* <Play 
        size={50}
        color="red"
      />
      <Pausa
        size={50}
        color="red"
      />
      <Volumen 
        size={50}
        color="red"
      />
      <Full 
        size={50}
        color="red"
      />*/}
      <section className="Playlist">
        {
          props.playlist.map((item) => {
            // return <Media title={item.title} key={item.id} />
            return (
              <Media 
                {...item} 
                key={item.id}
                openModal={props.handleOpenModal}
              />
            )
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
