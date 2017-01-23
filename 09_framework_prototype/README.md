# Kurs JavaScript zaawansowany.
## 9. Framework Prototype.
### 9.1. Wprowadzenie.
Wejdź na stronę prototype.js i pobierz Framework Prototype. Umieść plik w katalogu zadania 9. Podepnij prototype.js do pliku html.
Przyjrzyj się strukturze pliku html. Zawiera on zewnętrzny div, w którym umieszczony jest paragraf i przycisk.
Korzystając z frameworku pobierz element o id='button' i zapisz do zmiennej `btn`. Aby pobrać element wpisz znak $ a następnie w nawiasie nazwę identyfikatora ujętą w cudzysłów.
Do przycisku dodaj Event Listener zdarzenia 'click'. Wewnątrz funkcji obsługującej zdarzenie pobierz paragraf o id='par' i zapisz do zmiennej `p`.
Wyprowadź zawartość paragrafu `p` do okienka alert - użyj właściwości innerHTML.
Ukryj paragraf `p` używając metody `hide()` frameworku.
Zauważ, że paragraf nie został usunięty, ale ukryty przez nadanie stylu display: none.
Usuń paragraf za pomocą metody `remove()` frameworku.
Zauważ, że tym razem paragraf został usunięty ze struktury DOM.
Metoda `remove()` zwraca usuwany element. Wyprowadź do okienka alert tekst usuwanego paragrafu `p`.

### 9.2. Manipulowanie strukturą dokumentu.
Podepnij prototype.js do pliku html.
Pobierz element o id='button' i zapisz do zmiennej `btn`. Do przycisku dodaj Event Listener zdarzenia 'click'. Wewnątrz funkcji obsługującej zdarzenie pobierz paragraf o id='par' i zapisz do zmiennej `p`.
Dla pobranego paragrafu przetestuj metody frameworku:
* `addClassName()` - dadaje do elementu klasę podaną jako argument,
* `replace()` - zamienia zawartość elementu na podaną jako argument.
Pobierz element div o id="content" i zapisz do zmiennej `content`.
Dla `content` pobierz wszystkie elementy podrzędne, skorzystaj z metody `childElements()`, która pobiera elementy podrzędne i zwraca w formie tablicy. Zapisz pobrane elementy do zmiennej `elements`.
Wyprowadź nazwy wszystkich pobranych elementów podrzędnych do okienka alert. Skorzystaj z:
* `each()` - metoda wywoływana na zbiorze elementów, działająca jak pętla, przyjmuje ona jako parametr funkcję, funkcja natomiast przyjmuje jeden parametr (pojedynczy element zbioru),
* `nodeName` - właściwość przechowująca nazwę węzła, którą wywołaj wewnątrz funkcji dla każdego elementu zbioru.
Dla elementu `p` przetestuj metodę `insert()`, która wstawia do elementu zawartość podaną jako argument, domyślnie zawartość jest dodawana na końcu elementu. Jeżeli chcemy wstawić zawartość przed lub po elementcie, należey argument objąć nawiasem klamrowym, wpisać w nim odpowiednio before lub after, wstawić dwukropek a następnie wstawianą wartość np. p.insert({before: "<hr>"}).

### 9.3. Przetwarzanie wartości String Numeric oraz Array.
Podepnij prototype.js do pliku html.
Pobierz element o id='button' i zapisz do zmiennej `btn`. Do przycisku dodaj Event Listener zdarzenia 'click'. Wewnątrz funkcji obsługującej zdarzenie utwórz tablicę zawierającą wartości liczbowe i zapisz do zmiennej `numbers`.
* Sprawdź wielkość tablicy - użyj metody `size()`, wynik wyprowadź do okienka alert.
* Wyprowadź do okienka alert po kolei wszystkie elementy tablicy - użyj metody `each()`, która działa jak pętla. Metoda przyjmuje jako argument funkcję, która z kolei przyjmuje jako argument kolejne elementy tablicy.
Pobierz paragraf o id='par' i zapisz do zmiennej `p`.
Utwórz zmienną `str` przechowującą string i przypisz do niej wartość "kurs JS".
Do paragrafu `p` wprowadź:
* string `str`,
* wynik metody `capitalize()`, która zmienia pierwszą literę na wielką,
* wynik metody `empty()`, która sprawdza, czy string jest pusty,
* wynik metody `startsWith()`, która sprawdza, czy string zaczyna się na podany jako argument znak lub ciąg znaków. Jako argument podaj kolejno "k", "a", "K". Zauważ, że metoda jest wrażliwa na wielkość liter.
Zmień wartość stringu na "<i>kurs JS</i>".
Do paragrafu `p` wprowadź:
* pochylony string `str`,
* wynik metody `stripTags()`, która usuwa tagi znajdujące się wewnątrz stringu.

