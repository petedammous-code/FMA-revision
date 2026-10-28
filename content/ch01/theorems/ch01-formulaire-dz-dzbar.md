---
id: ch01-formulaire-dz-dzbar
type: proposition
chapter: 1
title: "Règles de calcul pour $\partial/\partial z$ et $\partial/\partial\bar z$ (conjugaison, linéarité, produit, inverse)"
ref: Formules (I.2.9)–(I.2.12)
page: 8
importance: 2
depends: [ch01-operateurs-dz-dzbar]
tags: [dz, dzbar, wirtinger, formulaire, conjugaison, leibniz]
---
## Intuition

> 💡 On calcule avec $\dfrac{\partial}{\partial z}$ et $\dfrac{\partial}{\partial\bar z}$ **exactement comme avec des dérivées partielles ordinaires**, en faisant « comme si » $z$ et $\bar z$ étaient deux variables indépendantes : linéarité, règle de Leibniz pour un produit, dérivée de l'inverse. La seule règle nouvelle est la **conjugaison**, qui **échange** les deux opérateurs.

Rappel des définitions ([[ch01-operateurs-dz-dzbar]]) : pour $f:\Omega\to\C$ admettant des dérivées partielles $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$ au point considéré ($z = x+iy$),
$$
\frac{\partial f}{\partial z} = \frac12\Bigl(\frac{\partial f}{\partial x} - i\frac{\partial f}{\partial y}\Bigr), \qquad \frac{\partial f}{\partial \bar z} = \frac12\Bigl(\frac{\partial f}{\partial x} + i\frac{\partial f}{\partial y}\Bigr).
$$
Ces règles servent à **tester l'holomorphie** sans revenir à $x$ et $y$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]).

## Énoncé

**Proposition (poly, Formules (I.2.9)–(I.2.12), p. 8–9).** Soient $\Omega$ un ouvert de $\C$ et $f,g:\Omega\to\C$ de classe $C^1$ comme fonctions des deux variables réelles (pas nécessairement holomorphes). Alors :

* **(I.2.9) Conjugaison.** Pourvu que $f$ ait des dérivées partielles d'ordre 1 au point considéré,
$$
\overline{\frac{\partial f}{\partial z}} = \frac{\partial \bar f}{\partial \bar z} \qquad\text{et}\qquad \overline{\frac{\partial f}{\partial \bar z}} = \frac{\partial \bar f}{\partial z} ;
$$
en particulier, la décomposition (I.2.4) $d\bar f_z(\omega) = \frac{\partial \bar f}{\partial z}(z)\,\omega + \frac{\partial \bar f}{\partial \bar z}(z)\,\bar\omega$ s'obtient en conjuguant celle de $f$.
* **(I.2.10)** Pour tous $\lambda,\mu\in\C$,
$$
\frac{\partial(\lambda f+\mu g)}{\partial z} = \lambda\frac{\partial f}{\partial z}+\mu\frac{\partial g}{\partial z}, \qquad \frac{\partial (fg)}{\partial z} = \frac{\partial f}{\partial z}\,g + f\,\frac{\partial g}{\partial z}.
$$
* **(I.2.11)** Pour tous $\lambda,\mu\in\C$,
$$
\frac{\partial(\lambda f+\mu g)}{\partial \bar z} = \lambda\frac{\partial f}{\partial \bar z}+\mu\frac{\partial g}{\partial \bar z}, \qquad \frac{\partial (fg)}{\partial \bar z} = \frac{\partial f}{\partial \bar z}\,g + f\,\frac{\partial g}{\partial \bar z}.
$$
* **(I.2.12)** Sur l'ouvert où $f$ ne s'annule pas,
$$
\frac{\partial (1/f)}{\partial z} = -\frac{\partial f/\partial z}{f^2}, \qquad \frac{\partial (1/f)}{\partial \bar z} = -\frac{\partial f/\partial \bar z}{f^2}.
$$

## Hypothèses

### H1 — $f$, $g$ de classe $C^1$ (au sens réel)

**Rôle.** Les formules ne font intervenir que les dérivées partielles d'ordre 1 au point considéré : c'est tout ce que la preuve utilise. Le poly se place dans le cadre $C^1$ parce que c'est celui où (I.2.4) décrit la différentielle et où l'on applique ensuite ces formules ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]).

