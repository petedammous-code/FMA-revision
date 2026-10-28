---
id: ch05-differentiabilite-composantes
type: proposition
chapter: 5
title: Différentiabilité d'une application à valeurs dans un produit (composante par composante)
ref: Proposition V.3.15
page: 101
importance: 2
depends: [ch05-composition-differentielles, ch05-differentielle-lineaire, ch05-projections-injections-canoniques, ch05-linearite-differentielle]
tags: [produit, composantes, projections, injections, differentielle]
---
## Intuition

> 💡 Une application à valeurs dans un produit $F_1\times\cdots\times F_n$, c'est $n$ applications « empilées » : $f(x)=(f_1(x),\dots,f_n(x))$. Approcher $f$ linéairement près de $a$, c'est approcher **chaque composante** linéairement ; l'erreur totale (mesurée par la somme des normes) est petite si et seulement si chaque erreur l'est. Donc : $f$ différentiable $\iff$ chaque $f_i$ différentiable, et la différentielle de $f$ est la différentielle de chaque composante, empilée.

C'est ce qui permet, pour $f:\R^m\to\R^n$, de calculer la différentielle **ligne par ligne** (une ligne de la matrice jacobienne par composante $f_j$, [[ch05-matrice-jacobienne]]).

Notations (poly, (V.3.2), p. 101 ; [[ch05-projections-injections-canoniques]]) : $F=F_1\times\cdots\times F_n$ est muni de la norme $\|(x_1,\dots,x_n)\|_F=\|x_1\|_{F_1}+\cdots+\|x_n\|_{F_n}$ ; $p_i:F\to F_i$, $(x_1,\dots,x_n)\mapsto x_i$, est la **projection canonique**, $\iota_i:F_i\to F$, $x_i\mapsto(0,\dots,x_i,\dots,0)$, l'**injection canonique** ; elles sont linéaires continues et
$$
p_i\circ\iota_i=\id_{F_i},\qquad\sum_{i=1}^n\iota_i\circ p_i=\id_F .
$$

## Énoncé

