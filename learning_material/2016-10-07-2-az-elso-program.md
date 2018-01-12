---
id: 210
title: 2. Az első program
date: 2016-10-07T13:06:28+00:00
author: dawars
layout: post
guid: https://dawars.me/?p=210
permalink: /index.php/2016/10/07/2-az-elso-program/
---
Mint általában, most is az első programunk a Hello World lesz, ami csak annyit csinál, hogy kiírja a Parancssorba, hogy &#8220;Hello World&#8221;.

> Ajánlott szövegszerkesztő: Notepad++ vagy Atom

Hozzunk létre egy Hello.java nevű file-t és írjuk bele az alábbi kódot (Fontos, hogy a file neve és a class utan levő név egyezzen):

[code lang=&#8221;java&#8221;]
  
// Hello.java
  
class Hello {
      
public static void main(String[] args){
          
System.out.println("Hello world");
      
}
  
}
  
[/code]

Én az asztalra mentettem, ezért nekem az elérési út _C:\Users\dawar\Desktop_.

Nyissuk meg a Command Prompt-ot és navigáljunk a Hello.java mappájába

> Navigálni a cd (Change Directory) paranccsal tudunk
> 
> _cd mappa_nev_

Ahhoz, hogy ezt lefordítsuk a gép által futtatható nyelvre, meg kell adnunk a javac-nek (Java Compiler) a file-t:

&#8220;javac Hello.java&#8221;

Ha nem ír hibát, akkor létrejött egy Hello.class file, amit már tudunk futtatni a JavaVM-ben a

&#8220;java Hello&#8221; commanddal.

Látjuk, hogy kiírta, hogy Hello world, sikerült az első programunk!

<!--nextpage-->

Ez elég bonyolult egy program futtatásához és csak bonyolodni fog ezért mostantól az IntelliJ nevű IDE programot fogjuk használni, amin az Android Studio alapszik.

Nyissuk is meg tehát az IntelliJ-t és hozzunk létre egy új projectet HelloWorld néven.

Ha nincs alapból beállítva a JDK, akkor először hozzá kell adnun. Ehhez kattintsatok a New->JDK és keressétek meg a Java telepítési helyét, pl: _C:\Program Files\Java\jdk1.8.0_*_

<div style="width: 834px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/10/2_select_jdk.png"><img src="//dawars.me/wp-content/uploads/2016/10/2_select_jdk.png" width="824" height="773" /></a>
  
  <p class="wp-caption-text">
    Ez lehet, hogy sokkal egyszerűbben néz ki
  </p>
</div>

Next, next, majd ha mindent jól csináltál, egy ilyen ablak jelenik:

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_empty_project.png" alt="" width="680" height="401" />](https://dawars.me/wp-content/uploads/2016/10/2_empty_project.png)

Az _src_ mappában hozzunk létre egy új class-t, mint ahogy az előző oldalon csináltuk:

[code lang=&#8221;java&#8221;]
  
// Hello.java
  
class Hello {
      
public static void main(String[] args){
          
System.out.println("Hello world");
      
}
  
}
  
[/code]

(Egyszerűen elindítani úgy lehet, hogy a class névre jobb gombbal rákattintotok és a Run ClassName.java opcióra mentek )

A project futtatásához be kell állítani, hogy ezt a Hello.java-t indítsa, mert később több file/class-ból fog állni a játékunk.

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_edit_conf.png" alt="" width="420" height="239" />](https://dawars.me/wp-content/uploads/2016/10/2_edit_conf.png)

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_add_application.png" alt="" width="1096" height="706" />](https://dawars.me/wp-content/uploads/2016/10/2_add_application.png)

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_run_conf.png" alt="" width="1084" height="693" />](https://dawars.me/wp-content/uploads/2016/10/2_run_conf.png)

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_run.png" alt="" width="281" height="56" />](https://dawars.me/wp-content/uploads/2016/10/2_run.png)

Most már lefuttathatjuk a programot a _Futtatás _melletti zöld play gombbal. Ekkor megjelnik alul egy aablakban a program kimenete:

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_hello_output.png" alt="" width="905" height="356" />](https://dawars.me/wp-content/uploads/2016/10/2_hello_output.png)

<!--nextpage-->

Ebben a részen fel fogjuk tölteni a kódunkat GitHubra, hogy bárhonnan elérhető legyen.

Ha még nem regisztráltál, akkor ez egy jó alkalom: <a href="https://github.com/join" target="_blank" rel="noopener">https://github.com/join</a>

Ellenőrizzük, hogy az IntelliJ felismeri-e a <a href="https://dawars.me/1-telepites/3" target="_blank" rel="noopener">múlt órán</a> telepített Git-et, ugyanik ezt fogjuk hasznalni a kód feltöltésére.

Ehhez menjünk a File>Settings>Version Control>Git és nézzük meg, hogy be van-e írva a _Path to Git executable_ mezőbe valami. Ha nincs, keressük meg gyorsan az elérési utat és a biztonság kedvéért nyomjuk meg a _Test _gombot.

Ha ez sikerült, zárjuk be a beálltásokat és keressük meg a menü sávban a VCS>Import into Version Control>Share Project on GitHub

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_share_github.png" alt="" width="1028" height="308" />](https://dawars.me/wp-content/uploads/2016/10/2_share_github.png)

Ez először kérni fogja a GitHub adatainkat, adjuk meg és ha sikerült belépni kattintsunk a Share gombra.

[<img class="aligncenter size-medium" src="//dawars.me/wp-content/uploads/2016/10/2_login_github.png" alt="" width="401" height="218" />](https://dawars.me/wp-content/uploads/2016/10/2_login_github.png)

Ha sikerült feltölteni, küldjétek el a linket nekem a _dawars00@gmail.com_ -ra.

[Senkinek nem sikerült]