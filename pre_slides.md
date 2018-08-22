Kapitel:

- Kommunikation
- Agiles Arbeiten
    - Sinn und Zweck von Scrum
- Umgang mit anderen
- Konfliktmanagment
- Selbstentwicklung
    - Richtig lernen
    - Auf sich achten



# Abstract

# How to survive software development

## Nicht technische Herausforderungen in der Softwareentwicklung

Einige (wenn nicht die meisten) Probleme in IT Projekten sind nicht technischer, sondern sozialer Natur. Und oft ist es auch nicht das technische Fachwissen, sondern die sogenannten "Soft skills", die einen Entwickler zu einem "gutem Entwickler" machen.
Dieser Talk lässt die Technik mal außen vor und schaut auf soziale, menschliche, und andere Phänomene, zeigt Lösungsansätze für bekannte Anti-Pattern und soll helfen, in der gefährlichen Welt der Softwareentwicklung zu überleben.
Lukas arbeitet seit fast sechs Jahren bei SensioLabs, hat viele verschiedene Teams kennen gelernt, und interessiert sich seit langem für soziale Strukturen in Teams.

=============================================

    # How to survive software development

    ## Nicht technische Herausforderungen in IT Projekten

    # Wer ist das da vorne?

    - Lukas Sadzik
    - Softwareentwickler & Trainer @ SensioLabs DE
    - @ko_libri

    # tl:dr

    ![stop look think, are you eating yourself](images/stop-look-think-oglaf.jpg)

    Info:
    Im Grunde wird alles, was ich sage, mehr oder weniger auf dieses Denkschema hinauslaufen: Schaffen, Reflektieren, anpassen, und von Vorne.

    # Cache invalidation and naming things

    Info:
    So gut wie alle Probleme lassen sich in eine dieser beiden Kategorien einordnen.
    Naming things: Alles neue, mit dem ich konfrontiert werde (es bekommt erst dann einen Namen, wird erst dadurch greifbar). Aber auch so gut wie jede Art von Kommunikaton.
    Cache invalidation: Jede (vermeintlich) bekannte Situation, die wiederholt eintritt. Aber auch: jede Reflektion über Passiertes.

    # Woraus besteht Softwareentwicklung

    - Den Kunden verstehen
    - Problemstellung in kleine Problemchen zerteilen
    - Code schreiben

    Info: 
    Je besser man die ersten beiden Tasks erledigt, desto einfacher wird der letzte Part.
    Der technische Part beginnt erst zuletzt. Alles davor ist soziale Interaktion.

# Arten von Kommunikation

## "Sprachliche Unschärfe" & Verfügbarkeit der Informationen

Info:
Umgangssprache ist nicht immer eindeutig. 
Eindeutige Fomulierungen ist schwer zu sprechen und zu hören. Aber einfacher zu schreiben und zu lesen.
Gesprochene Inhalte muss ich notieren oder merken. Bereits Aufgeschriebenes kann ich jederzeit wieder lesen.

Beispiel:

In der Klasse `ShopApp/Basket/Model/Product` gibt es einen Bug, der dazu führt, dass in der `ShopApp/Checkout/Payment/CreditCardProvider` in der `foreach`-Schleife in der Methode `transferData` auf einen nicht existenten Schlüssel zugegriffen wird.

## Direkt

von Angesicht zu Angesicht im selben Raum

- Synchron
- Zu zweit schnell
- In Gruppen immer langsamer
- Undokumentiert
- Bei Gruppen ab ca. 8 Leuten sollte ein Moderator dabei sein

## Telefon/Sprachchat

- Synchron
- Schneller als schreiben, durch undeutliche Verbindungen aber langsamer als direkte Kommunikation
- Es kann immr nur ein einziger reden, sonst versteht man gar nichts mehr
- Komplexe zusammenhänge lassen sich nur schwer transportieren

## Videochat

- Synchron
- Fast so zuverlässig wie Direkte Kommunikation
- Durch das "sich einander sehen" mehr Möglichkeiten (Gestikulieren, Handzeichen, etc)

## Chat

- Asynchron
- Dokumentiert
- Schriftsprache ist häufig präziser als gesprochene Sprache
- In kleinen Gruppen (2-3 Leute) langsamer als direkte Kommunikation
- In größeren Gruppen schneller.
- "Threads" vereinfachen die Übersicht
- Benötigt erst ab einer sehr großen Teilnehmerzahl Moderation


## Große Meetings

Ein Ansatz für große Meetings mit technischem Inhalt:

Gruppe aufteilen in "Diskutierer" und "Verifizierer".
während die Diskutierenden ihre technische Lösung besprechen, kontrollieren die Verifizierer die Ansätze auf ihre Machbarkeit/Korrektheit.
Nur die Verifizierer haben "Bildschirmkontakt".

