---
id: ex-mix-b-edo-lineaire-holomorphe
type: exercise
chapters: [7, 1, 3]
title: Équations linéaires à coefficients holomorphes et rayon de convergence des solutions
source: "Classique (théorème de Cauchy sur les équations linéaires à coefficients holomorphes, cf. Hille, *Ordinary Differential Equations in the Complex Domain*, ch. 2) — preuve par itérations de Picard, progression et exemples inventés"
difficulty: 3
time: 50
tools: [ch01-primitive-locale, ch01-integrale-primitive, ch07-equation-integrale, ch03-weierstrass, ch03-convergence-uniforme-compacts, ch01-estimees-cauchy, ch07-unicite-globale, ch07-reduction-ordre-un, ch01-def-rayon-convergence]
---
## Énoncé

Soit $R\in\,]0,+\infty]$ et $D=D(0,R)$ (avec la convention $D(0,+\infty)=\C$). On fixe $n\ge1$, une norme $\norm\cdot$ sur $\C^n$ et la norme d'opérateur associée sur $\Mat_n(\C)$. Soit $A:D\to\Mat_n(\C)$ une application dont tous les coefficients sont holomorphes sur $D$, et $Y_0\in\C^n$. On cherche $Y:D\to\C^n$ holomorphe (c'est-à-dire à coordonnées holomorphes) telle que
$$
(P)\qquad Y'(z)=A(z)\,Y(z)\quad(z\in D),\qquad Y(0)=Y_0 .
$$
Pour $g:D\to\C^n$ holomorphe et $z\in D$, on pose $Ig(z)=\displaystyle\int_{[0,z]}g(\zeta)\,d\zeta=z\int_0^1g(sz)\,ds$, où $[0,z]$ est le segment parcouru de $0$ à $z$.

1. Montrer que $Ig$ est holomorphe sur $D$, que $(Ig)'=g$, $Ig(0)=0$, et que $\norm{Ig(z)}\le|z|\displaystyle\int_0^1\norm{g(sz)}\,ds$.
2. On fixe $r\in\,]0,R[$ et on note $M_r=\max_{\bar D(0,r)}\norm{A}$. On définit $Y^{(0)}(z)=Y_0$ et $Y^{(k+1)}=Y_0+I\big(AY^{(k)}\big)$ pour $k\ge0$.
   a) Montrer que, pour tout $k\ge0$ et tout $z\in\bar D(0,r)$, $\norm{Y^{(k+1)}(z)-Y^{(k)}(z)}\le\norm{Y_0}\dfrac{(M_r|z|)^{k+1}}{(k+1)!}$.
   b) En déduire que $(Y^{(k)})_k$ converge localement uniformément sur $D$ vers une solution holomorphe $Y$ de $(P)$.
