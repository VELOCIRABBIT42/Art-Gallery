import React from 'react';
import CardContainer from './components/CardContainer'
import { Routes, Route, Navigate } from 'react-router-dom';
import { CardComponent } from './components/CardComponent';
import { Upload } from './components/Upload'


const App = () => {
    return(
   <>
   <Routes>
   <Route path='/main' element={ <CardContainer />} />
    <Route path='/upload' element={ <Upload />} />
   </Routes>
  </>
    )
}

export default App;