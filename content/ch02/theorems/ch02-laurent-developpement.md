---
id: ch02-laurent-developpement
type: proposition
chapter: 2
title: Développement de Laurent d'une fonction méromorphe au voisinage d'un point
ref: Proposition II.4.6
page: 44
importance: 3
depends: [ch01-estimees-cauchy, ch02-pole-meromorphe-def, ch01-def-holomorphe, ch01-holomorphe-analytique, ch02-discret-accumulation-localement-fini-def, ch01-stabilite-operations, ch01-serie-entiere-holomorphe, ch01-serie-entiere-derivees-tout-ordre]
tags: [laurent, serie, pole, multiplicite, residu, couronne, convergence normale]
---
## Intuition

> 💡 Une fonction holomorphe est localement une série entière $\sum_{n\ge0}a_n(z-z_0)^n$ ([[ch01-holomorphe-analytique]]). Une fonction **méromorphe** est localement une série entière à laquelle on a ajouté **un nombre fini de puissances négatives** : $\dfrac{a_{-m}}{(z-z_0)^m}+\dots+\dfrac{a_{-1}}{z-z_0}+a_0+a_1(z-z_0)+\dots$ C'est le **développement de Laurent**. La partie à exposants négatifs (la **partie polaire**) décrit entièrement l'explosion en $z_0$ : il y a un pôle si et seulement si elle est non nulle, et son ordre est le plus grand $m$ tel que $a_{-m}\ne0$. Le coefficient $a_{-1}$ est si important qu'il a un nom : le **résidu** ([[ch02-residu-def]]).

L'idée de la preuve : si $(z-z_0)^mf$ est bornée près de $z_0$, on voudrait dire qu'elle se prolonge holomorphiquement en $z_0$ (ce sera le théorème de Riemann, [[ch02-singularite-effacable-riemann]], **conséquence** de cette proposition) ; faute de le savoir déjà, on multiplie par $(z-z_0)^2$ de plus : le facteur supplémentaire force la dérivée à tendre vers $0$ (grâce aux estimées de Cauchy), ce qui rend la fonction $C^1$ donc holomorphe en $z_0$. On développe alors cette fonction en série entière et l'on divise par $(z-z_0)^{m+2}$.

Notations : $D(z_0,r)^\times=D(z_0,r)\setminus\{z_0\}$ (disque épointé) ; une série de fonctions $\sum u_n$ **converge normalement** sur $A$ si $\sum\sup_A|u_n|<+\infty$ (on peut alors intégrer terme à terme sur un chemin de $A$) ; pôle, multiplicité, fonction méromorphe : [[ch02-pole-meromorphe-def]].

## Énoncé

**Proposition (poly, Proposition II.4.6, p. 44).** Soit $f$ une fonction méromorphe sur $\Omega$ et $z_0\in\Omega$. Alors, il existe $m\in\N$ et $r>0$ tels que
$$
f(z)=\sum_{n\ge-m}a_n(z-z_0)^n ,
$$
sur $D(z_0,r)^\times$. On dira que $f$ admet un **développement de Laurent** dans un voisinage de $z_0$. Ce développement est unique et l'on a convergence normale de la série sur la couronne
$$
C_{\eps,\bar\eps}:=\{z\in\Omega:\ \eps<|z-z_0|<\bar\eps\},
$$
pour tout $0<\eps<\bar\eps<r$.

Enfin, $f$ admet un pôle en $z_0$ si et seulement s'il existe $n\le-1$ tel que $a_n\neq0$, et la multiplicité de ce pôle est alors $-\min\{n\,;\,a_n\neq0\}$.

## Hypothèses

### H1 — $f$ méromorphe sur $\Omega$ : condition (ii), explosion au plus polynomiale

**Rôle.** C'est l'entier $m$ tel que $(z-z_0)^mf$ soit bornée qui permet de fabriquer la fonction holomorphe $h=(z-z_0)^{m+2}f$ et d'obtenir un nombre **fini** de puissances négatives.

