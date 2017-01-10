## 3. Wyrażenia regularne.
### 3.1. Podstawy tworzenia wyrażeń regularnych.
    Utwórz obsługę zdarzenia onclick dla przycisku submit.
    Wstaw do zmiennej expression jakieś proste wyrażenie regularne np. /abc/.
    Pobierz wartość z pola tekstowego i dla tej wartości wywołaj metodę match(), która przyjmie jako argument zmienną expression. Napisz warunek: jeżeli pobrana wartość pasuje do wzorca, pojawia się komunikat "true", jeżeli wartość nie pasuje do wzorca, pojawia się komunikat "false". W każdym przypadku przesłanie formularza powinno być zatrzymane.
    Przetestuj działanie metody match() z różnymi wartościami pola tekstowego. Zauważ, że:
    * wyrażenie jest wrażliwe na wielkość liter,
    * przeszukiwany tekst może zawierać dodatkowe znaki oprócz szukanego wyrażenia.

### 3.2. Składnia wyrażenia regularnego.
    Wykorzystaj skrypt z zadania 3.1.
    Zmodyfikuj wyrażenie regularne tak, aby przeszukiwny tekst:
    * musiał rozpoczynać się literą **p** - `/^p/`
    * musiał kończyć się literą **p** - `/p$/`
    * posiadał zero lub więcej wystąpień litery **p** - `/p*/`
    * posiadał jedno lub więcej wystąpień litery **p** - `/p+/`
    * musiał rozpoczynać się literą **p** i posiadał jedno lub więcej wystąpień litery **p** - `/^p+/`
    * posiadał minimum dwa wystąpienia litery p obok siebie - `/p{2}/`
    * posiadał literę **a** lub **b** - `/a|b/`
    * zawierał sekwencję znaków **abc** i wyrażenie nie było wrażliwe na wielkość znaków - `/abc/i`

### 3.3. Praktyczne przykłady wyrażeń regularnych.
    Wykorzystaj skrypt z zadania 3.1.
    Zmodyfikuj wyrażenie regularne tak, aby przeszukiwany tekst:
    * zawierał małe litery od a do z - `/[a-z]/`
    * zawierał małe i duże litery - `/[a-zA-Z]/`
    * zawierał małe i duże litery oraz cyfry - `/[a-zA-Z0-9]/`
    * zawierał tylko podstawowe znaki alfanumeryczne, czyli małe i duże  litery oraz cyfry bez znaków specjalnych i spacji - `/^[a-zA-Z0-9]+$/`
    * zawierał tylko podstawowe znaki alfanumeryczne, czyli małe i duże litery oraz cyfry bez znaków specjalnych i spacji - `/^[a-zA-Z0-9]+$/`
    * zawierał tylko podstawowe znaki alfanumeryczne i miał dłgość z zakresu od 6 do 12 znaków - `/^[a-zA-Z0-9]{6,12}$/`
    * zawierał dokładnie cztery cyfry - `/^[0-9]{4}$/`
    * był zgodny ze wzorcem kodu pocztowego (XX-XXX) - dwie cyfry, myślnik, trzy cyfry - `/^[0-9]{2}-[0-9]{3}$/`

### 3.4. Metoda search().
    Utwórz obsługę zdarzenia onclick dla przycisku submit.
    Pobierz tekst źródłowy, który znajduje się w akapicie o id="source" i zapisz do miennej `sourceText`.
    Utwórz zmienną `expression`, przechowującą wyrażenie regularne.
    Dla zmiennej `sourceText` wywołaj metodę search(), a rezultat zapisz do zmiennej `rezult`.
    Napisz warunek:
    jeżeli `result` jest równy -1, pojawi się komunikat "Nie znaleziono",
    w innym przypadku pojawi się komunikat "Znaleziono na pozycji:" + nr pozycji.
    W każdym przypadku domyślna akcja wysłania formularza ma być zatrzymana.
    Zmodyfikuj wyrażenie regularne tak, aby:
    * zwrócona została pozycja pierwszej spacji - `/ /`
    * zwrócona została pozycja słowa "kurs" - `/kurs/`
    * zwrócona została pozycja słowa "kurs" niezależnie od wielkości liter - `/kurs/i`

### 3.5. Zmiana wartości za pomocą metody replace().
    Utwórz obsługę zdarzenia onclick dla przycisku submit.
    Pobierz tekst źródłowy, który znajduje się w akapicie o id="source" i zapisz do miennej `sourceText`.
    Utwórz zmienną `expression`, przechowującą wyrażenie regularne.
    Utwórz zmienną `newText`, przechowującą tekst, na jaki ma być zmienione wyrażenie regularne.
    Dla zmiennej `sourceText` wywołaj metodę replace(), która przyjmuje dwa argumenty: `expression` oraz `newText`. Wynik metody replace() zapisz do zmiennej `result`.
    Zamień tekst źródłowy na `result`.
    Domyślna akcja wysłania formularza ma być zatrzymana.
    Do zmiennej `expression` podstaw wyrażenie `/photoshop/`, a do zmiennej `newText` string "Photoshop".
    Zauważ, że w takim przypadku zamieniane jest tylko pierwsze wystąpienie wyrażenia `/photoshop/`.
    Do wyrażenia regularnego dodaj modyfikator g (wyszukiwanie globalne), aby od razu zamienić wszystkie wystąpienia szukanego wyrażenia.

