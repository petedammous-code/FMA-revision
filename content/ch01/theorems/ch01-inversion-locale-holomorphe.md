---
id: ch01-inversion-locale-holomorphe
type: proposition
chapter: 1
title: "Inversion locale holomorphe : $f'(z_0)\neq0$ $\Rightarrow$ $f$ est un biholomorphisme local en $z_0$"
ref: Proposition I.4.4
page: 14
importance: 3
depends: [ch06-inversion-locale, ch01-similitude-conforme, ch01-c-derivable-ssi-df-c-lineaire, ch01-holomorphe-ssi-c1-et-dzbar-nul, ch01-def-biholomorphisme, ch05-composition-differentielles]
tags: [inversion-locale, biholomorphisme, local, derivee-non-nulle, reciproque]
---
## Intuition

> 💡 Près de $z_0$, une fonction holomorphe ressemble à $z\mapsto f(z_0)+f'(z_0)(z-z_0)$ : une **similitude** (rotation d'angle $\arg f'(z_0)$, homothétie de rapport $|f'(z_0)|$). Si $f'(z_0)\neq0$, cette similitude est inversible ; le théorème d'inversion locale dit qu'alors $f$ elle-même est inversible **près de $z_0$**. Le bonus complexe : la réciproque est encore une similitude infinitésimale en chaque point, donc elle est **holomorphe**, de dérivée $1/f'$.

Vocabulaire. Un **biholomorphisme** de $\Omega_1$ sur $\Omega_2$ est une bijection holomorphe dont la réciproque est holomorphe ([[ch01-def-biholomorphisme]]). « Local » signifie : vrai sur un voisinage du point, pas forcément sur tout l'ouvert ([[ch01-sens-de-local]]). Le **théorème d'inversion locale** réel ([[ch06-inversion-locale]]) : si $F$ est $C^1$ d'un ouvert de $\R^2$ dans $\R^2$ et si sa différentielle $dF_{x_0}$ est inversible, alors $F$ réalise un $C^1$-difféomorphisme (bijection $C^1$ de réciproque $C^1$) d'un voisinage ouvert de $x_0$ sur un voisinage ouvert de $F(x_0)$.

## Énoncé

**Proposition (poly, Proposition I.4.4, p. 14).** Soit $f\in\Hol(\Omega)$ et $z_0\in\Omega$ tel que $f'(z_0)\neq0$. Alors il existe un ouvert $\Omega_1\subset\Omega$ contenant $z_0$ tel que :

1. le sous-ensemble $\Omega_2:=f(\Omega_1)$ est un ouvert de $\C$ ;
2. la restriction de $f$ à $\Omega_1$ est une application biholomorphe de $\Omega_1$ sur $\Omega_2$.

De plus (établi dans la démonstration) : $f'$ ne s'annule pas sur $\Omega_1$, et la dérivée complexe de la réciproque est
$$
(f^{-1})'=\frac{1}{f'\circ f^{-1}}\qquad\text{sur }\Omega_2 .
$$

## Hypothèses

### H1 — $f$ est holomorphe sur l'ouvert $\Omega$ (et pas seulement $\C$-dérivable en $z_0$)

**Rôle.** Holomorphe implique $C^1$ au sens réel ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]) : c'est l'hypothèse de régularité du théorème d'inversion locale. L'holomorphie en chaque point de $\Omega_1$ sert aussi à montrer que $f^{-1}$ est holomorphe.

