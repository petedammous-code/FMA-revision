---
id: ch01-def-rayon-convergence
type: definition
chapter: 1
title: "Rayon de convergence d'une série entière ; formule de Cauchy–Hadamard"
ref: non numéroté, section I.3, p. 11
page: 11
importance: 2
depends: []
tags: [serie-entiere, rayon-de-convergence, cauchy-hadamard, disque-de-convergence]
---
## Intuition

> 💡 Une **série entière** $\sum_{n\ge0} a_n z^n$ (les $a_n\in\C$ sont des coefficients fixés, $z\in\C$ la variable) est un « polynôme de degré infini ». La question est : pour quels $z$ la somme a-t-elle un sens ? La réponse a une forme remarquablement simple : il existe un **rayon** $R\in[0,+\infty]$ tel que la série converge (absolument) pour $|z|<R$ et diverge pour $|z|>R$. La zone de convergence est un **disque** centré en $0$, à un cercle près.

Image mentale : les termes $a_nz^n$ se comportent comme une suite géométrique de raison « $|z|\cdot\limsup|a_n|^{1/n}$ ». Tant que cette raison est $<1$, ça converge ; dès qu'elle est $>1$, les termes explosent. Sur le cercle $|z| = R$ (raison $=1$), tout peut arriver.

Vocabulaire. Une série de fonctions $\sum u_n$ est **normalement convergente** sur un ensemble $K$ si $\sum_n \sup_{K}|u_n| < +\infty$ ; pour $u_n(z) = a_nz^n$ sur le disque fermé $\bar D(0,\rho)$, on a $\sup_{\bar D(0,\rho)}|a_nz^n| = |a_n|\rho^n$. Pour une suite réelle $(u_n)$, $\limsup_{n\to+\infty} u_n := \lim_{N\to+\infty}\sup_{n\ge N}u_n\in[-\infty,+\infty]$ (limite d'une suite décroissante, donc toujours définie).

## Énoncé

**Définition (poly, section I.3, p. 11).** Soit $\sum_{n\ge0}a_nz^n$ une série entière à coefficients complexes. Son **rayon de convergence** $R\in[0,+\infty]$ est
$$
R := \sup\bigl\{\rho\ge0 \ :\ \textstyle\sum_{n\ge0}a_nz^n \text{ est normalement convergente sur } \bar D(0,\rho)\bigr\} = \sup\bigl\{\rho\ge0\ :\ \textstyle\sum_{n\ge0}|a_n|\rho^n<+\infty\bigr\}.
$$
C'est aussi le sup des $\rho\ge0$ tels que la suite $(|a_n|\rho^n)_{n\ge0}$ est bornée. Un théorème de Cauchy et Hadamard donne la formule
$$
\frac1R = \limsup_{n\to+\infty}|a_n|^{1/n} \qquad\Bigl(\text{avec les conventions } \tfrac1{0} = +\infty,\ \tfrac1{+\infty} = 0\Bigr).
$$
Le disque $D(0,R)$ est le **disque ouvert de convergence** de la série. Pour une série $\sum a_n(z-z_0)^n$ centrée en $z_0$, le disque ouvert de convergence est $D(z_0,R)$.

**Pourquoi ces trois descriptions coïncident.** Notons $R_1$ le premier sup (convergence normale), $R_2$ le second (suite bornée), $L = \limsup|a_n|^{1/n}$.

* $R_1\le R_2$ : si $\sum|a_n|\rho^n<+\infty$, son terme général tend vers $0$, donc est borné.
* $R_2\le R_1$ : si $|a_n|\rho^n\le M$ pour tout $n$ et $0\le\rho'<\rho$, alors $|a_n|\rho'^n\le M(\rho'/\rho)^n$, terme général d'une série géométrique convergente, donc $\rho'\le R_1$. Or, si $\rho'<R_2$, la définition du sup fournit un $\rho\in\,]\rho',R_2]$ tel que $(|a_n|\rho^n)$ soit bornée ; donc tout $\rho'<R_2$ vérifie $\rho'\le R_1$, d'où $R_2\le R_1$.
* $R_2 = 1/L$ : si $\rho>0$ et $\rho L<1$, choisissons $\rho'>\rho$ avec $\rho' L<1$ ; comme $\sup_{n\ge N}|a_n|^{1/n}\to L < 1/\rho'$, il existe $N$ tel que $|a_n|^{1/n}<1/\rho'$ pour $n\ge N$, d'où $|a_n|\rho^n<(\rho/\rho')^n\le1$ : la suite est bornée et $\rho\le R_2$. Si $\rho L>1$, choisissons $\rho'<\rho$ avec $\rho' L>1$ ; alors $|a_n|^{1/n}>1/\rho'$ pour une infinité de $n$ (sinon le $\limsup$ serait $\le 1/\rho'$), d'où $|a_n|\rho^n>(\rho/\rho')^n$ pour ces $n$ : la suite n'est pas bornée, et $\rho\ge R_2$ (l'ensemble des $\rho$ « bornés » est un intervalle contenant $0$). Donc $R_2 = 1/L$.

