---
id: ch09-graphe-sous-variete
type: proposition
chapter: 9
title: Le graphe d'une application $C^k$ est une sous-variété
ref: Proposition IX.5.1
page: 156
importance: 2
depends: [ch09-sous-variete-def, ch09-immersion-submersion-def]
tags: [sous-variete, graphe, parametrage-global, exemple]
---
## Intuition

> 💡 Le graphe d'une fonction lisse $f$ d'un ouvert $U\subset\R^m$ dans $\R^{N-m}$ est une nappe de dimension $m$ « sans repli » : au-dessus de chaque $u\in U$, il y a exactement un point $(u,f(u))$. On le paramètre tout entier par $u\mapsto(u,f(u))$, et l'inverse est simplement « oublier les dernières coordonnées » : pas de croisement possible, pas de pointe possible (la première composante $u\mapsto u$ a toujours une différentielle injective).

On identifie $\R^m\times\R^{N-m}=\R^N$ ; la **sous-variété** est définie dans [[ch09-sous-variete-def]] ; un **paramétrage global** est un paramétrage local $x:U\to V\cap S$ avec $V\cap S=S$ (un seul paramétrage pour tous les points).

## Énoncé

**Proposition (poly, Proposition IX.5.1, p. 156).** Soit $f:U\to\R^{N-m}$ une fonction différentiable de classe $C^k$ définie sur un ouvert $U$ de $\R^m$. Le graphe de $f$
$$
\mathrm{Graphe}(f)=\{(u,f(u)),\ (u\in U)\}
$$
est une sous-variété de $\R^m\times\R^{N-m}=\R^N$ de dimension $m$ (de classe $C^k$), un paramétrage global étant
$$
x:U\to\R^N,\qquad u\mapsto(u,f(u)).
$$

## Hypothèses

### H1 — $f$ de classe $C^k$ ($k\ge1$)

**Rôle.** Elle rend le paramétrage $x$ de classe $C^k$ (condition 1 de la définition) et permet de calculer $dx_u$.

