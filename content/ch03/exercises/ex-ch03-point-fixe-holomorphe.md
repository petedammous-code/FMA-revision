---
id: ex-ch03-point-fixe-holomorphe
type: exercise
chapters: [3, 6, 1]
title: Résoudre une équation fonctionnelle holomorphe par le point fixe de Picard
source: Inventé
difficulty: 4
time: 60
tools: [ch03-weierstrass, ch03-cauchy-locale-equivaut-convergence, ch06-point-fixe-banach, ch06-lipschitz-contractante-def, ch01-estimees-cauchy, ch01-prolongement-analytique, ch01-stabilite-operations]
---
## Énoncé

On note $\mathbb D=D(0,1)$ et
$$
\mathcal B=\Bigl\{f\in\Hol(\mathbb D) : \|f\|_\infty:=\sup_{z\in\mathbb D}|f(z)|<+\infty\Bigr\}.
$$
Pour $\lambda\in\C$, on s'intéresse à l'équation fonctionnelle, d'inconnue $f$ holomorphe sur $\mathbb D$ :
$$
(E_\lambda)\qquad f(z)=1+\lambda\,z\,f\!\left(\tfrac z2\right)^2\qquad\text{pour tout } z\in\mathbb D .
$$
On pose, pour $f\in\mathcal B$ et $z\in\mathbb D$, $T_\lambda(f)(z)=1+\lambda z\,f(z/2)^2$, et $K=\{f\in\mathcal B : \|f\|_\infty\le2\}$. On note $\Delta=D(0,\frac18)$ et $\bar\Delta=\bar D(0,\frac18)$.

**Partie A — Un espace de Banach de fonctions holomorphes.**

* **A1.** Montrer que $(\mathcal B,\|\cdot\|_\infty)$ est un espace de Banach et que $K$ est un fermé de $\mathcal B$.
* **A2.** Montrer que $T_\lambda$ envoie $\mathcal B$ dans $\mathcal B$ et que $\|T_\lambda(f)\|_\infty\le1+|\lambda|\,\|f\|_\infty^2$.

**Partie B — Existence et unicité pour $|\lambda|\le\frac18$.**

* **B1.** Soit $\lambda\in\bar\Delta$. Montrer que $T_\lambda(K)\subset K$ et que $T_\lambda$ est $\frac12$-lipschitzienne sur $K$.
* **B2.** En déduire que $(E_\lambda)$ admet une unique solution $f_\lambda$ dans $K$. On note $u_0=1$ (fonction constante) et $u_{k+1}=T_\lambda(u_k)$ ; montrer que $\|u_k-f_\lambda\|_\infty\le\frac{2^{-k}}4$ pour tout $k\ge0$, et que $\|f_\lambda\|_\infty\le\frac32$.
* **B3.** Soit $f$ une solution holomorphe quelconque (pas forcément bornée) de $(E_\lambda)$ sur $\mathbb D$, et $f(z)=\sum_{n\ge0}a_nz^n$ son développement en série entière en $0$. Montrer que $a_0=1$ et $a_{n+1}=\lambda\,2^{-n}\sum_{k=0}^na_ka_{n-k}$. En déduire que, pour $\lambda\in\bar\Delta$, $f_\lambda$ est l'unique solution de $(E_\lambda)$ dans $\Hol(\mathbb D)$, calculer $a_1,\dots,a_4$, et montrer que $a_n=c_n\lambda^n$ où $(c_n)$ est une suite de rationnels strictement positifs indépendante de $\lambda$.

**Partie C — Dépendance holomorphe en $\lambda$.**

On note $u_k(\lambda,z)$ la $k$-ième itérée de B2, vue comme fonction de $(\lambda,z)\in\bar\Delta\times\mathbb D$.

* **C1.** Montrer que $u_k(\lambda,z)$ est un polynôme en $(\lambda,z)$. En déduire que, pour tout $z\in\mathbb D$ fixé, $\lambda\mapsto f_\lambda(z)$ est holomorphe sur $\Delta$.
* **C2.** Calculer $\dfrac{\partial}{\partial\lambda}\Bigl(f_\lambda(z)\Bigr)\Big|_{\lambda=0}$ en utilisant les itérées $u_k$, et comparer avec B3.

**Partie D — Prolongement à $\C$.**

