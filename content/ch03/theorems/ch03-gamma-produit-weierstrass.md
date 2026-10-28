---
id: ch03-gamma-produit-weierstrass
type: proposition
chapter: 3
title: Formule de Gauss et produit de Weierstrass de $\Gamma$
ref: Exemple III.6.4 (formules finales, p. 71-72)
page: 72
importance: 2
depends: [ch03-produits-infinis, ch03-exp-estimation, ch03-gamma-definition-prolongement, ch01-fonction-gamma, ch01-prolongement-analytique, ch03-convergence-normale-definition]
tags: [gamma, produit-infini, weierstrass, gauss, constante-euler, facteurs-de-convergence]
---
## Intuition

> 💡 $\Gamma$ a des pôles en $0,-1,-2,\dots$ et (on va le voir) ne s'annule jamais ; donc $1/\Gamma$ est une fonction **entière** dont les zéros sont exactement $0,-1,-2,\dots$, tous simples. Comme pour le sinus ([[ch03-produit-sinus]]), on cherche à l'écrire comme un produit sur ses zéros : « $1/\Gamma(z)\approx z\prod_k(1+\frac zk)$ ».

Problème : $\prod_k(1+\frac zk)$ **diverge**, car $\sum_k\frac zk$ diverge (série harmonique). Weierstraß corrige chaque facteur par $e^{-z/k}$ : $(1+\frac zk)e^{-z/k}=1+O(\frac{z^2}{k^2})$, et $\sum1/k^2$ converge, donc le produit corrigé converge par le théorème des produits infinis ([[ch03-produits-infinis]]). La correction totale $e^{-z\sum1/k}$ est compensée par $n^{-z}=e^{-z\log n}$, et l'écart $\sum_{k\le n}\frac1k-\log n$ converge vers la **constante d'Euler** $\gamma\approx0{,}5772$ : d'où le facteur $e^{\gamma z}$.

Rappels : $\Gamma(z)=\int_0^\infty e^{-t}t^{z-1}dt$ pour $\Re(z)>0$, $\Gamma(z+1)=z\Gamma(z)$, prolongement méromorphe à $\C$ de pôles $-\N=\{0,-1,-2,\dots\}$ ([[ch03-gamma-definition-prolongement]]) ; $n^z:=e^{z\log n}$.

## Énoncé

**Proposition (poly, Exemple III.6.4, p. 71-72).** 

