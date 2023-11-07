document.addEventListener("DOMContentLoaded", function() {
    // Definición del valor del ticket
    const valorTicket = 1000;
  
    // Porcentajes de descuento
    const descEstudiante = 0.8;
    const descTrainee = 0.5;
    const descJunior = 0.15;
  
    // Variables del formulario
    const emailInput = document.getElementById("email");
    const nombreInput = document.getElementById("name");
    const apellidoInput = document.getElementById("apellido");
    const cantidadTickInput = document.getElementById("cantTick");
    const categorySelect = document.getElementById("category");
    const totalPagar = document.getElementById("totalPagar");
    const comprarButton = document.querySelector("button");
  
    function calcularTotal() {
      const cantidadTickets = parseInt(cantidadTickInput.value) || 0;
      const categoria = categorySelect.value;
  
      let descuento = 0;
  
      switch (categoria) {
        case "Trainee":
          descuento = descTrainee;
          break;
        case "Junior":
          descuento = descJunior;
          break;
        case "Estudiante":
          descuento = descEstudiante;
          break;
        default:
          descuento = 0;
      }
  
      const precioTotal = cantidadTickets * valorTicket * (1 - descuento);
      totalPagar.value = `Total a Pagar $: ${precioTotal.toFixed(2)}`;
    }
  
    cantidadTickInput.addEventListener("input", calcularTotal);
    categorySelect.addEventListener("change", calcularTotal);
  
    comprarButton.addEventListener("click", function() {
      const email = emailInput.value;
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const cantidadTickets = cantidadTickInput.value;
      const categoria = categorySelect.value;
      const precioTotal = totalPagar.value;
  
      // Alert compra realizada
      alert(`Compra realizada:
      Email: ${email}
      Nombre: ${nombre}
      Apellido: ${apellido}
      Cantidad de Tickets: ${cantidadTickets}
      Categoría: ${categoria}
      ${precioTotal}`);
    });
  });