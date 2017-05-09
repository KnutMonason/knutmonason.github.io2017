'use strict';

var app = angular.module('myApp', [
    'ngRoute', 'ngAnimate', 'duScroll'
]);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/project1', {
                templateUrl: 'application/templates/content/project1.html',
                controller: 'projectCtrl'
            })
            .when('/project2', {
                templateUrl: 'application/templates/content/project2.html',
                controller: 'projectCtrl'
            }).when('/project3', {
                templateUrl: 'application/templates/content/project3.html',
                controller: 'projectCtrl'
            }).otherwise({
                templateUrl: 'application/templates/content/portfolio.html',
                controller: 'projectCtrl'
            });


        /*The reason for not using html5-mode is a redirect problem that causes 404*/
        $locationProvider.html5Mode(false).hashPrefix('!');

    }
]);

app.controller('loadCtrl', ["$scope", function($scope) {
    $scope.onload = function() {
        /*Starts the animation on landing page when angular is ready - Makes a difference with slow connection*/
        $('.intro').addClass('go');
        $('#active-on-load').addClass('active');
    }
}]);

app.controller('navCtrl', function($scope, $window, $document) {
    console.log("working");

    var first = angular.element(document.getElementById('first'));
    $scope.toFirst = function() {
        $document.scrollToElementAnimated(first);
    }


    var allSections = [],
        sections = [],
        navElement = document.getElementsByTagName("nav"),
        mainElement = $('main'),
        headerElement = document.getElementsByTagName('header'),
        windowHeight = $(window).height(),
        fixed = false;

    $(window).on('resize', function() {
        windowHeight = $(window).height();
        changeNavbarPosition();



    });

    function changeNavbarPosition() {
        windowHeight = $(window).height();

        var translate = 'translateY(' + Math.round(window.pageYOffset / 2) + 'px)';
        if (window.pageYOffset <= 1000) {
            headerElement[0].style.transform = translate;
            /*Remove to increase to performance on smaller devices*/
            headerElement[0].style.opacity = Math.max(0, windowHeight - window.pageYOffset) / windowHeight;
        }

        if (window.pageYOffset >= windowHeight) {
            if (!fixed) {
                fixed = true;
                $('nav').addClass('fixed');
                $('.social').hide();
                $('.arrow').hide();
            }
        } else {
            if (fixed) {
                fixed = false;
                $('nav').removeClass('fixed');
                $('.social').show();
                $('.arrow').show();
            }
        }

    }

    window.addEventListener('scroll', function() {
        changeNavbarPosition();
    });
});

app.controller('projectCtrl', function($scope) {

    $(".case").mouseenter(function() {
        $(this).removeClass("collapse").addClass("expand");

    })

    $(".case").mouseleave(function() {
        $(this).removeClass("expand").addClass("collapse");

    })
});

