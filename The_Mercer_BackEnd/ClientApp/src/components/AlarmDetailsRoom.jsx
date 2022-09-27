import React from 'react'
import moment from 'moment';

const AlarmDetailsRoom = ( {listitem} ) => {
    return (
        <>
            {listitem ? <div className='alarmdetail-container'>
                <div>
                    <p>ID: {listitem.alarmLogId}</p>
                    <p>Username: {listitem.userName}</p>
                    <p>Date: {moment(listitem.alarmDate).format('yyyy-MM-DD HH:mm:ss')}</p>
                    <p>Username: {listitem.userMail}</p>
                    <p>DeviceId: {listitem.deviceId}</p>
                </div>
            </div> : <></>}

        </>
    )
}

export default AlarmDetailsRoom