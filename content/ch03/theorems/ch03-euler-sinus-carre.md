---
id: ch03-euler-sinus-carre
type: proposition
chapter: 3
title: "Formule d'Euler (1740) : $\pi^2/\sin^2(\pi z)=\sum_{n\in\Z}1/(z-n)^2$"
ref: Exemple III.6.1
page: 69
importance: 2
depends: [ch02-laurent-developpement, ch03-weierstrass, ch01-liouville, ch02-pole-meromorphe-def, ch02-singularite-effacable-riemann, ch01-exp-trigo-hyperboliques]
tags: [euler, sinus, series-de-fonctions, meromorphe, liouville, parties-polaires]
---
## Intuition

> 💡 Une fonction méromorphe est (presque) déterminée par ses **pôles et parties singulières** : si deux fonctions méromorphes sur $\C$ ont les mêmes pôles avec les mêmes parties singulières, leur différence est **entière** ; si de plus cette différence est bornée, elle est constante par Liouville.

Ici $\pi^2/\sin^2(\pi z)$ a un pôle double en chaque entier $n$, de partie singulière $1/(z-n)^2$. La somme $\sum_n 1/(z-n)^2$ a exactement les mêmes pôles et parties singulières. Les deux tendent vers $0$ quand on monte verticalement ($|\Im z|\to\infty$), et sont $1$-périodiques : leur différence est entière, bornée, nulle à l'infini, donc nulle.

Rappels : une fonction **méromorphe** sur $\C$ est holomorphe hors d'un ensemble localement fini de **pôles** ([[ch02-pole-meromorphe-def]]) ; au voisinage d'un pôle $n$, elle admet un **développement de Laurent** $\sum_{k\ge-p}c_k(z-n)^k$, dont la **partie singulière** est $\sum_{k=-p}^{-1}c_k(z-n)^k$ ([[ch02-laurent-developpement]]). $\sin(\pi z)=\frac{e^{i\pi z}-e^{-i\pi z}}{2i}$ ([[ch01-exp-trigo-hyperboliques]]).

## Énoncé

**Proposition (poly, Exemple III.6.1 — Euler, 1740, p. 69).** Pour tout $z\in\C\setminus\Z$,
$$
\frac{\pi^2}{\sin^2(\pi z)}=\sum_{n\in\Z}\frac1{(z-n)^2}. \qquad\text{(III.6.1)}
$$
Plus précisément :
1. $g:z\mapsto\pi^2/\sin^2(\pi z)$ est méromorphe sur $\C$, $1$-périodique, ses pôles sont les entiers, et la partie singulière de $g$ en $n\in\Z$ est $1/(z-n)^2$ ;
2. pour tout $R>0$, la série $\sum_{|n|>R}1/(z-n)^2$ converge normalement sur $\bar D(0,R)$, de sorte que $f:=\sum_{n\in\Z}1/(z-n)^2$ est méromorphe sur $\C$, de pôles les entiers, avec les mêmes parties singulières ;
3. $h=g-f$ se prolonge en une fonction entière, bornée, nulle à l'infini dans la bande $B=\{0\le\Re(z)\le1\}$, donc $h=0$.

## Hypothèses

### H1 — $z\in\C\setminus\Z$

**Rôle.** Les deux membres ont un pôle (double) en chaque entier : l'égalité est une égalité de fonctions méromorphes, valable ponctuellement hors des pôles.

**Si on la retire.** En $z=n\in\Z$, les deux membres valent « $+\infty$ » : ni $\pi^2/\sin^2(\pi n)$ ni le terme $1/(n-n)^2$ ne sont définis. En revanche, on peut **soustraire** la partie singulière : $\dfrac{\pi^2}{\sin^2(\pi z)}-\dfrac1{z^2}=\sum_{n\ne0}\dfrac1{(z-n)^2}$ est vraie aussi en $z=0$ (prolongement par continuité), ce qui donne $\pi^2/3=2\sum_{n\ge1}1/n^2$ (voir Exemples).

### H2 — Convergence normale sur les compacts de la série des parties singulières

**Rôle.** C'est elle qui fait de $f$ une fonction méromorphe (Weierstraß, [[ch03-weierstrass]]), et qui permet de passer à la limite terme à terme quand $|\Im z|\to\infty$ dans $B$.

**Si on la retire.** La méthode tombe en panne pour des pôles simples : pour $\pi\cot(\pi z)$ (pôles simples de résidu $1$), la série « naïve » $\sum_{n\in\Z}\frac1{z-n}$ des parties singulières diverge (comparer avec la série harmonique : $\frac1{z-n}\sim-\frac1n$), et il faut ajouter des termes correcteurs $+\frac1n$ ([[ch03-cotangente]]).

## Idée de la preuve

Même périodicité, mêmes pôles, mêmes parties singulières $\Rightarrow$ $h=g-f$ est entière et $1$-périodique. Sur la bande $B$, $g\to0$ (car $2|\sin^2(\pi z)|=\cosh(2\pi\Im z)-\cos(2\pi\Re z)$) et $f\to0$ (convergence uniforme sur $B$) quand $|\Im z|\to\infty$ : $h$ est bornée, donc constante (Liouville), donc nulle.

