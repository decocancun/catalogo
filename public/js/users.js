 function newUsers(id){
    $.ajax({
        type:"POST",
        url:"../controllers/users/newUser.php",
        data:{id_users:id},
        beforeSend:function(){
            $("#title-modal").html("Registrar Nuevo Usuario");
        }
    }).done(function(res){
        $("#mbody").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}

function addUsers(data) {
    $.ajax({
        type:"POST",
        url:"../controllers/users/saveUser.php",
        data:data
    }).done(function(res){
        var  res = JSON.parse(res);
        if (res.success=="1") {
            alert(res.message);
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
        listUsers("");

    }).fail(function(a,b,c){
        alert(c);
    });
}


function listUsers(data) {

    $.ajax({
        type:"POST",
        url:"../controllers/users/listUsers.php",
        data:data
    }).done(function(res){
        var o = JSON.parse(res);
        $('#example').dataTable( {
            data : o,
            columns: [
                {"data" : "name"},
                {"data" : "last_name"},
                {"data" : "role"},
                {"data" : "email"},
                {"data" : "number_phone"},
                {
                 "data": null, render: function (data, type,row)
                    {
                        return"<button type='button' class='btn btn-secondary' data-toggle='modal' data-target='#exampleModal' onclick=newUsers('" +  row.id + "');>Editar</button>" +
                        "&nbsp;<button type='button' class='btn btn-danger' onclick=deleteUser('" +  row.id + "');>Eliminar</button>";
                    }
                },
                
            ],
            destroy: true,

        });
        //$("#tableUsers").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}


function usersDetils(id) {

    $.ajax({
        type:"POST",
        url:"../controllers/users/detailsUsers.php",
        data:{id_users:id},
        beforeSend:function(){
            $("#title-modal").html("Detalles del Usuario");
        }
    }).done(function(res){
        $("#mbody").html(res);
    }).fail(function(a,b,c){
        alert(c);
    });
}


function deleteUser(id){
    var opcion = confirm("Clicka en Aceptar o Cancelar"); 

    if (opcion == true) {
        $.ajax({
            type:"POST",
            url:"../controllers/users/deleteUser.php",
            data:{id_users:id},
        }).done(function(res){
            listUsers("");
        }).fail(function(a,b,c){
            alert(c);
        });

	}

}