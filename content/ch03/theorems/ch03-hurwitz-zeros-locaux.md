---
id: ch03-hurwitz-zeros-locaux
type: proposition
chapter: 3
title: "Forme forte de Hurwitz : convergence du nombre de zéros dans un petit disque"
ref: Remarque III.2.3
page: 63
importance: 2
depends: [ch03-hurwitz, ch01-zeros-isoles, ch03-weierstrass, ch02-principe-argument, ch02-principe-argument-domaine, ch03-convergence-uniforme-compacts, ch03-cauchy-locale-equivaut-convergence, ch01-longueur-majoration-integrale, ch01-def-multiplicite-zero]
tags: [hurwitz, zeros, multiplicite, principe-argument, convergence-localement-uniforme, perturbation]
---
## Intuition

> 💡 Les zéros d'une fonction holomorphe sont **stables par petite perturbation** : si $f_n\to f$ localement uniformément et si $z$ est un zéro d'ordre $m$ de $f$, alors, pour $n$ grand, $f_n$ a **exactement $m$ zéros** (comptés avec multiplicité) près de $z$ — ni plus, ni moins. Un zéro double de $f$ peut se « dédoubler » en deux zéros simples de $f_n$, mais aucun zéro ne naît ni ne disparaît.

La raison est la même que pour [[ch03-hurwitz]] : le nombre de zéros dans un disque est donné par une **intégrale sur le cercle bord** (principe de l'argument, [[ch02-principe-argument-domaine]]), cette intégrale dépend continûment de la fonction quand celle-ci ne s'annule pas sur le cercle, et une suite d'**entiers** qui converge finit par être constante.

Notations : $Z(g,D)$ désigne le nombre de zéros de $g$ dans le disque ouvert $D$, **comptés avec leur multiplicité** ([[ch01-def-multiplicite-zero]]) ; « $f\not\equiv0$ » signifie « $f$ n'est pas la fonction identiquement nulle » ; convergence localement uniforme : [[ch03-convergence-localement-uniforme]].

## Énoncé

**Proposition (poly, Remarque III.2.3, p. 63).** Soient $\Omega$ un ouvert connexe de $\C$ et $(f_n)_{n\in\N}$ une suite de fonctions holomorphes de $\Omega$ dans $\C$, localement uniformément convergente sur $\Omega$ et de limite $f$. On suppose $f\not\equiv0$ sur $\Omega$ (hypothèse implicite du poly : sinon $Z(f,D)$ n'a pas de sens). Alors, pour tout $z\in\Omega$, il existe $r>0$ tel que, si l'on pose $D:=D(z,r)$, la suite $Z(f_n,D)$ tend vers $Z(f,D)$ lorsque $n$ tend vers l'infini.

*Précision (contenue dans la preuve).* On peut prendre n'importe quel $r>0$ tel que $\bar D(z,r)\subset\Omega$ et que $f$ ne s'annule pas sur $\bar D(z,r)\setminus\{z\}$. Alors $Z(f,D)=m$, où $m\ge0$ est l'ordre de $z$ comme zéro de $f$ ($m=0$ si $f(z)\ne0$), et la suite d'entiers $Z(f_n,D)$ est **stationnaire** égale à $m$ : il existe $N$ tel que $Z(f_n,D)=m$ pour tout $n\ge N$.

## Hypothèses

### H1 — $\Omega$ connexe et $f\not\equiv0$

**Rôle.** Ensemble, elles permettent d'appliquer le principe des zéros isolés ([[ch01-zeros-isoles]]) : il existe un cercle $C(z,r)$ sur lequel $f$ ne s'annule pas, et $Z(f,D)$ est un entier fini. C'est le point de départ de toute la preuve.

**Si on la retire.**
* *$f\equiv0$* : $f_n(z)=z/n$ sur $\Omega=\C$ converge localement uniformément vers $f\equiv0$ (sur $\bar D(0,R)$, $|f_n|\le R/n$). Pour tout $r>0$, $Z(f_n,D(0,r))=1$ pour tout $n\ge1$, alors que $f$ s'annule en **tout** point de $D(0,r)$ : $Z(f,D)$ n'est pas un entier, l'énoncé n'a plus de sens. Avec $f_n=e^z/n$ on a au contraire $Z(f_n,D)=0$ : rien ne peut être dit.
* *$\Omega$ non connexe* : $\Omega=D(0,1)\cup D(3,1)$, $f_n=1/n$ sur $D(0,1)$ et $f_n=1$ sur $D(3,1)$. La limite vaut $0$ sur $D(0,1)$ et $1$ sur $D(3,1)$ : $f\not\equiv0$ sur $\Omega$, mais en $z=0$ on a $Z(f_n,D(0,r))=0$ pour tout $n$ et $f\equiv0$ sur $D(0,r)$. Ce qui compte vraiment est que $f\not\equiv0$ sur la composante connexe contenant $z$.

### H2 — les $f_n$ sont holomorphes

**Rôle.** Elle donne l'holomorphie de $f$, la convergence $f_n'\to f'$ (Weierstraß, [[ch03-weierstrass]]) et surtout le comptage des zéros par une intégrale (principe de l'argument), qui n'existe que pour des fonctions holomorphes (ou méromorphes).

**Si on la retire.** La notion même de multiplicité disparaît. Exemple : $f_n(z)=|z|^2+\frac1n$ (fonctions continues sur $\C$) n'a aucun zéro et converge uniformément vers $|z|^2$, qui s'annule en $0$ : le « nombre de zéros » saute de $0$ à $1$.

### H3 — convergence localement uniforme

**Rôle.** Elle assure la convergence **uniforme** de $f_n$ et de $f_n'$ sur le cercle compact $C(z,r)$, donc celle de $f_n'/f_n$ vers $f'/f$, ce qui permet de passer à la limite dans l'intégrale qui compte les zéros.

**Si on la retire.** Comme pour [[ch03-hurwitz]], avec la seule convergence simple la limite n'est même plus nécessairement holomorphe et la preuve s'effondre ; nous ne donnons pas de contre-exemple élémentaire au programme. Noter en revanche que seule la convergence uniforme **sur le cercle** $C(z,r)$ (avec celle des dérivées) est réellement utilisée.

## Idée de la preuve

On choisit un cercle $C(z,r)$ sans zéro de $f$ (zéros isolés). Sur ce cercle, $|f_n|$ est minoré uniformément pour $n$ grand et $f_n'/f_n\to f'/f$ uniformément, donc $Z(f_n,D)=\frac1{2i\pi}\int_{C(z,r)}\frac{f_n'}{f_n}\to\frac1{2i\pi}\int_{C(z,r)}\frac{f'}{f}=Z(f,D)$. C'est exactement la preuve du point 1 de Hurwitz, sans utiliser $Z(f_n,D)=0$.

## Preuve

Fixons $z\in\Omega$ et notons $z_0:=z$ pour alléger. Comme $(f_n)$ converge localement uniformément, elle est localement uniformément de Cauchy ([[ch03-cauchy-locale-equivaut-convergence]]) ; le théorème de Weierstraß ([[ch03-weierstrass]]) donne que $f$ est holomorphe sur $\Omega$ et que $f_n'\to f'$ localement uniformément, donc uniformément sur tout compact ([[ch03-convergence-uniforme-compacts]]).

*Choix du rayon.* Comme $\Omega$ est connexe et $f\not\equiv0$, le principe des zéros isolés ([[ch01-zeros-isoles]]) fournit $\rho>0$ tel que $f(w)\ne0$ pour tout $w\in D(z_0,\rho)\setminus\{z_0\}$. Prenons $0<r<\rho$ avec $\bar D(z_0,r)\subset\Omega$, et posons $D:=D(z_0,r)$. Alors $f$ ne s'annule pas sur le cercle $C(z_0,r)$, et le seul zéro possible de $f$ dans $D$ est $z_0$ ; donc $Z(f,D)=m$, l'ordre de $z_0$ comme zéro de $f$ ($m=0$ si $f(z_0)\neq0$).

*Minoration uniforme sur le cercle.* La fonction $|f|$ est continue et strictement positive sur le compact $C(z_0,r)$ : il existe $\eps>0$ tel que $|f(w)|\ge2\eps$ pour tout $w\in C(z_0,r)$. Par convergence uniforme sur ce compact, il existe $N\ge1$ tel que $|f(w)-f_n(w)|\le\eps$ pour tous $n\ge N$, $w\in C(z_0,r)$, d'où
$$
|f_n(w)|\ge|f(w)|-|f(w)-f_n(w)|\ge\eps\qquad(n\ge N,\ w\in C(z_0,r)).
$$
En particulier, pour $n\ge N$, $f_n$ ne s'annule pas sur $C(z_0,r)$ (donc $f_n\not\equiv0$ et $Z(f_n,D)$ est un entier fini).

*Convergence uniforme de $f_n'/f_n$.* Pour $w\in C(z_0,r)$ et $n\ge N$,
$$
\Big|\frac1{f(w)}-\frac1{f_n(w)}\Big|=\frac{|f(w)-f_n(w)|}{|f(w)|\,|f_n(w)|}\le\frac1{2\eps^2}\sup_{C(z_0,r)}|f-f_n|,
$$
donc $1/f_n\to1/f$ uniformément sur $C(z_0,r)$. Avec $M:=\max_{C(z_0,r)}|f'|$,
$$
\Big|\frac{f_n'}{f_n}-\frac{f'}{f}\Big|\le\frac1\eps\sup_{C(z_0,r)}|f_n'-f'|+M\sup_{C(z_0,r)}\Big|\frac1{f_n}-\frac1f\Big|\xrightarrow[n\to\infty]{}0
$$
uniformément sur $C(z_0,r)$.

*Passage à la limite.* Le cercle $C(z_0,r)$, orienté positivement, est le bord de $D$, avec $\bar D\subset\Omega$ ; pour $n\ge N$, $f_n$ et $f$ sont holomorphes (méromorphes sans pôle) et sans zéro sur ce bord. Le principe de l'argument pour le bord d'un domaine ([[ch02-principe-argument-domaine]], corollaire du lemme [[ch02-principe-argument]]) donne
$$
Z(f_n,D)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n'(w)}{f_n(w)}\,dw\quad(n\ge N),\qquad Z(f,D)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f'(w)}{f(w)}\,dw .
$$
Par la majoration $\big|\int_\gamma h\big|\le\sup_\gamma|h|\cdot L(\gamma)$ ([[ch01-longueur-majoration-integrale]]) avec $L=2\pi r$,
$$
|Z(f_n,D)-Z(f,D)|\le\frac{2\pi r}{2\pi}\sup_{C(z_0,r)}\Big|\frac{f_n'}{f_n}-\frac{f'}{f}\Big|\xrightarrow[n\to\infty]{}0 .
$$
Donc $Z(f_n,D)\to Z(f,D)$. Comme ce sont des entiers, il existe $N'\ge N$ tel que $|Z(f_n,D)-Z(f,D)|<1$, c'est-à-dire $Z(f_n,D)=Z(f,D)=m$, pour tout $n\ge N'$. $\square$

