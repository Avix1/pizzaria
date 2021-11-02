using Microsoft.EntityFrameworkCore;
using pizzariaJRL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace pizzariaJRL.data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Bebida> Bebidas { get; set; }
        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet <Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            BebidasCreation(modelBuilder);
            PizzasCreation(modelBuilder);
            UsuariosCreation(modelBuilder);
        }

        private void BebidasCreation(ModelBuilder model)
        {
            model.Entity<Bebida>()
                .Property(p => p.NomeBedida)
                .IsRequired()
                .HasMaxLength(150);

            model.Entity<Bebida>()
                .Property(p => p.tipoBebida)
                .IsRequired()
                .HasMaxLength(150);

            model.Entity<Bebida>()
                .Property(p => p.LinkImg)
                .IsRequired();
                
        }
        private void PizzasCreation(ModelBuilder model)
        {
            model.Entity<Pizza>()
                .Property(p => p.NomePizza)
                .IsRequired()
                .HasMaxLength(150);

            model.Entity<Pizza>()
                .Property(p => p.DescricaoPizza)
                .IsRequired()
                .HasMaxLength(300);

            model.Entity<Pizza>()
                .Property(p => p.LinkImg)
                .IsRequired();
                
        }
        private void UsuariosCreation(ModelBuilder model)
        {
            model.Entity<Usuario>()
                .Property(p => p.nomeUsuario)
                .IsRequired()
                .HasMaxLength(50);

            model.Entity<Usuario>()
                .Property(p => p.senhaUsuario)
                .IsRequired()
                .HasMaxLength(50);
        }

    }
}
