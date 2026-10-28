---
id: ch09-ex-sphere
type: proposition
chapter: 9
title: La sphère $\mathbb S^n$ est une sous-variété de $\mathbb R^{n+1}$
ref: Exemple IX.4.2
page: 153
importance: 2
depends: [ch09-sous-variete-equation-valeur-reguliere, ch09-point-critique-valeur-reguliere-def, ch09-immersion-submersion-def]
tags: [sphere, sous-variete, valeur-reguliere, submersion, exemple]
---
## Intuition

> 💡 La sphère est l'ensemble des points à distance $1$ de l'origine : **une** équation, $\norm x^2=1$, dans $\R^{n+1}$, donc il reste $n$ degrés de liberté. Pour que ce décompte soit légitime, il faut que l'équation soit « non dégénérée » en chaque point de la sphère : le gradient de $x\mapsto\norm x^2$, qui vaut $2x$, ne doit pas s'annuler — et il ne s'annule qu'à l'origine, qui n'est pas sur la sphère.

Notations : $\mathbb S^n=\{x\in\R^{n+1},\ \norm x=1\}$, où $\norm\cdot$ est la norme euclidienne et $\langle\cdot,\cdot\rangle$ le produit scalaire usuel. Une application est une **submersion** en $x$ si sa différentielle en $x$ est surjective ([[ch09-immersion-submersion-def]]).

## Énoncé

**Proposition (poly, Exemple IX.4.2, p. 153).** La sphère $\mathbb S^n$ est une sous-variété de $\R^{n+1}$ (de dimension $n$, de classe $C^\infty$), car $\mathbb S^n=f^{-1}(\{1\})$ où
$$
f:\R^{n+1}\setminus\{0\}\to\R,\qquad f(x)=\norm x^2
$$
est différentiable, de différentielle
$$
df_x(v)=2\langle x,v\rangle\qquad(x\in\R^{n+1}\setminus\{0\},\ v\in\R^{n+1}),
$$
donc est une submersion en tout point $x$.

## Hypothèses

### H1 — la valeur $1$ (rayon non nul)

**Rôle.** Le seul point critique de $x\mapsto\norm x^2$ sur $\R^{n+1}$ est $0$, de valeur $0$ ; toute valeur $a\neq0$ est donc régulière ([[ch09-point-critique-valeur-reguliere-def]]).

**Si on la retire.** Pour $a=0$, $f^{-1}(\{0\})$ (avec $f$ définie sur $\R^{n+1}$ entier) est le point $\{0\}$ : c'est une sous-variété, mais de dimension $0$, pas $n$ ; le théorème ne s'applique pas ($0$ est valeur critique). Pour $a<0$, $f^{-1}(\{a\})=\emptyset$ ($a$ est alors une valeur régulière « par vide »).

### H2 — le domaine $\R^{n+1}\setminus\{0\}$

**Rôle.** Hypothèse de confort : sur ce domaine, $f$ est une submersion **partout**, ce qui rend la vérification immédiate.

**Si on la retire.** On peut prendre $f$ sur $\R^{n+1}$ entier : $0$ est alors un point critique, mais il n'est pas dans $f^{-1}(\{1\})$, donc $1$ reste une valeur régulière et la conclusion est la même.

## Idée de la preuve

Calculer $df_x(v)=2\langle x,v\rangle$ ; pour $x\neq0$, $df_x(x)=2\norm x^2\neq0$, donc la forme linéaire $df_x$ est non nulle, donc surjective sur $\R$. Appliquer [[ch09-sous-variete-equation-valeur-reguliere]] avec $N=n+1$, $m=n$.

## Preuve

