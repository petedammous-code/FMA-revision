---
id: ch01-bijection-holomorphe-reciproque-holomorphe
type: proposition
chapter: 1
title: Une bijection holomorphe entre ouverts est un biholomorphisme ($f'$ ne s'annule pas)
ref: Remarque I.14.3
page: 33
importance: 2
depends: [ch01-inversion-locale-holomorphe, ch06-inversion-locale, ch01-estimees-cauchy, ch01-primitive-locale, ch01-application-ouverte, ch01-def-multiplicite-zero, ch01-def-biholomorphisme, ch01-stabilite-operations, ch01-exp-trigo-hyperboliques]
tags: [biholomorphisme, injectivite, application-ouverte, inversion-locale, racine-n-ieme]
---
## Intuition

> 💡 Près d'un point $z_0$ où $f'(z_0)=0$, une fonction holomorphe ressemble à $z\mapsto a_N(z-z_0)^N$ avec $N\ge2$ : elle **enroule** un petit disque $N$ fois autour de $f(z_0)$, donc elle prend $N$ fois chaque valeur proche de $f(z_0)$. Une fonction holomorphe **injective** ne peut donc pas avoir de dérivée nulle. Et dès que $f'\neq0$ partout, l'[[ch01-inversion-locale-holomorphe|inversion locale holomorphe]] fournit une réciproque holomorphe.

Conséquence pratique : pour vérifier qu'une fonction holomorphe est un **biholomorphisme** (bijection holomorphe à réciproque holomorphe, [[ch01-def-biholomorphisme]]), il suffit de vérifier qu'elle est **bijective**. Rien de tel en réel : $x\mapsto x^3$ est une bijection $C^\infty$ de $\R$ dont la réciproque $y\mapsto y^{1/3}$ n'est pas dérivable en $0$.

## Énoncé

**Proposition (poly, Remarque I.14.3, p. 33).** Soient $\Omega_1$ et $\Omega_2$ deux ouverts de $\C$ et $f:\Omega_1\to\Omega_2$ une bijection holomorphe. Alors $f'$ ne s'annule pas sur $\Omega_1$, et $f^{-1}$ est automatiquement holomorphe sur $\Omega_2$, de dérivée $(f^{-1})'=\dfrac1{f'\circ f^{-1}}$. Autrement dit, $f$ est un biholomorphisme de $\Omega_1$ sur $\Omega_2$.

## Hypothèses

### H1 — $f$ holomorphe

**Rôle.** Développement en série entière de $f$ près de $z_0$, construction de la racine $N$-ième holomorphe, application ouverte, inversion locale holomorphe : tout repose sur l'holomorphie.

**Si on la retire.** $f(x+iy)=x^3+iy$ est une bijection $C^\infty$ (au sens réel) de $\C$ sur $\C$ (réciproque $u+iv\mapsto u^{1/3}+iv$, racine cubique réelle), mais sa réciproque n'est pas différentiable aux points $u=0$ (car $u\mapsto u^{1/3}$ n'est pas dérivable en $0$). Sa jacobienne en $x=0$ est $\begin{pmatrix}0&0\\0&1\end{pmatrix}$, non inversible.

### H2 — $f$ injective

**Rôle.** C'est la seule propriété de la bijectivité utilisée pour montrer $f'\neq0$ ; l'injectivité sert aussi à identifier $f^{-1}$ aux inverses locaux.

**Si on la retire.** $f(z)=z^2$ de $\C$ sur $\C$ est holomorphe surjective, $f'(0)=0$, et n'a pas de réciproque. Plus subtil : $\exp:\C\to\C^\times$ est holomorphe, surjective, de dérivée $\exp$ jamais nulle, mais non injective ($e^{z+2i\pi}=e^z$) : elle n'a pas de réciproque globale, seulement des logarithmes locaux ([[ch01-exp-image-c-etoile-log-local]]). La réciproque « $f'\neq0\Rightarrow f$ injective » est **fausse**.

### H3 — $\Omega_1$, $\Omega_2$ ouverts

**Rôle.** On a besoin de $\Omega_1$ ouvert pour parler d'holomorphie, et de $\Omega_2$ ouvert pour parler d'holomorphie de $f^{-1}$.

