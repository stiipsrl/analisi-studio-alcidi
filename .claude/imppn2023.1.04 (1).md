




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 1

















## PROCEDURA DI IMPORTAZIONE PRIMA

## NOTA DA ALTRI APPLICATIVI



## Versione Multi 2023.01.04
































PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 2


## IMPPN



## GESTIONE CONTROLLO E IMPORTAZIONE PRIMA NOTA DA PROCEDURE ESTERNE








## IMPORTANTE

Tale procedura non sostituisce RESDAT, RESDAT97 e RESD2000, ma può essere utilizzata in alternativa alle precedenti
procedure.
Diciamo che IMPPN è una evoluzione di RESD2000, in quanto utilizza RESD2000, ma con la possibilità di personalizzare i
vari parametri tramite una tabella, anziché tramite gli switch.















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 3
Personalizzazione parametri





La tabella gestisce i parametri di configurazione delle procedure.

Protocolla gli acquisti
Si - Le fatture di acquisto vengono numerate leggendo la tabella numerazioni acquisti del programma Multi
No - Nel numero documento viene impostato il valore presente nel campo TRF-NDOC

Chiede la data di registrazione acquisti al cambio della ditta
Il programma di importazione chiede la data di registrazione per le fatture di acquisto, da utilizzare nel caso in cui
non sia stato valorizzato il campo TRF-DATA-REGISTRAZIONE
S i- La data viene richiesta al cambio di ogni ditta, se nel file sono presenti movimenti relativi a più ditte
No - La data viene chiesta solo all'inizio della procedura

Controlla flag elaborato
Il programma di importazione scrive un campo, a posizione 7000 del file, mettendo il valore S per segnalare che il
record è stato già importato.
Nel caso di reimportazione del file, se il programma trova il valore S nel campo, non viene trattato tale record.
Se si reimporta, prima vanno cancellate manualmente le registrazioni della precedente importazione.
S i- Controlla il valore scritto a posizione 7000 e se = S non tratta il record
No - Il record viene trattato

Potocolla fatture di vendita
Si - Le fature di vendita vengono numerate leggendo la tabella numerazioni vendite del programma Multi
No - Nel numero documento viene impostato il valore presente nel campo TRF-NDOC

Utilizza 24 contropartite costo / ricavo
Il programma utilizza tale tabella da 8 elementi per i movimenti iva.
Qui vengono messi i conti di ricavo/costo e relativi importi.
Conti di
ricavo/costo


La tabella costi/ricavi (lunghezza complessiva di 152 caratteri) è composta
da 8 elementi i che comprendono i campi TRF-CONTO-RIC eTRF-IMP-RIC.
Le posizioni indicate sono quindi relative al primo elemento.
TRF-CONTO-RIC                     7 NU 735 Codice conto di ricavo/costo
TRF-IMP-RIC                       12 NU 742 Importo ricavo/costo




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 4
Nel caso in cui non siano sufficienti 8 contropartite, c'è la possibilità di averne 24, utilizzando la tabella dei
pagamenti nei suoi primi 24 elementi.
In questo caso andranno valorizzati i campi TRF-CONTO(nn) e TRF-IMPORTO(nn)

La tabella altri movimenti (lunghezza complessiva di 5120 caratteri) è
composta da 80 elementi i che comprendono i campi da TRF-CONTO a TRF-
## EC-IMP-VAL
. Le posizioni indicate sono quindi relative al primo elemento
## TRF-CONTO                         7 NU 973
Codice conto.
Se il movimento fa riferimento al cliente/fornitore dei dati anagrafici indicati
sopra occorrerà indicare 9999999=Cliente 9999998=Fornitore.
TRF-DA                            1 AN 980 Segno operazione D=Dare A=Avere
TRF-IMPORTO                       12 NU 981 Importo
TRF-CAU-AGGIUNT                   18 AN 993 Causale aggiuntiva
TRF-EC-PARTITA-PAG                6 NU 1011 Estratto conto numero partita
TRF-EC-PARTITA-ANNO-PAG           4 NU 1017 Estratto conto anno partita
TRF-EC-IMP-VAL                    16(13+3dec) NU 1021 Estratto conto in valuta Importo in valuta

Si - Utilizza la tabella da 24 contropartite
No - Utilizza la tabella da 8 contropartite

Controllo obbligatorio
La scelta 3 del menu di IMPPN serve per controllare il file, rilevando eventuali sbilanci negli importi o la mancata
compilazione dei campi.
Si - Esegue il controllo in fase di importazione prima di importare i dati e se sono stati rilevati dei problemi non
effettua l'importazione.
No - Non effettua il controllo in fase di importazione

Documento da 6 caratteri
Si - Legge il numero documento dal campo TRF-DOC6
No - Legge il numero documento dal campo TRF-NDOC

Permette il cambio del codice ditta
Si - Viene richiesto un codice ditta alternativo
No - Non viene chiesto un codice ditta alternativo

Conversione da TRAFAT precedenti
Conversione - Data reg. su indice 79
Conversione - Cod.cliente su indice 80
Conversione - Conto iva su TRF-CONTO(79)
Sono relativi alla conversioni da versioni precedenti

Elimina file esterno a fine elaborazione
S - Il file importato viene cancellato
N - Il file importato non viene cancellato

Check esistenza anagrafiche su controllo
Da lanciare esclusivamente se si lancia la scelta "3 Controllo file" per vedere se ci sono anagrafiche non presenti
Si - Viene effettuato il controllo
No - Non viene effettuato il controllo
Tratta conti con importi a zero
Si - Vengono contabilizzati i movimenti dei conti con importo = zero
No - Non vengono contabilizzati i movimenti dei conti con importo = zero

Richiesta tabella parametri
Se c'è l'esigenza di importare diversi file con diverse caratteristiche di importazione, si possono codificare più
tabelle parametri.




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 5
Si - Viene chiesta la tabella da utilizzare
No - Non viene chiesta la tabella da utilizzare

Richiesta stampa registrazioni in elaborazione
Si - In elaborazione file viene chiesto se stampare i movimenti in alternativa all'importazione
No - Non viene chiesto se stampare i movimenti in alternativa all'importazione

Codice ditta associata (solo per codice ditta automatico)
Al lancio di IMPPN viene controllato se è impostato un codice ditta automatico per l'utente. Se si, viene letta la
tabella
parametri a controllato se uno dei parametri è abbinato a tale ditta.
Se si, vengono impostati i dati a video in automatico e disabilitati i campi. A questo punto si può confermare o
uscire.

Ricerca per Alias in assenza di altri parametri
Si – Se Codice Fiscale, Partita Iva, Partita Iva estera non sono valorizzati e il campo TRF-ANA-ALIAS (nel record di
tipo 4)
viene valorizzato, la ricerca dell’anagrafica verrà effettuata verrà fatta per Alias.
No – non viene fatta ricerca per Alias

Cartella file esterno
Percorso  del file da importare

Nome file esterno
Nome del file (12 caratteri)


Il programma presenta sempre la tabella di default, con codice zero e nome Standard.
Il pulsante “Codice” permette di memorizzare/richiamare le tabelle  di personalizzazione, nel caso ci sia la necessità
di gestirne più di una.
Se nella tabella Standard il parametro “Richiesta tabella parametri” è impostato a SI, in entrata dei programmi di
visualizzazione, controllo e importazione, verrà presentata la maschera di selezione tabelle di personalizzazione.

## NOTE FILE DATI
La cartella che contiene il file da importare può essere una qualsiasi cartella del disco. E’ possibile cercarla con la
gestione risorse.
Il nome del file dati va imputato obbligatoriamente e sarà il file dal quale il programma attingerà i dati. La lunghezza è
di 12 caratteri, compresa l’estensione. Il nome è libero, ma si consiglia TRAF2000.
Il file che ci viene mandato dall’esterno potrebbe essere stato memorizzato su floppy, CD o arrivare via mail.
Per potere copiare il file che arriva dall’azienda esterna nella nostra cartella, attribuendogli il nome indicato nel campo
del file, è possibile utilizzare la gestione risorse (F2 o click su lente).

## NOTE 24 CONTROPARTITE
Se viene attivato il flag delle 24 contropartite, il funzionamento sarà questo: vengono utilizzati i campi TRF-CONTO e
TRF-IMPORTO relativi ai primi 24 elementi della tabella da 80 (normalmente riservata per movimenti diversi), anziché
utilizzare la tabella da 8 elementi con i campi TRF-CONTO-RIC e TRF-IMP-RIC.













PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 6
## VISUALIZZAZIONE CONTENUTO FILE ESTERNO

Il programma presenta subito una finestra per scegliere il file esterno, se abilitato il parametro “Richiesta tabella parametri”
in tabella di personalizzazione.






Viene chiesta conferma del file da importare





Viene quindi visualizzato il contenuto del primo record.





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 7



E’ possibile navigare all’interno del file scegliendo il pulsante Griglia e quindi PageUp / PageDown o frecce.

Correggi Converte in numeri i campi numerici in cui sono presenti anche caratteri non numerici.
Stampa  Esegue la stampa del contenuto del file



## CONVERSIONE
Nel caso in cui la versione del file indicato sia  1 o 2, viene fatta la richiesta se convertire o meno il  file alla versione 3
## (attuale).
Se non si converte, la versione 1 viene comunque visualizzata, la versione 2 no.

La richiesta di conversione viene fatta anche dai programmi di controllo e di elaborazione file.


## CONTROLLO FILE ESTERNO





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 8
Dopo la richiesta iniziale di conferma del file da cui attingere i dati , viene richiesta la conferma o la stampa.
Se si sceglie Stampa tutti i messaggi di errore rilevati saranno dirottati su stampa anziché a video.


## ELABORAZIONE FILE

Dopo la richiesta iniziale di conferma del file da cui attingere i dati , vengono richiesti:
Data registrazione acquisti  e Codice ditta alternativa  ( se abilitati in tabella).































## TRACCIATO RECORD





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 9
## FORMATO DEI CAMPI
- AN = Alfanumerico
- NU = Numerico. Allineato a destra, zeri non segnificativi non obbligatori, il segno (+/-) va messo in
ultima posizione, se non indicato di intende +., se il campo e' spazio viene inizializzato al valore
numerico 0.

Nel caso venga richiesta l’indicazione dei decimali questa è logica per cui ad esempio l’indicazione del valore 1,75 nel
campo TRF-EC-CAMBIO(13 7+6dec)  si traduce in 1750000.
Gli importi si intendono nella valuta di tenuta conto della ditta, quindi se la valuta di  tenuta conto della ditta
è l’ Euro tutti gli importi si intendono in centesimi di Euro.
Tutti i campi che contengono delle date sono da impostare in formato ggmmaaaa.
## NOME CAMPO
## LUNGHEZZA FORMATO POSIZIONE  NOTE
## TRF-DITTA

5 NU 1 Codice ditta MULTI
TRF-VERSIONE                      1 NU 6 Versione Valore fisso 3
TRF-TARC                          1 NU 7 Tipo record Valore fisso 0
Dati cliente
fornitore


TRF-COD-CLIFOR                    5 NU 8 Codice cliente/fornitore MULTI. Se non conosciuto indicare 0.
## TRF-RASO                          32 AN


13 Ragione sociale cliente/fornitore
TRF-IND                           30 AN 45 Indirizzo
TRF-CAP                           5 NU 75 Cap
TRF-CITTA                         25 AN 80 Città
TRF-PROV                          2 AN 105 Provincia
TRF-COFI                          16 AN 107 Cofice fiscale
TRF-PIVA                          11 NU 123 Partita IVA
TRF-PF                            1 AN 134 Persona fisica (S/N/P)
Il valore P viene utilizzato nel caso di una anagrafica presente 2 volte. Una
con codice fiscale e partita iva e l’altra con il solo codice fiscale. Se è
presente la P e viene passato il codice fiscale, viene presa l’anagrafica con il
solo codice fiscale.
TRF-DIVIDE                        2 NU 135 Posizione spazio fra cognome nome
TRF-PAESE                         4 NU 137 Codice paese estero di residenza
TRF-PIVA-ESTERO                   12 AN 141 Partita Iva estera
TRF-COFI-ESTERO                   20 AN 153 Codice fiscale estero

Dati di nascita,se questi dati sono vuoti vengono presi dal codice
fiscale.
TRF-SESSO                  1 AN 173 Sesso (M/F)
TRF-DTNAS                 8 NU 174 Data di nascita
TRF-COMNA                 25 AN 182 Comune di nascita
TRF-PRVNA                 2 AN 207 Provincia di nascita
TRF-PREF                          4 AN 209 Prefisso telefonico
TRF-NTELE-NUM                     20 AN 213 Numero telefonico
TRF-FAX-PREF                      4 AN 233 Prefisso Fax
TRF-FAX-NUM                       9 AN 237 Numero Fax
TRF-CFCONTO                       7 NU 246 Codice conto di costo abituale Solo per fornitori
TRF-CFCODPAG                      4 NU 253 Codice condizioni di pagamento
TRF-CFBANCA                       5 NU 257 Codice Abi
TRF-CFAGENZIA                     5 NU 262 Codice Cab
TRF-CFINTERM                      1 NU 267 Codice intermedio clienti / fornitori
Dati fattura

TRF-CAUSALE                       3 NU 268 Codice causale movimento




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 10
Fattura di vendita=001
Fattura di acquisto=011
## Corrispettivo=020
Movimenti diversi a diversi=027
( E' possibile indicare anche una causale multi collegata a una causale iva
es. 101 collegata alla 1 )
Vendita agenzia di viaggio=causale collegata alla 1 o alla 20 con il campo
agenzia di viaggio = S
Acquisti agenzia di viaggio=causale collegata alla 11 con il campo agenzia di
viaggio = S

TRF-CAU-DES                       15 AN 271 Descrizione causale
TRF-CAU-AGG                       18 AN 286 Causale aggiuntiva
TRF-CAU-AGG-1 34 AN 304 Ulteriore causale aggiuntiva
TRF-CAU-AGG-2 34 AN 338 Ulteriore causale aggiuntiva
## TRF-DATA-REGISTRAZIONE            8 NU 372
Data registrazione. Se 0 si intende uguale alla data
documento
TRF-DATA-DOC                      8 NU 380 Data documento
TRF-NUM-DOC-FOR                   8 NU 388 Numero documento fornitore compreso sezionale
TRF-NDOC                          5 NU 396 Numero documento
TRF-SERIE                         2 NU 401 Sezionale Iva
TRF-EC-PARTITA                    6 NU 403  Estratto conto Numero partita
TRF-EC-PARTITA-ANNO               4 NU 409 Estratto conto Anno partita
TRF-EC-COD-VAL                    3 NU 413 Estratto conto in valuta Codice valuta estera
TRF-EC-CAMBIO                     13(7+6 dec)  NU 416 Estratto conto in valuta Cambio valuta estera
TRF-EC-DATA-CAMBIO                8 NU 429 Estratto conto in valuta Data cambio
TRF-EC-TOT-DOC-VAL                16(13+3dec) NU 437 Estratto conto in valuta Totale documento in valuta
TRF-EC-TOT-IVA-VAL                16(13+3dec) NU 453 Estratto conto in valuta Totale iva in valuta
TRF-PLAFOND                       6 NU 469 MMAAAA Riferimento PLAFOND e fatture differite
## Dati Iva


La tabella dati Iva (lunghezza complessiva di 248 caratteri) è composta da 8
elementi i che comprendono i campi che vanno da TRF-IMPONIB aTRF-
IMPOSTA. Le posizioni indicate sono quindi relative al primo elemento.
TRF-IMPONIB                       12 NU 475 Imponibile
TRF-ALIQ                          3 NU 487 Aliquota Iva o Codice esenzione
TRF-ALIQ-AGRICOLA                 3 NU 490 Aliquota iva di compensazione agricola
TRF-IVA11                         2 NU 493 Codice memorizzazione per Iva11
TRF-IMPOSTA                       11 NU 495 Imposta
Totale fattura

TRF-TOT-FATT                      12 NU 723 Totale fattura
Conti di
ricavo/costo


La tabella costi/ricavi (lunghezza complessiva di 152 caratteri) è composta
da 8 elementi i che comprendono i campi TRF-CONTO-RIC eTRF-IMP-RIC.
Le posizioni indicate sono quindi relative al primo elemento.
TRF-CONTO-RIC                     7 NU 735 Codice conto di ricavo/costo
TRF-IMP-RIC                       12 NU 742 Importo ricavo/costo
Dati eventuale
pagamento fattura
o movimenti diversi
## .
## TRF-CAU-PAGAM                     3 NU 887
Codice causale
Per movimenti non IVA non occorre indicarla, in quanto viene presa da TRF-
## CAUSALE
TRF-CAU-DES-PAGAM                 15 AN 890 Descrizione causale
TRF-CAU-AGG-1-PAGAM 34 AN 905 Ulteriore descrizione aggiuntiva
TRF-CAU-AGG-2-PAGAM 34 AN 939 Ulteriore descrizione aggiuntiva
La tabella altri movimenti (lunghezza complessiva di 5120 caratteri) è




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 11
composta da 80 elementi i che comprendono i campi da TRF-CONTO a TRF-
## EC-IMP-VAL
. Le posizioni indicate sono quindi relative al primo elemento
## TRF-CONTO                         7 NU 973
Codice conto.
Se il movimento fa riferimento al cliente/fornitore dei dati anagrafici indicati
sopra occorrerà indicare 9999999=Cliente 9999998=Fornitore.
TRF-DA                            1 AN 980 Segno operazione D=Dare A=Avere
TRF-IMPORTO                       12 NU 981 Importo
TRF-CAU-AGGIUNT                   18 AN 993 Causale aggiuntiva
TRF-EC-PARTITA-PAG                6 NU 1011 Estratto conto numero partita
TRF-EC-PARTITA-ANNO-PAG           4 NU 1017 Estratto conto anno partita
TRF-EC-IMP-VAL                    16(13+3dec) NU 1021 Estratto conto in valuta Importo in valuta
Ratei e risconti

La tabella ratei e risconti (lunghezza complessiva di 190 caratteri) è
composta da 10 elementi i che comprendono i campi da TRF-RIFER-TAB a
TRF-DT-FIN . Le posizioni indicate sono quindi relative al primo elemento
TRF-RIFER-TAB                     1 AN 6093 Tabella di riferimento 1=Costi ricavi 2=Altri movimenti
TRF-IND-RIGA                      2 NU 6094 Indice della tabella di cui sopra
TRF-DT-INI                        8 NU 6096 Data inizio
TRF-DT-FIN                        8 NU 6104 Data fine

## TRF-DOC6   6 NU 6283
N.doc. a 6 cifre se non
bastano le 5 di TRF-NDOC
Ulteriori dati
cliente fornitore


