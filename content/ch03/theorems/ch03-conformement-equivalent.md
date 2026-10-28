---
id: ch03-conformement-equivalent
type: definition
chapter: 3
title: Transformation conforme ; ouverts conformément équivalents
ref: non numéroté, section III.4, p. 66
page: 66
importance: 2
depends: [ch01-def-biholomorphisme, ch01-bijection-holomorphe-reciproque-holomorphe]
tags: [transformation-conforme, biholomorphisme, riemann, disque-unite]
---
## Intuition

> 💡 Deux ouverts sont **conformément équivalents** quand on peut passer de l'un à l'autre par une « déformation » holomorphe bijective : du point de vue de l'analyse complexe, ils sont **indiscernables** (une fonction holomorphe sur l'un se transporte en une fonction holomorphe sur l'autre, et réciproquement). Le disque unité $\mathbb D=D(0,1)$ sert de modèle : le théorème de Riemann ([[ch03-riemann-representation-conforme]]) dit que presque tous les ouverts « sans trou » sont, à ce point de vue, des disques déguisés.

Rappels. Un **biholomorphisme** $h:\Omega_1\to\Omega_2$ entre deux ouverts de $\C$ est une bijection holomorphe dont la réciproque est holomorphe ([[ch01-def-biholomorphisme]]) ; d'après la Remarque I.14.3 ([[ch01-bijection-holomorphe-reciproque-holomorphe]]), il suffit qu'elle soit holomorphe et bijective. Le mot « conforme » vient de ce qu'une fonction holomorphe de dérivée non nulle conserve les angles orientés ([[ch01-similitude-conforme]]) ; un biholomorphisme a une dérivée qui ne s'annule jamais.

## Énoncé

**Définition (poly, section III.4, p. 66).** Lorsqu'un ouvert $\Omega$ de $\C$ est l'image par un biholomorphisme du disque unité $\mathbb D=D(0,1)$, on utilise la terminologie de **transformation conforme** pour ce biholomorphisme, et on dit que $\Omega$ est **conformément équivalent** au disque unité $\mathbb D$.

Plus généralement (usage du chapitre IV et de la Remarque III.4.2), deux ouverts $\Omega_1,\Omega_2$ de $\C$ sont dits **conformément équivalents** s'il existe un biholomorphisme $h:\Omega_1\to\Omega_2$.

## Hypothèses

### H1 — Il s'agit d'un biholomorphisme **global**

Une transformation conforme au sens de III.4 est une **bijection** holomorphe de tout $\Omega_1$ sur tout $\Omega_2$ (de réciproque holomorphe, ce qui est automatique). Ce n'est pas la même chose qu'une fonction holomorphe de dérivée non nulle, qui n'est qu'un biholomorphisme **local** ([[ch01-inversion-locale-holomorphe]]) : $\exp$ a une dérivée qui ne s'annule pas sur $\C$, conserve les angles en tout point, mais n'est pas injective ($e^{z+2i\pi}=e^z$), donc n'est pas une transformation conforme de $\C$ sur $\exp(\C)=\C^\times$.

### H2 — Relation d'équivalence

« Être conformément équivalent » est une relation d'équivalence sur les ouverts de $\C$ : $\id_\Omega$ (réflexivité), $h^{-1}$ est holomorphe (symétrie, c'est ici que sert la Remarque I.14.3), et la composée de deux biholomorphismes en est un (transitivité, [[ch01-stabilite-operations]]). C'est ce qui permet de dire « $\Omega$ est conformément équivalent à $\mathbb D$ » ou « $\mathbb D$ est conformément équivalent à $\Omega$ » indifféremment, et d'enchaîner des transformations (exemples ci-dessous).

### H3 — Invariants topologiques

Un biholomorphisme est en particulier un **homéomorphisme**. Donc deux ouverts conformément équivalents ont les mêmes propriétés topologiques : connexité, simple connexité (si $\gamma$ est un lacet de $\Omega_1$ et $H$ une homotopie de $h\circ\gamma$ vers un lacet constant dans $\Omega_2$, alors $h^{-1}\circ H$ est une homotopie de $\gamma$ vers un lacet constant dans $\Omega_1$), etc. Ainsi un ouvert conformément équivalent à $\mathbb D$ est forcément connexe et simplement connexe ([[ch02-homotopie-simplement-connexe]]). La réciproque est fausse au niveau topologique seul : voir le piège sur $\C$ ci-dessous.