**Si on la retire.** $f(z)=e^{1/z}$ sur $\C^\times$ : la série $\sum_{k\ge0}\dfrac{z^{-k}}{k!}$ converge sur $\C^\times$ vers $f$ (c'est la série de l'exponentielle en $1/z$), avec une **infinité** de puissances négatives. Il n'existe aucun développement de la forme $\sum_{n\ge-m}a_nz^n$ : sinon $z^mf$ serait bornée près de $0$, or $x^me^{1/x}\to+\infty$ quand $x\to0^+$. (Une série de Laurent « bilatère » existe pour toute fonction holomorphe sur un disque épointé, [[ch02-laurent-couronne-cauchy]], mais sans partie polaire finie.)

### H2 — $P$ localement finie : $f$ holomorphe sur un disque épointé $D(z_0,r)^\times$

**Rôle.** La locale finitude de $P$ ([[ch02-discret-accumulation-localement-fini-def]]) fournit un $r>0$ tel que $D(z_0,r)\cap P\subset\{z_0\}$ : $f$ est holomorphe sur tout le disque épointé, ce qui est indispensable pour y appliquer les estimées de Cauchy et pour que la série converge sur tout $D(z_0,r)^\times$.

**Si on la retire.** $f(z)=\dfrac1{\sin(1/z)}$ au point $z_0=0$ : tout disque épointé $D(0,r)^\times$ contient des pôles $\frac1{k\pi}$ ; $f$ n'y est pas holomorphe et aucune série $\sum_{n\ge-m}a_nz^n$ (holomorphe sur $D(0,r)^\times$ dès qu'elle converge) ne peut la représenter.

### H3 — $r$ assez petit, et le développement n'est valable que sur $D(z_0,r)^\times$

**Rôle.** Hypothèse de confort mais essentielle en pratique : $r$ doit être inférieur à la distance de $z_0$ aux autres points de $P$ (et à $\partial\Omega$).

**Si on la retire.** $f(z)=\dfrac1{z(z-1)}=\dfrac1{z-1}-\dfrac1z$ en $z_0=0$. Sur $0<|z|<1$ : $\dfrac1{z-1}=-\sum_{n\ge0}z^n$, donc $f(z)=-\dfrac1z-1-z-z^2-\dots$ (pôle simple, $a_{-1}=-1$). Sur $|z|>1$ : $\dfrac1{z-1}=\dfrac{1/z}{1-1/z}=\sum_{n\ge1}z^{-n}$, donc $f(z)=\sum_{n\ge2}z^{-n}=\dfrac1{z^2}+\dfrac1{z^3}+\dots$ : un développement **différent**, avec une infinité de puissances négatives, et dont le coefficient de $1/z$ est $0$. Seul le premier (sur le disque épointé évitant le pôle $1$) est « le » développement de Laurent en $0$ de l'énoncé.

## Idée de la preuve

Avec $g=(z-z_0)^mf$ holomorphe bornée par $M$ sur $D(z_0,r)^\times$, les estimées de Cauchy sur le disque $D(z,|z-z_0|/2)$ donnent $|g'(z)|\le2M/|z-z_0|$. Alors $h=(z-z_0)^2g$ est $C^1$ en $z_0$ avec $h(z_0)=h'(z_0)=0$, donc holomorphe sur $D(z_0,r)$ : $h=\sum_{n\ge2}b_n(z-z_0)^n$, et $f=h/(z-z_0)^{m+2}$. Unicité et convergence normale viennent des séries entières ; le critère de pôle se lit sur le premier coefficient non nul.

## Preuve

Soit $P$ la partie localement finie de $\Omega$ entrant dans la définition de la méromorphie de $f$ ([[ch02-pole-meromorphe-def]]) : $f$ est holomorphe sur $\Omega\setminus P$ et vérifie la condition (ii) en tout point de $P$.

