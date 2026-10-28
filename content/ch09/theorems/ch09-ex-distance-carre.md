---
id: ch09-ex-distance-carre
type: proposition
chapter: 9
title: Fonction distance au carré $f(p)=\|p-p_0\|^2$ et sa différentielle
ref: Exemple IX.7.21
page: 164
importance: 2
depends: [ch09-remarques-differentielle-cas-euclidien, ch09-differentielle-entre-sous-varietes-def, ch09-fonction-differentiable-sur-sous-variete-def]
tags: [sous-variete, distance, differentielle, espace-tangent, point-critique, normale]
---
## Intuition

> 💡 Placez une lampe en $p_0$ et mesurez le carré de la distance de chaque point $p$ de $S$ à la lampe. En se déplaçant sur $S$ à la vitesse tangente $v$, on s'éloigne de $p_0$ d'autant plus vite que $v$ est aligné avec la direction $p-p_0$ : la variation vaut $2\langle v,p-p_0\rangle$.

On utilise le produit scalaire usuel $\langle\cdot,\cdot\rangle$ de $\R^N$ et la norme euclidienne $\norm{\cdot}$. L'**espace tangent** $T_pS$ est l'ensemble des vitesses en $p$ des courbes tracées sur $S$ ([[ch09-vecteur-tangent-espace-tangent-def]]) et la **différentielle** $df_p:T_pS\to\R$ envoie $\alpha'(0)$ sur $(f\circ\alpha)'(0)$ ([[ch09-differentielle-entre-sous-varietes-def]]).

Conséquence géométrique : $p$ est un point critique de $f$ exactement quand $p-p_0\perp T_pS$, c'est-à-dire quand **la normale à $S$ en $p$ passe par $p_0$**. Le point de $S$ le plus proche de $p_0$ (s'il existe) est de ce type : c'est le principe de la projection orthogonale sur une sous-variété.

## Énoncé

**Proposition (poly, Exemple IX.7.21, p. 164).** Soit $S$ une sous-variété de $\R^N$ de classe $C^\infty$. Soit $p_0\in\R^N$. La **fonction distance au carré**
$$
f:S\to\R,\qquad p\mapsto\langle p-p_0,p-p_0\rangle=\norm{p-p_0}^2
$$
est de classe $C^\infty$ car c'est la restriction d'une fonction $C^\infty$ définie sur l'espace $\R^N$. Sa différentielle en $p\in S$ est donnée par
$$
df_p:T_pS\to\R,\qquad v\mapsto 2\langle v,p-p_0\rangle .
$$

*Conséquence.* $p$ est un point critique de $f$ ($df_p=0$) si et seulement si $p-p_0\in(T_pS)^\perp$.

## Hypothèses

### H1 — $S$ de classe $C^\infty$

**Rôle.** Pour tout paramétrage $x:U\to S$, $f\circ x=\norm{x-p_0}^2$ a la régularité de $x$ ; $x$ de classe $C^\infty$ donne $f$ de classe $C^\infty$.

**Si on la retire.** Hypothèse de confort : si $S$ est seulement de classe $C^k$ ($k\ge1$), la même preuve donne $f$ de classe $C^k$, avec la même formule pour $df_p$. On ne peut pas faire mieux en général : pour $S=\{(t,t|t|)\}\subset\R^2$ (sous-variété $C^1$ seulement, graphe de $t\mapsto t|t|$) et $p_0=(0,-1)$, $f\circ x(t)=t^2+(t|t|+1)^2=t^2+t^4+2t|t|+1$, dont la dérivée seconde vaut $2+12t^2+4\,\mathrm{sgn}(t)$ pour $t\ne0$ : elle saute de $-2$ à $6$ en $0$, donc $f\circ x$ n'est pas $C^2$.

### H2 — aucune condition sur $p_0$

$p_0$ est quelconque, **dans $S$ ou non**. Si $p_0\in S$, $f(p_0)=0$ est le minimum global de $f$ et la formule donne bien $df_{p_0}=0$. C'est l'intérêt de travailler avec le **carré** : la distance $\norm{p-p_0}$ elle-même n'est différentiable qu'en dehors de $p_0$, d'où l'hypothèse $p_0\notin S$ dans [[ch09-ex-distance]].

## Idée de la preuve

$f$ est la restriction à $S$ de $F(x)=\norm{x-p_0}^2$, polynomiale ; on lit $f$ dans les paramétrages pour la régularité, et le long d'une courbe $\alpha$ tracée sur $S$ on dérive $\langle\alpha-p_0,\alpha-p_0\rangle$ comme un produit.

## Preuve

Posons $F:\R^N\to\R$, $F(x)=\langle x-p_0,x-p_0\rangle$. C'est une fonction polynomiale en les coordonnées, donc $C^\infty$, et pour $x,v\in\R^N$,
$$
F(x+v)=F(x)+2\langle v,x-p_0\rangle+\norm v^2 ,
$$
donc $dF_x(v)=2\langle v,x-p_0\rangle$ (le reste $\norm v^2$ est un $o(\norm v)$). Par définition $f=F|_S$.

*Régularité.* Pour tout paramétrage local $x:U\to S$ (de classe $C^\infty$), $f\circ x=F\circ x$ est une composée d'applications $C^\infty$ entre ouverts, donc $C^\infty$ : $f$ est de classe $C^\infty$ sur $S$ ([[ch09-fonction-differentiable-sur-sous-variete-def]]).

