# Kurs JavaScript zaawansowany.
## 8. Zaawansowany obiektowy JS.
### 8.1. Literał obiektowy.
Zadeklaruj pusty obiekt i przypisz go do zmiennej `product`.
Utwórz właściwość `name` i przypisz do niej wartość "Kurs JS".
Utwórz metodę `showName` i przypisz do niej funkcję anonimową, która zwraca właściwość `name`.
W okienku alert wywołaj metodę `showInfo` dla obiektu product.
Obejmij kod komentarzem i utwórz taki sam obiekt stosując definicję literalną. Obiekt literalny jest otoczony umieszczony wewnątrz nawiasów klamrowych i składa się z par nazwa/wartość. Nazwa jest oddzielona od wartości dwukropkiem, natomiast pary nazwa/wartość są oddzielone od siebie przecinkiem.

### 8.2. Literał jako argument funkcji.
Pobierz element div o id="content" i zapisz do zmiennej `content`.
Utwórz funkcję `showInfo()`, która przyjmuje trzy argumenty: name, price, category. Utwórz zmienną `output` i przypisz do niej wartości wszystkich trzech argumentów oddzielone spacjami (konkatenacja stringów). Zmienną `output` wprowadź jako tekst do div `conctent`.
Wywołaj funkcję `showInfo()` wprowadzając odpowiednie argumenty i sprawdź działanie skryptu.
Jeżeli funkcja przyjmuje bardzo dużo argumentów, można wprowadzać je jako literał obiektowy - pary nazwa/wartość, co zwiękasza czytelność.
Obejmij kod komentarzem i utwórz nową funkcję `showInfo()`, która przyjmie jako argument literał obiektowy `args`. Funkcja ma wykonywać te same czynności, co poprzednio.
Aby pobrać wartości argumentów należy odwołać się do literału obiektowego a po kropce do odpowiedniej nazwy właściwości.
Wywołaj funkcję `showInfo()` wprowadzając jako argument literał obiektowy, zawierający pary nazwa/wartość, takie same jak w zakomentowanej funkcji. Sprawdź działanie skryptu.
Popraw funkcję tak, aby mogła przyjmować literał zawierający od jednej do trzech par, przy czym obowiązkowe jest wprowadzenie `name`, natomiast `price` i `category` są opcjonalne. W tym celu przypisz do zmiennej output wartość `name`. W instrukcjach warunkowych sprawdź, czy podane zostały wartości `price` i `category`, a następnie opcjonalnie dodaj je do zmiennej `output`.

### 8.3. Operator new.
Pobierz element div o id="content" i zapisz do zmiennej `content`.
Utwórz konstruktor `Product()`, ktory przyjmuje jeden parametr `name`. Wewnątrz konstruktora do właściwości `name` przypisz parametr `name`.
Utwórz obiekt Product używając operatora new i przypisz do zmiennej `p1`.
Do div `content` wprowadź jako tekst `typeof p1`. Sprawdź działanie skryptu.
Usuń operator new z obiektu `p1` i ponownie sprawdź działanie skryptu.
Sprawdź, czy możesz pobrać właściwość `name` z obiektu `p1` oraz czy `p1` jest instancją `Product` - użyj `p1 instanceof Product`. Ponownie dodaj operator new dla obiektu `p1` i sprawdź te same właściwości obiektu.
Do konstruktora Product dodaj instrukcję warunkową: jeżeli obiekt nie jest instancją Product, utwórz obiekt `Product` przy użyciu operatora new.
Znowu usuń operator new dla obiektu `p1` i przetestuj wszystko od nowa. Zauważ, że teraz `p1` jest instancją Product niezależnie od tego, czy został użyty operator new.

### 8.4. Funkcja jako obiekt.
W JavaScript każda funkcja jest jednocześnie obiektem.
Utwórz funkcję `showInfo()`, która przyjmuje parametr name i zwraca go.
Sprawdź, czy funkcja jest instancją Object. Wynik wyprowadź do div `content`.
Wprowadź kod źródłowy funkcji do elementu div `content`. Nie wywołuj funkcji, tylko ją przypisz (nazwa funkcji bez nawiasu).
Dla porównania wyprowadź do div `content` wynik wywołania funkcji (w nawiasie podaj parametr name).
Przypisz funkcję do zmiennej `info`. Wywołaj funkcję używając nazwy zmiennej, pamiętaj aby podać w nawiasie parametr name). Wynik wywołania wyprowadź do div `content`.
Obejmij dotychczasowy kod komentarzem.
Utwórz pusty obiekt `product`.
Utwórz zmienną `showInfo` i przypisz do niej funkcję, która nic nie wykonuje.
Utwórz właściwość `name` dla obiektu `product` i przypisz do niej wartość "Kurs JS".
Utwórz właściwość `name` dla funkcji `showInfo` i przypisz do niej wartość "funkcja showInfo".
Wyprowadź do div `content` właściwość name obiektu `product`.
Wyprowadź do div `content` właściwość name funkcji `showInfo`.
Przetestuj skrypt.
Zawuaż, że właściwość name obiektu została wyprowadzona do div, natomiast funkcji nie. Aby uzyskać dostęp do właściwości funkcji, musi być ona instancją Object, czyli musi być utworzona przy użyciu operatora new.
Dodaj opetator new przed funkcją i przetestuj ponownie skrypt.
*Funkcja utowrzona przy pomocy operatora new działa jak typowy obiekt, może posiadać właściwości, do których można przypisać wartości, może być przypisana do zmiennej, może być w różny sposób wywoływana.*

