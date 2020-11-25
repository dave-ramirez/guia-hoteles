$(function() {
        
    // Se ejecuta cuando se dispara el evento
    $('#exampleModal').on('show.bs.modal', function() {
      console.log('Se abrio el modal');
      $('#callModal').addClass('disabled');
      $('#callModal').addClass('btn-secondary');
      $('#callModal').removeClass('btn-primary');
    });

    // Se ejecuta cuando se ve el modal
    $('#exampleModal').on('shown.bs.modal', function() {
      console.log('Se cargo el modal');
    });

    // Se ejecuta cuando se cierra el modal
    $('#exampleModal').on('hide.bs.modal', function() {
      console.log('Se cerro el modal');
      $('#callModal').addClass('btn-primary');
      $('#callModal').removeClass('btn-secondary');
      $('#callModal').removeClass('disabled');
    });

    // Se ejecuta cuando ya no se ve el modal
    $('#exampleModal').on('hidden.bs.modal', function() {
      console.log('ya no se ve el modal');
    });
    

  })