name: title
layout: true
class: center, middle
---

name: list
layout: true
class: top, left
---
template: title

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
template: list

# Wer ist das da vorne?

- Lukas Sadzik
- Softwareentwickler & Trainer @ SensioLabs DE
- @ko_libri

???
Ich bin der Lukas, arbeite mit viel zu wenig anderen anderen Entwicklern bei Sensiolabs und mag Twitter.
---
class: top, center

# tl:dr
--

![stop look think, are you eating yourself](images/stop-look-think-oglaf.jpg)


???
Im Grunde läuft alles auf dieses Denkschema heraus:: Planen, Umsetzen, Reflektieren, Anpassen und von Vorn.
---
template: list

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
template: title

# Getting started
---
template: title

# Cache invalidation and naming things

???
So gut wie alle Probleme lassen sich in eine dieser beiden Kategorien einordnen.
Naming things: Alles neue, mit dem ich konfrontiert werde (es bekommt erst dann einen Namen, wird erst dadurch greifbar). Aber auch so gut wie jede Art von Kommunikaton.
Cache invalidation: Jede (vermeintlich) bekannte Situation, die wiederholt eintritt. Aber auch: jede Reflektion über Passiertes.
---
template: list

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
template: list

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
template: title

<!-- -- -- -- -- -- -- KAPITEL KOMMUNIKATION -- -- -- -- -- -- -->
# Kommunikation
---
template: title

# Man kann nicht nicht kommunizieren

Paul Watzlawick
---
template: list

# Das Kommunikationsquadrat

Jede Botschaft setzt sich aus diesen Vier Seiten zusammen:

- Appell (was ich bei dir erreichen möchte)
- Selbstkundgabe (was ich von mir zu erkennen gebe)
- Beziehungshinweis (was ich von dir halte und wie ich zu dir stehe)
- Sachinformation (worüber ich informiere)

F. Schulz von Thun

---
template: title

# Sprachliche Unschärfe

???
Umgangssprache ist nicht immer eindeutig. 
Eindeutige Fomulierungen ist schwer zu sprechen und zu verstehen. Beispiel: 
In der Klasse `ShopApp/Basket/Model/Product` gibt es einen Bug, der dazu führt, dass in der `ShopApp/Checkout/Payment/CreditCardProvider` in der `foreach`-Schleife in der Methode `transferData` auf einen nicht existenten Schlüssel zugegriffen wird.
Aber einfacher zu schreiben und zu lesen.
Gesprochene Inhalte muss ich notieren oder merken. Bereits Aufgeschriebenes kann ich jederzeit wieder lesen.
---
template: title

# Arten von Kommunikation
---
template: list

# Synchrone Kommunikation

- Direkt

--

- In kleinen Gruppen (bis zu ca. 5) recht schnell
--

- Undokumentiert
--

- Kann schnell abdriften, je mehr Leute involviert sind.
--

- Nur ein Redner zur selben Zeit möglich
---
template: list

# Synchrone Kommunikation

- Direkt, Angesicht zu Angesicht
???
- Sehr schnell mit zwei Menschen
- Langsamer, je mehr Menschen dazukommen
- Undokumentiert
- Wird je schneller vom Thema abkommen, je mehr Menschen involviert sind
- Mit der Größe der Gruppe wächst auch der Bedarf an einem Moderator
--

- Telefon/Sprachchat
???
- Faster than writing, but slower than direct communication
- Only one can talk, otherwise no one will understand anything
- Complex connections are hard to transport
--

- Videochat
???
- Almost the same as direct communication
- Body language is possible
---

template: list

# Asynchrone Kommunikation

- Indirekt, meist via geschriebenem Text
???
Aber auch Anrufbeantworter/Sprachnachrichten gehören in diese Kategorie
--

- Dokumentiert
--

- Sehr flexibel was die Gruppengröße angeht
--

- Threads können die Übersicht bewahren
???
Womit dann auch das Problem des Abdriftens gelöst wäre: Es ist okay, abzudriften, so lange man den eigentlichen Punkt nicht aus den Augen verliert.
--

- Mehrere "Redner" zur selben Zeit möglich
???
Was Zeit spart
---
template: List

# Asynchrone Kommunikation

- Email
???
Aufwendig (Emailadresser raussuchen, eintippen, Betreff formulieren, Email schreiben, abschicken, auf Antwort warten)
Viele Mailpostfächer sind überfüllt, nur die wenigsten nutzen Tools um sich den Eingang sortieren zu lassen
Gehen oft unter
Sehr förmlich
--

- Ticketsystem
???
Wird sehr schnell unübersichtlicht (Wo war die Nachricht noch mal?) Vor allem wenn man mit Subtickets arbeitet, und nachdem sich Anforderungen geändert haben (und damit auch die Tickets)
--

