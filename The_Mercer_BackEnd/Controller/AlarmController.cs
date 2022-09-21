using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Threading.Tasks;
using The_Mercer_BackEnd.Models;
using The_Mercer_BackEnd.Repository;

namespace The_Mercer_BackEnd.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class AlarmController : ControllerBase
    {
        private readonly IRoomRepository _roomRepository;
        public AlarmController(IRoomRepository roomRepository)
        {
            _roomRepository = roomRepository;
        }

        [HttpPost("create")]
        public async Task<ActionResult<AlarmLog>> PostAlarm(AlarmLog alarm)
        {
            try
            {
                alarm.AlarmDate = DateTime.Now;
                _roomRepository.CreateAlarm(alarm);

                return Ok();
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server failure");
            }
        }
        [HttpGet("getAlarms")]
        public IEnumerable<AlarmLog> GetHistory()
        {
            try
            {
                
                var results = _roomRepository.GetAlarmHistory();
                
                return results;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