3. Montrer que si $Z:D\to\C^n$ est holomorphe et vérifie $Z'=AZ$ et $Z(0)=0$, alors $Z=0$. Conclure que $(P)$ a une unique solution holomorphe sur $D$.
4. a) Montrer que la série de Taylor en $0$ de chaque coordonnée de $Y$ a un rayon de convergence $\ge R$ et converge vers $Y$ sur $D$.
   b) On suppose de plus $A(t)\in\Mat_n(\R)$ pour $t\in\,]-R,R[$ et $Y_0\in\R^n$. Montrer que la solution maximale du problème réel $y'(t)=A(t)y(t)$, $y(0)=Y_0$, posé sur $]-R,R[$, est définie sur tout $]-R,R[$ et y est la somme de sa série de Taylor en $0$.
5. On considère sur $\R$ le problème $y'(t)=-\dfrac{2t}{1+t^2}\,y(t)$, $y(0)=1$. Résoudre, puis expliquer pourquoi la série de Taylor de $y$ en $0$ a un rayon de convergence égal à $1$ alors que le coefficient $t\mapsto-2t/(1+t^2)$ est défini et développable en série entière au voisinage de tout point de $\R$.
6. Soit $\lambda\in\C$. On considère l'équation de Tchebychev
$$
(T_\lambda)\qquad (1-z^2)\,w''(z)-z\,w'(z)+\lambda^2w(z)=0 .
$$
   a) Montrer que pour tous $a,b\in\C$ il existe une unique $w\in\Hol(D(0,1))$ solution de $(T_\lambda)$ sur $D(0,1)$ avec $w(0)=a$, $w'(0)=b$, et que sa série de Taylor $\sum_mc_mz^m$ en $0$ converge vers $w$ sur $D(0,1)$.
   b) Montrer que $(m+1)(m+2)\,c_{m+2}=(m^2-\lambda^2)\,c_m$ pour tout $m\ge0$.
   c) On suppose $\lambda\notin\Z$. Montrer que toute solution non nulle a une série de Taylor en $0$ de rayon **exactement** $1$. Que se passe-t-il si $\lambda=N\in\N$ ?
   d) Vérifier que $x\mapsto\cos(\lambda\arccos x)$ est solution de $(T_\lambda)$ sur $]-1,1[$. En déduire que, pour $N\in\N$, il existe un polynôme $T_N$ de degré $N$ tel que $T_N(\cos\theta)=\cos(N\theta)$ pour tout $\theta\in\R$.

## Indices

### Indice 1
C'est la méthode de Picard de la preuve de Cauchy–Lipschitz (équation intégrale, itérées, majoration en $k!$), transportée dans le monde holomorphe : on intègre le long des segments $[0,z]$, et un théorème de convergence des suites de fonctions holomorphes garantit que la limite est encore holomorphe.

### Indice 2
1 : sur un disque $D(0,r)\ni z$, $g$ a une primitive holomorphe. 2 a) : récurrence ; c'est $\int_0^1s^{k}\,ds=\frac1{k+1}$ qui fabrique la factorielle — la majoration grossière $\norm{Ig(z)}\le|z|\sup\norm g$ ne suffirait pas. 2 b) : convergence normale sur chaque $\bar D(0,r)$, puis théorème de Weierstraß et passage à la limite dans $Y^{(k+1)}=Y_0+I(AY^{(k)})$.

### Indice 3
4 a) : estimées de Cauchy sur $\bar D(0,r)$ pour tout $r<R$. 4 b) : la restriction de $Y$ à $]-R,R[$ résout l'équation ; sa partie imaginaire résout une équation linéaire à donnée initiale nulle. 5 : passer en complexe et regarder où le coefficient cesse d'être holomorphe.

### Indice 4
6 : se ramener à un système d'ordre $1$ en $(w,w')$, à coefficients holomorphes sur $D(0,1)$ ; identifier les coefficients des séries entières. Pour le rayon exactement $1$ : règle de d'Alembert sur les seuls coefficients pairs (ou impairs), et caractérisation du rayon par les $\rho$ tels que $(|c_m|\rho^m)_m$ est bornée.

## Corrigé

**1.** Soit $z\in D$ et $r$ avec $|z|<r<R$. Chaque coordonnée de $g$ est holomorphe sur le disque $D(0,r)$, donc y admet une primitive holomorphe ([[ch01-primitive-locale]]) ; notons $G_r:D(0,r)\to\C^n$ la primitive (coordonnée par coordonnée) nulle en $0$. Pour $w\in D(0,r)$, le segment $[0,w]$ est inclus dans $D(0,r)$ et ([[ch01-integrale-primitive]]) $Ig(w)=G_r(w)-G_r(0)=G_r(w)$. Donc $Ig$ coïncide sur $D(0,r)$ avec $G_r$ : elle y est holomorphe, de dérivée $g$, et $Ig(0)=0$. Comme tout point de $D$ est dans un tel disque, c'est vrai sur $D$. Enfin, avec le paramétrage $s\mapsto sz$, $Ig(z)=\int_0^1g(sz)\,z\,ds$ et l'inégalité $\norm{\int_0^1u}\le\int_0^1\norm u$ (vraie pour les fonctions en escalier, puis par passage à la limite uniforme pour les fonctions continues, cf. [[ch05-integrale-fonctions-reglees]]) donne $\norm{Ig(z)}\le|z|\int_0^1\norm{g(sz)}\,ds$.