* **D1.** Pour $|w|<\frac18$, on pose $g(w)=f_{1/8}(8w)$. Montrer que $g(w)=1+w\,g(w/2)^2$ pour $|w|<\frac18$, que $g(w)=\sum_{n\ge0}c_nw^n$, et que $f_\lambda(z)=g(\lambda z)$ pour tous $\lambda\in\bar\Delta$, $z\in\mathbb D$.
* **D2.** Montrer qu'il existe une unique fonction entière $G$ qui prolonge $g$, et qu'elle vérifie $G(w)=1+w\,G(w/2)^2$ pour tout $w\in\C$. En déduire que la série entière $\sum c_nw^n$ a un rayon de convergence infini. *Indication : on pourra construire $G$ de proche en proche sur les disques $D(0,2^k/8)$.*
* **D3.** Montrer que, pour **tout** $\lambda\in\C$, $(E_\lambda)$ admet une unique solution holomorphe sur $\mathbb D$, que l'on exprimera à l'aide de $G$. Montrer enfin que $G$ n'est pas un polynôme et que $G(x)\ge1+x$ pour tout $x\ge0$.

## Indices

### Indice 1
Partie A : une suite de Cauchy pour $\|\cdot\|_\infty$ converge uniformément ; reste à savoir si la limite est holomorphe — quel théorème du cours ? Partie B : un espace complet, une application qui s'y envoie et qui contracte : quel théorème ? Pour B3, identifier les coefficients des deux membres (produit de Cauchy).

### Indice 2
B1 : $T_\lambda(f)-T_\lambda(g)=\lambda z\,\bigl(f(\frac z2)-g(\frac z2)\bigr)\bigl(f(\frac z2)+g(\frac z2)\bigr)$ et $\|f+g\|_\infty\le4$ sur $K$. B2 : le théorème de Picard (poly, Théorème VI.1.1) donne aussi l'estimation $\|u_k-f_\lambda\|\le\frac{a^k}{1-a}\|T_\lambda(u_0)-u_0\|$. C1 : l'estimation de B2 est **uniforme en $\lambda\in\bar\Delta$** : appliquer le théorème de Weierstrass dans la variable $\lambda$.

### Indice 3
C2 : $u_k(0,\cdot)=1$ pour tout $k$, et $\partial_\lambda u_{k+1}(\lambda,z)=z\,u_k(\lambda,\frac z2)^2+2\lambda z\,u_k(\lambda,\frac z2)\,\partial_\lambda u_k(\lambda,\frac z2)$. D1 : vérifier que $z\mapsto g(\lambda z)$ est un point fixe de $T_\lambda$ **dans $K$**. D2 : si $G_k$ est holomorphe sur $D(0,r_k)$, $r_k=2^k/8$, poser $G_{k+1}(w)=1+wG_k(w/2)^2$ sur $D(0,r_{k+1})$ et vérifier par récurrence que $G_{k+1}=G_k$ sur $D(0,r_k)$.

### Indice 4
D3 : $z\mapsto G(\lambda z)$ résout $(E_\lambda)$ ; l'unicité vient de B3 (la récurrence ne suppose aucune borne). Si $G$ était un polynôme de degré $d$, comparer les degrés des deux membres de l'équation ; pour $x\ge0$, tous les termes de $\sum c_nx^n$ sont positifs.

## Corrigé

**A1.** $\mathcal B$ est un sous-espace vectoriel de l'espace des fonctions bornées sur $\mathbb D$, et $\|\cdot\|_\infty$ y est une norme. Soit $(f_k)$ une suite de Cauchy de $\mathcal B$. Pour tout $z\in\mathbb D$, $|f_k(z)-f_l(z)|\le\|f_k-f_l\|_\infty$, donc $(f_k(z))_k$ est de Cauchy dans $\C$ et converge vers un nombre noté $f(z)$. Soit $\eps>0$ et $N$ tel que $\|f_k-f_l\|_\infty\le\eps$ pour $k,l\ge N$ ; en faisant $l\to\infty$ à $z$ fixé, $|f_k(z)-f(z)|\le\eps$ pour tout $z\in\mathbb D$ et tout $k\ge N$. Donc $f_k\to f$ **uniformément sur $\mathbb D$**.

