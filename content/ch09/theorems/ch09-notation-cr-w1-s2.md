---
id: ch09-notation-cr-w1-s2
type: definition
chapter: 9
title: Espace $C^r(W_1,S_2)$ des applications de classe $C^r$ d'un ouvert de $S_1$ dans $S_2$
ref: Notations IX.7.18
page: 164
importance: 1
depends: [ch09-application-cr-entre-sous-varietes-def, ch09-ex-ouvert-de-sous-variete]
tags: [sous-variete, notation, application-cr, ouvert-de-sous-variete]
---
## Intuition

> 💡 Simple **notation** : on range dans une même « boîte » $C^r(W_1,S_2)$ toutes les applications de classe $C^r$ qui partent d'un morceau ouvert $W_1$ d'une sous-variété $S_1$ et arrivent dans une sous-variété $S_2$. C'est l'analogue, pour les sous-variétés, de l'espace $C^r(U,\R^n)$ des applications de classe $C^r$ d'un ouvert $U$ de $\R^m$ dans $\R^n$.

Rappels. Une **sous-variété** de dimension $m$ de $\R^N$ est une partie localement paramétrée par des ouverts de $\R^m$ ([[ch09-sous-variete-def]]). Un **ouvert de $S_1$** est un ouvert pour la topologie induite : une partie de la forme $O\cap S_1$ avec $O$ ouvert de $\R^{N_1}$. Une application $\varphi:W_1\to S_2$ est **de classe $C^r$** si, lue dans des paramétrages, $x_2^{-1}\circ\varphi\circ x_1$ est $C^r$ ([[ch09-application-cr-entre-sous-varietes-def]]). Cette définition s'applique à $W_1$ parce qu'un ouvert d'une sous-variété est lui-même une sous-variété ([[ch09-ex-ouvert-de-sous-variete]]).

## Énoncé

**Notation (poly, Notations IX.7.18, p. 164).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$). On note $C^r(W_1,S_2)$ l'espace des applications de classe $C^r$ d'un ouvert $W_1$ de $S_1$ dans $S_2$.

Autrement dit, pour $W_1$ ouvert de $S_1$ :
$$
C^r(W_1,S_2)=\{\varphi:W_1\to S_2\ \text{continue}\ :\ \varphi \text{ est de classe } C^r \text{ au sens de la Définition IX.7.5}\}.
$$

## Hypothèses

### H1 — $W_1$ est un ouvert de $S_1$

**Rôle.** La Définition IX.7.5 ne parle que d'applications **entre sous-variétés**. Un ouvert $W_1$ de $S_1$ est une sous-variété de même dimension et de même classe ([[ch09-ex-ouvert-de-sous-variete]]) : les restrictions à $W_1$ des paramétrages de $S_1$ (restreints à $x_1^{-1}(W_1)$) en sont des paramétrages. La définition s'applique donc.

**Si on la retire.** Pour une partie non ouverte, la notion n'est plus définie : par exemple le demi-cercle fermé $A=\{(\cos t,\sin t)\ :\ t\in[0,\pi]\}$ n'est pas une sous-variété de $\R^2$ (au voisinage de $(1,0)$, il ressemble à la demi-droite fermée, cf. [[ch09-contre-ex-demi-droite]]), et « $\varphi:A\to S_2$ de classe $C^r$ » n'a pas de sens dans le cadre du poly.

### H2 — $S_1$ et $S_2$ de classe au moins $C^r$

**Rôle.** C'est l'hypothèse cachée de la Définition IX.7.5 (sous-variétés « supposées de classe au moins $C^r$, $r\ge 1$ »), qui rend la notion indépendante des paramétrages ([[ch09-changement-parametrage]]).

## Exemples

* **Fonctions réelles.** $C^r(W,\R)$, pour $W$ ouvert d'une sous-variété $S$, est l'ensemble des fonctions de classe $C^r$ sur $W$ au sens de [[ch09-fonction-differentiable-sur-sous-variete-def]]. C'est un $\R$-espace vectoriel et même une algèbre : si $f,g\in C^r(W,\R)$ et $x$ est un paramétrage, $(f+g)\circ x=f\circ x+g\circ x$ et $(fg)\circ x=(f\circ x)(g\circ x)$ sont $C^r$.
* **Inclusion et restrictions.** Si $S$ est une sous-variété de $\R^N$ de classe $C^\infty$, l'inclusion $i:S\to\R^N$ est dans $C^\infty(S,\R^N)$ : pour tout paramétrage $x$, $i\circ x=x$ est $C^\infty$. Plus généralement la restriction à un ouvert $W$ de $S$ d'une fonction $C^r$ sur un ouvert de $\R^N$ contenant $W$ est dans $C^r(W,\R)$ (Exercice IX.7.19 du poly) ; par exemple la fonction hauteur [[ch09-ex-fonction-hauteur]].
* **Applications du cercle dans lui-même.** Pour $n\in\Z$, l'application $\varphi_n:\mathbb S^1\to\mathbb S^1$, $(\cos t,\sin t)\mapsto(\cos nt,\sin nt)$ (c'est $z\mapsto z^n$), appartient à $C^\infty(\mathbb S^1,\mathbb S^1)$ : lue dans les paramétrages $x(t)=(\cos t,\sin t)$ restreints à des intervalles de longueur $<2\pi/\max(1,|n|)$, elle s'écrit $t\mapsto nt+c$ ($c$ localement constante, multiple de $2\pi$, qui peut changer d'une composante connexe du domaine $x_1^{-1}(\varphi_n^{-1}(x_2(U_2)))$ à l'autre). L'ensemble $\mathrm{Diff}^r(S)$ des $C^r$-difféomorphismes de $S$ ([[ch09-diffeomorphisme-sous-varietes-def]]) est la partie de $C^r(S,S)$ formée des bijections d'inverse $C^r$ (voir [[ch09-flot-morphisme-groupes-diffeos]]).

## Pièges

* > ⚠️ « Espace » ne veut pas dire « espace vectoriel » : si $S_2$ n'est pas un sous-espace vectoriel, on ne peut pas additionner deux éléments de $C^r(W_1,S_2)$. Par exemple les applications constantes égales à $(1,0)$ sont dans $C^\infty(\mathbb S^1,\mathbb S^1)$, mais leur somme vaut $(2,0)\notin\mathbb S^1$. C'est un espace vectoriel quand $S_2=\R^{N_2}$ (ou un sous-espace vectoriel de $\R^{N_2}$).
* $W_1$ est un ouvert **de $S_1$** (topologie induite), pas un ouvert de $\R^{N_1}$ : la sphère $\mathbb S^2$ est un ouvert d'elle-même mais n'est pas un ouvert de $\R^3$.
* Les éléments de $C^r(W_1,S_2)$ sont en particulier **continus** (hypothèse préalable de la Définition IX.7.5).
