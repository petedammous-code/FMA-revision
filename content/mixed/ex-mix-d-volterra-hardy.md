---
id: ex-mix-d-volterra-hardy
type: exercise
chapters: [1, 5, 6]
title: L'opérateur de primitivation sur l'espace de Hardy
source: "Classique (opérateur de Volterra, de spectre réduit à {0} ; cf. Rudin, *Functional Analysis*) — transposé sur l'espace de Hardy des fonctions holomorphes du disque ; énoncé et progression inventés"
difficulty: 2
time: 25
tools: [ch01-def-rayon-convergence, ch01-serie-entiere-holomorphe, ch01-integrale-primitive, ch05-norme-operateur-def, ch05-lef-banach-norme-algebre, ch06-point-fixe-iteree-contractante, ch06-point-fixe-banach, ch05-differentielle-nulle-constante]
---
## Énoncé

On note $H^2$ l'ensemble des séries entières $f(z)=\sum_{n\ge0}a_nz^n$ à coefficients complexes telles que $\sum_{n\ge0}|a_n|^2<+\infty$, muni de la norme $\norm f=\big(\sum_{n\ge0}|a_n|^2\big)^{1/2}$. On admet que l'espace $\ell^2(\N)$ des suites de carré sommable est complet. On note $D=D(0,1)$.

1. a) Montrer que toute $f\in H^2$ définit une fonction holomorphe sur $D$ et que $|f(z)|\le \norm f\,(1-|z|^2)^{-1/2}$ pour $z\in D$.
   b) Montrer que $(H^2,\norm\cdot)$ est un espace de Banach et que la convergence dans $H^2$ entraîne la convergence uniforme sur tout disque fermé $\bar D(0,s)$, $0<s<1$.
2. Pour $f\in H^2$ et $z\in D$, on pose $(Vf)(z)=\displaystyle\int_{[0,z]}f(w)\,dw$ (intégrale sur le segment $[0,z]$).
   a) Exprimer les coefficients de $Vf$ en fonction de ceux de $f$ ; en déduire que $V$ est un endomorphisme continu de $H^2$.
   b) Calculer $\norm{V^n}$ (norme d'opérateur) pour tout $n\ge1$.
3. Soient $\lambda\in\C$ et $g\in H^2$. Montrer que l'équation
$$
f-\lambda\,Vf=g
$$
admet une unique solution $f\in H^2$, et que $f=\sum_{n\ge0}\lambda^nV^ng$ (série convergente dans $H^2$).
4. Montrer que cette solution est donnée, pour $z\in D$, par
$$
f(z)=g(z)+\lambda\int_{[0,z]}e^{\lambda(z-w)}g(w)\,dw .
$$
Vérifier la formule sur $g(z)=z$ en calculant directement $\sum_n\lambda^nV^ng$.
5. Déterminer l'ensemble des $\mu\in\C$ tels que $V-\mu\,\id_{H^2}$ n'est pas une bijection de $H^2$ sur $H^2$.

## Indices

### Indice 1
Tout se lit sur les coefficients : $H^2$ est une copie de $\ell^2$, et $V$ agit diagonalement « à décalage près ». La question 3 est un problème de point fixe, mais $\lambda$ est quelconque : la contraction n'est pas $V$ lui-même.

### Indice 2
1 a) : inégalité de Cauchy–Schwarz sur $\sum a_nz^n$. 2 a) : la série $F(z)=\sum a_n\frac{z^{n+1}}{n+1}$ est une primitive holomorphe de $f$ sur $D$, donc $\int_{[0,z]}f=F(z)-F(0)$. 2 b) : $V^n$ multiplie le coefficient $a_k$ par $\frac{k!}{(k+n)!}$.

### Indice 3
3 : pour $T(f)=g+\lambda Vf$, on a $T^n(f_1)-T^n(f_2)=\lambda^nV^n(f_1-f_2)$, donc $T^n$ est $\frac{|\lambda|^n}{n!}$-lipschitzienne. Point fixe pour une itérée contractante. 4 : dériver l'équation, $f'-\lambda f=g'$, puis multiplier par $e^{-\lambda z}$.

## Corrigé

**1. a)** Les $|a_n|$ sont bornés (terme général d'une série convergente), donc le rayon de convergence de $\sum a_nz^n$ est $\ge1$ ([[ch01-def-rayon-convergence]]) : $f$ est holomorphe sur $D$ ([[ch01-serie-entiere-holomorphe]]). Pour $z\in D$, Cauchy–Schwarz donne
$$
|f(z)|\le\Big(\sum_n|a_n|^2\Big)^{1/2}\Big(\sum_n|z|^{2n}\Big)^{1/2}=\frac{\norm f}{\sqrt{1-|z|^2}} .
$$

**b)** L'application $f\mapsto(a_n)_n$ est une bijection linéaire isométrique de $H^2$ sur $\ell^2(\N)$ (toute suite de $\ell^2$ définit, d'après a), une série entière de rayon $\ge1$, et deux séries entières égales sur $D$ ont les mêmes coefficients). Une isométrie bijective transporte les suites de Cauchy et leurs limites : $H^2$ est complet. Enfin, appliqué à $f_k-f$, a) donne, pour $|z|\le s$,
$$
|f_k(z)-f(z)|\le\frac{\norm{f_k-f}}{\sqrt{1-s^2}},
$$
d'où la convergence uniforme sur $\bar D(0,s)$ si $\norm{f_k-f}\to0$.