**Si on la retire.** La seule $\C$-dérivabilité en $z_0$ avec $f'(z_0)\ne0$ ne suffit pas. Soit $f(z)=\frac z2+|z|^2\sin\frac1{|z|}$ pour $z\neq0$, $f(0)=0$. Alors $\big|\frac{f(z)}{z}-\frac12\big|\le|z|\to0$ : $f$ est $\C$-dérivable en $0$ avec $f'(0)=\frac12\neq0$. Mais sur $]0,\eps[$, $f$ coïncide avec $g(x)=\frac x2+x^2\sin\frac1x$, et $g'(x)=\frac12+2x\sin\frac1x-\cos\frac1x$ vaut $-\frac12$ en $x=\frac1{2k\pi}$ et $\frac32$ en $x=\frac1{(2k+1)\pi}$ : $g$ n'est monotone sur aucun $]0,\eps[$, donc (continue) n'y est pas injective. Ainsi $f$ n'est injective sur aucun voisinage de $0$.

### H2 — $f'(z_0)\neq0$

**Rôle.** La différentielle $df_{z_0}$ est la multiplication par $f'(z_0)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]), de matrice $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$ avec $f'(z_0)=\alpha+i\beta$ ([[ch01-similitude-conforme]]), de déterminant $|f'(z_0)|^2$. Elle est inversible si et seulement si $f'(z_0)\neq0$ : c'est l'hypothèse du théorème d'inversion locale.

**Si on la retire.** $f(z)=z^2$, $z_0=0$ : $f'(0)=0$, et $f(-z)=f(z)$ avec $-z\ne z$ pour $z\ne0$, donc $f$ n'est injective sur **aucun** voisinage de $0$. L'hypothèse est d'ailleurs **nécessaire** : si $f|_{\Omega_1}$ est un biholomorphisme, dériver $f^{-1}\circ f=\mathrm{id}$ donne $(f^{-1})'(f(z_0))\,f'(z_0)=1$, donc $f'(z_0)\neq0$.

## Idée de la preuve

$df_{z_0}$ est une similitude non nulle, donc inversible : l'inversion locale réelle fournit un $C^1$-difféomorphisme local $f:\Omega_1\to\Omega_2$. En chaque point, la différentielle de $f^{-1}$ est l'inverse de celle de $f$, c'est-à-dire la multiplication par $1/f'(z)$, qui est $\C$-linéaire : $f^{-1}$ est $\C$-dérivable, de dérivée $1/(f'\circ f^{-1})$, continue.

## Preuve

**Étape 1 : inversion locale réelle.** Comme $f$ est holomorphe, elle est de classe $C^1$ au sens réel sur $\Omega$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]), et sa différentielle en $z_0$ est la multiplication par $f'(z_0)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]) ; sa matrice jacobienne est celle d'une similitude directe de rapport $|f'(z_0)|\neq0$ ([[ch01-similitude-conforme]]), c'est donc un isomorphisme de $\R^2$. Le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit un ouvert $\Omega_1\subset\Omega$ contenant $z_0$ tel que $\Omega_2:=f(\Omega_1)$ est un ouvert de $\C$ et que la restriction $f:\Omega_1\to\Omega_2$ est un $C^1$-difféomorphisme : une bijection dont la réciproque $f^{-1}:\Omega_2\to\Omega_1$ est de classe $C^1$ au sens réel. Cela prouve (i).

**Étape 2 : $f'$ ne s'annule pas sur $\Omega_1$.** Soit $z\in\Omega_1$ et $w=f(z)$. En différentiant $f^{-1}\circ f=\mathrm{id}_{\Omega_1}$ et $f\circ f^{-1}=\mathrm{id}_{\Omega_2}$ (règle de la chaîne, [[ch05-composition-differentielles]]), on obtient $d(f^{-1})_w\circ df_z=\mathrm{id}$ et $df_z\circ d(f^{-1})_w=\mathrm{id}$ : la matrice jacobienne de $f^{-1}$ en $w$ est l'inverse de celle de $f$ en $z$. En particulier $df_z$ est inversible ; or $df_z$ est la multiplication par $f'(z)$, d'où $f'(z)\neq0$.

