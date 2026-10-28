---
id: ch04-weierstrass-enneper
type: theorem
chapter: 4
title: Représentation de Weierstrass–Enneper des surfaces minimales
ref: non numéroté, section IV.3, p. 78 (formule de Weierstrass–Enneper)
page: 78
importance: 1
depends: [ch04-harmonique-def, ch01-laplacien-harmonique, ch04-weierstrass-enneper-esquisse, ch02-primitive-simplement-connexe, ch01-integrale-primitive, ch04-holomorphe-implique-harmonique, ch01-zeros-isoles, ch01-holomorphe-ssi-c1-et-dzbar-nul, ch01-formulaire-dz-dzbar]
tags: [surfaces-minimales, weierstrass-enneper, films-de-savon, harmonique, meromorphe, conforme]
---
## Intuition

> 💡 Un film de savon tendu sur un contour minimise son aire : c'est une **surface minimale** (courbure moyenne $H\equiv0$). Si l'on paramètre une telle surface de façon **conforme** (angles conservés) par un ouvert $\Omega\subset\C$, ses trois coordonnées deviennent des fonctions **harmoniques** de $z = u+iv$. Or on sait depuis le § IV.2 que harmonique $=$ partie réelle d'holomorphe : la surface est donc $X = \Re\int\varphi$ pour une application holomorphe $\varphi = (\varphi_1,\varphi_2,\varphi_3)$ à valeurs dans $\C^3$. La conformité ajoute une contrainte algébrique, $\varphi_1^2+\varphi_2^2+\varphi_3^2 = 0$ (une « sphère de rayon nul »), et cette quadrique se paramètre rationnellement par deux fonctions $f,g$ : c'est la formule de Weierstrass–Enneper.

Image mentale : la **donnée de Weierstrass** $(f,g)$ joue le rôle d'un « ADN holomorphe » de la surface ; $g$ est la direction de la normale (projection stéréographique de l'application de Gauss), $f$ un facteur d'échelle. Des couples $(f,g)$ très simples engendrent les surfaces classiques : $(1/w^2,\,w)$ la caténoïde, $(i/w^2,\,w)$ l'hélicoïde, $(1,\,w)$ la surface d'Enneper ([[ch04-exemples-surfaces-minimales]]).

Rappels : une fonction est **harmonique** si elle est $C^2$ de laplacien nul ([[ch04-harmonique-def]]) ; $\Delta = 4\,\partial_z\partial_{\bar z}$ ([[ch01-laplacien-harmonique]]) ; une fonction **méromorphe** est holomorphe en dehors de pôles isolés ([[ch02-pole-meromorphe-def]]). Un paramétrage $X:\Omega\to\R^3$ de classe $C^2$ est **conforme** si $|X_u| = |X_v|$ et $\langle X_u,X_v\rangle = 0$ ; il est **régulier** si $X_u\neq0$ (donc $X_u,X_v$ indépendants). Pour $\varphi,\psi\in\C^3$ on note $\varphi\cdot\psi = \varphi_1\psi_1+\varphi_2\psi_2+\varphi_3\psi_3$ (forme **bilinéaire**, pas le produit hermitien).

## Énoncé

**Théorème (poly, section IV.3, p. 78 ; Enneper et Weierstrass, 1866).** Toute surface minimale de $\R^3$ peut se paramétrer, du moins localement, par
$$
z\longmapsto \Re\left(\int_{[z_0,z]}(1-g^2)f\,dw,\ \ i\int_{[z_0,z]}(1+g^2)f\,dw,\ \ \int_{[z_0,z]}2gf\,dw\right),
$$
où $f$ et $g$ sont holomorphes sur l'ouvert $\Omega\subset\C$ où l'on travaille. On autorise plus généralement $g$ à être méromorphe, pourvu que $f$ s'annule à l'ordre $2m$ en tout pôle d'ordre $m$ de $g$, de sorte que les trois intégrandes
$$
\varphi := \big((1-g^2)f,\ i(1+g^2)f,\ 2gf\big)
$$
restent holomorphes. Dans les exemples, $f$ et $g$ sont méromorphes sur la sphère de Riemann et $\Omega$ est obtenu en retirant leurs pôles : les points ainsi retirés sont les **bouts** de la surface.

