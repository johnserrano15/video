import React from 'react';
import Category from './category';
import './categories.sass';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.isLoading &&
        <p>Buscando tus videos....</p>
      }
      {
        props.search.map((item) => {
          // return <Media {...item} key={item.id} />
          return (
            <Media
              openModal={props.handleOpenModal}
              title={item.get('title')}
              author={item.get('author')}
              type={item.get('type')}
              cover={item.get('cover')}
              src={item.get('src')}
              id={item.get('id')}
              key={item.get('id')} 
            />
          )
        })
      }
      {
        props.categories.map((item) => {
          return (
            <Category 
              key={item.get('id')} 
              {...item.toJS()} // se recomienda pasar los datos uno por uno cuando son immutables y no toJS()
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories;
