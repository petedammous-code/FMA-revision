---
id: ch01-operateurs-dz-dzbar
type: proposition
chapter: 1
title: "Opérateurs $\partial/\partial z$, $\partial/\partial\bar z$ et formule (I.2.4) : $df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega$"
ref: Remarque I.2.2
page: 7
importance: 2
depends: [ch01-decomposition-r-lineaire, ch01-def-differentiable-r2]
tags: [dz, dzbar, wirtinger, differentielle, operateurs]
---
## Intuition

> 💡 Au lieu de décrire $f$ avec les coordonnées réelles $(x,y)$, on la décrit avec le couple $(z,\bar z)$, où $x=\frac{z+\bar z}2$ et $y=\frac{z-\bar z}{2i}$. Les opérateurs $\frac{\partial}{\partial z}$ et $\frac{\partial}{\partial\bar z}$ sont les « dérivées partielles par rapport à $z$ et à $\bar z$ » : formellement, on fait comme si $z$ et $\bar z$ étaient deux variables indépendantes.

Heuristique (à ne pas prendre pour une preuve) : $dz=dx+i\,dy$ et $d\bar z=dx-i\,dy$, donc $dx=\frac{dz+d\bar z}{2}$, $dy=\frac{dz-d\bar z}{2i}$ et
$$
\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy=\frac12\Bigl(\frac{\partial f}{\partial x}-i\frac{\partial f}{\partial y}\Bigr)dz+\frac12\Bigl(\frac{\partial f}{\partial x}+i\frac{\partial f}{\partial y}\Bigr)d\bar z .
$$
La version rigoureuse : ces deux opérateurs donnent exactement les coefficients $a$ et $b$ du [[ch01-decomposition-r-lineaire|lemme I.2.1]] appliqué à la différentielle $df_z$ ([[ch01-def-differentiable-r2]]). Le coefficient de $\bar\omega$ mesure le « défaut de $\C$-linéarité » de $df_z$.

