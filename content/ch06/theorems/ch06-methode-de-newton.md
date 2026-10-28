---
id: ch06-methode-de-newton
type: theorem
chapter: 6
title: Méthode de Newton dans les espaces de Banach
ref: Exercice VI.4.2
page: 121
importance: 2
depends: [ch06-point-fixe-banach, ch05-accroissements-finis, ch06-neumann-inverse-id-moins-l, ch05-inversion-c-infini]
tags: [Newton, point fixe, convergence quadratique, Banach, Kantorovitch]
---
## Intuition

> 💡 Pour résoudre $f(x)=0$, on remplace $f$ près de $x_n$ par son approximation affine $f(x_n)+df_{x_n}(x-x_n)$, et on résout **celle-ci** : $x_{n+1}=x_n-df_{x_n}^{-1}\big(f(x_n)\big)$. En dimension $1$, c'est « suivre la tangente jusqu'à l'axe ».

Pourquoi c'est si rapide : l'erreur commise en linéarisant est d'ordre $2$ (si $df$ est lipschitzienne, $\norm{f(z)-f(x_n)-df_{x_n}(z-x_n)}\le M\norm{z-x_n}^2$), donc l'erreur au pas suivant est le **carré** de l'erreur actuelle : le nombre de décimales exactes double à chaque itération (**convergence quadratique**). La preuve consiste à écrire Newton comme l'itération d'une contraction $\phi$ et à appliquer le point fixe de Banach ([[ch06-point-fixe-banach]]). Ici $E$, $F$ sont des espaces de Banach, $\mathcal L(E,F)$ est muni de la norme d'opérateur, et un **isomorphisme** $E\to F$ est une bijection linéaire continue (sa réciproque est alors continue, [[ch05-isomorphisme-banach]]).

## Énoncé

**Théorème (poly, Exercice VI.4.2 : La méthode de Newton, p. 121).** Soit $U$ un ouvert convexe d'un espace de Banach $E$ et soit $f:U\to F$ une application de classe $C^1$ à valeurs dans un espace de Banach $F$.

1. (Accroissements finis « centrés ».) Pour tous $a,b,c\in U$,
$$
\norm{f(b)-f(a)-df_c(b-a)}_F\le\Big(\sup_{u\in[a,b]}\norm{df_u-df_c}\Big)\norm{b-a}_E .
$$

On suppose qu'en un point $x_0\in U$, $df_{x_0}:E\to F$ est un isomorphisme, et qu'il existe $M\gt0$ tel que $\norm{df_b-df_a}\le M\norm{b-a}_E$ pour tous $a,b\in U$. On pose $C=\norm{df_{x_0}^{-1}}$.

