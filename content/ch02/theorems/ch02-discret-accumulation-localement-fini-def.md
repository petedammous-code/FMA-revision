---
id: ch02-discret-accumulation-localement-fini-def
type: definition
chapter: 2
title: Ensemble discret, point d'accumulation, partie localement finie
ref: "non numéroté, section II.4, p. 42"
page: 42
importance: 2
depends: [ch01-def-point-accumulation]
tags: [topologie, discret, point d'accumulation, localement fini, isole, compact]
---
## Intuition

> 💡 Trois façons de dire qu'un ensemble de points « ne s'entasse pas ». **Discret** : chaque point a de la place autour de lui (on peut l'entourer d'un petit disque qui ne contient aucun autre point de l'ensemble). **Point d'accumulation** : un endroit où les points de l'ensemble s'entassent (on en trouve d'autres aussi près qu'on veut). **Localement fini dans $\Omega$** : où que l'on se place dans $\Omega$, on ne voit qu'un nombre fini de points autour de soi ; de manière équivalente, tout compact de $\Omega$ n'en contient qu'un nombre fini.

Image mentale : les entiers $\Z$ dans $\C$ sont discrets et localement finis. Les points $1/n$ sont discrets (chacun est isolé) mais s'entassent en $0$ : $0$ est un point d'accumulation, et $\{1/n\}$ n'est **pas** localement fini dans $\C$ — alors qu'il l'est dans $\C^\times=\C\setminus\{0\}$, où l'endroit où ils s'entassent a été enlevé. Ces notions servent à décrire les ensembles de pôles des fonctions méromorphes ([[ch02-pole-meromorphe-def]]) et les ensembles de zéros des fonctions holomorphes ([[ch01-zeros-isoles]]).

Vocabulaire : un **voisinage** d'un point $a\in\C$ est une partie de $\C$ contenant un disque ouvert $D(a,r)$, $r>0$ ; un **compact** de $\C$ est une partie fermée et bornée (Bolzano–Weierstrass : toute suite y admet une sous-suite convergente dans le compact).

## Énoncé

**Définition (poly, section II.4, p. 42).** Soit $P$ une partie de $\C$ et $\Omega$ un ouvert de $\C$.

* $P$ est **discret** si tous les points de $P$ sont **isolés**, c'est-à-dire que pour tout $a\in P$, il existe un voisinage ouvert de $a$ dont l'intersection avec $P$ est réduite à $\{a\}$. Ce voisinage peut être choisi de la forme $D(a,r)$, $r>0$.
* Un **point d'accumulation** d'une partie $P$ de $\C$ est un point $a\in\C$ limite d'une suite d'éléments de $P\setminus\{a\}$. De manière équivalente, tout voisinage de $a$ rencontre $P\setminus\{a\}$.
* Une partie $P$ de l'ouvert $\Omega$ est **localement finie dans $\Omega$** si pour tout $a\in\Omega$, il existe un voisinage de $a$ dont l'intersection avec $P$ est finie. De manière équivalente, $P\cap K$ est fini pour tout compact $K$ de $\Omega$.

**Justification des deux équivalences (poly, p. 42).**

*Point d'accumulation.* Si $a=\lim x_n$ avec $x_n\in P\setminus\{a\}$, tout voisinage de $a$ contient les $x_n$ pour $n$ grand, donc rencontre $P\setminus\{a\}$. Réciproquement, si tout voisinage de $a$ rencontre $P\setminus\{a\}$, on choisit $x_n\in D(a,1/n)\cap(P\setminus\{a\})$ pour chaque $n\ge1$ : alors $|x_n-a|<1/n$, donc $x_n\to a$.

*Localement fini.* Supposons que tout point de $\Omega$ a un voisinage ne contenant qu'un nombre fini de points de $P$, et soit $K\subset\Omega$ compact. Pour chaque $a\in K$ on choisit un voisinage **ouvert** $V_a$ (tout voisinage contient un disque ouvert, que l'on prend) tel que $V_a\cap P$ soit fini. Les $V_a$, $a\in K$, recouvrent $K$ ; par compacité on extrait un sous-recouvrement fini $V_{a_1},\dots,V_{a_k}$, et $P\cap K\subset\bigcup_{i=1}^k(P\cap V_{a_i})$ est fini. Réciproquement, supposons $P\cap K$ fini pour tout compact $K\subset\Omega$ et soit $a\in\Omega$. Comme $\Omega$ est ouvert, il existe $r>0$ tel que $\bar D(a,r)\subset\Omega$ ; le disque fermé $\bar D(a,r)$ est compact (fermé borné de $\C$ : c'est la **locale compacité** de $\C$) et c'est un voisinage de $a$ ; donc $P\cap\bar D(a,r)$ est fini.

## Hypothèses

### H1 — $\Omega$ ouvert (condition cachée)

**Rôle.** L'ouverture de $\Omega$ sert à trouver, pour tout $a\in\Omega$, un disque fermé $\bar D(a,r)\subset\Omega$ : c'est ce qui rend équivalentes les formulations « voisinage » et « compact » de la locale finitude, et plus loin ce qui permet d'appliquer les résultats d'holomorphie au voisinage de chaque point.

**Si on la retire.** Hypothèse de confort : dans tout le cours, $\Omega$ est un ouvert. La formulation « voisinage » garde un sens pour une partie $\Omega$ quelconque, mais le passage « compact $\Rightarrow$ voisinage » utilise un disque fermé $\bar D(a,r)\subset\Omega$, qui n'existe que si $\Omega$ est ouvert ; sans cela l'équivalence des deux formulations n'est plus garantie et l'on devrait travailler avec des voisinages relatifs à $\Omega$. On retient : « localement fini » se dit **dans un ouvert**.

### H2 — « dans $\Omega$ » (condition cachée)

**Rôle.** Être localement fini est une notion **relative à l'ouvert $\Omega$** : on ne teste la finitude qu'autour des points de $\Omega$. Les points d'accumulation de $P$ situés **hors** de $\Omega$ (sur son bord) sont autorisés.

**Si on la retire.** $P=\{1/n:n\ge1\}$ est localement fini dans $\C^\times$ mais pas dans $\C$ : la même partie est ou non localement finie selon l'ouvert ambiant.

## Exemples

* **$\Z$ dans $\C$.** Discret ($D(k,1/2)\cap\Z=\{k\}$), sans point d'accumulation, localement fini dans $\C$ : un compact $K\subset\bar D(0,R)$ contient au plus $2R+1$ entiers. Un ensemble localement fini peut donc être **infini**.
* **$P=\{1/n:n\ge1\}$ dans $\C$.** Discret : pour $a=1/n$, le point le plus proche de $P$ est à distance $\frac1n-\frac1{n+1}=\frac1{n(n+1)}>0$, donc $D(a,\frac1{n(n+1)})\cap P=\{a\}$. Mais $0=\lim 1/n$ avec $1/n\in P\setminus\{0\}$ : $0$ est un point d'accumulation de $P$ (qui n'appartient pas à $P$). $P$ n'est pas localement fini dans $\C$ : tout voisinage de $0$ contient $D(0,r)$, donc tous les $1/n$ avec $n>1/r$. En revanche $P$ est localement fini dans $\Omega=\C^\times$ : si $K\subset\C^\times$ est compact, $\dist(0,K)=\delta>0$ et $P\cap K\subset\{1/n: n\le1/\delta\}$ est fini.
* **$P=\{1/n:n\ge1\}\cup\{0\}$.** Non discret ($0$ n'est pas isolé), fermé dans $\C$, non localement fini dans $\C$. « Fermé » et « discret » sont deux propriétés indépendantes.
* **$\Q$ (ou $\Q+i\Q$) dans $\C$.** Aucun point n'est isolé ; tout point de $\C$ est point d'accumulation de $\Q+i\Q$ (densité). Pas discret, pas localement fini.
* **Zéros de $\sin(1/z)$ sur $\C^\times$.** $\sin(1/z)=0\iff 1/z=k\pi$, $k\in\Z^\times$, soit $z=\frac1{k\pi}$ : cet ensemble est localement fini dans $\C^\times$ (même argument que ci-dessus), mais il s'accumule en $0\notin\C^\times$. C'est typique des zéros d'une fonction holomorphe ([[ch01-zeros-isoles]], [[ch01-ensemble-zeros-discret-ferme]]).

## Pièges

* > ⚠️ **Discret n'implique pas localement fini** : $\{1/n\}$ est discret dans $\C$ mais pas localement fini. Il manque « fermé dans $\Omega$ » ([[ch02-localement-fini-caracterisations]], [[ch02-localement-fini-vs-isole-remarque]]).
* Un point d'accumulation de $P$ n'appartient pas nécessairement à $P$ ($0$ pour $\{1/n\}$) ; et un point de $P$ peut être un point d'accumulation de $P$ ($0$ pour $\{1/n\}\cup\{0\}$) : « point d'accumulation » et « point isolé » sont les deux cas exclusifs pour un point de $P$.
* « Localement fini » ne veut pas dire « fini » : $\Z$, les pôles de $1/\sin z$, les zéros de $\sin(\pi z)$ ([[ch01-isole-ne-signifie-pas-fini]]).
* Toujours préciser **dans quel ouvert** : « localement fini dans $\Omega$ » autorise des accumulations sur $\partial\Omega$. C'est pour cela que $1/\sin(1/z)$ est méromorphe sur $\C^\times$ mais pas sur $\C$ ([[ch02-pole-meromorphe-def]]).
* Dans la définition de « discret », le voisinage dépend du point : les rayons $r_a$ peuvent tendre vers $0$ (exemple $\{1/n\}$), ce qui est précisément ce qui permet l'accumulation.
