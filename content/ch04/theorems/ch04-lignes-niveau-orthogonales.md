---
id: ch04-lignes-niveau-orthogonales
type: proposition
chapter: 4
title: Orthogonalité des lignes de niveau de $\Re f$ et $\Im f$
ref: non numéroté, section IV.1, p. 75 (lignes de niveau orthogonales)
page: 75
importance: 2
depends: [ch01-inversion-locale-holomorphe, ch04-holomorphe-conserve-angles, ch01-cauchy-riemann, ch04-transformation-conforme-def]
tags: [conforme, lignes de niveau, orthogonalite, grillage, equipotentielles]
---
## Intuition

> 💡 Dans le plan d'arrivée, les droites verticales $\Re w=c$ et horizontales $\Im w=c'$ forment un quadrillage à angles droits. Les lignes de niveau $\Re f=c$ et $\Im f=c'$ dans le plan de départ sont les **préimages** de ce quadrillage : près d'un point où $f'\neq0$, $f$ est inversible, la réciproque $f^{-1}$ est holomorphe donc conforme, et elle transporte le quadrillage en un « quadrillage courbe » qui garde ses angles droits.

Physiquement, si $\Phi=\Re f$ est un potentiel (électrostatique, des vitesses...), les lignes $\Phi=c$ sont les **équipotentielles** et les lignes $\Im f=c'$ sont les **lignes de champ** (ou de courant) : la proposition explique leur orthogonalité, bien connue en électromagnétisme plan ([[ch04-exemple-argtanh]], [[ch04-ecoulement-potentiel]]).

Rappels : pour $f\in\Hol(\Omega)$ ([[ch01-def-holomorphe]]) et $c\in\R$, la **ligne de niveau** $\{\Re f=c\}$ est l'ensemble $\{z\in\Omega : \Re f(z)=c\}$ ; dire que deux courbes se coupent **orthogonalement** en un point signifie que leurs vecteurs tangents en ce point sont orthogonaux (angle $\pm\pi/2$, [[ch04-transformation-conforme-def]]). Le résultat utilisé est la conservation des angles par les fonctions holomorphes à dérivée non nulle ([[ch04-holomorphe-conserve-angles]]) et l'inversion locale holomorphe (Proposition I.4.4, [[ch01-inversion-locale-holomorphe]]).

## Énoncé

**Proposition (poly, section IV.1, p. 75-76).** Soient $f\in\Hol(\Omega)$ et $z_0\in\Omega$ tel que $f'(z_0)\neq0$. Écrivons $f=P+iQ$ avec $P=\Re f$ et $Q=\Im f$.

