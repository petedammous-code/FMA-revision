---
id: ch05-lef-banach-norme-algebre
type: proposition
chapter: 5
title: $\mathcal L(E;F)$ est normé, de Banach si $F$ l'est ; norme d'algèbre sur $\mathcal L(E)$
ref: non numéroté, section V.1.2, p. 93
page: 93
importance: 2
depends: [ch05-norme-operateur-def]
tags: [norme-operateur, banach, completude, norme-algebre, composition]
---
## Intuition

> 💡 Les applications linéaires continues forment elles-mêmes un espace vectoriel normé, et cet espace **hérite de la complétude de l'espace d'arrivée** : une suite d'opérateurs $T_k$ qui se stabilise (suite de Cauchy) se stabilise en chaque point $T_k(x)$, dans $F$ ; si $F$ est complet, on peut passer à la limite point par point. La complétude de $E$ ne joue **aucun** rôle.

Deuxième message : composer des opérateurs multiplie au pire leurs facteurs de dilatation. Si $B$ dilate au plus d'un facteur $\|B\|$ et $A$ d'un facteur $\|A\|$, alors $AB=A\circ B$ dilate au plus de $\|A\|\,\|B\|$. C'est ce qui rend utilisables les séries d'opérateurs comme $\sum_n h^n$.

Rappels : $\mathcal L(E;F)$ et la norme d'opérateur $\|T\|$ sont définis dans [[ch05-norme-operateur-def]] ; on a $\|T(x)\|\le\|T\|\,\|x\|$. Un **espace de Banach** est un evn complet. On écrit $AB$ pour la composée $A\circ B$.

## Énoncé

**Proposition (poly, section V.1.2, p. 93-94, non numérotée).** Soient $E$ et $F$ des espaces vectoriels normés.

1. $\|\cdot\|_{\mathcal L(E;F)}$ est une norme sur $\mathcal L(E;F)$ ; si de plus $F$ est un espace de Banach, $(\mathcal L(E;F),\|\cdot\|_{\mathcal L(E;F)})$ est lui aussi un espace de Banach.
2. La norme d'opérateur sur $\mathcal L(E)=\mathcal L(E;E)$ est une **norme d'algèbre** : $\|AB\|\le\|A\|\,\|B\|$ pour $A,B\in\mathcal L(E)$.
3. Plus généralement, si $G$ est un troisième evn, $A\in\mathcal L(F;G)$ et $B\in\mathcal L(E;F)$, alors $AB\in\mathcal L(E;G)$ et $\|AB\|\le\|A\|\,\|B\|$.

## Hypothèses

### H1 — $E$, $F$ (et $G$) espaces vectoriels normés, sans complétude de $E$

**Rôle.** Les normes servent à définir $\|T\|$ ; les points 1 (partie « norme »), 2 et 3 sont de pure algèbre d'inégalités.

**Si on la retire.** On ne peut pas retirer la structure d'evn (sinon $\|T\|$ n'a pas de sens). En revanche, il est important de noter que la complétude de $E$ **n'est pas** requise : par exemple le dual $\mathcal L(E;\R)$ d'un evn quelconque, même non complet, est toujours un Banach (car $\R$ est complet).

### H2 — $F$ de Banach (pour la complétude de $\mathcal L(E;F)$)

**Rôle.** Dans la preuve, on construit la limite $T(x)=\lim_k T_k(x)$ d'une suite de Cauchy de $F$ : il faut que $F$ soit complet.

**Si on la retire.** Prendre $E=\R$. L'application $T\mapsto T(1)$ est une **isométrie** bijective de $\mathcal L(\R;F)$ sur $F$ (Exercice V.1.2) : $\|T\|=\sup_{|t|\le1}\|tT(1)\|=\|T(1)\|$, et tout $v\in F$ provient de $T(t)=tv$. Donc $\mathcal L(\R;F)$ est complet si et seulement si $F$ l'est. Avec $F=\R[X]$ muni de $\|P\|=\sup_{[0,1]}|P|$, qui n'est pas complet (les $P_N=\sum_{k\le N}X^k/k!$ forment une suite de Cauchy qui converge uniformément sur $[0,1]$ vers $\exp$, qui n'est pas un polynôme car aucune de ses dérivées n'est identiquement nulle), $\mathcal L(\R;F)$ n'est pas un Banach.

