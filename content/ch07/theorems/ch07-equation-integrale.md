---
id: ch07-equation-integrale
type: proposition
chapter: 7
title: Équivalence entre le problème de Cauchy et l'équation intégrale
ref: Formule (VII.2.2)
page: 130
importance: 2
depends: [ch05-primitive-integrale, ch05-integrale-fonctions-reglees, ch05-accroissements-finis-borne]
tags: [equation-integrale, picard, point-fixe, theoreme-fondamental, cauchy-lipschitz]
---
## Intuition

> 💡 Une équation différentielle dit « la vitesse à l'instant $t$ vaut $X(t,\alpha(t))$ ». Intégrer cette phrase entre l'instant initial $t_0$ et $t$ donne « la position à l'instant $t$ est la position initiale $x$ plus le cumul des vitesses ». La seconde formulation a deux avantages décisifs : elle contient la condition initiale, et elle ne demande à l'inconnue que d'être **continue** — c'est le bon cadre pour chercher la solution comme point fixe d'une application sur un espace de fonctions continues.

Ici $X : I\times U\to E$ est un champ de vecteurs dépendant du temps ([[ch07-champ-vecteurs-courbe-integrale-def]]) : $I$ intervalle ouvert de $\R$, $U$ ouvert d'un espace de Banach $E$, $X$ continue. Le **problème de Cauchy** (VII.2.1) de condition initiale $(t_0,x)\in I\times U$ consiste à trouver $\alpha$ de classe $C^1$ avec $\alpha'(t)=X(t,\alpha(t))$ et $\alpha(t_0)=x$. L'intégrale d'une fonction continue à valeurs dans l'espace de Banach $E$ est celle de [[ch05-integrale-fonctions-reglees]] ; elle vérifie $\big\lVert\int_a^b f\big\rVert\le(b-a)\sup_{[a;b]}\norm f$.

## Énoncé

**Proposition (poly, formule (VII.2.2), p. 130).** Soient $X : I\times U\to E$ un champ de vecteurs dépendant du temps (donc continu), $(t_0,x)\in I\times U$ et $J\subset I$ un intervalle d'intérieur non vide contenant $t_0$. Pour une application **continue** $\alpha : J\to U$, les deux propriétés suivantes sont équivalentes :

1. $\alpha$ est de classe $C^1$ sur $J$ et résout le problème de Cauchy (VII.2.1) :
$$
\begin{cases}\alpha'(t)=X(t,\alpha(t))\quad\text{pour tout } t\in J,\\ \alpha(t_0)=x\,;\end{cases}
$$
2. pour tout $t\in J$,
$$
\text{(VII.2.2)}\qquad \alpha(t)=x+\int_{t_0}^tX(s,\alpha(s))\,ds .
$$

Autrement dit, les solutions de (VII.2.1) définies sur $J$ sont exactement les **points fixes** de l'opérateur (dit *de Picard*)
$$
S_{t_0,x} : \varphi\longmapsto\Big(t\mapsto x+\int_{t_0}^tX(s,\varphi(s))\,ds\Big),
$$
défini sur l'ensemble $C^0(J,U)$ des applications continues de $J$ dans $U$.

(Si $J$ a des extrémités, « de classe $C^1$ sur $J$ » signifie : dérivable en tout point de $J$, à droite ou à gauche aux extrémités, de dérivée continue. Pour $t<t_0$, $\int_{t_0}^t=-\int_t^{t_0}$.)

## Hypothèses

### H1 — $X$ est continue

**Rôle.** Si $\alpha$ est continue, $s\mapsto X(s,\alpha(s))$ est continue, donc intégrable au sens de [[ch05-integrale-fonctions-reglees]], et $t\mapsto\int_{t_0}^tX(s,\alpha(s))\,ds$ est de classe $C^1$ de dérivée $X(t,\alpha(t))$ ([[ch05-primitive-integrale]]). C'est ce qui donne le sens $2\Rightarrow1$ et la régularité automatique de la solution.

