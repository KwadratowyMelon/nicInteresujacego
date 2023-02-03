import React, { useState } from 'react'
import { Link } from "react-router-dom";
import BannerView from '../BannerView/BannerView'
import classes from './BulletinAcceptView.scss'

const BulletinAcceptView = () => {
  const [tonaTekstu, setTonaTekst] = useState("jakis kurwa string data")
  
  return (
    <div className="bulletin-accept-view">
        <BannerView/>
        <div className="bulletin-info-container">
            <textarea name="" id="" cols="30" rows="10">{tonaTekstu}</textarea>
        </div>
        <div className="decision-buttons-container">
          <Link to=".." relative="path">
            <button>Akcpetuj</button>
          </Link>
          <Link to=".." relative="path">
            <button>Odrzuć</button>
          </Link>
        </div>
    </div>
  )
}

export default BulletinAcceptView