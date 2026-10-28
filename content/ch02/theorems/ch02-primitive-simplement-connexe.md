---
id: ch02-primitive-simplement-connexe
type: theorem
chapter: 2
title: Existence de primitives holomorphes sur un ouvert simplement connexe
ref: Théorème II.9.1
page: 55
importance: 3
depends: [ch02-invariance-homotopie-integrale, ch01-integrale-reparametrage-oppose-concatenation, ch02-homotopie-simplement-connexe, ch01-def-holomorphe, ch01-integrale-primitive]
tags: [primitive, simplement-connexe, homotopie, logarithme, integrale-chemin]
---
## Intuition

> 💡 Pour fabriquer une primitive, on fait comme en dimension $1$ : on fixe un point de départ $z_0$ et on pose $F(\omega)=\int_{z_0}^{\omega}f(z)\,dz$. Le seul problème, dans le plan, est qu'il y a **plusieurs chemins** de $z_0$ à $\omega$. Sur un ouvert **sans trou** (simplement connexe), deux chemins forment un lacet qui se contracte en un point, donc ont la même intégrale (invariance par homotopie) : $F$ est bien définie, et on vérifie que $F'=f$.

L'exemple à garder en tête est $1/z$ sur $\C\setminus\{0\}$ : en tournant une fois autour du trou $0$, l'intégrale gagne $2i\pi$, et il n'existe pas de primitive (pas de logarithme) sur $\C\setminus\{0\}$. En pratiquant une **coupure** (par exemple en retirant $\R_-$), on obtient un ouvert simplement connexe et le logarithme existe ([[ch02-logarithme-existence]]).

Rappels : une **primitive holomorphe** de $f$ sur $\Omega$ est une $F\in\Hol(\Omega)$ avec $F'=f$ ([[ch01-def-holomorphe]]) ; $\Omega$ est **simplement connexe** s'il est connexe et si tout lacet de $\Omega$ est homotope (homotopie de lacets dans $\Omega$) à un lacet constant ([[ch02-homotopie-simplement-connexe]]) ; pour des chemins composables, $\gamma_1\vee\gamma_2$ désigne le chemin composé et $\gamma^{opp}$ le chemin opposé ([[ch01-def-chemins-composables]], [[ch01-def-chemin-lacet]]). Le résultat local (primitive sur tout disque) était le Corollaire I.7.6 ([[ch01-primitive-locale]]).

## Énoncé