**2. a)** Par récurrence immédiate et 1, chaque $Y^{(k)}$ est holomorphe sur $D$ (les coordonnées de $AY^{(k)}$ sont des sommes de produits de fonctions holomorphes). Soit $z\in\bar D(0,r)$ ; alors $sz\in\bar D(0,r)$ pour $s\in[0,1]$, donc $\norm{A(sz)}\le M_r$.

* $k=0$ : $Y^{(1)}(z)-Y^{(0)}(z)=I(AY_0)(z)$, de norme $\le|z|\int_0^1M_r\norm{Y_0}\,ds=\norm{Y_0}M_r|z|$.
* Hérédité : $Y^{(k+2)}-Y^{(k+1)}=I\big(A(Y^{(k+1)}-Y^{(k)})\big)$, donc par 1 et l'hypothèse de récurrence,
$$
\norm{Y^{(k+2)}(z)-Y^{(k+1)}(z)}\le|z|\int_0^1M_r\norm{Y_0}\frac{(M_rs|z|)^{k+1}}{(k+1)!}\,ds=\norm{Y_0}\frac{(M_r|z|)^{k+2}}{(k+1)!}\int_0^1s^{k+1}ds=\norm{Y_0}\frac{(M_r|z|)^{k+2}}{(k+2)!}.
$$

**b)** Sur $\bar D(0,r)$, $\sup\norm{Y^{(k+1)}-Y^{(k)}}\le\norm{Y_0}(M_rr)^{k+1}/(k+1)!$, terme général d'une série convergente (de somme $\le\norm{Y_0}e^{M_rr}$). La série télescopique $Y^{(0)}+\sum_k(Y^{(k+1)}-Y^{(k)})$ converge donc normalement, d'où la convergence uniforme de $(Y^{(k)})$ sur $\bar D(0,r)$. Tout compact $K\subset D$ est contenu dans un tel $\bar D(0,r)$ (car $\max_K|z|<R$), donc $(Y^{(k)})$ converge uniformément sur tout compact de $D$, c'est-à-dire localement uniformément ([[ch03-convergence-uniforme-compacts]]) ; la limite $Y$ ne dépend pas de $r$ (c'est la limite simple de la même suite). Par le théorème de Weierstraß ([[ch03-weierstrass]]), appliqué à chaque coordonnée, $Y$ est holomorphe sur $D$.

Passage à la limite : pour $z$ fixé, $A(sz)Y^{(k)}(sz)\to A(sz)Y(sz)$ uniformément en $s\in[0,1]$ (car $\norm{A(sz)}\le M_{|z|}$ et la convergence est uniforme sur $\bar D(0,|z|)$), donc $Y^{(k+1)}(z)=Y_0+z\int_0^1A(sz)Y^{(k)}(sz)\,ds\to Y_0+I(AY)(z)$. Ainsi $Y=Y_0+I(AY)$ : c'est l'analogue holomorphe de l'équation intégrale [[ch07-equation-integrale]]. Par 1, $Y'=AY$ et $Y(0)=Y_0$.