## TRF-AN-OMONIMI   1 AN 6289
Considera omonimo (S/N) ( S significa che la partita iva identifica
univocamente l' anagrafica )
## TRF-AN-TIPO-SOGG 1 NU 6290
Tipo soggetto ritenuta di acconto 1=770 SC   2=770 SE ( provvigioni )
3=Condominio(calcolo rit.acc. operaz. Attive)
Ulteriori dati
eventuale
pagamento fattura
o movimenti diversi

La tabella ulteriori dati altri movimenti e’ composta da 80 elementi
(lunghezza complessiva di 160 caratteri).
TRF-EC-PARTITA-SEZ-PAG   2 NU 6291 Numero sezionale partita estratto conto
Ulteriori dati
gestione
professionista per
eventuale
pagamento incasso
fattura o dati
fattura

TRF-NUM-DOC-PAG-PROF   7 NU 6451  Numero documento incasso/pagamento
TRF-DATA-DOC-PAG-PROF   8 NU 6458  Data documento incasso/pagamento
TRF-RIT-ACC   12 NU 6466  Ritenuta d’ acconto
TRF-RIT-PREV   12 NU 6478  Ritenuta previdenziale
TRF-RIT-1 12 NU 6490  Altre ritenute 1,2,3,4
## TRF-RIT-2 12 NU 6502
## TRF-RIT-3 12 NU 6514
## TRF-RIT-4 12 NU 6526
Ulteriori dati per
unità produttive
ricavi

La tabella ulteriori dati altri movimenti e’ composta da 8 elementi
(lunghezza complessiva di 16 caratteri).
## TRF-UNITA-RICAVI 2 NU 6538




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 12
Ulteriori dati per
unita’ produttive
pagamenti

La tabella ulteriori dati altri movimenti e’ composta da 80 elementi
(lunghezza complessiva di 160 caratteri).
## TRF-UNITA-PAGAM 2 NU 6554
Ulteriori dati
cliente fornitore


TRF-FAX-PREF-1                      4 AN 6714 Prefisso Fax in sostituzione del campo TRF-FAX-PREF
TRF-FAX-NUM-1                       20 AN 6718 Numero Fax in sostituzione del campo TRF-FAX-NUM
TRF-SOLO-CLIFOR 1 AN 6738 C crea solo cliente F crea solo fornitore ( non genera primanota )
A crea solo l’anagrafica e non il cliente/fornitore
P Cliente privato con cointestatari
I Cointestatario fattura
## TRF-80-SEGUENTE 1 AN 6739
Se uguale a S significa che il record successivo è identico a quello
attuale, ma con la tabella TRF-PAGAM ( 80 contropartite ) compilata. Da
utilizzare se si devono fare registrazioni di pagamento diversi a diversi con
più di 80 contropartite. Non ci sono limiti per i record a cascata di questo
tipo.L’ultimo record della serie deve contenere U.
Ulteriori dati
gestione
professionista per
eventuale incasso/
pagamento fattura
o dati fattura

TRF-CONTO-RIT-ACC 7 NU 6740 Conto ritenuta di acconto
TRF-CONTO-RIT-PREV 7 NU 6747 Conto ritenuta previdenziale
TRF-CONTO-RIT-1 7 NU 6754 Conto ritenuta 1
TRF-CONTO-RIT-2 7 NU 6761 Conto ritenuta 2
TRF-CONTO-RIT-3 7 NU 6768 Conto ritenuta 3
TRF-CONTO-RIT-4 7 NU 6775 Conto ritenuta 4
## Varie

TRF-DIFFERIMENTO-IVA 1 AN 6782  Differimento registrazione iva per autotrasportatori ( S o N )
TRF-STORICO 1 AN 6783  Aggiornamento storico anagrafica ( S o N )
TRF-STORICO-DATA 8 NU 6784  Data aggiornamento storico anagrafica in formato AAAAMMGG
## TRF-CAUS-ORI 3 NU 6792
Cod.Causale doc. Originaria . Da utilizzare per registrazioni di Pag. Fattura /
Nota Credito.sospesa . Può valere 1 o 2.
Prima nota
previsionale dati
aggiuntivi

TRF-PREV-TIPOMOV 1 AN 6795 1 = Previsionale  2 = Provvisorio  3 = A Scadenza
TRF-PREV-RATRIS 1 AN 6796 Calcolo rateo / risconto   X = Si   Spazio = No
TRF-PREV-DTCOMP-INI 8 NU 6797 Data iniziale competenza
TRF-PREV-DTCOMP-FIN 8 NU 6805 Data finale competenza
TRF-PREV-FLAG-CONT 1 AN 6813 Flag Non Contabilizza    X = Si   Spazio = No
## Varie


TRF-RIFERIMENTO 20 AN 6814 Riferimento record interno  ( viene scritto nel file di LOG in alternativa al
numero di record )
TRF-CAUS-PREST-ANA 2 NU 6834 Causale prestazione ( anagrafica cli / for)
TRF-EC-TIPO-PAGA 1 NU 6836 Estratto conto – tipo pagamento
1=Tratta  2=RB  3=RD  4=Cess.  5=Descr.  6=Contanti
Se non presente viene messo il valore 5.
TRF-CONTO-IVA-VEN-ACQ 7 NU 6837 Conto iva ( se presente viene preso al posto dei conti iva vend/acq. In
tabella)
TRF-PIVA-VECCHIA 11 NU 6844 Vecchia Partita Iva – Da mettere se c’è una variazione di P.Iva. Serve per




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 13
effettuare la ricerca dell’anagrafica da variare. Nel campo TRF-PIVA va
messa la nuova P.Iva.
TRF-PIVA-ESTERO-VECCHIA 12 AN 6855 Vecchia Partita Iva Estera – Da mettere se c’è una variazione di P.Iva
Estera. Serve per effettuare la ricerca dell’anagrafica da variare. Nel campo
TRF-PIVA-ESTERA va messa la nuova P.Iva estera.
## TRF-RISERVATO 32 AN 6867
TRF-DATA-IVA-AGVIAGGI 8 NU 6899 Data registrazione iva per agenzie di viaggio se TRF-DIFFERIMENTO-IVA =
S. Se il campo viene lasciato a ZERO, la data registrazione iva viene
aumentata di un mese.
TRF-DATI-AGG-ANA-REC4 1 AN 6907 Dati aggiuntivi anagrafica (Indirizzo, Tipologia, Frazione)
Se = S deve seguire un record di tipo 4 con i dati aggiuntivi anagrafica
TRF-RIF-IVA-NOTE-CRED 6 NU 6908 Riferimento Iva note credito nel formato MMAAAA
TRF-RIF-IVA-ANNO-PREC 1 AN 6914 Riferimento ad anno precedente S/N
TRF-NATURA-GIURIDICA 2 NU 6915 Codice natura giuridica
TRF-STAMPA-ELENCO 1 AN 6917 Stampa in elenco S/N


## Iva
Editoria/Regime
del margine
forfetario

La tabella editoria è composta da 8 elementi (lunghezza totale =
24 caratteri).
La posizione è relativa al primo elemento,
TRF-PERC-FORF 3 NU 6918 % forfait riga 1
TRF-SOLO-MOV-IVA 1 AN 6942 Se = S, per contabilità ordinarie vengono registrati solo i movimenti iva.
TRF-COFI-VECCHIO 16 AN 6943 Vecchio Codice Fiscale – Da mettere se c’è una variazione di Codice Fiscale.
Serve per effettuare la ricerca dell’anagrafica da variare. Nel campo
TRF-COFI va messo il nuovo Codice Fiscale.
TRF-USA-PIVA-VECCHIA 1 AN 6959 Se = S viene utilizzata TRF-PIVA-VECCHIA per la ricerca dell’anagrafica.
## TRF-USA-PIVA-EST-VECCHIA 1 AN 6960
Se = S viene utilizzata TRF-PIVA-EST-VECCHIA per la ricerca dell’anagrafica.
TRF-USA-COFI-VECCHIO 1 AN 6961 Se = S viene utilizzato TRF-COFI-VECCHIO per la ricerca dell’anagrafica.
## TRF-ESIGIBILITA-IVA 1 NU 6962
0=Immediata 1=Differita 2=Differita DL. 185/08
3=Immediata iva di cassa escluso controllo 4=Split payment
TRF-TIPO-MOV-RISCONTI 1 AN 6963 R=Risconto    C=Competenza
TRF-AGGIORNA-EC 1 AN 6964 N=Non aggiorna estratto conto
TRF-BLACKLIST-ANAG 1 AN 6965 Ecludi anagrafica da gestione Blacklist (S/N)
TRF-BLACKLIST-IVA 1 AN 6966 Gestione Blacklist su registrazione iva (S/N)
TRF-BLACKLIST-IVA-ANA 6 NU 6967 Codice anagrafica Blacklist su registrazione iva.
Se non specificata viene impostata quella del cliente/fornitore.
TRF-CONTEA-ESTERO 20 AN 6973 Descrizione contea estero
TRF-ART21-ANAG 1 AN 6993 Anagrafica soggetta a Comunicazione art. 21.
S=Si  N=No  R=Fattura riepilogativa
E=Fatture SDI
Se non valorizzato, in anagrafica verrà messo il valore S
TRF-ART21-IVA 1 AN 6994 Comunicazione art. 21 su registrazione iva.
S=Si  N=No
R=Doc.Riepilogativo
A=Agricoltore esonerato
T=Turismo
E=Fatture SDI
0=Noleggio Autovettura
1=Noleggio Caravan
2=Noleggio Altri veicoli
3=Noleggio Unita’ da diporto
4=Noleggio Aeromobili
5=Noleggio Autovettura + Turismo
6=Noleggio Caravan + Turismo
7=Noleggio Altri veicoli + Turismo
8=Noleggio Unita’ da diporto + Turismo
9=Noleggio Aeromobili + Turismo
Se causale corrispettivi e valorizzato con S oppure causale fattura e
valorizzato con C o P, dovrà seguire il record di tipo 5 con compilati i campi
relativi ai corrispettivi o al contrattto.




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 14
Per il valore C la presenza del record di tipo 5 è facoltativa.
Se non valorizzato, nella registrazione iva il campo verrà messo a spazio.
TRF-RIF-FATTURA 1 AN 6995 Riferimento ad una fattura registrata in precedenza S/N.
Se valorizzato con S, dovrà seguire il record di tipo 5 con compilati il
numero e la data di riferimento documento.
Se non valorizzato, viene considerato il valore N.
TRF-RISERVATO-B 1 AN 6996 Campo riservato
TRF-MASTRO-CF  1 AN 6997 Mastro clienti/fornitori
SPAZIO o 1 = Mastro principale
## 2 = Mastro 2
## 3 = Mastro 3
TRF-MOV-PRIVATO 1 AN 6998 Movimento cliente privato S/N
TRF-SPESE-MEDICHE 1 AN 6999 Da utilizzare per le fatture S/N
Se valorizzato con S dovrà seguire un record di tipo 5 con compilati i campi
del gruppo relativo ai corrispettivi:
## TRF-A21CO-TIPO-SPESA
## TRF-A21CO-FLAG-SPESA
## TRF-A21CO-IMP
FILLER 2 AN 7000 Terminatore record ( 0D0A HEX  0D non obbligatorio )







































Record opzionale contenente dati aggiuntivi della contabile ovvero ritenute d’acconto, modello INTRASTAT, e portafoglio
effetti, deve seguire quello del movimento contabile.




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 15



## NOME CAMPO
## LUNGHEZZA FORMATO
## POSIZION
## E NOTE
TRF1-DITTA                        5 NU 1 Codice ditta MULTI
TRF1-VERSIONE                     1 NU 6 Versione fisso 3
TRF1-TARC                         1 NU 7 Tipo record Valore fisso 1
Dati INTRASTAT e
## REVERSE CHARGE

TRF-NUM-AUTOFATT                  5 NU 8 Numero autofattura Solo per acquisti ( intra o rev-charge )
TRF-SERIE-AUTOFATT                2 NU 13 Sezionale iva
TRF-COD-VAL                       3 AN 15 Codice valuta
TRF-TOTVAL                        14(10+4 DEC) NU 18 Totale importo in valuta
## Movimenti
## INTRASTAT BENI

La tabella movimenti INTRASTAT (lunghezza complessiva di 1700 caratteri)
è composta da 20 elementi i che comprendono i campi da TRF-
NOMENCLATURA a  TRF-SEGNO-RET . Le posizioni indicate sono quindi
relative al primo elemento

Questa sezione va compilata in alternativa a INTRASTAT SERVIZI
TRF-NOMENCLATURA                  8 AN 32 Codice nomenclatura combinata
TRF-IMP-LIRE                      12 NU 40 Importo in lire
TRF-IMP-VAL                       12(10+2 DEC) NU 52 Importo in valuta
TRF-NATURA                        1 AN 64 Natura della transazione
TRF-MASSA                         12(10+2 DEC) NU 65 Massa netta
TRF-UN-SUPPL                      12 NU 77 Unità sostitutiva
TRF-VAL-STAT                      12 NU 89 Valore statistico
TRF-REGIME                        1 AN 101 Regime ( condizioni di consegna )
TRF-TRASPORTO                     1 AN 102 Trasporto
TRF-PAESE-PROV                    3 NU 103 Paese di provenienza
TRF-PAESE-ORIG                    3 NU 106 Paese di origine
TRF-PAESE-DEST                    3 NU 109 Paese di destinazione
TRF-PROV-DEST                     2 AN 112 Provincia di destinazione
TRF-PROV-ORIG                     2 AN 114 Provincia di origine
## TRF-SEGNO-RET 1 AN 116
Segno della rettifica (+/-)
## TRF-INTRA-TIPO 1 AN 1732
Tipo movimento INTRASTAT
1=Cessioni 2=Ret.cessioni 3=Acquisti 4=Ret.acq.
TRF-MESE-ANNO-RIF 6 NU 1733 Mmaaaa competenza rettifiche

## Movimenti
## INTRASTAT BENI
dati aggiuntivi


La tabella (lunghezza complessiva di 20 caratteri) è composta da 20 elementi
i che comprende il campo TRF-NATUTA-B. La posizione indicata é quindi
relativa al primo elemento.
TRF-NATURA-B                      1 AN 1739 Natura della transazione B

## 153 AN 1759 SPAZIO
## Ritenuta
d’acconto

TRF-RITA-TIPO                     1 NU 1912 1=Prestazioni e collaborazioni 2=Provvigioni
TRF-RITA-IMPON                    11 NU 1913 Imponibile
TRF-RITA-ALIQ                     4(2+2dec) NU 1924 Aliquota
TRF-RITA-IMPRA                    10 NU 1928 Ritenuta
## TRF-RITA-PRONS                    11 NU 1938
Se TRF-RITA-TIPO = 1 Indicare l’importo del contributo integrativo (2%) ,
se TRF-RITA-TIPO = 2 Indicare l’importo delle provvigioni non soggette.




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 16
TRF-RITA-MESE                     6 NU 1949 MMAAAA competenza (pagamento fattura)
TRF-RITA-CAUSA                    2 NU 1955 Codice causale prestazione
TRF-RITA-TRIBU                    4 AN 1957 Codice tributo
TRF-RITA-DTVERS                   8 NU 1961 Data versamento
TRF-RITA-IMPAG                    11 NU 1969 Importo versato
TRF-RITA-TPAG                     1 NU 1980 Tipo versamento 1=Tesoreria 2=C/C postale 3=Banca
TRF-RITA-SERIE                    4 AN 1981 Serie
TRF-RITA-QUIETANZA                12 AN 1985 Quietanza
TRF-RITA-NUM-BOLL                 12 AN 1997 Numero bollettino C/C
TRF-RITA-ABI                      5 NU 2009 Codice abi
TRF-RITA-CAB                      5 NU 2014 Codice cab
TRF-RITA-AACOMP                   4 NU 2019 Anno di competenza provvigioni se diverso da quello delle ritenute
TRF-RITA-CRED                     11 NU 2023 Credito d’imposta utilizzato verticalmente per non versare
Dati contributo
INPS e modello
## GLA/D

TRF-RITA-SOGG                     1 AN 2034 Soggetto al contributo S=Si N=No
TRF-RITA-BASEIMP                  11 NU 2035 Base imponibile
TRF-RITA-FRANCHIGIA               11 NU 2046 Importo già assoggettato
TRF-RITA-CTO-PERC                 11 NU 2057 Ritenuta conto percipiente
TRF-RITA-CTO-DITT                 11 NU 2068 Ritenuta conto ditta
## FILLER 11 AN 2079 SPAZIO
TRF-RITA-DATA                     8 NU 2090 Data versamento
TRF-RITA-TOTDOC                   11 NU 2098 Totale documento
TRF-RITA-IMPVERS                  11 NU 2109 Importo versato
TRF-RITA-DATA-I                   8 NU 2120 Data inizio
TRF-RITA-DATA-F                   8 NU 2128 Data competenza
TRF-EMENS-ATT                 2 NU 2136 EMENS- Codice attività
TRF-EMENS-RAP                 2 NU 2138 EMENS- Tipo rapporto
TRF-EMENS-ASS                 3 NU 2140 EMENS- Altra assicurazione
TRF-RITA-TOTIVA                   11 NU 2143 Totale iva
Causali prestazioni

TRF-CAUS-PREST-ANA-B 3 NU 2154 Causale prestazione ( anagrafica cli / for)
TRF-RITA-CAUSA-B 3 NU 2157 Codice causale prestazione
TRF-RITA-NO-REDDITO 14 NU 2160 Somme non costituenti reddito
TRF-RITA-ESENTE 14  NU 2174 Reddito esente
TRF-RITA-NON-SOGG 14 NU 2188 Reddito non soggetto a ritenute
## FILLER                            136 AN 2202 SPAZIO
Dati portafoglio

TRF-POR-CODPAG                    3 NU 2338 Codice condizione di pagamento
## TRF-POR-BANCA                     5 NU 2341 ABI
## TRF-POR-AGENZIA                   5 NU 2346 CAB
TRF-POR-DESAGENZIA                30 AN 2351 Descrizione agenzia
TRF-POR-TOT-RATE                  2 NU 2381 Numero totale rate
TRF-POR-TOTDOC                    12 NU 2383 Totale documenti
Dettaglio effetti

La tabella dettaglio effetti (lunghezza complessiva di 804 caratteri) è
composta da 12 elementi i che comprendono i campi da TRF-POR-NUM-
RATA a  TRF-POR-TIPO-RD. Le posizioni indicate sono quindi relative al
primo elemento
TRF-POR-NUM-RATA                  2 NU 2395 Numero rata




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 17
TRF-POR-DATASCAD                  8 NU 2397 Data scadenza
## TRF-POR-TIPOEFF                   1 NU 2405
Tipo effetto
1=Tratta
2=Ricevuta bancaria
3=Rimessa dirett
4=Cessioni
5=Solo descrittivo
6=Contanti alla consegna
TRF-POR-IMPORTO-EFF               12 NU 2406 Importo effetto
TRF-POR-IMPORTO-EFFVAL            15(12+3dec) NU 2418 Portafoglio in valuta. Importo effetto in valuta
TRF-POR-IMPORTO-BOLLI             12 NU 2433 Importo bolli
TRF-POR-IMPORTO-BOLIVAL          15(12+3dec) NU 2445 Portafoglio in valuta. Importo bolli  in valuta
TRF-POR-FLAG                      1 AN 2460 Stato effetto 0=Aperto 1=Chiuso 2=Insoluto 3=Personalizzato
TRF-POR-TIPO-RD                   1 AN 2461 Sottotipo rimessa diretta
TRF-POR-CODAGE               4 NU 3199 Codice agente
TRF-POR-EFFETTO-SOSP 1 AN 3203 Effetto sospeso
Tabella da 12 elementi
La posizione indicata è quella del primo elemento
## TRF-POR-CIG 15 AN 3215 CIG
## TRF-POR-CUP 15 AN 3230 CUP

## 294 AN 3245 SPAZIO

## Movimenti
## INTRASTAT BENI
dati aggiuntivi

La tabella movimenti INTRASTAT BENI  (lunghezza complessiva di 380
caratteri) è composta da 20 elementi i che comprendono i campi da TRF-
COD-VAL-IV  a  TRF-COD-VAL-IV . Le posizioni indicate sono quindi relative
al primo elemento.
TRF-COD-VAL-IV                  3 AN 3539 Codice valuta documento
TRF-IMP-VALUTA-IV                  16(14+2DEC) AN 3542 Ammontare valuta documento

## Movimenti
## INTRASTAT
## SERVIZI

La tabella movimenti INTRASTAT SERVIZI  (lunghezza complessiva di 1960
caratteri) è composta da 20 elementi i che comprendono i campi da TRF-
CODICE SERVIZIO  a  TRF-SERV-IMP-VALUTA-IV . Le posizioni indicate sono
quindi relative al primo elemento

Questa sezione va compilata in alternativa a INTRASTAT BENI
TRF-CODICE-SERVIZIO                  6 AN 3919 Codice servizio
TRF-STATO-PAGAMENTO 3 NU 3925 Codice stato d pagamento
TRF-SERV-IMP-EURO                      12 NU 3928 Importo in euro
TRF-SERV-IMP-VAL                       12(10+2 DEC) NU 3940 Importo in valuta
TRF-DATA-DOC-ORIG                        8 NU 3952 Data documento originale
TRF-MOD-EROGAZIONE                         1 AN 3960 Servizi mod.erogazione
TRF-MOD-INCASSO                      1 AN 3961 Servizi mod.incasso
TRF-PROT-REG                      6 NU 3962 Protocollo registrazione
TRF-PROG-REG                        6 NU 3968 Progressivo registrazione
TRF-COD-SEZ-DOG-RET                     6 NU 3974 Servizi cod sez dog
TRF-ANNO-REG-RET                   2 NU 3980 Servizi anno registraz.
TRF-NUM-DOC-ORIG                    15 AN 3982 Numero doc. originale
## TRF-SERV-SEGNO-RET                   1 AN 3997
Segno della rettifica (+/-)
TRF-SERV-COD-VAL-IV                  3 AN 3998 Codice valuta documento
TRF-SERV-IMP-VALUTA-IV                  16(14+2DEC) AN 4001 Ammontare valuta documento

## TRF-INTRA-TIPO-SERVIZIO 1 AN 5879
Tipo movimento INTRASTAT
5=Servizi resi 6=Rett.servizi resi
7=Servizi ricevutii 8=Rett.servizi ricevuti
TRF-SERV-MESE-ANNO-RIF 6 NU 5880 Mmaaaa competenza rettifiche




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 18
Check iva reverse
charge

La tabella è composta da 8 elementi corrispondenti agli 8 elementi delle
righe iva.
La posizione è quella del primo elemento.
TRF-CK-RCHARGE 1 AN 5886 S o spazio = viene  considerata per autofattura  N=No
TRF-XNUM-DOC-ORI 15 AN 5894 Numero documento originale alfanumerico.
## Acquisti
Viene trattato solo se il campo TRF-NUM-DOC-FOR non viene valorizzato
## Vendite
Viene trattato solo se in gestione ditta il campo “Numero doc.fattura di
vendita (tipo)” = 3.

Dalla versione 2019.1.6 il campo è obbligatorio.
In alternativa va valorizzato il campo
## TRF-XNUM-DOC-ORI-20
TRF-MEM-ESIGIB-IVA 1 AN 5909 S = per i clienti nuovi viene memorizzato il campo TRF-ESIGIBILTA-IVA
nell’anagrafica del cliente
TRF-COD-IDENTIFICATIVO 2 NU 5910 Codice identificativo
TRF-ID-IMPORTAZIONE 12 AN 5912 ID Importazione
TRF-XNUM-DOC-ORI-20 20 AN 5924 Numero documento originale alfanumerico da 20 caratteri.
## Acquisti
Viene trattato solo se il campo TRF-NUM-DOC-FOR non viene valorizzato
## Vendite
Viene trattato solo se in gestione ditta il campo “Numero doc.fattura di
vendita (tipo)” = 3.

Dalla versione 2019.1.6 il campo è obbligatorio.
In alternativa va valorizzato il campo
## TRF-XNUM-DOC-ORI
## TRF-RISERVATO 1 AN 5944

Aliquote OSS
Tabella aliquote OSS composta da 12 elementi
## TRF-ALIQ-OSS
4 NU 5945 Aliquota OSS. 2 interi e 2 decimali
## TRF-DATA-DOC-AUTOFATT
8 NU 5993 Data documento autofattura
## TRF-XNUM-DOC-ORI-AUTOFATT
20 AN 6001 Numero documento originale autofattura
TRF-AUTOFATT-SOLUZ-B 1 AN 6021 Autofattura soluzione B   (S/spazio)
## TRF-RISERVATO 4 AN 6022

## 974 AN 6026 SPAZIO
FILLER 2 AN 7000 Terminatore record ( 0D0A HEX  0D non obbligatorio )


















Record opzionale contenente dati aggiuntivi della contabile relativi alla  CONTABILITA’ INDUSTRIALE.






PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 19
## NOME CAMPO
## LUNGHEZZA FORMATO
## POSIZION
## E NOTE
TRF2-DITTA                        5 NU 1 Codice ditta MULTI
TRF2-VERSIONE                     1 NU 6 Versione fisso 3
TRF2-TARC                         1 NU 7 Tipo record Valore fisso 2
## CONTAB. INDUSTRIALE

La tabella Contab. Industriale i (lunghezza complessiva di 4040  caratteri) è
composta da 20 elementi  che comprendono i campi da TRF-MCI-CAUS a
TRF-MCI-TIPOCLFO. Le posizioni indicate sono quindi relative al primo
elemento
TRF-MCI-CAUS               3 NU 8 Causale cont. industr.
TRF-MCI-CDC-CONTO         8 NU 11 Conto cont. Industriale
TRF-MCI-VDS-VDR 8 NU 19 Voce di spesa / ricavo
TRF-MCI-DADATA 8 NU 27 Data inizio periodo contabile
TRF-MCI-ADATA 8 NU 35 Data fine periodo contabile
TRF-MCI-COMMESSA 6 NU 43 Codice commessa
TRF-MCI-SCOMMESSA 3 NU 49 Codice sottocommessa
TRF-MCI-CODART 20 AN 52 Codice articolo (solo per materiali)
TRF-MCI-SEGNO 1 AN 72 Segno ( D o A )
## TRF-MCI-QUANTITA
## 12 (8+3
dec+segno) NU 73 Quantità
## TRF-MCI-COSTO-UNIT
## 17(10+6
dec+segno) NU 85 Costo unitario
## TRF-MCI-COSTO-COMPLESS
## 18(11+6
dec+segno) NU 102 Importo movimento o costo complessivo
## TRF-MCI-QTALAV
## 12(8+3
dec+segno) NU 120 Quantita' totale lavorata
## TRF-MCI-TOTORE
## 10(7+2
dec+segno) NU 132 Totale ore per calcolo costo orario
## TRF-MCI-COSORA-CDC
## 17(10+6
dec+segno) NU 142 Costo orario Cdc/Conto
## TRF-MCI-COSORA-VDS
## 17(10+6
dec+segno) NU 159 Costo orario Vds/Vdr
TRF-MCI-DESCRIAGG 18 AN 176 Descrizione aggiuntiva
TRF-MCI-DEP-PROD 3 NU 194 Riferimenti produzione
## TRF-MCI-SEZ-PROD 3 NU 197 “
## TRF-MCI-NUM-PROD 6 NU 200 “
TRF-MCI-LINEA 3 NU 206 Linea di Produzione
TRF-MCI-TIPOCLFO 1 NU 209 Tipo Cliente / Fornitore

