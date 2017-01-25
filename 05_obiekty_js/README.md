# Kurs JavaScript zaawansowany.
## 5. Obiekty JavaScript.
### 5.1. Właściwości okna.
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load'.
Przetestuj następujące właściwości okna:
* `screenX` - przesunięcie poziome okna względem ekranu,
* `screenY` - przesunięcie pionowe okna względem ekranu,
* `outerWidth` - zewnętrzna szerokość okna (razem z paskami narzędziowymi i przewijania),
* `outerHeight` - zewnętrzna wysokość okna (razem z paskami narzędziowymi i przewijania),
* `innerWidth` - wewnętrzna szerokość okna (bez pasków narzędziowych i przewijania),
* `innerHeight` - wewnętrzna wysokość okna (bez pasków narzędziowych i przewijania),
* `name` - nazwa okna.
Wyniki wyprowadź do okienka alert.

### 5.2. Metody okna.
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load'.
Pobierz wszystkie cztery przyciski i zapisz je do odpowiednich zmiennych: `bopen`, `bprint`, `bprompt`, `bconf`.
Do każdego z przycisków dodaj Event Listener dla zdarzenia 'click'.
* W funkcji obsługującej zdarzenie dla przycisku `bopen` na obiekcie `window` wywołaj metodę open(). Jako argument wstaw URL 'http://strefakursow.pl'.
* W funkcji obsługującej zdarzenie dla przycisku `bprint` na obiekcie `window` wywołaj metodę `print()`.
* W funkcji obsługującej zdarzenie dla przycisku `prompt` na obiekcie `window` wywołaj metodę `prompt()`. Jako argument wstaw informację, która pojawi się w okienku służącym do wprowadzania wartości przez użytkownika np. 'Wprowadź wartość'. Zapisz odpowiedź do zmiennej `output`, a następnie wyprowadź ją do okienka alert.
* W funkcji obsługującej zdarzenie dla przycisku `confirm` na obiekcie `window` wywołaj metodę `confirm()`. Jako argument wstaw pytanie, które pojawi się w okienku służącym do zatwierdzenia/odrzucenia przez użytkownika np. 'Czy na pewno zamknąć okno?'. Zapisz odpowiedź do zmiennej `output`, a następnie wyprowadź ją do okienka alert.
Sprawdź działanie wszystkich przycisków.

### 5.3. Praktyczna praca z oknami.
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load'.
Pobierz przycisk o id="open" i zapisz go do zmiennej `bopen`.
Do przycisku dodaj Event Listener dla zdarzenia 'click'.
W funkcji obsługującej zdarzenie wywołaj metodę `open()` na obiekcie `window` i zapisz do zmiennej `win`. Kolejne (opcjonalne) parametry metody to: URL, name, features, replace. Jako URL podaj pusty string (otworzy się puste okno), jako name wstaw 'nowe okno', jako features wstaw 'height=300,width=300'. Przetestuj skrypt.
Zmień rozmiary okna na różne sposoby:
* zastosuj metodę `resizeBy()` podając jako parametry delta x i delta y - relatywne zmiany wymiarów,
* zastosuj metodę `resizeTo()` podając jako parametry nowe wymiary szerokości i wysokości,
* zastosuj właściwości `innerHeight` i innerWidth do ustawienia nowych wewnętrznych wymiarów okna,
* zastosuj właściwości `outerHeight` i outerWidth do ustawienia nowych zewnętrznych wymiarów okna.
Przesuń okno stosując różne metody:
* zastosuj metodę `moveBy()` podając jako parametry relatywne przesunięcie delta x i delta y,
* zastosuj metodę `moveTo()` podając jako parametry koordynaty x, y położenia lewego górnego narożnika okna.
Zamknij okno po upływie trzech sekund. Zastosuj metodę `setTimeout()`, która ustawia funkcję oraz opóźnienie. W funkcji wywołaj metodę `close()`, natomiast opóźnienie ustaw na 3000 ms.

### 5.4. Właściwości przeglądarki.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load'.
Pobierz przycisk o id="open" i zapisz go do zmiennej `bopen`.
Do przycisku dodaj Event Listener dla zdarzenia 'click'.
Przetestuj właściwości obiektu `navigator`. Otrzymane wartości zapisz do zmiennych a następnie wyprowadź je do okna alert.
* właściwość `appCodeName` - nazwa aplikacji (przeglądarki),
* właściwość `appVersion` - wersja aplikacji (przeglądarki),
* właściwość `platform` - platforma przeglądarki (system, do jakiego została przystosowana),
* właściwość `cookieEnabled` - sprawdza, czy w przeglądarce właczona została obsługa plików cookie,
* właściwość `userAgent` - informacjie dotyczące przeglądarki: nazwa, wersja, platforma, silnik, nazwa i wersja wydania.

### 5.5. Obiekt location.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load'.
Pobierz przycisk o id="button" i zapisz go do zmiennej `btn`.
Do przycisku dodaj Event Listener dla zdarzenia 'click'.
Przetestuj właściwości obiektu `location`. Otrzymane wartości zapisz do zmiennych a następnie wyprowadź je do okna alert.
* właściwość `href` - pełny adres bieżącej strony,
* właściwość `host` - nazwa hosta (serwera) bieżącej strony,
* właściwość `pathname` - ścieżka bieżącej strony,
* właściwość `protocol` - protokół bieżącej strony,
* właściwość `search` - zapytanie, które jest doklejane do adresu po znaku zapytania,
Przetestuj metody obiektu `location`.
* metoda `reload()` - przeładowuje bieżącą stronę,
* metoda `assign()` - ładuje nową stronę, której adres należy podać jako argument,
* metoda `replace()` - zamienia stronę na nową, której adres należy podać jako argument, metoda wymazuje bieżącą stronę z historii przeglądania - powrót do niej jest niemożliwy.

### 5.6. Obiekt history.
Utwórz skrypt podpięty do pliku `trzeci.html`.
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load'.
Pobierz przycisk o id="button3" i zapisz go do zmiennej `btn`.
Do przycisku dodaj Event Listener dla zdarzenia 'click'.
Dla obiektu `history` wywołaj właściwość `length` i zapisz do zmiennej. Otrzymaną wartość wyprowadź do okna alert.
Otwórz w preglądarce dokument `pierwszy.html`, kliknij na link do dokumentu `drugi.html`, w drugim dokumencie kliknij na link do dokumentu `trzeci.html`, w trzecim dokumencie kliknij na przycisk.
W okienku alert powinna pojawić się liczba dokumentów otwartych w jednej sesji, w tym przypadku 3.
Wróć do skryptu JS i dla obiektu `history` wywołaj metodę `go()`. Sprawdź działanie metody podstawiając argumenty "-1" i "-2".
Zamiast metody go(-1) możesz zastosować metodę `back()`.