app.controller('skillCtrl', function($scope) {
    $scope.jsSkills = [{
            skill: "JavaScript + ES15",
            fill: "#F0DB4F",
            svg: "M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z",

        },
        {
            skill: "AngularJS",
            fill: "#C4473A",
            svg: "M52.864 64h23.28l-12.375-25.877zM63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635-59.637-20.485zm-15.766 73.974l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.14100000000000001l.123-.274v.274h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"
        },
        {
            skill: "TypeScript",
            fill: "#007acc",
            svg: "M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"
        },
        {
            skill: "Jquery",
            fill: "#0868AC",
            svg: "M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"
        }
    ];

    $scope.envSkills = [{
            skill: "Git",
            fill: "#F34F29",
            svg: "M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z",
        },
        {
            skill: "Gulp",
            fill: "#EB4A4B",
            svg: "M36.965 35.459c.877 9.232 1.747 18.412 2.637 27.798 1.451-2.495 2.501-4.888 4.085-6.848 1.475-1.826 3.334-3.511 5.357-4.678 2.641-1.524 6.104-.089 6.96 2.614.23.725-.319 1.697-.511 2.556-.646-.341-1.479-.529-1.901-1.051-1.793-2.217-2.873-2.479-4.856-.563-3.699 3.576-5.779 8.056-6.573 13.091-.153.974.456 2.067.713 3.105 1.011-.348 2.185-.476 3.002-1.084 2.656-1.977 4.302-4.666 5.21-7.88.197-.696 1.265-1.145 1.933-1.708.32.658 1.05 1.433.897 1.954-1.407 4.84-2.934 9.649-4.536 14.429-.162.484-1.051.725-1.604 1.079-.223-.636-.692-1.302-.617-1.901.168-1.358.605-2.683.91-3.927l-7.24 3.333c.405 4.622.825 9.807 1.323 14.985.382 3.954 1.029 4.978 4.923 5.728 4.544.875 9.173 1.434 13.792 1.774 6.825.503 13.59-.119 20.23-1.904 2.472-.664 3.458-2.29 3.635-4.717.162-2.235.524-4.456.775-6.685.493-4.391.972-8.783 1.476-13.358-1.667 1.056-2.978 2.238-4.511 2.739-1.116.365-2.524-.169-3.803-.303.245-1.174.23-2.497.796-3.487.922-1.618 2.224-3.021 3.364-4.515l-.491-.591c-.817.483-1.832.8-2.413 1.485-1.182 1.394-2.339 2.886-3.13 4.52-1.324 2.735-2.333 5.622-3.518 8.426-.515 1.216-.959 3.076-2.684 2.366-1.845-.761-.547-2.386-.114-3.542.689-1.844 1.599-3.606 2.215-4.962-1.746.208-3.516.459-5.294.614-.752.064-1.646-.348-2.261-.07-2.045.924-3.341.553-3.766-1.711-.947.615-1.749 1.448-2.694 1.672-1.147.273-2.703.452-3.543-.121-.673-.459-.918-2.184-.688-3.196.457-2.012 1.311-3.946 2.122-5.859.502-1.185 1.007-3.077 2.701-2.253 1.674.813.154 2.185-.232 3.286-.599 1.702-1.209 3.401-1.813 5.101l.96.58c.914-.794 2.053-1.441 2.693-2.415 1.048-1.592 1.681-3.452 2.673-5.086.411-.677 1.296-1.065 1.967-1.584.136.862.462 1.748.354 2.58-.107.841-.698 1.61-.981 2.442-.425 1.246-.768 2.52-1.2 3.969 2.043.078 2.918-.782 3.495-2.299 1.826-4.793 3.672-9.581 5.679-14.3.343-.808 1.509-1.264 2.296-1.884.091.974.525 2.078.216 2.899-1.645 4.349-3.492 8.62-5.228 12.935-.293.727-.387 1.534-.572 2.304 3.059-1.375 5.612-2.895 6.544-6.146.228-.79 1.162-1.377 1.771-2.058l1.416 1.5c.43-.362.824-.774 1.291-1.075 1.47-.947 3.053-1.782 4.603-.315 1.604 1.517.39 2.995-.448 4.307-.912 1.431-2.029 2.73-3.057 4.086 2.312-1.49 5.469-2.158 5.889-5.378 1.024-7.865 1.924-15.746 2.837-23.625.271-2.332.416-4.679.627-7.109-18.21 4.409-36.029 4.436-54.088-.069zM44.781 96.828c.877 2.317 2.209 4.593 2.558 7.011.737 5.147.924 10.372 1.446 15.554.076.755.565 1.792 1.175 2.124 8.98 4.88 18.047 5.726 27.209.389 1.367-.796 1.62-1.847 1.797-3.325.857-7.181-1.051-14.798 3.54-21.56-12.856 3.189-25.403 3.288-37.725-.193zM75.772 36.748c4.362-.421 8.671-1.445 12.985-2.291.813-.159 1.535-.778 2.299-1.185-1.007-.885-1.878-1.311-2.788-1.418-4.53-.535-9.076-.947-13.603-1.508-.684-.085-1.905-.929-1.854-1.083 1.321-3.98 1.256-8.485 4.254-11.839 3.789-4.24 7.617-8.443 11.416-12.648-2.826-3.04-2.864-3.044-5.425-.383-1.448 1.504-2.771 3.15-4.342 4.512-5.813 5.038-9.896 11.005-10.692 18.872-.183 1.805-1.174 2.457-3.069 2.485-6.256.091-12.519.263-18.761.674-3.093.203-6.148.997-9.221 1.523l-.028 1.149c1.923.593 3.809 1.372 5.773 1.749 10.944 2.098 21.991 2.458 33.056 1.391zm-3.496-2.748c-2.477 2-4.524 2-6.501 0h6.501z",
        },

        /*I like gulp more...*/
        /*        {
                    skill: "Grunt",
                    fill: "#FCAA1A",
                    svg: "M99.463 67.214c2.884-1.667 5.873-3.317 8.326-5.522 4.079-3.666 3.524-9.022-.812-12.363-.806-.621-1.819-1.421-2.018-2.301-.791-3.506-1.48-7.054.918-10.367.775-1.071 1.238-2.429 1.608-3.722 1.142-3.996-.69-7.363-4.627-8.655-.699-.229-1.438-.359-2.169-.462-.987-.139-1.479-.581-1.621-1.647-.529-3.935.484-6.088 4.154-7.741 1.914-.863 4.004-1.339 6.02-1.992-2.868-4.881-10.88-7.668-17.574-5.86-5.391 1.456-9.173 4.982-12.712 8.978-.375.423-1.193.682-1.783.646-1.718-.108-1.66-1.471-1.402-2.61.537-2.369 1.254-4.697 1.922-7.13-3.092.091-5.437 1.778-7.755 3.621-.156-.246-.269.048-.334-.107-1.154-2.755-.888-4.98-.396-7.98h-.374c-4.228 2-8.137 4.022-9.008 9.325l-.666-.298c-.447-2.097-.894-4.3-1.394-6.646-3.825 2.593-5.93 5.898-6.509 10.261-.08.602-.422 1.142-.643 1.725-.581-.321-1.314-.525-1.721-.998-3.981-4.624-8.483-8.275-14.807-9.244-5.611-.859-12.538 1.875-15.157 6.224 2.312.878 4.752 1.567 6.961 2.707 2.652 1.367 3.539 3.618 3.256 6.147-.205 1.826-.936 2.551-2.827 2.793-4.16.533-6.585 3.811-5.987 7.938.208 1.434.631 3.056 1.517 4.127 2.058 2.49 1.834 5.3 1.775 8.145-.046 2.224-.838 3.976-2.76 5.362-4.147 2.991-4.646 8.477-.841 11.913 2.493 2.252 5.512 3.97 8.434 5.69 2.169 1.278 3.614 3.05 3.725 5.419.185 3.895-.035 7.812-.158 11.717-.049 1.568-.293 3.129-.481 5.039-3.361-3.034-5.168-6.46-6.1-10.629-3.57 3.551-5.095 7.632-5.296 12.354-.359 8.446 3.257 14.474 10.865 18.001.646.299 1.22.979 1.586 1.62 3.185 5.572 7.736 9.282 14.109 10.595.717.148 1.566.168 2.109.575 3.49 2.61 7.465 3.875 11.725 4.254 6.436.573 12.634-.111 18.158-3.898.537-.369 1.188-.672 1.825-.78 6.636-1.126 11.396-4.819 14.789-10.525.52-.874 1.416-1.688 2.331-2.133 3.818-1.856 6.849-4.447 8.563-8.411 1.724-3.987 2.175-8.163 1.368-12.388-.666-3.49-2.11-6.672-5.042-9.184-.904 4.169-2.732 7.581-6.13 10.238-.4-5.594-.714-11.163-.549-16.717.063-2.136 1.536-3.906 3.609-5.104zm2.375-55.835c-1.145.206-2.293.603-3.436.586-5.39-.076-9.292 2.495-12.346 6.684l-.414.608-.312.246-2.513-1.206c4.123-7.552 12.398-10.635 19.021-6.918zm-5.637 3.601c-.411 2.377-.815 4.661-1.2 6.948-.18 1.074-.391 2.033-1.703 2.358-1.244.309-2.011.09-3.008-.896-1.309-1.293-1.188-2.304-.448-3.694 1.424-2.681 3.403-4.486 6.359-4.716zm-69.937-3.771c6.471-3.493 14.449-.654 18.997 7.038l-2.614 1.318.671-.883c-1.767-1.362-3.526-2.733-5.303-4.083-2.461-1.871-5.26-2.621-8.333-2.634-1.151-.006-2.301-.37-3.418-.756zm12.482 10.104c.057 1.044-1.286 2.557-2.371 3.121-.619.321-2.339-.59-2.958-1.404-.636-.836-.548-2.23-.749-3.384-.138-.788-.173-1.599-.359-2.374-.172-.711-.484-1.389-.776-2.194 3.367.093 7.038 3.048 7.213 6.235zm-12.737 79.205c-2.985-4.447-2.82-9.4-1.544-14.463 3.479 7.964 10.443 9.898 18.374 10.765-2.665 3.06-4.972 6.085-3.13 10.437-5.7-.399-10.547-2.046-13.7-6.739zm17.283 16.335l-6.696-5.745c5.157-1.342 5.696 2.506 7.227 5.174l-.531.571zm25.729 5.445c-12.604 2.429-22.489-3.302-26.225-16.771-.957-3.448 1.104-5.704 5.04-5.753 5.407-.068 10.816-.018 16.225-.018 5.223-.005 10.444-.011 15.666.003.614.002 1.245.044 1.839.188 3.272.797 4.56 2.502 3.616 5.701-2.453 8.324-7.009 14.886-16.161 16.65zm14.983-5.561c.94-1.895 1.623-3.453 2.487-4.903.255-.427 1-.67 1.562-.78.953-.187 1.938-.199 3.059-.298-1.705 2.69-3.936 4.559-7.108 5.981zm19.418-30.904c3.518 11.796-3.013 21.066-14.996 21.238 1.633-4.114-.439-7.15-3.293-10.222 7.9-.92 14.908-2.786 18.289-11.016zm-11.378-12.398c-.021 4.968.287 9.944.62 14.905.216 3.229.294 3.438-2.859 4.12-1.862.401-3.81.527-5.717.524-.514-.001-1.243-.833-1.503-1.442-2.021-4.726-3.948-9.493-5.918-14.242-.231-.557-.552-1.078-.832-1.615l-.607.468c1.852 6.914 3.704 14.847 5.508 20.847h-33.437c1.787-6 3.631-13.86 5.476-20.757l-.732-.378c-1.112 2.525-2.269 4.962-3.326 7.51-1.163 2.804-2.261 5.603-3.333 8.443-.352.932-.816 1.428-1.898 1.259-2.135-.332-4.278-.614-6.42-.898-1.678-.222-1.912-1.217-1.816-2.751.33-5.273.622-10.556.696-15.836.058-4.232-1.791-7.491-5.647-9.558-2.181-1.169-4.374-2.403-6.299-3.938-3.1-2.468-2.86-6.584.41-8.424l-.225 2.447c3.302-3.982 4.966-12.18 2.594-20.011l-.263 2.237-.592.191c-.734-1.899-1.732-3.746-2.129-5.712-.384-1.906 1.753-3.435 4.381-3.534 4.766-.18 9.266.961 13.369 3.252 4.208 2.348 8.206 5.076 12.071 7.498-.749-2.69-4.043-5.871-12.692-12.001 9.517-9.921 36.784-9.839 46.259.101-5.492 2.805-9.952 6.699-12.869 12.274 1.41-1.026 2.809-2.067 4.232-3.074 5.3-3.745 10.839-7.033 17.424-7.856 1.928-.241 3.981-.131 5.884.268 2.032.425 2.846 2.191 2.169 4.181-.524 1.543-1.313 2.997-1.985 4.491l-.484-.099-.386-2.18c-1.855 7.283-1.321 13.866 2.72 19.985l-.334-2.389c2.547 1.089 3.512 4.281 1.844 6.67-.927 1.327-2.331 2.372-3.664 3.346-1.243.909-2.649 1.613-4.033 2.311-3.863 1.944-5.638 5.261-5.657 9.367zM88.793 43.596c-4.658 1.279-8.351 4.032-11.526 7.555-1.478 1.641-3.223 2.767-5.451 2.872-1.065.05-2.146-.217-3.264-.345.42 3.023 2.548 4.013 4.534 4.46l3.228 7.507.578-.262c-.578-2.428-1.066-4.849.391-7.238 3.571 2.535 7.157 1.919 10.762.158 3.869-1.892 5.085-5.479 6.059-9.305l.713 2.763c1.514-2.543 1.789-4.91-.241-7.29l2.597-1.045c-3.02-.766-5.702-.566-8.38.17zm-1.061 11.592c-2.3 2.281-6.079 2.619-9.523.704 2.825-3.905 6.66-6.374 10.587-8.772 1.199 2.268.615 6.402-1.064 8.068zM50.473 50.881c-2.795-3.169-6.138-5.617-10.183-6.973-3.015-1.011-6.084-1.389-9.49-.439l2.636.951c-1.929 2.339-1.698 4.7-.3 7.388l.839-2.896c.786 3.987 2.061 7.446 5.853 9.365 3.606 1.825 6.172 2.419 11.172-.472v7.405c0 .054.544.109.758.163.973-2.33 2.002-4.659 3.07-7.218 3.344-1.101 4.405-2.113 4.421-4.591-3.559 1.142-6.365.052-8.776-2.683zm-9.843 4.603c-1.923-1.555-2.678-5.512-1.505-8.43 4.054 2.515 7.918 4.937 10.604 8.822-2.941 1.865-6.535 1.681-9.099-.392zM70.443 42.805c-4.4 2.294-8.485 2.271-12.874.004 4.786 5.328 7.965 5.511 12.874-.004zM79.344 103.504c-1.364-.063-3.344-.013-4.344-.013v.509h-3.475l-.252-.25c-1.813.127-2.5 1.035-1.657 2.562.832 1.508 1.793 2.992 3.031 4.143.779.723 2.265 1.102 3.348.978 2.932-.335 4.181-2.731 5.347-5.079.793-1.593-.157-2.767-1.998-2.85zM56.822 103.516c-1.421-.092-2.853-.019-4.279-.019s-2.856-.062-4.279.019c-1.273.072-2.11.665-1.914 2.137.262 1.961 3.176 5.208 5.119 5.72 1.651.435 3.115.14 4.178-1.225.983-1.264 1.926-2.583 2.696-3.983.813-1.476.17-2.54-1.521-2.649z",
                },*/
    ];

    $scope.desSkills = [{
            skill: "Illustrator",
            fill: "#FAA625",
            svg: "M47.955 69h15.371c-2.646-9-5.252-17.32-7.816-25.776-2.488 8.486-5.012 16.776-7.555 25.776zM124.112 1h-121.239c-2.186 0-1.873.476-1.873 2.585v121.394c0 2.107-.313 2.021 1.719 2.021h121.547c2.031 0 2.734.086 2.734-2.022v-121.239c0-2.263-.702-2.739-2.888-2.739zm-46.814 95c-1.637 0-3.28-.133-4.909-.016-1.175.088-1.568-.406-1.881-1.426-1.514-4.931-3.123-9.86-4.638-14.79-.305-.992-.741-1.354-1.816-1.341-5.523.064-11.049.058-16.573-.007-1.163-.014-1.698.296-2.03 1.45-1.406 4.904-2.944 9.768-4.365 14.667-.308 1.062-.776 1.433-1.904 1.404-3.318-.083-6.641-.032-10.274-.032.959-3.045 1.829-5.861 2.729-8.665 5.514-17.2 11.047-34.4 16.521-51.611.382-1.198.913-1.567 2.143-1.54 3.886.086 7.775.022 11.663 0 .727-.005 1.223.038 1.489.864 6.505 20.116 13.033 40.356 19.555 60.47.028.091.01.573.025.573h-5.735zm20.702 0h-12v-45h12v45zm-6.35-51.071c-3.665-.005-6.289-2.528-6.314-6.07-.024-3.532 2.707-6.159 6.406-6.163 3.728-.004 6.355 2.537 6.384 6.171.026 3.545-2.667 6.068-6.476 6.062z",
        },
        {
            skill: "Photoshop",
            fill: "#80B5E2",
            svg: "M50.246 41.616c-3.682-.925-7.369-.628-11.26-.022 0 6.805-.014 13.427.037 20.05.002.339.511.929.841.974 4.243.573 8.463.619 12.431-1.315 4.105-2 6.196-6.182 5.654-11.092-.492-4.471-3.139-7.448-7.703-8.595zM127 63.963v-60.678c0-2.096.023-2.285-2.012-2.285h-121.509c-1.979 0-2.479.19-2.479 2.186v121.509c0 2.018.252 2.021 2.209 2.021 40.555.001 81.231-.009 121.786.037 1.573.002 1.995-.417 1.991-1.959-.054-20.277.014-40.556.014-60.831zm-70.648 5.84c-5.557 1.982-11.352 2.093-17.352 1.628v22.569h-11v-1.402c0-18.895-.087-37.788-.14-56.682-.006-1.569.243-2.327 2.011-2.507 8.332-.852 16.617-1.81 24.902.133 8.906 2.087 14.041 7.975 14.431 16.11.483 10.074-3.944 16.974-12.852 20.151zm44.31 12.754c-.424 5.771-3.678 9.56-9.015 11.392-7.142 2.452-14.245 1.883-21.225-.891-1.143-.455-1.364-1.031-.987-2.196.687-2.126 1.19-4.312 1.72-6.286 2.951.866 5.757 1.947 8.664 2.458 2.053.361 4.272.149 6.359-.178 1.871-.294 3.217-1.564 3.524-3.572.312-2.041-.303-3.809-2.105-4.895-1.432-.862-3.01-1.479-4.523-2.202-2.433-1.163-5.026-2.075-7.27-3.53-8.831-5.727-5.956-16.383-.063-20.396 3.153-2.146 6.642-3.098 10.377-3.229 4.393-.154 8.623.604 12.778 2.623l-2.195 7.789c-1.74-.616-3.36-1.416-5.07-1.734-2.029-.378-4.157-.589-6.205-.422-2.746.225-4.354 2.12-4.354 4.47 0 1.392.528 2.57 1.689 3.245 1.666.969 3.434 1.768 5.186 2.579 1.896.877 3.898 1.551 5.723 2.552 4.87 2.67 7.405 6.8 6.992 12.423z",
        },
        {
            skill: "",
            fill: "",
            svg: "",
        },
        {
            skill: "",
            fill: "",
            svg: "",
        }
    ];

    $scope.cssSkills = [{
            skill: "HTML",
            fill: "#E44D26",
            svg: "M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z",
        },
        {
            skill: "CSS",
            fill: "#1572B6",
            svg: "M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z",
        },
        {
            skill: "LESS",
            fill: "#fff",
            svg: "M122.301 58.635c-.6-1.299-.89-2.836-.952-4.283-.154-3.561-.023-7.135-.184-10.696-.144-3.189-1.282-6.063-4.344-7.707-2.696-1.447-5.821-1.591-8.821-1.625v5.691c1 .034.754.065.998.078 4.029.198 5.379 1.476 5.43 5.473.038 2.972.012 5.946.06 8.917.059 3.605.597 7.046 3.894 9.322.056.039.051.182.083.348-1.678 1.192-3.006 2.727-3.392 4.822-.311 1.695-.487 3.43-.54 5.153-.096 3.118.003 6.243-.086 9.361-.07 2.442-1.227 3.588-3.604 4.132-.895.206-1.843.279-2.843.406v5.677c2-.12 3.017-.199 4.387-.347 5.156-.558 8.059-3.241 8.654-8.243.186-1.568.165-3.166.2-4.75.066-2.969.032-5.952.298-8.903.271-3.011 2.461-4.675 5.461-4.509v-5.951c-2 .358-3.843-.507-4.699-2.366zM28.314 70.768c-.001-11.549-.314-23.098-.314-34.646v-1.817c-3 0-6.226-.029-9.391.014-1.285.017-2.418.127-3.692.301-4.877.664-7.228 2.953-8.092 7.812-.25 1.402-.2 2.859-.221 4.293-.039 2.726.039 5.453-.005 8.178-.055 3.432-1.672 6.092-5.172 6.294-.124.007.573.15-.427.236v5.305c4 .628 5.273 2.243 5.539 5.959.042.592.053 1.189.059 1.784.034 3.32-.004 6.645.146 9.959.141 3.093.828 5.857 3.751 7.48 2.73 1.516 6.505 1.639 8.505 1.718v-5.664c0-.048-.21-.092-.405-.104-4.339-.265-5.317-1.443-5.343-5.785-.017-2.875.106-5.75.06-8.625-.058-3.612-.586-7.038-3.856-9.324-.05-.035-.001-.183-.017-.383 2.199-1.39 3.368-3.516 3.686-6.094.176-1.422.235-2.864.26-4.299.05-2.973-.003-5.949.078-8.92.057-2.088 1.39-3.61 3.091-3.952 1.612-.325 2.446-.315 5.446-.466v2.056c0 10.31-.367 20.619-.313 30.929.019 3.531.41 7.012 4.195 8.537 2.058.829 4.263 1.084 6.627 1.642.395-2.312.524-4.23.847-6.128-4.357-1.25-5.042-1.898-5.042-6.29zM54.988 50.875c-7.34-3.51-16.248-.441-19.666 6.921-2.574 5.544-2.482 11.25-.216 16.872 1.229 3.048 3.45 5.33 6.473 6.672 5.904 2.621 11.879 1.984 17.832.144.321-.1.731-.718.692-1.046-.203-1.661-.54-3.306-.841-5.021-1.417.357-2.601.722-3.811.949-3.197.601-6.401.6-9.512-.637-3.072-1.22-5.135-4.73-4.622-7.73h20.872c.255-3 .154-7.125-1.123-10.536-1.14-3.049-3.108-5.167-6.078-6.588zm-.044 12.125h-13.716c.007-4 3.264-7.59 7.537-7.508 3.753.072 6.349 3.508 6.179 7.508zM111.052 75.279c.492-5.054-1.034-7.898-5.534-10.094-1.596-.779-3.29-1.356-4.916-2.078-1.217-.54-2.442-1.087-3.58-1.771-1.108-.665-1.572-1.769-1.408-3.062.161-1.277.982-2.119 2.168-2.359 1.437-.292 2.943-.542 4.388-.424 2.042.167 4.056.69 6.163 1.075l1.332-5.818c-2.851-.434-5.509-.995-8.195-1.207-2.987-.235-5.896.261-8.63 1.67-5.777 2.977-5.883 12.116-.574 15.116 1.586.896 3.283 1.596 4.933 2.38 1.737.827 3.537 1.546 5.199 2.504 1.262.727 1.713 1.996 1.375 3.475-.313 1.375-1.354 1.988-2.577 2.105-1.86.177-3.768.347-5.609.128-2.217-.264-4.387-.937-6.658-1.451l-1.158 5.79c5.333 2.002 10.61 2.33 15.938 1.149 4.459-.988 6.999-3.596 7.343-7.128zM82.637 65.827c-1.959-1.039-4.066-1.797-6.088-2.723-1.255-.575-2.584-1.074-3.69-1.871-2.127-1.533-1.731-4.472.746-5.258 1.421-.452 3.028-.592 4.521-.48 2.034.153 4.041.679 6.162 1.063l1.258-5.546c-1.077-.293-2.052-.612-3.051-.822-3.971-.836-7.963-1.16-11.874.215-3.36 1.182-5.691 3.392-6.152 7.11-.516 4.152.861 7.43 4.696 9.402 1.535.79 3.18 1.363 4.747 2.095 1.564.73 3.161 1.427 4.614 2.343 1.111.7 1.549 1.885 1.236 3.255-.311 1.358-1.301 2.042-2.533 2.169-1.86.191-3.769.368-5.611.153-2.226-.26-4.403-.935-6.714-1.455-.341 1.613-.741 3.238-.99 4.885-.054.358.345 1.046.681 1.163 5.384 1.866 10.864 2.134 16.34.521 3.27-.962 5.557-3.051 6.018-6.623.523-4.055-.444-7.544-4.316-9.596z",
        },
        {
            skill: "Bootstrap",
            fill: "#5B4282",
            svg: "M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z",
        }
    ]
});


// SMOOTH SCROLL

app.controller('scrollToFirst', function($scope, $document) {
    var first = angular.element(document.getElementById('about'));
    $scope.toFirst = function() {
        $document.scrollToElementAnimated(first);
    }
});