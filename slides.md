<!-- -- -- -- -- -- -- INTRO -- -- -- -- -- -- -->

# How to survive software development

## Nicht technische Herausforderungen in IT Projekten

???
- Dies ist ein rein nicht-technischer Talk
- Es werden Klischees genannt und verwendet.
    Dies dient nicht dazu, sich über diese Klischees lustig zu machen, 
    sondern um die zu Grunde liegenden Eigenarten ansprechen zu können, einen Namen dafür zu haben
- Viele werden vieles schon kennen. Dennoch, so kompakt gibt es dieses Wissen nicht noch einmal
- Vieles in diesem Talk beruht auf persönlicher Erfahrung und Reflextion mit anderen über das Erfahrene.
    Das impliziert auch, dass vieles Meinungen und keine Fakten sind. 
- Euere (die der Zuschauer) Aufgabe ist es nun, das hier erfahrene zu Hinterdenken und selbst Lösungen zu entwickeln.
---

# Wer ist das da vorne?

- Lukas Sadzik
- Softwareentwickler & Trainer @ SensioLabs DE
- @ko_libri

???
Ich bin der Lukas, arbeite mit viel zu wenig anderen anderen Entwicklern bei Sesiolabs und mag Twitter.
---

# tl:dr
--

![stop look think, are you eating yourself](images/stop-look-think-oglaf.jpg)

???
Im Grunde läuft alles auf dieses Denkschema heraus:: Planen, Umsetzen, Reflektieren, Anpassen und von Vorn.
---

# Klischees über Softwareentwickler
--

- Introvertiert
--

- Nerdig
--

- Eher unsozial
--

- Kellerkind

???
Lustig anfangen.
Mal in die Runde Fragen, wer alles Softwareentwickler ist, wer Projemtmanager/PO, Scrummaster, Stakeholder
---

# Getting started
---

# Cache invalidation and naming things

???
So gut wie alle Probleme lassen sich in eine dieser beiden Kategorien einordnen.
Naming things: Alles neue, mit dem ich konfrontiert werde (es bekommt erst dann einen Namen, wird erst dadurch greifbar). Aber auch so gut wie jede Art von Kommunikaton.
Cache invalidation: Jede (vermeintlich) bekannte Situation, die wiederholt eintritt. Aber auch: jede Reflektion über Passiertes.
---

# Woraus besteht Softwareentwicklung?
--

1. Den Kunden verstehen
--

2. Das Problem verstehen
--

3. Code schreiben

???
Je besser man die ersten beiden Aufgaben löst, desto einfacher wird der letzte Teil.
Die ersten Aufgaben sind soziale Aufgaben, nur die letzte ist technischer Natur.
---

# Softwareentwicklung ist:
--

- Arbeit mit Menschen
???
Es beinhaltet eine Menge Kommunikation
Und somit auch Raum für jede Menge Missverstädnisse
--

- Gehirnarbeit
???
Will meinen, das ist der Muskel, mit dem wir unser Leben verdienen.
--

- Niemals fertig
???
Wer hat schonmal ein ganzes Projekt lang perfekten Code geschrieben? 
Und selbst wenn, die Tools entwickeln sich weiter.
--

- Lernen
???
Womit neben neuen Technologien auch das Lesen von fremden Code gemeint ist. Das ist ebenfalls Lernen
---

<!-- -- -- -- -- -- -- KAPITEL KOMMUNIKATION -- -- -- -- -- -- -->
# Kommunikation
---

# Man kann nicht nicht kommunizieren

Paul Watzlawick
---

# Das Kommunikationsquadrat

Jede Botschaft setzt sich aus diesen Vier Seiten zusammen:

- Appell (was ich bei dir erreichen möchte)
- Selbstkundgabe (was ich von mir zu erkennen gebe)
- Beziehungshinweis (was ich von dir halte und wie ich zu dir stehe)
- Sachinformation (worüber ich informiere)

F. Schulz von Thun

---

# Sprachliche Unschärfe

???
Umgangssprache ist nicht immer eindeutig. 
Eindeutige Fomulierungen ist schwer zu sprechen und zu verstehen. Beispiel: 
In der Klasse `ShopApp/Basket/Model/Product` gibt es einen Bug, der dazu führt, dass in der `ShopApp/Checkout/Payment/CreditCardProvider` in der `foreach`-Schleife in der Methode `transferData` auf einen nicht existenten Schlüssel zugegriffen wird.
Aber einfacher zu schreiben und zu lesen.
Gesprochene Inhalte muss ich notieren oder merken. Bereits Aufgeschriebenes kann ich jederzeit wieder lesen.
---

# Arten von Kommunikation
---

# Direkt

Angesicht zu Angesicht im selben Raum

???
- Synchron
- Sehr schnell mit zwei Menschen
- Langsamer, je mehr Menschen dazukommen
- Undokumentiert
- Wird je schneller vom Thema abkommen, je mehr Menschen involviert sind
- Mit der Größe der Gruppe wächst auch der Bedarf an einem Moderator
---

