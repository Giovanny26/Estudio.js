$(document).ready(function(){
    $("#update_turno_form").submit(function(evt) {
        evt.preventDefault();
        try {
            let turnoId = $("#turno_id").val();
            
        let formData = {
            date : $("#date").val(),
                        paciente: { id: $("#idPaciente").val()},
                        odontologo: { id: $("#idOdontologo").val()}
        }
            
            $.ajax({
                url: '/turnos',
                type: 'PUT',
                contentType : "application/json",
                data: JSON.stringify(formData),
                dataType : 'json',
                async: false,
                cache: false,
                success: function (response) {
                    let turno = response;
        
                    let successAlert = '<div class="alert alert-success alert-dismissible">' + 
                                            '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                            '<strong> turno actualizado </strong></div>'

                    $("#tr_" + turnoId + " td.td_first_name").text(turno.date);
                    $("#tr_" + turnoId + " td.td_last_name").text(turno.paciente.id);
                    $("#tr_" + turnoId + " td.td_dni").text(turno.odontologo.id);

                    $("#response").empty();
                    $("#response").append(successAlert);
                    $("#response").css({"display": "block"});
                },

                error: function (response) {
                    let errorAlert = '<div class="alert alert-danger alert-dismissible">' + 
                                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                        '<strong> Error </strong></div>';

                    $("#response").empty();                                    
                    $("#response").append(errorAlert);
                    $("#response").css({"display": "block"});
                }
            });
        } catch(error){
            console.log(error);
            alert(error);
        }
    });

    $(document).on("click", "table button.btn_id", function(){
        let id_of_button = (event.srcElement.id);
        let turnoId = id_of_button.split("_")[2];
  
        $.ajax({
            url: '/turnos/' + turnoId,
            type: 'GET',
            success: function(response) {
                let turno = response;
                $("#turno_id").val(turno.id);
                $("#date").val(turno.date);
                $("#idPaciente").val(turno.paciente.id);
                $("#idOdontologo").val(turno.odontologo.id);
            },
            error: function(error){
                console.log(error);
                alert("Error -> " + error);
            }
        });        
    });
});