*Précisions.* (i) Réciproquement, pour tout couple $(f,g)$ comme ci-dessus sur un ouvert $\Omega$ simplement connexe, la formule définit $X:\Omega\to\R^3$ de classe $C^\infty$, conforme, dont les coordonnées sont harmoniques ; $X$ est régulière (immersion) en tout pôle de $g$ et, hors des pôles de $g$, exactement aux points où $f\neq0$ (en un pôle $a$ de $g$ on a $f(a)=0$, mais $|X_u|(a)=|fg^2|(a)\neq0$, voir A4) ; aux points réguliers, la surface est minimale. (ii) Sur $\Omega$ non simplement connexe, $X$ est bien définie si et seulement si la **condition de périodes** $\Re\oint_\gamma\varphi\,dw = 0$ est vérifiée pour tout lacet $\gamma$ de $\Omega$ ([[ch04-condition-periodes]]). (iii) Le seul point admis est géométrique (Remarque IV.3.1, [[ch04-weierstrass-enneper-esquisse]]) : toute surface admet localement un paramétrage conforme $X$, et pour un tel paramétrage $\Delta X = 2|X_u|^2\,H\,N$ ($H$ courbure moyenne, $N$ normale unitaire).

## Hypothèses

### H1 — $f,g$ holomorphes sur $\Omega$, ou $g$ méromorphe avec $f$ nulle à l'ordre $2m$ aux pôles d'ordre $m$ de $g$

**Rôle.** C'est ce qui rend les trois intégrandes $\varphi_1 = (1-g^2)f$, $\varphi_2 = i(1+g^2)f$, $\varphi_3 = 2gf$ **holomorphes** sur $\Omega$ : en un pôle $a$ d'ordre $m$ de $g$, $g^2f$ a pour ordre $\mathrm{ord}_a f-2m = 0$, donc $g^2f$ et $gf$ sont holomorphes en $a$. L'ordre **exactement** $2m$ assure de plus $\varphi(a)\neq0$ : $\varphi_1(a)-i\varphi_2(a) = 2f(a) = 0$ et $\varphi_3(a) = 0$, mais $\varphi_1(a)+i\varphi_2(a) = -2(fg^2)(a)\neq0$.

