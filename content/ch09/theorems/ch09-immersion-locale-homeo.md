---
id: ch09-immersion-locale-homeo
type: proposition
chapter: 9
title: Une immersion en un point est localement une immersion et un homéomorphisme sur son image
ref: Proposition IX.1.2
page: 147
importance: 2
depends: [ch06-inversion-locale, ch09-immersion-submersion-def, ch06-diffeomorphisme-def, ch05-composition-differentielles]
tags: [immersion, inversion-locale, homeomorphisme, supplementaire, epaississement]
---
## Intuition

> 💡 Si $df_a$ est injective, la nappe $f(U)$ est, près de $f(a)$, une « feuille » de dimension $m$ bien lisse dans $\R^N$. On l'**épaissit** dans les $N-m$ directions manquantes (un supplémentaire $H$ de l'image de $df_a$) : on obtient une application $F$ de $U\times H$ (dimension $m+(N-m)=N$) dans $\R^N$, dont la différentielle en $(a,0)$ est inversible. Le théorème d'inversion locale dit alors que $F$ est un difféomorphisme local ; la feuille $f(U_1)=F(U_1\times\{0\})$ en hérite toutes les bonnes propriétés.

Vocabulaire : une **immersion** en $a$ est une application dont la différentielle $df_a$ est injective ([[ch09-immersion-submersion-def]]) ; un **homéomorphisme** entre deux parties est une bijection continue d'inverse continu ; un $C^k$-**difféomorphisme** entre ouverts est une bijection $C^k$ d'inverse $C^k$ ([[ch06-diffeomorphisme-def]]). Un **supplémentaire** $H$ d'un sous-espace $E$ de $\R^N$ est un sous-espace tel que $\R^N=E\oplus H$.

## Énoncé

**Proposition (poly, Proposition IX.1.2, p. 147).** Soit $f : U\to\R^N$ une application de classe $C^1$ définie sur un ouvert $U$ de $\R^m$. Soit $a\in U$ tel que $df_a : \R^m\to\R^N$ soit injective. Alors il existe un voisinage ouvert $U_1$ de $a$ dans $U$ tel que la restriction de $f$ à $U_1$ soit une immersion en tout point, et de plus, $f$ réalise un homéomorphisme entre $U_1$ et son image $f(U_1)$.

