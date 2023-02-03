import React from 'react'
import BannerView from '../BannerView/BannerView';
import classes from './FilesView.scss'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const FilesView = () => {

  const files = [ 
  {
    id: 1,
    name: "*looks at the fridghe full of water bottles*",
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 2,
    name: "damn ain't no water bruh",
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 3,
    name: '*closes the fridge and turns around*',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 4,
    name: '*kid does a backflip on the floor*',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 5,
    name: 'what the hell is going on bro?',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 6,
    name: '*goes further through the living room*',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 7,
    name: '*sees a kid sitting exactly like The Thinker sculpter, which is currently exhibited at the Musée Rodin, in Paris*',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 8,
    name: 'WHAT ARE YOU DOING YOU ARE NOT THE THINKER',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 9,
    name: "*loud phonk song starts playing*",
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 10,
    name: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 11,
    name: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 12,
    name: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },
  {
    id: 13,
    name: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
    author: 'Bobby Hadz',
    creationDate: 1999,
  },];

  return ( 
  <div className="files-view">
    <BannerView/>
      <div className='files-buttons-container'>
        <Link to='/admin/GroupsDetailsView'>
          <button>Zarządzaj</button>
        </Link>
        
        <button>Pole na plik</button>
        <button>Dodaj</button>
      </div>
      <div className='files-container'>
        {files.map(file => {
          return(
          <div key={file.id} className="file-container">
            <div className='file-info'>
              <p>{file.name}</p>
            </div>
            <div>
              <p>autor: {file.author}</p>
              <p>date: {file.creationDate}</p>
            </div>
            <div className='file-manage'>
              <Popup trigger={<p>Pobierz</p>}>
                  <form className="password-protection-form" action="">
                    <label>Wprowadź hasło</label>
                    <input type="text"/>
                    <button className='reset-password-button'>Ok</button>
                  </form>
              </Popup>
              <Link to="/admin/FilesDetailsView">
                <p>Zarządzaj</p>
              </Link>             
            </div>
          </div>
          )
        })}
      </div>
  </div>
  )
}

export default FilesView