------

    # Softwareentwicklung ist eine soziale Aufgabe

    Info:
    Enthält eine Menge Kommunikation
    Somit auch eine Menge Platz für Missverständnisse

    # Softwareentwicklung ist eine kontinuierliche Aufgabe

    Info:
    Durch sich ständig ändernde Technologien ändern sich unsere Werkzeuge ständig.
    *Lernen* ist DIE Kernfähigkeit eines jeden Entwicklers.

------

# Agile Softwareentwicklung ist Lernen

- Du musst lernen zu versagen

------

# Wie man das Fass zum überlaufen bringt

## Dinge, die man vermeiden sollte

---

## Fingerpointing

- Kommt einer direkten Attacke auf die Person gleich
- Verwandelt sich sofort in einen Konflikt

### Stattdessen

- Das eigentliche Problem ansprechen, nicht die vermeintlich schuldige Person
- Hilfreiche Formulierung: "Wir sollten" anstatt "Du solltest"

---

## Mit dem Zaunpfahl winken

- Wird entweder nicht verstanden, oder missverstanden

Info:
Melvins & Phantomas BIG Band Geschichte hier einbauen

### Stattdessen

- Klar und deutlich ansprechen, was Sache ist

---

## Inselwissen aufbauen

- Mitarbeiterin XXY darf niemals kündigen/krank werden/Urlaub haben

### Stattdessen

- Pull Requests, Pair Programming

------

# Was ist dieses Scrum

## und warum machen das alles falsch

### Kern von Scrum

- Sprints (detaillierte Planung nur auf kurze Zeit)
- Daily (Tägliche updates über Blocker)
- Retros (Wie können wir uns verbessern)

### Werte von Scrum

- Selbstbestimmtheit des Teams
- Gleichberechtigung im Team

### Was kann man mit Scrum erreichen

- Eigene Arbeitsmethoden verbessern
- Schnell Entscheidungen treffen
- Schnell auf Veränderungen reagieren

### Was kann Scrum nicht

- Codequalität verbessern
- Ergebnisse zu Zeitpunkt X garantieren
- Mitarbeiter motivieren
- Wissen teilen



------

# Arten von Product Ownern

## Der Strohmann

- Keine Entscheidungsgewalten
- Vertritt das Team nicht

### Wie mit umgehen?
- Versuchen zu unterstützen
- Wenn sich der PO nicht für das Team einsetzt, muss sich das Team für den PO einsetzen

## Die Diktatorin

- Muss über jedes Detail bestimmen
- Gibt technische Lösungen vor

### Wie mit umgehen?

- Rollenverteilung ansprechen
- Kompetenzen klären

## Der Fachidiot

- Glaubt, technisches Verständis zu haben (hat es aber nicht)
- Unterschätzt Aufwände

### Wie mit umgehen?

- Rollenverteilung ansprechen
- Kompetenzen klären

## Die ehemalige Entwicklerin

- Hat hohes technisches Verstädnis
- Gibt technische Lösungen vor

### Wie mit umgehen

- Rollenverteilung ansprechen
- Ohne selbst daran zu programmieren kann man über komplexe Systeme keinen überblick haben.

## Mrs. Monitor

- Muss ständig über den aktuellen Stand bescheid wissen
- Prüft jede Stunde den Stand der Tickets
- Schaut über Schultern

### Wie mit umgehen?

- Notwendigkeit für ungestörtes Arbeiten klarstellen
- Ticketsystem aktuell halten
- Mini-Reviews zu festen Zeitpunkten einrichten

## Das Kompetenzteam

- Gruppe von "PO's"
- Übernimmt entscheidene Aufgaben der Entwickler (Wie Schätzungen, Planung, etc)
- Unklarheit, wer der genaur Ansprechpartner ist

### Wie mit umgehen?

- PO-team auflösen (Vielleicht auch auf mehrere Dev-Teams)

# Arten von Scrummastern

## The Human Scrum

- Hat seinen Weg und zieht den durch
- Achtet nicht auf Teambedürfnisse

### Wie mit umgehen?

- Bedürfnisse des Teams ansprechen
- Unsinnigkeiten von Methoden aufzeigen
- Selbst Methoden vorschlagen

## Die Therapeutin

- Interessiert sich nur für die Stimmung im Team
- Macht viele "Spiele"

### Wie mit umgehen?

- Zweck der Spiele hinterfragen
- "Was glaubst Du, sind unsere Probleme im Team?"

## Der Interne

- Nicht unabhängig
- Karriere hängt von erfolg des Teams ab

### Wie mit umgehen?

- Schwierig