**Choix de $r$.** Comme $P$ est localement fini et $\Omega$ ouvert, il existe $r>0$ tel que $D(z_0,r)\subset\Omega$ et $P\cap D(z_0,r)\subset\{z_0\}$ (un disque fermé $\bar D(z_0,r_0)\subset\Omega$ ne contient qu'un nombre fini de points de $P$ ; on prend $r<r_0$ inférieur à leur distance à $z_0$). Ainsi $f$ est holomorphe sur $D^\times:=D(z_0,r)\setminus\{z_0\}$.

**Cas $z_0\in\Omega\setminus P$.** Alors $f$ est holomorphe sur $D:=D(z_0,r)$ tout entier et le résultat est connu : $f$ est somme de sa série de Taylor $\sum_{n\ge0}a_n(z-z_0)^n$ sur $D$ ([[ch01-estimees-cauchy]] : rayon de convergence $\ge r$). C'est un développement de Laurent avec $m=0$ ; convergence normale, unicité et critère de pôle se traitent comme ci-dessous (avec tous les $a_n$, $n\le-1$, nuls : pas de pôle, conformément au fait que $f$ est holomorphe en $z_0$).

**Cas $z_0\in P$ : construction du développement.** Par la condition (ii), il existe $m\in\N^\times$ tel que $g(z):=(z-z_0)^mf(z)$ soit bornée au voisinage de $z_0$ ; quitte à diminuer $r$, on a $|g|\le M$ sur $D^\times$ pour une constante $M>0$, et $g$ est holomorphe sur $D^\times$ (produit de fonctions holomorphes, [[ch01-stabilite-operations]]).

*Estimée de $g'$.* Soit $z\in D(z_0,r/2)\setminus\{z_0\}$ et $\rho:=|z-z_0|/2$. Le disque fermé $\bar D(z,\rho')$ est contenu dans $D^\times$ pour tout $\rho'<|z-z_0|$ : en effet, pour $|w-z|\le\rho'$, on a $|w-z_0|\ge|z-z_0|-\rho'>0$ et $|w-z_0|\le|z-z_0|+\rho'<2|z-z_0|<r$. Donc le rayon $\rho(z)=\sup\{\rho'>0:\bar D(z,\rho')\subset D^\times\}$ vérifie $\rho(z)\ge|z-z_0|>\rho$, et les estimées de Cauchy ([[ch01-estimees-cauchy]], Corollaire I.7.5) appliquées à $g$ sur $D(z,\rho)\subset D^\times$ donnent, pour $n=1$,
$$
|g'(z)|\le\frac{\sup_{C(z,\rho)}|g|}{\rho}\le\frac{M}{|z-z_0|/2}=\frac{2M}{|z-z_0|}\qquad\big(z\in D(z_0,r/2)\setminus\{z_0\}\big).
$$

*La fonction $h$.* Posons $h(z):=(z-z_0)^2g(z)=(z-z_0)^{m+2}f(z)$ pour $z\in D^\times$ et $h(z_0):=0$. Sur $D^\times$, $h$ est holomorphe et $h'(z)=2(z-z_0)g(z)+(z-z_0)^2g'(z)$, donc, pour $0<|z-z_0|<r/2$,
$$
|h'(z)|\le2|z-z_0|M+|z-z_0|^2\frac{2M}{|z-z_0|}=4M|z-z_0|\xrightarrow[z\to z_0]{}0 .
$$
En $z_0$ : $\left|\dfrac{h(z)-h(z_0)}{z-z_0}\right|=|z-z_0|\,|g(z)|\le M|z-z_0|\to0$, donc $h$ est $\C$-dérivable en $z_0$ avec $h'(z_0)=0$, et $h'$ est continue en $z_0$ puisque $h'(z)\to0=h'(z_0)$. Ainsi $h$ est $\C$-dérivable sur $D$ à dérivée continue : $h\in\Hol(D)$ ([[ch01-def-holomorphe]]).

