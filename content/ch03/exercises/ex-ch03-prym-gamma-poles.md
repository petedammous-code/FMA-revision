---
id: ex-ch03-prym-gamma-poles
type: exercise
chapters: [3, 1, 2]
title: Γ comme somme de ses parties polaires plus une fonction entière
source: "Classique (décomposition de Prym de la fonction Γ ; cf. Remmert, Classical Topics in Complex Function Theory, ch. 2), adapté"
difficulty: 3
time: 40
tools: [ch03-weierstrass-series, ch03-convergence-normale-definition, ch03-gamma-definition-prolongement, ch01-holomorphie-sous-integrale, ch01-fonction-gamma, ch01-prolongement-analytique, ch02-pole-meromorphe-def, ch02-residu-def]
---
## Énoncé

Pour $\Re(z)>0$, on note $\Gamma(z)=\displaystyle\int_0^{+\infty}e^{-t}t^{z-1}\,dt$, où $t^{z-1}=e^{(z-1)\log t}$ pour $t>0$ ; on sait que $\Gamma$ est holomorphe sur $\{\Re(z)>0\}$ et que $\Gamma(z+1)=z\Gamma(z)$ (on ne suppose **pas** connu le prolongement de $\Gamma$ à $\C$). On note $-\N=\{0,-1,-2,\dots\}$ et l'on pose
$$
P(z)=\sum_{n\ge0}\frac{(-1)^n}{n!\,(z+n)}\quad(z\in\C\setminus(-\N)),\qquad E(z)=\int_1^{+\infty}e^{-t}t^{z-1}\,dt\quad(z\in\C).
$$
1. Montrer que $P$ est holomorphe sur $\C\setminus(-\N)$ et méromorphe sur $\C$, avec en chaque $-m$ ($m\in\N$) un pôle simple dont on calculera le résidu.
2. Montrer que $E$ est une fonction entière.
3. Montrer que $\Gamma(z)=P(z)+E(z)$ pour tout $z$ tel que $\Re(z)>0$.
4. En déduire que $\Gamma$ se prolonge en une fonction méromorphe sur $\C$, holomorphe sur $\C\setminus(-\N)$, et que ce prolongement est unique. Préciser ses pôles et ses résidus.
5. Montrer directement, à partir des définitions de $P$ et $E$, que pour tout $z\in\C\setminus(-\N)$,
$$
P(z+1)=zP(z)-\frac1e,\qquad E(z+1)=zE(z)+\frac1e,
$$
et retrouver $\Gamma(z+1)=z\Gamma(z)$ sur $\C\setminus(-\N)$. Vérifier la cohérence du résidu en $-m$ trouvé en 4 avec cette relation.

## Indices

### Indice 1
Q1 : une série de fonctions holomorphes sur un ouvert ; quel mode de convergence établir sur les compacts de $\C\setminus(-\N)$ ? Pour la nature des points $-m$, isoler **le** terme de la série qui est singulier en $-m$. Q2 : une intégrale à paramètre holomorphe. Q3 : couper $\int_0^\infty=\int_0^1+\int_1^\infty$ et développer $e^{-t}$ en série.

### Indice 2
Q1 : si $K\subset\bar D(0,R)$, alors pour $n\ge R+1$ et $z\in K$, $|z+n|\ge n-R\ge1$, donc le $n$-ième terme est majoré par $1/n!$ sur $K$. Q2 : Théorème I.9.1 ; pour $t\ge1$, $|t^{z-1}|=t^{\Re(z)-1}$ est croissant en $\Re(z)$, ce qui fournit un majorant intégrable localement uniforme. Q3 : intervertir somme et intégrale grâce à $\sum_n\int_0^1\frac{t^{n+x-1}}{n!}dt<\infty$ ($x=\Re z>0$).

### Indice 3
Q4 : $P+E$ est méromorphe sur $\C$ et coïncide avec $\Gamma$ sur le demi-plan ; $\C\setminus(-\N)$ est connexe : prolongement analytique. Q5 : écrire $\frac{z}{z+n}=1-\frac{n}{z+n}$ dans $zP(z)$, puis réindexer ; pour $E$, intégrer par parties $\int_1^\infty e^{-t}t^{z}\,dt$.

## Corrigé

**1.** Notons $u_n(z)=\frac{(-1)^n}{n!\,(z+n)}$, holomorphe sur l'ouvert $\Omega=\C\setminus(-\N)$ (l'ensemble $-\N$ est fermé dans $\C$, donc $\Omega$ est ouvert).

*Convergence normale sur les compacts de $\Omega$.* Soit $K\subset\Omega$ compact, et $R>0$ tel que $K\subset\bar D(0,R)$. Pour $n\ge R+1$ et $z\in K$ : $|z+n|\ge n-|z|\ge n-R\ge1$, donc $\|u_n\|_{\infty,K}\le\frac1{n!}$. Pour les indices $n<R+1$, en nombre fini, $u_n$ est continue sur le compact $K$ (qui ne contient pas $-n$), donc bornée. Ainsi $\sum_n\|u_n\|_{\infty,K}<\infty$ ([[ch03-convergence-normale-definition]]). Tout point de $\Omega$ ayant un voisinage compact dans $\Omega$, la série converge localement normalement sur $\Omega$ et, par le théorème de Weierstrass pour les séries ([[ch03-weierstrass-series]], poly, Théorème III.1.5, p. 61), **$P$ est holomorphe sur $\Omega$**.

