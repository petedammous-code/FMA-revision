---
id: ch05-multilineaire-continue-caracterisation
type: proposition
chapter: 5
title: Continuité des applications multilinéaires
ref: Proposition V.1.3
page: 94
importance: 1
depends: []
tags: [multilineaire, bilineaire, continuite, borne]
---
## Intuition

> 💡 C'est la version « à plusieurs variables » du critère linéaire ([[ch05-norme-operateur-def]]) : une application **multilinéaire** est continue partout dès qu'elle est continue en $0$, et cela équivaut à être **bornée sur le produit des boules unités**. La multilinéarité permet de « zoomer » séparément dans chaque variable : $f(\lambda_1x_1,\dots,\lambda_nx_n)=\lambda_1\cdots\lambda_n\,f(x_1,\dots,x_n)$.

Une application $f:E_1\times\cdots\times E_n\to F$ est **multilinéaire** (bilinéaire si $n=2$) si elle est linéaire en chaque variable quand on fixe les autres. Exemples : le produit $(x,y)\mapsto xy$ sur $\R\times\R$, un produit scalaire, le déterminant, le produit de matrices $(A,B)\mapsto AB$.

Attention, une application multilinéaire n'est **pas** linéaire sur le produit : pour $f(x,y)=xy$, $f(2x,2y)=4f(x,y)\neq2f(x,y)$. Elle n'est pas non plus lipschitzienne sur $\R^2$ tout entier (seulement bornée sur $[-1,1]^2$, et localement lipschitzienne).

## Énoncé

**Proposition (poly, Proposition V.1.3, p. 94).** Soient $E_1,E_2,\dots,E_n$ et $F$ des espaces vectoriels normés et soit
$$
f:E_1\times E_2\times\cdots\times E_n\longrightarrow F
$$
une application multilinéaire. Les conditions suivantes sont équivalentes :

* (a) $f$ est continue en tout point de $E_1\times E_2\times\cdots\times E_n$ ;
* (b) $f$ est continue en $0$ ;
* (c) $f$ est bornée sur le produit des boules unités $\bar B_{E_1}(0,1)\times\cdots\times\bar B_{E_n}(0,1)$.

L'espace produit est muni de la topologie produit, donnée par exemple par la norme $\|(x_1,\dots,x_n)\|_{E_1\times\cdots\times E_n}=\sum_{i=1}^n\|x_i\|_{E_i}$, ou toute norme équivalente.

**Conséquence utile.** Si $M=\sup\{\|f(x_1,\dots,x_n)\|_F : \|x_i\|_{E_i}\le1\}<+\infty$, alors pour tous $x_i\in E_i$ :
$$
\|f(x_1,\dots,x_n)\|_F\le M\,\|x_1\|_{E_1}\cdots\|x_n\|_{E_n}.
$$

## Hypothèses

### H1 — $f$ multilinéaire

**Rôle.** Elle sert deux fois : pour **homogénéiser** (ramener un $n$-uplet de la boule unité dans un petit voisinage de $0$ par $f(\lambda x_1,\dots,\lambda x_n)=\lambda^nf(x_1,\dots,x_n)$), et pour la **décomposition télescopique** de $f(x)-f(a)$ qui transporte la continuité de $0$ à un point quelconque.

