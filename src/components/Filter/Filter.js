import './../../styles/app.scss'
import FilterItem from './FilterItem/FilterItem';

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
              <FilterItem sortType={sortType} param={param}/>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Filter;