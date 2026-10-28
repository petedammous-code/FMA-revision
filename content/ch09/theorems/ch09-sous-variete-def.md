---
id: ch09-sous-variete-def
type: definition
chapter: 9
title: Sous-variété de $\mathbb R^N$, paramétrage local, carte, codimension, surface, hypersurface
ref: Définition IX.2.1
page: 148
importance: 3
depends: [ch09-immersion-submersion-def, ch05-classe-ck-def]
tags: [sous-variete, parametrage-local, carte, coordonnees-locales, codimension, surface, hypersurface]
---
## Intuition

> 💡 Une sous-variété de dimension $m$ de $\R^N$ est une partie $S$ qui, **vue de près autour de chacun de ses points**, ressemble à un morceau d'ouvert de $\R^m$, posé dans $\R^N$ sans pli, sans pointe, sans croisement : une courbe lisse ($m=1$), une surface lisse ($m=2$)... On l'exprime par des **paramétrages locaux** : autour de chaque $p\in S$, une application $x$ d'un ouvert $U$ de $\R^m$ (la « carte de géographe ») dans $\R^N$, qui recouvre exactement le morceau de $S$ près de $p$.

Trois exigences sur $x$ : (1) elle est lisse ($C^k$) ; (2) c'est un **homéomorphisme** (bijection continue d'inverse continu) de $U$ sur le morceau $V\cap S$ — cela interdit les croisements et les « recollements à distance » ; (3) c'est une **immersion** ($dx_q$ injective, [[ch09-immersion-submersion-def]]) — cela interdit les pointes et les plis.

Le poly écrit le paramétrage en gras ($\mathbf x$) et la sous-variété en lettre ronde ; on note ici simplement $x$ et $S$. Attention : $x$ désigne une **application**, pas un point.

## Énoncé

**Définition (poly, Définition IX.2.1, p. 148).** Soient $m\in\N$ et $k\in\N^\times\cup\{\infty\}$. Un sous-ensemble $S$ de $\R^N$ est une **sous-variété de dimension $m$ de classe $C^k$** si pour tout $p\in S$, il existe un ouvert $U$ de $\R^m$, un voisinage ouvert $V$ de $p$ dans $\R^N$ et une application $x : U\to V$ tels que :
1. l'application $x$ est différentiable de classe $C^k$,
2. l'application $x$ est un homéomorphisme de $U$ sur $V\cap S$,
3. (condition de régularité) en tout point $q\in U$, la différentielle $dx_q : \R^m\to\R^N$ est injective (autrement dit, $x$ est une immersion).

L'application $x$ est un **paramétrage local** de la sous-variété $S$ en $p$. Son inverse $x^{-1} : V\cap S\to U$ est une **carte** ou encore un **système de coordonnées (locales)** de la sous-variété $S$ en $p$.

La **codimension** d'une sous-variété $S$ de dimension $m$ de $\R^N$ est $N-m$. Une sous-variété de dimension $2$ est appelée **surface**. Une sous-variété de codimension $1$ est appelée **hypersurface**.

Au point 2, la topologie sur $S$ est celle induite par la topologie usuelle de $\R^N$.

