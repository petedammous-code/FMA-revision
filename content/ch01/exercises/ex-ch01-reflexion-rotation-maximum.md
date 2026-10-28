---
id: ex-ch01-reflexion-rotation-maximum
type: exercise
chapters: [1]
title: Bornes sur des arcs du cercle et valeur au centre
source: "Classique (astuces de réflexion et de rotation pour le principe du maximum, énoncés usuels des recueils d'exercices) ; question 4 adaptée"
difficulty: 3
time: 40
tools: [ch01-maximum-sur-le-bord, ch01-principe-maximum, ch01-estimees-cauchy, ch01-serie-entiere-holomorphe, ch01-stabilite-operations, ch01-def-multiplicite-zero]
---
## Énoncé

On note $D=D(0,1)$, $\bar D=\bar D(0,1)$ et $C(0,1)$ le cercle unité. Dans tout l'exercice, $f:\bar D\to\C$ est une fonction **continue sur $\bar D$ et holomorphe sur $D$**.

1. Montrer que la fonction $f^*:z\mapsto\overline{f(\bar z)}$ est continue sur $\bar D$ et holomorphe sur $D$.
2. Soit $M>0$. On suppose que $|f(z)|\le1$ pour tout $z\in C(0,1)$ tel que $\Im z\ge0$, et $|f(z)|\le M$ pour tout $z\in C(0,1)$ tel que $\Im z\le0$. Montrer que $|f(0)|\le\sqrt M$.
3. Soit $n\ge2$ un entier. Pour $k\in\{0,\dots,n-1\}$, on note $A_k=\{e^{i\theta} : \frac{2k\pi}{n}\le\theta\le\frac{2(k+1)\pi}{n}\}$, et on suppose que $|f|\le M_k$ sur $A_k$, où $M_0,\dots,M_{n-1}$ sont des réels positifs. Montrer que
$$
|f(0)|\le\bigl(M_0M_1\cdots M_{n-1}\bigr)^{1/n} .
$$
4. On suppose que $f$ est nulle sur un arc $A=\{e^{i\theta} : \alpha\le\theta\le\beta\}$, avec $\alpha<\beta$ réels. Montrer que $f(0)=0$, puis que $f$ est identiquement nulle sur $\bar D$.

## Indices

### Indice 1
On veut majorer $|f(0)|$ par des informations sur le **bord** : c'est le principe du maximum sur $\bar D$. Mais les bornes de l'énoncé sont différentes selon les arcs : fabriquer une fonction auxiliaire holomorphe, produit de « copies » de $f$, dont le module sur **tout** le cercle est contrôlé.

### Indice 2
Question 2 : $g=f\cdot f^*$ ; si $z\in C(0,1)$, les points $z$ et $\bar z$ sont l'un dans le demi-cercle supérieur, l'autre dans le demi-cercle inférieur. Question 3 : $g(z)=\prod_{k=0}^{n-1}f(\omega^kz)$ avec $\omega=e^{2i\pi/n}$ ; la rotation $z\mapsto\omega z$ envoie l'arc $A_j$ sur l'arc suivant.

### Indice 3
Question 4 : se ramener à un arc $A_0$ par une rotation, et choisir $n$ assez grand. Ensuite, si $f\not\equiv0$, factoriser $f(z)=z^mh(z)$ avec $h(0)\ne0$ et appliquer ce qui précède à $h$.

## Corrigé

Rappel utilisé partout : $D$ est un ouvert connexe borné, d'adhérence $\bar D$ et de bord $\partial D=C(0,1)$. Pour $u$ continue sur $\bar D$ et holomorphe sur $D$, le principe du maximum sur le bord ([[ch01-maximum-sur-le-bord]]) donne $|u(0)|\le\sup_{\bar D}|u|=\sup_{C(0,1)}|u|$.

**1.** La conjugaison $z\mapsto\bar z$ envoie $\bar D$ dans $\bar D$ et est continue, donc $f^*$ est continue sur $\bar D$. Sur $D$, $f$ est holomorphe et $\rho(0)=1$, donc ([[ch01-estimees-cauchy]]) $f(w)=\sum_{n\ge0}a_nw^n$ pour tout $w\in D$, série de rayon $\ge1$. Pour $z\in D$, on a $\bar z\in D$ et
$$
f^*(z)=\overline{\sum_{n\ge0}a_n\bar z^{\,n}}=\sum_{n\ge0}\bar a_n z^n ,
$$
série entière de même rayon que $\sum a_nw^n$ (car $|\bar a_n|=|a_n|$), donc $\ge1$. Par [[ch01-serie-entiere-holomorphe]], $f^*$ est holomorphe sur $D$.

**2.** Posons $g=f\cdot f^*$. Elle est continue sur $\bar D$ et holomorphe sur $D$ (produit, [[ch01-stabilite-operations]] et question 1). Soit $z\in C(0,1)$ ; alors $\bar z\in C(0,1)$. Si $\Im z\ge0$, on a $\Im\bar z\le0$, donc $|g(z)|=|f(z)|\,|f(\bar z)|\le1\cdot M$ ; si $\Im z\le0$, $\Im\bar z\ge0$ et $|g(z)|\le M\cdot1$. Donc $\sup_{C(0,1)}|g|\le M$, et par le rappel
$$
|f(0)|^2=f(0)\overline{f(0)}=|g(0)|\le M,\qquad\text{donc}\qquad |f(0)|\le\sqrt M .
$$

