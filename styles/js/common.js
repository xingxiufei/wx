//获取数据
function getAjax(obj){
    $.ajax({
        type:'POST',
        url:obj.url,
        data:obj.datas,
        dataType:'json',
        success:function(data){
            obj.dataDispose(data);
        }
    })
};