**Conséquence.** Pour $|z|<R$, la série converge absolument (prendre $|z|<\rho<R$) ; pour $|z|>R$, la suite $(a_nz^n)$ n'est pas bornée, donc la série diverge grossièrement.

## Hypothèses

### Conditions cachées

* **$R$ est toujours bien défini.** L'ensemble des $\rho$ considérés contient toujours $\rho = 0$ (la série vaut $a_0$ en $0$) ; c'est un intervalle de $[0,+\infty[$ (si $\rho$ convient, tout $\rho'\le\rho$ convient), donc son sup existe dans $[0,+\infty]$.
* **Le sup n'est pas toujours atteint**, et c'est le point délicat : la convergence est normale sur $\bar D(0,\rho)$ pour **tout** $\rho<R$, mais en général **pas** sur le disque ouvert $D(0,R)$ tout entier ni sur $\bar D(0,R)$. Exemple : $\sum z^n$, $R=1$, $\sup_{D(0,1)}|z^n| = 1$ n'est pas sommable.
* **Le rayon ne dépend que des modules $|a_n|$** : $\sum a_nz^n$ et $\sum|a_n|z^n$ ont même rayon.
* La formule de Cauchy–Hadamard vaut **toujours** ; le critère de d'Alembert ($\lim|a_{n+1}/a_n|$) ne s'applique que si cette limite existe (et si les $a_n$ ne s'annulent pas).

## Exemples

* **Les trois cas extrêmes.** $\sum z^n$ : $|a_n|^{1/n} = 1$, $R = 1$. $\sum \frac{z^n}{n!}$ : la suite $\frac{\rho^n}{n!}$ est bornée pour tout $\rho$ (elle tend vers $0$), donc $R = +\infty$ (série de $e^z$, [[ch01-exp-trigo-hyperboliques]]). $\sum n!\,z^n$ : pour tout $\rho>0$, $n!\rho^n\to+\infty$ (le rapport de deux termes consécutifs est $(n+1)\rho\to+\infty$), donc $R = 0$ : la série ne converge qu'en $z=0$.
* **Une série lacunaire.** $\sum_{n\ge0}2^nz^{2n}$, c'est-à-dire $a_{2n} = 2^n$, $a_{2n+1} = 0$. Le critère de d'Alembert est inutilisable (coefficients nuls). Par Cauchy–Hadamard : $|a_{2n}|^{1/(2n)} = 2^{1/2}$ et $|a_{2n+1}|^{1/(2n+1)} = 0$, donc $\limsup|a_n|^{1/n} = \sqrt2$ et $R = \frac1{\sqrt2}$. Vérification directe : $2^n\rho^{2n} = (2\rho^2)^n$ est bornée si et seulement si $2\rho^2\le1$.
* **Sur le cercle $|z| = R$, tout peut arriver.** Les trois séries suivantes ont $R=1$ (car $n^{1/n}\to1$ et $(n^2)^{1/n}\to1$). La série $\sum z^n$ **diverge en tout point** du cercle unité, car $|z^n| = 1\not\to0$. La série $\sum \frac{z^n}{n^2}$ **converge en tout point** du cercle (et même normalement sur $\bar D(0,1)$, puisque $\sum\frac1{n^2}<+\infty$). La série $\sum_{n\ge1} \frac{z^n}{n}$ **diverge en $z=1$** (série harmonique) et **converge en tout autre point** $z$ du cercle : les sommes partielles $\sum_{n=0}^N z^n = \frac{1-z^{N+1}}{1-z}$ sont bornées par $\frac{2}{|1-z|}$ et $\frac1n$ décroît vers $0$, donc le critère d'Abel (transformation d'Abel) s'applique.

## Pièges

* > ⚠️ Le rayon dit tout **à l'intérieur** ($|z|<R$ : convergence absolue) et **à l'extérieur** ($|z|>R$ : divergence grossière), mais **rien sur le cercle** $|z| = R$ : il faut étudier chaque point à la main.
* > ⚠️ La convergence est normale sur tout disque fermé $\bar D(0,\rho)$ avec $\rho<R$, **pas** forcément sur $D(0,R)$ : pour intervertir somme et limite/intégrale/dérivée, on se place toujours sur un $\bar D(0,\rho)$, $\rho<R$ (c'est ce que fait la preuve de [[ch01-serie-entiere-holomorphe]]).
* $\frac1R = \limsup|a_n|^{1/n}$ avec un **$\limsup$**, pas une limite (qui peut ne pas exister : série lacunaire ci-dessus).
* Pour $\sum a_nz^{kn}$ ou $\sum a_n(z-z_0)^n$, ne pas confondre le rayon en la variable $z$ et le rayon en la variable $w = z^k$ (ici $w = z^2$ : rayon $\frac12$ en $w$, $\frac1{\sqrt2}$ en $z$).
* La série dérivée $\sum na_nz^{n-1}$ a le **même** rayon $R$ ([[ch01-serie-entiere-holomorphe]]), mais son comportement sur le cercle peut être pire : $\sum\frac{z^n}{n^2}$ converge sur tout le cercle unité, sa dérivée $\sum\frac{z^{n-1}}n$ diverge en $z=1$.