La tabella contiene 20 elementi ( lunghezza complessiva 40 caratteri)  Le
posizioni indicate sono quindi relative al primo elemento
TRF-MCI-IND-RIGA                      2 NU 4048 Indice collegamento riga contabile
## FILLER  2912 NU 4088 SPAZIO
FILLER 2 AN 7000 Terminatore record ( 0D0A HEX 0D non obbligatorio )

Se sono necessari più di 20 elementi è sufficiente accodare più records di contabilità industriale al record dei dati contabili.










Record opzionale contenente dati aggiuntivi della contabile relativi alla  GESTIONE BENI USATI.






PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 20
## NOME CAMPO
## LUNGHEZZA FORMATO
## POSIZION
## E NOTE
TRF3-DITTA                        5 NU 1 Codice ditta MULTI
TRF3-VERSIONE                     1 NU 6 Versione fisso 3
TRF3-TARC                         1 NU 7 Tipo record Valore fisso 3


TRFBU-CODBENE 7 NU 8 Codice bene ( solo regime analitico o globale con bene )
TRFBU-DES 25 AN 15 Descrizione bene
TRFBU-TIPO  1 NU 40 Tipo:  1 = Acquisto     2 = Vendita
TRFBU-QUANTITA 7 NU 41 Quantità
TRFBU-REGIMEX 1 AN 48 Regime :  1 = Margine  2 = Iva Normale   ( gestito solo Regime 1 )
TRFBU-VENDUTO 1 AN 49 Bene venduto:   S /N ( non obbligatorio )
TRFBU-ACQ-VEN 14 NU 50 Importo documento
TRFBU-ACCESSORI 14 NU 64 Importo accessorie
TRFBU-MARGINE 14 NU 78 Importo Margine ( solo regime analitico )
TRFBU-INTRAX 14 NU 92 Costo per esportazione ( solo regime globale )
## DETTAGLIO
La tabella DETTAGLIOi (lunghezza complessiva di 552  caratteri) è composta
da 12 elementi  che comprendono i campi da TRFBU-MIVAIMPON  a
TRFBU-TIPOOP. Le posizioni indicate sono quindi relative al primo elemento
TRFBU-MIVAIMPON 14 NU 106 Imponibile
TRFBU-MIVAALIQ 5 NU 120 Aliquota iva
TRFBU-MIVAIMPOS 14 NU 125 Imposta
TRFBU-MIVAFORF 4 NU 139 codice iva11
TRFBU-MIVACONTO 8 NU 143 Conto contabilita‘ semplificata
## TRFBU-TIPO-OP 1 NU 151
Tipo operazione: 1 = Acquisto   2 = Spese accessorie   3 = Vendita,  4=
Vendita con rettifica di costo ( reg. globale )
TRFBU-ART21 1 AN 658 Comunicazione art. 21 su registrazione beni.
S=Si  N=No
Se causale corrispettivi e valorizzato con S oppure causale acquisto/vendita
beni e valorizzato con C o P, dovrà seguire il record di tipo 5 con compilati i
campi relativi ai corrispettivi o al contrattto.
Se non valorizzato, nella registrazione iva il campo verrà messo a spazio.
TRFBU-RIF-FATTURA 1 AN 659 Riferimento ad una fattura registrata in precedenza S/N.
Se valorizzato con S, dovrà seguire il record di tipo 5 con compilati il numero
e la data di riferimento documento.
Se non valorizzato, viene considerato il valore N.
## FILLER 6340 AN 660 SPAZIO
FILLER 2 AN 7000 Terminatore record ( 0D0A HEX 0D non obbligatorio )










Record opzionale contenente dati aggiuntivi della contabile relativi a DATI AGGIUNTIVI INDIRIZZI ANAGRAFICA




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 21
## NOME CAMPO
## LUNGHEZZA FORMATO
## POSIZION
## E NOTE
TRF4-DITTA                        5 NU 1 Codice ditta MULTI
TRF4-VERSIONE                     1 NU 6 Versione fisso 3
TRF4-TARC                         1 NU 7 Tipo record Valore fisso 4


TRF-ANA-ANTIPOL 25 AN 8 Tipologia
TRF-ANA-ANIND-N 35 AN 33 Indirizzo
TRF-ANA-ANNUMC 10 AN 68 Numero civico
TRF-ANA-ANFRAZ 35 AN 78 Frazione
TRF-ANA-ANNUMSMS 20 AN 113 Numero per SMS
TRF-ANA-ANPIVA-ESTERO 20 AN 133 Partita iva estera da 20 caratteri
TRF-ANA-COD-COMUNE 4 AN 153 Codice comune
TRF-ANA-ALIAS 40 AN 157  Alias
TRF-ANA-RISERV-01 60 AN 197 Riservato 1
TRF-ANA-COD-COMUNE-NASC 4 AN 257 Codice comune di nascita
## FILLER 6739 AN 261 SPAZIO
FILLER 2 AN 7000 Terminatore record ( 0D0A HEX 0D non obbligatorio )























Record opzionale contenente dati aggiuntivi per COMUNICAZIONE ART. 21. e DATI RIFERIMENTO FATTURA




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 22

## NOME CAMPO
## LUNGHEZZA FORMATO
## POSIZION
## E NOTE
TRF5-DITTA                        5 NU 1 Codice ditta MULTI
TRF5-VERSIONE                     1 NU 6 Versione fisso 3
TRF5-TARC                         1 NU 7 Tipo record Valore fisso 5
Contratti fatture

La tabella contratti ha 30 elementi e comprende il campo
TRF-ART21-CONTRATTO. La posizione è relativa al primo elemento.
TRF-ART21-CONTRATTO 40 AN 8 Tipologia
## Corrispettivi

La tabella corrispettivi ha 50 elementi e va dal campo TRF-A21CO-ANAG a
TRF-A21CO-CONTRATTO. Le posizioni sono quelle relative al primo
elemento.
TRF-A21CO-ANAG 6 NU 1208 Codice anagrafica cliente in alternativa a codice fiscale
TRF-A21CO-COFI 16 AN 1214 Codice fiscale cliente, in alternativa a codice anagrafica
TRF-A21CO-DATA 8 NU 1230 Data registrazione
TRF-A21CO-FLAG 1 AN 1238 Flag per importazione riga in MCAR21:
S=Importa con controllo importo
N=Non importa
C=Importa senza controllo importo (Importo frazionato - Contratto)
P=Importa con controllo importo (Contratto periodico)
## TRF-A21CO-ALQ 3 NU 1239
Aliquota iva
TRF-A21CO-IMPORTO 14 NU 1242 Importo corrispettivo. Comprensivo di segno, le ultime 2 cifre contengono i
decimali.
TRF-A21CO-IMPOSTA 14 NU 1256 Importo Imposta. Comprensivo di segno, le ultime 2 cifre contengono i
decimali.
TRF-A21CO-NDOC 8 NU 1270 Numero documento. Le ultime 2 cifre sono del sezionale.
TRF-A21CO-FLAG-OPPOS 1 AN 1278 Flag opposizione
## FILLER 39 AN 1279
Riferimento fattura

Valorizzare i campi nel caso in cui sia stato valorizzato con S il campo
## TRF-RIF-FATTURA
TRF-RIF-FATT-NDOC 8 NU 6708 Riferimento a fattura precedente: numero documento
TRF-RIF-FATT-DDOC 8 NU 6716 Riferimento a fattura precedente: data documento
## Corrispettivi


La tabella corrispettivi ha 50 elementi e va dal campo TRF-A21CO-TIPO a
TRF-FLAG-SPESA. Le posizioni sono quelle relative al primo elemento.
TRF-A21CO-TIPO 1 AN 6724 R=Ricevuta F=Fattura  per Comunicazione polivalente
TRF-A21CO-TIPO-SPESA 2 AN 6725 Tipo spesa per tessera sanitaria
TK=Ticket
FC=Farmaco, omeopatia, dispositivi medici CE
FV=Farmaco per uso veterinario
AD=Acquisto o affitto di dispositivo medico CE
AS=Ecg, spirometria, holter pressorio,  glicemia
SR=Specialistica ambulatoriale esclusa estetica
CT=Cure termali
PI=Protesica e integrativa
IC=Chirurgia estetica ambulatoriale e ospedale
SP=Prestazioni sanitarie
SV=Spese veterinarie
AA=Altre spese
## TRF-A21CO-FLAG-SPESA 1 AN 6727
Flag spesa per tessera sanitaria
1=per tipo TK ticket di pronto soccorso
2=per tipo SR visita in intramoenia
## TRF-SPESE-FUNEBRI 1 AN 6924
S/N Da valorizzare con S se segue un record di tipo 7 con i codici fiscali die
defunti
Corrispettivi altro

La tabella ha 50 elementi.
Le posizioni sono quelle relative al primo elemento.
TRF-A21CO-PAGAM 1 AN 6925 Pagamento tracciato S/N/SPAZIO
TRF-RIF-FATT-XNUM-DOC-ORI 20 AN 6975 Riferimento a fattura precedente: numero documento originale
## TRF-TESSERA-SANIT-AGG  1 AN 6995
S/N Da valorizzare con S se segue un record di tipo 7 con i dati aggiuntivi
della tessera sanitaria
## FILLER 5 AN 6996 SPAZIO
FILLER 2 AN 7000 Terminatore record ( 0D0A HEX 0D non obbligatorio )




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 23

Record opzionale contenente dati aggiuntivi della contabile relativi alla scheda rid del cliente.

## NOME CAMPO
## LUNGHEZZA FORMATO
## POSIZION
## E NOTE
TRF6-DITTA                        5 NU 1 Codice ditta MULTI
TRF6-VERSIONE                     1 NU 6 Versione fisso 3
TRF6-TARC                         1 NU 7 Tipo record Valore fisso 6
TRF6-IBAN               27 AN 8 Codice IBAN del cliente
TRF6-TRACCIATO-RID       1 AN 35 Tipo tracciato Rid. B-→ BTOB, C→CORE
TRF6-STORNO 1 AN 36 Facoltà di storno
TRF6-PSD 1 AN 37 Tipologia azienda (consumer, ecc.)
TRF6-DATA-MANDATO 8 NU 38 Data mandato nel formato AAAAMMGG
## TRF6-PRIMO-CLIENTE 1 AN 45
Se valorizzato  S indica un nuovo cliente per il rid (da comunicare con FRST
nel tracciato RID)
FILLER 6954 AN 46 Spazio





















Record opzionale contenente dati aggiuntivi per SPESE FUNEBRI e DATI AGGIUNTIVI TESSERA SANITARIA


## NOME CAMPO
## LUNGHEZZA FORMATO
## POSIZION
## E NOTE
TRF5-DITTA                        5 NU 1 Codice ditta MULTI
TRF5-VERSIONE                     1 NU 6 Versione fisso 3
TRF5-TARC                         1 NU 7 Tipo record Valore fisso 7




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 24
Codici fiscali defunti

La tabella ha 50 elementi e comprende il campo
TRF-A21CO-COFI-DEF. La posizione è relativa al primo elemento.
TRF-A21CO-COFI-DEF 16 AN 8 Codice fiscale del defunto
Dati aggiuntivi tessera
sanitaria

La tabella ha 50 elementi e comprende il campo
TRF-A21CO-PAGAM-CONVENZ. La posizione è relativa al primo elemento.
TRF-A21CO-PAGAM-CONVENZ 1 AN 808 Pagamento convenzionato  S=si
## FILLER 6142 AN 858 SPAZIO
FILLER 2 AN 7000 Terminatore record ( 0D0A HEX 0D non obbligatorio )


























## NOTE ED ESEMPI DI COMPILAZIONE DEL FILE TRAF2000

## NOTE RELATIVE ALL’IMPORTAZIONE DELLE ANAGRAFICHE CLIENTI / FORNITORI

Il controllo sulla presenza dell’anagrafica passata dal file TRAF2000 alla procedura MULTI, viene effettuato su Codice
CLIFOR (TRF-COD-CLIFOR), Partita Iva, Codice Fiscale, Partita iva Estero, Alias.
Se uno di questi campi è compilato viene verificato se c’è già in archivio una anagrafica con questo campo chiave.




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 25
Se non c’è viene fatto un controllo sulla ragione sociale. Se viene individuata una anagrafica con ragione sociale
esattamente identica, viene presa questa come anagrafica per la registrazione contabile corrente.
Se non c’è viene creata una nuova anagrafica.

Se l’anagrafica esiste già ed il campo Considera Omonimi = S non viene creata una nuova anagrafica, se = N vengono
controllati i dati anagrafici, più precisamente: Ragione sociale / Indirizzo / Città / Provincia / Cap. Se viene trovata una
anagrafica con dati anagrafici uguali viene presa questa anagrafica altrimenti viene creata una nuova anagrafica.
Se l’anagrafica esiste già ed il campo TRF-STORICO = S e TRF-STORICO-DATA <> 0 e vengono passati dati diversi da
quelli memorizzati, viene fatto un aggiornamento dell’anagrafica e rilevata una variazione storica con data = TRF-STORICO-
## DATA.

Flusso delle operazioni:


- PARTITA IVA = 0 e CODICE FISCALE = SPAZIO e P.IVA ESTERO = SPAZIO e
( Ricerca per Alias diverso da S oppure ( Ricerca per Alias = S e ALIAS = SPAZIO ) )
Ricerca per Rag.Sociale
TROVATA anagrafica con stessa rag.sociale e dati indirizzo (Indirizzo / Codice comune / Città / Provincia /
Cap) uguali
Viene presa questa anagrafica

NON TROVATA anagrafica con stessa rag.sociale e dati indirizzo uguali
Creazione nuova anagrafica


altrimenti


## 2. PARTITA IVA <> 0
a. Ricerca per P.Iva
i. Anagrafica con stessa P.Iva TROVATA
## 1. Se Omonimi = S
a. Viene presa questa anagrafica
b. Se TRF-STORICO = S e TRF-STORICO-DATA <> 0
i. Aggiornamento storico anagrafica

## 2. Se Omonimi = N
a. Ricerca per Rag.Sociale
i. TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo (Indirizzo / Codice comune / Città / Provincia /
Cap)    uguali
- Viene presa questa anagrafica

ii. NON TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo (Indirizzo / Codice comune / Città / Provincia /
Cap) uguali
- Creazione nuova anagrafica

ii. Anagrafica con stessa P.Iva NON TROVATA
- Creazione nuova anagrafica
altrimenti
## 3. P.IVA ESTERO <> 0
a. Ricerca per P.IVA ESTERO
i. Anagrafica con stessa P.IVA ESTERO TROVATA




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 26
## 1. Se Omonimi = S
a. Viene presa questa anagrafica
b. Se TRF-STORICO = S e TRF-STORICO-DATA <> 0
i. Aggiornamento storico anagrafica
## 2. Se Omonimi = N
a. Ricerca per Rag.Sociale
i. TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo (Indirizzo / Codice comune / Città / Provincia /
Cap)  uguali
- Viene presa questa anagrafica

ii. NON TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo (Indirizzo / Codice comune / Città / Provincia /
Cap)    uguali
- Creazione nuova anagrafica

ii. Anagrafica con stessa P.IVA ESTERO NON TROVATA
- Creazione nuova anagrafica
altrimenti


## 4. CODICE FISCALE <> SPAZIO
a. Ricerca per Cod.Fiscale
i. Anagrafica con stesso Cod.Fiscale TROVATA
## 1. Se Omonimi = S
a. Viene presa questa anagrafica
b. Se TRF-STORICO = S e TRF-STORICO-DATA <> 0
i. Aggiornamento storico anagrafica
## 2. Se Omonimi = N
a. Ricerca per Rag.Sociale
i. TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo uguali
- Viene presa questa anagrafica

ii. NON TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo uguali
- Creazione nuova anagrafica

ii. Anagrafica con stesso Cod.Fiscale NON TROVATA
- Creazione nuova anagrafica
altrimenti





## 5. ALIAS <> SPAZIO
a. Ricerca per Alias
i. Anagrafica con stesso Alias TROVATA
## 1. Se Omonimi = S
a. Viene presa questa anagrafica
b. Se TRF-STORICO = S e TRF-STORICO-DATA <> 0
i. Aggiornamento storico anagrafica




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 27
## 2. Se Omonimi = N
a. Ricerca per Rag.Sociale
i. TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo uguali
- Viene presa questa anagrafica