*Différentielle.* Soient $p\in S$ et $v\in T_pS$ : il existe une courbe $\alpha:I\to\R^N$ de classe $C^1$ tracée sur $S$ avec $\alpha(0)=p$, $\alpha'(0)=v$ ([[ch09-vecteur-tangent-espace-tangent-def]]). Par la caractérisation 2 de la différentielle ([[ch09-differentielle-entre-sous-varietes-def]]), et en dérivant le produit scalaire (forme bilinéaire symétrique) :
$$
df_p(v)=(f\circ\alpha)'(0)=\frac d{dt}\Big|_{t=0}\langle\alpha(t)-p_0,\alpha(t)-p_0\rangle=2\langle\alpha'(0),\alpha(0)-p_0\rangle=2\langle v,p-p_0\rangle .
$$
On retrouve que $df_p$ est la restriction de $dF_p$ à $T_pS$ ([[ch09-remarques-differentielle-cas-euclidien]], point 2).

*Conséquence.* $df_p=0$ $\iff$ $\langle v,p-p_0\rangle=0$ pour tout $v\in T_pS$ $\iff$ $p-p_0\in(T_pS)^\perp$. $\square$

## Preuve à trous

Soit $F(x)=\langle x-p_0,x-p_0\rangle$ sur $\R^N$. Le développement <trou indice="développer F(x+v)">$F(x+v)=F(x)+2\langle v,x-p_0\rangle+\norm v^2$</trou> montre que $dF_x(v)=2\langle v,x-p_0\rangle$.

Pour tout paramétrage $C^\infty$ $x:U\to S$, $f\circ x=F\circ x$ est $C^\infty$, donc $f$ est $C^\infty$ sur $S$.

Si $v=\alpha'(0)\in T_pS$ avec $\alpha$ tracée sur $S$, $\alpha(0)=p$, alors $df_p(v)=$ <trou indice="dérivée d'un produit scalaire de deux fonctions">$\frac d{dt}\big|_{t=0}\langle\alpha(t)-p_0,\alpha(t)-p_0\rangle=2\langle\alpha'(0),\alpha(0)-p_0\rangle$</trou> $=2\langle v,p-p_0\rangle$.

Enfin $p$ est critique $\iff$ <trou>$p-p_0$ est orthogonal à $T_pS$ (la normale en $p$ passe par $p_0$)</trou>. $\square$

## Exemples

* **Sphère.** $S=\mathbb S^n\subset\R^{n+1}$, $T_p\mathbb S^n=p^\perp$ ([[ch09-espace-tangent-graphe-equation]], avec $F(x)=\norm x^2-1$). Sur $S$, $f(p)=\norm p^2-2\langle p,p_0\rangle+\norm{p_0}^2=1+\norm{p_0}^2-2\langle p,p_0\rangle$. Point critique $\iff$ $p-p_0\in(p^\perp)^\perp=\R p$ $\iff$ $p_0\in\R p$.
  * Si $p_0\ne0$ : exactement deux points critiques $p=\pm p_0/\norm{p_0}$, avec $f=(1-\norm{p_0})^2$ (minimum, point le plus proche) et $f=(1+\norm{p_0})^2$ (maximum).
  * Si $p_0=0$ : $f\equiv1$, tous les points sont critiques — cohérent avec $p\perp T_p\mathbb S^n$ pour tout $p$.
* **Parabole et centre de courbure.** $S=\{y=x^2\}\subset\R^2$, $p_0=(0,b)$, paramétrage $x(t)=(t,t^2)$, $x'(t)=(1,2t)$ engendre $T_{x(t)}S$. Point critique $\iff$ $\langle(1,2t),(t,t^2-b)\rangle=t+2t^3-2bt=t(1+2t^2-2b)=0$. Vérification directe : $f\circ x(t)=t^2+(t^2-b)^2$ a pour dérivée $2t+4t(t^2-b)=2t(1+2t^2-2b)$. Donc :
  * si $b\le\frac12$ : seul point critique $t=0$, minimum global ($f\circ x(t)=b^2+(1-2b)t^2+t^4$) ;
  * si $b>\frac12$ : $t=0$ devient un maximum local (coefficient $1-2b<0$) et deux minima apparaissent en $t=\pm\sqrt{b-\frac12}$.
  
  La valeur charnière $b=\frac12$ est le **centre de courbure** de la parabole au sommet (rayon de courbure $\frac12$).
* **Droite.** $S=\R u$ ($\norm u=1$) dans $\R^N$ : $T_pS=\R u$, et $p=tu$ est critique $\iff$ $\langle u,tu-p_0\rangle=0$ $\iff$ $t=\langle u,p_0\rangle$ : on retrouve la projection orthogonale de $p_0$ sur la droite.

## Pièges

* > ⚠️ Ne pas oublier le facteur $2$ : $df_p(v)=2\langle v,p-p_0\rangle$. (Le signe, $p-p_0$ ou $p_0-p$, n'influe pas sur les points critiques mais compte dans la formule.)
* $df_p$ est une forme linéaire sur $T_pS$, pas sur $\R^N$ : « $df_p=0$ » signifie $p-p_0\perp T_pS$, pas $p=p_0$.
* Utiliser le **carré** de la distance : $p\mapsto\norm{p-p_0}$ n'est pas différentiable en $p_0$ (si $p_0\in S$) ; ses points critiques ailleurs sont les mêmes que ceux de $f$ (puisque $\norm{p-p_0}=\sqrt{f}$ et $\sqrt{\cdot}$ a une dérivée non nulle sur $]0,+\infty[$).
* Un point critique n'est pas forcément un extremum (cf. la parabole : pour $b>\frac12$, $t=0$ est un maximum **local** seulement) ; pour trancher, il faut l'ordre 2 ([[ch09-hessienne-def]]).
