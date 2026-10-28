---
id: ch02-meromorphes-operations
type: proposition
chapter: 2
title: Stabilité de $\mathcal M(\Omega)$ par combinaisons linéaires et produits ; inverse d'une fonction holomorphe
ref: Proposition II.4.5
page: 43
importance: 2
depends: [ch02-localement-fini-vs-isole-remarque, ch01-zeros-isoles, ch01-holomorphe-analytique, ch02-pole-meromorphe-def, ch02-localement-fini-caracterisations, ch01-def-multiplicite-zero, ch01-stabilite-operations, ch01-estimees-cauchy]
tags: [meromorphe, somme, produit, inverse, zeros isoles, pole, multiplicite]
---
## Intuition

> 💡 Les fonctions méromorphes ([[ch02-pole-meromorphe-def]]) forment une **algèbre** : on peut les additionner, les multiplier par des scalaires et entre elles sans sortir de $\mathcal M(\Omega)$. Mieux : l'**inverse** $1/f$ d'une fonction holomorphe non nulle est méromorphe, ses pôles étant exactement les zéros de $f$, avec la même multiplicité. Un zéro d'ordre $N$ de $f$ (où $f\sim a_0(z-z_0)^N$) devient un pôle d'ordre $N$ de $1/f$ (où $1/f\sim\frac1{a_0}(z-z_0)^{-N}$).

La raison pour la somme et le produit : réunir deux ensembles de pôles localement finis donne un ensemble localement fini, et une explosion « au plus polynomiale » reste au plus polynomiale par somme et produit. Pour l'inverse : les zéros d'une fonction holomorphe non identiquement nulle sur un **connexe** sont isolés ([[ch01-zeros-isoles]]), donc localement finis ([[ch02-localement-fini-caracterisations]]), et la factorisation $f=(z-z_0)^Nu$ avec $u(z_0)\ne0$ ([[ch01-def-multiplicite-zero]]) donne directement la condition (ii) de la définition d'un pôle.

