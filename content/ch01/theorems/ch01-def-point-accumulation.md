---
id: ch01-def-point-accumulation
type: definition
chapter: 1
title: Point d'accumulation d'une partie $X$
ref: non numéroté (note 2), section I.11, p. 28
page: 28
importance: 1
depends: []
tags: [topologie, accumulation, isole, zeros-isoles]
---
## Intuition

> 💡 Un point $a$ est un point d'accumulation de $X$ si les points de $X$ (autres que $a$) viennent **s'entasser** contre $a$ : aussi petite que soit la loupe qu'on pose sur $a$, on y voit toujours un point de $X$ distinct de $a$.

À l'opposé, un point de $X$ est **isolé** si on peut l'entourer d'un petit disque qui ne contient aucun autre point de $X$. Cette notion est le vocabulaire de base du principe des zéros isolés ([[ch01-zeros-isoles]]) et du prolongement analytique ([[ch01-prolongement-analytique]]) : les zéros d'une fonction holomorphe non nulle ne peuvent pas s'accumuler à l'intérieur du domaine.

Rappel : un **voisinage** de $a\in\C$ est une partie de $\C$ contenant un disque ouvert $D(a,r)=\{z\in\C: |z-a|<r\}$ avec $r>0$.

## Énoncé

**Définition (poly, note 2 de la section I.11, p. 28).** Soit $X$ une partie de $\C$. Un **point d'accumulation** de $X$ est un point $a\in\C$ tel que tout voisinage de $a$ intersecte $X\setminus\{a\}$. Un point de $X$ qui n'est pas un point d'accumulation de $X$ est dit **isolé** (dans $X$).

**Reformulations équivalentes** (le poly les rappelle en section II.4, p. 42) : pour $a\in\C$, les propriétés suivantes sont équivalentes :

1. $a$ est un point d'accumulation de $X$ ;
2. pour tout $r>0$, $D(a,r)\cap(X\setminus\{a\})\neq\emptyset$ ;
3. $a$ est limite d'une suite $(x_n)$ d'éléments de $X\setminus\{a\}$ ;
4. tout voisinage de $a$ contient une **infinité** de points de $X$.

*Justification.* $1\Leftrightarrow2$ car tout voisinage contient un disque $D(a,r)$ et un disque est un voisinage. $2\Rightarrow3$ : on choisit $x_n\in D(a,1/n)\cap(X\setminus\{a\})$, alors $|x_n-a|<1/n\to0$. $3\Rightarrow4$ : si $x_n\to a$ avec $x_n\neq a$, alors $|x_n-a|>0$ pour tout $n$ et $|x_n-a|\to0$, donc la suite prend une infinité de valeurs distinctes, et toutes sauf un nombre fini sont dans un voisinage donné de $a$. $4\Rightarrow1$ : un ensemble infini contenu dans un voisinage $V$ de $a$ contient un point $\neq a$.

Ainsi $a\in X$ est **isolé** dans $X$ si et seulement s'il existe $r>0$ tel que $D(a,r)\cap X=\{a\}$.

## Hypothèses

### H1 — « dans $\Omega$ » : où se trouve le point d'accumulation

**Rôle.** Dans le cours, on demande souvent un point d'accumulation **appartenant à l'ouvert** $\Omega$ considéré (par exemple dans [[ch01-prolongement-analytique]]). La définition ne demande pas $a\in X$, ni même $a\in\Omega$ : il faut le préciser à chaque usage.

**Si on la retire.** $X=\{1-1/n : n\ge1\}\subset D(0,1)$ a pour unique point d'accumulation $1$, qui n'est pas dans $D(0,1)$ : du point de vue de l'ouvert $D(0,1)$, $X$ n'a **aucun** point d'accumulation, et le prolongement analytique ne s'applique pas (voir les contre-exemples de [[ch01-prolongement-analytique]]).

## Exemples

* $X=\{1/n : n\ge1\}$ : $0$ est un point d'accumulation ($1/n\to0$, $1/n\neq0$) et $0\notin X$ ; c'est le seul (pour $a\neq0$, un petit disque autour de $a$ ne contient qu'un nombre fini de $1/n$). Chaque $1/n$ est isolé dans $X$ : $D(1/n,\,1/n-1/(n+1))\cap X=\{1/n\}$.
* $X=\Z$ : aucun point d'accumulation dans $\C$ (tout disque $D(a,1/2)$ contient au plus un entier). Tous ses points sont isolés.
* $X=D(0,1)$ : l'ensemble de ses points d'accumulation est le disque fermé $\bar D(0,1)$ ; aucun point n'est isolé.
* $X=\{a\}$ (un singleton) : aucun point d'accumulation ; $a$ est isolé.
* $X=\Q+i\Q$ : tout point de $\C$ est point d'accumulation (densité).

## Pièges

* > ⚠️ Un point d'accumulation de $X$ n'appartient **pas forcément** à $X$ (exemple $\{1/n\}$ et $0$), ni à l'ouvert $\Omega$ dans lequel on travaille. Toujours préciser « point d'accumulation **dans $\Omega$** ».
* Ne pas oublier le « $\setminus\{a\}$ » : sans lui, tout point de $X$ serait « d'accumulation » trivialement.
* « Tous les points de $X$ sont isolés » (on dit que $X$ est **discret**) n'empêche pas $X$ d'avoir un point d'accumulation **hors de $X$** : $\{1/n\}$ est discret et s'accumule en $0$. C'est pourquoi on demande « discret **et fermé** dans $\Omega$ » ([[ch01-ensemble-zeros-discret-ferme]]).
* Un ensemble fini n'a jamais de point d'accumulation ; un ensemble infini **borné** en a toujours un (Bolzano–Weierstrass), mais un ensemble infini non borné peut ne pas en avoir ($\Z$).