**2. a)** La série $F(z)=\sum_{n\ge0}\frac{a_n}{n+1}z^{n+1}$ a le même rayon de convergence que $f$, donc $\ge1$ ; elle est holomorphe sur $D$ et $F'=f$ ([[ch01-serie-entiere-holomorphe]]). Comme $F$ est une primitive holomorphe de $f$ sur $D$ et $[0,z]\subset D$, on a ([[ch01-integrale-primitive]])
$$
(Vf)(z)=F(z)-F(0)=\sum_{n\ge0}\frac{a_n}{n+1}z^{n+1}.
$$
Ainsi $Vf$ a pour coefficients $b_0=0$, $b_{n+1}=\frac{a_n}{n+1}$, et $\norm{Vf}^2=\sum_n\frac{|a_n|^2}{(n+1)^2}\le\norm f^2$. $V$ est linéaire (linéarité de l'intégrale), envoie $H^2$ dans $H^2$ et vérifie $\norm{Vf}\le\norm f$ : $V\in\mathcal L(H^2)$ et $\norm V\le1$ ([[ch05-norme-operateur-def]]).

**b)** Par récurrence sur $n$, $V^nf=\sum_{k\ge0}a_k\frac{k!}{(k+n)!}z^{k+n}$ (appliquer 2 a) à $V^{n-1}f$ : le coefficient de $z^{k+n-1}$ est divisé par $k+n$). Comme $\frac{(k+n)!}{k!\,n!}=\binom{k+n}{n}\ge1$, on a $\frac{k!}{(k+n)!}\le\frac1{n!}$, d'où
$$
\norm{V^nf}^2=\sum_{k\ge0}|a_k|^2\Big(\frac{k!}{(k+n)!}\Big)^2\le\frac{\norm f^2}{(n!)^2}.
$$
Pour $f=1$ ($a_0=1$, $\norm f=1$), $V^n1=\frac{z^n}{n!}$ est de norme $\frac1{n!}$ : l'égalité est atteinte. Donc $\norm{V^n}=\dfrac1{n!}$. (En particulier $\norm V=1$, alors que $\norm{V^n}^{1/n}=(n!)^{-1/n}\to0$.)

**3.** Soit $T:H^2\to H^2$, $T(f)=g+\lambda Vf$. Une solution est exactement un point fixe de $T$. Par récurrence, $T^n(f)=\sum_{j=0}^{n-1}\lambda^jV^jg+\lambda^nV^nf$, donc
$$
\norm{T^n(f_1)-T^n(f_2)}=|\lambda|^n\norm{V^n(f_1-f_2)}\le\frac{|\lambda|^n}{n!}\norm{f_1-f_2}.
$$
Comme $\frac{|\lambda|^n}{n!}\to0$, il existe $n\ge1$ avec $\frac{|\lambda|^n}{n!}<1$ : $T^n$ est contractante sur l'espace métrique complet $H^2$ (question 1 b)). Par la variante du théorème de Picard ([[ch06-point-fixe-iteree-contractante]]), $T$ a un unique point fixe $f$, limite de $T^k(0)=\sum_{j=0}^{k-1}\lambda^jV^jg$. Donc $f=\sum_{n\ge0}\lambda^nV^ng$, la série convergeant dans $H^2$ (elle converge d'ailleurs absolument : $\sum_n\norm{\lambda^nV^ng}\le e^{|\lambda|}\norm g$).

*Variante.* Dans l'espace de Banach $\mathcal L(H^2)$ ([[ch05-lef-banach-norme-algebre]]), la série $\sum\lambda^nV^n$ converge absolument ($\sum\frac{|\lambda|^n}{n!}=e^{|\lambda|}$) ; sa somme $R_\lambda$ vérifie $(\id-\lambda V)R_\lambda=R_\lambda(\id-\lambda V)=\id$ (télescopage), donc $\id-\lambda V$ est inversible d'inverse continu de norme $\le e^{|\lambda|}$. La série de Neumann « $\norm{\lambda V}<1$ » ne donnerait que $|\lambda|<1$.

