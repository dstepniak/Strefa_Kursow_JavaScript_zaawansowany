# Kurs JavaScript zaawansowany.
## 10. Framework MooTools.
### 10.1. Podstawy użycia MooTools.
Wejdź na stronę mootools.net i pobierz Framework MooTools. Umieść plik w katalogu zadania 10. Podepnij mootools-core-1.4.5-full-nocompat.js do pliku html.
Korzystając z frameworku pobierz element o id='button' i zapisz do zmiennej `btn`. Aby pobrać element wpisz znak $ a następnie w nawiasie nazwę identyfikatora ujętą w cudzysłów - `$("id_name")`.
Do przycisku dodaj Event Listener zdarzenia 'click'. Wewnątrz funkcji obsługującej zdarzenie:
* Korzystając z frameworku pobierz wszystkie paragrafy. Aby pobrać elementy wg tag, wpisz podwójny znak $ a następnie w nawiasie nazwę znacznika ujętą w cudzysłów - $$("tag_name"). Dla paragrafów wywołaj metodę `toggleClass()`, która przełącza wyspecyfikowaną klasę. Jako argument wstaw klasy bootstrap: "alert alert-warning". Przetestuj działanie skryptu.
* Korzystając z frameworku pobierz paragraf o id='par'. Dla paragrafu wywołaj metodę `toggleClass()`, która przełącza wyspecyfikowaną klasę. Jako argument wstaw klasy bootstrap: "alert alert-info". Przetestuj działanie skryptu.
* Korzystając z frameworku pobierz paragrafy posiadające klasę "par". Aby pobrać elementy wpisz podwójny znak $ a następnie w nawiasie kropkę i nazwę klasy ujęte w cudzysłów - $$(".class_name"). Dla paragrafów wywołaj metodę `toggleClass()`, która przełącza wyspecyfikowaną klasę. Jako argument wstaw klasy bootstrap: "alert alert-success". Przetestuj działanie skryptu.

### 10.2. Zdarzenia w MooTools.
Podepnij mootools-core-1.4.5-full-nocompat.js do pliku html.
Pobierz przycisk o id="button" i wywołaj na nim metodę `addEvent()`, która dodaje obsługę zdarzenia. Jako parametry przyjmuje typ zdarzenia i funkcję. Z kolei funkcja przyjmuje jako parametr zdarzenie `e`.
Wewnątrz funkcji obsługującej zdarzenie:
* Pobierz paragraf o id="par" i wywołaj na nim metodę, która przełączy jego klasę na "text-info".
* Dla zdarzenia `e` pobierz właściwość target, która zwraca element, na którym wywołane zostało zdarzenie. Wartość wyprowadź do okienka alert.
* Dla zdarzenia `e` pobierz właściwość `shift`, która sprawdza, czy w momencie wywołania zdarzenia wciśnięty był przycisk shift. Wartość wyprowadź do okienka alert.
* Dla zdarzenia `e` pobierz właściwość `control`, która sprawdza, czy w momencie wywołania zdarzenia wciśnięty był przycisk ctrl. Wartość wyprowadź do okienka alert.

### 10.3. Typy natywne.
Podepnij mootools-core-1.4.5-full-nocompat.js do pliku html.
Pobierz przycisk o id="button" i dodaj do niego obsługę zdarzenia "click".
Wewnątrz funkcji obsługującej zdarzenie:
* Do okienka alert wyprowadź unikalny identyfikator, który pobierz z obiektu `String` przy pomocy metody `uniqueID()`.
* Utwórz string `str` z wartością "kurs JavaScript". Do zmiennej `reg` zapisz proste wyrażenie regularne - litera "k". Dla stringu str wywołaj metodę test(), która przyjmuje jako parametr wyrażenie regularne. Metoda ta zwraca wartość true lub false w zależności, czy podane wyrażenie zostało znalwzione w przeszukiwanym stringu. Zmień literę "k" w wyrażeniu regularnym na literę "w" i ponownie sprawdź otrzymany wynik.
* Do stringu dodaj na początku i na końcu po kilka spacji. Wyprowadź string `str` do okienka alert. Dodane spacje są widoczne. Następnie wywołaj dla `str` metodę `trim()`, która usuwa spacje na początku i końcu stringu. Wynik wyprowadź do okienka alert.
* Obejmij komentarzem kod znajdujący się wewnątrz funkcji obsługującej zdarzenie 'click'.
* Utwórz string `str` z wartością "12". Wyprowadź do okienka alert wynik działania str + 2. Zauważ, że w przypadku dodawania stringu do wartości liczbowej typ liczbowy jest zamieniany na string. Aby zamenić string na wartość liczbową, dla obiektu `Number` wywołaj metodę `from()`. Metoda `from()` przyjmuje jako parametr string i zamienia go na wartość liczbową. Wynik dodawania `Number.from(str) + 2` wyprowadź do okienka alert.
* Do okienka alert wyprowadź losową wartość z przedziału od 1 do 100. Zastosuj metodę `random()` wywołaną na obiekcie `Number`. Metoda `random()` przyjmuje dwa argumenty: dolny i górny zakres przedziału losowania.
* Obejmij komentarzem kod znajdujący się wewnątrz funkcji obsługującej zdarzenie 'click'.
* Utwórz tablicę `numbers` z wartością [3,4,5,2,1].
* Dla tablicy `numbers` wywołaj metodę `contains()`, która przyjmuje jako argument dowolną wartość. Metoda sprawdza, czy podana wartość jest elementem tablicy. Sprawdź wyniki dla argumentu równego 1 i 7. Wynik zapisz do zmiennej `test` i wyprowadź do okienka alert.
* Dla tablicy `numbers` wywołaj metodę `getLast()`, która zwraca ostatni element tablicy. Wynik zapisz do zmiennej `test` i wyprowadź do okienka alert.
* Dla tablicy `numbers` wywołaj metodę `getRandom()`, która zwraca losowo wybrany element tablicy. Wynik zapisz do zmiennej `test` i wyprowadź do okienka alert.

