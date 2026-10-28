---
id: ch02-homotopie-simplement-connexe
type: definition
chapter: 2
title: Homotopie, homotopie de chemins / de lacets, ouvert simplement connexe
ref: Définition II.1.1
page: 35
importance: 3
depends: [ch01-def-chemin-lacet]
tags: [homotopie, lacet, simplement-connexe, topologie, deformation]
---
## Intuition

> 💡 Une **homotopie** est un film : à l'instant $s=0$ on voit la courbe $\gamma_0$, à l'instant $s=1$ la courbe $\gamma_1$, et entre les deux la courbe se déforme **continûment sans jamais sortir de $\Omega$**. Un ouvert est **simplement connexe** quand tout lacet (courbe fermée) peut être rétréci continûment jusqu'à un point en restant dans $\Omega$ : il n'y a pas de « trou » qui bloque la contraction.

Image mentale : un élastique posé sur le plan. Dans $\C$ tout entier (ou dans un disque), on peut le contracter sur un point. Dans $\C\setminus\{0\}$, un élastique qui entoure l'origine ne peut pas être ramené à un point sans franchir le trou : $\C\setminus\{0\}$ n'est pas simplement connexe.

Rappels : un **chemin** de $\Omega$ est une application continue, $C^1$ par morceaux, $\gamma:[a,b]\to\Omega$ ; c'est un **lacet** si $\gamma(a)=\gamma(b)$ ([[ch01-def-chemin-lacet]]). Dans ce chapitre, on paramètre les chemins et lacets par $[0,1]$ (quitte à reparamétrer affinement, ce qui ne change pas les intégrales, [[ch01-integrale-reparametrage-oppose-concatenation]]). On note $C([0,1]^2;\Omega)$ l'ensemble des applications continues du carré $[0,1]^2$ dans $\Omega$.

## Énoncé

**Définition (poly, Définition II.1.1, p. 35).** Soient $\Omega$ un ouvert non vide de $\C$ et $\gamma_0,\gamma_1 : [0,1]\to\Omega$ des applications continues. Une **homotopie** entre $\gamma_0$ et $\gamma_1$ dans $\Omega$ est une application $\gamma\in C([0,1]^2;\Omega)$ telle que
$$
\gamma(0,t)=\gamma_0(t) \quad\text{et}\quad \gamma(1,t)=\gamma_1(t) \qquad \text{pour tout } t\in[0,1].
$$
On dit que $\gamma_0$ et $\gamma_1$ sont **homotopes**.

Si $\gamma_0$ et $\gamma_1$ sont des chemins, on dit que $\gamma$ est une **homotopie de chemins**. Si l'on demande de plus
$$
\gamma(s,0)=\gamma(s,1) \qquad \text{pour tout } s\in[0,1]
$$
(en particulier $\gamma_0$ et $\gamma_1$ sont des lacets), on dit que $\gamma$ est une **homotopie de lacets** : le point base $\gamma(s,0)$ a ici le droit de se déplacer avec $s$, c'est pourquoi on parle aussi d'**homotopie libre de lacets**. C'est cette seconde notion, plus souple, qu'utilise le théorème d'invariance [[ch02-invariance-homotopie-integrale]].

On dit que $\Omega$ est **simplement connexe** s'il est connexe et si tout lacet $\gamma$ de $\Omega$ est homotope à un lacet constant (par une homotopie de lacets, voir le piège ci-dessous).

