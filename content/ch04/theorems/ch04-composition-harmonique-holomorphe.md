---
id: ch04-composition-harmonique-holomorphe
type: proposition
chapter: 4
title: La composée d'une fonction harmonique et d'une fonction holomorphe est harmonique
ref: "non numéroté, section IV.4, p. 81 (composition harmonique ∘ holomorphe)"
page: 81
importance: 3
depends: [ch01-chaine-dz-dzbar, ch01-laplacien-harmonique, ch01-cauchy-riemann, ch04-harmonique-def, ch01-formulaire-dz-dzbar, ch05-lemme-schwarz, ch01-holomorphe-analytique, ch05-composition-differentielles]
tags: [harmonique, composition, holomorphe, laplacien, dz-dzbar, conforme, changement-de-variable]
---
## Intuition

> 💡 Une fonction holomorphe $h$ dont la dérivée ne s'annule pas est, vue au microscope près de $z$, une **similitude** : rotation d'angle $\arg h'(z)$ suivie d'une homothétie de rapport $|h'(z)|$ (sa différentielle est $\omega\mapsto h'(z)\,\omega$, cf. [[ch04-holomorphe-conserve-angles]]). Or le laplacien ne « voit » pas les rotations et les translations, et une homothétie de rapport $\lambda$ le multiplie par $\lambda^2$. D'où la formule à retenir : $\Delta(f\circ h)=(\Delta f)\circ h\cdot|h'|^2$. Si $\Delta f=0$, le membre de droite est nul : **changer de variable par une fonction holomorphe préserve l'harmonicité**.

Rappels. Une fonction $f$ est **harmonique** sur un ouvert $U$ si elle est de classe $C^2$ (en les variables réelles $x,y$, $z=x+iy$) et si $\Delta f=\partial_x^2f+\partial_y^2f=0$ sur $U$ ([[ch04-harmonique-def]]). Les opérateurs $\frac{\partial}{\partial z}=\frac12\big(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\big)$ et $\frac{\partial}{\partial \bar z}=\frac12\big(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\big)$ (Remarque I.2.2 du poly) vérifient $\Delta=4\,\frac{\partial^2}{\partial z\,\partial\bar z}$ sur les fonctions $C^2$ ([[ch01-laplacien-harmonique]]), et $h$ est holomorphe si et seulement si $\frac{\partial h}{\partial\bar z}=0$ ([[ch01-cauchy-riemann]]). Toute la preuve consiste à calculer $\frac{\partial^2}{\partial z\partial\bar z}(f\circ h)$ avec la règle de la chaîne ([[ch01-chaine-dz-dzbar]]).

Pourquoi c'est important : c'est l'outil qui permet de **transporter** une fonction harmonique connue sur un domaine simple (demi-plan $H$, bande, disque) vers un domaine compliqué via une application conforme ([[ch04-reduction-demi-plan]]) : écoulement dans un coin, Joukovski, couronne excentrée.

## Énoncé

**Proposition (poly, résultat non numéroté, section IV.4, p. 81).** Soient $\Omega$ un ouvert de $\C$, $h\in\Hol(\Omega)$ une fonction holomorphe, $U$ un ouvert de $\C$ et $f:U\to\C$ une fonction harmonique. Alors la composée $f\circ h$ est harmonique là où elle est bien définie, c'est-à-dire sur l'ouvert $h^{-1}(U)=\{z\in\Omega \,;\, h(z)\in U\}$ (sur tout $\Omega$ si $U$ contient $h(\Omega)$). Plus précisément, pour tout $z\in h^{-1}(U)$,
$$
\Delta(f\circ h)(z)=4\,\frac{\partial^2 f}{\partial z\,\partial\bar z}(h(z))\,\frac{\partial h}{\partial z}(z)\,\frac{\partial \bar h}{\partial \bar z}(z)=(\Delta f)(h(z))\,\big|h'(z)\big|^2 .
$$

