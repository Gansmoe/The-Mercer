using Microsoft.EntityFrameworkCore.Migrations;

namespace The_Mercer_BackEnd.Migrations
{
    public partial class AddedAlarm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DeviceId",
                table: "Alarms",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeviceId",
                table: "Alarms");
        }
    }
}
