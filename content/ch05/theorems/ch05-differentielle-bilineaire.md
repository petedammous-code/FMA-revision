---
id: ch05-differentielle-bilineaire
type: proposition
chapter: 5
title: Différentielle d'une application bilinéaire continue
ref: Exemple V.3.6
page: 99
importance: 2
depends: [ch05-differentielle-def, ch05-espace-multilineaires-norme]
tags: [bilineaire, differentielle, produit, leibniz, exemple-fondamental]
---
## Intuition

> 💡 Pensez à l'aire d'un rectangle $f(x,y)=xy$. Si l'on allonge les côtés $a$ et $b$ de $h$ et $k$, la nouvelle aire $(a+h)(b+k)$ se décompose en : l'ancienne aire $ab$, **deux bandes** $ak$ et $hb$ (linéaires en $(h,k)$), et un **petit coin** $hk$, de taille « petit × petit ». La différentielle, c'est la somme des deux bandes ; le coin est le reste négligeable.

Pour une application **bilinéaire** $f$ (linéaire en chaque variable séparément, l'autre étant fixée), c'est exactement pareil : on développe $f(a+h,b+k)$ par bilinéarité, le terme $f(h,k)$ est « quadratique » et joue le rôle du coin. La **continuité** de $f$ sert à quantifier ce « petit × petit » : $\|f(h,k)\|\le\|f\|\,\|h\|\,\|k\|$, où $\|f\|$ est la norme de $f$ dans l'espace $\mathcal L(E_1,E_2;F)$ des applications bilinéaires continues ([[ch05-espace-multilineaires-norme]]).

Rappel : $f:U\to F$ est **différentiable** en $a$ s'il existe $df_a\in\mathcal L(E;F)$ (linéaire continue) telle que $f(a+h)-f(a)-df_a(h)=o(h)$ ([[ch05-differentielle-def]], notation $o$ : [[ch05-petit-o-def]]).

## Énoncé

**Proposition (poly, Exemple V.3.6, p. 99).** Soient $E_1$, $E_2$ et $F$ des espaces vectoriels normés. On munit l'espace vectoriel $E=E_1\times E_2$ de la norme $\|(x,y)\|_E=\|x\|_{E_1}+\|y\|_{E_2}$. Soit $f:E_1\times E_2\to F$ une application bilinéaire continue. Alors $f$ est différentiable en tout point $(a,b)\in E_1\times E_2$, et sa différentielle au point $(a,b)$ est donnée par
$$
df_{(a,b)}(h,k)=f(a,k)+f(h,b),\qquad (h\in E_1,\ k\in E_2).
$$
En effet, on a alors $f(a+h,b+k)-f(a,b)-df_{(a,b)}(h,k)=f(h,k)$, et $\|f(h,k)\|_F\le\|f\|\times\|h\|_{E_1}\times\|k\|_{E_2}=o((h,k))$.

## Hypothèses

### H1 — $f$ est bilinéaire

**Rôle.** C'est elle qui donne le développement **exact** $f(a+h,b+k)=f(a,b)+f(a,k)+f(h,b)+f(h,k)$, et qui rend $(h,k)\mapsto f(a,k)+f(h,b)$ linéaire.

**Si on la retire.** La formule n'a plus de sens. Exemple : $f(x,y)=xy+x=x(y+1)$ sur $\R\times\R$ est linéaire en $x$ à $y$ fixé, mais **pas** linéaire en $y$ à $x$ fixé ($f(1,0)=1\neq0$, alors qu'une application linéaire en $y$ s'annule en $y=0$). La « formule » donnerait $f(a,k)+f(h,b)=ak+a+hb+h$, qui contient la constante $a$ et n'est donc pas linéaire en $(h,k)$ dès que $a\neq0$ ; la vraie différentielle est $df_{(a,b)}(h,k)=(b+1)h+ak$ (car $f(a+h,b+k)-f(a,b)=(b+1)h+ak+hk$).

### H2 — $f$ est continue

**Rôle.** Elle garantit $\|f\|<+\infty$ ([[ch05-multilineaire-continue-caracterisation]]), donc l'inégalité $\|f(h,k)\|_F\le\|f\|\,\|h\|\,\|k\|$ qui fait du reste un $o((h,k))$ ; elle garantit aussi que $df_{(a,b)}$ est **continue**, comme l'exige la définition.

**Si on la retire.** En dimension finie, toute application bilinéaire est continue : l'hypothèse ne sert qu'en dimension infinie. Contre-exemple : $E_1=E_2=c_{00}$, l'espace des suites réelles nulles à partir d'un certain rang, muni de $\|x\|_\infty=\max_n|x_n|$, $F=\R$, et $f(x,y)=\sum_{n\ge1}n\,x_ny_n$ (somme finie). $f$ est bilinéaire. Avec $e_n$ la suite valant $1$ au rang $n$ et $0$ ailleurs, $u_n=e_n/\sqrt n$ vérifie $\|u_n\|_\infty=1/\sqrt n\to0$ mais $f(u_n,u_n)=n\cdot\frac1n=1\not\to0=f(0,0)$. Donc $f$ n'est pas continue en $(0,0)$, donc **pas différentiable** en $(0,0)$ (différentiable entraîne continue : [[ch05-differentiable-implique-continue]]).

### H3 — la norme produit $\|x\|+\|y\|$

**Rôle.** Elle sert à écrire $\|h\|\,\|k\|\le\|(h,k)\|_E^2$.

**Si on la retire.** Hypothèse de confort : toute norme équivalente (par exemple $\max(\|x\|,\|y\|)$, ou $\sqrt{\|x\|^2+\|y\|^2}$) donne la même topologie produit, et la différentiabilité et la différentielle ne changent pas ([[ch05-differentielle-normes-equivalentes]]).

## Idée de la preuve

Développer $f(a+h,b+k)$ par bilinéarité : le terme d'ordre 1 est $f(a,k)+f(h,b)$, le reste est $f(h,k)$, majoré par $\|f\|\,\|h\|\,\|k\|\le\|f\|\,\|(h,k)\|^2$, qui est un $o((h,k))$.

## Preuve

Fixons $(a,b)\in E_1\times E_2$ et posons $L(h,k)=f(a,k)+f(h,b)$.

*$L$ est linéaire continue.* $k\mapsto f(a,k)$ et $h\mapsto f(h,b)$ sont linéaires par bilinéarité, donc $L$ est linéaire sur $E_1\times E_2$. De plus, d'après l'inégalité $\|f(x,y)\|_F\le\|f\|\,\|x\|\,\|y\|$ ([[ch05-espace-multilineaires-norme]], valable car $f$ est continue),
$$
\|L(h,k)\|_F\le\|f\|\big(\|a\|\,\|k\|+\|h\|\,\|b\|\big)\le\|f\|\max(\|a\|,\|b\|)\,\|(h,k)\|_E ,
$$
donc $L\in\mathcal L(E;F)$.

*Le reste.* Par bilinéarité,
$$
f(a+h,b+k)=f(a,b+k)+f(h,b+k)=f(a,b)+f(a,k)+f(h,b)+f(h,k),
$$
donc $f(a+h,b+k)-f(a,b)-L(h,k)=f(h,k)$. Comme $\|h\|_{E_1}\le\|(h,k)\|_E$ et $\|k\|_{E_2}\le\|(h,k)\|_E$,
$$
\|f(h,k)\|_F\le\|f\|\,\|h\|_{E_1}\|k\|_{E_2}\le\|f\|\,\|(h,k)\|_E^2 .
$$
Soit $\eps>0$ ; si $\|f\|=0$ tout est nul, sinon pour $\|(h,k)\|_E<\delta:=\eps/\|f\|$ on a $\|f(h,k)\|_F\le\|f\|\,\|(h,k)\|_E\cdot\|(h,k)\|_E\le\eps\|(h,k)\|_E$. Donc $f(h,k)=o((h,k))$, et $f$ est différentiable en $(a,b)$ avec $df_{(a,b)}=L$ ([[ch05-differentielle-def]]). $\square$

## Preuve à trous

Fixons $(a,b)$ et posons $L(h,k)=f(a,k)+f(h,b)$. $L$ est linéaire, et continue car <trou indice="utiliser la norme de f dans L(E1,E2;F)">$\|L(h,k)\|\le\|f\|(\|a\|\,\|k\|+\|h\|\,\|b\|)\le\|f\|\max(\|a\|,\|b\|)\,\|(h,k)\|_E$</trou>.

Par bilinéarité, <trou indice="développer en deux temps, d'abord la première variable">$f(a+h,b+k)=f(a,b)+f(a,k)+f(h,b)+f(h,k)$</trou>, donc le reste vaut $f(h,k)$. Or $\|f(h,k)\|_F\le\|f\|\,\|h\|\,\|k\|\le$ <trou indice="chaque facteur est majoré par la norme produit">$\|f\|\,\|(h,k)\|_E^2$, car $\|h\|\le\|(h,k)\|_E$ et $\|k\|\le\|(h,k)\|_E$</trou>, et une quantité majorée par $C\|(h,k)\|^2$ est un $o((h,k))$. Donc $df_{(a,b)}=L$. $\square$

## Exemples

* **Produit de deux réels.** $f(x,y)=xy$ sur $\R\times\R$ (bilinéaire, $\|f\|=1$) : $df_{(a,b)}(h,k)=ak+hb$. Vérification : $(a+h)(b+k)-ab-(ak+hb)=hk$. Avec les dérivées partielles usuelles : $\partial_x f=y$, $\partial_y f=x$, on retrouve $b\,h+a\,k$.
* **Produit scalaire.** Sur un espace préhilbertien réel $E$, $f(x,y)=\langle x,y\rangle$ est bilinéaire continue (Cauchy–Schwarz : $|\langle x,y\rangle|\le\|x\|\,\|y\|$, donc $\|f\|\le1$). Donc $df_{(a,b)}(h,k)=\langle a,k\rangle+\langle h,b\rangle$. En composant avec $x\mapsto(x,x)$, on obtient $d(\|\cdot\|^2)_a(h)=2\langle a,h\rangle$ (voir [[ch05-formule-leibniz]]).
* **Produit matriciel.** Sur $\Mat_n(\R)$ muni d'une norme d'opérateur, $f(A,B)=AB$ est bilinéaire et $\|AB\|\le\|A\|\,\|B\|$, donc continue avec $\|f\|\le1$. Ainsi $df_{(A,B)}(H,K)=AK+HB$ : **l'ordre des facteurs est conservé** ($AK$ et non $KA$). Exemple numérique, $n=2$ : $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, $B=0$, $H=0$, $K=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ : $AK=K\neq0=KA$.

## Pièges

* > ⚠️ Une application bilinéaire n'est **pas linéaire** sur $E_1\times E_2$ : $f(2x,2y)=4f(x,y)$. Donc $df_{(a,b)}\neq f$ ; c'est l'erreur à ne pas faire en confondant avec le cas linéaire ([[ch05-differentielle-lineaire]]).
* La différentielle dépend du point $(a,b)$ (contrairement au cas linéaire) : $df_{(a,b)}(h,k)=f(a,k)+f(h,b)$, chaque terme « gèle » une variable au point de base et fait varier l'autre.
* Pour $f$ non symétrique (produit matriciel, composition d'opérateurs), ne pas écrire $f(k,a)$ à la place de $f(a,k)$ : chaque variable reste **à sa place**.
* En dimension infinie, ne pas oublier de vérifier la **continuité** de $f$ (H2).
* Généralisation (poly, Exercice V.3.7, p. 99) : pour $f$ $n$-linéaire continue, $df_{(a_1,\dots,a_n)}(h_1,\dots,h_n)=\sum_{i=1}^n f(a_1,\dots,a_{i-1},h_i,a_{i+1},\dots,a_n)$.