1. Il existe un voisinage ouvert $\Omega_1\subset\Omega$ de $z_0$ tel que $f$ réalise une bijection de $\Omega_1$ sur un ouvert $\Omega_2=f(\Omega_1)$, de réciproque $f^{-1}:\Omega_2\to\Omega_1$ holomorphe (Proposition I.4.4). Dans $\Omega_1$, les lignes de niveau $\{P=c\}$ et $\{Q=c'\}$ sont les **images par $f^{-1}$** des droites verticales $\{\Re w=c\}$ et horizontales $\{\Im w=c'\}$ (intersectées avec $\Omega_2$) :
$$
\{z\in\Omega_1 : \Re f(z)=c\} = f^{-1}\big(\{w\in\Omega_2 : \Re w = c\}\big),\qquad \{z\in\Omega_1 : \Im f(z)=c'\} = f^{-1}\big(\{w\in\Omega_2 : \Im w = c'\}\big).
$$
2. Ces lignes de niveau sont, au voisinage de chaque point de $\Omega_1$, des arcs de classe $C^1$ réguliers, et en tout point $z_1\in\Omega_1$ où une ligne $\{P=c\}$ et une ligne $\{Q=c'\}$ se coupent (c'est-à-dire $f(z_1)=c+ic'$), leurs tangentes sont **orthogonales**.
3. Plus généralement, sur un ouvert $U\subset\Omega$ où $f'$ ne s'annule pas, l'image par $f$ du « grillage » des droites verticales et horizontales est un « grillage » de courbes dont les tangentes sont orthogonales aux points où elles se croisent : pour tout $z_1=c+ic'\in U$, les courbes images $f(\{x=c\}\cap U)$ et $f(\{y=c'\}\cap U)$ passent par $f(z_1)$ avec les tangentes orthogonales $i\,f'(z_1)$ et $f'(z_1)$.

## Hypothèses

### H1 — $f$ holomorphe

**Rôle.** L'holomorphie de $f$ donne celle de $f^{-1}$ (Proposition I.4.4), et c'est la conformité de $f^{-1}$ (ou de $f$) qui transporte les angles droits du quadrillage. En termes réels, ce sont les conditions de Cauchy–Riemann qui rendent $\nabla P$ et $\nabla Q$ orthogonaux (voir la variante de la preuve).

**Si on la retire.** $F(x+iy)=x+i(x+y)$ est $C^\infty$, $\R$-linéaire inversible, non holomorphe ($\partial F/\partial\bar z=\tfrac12\big(F_x+iF_y\big)=\tfrac12\big((1+i)+i\cdot i\big)=\tfrac i2\neq0$). Ses lignes de niveau $\Re F=x=c$ sont les droites verticales et $\Im F=x+y=c'$ les droites de pente $-1$ : elles se coupent à $45°$, pas à angle droit.

### H2 — $f'(z_0)\neq0$

**Rôle.** Elle fournit la réciproque holomorphe locale (Proposition I.4.4, qui repose sur l'inversibilité de la jacobienne, de déterminant $|f'(z_0)|^2$), et des tangentes non nulles : $|\nabla P|=|\nabla Q|=|f'|$. Elle garantit aussi que les lignes de niveau sont de vraies courbes régulières au voisinage de $z_0$.

**Si on la retire.** $f(z)=z^2$ en $z_0=0$ : $\Re f=x^2-y^2=0$ est la réunion des deux diagonales $y=\pm x$ (ce n'est même pas une courbe régulière en $0$ : elle se croise elle-même) et $\Im f=2xy=0$ est la réunion des deux axes. En $0$, la diagonale $y=x$ et l'axe réel se coupent à $45°$, pas à angle droit. En dehors de $0$ tout rentre dans l'ordre : $\nabla(x^2-y^2)\cdot\nabla(2xy)=(2x)(2y)+(-2y)(2x)=0$.

## Idée de la preuve

Inversion locale holomorphe : $g=f^{-1}$ est holomorphe près de $f(z_0)$, avec $g'\neq0$, et envoie les droites $\Re w=c$, $\Im w=c'$ sur les lignes de niveau. Les droites se coupent à angle droit ; $g$ conserve les angles ([[ch04-holomorphe-conserve-angles]]), donc les lignes de niveau aussi.

## Preuve

**Étape 1 : biholomorphisme local.** D'après la Proposition I.4.4 ([[ch01-inversion-locale-holomorphe]]), puisque $f'(z_0)\neq0$, il existe un ouvert $\Omega_1\subset\Omega$ contenant $z_0$ tel que $\Omega_2:=f(\Omega_1)$ soit un ouvert de $\C$ et que $f|_{\Omega_1}:\Omega_1\to\Omega_2$ soit une bijection de réciproque holomorphe. Notons $g:=(f|_{\Omega_1})^{-1}\in\Hol(\Omega_2)$. De $f(g(w))=w$ on tire $f'(g(w))\,g'(w)=1$, donc $g'(w)=\dfrac1{f'(g(w))}\neq0$ pour tout $w\in\Omega_2$.

**Étape 2 : les lignes de niveau sont les images des droites par $g$.** Soit $c\in\R$ et $L_c:=\{w\in\Omega_2 : \Re w=c\}$. Pour $z\in\Omega_1$, posons $w=f(z)\in\Omega_2$, de sorte que $z=g(w)$. Alors
$$
\Re f(z)=c \iff \Re w=c \iff w\in L_c \iff z\in g(L_c),
$$
la dernière équivalence venant de la bijectivité de $g$. D'où $\{z\in\Omega_1:\Re f(z)=c\}=g(L_c)$, et de même $\{z\in\Omega_1:\Im f(z)=c'\}=g(L'_{c'})$ avec $L'_{c'}:=\{w\in\Omega_2:\Im w=c'\}$. C'est le point 1.

**Étape 3 : orthogonalité en un point de croisement.** Soit $z_1\in\Omega_1$ avec $P(z_1)=c$ et $Q(z_1)=c'$, c'est-à-dire $w_1:=f(z_1)=c+ic'$. Comme $\Omega_2$ est ouvert, il existe $\rho>0$ tel que $D(w_1,\rho)\subset\Omega_2$. Considérons les deux arcs
$$
\alpha_1(t):=w_1+i\rho\,t,\qquad \alpha_2(t):=w_1+\rho\,t,\qquad t\in\,]-1,1[ .
$$
Ils sont de classe $C^1$, passent par $w_1$ en $t=0$, sont réguliers ($\alpha_1'(0)=i\rho$, $\alpha_2'(0)=\rho$), leurs traces sont exactement $L_c\cap D(w_1,\rho)$ et $L'_{c'}\cap D(w_1,\rho)$, et leurs tangentes sont orthogonales : $\angle(\alpha_1'(0),\alpha_2'(0))=\arg\dfrac{\rho}{i\rho}=\arg(-i)=-\dfrac\pi2$.

