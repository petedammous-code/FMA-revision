---
id: ex-ch09-sphere-plan-cercle
type: exercise
chapters: [9]
title: Sections planes de la sphère
source: Inventé
difficulty: 1
time: 15
tools: [ch09-point-critique-valeur-reguliere-def, ch09-sous-variete-equation-valeur-reguliere, ch09-espace-tangent-graphe-equation, ch09-ex-dimension-zero]
---
## Énoncé

Pour $c\in\R$, on considère l'application $F_c:\R^3\to\R^2$,
$$
F_c(x,y,z)=\big(x^2+y^2+z^2-1,\ x+y+z-c\big),
$$
et l'ensemble $S_c=F_c^{-1}(\{(0,0)\})$, intersection de la sphère unité $\mathbb S^2$ et du plan d'équation $x+y+z=c$.

1. Déterminer les réels $c$ pour lesquels $(0,0)$ est une valeur régulière de $F_c$.
2. En déduire que, pour $|c|<\sqrt3$, $S_c$ est une sous-variété de dimension $1$ de $\R^3$. Que dire de $S_c$ pour $|c|>\sqrt3$ ?
3. On prend $c=1$. Vérifier que $p=(1,0,0)\in S_1$ et déterminer l'espace tangent $T_pS_1$ ainsi que la droite tangente affine à $S_1$ en $p$.
4. On prend $c=\sqrt3$. Déterminer $S_{\sqrt3}$. Est-ce une sous-variété de $\R^3$ ? Le critère de la question 2 s'applique-t-il ?

## Indices

### Indice 1
Un ensemble défini par $2$ équations dans $\R^3$ est une courbe dès que les deux équations sont « indépendantes » en chacun de ses points : il faut regarder le rang de la différentielle de $F_c$ aux points de $S_c$ seulement.

### Indice 2
$dF_c$ en $(x,y,z)$ a pour matrice $\begin{pmatrix}2x&2y&2z\\1&1&1\end{pmatrix}$ ; elle est surjective (de rang $2$) si et seulement si ses deux lignes sont indépendantes, c'est-à-dire si $(x,y,z)$ n'est pas colinéaire à $(1,1,1)$. Si $(0,0)$ est valeur régulière, la proposition sur les images réciproques de valeurs régulières donne une sous-variété de dimension $3-2=1$, d'espace tangent $\ker dF_c$.

### Indice 3
Pour la question 4, l'inégalité de Cauchy–Schwarz $x+y+z\le\sqrt3\,\sqrt{x^2+y^2+z^2}$ et son cas d'égalité déterminent $S_{\sqrt3}$. Une sous-variété de dimension $0$, c'est un ensemble de points isolés.

## Corrigé

**1.** $F_c$ est polynomiale, donc de classe $C^\infty$ sur l'ouvert $\R^3$, et pour $v=(h,k,l)\in\R^3$,
$$
d(F_c)_{(x,y,z)}(h,k,l)=\big(2xh+2yk+2zl,\ h+k+l\big),\qquad \text{de matrice } \begin{pmatrix}2x&2y&2z\\1&1&1\end{pmatrix}.
$$
Cette application linéaire $\R^3\to\R^2$ est surjective si et seulement si elle est de rang $2$, c'est-à-dire si les deux lignes sont linéairement indépendantes, c'est-à-dire si $(x,y,z)$ n'est pas colinéaire à $(1,1,1)$. D'après la définition ([[ch09-point-critique-valeur-reguliere-def]]), $(0,0)$ est valeur régulière de $F_c$ si et seulement si **aucun point de $S_c$** n'est critique, c'est-à-dire si $S_c$ ne contient aucun point de la forme $t(1,1,1)$.

Or $t(1,1,1)\in S_c$ équivaut à $3t^2=1$ et $3t=c$, donc à $t=c/3$ et $c^2/3=1$, soit $c=\pm\sqrt3$. Conclusion : **$(0,0)$ est valeur régulière de $F_c$ si et seulement si $c\ne\pm\sqrt3$.** (Pour $c=\pm\sqrt3$, le point $\pm\frac1{\sqrt3}(1,1,1)$ est un point critique de $F_c$ situé dans $S_c$.)

