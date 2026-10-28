---
id: ch01-def-biholomorphisme
type: definition
chapter: 1
title: Biholomorphisme, automorphisme holomorphe
ref: Définition I.4.1
page: 13
importance: 2
depends: [ch01-def-holomorphe, ch01-formules-derivation]
tags: [biholomorphisme, automorphisme, bijection, transformation-conforme]
---
## Intuition

> 💡 Un biholomorphisme est un **changement de coordonnées holomorphe** : une bijection entre deux ouverts qui est holomorphe dans les deux sens. Pour l'analyse complexe, deux ouverts biholomorphes sont « le même ouvert vu autrement » : toute fonction holomorphe sur l'un se transporte en une fonction holomorphe sur l'autre par composition.

C'est l'analogue holomorphe d'un difféomorphisme ($C^1$ bijectif de réciproque $C^1$). Comme une fonction holomorphe est localement une similitude directe là où sa dérivée ne s'annule pas ([[ch01-similitude-conforme]]), un biholomorphisme **conserve les angles** : on parle aussi de **transformation conforme** (chapitre IV). Exemple phare : le disque unité et le demi-plan supérieur sont biholomorphes ([[ch01-cayley-disque-demi-plan]]), alors que l'un est borné et l'autre non.

Rappel : $\Hol(\Omega)$ désigne l'ensemble des fonctions holomorphes sur l'ouvert $\Omega$ ($\C$-dérivables en tout point, de dérivée continue, [[ch01-def-holomorphe]]).

## Énoncé

**Définition (poly, Définition I.4.1, p. 13).** Une fonction holomorphe $h:\Omega_1\to\Omega_2$, où $\Omega_1$ et $\Omega_2$ sont deux ouverts de $\C$, est un **biholomorphisme** si $h$ est une bijection de $\Omega_1$ sur $\Omega_2$ dont la réciproque $h^{-1}$ est holomorphe sur $\Omega_2$.

Un biholomorphisme d'un ouvert $\Omega$ de $\C$ sur lui-même est appelé un **automorphisme (holomorphe)** de $\Omega$. On note $\mathrm{Aut}_{hol}(\Omega)$ l'ensemble des automorphismes de $\Omega$ ; c'est un groupe pour la composition ([[ch01-groupe-automorphismes]]).

On dit que $\Omega_1$ et $\Omega_2$ sont **biholomorphes** s'il existe un biholomorphisme de $\Omega_1$ sur $\Omega_2$.

## Hypothèses

### H1 — $\Omega_1$ et $\Omega_2$ sont des **ouverts**

