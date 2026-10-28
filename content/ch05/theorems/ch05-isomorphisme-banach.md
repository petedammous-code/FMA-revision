---
id: ch05-isomorphisme-banach
type: theorem
chapter: 5
title: Théorème d'isomorphisme de Banach
ref: Théorème V.2.3
page: 97
importance: 2
depends: [ch05-application-ouverte, ch05-norme-operateur-def]
tags: [banach, isomorphisme, inverse-continu, application-ouverte]
---
## Intuition

> 💡 Entre deux espaces de Banach, une bijection linéaire continue a **automatiquement** un inverse continu. On n'a jamais besoin de vérifier à la main que $f^{-1}$ est continue : la complétude des deux côtés suffit.

Pourquoi ce n'est pas évident : en dimension infinie, un inverse linéaire peut ne pas être continu (une application peut « écraser » certaines directions de plus en plus fort, comme $t^n\mapsto t^n$ de la norme sup vers la norme $L^1$, où $\|t^n\|_1=\frac1{n+1}\to0$ alors que $\|t^n\|_\infty=1$). Le théorème de l'application ouverte ([[ch05-application-ouverte]]) interdit cela quand $E$ et $F$ sont complets : l'image de la boule unité contient une boule $B_F(0,c)$, ce qui est exactement une borne $\|f^{-1}\|\le\frac1c$.

Un **isomorphisme linéaire** est une application linéaire bijective ; on dit qu'il est **bicontinu** si $f$ et $f^{-1}$ sont continues. La norme $\|f^{-1}\|$ est la norme d'opérateur ([[ch05-norme-operateur-def]]).

## Énoncé

**Théorème (poly, Théorème V.2.3, p. 97).** Soient $E$ et $F$ des espaces de Banach, et soit $f:E\to F$ un isomorphisme linéaire, continu. Alors son inverse $f^{-1}:F\to E$ est continu.

