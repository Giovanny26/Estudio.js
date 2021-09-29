$(document).ready(function(){
    (function(){
        $.ajax({
            type : "GET",
            url : "/turnos",
            success: function(response){
              $.each(response, (i, turno) => {
                console.log(turno)
                let get_More_Info_Btn = '<button' +
                                            ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                                            ' type="button" class="btn btn-info btn_id">' + 
                                            "Modificar" +
                                            '</button>';
                 let delete_Btn = '<button' +
                                                            ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                                                            ' type="button" class="btn  btn-danger ml-2">' +
                                                            "Eliminar" +
                                                            '</button>';
                let tr_id = 'tr_' + turno.id;
                let turnoRow = '<tr id=\"' + tr_id + "\"" + '>' +
                          '<td>' + turno.id + '</td>' +
                          '<td class=\"td_first_name\">' + turno.date + '</td>' +
                          '<td class=\"td_last_name\">' + turno.paciente.nombre + '</td>' +
                          '<td class=\"td_dni\">' + turno.paciente.apellido + '</td>' +
                          '<td class=\"td_fechaIngreso\">' + turno.odontologo.nombre + '</td>' +
                          '<td class=\"td_fechaIngreso\">' + turno.odontologo.apellido + '</td>' +
                          '<td>' + get_More_Info_Btn + '</td>' +
                          '<td>' + delete_Btn + '</td>' +
                          '</tr>';
                $('#turnoTable tbody').append(turnoRow);
              });
            },
            error : function(e) {
              alert("ERROR: ", e);
              console.log("ERROR: ", e);
            }
        });
    })();        
    
    (function(){
        let pathname = window.location.pathname;
        if (pathname == "/turnos.html") {
            $(".nav .nav-item a:last").addClass("active");
        }
    })();
});