### 9.4. Obsługa zdarzeń w Prototype.
Dodaj obsługę zdarzenia 'click' dla elementu o id='button'. Zastosuj zapis: `Event.observe($("button"), "click", respondToEvent)`, gdzie kolejne parametry to: element na którym wywołano zdarzenie, typ zdarzenia, funkcja obsługująca zdarzenie. Funkcja przyjmiue jako parametr event.
W funkcji obsługującej zdarzenie wyprowadź do okienka alert:
* event,
* element, na którym wywołano zdarzenie - zastosuj metodę `element()`,
* wynik metody `isLeftClick()`, która sprawdza, czy zdarzenie zostało wywołane przez koliknęcie lewym przyciskiem myszy.
W Event.observe() zmień obiekt, na którym wywoływane jest zdarzenie z button na documet.
W funkcji obsługującej zdarzenie wyprowadź do okienka alert:
* współrzędne x i y klikniętego punktu - użyj metod `pointerX()` i `pointerY()`.

### 9.5. Formatowanie danych wyjściowych.
Utwórz dwa produkty i zapisz do zmiennych `product1` oraz `product2`. Obiekty przyjmują po dwie pary klucz/wartość: {"name" : "Kurs JS", "price" : 45.00} oraz {"name" : "Kurs PHP", "price" : 62.00}.
Utwórz wzorzec zapisu produktów - nowy obiekt `Template` i zapisz do zmiennej `tmpl`. Zastosuj zapis: `new Template("Nazwa produktu: #{name}. Cena: #{price}zł.")`.
Wartości podane w nawiasach klamrowych będą pobierane z kluczy o tych nazwach i wstawiane dynamicznie.
Do paragrafu o id="par" wstaw `product1` stosując wzorzec - użyj metody `evaluate()` dla wzorca `tmpl`, która przyjmuje obiekt jako parametr.
Podobnie do paragrafu wstaw `product2`.

### 9.6. Żądania AJAX w Prototype.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Dodaj obsługę zdarzenia 'click' dla elementu o id='button'. Przy każdym kliknięciu ma być wykonywana funkcja `doReqest`.
Zdefiniuj funkcję `doReqest()`, która wysyła zapytanie o plik 'data.json' metodą 'get'. W tym celu utwórz nowy obiekt Ajax.Request - zastosuj zapis:
`new Ajax.Request('data.json', {
    method: 'get',
    onSuccess: successFn,
    onFailure: failureFn
});`
W przypadku wykonania zapytania z powodzeniem, wykonywana jest funkcja `successFn()`, natomiast w przypadku niepowodzenia, wykonywana jest funkcja `failureFn()`.
Zdefiniuj funkcję `successFn()`, która przyjmuje jako parametr odpowiedź 'response'. Jeżeli status odpowiedzi wynosi 200, wprowadź odpowiedź do paragrafu o id='par' w formie tekstu - właściwość `responseText` odpowiedzi. Możesz też przekształcić tekst odpowiedzi w obiekt używając metody `evalJSON()` z parametrem true.
Zdefiniuj funkcję `failureFn()`, która przyjmuje jako parametr odpowiedź 'response'. Funkcja ma wprowadzać do paragrafu o id='par' tekst "Błąd żądania".

### 9.7. Klasy w Prototype.
Utwórz klasę zapisaną do zmiennej `Product`. Użyj zapisu `Class.create()`. Metoda `create()` przyjmuje jako parametry konstruktor, metody i właściwości. Parametry umieszczone są w nawiasach klamrowych oddzielanych przecinkami. Wewnątrz nawiasów znajdują się pary nazwa/wartość. Konstruktor oraz metody jako wartość przyjmują funkcję. Konieczne jest zdefiniowanie konstruktora, który przyjmuje nazwę klucza `initialize`. Funkcja przypisana do konstruktora może przyjmować parametry, które należy przypisać do właściwości klasy np. `this.name = name`.
Utwórz konstruktor, który pobiera parametr `name` i przypisz go do właściwości klasy.
Utwórz metodę `showName()`, która zwraca właściwość `name`.
Utwórz klasę `Soft`, która dzieciczy z klasy Product. Użyj metody `Class.create()` wstawiając jako pierwszy parametr `Product`. Nie twórz osobnego konstruktora dla klasy `Soft`, nie dodawaj też nowych metod.
Utwórz obiekt s1 klasy `Soft`. Jako parametr konstruktora podaj "Windows 10".
Pobierz właściwość name z obiektu `s1` i wprowadź ją do paragrafu o id='par'.
Wywołaj metodę showName na obiekcie `s1` i wprowadź ją do paragrafu.
Sprawdź, czy s1 jest instancją Soft oraz Product.