**Étape 3 : $f^{-1}$ est holomorphe.** L'inverse de la multiplication par $f'(z)$ est la multiplication par $1/f'(z)$ ; donc $d(f^{-1})_w$ est la multiplication par $\frac{1}{f'(z)}$, matrice d'une similitude directe, application $\C$-linéaire. Comme $f^{-1}$ est différentiable en $w$ de différentielle $\C$-linéaire, elle est $\C$-dérivable en $w$ (Proposition I.2.3, [[ch01-c-derivable-ssi-df-c-lineaire]]) et
$$
(f^{-1})'(w)=\frac1{f'(z)}=\frac1{f'(f^{-1}(w))} .
$$
Enfin $w\mapsto\frac1{f'(f^{-1}(w))}$ est continue sur $\Omega_2$ (composée de $f^{-1}$, continue, de $f'$, continue, et de l'inverse, continue sur $\C^\times$). Donc $f^{-1}\in\Hol(\Omega_2)$, et $f|_{\Omega_1}$ est un biholomorphisme de $\Omega_1$ sur $\Omega_2$ : c'est (ii). $\square$

## Preuve à trous

Comme $f$ est holomorphe, elle est <trou indice="quelle régularité réelle exige le théorème d'inversion locale ?">de classe $C^1$ au sens réel</trou>, et $df_{z_0}$ est la multiplication par $f'(z_0)$, une similitude de déterminant <trou>$|f'(z_0)|^2\neq0$, donc un isomorphisme de $\R^2$</trou>. L'inversion locale fournit $\Omega_1\ni z_0$ ouvert, $\Omega_2=f(\Omega_1)$ ouvert, et $f:\Omega_1\to\Omega_2$ $C^1$-difféomorphisme.

Pour $z\in\Omega_1$, $w=f(z)$, la règle de la chaîne appliquée à $f^{-1}\circ f=\mathrm{id}$ donne <trou indice="relier $d(f^{-1})_w$ et $df_z$">$d(f^{-1})_w=(df_z)^{-1}$, ce qui force $f'(z)\neq0$</trou>. Ainsi $d(f^{-1})_w$ est la multiplication par $1/f'(z)$, application $\C$-linéaire, donc $f^{-1}$ est $\C$-dérivable en $w$ avec <trou>$(f^{-1})'(w)=\frac1{f'(f^{-1}(w))}$, fonction continue de $w$</trou> : $f^{-1}$ est holomorphe. $\square$

## Exemples

* **Racine carrée locale.** $f(z)=z^2$, $z_0=1$ : $f'(1)=2\ne0$. Sur $\Omega_1=\{\Re(z)>0\}$, $f$ est un biholomorphisme sur $\Omega_2=\C\setminus\R_-$ ([[ch01-def-biholomorphisme]]) ; la réciproque $f^{-1}=\sqrt{\cdot}$ (racine principale) vérifie $(f^{-1})'(w)=\frac1{2f^{-1}(w)}=\frac1{2\sqrt w}$. En $z_0=0$, au contraire, $f'(0)=0$ et il n'existe aucune racine carrée holomorphe sur un voisinage de $0$ (même pas une réciproque continue injective).
* **Logarithme local.** $f=\exp$, $f'=\exp\ne0$ partout : en tout $z_0$, $\exp$ est un biholomorphisme local, et la réciproque locale $\mathrm{Log}$ vérifie $\mathrm{Log}'(w)=\frac1{e^{\mathrm{Log}(w)}}=\frac1w$ ([[ch01-exp-image-c-etoile-log-local]]). Mais $\exp$ n'est pas injective sur $\C$ : l'inversion est **seulement locale**.
* **Un point critique de $\sin$.** $\sin'(\frac\pi2)=\cos\frac\pi2=0$ : la proposition ne s'applique pas, et en effet $\sin(\frac\pi2+h)=\cos h=\sin(\frac\pi2-h)$, donc $\sin$ n'est injective sur aucun voisinage de $\frac\pi2$. En revanche en $z_0=0$, $\sin'(0)=1$ : $\sin$ est un biholomorphisme local près de $0$, de réciproque locale $\arcsin$ avec $\arcsin'(w)=\frac1{\cos(\arcsin w)}$.

## Pièges

* > ⚠️ Le résultat est **local** : $f'\neq0$ partout ne donne pas l'injectivité globale ($\exp$ sur $\C$, $z\mapsto z^2$ sur $\C^\times$). Pour un biholomorphisme global, il faut en plus la bijectivité (et alors $f'\neq0$ est automatique, [[ch01-bijection-holomorphe-reciproque-holomorphe]]).
* Ne pas se contenter de $f'(z_0)\neq0$ pour une fonction seulement $\C$-dérivable en $z_0$ : il faut $f$ holomorphe (au moins $C^1$) sur un voisinage (contre-exemple H1).
* La formule $(f^{-1})'=\frac1{f'\circ f^{-1}}$ se dérive sur $\Omega_2$, en évaluant $f'$ au point **antécédent** $f^{-1}(w)$, pas en $w$.
* En réel, une bijection $C^\infty$ peut avoir une réciproque non dérivable ($x\mapsto x^3$) ; en complexe, la Remarque I.14.3 montre qu'une bijection holomorphe a toujours $f'\neq0$, donc une réciproque holomorphe.
