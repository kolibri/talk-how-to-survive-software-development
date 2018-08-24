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
Ich bin der Lukas, arbeite mit viel zu wenig anderen anderen Entwicklern bei Sensiolabs und mag Twitter.
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

# Dinge, die man vermeiden sollte

- Fingerpointing
???
Resultiert in den meisten Fännen direkt in einem Konflikt (Dazu später mehr)
--

- Mit dem Zaunpfahl winken
???
Anekdote:
Großraumbüro, ein Dutzend Entwickler unterm Dachgeschoss, Agenturprojekt, hoher Druck.
Einer der Entwickler hört über Lautsprecher Musik, meist sehr Metallastig.
Meine "grandiose" Idee, der Wink mit dem Zaunpfahl war dann der Musiktipp "Melvins & Fantomas, Big Band". Und wir haben es gehört, das ganze Konzert......
--

- Sarkasmus und Ironie
???
Kann in gut dosierten Portionen wunderbar und auflockernd sein, im Übermaß schafft es jedoch eher Verdruss und im schlimmsten Fall Missverständnisse
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
--

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

- Rollen (PO/Dev/SM/SH)
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

# Weitere Typen von Entwicklern
--



# Weitere Anti-Pattern
--

- Management nach Zahlen
???
Entwickler sind nur Resourcen und austauschbar
Wohl das häufigste Anti-Pattern und grundlage für das Klischee "Agentur"
--

- Falscher System-Architekt
???
Häufig wird eine vermeintlich gute Person in eine führende Rolle gehoben, für die sie nicht geschaffen ist.
Nicht geschaffen kann vieles bedeuten:
- Fachlich nicht erfahren genug
- Der Aufgabe nicht gewachsen (überarbeitet)
- Menschlich nicht in der Lage
Die Wertegleichheit von Scrum kann dem entgegenwirken.
--

- Programmer Interrupt
???
Nach einer Unterbrechung dauert es im Schnitt 15 Minuten sich wieder reinzudenken
Feste Zeiten für Absprachen können entgegenwirken
Ebenso das sich abschotten durch Kopfhörer/Ohrenstöpsel, einen anderen Raum, etc.
Hier auch wieder ein Vorteil von geschriebener, asynchroner Kommunikation
Die Einarbeitungszeit kann man sich durch Notizen/Breackpoints/Lesezeichen etc verkürzen
--

- Programmer Experience Clumping
???
In einem Team mit gemischten Qualitäten verhält es sich ähnlich wie mit dem IQ:
Die starken Entwickler werden ihr volles Potential nicht entfalten.
Die weniger starken haben nicht das volle Potential zum Lernen verfügbar und lernen im schlimmsten Fall das falsche, weil es ja von den starken Entwicklern kommt.
Wege da raus:
Die starken Entwickler die weniger starken schulen lassen. Den starken Entwicklern eine Platform geben, in der sie sich profilieren können und die weniger starken davon profitieren: 
Durch interne Tech-talks, Pair Programming, Pair-Reviews, etc.
---

<!-- -- -- -- -- -- -- KAPITEL LERNEN -- -- -- -- -- -- -->

# Das Lernen lernen

???
Lernen, das heißt auch auch neue Technologien reagieren und sich in fremden Code einlesen, ist DIE Kernfähigkeit jedes Entwicklers.
Ein Entwickler, der nichts mehr dazulernt wird innerhalb eines Jahres den Anschluss verpassen.
---

# Lernen im Beruf !== Lernen in der Schule
--

- Autodidaktisch
???
Ihr müsst euch den Scheiß selbst beibringen
--

- Direkt umgesetzt
???
Im Vergleich zum Schullernen, wo man das Wissen nach der Klassenarbeit wegwerfen kann.
--
???
Empfohlen wird das Spirallernen:
Ein Lernpaket lernen. Das dann wiederholen, und ein neues Lernpaket gelernt, wieder alles wiederholen, etwas neues dazu und so weiter und so fort.
Praktischerweise ist genau das auch das Schema beim Lernen einer neuen Sprache.
---

# Ein Beispiel

???
Wie man sich die Reihenfolge der Farben von Widerständen merkt
0 ist die schwarze Null (Null mit beiden Händen vor sich halten)
1 Eine braune Tasse Kakao ()
2 Rote Lippen zum küssen
3 Federn am Orangen Hut
4 Räder an einem gelben Postauto
5 Finger in eklig grüner Suppe
6 unter blauem Himmel
7 Zwerge mit Lila Mützen
8 80jähriger mit grauen Haaren
9 neun weiße kegel
---

