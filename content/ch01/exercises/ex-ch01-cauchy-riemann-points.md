---
id: ex-ch01-cauchy-riemann-points
type: exercise
chapters: [1]
title: Où une fonction est-elle C-dérivable ? Conditions de Cauchy en pratique
source: Inventé
difficulty: 1
time: 15
tools: [ch01-cauchy-riemann, ch01-c-derivable-ssi-df-c-lineaire, ch01-operateurs-dz-dzbar, ch01-formulaire-dz-dzbar, ch01-holomorphe-ssi-c1-et-dzbar-nul, ch01-similitude-conforme]
---
## Énoncé

On identifie $\C$ à $\R^2$ en écrivant $z=x+iy$ avec $x,y$ réels.

1. Soit $f:\C\to\C$ définie par $f(z)=z^2+\bar z^{\,2}-2\bar z$. Déterminer l'ensemble des points $z\in\C$ où $f$ est $\C$-dérivable, et calculer $f'(z)$ en ces points. Existe-t-il un ouvert non vide de $\C$ sur lequel $f$ est holomorphe ?
2. Soient $a,b,c$ trois réels et $P:\C\to\C$ définie par
$$
P(x+iy)=x^3+a\,xy^2+i\left(b\,x^2y+c\,y^3\right).
$$
Déterminer les triplets $(a,b,c)$ pour lesquels $P$ est holomorphe sur $\C$, et exprimer alors $P$ comme une fonction de $z$.
3. Pour le triplet trouvé en 2, calculer directement le déterminant de la matrice jacobienne de $P$ (vue comme application de $\R^2$ dans $\R^2$) au point $(x,y)$, et vérifier qu'il vaut $|P'(z)|^2$. En quels points $P$ est-elle conforme ?

## Indices

### Indice 1
Les deux fonctions sont polynomiales en $(x,y)$, donc différentiables au sens réel en tout point. Il reste à tester, point par point, la condition qui caractérise la $\C$-dérivabilité d'une fonction différentiable.

### Indice 2
Corollaire I.2.4 : une fonction différentiable en $z$ y est $\C$-dérivable si et seulement si $\frac{\partial f}{\partial\bar z}(z)=0$, et alors $f'(z)=\frac{\partial f}{\partial z}(z)$. Pour la question 1, calculer $\frac{\partial f}{\partial\bar z}$ avec les règles $\frac{\partial z}{\partial\bar z}=0$, $\frac{\partial\bar z}{\partial\bar z}=1$ et la règle du produit. Pour la question 2, écrire les conditions de Cauchy réelles $\partial_xP_1=\partial_yP_2$, $\partial_yP_1=-\partial_xP_2$ (où $P=P_1+iP_2$) et identifier les coefficients des monômes.

### Indice 3
Question 1 : on trouve $\frac{\partial f}{\partial\bar z}=2\bar z-2$. Question 2 : la première condition de Cauchy donne $3x^2+a y^2=b x^2+3c y^2$ pour tous $x,y$.

## Corrigé

**Rappels.** Pour $f$ différentiable au sens réel, on note $\frac{\partial f}{\partial z}=\frac12\left(\frac{\partial f}{\partial x}-i\frac{\partial f}{\partial y}\right)$ et $\frac{\partial f}{\partial\bar z}=\frac12\left(\frac{\partial f}{\partial x}+i\frac{\partial f}{\partial y}\right)$ ([[ch01-operateurs-dz-dzbar]]). Le critère utilisé partout est le corollaire I.2.4 (poly, Corollaire I.2.4, p. 8, [[ch01-cauchy-riemann]]) : si $f$ est différentiable en $z$, alors $f$ est $\C$-dérivable en $z$ si et seulement si $\frac{\partial f}{\partial\bar z}(z)=0$, et dans ce cas $f'(z)=\frac{\partial f}{\partial z}(z)$.

**1.** *Hypothèse du critère.* En écrivant $z=x+iy$, on a $z^2+\bar z^2=2\Re(z^2)=2(x^2-y^2)$ et $-2\bar z=-2x+2iy$, donc
$$
f(x+iy)=\underbrace{2x^2-2y^2-2x}_{=:u(x,y)}+i\,\underbrace{2y}_{=:v(x,y)} .
$$
Les fonctions $u$ et $v$ sont polynomiales, donc $C^1$ sur $\R^2$ : $f$ est différentiable en tout point.

*Calcul de $\partial f/\partial\bar z$.* Avec le formulaire (poly, formules (I.2.9)–(I.2.11), p. 8, [[ch01-formulaire-dz-dzbar]]) : $\frac{\partial (z^2)}{\partial\bar z}=0$ ($z^2$ est holomorphe) ; $\frac{\partial(\bar z^2)}{\partial\bar z}=\overline{\frac{\partial (z^2)}{\partial z}}=\overline{2z}=2\bar z$ ; $\frac{\partial\bar z}{\partial\bar z}=1$. D'où
$$
\frac{\partial f}{\partial\bar z}(z)=2\bar z-2 .
$$
Elle s'annule si et seulement si $\bar z=1$, c'est-à-dire $z=1$.

*Vérification par les conditions de Cauchy réelles.* $\partial_xu=4x-2$, $\partial_yv=2$ : égalité si et seulement si $x=1$. $\partial_yu=-4y$, $-\partial_xv=0$ : égalité si et seulement si $y=0$. On retrouve le seul point $z=1$.

