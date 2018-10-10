(function () {
    console.log("kquery........");

    window.zzz = function () {
        console.log("gdsafasdfasdf....");
    }

    window.$ = function (str) {
        return document.querySelector(str);
    }

    window.log = function(obj){
        console.log(obj);
    }

})();

