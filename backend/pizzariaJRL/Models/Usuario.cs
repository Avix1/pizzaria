using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace pizzariaJRL.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        public string nomeUsuario { get; set; }
        public string senhaUsuario { get; set; }
    }
}