**3.** $Z-I(Z')$ est holomorphe de dérivée nulle sur le connexe $D$ (par 1), donc constante, égale à sa valeur $Z(0)=0$ en $0$ : $Z=I(Z')=I(AZ)$. Soit $r\in\,]0,R[$ et $m=\max_{\bar D(0,r)}\norm Z$. Montrons par récurrence que $\norm{Z(z)}\le m\frac{(M_r|z|)^k}{k!}$ sur $\bar D(0,r)$ : c'est vrai pour $k=0$, et si c'est vrai au rang $k$,
$$
\norm{Z(z)}=\norm{I(AZ)(z)}\le|z|\int_0^1M_r\,m\frac{(M_rs|z|)^k}{k!}\,ds=m\frac{(M_r|z|)^{k+1}}{(k+1)!}.
$$
En faisant $k\to\infty$, $Z(z)=0$ sur $\bar D(0,r)$, pour tout $r<R$ : $Z=0$. Si $Y_1,Y_2$ résolvent $(P)$, $Z=Y_1-Y_2$ vérifie $Z'=AZ$, $Z(0)=0$, donc $Y_1=Y_2$.

**4. a)** Chaque coordonnée $Y_j$ est holomorphe sur $D=D(0,R)$, et $\bar D(0,r)\subset D$ pour tout $r<R$. Les estimées de Cauchy ([[ch01-estimees-cauchy]]) donnent : la série de Taylor de $Y_j$ en $0$ a un rayon au moins $\sup\{r:\bar D(0,r)\subset D\}=R$ et converge vers $Y_j$ sur $D(0,R)$. (Directement : $|Y_j^{(m)}(0)|/m!\le\max_{C(0,r)}|Y_j|\,r^{-m}$, donc $(|Y_j^{(m)}(0)|\rho^m/m!)_m$ est bornée pour tout $\rho<r$ : le rayon est $\ge r$, pour tout $r<R$, [[ch01-def-rayon-convergence]].)

**b)** Le champ $(t,y)\mapsto A(t)y$ sur $]-R,R[\times\R^n$ (ou $\times\C^n$) est continu et, sur tout $[-r,r]\times\C^n$, $M_r$-lipschitzien en $y$ : Cauchy–Lipschitz et l'unicité globale s'appliquent ([[ch07-unicite-globale]]). Posons $u(t)=Y(t)$ pour $t\in\,]-R,R[$. Pour $h$ réel, $\frac{u(t+h)-u(t)}h\to Y'(t)$ : $u$ est $C^1$ et $u'(t)=A(t)u(t)$, $u(0)=Y_0$. Comme $A(t)$ est réelle, $v=\Im u$ (coordonnée par coordonnée) vérifie $v'=\Im(Au)=A\,v$ et $v(0)=\Im Y_0=0$ ; la fonction nulle est une autre solution de ce problème, donc $v=0$ : $u$ est à valeurs dans $\R^n$. Ainsi $u$ est une solution réelle sur $]-R,R[$ : l'intervalle maximal de la solution réelle contient $]-R,R[$ (et est contenu dans $]-R,R[$, intervalle de définition du champ), donc il vaut $]-R,R[$, et $y=u$ par unicité. Enfin $y^{(m)}(0)=Y^{(m)}(0)$ (dérivées dans la direction réelle) et 4 a) donne $y(t)=\sum_m\frac{y^{(m)}(0)}{m!}t^m$ pour $|t|<R$.

**5.** $y(t)=\dfrac1{1+t^2}$ convient : $y'(t)=-\dfrac{2t}{(1+t^2)^2}=-\dfrac{2t}{1+t^2}\,y(t)$, $y(0)=1$ ; c'est la solution maximale, définie sur $\R$ (unicité globale). Sa série de Taylor en $0$ est $\sum_{m\ge0}(-1)^mt^{2m}$, de rayon $1$, bien que $y$ et le coefficient soient réguliers sur tout $\R$. *Explication.* En complexe, $A(z)=-2z/(1+z^2)$ est holomorphe sur $D(0,1)$ mais a des pôles en $\pm i$ : le théorème (4 a)) garantit un rayon $\ge1$, et il est atteint car la solution holomorphe $Y(z)=1/(1+z^2)$ n'est bornée au voisinage d'aucun des points $\pm i$ du cercle unité (si le rayon était $>1$, la somme de la série serait continue, donc bornée, près de $i$, et égale à $1/(1+z^2)$ sur $D(0,1)$ par 4 a)). **Le rayon de convergence d'une solution réelle est gouverné par les singularités complexes des coefficients**, invisibles sur l'axe réel.