L'holomorphie de $h$ et de $h^{-1}$ n'a de sens que sur des ouverts ($\C$-dérivabilité en un point = limite d'un taux d'accroissement pour $\omega\to0$ dans toutes les directions). Si $h$ est holomorphe sur $\Omega_1$ et injective, son image $h(\Omega_1)$ est d'ailleurs automatiquement ouverte lorsque $h$ n'est constante sur aucune composante connexe (théorème de l'application ouverte, [[ch01-application-ouverte]]).

### H2 — $h$ est **surjective** sur $\Omega_2$

On demande une bijection de $\Omega_1$ **sur** $\Omega_2$, pas seulement une injection dans $\Omega_2$. Par exemple $z\mapsto z/2$ est holomorphe et injective de $D(0,1)$ dans $D(0,1)$, mais ce n'est pas un automorphisme de $D(0,1)$ (son image est $D(0,\frac12)$) ; c'est en revanche un biholomorphisme de $D(0,1)$ sur $D(0,\frac12)$.

### H3 — $h^{-1}$ holomorphe : condition en fait **automatique**

Le poly montre plus loin (Remarque I.14.3, [[ch01-bijection-holomorphe-reciproque-holomorphe]]) que si $h$ est holomorphe et bijective entre deux ouverts, alors $h'$ ne s'annule pas et $h^{-1}$ est automatiquement holomorphe (via [[ch01-inversion-locale-holomorphe]]). C'est une rigidité **propre au complexe** : en réel, $x\mapsto x^3$ est une bijection $C^\infty$ de $\R$ sur $\R$ dont la réciproque $y\mapsto y^{1/3}$ n'est pas dérivable en $0$. Dans les exercices, on vérifie donc souvent seulement « holomorphe + bijective », en citant ce résultat (ou en calculant $h^{-1}$ explicitement).

**Conséquence immédiate de la définition.** Si $h$ est un biholomorphisme, alors $h'(z)\neq0$ pour tout $z\in\Omega_1$ : en dérivant $h^{-1}\circ h=\mathrm{id}_{\Omega_1}$ par la règle de la chaîne (I.3.4) ([[ch01-formules-derivation]]), $(h^{-1})'(h(z))\,h'(z)=1$. De plus $(h^{-1})'=\dfrac1{h'\circ h^{-1}}$.

## Exemples

* **Applications affines.** Pour $a\in\C^\times$, $b\in\C$, $h(z)=az+b$ est un automorphisme de $\C$, de réciproque $w\mapsto\frac{w-b}{a}$, holomorphe. (On montre à l'Exercice II.7.5, [[ch02-automorphismes-de-c]], que ce sont les seuls.) Les rotations $z\mapsto e^{i\theta}z$ sont des automorphismes du disque $D(0,1)$ ; plus généralement les $z\mapsto\lambda\frac{z-a}{1-\bar az}$, $a\in D(0,1)$, $|\lambda|=1$ ([[ch01-automorphismes-disque]]).
* **Le carré sur un demi-plan.** $h(z)=z^2$ n'est pas injective sur $\C$ ($h(-z)=h(z)$). Mais sa restriction à $\Omega_1=\{\Re(z)>0\}$ est un biholomorphisme sur $\Omega_2=\C\setminus\R_-$ (où $\R_-=\,]-\infty,0]$). En effet, tout $z\in\Omega_1$ s'écrit de façon unique $z=re^{i\theta}$ avec $r>0$, $\theta\in\,]-\frac\pi2,\frac\pi2[$, et $z^2=r^2e^{2i\theta}$ avec $2\theta\in\,]-\pi,\pi[$ : on obtient une bijection sur $\{\rho e^{i\varphi}:\rho>0,\ \varphi\in\,]-\pi,\pi[\}=\C\setminus\R_-$. Comme $h'(z)=2z\ne0$ sur $\Omega_1$, la réciproque (la « racine carrée principale » $\rho e^{i\varphi}\mapsto\sqrt\rho\,e^{i\varphi/2}$) est holomorphe, par H3.
* **L'exponentielle sur une bande.** $\exp$ n'est pas injective sur $\C$ ($e^{z+2i\pi}=e^z$), mais elle réalise un biholomorphisme de la bande $\{x+iy:\ x\in\R,\ -\pi<y<\pi\}$ sur $\C\setminus\R_-$ : $e^{x+iy}=e^xe^{iy}$ avec $e^x$ décrivant $]0,+\infty[$ bijectivement et $e^{iy}$ décrivant le cercle unité privé de $-1$ bijectivement. Sa réciproque est la détermination principale du logarithme ([[ch02-logarithme-determination-principale-def]]).

## Pièges

* > ⚠️ « Biholomorphisme » = holomorphe **et bijective sur l'ouvert d'arrivée** ; préciser toujours les deux ouverts. La même formule peut être un biholomorphisme entre deux ouverts et pas entre deux autres ($z^2$ ci-dessus).
* La conjugaison $z\mapsto\bar z$ est une bijection de $\C$ (et un difféomorphisme $C^\infty$) mais **pas** un biholomorphisme : elle n'est pas holomorphe ([[ch01-exemple-zbar-rez-module]]).
* $h'\neq0$ partout ne suffit pas : $\exp$ a une dérivée qui ne s'annule jamais mais n'est pas injective. On n'obtient alors qu'un biholomorphisme **local** ([[ch01-inversion-locale-holomorphe]], [[ch01-sens-de-local]]).
* $\C$ et $D(0,1)$ sont difféomorphes (au sens réel) mais **pas** biholomorphes : un biholomorphisme $\C\to D(0,1)$ serait une fonction entière bornée non constante, ce qu'interdit Liouville ([[ch01-liouville]]).
