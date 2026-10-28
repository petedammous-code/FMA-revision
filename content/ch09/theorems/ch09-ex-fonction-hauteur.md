---
id: ch09-ex-fonction-hauteur
type: proposition
chapter: 9
title: Fonction hauteur $h(p)=\langle p-p_0,a\rangle$ et sa différentielle
ref: Exemple IX.7.20
page: 164
importance: 2
depends: [ch09-remarques-differentielle-cas-euclidien, ch09-differentielle-entre-sous-varietes-def, ch09-fonction-differentiable-sur-sous-variete-def]
tags: [sous-variete, fonction-hauteur, differentielle, espace-tangent, point-critique]
---
## Intuition

> 💡 Posez la sous-variété $S$ (une surface, par exemple) au-dessus d'un plan « sol » $P$ et mesurez l'**altitude** de chaque point au-dessus du sol : c'est la fonction hauteur $h$. Quand on se déplace sur $S$ avec la vitesse $v$ (un vecteur **tangent**), l'altitude varie à la vitesse $\langle v,a\rangle$, la composante verticale de $v$.

Ici $\langle\cdot,\cdot\rangle$ est le produit scalaire usuel de $\R^N$, $a$ est un vecteur unitaire orthogonal au plan $P$ (la « verticale ») et $p_0$ un point de $P$. L'**espace tangent** $T_pS$ est l'ensemble des vitesses $\alpha'(0)$ des courbes $C^1$ tracées sur $S$ avec $\alpha(0)=p$ ([[ch09-vecteur-tangent-espace-tangent-def]]) ; la **différentielle** $dh_p:T_pS\to\R$ est l'application linéaire qui à $\alpha'(0)$ associe $(h\circ\alpha)'(0)$ ([[ch09-differentielle-entre-sous-varietes-def]]).

Conséquence géométrique majeure : $dh_p=0$ exactement quand $a\perp T_pS$, c'est-à-dire quand le plan tangent en $p$ est **horizontal** (parallèle à $P$) — c'est là que se trouvent les sommets et les fonds.

## Énoncé

