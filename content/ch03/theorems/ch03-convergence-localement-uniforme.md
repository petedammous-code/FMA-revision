---
id: ch03-convergence-localement-uniforme
type: definition
chapter: 3
title: Convergence localement uniforme ; suite localement uniformément de Cauchy
ref: Définition III.1.1
page: 59
importance: 2
depends: [ch01-sens-de-local]
tags: [convergence-uniforme, localement-uniforme, cauchy, suites-de-fonctions, definition]
---
## Intuition

> 💡 Converger **uniformément** sur un ensemble $U$, c'est converger « à la même vitesse partout sur $U$ » : l'écart maximal $\sup_{z\in U}|f_n(z)-f(z)|$ tend vers $0$. Converger **localement uniformément** sur $\Omega$, c'est seulement exiger cela **près de chaque point**, sur un petit voisinage qui peut dépendre du point.

Image mentale : $f_n(z)=z^n$ sur le disque unité $D(0,1)$. Sur tout disque $D(0,r)$ avec $r<1$, $|z^n|\le r^n\to0$ : la convergence vers $0$ y est uniforme. Mais près du cercle unité la convergence est de plus en plus lente, et sur $D(0,1)$ tout entier l'écart maximal reste égal à $1$. La convergence est donc localement uniforme sans être uniforme. C'est **la** bonne notion pour les fonctions holomorphes : c'est exactement ce que fournissent les séries entières, et c'est ce qui passe à la limite (théorème de Weierstraß [[ch03-weierstrass]]).

Notation du poly (début du chapitre III) : pour $h$ définie sur un ensemble $U$ à valeurs dans un espace vectoriel normé $(V,\norm{\cdot}_V)$, on note $\norm{h}_{\infty,U}=\sup_{x\in U}\norm{h(x)}_V$. Pour $V=\C$ : $\norm{h}_{\infty,U}=\sup_{z\in U}|h(z)|$.

Un **voisinage** de $x$ dans $\Omega$ est une partie de $\Omega$ qui contient un disque ouvert $D(x,r)$, $r>0$. « Localement » a le sens de la remarque I.4.6 ([[ch01-sens-de-local]]) : la propriété est vraie sur un voisinage de chaque point, pas forcément sur tout l'espace.

## Énoncé

**Définition (poly, Définition III.1.1, p. 59).** Soient $\Omega$ un ouvert de $\C$ et $(f_n)_{n\in\N}$ une suite de fonctions de $\Omega$ dans $\C$.

* On dit que la suite $(f_n)_{n\in\N}$ **converge localement uniformément** s'il existe une fonction $f:\Omega\to\C$ telle que, pour tout point $x\in\Omega$, il existe un voisinage $U_x$ de $x$ dans $\Omega$ tel que la suite $(f_n)_{n\in\N}$ converge uniformément sur $U_x$ vers $f$, c'est-à-dire $\norm{f_n-f}_{\infty,U_x}\to0$ quand $n\to+\infty$.
* On dit que la suite $(f_n)_{n\in\N}$ est **localement uniformément de Cauchy** si, pour tout point $x\in\Omega$, il existe un voisinage $U_x$ de $x$ dans $\Omega$ où la suite $(f_n)$ est uniformément de Cauchy sur $U_x$, autrement dit, si pour tout $\eps>0$, il existe $N\ge1$ tel que pour tous $p,q\ge N$, on a $|f_p(z)-f_q(z)|\le\eps$ pour tout $z\in U_x$.

Reformulation utile (poly, Proposition III.1.2, p. 59) : ces deux notions équivalent respectivement à la convergence uniforme sur **tout compact** $K\subset\Omega$ et au caractère uniformément de Cauchy sur tout compact ; voir [[ch03-convergence-uniforme-compacts]]. Et les deux notions de la définition sont équivalentes entre elles ([[ch03-cauchy-locale-equivaut-convergence]]).

## Hypothèses

### H1 — l'ordre des quantificateurs

