const peopleOpinion = [
  {
    id: 1,
    name: "J. R.",
    date: "30 grudnia 2022",
    quote:
      "Bardzo polecam Panią Redler. Skomponowała moją dietę w oparciu o moje wyniki badań, z uwzględnieniem moich ograniczeń żywioniowych wymuszonych chorobami, a także preferencji kulinarnych - tego, co lubię i mogę jeść oraz jak lubię gotować. Zależało mi też, aby potrawy były szybkie do przygotowania - przy małym dziecku brakuje czasu. Otrzymałam fachową pomoc - zbilansowaną dietę, przy której nie czułam się stale głodna, przepisy dokładnie opisywały przygotowanie potraw. Samo gotowanie zajmowało mało czasu. Efekt to lepsze samopoczucie i redukcja masy ciała. Bardzo Pani dziękuję!",
  },
  {
    id: 2,
    name: "Sylwia P",
    date: "16 listopada 2022",
    quote:
      "Bardzo polecam panią Anie bardzo fachowa i rzetelna pomoc. Wszystko fajnie i dokładnie mi wytłumaczyła. Zmiana nawyków żywieniowych i utrata wagi.",
  },
  {
    id: 3,
    name: "Natalia N",
    date: "28 lipca 2022",
    quote:
      "Bardzo polecam panią Anie bardzo fachowa i rzetelna pomoc. Wszystko fajnie i dokładnie mi wytłumaczyła. Zmiana nawyków żywieniowych i utrata wagi.",
  },
  {
    id: 4,
    name: "Natalia N",
    date: "28 lipca 2022",
    quote:
      "Nasza współpraca rozpoczęła się w kwietniu. Na pierwszej wizycie Pani Ania przeprowadziła bardzo szczegółowy wywiad i wszystko dokładnie wytłumaczyła. Plan diety przygotowała pod moje preferencje i potrzeby z uwzględnieniem dolegliwości i chorób. Posiłki proste i szybkie, ale nie nudne. Nie chodzę głodna, nie podjadam. Na dzień dzisiejszy - 15kg. Pani Ania to osoba niezwykle ciepła, uśmiechnięta a przy tym bardzo profesjonalna i zaangażowana. Jestem w pełni zadowolona i nadal kontynuuję współpracę. Polecam w 100% konsultacje u Pani Ani.",
  },
  {
    id: 5,
    name: "Agnieszka",
    date: "22 lipca 2022",
    quote:
      "Obecnie jem więcej niż przed dietą i do tego jeszcze waga pokazuje coraz mniej. Smaczne i szybkie w przygotowaniu posiłki. Pani Ania jest bardzo miłą, przesympatyczną i konkretną osobą, z profesjonalnym podejściem. Polecam!",
  },
  {
    id: 6,
    name: "K B",
    date: "25 lutego 2022",
    quote:
      "Świetny dietetyk, jadłospis dopasowany do potrzeb. Dzięki dobrze dobranej diecie, w stosunkowo krótkim czasie udało mi się zrzucić ponad 10kg bez większych wyrzeczeń, wystarczyło odstawić 'nadmiar' jedzenia.",
  },
  {
    id: 7,
    name: "Radek",
    date: "9 lutego 2022",
    quote:
      "Gorąco polecam, bardzo miła i otwarta osoba, nawiązuje dobry kontakt z pacjentem. Przeprowadza dokładny wywiad odnośnie dotychczasowego sposobu żywienia, preferencji i ewentualnych alergii pokarmowych; obecnego stanu zdrowia i związanych z tym schorzeń i przypadłości, branych leków i suplementów; aktywności fizycznej itp. Co najważniejsze, nie czuć drastycznego „przejścia na dietę”. Jadłospis jest budowany na lubianych produktach, dostosowany do trybu życia, rodzaju i godzin pracy. Potrawy są różnorodne, a przy tym oparte na niewielkiej ilości produktów i łatwe do przygotowania – oszczędność czasu w kuchni to ogromny plus. Także propozycje nowych produktów i dań przypadły mi do gustu. Mówiąc krótko: kilogramy w dół, samopoczucie w górę.",
  },
  {
    id: 8,
    name: "Kasia",
    date: "13 listopada 2021",
    quote:
      "Pani Anna jest bardzo dobrym specjalistą, profesjonalnie i terminowo podchodzi do swoich obowiązków. Jednocześnie jest motywująca i daje wsparcie. Bardzo ważne jest to, że układa plan żywienia pod indywidualne potrzeby pacjenta, zarówno te wynikające ze stanu zdrowia, jak i upodobań i możliwości. Ja miałam taki jadłospis, że spokojnie gotowałam dla całej rodziny. Z Panią Anią zgubiłam ponad 17 kg. Dziękuję za pomoc i doceniam Pani pracę.",
  },
  {
    id: 9,
    name: "Wioleta",
    date: "9 listopada 2021",
    quote:
      "Bardzo empatyczna specjalistka, profesjonalne podejście do pacjenta, dieta dostosowana do indywidualnych potrzeb. Polecam",
  },
  {
    id: 10,
    name: "Karolina",
    date: "30 października 2021",
    quote:
      "Wspaniała dietetyczka! Planujac dietę zwraca szegolna uwagę na indywidualne potrzeby pacjenta. Polecam :)",
  },
  {
    id: 11,
    name: "Justyna",
    date: "30 września 2021",
    quote:
      "Ze współpracy z Panią Anią jestem zadowolona. Przed ułożeniem jadłospisu wypytała mnie szczegółowo o preferencje żywieniowe, alergie, ogólny stan zdrowia. Po otrzymaniu jadłospisu byłam podekscytowana, ponieważ zaproponowane dania są proste do przygotowania i bardzo smaczne. Jadłospis oferował zdrowsze alternatywy do znanych mi produktów/dań, które jadłam dotychczas. Kto by pomyślał, że to takie proste? :) Po dwóch miesiącach stosowania diety od Pani Ani i jej zaleceniach, a także wprowadzeniu większej ilości aktywności fizycznej, poprawiły mi się wyniki badań krwi (poziom cholesterolu całkowitego spadł) - po to właśnie udałam się do specjalisty ds. żywienia, a także zmienił mi się skład ciała, tzn. poziom tkanki tłuszczowej zmniejszył się, a poziom mięśni wzrósł. Podczas wizyt kontrolnych Pani Ania odpowiadała na wszystkie moje pytania, kontakt z nią jest bezproblemowy - zarówno bezpośredni, jak i telefoniczny/mailowy, a atmosfera podczas konsultacji bardzo sympatyczna. Szczerze polecam.",
  },
  {
    id: 12,
    name: "Gośka",
    date: "23 września 2021",
    quote:
      "Pani Ania jest niezwykle empatyczną i rzetelną osobą. Potrafi wysłuchać i zaproponować wygodną dietę. Dokładnie wszystko tłumaczy i nie krytykuje.",
  },
  {
    id: 13,
    name: "Wojciech",
    date: "24 kwietnia 2021",
    quote:
      "Witam . Od 18 stycznia 2021 do 24 kwietnia 2021 schudłem 26 Kg. Dobrze dobrana dieta . Smaczne ,syte i zdrowe posiłki .Trzeba stosować się do zaleceń . Bardzo polecam .Satysfakcja gwarantowana .",
  },
  {
    id: 14,
    name: "Sonia",
    date: "3 września 2020",
    quote:
      "Przemiły kontakt, krótki czas oczekiwania na plan posiłków. Sama dieta dokładnie taka, jaką chciałam, bardzo smaczne posiłki i dużo przepisów na proste, ale pyszne dania. Kilogramy lecą w dół. Polecam :))",
  },
  {
    id: 15,
    name: "Pacjent",
    date: "22 stycznia 2020",
    quote:
      "Bardzo dobry dietetyk z dużą wiedzą merytoryczną. Oprócz profesjonalnego podejścia, pani Ania jest bardzo sympatyczną osobą, co sprawia, że wizyta odbywa się w bardzo ciepłej atmosferze. Przepisy są proste i szybkie, składniki łatwo dostępne w sklepach i co najważniejsze dostosowane do indywidualnych preferencji. Zdecydowanie polecam.",
  },
  {
    id: 16,
    name: "Anna G.",
    date: "26 kwietnia 2019",
    quote:
      "Prawdziwa profesjonalistka! Wizyty są zawsze bardzo pomocne i pouczające. W dodatku Pani Ania posiada nieoceniony atut, jest pierwszy dietetykiem na którego trafiłam, który słucha. Dietę i wskazania modyfikuje w przypadku problemów, nie uznaje pierwszej próby i swojej propozycji, jako jedynej prawdy obiawionej. Wspaniała współpraca i rzeczywista motywacja! Polecam zdecydowanie wszystkim, też osobom zniechęconym już przez innych przedstawicieli tej profesji. Nie ocenia, a pomaga i wspólnie pracuje z nami nad problemami, które nie ograniczają się do wagi, ale szeroko pojętego zdrowia.",
  },
  {
    id: 17,
    name: "Maciek M.",
    date: "13 grudnia 2018",
    quote:
      "Pani Anna bardzo miła i rzetelna. Pomogła mi podjąć bardzo ciężką decyzję i zmotywować do ważnej zmiany w moim życiu. Fachowo doradza, polecam!",
  },
  {
    id: 18,
    name: "Agnieszka Snarska",
    date: "20 października 2018",
    quote:
      "Bardzo polecam Anie jako dietetyka! Nauczyła mnie jak jeść, aby być zdrowym. Przepisy Ani są łatwe i szybkie do przyrządzenia, a zarazem pyszne, dzięki nim odkryłam, ze jadłam za mało...co przy Hashimoto i niedoczynnosci tarczycy powodowało stały wzrost wagi. Dzięki zaleceniom, wskazówkom i jadłospisie uczę się zdrowo jeść wraz z cała rodzina. Produkty na przepisy są łatwo dostępne, można je kupic w każdym sklepie. Znacznie poprawiło się moje samopoczucie, za co ogromnie dziękuje :-) Dalszych sukcesów w pracy!!!",
  },
  {
    id: 19,
    name: "Alicja",
    date: "13 sierpnia 2018",
    quote:
      "Gorąco polecam Państwu Panią Anię .Jest to osoba bardzo ciepła,umiejąca słuchać ,a do tego profesjonalnie i indywidualnie podchodzi do pacjenta,co jest bardzo ważnym aspektem dla ludzi borykających się z różnymi bolączkami . W moim przypadku niedoczynność tarczycy,klimakterium i osteoporoza,a co za tym idzie nadwaga,z którą nie potrafiłam się uporać.Jadłospis ułożony przez Panią Anię jest łatwy do realizacji ,a dania smaczne i co najważniejsze,nie trzeba się głodzić :) .Waga spada,nie jestem ociężała,dobre samopoczucie powróciło :)Nastąpiła poprawa cery i włosów i oby tak dalej!Jestem bardzo zadowolona i wdzięczna Pani Ani ,którą jeszcze raz serdecznie polecam :)",
  },
  {
    id: 20,
    name: "Paweł",
    date: "24 listopada 2017",
    quote:
      "Witam. Szczerze bardzo polecam Panią Anne , pomogła mi poprawić znacząco wyniki morfologi gdyż choruję przewlekle na nowotwór ,a jak wiadomo przy tej chorobie wyniki dobrej morfologii to podstawa. Pani Anna jest bardzo miłą sympatyczną osobą, poświeciła mi bardzo dużo czasu zapoznając się dogłębnie z dokumentacją medyczną jaką jej dostarczyłem . W bardzo krótkim czasie otrzymałem pełną dietę wraz ze sposobem przyrządzania posiłków . Stosując się do zaleceń jak i do samej diety morfologia poprawiła się znacząco po niespełna dwóch tygodniach . Z czystym sumieniem polecam tą Panią, jest : cierpliwa sumienna, pracowita , bardzo zorganizowana, indywidualnie podchodzi do pacjenta . Oby więcej takich Lekarzy .",
  },
  {
    id: 21,
    name: "Jurek",
    date: "12 kwietnia 2017",
    quote:
      "Cwiczę od jakiegoś czasu. Zdążyłem się zorientować, że najlepsze efekty można osiągnąć dzięki diecie. Sam się na tym nie znam, wybrałem się więc do dietetyka. Na wadze sprawdzono mi skład ciała. Zostałem dokładnie wypytany o to jak wygląda moje jedzeni w ciągu dnia. Postanowiłem wprowadzić zmiany. Widzę efekty, jestem zadowolony z konsultacji. Polecam",
  },
];
