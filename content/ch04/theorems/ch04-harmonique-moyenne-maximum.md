---
id: ch04-harmonique-moyenne-maximum
type: corollary
chapter: 4
title: Propriété de la moyenne et principe du maximum pour les fonctions harmoniques réelles
ref: Corollaire IV.2.5
page: 77
importance: 3
depends: [ch01-formule-moyenne, ch04-harmonique-decomposition-locale, ch04-harmonique-reelle-partie-reelle, ch01-prolongement-analytique]
tags: [harmonique, moyenne, principe-du-maximum, connexe, disque]
---
## Intuition

> 💡 Une fonction harmonique est une « membrane au repos » : sa valeur au centre d'un disque est la **moyenne** de ses valeurs sur le cercle bord. Une telle fonction ne peut pas avoir de bosse : si $z_0$ était un maximum local, la moyenne sur un petit cercle autour de $z_0$ serait $\le h(z_0)$, avec égalité seulement si $h$ vaut $h(z_0)$ sur tout le cercle. Donc $h$ est constante près de $z_0$, puis, de proche en proche sur un ouvert connexe, constante partout.

Pourquoi la moyenne ? Localement $h = f+\bar g$ avec $f,g$ holomorphes ([[ch04-harmonique-decomposition-locale]]), et les fonctions holomorphes vérifient la formule de la moyenne ([[ch01-formule-moyenne]], conséquence de la formule de Cauchy). On somme. C'est l'exact analogue du principe du maximum holomorphe ([[ch01-principe-maximum]]), mais pour une fonction **réelle** $h$ au lieu de $|f|$ : la version harmonique est même plus simple, car on peut soustraire sans valeur absolue.

Rappels : $h$ **harmonique** signifie $C^2$ et $\Delta h = 0$ ([[ch04-harmonique-def]]) ; $\bar D(z_0,r) = \{|z-z_0|\le r\}$ ; **maximum local** en $z_0$ : il existe un voisinage $V$ de $z_0$ dans $\Omega$ avec $h\le h(z_0)$ sur $V$.

## Énoncé

**Corollaire (poly, Corollaire IV.2.5, p. 77).** Soit $h$ une fonction harmonique réelle définie sur un ouvert $\Omega$.

1. (*Propriété de la moyenne.*) Pour tout disque fermé $\bar D(z_0,r)\subset\Omega$,
$$
h(z_0) = \frac1{2\pi}\int_0^{2\pi} h\big(z_0+re^{i\theta}\big)\,d\theta .
$$
2. (*Principe du maximum.*) Si de plus $\Omega$ est **connexe** et si $h$ admet un **maximum local** en un point $z_0\in\Omega$, alors $h$ est constante sur $\Omega$.

*Précisions.* La propriété de la moyenne vaut aussi pour $h$ harmonique à valeurs complexes (même preuve). Le principe du maximum donne aussi un principe du **minimum** (appliquer à $-h$, harmonique réelle) : une fonction harmonique réelle non constante sur un ouvert connexe n'a **aucun extremum local**.

## Hypothèses

### H1 — $h$ est harmonique

**Rôle.** C'est ce qui donne la décomposition locale $h = f+\bar g$ en fonctions holomorphes, auxquelles on applique la formule de la moyenne.

**Si on la retire.** $h(z) = |z|^2$ (de classe $C^\infty$, $\Delta h = 4$) : sur $C(z_0,r)$, $|z_0+re^{i\theta}|^2 = |z_0|^2+2r\,\Re\big(\bar z_0e^{i\theta}\big)+r^2$, de moyenne $|z_0|^2+r^2\neq|z_0|^2$. Et $-|z|^2$ admet un maximum local strict en $0$ sans être constante : le principe du maximum tombe aussi.

### H2 — $\bar D(z_0,r)\subset\Omega$ (le disque **fermé** tout entier)

**Rôle.** Il faut que $h$ soit harmonique sur un disque ouvert un peu plus grand, pour y décomposer $h = f+\bar g$ et appliquer la formule de la moyenne sur $C(z_0,r)$.