*Précisions.* Ici $\frac{\partial^2 f}{\partial z\,\partial\bar z}$ désigne $\frac{\partial}{\partial z}\big(\frac{\partial f}{\partial \bar z}\big)$. La formule pour $\Delta(f\circ h)$ ne se sert pas de $\Delta f=0$ : elle est valable pour toute $f$ de classe $C^2$ sur $U$, harmonique ou non (le poly n'utilise l'harmonicité qu'à la toute dernière ligne). Attention à l'ordre : on compose **à droite** par l'holomorphe, $f\circ h$ (« harmonique après holomorphe »).

## Hypothèses

### H1 — $h$ holomorphe sur l'ouvert $\Omega$

**Rôle.** Elle sert trois fois : (i) $\frac{\partial h}{\partial\bar z}=0$ tue le premier terme de la règle de la chaîne ; (ii) en conjuguant, $\frac{\partial \bar h}{\partial z}=\overline{\partial h/\partial\bar z}=0$ tue deux autres termes ; (iii) $\frac{\partial h}{\partial z}=h'$, ce qui donne le facteur $|h'|^2$. De plus $h$ holomorphe est $C^\infty$ ([[ch01-holomorphe-analytique]]), ce qui rend licites la règle de la chaîne et le théorème de Schwarz pour $\bar h$.

**Si on la retire.** Faux en général, même pour $h$ $\R$-linéaire. Prenons $f(w)=\Re(w^2)=u^2-v^2$ ($w=u+iv$), harmonique sur $\C$ ($\Delta f=2-2=0$), et $h(z)=x+2iy$ (application $\R$-linéaire, non holomorphe : $\frac{\partial h}{\partial\bar z}=\frac12(1+i\cdot 2i)=-\frac12\neq0$). Alors $f\circ h(x+iy)=x^2-4y^2$ et
$$
\Delta(f\circ h)=2-8=-6\neq0 .
$$
En revanche, si $h$ est **anti-holomorphe** (c'est-à-dire $\bar h$ holomorphe), la conclusion reste vraie : $f\circ h=g\circ\bar h$ avec $g(w)=f(\bar w)$, et $g$ est harmonique sur l'ouvert $\{\bar w : w\in U\}$ car $g(u+iv)=f(u-iv)$ et la symétrie $v\mapsto -v$ ne change pas $\partial_v^2$ ; on applique alors la proposition à $g$ et à $\bar h$, d'où $\Delta(f\circ h)=(\Delta f)\circ h\cdot|(\bar h)'|^2$.

### H2 — $f$ harmonique sur un ouvert $U$ (de classe $C^2$ et $\Delta f=0$)

**Rôle.** La classe $C^2$ de $f$ assure que $\frac{\partial f}{\partial\bar z}$ est $C^1$ (on peut lui réappliquer la règle de la chaîne), que $f\circ h$ est $C^2$ (donc que $\Delta(f\circ h)=4\,\partial_z\partial_{\bar z}(f\circ h)$ a un sens), et que $4\,\frac{\partial^2 f}{\partial z\partial\bar z}=\Delta f$ (Schwarz). L'égalité $\Delta f=0$ ne sert qu'à la dernière ligne.

**Si on la retire.** Si $f$ est $C^2$ mais pas harmonique, $f\circ h$ n'a aucune raison de l'être : $f(w)=|w|^2$ ($\Delta f=4$) et $h(z)=z^2$ donnent $f\circ h(z)=|z|^4=(x^2+y^2)^2$, et un calcul direct donne $\Delta(|z|^4)=16(x^2+y^2)$, en accord avec la formule : $(\Delta f)(h(z))\,|h'(z)|^2=4\cdot|2z|^2=16|z|^2\neq0$ pour $z\neq0$. Quant à l'hypothèse $C^2$ : elle fait partie de la définition d'« harmonique » ; sans elle, $\Delta f$ n'a pas de sens classique et la preuve (règle de la chaîne appliquée à $\partial f/\partial\bar z$, Schwarz) ne s'écrit plus.

### H3 — Le domaine de la composée : $h(z)\in U$

**Rôle.** Pour dériver $f\circ h$ en $z$, il faut que $f$ soit définie (et $C^2$) sur un **voisinage** de $h(z)$ ; c'est le cas si $h(z)\in U$ ouvert. L'ensemble $h^{-1}(U)$ est ouvert car $h$ est continue : c'est l'ouvert maximal où la conclusion a un sens.

**Si on la retire.** Ce n'est pas une hypothèse qu'on peut « oublier » : hors de $h^{-1}(U)$, $f\circ h$ n'est pas définie. Exemple : $f(w)=\log|w|$ est harmonique sur $U=\C^\times$, $h(z)=z^2-1$ est entière ; $f\circ h=\log|z^2-1|$ est harmonique sur $h^{-1}(\C^\times)=\C\setminus\{-1,1\}$ et n'est pas définie en $\pm1$ (elle tend vers $-\infty$). Le résultat est donc local : on conclut sur $h^{-1}(U)$, pas sur $\Omega$.

## Idée de la preuve

On écrit $\Delta=4\,\partial_z\partial_{\bar z}$, on applique la règle de la chaîne pour $\partial_{\bar z}$ puis pour $\partial_z$ ; l'holomorphie de $h$ ($\partial_{\bar z}h=0$, donc $\partial_z\bar h=0$) annule tous les termes sauf un, qui vaut $\frac{\partial^2f}{\partial z\partial\bar z}(h)\cdot h'\cdot\overline{h'}$.

## Preuve

**Régularité.** La fonction $h$ est holomorphe, donc de classe $C^\infty$ ([[ch01-holomorphe-analytique]]), ainsi que $\bar h$. L'ensemble $V:=h^{-1}(U)$ est ouvert (image réciproque d'un ouvert par une application continue) et $f\circ h:V\to\C$ est de classe $C^2$ comme composée d'applications $C^2$ ([[ch05-composition-differentielles]]). Par [[ch01-laplacien-harmonique]] (voir aussi [[ch04-harmonique-def]]), on a donc sur $V$
$$
\Delta(f\circ h)=4\,\frac{\partial}{\partial z}\Big(\frac{\partial (f\circ h)}{\partial\bar z}\Big).
$$

**Étape 1 : dérivée en $\bar z$.** Les fonctions $f$ (sur $U$) et $h$ (sur $V$) sont de classe $C^1$, donc la règle de composition du Lemme I.2.9 ([[ch01-chaine-dz-dzbar]]) donne, pour tout $z\in V$,
$$
\frac{\partial(f\circ h)}{\partial\bar z}(z)=\frac{\partial f}{\partial z}(h(z))\,\frac{\partial h}{\partial \bar z}(z)+\frac{\partial f}{\partial \bar z}(h(z))\,\frac{\partial \bar h}{\partial \bar z}(z).
$$
Comme $h$ est holomorphe, $\frac{\partial h}{\partial\bar z}(z)=0$ ([[ch01-cauchy-riemann]]). Il reste
$$
\frac{\partial(f\circ h)}{\partial\bar z}(z)=\frac{\partial f}{\partial \bar z}(h(z))\,\frac{\partial \bar h}{\partial \bar z}(z).
$$

**Étape 2 : dérivée en $z$, règle du produit.** Les deux facteurs sont de classe $C^1$ sur $V$ ($\frac{\partial f}{\partial\bar z}$ est $C^1$ car $f$ est $C^2$, et $h$, $\bar h$ sont $C^\infty$). La règle du produit (I.2.10) ([[ch01-formulaire-dz-dzbar]]) donne
$$
\frac{\partial^2(f\circ h)}{\partial z\,\partial\bar z}(z)=\frac{\partial}{\partial z}\Big(\frac{\partial f}{\partial\bar z}\circ h\Big)(z)\;\frac{\partial\bar h}{\partial\bar z}(z)+\frac{\partial f}{\partial\bar z}(h(z))\;\frac{\partial}{\partial z}\Big(\frac{\partial\bar h}{\partial\bar z}\Big)(z).
$$

**Étape 3 : le second terme est nul.** D'après la formule de conjugaison (I.2.9) ([[ch01-formulaire-dz-dzbar]]), $\frac{\partial\bar h}{\partial z}=\overline{\Big(\frac{\partial h}{\partial\bar z}\Big)}=0$ sur $\Omega$. Comme $\bar h$ est de classe $C^2$, le théorème de Schwarz ([[ch05-lemme-schwarz]]) permet d'échanger $\partial_z$ et $\partial_{\bar z}$ (leurs développements en $\partial_x,\partial_y$ ne diffèrent que par les termes croisés $\pm\frac i4(\partial_x\partial_y-\partial_y\partial_x)$, qui sont nuls) :
$$
\frac{\partial}{\partial z}\Big(\frac{\partial\bar h}{\partial\bar z}\Big)(z)=\frac{\partial}{\partial \bar z}\Big(\frac{\partial\bar h}{\partial z}\Big)(z)=0 .
$$

**Étape 4 : le premier facteur.** On applique de nouveau la règle de composition ([[ch01-chaine-dz-dzbar]]), cette fois pour l'opérateur $\frac{\partial}{\partial z}$, à la fonction $g\circ h$ où $g:=\frac{\partial f}{\partial\bar z}$ est $C^1$ sur $U$ :
$$
\frac{\partial}{\partial z}\Big(\frac{\partial f}{\partial\bar z}\circ h\Big)(z)=\frac{\partial^2f}{\partial z\,\partial\bar z}(h(z))\,\frac{\partial h}{\partial z}(z)+\frac{\partial^2f}{\partial \bar z^2}(h(z))\,\frac{\partial \bar h}{\partial z}(z)=\frac{\partial^2f}{\partial z\,\partial\bar z}(h(z))\,\frac{\partial h}{\partial z}(z),
$$
puisque $\frac{\partial\bar h}{\partial z}(z)=0$ (étape 3).

**Étape 5 : conclusion.** En regroupant les étapes 2 à 4 et en multipliant par $4$ :
$$
\Delta(f\circ h)(z)=4\,\frac{\partial^2f}{\partial z\,\partial\bar z}(h(z))\,\frac{\partial h}{\partial z}(z)\,\frac{\partial\bar h}{\partial\bar z}(z).
$$
Or $\frac{\partial h}{\partial z}(z)=h'(z)$ (formule (I.2.7), [[ch01-cauchy-riemann]]), et par (I.2.9), $\frac{\partial\bar h}{\partial\bar z}(z)=\overline{\frac{\partial h}{\partial z}(z)}=\overline{h'(z)}$ ; donc $\frac{\partial h}{\partial z}\frac{\partial\bar h}{\partial\bar z}=|h'(z)|^2$. Enfin $4\,\frac{\partial^2f}{\partial z\partial\bar z}=\Delta f$ car $f$ est $C^2$ ([[ch01-laplacien-harmonique]]). D'où
$$
\Delta(f\circ h)(z)=(\Delta f)(h(z))\,|h'(z)|^2 .
$$
La fonction $f$ étant harmonique, $(\Delta f)(h(z))=0$ pour tout $z\in V$, donc $\Delta(f\circ h)=0$ sur $V$ ; comme $f\circ h$ est $C^2$ sur $V$, elle est harmonique sur $V=h^{-1}(U)$. $\square$

## Preuve à trous

$h$ est $C^\infty$, $f\circ h$ est $C^2$ sur l'ouvert $V=h^{-1}(U)$, et $\Delta(f\circ h)=4\,\partial_z\partial_{\bar z}(f\circ h)$. La règle de la chaîne pour $\partial_{\bar z}$ donne
$$
\frac{\partial(f\circ h)}{\partial\bar z}=\Big(\frac{\partial f}{\partial z}\circ h\Big)\frac{\partial h}{\partial \bar z}+\Big(\frac{\partial f}{\partial \bar z}\circ h\Big)\frac{\partial \bar h}{\partial \bar z},
$$
et <trou indice="que vaut $\partial h/\partial\bar z$ pour $h$ holomorphe ?">le premier terme est nul car $\partial h/\partial\bar z=0$ (Cauchy–Riemann), d'où $\partial_{\bar z}(f\circ h)=(\partial_{\bar z}f\circ h)\,\partial_{\bar z}\bar h$</trou>. On dérive ce produit en $z$. Le terme $\big(\partial_{\bar z}f\circ h\big)\,\partial_z\partial_{\bar z}\bar h$ est nul car <trou indice="conjuguer Cauchy–Riemann, puis échanger l'ordre des dérivations">$\partial_z\bar h=\overline{\partial_{\bar z}h}=0$ par (I.2.9), et par Schwarz $\partial_z\partial_{\bar z}\bar h=\partial_{\bar z}\partial_z\bar h=0$</trou>. Pour l'autre terme, la règle de la chaîne pour $\partial_z$ appliquée à $\partial_{\bar z}f\circ h$ donne <trou indice="deux termes, dont l'un contient $\partial\bar h/\partial z$">$\partial_z(\partial_{\bar z}f\circ h)=(\partial_z\partial_{\bar z}f\circ h)\,\partial_zh+(\partial_{\bar z}^2f\circ h)\,\partial_z\bar h=(\partial_z\partial_{\bar z}f\circ h)\,\partial_zh$</trou>. Donc
$$
\Delta(f\circ h)=4\Big(\frac{\partial^2 f}{\partial z\partial\bar z}\circ h\Big)\frac{\partial h}{\partial z}\frac{\partial\bar h}{\partial\bar z},
$$
et comme <trou indice="(I.2.7) et (I.2.9)">$\partial_zh=h'$ et $\partial_{\bar z}\bar h=\overline{\partial_zh}=\overline{h'}$, le produit vaut $|h'|^2$, et $4\,\partial_z\partial_{\bar z}f=\Delta f$</trou>, on obtient $\Delta(f\circ h)=(\Delta f)\circ h\cdot|h'|^2=0$ puisque $f$ est harmonique. $\square$

