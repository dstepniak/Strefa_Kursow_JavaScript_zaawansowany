# Kurs JavaScript zaawansowany.
## 6. Przydatne techniki pracy z JS.
### 6.1. Sortowanie wartości.
W tablicy numbers znajdują się nieposortowane liczby.
Zastosuj metodę `sort()` dla tablicy, aby zmienić ich kolejność.
Wynik wyprowadź do okienka alert.
Zauważ, że zastosowanie metody `sort()` do sortowania liczb, prowadzi do błędnego wyniku. Metoda domyślnie sortuje elementy tablicy rosnąco wg kolejności **alfabetycznej**. Zastosowanie jej do stringów daje wynik poprawny, natomiast w przypadku liczb kolejność alfabetyczna oznacza, że np. wartość 10 znajdzie się przed 2.
Zby zmienić sposób sortowania, do metody sort() wstaw jako argument funkcję anonimową, która przyjmuje argumenty a i b. Funkcja zwraca różnicę:
* return a - b, gdy sortujemy w kolejności rosnącej,
* return b - a, gdy sortujemy w kolejności malejącej.

### 6.2. Dynamiczne tworzenie tabeli.
Utwórz funkcję `createTable()`, która będzie tworzyła tablicę i wstawiała ją do dokumentu w momencie załadowania. Funkcję `createTable()` wstaw do Event Listener dla obiektu `window` dla zdarzenia 'load'.
W funkcji `createTable()`:
* Pobierz element o id='content' i zapisz do zmiennej `content`,
* Utwórz tabelę - element **'table'**, który zapisz do zmiennej `table`, użyj metody `createElement()` dla obiektu document,
* Utwórz element **'tbody'** i zapisz do zmiennej `tableBody`, użyj metody `createElement()` dla obiektu document,
* W pętli for utwórz 5 wierszy tabeli - elementy **'tr'**, które zapisuj do zmiennej `row`,
* W pętli wewnętrznej utwórz 7 komórek dla każdego wiersza - elementy **'td'**, które zapisuj do zmiennej `cell`,
* Dla każdej komórki tablicy (w wenętrznej pętli) utwórz tekst i zapisz do zmiennej `cellContent` - użyj metody `createTextNode()` dla obiektu `document`, tekst powinien składać się z numeru wiersza i numeru kolumny,
* Do każdej komórki tablicy (w wenętrznej pętli) dodaj utworzony tekst - użyj metody `appendChild()` dla obiektu `cell`,
* Każdą komórkę tablicy (w wenętrznej pętli) dodaj do wiersza - użyj metody `appendChild()` dla obiektu `row`,
* Każdy wiersz `row` dodaj do `tableBody` (w zewnętrznej pętli) - użyj metody `appendChild()` j.w.
* Ciało tabeli `tableBody` dodaj do tabeli `table` - użyj metody `appendChild()` j.w.
* Tabelę `table` dodaj do div `content` -  - użyj metody `appendChild()` j.w.
Aby nadać style tabeli możesz dodać odpowiednie klasy Bootstrap lub style css:
* Do elementu `table` dodaj klasy 'table table-bordered' - użyj `table.setAttribute()` lub `table.classList.add()`.
Zapamiętaj, że nowe elementy należy najpierw utworzyć, a następnie wstawić do dokumentu. Podobnie nowy tekst najpierw należy utworzyć a następnie wstawić do elementu.

### 6.3. Modyfikacja tabel za pomoca skryptu.
Utwórz funkcję `addRow()`, która będzie do istniejącej tablicy dodawała wiersz w momencie załadowania okna. Funkcja będzie przyjmowała dwa parametry: nr id i nazwę kursu. Funkcję `addRow()` wstaw do Event Listener dla obiektu `window` dla zdarzenia 'load', użyj parametrów: 4, 'Kurs JAVA'.
W funkcji `addRow()`:
* Pobierz tabelę i zapisz do zmiennej `table`,
* Do tabeli wstaw na końcu nowy wiersz i zapisz do zmiennej `newRow` - użyj metody insertRow() dla `table`, która przyjmuje jako parametr indeks wstawianego wiersza (piąty wiersz o indeksie 4), do wstawienia wiersza na ostatniej pozycji można również użyć indeksu -1,
* Do nowego wiersza wstaw dwie nowe komórki, które zapisz odpowiednio do zmiennych ` idCell` i `nameCell` - użyj metody insertCell() dla `newRow`, która przyjmuje jako parametr indeks wstawianego wiersza (komórki 1 i 2 o indeksach 0 i 1),
* Utwórz teksty dla komórek idCell oraz nameCell i zapisz do odpowiednich zmiennych `idText` i `nameText` - użyj metody `createTextNode()` dla obiektu `document`, tekst powinien zawierać odpowiedni parametr przekazany do funkcji `addRow()` - id i name,
* Do obu nowych komórek `idCell` i `nameCell` dodaj utworzone teksty `idText` i `nameText` - użyj metody appendChild().