En particulier $(f_k)$ est uniformément de Cauchy sur $\mathbb D$, donc localement uniformément de Cauchy ; les $f_k$ étant holomorphes, le théorème de Weierstrass ([[ch03-weierstrass]], poly, Théorème III.1.4, p. 60) montre que $f$ est holomorphe sur $\mathbb D$. Enfin $\|f\|_\infty\le\|f_N\|_\infty+\eps<\infty$, donc $f\in\mathcal B$, et $\|f_k-f\|_\infty\le\eps$ pour $k\ge N$ : $f_k\to f$ dans $\mathcal B$. Donc $\mathcal B$ est complet.

$K$ est fermé : si $f_k\in K$ et $f_k\to f$ dans $\mathcal B$, alors $|f(z)|=\lim_k|f_k(z)|\le2$ pour tout $z$. Comme fermé d'un complet, $(K,\|\cdot-\cdot\|_\infty)$ est un espace métrique complet.

**A2.** Pour $f\in\mathcal B$, la fonction $f^\flat:z\mapsto f(z/2)$ est holomorphe sur $\mathbb D$ (composée de $f$ et de $z\mapsto z/2$, qui envoie $\mathbb D$ dans $D(0,\frac12)\subset\mathbb D$) et $|f^\flat(z)|\le\|f\|_\infty$. Donc $T_\lambda(f)=1+\lambda\,\mathrm{id}\,(f^\flat)^2$ est holomorphe (sommes et produits, [[ch01-stabilite-operations]]) et, puisque $|z|<1$,
$$
|T_\lambda(f)(z)|\le1+|\lambda|\,|z|\,\|f\|_\infty^2\le1+|\lambda|\,\|f\|_\infty^2 .
$$

**B1.** Soit $|\lambda|\le\frac18$. Pour $f\in K$ : $\|T_\lambda(f)\|_\infty\le1+\frac18\cdot4=\frac32\le2$, donc $T_\lambda(K)\subset K$. Pour $f,g\in K$ et $z\in\mathbb D$,
$$
|T_\lambda(f)(z)-T_\lambda(g)(z)|=|\lambda|\,|z|\,\bigl|f(\tfrac z2)-g(\tfrac z2)\bigr|\,\bigl|f(\tfrac z2)+g(\tfrac z2)\bigr|\le\frac18\cdot1\cdot\|f-g\|_\infty\cdot4=\frac12\|f-g\|_\infty .
$$
Donc $T_\lambda$ est $\frac12$-lipschitzienne, c'est-à-dire contractante, sur $K$ ([[ch06-lipschitz-contractante-def]]).

**B2.** Hypothèses du théorème du point fixe de Banach–Picard ([[ch06-point-fixe-banach]], poly, Théorème VI.1.1, p. 115) : $(K,d)$ est un espace métrique complet (A1), $T_\lambda:K\to K$ (B1), de constante de Lipschitz $a=\frac12<1$ (B1). Donc $T_\lambda$ a un unique point fixe $f_\lambda\in K$, c'est-à-dire une unique solution de $(E_\lambda)$ dans $K$. La preuve du théorème donne, pour la suite des itérées issue de $u_0=1\in K$,
$$
\|u_k-f_\lambda\|_\infty\le\frac{a^k}{1-a}\|T_\lambda(u_0)-u_0\|_\infty=2\cdot2^{-k}\sup_{z\in\mathbb D}|\lambda z|=2^{1-k}|\lambda|\le\frac{2^{-k}}4 .
$$
Enfin $\|f_\lambda\|_\infty=\|T_\lambda(f_\lambda)\|_\infty\le\frac32$ (B1).

