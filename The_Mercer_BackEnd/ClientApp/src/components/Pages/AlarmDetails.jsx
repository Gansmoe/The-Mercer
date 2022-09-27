import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getAlarmHistoryPerRoom } from '../../Adapters/Database';
import { countArray } from '../../Helpers/Calculation';
import AlarmDetailsRoom from '../AlarmDetailsRoom';
import SearchBar from '../SearchBar';

export const AlarmDetails = () => {
  const [alarmHistory, setAlarmHistory] = useState([]);
  const [alarmCount, setAlarmCount] = useState();
  const [selected, setSelected] = useState("userName");
  const params = useParams();

  const options = ["userName", "alarmDate", "userMail", "deviceId"];

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
        {alarmHistory.length > 1 ?
          <div className='room-details'>
            <h1><b>Room Details</b></h1>
            <p><b>Room Name:</b> {alarmHistory[0].room.roomName}</p>
            <p><b>Temperature Device:</b> {alarmHistory[0].room.tempDevice.length > 1 ? alarmHistory[0].room.tempDevice : <>N/A</>}</p>
            <p><b>Humidity Device:</b> {alarmHistory[0].room.humidDevice.length > 1 ? alarmHistory[0].room.humidDevice : <>N/A</>}</p>
            <br />
            <form>
              <p><b>Choose search filter</b></p>
              <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value.toLowerCase()}
                  </option>
                ))}
              </select>
            </form>
          </div>
          : <></>
        }

        <SearchBar Comp={AlarmDetailsRoom} filterprop={selected} placeholder={`Search for ${selected.toLowerCase()}`} list={alarmHistory} />
        {alarmHistory.length > 1 ? <AlarmDetailsRoom data={alarmHistory} /> : <>test</>}
      </div>
    </>
  )
}
