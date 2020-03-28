// 希望获取到页面中所有的checkbox怎么做？(不使用第三方框架)

var inputs = document.getElementsByTagName("input");
var checkboxArray = [];
for(let i = 0; i < inputs.length; i++){
    if(inputs[i].type === "checkbox"){
        checkboxArray.push(inputs[i]);
    }
}