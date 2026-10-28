---
id: ch05-norme-operateur-def
type: definition
chapter: 5
title: Applications linéaires continues, norme d'opérateur $\|T\|_{\mathcal L(E;F)}$
ref: Formule (V.1.1)
page: 93
importance: 2
depends: []
tags: [norme-operateur, lineaire-continue, borne, evn]
---
## Intuition

> 💡 Une application linéaire $T$ « dilate » les vecteurs. La **norme d'opérateur** $\|T\|$ est le **pire facteur de dilatation** : le plus grand rapport $\|T(x)\|/\|x\|$. Image mentale : on regarde l'image de la boule unité de $E$ ; $\|T\|$ est le rayon de la plus petite boule centrée en $0$ de $F$ qui la contient.

En dimension finie toute application linéaire est continue et ce facteur est toujours fini. En dimension infinie (espaces de fonctions, de suites), ce n'est plus vrai : la dérivation $P\mapsto P'$ multiplie la taille de $x^n$ par $n$, aucun facteur ne la majore, et elle n'est **pas continue**. La définition ci-dessous dit exactement que « continue » = « facteur de dilatation fini ».

Vocabulaire. Un **espace vectoriel normé** (evn) est un espace vectoriel réel $E$ muni d'une norme $\|\cdot\|_E$ ; il est **de Banach** s'il est complet (voir [[ch05-banach-series-absolument-convergentes]]). Une application $T:E\to F$ est **linéaire** si $T(\lambda x+y)=\lambda T(x)+T(y)$.

## Énoncé

**Définition (poly, Formule (V.1.1), p. 93).** Soient $E$ et $F$ des espaces vectoriels normés. On note $\mathcal L(E;F)$ l'ensemble des applications linéaires **continues** de $E$ dans $F$. Une application linéaire $T:E\to F$ est continue si et seulement si elle est continue en $0$, et ceci a lieu si et seulement si $T$ est **bornée**, c'est-à-dire
$$
\|T\|_{\mathcal L(E;F)}:=\sup_{x\in E\setminus\{0\}}\frac{\|T(x)\|_F}{\|x\|_E}<+\infty. \qquad \text{(V.1.1)}
$$
On a de plus
$$
\|T\|=\|T\|_{\mathcal L(E;F)}=\sup_{x\in E\setminus\{0\}}\frac{\|T(x)\|_F}{\|x\|_E}=\sup_{x\in E,\ \|x\|_E\le 1}\|T(x)\|_F=\sup_{x\in E,\ \|x\|_E=1}\|T(x)\|_F .
$$
Sauf mention explicite du contraire, $\mathcal L(E;F)$ est muni de cette **norme d'opérateur** ; on note $\mathcal L(E)=\mathcal L(E;E)$. Les normes sont souvent notées simplement $\|\cdot\|$ sans mention de l'espace.

**Conséquence à retenir.** Pour tout $T\in\mathcal L(E;F)$ et tout $x\in E$ :
$$
\|T(x)\|_F\le\|T\|\,\|x\|_E ,
$$
et $\|T\|$ est la **plus petite** constante $C\ge0$ telle que $\|T(x)\|_F\le C\|x\|_E$ pour tout $x$.

