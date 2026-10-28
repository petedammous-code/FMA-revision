---
id: ch02-singularite-effacable-riemann
type: corollary
chapter: 2
title: Singularité effaçable (théorème de Riemann)
ref: Corollaire II.4.7
page: 45
importance: 3
depends: [ch02-laurent-developpement, ch02-pole-meromorphe-def]
tags: [riemann, singularite effacable, prolongement, laurent, pole, borne]
---
## Intuition

> 💡 Une fonction holomorphe autour d'un point « troué » $z_0$ ne peut pas avoir de comportement bizarre **borné** en $z_0$ : soit elle explose (pôle, ou pire), soit le trou est une illusion et l'on peut le **boucher** par une valeur qui rend la fonction holomorphe. Être bornée suffit : on n'a même pas besoin de savoir *a priori* que $f$ a une limite en $z_0$.

Pourquoi ? Près de $z_0$, une fonction méromorphe s'écrit comme un développement de Laurent $\sum_{n\ge-m}a_n(z-z_0)^n$ ([[ch02-laurent-developpement]]). S'il reste une puissance négative, la plus négative $\dfrac{a_{-k}}{(z-z_0)^k}$ domine tout le reste et fait exploser $|f|$. Bornée $\Rightarrow$ aucune puissance négative $\Rightarrow$ série entière $\Rightarrow$ holomorphe en $z_0$.

Rappels : $f$ est **méromorphe** sur $\Omega$ si elle est holomorphe en dehors d'une partie $P$ localement finie de $\Omega$, chaque point $z_0\in P$ vérifiant la condition (ii) : $(z-z_0)^mf$ est bornée près de $z_0$ pour un entier $m\ge1$ ([[ch02-pole-meromorphe-def]]). Un **pôle** est un point de $P$ où $f$ ne se prolonge pas holomorphiquement. « $f$ se prolonge en une fonction holomorphe en $z_0$ » signifie : il existe $c\in\C$ tel que la fonction égale à $f$ hors de $z_0$ et à $c$ en $z_0$ soit holomorphe sur un voisinage de $z_0$. On parle alors de **singularité effaçable** (ou fausse singularité).

## Énoncé

**Corollaire (poly, Corollaire II.4.7, p. 45) — Singularité effaçable (Riemann).** Avec les notations ci-dessus ($f$ méromorphe sur $\Omega$, $P$ la partie localement finie de la Définition II.4.2), soit $z_0\in P$ et supposons que la fonction $f$ reste bornée au voisinage de $z_0$ (par exemple si $f$ se prolonge par continuité en $z_0$). Alors $f$ se prolonge en une fonction holomorphe en $z_0$.

**Portée (forme usuelle du théorème de Riemann).** Si $f$ est holomorphe sur $\Omega\setminus\{z_0\}$ et bornée au voisinage de $z_0$, alors $(z-z_0)f$ est bornée au voisinage de $z_0$ : la condition (ii) est satisfaite avec $m=1$, donc $f$ est méromorphe sur $\Omega$ avec $P=\{z_0\}$ (un singleton est localement fini) et le corollaire s'applique. Ainsi : **toute fonction holomorphe sur un disque épointé $D(z_0,r)^\times$ et bornée se prolonge holomorphiquement à $D(z_0,r)$.**

## Hypothèses

### H1 — $f$ holomorphe sur un voisinage épointé de $z_0$ (ici : $f$ méromorphe, $z_0\in P$)

**Rôle.** C'est ce qui donne le développement de Laurent $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ sur un disque épointé $D(z_0,r)^\times$ ([[ch02-laurent-developpement]]), donc toute la preuve. La locale finitude de $P$ assure que $z_0$ est la seule singularité dans un petit disque.

**Si on la retire.** L'analogue est faux pour des fonctions seulement régulières au sens réel :
* $f(z)=|z|$ sur $\C^\times$ est $C^\infty$ (au sens réel), bornée près de $0$, se prolonge même par continuité en $0$, mais aucun prolongement n'est holomorphe (elle n'est holomorphe nulle part : une fonction holomorphe à valeurs réelles sur un ouvert connexe est constante).
* $f(z)=\dfrac{\bar z}{z}$ sur $\C^\times$ est $C^\infty$ au sens réel et de module $1$, mais n'a même pas de limite en $0$ (elle vaut $1$ sur $\R_{>0}$ et $-1$ sur $i\R_{>0}$, car $\overline{iy}/(iy)=-1$).
* En variable réelle : $x\mapsto|x|$ est bornée et $C^\infty$ sur $\R^\times$ mais ne se prolonge pas en une fonction dérivable en $0$.