**3.** Soit $\omega=e^{2i\pi/n}$ et $g(z)=\prod_{k=0}^{n-1}f(\omega^kz)$. Chaque $z\mapsto f(\omega^kz)$ est continue sur $\bar D$ et holomorphe sur $D$ (composée de $f$ avec la rotation $z\mapsto\omega^kz$, qui envoie $D$ dans $D$ et $\bar D$ dans $\bar D$) ; donc $g$ l'est aussi.

Soit $z=e^{i\theta}\in C(0,1)$ ; quitte à changer $\theta$ de $2\pi$, il existe $j\in\{0,\dots,n-1\}$ avec $\theta\in[\frac{2j\pi}{n},\frac{2(j+1)\pi}{n}]$, i.e. $z\in A_j$. Alors $\omega^kz=e^{i(\theta+2k\pi/n)}$ avec $\theta+\frac{2k\pi}{n}\in[\frac{2(j+k)\pi}{n},\frac{2(j+k+1)\pi}{n}]$, donc $\omega^kz\in A_{\ell}$ où $\ell$ est le reste de $j+k$ modulo $n$ (les arcs sont définis modulo $2\pi$). Quand $k$ parcourt $\{0,\dots,n-1\}$, ce reste parcourt $\{0,\dots,n-1\}$ une fois exactement. Donc
$$
|g(z)|=\prod_{k=0}^{n-1}|f(\omega^kz)|\le\prod_{\ell=0}^{n-1}M_\ell .
$$
Par le rappel, $|f(0)|^n=|g(0)|\le M_0\cdots M_{n-1}$, d'où l'inégalité en prenant la racine $n$-ième (fonction croissante sur $[0,+\infty[$).

**4.** *$f(0)=0$.* La fonction $f_1(z)=f(e^{i\alpha}z)$ est continue sur $\bar D$, holomorphe sur $D$, et nulle sur l'arc $\{e^{i\theta} : 0\le\theta\le\beta-\alpha\}$. Choisissons $n\ge2$ tel que $\frac{2\pi}{n}\le\beta-\alpha$ : alors $A_0$ est contenu dans cet arc, donc on peut prendre $M_0=0$, et $M_k=\max_{C(0,1)}|f_1|$ pour $k\ge1$ (fini par continuité sur le compact $C(0,1)$). La question 3 donne $|f(0)|=|f_1(0)|\le0$.

*$f\equiv0$.* Supposons $f$ non identiquement nulle sur $D$. Comme $D$ est connexe et $f(0)=0$, le zéro $0$ a une multiplicité $m\ge1$ ([[ch01-def-multiplicite-zero]]) : avec $f(z)=\sum_{p\ge m}a_pz^p$ sur $D$ et $a_m=f^{(m)}(0)/m!\ne0$. Posons $h(z)=f(z)/z^m$ pour $z\in\bar D\setminus\{0\}$ et $h(0)=a_m$. Sur $D$, $h(z)=\sum_{p\ge m}a_pz^{p-m}$, série de rayon $\ge1$, donc $h$ est holomorphe sur $D$ ([[ch01-serie-entiere-holomorphe]]) ; elle est continue sur $\bar D\setminus\{0\}$ comme quotient de fonctions continues, et en $0$ car holomorphe sur $D$. Enfin, pour $z\in A$, $|z|=1$ et $h(z)=f(z)/z^m=0$. La première partie appliquée à $h$ donne $h(0)=0$, c'est-à-dire $a_m=0$ : contradiction. Donc $f=0$ sur $D$, puis sur $\bar D$ par continuité (tout point de $C(0,1)$ est limite de points de $D$, par exemple $(1-\frac1k)z$).

## Pièges et variantes

* Le principe du maximum sur $\bar D$ demande que l'auxiliaire soit **continue sur $\bar D$** et holomorphe sur $D$ : c'est pour cela que l'on vérifie la continuité de $f^*$ et des $f(\omega^k\cdot)$ jusqu'au bord.
* $z\mapsto f(\bar z)$ n'est **pas** holomorphe en général (elle vérifie $\partial/\partial z=0$, pas $\partial/\partial\bar z=0$) ; c'est la double conjugaison $\overline{f(\bar z)}$ qui l'est. Le module, lui, est inchangé : $|f^*(z)|=|f(\bar z)|$, et c'est tout ce qui sert.
* La question 2 est aussi le cas $n=2$ de la question 3, avec $g(z)=f(z)f(-z)$ (rotation d'angle $\pi$) au lieu de la réflexion.
* Pour la question 4, l'hypothèse « nulle sur un arc **non réduit à un point** » est indispensable : $f(z)=z-1$ est nulle en un point du cercle sans être nulle. De même, la question 2 ne dit rien si l'on a seulement $|f(0)|$ et une borne sur un demi-cercle : il faut une borne (même grande) sur **tout** le cercle.
* Variante : une fonction holomorphe sur $D$, continue sur $D\cup A$ et nulle sur l'arc $A$, est identiquement nulle (principe de réflexion de Schwarz, [[ch02-schwarz-reflexion]], après une transformation de Cayley qui envoie le cercle sur une droite) ; la preuve ci-dessus ne s'applique pas telle quelle car elle utilise la continuité sur tout $\bar D$.
