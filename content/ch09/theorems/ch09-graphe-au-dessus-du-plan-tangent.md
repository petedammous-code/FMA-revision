---
id: ch09-graphe-au-dessus-du-plan-tangent
type: corollary
chapter: 9
title: Une sous-variété est localement le graphe d'une fonction au-dessus de son plan tangent
ref: Corollaire IX.7.27
page: 166
importance: 2
depends: [ch09-inversion-locale-sous-varietes, ch09-remarques-differentielle-cas-euclidien, ch09-notation-tps, ch09-ex-sous-espace-affine, ch09-espace-tangent-image-dx]
tags: [sous-variete, graphe, plan-tangent, projection-orthogonale, inversion-locale]
---
## Intuition

> 💡 Regardez une surface de très près autour d'un point $p$ : elle ressemble à son plan tangent. Plus précisément, si l'on projette orthogonalement la surface sur ce plan, un petit morceau autour de $p$ se projette **bijectivement** ; chaque point du morceau est alors repéré par son ombre $u$ sur le plan et par sa « hauteur » $h(u)$ au-dessus du plan, mesurée dans la direction normale. Le morceau est le **graphe** de $h$ au-dessus du plan tangent.

Rappels : $T_pS$ est l'espace tangent (sous-espace vectoriel de dimension $m$, [[ch09-espace-tangent-image-dx]]) et le **plan tangent affine** $P$ est le sous-espace affine passant par $p$ et parallèle à $T_pS$ ([[ch09-notation-tps]]). On avait déjà vu qu'une sous-variété est localement un graphe « à isomorphisme linéaire près » ([[ch09-sous-variete-localement-graphe]]) ; ce corollaire dit que **le bon plan au-dessus duquel écrire le graphe est le plan tangent**, avec la direction normale comme direction des « hauteurs ».

## Énoncé

**Corollaire (poly, Corollaire IX.7.27, p. 166).** Soit $S$ une sous-variété de dimension $m$ de $\R^N$ et soit $p\in S$. Soit $P$ le sous-espace affine passant par $p$ et parallèle à $T_pS$. Il existe un voisinage ouvert $W$ de $p$ dans $S$, un voisinage ouvert $V$ de $p$ dans $P$, un sous-espace vectoriel $H$ de dimension $N-m$ de $\R^N$ et une fonction différentiable $h:V\to H$ tels que $W$ est le graphe de $h$.

Précisément (c'est le sens de « graphe », via l'identification $\R^N=T_pS\oplus H\simeq T_pS\times H$) :
$$
W=\{\,u+h(u)\ :\ u\in V\,\}.
$$
Dans la preuve, $H=(T_pS)^\perp$. *Complément (non énoncé dans le poly mais immédiat dans la preuve) :* si $S$ est de classe $C^k$, $h$ est de classe $C^k$, $h(p)=0$ et $dh_p=0$ : le graphe est **tangent** à $P$ en $p$.

## Hypothèses

### H1 — $S$ est une sous-variété (de classe $C^k$, $k\ge1$) et $P$ est parallèle à $T_pS$

**Rôle.** Il faut un espace tangent $T_pS$ de dimension $m$ pour définir $P$, et il faut que la projection orthogonale $f:S\to P$ ait une différentielle inversible en $p$, ce qui vient de ce que $P$ est **parallèle à $T_pS$** : $df_p=\mathrm{Id}_{T_pS}$. On applique alors [[ch09-inversion-locale-sous-varietes]].

**Si on la retire.**
* *Pas une sous-variété.* La croix $C=(\R\times\{0\})\cup(\{0\}\times\R)\subset\R^2$ en $p=0$ ([[ch09-contre-ex-croix]]) n'est localement le graphe d'aucune fonction au-dessus d'aucune droite $L$ passant par $0$, en projetant orthogonalement : si $L$ n'est pas un axe, les deux axes se projettent bijectivement sur $L$, donc tout point $u\ne0$ de $L$ proche de $0$ a deux antécédents proches de $0$ ; si $L$ est un axe, l'autre axe se projette tout entier sur $0$.
* *Plan non parallèle à $T_pS$.* Si l'on projette orthogonalement sur un plan $P'$ passant par $p$ dont la direction $D'$ vérifie $T_pS\cap D'^{\perp}\ne\{0\}$, la conclusion peut tomber : pour $\mathbb S^2$ en $p=(1,0,0)$ et $P'=\{z=0\}$ (projection $(x,y,z)\mapsto(x,y)$), les points $(x,y,\pm z)$ proches de $p$ ont la même projection, donc aucun voisinage de $p$ n'est un graphe au-dessus de $P'$.

