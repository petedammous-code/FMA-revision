---
id: ex-ch09-sln-norme-minimale
type: exercise
chapters: [9, 5]
title: Les matrices de déterminant 1 les plus proches de zéro
source: Inventé
difficulty: 3
time: 45
tools: [ch05-composition-differentielles, ch05-derivee-directionnelle-unicite, ch09-sous-variete-equation-valeur-reguliere, ch09-espace-tangent-graphe-equation, ch09-extremum-local-differentielle-nulle, ch09-multiplicateurs-lagrange]
---
## Énoncé

Soit $n\ge2$. On munit $\mathrm M_n(\R)$ du produit scalaire $\langle A,B\rangle=\mathrm{tr}({}^tA\,B)=\sum_{i,j}a_{ij}b_{ij}$ et de la norme associée $\norm A=\big(\sum_{i,j}a_{ij}^2\big)^{1/2}$. On note
$$
SL_n(\R)=\{A\in\mathrm M_n(\R)\;;\;\det A=1\},\qquad SO(n)=\{A\in\mathrm M_n(\R)\;;\;{}^tAA=I_n,\ \det A=1\}.
$$
1. Montrer que $\det:\mathrm M_n(\R)\to\R$ est de classe $C^\infty$ et que, pour tout $A\in\GL_n(\R)$ et tout $H\in\mathrm M_n(\R)$,
$$
d(\det)_A(H)=\det(A)\,\mathrm{tr}(A^{-1}H).
$$
2. Montrer que $SL_n(\R)$ est une sous-variété fermée de $\mathrm M_n(\R)$, dont on donnera la dimension, et que pour $A\in SL_n(\R)$,
$$
T_A\,SL_n(\R)=\{H\;;\;\mathrm{tr}(A^{-1}H)=0\}=\{AK\;;\;K\in\mathrm M_n(\R),\ \mathrm{tr}K=0\}.
$$
3. On pose $f:SL_n(\R)\to\R$, $f(A)=\norm A^2$. Montrer que $SL_n(\R)$ n'est pas compacte, mais que $f$ atteint sa borne inférieure.
4. Déterminer les points critiques de $f$. En déduire $\min_{SL_n(\R)}f$ et l'ensemble des points où ce minimum est atteint.
5. En déduire que pour toute matrice $A\in\GL_n(\R)$, $|\det A|^{2/n}\le\frac1n\norm A^2$, puis que pour toute matrice symétrique définie positive $S$,
$$
(\det S)^{1/n}\le\frac{\mathrm{tr}\,S}{n}.
$$
6. $f$ admet-elle un maximum local sur $SL_n(\R)$ ?

## Indices

### Indice 1
Question 2 : $SL_n(\R)$ est un ensemble de niveau ; il faut vérifier que la différentielle de $\det$ ne s'annule en aucun point de cet ensemble (essayer la direction $H=A$). Question 3 : l'ensemble n'est pas compact, mais l'ensemble des matrices où $f\le f(I_n)$ l'est.

### Indice 2
Question 1 : calculer d'abord $\frac{d}{dt}\det(I_n+tH)\big|_{t=0}$ en utilisant la multilinéarité du déterminant par rapport aux colonnes, puis écrire $\det(A+H)=\det(A)\det(I_n+A^{-1}H)$. Question 4 : multiplicateurs de Lagrange avec $g(A)=\norm A^2$, $dg_A(H)=2\langle A,H\rangle$ et $d(\det)_A(H)=\langle {}^t(A^{-1}),H\rangle$ si $\det A=1$.

### Indice 3
La condition de Lagrange s'écrit $2A=w\,{}^t(A^{-1})$, soit $2A\,{}^tA=w I_n$. Prendre la trace (signe de $w$) puis le déterminant (valeur de $w$). Pour la question 5, se ramener à une matrice de $SL_n(\R)$ en multipliant $A$ par un scalaire et éventuellement par une matrice orthogonale de déterminant $-1$ ; pour $S$, utiliser une racine carrée symétrique de $S$.

## Corrigé

**1.** $\det A=\sum_{\sigma}\eps(\sigma)\prod_ia_{\sigma(i)i}$ est un polynôme en les coefficients de $A$, donc $\det$ est de classe $C^\infty$ sur $\mathrm M_n(\R)$ ; en particulier elle est différentiable et $d(\det)_A(H)=\frac{d}{dt}\det(A+tH)\big|_{t=0}$ (la différentielle se calcule comme une dérivée directionnelle, [[ch05-derivee-directionnelle-unicite]]).

*En $I_n$.* Notons $e_1,\dots,e_n$ les colonnes de $I_n$ et $h_1,\dots,h_n$ celles de $H$. Par multilinéarité du déterminant par rapport aux colonnes,
$$
\det(I_n+tH)=\det(e_1+th_1,\dots,e_n+th_n)=1+t\sum_{j=1}^n\det(e_1,\dots,e_{j-1},h_j,e_{j+1},\dots,e_n)+t^2P(t),
$$
où $P$ est un polynôme. Le $j$-ème déterminant vaut $h_{jj}$ (développer par rapport à la $j$-ème colonne, ou remarquer que seule la $j$-ème coordonnée de $h_j$ compte). Donc $d(\det)_{I_n}(H)=\sum_jh_{jj}=\mathrm{tr}H$.

