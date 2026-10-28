---
id: ex-ch03-lambert-diviseurs
type: exercise
chapters: [3]
title: Une série de Lambert et le nombre de diviseurs
source: "Classique (séries de Lambert), adapté"
difficulty: 1
time: 15
tools: [ch03-weierstrass-series, ch03-weierstrass, ch03-convergence-normale-definition, ch01-estimees-cauchy]
---
## Énoncé

On note $D=D(0,1)$ et, pour tout entier $m\ge1$, $d(m)$ le nombre de diviseurs positifs de $m$ (par exemple $d(1)=1$, $d(6)=4$). Pour $n\ge1$ et $z\in D$, on pose
$$
f_n(z)=\frac{z^n}{1-z^n},\qquad L(z)=\sum_{n\ge1}\frac{z^n}{1-z^n}.
$$
1. Montrer que la série définissant $L$ converge en tout point de $D$ et que $L$ est holomorphe sur $D$.
2. Montrer que, pour tout $m\ge0$, $L^{(m)}(0)=\sum_{n\ge1}f_n^{(m)}(0)$, puis que
$$
L(z)=\sum_{m\ge1}d(m)\,z^m\qquad (z\in D).
$$
3. Quel est le rayon de convergence de la série entière $\sum_{m\ge1}d(m)z^m$ ?

## Indices

### Indice 1
Une série de fonctions holomorphes : quel mode de convergence faut-il établir pour que la somme soit holomorphe et dérivable terme à terme ? Sur quels ensembles l'établir, sachant que $D$ lui-même pose problème près du cercle unité ?

### Indice 2
Sur $\bar D(0,r)$ avec $0<r<1$ : $|1-z^n|\ge 1-|z|^n\ge 1-r$. Majorer $\norm{f_n}_{\infty,\bar D(0,r)}$ par le terme général d'une série géométrique, puis appliquer le théorème de Weierstraß pour les séries (convergence localement normale).

### Indice 3
Pour $|z|<1$, $f_n(z)=\sum_{k\ge1}z^{nk}$ : le coefficient de $z^m$ dans ce développement vaut $1$ si $n$ divise $m$ (et $m\ge1$), $0$ sinon. Or ce coefficient est $f_n^{(m)}(0)/m!$.

## Corrigé

**1. Holomorphie.** Chaque $f_n$ est holomorphe sur $D$ : c'est un quotient de polynômes dont le dénominateur ne s'annule pas sur $D$, puisque $|z^n|=|z|^n<1$ ([[ch01-polynomes-fractions-rationnelles]]).

Fixons $0<r<1$. Pour $z\in\bar D(0,r)$ et $n\ge1$,
$$
|1-z^n|\ge 1-|z|^n\ge 1-r^n\ge 1-r>0,\qquad\text{donc}\qquad |f_n(z)|\le\frac{r^n}{1-r}.
$$
Ainsi $\norm{f_n}_{\infty,\bar D(0,r)}\le r^n/(1-r)$, terme général d'une série géométrique convergente ($0<r<1$) : la série $\sum f_n$ **converge normalement** sur $\bar D(0,r)$ ([[ch03-convergence-normale-definition]]), donc en particulier en tout point de $\bar D(0,r)$. Tout point $z_0\in D$ admet le voisinage $D(0,r)$ avec $|z_0|<r<1$ : la convergence est **localement normale** sur $D$. (Elle n'est pas normale sur $D$ tout entier : $\sup_D|f_n|=+\infty$ car $f_n(x)\to+\infty$ quand $x\to1^-$.)

Le théorème de Weierstraß pour les séries ([[ch03-weierstrass-series]]) s'applique : $L$ est holomorphe sur $D$ et $L'=\sum_n f_n'$.

