# Kurs JavaScript zaawansowany.
## 7. Żądanie.
### 7.1. Podstawowe żądanie http.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Utwórz obsługę zdarzenia `DOMContentLoaded`, w nim umieść pozostały kod.
Pobierz element o id='button' i zapisz do zmiennej `btn`. Do przycisku `btn` dodaj Event Listener zdarzenia 'click'. Wewnątrz funkcji anonimowej:
* Utwórz funkcję `createObject()`, która zwraca nowy obiekt XMLHttpRequest. Obiekt XMLHttpRequest służy pobrania danych z serwera.
* Utwórz zmienną `req` i przypisz do niej wartość zwróconą przez funkcję `createObject()`.
* Dla obiektu zapisanego do zmiennej `req` wywołaj metodę `open()`, która otwiera żądanie i specyfikuje jego typ. Metoda ta przyjmuje trzy parametry: **metoda przesłania żądania** (GET lub POST), **adres (URL) pliku**, z którego chcemy pobrać dane, **asynchronicność** żądania (true lub false). Przyjmij następujące parametry: 'GET', 'plik.txt', false.
* Dla obiektu zapisanego do zmiennej `req` wywołaj metodę `send()`, która wysyła żadanie na serwer. Przy metodzie GET metoda `send()` nie przekazuje żadnych dodatkowych parametrów - przyjmuje parametr null.
* Pobierz tekst z obiektu `XMLHttpRequest` zapisanego do zmiennej `req` stosując właściwość `responseText`. Wyprowadź otrzymaną wartość do okienka alert.

### 7.2. Właściwości żądania.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Skopiuj skrypt z zadania 7.1.
Przetestuj następujące właściwości i metody obiektu `XMLHttpRequest` zapisanego do zmiennej `req`:
* starus - status odpowiedzi przyjmuje wartości: 200: OK, 404: Page not found
* statusText - tekst statusu odpowiedzi przyjmuje wartości: OK, Page not found
* getResponseHeader() - zwraca zawartość podanego jako parametr nagłówka np. "Date" - data i czas nadejścia odpowiedzi, "ContentType" - typ zawartości odpowiedzi
* getAllResponseHeaders() - zwraca wszystkie nagłówki odpowiedzi.
Wyniki wyprowadź do okienka alert.

### 7.3. Żądanie asynchroniczne.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Stosowanie żądań synchronicznych nie jest wskazane, ponieważ w czasie oczekiwania na odpowiedź serwera nie jest możliwe wykonywanie innych operacji. Lepszym rozwiązaniem jest wysyłanie żądań asynchronicznych, które są wykonywane w tle i nie blokują funkcjonalności witryny.
Aby zmienić żądanie synchroniczne na asynchroniczne:
* Skopiuj skrypt z zadania 7.1.
* W metodzie `open(method, url, async)` zmień ostatni parametr na true.
* Pozostaw metodę `send()`, która wysyła żądanie na serwer.
* Usuń okienko alert z tekstem odpowiedzi.
* Do obiektu zapisanego do zmiennej `req` dodaj zdarzenie `onreadystatechange`, do którego przypisz funkcję anonimową.
* Wewnątrz funkcji obsługującej zdarzenie `onreadystatechange` pobierz wartość właściwości `readyState` dla obiektu `req`. W trakcie przetwarzania żądania przez serwer wartość `readyState` zmienia się od 0 do 4. Wartość 4 oznacza, że odpowiedź jest gotowa. Każda zmiana wartości `readyState` wywołuje zdarzenie `onreadystatechange`.
* Jeżeli wartość `readyState` jeat równa 4, pobierz tekst odpowiedzi `responseText` i wyprowadź ją do okienka alert.

### 7.4. Przetwarzanie plików XML.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Skopiuj skrypt z zadania 7.1. i zmodyfikuj go w następujący sposób:
* Pobierz element span o id='product_name' i zapisz do zmiennej `nameSpan`.
* W metodzie `open(method, url, async)` zmień nazwę pliku (drugi parametr) na 'produkty.xml'.
* Pozostaw metodę `send()`, która wysyła żądanie na serwer.
* Usuń okienko alert z tekstem odpowiedzi.
* Pobierz odpowiedź jako plik XML stosując właściwość `responseXML` dla obiektu `XMLHttpRequest` (zmienna `req`). Zapisz uzyskaną wartość do zmiennej `doc`.
* Do elementu span zapisanego pod zmienną `nameSpan` wprowadź zmienną `doc`.
Sprawdź działanie skryptu.
Zauważ, że wyświetlony został obiekt typu dokument XML. Aby pobrać konkretne informacje należy odwołać się do tego dokumentu a następnie do jego węzłów i dopiero z nich pobrać zawartość. W tym celu:
* Z dokumentu XML pobierz wszystkie tagi `product` - użyj metody `getElementsByTagName()`. Jako rezultat otrzymasz tablicę.
* Z tablicy pobierz pierwszy element (indeks 0).
* Dla tego elementu pobierz wszystkie tagi `name` - użyj metody `getElementsByTagName()`. Jako rezultat otrzymasz tablicę z jednym elementem.
* Z tablicy pobierz ten jeden element (indeks 0).
* Dla tego elementu pobierz jego węzły podrzędne - użyj własności `childNodes`. Jako rezultat otrzymasz tablicę.
* Pobierz pierwszy element z tej tablicy (indeks 0).
* Dla tego węzła pobierz wartość - użyj własności `nodeValue`.
* Do elementu span zapisanego pod zmienną `nameSpan` wprowadź otrzymaną wartość.
Sprzwdź działanie skryptu.
W podobny sposób wprowadź do elementu span nazwę drugiego produktu a następnie link umieszczony w drugim produkcie.

### 7.5. XML - przykład.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Skopiuj skrypt z zadania 7.4. i zmodyfikuj go w następujący sposób:
* Usuń zmienną `nameSpan`.
* Pobierz element ul o id='list' i zapisz do zmiennej `list`.
* Usuń przypisania tekstu do elementu span - wszystkie `nameSpan.innerText`.
* Z dokumentu XML pobierz wszystkie tagi `product` - użyj metody `getElementsByTagName()`. Otrzymana tablicę zapisz do zmiennej `products`.
* W pętli for pobierz kolejno tytuły (wartości węzła 'name') dla wszystkich produktów - tak samo, jak w zadaniu 7.4. pobrałeś tytuł pierwszego i drugiego produktu. Wartości zapisuj do zmiennej `pName`.
* W tej samej pętli utwórz element li - metoda `createElement()` oraz textNode - metoda `createTextNode()`, zapisz je odpowiednio do zmiennych `li` i `textNode`.
* Dodaj węzeł tekstowy do elementu li oraz element li do listy - użyj metody `appendChild()`.
Przetestuj działanie skryptu.