### 8.5. Słowo kluczowe this.
W JavaScript znaczenie słowa kluczowego `this` zmienia się dynamicznie w zależności od kontekstu, czyli miejsca w którym zostało użyte.
#### This odwołujące się do właściwości obiektu literalnego:
Zdefiniuj obiekt w formie literału i przypisz mu dwie własności: `name` z wartością "Kurs PHP" i `showName`, która jako wartość przyjmie funkcję anonimową. Funkcja ma zwracać nazwę obiektu. Użyj słowa kluczowego `this` i odwołaj się do właściwości `name` tego obiektu.
Wywołaj funkcję `showName()` na obiekcie `product`, a otrzymany wynik wprowadź jako tekst do paragrafu `message`.
W tym przypadku `this` oznacza obiekt Object i można się przez nie odwołać do właściwości obiektu literalnego, przypisanego do zmiennej `product`.
#### This odwołujące się do bieżącej instancji obiektu.
Zdefiniuj konstruktor `Product()`, który przyjmuje jeden parametr name. Przypisz ten parametr do właścowości `name` obiektu.
Utwórz instancję p1 używając słowa kluczowego new i konstruktora Product. Jako parametr podaj "Kurs JS".
Pobierz właściwość name obiektu `p1` i wprowadź jako tekst do paragrafu `message`.
W tym przypadku `this` odwołuje się do bieżącej instancji `Product`, czyli do `p1`. Jeżeli utworzonych zostanie więcej obiektów typu `Product`, `this` użyte w konstruktorze, będzie zawsze odwoływać się do bieżącej instancji.
#### This odwołujące się do nadrzędnego elementu - obiektu Window.
Zdefiniuj funkcję `test()`, która zwraca `this`. Wywołaj funkcję `test()` a wynik wprowadź jako tekst do paragrafu `message`.
W tym przypdku `this` odwołuje się do nadrzędnego elementu, czyli do obiektu Window.
#### This odwołujące się do obiektu wywołującego zdarzenie.
Do przycisku o id='btn' dodaj Event Listener zdarzenia 'click'. W funkcji dla tego zdarzenia do paragrafu `message` wprowadź słowo kluczowe `this`.
W tym przypadku `this` odwołuje się do obiektu, który wywołuje zdarzenie, czyli do przycisku - object HTMLButtonElement.

### 8.6. Właściwość 'prototype'.
Pobierz element div o id='content' i zapisz do zmiennej `content`.
Zdefiniuj konstruktor `Product()`, który przyjmuje jeden parametr name. Przypisz ten parametr do właścowości `name` obiektu.
Utwórz instancję p1 używając konstruktora Product. Jako parametr podaj "Kurs HTML". Podobnie utwórz instancję p2 podając jako parametr "Kurs JS".
Do obiektu p1 dodaj właściwość `category` z wartością "Internet".
Do div `content` wprowadź wartości właściwości `name` i `category` dla obiektów `p1` i `p2`.
Zauważ, że właściwość `category` została zdefiniowana tylko dla obiektu `p1`, dla obiektu `p2` uzyskamy wartość undefined.
Aby przypisać właściwość do wszystkich instancji Product należy posłużyć się obiektem prototype.
Dodaj do prototypu `Product` właściwość `category` z wartością "Internet" - użyj zapisu `Product.prototype.category`.
Dodaj do prototypu `Product` właściwość `showName`, która jako wartość przyjmie funkcję zwracającą właściwość `name` obiektu.
Dodaj do prototypu `Product` właściwość `showCatetory`, która jako wartość przyjmie funkcję zwracającą właściwość `category` obiektu.
Dla obiektów `p1` i `p2` wywołaj metody `showName()` i `showCatetory()`, wyniki wprowadź do div `content`.
Zauważ, że wszystkie właściwości zostały zdefiniowane dla obiektu `prototype Product` i są dostępne dla każdej instancji utworzonej przy użyciu konstruktora `Product()`.

### 8.7. Dziedziczenie w JavaScript.
Pobierz element div o id='content' i zapisz do zmiennej `content`.
Zdefiniuj konstruktor `A()`, który przyjmuje jeden parametr name. Przypisz ten parametr do właścowości `name` obiektu.
Do prototypu `A` przypisz metodę `showName()`, która zwraca właściwość `name` tego obiektu.
Do prototypu `B` przypisz nowy obiekt `A` - użyj słowa kluczowego `new` i konstruktora `A()` bez parametru.
Do konstruktora prototypu `B` przypisz funkcję `B` - użyj zapisu `B.prototype.constructor = B`.
Zdefiniuj funkcję B, która jest teraz konstruktorem B. Funkcja przyjmuje parametr name. Przypisz ten parametr do właścowości `name` obiektu.
Utwórz po jednej instancji obiektu A i B o nazwach `a1` i `b1`, które przyjmują jako parametr name odpowiednio "obiekt A" i "obiekt B".
Do div `content` wprowadź:
* właściwość `name` dla `a1`,
* wartość wywołania metody `showName()` dla `a1`,
* wartość `a1 instanceof A`
* wartość `a1 instanceof B`
* właściwość `name` dla `b1`,
* wartość wywołania metody `showName()` dla `b1`,
* wartość `b1 instanceof B`,
* wartość `b1 instanceof A`.
Zauważ, że:
* obiekt `b1` ma dostęp do metody `showName()`, którą dziedziczy z A.
* obiekt `b1` jest jesnocześnie instancją `B` i `A`.
* obiekt `a1` jest instancją `A` ale nie jest instancją `B`.