**Si on la retire.** Pour $n=1$, $E_1=F=\R$ : $f=\mathbf 1_{[1,+\infty[}$ est continue en $0$ et bornée par $1$, mais discontinue en $1$ ; (b) et (c) n'impliquent plus (a). Et $g=\mathbf 1_{\R\setminus\{0\}}$ est bornée mais discontinue en $0$ : (c) n'implique plus (b).

### H2 — $E_i$, $F$ normés, produit muni de la topologie produit

**Rôle.** Les boules $\bar B_{E_i}(0,1)$ et la continuité ont besoin des normes. Le choix de la norme sur le produit est sans importance (hypothèse de confort) : les normes $\sum_i\|x_i\|$ et $\max_i\|x_i\|$ sont équivalentes ($\max_i\|x_i\|\le\sum_i\|x_i\|\le n\max_i\|x_i\|$) et définissent la même topologie.

**Si on la retire.** Sans normes, l'énoncé n'a pas de sens. Noter qu'aucune **complétude** n'est demandée.

## Idée de la preuve

(b)$\Rightarrow$(c) : la continuité en $0$ donne une petite boule où $\|f\|\le1$, et l'homogénéité de degré $n$ étend la borne à la boule unité. (c)$\Rightarrow$(a) : $\|f(x)\|\le M\prod_i\|x_i\|$, puis on écrit $f(x)-f(a)$ comme somme télescopique de $n$ termes contenant chacun un facteur $x_k-a_k$.

## Preuve

*Le poly renvoie à [4], Théorème 1.8.1 ; voici une preuve complète.* On munit le produit de la norme $\|x\|=\sum_i\|x_i\|_{E_i}$ et on note $x=(x_1,\dots,x_n)$. Par multilinéarité, $f(x)=0$ dès qu'un des $x_i$ est nul ; en particulier $f(0)=0$.

**(a) $\Rightarrow$ (b).** Évident.

**(b) $\Rightarrow$ (c).** Par continuité en $0$ (et $f(0)=0$), il existe $\delta>0$ tel que $\|y\|\le\delta\Rightarrow\|f(y)\|_F\le1$. Soit $x$ avec $\|x_i\|_{E_i}\le1$ pour tout $i$. Posons $y_i=\frac\delta n x_i$ : alors $\|y\|=\sum_i\frac\delta n\|x_i\|\le\delta$, et par multilinéarité $f(y)=\big(\frac\delta n\big)^n f(x)$. Donc
$$
\|f(x)\|_F=\Big(\frac n\delta\Big)^n\|f(y)\|_F\le\Big(\frac n\delta\Big)^n .
$$

**(c) $\Rightarrow$ (a).** Soit $M$ un majorant de $\|f\|_F$ sur $\bar B_{E_1}(0,1)\times\cdots\times\bar B_{E_n}(0,1)$.

*Étape 1 : $\|f(x)\|_F\le M\prod_i\|x_i\|$.* Si un $x_i$ est nul, les deux membres sont nuls. Sinon, par multilinéarité,
$$
f(x_1,\dots,x_n)=\|x_1\|\cdots\|x_n\|\;f\Big(\frac{x_1}{\|x_1\|},\dots,\frac{x_n}{\|x_n\|}\Big),
$$
et le dernier $n$-uplet est dans le produit des boules unités.

*Étape 2 : télescopage.* Soient $a,x\in E_1\times\cdots\times E_n$. Pour $k=1,\dots,n$, la linéarité en la $k$-ième variable donne
$$
f(a_1,\dots,a_{k-1},x_k,x_{k+1},\dots,x_n)-f(a_1,\dots,a_{k-1},a_k,x_{k+1},\dots,x_n)=f(a_1,\dots,a_{k-1},x_k-a_k,x_{k+1},\dots,x_n),
$$
et en sommant sur $k$ (somme télescopique, du terme $f(x)$ pour $k=1$ au terme $f(a)$ pour $k=n$) :
$$
f(x)-f(a)=\sum_{k=1}^n f(a_1,\dots,a_{k-1},x_k-a_k,x_{k+1},\dots,x_n).
$$

*Étape 3 : continuité en $a$.* Si $\|x-a\|\le1$, alors $\|x_i\|\le\|a_i\|+1$ pour tout $i$, et l'étape 1 donne
$$
\|f(x)-f(a)\|_F\le M\sum_{k=1}^n\|x_k-a_k\|\prod_{i\ne k}(\|a_i\|+1)\le M\prod_{i=1}^n(\|a_i\|+1)\;\|x-a\| ,
$$
qui tend vers $0$ quand $x\to a$. Donc $f$ est continue en tout point $a$. $\square$

## Preuve à trous

(a)$\Rightarrow$(b) est évident. (b)$\Rightarrow$(c) : soit $\delta>0$ tel que $\|y\|\le\delta\Rightarrow\|f(y)\|\le1$. Pour $\|x_i\|\le1$, on pose <trou indice="ramener le n-uplet dans la boule de rayon δ pour la norme somme">$y_i=\frac\delta nx_i$, de sorte que $\|y\|\le\delta$ et $f(y)=(\delta/n)^nf(x)$</trou>, d'où $\|f(x)\|\le(n/\delta)^n$.

(c)$\Rightarrow$(a) : soit $M$ la borne. Par homogénéité, <trou>$\|f(x)\|\le M\|x_1\|\cdots\|x_n\|$ pour tout $x$</trou>. Ensuite
$$
f(x)-f(a)=\sum_{k=1}^n f(a_1,\dots,a_{k-1},x_k-a_k,x_{k+1},\dots,x_n)
$$
(somme <trou indice="chaque terme est une différence où une seule variable change">télescopique, par linéarité en la $k$-ième variable</trou>). Pour $\|x-a\|\le1$ on a $\|x_i\|\le\|a_i\|+1$, donc <trou>$\|f(x)-f(a)\|\le M\prod_i(\|a_i\|+1)\,\|x-a\|\to0$</trou>. $\square$

## Exemples

* **Produit réel.** $f(x,y)=xy$ sur $\R\times\R$ : $|f|\le1$ sur $[-1,1]^2$, donc $f$ est continue et $|f(x,y)|\le|x|\,|y|$. Le majorant de l'étape 3 en $a=(a_1,a_2)$ est $(|a_1|+1)(|a_2|+1)$ : il croît avec $a$, et $f$ n'est pas uniformément continue sur $\R^2$ ($f(n+\frac1n,n)-f(n,n)=1$ alors que l'écart des points tend vers $0$).
* **Produit de matrices.** $(A,B)\mapsto AB$ sur $\mathrm M_n(\R)\times\mathrm M_n(\R)$ muni d'une norme d'opérateur : $\|AB\|\le\|A\|\,\|B\|\le1$ sur le produit des boules unités ([[ch05-lef-banach-norme-algebre]]), donc l'application est bilinéaire continue.
* **Une bilinéaire non continue.** Sur $E=\R[X]$ muni de $\|P\|=\sup_{[0,1]}|P|$, $f(P,Q)=P'(1)\,Q(1)$ est bilinéaire, mais $f(X^m,1)=m$ avec $\|X^m\|=\|1\|=1$ : (c) est fausse, donc $f$ n'est pas continue en $0$ (ni, d'après la proposition, en tout point). Elle n'est même continue **nulle part** : pour une bilinéaire, l'identité $2f(h,k)=\big[f(a+h,b+k)-f(a,b)\big]+\big[f(a-h,b-k)-f(a,b)\big]$ montre que la continuité en un point $(a,b)$ entraîne la continuité en $0$.

## Pièges

* > ⚠️ Une application bilinéaire n'est **pas** linéaire sur $E_1\times E_2$ : elle n'est en général pas bornée sur $E_1\times E_2$ entier ni lipschitzienne globalement ; elle n'est que **localement** lipschitzienne (étape 3).
* L'inégalité correcte est $\|f(x_1,\dots,x_n)\|\le M\,\|x_1\|\cdots\|x_n\|$ (produit des normes), **pas** $M(\|x_1\|+\dots+\|x_n\|)$.
* En dimension finie, toute application multilinéaire est continue ; le critère ne sert vraiment qu'en dimension infinie.
* « Continue en chaque variable séparément » est plus faible que « continue » en général (voir les pièges de [[ch05-isometrie-bilineaire-curryfication]]).