### 3.6. Wyszukiwanie globalne - metoda match().
    Utwórz obsługę zdarzenia onclick dla przycisku o id="submit".
    Pobierz tekst źródłowy, który znajduje się w akapicie o id="source" i zapisz do miennej `sourceText`.
    Utwórz zmienną `expression`, przechowującą wyrażenie regularne będące wzorcem kodu pocztowego (XX-XXX). Przetestuj wyrażenie dla wyszukiwania pojedynczego oraz globalnego.
    Dla zmiennej `sourceText` wywołaj metodę match(), która przyjmuje zmienną `expression` jako argument. Rezultat metody match() zapisz do zmiennej `rezult`.
    Do akapitu o id="message" wstaw:
    * zmienną `result`, zawierającą tablicę wyników,
    * trzeci element tablicy `result`,
    * długość tablicy `result`,
    * wszystkie otrzymane wyniki oddzielone od siebie przecinkiem i spacją.

### 3.7. Dzielenie ciągu na fragmenty - metoda split().
    Utwórz obsługę zdarzenia onclick dla przycisku o id="submit".
    Pobierz tekst źródłowy, który znajduje się w akapicie o id="source" i zapisz do miennej `sourceText`.
    Utwórz zmienną `expression`, przechowującą wyrażenie regularne, które posłuży jako argument metody split - kryterium dzielenia tekstu. Ustaw wartość wyrażenia regularnego na spację oraz wyszukiwanie globalne - `/\s/g`
    Dla zmiennej `sourceText` wywołaj metodę split(), która przyjmuje zmienną `expression` jako argument. Rezultat metody split() zapisz do zmiennej `rezult`.
    Do akapitu o id="message" wstaw:
    * zmienną `result`, zawierającą tablicę wyników,
    * pierwszy element tablicy `result`,
    * ostatni element tablicy `result`.

### 3.8. Obiekt RegExp
    Utwórz obsługę zdarzenia onclick dla przycisku o id="submit".
    Pobierz tekst źródłowy, który znajduje się w akapicie o id="source" i zapisz do miennej `sourceText`.
    Utwórz zmienną `expression`, przechowującą wyrażenie regularne. Wyrażenie regularne utwórz przy użyciu konstruktora RegExp(), który przyjmie jako argument string "kurs".
    Dla zmiennej `expression` wywołaj metodę test(), która przyjmie jako argument tekst źródłowy `sourceText`. Wynik zapisz do zmiennej `result`.
    Do akapitu o id="message" wstaw wynik - zmienną `result`.
    Metoda test() zwraca wartość "true", jeżeli szukana fraza występuje w tekście źródłowym, w przeciwnym wypadku zwraca "false".
    Zmień wyrażenie regularne tak, aby wzorzec stanowił string "javascript" niezależnie od wielkości liter. Modyfikator wyrażenia należy wstawić jako drugi argument konstruktora RegExp().
    Dla utworzonych obiektów RegExp przetestuj działanie właściwości global, która zwraca wartość "true" lub "false", w zależności od tego, czy wyszukiwanie jest globalne, czy nie.

### 3.9. Użycie metody exec().
    Utwórz obsługę zdarzenia onclick dla przycisku o id="submit".
    Pobierz tekst źródłowy, który znajduje się w akapicie o id="source" i zapisz do miennej `sourceText`.
    Utwórz zmienną `expression`, przechowującą wyrażenie regularne. Wyrażenie regularne utwórz przy użyciu konstruktora RegExp(), ma ono stanowić wzorzec kodu pocztowego (XX-XXX). Zastosuj modyfikator dla wyszukiwania globalnego.
    Zadeklaruj zmienną `result`.
    Utwórz zmienną `allResults` i przypisz jej początkową wartość "".
    W pętli while ustaw warunek: while ((result = expression.exec(sourceText)) != null).
    Metoda exec() zwraca tablicę, w której znajduje się bieżący wynik wyszukiwania lub null, gdy nie znaleziono wyrażenia. Tablica wyników posiada właściwości: index - pozycja wyniku w tekście źródłowym, input - tekst źródłowy, length - długość tablicy. Aby pobrać bieżący wynik należy pobrać element z indeksem 0.
    W okienku alert wypisz bieżący wynik oraz jego pozycję (właściwość index).
    W każdym przebiegu pętli do zmiennej `allResults` dodaj bieżący wynik.
    Do akapitu o id="message" wstaw zmienną `allResults`.
