app.factory("greenspadefactory", function ($http, $q) {
    var object = {
        getList: function(){
            var pr = $q.defer();
            $http.get('http://35.154.241.44:5555/api/v1/gspade/data')

            .then(function (data) {
                pr.resolve(data);
            },function(er){
                console.log(er);
                pr.reject(er);
            });
            return pr.promise;
        }
    };
    return object;
});