Dans « converge localement uniformément », le voisinage $U_x$ dépend du point $x$ mais **pas** de $\eps$ ; ensuite le rang $N$ dépend de $\eps$ et de $x$ (via $U_x$) mais **pas** du point $z\in U_x$. Si l'on laissait $N$ dépendre de $z$, on retomberait sur la simple convergence ponctuelle, beaucoup plus faible.

### H2 — $\Omega$ ouvert

Comme $\Omega$ est ouvert, tout $x\in\Omega$ possède des voisinages de la forme $D(x,r)$ et même $\bar D(x,r)\subset\Omega$, qui sont compacts : c'est ce qui rend la notion équivalente à « uniforme sur tout compact » ([[ch03-convergence-uniforme-compacts]]).

### H3 — aucune régularité n'est demandée

La définition porte sur des fonctions quelconques $\Omega\to\C$. L'holomorphie des $f_n$ n'intervient que dans les théorèmes qui utilisent la notion (Weierstraß, Hurwitz, Montel).

## Exemples

* **$f_n(z)=z^n$ sur $\Omega=D(0,1)$.** Pour $x\in D(0,1)$, choisissons $r$ tel que $|x|<r<1$ et $U_x=D(0,r)$. Alors $\norm{f_n-0}_{\infty,U_x}=\sup_{|z|<r}|z|^n=r^n\to0$ : convergence localement uniforme vers $0$. Mais $\norm{f_n}_{\infty,D(0,1)}=\sup_{|z|<1}|z|^n=1$ pour tout $n$ : la convergence **n'est pas uniforme** sur $D(0,1)$.
* **Sommes partielles de l'exponentielle.** $S_n(z)=\sum_{k=0}^n z^k/k!$ sur $\Omega=\C$. Pour $x\in\C$, prenons $U_x=D(0,R)$ avec $R>|x|$. Pour $|z|<R$ : $|e^z-S_n(z)|=\big|\sum_{k>n}z^k/k!\big|\le\sum_{k>n}R^k/k!\to0$ (reste d'une série convergente). Convergence localement uniforme vers $e^z$. Elle n'est pas uniforme sur $\C$ : pour $x$ réel positif, $e^x-S_n(x)\ge x^{n+1}/(n+1)!\to+\infty$ quand $x\to+\infty$, donc $\norm{e^z-S_n}_{\infty,\C}=+\infty$.
* **Convergence simple non localement uniforme.** $f_n(z)=e^{-n|z|^2}$ sur $\C$ (fonctions non holomorphes, ce qui est permis ici). Elle converge simplement vers $f$ définie par $f(0)=1$ et $f(z)=0$ si $z\ne0$. Sur tout voisinage $U_0\supset D(0,\delta)$ de $0$, le point $z=1/\sqrt n$ appartient à $D(0,\delta)$ pour $n$ grand et $|f_n(z)-f(z)|=e^{-1}$ : donc $\norm{f_n-f}_{\infty,U_0}\ge e^{-1}$, pas de convergence uniforme près de $0$.

## Pièges

* > ⚠️ **Localement uniforme $\ne$ uniforme sur $\Omega$.** L'exemple $z^n$ sur $D(0,1)$ est à connaître par cœur : on a convergence uniforme sur chaque $\bar D(0,r)$, $r<1$, mais pas sur $D(0,1)$.
* « Uniforme sur tout compact » ne veut pas dire « uniforme sur tout fermé borné **de $\Omega$** » : $[0,1)$ est fermé dans $D(0,1)$ et borné, mais n'est pas compact, et $\sup_{[0,1)}x^n=1$.
* Une suite localement uniformément convergente a une limite qui est automatiquement la limite simple : $f(z)=\lim_n f_n(z)$ pour tout $z$. La fonction $f$ ne dépend donc pas des voisinages $U_x$ choisis.
* La limite d'une suite de fonctions **continues** convergeant localement uniformément est continue (la continuité est une propriété locale, et passe à la limite uniforme sur chaque $U_x$). L'exemple $e^{-n|z|^2}$ montre que c'est faux pour la seule convergence simple.
