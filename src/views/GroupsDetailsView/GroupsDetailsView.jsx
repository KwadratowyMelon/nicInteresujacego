import React from 'react'
import BannerView from '../BannerView/BannerView'
import classes from './GroupsDetailsView.scss'

const GroupsDetailsView = () => {


  const groups = [
    {
      id: 1,
      name: "Black P. Stones",
      isEditor: "Tak",
    },
    {
      id: 2,
      name: "Bounty Hunter Bloods",
      isEditor: "Nie",
    },
    {
      id: 3,
      name: "Nine Trey Gangsters",
      isEditor: "Tak",
    },
    {
      id: 4,
      name: "Pirus",
      isEditor: "Nie",
    },
    {
      id: 5,
      name: "Sex Money Murda",
      isEditor: "Tak",
    },
    {
      id: 6,
      name: "United Blood Nation",
      isEditor: "Tak",
    },
    {
      id: 7,
      name: "Bracia Strzelec",
      isEditor: "Tak",
    },
  ]


  const logs = [
    {
      id: 1,
      message: "*looks at the fridghe full of water bottles*",
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 2,
      message: "damn ain't no water bruh",
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 3,
      message: '*closes the fridge and turns around*',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 4,
      message: '*kid does a backflip on the floor*',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 5,
      message: 'what the hell is going on bro?',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 6,
      message: '*goes further through the living room*',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 7,
      message: '*sees a kid sitting exactly like The Thinker sculpter, which is currently exhibited at the Musée Rodin, in Paris*',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 8,
      message: 'WHAT ARE YOU DOING YOU ARE NOT THE THINKER',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 9,
      message: "*loud phonk song starts playing*",
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 10,
      message: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 11,
      message: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 12,
      message: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },
    {
      id: 13,
      message: '*bass* dum dum *bass* dum dum dum *bass* *bass* dum dum',
      author: 'Bobby Hadz',
      creationDate: 1999,
    },];

  return (
    <div className="groups-details-view">
      <BannerView/>
      <div className="groups-list-container">
        <div className="groups-list-management">
          <div>
            <label>e-mail</label>
            <input className="email-field" type="text" />
          </div>
          <div>
            <label >Czy edytor?</label>
            <input className="checkbox-editor" type="checkbox" />
          </div>
          <div>
            <button>Dodaj</button>
          </div>
        </div>
        <div className="repeated-list">
          {groups.map(group => {
            return(
              <div key={group.id} className="group-container">
                <div className='group-info'>
                  <div>
                    <p>{group.name}</p>
                  </div>
                  <div>
                    <p>Edytor: {group.isEditor}</p>
                    <p className="delete-group-button">Usuń</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="logs-container repeated-list">
        {logs.map(log => {
          return(
          <div key={log.id} className="log-container">
            <div className='log-info'>
              <div>
                <p>{log.message}</p>
              </div>
              <div>
                <p>autor: {log.author}</p>
                <p>date: {log.creationDate}</p>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
} 

export default GroupsDetailsView