*Les points $-m$.* Fixons $m\in\N$ et $V=D(-m,\frac12)$. Sur $V$, aucun $-n$ avec $n\ne m$ n'est présent ($|{-n}-(-m)|\ge1$), et le raisonnement précédent, appliqué au compact $\bar D(-m,\frac14)$ et à la série $\sum_{n\ne m}u_n$, montre que $Q_m=\sum_{n\ne m}u_n$ est holomorphe sur $D(-m,\frac14)$. Ainsi, pour $0<|z+m|<\frac14$,
$$
P(z)=\frac{(-1)^m}{m!}\,\frac{1}{z+m}+Q_m(z),\qquad Q_m\ \text{holomorphe en }-m .
$$
Donc $(z+m)P(z)$ est bornée près de $-m$ et $P$ ne se prolonge pas holomorphiquement en $-m$ (sinon $\frac{(-1)^m}{m!(z+m)}=P-Q_m$ serait bornée près de $-m$) : $-m$ est un **pôle simple** ([[ch02-pole-meromorphe-def]], poly, Définition II.4.2, p. 43), et le coefficient de $(z+m)^{-1}$ dans le développement de Laurent est ([[ch02-residu-def]])
$$
\Res_{-m}(P)=\frac{(-1)^m}{m!}.
$$
L'ensemble des pôles $-\N$ étant localement fini dans $\C$, $P$ est méromorphe sur $\C$.