## Exemples

* **$\log|h|$ est harmonique là où $h\neq0$.** La fonction $f(w)=\log|w|=\frac12\log(u^2+v^2)$ est harmonique sur $\C^\times$ (sur tout disque ne contenant pas $0$, c'est la partie réelle d'une détermination holomorphe du logarithme ; ou directement : $\partial_u^2 f=\frac{v^2-u^2}{(u^2+v^2)^2}$ et $\partial_v^2 f=\frac{u^2-v^2}{(u^2+v^2)^2}$ se compensent). Pour toute $h\in\Hol(\Omega)$, la proposition donne que $\log|h|$ est harmonique sur $\Omega\setminus h^{-1}(0)$. Par exemple $\log|z^2-1|=\frac12\log\big((x^2-y^2-1)^2+4x^2y^2\big)$ est harmonique sur $\C\setminus\{\pm1\}$ : le vérifier à la main est pénible, la proposition le donne gratuitement.
* **Un problème de Dirichlet dans un quart de plan.** Sur $H=\{\Im w>0\}$, $f(w)=\frac1\pi\operatorname{Arg}(w)$ (argument principal, dans $]0,\pi[$) est harmonique : c'est $\frac1\pi\Im(\operatorname{Log} w)$, partie imaginaire d'une fonction holomorphe ([[ch04-holomorphe-implique-harmonique]]) ; elle tend vers $0$ sur le demi-axe réel positif et vers $1$ sur le demi-axe réel négatif. La fonction $h(z)=z^2$ envoie biholomorphiquement le quart de plan $Q=\{x>0,\ y>0\}$ sur $H$. Donc $u=f\circ h$, soit $u(z)=\frac1\pi\operatorname{Arg}(z^2)=\frac2\pi\arctan\frac yx$, est harmonique sur $Q$, tend vers $0$ sur le demi-axe $\{y=0,\ x>0\}$ (où $z^2>0$) et vers $1$ sur le demi-axe $\{x=0,\ y>0\}$ (où $z^2=-y^2<0$). C'est exactement la méthode de [[ch04-reduction-demi-plan]].
* **Vérifier la formule sur une $f$ non harmonique.** $f(w)=|w|^2$ (donc $\Delta f=4$) et $h(z)=e^z$ : $f\circ h(z)=|e^{x+iy}|^2=e^{2x}$, et directement $\Delta(e^{2x})=4e^{2x}$ ; la formule donne $(\Delta f)(e^z)\,|e^z|^2=4\,e^{2x}$. Cohérent.

