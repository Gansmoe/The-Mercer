using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace The_Mercer_BackEnd.Controller
{
    
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult getJwt()
        {
            try
            {
                var token = User.Claims.First(x => x.Type == "jwtToken").Value;

                return Ok(new
                {
                    Jwt = token
                });
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server failure");
            }
        }
    }
}
