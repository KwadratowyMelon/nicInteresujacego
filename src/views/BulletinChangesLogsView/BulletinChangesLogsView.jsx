import React from 'react'
import BannerView from '../BannerView/BannerView'
import classes from './BulletinChangesLogsView.scss'
import { Link } from 'react-router-dom'

const BulletinChangesLogsView = () => {
    const bulletinLogs = [
        {
            id: 1,
            message: "tak",
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 2,
            message: "nie",
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 3,
            message: 'nie',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 4,
            message: 'tak',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 5,
            message: 'nie',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 6,
            message: 'tak',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 7,
            message: 'nie',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 8,
            message: 'tak',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 9,
            message: "nie",
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 10,
            message: 'tak',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 11,
            message: 'nie',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 12,
            message: 'tak',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },
        {
            id: 13,
            message: 'nie',
            author: 'Bobby Hadz',
            creationDate: 1999,
        },];
  return (
    <div className='bulletin-changes-logs'>
        <BannerView/>
        <div className='bulletin-logs-container'>
            {bulletinLogs.map(bulletinLogs => {
                return(
                <div key={bulletinLogs.id} className="bulletin-log-container">
                    <div className='bulletin-log-info'>
                        <div>
                            <p>autor: {bulletinLogs.author}</p>
                            <p>date: {bulletinLogs.creationDate}</p>
                        </div>
                        <div>
                            <p>Zaakceptowane: {bulletinLogs.message}</p>
                        </div>
                        <div>
                            <Link to="/admin/BulletinChangesLogsView/BulletinAcceptView" relative='path'>
                                <p className='active-button'>
                                    Podgląd
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default BulletinChangesLogsView