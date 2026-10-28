---
id: ch03-famille-localement-uniformement-bornee
type: definition
chapter: 3
title: Famille localement uniformément bornée
ref: Définition III.3.1
page: 64
importance: 2
depends: [ch01-def-holomorphe]
tags: [montel, famille, borne, localement-uniforme, compact]
---
## Intuition

> 💡 On ne regarde plus **une** fonction mais toute une **famille** $\mathcal F$ de fonctions holomorphes. Elle est *localement uniformément bornée* si, autour de chaque point, on peut tracer un petit « couvercle » de hauteur $C$ sous lequel **toutes** les fonctions de la famille restent simultanément : $|f|\le C$ près du point, pour toute $f\in\mathcal F$.

Deux mots sont essentiels. « **Uniformément** » : la même constante $C$ sert pour toutes les $f\in\mathcal F$. « **Localement** » : $C$ peut dépendre du point (et grossir quand on s'approche du bord de $\Omega$) ; on ne demande **pas** une borne sur tout $\Omega$.

C'est l'hypothèse « facile à vérifier » du [[ch03-montel|théorème de Montel]], qui la transforme en une propriété de compacité (famille normale, [[ch03-famille-normale]]).

Rappel : $\Hol(\Omega)$ désigne l'ensemble des fonctions holomorphes sur l'ouvert $\Omega$ ([[ch01-def-holomorphe]]) ; un **voisinage** de $x$ est une partie de $\Omega$ contenant un disque $D(x,\rho)$, $\rho>0$.

## Énoncé

**Définition (poly, Définition III.3.1, p. 64).** Soit $\Omega$ un ouvert de $\C$. Une famille de fonctions $\mathcal F\subset\Hol(\Omega)$ est **localement uniformément bornée** si pour tout $x\in\Omega$, il existe un voisinage $U_x$ et une constante $C>0$ (dépendant évidemment du voisinage choisi) tels que $|f(z)|\le C$ pour tout $f\in\mathcal F$ et tout $z\in U_x$.

**Reformulation (poly, Remarque III.3.2, p. 64 — voir [[ch03-bornee-sur-compacts]]).** Comme dans la proposition III.1.2, c'est équivalent à : pour tout compact $K\subset\Omega$, il existe une constante $C=C(K)>0$ telle que $|f(z)|\le C$ pour tout $f\in\mathcal F$ et tout $z\in K$.

En quantificateurs :
$$
\forall K\subset\Omega\text{ compact},\ \exists C(K)>0,\ \forall f\in\mathcal F,\ \forall z\in K,\quad |f(z)|\le C(K),
$$
autrement dit $\sup_{f\in\mathcal F}\sup_{z\in K}|f(z)|<+\infty$ pour tout compact $K\subset\Omega$.

## Hypothèses

### H1 — l'ordre des quantificateurs : $C$ est choisi avant $f$

**Rôle.** C'est tout le sens du mot « uniformément » : $\exists C\ \forall f$. Si l'on échange en $\forall f\ \exists C$, on obtient seulement que **chaque** fonction est localement bornée, ce qui est automatique pour une fonction continue et n'apporte rien.

**Si on l'inverse.** La famille $\{z\mapsto nz,\ n\in\N\}$ sur $\Omega=\C$ : chaque fonction est bornée sur chaque disque, mais pour tout voisinage $U_0\supset D(0,\rho)$ de $0$, $\sup_{z\in U_0}|nz|\ge n\rho\to+\infty$ : elle n'est **pas** localement uniformément bornée (et elle n'est pas normale : en $z=1$, $nz=n$ diverge).

### H2 — « localement » : $C$ dépend du voisinage

**Rôle.** Pour les ouverts non bornés ou au voisinage du bord, on ne peut pas espérer de borne globale, et Montel n'en a pas besoin.

**Si on exige une borne globale.** On obtient une notion strictement plus forte : $\{z\mapsto nz^n,\ n\ge1\}$ sur $D=D(0,1)$ est localement uniformément bornée (sur $\bar D(0,\rho)$, $\rho<1$, on a $|nz^n|\le n\rho^n\le\sup_{k\ge1}k\rho^k<+\infty$ car $k\rho^k\to0$) mais $\sup_{z\in D}|nz^n|=n$ n'est pas borné en $n$.

## Exemples

* **Fonctions à valeurs dans le disque.** $\mathcal F=\{f\in\Hol(\Omega) : f(\Omega)\subset D(0,1)\}$ est (globalement, donc localement) uniformément bornée par $C=1$. Elle contient la famille $\Sigma=\{f\in\Hol(\Omega) : f(\Omega)\subset D(0,1),\ f\text{ injective}\}$ utilisée dans la preuve du théorème de Riemann ([[ch03-riemann-representation-conforme]]), qui est donc elle aussi uniformément bornée par $1$.
* **Puissances.** $\{z^n,\ n\ge0\}$ sur $D(0,1)$ : $|z^n|\le1$, bornée par $1$. Sur $D(0,2)$, elle n'est **pas** localement uniformément bornée : au voisinage de $x=3/2$, $|x^n|=(3/2)^n\to+\infty$.
* **Exponentielles.** $\{z\mapsto e^{nz},\ n\in\N\}$ sur le demi-plan $\{\Re(z)<0\}$ : $|e^{nz}|=e^{n\Re(z)}\le1$. Sur $\{\Re(z)>0\}$ elle n'est pas localement uniformément bornée ($e^{n x}\to+\infty$ pour $x>0$).
* **Exemple local non global** : $\{nz^n\}$ sur $D(0,1)$ (voir H2).

## Pièges

* > ⚠️ Ne pas confondre « chaque $f\in\mathcal F$ est bornée localement » (toujours vrai) et « la famille est localement **uniformément** bornée » (une seule constante pour toute la famille, sur chaque compact).
* La constante dépend du compact $K$ : il est faux d'en déduire une borne sur tout $\Omega$ (exemple $\{nz^n\}$ sur $D(0,1)$).
* Pour vérifier la propriété, il suffit de la vérifier sur des disques fermés $\bar D(x,\rho)\subset\Omega$ (tout compact est recouvert par un nombre fini de tels disques) : c'est la reformulation [[ch03-bornee-sur-compacts]].
* La famille peut être infinie non dénombrable ; la définition ne fait intervenir aucune suite.