**Si on la retire.** $h(z) = \Re(1/z) = \dfrac{x}{x^2+y^2}$ est harmonique sur $\C^*$ ([[ch04-holomorphe-implique-harmonique]]). Prenons $z_0 = 1$, $r = 2$ : le disque $\bar D(1,2)$ contient $0\notin\C^*$. La moyenne sur $C(1,2)$ vaut
$$
\frac1{2\pi}\int_0^{2\pi}\Re\Big(\frac1{1+2e^{i\theta}}\Big)d\theta = \Re\Big(\frac1{2i\pi}\int_{C(0,1)}\frac{dw}{w\,(1+2w)}\Big) = \Re\big(\Res_0+\Res_{-1/2}\big) = \Re(1-1) = 0
$$
(formule des résidus, [[ch02-formule-residus]] : $\Res_0\frac1{w(1+2w)} = 1$, $\Res_{-1/2}\frac1{w(1+2w)} = \frac1{2\cdot(-1/2)} = -1$), alors que $h(1) = 1$. La moyenne ne « voit » pas la singularité au centre, et la formule est fausse.

### H3 — $h$ est à valeurs réelles (pour le principe du maximum)

**Rôle.** Pour pouvoir parler de « maximum » et pour que $\theta\mapsto h(z_0)-h(z_0+\rho e^{i\theta})$ soit une fonction **positive** d'intégrale nulle.

**Si on la retire.** Pour $h$ complexe, « maximum de $h$ » n'a pas de sens ; appliquer le résultat à $\Re h$ et $\Im h$. La propriété de la moyenne, elle, reste vraie pour $h$ complexe.

### H4 — $\Omega$ est connexe (pour le principe du maximum)

**Rôle.** Pour passer de « constante au voisinage de $z_0$ » à « constante sur $\Omega$ » par un argument d'ouvert-fermé.

**Si on la retire.** $\Omega = D(0,1)\cup D(3,1)$, $h = 1$ sur $D(0,1)$ et $h = 0$ sur $D(3,1)$ : harmonique, maximum local (même global) en $0$, non constante sur $\Omega$. La conclusion reste vraie sur la **composante connexe** de $z_0$.

### H5 — Le maximum est atteint en un point $z_0\in\Omega$ (intérieur)

**Rôle.** Il faut un disque $\bar D(z_0,r)\subset\Omega$ autour de $z_0$ sur lequel $h\le h(z_0)$.

**Si on la retire.** $h(z) = x$ sur $D(0,1)$ : harmonique, bornée par $1$, $\sup = 1$ atteint seulement en $1\in\partial D$, non constante. Le principe du maximum ne dit rien d'un sup pris au bord : au contraire, sur un ouvert borné le maximum d'une fonction harmonique continue sur $\bar\Omega$ est **toujours** atteint au bord ([[ch04-maximum-unicite-bord]]).

## Idée de la preuve

(1) Sur un disque $D\supset\bar D(z_0,r)$, $h = f+\bar g$ ; formule de la moyenne pour $f$ et $g$, conjugaison, somme. (2) Si $h\le h(z_0)$ sur $\bar D(z_0,r)$, la fonction continue positive $h(z_0)-h(z_0+\rho e^{i\theta})$ est d'intégrale nulle, donc nulle : $h\equiv h(z_0)$ sur $\bar D(z_0,r)$ ; puis ouvert-fermé sur $\Omega$ connexe.

## Preuve