## Pièges

* > ⚠️ **L'ordre de composition compte** : $f\circ h$ (holomorphe d'abord, harmonique ensuite) est harmonique ; $h\circ f$ ne l'est pas en général. Exemple : $f(z)=x=\Re z$ est harmonique, $h(w)=w^2$ est holomorphe, mais $h\circ f(z)=x^2$ vérifie $\Delta(x^2)=2\neq0$.
* > ⚠️ **Notations du poly inversées** par rapport à l'habitude : dans ce passage, $f$ est la fonction **harmonique** et $h$ la fonction **holomorphe** (alors qu'ailleurs $f$ est souvent holomorphe et $h$ harmonique, comme dans [[ch04-harmonique-f-plus-g-barre]]).
* $h$ seulement $C^\infty$ ou $\R$-linéaire ne suffit pas (contre-exemple $x+2iy$ en H1) : c'est vraiment l'holomorphie (ou l'anti-holomorphie) qui fait marcher la preuve, via $\partial_{\bar z}h=0$ et $\partial_z\bar h=0$.
* Ne pas oublier le facteur $|h'|^2$ dans la formule $\Delta(f\circ h)=(\Delta f)\circ h\cdot|h'|^2$ (et non $h'$, ni $(h')^2$) : il vient du produit $\frac{\partial h}{\partial z}\cdot\frac{\partial\bar h}{\partial\bar z}=h'\,\overline{h'}$.
* L'harmonicité n'est obtenue que sur $h^{-1}(U)$ : vérifier que $h$ prend ses valeurs dans le domaine de $f$ (par exemple $\log|h|$ n'est harmonique que hors des zéros de $h$).
* La réciproque : si $h$ est **biholomorphe** de $\Omega$ sur $U$, alors $f$ est harmonique sur $U$ si et seulement si $f\circ h$ l'est sur $\Omega$ (appliquer la proposition à $h^{-1}$, holomorphe). Sans bijectivité, la formule montre seulement que $(\Delta f)(h(z))=0$ aux points où $h'(z)\neq0$.
* Pour une fonction harmonique **réelle**, $f\circ h$ est réelle et harmonique ; c'est ce qui permet de transporter potentiels de vitesses et températures (§ IV.4) : voir [[ch04-ecoulement-coin]], [[ch04-joukovski]], [[ch04-chaleur-couronne]].
