---
id: ch04-holomorphe-implique-harmonique
type: proposition
chapter: 4
title: Les fonctions holomorphes, leurs conjuguées, parties réelles et imaginaires sont harmoniques
ref: non numéroté, section IV.2, p. 76
page: 76
importance: 2
depends: [ch04-harmonique-def, ch01-laplacien-harmonique, ch01-holomorphe-analytique, ch01-cauchy-riemann, ch01-formulaire-dz-dzbar]
tags: [harmonique, holomorphe, laplacien, partie-reelle, conjuguee]
---
## Intuition

> 💡 Le laplacien se factorise : $\Delta = 4\,\partial_z\partial_{\bar z}$. Une fonction holomorphe est « tuée » par $\partial_{\bar z}$ (c'est Cauchy–Riemann), donc a fortiori par $\Delta$ : elle est harmonique. Sa conjuguée est tuée par $\partial_z$, donc aussi par $\Delta = 4\,\partial_{\bar z}\partial_z$. Comme $\Delta$ est linéaire, $\Re f = \tfrac12(f+\bar f)$ et $\Im f = \tfrac1{2i}(f-\bar f)$ sont harmoniques aussi.

C'est la source **de tous les exemples** de fonctions harmoniques que l'on rencontre : $x^2-y^2=\Re(z^2)$, $e^x\cos y=\Re(e^z)$, $\log|z| = \Re(\mathrm{Log}\,z)$, $\arg z = \Im(\mathrm{Log}\,z)$... Le Théorème IV.2.2 ([[ch04-harmonique-f-plus-g-barre]]) dira que, sur un ouvert simplement connexe, ce sont **essentiellement les seuls** : toute fonction harmonique est de la forme $f+\bar g$ avec $f,g$ holomorphes.

Rappels : une fonction est **harmonique** sur l'ouvert $\Omega$ si elle est de classe $C^2$ et de laplacien $\Delta f = \partial_x^2 f+\partial_y^2 f$ nul ([[ch04-harmonique-def]]) ; les opérateurs $\partial_z=\tfrac12(\partial_x-i\partial_y)$ et $\partial_{\bar z}=\tfrac12(\partial_x+i\partial_y)$ sont ceux de la Remarque I.2.2 ([[ch01-operateurs-dz-dzbar]]).

## Énoncé

**Proposition (poly, remarque non numérotée, section IV.2, p. 76).** Soit $\Omega$ un ouvert de $\C$ et $f\in\Hol(\Omega)$. Alors $f$ et $\bar f$ sont des fonctions harmoniques sur $\Omega$, et par conséquent
$$
\Re f = \tfrac12\,(f+\bar f) \qquad\text{et}\qquad \Im f = \tfrac1{2i}\,(f-\bar f)
$$
sont aussi des fonctions harmoniques (réelles) sur $\Omega$.

## Hypothèses

### H1 — $f$ est holomorphe sur l'ouvert $\Omega$

**Rôle.** Elle fournit les deux ingrédients de la preuve : la régularité $C^2$ (une fonction holomorphe est $C^\infty$, [[ch01-holomorphe-analytique]]), indispensable pour que $\Delta f$ ait un sens et que $\Delta=4\,\partial_z\partial_{\bar z}$ ; et l'équation de Cauchy–Riemann $\partial_{\bar z}f=0$ ([[ch01-cauchy-riemann]]), qui annule le laplacien.

**Si on la retire.** La fonction $f(z)=|z|^2 = x^2+y^2$ est $C^\infty$ sur $\C$ mais $\Delta f = 2+2 = 4\neq 0$ : elle n'est pas harmonique (et $\partial_{\bar z}(z\bar z) = z\neq0$ : elle n'est pas holomorphe). De même $f(z)=z^2\bar z$ : $4\,\partial_z\partial_{\bar z}(z^2\bar z) = 4\,\partial_z(z^2) = 8z\neq0$.

Attention, l'hypothèse n'est **pas nécessaire** : $\bar z$, $x=\Re z$, $\log|z|$ sont harmoniques sans être holomorphes. La réciproque exacte est le Théorème IV.2.2 ([[ch04-harmonique-f-plus-g-barre]]) : harmonique sur un ouvert simplement connexe $\iff$ de la forme $f+\bar g$, $f,g\in\Hol(\Omega)$. Et pour la version réelle « harmonique réelle $\Rightarrow$ partie réelle d'une holomorphe » ([[ch04-harmonique-reelle-partie-reelle]]), la simple connexité est indispensable : $\log|z|$ est harmonique réelle sur $\C^*$ mais n'est la partie réelle d'aucune fonction holomorphe sur $\C^*$ (ce serait, à une constante près, un logarithme holomorphe de $z$ sur $\C^*$, qui n'existe pas : voir la fiche [[ch04-harmonique-f-plus-g-barre]], hypothèse H1).

