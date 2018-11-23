import React from 'react';

function isSearched(searchTerm) {
  return function(item) {
    return item.last_name.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

const Table = ({ list, pattern, onDismiss }) => 
<div className="table">
{list.filter(isSearched(pattern)).map(item => (
  <div key={item.id} className="table-row">
    <span style={{ width: '40%' }}>
      <a href={item.thumbnail}>{item.last_name}</a>
    </span>
    <span style={{ width: '30%' }}>{item.first_name}</span>
    <span style={{ width: '10%' }}>{item.weight_class}</span>
    <span style={{ width: '10%' }}>{item.wins}</span>
    <span style={{ width: '10%' }}>{item.nickname}</span>
    <span style={{ width: '10%' }}>
      <Button onClick={() => onDismiss(item.id)} className="button-inline">Dismiss</Button>
    </span>
  </div>
))}
</div>

const Button = ({ onClick, className = "", children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);
 
export default Table;