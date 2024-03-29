﻿using System.Collections.Generic;
using System.Threading.Tasks;
using The_Mercer_BackEnd.Models;

namespace The_Mercer_BackEnd.Repository
{
    public interface IRoomRepository
    {
        Task<Room[]> GetAllRoomsAsync();
        void CreateAlarm(AlarmLog alarm);
        IEnumerable<AlarmLog> GetAlarmHistory();
        IEnumerable<AlarmLog> GetAlarmsPerRoom(int roomId);
    }
}
