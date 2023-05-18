import { useRef, useState } from 'react';
import './../../styles/app.scss'

const Filter = ({filter}) => {

  return (
    <aside className="l-menu">
      <div className='block'>
          <div className='subheadline'>{filter.recomendations.name}</div>
          <div className='b-list'>
          {filter.recomendations.params.map((recomendation) => (
            <li key={recomendation.title}><a href = {recomendation.link}>{recomendation.title}</a></li>
          ))}
          </div>
        </div>
      {filter.sorting.map((sortType) => (
        <div key={sortType.name} className='block'>
          <div className='subheadline'>{sortType.name}</div>
          <ul className='b-block_list'>
            {sortType.params.map((param) => (
              <li key={param.title} data-field={sortType.name} data-value={param.value} ><input data-value={param.value} type={sortType.type} onChange={sortType.method} name={sortType.name}/>{param.title}</li>
            ))}
          </ul>
        </div>
      ))}
      {/* <div className='block'>
        <div className='subheadline'>Recomendations</div>
        <div className='b-list'>
          <li><a href="https://shikimori.me/kakie-anime-postmotret">{filter.recomendations.favorites}</a></li>
          <li><a href="https://shikimori.me/kakie-anime-postmotret">{filter.recomendations.community}</a></li>
          <li><a href="https://shikimori.me/kakie-anime-postmotret">{filter.recomendations.personal}</a></li>
        </div>
      </div>
      <div className='block'>
        <div className='subheadline'>Status</div>
        <ul className='b-block_list'>
          <li data-value="anons"><input data-value="anons" onChange={changeStatusHandler} type='checkbox' />{filter.status.anons}</li>
          <li data-value="ongoing"><input data-value="ongoing" onChange={changeStatusHandler} type='checkbox' />{filter.status.ongoing}</li>
          <li data-value="released"><input type='checkbox' />{filter.status.released}</li>
        </ul>
      </div>
      <div className='block'>
      <div className='subheadline'>Sorting</div>
        <ul className='b-block_list'>
          <li><input data-value="id" onChange={changeOrderHandler} type='checkbox' />id  </li>
          <li><input data-value="ranked" onChange={changeOrderHandler} type='checkbox' />ranked</li>
          <li><input data-value="kind" onChange={changeOrderHandler} type='checkbox' />kind</li>
        </ul>
      </div> */}
    </aside>
  );
}

export default Filter;