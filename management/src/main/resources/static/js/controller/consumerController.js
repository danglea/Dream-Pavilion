app.controller('consumerController',function ($scope,$http) {
    $scope.condition={};
    $scope.loadDataFirst = 1;
    //分页控件配置
    $scope.saveconsumer={};
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 5,
        perPageOptions: [5, 10, 20, 30, 40],
        onChange: function(){
            if($scope.loadDataFirst == 1) {
                $scope.reloadList(); //重新加载
                $scope.loadDataFirst = 2;
            }else if($scope.loadDataFirst == 2) {
                $scope.loadDataFirst = 0;
            }else if ($scope.loadDataFirst == 0) {
                $scope.reloadList(); //重新加载
            }
        }

    };
    /!*时间转换*!/
    $scope.transform = function (transTime) {
        var date = new Date(transTime);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return year + '-' + month + '-' + d;
    };
    //重新加载列表 数据
    $scope.reloadList=function(){
        //切换页码
        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
        //$scope.findPage( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }
    $scope.search=function (page,size) {
        $http.post('../consumer/findAll/'+page+'/'+size,$scope.condition).success(
            function (response) {
                $scope.entitys=response.list;
                $scope.paginationConf.totalItems=response.nums;

            }
        )
    }
        //查找
    $scope.findOne=function (id) {
        $http.get('../consumer/findOne/'+id).success(
            function (response) {
                $scope.findone=response;
                $scope.findone.contime=$scope.transform(response.contime);
            }
        )
    }

    $scope.findService=function () {
        $http.get('../consumer/findService').success(
            function (response) {
                $scope.allservice=response;
            }
        )
    }
    $scope.editConsumer=function () {
        $http.post('../consumer/editConsumer',$scope.findone).success(
            function (response) {
                $scope.reloadList();
                alert(response.map.msg);
            }
        )
    }

    $scope.saveConsumer=function () {
        $http.post('../consumer/saveConsumer',$scope.saveconsumer).success(
            function (response) {
                $scope.reloadList();
                alert(response.map.msg);
            }
        )
    }
})