### H2 — $f$ bornée au voisinage de $z_0$

**Rôle.** Elle interdit tout coefficient $a_n\neq0$ avec $n\le-1$ dans le développement de Laurent, car un tel coefficient force $|f(z)|\to+\infty$.

**Si on la retire.** $f(z)=\dfrac1z$ (pôle simple en $0$) : $|f(z)|\to+\infty$, aucun prolongement continu. $f(z)=e^{1/z}$ sur $\C^\times$ (singularité essentielle, $f$ n'est pas méromorphe sur $\C$) : $f(x)=e^{1/x}\to+\infty$ quand $x\to0^+$, donc $f$ n'est pas bornée et ne se prolonge pas. Pour $e^{1/z}$ on ne peut même pas invoquer le corollaire, puisque H1 (méromorphie) est aussi en défaut ; le théorème de Riemann « usuel » (Portée) ne demande que l'holomorphie sur le disque épointé et la bornitude.

## Idée de la preuve

On écrit le développement de Laurent $f=\sum_{n\ge-m}a_n(z-z_0)^n$ sur $D(z_0,r)^\times$. S'il existait $n\le-1$ avec $a_n\neq0$, $z_0$ serait un pôle d'ordre $k\ge1$ et $|f(z)|\ge c\,|z-z_0|^{-k}\to+\infty$ : contradiction. Donc le développement est une série entière, dont la somme prolonge $f$ holomorphiquement.

## Preuve

Par la Proposition II.4.6 ([[ch02-laurent-developpement]]), il existe $m\in\N$ et $r>0$ tels que
$$
f(z)=\sum_{n\ge-m}a_n(z-z_0)^n\qquad\text{pour }z\in D(z_0,r)^\times=D(z_0,r)\setminus\{z_0\}.
$$

*Il n'y a pas de puissance négative.* Raisonnons par l'absurde et supposons qu'il existe $n\le-1$ avec $a_n\neq0$. Posons $k:=-\min\{n\,;\,a_n\neq0\}$ : comme seuls des indices $n\ge-m$ apparaissent, ce minimum existe et $1\le k\le m$. Sur $D(z_0,r)^\times$,
$$
(z-z_0)^kf(z)=\sum_{n\ge-k}a_n(z-z_0)^{n+k}=a_{-k}+\sum_{j\ge1}a_{j-k}(z-z_0)^j=:u(z),
$$
où $u$ est la somme d'une série entière convergente sur $D(z_0,r)$ (elle converge sur $D(z_0,r)^\times$, donc sur tout $D(z_0,\rho)$, $\rho<r$), donc continue en $z_0$, avec $u(z_0)=a_{-k}\neq0$. Par continuité, il existe $\rho\in]0,r[$ tel que $|u(z)|\ge|a_{-k}|/2$ sur $D(z_0,\rho)$. Alors, pour $0<|z-z_0|<\rho$,
$$
|f(z)|=\frac{|u(z)|}{|z-z_0|^k}\ge\frac{|a_{-k}|}{2\,|z-z_0|^k}\xrightarrow[z\to z_0]{}+\infty ,
$$
ce qui contredit l'hypothèse « $f$ bornée au voisinage de $z_0$ ». (C'est exactement la dernière assertion de la Proposition II.4.6 : un coefficient négatif non nul fait de $z_0$ un pôle, où $|f|\to+\infty$.)

*Conclusion.* Donc $a_n=0$ pour tout $n\le-1$, et $f(z)=\sum_{n\ge0}a_n(z-z_0)^n$ sur $D(z_0,r)^\times$. Cette série entière converge en tout point de $D(z_0,r)^\times$, donc son rayon de convergence est $\ge r$ ; sa somme $F$ est holomorphe sur $D(z_0,r)$ ([[ch01-serie-entiere-holomorphe]]) et coïncide avec $f$ hors de $z_0$. En posant $f(z_0):=F(z_0)=a_0$, on obtient le prolongement holomorphe cherché. $\square$

*Remarque.* Si $f$ se prolonge par continuité en $z_0$, elle est bornée sur un voisinage de $z_0$ (une fonction continue en un point est bornée près de ce point), d'où le cas particulier de l'énoncé ; et la valeur du prolongement holomorphe est nécessairement $a_0=\lim_{z\to z_0}f(z)$.