## Idée de la preuve

La projection orthogonale $f:S\to P$ a pour différentielle en $p$ l'identité de $T_pS$ ; par inversion locale elle est un difféomorphisme d'un voisinage $W$ de $p$ sur un voisinage $V$ de $p$ dans $P$, d'inverse $g$. On pose $h(u)=\pi(g(u)-p)$ où $\pi$ est la projection orthogonale sur $H=(T_pS)^\perp$ ; la décomposition $x=f(x)+\pi(x-p)$ donne $W=\{u+h(u)\}$.

## Preuve

Notons $\pi_T$ et $\pi$ les projections orthogonales de $\R^N$ sur $T_pS$ et sur $H=(T_pS)^\perp$ ; on a $\pi_T+\pi=\mathrm{Id}_{\R^N}$ et $\dim H=N-m$ car $\dim T_pS=m$.

*La projection sur $P$.* Soit $F:\R^N\to\R^N$, $F(x)=p+\pi_T(x-p)$ : c'est la projection orthogonale sur $P=p+T_pS$. Elle est affine, donc $C^\infty$, de différentielle $dF_x=\pi_T$ en tout point, et à valeurs dans $P$. Soit $f=F|_S:S\to P$. L'espace affine $P$ est une sous-variété de dimension $m$ de $\R^N$ ([[ch09-ex-sous-espace-affine]]) et $T_pP=T_pS$ (les courbes $t\mapsto p+tv$, $v\in T_pS$, sont tracées dans $P$, et $\dim T_pP=m$). L'application $f$ est de classe $C^k$ de $S$ dans $P$ comme restriction d'une application $C^\infty$ (point 2 de [[ch09-remarques-applications-cr]]), et sa différentielle en $p$ est la restriction de $dF_p=\pi_T$ à $T_pS$ ([[ch09-remarques-differentielle-cas-euclidien]], point 2) :
$$
df_p:T_pS\to T_pP=T_pS,\qquad v\mapsto\pi_T(v)=v .
$$

*Inversion locale.* Comme $df_p=\mathrm{Id}_{T_pS}$ est un isomorphisme, le théorème d'inversion locale sur les sous-variétés ([[ch09-inversion-locale-sous-varietes]]) fournit un voisinage ouvert $W$ de $p$ dans $S$ et un voisinage ouvert $V$ de $f(p)=p$ dans $P$ tels que $f$ réalise un $C^k$-difféomorphisme de $W$ sur $V$ ; notons $g:V\to W$ son inverse.

*Le graphe.* Posons
$$
h:V\to H,\qquad h(u)=\pi(g(u)-p).
$$
Elle est de classe $C^k$ (donc différentiable) : composée de $g$ (de classe $C^k$, vue comme application à valeurs dans $\R^N$) et de l'application affine $y\mapsto\pi(y-p)$. Tout $x\in W$ s'écrit $x=g(u)$ avec $u=f(x)\in V$, et
$$
x=p+\pi_T(x-p)+\pi(x-p)=f(x)+\pi(x-p)=u+\pi(g(u)-p)=u+h(u).
$$
Donc $W\subset\{u+h(u)\ :\ u\in V\}$ ; réciproquement, pour $u\in V$, $u+h(u)=g(u)\in W$ par le même calcul appliqué à $x=g(u)$. Ainsi $W=\{u+h(u)\ :\ u\in V\}$ : en identifiant $\R^N$ à $T_pS\times H$ (le point $u\in P$ correspondant à $u-p\in T_pS$), $W$ est le graphe de $h$. $\square$

*Complément : $dh_p=0$.* $h(p)=\pi(g(p)-p)=\pi(0)=0$, et par la règle de composition $dh_p=\pi\circ dg_p=\pi\circ(df_p)^{-1}=\pi|_{T_pS}=0$, puisque $\pi$ s'annule sur $T_pS$.

## Preuve à trous

Soit $F(x)=p+\pi_T(x-p)$ la projection orthogonale sur $P$ et $f=F|_S:S\to P$. Comme $F$ est affine de partie linéaire $\pi_T$ et que $T_pP=T_pS$, <trou indice="restriction de dF_p à T_pS">$df_p:T_pS\to T_pS$ est $v\mapsto\pi_T(v)=v$, c'est-à-dire l'identité</trou>.

