---
id: ch03-hurwitz-contre-exemple
type: proposition
chapter: 3
title: "Le cas $f \equiv 0$ se produit : $f_n(z) = z^n$ sur le disque épointé"
ref: Remarque III.2.2
page: 63
importance: 2
depends: [ch03-hurwitz, ch03-convergence-uniforme-compacts]
tags: [hurwitz, contre-exemple, disque-epointe, convergence-localement-uniforme]
---
## Intuition

> 💡 Dans le théorème de Hurwitz ([[ch03-hurwitz]]), la limite d'une suite de fonctions holomorphes **sans zéro** est soit sans zéro, soit **identiquement nulle**. Le second cas n'est pas une curiosité de rédaction : il arrive vraiment. Sur le disque épointé, $z^n$ ne s'annule jamais (le seul zéro, $0$, a été retiré), mais $z^n$ s'écrase vers $0$ partout à l'intérieur du disque.

Image : le module $|z|^n$ vaut $r^n$ sur le cercle de rayon $r<1$ ; il tend vers $0$, d'autant plus vite que $r$ est petit, et la convergence est uniforme sur chaque couronne fermée $\{\rho\le|z|\le1-\rho\}$, qui est un compact du disque épointé.

Notations : $D(0,1)\setminus\{0\}=\{z\in\C:0<|z|<1\}$ est le **disque épointé** ; la convergence **localement uniforme**, équivalente à la convergence uniforme sur tout compact, est définie dans [[ch03-convergence-localement-uniforme]] et [[ch03-convergence-uniforme-compacts]].

## Énoncé

**Proposition (poly, Remarque III.2.2, p. 63).** Si pour tout $n\ge1$, $f_n$ ne s'annule pas, il arrive que $f$ soit identiquement nulle. Précisément : soit $\Omega:=D(0,1)\setminus\{0\}$ (ouvert connexe) et $f_n(z):=z^n$ pour $n\ge1$ et $z\in\Omega$. Alors chaque $f_n$ est holomorphe sur $\Omega$, $f_n(z)\ne0$ pour tout $n\ge1$ et tout $z\in\Omega$, et $f_n$ converge uniformément vers la fonction constante égale à $0$ sur tout compact de $\Omega$.

## Hypothèses

### H1 — le point $0$ est retiré

**Rôle.** C'est ce qui garantit $f_n(z)=z^n\ne0$ pour tout $z\in\Omega$ : l'hypothèse du point 1 de Hurwitz est satisfaite. L'ouvert $\Omega$ reste connexe (il est connexe par arcs : deux points se joignent par un arc de cercle centré en $0$ puis un segment radial, sans passer par $0$).

**Si on la retire.** Sur $D(0,1)$ entier, $z^n$ s'annule en $0$ : l'hypothèse « $f_n$ sans zéro » tombe, et le théorème de Hurwitz ne dit plus rien. La limite (nulle) n'est alors pas surprenante.

### H2 — la convergence n'est que localement uniforme

**Rôle.** Hurwitz ne demande que la convergence uniforme sur les compacts, et c'est tout ce que l'on a ici.

