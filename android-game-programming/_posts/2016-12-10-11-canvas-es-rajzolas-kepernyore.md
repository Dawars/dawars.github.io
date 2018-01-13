---
title: 11. Canvas és rajzolás a képernyőre
date: 2016-12-10T17:47:51+00:00
author: dawars
hidden: true
---
A mai szakkörön a képernyőre rajzolással ismerkedtünk meg.

<div style="width: 235px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/12/canvas_draw.png"><img class="" src="//dawars.me/wp-content/uploads/2016/12/canvas_draw.png" alt="Rajzolás Canvasra" width="225" height="400" /></a>
  
  <p class="wp-caption-text">
    Rajzolás Canvasra
  </p>
</div>

<!--more-->

## View

Ahhoz, hogy a képernyőre rajzolhassunk, szükségünk lesz egy saját View classra (mint pl a Button vagy a TextView). A _SurfaceView_ biztosítja nekünk a hozzáférést a View Canvas objektumához, amit aztán az Android megjelenít az Activity-ben a View helyén. Ezért ezt az osztályt kiegészítjük (extend) és csinálunk egy MyView class-t.

<div style="width: 331px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/12/canvas_layout.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/12/canvas_layout.png" alt="Layout" width="321" height="539" /></a>
  
  <p class="wp-caption-text">
    Layout
  </p>
</div>

A View-t hozzá kell adni az Activity-hez, ezt vagy a layout xml file-ban, vagy dinamikusan a Java file-ban a _setContentView_ után lehet.

## Canvas

Az Android keretrendszer biztosít nekünk függvényeket és classokat a rajzolás leegyszerűsítéséhez. A Canvas class a háttérben egy Bitmapet kezel, ami tárolja a képernyőre rajzolt pixelek RGB értékeit.

Egy canvas objektumon meghívhatunk különböző _draw_ függvényeket, pl drawCircle, drawRectangle, drawLine, drawColor.

<div style="width: 1157px" class="wp-caption aligncenter">
  <a href="https://dawars.me/wp-content/uploads/2016/12/view_coord_sys.png"><img class="size-medium" src="//dawars.me/wp-content/uploads/2016/12/view_coord_sys.png" alt="Koordináta rendszer" width="1147" height="564" /></a>
  
  <p class="wp-caption-text">
    Koordináta rendszer
  </p>
</div>

A rajzoláshoz minden esetben szükség van egy Paint objektumra, ami az alakzat színét, a vonal vastagságát, szöveget szabályozza. Színt a Color segédosztállyal tudunk csinálni, ahol vagy egy előre definiált színt használunk (_Color.BLACK_) vagy RGB kóddal sajátot adunk meg (_Color.rgb(128, 255, 0)_).

## Sin and Cos

A szakkörön a beépített draw függvényeken kívül saját kör és spirál rajzoló függvényt írtunk szögvügvények segítségével. Ez a rész nehezebb és nem kötelező, de _<span style="text-decoration: underline;"><strong>ajánlott</strong></span>_.

A számításokhoz a Java beépített Math könyvtárát használtuk:

  * Math.sin(radians) &#8211; kiszámolja a _radians_ szögszinuszát
  * Math.cos(radians) &#8211; kiszámolja a _radians_ szög koszinuszát
  * Math.toRadians(degree) &#8211; a _degree_ szöget átváltja radianba. (2π = 360°)

<div style="width: 648px" class="wp-caption aligncenter">
  <a href="http://image.slidesharecdn.com/unitcircle-141229184649-conversion-gate02/95/unit-circle-intro-to-circular-functions-11-638.jpg?cb=1474668360"><img class="size-medium" src="//image.slidesharecdn.com/unitcircle-141229184649-conversion-gate02/95/unit-circle-intro-to-circular-functions-11-638.jpg?cb=1474668360" alt="Egységkör" width="638" height="479" /></a>
  
  <p class="wp-caption-text">
    Egységkör
  </p>
</div>

A kód megtalálható a szokásos helyen:

<a href="https://github.com/Dawars/Trefort-Android-Szakkor/tree/master/Szakkor11" target="_blank">https://github.com/Dawars/Trefort-Android-Szakkor/tree/master/Szakkor11</a>