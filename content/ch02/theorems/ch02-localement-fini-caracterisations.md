---
id: ch02-localement-fini-caracterisations
type: proposition
chapter: 2
title: Caractérisations des parties localement finies
ref: Proposition II.4.1
page: 42
importance: 2
depends: [ch02-discret-accumulation-localement-fini-def]
tags: [topologie, localement fini, discret, ferme, point d'accumulation, compact]
---
## Intuition

> 💡 Trois manières équivalentes de dire qu'un ensemble $P$ de points de $\Omega$ « ne s'entasse nulle part dans $\Omega$ » : (1) chaque point est isolé **et** l'ensemble est fermé dans $\Omega$ (pas de point limite oublié) ; (2) autour de tout point de $\Omega$ on ne voit qu'un nombre fini de points de $P$ ; (3) aucun point de $\Omega$ n'est un point d'accumulation de $P$.

Le cœur de l'équivalence est Bolzano–Weierstrass : une infinité de points dans un compact doivent s'accumuler quelque part dans ce compact. Donc « pas d'accumulation dans $\Omega$ » force la finitude sur chaque compact de $\Omega$. Le mot important est **dans $\Omega$** : $P$ a le droit de s'accumuler sur le bord de $\Omega$ (ou à l'infini), ce qui arrive sans cesse pour les pôles des fonctions méromorphes ([[ch02-pole-meromorphe-def]]).

Les notions utilisées (discret, point d'accumulation, localement fini) sont définies dans [[ch02-discret-accumulation-localement-fini-def]]. **Fermé dans $\Omega$** signifie : $P=F\cap\Omega$ avec $F$ fermé de $\C$ ; de manière équivalente, toute limite **dans $\Omega$** d'une suite de points de $P$ appartient à $P$.

## Énoncé

**Proposition (poly, Proposition II.4.1, p. 42).** Soit $\Omega$ un ouvert de $\C$ et $P$ une partie de $\Omega$. Les conditions suivantes sont équivalentes :

1. $P$ est discret et fermé dans $\Omega$ ;
2. $P$ est localement fini dans $\Omega$ ;
3. $P$ n'a pas de point d'accumulation dans $\Omega$.

## Hypothèses

### H1 — « fermé » et « point d'accumulation » s'entendent **dans $\Omega$**

**Rôle.** Dans (1)$\Rightarrow$(3), un point d'accumulation $a\in\Omega$ est une limite dans $\Omega$ d'une suite de $P$, donc appartient à $P$ par fermeture dans $\Omega$. Dans (3)$\Rightarrow$(2), le point d'accumulation produit par compacité est dans $K\subset\Omega$. On ne demande rien hors de $\Omega$.

**Si on la retire.** Si l'on remplaçait « fermé dans $\Omega$ » par « fermé dans $\C$ », l'équivalence serait fausse : $P=\{1/n:n\ge1\}$ est localement fini dans $\Omega=\C^\times$ (vérifié dans [[ch02-discret-accumulation-localement-fini-def]]), discret, fermé dans $\C^\times$ (sa seule limite manquante est $0\notin\C^\times$), mais pas fermé dans $\C$. De même « pas de point d'accumulation dans $\C$ » serait trop fort : $0$ est un point d'accumulation de $P$, hors de $\Omega$, et cela ne l'empêche pas d'être localement fini dans $\Omega$.

### H2 — « discret » **et** « fermé » (les deux à la fois dans (1))

**Rôle.** « Discret » donne l'isolement de chaque point, « fermé » interdit un point d'accumulation dans $\Omega$ qui ne serait pas dans $P$.

**Si on la retire.** Discret seul ne suffit pas : $P=\{1/n\}$ dans $\Omega=\C$ est discret mais a le point d'accumulation $0\in\C$ ; il n'est pas localement fini dans $\C$ (tout voisinage de $0$ contient une infinité de $1/n$) — c'est la Remarque II.4.4 ([[ch02-localement-fini-vs-isole-remarque]]). Fermé seul ne suffit pas non plus : $P=\{1/n\}\cup\{0\}$ est fermé dans $\C$ mais $0$ n'est pas isolé, et $P$ n'est pas localement fini dans $\C$.

### H3 — $\Omega$ ouvert et $P\subset\Omega$

**Rôle.** L'ouverture sert dans (2)$\Rightarrow$(1) à disposer de disques fermés $\bar D(a,r)\subset\Omega$ (compacts) autour de chaque $a\in P$, et dans l'équivalence des deux définitions de « localement fini ». $P\subset\Omega$ est nécessaire pour que « discret et fermé dans $\Omega$ » porte sur une partie de $\Omega$.

**Si on la retire.** Hypothèse de confort dans le cadre du cours : avec la formulation « voisinage » de la locale finitude, les trois implications s'adaptent à une partie $\Omega$ quelconque de $\C$ en prenant des voisinages relatifs ; mais dans tout le cours $\Omega$ est un ouvert, et c'est la locale compacité de $\C$ (disques fermés compacts) qui fait fonctionner la preuve telle qu'elle est écrite.

## Idée de la preuve

Cycle (1)$\Rightarrow$(3)$\Rightarrow$(2)$\Rightarrow$(1). (1)$\Rightarrow$(3) : un point d'accumulation dans $\Omega$ serait dans $P$ (fermé) et non isolé. (3)$\Rightarrow$(2) : une partie infinie d'un compact a un point d'accumulation dans ce compact (Bolzano–Weierstrass). (2)$\Rightarrow$(1) : un disque fermé assez petit autour de $a\in P$ ne contient qu'un nombre fini de points de $P$, donc $a$ est isolé ; une suite de $P$ convergeant dans $\Omega$ est à valeurs finies, donc stationnaire.

## Preuve

**(1)$\Rightarrow$(3).** Supposons $P$ discret et fermé dans $\Omega$, et raisonnons par l'absurde : soit $a\in\Omega$ un point d'accumulation de $P$. Par définition ([[ch02-discret-accumulation-localement-fini-def]]), $a$ est la limite d'une suite $(x_n)$ de points de $P\setminus\{a\}\subset P$. Comme $a\in\Omega$ et $P$ est fermé dans $\Omega$, on a $a\in P$. Mais tout voisinage de $a$ rencontre $P\setminus\{a\}$ (il contient les $x_n$ pour $n$ grand, et $x_n\neq a$) : $a$ est un point de $P$ qui n'est pas isolé, ce qui contredit « $P$ discret ».

**(3)$\Rightarrow$(2).** Supposons que $P$ n'a pas de point d'accumulation dans $\Omega$ et soit $K\subset\Omega$ un compact. Si $P\cap K$ était infini, on pourrait choisir une suite $(x_n)$ de points de $P\cap K$ **deux à deux distincts**. Le compact $K$ étant fermé borné dans $\C$, le théorème de Bolzano–Weierstrass fournit une sous-suite $(x_{\varphi(n)})$ convergeant vers un point $a\in K\subset\Omega$. Les $x_{\varphi(n)}$ étant deux à deux distincts, au plus un d'entre eux est égal à $a$ ; en le supprimant, on obtient une suite de points de $P\setminus\{a\}$ convergeant vers $a$ : $a$ est un point d'accumulation de $P$ dans $\Omega$, contradiction. Donc $P\cap K$ est fini, pour tout compact $K$ de $\Omega$ : $P$ est localement fini dans $\Omega$ (formulation « compact » de la définition).

**(2)$\Rightarrow$(1).** Supposons $P$ localement fini dans $\Omega$.

*$P$ est discret.* Soit $a\in P$. Comme $\Omega$ est ouvert, il existe $r_0>0$ tel que $\bar D(a,r_0)\subset\Omega$ ; ce disque fermé est compact, donc $P\cap\bar D(a,r_0)$ est fini : $P\cap\bar D(a,r_0)=\{a,p_1,\dots,p_k\}$ avec les $p_i\neq a$ (éventuellement $k=0$). Posons $r:=\min(r_0,|p_1-a|,\dots,|p_k-a|)>0$. Alors $P\cap D(a,r)=\{a\}$ : $a$ est isolé.

*$P$ est fermé dans $\Omega$.* Soit $x\in\Omega$ limite d'une suite $(x_n)$ de points de $P$. Par locale finitude, il existe un voisinage $V$ de $x$ tel que $V\cap P$ soit fini. Comme $x_n\to x$, on a $x_n\in V$ pour $n\ge n_0$, donc la suite $(x_n)_{n\ge n_0}$ ne prend qu'un nombre fini de valeurs, toutes dans $P$. Une suite convergente ne prenant qu'un nombre fini de valeurs est stationnaire : les valeurs différentes de $x$ sont à distance $\ge\delta>0$ de $x$ (minimum d'un nombre fini de distances strictement positives) et ne peuvent apparaître que pour un nombre fini d'indices ; donc $x_n=x$ pour $n$ assez grand, et $x\in P$. Ainsi $P$ contient toutes ses limites dans $\Omega$ : il est fermé dans $\Omega$. $\square$

## Preuve à trous

**(1)$\Rightarrow$(3).** Si $a\in\Omega$ est un point d'accumulation de $P$, alors <trou indice="utiliser « fermé dans Ω »">$a$ est limite d'une suite de $P\setminus\{a\}$, donc $a\in P$ puisque $P$ est fermé dans $\Omega$</trou> ; mais alors $a$ est un point de $P$ non isolé, contradiction avec « discret ».

**(3)$\Rightarrow$(2).** Soit $K\subset\Omega$ compact. Si $P\cap K$ était infini, on prendrait une suite de points **deux à deux distincts** de $P\cap K$ ; <trou indice="quel théorème sur les suites dans un compact ?">par Bolzano–Weierstrass, une sous-suite converge vers $a\in K\subset\Omega$, et comme ses termes sont distincts, $a$ est limite d'une suite de $P\setminus\{a\}$</trou> : point d'accumulation dans $\Omega$, contradiction.

**(2)$\Rightarrow$(1).** Soit $a\in P$ ; on choisit $r_0>0$ avec $\bar D(a,r_0)\subset\Omega$ (compact), donc $P\cap\bar D(a,r_0)=\{a,p_1,\dots,p_k\}$ est fini et <trou indice="choisir un rayon qui exclut les p_i">pour $r=\min(r_0,|p_1-a|,\dots,|p_k-a|)$ on a $P\cap D(a,r)=\{a\}$</trou> : $a$ est isolé. Si $x\in\Omega$ est limite d'une suite $(x_n)$ de $P$, un voisinage $V$ de $x$ ne contient qu'un nombre fini de points de $P$, donc <trou indice="une suite convergente à valeurs dans un ensemble fini...">$(x_n)$ ne prend qu'un nombre fini de valeurs à partir d'un certain rang et est donc stationnaire : $x_n=x$ pour $n$ grand, d'où $x\in P$</trou>. $P$ est fermé dans $\Omega$. $\square$

## Exemples

* **Zéros d'une fonction holomorphe.** Soit $\Omega$ connexe et $f\in\Hol(\Omega)$ non identiquement nulle. Ses zéros sont isolés ([[ch01-zeros-isoles]]) et l'ensemble $\mathcal Z(f,\Omega)=f^{-1}(\{0\})$ (noté $Z(f,\Omega)$ au chapitre I) est fermé dans $\Omega$ ($f$ continue). Donc (1) est vérifiée et $\mathcal Z(f,\Omega)$ est localement fini dans $\Omega$ ([[ch01-ensemble-zeros-discret-ferme]]) : **sur tout compact de $\Omega$, $f$ n'a qu'un nombre fini de zéros**. Exemple : $\sin$ a une infinité de zéros $k\pi$ dans $\C$, mais un nombre fini dans chaque disque $\bar D(0,R)$.
* **$\sin(1/z)$ sur $\C^\times$.** Ses zéros $\frac1{k\pi}$, $k\in\Z^\times$, sont localement finis dans $\C^\times$ (critère (3) : leur seul point d'accumulation est $0\notin\C^\times$). Dans $\Omega=\C$, la fonction n'est pas définie en $0$ et l'ensemble n'est pas localement fini : (3) échoue en $0$.
* **Le réseau $\Z+i\Z$.** Pas de point d'accumulation dans $\C$ (deux points distincts sont à distance $\ge1$), donc localement fini dans $\C$ par (3) ; directement par (2) : $\bar D(0,R)$ contient au plus $(2R+1)^2$ points du réseau.
* **Contre-exemple (H2).** $P=\{1/n\}$ dans $\C$ : (1) échoue (non fermé), (2) échoue en $0$, (3) échoue ($0$ point d'accumulation). Les trois conditions tombent ensemble, comme l'affirme l'équivalence.

## Pièges

* > ⚠️ Ne pas écrire « discret $\Rightarrow$ localement fini » : il manque « fermé dans $\Omega$ ». Contre-exemple $\{1/n\}$ dans $\C$.
* « Fermé dans $\Omega$ » n'est pas « fermé dans $\C$ » : $\{1/n\}$ est fermé dans $\C^\times$, pas dans $\C$. Le critère (3) le dit autrement : seuls comptent les points d'accumulation **situés dans $\Omega$**.
* Dans (3)$\Rightarrow$(2), il faut une suite de points **deux à deux distincts** : une suite constante $x_n=a$ converge mais ne fournit pas de point d'accumulation.
* La proposition est la clé pour vérifier qu'un ensemble de pôles est localement fini : en pratique, on vérifie (3) (« les pôles ne s'accumulent pas dans $\Omega$ ») plutôt que (2).
* Localement fini n'est pas fini : $\Z$, les pôles $k\pi$ de $1/\sin$ ; c'est en intersectant avec un compact (par exemple l'intérieur d'un contour) qu'on obtient un nombre fini de pôles ([[ch02-support-fini-remarque]]).