### 6.4. Funkcja o zmiennej liczbie argumentów.
Pobierz element div o id='content' i zapisz do zmiennej `content`.
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load', który przyjmuje funkcję showProductInfo().
Utwórz funkcję `showProductInfo()`, ktora przyjmuje trzy argumenty: name, price, category. W funkcji utwórz zmienne `n`, `p`, `c` i przypisz im odpowiednio wartości zmiennych `name`, `price` i `category`. W elemencie `content` umieść tekst składający się z wartości `n`, `p`, `c`.
Uzupełnij parametry funkcji `showProductInfo()` w Event Listener, wstaw kolejno: "Jurs JS", 56, "Internet". Te same parametry pojawią się w divie `content`.
Jeżeli któryś z parametrów funkcji `showProductInfo()` nie zostanie podany, w divie `content` pojawi się napis 'undefined'. Aby zastosować wartość domyślną dla parametru category, usuń przypisanie parametru `category` do zmienej `c` i utwórz instrukcję warunkową:
* jeżeli zmienna `category` nie istnieje, do zmiennej `c` przypisz wartość "Bez katagorii",
* w innym przypadku do zmiennej `c` przypisz wartość `category`.
Sprawdź działanie skryptu w przypadku, kiedy podane są wszystkie trzy parametry oraz kiedy podane sa tylko dwa pierwsze.

Obejmij komentarzem pierwszą część skryptu, pozostaw tylko zmienną `content`.
Do obiektu `window` dodaj Event Listener dla zdarzenia 'load', który przyjmuje funkcję showArguments(), wstaw do funkcji dowolną liczbę różnych argumentów.
Utwórz funkcję `showArguments()`, która może przyjąć dowolną liczbę argumentów. Argumenty znajdują się w predefiniowanym obiekcie `arguments`, który zawiera tablicę z argumentami funkcji.
W pętli for wyprowadź do okienka alert kolejno wszystkie argumenty. Użyj tablicy `arguments`.

### 6.5. Obsługa wyjątków.
Utwórz obsługę zdarzenia `DOMContentLoaded`, w nim umieść pozostały kod.
Pobierz elementy input o id='submit' oraz id='input' i zapisz je do odpowiednich zmiennych `subBtn` i `inputField`.
Do przycisku `subBtn` dodaj Event Listener zdarzenia 'click'. Wewnątrz funkcji anonimowej umieść blok try catch.
W bloku try pobierz wartość `inputField` i zapisz do zmiennej `inputValue`. Napisz instrukcję warunkową:
* Jeżeli wprowadzona przez użytkownika wartość inputField nie jest liczbą, wyrzuć wyjątek - wpisz następującą instrukcję: `throw "Wyjątek: Wartość nie jest liczbą";`
W bloku `catch (e)` przechwyć wyjątek i wyprowadź `e` do okienka alert.
Sprawdź działanie skryptu wprowadzając wartość liczbową a następnie inną wartość.
Wróć do skryptu i za blokiem catch dodaj blok finally, który będzie wykonywany zawsze, niezależnie od tego, czy zostanie wyrzucony wyjątek. Umieść w nim komunikat "Pozostała część programu" wyprowadzony do okienka alert.
Ponownie przetestuj działanie skryptu wprowadzając różne wartości do pola input.
W bloku try dodaj kolejne warunki:
* Jeżeli użytkownik nie wprowadzi do pola input żadnej wartości, wyrzuć wyjątek: `throw "Wyjątek: Wartość jest pusta"`.
* Jeżeli wprowadzona do `inputField` wartość jest dłuższa niż 4 znaki, wyruć wyjątek: `throw "Wyjątek: Wartość jest za długa"`.
Bloki catch oraz finally pozostają bez zmian.
Ponownie przetestuj działanie skryptu wymuszając wyrzucenie kolejnych wyjątków.
