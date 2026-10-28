---
id: ex-ch06-coefficients-racines-simples
type: exercise
chapters: [6, 5]
title: Les racines simples d'un polynôme dépendent régulièrement des coefficients
source: "Classique (dépendance lisse des racines simples d'un polynôme réel en ses coefficients) ; démarche par inversion globale et progression des questions inventées"
difficulty: 3
time: 40
tools: [ch06-inversion-globale, ch06-diffeomorphisme-def, ch05-differentielles-partielles, ch05-matrice-jacobienne, ch05-composition-differentielles]
---
## Énoncé

Soit $n\ge2$. À $c=(c_0,\dots,c_{n-1})\in\R^n$ on associe le polynôme unitaire $P_c(T)=T^n+c_{n-1}T^{n-1}+\dots+c_1T+c_0$, et l'on note $\R_{n-1}[T]$ l'espace des polynômes réels de degré $\le n-1$. On définit $\Pi:\R^n\to\R^n$ par
$$
P_{\Pi(x)}(T)=\prod_{i=1}^n(T-x_i)\qquad\big(x=(x_1,\dots,x_n)\in\R^n\big),
$$
autrement dit $\Pi(x)$ est la liste des coefficients (hors coefficient dominant) du polynôme unitaire de racines $x_1,\dots,x_n$. On pose enfin
$$
\Delta=\{x\in\R^n : x_1<x_2<\dots<x_n\},\qquad \mathcal H=\{c\in\R^n : P_c\ \text{a } n \text{ racines réelles distinctes}\}.
$$

