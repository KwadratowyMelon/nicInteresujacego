import React from 'react'
import BannerView from '../BannerView/BannerView'
import classes from './BulletinView.scss'
import { Link } from 'react-router-dom'

const BulletinView = () => {
  return (
    <div className="bulletin-container">
      <BannerView/>
      <textarea disabled className="bulletin-textarea" id="bulletin-field" cols="30" rows="10"></textarea>
      <div className="bulletin-info-container">
        <p>autor</p>
        <p className="bulletin-edit">
          <Link to="/bulletinChangesView">
            edytuj
          </Link>
        </p>
        <p>data modyfikacji</p>
      </div>
    </div>
  )
}

export default BulletinView