Ce résultat est le premier pas vers « $\mathcal M(\Omega)$ est un corps » ([[ch02-meromorphes-corps]]) et sert partout où l'on forme $f'/f$ (principe de l'argument, [[ch02-principe-argument]]) ou $f/g$ (Rouché, [[ch02-rouche]]).

## Énoncé

**Proposition (poly, Proposition II.4.5, p. 43).** Si $f,g$ sont deux fonctions méromorphes sur $\Omega$ et si $\alpha,\beta\in\C$, alors les fonctions $\alpha f+\beta g$ et $fg$ sont elles aussi méromorphes sur $\Omega$.

Soit $f$ une fonction holomorphe non identiquement nulle sur un ouvert **connexe** $\Omega$ de $\C$. Alors $g:=\dfrac1f$ est méromorphe sur $\Omega$.

## Hypothèses

### H1 — $f,g\in\mathcal M(\Omega)$ (première partie)

**Rôle.** Fournit deux parties localement finies $P_f,P_g$ hors desquelles $f,g$ sont holomorphes, et, en chaque point de ces parties, un exposant $m$ rendant $(z-z_0)^mf$ (resp. $g$) bornée.

**Si on la retire.** Si $f$ possède une singularité essentielle ($f=e^{1/z}$ sur $\C^\times$, $g=0$), $f+g=f$ n'est pas méromorphe sur $\C$ : aucune puissance $z^me^{1/z}$ n'est bornée près de $0$ ($z=x>0$ : $x^me^{1/x}\to+\infty$).

### H2 — $\Omega$ connexe (deuxième partie)

**Rôle.** C'est l'hypothèse du principe des zéros isolés ([[ch01-zeros-isoles]]) : elle garantit que « $f$ non identiquement nulle » entraîne « $f$ non identiquement nulle au voisinage de chaque point », donc que les zéros sont isolés et que $1/f$ est défini hors d'un ensemble localement fini.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ (deux disques disjoints), $f=0$ sur $D(0,1)$ et $f=1$ sur $D(3,1)$ : $f$ est holomorphe sur $\Omega$ (localement constante), non identiquement nulle, mais $1/f$ n'est défini nulle part sur $D(0,1)$ ; l'ensemble des zéros $D(0,1)$ n'est pas localement fini. Honnêtement, la bonne hypothèse est « $f$ non identiquement nulle sur **chaque** composante connexe de $\Omega$ » ([[ch01-zeros-isoles-sans-connexite]]), et la conclusion subsiste alors.

### H3 — $f$ holomorphe (deuxième partie)

**Rôle.** La preuve utilise le développement en série entière de $f$ en un zéro ([[ch01-holomorphe-analytique]]) pour factoriser $f=(z-z_0)^Nu$, $u(z_0)\ne0$.

**Si on la retire.** Pour $f$ seulement continue, les zéros peuvent ne pas être isolés : $f(z)=|z|^2-1$ s'annule sur tout le cercle unité, et $1/f$ n'est holomorphe sur aucun voisinage épointé d'un point du cercle. Pour $f$ **méromorphe** non identiquement nulle, la conclusion reste vraie mais la preuve demande un argument supplémentaire aux pôles : c'est [[ch02-meromorphes-corps]].

### H4 — $f$ non identiquement nulle

**Rôle.** Sinon $1/f$ n'est défini nulle part.

**Si on la retire.** $f\equiv0$ : $1/f$ n'existe pas. Trivial mais à ne pas oublier quand on applique le résultat à une différence $f-g$.

## Idée de la preuve

Somme/produit : $P=P_f\cup P_g$ est localement fini ([[ch02-localement-fini-vs-isole-remarque]]) ; hors de $P$ tout est holomorphe ; en $z_0\in P$, $(z-z_0)^{\max(m_f,m_g)}(\alpha f+\beta g)$ et $(z-z_0)^{m_f+m_g}fg$ sont bornées. Inverse : les zéros $Z$ de $f$ sont isolés et fermés, donc localement finis ; en $z_0\in Z$, $f=(z-z_0)^Nu$ avec $u(z_0)\neq0$, donc $(z-z_0)^Ng=1/u$ est bornée et $|g|\to+\infty$.

## Preuve

**Première partie : combinaisons linéaires et produits.** Soient $P_f$ et $P_g$ des parties localement finies de $\Omega$ telles que $f$ (resp. $g$) soit holomorphe sur $\Omega\setminus P_f$ (resp. $\Omega\setminus P_g$) et vérifie la condition (ii) de la définition ([[ch02-pole-meromorphe-def]]) en chaque point de $P_f$ (resp. $P_g$). Posons $P:=P_f\cup P_g$.

*$P$ est localement fini dans $\Omega$* ([[ch02-localement-fini-vs-isole-remarque]]) : pour $a\in\Omega$, il existe des voisinages $V_1,V_2$ de $a$ avec $V_1\cap P_f$ et $V_2\cap P_g$ finis ; $V_1\cap V_2$ est un voisinage de $a$ et $(V_1\cap V_2)\cap P\subset(V_1\cap P_f)\cup(V_2\cap P_g)$ est fini.

*Holomorphie hors de $P$* : sur l'ouvert $\Omega\setminus P$, $f$ et $g$ sont holomorphes, donc $\alpha f+\beta g$ et $fg$ aussi ([[ch01-stabilite-operations]]).

*Condition (ii) en $z_0\in P$.* Il existe $m_f\ge1$ tel que $(z-z_0)^{m_f}f$ soit bornée au voisinage de $z_0$ : si $z_0\in P_f$ c'est l'hypothèse ; si $z_0\notin P_f$, $f$ est holomorphe donc continue, donc bornée au voisinage de $z_0$, et $m_f=1$ convient. De même pour $g$ avec un entier $m_g\ge1$. Soit $r>0$ tel que $|(z-z_0)^{m_f}f(z)|\le M_f$ et $|(z-z_0)^{m_g}g(z)|\le M_g$ sur $D(z_0,r)^\times$, et l'on peut supposer $r\le1$. Alors, avec $m:=\max(m_f,m_g)$, pour $z\in D(z_0,r)^\times$,
$$
|(z-z_0)^m(\alpha f+\beta g)(z)|\le|\alpha|\,|z-z_0|^{m-m_f}M_f+|\beta|\,|z-z_0|^{m-m_g}M_g\le|\alpha|M_f+|\beta|M_g ,
$$
et
$$
|(z-z_0)^{m_f+m_g}(fg)(z)|=|(z-z_0)^{m_f}f(z)|\,|(z-z_0)^{m_g}g(z)|\le M_fM_g .
$$
Donc $\alpha f+\beta g$ et $fg$ sont holomorphes hors de la partie localement finie $P$ et vérifient (ii) en chaque point de $P$ : elles sont méromorphes sur $\Omega$. (Le poly renvoie pour cette partie à la Remarque II.4.4.)

**Deuxième partie : inverse d'une fonction holomorphe.** Soit $f\in\Hol(\Omega)$ non identiquement nulle, $\Omega$ connexe, et $Z:=\{z\in\Omega:f(z)=0\}$ l'ensemble de ses zéros.

*$Z$ est localement fini dans $\Omega$.* D'après le principe des zéros isolés ([[ch01-zeros-isoles]], Théorème I.11.1 — c'est ici que servent la connexité et $f\not\equiv0$), $Z$ est discret ; il est fermé dans $\Omega$ comme image réciproque du fermé $\{0\}$ par l'application continue $f$. Par [[ch02-localement-fini-caracterisations]], $Z$ est localement fini dans $\Omega$.

