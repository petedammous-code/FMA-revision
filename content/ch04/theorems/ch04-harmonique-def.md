---
id: ch04-harmonique-def
type: definition
chapter: 4
title: Fonction harmonique, laplacien
ref: Définition IV.2.1
page: 76
importance: 3
depends: [ch01-laplacien-harmonique, ch05-lemme-schwarz, ch01-cauchy-riemann]
tags: [harmonique, laplacien, dz-dzbar, schwarz]
---
## Intuition

> 💡 Une fonction harmonique est une fonction « sans bosse ni creux » : en chaque point, sa valeur est la **moyenne** de ses valeurs sur n'importe quel petit cercle centré en ce point (ce sera le Corollaire IV.2.5, [[ch04-harmonique-moyenne-maximum]]). Image mentale : une membrane élastique tendue sur un cadre tordu ; au repos, elle prend la forme du graphe d'une fonction harmonique, courbée comme une selle partout, jamais comme un bol.

Le **laplacien** $\Delta f=\partial_x^2f+\partial_y^2f$ mesure précisément l'écart entre $f(z_0)$ et la moyenne de $f$ autour de $z_0$ : au second ordre, pour $f$ de classe $C^2$,
$$
\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\,d\theta - f(z_0) = \frac{r^2}{4}\,\Delta f(z_0)+o(r^2)
$$
(développer $f$ à l'ordre 2 et moyenner : les termes du premier ordre et le terme croisé $\partial_x\partial_yf$ s'annulent, et la moyenne de $\cos^2\theta$ comme de $\sin^2\theta$ vaut $\tfrac12$). « Harmonique » veut dire $\Delta f=0$.

Le lien avec l'analyse complexe est la factorisation $\Delta=4\,\partial_z\partial_{\bar z}$ ([[ch01-laplacien-harmonique]]), où $\partial_z=\frac12(\partial_x-i\partial_y)$ et $\partial_{\bar z}=\frac12(\partial_x+i\partial_y)$ sont les opérateurs de la Remarque I.2.2 du poly, ceux des conditions de Cauchy–Riemann ([[ch01-cauchy-riemann]] : $f$ différentiable en $z$ est $\C$-dérivable en $z$ $\iff$ $\partial_{\bar z}f(z)=0$ ; et, Remarque I.2.6, [[ch01-holomorphe-ssi-c1-et-dzbar-nul]] : $f$ holomorphe sur $\Omega$ $\iff$ $f$ de classe $C^1$ et $\partial_{\bar z}f=0$ sur $\Omega$). Elle dit immédiatement que les fonctions holomorphes sont harmoniques ([[ch04-holomorphe-implique-harmonique]]), et c'est elle qui permettra de décrire **toutes** les fonctions harmoniques ([[ch04-harmonique-f-plus-g-barre]]).

## Énoncé

**Définition (poly, Définition IV.2.1, p. 76).** Soit $\Omega$ un ouvert de $\C$. Une fonction $f:\Omega\to\C$ est dite **harmonique** si elle est de classe $C^2$ sur $\Omega$ (comme fonction des deux variables réelles $x,y$, où $z=x+iy$) et si
$$
\Delta f := \frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2} = 4\,\frac{\partial^2 f}{\partial z\,\partial\bar z} = 4\,\frac{\partial^2 f}{\partial\bar z\,\partial z} = 0 .
$$
L'opérateur $\Delta$ est appelé **laplacien**.