*Précision du poly (p. 36).* Dans la définition de l'homotopie entre chemins, on n'exige **pas** que $t\mapsto\gamma(s,t)$ soit un chemin (c'est-à-dire $C^1$ par morceaux) pour tout $s\in[0,1]$ : les courbes intermédiaires sont seulement continues. Mais dans le cas des lacets, on exige la condition $\gamma(s,0)=\gamma(s,1)$.

## Hypothèses

### H1 — $\Omega$ ouvert non vide, et l'homotopie reste dans $\Omega$

**Rôle.** La condition $\gamma(s,t)\in\Omega$ pour **tout** $(s,t)$ est toute la substance de la définition : une déformation est toujours possible dans $\C$ (voir l'exemple 1), ce qui compte est qu'elle évite les trous de $\Omega$. Le fait que $\Omega$ soit ouvert sert dans les théorèmes qui suivent (fonctions holomorphes sur $\Omega$).

**Si on la retire.** Si l'on autorisait l'homotopie à sortir de $\Omega$, tout lacet serait homotope à un lacet constant (dans $\C$, prendre $\gamma(s,t)=(1-s)\gamma_0(t)+s\,\gamma_0(0)$) et la notion serait vide.

### H2 — condition de lacet $\gamma(s,0)=\gamma(s,1)$

**Rôle.** Elle garantit que chaque courbe intermédiaire $\gamma_s=\gamma(s,\cdot)$ est fermée. C'est ce qui fait fonctionner le théorème d'invariance par homotopie [[ch02-invariance-homotopie-integrale]] (les contributions du chemin $v(s)=\gamma(s,0)=\gamma(s,1)$ s'annulent).

**Si on la retire.** Sans cette condition, tout lacet $\gamma_0$ est homotope (comme chemin) au chemin constant $\gamma_0(0)$ : $\gamma(s,t):=\gamma_0((1-s)t)$ est continue, à valeurs dans $\Omega$, vaut $\gamma_0(t)$ en $s=0$ et $\gamma_0(0)$ en $s=1$. La définition de « simplement connexe » serait alors satisfaite par tout ouvert connexe, y compris $\C\setminus\{0\}$. Avec la condition de lacet, cette homotopie n'est pas admissible car $\gamma(s,1)=\gamma_0(1-s)\ne\gamma_0(0)=\gamma(s,0)$ en général.

### H3 — « simplement connexe » exige « connexe »

**Rôle.** C'est une convention de la définition : on veut un ouvert « d'un seul tenant et sans trou ».

**Si on la retire.** La réunion de deux disques disjoints $D(0,1)\cup D(3,1)$ vérifie « tout lacet est homotope à un lacet constant » (tout lacet, étant connexe, est contenu dans un seul des deux disques, convexe, voir [[ch02-etoile-simplement-connexe]]) mais n'est pas connexe, donc n'est **pas** simplement connexe au sens du poly.

## Exemples

1. **Homotopie linéaire.** Si $\Omega$ est convexe (un disque, un demi-plan, $\C$) et si $\gamma_0,\gamma_1:[0,1]\to\Omega$ sont continues, alors
$$
\gamma(s,t):=(1-s)\gamma_0(t)+s\,\gamma_1(t)
$$
est une homotopie entre $\gamma_0$ et $\gamma_1$ : elle est continue, $\gamma(s,t)$ est sur le segment $[\gamma_0(t),\gamma_1(t)]\subset\Omega$ par convexité, et $\gamma(0,\cdot)=\gamma_0$, $\gamma(1,\cdot)=\gamma_1$. Si $\gamma_0$ et $\gamma_1$ sont des lacets, c'est une homotopie de lacets car $\gamma(s,0)=(1-s)\gamma_0(0)+s\gamma_1(0)=(1-s)\gamma_0(1)+s\gamma_1(1)=\gamma(s,1)$. En prenant $\gamma_1$ constant, on voit que **tout ouvert convexe est simplement connexe** (il est connexe car connexe par arcs). Plus généralement, tout ouvert étoilé l'est : [[ch02-etoile-simplement-connexe]].

2. **$\C\setminus\{0\}$ n'est pas simplement connexe.** Il est connexe (par arcs : on joint deux points par un segment, ou par un segment et un arc de cercle si le segment passe par $0$). Mais le cercle $\gamma_0(t)=e^{2i\pi t}$ n'est homotope à aucun lacet constant dans $\C\setminus\{0\}$ : s'il l'était, le théorème d'invariance [[ch02-invariance-homotopie-integrale]] appliqué à $f(z)=1/z\in\Hol(\C\setminus\{0\})$ donnerait $\int_{\gamma_0}\frac{dz}{z}=\int_{c}\frac{dz}{z}=0$ (l'intégrale sur un lacet constant $c$ est nulle car $c'=0$), alors que
$$
\int_{\gamma_0}\frac{dz}{z}=\int_0^1\frac{2i\pi e^{2i\pi t}}{e^{2i\pi t}}\,dt=2i\pi\neq0 .
$$
Le même argument montre que le disque épointé $D(0,1)\setminus\{0\}$ et la couronne $\{1<|z|<2\}$ (avec le cercle $\gamma_0(t)=\tfrac32e^{2i\pi t}$) ne sont pas simplement connexes.

3. **Deux lacets homotopes dans $\C\setminus\{0\}$.** Le cercle $\gamma_0(t)=e^{2i\pi t}$ et le cercle $\gamma_1(t)=2e^{2i\pi t}$ sont homotopes dans $\C\setminus\{0\}$ par $\gamma(s,t)=(1+s)e^{2i\pi t}$ : on a $|\gamma(s,t)|=1+s\geq1$, donc $\gamma$ ne passe jamais par $0$, et $\gamma(s,0)=1+s=\gamma(s,1)$. En revanche le cercle $\gamma_0$ et le cercle $\tilde\gamma(t)=3+e^{2i\pi t}$ (qui n'entoure pas $0$) ne sont pas homotopes dans $\C\setminus\{0\}$ : $\int_{\gamma_0}dz/z=2i\pi$ alors que $\int_{\tilde\gamma}dz/z=0$ ($1/z$ a une primitive sur le disque $D(3,2)$ qui contient $\tilde\gamma$, [[ch01-primitive-locale]] et [[ch01-integrale-primitive]]).

## Pièges

* > ⚠️ Dans « simplement connexe », *homotope à un lacet constant* signifie **par une homotopie de lacets** ($\gamma(s,0)=\gamma(s,1)$ pour tout $s$). Sans cette condition, tout lacet serait homotope à un point (voir H2) et la définition serait vide.
* > ⚠️ Une homotopie doit rester dans $\Omega$ à **tout** instant $s$ et pour **tout** $t$. Deux lacets de $\Omega$ homotopes dans $\C$ ne le sont pas forcément dans $\Omega$ (exemples 2 et 3).
* Les courbes intermédiaires $\gamma(s,\cdot)$ ne sont que continues, pas nécessairement $C^1$ par morceaux : on ne peut pas, en général, écrire $\int_{\gamma(s,\cdot)}f(z)\,dz$ pour $0<s<1$. C'est pour cela que la preuve du théorème d'invariance remplace les chemins intermédiaires par des chemins affines par morceaux.
* « Simplement connexe » inclut « connexe » : deux disques disjoints ne sont pas simplement connexes (H3).
* Ne pas confondre *connexe* (d'un seul tenant) et *simplement connexe* (d'un seul tenant **et** sans trou) : $\C\setminus\{0\}$ est connexe mais pas simplement connexe.
* « Simplement connexe » n'est pas « étoilé » : étoilé $\Rightarrow$ simplement connexe ([[ch02-etoile-simplement-connexe]]), mais la réciproque est fausse ([[ch02-ouvert-etoile-def]]).
* Le point base d'une homotopie **libre** de lacets peut bouger ; dans la Remarque II.1.4 du poly (groupe fondamental $\pi_1(\Omega)$, [[ch02-groupe-fondamental-remarque]]) le point base est au contraire fixé. Pour « simplement connexe », les deux points de vue donnent la même notion, mais ce n'est pas évident et ce n'est pas démontré dans le poly.