*En $A\in\GL_n(\R)$.* $\det(A+H)=\det(A)\det(I_n+A^{-1}H)$, donc $\det=\det(A)\cdot(\det\circ L)$ au voisinage de $A$, avec $L(B)=I_n+A^{-1}(B-A)$ affine de partie linéaire $H\mapsto A^{-1}H$ et $L(A)=I_n$. Par la règle de composition ([[ch05-composition-differentielles]]),
$$
d(\det)_A(H)=\det(A)\,d(\det)_{I_n}(A^{-1}H)=\det(A)\,\mathrm{tr}(A^{-1}H).
$$

**2.** Soit $F=\det-1:\mathrm M_n(\R)\to\R$, de classe $C^\infty$ sur l'espace (ouvert) $\mathrm M_n(\R)\simeq\R^{n^2}$, et $SL_n(\R)=F^{-1}(\{0\})$. Pour $A\in SL_n(\R)$, $A$ est inversible et la question 1 donne
$$
dF_A(A)=\det(A)\,\mathrm{tr}(A^{-1}A)=\mathrm{tr}(I_n)=n\ne0 .
$$
Donc la forme linéaire $dF_A$ est non nulle, donc surjective sur $\R$, en tout point de $SL_n(\R)$ : $0$ est valeur régulière de $F$. D'après la proposition IX.4.1 ([[ch09-sous-variete-equation-valeur-reguliere]]), $SL_n(\R)$ est une sous-variété de $\mathrm M_n(\R)$ de dimension $n^2-1$. Elle est fermée comme image réciproque du fermé $\{1\}$ par l'application continue $\det$.

D'après la proposition IX.7.13 ([[ch09-espace-tangent-graphe-equation]]), $T_ASL_n(\R)=\ker dF_A=\{H\;;\;\mathrm{tr}(A^{-1}H)=0\}$ (le facteur $\det A=1$ disparaît). En posant $K=A^{-1}H$, c'est-à-dire $H=AK$ (bijection de $\mathrm M_n(\R)$ sur lui-même), la condition devient $\mathrm{tr}K=0$ : $T_ASL_n(\R)=\{AK\;;\;\mathrm{tr}K=0\}$. En particulier $T_{I_n}SL_n(\R)$ est l'hyperplan des matrices de trace nulle, de dimension $n^2-1$ comme il se doit.

**3.** *Non compacité.* Pour $t>0$, $D_t=\mathrm{diag}(t,1/t,1,\dots,1)\in SL_n(\R)$ et $\norm{D_t}\ge t\to+\infty$ : $SL_n(\R)$ n'est pas bornée, donc pas compacte. On ne peut donc pas appliquer directement « une fonction continue sur un compact atteint ses bornes ».

*Existence du minimum.* $f$ est la restriction de la fonction continue $A\mapsto\norm A^2$, donc continue. Posons $K=\{A\in SL_n(\R)\;;\;\norm A^2\le n\}$. Il contient $I_n$ ($\norm{I_n}^2=n$), il est fermé (intersection de deux fermés de $\mathrm M_n(\R)$) et borné, donc compact (dimension finie). $f$ atteint donc sur $K$ un minimum en un point $A_0$, avec $f(A_0)\le f(I_n)=n$. Pour $A\in SL_n(\R)\setminus K$, $f(A)>n\ge f(A_0)$. Donc $f(A_0)=\min_{SL_n(\R)}f$.

