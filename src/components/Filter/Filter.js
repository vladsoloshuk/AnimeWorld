import './../../styles/app.scss'

const Filter = ({filter}) => {
  return (
    <aside className="l-menu">
      <div>
        <div>Recomendations</div>
        <ul>
          <li>{filter.recomendations.favorites}</li>
          <li>{filter.recomendations.community}</li>
          <li>{filter.recomendations.personal}</li>
        </ul>
      </div>
      <div>
        <div>Status</div>
        <ul>
          <li><input type='checkbox' />{filter.status.anons}</li>
          <li><input type='checkbox' />{filter.status.ongoing}</li>
          <li><input type='checkbox' />{filter.status.released}</li>
        </ul>
      </div>
    </aside>
  );
}

export default Filter;