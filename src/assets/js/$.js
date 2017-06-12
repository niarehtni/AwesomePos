// 提示
var mes = function(msg,type,timer){
    this.$message({
        message: msg,
        type: type,
        duration:timer
    });
}