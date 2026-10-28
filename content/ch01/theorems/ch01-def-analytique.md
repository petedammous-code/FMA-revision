---
id: ch01-def-analytique
type: definition
chapter: 1
title: Fonction analytique sur $\Omega$
ref: Définition I.7.1
page: 20
importance: 2
depends: [ch01-def-rayon-convergence]
tags: [analytique, serie-entiere, developpement-local]
---
## Intuition

> 💡 Une fonction **analytique** est une fonction qui, vue de près autour de n'importe quel point, est un « polynôme de degré infini » : autour de chaque $z_0$, elle coïncide avec la somme d'une série entière en puissances de $(z-z_0)$. On ne demande pas une seule série pour tout $\Omega$ : on demande une série **par point**, chacune valable sur un petit disque autour de son centre.

Rappel : une **série entière** centrée en $z_0$ est une série de fonctions $\sum_{n\ge0}a_n(z-z_0)^n$ (coefficients $a_n\in\C$) ; son **rayon de convergence** $R\in[0,+\infty]$ est tel que la série converge pour $|z-z_0|<R$ et diverge pour $|z-z_0|>R$ ([[ch01-def-rayon-convergence]]). Un **voisinage** de $z_0$ est un ensemble qui contient un disque $D(z_0,\eps)$, $\eps>0$.

Le grand théorème de la section I.7 est que, pour les fonctions d'une variable complexe, « analytique » et « holomorphe » sont la même chose ([[ch01-holomorphe-analytique]]).

## Énoncé

**Définition (poly, Définition I.7.1, p. 20).** Soit $\Omega$ un ouvert de $\C$. Une fonction $f:\Omega\to\C$ est **analytique** sur $\Omega$ si, pour tout $z_0\in\Omega$, la fonction $f$ admet un développement en série entière de la forme
$$
f(z)=\sum_{n\ge0}a_n(z-z_0)^n,
$$
qui est convergente dans un voisinage de $z_0$ (le rayon de convergence de la série est strictement positif).

Autrement dit : pour tout $z_0\in\Omega$, il existe des coefficients $(a_n)_{n\ge0}$ (dépendant de $z_0$) et $\eps>0$ tels que $D(z_0,\eps)\subset\Omega$, que la série $\sum a_n(z-z_0)^n$ ait un rayon de convergence $\ge\eps$, et que $f(z)=\sum_{n\ge0}a_n(z-z_0)^n$ pour tout $z\in D(z_0,\eps)$.

## Hypothèses

### H1 — $\Omega$ est ouvert

**Rôle.** En chaque point $z_0\in\Omega$, on a de la place autour de $z_0$ pour qu'un disque $D(z_0,\eps)\subset\Omega$ porte l'égalité entre $f$ et la série.

**Si on la retire.** Sur un ensemble non ouvert (par exemple un segment), la notion « développable en série entière au voisinage de $z_0$ » ne parle que des valeurs de $f$ sur cet ensemble, et l'équivalence avec l'holomorphie (qui demande un ouvert) n'a plus de sens.

### H2 — un développement en **chaque** point, de rayon $>0$ dépendant du point

**Rôle.** L'analyticité est une propriété **locale** : la série change avec le centre $z_0$, et son rayon aussi.

**Si on la retire.** Être développable en série entière en **un** point $z_0$ ne dit rien ailleurs : $f=\mathbf 1_{D(0,1)}$ (indicatrice) sur $\Omega=\C$ est égale à la série constante $1$ près de $0$, mais n'est pas analytique sur $\C$ (elle n'est pas continue sur le cercle unité, alors qu'une fonction analytique est continue). Inversement, il n'est **pas** demandé qu'une même série représente $f$ sur tout $\Omega$ : $1/(1-z)$ est analytique sur $\C\setminus\{1\}$ (exemple ci-dessous) alors qu'aucune série entière ne la représente sur tout cet ouvert.

