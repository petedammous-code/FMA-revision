---
id: ch05-taylor-reste-integral
type: theorem
chapter: 5
title: Formule de Taylor avec reste intégral
ref: Théorème V.5.11
page: 111
importance: 3
depends: [ch05-taylor-reste-integral-1d, ch05-composition-differentielles, ch05-formule-pratique-dpf, ch05-differentielle-lineaire, ch05-differentielle-seconde-def, ch05-isometrie-bilineaire-curryfication, ch05-classe-ck-def]
tags: [taylor, reste-integral, ordre-superieur, banach, segment]
---
## Intuition

> 💡 Pour étudier $f$ près de $a$ dans la direction $h$, on regarde $f$ **le long du segment** $t\mapsto a+th$ : c'est une fonction d'une seule variable réelle, $g(t)=f(a+th)$, à laquelle on applique la formule de Taylor 1D ([[ch05-taylor-reste-integral-1d]]). Ses dérivées successives sont $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$ : la $k$-ième différentielle « mangée » $k$ fois par le même vecteur $h$.

On obtient ainsi un **développement exact** : $f(a+h)$ = polynôme de Taylor en $h$ (termes $\frac{1}{k!}d^kf_a(h,\dots,h)$, homogènes de degré $k$ en $h$) + un reste intégral, qui est de taille $\norm{h}^{p+1}$ fois une moyenne de $d^{p+1}f$ sur le segment.

Vocabulaire. $d^kf_a$ est la différentielle $k$-ième de $f$ en $a$ ([[ch05-differentielle-seconde-def]], [[ch05-classe-ck-def]]), vue comme application $k$-linéaire continue $E^k\to F$ grâce à l'isométrie $\mathcal L(E;\mathcal L(E;\dots))\simeq\mathcal L(E,\dots,E;F)$ ([[ch05-isometrie-bilineaire-curryfication]]), avec la convention $d^kf_a(h_1,\dots,h_k)=d^kf_a(h_1)(h_2)\cdots(h_k)$. Un **espace de Banach** est un evn complet ; l'intégrale est celle des fonctions réglées ([[ch05-integrale-fonctions-reglees]]).

## Énoncé

**Théorème (poly, Théorème V.5.11, p. 111).** Soit $f$ une fonction de classe $C^{p+1}$ d'un ouvert $U$ d'un espace vectoriel normé $E$ à valeurs dans un espace de Banach $F$. Soit $a\in U$, $h\in E$ et supposons que le segment $\{a+th,\ t\in[0;1]\}$ soit contenu dans $U$. On a alors
$$
f(a+h)-f(a)-df_a(h)-\frac{d^2f_a(h,h)}{2!}-\cdots-\frac{d^pf_a(h,h,\dots,h)}{p!}=\int_0^1\frac{(1-t)^p}{p!}\,d^{p+1}f_{a+th}(h,h,\dots,h)\,dt.
$$

## Hypothèses

### H1 — $f$ de classe $C^{p+1}$ sur $U$

**Rôle.** Elle rend $g(t)=f(a+th)$ de classe $C^{p+1}$, ce qu'exige le lemme 1D ; en particulier l'intégrande $t\mapsto d^{p+1}f_{a+th}(h,\dots,h)$ est continu, donc intégrable.

**Si on la retire.** Avec $E=F=\R$, $U=\R$, $p=0$, $a=0$, $h=1$ et $f(x)=x^2\sin(1/x^2)$ ($f(0)=0$) : $f$ est différentiable partout mais $f'$ n'est pas bornée sur $\left]0,1\right]$ (voir [[ch05-taylor-reste-integral-1d]]), donc pas réglée, et $\int_0^1df_{th}(1)\,dt=\int_0^1f'(t)\,dt$ n'a pas de sens. Pour $f$ seulement $(p+1)$ fois différentiable, on dispose de l'inégalité de Taylor-Lagrange ([[ch05-taylor-lagrange]]).

### H2 — $F$ est un espace de Banach

