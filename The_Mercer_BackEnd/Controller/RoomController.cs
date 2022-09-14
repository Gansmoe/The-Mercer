using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using The_Mercer_BackEnd.Models;
using The_Mercer_BackEnd.Repository;

namespace The_Mercer_BackEnd.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class RoomController : ControllerBase
    {
        private readonly IRoomRepository _roomRepository;
        public RoomController(IRoomRepository roomRepository)
        {
            _roomRepository = roomRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Room[]>> GetRooms()
        {
            try
            {
                var rooms = await _roomRepository.GetAllRoomsAsync();
                return Ok(rooms);
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server failure");
            }
        }
    }
}
