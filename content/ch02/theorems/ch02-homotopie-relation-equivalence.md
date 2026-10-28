---
id: ch02-homotopie-relation-equivalence
type: lemma
chapter: 2
title: L'homotopie de lacets est une relation d'équivalence
ref: Lemme II.1.3
page: 36
importance: 1
depends: [ch02-homotopie-simplement-connexe]
tags: [homotopie, lacet, relation-equivalence, recollement]
---
## Intuition

> 💡 « Pouvoir déformer continûment $\gamma_0$ en $\gamma_1$ » se comporte comme une égalité : on peut ne rien faire (réflexivité), jouer le film à l'envers (symétrie), et enchaîner deux films (transitivité). C'est ce qui autorise à parler de **classes d'homotopie** de lacets, et donc du groupe fondamental ([[ch02-groupe-fondamental-remarque]]).

Rappel : une **homotopie de lacets** entre deux lacets $\gamma_0,\gamma_1:[0,1]\to\Omega$ est une application continue $\gamma:[0,1]^2\to\Omega$ avec $\gamma(0,\cdot)=\gamma_0$, $\gamma(1,\cdot)=\gamma_1$ et $\gamma(s,0)=\gamma(s,1)$ pour tout $s$ ([[ch02-homotopie-simplement-connexe]]). La variable $s$ est le « temps » de la déformation, $t$ le paramètre le long de la courbe.

## Énoncé

**Lemme (poly, Lemme II.1.3, p. 36).** Soit $\Omega$ un ouvert non vide de $\C$. La relation « il existe une homotopie de lacets entre $\gamma_0$ et $\gamma_1$ » est une relation d'équivalence sur l'ensemble des lacets de $\Omega$ (paramétrés par $[0,1]$).

## Hypothèses

### H1 — les lacets et les homotopies vivent dans le même ouvert $\Omega$

**Rôle.** Le renversement et le recollement de deux homotopies à valeurs dans $\Omega$ restent à valeurs dans $\Omega$ ; la relation est bien définie sur les lacets de $\Omega$.

**Si on la retire.** Ce n'est pas une hypothèse restrictive mais le cadre de la définition : la relation dépend de $\Omega$ (deux lacets peuvent être homotopes dans $\C$ sans l'être dans $\C\setminus\{0\}$, voir [[ch02-homotopie-simplement-connexe]]), mais pour chaque $\Omega$ fixé c'est une relation d'équivalence.

### H2 — homotopies **de lacets** ($\gamma(s,0)=\gamma(s,1)$)

**Rôle.** La condition $\gamma(s,0)=\gamma(s,1)$ doit être conservée par renversement $s\mapsto1-s$ et par recollement : on le vérifie dans la preuve.