ii. NON TROVATA anagrafica con  P.Iva = TRF-PIVA e
C.Fisc. = TRF-COFI e P.Iva.Est = TRF-PIVA-ESTERO e
rag.sociale e dati indirizzo uguali
- Creazione nuova anagrafica

ii. Anagrafica con stesso Alias NON TROVATA
- Creazione nuova anagrafica




































## NOTE RELATIVE AL FILE DI LOG ( .CSV )

Impostando la scelta 1 – Importazione prima nota, viene creato un file in formato CSV con lo stesso nome del file da
elaborare, scritto nella tabella di IMPPN.
Il path del file è lo stesso del file da elaborare, dichiarato nella tabella di IMPPN.
Vengono riportati nel LOG tutti i messaggi a video dati dal programma di importazione e di controllo del file (nel caso
questo sia attivato da tabella o venga impostato nel programma di importazione con il pulsante cOntrolla).




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 28
Vengono anche riportati gli esiti positivi per i record elaborati correttamente, con i dati relativi alla registrazione creata.

## STRUTTURA DEL FILE

## CAMPO LUNGHEZZA POSIZIONE NOTE
DITTA                        5 1 Codice ditta
## SEPARATORE                     1 6 ;
RIFERIMENTO                         20 7 Viene riportato il campo TRF-RIFERIMENTO di TRAF2000, se presente.
## SEPARATORE                     1 27 ;
NUMERO RECORD 7 28 Numero record trattato
## SEPARATORE 1 35 ;
CAUSALE 3 36 Codice causale
## SEPARATORE                     1 39 ;
## NUMERO DOCUMENTO  /
## PROTOCOLLO
6 40 Numero documento o protocollo ( fatt. acquisto )
## SEPARATORE                     1 46 ;
SEZIONALE 3 47 Sezionale
## SEPARATORE                     1 50 ;
DATA DOCUMENTO 10 51 Data documento nel formato 99/99/9999
## SEPARATORE                     1 61 ;
DESCRIZIONE ESITO 80 62 Descrizione esito importazione o controllo
## SEPARATORE                     1 142 ;
## DATI RELATIVI ALLA
## REGISTRAZIONE CREATA
## IN PRIMA NOTA

I dati seguenti vengono scritti solo nel caso di importazione del record di TRAF2000
in prima nota e non se viene rilevato un errore o se il record è in fase di controllo
DATA REGISTRAZIONE 10 143 Data della regitrazione di prima nota
## SEPARATORE                     1 153 ;
## PROGRESSIVO REGISTRAZIONE 6 154
Numero progressivo registrazione del file MOCO.
Nel caso di contabilità semplificata tale campo non sarà valorizzato.
## SEPARATORE                     1 160 ;
## NUMERO DOCUMENTO /
## PROTOCOLLO
5 161 Numero documento o protocollo ( fatt. acquisto )
## SEPARATORE                     1 166 ;
SEZIONALE 3 167 Sezionale
## SEPARATORE                     1 170 ;
DATA DOCUMENTO 10 171 Data documento nel formato 99/99/9999
## ALTRI DATI
## SEPARATORE 1 181 ;
CAUSALE AGGIUNTIVA 20 182 Causale aggiuntiva
## SEPARATORE 1 202 ;
NUM. DOC. FORNITORE 9 203 Numero documento fornitore
## SEPARATORE 1 212 ;
SEZIONALE 3 213 Sezionale
## SEPARATORE 1 216 ;
NUM. DOC. ORIGINALE 15 217 Numero documento originale alfanumerico




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 29

## FATTURA DI VENDITA

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+


Nel caso in cui si dovesse registrare anche il pagamento / incasso contestuale della
fattura :

Conto cassa  01/0001

## TRF-CONTO(1)            10001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000120000+
TRF-CONTO(2)            9999999 (indica il cliente di cui sopra)
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000120000+




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 30

## FATTURA DI VENDITA CON 2 ALIQUOTE IVA E 2 RICAVI

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  ( 1000,00 + 200,00   iva  20% )
2200,00  ( 2000,00  + 200,00   iva  10 % )

Ricavi da registrare su conto 15/0001
Ricavi da registrare su conto 15/0002

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  Via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-IMPONIB(2)           00000200000+
## TRF-ALIQ   (2)           10
## TRF-IMPOSTA(2)           00000020000+
## TRF-TOT-FATT             00000330000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-CONTO-RIC(2)         150002
## TRF-IMP-RIC(2)           00000200000+













PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 31

## FATTURA DI ACQUISTO

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              011
TRF-CAU-DES              Fattura Acquisto
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+






















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 32

## FATTURA DI VENDITA IN CONTABILITA’ SEMPLIFICATA

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001 e 15/0002

In semplificata la tabella degli imponibili per aliquota viaggia in parallelo a quella dei ricavi.
In questo esempio l’aliquota è una sola, ma specificheremo 2 righe dato che ci sono 2
ricavi. La stessa cosa succede se ci sono 2 aliquote con un solo ricavo.


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000060000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000012000+
## TRF-IMPONIB(2)           00000040000+
## TRF-ALIQ   (2)           20
## TRF-IMPOSTA(2)           00000020000+
## TRF-TOT-FATT             00000008000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000060000+
## TRF-CONTO-RIC(2)         150002
## TRF-IMP-RIC(2)           00000040000+











PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 33

## NOTA DI CREDITO DA FORNITORE

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              012
TRF-CAU-DES              Nota Credito da Fornitore
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+






















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 34

## FATTURA DI ACQUISTO CON IVA INDETRAIBILE AL 100%

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              011
TRF-CAU-DES              Fattura Acquisto
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           620
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000120000+















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 35

## FATTURA DI ACQUISTO CON IVA INDETRAIBILE AL 50%

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              011
TRF-CAU-DES              Fattura Acquisto
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000050000+
## TRF-ALIQ   (1)           620
## TRF-IMPOSTA(1)           00000010000+
## TRF-IMPONIB(2)           00000050000+
## TRF-ALIQ   (2)           20
## TRF-IMPOSTA(2)           00000010000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000110000+



















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 36

## FATTURA DI VENDITA / ACQUISTO CON 12 RIGHE NEL CASTELLETTO IVA

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1310,00  (1110,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001

I dati sono sviluppati su 2 record e sono agganciati tramite il campo TRF-80-SEGUENTE, che nel primo record vale
“S” e nel secondo “U”.


## Record 1
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-IMPONIB(2)           00000001000+
## TRF-ALIQ   (2)           310
## TRF-IMPOSTA(2)           00000000000+
## TRF-IMPONIB(3)           00000001000+
## TRF-ALIQ   (3)           311
## TRF-IMPOSTA(3)           00000000000+
## TRF-IMPONIB(4)           00000001000+
## TRF-ALIQ   (4)           312
## TRF-IMPOSTA(4)           00000000000+
## TRF-IMPONIB(5)           00000001000+
## TRF-ALIQ   (5)           313
## TRF-IMPOSTA(5)           00000000000+
## TRF-IMPONIB(6)           00000001000+
## TRF-ALIQ   (6)           314




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 37
## TRF-IMPOSTA(6)           00000000000+
## TRF-IMPONIB(7)           00000001000+
## TRF-ALIQ   (7)           315
## TRF-IMPOSTA(7)           00000000000+
## TRF-IMPONIB(8)           00000001000+
## TRF-ALIQ   (8)           316
## TRF-IMPOSTA(8)           00000000000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000111000+
## TRF-80-SEGUENTE S

## Record 2
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000001000+
## TRF-ALIQ   (1)           317
## TRF-IMPOSTA(1)           00000000000+
## TRF-IMPONIB(2)           00000001000+
## TRF-ALIQ   (2)           318
## TRF-IMPOSTA(2)           00000000000+
## TRF-IMPONIB(3)           00000001000+
## TRF-ALIQ   (3)           319
## TRF-IMPOSTA(3)           00000000000+
## TRF-IMPONIB(4)           00000001000+
## TRF-ALIQ   (4)           320
## TRF-IMPOSTA(4)           00000000000+
## TRF-80-SEGUENTE U













PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 38

## FATTURA DI ACQUISTO DIFFERITA

Codice ditta in contabilita' MULTI      1    (Iva Trimestrale)
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.04.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001
Competenza iva campo TRF-PLAFOND  ( formato MMAAAA )

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              044
TRF-CAU-DES              Fattura Acquisto differita
## TRF-DATA-REGISTRAZIONE 15042019
## TRF-DATA-DOC             15042019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-PLAFOND 032019




















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 39

## MOVIMENTO CONTABILE NON IVA


Movimento di   Cassa a Banca per 1000,00 del 16.01.2019
## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              027
TRF-CAU-DES              Giroconto
## TRF-DATA-REGISTRAZIONE         16012019
TRF-CONTO(1)            0010001    (Conto cassa)
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          0000100000+
TRF-CONTO(2)            0020001    (Conto banca)
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          0000100000+



## INCASSO DI FATTURE CLIENTI PER CASSA SE SI CONOSCE IL CODICE DEI CLIENTI


Es: Cassa in Dare   Clienti in Avere

Totale incassato    6000,00 €
## Cliente 1   Codice 14/00008             1000,00 €
## Cliente 2   Codice 14/00009             2000,00 €
## Cliente 3   Codice 14/00010             3000,00 €

## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              027
TRF-CAU-DES              Giroconto
## TRF-DATA-REGISTRAZIONE         16012019
TRF-CONTO(1)            0010001    (Conto cassa)
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000600000+
TRF-CONTO(2)            1400008    (Conto cliente 1)
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000100000+
TRF-CONTO(3)            1400009    (Conto cliente 2)
## TRF-DA   (3)            A
## TRF-IMPORTO(3)          00000200000+
TRF-CONTO(4)            1400010    (Conto cliente 3)
## TRF-DA   (4)            A
## TRF-IMPORTO(4)          00000300000+











PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 40

## INCASSO DI FATTURE CLIENTI PER CASSA SE NON SI CONOSCE IL CODICE DEI
## CLIENTI

Viene sfruttato il campo TRF-80-SEGUENTE.
Tale campo si utilizza tipicamente per registrazioni di diversi a diversi, quando necessitano più
di 80 contropartite. Compilata la tabella delle 80 contropartite bisogna scrivere S in questo
campo, cosi da fare in modo che la registrazione continui leggendo le 80 contropartite del
record successivo. L’ultimo dei record di questa serie dovrà contenere U nel campo
## TRF-80-SEGUENTE.

Da notare che viene utilizzato un record per ogni cliente. La scelta è obbligata se vogliamo
registrare clienti di cui non si conosce il codice e che potrebbero anche non esistere nel
database di destinazione.
In questo caso vengono identificati tramite partita iva.

Es: Cassa in Dare   Clienti in Avere

Totale incassato    6000,00 €
Cliente 1   ZANFALC SPA                P. IVA  11111111111             1000,00 €
Cliente 2   PENNIS SRL                   P. IVA   22222222222            2000,00 €
Cliente 3   YORK SNC                      P. IVA  33333333333             3000,00 €

## RECORD 1

## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              027
TRF-CAU-DES              Giroconto
## TRF-RASO                 ZANFALC SPA
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA                 11111111111
## TRF-PF                   N
TRF-CONTO(1)            0010001    (Conto cassa)
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000600000+
TRF-CONTO(2)            9999999    (Conto cliente 1)
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000100000+
TRF-80-SEGUE S                    Segue record
## RECORD 2

## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              027
TRF-CAU-DES              Giroconto
## TRF-RASO                 PENNIS SRL
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 41
## TRF-PROV                 RM
## TRF-PIVA                 22222222222
## TRF-PF                   N
TRF-CONTO(1)            9999999    (Conto cliente 2)
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000200000+
TRF-80-SEGUE S                    Segue record
## RECORD 3

## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              027
TRF-CAU-DES              Giroconto
## TRF-RASO                 YORK SNC
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA                 33333333333
## TRF-PF                   N
TRF-CONTO(1)            9999999    (Conto cliente 3)
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000300000+
TRF-80-SEGUE U                   Ultimo record della serie



## INSERIMENTO DELLA SOLA ANAGRAFICA SENZA REGISTRARE CLIENTI /
## FORNITORI

Bisogna impostare TRF-SOLO-CLIFOR = A

Il codice ditta è ininfluente, in quanto verranno importate solo le anagrafiche.

Anagrafica      ZANFALC SPA

## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ZANFALC SPA
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA                 11111111111
## TRF-PF                   N
## TRF-SOLO-CLIFOR A











PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 42

## INSERIMENTO DELLA SOLA ANAGRAFICA CLIENTI / FORNITORI

Viene utilizzato il campo TRF-SOLO-CLIFOR.
C crea solo il cliente    F crea solo il fornitore    Non viene generata la prima nota.

Cliente 1      ZANFALC SPA
Fornitore 2   PENNIS SRL

## RECORD 1

## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ZANFALC SPA
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA                 11111111111
## TRF-PF                   N
## TRF-SOLO-CLIFOR C
## RECORD 2

## TRF-DITTA                1
## TRF-TARC 0
## TRF-VERSIONE             3
## TRF-RASO                 PENNIS SRL
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA                 22222222222
## TRF-PF                   N
## TRF-SOLO-CLIFOR            F



















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 43

## AGENZIE DI VIAGGIO  -  FATTURA DI VENDITA

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019

Importo totale

## 1000,00
Importo Corrispettivi nella UE         100,00
Importo Corrispettivi fuori UE          200,00
Corrispettivi misti 700,00

Ricavi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
TRF-CAUSALE              VENDITA con flag ag. viaggi abilitato
TRF-CAU-DES              Fatt.di vendita ag. Viaggi
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000010000+
## TRF-IMPONIB(2)           00000020000+
## TRF-IMPONIB(3) 00000070000+
## TRF-TOT-FATT            00000100000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-DIFFERIMENTO-IVA S





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 44

## AGENZIE DI VIAGGIO  -  FATTURA DI ACQUISTO

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019

Importo totale

## 1000,00
Costi UE         100,00
Costi fuori UE          200,00
Costi misti parte UE 300,00
Costi misti fuori UE 400,00

Costo da registrare su conto 15/0001


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
TRF-CAUSALE              ACQUISTO con flag ag. viaggi  abilitato
TRF-CAU-DES              Fatt. di ACQUISTO ag. Viaggi
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000010000+
## TRF-IMPONIB(2)           00000020000+
## TRF-IMPONIB(3) 00000030000+
## TRF-IMPONIB(4) 00000040000+
## TRF-TOT-FATT 00000100000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+











PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 45

## CORRISPETTIVI

Codice ditta in contabilita' MULTI      1

Data 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001
Il conto cassa viene letto dalla tabella Personalizzazione Conti.

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-COD-CLIFOR NON METTO NIENTE
## TRF-CAUSALE              020
TRF-CAU-DES              Corrispettivi
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+





























PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 46

## CORRISPETTIVI CON CONTO CASSA DIVERSO DA CONTO MEMORIZZATO IN
## TABELLA PERSONALIZZAZIONE CONTI

Codice ditta in contabilita' MULTI      1

Data 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001

Conto cassa registrato su CONTO CASSA 1

Se il parametro “Utilizza 24 contropartite costo/ricavo” = “N”
il conto va messo in TRF-CONTO(1). Valorizzare quindi anche TRF-DA(1) e
## TRF-IMPORTO(1)

Se il parametro “Utilizza 24 contropartite costo/ricavo” = “S”
il conto va messo in TRF-CONTO(25). Valorizzare quindi anche TRF-DA(25) e
## TRF-IMPORTO(25)


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-COD-CLIFOR NON METTO NIENTE
## TRF-CAUSALE              020
TRF-CAU-DES              Corrispettivi
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-CAU-PAGAM 020
Se “Utilizza 24 contropartite” = “N”
## TRF-CONTO(1)            CONTO CASSA 1
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000120000+
Se “Utilizza 24 contropartite” = “S”
## TRF-CONTO(25)            CONTO CASSA 1
## TRF-DA   (25)            D
## TRF-IMPORTO(25)          00000120000+















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 47

## CORRISPETTIVI CON PIU’ CONTI CASSA

Codice ditta in contabilita' MULTI      1

Data 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001

CONTO CASSA 1       importo  900 €
CONTO CASSA 2       importo  300 €

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-COD-CLIFOR NON METTO NIENTE
## TRF-CAUSALE              020
TRF-CAU-DES              Corrispettivi
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-CAU-PAGAM 020
## TRF-CONTO(1)            CONTO CASSA 1
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000090000+
## TRF-CONTO(2)            CONTO CASSA 2
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          00000030000+
























PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 48

## EFFETTI

Codice ditta in contabilita' MULTI      1
Importo documento 1200,00

I dati vengono memorizzati nel record 1      TRF1-TARC = 1
Importo rata 1 = 700    scadenza  31/07/2019
Importo rata 2 = 500    scadenza  31/08/2019

## ---
Nel caso di effetti associati ad una Nota di Credito gli importi dovranno avere il segno
Negativo,  quindi il “-“ al posto del “+”  nel campo  TRF-POR-IMPORTO-EFF(...)
## ---
Conto Clienti/Fornitori
Il record effetti può essere abbinato solo a Fatture o Note di credito.
Se si effettua un pagamento che deve chiudere una rata, va compilato solo il record del
movimento contabile con causale pagamento ed indicando il numero e l’anno della partita.
## ---
Altri conti
Il conto deve avere nel campo “Gestione portafoglio” il valore Scadenza Dare / Avere.
La causale deve avere nel campo “Gestione portafoglio” il valore Scadenza Dare / Avere.
Il conto va messo in TRF-CONTO(1), nel caso la rata sia una, altrimenti da TRF-CONTO(1)
a TRF-CONTO(n), dove n indica il numero di rate.


## TRF1-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             1
TRF-POR-CODPAG                    Codice pagamento
TRF-POR-BANCA                     ABI Banca
TRF-POR-AGENZIA                   CAB Banca
TRF-POR-DESAGENZIA                Descrizione agenzia
TRF-POR-TOT-RATE                  Numero rate
TRF-POR-TOTDOC                    Totale documento
## TRF-POR-NUM-RATA (1)                 1
## TRF-POR-DATASCAD(1)                  31072019
## TRF-POR-TIPOEFF(1)                   2
## TRF-POR-IMPORTO-EFF(1)             00000070000+
## TRF-POR-FLAG(1)                      0
## TRF-POR-NUM-RATA (2)                 1
## TRF-POR-DATASCAD(2)                  31082019
## TRF-POR-TIPOEFF(2)                   2
## TRF-POR-IMPORTO-EFF(2)             00000050000+
## TRF-POR-FLAG(2)                      0









PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 49
Il numero massimo di scadenze per fattura è 12.
E’ possibile gestire più di 12 scadenze portafoglio, accodando più record di tipo 1 al record di tipo zero, quindi senza
l'utilizzo del campo TRF-80-SEGUENTE.
I record di tipo 1 successivi al primo dovranno contenere solo i dati del portafoglio, quindi se nel primo record di tipo 1
sono presenti i dati del portafoglio e dell'intra, nei successivi quelli dell'intra non dovranno esserci.
## Es:
record tipo 0 - dati contabili fattura
record tipo 1 - dati portafoglio , intra, ritenute
record tipo 1 - dati portafoglio
record tipo 1 - dati portafoglio
Il numero massimo di scadenze è 80.



## INCASSO TRAMITE BANCA DI PIU’ FATTURE CLIENTI CON CHIUSURA EFFETTI

Codice ditta in contabilita' MULTI      1
## Cliente      10
Fattura nr 14/00 del 15.01.2019  di euro 500,00    Partita 14 Anno 2019
Fattura nr 15/00 del 26.02.2019  di euro 600,00    Partita 15 Anno 2019
Fattura nr 16/00 del 30.04.2019  di euro 800,00    Partita 16 Anno 2019

Conto BANCA   10001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              027
TRF-CAU-DES              Incasso cliente
TRF-COD-CLIFOR 10 oppure metto i dati anagrafici
## TRF-DATA-REGISTRAZIONE 01082019
## TRF-CAU-PAGAM 027
TRF-CAU-DES-PAGAM Incasso cliente
## TRF-CONTO(1)            10001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000190000+
## TRF-CONTO(2)            9999999
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000050000+
## TRF-EC-PARTITA-PAG(2) 14
## TRF-EC-PARTITA-ANNO-PAG(2) 2019
## TRF-CONTO(3)            9999999
## TRF-DA   (3)            A
## TRF-IMPORTO(3)          00000060000+
## TRF-EC-PARTITA-PAG(3) 15
## TRF-EC-PARTITA-ANNO-PAG(3) 2019
## TRF-CONTO(4)            9999999
## TRF-DA   (4)            A
## TRF-IMPORTO(4)          00000080000+
## TRF-EC-PARTITA-PAG(4) 16
## TRF-EC-PARTITA-ANNO-PAG(4) 2019





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 50

## EFFETTI  RELATIVI A FATTURA CON RITENUTA DI ACCONTO

Codice ditta in contabilita' MULTI      1
Importo documento 1200,00
Importo ritenuta         200,00
Importo dovuto        1000,00

Da pagare in una unica rata

I dati vengono memorizzati nel record 1      TRF1-TARC = 1
Importo rata 1 = 1000    scadenza  31/07/2019

## ---
Nel caso di effetti associati ad una Nota di Credito gli importi dovranno avere il segno
Negativo,  quindi il “-“ al posto del “+”  nel campo  TRF-POR-IMPORTO-EFF(...)
e nel campo TRF-RITA-IMPRA
## ---
Attenzione, il record effetti può essere abbinato solo a Fatture o Note di credito.
Se si effettua un pagamento che deve chiudere una rata, va compilato solo il record del
movimento contabile con causale pagamento ed indicando il numero e l’anno della partita.


## TRF1-DITTA                00001
## TRF1-VERSIONE 3
## TRF1-TARC             1
TRF-POR-CODPAG                    Codice pagamento
TRF-POR-BANCA                     ABI Banca
TRF-POR-AGENZIA                   CAB Banca
TRF-POR-DESAGENZIA                Descrizione agenzia
TRF-POR-TOT-RATE                  Numero rate
## TRF-POR-TOTDOC                    00000120000+
## TRF-POR-NUM-RATA (1)                 1
## TRF-POR-DATASCAD(1)                  31072019
## TRF-POR-TIPOEFF(1)                   2
TRF-POR-IMPORTO-EFF(1)             00000100000+          (importo al netto della ritenuta)
## TRF-POR-FLAG(1)                      0
## TRF-POR-NUM-RATA (2)
0                                (rata=0 per gli importi delle
ritenute)
## TRF-POR-DATASCAD(2)                  31072019
## TRF-POR-TIPOEFF(2)                   2
TRF-POR-IMPORTO-EFF(2)             00000020000+          (importo della ritenuta)
## TRF-POR-FLAG(2)                      0
TRF-RITA-IMPRA 00000020000+          (importo della ritenuta)
Se si tratta di effetti attivi va indicato solo questo campo,
relativamente alle ritenute.















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 51

## FATTURA DI VENDITA CON IVA SOSPESA

Si registra come una fattura di vendita.

Valorizzare il campo TRF-ESIGIBILITA-IVA con il valore 1 o 2 o 4.
1 = Operazioni ad esigibilità differita
2 = Operazioni ad esigibilità differita ex. Art. 7 DL. 185/2008
4 = Split payment




## FATTURA DI ACQUISTO CON SPLIT PAYMENT

Si registra come una fattura di acquisto.

1 - Utilizzare una causale con Reverse Charge
2 - Valorizzare il campo TRF-ESIGIBILITA-IVA con il valore 4
3 - Va compilato anche il record di tipo 1 relativamente al campo TRF-DOC-AUTOFATT, che
contiene il numero dell’autofattura






## INCASSO FATTURA CLIENTE SOSPESA

Codice ditta in contabilita' MULTI      1
## Cliente      10
Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)

