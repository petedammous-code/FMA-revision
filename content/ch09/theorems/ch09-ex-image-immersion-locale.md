---
id: ch09-ex-image-immersion-locale
type: corollary
chapter: 9
title: L'image locale d'une immersion est une sous-variété
ref: Exemple IX.2.9
page: 149
importance: 2
depends: [ch09-immersion-locale-homeo, ch09-sous-variete-def]
tags: [immersion, sous-variete, parametrage-local, image, local]
---
## Intuition

> 💡 Une immersion $f$ (différentielle injective, [[ch09-immersion-submersion-def]]) est le prototype d'un paramétrage. Le seul défaut possible d'une immersion est **global** (deux morceaux éloignés de $U$ qui viennent se croiser ou s'accumuler l'un sur l'autre). Si l'on ne regarde $f$ que sur un **petit** voisinage $U_1$ d'un point, ce défaut disparaît ([[ch09-immersion-locale-homeo]]) : la « petite nappe » $f(U_1)$ est une sous-variété, paramétrée **globalement** par $f$.

C'est la manière la plus rapide de fabriquer des sous-variétés à partir d'une formule paramétrique, à condition de rester local.

## Énoncé

**Corollaire (poly, Exemple IX.2.9, p. 149).** Soit $f : U\to\R^N$ une application de classe $C^1$ définie sur un ouvert $U$ de $\R^m$. Soit $q\in U$ tel que $df_q$ soit injective. D'après la proposition IX.1.2, il existe un voisinage ouvert $U_1$ de $q$ dans $U$ tel que la restriction de $f$ à $U_1$ soit une immersion en tout point réalisant un homéomorphisme sur son image. Ainsi $S=f(U_1)$ est une sous-variété de $\R^N$ paramétrée par $f : U_1\to S$.

Précisément : $S=f(U_1)$ est une sous-variété de dimension $m$ de $\R^N$, de classe $C^k$ si $f$ est de classe $C^k$, et $f|_{U_1}$ est un paramétrage local de $S$ en chacun de ses points (avec $V=\R^N$).

## Hypothèses

### H1 — $f$ de classe $C^1$

**Rôle.** Hypothèse de [[ch09-immersion-locale-homeo]] (via l'inversion locale), et condition 1 de [[ch09-sous-variete-def]].

**Si on la retire.** Pour $f(t)=t+2t^2\sin(1/t)$, $f(0)=0$ ($m=N=1$), dérivable avec $f'(0)=1$, la conclusion « $f(U_1)$ paramétrée par $f$ » échoue pour tout voisinage $U_1$ de $0$ : $f$ n'est injective sur aucun d'eux, et $f'$ s'y annule (voir [[ch09-immersion-locale-homeo]]). L'ensemble $f(U_1)$, un intervalle, peut être une sous-variété, mais $f$ n'en est pas un paramétrage.

### H2 — $df_q$ injective

**Rôle.** Elle permet d'appliquer [[ch09-immersion-locale-homeo]] et donne la condition 3 sur $U_1$.

**Si on la retire.** $f(t)=(t^2,t^3)$, $df_0=0$. Pour tout $\delta>0$, $f(]-\delta,\delta[)=\{(|v|^{2/3},v) : |v|<\delta^3\}$ (un morceau de cusp) n'est **pas** une sous-variété $C^1$ : sa dimension ne pourrait être que $1$ (c'est un graphe au-dessus de l'axe des $v$ : ni discret, ni d'intérieur non vide), et si $y=(y_1,y_2)$ en était un paramétrage de dimension $1$ en $(0,0)=y(s_0)$, alors $y_1=|y_2|^{2/3}\ge0$ serait minimale en $s_0$, donc $y_1'(s_0)=0$, d'où $y_2'(s_0)\neq0$ (immersion) ; mais alors $\frac{y_1(s)}{|s-s_0|}=\frac{|y_2(s)|^{2/3}}{|s-s_0|}\sim|y_2'(s_0)|^{2/3}|s-s_0|^{-1/3}\to+\infty$, ce qui contredit $y_1'(s_0)=0$.

### H3 — on se restreint à un voisinage $U_1$ (le résultat est local)

**Rôle.** Sur $U_1$, $f$ est un homéomorphisme sur son image : c'est la condition 2.

**Si on la retire.** $f(U)$ tout entier peut ne pas être une sous-variété, même si $f$ est une immersion sur tout $U$ : $t\mapsto(t^3-4t,t^2-4)$ sur $\R$ (point double en $(0,0)=f(\pm2)$, [[ch09-contre-ex-point-multiple]]), le folium de Descartes ([[ch09-contre-ex-folium]]), ou la figure huit $t\mapsto(\sin2t,\sin t)$ sur $]-\pi,\pi[$ (voir [[ch09-sous-variete-def]]).

## Idée de la preuve

On applique [[ch09-immersion-locale-homeo]] pour obtenir $U_1$, puis on vérifie la définition de sous-variété en tout point de $S=f(U_1)$ avec le **même** paramétrage $x=f|_{U_1}$ et $V=\R^N$.

## Preuve

Par [[ch09-immersion-locale-homeo]] (qui utilise que $f$ est $C^1$ et $df_q$ injective), il existe un voisinage ouvert $U_1$ de $q$ dans $U$ — donc un ouvert de $\R^m$ — tel que $df_{q'}$ soit injective pour tout $q'\in U_1$ et que $f|_{U_1}$ soit un homéomorphisme de $U_1$ sur $S=f(U_1)$.

Vérifions la définition [[ch09-sous-variete-def]] en un point $p\in S$ quelconque, avec $U_1$ comme ouvert de $\R^m$, $V=\R^N$ comme voisinage ouvert de $p$, et $x=f|_{U_1}:U_1\to\R^N$ :
1. $x$ est de classe $C^1$ (de classe $C^k$ si $f$ l'est), comme restriction de $f$ à un ouvert ;
2. $x$ est un homéomorphisme de $U_1$ sur $f(U_1)=S=V\cap S$ ;
3. pour tout $q'\in U_1$, $dx_{q'}=df_{q'}$ est injective.

Donc $S$ est une sous-variété de dimension $m$ de $\R^N$, et $f:U_1\to S$ en est un paramétrage (global). $\square$

## Preuve à trous

Par <trou indice="la proposition qui précède, conséquence de l'inversion locale">la Proposition IX.1.2 (une immersion en un point est, près de ce point, une immersion et un homéomorphisme sur son image)</trou> ([[ch09-immersion-locale-homeo]]), il existe un voisinage ouvert $U_1$ de $q$ sur lequel $f$ est une immersion en tout point et un homéomorphisme sur $f(U_1)$.

En tout $p\in S=f(U_1)$, on prend <trou indice="un seul paramétrage pour tous les points ; quel voisinage V ?">$x=f|_{U_1}$ et $V=\R^N$, de sorte que $V\cap S=S=x(U_1)$</trou>.

Les conditions 1 (restriction $C^k$), 2 (homéomorphisme de $U_1$ sur $V\cap S$) et 3 ($dx_{q'}=df_{q'}$ injective) sont vérifiées : $S$ est une sous-variété de dimension $m$. $\square$

## Exemples

* **Arc de cercle.** $f(t)=(\cos t,\sin t)$, $q=0$, $f'(0)=(0,1)\neq0$. On peut prendre $U_1=\,]-\pi,\pi[$ : $f(U_1)$ est le cercle privé de $(-1,0)$, sous-variété paramétrée par $f$. Sur $U=\R$, $f$ n'est pas injective ; $f(\R)$ (le cercle entier) est pourtant une sous-variété, mais $f:\R\to f(\R)$ n'en est pas un paramétrage.
* **Morceau de sphère en coordonnées sphériques.** $f(u,v)=(\cos u\cos v,\sin u\cos v,\sin v)$, $q=(0,0)$ : $J_f(0,0)=\begin{pmatrix}0&0\\1&0\\0&1\end{pmatrix}$, de rang $2$. Donc, pour $U_1$ assez petit autour de $(0,0)$ (par exemple $U_1=\,]-\frac\pi2,\frac\pi2[^2$ : $f$ y est une immersion en tout point car $\partial_uf\wedge\partial_vf=\cos v\,f(u,v)$ a pour norme $\cos v\neq0$, et $f$ y est injective d'inverse $(x_1,x_2,x_3)\mapsto(\arctan\frac{x_2}{x_1},\arcsin x_3)$, continu puisque $x_1=\cos u\cos v>0$), $f(U_1)$ est un morceau de surface de $\mathbb S^2$, paramétré par $f$.
* **Branches d'une courbe à point double.** Pour $f(t)=(t^3-4t,t^2-4)$, $f'(t)=(3t^2-4,2t)$ ne s'annule jamais. Les petits arcs $f(]2-\eps,2+\eps[)$ et $f(]-2-\eps,-2+\eps[)$ sont chacun des sous-variétés passant par $(0,0)$, de tangentes $f'(2)=(8,4)$ et $f'(-2)=(8,-4)$ ; c'est leur **réunion** qui n'en est pas une.

## Pièges

* > ⚠️ « $df_q$ injective » donne une sous-variété $f(U_1)$ pour un **petit** $U_1$, pas $f(U)$ : ne jamais conclure que l'image d'une immersion globale est une sous-variété sans vérifier la condition 2 (injectivité **et** continuité de l'inverse).
* La sous-variété obtenue dépend de $U_1$ : c'est un « morceau » de nappe, pas en général une partie fermée de $\R^N$.
* Le résultat dit que $f(U_1)$ est une sous-variété, il ne dit pas que $f(U)$ est contenue dans une sous-variété de dimension $m$ près de $f(q)$ : d'autres morceaux de $f(U)$ peuvent repasser par $f(q)$ (point double ci-dessus).
* Pour un résultat **global** : une immersion injective qui est un homéomorphisme sur son image (on dit un **plongement**) a pour image une sous-variété — c'est exactement la définition appliquée avec un seul paramétrage.