**1. Propriété de la moyenne.** Soit $\bar D(z_0,r)\subset\Omega$. Il existe $r'>r$ avec $D(z_0,r')\subset\Omega$ : si $\Omega = \C$ c'est clair ; sinon $\C\setminus\Omega$ est un fermé non vide disjoint du compact $\bar D(z_0,r)$, donc la fonction continue $z\mapsto\dist(z,\C\setminus\Omega)$, strictement positive sur ce compact, y admet un minimum $\delta>0$, et $D(z_0,r+\delta)\subset\Omega$ (tout point de $D(z_0,r+\delta)$ est à distance $<\delta$ d'un point de $\bar D(z_0,r)$). Posons $D := D(z_0,r')$.

D'après la Remarque IV.2.3 ([[ch04-harmonique-decomposition-locale]]), il existe $f,g\in\Hol(D)$ avec $h = f+\bar g$ sur $D$. Comme $\bar D(z_0,r)\subset D$, la formule de la moyenne (Corollaire I.6.2, [[ch01-formule-moyenne]]) s'applique à $f$ et à $g$ :
$$
f(z_0) = \frac1{2\pi}\int_0^{2\pi}f\big(z_0+re^{i\theta}\big)d\theta ,\qquad g(z_0) = \frac1{2\pi}\int_0^{2\pi}g\big(z_0+re^{i\theta}\big)d\theta .
$$
La conjugaison commute à l'intégrale (elle est $\R$-linéaire et l'intégrale d'une fonction complexe se calcule sur les parties réelle et imaginaire) : $\overline{g(z_0)} = \frac1{2\pi}\int_0^{2\pi}\overline{g(z_0+re^{i\theta})}\,d\theta$. En additionnant, par linéarité de l'intégrale,
$$
h(z_0) = f(z_0)+\overline{g(z_0)} = \frac1{2\pi}\int_0^{2\pi}\Big(f+\bar g\Big)\big(z_0+re^{i\theta}\big)d\theta = \frac1{2\pi}\int_0^{2\pi}h\big(z_0+re^{i\theta}\big)d\theta .
$$
(Rien n'a utilisé que $h$ est réelle : la propriété de la moyenne vaut pour $h$ complexe.)

**2. Principe du maximum.** Supposons $\Omega$ connexe, $h$ réelle, et $h$ admettant un maximum local en $z_0\in\Omega$ : il existe $r>0$ tel que $\bar D(z_0,r)\subset\Omega$ et $h\le h(z_0)$ sur $\bar D(z_0,r)$.

*Étape A : $h$ est constante sur $\bar D(z_0,r)$.* Soit $\rho\in\,]0,r]$. Le disque $\bar D(z_0,\rho)$ est contenu dans $\Omega$, donc par la propriété de la moyenne
$$
\frac1{2\pi}\int_0^{2\pi}\Big(h(z_0)-h\big(z_0+\rho e^{i\theta}\big)\Big)d\theta = h(z_0)-h(z_0) = 0 .
$$
La fonction $\theta\mapsto h(z_0)-h(z_0+\rho e^{i\theta})$ est continue sur $[0,2\pi]$ et **positive** (car $h\le h(z_0)$ sur $\bar D(z_0,r)$) ; une fonction continue positive d'intégrale nulle est identiquement nulle (si elle était $>0$ en un point, elle le serait sur un intervalle, et l'intégrale serait $>0$). Donc $h = h(z_0)$ sur chaque cercle $C(z_0,\rho)$, $0<\rho\le r$, c'est-à-dire sur $\bar D(z_0,r)$ tout entier.