Conto CASSA   10001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              008
TRF-CAU-DES              Pagam.Fatt.Sosp.
TRF-COD-CLIFOR 10 oppure metto i dati anagrafici
## TRF-DATA-REGISTRAZIONE 20012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            10001
## TRF-DA   (1)            D




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 52
## TRF-IMPORTO(1)          00000120000+
## TRF-CONTO(2)            CONTO IVA VENDITE
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000020000+
## TRF-CAUS-ORI          001
## TRF-ESIGIBILITA-IVA 1 / 2 / 4





## INCASSO FATTURA CLIENTE SOSPESA CON SPLIT PAYMENT

Codice ditta in contabilita' MULTI      1
## Cliente      10
Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)

Conto CASSA   10001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              008
TRF-CAU-DES              Pagam.Fatt.Sosp.
TRF-COD-CLIFOR 10 oppure metto i dati anagrafici
## TRF-DATA-REGISTRAZIONE 20012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
TRF-TOT-FATT            (mettere imponibile) 00000100000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            10001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000100000+
## TRF-CAUS-ORI          001
## TRF-ESIGIBILITA-IVA 4
















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 53

## FATTURA DI VENDITA SOSPESA CON SPLIT PAYMENT
## CON 2 INCASSI PARZIALI E UNA ALIQUOTA IVA

Codice ditta in contabilita' MULTI      1
Fattura nr 1 del 31.01.2016  di euro 1220,00  (1000,00 + 220,00 iva)

Conto CASSA   2415005

## Record 1
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 31012016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000022000+
## TRF-TOT-FATT             00000122000+
## TRF-CONTO-RIC(1)         8215045
## TRF-IMP-RIC(1)           00000100000+
## TRF-ESIGIBILITA-IVA 4

## Record 2
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              008
TRF-CAU-DES              Pagamento fatt.sospesa




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 54
## TRF-DATA-REGISTRAZIONE 20022016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000060000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000013200+
TRF-TOT-FATT            (mettere imponibile) 00000060000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            2415005
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000060000+
## TRF-CAUS-ORI          001
## TRF-ESIGIBILITA-IVA 4

## Record 3
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              008
TRF-CAU-DES              Pagamento fatt.sospesa
## TRF-DATA-REGISTRAZIONE 25022016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000040000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000008800+
TRF-TOT-FATT            (mettere imponibile) 00000040000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            2415005
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000040000+
## TRF-CAUS-ORI          001
## TRF-ESIGIBILITA-IVA 4







PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 55

## FATTURA DI VENDITA SOSPESA CON SPLIT PAYMENT
## CON 2 INCASSI PARZIALI E PIU’ ALIQUOTE IVA

Codice ditta in contabilita' MULTI      1
Fattura nr 1 del 31.01.2016  di euro 3660,00  (3000,00 + 360,00 iva)

Conto CASSA   2415005

## Record 1
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 31012016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000022000+
## TRF-IMPONIB(2)           00000100000+
## TRF-ALIQ   (2)           10
## TRF-IMPOSTA(2)           00000010000+
## TRF-IMPONIB(3)           00000100000+
## TRF-ALIQ   (3)           4
## TRF-IMPOSTA(3)           00000004000+
## TRF-TOT-FATT             00000336000+
## TRF-CONTO-RIC(1)         8215045
## TRF-IMP-RIC(1)           00000300000+
## TRF-ESIGIBILITA-IVA 4

## Record 2
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 56
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              008
TRF-CAU-DES              Pagamento fatt.sospesa
## TRF-DATA-REGISTRAZIONE 20022016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000050000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000011000+
## TRF-IMPONIB(2)           00000050000+
## TRF-ALIQ   (2)           10
## TRF-IMPOSTA(2)           00000010000+
## TRF-IMPONIB(3)           00000050000+
## TRF-ALIQ   (3)           4
## TRF-IMPOSTA(3)           00000004000+
TRF-TOT-FATT            (mettere imponibile) 00000150000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            2415005
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000150000+
## TRF-CAUS-ORI          001
## TRF-ESIGIBILITA-IVA 4

## Record 3
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              008
TRF-CAU-DES              Pagamento fatt.sospesa
## TRF-DATA-REGISTRAZIONE 20022016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000050000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000011000+




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 57
## TRF-IMPONIB(2)           00000050000+
## TRF-ALIQ   (2)           10
## TRF-IMPOSTA(2)           00000010000+
## TRF-IMPONIB(3)           00000050000+
## TRF-ALIQ   (3)           4
## TRF-IMPOSTA(3)           00000004000+
TRF-TOT-FATT            (mettere imponibile) 00000150000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            2415005
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000150000+
## TRF-CAUS-ORI          001
## TRF-ESIGIBILITA-IVA 4





## FATTURA DI VENDITA SOSPESA CON SPLIT PAYMENT
## CON 1 INCASSO E PIU’ ALIQUOTE IVA

Codice ditta in contabilita' MULTI      1
Fattura nr 1 del 31.01.2016  di euro 3660,00  (3000,00 + 360,00 iva)

Conto CASSA   2415005

## Record 1
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 31012016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000022000+
## TRF-IMPONIB(2)           00000100000+
## TRF-ALIQ   (2)           10




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 58
## TRF-IMPOSTA(2)           00000010000+
## TRF-IMPONIB(3)           00000100000+
## TRF-ALIQ   (3)           4
## TRF-IMPOSTA(3)           00000004000+
## TRF-TOT-FATT             00000336000+
## TRF-CONTO-RIC(1)         8215045
## TRF-IMP-RIC(1)           00000300000+
## TRF-ESIGIBILITA-IVA 4

## Record 2
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              008
TRF-CAU-DES              Pagamento fatt.sospesa
## TRF-DATA-REGISTRAZIONE 20022016
## TRF-DATA-DOC             31012016
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           22
## TRF-IMPOSTA(1)           00000022000+
## TRF-IMPONIB(2)           00000100000+
## TRF-ALIQ   (2)           10
## TRF-IMPOSTA(2)           00000020000+
## TRF-IMPONIB(3)           00000100000+
## TRF-ALIQ   (3)           4
## TRF-IMPOSTA(3)           00000008000+
TRF-TOT-FATT            (mettere imponibile) 00000300000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            2415005
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000300000+
## TRF-CAUS-ORI          001
## TRF-ESIGIBILITA-IVA 4








PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 59

## INCASSO FATTURA CLIENTE SOSPESA  ( SOLO GIROCONTO IVA )

Codice ditta in contabilita' MULTI      1
## Cliente      10
Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)

Viene eseguito il giroconto tra iva sospesa e iva vendite, ma non la chiusura del cliente.

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              008
TRF-CAU-DES              Pagam.Fatt.Sosp.
TRF-COD-CLIFOR 10 oppure metto i dati anagrafici
## TRF-DATA-REGISTRAZIONE 20012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            CONTO IVA VENDITE
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000020000+
## TRF-CAUS-ORI          001
TRF-ESIGIBILITA-IVA 1  o  2  ***


## ***
1 = Operazioni ad esigibilità differita
2 = Operazioni ad esigibilità differita ex. Art. 7 DL. 185/2008














PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 60

## INCASSO FATTURA CLIENTE SOSPESA  ( CON ABBUONO )

Codice ditta in contabilita' MULTI      1
## Cliente      10
Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)

Importo incassato   1195,00
## Importo Abbuono         5,00

Conto CASSA                 10001
Conto Abbuoni passivi    8410090




## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              008
TRF-CAU-DES              Pagam.Fatt.Sosp.
TRF-COD-CLIFOR 10 oppure metto i dati anagrafici
## TRF-DATA-REGISTRAZIONE 20012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            10001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000119500+
## TRF-CONTO(2)            CONTO IVA VENDITE
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000020000+
## TRF-CAUS-ORI          001
## TRF-CONTO(3)            8410090
## TRF-DA   (3)            D
## TRF-IMPORTO(3)          00000000500+
TRF-ESIGIBILITA-IVA 1   o   2  ***


## ***
1 = Operazioni ad esigibilità differita
2 = Operazioni ad esigibilità differita ex. Art. 7 DL. 185/2008








PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 61

## INCASSO N.C. CLIENTE SOSPESA

Codice ditta in contabilita' MULTI      1
## Cliente      10
Nota Credito nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)

Conto CASSA   10001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              008
TRF-CAU-DES              Pagam.Fatt.Sosp.
TRF-COD-CLIFOR 10 oppure metto i dati anagrafici
## TRF-DATA-REGISTRAZIONE 20012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            10001
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000120000+
## TRF-CONTO(2)            CONTO IVA VENDITE
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          00000020000+
## TRF-CAUS-ORI          002
TRF-ESIGIBILITA-IVA 1   o   2   ***


## ***
1 = Operazioni ad esigibilità differita
2 = Operazioni ad esigibilità differita ex. Art. 7 DL. 185/2008
















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 62

## INCASSO CORRISPETTIVO SOSPESO

Codice ditta in contabilita' MULTI      1
## Cliente      10
Corrispettivo del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)

Conto CASSA   10001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              008
TRF-CAU-DES              Pagam.Fatt.Sosp.
## TRF-DATA-REGISTRAZIONE 20012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 0
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+

## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            10001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000120000+
## TRF-CONTO(2)            CONTO IVA CORRISPETTIVI
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000020000+
## TRF-CAUS-ORI          020
## TRF-ESIGIBILITA-IVA 1




















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 63

## FATTURA DI ACQUISTO CON RISCONTI

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 3300,00
Costo 1 su conto 15/0001   di € 1000,00   iva al 20%
Costo 2 su conto 15/0002   di € 2000,00   iva al 10%

Per i risconti verrà applicato l’intervallo di date 1 al costo 1 e l’intervallo di date 2 al costo 2.

I ratei non vengono gestiti automaticamente dalla procedura IMPPN, pertanto le
registrazioni andranno fatte sul file TRAF2000 come normali registrazioni di giroconto.


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-IMPONIB(2)           00000200000+
## TRF-ALIQ   (2)           10
## TRF-IMPOSTA(2)           00000020000+
## TRF-TOT-FATT             00000330000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-CONTO-RIC(2)         150002
## TRF-IMP-RIC(2)           00000200000+
## TRF-RIFER-TAB(1)                     1
TRF-IND-RIGA(1)                      1   (leggerà il ricavo 1)
## TRF-DT-INI (1)                       01052019
## TRF-DT-FIN(1)                        30042019
## TRF-RIFER-TAB(2) 1




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 64
TRF-IND-RIGA(2)                      2   (leggerà il ricavo 2)
## TRF-DT-INI (2)                       01052019
## TRF-DT-FIN (2)                       30042019
TRF-TIPO-MOV-RISCONTI “R” oppure “C”




## FATTURA ACQUISTO BENI USATI – REGIME DEL MARGINE

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00
Costo da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              143
## TRF-CAU-DES              FATT.ACQ.MARGINE
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              143
## TRF-CAU-DES-PAGAM              FATT.ACQ.MARGINE
TRF-CONTO(1)            9999998 (indica il fornitore di cui sopra)
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000120000+
## TRF-CONTO(2)            150001
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          00000120000+














PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 65

## FATTURA ACQUISTO BENI USATI – REGIME DEL MARGINE
## CON PAGAMENTO FATTURA

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00
Costo da registrare su conto    15/0001
Incasso da registrare su conto  2415005

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              143
## TRF-CAU-DES              FATT.ACQ.MARGINE
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              27
## TRF-CAU-DES-PAGAM              PAGAMENTO FATTURA
TRF-CONTO(1)            9999998 (indica il fornitore di cui sopra)
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000120000+
## TRF-CONTO(2)            150001
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          00000120000+
TRF-CONTO(3)            9999998 (indica il fornitore di cui sopra)
## TRF-DA   (3)            D
## TRF-IMPORTO(3)          00000120000+
## TRF-CONTO(4)            2515005
## TRF-DA   (4)            A
## TRF-IMPORTO(4)          00000120000+











PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 66

## FATTURA VENDITA BENI USATI – REGIME DEL MARGINE

Codice ditta in contabilita' MULTI      1
## Cliente     Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 3600,00
Ricavo da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              144
## TRF-CAU-DES              FATT.VEND.MARGINE
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              144
## TRF-CAU-DES-PAGAM              FATT.VEND.MARGINE
TRF-CONTO(1)            9999999 (indica il cliente di cui sopra)
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000360000+
## TRF-CONTO(2)            150001
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000360000+




















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 67

## BENI USATI

## RECORD DI TIPO 3 CHE IDENTIFICA IL BENE USATO

Deve sempre seguire il record di tipo 0 relativo alla fattura di acquisto o vendita del bene


## TRF3-DITTA                        00001
## TRF3-VERSIONE                     3
## TRF3-TARC                         3
## TRFBU-CODBENE 1234567
TRFBU-DES Armadio italiano fine 800
TRFBU-TIPO  1 = se Acquisto   2 = se Vendita
## TRFBU-QUANTITA 1
## TRFBU-REGIMEX 1
TRFBU-VENDUTO N = se Acquisto    S = se Vendita
## TRFBU-ACQ-VEN 0000000120000+
TRFBU-ACCESSORI 0          se Acquisto indicare spese access.  es:  0000000010000+
TRFBU-MARGINE 0          se Vendita indicare importo margine es:  0000000240000+
TRFBU-INTRAX 0          se Vendita indicare costo esportaz.  es:  0000000030000+
## TRFBU-MIVAIMPON(1) 0000000100000+
## TRFBU-MIVAALIQ(1) 02000
## TRFBU-MIVAIMPOS(1) 0000000020000+
## TRFBU-MIVAFORF(1) 0
TRFBU-MIVACONTO(1) 1234567 (indicare conto  )
TRFBU-TIPO-OP(1) 1 = se Acquisto   2 = se Spese accessorie  3 = se Vendita
## TRFBU-VALUTA E






























PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 68

## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA / SEMPLIFICATA

## FATTURA DI ACQUISTO CON PAGAMENTO CONTESTUALE