**4.** D'après 1 a), $f$ et $g$ sont holomorphes sur $D$, et $(Vf)'=f$ (question 2 a)). En dérivant $f=g+\lambda Vf$ : $f'=g'+\lambda f$, et en évaluant en $0$ : $f(0)=g(0)$ car $(Vf)(0)=0$. Posons $u(z)=e^{-\lambda z}f(z)$ : $u'(z)=e^{-\lambda z}(f'-\lambda f)(z)=e^{-\lambda z}g'(z)$. Comme $u$ est une primitive de $e^{-\lambda w}g'(w)$ sur $D$ ([[ch01-integrale-primitive]]),
$$
e^{-\lambda z}f(z)-g(0)=\int_{[0,z]}e^{-\lambda w}g'(w)\,dw .
$$
Intégrons par parties (c'est-à-dire : $w\mapsto e^{-\lambda w}g(w)$ est une primitive de $e^{-\lambda w}g'(w)-\lambda e^{-\lambda w}g(w)$) :
$$
\int_{[0,z]}e^{-\lambda w}g'(w)\,dw=e^{-\lambda z}g(z)-g(0)+\lambda\int_{[0,z]}e^{-\lambda w}g(w)\,dw .
$$
En multipliant par $e^{\lambda z}$ : $f(z)=g(z)+\lambda\int_{[0,z]}e^{\lambda(z-w)}g(w)\,dw$.

*Vérification sur $g(z)=z$.* D'après 2 b), $V^nz=\frac{1!}{(1+n)!}z^{n+1}$, donc pour $\lambda\neq0$
$$
f(z)=\sum_{n\ge0}\frac{\lambda^nz^{n+1}}{(n+1)!}=\frac{e^{\lambda z}-1}{\lambda}
$$
(la série converge dans $H^2$ donc ponctuellement, 1 b)). La formule donne $z+\lambda\int_0^1e^{\lambda z(1-s)}sz\cdot z\,ds$ ; avec $\int_0^1se^{c(1-s)}ds=\frac{e^c-1-c}{c^2}$ ($c=\lambda z$), on obtient $z+\frac{e^{\lambda z}-1-\lambda z}{\lambda}=\frac{e^{\lambda z}-1}{\lambda}$. Les deux calculs concordent (vérifié aussi numériquement pour $g(z)=\frac1{2-z}$, $\lambda=0{,}7+0{,}3i$, $z=0{,}3+0{,}4i$ : résidu $\approx10^{-16}$).

**5.** *Si $\mu\neq0$* : $V-\mu\,\id=-\mu\,(\id-\mu^{-1}V)$, bijective d'après 3 (avec $\lambda=\mu^{-1}$).

*Si $\mu=0$* : $V$ est injective, car $(Vf)'=f$ ; mais elle n'est pas surjective, car $(Vf)(0)=0$ pour tout $f$, donc la fonction constante $1\in H^2$ n'est pas dans l'image.

L'ensemble cherché (le **spectre** de $V$) est donc $\{0\}$. De plus $V$ n'a aucune valeur propre : si $Vf=\mu f$ avec $\mu\neq0$, alors $f=\mu f'$ et $f(0)=0$, donc $(e^{-z/\mu}f)'=0$ sur $D$ connexe, $e^{-z/\mu}f$ est constante ([[ch05-differentielle-nulle-constante]]), égale à sa valeur $0$ en $0$ : $f=0$.

## Pièges et variantes

> ⚠️ $\norm V=1$ : la série de Neumann « naïve » (hypothèse $\norm{\lambda V}<1$) ne traite que $|\lambda|<1$. C'est la décroissance de $\norm{V^n}$ comme $1/n!$ qui permet tout $\lambda$ — d'où l'intérêt de la version « une itérée contractante » du théorème de Picard.

* Ne pas confondre « $V$ n'a pas de valeur propre » et « $V$ est inversible » : en dimension infinie, $V$ est injectif sans être surjectif. En dimension finie, un endomorphisme sans valeur propre non nulle et injectif serait inversible.
* En 2 a), écrire $Vf$ comme une primitive demande que $[0,z]$ soit inclus dans le disque de convergence : c'est le cas car $D$ est convexe et contient $0$.
* Variante : sur l'espace de Banach $\Hol(D)\cap\{f \text{ bornée}\}$ muni de $\sup_D|f|$, la même stratégie fonctionne avec $|V^nf(z)|\le\frac{|z|^n}{n!}\sup_D|f|$ (récurrence et majoration de l'intégrale sur un segment de longueur $|z|\le1$).
* Variante : $V_\alpha f(z)=\int_{[0,z]}\alpha(w)f(w)\,dw$ avec $\alpha$ holomorphe bornée ; la résolvante devient $f=g+\lambda\int_{[0,z]}\alpha(w)\,e^{\lambda(A(z)-A(w))}g(w)\,dw$ où $A$ est la primitive de $\alpha$ nulle en $0$.
