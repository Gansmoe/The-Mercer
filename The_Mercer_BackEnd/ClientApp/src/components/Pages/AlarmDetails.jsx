import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getAlarmHistoryPerRoom } from '../../Adapters/Database';
import { countArray } from '../../Helpers/Calculation';
import AlarmDetailsRoom from '../AlarmDetailsRoom';

export const AlarmDetails = () => {
  const [alarmHistory, setAlarmHistory] = useState([]);
  const [alarmCount, setAlarmCount] = useState();
  const params = useParams();

  

  useEffect(() => {
    const getAlarmsPerRoomFromDb = async () => {
      const alarmsPerRoomResponse = await getAlarmHistoryPerRoom(params.id);
      setAlarmHistory(alarmsPerRoomResponse[0]);
      
    }
     
    getAlarmsPerRoomFromDb();           
    
  }, [])

 
  return (
    <>
      <div>
        {alarmHistory.length > 1 ? <AlarmDetailsRoom data={alarmHistory}/> : <>test</>}
      </div>
    </>
  )
}
