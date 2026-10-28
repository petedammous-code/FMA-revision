---
id: ch02-pole-meromorphe-def
type: definition
chapter: 2
title: Pôle, multiplicité, fonction méromorphe, $\mathcal M(\Omega)$, $\mathcal Z(f,\Omega)$, $\mathcal P(f,\Omega)$
ref: Définition II.4.2
page: 43
importance: 3
depends: [ch02-discret-accumulation-localement-fini-def, ch01-def-holomorphe, ch01-def-multiplicite-zero]
tags: [pole, meromorphe, multiplicite, ordre, singularite, zeros, M(Omega)]
---
## Intuition

> 💡 Un **pôle** est un point où une fonction holomorphe « explose » de façon **polynomiale** : $|f(z)|$ tend vers $+\infty$ comme $1/|z-z_0|^m$, ni plus vite, ni plus lentement. L'entier $m$ est la **multiplicité** du pôle : on peut « éteindre » l'explosion en multipliant par $(z-z_0)^m$, et $m$ est le plus petit exposant qui y parvient. Une fonction **méromorphe** est une fonction holomorphe partout sauf en des points isolés qui ne s'entassent nulle part dans $\Omega$, et où elle a au pire des pôles.

Image mentale : $1/z$ a un pôle simple en $0$ (explosion en $1/|z|$), $1/z^3$ un pôle triple ; $\tan z=\sin z/\cos z$ est méromorphe sur $\C$ avec des pôles simples en $\frac\pi2+k\pi$. En revanche $e^{1/z}$ explose « plus vite que toute puissance » le long de $\R_+$ : ce n'est pas un pôle mais une **singularité essentielle** ([[ch02-classification-singularites]]), et $e^{1/z}$ n'est pas méromorphe au voisinage de $0$.

Les pôles d'une fonction méromorphe sont le pendant des zéros d'une fonction holomorphe ([[ch01-def-multiplicite-zero]]) : un zéro d'ordre $m$ de $f$ est un pôle d'ordre $m$ de $1/f$ ([[ch02-meromorphes-operations]]). Vocabulaire : « $f$ **se prolonge** en une fonction holomorphe en $z_0$ » signifie qu'il existe $\tilde f$ holomorphe sur un voisinage de $z_0$ avec $\tilde f=f$ hors de $z_0$ ; « $g$ est **bornée au voisinage de $z_0$** » signifie qu'il existe $r>0$ et $M$ avec $|g|\le M$ sur $D(z_0,r)\setminus\{z_0\}$ ; un **voisinage épointé** de $z_0$ est un ensemble de la forme $D(z_0,r)\setminus\{z_0\}$, noté $D(z_0,r)^\times$ ; « partie localement finie » : [[ch02-discret-accumulation-localement-fini-def]].

## Énoncé

**Définition (poly, Définition II.4.2, p. 43).** Soit $f:\Omega\setminus\{z_0\}\to\C$ une fonction holomorphe. On dit que $z_0$ est un **pôle** de $f$ si :

* (i) $f$ ne se prolonge pas en une fonction holomorphe en $z_0$ ;
* (ii) il existe un entier $m\in\N\setminus\{0\}$ tel que $(z-z_0)^mf$ est bornée au voisinage de $z_0$.