**Si on la retire.** Pour $\Omega_2$, c'est une hypothèse de confort : si $f\in\Hol(\Omega_1)$ est injective, $f$ n'est constante sur aucune composante connexe de $\Omega_1$ (une composante est un ouvert non vide, donc infini), et le [[ch01-application-ouverte|théorème de l'application ouverte]] montre que $f(\Omega_1)$ est automatiquement ouvert.

## Idée de la preuve

Si $f'(z_0)=0$, on écrit $f-f(z_0)=h^N$ près de $z_0$ avec $N\ge2$ et $h$ holomorphe, $h(z_0)=0$ (racine $N$-ième via un logarithme sur $D(1,\tfrac12)$). Par l'application ouverte, $h$ atteint deux valeurs distinctes de même puissance $N$-ième : $f$ n'est pas injective. Donc $f'\neq0$, et l'inversion locale donne l'holomorphie de $f^{-1}$.

## Preuve

**Étape 1 : $f'$ ne s'annule pas.** Par l'absurde, soit $z_0\in\Omega_1$ avec $f'(z_0)=0$. Quitte à translater, on étudie $F:=f-f(z_0)$, holomorphe et injective sur $\Omega_1$, avec $F(z_0)=0$ et $F'(z_0)=0$.

*Développement.* Soit $\rho>0$ avec $D(z_0,\rho)\subset\Omega_1$. Par les [[ch01-estimees-cauchy]] (poly, Corollaire I.7.5, p. 22), $F(z)=\sum_{n\ge0}a_n(z-z_0)^n$ sur $D(z_0,\rho)$, avec $a_0=F(z_0)=0$ et $a_1=F'(z_0)=0$. Les $a_n$ ne sont pas tous nuls, sinon $F$ serait nulle sur $D(z_0,\rho)$, ce qui contredit l'injectivité. Soit $N:=\min\{n:a_n\neq0\}$ (la multiplicité du zéro $z_0$, [[ch01-def-multiplicite-zero]]) : $N\ge2$, et
$$
F(z)=a_N(z-z_0)^N\,u(z),\qquad u(z):=1+\sum_{n\ge1}\frac{a_{N+n}}{a_N}(z-z_0)^n ,
$$
où la série entière $u$ a un rayon $\ge\rho$ (même rayon que celle de $F$), donc $u\in\Hol(D(z_0,\rho))$ et $u(z_0)=1$. Par continuité de $u$ en $z_0$, il existe $\eps\in]0,\rho]$ tel que $u(D(z_0,\eps))\subset D(1,\tfrac12)$.