**Si on la retire.** Hypothèse de confort : les formules (I.2.9)–(I.2.12) restent vraies en un point dès que $f$ et $g$ y admettent des dérivées partielles d'ordre 1 (la preuve ci-dessous ne se sert que de cela ; pour (I.2.12), il faut en plus que $f$ ne s'annule pas sur deux petits segments horizontal et vertical passant par le point, ce qui est le cas si $f$ est continue et $f(z)\neq0$). Sans dérivées partielles, les formules n'ont simplement pas de sens.

### H2 — $f\neq 0$ (pour (I.2.12))

**Rôle.** $1/f$ doit être définie au voisinage du point, et l'on divise par $f^2$.

**Si on la retire.** Pour $f(z) = z$ en $0$ : $1/f$ n'est pas définie en $0$ et n'est bornée sur aucun voisinage de $0$, donc ne se prolonge même pas continûment ; la formule $-\frac{\partial f/\partial z}{f^2} = -\frac1{z^2}$ n'a pas de valeur en $0$. Comme $f$ est continue, $\{f\neq0\}$ est un ouvert, et (I.2.12) vaut sur cet ouvert.

## Idée de la preuve

$\partial/\partial z$ et $\partial/\partial\bar z$ sont des combinaisons linéaires à coefficients constants de $\partial/\partial x$ et $\partial/\partial y$, qui sont $\C$-linéaires, vérifient Leibniz et commutent avec la conjugaison. On transporte ces trois propriétés ; la conjugaison change $-i$ en $+i$, d'où l'échange des opérateurs.

## Preuve

On fixe un point $z_0 = x_0+iy_0\in\Omega$. Les dérivées partielles d'une fonction $h:\Omega\to\C$ sont des dérivées de fonctions d'**une variable réelle**, par exemple $\frac{\partial h}{\partial x}(z_0) = \lim_{t\to0,\,t\in\R}\frac{h(z_0+t)-h(z_0)}{t}$, à valeurs dans $\C$.

*Propriétés des dérivées partielles.* Pour une fonction $\varphi$ d'une variable réelle $t$ à valeurs complexes, dérivable en $t_0$ :

