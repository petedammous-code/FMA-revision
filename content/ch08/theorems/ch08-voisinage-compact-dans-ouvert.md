---
id: ch08-voisinage-compact-dans-ouvert
type: lemma
chapter: 8
title: "Un compact inclus dans un ouvert possède un $\epsilon$-voisinage inclus dans l'ouvert"
ref: "Question 8, p. 144 (non numérotée, section VIII)"
page: 144
importance: 2
depends: []
tags: [topologie, compact, ouvert, distance, epsilon-voisinage]
---
## Intuition

> 💡 Un compact $K$ posé à l'intérieur d'un ouvert $\mathcal U$ ne peut pas « toucher » le bord de $\mathcal U$ : il en reste à une distance **strictement positive** $\delta$. On peut donc l'épaissir d'un $\epsilon<\delta$ dans toutes les directions sans sortir de $\mathcal U$.

Image mentale : une courbe fermée dessinée à l'intérieur d'une région ouverte du plan ; on la remplace par un tube d'épaisseur $\epsilon$ autour d'elle. Si $\epsilon$ est assez petit, le tube reste dans la région. C'est faux pour un ensemble non compact qui « s'approche du bord à l'infini » (voir H1).

Notations : $(X,d)$ est un **espace métrique**, $B(x,\epsilon)=\{y\in X:d(x,y)<\epsilon\}$ la boule ouverte, et pour $K\subset X$ et $\epsilon>0$,
$$
K_\epsilon=\bigcup_{x\in K}B(x,\epsilon)
$$
est l'ensemble des points à distance $<\epsilon$ d'au moins un point de $K$ (l'« $\epsilon$-voisinage » de $K$). Un sous-ensemble $K$ de $X$ est **compact** si toute suite de $K$ admet une sous-suite convergeant dans $K$ (Bolzano–Weierstrass ; dans $\R^n$ ou un espace vectoriel normé de dimension finie : fermé et borné).

## Énoncé

**Lemme (poly, Question 8, p. 144).** Soient $K$ et $\mathcal U$ respectivement un compact et un ouvert d'un espace métrique $(X,d)$, avec $K\subset\mathcal U$. Alors, pour $\epsilon>0$ assez petit, $K_\epsilon\subset\mathcal U$.

Plus précisément, si le complémentaire $F=X\setminus\mathcal U$ est non vide (le cas $\mathcal U=X$ étant trivial), l'inf de la fonction
$$
d:K\times F\to\R,\qquad (x,y)\mapsto d(x,y)
$$
est strictement positif ; notons-le $\delta$ (avec $\delta=+\infty$ si $K=\emptyset$). Alors $K_\epsilon\subset\mathcal U$ pour tout $\epsilon$ tel que $0<\epsilon\le\delta$.

## Hypothèses

### H1 — $K$ est compact

**Rôle.** C'est elle qui permet, dans le raisonnement par l'absurde, d'extraire de $(x_n)$ une sous-suite convergeant **dans $K$**.

**Si on la retire.** *Fermé ne suffit pas.* Dans $X=\R^2$, prenons $K=\{(x,0):x\in\R\}$ (fermé, non borné) et $\mathcal U=\{(x,y):\abs y<e^{-x^2}\}$, ouvert comme image réciproque de $]0,+\infty[$ par l'application continue $(x,y)\mapsto e^{-x^2}-\abs y$. On a $K\subset\mathcal U$ car $e^{-x^2}>0$. Mais pour tout $\epsilon>0$, en choisissant $x$ avec $e^{-x^2}<\epsilon$, le point $(x,e^{-x^2})$ est dans $F$ et à distance $e^{-x^2}<\epsilon$ de $(x,0)\in K$ : il est dans $K_\epsilon$ sans être dans $\mathcal U$. Ici $\inf_{K\times F}d=0$.
*Borné ne suffit pas.* Dans $X=\R$, $K=]0,1]$ et $\mathcal U=]0,2[$ : pour tout $\epsilon>0$, $K_\epsilon=]-\epsilon,1+\epsilon[$ contient $0\notin\mathcal U$.

### H2 — $\mathcal U$ est ouvert

**Rôle.** Elle assure que $F=X\setminus\mathcal U$ est **fermé**, donc que la limite d'une suite de points de $F$ reste dans $F$.

**Si on la retire.** $X=\R$, $K=\mathcal U=\{0\}$ : $K$ est compact, $K\subset\mathcal U$, mais $K_\epsilon=]-\epsilon,\epsilon[\not\subset\mathcal U$ pour tout $\epsilon>0$. Même chose avec $K=\mathcal U=[0,1]$.

### H3 — $F\neq\emptyset$

**Rôle.** Hypothèse de confort : elle sert seulement à ce que l'inf soit pris sur un ensemble non vide.

**Si on la retire.** Si $F=\emptyset$, alors $\mathcal U=X$ et $K_\epsilon\subset X=\mathcal U$ pour tout $\epsilon$ : la conclusion est triviale.

## Idée de la preuve

Si l'inf était nul, on aurait $x_n\in K$, $y_n\in F$ de plus en plus proches ; la compacité de $K$ fournit une sous-suite $x_{\varphi(n)}\to x\in K$, donc $y_{\varphi(n)}\to x$, et $x\in F$ car $F$ est fermé : contradiction avec $K\cap F=\emptyset$. Ensuite, un point à distance $<\delta$ de $K$ ne peut pas être dans $F$.

## Preuve

Si $F=\emptyset$, $\mathcal U=X$ et il n'y a rien à montrer. Si $K=\emptyset$, $K_\epsilon=\emptyset\subset\mathcal U$. On suppose donc $K$ et $F$ non vides, et l'on note $\delta=\inf\{d(x,y):x\in K,\ y\in F\}\in[0,+\infty[$.

*Étape 1 : $\delta>0$.* Raisonnons par l'absurde et supposons $\delta=0$. Par définition de l'inf, pour tout $n\ge1$ il existe $x_n\in K$ et $y_n\in F$ tels que $d(x_n,y_n)<\frac1n$. Comme $K$ est compact, la suite $(x_n)$ admet une sous-suite $(x_{\varphi(n)})$ qui converge vers un point $x\in K$. Par l'inégalité triangulaire,
$$
d(y_{\varphi(n)},x)\le d(y_{\varphi(n)},x_{\varphi(n)})+d(x_{\varphi(n)},x)<\frac1{\varphi(n)}+d(x_{\varphi(n)},x)\xrightarrow[n\to\infty]{}0,
$$
donc $y_{\varphi(n)}\to x$. Or $F=X\setminus\mathcal U$ est fermé car $\mathcal U$ est ouvert, et $(y_{\varphi(n)})$ est une suite de $F$ : sa limite $x$ appartient à $F$. Ainsi $x\in K\cap F$, ce qui contredit $K\subset\mathcal U$. Donc $\delta>0$.

*Étape 2 : conclusion.* Soit $0<\epsilon\le\delta$ et $z\in K_\epsilon$. Il existe $x\in K$ tel que $z\in B(x,\epsilon)$, c'est-à-dire $d(x,z)<\epsilon\le\delta$. Si l'on avait $z\in F$, on aurait $d(x,z)\ge\delta$ par définition de $\delta$ : c'est impossible. Donc $z\notin F$, i.e. $z\in\mathcal U$. Ainsi $K_\epsilon\subset\mathcal U$. $\square$

*Variante (hors poly).* La fonction $x\mapsto\dist(x,F)=\inf_{y\in F}d(x,y)$ est $1$-lipschitzienne, donc continue ; elle est $>0$ sur $K$ (car $F$ est fermé et $K\cap F=\emptyset$) ; sur le compact $K$ elle atteint son minimum, qui vaut $\delta$ et est donc $>0$.

## Preuve à trous

On suppose $K$ et $F=X\setminus\mathcal U$ non vides et l'on pose $\delta=\inf_{K\times F}d$. Supposons par l'absurde $\delta=0$ : il existe $x_n\in K$, $y_n\in F$ avec $d(x_n,y_n)<\frac1n$. Par <trou indice="quelle propriété de K utiliser sur la suite (x_n) ?">compacité de $K$, on extrait $x_{\varphi(n)}\to x\in K$</trou>. Alors <trou indice="inégalité triangulaire">$d(y_{\varphi(n)},x)\le d(y_{\varphi(n)},x_{\varphi(n)})+d(x_{\varphi(n)},x)\to0$, donc $y_{\varphi(n)}\to x$</trou>, et comme <trou indice="pourquoi la limite reste-t-elle dans F ?">$F$ est fermé (complémentaire de l'ouvert $\mathcal U$), $x\in F$</trou> : contradiction avec $K\subset\mathcal U$. Donc $\delta>0$.

Enfin si $0<\epsilon\le\delta$ et $z\in K_\epsilon$, il existe $x\in K$ avec $d(x,z)<\epsilon\le\delta$, donc <trou>$z\notin F$ (sinon $d(x,z)\ge\delta$), c'est-à-dire $z\in\mathcal U$</trou>. $\square$

## Exemples

* **Segment dans un intervalle.** $X=\R$, $K=[a,b]\subset\mathcal U=]\alpha,\beta[$ avec $\alpha<a\le b<\beta$. Ici $F=]-\infty,\alpha]\cup[\beta,+\infty[$ et $\delta=\min(a-\alpha,\beta-b)>0$. Pour $\epsilon\le\delta$, $K_\epsilon=]a-\epsilon,b+\epsilon[\subset]\alpha,\beta[$ ; pour $\epsilon>\delta$, $K_\epsilon$ déborde (par exemple si $\delta=a-\alpha$, le point $\alpha\in F$ est dans $K_\epsilon$). La borne $\delta$ est optimale ici.
* **Orbite circulaire et singularité.** $X=\R^2$, $\mathcal U=\R^2\setminus\{0\}$, $K=\{q:\norm q=R\}$ (image de $\gamma_0(t)=R(\cos 2\pi t,\sin2\pi t)$, compacte). Alors $F=\{0\}$ et $\delta=R$ : toute courbe restant à distance $<R$ de $K$ évite l'origine. C'est exactement l'usage fait dans [[ch08-ouverture-courbes-confinees]].
* **Dans un espace vectoriel normé**, $K_\epsilon=K+B(0,\epsilon)=\{x+h:x\in K,\ \norm h<\epsilon\}$ : le lemme dit que $x+h\in\mathcal U$ pour tous $x\in K$ et $\norm h<\delta$, un $\delta$ **uniforme** en $x\in K$.

## Pièges

* > ⚠️ L'essentiel est l'**uniformité** : pour chaque $x\in K$, il existe $r_x>0$ avec $B(x,r_x)\subset\mathcal U$ (définition d'un ouvert) ; le lemme dit qu'on peut choisir un même rayon pour tous les $x\in K$, et c'est la compacité qui le permet.
* Deux fermés disjoints peuvent être à distance nulle (dans $\R^2$ : l'hyperbole $\{xy=1\}$ et l'axe $\{y=0\}$) : il faut qu'**au moins un** des deux ensembles soit compact.
* « Fermé borné $\Rightarrow$ compact » n'est vrai qu'en dimension finie ; dans un espace métrique général, utiliser la définition séquentielle.
* $K_\epsilon$ est défini avec des boules **ouvertes** ; avec des boules fermées, il faut prendre $\epsilon<\delta$ strictement.