**B3.** Soit $f\in\Hol(\mathbb D)$ une solution de $(E_\lambda)$. Par [[ch01-estimees-cauchy]] (poly, Corollaire I.7.5, p. 22), $f(z)=\sum_{n\ge0}a_nz^n$ sur $\mathbb D$ (rayon $\ge1$), avec $a_n=f^{(n)}(0)/n!$. Alors $f(z/2)=\sum_n a_n2^{-n}z^n$ pour $z\in\mathbb D$, série absolument convergente, et le produit de Cauchy donne
$$
f(\tfrac z2)^2=\sum_{n\ge0}b_nz^n,\qquad b_n=\sum_{k=0}^n a_k2^{-k}\,a_{n-k}2^{-(n-k)}=2^{-n}\sum_{k=0}^na_ka_{n-k}.
$$
L'équation devient $\sum_n a_nz^n=1+\sum_{n\ge0}\lambda b_nz^{n+1}$ sur $\mathbb D$. Les coefficients d'une série entière de rayon $>0$ étant déterminés par sa somme ($a_n=f^{(n)}(0)/n!$), on obtient
$$
a_0=1,\qquad a_{n+1}=\lambda\,b_n=\lambda\,2^{-n}\sum_{k=0}^na_ka_{n-k}\quad(n\ge0).
$$
*Unicité dans $\Hol(\mathbb D)$.* Cette récurrence détermine tous les $a_n$, donc deux solutions holomorphes sur $\mathbb D$ ont le même développement en $0$, valable sur tout $\mathbb D$ : elles sont égales. Pour $\lambda\in\bar\Delta$, $f_\lambda$ est une solution, c'est donc **la** seule dans $\Hol(\mathbb D)$ (la contrainte $\|f\|_\infty\le2$ de B2 n'était qu'une commodité de la méthode).

*Premiers coefficients.*
$$
\begin{aligned}
a_1&=\lambda a_0^2=\lambda, & a_2&=\tfrac\lambda2(2a_0a_1)=\lambda^2,\\
a_3&=\tfrac\lambda4(2a_0a_2+a_1^2)=\tfrac34\lambda^3, & a_4&=\tfrac\lambda8(2a_0a_3+2a_1a_2)=\tfrac\lambda8\bigl(\tfrac32+2\bigr)\lambda^3=\tfrac7{16}\lambda^4 .
\end{aligned}
$$
*Forme générale.* Définissons $c_0=1$, $c_{n+1}=2^{-n}\sum_{k=0}^nc_kc_{n-k}$ : par récurrence forte, les $c_n$ sont des rationnels $>0$ (sommes et produits de rationnels $>0$), et si $a_k=c_k\lambda^k$ pour $k\le n$, alors $a_{n+1}=\lambda2^{-n}\sum_kc_kc_{n-k}\lambda^{k+(n-k)}=c_{n+1}\lambda^{n+1}$. Donc $a_n=c_n\lambda^n$ ($c_1=c_2=1$, $c_3=\frac34$, $c_4=\frac7{16}$, $c_5=\frac{27}{128}$).

**C1.** *Polynômes.* $u_0=1$ ; si $u_k(\lambda,z)$ est un polynôme en $(\lambda,z)$, alors $u_{k+1}(\lambda,z)=1+\lambda z\,u_k(\lambda,\frac z2)^2$ aussi. (Pour chaque $\lambda\in\bar\Delta$, $u_k(\lambda,\cdot)$ est bien la $k$-ième itérée de B2, et elle est dans $K$.)

*Holomorphie en $\lambda$.* Fixons $z\in\mathbb D$ et posons $\varphi_k(\lambda)=u_k(\lambda,z)$, $\varphi(\lambda)=f_\lambda(z)$. Les $\varphi_k$ sont des polynômes en $\lambda$, donc holomorphes sur l'ouvert $\Delta$, et par B2 :
$$
\sup_{\lambda\in\Delta}|\varphi_k(\lambda)-\varphi(\lambda)|\le\sup_{\lambda\in\bar\Delta}\|u_k(\lambda,\cdot)-f_\lambda\|_\infty\le\frac{2^{-k}}4\xrightarrow[k\to\infty]{}0 .
$$
Le point clé est que la constante de contraction $\frac12$, donc cette borne, **ne dépend pas de $\lambda$**. La suite $(\varphi_k)$ converge uniformément sur $\Delta$, donc est localement uniformément de Cauchy sur $\Delta$ ([[ch03-cauchy-locale-equivaut-convergence]]) ; par le théorème de Weierstrass ([[ch03-weierstrass]]), $\varphi:\lambda\mapsto f_\lambda(z)$ est holomorphe sur $\Delta$, et $\varphi_k'\to\varphi'$ localement uniformément sur $\Delta$.

