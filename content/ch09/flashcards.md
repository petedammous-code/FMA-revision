## CARD id=fc-ch09-001 ref=ch09-immersion-submersion-def tags=definition
### Q
Définition d'une immersion et d'une submersion en un point $a$ (pour $f : U\to\mathbb R^q$ différentiable, $U$ ouvert de $\mathbb R^p$).
### R
$f$ est une **immersion** (resp. **submersion**) en $a\in U$ si $df_a : \mathbb R^p\to\mathbb R^q$ est **injective** (resp. **surjective**). C'est une immersion (resp. submersion) si c'est le cas en tout point de $U$. (poly, Définition IX.1.1, p. 147) Une immersion exige $p\le q$, une submersion $p\ge q$.

## CARD id=fc-ch09-002 ref=ch09-immersion-submersion-def tags=hypothese,contre-exemple
### Q
Une immersion est-elle automatiquement injective ? un homéomorphisme sur son image ? Donner deux exemples.
### R
Non, c'est une condition **ponctuelle** sur $df_a$. $t\mapsto(t^3-4t,t^2-4)$ est une immersion de $\mathbb R$ non injective : $t=\pm2$ donnent $(0,0)$ (poly, Exemple IX.2.14, p. 150). Le folium $t\in]-1;+\infty[\mapsto\big(\tfrac{3t}{1+t^3},\tfrac{3t^2}{1+t^3}\big)$ est une immersion injective qui n'est pas un homéomorphisme sur son image (Exemple IX.2.15, p. 150).

## CARD id=fc-ch09-003 ref=ch09-immersion-locale-homeo tags=enonce
### Q
Énoncer la proposition « une immersion en un point est localement un homéomorphisme sur son image ».
### R
Soit $f : U\to\mathbb R^N$ de classe $C^1$ sur un ouvert $U$ de $\mathbb R^m$ et $a\in U$ tel que $df_a : \mathbb R^m\to\mathbb R^N$ soit injective. Alors il existe un voisinage ouvert $U_1$ de $a$ dans $U$ tel que $f_{|U_1}$ soit une immersion en tout point et que $f$ réalise un homéomorphisme de $U_1$ sur $f(U_1)$. (poly, Proposition IX.1.2, p. 147)

## CARD id=fc-ch09-004 ref=ch09-immersion-locale-homeo tags=methode
### Q
Comment complète-t-on une immersion $f : U\to\mathbb R^N$ (avec $df_a$ injective) en un difféomorphisme local ? (preuve de IX.1.2)
### R
On choisit un supplémentaire $H$ de $\mathrm{Im}\,df_a$ dans $\mathbb R^N$ et on pose $F : U\times H\to\mathbb R^N$, $F(q,t)=f(q)+t$. Alors $dF_{(a,0)}(h,t)=df_a(h)+t$ est **bijective** (injective par somme directe, et dimensions égales). L'inversion locale ([[ch06-inversion-locale|théorème VI.3.2]]) donne que $F$ est un difféomorphisme local en $(a,0)$ ; or $f=F(\cdot,0)$, d'où le résultat. (poly, p. 147)

## CARD id=fc-ch09-005 ref=ch09-point-critique-valeur-reguliere-def tags=definition
### Q
Définir point critique, valeur critique, point régulier, valeur régulière d'une fonction différentiable $f : V\to\mathbb R^N$, $V$ ouvert de $\mathbb R^m$.
### R
$x\in V$ est un **point critique** si $df_x : \mathbb R^m\to\mathbb R^N$ n'est **pas surjective** ; $f(x)$ est alors une **valeur critique**. Un point non critique est **régulier**. $a\in\mathbb R^N$ est une **valeur régulière** s'il n'est pas valeur critique, c'est-à-dire si $df_x$ est surjective en **tout** $x\in f^{-1}(\{a\})$ ; en particulier si $a\notin f(V)$. (poly, Définition IX.1.3, p. 148)

## CARD id=fc-ch09-006 ref=ch09-point-critique-valeur-reguliere-def tags=hypothese,contre-exemple
### Q
Pourquoi « valeur régulière » porte-t-elle sur toute la fibre ? Exemple avec $f(x,y)=xy$.
### R
Il faut $df_x$ surjective en **tout** point de $f^{-1}(\{a\})$. Pour $f(x,y)=xy$, $df_{(0,0)}=0$ n'est pas surjective : $0$ est valeur critique et $f^{-1}(0)=\{xy=0\}$ (la croix) n'est pas une sous-variété. En revanche toute valeur $a\neq0$ est régulière. Une valeur hors de l'image est régulière par convention (poly, Définition IX.1.3, p. 148).

## CARD id=fc-ch09-007 ref=ch09-rang-constant-rappel tags=enonce
### Q
Énoncer le théorème du rang constant (rappel du poly, Remarque IX.1.4).
### R
Si $f : U\to\mathbb R^m$ est de classe $C^p$ ($p\ge1$) sur un ouvert $U$ de $\mathbb R^n$ et si $df_x$ est de **rang constant** $r$ au voisinage de $a$, alors, à des difféomorphismes près à la source et au but, $f$ s'écrit localement $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0)$. (poly, Remarque IX.1.4, p. 148 ; exercice VI.4.9.) Le rang doit être constant au voisinage de $a$ : $f(x)=x^2$ a rang $0$ en $0$ et $1$ ailleurs.

## CARD id=fc-ch09-008 ref=ch09-sous-variete-def tags=definition
### Q
Définition d'une sous-variété de dimension $m$ et de classe $C^k$ de $\mathbb R^N$ (par paramétrages locaux).
### R
$S\subset\mathbb R^N$ est une sous-variété de dimension $m$ et de classe $C^k$ ($k\in\mathbb N^\times\cup\{\infty\}$) si pour tout $p\in S$ il existe un ouvert $U$ de $\mathbb R^m$, un voisinage ouvert $V$ de $p$ dans $\mathbb R^N$ et $x : U\to V$ tels que : (1) $x$ est de classe $C^k$ ; (2) $x$ est un **homéomorphisme** de $U$ sur $V\cap S$ (topologie induite) ; (3) $dx_q$ est **injective** pour tout $q\in U$. Un tel $x$ est un **paramétrage local** en $p$ ; $x^{-1} : V\cap S\to U$ est une **carte**. (poly, Définition IX.2.1, p. 148)

## CARD id=fc-ch09-009 ref=ch09-sous-variete-def tags=definition
### Q
Définir la codimension, une surface, une hypersurface.
### R
Pour une sous-variété $S$ de dimension $m$ de $\mathbb R^N$ : codimension $=N-m$ ; **surface** $=$ sous-variété de dimension $2$ ; **hypersurface** $=$ sous-variété de codimension $1$ (dimension $N-1$). La condition (3) entraîne $m\le N$. (poly, Définition IX.2.1, p. 148, et Remarques IX.2.2)

## CARD id=fc-ch09-010 ref=ch09-sous-variete-def tags=hypothese
### Q
Dans la définition d'une sous-variété, quel est le rôle de chacune des trois conditions ? Que vérifier quand on teste un paramétrage ?
### R
(1) régularité $C^k$ ; (2) **homéomorphisme sur $V\cap S$** pour la topologie induite : empêche les points multiples, les « bouts » qui reviennent s'accumuler, les croix et les bords ; (3) **immersion** : donne un espace tangent de dimension $m$ et empêche les pointes. Il faut vérifier les **trois** séparément. (poly, Définition IX.2.1, p. 148, Exemples IX.2.11-IX.2.15)

## CARD id=fc-ch09-011 ref=ch09-sous-variete-def tags=contre-exemple
### Q
Contre-exemple à la condition (3) (immersion) : le cusp $t\mapsto(t^2,t^3)$.
### R
$x(t)=(t^2,t^3)$ est $C^\infty$ et un homéomorphisme de $\mathbb R$ sur son image, mais $dx_0=(0,0)=0$ n'est pas injective ; aucun paramétrage local de la forme voulue n'existe en $(0,0)$ : l'image n'est pas une sous-variété $C^1$. (poly, Définition IX.2.1 et Exercice IX.2.13, p. 150)

