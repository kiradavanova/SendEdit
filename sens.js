$("#f_send_edit").on("click", function ()
    {
        
        $("form#f_edit")
            .find("input,select,textarea")
            .not('[type="submit"],[type="checkbox"]')
            .each(function ()
            {
                if (array_key_exists($(this).attr("name"), allFeilds)) $(this).val("");
            });
            
        allFeilds = "";
        var id = $.map($("input.edit:checkbox:checked"), function (el)
        {
            return $(el).attr("data-id");
        });
        
        var formInput = $("#f_edit").serializeArray();
        var data = { id: id, form: formInput };
        if (id.length > 0)
        {
            send("edit", data);
        } else
        {
            alert("Вы не выбрали товар!");
            setTimeout("$.fancybox.close()", 1);
        }
        let section = $(this).parents('#f_edit').find('#catalogedit option:selected').text();
        $.each(id, function (key, value) {
           $('tr.reports-list-item[data-id='+value+']').find('span.name_section').text(section);
        })
       
    });
