---
id: ch03-exp-estimation
type: lemma
chapter: 3
title: Estimation $|(1+z)e^{-z}-1|\le C|z|^2$
ref: non numéroté, Exemple III.6.4, p. 72
page: 72
importance: 1
depends: [ch01-exp-trigo-hyperboliques, ch01-serie-entiere-holomorphe]
tags: [exponentielle, estimation, produits-infinis, gamma, facteur-de-convergence]
---
## Intuition

> 💡 Le facteur $1+z$ s'écarte de $1$ « à l'ordre $1$ » (il vaut $1+z$), mais si on le **corrige** en le multipliant par $e^{-z}\approx 1-z$, les termes d'ordre $1$ se compensent : $(1+z)(1-z+\dots)=1-z^2/2+\dots$. Le produit corrigé s'écarte de $1$ seulement **à l'ordre $2$**.

Pourquoi c'est utile : le produit $\prod_k(1+z/k)$ **diverge** (pour $z=1$, $\prod_{k=1}^n(1+1/k)=n+1\to+\infty$), car $\sum_k|z/k|$ est une série harmonique. Avec le facteur correctif $e^{-z/k}$, l'écart à $1$ devient $O(|z|^2/k^2)$, et $\sum 1/k^2<+\infty$ : le produit $\prod_k(1+z/k)e^{-z/k}$ converge, grâce au théorème sur les produits infinis ([[ch03-produits-infinis]]), qui demande la **convergence normale** de $\sum_k u_k$ où $u_k=g_k-1$ est l'écart du $k$-ième facteur à $1$ ([[ch03-convergence-normale-definition]]).

Notations : $\bar D(0,R)=\{z\in\C:\ |z|\le R\}$ est le disque fermé ; $e^{z}=\sum_{n\ge0}z^n/n!$ est l'exponentielle complexe ([[ch01-exp-trigo-hyperboliques]]).

## Énoncé

**Lemme (poly, Exemple III.6.4, p. 72, non numéroté).** Soit $R>0$. Il existe une constante $C>0$ (dépendant de $R$) telle que
$$
|(1+z)e^{-z}-1|\le C\,|z|^2\qquad\text{pour tout }z\in\bar D(0,R).
$$
**Conséquence.** Pour $k\in\N^\times$ et $z\in\C$, posons $u_k(z):=\left(1+\dfrac zk\right)e^{-z/k}-1$. Alors, avec la même constante $C$,
$$
|u_k(z)|\le C\,\frac{R^2}{k^2}\qquad\text{pour tout }z\in\bar D(0,R),
$$
de sorte que la série $\sum_{k\ge1}u_k$ converge normalement sur $\bar D(0,R)$.

*Précision (non dans le poly).* La meilleure constante est $C(R)=\dfrac{1+(R-1)e^{R}}{R^2}$, atteinte en $z=-R$ ; par exemple $C(1)=1$.

## Hypothèses

### H1 — $z$ reste dans un disque borné $\bar D(0,R)$

**Rôle.** La fonction $h(z)=\big((1+z)e^{-z}-1\big)/z^2$ est continue, donc bornée sur le **compact** $\bar D(0,R)$ ; c'est cette borne qui fournit $C$.

**Si on la retire.** Aucune constante ne convient sur $\C$ tout entier : pour $z=-x$ avec $x>1$ réel, $|(1+z)e^{-z}-1|=(x-1)e^{x}+1$, et $\dfrac{(x-1)e^x+1}{x^2}\ge\dfrac{(x-1)e^x}{x^2}\xrightarrow[x\to+\infty]{}+\infty$. La constante dépend donc vraiment de $R$ (et $C(R)\to+\infty$ quand $R\to+\infty$). Ce n'est pas gênant pour l'application : on veut une convergence normale **sur chaque compact**, donc sur chaque $\bar D(0,R)$.

### H2 — l'exposant $2$ (et pas mieux)

**Rôle.** C'est l'exposant $2$ qui donne le majorant $R^2/k^2$, terme général d'une série convergente.

