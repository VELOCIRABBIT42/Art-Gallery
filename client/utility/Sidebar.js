import React from 'react';

//elementData = [[str name, func action]]
//title = str
const Sidebar = ({title, elementData}) => {
  const items = [];
  for (const element of elementData){
    items.push(
      <p key={element[0]} onClick={element[1]} className="list-group-item list-group-item-action list-group-item-light border-bottom border-3 ">{element[0]}</p>
    );
  }

  return (
    <div className="list-group list-group-flush border-end border-3 ">
      <h3 className="list-group-item list-group-item-action list-group-item-light p-3">{title}</h3>
      {items}
    </div>
  );
};
export default Sidebar;