*Étape B : passage au global par connexité.* Notons $c := h(z_0)$ et
$$
U := \{z\in\Omega : h\equiv c \text{ sur un voisinage de } z\} .
$$
$U$ est ouvert (par définition) et non vide ($z_0\in U$ d'après l'étape A). Montrons que $U$ est fermé dans $\Omega$. Soit $z_1\in\Omega$ adhérent à $U$, et $D' = D(z_1,s)\subset\Omega$ un disque. Sur $D'$, simplement connexe, $h|_{D'}$ est harmonique réelle, donc $h|_{D'} = \Re F$ avec $F\in\Hol(D')$ et $F' = \partial_x h-i\,\partial_y h$ (Corollaire IV.2.4, [[ch04-harmonique-reelle-partie-reelle]]). Comme $D'$ est un voisinage de $z_1$, il rencontre $U$ : soit $w\in U\cap D'$ et $D(w,t)\subset D'$ un disque sur lequel $h\equiv c$. Sur $D(w,t)$, $\partial_x h = \partial_y h = 0$, donc $F' = 0$. La fonction $F'$ est holomorphe sur l'ouvert connexe $D'$ et nulle sur l'ouvert non vide $D(w,t)$ : par le principe du prolongement analytique ([[ch01-prolongement-analytique]]), $F'\equiv0$ sur $D'$, donc $F$ est constante sur $D'$ (connexe), et $h = \Re F$ aussi : $h\equiv h(w) = c$ sur $D'$. Ainsi $D'\subset U$ et en particulier $z_1\in U$.

$U$ est une partie ouverte, fermée et non vide de l'ouvert connexe $\Omega$ : $U = \Omega$, et $h\equiv h(z_0)$ sur $\Omega$. $\square$

> ⚠️ *Sur la rédaction du poly.* Le poly conclut l'étape B en une phrase : « l'ensemble des points où $h$ vaut $h(z_0)$ est ouvert et fermé ». Fermé, oui (continuité de $h$). Ouvert : en un point $z_1$ où $h(z_1) = h(z_0)$, l'étape A ne s'applique que si l'on sait $h\le h(z_0)$ au voisinage de $z_1$. C'est le cas si le maximum est **global** ($h\le h(z_0)$ sur tout $\Omega$) : alors tout point de $\{h = h(z_0)\} = \{h = \max h\}$ est un maximum, l'étape A y donne la constance locale, et l'argument du poly est complet. Pour un maximum seulement **local**, il faut l'argument de prolongement analytique ci-dessus (ou se ramener au cas global : $z_0$ est un maximum global de $h|_{D(z_0,r)}$, donc $h$ est constante sur $D(z_0,r)$, puis prolongement).

## Preuve à trous

**Moyenne.** Soit $\bar D(z_0,r)\subset\Omega$ ; on choisit $r'>r$ avec $D := D(z_0,r')\subset\Omega$ (distance du compact $\bar D(z_0,r)$ au fermé $\C\setminus\Omega$). Sur $D$, <trou indice="résultat local du § IV.2">$h = f+\bar g$ avec $f,g\in\Hol(D)$ (Remarque IV.2.3)</trou>. La formule de la moyenne appliquée à $f$ et à $g$ sur $\bar D(z_0,r)\subset D$, puis <trou indice="comment traiter le terme en g ?">la conjugaison de l'égalité pour $g$ (la conjugaison commute à l'intégrale) et l'addition</trou> donnent $h(z_0) = \frac1{2\pi}\int_0^{2\pi}h(z_0+re^{i\theta})\,d\theta$.

