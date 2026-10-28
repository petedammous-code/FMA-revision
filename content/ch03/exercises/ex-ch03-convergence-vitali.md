---
id: ex-ch03-convergence-vitali
type: exercise
chapters: [3, 1]
title: Converger sur un petit ensemble suffit (théorème de Vitali)
source: "Classique (théorème de Vitali–Porter ; cf. Titchmarsh, The Theory of Functions, ch. V), adapté"
difficulty: 3
time: 40
tools: [ch03-montel, ch03-weierstrass, ch03-convergence-uniforme-compacts, ch03-famille-localement-uniformement-bornee, ch01-prolongement-analytique]
---
## Énoncé

Soient $\Omega$ un ouvert **connexe** de $\C$ et $(f_n)_{n\ge0}$ une suite de fonctions holomorphes sur $\Omega$. On suppose :

* (B) pour tout compact $K\subset\Omega$, il existe $C(K)>0$ tel que $|f_n(z)|\le C(K)$ pour tout $z\in K$ et tout $n$ ;
* (A) il existe une partie $A\subset\Omega$ ayant un point d'accumulation **dans** $\Omega$ telle que, pour tout $a\in A$, la suite numérique $(f_n(a))_n$ converge.

1. Montrer que toute sous-suite de $(f_n)$ admet une sous-suite qui converge localement uniformément sur $\Omega$, et que la limite est holomorphe sur $\Omega$.
2. Soient $(f_{\varphi(k)})_k$ et $(f_{\psi(k)})_k$ deux sous-suites qui convergent localement uniformément sur $\Omega$, vers $g$ et $h$ respectivement. Montrer que $g=h$.
3. En déduire que la suite $(f_n)$ **tout entière** converge localement uniformément sur $\Omega$ vers une fonction holomorphe $f$.
4. Montrer par des exemples que la conclusion de 3 peut tomber : (a) si $\Omega$ n'est pas connexe ; (b) si $A$ n'a de point d'accumulation que hors de $\Omega$.
5. Application. Pour $n\ge1$ et $z\in\C$, on pose $f_n(z)=\bigl(1+\frac zn\bigr)^n$.
   1. Montrer que $|f_n(z)|\le e^{|z|}$ pour tout $z\in\C$.
   2. En n'utilisant que la limite réelle $\bigl(1+\frac xn\bigr)^n\to e^x$ pour $x\in[0,1]$, montrer que $f_n\to\exp$ et $f_n'\to\exp$ localement uniformément sur $\C$.

## Indices

### Indice 1
L'hypothèse (B) est une hypothèse de compacité déguisée : quel théorème permet d'extraire des sous-suites convergentes ? Ensuite, pour identifier les limites, quel principe d'unicité des fonctions holomorphes utilise un ensemble ayant un point d'accumulation ?

### Indice 2
1 : théorème de Montel (une sous-suite vérifie encore (B)), puis théorème de Weierstraß pour l'holomorphie de la limite. 2 : $g$ et $h$ coïncident sur $A$, puis principe du prolongement analytique sur le connexe $\Omega$. 3 : raisonner par l'absurde avec la caractérisation « uniforme sur tout compact » de la convergence localement uniforme.

### Indice 3
Pour 3 : si la convergence n'est pas uniforme sur un compact $K$, il existe $\eps>0$ et une sous-suite $(f_{n_k})$ avec $\sup_K|f_{n_k}-f|\ge\eps$ pour tout $k$ ; appliquer 1 puis 2 à cette sous-suite. Pour 4(b) : penser à $\sin(1/z)$ sur $\C\setminus\{0\}$. Pour 5.1 : $1+t\le e^t$.

## Corrigé

**1.** Soit $(f_{\varphi(k)})_k$ une sous-suite. La famille $\{f_{\varphi(k)},\ k\ge0\}\subset\Hol(\Omega)$ vérifie encore (B) : elle est bornée sur chaque compact uniformément en $k$, c'est-à-dire localement uniformément bornée ([[ch03-famille-localement-uniformement-bornee]], Remarque III.3.2). Le théorème de Montel ([[ch03-montel]], sens $1\Rightarrow2$) dit qu'elle est normale : la suite $(f_{\varphi(k)})_k$ admet une sous-suite $(f_{\varphi(\sigma(j))})_j$ qui converge localement uniformément sur $\Omega$ vers une fonction $g$. Une suite qui converge localement uniformément est localement uniformément de Cauchy (Lemme III.1.3), donc par le théorème de Weierstraß ([[ch03-weierstrass]]) $g$ est holomorphe sur $\Omega$.

**2.** Soit $a\in A$. Par hypothèse (A), la suite $(f_n(a))_n$ converge vers un nombre $\ell(a)$ ; ses sous-suites $(f_{\varphi(k)}(a))_k$ et $(f_{\psi(k)}(a))_k$ convergent donc aussi vers $\ell(a)$. Mais elles convergent respectivement vers $g(a)$ et $h(a)$ (la convergence localement uniforme entraîne la convergence simple). Donc $g(a)=h(a)$ pour tout $a\in A$.

Les fonctions $g$ et $h$ sont holomorphes sur $\Omega$ (question 1), $\Omega$ est **connexe**, et elles coïncident sur $A$ qui a un point d'accumulation **dans** $\Omega$ : par le principe du prolongement analytique ([[ch01-prolongement-analytique]]), $g=h$ sur $\Omega$.

**3.** D'après 1 (appliquée à la suite elle-même, sous-suite triviale), il existe une sous-suite de $(f_n)$ qui converge localement uniformément vers une fonction holomorphe $f$. D'après 2, **toute** sous-suite localement uniformément convergente a la même limite $f$.

