---
id: ch09-ex-ouvert-de-sous-variete
type: proposition
chapter: 9
title: Un ouvert d'une sous-variété est une sous-variété
ref: Exemple IX.2.6
page: 149
importance: 2
depends: [ch09-sous-variete-def]
tags: [sous-variete, ouvert, topologie-induite, restriction, parametrage-local]
---
## Intuition

> 💡 Être une sous-variété est une propriété **locale** : on la teste point par point, sur un petit morceau $V\cap S$ autour de chaque point. Si on ne garde qu'une partie **ouverte** $W$ de $S$, chaque point de $W$ garde autour de lui un petit morceau de $S$ entièrement contenu dans $W$ ; il suffit de restreindre le paramétrage à ce morceau. Exemples : le cercle privé d'un point, la sphère privée du pôle nord, un hémisphère ouvert.

**Ouvert de $S$** signifie ouvert pour la **topologie induite** par $\R^N$ : $W\subset S$ est ouvert dans $S$ s'il existe un ouvert $O$ de $\R^N$ tel que $W=O\cap S$. Un **paramétrage local** de $S$ en $p$ est une application $x:U\to V$ de classe $C^k$, immersive, homéomorphisme de $U$ sur $V\cap S$ ([[ch09-sous-variete-def]]).

## Énoncé

**Proposition (poly, Exemple IX.2.6, p. 149).** Un ouvert d'une sous-variété $S$ de $\R^N$ est une sous-variété de $\R^N$ (de même classe de régularité et de même dimension).

Précisément : si $S$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\R^N$ et si $W\subset S$ est ouvert dans $S$, alors $W$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\R^N$ ; plus précisément, si $W=O\cap S$ avec $O$ ouvert de $\R^N$, en chaque $p\in W$ la restriction d'un paramétrage local $x:U\to V$ de $S$ en $p$ à l'ouvert $x^{-1}(O)$ est un paramétrage local de $W$ en $p$.

## Hypothèses

### H1 — $W$ ouvert **dans $S$** (topologie induite)

**Rôle.** C'est ce qui donne, autour de chaque $p\in W$, un ouvert $O$ de $\R^N$ avec $O\cap S=W$ : le morceau $V\cap O\cap S$ de $S$ près de $p$ est entièrement dans $W$, et la restriction du paramétrage reste **surjective** sur le morceau correspondant de $W$.

**Si on la retire.** Une partie quelconque d'une sous-variété n'est pas une sous-variété : $S=\R$ (sous-variété de dimension $1$ de $\R$) et $W=[0,+\infty[$, fermé non ouvert dans $S$, n'est pas une sous-variété ([[ch09-contre-ex-demi-droite]]). De même, un segment fermé d'un cercle, ou le cercle unité vu comme partie du plan $\R^2$ (sous-variété de dimension $2$) : le cercle est bien une sous-variété, mais de dimension $1$, pas $2$ ; la conclusion « même dimension » échoue.

### H2 — $S$ sous-variété

**Rôle.** On a besoin d'un paramétrage local de $S$ en chaque point de $W$, à restreindre.

**Si on la retire.** Un ouvert d'un ensemble qui n'est pas une sous-variété peut ne pas en être une : dans la croix $\{xy=0\}$, la boule $B(0,1)\cap\{xy=0\}$ est ouverte et n'est pas une sous-variété ([[ch09-contre-ex-croix]]).

## Idée de la preuve

Écrire $W=O\cap S$ avec $O$ ouvert de $\R^N$, puis restreindre un paramétrage $x:U\to V$ de $S$ en $p$ à l'ouvert $U'=x^{-1}(O)$, à valeurs dans $V'=V\cap O$. Les trois conditions de la définition passent à la restriction.

## Preuve

*Le poly ne donne pas de preuve ; voici la vérification complète des trois conditions de [[ch09-sous-variete-def]].*

Comme $W$ est ouvert dans $S$, il existe un ouvert $O$ de $\R^N$ tel que $W=O\cap S$. Soit $p\in W$. Puisque $p\in S$, il existe un ouvert $U$ de $\R^m$, un voisinage ouvert $V$ de $p$ dans $\R^N$ et un paramétrage local $x:U\to V$ de $S$ en $p$ (conditions 1 à 3). Posons
$$
V'=V\cap O,\qquad U'=x^{-1}(O)=\{q\in U : x(q)\in O\},\qquad x'=x|_{U'} : U'\to V'.
$$
* $V'$ est un ouvert de $\R^N$ contenant $p$ (intersection de deux ouverts contenant $p$).
* $U'$ est ouvert dans $U$ (image réciproque de l'ouvert $O$ par l'application continue $x$), donc ouvert dans $\R^m$ puisque $U$ l'est ; il contient $x^{-1}(p)$.
* $x'$ est bien à valeurs dans $V'$ : pour $q\in U'$, $x(q)\in V\cap O$.

**Condition 1.** $x'$ est la restriction de l'application $C^k$ $x$ à l'ouvert $U'$ : elle est $C^k$, et $dx'_q=dx_q$ pour $q\in U'$.

**Condition 2.** On a $x'(U')=x(U)\cap O=(V\cap S)\cap O=V'\cap W$ (en utilisant $x(U)=V\cap S$ et $W=O\cap S$). Donc $x'$ est une bijection de $U'$ sur $V'\cap W$ ; c'est la restriction de l'homéomorphisme $x:U\to V\cap S$ à la partie $U'$, donc un homéomorphisme de $U'$ sur son image $x(U')=V'\cap W$ (son inverse est la restriction de $x^{-1}$, continue). La topologie de $V'\cap W$ induite par celle de $S$ est la même que celle induite par $\R^N$.

**Condition 3.** Pour $q\in U'$, $dx'_q=dx_q$ est injective.

Ainsi $x'$ est un paramétrage local de $W$ en $p$, de classe $C^k$ et défini sur un ouvert de $\R^m$. Ceci valant pour tout $p\in W$, $W$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\R^N$. $\square$

## Preuve à trous

Comme $W$ est ouvert dans $S$, on écrit <trou indice="définition de la topologie induite">$W=O\cap S$ avec $O$ ouvert de $\R^N$</trou>. Soit $p\in W$ et $x:U\to V$ un paramétrage local de $S$ en $p$.

On pose $V'=V\cap O$ et <trou indice="quels paramètres q envoie-t-on dans O ?">$U'=x^{-1}(O)$, ouvert de $\R^m$ par continuité de $x$</trou>, et $x'=x|_{U'}:U'\to V'$.

