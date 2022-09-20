using System;
using System.ComponentModel.DataAnnotations;

namespace The_Mercer_BackEnd.Models
{
    public class AlarmLog
    {
        [Key]
        public int AlarmLogId { get; set; }
        public string UserName { get; set; }
        public string UserMail { get; set; }
        public DateTime AlarmDate { get; set; }
        public string DeviceId { get; set; }
        public int RoomId { get; set; }
        public Room Room { get; set; }
    }
}
