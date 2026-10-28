---
id: ch03-hurwitz
type: theorem
chapter: 3
title: Théorème de Hurwitz (1889)
ref: Théorème III.2.1
page: 62
importance: 3
depends: [ch01-zeros-isoles, ch03-weierstrass, ch02-principe-argument, ch02-principe-argument-domaine, ch03-convergence-uniforme-compacts, ch03-cauchy-locale-equivaut-convergence, ch01-longueur-majoration-integrale]
tags: [hurwitz, zeros, injectivite, principe-argument, convergence-localement-uniforme]
---
## Intuition

> 💡 Les zéros d'une fonction holomorphe ne peuvent pas « apparaître de nulle part » à la limite. Le nombre de zéros dans un disque $D$ se calcule par une intégrale sur le bord, $Z(f,D)=\frac1{2i\pi}\int_{\partial D}\frac{f'}{f}$ (principe de l'argument). Si $f_n\to f$ uniformément sur le cercle (avec $f'_n\to f'$ par Weierstraß), ces intégrales passent à la limite ; comme ce sont des **entiers**, $Z(f_n,D)$ finit par être égal à $Z(f,D)$. Donc si aucun $f_n$ ne s'annule, $f$ non plus… sauf si $f\equiv0$, cas où la formule n'a plus de sens.

Pour l'injectivité : $f_n$ injective signifie que $f_n-f_n(a)$ ne s'annule qu'en $a$ ; on applique le point 1 sur $\Omega\setminus\{a\}$.

Vocabulaire : convergence **localement uniforme** : [[ch03-convergence-localement-uniforme]] ; une partie est **connexe** si elle n'est pas réunion de deux ouverts disjoints non vides ; $f\equiv0$ signifie « $f$ est identiquement nulle ». Pour $D$ ouvert, $Z(g,D)$ désigne le nombre de zéros de $g$ dans $D$ comptés avec multiplicité ([[ch01-def-multiplicite-zero]]).

## Énoncé

**Théorème (poly, Théorème III.2.1 — Hurwitz (1889), p. 62).** Soient $\Omega$ un ouvert connexe de $\C$ et $(f_n)_{n\in\N}$ une suite de fonctions holomorphes de $\Omega$ dans $\C$, localement uniformément convergente sur $\Omega$ et de limite $f$.

1. Si pour tout $n\ge0$, $f_n$ ne s'annule pas sur $\Omega$, alors soit $f$ ne s'annule pas sur $\Omega$, soit $f\equiv0$ sur $\Omega$.
2. Si pour tout $n\ge0$, $f_n$ est injective sur $\Omega$, alors soit $f$ est injective sur $\Omega$, soit $f$ est constante sur $\Omega$.

(La limite $f$ est holomorphe par le théorème de Weierstraß [[ch03-weierstrass]].)

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** Elle sert dans le principe des zéros isolés ([[ch01-zeros-isoles]]) : si $f\not\equiv0$ sur le connexe $\Omega$, ses zéros sont isolés, ce qui permet d'entourer chaque point d'un cercle sans zéro de $f$. Pour le point 2, on utilise que $\Omega\setminus\{a\}$ reste connexe.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ (deux disques disjoints). Point 1 : $f_n=1/n$ sur $D(0,1)$ et $f_n=1$ sur $D(3,1)$ (pour $n\ge1$) ; chaque $f_n$ est holomorphe (localement constante) et ne s'annule pas, la convergence est uniforme sur $\Omega$, et la limite vaut $0$ sur $D(0,1)$ et $1$ sur $D(3,1)$ : elle s'annule sans être identiquement nulle. Point 2 : $f_n(z)=z/n$ sur $D(0,1)$ et $f_n(z)=z$ sur $D(3,1)$ ; $f_n$ est injective (injective sur chaque disque, et les images $D(0,1/n)$ et $D(3,1)$ sont disjointes) ; la limite vaut $0$ sur $D(0,1)$ et $z$ sur $D(3,1)$ : ni injective, ni constante.

### H2 — les $f_n$ sont holomorphes

**Rôle.** Elle donne l'holomorphie de $f$ et la convergence des dérivées $f_n'\to f'$ (Weierstraß), et permet le comptage des zéros par le principe de l'argument.

**Si on la retire.** $f_n(z)=|z|^2+\frac1n$ sur $\Omega=\C$ : fonctions continues (et même $C^\infty$ au sens réel), sans zéro, convergeant uniformément vers $|z|^2$, qui s'annule en $0$ seulement.

### H3 — convergence localement uniforme

**Rôle.** Elle donne la convergence uniforme de $f_n$ et de $f_n'$ (par Weierstraß) sur le cercle compact $C(z_0,r)$, donc de $f_n'/f_n$ vers $f'/f$, ce qui permet de passer à la limite dans l'intégrale qui compte les zéros.

**Si on la retire.** Avec la seule convergence simple, la limite n'est même plus forcément holomorphe (ni continue : théorème de Runge, hors programme) et la preuve s'effondre ; nous ne donnons pas de contre-exemple élémentaire explicite au programme. Remarquer aussi que la convergence uniforme sur $\Omega$ **n'est pas** demandée : seulement sur les compacts.

### H4 — chaque $f_n$ ne s'annule pas (resp. est injective)

**Rôle.** C'est l'information transmise à la limite : $Z(f_n,D)=0$.

**Si on la retire.** $f_n(z)=z-\frac1n$ sur $D(0,1)$ converge uniformément vers $f(z)=z$, qui s'annule en $0$ sans être nulle ; il n'y a évidemment plus de dichotomie. De même $f_n(z)=z^2+\frac zn$ (non injective : $f_n(0)=f_n(-1/n)=0$) converge vers $z^2$, ni injective ni constante.

## Idée de la preuve

Si $f\not\equiv0$, on entoure $z_0$ d'un cercle $C(z_0,r)$ sans zéro de $f$ (zéros isolés). Sur ce cercle $f_n'/f_n\to f'/f$ uniformément, donc $Z(f_n,D)=\frac1{2i\pi}\int\frac{f_n'}{f_n}\to\frac1{2i\pi}\int\frac{f'}{f}=Z(f,D)$, d'où $Z(f,D)=0$. Pour l'injectivité, on applique le point 1 à $g_n=f_n-f_n(a)$ sur $\Omega\setminus\{a\}$.

## Preuve

**Point 1.** Supposons $f\not\equiv0$ sur $\Omega$ et soit $z_0\in\Omega$. Comme $(f_n)$ converge localement uniformément, elle est localement uniformément de Cauchy ([[ch03-cauchy-locale-equivaut-convergence]]) et le théorème de Weierstraß ([[ch03-weierstrass]]) assure que $f$ est holomorphe et que $f_n'\to f'$ localement uniformément.

*Choix du cercle.* D'après le principe des zéros isolés ([[ch01-zeros-isoles]]), $\Omega$ étant connexe et $f\not\equiv0$, il existe $\eps_0>0$ tel que $f(z)\ne0$ pour tout $z\in D(z_0,\eps_0)\setminus\{z_0\}$ (si $f(z_0)\ne0$, cela découle aussi simplement de la continuité de $f$ ; il se peut que $f(z_0)\ne0$ mais nous ne l'utilisons pas). Choisissons $r$ avec $0<r<\eps_0$ et $\bar D(z_0,r)\subset\Omega$. Alors $f$ ne s'annule pas sur le cercle $C(z_0,r)$.