**2. Coefficients.** Appliquons le théorème de Weierstraß ([[ch03-weierstrass]]) à la suite des sommes partielles $S_N=\sum_{n=1}^N f_n$ : elles sont holomorphes sur $D$ et convergent localement uniformément vers $L$ (la convergence normale entraîne la convergence uniforme sur chaque $\bar D(0,r)$), donc pour tout $m\ge1$, $S_N^{(m)}\to L^{(m)}$ localement uniformément, en particulier au point $0$ :
$$
L^{(m)}(0)=\lim_{N\to\infty}\sum_{n=1}^N f_n^{(m)}(0)=\sum_{n\ge1}f_n^{(m)}(0).
$$
(Pour $m=0$ c'est la définition de $L(0)=\sum f_n(0)=0$.)

Calculons $f_n^{(m)}(0)$. Pour $|z|<1$, la série géométrique donne
$$
f_n(z)=z^n\sum_{j\ge0}z^{nj}=\sum_{k\ge1}z^{nk}.
$$
C'est une série entière de rayon $1$ ; par unicité du développement en série entière ([[ch01-estimees-cauchy]] : ses coefficients sont les $f_n^{(m)}(0)/m!$), on obtient
$$
\frac{f_n^{(m)}(0)}{m!}=\begin{cases}1 & \text{si } m\ge1 \text{ et } n \text{ divise } m,\\ 0 & \text{sinon.}\end{cases}
$$
Donc, pour $m\ge1$,
$$
\frac{L^{(m)}(0)}{m!}=\sum_{n\ge1}\frac{f_n^{(m)}(0)}{m!}=\#\{n\ge1 : n \text{ divise } m\}=d(m),
$$
la somme étant en fait finie (seuls $n\le m$ contribuent), et $L(0)=0$.

Enfin $L$ est holomorphe sur $D=D(0,1)$, donc ([[ch01-estimees-cauchy]]) elle est égale à sa série de Taylor en $0$ sur le plus grand disque ouvert centré en $0$ contenu dans $D$, c'est-à-dire $D$ lui-même :
$$
L(z)=\sum_{m\ge0}\frac{L^{(m)}(0)}{m!}z^m=\sum_{m\ge1}d(m)z^m\qquad(z\in D).
$$
Vérification sur les premiers termes : $\frac{z}{1-z}+\frac{z^2}{1-z^2}+\frac{z^3}{1-z^3}+\dots=z+2z^2+2z^3+3z^4+\dots$, et $d(1)=1$, $d(2)=2$, $d(3)=2$, $d(4)=3$.

**3. Rayon.** On a $1\le d(m)\le m$ (les diviseurs de $m$ sont parmi $1,\dots,m$). La série $\sum z^m$ diverge pour $|z|=1$ (terme général de module $1$) et $\sum m z^m$ converge pour $|z|<1$ ; par comparaison, le rayon $\rho$ de $\sum d(m)z^m$ vérifie $1\le\rho\le1$ : $\rho=1$. (On retrouve d'ailleurs $\rho\ge1$ directement par la question 2.)

## Pièges et variantes

* Ne pas chercher la convergence normale sur $D$ tout entier : elle est fausse ($f_n$ n'est pas bornée sur $D$). Le théorème ne demande qu'une convergence **localement** normale, qu'on établit sur les disques $\bar D(0,r)$, $r<1$.
> ⚠️ L'égalité $L^{(m)}(0)=\sum_n f_n^{(m)}(0)$ n'est pas « évidente » : c'est exactement le point 2 du théorème de Weierstraß (dérivées de tous ordres des sommes partielles). Pour une série seulement simplement convergente, elle peut être fausse.
* On a évité d'intervertir une double somme $\sum_n\sum_k z^{nk}$ ; c'est possible aussi (famille sommable car $\sum_{n,k}|z|^{nk}\le\sum_n |z|^n/(1-|z|)<\infty$), mais il faut alors le justifier par sommabilité.
* Variante : $\sum_{n\ge1}\frac{n z^n}{1-z^n}=\sum_{m\ge1}\sigma(m)z^m$ où $\sigma(m)$ est la somme des diviseurs de $m$ ; même preuve, avec $\norm{n z^n/(1-z^n)}_{\infty,\bar D(0,r)}\le n r^n/(1-r)$.
* Variante : $\sum_{n\ge1}\mu(n)\frac{z^n}{1-z^n}=z$ (fonction de Möbius $\mu$), qui découle de $\sum_{n\mid m}\mu(n)=0$ pour $m\ge2$.
