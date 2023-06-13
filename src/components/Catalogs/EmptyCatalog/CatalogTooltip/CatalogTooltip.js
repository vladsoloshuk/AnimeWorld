import { Link } from 'react-router-dom';
import './../../../../styles/blocks/b-catalog_entry-tooltip.scss';
import './../../../../styles/lib/tooltip.scss';
import './../../../../styles/lib/bubble.scss';


const CatalogTooltip = () => {
  return (<div className="tooltip minified">
    <div className="tooltip-inner">
      <div className="clearfix">
        <div className="close"></div>
        <div className="tooltip-details">
          <div className='b-catalog_entry-tooltip'>
            <div className='entry-tooltip_container'>
              <div className='inner'>
                <div className='line name'><Link to={""}>Name</Link></div>
                <div className='text'>Description with tooltips</div>
                <div className='line-container'>
                  <div className='line'>
                    <div className='key'>key</div>
                    <div className='value'>value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default CatalogTooltip;