Les arcs images $g\circ\alpha_1$ et $g\circ\alpha_2$ passent par $g(w_1)=z_1$ ; d'après l'étape 2, leurs traces sont $g(L_c\cap D(w_1,\rho))=\{P=c\}\cap V$ et $g(L'_{c'}\cap D(w_1,\rho))=\{Q=c'\}\cap V$, où $V:=g(D(w_1,\rho))$ est un voisinage ouvert de $z_1$ (image d'un ouvert par la bijection $g$ dont la réciproque $f$ est continue). Ce sont donc des paramétrages des deux lignes de niveau au voisinage de $z_1$. Appliquons la conservation des angles ([[ch04-holomorphe-conserve-angles]]) à la fonction holomorphe $g$ au point $w_1$, où $g'(w_1)\neq0$ : les arcs images sont $C^1$ et réguliers, de tangentes $g'(w_1)\,i\rho$ et $g'(w_1)\,\rho$, et
$$
\angle\big((g\circ\alpha_1)'(0),(g\circ\alpha_2)'(0)\big)=\angle(\alpha_1'(0),\alpha_2'(0))=-\frac\pi2 .
$$
Les tangentes aux lignes de niveau $\{P=c\}$ et $\{Q=c'\}$ en $z_1$ sont orthogonales. C'est le point 2.

**Étape 4 : le grillage (point 3).** Soit $U\subset\Omega$ un ouvert sur lequel $f'$ ne s'annule pas et $z_1=c+ic'\in U$. Les arcs $\beta_1(t)=c+i(c'+t)$ (portion de la droite verticale $x=c$) et $\beta_2(t)=(c+t)+ic'$ (portion de la droite horizontale $y=c'$), définis pour $|t|$ assez petit pour rester dans $U$, ont pour tangentes $i$ et $1$, orthogonales. Par [[ch04-holomorphe-conserve-angles]] appliqué à $f$ en $z_1$, les courbes images $f\circ\beta_1$ et $f\circ\beta_2$ passent par $f(z_1)$ avec les tangentes $i\,f'(z_1)$ et $f'(z_1)$, orthogonales. $\square$

*Variante du poly (par les gradients, sans inversion locale).* Les conditions de Cauchy réelles ([[ch01-cauchy-riemann]], (I.2.6)) s'écrivent $\partial_xP=\partial_yQ$ et $\partial_yP=-\partial_xQ$, c'est-à-dire $\nabla Q=(\partial_xQ,\partial_yQ)=(-\partial_yP,\partial_xP)$ : **le gradient de $Q$ est le gradient de $P$ tourné de $+\pi/2$**. En particulier $\nabla P\cdot\nabla Q=0$ et $|\nabla P|=|\nabla Q|$. De plus $f'=\partial_xP+i\,\partial_xQ=\partial_xP-i\,\partial_yP$ (formule (I.2.7)), donc $|\nabla P|^2=|f'|^2$. En un point $z_1$ où $f'(z_1)\neq0$, les gradients $\nabla P(z_1)$ et $\nabla Q(z_1)$ sont donc non nuls et orthogonaux ; par le théorème des fonctions implicites ([[ch06-fonctions-implicites]]), chaque ensemble de niveau est au voisinage de $z_1$ une courbe $C^1$ régulière dont la tangente est orthogonale au gradient. La tangente à $\{P=c\}$ est dirigée par $\nabla P^\perp$, celle à $\{Q=c'\}$ par $\nabla Q^\perp$, et $\nabla P\perp\nabla Q$ entraîne $\nabla P^\perp\perp\nabla Q^\perp$.

## Preuve à trous

