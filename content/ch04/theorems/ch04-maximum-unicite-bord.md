---
id: ch04-maximum-unicite-bord
type: corollary
chapter: 4
title: Le principe du maximum donne l'unicité des problèmes aux limites
ref: Remarque IV.2.6
page: 77
importance: 2
depends: [ch04-harmonique-moyenne-maximum, ch04-harmonique-def]
tags: [harmonique, principe-du-maximum, dirichlet, unicite, bord, compact]
---
## Intuition

> 💡 Une plaque métallique dont on fixe la température au bord n'a qu'un seul régime stationnaire possible. Pourquoi ? La différence de deux régimes est une fonction harmonique **nulle au bord** ; si elle n'était pas nulle, elle aurait un point chaud (ou froid) à l'intérieur, interdit par le principe du maximum ([[ch04-harmonique-moyenne-maximum]]). C'est le mécanisme d'**unicité** de tous les problèmes aux limites de la section IV.4 : trouver *une* solution harmonique vérifiant les conditions au bord, c'est trouver *la* solution.

L'argument est en deux temps : (i) sur un ouvert **borné**, $\bar\Omega$ est compact, donc une fonction continue sur $\bar\Omega$ atteint son maximum **quelque part** ; (ii) si c'est à l'intérieur, le principe du maximum force la constance, donc le maximum est aussi atteint au bord ; dans tous les cas $\max_{\bar\Omega}h = \max_{\partial\Omega}h$. Même mécanisme que pour $|f|$ holomorphe ([[ch01-maximum-sur-le-bord]]).

Rappels : $h$ **harmonique** sur l'ouvert $\Omega$ : $C^2$ et $\Delta h = 0$ ([[ch04-harmonique-def]]) ; $\bar\Omega$ est l'adhérence de $\Omega$ et $\partial\Omega = \bar\Omega\setminus\Omega$ son bord (pour $\Omega$ ouvert) ; le **problème de Dirichlet** sur $\Omega$ consiste à trouver $h$ continue sur $\bar\Omega$, harmonique sur $\Omega$, égale à une fonction donnée sur $\partial\Omega$.

## Énoncé

**Corollaire (poly, Remarque IV.2.6, p. 77 ; énoncé précisé).** Soit $\Omega$ un ouvert **connexe, borné** et non vide de $\C$, et $h:\bar\Omega\to\R$ une fonction **continue sur $\bar\Omega$** et harmonique sur $\Omega$. Alors
$$
\min_{\partial\Omega}h\ \le\ h(z)\ \le\ \max_{\partial\Omega}h \qquad\text{pour tout } z\in\bar\Omega .
$$
En particulier (**unicité du problème de Dirichlet**) : si $h_1,h_2:\bar\Omega\to\R$ sont continues sur $\bar\Omega$, harmoniques sur $\Omega$ et égales sur $\partial\Omega$, alors $h_1 = h_2$ sur $\bar\Omega$. Le même énoncé vaut pour $h_1,h_2$ à valeurs complexes (séparer parties réelle et imaginaire).

Le poly formule ce principe en une remarque : « le principe du maximum donne bien souvent l'unicité de fonctions harmoniques vérifiant des conditions au bord fixées », et renvoie à l'exemple du § IV.4.1 ([[ch04-ecoulement-potentiel]]) ; l'exemple le plus net est l'unicité de la température dans une couronne ([[ch04-chaleur-couronne]]).

## Hypothèses

### H1 — $\Omega$ est borné

**Rôle.** $\bar\Omega$ est alors fermé et borné, donc **compact** : la fonction continue $h$ y atteint son maximum et son minimum. Sans cela, le sup pourrait n'être atteint nulle part. Le caractère borné assure aussi $\partial\Omega\neq\emptyset$ (sinon $\Omega$ serait ouvert et fermé dans $\C$, donc égal à $\C$, non borné).

**Si on la retire.** $h(z) = y = \Im z$ sur le demi-plan $H = \{y>0\}$ : harmonique, continue sur $\bar H$, **nulle sur $\partial H = \R$**, mais non nulle. L'unicité du problème de Dirichlet tombe : $0$ et $y$ ont les mêmes valeurs au bord. Autre exemple : $h = e^x\sin y$ sur la bande $\{0<y<\pi\}$, nulle sur les deux droites du bord. Sur un ouvert non borné, il faut une hypothèse supplémentaire de **bornitude de $h$** ; c'est ce que le poly fait p. 82 pour $v_y$ sur $H$ (via un argument de type Phragmén–Lindelöf, hors programme, ou en se ramenant au disque par une homographie).

### H2 — $h$ est continue sur $\bar\Omega$ (jusqu'au bord)

**Rôle.** Pour que $h$ ait un maximum sur le compact $\bar\Omega$ et pour que « $h = 0$ sur $\partial\Omega$ » ait un sens ; la constance obtenue à l'intérieur se propage au bord par continuité.