Codice ditta in contabilita' MULTI      1
## Fornitore    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 240,00  (200,00 + 40,00 iva)
Costo da registrare su conto 150001
Conto cassa                           2415005 ( il conto di incasso va sempre messo nel campo
## TRF-CONTO(2) )

Attenzione, il pagamento contestuale non può essere parziale. Dovrà quindi corrispondere
al totale della fattura.
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              011
TRF-CAU-DES              Fatt.di acquisto
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000020000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000004000+
## TRF-TOT-FATT             00000024000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000020000+
## TRF-CAU-PAGAM 27
## TRF-CAU-DES-PAGAM PAG.FORNITORE
## TRF-CONTO(1)            9999998
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000024000+
TRF-NUM-DOC-PAG-PROF (5 car. + sezionale ) 0011500
## TRF-DATA-DOC-PAG-PROF 15012019




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 69

## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA
## PAGAMENTO DIFFERITO FATTURA FORNITORE

Codice ditta in contabilita' MULTI      1
## Fornitore    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 240,00  (200,00 + 40,00 iva)
Conto spese non pagate professionisti     2625005
Conto cassa                                              2415005
Costo originario                                         6805045
Causale                                                     34   ( Tipo reg. = A     Caus. Profess. = F )
Verranno generati il pagamento e lo storno da  “Spese non pagate” a “Costo originario”

Attenzione, la sequenza dei conti dovrà seguire assolutamente quella dell’esempio.
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              034
TRF-CAU-DES              Pagamento Fornitore
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              034
TRF-CAU-DES-PAGAM              Pagamento Fornitore
## TRF-CONTO(1)            9999998
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000024000+
## TRF-CONTO(3)            2625005
## TRF-DA   (3)            A
## TRF-IMPORTO(3)          00000020000+
## TRF-CONTO(4)            6805045
## TRF-DA   (4)            D
## TRF-IMPORTO(4)          00000020000+
TRF-NUM-DOC-PAG-PROF (5 car. + sezionale ) 0011500
## TRF-DATA-DOC-PAG-PROF 15012019




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 70

## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA / SEMPLIFICATA
## FATTURA DI VENDITA CON INCASSO CONTESTUALE

Codice ditta in contabilita' MULTI      1
## Cliente    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 240,00  (200,00 + 40,00 iva)
Costo da registrare su conto 150001
Conto cassa                          2415005 ( il conto di incasso va sempre messo nel campo
## TRF-CONTO(2) )

Attenzione, l' incasso contestuale non può essere parziale. Dovrà quindi corrispondere   al
totale della fattura.

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000020000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000004000+
## TRF-TOT-FATT             00000024000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000020000+
## TRF-CAU-PAGAM 27
## TRF-CAU-DES-PAGAM PAG.CLIENTE
## TRF-CONTO(1)            9999999
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          00000024000+
TRF-NUM-DOC-PAG-PROF (5 car. + sezionale ) 0011500
## TRF-DATA-DOC-PAG-PROF 15012019




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 71


## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA
## INCASSO DIFFERITO FATTURA CLIENTE

Codice ditta in contabilita' MULTI      1
## Cliente    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 240,00  (200,00 + 40,00 iva)
Conto compensi non pagati professionisti     5425005
Conto cassa                                              2415005
Ricavo originario                                        2415010
Causale                                                     51   ( Tipo reg. = V     Caus. Profess. = C )
Verranno generati l’incasso e lo storno da  “Compensi non pagati” a “Ricavo originario”
Attenzione, la sequenza dei conti dovrà seguire assolutamente quella dell’esempio.
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              051
TRF-CAU-DES              Incasso Cliente
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              051
TRF-CAU-DES-PAGAM              Incasso Cliente
## TRF-CONTO(1)            9999999
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          00000024000+
## TRF-CONTO(3)            5425005
## TRF-DA   (3)            D
## TRF-IMPORTO(3)          00000020000+
## TRF-CONTO(4)            2415010
## TRF-DA   (4)            A
## TRF-IMPORTO(4)          00000020000+
TRF-NUM-DOC-PAG-PROF (5 car. + sezionale ) 0011500
## TRF-DATA-DOC-PAG-PROF 15012019




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 72

## AZIENDA PROFESSIONISTA IN CONTABILITA’ SEMPLIFICATA/ CONTABILITA’
## PER CASSA IN CONTABILITA’ SEMPLIFICATA

## PAGAMENTO DIFFERITO FATTURA FORNITORE

Codice ditta in contabilita' MULTI      1
## Fornitore    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 240,00  (200,00 + 40,00 iva)
Conto spese non pagate professionisti     2625005
Conto cassa                                              2415005
Costo originario                                         6805045
Causale                                                     34   ( Tipo reg. = A     Caus. Profess. = F )

Viene generato un movimento iva descrittivo.
Se nella causale il campo “Causale reg.iva descr.” = 1 la riga viene stampata altrimenti no.

Attenzione, la sequenza dei conti dovrà seguire assolutamente quella dell’esempio.

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              034
TRF-CAU-DES              Pagamento Fornitore
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CONTO-RIC(1) 9999998
## TRF-IMP-RIC(1) 00000024000+
## TRF-CONTO-RIC(2) 2415005
## TRF-IMP-RIC(2) 00000024000+
## TRF-CONTO-RIC(3) 2625005
## TRF-IMP-RIC(3) 00000020000+
## TRF-CONTO-RIC(4) 6805045
## TRF-IMP-RIC(4) 00000020000+
## TRF-CAU-PAGAM              034
TRF-CAU-DES-PAGAM              Pagamento Fornitore
## TRF-CONTO(1)            9999998
## TRF-DA   (1)            D




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 73
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000024000+
## TRF-CONTO(3)            2625005
## TRF-DA   (3)            A
## TRF-IMPORTO(3)          00000020000+
## TRF-CONTO(4)            6805045
## TRF-DA   (4)            D
## TRF-IMPORTO(4)          00000020000+
TRF-NUM-DOC-PAG-PROF (5 car. + sezionale ) 0011500
## TRF-DATA-DOC-PAG-PROF 15012019


Nel caso in cui l’anno della DATA DI REGISTRAZIONE del pagamento sia superiore a quello della
DATA DEL DOCUMENTO andrà compilato anche il campo seguente:

## TRF-IMPONIB(1)          00000020000+









































PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 74

## AZIENDA PROFESSIONISTA O CONTABILITA’ PER CASSA IN CONTABILITA’
## SEMPLIFICATA

## INCASSO DIFFERITO FATTURA CLIENTE

Codice ditta in contabilita' MULTI      1
## Cliente    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 240,00  (200,00 + 40,00 iva)
Conto compensi non pagati professionisti     5425005
Conto cassa                                                   2415005
Ricavo originario                                            2415010
Causale                                                          51   ( Tipo reg. = V     Caus. Profess. = C
## )

Viene generato un movimento iva descrittivo.
Se nella causale il campo “Causale reg.iva descr.” = 1 la riga viene stampata altrimenti no.

Attenzione, la sequenza dei conti dovrà seguire assolutamente quella dell’esempio.

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              051
TRF-CAU-DES              Incasso Cliente
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CONTO-RIC(1) 9999999
## TRF-IMP-RIC(1) 00000024000+
## TRF-CONTO-RIC(2) 2415005
## TRF-IMP-RIC(2) 00000024000+
## TRF-CONTO-RIC(3) 5425005
## TRF-IMP-RIC(3) 00000020000+
## TRF-CONTO-RIC(4) 5415010
## TRF-IMP-RIC(4) 00000020000+
## TRF-CAU-PAGAM              051
TRF-CAU-DES-PAGAM              Incasso Cliente
## TRF-CONTO(1)            9999999




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 75
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          00000024000+
## TRF-CONTO(3)            5425005
## TRF-DA   (3)            D
## TRF-IMPORTO(3)          00000020000+
## TRF-CONTO(4)            2415010
## TRF-DA   (4)            A
## TRF-IMPORTO(4)          00000020000+
TRF-NUM-DOC-PAG-PROF (5 car. + sezionale ) 0011500
## TRF-DATA-DOC-PAG-PROF 15012019



Nel caso in cui l’anno della DATA DI REGISTRAZIONE del pagamento sia superiore a quello della
DATA DEL DOCUMENTO andrà compilato anche il campo seguente:

## TRF-IMPONIB(1)          00000020000+





## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA / SEMPLIFICATA

## INCASSO    C O N T E S T U A L E     FATTURA CLIENTE / PAGAMENTO FORNITORE

## C O N    A B B U O N O

Nel caso ci sia un abbuono su pagamento contestuale si dovranno valorizzare i campi:
## TRF-CONTO(3)
## TRF-DA(3)
TRF-IMPORTO(3)     → Importo abbuono

L’importo relativo al conto cassa sarà la differenza tra Tot.Fattura e abbuono.













PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 76

## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA / SEMPLIFICATA

## INCASSO    D I F F E R I T O     FATTURA CLIENTE / PAGAMENTO FORNITORE

## C O N    A B B U O N O

Nel caso ci sia un abbuono su pagamento differito si dovranno valorizzare i campi:
## TRF-CONTO(5)
## TRF-DA(5)
TRF-IMPORTO(5)      → Importo abbuono
## TRF-CAU-AGGIUNT(5) = “ABBUONO”

L’indice 5 è indicativo, in quanto possono essere presenti diversi conti professionisti.
Può essere 5 o maggiore di 5.
Quello che distingue il conto dagli altri è TRF-CAU-AGGIUNT(xx) che va messo =
## “ABBUONO”

L’importo relativo al conto cassa sarà la differenza tra Tot.Fattura e abbuono.



## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA

## VERSAMENTO C/TERZI
## ALTRI MOVIMENTI CLIENTI

Codice ditta in contabilita' MULTI      1
## Cliente    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Conto incasso/pag                                         2415005
Conto clienti c/spese anticipate                     1505040
Causale                                                      505   ( Tipo reg. = A     Caus. Profess. = L )

Attenzione, la sequenza dei conti dovrà seguire assolutamente quella dell’esempio.

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              505
TRF-CAU-DES              Versamento c/terzi
## TRF-DATA-REGISTRAZIONE 15012010
## TRF-DATA-DOC             15012010




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 77
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              0505
TRF-CAU-DES-PAGAM              Versamento c/terzi
## TRF-CONTO(1)            1505040
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000024000+




## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA

## FATTURA DI VENDITA CON INCASSO TRAMITE R.B.

## - IN ARCHIVIO PROFESSIONISTI RIMANE IL SOSPESO

Codice ditta in contabilita' MULTI      1
## Cliente    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Il caso è il seguente:

1) Fattura emessa con ritenuta di acconto
2) Emissione effetti e quindi chiusura contabile del cliente e sospeso ancora aperto, non
c’è quindi l’incasso a livello di archivio professionisti. La causale utilizzata non dovrà
intaccare dunque il registro professionisti.
3) Incasso professionista con chiusura del cliente per l’importo della ritenuta e giro del
sospeso al conto effettivo
4) Giro di Effetti in portafoglio con la Banca


Seguono le stampe della prima nota e del registro cronologico generati e i 4 record di
## TRAF2000.

## NOTE

## 1) Record 1
Viene riportato su TRF-RIT-ACC l’importo della ritenuta

## 2) Record 3
Sono a ZERO TRF-IMPORTO(1) e TRF-IMPORTO(2) in quanto il cliente è stato chiuso
con
la registrazione 2.
In TRF-CONTO(5) viene messo il conto 5205150 ( Debiti v/cassa naz. e previd.) in
quanto
dovrà figurare nel dettaglio ricavi professionisti, ma non verrà contabilizzato in prima
nota in
quanto ha il flag Sospeso Prof. = NO.
Viene riportato il totale fattura su TRF-TOT-FATT. Se è presente l’importo viene
considerato




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 78
come importo incassato, dato che TRF-IMPORTO(1) è = ZERO.
Vengono riportati TRF-CONTO-RIT-ACC e TRF-RIT-ACC. Questo permette il
giroconto tra
ERARIO C/RITENUTE e CLIENTE.

3) Con questo schema di registrazione a livello di archivio professionisti rimane il
sospeso. Pertanto la registrazione la ritroveremo sia nella stampa incassi e pagamenti
sospesi sia in registrazione dell’incasso tra le fatture sospese.

|==========================================================================================================
## ======================|
|               | ALBERGHINI UGO                                                          |  cod.att.:                           |
| Ditta n. 1064 | VIA CALANDONE 10                                                        |  cod.fis.:                                        |
|               | 60019 SENIGALLIA                          AN                            |  part.iva:                           |
|--------------------------------------------------------------------------------------------------------------------------------|
|                                         STAMPA PRIMA NOTA  DAL 01/01/06 AL 31/12/06                                  Pag.    1 |
|==========================================================================================================
## ======================|
|  KEY  D A T A   N.DOC. DT. DOC. CAU DESCRIZIONE CAUSALE                CONTO RAG.SOCIALE / DESCRIZIONE              IMPORTO  GA|
|--------------------------------------------------------------------------------------------------------------------------------|
|    1 01/01/06     1/00 01/01/06   1 FATTURA VENDITA                   14/02120 VERRRI LUIGI E GAUDENZIO           1.224,00 D 10|
|                                                                      48/05/045 IVA SU VENDITE                       204,00 A 10|
|                                                                      54/25/005 COMPENSI NON RISCOSSI-PROFESS.     1.000,00 A 10|
|                                                                      52/05/150 DEBITI V/CASSA NAZ. E PREVID.         20,00 A 10|
|                                                               ***    Imponibile %al. rg %ven          imposta ***              |
|                                                                        1.020,00   20                   204,00                  |
|--------------------------------------------------------------------------------------------------------------------------------|
|    5 01/01/06     2/00 01/01/06  27 PAGAMENTO FATTU                   14/02120 VERRRI LUIGI E GAUDENZIO           1.024,00 A 10|
|                                                                      15/05/005 EFFETTI IN PORTAFOGLIO             1.024,00 D 10|
|--------------------------------------------------------------------------------------------------------------------------------|
|    7 10/02/06     1/00 01/01/06  51 PAGAMENTO FATTU                  54/25/005 COMPENSI NON RISCOSSI-PROFESS.     1.000,00 D 10|
|                                                                      58/15/005 COMP. PROFESS. PERCEPITI CON R     1.000,00 A 10|
|                                                                       14/02120 VERRRI LUIGI E GAUDENZIO             200,00 A 10|
|                                                                      18/20/050 ERARIO C/RITENUTE SUBITE             200,00 D 10|
|--------------------------------------------------------------------------------------------------------------------------------|
|   11 10/02/06     2/00 01/01/06  27 PAGAMENTO FATTU                  24/05/001 BANCA C/C                          1.024,00 D 10|
|                                                                      15/05/005 EFFETTI IN PORTAFOGLIO             1.024,00 A 10|
|--------------------------------------------------------------------------------------------------------------------------------|
| TOTALE PROGRESSIVO                                                                                                4.472,00 D   |
| TOTALE PROGRESSIVO                                                                                                4.472,00 A   |
----------------------------------------------------------------------------------------------------------------------------------


|~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~
## ~~~~~~~~~~~~~~~~~~~~~|
|               | ALBERGHINI UGO                                                         | Cod. att.:                            |
| Ditta n. 1064 | VIA CALENDONE 10                                                       | Cod. fis.:                                   |
|               | 60019 SENIGALLAI                           AN                          | Part.iva :                            |
|---------------+------------------------------------------------------------------------+---------------------------------------|
|                        R E G I S T R O    C R O N O L O G I C O    P R O F E S S I O N I S T I                 Pag.     1/2019 |
|--------------------------------------------------------------------------------------------------------------------------------|
|N.Prg.  Data   Causale           Num.Doc.   Dt.Doc. Cod. Ragione Sociale/Indirizzo/Descr.      Importo   Descrizione            |
|--------------------------------------------------------------------------------------------------------------------------------|
|    7 10/02/06 PAGAMENTO FATTU        1    01/01/06 2120 VERRRI LUIGI E GAUDENZIO                                               |
|                                                         VIA LANDINI 20                                                         |
|                                                         60019 SENIGALLIA                          AN                           |
|                                                         BANCA C/C                           1.024,00    versamenti             |
|                                                         ERARIO C/RITENUTE SUBITE              200,00    ritenute subite        |
|                                                         IVA SU VENDITE                        204,00    iva sui compensi       |
|                                                         COMP. PROFESS. PERCEPITI CON R/A    1.000,00    compensi percepiti     |
|                                                         DEBITI V/CASSA NAZ. E PREVID.          20,00                           |
|--------------------------------------------------------------------------------------------------------------------------------|
|                |                CASSA                |              BANCA C/C              |       MOVIMENTAZIONE C/TERZI      |
|                |      incassi           pagamenti    |   prelevamenti        versamenti    |     incassi            pagamenti  |
|----------------|------------------+------------------|------------------+------------------|------------------+----------------|
|   PERIODO      |                  |                  |                  |        1.024,00  |                  |                |
|   PROGRESSIVO  |                  |                  |                  |        1.024,00  |                  |                |
|________________|__________________|__________________|__________________|__________________|__________________|________________|
|                |          Compensi          |   Proventi in sostituzione |           Ritenute         |            Iva         |
|                |          percepiti         |    redditi e/o indennita'  |            subite          |       sui compensi     |
|----------------|----------------------------|----------------------------|----------------------------|------------------------|
|   PERIODO      |             1.000,00       |                            |                200,00      |                204,00  |
|   PROGRESSIVO  |             1.000,00       |                            |                200,00      |                204,00  |
|________________|____________________________|____________________________|____________________________|________________________|
|                |      Personale     |       Compensi      | Canoni di locazione |      Interessi      |          Premi         |




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 79
|                |      dipendente    |       a  terzi      |  anche finanziaria  |       passivi       |     di assicurazione   |
|----------------|--------------------|---------------------|---------------------|---------------------|------------------------|
|   PERIODO      |                    |                     |                     |                     |                        |
|   PROGRESSIVO  |                    |                     |                     |                     |                        |
|________________|____________________|_____________________|_____________________|_____________________|________________________|
|                |        Spese       |         Spese       |       Convegni      |     Altri costi     |            Iva         |
|                |  alberghiere ecc.  |  di rappresentanza  |       e  corsi      |       e spese       |       su acquisti      |
|----------------|--------------------|---------------------|---------------------|---------------------|------------------------|
|   PERIODO      |                    |                     |                     |                     |                        |
|   PROGRESSIVO  |                    |                     |                     |                     |                        |
|________________________________________________________________________________________________________________________________|





Record 1 Fattura emessa con ritenuta di acconto

## TRF-DITTA                01064
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALBERGHINI UGO
## TRF-IND                  VIA CALANDONE 10
## TRF-CAP                  60019
## TRF-CITTA                SENIGALLIA
## TRF-PROV                 AN
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               10           --/--> Alberghini10Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 01012019
## TRF-DATA-DOC             01012019
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000102000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020400+
## TRF-TOT-FATT             00000122400+
## TRF-CONTO-RIC(1)         5815005
## TRF-IMP-RIC(1)           00000100000+
## TRF-CONTO-RIC(2)         5205150
## TRF-IMP-RIC(2)           00000002000+
## TRF-RIT-ACC 00000020000+























PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 80
Record 2 Emissione R.B. a cliente

## TRF-DITTA                01064
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALBERGHINI UGO
## TRF-IND                  VIA CALANDONE 10
## TRF-CAP                  60019
## TRF-CITTA                SENIGALLIA
## TRF-PROV                 AN
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               10           --/--> Alberghini10Mario
## TRF-CAUSALE              027
TRF-CAU-DES              R.B. a cliente
## TRF-DATA-REGISTRAZIONE 01012019
## TRF-DATA-DOC             01012019
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-CAU-PAGAM 27
TRF-CAU-DES-PAGAM R.B. a cliente
## TRF-CONTO(1)            9999999
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          0000102400+
## TRF-CONTO(2)            1505005
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          0000102400+
TRF-NUM-DOC-PAG-PROF (6 car. + sezionale ) 00000100
## TRF-DATA-DOC-PAG-PROF 01012019






































PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 81
Record 3 Incasso professionista

## TRF-DITTA                01064
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALBERGHINI UGO
## TRF-IND                  VIA CALANDONE 10
## TRF-CAP                  60019
## TRF-CITTA                SENIGALLIA
## TRF-PROV                 AN
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               10           --/--> Alberghini10Mario
## TRF-CAUSALE              051
TRF-CAU-DES              Pagam.Fattura professionista
## TRF-DATA-REGISTRAZIONE 01012019
## TRF-DATA-DOC             01012019
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-TOT-FATT          0000122400+
## TRF-CAU-PAGAM 051
TRF-CAU-DES-PAGAM Pagam. Fattura professionista
## TRF-CONTO(1)            9999999
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          0000000000+
## TRF-CONTO(2)            2405001
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          0000000000+
## TRF-CONTO(3)            5425005
## TRF-DA   (3)            D
## TRF-IMPORTO(3)          0000100000+
## TRF-CONTO(4)            5815005
## TRF-DA   (4)            A
## TRF-IMPORTO(4)          0000100000+
## TRF-CONTO(5)            5205150
## TRF-DA   (5)            A
## TRF-IMPORTO(5)          0000002000+
TRF-NUM-DOC-PAG-PROF (6 car. + sezionale ) 00000100
## TRF-DATA-DOC-PAG-PROF 01012019
## TRF-RIT-ACC 00000020000+
## TRF-CONTO-RIT-ACC 1820190


















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 82
Record 4 Banca a effetti

## TRF-DITTA                01064
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALBERGHINI UGO
## TRF-IND                  VIA CALANDONE 10
## TRF-CAP                  60019
## TRF-CITTA                SENIGALLIA
## TRF-PROV                 AN
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               10           --/--> Alberghini10Mario
## TRF-CAUSALE              027
TRF-CAU-DES              Accredito in banca
## TRF-DATA-REGISTRAZIONE 01012019
## TRF-DATA-DOC             01012019
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-CAU-PAGAM 27
TRF-CAU-DES-PAGAM Accredito in banca
## TRF-CONTO(1)            2405001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          0000102400+
## TRF-CONTO(2)            1505005
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          0000102400+
TRF-NUM-DOC-PAG-PROF (6 car. + sezionale ) 00000100
## TRF-DATA-DOC-PAG-PROF 01012019





































PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 83

## AZIENDA PROFESSIONISTA IN CONTABILITA’ ORDINARIA

## FATTURA DI VENDITA CON INCASSO TRAMITE R.B.

## - IN ARCHIVIO PROFESSIONISTI VIENE CHIUSO IL SOSPESO

Codice ditta in contabilita' MULTI      1
## Cliente    Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Il caso è il seguente:

1) Fattura emessa con ritenuta di acconto
2) Emissione effetti e quindi chiusura contabile del cliente con effetti in portafoglio. E’
come una regitrazione di incasso, ma con effetti in portafoglio al posto della cassa.
3) Giro di Effetti in portafoglio con la Banca


Segue  le stampe della prima nota ti e i 3 record di TRAF2000.

## NOTE

## 1) Record 1
Viene riportato su TRF-RIT-ACC l’importo della ritenuta

## 2) Record 3
In TRF-CONTO(5) viene messo il conto 5205150 ( Debiti v/cassa naz. e previd.) in
quanto
dovrà figurare nel dettaglio ricavi professionisti, ma non verrà contabilizzato in prima
nota in
quanto ha il flag Sospeso Prof. = NO.
Vengono riportati TRF-CONTO-RIT-ACC e TRF-RIT-ACC. Questo permette il
giroconto tra
ERARIO C/RITENUTE e CLIENTE.

3) Con questo schema di registrazione a livello di archivio professionisti  il sospeso viene
chiuso.



