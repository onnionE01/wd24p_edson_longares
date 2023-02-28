const product_API = "../../api/displayProducts.php";


/** Actual Functions */

/**
 * index = get all informations
 * show?id = get 1 information only
 * store = saving new data or resource
 * destroy?id = delete a resource
 * update?id new resource = to update new resource
 */

//Get all informations

let serviceDataTable;
index();
function index()
{
    $.blockUI();
    serviceDataTable = $("#records").DataTable({
        processing : true,
        responsive: true,
        ajax : {
            url : SERVICES_API + "?index",
            dataSrc : function (response) {
                let return_data = new Array();
                console.log(response);
                for (let i = 0; i<response.records.length; i++) 
                {
                    return_data.push({
                        //@TODO
                        //@var change keys depending on the table
                        select : "<input type='checkbox' value='" + response.records[i].id + "' class='selected_service' />",
                        id : response.records[i].Menu_ID,
                        name :  response.records[i].ProductName,
                        price :  response.records[i].Price,
                        date_time : response.records[i].ProductImage,
                        action : "<button onclick='replace(" +response.records[i].Menu_ID+ ")'>UPDATE</button>"
                    });
                }

                return return_data;
            },
            
            complete : function() {
                $.unblockUI()
                //@TODO
                //@var change databale 
                $('#records tbody').on('dblclick', 'tr', function() {
                    let data = $('#records')
                        .DataTable()
                        .row(this)
                        .data()
                    
                    
                    $("#idToBeDisplay").html(data.id)
                    $("#name").val(data.name);
                    $("#price").val(data.price);
                    $("#modalClickerShow").click();

                    $("#saveButton").hide();
                    $("#updateButton").show();
                    $("#showId").show();
                });
            },
        },
        columns : [
            //@TODO
            //@var change data keys depending on the table column declared above
            { data : 'select' },
            { data : 'id' },
            { data : 'name' },
            { data : 'price' },
            { data : 'date_time' },
            { data : 'action' },
        ],
        dom : 'lBfrtip',
        buttons : [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdf'
        ]
    });
}

