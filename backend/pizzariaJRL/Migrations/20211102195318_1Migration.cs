using Microsoft.EntityFrameworkCore.Migrations;

namespace pizzariaJRL.Migrations
{
    public partial class _1Migration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bebidas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeBedida = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    ValorBebida = table.Column<double>(type: "float", nullable: false),
                    tipoBebida = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    LinkImg = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bebidas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pizzas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomePizza = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    ValorPizza = table.Column<double>(type: "float", nullable: false),
                    DescricaoPizza = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    LinkImg = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pizzas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomeUsuario = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    senhaUsuario = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bebidas");

            migrationBuilder.DropTable(
                name: "Pizzas");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