**Proposition (poly, Proposition V.3.15, p. 101).** Soient $E,F_1,\dots,F_n$ des espaces vectoriels normés. Soit $f:U\to F=F_1\times\cdots\times F_n$ une application, où $U$ est un ouvert de l'espace $E$. Pour que $f$ soit différentiable au point $a\in U$, il faut et il suffit que pour tout $i$, $f_i:=p_i\circ f$ soit différentiable au point $a$, et l'on a alors
$$
df_a=\sum_{i=1}^n\iota_i\circ(df_i)_a ,\qquad\text{c'est-à-dire}\qquad (df_i)_a=p_i\circ df_a .
$$
Autrement dit : $df_a(h)=\big((df_1)_a(h),\dots,(df_n)_a(h)\big)$ pour tout $h\in E$.

## Hypothèses

### H1 — $F$ est un produit **fini**, muni de la norme somme (ou d'une norme équivalente)

**Rôle.** La finitude donne la décomposition $\id_F=\sum_{i=1}^n\iota_i\circ p_i$ (somme **finie**), qui permet de reconstruire $f=\sum_i\iota_i\circ f_i$ et de conclure par linéarité de la différentielle. Le choix de la norme somme est de confort : toute norme équivalente (par exemple $\max_i\|x_i\|$) donne la même différentiabilité ([[ch05-differentielle-normes-equivalentes]]).

**Si on la retire.** Pour un produit **infini**, le sens « composantes différentiables $\Rightarrow$ $f$ différentiable » est faux. Prenons $F=\ell^\infty$ (suites réelles bornées, norme $\|x\|_\infty=\sup_n|x_n|$) et $f:\R\to\ell^\infty$, $f(t)=\big(\tfrac{\sin(nt)}{n}\big)_{n\ge1}$ (bien dans $\ell^\infty$ car $|\sin(nt)/n|\le1/n$). Chaque composante $f_n(t)=\sin(nt)/n$ est dérivable, avec $f_n'(0)=1$. Si $f$ était différentiable en $0$, la composante $n$ de $f'(0)$ serait $f_n'(0)=1$ (sens direct, qui reste vrai car $p_n$ est linéaire continue), donc $f'(0)=(1,1,\dots)$. Mais
$$
\frac{\|f(t)-f(0)-t\,(1,1,\dots)\|_\infty}{|t|}=\sup_{n\ge1}\Big|\frac{\sin(nt)}{nt}-1\Big|,
$$
et pour $t=\pi/N$ ($N\ge1$), le terme $n=N$ vaut $|0-1|=1$ : le quotient ne tend pas vers $0$. Donc $f$ n'est pas différentiable en $0$.

### H2 — $U$ ouvert de $E$

**Rôle.** Cadre de la définition de la différentiabilité (les $f_i$ et $f$ sont définies sur le même ouvert $U$, de sorte que $a+h\in U$ pour $h$ petit). Aucune difficulté supplémentaire.

**Si on la retire.** Hypothèse de cadre : sans voisinage de $a$ dans le domaine, la notion même de différentielle en $a$ n'est pas définie dans ce cours.

## Idée de la preuve

$(\Rightarrow)$ $f_i=p_i\circ f$ avec $p_i$ linéaire continue : règle de la chaîne. $(\Leftarrow)$ $f=\sum_i\iota_i\circ p_i\circ f=\sum_i\iota_i\circ f_i$ : chaque terme est différentiable (chaîne, $\iota_i$ linéaire) et une somme finie de fonctions différentiables l'est.

## Preuve

*Rappel.* Une application linéaire continue $T$ est différentiable en tout point, de différentielle $T$ ([[ch05-differentielle-lineaire]]). En particulier $p_i$ et $\iota_i$ sont différentiables partout, avec $d(p_i)_y=p_i$ et $d(\iota_i)_{y_i}=\iota_i$.

*Sens direct.* Supposons $f$ différentiable en $a$. Alors $f_i=p_i\circ f$ est différentiable en $a$ par la règle de la chaîne ([[ch05-composition-differentielles]]), avec
$$
(df_i)_a=d(p_i)_{f(a)}\circ df_a=p_i\circ df_a .
$$
On a alors $\sum_i\iota_i\circ(df_i)_a=\sum_i\iota_i\circ p_i\circ df_a=df_a$ d'après (V.3.2).

*Réciproque.* Supposons chaque $f_i$ différentiable en $a$. D'après (V.3.2) ([[ch05-projections-injections-canoniques]]),
$$
f=\id_F\circ f=\sum_{i=1}^n\iota_i\circ p_i\circ f=\sum_{i=1}^n\iota_i\circ f_i .
$$
Chaque $\iota_i\circ f_i$ est différentiable en $a$ par la règle de la chaîne, de différentielle $d(\iota_i)_{f_i(a)}\circ(df_i)_a=\iota_i\circ(df_i)_a$. Par linéarité de la différentielle ([[ch05-linearite-differentielle]], appliquée $n-1$ fois), la somme finie $f$ est différentiable en $a$ et
$$
df_a=\sum_{i=1}^n\iota_i\circ(df_i)_a .\qquad\square
$$

## Preuve à trous

*Sens direct.* Si $f$ est différentiable en $a$, alors $f_i=p_i\circ f$ l'est aussi, et <trou indice="règle de la chaîne, et la différentielle d'une application linéaire continue est elle-même">$(df_i)_a=p_i\circ df_a$, car $p_i$ est linéaire continue donc $d(p_i)_{f(a)}=p_i$</trou>.

*Réciproque.* Si toutes les $f_i$ sont différentiables en $a$, on écrit <trou indice="utiliser la relation (V.3.2) entre les ι_i et les p_i">$f=\sum_{i=1}^n\iota_i\circ p_i\circ f=\sum_{i=1}^n\iota_i\circ f_i$</trou>. Chaque terme $\iota_i\circ f_i$ est différentiable en $a$, de différentielle $\iota_i\circ(df_i)_a$, et <trou indice="quel résultat permet de différentier une somme ? pourquoi faut-il n fini ?">la linéarité de la différentielle (somme **finie**) donne $df_a=\sum_i\iota_i\circ(df_i)_a$</trou>. $\square$

## Exemples

* **Hélice.** $f:\R\to\R^3$, $f(t)=(\cos t,\sin t,t)$ : chaque composante est dérivable, donc $f$ aussi, et $f'(t)=df_t(1)=(-\sin t,\cos t,1)$.
* **De $\R^2$ dans $\R^2$, ligne par ligne.** $f(x,y)=(xy,\ x+y)$. Composantes : $f_1(x,y)=xy$, $d(f_1)_{(x,y)}(h,k)=yh+xk$ ([[ch05-differentielle-bilineaire]]) ; $f_2$ linéaire, $d(f_2)_{(x,y)}(h,k)=h+k$. Donc $df_{(x,y)}(h,k)=(yh+xk,\ h+k)$, de matrice jacobienne $\begin{pmatrix}y&x\\1&1\end{pmatrix}$.
* **Espaces de matrices.** $f:\Mat_n(\R)\to\Mat_n(\R)\times\R$, $f(A)=(A^2,\ \mathrm{tr}\,A)$. Par [[ch05-formule-leibniz]], $d(A\mapsto A^2)_A(H)=AH+HA$, et la trace est linéaire. Donc $df_A(H)=(AH+HA,\ \mathrm{tr}\,H)$.

## Pièges

* > ⚠️ Ici il y a **équivalence**, car le produit est à l'**arrivée**. Pour un produit au **départ** ($E=E_1\times\cdots\times E_m$, dérivées partielles), on n'a qu'une **implication** : l'existence des dérivées partielles n'entraîne pas la différentiabilité ([[ch05-differentielles-partielles]], [[ch05-partielles-sans-differentiabilite]]).
* L'équivalence est propre aux produits **finis** (contre-exemple dans $\ell^\infty$ ci-dessus).
* $p_i\circ df_a$ et non $df_a\circ p_i$ : la projection agit **après** $df_a$, sur l'espace d'arrivée.