**Proposition (poly, Exemple IX.7.20, p. 164).** Soit $S$ une sous-variété de $\R^N$ de classe $C^\infty$. Soit $P$ un hyperplan de $\R^N$ passant par le point $p_0\in\R^N$, et soit $a\in\R^N$ un vecteur normal unitaire à $P$ en $p_0$ (c'est-à-dire $\langle x-p_0,a\rangle=0$ pour tout $x\in P$ et $\norm{a}=1$). La **fonction hauteur**
$$
h:S\to\R,\qquad p\mapsto\langle p-p_0,a\rangle
$$
est de classe $C^\infty$ car c'est la restriction d'une fonction $C^\infty$ définie sur l'espace $\R^N$. Sa différentielle en $p\in S$ est donnée par
$$
dh_p:T_pS\to\R,\qquad v\mapsto\langle v,a\rangle .
$$

*Conséquence.* $p$ est un point critique de $h$ ($dh_p=0$, [[ch09-point-critique-sous-variete-def]]) si et seulement si $a\in(T_pS)^\perp$.

## Hypothèses

### H1 — $S$ de classe $C^\infty$

**Rôle.** Pour tout paramétrage local $x:U\to S$, $h\circ x(u)=\langle x(u)-p_0,a\rangle$ a la régularité de $x$ ; il faut $x$ de classe $C^\infty$ pour obtenir $h$ de classe $C^\infty$.

**Si on la retire.** Hypothèse de confort : si $S$ est seulement de classe $C^k$ ($k\ge1$), la même preuve montre que $h$ est de classe $C^k$ et la formule $dh_p(v)=\langle v,a\rangle$ est inchangée. On ne peut pas espérer mieux : $S=\{(t,t|t|)\ :\ t\in\R\}\subset\R^2$ est une sous-variété de classe $C^1$ (graphe de la fonction $C^1$ $t\mapsto t|t|$, [[ch09-graphe-sous-variete]]) ; avec $p_0=0$, $a=(0,1)$ et le paramétrage $x(t)=(t,t|t|)$, on obtient $h\circ x(t)=t|t|$, dont la dérivée $2|t|$ n'est pas dérivable en $0$.

### H2 — $a$ unitaire et normal à $P$

**Rôle.** Elle ne sert **pas** au calcul de $dh_p$ : la formule $d h_p(v)=\langle v,a\rangle$ vaut pour **tout** $a\in\R^N$ et tout $p_0$. Elle donne le sens géométrique : comme $P$ est un hyperplan contenu dans l'hyperplan $p_0+a^\perp$, on a $P=p_0+a^\perp$, la projection orthogonale de $x$ sur $P$ est $x-\langle x-p_0,a\rangle a$, et donc $|h(x)|=\dist(x,P)$ : $h$ est la **distance signée** à $P$.

**Si on la retire.** Si $\norm a\ne1$, $h$ est la distance signée multipliée par $\norm a$ (et si $a=0$, $h\equiv0$ : tous les points sont critiques). Les points critiques ($a\perp T_pS$) ne dépendent que de la direction de $a$.

## Idée de la preuve

$h$ est la restriction à $S$ de la fonction affine $H(x)=\langle x-p_0,a\rangle$ : régularité par composition avec les paramétrages, et différentielle = restriction à $T_pS$ de $dH_p=\langle\cdot,a\rangle$, ce qu'on vérifie directement le long d'une courbe.

## Preuve

Posons $H:\R^N\to\R$, $H(x)=\langle x-p_0,a\rangle$. C'est une fonction affine, donc de classe $C^\infty$, et pour tous $x,v\in\R^N$, $H(x+v)=H(x)+\langle v,a\rangle$ : sa différentielle est $dH_x(v)=\langle v,a\rangle$ en tout point. Par définition, $h=H|_S$.

*Régularité.* Soit $x:U\to S$ un paramétrage local de $S$ ; il est de classe $C^\infty$ car $S$ l'est. Alors $h\circ x=H\circ x:U\to\R$ est la composée de deux applications $C^\infty$ (entre ouverts), donc est $C^\infty$. Ceci valant pour tout paramétrage, $h$ est de classe $C^\infty$ sur $S$ ([[ch09-fonction-differentiable-sur-sous-variete-def]]).

*Différentielle.* Soit $p\in S$ et $v\in T_pS$. Par définition de l'espace tangent ([[ch09-vecteur-tangent-espace-tangent-def]]), il existe une courbe $\alpha:I\to\R^N$ de classe $C^1$, à valeurs dans $S$, avec $\alpha(0)=p$, $\alpha'(0)=v$. Par la caractérisation 2 de la différentielle ([[ch09-differentielle-entre-sous-varietes-def]]),
$$
dh_p(v)=(h\circ\alpha)'(0)=\frac{d}{dt}\Big|_{t=0}\langle\alpha(t)-p_0,a\rangle=\langle\alpha'(0),a\rangle=\langle v,a\rangle ,
$$
la dérivation sous le produit scalaire étant licite car $t\mapsto\langle\alpha(t)-p_0,a\rangle$ est la composée de $\alpha$ et de la forme affine $H$. C'est exactement dire que $dh_p$ est la restriction de $dH_p$ à $T_pS$ ([[ch09-remarques-differentielle-cas-euclidien]], point 2).

*Conséquence.* $dh_p=0$ sur $T_pS$ $\iff$ $\langle v,a\rangle=0$ pour tout $v\in T_pS$ $\iff$ $a\in(T_pS)^\perp$. $\square$

## Preuve à trous

On pose $H(x)=\langle x-p_0,a\rangle$ sur $\R^N$ ; comme $H(x+v)=H(x)+\langle v,a\rangle$, on a <trou indice="H est affine">$dH_x(v)=\langle v,a\rangle$ pour tout $x$</trou>, et $h=H|_S$.

Pour tout paramétrage $x:U\to S$ (de classe $C^\infty$), <trou indice="lire h dans un paramétrage">$h\circ x=H\circ x$ est une composée d'applications $C^\infty$ entre ouverts, donc $C^\infty$</trou> : $h$ est $C^\infty$ sur $S$.

Soit $v\in T_pS$, $v=\alpha'(0)$ avec $\alpha$ courbe $C^1$ tracée sur $S$, $\alpha(0)=p$. Alors $dh_p(v)=$ <trou indice="caractérisation de la différentielle par les courbes">$(h\circ\alpha)'(0)=\frac{d}{dt}\big|_{t=0}\langle\alpha(t)-p_0,a\rangle=\langle\alpha'(0),a\rangle$</trou> $=\langle v,a\rangle$.
Enfin $dh_p=0$ $\iff$ <trou>$\langle v,a\rangle=0$ pour tout $v\in T_pS$, i.e. $a\in(T_pS)^\perp$</trou>. $\square$

## Exemples

* **Altitude sur la sphère.** $S=\mathbb S^2\subset\R^3$, $p_0=0$, $a=e_3$, $P=\{z=0\}$ : $h(x,y,z)=z$. Comme $\mathbb S^2=F^{-1}(0)$ avec $F(x)=\norm x^2-1$ et $dF_p(v)=2\langle p,v\rangle$, on a $T_p\mathbb S^2=\ker dF_p=p^\perp$ ([[ch09-espace-tangent-graphe-equation]]). Donc $dh_p(v)=v_3$ sur $p^\perp$, et $p$ est critique $\iff$ $e_3\in(p^\perp)^\perp=\R p$ $\iff$ $p=\pm e_3$ : les deux pôles, qui sont le maximum ($h=1$) et le minimum ($h=-1$), conformément à [[ch09-extremum-local-differentielle-nulle]].
* **Lecture dans un paramétrage.** Avec $x(\theta,\phi)=(\cos\theta\cos\phi,\sin\theta\cos\phi,\sin\phi)$ ($|\phi|<\pi/2$), $h\circ x(\theta,\phi)=\sin\phi$ et $d(h\circ x)_{(\theta,\phi)}(w_1,w_2)=w_2\cos\phi$. La formule du poly donne le même résultat : $dx_{(\theta,\phi)}(w)=w_1\,\partial_\theta x+w_2\,\partial_\phi x$, dont la troisième coordonnée est $w_1\cdot0+w_2\cos\phi$, donc $dh_p(dx(w))=\langle dx(w),e_3\rangle=w_2\cos\phi$. Aucun point critique sur ce domaine ($\cos\phi\ne0$) : normal, les pôles n'y sont pas.
* **Cylindre : pas de point critique.** $S=\{x^2+y^2=1\}\subset\R^3$, $a=e_3$, $h=z$. Ici $T_pS=\ker dF_p$ avec $F=x^2+y^2-1$, soit $T_pS=\{v\ :\ p_1v_1+p_2v_2=0\}$, qui contient $e_3$. Donc $dh_p(e_3)=1\ne0$ : aucun point critique, et en effet $h$ n'a pas d'extremum ($z$ prend toutes les valeurs réelles).

## Pièges

* > ⚠️ $dh_p$ est définie sur $T_pS$ seulement, pas sur $\R^N$ : « $dh_p=0$ » veut dire $\langle v,a\rangle=0$ pour $v\in T_pS$, ce qui n'impose **pas** $a=0$.
* Point critique de $h$ $\iff$ $a\perp T_pS$ $\iff$ le plan tangent affine en $p$ est parallèle à $P$ (« horizontal ») ; ne pas écrire $a\in T_pS$.
* $h$ est une distance **signée** : $h$ est négative sous $P$. La « vraie » distance $|h|$ n'est pas différentiable aux points de $S\cap P$ où $dh_p\ne0$.
* La formule de $dh_p$ ne dépend ni de $p$ ni de $p_0$ (forme linéaire $\langle\cdot,a\rangle$), mais son **domaine** $T_pS$ dépend de $p$.