1. **(Formule de Gauss.)** Pour tout $z$ tel que $\Re(z)>0$,
$$
\Gamma(z)=\lim_{n\to+\infty}\int_0^n\Big(1-\frac tn\Big)^nt^{z-1}\,dt=\lim_{n\to+\infty}\frac{n^z\,n!}{z(z+1)\cdots(z+n)},\qquad \frac1{\Gamma(z)}=\lim_{n\to+\infty}z\,n^{-z}\prod_{k=1}^n\Big(1+\frac zk\Big).
$$
2. **(Constante d'Euler.)** $\gamma:=\lim_{n\to+\infty}\Big(\sum_{k=1}^n\frac1k-\log n\Big)$ existe, et $z\mapsto e^{-z(\log n-\sum_{j=1}^n1/j)}$ converge uniformément sur tout compact de $\C$ vers $z\mapsto e^{\gamma z}$.
3. **(Produit de Weierstraß.)** Le produit $z\mapsto\prod_{k=1}^\infty\big(1+\frac zk\big)e^{-z/k}:=\lim_{n\to+\infty}\prod_{k=1}^n\big(1+\frac zk\big)e^{-z/k}$ définit une fonction holomorphe sur $\C$, dont les zéros sont les entiers strictement négatifs, simples. La fonction
$$
\Gamma(z)=\frac{e^{-\gamma z}}{z}\prod_{k=1}^\infty\Big(1+\frac zk\Big)^{-1}e^{z/k},\qquad\text{i.e.}\qquad \frac1{\Gamma(z)}=z\,e^{\gamma z}\prod_{k=1}^\infty\Big(1+\frac zk\Big)e^{-z/k},
$$
est holomorphe sur $\C\setminus(-\N)$, méromorphe sur $\C$ avec pour pôles les entiers négatifs ou nuls, qui sont simples, et coïncide avec $\Gamma$ sur le demi-plan $\{\Re(z)>0\}$. Ceci définit un prolongement analytique de $\Gamma$ sur $\C\setminus(-\N)$, et l'équation fonctionnelle $\Gamma(z+1)=z\Gamma(z)$ est toujours valide sur ce domaine.

*Conséquences.* $1/\Gamma$ est entière : $\Gamma$ ne s'annule pas sur $\C\setminus(-\N)$ ; et la formule de Gauss reste vraie pour tout $z\in\C\setminus(-\N)$.

## Hypothèses

### H1 — $\Re(z)>0$ dans la formule de Gauss (étape intégrale)

**Rôle.** La formule de Gauss est démontrée à partir de la définition intégrale de $\Gamma$, par convergence dominée (domination par $e^{-t}t^{\Re(z)-1}$, intégrable seulement si $\Re(z)>0$) et intégrations par parties (termes de bord $u^z\to0$ en $0$).

**Si on la retire.** C'est une restriction de **méthode**, pas de résultat : une fois le produit établi, l'identité algébrique $\frac{n^zn!}{z(z+1)\cdots(z+n)}=\Big(z\,e^{z(\sum_{k\le n}1/k-\log n)}\prod_{k=1}^n(1+\frac zk)e^{-z/k}\Big)^{-1}$ montre que la formule de Gauss vaut sur $\C\setminus(-\N)$. En revanche l'intégrale $\int_0^n(1-t/n)^nt^{z-1}dt$ diverge pour $\Re(z)\le0$ (comportement $t^{\Re(z)-1}$ en $0$).

### H2 — Les facteurs de convergence $e^{-z/k}$

**Rôle.** Ils rendent $u_k(z):=(1+\frac zk)e^{-z/k}-1$ de taille $O(R^2/k^2)$ sur $\bar D(0,R)$ ([[ch03-exp-estimation]]), donc $\sum u_k$ normalement convergente sur tout compact : c'est l'hypothèse du Théorème III.5.1.

**Si on la retire.** Le produit $\prod_k(1+\frac zk)$ diverge pour tout $z\notin-\N^\times$... sauf $z=0$ : pour $z=1$, $\prod_{k=1}^n(1+\frac1k)=\prod_{k=1}^n\frac{k+1}{k}=n+1\to+\infty$ ; pour $z=-\frac12$, $\prod_{k=1}^n(1-\frac1{2k})\to0$ sans qu'aucun facteur ne s'annule (car $\sum_k\log(1-\frac1{2k})\le-\sum_k\frac1{2k}=-\infty$). La série $\sum_kz/k$ n'est pas normalement convergente ($\sum|z|/k=+\infty$) : le Théorème III.5.1 ne s'applique pas. C'est exactement le rôle de $n^{-z}$ dans la formule de Gauss, puis de $e^{-z/k}$ et $e^{\gamma z}$ dans celle de Weierstraß.

## Idée de la preuve

Convergence dominée avec $(1-\frac tn)^n\uparrow e^{-t}$, puis changement de variable $t=nu$ et $n$ intégrations par parties : $\Gamma(z)=\lim\frac{n^zn!}{z(z+1)\cdots(z+n)}$. On réécrit l'inverse comme $z\,e^{z(H_n-\log n)}\prod_{k\le n}(1+\frac zk)e^{-z/k}$ ($H_n=\sum_{k\le n}\frac1k$) ; $H_n-\log n\to\gamma$ et le produit converge par le Théorème III.5.1 car $|(1+w)e^{-w}-1|\le C|w|^2$. Prolongement analytique pour finir.

## Preuve

Fixons d'abord $z$ avec $x:=\Re(z)>0$.

*Étape 1 : convergence dominée.* Posons $f_n(t):=\big(1-\frac tn\big)^nt^{z-1}\mathbf 1_{[0,n]}(t)$ pour $t>0$. Pour $t$ fixé et $n>t$, $n\log(1-\frac tn)=-t+O(\frac1n)$, donc $f_n(t)\to e^{-t}t^{z-1}$. Et comme $\log(1-u)\le-u$ pour $u\in[0,1[$, on a $\big(1-\frac tn\big)^n\le e^{-t}$ sur $[0,n]$, d'où
$$
|f_n(t)|\le e^{-t}t^{x-1}\quad\text{sur }]0,\infty[,
$$
fonction intégrable puisque $x>0$. Le théorème de convergence dominée donne
$$
\Gamma(z)=\lim_{n\to+\infty}\int_0^n\Big(1-\frac tn\Big)^nt^{z-1}\,dt .
$$

*Étape 2 : calcul de l'intégrale.* Le changement de variable $t=nu$ (avec $t^{z-1}=n^{z-1}u^{z-1}$, puissances de réels positifs) donne $\int_0^n(1-\frac tn)^nt^{z-1}dt=n^z\,I_n(z)$, où $I_n(z):=\int_0^1(1-u)^nu^{z-1}\,du$. Pour $n\ge1$, une intégration par parties (primitive $u^z/z$ de $u^{z-1}$) donne
$$
I_n(z)=\Big[(1-u)^n\frac{u^z}{z}\Big]_0^1+\frac nz\int_0^1(1-u)^{n-1}u^{z}\,du=\frac nz\,I_{n-1}(z+1),
$$
le terme de bord étant nul (en $1$ grâce à $(1-u)^n$, en $0$ car $|u^z|=u^x\to0$). Comme $I_0(z)=\int_0^1u^{z-1}du=\frac1z$, une récurrence sur $n$ (pour tous les $z$ de partie réelle $>0$ à la fois) donne
$$
I_n(z)=\frac nz\cdot\frac{(n-1)!}{(z+1)(z+2)\cdots(z+n)}=\frac{n!}{z(z+1)\cdots(z+n)},\qquad\text{donc}\qquad\Gamma(z)=\lim_{n\to+\infty}L_n(z),\quad L_n(z):=\frac{n^z\,n!}{z(z+1)\cdots(z+n)} .
$$

*Étape 3 : réécriture de $1/L_n$.* Pour tout $z\in\C\setminus(-\N)$ (et tout $n\ge1$), avec $H_n:=\sum_{k=1}^n\frac1k$ :
$$
\frac1{L_n(z)}=z\,n^{-z}\prod_{k=1}^n\frac{z+k}{k}=z\,n^{-z}\prod_{k=1}^n\Big(1+\frac zk\Big)=z\,e^{-z(\log n-H_n)}\prod_{k=1}^n\Big(1+\frac zk\Big)e^{-z/k},
$$
car $n^{-z}=e^{-z\log n}$ et $\prod_{k=1}^ne^{-z/k}=e^{-zH_n}$.

*Étape 4 : la constante d'Euler.* Soit $a_n:=H_n-\log n$. D'une part $a_n-a_{n+1}=\int_n^{n+1}\big(\frac1t-\frac1{n+1}\big)dt\ge0$ ; d'autre part $a_n\ge\sum_{k=1}^n\int_k^{k+1}\frac{dt}t-\log n=\log(n+1)-\log n>0$. La suite $(a_n)$ est décroissante et minorée, donc converge : $\gamma:=\lim a_n$ existe. Sur $\bar D(0,R)$, en utilisant $|e^w-1|\le e^{|w|}-1$,
$$
\big|e^{-z(\log n-H_n)}-e^{\gamma z}\big|=|e^{\gamma z}|\,\big|e^{z(a_n-\gamma)}-1\big|\le e^{\gamma R}\big(e^{R|a_n-\gamma|}-1\big)\xrightarrow[n\to\infty]{}0,
$$
d'où la convergence uniforme sur tout compact vers $e^{\gamma z}$.

*Étape 5 : le produit de Weierstraß.* Pour $k\in\N^\times$, posons $u_k(z):=(1+\frac zk)e^{-z/k}-1$. D'après [[ch03-exp-estimation]], il existe $C>0$ tel que $|(1+w)e^{-w}-1|\le C|w|^2$ pour $|w|\le R$ (explicitement : $\phi(w)=(1+w)e^{-w}$ vérifie $\phi(0)=1$, $\phi'(w)=-we^{-w}$, donc $\phi(w)-1=-w^2\int_0^1se^{-sw}ds$ et $C=e^R/2$ convient). Avec $w=z/k$, $|w|\le R$ pour $z\in\bar D(0,R)$, donc
$$
|u_k(z)|\le C\frac{R^2}{k^2}\qquad(z\in\bar D(0,R)).
$$
La série $\sum_{k\ge1}u_k$ converge donc normalement sur tout $\bar D(0,R)$, donc sur tout compact de $\C$ ([[ch03-convergence-normale-definition]]). Par le Théorème III.5.1 ([[ch03-produits-infinis]]), $\Pi(z):=\prod_{k=1}^\infty(1+u_k(z))=\prod_{k=1}^\infty(1+\frac zk)e^{-z/k}$ est la limite localement uniforme des produits partiels $\Pi_n$ et est holomorphe sur $\C$ ; ses zéros sont ceux des facteurs : $(1+\frac zk)e^{-z/k}=0\iff z=-k$, zéro simple, et chaque $-k$ n'annule que le $k$-ième facteur. Les zéros de $\Pi$ sont donc les entiers strictement négatifs, simples. Posons
$$
P(z):=z\,e^{\gamma z}\,\Pi(z),
$$
fonction entière dont les zéros sont les points de $-\N$, tous simples.

*Étape 6 : identification avec $\Gamma$ sur $\{\Re(z)>0\}$.* Par les étapes 3 à 5, pour tout $z\in\C\setminus(-\N)$, $\frac1{L_n(z)}=z\,e^{z a_n}\,\Pi_n(z)\to z\,e^{\gamma z}\,\Pi(z)=P(z)\ne0$. Si $\Re(z)>0$, l'étape 2 donne aussi $L_n(z)\to\Gamma(z)$ ; en passant à la limite dans $L_n(z)\cdot\frac1{L_n(z)}=1$, on obtient $\Gamma(z)P(z)=1$. (*Le poly passe directement à l'inverse dans la formule de Gauss ; cet argument justifie au passage que $\Gamma(z)\ne0$.*) Donc, pour $\Re(z)>0$,
$$
\frac1{\Gamma(z)}=\lim_{n\to\infty}z\,n^{-z}\prod_{k=1}^n\Big(1+\frac zk\Big)=z\,e^{\gamma z}\prod_{k=1}^\infty\Big(1+\frac zk\Big)e^{-z/k} .
$$

*Étape 7 : prolongement.* La fonction $1/P$ est holomorphe sur $\C\setminus(-\N)$ (où $P\ne0$) et a en chaque point de $-\N$ un pôle simple (inverse d'un zéro simple, [[ch02-pole-meromorphe-def]]) : elle est méromorphe sur $\C$. Elle coïncide avec $\Gamma$ sur $\{\Re(z)>0\}$. L'ouvert $\C\setminus(-\N)$ est connexe, donc, par le principe du prolongement analytique ([[ch01-prolongement-analytique]]), $1/P$ est l'unique prolongement holomorphe de $\Gamma$ à $\C\setminus(-\N)$ ; c'est celui de [[ch03-gamma-definition-prolongement]]. Enfin, $z\mapsto\Gamma(z+1)-z\Gamma(z)$ est holomorphe sur $\C\setminus(-\N)$ (si $z\notin-\N$, alors $z+1\notin-\N$) et nulle sur $\{\Re(z)>0\}$, donc nulle sur $\C\setminus(-\N)$ : l'équation fonctionnelle reste valide. Comme $L_n(z)=1/(z e^{za_n}\Pi_n(z))\to1/P(z)=\Gamma(z)$ pour tout $z\notin-\N$, la formule de Gauss vaut aussi sur $\C\setminus(-\N)$. $\square$

## Preuve à trous

Pour $\Re(z)=x>0$, avec $f_n(t)=(1-\frac tn)^nt^{z-1}\mathbf 1_{[0,n]}$, on a $f_n\to e^{-t}t^{z-1}$ et <trou indice="log(1−u) ≤ −u">$|f_n(t)|\le e^{-t}t^{x-1}$, intégrable</trou>, donc par convergence dominée $\Gamma(z)=\lim\int_0^n(1-\frac tn)^nt^{z-1}dt$. Avec $t=nu$ et $n$ intégrations par parties,
<trou indice="relation de récurrence I_n(z) = (n/z) I_{n−1}(z+1)">$\int_0^n(1-\frac tn)^nt^{z-1}dt=n^z\int_0^1(1-u)^nu^{z-1}du=\dfrac{n^z\,n!}{z(z+1)\cdots(z+n)}$</trou>.

L'inverse s'écrit $z\,n^{-z}\prod_{k\le n}(1+\frac zk)=z\,e^{z(H_n-\log n)}\prod_{k\le n}(1+\frac zk)e^{-z/k}$, et $H_n-\log n\to\gamma$. Pour le produit, on pose $u_k(z)=(1+\frac zk)e^{-z/k}-1$ et on utilise <trou indice="taille de (1+w)e^{−w} − 1 près de 0">$|(1+w)e^{-w}-1|\le C|w|^2$ sur $\bar D(0,R)$, d'où $|u_k(z)|\le CR^2/k^2$</trou> : $\sum u_k$ converge normalement sur tout compact et, par le Théorème III.5.1, $\Pi=\prod(1+\frac zk)e^{-z/k}$ est entière, de zéros $-1,-2,\dots$ simples.

Donc $\frac1{L_n(z)}\to P(z)=z\,e^{\gamma z}\Pi(z)$ et, pour $\Re(z)>0$, <trou indice="passer à la limite dans L_n · (1/L_n) = 1">$\Gamma(z)P(z)=1$</trou>. Enfin $1/P$ est méromorphe sur $\C$, à pôles simples en $-\N$, égale à $\Gamma$ sur $\{\Re(z)>0\}$ : par <trou>prolongement analytique sur l'ouvert connexe $\C\setminus(-\N)$</trou>, c'est le prolongement de $\Gamma$, et $\Gamma(z+1)=z\Gamma(z)$ y reste vraie. $\square$

## Exemples

* **Contrôle en $z=1$.** $L_n(1)=\frac{n\cdot n!}{1\cdot2\cdots(n+1)}=\frac{n}{n+1}\to1=\Gamma(1)$. Et $L_n(2)=\frac{n^2\,n!}{2\cdot3\cdots(n+2)}=\frac{n^2}{(n+1)(n+2)}\to1=\Gamma(2)$.
* **Formule des compléments (Exercice III.7.7).** Pour $z\notin\Z$, en multipliant les produits partiels (les facteurs $e^{\pm\gamma z}$ et $e^{\mp z/k}$ se compensent) :
$$
\frac1{\Gamma(z)\Gamma(-z)}=-z^2\prod_{k\ge1}\Big(1+\frac zk\Big)\Big(1-\frac zk\Big)=-z^2\prod_{k\ge1}\Big(1-\frac{z^2}{k^2}\Big)=-\frac{z\sin(\pi z)}{\pi}
$$
par le produit du sinus ([[ch03-produit-sinus]]). Comme $\Gamma(1-z)=-z\Gamma(-z)$ (équation fonctionnelle en $-z$), $\Gamma(z)\Gamma(1-z)=-z\Gamma(z)\Gamma(-z)=\dfrac{\pi}{\sin(\pi z)}$. En $z=\frac12$ : $\Gamma(\frac12)^2=\pi$ et, $\Gamma(\frac12)=\int_0^\infty e^{-t}t^{-1/2}dt>0$, donc $\Gamma(\frac12)=\sqrt\pi$, d'où l'intégrale de Gauss $\int_{\R}e^{-x^2}dx=\Gamma(\frac12)=\sqrt\pi$.
* **$\Gamma'(1)=-\gamma$.** La dérivée logarithmique du Théorème III.5.1 appliquée à $P$ donne, pour $z\notin-\N$, $\frac{P'(z)}{P(z)}=\frac1z+\gamma+\sum_{k\ge1}\Big(\frac{1}{z+k}-\frac1k\Big)$ (car $\frac{g_k'}{g_k}=\frac{1/k}{1+z/k}-\frac1k$ pour $g_k=(1+\frac zk)e^{-z/k}$). Comme $\Gamma=1/P$, $\frac{\Gamma'}{\Gamma}=-\frac{P'}{P}$ ; en $z=1$, la somme télescopique $\sum_{k\ge1}(\frac1{k+1}-\frac1k)=-1$ donne $\frac{\Gamma'(1)}{\Gamma(1)}=-(1+\gamma-1)=-\gamma$, soit $\int_0^\infty e^{-t}\ln t\,dt=\Gamma'(1)=-\gamma$ (via la formule $\Gamma'(z)=\int_0^\infty(\ln t)t^{z-1}e^{-t}dt$ de l'Exemple I.9.2, [[ch01-fonction-gamma]]).

## Pièges

* > ⚠️ Sans les facteurs $e^{-z/k}$, le produit $\prod(1+\frac zk)$ **ne converge pas** : ne jamais écrire « $1/\Gamma(z)=z\prod_{k\ge1}(1+z/k)$ ». Le bon couple est soit $n^{-z}\prod_{k\le n}(1+\frac zk)$ (limite), soit $e^{\gamma z}\prod(1+\frac zk)e^{-z/k}$.
* Le signe dans l'exponentielle : $\frac1{\Gamma(z)}=z\,e^{+\gamma z}\prod(1+\frac zk)e^{-z/k}$, et $\Gamma(z)=\frac{e^{-\gamma z}}{z}\prod(1+\frac zk)^{-1}e^{z/k}$ ; vérifier par exemple avec $\Gamma'(1)=-\gamma<0$.
* $\gamma=\lim(\sum_{k\le n}\frac1k-\log n)\approx0{,}5772$, constante **positive** ; ne pas la confondre avec un chemin $\gamma$ (notation des chapitres I-II).
* Pour passer de $\Gamma=\lim L_n$ à $\frac1\Gamma=\lim\frac1{L_n}$, il faut savoir que $\Gamma(z)\ne0$ ou, comme ici, que $\lim\frac1{L_n}$ existe et est finie.
* La formule produit montre que $1/\Gamma$ est **entière** : $\Gamma$ ne s'annule jamais, et ses pôles $0,-1,-2,\dots$ sont simples.
