---
id: ch03-convergence-uniforme-compacts
type: proposition
chapter: 3
title: Localement uniforme = uniforme sur tout compact
ref: Proposition III.1.2
page: 59
importance: 2
depends: [ch03-convergence-localement-uniforme]
tags: [convergence-uniforme, compact, borel-lebesgue, localement-uniforme]
---
## Intuition

> 💡 Un compact, c'est « un nombre fini de petits morceaux » : si l'on contrôle la convergence près de chaque point, on la contrôle sur un compact en ne recollant qu'un **nombre fini** de voisinages (Borel–Lebesgue), et un maximum d'un nombre fini de rangs $N$ reste un rang fini. Réciproquement, dans un ouvert de $\C$, chaque point a un petit disque fermé autour de lui qui est compact : contrôler sur les compacts, c'est donc contrôler près de chaque point.

Rappels. La convergence **localement uniforme** et les suites **localement uniformément de Cauchy** sont définies dans [[ch03-convergence-localement-uniforme]]. Une partie $K\subset\C$ est **compacte** si et seulement si elle est fermée et bornée ; de tout recouvrement de $K$ par des ouverts on peut extraire un sous-recouvrement fini (propriété de Borel–Lebesgue).

En pratique, c'est cette reformulation qu'on utilise dans les preuves du chapitre : « il suffit de montrer la convergence uniforme sur tout compact », et dans les preuves à base de formule de Cauchy, sur les cercles $C(z_0,r)$ et les disques fermés $\bar D(z_0,r)\subset\Omega$.

## Énoncé

**Proposition (poly, Proposition III.1.2, p. 59).** Soient $\Omega$ un ouvert de $\C$ et $(f_n)_{n\in\N}$ une suite de fonctions de $\Omega$ dans $\C$. Alors $(f_n)_{n\in\N}$ converge localement uniformément vers $f$ si et seulement si, pour tout compact $K\subset\Omega$, la suite $(f_n)_{n\in\N}$ converge uniformément sur $K$ vers $f$.

De même $(f_n)_{n\in\N}$ est localement uniformément de Cauchy si et seulement si $(f_n)_{n\in\N}$ est uniformément de Cauchy sur tout compact $K\subset\Omega$ (autrement dit, pour tout $\eps>0$, il existe $N\ge1$ tel que pour tous $p,q\ge N$, on a $|f_p(z)-f_q(z)|\le\eps$ pour tout $z\in K$).

## Hypothèses

### H1 — $\Omega$ ouvert de $\C$

**Rôle.** Dans le sens « compacts $\Rightarrow$ local » : pour $x\in\Omega$, comme $\Omega$ est ouvert il existe $r>0$ avec $\bar D(x,r)\subset\Omega$, et ce disque fermé est un **voisinage compact** de $x$. C'est le fait que $\C$ est localement compact.

**Si on la retire.** Le sens « local $\Rightarrow$ compacts » reste vrai sur n'importe quel espace métrique (seul Borel–Lebesgue sert). Le sens réciproque peut tomber en défaut sans voisinages compacts. Exemple (hors programme) dans l'espace de Hilbert $\ell^2$ de dimension infinie, de base $(e_n)$ : posons $f_n(x)=\sup\{1/k : k\ge1,\ \norm{x-e_n/k}\le 1/(2k)\}$ (et $f_n(x)=0$ si cet ensemble est vide). Si $f_n(x)\ge 1/k$, alors $|x_n|\ge 1/k-1/(2k)=1/(2k)$, donc $0\le f_n(x)\le 2|x_n|$. Sur un compact $K$ de $\ell^2$, $\sup_{x\in K}|x_n|\to0$ (prendre un $\eps$-réseau fini de $K$), donc $f_n\to0$ uniformément sur $K$. Mais toute boule $B(0,\rho)$ contient $e_n/k$ dès que $1/k<\rho$, pour **tout** $n$, et $f_n(e_n/k)\ge1/k$ : la convergence n'est uniforme sur aucun voisinage de $0$. Dans le cadre du poly ($\Omega$ ouvert de $\C$), ce phénomène n'existe pas.

### H2 — $K$ compact (et pas seulement fermé dans $\Omega$, ou borné)

**Rôle.** C'est la compacité qui permet d'extraire un sous-recouvrement **fini** et de prendre le maximum d'un nombre fini de rangs.

**Si on la retire.** Pour $f_n(z)=z^n$ sur $\Omega=D(0,1)$ (convergence localement uniforme vers $0$), la partie $F=[0,1)$ est fermée dans $\Omega$ et bornée mais pas compacte, et $\sup_{x\in F}x^n=1$ : pas de convergence uniforme sur $F$. De même sur $\Omega$ elle-même, qui est bornée.

## Idée de la preuve

Local $\Rightarrow$ compacts : on recouvre $K$ par les voisinages $U_x$, on en extrait un nombre fini, on prend le plus grand des rangs. Compacts $\Rightarrow$ local : chaque point a un voisinage compact $\bar D(x,r)\subset\Omega$.

## Preuve

On traite la convergence ; le cas « de Cauchy » est identique en remplaçant $|f_n(z)-f(z)|$ par $|f_p(z)-f_q(z)|$ (avec $p,q\ge N$).