- Chat
???
- Dokumentiert
- Schriftsprache ist häufig präziser als gesprochene Sprache
- In kleinen Gruppen (2-3 Leute) langsamer als direkte Kommunikation
- In größeren Gruppen schneller.
- "Threads" vereinfachen die Übersicht
- Benötigt erst ab einer sehr großen Teilnehmerzahl Moderation
---
template: list

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
template: title

<!-- -- -- -- -- -- -- KAPITEL AGILITÄT -- -- -- -- -- -- -->
# Was ist dieses Scrum
--

## und warum machen das Alle falsch
---
template: list

# Warum so Agil
--

## Agile Grundsätze / Agiles Manifest

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
template: list

# Kern von Scrum
--

- Sprints (detaillierte Planung nur auf kurze Zeit)
--

    - Realität > Plan
--

- Daily (Tägliche updates über Blocker)
--

    - Realität > Plan
    - Kollaboration > Vertragliches
--

- Retros (Wie können wir uns verbessern)
--

    - Kollaboration > Vertragliches
    - Mensch > Prozess

--

???
Wer aufgepasst hat, hat bemerkt, dass der Agile Wert "Funktion > Dokumentation" von keinem Scrum-Aspekt berührt wird. Das stimmt. Scrum hat keine Auswirkungen darauf, ob ihr guten Code erhaltet, oder nicht.
---
template: list

# Was kann man mit Scrum erreichen
--

- Eigene Arbeitsmethoden verbessern
--

- Schnell auf Veränderungen reagieren
--

- Projektstatus transparent machen
---
template: list

# Was kann Scrum nicht
--

- Codequalität verbessern
???
Wurde ja schon erwähnt
--

- Ergebnisse zu Zeitpunkt X garantieren
???
Mehr dazu gleich
--

- Mitarbeiter motivieren
--

- Wissen teilen
---
template: list

# Agile (&) Deadlines

- Termine sind Realität
???
Siehe "Realität > Plan"
--

- Agile Entwicklung hilft NICHT den Termin zu halten
???
Zumindest nicht direkt
--

- Agile hilft es frühzeitig zu ERKENNEN, dass man den Termin nicht halten kann
???
Wimit wir wieder bei "Realität > Plan" wären.
In diesem Fall muss der Plan geändert werden.
---
template: list

# Die Scrumrollen
???
Vorab: Wie kamen die Rollen zustande?
Als Grundlage dient das Agile Prinzip "Menschen > Prozesse".
Nachdem man also alle Titel und Hierachien abgebaut hat, gibt es im Grunde nur noch zwei Arten von Leuten:
Diejenigen, welche etwas liefern, und jene, die etwas geliefert haben wollen.
--

- Entwickler (Produzieren, Technische Planung)
???
Erstes, klar, sind wir Entwickler.
--

- Product Owner (Fachliche Planung, Backlogpflege)
???
Letztere sind eigentlich die Stake Holder, werden im Scrumteam aber durch einen Token ersetzt, den Product Owner.
--

- Scrum Master (Vermitteln, Kontrollieren)
???
Jetzt brauchen wir aber noch jemanden, der die vom Team definierten Prozesse überwacht.
Jemanden, der zwischen Devs & PO vermitteln kann.
Der dem Team Scrum beibringt
Und auch als Moderator für Meetings fungiert.
Die Rolle hat was von einem Mediator
--

- Stake Holder (Bezahlen ;))
???
Irgendwer muss den Spaß ja bezahlen.
Spaß Beiseite, eigentlich sind die Stakeholder jene, die "etwas wollen", der Kunde.
Dennoch sind sie nicht direkt Teil des (ausführenden) Scrumteams.
Ihnen wird das Ergebnis der Sprints präsentiert, und von Ihnen bekommt der PO die Anforderungen des Produkts.
Hier haben wir ach die einzige Rolle, die doppelt besetzt sein darf: PO & Stakeholder dürfen von der selben Person besetzt sein.
---
template: list

# Was, wenn eine Rolle fehlt?

- Entwickler
???
Ziemlich klar: Nichts geschieht (also wirklich gar nichts mehr)
--

- Product Owner
???
Ohne PO gibt es kein Backlog, und somit nichts zu tun.
In der Realität würde das zu "Headless development", zu Chaos führen.
--

- Scrum Master
???
Dies ist die häufigste "fehlende" Rolle. Dennoch ist sie wichtig.
Das sich das Team selbst reguliert kann man nur von sehr erfahrenen Leuten erwarten. Auf diesem Level macht man aber auch kein Scrum mehr, sondern arbeitet einfach.
Der PO kann diese Rolle nicht übernehmen, da er sinst einen Interessenkonflikt hat. Sein Interesse als PO ist, möglichst schnell neue Features durchzubringen, während der SM auch Vermittler zwischen Devs & PO sein muss.
Auch ein Entwickler kann kein SM sein, aus den selben Gründen.
--