*Conclusion.* $f$ est $\C$-dérivable **au seul point $z=1$**, avec
$$
f'(1)=\frac{\partial f}{\partial z}(1)=\left(2z+\frac{\partial(\bar z^2)}{\partial z}-2\frac{\partial\bar z}{\partial z}\right)\Big|_{z=1}=2\cdot1+0-0=2,
$$
car $\frac{\partial(\bar z^2)}{\partial z}=\overline{\frac{\partial(z^2)}{\partial\bar z}}=0$ et $\frac{\partial\bar z}{\partial z}=0$. (Contrôle : $\frac{\partial f}{\partial z}=\frac12(\partial_xu+\partial_yv)+\frac i2(\partial_xv-\partial_yu)$ en $(1,0)$ vaut $\frac12(2+2)+\frac i2(0-0)=2$.)

Être holomorphe sur un ouvert $U$ exige la $\C$-dérivabilité en **tout** point de $U$ ([[ch01-def-holomorphe]]) ; or l'ensemble $\{1\}$ ne contient aucun ouvert non vide. **Il n'existe donc aucun ouvert non vide sur lequel $f$ est holomorphe.**

**2.** Notons $P_1=x^3+axy^2$ et $P_2=bx^2y+cy^3$. Ces fonctions sont polynomiales, donc $P$ est de classe $C^1$ sur $\R^2$. D'après la remarque I.2.6 (poly, p. 8, [[ch01-holomorphe-ssi-c1-et-dzbar-nul]]), $P$ est holomorphe sur $\C$ si et seulement si les conditions de Cauchy réelles sont satisfaites **en tout point** $(x,y)\in\R^2$ :
$$
\begin{aligned}
\partial_xP_1=\partial_yP_2 &\iff 3x^2+a y^2=b x^2+3c y^2 \quad\forall (x,y),\\
\partial_yP_1=-\partial_xP_2 &\iff 2a\,xy=-2b\,xy\quad\forall (x,y).
\end{aligned}
$$
Deux polynômes en $(x,y)$ égaux sur $\R^2$ ont les mêmes coefficients, donc la première ligne équivaut à $b=3$ et $a=3c$, la seconde à $a=-b$. D'où $a=-3$, $b=3$, $c=-1$ : **un seul triplet**, $(a,b,c)=(-3,3,-1)$.

Alors $P(x+iy)=x^3-3xy^2+i(3x^2y-y^3)$. Or $(x+iy)^3=x^3+3ix^2y-3xy^2-iy^3$, donc **$P(z)=z^3$**, qui est bien holomorphe sur $\C$ ([[ch01-polynomes-fractions-rationnelles]]) — ce qui confirme la réciproque.

**3.** La matrice jacobienne de $P$ en $(x,y)$ est
$$
\begin{pmatrix}\partial_xP_1&\partial_yP_1\\ \partial_xP_2&\partial_yP_2\end{pmatrix}
=\begin{pmatrix}3x^2-3y^2&-6xy\\ 6xy&3x^2-3y^2\end{pmatrix},
$$
de la forme $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$ comme l'annonce la remarque I.2.5 ([[ch01-similitude-conforme]]). Son déterminant vaut
$$
(3x^2-3y^2)^2+(6xy)^2=9\left(x^4-2x^2y^2+y^4+4x^2y^2\right)=9(x^2+y^2)^2=9|z|^4 .
$$
Et $P'(z)=3z^2$ donne $|P'(z)|^2=9|z|^4$ : les deux coïncident.

D'après la remarque I.2.5, $P$ est conforme en tout point où $P'(z)\neq0$, c'est-à-dire **en tout $z\neq0$**. En $z=0$ la jacobienne est nulle : $P$ n'est pas conforme (et de fait $z\mapsto z^3$ triple les angles entre demi-droites issues de $0$).

## Pièges et variantes

* Ne pas conclure « $f$ est holomorphe en $1$ » : l'holomorphie est une notion **sur un ouvert** ; en un point isolé on parle seulement de $\C$-dérivabilité.
* Avant d'appliquer le critère $\partial f/\partial\bar z=0$, il faut que $f$ soit **différentiable** au point : ici c'est gratuit (polynômes en $x,y$), mais pour une fonction comme $z\mapsto z^5/|z|^4$ (prolongée par $0$) les conditions de Cauchy sont satisfaites en $0$ sans que la fonction y soit $\C$-dérivable.
* Erreur fréquente : écrire $\frac{\partial(\bar z^2)}{\partial\bar z}=2z$. La bonne valeur est $2\bar z$ (on dérive « $\bar z^2$ comme $w^2$ en la variable $w=\bar z$ »).
* Variante : $g(z)=|z|^2+\alpha z^2$ ($\alpha\in\C$). Alors $\frac{\partial g}{\partial\bar z}=z$ : $g$ n'est $\C$-dérivable qu'en $0$, quel que soit $\alpha$.
* Variante : chercher les polynômes réels homogènes de degré $3$, $P_1$, tels qu'il existe $P_2$ avec $P_1+iP_2$ holomorphe : il faut et il suffit que $\Delta P_1=0$ ([[ch01-laplacien-harmonique]]), ce qui donne $P_1=\Re(\lambda z^3)$ avec $\lambda\in\C$.