**6. a)** Sur $D(0,1)$, $1-z^2\neq0$. Une fonction $w\in\Hol(D(0,1))$ (donc $C^\infty$, de dérivées holomorphes) est solution de $(T_\lambda)$ si et seulement si $Y=(w,w')$ vérifie ([[ch07-reduction-ordre-un]])
$$
Y'=A(z)Y,\qquad A(z)=\begin{pmatrix}0&1\\[2pt] \dfrac{-\lambda^2}{1-z^2}&\dfrac{z}{1-z^2}\end{pmatrix},
$$
et $A$ est à coefficients holomorphes sur $D(0,1)$. Réciproquement, si $Y=(Y_1,Y_2)$ est une solution holomorphe, $Y_1'=Y_2$ et $w=Y_1$ résout $(T_\lambda)$. Les questions 2 et 3 (avec $R=1$, $Y_0=(a,b)$) donnent l'existence et l'unicité, et 4 a) la convergence de la série de Taylor vers $w$ sur $D(0,1)$.

**b)** Sur $D(0,1)$, $w=\sum c_mz^m$ se dérive terme à terme ([[ch01-serie-entiere-holomorphe]]) :
$$
(1-z^2)w''-zw'+\lambda^2w=\sum_{m\ge0}\Big[(m+2)(m+1)c_{m+2}-m(m-1)c_m-mc_m+\lambda^2c_m\Big]z^m=0 .
$$
Les coefficients d'une série entière nulle sur un disque sont nuls (ce sont les $f^{(m)}(0)/m!$), donc $(m+1)(m+2)c_{m+2}=(m^2-\lambda^2)c_m$.

**c)** Si $\lambda\notin\Z$, $m^2-\lambda^2\neq0$ pour tout $m\in\N$. Soit $w\neq0$, donc $(c_0,c_1)=(a,b)\neq(0,0)$ ; supposons par exemple $a\neq0$ (le cas $b\neq0$ est identique avec les indices impairs). Alors $c_{2j}\neq0$ pour tout $j$ et
$$
\Big|\frac{c_{2j+2}}{c_{2j}}\Big|=\frac{|4j^2-\lambda^2|}{(2j+1)(2j+2)}\xrightarrow[j\to\infty]{}1 .
$$
Pour $\rho>1$, $|c_{2j+2}|\rho^{2j+2}/(|c_{2j}|\rho^{2j})\to\rho^2>1$, donc $|c_{2j}|\rho^{2j}\to+\infty$ : la suite $(|c_m|\rho^m)_m$ n'est pas bornée et le rayon est $\le\rho$ ([[ch01-def-rayon-convergence]]). Le rayon est donc $\le1$, et $\ge1$ par a) : il vaut exactement $1$. La minoration de 4 a) est optimale.

Si $\lambda=N\in\N$ (le cas $\lambda\in-\N$ est le même puisque seul $\lambda^2$ intervient) : la relation de récurrence donne $c_{N+2}=0$, donc $c_{N+2j}=0$ pour tout $j\ge1$, tandis que $c_N\neq0$ si $c_{N\bmod 2}\neq0$ (les facteurs $m^2-N^2$, $m<N$, sont non nuls). La solution de la parité de $N$ (avec $c_{1-(N\bmod2)}=0$) est un **polynôme de degré $N$**, donc entière ; la solution de l'autre parité a un rayon exactement $1$ (même argument qu'au-dessus, ses facteurs $m^2-N^2$ ne s'annulant pas). Toute solution non nulle a un rayon $1$, sauf les multiples de ce polynôme : le rayon garanti par 4 a) n'est qu'une **minoration**.

