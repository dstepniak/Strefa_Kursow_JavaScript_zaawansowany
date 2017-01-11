# Kurs JavaScript zaawansowany.
## 4. Model zdarzeń w JavaScript.
### 4.1. Obsługa zdarzenia w JavaScript.
Pobierz element o id="button" i zapisz do zmiennej `btn`.
Do przycisku `btn` dodaj Event Listener dla zdarzenia "click" z funkcją showAlert.
Napisz funkcję showAlert, która pokaże okienko alert z informacją "Kurs JS".
Sprawdź działanie skryptu.
W funkcji showAlert() usuń Event Listener.
Jeszcze raz sprawdź działanie skryptu.
Usunięcie Event Listenera w funkcji obsługującej kliknięcie spowoduje, że obsługa zdarzenia nastąpi tylko przy pierwszym kliknięciu.

### 4.1. Metody i właściwości zdarzenia.
Pobierz element o id="button" i zapisz do zmiennej `btn`.
Pobierz element o id="link" i zapisz do zmiennej `lk`.
Dodaj Event listener dla zdarzenia "click" do `btn`.
Funkcja obsługująca zdarzenie przyjmuje argument event.
Sprawdź właściwość target obiektu event. Wynik wyprowadź do okienka alert.
Sprawdź właściwość type obiektu event. Wynik wyprowadź do okienka alert.
Dodaj Event listener dla zdarzenia "click" do `lk`.
Funkcja obsługująca zdarzenie przyjmuje argument event.
Podobnie jak dla `btn` przetestuj właściwość target obiektu event.
Zauważ, że po kliknięciu linku, następuje automatyczne przekierowanie do podanego w nim adresu.
Aby zapobiec domyślnej akcji, dla obiektu event wywołaj metodę preventDefault().
Dodaj Event listener dla zdarzenia "click" do obiektu `window`.
Funkcja obsługująca zdarzenie przyjmuje argument event.
Sprawdź właściwość target obiektu event. Wynik wyprowadź do okienka alert.
Przetestuj działanie skryptu po kliknięciu w okno (poza przyciskiem i linkiem) oraz po kliknięciu w przycisk lub link.
Zauważ, że po kliknięciu na przycisk lub link okienka alert otwierają się dwa razy.
Sprawdź właściwość currentTarget dla eventów przycisku, linku i okna. Wynik wyprowadź do okienka alert.
Właściwośc target informuje o tym, który element wywołał event, natomiast właściwość currentTarget informuje, na jakim elemencie został wywołany event.
Zauważ, że zdarzenie wywołane przez przycisk lub link przenosi się na element natrzędny window.
Aby zapobiec przenoszeniu eventu (propagacji), wywołaj metodę stopPropagation() dla któregoś z eventów.

### 4.3. Propagacja zdarzeń.
Pobierz element o id="image" i zapisz do zmiennej `img`.
Pobierz element o id="content" i zapisz do zmiennej `div`.
Dodaj Event listener dla zdarzenia "click" do `img` i do `div`.
Funkcje obsługujące zdarzenie przyjmują argument event.
W obu funkcjach dodaj okienko alert z odpowiednim komunikatem "img" lub "div".
Przetestuj działanie skryptu klikając na element `div` a następnie na `img`.
Zauważ, że przy kliknięciu na `img` pojawiają się kolejno obie informacje. Zdarzenie wywołane przez element wewnętrzny `img` przenosi się na element natrzędny `div`.
Dodaj obsługę kliknięcia dla elementu `window`, podobnie jak dla poprzednich elementów powinno pojawić się okienko z komunikatem "window".
Sprawdź jak poszczególne zdarzenia przenoszą się na elementy nadrzędne - w górę hierarchii elementów DOM.
Aby zatrzymać propagację zdarzeń, wywołaj metodę stopPropagation() dla eventu na elemencie `img` i `div`.
Jeszcze raz przetestuj działanie skryptu.

### 4.4. Właściwości myszy i klawiatury.
Pobierz element o id="image" i zapisz do zmiennej `img`.
Dodaj Event listener dla zdarzenia "click" do `img`.
Funkcja obsługująca zdarzenie przyjmuje argument event.
Przetestuj następujące własności obiektu event:
* `altKey` - zwraca informację, czy wciśnięty był klawisz alt,
* `ctrlKey` - zwraca informację, czy wciśnięty był klawisz ctrl,
* `button` - zwraca informację, który przycisk myszki został wciśnięty,
* `clientX` - zwraca odległość od lewej krawędzi okna,
* `clientY` - zwraca odległość od górnej krawędzi okna,
* `screenX` - zwraca odległość od lewej krawędzi ekranu,
* `screenY` - zwraca odległość od górnej krawędzi ekranu.
Wyniki wyprowadź do okienka alert.

### 4.5. Zdarzenie onmousewheel.
Pobierz element o id="content" i zapisz do zmiennej `box`.
Pobierz element o id="message" i zapisz do zmiennej `message`.
Dodaj Event listener do `box`, zdarzenie 'mousewheel'.
Obsługa zdarzenia:
W elemencie message umieść tekst "Wystąpiło zdarzenie mousewheel".
Przetestuj działanie skryptu przesuwając kółko myszki w górę lub w dół.
Dla obiektu `window` pobierz właściwość event i zapisz do zmiennej `e`.
Dla `e` pobierz właściwość wheelDelta i zapisz do zmiennej `mv`.
Wprowadź zmienną `mv` do akapitu `message`.
Zauważ, że właściwość wheelDelta przyjmuje dwie wartości:
* 120 gdy kółko myszki jest przesuwane w górę,
* 120 gdy kółko myszki jest przesuwane w dół.