**Précision (preuve du poly).** Si $c>0$ vérifie $B_F(0,c)\subset f(B_E(0,1))$ (un tel $c$ existe par le théorème de l'application ouverte), alors $\|f^{-1}\|\le\dfrac1c$.

## Hypothèses

### H1 — $E$ de Banach

**Rôle.** Elle est requise pour appliquer le théorème de l'application ouverte (convergence de la série des approximations successives dans $E$).

**Si on la retire.** Soit $F$ un Banach de dimension infinie et $\varphi$ une forme linéaire non continue sur $F$ (il en existe par l'axiome du choix, via une base algébrique). La norme $N(x)=\|x\|_F+|\varphi(x)|$ sur l'espace vectoriel $F$ rend $\mathrm{Id}:(F,N)\to(F,\|\cdot\|_F)$ bijective, linéaire, continue ($\|x\|_F\le N(x)$). Si son inverse était continu, on aurait $|\varphi(x)|\le N(x)\le C\|x\|_F$, et $\varphi$ serait continue : contradiction. Ici l'espace de départ $(F,N)$ n'est pas complet.

### H2 — $F$ de Banach

**Rôle.** Requise pour le théorème de Baire dans $F$, au cœur de l'application ouverte.

**Si on la retire.** $f=\mathrm{Id}:(C([0,1]),\|\cdot\|_\infty)\to(C([0,1]),\|\cdot\|_1)$ est linéaire, bijective, continue car $\|g\|_1=\int_0^1|g|\le\|g\|_\infty$. Son inverse n'est pas continu : $g_n(t)=t^n$ vérifie $\|g_n\|_1=\frac1{n+1}\to0$ mais $\|f^{-1}(g_n)\|_\infty=1$. L'espace d'arrivée $(C([0,1]),\|\cdot\|_1)$ n'est pas complet.

### H3 — $f$ bijective (isomorphisme linéaire)

**Rôle.** La surjectivité permet d'appliquer l'application ouverte ; l'injectivité permet de parler de $f^{-1}$ et d'identifier l'antécédent fourni par l'application ouverte à $f^{-1}(y)$.

**Si on la retire.** Sans surjectivité, on peut considérer $f^{-1}:f(E)\to E$ ; la conclusion peut alors tomber. L'inclusion $f:\ell^1\to\ell^2$ (suites sommables vers suites de carré sommable, normes $\|x\|_1=\sum|x_n|$, $\|x\|_2=(\sum x_n^2)^{1/2}$) est linéaire, injective, continue ($\|x\|_2\le\|x\|_1$), mais pour $u_n=e_1+\dots+e_n$ on a $\|u_n\|_2=\sqrt n$ et $\|f^{-1}(u_n)\|_1=n$ : $f^{-1}:f(\ell^1)\to\ell^1$ n'est pas continue (le rapport $\sqrt n$ n'est pas borné). Ici $f(\ell^1)$ n'est pas fermé dans $\ell^2$, donc pas complet. (Si $f$ est injective continue d'image **fermée**, $f(E)$ est un Banach et le théorème s'applique à $f:E\to f(E)$.)

### H4 — $f$ continue

**Rôle.** Requise par l'application ouverte (passage à la limite $f(\sum x_n)=\sum f(x_n)$).

**Si on la retire.** Avec $F$, $\varphi$ comme en H1 et $x_0\in\ker\varphi$, $x_0\ne0$ : $g(y)=y-\varphi(y)x_0$ est un isomorphisme linéaire du Banach $F$ sur lui-même, d'inverse $x\mapsto x+\varphi(x)x_0$, et cet inverse n'est pas continu (sinon $\varphi$ le serait). Bien sûr, le théorème appliqué à $f^{-1}$ montre qu'une bijection linéaire entre Banach a $f$ et $f^{-1}$ toutes deux continues ou toutes deux discontinues.

## Idée de la preuve

L'application ouverte donne $c>0$ avec $B_F(0,c)\subset f(B_E(0,1))$ : tout $y$ de norme $<c$ a son (unique) antécédent de norme $<1$. Par homogénéité, $\|f^{-1}(y)\|\le\frac1c\|y\|$.

## Preuve

L'application $f^{-1}$ est linéaire (inverse d'une bijection linéaire). Comme $f$ est linéaire, continue, surjective entre Banach, le théorème de l'application ouverte ([[ch05-application-ouverte]]) fournit $c>0$ tel que
$$
B_F(0,c)\subset f\big(B_E(0,1)\big).
$$
Soit $y\in F$, $y\ne0$, et $t\in\,]0,c[$. Le vecteur $y'=\dfrac{t}{\|y\|}\,y$ est de norme $t<c$, donc il existe $x\in B_E(0,1)$ avec $f(x)=y'$ ; par injectivité, $x=f^{-1}(y')$, d'où $\|f^{-1}(y')\|_E<1$. Par linéarité de $f^{-1}$,
$$
\|f^{-1}(y)\|_E=\frac{\|y\|_F}{t}\,\|f^{-1}(y')\|_E<\frac{\|y\|_F}{t}.
$$
En faisant $t\to c$ : $\|f^{-1}(y)\|_E\le\frac1c\|y\|_F$, inégalité encore vraie pour $y=0$. Donc $f^{-1}$ est bornée, i.e. continue ([[ch05-norme-operateur-def]]), et $\|f^{-1}\|\le\frac1c$. $\square$

## Preuve à trous

$f^{-1}$ est linéaire. Par <trou indice="E, F Banach, f linéaire continue surjective">le théorème de l'application ouverte, il existe $c>0$ tel que $B_F(0,c)\subset f(B_E(0,1))$</trou>. Soit $y\ne0$ et $t\in\,]0,c[$ : le vecteur <trou indice="normaliser y pour le faire entrer dans la boule">$y'=\frac{t}{\|y\|}y$ est dans $B_F(0,c)$</trou>, donc son unique antécédent vérifie <trou>$\|f^{-1}(y')\|<1$, d'où $\|f^{-1}(y)\|<\|y\|/t$</trou>. En faisant $t\to c$ : $\|f^{-1}(y)\|\le\frac1c\|y\|$, donc $f^{-1}$ est continue et $\|f^{-1}\|\le\frac1c$. $\square$

## Exemples

* **Opérateur de Volterra.** Sur $E=F=(C([0,1]),\|\cdot\|_\infty)$, soit $f(u)(t)=u(t)+\int_0^tu(s)\,ds$. $f$ est linéaire continue ($\|f(u)\|_\infty\le2\|u\|_\infty$). Elle est bijective : pour $h\in F$, poser $w(t)=\int_0^te^{s-t}h(s)\,ds$ (solution de $w'+w=h$, $w(0)=0$) et $u=h-w$ ; alors $\int_0^tu=w$ (car $w'=h-w=u$ et $w(0)=0$), donc $f(u)=u+w=h$ ; et si $f(u)=0$, $W=\int_0^tu$ vérifie $W'+W=0$, $W(0)=0$, donc $W=0$ et $u=W'=0$. Le théorème garantit la continuité de $f^{-1}$ ; ici on la vérifie directement : $\|f^{-1}(h)\|_\infty\le\|h\|_\infty+\sup_t\int_0^te^{s-t}ds\,\|h\|_\infty=\big(2-e^{-1}\big)\|h\|_\infty$.
* **Normes comparables.** Si un même espace $E$ est complet pour deux normes et $\|x\|_1\le k\|x\|_2$, alors $\mathrm{Id}:(E,\|\cdot\|_2)\to(E,\|\cdot\|_1)$ est un isomorphisme continu, donc d'inverse continu : les normes sont équivalentes ([[ch05-normes-comparables-equivalentes]]).
* **Calcul différentiel.** Dans la définition de $\mathrm{Iso}(E;F)$ (isomorphismes bicontinus entre Banach, Théorème V.5.7), il suffit de demander « continu et inversible » (Remarque V.5.8, p. 109 ; [[ch05-iso-bicontinu-automatique]]). De même, dans le théorème d'inversion locale ([[ch06-inversion-locale]]), il suffit de vérifier que $df_a$ est une bijection linéaire continue.

## Pièges

* > ⚠️ Les deux espaces doivent être **complets** : l'exemple $\|\cdot\|_\infty\to\|\cdot\|_1$ sur $C([0,1])$ est le contre-exemple à connaître.
* Le théorème ne donne **pas** de valeur explicite de $\|f^{-1}\|$ (le $c$ de Baire n'est pas constructif) : pour une estimation, il faut calculer (série de Neumann, résolution explicite...).
* En dimension finie, le résultat est trivial (toute application linéaire est continue) ; il n'a d'intérêt qu'en dimension infinie.
* Ne pas confondre avec la série de Neumann ([[ch05-serie-neumann]]), qui montre l'**inversibilité** de $\mathrm{Id}-h$ ; ici l'inversibilité est supposée et on obtient la **continuité** de l'inverse.
