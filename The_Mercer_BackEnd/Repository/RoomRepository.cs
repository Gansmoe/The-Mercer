using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using The_Mercer_BackEnd.DbContext;
using The_Mercer_BackEnd.Models;

namespace The_Mercer_BackEnd.Repository
{
    public class RoomRepository : IRoomRepository
    {
        private readonly AppDbContext _appDbContext;
        public RoomRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Room[]> GetAllRoomsAsync()
        {
            IQueryable<Room> query = _appDbContext.Rooms;

            return await query.ToArrayAsync();
        }
    }
}