## CARD id=fc-ch09-012 ref=ch09-ex-ouvert-de-sous-variete tags=enonce
### Q
Un ouvert d'une sous-variété est-il une sous-variété ? Un ouvert de $\mathbb R^N$ ? Un sous-espace affine ? Un produit ?
### R
Oui à toutes. Un ouvert $U$ de $\mathbb R^N$ est une sous-variété de dimension $N$ (paramétrage : l'inclusion) ; un sous-espace affine de dimension $m$ est une sous-variété de dimension $m$ ; un ouvert (pour la topologie induite) d'une sous-variété $S$ est une sous-variété de même dimension et de même classe ; $S_1\times S_2$ est une sous-variété de $\mathbb R^{N_1}\times\mathbb R^{N_2}$ de dimension $\dim S_1+\dim S_2$. (poly, Exemples IX.2.3 à IX.2.7, p. 149)

## CARD id=fc-ch09-013 ref=ch09-ex-image-diffeomorphisme tags=enonce,contre-exemple
### Q
Image d'une sous-variété par un difféomorphisme de $\mathbb R^N$ : énoncé, et que devient-il avec un simple homéomorphisme ?
### R
Si $S$ est une sous-variété de $\mathbb R^N$ et $\Phi$ un **difféomorphisme** de $\mathbb R^N$ sur lui-même, alors $\Phi(S)$ est une sous-variété. (poly, Exemple IX.2.8, p. 149) Avec un homéomorphisme, la régularité peut se perdre : $(x,y)\mapsto(x,y+|x|)$ envoie la droite $y=0$ sur le graphe de $|x|$, qui n'est pas une sous-variété $C^1$.

## CARD id=fc-ch09-014 ref=ch09-ex-image-immersion-locale tags=enonce
### Q
Que dit l'image locale d'une immersion $C^1$ ? (Exemple IX.2.9)
### R
Si $f : U\to\mathbb R^N$ est $C^1$ sur un ouvert $U$ de $\mathbb R^m$ et $df_q$ est injective, il existe un voisinage ouvert $U_1$ de $q$ tel que $S=f(U_1)$ soit une sous-variété de $\mathbb R^N$ paramétrée par $f : U_1\to S$ (Proposition IX.1.2). C'est **local** : globalement $f(U)$ peut ne pas être une sous-variété (Exemples IX.2.14, IX.2.15). (poly, Exemple IX.2.9, p. 149)

## CARD id=fc-ch09-015 ref=ch09-contre-ex-demi-droite tags=enonce,contre-exemple
### Q
Montrer que $[0;+\infty[$ n'est pas une sous-variété de $\mathbb R$.
### R
Tout voisinage ouvert connexe de $0$ dans $S$ est de la forme $[0;a[$. Il ne peut être homéomorphe à un ouvert connexe de $\mathbb R^m$ : pour $m=1$, $[0;a[\setminus\{0\}$ reste connexe alors qu'un intervalle ouvert privé d'un point a deux composantes connexes ; pour $m\ge2$, $[0;a[\setminus\{b\}$ a deux composantes alors qu'un ouvert connexe de $\mathbb R^m$ privé d'un point reste connexe ; $m=0$ est évident. (poly, Exemple IX.2.11, p. 150)

## CARD id=fc-ch09-016 ref=ch09-contre-ex-croix tags=enonce,contre-exemple
### Q
Montrer que la croix $S=\{xy=0\}=(\mathbb R\times\{0\})\cup(\{0\}\times\mathbb R)$ n'est pas une sous-variété de $\mathbb R^2$.
### R
Tout voisinage connexe de $(0,0)$ dans $S$ est encore homéomorphe à $S$, et $S\setminus\{(0,0)\}$ a **4** composantes connexes, alors qu'un ouvert connexe de $\mathbb R^m$ privé d'un point en a au plus $2$. (poly, Exemple IX.2.12, p. 150) Ici $(0,0)$ est un point critique de $f(x,y)=xy$.

## CARD id=fc-ch09-017 ref=ch09-contre-ex-point-multiple tags=enonce,contre-exemple
### Q
Que dit l'exemple $t\mapsto(t^3-4t,t^2-4)$ (Exemple IX.2.14) ?
### R
C'est une immersion en tout point de $\mathbb R$, mais l'image n'est pas une sous-variété de $\mathbb R^2$ à cause du **point multiple** $(0,0)$ atteint pour $t=\pm2$. Donc condition (3) $\not\Rightarrow$ condition (2). (poly, Exemple IX.2.14, p. 150)

## CARD id=fc-ch09-018 ref=ch09-contre-ex-folium tags=enonce,contre-exemple
### Q
Que dit l'exemple du folium de Descartes $x(t)=\big(\frac{3t}{1+t^3},\frac{3t^2}{1+t^3}\big)$, $t>-1$ ?
### R
$x$ est une immersion **injective**, mais son image n'est pas une sous-variété : la branche $t\to+\infty$ revient s'accumuler sur $(0,0)=x(0)$, donc $x^{-1}$ n'est pas continue en $(0,0)$ ($x$ n'est pas un homéomorphisme sur son image). Cela justifie la condition « homéomorphisme » de la Définition IX.2.1. (poly, Exemple IX.2.15, p. 150)

## CARD id=fc-ch09-019 ref=ch09-remarque-fermeture tags=enonce
### Q
Une sous-variété est-elle supposée fermée ? connexe ? Exemple.
### R
Ni l'un ni l'autre (poly, Remarques IX.2.16 et IX.2.17, p. 151). Non fermée : la spirale $s\mapsto(e^s\cos s,e^s\sin s)$ a $(0,0)$ dans son adhérence sans l'avoir dans la sous-variété ; une droite privée d'un point aussi. Non connexe : l'hyperboloïde à deux nappes. Toute composante connexe est encore une sous-variété. L'hypothèse « fermée » sera cruciale dans la Proposition IX.8.1.

## CARD id=fc-ch09-020 ref=ch09-redressement-local tags=enonce
### Q
Énoncer la caractérisation d'une sous-variété par redressement.
### R
Soit $S\subset\mathbb R^N$. $S$ est une sous-variété de dimension $m$ et de classe $C^k$ si et seulement si pour tout $p\in S$ il existe un voisinage ouvert $V'$ de $p$ dans $\mathbb R^N$, un ouvert $W$ de $\mathbb R^N$ et un $C^k$-difféomorphisme $\Phi : V'\to W$ tels que
$$\Phi(V'\cap S)=(\mathbb R^m\times\{0\})\cap W.$$
(poly, Proposition IX.3.1, p. 151)

## CARD id=fc-ch09-021 ref=ch09-redressement-local tags=hypothese,contre-exemple
### Q
Dans la Proposition IX.3.1, pourquoi faut-il un difféomorphisme ambiant et une égalité $\Phi(V'\cap S)=(\mathbb R^m\times\{0\})\cap W$ ?
### R
Avec un simple homéomorphisme, le cusp $\{(t^2,t^3)\}$ serait « redressé » sans être une sous-variété. Avec la seule inclusion $\Phi(V'\cap S)\subset(\mathbb R^m\times\{0\})\cap W$, toute partie d'une droite conviendrait, par exemple $[0;+\infty[\subset\mathbb R\times\{0\}$ (Exemple IX.2.11). (poly, Proposition IX.3.1, p. 151)

## CARD id=fc-ch09-022 ref=ch09-redressement-local tags=methode
### Q
Comment démontre-t-on le sens « paramétrage $\Rightarrow$ redressement » (Proposition IX.3.1) ?
### R
Soit $x : U\to S$ un paramétrage en $p$, $q=x^{-1}(p)$, $H$ un supplémentaire de $dx_q(\mathbb R^m)$ et $\varphi : \mathbb R^{N-m}\to H$ un isomorphisme linéaire. On pose $F(u,t)=x(u)+\varphi(t)$ sur $U\times\mathbb R^{N-m}$ ; $dF_{(q,0)}$ est bijective, donc $F$ est un $C^k$-difféomorphisme local ([[ch06-inversion-locale|inversion locale]]) et $\Phi=F^{-1}$ redresse $S$ (car $F(u,0)=x(u)$). (poly, p. 151-152)

## CARD id=fc-ch09-023 ref=ch09-sous-variete-equation-valeur-reguliere tags=enonce
### Q
Énoncer la proposition « image réciproque d'une valeur régulière est une sous-variété ».
### R
Soit $N>m$ et $f : V\to\mathbb R^{N-m}$ de classe $C^k$ sur un ouvert $V$ de $\mathbb R^N$.
1. Si $df_p$ est surjective en $p\in V$, avec $a=f(p)$, il existe un voisinage ouvert $V_1$ de $p$ tel que $f^{-1}(\{a\})\cap V_1$ soit une sous-variété de dimension $m$ et de classe $C^k$.
2. Si $a$ est valeur régulière de $f$, alors $S=f^{-1}(\{a\})$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\mathbb R^N$.

(poly, Proposition IX.4.1, p. 152)

## CARD id=fc-ch09-024 ref=ch09-sous-variete-equation-valeur-reguliere tags=hypothese,contre-exemple
### Q
Que se passe-t-il dans la Proposition IX.4.1 si $a$ n'est pas valeur régulière ? Donner deux exemples.
### R
La conclusion peut tomber en défaut : $f(x,y)=xy$, $a=0$ : la croix ; $f(x,y,z)=x^2+y^2-z^2$, $a=0$ : le cône (pas une sous-variété en $0$, Exercice IX.7.12). (poly, Proposition IX.4.1, p. 152)

## CARD id=fc-ch09-025 ref=ch09-sous-variete-equation-valeur-reguliere tags=contre-exemple
### Q
La réciproque de la Proposition IX.4.1 est-elle vraie : si $f^{-1}(\{a\})$ est une sous-variété, $a$ est-elle valeur régulière ?
### R
Non. $f(x)=x^2$ : $f^{-1}(0)=\{0\}$ est une sous-variété de dimension $0$ alors que $0$ est valeur critique. De même $f(x,y)=(x^2+y^2-1)^2$ : $df$ s'annule sur tout le cercle unité, $0$ est valeur critique, et pourtant $f^{-1}(0)$ est le cercle, une sous-variété de dimension $1$. Pour montrer qu'un ensemble n'est **pas** une sous-variété il faut un argument direct.

## CARD id=fc-ch09-026 ref=ch09-sous-variete-equation-valeur-reguliere tags=formule
### Q
Dimension de $f^{-1}(\{a\})$ pour $f : V\subset\mathbb R^N\to\mathbb R^q$ de classe $C^k$ avec $a$ valeur régulière ? Condition sur $df_p$ ?
### R
$\dim f^{-1}(\{a\})=N-q$ (le nombre d'équations indépendantes est la **codimension**), à condition que $df_p : \mathbb R^N\to\mathbb R^q$ soit **surjective** en tout $p$ de la fibre. Si $q\ge2$ avec $f=(f_1,\dots,f_q)$, cela équivaut à : les formes linéaires $d(f_1)_p,\dots,d(f_q)_p$ sont linéairement indépendantes, et non pas seulement $df_p\neq0$. (poly, Proposition IX.4.1, p. 152)

## CARD id=fc-ch09-027 ref=ch09-ex-sphere tags=enonce,formule
### Q
Pourquoi la sphère $\mathbb S^n$ est-elle une sous-variété de $\mathbb R^{n+1}$ ? Donner $df_x$.
### R
$\mathbb S^n=f^{-1}(\{1\})$ avec $f : \mathbb R^{n+1}\setminus\{0\}\to\mathbb R$, $f(x)=\|x\|^2$, de différentielle $df_x(v)=2\langle x,v\rangle$, non nulle donc surjective (submersion) car $x\neq0$. D'après IX.4.1 c'est une sous-variété de dimension $n$. (poly, Exemple IX.4.2, p. 153) On en déduit $T_x\mathbb S^n=x^\perp$.

## CARD id=fc-ch09-028 ref=ch09-ex-tore tags=enonce,methode
### Q
Pourquoi le tore $(\sqrt{x^2+y^2}-a)^2+z^2=r^2$, $0<r<a$, est-il une sous-variété ?
### R
Il ne rencontre pas l'axe $D=\{x=y=0\}$ : $S=f^{-1}(\{r^2\})$ avec $f(x,y,z)=(\sqrt{x^2+y^2}-a)^2+z^2$ sur $\mathbb R^3\setminus D$. On a $\partial_zf=2z$, $\partial_xf=\frac{2x(\sqrt{x^2+y^2}-a)}{\sqrt{x^2+y^2}}$, $\partial_yf=\frac{2y(\sqrt{x^2+y^2}-a)}{\sqrt{x^2+y^2}}$. Sur $S$, si $z\neq0$ alors $\partial_zf\neq0$ ; si $z=0$ alors $\sqrt{x^2+y^2}=a\pm r\neq a$ et $(x,y)\neq(0,0)$, donc $df\neq0$. (poly, Exemple IX.4.4, p. 154) Si $r=a$ le tore touche l'axe.

## CARD id=fc-ch09-029 ref=ch09-caracterisation-equations-locales tags=enonce
### Q
Énoncer la proposition « un ensemble localement défini par une équation régulière est une sous-variété ».
### R
Soit $S\subset\mathbb R^N$. Si pour tout $p\in S$ il existe un voisinage ouvert $V$ de $p$ dans $\mathbb R^N$ et $\Psi : V\to\mathbb R^{N-m}$ de classe $C^k$ dont $0$ est valeur régulière tels que $S\cap V=\{x\in V\mid\Psi(x)=0\}$, alors $S$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\mathbb R^N$. (poly, Proposition IX.4.5, p. 155)

## CARD id=fc-ch09-030 ref=ch09-sous-variete-localement-equation tags=enonce
### Q
Énoncer la réciproque : toute sous-variété est localement définie par une équation régulière.
### R
Si $S$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\mathbb R^N$, alors pour tout $p\in S$ il existe un voisinage ouvert $V$ de $p$ dans $\mathbb R^N$ et $\Psi : V\to\mathbb R^{N-m}$ de classe $C^k$ tels que $S\cap V=\{x\in V\mid\Psi(x)=0\}$ et $0$ est valeur régulière de $\Psi$. (poly, Proposition IX.4.6, p. 156) Preuve : $\Psi=p_2\circ\Phi$ avec $\Phi$ le redressement de IX.3.1.

## CARD id=fc-ch09-031 ref=ch09-sous-variete-localement-equation tags=hypothese,contre-exemple
### Q
La Proposition IX.4.6 donne-t-elle une équation globale $S=\Psi^{-1}(0)$ avec $0$ régulière ?
### R
Non, le résultat est **local** : le voisinage $V$ et la fonction $\Psi$ dépendent de $p$. Une sous-variété non fermée dans $\mathbb R^N$ (la spirale de la Remarque IX.2.17) ne peut pas être de la forme $\Psi^{-1}(0)$ avec $\Psi$ continue sur $\mathbb R^N$ tout entier, car une telle fibre est fermée. (poly, Proposition IX.4.6, p. 156)

## CARD id=fc-ch09-032 ref=ch09-graphe-sous-variete tags=enonce,contre-exemple
### Q
Le graphe d'une application est-il une sous-variété ?
### R
Si $f : U\to\mathbb R^{N-m}$ est de classe $C^k$ sur un ouvert $U$ de $\mathbb R^m$, $\mathrm{Graphe}(f)=\{(u,f(u)),\ u\in U\}$ est une sous-variété de $\mathbb R^m\times\mathbb R^{N-m}$ de dimension $m$ et de classe $C^k$, de paramétrage global $u\mapsto(u,f(u))$. (poly, Proposition IX.5.1, p. 156) Il faut $C^k$, $k\ge1$ : le graphe de $|u|$ est homéomorphe à $\mathbb R$ mais pas une sous-variété $C^1$.

## CARD id=fc-ch09-033 ref=ch09-localement-graphe-implique-sous-variete tags=enonce
### Q
Énoncer : un ensemble localement graphe à isomorphisme linéaire près est une sous-variété.
### R
Soit $S\subset\mathbb R^N$. Si pour tout $p\in S$ il existe un voisinage ouvert $V$ de $p$, un isomorphisme linéaire $A : \mathbb R^N\to\mathbb R^N$, un ouvert $U$ de $\mathbb R^m$ et $f : U\to\mathbb R^{N-m}$ de classe $C^k$ tels que $V\cap S=V\cap\{A((u,f(u)));\ u\in U\}$, alors $S$ est une sous-variété de dimension $m$ et de classe $C^k$. (poly, Proposition IX.5.2, p. 157)

## CARD id=fc-ch09-034 ref=ch09-sous-variete-localement-graphe tags=enonce
### Q
Énoncer : toute sous-variété est localement un graphe (à isomorphisme linéaire près).
### R
Soit $S$ une sous-variété de dimension $m$ et de classe $C^k$ de $\mathbb R^N$. Pour tout $p\in S$ il existe un voisinage ouvert $V$ de $p$, un isomorphisme linéaire $A : \mathbb R^N\to\mathbb R^N$, un ouvert $U$ de $\mathbb R^m$ et $f : U\to\mathbb R^{N-m}$ de classe $C^k$ tels que $V\cap S=V\cap\{A((u,f(u)));\ u\in U\}$. (poly, Proposition IX.5.3, p. 157)

## CARD id=fc-ch09-035 ref=ch09-sous-variete-localement-graphe tags=hypothese,contre-exemple
### Q
Pourquoi l'isomorphisme $A$ et le mot « localement » sont-ils nécessaires dans IX.5.3 ? Exemple.
### R
Le cercle n'est pas globalement un graphe, et en $(1,0)$ il est un graphe de $x$ en fonction de $y$ (pas de $y$ en fonction de $x$) : $A$ permute les coordonnées. En général $A$ est un changement de coordonnées linéaire qui place $T_pS$ « à l'horizontale ». (poly, Proposition IX.5.3, p. 157)

## CARD id=fc-ch09-036 ref=ch09-changement-parametrage tags=enonce
### Q
Énoncer la proposition sur les changements de paramétrage.
### R
Soient $x_1 : U_1\to S$, $x_2 : U_2\to S$ deux paramétrages d'une sous-variété $S$ au voisinage de $p$, et $W=x_1(U_1)\cap x_2(U_2)$ (voisinage de $p$ dans $S$). Alors
$$\theta=x_1^{-1}\circ x_2 : x_2^{-1}(W)\to x_1^{-1}(W)$$
est un homéomorphisme ; si les deux paramétrages sont $C^k$ ($k\ge1$), c'est un $C^k$-difféomorphisme. (poly, Proposition IX.6.1, p. 158)

## CARD id=fc-ch09-037 ref=ch09-changement-parametrage tags=methode
### Q
Pourquoi ne peut-on pas dire directement « $x_1^{-1}$ est différentiable » dans la preuve de IX.6.1 ? Quelle astuce ?
### R
$x_1^{-1}$ est définie sur une partie de $S$, où « différentiable » n'a pas encore de sens. On écrit $x_1^{-1}\circ x_2=p_1\circ\Phi\circ x_2$ où $\Phi$ est le redressement local de IX.3.1 (défini sur un ouvert de $\mathbb R^N$) et $p_1$ la projection sur $\mathbb R^m$. (poly, p. 158)

## CARD id=fc-ch09-038 ref=ch09-changement-parametrage tags=hypothese,contre-exemple
### Q
Le changement de paramétrage est-il différentiable sans condition d'immersion ?
### R
Non : $x_1(t)=t^3$ et $x_2(t)=t$ paramètrent tous deux $\mathbb R$ (homéomorphismes $C^\infty$) mais $x_1^{-1}\circ x_2(t)=t^{1/3}$ n'est pas dérivable en $0$ ; $x_1$ n'est pas une immersion en $0$. (poly, Proposition IX.6.1, p. 158)

## CARD id=fc-ch09-039 ref=ch09-fonction-differentiable-sur-sous-variete-def tags=definition
### Q
Définir une fonction $f : S\to\mathbb R$ différentiable (ou de classe $C^r$) sur une sous-variété $S$ de classe $C^k$.
### R
$f$ est **différentiable en $p\in S$** si pour tout paramétrage $x : U\to S$ avec $p\in x(U)$, $f\circ x : U\to\mathbb R$ est différentiable en $q=x^{-1}(p)$. Elle est de **classe $C^r$**, $r\le k$, si $f\circ x$ est $C^r$ sur $U$ pour tout paramétrage $x$. Grâce à IX.6.1, **un seul** paramétrage en $p$ suffit (Remarque IX.7.2). La condition $r\le k$ est nécessaire. (poly, Définition IX.7.1 et Remarque IX.7.2, p. 159)

## CARD id=fc-ch09-040 ref=ch09-application-cr-entre-sous-varietes-def tags=definition
### Q
Définir une application $\varphi : S_1\to S_2$ de classe $C^r$ entre deux sous-variétés.
### R
$\varphi$ est supposée **continue**, $S_1,S_2$ de classe au moins $C^r$, $r\ge1$. Elle est de classe $C^r$ (resp. différentiable en $p$) si pour tous paramétrages $x_1 : U_1\to S_1$ et $x_2 : U_2\to S_2$, l'application $x_2^{-1}\circ\varphi\circ x_1$ (définie sur $x_1^{-1}(\varphi^{-1}(x_2(U_2))\cap x_1(U_1))$, à valeurs dans $U_2$) est de classe $C^r$ (resp. différentiable en $x_1^{-1}(p)$). La continuité préalable garantit que le domaine est ouvert. Il suffit de le vérifier avec un couple de paramétrages en chaque point. (poly, Définition IX.7.5 et Remarque IX.7.7, p. 160)

## CARD id=fc-ch09-041 ref=ch09-remarques-applications-cr tags=enonce
### Q
Quelles propriétés élémentaires ont les applications $C^r$ entre sous-variétés (Exemple IX.7.6, Remarques IX.7.7) ?
### R
Les paramétrages et les cartes d'une sous-variété $C^r$ sont de classe $C^r$ ($x^{-1}\circ x=\mathrm{Id}_U$). $\varphi : S_1\to S_2$ est $C^r$ au sens IX.7.5 si et seulement si $\varphi : S_1\to\mathbb R^{N_2}$ est $C^r$ au sens ambiant. La composée de deux applications $C^r$ est $C^r$ ; si $\alpha : I\to S_1$ est une courbe $C^r$ et $\varphi$ est $C^r$, alors $\varphi\circ\alpha$ est $C^r$. (poly, p. 160)

## CARD id=fc-ch09-042 ref=ch09-vecteur-tangent-espace-tangent-def tags=definition
### Q
Définition d'un vecteur tangent à une sous-variété $S$ en $p$ et de l'espace tangent $T_pS$.
### R
$\vec v\in\mathbb R^N$ est un **vecteur tangent à $S$ en $p$** s'il existe une courbe $\alpha : I\to\mathbb R^N$ de classe $C^1$, $I$ intervalle ouvert contenant $0$, de trace contenue dans $S$, avec $\alpha(0)=p$ et $\alpha'(0)=\vec v$. L'**espace tangent** $T_pS$ est l'ensemble de ces vecteurs. (poly, Définition IX.7.8, p. 160)

## CARD id=fc-ch09-043 ref=ch09-vecteur-tangent-espace-tangent-def tags=contre-exemple
### Q
Pour un ensemble qui n'est pas une sous-variété, l'« ensemble des vecteurs tangents » est-il un sous-espace vectoriel ? Exemple.
### R
Non en général. Pour le cône $C=\{x^2+y^2=z^2\}$ en $0$, l'ensemble des vecteurs tangents par les courbes est le cône lui-même, qui n'est pas un espace vectoriel. (poly, Exercice IX.7.12, p. 161)

## CARD id=fc-ch09-044 ref=ch09-espace-tangent-image-dx tags=enonce
### Q
Énoncer la caractérisation de $T_pS$ par un paramétrage.
### R
Soit $S$ une sous-variété de dimension $m$ de $\mathbb R^N$, $p\in S$, $x : U\to S$ un paramétrage local en $p$ et $q=x^{-1}(p)$. Alors $T_pS=dx_q(\mathbb R^m)$. En particulier $T_pS$ est un sous-espace vectoriel de dimension $m$ de $\mathbb R^N$. (poly, Proposition IX.7.9, p. 161)

## CARD id=fc-ch09-045 ref=ch09-espace-tangent-image-dx tags=methode
### Q
Comment démontre-t-on $T_pS=dx_q(\mathbb R^m)$ (Proposition IX.7.9) ? Deux inclusions.
### R
$\supset$ : pour $\vec w\in\mathbb R^m$, $\alpha(t)=x(q+t\vec w)$ est une courbe $C^1$ tracée sur $S$ avec $\alpha'(0)=dx_q(\vec w)$. $\subset$ : si $\alpha$ est une courbe $C^1$ sur $S$, $\beta=x^{-1}\circ\alpha$ est $C^1$ (c'est ici que sert la Proposition IX.6.1 sur la régularité des cartes) et $\alpha'(0)=dx_q(\beta'(0))$. (poly, p. 161)

## CARD id=fc-ch09-046 ref=ch09-espace-tangent-image-dx tags=hypothese,contre-exemple
### Q
Pourquoi l'injectivité de $dx_q$ est-elle nécessaire pour la dimension de $T_pS$ ?
### R
C'est elle qui donne $\dim dx_q(\mathbb R^m)=m$ (et la régularité des cartes). Pour le cusp $x(t)=(t^2,t^3)$, qui n'est pas un paramétrage au sens de IX.2.1, $dx_0(\mathbb R)=\{0\}$ est de dimension $0$ au lieu de $1$. (poly, Proposition IX.7.9, p. 161)

## CARD id=fc-ch09-047 ref=ch09-notation-tps tags=notation
### Q
Distinguer $T_pS$ et $\mathbf T_pS$ (gras).
### R
$T_pS$ est l'espace tangent **vectoriel** (sous-espace de $\mathbb R^N$, passant par l'origine). $\mathbf T_pS$ est l'espace tangent **affine** : le sous-espace affine passant par $p$ et parallèle à $T_pS$, soit $p+T_pS$. (poly, Définition IX.7.10, p. 161)

## CARD id=fc-ch09-048 ref=ch09-base-espace-tangent tags=enonce,formule
### Q
Quelle base de $T_{x(u)}S$ un paramétrage $x$ fournit-il ?
### R
Avec $(e_1,\dots,e_m)$ la base canonique de $\mathbb R^m$ et $u=(u_1,\dots,u_m)$ :
$$x_{u_i}(u)=dx_u(e_i)=\frac{d}{dt}_{|t=0}x(u+te_i)=\frac{\partial x}{\partial u_i}(u),$$
alors $(x_{u_1}(u),\dots,x_{u_m}(u))$ est une base de $T_{x(u)}S$ (Corollaire, formule (IX.7.1)). (poly, Corollaire IX.7.11, p. 161)

## CARD id=fc-ch09-049 ref=ch09-espace-tangent-graphe-equation tags=enonce,formule
### Q
Énoncer les deux formules pour $T_pS$ : cas d'un graphe et cas d'une équation.
### R
(a) Si $S=\{(u,f(u))\}$ est le graphe de $f : U\subset\mathbb R^m\to\mathbb R^{N-m}$, alors en $p=(u,f(u))$ : $T_pS=\{(h,df_u(h)),\ h\in\mathbb R^m\}$ (le graphe de $df_u$).
(b) Si $S=\{x\in\mathbb R^N\mid F(x)=0\}$ où $0$ est **valeur régulière** de $F$, alors pour tout $p\in S$ : $T_pS=\ker dF_p$.

(poly, Proposition IX.7.13, p. 162)

## CARD id=fc-ch09-050 ref=ch09-espace-tangent-graphe-equation tags=hypothese,contre-exemple
### Q
Pour $S=F^{-1}(0)$, quelle inclusion entre $T_pS$ et $\ker dF_p$ est toujours vraie ? Que faut-il pour l'égalité ?
### R
$T_pS\subset\ker dF_p$ est **toujours** vraie : $F$ est constante sur $S$, donc $dF_p(\alpha'(0))=(F\circ\alpha)'(0)=0$. L'égalité demande que $dF_p$ soit **surjective** (comparaison des dimensions $N-(N-m)=m$). Pour le cône $F=x^2+y^2-z^2$, $\ker dF_0=\mathbb R^3$ alors que « $T_0C$ » n'est pas un espace vectoriel. (poly, Proposition IX.7.13, p. 162)

## CARD id=fc-ch09-051 ref=ch09-espace-tangent-graphe-equation tags=formule
### Q
Espace tangent à la sphère $\mathbb S^n$ en $x$.
### R
$T_x\mathbb S^n=\ker d(\|\cdot\|^2)_x=\{v\in\mathbb R^{n+1}\mid\langle x,v\rangle=0\}=x^\perp$, de dimension $n$ (Proposition IX.7.13 appliquée à l'Exemple IX.4.2). Plus généralement, si $S=\{F=0\}$ avec $0$ régulière, $T_pS=\bigcap_i\ker d(F_i)_p=\{\nabla F_i(p)\}^\perp$.

## CARD id=fc-ch09-052 ref=ch09-differentielle-entre-sous-varietes-def tags=definition
### Q
Définir la différentielle $d\varphi_p : T_pS_1\to T_{\varphi(p)}S_2$ d'une application différentiable entre sous-variétés.
### R
C'est l'application linéaire caractérisée par l'une des propriétés : (1) si $\vec v=dx_q(\vec w)$ pour un paramétrage $x$ de $S_1$ en $p$, $x(q)=p$, alors $d\varphi_p(\vec v)=d(\varphi\circ x)_q(\vec w)$ ; (2) si $\vec v=\alpha'(0)$ pour une courbe $C^1$ $\alpha : I\to S_1$, $\alpha(0)=p$, alors $d\varphi_p(\vec v)=\beta'(0)$ avec $\beta=\varphi\circ\alpha$. (poly, Définition IX.7.15, p. 163) La valeur ne dépend ni de $\alpha$ ni de $x$.

## CARD id=fc-ch09-053 ref=ch09-remarques-differentielle-cas-euclidien tags=formule
### Q
Quelles formules pour $d\varphi_p$ quand $S_2=\mathbb R^{N_2}$ (restriction d'une fonction ambiante, développement dans une carte) ?
### R
Si $\varphi$ est la restriction à $S_1$ d'une fonction différentiable $F$ définie sur un voisinage ouvert de $S_1$, alors $d\varphi_p=dF_p{}_{|T_pS_1}$. Si $S_1$ est un ouvert de $\mathbb R^N$, $T_pS_1=\mathbb R^N$ et on retrouve $d\varphi$ usuelle. Pour un paramétrage $x$ avec $x(q)=p$ : $\varphi(x(q+h))=\varphi(p)+d\varphi_p(dx_q(h))+o(h)$. (poly, Remarques IX.7.16, p. 163)

## CARD id=fc-ch09-054 ref=ch09-composition-differentielles tags=enonce,formule
### Q
Énoncer la formule de composition des différentielles entre sous-variétés.
### R
Si $\varphi_1 : S_1\to S_2$ est différentiable en $p$ et $\varphi_2 : S_2\to S_3$ différentiable en $\varphi_1(p)$, alors $\varphi_2\circ\varphi_1$ est différentiable en $p$ et
$$d(\varphi_2\circ\varphi_1)_p=d(\varphi_2)_{\varphi_1(p)}\circ d(\varphi_1)_p.$$
(poly, Proposition IX.7.17, p. 163)

## CARD id=fc-ch09-055 ref=ch09-ex-fonction-hauteur tags=formule
### Q
Fonction hauteur sur $S$ : définition et différentielle.
### R
Pour un hyperplan $P\ni p_0$ de normale unitaire $a$, $h : S\to\mathbb R$, $h(p)=\langle p-p_0,a\rangle$ (restriction d'une fonction $C^\infty$ de $\mathbb R^N$). Alors $dh_p : T_pS\to\mathbb R$, $v\mapsto\langle v,a\rangle$. Ainsi $p$ est critique pour $h$ si et seulement si $a\perp T_pS$. (poly, Exemple IX.7.20, p. 164)

## CARD id=fc-ch09-056 ref=ch09-ex-distance-carre tags=formule
### Q
Fonction distance au carré sur $S$ : définition et différentielle.
### R
Pour $p_0\in\mathbb R^N$, $f : S\to\mathbb R$, $f(p)=\|p-p_0\|^2$ ; alors $df_p : T_pS\to\mathbb R$, $v\mapsto2\langle v,p-p_0\rangle$. Un point critique de $f$ est donc un point $p$ où $p-p_0\perp T_pS$ (la droite $(p_0p)$ est normale à $S$). (poly, Exemple IX.7.21, p. 164)

## CARD id=fc-ch09-057 ref=ch09-diffeomorphisme-sous-varietes-def tags=definition
### Q
Définir un $C^k$-difféomorphisme entre sous-variétés.
### R
Une application $\varphi : S_1\to S_2$ est un **$C^k$-difféomorphisme** si c'est un homéomorphisme tel que $\varphi$ et $\varphi^{-1}$ soient de classe $C^k$ ($S_1,S_2$ de classe au moins $C^k$) ; $S_1$ et $S_2$ sont alors dits $C^k$-difféomorphes. Une bijection $C^k$ n'est pas forcément un difféomorphisme : $t\mapsto t^3$ sur $\mathbb R$. (poly, Définition IX.7.24, p. 165)

## CARD id=fc-ch09-058 ref=ch09-differentielle-diffeomorphisme-isomorphisme tags=enonce,contre-exemple
### Q
Que dit $d\varphi_p$ pour un difféomorphisme entre sous-variétés ? La réciproque est-elle vraie ?
### R
Si $\varphi : S_1\to S_2$ est un difféomorphisme, $d\varphi_p : T_pS_1\to T_{\varphi(p)}S_2$ est un **isomorphisme** d'inverse $d(\varphi^{-1})_{\varphi(p)}$ ; en particulier $\dim S_1=\dim S_2$. (poly, Proposition IX.7.25, p. 165) Réciproque fausse globalement : $t\mapsto e^{it}$ de $\mathbb R$ sur $\mathbb S^1$ a $d\varphi$ isomorphisme partout sans être injective.

## CARD id=fc-ch09-059 ref=ch09-inversion-locale-sous-varietes tags=enonce
### Q
Énoncer le théorème d'inversion locale sur les sous-variétés.
### R
Soient $S_1,S_2$ des sous-variétés de classe au moins $C^k$, $p\in S_1$, $\varphi : S_1\to S_2$ de classe $C^k$ telle que $d\varphi_p : T_pS_1\to T_{\varphi(p)}S_2$ soit un **isomorphisme linéaire**. Alors il existe un voisinage ouvert $V_1$ de $p$ dans $S_1$ et un voisinage ouvert $V_2$ de $\varphi(p)$ dans $S_2$ tels que $\varphi(V_1)=V_2$ et $\varphi_{|V_1}$ soit un $C^k$-difféomorphisme de $V_1$ sur $V_2$. (poly, Théorème IX.7.26, p. 166)

## CARD id=fc-ch09-060 ref=ch09-inversion-locale-sous-varietes tags=hypothese,contre-exemple
### Q
Dans l'inversion locale sur les sous-variétés, que se passe-t-il si $d\varphi_p$ est seulement injective ? Le résultat est-il global ?
### R
Si $d\varphi_p$ est seulement injective ($\dim S_1<\dim S_2$), on obtient une immersion (Proposition IX.7.29 (2)), pas un difféomorphisme local ; l'hypothèse impose $\dim S_1=\dim S_2$. Le résultat est **local** : $t\mapsto(\cos t,\sin t)$ de $\mathbb R$ dans $\mathbb S^1$ est un difféomorphisme local en tout point sans être injective. (poly, Théorème IX.7.26, p. 166)

## CARD id=fc-ch09-061 ref=ch09-inversion-locale-sous-varietes tags=methode
### Q
Comment se démontre l'inversion locale sur les sous-variétés ?
### R
On lit $\varphi$ dans des cartes : $\tilde\varphi=x_2^{-1}\circ\varphi\circ x_1$ est $C^k$ entre ouverts de $\mathbb R^m$ avec $d\tilde\varphi_q$ inversible (car $d\varphi_p$ est un isomorphisme et $dx_1,dx_2$ des isomorphismes sur $T_pS_i$). On applique l'inversion locale usuelle ([[ch06-inversion-locale]]) à $\tilde\varphi$ puis on revient par $x_1,x_2$. Principe général : on transporte un théorème du calcul différentiel par un paramétrage. (poly, p. 166)

## CARD id=fc-ch09-062 ref=ch09-graphe-au-dessus-du-plan-tangent tags=enonce
### Q
Énoncer le corollaire « une sous-variété est localement un graphe au-dessus de son plan tangent ».
### R
Soit $S$ de dimension $m$ et $p\in S$ ; soit $P$ le sous-espace affine passant par $p$ et parallèle à $T_pS$. Il existe un voisinage ouvert $W$ de $p$ dans $S$, un voisinage ouvert $V$ de $p$ dans $P$, un sous-espace vectoriel $H$ de dimension $N-m$ (on peut prendre $H=(T_pS)^\perp$) et une fonction différentiable $h : V\to H$ tels que $W$ est le graphe de $h$, en identifiant $\mathbb R^N=T_pS\oplus H$. Preuve : la projection orthogonale $f : S\to P$ vérifie $df_p=\mathrm{Id}_{T_pS}$, donc l'inversion locale IX.7.26 donne un inverse local $g$, et $h(u)=\pi(g(u)-p)$ où $\pi$ est la projection orthogonale sur $H$. (poly, Corollaire IX.7.27, p. 166)

## CARD id=fc-ch09-063 ref=ch09-immersion-submersion-sous-varietes-def tags=definition
### Q
Définir une immersion / submersion $\varphi : S_1\to S_2$ entre sous-variétés.
### R
$\varphi$ de classe $C^k$ est une **immersion** (resp. **submersion**) en $p\in S_1$ si $d\varphi_p : T_pS_1\to T_{\varphi(p)}S_2$ est injective (resp. surjective) ; c'est une immersion (resp. submersion) si c'est le cas en tout point. (poly, Définition IX.7.28, p. 167)

## CARD id=fc-ch09-064 ref=ch09-fibres-submersion-image-immersion tags=enonce
### Q
Énoncer la proposition sur les fibres d'une submersion et l'image d'une immersion entre sous-variétés.
### R
Soient $S_1,S_2$ des sous-variétés et $\varphi : S_1\to S_2$ de classe $C^k$, $p\in S_1$.
1. Si $\varphi$ est une submersion en $p$, il existe un voisinage $W_1$ de $p$ dans $S_1$ tel que $W_1\cap\varphi^{-1}(\{\varphi(p)\})$ soit une sous-variété de $\mathbb R^{N_1}$ incluse dans $S_1$ (de dimension $\dim S_1-\dim S_2$ d'après la preuve).
2. Si $\varphi$ est une immersion en $p$, il existe un voisinage $W_1$ de $p$ dans $S_1$ tel que $\varphi(W_1)$ soit une sous-variété de $\mathbb R^{N_2}$ incluse dans $S_2$ (de dimension $\dim S_1$ d'après la preuve).

(poly, Proposition IX.7.29, p. 167)

## CARD id=fc-ch09-065 ref=ch09-fibres-submersion-image-immersion tags=methode
### Q
Piège dans la preuve de IX.7.29 (1) : pourquoi ne peut-on pas appliquer directement IX.4.1 ?
### R
La Proposition IX.4.1 s'applique à une application définie sur un **ouvert** de $\mathbb R^N$. Redresser le but ($S_2=(\mathbb R^{m_2}\times\{0\})\cap V_2$, IX.3.1) ne suffit pas : il faut aussi passer en carte à la source. Avec $x_1$ un paramétrage de $S_1$ en $p$ et $p_1$ la projection de $\mathbb R^{N_2}$ sur $\mathbb R^{m_2}$, on pose $\theta=p_1\circ\varphi\circ x_1$, définie sur un ouvert de $\mathbb R^{m_1}$, de différentielle surjective en $q_1$ ; on applique IX.4.1 à $\theta$, puis on renvoie par $x_1$ (Exemple IX.2.9). (poly, Proposition IX.7.29, p. 167)

## CARD id=fc-ch09-066 ref=ch09-differentielle-nulle-constante tags=enonce
### Q
Énoncer : différentielle nulle sur une sous-variété connexe.
### R
Soient $S_1,S_2$ des sous-variétés avec $S_1$ **connexe** et $f : S_1\to S_2$ différentiable telle que $df_p=0$ pour tout $p\in S_1$. Alors $f$ est constante. (poly, Théorème IX.7.30, p. 167)

## CARD id=fc-ch09-067 ref=ch09-differentielle-nulle-constante tags=hypothese,contre-exemple
### Q
Pourquoi la connexité de $S_1$ est-elle nécessaire dans IX.7.30 ?
### R
Sur l'hyperboloïde à deux nappes (non connexe), la fonction valant $0$ sur une nappe et $1$ sur l'autre a $df=0$ partout sans être constante. On passe du local au global par connexité (deux points sont reliés par un arc $C^1$, Exercice IX.9.12). (poly, Théorème IX.7.30, p. 167)

## CARD id=fc-ch09-068 ref=ch09-extremum-local-differentielle-nulle tags=enonce
### Q
Énoncer : extremum local d'une fonction sur une sous-variété.
### R
Soit $S$ une sous-variété de dimension $m$ de $\mathbb R^N$ et $f : S\to\mathbb R$ différentiable. Si $p$ est un point d'extremum local de $f$, alors $df_p=0$ sur $T_pS$ (c'est-à-dire $p$ est un point critique de $f$). (poly, Théorème IX.7.31, p. 168)

## CARD id=fc-ch09-069 ref=ch09-extremum-local-differentielle-nulle tags=hypothese,contre-exemple
### Q
Dans IX.7.31, la condition est-elle suffisante ? Et si $S$ a un bord ?
### R
Non, seulement **nécessaire** : un point selle (col) du tore pour la fonction hauteur est critique sans être un extremum. Pour un ensemble à bord comme $[0;+\infty[$, l'extremum peut être au bord sans que la dérivée s'annule ; la Définition IX.2.1 exclut les bords. (poly, Théorème IX.7.31, p. 168)

## CARD id=fc-ch09-070 ref=ch09-extremum-local-differentielle-nulle tags=methode
### Q
Preuve de IX.7.31 : comment se ramène-t-on au cas usuel ?
### R
On lit $f$ dans un paramétrage $x$ en $p$ : $f\circ x$ a un extremum local en $q=x^{-1}(p)$, donc $d(f\circ x)_q=0$ (calcul différentiel usuel). Or $d(f\circ x)_q=df_p\circ dx_q$ et $dx_q(\mathbb R^m)=T_pS$ (Proposition IX.7.9), d'où $df_p=0$ sur $T_pS$.

## CARD id=fc-ch09-071 ref=ch09-point-critique-sous-variete-def tags=definition
### Q
Définir point critique de $\varphi : S_1\to S_2$, et le cas d'une fonction $f : S\to\mathbb R$.
### R
$p\in S_1$ est un **point critique** de $\varphi$ si $d\varphi_p : T_pS_1\to T_{\varphi(p)}S_2$ n'est pas surjective. Pour $f : S\to\mathbb R$ : $p$ est critique si et seulement si $df_p=0$ (sur $T_pS$). On définit comme en IX.1.3 les points réguliers, valeurs critiques et valeurs régulières. (poly, Définition IX.7.32, p. 168)

## CARD id=fc-ch09-072 ref=ch09-ex-point-critique-restriction tags=enonce,formule
### Q
Point critique de la restriction $f=g_{|S}$ : condition ? Piège ?
### R
Si $g$ est différentiable sur un ouvert de $\mathbb R^N$ contenant $S$, $p\in S$ est critique pour $f=g_{|S}$ si et seulement si $dg_p(T_pS)=0$, i.e. $T_pS\subset\ker dg_p$ (le gradient $\nabla g(p)\perp T_pS$). Pas besoin que $dg_p=0$ : pour $g=\|x\|^2$ sur la sphère, $f$ est constante (tout point est critique) alors que $dg_p=2\langle p,\cdot\rangle\neq0$. (poly, Exemple IX.7.33, p. 168)

## CARD id=fc-ch09-073 ref=ch09-multiplicateurs-lagrange tags=enonce
### Q
Énoncer la proposition des multiplicateurs de Lagrange.
### R
Soit $F=(F_1,\dots,F_{N-m}) : V\to\mathbb R^{N-m}$ de classe $C^k$ sur un ouvert $V$ de $\mathbb R^N$ dont $0$ est valeur régulière, et $S=\{x\in V\mid F(x)=0\}$ (sous-variété de dimension $m$). Soit $g : V\to\mathbb R$ différentiable et $f=g_{|S}$. Alors $p\in S$ est un point critique de $f$ ($df_p=0$) si et seulement s'il existe des réels $w_1,\dots,w_{N-m}$ tels que
$$dg_p=w_1\,d(F_1)_p+\dots+w_{N-m}\,d(F_{N-m})_p.$$
Les $w_i$ sont les **multiplicateurs de Lagrange**. (poly, Proposition IX.7.35, p. 168)

## CARD id=fc-ch09-074 ref=ch09-multiplicateurs-lagrange tags=hypothese,contre-exemple
### Q
Dans Lagrange, que se passe-t-il si $0$ n'est pas valeur régulière de $F$ ? La condition est-elle suffisante ?
### R
La condition peut échouer : minimiser $g(x,y)=x$ sous $F(x,y)=y^2-x^3=0$ (cusp) : le minimum est en $(0,0)$ où $dF=0$, mais $dg=dx\neq w\,dF=0$. Et la condition n'est que **nécessaire** pour un extremum : les points de Lagrange sont des points critiques, pas tous des extrema (cols). (poly, Proposition IX.7.35, p. 168)

## CARD id=fc-ch09-075 ref=ch09-multiplicateurs-lagrange tags=methode
### Q
Preuve de Lagrange (IX.7.35) : quelles sont les deux étapes ?
### R
(1) $T_pS=\ker dF_p$ (Proposition IX.7.13), donc $p$ critique $\iff\ker dF_p\subset\ker dg_p$. (2) $\ker dF_p=\bigcap_i\ker d(F_i)_p$ et un résultat d'algèbre linéaire : une forme linéaire $dg_p$ qui s'annule sur l'intersection des noyaux de formes $d(F_i)_p$ est combinaison linéaire de celles-ci. (poly, p. 168-169)

## CARD id=fc-ch09-076 ref=ch09-multiplicateurs-lagrange tags=methode
### Q
Méthode : chercher les extrema d'une fonction $g$ sur une sous-variété $S=\{F=0\}$.
### R
(1) Vérifier que $0$ est valeur régulière de $F$ (ou la fibre est bien une sous-variété). (2) **Existence** : si $S$ est compacte, $g$ continue atteint ses extrema ; Lagrange seul ne prouve jamais l'existence. (3) **Localisation** : résoudre $dg_p=\sum w_i\,d(F_i)_p$ avec $F(p)=0$. (4) Comparer les valeurs de $g$ aux points trouvés. (poly, Proposition IX.7.35 et exercices IX.7.36-IX.9.15)

## CARD id=fc-ch09-077 ref=ch09-changement-parametrage-differentielle-seconde tags=formule
### Q
Formule (IX.7.2) : comment la différentielle seconde de $f\circ x$ change-t-elle quand on change de paramétrage ?
### R
Si $x_1=x\circ h$ avec $h : U_1\to U$ difféomorphisme et $p=x_1(q_1)=x(q)$ :
$$d^2(f\circ x_1)_{q_1}=d(f\circ x)_q\circ d^2h_{q_1}+d^2(f\circ x)_q(dh_{q_1},dh_{q_1}).$$
Le premier terme dépend du paramétrage ; il disparaît si $df_p=0$, ce qui permet de définir la hessienne (IX.7.3, IX.7.4). Exemple : sur $\mathbb R$, $f(x)=x$, $x(u)=u$ et $x_1(u)=u+u^2$ donnent $d^2(f\circ x)=0$ et $d^2(f\circ x_1)=2$. (poly, Formule IX.7.2, p. 170)

## CARD id=fc-ch09-078 ref=ch09-hessienne-def tags=definition,formule
### Q
Définir la hessienne $d^2f_p$ d'une fonction $f : S\to\mathbb R$ de classe $C^2$ en un point critique $p$.
### R
Pour $v,w\in T_pS$ :
$$d^2f_p(v,w)=d^2(f\circ x)_q\big(d(x^{-1})_p(v),d(x^{-1})_p(w)\big),$$
où $x$ est un paramétrage local en $p$ et $q=x^{-1}(p)$. Elle est **indépendante du paramétrage** (seulement parce que $p$ est critique) et c'est une forme bilinéaire symétrique sur $T_pS$. (poly, Définition IX.7.38, p. 170)

## CARD id=fc-ch09-079 ref=ch09-hessienne-def tags=hypothese,contre-exemple
### Q
Pour $f=g_{|S}$, a-t-on $d^2f_p=d^2g_p{}_{|T_pS}$ ?
### R
Non en général : il faut ajouter un terme de courbure, $d^2f_p(v,v)=d^2g_p(v,v)+dg_p(\alpha''(0))$ pour une courbe $\alpha$ de $S$ avec $\alpha(0)=p$, $\alpha'(0)=v$ (Exercice IX.7.39). Égalité seulement si $dg_p=0$. (poly, Définition IX.7.38, p. 170)

## CARD id=fc-ch09-080 ref=ch09-hessienne-extrema-ordre-deux tags=enonce
### Q
Énoncer le critère du second ordre pour un point critique $p$ d'une fonction $f : S\to\mathbb R$ de classe $C^2$.
### R
Si $f$ a un maximum (resp. minimum) local en $p$, alors $d^2f_p$ est négative (resp. positive). Inversement, si $d^2f_p$ est définie négative (resp. définie positive), $f$ admet un maximum (resp. minimum) local isolé en $p$. (poly, section IX.7.6, p. 171)

## CARD id=fc-ch09-081 ref=ch09-hessienne-extrema-ordre-deux tags=contre-exemple
### Q
La hessienne positive en un point critique garantit-elle un minimum ? Hessienne nulle et minimum ?
### R
Non : $f(u)=u^3$ en $0$ (hessienne nulle, pas d'extremum) ; $f(u_1,u_2)=u_1^2-u_2^4$ en $0$ (hessienne positive, c'est un col). Inversement $f(u)=u^4$ a un minimum en $0$ avec hessienne nulle. (poly, section IX.7.6, p. 171) Il faut « définie » pour la réciproque.

## CARD id=fc-ch09-082 ref=ch09-lemme-morse-sous-variete tags=enonce
### Q
Énoncer le lemme de Morse sur une sous-variété.
### R
Soit $S$ une sous-variété de dimension $m$ de classe $C^\infty$, $f : S\to\mathbb R$ de classe $C^\infty$ et $p$ un point critique de $f$ où la hessienne $d^2f_p$ est **non dégénérée**, de signature $(r,s)$, $r+s=m$. Alors il existe un paramétrage local $x : U\to S$ avec $0\in U$, $x(0)=p$ tel que
$$f(x(u))=f(p)+\sum_{i=1}^ru_i^2-\sum_{i=r+1}^mu_i^2.$$
(poly, Remarque IX.7.40, p. 171)

## CARD id=fc-ch09-083 ref=ch09-courbe-integrale-reste-dans-sous-variete-fermee tags=enonce
### Q
Énoncer la proposition « une courbe intégrale d'un champ tangent à une sous-variété fermée y reste ».
### R
Soit $S$ une sous-variété **fermée** de $\mathbb R^N$ et $X : I\times U\to\mathbb R^N$ un champ (continu, localement lipschitzien en la seconde variable, conditions de [[ch07-existence-flot-local|VII.2.12]]) sur $I\times U$ où $U$ est un ouvert de $\mathbb R^N$ contenant $S$ et $I$ un intervalle ouvert contenant $0$. Si $X(t,x)\in T_xS$ pour tout $t\in I$ et $x\in S$, et si $\gamma$ est une courbe intégrale de $X$ sur $]a;b[\ni0$ avec $\gamma(0)\in S$, alors $\gamma(t)\in S$ pour tout $t\in]a;b[$. (poly, Proposition IX.8.1, p. 172)

## CARD id=fc-ch09-084 ref=ch09-courbe-integrale-reste-dans-sous-variete-fermee tags=hypothese,contre-exemple
### Q
Dans IX.8.1, pourquoi « fermée » est-elle indispensable ? Et l'unicité ?
### R
Sans fermeture : $S=(\mathbb R\times\{0\})\setminus\{(0,0)\}$, $X=(1,0)$ constant (tangent à $S$) : la courbe $\gamma(t)=(t-1,0)$ issue de $(-1,0)\in S$ passe par $(0,0)\notin S$ en $t=1$. Il faut aussi le caractère localement lipschitzien (unicité de Cauchy-Lipschitz) : sans unicité, une solution peut quitter $S$. (poly, Proposition IX.8.1, p. 172)

## CARD id=fc-ch09-085 ref=ch09-courbe-integrale-reste-dans-sous-variete-fermee tags=methode
### Q
Stratégie de preuve de la Proposition IX.8.1 (la courbe intégrale reste dans $S$).
### R
On pose $\tau=\sup\{t\mid\gamma([0;t])\subset S\}$. Si $\tau<b$, la fermeture de $S$ donne $\gamma(\tau)\in S$. On redresse $S$ au voisinage de $\gamma(\tau)$ par $\Phi$ (IX.3.1) ; le champ transporté $Y(t,\Phi(x))=d\Phi_x(X(t,x))$ est horizontal sur $\mathbb R^m\times\{0\}$, d'où une courbe intégrale restant dans $\mathbb R^m\times\{0\}$ ; par unicité de Cauchy-Lipschitz elle coïncide avec $\sigma=\Phi\circ\gamma$, ce qui contredit la maximalité de $\tau$. (poly, p. 172)

## CARD id=fc-ch09-086 ref=ch09-ex-champs-tangents-physique tags=enonce,formule
### Q
Deux applications de la Proposition IX.8.1 : conservation d'une sphère, champ hamiltonien.
### R
(1) Si $X(t,x)\perp x$ pour tout $(t,x)$, alors $\gamma(t)$ reste sur une sphère centrée en $0$. (2) Pour $H(q,p)$ de classe $C^1$ sur $\mathbb R^n\times\mathbb R^n$, $X_H=\big(\frac{\partial H}{\partial p},-\frac{\partial H}{\partial q}\big)$ vérifie $dH(X_H)=0$, donc est tangent aux hypersurfaces $H=c$ ($c$ valeur régulière) : l'énergie $H$ est conservée le long des trajectoires. (poly, Exemples IX.8.2, p. 172)

## CARD id=fc-ch09-087 ref=ch09-champ-tangent-courbe-integrale-flot-local-def tags=definition
### Q
Définir un champ de vecteurs tangents dépendant du temps sur $S$ et sa courbe intégrale.
### R
C'est une application continue $X : I\times S\to\mathbb R^N$ ($I$ intervalle ouvert) telle que $X(t,x)\in T_xS$ pour tous $t\in I$, $x\in S$. Une **courbe intégrale** de classe $C^p$ est $\alpha : J\to S$ de classe $C^p$, $J\subset I$ intervalle ouvert, avec $\alpha'(t)=X(t,\alpha(t))$ pour tout $t\in J$ ; de condition initiale $(t_0,x)$ si $\alpha(t_0)=x$. (poly, Définition IX.8.3, p. 173)

## CARD id=fc-ch09-088 ref=ch09-champ-tangent-courbe-integrale-flot-local-def tags=definition
### Q
Définir un flot local $(E(J,\epsilon),U,F)$ de $X$ en $(\tau_0,x_0)$.
### R
Donnée d'un voisinage ouvert $U$ de $x_0$ dans $S$, d'un intervalle ouvert $J\ni\tau_0$ et de $\epsilon>0$ tels que pour tous $t_0\in J$, $x\in U$ il existe une **unique** courbe intégrale $\alpha_{t_0,x}$ de condition initiale $(t_0,x)$ définie sur $]t_0-\epsilon,t_0+\epsilon[$. Avec $E=\{(t_0,t)\in J\times\mathbb R\mid t\in]t_0-\epsilon,t_0+\epsilon[\}$, $F : E\times U\to S$, $F(t_0,t,x)=\alpha_{t_0,x}(t)$. (poly, Définition IX.8.3, p. 173)

## CARD id=fc-ch09-089 ref=ch09-flot-local-sous-variete tags=enonce
### Q
Énoncer le théorème d'existence du flot local d'un champ tangent sur une sous-variété.
### R
Soit $X : I\times S\to\mathbb R^N$ un champ de vecteurs tangents dépendant du temps sur $S$, **localement lipschitzien en la seconde variable**, et $(\tau_0,x_0)\in I\times S$. Il existe un intervalle ouvert $J\ni\tau_0$, $\epsilon>0$ et un voisinage ouvert $U$ de $x_0$ dans $S$ définissant un flot local $(E(J,\epsilon),U,F)$. Si $X$ est $C^p$, $F$ aussi. **Unicité** : si $\gamma :]t_0-\epsilon',t_0+\epsilon'[\to S$, $\epsilon'\le\epsilon$, vérifie $\gamma'=X(t,\gamma)$ et $\gamma(t_0)=x$, alors $\gamma=F(t_0,\cdot,x)$. (poly, Théorème IX.8.5, p. 174)

## CARD id=fc-ch09-090 ref=ch09-flot-local-sous-variete tags=hypothese,contre-exemple
### Q
Que devient le théorème IX.8.5 sans le caractère lipschitzien ? Quelle est la différence de cadre avec IX.8.1 ?
### R
Sans lipschitz, l'unicité tombe en défaut (analogue de $x'=\sqrt{|x|}$ sur $S=\mathbb R$). Cadre : dans IX.8.5 le champ n'est défini que sur $I\times S$, donc toute courbe intégrale est automatiquement tracée sur $S$ ; dans IX.8.1 le champ est défini sur un ouvert ambiant $U\supset S$ et on **démontre** qu'une courbe intégrale ambiante issue de $S$ y reste (avec $S$ fermée). (poly, Théorème IX.8.5, p. 174)

## CARD id=fc-ch09-091 ref=ch09-courbe-integrale-maximale-sous-variete tags=definition
### Q
Définir la courbe intégrale maximale d'un champ tangent sur $S$ et l'intervalle de vie $J_{\tau_0}(x_0)$.
### R
$J_{\tau_0}(x_0)$ est la réunion de tous les intervalles ouverts $J\ni\tau_0$ portant une courbe intégrale de condition initiale $(\tau_0,x_0)$ (champ localement lipschitzien en la seconde variable). Il existe une unique courbe intégrale $\alpha_{\tau_0,x_0}$ de condition initiale $(\tau_0,x_0)$ définie sur $J_{\tau_0}(x_0)$ : la **courbe intégrale maximale**. (poly, section IX.8.1, p. 174, comme VII.3.3-VII.3.4)

## CARD id=fc-ch09-092 ref=ch09-flot-global-sous-variete-def tags=definition
### Q
Définir le flot global et son domaine de définition $D$.
### R
$D=\{(\tau_0,t,x_0)\in I\times I\times S\mid t\in J_{\tau_0}(x_0)\}$ et $F : D\to S$, $F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t)$ (courbe intégrale maximale). Cas autonome : $I=\mathbb R$, $\tau_0=0$, on note $J(x_0)$, $F(t,x_0)$ et $F_t\cdot x=F(t,x)$ ; $D_0=\{(t,x_0)\mid t\in J(x_0)\}$. (poly, Définition IX.8.7, p. 174)

## CARD id=fc-ch09-093 ref=ch09-flot-propriete-groupe tags=formule
### Q
Propriété de groupe du flot : formule dans le cas dépendant du temps et dans le cas autonome.
### R
Si $s$ et $s+t$ sont dans $J_{t_0}(x)$ : $F(t_0,s+t,x)=F(s,s+t,F(t_0,s,x))$ (théorème VII.3.7). Cas autonome : $F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x$ lorsque $(t,x)$ et $(s,F_t\cdot x)$ sont dans $D_0$. Les temps doivent être dans le domaine : sinon la formule n'a pas de sens. (poly, Formule (IX.8.3), p. 174)

## CARD id=fc-ch09-094 ref=ch09-flot-global-ouvert-regulier tags=enonce
### Q
Énoncer le théorème sur l'ouverture du domaine du flot global et sa régularité.
### R
Soit $X : I\times S\to\mathbb R^N$ un champ tangent dépendant du temps, localement lipschitzien en la seconde variable. Alors (a) $D$ est un ouvert de $I\times I\times S$ ; (b) si $X$ est de classe $C^p$, $F$ est de classe $C^p$ sur $D$. (poly, Théorème IX.8.8, p. 175)

## CARD id=fc-ch09-095 ref=ch09-flot-complet-compacte tags=enonce
### Q
Énoncer le théorème du flot complet sur une sous-variété compacte.
### R
Soit $X$ un champ de vecteurs tangents **indépendant du temps** et **lipschitzien** sur une sous-variété **compacte** $S$ de $\mathbb R^N$. Alors le domaine du flot global est $D_0=\mathbb R\times S$ : toutes les courbes intégrales sont définies sur $\mathbb R$ tout entier. (poly, Théorème IX.8.9, p. 175)

## CARD id=fc-ch09-096 ref=ch09-flot-complet-compacte tags=hypothese,contre-exemple
### Q
Dans IX.8.9, la compacité est-elle remplaçable par la fermeture ? Contre-exemples ?
### R
Non. $S=\mathbb R$ (fermée) et $X(x)=x^2$ : explosion en temps fini. $S=]0;1[$ et $X=1$ : sortie de $S$ en temps fini. C'est la compacité qui compte, via le lemme des bouts ([[ch07-lemme-des-bouts]]) : une courbe intégrale maximale qui reste dans un compact est définie sur $\mathbb R$. (poly, Théorème IX.8.9, p. 175)

## CARD id=fc-ch09-097 ref=ch09-flot-morphisme-groupes-diffeos tags=enonce
### Q
Énoncer le corollaire : le flot sur une compacte comme morphisme de groupes.
### R
Soit $X$ un champ tangent indépendant du temps, de classe $C^r$ ($r\ge1$), sur une sous-variété compacte $S$. Pour tout $t\in\mathbb R$, $F_t : x\mapsto F(t,x)$ est un difféomorphisme de classe $C^r$ de $S$, d'inverse $F_{-t}$, et $t\mapsto F_t$ est un morphisme de groupes de $(\mathbb R,+)$ dans $\mathrm{Diff}^r(S)$. (poly, Corollaire IX.8.10, p. 175) Preuve : $F_0=\mathrm{Id}$ et (IX.8.3) donnent $F_{-t}\circ F_t=F_0$.

## CARD id=fc-ch09-098 ref=none tags=notation
### Q
Que représentent $p_1$, $p_2$, $\Phi$, $\varphi$, $H$ dans les preuves de redressement du chapitre IX ?
### R
$p_1,p_2$ : projections canoniques de $\mathbb R^m\times\mathbb R^{N-m}$ sur $\mathbb R^m$ et $\mathbb R^{N-m}$. $\Phi : V'\to W$ : difféomorphisme de redressement, $\Phi=F^{-1}$ avec $F(u,t)=x(u)+\varphi(t)$. $H$ : supplémentaire de $dx_q(\mathbb R^m)$ dans $\mathbb R^N$ et $\varphi : \mathbb R^{N-m}\to H$ un isomorphisme linéaire. (poly, p. 151-153)

## CARD id=fc-ch09-099 ref=none tags=notation
### Q
Notations : $\mathrm{Graphe}(f)$, $f^{-1}(\{a\})$, $\mathbb S^n$, $\mathbb T^2$.
### R
$\mathrm{Graphe}(f)=\{(u,f(u)),\ u\in U\}$ pour $f : U\subset\mathbb R^m\to\mathbb R^{N-m}$ ; $f^{-1}(\{a\})$ : fibre (image réciproque) de $a$ ; $\mathbb S^n=\{x\in\mathbb R^{n+1}\mid\|x\|^2=1\}$ sphère unité ; $\mathbb T^2$ : tore $(\sqrt{x^2+y^2}-a)^2+z^2=r^2$ avec $a=2$, $r=1$. (poly, p. 153-156)

## CARD id=fc-ch09-100 ref=none tags=notation
### Q
Notations : $q=x^{-1}(p)$, $x_2^{-1}\circ\varphi\circ x_1$, $f\circ x$.
### R
$q=x^{-1}(p)\in U$ est le point de l'ouvert de paramètres correspondant à $p\in S$. $f\circ x : U\to\mathbb R$ est la lecture de $f : S\to\mathbb R$ dans le paramétrage ; $x_2^{-1}\circ\varphi\circ x_1$ est la lecture de $\varphi : S_1\to S_2$ dans des cartes (définie sur $x_1^{-1}(\varphi^{-1}(x_2(U_2))\cap x_1(U_1))$). (poly, p. 159-160)

## CARD id=fc-ch09-101 ref=none tags=notation
### Q
Notations du flot autonome : $J(x_0)$, $F_t\cdot x$, $D_0$, $\mathrm{Diff}^r(S)$.
### R
$J(x_0)=J_0(x_0)$ : intervalle de vie maximal ; $F_t\cdot x=F(t,x)$ ; $D_0=\{(t,x_0)\mid t\in J(x_0)\}$ domaine du flot ; $\mathrm{Diff}^r(S)$ : groupe des difféomorphismes de classe $C^r$ de $S$. (poly, p. 174-175)

## CARD id=fc-ch09-102 ref=none tags=notation
### Q
Que signifient $\mathbb N^\times$, $k=\infty$ et la dimension / codimension dans le chapitre IX ?
### R
$\mathbb N^\times$ : entiers $\ge1$. La classe d'une sous-variété est $k\in\mathbb N^\times\cup\{\infty\}$ ($k\ge1$ toujours). $m=\dim S$ ; $N$ : dimension de l'espace ambiant ; $N-m$ : codimension, souvent le nombre d'équations $\Psi=0$ avec $\Psi : V\to\mathbb R^{N-m}$. (poly, Définition IX.2.1, p. 148)

## CARD id=fc-ch09-103 ref=none tags=methode
### Q
Méthode : montrer qu'un ensemble $S\subset\mathbb R^N$ **est** une sous-variété. Quels outils ?
### R
Au choix (tous locaux, donc suffisent point par point) : (a) **équation** : $S=F^{-1}(0)$ avec $dF_p$ surjective en tout point de $S$ (IX.4.1, IX.4.5) ; (b) **graphe** (à permutation des coordonnées près) d'une fonction $C^k$ (IX.5.1, IX.5.2) ; (c) **paramétrage** vérifiant les trois conditions de IX.2.1, ou image locale d'une immersion (IX.1.2) ; (d) **redressement** par un difféomorphisme (IX.3.1). L'outil (a) est le plus rapide en pratique. (poly, chapitre IX, sections 2 à 5)

## CARD id=fc-ch09-104 ref=none tags=methode
### Q
Méthode : montrer qu'un ensemble **n'est pas** une sous-variété.
### R
Il n'y a pas de critère direct par IX.4.1 (non réciproque). Arguments : (1) retirer un point et **compter les composantes connexes** du voisinage (demi-droite, croix : Exemples IX.2.11-IX.2.12) ; (2) l'ensemble des vecteurs tangents par les courbes n'est pas un espace vectoriel (cône) ; (3) dimension locale incompatible ; (4) point multiple ou accumulation (IX.2.14-IX.2.15). (poly, chapitre IX, Section IX.2 et Exercice IX.7.12)

## CARD id=fc-ch09-105 ref=none tags=methode
### Q
Méthode : calculer l'espace tangent $T_pS$.
### R
Selon la description de $S$ : paramétrage $x$ : $T_pS=dx_q(\mathbb R^m)=\mathrm{Vect}(x_{u_1}(q),\dots,x_{u_m}(q))$ ; équation $S=\{F=0\}$ avec $0$ régulière : $T_pS=\ker dF_p$ (vecteurs orthogonaux aux gradients $\nabla F_i(p)$) ; graphe de $f$ : $T_pS=\{(h,df_u(h))\}$ ; courbes : vitesses $\alpha'(0)$. (poly, Propositions IX.7.9, IX.7.13)

## CARD id=fc-ch09-106 ref=none tags=methode
### Q
Méthode : définir ou calculer $d\varphi_p$ pour $\varphi : S_1\to S_2$ sans paramétrage explicite.
### R
Si $\varphi$ est la restriction d'une fonction ambiante $F$ : $d\varphi_p=dF_p$ restreinte à $T_pS_1$. Sinon prendre une courbe $\alpha$ avec $\alpha(0)=p$, $\alpha'(0)=\vec v$ et dériver $\beta=\varphi\circ\alpha$ en $0$ (Définition IX.7.15). Pour une propriété « différentiable / $C^r$ », on lit dans les cartes : $x_2^{-1}\circ\varphi\circ x_1$. (poly, Définition IX.7.15 et Remarques IX.7.16)

## CARD id=fc-ch09-107 ref=none tags=methode
### Q
Méthode : prouver qu'une quantité est conservée le long d'une courbe intégrale (type IX.8.1 / IX.8.2).
### R
Montrer que le champ $X$ est tangent à la sous-variété $S=\{Q=c\}$ (c'est-à-dire $dQ(X)=0$, avec $c$ valeur régulière de $Q$) : si $S$ est fermée, toute courbe intégrale issue d'un point de $S$ y reste (Proposition IX.8.1). Exemples : $\langle X(t,x),x\rangle=0$ (norme conservée), $dH(X_H)=0$ (énergie), $\langle\Omega\wedge M,M\rangle=0$ (norme de $M$ conservée). (poly, Exemples IX.8.2)