|==========================================================================================================
## ======================|
|               | ALBERGHINI UGO                                                          |  cod.att.:                           |
| Ditta n. 1064 | VIA CALANDONE 10                                                        |  cod.fis.:                                        |
|               | 60019 SENIGALLIA                          AN                            |  part.iva:                           |
|--------------------------------------------------------------------------------------------------------------------------------|
|                                         STAMPA PRIMA NOTA  DAL 01/01/06 AL 31/12/06                                  Pag.    1 |
|==========================================================================================================
## ======================|
|  KEY  D A T A   N.DOC. DT. DOC. CAU DESCRIZIONE CAUSALE                CONTO RAG.SOCIALE / DESCRIZIONE              IMPORTO  GA|
|--------------------------------------------------------------------------------------------------------------------------------|
|    1 01/01/06     1/00 01/01/06   1 FATTURA VENDITA                   14/02120 VERRRI LUIGI E GAUDENZIO           1.224,00 D 10|
|                                                                      48/05/045 IVA SU VENDITE                       204,00 A 10|
|                                                                      54/25/005 COMPENSI NON RISCOSSI-PROFESS.     1.000,00 A 10|
|                                                                      52/05/150 DEBITI V/CASSA NAZ. E PREVID.         20,00 A 10|
|                                                               ***    Imponibile %al. rg %ven          imposta ***              |
|                                                                        1.020,00   20                   204,00                  |
|--------------------------------------------------------------------------------------------------------------------------------|
|    7 10/02/06     1/00 01/01/06  51 PAGAMENTO FATTU                   14/02120 VERRI LUIGI E GAUDENZIO            1.024,00 A 10|
|                                                                      15/05/005 EFFETTI IN PORTAFOGLIO             1.024,00 D 10|
|                                                                      54/25/005 COMPENSI NON RISCOSSI-PROFESS.     1.200,00 D 10|




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 84
|                                                                      58/15/005 COMP. PROFESS. PERCEPITI CON R     1.200,00 A 10|
|                                                                       14/02120 VERRRI LUIGI E GAUDENZIO             200,00 A 10|
|                                                                      18/20/050 ERARIO C/RITENUTE SUBITE             200,00 D 10|
|--------------------------------------------------------------------------------------------------------------------------------|
|   11 10/02/06     2/00 01/01/06  27 PAGAMENTO FATTU                  24/05/001 BANCA C/C                          1.024,00 D 10|
|                                                                      15/05/005 EFFETTI IN PORTAFOGLIO             1.024,00 A 10|
|--------------------------------------------------------------------------------------------------------------------------------|



Record 1 Fattura emessa con ritenuta di acconto

## TRF-DITTA                01064
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALBERGHINI UGO
## TRF-IND                  VIA CALANDONE 10
## TRF-CAP                  60019
## TRF-CITTA                SENIGALLIA
## TRF-PROV                 AN
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               10           --/--> Alberghini10Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 01012019
## TRF-DATA-DOC             01012019
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000102000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020400+
## TRF-TOT-FATT             00000122400+
## TRF-CONTO-RIC(1)         5815005
## TRF-IMP-RIC(1)           00000100000+
## TRF-CONTO-RIC(2)         5205150
## TRF-IMP-RIC(2)           00000002000+
## TRF-RIT-ACC 00000020000+




























PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 85
Record 2 Incasso professionista (emissione effetti)

## TRF-DITTA                01064
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALBERGHINI UGO
## TRF-IND                  VIA CALANDONE 10
## TRF-CAP                  60019
## TRF-CITTA                SENIGALLIA
## TRF-PROV                 AN
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               10           --/--> Alberghini10Mario
## TRF-CAUSALE              051
TRF-CAU-DES              Pagam.Fattura professionista
## TRF-DATA-REGISTRAZIONE 01012019
## TRF-DATA-DOC             01012019
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-TOT-FATT          0000122400+
## TRF-CAU-PAGAM 051
TRF-CAU-DES-PAGAM Pagam. Fattura professionista
## TRF-CONTO(1)            9999999
## TRF-DA   (1)            A
## TRF-IMPORTO(1)          0000102400+
## TRF-CONTO(2)            1505005
## TRF-DA   (2)            D
## TRF-IMPORTO(2)          0000102400+
## TRF-CONTO(3)            5425005
## TRF-DA   (3)            D
## TRF-IMPORTO(3)          0000100000+
## TRF-CONTO(4)            5815005
## TRF-DA   (4)            A
## TRF-IMPORTO(4)          0000100000+
## TRF-CONTO(5)            5205150
## TRF-DA   (5)            A
## TRF-IMPORTO(5)          0000002000+
TRF-NUM-DOC-PAG-PROF (6 car. + sezionale ) 00000100
## TRF-DATA-DOC-PAG-PROF 01012019
## TRF-RIT-ACC 00000020000+
## TRF-CONTO-RIT-ACC 1820190


















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 86
Record 3 Banca a effetti

## TRF-DITTA                01064
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALBERGHINI UGO
## TRF-IND                  VIA CALANDONE 10
## TRF-CAP                  60019
## TRF-CITTA                SENIGALLIA
## TRF-PROV                 AN
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               10           --/--> Alberghini10Mario
## TRF-CAUSALE              027
TRF-CAU-DES              Accredito in banca
## TRF-DATA-REGISTRAZIONE 01012019
## TRF-DATA-DOC             01012019
## TRF-NDOC                 1
## TRF-SERIE                0
## TRF-CAU-PAGAM 27
TRF-CAU-DES-PAGAM Accredito in banca
## TRF-CONTO(1)            2405001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          0000102400+
## TRF-CONTO(2)            1505005
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          0000102400+
TRF-NUM-DOC-PAG-PROF (6 car. + sezionale ) 00000100
## TRF-DATA-DOC-PAG-PROF 01012019


























PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 87

## CONTABILIZZAZIONE SU PRIMA NOTA PREVISIONALE

GIRO CONTO  CASSA a BANCA

Il controllo per l’esportazione su previsionale viene fatto sul campo TRF-PREV-TIPOMOV.
Se TRF-PREV-TIPOMOV = 1 / 2 / 3 viene generata la PN previsionale.
In questa modalità è possibile contabilizzare solo movimenti non iva.

Codice ditta in contabilita' MULTI      1
## Conto Cassa                                              2415005
## Conto Banca                                              2405564
## Causale                                                     100


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              100
## TRF-CAU-DES              GIRO CONTO
TRF-CAU-AGG Descrizione causale aggiuntiva
TRF-CAU-AGG-1 Descrizione aggiuntiva 1
TRF-CAU-AGG-2 Descrizione aggiuntiva 2
## TRF-DATA-REGISTRAZIONE 30032019
## TRF-DATA-DOC             30032019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CONTO(1)            2415005
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000024000+
## TRF-CONTO(2)            2405564
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000024000+
## TRF-PREV-TIPOMOV 1
## TRF-PREV-RATRIS X
## TRF-PREV-DTCOMP-INI 20190101
## TRF-PREV-DTCOMP-FIN 20191231
## TRF-PREV-FLAG-CONT



























PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 88

## REGISTRAZIONE COSTI SU CONTABILITA’ SEMPLIFICATA


Codice ditta in contabilita' MULTI              1
## Conto Costo                                              4015564
## Importo                                                      1000
Causale                                                     401  SALARI ( Tipo Reg =  A  Caus.Iva = 0 )

Il numero massimo di costi rilevabili è di 8, corrispondente al num. contropartite costi/ricavi
Memorizzabili in TRF-CONTO-RIC(nn).


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              401
## TRF-CAU-DES              SALARI
## TRF-DATA-REGISTRAZIONE 30032019
## TRF-IMPONIB(1)            00000001000+
## TRF-CONTO-RIC(1)            4015564





## FATTURA DI ACQUISTO CON RITENUTA DI ACCONTO

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              011
TRF-CAU-DES              Fattura Acquisto
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 89
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
record 1
## TRF1-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             1
## TRF-RITA-TIPO 1
## TRF-RITA-IMPON 00000100000+
## TRF-RITA-ALIQ 2000
## TRF-RITA-IMPRA 00000020000+
## TRF-RITA-PRONS 1500




## REGISTRAZIONE RITENUTA DI ACCONTO IN ARCHIVIO RITENUTE SENZA LA
## REGISTRAZIONE CONTABILE

Il record di tipo ZERO deve essere compilato con i dati del cliente e gli estremi del
documento ( Numero e Data ).
Il record di tipo 1 va compilato con i dati della ritenuta.
In questo modo vengono importati solo i dati della ritenuta, ma non i dati contabili.





## PAGAMENTO FATTURA CON RITENUTA

Codice ditta in contabilita' MULTI          1

## Causale 10
Importo pagato 1200
Importo ritenuta 200
N.Documento 115
## Sezionale 0
## Conto Cassa 2415005
## Conto Erario C/ritenute 1805085

L’importo del pagamento della fattura con ritenuta viene letto dalla riga del fornitore (conto
## 9999998).
Se nell’archivio ritenute viene trovato un documento con Numero e Data corrispondenti a
quelli presenti in TRAF2000 e non pagato e con importo fattura = importo del pagamento,
viene riportato in ritenuta il mese/anno di pagamento.

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-COD-CLIFOR 25
TRF-RASO                 Rossi Mario
TRF-IND                  Via Verdi 1
## TRF-CAP                  00100




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 90
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-DATA-REGISTRAZIONE 15092019
## TRF-DATA-DOC             10082019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              010
TRF-CAU-DES-PAGAM              Pagamento fattura con ritenuta
TRF-CONTO(1)            9999998 (indica il fornitore di cui sopra)
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000120000+
## TRF-CONTO(2)            2415005
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000100000+
## TRF-CONTO(3)            4805085
## TRF-DA   (3)            A
## TRF-IMPORTO(3)          00000020000+





## REGISTRAZIONE VERSAMENTO RITENUTA

Codice ditta in contabilita' MULTI            1

## Causale 23
Importo pagato 200
N.Documento 115
## Sezionale 0
## Conto 1 1111111
## Conto 2 2222222

Il versamento viene rilevato in archivio ritenute se c’è corrispondenza tra TRAF2000 e
archivio ritenute relativamente a :
codice ditta / codice anagrafica fornitore / numero documento / data documento /
TRF-RITA-IMPAG = importo ritenuta /   mese pagamento su ritenute <> 0 /
data versamento su ritenute = 0 / importo versato su ritenute = 0


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-COD-CLIFOR 25
TRF-RASO                 Rossi Mario
TRF-IND                  Via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 91
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-DATA-REGISTRAZIONE 15092019
## TRF-DATA-DOC             10082019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAU-PAGAM              023
TRF-CAU-DES-PAGAM              Versamento ritenuta
## TRF-CONTO(1)            1111111
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000020000+
## TRF-CONTO(2)            2222222
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000020000+
record 1
## TRF1-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             1
## TRF-RITA-DTVERS 15092019
## TRF-RITA-IMPAG 20000
## TRF-RITA-TPAG 3
## TRF-RITA-ABI 11111
## TRF-RITA-CAB 22222





## REGISTRAZIONE COMPENSI AMMINISTRATORE ( CAUSALE 29 )

Codice ditta in contabilita' MULTI            1

## Causale 29
Compenso lordo 1000
N.Documento 115
## Sezionale 0
Conto pagamento 2415005
Conto debiti prest. Fornitore (dati anagrafici in testa)
Conto costo prestazioni 6805661
Erario c/ritenute 4805085



## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-COD-CLIFOR 25 (se inesistente non mettere codice)
TRF-RASO                 Rossi Mario
TRF-IND                  Via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 92
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-DATA-REGISTRAZIONE 15122019
## TRF-DATA-DOC             15122019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-CAUSALE              029
TRF-CAU-DES              Compensi amministratori
## TRF-CONTO(1)            6805661
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000100000+
## TRF-CONTO(2)            9999998
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000100000+
## TRF-CONTO(3)            4805085
## TRF-DA   (3)            A
## TRF-IMPORTO(3)          00000020000+
## TRF-CONTO(4)            9999998
## TRF-DA   (4)            D
## TRF-IMPORTO(4)          00000100000+
## TRF-CONTO(5)            2415005
## TRF-DA   (5)            A
## TRF-IMPORTO(5)          00000080000+
record 1
## TRF1-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             1
## TRF-RITA-TIPO 1
## TRF-RITA-IMPON 100000
## TRF-RITA-ALIQ 2000
## TRF-RITA-IMPRA 20000
## TRF-RITA-PRONS 1500
## TRF-RITA-MESE 122019
## TRF-RITA-CAUS 1
## TRF-RITA-TRIB 1
## TRF-RITA-DTVERS 20122019
## TRF-RITA-IMPAG 20000
## TRF-RITA-TPAG 3
## TRF-RITA-ABI 11111
## TRF-RITA-CAB 22222
## TRF-RITA-TOTDOC 00000120000+






















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 93


## FATTURA DI ACQUISTO INTRA

Il record va compilato come la fattura di acquisto, tranne il codice causale che dovrà essere
uguale a 19.
Va messo anche il record di tipo 1 compilato come sotto per la registrazione dell’autofattura.


## TRF1-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             1
## TRF-NUM-AUTOFATT
12345  (numero autofattura)
## TRF-SERIE-AUTOFATT
00       (numero sezionale autofattura)
TRF-COD-VAL                EUR     (codice valuta)
TRF-TOTVAL                Importo in valuta





## FATTURA INTRA CON PIU’ DI 20 ELEMENTI BENI/SERVIZI

Va compilato il record di tipo ZERO con i dati della fattura.
A seguire vanno messi i record di tipo 1 necessari, con compilati i campi relativi all’intra.






## FATTURA DI ACQUISTO SAN MARINO

Il record va compilato come la fattura di acquisto, tranne il codice causale che dovrà essere
uguale a 17.
Va messo anche il record di tipo 1 compilato come sotto per la registrazione dell’autofattura.


## TRF1-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             1
## TRF-NUM-AUTOFATT
12345  (numero autofattura)
## TRF-SERIE-AUTOFATT
00       (numero sezionale autofattura)
TRF-COD-VAL                EUR     (codice valuta)
TRF-TOTVAL                Importo in valuta



## FATTURA DI VENDITA EDITORIA

Codice ditta in contabilita' MULTI      1  ( flag editoria attivato)
Fattura: nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Causale: 344 Fattura Vendita per Editoria ( flag editoria attivato)
## % Forfait: 70

Le sequenze dei conti di ricavo vanno rispettate.





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 94
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              344
TRF-CAU-DES              Fattura Vendita Editoria
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         CONTO IVA VENDITE
## TRF-IMP-RIC(1)           00000006000+
## TRF-CONTO-RIC(2)         CONTO COSTO IVA EDITORIA
TRF-IMP-RIC(2)           00000006000-   ( segno negativo)
## TRF-PERC-FORF(1) 070




## FATTURA DI ACQUISTO/VENDITA CON PIU’ DI 24 CONTROPARTITE
## COSTO/RICAVO

Per poter gestire questo caso dovremo distribuire i dati su più records, non essendo
sufficienti i 24 elementi a disposizione.
Sarà quindi necessario mettere = “SI” il flag 24 contropartite in tabella MULTI e valorizzare
all’interno del record il campo TRF-80-SEGUENTE con “S” e con “U” nell’ultimo record
della catena.

Seguono 2 esempi :
1 )  con 30 contropartite
2 )  con 15 contropartite e intervalli date per risconti.

Nel secondo esempio ci limitiamo a 10 contropartite per registrazione, dato che la tabella
delle date per risconti è di 10 elementi. Pertanto andremo a mettere un massimo di 10
elementi di contropartita per record.




## FATTURA DI VENDITA CON  PIU’ DI 24 CONTROPARTITE RICAVI

ESEMPIO con 30 contropartite

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Impostare a “S” il flag Utilizza 24 contropartite costo/ricavo.

## Record 1




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 95
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO(1)            5805801
## TRF-IMPORTO(1)          00000013000+
## TRF-CONTO(2)            5805601
## TRF-IMPORTO(2)          00000003000+
## TRF-CONTO(3)            5805602
## TRF-IMPORTO(3)          00000003000+
## TRF-CONTO(4)            5805603
## TRF-IMPORTO(4)          00000003000+
## TRF-CONTO(5)            5805604
## TRF-IMPORTO(5)          00000003000+
## TRF-CONTO(6)            5805605
## TRF-IMPORTO(6)          00000003000+
## TRF-CONTO(7)            5805606
## TRF-IMPORTO(7)          00000003000+
## TRF-CONTO(8)            5805607
## TRF-IMPORTO(8)          00000003000+
## TRF-CONTO(9)            5805608
## TRF-IMPORTO(9)          00000003000+
## TRF-CONTO(10)            5805609
## TRF-IMPORTO(10)          00000003000+
## TRF-CONTO(11)            5805610
## TRF-IMPORTO(11)          00000003000+
## TRF-CONTO(12)            5805611
## TRF-IMPORTO(12)          00000003000+
## TRF-CONTO(13)            5805612
## TRF-IMPORTO(13)          00000003000+
## TRF-CONTO(14)            5805613
## TRF-IMPORTO(14)          00000003000+




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 96
## TRF-CONTO(15)            5805614
## TRF-IMPORTO(15)          00000003000+
## TRF-CONTO(16)            5805615
## TRF-IMPORTO(16)          00000003000+
## TRF-CONTO(17)            5805616
## TRF-IMPORTO(17)          00000003000+
## TRF-CONTO(18)            5805617
## TRF-IMPORTO(18)          00000003000+
## TRF-CONTO(19)            5805618
## TRF-IMPORTO(19)          00000003000+
## TRF-CONTO(20)            5805619
## TRF-IMPORTO(20)          00000003000+
## TRF-CONTO(21)            5805620
## TRF-IMPORTO(21)          00000003000+
## TRF-CONTO(22)            5805621
## TRF-IMPORTO(22)          00000003000+
## TRF-CONTO(23)            5805622
## TRF-IMPORTO(23)          00000003000+
## TRF-CONTO(24)            5805623
## TRF-IMPORTO(24)          00000003000+
## TRF-80-SEGUENTE S
## Record 2
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-TOT-FATT             00000120000+
## TRF-CONTO(1)            5805624
## TRF-IMPORTO(1)          00000003000+
## TRF-CONTO(2)            5805625
## TRF-IMPORTO(2)          00000003000+
## TRF-CONTO(3)            5805626
## TRF-IMPORTO(3)          00000003000+
## TRF-CONTO(4)            5805627
## TRF-IMPORTO(4)          00000003000+
## TRF-CONTO(5)            5805628




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 97
## TRF-IMPORTO(5)          00000003000+
## TRF-CONTO(6)            5805629
## TRF-IMPORTO(6)          00000003000+
## TRF-CONTO(7)            5805630
## TRF-IMPORTO(7)          00000003000+
## TRF-80-SEGUENTE U

## FATTURA DI VENDITA CON  PIU’ DI 8 CONTROPARTITE RICAVI E DATE
## RISCONTI

Esempio con 15 contropartite

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Impostare a “S” il flag Utilizza 24 contropartite costo/ricavo.

## Record 1
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
TRF-CONTO(1)            9999999 (indica il cliente di cui sopra)
## TRF-IMPORTO(1)          00000100000+
## TRF-CONTO(2)            5805601
## TRF-IMPORTO(2)          00000013000+
## TRF-CONTO(3)            5805602
## TRF-IMPORTO(3)          00000003000+
## TRF-CONTO(4)            5805603
## TRF-IMPORTO(4)          00000003000+




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 98
## TRF-CONTO(5)            5805604
## TRF-IMPORTO(5)          00000003000+
## TRF-CONTO(6)            5805605
## TRF-IMPORTO(6)          00000003000+
## TRF-CONTO(7)            5805606
## TRF-IMPORTO(7)          00000003000+
## TRF-CONTO(8)            5805607
## TRF-IMPORTO(8)          00000003000+
## TRF-CONTO(9)            5805608
## TRF-IMPORTO(9)          00000003000+
## TRF-CONTO(10)            5805609
## TRF-IMPORTO(10)          00000003000+
## TRF-RIFER-TAB(1) 2
## TRF-IND-RIGA(1) 1
## TRF-DT-INI(1) 15012019
## TRF-DT-FIN(1) 15012019
## TRF-RIFER-TAB(2) 2
## TRF-IND-RIGA(2) 2
## TRF-DT-INI(2) 15012019
## TRF-DT-FIN(2) 15012019
## TRF-RIFER-TAB(3) 2
## TRF-IND-RIGA(3) 3
## TRF-DT-INI(3) 15012019
## TRF-DT-FIN(3) 15012019
## TRF-RIFER-TAB(4) 2
## TRF-IND-RIGA(4) 4
## TRF-DT-INI(4) 15012019
## TRF-DT-FIN(4) 15012019
## TRF-RIFER-TAB(5) 2
## TRF-IND-RIGA(5) 5
## TRF-DT-INI(5) 15012019
## TRF-DT-FIN(5) 15012019
## TRF-RIFER-TAB(6) 2
## TRF-IND-RIGA(6) 6
## TRF-DT-INI(6) 15012019
## TRF-DT-FIN(6) 15012019
## TRF-RIFER-TAB(7) 2
## TRF-IND-RIGA(7) 7
## TRF-DT-INI(7) 15012019
## TRF-DT-FIN(7) 15012019
## TRF-RIFER-TAB(8) 2
## TRF-IND-RIGA(8) 8
## TRF-DT-INI(8) 15012019
## TRF-DT-FIN(8) 15012019
## TRF-RIFER-TAB(9) 2
## TRF-IND-RIGA(9) 9
## TRF-DT-INI(9) 15012019
## TRF-DT-FIN(9) 15012019
## TRF-RIFER-TAB(10) 2




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 99
## TRF-IND-RIGA(10) 10
## TRF-DT-INI(10) 15012019
## TRF-DT-FIN(10) 15012019
TRF-TIPO-MOV-RISCONTI “R” oppure “C”
## TRF-80-SEGUENTE S



