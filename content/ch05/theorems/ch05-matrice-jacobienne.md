---
id: ch05-matrice-jacobienne
type: definition
chapter: 5
title: Matrice jacobienne, formule (V.3.4), jacobien $\mathrm{Jac}(f)(a)$
ref: "non numéroté, section V.3.5, p. 103"
page: 103
importance: 2
depends: [ch05-differentiabilite-composantes, ch05-differentielles-partielles, ch05-lef-banach-norme-algebre, ch05-projections-injections-canoniques, ch05-derivee-variable-reelle]
tags: [jacobienne, jacobien, derivees-partielles, matrice, dimension-finie]
---
## Intuition

> 💡 En dimension finie, une application linéaire $\R^m\to\R^n$ « est » une matrice $n\times m$. La **matrice jacobienne** de $f$ en $a$ est simplement la matrice de la différentielle $df_a$ dans les bases canoniques. Sa **colonne $i$** dit comment bouge le point $f(x)$ quand on pousse un peu la seule variable $x_i$ (c'est le vecteur $\frac{\partial f}{\partial x_i}(a)\in\R^n$) ; sa **ligne $j$** dit comment la seule coordonnée $f_j$ réagit à chacune des variables.

Image : une toute petite grille carrée centrée en $a$ est envoyée par $f$, au premier ordre, sur une grille de parallélogrammes, image de la grille par la matrice jacobienne. Quand $m=n$, le facteur par lequel les aires (volumes) sont multipliées est $|\mathrm{Jac}(f)(a)|$, valeur absolue du **déterminant jacobien**.

Ingrédients : les **composantes** $f_j=p_j\circ f$ ([[ch05-differentiabilite-composantes]]), les **applications partielles** $f_{[i]}$ et les **dérivées partielles** ([[ch05-differentielles-partielles]]), les projections $p_i$ et injections $\iota_j$ canoniques ([[ch05-projections-injections-canoniques]]), et l'identification de $\mathcal L(\R;\R)$ avec $\R$ (une application linéaire $\R\to\R$ est $s\mapsto cs$, identifiée au nombre $c$ ; cf. [[ch05-derivee-variable-reelle]]).

## Énoncé

**Définition (poly, section V.3.5, p. 102-103).** Soit $f:\R^m\to\R^n$ (ou $f$ définie sur un ouvert $U$ de $\R^m$) et $a\in\R^m$. Les applications partielles $f_{[i]}$ en $a$ ($i=1,\dots,m$, section V.3.4) et les composantes $f_j$ ($j=1,\dots,n$, section V.3.3) permettent de définir $f_{[i]\,j}$ et $f_{j\,[i]}$ ; ces deux fonctions, définies sur un ouvert de $\R$ et à valeurs dans $\R$, coïncident, et on les note $f_{i,j}$ :
$$
f_{i,j}(x_i)=f_j(a_1,\dots,a_{i-1},x_i,a_{i+1},\dots,a_m).
$$
Si $f$ est **différentiable en $a$**, les $f_{i,j}$ sont dérivables en $a_i$, $f_{i,j}'(a_i)=\frac{\partial f_j}{\partial x_i}(a)$ (en identifiant l'application linéaire $\frac{\partial f_j}{\partial x_i}(a)\in\mathcal L(\R;\R)$ à un nombre réel, comme dans l'Exercice V.1.2), et
$$
df_a=\sum_{i=1,\dots,m}\ \sum_{j=1,\dots,n}\iota_j\circ\frac{\partial f_j}{\partial x_i}(a)\circ p_i.\qquad\text{(V.3.4)}
$$
Autrement dit, l'application linéaire $df_a$ est représentée dans les bases canoniques de $\R^m$ et $\R^n$ par la matrice à $n$ lignes et $m$ colonnes $\Big(\frac{\partial f_j}{\partial x_i}(a)\Big)_{j,i}$. On appelle cette matrice la **matrice jacobienne** de $f$ en $a$. L'équation (V.3.4) s'écrit alors
$$
df_a(h_1,\dots,h_m)=\begin{pmatrix}\frac{\partial f_1}{\partial x_1}(a) & \frac{\partial f_1}{\partial x_2}(a) & \cdots & \frac{\partial f_1}{\partial x_m}(a)\\ \vdots & \vdots & & \vdots\\ \frac{\partial f_n}{\partial x_1}(a) & \frac{\partial f_n}{\partial x_2}(a) & \cdots & \frac{\partial f_n}{\partial x_m}(a)\end{pmatrix}\begin{pmatrix}h_1\\ h_2\\ \vdots\\ h_m\end{pmatrix},
$$
où l'on identifie un élément de $\R^n$ au vecteur colonne (matrice à $n$ lignes et une colonne) qui lui est associé.

Si $n=m$, le déterminant de la matrice jacobienne, noté $\mathrm{Jac}(f)(a)$, s'appelle le **déterminant jacobien**, ou simplement **jacobien**, de $f$ en $a$.

*Justification de (V.3.4) (esquissée dans le poly).* Par la Proposition V.3.15 ([[ch05-differentiabilite-composantes]]), $f$ différentiable en $a$ entraîne que chaque $f_j=p_j\circ f$ l'est, et $df_a=\sum_{j=1}^n\iota_j\circ(df_j)_a$. Par la Proposition V.3.17 ([[ch05-differentielles-partielles]]) appliquée à $f_j:U\to\R$, chaque application partielle $(f_j)_{[i]}=f_{i,j}$ est dérivable en $a_i$, et $(df_j)_a=\sum_{i=1}^m\frac{\partial f_j}{\partial x_i}(a)\circ p_i$. En substituant on obtient (V.3.4). Enfin, en appliquant (V.3.4) au $i$-ème vecteur $e_i$ de la base canonique de $\R^m$ (pour lequel $p_k(e_i)=\delta_{ki}$), on trouve $df_a(e_i)=\sum_j\frac{\partial f_j}{\partial x_i}(a)\,\varepsilon_j$, où $(\varepsilon_j)$ est la base canonique de $\R^n$ : la $i$-ème colonne de la matrice de $df_a$ est bien $\big(\frac{\partial f_1}{\partial x_i}(a),\dots,\frac{\partial f_n}{\partial x_i}(a)\big)^\top$.

## Hypothèses

### H1 — $f$ différentiable en $a$

**Rôle.** C'est ce qui garantit que la matrice des dérivées partielles **représente** une différentielle, c'est-à-dire que $f(a+h)=f(a)+J\,h+o(h)$ où $J$ est cette matrice.

**Si on la retire.** La matrice $\big(\frac{\partial f_j}{\partial x_i}(a)\big)$ peut exister sans représenter quoi que ce soit : pour $f(x,y)=\frac{xy}{x^2+y^2}$, $f(0,0)=0$, les dérivées partielles en $0$ existent et valent $0$, la « matrice » est $(0\ \ 0)$, mais $f$ n'est pas différentiable en $0$ ([[ch05-partielles-sans-differentiabilite]]) ; en particulier $f(h)-f(0)-(0\ \ 0)h=f(h)$ n'est pas un $o(h)$ (prendre $h=(t,t)$). Pour $f$ quelconque, on parle seulement de « matrice des dérivées partielles », pas de matrice jacobienne au sens d'une différentielle.

### H2 — Bases canoniques

**Rôle.** La matrice dépend des bases choisies ; le poly fixe les bases canoniques de $\R^m$ et $\R^n$. Le déterminant jacobien, lui, ne dépend que de $df_a$ si l'on prend la **même** base au départ et à l'arrivée ($m=n$), puisque c'est le déterminant de l'endomorphisme $df_a$.

**Si on la retire.** Dans d'autres bases, $df_a$ est représentée par $Q^{-1}JP$ ($P$, $Q$ matrices de passage) : la matrice change, pas l'application linéaire.

## Exemples

* **Coordonnées polaires.** $f(r,\theta)=(r\cos\theta,\ r\sin\theta)$, de $\R^2$ dans $\R^2$, est $C^1$ (composantes $C^1$, dérivées partielles continues, [[ch05-c1-ssi-partielles-continues]]). Sa matrice jacobienne et son jacobien :
$$
J_f(r,\theta)=\begin{pmatrix}\cos\theta & -r\sin\theta\\ \sin\theta & r\cos\theta\end{pmatrix},\qquad \mathrm{Jac}(f)(r,\theta)=r\cos^2\theta+r\sin^2\theta=r.
$$
Ainsi un petit rectangle $[r,r+\delta r]\times[\theta,\theta+\delta\theta]$ a une image d'aire $\approx r\,\delta r\,\delta\theta$ : c'est le « $r\,dr\,d\theta$ » du changement de variables.
* **Une application de $\R^2$ dans $\R^3$.** $f(x,y)=(x^2y,\ e^x\sin y,\ x+y)$. Ici $n=3$ lignes, $m=2$ colonnes :
$$
J_f(x,y)=\begin{pmatrix}2xy & x^2\\ e^x\sin y & e^x\cos y\\ 1 & 1\end{pmatrix},\qquad J_f(0,0)=\begin{pmatrix}0&0\\0&1\\1&1\end{pmatrix},
$$
donc $df_{(0,0)}(h_1,h_2)=(0,\ h_2,\ h_1+h_2)$. Pas de jacobien ($n\neq m$).
* **Le carré complexe.** $f(x,y)=(x^2-y^2,\ 2xy)$ (c'est $z\mapsto z^2$ avec $z=x+iy$) :
$$
J_f(x,y)=\begin{pmatrix}2x & -2y\\ 2y & 2x\end{pmatrix},\qquad \mathrm{Jac}(f)(x,y)=4(x^2+y^2)=|2z|^2.
$$
La forme $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$ est celle d'une similitude : c'est la traduction matricielle des conditions de Cauchy–Riemann ([[ch01-cauchy-riemann]]), avec $f'(z)=2z=\alpha+i\beta$ et $\mathrm{Jac}=|f'(z)|^2$.
* **Règle de la chaîne en matrices.** Par [[ch05-composition-differentielles]], $d(g\circ f)_a=dg_{f(a)}\circ df_a$, donc $J_{g\circ f}(a)=J_g(f(a))\,J_f(a)$ (produit matriciel, dans cet ordre) et, si $m=n=p$, $\mathrm{Jac}(g\circ f)(a)=\mathrm{Jac}(g)(f(a))\,\mathrm{Jac}(f)(a)$.

## Pièges

* > ⚠️ **Lignes / colonnes.** La matrice a $n$ lignes (nombre de composantes à l'**arrivée**) et $m$ colonnes (nombre de variables au **départ**). La ligne $j$ contient les dérivées partielles de la composante $f_j$ ; la colonne $i$ est la dérivée partielle $\frac{\partial f}{\partial x_i}(a)\in\R^n$. L'indice $(j,i)$ du poly est (ligne, colonne).
* Écrire la matrice des dérivées partielles ne prouve **pas** la différentiabilité : il faut la justifier à part (par exemple dérivées partielles continues, [[ch05-c1-ssi-partielles-continues]]).
* Le **jacobien** n'a de sens que pour $m=n$ ; ne pas le confondre avec la matrice jacobienne.
* Ordre du produit dans la règle de la chaîne : $J_g(f(a))\,J_f(a)$, et $J_g$ est évaluée en $f(a)$, pas en $a$.
* L'identification $\frac{\partial f_j}{\partial x_i}(a)\in\mathcal L(\R;\R)\simeq\R$ est un léger abus de notation signalé par le poly : la dérivée partielle est une application linéaire $s\mapsto s\cdot c$, identifiée au réel $c$.
