---
id: ch02-meromorphes-corps
type: proposition
chapter: 2
title: $\mathcal M(\Omega)$ est un corps si $\Omega$ est connexe
ref: Proposition II.4.8
page: 45
importance: 2
depends: [ch02-meromorphes-operations, ch02-singularite-effacable-riemann, ch02-laurent-developpement, ch02-localement-fini-vs-isole-remarque, ch01-zeros-isoles, ch02-localement-fini-caracterisations, ch02-pole-meromorphe-def]
tags: [meromorphe, corps, inverse, connexe, zeros isoles, laurent]
---
## Intuition

> 💡 Les fonctions holomorphes se comportent comme les **entiers** : on peut les additionner et les multiplier, mais pas toujours les diviser ($1/z$ n'est pas holomorphe en $0$). Les fonctions méromorphes sont aux fonctions holomorphes ce que les **fractions** sont aux entiers : on s'autorise des pôles, et alors on peut inverser toute fonction non nulle. Exactement comme $\Q$ est le corps des fractions de $\Z$.

La seule obstruction est topologique : si $\Omega$ a deux morceaux disjoints, une fonction qui vaut $1$ sur l'un et $0$ sur l'autre n'est pas nulle mais ne peut pas être inversée (elle s'annule sur tout un ouvert). La **connexité** de $\Omega$ et le principe des zéros isolés ([[ch01-zeros-isoles]]) empêchent ce phénomène : une fonction méromorphe non nulle n'a que des zéros isolés, qui deviennent des pôles de son inverse.

Rappels : $\mathcal M(\Omega)$ = ensemble des fonctions méromorphes sur $\Omega$ ([[ch02-pole-meromorphe-def]]) ; c'est un anneau commutatif (stable par sommes et produits, [[ch02-meromorphes-operations]]) contenant les constantes. Un **corps** est un anneau commutatif, avec $1\neq0$, dans lequel tout élément non nul est inversible. Convention implicite du poly : on **identifie** deux fonctions méromorphes qui coïncident en dehors d'une partie localement finie (on prolonge toujours $f$ à ses fausses singularités, Remarque II.4.3) ; ainsi « $f\neq0$ » signifie « $f$ n'est pas identiquement nulle sur $\Omega\setminus P$ » et « $f\cdot\frac1f=1$ » s'entend hors d'une partie localement finie.

## Énoncé

**Proposition (poly, Proposition II.4.8, p. 45).** Si $\Omega$ est connexe, l'ensemble $\mathcal M(\Omega)$ est un corps (une extension de dimension infinie de $\C$).

Concrètement : si $\Omega$ est un ouvert connexe et si $f\in\mathcal M(\Omega)$ n'est pas identiquement nulle, alors $g=\dfrac1f$ est méromorphe sur $\Omega$.

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** Elle sert à garantir qu'une fonction méromorphe non identiquement nulle n'est identiquement nulle sur **aucun** disque (épointé) de $\Omega$ : c'est la version méromorphe du principe des zéros isolés ([[ch01-zeros-isoles]]). Sans cela, $1/f$ n'est défini nulle part sur certaines parties de $\Omega$.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ (deux disques disjoints, non connexe). Soit $f=\mathbf 1_{D(0,1)}$ (vaut $1$ sur $D(0,1)$, $0$ sur $D(3,1)$) : $f$ est holomorphe (localement constante), donc méromorphe, et non identiquement nulle. Mais $1/f$ n'est définie en aucun point de $D(3,1)$, et ne peut être méromorphe (l'ensemble des points où elle n'est pas holomorphe contiendrait $D(3,1)$, qui n'est pas localement fini). Pire : avec $g=\mathbf 1_{D(3,1)}=1-f$, on a $fg=0$ alors que $f\neq0$ et $g\neq0$ : $\mathcal M(\Omega)$ a des **diviseurs de zéro**, ce n'est pas un corps (dans un corps, $fg=0$ et $f\neq0$ entraînent $g=f^{-1}fg=0$).

## Idée de la preuve