Le plus petit entier $m$ vérifiant (ii) est appelé la **multiplicité** (ou l'**ordre**) du pôle $z_0$, et noté $m(z_0)$. De manière équivalente, $m(z_0)$ est l'unique entier $m\ge1$ tel que l'on puisse écrire
$$
f(z)=(z-z_0)^{-m}h(z)
$$
sur un voisinage épointé de $z_0$, avec $h$ holomorphe en $z_0$ et $h(z_0)\neq0$. Un pôle de multiplicité $1$ est dit **simple**.

Une fonction $f$ est **méromorphe** sur $\Omega$ si $f$ est holomorphe en dehors d'une partie $P$ localement finie de $\Omega$ et si les points de $P$ vérifient la condition (ii) ci-dessus, de sorte que ce sont soit des points où la fonction se prolonge en une fonction holomorphe, soit des pôles de $f$.

On note $\mathcal M(\Omega)$ l'espace des fonctions méromorphes sur $\Omega$. Si $f\in\mathcal M(\Omega)$, on note $\mathcal Z(f,\Omega)$ l'ensemble de ses zéros dans $\Omega$ et $\mathcal P(f,\Omega)$ l'ensemble de ses pôles dans $\Omega$. Lorsque ces ensembles sont finis, on note
$$
Z(f,\Omega):=\sum_{s\in\mathcal Z(f,\Omega)}m(s)\qquad\text{et}\qquad P(f,\Omega):=\sum_{s\in\mathcal P(f,\Omega)}m(s)
$$
le nombre de zéros et le nombre de pôles de $f$ dans $\Omega$, **comptés avec leur multiplicité**. Les mêmes notations seront employées en remplaçant $\Omega$ par n'importe quel ouvert sur lequel $f$ est méromorphe.

## Hypothèses

### H1 — Justification du « de manière équivalente » (condition cachée)

**Rôle.** Le poly affirme sans preuve que $m(z_0)$ est l'unique $m\ge1$ tel que $f=(z-z_0)^{-m}h$ avec $h$ holomorphe en $z_0$, $h(z_0)\ne0$. Cela repose sur le développement de Laurent ([[ch02-laurent-developpement]]) ou sur le théorème de Riemann ([[ch02-singularite-effacable-riemann]]), énoncés après la définition.

**Si on la retire.** Voici l'argument. *Sens direct :* si $f=(z-z_0)^{-m}h$ sur $D(z_0,r)^\times$ avec $h$ holomorphe en $z_0$ et $h(z_0)\neq0$, alors $(z-z_0)^mf=h$ est bornée près de $z_0$ (continuité de $h$), donc (ii) est vraie pour $m$ ; par continuité, $|h|\ge|h(z_0)|/2$ sur un petit disque, donc $|(z-z_0)^{m-1}f|=|h|/|z-z_0|\ge\frac{|h(z_0)|}{2|z-z_0|}$ n'est pas bornée : (ii) est fausse pour $m-1$, donc pour tout $m'\le m-1$ (si $(z-z_0)^{m'}f$ était bornée, $(z-z_0)^{m-1}f=(z-z_0)^{m-1-m'}\cdot(z-z_0)^{m'}f$ le serait aussi). Ainsi $m$ est le plus petit entier vérifiant (ii) ; et $|f|\to+\infty$ en $z_0$, donc $f$ ne se prolonge pas continûment, a fortiori pas holomorphiquement : (i) est vraie. *Réciproque :* si $z_0$ est un pôle de multiplicité $m=m(z_0)$, la fonction $g=(z-z_0)^mf$ est holomorphe et bornée sur un disque épointé, donc se prolonge en une fonction $h$ holomorphe en $z_0$ (Riemann, [[ch02-singularite-effacable-riemann]]). Si l'on avait $h(z_0)=0$, on écrirait $h=(z-z_0)\tilde h$ avec $\tilde h$ holomorphe ([[ch01-def-multiplicite-zero]]), et $(z-z_0)^{m-1}f=\tilde h$ serait bornée près de $z_0$ : pour $m\ge2$ cela contredit la minimalité de $m$, et pour $m=1$ cela dit que $f=\tilde h$ se prolonge holomorphiquement, contredisant (i). Donc $h(z_0)\neq0$. L'unicité de $m$ vient du sens direct.

### H2 — $P$ localement finie dans $\Omega$ (condition cachée)

**Rôle.** C'est ce qui garantit que, sur tout compact de $\Omega$, $f$ n'a qu'un nombre fini de pôles ([[ch02-localement-fini-caracterisations]]) : indispensable pour la formule des résidus ([[ch02-formule-residus]], [[ch02-support-fini-remarque]]) et pour que chaque pôle soit entouré d'un disque épointé où $f$ est holomorphe (développement de Laurent).

**Si on la retire.** $f(z)=\dfrac1{\sin(1/z)}$ est holomorphe sur $\C$ privé de $\{0\}\cup\{\frac1{k\pi}:k\in\Z^\times\}$, avec des pôles simples en $\frac1{k\pi}$ (zéros simples de $\sin(1/z)$ : sa dérivée $-\cos(1/z)/z^2$ vaut $-(-1)^kk^2\pi^2\ne0$ en $\frac1{k\pi}$). Ces pôles s'accumulent en $0$ : aucune partie localement finie de $\C$ ne les contient, et $f$ n'est **pas** méromorphe sur $\C$ ; elle l'est sur $\C^\times$, où $\{\frac1{k\pi}\}$ est localement fini.

### H3 — La condition (ii) : explosion au plus polynomiale (condition cachée)

**Rôle.** Elle exclut les singularités essentielles et assure l'existence d'un développement de Laurent à partie polaire **finie** ([[ch02-laurent-developpement]]), donc d'un résidu ([[ch02-residu-def]]).

**Si on la retire.** $f(z)=\sin(1/z)$ sur $\C^\times$ : pour tout $m\ge1$ et $z=iy$, $y>0$, on a $\sin(1/(iy))=\sin(-i/y)=-i\sinh(1/y)$, donc $|z^m f(z)|=y^m\sinh(1/y)\xrightarrow[y\to0^+]{}+\infty$ (car $\sinh(1/y)\sim\frac12e^{1/y}$). Aucun $z^m\sin(1/z)$ n'est borné près de $0$ : $0$ n'est ni un pôle ni une fausse singularité, et $\sin(1/z)$ n'est pas méromorphe au voisinage de $0$ ([[ch02-classification-singularites]]).

