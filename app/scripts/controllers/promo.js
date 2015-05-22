/**
 * Created by ezimonczyk on 2015-05-21.
 */
'use strict';


angular.module('onetBragApp')
  .controller('PromoCtrl', function ($scope,$window) {
    $scope.ideasCollection = [
      {
        name: 'Feedback+',
        image: 'https://gigaom2.files.wordpress.com/2011/02/140956933_3448b081b8_z.png?w=300&h=200',
        color: '#7E7471',
        left: '0',
        desc: 'Strategia opiera się na dwóch narzędziach dostępnych dla userów. Pierwszym narzędziem jest strona internetowa/aplikacja/jakieś inne narzędzie dzięki któremu user posiadający konto na onet będzie mógł zgłosić swój pomysł na ulepszenie/unowoczesnienie/zmianę jakiejś funkcjonalności na naszych stronach. Dzięki temu że wymogiem będzie posiadanie konta mailowego na onet odsiejemy masę hejterów którzy ciągle piszą w komentarzach pod artykułami. Dodatkowo zdobędziemy realny feedback od userów czego od nas oczekują, czego chcą aby im dostarczyć co przełoży się na zwiększenie jakości naszych stron, lepszego dostosowania się do usera a co za tym idzie do zwiększenia zasięgu oraz fame onet smile emoticon Drugim narzędziem jest coś na kształt "rady userów". Chodzi o starannie wyselekcjonowaną grupę HardUserów, którzy będą mieć dostęp do testowania rzeczy niektórych jeszcze w fazie produkcji albo tuż przed wdrożeniem. Zdobędziemy wtedy realny feedback. Dodatkowym atutem jest to że można dobrać zestaw takiej rady tak aby osoby takie szerzyły dobrą opinię w sieci o onet smile emoticon Do takiej rady będą mogli się też zwracać zwykli userzy z jakimiś problemami lub pomysłami. Marketingowo może to ograć w ten sposób że słuchamy naszych userów, jesteśmy blisko nich, że to user ma grać pierwsze skrzypce i decydować o wyglądzie i działaniu naszych stron, że jesteśmy jedyni na rynku z takim kontaktem do usera itp. Efektem po 24h ma być stworzone narzędzie (strona www) do kontaktu userów oraz pełna strategia marketingowa z konkretnymi pomysłami na działania, hasłami oraz sposobem selekcji userów itp.'
      },
      {
        name: 'ProgramTV',
        image: 'http://i.tvmaniak.pl/tvmaniak/2011/12/onet-program-tv.jpg',
        color: '#E46700',
        left: '0',
        desc: 'Kilkadziesiąt tysięcy RU przewagi ma WP nad Onetem tylko dzięki programowi TV... A przecież wiemy, że potrafimy zrobić to lepiej!!! Dane mamy, trzeba je po prostu rewelacyjnie opakować, zintegrować z komplementarną ofertą Onetu (na przykład serwis Film). Sześć literek powinno przyświecać temu projektowi: RWD i SEO. System push - przypominający o ulubionym serialu też będzie pomocny. Linki do VOD (przegapiłeś w TV? Jest jeszcze VOD!). Zróbmy program TV fajny dla nas samych, użyteczny, fajowski, ładny i wygodny.'
      },
      {
        name: 'Donos24',
        image: 'http://i.iplsc.com/osoby-na-zdjeciu-sa-modelami-i-nie-maja-nic-wspolnego-z-opis/0001S13HXS45GTQA-C116-F4.jpg',
        color: '#620698',
        left: '0',
        desc: 'Donos24 to strona, którą tworzą nasi użytkownicy. Zamieszczają informacje oraz zdjęcia z ciekawych zdarzeń, jakie uwiecznili na telefonie / aparacie / kamerze. Strona byłaby zrobiona trochę na wzór kontakt24, ale my mielibyśmy trochę więcej. Chociażby przez organizowanie akcji typu "Groza w szpitalu" aby nasi czytelnicy zamieszczali zdjęcia okropnych warunków w szpitalu, kolejek itd. Pozdrawiam, Monika Markowska, wydawca Fakt.pl'
      },
      {
        name: 'Akademia Piłkarska',
        image: 'http://www.volunteers4sport.eu/htdocs/gallery/news/1471_big.jpg',
        color: '#3AC400',
        left: '0',
        desc: 'Wzmacniamy wizerunek brandu Onet. Organizujemy mecz charytatywny Onet/TVP lub NC+ kontra gwiazdy ekstraklasy. Połączona transmisja w Onet i TVP lub NC+. Do składu angażujemy również artystów i celebrytów. Wpływy z meczu + akcesoria sportowe przekazujemy np. na wybrany dom dziecka. Mecz, to początek cyklicznych działań akademii piłkarskiej działającej online we współpracy np. z wybraną akademią piłkarską posiadającą szkółki w kraju. Cel - poza wzmocnieniem brandu, zdobycie nowej grupy użytkowników. Środki - ogromne możliwości kontentowe Grupy w obszarze. Możliwe sposoby monetyzacji - wykorzystanie potencjału reklamy natywnej w obszasze sportu, wykorzystanie potencjału e-commerce w obszarze kontentu sportowego. Projekt w ujęciu rocznym – każdy rok działania akademii kończy się dużym wydarzeniem medialnym – mecz charytatywny. Skład teamu – Wojciech Demusiak, Soja Kamil; Pabiańczyk Marcin; Marczydło Piotr, Emil Nowiński'
      },
      {
        name: 'Popularni.pl',
        image: 'http://images.fineartamerica.com/images-medium-large-5/pop-art-mark-ashkenazi.jpg',
        color: '#1A31C0',
        left: '0',
        desc: 'Znane nazwiska to coś co pobudza wyobraźnię czytelników. Szukają oni namiętnie informacji na temat swoich idoli -celebrytów, sportowców czy najważniejszych polityków. Punktem startu w tych poszukiwaniach jest Google. Stwórzmy agregator w którym pokażemy treści o danej osobie ze wszystkich naszych serwisów w jednym miejscu, wzbogacone o encyklopedyczny opis i biografię. oraz linkami do naszych artykułów, galerii i filmów. Każda strona "popularnego" będzie miała swojego kuratora, który będzie dbał o aktualizację jej opisu i danych, a także o to aby pojawiały się tam tylko interesujące treści. A dzięki optymalizacji SEO i bogatej ofercie mamy szansę na czołowe miejsca w wynikach wyszukiwania. Do projektu potrzebuje Programisty albo dwóch (ze znajomoscią PULSA) Projektanta/webdewelopera ze znajomoscia UST, Redaktora, Specjalisty seo.'
      },
      {
        name: 'Płatne komentarze',
        image: 'http://i2.cdn.turner.com/money/dam/assets/131105153905-wealthy-pile-of-cash-620xa.png',
        color: '#7A9B00',
        left: '0',
        desc: 'Dajmy ludziom możliwość zwrócenia uwagi innych na swój komentarz lub komentarz innej osoby, który im się szczególnie podoba. Wyróżniony komentarz byłby wyświetlany na samej górze listy komentarzy, bez względu na inne parametry (popularność, czas publikacji itd.). Żeby komentarz utrzymał się dłużej jako wyróżniony, musiałby uzyskać odpowiednią ilość pozytywnych ocen. Pozwoli to na zwiększenie lojalności użytkowników - zarówno tych którzy skorzystają z tej usługi (będą chcieli sprawdzać jak radzi sobie wyróżniony przez nich komentarz), jak i tych którzy tylko ograniczają się do czytania, ew. odpowiadania na komentarze innych (bo da dodatkowy pretekst do komentowania lub przynajmniej oceniania). Niektórzy mogą też chcieć wykorzystać tą usługę do swego rodzaju rywalizacji - w przypadku kiedy wyróżnionych komentarzy jest więcej niż jeden. Usługa powinna być płatna - tylko wtedy nie będzie nadużywana, a dodatkowo przyniesie firmie dochód od użytkowników. Płatność może odbywać się np. przez najtańszy SMS premium 0,50 zł netto lub inna forma mikropłatności.'
      },
      {
        name: 'MuratOnet',
        image: 'http://a.abcnews.com/images/US/ap_sandy_house_collapse_kb_ss_121030_ssh.jpg',
        color: '#E42C00',
        left: '0',
        desc: 'W kategorii związanej z budownictwem - Grupa Onet-RASP nie ma w swojej ofercie serwisu budowlanego. Ludzie budowali, budują i będą budować domy. Szukają rzetelnych informacji, porad specjalistów, okazji zakupowych. Dajmy im to czego potrzebują smile emoticon'
      },
      {
        name: 'Rekomendacje VOD',
        image: 'http://i.kinja-img.com/gawker-media/image/upload/s--9Jo9TOa_--/1865x9y3lsulqjpg.jpg',
        color: '#05A2C7',
        left: '0',
        desc: 'Już czas aby na vod.pl pojawiły się spersonalizowane rekomendacje filmów na miarę Netflixa! Firma zza oceanu znaczną część ruchu zawdzięcza rekomendacjom, dzięki nim użytkownik szybciej znajduje film który chciałby oglądnąć. wyglądać na vod.Jak to będzie pl? To jeszcze się okaże, spersonalizowane rekomendacje mogą się znaleźć na stronie głównej, pod detalem lub może uda się stworzyć interaktywne narzędzie do eksploracji. Dlaczego warto? Rozwój video w Internecie ma trend wzrostowy, a rekomendacja filmu płatnego przyniesie bezpośredni zysk.'
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

    var width = w.width();

    width -= 100;

    var listsize = Math.floor(width/250);
    if (listsize === 0){
      listsize = 1;
    } else if (listsize > 4){
      listsize = 4;
    }

    $scope.listsize= 250*listsize;

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

    w.bind('ready', function () {
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
      $scope.listsize = listsize;
      angular.element('#ideas').css('max-width',listsize+'px');

      console.log('dziala'+listsize);
    });

    $scope.expand = function($event) {
      angular.element('.active').removeClass('active').css('width','250px');
      angular.element($event.target).parents('.idea').css('width',$scope.listsize+'px').addClass('active');
    }
  });