- Stake Holder
???
Ohne Kunde kein Projekt.
---
template: title

# Eine andere Sicht auf Scrum
--

## Scrum ist Gruppentherapie

???
Wer den Scrum Mastern mal genau auf die Finger schaut, wird feststellen, dass einige Methoden recht verwandt mit Theraphiemethoden sind.
Zum Beispiel wird die "Happiness Matrix" (Man macht einen Punkt bei dem Smiley, der die eigene Stimmung am besten beschreibt) auch bei Menschen mit einer Depressiven Persönlichkeitsstörung oder Borderline genutzt: Hier muss der Patient in regelmäßigen Abständen sein Befinden auf einer Skala dokumentieren.
Auch andere "Spiele" finden ihr Pendant bei Gruppentheraphiemethoden, etc.
Daher verzeiht, wenn ich das so ausspreche, aber Scrum hat vor allem einen Zweck: Den Computerkellerkindern endlich mal Kommunikation beizubringen.
---
template: title
<!-- -- -- -- -- -- -- KAPITEL LERNEN -- -- -- -- -- -- -->

# Das Lernen lernen

???
Lernen, das heißt auch auch neue Technologien reagieren und sich in fremden Code einlesen, ist DIE Kernfähigkeit jedes Entwicklers.
Ein Entwickler, der nichts mehr dazulernt wird innerhalb eines Jahres den Anschluss verpassen.
---
template: list

# Lernen im Beruf !== Lernen in der Schule
--

- Autodidaktisch
???
Ihr müsst euch den Scheiß selbst beibringen
--

- Direkte Umsetzung
???
Im Vergleich zum Schullernen, wo man das Wissen nach der Klassenarbeit wegwerfen kann.
--
???
Empfohlen wird das Spirallernen:
Ein Lernpaket lernen. Das dann wiederholen, und ein neues Lernpaket gelernt, wieder alles wiederholen, etwas neues dazu und so weiter und so fort.
Praktischerweise ist genau das auch das Schema beim Lernen einer neuen Sprache.
---
template: title

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
template: title

# Das gelernte Anwenden
???
Kleine Nebenprojekte eignen sich ideal dazu
Es spielt keine Rolle, ob das Projekt auch mal real wird, gelernt ist gelernt.

Das beste Ergebnis erziehlt man jedoch, indem man seinen Erfolg mit jemandem teilt und sich Feedback einholt.
Man braucht übrigens keine Angst zu haben. Derjenige, den man fragt will sich entweder profilieren oder wirklich helfen. In beiden Fällen bekommt man die gewünschte Kritik und beide Seiten gewinnen.
---
template: title

# Lernen durch Lehren
???
Jemanden etwas beizubringen lässt einen den Stoff durch andere Augen sehen.
Ein Minimaler Vorsprung reicht oft aus. Ungelöste Fragen lassen sich gemeinsam erarbeiten.
Durch die Fremde Sicht auf das Thema lernt man weitere Aspekte und Betrachtungsweisen kennen.
---
template: title

# Ausprobieren > Informieren
???
Den größte Erfolg hat man mit eigenen Erfahrungen.
Dank virtualisierungen muss man auch keine Angst mehr haben etwas kaputt zu machen

# Um zu llrnen muss man Fehler machen
--

## Lernt, zu versagen!
???
Beispiel Schach: Man kann nur besser werden, indem man gegen stärkere Gegner spielt.
Fehler machen will aber auch gelernt sein, bzw. der Umgang mit Fehlern.
Softwarefehler beheben wir, indem wir einen Test schreiben und den Fehler dann beheben.
Test => Fehler erkennen und verstehen und die Sicherheit, dass der Fehler nicht mehr auftritt.
---
template: list

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
template: title

<!-- -- -- -- -- -- -- KAPITEL ACHTE AUF DICH SELBST -- -- -- -- -- -- -->

# Das Henne und Ei Problem
???
Publikum fragen, was das ist.
Es wird das "Was war zuerst da"-Problem erklärt.
Stattdessen meine ich aber das "Glückliche Hühner legen die besseren Eier"-Phänomen. ;)
---
template: list

# Der ergonomische Arbeitsplatz
???
Sehnenscheidentzündungen sind eine Berufskrankheit für Softwarentwickler.
--

- Mäuse sind für die Katz
???
Mäuse sind fast ein garant für eine Sehnenscheidentzündung.
Trackballs oder ergonomische Mäuse kosten nicht die Welt.
--