La restriction est $C^k$ et immersive ($dx'_q=dx_q$). Pour la condition 2, <trou indice="utiliser x(U)=V∩S">$x'(U')=x(U)\cap O=V\cap S\cap O=V'\cap W$</trou>, et la restriction d'un homéomorphisme à une partie est un homéomorphisme sur son image. Donc $x'$ est un paramétrage local de $W$ en $p$. $\square$

## Exemples

* **Cercle privé d'un point.** $S=\{u^2+v^2=1\}$, $W=S\setminus\{(-1,0)\}=O\cap S$ avec $O=\R^2\setminus\{(-1,0)\}$ : $W$ est une sous-variété de dimension $1$, et même paramétrée globalement par $\theta\in\,]-\pi,\pi[\mapsto(\cos\theta,\sin\theta)$.
* **Hémisphère nord.** $W=\mathbb S^2\cap\{z>0\}$, ouvert de la sphère $\mathbb S^2$ ([[ch09-ex-sphere]]) : sous-variété de dimension $2$ de $\R^3$, paramétrée globalement par $(u,v)\mapsto(u,v,\sqrt{1-u^2-v^2})$ sur $D(0,1)$. Noter que $W$ n'est **pas** un ouvert de $\R^3$.
* **Ouvert de $\R^N$.** Avec $S=\R^N$ (sous-variété de dimension $N$, paramétrée par l'identité), on retrouve qu'un ouvert de $\R^N$ est une sous-variété de dimension $N$ ([[ch09-ex-ouvert-sous-variete]]) ; par exemple $\mathrm{GL}_n(\R)=\{\det\neq0\}$ est une sous-variété ouverte de $\Mat_n(\R)\simeq\R^{n^2}$.

## Pièges

* > ⚠️ « Ouvert de $S$ » $\neq$ « ouvert de $\R^N$ ». L'hémisphère $\mathbb S^2\cap\{z>0\}$ est ouvert dans $\mathbb S^2$ mais d'intérieur vide dans $\R^3$. C'est toujours la **topologie induite** qu'il faut utiliser sur $S$.
* Ne pas confondre avec l'Exemple IX.2.3 ([[ch09-ex-ouvert-sous-variete]]) : un ouvert **de $\R^N$** est une sous-variété de dimension $N$ ; ici un ouvert **d'une sous-variété** de dimension $m$ est une sous-variété de dimension $m$.
* Un **fermé** d'une sous-variété n'est pas en général une sous-variété (demi-droite fermée, arc fermé de cercle avec ses extrémités).
* En pratique, ce résultat sert à réduire un domaine : « quitte à remplacer $S$ par $S\cap O$ », on peut supposer qu'un paramétrage local est global (c'est utilisé dans la preuve de [[ch09-sous-variete-localement-graphe]]).
