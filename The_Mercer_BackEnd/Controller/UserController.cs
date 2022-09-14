using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.Linq;

namespace The_Mercer_BackEnd.Controller
{
    
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetJwt()
        {
            try
            {

                var token = User.Claims.First(x => x.Type == "jwtToken").Value;
                var name = User.Claims.First(u => u.Type == "name").Value;
                var userEmail = User.Claims.First(e => e.Type == "preferred_username").Value;

                return Ok(new
                {
                    Jwt = token,
                    Name = name,
                    Email = userEmail
                });
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server failure");
            }
        }
    }
}