*Précisions.* Les opérateurs $\dfrac{\partial}{\partial z}=\dfrac12\Big(\dfrac{\partial}{\partial x}-i\dfrac{\partial}{\partial y}\Big)$ et $\dfrac{\partial}{\partial\bar z}=\dfrac12\Big(\dfrac{\partial}{\partial x}+i\dfrac{\partial}{\partial y}\Big)$ sont ceux de la Remarque I.2.2 du poly (p. 7). Les deux égalités $\Delta=4\,\partial_z\partial_{\bar z}=4\,\partial_{\bar z}\partial_z$ ne font pas partie de la condition imposée à $f$ : ce sont des identités valables pour **toute** fonction de classe $C^2$, conséquences du théorème de Schwarz ([[ch05-lemme-schwarz]]) :
$$
4\,\frac{\partial}{\partial z}\frac{\partial f}{\partial\bar z} = \Big(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Big)\Big(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Big)f = \frac{\partial^2 f}{\partial x^2} + i\,\frac{\partial^2 f}{\partial x\partial y} - i\,\frac{\partial^2 f}{\partial y\partial x} + \frac{\partial^2 f}{\partial y^2} = \Delta f,
$$
les deux termes croisés se détruisant car $\partial_x\partial_yf=\partial_y\partial_xf$ (Remarque I.2.8, [[ch01-laplacien-harmonique]]) ; le calcul dans l'autre ordre est identique. Ainsi, pour $f$ de classe $C^2$ :
$$
f \text{ harmonique} \iff \Delta f = 0 \iff \frac{\partial}{\partial\bar z}\Big(\frac{\partial f}{\partial z}\Big) = 0 \iff \frac{\partial}{\partial z}\Big(\frac{\partial f}{\partial\bar z}\Big) = 0 .
$$

## Hypothèses

La définition contient trois conditions ou conventions « cachées ».

### H1 — $\Omega$ ouvert

**Rôle.** Les dérivées partielles, donc $\Delta$, sont définies en des points intérieurs ; la propriété « harmonique » est **locale** : $f$ est harmonique sur $\Omega$ si et seulement si elle l'est au voisinage de chaque point de $\Omega$.

**Si on la retire.** Sur un ensemble non ouvert (un segment, un cercle), parler de $\Delta f$ n'a pas de sens sans prolonger $f$. Les « conditions au bord » du § IV.4 portent sur le prolongement continu de $f$ à $\bar\Omega$, pas sur une harmonicité au bord.

### H2 — $f$ de classe $C^2$ (au sens réel)

**Rôle.** Il faut des dérivées secondes pour écrire $\Delta f$, et leur continuité pour appliquer le théorème de Schwarz, qui donne $\Delta=4\,\partial_z\partial_{\bar z}$ et justifie l'écriture de la définition.

**Si on la retire.** La condition $\Delta f=0$ n'a plus de sens classique. En revanche l'hypothèse est **a posteriori superflue** : toute fonction harmonique est en fait $C^\infty$, car elle s'écrit localement $f_D+\overline{g_D}$ avec $f_D,g_D$ holomorphes donc $C^\infty$ ([[ch04-harmonique-decomposition-locale]], [[ch01-holomorphe-analytique]]). C'est le même phénomène de rigidité que « holomorphe $\Rightarrow C^\infty$ ».

### H3 — Valeurs complexes autorisées

**Rôle.** Le poly autorise $f$ à valeurs dans $\C$. Comme $\Delta$ a des coefficients réels, $\Delta f=\Delta(\Re f)+i\,\Delta(\Im f)$, donc
$$
f \text{ harmonique} \iff \Re f \text{ et } \Im f \text{ harmoniques (réelles)} ;
$$
de même $\Delta\bar f=\overline{\Delta f}$, donc $f$ harmonique $\iff$ $\bar f$ harmonique. Les fonctions harmoniques sur $\Omega$ forment un $\C$-espace vectoriel stable par conjugaison.

**Si on la retire.** Rien ne change pour la théorie (on se ramène à $\Re f$ et $\Im f$), mais les énoncés de **moyenne** et surtout de **maximum** ([[ch04-harmonique-moyenne-maximum]]) ne concernent que les fonctions **réelles** : « $h$ admet un maximum » n'a pas de sens pour $h$ complexe.

## Exemples