## Preuve

**Étape 1 : les pôles de $g$.** $\sin(\pi z)$ est entière et s'annule exactement sur $\Z$, avec des zéros simples (dérivée $\pi\cos(\pi n)=\pm\pi\ne0$) ; donc $g$ est méromorphe sur $\C$, de pôles les entiers (doubles). Elle est $1$-périodique ($\sin^2(\pi(z+1))=(-\sin(\pi z))^2$), donc l'étude locale des pôles se ramène à $0$. Comme $\sin(\pi z)=\pi z\big(1-\frac{\pi^2z^2}6+\cdots\big)$, on écrit $\sin^2(\pi z)=\pi^2z^2\big(1+z^2g_1(z)\big)$ avec $g_1$ entière, d'où
$$
g(z)=\frac{\pi^2}{\sin^2(\pi z)}=\frac1{z^2\,(1+z^2g_1(z))}.
$$
La fonction $(1+z^2g_1(z))^{-1}$ est holomorphe au voisinage de $0$ et vaut $1+\sum_{n\ge2}c_nz^n$ (pas de terme en $z$ : son développement commence par $1-z^2g_1(0)+\cdots$). Le développement de Laurent de $g$ en $0$ est donc $\dfrac1{z^2}+\sum_{n\ge0}c_{n+2}z^n$ ([[ch02-laurent-developpement]]) : la partie singulière en $0$ est $1/z^2$ (pas de terme en $1/z$). Par périodicité, la partie singulière en $n\in\Z$ est $\dfrac1{(z-n)^2}$.