(Ici $\N^\times=\N\setminus\{0\}$ : on a toujours $k\ge1$. Le point $p$ s'écrit $p=x(q)$ pour un unique $q\in U$ ; les composantes de $q=x^{-1}(p)$ sont les **coordonnées locales** de $p$.)

## Hypothèses

### H1 — $x$ de classe $C^k$, $k\ge1$ (condition 1)

**Rôle.** Sans différentiabilité, la condition 3 n'a pas de sens ; la classe $C^k$ fixe la régularité de $S$ (et toutes les notions différentielles sur $S$ en découleront : fonctions $C^k$ sur $S$, espace tangent...).

**Si on la retire.** On obtiendrait la notion (plus faible, purement topologique) de « variété topologique » : le graphe de $|t|$, image de l'homéomorphisme $t\mapsto(t,|t|)$, en serait une, alors qu'il a un coin (et n'est pas une sous-variété $C^1$, voir H3).

### H2 — $x$ homéomorphisme de $U$ sur $V\cap S$, topologie induite (condition 2)

**Rôle.** Elle dit que $x$ recouvre **tout** le morceau $V\cap S$ de $S$ près de $p$, et **rien d'autre** ; la continuité de $x^{-1}$ (pour la topologie induite) interdit qu'une autre branche de $S$ vienne s'accumuler sur le morceau.

**Si on la retire.** La « figure huit » $x(t)=(\sin2t,\sin t)$, $t\in\,]-\pi,\pi[$, est $C^\infty$, immersive ($x'(t)=(2\cos2t,\cos t)$ ne s'annule pas, car $\cos t=0\Rightarrow\cos2t=-1$) et injective (si $\sin t_1=\sin t_2$ avec $t_1\neq t_2$, alors $t_2=\pm\pi-t_1$, d'où $\sin2t_2=-\sin2t_1$, qui n'est égal à $\sin2t_1$ que si $t_1\in\{0,\pm\frac\pi2\}$, cas exclus). Son image $S$ vérifierait donc 1 et 3 avec $V=\R^2$. Mais $S$ n'est pas une sous-variété en $0$. La dimension ne pourrait être que $1$ : $S$ n'est pas discret ($m\neq0$) et est d'intérieur vide dans $\R^2$ (chaque droite horizontale $\{v=c\}$ rencontre $S$ en au plus deux points, car $\sin t=c$ a au plus deux solutions dans $]-\pi,\pi[$), donc $m\neq2$. Si $y : J\to V\cap S$ était un paramétrage de dimension $1$ en $0$, avec $J$ un intervalle ouvert (composante connexe de l'ouvert de départ contenant $s_0=y^{-1}(0)$) et $y(J)$ voisinage de $0$ dans $S$, les quatre arcs disjoints $x(]0,\delta[)$, $x(]-\delta,0[)$, $x(]\pi-\delta,\pi[)$, $x(]-\pi,-\pi+\delta[)$ seraient, pour $\delta$ petit, contenus dans $y(J)\setminus\{0\}$ ; leurs images par $y^{-1}$ seraient quatre intervalles disjoints de $J\setminus\{s_0\}$ ayant $s_0$ dans leur adhérence (car ces arcs tendent vers $0$ et $y^{-1}$ est continue), donc deux d'entre eux du même côté de $s_0$, chacun contenant un intervalle $]s_0,s_0+\eta[$ ou $]s_0-\eta,s_0[$ : ils se rencontreraient, contradiction. Voir aussi le folium de Descartes ([[ch09-contre-ex-folium]]) et la croix ([[ch09-contre-ex-croix]]).

### H3 — $dx_q$ injective en tout $q\in U$ (condition 3)

**Rôle.** Elle empêche les pointes et les coins ; c'est elle qui fera de l'espace tangent $T_pS=dx_q(\R^m)$ un sous-espace de dimension exactement $m$ ([[ch09-espace-tangent-image-dx]]). Elle impose $m\le N$.

**Si on la retire.** Le graphe de la valeur absolue $S=\{(t,|t|),\ t\in\R\}$ serait une « sous-variété de classe $C^2$ » : $x(t)=(t^3,|t|^3)$ est $C^2$ (car $(|t|^3)'=3t|t|$ et $(|t|^3)''=6|t|$), c'est un homéomorphisme de $\R$ sur $S$ (inverse $(u,v)\mapsto u^{1/3}$), mais $dx_0=0$. Or $S$ n'est pas une sous-variété $C^1$ : la dimension ne pourrait être que $1$ (un graphe n'est ni discret ni d'intérieur non vide dans $\R^2$), et si $y=(y_1,y_2) : J\to V\cap S$ était un paramétrage de dimension $1$ en $(0,0)=y(s_0)$ avec $y'(s_0)\neq0$, alors $y_2=|y_1|\ge0$ atteint un minimum en $s_0$, donc $y_2'(s_0)=0$, donc $y_1'(s_0)\neq0$ ; mais alors $\frac{y_2(s)}{s-s_0}=\frac{|y_1(s)|}{s-s_0}$ tend vers $|y_1'(s_0)|$ à droite et vers $-|y_1'(s_0)|$ à gauche, valeurs distinctes : $y_2$ ne serait pas dérivable en $s_0$. Même phénomène pour le cusp $\{(t^2,t^3)\}$ (Exercice IX.2.13).

### H4 — $U$ ouvert de $\R^m$, $V$ ouvert de $\R^N$

**Rôle.** Le morceau de $S$ autour de $p$ doit ressembler à un **ouvert** de $\R^m$ (pas de bord) ; $V$ ouvert garantit que $V\cap S$ est un voisinage de $p$ dans $S$.

**Si on la retire.** Avec $U=[0,+\infty[$ et $x(t)=t$, la demi-droite fermée $[0,+\infty[$ serait une sous-variété de $\R$ ; elle ne l'est pas ([[ch09-contre-ex-demi-droite]]).

## Exemples

* **Le cercle unité** $S=\{(u,v) : u^2+v^2=1\}$ est une sous-variété $C^\infty$ de dimension $1$ de $\R^2$ (une hypersurface). En tout $p\neq(-1,0)$, on prend $U=\,]-\pi,\pi[$, $V=\R^2\setminus\{(-1,0)\}$ et $x(\theta)=(\cos\theta,\sin\theta)$ : $x$ est $C^\infty$, $x'(\theta)=(-\sin\theta,\cos\theta)\neq0$, et $x$ est un homéomorphisme de $U$ sur $V\cap S$ d'inverse continu $(u,v)\mapsto2\arctan\frac{v}{1+u}$ (car $\tan\frac\theta2=\frac{\sin\theta}{1+\cos\theta}$). En $p=(-1,0)$, on prend $U=\,]0,2\pi[$ et $V=\R^2\setminus\{(1,0)\}$. Un seul paramétrage ne suffit pas.
* **La sphère, par hémisphères** (une surface de $\R^3$). Sur $U=D(0,1)=\{u^2+v^2<1\}$, $x(u,v)=(u,v,\sqrt{1-u^2-v^2})$, $V=\{z>0\}$ : $x$ est $C^\infty$ sur $U$, homéomorphisme sur l'hémisphère nord $V\cap\mathbb S^2$ d'inverse $(x_1,x_2,x_3)\mapsto(x_1,x_2)$, et $J_x(u,v)=\begin{pmatrix}1&0\\0&1\\ -u/w&-v/w\end{pmatrix}$ ($w=\sqrt{1-u^2-v^2}$) est de rang $2$. Les six hémisphères $\{\pm x_i>0\}$ recouvrent $\mathbb S^2$. Voir aussi [[ch09-ex-sphere]].
* **Ouverts, sous-espaces, graphes.** Un ouvert de $\R^N$ (paramétrage : l'inclusion) est une sous-variété de dimension $N$ ([[ch09-ex-ouvert-sous-variete]]) ; un sous-espace affine de dimension $m$ en est une de dimension $m$ ([[ch09-ex-sous-espace-affine]]) ; le graphe d'une fonction $g:U\to\R^{N-m}$ de classe $C^k$ est une sous-variété de dimension $m$, paramétrée globalement par $u\mapsto(u,g(u))$ ([[ch09-graphe-sous-variete]]).

## Pièges

* > ⚠️ Les **trois** conditions sont indispensables, et la condition 2 porte sur $V\cap S$ (tout le morceau de $S$ dans $V$), pas seulement sur $x(U)$. Une immersion injective ne suffit pas (figure huit, folium).
* La dimension $m$ est **la même en tout point** (dans la définition, $m$ est fixé). La réunion d'une droite et d'un point extérieur n'est pas une sous-variété au sens de la définition, même si chaque morceau en est une.
* Une sous-variété n'est supposée ni **connexe** ni **fermée** ([[ch09-remarque-connexite]], [[ch09-remarque-fermeture]]) : un cercle privé d'un point, deux cercles disjoints sont des sous-variétés.
* Le paramétrage dépend du point : en général il n'existe **pas** de paramétrage global (cercle, sphère).
* Ne pas confondre **paramétrage** $x:U\to V\cap S$ (de $\R^m$ vers $S$) et **carte** $x^{-1}:V\cap S\to U$ (de $S$ vers $\R^m$).
* Définitions équivalentes, souvent plus pratiques : par redressement ([[ch09-redressement-local]]), par équations ([[ch09-sous-variete-equation-valeur-reguliere]]), par graphes ([[ch09-sous-variete-localement-graphe]]).
