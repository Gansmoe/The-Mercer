using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace The_Mercer_BackEnd.Contoller
{
    
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult getTest()
        {
            return Ok(new[]
            {
                "test",
                "JWT"
            });
        }
    }
}