## Preuve à trous

Fixons $z_0\in\Omega$. Par Weierstraß, $f$ est holomorphe et $f_n'\to f'$ uniformément sur les compacts. Comme $\Omega$ est connexe et $f\not\equiv0$, <trou indice="quel principe sur les zéros d'une fonction holomorphe non nulle ?">le principe des zéros isolés fournit $r>0$ avec $\bar D(z_0,r)\subset\Omega$ et $f\ne0$ sur $\bar D(z_0,r)\setminus\{z_0\}$, en particulier sur $C(z_0,r)$</trou>. On pose $D=D(z_0,r)$.

Par compacité du cercle, $|f|\ge2\eps$ sur $C(z_0,r)$, et par convergence uniforme <trou>$|f_n|\ge\eps$ sur $C(z_0,r)$ pour $n\ge N$</trou>. Alors $\big|\frac1f-\frac1{f_n}\big|\le\frac1{2\eps^2}\sup|f-f_n|$ et, avec $f_n'\to f'$, on obtient <trou>$f_n'/f_n\to f'/f$ uniformément sur $C(z_0,r)$</trou>.

Le principe de l'argument donne alors
$$
Z(f_n,D)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n'}{f_n}\,dw\xrightarrow[n\to\infty]{}\frac1{2i\pi}\int_{C(z_0,r)}\frac{f'}{f}\,dw=Z(f,D),
$$
la convergence des intégrales venant de la majoration par $\sup|\cdot|\times$ longueur. Enfin <trou indice="de quelle nature sont ces nombres ?">une suite d'entiers convergente est stationnaire : $Z(f_n,D)=Z(f,D)$ pour $n$ assez grand</trou>. $\square$

