---
id: rfx-edo-etude-qualitative
type: reflexe
situation: Étudier qualitativement une EDO autonome sans la résoudre (intégrale première, ensemble invariant, équilibres, orbites périodiques, stabilité, allure du portrait de phase)
chapters: [7, 8, 9]
---
## Situation

On a un champ autonome $X:U\to\R^N$ (souvent $N=2$ : $x'=f(x,y)$, $y'=g(x,y)$, ou une équation $x''=F(x,x')$) qu'on ne sait pas intégrer. L'énoncé demande : « montrer que $H$ est constante le long des trajectoires », « montrer que le quadrant (le disque, la bande) est invariant », « déterminer les points d'équilibre », « montrer que les solutions sont périodiques », « tracer l'allure des trajectoires », « étudier la stabilité de l'équilibre », « montrer que $\lim_{t\to+\infty}\alpha(t)$ existe ». L'énoncé définit souvent lui-même *intégrale première* ou *stable* : utiliser **sa** définition.

## Options

### [x] Intégrale première (dérivée le long des trajectoires) — [[ch09-ex-champs-tangents-physique]]
**Quand.** On dispose (ou on devine) d'une fonction $H$ de classe $C^1$ sur $U$ telle que $dH_x(X(x))=\langle\nabla H(x),X(x)\rangle=0$ pour tout $x$. Alors $t\mapsto H(\alpha(t))$ a une dérivée nulle sur l'intervalle $J$, donc est constante : chaque trajectoire est dans une ligne de niveau. Cas typiques : système hamiltonien $q'=\partial_pH$, $p'=-\partial_qH$ (poly, Exemples IX.8.2, p. 172) ; $x''=-V'(x)$ avec $H=\frac12x'^2+V(x)$ ([[ch08-energie-conservee]]) ; symétries continues via Noether ([[ch08-noether]]) ; équations séparables $x'=f(x)g(y)$, $y'=h(x)k(y)$ où l'on cherche $H=A(x)+B(y)$.
**Justification.** Règle de la chaîne : $\frac{d}{dt}H(\alpha(t))=dH_{\alpha(t)}(\alpha'(t))=dH_{\alpha(t)}(X(\alpha(t)))$.
**Pièges.** Une constante n'est pas une intégrale première intéressante : il faut $H$ non constante sur tout ouvert. Les lignes de niveau peuvent contenir plusieurs trajectoires (équilibres, séparatrices) : $H$ constante ne veut pas dire « la trajectoire parcourt tout le niveau ».

### [x] Équilibres et unicité (les trajectoires ne se croisent pas) — [[ch07-unicite-globale]]
**Quand.** $X(x^*)=0$ : la constante $x^*$ est une solution. Par unicité, une solution non constante **n'atteint jamais** $x^*$ en temps fini, et deux trajectoires distinctes sont disjointes (cas autonome, via [[ch07-translation-temps-autonome]]). Pour l'invariance : si un ensemble $A$ (axe, droite, cercle) est une réunion de trajectoires, alors une solution issue de $U\setminus A$ ne touche jamais $A$ ; avec la continuité (valeurs intermédiaires), elle reste dans la composante connexe de départ.
**Justification.** Si $\alpha(t_1)=\beta(s_1)$, les courbes $t\mapsto\alpha(t+t_1)$ et $t\mapsto\beta(t+s_1)$ ont même condition initiale, donc coïncident.
**Pièges.** Exige Cauchy–Lipschitz (sinon les solutions de Peano se croisent). Une solution peut **tendre** vers un équilibre quand $t\to\pm\infty$ (orbite homocline) : seul l'**atteindre** en temps fini est exclu.

### [x] Périodicité par retour au point de départ — [[ch07-translation-temps-autonome]]
**Quand.** Champ autonome et $\alpha(t_0+T)=\alpha(t_0)$ pour un $T>0$. Alors $\beta(t)=\alpha(t+T)$ est la courbe intégrale maximale de même condition initiale (poly, Théorème VII.3.5, p. 135) : $J=J-T$, donc $J=\R$, et $\alpha$ est $T$-périodique. Pour obtenir le retour : sur une ligne de niveau compacte **sans équilibre**, montrer qu'un angle polaire $\theta$ autour d'un point intérieur vérifie $\theta'\ge m>0$ (fonction continue strictement positive sur un compact) et que chaque demi-droite issue de ce point coupe le niveau en un seul point.
**Justification.** Unicité de la courbe intégrale maximale et invariance par translation du temps.
**Pièges.** « La trajectoire est une courbe fermée » se démontre (retour effectif en temps fini), ce n'est pas un dessin. Le lemme des bouts est souvent à appliquer **avant**, pour savoir que la solution vit assez longtemps ([[rfx-edo-globale-explosion]]).

### [x] Fonction de Lyapunov et stabilité d'un équilibre — [[ch07-lemme-des-bouts]]
**Quand.** Équilibre $x^*$ et fonction $V$ de classe $C^1$ près de $x^*$ avec $V(x^*)=0$, $V>0$ sur $\bar B(x^*,r)\setminus\{x^*\}$ et $dV_x(X(x))\le0$ (une intégrale première admettant un **minimum local strict** en $x^*$ convient). Alors $x^*$ est stable : pour $\eps\le r$, $m=\min_{\norm{x-x^*}=\eps}V>0$ (compacité de la sphère) ; par continuité de $V$ en $x^*$, il existe $\delta\in\,]0,\eps[$ tel que $V<m$ sur $B(x^*,\delta)$ ; si $x_0\in B(x^*,\delta)$, alors $V(\alpha(t))\le V(x_0)<m$ pour $t\ge0$ tant que $\alpha$ reste dans $\bar B(x^*,r)$, donc $\alpha$ ne peut pas atteindre la sphère de rayon $\eps$ (valeurs intermédiaires sur $\norm{\alpha(t)-x^*}$), reste dans $\bar B(x^*,\eps)$ compact, et le lemme des bouts donne l'existence sur $[0,+\infty[$.
**Justification.** Le confinement dans un compact est la seule chose qui manque : $V$ le fournit.
**Pièges.** Le poly ne contient pas de théorème de stabilité : il faut **rédiger** l'argument ci-dessus. Un point selle de $H$ (ex. $H=x^2-y^2$ près de $0$) ne donne aucune stabilité.

### [ ] Dépendance continue par rapport aux conditions initiales — [[ch07-cauchy-lipschitz-parametres]]
**Pourquoi ce n'est pas l'outil ici.** La continuité du flot dit que deux solutions proches au départ restent proches **sur un intervalle de temps compact fixé** ; la stabilité porte sur $t\in[0,+\infty[$ entier. Exemple : $x'=x$, les solutions issues de $0$ et de $\eps$ s'écartent comme $\eps e^t$.
**Quand il le serait.** Pour montrer qu'un ensemble de conditions initiales est **ouvert** (« l'ensemble des $x_0$ dont la solution entre dans $W$ avant le temps $T$ »), ou pour comparer deux trajectoires sur $[0,T]$ ([[rfx-edo-dependance-conditions-initiales]]).

## Démarche

1. **Équilibres** : résoudre $X(x)=0$. Si l'énoncé demande leur nature, regarder si une intégrale première a un minimum ou maximum local strict en l'équilibre (centre, stable par l'argument de Lyapunov) ; si elle n'a qu'un col, la méthode ne conclut pas (l'instabilité se démontre à part, par exemple en exhibant des solutions issues de points arbitrairement proches qui s'éloignent).
2. **Ensembles invariants** : chercher les droites ou courbes formées de trajectoires (axes où une composante du champ s'annule, cercles où le champ est tangent : [[rfx-edo-champ-tangent]]). Si l'ensemble $A$ est réunion de trajectoires, alors son complémentaire aussi, et une solution reste dans sa composante connexe.
3. **Intégrale première** : si le champ est hamiltonien, mécanique, ou séparable, alors chercher $H$ et vérifier $\langle\nabla H,X\rangle=0$ par un calcul explicite.
4. **Globalité** : si les niveaux de $H$ (ou les sous-niveaux de $V$) sont compacts dans $U$, alors lemme des bouts.
5. **Périodicité** : si la trajectoire est sur un niveau compact sans équilibre, alors retour en temps fini (angle monotone), puis translation en temps : $\alpha$ périodique.
6. **Comportement à l'infini** : si une quantité scalaire $h(\alpha(t))$ est monotone et bornée, alors elle converge ; identifier la limite (souvent un équilibre, via $h'\to0$).
7. **Dessin** : le faire (l'énoncé le demande souvent) en indiquant équilibres, niveaux de $H$ et sens de parcours (signe d'une composante de $X$ sur un axe).

## Pièges

* Écrire « $H$ est conservée » sans faire le calcul de $\langle\nabla H,X\rangle$.
* Confondre « la trajectoire est contenue dans la ligne de niveau » et « la trajectoire est toute la ligne de niveau » (il peut y avoir plusieurs trajectoires, ou des équilibres, sur un même niveau).
* Affirmer qu'une solution atteint un équilibre en temps fini : impossible par unicité.
* Oublier que l'intégrale première peut n'être définie que sur un ouvert (logarithmes) : vérifier d'abord que la solution y reste.
* Le linéarisé $dX_{x^*}$ ne conclut rien quand ses valeurs propres sont imaginaires pures (centre) : il faut une intégrale première.

## Mini-exemple

*Énoncé.* Étudier $x'=x(1-y)$, $y'=y(x-1)$ pour $(x_0,y_0)\in Q=\,]0,+\infty[^2$.

*Solution.* Champ polynomial, donc Cauchy–Lipschitz sur $\R^2$. Sur l'axe $x=0$, la solution est $(0,y_0e^{-t})$ ; sur $y=0$, $(x_0e^t,0)$ : les axes sont réunions de trajectoires, donc une solution issue de $Q$ ne les touche jamais et reste dans $Q$ (valeurs intermédiaires). Sur $Q$, $H(x,y)=x-\ln x+y-\ln y$ vérifie $\frac{d}{dt}H=(1-\frac1x)x(1-y)+(1-\frac1y)y(x-1)=(x-1)(1-y)+(y-1)(x-1)=0$. Comme $s-\ln s\ge1$ tend vers $+\infty$ en $0^+$ et en $+\infty$, $\{H\le c\}$ est un compact de $Q$ : $J=\R$ (lemme des bouts). L'unique équilibre de $Q$ est $(1,1)$, minimum strict de $H$ ($H=2$), donc stable. Pour $c>2$, avec $u=x-1$, $v=y-1$, l'angle polaire autour de $(1,1)$ vérifie $\theta'=\frac{u^2y+v^2x}{u^2+v^2}>0$, minoré sur le compact $\{H=c\}$, et $H$ croît strictement le long de chaque demi-droite issue de $(1,1)$ : après un tour, $\alpha(T)=\alpha(0)$, et toutes les solutions non constantes sont **périodiques**.