**C2.** Comme $T_0(f)=1$ pour toute $f$, $u_k(0,\cdot)=1$ pour tout $k$. En dérivant la relation de récurrence (polynomiale) par rapport à $\lambda$ :
$$
\partial_\lambda u_{k+1}(\lambda,z)=z\,u_k(\lambda,\tfrac z2)^2+2\lambda z\,u_k(\lambda,\tfrac z2)\,\partial_\lambda u_k(\lambda,\tfrac z2),
$$
donc $\varphi_{k+1}'(0)=\partial_\lambda u_{k+1}(0,z)=z\cdot1+0=z$ pour tout $k\ge0$. Par C1 (convergence des dérivées), $\varphi'(0)=\lim_k\varphi_k'(0)=z$ :
$$
\frac{\partial}{\partial\lambda}\Bigl(f_\lambda(z)\Bigr)\Big|_{\lambda=0}=z .
$$
Comparaison avec B3 : $f_\lambda(z)=\sum_nc_n\lambda^nz^n=1+\lambda z+\lambda^2z^2+\frac34\lambda^3z^3+\cdots$, série entière en $\lambda$ (convergente pour $|\lambda|\le\frac18$ à $z$ fixé) dont le coefficient de $\lambda$ est $c_1z=z$ : les deux calculs concordent.

**D1.** *Équation pour $g$.* $g$ est holomorphe sur $D(0,\frac18)$ (composée). Pour $|w|<\frac18$, $8w\in\mathbb D$, et $(E_{1/8})$ au point $8w$ donne $f_{1/8}(8w)=1+\frac18(8w)f_{1/8}(4w)^2$, soit $g(w)=1+w\,g(w/2)^2$.

*Coefficients.* Par B3 avec $\lambda=\frac18$, $f_{1/8}(z)=\sum_nc_n8^{-n}z^n$ sur $\mathbb D$, donc $g(w)=\sum_nc_n8^{-n}(8w)^n=\sum_nc_nw^n$ pour $|w|<\frac18$.

*Changement d'échelle.* Soit $\lambda\in\bar\Delta$ et $\psi(z)=g(\lambda z)=f_{1/8}(8\lambda z)$ pour $z\in\mathbb D$ (on a $|8\lambda z|<1$). $\psi$ est holomorphe et $\|\psi\|_\infty\le\|f_{1/8}\|_\infty\le\frac32$, donc $\psi\in K$. De plus, par l'équation de $g$ en $w=\lambda z$,
$$
\psi(z)=1+\lambda z\,g(\tfrac{\lambda z}2)^2=1+\lambda z\,\psi(\tfrac z2)^2=T_\lambda(\psi)(z).
$$
Par l'unicité du point fixe dans $K$ (B2), $\psi=f_\lambda$ : $f_\lambda(z)=g(\lambda z)$.

**D2.** Posons $r_k=2^k/8$. Construisons par récurrence des $G_k\in\Hol(D(0,r_k))$ telles que
(i) $G_0=g$ ; (ii) $G_k(w)=1+wG_k(w/2)^2$ pour $|w|<r_k$ ; (iii) $G_{k+1}=G_k$ sur $D(0,r_k)$.

$G_0=g$ vérifie (ii) par D1. Si $G_k$ est construite, on pose $G_{k+1}(w)=1+wG_k(w/2)^2$ pour $|w|<r_{k+1}$ : c'est bien défini et holomorphe car $|w/2|<r_k$. Pour $|w|<r_k$, $G_{k+1}(w)=1+wG_k(w/2)^2=G_k(w)$ par (ii) : c'est (iii). Pour $|w|<r_{k+1}$, $|w/2|<r_k$ donc $G_k(w/2)=G_{k+1}(w/2)$ par (iii), d'où $G_{k+1}(w)=1+wG_{k+1}(w/2)^2$ : c'est (ii) au rang $k+1$.

On définit alors $G(w)=G_k(w)$ pour n'importe quel $k$ tel que $|w|<r_k$ ; par (iii) cela ne dépend pas de $k$. $G$ est holomorphe sur $\C$ (elle coïncide avec $G_k$ sur l'ouvert $D(0,r_k)$), prolonge $g$, et vérifie l'équation en tout $w$ (prendre $k$ avec $|w|<r_k$ dans (ii)).

*Unicité.* Deux fonctions entières qui coïncident avec $g$ sur $D(0,\frac18)$ coïncident sur $\C$ par le prolongement analytique ([[ch01-prolongement-analytique]], poly, Corollaire I.11.6, p. 28 ; $\C$ est connexe).