**Si on la retire.** Sur le disque unité $D$, $h(z) = \Re\dfrac{1+z}{1-z}$ est harmonique (partie réelle d'une holomorphe). Pour $|z| = 1$, $z\neq1$ : $\dfrac{1+z}{1-z} = \dfrac{(1+z)(1-\bar z)}{|1-z|^2} = \dfrac{1-|z|^2+z-\bar z}{|1-z|^2} = \dfrac{2i\,\Im z}{|1-z|^2}\in i\R$, donc $h = 0$ sur $\partial D\setminus\{1\}$. Pourtant $h(0) = 1\neq0$, et $h(x)=\dfrac{1+x}{1-x}\to+\infty$ quand $x\to1^-$ : $h$ n'est pas continue en **un seul** point du bord, et l'unicité est perdue.

### H3 — $h$ est harmonique sur $\Omega$ et réelle

**Rôle.** C'est l'hypothèse du principe du maximum ([[ch04-harmonique-moyenne-maximum]]), appliqué à $h$ et à $-h$.

**Si on la retire.** $h(z) = 1-|z|^2$ sur $D$ : continue sur $\bar D$, nulle sur $\partial D$, mais $h(0) = 1$ ; bien sûr $\Delta h = -4\neq0$. Pour $h$ complexe, l'inégalité n'a pas de sens mais l'unicité subsiste (appliquer à $\Re h$ et $\Im h$).

### H4 — $\Omega$ est connexe

**Rôle.** Hypothèse du principe du maximum : « maximum local intérieur $\Rightarrow$ constante sur $\Omega$ ».

**Si on la retire.** La conclusion reste vraie mais la preuve change : on raisonne sur chaque composante connexe $\Omega_i$ de $\Omega$ (ouverte, bornée, de bord $\partial\Omega_i\subset\partial\Omega$ puisque les composantes d'un ouvert sont ouvertes et disjointes). L'hypothèse est donc de confort.

## Idée de la preuve

$h$ continue sur le compact $\bar\Omega$ atteint son maximum en $z^*$. Si $z^*\in\Omega$, le principe du maximum rend $h$ constante sur $\Omega$, donc sur $\bar\Omega$ par continuité, et le max est aussi atteint au bord. Dans tous les cas $\max_{\bar\Omega}h = \max_{\partial\Omega}h$ ; idem pour le min avec $-h$. Pour l'unicité, appliquer à $h_1-h_2$, nulle au bord.

## Preuve

*Le maximum est atteint au bord.* L'ensemble $\bar\Omega$ est fermé et borné dans $\C$, donc compact ; $h$ y est continue, donc atteint son maximum $M := \max_{\bar\Omega}h$ en un point $z^*\in\bar\Omega$. Deux cas.

* Si $z^*\in\partial\Omega$, alors $M = h(z^*)\le\max_{\partial\Omega}h$ (le bord $\partial\Omega$ est un fermé de $\bar\Omega$, donc compact, non vide par H1 : ce max existe).
* Si $z^*\in\Omega$, alors $h\le h(z^*)$ sur tout $\Omega$ : $z^*$ est un maximum (global, donc local) de la fonction harmonique réelle $h$ sur l'ouvert connexe $\Omega$. Par le principe du maximum (Corollaire IV.2.5, [[ch04-harmonique-moyenne-maximum]]), $h\equiv M$ sur $\Omega$, puis sur $\bar\Omega$ par continuité (tout point de $\bar\Omega$ est limite de points de $\Omega$). En particulier $h = M$ sur $\partial\Omega\neq\emptyset$ et $M = \max_{\partial\Omega}h$.

Dans les deux cas, $h(z)\le M\le\max_{\partial\Omega}h$ pour tout $z\in\bar\Omega$ ; comme évidemment $\max_{\partial\Omega}h\le M$, on a $\max_{\bar\Omega}h = \max_{\partial\Omega}h$.

*Le minimum aussi.* La fonction $-h$ est continue sur $\bar\Omega$ et harmonique réelle sur $\Omega$ ($\Delta(-h) = -\Delta h = 0$). Ce qui précède donne $\max_{\bar\Omega}(-h) = \max_{\partial\Omega}(-h)$, soit $\min_{\bar\Omega}h = \min_{\partial\Omega}h$. D'où l'encadrement $\min_{\partial\Omega}h\le h\le\max_{\partial\Omega}h$ sur $\bar\Omega$.

*Unicité.* Soient $h_1,h_2$ continues sur $\bar\Omega$, harmoniques sur $\Omega$, égales sur $\partial\Omega$. La fonction $h := h_1-h_2$ est continue sur $\bar\Omega$, harmonique sur $\Omega$ (le laplacien est linéaire) et nulle sur $\partial\Omega$. L'encadrement donne $0 = \min_{\partial\Omega}h\le h\le\max_{\partial\Omega}h = 0$, donc $h\equiv0$ : $h_1 = h_2$ sur $\bar\Omega$. Pour des fonctions à valeurs complexes, on applique ceci à $\Re(h_1-h_2)$ et $\Im(h_1-h_2)$, qui sont harmoniques réelles ([[ch04-harmonique-def]]). $\square$

## Preuve à trous

Soit $h$ continue sur $\bar\Omega$, harmonique réelle sur $\Omega$ connexe borné. Comme <trou indice="topologie de l'adhérence d'un borné">$\bar\Omega$ est compact (fermé borné de $\C$)</trou>, $h$ atteint son maximum $M$ en un point $z^*\in\bar\Omega$. Si $z^*\in\partial\Omega$, alors $M\le\max_{\partial\Omega}h$. Si $z^*\in\Omega$, alors <trou indice="quel résultat du § IV.2 s'applique à un maximum intérieur ?">$z^*$ est un maximum local intérieur de $h$ harmonique réelle sur $\Omega$ connexe : par le principe du maximum, $h\equiv M$ sur $\Omega$, donc sur $\bar\Omega$ par continuité</trou>, et $M = \max_{\partial\Omega}h$. Dans tous les cas $\max_{\bar\Omega}h = \max_{\partial\Omega}h$. En appliquant ceci à <trou>$-h$, qui est aussi harmonique réelle et continue sur $\bar\Omega$</trou>, on obtient $\min_{\bar\Omega}h = \min_{\partial\Omega}h$. Pour l'unicité, $h = h_1-h_2$ est <trou>harmonique, continue sur $\bar\Omega$ et nulle sur $\partial\Omega$, donc comprise entre $0$ et $0$</trou> : $h_1 = h_2$. $\square$

## Exemples

* **Température dans une couronne** ([[ch04-chaleur-couronne]]). $\Omega = \{r_1<|z|<r_2\}$ (connexe, borné), température $T_1$ imposée sur $|z| = r_1$ et $T_2$ sur $|z| = r_2$. La fonction $T(z) = A\log|z|+B$ avec $A = \dfrac{T_2-T_1}{\log(r_2/r_1)}$, $B = T_1-A\log r_1$ est harmonique ([[ch04-harmoniques-radiales]]), continue sur $\bar\Omega$ et vérifie les conditions au bord ($A\log r_1+B = T_1$, $A\log r_2+B = T_1+A\log(r_2/r_1) = T_2$). Par le corollaire, c'est **la** distribution stationnaire : toute autre solution continue sur $\bar\Omega$ coïncide avec elle. Noter que $\Omega$ n'est pas simplement connexe : seule la connexité et la bornitude servent.
* **Dirichlet sur le disque avec donnée $\cos2\theta$.** On cherche $h$ continue sur $\bar D(0,1)$, harmonique sur $D(0,1)$, avec $h(e^{i\theta}) = \cos2\theta$. La fonction $h = \Re(z^2) = r^2\cos2\theta = x^2-y^2$ convient, et c'est la seule. Plus généralement la donnée au bord $\sum_n(a_n\cos n\theta+b_n\sin n\theta)$ (somme finie) a pour unique solution $\sum_n r^n(a_n\cos n\theta+b_n\sin n\theta) = \Re\sum_n(a_n-ib_n)z^n$.
* **Contre-exemple non borné.** Sur $H$, les fonctions $0$, $y$, $2y$, $y+\Im(z^3) = y+3x^2y-y^3$ sont toutes harmoniques, continues sur $\bar H$ et nulles sur $\R$ : aucune unicité sans hypothèse de croissance. Avec « $h$ bornée », seule $0$ subsiste (résultat admis par le poly, p. 82).

## Pièges

* > ⚠️ Deux hypothèses à ne jamais oublier : $\Omega$ **borné** (sinon $y$ sur $H$) et $h$ **continue jusqu'au bord** (sinon $\Re\frac{1+z}{1-z}$ sur $D$). Le principe du maximum seul (sur $\Omega$ ouvert) ne parle que de maxima **intérieurs** ; c'est la compacité de $\bar\Omega$ qui fait le lien avec le bord.
* L'énoncé donne l'**unicité**, pas l'existence : le problème de Dirichlet a une solution sur tout ouvert borné « raisonnable » (disque, couronne), mais ce n'est pas démontré dans le cours ; en pratique on **exhibe** une solution (souvent via une transformation conforme, [[ch04-reduction-demi-plan]]) et le corollaire garantit qu'il n'y en a pas d'autre.
* Pour $h$ à valeurs complexes, « $\min\le h\le\max$ » n'a pas de sens ; seule l'unicité se transfère, en séparant $\Re$ et $\Im$.
* Ne pas confondre avec [[ch01-maximum-sur-le-bord]] (version holomorphe, pour $|f|$) : ici pas de valeur absolue, et on obtient aussi le **minimum** au bord, ce qui est faux pour $|f|$ ($f = z$ sur $D$ : $\min|f| = 0$ au centre).
* Les conditions au bord de type **Neumann** (dérivée normale nulle, § IV.4.1) ne relèvent pas directement de cet énoncé : l'unicité n'y vaut qu'à constante additive près, et la preuve est différente.