**d)** Pour $x\in\,]-1,1[$, posons $\theta=\arccos x\in\,]0,\pi[$, de sorte que $x=\cos\theta$, $\sin\theta=\sqrt{1-x^2}>0$ et $\frac{d\theta}{dx}=-\frac1{\sin\theta}$. Pour $\varphi(x)=\cos(\lambda\theta)$ :
$$
\varphi'(x)=\frac{\lambda\sin(\lambda\theta)}{\sin\theta},\qquad \varphi''(x)=-\frac{\lambda\big(\lambda\cos(\lambda\theta)\sin\theta-\sin(\lambda\theta)\cos\theta\big)}{\sin^3\theta}.
$$
Donc $(1-x^2)\varphi''=-\lambda^2\cos(\lambda\theta)+\lambda\sin(\lambda\theta)\frac{\cos\theta}{\sin\theta}$, $-x\varphi'=-\lambda\sin(\lambda\theta)\frac{\cos\theta}{\sin\theta}$, et la somme avec $\lambda^2\varphi$ est nulle (vérifié aussi en calcul formel). De plus $\varphi(0)=\cos(\lambda\pi/2)$ et $\varphi'(0)=\lambda\sin(\lambda\pi/2)$.

Soit $w$ la solution holomorphe de a) avec ces données initiales. Sur $]-1,1[$, $w$ et $\varphi$ sont deux solutions de classe $C^2$ de $(T_\lambda)$, vue comme équation linéaire d'ordre $2$ en la variable réelle $x$ à coefficients continus ; le système associé a un champ localement lipschitzien, donc $w=\varphi$ sur $]-1,1[$ ([[ch07-unicite-globale]]). Pour $\lambda=N\in\N$ : si $N$ est pair, $(a,b)=((-1)^{N/2},0)$ ; si $N$ est impair, $(a,b)=(0,(-1)^{(N-1)/2}N)$. Dans les deux cas seule la chaîne de la parité de $N$ est non nulle et, par c), $w$ est un polynôme $T_N$ de degré $N$. Ainsi $T_N(\cos\theta)=\cos(N\theta)$ pour $\theta\in\,]0,\pi[$ ; les deux membres sont des fonctions continues de $\theta$, paires et $2\pi$-périodiques, l'égalité s'étend à $[0,\pi]$ par continuité puis à $\R$. Exemple $N=3$ : $(a,b)=(0,-3)$, $c_3=\frac{1-9}{6}(-3)=4$, $T_3(x)=4x^3-3x$, et l'on retrouve $\cos3\theta=4\cos^3\theta-3\cos\theta$.

Pour $\lambda\notin\Z$, $\varphi=\cos(\lambda\arccos\cdot)$ est développable en série entière en $0$ mais (par c), puisque $\varphi(0)=\cos(\lambda\pi/2)\neq0$) avec un rayon exactement $1$ : c'est cohérent avec le fait que $\arccos$ n'est pas holomorphe au voisinage de $\pm1$.

## Pièges et variantes

* **La factorielle est indispensable** en 2 a) : avec $\norm{Ig(z)}\le|z|\sup\norm g$ on obtient seulement $(M_rr)^{k+1}$, qui ne tend pas vers $0$ si $M_rr\ge1$. C'est exactement le même phénomène que dans la preuve de Cauchy–Lipschitz ([[ch07-lemme-operateur-integral]]).
* **Disque (ou ouvert simplement connexe) indispensable** : sur une couronne, les solutions peuvent être « multiformes ». Pour $w'=\frac{\alpha}{z}w$ sur $\C^*$ ($\alpha\notin\Z$), la solution locale $z^\alpha$ ne se prolonge pas en une fonction holomorphe sur $\C^*$ ; l'opérateur $I$ n'a d'ailleurs pas de sens hors d'un ouvert étoilé.
* **Linéarité indispensable** : pour l'équation non linéaire $y'=y^2$, $y(0)=1$, le second membre est entier mais la solution $1/(1-z)$ a un rayon $1$. Le rayon ne se lit plus sur les coefficients.
* Le résultat est une **minoration** du domaine d'holomorphie (6 c), cas $\lambda\in\N$).
* Variante : équation d'Airy $w''=zw$ ($A$ entière, $R=+\infty$) : toutes les solutions sont entières ; relation $c_{m+3}=c_m/((m+2)(m+3))$, $c_2=0$.
