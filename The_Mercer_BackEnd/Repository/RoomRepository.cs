using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using The_Mercer_BackEnd.DbContext;
using The_Mercer_BackEnd.Models;
using System;

namespace The_Mercer_BackEnd.Repository
{
    public class RoomRepository : IRoomRepository
    {
        private readonly AppDbContext _appDbContext;
        public RoomRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async void CreateAlarm(AlarmLog alarm)
        {
            await _appDbContext.Alarms.AddAsync(alarm);
            await _appDbContext.SaveChangesAsync();
        }

        public IEnumerable<Room> GetAlarmHistory()
        {

            //var results = _appDbContext.Rooms.FromSqlRaw("Select Alarms.AlarmLogId, Rooms.RoomName, Alarms.UserName, Alarms.UserMail, Alarms.AlarmDate, Alarms.DeviceId \r\nfrom Rooms \r\ninner join Alarms ON Alarms.DeviceId = Rooms.TempDevice or alarms.DeviceId = Rooms.HumidDevice").Take(100).ToList();
            var alarms = _appDbContext.Alarms.ToList();
            var rooms = _appDbContext.Rooms.ToList();

            
            
            return rooms;
        }

        public async Task<Room[]> GetAllRoomsAsync()
        {
            IQueryable<Room> query = _appDbContext.Rooms;

            return await query.ToArrayAsync();
        }
    }
}