Par les opérations ([[ch02-meromorphes-operations]]), $\mathcal M(\Omega)$ est un anneau commutatif ; reste à inverser $f\neq0$. Près de chaque point $z_0$, le développement de Laurent et la connexité donnent $f(z)=(z-z_0)^ku(z)$ avec $k\in\Z$ et $u$ holomorphe ne s'annulant pas près de $z_0$. Alors $\frac1f=(z-z_0)^{-k}\frac1u$ : c'est localement une fonction holomorphe ou une fonction à pôle, et les points exceptionnels forment une partie localement finie.

## Preuve

*Structure d'anneau.* D'après la Proposition II.4.5 ([[ch02-meromorphes-operations]]) et la Remarque II.4.4 ([[ch02-localement-fini-vs-isole-remarque]]), $\mathcal M(\Omega)$ est stable par combinaisons linéaires et par produits ; il contient les constantes (holomorphes). C'est donc un anneau commutatif unitaire et une $\C$-algèbre, avec $1\neq0$ ($\Omega\neq\emptyset$). Il s'agit de montrer que si $f\in\mathcal M(\Omega)$ est non identiquement nulle, alors $g=\frac1f$ est aussi méromorphe.

Soit $P$ la partie localement finie de la définition de $f$ : $f$ est holomorphe sur $\Omega\setminus P$ et vérifie (ii) en chaque point de $P$ ([[ch02-pole-meromorphe-def]]). Pour $z_0\in\Omega$, le développement de Laurent ([[ch02-laurent-developpement]]) donne $r(z_0)>0$ tel que $D(z_0,r(z_0))\cap P\subset\{z_0\}$ et
$$
f(z)=\sum_{n\ge-m}a_n(z_0)\,(z-z_0)^n\qquad\text{sur }D(z_0,r(z_0))^\times .
$$

*Étape 1 (où sert la connexité) : $f$ n'est identiquement nulle sur aucun disque épointé.* Soit $A$ l'ensemble des $z_0\in\Omega$ tels que tous les coefficients $a_n(z_0)$ soient nuls, c'est-à-dire tels que $f\equiv0$ sur un disque épointé $D(z_0,\rho)^\times$.
* $A$ est ouvert : si $f\equiv0$ sur $D(z_0,\rho)^\times$ et $z_1\in D(z_0,\rho)$, alors $f\equiv0$ sur un disque épointé centré en $z_1$ (contenu dans $D(z_0,\rho)$, privé éventuellement de $z_0$), et par unicité du développement de Laurent en $z_1$, $z_1\in A$.
* $\Omega\setminus A$ est ouvert : si $z_0\notin A$, soit $k:=\min\{n\,;\,a_n(z_0)\neq0\}\in\Z$. Comme dans la preuve de [[ch02-singularite-effacable-riemann]], $(z-z_0)^{-k}f(z)=u(z)$ sur $D(z_0,r(z_0))^\times$, où $u$ est la somme d'une série entière sur $D(z_0,r(z_0))$ avec $u(z_0)=a_k(z_0)\neq0$ ; par continuité $u$ ne s'annule pas sur un disque $D(z_0,\rho)$, donc $f$ ne s'annule en aucun point de $D(z_0,\rho)^\times$, et aucun point de $D(z_0,\rho)$ n'est dans $A$.