## Preuve à trous

Par [[ch02-laurent-developpement]], $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ sur $D(z_0,r)^\times$. Supposons qu'il existe $n\le-1$ avec $a_n\neq0$ et posons $k:=-\min\{n\,;\,a_n\neq0\}\ge1$. Alors <trou indice="multiplier f par la bonne puissance de (z−z0)">$(z-z_0)^kf(z)=u(z)$ où $u$ est une série entière convergente sur $D(z_0,r)$, avec $u(z_0)=a_{-k}\neq0$</trou>. Par continuité de $u$, <trou indice="minorer |u| près de z0 et en déduire le comportement de |f|">$|u|\ge|a_{-k}|/2$ près de $z_0$, donc $|f(z)|\ge\dfrac{|a_{-k}|}{2|z-z_0|^k}\to+\infty$</trou>, ce qui contredit la bornitude de $f$. Donc <trou>$a_n=0$ pour tout $n\le-1$ et $f$ coïncide sur $D(z_0,r)^\times$ avec la somme d'une série entière de rayon $\ge r$</trou>, qui est holomorphe sur $D(z_0,r)$ : on prolonge $f$ en posant $f(z_0)=a_0$. $\square$

## Exemples

* **$\dfrac{\sin z}{z}$ en $0$.** Holomorphe sur $\C^\times$ et, sur $\C^\times$, $\dfrac{\sin z}{z}=\sum_{k\ge0}\dfrac{(-1)^kz^{2k}}{(2k+1)!}$, donc bornée sur $D(0,1)^\times$ (par $\sum_k\frac1{(2k+1)!}=\sinh 1$). Riemann : elle se prolonge en une fonction entière, de valeur $1$ en $0$.
* **Le taux d'accroissement.** Si $f\in\Hol(\Omega)$ et $\zeta\in\Omega$, la fonction $z\mapsto\dfrac{f(z)-f(\zeta)}{z-\zeta}$ est holomorphe sur $\Omega\setminus\{\zeta\}$ et tend vers $f'(\zeta)$ en $\zeta$, donc est bornée près de $\zeta$ : elle se prolonge en une fonction holomorphe sur $\Omega$ (de valeur $f'(\zeta)$ en $\zeta$). C'est l'usage le plus fréquent du théorème.
* **Croissance plus lente que $1/|z|$.** Soit $f$ holomorphe sur $D(0,1)^\times$ avec $|f(z)|\le C|z|^{-1/2}$. Alors $g(z):=zf(z)$ vérifie $|g(z)|\le C|z|^{1/2}$ : elle est bornée, donc se prolonge holomorphiquement en $0$ (Riemann), avec $g(0)=\lim_{z\to0}g(z)=0$. Ainsi $g(z)=z\,g_1(z)$ avec $g_1$ holomorphe sur $D(0,1)$ ($g_1(z)=\sum_{n\ge1}b_nz^{n-1}$ si $g=\sum_{n\ge1}b_nz^n$), et $f=g_1$ hors de $0$ : **$f$ elle-même** se prolonge holomorphiquement. Plus généralement, si $|z-z_0|\,|f(z)|\to0$, la singularité est effaçable.

## Pièges

* > ⚠️ En analyse complexe, « bornée près de $z_0$ » suffit à prolonger **holomorphiquement** ; en analyse réelle, rien de tel ($|x|$, $x\sin(1/x)$). Ne pas transposer l'intuition réelle.
* Il faut l'holomorphie sur **tout** un disque épointé autour de $z_0$ : si $z_0$ est un point d'accumulation de pôles (par exemple $0$ pour $1/\sin(1/z)$), il n'y a ni développement de Laurent ni théorème de Riemann.
* Ne pas confondre « bornée » avec « a une limite » : la bornitude suffit, et l'existence de la limite en est une **conséquence**.
* Pour montrer qu'un point est un **pôle**, il faut à la fois que $f$ ne soit pas bornée (sinon Riemann efface la singularité) **et** que $(z-z_0)^mf$ le soit pour un $m$ (sinon singularité essentielle, [[ch02-classification-singularites]]).
* Dans la preuve, on n'utilise pas de résultat « magique » : tout repose sur le développement de Laurent (Proposition II.4.6), dont la preuve contient déjà l'essentiel du travail (estimées de Cauchy).
