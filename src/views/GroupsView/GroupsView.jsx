import React from 'react'
import { Link } from 'react-router-dom'
import BannerView from '../BannerView/BannerView'
import classes from './GroupsView.scss'

const GroupsView = () => {

  const groups = [
    {
      id: 1,
      name: "Black P. Stones",
      author: "bob budowniczy",
    },
    {
      id: 2,
      name: "Bounty Hunter Bloods",
      author: "kot filemon",
    },
    {
      id: 3,
      name: "Nine Trey Gangsters",
      author: "bob budowniczy",
    },
    {
      id: 4,
      name: "Pirus",
      author: "kot filemon",
    },
    {
      id: 5,
      name: "Sex Money Murda",
      author: "bob budowniczy",
    },
    {
      id: 6,
      name: "United Blood Nation",
      author: "bob budowniczy",
    },
    {
      id: 7,
      name: "Bracia Strzelec",
      author: "bob budowniczy",
    },
  ]

  return (
    
    <div className="groups-view">
      <BannerView/>
      <Link to="/GroupCreateView">
        <button className="create-group-button">
          Nowy
        </button>
      </Link>
      <div className="groups-container">
        {groups.map(group => {
          return(
            <div key={group.id} className="group-container">
              <div className='group-info'>
                  <p>{group.name}</p>
                  <p>{group.author}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GroupsView