# Telefon/Sprachchat

???
- Synchron
- Faster than writing, but slower than direct communication
- Only one can talk, otherwise no one will understand anything
- Complex connections are hard to transport
---

# Videochat

???
- Synchron
- Almost the same as direct communication
- Body language is possible
---

# Chat

???
- Asynchron
- Dokumentiert
- Schriftsprache ist häufig präziser als gesprochene Sprache
- In kleinen Gruppen (2-3 Leute) langsamer als direkte Kommunikation
- In größeren Gruppen schneller.
- "Threads" vereinfachen die Übersicht
- Benötigt erst ab einer sehr großen Teilnehmerzahl Moderation
---

# Große Meetings

???
Ein Ansatz für große Meetings mit technischem Inhalt:

Gruppe aufteilen in "Diskutierer" und "Verifizierer".
während die Diskutierenden ihre technische Lösung besprechen, kontrollieren die Verifizierer die Ansätze auf ihre Machbarkeit/Korrektheit.
Nur die Verifizierer haben "Bildschirmkontakt".
---

<!-- -- -- -- -- -- -- KAPITEL AGILITÄT -- -- -- -- -- -- -->
# Was ist dieses Scrum
--

## und warum machen das Alle falsch
---

# Warum so Agil
--

- Mensch > Prozess
???
Alles, was die Arbeit stört wird weggeschafft!
--

- Funktion > Dokumentation
???
Ziel von agilen Methoden ist immer eine funktionierende Software zu haben, an der weitere Features implementiert werden können (letzteres ist der entscheidene Punkt)
--

- Kollaboration > Vertragliches
???
Auch: Interne Positionen (Junior, Senior) werden hinten angestellt.
Hintergedanke: Ist der Kunde glücklich, ist er eher bereit zu zahlen.
--

- Realität > Plan
???
Eigentlich "Reagieren < dem Plan folgen".
"Realität" lässt aber offen, ob man diese überhaupt mitbekommt ;)
(Zieht den Bogen zum nächsten Slide: Scrum)
---

# Kern von Scrum

- Sprints (detaillierte Planung nur auf kurze Zeit)
???
Zahlt auf schnelles Reagieren ein
--

- Daily (Tägliche updates über Blocker)
???
Kollaboration und Reaktionszeit verkürzen
--

- Retros (Wie können wir uns verbessern)
???
Menschen statt Prozessen
Kollaboration
--

- Rollen
???
Nimmt man alle Rollen weg, muss man im Grunde nur noch zwischen zwei Arten von Leuten im Projekt unterscheiden: Die, die was wollen, und die, die was können.
PO und Entwickler
Dazu noch jemanden, der denen das alle beibringt: Scrummaster
Und zum Schluss noch die Rolle, die das alles bezahlt, die Steakholer
--

???
Wer aufgepasst hat, hat bemerkt, dass der Agile Wert "Funktion > Dokumentation" von keinem Scrum-Aspekt berührt wird. Das stimmt. Scrum hat keine Auswirkungen darauf, ob ihr guten Code erhaltet, oder nicht.
---

# Werte von Scrum
--

- Selbstbestimmtheit des Teams
???
Zwei Richtungen: Fachliche und Technische
Fachlich: Was, Wann
Technisch: Wie, Wer, Wann
--

- Selbstorganisation des Teams
???
--

- Gleichberechtigung im Team
???
---

# Was kann man mit Scrum erreichen
--

- Eigene Arbeitsmethoden verbessern
--

- Schnell auf Veränderungen reagieren
--

- Projektstatus transparent machen
---

# Was kann Scrum nicht
--

- Codequalität verbessern
???
Wurde ja schon erwähnt
--

- Ergebnisse zu Zeitpunkt X garantieren
???
Feste Deadlines und Agiles arbeiten schließt sich ja im Grunde fast per definition aus.
--

- Mitarbeiter motivieren
--

- Wissen teilen
---

<!-- -- -- -- -- -- -- DAS SCRUMTEAM -- -- -- -- -- -- -->
# Das Scrumteam
???
So, das war jetzt schonmal ein wenig trockener Stoff.
Kommen wir zu was lustigem.
---

# Arten von Product Ownern
---

# Der Strohmann

- Keine Entscheidungsgewalten
- Vertritt das Team nicht

## Wie mit umgehen?
- Versuchen zu unterstützen
- Wenn sich der PO nicht für das Team einsetzt, muss sich das Team für den PO einsetzen
---

# Die Diktatorin

- Muss über jedes Detail bestimmen
- Gibt technische Lösungen vor

## Wie mit umgehen?

- Rollenverteilung ansprechen
- Kompetenzen klären
---

# Der Fachidiot

- Glaubt, technisches Verständis zu haben (hat es aber nicht)
- Unterschätzt Aufwände

## Wie mit umgehen?

