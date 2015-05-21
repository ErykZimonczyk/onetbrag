/**
 * Created by ezimonczyk on 2015-05-21.
 */
'use strict';


angular.module('onetBragApp')
  .controller('PromoCtrl', function ($scope,$window) {
    $scope.ideasCollection = [
      {
        name: 'Social Journalism',
        image: 'http://www.the-latest.com/sites/default/files/occupy161211co.jpg',
        color: '#7E7471',
        left: '-50%'
      },
      {
        name: 'ProgramTV',
        image: 'http://i.tvmaniak.pl/tvmaniak/2011/12/onet-program-tv.jpg',
        color: '#E46700',
        left: '0'
      },
      {
        name: 'Donos24',
        image: 'http://i.iplsc.com/osoby-na-zdjeciu-sa-modelami-i-nie-maja-nic-wspolnego-z-opis/0001S13HXS45GTQA-C116-F4.jpg',
        color: '#620698',
        left: '0'
      },
      {
        name: 'Akademia Piłkarska',
        image: 'http://www.volunteers4sport.eu/htdocs/gallery/news/1471_big.jpg',
        color: '#3AC400',
        left: '0'
      },
      {
        name: 'Popularni.pl',
        image: 'http://images.fineartamerica.com/images-medium-large-5/pop-art-mark-ashkenazi.jpg',
        color: '#1A31C0',
        left: '0'
      },
      {
        name: 'Płatne komentarze',
        image: 'http://i2.cdn.turner.com/money/dam/assets/131105153905-wealthy-pile-of-cash-620xa.png',
        color: '#7A9B00',
        left: '-10%'
      },
      {
        name: 'MuratOnet',
        image: 'http://a.abcnews.com/images/US/ap_sandy_house_collapse_kb_ss_121030_ssh.jpg',
        color: '#E42C00',
        left: '0'
      },
      {
        name: 'Rekomendacje VOD',
        image: 'http://i.kinja-img.com/gawker-media/image/upload/s--9Jo9TOa_--/1865x9y3lsulqjpg.jpg',
        color: '#05A2C7',
        left: '0'
      }
    ];



    $scope.convert = function convertHex(hex,opacity){
      hex = hex.replace('#','');
      var r = parseInt(hex.substring(0,2), 16);
      var g = parseInt(hex.substring(2,4), 16);
      var b = parseInt(hex.substring(4,6), 16);

      var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
      return result;
    };

    $scope.ideasCollection.forEach(function(entry){
      console.log(entry);
      entry.color = $scope.convert(entry.color,75);
    });

    var w = angular.element($window);

    w.bind('load', function () {
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

    });


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
