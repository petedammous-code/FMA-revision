---
id: ch02-residu-pole-simple
type: proposition
chapter: 2
title: Résidu d'un produit $fg$ en un pôle simple de $g$
ref: Remarque II.4.12
page: 46
importance: 2
depends: [ch02-laurent-developpement, ch01-estimees-cauchy, ch02-residu-def, ch02-residu-forme-lineaire, ch01-serie-entiere-holomorphe]
tags: [residu, pole simple, calcul, formule pratique, f/q']
---
## Intuition

> 💡 En un pôle **simple**, $g$ ressemble à $\frac{a_{-1}}{z-z_0}$ : tout le reste est holomorphe. Si on multiplie par une fonction $f$ holomorphe, seule la valeur $f(z_0)$ « survit » devant $\frac1{z-z_0}$ ; les variations de $f$ ($f(z)-f(z_0)$, qui est un $O(z-z_0)$) tuent le pôle. D'où $\mathrm{res}_{z_0}(fg)=f(z_0)\,\mathrm{res}_{z_0}(g)$.

C'est **la** formule de calcul de résidus utilisée en pratique, sous deux formes dérivées (complément hors poly) : $\mathrm{res}_{z_0}(F)=\lim_{z\to z_0}(z-z_0)F(z)$ en un pôle simple, et $\mathrm{res}_{z_0}\big(\frac fq\big)=\frac{f(z_0)}{q'(z_0)}$ quand $q$ a un zéro simple en $z_0$.

Rappels : un **pôle simple** est un pôle de multiplicité $1$ ([[ch02-pole-meromorphe-def]]), c'est-à-dire que le développement de Laurent ([[ch02-laurent-developpement]]) est $\frac{a_{-1}}{z-z_0}+\sum_{n\ge0}a_n(z-z_0)^n$ avec $a_{-1}\neq0$ ; le résidu est $a_{-1}$ ([[ch02-residu-def]]). Un **zéro simple** de $q$ est un point où $q(z_0)=0\neq q'(z_0)$ ([[ch01-def-multiplicite-zero]]).

## Énoncé

**Proposition (poly, Remarque II.4.12, p. 46).** Soit $z_0\in\Omega$. Si $f$ est une fonction holomorphe au voisinage de $z_0$ et si $g$ est une fonction méromorphe admettant un pôle simple en $z_0$, alors le résidu du produit $fg$ en $z_0$ est donné par la formule :
$$
\mathrm{res}_{z_0}(fg)=f(z_0)\,\mathrm{res}_{z_0}(g).
$$

