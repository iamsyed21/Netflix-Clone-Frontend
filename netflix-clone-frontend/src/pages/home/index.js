import React from 'react'
import Featured from '../../components/featured'
import TypeDropDown from '../../components/TypeDropDown';
import List from '../../components/list';

import './index.scss';
const Home = ({type}) => {
  return (
    <div>
      {type && <TypeDropDown type={type}/>}
      <Featured />
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home;