**Si on la retire.** Pour $f(u)=|u|$ sur $U=\R$ (continue, non $C^1$), le graphe $G$ n'est pas une sous-variété $C^1$. En effet, soit $y=(a,b):I\to G\cap V$ un paramétrage $C^1$ en $(0,0)$, $y(s_0)=(0,0)$. Sur $G$, $b=|a|\ge0$, donc $b$ est minimale en $s_0$ et $b'(s_0)=0$ ; l'immersion impose $a'(s_0)\neq0$. Mais alors $\dfrac{b(s)-b(s_0)}{s-s_0}=\dfrac{|a(s)|}{s-s_0}$ tend vers $|a'(s_0)|$ quand $s\to s_0^+$ et vers $-|a'(s_0)|$ quand $s\to s_0^-$ (car $a(s)\sim a'(s_0)(s-s_0)$) : $b$ n'est pas dérivable en $s_0$, contradiction. (Le graphe reste homéomorphe à $\R$ : le défaut est la pointe, pas la topologie.)

### H2 — $U$ est un ouvert de $\R^m$

**Rôle.** Un paramétrage est défini sur un **ouvert** de $\R^m$ (définition [[ch09-sous-variete-def]]).

**Si on la retire.** Pour $U=[0;1[$ et $f=0$, le graphe est le segment $[0;1[\times\{0\}$, qui n'est pas une sous-variété de $\R^2$ en $(0,0)$ (même argument topologique que pour la demi-droite, [[ch09-contre-ex-demi-droite]]).

## Idée de la preuve

On vérifie les trois conditions de la définition pour $x(u)=(u,f(u))$ : $x$ est $C^k$ ; c'est un homéomorphisme sur le graphe, d'inverse la projection $(u,v)\mapsto u$ ; $dx_u(h)=(h,df_u(h))$ est injective à cause de la première composante.

## Preuve

*Le poly énonce seulement le paramétrage global ; on vérifie les trois conditions de [[ch09-sous-variete-def]].* Notons $G=\mathrm{Graphe}(f)$, $x(u)=(u,f(u))$, et prenons pour ouvert de $\R^N$ l'ouvert $V=U\times\R^{N-m}$ (ou $V=\R^N$) ; on a $V\cap G=G=x(U)$.

1. *Régularité.* Les composantes de $x$ sont $u\mapsto u$ (linéaire) et $f$ (de classe $C^k$) : $x$ est de classe $C^k$.
2. *Homéomorphisme.* $x$ est injective (sa première composante l'est), et $x(U)=G$ par définition du graphe. Son inverse est $x^{-1}=p_1|_G$, restriction à $G$ de la projection linéaire $p_1:\R^m\times\R^{N-m}\to\R^m$, $(u,v)\mapsto u$, qui est continue. Donc $x$ est un homéomorphisme de $U$ sur $V\cap G$.
3. *Immersion.* Pour $u\in U$ et $h\in\R^m$, $dx_u(h)=(h,\ df_u(h))$. Si $dx_u(h)=0$, alors en particulier $h=0$ : $dx_u$ est injective ([[ch09-immersion-submersion-def]]).

Donc, pour tout $p\in G$, $x:U\to V$ est un paramétrage local de $G$ en $p$ : $G$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\R^N$, et $x$ en est un paramétrage global. $\square$

## Preuve à trous

On pose $x(u)=(u,f(u))$ sur $U$, et $V=U\times\R^{N-m}$. (1) $x$ est $C^k$ car $f$ l'est. (2) $x$ est une bijection de $U$ sur $G$ dont l'inverse est <trou indice="oublier les dernières coordonnées">la restriction à $G$ de la projection $(u,v)\mapsto u$, continue</trou>. (3) <trou>$dx_u(h)=(h,df_u(h))$</trou>, qui est injective car <trou>$dx_u(h)=0$ impose la nullité de la première composante, $h=0$</trou>. Donc $x$ est un paramétrage global et $G$ est une sous-variété de dimension $m$. $\square$

## Exemples

* **Parabole et paraboloïde.** $f(u)=u^2$ sur $\R$ : la parabole $\{y=x^2\}$ est une courbe ($m=1$, $N=2$), paramétrée par $u\mapsto(u,u^2)$, $x'(u)=(1,2u)\neq0$. $f(u_1,u_2)=u_1^2+u_2^2$ : le paraboloïde de révolution est une surface de $\R^3$, avec $x_{u_1}=(1,0,2u_1)$, $x_{u_2}=(0,1,2u_2)$ linéairement indépendants (vecteurs $(e_i,\partial_if)$).
* **Demi-sphère.** $f(u)=\sqrt{1-\norm u^2}$ sur la boule ouverte $U=\{\norm u<1\}$ de $\R^n$ : $f$ est $C^\infty$ sur $U$ (car $1-\norm u^2>0$), et son graphe est l'hémisphère nord ouvert $\mathbb S^n\cap\{x_{n+1}>0\}$. En recouvrant $\mathbb S^n$ par les $2(n+1)$ hémisphères $\{\pm x_i>0\}$, chacun graphe au-dessus d'un hyperplan de coordonnées, on retrouve que $\mathbb S^n$ est une sous-variété (comparer avec [[ch09-ex-sphere]]).
* **Graphe d'une application vectorielle.** $f:\R\to\R^2$, $f(t)=(\cos t,\sin t)$ : le graphe $\{(t,\cos t,\sin t)\}$ est l'hélice circulaire, sous-variété de dimension $1$ de $\R^3$. Les graphes donnent aussi des sous-variétés de codimension $>1$.

## Pièges

* > ⚠️ Le graphe est une sous-variété de dimension $m$ (la dimension de l'espace de **départ**), pas $N$ ni $N-m$.
* Le graphe est fermé dans $U\times\R^{N-m}$, mais pas forcément dans $\R^N$ : le graphe de $u\mapsto\sin(1/u)$ sur $]0;+\infty[$ est une sous-variété de $\R^2$ dont l'adhérence contient tout le segment $\{0\}\times[-1;1]$ (cf. [[ch09-remarque-fermeture]]).
* Toute sous-variété n'est pas un graphe **globalement** (la sphère ne l'est pas), mais elle l'est **localement** après un changement linéaire de coordonnées ([[ch09-sous-variete-localement-graphe]]) ; réciproquement, un ensemble localement graphe est une sous-variété ([[ch09-localement-graphe-implique-sous-variete]]).
* Un graphe « vertical » comme $\{x=y^2\}$ est le graphe de $y\mapsto y^2$ **au-dessus de l'axe des $y$** : il faut parfois permuter les coordonnées (un isomorphisme linéaire $A$, comme dans [[ch09-localement-graphe-implique-sous-variete]]).
