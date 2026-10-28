---
id: ch01-primitive-locale
type: corollary
chapter: 1
title: Existence locale de primitives (primitive sur tout disque ouvert)
ref: Corollaire I.7.6
page: 22
importance: 2
depends: [ch01-estimees-cauchy, ch01-serie-entiere-holomorphe]
tags: [primitive, disque, serie-entiere, local]
---
## Intuition

> 💡 Sur un disque, une fonction holomorphe est la somme d'**une seule** série entière $\sum a_n(z-z_0)^n$ ; on l'intègre terme à terme comme un polynôme : $\sum\frac{a_n}{n+1}(z-z_0)^{n+1}$. Voilà une primitive.

Une **primitive** de $f$ sur un ouvert $U$ est une fonction $F\in\Hol(U)$ telle que $F'=f$ sur $U$. Son intérêt : $\int_\gamma f(z)\,dz=F(\text{fin})-F(\text{début})$ pour tout chemin $\gamma$ de $U$, et donc $\int_\gamma f(z)\,dz=0$ sur tout lacet de $U$ ([[ch01-integrale-primitive]]). « Localement » veut dire : autour de chaque point il existe un petit disque sur lequel $f$ a une primitive. Globalement c'est faux en général : $1/z$ n'a pas de primitive sur $\C^\times$ (le logarithme « fait un saut de $2i\pi$ » quand on tourne autour de $0$).

## Énoncé

**Corollaire (poly, Corollaire I.7.6, p. 22) — Existence locale de primitives.** Toute fonction holomorphe admet localement une primitive. Plus précisément, si $f$ est une fonction holomorphe sur un disque ouvert $D$, il existe $F\in\Hol(D)$ qui est une primitive de $f$, i.e. $F'=f$ sur $D$.

(Ici $D=D(z_0,\rho)$ avec $z_0\in\C$ et $\rho>0$. *Remarque hors poly :* la même preuve s'applique mot pour mot à $D=\C$, i.e. $\rho=+\infty$ : une fonction entière admet une primitive entière.)

## Hypothèses

### H1 — $f$ est holomorphe sur un **disque** ouvert $D$

**Rôle.** Ce n'est pas la simple analyticité de $f$ qui sert, mais le fait qu'**une seule** série entière (centrée au centre $z_0$ du disque) représente $f$ sur $D$ tout entier : c'est le Corollaire I.7.5 ([[ch01-estimees-cauchy]]), qui utilise que $\rho(z_0)$ calculé pour l'ouvert $D$ vaut le rayon du disque.

**Si on la retire.** Sur un ouvert qui n'est pas un disque, la conclusion peut tomber. $f(z)=1/z$ est holomorphe sur $\C^\times$ (et même sur la couronne $\{1/2<|z|<2\}$) mais n'y a pas de primitive : sinon, par le Théorème I.5.9 ([[ch01-integrale-primitive]]), on aurait $\int_{C(0,1)}\frac{dz}{z}=0$, alors que $\int_{C(0,1)}\frac{dz}{z}=\int_0^{2\pi}\frac{ie^{it}}{e^{it}}\,dt=2i\pi$. (Sur un ouvert **simplement connexe**, toute fonction holomorphe admet une primitive : Théorème II.9.1, chapitre II ([[ch02-primitive-simplement-connexe]]) ; la couronne et $\C^\times$ ne le sont pas.)

### H2 — $f$ holomorphe (et pas seulement continue, ou $C^\infty$ au sens réel)

**Rôle.** Elle donne le développement en série entière.

**Si on la retire.** $f(z)=\bar z$ sur $D=D(0,1)$ n'a pas de primitive holomorphe : sur $C(0,r)$, $r<1$, on a $\bar z=r^2/z$, donc $\int_{C(0,r)}\bar z\,dz=r^2\cdot2i\pi\neq0$, ce qui contredirait le Théorème I.5.9.

## Idée de la preuve

Par le Corollaire I.7.5, $f=\sum a_n(z-z_0)^n$ sur tout $D=D(z_0,\rho)$ ; la série primitive $\sum\frac{a_n}{n+1}(z-z_0)^{n+1}$ a le même rayon et sa dérivée est $f$ (Proposition I.3.3).

## Preuve

Écrivons $D=D(z_0,\rho)$, $\rho\in\,]0,+\infty]$, et appliquons le Corollaire I.7.5 ([[ch01-estimees-cauchy]]) à l'ouvert $\Omega=D$ et au point $z_0$. On a $\rho(z_0)=\sup\{r>0\mid\bar D(z_0,r)\subset D(z_0,\rho)\}=\rho$, puisque $\bar D(z_0,r)\subset D(z_0,\rho)$ si et seulement si $r<\rho$. Donc le développement de $f$ en série entière au point $z_0$ a un rayon de convergence au moins égal à $\rho$, et
$$
f(z)=\sum_{n\ge0}a_n(z-z_0)^n\qquad\text{pour tout }z\in D,\qquad a_n=\frac{f^{(n)}(z_0)}{n!}.
$$
Ce n'est pas la simple analyticité de $f$ qui est utilisée ici, mais le fait qu'une seule série entière représente $f$ sur $D$ tout entier.