## Exemples

* **Un zéro double se dédouble.** $\Omega=\C$, $f_n(z)=z^2-\frac1n$, qui converge uniformément sur $\C$ vers $f(z)=z^2$ ($|f_n-f|=\frac1n$). En $z=0$, $f$ a un zéro d'ordre $2$ et ne s'annule pas sur $C(0,1)$ : on peut prendre $r=1$, et $Z(f,D(0,1))=2$. Les zéros de $f_n$ sont $\pm\frac1{\sqrt n}$, tous deux dans $D(0,1)$ dès que $n\ge2$ : $Z(f_n,D(0,1))=2$ pour $n\ge2$ (pour $n=1$, les zéros $\pm1$ sont sur le cercle, hors du disque ouvert, et $Z(f_1,D(0,1))=0$). Le même calcul avec $r$ quelconque montre que les deux zéros de $f_n$ tendent vers $0$.
* **Racines d'un polynôme perturbé.** $P_\eps(z)=z^3-3z+2+\eps$, avec $P_0(z)=(z-1)^2(z+2)$. Comme $P_\eps\to P_0$ uniformément sur $\C$ quand $\eps\to0$, on peut appliquer le résultat à $f_n=P_{1/n}$. Le cercle $C(1,1)$ ne contient aucune racine de $P_0$ (la racine $-2$ est à distance $3$ de $1$) : pour $n$ grand, $P_{1/n}$ a **exactement deux** racines dans $D(1,1)$, et exactement une dans $D(-2,1)$. On les voit explicitement : $P_\eps(1+h)=3h^2+h^3+\eps$, donc les deux racines proches de $1$ sont $1+h$ avec $h\approx\pm i\sqrt{\eps/3}$.
* **Le rayon ne peut pas être quelconque.** $f_n(z)=z-1+\frac1n\to f(z)=z-1$ uniformément sur $\C$. En $z=0$ avec $r=1$ : $f$ s'annule en $1\in C(0,1)$, ce qui est interdit ; et en effet $Z(f_n,D(0,1))=1$ pour tout $n\ge2$ (le zéro $1-\frac1n$ est dans le disque), alors que $Z(f,D(0,1))=0$ ($1$ n'est pas dans le disque **ouvert**). Avec $r=\frac12$ (cercle sans zéro de $f$) : $Z(f_n,D(0,\tfrac12))=0=Z(f,D(0,\tfrac12))$ pour $n\ge2$.

