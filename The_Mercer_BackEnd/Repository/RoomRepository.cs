﻿using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using The_Mercer_BackEnd.DbContext;
using The_Mercer_BackEnd.Models;
using System;
using Microsoft.AspNetCore.Mvc;

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

        public IEnumerable<AlarmLog> GetAlarmHistory()
        {
            var results = _appDbContext.Alarms.Include(x => x.Room).ToList().OrderByDescending(x => x.AlarmLogId);
            
            return results;
        }

        public IEnumerable<AlarmLog> GetAlarmsPerRoom(int roomId)
        {
            var results = _appDbContext.Alarms.Include(r => r.Room).Where(x => x.RoomId == roomId);

            return results;
        }

        public async Task<Room[]> GetAllRoomsAsync()
        {
            IQueryable<Room> query = _appDbContext.Rooms;

            return await query.ToArrayAsync();
        }
    }
}