**2.** On applique le théorème d'holomorphie sous l'intégrale ([[ch01-holomorphie-sous-integrale]], poly, Théorème I.9.1, p. 24) avec $\Omega=\C$, $X=[1,+\infty[$, $F(z,t)=e^{-t}t^{z-1}=e^{-t}e^{(z-1)\log t}$.
* (i) $F$ est continue donc mesurable, et pour tout $t\ge1$, $z\mapsto F(z,t)$ est entière (exponentielle d'une fonction affine de $z$).
* (ii) Soit $z_0\in\C$, $r_0=1$ et $\beta=\max(\Re z_0,0)$. Pour $z\in D(z_0,1)$, $\Re(z)-1<\Re(z_0)\le\beta$, et comme $t\ge1$, $|F(z,t)|=e^{-t}t^{\Re(z)-1}\le e^{-t}t^{\beta}=:g_{z_0}(t)$, intégrable sur $[1,+\infty[$.

Donc **$E$ est entière**.

**3.** Soit $z=x+iy$ avec $x>0$. On écrit $\Gamma(z)=\int_0^1e^{-t}t^{z-1}dt+E(z)$ (les deux intégrales convergent absolument). Pour $t\in\,]0,1]$, $e^{-t}t^{z-1}=\sum_{n\ge0}\frac{(-1)^n}{n!}t^{n+z-1}$, et
$$
\sum_{n\ge0}\int_0^1\Bigl|\frac{(-1)^n}{n!}t^{n+z-1}\Bigr|dt=\sum_{n\ge0}\frac{1}{n!}\int_0^1t^{n+x-1}dt=\sum_{n\ge0}\frac{1}{n!\,(n+x)}\le\frac1x+\sum_{n\ge1}\frac1{n!}<\infty .
$$
Le théorème d'interversion série–intégrale (Fubini–Tonelli pour la mesure de comptage, ou convergence dominée par $\sum_n\frac{t^{n+x-1}}{n!}=e^{t}t^{x-1}$, intégrable sur $]0,1]$ car $x>0$) donne
$$
\int_0^1e^{-t}t^{z-1}dt=\sum_{n\ge0}\frac{(-1)^n}{n!}\int_0^1t^{n+z-1}dt=\sum_{n\ge0}\frac{(-1)^n}{n!\,(n+z)}=P(z),
$$
car $\int_0^1t^{n+z-1}dt=\bigl[\frac{t^{n+z}}{n+z}\bigr]_0^1=\frac1{n+z}$ (on a $|t^{n+z}|=t^{n+x}\to0$ en $0^+$). D'où $\Gamma=P+E$ sur $\{\Re(z)>0\}$.

**4.** *Existence.* $\tilde\Gamma:=P+E$ est méromorphe sur $\C$ (somme d'une méromorphe et d'une entière), holomorphe sur $\C\setminus(-\N)$, et coïncide avec $\Gamma$ sur $\{\Re(z)>0\}$ (question 3) : c'est un prolongement méromorphe de $\Gamma$.

*Unicité.* Si $\Gamma_1$ est un autre prolongement holomorphe sur $\C\setminus(-\N)$, alors $\Gamma_1$ et $\tilde\Gamma$ sont holomorphes sur l'ouvert **connexe** $\C\setminus(-\N)$ (le complémentaire d'une partie fermée discrète de $\C$ est connexe par arcs) et coïncident sur le demi-plan $\{\Re(z)>0\}$, qui a des points d'accumulation dans cet ouvert : par le principe du prolongement analytique ([[ch01-prolongement-analytique]], poly, Corollaire I.11.6, p. 28), $\Gamma_1=\tilde\Gamma$. En particulier, ce prolongement est celui que le poly obtient par $\Gamma(z)=\Gamma(z+1)/z$ ([[ch03-gamma-definition-prolongement]], poly, Exemple III.6.4, p. 71).

*Pôles et résidus.* $E$ étant entière, les pôles de $\Gamma$ sont ceux de $P$ : les $-m$, $m\in\N$, tous simples, et
$$
\Res_{-m}(\Gamma)=\Res_{-m}(P)+\Res_{-m}(E)=\frac{(-1)^m}{m!}+0=\frac{(-1)^m}{m!}.
$$
On lit même davantage : $\Gamma-\sum_{n\ge0}\frac{(-1)^n}{n!(z+n)}$ est **entière** — $\Gamma$ est la somme de ses parties polaires et d'une fonction entière, et la série des parties polaires converge sans terme correcteur (grâce au $1/n!$).

**5.** *Pour $P$.* Soit $z\in\C\setminus(-\N)$. Comme $\frac{z}{z+n}=1-\frac{n}{z+n}$ et que les séries en jeu convergent absolument,
$$
zP(z)=\sum_{n\ge0}\frac{(-1)^n}{n!}-\sum_{n\ge1}\frac{(-1)^n\,n}{n!\,(z+n)}=e^{-1}+\sum_{n\ge1}\frac{(-1)^{n-1}}{(n-1)!\,(z+n)}=e^{-1}+\sum_{k\ge0}\frac{(-1)^k}{k!\,(z+1+k)},
$$
avec $k=n-1$. La dernière série est $P(z+1)$, bien défini car $z+1\in-\N$ entraînerait $z\in\{-1,-2,\dots\}\subset-\N$. Donc $P(z+1)=zP(z)-e^{-1}$.

*Pour $E$.* Intégration par parties sur $[1,A]$ puis $A\to+\infty$ : $\int_1^A e^{-t}t^{z}dt=\bigl[-e^{-t}t^z\bigr]_1^A+z\int_1^Ae^{-t}t^{z-1}dt$, et $|e^{-A}A^z|=e^{-A}A^{\Re z}\to0$. Donc $E(z+1)=e^{-1}+zE(z)$ pour tout $z\in\C$.

*Relation fonctionnelle.* En sommant : $\Gamma(z+1)=P(z+1)+E(z+1)=zP(z)+zE(z)=z\Gamma(z)$ sur $\C\setminus(-\N)$ — sans repasser par le demi-plan.

*Cohérence des résidus.* La relation donne, pour $z$ voisin de $-m$, $\Gamma(z)=\dfrac{\Gamma(z+m+1)}{z(z+1)\cdots(z+m)}$, et $\Gamma(z+m+1)\to\Gamma(1)=1$ quand $z\to-m$. Donc
$$
\Res_{-m}(\Gamma)=\lim_{z\to-m}(z+m)\Gamma(z)=\frac{1}{(-m)(-m+1)\cdots(-1)}=\frac{(-1)^m}{m!},
$$
ce qui concorde avec la question 4. (Vérification numérique : $P(z)+E(z)$ et $\Gamma(z)$ coïncident à $10^{-30}$ près en $z=-2{,}5+i$ et $z=0{,}5+0{,}3i$.)

## Pièges et variantes

* Q1 : la série ne converge **pas** normalement sur $\Omega$ tout entier (près de $-n$, le terme $u_n$ explose) ; il faut travailler sur les compacts de $\Omega$, puis traiter chaque pôle en **isolant** le terme singulier.
* Q2 : un majorant de la forme $e^{-t}t^{\Re z-1}$ **dépend de $z$** ; le Théorème I.9.1 exige un majorant valable sur tout un disque $D(z_0,r_0)$. Sur $[1,+\infty[$ c'est la croissance de $s\mapsto t^s$ qui le fournit ; sur $]0,1]$, au contraire, $t^{\Re z-1}$ n'est plus intégrable en $0$ dès que $\Re z\le0$ : c'est la partie $\int_0^1$, c'est-à-dire $P$, qui porte les pôles.
* Q3 : l'interversion $\sum\leftrightarrow\int$ doit être justifiée (convergence absolue ou dominée).
* Q4 : le prolongement analytique demande la **connexité** de $\C\setminus(-\N)$.
* Variante : en $z=1$, $P(1)=\sum_{n\ge0}\frac{(-1)^n}{(n+1)!}=1-e^{-1}=\int_0^1e^{-t}dt$.
* Variante : d'après la question 4, $\Gamma(z)\,\Gamma(1-z)$ a des pôles simples exactement aux entiers, donc $\Gamma(z)\,\Gamma(1-z)\sin(\pi z)$ se prolonge en une fonction entière ; en la comparant à $\pi$ (poly, Exercice III.7.7) on retrouve la formule des compléments.