**Théorème (poly, Théorème II.9.1, p. 55).** Toute fonction $f$ qui est holomorphe sur un ouvert $\Omega$ simplement connexe admet sur cet ouvert une primitive holomorphe, unique à une constante additive près (deux primitives diffèrent d'une fonction de dérivée nulle sur l'ouvert connexe $\Omega$, donc d'une constante).

## Hypothèses

### H1 — Tout lacet de $\Omega$ est homotope à un lacet constant

**Rôle.** Elle rend l'intégrale de $f$ entre $z_0$ et $\omega$ **indépendante du chemin** : la différence de deux chemins est un lacet, homotope à un point, sur lequel l'intégrale est nulle.

**Si on la retire.** $\Omega=\C\setminus\{0\}$ (connexe), $f(z)=1/z\in\Hol(\Omega)$. Si $F$ était une primitive holomorphe, on aurait $\int_{C(0,1)}\frac{dz}z=F(\gamma(1))-F(\gamma(0))=0$ ([[ch01-integrale-primitive]]), alors que cette intégrale vaut $2i\pi$. Concrètement, $\int_{\gamma_\omega}\frac{dz}z$ dépend du nombre de tours que fait $\gamma_\omega$ autour de $0$ et $F$ n'est définie qu'à $2i\pi\Z$ près.

### H2 — $\Omega$ connexe

**Rôle.** Elle permet de relier tout point $\omega$ à $z_0$ par un chemin (existence), et elle donne l'unicité à constante près.

**Si on la retire.** Sur $\Omega=D(0,1)\cup D(5,1)$ (réunion disjointe de deux disques, non connexe), toute $f\in\Hol(\Omega)$ a bien une primitive (sur chaque disque), mais la fonction $F$ égale à $0$ sur $D(0,1)$ et à $1$ sur $D(5,1)$ a une dérivée nulle sans être constante : l'unicité « à une constante près » tombe (on a seulement une constante par composante connexe).

### H3 — $f$ holomorphe sur $\Omega$

**Rôle.** C'est l'hypothèse du théorème d'invariance par homotopie ([[ch02-invariance-homotopie-integrale]]).

**Si on la retire.** $f(z)=\bar z$ est continue sur $\C$ (simplement connexe) mais pas holomorphe ; elle n'a pas de primitive holomorphe, puisque $\int_{C(0,1)}\bar z\,dz=\int_0^{2\pi}e^{-it}ie^{it}dt=2i\pi\neq0$.

## Idée de la preuve

On fixe $z_0$ et on pose $F(\omega)=\int_{\gamma_\omega}f$ pour un chemin $\gamma_\omega$ de $z_0$ à $\omega$ ; par simple connexité et invariance par homotopie, $F(\omega)$ ne dépend pas du chemin. En prolongeant $\gamma_\omega$ par le segment $[\omega,\omega+h]$, $\frac{F(\omega+h)-F(\omega)}h=\int_0^1f(\omega+th)\,dt\to f(\omega)$.

## Preuve

*Existence de chemins.* Fixons $z_0\in\Omega$ et soit $A$ l'ensemble des points de $\Omega$ qui peuvent être reliés à $z_0$ par un chemin (on peut même le prendre affine par morceaux). $A\ni z_0$ est non vide. $A$ est ouvert : si $\omega\in A$ et $D(\omega,r)\subset\Omega$, tout $\omega'\in D(\omega,r)$ est relié à $z_0$ en ajoutant le segment $[\omega,\omega']\subset D(\omega,r)$. $A$ est fermé dans $\Omega$ : si $\omega\in\Omega$ est limite de points de $A$, soit $D(\omega,r)\subset\Omega$ ; ce disque contient un point $w\in A$, et on relie $\omega$ à $z_0$ en ajoutant $[w,\omega]$. Comme $\Omega$ est connexe, $A=\Omega$.

*Définition de $F$.* Pour tout $\omega\in\Omega$, choisissons un chemin $\gamma_\omega$ de $z_0$ à $\omega$ et posons
$$
F(\omega):=\int_{\gamma_\omega}f(z)\,dz .
$$
Si $\gamma'_\omega$ est un autre chemin de $z_0$ à $\omega$, le chemin $\gamma'_\omega\vee\gamma_\omega^{opp}$ est un lacet (de $z_0$ à $z_0$) de $\Omega$, homotope à un lacet constant puisque $\Omega$ est simplement connexe. Par invariance par homotopie de l'intégrale le long d'un lacet ([[ch02-invariance-homotopie-integrale]], poly, Théorème II.2.1, p. 37), son intégrale est égale à celle sur un lacet constant, c'est-à-dire $0$. Par additivité et changement de signe pour le chemin opposé ([[ch01-integrale-reparametrage-oppose-concatenation]]),
$$
0=\int_{\gamma'_\omega\vee\gamma_\omega^{opp}}f(z)\,dz=\int_{\gamma'_\omega}f(z)\,dz-\int_{\gamma_\omega}f(z)\,dz .
$$
Donc $F(\omega)$ ne dépend pas du choix du chemin.

*Dérivabilité.* Soit $\omega\in\Omega$ et $r>0$ tel que $D(\omega,r)\subset\Omega$. Pour $h\in D(0,r)$, $h\neq0$, on peut, puisque le chemin est indifférent, calculer $F(\omega+h)$ avec $\gamma_{\omega+h}:=\gamma_\omega\vee\gamma_{[\omega,\omega+h]}$, où $\gamma_{[\omega,\omega+h]}(t):=\omega+th$, $t\in[0,1]$ (segment contenu dans $D(\omega,r)$). Alors
$$
\frac{F(\omega+h)-F(\omega)}{h}=\frac1h\int_{\gamma_{[\omega,\omega+h]}}f(z)\,dz=\frac1h\int_0^1f(\omega+th)\,h\,dt=\int_0^1f(\omega+th)\,dt .
$$
Par suite
$$
\Big|\frac{F(\omega+h)-F(\omega)}{h}-f(\omega)\Big|=\Big|\int_0^1\big(f(\omega+th)-f(\omega)\big)dt\Big|\le\sup_{|u-\omega|\le|h|}|f(u)-f(\omega)|\xrightarrow[h\to0]{}0
$$
par continuité de $f$ en $\omega$. Donc $F$ est $\C$-dérivable en $\omega$ et $F'(\omega)=f(\omega)$. Comme $F'=f$ est continue, $F$ est holomorphe sur $\Omega$ ([[ch01-def-holomorphe]]).

*Unicité.* Si $F_1,F_2$ sont deux primitives holomorphes, $G:=F_1-F_2$ vérifie $G'=0$. Pour tout $\omega\in\Omega$, $G$ est une primitive de $0$, donc $G(\omega)-G(z_0)=\int_{\gamma_\omega}0\,dz=0$ ([[ch01-integrale-primitive]]) : $G$ est constante. Réciproquement $F+c$ est une primitive pour toute constante $c$. $\square$

## Preuve à trous

On fixe $z_0\in\Omega$ ; par connexité, <trou indice="ouvert-fermé">tout point $\omega$ de $\Omega$ est relié à $z_0$ par un chemin $\gamma_\omega$</trou>. On pose $F(\omega)=\int_{\gamma_\omega}f$. Si $\gamma'_\omega$ est un autre chemin, <trou indice="quel lacet former ?">$\gamma'_\omega\vee\gamma_\omega^{opp}$ est un lacet homotope à un lacet constant (simple connexité), donc d'intégrale nulle par le Théorème II.2.1</trou>, d'où $\int_{\gamma'_\omega}f=\int_{\gamma_\omega}f$ : $F$ est bien définie. Pour $D(\omega,r)\subset\Omega$ et $0<|h|<r$, on choisit <trou>le chemin $\gamma_\omega\vee[\omega,\omega+h]$ pour calculer $F(\omega+h)$</trou>, d'où <trou indice="paramétrer le segment">$\frac{F(\omega+h)-F(\omega)}h=\int_0^1f(\omega+th)\,dt$</trou>, qui tend vers $f(\omega)$ par continuité de $f$. Ainsi $F'=f$, continue : $F\in\Hol(\Omega)$. Deux primitives diffèrent d'une fonction de dérivée nulle sur le connexe $\Omega$, donc d'une constante. $\square$

## Exemples

* **Le logarithme principal.** $\Omega=\C\setminus\R_-$ est étoilé par rapport à $1$, donc simplement connexe ([[ch02-etoile-simplement-connexe]]), et $1/z\in\Hol(\Omega)$. Sa primitive nulle en $1$ est $\mathrm{Log}(\omega)=\int_{[1,\omega]}\frac{dz}{z}$, la détermination principale du logarithme ([[ch02-logarithme-determination-principale-def]]). Pour $\omega=i$, en suivant l'arc $t\mapsto e^{it}$, $t\in[0,\frac\pi2]$ (le chemin est indifférent) : $\mathrm{Log}(i)=\int_0^{\pi/2}\frac{ie^{it}}{e^{it}}dt=\frac{i\pi}2$.
* **Une primitive sans formule close.** $f(z)=e^{-z^2}$ est holomorphe sur $\C$ (étoilé) ; en prenant le segment $[0,\omega]$, sa primitive nulle en $0$ est $F(\omega)=\int_0^1e^{-t^2\omega^2}\,\omega\,dt$. Pour $\omega=x$ réel, c'est $\int_0^xe^{-s^2}ds$ : $F$ est l'unique prolongement holomorphe à $\C$ de cette fonction (à un facteur $\frac{2}{\sqrt\pi}$ près, la fonction d'erreur).
* **Sur un ouvert troué, cela dépend de $f$.** Sur $\C\setminus\{0\}$, $1/z^2$ a la primitive $-1/z$, mais $1/z$ n'en a pas. La preuve ci-dessus montre plus généralement : sur un ouvert connexe $\Omega$, $f\in\Hol(\Omega)$ admet une primitive holomorphe **si et seulement si** $\int_\gamma f=0$ pour tout lacet $\gamma$ de $\Omega$ (le sens direct par [[ch01-integrale-primitive]], le sens réciproque parce que seule l'indépendance du chemin a servi). Pour $f$ holomorphe sur $\C\setminus\{0\}$ et méromorphe en $0$, la condition impose en particulier $\int_{C(0,1)}f=2i\pi\Res_0(f)=0$ ([[ch02-residu-integrale-cercle]]) : elle est violée par $1/z$ (résidu $1$) et satisfaite par $1/z^2$ (résidu $0$), qui a bien une primitive.

## Pièges

* > ⚠️ « Simplement connexe » contient « connexe » : c'est indispensable pour l'unicité à **une** constante près.
* Ne pas croire qu'une fonction holomorphe sur un ouvert non simplement connexe n'a jamais de primitive ($1/z^2$ sur $\C^\times$ en a une) : le théorème donne une condition **suffisante**.
* La réciproque (si toute $f\in\Hol(\Omega)$ a une primitive, alors $\Omega$ est simplement connexe) est vraie pour $\Omega$ connexe mais **non démontrée** dans le poly ; on montre facilement que $\int_\gamma\frac{dz}{z-a}=0$ pour $a\notin\Omega$, i.e. $\Ind_a(\gamma)=0$ : $\Omega$ « n'a pas de trou ».
* $F(\omega)$ est définie par une intégrale sur **un** chemin quelconque : pour calculer $F'(\omega)$, on choisit astucieusement le chemin qui finit par un segment. C'est l'indépendance du chemin qui autorise ce choix.
* L'existence d'un logarithme de $h\in\Hol(\Omega)$ ne s'annulant pas ([[ch02-logarithme-existence]]) est une application directe : on prend une primitive de $h'/h$ et on ajuste la constante.