*Racine $N$-ième.* La fonction $w\mapsto1/w$ est holomorphe sur le disque $D(1,\tfrac12)$ (qui ne contient pas $0$) ; par l'existence locale de primitives ([[ch01-primitive-locale]], poly, Corollaire I.7.6, p. 22), elle y admet une primitive $L$, que l'on choisit avec $L(1)=0$. Alors $w\mapsto we^{-L(w)}$ a pour dérivée $e^{-L(w)}\big(1-wL'(w)\big)=0$ sur le disque (connexe), donc est constante, égale à sa valeur $1$ en $w=1$ : $e^{L(w)}=w$ sur $D(1,\tfrac12)$. On pose, pour $z\in D(z_0,\eps)$,
$$
v(z):=\exp\Big(\frac1N L\big(u(z)\big)\Big),\qquad h(z):=c\,(z-z_0)\,v(z),
$$
où $c\in\C$ est une racine $N$-ième de $a_N$ ($c^N=a_N$, $c\neq0$). Ces fonctions sont holomorphes (composées et produits, [[ch01-stabilite-operations]]), $v^N=e^{L(u)}=u$, donc
$$
h(z)^N=a_N(z-z_0)^N\,u(z)=F(z)\qquad(z\in D(z_0,\eps)).
$$

*Contradiction.* On a $h(z_0)=0$ et $h'(z_0)=c\,v(z_0)=c\,e^{L(1)/N}=c\neq0$, donc $h$ n'est pas constante sur le disque (connexe) $D(z_0,\eps)$. Par le [[ch01-application-ouverte|théorème de l'application ouverte]] (poly, Théorème I.14.1, p. 33), $h(D(z_0,\eps))$ est un ouvert contenant $0$ : il contient un disque $D(0,\eta)$, $\eta>0$. Les points $w_1:=\eta/2$ et $w_2:=(\eta/2)e^{2i\pi/N}$ sont dans $D(0,\eta)$ et **distincts** car $N\ge2$ ; soient $z_1,z_2\in D(z_0,\eps)$ avec $h(z_1)=w_1$, $h(z_2)=w_2$. Alors $z_1\neq z_2$, mais
$$
F(z_1)=w_1^N=(\eta/2)^N=(\eta/2)^Ne^{2i\pi}=w_2^N=F(z_2),
$$
ce qui contredit l'injectivité de $F$ (donc de $f$). Ainsi $f'(z)\neq0$ pour tout $z\in\Omega_1$.

**Étape 2 : $f^{-1}$ est holomorphe.** Soit $w\in\Omega_2$ et $z:=f^{-1}(w)$. Comme $f'(z)\neq0$, l'[[ch01-inversion-locale-holomorphe|inversion locale holomorphe]] (poly, Proposition I.4.4, p. 14, conséquence du théorème d'inversion locale réel [[ch06-inversion-locale]]) fournit un ouvert $U\ni z$, $U\subset\Omega_1$, tel que $V:=f(U)$ est ouvert et $f_{|U}:U\to V$ est un biholomorphisme. Puisque $f$ est injective, pour $w'\in V$ l'unique antécédent de $w'$ par $f$ est celui qui est dans $U$ : $f^{-1}$ coïncide sur $V$ avec $(f_{|U})^{-1}$, qui est holomorphe. Ainsi $f^{-1}$ est holomorphe au voisinage de chaque point de $\Omega_2$, donc $f^{-1}\in\Hol(\Omega_2)$. Enfin, en dérivant $f\circ f^{-1}=\id$ : $f'(f^{-1}(w))\,(f^{-1})'(w)=1$. $\square$

*Complément.* L'étape 1 n'utilise que l'injectivité de $f$ sur un voisinage de $z_0$ : **si $f$ holomorphe est injective au voisinage de $z_0$, alors $f'(z_0)\neq0$.** Et toute injection holomorphe $f:\Omega_1\to\C$ est un biholomorphisme de $\Omega_1$ sur l'ouvert $f(\Omega_1)$ (voir H3).

## Preuve à trous

Supposons $f'(z_0)=0$ et posons $F=f-f(z_0)$. On développe <trou indice="factoriser par la plus petite puissance non nulle">$F(z)=a_N(z-z_0)^Nu(z)$ avec $a_N\neq0$, $N\ge2$, $u$ holomorphe, $u(z_0)=1$</trou>. Sur $D(z_0,\eps)$ assez petit, $u$ est à valeurs dans $D(1,\tfrac12)$, où $1/w$ a une primitive $L$ avec $L(1)=0$ et $e^L=w$ ; d'où <trou indice="extraire une racine N-ième holomorphe">$F=h^N$ avec $h(z)=c(z-z_0)e^{L(u(z))/N}$, $c^N=a_N$, $h(z_0)=0$, $h'(z_0)=c\neq0$</trou>. Par <trou>le théorème de l'application ouverte, $h(D(z_0,\eps))\supset D(0,\eta)$</trou> ; alors <trou indice="deux valeurs distinctes de h ayant la même puissance N-ième">$\eta/2$ et $(\eta/2)e^{2i\pi/N}$ ont des antécédents $z_1\neq z_2$ par $h$, avec $F(z_1)=F(z_2)=(\eta/2)^N$</trou> : contradiction avec l'injectivité. Donc $f'\neq0$ partout, et <trou indice="Proposition I.4.4">l'inversion locale holomorphe, jointe à l'injectivité de $f$, montre que $f^{-1}$ est holomorphe au voisinage de chaque point de $\Omega_2$</trou>. $\square$

## Exemples

* **Transformation de Cayley.** $f(z)=i\dfrac{1-z}{1+z}$ est une bijection de $D$ sur $H=\{\Im(w)>0\}$ ([[ch01-cayley-disque-demi-plan]]). Conformément au résultat, $f'(z)=i\cdot\dfrac{-(1+z)-(1-z)}{(1+z)^2}=\dfrac{-2i}{(1+z)^2}\neq0$ sur $D$, et la réciproque $w\mapsto\dfrac{i-w}{i+w}$ (obtenue en résolvant $w(1+z)=i(1-z)$) est holomorphe sur $H$ (son pôle $-i$ n'est pas dans $H$).
* **Racine carrée principale.** $f(z)=z^2$ est une bijection holomorphe du demi-plan $\{\Re(z)>0\}$ sur $\C\setminus\R_-$ ($re^{i\theta}\mapsto r^2e^{2i\theta}$ avec $\theta\in]-\tfrac\pi2,\tfrac\pi2[$). Sa dérivée $2z$ ne s'annule pas sur ce demi-plan, et sa réciproque, la racine carrée principale, est holomorphe sur $\C\setminus\R_-$.
* **$z\mapsto z^3$ près de $0$.** $f'(0)=0$ ; et en effet $f$ n'est injective sur aucun disque $D(0,r)$ : $z$ et $ze^{2i\pi/3}$ ($z\neq0$) ont la même image.

## Pièges

* > ⚠️ La réciproque est fausse : $f'\neq0$ partout n'entraîne **pas** l'injectivité ($\exp$, ou $z\mapsto z^2$ sur $\C^\times$). $f'(z_0)\neq0$ donne seulement l'injectivité **locale**.
* Le résultat est propre au complexe : en réel, une bijection $C^\infty$ peut avoir une dérivée nulle et une réciproque non dérivable ($x\mapsto x^3$).
* On ne peut pas extraire directement une racine $N$-ième de $F$ près de son zéro $z_0$ : on factorise d'abord $(z-z_0)^N$, puis on prend la racine de $u$, qui est **proche de $1$** (d'où le disque $D(1,\tfrac12)$, sur lequel un logarithme existe).
* L'inversion locale seule ne suffit pas pour l'holomorphie **globale** de $f^{-1}$ : il faut l'injectivité de $f$ pour que les inverses locaux recollent en $f^{-1}$.
