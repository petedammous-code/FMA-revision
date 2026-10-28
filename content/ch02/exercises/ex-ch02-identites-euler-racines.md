---
id: ex-ch02-identites-euler-racines
type: exercise
chapters: [2]
title: Identités d'Euler sur les racines d'un polynôme
source: "Inventé (sur les identités classiques d'Euler pour les racines simples d'un polynôme)"
difficulty: 2
time: 20
tools: [ch02-formule-residus, ch02-indice-cercle, ch02-residu-pole-simple, ch01-longueur-majoration-integrale]
---
## Énoncé

Soit $n\ge2$ et $P(z)=c_nz^n+c_{n-1}z^{n-1}+\dots+c_0$ un polynôme de degré $n$ ($c_n\ne0$) dont les $n$ racines $a_1,\dots,a_n$ sont **simples** (deux à deux distinctes).

1. Montrer que, pour tout entier $j$ tel que $0\le j\le n-1$,
$$
\sum_{k=1}^n\frac{a_k^{\,j}}{P'(a_k)}=\begin{cases}0 & \text{si } 0\le j\le n-2,\\ \dfrac1{c_n} & \text{si } j=n-1.\end{cases}
$$
2. On suppose de plus $P(0)\ne0$. Calculer $\displaystyle\sum_{k=1}^n\frac{1}{a_k\,P'(a_k)}$.
3. Soient $x_1,\dots,x_n$ des nombres complexes deux à deux distincts. Montrer que
$$
\sum_{k=1}^n\ \prod_{l\ne k}\frac1{x_k-x_l}=0 .
$$
Vérifier « à la main » le cas $n=2$, puis le cas $n=3$ avec $(x_1,x_2,x_3)=(0,1,2)$.

## Indices

### Indice 1
Une somme de valeurs aux zéros d'un polynôme : la voir comme une **somme de résidus** d'une fraction rationnelle bien choisie, puis intégrer sur un grand cercle.

### Indice 2
$\frac{z^j}{P(z)}$ est méromorphe sur $\C$ (simplement connexe), à pôles simples aux $a_k$, et $\Res_{a_k}\big(\frac{z^j}{P}\big)=\frac{a_k^j}{P'(a_k)}$ (résidu de $\frac fq$ en un zéro simple de $q$). Pour $R>\max_k|a_k|$, tous les pôles sont dans $D(0,R)$, d'indice $1$ pour $C(0,R)$.

### Indice 3
L'intégrale sur $C(0,R)$ ne dépend pas de $R$ ; faire $R\to+\infty$. Pour $j\le n-2$, $\left|\frac{z^j}{P(z)}\right|\le\frac{2R^j}{|c_n|R^n}$ sur $C(0,R)$ pour $R$ grand. Pour $j=n-1$, comparer $\frac{z^{n-1}}{P(z)}$ et $\frac1{c_nz}$.

## Corrigé

**Préliminaires.** Pour $R>0$, $|P(z)|\ge|c_n|R^n-\sum_{i<n}|c_i|R^i$ sur $C(0,R)$, donc il existe $R_0$ tel que $|P(z)|\ge\frac{|c_n|}2R^n$ pour $|z|=R\ge R_0$. On fixe $R>\max(R_0,|a_1|,\dots,|a_n|)$.

**1.** Soit $0\le j\le n-1$ et $f_j(z)=\dfrac{z^j}{P(z)}$.

*Hypothèses de la formule des résidus.* $f_j$ est une fraction rationnelle, donc méromorphe sur $\C$, ouvert simplement connexe. Ses pôles sont parmi les zéros $a_k$ de $P$. En $a_k$, $P$ a un zéro simple ($P(a_k)=0\ne P'(a_k)$, car les racines sont simples). Si $a_k\neq0$ ou $j=0$, le numérateur ne s'annule pas en $a_k$ et c'est un pôle simple ; si $a_k=0$ et $j\ge1$, $f_j$ se prolonge holomorphiquement en $0$ (fausse singularité) et la formule ci-dessous donne alors un résidu $0=a_k^j/P'(a_k)$, ce qui est cohérent. Dans tous les cas ([[ch02-residu-pole-simple]], forme $\Res_{z_0}(f/q)=f(z_0)/q'(z_0)$ pour $q$ à zéro simple) :
$$
\Res_{a_k}(f_j)=\frac{a_k^{\,j}}{P'(a_k)} .
$$
Le lacet $C(0,R)$ ne passe par aucun $a_k$ (car $|a_k|<R$), et $\Ind_{a_k}(C(0,R))=1$ ([[ch02-indice-cercle]]). La formule des résidus ([[ch02-formule-residus]]) donne
$$
\frac1{2i\pi}\int_{C(0,R)}f_j(z)\,dz=\sum_{k=1}^n\frac{a_k^{\,j}}{P'(a_k)}=:S_j .
$$
En particulier l'intégrale ne dépend pas de $R$ (pour $R$ assez grand).

*Cas $j\le n-2$.* Sur $C(0,R)$, $|f_j(z)|\le\dfrac{R^j}{\frac{|c_n|}2R^n}=\dfrac{2}{|c_n|}R^{j-n}$, d'où par la majoration longueur × sup ([[ch01-longueur-majoration-integrale]])
$$
|S_j|\le\frac1{2\pi}\cdot2\pi R\cdot\frac{2}{|c_n|}R^{j-n}=\frac{2}{|c_n|}R^{\,j+1-n}\xrightarrow[R\to+\infty]{}0
$$
car $j+1-n\le-1$. Comme $S_j$ ne dépend pas de $R$, $S_j=0$.

*Cas $j=n-1$.* On écrit
$$
\frac{z^{n-1}}{P(z)}-\frac{1}{c_nz}=\frac{c_nz^n-P(z)}{c_n\,z\,P(z)}=-\frac{c_{n-1}z^{n-1}+\dots+c_0}{c_n\,z\,P(z)} .
$$
Sur $C(0,R)$, le module du numérateur est $\le A R^{n-1}$ avec $A=\sum_{i<n}|c_i|$ (pour $R\ge1$), et celui du dénominateur est $\ge|c_n|R\cdot\frac{|c_n|}2R^n$ ; l'intégrale de cette différence est donc majorée par $2\pi R\cdot\frac{2A}{|c_n|^2}R^{-2}\to0$. Or $\frac1{2i\pi}\int_{C(0,R)}\frac{dz}{c_nz}=\frac1{c_n}\Ind_0(C(0,R))=\frac1{c_n}$. Donc $S_{n-1}=\lim_{R\to\infty}\frac1{2i\pi}\int_{C(0,R)}f_{n-1}=\frac1{c_n}$.

**2.** Soit $g(z)=\dfrac1{zP(z)}$, méromorphe sur $\C$. Comme $P(0)\ne0$, les $a_k$ sont non nuls et $zP(z)$ a $n+1$ zéros simples : $0$ et les $a_k$. Avec $q(z)=zP(z)$, $q'(z)=P(z)+zP'(z)$, donc $q'(0)=P(0)$ et $q'(a_k)=a_kP'(a_k)$ ; par [[ch02-residu-pole-simple]],
$$
\Res_0(g)=\frac1{P(0)},\qquad\Res_{a_k}(g)=\frac1{a_kP'(a_k)} .
$$
Pour $R$ comme ci-dessus, tous ces pôles sont d'indice $1$ et $|g|\le\frac{2}{|c_n|R^{n+1}}$ sur $C(0,R)$, donc $\left|\int_{C(0,R)}g\right|\le\frac{4\pi}{|c_n|R^n}\to0$ ; l'intégrale étant indépendante de $R$, elle est nulle. La formule des résidus donne $\frac1{P(0)}+\sum_k\frac1{a_kP'(a_k)}=0$, soit
$$
\sum_{k=1}^n\frac1{a_kP'(a_k)}=-\frac1{P(0)} .
$$
(Ce calcul n'utilise que $n\ge1$.)

**3.** Soit $P(z)=\prod_{l=1}^n(z-x_l)$ : degré $n\ge2$, $c_n=1$, racines simples $x_1,\dots,x_n$. En dérivant le produit, $P'(z)=\sum_{m}\prod_{l\ne m}(z-x_l)$, et en $z=x_k$ seul le terme $m=k$ ne contient pas le facteur nul $(x_k-x_k)$ : $P'(x_k)=\prod_{l\ne k}(x_k-x_l)$. La question 1 avec $j=0\le n-2$ donne
$$
\sum_{k=1}^n\prod_{l\ne k}\frac1{x_k-x_l}=\sum_k\frac1{P'(x_k)}=0 .
$$
*Vérifications.* $n=2$ : $\frac1{x_1-x_2}+\frac1{x_2-x_1}=0$. $n=3$, $(0,1,2)$ : $\frac1{(0-1)(0-2)}+\frac1{(1-0)(1-2)}+\frac1{(2-0)(2-1)}=\frac12-1+\frac12=0$.

(La question 1 avec $j=n-1$ donne de même $\sum_k x_k^{n-1}\prod_{l\ne k}\frac1{x_k-x_l}=1$ ; pour $(0,1,2)$ : $0-1+\frac42=1$.)

## Pièges et variantes

* **Racines simples indispensables.** Si $a$ est racine double de $P$, $P'(a)=0$ et la formule n'a plus de sens ; $\frac{z^j}{P}$ a alors un pôle double en $a$, dont le résidu n'est pas $\frac{a^j}{P'(a)}$. Exemple : $P=z^2$, $j=0$ : la somme des résidus de $\frac1{z^2}$ est $0$, mais l'expression $\frac1{P'(0)}$ n'existe pas.
* **Ne pas oublier les pôles « en plus »** : dans la question 2, le pôle en $0$ de $\frac1{zP}$ fournit le terme $\frac1{P(0)}$.
* **Pourquoi $j\le n-2$ ?** Il faut $|z^jf|$ en $O(R^{-2})$ sur $C(0,R)$ pour que l'intégrale tende vers $0$ ; pour $j=n-1$ elle est en $\frac1{c_nz}$ et l'intégrale tend vers $\frac{2i\pi}{c_n}$, pas vers $0$ (c'est le « résidu à l'infini »).
* **Variante.** Pour $Q$ polynôme de degré $\le n-2$, la même preuve donne $\sum_k\frac{Q(a_k)}{P'(a_k)}=0$. On la retrouve aussi par la décomposition en éléments simples $\frac{Q}{P}=\sum_k\frac{Q(a_k)}{P'(a_k)}\frac1{z-a_k}$ (valable si $\deg Q\le n-1$) : multiplier par $z$ et faire $z\to\infty$ ; le membre de gauche tend vers $0$ si $\deg Q\le n-2$.
* **Variante.** Pour $P(z)=z^n-1$, $a_k=e^{2ik\pi/n}$ et $P'(a_k)=na_k^{n-1}=n/a_k$ : la question 1 se réduit à $\sum_k a_k^{\,j+1}=0$ pour $0\le j\le n-2$, fait bien connu sur les racines de l'unité.