Comme $\Omega$ est connexe, $A=\emptyset$ ou $A=\Omega$. Si $A=\Omega$, $f$ est nulle au voisinage (épointé) de chaque point de $\Omega\setminus P$, donc nulle en chaque point de $\Omega\setminus P$ par continuité : $f$ serait identiquement nulle. Donc $A=\emptyset$. (Pour $f$ holomorphe, c'est exactement le principe des zéros isolés, [[ch01-zeros-isoles]], Théorème I.11.1, que le poly invoque.)

*Étape 2 : forme locale de $f$ et de $1/f$.* Soit $z_0\in\Omega$. D'après l'étape 1, $z_0\notin A$, donc il existe $k\in\Z$, $\rho>0$ et $u$ holomorphe sur $D(z_0,\rho)$ **ne s'annulant pas** tels que
$$
f(z)=(z-z_0)^k\,u(z)\qquad\text{sur }D(z_0,\rho)^\times .
$$
Alors $1/u$ est holomorphe sur $D(z_0,\rho)$ ([[ch01-stabilite-operations]]), et
$$
g(z)=\frac1{f(z)}=(z-z_0)^{-k}\,\frac{1}{u(z)}\qquad\text{sur }D(z_0,\rho)^\times .
$$
En particulier $g$ est holomorphe sur $D(z_0,\rho)^\times$ ; et en posant $m:=\max(k,1)\ge1$, la fonction $(z-z_0)^mg(z)=(z-z_0)^{m-k}/u(z)$ est bornée près de $z_0$ (car $m-k\ge0$ et $1/u$ est continue en $z_0$) : la condition (ii) est satisfaite en $z_0$. On reconnaît les trois cas du poly : si $k\ge1$ ($z_0$ zéro de $f$, d'ordre $k$), $z_0$ est un pôle d'ordre $k$ de $g$ (c'est le calcul de la Proposition II.4.5) ; si $k=0$, $g$ se prolonge holomorphiquement en $z_0$ ; si $k\le-1$ ($z_0$ pôle de $f$ d'ordre $-k$), $g=(z-z_0)^{-k}/u$ se prolonge holomorphiquement avec un zéro d'ordre $-k$.

*Étape 3 : $g$ est méromorphe.* Soit $P_1:=P\cup\mathcal Z$, où $\mathcal Z$ est l'ensemble des zéros de $f$ dans $\Omega\setminus P$. En dehors de $P_1$, $f$ est holomorphe et ne s'annule pas, donc $g$ y est holomorphe. $P_1$ est localement fini : d'après l'étape 2, chaque $z_0\in\Omega$ a un voisinage $D(z_0,\rho)$ tel que $P_1\cap D(z_0,\rho)\subset\{z_0\}$ (sur $D(z_0,\rho)^\times$, $f$ est holomorphe et ne s'annule pas). En particulier $P_1$ est fini sur tout compact (critère de [[ch02-localement-fini-caracterisations]]). Enfin chaque point de $P_1$ vérifie (ii) pour $g$ (étape 2). Donc $g\in\mathcal M(\Omega)$, et $fg=1$ hors de $P_1$. $\square$

*Variante du poly.* Le poly raisonne ainsi : hors de $P_1=P\cup\mathcal Z(f,\Omega)$ (localement fini comme union de deux parties localement finies), $g$ est holomorphe ; près d'un zéro de $f$ (où $f$ est holomorphe), $z_0$ est un pôle de $g$ (Proposition II.4.5) ; près d'un point $z_0\in P$, $h(z)=(z-z_0)^{n_0}f(z)$ est bornée pour $n_0$ assez grand, donc holomorphe en $z_0$ par le théorème de Riemann ([[ch02-singularite-effacable-riemann]]), son inverse est méromorphe par II.4.5, et le développement de Laurent de $\frac1h$ donne celui de $g=(z-z_0)^{n_0}\frac1h$. L'étape 1 ci-dessus explicite le point où la connexité est utilisée (que $f$, et $h$, ne soient identiquement nulles sur aucun disque, ce qu'exige II.4.5 et ce qui rend $\mathcal Z(f,\Omega)$ localement fini).

*Dimension infinie.* Les monômes $1,z,z^2,\dots$ sont dans $\mathcal M(\Omega)$ et sont $\C$-linéairement indépendants : une combinaison $\sum_{j\le N}c_jz^j$ nulle sur l'ouvert non vide $\Omega$ (qui est infini) est un polynôme ayant une infinité de racines, donc nul. Ainsi $\mathcal M(\Omega)$ est un $\C$-espace vectoriel de dimension infinie, et le corps $\mathcal M(\Omega)$ contient $\C$ (les constantes) : c'est une extension de dimension infinie de $\C$.

## Preuve à trous

$\mathcal M(\Omega)$ est un anneau commutatif unitaire (Proposition II.4.5) ; soit $f\in\mathcal M(\Omega)$ non identiquement nulle. Soit $A$ l'ensemble des $z_0\in\Omega$ où tous les coefficients de Laurent de $f$ sont nuls. Alors <trou indice="ouvert et fermé dans un connexe">$A$ est ouvert, $\Omega\setminus A$ est ouvert, donc par connexité $A=\emptyset$ ou $A=\Omega$ ; et $A=\Omega$ forcerait $f\equiv0$</trou>. Donc en tout $z_0\in\Omega$, avec $k=\min\{n\,;\,a_n\neq0\}\in\Z$, <trou indice="factoriser la plus petite puissance présente dans le développement de Laurent">$f(z)=(z-z_0)^ku(z)$ sur $D(z_0,\rho)^\times$ avec $u$ holomorphe sur $D(z_0,\rho)$ et ne s'y annulant pas</trou>. D'où $\frac1f=(z-z_0)^{-k}\frac1u$ sur $D(z_0,\rho)^\times$ : $\frac1f$ y est holomorphe et <trou indice="quelle puissance de (z−z0) rend 1/f bornée ?">$(z-z_0)^{\max(k,1)}\frac1f$ est bornée près de $z_0$, c'est-à-dire que la condition (ii) est satisfaite</trou>. L'ensemble $P_1$ des points où $\frac1f$ n'est pas holomorphe vérifie $P_1\cap D(z_0,\rho)\subset\{z_0\}$ pour tout $z_0$ : il est localement fini, et $\frac1f\in\mathcal M(\Omega)$. $\square$

## Exemples

* **Inverser une fonction à pôle.** Sur $\Omega=\C$, $f(z)=\dfrac{z^2}{\sin z}$ est méromorphe (pôles simples en $k\pi$, $k\neq0$ ; fausse singularité en $0$ où $f$ se prolonge avec un zéro simple, car $\frac{z^2}{\sin z}=z\cdot\frac{z}{\sin z}$ et $\frac{z}{\sin z}\to1$). Son inverse $\dfrac{\sin z}{z^2}$ est méromorphe : pôle simple en $0$ (développement $\frac1z-\frac z6+\dots$) et zéros simples en $k\pi$, $k\neq0$. Les rôles de pôle et de zéro s'échangent, ordres compris.
* **Le corps des fractions rationnelles.** $\C(z)\subset\mathcal M(\C)$ : toute fraction $P/Q$ ($Q\neq0$) est méromorphe sur $\C$. Le corps $\mathcal M(\C)$ est strictement plus gros : $\tan z$ (une infinité de pôles, alors qu'une fraction rationnelle n'en a qu'un nombre fini) ou $e^z$ (entière non polynomiale, alors qu'une fraction rationnelle sans pôle est un polynôme) n'y sont pas rationnelles.
* **Dérivée logarithmique.** Si $\Omega$ est connexe et $g\in\mathcal M(\Omega)$ est non nulle, $g'$ est méromorphe (dériver terme à terme le développement de Laurent) et donc $\dfrac{g'}{g}=g'\cdot\dfrac1g\in\mathcal M(\Omega)$ : c'est l'objet intégré dans le principe de l'argument ([[ch02-principe-argument]]). De même $h=f/g$ dans le théorème de Rouché ([[ch02-rouche]]).

## Pièges

* > ⚠️ La connexité de $\Omega$ est indispensable : sur un ouvert non connexe, $\mathcal M(\Omega)$ a des diviseurs de zéro ($\mathbf 1_{\Omega_1}\cdot\mathbf 1_{\Omega_2}=0$).
* « Non identiquement nulle » ne veut pas dire « ne s'annulant pas » : $1/f$ a des **pôles** aux zéros de $f$, c'est tout l'intérêt de travailler dans $\mathcal M(\Omega)$ plutôt que dans $\Hol(\Omega)$.
* L'égalité $f\cdot\frac1f=1$ n'a lieu qu'en dehors d'une partie localement finie (zéros et pôles), puis partout après prolongement aux fausses singularités : c'est la convention d'identification implicite du poly.
* $\Hol(\Omega)$ n'est **pas** un corps ($z$ n'est pas inversible dans $\Hol(\C)$) ; c'est seulement un anneau **intègre** quand $\Omega$ est connexe ([[ch01-hol-integre]]), et $\mathcal M(\Omega)$ en est le corps des fractions (ce dernier point, vrai, est un théorème difficile de Weierstrass, hors programme).
