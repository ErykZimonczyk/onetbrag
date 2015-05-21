/**
 * Created by ezimonczyk on 2015-05-21.
 */
'use strict';


angular.module('onetBragApp')
  .controller('PromoCtrl', function ($scope,$window) {
    $scope.ideasCollection = [
      {name: 'ProgramTV',
        image: 'http://i.tvmaniak.pl/tvmaniak/2011/12/onet-program-tv.jpg',
        color: '#FFFFFF'},
      {name: 'Donos24',
        image: 'http://gfx.stacja7.pl/repo/photo/article/201.0.jpg',
        color: '#FFFFFF'},
      {name: 'Akademia Piłkarska',
        image: 'http://www.volunteers4sport.eu/htdocs/gallery/news/1471_big.jpg',
        color: '#FFFFFF'},
      {name: 'Popularni.pl',
        image: 'http://ocdn.eu/images/pulscms/MjY7MDQsMCwxNjgsZDgwLDc5ODswNiwzMjAsMWMy/8b2825e9a9da4937e3aaec63a8fe4892.jpg',
        color: '#FFFFFF'}
    ];

    $scope.convert = function convertHex(hex,opacity){
      hex = hex.replace('#','');
      var r = parseInt(hex.substring(0,2), 16);
      var g = parseInt(hex.substring(2,4), 16);
      var b = parseInt(hex.substring(4,6), 16);
      console.log(r,g,b);
      var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
      return result;
    };

    $scope.ideasCollection.forEach(function(entry){
      console.log(entry);
      entry.color = $scope.convert(entry.color,75);
    });

    var w = angular.element($window);

    w.bind('resize', function () {
      var width = w.width();

      width -= 100;

      var listsize = Math.floor(width/250);
      if (listsize === 0){
        listsize = 1;
      } else if (listsize > 4){
        listsize = 4;
      }

      listsize *= 250;

      angular.element('#ideas').css('max-width',listsize+'px');

      console.log('dziala'+listsize);
    });




  });