*Minoration uniforme.* La fonction $|f|$ est continue sur le compact $C(z_0,r)$ et n'y prend que des valeurs strictement positives : son minimum est atteint et strictement positif, donc il existe $\eps>0$ tel que $|f(z)|\ge2\eps$ pour tout $z\in C(z_0,r)$. Comme $(f_n)$ converge uniformément vers $f$ sur le compact $C(z_0,r)$ ([[ch03-convergence-uniforme-compacts]]), il existe $N\ge1$ tel que $|f(z)-f_n(z)|\le\eps$ pour tout $n\ge N$ et tout $z\in C(z_0,r)$. Ainsi
$$
|f_n(z)|\ge|f(z)|-|f(z)-f_n(z)|\ge\eps\quad\text{pour tout }z\in C(z_0,r)\text{ et tout }n\ge N .
$$

*Convergence de $f_n'/f_n$.* Pour $z\in C(z_0,r)$ et $n\ge N$,
$$
\Big|\frac1{f(z)}-\frac1{f_n(z)}\Big|=\frac{|f(z)-f_n(z)|}{|f(z)|\,|f_n(z)|}\le\frac1{2\eps^2}\sup_{C(z_0,r)}|f-f_n| ,
$$
donc $(1/f_n)$ converge uniformément vers $1/f$ sur $C(z_0,r)$. Par Weierstraß, $f_n'\to f'$ uniformément sur le compact $C(z_0,r)$. Notons $M=\max_{C(z_0,r)}|f'|$ (fonction continue sur un compact). Alors
$$
\Big|\frac{f_n'}{f_n}-\frac{f'}{f}\Big|=\Big|\frac{f_n'-f'}{f_n}+f'\Big(\frac1{f_n}-\frac1f\Big)\Big|\le\frac1\eps\sup_{C(z_0,r)}|f_n'-f'|+M\sup_{C(z_0,r)}\Big|\frac1{f_n}-\frac1f\Big|\xrightarrow[n\to\infty]{}0
$$
uniformément sur $C(z_0,r)$. La majoration $\big|\int_\gamma h\big|\le\sup_\gamma|h|\cdot L(\gamma)$ ([[ch01-longueur-majoration-integrale]]), avec $L=2\pi r$, permet de passer à la limite dans l'intégrale.

