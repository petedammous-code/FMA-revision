---
id: ch09-contre-ex-demi-droite
type: proposition
chapter: 9
title: Contre-exemple : la demi-droite fermée $[0;+\infty[$
ref: Exemple IX.2.11
page: 150
importance: 2
depends: [ch09-sous-variete-def]
tags: [sous-variete, contre-exemple, bord, connexite, homeomorphisme]
---
## Intuition

> 💡 Une sous-variété de dimension $m$ doit ressembler, près de **chacun** de ses points, à un **ouvert** de $\R^m$ ([[ch09-sous-variete-def]]). La demi-droite $[0;+\infty[$ ressemble bien à une droite près de tout point $t>0$, mais en $0$ elle **s'arrête** : il y a un bord. Un ouvert de $\R^m$ n'a pas de bord.

Pour le démontrer sans dessin, on utilise un invariant topologique simple : le **nombre de composantes connexes** (morceaux d'un seul tenant) obtenues en retirant un point. Un homéomorphisme (bijection continue d'inverse continu) le conserve. Retirer l'extrémité $0$ de $[0;a[$ laisse **un** morceau ; retirer un point d'un intervalle ouvert en laisse **deux** ; retirer un point d'une boule de $\R^m$, $m\ge2$, en laisse **un**, alors que retirer un point intérieur de $[0;a[$ en laisse deux.

## Énoncé

**Proposition (poly, Exemple IX.2.11, p. 150).** La partie $S=[0;+\infty[$ de $\R$ n'est une sous-variété de $\R$ d'aucune dimension $m$ ni d'aucune classe $C^k$. Plus précisément : tout voisinage ouvert connexe de $0$ dans $S$ est de la forme $[0;a[$, $a>0$, et $[0;a[$ n'est jamais homéomorphe à un ouvert connexe de $\R^m$ :
* c'est évident si $m=0$ ;
* pour $m=1$, $[0;a[\setminus\{0\}$ est connexe, alors qu'un intervalle ouvert privé d'un de ses points a deux composantes connexes ;
* pour $m\ge2$, $[0;a[\setminus\{b\}$ a deux composantes connexes pour tout $b\in\,]0;a[$, alors qu'un ouvert connexe de $\R^m$ privé d'un de ses points reste connexe.

Ici « voisinage ouvert de $0$ dans $S$ » s'entend pour la topologie induite : c'est une partie de la forme $O\cap S$ avec $O$ ouvert de $\R$, contenant $0$.

## Hypothèses

### H1 — le point $0$ appartient à $S$

**Rôle.** C'est en $0$, et seulement en $0$, que la définition échoue : c'est le seul point de $S$ dont aucun voisinage dans $S$ n'est un intervalle ouvert.

**Si on la retire.** $S'=\,]0;+\infty[$ est un ouvert de $\R$, donc une sous-variété de dimension $1$ de classe $C^\infty$ de $\R$ ([[ch09-ex-ouvert-sous-variete]] : paramétrage local = l'inclusion). Être une sous-variété n'a donc rien à voir avec être fermé (voir [[ch09-remarque-fermeture]]).

### H2 — l'ouvert de paramètres $U$ est un ouvert de $\R^m$ (définition IX.2.1)

**Rôle.** C'est cette exigence que $[0;a[$ ne peut pas satisfaire : le morceau de $S$ près de $0$ devrait être homéomorphe à un **ouvert** de $\R^m$.

**Si on la retire.** Si l'on autorisait $U=[0;+\infty[$, alors $x=\mathrm{id} : U\to S$ serait un « paramétrage » : on obtiendrait la notion (hors programme) de **sous-variété à bord**, dont $[0;+\infty[$ et le disque fermé $\bar D(0,1)$ sont des exemples.

## Idée de la preuve

On suppose un paramétrage local $x$ en $0$ ; on restreint $x$ à une petite boule $B$ autour de $q=x^{-1}(0)$, dont l'image est un intervalle $[0;a'[$. On compare alors les composantes connexes de $B$ et de $[0;a'[$ privés d'un point bien choisi.

## Preuve

Supposons par l'absurde que $S$ soit une sous-variété de dimension $m$ de $\R$ et appliquons la définition ([[ch09-sous-variete-def]]) au point $p=0$ : il existe un ouvert $U$ de $\R^m$, un ouvert $V\ni 0$ de $\R$ et un homéomorphisme $x : U\to V\cap S$. Posons $q=x^{-1}(0)$.

*Étape 1 : un voisinage connexe de $0$ de la forme $[0;a'[$.* Soit $r>0$ tel que la boule $B=B(q,r)$ soit contenue dans $U$. Comme $B$ est connexe et $x$ continue, $x(B)$ est une partie connexe de $\R$, c'est-à-dire un intervalle, contenu dans $[0;+\infty[$ et contenant $0$. Comme $x$ est un homéomorphisme, $x(B)$ est ouvert dans $V\cap S$, donc dans $S$ (car $V\cap S$ est ouvert dans $S$) : il existe $\eps>0$ tel que $[0;\eps[\,\subset x(B)$. Un intervalle contenu dans $[0;+\infty[$, contenant $0$ et ouvert dans $S$ est de la forme $[0;a'[$ avec $0<a'\le+\infty$ (il ne peut pas contenir sa borne supérieure finie $a'$, sinon il ne serait voisinage de $a'$ dans $S$). Ainsi $x$ restreinte à $B$ est un homéomorphisme de $B$ sur $[0;a'[$.

*Étape 2 : comptage des composantes connexes.* Un homéomorphisme $h : A\to A'$ induit, pour tout $c\in A$, un homéomorphisme de $A\setminus\{c\}$ sur $A'\setminus\{h(c)\}$, donc ces deux espaces ont le même nombre de composantes connexes.
* Si $m=0$ : $\R^0=\{0\}$, donc $B$ est un point, alors que $[0;a'[$ est infini ; pas de bijection.
* Si $m=1$ : $B=\,]q-r;q+r[$ et $B\setminus\{q\}=\,]q-r;q[\,\cup\,]q;q+r[$ a deux composantes connexes, alors que $[0;a'[\setminus\{x(q)\}=\,]0;a'[$ est connexe. Contradiction.
* Si $m\ge2$ : choisissons $b\in\,]0;a'[$ et $c=x^{-1}(b)\in B$. L'ensemble $[0;a'[\setminus\{b\}=[0;b[\,\cup\,]b;a'[$ a deux composantes connexes, alors que $B\setminus\{c\}$ est connexe par arcs (deux points de $B\setminus\{c\}$ se joignent par le segment qui les relie, ou, si ce segment passe par $c$, par deux segments via un point de $B$ hors de la droite qui les contient, ce qui est possible car $m\ge2$). Contradiction.

Dans tous les cas on aboutit à une contradiction : $S$ n'est pas une sous-variété. $\square$

*Variante (plus rapide, différentielle) :* comme $N=1$, la condition 3 impose $m\le1$ ; et $m=0$ est exclu car $0$ n'est pas isolé dans $S$. Si $m=1$, $x : U\to[0;+\infty[$ est dérivable et atteint en $q$, point **intérieur** de l'ouvert $U\subset\R$, son minimum $x(q)=0$ ; donc $x'(q)=0$, et $dx_q$ n'est pas injective : la condition 3 est violée.

## Preuve à trous

Supposons qu'il existe un paramétrage local $x : U\to V\cap S$ en $0$, avec $U$ ouvert de $\R^m$, et posons $q=x^{-1}(0)$. Pour une boule $B=B(q,r)\subset U$, l'image $x(B)$ est <trou indice="image continue d'un connexe, et image d'un ouvert par un homéomorphisme">un intervalle de $\R$ (connexe) ouvert dans $S$, contenu dans $[0;+\infty[$ et contenant $0$, donc de la forme $[0;a'[$</trou>, et $x : B\to[0;a'[$ est un homéomorphisme. Or un homéomorphisme conserve <trou>le nombre de composantes connexes du complémentaire d'un point (il induit un homéomorphisme $A\setminus\{c\}\to A'\setminus\{h(c)\}$)</trou>. Si $m=1$, on retire $q$ : $B\setminus\{q\}$ a <trou>deux composantes connexes alors que $[0;a'[\setminus\{0\}=\,]0;a'[$ est connexe</trou>. Si $m\ge2$, on retire $b\in\,]0;a'[$ : <trou indice="quel point retirer côté demi-droite ?">$[0;a'[\setminus\{b\}$ a deux composantes connexes alors que $B\setminus\{x^{-1}(b)\}$ est connexe</trou>. Si $m=0$, $B$ est un point. Contradiction dans tous les cas. $\square$

## Exemples

* **L'intervalle $[0;1]$, le segment $[a,b]$ du plan** (pour $a\ne b$) : même argument aux extrémités ; ce ne sont pas des sous-variétés. En revanche $]0;1[$ et le segment ouvert $]a,b[$ en sont (ouverts d'une droite, [[ch09-ex-ouvert-de-sous-variete]]).
* **Le disque fermé $S=\bar D(0,1)\subset\R^2$** n'est pas une sous-variété de $\R^2$. Si elle l'était, de dimension $m$ : en un point intérieur $p$, toutes les courbes $t\mapsto p+tv$ ($v\in\R^2$, $t$ petit) restent dans $S$, donc l'espace tangent $T_pS$ est $\R^2$ tout entier ; comme $\dim T_pS=m$ ([[ch09-espace-tangent-image-dx]]), $m=2$. Mais alors, en $p_1=(1,0)$, un paramétrage local $x : U\to V\cap S$ a une différentielle $dx_q$ injective de $\R^2$ dans $\R^2$, donc inversible : par [[ch06-inversion-locale]], $x$ envoie un voisinage de $q$ sur un **ouvert** de $\R^2$ contenant $p_1$ et contenu dans $S$. C'est faux, car $(1+\eps,0)\notin S$ pour tout $\eps>0$. Le cercle $C(0,1)$, lui, est une sous-variété ([[ch09-ex-sphere]]).
* **La demi-droite dans le plan** $[0;+\infty[\times\{0\}\subset\R^2$ : même preuve au point $(0,0)$, mot pour mot.

## Pièges

* > ⚠️ « fermé » n'est pas le problème : $\R$ est fermé et est une sous-variété ; $]0;+\infty[$ n'est pas fermé et en est une. Le problème est le **bord**.
* Ne pas oublier les **voisinages pris dans $S$** (topologie induite) : $[0;\eps[$ est un ouvert de $S$ sans être un ouvert de $\R$.
* L'argument topologique (composantes connexes) traite **toutes** les dimensions $m$ d'un coup ; l'argument différentiel (minimum en un point intérieur) est plus court mais utilise la condition 3 et $N=1$.
* Une boule de $\R^1$ privée d'un point a **deux** composantes, une boule de $\R^m$ ($m\ge2$) privée d'un point est **connexe** : ne pas confondre les deux cas.