# Das gelernte Anwenden
???
Kleine Nebenprojekte eignen sich ideal dazu
Es spielt keine Rolle, ob das Projekt auch mal real wird, gelernt ist gelernt.

Das beste Ergebnis erziehlt man jedoch, indem man seinen Erfolg mit jemandem teilt und sich Feedback einholt.
Man braucht übrigens keine Angst zu haben. Derjenige, den man fragt will sich entweder profilieren oder wirklich helfen. In beiden Fällen bekommt man die gewünschte Kritik und beide Seiten gewinnen.

# Lernen durch Lehren
???
Jemanden etwas beizubringen lässt einen den Stoff durch andere Augen sehen.
Ein Minimaler Vorsprung reicht oft aus. Ungelöste Fragen lassen sich gemeinsam erarbeiten.
Durch die Fremde Sicht auf das Thema lernt man weitere Aspekte und Betrachtungsweisen kennen.
---

# Ausprobieren > Informieren
???
Den größte Erfolg hat man mit eigenen Erfahrungen.
Dank virtualisierungen muss man auch keine Angst mehr haben etwas kaputt zu machen

# Um zu lernen muss man Fehler machen
???
Beispiel Schach: Man kann nur besser werden, indem man gegen stärkere Gegner spielt.
Fehler machen will aber auch gelernt sein, bzw. der Umgang mit Fehlern.
Softwarefehler beheben wir, indem wir einen Test schreiben und den Fehler dann beheben.
Test => Fehler erkennen und verstehen und die Sicherheit, dass der Fehler nicht mehr auftritt.
---

# Und wenn man doch mal hängen bleibt?
--

- Abstand gewinnen/Perspektive ändern
???
5 bis 10 Minuten Pause von dem Problem können Wunder bewirken.
Eurer Kopf arbeitet weiter an dem Problem, selbst wenn Ihr es nicht bemerkt.
--

- Die Quietscheente fragen
???
Formuliert eurer Problem. Entweder vor einer Quietscheente, der Katze, einem Kollegen.
Wichtig ist, dass Ihr das Problem so vollständig wie möglich erklären könnt
--

- Das Problem isolieren/Tools austauschen
???
Alles, was interagieren kann wegnehmen.
Es kann auch hilfreich sein andere, vermeintlich funktionierende Teile durch Dummies zu ersetzen.
Das muss nicht in dem Projektcode passieren!
Anekdote:
ein Problem mit HTTP Basic auth. Der Entwickler arbeitet mit Postman, und die Authentifizierung klappt einfach nicht. Im einem der Tests jedoch läuft alles.
Nach und nach wurden Teile entfernt, bis letzten endes die Requests mit Curl weggeschickt wurden. Und siehe da, es funktionierte, weil Postman einen Bug in der base64 encodierung hat, wenn im String Umlaute sind.
---

<!-- -- -- -- -- -- -- KAPITEL ACHTE AUF DICH SELBST -- -- -- -- -- -- -->

# Das Henne und Ei Problem
???
Publikum fragen, was das ist.
Es wird das "Was war zuerst da"-Problem erklärt.
Stattdessen meine ich aber das "Glückliche Hühner legen die besseren Eier"-Phänomen. ;)
---

# Der ergonomische Arbeitsplatz
???
Sehnenscheidentzündungen sind eine Berufskrankheit für Softwarentwickler.
--

- Mäuse sind für die Katz
- Tastaturen sollen flach sein
???
Mäuse sind fast ein garant für eine Sehnenscheidentzündung.
Trackballs oder ergonomische Mäuse kosten nicht die Welt.
Wenn Ihr euch die Hardware aussuchen könnt, achtet auf ergonomische Geräte
--

- Schreibtisch und Sitzgelegenheit
???
Ihr sitzt am Tag bis zu 8 Stunden in dem Ding (Plus die Zeit zuhause)
Gönnt euch da ruhig mal was
---

# Übungen zur Auflockerung

![Kleines Büro-Yoga](images/yoga-at-work-emotion-de.png)

???
Und jetzt mal was zum mitmachen :)
(Wer jetzt nicht mitmacht, dem wird es später umso schwerer fallen überhaupt damit anzufangen)
---