**Rôle.** Définir l'intégrale d'une fonction continue $[0,1]\to F$ (complétude indispensable à la construction de l'intégrale des fonctions réglées).

**Si on la retire.** L'intégrale d'une fonction continue à valeurs dans un evn non complet peut ne pas exister (exemple dans $c_{00}$ donné dans [[ch05-taylor-reste-integral-1d]]). Comme dans le lemme 1D, l'hypothèse est cependant de confort pour la formule elle-même : en intégrant dans le complété de $F$, on trouve une valeur qui est dans $F$. Pour des **estimations** sans complétude, utiliser Taylor-Lagrange ou Taylor-Young ([[ch05-taylor-young]]).

### H3 — Le segment $[a,a+h]$ est contenu dans $U$

**Rôle.** La fonction $g(t)=f(a+th)$ doit être définie (et $C^{p+1}$) sur un intervalle ouvert contenant $[0,1]$.

**Si on la retire.** Les deux membres peuvent être définis « presque » et différer. Sur le plan fendu $U=\R^2\setminus\{(x,0):x\le0\}$, soit $\theta(x,y)$ l'argument principal de $x+iy$ (dans $\left]-\pi,\pi\right[$), de classe $C^\infty$, avec $d\theta_{(x,y)}(u,v)=\frac{xv-yu}{x^2+y^2}$. Prenons $p=0$, $a=(-1,1)$, $h=(0,-2)$ : $a+h=(-1,-1)$, et le segment traverse la coupure en $(-1,0)\notin U$. On a $\theta(a+h)-\theta(a)=-\frac{3\pi}4-\frac{3\pi}4=-\frac{3\pi}2$, alors que l'intégrande $d\theta_{a+th}(h)=\frac{2}{1+(1-2t)^2}$ (défini pour $t\neq\frac12$, prolongeable par continuité) a pour intégrale $\int_0^1\frac{2\,dt}{1+(1-2t)^2}=\int_{-1}^1\frac{dy}{1+y^2}=\frac\pi2\neq-\frac{3\pi}2$.

## Idée de la preuve

Appliquer le lemme 1D à $g(t)=f(a+th)$, définie sur un intervalle ouvert contenant $[0,1]$, en montrant par récurrence (règle de la chaîne) que $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$ pour $k\le p+1$.

## Preuve

**Étape 1 : un intervalle ouvert contenant $[0,1]$.** L'ensemble $O=\{t\in\R:\ a+th\in U\}$ est ouvert (image réciproque de l'ouvert $U$ par l'application continue $t\mapsto a+th$) et contient le compact $[0,1]$. Il existe donc $\eta>0$ tel que $I=\left]-\eta,1+\eta\right[\subset O$ : sinon on trouverait $t_n\notin O$ avec $\dist(t_n,[0,1])<\frac1n$ ; une sous-suite convergerait vers un point de $[0,1]\subset O$, ce qui contredit la fermeture de $\R\setminus O$. On pose $g(t)=f(a+th)$ pour $t\in I$.

**Étape 2 : $g$ est $C^{p+1}$ et $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$ pour $0\le k\le p+1$.** Pour $k=0$ c'est la définition. Supposons la formule vraie au rang $k\le p$. L'application $\Lambda_k:\omega\mapsto\omega(h,\dots,h)$ ($k$ fois $h$), de l'espace des applications $k$-linéaires continues dans $F$, est linéaire et continue ($\norm{\Lambda_k\omega}\le\norm{\omega}\,\norm{h}^k$), donc égale à sa différentielle en tout point ([[ch05-differentielle-lineaire]]). Comme $f$ est $C^{p+1}$ et $k\le p$, l'application $x\mapsto d^kf_x$ est différentiable sur $U$, de différentielle $d^{k+1}f_x$ ; par la règle de la chaîne ([[ch05-composition-differentielles]]) appliquée à $t\mapsto a+th$ (de dérivée $h$), puis à $\Lambda_k$ :
$$
g^{(k+1)}(t)=\Lambda_k\big(d(d^kf)_{a+th}(h)\big)=d^{k+1}f_{a+th}(h)(h,\dots,h)=d^{k+1}f_{a+th}(h,\dots,h).
$$
C'est aussi la formule pratique ([[ch05-formule-pratique-dpf]]). Enfin $g^{(p+1)}=\Lambda_{p+1}\circ d^{p+1}f\circ(t\mapsto a+th)$ est continue car $d^{p+1}f$ l'est ($f$ de classe $C^{p+1}$) : $g$ est de classe $C^{p+1}$ sur $I$.

**Étape 3 : conclusion.** $I$ est un intervalle ouvert contenant $0$ et $1$, $F$ est un Banach et $g$ est $C^{p+1}$ : le lemme V.5.9 ([[ch05-taylor-reste-integral-1d]]) donne
$$
g(1)-\sum_{k=0}^p\frac{g^{(k)}(0)}{k!}=\int_0^1\frac{(1-t)^p}{p!}\,g^{(p+1)}(t)\,dt.
$$
Avec $g(1)=f(a+h)$, $g^{(k)}(0)=d^kf_a(h,\dots,h)$ et $g^{(p+1)}(t)=d^{p+1}f_{a+th}(h,\dots,h)$, c'est exactement la formule annoncée. $\square$

## Preuve à trous

L'ensemble $\{t:\ a+th\in U\}$ est ouvert et contient le compact $[0,1]$, donc il contient un intervalle ouvert $I\supset[0,1]$, sur lequel on pose <trou indice="restreindre f à une droite">$g(t)=f(a+th)$</trou>. Par récurrence et règle de la chaîne (la dérivée de $t\mapsto a+th$ est $h$, et $\omega\mapsto\omega(h,\dots,h)$ est linéaire continue), <trou indice="formule pratique de calcul des différentielles d'ordre k">$g$ est $C^{p+1}$ et $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$ pour $k\le p+1$</trou>. On applique alors <trou>le lemme V.5.9 (Taylor avec reste intégral en une variable, à valeurs dans le Banach $F$)</trou> à $g$, et on remplace $g(1)=f(a+h)$, $g^{(k)}(0)=d^kf_a(h,\dots,h)$. $\square$

## Exemples

* **Un polynôme de deux variables.** $f(x,y)=x^2y$ sur $E=\R^2$, $F=\R$, $p=1$, $a=(1,1)$, $h=(u,v)$. On a $df_a(h)=2xy\,u+x^2v=2u+v$ et
$$
f(a+h)-f(a)-df_a(h)=(1+u)^2(1+v)-1-2u-v=u^2+2uv+u^2v.
$$
Côté reste : $d^2f_{(x,y)}(h,h)=2y\,u^2+4x\,uv$ (dérivées partielles $f_{xx}=2y$, $f_{xy}=2x$, $f_{yy}=0$), donc en $a+th=(1+tu,1+tv)$ :
$$
\int_0^1(1-t)\big(2(1+tv)u^2+4(1+tu)uv\big)dt=\tfrac12(2u^2+4uv)+\tfrac16(2u^2v+4u^2v)=u^2+2uv+u^2v,
$$
en utilisant $\int_0^1(1-t)dt=\frac12$ et $\int_0^1t(1-t)dt=\frac16$. Les deux membres coïncident.
* **$p=0$.** On retrouve le théorème fondamental $f(a+h)=f(a)+\int_0^1df_{a+th}(h)\,dt$ ([[ch05-theoreme-fondamental]]).
* **Conséquence : borne du reste.** Si $\norm{d^{p+1}f_x}\le C$ sur le segment, la majoration $\norm{\int_0^1\cdots}\le C\norm{h}^{p+1}\int_0^1\frac{(1-t)^p}{p!}dt=\frac{C\norm{h}^{p+1}}{(p+1)!}$ redonne Taylor-Lagrange ([[ch05-taylor-lagrange]]) sous des hypothèses plus fortes.

## Pièges

* > ⚠️ Les termes sont $\frac{1}{k!}d^kf_a(h,\dots,h)$ avec le **même** vecteur $h$ répété $k$ fois ; en coordonnées, $d^2f_a(h,h)=\sum_{i,j}\frac{\partial^2f}{\partial x_i\partial x_j}(a)h_ih_j$ (la hessienne), avec les termes croisés comptés deux fois : $f_{xx}u^2+2f_{xy}uv+f_{yy}v^2$.
* Le segment $[a,a+h]$ doit être **entièrement** dans $U$ (contre-exemple de l'argument ci-dessus) ; c'est automatique si $U$ est convexe.
* Hypothèses les plus fortes des trois formules de Taylor : $C^{p+1}$ et $F$ Banach. En échange, on a une **égalité** valable pour tout $h$ (pas seulement $h$ petit).
* L'ordre des arguments dans $d^kf_a(h_1,\dots,h_k)$ n'importe pas ici (tous égaux à $h$), mais il importe ailleurs ; il est sans effet en classe $C^k$ grâce à la symétrie ([[ch05-differentielle-ordre-p-symetrique]]).
