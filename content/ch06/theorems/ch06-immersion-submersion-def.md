---
id: ch06-immersion-submersion-def
type: definition
chapter: 6
title: Immersion, submersion en un point ; rang d'une application
ref: Exercice VI.4.9 (non numéroté)
page: 125
importance: 2
depends: [ch05-differentielle-def, ch05-matrice-jacobienne]
tags: [immersion, submersion, rang, rang constant, matrice jacobienne, definition]
---
## Intuition

> 💡 La différentielle $df_a$ est la meilleure approximation linéaire de $f$ près de $a$ ([[ch05-differentielle-def]]). On classe alors $f$ en $a$ d'après ce que fait cette application linéaire : si $df_a$ ne « perd » aucune direction (injective), $f$ plonge localement un petit morceau de $\R^n$ dans $\R^m$ sans l'écraser : c'est une **immersion** (penser à une courbe régulière $t\mapsto\gamma(t)$ dans le plan, de vitesse non nulle). Si $df_a$ « atteint » toutes les directions (surjective), $f$ recouvre localement tout un voisinage du but : c'est une **submersion** (penser à $(x,y)\mapsto x$, ou à une fonction $f:\R^2\to\R$ de gradient non nul, dont les lignes de niveau sont de vraies courbes).

Entre les deux, le **rang** $\mathrm{rang}(df_a)=\dim\mathrm{Im}(df_a)$ mesure le nombre de directions « effectives ». Le [[ch06-theoreme-rang-constant|théorème du rang constant]] dira que si ce nombre ne varie pas près de $a$, alors $f$ **est** localement (après changements de coordonnées) l'application linéaire $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$.

Rappels : $f=(f_1,\dots,f_m)$ ; la **matrice jacobienne** de $f$ en $a$ est la matrice $m\times n$ des dérivées partielles $\big(\frac{\partial f_i}{\partial x_j}(a)\big)$, matrice de $df_a$ dans les bases canoniques ([[ch05-matrice-jacobienne]]).

## Énoncé

**Définition (poly, Exercice VI.4.9, p. 125 ; voir aussi Définition IX.1.1, p. 147).** Soit $f:U\to\R^m$ une application de classe $C^p$ ($p\ge1$) d'un ouvert $U$ de $\R^n$ dans $\R^m$, et soit $a\in U$.

* $f$ est une **immersion en $a$** si $df_a:\R^n\to\R^m$ est **injective** (ce qui impose $n\le m$).
* $f$ est une **submersion en $a$** si $df_a:\R^n\to\R^m$ est **surjective** (ce qui impose $n\ge m$).
* Le **rang de $f$ en $a$** est $\mathrm{rang}(df_a)=\dim df_a(\R^n)$, c'est-à-dire le rang de la matrice jacobienne $\big(\frac{\partial f_i}{\partial x_j}(a)\big)_{1\le i\le m,\ 1\le j\le n}$.
* $f$ est **de rang constant $r$ au voisinage de $a$** s'il existe un voisinage $V$ de $a$ dans $U$ tel que $\mathrm{rang}(df_x)=r$ pour tout $x\in V$.

On dit que $f$ est une immersion (resp. une submersion) si c'est une immersion (resp. une submersion) en tout point de $U$ (Définition IX.1.1).

Ainsi : immersion en $a$ $\iff$ $\mathrm{rang}(df_a)=n$ ; submersion en $a$ $\iff$ $\mathrm{rang}(df_a)=m$ (théorème du rang : $\dim\ker df_a+\mathrm{rang}(df_a)=n$).

**Propriété (semi-continuité inférieure du rang).** Si $f$ est de classe $C^1$ et $\mathrm{rang}(df_a)=r$, il existe un voisinage $V$ de $a$ tel que $\mathrm{rang}(df_x)\ge r$ pour tout $x\in V$. En particulier, l'ensemble des points où $f$ est une immersion (resp. une submersion) est **ouvert**, et une immersion (resp. submersion) en $a$ est de rang constant ($n$, resp. $m$) au voisinage de $a$.

*Preuve.* Le rang d'une matrice est la taille maximale d'un mineur non nul. Soit $\Delta(x)$ un mineur $r\times r$ de la jacobienne en $x$ tel que $\Delta(a)\ne0$. C'est un polynôme en les dérivées partielles $\frac{\partial f_i}{\partial x_j}(x)$, continues car $f$ est $C^1$ : donc $x\mapsto\Delta(x)$ est continue et $\Delta(x)\ne0$ sur un voisinage $V$ de $a$, où le rang est donc $\ge r$. Si $r$ est maximal ($r=n$ ou $r=m$), le rang, toujours $\le\min(n,m)$, vaut exactement $r$ sur $V$. $\square$

## Hypothèses

### H1 — $U$ ouvert, $f$ de classe $C^p$ avec $p\ge1$