## Record 2
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-TOT-FATT             00000120000+
## TRF-CONTO(1)            5805610
## TRF-IMPORTO(1)          00000003000+
## TRF-CONTO(2)            5805611
## TRF-IMPORTO(2)          00000003000+
## TRF-CONTO(3)            5805612
## TRF-IMPORTO(3)          00000003000+
## TRF-CONTO(4)            5805613
## TRF-IMPORTO(4)          00000003000+
## TRF-CONTO(5)            5805614
## TRF-IMPORTO(5)          00000003000+
## TRF-CONTO(6)            5805615
## TRF-IMPORTO(6)          00000003000+
## TRF-RIFER-TAB(1) 2
## TRF-IND-RIGA(1) 1
## TRF-DT-INI(1) 15012019
## TRF-DT-FIN(1) 15012019
## TRF-RIFER-TAB(2) 2
## TRF-IND-RIGA(2) 2
## TRF-DT-INI(2) 15012019
## TRF-DT-FIN(2) 15012019
## TRF-RIFER-TAB(3) 2
## TRF-IND-RIGA(3) 3




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 100
## TRF-DT-INI(3) 15012019
## TRF-DT-FIN(3) 15012019
## TRF-RIFER-TAB(4) 2
## TRF-IND-RIGA(4) 4
## TRF-DT-INI(4) 15012019
## TRF-DT-FIN(4) 15012019
## TRF-RIFER-TAB(5) 2
## TRF-IND-RIGA(5) 5
## TRF-DT-INI(5) 15012019
## TRF-DT-FIN(5) 15012019
## TRF-80-SEGUENTE U




## FATTURA DI ACQUISTO VENTILAZIONE

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              011
TRF-CAU-DES              Fattura Acquisto
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           220
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+






PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 101

## CORRISPETTIVO SOSPESO ( VENTILAZIONE – FARMACIE )

Codice ditta in contabilita' MULTI      1
Corrispettivo del 15.01.2019  di euro 1000,00


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              020
TRF-CAU-DES              Corrispettivo
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 0
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           900
## TRF-TOT-FATT             00000100000+
TRF-CONTO-RIC(1)         Conto 1 ( Es: CREDITO VS/ASL)
TRF-IMP-RIC(1)           00000100000+  (segno DARE )
TRF-CONTO-RIC(2)         Conto 2
TRF-IMP-RIC(2)           00000100000-   (segno negativo AVERE)


## INCASSO CORRISPETTIVO SOSPESO ( VENTILAZIONE – FARMACIE )

Codice ditta in contabilita' MULTI      1
Corrispettivo del 15.01.2019  di euro 1000,00
Conto CASSA   10001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-CAUSALE              008
TRF-CAU-DES              Pagam.Fatt.Sosp.
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 0
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           900
## TRF-TOT-FATT             00000100000+
## TRF-CAU-PAGAM 008
TRF-CAU-DES-PAGAM Pagam.Fatt.Sosp.
## TRF-CONTO(1)            10001
## TRF-DA   (1)            D
## TRF-IMPORTO(1)          00000100000+
## TRF-CONTO(2)            CONTO 1 (CREDITI DA STORNARE)
## TRF-DA   (2)            A
## TRF-IMPORTO(2)          00000020000+
## TRF-CAUS-ORI          020




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 102

## FATTURA DI VENDITA A CLIENTE CON COINTESTATARI

Codice ditta in contabilita' MULTI      1
## Cliente      Cliente Privato

Fattura nr 115 del 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001

Record 1  - Dati fattura. L’unica particolarità è il campo TRF-SOLO-CLIFOR = P privato.
Record 2 e 3 – Contengono i dati anagrafici dei cointestatari e devono seguire il record
relativo alla fattura.
Sono records dei cointestatari e sono uniti da  TRF-80-SEGUENTE = S fino al penultimo
cointestatario e U nell’ultimo.
Il campo TRF-SOLO-CLIFOR = I (cointestatari).


## Record 1
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Cliente Privato
## TRF-PF                   S
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-SOLO-CLIFOR P

## Record 2
## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ALESSI FABIO
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 AABBCC1211A1215H
## TRF-PF                   N
## TRF-SOLO-CLIFOR I
## TRF-80-SEGUENTE S








PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 103
## Record 3
## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-RASO                 ROSSI MARCO
## TRF-IND                  VIA LEOPARDI 20
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 ZZXXCC1211A1215H
## TRF-PF                   S
## TRF-SOLO-CLIFOR I
## TRF-80-SEGUENTE U




## GESTIONE DEL CAMBIO DI PARTITA IVA / P.IVA ESTERA / CODICE FISCALE

Il caso viene illustrato con 2 fatture di vendita con il cambio di partita iva del cliente nella
seconda fattura.

Nel caso in cui la partita iva inizialmente sia zero e poi venga valorizzata con la seconda
fattura, è sufficiente non indicare la partita iva nella prima fattura.

I casi di cambiamento di partita iva estera e codice fiscale sono analoghi a questo.

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Partita iva    03241231042

Fattura nr 115 del 15.01.2008  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001

## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 104
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+

Fattura nr 116 del 16.01.2008  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001

Partita iva vecchia   03241231042
Partita iva nuova     00324421321
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA                 00324421321
(indicare nuova partita iva)
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              001
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-PIVA-VECCHIA 03241231042
(indicare vecchia partita iva da
utilizzare per cercare l’anagrafica)
## TRF-USA-PIVA-VECCHIA S
## TRF-STORICO S
(se si desidera aggiornare
l’anagrafica)
## TRF-STORICO-DATA 20080116
(se si desidera aggiornare
l’anagrafica)

















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 105

## COMUNICAZIONE ART. 21

## FATTURA DI ACQUISTO CON CONTRATTI

Codice ditta in contabilita' MULTI      1
## Fornitore      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2011  di euro 1200,00  (1000,00 + 200,00 iva)
Costi da registrare su conto 15/0001

Le fatture vanno compilate come le normali fatture e quanto detto per le fatture
di acquisto vale anche per quelle di vendita.
Vanno valorizzati i campi TRF-ART21-ANAG e TRF-ART21-IVA.
TRF-ART21-ANAG sarà riportato in anagrafica nel campo “Comunicazione art.21” e può
assumere i valori S (Si), N (No), C (Contratto), P (Contratto periodico)
TRF-ART21-IVA sarà riportato nel movimento iva nel campo “Art. 21” e può
assumere i valori S (Si), N (No), C (Contratto), P (Contratto periodico)

Nel caso dei valori C o P al record di tipo zero della fattura di acquisto /vendita dovrà
seguire il record di tipo 5 con i dati del contratto


## RECORD TIPO 0
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              011
TRF-CAU-DES              Fattura Acquisto
## TRF-DATA-REGISTRAZIONE 15012011
## TRF-DATA-DOC             15012011
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-ART21-ANAG P
## TRF-ART21-IVA P





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 106
## RECORD TIPO 5
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             5
## TRF-CONTRATTO(1)                CONTRATTO 1
## TRF-CONTRATTO(2)                CONTRATTO 2





## COMUNICAZIONE ART. 21

## NOTA CREDITO FORNITORE CON CONTRATTI CON RIFERIMENTO A FATTURA

## RECORD TIPO 0
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              012
TRF-CAU-DES              Nota credito da fornitore
## TRF-DATA-REGISTRAZIONE 16012011
## TRF-DATA-DOC             16012011
## TRF-NDOC                 116
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-ART21-ANAG P
## TRF-ART21-IVA P
## TRF-RIF-FATTURA S

## RECORD TIPO 5
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             5
## TRF-CONTRATTO(1)                CONTRATTO 1
## TRF-CONTRATTO(2)                CONTRATTO 2
## TRF-RIF-FATTURA-NDOC 00011500
## TRF-RIF-FATTURA-DDOC 15012011





PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 107

## COMUNICAZIONE ART. 21

## NOTA CREDITO FORNITORE SENZA CONTRATTI CON RIFERIMENTO A FATTURA

Nel caso di assenza di contratti, ma con riferimento a documento precedente andrà
valorizzato il campo TRF-RIF-FATTURA con S e sempre compilato il record di tipo 5 con
i dati di riferimento a documento.


## RECORD TIPO 0
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
## TRF-CAUSALE              012
TRF-CAU-DES              Nota credito da fornitore
## TRF-DATA-REGISTRAZIONE 16012011
## TRF-DATA-DOC             16012011
## TRF-NDOC                 116
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-ART21-ANAG S
## TRF-ART21-IVA S
## TRF-RIF-FATTURA S

## RECORD TIPO 5
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             5
## TRF-RIF-FATTURA-NDOC 00011500
## TRF-RIF-FATTURA-DDOC 15012011
















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 108

## COMUNICAZIONE ART.  21

## CORRISPETTIVI CON DATI ANAGRAFICHE DA IMPORTARE

Codice ditta in contabilita' MULTI      1

Data 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001
Il conto cassa viene letto dalla tabella Personalizzazione Conti.

Vengono riportate 2 anagrafiche con i dati dei corrispettivi

I dati delle anagrafiche vanno riportate nei record di tipo ZERO valorizzando il campo
TRF-COD-CLIFOR con un codice identificativo dell’anagrafica e con il campo
## TRF-SOLO-CLIFOR = “A”.
Dato che non si può conoscere il codice di anagrafica utilizzeremo dei codici fittizi per
ricercare il codice scritto in  TRF-COD-CLIFOR con il codice scritto in TRF-A21CO-ANAG(n).

La sequenza sarà:
Record tipo 0
Record tipo 0 con TRF-SOLO-CLIFOR = “A”        Tanti record quante sono le anagrafiche
Record tipo 5


## RECORD TIPO 0
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-COD-CLIFOR NON METTO NIENTE
## TRF-CAUSALE              020
TRF-CAU-DES              Corrispettivi
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-ART21-IVA S

## RECORD TIPO 0 CON DATI  ANAGRAFICI ANAGRAFICA 1
## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-COD-CLIFOR 1 (codice interno identificativo anagrafica che verrà specificato
nel campo TRF-A21CO-ANAG(n) )
## TRF-RASO                 ROSSI BRUNO
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 109
## TRF-PROV                 RM
## TRF-PIVA 00000000000
## TRF-COFI                 RSSBRN65P23I508D
## TRF-PF                   N
## TRF-SOLO-CLIFOR A


## RECORD TIPO 0 CON DATI  ANAGRAFICI ANAGRAFICA 2
## TRF-DITTA                1
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-COD-CLIFOR 2 (codice interno identificativo anagrafica che verrà specificato
nel campo TRF-A21CO-ANAG(n) )
## TRF-RASO                 PARALCI MARIO
TRF-IND                  via Gialli 10
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-PIVA 00000000000
## TRF-COFI                 PRLMRR54T21R685Q
## TRF-PF                   N
## TRF-SOLO-CLIFOR A


## RECORD TIPO 5
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             5
TRF-A21CO-ANAG(1) 1 (deve corrispondere al
TRF-COD-CLIFOR di una delle
anagrafiche specificate sopra)
## TRF-A21CO-COFI(1)
## RSSBRN65P23I508D
## TRF-A21CO-DATA(1) 20042011
## TRF-A21CO-FLAG(1) S
## TRF-A21CO-IMPORTO(1) 10000
TRF-A21CO-NDOC(1) 123/00 (necessario per Dati Fattura)
TRF-A21CO-ANAG(2) 2 (deve corrispondere al
TRF-COD-CLIFOR di una delle
anagrafiche specificate sopra)
## TRF-A21CO-COFI(2)
## PRLMRR54T21R685Q
## TRF-A21CO-DATA(2) 20042011
## TRF-A21CO-FLAG(2) F
## TRF-A21CO-IMPORTO(2) 20000
TRF-A21CO-NDOC(2) 456/00 (necessario per Dati Fattura)
















PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 110

## COMUNICAZIONE ART.  21

## CORRISPETTIVI  SE SI CONOSCE SOLO IL CODICE FISCALE DELL’ANAGRAFICA

Codice ditta in contabilita' MULTI      1

Data 15.01.2019  di euro 1200,00  (1000,00 + 200,00 iva)
Ricavi da registrare su conto 15/0001
Il conto cassa viene letto dalla tabella Personalizzazione Conti.

La sequenza sarà:
Record tipo 0
Record tipo 5


## RECORD TIPO 0
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
## TRF-COD-CLIFOR NON METTO NIENTE
## TRF-CAUSALE              020
TRF-CAU-DES              Corrispettivi
## TRF-DATA-REGISTRAZIONE 15012019
## TRF-DATA-DOC             15012019
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
## TRF-ALIQ   (1)           20
## TRF-IMPOSTA(1)           00000020000+
## TRF-TOT-FATT             00000120000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
## TRF-ART21-IVA S


## RECORD TIPO 5
## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             5
## TRF-A21CO-COFI(1)
## SABGFR21T23Y609F
## TRF-A21CO-DATA(1) 20042011
## TRF-A21CO-FLAG(1) S
## TRF-A21CO-IMPORTO(1) 10000










PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 111

## COMUNICAZIONE ART.  21

## BENI USATI

Per i beni usati non vanno utilizzati i campi TRF-ART21-IVA e TRF-RIF-FATTURA,
ma TRFBU-ART21 e TRFBU-RIF-FATTURA che sono presenti nel record di tipo 3.
Valgono le stesse regole dei casi normali.
Se TRFBU-ART21 = C o P e la causale non è tipo corrispettivi, oppure TRFBU-ART21 = S e
la  causale è corrispettivi, oppure se TRFBU-RIF-FATTURA = S   il record dei beni dovrà
essere seguito dal record con i dati art. 21 (tipo 5).

Nel caso dei corrispettivi la sequenza sarà:
Record tipo 0
Record tipo 3
Record tipo 0 con TRF-SOLO-CLIFOR = “A”        Tanti record quante sono le anagrafiche
Record tipo 5







## PRORATA

Se PRORATA = “S” il conto iva andrà riportato come una normale contropartita,
specificando quindi codice di conto e importo che sarà la differenza tra iva e la parte
indetraibile  dell’iva.
Per i conti di costo, gli importi dovranno essere aumentati in modo proporzionale
dell’importo dell’iva stornata dal conto iva.











































PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 112
## TESSERA SANITARIA

Con la tessera sanitaria sono stati introdotti i seguenti campi nel record opzionale di tipo 5.
Sono necessari per la definizione delle spese mediche per le registrazioni dei corrispettivi e delle fatture.
E’ una tabella di dati che va ad integrare, ed è in parallelo, all’altra tabella corrispettivi compresa trai campi
TRF-A21CO-ANAG e TRF-A21CO-FLAG-OPPOS.


## Corrispettivi


La tabella corrispettivi ha 50 elementi e va dal campo TRF-A21CO-TIPO a
TRF-FLAG-SPESA. Le posizioni sono quelle relative al primo elemento.
TRF-A21CO-TIPO 1 AN 6724 R=Ricevuta F=Fattura  per Comunicazione polivalente
TRF-A21CO-TIPO-SPESA 2 AN 6725 Tipo spesa per tessera sanitaria
TK=Ticket
FC=Farmaco, omeopatia, dispositivi medici CE
FV=Farmaco per uso veterinario
AD=Acquisto o affitto di dispositivo medico CE
AS=Ecg, spirometria, holter pressorio,  glicemia
SR=Specialistica ambulatoriale esclusa estetica
CT=Cure termali
PI=Protesica e integrativa
IC=Chirurgia estetica ambulatoriale e ospedale
AA=Altre spese
## TRF-A21CO-FLAG-SPESA 1 AN 6727
Flag spesa per tessera sanitaria
1=per tipo TK ticket di pronto soccorso
2=per tipo SR visita in intramoenia

Per i corrispettivi vanno pertanto integrati tali campi a quelli già presenti nell’altra tabella.
Per le anagrafiche dei clienti vale la regola descritta nell’esempio:
## CORRISPETTIVI CON DATI ANAGRAFICHE DA IMPORTARE

Per le fatture, valorizzare il campo TRF-SPESE-MEDICHE con “S” , presente nel record di tipo ZERO, e accodare al record
principale il record di tipo 5 con valorizzati i seguenti campi delle tabelle corrispettivi:
## TRF-A21CO-IMP
## TRF-A21CO-TIPO-SPESA
## TRF-A21CO-FLAG-SPESA


## SPESE FUNEBRI

Con le spese funebri sono stati introdotti i seguenti campi nel record opzionale di tipo 7.
Sono necessari per la definizione dei codici fiscali dei defunti, per le registrazioni dei corrispettivi e delle fatture.
E’ una tabella di dati che va ad integrare, ed è in parallelo, all’altra tabella corrispettivi compresa trai campi
TRF-A21CO-ANAG e TRF-A21CO-FLAG-OPPOS.

Codici fiscali defunti

La tabella contratti ha 50 elementi e comprende il campo
TRF-A21CO-COFI-DEF. La posizione è relativa al primo elemento.
TRF-A21CO-COFI-DEF 16 AN 8 Tipologia

Per i corrispettivi vanno pertanto integrati tali campi a quelli già presenti nell’altra tabella.

Per le fatture, valorizzare il campo TRF-SPESE-MEDICHE con “S” , presente nel record di tipo ZERO, e accodare al record
principale il record di tipo 5 con valorizzati i seguenti campi delle tabelle corrispettivi:
## TRF-A21CO-IMP

Nel record di tipo 5 valorizzare il campo TRF-SPESE-FUNEBRI con “S” e accodare il record di tipo 7 con i codici fiscali dei
defunti.


## SPESE MEDICHE + SPESE FUNEBRI

E’ l’unione delle due tipologie di spesa e vanno pertanto valorizzati i campi delle spese mediche e funebri.




PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 113

## FATTURA DI VENDITA OSS / IOSS

Codice ditta in contabilita' MULTI      1
## Cliente      Rossi Mario
via Verdi 1      00100 Roma
Codice fiscale RSSMRA50A10A271R
Partita iva    03241231042

Fattura nr 115 del 15.01.2021  di euro 1220,00  (1000,00 + 220,00 iva)
Ricavi da registrare su conto 15/0001

Codice causale: indicare una causale di vendita con il campo OSS / IOSS valorizzato
Aliquota iva: indicare una aliquota non imponibile con il campo “Codice iva soggetto a regime OSS / IOSS” attivo
Imposta: il campo imposta va valorizzato tenendo conto dell’aliquota OSS indicata in TRF-ALIQ-OSS(nn)
Aliquota ridotta: nel caso di aliquota ridotta valorizzare il campo TRF-CK-RCHARGE(nn) con S


## TRF-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             0
TRF-RASO                 Rossi Mario
TRF-IND                  via Verdi 1
## TRF-CAP                  00100
## TRF-CITTA                ROMA
## TRF-PROV                 RM
## TRF-COFI                 RSSMRA50A10A271R
## TRF-PIVA                 03241231042
## TRF-PF                   S
TRF-DIVIDE               06            --/--> Rossi6Mario
TRF-CAUSALE              Codice causale
TRF-CAU-DES              Fatt.di vendita
## TRF-DATA-REGISTRAZIONE 15012021
## TRF-DATA-DOC             15012021
## TRF-NDOC                 115
## TRF-SERIE                0
## TRF-IMPONIB(1)           00000100000+
TRF-ALIQ   (1)           Codice aliquota
## TRF-IMPOSTA(1)           00000022000+
## TRF-TOT-FATT             00000122000+
## TRF-CONTO-RIC(1)         150001
## TRF-IMP-RIC(1)           00000100000+
Record tipo 1
## TRF-ALIQ-OSS(1) 22
TRF-CK-RCHARGE(1) S   Da mettere nel caso di aliquota ridotta













PROCEDURA DI TRASFERIMENTO PRIMA NOTA DA ALTRI APPLICATIVI                          Pagina 114

## PAGAMENTO PER AGGIORNAMENTO E/C BASE

Codice ditta in contabilita' MULTI      1

Se si vuole agganciare, a livello di estratto conto base, un pagamento alla relativa fattura, va scritto il record del
pagamento seguito da un record di tipo 1 in cui venga valorizzato il numero di documento originale
TRF-XNUM-DOC-ORI o TRF-XNUM-DOC-ORI-20.


## TRF1-DITTA                00001
## TRF-VERSIONE 3
## TRF-TARC             1
TRF-XNUM-DOC-ORI                    Num.Doc. Originale
TRF-XNUM-DOC-ORI-20                    Num.Doc. Originale da 20 caratteri
