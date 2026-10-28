---
id: ex-ch01-interpolation-zeros-isoles
type: exercise
chapters: [1]
title: Peut-on imposer les valeurs f(1/n) ? Zéros isolés et prolongement
source: "Classique (exercices standard sur le prolongement analytique, cf. Cartan, Théorie élémentaire des fonctions analytiques, ch. I et Stein–Shakarchi, ch. 2 ; adapté)"
difficulty: 2
time: 25
tools: [ch01-prolongement-analytique, ch01-zeros-isoles, ch01-def-multiplicite-zero, ch01-def-point-accumulation, ch01-polynomes-fractions-rationnelles, ch01-exp-trigo-hyperboliques]
---
## Énoncé

On note $D=D(0,1)$ le disque unité ouvert.

1. Pour chacune des conditions suivantes, dire s'il existe une fonction $f$ holomorphe sur $D$ la vérifiant pour **tout entier $n\ge2$**, et, si oui, les déterminer toutes.
   * (a) $f(1/n)=\dfrac{1}{n+1}$ ;
   * (b) $f(1/n)=\dfrac{(-1)^n}{n}$ ;
   * (c) $f(1/n)=f(-1/n)=\dfrac{1}{n^2}$ ;
   * (d) $|f(1/n)|\le e^{-n}$ ;
   * (e) $f(1/n)=\dfrac{1}{\ln n}$.
2. Montrer en revanche qu'il existe une fonction $g$ holomorphe sur $\C^\times=\C\setminus\{0\}$ telle que $g(1/n)=\dfrac{(-1)^n}{n}$ pour tout $n\ge2$. Quelle hypothèse du résultat utilisé en 1 (b) n'est plus satisfaite ?

## Indices

### Indice 1
Toutes les suites de points $1/n$ s'accumulent en $0$, qui est **dans** $D$. Un résultat d'unicité du cours dit alors qu'une fonction holomorphe est déterminée par ses valeurs en ces points. Pour (d) et (e), il n'y a pas de candidat évident : regarder le comportement de $f$ près de $0$.

### Indice 2
Principe du prolongement analytique : deux fonctions holomorphes sur un ouvert **connexe** $\Omega$ qui coïncident sur une partie ayant un point d'accumulation **dans $\Omega$** coïncident partout. Pour (a) et (c), deviner une fonction explicite $\varphi$ qui convient et appliquer ce principe à $f$ et $\varphi$. Pour (b), appliquer ce principe deux fois, sur les $n$ pairs et sur les $n$ impairs.

### Indice 3
Pour (d) et (e) : on a $f(0)=\lim f(1/n)=0$. Si $f\not\equiv0$, écrire $f(z)=z^mh(z)$ près de $0$ avec $m\ge1$ et $h(0)\neq0$, puis comparer $|h(1/n)|=n^m|f(1/n)|$ à $|h(0)|$.

## Corrigé

**Outil.** $D$ est un ouvert **connexe** (convexe). Le principe du prolongement analytique (poly, Corollaire I.11.6, p. 28, [[ch01-prolongement-analytique]]) affirme : si $f,\varphi\in\Hol(D)$ coïncident sur une partie $X\subset D$ ayant un point d'accumulation dans $D$ ([[ch01-def-point-accumulation]]), alors $f=\varphi$ sur $D$. Toutes les parties utilisées ci-dessous ($\{1/n : n\ge2\}$, $\{1/(2k) : k\ge1\}$, $\{1/(2k+1): k\ge1\}$) sont contenues dans $D$ et ont $0\in D$ pour point d'accumulation : tout disque $D(0,\eps)$ contient $1/n\neq0$ pour $n$ grand.

**1. (a)** On remarque que $\frac{1}{n+1}=\frac{1/n}{1+1/n}$. La fraction rationnelle $\varphi(z)=\frac{z}{1+z}$ a son unique pôle en $-1\notin D$, donc $\varphi\in\Hol(D)$ ([[ch01-polynomes-fractions-rationnelles]]) et $\varphi(1/n)=\frac{1}{n+1}$ : **une solution existe.** Si $f$ est une solution quelconque, $f$ et $\varphi$ coïncident sur $\{1/n: n\ge2\}$, donc $f=\varphi$ sur $D$. **L'unique solution est $f(z)=\dfrac{z}{1+z}$.**

**(b)** Supposons qu'une telle $f$ existe. Pour $n=2k$ pair, $f(1/(2k))=1/(2k)$ : $f$ coïncide avec $z\mapsto z$ sur $\{1/(2k):k\ge1\}$, donc $f(z)=z$ sur $D$. Pour $n=2k+1$ impair, $f(1/(2k+1))=-1/(2k+1)$ : $f$ coïncide avec $z\mapsto-z$ sur $\{1/(2k+1):k\ge1\}$, donc $f(z)=-z$ sur $D$. Alors $z=-z$ pour tout $z\in D$, absurde (prendre $z=\frac12$). **Aucune solution.**

