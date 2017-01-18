# Kurs JavaScript zaawansowany.
## 1. JSON.
### 1.3. Definiowanie danych typu JSON.
Dane typu JSON składają się z par "klucz" : wartość. Pary odzielane są przecinkami a całość umieszcona jest w nawiasie klamrowym. Dostępne typy danych dla wartości to: String, Number, Object, Array, Boolean, Null.
Utwórz prosty format JSON zawierający trzy klucze: "name", "price", "category". Do kluczy przypisz przykładowe wartości.
Dane w formacie JSON zapisz do zmiennej `data`.
Pobierz z dokumentu paragraf o id="p_name" a następnie wstaw do niego tekst pobrany z JSON. Dostęp do danych w formacie JSON jest analogiczny, jak w przypadku obiektów. Aby pobrać wartość z klucza name, można zastosować dwa sposoby odwołania: data.name lub data["name"].
Pobierz z dokumentu dwa pozostałe paragrafy o id="p_price" i id="p_category", a następnie wstaw do nich tekst pobrany z odpowiednich kluczy JSON.

### 1.4. Zapis w formie tablicy.
Obiekty JSON mogą zawierać również tablice.
Utwórz obiekt JSON i przypisz go do zmiennej `data`. Obiekt JSON powinien zawierać tablicę "products". W tablicy umieść dwa produkty - obiekty JSON, o identycznej strukturze jak w zadaniu 1.3. Pozostaw te same nazwy kluczy: "name", "price", "category", zmień jednak ich wartości.
Aby pobrać wartości z obiektu JSON zawierającego tablicę, należy odwołać się do odpowiednich jej elemnetów, czyli zastosować notację z nawiasami kwadratowymi i podać numer indeksu, a następnie odwołać się do konkretnego klucza, przechowującego wartość.
Dla nazwy pierwszego produktu zastosuj następujący zapis: `data.products[0].name`.
Pobierz pozostałe wartości dla produktu pierwszego i wyprowadź do odpowiednich paragrafów dokumentu. Następnie zrób to samo dla drugiego produktu.

### 1.5. Przetwarzanie za pomocą pętli.
Skopiuj skrypt z zadania 1.4. i przerób go w taki sposób, aby do elementu o id="content" wyprowadzić wszystkie wartości z tablicy w postaci listy nienumerowanej.
* Pozostaw obiekt JSON i usuń pozostały kod.
* Utwórz zmienną `output`, która będzie przechowywała listę nienumerowaną - strukturę html. Zmienna ta będzie wstawiona jako innerHTML do div o id="content".
* Do zmiennej `output` dodaj znacznik otwierający ul.
* W pętli for utwórz kolejne znaczniki li, zawierające wartości "name", "price" i "category" i dodaj je do zmiennej `output`. Przy każdym przejściu pętli powinny być dodawane trzy znaczniki li dla kolejnego produktu.
* Po zakończeniu pętli do zmiennej `output` dodaj znacznik zamykający ul.
* Zmienną `output` wstaw do div o id="content".

### 1.6. Pobieranie JSON z zewnętrznego pliku.
*Aby skrypt działał poprawnie, wszystkie pliki muszą zostać umieszczone na serwerze zdalnym!*
Aby pobrać dane z zewnętrznego pliku JSON należy skorzystać z metody `getJSON()` dostępnej w bibliotece jQuery. Bibliotekę jQuery należy wcześniej podpiąć do pliku html.
Metoda `getJSON()` pobiera z zewnętrznego pliku JSON dane przy użyciu http request metodą get.
Składnia metody `getJSON()`:
`$.getJSON(url,data,success(data,status,xhr))`
Argumenty metody `getJSON()`:
url - adres pliku, do którego wysyłane jest żądanie,
data - dane do wysłania na serwer (opcjonalnie),
success(data,status,xhr) - funkcja wykonywana w momencie pomyślnego wykonania żądania.
Argumenty funkcji success():
data - dane otrzymane z serwera,
status - status odpowiedzi  ("success", "notmodified", "error", "timeout", "parsererror"),
xhr - obiekt XMLHttpRequest.
* Skopiuj skrypt z zadania 1.5.
* Usuń obiekt JSON.
* Wywołaj metodę `getJSON()` dla obiektu jQuery. Jako url podaj "data.json", a jako success wstaw funkcję anonimową.
* Kod tworzący listę nienumerowaną z wartości pobranych z obiektu JSON przenieś do funkcji anonimowej (success).
