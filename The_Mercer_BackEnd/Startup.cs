using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Identity.Web;
using Microsoft.Extensions.Configuration;
using System.Configuration;
using System.Security.Claims;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using The_Mercer_BackEnd.DbContext;
using Microsoft.EntityFrameworkCore;
using The_Mercer_BackEnd.Repository;

namespace The_Mercer_BackEnd
{
    public class Startup
    {
        private readonly string[] DbPath = {
            @"Data Source=Q:\Webbutvecklare.NET\The-Mercer\Mercer.db",
            @"Data Source=C:\Users\Isac\Documents\Skola\Webbapplikationer med realtidskommunikation\The mercer backend test\The mercer\The-Mercer\Mercer.db" };
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlite(DbPath[1]));

            services.AddScoped<IRoomRepository, RoomRepository>();
            

            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.Unspecified;
                options.HandleSameSiteCookieCompatibility();
            });

            services
                .AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
                .AddMicrosoftIdentityWebApp(Configuration.GetSection("AzureAd"));

            services.Configure<OpenIdConnectOptions>(OpenIdConnectDefaults.AuthenticationScheme, options =>
            {
                options.Events = new OpenIdConnectEvents
                {
                    OnTokenValidated = ctx =>
                    {
                        var jwtToken = ctx.SecurityToken.RawData;
                        ((ClaimsIdentity)ctx.Principal.Identity).AddClaim(new Claim("jwtToken", jwtToken));
                        return Task.CompletedTask;
                    }
                };
            });

            services.AddCors(opt =>
            {
                opt.AddPolicy(name: "development", policy => policy
                .WithOrigins("https://localhost:5001")
                .AllowCredentials()
                .AllowAnyMethod()
                .AllowAnyHeader());
            });

            services.AddControllers();

            services.AddSpaStaticFiles(cfg =>
            {
                cfg.RootPath = "ClientApp/build";
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("development");
            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapControllers();
            });

            app.Use(async (ctx, next) =>
            {
                if (!ctx.User.Identity.IsAuthenticated)
                {
                    await ctx.ChallengeAsync(OpenIdConnectDefaults.AuthenticationScheme);
                }
                else
                {
                    await next();
                }
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });


        }
    }
}