2. Il existe $\delta\gt0$ tel que $df_{x_0+r}$ soit un isomorphisme pour $\norm{r}_E\lt\delta$ ; avec $g(r)=df_{x_0+r}^{-1}$, on a pour $r,r'\in B_E(0,\delta)$ : $\norm{g(r)-g(r')}\le M\,\norm{g(r)}\,\norm{g(r')}\,\norm{r-r'}_E$.
3. Si de plus $\delta\lt(2MC)^{-1}$, alors $\norm{g(r)}\le\dfrac{C}{1-MC\norm{r}_E}\le2C$ pour $r\in B_E(0,\delta)$.

On pose $R(r)=f(x_0)-f(x_0+r)+df_{x_0+r}(r)$ et (signe corrigé, voir Pièges)
$$
\phi(r)=df_{x_0+r}^{-1}\big(R(r)-f(x_0)\big)=r-df_{x_0+r}^{-1}\big(f(x_0+r)\big).
$$

4. Pour $r,r'\in B_E(0,\delta)$ : $\norm{R(r)-R(r')}_F\le M\big(\norm{r-r'}_E^2+\norm{r'}_E\norm{r-r'}_E\big)$ et
$$
\norm{\phi(r)-\phi(r')}_E\le2CM\big(\norm{r-r'}_E^2+\norm{r'}_E\norm{r-r'}_E\big)+4C^2M\big(\norm{f(x_0)}_F+M\norm{r'}_E^2\big)\norm{r-r'}_E .
$$
5. Si $\delta$ et $\norm{f(x_0)}_F$ sont assez petits, il existe $K\in\,]0,1[$ tel que $\phi$ soit $K$-lipschitzienne, et si de plus $C\norm{f(x_0)}_F\le(1-K)\delta'$ (avec $0\lt\delta'\lt\delta$), $\phi$ envoie la boule fermée $\bar B_E(0,\delta')$ dans elle-même : c'est une contraction.
6. La suite $x_n=x_0+r_n$, $r_0=0$, $r_{n+1}=\phi(r_n)$, vérifie $x_{n+1}=x_n-df_{x_n}^{-1}\big(f(x_n)\big)$ et converge vers $z$ avec $f(z)=0$.
7. (Vitesse.) $\norm{x_{n+1}-z}_E\le2CM\,\norm{x_n-z}_E^2$ : la convergence est quadratique.

## Hypothèses

### H1 — $E$ et $F$ de Banach

**Rôle.** Complétude de la boule fermée $\bar B_E(0,\delta')$ pour le point fixe ; série de Neumann (question 2) dans $\mathcal L(E)$ complet.

**Si on la retire.** Les itérés de Newton restent définis mais peuvent converger hors de l'espace : dans $\Q$, Newton pour $x^2-2$ depuis $x_0=1$ produit $1,\ \frac32,\ \frac{17}{12},\ \frac{577}{408},\dots$, suite de Cauchy de rationnels sans limite dans $\Q$ (la limite $\sqrt2$ est irrationnelle).

### H2 — $U$ convexe

**Rôle.** La question 1 utilise les segments $[a,b]\subset U$.

**Si on la retire.** Hypothèse de confort : toute la suite de la preuve se passe dans la boule $B_E(x_0,\delta)\subset U$, qui est convexe ; il suffit que $df$ soit $M$-lipschitzienne sur cette boule. La conclusion reste vraie avec $U$ quelconque.

### H3 — $df$ est $M$-lipschitzienne

**Rôle.** Elle donne le reste quadratique $\norm{f(b)-f(a)-df_a(b-a)}\le M\norm{b-a}^2$ (question 1 avec $c=a$), qui est au cœur des questions 2 à 7.

**Si on la retire.** Avec $f$ seulement $C^1$, la convergence locale reste vraie mais n'est plus quadratique. Exemple : $f(x)=x+x|x|^{1/2}$ sur $\R$, $C^1$, $f'(x)=1+\frac32|x|^{1/2}$ (hölderienne d'exposant $\frac12$, pas lipschitzienne en $0$), racine $z=0$. Newton donne, avec $s=|x_n|^{1/2}$ :
$$
x_{n+1}=x_n-\frac{x_n(1+s)}{1+\frac32s}=x_n\,\frac{s/2}{1+\frac32s},\qquad\text{donc}\quad\frac{|x_{n+1}|}{|x_n|^2}=\frac{1}{2s(1+\frac32s)}\to+\infty :
$$
la convergence est d'ordre $\frac32$ seulement (depuis $x_0=0{,}1$ : $1{,}1\cdot10^{-2}$, $4{,}8\cdot10^{-4}$, $5{,}1\cdot10^{-6}$, $5{,}7\cdot10^{-9}$).

### H4 — $df_{x_0}$ isomorphisme

**Rôle.** Rend $g(r)=df_{x_0+r}^{-1}$ défini et borné par $2C$ près de $x_0$.

**Si on la retire.** Pour $f(x)=x^2$, la racine $0$ est double ($f'(0)=0$) : Newton donne $x_{n+1}=x_n-\frac{x_n^2}{2x_n}=\frac{x_n}2$, convergence seulement **linéaire**. Les hypothèses de la question 5 ne peuvent pas être satisfaites : $C=\frac1{2|x_0|}$, $M=2$, et $\delta\lt\frac1{2MC}=\frac{|x_0|}2$ empêche la boule de contenir la racine.

### H5 — $\norm{f(x_0)}$ petit (point de départ proche d'une racine)

**Rôle.** Assure que $\phi$ est contractante et stabilise la boule (question 5).

**Si on la retire.** Newton peut cycler ou diverger. $f(x)=x^3-2x+2$ depuis $x_0=0$ : $x_1=0-\frac{2}{-2}=1$, $x_2=1-\frac11=0$ : cycle $0,1,0,1,\dots$. Et $f(x)=\arctan x$ (racine $0$, $f'(0)=1$) : $x_{n+1}=x_n-(1+x_n^2)\arctan x_n$ diverge dès que $|x_0|\gt1{,}3917$ (depuis $1{,}5$ : $-1{,}69$, $2{,}32$, $-5{,}11$, $32{,}3$, …).

## Idée de la preuve

On écrit $x_n=x_0+r_n$ avec $r_{n+1}=\phi(r_n)$ ; les accroissements finis centrés et l'identité $A^{-1}-B^{-1}=A^{-1}(B-A)B^{-1}$ montrent que $\phi$ est une contraction d'une petite boule fermée si $\norm{f(x_0)}$ est petit. Point fixe de Banach, puis estimation $x_{n+1}-z=df_{x_n}^{-1}\big(f(z)-f(x_n)-df_{x_n}(z-x_n)\big)$ pour la vitesse.

## Preuve

**Question 1.** Soit $h:U\to F$, $h(x)=f(x)-df_c(x)$. Elle est $C^1$ avec $dh_u=df_u-df_c$. Comme $[a,b]\subset U$ ($U$ convexe), l'inégalité des accroissements finis ([[ch05-accroissements-finis]]) donne $\norm{h(b)-h(a)}\le\sup_{u\in[a,b]}\norm{dh_u}\,\norm{b-a}$, c'est-à-dire l'inégalité voulue. Cas particulier utile : si $c=a$ ou $c=b$, tout $u\in[a,b]$ vérifie $\norm{u-c}\le\norm{b-a}$, donc
$$
\norm{f(b)-f(a)-df_c(b-a)}\le M\norm{b-a}^2\qquad(c\in\{a,b\}).\qquad(\ast)
$$

**Question 2 (et 3).** Choisissons $\delta\gt0$ avec $B_E(x_0,\delta)\subset U$ et $\delta\lt(2MC)^{-1}$. Pour $\norm{r}\lt\delta$,
$$
df_{x_0+r}=df_{x_0}\circ\big(\mathrm{Id}_E-L\big),\qquad L=df_{x_0}^{-1}\circ\big(df_{x_0}-df_{x_0+r}\big),\qquad\norm{L}\le CM\norm{r}\lt\tfrac12 .
$$
Par la série de Neumann ([[ch06-neumann-inverse-id-moins-l]]), $\mathrm{Id}_E-L$ est inversible d'inverse borné, donc $df_{x_0+r}$ est un isomorphisme (c'est aussi l'ouverture de $\mathrm{Iso}(E;F)$, [[ch05-inversion-c-infini]]). Pour deux isomorphismes $A$, $B$ : $A^{-1}-B^{-1}=A^{-1}(B-A)B^{-1}$. Avec $A=df_{x_0+r}$, $B=df_{x_0+r'}$ :
$$
\norm{g(r)-g(r')}\le\norm{g(r)}\,\norm{df_{x_0+r'}-df_{x_0+r}}\,\norm{g(r')}\le M\,\norm{g(r)}\,\norm{g(r')}\,\norm{r-r'} .
$$
Avec $r'=0$ : $\norm{g(r)}\le C+MC\norm{r}\,\norm{g(r)}$, d'où, comme $1-MC\norm{r}\gt\frac12$,
$$
\norm{g(r)}\le\frac{C}{1-MC\norm{r}}\le2C .
$$

**Question 4.** On a $R(r)-R(r')=-\big[f(x_0+r)-f(x_0+r')-df_{x_0+r}(r-r')\big]+\big(df_{x_0+r}-df_{x_0+r'}\big)(r')$ (développer). Par $(\ast)$ avec $b=c=x_0+r$, $a=x_0+r'$ (segment dans la boule convexe $B_E(x_0,\delta)$), le crochet est majoré par $M\norm{r-r'}^2$, et le second terme par $M\norm{r-r'}\,\norm{r'}$ : c'est la première inégalité.

Ensuite $\phi(r)-\phi(r')=g(r)\big(R(r)-R(r')\big)+\big(g(r)-g(r')\big)\big(R(r')-f(x_0)\big)$. Le premier terme est majoré par $2C\,M\big(\norm{r-r'}^2+\norm{r'}\norm{r-r'}\big)$. Pour le second, $\norm{g(r)-g(r')}\le M(2C)^2\norm{r-r'}$ (questions 2-3) et
$$
R(r')-f(x_0)=-f(x_0)-\big[f(x_0+r')-f(x_0)-df_{x_0+r'}(r')\big],\qquad\norm{R(r')-f(x_0)}\le\norm{f(x_0)}+M\norm{r'}^2
$$
par $(\ast)$ avec $a=x_0$, $b=c=x_0+r'$. D'où la seconde inégalité.

**Question 5.** Pour $r,r'\in B_E(0,\delta)$ : $\norm{r-r'}\lt2\delta$ et $\norm{r'}\lt\delta$, donc
$$
\norm{\phi(r)-\phi(r')}\le K\norm{r-r'},\qquad K=6CM\delta+4C^2M^2\delta^2+4C^2M\norm{f(x_0)} .
$$
On choisit $\delta$ assez petit pour que $6CM\delta+4C^2M^2\delta^2\le\frac14$, puis on suppose $4C^2M\norm{f(x_0)}\le\frac14$ : alors $0\lt K\le\frac12$. Soit $0\lt\delta'\lt\delta$ et supposons $C\norm{f(x_0)}\le(1-K)\delta'$. Comme $R(0)=0$, $\phi(0)=-g(0)f(x_0)$, donc $\norm{\phi(0)}\le C\norm{f(x_0)}$ et, pour $\norm{r}\le\delta'$,
$$
\norm{\phi(r)}\le\norm{\phi(r)-\phi(0)}+\norm{\phi(0)}\le K\delta'+(1-K)\delta'=\delta'.
$$
Ainsi $\phi$ est une contraction de $\bar B_E(0,\delta')$, fermé de $E$ donc complet. *(Précision par rapport au poly, qui travaille sur la boule ouverte : on passe à une boule fermée pour disposer d'un espace complet.)*

**Question 6.** Par le point fixe de Banach ([[ch06-point-fixe-banach]]), $\phi$ a un unique point fixe $r^\ast\in\bar B_E(0,\delta')$, et la suite $r_0=0$, $r_{n+1}=\phi(r_n)$ (qui reste dans la boule) converge vers $r^\ast$ (car $\norm{r_n-r^\ast}\le K^n\norm{r_0-r^\ast}$). Avec $x_n=x_0+r_n$ :
$$
x_{n+1}=x_0+r_n-df_{x_n}^{-1}\big(f(x_n)\big)=x_n-df_{x_n}^{-1}\big(f(x_n)\big).
$$
Soit $z=x_0+r^\ast=\lim x_n$. De $\phi(r^\ast)=r^\ast$ on tire $df_z^{-1}(f(z))=0$, donc $f(z)=0$.

**Question 7.** Comme $f(z)=0$,
$$
x_{n+1}-z=x_n-z-df_{x_n}^{-1}\big(f(x_n)\big)=df_{x_n}^{-1}\Big(f(z)-f(x_n)-df_{x_n}(z-x_n)\Big),
$$
et $(\ast)$ avec $a=c=x_n$, $b=z$ donne $\norm{x_{n+1}-z}\le2C\cdot M\norm{x_n-z}^2$. En posant $u_n=2CM\norm{x_n-z}$, on a $u_{n+1}\le u_n^2$, donc $u_n\le u_0^{2^n}$ ; or $\norm{x_0-z}=\norm{r^\ast}\le\delta'\lt\delta\lt(2MC)^{-1}$, donc $u_0\lt1$ : l'erreur décroît **doublement exponentiellement**. $\square$

## Preuve à trous

*Q1.* On applique les accroissements finis à <trou indice="retrancher la partie linéaire figée en c">$h(x)=f(x)-df_c(x)$, dont la différentielle est $df_u-df_c$</trou>. En particulier $\norm{f(b)-f(a)-df_c(b-a)}\le M\norm{b-a}^2$ si $c\in\{a,b\}$ $(\ast)$.

*Q2-Q3.* Pour $\norm{r}\lt\delta\lt(2MC)^{-1}$, $df_{x_0+r}=df_{x_0}(\mathrm{Id}-L)$ avec $\norm{L}\le CM\norm{r}\lt\frac12$, inversible par Neumann. L'identité <trou>$A^{-1}-B^{-1}=A^{-1}(B-A)B^{-1}$</trou> donne $\norm{g(r)-g(r')}\le M\norm{g(r)}\norm{g(r')}\norm{r-r'}$, puis avec $r'=0$ : $\norm{g(r)}\le C/(1-MC\norm{r})\le2C$.

*Q4-Q5.* On décompose $\phi(r)-\phi(r')=g(r)(R(r)-R(r'))+(g(r)-g(r'))(R(r')-f(x_0))$ et on majore chaque morceau par $(\ast)$ : <trou>$\norm{\phi(r)-\phi(r')}\le K\norm{r-r'}$ avec $K=6CM\delta+4C^2M^2\delta^2+4C^2M\norm{f(x_0)}$</trou>, qui est $\lt1$ si $\delta$ et $\norm{f(x_0)}$ sont petits ; avec $\norm{\phi(0)}\le C\norm{f(x_0)}\le(1-K)\delta'$, $\phi$ stabilise $\bar B(0,\delta')$.

*Q6.* Point fixe de Banach : $r_n\to r^\ast$, et $r_{n+1}=\phi(r_n)$ s'écrit $x_{n+1}=x_n-df_{x_n}^{-1}(f(x_n))$ ; à la limite $f(z)=0$.

*Q7.* On écrit <trou indice="faire apparaître le reste de Taylor en x_n">$x_{n+1}-z=df_{x_n}^{-1}\big(f(z)-f(x_n)-df_{x_n}(z-x_n)\big)$</trou>, d'où par $(\ast)$ et $\norm{df_{x_n}^{-1}}\le2C$ : $\norm{x_{n+1}-z}\le2CM\norm{x_n-z}^2$. $\square$

## Exemples

* **$\sqrt2$.** $f(x)=x^2-2$ : $x_{n+1}=x_n-\frac{x_n^2-2}{2x_n}=\frac12\big(x_n+\frac2{x_n}\big)$ (méthode de Héron). Depuis $x_0=1$ : $1{,}5$ ; $1{,}41\overline{6}$ ; $1{,}414215686$ ; $1{,}41421356237469$. Erreurs : $4{,}1\cdot10^{-1}$, $8{,}6\cdot10^{-2}$, $2{,}5\cdot10^{-3}$, $2{,}1\cdot10^{-6}$, $1{,}6\cdot10^{-12}$ : le nombre de décimales exactes double à chaque pas.
* **Inverse d'une matrice (Newton–Schulz).** Pour $A\in\GL(n,\R)$, on résout $f(X)=X^{-1}-A=0$ sur un voisinage de $A^{-1}$. On a $df_X(H)=-X^{-1}HX^{-1}$ ([[ch05-inversion-c-infini]]), donc $df_X^{-1}(K)=-XKX$ et
$$
X_{k+1}=X_k+X_k\big(X_k^{-1}-A\big)X_k=2X_k-X_kAX_k .
$$
L'erreur résiduelle $E_k=I-AX_k$ vérifie $E_{k+1}=I-2AX_k+AX_kAX_k=E_k^2$, donc $E_k=E_0^{2^k}$ : convergence quadratique dès que $\norm{I-AX_0}\lt1$. L'itération n'utilise que des produits, aucune inversion.
* **Newton « modifié ».** Si l'on fige la différentielle en $x_0$ ($x_{n+1}=x_n-df_{x_0}^{-1}(f(x_n))$, ce que fait la preuve des fonctions implicites, [[ch06-fonctions-implicites]]), on obtient encore une contraction, mais la convergence n'est plus que linéaire.

## Pièges

* > ⚠️ **Coquille de signe dans le poly.** Le poly définit $\phi(r)=df_{x_0+r}^{-1}\big(f(x_0)-R(r)\big)=df_{x_0+r}^{-1}\big(f(x_0+r)-df_{x_0+r}(r)\big)$, qui vaut $df_{x_0+r}^{-1}(f(x_0+r))-r$ : son point fixe vérifie $df^{-1}(f)=2r$, pas $f=0$, et la récurrence $r_{n+1}=\phi(r_n)$ n'est pas celle de Newton. Il faut $\phi(r)=df_{x_0+r}^{-1}\big(R(r)-f(x_0)\big)=r-df_{x_0+r}^{-1}(f(x_0+r))$. Les majorations des questions 4-5 portent sur $\phi(r)-\phi(r')$ et sur $\norm{\phi(0)}$ : elles sont inchangées.
* > ⚠️ La convergence quadratique est **locale** : il faut partir près d'une racine (ici $\norm{f(x_0)}$ petit). Loin d'une racine, Newton peut cycler ou diverger.
* En pratique, on ne calcule pas $df_{x_n}^{-1}$ : on **résout** le système linéaire $df_{x_n}(\Delta)=-f(x_n)$, puis $x_{n+1}=x_n+\Delta$.
* Racine multiple ($df_z$ non inversible) : convergence seulement linéaire.
* Le contrôle « doublement exponentiel » $u_n\le u_0^{2^n}$ suppose $u_0=2CM\norm{x_0-z}\lt1$.
