---
id: ch09-vecteur-tangent-espace-tangent-def
type: definition
chapter: 9
title: Vecteur tangent, espace tangent (par les courbes)
ref: Définition IX.7.8
page: 160
importance: 3
depends: [ch09-sous-variete-def]
tags: [espace-tangent, vecteur-tangent, courbe, sous-variete, vitesse]
---
## Intuition

> 💡 Imaginez une fourmi qui se promène sur une surface $S$ (une sphère, un tore...) sans jamais la quitter. Au moment où elle passe par le point $p$, sa **vitesse** est un vecteur de l'espace ambiant $\R^N$ qui « rase » la surface. Un **vecteur tangent** à $S$ en $p$, c'est exactement une vitesse possible d'une telle fourmi en $p$ ; l'**espace tangent** est l'ensemble de toutes ces vitesses possibles.

Ici $S$ est une **sous-variété** de dimension $m$ de $\R^N$ ([[ch09-sous-variete-def]]) : une partie qui, près de chacun de ses points, ressemble à un morceau d'ouvert de $\R^m$, décrit par un **paramétrage local** $x : U\to S$. Une **courbe paramétrée** est une application $\alpha : I\to\R^N$ d'un intervalle $I$ de $\R$ ; sa **trace** est son image $\alpha(I)$, et $\alpha'(0)$ est son vecteur vitesse au temps $0$.

La définition est géométrique et ne dépend d'aucun paramétrage. Mais il n'est **pas évident** qu'on obtienne ainsi un sous-espace vectoriel (la somme de deux vitesses est-elle encore une vitesse ?) : c'est la Proposition IX.7.9 ([[ch09-espace-tangent-image-dx]]) qui le montre, grâce aux paramétrages locaux, et qui donne sa dimension $m$.

## Énoncé

**Définition (poly, Définition IX.7.8, p. 160).** Soit $S$ une sous-variété de dimension $m$ de $\R^N$. On dit que $\vec v$ est un **vecteur tangent à $S$ en $p$** s'il existe une courbe paramétrée $\alpha : I\to\R^N$ de classe $C^1$, où $I$ est un intervalle ouvert contenant $0$, dont la trace est contenue dans $S$, telle que $\alpha(0)=p$ et $\alpha'(0)=\vec v$.

On appelle **espace tangent à $S$ en $p$** l'ensemble des vecteurs tangents à $S$ en $p$.

(Ici $p\in S$ et $\vec v\in\R^N$ : un vecteur tangent est un vecteur de l'espace **ambiant**. Le poly note cet ensemble $T_pS$ à partir de la Définition IX.7.10, voir [[ch09-notation-tps]].)

## Hypothèses

### H1 — la trace de $\alpha$ est contenue dans $S$

**Rôle.** C'est toute la définition : on ne regarde que les vitesses de courbes **qui restent sur $S$**. Si on autorisait des courbes quelconques passant par $p$, on obtiendrait tout $\R^N$ (prendre $\alpha(t)=p+t\vec v$).

**Si on la retire.** Pour le cercle $S=\{x^2+y^2=1\}$ et $p=(1,0)$, la droite $\alpha(t)=(1+t,0)$ passe par $p$ avec la vitesse $(1,0)$, qui n'est pas tangente au cercle (voir l'exemple 1 : l'espace tangent est $\{0\}\times\R$).

### H2 — $\alpha$ est de classe $C^1$ sur un intervalle **ouvert** contenant $0$

**Rôle.** Le caractère $C^1$ sert dans la preuve de la Proposition IX.7.9 : il assure que $x^{-1}\circ\alpha$ est encore $C^1$, ce qui permet d'écrire $\alpha'(0)=dx_q\big((x^{-1}\circ\alpha)'(0)\big)$. L'intervalle ouvert autour de $0$ donne une dérivée **bilatérale** : la courbe arrive en $p$ et en repart.

**Si on la retire.** Pour une sous-variété, c'est une hypothèse **de confort** : on obtiendrait le même ensemble avec des courbes seulement dérivables en $0$, ou définies sur $[0,\eps[$ avec dérivée à droite (dans les deux cas, en composant par la carte $x^{-1}$, qui est la restriction à $S$ d'une application $C^1$ définie sur un ouvert de $\R^N$ — voir la preuve de [[ch09-changement-parametrage]] —, on retombe dans $dx_q(\R^m)$, et toutes ces vitesses sont déjà atteintes par les courbes $t\mapsto x(q+t\vec w)$). En revanche, pour un ensemble qui n'est **pas** une sous-variété, ces variantes donnent des ensembles différents : pour la demi-droite $[0,+\infty[\subset\R$ ([[ch09-contre-ex-demi-droite]]), les courbes sur $[0,\eps[$ donnent les vitesses $v\ge 0$ en $0$, les courbes sur un intervalle ouvert ne donnent que $v=0$ (une courbe $C^1$ à valeurs dans $[0,+\infty[$ avec $\alpha(0)=0$ a un minimum en $0$, donc $\alpha'(0)=0$).

