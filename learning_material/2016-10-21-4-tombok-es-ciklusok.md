---
id: 256
title: 4. Tömbök és ciklusok gyakorlása
date: 2016-10-21T22:50:25+00:00
author: dawars
layout: post
guid: https://dawars.me/?p=256
permalink: /index.php/2016/10/21/4-tombok-es-ciklusok/
---
## Stringek

A String egy olyan <span style="text-decoration: underline;">referencia</span> típus, ami szöveget tud tárolni. A HelloWorld programonál már találkoztunk ezzel, ugyanis minden, ami idézőjelek közé van írva egy String.

A Stringeken leggyakrabban a az _összefűzés_ (concatenate) műveletet használjuk, amit &#8220;összead&#8221; vagyis egymás után rak két Stringet.

[code lang=&#8221;java&#8221;]
  
String text = "Hello";
  
System.out.println(text + " World!");
  
[/code]

Egy másik fontos metódus a _length()_, ami megadja a String hosszát. Ezen kívül még van sok más is, de egyelőre ezekkel nem foglalkozunk.

<!--more-->

[code lang=&#8221;java&#8221;]
  
String text = "Hello";
  
System.out.println(text.length());
  
[/code]

## Tömbök

A tömböket úgy érdemes feldogni, mint egy változó (egy névvel azonosítható memóriaterület), ami egyszerre több értéket tárol. Az egyes értékekre a változó nevével és sorszámával tudunk hivatkozni.

Elősször nézzük meg, hogyan tudunk tömböket létrehozni:

[code lang=&#8221;java&#8221;]
  
// int tömb, értékek megadásával
  
int[] fibonacci = new int[]{ 1, 1, 2, 3, 5, 8 };
  
[/code]

[code lang=&#8221;java&#8221;]
  
// mérettel megadás, 6 hosszú
  
int[] fibonacci = new int[6];
  
fibonacci[0] = 1;
  
fibonacci[1] = 1;
  
fibonacci[2] = 2;
  
fibonacci[3] = 3;
  
fibonacci[4] = 5;
  
fibonacci[5] = 8; // az 5 az utolsó index, mert 0-tól kezdjük a számozást [/code]

Egy tömb hosszát a tombNev.length -el tudjuk lekérdezni.

## While és do while

Alapvetően két fontos ciklus van a Javaban, a _for_ és a _while_ ciklus.

A while az  egyszerűbb, amíg teljesül a <span style="text-decoration: underline;">feltétel</span>, addig végrehajtja az <span style="text-decoration: underline;">utasításokat</span>:

[code lang=&#8221;java&#8221;]
  
while (feltétel) {
      
Utasítás1;
      
…
      
UtasításN;
  
}
  
[/code]

Ezt folyamdiagrammal így lehetne szemléltetni:
  
[<img class="aligncenter" src="//dawars.me/wp-content/uploads/2016/10/4_while_loop.png" alt="" width="355" height="319" />](https://dawars.me/wp-content/uploads/2016/10/4_while_loop.png)

![Demonstration of how a while loop works in Python](https://blog.penjee.com/wp-content/uploads/2015/04/top-5-programming-animated-gifs_demonstration-of-while-loop-animation_logo.gif)

Ennek egy változata a _hátultesztelős_ ciklus, ami végrehajtja az utasításokat, és amíg teljesül a feltétel, addig újra és újra végrehajtja.

[code lang=&#8221;java&#8221;]
  
do {
      
Utasítás1;
      
…
      
UtasításN;
  
} while (feltétel);
  
[/code]

[<img class="aligncenter " src="//dawars.me/wp-content/uploads/2016/10/4_do_while_loop.png" alt="" width="355" height="335" />](https://dawars.me/wp-content/uploads/2016/10/4_do_while_loop.png)

## For ciklus

A for ciklus egy kicsit komplikáltabb első ránézésre, de valójában csak egy egyszerűsítés.

A for utáni zárójelben három dolog van:

  * (Amit az elején kell megcsinálni;
  * Ami a feltétel, hogy folytassa a futtatást;
  * Amit minden futás után meg kell csinálni)

[code lang=&#8221;java&#8221;]
  
for (inicializálás; feltétel; inkrementálás) {
      
Utasítás1;
      
…
      
UtasításN;
  
}
  
[/code]

[<img class="aligncenter " src="//dawars.me/wp-content/uploads/2016/10/4_for_loop.png" alt="" width="355" height="349" />](https://dawars.me/wp-content/uploads/2016/10/4_for_loop.png)

Gyakran előfordul, hogy végig szeretnénk menni egy tömb összes elemén és műveleteket végezni rajtuk (ezért is használunk ilyenkor tömböt).

Erre a _for_ ciklus a legkézenfekvőbb, írjuk ki a tömb összes elemét:

[code lang=&#8221;java&#8221;]
  
for (int i = 0; i < tombNev.length; i++) {
      
System.out.println(tombNev[i]);
  
}
  
[/code]

## Foreach ciklus

A foreach ciklus egy még tovább egyszerűsített ciklus, egy tömböt vagy kollekciót (hamarosan&#8230;) tudunk vele bejárni, de a sima for ciklussal szemben elveszítjük az (init, feltétel, inkrement) hármas módosításának lehetőségét.

[code lang=&#8221;java&#8221;]
  
// for (valtozótípus név : tömbnév)
  
for (int szam : fibonacci) {
      
System.out.println(szam);
  
}
  
[/code]

## Break, continue

Ha egy cikluson belül kiadjuk a <span style="text-decoration: underline;">break;</span> utasítást, akkor a program kilép a _legbelső_ ciklusból, és onnan folytatja tovább.

[code lang=&#8221;java&#8221;]
  
for (int i = 0; i < 10; i++) {
      
if (i == 5) break;
      
System.out.print(i + ",");
  
}
  
// Output: 0, 1, 2, 3, 4,
  
[/code]

Ha a <span style="text-decoration: underline;">continue;</span> utasítást használjuk, akkor a program kihagyja a ciklus hátralévő részét és a következő ciklusfutás elején <span style="text-decoration: underline;">folytatja</span>.

[code lang=&#8221;java&#8221;]
  
for (int i = 0; i < 10; i++) {
      
if (i % 2 == 0) continue;
      
System.out.print(i + ",");
  
}
  
// Output: 1, 3, 5, 7, 9
  
[/code]

# Feladatok

## Mintamegoldás

Közzéteszek egy mintamegoldást kommentekkel, a fenti leírás alapján már mindenkinek értenie kéne.

Aki még nem próbálta, de most már menne neki, az még próbálkozhat: <a href="https://github.com/Dawars/Trefort-Android-Szakkor/blob/master/src/Szakkor3Feladat.java" target="_blank">https://github.com/Dawars/Trefort-Android-Szakkor/blob/master/src/Szakkor3Feladat.java</a>

És a részletes megoldás: <a href="https://github.com/Dawars/Trefort-Android-Szakkor/blob/master/src/Szakkor3Megoldas.java" target="_blank">https://github.com/Dawars/Trefort-Android-Szakkor/blob/master/src/Szakkor3Megoldas.java</a>

## Új Gyakorlófeladat

Ennek a feladatnak az a célja, hogy kipróbálhasd és elmélyítsed az eddig tanultakat. A függvényeket megírtam, csak ki kell egészíteni: <a href="https://github.com/Dawars/Trefort-Android-Szakkor/blob/master/src/Szakkor4Feladat.java" target="_blank">link</a>

  1.  Tömb elemeinek átlaga
  2. Ki kell számolni az $latex  \LARGE 1+\frac{1}{2^2}+\frac{1}{3^2}+&#8230;+\frac{1}{n^2}$ összeget, addig amit ay utolsó tag nagyobb, mint _eps._
  3. Írj egy _for_ ciklust while ciklussal (írja ki egy tömb összes elemét)
  4. **Szorgalmi:** Fizetés a lehető legkevesebb érmével 
      * Adott egy _m_ szám (az összeg, amit ki akarunk fizetni) és egy _c_ tömb, hogy milyen pénzérmék állnak a rendelkezésünkre.
      * A feladat, egy olyan program írása, ami tartalmaz egy int felvalt(int m, int[] c, int[] db) függvényt, ami visszaadja a minimális érmeszámot, amivel fel lehet váltani az összeget, valamint a db tömbben azt, hogy miből mennyi kell.
      * A _c_ érték szerint csökkenően tartalmazza az érméket.
      * A jó megoldás tetszőleges ország pénzeire jó eredményt kell, hogy adjon
      * Például: m = 42, c = [25 20 5 1] esetén a megoldás n = 4, db = [0 2 0 2]

Ha elkészültetek a feladatokkal, küldjétek el nekem emailben (dawars00@gmail.com).