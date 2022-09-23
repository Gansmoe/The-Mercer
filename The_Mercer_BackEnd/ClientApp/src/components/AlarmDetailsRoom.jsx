import React from 'react'

const AlarmDetailsRoom = ( {data} ) => {
    console.log(data);
    return (
        <>
            {data.length > 1 ? <div className='alarmdetail-container'>
                <div>
                    <h2><b>Room Details</b></h2>
                    <p>Room Name: {data[0].room.roomName}</p>
                    <p>Room Name: {data[0].room.roomName}</p>
                </div>
            </div> : <>TEST</>}

        </>
    )
}

export default AlarmDetailsRoom