### H3 — $A$ et $B$ composables et continues

**Rôle.** Pour écrire $\|A(B(x))\|\le\|A\|\,\|B(x)\|\le\|A\|\,\|B\|\,\|x\|$, il faut que les deux normes soient finies.

**Si on la retire.** Si $B$ n'est pas continue, $\|B\|=+\infty$ et l'inégalité ne dit rien ; $AB$ peut d'ailleurs être continue ou non (avec $A=0$, $AB=0$ est continue).

## Idée de la preuve

Norme : vérifier les trois axiomes ponctuellement puis passer au sup. Complétude : une suite de Cauchy $(T_k)$ est de Cauchy en chaque point ; on définit $T(x)=\lim T_k(x)$ et on fait tendre un des deux indices vers l'infini dans $\|T_k(x)-T_l(x)\|\le\eps\|x\|$. Norme d'algèbre : $\|ABx\|\le\|A\|\,\|Bx\|\le\|A\|\,\|B\|\,\|x\|$.

## Preuve

*Le poly renvoie au cours de 1re année (F. Pacard) ; voici la preuve classique.*

**Norme.** Soient $S,T\in\mathcal L(E;F)$, $\lambda\in\R$. On a $\|T\|\ge0$. Si $\|T\|=0$, alors $\|T(x)\|\le0\cdot\|x\|$ pour tout $x$, donc $T=0$. Ensuite $\|(\lambda T)(x)\|=|\lambda|\,\|T(x)\|$, et en passant au sup sur $\|x\|\le1$, $\|\lambda T\|=|\lambda|\,\|T\|$. Enfin, pour tout $x$,
$$
\|(S+T)(x)\|\le\|S(x)\|+\|T(x)\|\le(\|S\|+\|T\|)\,\|x\|,
$$
donc $S+T$ est bornée, i.e. continue ([[ch05-norme-operateur-def]]), et $\|S+T\|\le\|S\|+\|T\|$. Ainsi $\mathcal L(E;F)$ est un sous-espace vectoriel des applications linéaires et $\|\cdot\|$ en est une norme.

**Complétude si $F$ est de Banach.** Soit $(T_k)_{k\in\N}$ une suite de Cauchy de $\mathcal L(E;F)$.

* *Limite simple.* Pour $x\in E$, $\|T_k(x)-T_l(x)\|\le\|T_k-T_l\|\,\|x\|$, donc $(T_k(x))_k$ est de Cauchy dans $F$, qui est complet : elle converge vers une limite notée $T(x)$. Par passage à la limite dans $T_k(\lambda x+y)=\lambda T_k(x)+T_k(y)$, l'application $T:E\to F$ est linéaire.
* *Convergence en norme.* Soit $\eps>0$ et $N$ tel que $\|T_k-T_l\|\le\eps$ pour $k,l\ge N$. Pour $k,l\ge N$ et tout $x$ : $\|T_k(x)-T_l(x)\|\le\eps\|x\|$. À $k$ fixé, on fait $l\to+\infty$ (la norme est continue) : $\|T_k(x)-T(x)\|\le\eps\|x\|$ pour tout $x$ et tout $k\ge N$.
* *Conclusion.* L'application linéaire $T_k-T$ est donc bornée, donc continue, donc $T=T_k-(T_k-T)\in\mathcal L(E;F)$, et $\|T_k-T\|\le\eps$ pour $k\ge N$ : $T_k\to T$ dans $\mathcal L(E;F)$.