## PO's Schoßkatze/Dev-Buddy

- Schlägt sich auf eine Seite des Teams
- Stört den Teamzusammenhalt

### Wie mit umgehen?

- Team muss zusammenarbeiten

# Arten von Entwicklern

## Prof. Dr. Dr. Schneemann

- Akademischer Hintergrund, hohes Wissen
- Zu abgehoben für den Rest des Teams

### Wie mit umgehen?

- Verständnis schaffen, dass die anderen keine Akademiker sind
- Dinge schaffen lassen und diese dann auch präsentieren lassen

## Arroganter Stinkstiefel, schlechter

- Überschätzt sich maßlos
- Macht andere/Arbeit von anderen schlecht

### Wie mit umgehen?

- Mühlselig, aber immer wieder widerlegen
- Sachlich bleiben, nur den Code, nie die Person kritisieren.

## Arrogante Stinkstiefelin, gute

- Liefert sehr gute Arbeit
- Macht andere/Arbeit von anderen schlecht

### Wie mit umgehen?

- Auf "privater" Ebene Kontakt knüpfen
- Sich selbst immer wieder klarmachen, dass die Arbeit, nicht die eigene Person kritisiert wird.

## My home is my castle

- Arbeit im Home office
- Niemand kennt ihn

### Wie mit umgehen?

- Mal ins Büro einladen, Teamevents veranstalten
- Kommunikation! 

## Das Schalentier

- Kommt nur sehr sehr sehr langsam aus sich heraus

## Noob

- Wenig Erfahrung
- Mischt sich in alles ein, um Erfahrung zu sammeln

### Wie mit umgehen?

- Mitspielen lassen
- Mögliche Rolle: Wenn der Noob es versteht, ist die Aufgabe gut formuliert

## Kacknoob

- Wenig Erfahrung
- Hält sich aus allem raus

### Wie mit umgehen?

- Motivieren und in einen Noob verwandeln

## The Alien

- Der Kollege, der die Sprache nicht versteht

### Wie mit umgehen?

- So, you have to support them. It's a benefit. But stay pragmaticaly!

## Copycat

- Kopiert sich seinen Code aus andere Projekten, Stackoverflow, etc.

### Wie mit umgehen?

- Muss geschult werden

## Der Evangelist

- Wirbt ständig für eine bestimmte Software, die alle Probleme löst

### Wie mit umgehen?

- Softwarestack klarstellen

## Der Berater

- Externer Mitarbeiter
- Spezialist für einen Teilaspekt im Projekt
- Hat in der Regel umfangreiche Projekterfahrung
- Möchte das Projekt auf einen deutlich höheren technischen Stand bringen

### Wie mit umgehen

- Von der Erfahrung profitieren
- Zügeln, sofern Forderungen den Rahmen sprengen
- Kompromisse eingehen. Migrationsweg aushandeln



# Am Ball bleiben

## Die Kernfähigkeit eines jeden Entwickler ist die Fähigkeit zu Lernen

Info:
Wir müssen uns ständig an neue Anforderungen und auch an neue Möglichkeiten anpassen

Die Zeiträume im PHP Umfeld sehen auf den ersten Blick vielleicht etwas lange aus, jedoch sollte man im Hinterkopf behalten, wie lange man benötigt um ein neues Feature überhaupt zu bemerken und dann auch tatsächlich Gelegenheit bekommt, es anzuwenden.


14 Jahre: PHP5: 13. Juli 2004	
09 Jahre: Namespaces: 30. Juni 2009
07 Jahre: Version 2 ist im Juli 2011 
06 Jahre: []: 1. März 2012
06 Jahre: Composer: 2012
03 Jahre: PHP7 3. Dezember 2015
02 Jahre: PHP7.1 (:void, :?returnType) 1. Dezember 2016
01 Jahre: PHP7.2 (:object) 30. November 2017

## Lernen im Beruf !== Lernen in der Schule

Info:
Methoden und auch Ziele sind andere als in der Schule

Spirallernen:
Am ersten Tag ein Lernpaket lernen.
Am zweiten Tag das gelernte wiederholen und weiteren Stoff dazunehmen
Am dritten Tag das gelernte Wiederholen und weiteren Stoff dazunehmen
usw.
Gut für neue Programmiersprachen, wird im Grunde von selbst erledigt, da man bereits gelernte Konzepte einfach weiter verwendet.


## Das gerlernte Anwenden

Info:
Kleine Nebenprojekte lassen einen das gelernte direkt Anwenden.
Es spielt keine Rolle, ob das ein reelles Projekt ist, das auch irgendwann fertig wird oder auch genutzt wird.

