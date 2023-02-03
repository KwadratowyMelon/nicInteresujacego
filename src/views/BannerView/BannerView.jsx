import React from 'react'
import classes from './BannerView.scss'
import { Link } from 'react-router-dom'

const BannerView = () => {
  return (
    <header>
      <div>
        <Link to='/GroupsView'>
          <div className="square delete-line-and-scss-block-after-change"></div>
        </Link>
      </div>
      <div className='buttons-container'>
        <Link to='/admin/LogsView'>
          <button>  
              Logi
          </button>
        </Link>
        <Link to='/admin/UsersView'>
          <button>
            Użytkownicy
          </button>
        </Link>
        <Link to='/admin/BulletinChangesLogsView'>
          <button>
            Zmiany Biuletyn
          </button>
        </Link>
        <Link to='/BulletinView'>
          <button>
            Biuletyn
          </button>
        </Link>
      </div>
    </header>
  )
}

export default BannerView