- Rollenverteilung ansprechen
- Kompetenzen klären
---

# Die ehemalige Entwicklerin

- Hat hohes technisches Verständis
- Gibt technische Lösungen vor

## Wie mit umgehen

- Rollenverteilung ansprechen
- Ohne selbst daran zu programmieren kann man über komplexe Systeme keinen überblick haben. (Is' so!)
---

# Mrs. Monitor

- Muss ständig über den aktuellen Stand bescheid wissen
- Prüft jede Stunde den Status der Tickets
- Schaut über Schultern

## Wie mit umgehen?

- Notwendigkeit für ungestörtes Arbeiten klarstellen
- Ticketsystem aktuell halten
- Abnahmesystem bereitstellen (KEIN Testsystem)
???
Das Testsystem gehört den Entwicklern. Das darf kaputt gehen. Staging dagegen wird die Live behandelt.
---

# Das Kompetenzteam

- Gruppe von "PO's"
- Übernimmt entscheidene Aufgaben der Entwickler (Wie Schätzungen, Planung, Retros, etc.)
- Unklarheit, wer genau Ansprechpartner ist

### Wie mit umgehen?

- PO-team auflösen (Vielleicht auch auf mehrere Dev-Teams)
---

# Arten von Scrummastern
---

# The Human Scrum

- Hat seinen Weg und zieht den durch
- Achtet nicht auf Teambedürfnisse

## Wie mit umgehen?

- Bedürfnisse des Teams ansprechen
- Unsinnigkeiten von Methoden aufzeigen
- Selbst Methoden vorschlagen
---

# Die Therapeutin

- Interessiert sich nur für die Stimmung im Team
- Macht viele "Spiele"

## Wie mit umgehen?

- Zweck der Spiele hinterfragen
- "Was glaubst Du, sind unsere Probleme im Team?"
---

# Der Interne

- Nicht unabhängig
- Karriere hängt von Erfolg des Teams ab

## Wie mit umgehen?

- Schwierig
---

# PO's Schoßkatze/Dev-Buddy

- Schlägt sich auf eine Seite des Teams
- Stört den Teamzusammenhalt

## Wie mit umgehen?

- Team muss zusammenarbeiten
---

# Arten von Entwicklern
---

# Prof. Dr. Dr. Schneemann

- Akademischer Hintergrund, hohes Wissen
- Zu abgehoben für den Rest des Teams

## Wie mit umgehen?

- Verständnis schaffen, dass die anderen keine Akademiker sind
- Dinge schaffen lassen und diese dann auch präsentieren lassen
---

# Arroganter Stinkstiefel, schlechter

- Überschätzt sich maßlos
- Macht Andere/Arbeit von Anderen schlecht

## Wie mit umgehen?

- Mühlselig, aber immer wieder widerlegen
- Sachlich bleiben, nur den Code, nie die Person kritisieren.
---

# Arrogante Stinkstiefelin, gute

- Liefert sehr gute Arbeit
- Macht andere/Arbeit von anderen schlecht

## Wie mit umgehen?

- Auf "privater" Ebene Kontakt knüpfen
- Sich selbst immer wieder klarmachen, dass die Arbeit, nicht die eigene Person kritisiert wird.
---

# My home is my castle

- Arbeit im Home office
- Niemand kennt ihn

## Wie mit umgehen?

- Mal ins Büro einladen, Teamevents veranstalten
- Kommunikation! 
---

# Das Schalentier

- Kommt nur sehr sehr sehr langsam aus sich heraus
---

# Noob

- Wenig Erfahrung
- Mischt sich in alles ein, um Erfahrung zu sammeln

### Wie mit umgehen?

- Mitspielen lassen
- Mögliche Rolle: Wenn der Noob es versteht, ist die Aufgabe gut formuliert
---

# Kacknoob

- Wenig Erfahrung
- Hält sich aus allem raus

### Wie mit umgehen?

- Motivieren und in einen Noob verwandeln
---

# The Alien

- Der Kollege, der die Landessprache nicht versteht

### Wie mit umgehen?

- So, you have to support them. It's a benefit. But stay pragmaticaly!
---

# Copycat

- Kopiert sich seinen Code aus andere Projekten, Stackoverflow, etc.

## Wie mit umgehen?

- Muss geschult werden
---

# Der Evangelist

- Wirbt ständig für eine bestimmte Software, die alle Probleme löst

## Wie mit umgehen?

- Softwarestack klarstellen
---

# Der Berater

- Externer Mitarbeiter
- Spezialist für einen Teilaspekt im Projekt
- Hat in der Regel umfangreiche Projekterfahrung
- Möchte das Projekt auf einen deutlich höheren technischen Stand bringen

## Wie mit umgehen

- Von der Erfahrung profitieren
- Zügeln, sofern Forderungen den Rahmen sprengen
- Kompromisse eingehen. Migrationsweg aushandeln
---

<!-- -- -- -- -- -- -- INTRO -- -- -- -- -- -- -->
