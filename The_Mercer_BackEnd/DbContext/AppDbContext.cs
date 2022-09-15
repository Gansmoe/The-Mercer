﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using The_Mercer_BackEnd.Models;

namespace The_Mercer_BackEnd.DbContext
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Room> Rooms { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite(@"Data Source=C:\Users\Isac\Documents\Skola\Webbapplikationer med realtidskommunikation\The mercer backend test\The mercer\The-Mercer\Mercer.db");
        //Henkes DB Path: @"Data Source=Q:\Webbutvecklare.NET\The-Mercer\Mercer.db"
        //Isacs DB Path: @"Data Source=C:\Users\Isac\Documents\Skola\Webbapplikationer med realtidskommunikation\The mercer backend test\The mercer\The-Mercer\Mercer.db"
    }
}