**Si on la retire.** Si $f$ s'annule à un ordre $<2m$ en un pôle de $g$, $\varphi$ a un pôle : $X$ n'est pas définie en ce point (c'est un « bout », à retirer de $\Omega$). Si $f$ s'annule à un ordre $>2m$, alors $\varphi(a) = 0$ et $X$ n'est pas une immersion en $a$ (point de branchement) : la formule garde un sens mais ne décrit plus une surface régulière en $a$.

### H2 — $\Omega$ simplement connexe (ou : paramétrage **local**)

**Rôle.** Pour que $\int_{[z_0,z]}\varphi\,dw$ ne dépende que de $z$, il faut que $\varphi$ admette des primitives holomorphes, ce qui est automatique sur un ouvert simplement connexe ([[ch02-primitive-simplement-connexe]]). C'est pourquoi l'énoncé dit « du moins localement » : sur un disque c'est toujours vrai.

**Si on la retire.** Hélicoïde : $f = i/w^2$, $g = w$ sur $\C^*$. Alors $\varphi_3 = 2gf = 2i/w$, dont l'intégrale sur $C(0,1)$ vaut $2i\cdot2i\pi = -4\pi$, **réelle** non nulle : $X_3 = \Re\int\varphi_3 = -2\arg w$ est multivaluée. La formule ne définit un paramétrage que sur $\C^*$ privé d'une demi-droite (ou sur le revêtement universel) ; c'est bien ce que l'on voit : l'hélicoïde monte d'un étage à chaque tour. Pour la caténoïde ($f = 1/w^2$, $g = w$), au contraire, $\varphi_3 = 2/w$ a une période $4i\pi$ imaginaire pure que $\Re$ annule, et $\varphi_1,\varphi_2$ ont un résidu nul en $0$ : $X$ est bien définie sur $\C^*$ ([[ch04-condition-periodes]]).

### H3 — Le résultat admis : paramétrage conforme et $\Delta X = 2|X_u|^2HN$

**Rôle.** Dans le sens direct (la formule donne une surface minimale), on l'utilise pour traduire « coordonnées harmoniques et paramétrage conforme régulier » en « $H\equiv0$ ». Dans le sens réciproque (toute surface minimale est de cette forme), on l'utilise pour disposer d'un paramétrage conforme et en déduire l'harmonicité.

**Si on la retire.** Il n'y a plus de lien avec la géométrie : ce qui reste (et qui relève du cours) est l'énoncé purement analytique « les applications $X:\Omega\to\R^3$ conformes à coordonnées harmoniques sont exactement les $\Re\int\varphi$ avec $\varphi$ holomorphe à valeurs dans la quadrique $Q = \{w\cdot w = 0\}$, et ces $\varphi$ sont paramétrées par $(f,g)$ ». Cette hypothèse n'est donc pas « de confort » : c'est le pont, admis, entre analyse complexe et surfaces.

## Idée de la preuve

Sens direct : $\varphi\cdot\varphi = 0$ par un calcul algébrique ; $X = \Re\int\varphi$ a des coordonnées harmoniques, et $2\partial_zX = \varphi$ donne la conformité ; le résultat admis conclut $H = 0$. Réciproque : paramétrage conforme (admis), $\varphi := 2\partial_zX$ est holomorphe à valeurs dans $Q$ ; on paramètre $Q$ par $f = \tfrac12(\varphi_1-i\varphi_2)$, $g = \varphi_3/(\varphi_1-i\varphi_2)$.

## Preuve

On note $z = u+iv$, $X_u = \partial_uX$, $X_v = \partial_vX$, et l'on travaille sur un ouvert $\Omega$ simplement connexe (un disque pour le résultat local). La partie géométrique (H3) est admise ; tout le reste est démontré, en suivant la Remarque IV.3.1 ([[ch04-weierstrass-enneper-esquisse]]).

**Partie A : la formule définit une surface minimale.** Soient $f,g$ comme en H1 et $\varphi = (\varphi_1,\varphi_2,\varphi_3)$, dont les trois composantes sont holomorphes sur $\Omega$.

*A1. $X$ est bien définie et $C^\infty$.* Chaque $\varphi_k$ admet une primitive holomorphe $\Phi_k$ sur $\Omega$ simplement connexe ([[ch02-primitive-simplement-connexe]]), et $\int_{[z_0,z]}\varphi_k\,dw = \Phi_k(z)-\Phi_k(z_0)$ ([[ch01-integrale-primitive]]), l'intégrale étant prise le long de n'importe quel chemin de $z_0$ à $z$ dans $\Omega$ (le segment $[z_0,z]$ si $\Omega$ est convexe, par exemple un disque ; sur un $\Omega$ simplement connexe non convexe, la notation $\int_{[z_0,z]}$ du poly désigne l'intégrale sur un chemin quelconque de $\Omega$, dont elle ne dépend pas). Donc $X(z) = \Re\big(\Phi(z)-\Phi(z_0)\big)$, de classe $C^\infty$ ; ses coordonnées $X_k = \Re\Phi_k-\Re\Phi_k(z_0)$ sont harmoniques ([[ch04-holomorphe-implique-harmonique]]).

*A2. $2\partial_zX = \varphi$.* Pour chaque $k$, $2\,\partial_z(\Re\Phi_k) = \partial_z\big(\Phi_k+\overline{\Phi_k}\big) = \Phi_k'+0 = \varphi_k$, car $\partial_z\Phi_k = \Phi_k'$ (formule (I.2.7)) et $\partial_z\overline{\Phi_k} = \overline{\partial_{\bar z}\Phi_k} = 0$ ((I.2.9), [[ch01-formulaire-dz-dzbar]]). Comme $2\partial_z = \partial_u-i\partial_v$, on obtient
$$
X_u-iX_v = \varphi .
$$

*A3. Conformité.* Développons avec la forme bilinéaire de $\C^3$ (les $X_u,X_v$ sont réels) :
$$
\varphi\cdot\varphi = (X_u-iX_v)\cdot(X_u-iX_v) = |X_u|^2-|X_v|^2-2i\,\langle X_u,X_v\rangle .
$$
Or, algébriquement,
$$
\varphi\cdot\varphi = f^2\Big[(1-g^2)^2-(1+g^2)^2+4g^2\Big] = f^2\Big[(1-2g^2+g^4)-(1+2g^2+g^4)+4g^2\Big] = 0 .
$$
En séparant parties réelle et imaginaire : $|X_u| = |X_v|$ et $\langle X_u,X_v\rangle = 0$ : $X$ est conforme.

*A4. Régularité.* Avec le produit hermitien, $|X_u|^2+|X_v|^2 = |\varphi|^2 = |f|^2\big(|1-g^2|^2+|1+g^2|^2+4|g|^2\big) = |f|^2\big(2+2|g|^4+4|g|^2\big) = 2|f|^2(1+|g|^2)^2$ (identité du parallélogramme : $|1-g^2|^2+|1+g^2|^2 = 2(1+|g|^4)$). Comme $|X_u| = |X_v|$,
$$
|X_u| = |X_v| = |f|\,(1+|g|^2)
$$
(en un pôle de $g$, on lit cette formule comme $|fg^2|\cdot(|g|^{-2}+1)\to|fg^2|(a)\neq0$). Donc $X$ est une immersion en tout pôle de $g$ et, hors des pôles de $g$, exactement aux points où $f\neq0$.

*A5. Minimalité.* Aux points réguliers, $X$ est un paramétrage conforme régulier à coordonnées harmoniques : $\Delta X = 0$. Le résultat admis $\Delta X = 2|X_u|^2HN$ avec $|X_u|\neq0$ et $N\neq0$ donne $H = 0$ : la surface est minimale.

**Partie B : toute surface minimale est localement de cette forme.** Soit $S$ une surface minimale. Par le résultat admis, au voisinage de tout point, $S$ admet un paramétrage conforme régulier $X:\Omega\to\R^3$ (on prend $\Omega$ un disque), de classe $C^2$ au moins ; la formule $\Delta X = 2|X_u|^2HN$ et $H\equiv0$ donnent $\Delta X = 0$ : les coordonnées de $X$ sont harmoniques.

*B1. $\varphi := 2\partial_zX = X_u-iX_v$ est holomorphe, à valeurs dans $Q$, et ne s'annule pas.* $\varphi$ est $C^1$ et $\partial_{\bar z}\varphi = 2\partial_{\bar z}\partial_zX = \tfrac12\Delta X = 0$ ([[ch01-laplacien-harmonique]]), donc $\varphi\in\Hol(\Omega)^3$ ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]). Le calcul de A3 lu à l'envers donne $\varphi\cdot\varphi = |X_u|^2-|X_v|^2-2i\langle X_u,X_v\rangle = 0$ par conformité : $\varphi$ est à valeurs dans la quadrique $Q = \{w\in\C^3 : w\cdot w = 0\}$. Enfin $|\varphi|^2 = |X_u|^2+|X_v|^2 = 2|X_u|^2>0$ par régularité.

*B2. Reconstruction de $X$.* $\Re(\varphi\,dz) = \Re\big((X_u-iX_v)(du+i\,dv)\big) = X_u\,du+X_v\,dv = dX$, donc, en intégrant le long d'un chemin de $z_0$ à $z$ dans $\Omega$ : $X(z) = X(z_0)+\Re\int_{[z_0,z]}\varphi\,dw$ (l'intégrale ne dépend pas du chemin, $\Omega$ étant simplement connexe).

*B3. Paramétrage de $Q$.* Si $\varphi_1-i\varphi_2\equiv0$, alors $\varphi_1 = i\varphi_2$, d'où $\varphi_1^2+\varphi_2^2 = 0$ et $\varphi_3^2 = -(\varphi_1^2+\varphi_2^2) = 0$ : $X_3$ est constante, la surface est contenue dans un plan (cas trivial, exclu). Sinon, $\varphi_1-i\varphi_2$ est holomorphe non identiquement nulle sur l'ouvert connexe $\Omega$ : ses zéros sont isolés ([[ch01-zeros-isoles]]) et l'on pose
$$
f := \tfrac12(\varphi_1-i\varphi_2)\in\Hol(\Omega), \qquad g := \frac{\varphi_3}{\varphi_1-i\varphi_2}\ \text{ méromorphe sur }\Omega .
$$
La relation $\varphi\cdot\varphi = 0$ s'écrit $(\varphi_1-i\varphi_2)(\varphi_1+i\varphi_2) = \varphi_1^2+\varphi_2^2 = -\varphi_3^2$, d'où, là où $\varphi_1-i\varphi_2\neq0$,
$$
\varphi_1+i\varphi_2 = -\frac{\varphi_3^2}{\varphi_1-i\varphi_2} = -2fg^2 .
$$
En recombinant : $\varphi_1 = \tfrac12\big[(\varphi_1-i\varphi_2)+(\varphi_1+i\varphi_2)\big] = f-fg^2 = (1-g^2)f$ ; $\varphi_2 = \tfrac1{2i}\big[(\varphi_1+i\varphi_2)-(\varphi_1-i\varphi_2)\big] = \tfrac1{2i}(-2fg^2-2f) = i(1+g^2)f$ ; $\varphi_3 = g\,(\varphi_1-i\varphi_2) = 2gf$. Ces identités, vraies hors des zéros isolés de $\varphi_1-i\varphi_2$, s'étendent partout par continuité des $\varphi_k$.

*B4. La condition sur les pôles.* En un pôle $a$ de $g$ d'ordre $m$ : $fg^2 = -\tfrac12(\varphi_1+i\varphi_2)$ est holomorphe, donc $\mathrm{ord}_af\ge2m$ ; et $\varphi(a)\neq0$ avec $\varphi_1(a)-i\varphi_2(a) = 2f(a) = 0$, $\varphi_3(a) = 2(fg)(a) = 0$ (ordre $\ge m\ge1$) impose $(fg^2)(a)\neq0$, soit $\mathrm{ord}_af = 2m$ exactement. On retrouve la condition de l'énoncé, et $X(z) = X(z_0)+\Re\int_{[z_0,z]}\varphi\,dw$ est la formule de Weierstrass–Enneper. $\square$

## Preuve à trous

*Sens direct.* Soient $f,g$ holomorphes sur $\Omega$ simplement connexe et $\varphi = ((1-g^2)f,\,i(1+g^2)f,\,2gf)$. Chaque $\varphi_k$ admet une primitive $\Phi_k$, et $X = \Re(\Phi-\Phi(z_0))$ a des coordonnées <trou indice="partie réelle d'une fonction holomorphe">harmoniques (parties réelles de fonctions holomorphes)</trou>. On a $2\partial_zX = \varphi$, c'est-à-dire $X_u-iX_v = \varphi$, et donc $\varphi\cdot\varphi = $ <trou indice="développer le carré bilinéaire d'un vecteur complexe à parties réelles X_u et -X_v">$|X_u|^2-|X_v|^2-2i\langle X_u,X_v\rangle$</trou>. Or le calcul algébrique donne $\varphi\cdot\varphi = f^2\big[(1-g^2)^2-(1+g^2)^2+4g^2\big] = $ <trou>$f^2\,[\,-4g^2+4g^2\,] = 0$</trou> : le paramétrage est conforme, de facteur $|X_u| = |f|(1+|g|^2)$ ; le résultat admis $\Delta X = 2|X_u|^2HN$ donne $H = 0$.

*Réciproque.* Pour un paramétrage conforme $X$ d'une surface minimale, $\varphi = 2\partial_zX$ est holomorphe car <trou indice="lien entre ∂_z̄∂_z et Δ">$\partial_{\bar z}\varphi = \tfrac12\Delta X = 0$ et $\Delta X = 2|X_u|^2HN = 0$</trou>, et $\varphi\cdot\varphi = 0$. Si $\varphi_1-i\varphi_2\not\equiv0$, on pose $f = \tfrac12(\varphi_1-i\varphi_2)$, $g = \varphi_3/(\varphi_1-i\varphi_2)$ ; la relation $(\varphi_1-i\varphi_2)(\varphi_1+i\varphi_2) = -\varphi_3^2$ donne <trou>$\varphi_1+i\varphi_2 = -2fg^2$</trou>, et en recombinant $\varphi = ((1-g^2)f,\,i(1+g^2)f,\,2gf)$. $\square$

## Exemples

* **Caténoïde : $f(w) = 1/w^2$, $g(w) = w$ sur $\C^*$.** $\varphi = \big(w^{-2}-1,\ i(w^{-2}+1),\ 2/w\big)$, de primitives $\Phi_1 = -\tfrac1w-w$, $\Phi_2 = i\big(w-\tfrac1w\big)$, $\Phi_3 = 2\log w$ (multivaluée, mais $\Re\Phi_3 = 2\log|w|$ est bien définie). Avec $w = e^{s+i\theta}$ : $\Re\Phi_1 = -(e^{-s}+e^{s})\cos\theta = -2\cosh s\cos\theta$ ; $w-\tfrac1w = 2\sinh s\cos\theta+2i\cosh s\sin\theta$, donc $\Re\Phi_2 = \Re\big(i(w-\tfrac1w)\big) = -2\cosh s\sin\theta$ ; $\Re\Phi_3 = 2s$. D'où
$$
X(s,\theta) = \big(-2\cosh s\cos\theta,\ -2\cosh s\sin\theta,\ 2s\big) :
$$
surface de révolution d'axe $Ox_3$ dont le rayon vaut $2\cosh(x_3/2)$, la **caténoïde** (rotation de la chaînette). Facteur conforme : $|X_u| = |f|(1+|g|^2) = (1+|w|^2)/|w|^2$. Les deux bouts ($w\to0$, $w\to\infty$) sont les deux « cheminées » de la caténoïde.
* **Surface d'Enneper : $f = 1$, $g = w$ sur $\C$.** $\varphi = (1-w^2,\ i(1+w^2),\ 2w)$, $X = \Re\big(w-\tfrac{w^3}3,\ i(w+\tfrac{w^3}3),\ w^2\big)$. Avec $w = u+iv$, $w^3 = u^3-3uv^2+i(3u^2v-v^3)$ :
$$
X(u,v) = \Big(u-\tfrac{u^3}{3}+uv^2,\ \ -v-u^2v+\tfrac{v^3}{3},\ \ u^2-v^2\Big),
$$
définie sur tout $\C$ (simplement connexe : aucune condition de périodes), polynomiale, non plongée (elle se recoupe) : c'est la surface d'Enneper. On vérifie par exemple que $X_u = (1-u^2+v^2,\ -2uv,\ 2u)$ et $X_v = (2uv,\ -1-u^2+v^2,\ -2v)$ sont orthogonaux : $\langle X_u,X_v\rangle = 2uv(1-u^2+v^2)+2uv(1+u^2-v^2)-4uv = 4uv-4uv = 0$. $\checkmark$
* **Hélicoïde : $f = i/w^2$, $g = w$.** C'est $\varphi_{\text{hél}} = i\,\varphi_{\text{cat}}$, donc $X_{\text{hél}} = \Re(i\Phi_{\text{cat}}) = -\Im\Phi_{\text{cat}}$ : $X = \big(2\sinh s\sin\theta,\ -2\sinh s\cos\theta,\ -2\theta\big)$, surface réglée (droites horizontales $\theta = $ cte tournant en montant) : l'hélicoïde. La coordonnée $X_3 = -2\theta$ est multivaluée sur $\C^*$ : la condition de périodes échoue (H2), le paramétrage n'est que local. Caténoïde et hélicoïde, « conjuguées » par la multiplication par $i$ de $\varphi$, sont localement isométriques.

## Pièges

* > ⚠️ $\varphi\cdot\varphi = \sum\varphi_k^2$ est la forme **bilinéaire** : elle peut s'annuler pour $\varphi\neq0$ (c'est tout l'intérêt). Ne pas la confondre avec $|\varphi|^2 = \sum|\varphi_k|^2$, qui vaut $2|X_u|^2$ et ne s'annule qu'aux points singuliers.
* Ne pas oublier la partie réelle : $X = \Re\int\varphi$, pas $\int\varphi$. Et c'est cette partie réelle qui peut absorber une période imaginaire pure (caténoïde) mais pas une période réelle (hélicoïde).
* Les points où $f = 0$ (hors pôles de $g$) sont des points de branchement : $X$ n'y est pas une immersion. L'ordre « exactement $2m$ » aux pôles de $g$ sert précisément à éviter cela.
* $g$ méromorphe est permis, $f$ doit rester holomorphe ; les pôles de $f$ (comme $w = 0$ pour la caténoïde) sont des bouts, retirés de $\Omega$.
* Le paramétrage est **local** : globalement il faut la condition de périodes ([[ch04-condition-periodes]]) et la surface peut ne pas être plongée (Enneper se recoupe).
* Le seul résultat admis est l'existence de paramétrages conformes et la formule $\Delta X = 2|X_u|^2HN$ ; tout le reste (holomorphie de $\varphi$, quadrique, paramétrage par $(f,g)$) relève du cours et peut être demandé.