**Étape 2 : la série $f$.** Fixons $R>0$. Pour $n\in\Z$ avec $|n|>R$, $f_n:z\mapsto\frac1{(z-n)^2}$ est holomorphe au voisinage de $\bar D(0,R)$ et, comme $|z-n|\ge|n|-|z|\ge|n|-R$,
$$
\norm{f_n}_{\infty,\bar D(0,R)}\le\frac1{(|n|-R)^2}.
$$
La série $\sum_{|n|>R}f_n$ est donc normalement convergente sur $\bar D(0,R)$ et y définit une fonction holomorphe sur $D(0,R)$ par le théorème de Weierstraß ([[ch03-weierstrass]]). En ajoutant les termes en nombre fini $|n|\le R$, $\sum_{n\in\Z}f_n$ définit une fonction méromorphe sur $D(0,R)$ de pôles les $n\in\Z$, $|n|\le R$, de partie singulière $1/(z-n)^2$ en $n$ (les autres termes sont holomorphes près de $n$). Ceci pour tout $R>0$ : $f=\sum_{n\in\Z}f_n$ est méromorphe sur $\C$, de pôles les entiers, et $1$-périodique ($f(z+1)=\sum_n\frac1{(z-(n-1))^2}=f(z)$, par réindexation d'une série absolument convergente).

**Étape 3 : $h=g-f$ est entière.** $h$ est méromorphe sur $\C$, de pôles éventuels les entiers ; en chaque $n$, les parties singulières de $g$ et $f$ se compensent, donc la partie singulière de $h$ est nulle : $h$ se prolonge en une fonction holomorphe au voisinage de $n$ ([[ch02-singularite-effacable-riemann]]). Ainsi $h$ est entière, et $1$-périodique.

**Étape 4 : $f\to0$ dans la bande.** Soit $B=\{z\in\C:\Re(z)\in[0,1]\}$. Pour $z\in B$ et $n\in\Z\setminus\{-1,0,1\}$,
$$
|z-n|^2\ge|\Re(z)-n|^2\ge(|n|-|\Re(z)|)^2\ge(|n|-1)^2>0 .
$$
Comme $\sum_{n\notin\{-1,0,1\}}\frac1{(|n|-1)^2}$ converge, la série $\sum_{n\notin\{-1,0,1\}}f_n$ converge uniformément sur $B$ ; comme chaque $f_n(z)\to0$ quand $z\to\infty$ dans $B$ (i.e. $|\Im z|\to\infty$), on peut intervertir limite et somme (convergence uniforme) : la somme tend vers $0$. Les trois termes restants $f_{-1},f_0,f_1$ tendent aussi vers $0$. Donc $f(z)\to0$ quand $z\to\infty$ dans $B$.

**Étape 5 : $g\to0$ dans la bande.** Pour tout $z\in\C$, $\overline{\sin(\pi z)}=\sin(\pi\bar z)$, d'où, avec $2\sin a\sin b=\cos(a-b)-\cos(a+b)$,
$$
2|\sin^2(\pi z)|=2\sin(\pi z)\,\overline{\sin(\pi z)}=2\sin(\pi z)\sin(\pi\bar z)=\cos(\pi(z-\bar z))-\cos(\pi(z+\bar z))=\cosh(2\pi\Im(z))-\cos(2\pi\Re(z)),
$$
car $\cos(2i\pi y)=\cosh(2\pi y)$. Le terme $-\cos(2\pi\Re z)$ est borné et $\cosh(2\pi\Im z)\to+\infty$ quand $|\Im z|\to\infty$ : donc $g(z)=\pi^2/\sin^2(\pi z)\to0$ quand $z\to\infty$ dans $B$.

**Étape 6 : Liouville.** Par les étapes 4 et 5, $h(z)\to0$ quand $z\to\infty$ dans $B$ : il existe $A>0$ tel que $|h|\le1$ sur $B\cap\{|\Im z|\ge A\}$ ; sur le compact $B\cap\{|\Im z|\le A\}$, la fonction continue $h$ est bornée. Donc $h$ est bornée sur $B$, puis sur $\C$ par $1$-périodicité. Par le théorème de Liouville ([[ch01-liouville]]), $h$ est constante ; cette constante est $\lim_{z\in B\to\infty}h=0$. Donc $g=f$ sur $\C\setminus\Z$, ce qui est (III.6.1). $\square$

## Preuve à trous

$g=\pi^2/\sin^2(\pi z)$ est méromorphe, $1$-périodique, et en $0$ : $g(z)=\frac1{z^2(1+z^2g_1(z))}=$ <trou indice="développement de Laurent en 0 ; y a-t-il un terme en $1/z$ ?">$\frac1{z^2}+\sum_{n\ge0}c_{n+2}z^n$, donc partie singulière $1/(z-n)^2$ en chaque entier $n$</trou>. Pour $|n|>R$, sur $\bar D(0,R)$ : $\big|\frac1{(z-n)^2}\big|\le$ <trou>$\frac1{(|n|-R)^2}$</trou>, donc $f=\sum_n\frac1{(z-n)^2}$ est méromorphe sur $\C$ avec les mêmes parties singulières, et $h=g-f$ est <trou indice="parties singulières nulles">entière et $1$-périodique</trou>. Dans la bande $B=\{0\le\Re z\le1\}$, $f\to0$ (convergence uniforme sur $B$) et, grâce à l'identité <trou indice="calculer $2\sin(\pi z)\sin(\pi\bar z)$">$2|\sin^2(\pi z)|=\cosh(2\pi\Im z)-\cos(2\pi\Re z)$</trou>, $g\to0$ quand $|\Im z|\to\infty$. Donc $h$ est bornée sur $B$, donc sur $\C$, donc <trou indice="quel théorème pour une fonction entière bornée ?">constante par Liouville, et nulle car elle tend vers $0$</trou>. $\square$

## Exemples

* **$\zeta(2)=\pi^2/6$.** D'après l'étape 1, $g(z)-\frac1{z^2}=c_2+O(z^2)$ avec $c_2=\pi^2/3$ : en effet $\sin(\pi z)=\pi z\big(1-\frac{\pi^2z^2}6+O(z^4)\big)$ donne $\frac{\pi^2}{\sin^2(\pi z)}=\frac1{z^2}\big(1+\frac{\pi^2z^2}3+O(z^4)\big)$. Par (III.6.1), $g(z)-\frac1{z^2}=\sum_{n\ne0}\frac1{(z-n)^2}$, série qui converge uniformément au voisinage de $0$ ; en $z=0$ : $\frac{\pi^2}3=\sum_{n\ne0}\frac1{n^2}=2\sum_{n\ge1}\frac1{n^2}$, soit $\sum_{n\ge1}\frac1{n^2}=\frac{\pi^2}6$.
* **En $z=1/2$.** $\frac{\pi^2}{\sin^2(\pi/2)}=\pi^2$ et $\sum_{n\in\Z}\frac1{(1/2-n)^2}=4\sum_{n\in\Z}\frac1{(2n-1)^2}=8\sum_{k\ge1,\ k\text{ impair}}\frac1{k^2}$. D'où $\sum_{k\text{ impair}}\frac1{k^2}=\frac{\pi^2}8$, cohérent avec $\zeta(2)\big(1-\frac14\big)=\frac{\pi^2}6\cdot\frac34=\frac{\pi^2}8$.
* **En $z=1/4$.** $\sin^2(\pi/4)=\frac12$ donc $2\pi^2=\sum_n\frac{16}{(1-4n)^2}$, i.e. $\sum_{n\in\Z}\frac1{(4n-1)^2}=\frac{\pi^2}8$ (les $4n-1$, $n\in\Z$, décrivent au signe près tous les impairs une fois : on retrouve l'exemple précédent).

## Pièges

* > ⚠️ La méthode « mêmes parties singulières + Liouville » exige que la série des parties singulières **converge normalement sur les compacts** (après retrait d'un nombre fini de termes). Pour des pôles simples, il faut des termes correcteurs ([[ch03-cotangente]]).
* Liouville demande « bornée sur $\C$ » : on l'obtient ici par **périodicité** + contrôle sur une seule bande ; sans la périodicité, borner $h$ sur $B$ ne suffirait pas.
* Ne pas oublier de **fixer la constante** : Liouville donne $h$ constante ; c'est la limite $0$ dans la bande qui donne $h=0$.
* $|\sin(\pi z)|$ n'est **pas** borné sur $\C$ (contrairement au cas réel) : c'est précisément sa croissance en $\cosh(\pi\Im z)$ qui fait tendre $g$ vers $0$.
