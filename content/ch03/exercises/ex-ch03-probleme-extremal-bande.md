---
id: ex-ch03-probleme-extremal-bande
type: exercise
chapters: [3, 1]
title: Un problème extrémal sur une bande (le cœur de la preuve de Riemann, en explicite)
source: "Inventé (variation sur le problème extrémal de la preuve de Riemann, poly § III.4 ; lemme de Schwarz)"
difficulty: 3
time: 40
tools: [ch03-montel, ch03-weierstrass, ch03-hurwitz, ch03-famille-normale, ch03-convergence-uniforme-compacts, ch01-estimees-cauchy, ch01-principe-maximum, ch01-lemme-schwarz, ch01-bijection-holomorphe-reciproque-holomorphe]
---
## Énoncé

On note $\mathbb D=D(0,1)$, $S=\{z\in\C : |\Im(z)|<\frac\pi2\}$ (bande horizontale) et
$$
\mathcal F=\{f\in\Hol(S) : f(S)\subset\mathbb D,\ f(0)=0\},\qquad \eta=\sup_{f\in\mathcal F}|f'(0)|.
$$
1. Montrer que $\eta\le\dfrac2\pi$.
2. Soit $h(z)=\dfrac{e^z-1}{e^z+1}$. Montrer que $h$ est une bijection holomorphe de $S$ sur $\mathbb D$, avec $h(0)=0$, et calculer $h'(0)$. Que peut-on en déduire sur $\eta$ ?
3. Montrer, **sans utiliser $h$ au-delà de la minoration de la question 2**, que le sup $\eta$ est atteint : il existe $f\in\mathcal F$ telle que $|f'(0)|=\eta$.
4. Montrer que $\eta=\dfrac12$ et que les $f\in\mathcal F$ telles que $|f'(0)|=\eta$ sont exactement les $e^{i\theta}h$, $\theta\in\R$.
5. Soit $(f_n)_{n\ge0}$ une suite d'éléments de $\mathcal F$ telle que $f_n'(0)\in\R_+$ pour tout $n$ et $f_n'(0)\to\frac12$. Montrer que $(f_n)$ converge localement uniformément sur $S$ vers $h$.
6. Soit $(g_n)$ une suite d'éléments **injectifs** de $\mathcal F$ qui converge localement uniformément sur $S$ vers une fonction $g$. Montrer que $g$ est soit injective, soit identiquement nulle, et que les deux cas se produisent.

## Indices

### Indice 1
Question 1 : majorer une dérivée en un point par un sup sur un cercle. Question 3 : on cherche une fonction réalisant un sup dans une famille bornée de fonctions holomorphes — quel est le théorème de compacité du cours ? Question 4 : se ramener au disque unité.

### Indice 2
Q1 : estimées de Cauchy sur $\bar D(0,\rho)\subset S$, $\rho<\pi/2$. Q2 : $z\mapsto e^z$ envoie $S$ sur le demi-plan $\{\Re(w)>0\}$, et $w\mapsto\frac{w-1}{w+1}$ envoie ce demi-plan sur $\mathbb D$. Q3 : $\mathcal F$ est uniformément bornée par $1$ (Montel), et la limite d'une suite maximisante garde la dérivée en $0$ (Weierstrass) ; il reste à voir qu'elle prend ses valeurs dans le disque **ouvert**.

### Indice 3
Q4 : pour $f\in\mathcal F$, $g=f\circ h^{-1}$ envoie $\mathbb D$ dans $\mathbb D$ et $g(0)=0$ : lemme de Schwarz, avec $g'(0)=f'(0)/h'(0)$. Q5 : réflexe « toute sous-suite admet une sous-suite qui converge vers la **même** limite ». Q6 : Hurwitz (version injectivité) ; une constante de $\mathcal F$ vaut $f(0)=0$.

## Corrigé

**1.** Soit $f\in\mathcal F$ et $0<\rho<\frac\pi2$. Le disque fermé $\bar D(0,\rho)$ est inclus dans $S$ (pour $|z|\le\rho$, $|\Im z|\le\rho<\pi/2$). Les estimées de Cauchy ([[ch01-estimees-cauchy]], poly, Corollaire I.7.5, p. 22) avec $n=1$ donnent
$$
|f'(0)|\le\frac{\sup_{C(0,\rho)}|f|}{\rho}\le\frac1\rho .
$$
En faisant $\rho\to\pi/2$ : $|f'(0)|\le 2/\pi$. Donc $\eta\le 2/\pi\approx0{,}637$.

