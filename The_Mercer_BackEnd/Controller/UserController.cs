using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace The_Mercer_BackEnd.Controller
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
