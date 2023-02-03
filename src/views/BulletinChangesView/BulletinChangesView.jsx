import React from 'react'
import BannerView from '../BannerView/BannerView'
import classes from './BulletinChangesView.scss'
import { Link } from 'react-router-dom'

const BulletinChangesView = () => {
  return (
    <div className="bulletin-changes-container">
      <BannerView/>
      <textarea className="bulletin-changes-textarea" cols="30" rows="10"></textarea>
      <div className="bulletin-changes-info-container">
          <p className="bulletin-changes-save">
            <Link to="/BulletinView">
              zapisz
            </Link>
          </p>
      </div>
    </div>
  )
}

export default BulletinChangesView