*Comptage des zéros.* Posons $D:=D(z_0,r)$, de bord le cercle $C(z_0,r)$ orienté positivement, avec $\bar D\subset\Omega$. Les fonctions $f$ et $f_n$ ($n\ge N$) sont holomorphes (donc méromorphes sans pôle) et ne s'annulent pas sur $C(z_0,r)$. Le principe de l'argument, sous la forme du corollaire II.8.2 ([[ch02-principe-argument-domaine]], qui suit le lemme II.8.1 [[ch02-principe-argument]]) appliqué à $U=D$, donne
$$
Z(f,D)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f'(z)}{f(z)}\,dz=\lim_{n\to\infty}\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n'(z)}{f_n(z)}\,dz=\lim_{n\to\infty}Z(f_n,D).
$$
Comme $Z(f_n,D)=0$ pour tout $n$ par hypothèse, on trouve $Z(f,D)=0$ : $f$ ne s'annule pas sur $D(z_0,r)$, en particulier $f(z_0)\ne0$. Ceci étant valable pour tout $z_0\in\Omega$, $f$ ne s'annule pas sur $\Omega$.

**Point 2.** Supposons $f$ non constante et fixons $a\in\Omega$. Posons, pour tout $n$,
$$
g_n(z):=f_n(z)-f_n(a),\qquad z\in U:=\Omega\setminus\{a\}.
$$

*$U$ est un ouvert connexe.* Il est ouvert ($\{a\}$ est fermé). Un ouvert connexe de $\C$ est connexe par arcs ; soient $x,y\in U$ et $\gamma$ un chemin de $x$ à $y$ dans $\Omega$. S'il passe par $a$, on choisit $\delta>0$ avec $\bar D(a,\delta)\subset\Omega$ et $\delta<\min(|x-a|,|y-a|)$ ; entre le premier et le dernier instant où $\gamma$ touche $\bar D(a,\delta/2)$, on remplace $\gamma$ par un arc du cercle $C(a,\delta/2)$, qui évite $a$. On obtient un chemin de $x$ à $y$ dans $U$.

*Convergence.* Les $g_n$ sont holomorphes sur $U$ et convergent localement uniformément sur $U$ vers $g:=f-f(a)$, car $|g_n-g|\le|f_n-f|+|f_n(a)-f(a)|$ et $f_n(a)\to f(a)$.

*Non-annulation.* Pour tout $n$, puisque $f_n$ est injective sur $\Omega$, $g_n$ ne s'annule pas sur $U$ : sinon il existerait $z\in U$, donc $z\ne a$, avec $f_n(z)=f_n(a)$, ce qui est exclu.

On peut donc appliquer le point 1 à la suite $(g_n)$ sur le connexe $U$ : soit $g\equiv0$ sur $U$, soit $g$ ne s'annule pas sur $U$. Si $g\equiv0$ sur $U$, alors $f=f(a)$ sur $U$ et aussi en $a$, donc $f$ serait constante : exclu. Donc $g$ ne s'annule pas sur $U$ : si $f(z)=f(a)$, alors $z=a$. Comme $a$ est arbitraire, $f$ est injective. $\square$

## Preuve à trous