**(c)** La fonction $\varphi(z)=z^2$ convient : $\varphi(\pm1/n)=1/n^2$. Si $f$ est une solution, elle coïncide avec $\varphi$ sur $\{1/n:n\ge2\}$, donc $f=\varphi$ ; réciproquement $\varphi$ vérifie aussi la condition en $-1/n$. **L'unique solution est $f(z)=z^2$.** (Les valeurs en $-1/n$ étaient « imposées gratuitement » : elles sont compatibles avec celles en $1/n$, ce qui n'était pas garanti — avec $f(-1/n)=1/n^3$ il n'y aurait aucune solution, puisque $f=z^2$ donne $f(-1/n)=1/n^2$.)

**(d)** La fonction nulle convient. Montrons que c'est la seule. Soit $f$ une solution ; $f$ est continue en $0$ et $|f(1/n)|\le e^{-n}\to0$, donc $f(0)=0$. Supposons $f\not\equiv0$. Comme $D$ est connexe, la définition I.11.2 (poly, p. 27, [[ch01-def-multiplicite-zero]]) donne $m\ge1$, $r>0$ et $h$ holomorphe sur $D(0,r)$ avec $h(0)\neq0$ et $f(z)=z^mh(z)$ sur $D(0,r)$. Pour $n$ assez grand ($1/n<r$),
$$
|h(1/n)|=n^m|f(1/n)|\le n^me^{-n}\xrightarrow[n\to\infty]{}0 .
$$
Par continuité de $h$ en $0$, $h(0)=\lim h(1/n)=0$ : contradiction. **L'unique solution est $f\equiv0$.**

**(e)** Supposons qu'une solution $f$ existe. Comme en (d), $f(0)=\lim_n\frac1{\ln n}=0$, et $f\not\equiv0$ (car $f(1/2)=1/\ln2\neq0$). On écrit $f(z)=z^mh(z)$ sur $D(0,r)$ avec $m\ge1$, $h(0)\neq0$. Pour $n$ grand,
$$
h(1/n)=n^mf(1/n)=\frac{n^m}{\ln n}\xrightarrow[n\to\infty]{}+\infty ,
$$
car $m\ge1$. Mais $h$ est continue en $0$, donc $h(1/n)\to h(0)\in\C$ : contradiction. **Aucune solution.** (Moralité : une fonction holomorphe qui s'annule en $0$ y tend vers $0$ au moins « comme $|z|$ », alors que $1/\ln n$ tend vers $0$ beaucoup plus lentement que $1/n$.)

**2.** Posons $g(z)=z\cos(\pi/z)$ sur $\C^\times$. Elle est holomorphe sur $\C^\times$ comme produit et composée de fonctions holomorphes ($z\mapsto\pi/z$ est holomorphe sur $\C^\times$, $\cos$ est entière : [[ch01-exp-trigo-hyperboliques]], [[ch01-stabilite-operations]]). Et
$$
g(1/n)=\frac1n\cos(n\pi)=\frac{(-1)^n}{n}.
$$
Le raisonnement de 1 (b) échoue car l'ensemble $\{1/(2k)\}$ n'a **aucun point d'accumulation dans $\C^\times$** : son seul point d'accumulation dans $\C$ est $0$, qui n'appartient pas à l'ouvert de définition. Les deux fonctions $g$ et $z\mapsto z$ coïncident sur $\{1/(2k)\}$ sans être égales, et cela ne contredit pas le corollaire I.11.6. (De même, $\sin(\pi/z)$ s'annule en tous les $1/n$ sans être nulle sur $\C^\times$.)

## Pièges et variantes

* Le point d'accumulation doit être **dans l'ouvert** : c'est toute la différence entre 1 (b) et 2.
* La connexité de l'ouvert est indispensable : sur $\Omega=D(0,1)\cup D(3,1)$, la fonction égale à $z$ sur $D(0,1)$ et à $0$ sur $D(3,1)$ est holomorphe, coïncide avec $z\mapsto z$ sur $\{1/n\}$, sans lui être égale.
* En (d), il ne suffit pas de dire « $f(1/n)\to0$ donc $f$ a une infinité de zéros » : $f(1/n)$ n'est **pas** nul a priori. C'est la vitesse de décroissance qui compte : avec seulement $|f(1/n)|\le 1/n^2$, $f(z)=z^2$ convient, et plus généralement toute $f=z^2h$ avec $|h|\le1$ sur $D$.
* Variante : existe-t-il $f\in\Hol(D)$ avec $f(1/n)=f(-1/n)=1/n^3$ ? Non : $f$ coïnciderait avec $z^3$ sur les $1/n$, donc $f(-1/n)=-1/n^3$.
* Variante (plus fine) : $f\in\Hol(D)$ avec $f'(1/n)=0$ pour tout $n\ge2$ ; alors $f'\equiv0$, donc $f$ est constante ($D$ connexe).