### H3 — $S$ est une sous-variété

**Rôle.** La définition a un sens pour n'importe quelle partie $S$, mais ce n'est que pour une sous-variété qu'on obtient un sous-espace vectoriel (de dimension $m$).

**Si on la retire.** Pour le **cône** $C=\{x^2+y^2-z^2=0\}$ de $\R^3$ (qui n'est pas une sous-variété, Exercice IX.7.12) et $p=0$ : si $\alpha$ est $C^1$ à valeurs dans $C$ avec $\alpha(0)=0$ et $\alpha'(0)=\vec v$, alors $\alpha(t)=t\vec v+o(t)$ et, en notant $Q(x,y,z)=x^2+y^2-z^2$ (quadratique), $0=Q(\alpha(t))=t^2Q(\vec v)+o(t^2)$, donc $Q(\vec v)=0$ ; réciproquement si $Q(\vec v)=0$, la droite $\alpha(t)=t\vec v$ est dans $C$. L'ensemble des vecteurs tangents en $0$ est donc **le cône lui-même**, qui n'est pas un sous-espace vectoriel : $(1,0,1)$ et $(-1,0,1)$ sont dans $C$ mais pas leur somme $(0,0,2)$ ($Q=-4\neq0$). Même phénomène pour la croix $\{xy=0\}$ en $0$ ([[ch09-contre-ex-croix]]) : on trouve la croix elle-même.

## Exemples

* **Le cercle en $p=(1,0)$.** Les courbes $\alpha_c(t)=(\cos ct,\sin ct)$, $c\in\R$, sont $C^\infty$, tracées sur le cercle, avec $\alpha_c(0)=p$ et $\alpha_c'(0)=(0,c)$ : tout vecteur de $\{0\}\times\R$ est tangent. Réciproquement, si $\alpha=(\alpha_1,\alpha_2)$ est $C^1$ sur le cercle avec $\alpha(0)=p$, on dérive $\alpha_1^2+\alpha_2^2=1$ : $2\alpha_1(0)\alpha_1'(0)+2\alpha_2(0)\alpha_2'(0)=0$, soit $\alpha_1'(0)=0$. L'espace tangent est donc la droite verticale $\{0\}\times\R$ — passant par l'**origine**, pas par $p$.
* **La sphère $\mathbb S^2$ en un point $p$.** Si $\alpha$ est $C^1$ à valeurs dans $\mathbb S^2$ avec $\alpha(0)=p$, en dérivant $\langle\alpha(t),\alpha(t)\rangle=1$ on obtient $2\langle\alpha(0),\alpha'(0)\rangle=0$ : tout vecteur tangent est orthogonal à $p$. Réciproquement, si $\vec v\perp p$ et $\vec v\neq0$, la courbe $\alpha(t)=\cos(\norm{\vec v}t)\,p+\sin(\norm{\vec v}t)\,\frac{\vec v}{\norm{\vec v}}$ est de norme $1$ (car $p\perp\vec v$ et $\norm p=1$), vérifie $\alpha(0)=p$ et $\alpha'(0)=\vec v$ ; pour $\vec v=0$ on prend la courbe constante. Donc l'espace tangent en $p$ est le plan $p^\perp$.
* **Un ouvert $\Omega$ de $\R^N$** (sous-variété de dimension $N$) : pour tout $\vec v\in\R^N$, la courbe $t\mapsto p+t\vec v$ reste dans $\Omega$ pour $t$ petit (prendre $I=\,]-\eps,\eps[$ avec $\eps$ assez petit), donc l'espace tangent en $p$ est $\R^N$ tout entier.

## Pièges

* > ⚠️ Un vecteur tangent est un vecteur de $\R^N$ « attaché » à $p$ mais l'espace tangent, comme ensemble de vecteurs, **passe par $0$**, pas par $p$ : pour le cercle en $(1,0)$ c'est l'axe $\{0\}\times\R$, et non la droite $\{1\}\times\R$ (qui est l'espace tangent **affine**, [[ch09-notation-tps]]).
* La définition seule ne dit pas que l'espace tangent est un sous-espace vectoriel ; c'est un **théorème** ([[ch09-espace-tangent-image-dx]]), qui repose sur la condition d'immersion des paramétrages. Pour le cône ou la croix, ce n'est pas un sous-espace.
* La courbe doit rester **sur $S$** sur tout un intervalle autour de $0$, pas seulement passer par $p$.
* Pour **montrer** qu'un vecteur $\vec v$ est tangent, il faut exhiber une courbe ; pour calculer l'espace tangent en pratique, on utilise plutôt $T_pS=dx_q(\R^m)$ ([[ch09-espace-tangent-image-dx]]) ou $T_pS=\ker dF_p$ ([[ch09-espace-tangent-graphe-equation]]).