**2.** Soit $|c|<\sqrt3$. D'après 1., $(0,0)$ est valeur régulière de la fonction $F_c$, de classe $C^\infty$ sur l'ouvert $\R^3$, à valeurs dans $\R^{2}=\R^{3-1}$. La proposition IX.4.1 ([[ch09-sous-variete-equation-valeur-reguliere]]), avec $N=3$, $N-m=2$, montre que $S_c=F_c^{-1}(\{(0,0)\})$ est une sous-variété de dimension $m=1$ de $\R^3$, de classe $C^\infty$. (Elle est non vide : $S_c$ est le cercle de centre $\frac c3(1,1,1)$ et de rayon $\sqrt{1-c^2/3}$ dans le plan $x+y+z=c$, car la distance de $0$ à ce plan vaut $|c|/\sqrt3<1$.)

Pour $|c|>\sqrt3$, Cauchy–Schwarz donne $|x+y+z|\le\sqrt3\,\norm{(x,y,z)}=\sqrt3<|c|$ sur $\mathbb S^2$, donc $S_c=\emptyset$ : l'ensemble vide (qui est une sous-variété de n'importe quelle dimension, trivialement).

**3.** $F_1(1,0,0)=(1-1,\,1-1)=(0,0)$, donc $p\in S_1$. Comme $(0,0)$ est valeur régulière de $F_1$, la proposition IX.7.13 ([[ch09-espace-tangent-graphe-equation]]) donne $T_pS_1=\ker d(F_1)_p$ :
$$
T_pS_1=\{(h,k,l)\;;\;2h=0,\ h+k+l=0\}=\R\,(0,1,-1).
$$
C'est bien une droite vectorielle (dimension $1$, comme prévu). La droite tangente affine est $p+T_pS_1=\{(1,t,-t)\;;\;t\in\R\}$, d'équations $x=1$, $y+z=0$.

*Vérification géométrique* : $(0,1,-1)$ est orthogonal à $p$ (tangent à la sphère) et à $(1,1,1)$ (contenu dans la direction du plan).

**4.** Pour $(x,y,z)\in\mathbb S^2$, Cauchy–Schwarz donne $x+y+z=\langle (x,y,z),(1,1,1)\rangle\le\norm{(x,y,z)}\,\norm{(1,1,1)}=\sqrt3$, avec égalité si et seulement si $(x,y,z)=\lambda(1,1,1)$ avec $\lambda\ge0$, et alors $\lambda=1/\sqrt3$ (norme $1$). Donc
$$
S_{\sqrt3}=\Big\{p_0\Big\},\qquad p_0=\tfrac1{\sqrt3}(1,1,1).
$$
Un singleton est une sous-variété de dimension $0$ de $\R^3$ : avec $U=\R^0=\{0\}$, $x(0)=p_0$ et $V=\R^3$, on a $x(U)=V\cap S_{\sqrt3}$, $x$ est un homéomorphisme sur son image et la condition d'injectivité de $dx_0$ (définie sur $\R^0=\{0\}$) est vide. C'est cohérent avec l'exemple IX.2.4 ([[ch09-ex-dimension-zero]]) : une sous-variété de dimension $0$ est un ensemble discret.

En revanche le critère de la question 2 **ne s'applique pas** : $p_0$ est un point critique de $F_{\sqrt3}$ (question 1 : $d(F_{\sqrt3})_{p_0}$ est de rang $1$), donc $(0,0)$ n'est pas valeur régulière. La proposition IX.4.1 est une condition **suffisante**, pas nécessaire. Remarquons aussi que la dimension obtenue ($0$) n'est pas la dimension « attendue » $3-2=1$.

## Pièges et variantes

* « Valeur régulière » se vérifie **aux points de la fibre** $S_c$ seulement : ici $dF_c$ n'est pas surjective sur toute la droite $\R(1,1,1)$, mais seuls les points de cette droite qui sont dans $S_c$ comptent.
* Pour une application à valeurs dans $\R^2$, « $dF_p\ne0$ » ne suffit pas : il faut le **rang $2$**, c'est-à-dire l'indépendance des différentielles des deux composantes.
> ⚠️ Une fibre d'une valeur critique peut être une sous-variété (question 4), éventuellement d'une autre dimension que $N-(N-m)$. Pour montrer qu'un ensemble **n'est pas** une sous-variété, il faut un argument direct.
* Variante : remplacer la sphère par le cylindre $x^2+y^2=1$ et le plan par $z=\lambda x$ : pour tout $\lambda$, l'intersection est une ellipse, sous-variété de dimension $1$ (les gradients $(2x,2y,0)$ et $(-\lambda,0,1)$ ne sont jamais colinéaires).
* Variante : la sphère et le cône $x^2+y^2=z^2$ ; l'intersection est la réunion de deux cercles disjoints (en $z=\pm1/\sqrt2$), sous-variété de dimension $1$ non connexe.
