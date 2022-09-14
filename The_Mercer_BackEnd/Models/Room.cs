using System.ComponentModel.DataAnnotations;

namespace The_Mercer_BackEnd.Models
{
    public class Room
    {
        [Key]
        public int RoomId { get; set; }
        public string RoomName { get; set; }
        public string HumidDevice { get; set; }
        public string TempDevice { get; set; }
    }
}
