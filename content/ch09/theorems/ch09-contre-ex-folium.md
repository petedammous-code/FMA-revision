---
id: ch09-contre-ex-folium
type: proposition
chapter: 9
title: Contre-exemple : immersion injective dont l'image n'est pas une sous-variété (folium de Descartes)
ref: Exemple IX.2.15
page: 150
importance: 2
depends: [ch09-sous-variete-def, ch09-immersion-submersion-def]
tags: [sous-variete, contre-exemple, immersion, injectivite, homeomorphisme, folium]
---
## Intuition

> 💡 Imaginez une route qui ne se croise jamais (paramétrage **injectif**) et sur laquelle on roule toujours à vitesse non nulle (**immersion** : $x'(t)\neq0$, [[ch09-immersion-submersion-def]]). Pourtant, quand $t\to+\infty$, la route revient « se coller » au point de départ $x(0)$ sans jamais l'atteindre. Vu de près, autour de ce point, on voit **trois** demi-branches qui y aboutissent : ce n'est pas un morceau de courbe lisse.

Le défaut n'est ni une pointe ni un croisement : c'est que l'inverse $x^{-1}$ n'est pas continu. Deux points très proches dans le plan ($x(0)$ et $x(t)$ pour $t$ grand) correspondent à des paramètres très éloignés. C'est exactement ce que la condition 2 de la définition des sous-variétés ([[ch09-sous-variete-def]]) — $x$ est un **homéomorphisme** (bijection continue d'inverse continu) sur $V\cap S$ — interdit.

## Énoncé

