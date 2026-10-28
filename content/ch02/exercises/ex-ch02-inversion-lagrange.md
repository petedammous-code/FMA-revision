---
id: ex-ch02-inversion-lagrange
type: exercise
chapters: [2, 1]
title: Formule d'inversion de Lagrange
source: "Classique (formule d'inversion de Lagrange, preuve par Rouché et les résidus)"
difficulty: 3
time: 40
tools: [ch02-rouche, ch02-formule-residus, ch02-meromorphes-operations, ch02-principe-argument, ch01-estimees-cauchy, ch01-serie-entiere-holomorphe, ch01-integrale-primitive]
---
## Énoncé

Soient $r>0$ et $\varphi$ une fonction holomorphe sur un ouvert $\Omega$ contenant le disque fermé $\bar D(0,r)$. On note $M=\max_{|z|=r}|\varphi(z)|$, on suppose $M>0$ et on pose $\rho=r/M$. Pour $w\in\C$, on note $F_w(z)=z-w\varphi(z)$.

1. Soit $w\in D(0,\rho)$. Montrer que l'équation $z=w\varphi(z)$ possède exactement une solution dans $D(0,r)$ ; on la note $g(w)$. Montrer que $g(w)$ est un zéro simple de $F_w$.
2. Montrer que, pour $w\in D(0,\rho)$,
$$
g(w)=\frac1{2i\pi}\int_{C(0,r)}\frac{z\,\big(1-w\varphi'(z)\big)}{z-w\varphi(z)}\,dz .
$$
3. Montrer que, pour tout $w\in D(0,\rho)$,
$$
g(w)=\sum_{n\ge1}c_n\,w^n,\qquad c_n=\frac1{n!}\,\frac{d^{\,n-1}}{dz^{\,n-1}}\Big[\varphi(z)^n\Big]_{z=0},
$$
et en déduire que $g$ est holomorphe sur $D(0,\rho)$.
4. *Application.* On prend $\varphi=\exp$.
   * (a) Montrer que pour $|w|<1/e$, l'équation $z=we^z$ a une unique solution $T(w)$ dans $D(0,1)$, et que $T(w)=\sum_{n\ge1}\frac{n^{n-1}}{n!}w^n$.
   * (b) Déterminer le rayon de convergence de cette série. Vérifier que $T(w)=w+w^2+\frac32w^3+O(w^4)$ est compatible avec l'équation $T=we^{T}$.

## Indices

### Indice 1
Question 1 : compter des zéros dans un disque en comparant à une fonction plus simple. Question 2 : la quantité $\frac{1}{2i\pi}\int z\frac{F'}{F}$ ressemble au principe de l'argument, avec un poids $z$ : calculer les résidus de $z\frac{F_w'}{F_w}$.

### Indice 2
Rouché sur $U=D(0,r)$ avec $f=F_w$ et $g_0(z)=z$ : sur $C(0,r)$, $|F_w(z)-z|=|w||\varphi(z)|\le|w|M<r=|z|$. Pour la question 2 : formule des résidus sur un disque $D(0,R)\subset\Omega$, $R>r$ ; si $F(z)=(z-s)H(z)$ avec $H(s)\ne0$, alors $z\frac{F'}{F}=\frac{z}{z-s}+z\frac{H'}{H}$.

### Indice 3
Sur $C(0,r)$, $\left|\frac{w\varphi(z)}{z}\right|\le\frac{|w|M}r<1$ : développer $\frac1{z-w\varphi(z)}=\sum_{k\ge0}\frac{w^k\varphi(z)^k}{z^{k+1}}$ (convergence normale), intégrer terme à terme et utiliser $\frac1{2i\pi}\int_{C(0,r)}\frac{\psi(z)}{z^{m+1}}dz=\frac{\psi^{(m)}(0)}{m!}$. Remarquer que $\varphi'\varphi^{k}=\frac{1}{k+1}(\varphi^{k+1})'$.

## Corrigé

**Préliminaire.** Le compact $\bar D(0,r)$ est à distance $\delta>0$ du fermé $\C\setminus\Omega$ (si $\Omega\ne\C$), donc $D(0,R)\subset\Omega$ pour $R=r+\delta$ ; on fixe un tel $R>r$. Le disque $D(0,R)$ est convexe donc simplement connexe ([[ch02-etoile-simplement-connexe]]).

**1.** Fixons $w\in D(0,\rho)$, c'est-à-dire $|w|M<r$. Appliquons le théorème de Rouché ([[ch02-rouche]]) aux fonctions $f=F_w$ et $g_0(z)=z$, holomorphes (donc méromorphes, sans pôle) sur $\Omega$, avec $U=D(0,r)$ : $\bar U\subset\Omega$, et le bord $\Gamma=C(0,r)$ est un lacet orienté positivement. Vérifions les hypothèses sur $\Gamma$ :
* $g_0(z)=z\ne0$ ;
* $|f(z)-g_0(z)|=|w|\,|\varphi(z)|\le|w|M<r=|g_0(z)|$ ;
* $f$ ne s'annule pas sur $\Gamma$ : $|F_w(z)|\ge|z|-|w||\varphi(z)|\ge r-|w|M>0$.

Donc $Z(F_w,U)-0=Z(g_0,U)-0=1$ : $F_w$ a exactement un zéro dans $D(0,r)$ **compté avec multiplicité**. Il y a donc exactement une solution $g(w)$ de $z=w\varphi(z)$ dans $D(0,r)$, et c'est un zéro de multiplicité $1$, c'est-à-dire simple ($F_w'(g(w))\ne0$). Par exemple $g(0)=0$.

**2.** Fixons $w\in D(0,\rho)$ et notons $s_0=g(w)$, $F=F_w$, de sorte que $F'(z)=1-w\varphi'(z)$.

*Méromorphie.* $F$ est holomorphe sur le connexe $D(0,R)$ et n'y est pas identiquement nulle (elle ne s'annule pas sur $C(0,r)$) ; donc $1/F$ est méromorphe sur $D(0,R)$ ([[ch02-meromorphes-operations]]) et $h(z)=z\frac{F'(z)}{F(z)}$ aussi (produit). Ses pôles sont parmi les zéros de $F$.

*Résidus.* En un zéro $s$ de $F$ de multiplicité $m$, $F(z)=(z-s)^mH(z)$ avec $H$ holomorphe près de $s$, $H(s)\ne0$, d'où $\frac{F'}{F}=\frac{m}{z-s}+\frac{H'}{H}$ et
$$
h(z)=\frac{mz}{z-s}+z\frac{H'(z)}{H(z)}=m+\frac{ms}{z-s}+(\text{holomorphe près de }s),
\qquad \Res_s(h)=m\,s .
$$
(C'est le calcul de la preuve du principe de l'argument, [[ch02-principe-argument]], avec le poids $z$.)

*Formule des résidus* ([[ch02-formule-residus]]) sur l'ouvert simplement connexe $D(0,R)$, pour le lacet $C(0,r)$, qui évite les pôles de $h$ (car $F\ne0$ sur $C(0,r)$) : l'indice vaut $1$ aux points de $D(0,r)$ et $0$ aux points de $|z|>r$ ([[ch02-indice-cercle]]). Le seul zéro de $F$ dans $D(0,r)$ est $s_0$, simple. Donc
$$
\frac1{2i\pi}\int_{C(0,r)}\frac{z\,(1-w\varphi'(z))}{z-w\varphi(z)}\,dz=\Res_{s_0}(h)\cdot1=s_0=g(w).
$$

**3.** Fixons $w\in D(0,\rho)$ et posons $q=|w|M/r<1$, $M'=\max_{|z|=r}|\varphi'(z)|$.

*Développement.* Pour $|z|=r$, $\left|\frac{w\varphi(z)}z\right|\le q<1$, donc
$$
\frac{z\,(1-w\varphi'(z))}{z-w\varphi(z)}=\frac{1-w\varphi'(z)}{1-\frac{w\varphi(z)}{z}}=\sum_{k\ge0}\big(1-w\varphi'(z)\big)\frac{w^k\varphi(z)^k}{z^k},
$$
et le terme général est majoré sur $C(0,r)$ par $(1+|w|M')q^k$, terme d'une série convergente : la convergence est normale sur le chemin, ce qui permet d'intégrer terme à terme. On obtient, avec la question 2,
$$
g(w)=\sum_{k\ge0}A_k\,w^k-\sum_{k\ge0}B_k\,w^{k+1},\qquad
A_k=\frac1{2i\pi}\int_{C(0,r)}\frac{\varphi(z)^k}{z^k}dz,\quad B_k=\frac1{2i\pi}\int_{C(0,r)}\frac{\varphi'(z)\varphi(z)^k}{z^k}dz,
$$
les deux séries convergeant absolument car $|A_k|\le\frac{2\pi r}{2\pi}\frac{M^k}{r^k}$ et $|B_k|\le rM'\frac{M^k}{r^k}$, donc $|A_kw^k|\le rq^k$ et $|B_kw^{k+1}|\le |w|rM'q^k$. Les nombres $A_k,B_k$ **ne dépendent pas de $w$**.

*Calcul des coefficients.* Pour $\psi$ holomorphe sur $\Omega\supset\bar D(0,r)$ et $m\in\N$, la formule de Cauchy pour les dérivées ([[ch01-estimees-cauchy]], formule (I.7.1)) donne $\frac1{2i\pi}\int_{C(0,r)}\frac{\psi(z)}{z^{m+1}}dz=\frac{\psi^{(m)}(0)}{m!}$.
* $A_0=\frac1{2i\pi}\int_{C(0,r)}dz=0$ et $B_0=\frac1{2i\pi}\int_{C(0,r)}\varphi'(z)dz=0$ : intégrales sur un lacet de fonctions qui ont une primitive holomorphe ($z$ et $\varphi$), [[ch01-integrale-primitive]].
* Pour $k\ge1$ : $A_k=\dfrac{(\varphi^k)^{(k-1)}(0)}{(k-1)!}$.
* Pour $k\ge1$ : $\varphi'\varphi^k=\frac1{k+1}(\varphi^{k+1})'$, donc $B_k=\dfrac{1}{k+1}\cdot\dfrac{\big((\varphi^{k+1})'\big)^{(k-1)}(0)}{(k-1)!}=\dfrac{(\varphi^{k+1})^{(k)}(0)}{(k+1)\,(k-1)!}$.

*Regroupement.* Les deux séries convergeant absolument, on peut regrouper par puissances de $w$ : $g(w)=\sum_{n\ge1}(A_n-B_{n-1})w^n$. Pour $n=1$ : $A_1-B_0=\varphi(0)=c_1$. Pour $n\ge2$, en notant $D_n=(\varphi^n)^{(n-1)}(0)$ :
$$
A_n-B_{n-1}=\frac{D_n}{(n-1)!}-\frac{D_n}{n\,(n-2)!}=D_n\left(\frac{n}{n!}-\frac{n-1}{n!}\right)=\frac{D_n}{n!}=c_n .
$$
Ainsi $g(w)=\sum_{n\ge1}c_nw^n$ pour tout $w\in D(0,\rho)$. Cette série entière converge en tout point de $D(0,\rho)$, donc son rayon est $\ge\rho$, et $g$, qui est sa somme sur $D(0,\rho)$, est holomorphe sur $D(0,\rho)$ ([[ch01-serie-entiere-holomorphe]]).

**4.(a)** $\varphi=\exp$ est entière ; prenons $r=1$ : $M=\max_{|z|=1}|e^z|=\max_{|z|=1}e^{\Re z}=e$ (atteint en $z=1$), donc $\rho=1/e$. Les questions 1 et 3 donnent, pour $|w|<1/e$, une unique solution $T(w)\in D(0,1)$ de $z=we^z$, avec $c_n=\frac1{n!}\big(e^{nz}\big)^{(n-1)}(0)=\frac{n^{n-1}}{n!}$, d'où
$$
T(w)=\sum_{n\ge1}\frac{n^{n-1}}{n!}\,w^n .
$$
(Le choix $r=1$ est optimal : pour un $r$ quelconque on obtient $\rho(r)=re^{-r}$, maximal en $r=1$.)

**4.(b)** Avec $c_n=\frac{n^{n-1}}{n!}>0$ :
$$
\frac{c_{n+1}}{c_n}=\frac{(n+1)^n}{(n+1)!}\cdot\frac{n!}{n^{n-1}}=\frac{(n+1)^{n-1}}{n^{n-1}}=\Big(1+\frac1n\Big)^{n-1}\xrightarrow[n\to\infty]{}e,
$$
donc (règle de d'Alembert) le rayon de convergence est exactement $1/e$ : la question 3 donne ici le rayon optimal. Les premiers coefficients sont $c_1=1$, $c_2=\frac{2}{2}=1$, $c_3=\frac{9}{6}=\frac32$. Vérification : si $T=w+w^2+\frac32w^3+O(w^4)$, alors $we^T=w\big(1+T+\frac{T^2}2+O(w^3)\big)=w\big(1+w+w^2+\frac{w^2}{2}+O(w^3)\big)=w+w^2+\frac32w^3+O(w^4)=T$. (Contrôle numérique : pour $w=0{,}2$, la série donne $T=0{,}259171\ldots$ et $T-0{,}2\,e^{T}\approx10^{-30}$.)

## Pièges et variantes

* **Rouché compte avec multiplicité** : c'est ce qui donne gratuitement la simplicité du zéro, indispensable pour que le résidu de $z\frac{F'}{F}$ soit exactement $g(w)$ (en un zéro de multiplicité $m$ ce serait $m\,s$).
* **Inégalité stricte sur tout le cercle** : $|w|M<r$ est exactement ce qu'il faut ; pour $|w|=\rho$, l'inégalité peut devenir une égalité en un point du cercle et Rouché ne s'applique plus.
* **Ne pas oublier $A_0$ et $B_0$** (ou les traiter à part) : la formule $A_k=\frac{(\varphi^k)^{(k-1)}(0)}{(k-1)!}$ n'a pas de sens pour $k=0$.
* **Interversion somme/intégrale** : à justifier par la convergence normale **sur le cercle** (on ne demande rien à l'intérieur du disque).
* **Variante (formule de Lagrange–Bürmann).** Pour $H$ holomorphe près de $\bar D(0,r)$, le même calcul avec $H(z)\frac{F_w'(z)}{F_w(z)}$ donne $H(g(w))=H(0)+\sum_{n\ge1}\frac{w^n}{n!}\big[(H'\varphi^n)^{(n-1)}\big](0)$.
* **Variante.** Avec $\varphi(z)=(1+z)^2$ (et $r$ convenable), l'équation $z=w(1+z)^2$ donne $c_n=\frac1{n!}\big((1+z)^{2n}\big)^{(n-1)}(0)=\frac1n\binom{2n}{n-1}$ : on retrouve les nombres de Catalan $1,2,5,14,\dots$