Par <trou indice="quel théorème, et sur quels objets ?">le théorème d'inversion locale sur les sous-variétés appliqué à $f:S\to P$ en $p$</trou>, il existe $W$ ouvert de $S$ et $V$ ouvert de $P$ contenant $p$ tels que $f:W\to V$ soit un difféomorphisme, d'inverse $g$.

Avec $\pi$ la projection orthogonale sur $H=(T_pS)^\perp$, on pose <trou indice="la composante normale de g(u)">$h(u)=\pi(g(u)-p)$</trou>. Pour $x=g(u)\in W$,
$$
x=f(x)+\pi(x-p)=u+h(u),
$$
car <trou indice="décomposer x - p">$x-p=\pi_T(x-p)+\pi(x-p)$ et $f(x)=p+\pi_T(x-p)$</trou>. Donc $W=\{u+h(u)\ :\ u\in V\}$. $\square$

## Exemples

* **Sphère au pôle nord.** $S=\mathbb S^2$, $p=e_3$ : $T_pS=e_3^\perp=\{z=0\}$, $P=\{z=1\}$, $H=\R e_3$, $f(x,y,z)=(x,y,1)$. On peut prendre $W=\{z>0\}$ (hémisphère nord), $V=\{(u,v,1)\ :\ u^2+v^2<1\}$, $g(u,v,1)=(u,v,\sqrt{1-u^2-v^2})$ et
$$
h(u,v,1)=\big(\sqrt{1-u^2-v^2}-1\big)\,e_3=\Big(-\frac{u^2+v^2}2+o(u^2+v^2)\Big)e_3 .
$$
On voit $h(p)=0$, $dh_p=0$, et le terme d'ordre $2$ décrit la courbure de la sphère.
* **Sphère en un point quelconque.** $p\in\mathbb S^2$ : $T_pS=p^\perp$, $P=p+p^\perp$, $H=\R p$. Les points de la sphère se projetant sur $u\in P$ sont $x=(u-p)+tp$ avec $\norm{u-p}^2+t^2=1$ ; celui proche de $p$ a $t=\sqrt{1-\norm{u-p}^2}$. D'où, pour $\norm{u-p}<1$ :
$$
g(u)=u+\Big(\sqrt{1-\norm{u-p}^2}-1\Big)p,\qquad h(u)=\Big(\sqrt{1-\norm{u-p}^2}-1\Big)p ,
$$
et $W=\{x\in\mathbb S^2\ :\ \langle x,p\rangle>0\}$ (hémisphère centré en $p$).
* **Selle.** $S=\{z=xy\}\subset\R^3$, $p=0$ : par [[ch09-espace-tangent-graphe-equation]], $T_0S$ est le graphe de $d(xy)_0=0$, donc $T_0S=\{z=0\}=P$, $H=\R e_3$ et $h(u,v,0)=uv\,e_3$ sur $V=P$ tout entier ($W=S$). Ici $dh_0=0$ et le terme d'ordre $2$, $uv$, est de signature $(1,1)$ : la surface traverse son plan tangent.

## Pièges

* > ⚠️ Résultat **local** : la projection orthogonale $S\to P$ n'est pas injective globalement en général. Sur la sphère au pôle nord, les deux hémisphères se projettent sur le même disque ; $W$ ne peut pas être toute la sphère.
* $P$ est un sous-espace **affine** (passant par $p$) ; $T_pS$ est un sous-espace **vectoriel** (passant par $0$). Ne pas les confondre dans les calculs : $u\in P$ correspond au vecteur $u-p\in T_pS$.
* $V$ est un ouvert **de $P$** (pas de $\R^N$) et $W$ un ouvert **de $S$**.
* Différence avec [[ch09-sous-variete-localement-graphe]] : là, le graphe est écrit au-dessus de $\R^m\times\{0\}$ après un isomorphisme linéaire $A$ quelconque ; ici on impose le plan tangent et la direction normale, et l'on gagne $dh_p=0$.
* On peut remplacer $H=(T_pS)^\perp$ par n'importe quel supplémentaire de $T_pS$ (projection parallèlement à $H$) ; ce qui compte est que la projection restreinte à $T_pS$ soit un isomorphisme sur la direction de $P$.
