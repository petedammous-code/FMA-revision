---
id: ch01-chaine-dz-dzbar
type: lemma
chapter: 1
title: "Règle de la chaîne pour $\partial/\partial z$ et $\partial/\partial\bar z$"
ref: Lemme I.2.9
page: 10
importance: 2
depends: [ch01-operateurs-dz-dzbar, ch01-decomposition-r-lineaire, ch01-formulaire-dz-dzbar, ch05-composition-differentielles]
tags: [chaine, composition, dz, dzbar, wirtinger]
---
## Intuition

> 💡 Si l'on pense à $f$ comme à une fonction des « deux variables » $w$ et $\bar w$, et que l'on y substitue $w = g(z)$, $\bar w = \bar g(z)$, la règle de la chaîne à deux variables donne exactement
$$
\frac{\partial (f\circ g)}{\partial z} = \frac{\partial f}{\partial w}\cdot\frac{\partial g}{\partial z} + \frac{\partial f}{\partial \bar w}\cdot\frac{\partial \bar g}{\partial z},
$$
et de même pour $\frac{\partial}{\partial\bar z}$. C'est la règle de dérivation des fonctions composées $\frac{\partial F}{\partial t} = \frac{\partial F}{\partial u}\frac{\partial u}{\partial t}+\frac{\partial F}{\partial v}\frac{\partial v}{\partial t}$, réécrite dans les « coordonnées » $(z,\bar z)$.

Ici $\frac{\partial}{\partial z} = \frac12(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y})$ et $\frac{\partial}{\partial\bar z} = \frac12(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y})$ ([[ch01-operateurs-dz-dzbar]]) ; ce sont les coefficients de la différentielle dans la décomposition (I.2.4) : $df_z(\omega) = \frac{\partial f}{\partial z}(z)\,\omega + \frac{\partial f}{\partial\bar z}(z)\,\bar\omega$. Le lemme sert à montrer que **la composée de deux fonctions holomorphes est holomorphe** ([[ch01-stabilite-operations]]).

## Énoncé

**Lemme (poly, Lemme I.2.9, p. 10).** Soient $\Omega$, $\Omega'$ deux ouverts de $\C$, et $g:\Omega\to\Omega'$, $f:\Omega'\to\C$ deux fonctions de classe $C^1$ comme fonctions de deux variables réelles. On a, pour tout $z\in\Omega$,
$$
\frac{\partial (f\circ g)}{\partial z}(z) = \Bigl(\frac{\partial f}{\partial z}\circ g\Bigr)(z)\times\frac{\partial g}{\partial z}(z) + \Bigl(\frac{\partial f}{\partial \bar z}\circ g\Bigr)(z)\times\frac{\partial \bar g}{\partial z}(z),
$$
et
$$
\frac{\partial (f\circ g)}{\partial \bar z}(z) = \Bigl(\frac{\partial f}{\partial z}\circ g\Bigr)(z)\times\frac{\partial g}{\partial \bar z}(z) + \Bigl(\frac{\partial f}{\partial \bar z}\circ g\Bigr)(z)\times\frac{\partial \bar g}{\partial \bar z}(z).
$$
(Dans $\frac{\partial f}{\partial z}\circ g$, la variable de $f$ est notée $z$ par abus ; on évalue $\frac{\partial f}{\partial z}$ au point $g(z)$.)

## Hypothèses

### H1 — $g$ de classe $C^1$ (en fait : différentiable en $z$)

**Rôle.** On utilise la différentielle $dg_z$ et sa décomposition (I.2.4) ; la preuve ne se sert que de la différentiabilité de $g$ au point $z$. Le $C^1$ sert à ce que $f\circ g$ soit elle-même $C^1$.

**Si on la retire.** Sans différentiabilité, la règle de la chaîne peut échouer même si toutes les dérivées partielles existent ; voir H2 (l'exemple s'adapte en échangeant les rôles).

### H2 — $f$ de classe $C^1$ (en fait : différentiable en $g(z)$)

