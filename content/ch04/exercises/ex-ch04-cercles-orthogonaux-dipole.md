---
id: ex-ch04-cercles-orthogonaux-dipole
type: exercise
chapters: [4, 1]
title: Deux familles de cercles orthogonaux et le potentiel d'un dipôle
source: "Inventé (thème classique : inversion, cercles orthogonaux, lignes de champ d'un dipôle)"
difficulty: 2
time: 25
tools: [ch04-holomorphe-conserve-angles, ch04-lignes-niveau-orthogonales, ch04-holomorphe-implique-harmonique, ch01-cauchy-riemann]
---
## Énoncé

Pour $a\in\R^\times$, on note $C_a$ le cercle de centre $a$ et de rayon $|a|$ ; pour $b\in\R^\times$, on note $\Gamma_b$ le cercle de centre $ib$ et de rayon $|b|$. Tous ces cercles passent par $0$.

1. Montrer que $C_a\setminus\{0\}=\{z\in\C^\times : \Re(1/z)=\tfrac1{2a}\}$ et $\Gamma_b\setminus\{0\}=\{z\in\C^\times : \Im(1/z)=-\tfrac1{2b}\}$.
2. Montrer que, pour tous $a,b\in\R^\times$, les cercles $C_a$ et $\Gamma_b$ ont exactement un point commun $z_{a,b}$ autre que $0$, le calculer, et montrer qu'ils se coupent à angle droit en $z_{a,b}$ **sans calculer de tangentes**.
3. Quel est l'angle entre $C_a$ et $\Gamma_b$ au point $0$ ? Entre $C_a$ et $C_{a'}$ pour $a\neq a'$ ? Les images de ces cercles par $z\mapsto 1/z$ font-elles apparaître une contradiction avec la conservation des angles ?
4. Soit $u(x,y)=\dfrac{x}{x^2+y^2}$ sur $\R^2\setminus\{0\}$ (potentiel d'un dipôle). Montrer que $u$ est harmonique et que, en tout point $z\in\C^\times$, le gradient $\nabla u(z)$ est non nul et tangent à celle des courbes $\{\Im(1/z)=c\}$ qui passe par $z$ (un cercle $\Gamma_b$, ou l'axe réel privé de $0$).

## Indices

### Indice 1
Écrire $1/z=\dfrac{x-iy}{x^2+y^2}$. Les cercles deviennent alors des lignes de niveau de $\Re(1/z)$ et $\Im(1/z)$ : quelle est l'image de ces familles par l'application $g(w)=1/w$, qui est sa propre réciproque ?

### Indice 2
Par $g$, $C_a\setminus\{0\}$ correspond à la droite verticale $\Re(w)=\tfrac1{2a}$ et $\Gamma_b\setminus\{0\}$ à la droite horizontale $\Im(w)=-\tfrac1{2b}$. Ces droites se coupent à angle droit ; $g$ est holomorphe sur $\C^\times$ et $g'(w)=-1/w^2\neq0$ : conservation des angles.

### Indice 3
Question 4 : $u=\Re(1/z)$ ; avec $v=\Im(1/z)$, les conditions de Cauchy réelles donnent $\langle\nabla u,\nabla v\rangle=u_xv_x+u_yv_y=0$. Dans le plan, un vecteur orthogonal au gradient d'une fonction est tangent à sa ligne de niveau.

## Corrigé

**1.** Pour $z=x+iy\neq0$, $\dfrac1z=\dfrac{\bar z}{|z|^2}=\dfrac{x-iy}{x^2+y^2}$, donc $\Re(1/z)=\dfrac{x}{x^2+y^2}$ et $\Im(1/z)=\dfrac{-y}{x^2+y^2}$. Le cercle $C_a$ a pour équation $(x-a)^2+y^2=a^2$, soit $x^2+y^2=2ax$. Pour $z\neq0$ :
$$
x^2+y^2=2ax\iff \frac{x}{x^2+y^2}=\frac1{2a}\iff \Re\Big(\frac1z\Big)=\frac1{2a}.
$$
De même $\Gamma_b$ : $x^2+(y-b)^2=b^2\iff x^2+y^2=2by$, et pour $z\neq0$ cela équivaut à $\dfrac{-y}{x^2+y^2}=-\dfrac1{2b}$, c'est-à-dire $\Im(1/z)=-\tfrac1{2b}$.