Die besten Ergebnisse jedoch erziehlt man, wenn man das gelernte mit anderen teilt und Feedback für die eigene Umsetzung bekommt.
Man braucht keine Angs haben, andere zu fragen. Man bekommt eigentlich immer eine passende Antwort: Entweder der andere will helfen, oder er will sich profilieren. Beides führt zum selben Ergebnis, und beide Typen sind danach zufrieden.


## Lernen durch Lehren

Info:
Jemand anderem etwas beizubringen lässt einen das gelehrte durch andere Augen sehen.
Oft reicht es, nur einen minimalen Vorsprung zu haben, oder nur ein grobes Konzept zu wissen. Bei Fragen kann man gemeinsam nach der Antwort suchen.
Durch die Fragen des anderen wird der Blickwinkel auf das gelernte verändert und somit neue Arten des Verstädnisses geschaffen.


## Ausprobieren > Informieren

Den größten Lernerfolg hat man durch ausprobieren. Eine neue Sprache lernt man nicht durch Bücherlesen auf dem Heimweg.

## Um zu lernen muss man Fehler machen

Info:
Beispiel Schach: Um besser zu werden, muss man gegen stärkere Gegner spielen. Womit man zwangsläufig verliert.
Aber auch das "Fehler machen" will gelernt sein.
Wie gehen wir mit Softwarefehlern (Bugs) um? Wir schreiben Tests, damit er nicht mehr vorkommt, und beheben den Fehler. Beim Lernen ist es nicht wirklich anders: Man lernt von dem Fehler, prägt ihn sich sein und findet einen Weg, diesen Fehler nicht mehr zu machen.


------

# Take care of yourself


## Henne und Ei Problem:

Die glücklichen Hühner legen die besseren Eier

Info:
Und die glücklichen Entwickler legen den besseren Code

## Bleib gesund

### Common mental disorders in software development

- Impostor syndrome
- Depression
- Burnout
- Narcissistic personality disorder
(not really common, but good to know the name to talk about it)
- Aspberger
- Borderline

### Der ergonomische Arbeitsplatz



## Bleib glücklich

## Habe Spaß an dem, was Du tust


------

# Konfliktsituationen

## Allgemein

- "Ja, wie finde ich das denn"
- Konflikte nicht vor Publikum austragen
- Professionell bleiben
- Das Gespräch beenden und zu einem späterem Zeitpunkt fortsetzen
- Ziel ist nicht, den anderen von etwas zu überzeugen. Sondern ihm meinen Standpunkt verständlich zu machen. Und den des anderen zu verstehen.


Info:


Anektdote aus B. erzählen:
Entwickler spricht (organisatorisches) Problem zum x-ten Mal in der Retro an.
PO bemerkt "das sagst Du jedes mal"
Dev: "Ja, weil sich nichts ändert"
PO verliert die Beherschung "Du wirst dafür bezahlt, dass Du hier programmierst"
Dev (macht alles richtig) bleibt ruhig, sagt gar nichts mehr.

## "Fachliche" Konflikte

- z.B. bei der Entscheidung über eingesetzte Software (A mag Symfony, B mag Laravel)
- Achtet darauf, dass eure Argumente sachlich bleiben, anstatt nur Vorlieben und eigene Gewohnheiten durchzusetzen
- Etwas nicht zu kennen ist kein Grund, es nicht zu verwenden. 
- Im Hinterkopf behalten, dass für eine Lösung argumentiert wird, nicht für/gegen eine Person
- Keinen Glaubenskrieg veranstalten

## Sozialer Konflikt

- Auf sozialer Ebene austragen, nicht auf der Arbeitsebene

Info:
Auf keinen Fall PRs ablehnen, oder fachliche Ideen schlechtreden, nur weil sie von dem doofem Kollegen kommen.

Anekdote:
Der neue, fähige, Mitarbeiter stößt ins Team. Er kann was, weiß das, und muss sich auch dementsprechend positionieren.
Die anderen Kollegen sehen nur einen arroganten Menschen, der sich da ins Team drängt und auf Wichtig macht.
Wo ist das Problem? => Im Team (bzw. bei Dir)! 

# Wenn nichts mehr hilft

## Kündigen

- Entwickler sind Mangelware.
- Dennoch sollte man auf seine Reputation achten. ;)

# Weiterführendes

- [Anti Pattern auf Wikipedia](https://de.wikipedia.org/wiki/Anti-Pattern)
- [Antipatterns und Missverständnisse in der Softwareentwicklung](https://www.youtube.com/watch?v=E0_Y53ci9cw) von Fefe
- [Erfolgreich Dein Leben meistern](https://www.youtube.com/watch?v=j3cRo2wOBms) von Vera F. Birkenbihl
- Stackexchange





















