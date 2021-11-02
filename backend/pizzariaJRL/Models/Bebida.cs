using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace pizzariaJRL.Models
{
    public class Bebida { 
    
        [Key]
        public int Id { get; set; }

        public string NomeBedida { get; set; }
        public double ValorBebida { get; set; }
        public string tipoBebida{ get; set; }
        public string LinkImg { get; set; }
    }
}
