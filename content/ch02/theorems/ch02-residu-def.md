---
id: ch02-residu-def
type: definition
chapter: 2
title: Résidu d'une fonction méromorphe en un point
ref: Définition II.4.9
page: 45
importance: 3
depends: [ch02-laurent-developpement, ch02-pole-meromorphe-def]
tags: [residu, laurent, pole, coefficient a-1]
---
## Intuition

> 💡 Quand on intègre une série de Laurent $\sum_n a_n(z-z_0)^n$ sur un petit cercle autour de $z_0$, **tous les termes disparaissent sauf un** : $\int_{C(z_0,r)}(z-z_0)^n\,dz=0$ pour $n\neq-1$ (ces fonctions ont une primitive), alors que $\int_{C(z_0,r)}\frac{dz}{z-z_0}=2i\pi$. Le seul coefficient qui « reste » après intégration est $a_{-1}$ : on l'appelle le **résidu**. Toute la puissance de la formule des résidus ([[ch02-formule-residus]]) vient de là : une intégrale se réduit à quelques nombres calculés localement.

Le résidu ne mesure ni la « taille » du pôle ni son ordre : c'est uniquement le coefficient de $\frac1{z-z_0}$. Il peut être nul en un pôle (par exemple $\frac1{z^2}$ en $0$).

Rappel : si $f$ est méromorphe sur $\Omega$ ([[ch02-pole-meromorphe-def]]) et $z_0\in\Omega$, $f$ admet sur un disque épointé $D(z_0,r)^\times$ un **unique** développement de Laurent $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ ([[ch02-laurent-developpement]]).

## Énoncé

**Définition (poly, Définition II.4.9, p. 45).** Avec les notations précédentes ($f$ méromorphe sur $\Omega$, $z_0\in\Omega$, et $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ son développement de Laurent sur un disque épointé $D(z_0,r)^\times$, Proposition II.4.6), on définit $\mathrm{res}_{z_0}(f)$, le **résidu** de $f$ en $z_0$, par la formule
$$
\mathrm{res}_{z_0}(f):=a_{-1}.
$$
(Notation : le poly écrit $\mathrm{res}_{z_0}(f)$ ; on trouve aussi $\Res_{z_0}(f)$ ou $\Res(f,z_0)$ dans d'autres ouvrages.)

## Hypothèses

### H1 — $f\in\mathcal M(\Omega)$ et $z_0\in\Omega$

**Rôle.** Elle garantit l'existence d'un développement de Laurent à partie polaire **finie** sur un disque épointé (Proposition II.4.6). Le résidu est défini en **tout** point de $\Omega$ : si $f$ est holomorphe en $z_0$ (ou si $z_0$ est une fausse singularité), le développement est une série entière et $\mathrm{res}_{z_0}(f)=0$. Il n'est intéressant qu'aux pôles.

**Si on la retire.** Pour $e^{1/z}$ en $0$ (singularité essentielle), il n'existe pas de développement $\sum_{n\ge-m}$ et la définition du poly ne s'applique pas ; l'Exercice II.7.4 ([[ch02-laurent-couronne-cauchy]]) étend la notion via une série de Laurent bilatère $\sum_{n\in\Z}$ (on trouve alors $a_{-1}=1$ pour $e^{1/z}=\sum_{k\ge0}\frac{z^{-k}}{k!}$).

### H2 — Unicité du développement, sur un **petit** disque épointé

**Rôle.** $a_{-1}$ n'est bien défini que parce que le développement de Laurent sur $D(z_0,r)^\times$ est unique (Proposition II.4.6) : tout procédé de calcul (produit ou quotient de séries, éléments simples) donnant un développement $\sum_{n\ge-m}a_n(z-z_0)^n$ valable sur un disque épointé fournit le résidu.

**Si on la retire.** Un développement valable sur une autre couronne ne donne pas le résidu : $f(z)=\dfrac1{z(z-1)}$ vaut $-\dfrac1z-1-z-\dots$ sur $0<|z|<1$ (donc $\mathrm{res}_0(f)=-1$), mais $\dfrac1{z^2}+\dfrac1{z^3}+\dots$ sur $|z|>1$, où le coefficient de $\frac1z$ est $0$.

## Exemples

* **Pôle simple.** $f(z)=\dfrac1{z(z-1)}=\dfrac1{z-1}-\dfrac1z$. En $0$ : $\frac1{z-1}$ est holomorphe en $0$, donc $\mathrm{res}_0(f)=-1$. En $1$ : $-\frac1z$ est holomorphe en $1$, donc $\mathrm{res}_1(f)=1$.
* **Pôle double.** $f(z)=\dfrac{e^z}{z^2}=\dfrac1{z^2}+\dfrac1z+\dfrac12+\dfrac z6+\dots$ : $\mathrm{res}_0(f)=1$ (c'est le coefficient de $z^1$ dans $e^z$). Et $\mathrm{res}_0\big(\frac1{z^2}\big)=0$ bien que $0$ soit un pôle double.
* **Par division de séries.** $\dfrac1{\sin z}=\dfrac1z+\dfrac z6+\dfrac{7z^3}{360}+\dots$ sur $0<|z|<\pi$ : $\mathrm{res}_0\big(\frac1{\sin z}\big)=1$. Et $\dfrac1{z\sin z}=\dfrac1{z^2}+\dfrac16+\dots$ : $\mathrm{res}_0\big(\frac1{z\sin z}\big)=0$ (pôle double, développement pair).
* **Pôle d'ordre 3.** $\dfrac{\cos z}{z^3}=\dfrac1{z^3}-\dfrac1{2z}+\dfrac z{24}-\dots$ : $\mathrm{res}_0=-\frac12$.

Pour les calculs rapides en un pôle simple ($\lim(z-z_0)f(z)$, $f(z_0)/q'(z_0)$), voir [[ch02-residu-pole-simple]] ; pour l'interprétation intégrale, [[ch02-residu-integrale-cercle]] ; la linéarité, [[ch02-residu-forme-lineaire]].

## Pièges

* > ⚠️ Le résidu est le coefficient de $(z-z_0)^{-1}$, pas celui de $z^{-1}$ : pour $\frac1{(z-1)^2}$ en $z_0=1$, il faut développer en puissances de $z-1$ (résidu $0$).
* Le résidu peut être nul en un pôle ; inversement un résidu nul ne prouve pas que $z_0$ est régulier.
* Toujours développer sur un disque épointé **centré en $z_0$ ne contenant aucun autre pôle** (H2).
* Une fonction **paire** autour de $z_0$ (c'est-à-dire $f(z_0+h)=f(z_0-h)$) a un résidu nul en $z_0$ : son développement ne contient que des puissances paires de $(z-z_0)$.
* Ne pas confondre $\mathrm{res}_{z_0}(f)$ avec la limite $\lim(z-z_0)f(z)$ : celle-ci ne donne le résidu qu'en un pôle **simple** (ou un point régulier).