Il suffit alors de remarquer que toute série entière convergeant sur $D$ admet une primitive convergeant sur $D$ : posons
$$
F(z)=\sum_{n\ge0}\frac{a_n}{n+1}(z-z_0)^{n+1}.
$$
C'est une série entière $\sum_{m\ge1}b_m(z-z_0)^m$ avec $b_m=\frac{a_{m-1}}{m}$, dont la série dérivée $\sum_{m\ge1}mb_m(z-z_0)^{m-1}=\sum_{n\ge0}a_n(z-z_0)^n$ est celle de $f$. Or une série entière et sa série dérivée ont le même rayon de convergence (preuve de la Proposition I.3.3, [[ch01-serie-entiere-holomorphe]]) ; donc $F$ a un rayon $\ge\rho$, converge sur $D$, et la Proposition I.3.3 donne $F\in\Hol(D)$ et $F'(z)=\sum_{n\ge0}a_n(z-z_0)^n=f(z)$ pour tout $z\in D$. $\square$

## Preuve à trous

Soit $D=D(z_0,\rho)$. Pour l'ouvert $\Omega=D$, on a <trou indice="plus grand disque fermé centré en z0 inclus dans D">$\rho(z_0)=\rho$</trou>, donc par le Corollaire I.7.5, <trou indice="ce n'est pas seulement l'analyticité">$f(z)=\sum_{n\ge0}a_n(z-z_0)^n$ pour **tout** $z\in D$ (une seule série sur tout le disque)</trou>. On pose <trou indice="intégrer terme à terme">$F(z)=\sum_{n\ge0}\frac{a_n}{n+1}(z-z_0)^{n+1}$</trou> ; sa série dérivée est celle de $f$, et une série entière a <trou indice="comparer les rayons">le même rayon de convergence que sa série dérivée</trou>, donc $F$ converge sur $D$ et $F'=f$ sur $D$ par la Proposition I.3.3. $\square$

## Exemples

* **Le logarithme sur $D(1,1)$.** $f(z)=\frac1z$ est holomorphe sur $D(1,1)$ (qui ne contient pas $0$), et $\frac1z=\frac{1}{1+(z-1)}=\sum_{n\ge0}(-1)^n(z-1)^n$ pour $|z-1|<1$. La primitive construite est
$$
F(z)=\sum_{n\ge0}\frac{(-1)^n}{n+1}(z-1)^{n+1}=(z-1)-\frac{(z-1)^2}{2}+\frac{(z-1)^3}{3}-\cdots,
$$
qui vaut $0$ en $1$ : c'est une détermination du logarithme sur $D(1,1)$ (on vérifie que $e^{F(z)}/z$ a une dérivée nulle sur le disque connexe et vaut $1$ en $1$, donc $e^{F(z)}=z$).
* **Une primitive entière.** $f(z)=e^{z^2}=\sum_{n\ge0}\frac{z^{2n}}{n!}$ est holomorphe sur $D=\C$ ($\rho=+\infty$), et $F(z)=\sum_{n\ge0}\frac{z^{2n+1}}{n!\,(2n+1)}$ est une primitive entière (sans expression élémentaire). Conséquence : $\int_\gamma e^{z^2}\,dz=0$ pour tout lacet $\gamma$ de $\C$.
* **Contre-exemple global.** Sur $\C^\times$, $\frac1z$ a une primitive sur chaque disque ne contenant pas $0$, mais pas de primitive globale (H1) : les primitives locales ne se recollent pas.

## Pièges

* > ⚠️ « Localement » n'est pas « globalement » : l'existence d'une primitive sur $\Omega$ entier dépend de la forme de $\Omega$ ($1/z$ sur $\C^\times$). Pour un ouvert simplement connexe c'est vrai (Théorème II.9.1), pas avant.
* Sur un disque, deux primitives de $f$ diffèrent d'une constante (un disque est connexe et $(F_1-F_2)'=0$).
* Ne pas « intégrer » une fonction non holomorphe en espérant une primitive holomorphe : $\bar z$ n'en a pas (H2).
* La preuve utilise que la série en $z_0$ converge sur **tout** $D$, ce qui vient du Corollaire I.7.5 (rayon $\ge\rho(z_0)$), pas seulement de l'analyticité.