**Maximum.** Soit $\bar D(z_0,r)\subset\Omega$ avec $h\le h(z_0)$ dessus. Pour $0<\rho\le r$, la fonction $\theta\mapsto h(z_0)-h(z_0+\rho e^{i\theta})$ est <trou indice="trois propriétés qui forcent une fonction à être nulle">continue, positive et d'intégrale nulle sur $[0,2\pi]$ (propriété de la moyenne), donc identiquement nulle</trou> : $h\equiv h(z_0)$ sur $\bar D(z_0,r)$. Soit $U$ l'ensemble des points de $\Omega$ au voisinage desquels $h\equiv h(z_0)$ : ouvert, non vide. Il est fermé dans $\Omega$ : si $z_1\in\bar U\cap\Omega$ et $D' = D(z_1,s)\subset\Omega$, on écrit $h|_{D'} = \Re F$ avec $F\in\Hol(D')$ ; $F' = \partial_xh-i\partial_yh$ s'annule sur un petit disque de $D'\cap U$, donc <trou indice="une fonction holomorphe nulle sur un ouvert non vide d'un connexe...">$F'\equiv0$ sur $D'$ par prolongement analytique, $F$ est constante et $h\equiv h(z_0)$ sur $D'$</trou> : $z_1\in U$. Par connexité, $U = \Omega$. $\square$

## Exemples

* **Vérification sur $h = x^2-y^2$.** Pour $z_0 = a+ib$ et $r>0$ : $h(z_0+re^{i\theta}) = (a+r\cos\theta)^2-(b+r\sin\theta)^2 = (a^2-b^2)+2r(a\cos\theta-b\sin\theta)+r^2\cos2\theta$. Les moyennes de $\cos\theta$, $\sin\theta$, $\cos2\theta$ sur $[0,2\pi]$ sont nulles : la moyenne vaut $a^2-b^2 = h(z_0)$. $\checkmark$ Comparer avec $|z|^2 = x^2+y^2$ : le terme $r^2\cos2\theta$ devient $r^2$, de moyenne $r^2\neq0$.
* **Moyenne de $\log|z|$ sur un cercle.** Pour $|a|>r$, $\bar D(a,r)\subset\C^*$ et $\log|z|$ est harmonique sur $\C^*$, donc $\frac1{2\pi}\int_0^{2\pi}\log|a+re^{i\theta}|\,d\theta = \log|a|$. Pour $|a|<r$ (le théorème ne s'applique pas directement, $0\in D(a,r)$), on écrit $\log|a+re^{i\theta}| = \log r+\log|1+\tfrac ar e^{-i\theta}|$ ; posons $c = a/r$, $|c|<1$ ; pour $|w|<1/|c|$ on a $|cw|<1$ donc $\Re(1+cw)>0$, et $w\mapsto\log|1+cw| = \Re\,\mathrm{Log}(1+cw)$ (détermination principale, [[ch02-logarithme-determination-principale-def]]) est harmonique sur le disque $D(0,1/|c|)\supset\bar D(0,1)$ : sa moyenne sur $C(0,1)$ est sa valeur en $w = 0$, soit $\log 1 = 0$ (le changement $\theta\mapsto-\theta$ ne change pas une moyenne sur une période). Donc la moyenne vaut $\log r$. Bilan : $\frac1{2\pi}\int_0^{2\pi}\log|a+re^{i\theta}|\,d\theta = \log\max(|a|,r)$ (c'est la formule de Jensen élémentaire).
* **Pas d'extremum intérieur.** $h = e^x\cos y$ sur $\C$ : en tout point, $h$ est une selle (ni max ni min local), bien qu'elle prenne des valeurs arbitrairement grandes. De même la température stationnaire d'une plaque sans source ([[ch04-chaleur-couronne]]) ne peut avoir de point chaud intérieur : les extrema sont au bord. C'est la base de l'unicité des problèmes aux limites ([[ch04-maximum-unicite-bord]]).

## Pièges

* > ⚠️ Le principe du maximum concerne $h$ **réelle** et un maximum **local en un point intérieur** ; il n'interdit pas que $\sup_\Omega h$ soit atteint au bord ($h = x$ sur le disque), et il ne dit rien sans **connexité**.
* Pour un **minimum**, appliquer à $-h$. Pour $|h|$ : un maximum local de $|h|$ en $z_0$ est un maximum local de $h$ (si $h(z_0)>0$) ou de $-h$ (si $h(z_0)<0$), ou force $h\equiv0$ près de $z_0$ (si $h(z_0) = 0$) : dans tous les cas $h$ est constante.
* Ne pas confondre avec le principe du maximum **holomorphe** ([[ch01-principe-maximum]]), qui porte sur $|f|$ ; la version harmonique s'y applique en prenant $h = \log|f|$ ou $h = \Re f$ (et redonne d'ailleurs la version holomorphe).
* La propriété de la moyenne exige le disque **fermé** dans $\Omega$ : la singularité au centre de $\Re(1/z)$ rend la formule fausse (hypothèse H2).
* « Nulle au bord $\Rightarrow$ nulle » n'est pas une conséquence du principe du maximum sur un ouvert **non borné** : $h = y$ est harmonique sur le demi-plan $H$, nulle sur $\R = \partial H$, non nulle. Il faut $\Omega$ borné, ou une hypothèse de bornitude de $h$ (le poly le signale p. 82).
* Dans la preuve, l'étape « ouvert et fermé » demande un argument supplémentaire pour un maximum seulement local (voir l'avertissement ci-dessus) : à savoir rédiger.