## Idée de la preuve

$f$ holomorphe est $C^\infty$ et vérifie $\partial_{\bar z}f = 0$ ; donc $\Delta f = 4\,\partial_z(\partial_{\bar z}f) = 0$. Pour $\bar f$, on conjugue : $\partial_z\bar f = \overline{\partial_{\bar z}f} = 0$ et $\Delta\bar f = 4\,\partial_{\bar z}(\partial_z\bar f) = 0$. On conclut par linéarité de $\Delta$.

## Preuve

Soit $f\in\Hol(\Omega)$.

*Régularité.* D'après le Théorème I.7.4 ([[ch01-holomorphe-analytique]]), $f$ est analytique donc de classe $C^\infty$ sur $\Omega$ comme fonction des deux variables réelles $(x,y)$ ; en particulier $f$ et $\bar f$ sont de classe $C^2$, et pour elles le laplacien s'écrit indifféremment $\Delta = 4\,\partial_z\partial_{\bar z} = 4\,\partial_{\bar z}\partial_z$ (Remarque I.2.8, [[ch01-laplacien-harmonique]] ; c'est le théorème de Schwarz qui autorise à permuter les dérivations).

*Cas de $f$.* Puisque $f$ est holomorphe, les conditions de Cauchy–Riemann ([[ch01-cauchy-riemann]]) donnent $\dfrac{\partial f}{\partial\bar z} = 0$ en tout point de $\Omega$. Donc
$$
\Delta f = 4\,\frac{\partial}{\partial z}\Big(\frac{\partial f}{\partial\bar z}\Big) = 4\,\frac{\partial}{\partial z}(0) = 0 ,
$$
et $f$ est harmonique.

*Cas de $\bar f$.* La formule de conjugaison (I.2.9) ([[ch01-formulaire-dz-dzbar]]) donne $\dfrac{\partial\bar f}{\partial z} = \overline{\dfrac{\partial f}{\partial\bar z}} = 0$. Donc
$$
\Delta\bar f = 4\,\frac{\partial}{\partial\bar z}\Big(\frac{\partial\bar f}{\partial z}\Big) = 0 ,
$$
et $\bar f$ est harmonique. (On peut aussi remarquer directement que $\Delta$ est un opérateur à coefficients réels, donc $\Delta\bar f = \overline{\Delta f} = 0$.)

*Parties réelle et imaginaire.* Le laplacien est $\C$-linéaire : $\Delta(\lambda u+\mu v) = \lambda\Delta u+\mu\Delta v$. Donc
$$
\Delta(\Re f) = \tfrac12\big(\Delta f+\Delta\bar f\big) = 0, \qquad \Delta(\Im f) = \tfrac1{2i}\big(\Delta f-\Delta\bar f\big) = 0 .
$$
Les fonctions $\Re f$ et $\Im f$, de classe $C^2$ comme $f$, sont harmoniques. $\square$

## Preuve à trous

Soit $f\in\Hol(\Omega)$. D'abord $f$ est <trou indice="quel théorème du chapitre I donne la régularité ?">de classe $C^\infty$ (holomorphe $\Rightarrow$ analytique, Théorème I.7.4)</trou>, donc $\Delta f$ a un sens et $\Delta = 4\,\partial_z\partial_{\bar z} = 4\,\partial_{\bar z}\partial_z$ sur $f$ et $\bar f$. Comme $f$ est holomorphe, <trou indice="Cauchy–Riemann en coordonnées complexes">$\partial_{\bar z}f = 0$</trou>, d'où $\Delta f = 4\,\partial_z(\partial_{\bar z}f) = 0$. Pour la conjuguée, <trou indice="formule (I.2.9)">$\partial_z\bar f = \overline{\partial_{\bar z}f} = 0$</trou>, d'où $\Delta\bar f = 4\,\partial_{\bar z}(\partial_z\bar f) = 0$. Enfin $\Delta$ est linéaire et $\Re f = \tfrac12(f+\bar f)$, $\Im f = \tfrac1{2i}(f-\bar f)$, donc $\Re f$ et $\Im f$ sont harmoniques. $\square$

## Exemples

* **Polynômes harmoniques.** $z^3 = (x+iy)^3 = (x^3-3xy^2) + i(3x^2y-y^3)$. Vérification directe pour $u = x^3-3xy^2$ : $\partial_x^2u = 6x$, $\partial_y^2u = -6x$, $\Delta u = 0$. Pour $v = 3x^2y-y^3$ : $\partial_x^2 v = 6y$, $\partial_y^2v = -6y$, $\Delta v = 0$. Plus généralement $\Re(z^n)$ et $\Im(z^n)$ sont les polynômes harmoniques homogènes de degré $n$ ; en coordonnées polaires ce sont $r^n\cos(n\theta)$ et $r^n\sin(n\theta)$.
* **Exponentielle.** $e^z = e^x\cos y + i\,e^x\sin y$. Pour $u = e^x\cos y$ : $\partial_x^2u = e^x\cos y$, $\partial_y^2 u = -e^x\cos y$, somme nulle ; de même pour $v = e^x\sin y$. Cette dernière, $v = \Im(e^z)$, est l'exemple type de fonction harmonique **non bornée** sur la bande $\{0<y<\pi\}$ bien que nulle au bord ($v(x,0) = e^x\sin 0 = 0$ et $v(x,\pi) = e^x\sin\pi = 0$, mais $v(x,\pi/2) = e^x\to+\infty$) : sans hypothèse de bornitude, « nulle au bord » n'implique pas « nulle » sur un ouvert non borné, à retenir pour [[ch04-maximum-unicite-bord]].
* **Logarithme et argument.** Sur $\Omega = \C\setminus\R_-$, $\mathrm{Log}\,z = \log|z| + i\,\mathrm{Arg}\,z$ est holomorphe ([[ch02-logarithme-determination-principale-def]]), donc $\log|z|$ et $\mathrm{Arg}\,z$ sont harmoniques sur $\Omega$. Comme l'harmonicité est une propriété locale et que $\log|z|$ est définie sur $\C^*$, $\log|z|$ est harmonique sur $\C^*$ tout entier (au voisinage d'un point de $\R_-^*$, on utilise une autre détermination du logarithme). Vérification directe : $h = \tfrac12\log(x^2+y^2)$, $\partial_x^2h = \dfrac{y^2-x^2}{(x^2+y^2)^2}$, $\partial_y^2 h = \dfrac{x^2-y^2}{(x^2+y^2)^2}$, somme nulle.
* **Inverse.** $\dfrac1z = \dfrac{\bar z}{|z|^2}$, donc $\dfrac{x}{x^2+y^2}$ et $\dfrac{-y}{x^2+y^2}$ sont harmoniques sur $\C^*$ (potentiel d'un dipôle).

## Pièges

* > ⚠️ Le résultat ne se renverse pas : harmonique $\not\Rightarrow$ holomorphe ($\bar z$, $x$, $\log|z|$). La bonne réciproque est $h = f+\bar g$ sur un ouvert simplement connexe ([[ch04-harmonique-f-plus-g-barre]]).
* Les fonctions harmoniques ne forment pas une algèbre : $x$ est harmonique, $x^2$ ne l'est pas ($\Delta x^2 = 2$). En particulier $|f|^2 = f\bar f$ n'est **pas** harmonique pour $f$ holomorphe non localement constante : $\Delta|f|^2 = 4\,\partial_z\partial_{\bar z}(f\bar f) = 4\,\partial_z\big(f\,\overline{f'}\big) = 4|f'|^2$.
* $|f|$ n'est pas harmonique non plus en général ; en revanche $\log|f|$ l'est là où $f\neq0$ : localement $\log|f| = \Re(\ell)$ où $\ell$ est un logarithme holomorphe de $f$ sur un petit disque ([[ch02-logarithme-existence]]).
* La régularité $C^2$ fait partie de la définition d'« harmonique » : ici elle est gratuite car holomorphe $\Rightarrow C^\infty$ ; ne pas l'oublier dans la rédaction.
* Dans $\Delta = 4\,\partial_z\partial_{\bar z}$, l'ordre des deux opérateurs est indifférent (Schwarz), mais pour $f$ on utilise $\partial_z(\partial_{\bar z} f)$ et pour $\bar f$ c'est $\partial_{\bar z}(\partial_z\bar f)$ qui est immédiat : choisir l'ordre qui fait apparaître le zéro.
