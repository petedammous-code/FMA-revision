---
id: ch06-point-fixe-banach
type: theorem
chapter: 6
title: Point fixe de Banach (Picard)
ref: Théorème VI.1.1
page: 115
importance: 3
depends: [ch06-lipschitz-contractante-def]
tags: [point-fixe, banach, picard, contractante, complet, iteration]
---
## Intuition

> 💡 Une application **contractante** ([[ch06-lipschitz-contractante-def]]) d'un espace dans lui-même rapproche tous les points d'un facteur au moins $a<1$. Si l'on part de n'importe quel point $x_0$ et que l'on applique $T$ encore et encore, les itérés $x_0, T(x_0), T(T(x_0)),\dots$ font des pas de plus en plus petits (de longueur $\le a^n\times$ le premier pas) : ils s'accumulent vers une limite, qui ne bouge plus sous $T$.

Pour que cette « limite » existe vraiment, il faut que l'espace n'ait pas de trou : c'est la **complétude**. Un espace métrique $(X,d)$ est **complet** si toute suite de Cauchy (suite $(x_n)$ telle que $d(x_n,x_m)\to0$ quand $n,m\to+\infty$) converge dans $X$. Exemples : $\R^n$, tout espace de Banach, toute partie **fermée** d'un espace complet.

Un **point fixe** de $T : X\to X$ est un $x\in X$ tel que $T(x)=x$. Notation : $T^n=T\circ\cdots\circ T$ ($n$ fois), $T^0=\id_X$.

## Énoncé

**Théorème (poly, Théorème VI.1.1, p. 115) — Point fixe de Banach.** Soient $(X,d)$ un espace métrique complet, $a\in[0\,;1[$ et
$$
T : X\to X
$$
une application $a$-lipschitzienne. Alors $T$ admet un unique point fixe $x\in X$.

**Complément (contenu dans la preuve).** Pour tout $x_0\in X$, la suite des itérées définie par $x_{n+1}=T(x_n)$ converge vers ce point fixe $x$, et pour tous $n\ge m$,
$$
d(x_n,x_m)\le\frac{a^m}{1-a}\,d(T(x_0),x_0),\qquad\text{donc}\qquad d(x_m,x)\le\frac{a^m}{1-a}\,d(T(x_0),x_0).
$$

## Hypothèses

### H1 — $(X,d)$ est complet

**Rôle.** La preuve montre que $(x_n)$ est de Cauchy ; c'est la complétude qui fournit sa limite.

**Si on la retire.** $X=\,]0,1]$ (non complet : $(1/n)$ est de Cauchy sans limite dans $X$) et $T(x)=x/2$. On a bien $T(X)=\,]0,\tfrac12]\subset X$, et $T$ est $\tfrac12$-lipschitzienne, mais $T(x)=x\iff x=0\notin X$ : pas de point fixe. Les itérés $x_0/2^n$ « fuient » vers le trou $0$.

### H2 — $T$ envoie $X$ dans $X$

**Rôle.** Indispensable pour pouvoir itérer : $x_{n+1}=T(x_n)$ n'a de sens que si $x_n\in X$ entraîne $T(x_n)\in X$. En pratique, c'est **la** vérification à ne pas oublier : on choisit souvent $X$ = une boule fermée et il faut prouver $T(X)\subset X$.

**Si on la retire.** $T(x)=\dfrac x2+1$ de $X=[0,1]$ dans $\R$ : $T$ est $\tfrac12$-lipschitzienne mais $T(X)=[1,\tfrac32]\not\subset X$, et l'unique solution de $T(x)=x$ est $x=2\notin X$.

### H3 — $a<1$ (constante uniforme strictement inférieure à $1$)

**Rôle.** Elle donne la majoration géométrique $d(x_{j+1},x_j)\le a^j\,d(x_1,x_0)$ et la convergence de $\sum a^j$ ; elle donne aussi l'unicité ($d\le a\,d$ avec $a<1$ force $d=0$).