**Si on la retire.** Le sens $2\Rightarrow1$ tombe. Sur $E=\R$, prenons $X(t,y)=H(t)$ avec $H(t)=0$ si $t<0$ et $H(t)=1$ si $t\ge0$, $(t_0,x)=(0,0)$. L'équation intégrale impose $\alpha(t)=\int_0^tH(s)\,ds=\max(t,0)$ : cette fonction est continue, vérifie (VII.2.2), mais n'est pas dérivable en $0$. Et le problème de Cauchy $\alpha'=H(t)$, $\alpha(0)=0$ n'a **aucune** solution $C^1$ sur un intervalle ouvert contenant $0$ : on aurait $\alpha'=0$ à gauche de $0$ et $\alpha'=1$ à droite, contredisant la continuité de $\alpha'$. (Le sens $1\Rightarrow2$ reste vrai sans continuité de $X$ : si $\alpha$ est $C^1$, $\alpha'=X(\cdot,\alpha(\cdot))$ est continue de toute façon.)

### H2 — $E$ est un espace de Banach

**Rôle.** L'intégrale d'une fonction continue $[a;b]\to E$ est construite comme limite de sommes de fonctions en escalier ; la complétude de $E$ est indispensable à cette étape ([[ch05-integrale-fonctions-reglees]]).

