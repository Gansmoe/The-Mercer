﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.IO;
using The_Mercer_BackEnd.Models;

namespace The_Mercer_BackEnd.DbContext
{
    public class AppDbContext : IdentityDbContext
    {
        private readonly string[] DbPath = { 
            @"Data Source=Q:\Webbutvecklare.NET\The-Mercer\Mercer.db", 
            @"Data Source=C:\Users\Isac\Documents\Skola\Webbapplikationer med realtidskommunikation\The mercer backend test\The mercer\The-Mercer\Mercer.db",
            @"Data Source=C:\Code\Repos\TheMercerRepos\fixaCommit\The-Mercer\Mercer.db"};
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<AlarmLog> Alarms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
           
            var localPath = Path.Combine(Directory.GetCurrentDirectory(), @"..\");
            var connectionString = $"Data Source={Path.Combine(localPath, "Mercer.db")}";

            options.UseSqlite(connectionString);
        }
            
        //Henke = DbPath[0]
        //Isac = DbPath[1]
        //Christian = DbPath[2]
        //Moosa = DbPath[3]
        //Server i produktion = DbPath[4]
        //För att lägga till er path, fyll på arrayn.
    }
}