**Si on la retire.** La conclusion reste vraie et la preuve est la même : l'homotopie de chemins (sans condition aux extrémités), ou l'homotopie générale de la Remarque II.1.2 ([[ch02-homotopie-generale-remarque]]), est aussi une relation d'équivalence. L'hypothèse est donc de confort (c'est la notion dont on a besoin ensuite).

## Idée de la preuve

Réflexivité : l'homotopie constante en $s$. Symétrie : renverser le temps $s\mapsto 1-s$. Transitivité : jouer la première homotopie à vitesse double sur $s\in[0,\frac12]$ puis la seconde sur $s\in[\frac12,1]$ ; les deux formules coïncident en $s=\frac12$, d'où la continuité (recollement sur deux fermés).

## Preuve

Notons $\gamma_0\sim\gamma_1$ s'il existe une homotopie de lacets entre $\gamma_0$ et $\gamma_1$ dans $\Omega$.

**Réflexivité.** Soit $\gamma_0$ un lacet de $\Omega$. L'application $\gamma(s,t):=\gamma_0(t)$ est continue sur $[0,1]^2$ (composée de $(s,t)\mapsto t$ et de $\gamma_0$), à valeurs dans $\Omega$, vérifie $\gamma(0,\cdot)=\gamma(1,\cdot)=\gamma_0$ et $\gamma(s,0)=\gamma_0(0)=\gamma_0(1)=\gamma(s,1)$ car $\gamma_0$ est un lacet. Donc $\gamma_0\sim\gamma_0$.

**Symétrie.** Soit $\gamma$ une homotopie de lacets entre $\gamma_0$ et $\gamma_1$. Posons $\tilde\gamma(s,t):=\gamma(1-s,t)$. Elle est continue (composée de $\gamma$ avec l'application continue $(s,t)\mapsto(1-s,t)$ de $[0,1]^2$ dans lui-même), à valeurs dans $\Omega$, et $\tilde\gamma(0,t)=\gamma(1,t)=\gamma_1(t)$, $\tilde\gamma(1,t)=\gamma(0,t)=\gamma_0(t)$, $\tilde\gamma(s,0)=\gamma(1-s,0)=\gamma(1-s,1)=\tilde\gamma(s,1)$. Donc $\tilde\gamma$ est une homotopie de lacets entre $\gamma_1$ et $\gamma_0$ : $\gamma_1\sim\gamma_0$.

**Transitivité.** Soient trois lacets $\gamma_1,\gamma_2,\gamma_3$ et des homotopies de lacets $\gamma_{1,2}$ entre $\gamma_1$ et $\gamma_2$, $\gamma_{2,3}$ entre $\gamma_2$ et $\gamma_3$. On définit
$$
\gamma(s,t):=\begin{cases}\gamma_{1,2}(2s,t) & \text{si } s\leq\tfrac12,\\ \gamma_{2,3}(2s-1,t) & \text{si } s\geq\tfrac12.\end{cases}
$$
Les deux formules sont compatibles en $s=\tfrac12$ : $\gamma_{1,2}(1,t)=\gamma_2(t)=\gamma_{2,3}(0,t)$, donc $\gamma$ est bien définie. Elle est continue : sa restriction à chacun des deux fermés $[0,\tfrac12]\times[0,1]$ et $[\tfrac12,1]\times[0,1]$ est continue (composée d'une homotopie continue et d'une application affine), et une application dont les restrictions à deux fermés recouvrant l'espace sont continues est continue (l'image réciproque d'un fermé est la réunion de deux fermés). Elle est à valeurs dans $\Omega$. Enfin $\gamma(0,t)=\gamma_{1,2}(0,t)=\gamma_1(t)$, $\gamma(1,t)=\gamma_{2,3}(1,t)=\gamma_3(t)$, et pour tout $s$, $\gamma(s,0)=\gamma(s,1)$ puisque c'est vrai pour $\gamma_{1,2}$ et $\gamma_{2,3}$. Donc $\gamma$ est une homotopie de lacets entre $\gamma_1$ et $\gamma_3$ : $\gamma_1\sim\gamma_3$. $\square$

## Preuve à trous

**Réflexivité** : $\gamma(s,t):=\gamma_0(t)$ convient. **Symétrie** : si $\gamma$ va de $\gamma_0$ à $\gamma_1$, alors <trou indice="jouer le film à l'envers">$\tilde\gamma(s,t):=\gamma(1-s,t)$</trou> est une homotopie de lacets de $\gamma_1$ à $\gamma_0$ (la condition $\tilde\gamma(s,0)=\tilde\gamma(s,1)$ est héritée de $\gamma$). **Transitivité** : avec $\gamma_{1,2}$ de $\gamma_1$ à $\gamma_2$ et $\gamma_{2,3}$ de $\gamma_2$ à $\gamma_3$, on pose <trou indice="vitesse double sur chaque moitié du temps">$\gamma(s,t):=\gamma_{1,2}(2s,t)$ si $s\le\frac12$ et $\gamma_{2,3}(2s-1,t)$ si $s\ge\frac12$</trou>. C'est bien défini car <trou indice="que valent les deux formules en $s=1/2$ ?">$\gamma_{1,2}(1,t)=\gamma_2(t)=\gamma_{2,3}(0,t)$</trou>, et continu car <trou indice="recollement">ses restrictions aux deux fermés $[0,\frac12]\times[0,1]$ et $[\frac12,1]\times[0,1]$, qui recouvrent le carré, sont continues</trou>. Les conditions $\gamma(0,\cdot)=\gamma_1$, $\gamma(1,\cdot)=\gamma_3$, $\gamma(s,0)=\gamma(s,1)$ sont immédiates. $\square$

## Exemples

1. **Enchaînement explicite.** Dans $\C\setminus\{0\}$, $\gamma_1(t)=e^{2i\pi t}$ est homotope à $\gamma_2(t)=2e^{2i\pi t}$ par $\gamma_{1,2}(s,t)=(1+s)e^{2i\pi t}$, et $\gamma_2$ est homotope à $\gamma_3(t)=2e^{2i\pi t}+1$ par $\gamma_{2,3}(s,t)=2e^{2i\pi t}+s$ (on a $|2e^{2i\pi t}+s|\geq 2-s\geq1>0$, donc on reste dans $\C\setminus\{0\}$). Le recollement de la preuve donne l'homotopie de lacets
$$
\gamma(s,t)=\begin{cases}(1+2s)e^{2i\pi t} & s\le\frac12,\\ 2e^{2i\pi t}+(2s-1) & s\ge\frac12,\end{cases}
$$
qui vaut bien $2e^{2i\pi t}$ des deux côtés en $s=\frac12$.

2. **Classes d'homotopie dans $\C\setminus\{0\}$.** La relation permet de regrouper les lacets de $\C\setminus\{0\}$ en classes ; l'indice en $0$ ([[ch02-indice-def]]) est constant sur chaque classe ([[ch02-indice-invariance-homotopie]]) : les lacets $e^{2i\pi kt}$ pour $k\in\Z$ sont deux à deux non homotopes dans $\C\setminus\{0\}$.

## Pièges

* Dans le recollement, il ne suffit pas d'écrire la formule : il faut vérifier que les deux expressions **coïncident** en $s=\tfrac12$ et invoquer la continuité d'un recollement sur deux fermés.
* Le reparamétrage $s\mapsto 2s$ est nécessaire : les homotopies sont définies pour $s\in[0,1]$, on ne peut pas les « mettre bout à bout » sans comprimer le temps.
* Le lemme ne dit rien sur le nombre de classes : il y en a une seule si $\Omega$ est simplement connexe, une infinité dans $\C\setminus\{0\}$.