**Si on la retire (si l'on exigeait la convergence uniforme sur $\Omega$).** Elle est fausse ici : $\sup_{z\in\Omega}|z^n|=1$ pour tout $n$ (prendre $z$ réel tendant vers $1$). L'exemple montre donc aussi que la convergence localement uniforme ne se renforce pas en convergence uniforme sur $\Omega$.

## Idée de la preuve

Un compact $K\subset\Omega$ est contenu dans un disque fermé $\bar D(0,r_K)$ avec $r_K<1$ (la fonction continue $|z|$ atteint son max sur $K$) ; donc $\sup_K|z^n|\le r_K^n\to0$.

## Preuve

*Holomorphie et non-annulation.* $f_n(z)=z^n$ est un polynôme, donc holomorphe sur $\Omega$. Pour $z\in\Omega$, $|f_n(z)|=|z|^n>0$ car $z\ne0$ : $f_n$ ne s'annule pas sur $\Omega$.

*Connexité de $\Omega$.* Soient $z_1=\rho_1e^{i\theta_1}$ et $z_2=\rho_2e^{i\theta_2}$ dans $\Omega$ ($0<\rho_j<1$). Le chemin $t\mapsto\rho_1e^{i((1-t)\theta_1+t\theta_2)}$, $t\in[0,1]$, puis le segment de $\rho_1e^{i\theta_2}$ à $\rho_2e^{i\theta_2}$, restent dans $\{0<|z|<1\}$ : $\Omega$ est connexe par arcs, donc connexe.

*Convergence uniforme sur tout compact.* Soit $K\subset\Omega$ compact (non vide). La fonction continue $z\mapsto|z|$ atteint son maximum $r_K$ sur $K$ en un point de $K\subset D(0,1)$, donc $r_K<1$. Pour tout $z\in K$, $|f_n(z)-0|=|z|^n\le r_K^n$, d'où
$$
\norm{f_n-0}_{\infty,K}\le r_K^n\xrightarrow[n\to\infty]{}0 .
$$
Donc $f_n\to0$ uniformément sur tout compact de $\Omega$, c'est-à-dire localement uniformément ([[ch03-convergence-uniforme-compacts]]). La limite $f\equiv0$ est le second terme de l'alternative du théorème de Hurwitz ([[ch03-hurwitz]]). $\square$

## Preuve à trous

Chaque $f_n(z)=z^n$ est holomorphe et <trou indice="que vaut |z^n| ?">$|f_n(z)|=|z|^n>0$ car $0\notin\Omega$</trou>. Soit $K\subset\Omega$ compact : <trou indice="max d'une fonction continue sur un compact">$r_K:=\max_K|z|$ est atteint en un point de $K\subset D(0,1)$, donc $r_K<1$</trou>, et $\norm{f_n}_{\infty,K}\le r_K^n\to0$. Donc $f_n\to0$ uniformément sur tout compact, i.e. <trou>localement uniformément, vers la fonction identiquement nulle</trou>. $\square$

## Exemples

* **Exemple plus bête, même phénomène.** $f_n=1/n$ (constantes) sur n'importe quel ouvert connexe : holomorphes, sans zéro, et $f_n\to0$ uniformément. L'exemple $z^n$ montre que le phénomène n'est pas réservé aux constantes.
* **Analogue pour l'injectivité (point 2 de Hurwitz).** $f_n(z)=z/n$ sur $D(0,1)$ est injective et converge uniformément vers la constante $0$ : le cas « $f$ constante » se produit aussi.
* **Comment exclure le cas dégénéré en pratique.** Si l'on sait par ailleurs que $f(z_1)\ne0$ en un point $z_1$ (par exemple si les $f_n$ sont normalisées par $f_n(z_1)=1$), alors $f\not\equiv0$ et Hurwitz donne que $f$ ne s'annule pas. Pour le point 2, une normalisation du type $f_n'(z_0)\to c\ne0$ (convergence des dérivées par [[ch03-weierstrass]]) exclut que $f$ soit constante : c'est l'argument de la preuve du théorème de Riemann ([[ch03-riemann-representation-conforme]]), où $|h'(z_0)|=\eta>0$ empêche la limite $h$ d'être constante.

## Pièges

* > ⚠️ Dans une copie, on ne conclut **jamais** directement « les $f_n$ ne s'annulent pas, donc $f$ ne s'annule pas » : il faut d'abord prouver $f\not\equiv0$.
* Les zéros de $z^n$ ne « disparaissent » pas en entrant dans $\Omega$ : ici il n'y en a aucun dans $\Omega$, et la limite n'en a pas non plus au sens où elle n'a pas de zéro **isolé** ; elle est nulle partout. Hurwitz interdit l'apparition d'un zéro isolé, pas l'annulation globale.
* $\bar D(0,1)\setminus\{0\}$ ou $D(0,1)$ ne sont pas des compacts de $\Omega$ : la convergence n'est pas uniforme sur $\Omega$.
