---
id: ch01-application-ouverte
type: theorem
chapter: 1
title: Théorème de l'application ouverte
ref: Théorème I.14.1
page: 33
importance: 3
depends: [ch01-zeros-isoles, ch01-stabilite-operations, ch01-maximum-sur-le-bord]
tags: [application-ouverte, principe-maximum, zeros-isoles, image, rigidite]
---
## Intuition

> 💡 Une fonction holomorphe non constante ne peut pas « écraser » un morceau du plan sur une courbe ou un point : l'image d'un petit disque autour de $z_0$ contient toujours un petit disque autour de $f(z_0)$. Penser à $z\mapsto z^N$ près de $0$ : le petit disque $D(0,r)$ est enroulé $N$ fois sur le disque $D(0,r^N)$, mais il le **recouvre entièrement**. En réel au contraire, $x\mapsto x^2$ replie $]-1,1[$ sur $[0,1[$, qui n'est pas ouvert.

Pourquoi : si des valeurs $\alpha_n$ non atteintes s'approchaient de $f(z_0)$, la fonction $1/(f-\alpha_n)$ serait holomorphe, et le principe du maximum (sur un petit disque) forcerait $|f-\alpha_n|$ à être **minimal sur le bord** du disque — alors qu'au centre, $|f(z_0)-\alpha_n|$ est arbitrairement petit tandis que sur le bord $|f-f(z_0)|$ reste minoré.

Rappel : une partie $U\subset\C$ est **ouverte** si pour tout $w\in U$ il existe $\eta>0$ avec $D(w,\eta)\subset U$ ; on dit alors que $U$ est un **voisinage** de chacun de ses points.

## Énoncé

**Théorème (poly, Théorème I.14.1 — de l'application ouverte (Riemann 1851), p. 33).** Soit $\Omega$ un ouvert connexe non vide de $\C$ et $f:\Omega\to\C$ une application holomorphe non constante. Alors l'image $f(\Omega)$ est un ouvert de $\C$.

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** Elle sert, via le [[ch01-zeros-isoles|principe des zéros isolés]] appliqué à $f-f(z_0)$, à garantir que $f$ ne prend pas la valeur $f(z_0)$ sur un petit cercle autour de $z_0$.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$, $f=0$ sur $D(0,1)$ et $f(z)=z$ sur $D(3,1)$ : $f$ est holomorphe et non constante sur $\Omega$, mais $f(\Omega)=\{0\}\cup D(3,1)$ n'est pas ouvert (aucun disque centré en $0$ n'y est contenu). Sans connexité, la bonne hypothèse est : $f$ non constante sur **chaque** composante connexe.

### H2 — $f$ holomorphe

**Rôle.** Holomorphie de $1/(f-\alpha_n)$ et principe du maximum.

**Si on la retire.** $z\mapsto|z|^2$ est $C^\infty$ (au sens réel) non constante sur $\C$, d'image $\R_+$, non ouverte ; $z\mapsto\Re(z)$ a pour image $\R$, d'intérieur vide dans $\C$. En une variable réelle, $x\mapsto x^2$ envoie $]-1,1[$ sur $[0,1[$.

### H3 — $f$ non constante

**Rôle.** Elle assure que $f-f(z_0)$ n'est pas identiquement nulle, pour appliquer les zéros isolés.

**Si on la retire.** Si $f\equiv c$, $f(\Omega)=\{c\}$, qui n'est pas ouvert.

(L'hypothèse « non vide » est de confort : $f(\emptyset)=\emptyset$ est ouvert.)

## Idée de la preuve

Par l'absurde : $\alpha_n\notin f(\Omega)$, $\alpha_n\to f(z_0)$. Sur un petit disque $\bar D(z_0,r)$ où $f\neq f(z_0)$ hors du centre, le maximum de $|1/(f-\alpha_n)|$ est atteint au bord, donc $|f(z_0)-\alpha_n|\ge\min_{C(z_0,r)}|f-\alpha_n|\ge\eps/2$ pour $n$ grand : contradiction avec $\alpha_n\to f(z_0)$.

## Preuve

*Le poly donne la preuve sous forme de l'Exercice I.14.2 ; on en rédige les trois questions.*

On raisonne par l'absurde en supposant que $f(\Omega)$ n'est pas ouvert : il existe $z_0\in\Omega$ tel que $f(\Omega)$ n'est pas un voisinage de $f(z_0)$. Pour tout $n\in\N$, le disque $D(f(z_0),\tfrac1{n+1})$ n'est donc pas contenu dans $f(\Omega)$ : on choisit $\alpha_n\in D(f(z_0),\tfrac1{n+1})\setminus f(\Omega)$. Ainsi $\alpha_n\notin f(\Omega)$ et $\alpha_n\to f(z_0)$.

**1) Choix de $r$.** La fonction $F:=f-f(z_0)$ est holomorphe sur $\Omega$ connexe, nulle en $z_0$, et non identiquement nulle car $f$ n'est pas constante. Par le [[ch01-zeros-isoles|principe des zéros isolés]], il existe $\eps_0>0$ tel que $F(z)\neq0$ pour $z\in\Omega\cap\big(D(z_0,\eps_0)\setminus\{z_0\}\big)$. Comme $\Omega$ est ouvert, il existe $\rho>0$ avec $D(z_0,\rho)\subset\Omega$. Avec $0<r<\min(\eps_0,\rho)$, on a :
(i) $\bar D(z_0,r)\subset D(z_0,\rho)\subset\Omega$ ; (ii) pour tout $z\in\bar D(z_0,r)\setminus\{z_0\}$, $f(z)\neq f(z_0)$.

**2) La fonction $g_n$.** Comme $\alpha_n\notin f(\Omega)$, $f-\alpha_n$ ne s'annule pas sur $\Omega$, donc $g_n:=\dfrac1{f-\alpha_n}$ est bien définie et holomorphe sur $\Omega$ ([[ch01-stabilite-operations]]). Elle est continue sur le compact $\bar D(z_0,r)$ et holomorphe sur le disque $D(z_0,r)$ (ouvert connexe borné). Par [[ch01-maximum-sur-le-bord]] (poly, Corollaire I.12.2, p. 31), $\sup_{\bar D(z_0,r)}|g_n|=\sup_{C(z_0,r)}|g_n|$, et ce dernier sup est atteint en un point $z_n\in C(z_0,r)$ (fonction continue sur un compact). Donc pour tout $z\in\bar D(z_0,r)$, $|g_n(z)|\le|g_n(z_n)|$, c'est-à-dire
$$
|f(z)-\alpha_n|\ge|f(z_n)-\alpha_n| .
$$

**3) Contradiction.** La fonction $z\mapsto|f(z)-f(z_0)|$ est continue sur le compact $C(z_0,r)$ et strictement positive par (ii) ; elle y atteint son minimum $\eps>0$. Donc $|f(z)-f(z_0)|\ge\eps$ pour tout $z\in C(z_0,r)$. Soit $n_0$ tel que $|\alpha_n-f(z_0)|<\eps/2$ pour $n\ge n_0$. Alors, pour $n\ge n_0$, puisque $z_n\in C(z_0,r)$,
$$
|f(z_n)-\alpha_n|\ge|f(z_n)-f(z_0)|-|f(z_0)-\alpha_n|\ge\eps-\frac\eps2=\frac\eps2 .
$$
En appliquant 2) en $z=z_0$ : $|f(z_0)-\alpha_n|\ge|f(z_n)-\alpha_n|\ge\eps/2$ pour tout $n\ge n_0$, ce qui contredit $\alpha_n\to f(z_0)$. Donc $f(\Omega)$ est un voisinage de chacun de ses points : il est ouvert. $\square$

**Complément : $f$ est une application ouverte.** Si $U\subset\Omega$ est un ouvert non vide, alors $f(U)$ est ouvert. En effet, sur chaque composante connexe $U_i$ de $U$ (ouverte, connexe, non vide), $f$ n'est pas constante : sinon $f-c$ serait nulle sur l'ouvert non vide $U_i$, donc aurait des zéros non isolés, donc serait nulle sur $\Omega$ connexe ([[ch01-zeros-isoles]]), et $f$ serait constante. Le théorème appliqué à $f_{|U_i}$ montre que $f(U)=\bigcup_if(U_i)$ est une réunion d'ouverts.

## Preuve à trous

Par l'absurde, soit $z_0\in\Omega$ et $\alpha_n\notin f(\Omega)$ avec $\alpha_n\to f(z_0)$.

1) Par <trou indice="f − f(z0) n'est pas identiquement nulle sur Ω connexe">le principe des zéros isolés appliqué à $f-f(z_0)$</trou>, il existe $r>0$ avec $\bar D(z_0,r)\subset\Omega$ et $f(z)\neq f(z_0)$ pour $z\in\bar D(z_0,r)\setminus\{z_0\}$.

2) La fonction <trou indice="une fonction auxiliaire holomorphe car α_n n'est pas atteint">$g_n=1/(f-\alpha_n)$ est holomorphe sur $\Omega$ car $f-\alpha_n$ ne s'annule pas</trou>. Par le principe du maximum sur $\bar D(z_0,r)$, il existe $z_n\in C(z_0,r)$ tel que <trou>$|f(z)-\alpha_n|\ge|f(z_n)-\alpha_n|$ pour tout $z\in\bar D(z_0,r)$</trou>.