- Tastaturen haben flach zu sein
???
Klappt die Beinchen ein, eure Handgelenke werden euch danken
Wenn Ihr euch die Hardware aussuchen könnt, achtet auf ergonomische Geräte
--

- Schreibtisch und Sitzgelegenheit
???
Ihr sitzt am Tag bis zu 8 Stunden in dem Ding (Plus die Zeit zuhause)
Gönnt euch da ruhig mal was
---
class: center, top
background-image: url(images/yoga-at-work-emotion-de.png)

# Übungen zur Auflockerung

???
Und jetzt mal was zum mitmachen :)
(Wer jetzt nicht mitmacht, dem wird es später umso schwerer fallen überhaupt damit anzufangen)
---
template: title


# Die geistige Gesundheit
???
Jetzt wird es mal etwas ernster
Ich werde ein paar psychische Erkrankungen vorstellen, von denen ich denke, das Entwickler da besonders anfällig für sind.
Dennoch soll das auch unter dem Motto "Naming things" laufen, um ein Vokabular zu schaffen, mit dem man über solche Dinge reden kann.
---
template: list

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
template: list

# Hilfestellen

- Ärzte (Ernsthaft, geht zum Arzt!)
- TelefonSeelsorge in Deutschland +49 (0)800 111 0 111 (gebührenfrei)
- http://www.depressionen-depression.net/notfaelle/notfallnummern.htm
---
template: list

# Prävention
???
Kommen wir zu dem Moment, an dem Ihr alle im Anschluss mit "Ja Papa" antwortet.
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
Es gibt nichts schlimmeres was Code passieren kann, als dass ihn nur ein Entwickler schreibt. Und für einen Menschen ist es noch schlimmer nur mit sich selbst zu sein.
--

- Geh mal raus
???
Frischluft tut gut und ein Spaziergang ist eine gute Grundlage um nachzudenken, da sich die Umgebung ständig verändert und neue Reize liefert.
--

- Achte auf Deine Gesundheit
???
In einem gesundem Körper lebt auch ein gesunder Geist. eine Bauernweisheit, aber es durchaus etwas dran. Wer ständig damit beschäftigt ist, sein Wunschgewicht zu halten, kann diese Energie nicht für andere Dinge nutzen.
---
template: list

# Karriere machen
--

- Alle zwei bis drei Jahre die Firma wechseln
???
Schnellster Weg für eine Gehaltserhöhung.
Einfachster Weg neue Projekte kennen zu lernen
--

- Sich einen Namen machen
???
Besucht Konferenzen, haltet Talks, macht mit bei Open Source Projekten, bringt Leuten etwas bei, etc, etc, etc.
---
template: title

<!-- -- -- -- -- -- -- KONFLIKTE -- -- -- -- -- -- -->

# ... und es hat Boom gemacht.
---
template: list

# Allgemeines Verhalten in Konfliktsituationen
--

Grundsätzlich: Das Ziel ist nicht, den anderen zu überzeugen.
Das Ziel ist es, den anderen Standpunkt zu verstehen und seinen Eigenen verständlich zu machen.
--

- Sachlich bleiben
???
Dürfte Selbstverständlich sein. Aber schwierig.
--

- Eingreifen, aber nicht mitmachen
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
template: list

# Sachlicher Konflikt
--

"Windows vs Linux"
--

- Sachlichkeit > eigene Vorlieben
--

- Im Hinterkopf behalten, dass Ihr für eine Sache, nicht gegen eine Person argumentiert
--

- Etwas nicht zu kennen ist kein Argument dagegen!
---
template: list

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
template: title

# Und wenn gar nichts mehr hilft?
--

Kündigt!
???
Macht euch klar: Entwickler sind aktuell Mangelware. Ihr werdet einen neuen Job finden!
Wer aber zu oft wechselt, wird irgendwann Fragen beantworten müssen.
---
template: list

# Weiterführendes

- [Anti Pattern auf Wikipedia](https://de.wikipedia.org/wiki/Anti-Pattern)
- [Antipatterns und Missverständnisse in der Softwareentwicklung](https://www.youtube.com/watch?v=E0_Y53ci9cw) von Fefe
- [Erfolgreich Dein Leben meistern](https://www.youtube.com/watch?v=j3cRo2wOBms) von Vera F. Birkenbihl
- [Open Sourcing Mental Illness - Changing how we talk about mental health in the tech community - Stronger Than Fear](osmihelp.org)
- Stackexchange hat Bereiche für alle(!) möglichen(!) Arten von Fragen!
---
template: list

# Abschließendes

- Reflektiert regelmäßig
- Passt auf euch auf
- Habt euch lieb
???
Habt euch selbst lieb und andere
---
template: title

# Ende