*Rayon infini.* $G$ étant entière, son développement en série entière en $0$ a un rayon $\ge\sup\{r : \bar D(0,r)\subset\C\}=+\infty$ (Corollaire I.7.5), et ses coefficients sont $G^{(n)}(0)/n!=g^{(n)}(0)/n!=c_n$. Donc $\sum c_nw^n$ converge pour tout $w\in\C$ et vaut $G(w)$. Ce n'est pas du tout évident sur la récurrence définissant $c_n$ : le prolongement par l'équation fonctionnelle le donne gratuitement (numériquement, $c_n^{1/n}$ décroît vers $0$, en accord).

**D3.** *Existence.* Pour $\lambda\in\C$, $f(z)=G(\lambda z)$ est holomorphe sur $\mathbb D$ et, par l'équation de $G$ en $w=\lambda z$, $f(z)=1+\lambda z\,G(\lambda z/2)^2=1+\lambda z\,f(z/2)^2$ : c'est une solution de $(E_\lambda)$. *Unicité* : B3 (la récurrence sur les coefficients ne demande aucune borne et vaut pour tout $\lambda$). Ainsi l'unique solution holomorphe de $(E_\lambda)$ sur $\mathbb D$ est $z\mapsto G(\lambda z)$, pour **tout** $\lambda\in\C$, alors que la méthode du point fixe ne la fournissait que pour $|\lambda|\le\frac18$. (Pour $\lambda=1$, $G(1)\approx4{,}53$ : la solution sort de $K$.)

*$G$ n'est pas un polynôme.* $G\ne0$ car $G(0)=1$. Si $G$ était un polynôme de degré $d\ge0$ et de coefficient dominant $\alpha\ne0$, $w\,G(w/2)^2$ serait de degré $2d+1$ (coefficient dominant $\alpha^2 4^{-d}\ne0$), donc le membre de droite serait de degré $2d+1\ne d$ : contradiction. (Autre argument : $c_n>0$ pour tout $n$.)

*Minoration.* Pour $x\ge0$, $G(x)=\sum_nc_nx^n$ est une série de termes $\ge0$, donc $G(x)\ge c_0+c_1x=1+x$.

## Pièges et variantes

* **A1** : en analyse réelle, une limite uniforme de fonctions $C^1$ n'est pas forcément dérivable ; ici c'est le théorème de Weierstrass qui garantit que la limite reste holomorphe, donc que $\mathcal B$ est complet. Ne pas l'oublier : c'est la seule hypothèse non triviale du théorème de Picard.
* **B1** : $T_\lambda$ n'est **pas** contractante sur $\mathcal B$ tout entier (elle est quadratique) ; il faut une boule stable. Vérifier les **deux** conditions : $T_\lambda(K)\subset K$ **et** constante $<1$.
* **B2** : Picard ne donne l'unicité que **dans $K$** ; l'unicité dans $\Hol(\mathbb D)$ est un argument différent (B3).
* **C1** : pour appliquer Weierstrass dans la variable $\lambda$, il faut une convergence uniforme **en $\lambda$**, donc une constante de contraction indépendante de $\lambda$. Le théorème de point fixe à paramètre (poly, Théorème VI.1.2, p. 116) donnerait la continuité de $\lambda\mapsto f_\lambda$ ; c'est Weierstrass qui donne l'holomorphie.
* **D1** : pour invoquer l'unicité du point fixe, vérifier que le candidat $\psi$ est **dans $K$**.
* Variante sans le $\frac z2$ : $f(z)=1+\lambda zf(z)^2$. Le point fixe marche de même pour $|\lambda|\le\frac18$, mais la solution est algébrique, $f(z)=\frac{1-\sqrt{1-4\lambda z}}{2\lambda z}$, de rayon de convergence $\frac1{4|\lambda|}$ : pas de prolongement entier. C'est la contraction $z\mapsto z/2$ qui, dans $(E_\lambda)$, permet de prolonger de proche en proche (D2).
* Variante : $f(z)=1+\lambda z f(z^2)$. Le point fixe marche pour tout $|\lambda|<1$ (sur $\mathcal B$ entier, l'application est affine de constante $|\lambda|$), la solution est $\sum_{k\ge0}\lambda^kz^{2^k-1}$, de rayon de convergence $1$ si $\lambda\ne0$ : $z\mapsto z^2$ ne fait pas grandir les disques $D(0,r)$, $r\le1$, et l'argument de D2 ne s'applique plus.