*Justification (rappel de 1re année ; le poly l'admet).*

* *Continue $\Rightarrow$ continue en $0$* : évident.
* *Continue en $0$ $\Rightarrow$ bornée* : comme $T(0)=0$, il existe $\delta>0$ tel que $\|x\|_E\le\delta\Rightarrow\|T(x)\|_F\le1$. Pour $x\ne0$, le vecteur $\delta x/\|x\|_E$ est de norme $\delta$, donc $\big\|T\big(\delta x/\|x\|_E\big)\big\|_F\le1$, soit par linéarité $\|T(x)\|_F\le\frac1\delta\|x\|_E$. Donc $\|T\|\le 1/\delta<+\infty$.
* *Bornée $\Rightarrow$ continue* : par définition du sup, $\|T(x)\|_F\le\|T\|\,\|x\|_E$ pour tout $x$ (trivial si $x=0$), donc $\|T(x)-T(y)\|_F=\|T(x-y)\|_F\le\|T\|\,\|x-y\|_E$ : $T$ est $\|T\|$-lipschitzienne.
* *Égalité des trois sup* (on suppose $E\ne\{0\}$) : notons $S_1,S_2,S_3$ les sup sur $x\ne0$, sur $\|x\|\le1$, sur $\|x\|=1$. La sphère est contenue dans la boule, donc $S_3\le S_2$. Pour $0<\|x\|\le1$, $\|T(x)\|\le\|T(x)\|/\|x\|\le S_1$, et $T(0)=0$, donc $S_2\le S_1$. Enfin $\|T(x)\|/\|x\|=\|T(x/\|x\|)\|\le S_3$, donc $S_1\le S_3$.

## Hypothèses

### H1 — $T$ linéaire

**Rôle.** Toute l'équivalence repose sur l'homogénéité $T(\lambda x)=\lambda T(x)$ (pour ramener un $x$ quelconque dans une petite boule) et sur $T(x)-T(y)=T(x-y)$ (pour passer de $0$ à un point quelconque).

**Si on la retire.** $f:\R\to\R$, $f=\mathbf 1_{[1,+\infty[}$ est continue en $0$ (nulle sur $]-1,1[$) et bornée, mais discontinue en $1$. Et le « rapport » $\|f(x)\|/\|x\|$ n'a plus de sens géométrique.

### H2 — $E\ne\{0\}$ (condition cachée)

**Rôle.** Si $E=\{0\}$, le sup de (V.1.1) porte sur l'ensemble vide ; on convient alors que $\|T\|=0$ (la seule application linéaire est $T=0$). Le sup sur la sphère $\|x\|=1$ demande aussi $E\ne\{0\}$.

### H3 — les normes sont fixées

**Rôle.** $\mathcal L(E;F)$ et la valeur de $\|T\|$ dépendent des normes choisies sur $E$ et $F$. Changer une norme en une norme **équivalente** ne change pas l'ensemble $\mathcal L(E;F)$ (la continuité est topologique) mais change en général le nombre $\|T\|$ (voir l'exemple 1).

## Exemples

* **Matrice, normes sup.** Sur $\R^2$ muni de $\|x\|_\infty=\max(|x_1|,|x_2|)$, soit $A=\begin{pmatrix}1&2\\3&-4\end{pmatrix}$. Pour $\|x\|_\infty\le1$ : $|(Ax)_1|\le1+2=3$, $|(Ax)_2|\le3+4=7$, donc $\|A\|\le7$ ; et $x=(1,-1)$ donne $Ax=(-1,7)$, d'où $\|A\|_{\mathcal L(\R^2)}=7$ (formule générale : $\max_i\sum_j|a_{ij}|$). Avec la norme euclidienne, une matrice diagonale $\mathrm{diag}(2,-3)$ a pour norme $\max(|2|,|-3|)=3$.
* **Opérateur intégral.** Sur $E=C([0,1])$ muni de $\|g\|_\infty$, soit $V(g)(t)=\int_0^t g(s)\,ds$. Alors $|V(g)(t)|\le t\|g\|_\infty\le\|g\|_\infty$, donc $\|V\|\le1$, et $g=1$ donne $V(g)(t)=t$, de norme $1$ : $\|V\|=1$.
* **Une application linéaire non continue.** Sur $\R[X]$ muni de $\|P\|=\sup_{[0,1]}|P|$, la dérivation $D(P)=P'$ vérifie $\|X^n\|=1$ et $\|D(X^n)\|=\|nX^{n-1}\|=n$. Le rapport n'est pas borné : $D\notin\mathcal L(\R[X])$.

## Pièges

* > ⚠️ En dimension infinie, **linéaire n'implique pas continue** : il faut toujours vérifier $\|T(x)\|\le C\|x\|$.
* Le sup n'est pas forcément **atteint** en dimension infinie : sur $c_0$ (suites tendant vers $0$, norme sup), $T(x)=\sum_{n\ge1}2^{-n}x_n$ a pour norme $1$ (prendre $x=(1,\dots,1,0,\dots)$), mais $|T(x)|<1$ pour tout $\|x\|_\infty\le1$, car $|x_n|<1$ pour $n$ grand.
* $\|T\|$ dépend des normes : ne pas écrire « la norme de la matrice $A$ » sans préciser les normes de départ et d'arrivée.
* Pour montrer $\|T\|=C$, il faut **deux** inégalités : la majoration $\|T(x)\|\le C\|x\|$ pour tout $x$, et un $x$ (ou une suite $x_k$) qui réalise (ou approche) l'égalité.
