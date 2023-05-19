import './../../styles/app.scss'
import FilterItem from './FilterItem/FilterItem';

const Filter = ({recomendations, filter, filterParams, changeFilter}) => {
  return (
    <aside className="l-menu">
      <div className='block'>
          <div className='subheadline'>{recomendations.title}</div>
          <div className='b-list'>
          {recomendations.list.map((item) => (
            <li key={item.title}><a href = {item.link}>{item.title}</a></li>
          ))}
          </div>
        </div>
      {filter.sorting.map((sortType) => (
        <div key={sortType.name} className='block'>
          <div className='subheadline'>{sortType.name}</div>
          <ul className='b-block_list'>
            {sortType.params.map((param) => (
              <FilterItem key={param.title} sortType={sortType} param={param} changeFilter={changeFilter} filterParams={filterParams} method={filter.method}/>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Filter;