## Exemples

* **Disques.** $z\mapsto z_0+rz$ est un biholomorphisme de $\mathbb D$ sur $D(z_0,r)$ (affine, de réciproque $w\mapsto(w-z_0)/r$) : tout disque est conformément équivalent à $\mathbb D$.
* **Demi-plan de Poincaré.** $H=\{\Im(z)>0\}$. Pour $w\in\C\setminus\{-i\}$, $\abs{\frac{w-i}{w+i}}<1\iff|w-i|^2<|w+i|^2\iff-2\Im(w)<2\Im(w)\iff\Im(w)>0$. Donc $c:w\mapsto\frac{w-i}{w+i}$ envoie $H$ dans $\mathbb D$ ; elle est bijective de $H$ sur $\mathbb D$, de réciproque $z\mapsto i\frac{1+z}{1-z}$ (résoudre $z(w+i)=w-i$). C'est (au signe près) la transformation de Cayley ([[ch01-cayley-disque-demi-plan]]) ; d'où la Remarque III.4.2 ([[ch03-riemann-demi-plan]]).
* **Bande.** $B=\{0<\Im(z)<\pi\}$. $\exp(x+iy)=e^xe^{iy}$ avec $x\in\R$, $y\in\,]0,\pi[$ décrit exactement $H$ (module quelconque $>0$, argument dans $]0,\pi[$), une fois et une seule. Donc $\exp:B\to H$ est un biholomorphisme et $z\mapsto\frac{e^z-i}{e^z+i}$ est une transformation conforme de $B$ sur $\mathbb D$ (transitivité, H2).
* **Plan fendu.** $\Omega=\C\setminus\R_-$. La racine carrée principale $\sqrt z=e^{\frac12\mathrm{Log}(z)}$ ([[ch02-puissance-complexe-def]]) est un biholomorphisme de $\Omega$ sur le demi-plan $\{\Re(w)>0\}$ (argument divisé par $2$ : de $]-\pi,\pi[$ à $]-\frac\pi2,\frac\pi2[$), et $w\mapsto\frac{w-1}{w+1}$ envoie $\{\Re(w)>0\}$ sur $\mathbb D$ (car $|w-1|<|w+1|\iff\Re(w)>0$). Donc $h(z)=\frac{\sqrt z-1}{\sqrt z+1}$ est une transformation conforme de $\Omega$ sur $\mathbb D$, avec $h(1)=0$.

## Pièges

* > ⚠️ **$\C$ n'est pas conformément équivalent à $\mathbb D$**, bien qu'il lui soit **homéomorphe** ($z\mapsto\frac{z}{1+|z|}$ est un homéomorphisme de $\C$ sur $\mathbb D$, de réciproque $w\mapsto\frac{w}{1-|w|}$, mais il n'est pas holomorphe). En effet une fonction holomorphe $\C\to\mathbb D$ est bornée donc constante ([[ch01-liouville]]). C'est pourquoi Riemann exclut $\Omega=\C$.
* > ⚠️ Deux sens du mot « conforme » : au chapitre IV ([[ch04-transformation-conforme-def]]), une transformation conforme est une application qui **conserve les angles** (notion locale, satisfaite par toute $f$ holomorphe avec $f'\ne0$) ; en III.4 c'est un **biholomorphisme** (notion globale). Toujours vérifier la bijectivité.
* Le biholomorphisme n'est jamais unique : si $h:\Omega\to\mathbb D$ en est un, $\lambda f_a\circ h$ ($|\lambda|=1$, $a\in\mathbb D$) en est un autre, où $f_a(z)=\frac{z-a}{1-\bar az}$ ([[ch01-automorphismes-disque]]).
* Ne pas confondre « image de $\mathbb D$ par un biholomorphisme » et « image de $\mathbb D$ par une fonction holomorphe » : $z\mapsto z^2$ envoie $\mathbb D$ sur $\mathbb D$ sans être injective ; ce n'est pas une transformation conforme.
* Une couronne $\{1<|z|<2\}$ ou $\C^\times$ n'est pas conformément équivalente à $\mathbb D$ : elle n'est pas simplement connexe (H3).
