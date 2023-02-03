import React from 'react'
import classes from './LogsView.scss'
import BannerView from '../BannerView/BannerView'

const LogsView = () => {

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
    <div className="logs-view">
      <BannerView/>
      <div className="file-detail-logs">
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

export default LogsView