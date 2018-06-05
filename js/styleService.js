var styleService = {};

styleService.setBackGroundColor = function(element, color){
    element.style.backgroundColor = color;
}

styleService.setTextColor = function(element, color) {
    element.style.color = color;
}

styleService.setBoarder = function (element, width, style, color) {
    console.log(width + style + color);
    element.style.border  = width + ' ' + style + ' ' + color;
}