**Si on le remplace.** On ne peut pas l'améliorer : $|z|^{3}$ ne convient pas, car $\dfrac{|(1+z)e^{-z}-1|}{|z|^3}=\dfrac{|h(z)|}{|z|}$ avec $h(0)=-\tfrac12\neq0$, donc ce quotient tend vers $+\infty$ quand $z\to0$. Et sans le facteur correctif $e^{-z}$, on n'a que $|(1+z)-1|=|z|$, d'ordre $1$ : le majorant serait $R/k$, de série divergente.

## Idée de la preuve

On développe : $(1+z)e^{-z}-1=\sum_{n\ge2}(-1)^{n-1}\frac{n-1}{n!}z^n$ (les termes d'ordre $0$ et $1$ se simplifient). Donc $h(z)=\big((1+z)e^{-z}-1\big)/z^2$ est une série entière de rayon infini, continue, bornée sur $\bar D(0,R)$ par $C$. Pour $u_k$, on applique l'inégalité à $z/k\in\bar D(0,R)$.

## Preuve

*Le poly utilise ce fait sans le démontrer ; voici une preuve complète.*

**Étape 1 : développement en série entière.** Pour tout $z\in\C$, $e^{-z}=\sum_{n\ge0}(-1)^nz^n/n!$ ([[ch01-exp-trigo-hyperboliques]]), donc
$$
(1+z)e^{-z}=\sum_{n\ge0}\frac{(-1)^n}{n!}z^n+\sum_{n\ge1}\frac{(-1)^{n-1}}{(n-1)!}z^n=1+\sum_{n\ge1}(-1)^{n}\Big(\frac1{n!}-\frac{1}{(n-1)!}\Big)z^n .
$$
Comme $\frac1{n!}-\frac1{(n-1)!}=\frac{1-n}{n!}$, le coefficient de $z^1$ est nul et
$$
(1+z)e^{-z}-1=\sum_{n\ge2}a_nz^n,\qquad a_n:=(-1)^{n-1}\frac{n-1}{n!}\quad\Big(a_2=-\tfrac12,\ a_3=\tfrac13,\ a_4=-\tfrac18,\dots\Big).
$$

**Étape 2 : la fonction $h$.** Posons $h(z):=\sum_{n\ge2}a_nz^{n-2}$. Comme $|a_n|\le1/(n-1)!$, cette série entière a un rayon de convergence infini ; elle définit une fonction entière ([[ch01-serie-entiere-holomorphe]]), en particulier continue sur $\C$, et $z^2h(z)=(1+z)e^{-z}-1$ pour tout $z\in\C$ (pour $z\ne0$ : $h(z)=\big((1+z)e^{-z}-1\big)/z^2$).

**Étape 3 : la constante.** $h$ est continue sur le compact $\bar D(0,R)$, donc bornée : $C:=\sup_{\bar D(0,R)}|h|<+\infty$ (et $C>0$ car $h(0)=-1/2$). Pour $z\in\bar D(0,R)$, $|(1+z)e^{-z}-1|=|z|^2|h(z)|\le C|z|^2$.

*Constante explicite.* Pour $|z|\le R$, $|h(z)|\le\sum_{n\ge2}\frac{n-1}{n!}R^{n-2}=\frac1{R^2}\sum_{n\ge2}\frac{n-1}{n!}R^n$, et
$$
\sum_{n\ge2}\frac{n-1}{n!}R^n=\sum_{n\ge1}\frac{R^n}{(n-1)!}-\sum_{n\ge2}\frac{R^n}{n!}=Re^R-(e^R-1-R)-R=(R-1)e^R+1 .
$$
En $z=-R$, tous les termes $a_n(-R)^n=-\frac{n-1}{n!}R^n$ ont le même signe, donc $|(1-R)e^{R}-1|=(R-1)e^R+1$ : la borne est atteinte, et $C(R)=\big(1+(R-1)e^R\big)/R^2$ est optimale.

**Étape 4 : conséquence.** Soient $k\ge1$ et $z\in\bar D(0,R)$. Alors $|z/k|\le R/k\le R$, donc $z/k\in\bar D(0,R)$ et l'inégalité appliquée en $z/k$ donne
$$
|u_k(z)|=\Big|\Big(1+\frac zk\Big)e^{-z/k}-1\Big|\le C\,\frac{|z|^2}{k^2}\le C\,\frac{R^2}{k^2}.
$$
Donc $\sup_{\bar D(0,R)}|u_k|\le CR^2/k^2$, terme général d'une série convergente : $\sum_k u_k$ converge normalement sur $\bar D(0,R)$. $\square$

## Preuve à trous

En développant $e^{-z}$, on obtient $(1+z)e^{-z}-1=\sum_{n\ge2}a_nz^n$ avec <trou indice="calculer le coefficient de $z^n$ : il y a deux contributions, et celle d'ordre 1 s'annule">$a_n=(-1)^{n-1}\frac{n-1}{n!}$, le terme en $z$ valant $-z+z=0$</trou>. La fonction $h(z)=\sum_{n\ge2}a_nz^{n-2}$ est <trou indice="rayon de convergence ?">une série entière de rayon infini, donc entière et continue</trou>, et $(1+z)e^{-z}-1=z^2h(z)$. Sur $\bar D(0,R)$, on pose <trou indice="pourquoi est-ce fini ?">$C=\sup_{\bar D(0,R)}|h|$, fini car $h$ est continue sur un compact</trou>, d'où $|(1+z)e^{-z}-1|\le C|z|^2$. Enfin, pour $k\ge1$ et $|z|\le R$, <trou indice="en quel point applique-t-on l'inégalité ?">$z/k\in\bar D(0,R)$, donc $|u_k(z)|\le C|z/k|^2\le CR^2/k^2$</trou>, et $\sum CR^2/k^2<+\infty$ donne la convergence normale. $\square$

## Exemples

* **$R=1$ : $C=1$.** On a $|(1+z)e^{-z}-1|\le|z|^2$ pour $|z|\le1$, avec égalité en $z=-1$ : $(1-1)e^{1}-1=-1$. En $z=1$ : $|2/e-1|\approx0{,}264\le1$.
* **$R=2$.** $C(2)=\frac{e^2+1}{4}\approx2{,}097$ ; en $z=-2$, $|(1-2)e^{2}-1|=e^2+1\approx8{,}389=C(2)\cdot4$.
* **Le produit de Weierstrass de $\Gamma$ en $z=1$.** Pour $z=1$ : $u_1(1)=2/e-1\approx-0{,}264$, $u_2(1)=\tfrac32e^{-1/2}-1\approx-0{,}090$, et $|u_k(1)|\le 1/k^2$ (avec $C(1)=1$). Le produit partiel vaut $\prod_{k=1}^n\big(1+\tfrac1k\big)e^{-1/k}=(n+1)\,e^{-\sum_{k=1}^n1/k}=\tfrac{n+1}{n}\,e^{-(\sum_{k=1}^n 1/k-\log n)}\to e^{-\gamma}\approx0{,}5615$, où $\gamma$ est la constante d'Euler. C'est cohérent avec $\Gamma(1)=1$ dans la formule $\Gamma(z)=\frac{e^{-\gamma z}}{z}\prod_{k\ge1}\big(1+\frac zk\big)^{-1}e^{z/k}$ ([[ch03-gamma-produit-weierstrass]]).

## Pièges

* > ⚠️ La constante $C$ **dépend de $R$** : il n'existe pas de $C$ valable sur tout $\C$ (voir H1). On obtient une convergence normale sur chaque $\bar D(0,R)$, ce qui suffit pour un produit holomorphe sur $\C$ ([[ch03-produits-infinis]]).
* Pour passer de $z$ à $z/k$, il faut vérifier que $z/k$ reste dans le disque où l'inégalité est connue : c'est le cas car $k\ge1$.
* Sans le facteur $e^{-z/k}$, $\prod_k(1+z/k)$ **diverge** (pour $z=1$ le produit partiel vaut $n+1$) : le facteur correctif n'est pas décoratif.
* Le gain d'ordre vient de la compensation $e^{-z}=1-z+O(z^2)$ ; avec un autre facteur, par exemple $(1-z)e^{z}$, même calcul : $(1-z)e^z-1=-z^2/2+O(z^3)$ (c'est le facteur élémentaire $E_1$ de Weierstrass).