3) Par compacité de $C(z_0,r)$, $|f-f(z_0)|\ge\eps>0$ sur ce cercle, donc pour $n$ grand $|f(z_n)-\alpha_n|\ge\eps/2$, et <trou indice="prendre z = z0 dans 2)">$|f(z_0)-\alpha_n|\ge\eps/2$ pour $n$ grand, ce qui contredit $\alpha_n\to f(z_0)$</trou>. $\square$

## Exemples

* **$f(z)=z^2$ sur $\C$.** $f'(0)=0$, et pourtant $f(D(0,r))=D(0,r^2)$ est ouvert : tout $w$ avec $|w|<r^2$ s'écrit $w=\rho e^{i\phi}$ et admet la racine $\sqrt\rho\,e^{i\phi/2}\in D(0,r)$. Le théorème ne demande pas $f'\neq0$.
* **Partie réelle ou module constant.** Si $f\in\Hol(\Omega)$, $\Omega$ connexe, et $\Re(f)$ est constante égale à $c$, alors $f(\Omega)\subset\{c+iy:y\in\R\}$, droite d'intérieur vide : $f(\Omega)$ n'est pas ouvert (s'il est non vide), donc $f$ est constante. Même raisonnement si $|f|$ est constant ($f(\Omega)$ dans un cercle), ou si $f$ est à valeurs réelles.
* **Principe du maximum retrouvé.** Si $|f|$ a un maximum local en $z_0$ et $f$ n'est pas constante sur $\Omega$ connexe, alors (complément ci-dessus) $f(D(z_0,r))$ est un ouvert contenant $f(z_0)$, donc contient $(1+\delta)f(z_0)$ pour $\delta>0$ petit si $f(z_0)\neq0$ (ou un point non nul si $f(z_0)=0$) : il y a des points de $D(z_0,r)$ où $|f|>|f(z_0)|$, pour tout $r$ petit. Contradiction : on retrouve [[ch01-principe-maximum]].

## Pièges

* > ⚠️ « Ouverte » ne veut pas dire « $f'\neq0$ » ni « injective » : $z\mapsto z^2$ est ouverte mais ni l'un ni l'autre en $0$.
* Ne pas oublier la **connexité** (ou la non-constance sur chaque composante) : voir H1.
* Le résultat est faux en analyse réelle et pour les fonctions seulement $C^\infty$ au sens réel : c'est une propriété de rigidité propre à l'holomorphie.
* L'image d'un **fermé** n'est pas forcément fermée : $\exp(\C)=\C^\times$ (où $\C$ est fermé et $\C^\times$ ne l'est pas).
* Dans la preuve, le minimum est pris sur le **cercle** $C(z_0,r)$, où $f-f(z_0)$ ne s'annule pas ; sur le disque fermé, $\min|f-f(z_0)|=0$ (atteint en $z_0$).