# Die geistige Gesundheit
???
Jetzt wird es mal etwas ernster
Ich werde ein paar psychische Erkrankungen vorstellen, von denen ich denke, das Entwickler da besonders anfällig für sind.
Dennoch soll das auch unter dem Motto "Naming things" laufen, um ein Vokabular zu schaffen, mit dem man über solche Dinge reden kann.
--

## Mentale Erkrankungen 
--

- Hochstapler-Syndrom
???
"Oh ich bin gar nicht gut genug für den Job"-Denken
Theraphie: Die Diagnose an sich ist schon ein enormer Schritt
Verstehen dass ein einzelner Fehler nicht die gesammten eigenen Fähigkeiten in Frage stellt
"Ich kann ja nichtmal Subnetzmasken berechnen"-Denken abschalten.
Softwareentwicklung ist so komplex, man kann nicht in allen Bereichen gut sein.
--

- Narzistische Persönlichkeitsstörung
???
Das Gegenteil zum Hochstapler Syndrom
Diagnose: einfach mal fragen "Bist Du ein Narzist?"
Umgang: Schwierig, man muss aufpassen. Niemals die Person direkt angreifen, immer auf der Sachlichen Ebene bleiben
--

- Depressionen
???
Wie fühlt sich eine Depression an: Man ist nicht mehr Herr seiner Lage. Man wird zum Beobachter seinr selbst, ohne die Möglichkeit zu interagieren. Es entsteht ein Teufelskreislauf dadurch, dass man sein Unvermögen mitbekommt, sich darüber ärgert und sich so weiter reinsteigert.
Oft reichen dann kleine Trigger aus, um die Person völlig kollabieren zu lassen.
Umgang: Sensibel sein. Interesse an der Person zeigen (aber nicht faken, das fliegt auf), und die Arbeit loben. Auch hier, sachlich bleiben.
Zudem: Wenn man die Triggerthemen kennt, diese auslassen.
--

- Burnout
???
Symptome: andauernde Erschöpfung, Zynismus und emotionaler Abstand zur Aufgabe, Gefühl von Wirkungslosigkeit "Das bringt ja eh nichts mehr", Depressionen, Manie.
Behandlung: Einmal ordentlich Urlaub machen löst das Problem nicht. Der Betroffene nimmt die Probleme einfach mit in den Urlaub.
Die Ursache (die Überarbeitung) muss korrigiert werden.
--

???
Desweiteren ansprechen:
Aspberger: Das unvermögen menschliche Emotionen anderer zu interpretieren
Borderline: Selbstzerstörendes Verhalten (klassiker: Selbstverletzung, aber auch andere Steine, die man sich selbst in den Weg legt.)

---

# Hilfestellen

- Ärzte
- TelefonSeelsorge in Deutschland +49 (0)800 111 0 111 (gebührenfrei)
- http://www.depressionen-depression.net/notfaelle/notfallnummern.htm
---

# Prävention
--

- Habt Spaß an dem, was Ihr tut.
???
sicher, das geht nicht immer, Durststrecken sind völlig normal. Aber verliert nicht aus dem Auge, dass es nur eine Phase ist, und schafft euch ein Umfeld, mit dem man diese Durststrecke auch durchstehen kann, und welches danach auch wieder Spaß macht.
--

- Sorgt für Abwechslung
???
Hobbies sind wichtig. Sehr gut sind Hobbies, die nicht das selbe wie der Beruf sind.
Das kann das herumspielen mit einer anderen Programmiersprache sein.
Ebenfalls sehr gut sind Hobbies, bei denen die Hände beschäftigt sind.
Und nun werde ich einen Satz sagen, den man gar nicht sagen darf, weil er eine Geschichte hat, mit der niemand in Verbindung gebracht werden möchte. Eine Weisheit, die von den Nazis missbraucht wurde, aber nicht in Vergessenheit geraten sollte: Arbeit macht Frei.
Polymorphie ist auch hier der Schlüssel, wer mehrere Hobbies zur Auswahl hat, kann immer nach Bedarf wählen.
--

