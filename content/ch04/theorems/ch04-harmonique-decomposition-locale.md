---
id: ch04-harmonique-decomposition-locale
type: corollary
chapter: 4
title: Décomposition locale $h=f+\bar g$ sur un ouvert quelconque
ref: Remarque IV.2.3
page: 77
importance: 2
depends: [ch04-harmonique-f-plus-g-barre, ch02-etoile-simplement-connexe, ch01-holomorphe-analytique]
tags: [harmonique, local, disque, simplement-connexe, regularite]
---
## Intuition

> 💡 Être harmonique est une propriété **locale** (c'est une équation aux dérivées partielles, vérifiée point par point). Et tout point d'un ouvert est le centre d'un petit disque contenu dans l'ouvert ; un disque est convexe, donc simplement connexe. On peut donc appliquer le Théorème IV.2.2 **disque par disque**, même si l'ouvert global $\Omega$ a des trous : on perd seulement le recollement des morceaux.

Image mentale : $\log|z|$ sur $\C^*$. Sur chaque disque $D$ évitant $0$, on dispose d'une détermination holomorphe $\ell_D$ du logarithme et $\log|z| = \tfrac12\ell_D+\overline{\tfrac12\ell_D}$. Quand on fait le tour de l'origine en passant de disque en disque, les $\ell_D$ se décalent de $2i\pi$ : les morceaux ne se recollent pas en une écriture globale, mais chaque morceau existe.

Conséquence capitale et gratuite : une fonction harmonique, supposée seulement $C^2$, est en fait $C^\infty$, puisqu'elle est localement somme de deux fonctions $C^\infty$ (les holomorphes sont analytiques, [[ch01-holomorphe-analytique]]).

Rappel : $h$ **harmonique** sur $\Omega$ signifie $C^2$ et $\Delta h = 4\,\partial_z\partial_{\bar z}h = 0$ ([[ch04-harmonique-def]]) ; le résultat global sur un ouvert simplement connexe est [[ch04-harmonique-f-plus-g-barre]].

## Énoncé

**Corollaire (poly, Remarque IV.2.3, p. 77).** Soit $\Omega$ un ouvert quelconque de $\C$ (non nécessairement simplement connexe) et $h:\Omega\to\C$ une fonction harmonique. Alors $h$ s'écrit **localement** comme la somme d'une fonction holomorphe et de la conjuguée d'une fonction holomorphe : pour tout disque ouvert $D\subset\Omega$, il existe $f_D,g_D\in\Hol(D)$ tels que
$$
h|_D = f_D+\overline{g_D} .
$$
En particulier, tout point de $\Omega$ possède un voisinage ouvert sur lequel une telle écriture existe, et toute fonction harmonique sur $\Omega$ est de classe $C^\infty$.

## Hypothèses

### H1 — $h$ est harmonique sur $\Omega$

**Rôle.** On applique le Théorème IV.2.2 à la restriction $h|_D$, qui est harmonique sur $D$ : l'harmonicité se restreint à tout ouvert plus petit (les dérivées partielles en un point ne dépendent que des valeurs au voisinage du point).

**Si on la retire.** Toute fonction de la forme $f_D+\overline{g_D}$ est harmonique sur $D$ ([[ch04-holomorphe-implique-harmonique]]). Donc $|z|^2$ ($\Delta|z|^2 = 4$) n'admet d'écriture $f+\bar g$ sur **aucun** disque, aussi petit soit-il. La condition est locale dans les deux sens.

### H2 — On restreint à des **disques** (ou à des ouverts simplement connexes)

**Rôle.** Un disque $D(z_0,r)$ est convexe, donc étoilé, donc simplement connexe ([[ch02-etoile-simplement-connexe]]) : c'est ce qui autorise le Théorème IV.2.2 sur $D$. Tout ouvert simplement connexe $U\subset\Omega$ conviendrait aussi.

**Si on la retire.** Sur un sous-ouvert non simplement connexe, l'écriture peut ne pas exister : $\log|z|$ est harmonique sur la couronne $A = \{1<|z|<2\}\subset\C^*$ mais ne s'écrit pas $f+\bar g$ avec $f,g\in\Hol(A)$. L'argument est celui de la fiche [[ch04-harmonique-f-plus-g-barre]] (hypothèse H1) : on en déduirait $F\in\Hol(A)$ avec $\Re F = \log|z|$, puis $e^F/z$ de module $1$ donc constant sur $A$ connexe, puis $F' = 1/z$, et $\int_{C(0,3/2)}\frac{dz}{z} = 2i\pi$ devrait être nul ([[ch01-integrale-primitive]]) : contradiction.

## Idée de la preuve

Restreindre $h$ à un disque $D\subset\Omega$ ; $D$ est simplement connexe ; appliquer le Théorème IV.2.2 à $h|_D$. La régularité $C^\infty$ vient de celle des fonctions holomorphes.

## Preuve

Soit $D = D(z_0,r)\subset\Omega$ un disque ouvert. La fonction $h|_D$ est de classe $C^2$ sur $D$ et vérifie $\Delta(h|_D) = (\Delta h)|_D = 0$ : elle est harmonique sur $D$. Le disque $D$ est convexe : pour $z,w\in D$ et $t\in[0,1]$, $|(1-t)z+tw-z_0|\le(1-t)|z-z_0|+t|w-z_0|<r$. Il est donc étoilé (par rapport à n'importe lequel de ses points), donc simplement connexe par la Proposition II.1.5 ([[ch02-etoile-simplement-connexe]]). Le Théorème IV.2.2 ([[ch04-harmonique-f-plus-g-barre]]) appliqué à $h|_D$ sur l'ouvert simplement connexe $D$ fournit $f_D,g_D\in\Hol(D)$ avec $h|_D = f_D+\overline{g_D}$.

Tout point $z_0\in\Omega$ est le centre d'un disque $D(z_0,r)\subset\Omega$ ($\Omega$ est ouvert), ce qui donne l'énoncé « localement ».

*Régularité.* Sur $D$, les fonctions $f_D$ et $g_D$ sont holomorphes, donc analytiques et de classe $C^\infty$ comme fonctions de $(x,y)$ (Théorème I.7.4, [[ch01-holomorphe-analytique]]) ; la conjugaison complexe préserve la classe $C^\infty$ (elle conjugue les coefficients des dérivées partielles) ; donc $h|_D = f_D+\overline{g_D}$ est $C^\infty$ sur $D$. Comme $D$ parcourt des disques recouvrant $\Omega$ et que la classe $C^\infty$ est une propriété locale, $h$ est $C^\infty$ sur $\Omega$. $\square$

## Preuve à trous

Soit $D\subset\Omega$ un disque ouvert. La restriction $h|_D$ est harmonique sur $D$ car <trou indice="pourquoi l'harmonicité passe à la restriction ?">les dérivées partielles en un point ne dépendent que des valeurs au voisinage de ce point : $\Delta(h|_D) = (\Delta h)|_D = 0$</trou>. Le disque $D$ est <trou indice="quelle propriété géométrique entraîne la simple connexité ?">convexe, donc étoilé, donc simplement connexe (Proposition II.1.5)</trou>. On applique donc <trou>le Théorème IV.2.2 à $h|_D$ : il existe $f_D,g_D\in\Hol(D)$ avec $h|_D = f_D+\overline{g_D}$</trou>. Enfin $f_D$ et $g_D$ sont $C^\infty$ (holomorphe $\Rightarrow$ analytique), donc $h$ est $C^\infty$ sur chaque disque, donc sur $\Omega$. $\square$

## Exemples

* **$\log|z|$ sur $\C^*$.** Soit $D\subset\C^*$ un disque. Comme $D$ est simplement connexe et que $z\mapsto z$ ne s'annule pas sur $D$, il existe un logarithme holomorphe $\ell_D$ de $z$ sur $D$ ([[ch02-logarithme-existence]]) : $e^{\ell_D(z)} = z$, donc $\Re\,\ell_D(z) = \log|z|$ et
$$
\log|z| = \tfrac12\ell_D+\overline{\tfrac12\ell_D} \quad\text{sur } D ,\qquad f_D = g_D = \tfrac12\ell_D .
$$
Sur deux disques $D,D'$ qui se rencontrent, $\ell_D-\ell_{D'}$ est à valeurs dans $2i\pi\Z$ sur $D\cap D'$ : constante sur chaque composante connexe de $D\cap D'$ ($D\cap D'$ est convexe donc connexe : une seule constante). En faisant le tour de $0$ par une chaîne de disques, la constante accumulée est $2i\pi$ : impossible de recoller globalement, cohérent avec la fiche [[ch04-harmonique-f-plus-g-barre]].
* **La simple connexité est suffisante, pas nécessaire.** $h(z) = \Re(1/z) = \dfrac{x}{x^2+y^2}$ est harmonique sur $\C^*$, non simplement connexe, et pourtant $h = \dfrac1{2z}+\overline{\dfrac1{2z}}$ **globalement** sur $\C^*$. La différence avec $\log|z|$ : ici $\partial_z h = \partial_z\big(\tfrac1{2z}\big) = -\dfrac1{2z^2}$ admet une primitive holomorphe sur $\C^*$, à savoir $f = \tfrac1{2z}$ (on vérifie $f' = -\tfrac1{2z^2}$), alors que $\partial_z\log|z| = \tfrac1{2z}$ n'en a pas (son intégrale sur $C(0,1)$ vaut $i\pi\neq0$). Critère : la décomposition globale existe si et seulement si $\partial_z h$ admet une primitive holomorphe sur $\Omega$.
* **Régularité automatique.** Si $h$ est $C^2$ et $\Delta h = 0$ sur un ouvert, alors $h$ est $C^\infty$ et même analytique réelle (localement somme de deux séries entières en $z$ et $\bar z$). Par exemple, aucune fonction harmonique ne peut avoir une dérivée troisième discontinue : c'est une **rigidité**, analogue à « holomorphe $\Rightarrow C^\infty$ ».

## Pièges

* > ⚠️ « Localement » ne veut pas dire « avec les mêmes $f,g$ partout » : les couples $(f_D,g_D)$ dépendent du disque et ne se recollent pas en général ($\log|z|$). Toute phrase du type « soit $f$ holomorphe sur $\Omega$ telle que $h = f+\bar g$ » exige la simple connexité ou une vérification.
* Les disques sont là comme exemples d'ouverts simplement connexes commodes ; un demi-plan, un rectangle, $\C\setminus\R_-$ font aussi l'affaire.
* La régularité $C^\infty$ se démontre ainsi, mais la classe $C^2$ reste dans la **définition** : on ne peut pas définir $\Delta h$ sans elle.
* Ne pas écrire $g_D = h-f_D$ : c'est $g_D = \overline{h-f_D}$ (même piège que dans [[ch04-harmonique-f-plus-g-barre]]).
