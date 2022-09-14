using Microsoft.EntityFrameworkCore.Migrations;

namespace The_Mercer_BackEnd.Migrations
{
    public partial class ChangedColumnName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RoomIdTwo",
                table: "Rooms",
                newName: "TempDevice");

            migrationBuilder.RenameColumn(
                name: "RoomIdThree",
                table: "Rooms",
                newName: "PoolDevice");

            migrationBuilder.RenameColumn(
                name: "RoomIdOne",
                table: "Rooms",
                newName: "HumidDevice");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TempDevice",
                table: "Rooms",
                newName: "RoomIdTwo");

            migrationBuilder.RenameColumn(
                name: "PoolDevice",
                table: "Rooms",
                newName: "RoomIdThree");

            migrationBuilder.RenameColumn(
                name: "HumidDevice",
                table: "Rooms",
                newName: "RoomIdOne");
        }
    }
}