### 10.4. Tworzenie elementów DOM.
Podepnij mootools-core-1.4.5-full-nocompat.js do pliku html.
Pobierz przycisk o id="button" i dodaj do niego obsługę zdarzenia "click".
Wewnątrz funkcji obsługującej zdarzenie:
* Utwórz nowy element i zapisz go do zmiennej `el`. Zastosuj konstruktor `Element()`, który przyjmuje jako pierwszy argument tag elementu, a jako drugi argument obiekt zawierający pary nazwa/wartość. Nazwy są nazwami atrybutów tworzonego elementu.
Wprowadź następujące nazwy i wartości: {href: "http://strefakursow.pl", class: "text-success", html: "Strefa kursów"}.
* Wyprowadź utworzony element `el` do okienka alert.
* Dodaj utworzony element do div o id="content", zastosuj metodę JS `appendChild()`. Zauważ, że utowrzony odnośnik został dołączony jako ostatnie dzicko div.
* Zmień metodę `appendChild()` na metodę MooTools `grab()`. Podobnie jak metoda `appendChild()`, jest ona wywoływana na obiekcie, do którego jest wstawiany element, a jako argument przyjmuje nowy element. Element jest też tak samo wstawiany jako ostatnie dziecko div.
* Do metody `grab()` dodaj drugi argument, który precyzuje miejsce wstawienia nowego elementu. Przyjmij drugi parametr równy "top".
* Na elemencie `el` wywołaj metodę replaces(), która przyjmuje jako parametr paragraf o id="info". Metoda zamienia treść podanego paragrafu na treść elementu `el`, przypisaną do atrybutu html.

### 10.5. Tworzenie animacji.
Podepnij mootools-core-1.4.5-full-nocompat.js do pliku html.
Pobierz przycisk o id="button" i dodaj do niego obsługę zdarzenia "click".
Wewnątrz funkcji obsługującej zdarzenie:
* Utwórz nowy obiekt `Fx.Tween()` i zapisz do zmiennej `anim`. Obiekt ten będzie reprezentował animację. Użyj konstruktora `Fx.Tween()`, który przyjmuje dwa parametry: animowany element i obiekt zawierający pary nazwa/wartość. Jako element animowany wstaw paragraf o id="info" (można użyć zapisu $("info") lub tylko "info"). Jako drugi argument wstaw obiekt {duration: "long", property: "height"}, gdzie duration to czas trwania animacji a property to animowana własność css. Wartość duration może być ściśle określona w milisekundach lub przyjąć predefiniowaną wartość np. "long".
* Dla obiektu `anim` wywołaj metodę `start()`, która uruchamia animację. Metoda przyjmuje dwa parametry: początkową i końcową wartość własności css. Przyjmij wartości 40 i 80. Przetestuj działanie skryptu.
* Zmień wartość duration z "long" na 2000, czyli 2s. Przetestuj animację ze zmienioną prędkością.
* Usuń wywołanie metody `start()` z parametrami 40 i 80. Dla obiektu `anim` wywołaj metodę `set()`, która ustawia wartość własności css, tu wartość "height". Wstaw wartość 100. Teraz początkowa wysokość paragrafu info będzie wynosiła 100px.
* Dla obiektu `anim` wywołaj metodę `start()` z dwoma parametrami: 100, 40. Wysokość paragrafu będzie się treaz zmniejszać od 100px do 40px. Przetestuj działanie skryptu.

### 10.6. Obsługa plików cookie.
Podepnij mootools-core-1.4.5-full-nocompat.js do pliku html.
Utwórz zmienną `c` i zapisz do niej cookie. Użyj metody `write()` dla obiektu `Cookie`. Metoda `write()` przyjmuje dwa parametry: nazwę klucza i jego wartość. Przyjmij nazwę "username" i wartość "Strefakursow". Otwórz plik html w przeglądarce i sprawdź, czy ciasteczko zostało utworzone i jaki jest jego jetmin wygaśnięcia.
Do metody write() dodaj trzeci parametr, określający czas jego wygaśnięcia na 7 dni, użyj zapisu `{duration: 7}`.
Pobierz przycisk o id="button" i dodaj do niego obsługę zdarzenia "click".
Wewnątrz funkcji obsługującej zdarzenie:
* Odczytaj klucz "username z ciasteczka - użyj metody `read()` dla obiektu `Cookie`. Metoda `read()` przyjmuje jako parametr nazwę klucza - "username". Wynik zapisz do zmiennej `output`, którą wyprowadź do okienka alert.
Sprawdź działanie skryptu.
Pobierz przycisk o id="remove" i dodaj do niego obsługę zdarzenia "click".
Wewnątrz funkcji obsługującej zdarzenie:
* Sprawdź, czy istnieje istnieje ciasteczko, czyli czy wartość klucza "username" wynosi "Strefakursow" - użyj metody read().
* Jeżeli warunek jest spełniony, usuń ciasteczko - użyj metody `dospose()` dla obiektu `c`.
Sprawdź działanie skryptu.
Zauważ, że plik cookie jest tworzony w momencie załadowania strony. Wtedy też można odczytać jego zawartość. Po usunięciu pliku cookie nie można juź odczytać jego zawartości - otrzymujemy wartość null.
