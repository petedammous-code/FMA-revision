---
id: ch06-point-fixe-iteree-contractante
type: proposition
chapter: 6
title: "Variante du théorème de Picard : $T^n$ contractante"
ref: Exercice VI.4.1
page: 121
importance: 2
depends: [ch06-point-fixe-banach, ch06-lipschitz-contractante-def]
tags: [point fixe, Picard, contraction, itérée, Cauchy-Lipschitz]
---
## Intuition

> 💡 Une application $T$ peut dilater certaines distances à chaque pas tout en finissant par tout écraser au bout de $n$ pas. Dans ce cas, $T^n=T\circ\dots\circ T$ est contractante, a un unique point fixe, et ce point est automatiquement fixe pour $T$ : il suffit de regarder les itérés « $n$ par $n$ ».

Rappels ([[ch06-lipschitz-contractante-def]]) : $S:X\to X$ est **contractante** s'il existe $a\in[0,1[$ avec $d(S(x),S(y))\le a\,d(x,y)$ pour tous $x,y$. Le **théorème de Banach-Picard** ([[ch06-point-fixe-banach]]) dit qu'une contraction d'un espace métrique complet a un unique point fixe. Ici $T^k$ désigne la $k$-ième itérée de $T$ ($T^0=\mathrm{Id}_X$). C'est exactement la forme sous laquelle on démontre Cauchy-Lipschitz global ([[ch07-lemme-operateur-integral]]).

## Énoncé

**Proposition (poly, Exercice VI.4.1, p. 121).** Soit $(X,d)$ un espace métrique complet, et $T:X\to X$ une application telle qu'il existe $n\in\N^\times$ avec $T^n$ contractante. Alors $T$ admet un unique point fixe $x$ et, pour tout $x_0\in X$, $x$ est la limite de la suite $\big(T^k(x_0)\big)_k$ lorsque $k$ tend vers l'infini.

Aucune hypothèse de continuité n'est faite sur $T$ elle-même.

## Hypothèses

### H1 — $(X,d)$ complet

**Rôle.** Pour appliquer le théorème de Banach-Picard à $T^n$.

**Si on la retire.** $X=\,]0,1]$ (non complet), $T(x)=x/2$ : $T$ est $\frac12$-contractante ($n=1$) et n'a pas de point fixe dans $X$ ($x/2=x\iff x=0\notin X$).

### H2 — une itérée $T^n$ est **contractante** (rapport $a\lt1$ uniforme)

**Rôle.** Elle donne l'unique point fixe de $T^n$ et la convergence géométrique $d(T^{nk}(y),x)\le a^k\,d(y,x)$.