*Développement.* Par [[ch01-estimees-cauchy]] (ou [[ch01-holomorphe-analytique]]), $h$ admet sur $D$ un unique développement en série entière
$$
h(z)=\sum_{n\ge0}b_n(z-z_0)^n,\qquad b_n=\frac{h^{(n)}(z_0)}{n!},
$$
de rayon de convergence $\ge r$, qui converge normalement sur tout compact contenu dans $D$. Comme $b_0=h(z_0)=0$ et $b_1=h'(z_0)=0$, on a $h(z)=\sum_{n\ge2}b_n(z-z_0)^n$. En divisant par $(z-z_0)^{m+2}$ sur $D^\times$ :
$$
f(z)=\frac{h(z)}{(z-z_0)^{m+2}}=\sum_{n\ge2}b_n(z-z_0)^{n-m-2}=\sum_{k\ge-m}a_k(z-z_0)^k,\qquad a_k:=b_{k+m+2},
$$
ce qui est bien un développement de la forme annoncée (les premiers termes effectifs correspondent à des exposants $\ge-m$).

**Convergence normale sur la couronne.** Soient $0<\eps<\bar\eps<r$. Pour $z\in C_{\eps,\bar\eps}$ et $k\ge-m$, $|a_k(z-z_0)^k|=|b_{k+m+2}|\,\dfrac{|z-z_0|^{k+m+2}}{|z-z_0|^{m+2}}\le\dfrac{|b_{k+m+2}|\,\bar\eps^{\,k+m+2}}{\eps^{m+2}}$, et $\sum_{n}|b_n|\bar\eps^{\,n}<+\infty$ puisque $\bar\eps<r$ est strictement inférieur au rayon de convergence : la série $\sum_{k\ge-m}a_k(z-z_0)^k$ converge normalement sur $C_{\eps,\bar\eps}$.