Notation : pour $f=P+iQ$, $\frac{\partial f}{\partial x}:=\frac{\partial P}{\partial x}+i\frac{\partial Q}{\partial x}$ et $\frac{\partial f}{\partial y}:=\frac{\partial P}{\partial y}+i\frac{\partial Q}{\partial y}$ (dérivées partielles d'une fonction à valeurs complexes).

## Énoncé

**Proposition (poly, Remarque I.2.2, p. 7).** On introduit les opérateurs différentiels
$$
\frac{\partial}{\partial z}:=\frac12\Bigl(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Bigr)\qquad\text{et}\qquad\frac{\partial}{\partial\bar z}:=\frac12\Bigl(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Bigr).
$$
Soit $f:\Omega\to\C$ ($\Omega$ ouvert) différentiable en $z\in\Omega$. Alors $df_z(1)=\frac{\partial f}{\partial x}(z)$ et $df_z(i)=\frac{\partial f}{\partial y}(z)$, de sorte que les coefficients $a$, $b$ du lemme I.2.1 appliqué à $L=df_z$ sont
$$
a=\frac12\Bigl(\frac{\partial f}{\partial x}-i\frac{\partial f}{\partial y}\Bigr)(z)=\frac{\partial f}{\partial z}(z),\qquad b=\frac12\Bigl(\frac{\partial f}{\partial x}+i\frac{\partial f}{\partial y}\Bigr)(z)=\frac{\partial f}{\partial\bar z}(z).
$$
Autrement dit, ces deux opérateurs sont les coordonnées de la différentielle dans la décomposition du lemme I.2.1 :
$$
\text{(I.2.4)}\qquad df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega,\qquad(\omega\in\C).
$$

## Hypothèses

### H1 — $f$ différentiable (au sens réel) au point $z$

**Rôle.** Elle fournit l'application $\R$-linéaire $df_z$ à laquelle on applique le lemme I.2.1, et elle garantit l'existence des dérivées partielles avec $df_z(1)=\frac{\partial f}{\partial x}(z)$, $df_z(i)=\frac{\partial f}{\partial y}(z)$.

**Si on la retire.** Les nombres $\frac{\partial f}{\partial z}(z)$, $\frac{\partial f}{\partial\bar z}(z)$ peuvent encore exister (il suffit que les dérivées partielles existent), mais l'application $\omega\mapsto\frac{\partial f}{\partial z}(z)\omega+\frac{\partial f}{\partial\bar z}(z)\bar\omega$ n'approxime plus $f(z+\omega)-f(z)$. Exemple : $f(x,y)=\dfrac{xy}{x^2+y^2}$, $f(0)=0$. Elle est nulle sur les deux axes, donc $\frac{\partial f}{\partial x}(0)=\frac{\partial f}{\partial y}(0)=0$ et $\frac{\partial f}{\partial z}(0)=\frac{\partial f}{\partial\bar z}(0)=0$ ; pourtant $f(\tau+i\tau)-f(0)=\frac12$ n'est pas $o(|\tau+i\tau|)$ : $f$ n'est pas différentiable en $0$ et (I.2.4) n'a pas de sens.

## Idée de la preuve

On calcule $df_z(1)$ et $df_z(i)$ en prenant $\omega$ réel puis imaginaire pur dans le développement (I.2.3) : ce sont $\frac{\partial f}{\partial x}(z)$ et $\frac{\partial f}{\partial y}(z)$. On injecte dans les formules $a=\frac12(L(1)-iL(i))$, $b=\frac12(L(1)+iL(i))$ du lemme I.2.1.

## Preuve

Par hypothèse, $f$ est différentiable en $z$ : d'après (I.2.3) ([[ch01-def-differentiable-r2]]),
$$
f(z+\omega)-f(z)-df_z(\omega)=o(|\omega|).
$$
*Calcul de $df_z(1)$.* Prenons $\omega=\tau\in\R^*$ petit. Par $\R$-linéarité $df_z(\tau)=\tau\,df_z(1)$, d'où, en divisant par $\tau$,
$$
\frac{f(z+\tau)-f(z)}{\tau}-df_z(1)\xrightarrow[\tau\to0]{}0 .
$$
Le quotient de gauche est le taux d'accroissement de $(x,y)\mapsto f(x,y)$ dans la direction $x$ ; sa limite est par définition $\frac{\partial f}{\partial x}(z)=\frac{\partial P}{\partial x}(z)+i\frac{\partial Q}{\partial x}(z)$. Donc $df_z(1)=\frac{\partial f}{\partial x}(z)$.

*Calcul de $df_z(i)$.* De même avec $\omega=i\tau$, $\tau\in\R^*$ : $df_z(i\tau)=\tau\,df_z(i)$ et $\frac{f(z+i\tau)-f(z)}{\tau}\to df_z(i)$ ; le membre de gauche est le taux d'accroissement dans la direction $y$, donc $df_z(i)=\frac{\partial f}{\partial y}(z)$.

*Conclusion.* L'application $L=df_z$ est $\R$-linéaire de $\C$ dans $\C$ ; par le lemme I.2.1 ([[ch01-decomposition-r-lineaire]]), $df_z(\omega)=a\omega+b\bar\omega$ avec
$$
a=\frac12\bigl(df_z(1)-i\,df_z(i)\bigr)=\frac12\Bigl(\frac{\partial f}{\partial x}-i\frac{\partial f}{\partial y}\Bigr)(z)=\frac{\partial f}{\partial z}(z),\qquad b=\frac12\bigl(df_z(1)+i\,df_z(i)\bigr)=\frac{\partial f}{\partial\bar z}(z),
$$
ce qui est (I.2.4). $\square$

## Preuve à trous

Comme $f$ est différentiable en $z$, $f(z+\omega)-f(z)-df_z(\omega)=o(|\omega|)$. En prenant <trou indice="quelle direction donne la dérivée partielle en x ?">$\omega=\tau$ réel, et en divisant par $\tau$, on obtient $\frac{f(z+\tau)-f(z)}{\tau}\to df_z(1)$</trou>, donc $df_z(1)=\frac{\partial f}{\partial x}(z)$. De même, avec $\omega=i\tau$, on obtient <trou>$df_z(i)=\frac{\partial f}{\partial y}(z)$</trou>. On applique alors le <trou indice="résultat d'algèbre sur les applications R-linéaires de C">lemme I.2.1 à $L=df_z$ : $a=\frac12(df_z(1)-i\,df_z(i))$ et $b=\frac12(df_z(1)+i\,df_z(i))$</trou>, qui valent respectivement $\frac{\partial f}{\partial z}(z)$ et $\frac{\partial f}{\partial\bar z}(z)$, d'où (I.2.4). $\square$

## Exemples

* **$f(z)=z$ et $f(z)=\bar z$.** Pour $f=z=x+iy$ : $\frac{\partial f}{\partial x}=1$, $\frac{\partial f}{\partial y}=i$, donc $\frac{\partial z}{\partial z}=\frac{1-i\cdot i}2=1$ et $\frac{\partial z}{\partial\bar z}=\frac{1+i\cdot i}2=0$. Pour $f=\bar z=x-iy$ : $\frac{\partial f}{\partial y}=-i$, donc $\frac{\partial\bar z}{\partial z}=\frac{1-1}{2}=0$ et $\frac{\partial\bar z}{\partial\bar z}=\frac{1+1}2=1$. Cela justifie l'heuristique « $z$ et $\bar z$ variables indépendantes ».
* **$f(z)=|z|^2=x^2+y^2$.** $\frac{\partial f}{\partial x}=2x$, $\frac{\partial f}{\partial y}=2y$, donc $\frac{\partial f}{\partial z}=x-iy=\bar z$ et $\frac{\partial f}{\partial\bar z}=x+iy=z$ (ce qu'on obtient aussi en dérivant formellement $z\bar z$). Par (I.2.4) : $df_z(\omega)=\bar z\omega+z\bar\omega=2\Re(\bar z\omega)=2(xs+yt)$ pour $\omega=s+it$, c'est bien le produit scalaire de $\omega$ avec le gradient $(2x,2y)$.
* **$f(z)=z^2$.** $\frac{\partial f}{\partial x}=2(x+iy)=2z$ et $\frac{\partial f}{\partial y}=-2y+2ix=2iz$. Donc $\frac{\partial f}{\partial z}=\frac{2z-i\cdot2iz}{2}=2z$ et $\frac{\partial f}{\partial\bar z}=\frac{2z+i\cdot 2iz}{2}=0$ : $df_z(\omega)=2z\,\omega$, une multiplication — signe de $\C$-dérivabilité ([[ch01-cauchy-riemann]]).

## Pièges

* > ⚠️ Ne pas oublier le facteur $\frac12$, ni les signes : $\frac{\partial}{\partial z}$ a un **moins**, $\frac{\partial}{\partial\bar z}$ a un **plus**. Contrôle : $\frac{\partial z}{\partial z}=1$, $\frac{\partial z}{\partial\bar z}=0$.
* $\frac{\partial f}{\partial\bar z}$ n'est **pas** le conjugué de $\frac{\partial f}{\partial z}$ ; la bonne relation est $\overline{\frac{\partial f}{\partial z}}=\frac{\partial\bar f}{\partial\bar z}$ (formules (I.2.9), [[ch01-formulaire-dz-dzbar]]). Par exemple pour $f=z$ : $\frac{\partial f}{\partial z}=1$ mais $\frac{\partial f}{\partial\bar z}=0$.
* « $z$ et $\bar z$ indépendantes » est un moyen de **calcul** (justifié par les règles (I.2.10)–(I.2.11)), pas un énoncé mathématique : $\bar z$ est évidemment déterminé par $z$.
* (I.2.4) suppose $f$ **différentiable** : l'existence des dérivées partielles ne suffit pas.