**Si on la retire.** Hypothèse structurelle de tout le chapitre : dans un espace normé non complet, les sommes de Riemann d'une fonction continue forment une suite de Cauchy qui peut ne pas converger, et le membre de droite de (VII.2.2) n'est pas défini. (Exemple : dans l'espace $E$ des suites réelles à support fini, muni de $\norm\cdot_\infty$, la fonction $f(s)=\sum_n\varphi_n(s)\,e_n$, où les $\varphi_n\ge0$ sont des bosses continues de hauteur $1/n$ à supports disjoints dans $[1/(n+1)\,;1/n]$, est continue sur $[0;1]$, mais ses sommes de Riemann convergent dans $\ell^\infty$ vers la suite $(\int_0^1\varphi_n)_n$, à support infini, donc ne convergent pas dans $E$.)

### H3 — $\alpha$ continue à valeurs dans $U$, sur un intervalle $J\ni t_0$

**Rôle.** $X(s,\alpha(s))$ n'a de sens que si $\alpha(s)\in U$ ; $[t_0;t]\subset J$ est nécessaire pour écrire l'intégrale ; la connexité de $J$ sert dans $1\Rightarrow2$ (une fonction de dérivée nulle sur un intervalle est constante).

**Si on la retire.** Hypothèse de structure : hors d'un intervalle contenant $t_0$ l'intégrale $\int_{t_0}^t$ n'est pas définie, et une fonction de dérivée nulle sur une réunion de deux intervalles disjoints peut prendre deux valeurs. Dans la pratique, c'est le point fixe qui doit **rester dans $U$** : c'est tout l'objet du lemme [[ch07-lemme-operateur-integral]] (boule $\bar B(x_0,2\rho)\subset U$).

## Idée de la preuve

Théorème fondamental de l'analyse dans les deux sens : dériver (VII.2.2) redonne l'équation et $\alpha(t_0)=x$ ; intégrer l'équation entre $t_0$ et $t$ redonne (VII.2.2), parce que deux fonctions de même dérivée sur un intervalle diffèrent d'une constante.

## Preuve

Posons, pour $\alpha : J\to U$ continue, $g(s)=X(s,\alpha(s))$ : c'est une application continue de $J$ dans $E$, composée de $s\mapsto(s,\alpha(s))$ et de $X$. Pour $t\in J$, le segment d'extrémités $t_0$ et $t$ est contenu dans l'intervalle $J$, donc $G(t)=\int_{t_0}^tg(s)\,ds\in E$ est bien défini ([[ch05-integrale-fonctions-reglees]]), et d'après [[ch05-primitive-integrale]] (appliqué sur chaque segment $[a;b]\subset J$ contenant $t_0$), $G$ est de classe $C^1$ sur $J$ avec $G'(t)=g(t)=X(t,\alpha(t))$. Noter que $G(t_0)=0$.

**$1\Rightarrow2$.** Supposons $\alpha$ de classe $C^1$ avec $\alpha'=g$ sur $J$ et $\alpha(t_0)=x$. La fonction $D=\alpha-G$ est de classe $C^1$ sur $J$, de dérivée $D'=\alpha'-G'=g-g=0$. Pour $t\in J$, l'inégalité des accroissements finis à borne constante ([[ch05-accroissements-finis-borne]], avec $k=0$) sur le segment d'extrémités $t_0$ et $t$ donne $\norm{D(t)-D(t_0)}\le0$, donc $D(t)=D(t_0)=\alpha(t_0)-G(t_0)=x$. Ainsi $\alpha(t)=x+G(t)$ pour tout $t\in J$ : c'est (VII.2.2).

**$2\Rightarrow1$.** Supposons $\alpha$ continue et vérifiant (VII.2.2), c'est-à-dire $\alpha=x+G$. Comme $G$ est de classe $C^1$, $\alpha$ l'est aussi, avec $\alpha'(t)=G'(t)=X(t,\alpha(t))$ pour tout $t\in J$ ; et $\alpha(t_0)=x+G(t_0)=x$. Donc $\alpha$ résout (VII.2.1).

**Reformulation en point fixe.** Pour $\varphi\in C^0(J,U)$, $S_{t_0,x}(\varphi)$ est la fonction $t\mapsto x+\int_{t_0}^tX(s,\varphi(s))\,ds$, continue (et même $C^1$) sur $J$ à valeurs dans $E$. L'égalité $S_{t_0,x}(\alpha)=\alpha$ est exactement (VII.2.2) ; d'après ce qui précède, elle équivaut à « $\alpha$ est solution de (VII.2.1) sur $J$ ». $\square$

*Complément (régularité automatique).* Si $X$ est de classe $C^p$, toute solution $\alpha$ est de classe $C^{p+1}$ : par récurrence, si $\alpha$ est $C^j$ avec $j\le p$, alors $\alpha'=X(\cdot,\alpha(\cdot))$ est $C^j$ (composée d'applications $C^j$, [[ch05-composition-differentielles]]), donc $\alpha$ est $C^{j+1}$. Ce « bootstrap » est utilisé dans la preuve de [[ch07-cauchy-lipschitz-parametres]].

## Preuve à trous

Soit $g(s)=X(s,\alpha(s))$, continue sur $J$ car <trou indice="pourquoi la composée est-elle continue ?">$X$ est continue et $\alpha$ est continue</trou>. Posons $G(t)=\int_{t_0}^tg(s)\,ds$ ; d'après le théorème de dérivation d'une intégrale à borne variable, <trou indice="régularité et dérivée de $G$">$G$ est de classe $C^1$ sur $J$, $G'=g$ et $G(t_0)=0$</trou>.

$1\Rightarrow2$ : si $\alpha'=g$ et $\alpha(t_0)=x$, la fonction $D=\alpha-G$ vérifie <trou indice="que vaut $D'$ ? conclure sur un intervalle">$D'=0$ sur l'intervalle $J$, donc $D$ est constante (accroissements finis), égale à $D(t_0)=x$</trou>, d'où $\alpha=x+G$.

$2\Rightarrow1$ : si $\alpha=x+G$ avec $\alpha$ continue, alors <trou indice="transférer la régularité de $G$ à $\alpha$">$\alpha$ est $C^1$ avec $\alpha'=G'=g=X(\cdot,\alpha(\cdot))$, et $\alpha(t_0)=x+G(t_0)=x$</trou>. Les solutions sont donc les points fixes de $S_{t_0,x}$. $\square$