*$g=1/f$ est holomorphe sur $\Omega\setminus Z$* : inverse d'une fonction holomorphe ne s'annulant pas ([[ch01-stabilite-operations]]).

*Tout point $z_0\in Z$ est un pôle de $g$.* Au voisinage de $z_0$, $f$ est somme de sa série de Taylor ([[ch01-holomorphe-analytique]], [[ch01-estimees-cauchy]]) sur un disque $D(z_0,\rho)\subset\Omega$, et, $f$ n'étant pas identiquement nulle près de $z_0$ (zéros isolés), ses coefficients ne sont pas tous nuls : en notant $N\ge1$ le plus petit indice d'un coefficient non nul (c'est la multiplicité du zéro, [[ch01-def-multiplicite-zero]]), on a
$$
f(z)=(z-z_0)^N\sum_{n\ge0}a_n(z-z_0)^n=:(z-z_0)^Nu(z),\qquad a_0\neq0,\quad z\in D(z_0,\rho),
$$
où $u$ est holomorphe sur $D(z_0,\rho)$ (somme d'une série entière de même rayon) et $u(z_0)=a_0\neq0$. Par continuité de $u$, il existe $\rho'\in\,]0,\rho]$ tel que $|u(z)|\ge|a_0|/2$ sur $D(z_0,\rho')$. Pour $z\in D(z_0,\rho')^\times$,
$$
(z-z_0)^Ng(z)=\frac{(z-z_0)^N}{(z-z_0)^Nu(z)}=\frac1{u(z)}=\Big(a_0+\sum_{n\ge1}a_n(z-z_0)^n\Big)^{-1},
$$
fonction qui se prolonge par continuité en $z_0$ (valeur $1/a_0$) et est bornée par $2/|a_0|$ sur $D(z_0,\rho')^\times$ : la condition (ii) est satisfaite avec $m=N$. Enfin $g$ ne se prolonge pas holomorphiquement en $z_0$ : pour $z\to z_0$, $z\ne z_0$, $|g(z)|=\dfrac1{|z-z_0|^N|u(z)|}\ge\dfrac{2}{|a_0|\,|z-z_0|^N}\to+\infty$, donc $g$ n'est pas bornée au voisinage de $z_0$, alors qu'un prolongement holomorphe (donc continu) la rendrait bornée : (i) est satisfaite. Ainsi $z_0$ est un pôle de $g$.

Conclusion : $g$ est holomorphe hors de la partie localement finie $Z$ de $\Omega$ et tous les points de $Z$ sont des pôles de $g$ : $g\in\mathcal M(\Omega)$. $\square$

*Complément (précision utile) :* la multiplicité du pôle $z_0$ de $g$ est exactement $N=m(z_0)$, la multiplicité du zéro de $f$ : on a $g=(z-z_0)^{-N}h$ avec $h=1/u$ holomorphe en $z_0$ et $h(z_0)=1/a_0\ne0$, ce qui est la caractérisation de la multiplicité ([[ch02-pole-meromorphe-def]]).

## Preuve à trous

*Somme et produit.* Avec $P=P_f\cup P_g$, qui est <trou indice="intersection de deux voisinages">localement fini dans $\Omega$ (un voisinage de $a$ ne rencontrant $P_f$ qu'en un nombre fini de points, intersecté avec un voisinage analogue pour $P_g$)</trou>, les fonctions $\alpha f+\beta g$ et $fg$ sont holomorphes sur $\Omega\setminus P$. En $z_0\in P$, si $(z-z_0)^{m_f}f$ et $(z-z_0)^{m_g}g$ sont bornées ($m_f=m_g=1$ convient aux points où la fonction est holomorphe), alors <trou indice="quels exposants pour la somme et pour le produit ?">$(z-z_0)^{\max(m_f,m_g)}(\alpha f+\beta g)$ et $(z-z_0)^{m_f+m_g}fg$ sont bornées près de $z_0$</trou>.

*Inverse.* Soit $Z$ l'ensemble des zéros de $f$. Il est <trou indice="deux propriétés topologiques puis la Proposition II.4.1">discret (principe des zéros isolés, $\Omega$ connexe et $f\not\equiv0$) et fermé dans $\Omega$ ($f$ continue), donc localement fini dans $\Omega$</trou>. $g=1/f$ est holomorphe sur $\Omega\setminus Z$. En $z_0\in Z$, on écrit $f(z)=(z-z_0)^N\sum_{n\ge0}a_n(z-z_0)^n$ avec $N\ge1$, $a_0\neq0$, d'où <trou indice="simplifier (z−z0)^N g">$(z-z_0)^Ng(z)=\big(a_0+\sum_{n\ge1}a_n(z-z_0)^n\big)^{-1}$, qui se prolonge par continuité en $z_0$ et est donc bornée près de $z_0$</trou>. Enfin $g$ ne se prolonge pas holomorphiquement en $z_0$ car <trou>$|g|\to+\infty$ en $z_0$</trou>. Donc $z_0$ est un pôle et $g\in\mathcal M(\Omega)$. $\square$

## Exemples

* **$1/\sin$ est méromorphe sur $\C$.** $\sin$ est entière, non nulle, $\C$ connexe. Ses zéros sont les $k\pi$, $k\in\Z$, tous simples car $\sin'(k\pi)=\cos(k\pi)=(-1)^k\neq0$ ; donc $1/\sin$ a des pôles simples en $k\pi$ et aucune autre singularité. De même $\dfrac1{e^z-1}$ a des pôles simples en $2ik\pi$ (dérivée $e^{2ik\pi}=1\ne0$).
* **$\tan=\sin\cdot\dfrac1{\cos}$** est un produit de deux fonctions méromorphes sur $\C$, donc méromorphe. Ses pôles sont les zéros de $\cos$ (simples), car $\sin$ ne s'y annule pas ; c'est ce qui permet d'affirmer, par exemple, que $\tan$ a exactement $2$ pôles dans $D(0,3)$ (en $\pm\pi/2$).
* **Un pôle peut disparaître dans une somme.** $f(z)=\dfrac1z$ et $g(z)=\dfrac{z-1}z$ sont méromorphes sur $\C$ avec un pôle simple en $0$ ; $f+g=1$ est holomorphe. La preuve fournit $P=\{0\}$, mais $0$ est une **fausse singularité** de $f+g$ ([[ch02-fausses-singularites-remarque]]) : la somme est méromorphe, sans que $\mathcal P(f+g,\C)=\mathcal P(f,\C)\cup\mathcal P(g,\C)$.
* **Pôle d'ordre $N$ par inversion.** $f(z)=z^2(z-1)$ sur $\C$ : zéros $0$ (double) et $1$ (simple). Donc $1/f$ a un pôle double en $0$ et un pôle simple en $1$ : $\dfrac1{z^2(z-1)}=z^{-2}\cdot\dfrac1{z-1}$ avec $h(z)=\dfrac1{z-1}$ holomorphe en $0$, $h(0)=-1\ne0$.

## Pièges

* > ⚠️ Pour l'inverse, il faut **$\Omega$ connexe** (ou $f\not\equiv0$ sur chaque composante) : sinon $f$ peut être nulle sur tout un ouvert.
* Les pôles de $f+g$ sont **inclus** dans $\mathcal P(f)\cup\mathcal P(g)$, pas nécessairement égaux (compensation) ; de même pour $fg$ (un zéro de $f$ peut compenser un pôle de $g$ : $z\cdot\frac1z=1$).
* La multiplicité du pôle de $1/f$ en $z_0$ est la multiplicité du **zéro** de $f$ : vérifier l'ordre du zéro (dérivées successives) avant d'écrire « pôle simple ».
* $1/f$ pour $f$ méromorphe (et non seulement holomorphe) est aussi méromorphe, mais c'est l'énoncé plus fort [[ch02-meromorphes-corps]] ; cette proposition ne traite que $f$ holomorphe.
* Ne pas oublier de vérifier que $f$ n'est pas identiquement nulle : par exemple, avant d'inverser $f-g$ dans une preuve d'unicité.
