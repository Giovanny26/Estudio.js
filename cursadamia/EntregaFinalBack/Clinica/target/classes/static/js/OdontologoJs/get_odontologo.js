$(document).ready(function(){
    (function(){
        $.ajax({
            type : "GET",
            url : "/odontologos",
            success: function(response){
              $.each(response, (i, odontologo) => {
                console.log(odontologo)
                let get_More_Info_Btn = '<button' +
                                            ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                                            ' type="button" class="btn btn-info btn_id">' + 
                                            "Modificar" +
                                            '</button>';
                 let delete_Btn = '<button' +
                                                            ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                                                            ' type="button" class="btn  btn-danger ml-2">' +
                                                            "Eliminar" +
                                                            '</button>';
                let tr_id = 'tr_' + odontologo.id;
                let odontologoRow = '<tr id=\"' + tr_id + "\"" + '>' +
                          '<td>' + odontologo.id + '</td>' +
                          '<td class=\"td_first_name\">' + odontologo.nombre.toUpperCase() + '</td>' +
                          '<td class=\"td_last_name\">' + odontologo.apellido + '</td>' +
                          '<td class=\"td_matricula\">' + odontologo.matricula + '</td>' +
                          '<td>' + get_More_Info_Btn + '</td>' +
                          '<td>' + delete_Btn + '</td>' +
                          '</tr>';
                $('#odontologoTable tbody').append(odontologoRow);
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
        if (pathname == "/odontologos.html") {
            $(".nav .nav-item a:last").addClass("active");
        }
    })();
});