1. *(Cas $n=2$.)* Expliciter $\Pi(x_1,x_2)$ et son jacobien. Vérifier directement que $\Pi$ réalise une bijection de $\Delta$ sur $\mathcal H=\{(c_0,c_1) : c_1^2-4c_0>0\}$, de réciproque $C^\infty$ explicite.
2. Montrer que $\Pi$ est de classe $C^\infty$ et que, pour $x,h\in\R^n$, le polynôme $\sum_{k=0}^{n-1}\big(d\Pi_x(h)\big)_kT^k$ est égal à $-\sum_{j=1}^nh_jL_j^x$, où $L_j^x(T)=\prod_{i\ne j}(T-x_i)$.
3. Montrer que $d\Pi_x$ est inversible si et seulement si les $x_i$ sont deux à deux distincts.
4. Montrer que $\mathcal H$ est un ouvert de $\R^n$ et que l'application $r:\mathcal H\to\R^n$ qui à $c$ associe la liste $(r_1(c),\dots,r_n(c))$ des racines de $P_c$ rangées par ordre croissant est de classe $C^\infty$.
5. Soient $c\in\mathcal H$, $x=r(c)$ et $q\in\R^n$, et $Q(T)=\sum_{k<n}q_kT^k$. Montrer que
$$
\frac{d}{dt}\Big|_{t=0}r_k(c+tq)=-\frac{Q(x_k)}{P_c'(x_k)}\qquad(1\le k\le n).
$$
En déduire un développement à l'ordre $1$ en $\eps$ des trois racines de $T^3-T+\eps$.
6. Soit $x^0\in\R^n$ ayant deux coordonnées égales et $c^0=\Pi(x^0)$. Montrer qu'il n'existe aucune application $\rho$ définie sur un voisinage de $c^0$, différentiable en $c^0$, telle que $\rho(c^0)=x^0$ et $\Pi\circ\rho=\id$. Illustrer avec $T^2-\eps$.

## Indices

### Indice 1
L'application « coefficients $\mapsto$ racines » est la réciproque de $\Pi$. On veut donc montrer que $\Pi$ est un difféomorphisme d'un ouvert sur un ouvert : quels sont les deux ingrédients d'un théorème d'inversion **global** ?

### Indice 2
Question 2 : les coefficients de $\prod(T-x_i)$ sont des polynômes en $x$ ; dériver le produit par rapport à $x_j$ (règle de Leibniz). Question 3 : évaluer l'identité $\sum_jh_jL_j^x=0$ au point $T=x_k$.

### Indice 3
Question 4 : $\Pi$ est injective sur $\Delta$ (un polynôme détermine l'ensemble de ses racines) et $\Pi(\Delta)=\mathcal H$ ; appliquer le théorème d'inversion globale à $\Pi|_\Delta$. Question 5 : $dr_c=(d\Pi_x)^{-1}$ ; résoudre $-\sum_jh_jL_j^x=Q$ en évaluant en $x_k$, et remarquer que $L_k^x(x_k)=P_c'(x_k)$.

### Indice 4
Question 6 : règle de la chaîne en $c^0$ appliquée à $\Pi\circ\rho=\id$.

## Corrigé

**1.** $(T-x_1)(T-x_2)=T^2-(x_1+x_2)T+x_1x_2$, donc $\Pi(x_1,x_2)=(x_1x_2,\,-(x_1+x_2))$ (dans l'ordre $(c_0,c_1)$). Sa matrice jacobienne ([[ch05-matrice-jacobienne]]) et son jacobien sont
$$
\begin{pmatrix}x_2&x_1\\-1&-1\end{pmatrix},\qquad \det=-x_2+x_1=x_1-x_2 .
$$
Pour $c=(c_0,c_1)$, $P_c=T^2+c_1T+c_0$ a deux racines réelles distinctes si et seulement si son discriminant $c_1^2-4c_0$ est $>0$, et elles valent alors $\frac{-c_1\mp\sqrt{c_1^2-4c_0}}2$. Si $x\in\Delta$, $\Pi(x)$ a pour discriminant $(x_1+x_2)^2-4x_1x_2=(x_1-x_2)^2>0$ : $\Pi(\Delta)\subset\mathcal H$. Réciproquement, l'application
$$
r(c_0,c_1)=\Big(\frac{-c_1-\sqrt{c_1^2-4c_0}}2,\ \frac{-c_1+\sqrt{c_1^2-4c_0}}2\Big)
$$
envoie $\mathcal H$ dans $\Delta$, est $C^\infty$ sur l'ouvert $\mathcal H$ (car $\sqrt{\cdot}$ est $C^\infty$ sur $]0,+\infty[$), et vérifie $\Pi\circ r=\id_{\mathcal H}$ (les racines de $P_c$ ont pour somme $-c_1$ et pour produit $c_0$) et $r\circ\Pi=\id_\Delta$ (les racines de $\Pi(x)$ sont $x_1<x_2$). Le jacobien $x_1-x_2$ ne s'annule pas sur $\Delta$, et s'annule exactement sur la diagonale, là où $r$ (qui fait intervenir $\sqrt{c_1^2-4c_0}$ en $c_1^2-4c_0=0$) cesse d'être différentiable.

**2.** Développons $\prod_{i=1}^n(T-x_i)=T^n+\sum_{k<n}\Pi_k(x)T^k$ : chaque coefficient $\Pi_k(x)$ est un polynôme en $(x_1,\dots,x_n)$ (au signe près, une fonction symétrique élémentaire). Donc $\Pi$ est de classe $C^\infty$. Pour la différentielle, on utilise les dérivées partielles ([[ch05-differentielles-partielles]]) : $d\Pi_x(h)=\sum_jh_j\,\frac{\partial\Pi}{\partial x_j}(x)$. Or, $x_j$ n'apparaissant que dans le facteur $T-x_j$, on obtient coefficient par coefficient
$$
\frac{\partial}{\partial x_j}\prod_{i=1}^n(T-x_i)=-\prod_{i\ne j}(T-x_i)=-L_j^x(T).
$$
L'application linéaire $\iota:\R^n\to\R_{n-1}[T]$, $\iota(c)=\sum_{k<n}c_kT^k$, commute avec la dérivation, d'où $\iota\big(d\Pi_x(h)\big)=-\sum_{j=1}^nh_jL_j^x$.

**3.** Comme $\iota$ est un isomorphisme, $d\Pi_x$ est injective si et seulement si $h\mapsto\sum_jh_jL_j^x$ l'est, c'est-à-dire si et seulement si les $n$ polynômes $L_1^x,\dots,L_n^x$ sont linéairement indépendants.

*Si les $x_i$ sont distincts.* Supposons $\sum_jh_jL_j^x=0$ et fixons $k$. Pour $j\ne k$, $L_j^x$ contient le facteur $T-x_k$, donc $L_j^x(x_k)=0$ ; et $L_k^x(x_k)=\prod_{i\ne k}(x_k-x_i)\ne0$. En évaluant en $T=x_k$ : $h_kL_k^x(x_k)=0$, donc $h_k=0$. Ainsi $d\Pi_x$ est un endomorphisme injectif de $\R^n$, donc inversible.

*Si $x_i=x_j$ avec $i\ne j$.* Alors $L_i^x=\prod_{l\ne i}(T-x_l)$ et $L_j^x=\prod_{l\ne j}(T-x_l)$ ne diffèrent que par l'échange du facteur $T-x_j$ contre $T-x_i$, qui sont égaux : $L_i^x=L_j^x$. Donc $h=e_i-e_j\ne0$ (vecteurs de la base canonique) vérifie $d\Pi_x(h)=0$ : $d\Pi_x$ n'est pas inversible.

**4.** *$\Delta$ est ouvert* : c'est l'intersection finie des demi-espaces ouverts $\{x_{i+1}-x_i>0\}$.

*$\Pi(\Delta)=\mathcal H$.* Si $x\in\Delta$, $P_{\Pi(x)}=\prod(T-x_i)$ a les $n$ racines réelles distinctes $x_1<\dots<x_n$, donc $\Pi(x)\in\mathcal H$. Si $c\in\mathcal H$ et $y_1<\dots<y_n$ sont les racines de $P_c$, le polynôme unitaire $P_c$ de degré $n$ est divisible par $\prod(T-y_i)$, unitaire de degré $n$, donc lui est égal : $c=\Pi(y)$ avec $y\in\Delta$.

*$\Pi|_\Delta$ est injective.* Si $\Pi(x)=\Pi(y)$ avec $x,y\in\Delta$, les polynômes $\prod(T-x_i)$ et $\prod(T-y_i)$ sont égaux, donc ont le même ensemble de racines : $\{x_1,\dots,x_n\}=\{y_1,\dots,y_n\}$. Les deux listes étant strictement croissantes, $x=y$.

*Inversion globale.* $\Pi|_\Delta:\Delta\to\R^n$ est de classe $C^\infty$ sur l'ouvert $\Delta$ de l'espace de Banach réel $\R^n$, injective, et pour tout $x\in\Delta$, $d\Pi_x$ est inversible (question 3, coordonnées distinctes), donc un isomorphisme bicontinu (dimension finie). Par le théorème d'inversion globale ([[ch06-inversion-globale]]), $\Pi(\Delta)=\mathcal H$ est ouvert et la réciproque $\mathcal H\to\Delta$ est de classe $C^\infty$. Cette réciproque associe à $c$ l'unique $x\in\Delta$ tel que $\Pi(x)=c$, c'est-à-dire la liste croissante des racines de $P_c$ : c'est $r$. Donc $\Pi|_\Delta$ est un $C^\infty$-difféomorphisme de $\Delta$ sur $\mathcal H$ ([[ch06-diffeomorphisme-def]]) et $r$ est $C^\infty$.

**5.** Soit $x=r(c)\in\Delta$. Par la règle de la chaîne ([[ch05-composition-differentielles]]) appliquée à $\Pi\circ r=\id_{\mathcal H}$, $d\Pi_x\circ dr_c=\id$, donc $dr_c=(d\Pi_x)^{-1}$, et $\frac{d}{dt}\big|_{t=0}r(c+tq)=dr_c(q)=:h$ est l'unique solution de $d\Pi_x(h)=q$, soit, d'après la question 2,
$$
-\sum_{j=1}^nh_jL_j^x=Q .
$$
En évaluant en $T=x_k$ comme à la question 3 : $-h_kL_k^x(x_k)=Q(x_k)$. Enfin $P_c=\prod_i(T-x_i)$, donc par la règle de Leibniz $P_c'=\sum_jL_j^x$ et $P_c'(x_k)=L_k^x(x_k)\ne0$. D'où $h_k=-\dfrac{Q(x_k)}{P_c'(x_k)}$, ce qui est la formule annoncée.

*Application.* $P=T^3-T$, de racines $-1<0<1$, donc $c=(0,-1,0)\in\mathcal H$. On perturbe par $q=(1,0,0)$, i.e. $Q=1$ : $P_{c+\eps q}=T^3-T+\eps$. Comme $P'(T)=3T^2-1$, $P'(-1)=2$, $P'(0)=-1$, $P'(1)=2$. Comme $r$ est $C^1$ (même $C^\infty$), $r(c+\eps q)=r(c)+\eps\,dr_c(q)+o(\eps)$ :
$$
r_1=-1-\frac\eps2+o(\eps),\qquad r_2=\eps+o(\eps),\qquad r_3=1-\frac\eps2+o(\eps)
$$
(et même $O(\eps^2)$ puisque $r$ est $C^2$). Contrôle : la somme des racines vaut $-c_2=0$, et en effet $-1-\frac\eps2+\eps+1-\frac\eps2=0$.

**6.** Supposons qu'un tel $\rho$ existe. La règle de la chaîne en $c^0$ ($\rho$ différentiable en $c^0$, $\Pi$ différentiable en $\rho(c^0)=x^0$) appliquée à $\Pi\circ\rho=\id$ donne $d\Pi_{x^0}\circ d\rho_{c^0}=\id_{\R^n}$. Donc $d\Pi_{x^0}$ est surjective, donc inversible (endomorphisme de $\R^n$), ce qui contredit la question 3 puisque $x^0$ a deux coordonnées égales.

*Illustration.* $n=2$, $x^0=(0,0)$, $c^0=(0,0)$, $P_{c^0}=T^2$. Pour $c=(-\eps,0)$, $P_c=T^2-\eps$ a pour racines $\pm\sqrt\eps$ si $\eps>0$ : $\eps\mapsto\sqrt\eps$ n'est pas dérivable en $0$ ; et pour $\eps<0$ il n'y a même plus de racine réelle. Les racines (complexes) d'un polynôme dépendent continûment des coefficients, mais pas différentiablement en une racine multiple ; et si l'on exige des racines réelles, elles peuvent même disparaître.

## Pièges et variantes

* Ne pas oublier l'**injectivité** : l'inversion locale seule donne, près de chaque $c\in\mathcal H$, une application $C^\infty$ « racines », mais pour obtenir une application globale bien définie sur $\mathcal H$ il faut l'injectivité de $\Pi$ sur $\Delta$. Sur $\R^n$ tout entier $\Pi$ n'est pas injective ($\Pi$ est invariante par permutation des coordonnées) : c'est pourquoi on se restreint à $\Delta$.
* Le jacobien de $\Pi$ est, au signe près, le déterminant de Vandermonde $\prod_{i<j}(x_j-x_i)$ ; la question 3 évite ce calcul en testant l'injectivité de $d\Pi_x$ par évaluation aux points $x_k$ (interpolation de Lagrange).
* La formule de la question 5 se retrouve aussi par le théorème des fonctions implicites appliqué à $(c,y)\mapsto P_c(y)$ en $(c,x_k)$, avec $\partial_yP_c(x_k)=P_c'(x_k)\ne0$ : dériver $P_{c+tq}(r_k(c+tq))=0$ donne $Q(x_k)+P_c'(x_k)\,r_k'=0$. Ce point de vue traite une racine à la fois ; l'inversion globale les traite toutes ensemble et donne en prime que $\mathcal H$ est ouvert.
* Variante : même énoncé pour les valeurs propres simples d'une matrice (composer $r$ avec $A\mapsto$ coefficients du polynôme caractéristique), cf. [[ch06-valeurs-propres-simples-lisses]].
