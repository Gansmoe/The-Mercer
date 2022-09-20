using Microsoft.EntityFrameworkCore.Migrations;

namespace The_Mercer_BackEnd.Migrations
{
    public partial class AddedRoomId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RoomId",
                table: "Alarms",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RoomId",
                table: "Alarms");
        }
    }
}