**Compléments (hors poly, d'usage constant ; prouvés ci-dessous).**
1. Si $F$ est méromorphe et a au plus un pôle simple en $z_0$, alors $\mathrm{res}_{z_0}(F)=\lim_{z\to z_0}(z-z_0)F(z)$.
2. Si $f$ et $q$ sont holomorphes au voisinage de $z_0$ et si $q$ a un zéro simple en $z_0$ ($q(z_0)=0$, $q'(z_0)\neq0$), alors
$$
\mathrm{res}_{z_0}\Big(\frac fq\Big)=\frac{f(z_0)}{q'(z_0)} .
$$

## Hypothèses

### H1 — $g$ a un pôle **simple** en $z_0$

**Rôle.** Elle donne $g(z)=\frac{a_{-1}}{z-z_0}+h(z)$ avec $h$ holomorphe : il n'y a qu'un terme polaire, et le multiplier par $f(z)-f(z_0)=O(z-z_0)$ le rend holomorphe.

**Si on la retire.** Pôle double : si $g=\frac{a_{-2}}{(z-z_0)^2}+\frac{a_{-1}}{z-z_0}+h$, on trouve $\mathrm{res}_{z_0}(fg)=f(z_0)a_{-1}+f'(z_0)a_{-2}$. Exemple : $f=e^z$, $g=\frac1{z^2}$, $z_0=0$ : $\mathrm{res}_0\big(\frac{e^z}{z^2}\big)=1$ (développement $\frac1{z^2}+\frac1z+\dots$), alors que $f(0)\,\mathrm{res}_0\big(\frac1{z^2}\big)=1\cdot0=0$. De même $\lim_{z\to0}z\cdot\frac{e^z}{z^2}$ n'existe pas (module $\to+\infty$).

### H2 — $f$ holomorphe au voisinage de $z_0$

**Rôle.** Elle permet d'écrire $f(z)=f(z_0)+(z-z_0)\tilde f(z)$ avec $\tilde f$ holomorphe en $z_0$ (développement de Taylor).

**Si on la retire.** Si $f$ a elle aussi un pôle en $z_0$, « $f(z_0)$ » n'a pas de sens et le produit peut avoir un pôle d'ordre $2$ : $f=\frac1z$, $g=\frac{1+z}z$ ; $fg=\frac1{z^2}+\frac1z$ a résidu $1$, ce que ne donne aucune formule du type $f(z_0)\,\mathrm{res}(g)$.

### H3 — (Complément 2) zéro **simple** de $q$

**Rôle.** $q(z)=(z-z_0)\tilde q(z)$ avec $\tilde q(z_0)=q'(z_0)\neq0$, donc $\frac1q$ a un pôle simple de résidu $\frac1{q'(z_0)}$.

**Si on la retire.** $q(z)=z^2$, $f(z)=e^z$ : $q'(0)=0$ et la formule $\frac{f(0)}{q'(0)}$ n'a pas de sens ; le vrai résidu de $\frac{e^z}{z^2}$ est $1$. Et $q(z)=1-\cos z$ (zéro double en $0$, car $q''(0)=1$) avec $f(z)=z$ : $\frac{z}{1-\cos z}=\frac{z}{z^2/2-z^4/24+\dots}=\frac2z\big(1+\frac{z^2}{12}+\dots\big)$, de résidu $2$, qu'aucune formule « en $q'$ » ne donne.

## Idée de la preuve

Écrire $g=\frac{a_{-1}}{z-z_0}+h$ et $f=f(z_0)+(z-z_0)\tilde f$ ; développer le produit : $fg=\frac{f(z_0)a_{-1}}{z-z_0}+\big(\text{holomorphe en }z_0\big)$. Le résidu se lit. Les compléments s'en déduisent en prenant $f=1$ ou $f=(z-z_0)$, et $g=\frac1q$.

## Preuve

*Formule du poly.* Par le développement de Laurent de $g$ en $z_0$ ([[ch02-laurent-developpement]]) et puisque le pôle est simple (multiplicité $1=-\min\{n\,;\,a_n\neq0\}$), on a, sur un disque épointé $D(z_0,r)^\times$,
$$
g(z)=\frac{a_{-1}}{z-z_0}+h(z),\qquad h(z)=\sum_{n\ge0}a_n(z-z_0)^n ,
$$
où $h$ est la somme d'une série entière convergente sur $D(z_0,r)$, donc holomorphe en $z_0$ ([[ch01-serie-entiere-holomorphe]]), et $a_{-1}=\mathrm{res}_{z_0}(g)$.

Comme $f$ est holomorphe au voisinage de $z_0$, elle est développable en série entière sur un disque $D(z_0,\rho)$ ([[ch01-estimees-cauchy]], Corollaire I.7.5) : $f(z)=\sum_{n\ge0}c_n(z-z_0)^n$ avec $c_0=f(z_0)$. Posons $\tilde f(z):=\sum_{n\ge1}c_n(z-z_0)^{n-1}$ : c'est une série entière de même rayon, donc $\tilde f$ est holomorphe sur $D(z_0,\rho)$, et
$$
f(z)=f(z_0)+(z-z_0)\tilde f(z).
$$
Le produit donne alors, sur $D(z_0,\min(r,\rho))^\times$ :
$$
f(z)g(z)=\frac{f(z_0)a_{-1}}{z-z_0}+a_{-1}\tilde f(z)+f(z)h(z).
$$
La fonction $z\mapsto a_{-1}\tilde f(z)+f(z)h(z)$ est holomorphe en $z_0$ (sommes et produits de fonctions holomorphes), donc son résidu en $z_0$ est nul (son développement de Laurent est une série entière). Par linéarité du résidu ([[ch02-residu-forme-lineaire]]) et $\mathrm{res}_{z_0}\big(\frac{1}{z-z_0}\big)=1$, le résidu de $fg$ en $z_0$ est bien $f(z_0)a_{-1}=f(z_0)\,\mathrm{res}_{z_0}(g)$. $\square$

*Complément 1.* Si $F$ a au plus un pôle simple en $z_0$, $F(z)=\frac{a_{-1}}{z-z_0}+h(z)$ avec $h$ holomorphe en $z_0$ (si $z_0$ est régulier, $a_{-1}=0$). Donc $(z-z_0)F(z)=a_{-1}+(z-z_0)h(z)\to a_{-1}=\mathrm{res}_{z_0}(F)$ quand $z\to z_0$, car $h$ est bornée près de $z_0$.

*Complément 2.* Écrivons, comme ci-dessus, $q(z)=q(z_0)+(z-z_0)\tilde q(z)=(z-z_0)\tilde q(z)$, avec $\tilde q$ holomorphe en $z_0$ et $\tilde q(z_0)=c_1=q'(z_0)\neq0$. Par continuité, $\tilde q$ ne s'annule pas sur un disque $D(z_0,\rho')$, et $\frac1{\tilde q}$ y est holomorphe ([[ch01-stabilite-operations]]) ; posons $\frac1{\tilde q(z)}=\frac1{q'(z_0)}+(z-z_0)k(z)$ avec $k$ holomorphe (même argument). Alors sur $D(z_0,\rho')^\times$,
$$
\frac1{q(z)}=\frac1{(z-z_0)\tilde q(z)}=\frac{1/q'(z_0)}{z-z_0}+k(z),
$$
donc $g:=\frac1q$ a un pôle simple en $z_0$ de résidu $\frac1{q'(z_0)}$. La formule du poly appliquée à $f$ et $g$ donne $\mathrm{res}_{z_0}\big(\frac fq\big)=f(z_0)\cdot\frac1{q'(z_0)}$. $\square$

## Preuve à trous

On écrit <trou indice="développement de Laurent en un pôle simple">$g(z)=\dfrac{a_{-1}}{z-z_0}+h(z)$ avec $h$ holomorphe en $z_0$ et $a_{-1}=\mathrm{res}_{z_0}(g)$</trou>, et, par le développement de Taylor de $f$, <trou indice="factoriser f(z)−f(z0)">$f(z)=f(z_0)+(z-z_0)\tilde f(z)$ avec $\tilde f(z)=\sum_{n\ge1}c_n(z-z_0)^{n-1}$ holomorphe en $z_0$</trou>. Le produit vaut
$$
f(z)g(z)=\frac{f(z_0)a_{-1}}{z-z_0}+a_{-1}\tilde f(z)+f(z)h(z),
$$
et <trou indice="quel est le résidu d'une fonction holomorphe ?">$a_{-1}\tilde f+fh$ est holomorphe en $z_0$, donc de résidu nul ; par linéarité, $\mathrm{res}_{z_0}(fg)=f(z_0)a_{-1}$</trou>. $\square$

## Exemples

* **Intégrale de Fourier (Exemple II.6.1).** $F(z)=\dfrac{e^{ikz}}{z^2+a^2}$, $a>0$, en $z_0=ia$ : $q(z)=z^2+a^2$ a un zéro simple en $ia$ ($q'(ia)=2ia\neq0$), donc $\mathrm{res}_{ia}(F)=\dfrac{e^{ik(ia)}}{2ia}=\dfrac{e^{-ka}}{2ia}$. Vérification par le complément 1 : $(z-ia)F(z)=\dfrac{e^{ikz}}{z+ia}\to\dfrac{e^{-ka}}{2ia}$. Voir [[ch02-exemple-integrale-fourier]].
* **Cotangente et $1/\sin$.** $\cot z=\dfrac{\cos z}{\sin z}$ : en $k\pi$, $\sin$ a un zéro simple ($\cos(k\pi)=(-1)^k\neq0$), donc $\mathrm{res}_{k\pi}(\cot)=\dfrac{\cos(k\pi)}{\cos(k\pi)}=1$. Et $\mathrm{res}_{k\pi}\big(\frac1{\sin z}\big)=\dfrac1{\cos(k\pi)}=(-1)^k$.
* **Racines de $z^4+1$.** En $\omega=e^{i\pi/4}$ (zéro simple de $q(z)=z^4+1$) : $\mathrm{res}_\omega\Big(\dfrac1{z^4+1}\Big)=\dfrac1{4\omega^3}=\dfrac{\omega}{4\omega^4}=-\dfrac\omega4=-\dfrac{e^{i\pi/4}}4$ (car $\omega^4=-1$). L'astuce $\frac1{4\omega^3}=\frac{\omega}{4\omega^4}$ évite de calculer $\omega^3$.

## Pièges

* > ⚠️ Vérifier que le pôle est **simple** avant d'utiliser $\lim(z-z_0)F(z)$ ou $f(z_0)/q'(z_0)$. Pour un pôle d'ordre $m$, la formule générale (hors poly) est $\mathrm{res}_{z_0}(F)=\dfrac1{(m-1)!}\lim_{z\to z_0}\dfrac{d^{m-1}}{dz^{m-1}}\big[(z-z_0)^mF(z)\big]$ (le coefficient d'indice $m-1$ de la série entière $(z-z_0)^mF$).
* Dans $\frac fq$, si $f(z_0)=0$ aussi, la formule donne $0$ : correct, mais alors $z_0$ est une fausse singularité, pas un pôle.
* La formule $\mathrm{res}(fg)=f(z_0)\,\mathrm{res}(g)$ ne se généralise pas en « $\mathrm{res}(fg)=\mathrm{res}(f)\,\mathrm{res}(g)$ » : le résidu n'est pas multiplicatif ([[ch02-residu-forme-lineaire]]).
* Calculer $q'(z_0)$, pas $q'(z)$ simplifié de travers : pour $q=z^2+a^2$, $q'(ia)=2ia$, d'où un facteur $\frac1{2ia}=-\frac{i}{2a}$ (attention au signe en simplifiant).