**Point 1.** Supposons $f\not\equiv0$ et soit $z_0\in\Omega$. Par Weierstraß, $f$ est holomorphe et $f_n'\to f'$ localement uniformément. Par <trou indice="Ω connexe, f non identiquement nulle">le principe des zéros isolés, on choisit $r>0$ avec $\bar D(z_0,r)\subset\Omega$ et $f\ne0$ sur $C(z_0,r)$</trou>. Par compacité du cercle, $|f|\ge2\eps$ sur $C(z_0,r)$, et la convergence uniforme sur ce cercle donne $|f_n|\ge\eps$ pour $n\ge N$. Alors <trou indice="écrire 1/f − 1/f_n">$\big|\frac1f-\frac1{f_n}\big|\le\frac1{2\eps^2}\sup_{C(z_0,r)}|f-f_n|$</trou>, et avec $f_n'\to f'$ uniformément sur le cercle, $f_n'/f_n\to f'/f$ uniformément sur $C(z_0,r)$. Avec $D=D(z_0,r)$, le principe de l'argument donne
$$
Z(f,D)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f'}{f}=\lim_{n\to\infty}\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n'}{f_n}=\lim_{n\to\infty}Z(f_n,D),
$$
et comme <trou>$Z(f_n,D)=0$ pour tout $n$, on obtient $Z(f,D)=0$, donc $f(z_0)\ne0$</trou>.

**Point 2.** Si $f$ n'est pas constante, on fixe $a\in\Omega$ et on pose <trou indice="une fonction qui ne s'annule pas grâce à l'injectivité">$g_n=f_n-f_n(a)$ sur $U=\Omega\setminus\{a\}$, ouvert connexe où $g_n$ ne s'annule pas</trou>. Le point 1 donne : $g=f-f(a)$ est identiquement nulle sur $U$ (exclu car $f$ n'est pas constante) ou ne s'annule pas sur $U$. Donc $f(z)\ne f(a)$ pour $z\ne a$. $\square$

## Exemples

* **Fusion de zéros.** $f_n(z)=z^2-\frac1n\to z^2$ uniformément sur $\C$ (l'écart est la constante $1/n$). Sur $D=D(0,1)$ : pour $n\ge2$, les zéros $\pm1/\sqrt n$ sont dans $D$, donc $Z(f_n,D)=2$, et $Z(z^2,D)=2$ ($0$ est zéro double). Le nombre de zéros comptés **avec multiplicité** se conserve (remarque III.2.3, [[ch03-hurwitz-zeros-locaux]]). Ici les $f_n$ s'annulent : le théorème ne s'applique pas, mais le mécanisme de la preuve si.
* **Zéros qui partent à l'infini.** $f_n(z)=(1+z/n)^n\to e^z$ localement uniformément sur $\C$ (voir [[ch03-weierstrass]]). Le seul zéro de $f_n$ est $-n$ ; pour tout disque $D(0,R)$ et $n>R$, $Z(f_n,D(0,R))=0$, en accord avec $e^z\ne0$. Ici les $f_n$ s'annulent sur $\C$, mais si l'on se restreint à $\Omega=D(0,R)$, ce sont des fonctions sans zéro pour $n>R$, et Hurwitz dit que la limite est sans zéro ou nulle : c'est bien $e^z\ne0$.
* **Limite d'injectives.** $f_n(z)=z+\frac{z^2}n$ sur $D(0,1)$ : si $f_n(z)=f_n(w)$, alors $(z-w)\big(1+\frac{z+w}n\big)=0$, et $|z+w|<2\le n$ pour $n\ge2$, donc $z=w$ : $f_n$ injective. La limite $f(z)=z$ est injective. À l'inverse, $f_n(z)=z/n$ est injective et converge vers la constante $0$ : le cas « constante » se produit vraiment. C'est sous cette forme (point 2) que Hurwitz sert dans la preuve du théorème de représentation conforme de Riemann ([[ch03-riemann-representation-conforme]]).

## Pièges

* > ⚠️ **Ne pas oublier l'alternative** : la limite de fonctions sans zéro peut être **identiquement nulle** (exemple $z^n$ sur le disque épointé, [[ch03-hurwitz-contre-exemple]]), et la limite de fonctions injectives peut être **constante** ($z/n$). Dans un exercice, il faut toujours éliminer ce cas à la main (par exemple en montrant que $f(z_1)\ne0$ en un point, ou $f'(z_0)\ne0$).
* > ⚠️ **Connexité** indispensable (voir H1) ; et dans le point 2, c'est la connexité de $\Omega\setminus\{a\}$ qui sert.
* Le cercle $C(z_0,r)$ doit éviter les zéros de $f$ **et** être inclus dans $\Omega$ avec son intérieur : $\bar D(z_0,r)\subset\Omega$.
* Le théorème ne dit pas que $f_n'\to f'$ « suffit » : c'est Weierstraß qui fournit gratuitement cette convergence, à citer.
* Version quantitative : pour $n$ grand, $f_n$ a exactement $Z(f,D)$ zéros dans $D(z_0,r)$ ; c'est aussi une conséquence de Rouché ([[ch02-rouche]]) avec $|f_n-f|<|f|$ sur le cercle.