**Si on la retire.**
* Rapport $1$ : $T(x)=x+1$ sur $\R$ est une isométrie, aucune itérée n'est contractante, pas de point fixe.
* Distances seulement **diminuées** : sur $X=[1,+\infty[$ (complet), $T(x)=x+\frac1x$ vérifie $|T(x)-T(y)|=|x-y|\,\big(1-\frac1{xy}\big)\lt|x-y|$ pour $x\ne y$, mais $T(x)=x$ est impossible : pas de point fixe. Le rapport $1-\frac1{xy}$ tend vers $1$, aucune itérée n'est contractante.

## Idée de la preuve

$S=T^n$ a un unique point fixe $x$. Comme $T$ commute avec $S$, $T(x)$ est encore un point fixe de $S$, donc $T(x)=x$. Les $n$ sous-suites $T^{nk+j}(x_0)=S^k(T^j(x_0))$ convergent toutes vers $x$.

## Preuve

Posons $S=T^n$, $a$-lipschitzienne avec $a\in[0,1[$. Par le théorème de point fixe de Banach ([[ch06-point-fixe-banach]]), appliqué dans l'espace complet $X$, $S$ admet un unique point fixe $x$.

*Existence pour $T$.* On a $S(T(x))=T^{n+1}(x)=T(S(x))=T(x)$ : $T(x)$ est un point fixe de $S$. Par unicité, $T(x)=x$.

*Unicité pour $T$.* Si $T(y)=y$, alors $S(y)=T^n(y)=y$, donc $y=x$ par unicité du point fixe de $S$.

*Convergence.* Pour tout $y\in X$ et tout $k\ge0$,
$$
d\big(S^k(y),x\big)=d\big(S^k(y),S^k(x)\big)\le a^k\,d(y,x)\xrightarrow[k\to\infty]{}0 .
$$
Soit $x_0\in X$. Pour $j\in\{0,\dots,n-1\}$, appliquons ceci à $y=T^j(x_0)$ : $T^{nk+j}(x_0)=S^k\big(T^j(x_0)\big)\to x$ quand $k\to\infty$. Soit $\eps\gt0$ ; pour chaque $j$ il existe $K_j$ tel que $d(T^{nk+j}(x_0),x)\le\eps$ pour $k\ge K_j$. Posons $K=\max_jK_j$. Tout entier $p\ge nK$ s'écrit $p=nk+j$ avec $0\le j\le n-1$ et $k\ge K\ge K_j$, donc $d(T^p(x_0),x)\le\eps$. Ainsi $T^p(x_0)\to x$. Plus précisément,
$$
d\big(T^p(x_0),x\big)\le a^{\lfloor p/n\rfloor}\max_{0\le j\lt n}d\big(T^j(x_0),x\big).
$$
Aucune continuité de $T$ n'a été utilisée (seule l'est, implicitement, celle de $S$, qui est lipschitzienne). $\square$

## Preuve à trous

Soit $S=T^n$, $a$-contractante. Par Banach-Picard, $S$ a un unique point fixe $x$. On a <trou indice="T commute avec ses itérées">$S(T(x))=T^{n+1}(x)=T(S(x))=T(x)$</trou>, donc $T(x)$ est point fixe de $S$ et <trou>$T(x)=x$ par unicité du point fixe de $S$</trou>. Si $T(y)=y$, alors $S(y)=y$, donc $y=x$.

Pour la convergence, on écrit <trou indice="découper les indices modulo n">$T^{nk+j}(x_0)=S^k\big(T^j(x_0)\big)$ pour $0\le j\le n-1$</trou>, et $d(S^k(y),x)=d(S^k(y),S^k(x))\le a^kd(y,x)\to0$ : les $n$ sous-suites convergent vers $x$, et comme <trou>elles recouvrent tous les indices (en nombre fini), toute la suite $(T^p(x_0))_p$ converge vers $x$</trou>. $\square$

## Exemples

* **$T$ non contractante, $T^2$ contractante.** Sur $\R^2$ (norme euclidienne), $T(x,y)=(2y,\,x/8)$. Alors $\norm{T(0,1)}=2$ : $T$ n'est pas contractante. Mais $T^2(x,y)=T(2y,x/8)=(x/4,\,y/4)$ est $\frac14$-contractante. L'unique point fixe est $(0,0)$.
* **$T$ discontinue.** Sur $X=[0,1]$, $T(x)=0$ pour $x\ne1$ et $T(1)=\frac12$. Alors $T$ est discontinue en $1$, mais $T(x)\in\{0,\frac12\}$ et $T(0)=T(\frac12)=0$, donc $T^2\equiv0$, qui est $0$-lipschitzienne. L'unique point fixe de $T$ est $0$ (et $T(1)=\frac12\ne1$).
* **Opérateur de Picard (Cauchy-Lipschitz global).** Soit $F:[0,\tau]\times\R^d\to\R^d$ continue et $k$-lipschitzienne en la seconde variable, et $S(\alpha)(t)=y_0+\int_0^tF(u,\alpha(u))\,du$ sur $X=C^0([0,\tau],\R^d)$ muni de $\norm{\cdot}_\infty$ (complet). Par récurrence, $|S^p\alpha(t)-S^p\beta(t)|\le\frac{(kt)^p}{p!}\norm{\alpha-\beta}_\infty$ : en effet si c'est vrai au rang $p-1$, $|S^p\alpha(t)-S^p\beta(t)|\le k\int_0^t\frac{(ku)^{p-1}}{(p-1)!}\,du\,\norm{\alpha-\beta}_\infty=\frac{(kt)^p}{p!}\norm{\alpha-\beta}_\infty$. Comme $\frac{(k\tau)^p}{p!}\to0$, une itérée $S^p$ est contractante, alors que $S$ ne l'est pas si $k\tau\ge1$. D'où une unique solution sur tout $[0,\tau]$.

## Pièges

* > ⚠️ Ne pas conclure que $T$ est contractante, ni même continue : seule $T^n$ l'est.
* « $T^n$ a un point fixe » n'entraîne pas en général « $T$ a un point fixe » ($T(x)=-x$ sur $\R\setminus\{0\}$, $T^2=\mathrm{Id}$) : c'est l'**unicité** du point fixe de $T^n$ qui fait marcher l'argument $T(x)=x$.
* La vitesse de convergence est géométrique de raison $a^{1/n}$ « en moyenne », mais la suite $d(T^p(x_0),x)$ n'est pas forcément décroissante.