- Keine Macht den Drogen
???
Ich weiß, dass es sehr produktiv wirken kann mit ein zwei Flaschen Bier/Wein oder einem Joint zu programmieren. Es hilft den Fokus zu behalten.
Dennoch, lasst es sein. Zum einem wird der Code dadurch nicht besser (pragmatischer vielleicht), som anderen sind die Nebenwirkungen oftmals unterschätzt.
Eine Alkoholsucht kann zum tod führen, und Kiffen schränkt die Gehirnleistung (unser Hauptwerkzeug) ein. Auf andere Mittelchen brauche ich hoffentlich erst gar nicht eingehen.
--

- Pflegt soziale Kontakte
???
Sowohl im Arbeitsteam als auch außerhalb des Arbeitsteam.
Vollkommen isoliert fehlt euch das wichtige Feedback von außen
Es gibt nichts schlimmeres was Code passieren kann, als dass ihn nur ein Entwickler schreibt.
--

- Bleibt gesund
???
In einem gesundem Körper lebt auch ein gesunder Geist. eine Bauernweisheit, aber es durchaus etwas dran. Wer ständig damit beschäftigt ist, sein Wunschgewicht zu halten, kann diese Energie nicht für andere Dinge nutzen.
---

# Karriere machen
--

- Alle zwei is drei Jahre die Firma wechseln
???
Schnellster Weg für eine Gehaltserhöhung.
Einfachster Weg neue Projekte kennen zu lernen
--

- Sich einen Namen machen
???
Besucht Konferenzen, haltet Talks, macht mit bei Open Source Projekten, bringt Leuten etwas bei, etc, etc, etc.
---

<!-- -- -- -- -- -- -- KONFLIKTE -- -- -- -- -- -- -->

# ... und es hat Boom gemacht.
---

# Verhalten in Konfliktsituationen
--

Grundsätzlich: Das Ziel ist nicht, den anderen zu überzeugen.
Das Ziel ist es, den anderen Standpunkt zu verstehen und seinen Eigenen verständlich zu machen.
--

- Sachlich bleiben
???
Dürfte Selbstverständlich sein. Aber schwierig.
--

- Nicht einmischen
???
Das feuert den Konflikt nur noch weiter an
--

- Nicht vor Publikum austragen
???
"Ja wie finde ich das denn"
Vertagen und im Anschluss weiter diskutieren
Anekdote
Entwickler spricht (organisatorisches) Problem zum x-ten Mal in der Retro an.
PO bemerkt "das sagst Du jedes mal"
Dev: "Ja, weil sich nichts ändert"
PO verliert die Beherschung "Du wirst dafür bezahlt, dass Du hier programmierst"
Dev (macht alles richtig) bleibt ruhig, sagt gar nichts mehr.
---

# Sachlicher Konflikt
--

"Symfony vs Laravel"
--

- Sachlichkeit > eigene Vorlieben
--

- Im Hinterkopf behalten, dass Ihr für eine Sache, nicht gegen eine Person argumentiert
--

- Etwas nicht zu kennen ist kein Argument dagegen!
---

# Sozialer Konflikt
--

"Du Depp parkst immer auf meinem Parkplatz"
--

- Dieser Konflikt ist Privat!
--

- Professionell bleiben
--

- Auf privater Ebene klären, nicht im Team
--

???
Anekdote:
Der neue, fähige, Mitarbeiter stößt ins Team. Er kann was, weiß das, und muss sich auch dementsprechend positionieren.
Die anderen Kollegen sehen nur einen arroganten Menschen, der sich da ins Team drängt und auf Wichtig macht.
Wo ist das Problem? => Im Team (bzw. bei Dir)! 
---

# Und wenn gar nichts mehr hilft?
--

- Kündigt.
???
Macht euch klar: Entwickler sind aktuell Mangelware. Ihr werdet einen neuen Job finden!
Wer aber zu oft wechselt, wird irgendwann Fragen beantworten müssen.
---

# Weiterführendes

- [Anti Pattern auf Wikipedia](https://de.wikipedia.org/wiki/Anti-Pattern)
- [Antipatterns und Missverständnisse in der Softwareentwicklung](https://www.youtube.com/watch?v=E0_Y53ci9cw) von Fefe
- [Erfolgreich Dein Leben meistern](https://www.youtube.com/watch?v=j3cRo2wOBms) von Vera F. Birkenbihl
- Stackexchange hat Bereiche für alle(!) möglichen(!) Arten von Fragen!
---

# Abschließendes

- Reflektiert regelmäßig
- Passt auf euch auf
- Habt euch lieb
---

# Ende