**Rôle.** Pour parler de $df_a$, il faut $f$ différentiable en $a$ et $a$ intérieur au domaine. La classe $C^1$ (continuité de $x\mapsto df_x$) est ce qui rend le rang semi-continu et ce qui permet d'appliquer l'[[ch06-inversion-locale|inversion locale]] dans le théorème du rang constant. (La Définition IX.1.1 ne demande que « différentiable » pour définir immersion/submersion en un point ; les théorèmes, eux, exigent $C^1$.)

**Si on la retire.** Pour $f(x)=\frac x2+x^2\sin\frac1x$, $f(0)=0$, $f$ est dérivable sur $\R$ avec $f'(0)=\frac12\ne0$ : c'est une « immersion » et une « submersion » en $0$ au sens de la définition, mais $f'\big(\frac1{2k\pi}\big)=\frac12-1=-\frac12<0$ : le rang ($1$ en $0$) tombe à... il reste $1$ ici, mais $f$ n'est injective sur aucun voisinage de $0$ ($f'$ prend des valeurs $>0$ et $<0$ arbitrairement près de $0$), et aucune forme normale n'est possible. La notion « ponctuelle » n'a de bonnes propriétés que pour $f$ de classe $C^1$.

### H2 — Le rang constant est une condition sur un **voisinage**

**Rôle.** Pour $r$ intermédiaire ($r<\min(n,m)$), la semi-continuité ne donne que $\mathrm{rang}(df_x)\ge r$ près de $a$ ; « rang constant » est une **hypothèse supplémentaire** (et non une conséquence de $\mathrm{rang}(df_a)=r$).

**Si on la retire.** $f(x,y)=(x,xy)$ : $df_{(x,y)}=\begin{pmatrix}1&0\\y&x\end{pmatrix}$, de déterminant $x$. Le rang vaut $1$ en tout point de $\{x=0\}$ et $2$ ailleurs : en $0$, le rang est $1$ mais il n'est constant sur aucun voisinage.

## Exemples

* **Projection et injection canoniques.** $p:(x_1,\dots,x_n)\mapsto(x_1,\dots,x_m)$ ($n\ge m$) est une submersion en tout point ; $\iota:(x_1,\dots,x_n)\mapsto(x_1,\dots,x_n,0,\dots,0)\in\R^m$ ($n\le m$) est une immersion en tout point. Ce sont les modèles du [[ch06-theoreme-rang-constant]].

* **Le cercle, deux fois.** $\gamma(t)=(\cos t,\sin t)$, $\R\to\R^2$ : $d\gamma_t(h)=h(-\sin t,\cos t)$, injective car $(-\sin t,\cos t)\ne0$ : immersion en tout point (mais $\gamma$ n'est pas injective : être une immersion est une propriété **locale** de la différentielle). $f(x,y)=x^2+y^2$, $\R^2\to\R$ : $df_{(x,y)}(h,k)=2xh+2yk$, surjective sur $\R$ si et seulement si $(x,y)\ne(0,0)$ : submersion en tout point de $\R^2\setminus\{0\}$, pas en $0$ (rang $0$).

* **Rang constant non maximal.** $f(x,y)=\big(x+y,(x+y)^2\big)$ : $df_{(x,y)}=\begin{pmatrix}1&1\\2(x+y)&2(x+y)\end{pmatrix}$, de colonnes égales et non nulles : rang $1$ partout. Ni immersion ni submersion, mais de rang constant $1$ ; son image est la parabole $\{(u,u^2)\}$.

* **Rang non constant.** $f(x)=x^2$, $\R\to\R$ : rang $0$ en $0$, rang $1$ ailleurs. $f(x,y)=(x,xy)$ : voir H2.

## Pièges

* > ⚠️ Immersion $\ne$ injection, submersion $\ne$ surjection : ce sont des conditions sur la **différentielle** en un point, pas sur $f$. $\gamma(t)=(\cos t,\sin t)$ est une immersion non injective ; $x\mapsto x^3$ est une bijection de $\R$ qui n'est ni une immersion ni une submersion en $0$.
* Une immersion en $a$ impose $n\le m$, une submersion $n\ge m$ ; pour $n=m$, les deux notions coïncident avec « $df_a$ inversible » (cadre de l'inversion locale).
* Le rang est **semi-continu inférieurement** : il peut **sauter vers le haut** près de $a$, jamais vers le bas. Donc « rang maximal en $a$ » se propage à un voisinage, mais « rang $r$ en $a$ » ne dit rien de l'égalité au voisinage si $r$ n'est pas maximal.
* Point critique (Définition IX.1.3) : point où $f$ **n'est pas** une submersion. Une fonction réelle ($m=1$) est une submersion en $a$ si et seulement si $df_a\ne0$.