L'ensemble $V=\R^{n+1}\setminus\{0\}$ est un ouvert de $\R^{n+1}$ et $f(x)=\norm x^2=\sum_{i=1}^{n+1}x_i^2$ est polynomiale, donc de classe $C^\infty$. Pour $x\in V$ et $v\in\R^{n+1}$,
$$
f(x+v)=\norm x^2+2\langle x,v\rangle+\norm v^2,
$$
et $\norm v^2=o(\norm v)$, donc $df_x(v)=2\langle x,v\rangle$. Pour $x\neq0$, $df_x(x)=2\norm x^2\neq0$ : la forme linéaire $df_x:\R^{n+1}\to\R$ est non nulle, donc surjective ($\R$ est de dimension $1$). Ainsi $f$ est une submersion en tout point de $V$, et en particulier $1$ est une valeur régulière de $f$. Comme $\mathbb S^n\subset V$ et $\mathbb S^n=\{x\in V,\ f(x)=1\}=f^{-1}(\{1\})$, la Proposition IX.4.1 ([[ch09-sous-variete-equation-valeur-reguliere]], point 2, avec $N=n+1>m=n$ et $k=\infty$) montre que $\mathbb S^n$ est une sous-variété de $\R^{n+1}$ de dimension $n$ et de classe $C^\infty$. $\square$

## Preuve à trous

$f(x)=\norm x^2$ est $C^\infty$ sur l'ouvert $\R^{n+1}\setminus\{0\}$ et, en développant $f(x+v)$, <trou>$df_x(v)=2\langle x,v\rangle$</trou>. Pour $x\neq0$, <trou indice="tester sur un vecteur bien choisi">$df_x(x)=2\norm x^2\neq0$, donc la forme linéaire $df_x$ est non nulle, donc surjective sur $\R$</trou>. Donc <trou>$1$ est une valeur régulière de $f$ et $\mathbb S^n=f^{-1}(\{1\})$ est une sous-variété de dimension $(n+1)-1=n$</trou> par [[ch09-sous-variete-equation-valeur-reguliere]]. $\square$

## Exemples

* **Le cercle $\mathbb S^1$.** $f(x,y)=x^2+y^2$, $df_{(x,y)}=(2x,2y)\neq(0,0)$ sur le cercle. Paramétrages locaux explicites : $\theta\mapsto(\cos\theta,\sin\theta)$ sur $]-\pi;\pi[$ et sur $]0;2\pi[$ (deux paramétrages suffisent à recouvrir le cercle) ; ou le graphe $x\mapsto(x,\sqrt{1-x^2})$ sur $]-1;1[$ pour le demi-cercle supérieur.
* **Sphère quelconque.** La sphère de centre $c$ et de rayon $r>0$ est $g^{-1}(\{r^2\})$ avec $g(x)=\norm{x-c}^2$, $dg_x(v)=2\langle x-c,v\rangle$, non nulle pour $x\neq c$ : c'est une sous-variété de dimension $n$. (C'est aussi l'image de $\mathbb S^n$ par le difféomorphisme $x\mapsto c+rx$ de $\R^{n+1}$, cf. [[ch09-ex-image-diffeomorphisme]].)
* **Espace tangent.** Comme $\mathbb S^n=f^{-1}(\{1\})$ avec $1$ valeur régulière, l'espace tangent en $x$ est $T_x\mathbb S^n=\ker df_x=\{v,\ \langle x,v\rangle=0\}=x^\perp$ ([[ch09-espace-tangent-graphe-equation]]) : le plan tangent est orthogonal au rayon. Par exemple $T_{(0,0,1)}\mathbb S^2=\R^2\times\{0\}$.

## Pièges

* > ⚠️ Vérifier la surjectivité de $df_x$ **en tout point de la sphère** (pas seulement en un point), puisqu'on applique le point 2 de [[ch09-sous-variete-equation-valeur-reguliere]].
* La dimension de $\mathbb S^n$ est $n$, pas $n+1$ : $\mathbb S^2$ est la sphère usuelle de $\R^3$ (une surface).
* La **boule** $\{\norm x\le1\}$ n'est pas une sous-variété (au bord, elle ressemble à un demi-espace, cf. [[ch09-contre-ex-demi-droite]]) ; la boule ouverte $\{\norm x<1\}$ en est une, de dimension $n+1$, comme tout ouvert ([[ch09-ex-ouvert-sous-variete]]).