* $\bar\varphi$ est dérivable et $(\bar\varphi)'(t_0) = \overline{\varphi'(t_0)}$, car $\frac{\bar\varphi(t_0+t)-\bar\varphi(t_0)}{t} = \overline{\Bigl(\frac{\varphi(t_0+t)-\varphi(t_0)}{t}\Bigr)}$ ($t$ réel) et la conjugaison est continue ;
* $(\lambda\varphi + \mu\psi)' = \lambda\varphi' + \mu\psi'$ pour $\lambda,\mu\in\C$, et $(\varphi\psi)' = \varphi'\psi + \varphi\psi'$ (même preuve qu'en réel : $\varphi(t_0+t)\psi(t_0+t) - \varphi(t_0)\psi(t_0) = (\varphi(t_0+t)-\varphi(t_0))\psi(t_0+t) + \varphi(t_0)(\psi(t_0+t)-\psi(t_0))$, et $\psi$ est continue en $t_0$ car dérivable) ;
* si $\varphi(t_0)\neq0$ et $\varphi$ ne s'annule pas près de $t_0$, $(1/\varphi)'(t_0) = -\varphi'(t_0)/\varphi(t_0)^2$ (écrire $\frac{1/\varphi(t_0+t) - 1/\varphi(t_0)}{t} = -\frac{\varphi(t_0+t)-\varphi(t_0)}{t}\cdot\frac{1}{\varphi(t_0+t)\varphi(t_0)}$).

Appliquées à $t\mapsto h(z_0+t)$ et $t\mapsto h(z_0+it)$, elles donnent les mêmes règles pour $\frac{\partial}{\partial x}$ et $\frac{\partial}{\partial y}$.

*(I.2.9).* Avec $\frac{\partial\bar f}{\partial x} = \overline{\frac{\partial f}{\partial x}}$ et $\frac{\partial\bar f}{\partial y} = \overline{\frac{\partial f}{\partial y}}$ :
$$
\overline{\frac{\partial f}{\partial z}} = \frac12\Bigl(\overline{\frac{\partial f}{\partial x}} + i\,\overline{\frac{\partial f}{\partial y}}\Bigr) = \frac12\Bigl(\frac{\partial \bar f}{\partial x} + i\frac{\partial \bar f}{\partial y}\Bigr) = \frac{\partial \bar f}{\partial \bar z},
$$
car $\overline{-i} = i$. La seconde égalité s'obtient de même (ou en appliquant la première à $\bar f$, puisque $\bar{\bar f} = f$). Conséquence : en conjuguant (I.2.4), $\overline{df_z(\omega)} = \overline{\frac{\partial f}{\partial z}}\,\bar\omega + \overline{\frac{\partial f}{\partial \bar z}}\,\omega = \frac{\partial \bar f}{\partial z}\,\omega + \frac{\partial \bar f}{\partial \bar z}\,\bar\omega$, et $\overline{df_z(\omega)} = d\bar f_z(\omega)$ : c'est la décomposition (I.2.4) de $\bar f$.

*(I.2.10) et (I.2.11).* Les opérateurs $\frac{\partial}{\partial x}$ et $\frac{\partial}{\partial y}$ sont $\C$-linéaires, donc $\frac{\partial}{\partial z} = \frac12(\frac{\partial}{\partial x} - i\frac{\partial}{\partial y})$ et $\frac{\partial}{\partial \bar z}$ le sont aussi. Pour le produit :
$$
\frac{\partial (fg)}{\partial z} = \frac12\Bigl(\frac{\partial f}{\partial x}g + f\frac{\partial g}{\partial x} - i\frac{\partial f}{\partial y}g - if\frac{\partial g}{\partial y}\Bigr) = \frac12\Bigl(\frac{\partial f}{\partial x} - i\frac{\partial f}{\partial y}\Bigr)g + f\,\frac12\Bigl(\frac{\partial g}{\partial x} - i\frac{\partial g}{\partial y}\Bigr) = \frac{\partial f}{\partial z}g + f\frac{\partial g}{\partial z},
$$
et le même calcul avec $+i$ donne la formule pour $\frac{\partial}{\partial\bar z}$.

*(I.2.12).* $f$ étant continue, $U = \{f\neq0\}$ est ouvert, et sur $U$ on a $\frac{\partial (1/f)}{\partial x} = -\frac{\partial f/\partial x}{f^2}$, $\frac{\partial (1/f)}{\partial y} = -\frac{\partial f/\partial y}{f^2}$. Donc
$$
\frac{\partial (1/f)}{\partial z} = \frac12\Bigl(-\frac{\partial f/\partial x}{f^2} + i\frac{\partial f/\partial y}{f^2}\Bigr) = -\frac{1}{f^2}\cdot\frac12\Bigl(\frac{\partial f}{\partial x} - i\frac{\partial f}{\partial y}\Bigr) = -\frac{\partial f/\partial z}{f^2},
$$
et de même pour $\frac{\partial}{\partial\bar z}$. *Variante du poly :* le poly dit « on en déduit » à partir de Leibniz : en dérivant $f\cdot\frac1f = 1$, on obtient $\frac{\partial f}{\partial z}\cdot\frac1f + f\,\frac{\partial(1/f)}{\partial z} = 0$ ; cela suppose de savoir déjà que $1/f$ a des dérivées partielles, ce que donne le calcul ci-dessus. $\square$

## Preuve à trous

Pour une fonction $\varphi$ d'une variable **réelle** à valeurs complexes, on a $(\bar\varphi)' = \overline{\varphi'}$ car <trou indice="le taux d'accroissement est divisé par un réel">$\frac{\bar\varphi(t_0+t)-\bar\varphi(t_0)}{t}$ est le conjugué du taux d'accroissement de $\varphi$, $t$ étant réel</trou> ; et Leibniz $(\varphi\psi)' = \varphi'\psi+\varphi\psi'$, $(1/\varphi)' = -\varphi'/\varphi^2$ se prouvent comme en réel. Donc $\frac{\partial}{\partial x}$, $\frac{\partial}{\partial y}$ vérifient ces règles.

*(I.2.9).* $\overline{\frac{\partial f}{\partial z}} = \frac12\bigl(\overline{\partial_x f} + i\,\overline{\partial_y f}\bigr)$ <trou indice="conjuguer $-i$">$= \frac12(\partial_x\bar f + i\,\partial_y\bar f) = \frac{\partial\bar f}{\partial\bar z}$</trou>.

*(I.2.10)–(I.2.11).* Linéarité : $\frac{\partial}{\partial z}$, $\frac{\partial}{\partial \bar z}$ sont des combinaisons à coefficients constants de $\partial_x,\partial_y$, qui sont $\C$-linéaires. Produit : $\frac{\partial(fg)}{\partial z} = \frac12\bigl((\partial_xf)g + f\partial_xg - i(\partial_yf)g - if\partial_yg\bigr) =$ <trou>$\frac{\partial f}{\partial z}g + f\frac{\partial g}{\partial z}$, en regroupant les termes en $g$ et en $f$</trou>.

*(I.2.12).* Sur l'ouvert $\{f\neq0\}$, $\partial_x(1/f) = -\partial_xf/f^2$ et $\partial_y(1/f) = -\partial_yf/f^2$, d'où <trou>$\frac{\partial(1/f)}{\partial z} = -\frac1{f^2}\cdot\frac12(\partial_xf - i\partial_yf) = -\frac{\partial f/\partial z}{f^2}$</trou>. $\square$

## Exemples

* **Les briques de base.** Avec $z = x+iy$ et $\bar z = x - iy$ : $\frac{\partial z}{\partial x} = 1$, $\frac{\partial z}{\partial y} = i$, donc
$$
\frac{\partial z}{\partial z} = \tfrac12(1 - i\cdot i) = 1,\quad \frac{\partial z}{\partial \bar z} = \tfrac12(1 + i\cdot i) = 0,\quad \frac{\partial \bar z}{\partial z} = \tfrac12(1 - i\cdot(-i)) = 0,\quad \frac{\partial \bar z}{\partial \bar z} = \tfrac12(1 + i\cdot(-i)) = 1.
$$
(Les deux dernières découlent aussi des deux premières par (I.2.9).) Par récurrence avec Leibniz, pour $m,n\in\N$ :
$$
\frac{\partial (z^m\bar z^n)}{\partial z} = m\,z^{m-1}\bar z^n, \qquad \frac{\partial (z^m\bar z^n)}{\partial \bar z} = n\,z^m\bar z^{n-1}
$$
(avec la convention que le terme est nul si $m=0$, resp. $n=0$) : on dérive « en $z$ à $\bar z$ fixé » et inversement.
* **Un test d'holomorphie.** $f(z) = z^2\bar z + 3\bar z - iz^3$. Par linéarité, $\frac{\partial f}{\partial \bar z} = z^2 + 3$, qui ne s'annule qu'en $z = \pm i\sqrt3$ : $f$ n'est holomorphe sur aucun ouvert non vide, et n'est $\C$-dérivable qu'en $\pm i\sqrt 3$ ([[ch01-cauchy-riemann]]).
* **Inverse.** Sur $\C^\times$, $\frac{\partial}{\partial\bar z}\bigl(\frac1{\bar z}\bigr) = -\frac{1}{\bar z^2}$ et $\frac{\partial}{\partial z}\bigl(\frac1{\bar z}\bigr) = -\frac{0}{\bar z^2} = 0$. De même $\frac{\partial}{\partial \bar z}\bigl(\frac1z\bigr) = 0$ : $1/z$ est holomorphe sur $\C^\times$, et $\frac{\partial}{\partial z}\bigl(\frac1z\bigr) = -\frac1{z^2}$. Contrôle par (I.2.9) : $\overline{\partial(1/z)/\partial z} = -1/\bar z^2 = \partial(1/\bar z)/\partial\bar z$.

## Pièges

* > ⚠️ La conjugaison **échange** les opérateurs : $\overline{\partial f/\partial \bar z} = \partial\bar f/\partial z$, et non $\partial \bar f/\partial\bar z$. Contre-exemple à la fausse formule : $f = z$, $\overline{\partial z/\partial\bar z} = 0$ mais $\partial\bar z/\partial\bar z = 1$.
* $\dfrac{\partial f}{\partial z}$ n'est pas « la dérivée de $f$ » en général ; ce n'est la dérivée complexe $f'$ que si $f$ est $\C$-dérivable ([[ch01-cauchy-riemann]]).
* « $z$ et $\bar z$ indépendants » est une **règle de calcul** (justifiée par ces formules pour des expressions polynomiales/rationnelles en $z$ et $\bar z$), pas une affirmation : bien sûr $\bar z$ est déterminé par $z$.
* Pour les **composées**, il n'y a pas de formule « $(\partial f/\partial z)\circ g\times\partial g/\partial z$ » : il faut la règle de la chaîne complète avec deux termes ([[ch01-chaine-dz-dzbar]]).