**Rôle.** On applique la formule de composition des différentielles $d(f\circ g)_z = df_{g(z)}\circ dg_z$, qui exige que $f$ soit **différentiable** en $g(z)$ (l'existence des dérivées partielles ne suffit pas).

**Si on la retire.** Soit $f(x+iy) = \dfrac{x^2y}{x^2+y^2}$, $f(0)=0$ ; $f$ est continue ($|f|\le|y|$) et $f(x,0) = f(0,y) = 0$, donc $\frac{\partial f}{\partial x}(0) = \frac{\partial f}{\partial y}(0) = 0$ et $\frac{\partial f}{\partial z}(0) = \frac{\partial f}{\partial \bar z}(0) = 0$. Soit $g(x+iy) = x + ix$ (linéaire, $C^\infty$, $g(0)=0$). Alors $(f\circ g)(x+iy) = \frac{x^2\cdot x}{2x^2} = \frac x2$ (et $0$ si $x=0$), donc $\frac{\partial (f\circ g)}{\partial z}(0) = \frac12\bigl(\frac12 - i\cdot0\bigr) = \frac14$, alors que le membre de droite de la formule vaut $0\times\frac{\partial g}{\partial z}(0) + 0\times\frac{\partial \bar g}{\partial z}(0) = 0$. La formule est fausse : $f$ n'est pas différentiable en $0$.

### H3 — $g(\Omega)\subset\Omega'$

**Rôle.** La composée $f\circ g$ doit être définie sur $\Omega$.

**Si on la retire.** La formule n'a de sens que sur l'ouvert $g^{-1}(\Omega')$ (ouvert car $g$ est continue), où elle reste vraie.

## Idée de la preuve

On compose les différentielles, $d(f\circ g)_z = df_{g(z)}\circ dg_z$, on développe avec la décomposition $L(\omega) = a\omega + b\bar\omega$ appliquée à $df_{g(z)}$, $dg_z$ et $d\bar g_z = \overline{dg_z}$, puis on identifie les coefficients de $\omega$ et $\bar\omega$ grâce à l'unicité de cette décomposition.

## Preuve

Fixons $z\in\Omega$. Comme $g$ est différentiable en $z$ et $f$ en $g(z)$, la composée $f\circ g$ est différentiable en $z$ et
$$
d(f\circ g)_z = df_{g(z)}\circ dg_z
$$
(composition des différentielles, [[ch05-composition-differentielles]]). D'après (I.2.4) appliquée à $g$ puis à $\bar g$ (qui est différentiable avec $d\bar g_z(\omega) = \overline{dg_z(\omega)}$, la conjugaison étant $\R$-linéaire) : pour tout $\omega\in\C$,
$$
dg_z(\omega) = \frac{\partial g}{\partial z}(z)\,\omega + \frac{\partial g}{\partial \bar z}(z)\,\bar\omega, \qquad \overline{dg_z(\omega)} = d\bar g_z(\omega) = \frac{\partial \bar g}{\partial z}(z)\,\omega + \frac{\partial \bar g}{\partial \bar z}(z)\,\bar\omega.
$$
En appliquant (I.2.4) à $f$ au point $g(z)$, avec l'accroissement $h = dg_z(\omega)$ :
$$
\begin{aligned}
d(f\circ g)_z(\omega) &= \frac{\partial f}{\partial z}(g(z))\,dg_z(\omega) + \frac{\partial f}{\partial \bar z}(g(z))\,\overline{dg_z(\omega)} \\
&= \Bigl(\frac{\partial f}{\partial z}(g(z))\frac{\partial g}{\partial z}(z) + \frac{\partial f}{\partial \bar z}(g(z))\frac{\partial \bar g}{\partial z}(z)\Bigr)\omega + \Bigl(\frac{\partial f}{\partial z}(g(z))\frac{\partial g}{\partial \bar z}(z) + \frac{\partial f}{\partial \bar z}(g(z))\frac{\partial \bar g}{\partial \bar z}(z)\Bigr)\bar\omega.
\end{aligned}
$$
D'autre part, (I.2.4) appliquée à $f\circ g$ donne $d(f\circ g)_z(\omega) = \frac{\partial (f\circ g)}{\partial z}(z)\,\omega + \frac{\partial (f\circ g)}{\partial \bar z}(z)\,\bar\omega$. Par **unicité** de l'écriture $L(\omega) = a\omega + b\bar\omega$ d'une application $\R$-linéaire $L:\C\to\C$ ([[ch01-decomposition-r-lineaire|Lemme I.2.1]]), on identifie les coefficients de $\omega$ et de $\bar\omega$ : ce sont les deux formules de l'énoncé. $\square$

## Preuve à trous

La composée est différentiable et <trou indice="règle de la chaîne pour les différentielles">$d(f\circ g)_z = df_{g(z)}\circ dg_z$</trou>. On écrit $dg_z(\omega) = \frac{\partial g}{\partial z}\omega + \frac{\partial g}{\partial \bar z}\bar\omega$ et, pour le conjugué, <trou indice="la conjugaison est R-linéaire">$\overline{dg_z(\omega)} = d\bar g_z(\omega) = \frac{\partial \bar g}{\partial z}\omega + \frac{\partial \bar g}{\partial \bar z}\bar\omega$</trou>. Puis, avec (I.2.4) pour $f$ en $g(z)$ :
$$
d(f\circ g)_z(\omega) = \frac{\partial f}{\partial z}(g(z))\,dg_z(\omega) + \frac{\partial f}{\partial \bar z}(g(z))\,\overline{dg_z(\omega)},
$$
que l'on développe en $(\ldots)\,\omega + (\ldots)\,\bar\omega$. Enfin, <trou indice="Lemme I.2.1">l'unicité de la décomposition $L(\omega) = a\omega + b\bar\omega$ permet d'identifier les coefficients de $\omega$ et $\bar\omega$ avec $\frac{\partial(f\circ g)}{\partial z}(z)$ et $\frac{\partial(f\circ g)}{\partial \bar z}(z)$</trou>. $\square$

## Exemples

* **Vérification sur $|z|^4$.** $f(w) = |w|^2 = w\bar w$, $g(z) = z^2$, donc $f\circ g(z) = z^2\bar z^2$. Directement : $\frac{\partial (z^2\bar z^2)}{\partial z} = 2z\bar z^2$. Par le lemme : $\frac{\partial f}{\partial w} = \bar w$, $\frac{\partial f}{\partial \bar w} = w$, $\frac{\partial g}{\partial z} = 2z$, $\frac{\partial \bar g}{\partial z} = \frac{\partial \bar z^2}{\partial z} = 0$, d'où $\overline{g(z)}\cdot 2z + g(z)\cdot 0 = 2z\bar z^2$ ✓. Et pour $\frac{\partial}{\partial\bar z}$ : $\bar z^2\cdot 0 + z^2\cdot 2\bar z = 2z^2\bar z$ ✓.
* **Cas où $g$ est holomorphe.** Alors $\frac{\partial g}{\partial\bar z} = 0$, $\frac{\partial g}{\partial z} = g'$, et par (I.2.9) $\frac{\partial\bar g}{\partial z} = \overline{\partial g/\partial \bar z} = 0$, $\frac{\partial\bar g}{\partial\bar z} = \overline{g'}$ ([[ch01-formulaire-dz-dzbar]]). Le lemme devient
$$
\frac{\partial (f\circ g)}{\partial z} = \Bigl(\frac{\partial f}{\partial z}\circ g\Bigr)\, g', \qquad \frac{\partial (f\circ g)}{\partial \bar z} = \Bigl(\frac{\partial f}{\partial \bar z}\circ g\Bigr)\,\overline{g'}.
$$
Si de plus $f$ est holomorphe, $\frac{\partial(f\circ g)}{\partial\bar z} = 0$ et $(f\circ g)' = (f'\circ g)\,g'$ ([[ch01-formules-derivation]]).
* **Laplacien d'une composée.** Si $f$ est $C^2$ et $g$ holomorphe, en dérivant encore ($\frac{\partial}{\partial z}\overline{g'} = \overline{\partial g'/\partial\bar z} = 0$, et le lemme appliqué à $\frac{\partial f}{\partial\bar z}$) :
$$
\frac{\partial^2 (f\circ g)}{\partial z\partial\bar z} = \Bigl(\frac{\partial^2 f}{\partial z\partial \bar z}\circ g\Bigr)\,g'\,\overline{g'}, \qquad\text{donc}\qquad \Delta(f\circ g) = |g'|^2\,(\Delta f)\circ g
$$
([[ch01-laplacien-harmonique]]) : une fonction harmonique composée avec une fonction holomorphe reste harmonique ([[ch04-composition-harmonique-holomorphe]]).

## Pièges

* > ⚠️ Il y a **deux termes** : oublier le terme en $\frac{\partial f}{\partial\bar z}\cdot\frac{\partial\bar g}{\partial z}$ est l'erreur classique. Exemple : $f(w) = \bar w$, $g(z) = \bar z$ ; $f\circ g(z) = z$ a $\frac{\partial}{\partial z} = 1$, alors que le seul premier terme donne $0\times 0 = 0$ ; c'est le second, $1\times\frac{\partial z}{\partial z} = 1$, qui compte.
* $\frac{\partial\bar g}{\partial z}$ n'est pas $\overline{\frac{\partial g}{\partial z}}$ mais $\overline{\frac{\partial g}{\partial\bar z}}$ (la conjugaison échange les opérateurs, (I.2.9)).
* La différentiabilité de $f$ (pas seulement l'existence des dérivées partielles) est indispensable (H2).