**4.** Appliquons les multiplicateurs de Lagrange (proposition IX.7.35, [[ch09-multiplicateurs-lagrange]]) : $SL_n(\R)=\{F=0\}$ avec $0$ valeur régulière (question 2), et $f$ est la restriction de $g(A)=\norm A^2=\langle A,A\rangle$, de classe $C^\infty$, avec $dg_A(H)=2\langle A,H\rangle$ (différentielle d'une forme bilinéaire symétrique). Pour $A\in SL_n(\R)$, $dF_A(H)=\mathrm{tr}(A^{-1}H)=\langle {}^t(A^{-1}),H\rangle$. Donc $A$ est critique si et seulement s'il existe $w\in\R$ tel que, pour tout $H$, $2\langle A,H\rangle=w\langle{}^t(A^{-1}),H\rangle$, c'est-à-dire
$$
2A=w\,{}^t(A^{-1})=w\,({}^tA)^{-1}\iff 2A\,{}^tA=w\,I_n .
$$
* En prenant la trace : $2\norm A^2=2\,\mathrm{tr}(A\,{}^tA)=nw$, donc $w=\frac2n\norm A^2>0$.
* En prenant le déterminant : $\det(2A\,{}^tA)=2^n(\det A)^2=2^n$ et $\det(wI_n)=w^n$, donc $w^n=2^n$ et, comme $w>0$, $w=2$.

Donc $A\,{}^tA=I_n$ : $A$ est orthogonale (et ${}^tAA=I_n$ aussi), de déterminant $1$, donc $A\in SO(n)$. Réciproquement, si $A\in SO(n)$, alors ${}^t(A^{-1})=A$ et $2A=2\,{}^t(A^{-1})$ : $A$ est critique (avec $w=2$). **Les points critiques de $f$ sont exactement les éléments de $SO(n)$.**

Le minimum $A_0$ de la question 3 est un extremum local, donc un point critique (théorème IX.7.31, [[ch09-extremum-local-differentielle-nulle]]) : $A_0\in SO(n)$. Or pour tout $A\in SO(n)$, $f(A)=\mathrm{tr}({}^tAA)=\mathrm{tr}I_n=n$. Donc
$$
\min_{SL_n(\R)}f=n,
$$
et ce minimum est atteint exactement sur $SO(n)$ : tout point de $SO(n)$ le réalise, et tout point où il est atteint est critique, donc dans $SO(n)$.

**5.** Soit $A\in\GL_n(\R)$, $d=|\det A|>0$. Soit $D=\mathrm{diag}(-1,1,\dots,1)$ si $\det A<0$, $D=I_n$ sinon ; $D$ est orthogonale, $\det(AD)=d$ et $\norm{AD}^2=\mathrm{tr}(D\,{}^tA\,A\,D)=\mathrm{tr}({}^tAA\,D\,D)=\norm A^2$ (car $D^2=I_n$ et $\mathrm{tr}(XY)=\mathrm{tr}(YX)$). La matrice $B=d^{-1/n}AD$ vérifie $\det B=d^{-1}\det(AD)=1$, donc, par 4.,
$$
n\le\norm B^2=d^{-2/n}\norm A^2,\qquad\text{soit}\qquad |\det A|^{2/n}\le\frac1n\norm A^2,
$$
avec égalité si et seulement si $B\in SO(n)$, c'est-à-dire $A\in\R_+^\times\,O(n)$.

Soit $S$ symétrique définie positive. Par le théorème spectral, $S={}^tP\Delta P$ avec $P\in O(n)$ et $\Delta=\mathrm{diag}(\lambda_1,\dots,\lambda_n)$, $\lambda_i>0$. Posons $R={}^tP\Delta^{1/2}P$ : $R$ est symétrique, inversible, et ${}^tRR=R^2=S$. Alors $\det S=(\det R)^2$ et $\norm R^2=\mathrm{tr}({}^tRR)=\mathrm{tr}S$. L'inégalité précédente appliquée à $R$ donne
$$
(\det S)^{1/n}=|\det R|^{2/n}\le\frac{\norm R^2}n=\frac{\mathrm{tr}\,S}n .
$$
En termes de valeurs propres : $(\lambda_1\cdots\lambda_n)^{1/n}\le\frac{\lambda_1+\dots+\lambda_n}n$ (inégalité arithmético-géométrique).

**6.** Non. Un maximum local serait un point critique (théorème IX.7.31), donc un élément $A$ de $SO(n)$, où $f(A)=n=\min f$. Mais alors $f\le n$ au voisinage de $A$ dans $SL_n(\R)$, donc $f=n$ près de $A$ (puisque $f\ge n$ partout). C'est faux : $t\mapsto A\,D_t$ (avec $D_t$ de la question 3) est une courbe continue dans $SL_n(\R)$ qui vaut $A$ en $t=1$, et $f(AD_t)=\mathrm{tr}(D_t\,{}^tAA\,D_t)=\mathrm{tr}(D_t^2)=t^2+t^{-2}+n-2>n$ pour $t\ne1$.

## Pièges et variantes

> ⚠️ $SL_n(\R)$ n'est pas compacte : l'existence du minimum demande un argument de **coercivité** (se restreindre au compact $\{f\le f(I_n)\}$). Pour un maximum, il n'y en a pas ($f$ n'est pas majorée).
* Pour vérifier que $0$ est valeur régulière, il ne suffit pas de calculer $d(\det)_{I_n}$ : il faut $d(\det)_A\ne0$ en **tout** $A\in SL_n(\R)$ ; la direction $H=A$ le donne d'un coup.
* Dans la condition de Lagrange, ne pas confondre $A^{-1}$ et ${}^t(A^{-1})$ : c'est le **gradient** de $\det$ (pour le produit scalaire $\mathrm{tr}({}^tAB)$) qui apparaît, soit la comatrice $\mathrm{com}(A)=\det(A)\,{}^t(A^{-1})$.
* Variante (problème de Procrustes) : pour $B\in\mathrm M_n(\R)$ donnée, maximiser $A\mapsto\mathrm{tr}(BA)$ sur $SO(n)$ (compacte, cette fois). Avec $T_ASO(n)=\{AK\;;\;{}^tK=-K\}$, les points critiques sont les $A\in SO(n)$ telles que $BA$ soit **symétrique**.
* Variante : sur $\{A\;;\;\det A=\delta\}$ ($\delta>0$), le minimum de $\norm A^2$ vaut $n\delta^{2/n}$, atteint sur $\delta^{1/n}SO(n)$.