## Exemples

1. **Itérées de Picard pour $\alpha'=\alpha$, $\alpha(0)=1$.** Ici $X(t,y)=y$, $S_{0,1}(\varphi)(t)=1+\int_0^t\varphi(s)\,ds$. En partant de $\varphi_0\equiv1$ : $\varphi_1(t)=1+t$, $\varphi_2(t)=1+t+\frac{t^2}{2}$, et par récurrence $\varphi_n(t)=\sum_{k=0}^n\frac{t^k}{k!}$ (car $\int_0^t\frac{s^k}{k!}\,ds=\frac{t^{k+1}}{(k+1)!}$). La suite converge vers $e^t$, qui est bien un point fixe : $1+\int_0^te^s\,ds=1+(e^t-1)=e^t$. La proposition dit que $e^t$ est donc solution du problème de Cauchy — ce que l'on vérifie directement.

2. **L'équivalence vaut sans unicité (exemple de Peano).** $X(t,y)=2\abs y^{1/2}$ est continue sur $\R\times\R$, $(t_0,x)=(0,0)$. Les deux fonctions $\alpha_1=0$ et $\alpha_2(t)=\operatorname{signe}(t)\,t^2$ sont des points fixes de $S_{0,0}$ : pour $\alpha_2$, $\abs{\alpha_2(s)}^{1/2}=\abs s$ et $\int_0^t2\abs s\,ds=t\abs t=\operatorname{signe}(t)\,t^2$. Conformément à la proposition, ce sont deux solutions du problème de Cauchy ([[ch07-peano-non-unicite]]). L'équation intégrale n'apporte donc pas l'unicité : celle-ci viendra du caractère **contractant** de $S_{t_0,x}$ lorsque $X$ est lipschitzienne en la seconde variable ([[ch07-lemme-operateur-integral]], [[ch07-cauchy-lipschitz]]).

3. **Estimation a priori.** Si $\norm{X(s,y)}\le\ell$ pour tout $(s,y)$ d'une région contenant le graphe de $\alpha$, alors (VII.2.2) donne immédiatement, pour $t\in J$,
$$
\norm{\alpha(t)-x}=\Big\lVert\int_{t_0}^tX(s,\alpha(s))\,ds\Big\rVert\le\ell\,\abs{t-t_0}.
$$
C'est cette majoration qui, dans la preuve de [[ch07-cauchy-lipschitz]], empêche la solution de sortir de la boule $\bar B(x_0,2a)$ sur $[t_0-b\,;t_0+b]$ lorsque $b\ell<a$.

## Pièges

* > ⚠️ Seule la **continuité** de $X$ est nécessaire pour l'équivalence ; l'hypothèse lipschitzienne ne sert qu'à l'unicité (contraction de $S_{t_0,x}$).
* L'équation intégrale contient la **condition initiale** : la borne inférieure $t_0$ et la constante $x$ en font partie. Changer $(t_0,x)$ change l'opérateur $S_{t_0,x}$.
* Pour $t<t_0$ l'intégrale est orientée ; la majoration fait intervenir $\abs{t-t_0}$, jamais $t-t_0$.
* Une solution de (VII.2.2) n'est supposée que continue, mais elle est **automatiquement** $C^1$ ($C^{p+1}$ si $X$ est $C^p$) ; réciproquement une « solution » de l'équation différentielle est par définition de classe $C^1$ ([[ch07-champ-vecteurs-courbe-integrale-def]]), il n'y a pas de solution « faible » ici.
* $S_{t_0,x}(\varphi)$ est à valeurs dans $E$, pas forcément dans $U$ : pour que $S_{t_0,x}$ envoie un espace de fonctions dans lui-même, il faut contrôler $\norm{S_{t_0,x}(\varphi)(t)-x_0}$, d'où les boules $\bar B(x_0,\rho)\subset\bar B(x_0,2\rho)$ du lemme [[ch07-lemme-operateur-integral]].
