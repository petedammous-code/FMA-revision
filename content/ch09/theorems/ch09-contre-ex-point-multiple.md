---
id: ch09-contre-ex-point-multiple
type: proposition
chapter: 9
title: Contre-exemple : immersion avec point multiple
ref: Exemple IX.2.14
page: 150
importance: 2
depends: [ch09-sous-variete-def, ch09-immersion-submersion-def]
tags: [sous-variete, contre-exemple, immersion, point-double, injectivite]
---
## Intuition

> 💡 Une **immersion** (application de différentielle injective, [[ch09-immersion-submersion-def]]) est une courbe qui avance toujours avec une vitesse non nulle : pas de pointe, pas d'arrêt. Mais rien ne l'empêche de **repasser** par un point déjà visité. En ce point double, l'image ressemble localement à une croix : deux branches qui se coupent, donc quatre demi-branches. Ce n'est pas un morceau de droite déformé.

Moralité : la condition 3 de la définition des sous-variétés ([[ch09-sous-variete-def]]) — être une immersion — ne remplace pas la condition 2 — être un **homéomorphisme** (bijection continue d'inverse continu) sur un voisinage du point dans $S$.

## Énoncé

**Proposition (poly, Exemple IX.2.14, p. 150).** Le paramétrage
$$
x : \R\to\R^2,\qquad t\mapsto(t^3-4t,\ t^2-4)
$$
est une immersion en tout point, mais l'image $S=x(\R)$ n'est pas une sous-variété de $\R^2$, à cause du point multiple $(0,0)=x(2)=x(-2)$.

*Précisions (non écrites dans le poly, démontrées ci-dessous) :* $x$ est injective sur $\R\setminus\{-2,2\}$ et $(0,0)$ est le seul point double ; $S$ est la cubique $\{(u,v)\in\R^2,\ u^2=v^2(v+4)\}$.

## Hypothèses

### H1 — l'immersion n'est pas injective ($x(2)=x(-2)$)

**Rôle.** C'est la seule source du défaut : partout ailleurs, l'image est localement une sous-variété.

**Si on la retire.** Rendre $x$ injective en restreignant l'intervalle ne suffit pas toujours. Sur $]-2;+\infty[$, $x$ est injective, mais $x(t)\to(0,0)=x(2)$ quand $t\to-2^+$ : la branche vient s'accumuler sur le point $x(2)$, comme dans le folium de Descartes ([[ch09-contre-ex-folium]]) ; $x^{-1}$ n'est pas continue en $(0,0)$, et l'image n'est pas une sous-variété (même preuve que ci-dessous : près de $(0,0)$, l'image privée de $(0,0)$ rencontre les trois quadrants ouverts $Q_1$, $Q_3$, $Q_4$, d'où au moins $3$ composantes connexes, contre au plus $2$).

En revanche, sur $I=\,]-2;2[$ (la boucle privée de $(0,0)$) ou sur $I=\,]2;+\infty[$, l'image $x(I)$ est une sous-variété de dimension $1$, avec le seul paramétrage $x : I\to\R^2\cap x(I)$ (on prend $V=\R^2$). En effet, $x$ est une immersion injective sur $I$, et $x^{-1}$ est continue : si $x(t_n)\to x(t)$ avec $t_n,t\in I$, la suite $(t_n)$ est bornée (car $\norm{x(t_n)}\ge|t_n^2-4|$) ; si $s$ est une valeur d'adhérence, $s\in\bar I$ et $x(s)=x(t)\neq(0,0)$, donc $s\neq\pm2$, donc $s\in I$ et $s=t$ par injectivité ; ainsi $t_n\to t$.

### H2 — $x'(t)\neq0$ partout (immersion)

**Rôle.** Elle garantit qu'il n'y a pas de pointe : le seul défaut est le croisement.

**Si on la retire.** On obtient un autre type de défaut, le point de rebroussement : $t\mapsto(t^2,t^3)$, avec $x'(0)=0$ (poly, Exercice IX.2.13).

## Idée de la preuve

On vérifie $x'(t)\neq0$, puis on localise : près de $(0,0)$, les points de $S$ viennent seulement de $t$ proche de $\pm2$, et les quatre demi-branches tombent dans les **quatre quadrants ouverts**. Un voisinage de $(0,0)$ dans $S$ privé de $(0,0)$ a donc au moins $4$ composantes connexes, contre au plus $2$ pour une boule privée d'un point.

## Preuve

*Immersion.* $x$ est polynomiale donc $C^\infty$, et $x'(t)=(3t^2-4,\ 2t)$. La seconde composante ne s'annule qu'en $t=0$, où la première vaut $-4$ ; donc $x'(t)\neq0$ pour tout $t$, c'est-à-dire $dx_t : h\mapsto h\,x'(t)$ est injective : $x$ est une immersion.

*Points multiples.* Si $x(t)=x(s)$, alors $t^2-4=s^2-4$, donc $s=\pm t$. Si $s=-t\neq t$, l'égalité des premières composantes donne $t^3-4t=-t^3+4t$, soit $2t(t^2-4)=0$, d'où $t=\pm2$ (car $t\neq0$). Ainsi $x(t)=x(s)$ avec $s\neq t$ si et seulement si $\{s,t\}=\{-2,2\}$, et $x(\pm2)=(\pm8\mp8,0)=(0,0)$.

*Image.* En posant $v=t^2-4$, on a $u=t^3-4t=tv$, donc $u^2=t^2v^2=(v+4)v^2$. Réciproquement, si $u^2=v^2(v+4)$ : si $v\neq0$, $t=u/v$ vérifie $t^2=v+4$ et $x(t)=(tv,v)=(u,v)$ ; si $v=0$, alors $u=0$ et $(0,0)=x(2)$. Donc $S=\{u^2=v^2(v+4)\}$.

*Localisation près de $(0,0)$.* Fixons $\delta\in\,]0;1[$ et $K=\R\setminus(]-2-\delta;-2+\delta[\,\cup\,]2-\delta;2+\delta[)$. Sur $K$, $x$ ne s'annule pas, et $\norm{x(t)}\ge|t^2-4|\to+\infty$ quand $|t|\to\infty$ ; donc $\eta=\inf_K\norm{x}>0$ (la borne inférieure est atteinte sur le compact $K\cap[-R;R]$ pour $R$ assez grand). Ainsi tout point de $S\cap D((0,0),\eta)$ est de la forme $x(t)$ avec $t$ à distance $<\delta$ de $2$ ou de $-2$.

*Signes.* Comme $u=tv$ avec $v=t^2-4$ :
* $t\in\,]2;2+\delta[$ : $v>0$, $t>0$, donc $u>0$, $v>0$ ;
* $t\in\,]2-\delta;2[$ : $v<0$, $t>0$, donc $u<0$, $v<0$ ;
* $t\in\,]-2;-2+\delta[$ : $v<0$, $t<0$, donc $u>0$, $v<0$ ;
* $t\in\,]-2-\delta;-2[$ : $v>0$, $t<0$, donc $u<0$, $v>0$.

Notons $Q_1,Q_2,Q_3,Q_4$ les quatre quadrants **ouverts** du plan. On vient de voir que $S\cap D((0,0),\eta)\setminus\{(0,0)\}$ est contenu dans $Q_1\cup Q_2\cup Q_3\cup Q_4$ et rencontre chacun des $Q_i$, et ce dans **tout** disque centré en $(0,0)$ (prendre $t$ assez proche de $\pm2$, du bon côté).

*Conclusion.* Supposons que $S$ soit une sous-variété de dimension $m$ ; soit $y : U\to V\cap S$ un paramétrage local en $(0,0)$ ([[ch09-sous-variete-def]]), $s_0=y^{-1}(0,0)$. Le cas $m=0$ est exclu car $(0,0)$ n'est pas isolé dans $S$ ($x(2+1/n)\to(0,0)$). Pour $m\ge1$, par continuité de $y$, il existe une boule $B=B(s_0,r)\subset U$ telle que $y(B)\subset D((0,0),\eta)$ ; $y(B)$ est ouvert dans $S$ ($y$ homéomorphisme), donc contient $S\cap D((0,0),\eps)$ pour un $\eps>0$. Alors $y(B)\setminus\{(0,0)\}$ est contenu dans la réunion des quatre ouverts disjoints $Q_i$ et les rencontre tous : il a **au moins $4$** composantes connexes (une partie connexe est contenue dans un seul $Q_i$). Mais il est homéomorphe (par $y$) à $B\setminus\{s_0\}$, qui en a $2$ si $m=1$ et $1$ si $m\ge2$. Contradiction : $S$ n'est pas une sous-variété. $\square$

## Preuve à trous

*Immersion :* $x'(t)=(3t^2-4,2t)$ <trou>ne s'annule jamais : la seconde composante n'est nulle qu'en $t=0$, où la première vaut $-4$</trou>.

*Point double :* $x(t)=x(s)$ impose $s=\pm t$, et si $s=-t\ne t$, <trou>$2t(t^2-4)=0$, donc $t=\pm2$ ; $x(\pm2)=(0,0)$</trou>.

*Localisation :* hors de $]-2-\delta;-2+\delta[\cup]2-\delta;2+\delta[$, $\norm{x}$ est minoré par un $\eta>0$ <trou indice="x ne s'annule pas et tend vers l'infini">par compacité, car $x$ ne s'annule pas hors de $\pm2$ et $\norm{x(t)}\ge|t^2-4|\to\infty$</trou>. Près de $(0,0)$, $S$ privé de $(0,0)$ est donc fait des quatre demi-branches $t\to2^\pm$, $t\to-2^\pm$, qui tombent <trou indice="signes de $u=tv$, $v=t^2-4$">chacune dans un quadrant ouvert différent</trou>.

*Conclusion :* pour un paramétrage $y$ en $(0,0)$ et une petite boule $B$, $y(B)\setminus\{0\}$ a <trou>au moins $4$ composantes connexes, alors que $B\setminus\{y^{-1}(0)\}$ en a au plus $2$</trou> : contradiction. $\square$

## Exemples

* **Tangentes au point double.** $x'(2)=(8,4)$ et $x'(-2)=(8,-4)$ : les deux branches se croisent en $(0,0)$ avec les pentes $\frac12$ et $-\frac12$ (croisement transverse, comme la croix [[ch09-contre-ex-croix]] après un changement linéaire de coordonnées).
* **Lecture par une équation.** $S=f^{-1}(\{0\})$ avec $f(u,v)=u^2-v^3-4v^2$ ; $df_{(u,v)}=(2u,\,-3v^2-8v)$ s'annule en $(0,0)$ : $0$ est une valeur critique de $f$, et l'on ne peut pas appliquer [[ch09-sous-variete-equation-valeur-reguliere]]. Les autres points de $S$ sont réguliers : $2u=0$ et $v(3v+8)=0$ sur $S$ donnent $(0,0)$ ou $(0,-8/3)$, et $(0,-8/3)\notin S$ car $0\neq\frac{64}{9}\cdot\frac43$. Donc $S\setminus\{(0,0)\}$ est une sous-variété de dimension $1$.
* **Le « huit »** $t\mapsto(\sin2t,\sin t)$ sur $\R$ : immersion $2\pi$-périodique ($x'(t)=(2\cos2t,\cos t)$ ne s'annule pas car $\cos t=0\Rightarrow\cos2t=-1$), point double en $(0,0)$ ($t=0$ et $t=\pi$) ; même conclusion (voir l'hypothèse H2 de [[ch09-sous-variete-def]]).

## Pièges

* > ⚠️ Immersion $\not\Rightarrow$ image sous-variété. Il faut en plus un **homéomorphisme sur l'image** (et en particulier l'injectivité) : condition 2 de [[ch09-sous-variete-def]].
* Inversement, une immersion injective ne suffit pas non plus : voir [[ch09-contre-ex-folium]].
* Localement, une immersion est un homéomorphisme sur son image ([[ch09-immersion-locale-homeo]]) : chaque **petit morceau** $x(]t_0-\delta;t_0+\delta[)$ est une sous-variété. Le défaut est **global** (deux morceaux lointains en $t$ se rencontrent).
* Pour prouver que ce n'est pas une sous-variété, il ne suffit pas de dire « $x$ n'est pas injective » : une autre paramétrisation pourrait convenir ; il faut un argument intrinsèque à l'ensemble $S$ (ici, le comptage des composantes connexes).
