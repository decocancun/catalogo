
function listEvents(data) {

    $.ajax({
        type:"POST",
        url:"../controllers/events/listEvents.php",
        data:data
    }).done(function(res){
        var result = JSON.parse(res);
        $('#pagination').dataTable( {
            "searching": true,
            data : result,
            columns: [
                {"data" : "event_name"},
                {"data" : "place_name"},
                {"data" : "event_date"},
                {"data" : "hour"},
                {
                    data: null, render: function (data, type,row)
                    {
                        return"<button type='button' class='btn btn-info' data-toggle='modal' data-target='#exampleModal' onclick=eventDetils('" +  row.id + "');>Detalles</button>"+
                        "&nbsp;<button type='button' class='btn btn-secondary' data-toggle='modal' data-target='#exampleModal' onclick=newEvent('" +  row.id + "');>Editar</button>"+
                        "&nbsp;<button type='button' class='btn btn-danger' onclick=deleteEvent('" +  row.id + "');>Eliminar</button>"; 
                    },
                },
                
            ],
            destroy: true,

        });

        //$("#tableEvents").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}

function addEvent(data) {
    $.ajax({
        type:"POST",
        url:"../controllers/events/save.php",
        data:data
    }).done(function(res){
        var  res = JSON.parse(res);

        if (res.success=="1") {
            alert(res.message);
            $("#btnBuscarEvent").click();
            $("#exampleModal").modal('toggle');
        }else{
            var errors = (res.hasOwnProperty("errors"))? res.errors : null;
            if (errors!= null) {
                $.each(errors, function(i,value){

                    $('.'+i).parent().children('span').text(value).show().css({"color":"red","font-size":"13px"});

                    alert(value);
                });
            }else{
                alert(res.message);
            }

        }

    }).fail(function(a,b,c){
        alert(c);
    });
}

function newEvent(id) {
    $.ajax({
        type:"POST",
        url:"../controllers/events/new.php",
        data:{id_event:id},
        beforeSend:function(){
            $("#title-modal").html("Registrar Evento");
        }
    }).done(function(res){
        $("#mbody").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}

function eventDetils(id) {
    //$("#d-none").addClass("d-none");

    $.ajax({
        type:"POST",
        url:"../controllers/events/details.php",
        data:{txtEvento:id},
        beforeSend:function(){
            $("#title-modal").html("Detalles del Evento");
        }
    }).done(function(res){
        $("#mbody").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}

function deleteEvent(id){
    
    var opcion = confirm("Clicka en Aceptar o Cancelar"); 

    if (opcion == true) {
        $.ajax({
            type:"POST",
            url:"../controllers/events/deleteEvent.php",
            data:{id_event:id},
        }).done(function(res){
            listEvents('');
        }).fail(function(a,b,c){
            alert(c);
        });

	}

}

/** fUNCTION DE ASSINTENCE-------------- */

function listAsistence(id,accion) {
    if (accion == 'setData') {
        $("#frEventAssist")[0].reset();
        $("#formAsistencia").removeClass("d-none");
        $("#table_Asistencia").addClass("d-none");
        $("#horaFin").removeClass("d-none");
        $("#title_assist").removeClass("d-none");
        $("#title_assist1").addClass("d-none");
    }

    //$("#titleAsistido").removeClass("d-none");
    $.ajax({
        type:"POST",
        url:"../controllers/events/listAssitence.php",
        data:{id_asistence:id}
    }).done(function(res){
        var res = JSON.parse(res);

        if (id in res) {
            var datos=res[id];
            var usuarios=res[id]["usuarios"];
            var tr_users ="" ;

            if (accion == 'setData') { // estan editando            
                // set data to form
                $("#frEventAssist #id_event_asistence").val(datos.id_events_asistences);
                $("#frEventAssist #txtTipo").val(datos.type);
                $("#frEventAssist #txtFecha").val(datos.date_en);
                $("#frEventAssist #txtHora").val(datos.hour);
                $("#frEventAssist #txtHoraFin").val(datos.fin_hour);

                
                $.each(usuarios,function(i,usr){
                    var asitencia = (usr.asistencia==1)? "checked": "";
                    tr_users += '<tr> <td>'+
                                    '<input type="checkbox" name="txtAsistencia[]" id="txtAsistencia'+ i +'" value="'+ i +'" '+asitencia+'>'+
                                    '<span class="help-block txtAsistencia"></span>'+
                                    '<label for="txtAsistencia'+ i +'" style="margin-left: 10px;"></label>'+
                                    ''+ usr.user_name +''+
                                    '</td>'+
                                    '<td></td>'+
                                '</tr> ';
                });

                $("#tableAuxe table tbody").html(tr_users);
                
            }else if (accion == 'lista') {

                // listar los usuarios de ese pase de lista
                tr_users +='<table class="table">'
                $.each(usuarios,function(i,usr){
                    if (usr.asistencia==1) {
                         tr_users += '<tr> <td>'+ usr.user_name +'</td></tr> ';
                    }
                });

                tr_users +='</table>';
                    
                $("#listUserEvent").html(tr_users).slideDown();
                $("#listusers").slideDown();
                $("#listusers").removeClass("d-none");
                
            }

        }
    }).fail(function(a,b,c){
        alert(c);
    });
}
/*
function updateAsistence(id) {
        $.ajax({
        type:"POST",
        url:"../controllers/events/updateAsistence.php",
        data:{id:id}
    }).done(function(res){
    }).fail(function(a,b,c){
        alert(c);
    });
}*/


/**pase de lista--------------**/
function saveAsistences(data){
    $.ajax({
        type:"POST",
        url:"../controllers/events/saveAsistence.php",
        data:data
    }).done(function(res){

        var res = JSON.parse(res);
        
        if (res.success=="1") {
            $("#table_Asistencia").html(res);
            $("#exampleModal").modal('toggle');
        }else{
            var errors = (res.hasOwnProperty("errors"))? res.errors : null;
            alert(errors);
            if (errors!= null) {
                $.each(errors, function(i,value){
                    $('.'+i).parent().children('span').text(value).show().css({"color":"red","font-size":"13px"});
                    alert(value);
                });
            }else{
                alert(res.message);
            }
        }

    }).fail(function(a,b,c){
        alert(c);
    });
}

function detailAssintence(id) {

    $.ajax({
        type:"POST",
        url:"../controllers/events/details.php",
        data:{txtEvento:id},
        beforeSend:function(){
            $("#title-modal").html("Informacion de Asistencia");

        }
    }).done(function(res){
        $("#mbody").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}

function terminarAssitence(data) {
    $.ajax({
        type:"POST",
        url:"../controllers/events/endAsistence.php",
        data:data
    }).done(function(res){

    var res = JSON.parse(res);

    if(res.success=="1"){
        $("#terminar_t").show('d-none');

    }else{
        
    }

    }).fail(function(a,b,c){
        alert(c);
    });
}

/** fUNCTION DE REPORTES-REPORT-------------- */

function generarReporte(data){
    $.ajax({
        type:"POST",
        url:"../controllers/extra_hours/generateReport.php",
        data:data
    }).done(function(res){
        $("#resultReport tbody").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}

function cerrarListUsers(campo){
    if (campo=='users') {
        $("#listusers").removeClass("d-none");
        $("#listusers").slideUp();
    }
}