**2.** *Point d'intersection.* Un point $z\neq0$ est dans $C_a\cap\Gamma_b$ si et seulement si $\Re(1/z)=\tfrac1{2a}$ et $\Im(1/z)=-\tfrac1{2b}$, c'est-à-dire $1/z=w_0:=\tfrac1{2a}-\tfrac{i}{2b}$. Comme $w_0\neq0$, il y a exactement un tel point :
$$
z_{a,b}=\frac1{w_0}=\frac{2ab}{b-ia}=\frac{2ab\,(b+ia)}{a^2+b^2}.
$$
(Exemple : $a=b=1$ donne $z_{1,1}=1+i$, et l'on vérifie $|1+i-1|=1$, $|1+i-i|=1$.)

*Angle droit.* Soit $g:\C^\times\to\C^\times$, $g(w)=1/w$ : $g$ est holomorphe, $g'(w)=-1/w^2\neq0$ partout, et $g\circ g=\id$. Considérons les deux arcs de classe $C^1$, réguliers, passant par $w_0$ en $t=0$ :
$$
\gamma_1(t)=w_0+it,\qquad \gamma_2(t)=w_0+t,\qquad t\in\,]-\eps,\eps[,
$$
avec $\eps>0$ assez petit pour qu'ils restent dans $\C^\times$ (en fait $\gamma_1$ décrit la droite $\Re(w)=\tfrac1{2a}$ et $\gamma_2$ la droite $\Im(w)=-\tfrac1{2b}$, qui ne passent pas par $0$). D'après la question 1, et puisque $\Re\big(1/g(w)\big)=\Re(w)$, l'arc $g\circ\gamma_1$ est tracé sur $C_a$, et de même $g\circ\gamma_2$ est tracé sur $\Gamma_b$ ; tous deux passent par $g(w_0)=z_{a,b}$ en $t=0$. Les tangentes en $w_0$ sont $\gamma_1'(0)=i$ et $\gamma_2'(0)=1$, orthogonales. Par la conservation des angles ([[ch04-holomorphe-conserve-angles]], hypothèses : $g$ holomorphe sur l'ouvert $\C^\times$, $g'(w_0)\neq0$, arcs réguliers), les tangentes aux arcs images sont $g'(w_0)\,i$ et $g'(w_0)\cdot1$, dont le quotient vaut $i$ : elles sont orthogonales. Donc $C_a$ et $\Gamma_b$ se coupent à angle droit en $z_{a,b}$. C'est exactement l'orthogonalité des lignes de niveau de $\Re(1/z)$ et $\Im(1/z)$ ([[ch04-lignes-niveau-orthogonales]]).

*Vérification élémentaire.* Deux cercles sécants de centres $c_1,c_2$ et rayons $r_1,r_2$ sont orthogonaux si et seulement si $|c_1-c_2|^2=r_1^2+r_2^2$ (triangle rectangle formé par les centres et un point d'intersection). Ici $|a-ib|^2=a^2+b^2=r_1^2+r_2^2$ : c'est cohérent.

**3.** En $0$, la tangente à $C_a$ est perpendiculaire au rayon $[0,a]$ porté par $\R$ : c'est l'axe imaginaire. La tangente à $\Gamma_b$ en $0$ est perpendiculaire au rayon $[0,ib]$ : c'est l'axe réel. Donc $C_a$ et $\Gamma_b$ se coupent aussi à **angle droit** en $0$. En revanche $C_a$ et $C_{a'}$ ($a\neq a'$) ont la même tangente $i\R$ en $0$ : ils sont **tangents** (angle nul) en $0$, et c'est leur seul point commun ($x^2+y^2=2ax=2a'x$ force $x=0$ puis $y=0$).

Leurs images par $z\mapsto1/z$ sont les droites parallèles $\Re(w)=\tfrac1{2a}$ et $\Re(w)=\tfrac1{2a'}$, qui ne se coupent pas. Il n'y a pas de contradiction : la conservation des angles est un énoncé **local** en un point où l'application est holomorphe de dérivée non nulle ; or $0$ n'est pas dans l'ouvert de définition de $z\mapsto 1/z$ (l'image de $0$ serait « le point à l'infini », hors du cadre du cours). Le point de tangence en $0$ est envoyé « à l'infini », où les deux droites parallèles se « touchent ».

**4.** *Harmonicité.* $u=\Re(F)$ avec $F(z)=1/z$ holomorphe sur $\C^\times$, donc $u$ est harmonique sur $\C^\times$ ([[ch04-holomorphe-implique-harmonique]]).

*Gradient.* Posons $v=\Im F=\dfrac{-y}{x^2+y^2}$. Les conditions de Cauchy réelles ([[ch01-cauchy-riemann]]) donnent $u_x=v_y$ et $u_y=-v_x$, d'où
$$
\langle\nabla u,\nabla v\rangle=u_xv_x+u_yv_y=u_x(-u_y)+u_y u_x=0,\qquad |\nabla u|=|\nabla v|=|F'(z)|=\frac1{|z|^2}\neq0,
$$
car $F'=u_x-iu_y$ et donc $|F'|^2=u_x^2+u_y^2$. Explicitement, l'affixe de $\nabla u$ est $u_x+iu_y=\overline{F'(z)}=-1/\bar z^{\,2}$.

*Tangence.* Fixons $z_0\in\C^\times$ et $c=v(z_0)$. Comme $\nabla v(z_0)\neq0$, la ligne de niveau $\{v=c\}$ est, au voisinage de $z_0$, une courbe de classe $C^1$ régulière dont la tangente en $z_0$ est la droite orthogonale à $\nabla v(z_0)$ (fonctions implicites ; ici on le voit aussi directement, puisque la ligne est un cercle $\Gamma_b$ privé de $0$ si $c\neq0$, d'après la question 1 avec $c=-\tfrac1{2b}$, et l'axe réel privé de $0$ si $c=0$). Dans $\R^2$, l'orthogonal de $\nabla v(z_0)\neq0$ est une droite ; $\nabla u(z_0)$ est non nul et orthogonal à $\nabla v(z_0)$, il dirige donc cette tangente.

*Interprétation physique.* Les $C_a$ (lignes de niveau de $u$) sont les **équipotentielles** du dipôle placé en $0$ et orienté selon $\R$, et les $\Gamma_b$ sont les **lignes de champ** (le champ $\pm\nabla u$ leur est tangent). On retrouve l'orthogonalité équipotentielles / lignes de champ de l'Exemple IV.1.2 du poly (p. 76).

## Pièges et variantes

* **Calculer les tangentes à la main** : c'est possible, mais l'énoncé demande l'argument conceptuel ; la conservation des angles exige de vérifier $g'(w_0)\neq0$ et que les arcs soient réguliers en $w_0$.
* **Appliquer la conservation des angles en $0$** : $z\mapsto1/z$ n'y est pas définie ; les cercles d'une même famille y sont tangents alors que leurs images sont parallèles.
* **Oublier le cas $c=0$** dans la question 4 : la ligne de niveau $\{\Im(1/z)=0\}$ est $\R^\times$, qui n'est pas un des $\Gamma_b$ (« cercle de rayon infini »).
* Variante : les lignes de niveau de $\Re(z^2)=x^2-y^2$ et $\Im(z^2)=2xy$ sont des hyperboles orthogonales hors de $0$ ; en $0$, où $(z^2)'=0$, les deux lignes $\{x^2-y^2=0\}$ et $\{xy=0\}$ se coupent à $45^\circ$ et non à $90^\circ$ : les angles sont **divisés** par $2$ quand on remonte par $z\mapsto z^2$.
* Variante : remplacer $1/z$ par $\dfrac{z-1}{z+1}$ ; les lignes de niveau de $\log\Big|\dfrac{z-1}{z+1}\Big|$ et de $\arg\dfrac{z-1}{z+1}$ sont les cercles d'Apollonius et les cercles passant par $\pm1$ (champ de deux fils, Exemple IV.1.2).
