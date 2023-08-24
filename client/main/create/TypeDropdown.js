import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";//Required for bootstrap dropdowns


const TypeDropdown = ({setterFunction, value, options})=>{
  const optionsList = [];
  
  for (const option of options){
    optionsList.push((<li key={option}><button class="dropdown-item" onClick={()=>setterFunction(option)}>{option}</button></li>));
  }
  
  return (
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      {value}
    </button>
    <ul class="dropdown-menu">
      { optionsList }
    </ul>
  </div>);
}

export default TypeDropdown;