---
id: ch09-diffeomorphisme-sous-varietes-def
type: definition
chapter: 9
title: $C^k$-difféomorphisme entre sous-variétés
ref: Définition IX.7.24
page: 165
importance: 2
depends: [ch09-application-cr-entre-sous-varietes-def]
tags: [sous-variete, diffeomorphisme, homeomorphisme, application-cr]
---
## Intuition

> 💡 Deux sous-variétés sont **difféomorphes** quand on peut passer de l'une à l'autre par une déformation lisse, sans déchirer ni recoller ni créer de pli, et revenir de façon tout aussi lisse. Un cercle et une ellipse sont difféomorphes (on étire) ; un cercle et une droite ne le sont pas (il faudrait couper le cercle).

C'est l'extension aux sous-variétés de la notion de $C^k$-difféomorphisme entre ouverts ([[ch06-diffeomorphisme-def]]). Les ingrédients : une **sous-variété** $S$ de $\R^N$ ([[ch09-sous-variete-def]]) est munie de la topologie induite par $\R^N$, ce qui donne un sens à « homéomorphisme » (bijection continue d'inverse continu) ; et la notion d'application **de classe $C^k$** entre sous-variétés se lit dans les paramétrages ([[ch09-application-cr-entre-sous-varietes-def]]).

## Énoncé

**Définition (poly, Définition IX.7.24, p. 165).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$) de classe au moins $C^k$ et soit
$$
\varphi:S_1\longrightarrow S_2
$$
une application de $S_1$ dans $S_2$. On dit que $\varphi$ est un **$C^k$-difféomorphisme** si c'est un homéomorphisme et si $\varphi$ et $\varphi^{-1}$ sont de classe $C^k$. On dit alors que $S_1$ et $S_2$ sont **$C^k$-difféomorphes**.

## Hypothèses

### H1 — $S_1$, $S_2$ de classe au moins $C^k$ ($k\ge1$)

Condition cachée : la Définition IX.7.5 (classe $C^k$ entre sous-variétés) n'est posée que pour des sous-variétés de classe au moins $C^k$ ; sans elle, « $\varphi$ de classe $C^k$ » n'a pas de sens dans le poly.

### H2 — « homéomorphisme »

Dans le cadre du poly, une application de classe $C^k$ est continue par définition (Définition IX.7.5). Donc si $\varphi$ est **bijective** et si $\varphi$ et $\varphi^{-1}$ sont $C^k$, $\varphi$ est automatiquement un homéomorphisme. La condition « homéomorphisme » sert surtout à rappeler que $\varphi^{-1}$ doit exister (bijectivité) et être continue avant même de parler de sa classe $C^k$.

### H3 — $\varphi^{-1}$ de classe $C^k$

C'est la condition **indispensable** : une bijection $C^k$ (même homéomorphisme) n'est pas forcément un difféomorphisme. Exemple : $\varphi:\R\to\R$, $t\mapsto t^3$ est $C^\infty$, bijective, homéomorphisme, mais $\varphi^{-1}(s)=s^{1/3}$ n'est pas dérivable en $0$ (taux d'accroissement $s^{-2/3}\to+\infty$). Le signe : $\varphi'(0)=0$, la différentielle n'est pas inversible ([[ch09-differentielle-diffeomorphisme-isomorphisme]]).

## Exemples

* **Paramétrages locaux.** Si $x:U\to S$ est un paramétrage local d'une sous-variété $S$ de classe $C^k$, alors $x:U\to x(U)$ est un $C^k$-difféomorphisme de l'ouvert $U\subset\R^m$ (sous-variété de $\R^m$) sur l'ouvert $x(U)$ de $S$ : c'est un homéomorphisme par définition ([[ch09-sous-variete-def]]), et $x$ et la carte $x^{-1}$ sont de classe $C^k$ ([[ch09-ex-parametrages-cartes-cr]]). **Toute sous-variété de dimension $m$ est donc localement difféomorphe à un ouvert de $\R^m$.**
* **Cercle et ellipse.** $E=\{(X,Y)\ :\ X^2/\alpha^2+Y^2/\beta^2=1\}$ ($\alpha,\beta>0$). $\varphi:\mathbb S^1\to E$, $(X,Y)\mapsto(\alpha X,\beta Y)$ est bijective d'inverse $(X,Y)\mapsto(X/\alpha,Y/\beta)$ ; les deux sont restrictions d'applications linéaires de $\R^2$, donc $C^\infty$ (la restriction à une sous-variété d'une application $C^\infty$ définie sur un ouvert de $\R^2$ est $C^\infty$ : Exercice IX.7.19 (4) du poly, joint au point 2 de [[ch09-remarques-applications-cr]] pour voir l'arrivée dans $E$ plutôt que dans $\R^2$). C'est un $C^\infty$-difféomorphisme.
* **Antipodie.** $a:\mathbb S^2\to\mathbb S^2$, $a(p)=-p$, est $C^\infty$ (restriction de $-\mathrm{Id}_{\R^3}$) et égale à son propre inverse : c'est un $C^\infty$-difféomorphisme de $\mathbb S^2$.
* **Arc de cercle.** $\varphi:\,]0,2\pi[\,\to\mathbb S^1\setminus\{(1,0)\}$, $t\mapsto(\cos t,\sin t)$ est un $C^\infty$-difféomorphisme (c'est un paramétrage, cf. premier exemple). En revanche $\R$ et $\mathbb S^1$ ne sont pas difféomorphes : $\mathbb S^1$ est compact, $\R$ non, donc ils ne sont même pas homéomorphes.
* **Non-exemple de dimension.** $\R$ et $\R^2$ ne sont pas difféomorphes : la différentielle d'un difféomorphisme est un isomorphisme $\R\to\R^2$, impossible ([[ch09-differentielle-diffeomorphisme-isomorphisme]]).

## Pièges

* > ⚠️ Bijection $C^k$ $\not\Rightarrow$ difféomorphisme ($t\mapsto t^3$). Il faut vérifier que $\varphi^{-1}$ est $C^k$ ; en pratique, on montre que $d\varphi_p$ est un isomorphisme en tout point et on conclut avec l'inversion locale ([[ch09-inversion-locale-sous-varietes]]) : **une bijection $C^k$ dont la différentielle est partout un isomorphisme est un $C^k$-difféomorphisme**, car $\varphi^{-1}$ coïncide au voisinage de chaque point de $S_2$ avec l'inverse local, qui est $C^k$ (être $C^k$ et continue sont des propriétés locales).
* Deux sous-variétés difféomorphes ont la **même dimension** $m$ mais peuvent vivre dans des espaces ambiants différents ($N_1\ne N_2$) : $\R$ et la droite $\R\times\{0\}\subset\R^2$ sont difféomorphes.
* La notion de difféomorphisme dépend de la classe $k$ : $t\mapsto t^3$ n'est pas un $C^1$-difféomorphisme de $\R$, bien que ce soit un homéomorphisme ($C^0$-« difféomorphisme »).
* Être difféomorphe est une notion **globale** ; être un difféomorphisme **local** (en chaque point, sur un voisinage) est plus faible : $t\mapsto(\cos t,\sin t)$, $\R\to\mathbb S^1$, est un difféomorphisme local en tout point mais pas un difféomorphisme (non injective).