Supposons par l'absurde que $(f_n)$ ne converge pas localement uniformément vers $f$. D'après la Proposition III.1.2 ([[ch03-convergence-uniforme-compacts]]), il existe un compact $K\subset\Omega$ sur lequel $(f_n)$ ne converge pas uniformément vers $f$ : il existe $\eps>0$ et une suite strictement croissante $(n_k)_k$ telles que
$$
\sup_{z\in K}|f_{n_k}(z)-f(z)|\ge\eps\qquad\text{pour tout }k.
$$
Par 1, la sous-suite $(f_{n_k})_k$ admet une sous-suite $(f_{n_{k_j}})_j$ qui converge localement uniformément ; par 2, sa limite est $f$. Par la Proposition III.1.2, elle converge alors uniformément vers $f$ sur $K$ : $\sup_K|f_{n_{k_j}}-f|\to0$, ce qui contredit la minoration par $\eps$. Donc $f_n\to f$ localement uniformément, et $f$ est holomorphe (question 1).

**4.(a)** $\Omega=D(0,1)\cup D(3,1)$ (réunion de deux disques disjoints, non connexe). Posons $f_n=0$ sur $D(0,1)$ et $f_n=(-1)^n$ sur $D(3,1)$ : les $f_n$ sont holomorphes (localement constantes) et bornées par $1$, donc (B) est vraie. Avec $A=\{1/k,\ k\ge2\}\subset D(0,1)$, qui s'accumule en $0\in\Omega$, $f_n(a)=0$ converge : (A) est vraie. Mais $f_n(3)=(-1)^n$ diverge. C'est l'étape 2 qui tombe : le prolongement analytique ne traverse pas d'une composante connexe à l'autre.

**4.(b)** $\Omega=\C\setminus\{0\}$ (connexe) et $f_n(z)=(-1)^n\sin(1/z)$, holomorphe sur $\Omega$. Sur un compact $K\subset\Omega$, la fonction continue $|\sin(1/z)|$ est bornée par une constante $M_K$, et $|f_n|=|\sin(1/z)|\le M_K$ pour tout $n$ : (B) est vraie. Avec $A=\{\frac1{k\pi},\ k\ge1\}$, $f_n(a)=0$ pour tout $n$ ; mais $A$ ne s'accumule qu'en $0\notin\Omega$. Et en $z_0=\frac2\pi$, $f_n(z_0)=(-1)^n\sin\frac\pi2=(-1)^n$ diverge.

**5.1.** Pour $t\ge0$, $1+t\le e^t$. Donc $|1+\frac zn|\le1+\frac{|z|}n\le e^{|z|/n}$, et $|f_n(z)|=|1+\frac zn|^n\le e^{|z|}$.

**5.2.** *Vérification des hypothèses.* $\Omega=\C$ est connexe ; les $f_n$ sont des polynômes, donc entières. (B) : sur un compact $K\subset\bar D(0,R)$, $|f_n|\le e^R$ pour tout $n$ (question 5.1). (A) : pour $x\in[0,1]$, $n\ln(1+\frac xn)\to x$ (car $\ln(1+u)\sim u$ en $0$, et c'est trivial si $x=0$), donc $f_n(x)\to e^x$ ; et $A=[0,1]$ a un point d'accumulation dans $\C$ (par exemple $\frac12$).

*Conclusion.* Par 3, $(f_n)$ converge localement uniformément sur $\C$ vers une fonction entière $f$. Sur $A=[0,1]$, $f(x)=\lim f_n(x)=e^x$ : les fonctions entières $f$ et $\exp$ coïncident sur $A$, donc partout ([[ch01-prolongement-analytique]]). Ainsi $f_n\to\exp$ localement uniformément sur $\C$, et par le théorème de Weierstraß (point 2), $f_n'\to\exp'=\exp$ localement uniformément. (Ici $f_n'(z)=(1+\frac zn)^{n-1}$, ce qui donne au passage $(1+\frac zn)^{n-1}\to e^z$.)

L'intérêt : on obtient la convergence **uniforme sur les compacts de $\C$** sans aucun logarithme complexe, à partir d'une simple limite réelle et d'une majoration grossière.

## Pièges et variantes

> ⚠️ L'argument « une sous-suite converge vers $f$, donc la suite converge vers $f$ » est **faux** en général. Ce qui le rend correct ici, c'est que **toute** sous-suite admet une sous-suite qui converge vers la **même** limite $f$ (questions 1 et 2), combiné au raisonnement par l'absurde de la question 3.

* Ne pas oublier de dire pourquoi une sous-suite vérifie encore les hypothèses de Montel (borne uniforme en $n$ sur chaque compact) : c'est trivial mais c'est ce qui permet d'itérer les extractions.
* Le point d'accumulation doit être **dans** $\Omega$ (exemple 4(b)), et $\Omega$ doit être connexe (exemple 4(a)) : ce sont exactement les hypothèses du prolongement analytique.
* L'hypothèse (B) est indispensable : sur $\Omega=D(0,2)$ (connexe), $f_n(z)=z^n$ vérifie (A) avec $A=[0,\frac12]$ (limite $0$, point d'accumulation $\frac14\in\Omega$), mais $f_n(3/2)=(3/2)^n$ diverge : (B) est fausse au voisinage de $3/2$.
* Cas particulier : si $(f_n)$ converge simplement sur **tout** $\Omega$ et vérifie (B), la limite est holomorphe et la convergence est localement uniforme (c'est l'Exercice III.7.1 du poly, p. 73, avec en prime l'uniformité).
* Variante : même méthode pour montrer que $\bigl(1-\frac{z^2}{n}\bigr)^n\to e^{-z^2}$ localement uniformément sur $\C$ (majoration $|1-\frac{z^2}n|^n\le e^{|z|^2}$).