## Exemples

* **Pôles élémentaires.** $f(z)=1/z$ : $z\cdot f=1$ bornée, $f$ non bornée près de $0$ : pôle simple, $m(0)=1$. $f(z)=\dfrac{e^z}{z^2}$ : $z^2f=e^z$ bornée près de $0$, $z f=e^z/z$ non bornée ($|e^z|\to1$) : pôle double, $h(z)=e^z$, $h(0)=1\ne0$. $f(z)=\dfrac{1}{(z-1)^3}$ : pôle triple en $1$.
* **Fausse singularité.** $f(z)=\dfrac{1-\cos z}{z^2}$ sur $\C^\times$ : $1-\cos z=\frac{z^2}2-\frac{z^4}{24}+\dots$, donc $f(z)=\frac12-\frac{z^2}{24}+\dots$ se prolonge en une fonction holomorphe sur $\C$ (valeur $\frac12$ en $0$). On peut mettre $0$ dans $P$ (la condition (ii) est vérifiée avec $m=1$), mais $0\notin\mathcal P(f,\C)$ : $\mathcal P(f,\Omega)\subset P$ sans égalité ([[ch02-fausses-singularites-remarque]]). $f$ est méromorphe sur $\C$ (et même holomorphe après prolongement).
* **Fonctions méromorphes usuelles.** $\tan=\sin/\cos$ est méromorphe sur $\C$ : $P=\{\frac\pi2+k\pi:k\in\Z\}$ est localement fini (ses points sont espacés de $\pi$), et en $z_k=\frac\pi2+k\pi$, $\cos$ a un zéro simple ($\cos'(z_k)=-\sin(z_k)=\mp1\neq0$), donc $\cos z=(z-z_k)u(z)$ avec $u(z_k)\neq0$ et $(z-z_k)\tan z=\sin z/u(z)$ est bornée près de $z_k$ : pôles simples. De même $1/\sin$, $\cot$, $1/(e^z-1)$ (pôles simples en $2ik\pi$) et toute fraction rationnelle $A/B$ (pôles = zéros de $B$ non compensés). Toute fonction holomorphe est méromorphe ($P=\emptyset$).
* **Comptage.** $f(z)=\dfrac{z^2}{(z-1)(z-2)^2}$ sur $\Omega=D(0,3)$ : $\mathcal Z(f,\Omega)=\{0\}$ avec $m(0)=2$, $\mathcal P(f,\Omega)=\{1,2\}$ avec $m(1)=1$, $m(2)=2$ ; donc $Z(f,\Omega)=2$ et $P(f,\Omega)=3$. Sur $\Omega'=D(0,3/2)$ : $Z=2$, $P=1$ ; ces nombres dépendent de l'ouvert, d'où la notation.

## Pièges

* > ⚠️ Un pôle exige **(i) et (ii)** : (ii) seule autorise les fausses singularités (points où $f$ se prolonge holomorphiquement). Avant de déclarer « pôle », vérifier que $f$ n'est pas bornée près du point, par exemple $|f|\to+\infty$.
* La multiplicité est le **plus petit** $m$ : $z^5\cdot\frac1z$ est borné, mais le pôle de $1/z$ est simple. Dans l'écriture $f=(z-z_0)^{-m}h$, la condition $h(z_0)\neq0$ est essentielle.
* « Méromorphe sur $\Omega$ » dépend de $\Omega$ : $1/\sin(1/z)$ est méromorphe sur $\C^\times$, pas sur $\C$. La partie $P$ doit être localement finie **dans $\Omega$** ; les accumulations sur $\partial\Omega$ sont permises.
* Une singularité essentielle ($e^{1/z}$, $\sin(1/z)$) n'est pas un pôle, et une fonction qui en possède une n'est pas méromorphe au voisinage de ce point.
* Les zéros d'une fonction méromorphe se comptent après avoir prolongé $f$ aux fausses singularités ; leur multiplicité est celle de [[ch01-def-multiplicite-zero]]. $Z(f,\Omega)$ et $P(f,\Omega)$ ne sont définis que si les ensembles correspondants sont finis. C'est automatique pour les pôles si $\bar\Omega$ est un compact contenu dans un ouvert $\Omega'$ où $f$ est méromorphe (partie $P$ localement finie dans $\Omega'$, [[ch02-localement-fini-caracterisations]]) ; pour les zéros il faut de plus que $f$ ne soit identiquement nulle sur aucune composante connexe de $\Omega'$ (sinon $\mathcal Z(f,\Omega)$ peut être infini, et même contenir un ouvert).
* Ne pas confondre $\mathcal P(f,\Omega)$ (un ensemble), $P(f,\Omega)$ (un entier) et $P$ (la partie localement finie de la définition, qui peut contenir des fausses singularités).