**Local $\Rightarrow$ uniforme sur tout compact.** Supposons que $(f_n)$ converge localement uniformément vers $f$ et soit $K\subset\Omega$ compact. Pour chaque $x\in K$, il existe un voisinage $U_x$ de $x$ dans $\Omega$ sur lequel $f_n\to f$ uniformément ; $U_x$ contient un disque ouvert $D(x,r_x)$, et la convergence est a fortiori uniforme sur $D(x,r_x)$. Les ouverts $D(x,r_x)$, $x\in K$, recouvrent $K$ ; par compacité (Borel–Lebesgue) on en extrait un sous-recouvrement fini $D(x_1,r_{x_1}),\dots,D(x_m,r_{x_m})$.

Soit $\eps>0$. Pour chaque $i\in\{1,\dots,m\}$, il existe $N_i$ tel que $|f_n(z)-f(z)|\le\eps$ pour tous $n\ge N_i$ et $z\in D(x_i,r_{x_i})$. Posons $N=\max(N_1,\dots,N_m)$ (maximum d'un nombre **fini** d'entiers). Pour $n\ge N$ et $z\in K$, il existe $i$ avec $z\in D(x_i,r_{x_i})$ et $n\ge N_i$, donc $|f_n(z)-f(z)|\le\eps$. Ainsi $\norm{f_n-f}_{\infty,K}\le\eps$ pour $n\ge N$ : la convergence est uniforme sur $K$.

**Uniforme sur tout compact $\Rightarrow$ local.** Soit $x\in\Omega$. Comme $\Omega$ est ouvert, il existe $\rho>0$ avec $D(x,\rho)\subset\Omega$ ; posons $r=\rho/2$, de sorte que $\bar D(x,r)\subset D(x,\rho)\subset\Omega$. Le disque fermé $\bar D(x,r)$ est fermé et borné dans $\C$, donc compact, et c'est un voisinage de $x$ (il contient $D(x,r)$). Par hypothèse $(f_n)$ converge uniformément vers $f$ sur $U_x:=\bar D(x,r)$ : c'est la définition de la convergence localement uniforme ([[ch03-convergence-localement-uniforme]]). $\square$

## Preuve à trous

**Local $\Rightarrow$ compacts.** Soit $K\subset\Omega$ compact. Chaque $x\in K$ a un disque $D(x,r_x)$ sur lequel $f_n\to f$ uniformément. Ces disques recouvrent $K$, donc <trou indice="Borel–Lebesgue">on peut en extraire un sous-recouvrement fini $D(x_1,r_{x_1}),\dots,D(x_m,r_{x_m})$</trou>. Pour $\eps>0$, on obtient des rangs $N_1,\dots,N_m$ et l'on pose <trou>$N=\max(N_1,\dots,N_m)$, qui est fini car il n'y a qu'un nombre fini de disques</trou> : pour $n\ge N$, $\norm{f_n-f}_{\infty,K}\le\eps$.

**Compacts $\Rightarrow$ local.** Soit $x\in\Omega$. Comme $\Omega$ est ouvert, <trou indice="trouver un voisinage compact de x dans Ω">il existe $r>0$ tel que $\bar D(x,r)\subset\Omega$ ; ce disque fermé est compact et c'est un voisinage de $x$</trou>, sur lequel la convergence est uniforme par hypothèse. $\square$

## Exemples

* **$z^n$ sur $D(0,1)$.** Un compact $K\subset D(0,1)$ vérifie $r_K:=\max_{z\in K}|z|<1$ (la fonction continue $|z|$ atteint son maximum sur $K$, en un point de $D(0,1)$). Donc $\norm{z^n}_{\infty,K}\le r_K^n\to0$ : convergence uniforme sur tout compact, donc localement uniforme, vers $0$.
* **Série géométrique.** $S_n(z)=\sum_{k=0}^n z^k$ sur $D(0,1)$ : $\frac1{1-z}-S_n(z)=\frac{z^{n+1}}{1-z}$. Sur un compact $K$, avec $r_K$ comme ci-dessus, $\Big|\frac1{1-z}-S_n(z)\Big|\le\frac{r_K^{n+1}}{1-r_K}\to0$ (car $|1-z|\ge1-|z|\ge1-r_K$). Convergence localement uniforme vers $\frac1{1-z}$.
* **Usage typique.** Dans la preuve du théorème de Hurwitz ([[ch03-hurwitz]]), on utilise que la convergence localement uniforme donne la convergence uniforme sur le **cercle** $C(z_0,r)$, qui est compact.

## Pièges

* > ⚠️ « Compact de $\Omega$ » : $K$ doit être contenu dans $\Omega$. Pour $z^n$ sur $D(0,1)$, le disque fermé $\bar D(0,1)$ n'est pas un compact de $\Omega$, et la convergence n'y est pas uniforme (et n'a même pas lieu en $z=-1$).
* Dans la preuve, il faut prendre un **disque fermé** strictement plus petit : $D(x,\rho)\subset\Omega$ n'entraîne pas que $D(x,\rho)$ soit compact (il est ouvert), d'où le passage à $\bar D(x,\rho/2)$.
* Le maximum $\max(N_1,\dots,N_m)$ n'a de sens que parce que le sous-recouvrement est **fini** : c'est tout l'intérêt de la compacité.