**Norme d'algèbre.** Soient $A\in\mathcal L(F;G)$ et $B\in\mathcal L(E;F)$. La composée $AB$ est linéaire, et pour tout $x\in E$,
$$
\|AB(x)\|_G=\|A(B(x))\|_G\le\|A\|\,\|B(x)\|_F\le\|A\|\,\|B\|\,\|x\|_E .
$$
Donc $AB$ est bornée, i.e. $AB\in\mathcal L(E;G)$, et $\|AB\|\le\|A\|\,\|B\|$. Le cas $E=F=G$ donne le point 2. $\square$

## Preuve à trous

**Complétude.** Soit $(T_k)$ de Cauchy dans $\mathcal L(E;F)$, $F$ complet. Pour $x\in E$, <trou indice="majorer l'écart en un point par la norme d'opérateur">$\|T_k(x)-T_l(x)\|\le\|T_k-T_l\|\,\|x\|$, donc $(T_k(x))$ est de Cauchy dans $F$ complet</trou> : elle converge vers $T(x)$, et $T$ est linéaire par passage à la limite. Soit $\eps>0$ et $N$ tel que $\|T_k-T_l\|\le\eps$ pour $k,l\ge N$ ; alors $\|T_k(x)-T_l(x)\|\le\eps\|x\|$ et, <trou indice="quel indice envoyer à l'infini ?">en faisant $l\to+\infty$ à $k$ fixé, $\|T_k(x)-T(x)\|\le\eps\|x\|$ pour tout $x$</trou>. Donc <trou>$T_k-T$ est bornée, $T=T_k-(T_k-T)\in\mathcal L(E;F)$ et $\|T_k-T\|\le\eps$ pour $k\ge N$</trou>.

**Norme d'algèbre.** Pour $x\in E$ : $\|AB(x)\|\le$ <trou indice="appliquer deux fois l'inégalité fondamentale">$\|A\|\,\|B(x)\|\le\|A\|\,\|B\|\,\|x\|$</trou>, donc $\|AB\|\le\|A\|\,\|B\|$. $\square$

## Exemples

* **Identification $\mathcal L(\R;F)\simeq F$** (Exercice V.1.2) : $T\mapsto T(1)$ est linéaire, bijective (inverse $v\mapsto(t\mapsto tv)$) et isométrique, car $\|T\|=\sup_{|t|\le1}|t|\,\|T(1)\|=\|T(1)\|$. Par exemple, la dérivée $f'(a)$ d'une courbe s'identifie à la différentielle $df_a\in\mathcal L(\R;F)$ ([[ch05-derivee-variable-reelle]]).
* **Inégalité stricte.** Sur $\R^2$ euclidien, $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, $B=\begin{pmatrix}0&0\\0&1\end{pmatrix}$ : $\|A\|=\|B\|=1$ mais $AB=0$, donc $\|AB\|=0<1=\|A\|\,\|B\|$. Remarque : $\|\mathrm{Id}_E\|=1$ dès que $E\ne\{0\}$.
* **Puissances et séries.** Par récurrence $\|h^n\|\le\|h\|^n$ pour $h\in\mathcal L(E)$. Si $E$ est de Banach et $\|h\|<1$, la série $\sum_n h^n$ est absolument convergente dans $\mathcal L(E)$, qui est complet (point 1), donc converge ([[ch05-banach-series-absolument-convergentes]]) : c'est la **série de Neumann** ([[ch05-serie-neumann]]), qui inverse $\mathrm{Id}_E-h$.

## Pièges

* > ⚠️ La complétude de $\mathcal L(E;F)$ vient de celle de **$F$** (l'arrivée), pas de $E$.
* La limite simple $T$ d'une suite d'opérateurs continus n'est pas automatiquement continue ni limite **en norme** : ici c'est l'hypothèse « de Cauchy en norme d'opérateur » qui donne les deux.
* $\|AB\|\le\|A\|\,\|B\|$ est en général **stricte** ; et $\|A^n\|\le\|A\|^n$ n'est qu'une majoration (pour une matrice nilpotente non nulle, $\|A^n\|=0$ pour $n$ grand alors que $\|A\|^n>0$).
* Dans $\mathcal L(E)$, le produit $AB$ est la **composée** $A\circ B$ (on applique $B$ d'abord), et en général $AB\ne BA$.