* **Polynômes.** $\Delta(x^2-y^2)=2-2=0$ et $\Delta(2xy)=0+0=0$ : $x^2-y^2=\Re(z^2)$ et $2xy=\Im(z^2)$ sont harmoniques sur $\C$. En revanche $\Delta(x^2+y^2)=2+2=4\neq0$ : $|z|^2=z\bar z$ n'est **pas** harmonique, bien que $C^\infty$. Vérification complexe : $4\,\partial_z\partial_{\bar z}(z\bar z)=4\,\partial_z(z)=4$. Plus généralement $ax^2+bxy+cy^2$ est harmonique si et seulement si $2a+2c=0$, c'est-à-dire $c=-a$ : les formes quadratiques harmoniques sont les $a(x^2-y^2)+bxy$.
* **Le logarithme du module.** $h(z)=\log|z|=\frac12\log(x^2+y^2)$ est harmonique sur $\C^*$ : $\partial_xh=\dfrac{x}{x^2+y^2}$, $\partial_x^2h=\dfrac{(x^2+y^2)-2x^2}{(x^2+y^2)^2}=\dfrac{y^2-x^2}{(x^2+y^2)^2}$, et par symétrie $\partial_y^2h=\dfrac{x^2-y^2}{(x^2+y^2)^2}$, de somme nulle. C'est le potentiel électrostatique d'un fil infini, ou la température stationnaire dans une couronne ([[ch04-chaleur-couronne]]). Plus généralement, une fonction **radiale** $u=\varphi(|z|)$ de classe $C^2$ sur $\C^*$ vérifie $\Delta u=\varphi''(r)+\frac1r\varphi'(r)=\frac1r\,(r\varphi')'$, donc est harmonique si et seulement si $r\varphi'(r)$ est constant, soit $\varphi(r)=\alpha\log r+\beta$ ([[ch04-harmoniques-radiales]]).
* **Exponentielle.** $e^x\cos y=\Re(e^z)$ : $\partial_x^2=e^x\cos y$, $\partial_y^2=-e^x\cos y$, somme nulle. Même chose pour $e^x\sin y=\Im(e^z)$. Ce sont des cas du résultat général « partie réelle d'une holomorphe $\Rightarrow$ harmonique » ([[ch04-holomorphe-implique-harmonique]]).
* **À valeurs complexes.** $z$, $\bar z$, $z^2$, $\bar z^2$, $z+\bar z^3$ sont harmoniques (chaque terme est annulé par $\partial_{\bar z}$ ou par $\partial_z$) ; $z^2\bar z$ ne l'est pas : $4\,\partial_z\partial_{\bar z}(z^2\bar z)=4\,\partial_z(z^2)=8z$.

## Pièges

* > ⚠️ Harmonique $\neq$ holomorphe. Toute fonction holomorphe est harmonique, mais $\bar z$, $x=\Re z$, $\log|z|$ sont harmoniques sans être holomorphes. La bonne réciproque est le Théorème IV.2.2 : sur un ouvert simplement connexe, $h=f+\bar g$ avec $f,g$ holomorphes ([[ch04-harmonique-f-plus-g-barre]]).
* Le laplacien n'est pas multiplicatif : $x$ est harmonique, $x\cdot x=x^2$ ne l'est pas ($\Delta x^2=2$). En particulier, pour $f$ holomorphe, $|f|^2$ n'est **pas** harmonique sauf si $f$ est localement constante : $\Delta|f|^2=4\,\partial_z\big(f\,\overline{f'}\big)=4|f'|^2$.
* Le module $|f|$ d'une holomorphe n'est pas harmonique en général ; mais $\log|f|$ l'est là où $f\neq0$ (c'est localement la partie réelle d'un logarithme holomorphe de $f$).
* La classe $C^2$ fait partie de la définition : ne pas l'oublier dans un énoncé, même si elle est automatique a posteriori.
* L'écriture $\Delta=4\,\partial_z\partial_{\bar z}$ utilise le théorème de Schwarz ; elle fait de $\Delta$ un opérateur **réel** ($\Delta\bar f=\overline{\Delta f}$) malgré l'apparence complexe.
* Convention de signe : certains ouvrages (physique, EDP) appellent laplacien l'opérateur $-\Delta$, qui est positif ; ici $\Delta=\partial_x^2+\partial_y^2$ et $\Delta|z|^2=4>0$.