## Pièges

* > ⚠️ Le rayon $r$ doit être choisi pour que $f$ **ne s'annule pas sur le cercle** $C(z,r)$ (et $\bar D(z,r)\subset\Omega$) ; pour un disque dont le bord contient un zéro de $f$, la conclusion est fausse (troisième exemple).
* Le cas $f\equiv0$ est exclu (implicitement dans le poly) : la limite d'une suite de fonctions sans zéro peut être identiquement nulle ([[ch03-hurwitz-contre-exemple]]).
* Les zéros sont comptés **avec multiplicité** : $f_n$ peut avoir $m$ zéros simples distincts proches d'un zéro d'ordre $m$ de $f$ ; le nombre de zéros **distincts** n'est pas conservé.
* « $Z(f_n,D)\to Z(f,D)$ » veut dire « égalité à partir d'un certain rang » (suite d'entiers) ; pour les petits $n$, $Z(f_n,D)$ peut être n'importe quoi, même infini si $f_n\equiv0$.
* Ce résultat est **local** : sur tout $\Omega$, le nombre total de zéros de $f_n$ peut ne pas converger vers celui de $f$ : des zéros peuvent s'échapper vers le bord de $\Omega$. Sur $\Omega=D(0,1)$, $f_n(z)=z-1+\frac1n$ a exactement un zéro $1-\frac1n\in\Omega$ pour tout $n\ge2$, tandis que la limite $z-1$ n'a aucun zéro dans $\Omega$.