**Proposition (poly, Exemple IX.2.15, p. 150).** Le paramétrage
$$
x : t\in\,]-1;+\infty[\ \longmapsto\ \left(\frac{3t}{1+t^3},\ \frac{3t^2}{1+t^3}\right)\in\R^2
$$
est une immersion en tout point, et de plus injectif. Néanmoins, l'image $S=x(]-1;+\infty[)$ n'est pas une sous-variété de $\R^2$, à cause du point $(0,0)$ qui n'admet pas de paramétrage local satisfaisant la condition 2 de la définition.

*Précision (démontrée ci-dessous) :* $x(t)\to(0,0)=x(0)$ quand $t\to+\infty$, donc $x$ n'est pas un homéomorphisme de $]-1;+\infty[$ sur son image ; et **aucun** autre paramétrage ne convient en $(0,0)$.

## Hypothèses

### H1 — $x$ est une immersion

**Rôle.** Elle exclut les points de rebroussement : partout où $x^{-1}$ est continu, l'image est localement une vraie courbe lisse (voir [[ch09-immersion-locale-homeo]]). Le contre-exemple montre que cela ne suffit pas.

**Si on la retire.** On tombe sur un autre type de défaut, la pointe : $t\mapsto(t^2,t^3)$ est injective mais $x'(0)=0$, et son image (la parabole semi-cubique) n'est pas une sous-variété (poly, Exercice IX.2.13, p. 150).

### H2 — $x$ est injective

**Rôle.** Elle exclut les points doubles. Le folium montre qu'immersion **et** injectivité ne remplacent toujours pas la condition 2 de [[ch09-sous-variete-def]].

**Si on la retire.** On obtient un point multiple, autre défaut : $t\mapsto(t^3-4t,t^2-4)$, voir [[ch09-contre-ex-point-multiple]].

### H3 — le domaine $]-1;+\infty[$ n'est pas borné à droite

**Rôle.** C'est ce qui permet à la branche $t\to+\infty$ de revenir s'accumuler sur $x(0)$ : c'est la vraie cause du défaut.

**Si on la retire.** Pour $T>0$, la restriction de $x$ à $]-1;T[$ est un homéomorphisme sur son image, et $x(]-1;T[)$ **est** une sous-variété de dimension $1$ (voir l'exemple 2 ci-dessous).

## Idée de la preuve

On calcule $x'$ (jamais nul) et on inverse $x$ par $t=v/u$. Près de $(0,0)$, l'image est formée de trois demi-branches ($t\to0^-$, $t\to0^+$, $t\to+\infty$), que la fonction continue $v/u$ sépare. Un voisinage de $(0,0)$ dans $S$ privé de ce point aurait donc au moins $3$ composantes connexes, contre au plus $2$ pour une boule de $\R^m$ privée d'un point.

## Preuve

Notons $x(t)=(u(t),v(t))$. Comme $1+t^3>0$ sur $]-1;+\infty[$, $x$ est $C^\infty$.

*Immersion.* Un calcul direct donne
$$
u'(t)=\frac{3(1+t^3)-9t^3}{(1+t^3)^2}=\frac{3(1-2t^3)}{(1+t^3)^2},\qquad v'(t)=\frac{6t(1+t^3)-9t^4}{(1+t^3)^2}=\frac{3t(2-t^3)}{(1+t^3)^2}.
$$
$u'(t)=0$ impose $t^3=\frac12$, et alors $v'(t)=\frac{3t\cdot 3/2}{(3/2)^2}\neq0$. Donc $x'(t)\neq0$ pour tout $t$ : $dx_t:h\mapsto h\,x'(t)$ est injective, $x$ est une immersion.

*Injectivité.* $u(t)=0\iff t=0$. Pour $t\neq0$, $u(t)\neq0$ et $\dfrac{v(t)}{u(t)}=t$. Donc si $x(t)=x(s)$ : soit $u(t)=u(s)=0$ et $s=t=0$, soit $u(t)=u(s)\neq0$ et $t=v/u=s$. De plus $x(t)=(0,0)\iff t=0$.

*$x$ n'est pas un homéomorphisme sur $S$.* $u(n)=\frac{3n}{1+n^3}\to0$ et $v(n)=\frac{3n^2}{1+n^3}\to0$ : $x(n)\to x(0)$ alors que $n\not\to0$. Donc $x^{-1}:S\to\,]-1;+\infty[$ n'est pas continue en $(0,0)$.

Cela ne suffit pas à conclure (un autre paramétrage pourrait convenir) : montrons que **aucun** paramétrage local n'existe en $(0,0)$.

*Localisation.* Fixons $0<\delta<T$ (par exemple $\delta=\frac12$, $T=2$). Pour $t\in\,]-1;-\delta]$, on a $0<1+t^3\le1$, donc $v(t)\ge3t^2\ge3\delta^2$. Sur le compact $[\delta;T]$, $\norm{x}$ est continue et ne s'annule pas, donc minorée par un $c>0$. Avec $\eta=\min(3\delta^2,c)>0$ :
$$
\norm{x(t)}<\eta\ \Longrightarrow\ t\in\,]-\delta;\delta[\ \cup\ ]T;+\infty[.
$$

*Trois morceaux séparés.* Sur $S\setminus\{(0,0)\}$, on a $u\neq0$ et l'application $\tau:(u,v)\mapsto v/u$ est **continue** (c'est $x^{-1}$ restreinte à $S\setminus\{(0,0)\}$). Les ensembles
$$
A_1=\tau^{-1}(]-\delta;0[),\qquad A_2=\tau^{-1}(]0;\delta[),\qquad A_3=\tau^{-1}(]T;+\infty[)
$$
sont donc trois ouverts **disjoints** de $S\setminus\{(0,0)\}$, et par la localisation, $S\cap D((0,0),\eta)\setminus\{(0,0)\}\subset A_1\cup A_2\cup A_3$. Enfin chaque $A_i$ contient des points arbitrairement proches de $(0,0)$ : $x(-1/n)\in A_1$, $x(1/n)\in A_2$, $x(n)\in A_3$ pour $n$ grand, et ces trois suites tendent vers $(0,0)$.

*Conclusion.* Supposons que $S$ soit une sous-variété de dimension $m$, et soit $y:U\to V\cap S$ un paramétrage local en $(0,0)$ ([[ch09-sous-variete-def]]), $s_0=y^{-1}(0,0)$. Si $m=0$, $(0,0)$ serait isolé dans $S$, ce qui est faux. Si $m\ge1$ : par continuité de $y$, il existe une boule $B=B(s_0,r)\subset U$ avec $y(B)\subset D((0,0),\eta)$ ; comme $y$ est un homéomorphisme, $y(B)$ est un ouvert de $S$ contenant $(0,0)$, donc contient $S\cap D((0,0),\eps)$ pour un $\eps>0$, et rencontre ainsi $A_1$, $A_2$ et $A_3$. Alors $y(B)\setminus\{(0,0)\}$ est contenu dans la réunion des trois ouverts disjoints $A_i$ et les rencontre tous : il a **au moins $3$** composantes connexes (une partie connexe est contenue dans un seul $A_i$). Or il est homéomorphe (par $y$) à $B\setminus\{s_0\}$, qui a $2$ composantes connexes si $m=1$ et une seule si $m\ge2$. Contradiction : $S$ n'est pas une sous-variété. $\square$

## Preuve à trous