### H3 — égalité de $f$ avec la série, pas seulement convergence

**Rôle.** La définition exige que la somme de la série **soit** $f(z)$ près de $z_0$. Les coefficients sont alors uniques : $a_n=\frac{f^{(n)}(z_0)}{n!}$ (dérivation terme à terme, [[ch01-serie-entiere-derivees-tout-ordre]]).

**Si on la retire.** En variable réelle, $\varphi(x)=e^{-1/x^2}$ ($x\neq0$), $\varphi(0)=0$, est $C^\infty$ avec $\varphi^{(n)}(0)=0$ pour tout $n$ : sa série de Taylor en $0$ converge (c'est la série nulle, de rayon infini) mais ne vaut pas $\varphi(x)\neq0$ pour $x\neq0$. Donc $\varphi$ n'est pas analytique en $0$. En variable complexe ce phénomène est impossible pour une fonction holomorphe ([[ch01-holomorphe-analytique]]) ; d'ailleurs $z\mapsto e^{-1/z^2}$ n'est même pas bornée près de $0$ (pour $z=iy$, $e^{-1/z^2}=e^{1/y^2}$).

## Exemples

* **Polynômes.** Un polynôme $P$ est analytique sur $\C$ : en tout $z_0$, la formule de Taylor $P(z)=\sum_{n=0}^{\deg P}\frac{P^{(n)}(z_0)}{n!}(z-z_0)^n$ est une série entière (finie), de rayon $+\infty$.
* **Exponentielle.** En tout $z_0\in\C$, $e^z=e^{z_0}e^{z-z_0}=\sum_{n\ge0}\frac{e^{z_0}}{n!}(z-z_0)^n$, rayon $+\infty$ ([[ch01-exp-trigo-hyperboliques]]).
* **Une fraction rationnelle.** $f(z)=\frac{1}{1-z}$ sur $\Omega=\C\setminus\{1\}$. Pour $z_0\neq1$ et $|z-z_0|<|1-z_0|$,
$$
\frac{1}{1-z}=\frac{1}{(1-z_0)-(z-z_0)}=\frac{1}{1-z_0}\cdot\frac{1}{1-\frac{z-z_0}{1-z_0}}=\sum_{n\ge0}\frac{(z-z_0)^n}{(1-z_0)^{n+1}},
$$
de rayon exactement $|1-z_0|$ (Cauchy–Hadamard : $|a_n|^{1/n}=|1-z_0|^{-(n+1)/n}\to|1-z_0|^{-1}$). Le rayon varie avec $z_0$ : c'est la distance de $z_0$ au point « interdit » $1$.
* **Non-exemple.** $f(z)=\bar z$ n'est analytique sur aucun ouvert : une fonction analytique est holomorphe (Proposition I.3.3, [[ch01-serie-entiere-holomorphe]]), et $\bar z$ n'est $\C$-dérivable nulle part ([[ch01-exemple-zbar-rez-module]]).

## Pièges

* > ⚠️ « Analytique sur $\Omega$ » ne veut **pas** dire « somme d'une seule série entière sur $\Omega$ ». C'est une série par point. Le fait qu'une fonction holomorphe sur un **disque** soit représentée par une seule série sur tout le disque est un théorème ([[ch01-estimees-cauchy]]), pas la définition.
* Le rayon de convergence de la série en $z_0$ peut dépasser la taille de $\Omega$ autour de $z_0$, mais l'égalité avec $f$ n'est garantie qu'au voisinage de $z_0$.
* Une série entière de rayon $\rho>0$ est analytique sur tout son disque ouvert de convergence $D(z_0,\rho)$, mais le vérifier demande de **recentrer** la série en chaque point (Remarque I.7.2, [[ch01-serie-entiere-analytique-sur-disque]]).
* En variable réelle, $C^\infty$ n'implique pas analytique ($e^{-1/x^2}$) ; en variable complexe, holomorphe ($C^1$ au sens complexe) implique analytique.