**Si on la retire.** Avec $a=1$ : la translation $T(x)=x+1$ sur $\R$ (complet) est $1$-lipschitzienne sans point fixe ; $T=\id_\R$ est $1$-lipschitzienne avec une infinité de points fixes (l'unicité tombe aussi). Même la condition plus forte « $d(T(x),T(y))<d(x,y)$ pour $x\ne y$ » ne suffit pas : $T(x)=x+1/x$ sur $[1,+\infty[$ (complet car fermé dans $\R$) la vérifie et n'a pas de point fixe (détails dans [[ch06-lipschitz-contractante-def]]).

## Idée de la preuve

On itère $T$ depuis un point quelconque. Les pas successifs décroissent géométriquement ($\le a^j\,d(x_1,x_0)$), donc la suite est de Cauchy, donc converge (complétude) ; la limite est fixe par continuité de $T$. Deux points fixes distincts violeraient $d\le a\,d$.

## Preuve

**Existence.** Soit $x_0\in X$ et $(x_n)_{n\in\N}$ définie par $x_{n+1}=T(x_n)$, c'est-à-dire $x_n=T^n(x_0)$ (bien défini car $T(X)\subset X$). Montrons que $(x_n)$ est de Cauchy.

Comme $T$ est $a$-lipschitzienne, $T^m$ est $a^m$-lipschitzienne (récurrence immédiate). Pour $n\ge m$, on écrit $x_n=T^m\big(T^{n-m}(x_0)\big)$ et $x_m=T^m(x_0)$, d'où
$$
d(x_n,x_m)=d\big(T^m(T^{n-m}(x_0)),T^m(x_0)\big)\le a^m\,d\big(T^{n-m}(x_0),x_0\big).
$$
Par l'inégalité triangulaire, puis $d(T^j(x_0),T^{j-1}(x_0))\le a^{j-1}d(T(x_0),x_0)$,
$$
d(T^{n-m}(x_0),x_0)\le\sum_{j=1}^{n-m}d\big(T^j(x_0),T^{j-1}(x_0)\big)\le\sum_{j=1}^{n-m}a^{j-1}\,d(T(x_0),x_0)=\frac{1-a^{n-m}}{1-a}\,d(T(x_0),x_0)\le\frac{1}{1-a}\,d(T(x_0),x_0).
$$
D'où, pour $n\ge m$,
$$
d(x_n,x_m)\le\frac{a^m}{1-a}\,d(T(x_0),x_0).
$$
Comme $a^m\to0$ (car $0\le a<1$), la suite $(x_n)$ est de Cauchy. Comme $X$ est complet, elle converge ; appelons $x$ sa limite. Une application lipschitzienne est continue ([[ch06-lipschitz-contractante-def]]), donc
$$
T(x)=\lim_{n\to\infty}T(x_n)=\lim_{n\to\infty}x_{n+1}=x :
$$
$x$ est un point fixe de $T$. En faisant $n\to+\infty$ dans l'estimation précédente (la distance est continue), on obtient $d(x,x_m)\le\dfrac{a^m}{1-a}\,d(T(x_0),x_0)$.

**Unicité.** Si $x_1\ne x$ est un autre point fixe,
$$
d(x_1,x)=d(T(x_1),T(x))\le a\,d(x_1,x),
$$
soit $(1-a)\,d(x_1,x)\le0$ avec $1-a>0$ et $d(x_1,x)>0$ : impossible. $\square$

## Preuve à trous

Soit $x_0\in X$ et $x_n=T^n(x_0)$. Pour $n\ge m$, comme $T^m$ est <trou indice="combien vaut la constante de Lipschitz d'une composée ?">$a^m$-lipschitzienne</trou>,
$$
d(x_n,x_m)\le a^m\,d(T^{n-m}(x_0),x_0)\le a^m\sum_{j=1}^{n-m}d(T^j(x_0),T^{j-1}(x_0)).
$$
Chaque terme de la somme est majoré par <trou>$a^{j-1}d(T(x_0),x_0)$</trou>, donc $d(x_n,x_m)\le$ <trou indice="somme géométrique majorée par sa somme infinie">$\dfrac{a^m}{1-a}\,d(T(x_0),x_0)$</trou>, et $(x_n)$ est de Cauchy. Par <trou>complétude de $X$, elle converge vers un $x\in X$, et par continuité de $T$, $T(x)=\lim x_{n+1}=x$</trou>. Unicité : si $T(x_1)=x_1$, alors $d(x_1,x)\le a\,d(x_1,x)$ et donc <trou>$(1-a)d(x_1,x)\le0$, d'où $x_1=x$ car $a<1$</trou>. $\square$

## Exemples

* **Résoudre $\cos x=x$.** Sur $X=[0,1]$ (fermé de $\R$, donc complet), $T=\cos$ vérifie $T(X)=[\cos1,1]\subset X$ et $|T'(x)|=|\sin x|\le\sin1\approx0{,}8415$ sur $[0,1]$, donc (accroissements finis, [[ch05-accroissements-finis]]) $T$ est $a$-lipschitzienne avec $a=\sin1<1$. Il existe donc un unique $x^*\in[0,1]$ avec $\cos x^*=x^*$ ($x^*\approx0{,}7391$). Depuis $x_0=0$ : $d(T(x_0),x_0)=1$ et $|x_m-x^*|\le\dfrac{(\sin1)^m}{1-\sin1}\approx 6{,}3\times0{,}8415^m$ ; il faut $m\ge 65$ pour garantir $10^{-4}$ (estimation pessimiste : en pratique la convergence est de raison $|\sin x^*|\approx0{,}67$).
* **Calcul de $\sqrt2$.** $T(x)=\dfrac x2+\dfrac1x$ sur $X=[1,2]$ : $T'(x)=\dfrac12-\dfrac1{x^2}\in[-\tfrac12,\tfrac14]$, donc $|T'|\le\tfrac12$ ; $T$ décroît sur $[1,\sqrt2]$ et croît sur $[\sqrt2,2]$ avec $T(1)=T(2)=\tfrac32$ et $T(\sqrt2)=\sqrt2$, donc $T(X)=[\sqrt2,\tfrac32]\subset X$. Le point fixe vérifie $x=\frac x2+\frac1x\iff x^2=2$ : c'est $\sqrt2$. Depuis $x_0=1$ : $1\to1{,}5\to1{,}41\overline{6}\to1{,}4142157\ldots\to1{,}41421356\ldots$ (c'est la méthode de Newton, [[ch06-methode-de-newton]]).
* **Systèmes linéaires.** Si $E$ est un Banach, $A\in\mathcal L(E)$ avec $\|A\|\le a<1$ et $b\in E$, alors $T(x)=Ax+b$ est $a$-contractante sur $E$ : l'équation $x=Ax+b$ a une unique solution, limite de $x_{n+1}=Ax_n+b$, c'est-à-dire $x=\sum_{n\ge0}A^nb$ (cf. [[ch06-neumann-inverse-id-moins-l]]).

## Pièges

* > ⚠️ Vérifier **les trois** hypothèses : complétude (souvent : $X$ fermé dans un Banach), **stabilité** $T(X)\subset X$, et constante **uniforme** $a<1$. L'oubli de la stabilité est l'erreur la plus fréquente quand $X$ est une boule.
* $|T'(x)|<1$ point par point ne suffit pas (contre-exemple $x+1/x$) ; il faut $\sup|T'|\le a<1$ **sur un convexe** pour en déduire le caractère lipschitzien.
* Le théorème ne dit rien des points fixes **hors** de $X$ : l'unicité est dans $X$ seulement ($T(x)=x^2/4$ sur $X=[0,1]$ est $\tfrac12$-lipschitzienne et envoie $X$ dans $[0,\tfrac14]$ ; elle a l'unique point fixe $0$ dans $X$, mais $4$ est un autre point fixe dans $\R$).
* Si seule une itérée $T^n$ est contractante, la conclusion subsiste : voir [[ch06-point-fixe-iteree-contractante]].
* L'estimation $d(x_m,x)\le\frac{a^m}{1-a}d(T(x_0),x_0)$ est **a priori** (calculable avant de connaître $x$) : c'est elle qu'on utilise pour dire combien d'itérations suffisent.