Comme $f'(z_0)\neq0$, <trou indice="Proposition I.4.4">il existe un voisinage ouvert $\Omega_1$ de $z_0$ tel que $f$ soit une bijection de $\Omega_1$ sur l'ouvert $\Omega_2=f(\Omega_1)$, de réciproque $g$ holomorphe avec $g'=1/(f'\circ g)\neq0$</trou>. Pour $z\in\Omega_1$ et $w=f(z)$, on a $\Re f(z)=c\iff w\in L_c:=\{\Re w=c\}\cap\Omega_2\iff z\in g(L_c)$ : <trou indice="dans quel sens passe-t-on des droites aux lignes de niveau ?">les lignes de niveau $\{\Re f=c\}$ et $\{\Im f=c'\}$ dans $\Omega_1$ sont les images par $g=f^{-1}$ des droites verticales et horizontales de $\Omega_2$</trou>. Soit $z_1\in\Omega_1$ avec $f(z_1)=w_1=c+ic'$ et $\rho>0$ tel que $D(w_1,\rho)\subset\Omega_2$. Les arcs $\alpha_1(t)=w_1+i\rho t$ et $\alpha_2(t)=w_1+\rho t$ paramètrent les deux droites près de $w_1$ et ont pour tangentes $i\rho$ et $\rho$, orthogonales. Leurs images $g\circ\alpha_1$, $g\circ\alpha_2$ paramètrent les deux lignes de niveau près de $z_1$, et <trou indice="quel résultat appliqué à quelle fonction ?">la conservation des angles par la fonction holomorphe $g$ en $w_1$ (où $g'(w_1)\neq0$) donne des tangentes $g'(w_1)i\rho$ et $g'(w_1)\rho$ faisant le même angle $-\pi/2$</trou> : les lignes de niveau se coupent orthogonalement en $z_1$. $\square$

## Exemples

* **$f(z)=z^2$ sur le demi-plan $\{x>0\}$** (où $f'=2z\neq0$). Les lignes $\Re f=x^2-y^2=c$ et $\Im f=2xy=c'$ sont deux familles d'hyperboles. Au point $z_1=1+i$ ($c=0$, $c'=2$) : $\nabla(x^2-y^2)=(2,-2)$ et $\nabla(2xy)=(2,2)$, produit scalaire $4-4=0$. Concrètement, la tangente à $y=x$ en $(1,1)$ est dirigée par $(1,1)$ et la tangente à $xy=1$ (soit $y=1/x$, de pente $-1$ en $x=1$) par $(1,-1)$ : orthogonales. La réciproque locale est la racine carrée $g(w)=\sqrt w$ (détermination à partie réelle positive), qui envoie bien les droites $\Re w=c$, $\Im w=c'$ sur ces hyperboles.
* **$f=\mathrm{Log}$ sur $\C\setminus\R_-$** ([[ch02-logarithme-determination-principale-def]]), $f'(z)=1/z\neq0$. $\Re f=\log|z|=c$ est le cercle $|z|=e^c$ et $\Im f=\mathrm{Arg}\,z=c'$ est la demi-droite d'angle $c'$ : cercles concentriques et rayons, orthogonaux. Ici $f^{-1}=\exp$ (restreinte à la bande $|\Im w|<\pi$) envoie les droites verticales $\Re w=c$ sur les cercles et les droites horizontales $\Im w=c'$ sur les rayons, exactement comme l'affirme le point 1.
* **$f(z)=\operatorname{argtanh}z=\frac12\mathrm{Log}\dfrac{1+z}{1-z}$** (Exemple IV.1.2, [[ch04-exemple-argtanh]]). $\Re f=c$ équivaut à $\dfrac{|1+z|}{|1-z|}=e^{2c}$ : cercles d'Apollonius relatifs aux points $\pm1$ ; $\Im f=c'$ équivaut à $\arg\dfrac{1+z}{1-z}=2c'$ : arcs de cercles passant par $-1$ et $1$ (théorème de l'angle inscrit). Deux familles de cercles orthogonales : équipotentielles et lignes de champ de deux fils parcourus par des courants opposés.

## Pièges

* > ⚠️ Les lignes de niveau $\Re f=c$ sont les images des droites verticales par **$f^{-1}$**, pas par $f$. L'image par $f$ d'une droite verticale est une tout autre courbe (pour $z^2$ : une parabole, alors que la ligne de niveau est une hyperbole).
* L'hypothèse $f'(z_0)\neq0$ est indispensable : pour $z^2$ en $0$, $\Re f=0$ et $\Im f=0$ se coupent à $45°$, et les ensembles de niveau ne sont pas des courbes régulières (croisements). Les zéros de $f'$ sont les points où le « quadrillage courbe » présente des singularités.
* Deux lignes de niveau de la **même** fonction $\Re f$ (valeurs $c\neq c_1$) ne se coupent jamais ; l'orthogonalité concerne une ligne de $\Re f$ et une ligne de $\Im f$.
* Pour le « grillage » image (point 3), l'orthogonalité est garantie au point $f(z_1)$ pour les images des deux droites passant par **un même** $z_1$. Si $f$ n'est pas injective sur $U$, deux courbes images peuvent aussi se croiser en l'image de deux points différents, sans angle droit : pour $f(z)=z^3$, l'image de la droite $x=1$ et celle de la droite $y=0$ se recoupent en $w=-8=f(1+i\sqrt3)=f(-2)$, avec les tangentes $i f'(1+i\sqrt3)=-6\sqrt3-6i$ et $f'(-2)=12$, qui font un angle de $30°$.
* La version réelle à retenir : par Cauchy–Riemann, $\nabla(\Im f)$ est $\nabla(\Re f)$ tourné de $+\pi/2$ et $|\nabla(\Re f)|=|\nabla(\Im f)|=|f'|$. C'est le point de départ de l'interprétation potentiel/lignes de champ du § IV.4 ([[ch04-ecoulement-potentiel]]).
