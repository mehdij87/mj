(function (global) {
    var ajaxUtils = {};
    // Returns an HTTP request Object
    const getRequestObject = () => {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alart("Ajax is not supported!");
            return (null);
        }
        
    }
    // MAKE A GET REQUEST TO requestUrl
    ajaxUtils.sendGetRequest = (requestUrl, resposneHandler,isJsonResponse) => {
        var request = getRequestObject();
        request.onreadystatechange = () => {
            handleResponse(request, resposneHandler, isJsonResponse);
        };
        request.open("GET", requestUrl, true);
        request.send(null); //for post
    };
    // RespornceHandler function when it is ready and no Error
    const handleResponse = (request, resposneHandler,isJsonResponse) => {
        if ((request.readyState == 4) && (request.status == 200)) {
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }
            if (isJsonResponse) {
                resposneHandler(JSON.parse(request.responseText))
            }
            else {
                resposneHandler(request.responseText);
            }
        }
    }
     
    // Expose utility to global scope

    global.$ajaxUtils = ajaxUtils;
})(window);