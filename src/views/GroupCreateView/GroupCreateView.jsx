import React from 'react'
import { useState } from 'react';
import classes from './GroupCreateView.scss'
import BannerView from '../BannerView/BannerView'
import { Link } from 'react-router-dom';

const GroupCreateView = () => {
  const [groupName, setGroupName] = useState('');
  const [groupPassword, setGroupPassword] = useState('');
  const [locked, setLocked] = useState(false);

  function toggleVisibility() {
    var elements = document.getElementsByClassName("password-holder");
    elements.style.display = elements.style.display == 'block' ? 'none' : 'block';
    /*za chuj nie wiem czemu nie dziala elo, naskarz na mnie*/
  }

  return (
    <div className='groups-create-view'>
      <BannerView/>
      <form className='create-group-form'>
        <label>Nazwa grupy</label>
        <input type="text" onChange={e => setGroupName(e.target.value)}/>
        <div className='checkbox-container'> 
          <label>Publiczne</label>
          <input type="checkbox" checked={locked} onChange={e => setLocked(e.locked = !locked)}/>
          <label>Szyfrowane</label>
          <input className='password-checkbox' type="checkbox" checked={!locked} onChange={e => setLocked(e.locked = !locked)} onClick={e => toggleVisibility()}/>
        </div>
        <div className='password-holder'>
          <label>Hasło:</label>
          <input type="text" onChange={e => setGroupPassword(e.target.value)}/>
        </div>
        <Link to="/GroupsView">
          <button className="create-group-button">Utwórz</button>
        </Link>
      </form>
    </div>
  )
}

export default GroupCreateView