import React from 'react'
import { useEffect } from 'react'
import { getAlarmHistory } from '../../Adapters/Database';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import format from 'date-fns/format';
import parse from 'date-fns/esm/fp/parse/index.js';


const Alarms = () => {
    const [alarms, setAlarms] = useState([]);

    useEffect(() => {
        const getAlarms = async () => {
            const getAlarmFromDB = await getAlarmHistory();
            setAlarms(getAlarmFromDB[0]);
        }

        getAlarms();
    }, [])

    return (
        <div className='table-responsive'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Room</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alarms.map((item) => (
                            <tr key={item.alarmLogId}>
                                <td><p>{item.alarmLogId}</p></td>
                                <td>{item.userName}</td>
                                <td>{item.room.roomName}</td>
                                <td>{item.alarmDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Alarms