**Unicité.** Supposons $\sum_{n\ge-m}a_n(z-z_0)^n=\sum_{n\ge-m'}a'_n(z-z_0)^n$ sur un disque épointé $D(z_0,\rho)^\times$, les deux séries y convergeant. Posons $N:=\max(m,m')$ (avec $a_n=0$ pour $n<-m$ et $a'_n=0$ pour $n<-m'$) et multiplions par $(z-z_0)^N$ : les séries entières $\sum_{j\ge0}a_{j-N}(z-z_0)^j$ et $\sum_{j\ge0}a'_{j-N}(z-z_0)^j$ convergent et coïncident sur $D(z_0,\rho)^\times$. Leur différence $\varphi(z)=\sum_{j\ge0}(a_{j-N}-a'_{j-N})(z-z_0)^j$ est une série entière de rayon $\ge\rho$, nulle sur $D(z_0,\rho)^\times$, donc nulle sur $D(z_0,\rho)$ par continuité ; ses coefficients $\varphi^{(j)}(z_0)/j!$ sont donc tous nuls ([[ch01-serie-entiere-derivees-tout-ordre]]) : $a_n=a'_n$ pour tout $n$.

**Critère de pôle et multiplicité.** *Si tous les $a_n$, $n\le-1$, sont nuls*, le développement est une série entière $\sum_{n\ge0}a_n(z-z_0)^n$ convergeant sur $D^\times$, donc sur $D$ (une série entière qui converge en un point de module $|z-z_0|=\rho'$ converge sur $D(z_0,\rho')$ ; ici pour tout $\rho'<r$) ; sa somme est holomorphe sur $D$ ([[ch01-serie-entiere-holomorphe]]) et prolonge $f$ : la condition (i) échoue, $z_0$ n'est pas un pôle.

*Réciproquement*, supposons qu'il existe $n\le-1$ avec $a_n\ne0$, et posons $k:=-\min\{n\,;\,a_n\ne0\}$ ; comme $n\ge-m$ pour tout terme, ce minimum existe et $1\le k\le m$. Alors, sur $D^\times$,
$$
(z-z_0)^kf(z)=\sum_{n\ge-k}a_n(z-z_0)^{n+k}=a_{-k}+\sum_{j\ge1}a_{j-k}(z-z_0)^j=:u(z),
$$
où $u$ est une série entière convergente sur $D$, holomorphe, avec $u(z_0)=a_{-k}\ne0$. Donc $(z-z_0)^kf=u$ est bornée au voisinage de $z_0$ : la condition (ii) est vraie pour $k$. Par continuité, $|u|\ge|a_{-k}|/2$ sur un disque $D(z_0,\rho'')$, et $|(z-z_0)^{k-1}f(z)|=\dfrac{|u(z)|}{|z-z_0|}\ge\dfrac{|a_{-k}|}{2|z-z_0|}$ n'est pas bornée près de $z_0$ : la condition (ii) est fausse pour $k-1$, donc pour tout $m'\le k-1$ (si $(z-z_0)^{m'}f$ était bornée, $(z-z_0)^{k-1}f=(z-z_0)^{k-1-m'}(z-z_0)^{m'}f$ le serait). Enfin $|f(z)|=|u(z)|/|z-z_0|^k\to+\infty$ : $f$ n'est pas bornée près de $z_0$, donc ne se prolonge pas holomorphiquement (un prolongement continu serait borné) : (i) est vraie. Ainsi $z_0$ est un pôle de $f$, de multiplicité exactement $k=-\min\{n\,;\,a_n\ne0\}$ (on retrouve $f=(z-z_0)^{-k}u$ avec $u(z_0)\neq0$, [[ch02-pole-meromorphe-def]]). $\square$

## Preuve à trous

Soit $r>0$ tel que $f$ soit holomorphe sur $D^\times=D(z_0,r)^\times$ (locale finitude de $P$). Si $z_0\notin P$, $f$ est somme de sa série de Taylor sur $D(z_0,r)$. Sinon, soit $m\ge1$ tel que $g=(z-z_0)^mf$ soit holomorphe sur $D^\times$ et bornée par $M$. Pour $0<|z-z_0|<r/2$, <trou indice="estimées de Cauchy sur un disque centré en z, contenu dans D^×">le disque $\bar D(z,\rho')$ est contenu dans $D^\times$ pour $\rho'<|z-z_0|$, et les estimées de Cauchy pour $g$ sur $D(z,|z-z_0|/2)$ donnent $|g'(z)|\le\frac{2M}{|z-z_0|}$</trou>. On pose alors <trou indice="multiplier par une puissance de plus pour gagner la régularité en z0">$h(z)=(z-z_0)^2g(z)=(z-z_0)^{m+2}f(z)$, $h(z_0)=0$ ; on a $|h'(z)|\le4M|z-z_0|\to0$ et $|h(z)-h(z_0)|/|z-z_0|\le M|z-z_0|\to0$, donc $h$ est $C^1$ en $z_0$ avec $h'(z_0)=0$ et $h\in\Hol(D)$</trou>. Donc $h(z)=\sum_{n\ge0}b_n(z-z_0)^n$ sur $D$ avec $b_0=h(z_0)=0$, $b_1=h'(z_0)=0$, convergence normale sur les compacts de $D$, et l'on divise : $f(z)=\sum_{n\ge2}b_n(z-z_0)^{n-m-2}=\sum_{k\ge-m}a_k(z-z_0)^k$ sur $D^\times$.

Convergence normale sur $C_{\eps,\bar\eps}$ : <trou indice="majorer |z−z0|^k selon le signe de l'exposant">$|a_k(z-z_0)^k|\le|b_{k+m+2}|\,\bar\eps^{\,k+m+2}/\eps^{m+2}$, terme général d'une série convergente car $\bar\eps<r$</trou>. Unicité : on multiplie deux développements par $(z-z_0)^N$ et l'on utilise l'unicité des coefficients d'une série entière.

Critère de pôle : si $a_n=0$ pour tout $n\le-1$, $f$ est somme d'une série entière sur $D^\times$, donc se prolonge holomorphiquement : pas de pôle. Sinon, avec $k=-\min\{n;a_n\ne0\}$, <trou indice="écrire (z−z0)^k f comme une série entière et regarder sa valeur en z0">$(z-z_0)^kf=u$ est une série entière avec $u(z_0)=a_{-k}\ne0$ : bornée, alors que $(z-z_0)^{k-1}f=u/(z-z_0)$ ne l'est pas, et $|f|\to+\infty$</trou>. Donc $z_0$ est un pôle de multiplicité $k$. $\square$

## Exemples

* **$f(z)=\dfrac{e^z}{z^2}$ en $z_0=0$.** $e^z=\sum_{n\ge0}\frac{z^n}{n!}$ sur $\C$, donc sur $\C^\times$ : $f(z)=\dfrac1{z^2}+\dfrac1z+\dfrac12+\dfrac z6+\dfrac{z^2}{24}+\dots$ ($r=+\infty$). Pôle double ($-\min\{n;a_n\neq0\}=2$), résidu $a_{-1}=1$.
* **$f(z)=\dfrac1{z(z-1)}$.** En $z_0=0$, sur $0<|z|<1$ ($r=1$ = distance au pôle $1$) : $f(z)=-\dfrac1z-1-z-z^2-\dots$, pôle simple, $a_{-1}=-1$. En $z_0=1$, sur $0<|z-1|<1$ : $\dfrac1z=\dfrac1{1+(z-1)}=\sum_{n\ge0}(-1)^n(z-1)^n$, donc $f(z)=\dfrac1{z-1}-1+(z-1)-(z-1)^2+\dots$ : pôle simple, $a_{-1}=1$. Vérification : la décomposition en éléments simples $f=\dfrac1{z-1}-\dfrac1z$ redonne les deux résidus $1$ et $-1$.
* **$f(z)=\dfrac1{\sin z}$ en $0$.** $\sin z=z\big(1-\frac{z^2}6+\frac{z^4}{120}-\dots\big)$, et avec $u=\frac{z^2}6-\frac{z^4}{120}+\dots$, $\dfrac1{1-u}=1+u+u^2+\dots=1+\dfrac{z^2}6+\Big(\dfrac1{36}-\dfrac1{120}\Big)z^4+\dots=1+\dfrac{z^2}6+\dfrac{7z^4}{360}+\dots$ Donc, sur $0<|z|<\pi$ (prochain pôle en $\pm\pi$) :
$$
\frac1{\sin z}=\frac1z+\frac z6+\frac{7z^3}{360}+\dots
$$
pôle simple, résidu $1$. Noter que le développement s'obtient par division de séries, sans calculer d'intégrale.
* **Fausse singularité.** $f(z)=\dfrac{1-\cos z}{z^2}=\dfrac12-\dfrac{z^2}{24}+\dfrac{z^4}{720}-\dots$ sur $\C^\times$ : aucun coefficient d'indice négatif, donc $0$ n'est pas un pôle et $f$ se prolonge holomorphiquement (valeur $\frac12$), conformément au critère.

## Pièges

* > ⚠️ Le développement de Laurent **dépend de la couronne** : il n'est « le » développement en $z_0$ que sur un disque épointé $D(z_0,r)^\times$ ne contenant aucun autre point de $P$. Développer $\frac1{z(z-1)}$ sur $|z|>1$ ne donne pas le résidu en $0$ (H3).
* La multiplicité du pôle est $-\min\{n;a_n\ne0\}$, pas l'entier $m$ de la condition (ii) (qui peut être pris trop grand) : dans la preuve, $m$ n'est qu'un majorant.
* Une fonction méromorphe n'a qu'un **nombre fini** de puissances négatives ; une infinité de puissances négatives ($e^{1/z}$) signale une singularité essentielle, hors de $\mathcal M(\Omega)$.
* Le résidu est $a_{-1}$, pas $a_{-m}$ ni le coefficient « dominant » : pour $e^z/z^2$, le résidu vaut $1$ alors que le terme dominant est $1/z^2$.
* La convergence normale n'est affirmée que sur les couronnes $\eps<|z-z_0|<\bar\eps$ avec $\eps>0$ : près de $z_0$ les puissances négatives explosent, il n'y a pas de convergence normale sur $D(z_0,r)^\times$ entier. C'est la convergence normale sur un **cercle** $C(z_0,\rho)$ qui permet d'intégrer terme à terme ([[ch02-residu-integrale-cercle]]).
* L'unicité est précieuse : tout moyen d'obtenir un développement $\sum_{n\ge-m}a_n(z-z_0)^n$ valable sur un disque épointé (produit, division de séries, décomposition en éléments simples) donne **le** développement de Laurent, donc le résidu.
