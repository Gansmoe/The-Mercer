using Microsoft.EntityFrameworkCore.Migrations;

namespace The_Mercer_BackEnd.Migrations
{
    public partial class RemovedPoolColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PoolDevice",
                table: "Rooms");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PoolDevice",
                table: "Rooms",
                type: "TEXT",
                nullable: true);
        }
    }
}