(L'image $f(U_1)$ est munie de la topologie induite par celle de $\R^N$.)

## Hypothèses

### H1 — $f$ de classe $C^1$

**Rôle.** C'est l'hypothèse du théorème d'inversion locale ([[ch06-inversion-locale]]), appliqué à l'application épaissie $F$, qui est $C^1$ parce que $f$ l'est.

**Si on la retire.** Avec $f$ seulement dérivable, la conclusion tombe. Prenons $m=N=1$ et $f(t)=t+2t^2\sin(1/t)$ pour $t\neq0$, $f(0)=0$. Elle est dérivable partout, avec $f'(0)=\lim_{t\to0}(1+2t\sin(1/t))=1$, donc $df_0$ injective. Mais pour $t\neq0$, $f'(t)=1+4t\sin(1/t)-2\cos(1/t)$, qui vaut $-1$ en $t=\frac{1}{2\pi n}$ et $3$ en $t=\frac{1}{(2n+1)\pi}$. Ainsi :
* $f'$ s'annule (valeurs intermédiaires, $f'$ continue sur $]0,+\infty[$) en des points arbitrairement proches de $0$ : $f$ n'est une immersion sur aucun voisinage de $0$ ;
* $f'$ prend des valeurs $<0$ et $>0$ sur tout voisinage de $0$, donc $f$ n'est monotone sur aucun intervalle contenant $0$ ; or une fonction continue injective sur un intervalle est strictement monotone : $f$ n'est injective (donc homéomorphisme sur son image) sur aucun voisinage de $0$.

### H2 — $df_a$ injective

**Rôle.** Elle donne $\dim df_a(\R^m)=m$, donc un supplémentaire $H$ de dimension $N-m$, et elle rend $dF_{(a,0)}$ injective, donc bijective par égalité des dimensions.

**Si on la retire.** La conclusion (qui contient « immersion en $a$ ») tombe évidemment ; plus instructif : $f(t)=t^2$ ($m=N=1$, $df_0=0$) n'est injective sur aucun voisinage de $0$, et $f(t)=(t^2,t^3)$ est un homéomorphisme de $\R$ sur son image (d'inverse $(u,v)\mapsto v^{1/3}$) mais n'est une immersion sur aucun voisinage de $0$ puisque $f'(0)=0$.

### H3 — $U$ ouvert de $\R^m$

**Rôle.** Pour différentier en $a$ et pour que $U\times H$ soit un ouvert de l'espace de Banach $\R^m\times H$, cadre du théorème d'inversion locale.

**Si on la retire.** Hypothèse de cadre : sans elle $df_a$ n'est pas définie au sens du chapitre V (pour une partie non ouverte, voir [[ch06-differentiable-sur-partie-def]]).

## Idée de la preuve

On choisit $H$ supplémentaire de $df_a(\R^m)$ et on épaissit $f$ en $F(q,t)=f(q)+t$ sur $U\times H$. Alors $dF_{(a,0)}(h,w)=df_a(h)+w$ est un isomorphisme ; l'inversion locale fait de $F$ un difféomorphisme de $U_1\times Y$ sur un ouvert $V$, et on restreint à la tranche $U_1\times\{0\}$.

## Preuve

**Étape 1 : épaississement.** Comme $df_a$ est injective, son image $E=df_a(\R^m)$ est un sous-espace de dimension $m$ de $\R^N$ ; soit $H$ un supplémentaire, $\R^N=df_a(\R^m)\oplus H$, de dimension $N-m$. On définit
$$
F : U\times H\to\R^N,\qquad F(q,t)=f(q)+t .
$$
La restriction de $F$ à $U\times\{0\}$ coïncide avec $f$ : $F(q,0)=f(q)$. L'application $F$ est de classe $C^1$ sur l'ouvert $U\times H$ de $\R^m\times H$ (somme de $(q,t)\mapsto f(q)$, $C^1$, et de $(q,t)\mapsto t$, linéaire), et sa différentielle en $(q,t)$ est
$$
dF_{(q,t)} : \R^m\times H\to\R^N,\qquad (h,w)\mapsto df_q(h)+w .
$$

**Étape 2 : $dF_{(a,0)}$ est un isomorphisme.** Si $df_a(h)+w=0$ avec $h\in\R^m$, $w\in H$, alors $df_a(h)=-w\in df_a(\R^m)\cap H=\{0\}$ (somme directe), donc $w=0$ et $df_a(h)=0$, d'où $h=0$ par injectivité de $df_a$. Ainsi $dF_{(a,0)}$ est injective, entre deux espaces de même dimension $m+(N-m)=N$ : c'est un isomorphisme (automatiquement bicontinu en dimension finie).

**Étape 3 : inversion locale.** Par le théorème d'inversion locale ([[ch06-inversion-locale]]), il existe un voisinage ouvert $W$ de $(a,0)$ dans $U\times H$ et un voisinage ouvert $V_0$ de $F(a,0)=f(a)$ dans $\R^N$ tels que $F$ soit un $C^1$-difféomorphisme de $W$ sur $V_0$. Comme $W$ est ouvert dans le produit, il contient un ouvert produit $U_1\times Y$, avec $U_1$ ouvert de $U$ contenant $a$ et $Y$ ouvert de $H$ contenant $0$. Posons $V=F(U_1\times Y)$ : c'est un ouvert de $\R^N$ (image d'un ouvert de $W$ par l'homéomorphisme $F:W\to V_0$, $V_0$ ouvert), contenant $f(a)$, et $F$ réalise un $C^1$-difféomorphisme de $U_1\times Y$ sur $V$.

**Étape 4 : $f$ est une immersion sur $U_1$.** Pour $(q,t)\in U_1\times Y$, la différentielle $dF_{(q,t)}$ est inversible : en différentiant $F^{-1}\circ F=\mathrm{id}$ (règle de la chaîne, [[ch05-composition-differentielles]]), on obtient $d(F^{-1})_{F(q,t)}\circ dF_{(q,t)}=\mathrm{id}$. En particulier, pour $q\in U_1$, $df_q(h)=dF_{(q,0)}(h,0)$, et $dF_{(q,0)}$ étant injective, $df_q(h)=0$ entraîne $(h,0)=0$, i.e. $h=0$ : $df_q$ est injective.

**Étape 5 : $f$ est un homéomorphisme de $U_1$ sur $f(U_1)$.** On a $f|_{U_1}=F\circ\iota$ avec $\iota(q)=(q,0)$, donc $f|_{U_1}$ est continue, et injective puisque $F$ l'est sur $U_1\times Y\ni(q,0)$. Son inverse $f(U_1)\to U_1$ est
$$
(f|_{U_1})^{-1}=\pi_1\circ(F|_{U_1\times Y})^{-1}\big|_{f(U_1)},\qquad \pi_1(q,t)=q,
$$
car pour $q\in U_1$, $(F|_{U_1\times Y})^{-1}(f(q))=(q,0)$. C'est une composée d'applications continues. Donc $f$ réalise un homéomorphisme de $U_1\simeq U_1\times\{0\}$ sur son image $f(U_1)=F(U_1\times\{0\})$. $\square$

## Preuve à trous

Soit $H$ un supplémentaire de $df_a(\R^m)$ dans $\R^N$. On pose <trou indice="on épaissit f dans les directions manquantes">$F:U\times H\to\R^N$, $F(q,t)=f(q)+t$</trou>, de classe $C^1$, avec $F(q,0)=f(q)$ et $dF_{(q,t)}(h,w)=df_q(h)+w$.

Si $dF_{(a,0)}(h,w)=0$, alors <trou indice="somme directe, puis injectivité de df_a">$df_a(h)=-w\in df_a(\R^m)\cap H=\{0\}$, donc $w=0$ puis $h=0$ ; $dF_{(a,0)}$ est injective entre espaces de même dimension $N$, donc un isomorphisme</trou>.

Le théorème d'inversion locale donne <trou indice="on peut choisir le voisinage de (a,0) de forme produit">un ouvert produit $U_1\times Y\ni(a,0)$ et un ouvert $V\ni f(a)$ tels que $F:U_1\times Y\to V$ soit un $C^1$-difféomorphisme</trou>.

Pour $q\in U_1$, $df_q(h)=dF_{(q,0)}(h,0)$ et $dF_{(q,0)}$ est inversible (différentielle d'un difféomorphisme), donc $df_q$ est injective. Enfin $f|_{U_1}$ est continue, injective, d'inverse <trou indice="revenir par F^{-1} puis oublier la composante t">$\pi_1\circ F^{-1}$ restreinte à $f(U_1)$, où $\pi_1(q,t)=q$</trou>, qui est continue : $f$ est un homéomorphisme de $U_1$ sur $f(U_1)$. $\square$

## Exemples

* **La parabole, épaissie à la main.** $f(t)=(t,t^2)$, $a=0$ : $df_0(h)=(h,0)$, image $\R\times\{0\}$, supplémentaire $H=\{0\}\times\R$. Alors $F(q,t)=(q,q^2+t)$, et $F$ est un difféomorphisme **global** de $\R^2$, d'inverse $(u,v)\mapsto(u,v-u^2)$. Ici on peut prendre $U_1=\R$ : $f$ est un homéomorphisme de $\R$ sur la parabole, d'inverse $(u,v)\mapsto u$.
* **Le cercle : le résultat est local.** $f(t)=(\cos t,\sin t)$ est une immersion en tout $t$. Avec $U_1=\,]-\pi,\pi[$, $f$ est un homéomorphisme de $U_1$ sur le cercle privé de $(-1,0)$, d'inverse $(x,y)\mapsto 2\arctan\frac{y}{1+x}$ (car $\tan\frac t2=\frac{\sin t}{1+\cos t}$ pour $t\in\,]-\pi,\pi[$). Mais sur $U=\R$ tout entier, $f$ n'est pas injective : on ne peut pas prendre $U_1=U$ en général.
* **Une immersion injective qui n'est pas un homéomorphisme global.** $x(t)=(\sin2t,\sin t)$ sur $]-\pi,\pi[$ : $x'(t)=(2\cos2t,\cos t)$ ne s'annule pas ($\cos t=0\Rightarrow\cos2t=-1$), et $x$ est injective (si $\sin t_1=\sin t_2$ avec $t_1\neq t_2$, alors $t_2=\pm\pi-t_1$ et $\sin2t_2=-\sin2t_1$, nul seulement si $t_1\in\{0,\pm\frac\pi2\}$, cas exclus). Pourtant $x(t)\to(0,0)=x(0)$ quand $t\to\pi^-$ : l'inverse n'est pas continu en $(0,0)$. La proposition garantit seulement qu'un **petit** $U_1$ autour de chaque point convient (voir aussi [[ch09-contre-ex-folium]]).

## Pièges

* > ⚠️ La conclusion est **locale** : elle ne dit pas que $f$ est injective sur $U$, ni que $f(U)$ est une sous-variété ([[ch09-contre-ex-point-multiple]], [[ch09-contre-ex-folium]]).
* L'hypothèse porte sur **un seul point** $a$ : c'est la classe $C^1$ (continuité de $q\mapsto df_q$) qui propage l'injectivité aux points voisins. Preuve directe de ce seul point : un mineur $m\times m$ non nul de $J_f(a)$ reste non nul près de $a$ par continuité.
* « Homéomorphisme sur son image » : la topologie de $f(U_1)$ est celle **induite** par $\R^N$ ; l'injectivité plus la continuité ne suffisent pas (contre-exemple $x(t)=(\sin 2t,\sin t)$ ci-dessus).
* La même technique d'épaississement $F(q,t)=f(q)+t$ resservira pour le redressement des sous-variétés ([[ch09-redressement-local]]) : elle mérite d'être retenue.