*Immersion :* $u'(t)=\frac{3(1-2t^3)}{(1+t^3)^2}$, $v'(t)=\frac{3t(2-t^3)}{(1+t^3)^2}$ <trou>ne s'annulent pas simultanément : $u'=0$ impose $t^3=1/2$, où $v'\neq0$</trou>.

*Injectivité :* <trou indice="exprimer t en fonction de x(t)">pour $t\neq0$, $u(t)\neq0$ et $t=v(t)/u(t)$ ; et $u(t)=0\iff t=0$</trou>.

*Défaut de continuité de l'inverse :* <trou>$x(n)\to(0,0)=x(0)$ alors que $n\to+\infty$</trou>.

*Localisation :* si $\norm{x(t)}<\eta$ (avec $\eta$ assez petit), alors $t\in\,]-\delta;\delta[\cup]T;+\infty[$, car $v\ge3\delta^2$ sur $]-1;-\delta]$ et $\norm{x}$ est minorée sur le compact $[\delta;T]$.

*Conclusion :* la fonction continue $\tau=v/u$ sur $S\setminus\{0\}$ sépare <trou indice="combien de demi-branches arrivent en (0,0) ?">trois demi-branches ($t\to0^-$, $t\to0^+$, $t\to+\infty$)</trou> ; pour un paramétrage $y$ en $(0,0)$ et une petite boule $B$, $y(B)\setminus\{0\}$ aurait donc <trou>au moins $3$ composantes connexes, alors que $B\setminus\{s_0\}$ en a au plus $2$</trou>. $\square$

## Exemples

* **Équation du folium.** On vérifie $u^3+v^3=\dfrac{27t^3(1+t^3)}{(1+t^3)^3}=\dfrac{27t^3}{(1+t^3)^2}=3uv$. La courbe complète $\{u^3+v^3=3uv\}$ est l'image de $\R\setminus\{-1\}$ par la même formule ; la partie $t<-1$ est la branche du quadrant $\{u>0,v<0\}$, absente de $S$. Pour $f(u,v)=u^3+v^3-3uv$, $df=(3u^2-3v,\ 3v^2-3u)$ s'annule sur $f^{-1}(0)$ seulement en $(0,0)$ (l'autre point critique, $(1,1)$, vérifie $f(1,1)=-1$) : $0$ est une valeur critique, et [[ch09-sous-variete-equation-valeur-reguliere]] ne s'applique pas en $(0,0)$ ; elle montre en revanche que $f^{-1}(0)\setminus\{(0,0)\}$ est une sous-variété de dimension $1$.
* **En coupant le domaine.** Pour $T>0$, $S_T=x(]-1;T[)$ est une sous-variété de dimension $1$, paramétrée globalement par $x$. En effet, si $x(t_n)\to x(t)$ avec $t_n,t\in\,]-1;T[$, la suite $(t_n)$ reste dans un compact $[-1+\alpha;T]$ (car $v(t)\to+\infty$ quand $t\to-1^+$) ; toute valeur d'adhérence $s$ vérifie $x(s)=x(t)$, donc $s=t$ par injectivité de $x$ sur $]-1;+\infty[$ ; ainsi $t_n\to t$ et $x^{-1}$ est continue.
* **Les tangentes en $(0,0)$.** $x'(0)=(3,0)$ : la branche $t\to0$ arrive horizontalement ; pour $t\to+\infty$, $x(t)\sim(3/t^2,3/t)$, donc $u\approx v^2/3$ : la branche arrive verticalement. Deux directions de tangentes en un même point : encore un symptôme du défaut.

## Pièges

* > ⚠️ « immersion injective » $\not\Rightarrow$ « homéomorphisme sur l'image » : c'est exactement pourquoi la définition [[ch09-sous-variete-def]] exige la condition 2 en plus de la condition 3.
* Ne pas conclure « pas une sous-variété » du seul fait que **ce** paramétrage $x$ n'a pas d'inverse continu : il faut un argument intrinsèque à l'ensemble $S$ (ici, compter les composantes connexes d'un voisinage épointé).
* Localement, une immersion est un homéomorphisme sur son image ([[ch09-immersion-locale-homeo]]) : le défaut est **global** (des paramètres lointains, $0$ et $+\infty$, donnent des points proches).
* Sur un domaine **compact** (ou en restreignant à un compact), une immersion injective est automatiquement un homéomorphisme sur son image (bijection continue d'un compact dans un séparé) : le folium utilise de façon essentielle que $]-1;+\infty[$ n'est pas compact.