**2.** *Image et injectivité.* $h=c\circ\exp$ avec $c(w)=\frac{w-1}{w+1}$.
* $\exp$ est injective sur $S$ : si $e^{z}=e^{z'}$ alors $z-z'\in2i\pi\Z$, et $|\Im(z-z')|<\pi$ impose $z=z'$. Pour $z=x+iy\in S$, $e^z=e^xe^{iy}$ avec $|y|<\pi/2$, donc $\Re(e^z)=e^x\cos y>0$ ; réciproquement tout $w$ avec $\Re(w)>0$ s'écrit $w=re^{iy}$, $r>0$, $|y|<\pi/2$, soit $w=e^{\log r+iy}$ avec $\log r+iy\in S$. Donc $\exp$ est une bijection de $S$ sur $P=\{\Re(w)>0\}$.
* $c$ est une bijection de $P$ sur $\mathbb D$ : pour $\Re(w)>0$, $|w-1|<|w+1|$ (car $|w+1|^2-|w-1|^2=4\Re(w)$), donc $c(w)\in\mathbb D$ ; et pour $u\in\mathbb D$, l'équation $c(w)=u$ a l'unique solution $w=\frac{1+u}{1-u}$, qui vérifie $\Re(w)=\frac{1-|u|^2}{|1-u|^2}>0$.

Donc $h$ est une bijection holomorphe de $S$ sur $\mathbb D$, donc un biholomorphisme ([[ch01-bijection-holomorphe-reciproque-holomorphe]], poly, Remarque I.14.3, p. 33), $h(0)=0$, et
$$
h'(z)=\frac{e^z(e^z+1)-(e^z-1)e^z}{(e^z+1)^2}=\frac{2e^z}{(e^z+1)^2},\qquad h'(0)=\frac12 .
$$
Comme $h\in\mathcal F$, on en déduit $\eta\ge\frac12$ ; en particulier $\eta>0$.

**3.** Soit $(f_n)$ une suite de $\mathcal F$ telle que $|f_n'(0)|\to\eta$ (définition du sup).

*Montel.* La famille $\mathcal F$ est uniformément bornée par $1$ sur $S$, donc localement uniformément bornée ; par le théorème de Montel ([[ch03-montel]], poly, Théorème III.3.4, p. 64), elle est normale ([[ch03-famille-normale]]) : il existe une sous-suite $(f_{n_k})$ qui converge localement uniformément sur $S$ vers une fonction $f$.

*Weierstrass.* Les $f_{n_k}$ sont holomorphes, donc ([[ch03-weierstrass]], poly, Théorème III.1.4, p. 60) $f$ est holomorphe sur $S$ et $f_{n_k}'\to f'$ localement uniformément, en particulier $f'(0)=\lim f_{n_k}'(0)$, d'où $|f'(0)|=\eta$. De plus $f(0)=\lim f_{n_k}(0)=0$ et $|f(z)|=\lim|f_{n_k}(z)|\le1$ pour tout $z\in S$.

*Valeurs dans le disque ouvert.* $f'(0)\ne0$ car $\eta\ge\frac12$ : $f$ n'est pas constante. Si l'on avait $|f(z_1)|=1$ pour un $z_1\in S$, $|f|$ aurait en $z_1$ un maximum (global, donc local) ; $S$ étant connexe (convexe), le principe du maximum ([[ch01-principe-maximum]], poly, Théorème I.12.1, p. 29) forcerait $f$ constante : contradiction. Donc $f(S)\subset\mathbb D$, $f\in\mathcal F$ et $|f'(0)|=\eta$ : le sup est un max.

**4.** Soit $f\in\mathcal F$. La fonction $g=f\circ h^{-1}$ est holomorphe sur $\mathbb D$ ($h^{-1}:\mathbb D\to S$ est holomorphe, question 2), $g(\mathbb D)\subset f(S)\subset\mathbb D$ et $g(0)=f(h^{-1}(0))=f(0)=0$. Le lemme de Schwarz ([[ch01-lemme-schwarz]], poly, Lemme I.13.1, p. 32) donne $|g'(0)|\le1$. Or $f=g\circ h$, donc $f'(0)=g'(h(0))\,h'(0)=\frac12\,g'(0)$. Ainsi
$$
|f'(0)|=\tfrac12|g'(0)|\le\tfrac12\qquad\text{pour tout }f\in\mathcal F,
$$
et $h\in\mathcal F$ réalise l'égalité : $\eta=\frac12$.

Cas d'égalité : si $|f'(0)|=\frac12$, alors $|g'(0)|=1$, et le point 2 du lemme de Schwarz dit que $g$ est une rotation $g(u)=e^{i\theta}u$ ; donc $f=g\circ h=e^{i\theta}h$. Réciproquement $e^{i\theta}h\in\mathcal F$ et $|(e^{i\theta}h)'(0)|=\frac12$.

*Remarque.* $\eta=\frac12<\frac2\pi$ : la borne de Cauchy de la question 1 n'est pas optimale, car elle n'utilise que le disque $D(0,\pi/2)$ et pas toute la bande.

**5.** *Toute sous-suite a une sous-suite qui converge vers $h$.* Soit $(f_{n_k})$ une sous-suite. Comme à la question 3 (Montel puis Weierstrass), elle admet une sous-suite $(f_{n_{k_j}})$ convergeant localement uniformément vers une $g$ holomorphe sur $S$, avec $g(0)=0$, $|g|\le1$ et $g'(0)=\lim f'_{n_{k_j}}(0)=\frac12$. Comme $g'(0)\ne0$, $g$ n'est pas constante et le principe du maximum donne $g(S)\subset\mathbb D$ : $g\in\mathcal F$ avec $|g'(0)|=\frac12=\eta$. Par la question 4, $g=e^{i\theta}h$, et $g'(0)=\frac{e^{i\theta}}2=\frac12$ impose $e^{i\theta}=1$ : $g=h$.

*Conclusion.* Supposons que $(f_n)$ ne converge pas localement uniformément vers $h$. Par la Proposition III.1.2 ([[ch03-convergence-uniforme-compacts]], p. 59), il existe un compact $K\subset S$, un $\eps>0$ et une sous-suite $(f_{n_k})$ avec $\sup_K|f_{n_k}-h|\ge\eps$ pour tout $k$. Aucune sous-suite de $(f_{n_k})$ ne peut alors converger uniformément sur $K$ vers $h$, ce qui contredit l'étape précédente. Donc $f_n\to h$ localement uniformément sur $S$.

**6.** $S$ est un ouvert connexe et les $g_n$ sont holomorphes, injectives, et convergent localement uniformément vers $g$ : par le théorème de Hurwitz ([[ch03-hurwitz]], poly, Théorème III.2.1, p. 62, point 2), $g$ est injective ou constante. Si $g$ est constante, elle vaut $g(0)=\lim g_n(0)=0$. Les deux cas se produisent : $g_n=h$ pour tout $n$ (limite $h$, injective) ; $g_n=h/(n+1)$ (chaque $g_n$ est injective, $|g_n|<1$, $g_n(0)=0$, donc $g_n\in\mathcal F$ ; et $\sup_S|g_n|\le\frac1{n+1}\to0$, limite nulle).

## Pièges et variantes

* Question 3 : la limite d'une suite de $\mathcal F$ vérifie seulement $|f|\le1$ ; il faut le **principe du maximum** (et donc la non-constance, qui vient de $\eta>0$) pour revenir dans $\mathcal F$. C'est exactement ce qui se passe dans la preuve du théorème de Riemann (poly, Théorème III.4.1, p. 66) : on y maximise $|\psi'(z_0)|$ sur une famille normale.
* Question 5 : Montel ne donne qu'une **sous-suite** ; pour la suite entière, il faut l'unicité de la limite (ici : cas d'égalité de Schwarz **et** normalisation $f_n'(0)\in\R_+$). Sans la normalisation, $f_n=(-1)^nh$ ne converge pas.
* Question 6 : oublier l'alternative « constante » dans Hurwitz, ou oublier la **connexité** de $S$.
* Variante : remplacer $S$ par le demi-plan $\{\Re(z)>0\}$ et $0$ par $1$ : avec $c(w)=\frac{w-1}{w+1}$, $c'(1)=\frac12$, on trouve encore $\eta=\frac12$, extrémales $e^{i\theta}c$.
* Variante : remplacer $S$ par la bande $\{|\Im z|<a\}$ ; le changement de variable $z\mapsto\frac{\pi}{2a}z$ donne $\eta=\frac{\pi}{4a}$.
