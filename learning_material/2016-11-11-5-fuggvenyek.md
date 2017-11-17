---
id: 278
title: 5. Függvények
date: 2016-11-11T13:19:03+00:00
author: dawars
layout: post
guid: http://dawars.me/?p=278
permalink: /index.php/2016/11/11/5-fuggvenyek/
---
Ezen az órán a függvényekkel, a rekurzióval és a debuggolással ismerkedtünk meg. Az órán írt kódok kommentekkel kiegészítve (és a 4. házi megoldása) a szokásos GitHub repository-ban érhető el:
  
<a href="https://github.com/Dawars/Trefort-Android-Szakkor/blob/master/src/Szakkor5Ora.java" target="_blank">https://github.com/Dawars/Trefort-Android-Szakkor/blob/master/src/Szakkor5Ora.java</a>

## Függvények

Ha egy kódrészletet többször szeretnénk használni, akkor érdemes függvényt használni. így a kód csak egy helyen fordul elő, könnyebb módosítani és átláthatóbb.

Vegyük a következő példát: Javaban nincsen külön művelet a hatványozásra, de mi sokszor szeretnénk ezt használni.

<!--more-->

Először írjunk egy kódrészletet, ami kiszámolja a $latex base^n $ eredményét.

> A hatványozás az a művelet, ahol a _base-_t _n_-szer összeszorozzuk. Pl: $latex 2^3 = 2\*2\*2 = 8$

[code lang=&#8221;java&#8221;]
  
double base = 2;
  
int n = 3;
  
//&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-
  
double result = 1; // eredmény
  
for(int i = 0; i < n; i++)
      
result = result * base;
  
//&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-
  
System.out.println(result); // Kiírja, hogy 8
  
[/code]

(Remélem) látjuk, hogy ezt felesleges és fárasztó lenne minden alkalommal kiírni.

Most ezt alakítsuk át egy egyszerű függvénnyé:

[code lang=&#8221;java&#8221;]
  
// a static kulcsszóról következő órán beszélünk, csak ezért raktam zárójelbe
  
/**
   
* Hatványozó függvény
   
*
   
* double base &#8211; hatványalap
   
* double n &#8211; hatványkitevő, hányszor szorozzuk össze a base-t
   
* @return base ^ n
   
*/
  
(static) double hatvanyozas(double base, int n){
      
// kód
      
double result = 1; // eredmény
      
for(int i = 0; i < n; i++)
          
result = result * base;
      
return result; // a függvény eredménye, a visszatérési érték
  
}
  
[/code]

Először vizsgáljuk meg az első sort. A _double_ a visszatérési érték típusa, vagyis megmondja, hogy mit várunk a hatványozástól (egy valós számot várunk).

> Nem minden esetben van visszatérési érték, ilyenkor ide _void_-ot írunk

Utána a függvény neve, _hatvanyozas_. Ezzel tudjuk később meghívni a függvényt.

Utána a zárójelekben vesszővel elválasztva fel vannak sorolva a paraméterek(bemenetek). Az eredeti kódban ezek konkrét számok voltak, amiket a _base_ és az _n_ változókban tároltunk.

Végül a {  } -ek közötti _code block_-ban található a kód, ami minden függvényhívásban lefut, majd a végén az eredmény a return sorba kerül <span style="text-decoration: underline;">visszaadásra</span>.

Vegyük észre, hogy a függvénybe nem adtuk meg a _konkrét értékeket_, amit ki akarunk számolni, csak egy eljárást, hogy a _base_ és _n_ paraméterekből hogyan kapjuk meg az eredményt.

Most úgy tudjuk kiszámolni a $latex 2^3$-at, hogy meghívjuk a <span style="text-decoration: underline;">hatvanyozas</span> nevű függvényünket:

[code lang=&#8221;java&#8221;]
  
double eredmeny = hatvanyozas(2, 3);
  
[/code]

Ilyenkor a program &#8220;átugrik&#8221; a függvényünk elejére és sorban átadja a függvénynek a megadott paramétereket. Tehát a (2, 3)-at a (base, n)-nek. Majd a függvént végén (vagy a _return_ hívásakor) a program visszaugrik a hívás helyére és **visszatér** a return-ba írt értékkel.

A futtatás után ha kiiratjuk az _eredmeny_ változó értékét megkapjuk a 8-at. Próbálkozzunk a bemeneti értékek módosításával (2, 3) és figyeljük az eredményt.

Nézzük a teljes kódot:

[code lang=&#8221;java&#8221;]
  
/**
   
* Hatványozó függvény
   
*
   
* @param base &#8211; hatványalap
   
* @param n &#8211; hatványkitevő
   
\* @return base ^ n = base \* base &#8230; * base
   
*/
  
static double hatvany(double base, int n) {
      
double res = 1;
      
for (int i = 0; i < n; i++)
          
res = res * base;
      
return res;
  
}

// a main függvényben:
  
double eredmeny = hatvanyozas(2, 3);
  
System.out.println(eredmeny);
  
[/code]

## Rekurzió

Azt nevezzük rekurziónak, ha egy függvény meghívja önmagát. Erre az órán a faktoriáis példát vettük, a következő animáció a nagyon jól elmagyarázza a működését.

![Recursion Animated Gif](https://blog.penjee.com/wp-content/uploads/2015/04/top-5-programming-animated-gifs_recursion-animted-gif.gif)

A Fibonacci sorozat tagjai is így számolhatók (a kód Pythonbanvan írva, a feladat, hogy írjátok át Java-ba 🙂 )

![](https://blog.penjee.com/wp-content/uploads/2015/06/fibonacci-recursion-demonstration-animation-python.gif)

A következő órán a Class-okat (ossztály) fogjuk venni, ami az Objektum Orientált Programozás (OOP) alapja. Addig is mindenkinek jó szünetet kívánok!