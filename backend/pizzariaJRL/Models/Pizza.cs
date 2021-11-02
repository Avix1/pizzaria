using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace pizzariaJRL.Models
{
    public class Pizza
    {
        [Key]
        public int Id { get; set; }

        public string NomePizza { get; set; }
        public double ValorPizza { get; set; }
        public string DescricaoPizza { get; set; }
        public string LinkImg { get; set; }
    }
}
