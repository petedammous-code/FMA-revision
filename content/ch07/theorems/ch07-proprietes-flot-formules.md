---
id: ch07-proprietes-flot-formules
type: proposition
chapter: 7
title: Résumé des propriétés du flot global $F(s,t,x)$
ref: Formules (VII.3.3), (VII.3.4), (VII.3.5)
page: 136
importance: 2
depends: [ch07-flot-local-equation, ch07-flot-inverse, ch07-flot-global-def, ch07-courbe-integrale-maximale-def, ch07-unicite-globale, ch07-composition-flot]
tags: [flot, flot-global, formulaire, flot-inverse, equation-du-flot]
---
## Intuition

> 💡 Trois règles à connaître par cœur pour manipuler le flot $F(s,t,x)$ = « position à l'instant $t$ de la particule qui était en $x$ à l'instant $s$ » ([[ch07-flot-global-def]]) :
> 1. la particule **avance à la vitesse du champ** : $\partial_tF=X(t,F)$ ;
> 2. **ne pas bouger dans le temps, c'est ne pas bouger** : $F(t,t,x)=x$ ;
> 3. **on peut remonter le temps** : si l'on part de $x$ à l'instant $s$ pour arriver en $y$ à l'instant $t$, alors partir de $y$ à l'instant $t$ et suivre le champ jusqu'à l'instant $s$ ramène en $x$.

La troisième règle dit que $x\mapsto F(s,t,x)$ est une **bijection**, d'inverse $y\mapsto F(t,s,y)$ : un flot ne perd pas d'information. C'est l'outil de base des exercices du type « résoudre une équation de transport » ($f(t,x)=f_0(F(t,0,x))$) ou « dériver $\det d(F_t)_x$ ».

## Énoncé

**Proposition (poly, Formules (VII.3.3), (VII.3.4), (VII.3.5), p. 136).** Soit $U$ un ouvert d'un espace de Banach $E$ et $X : I\times U\to E$ un champ de vecteurs dépendant du temps, localement lipschitzien en la seconde variable. Soit $F : D\to U$ son flot global, de domaine $D=\{(s,t,x)\in I\times I\times U\ |\ t\in J_s(x)\}$ ([[ch07-flot-global-def]]). Alors :

* pour tout $(s,t,x)\in D$, la dérivée partielle $\frac{\partial F}{\partial t}(s,t,x)$ existe et
$$
\text{(VII.3.3)}\qquad\frac{\partial F}{\partial t}(s,t,x)=X\big(t,F(s,t,x)\big)\ ;
$$
* pour tout $(t,x)\in I\times U$, on a $(t,t,x)\in D$ et
$$
\text{(VII.3.4)}\qquad F(t,t,x)=x\ ;
$$
* pour tout $(s,t,x)\in D$, on a $\big(t,s,F(s,t,x)\big)\in D$ et
$$
\text{(VII.3.5)}\qquad F\big(t,s,F(s,t,x)\big)=x.
$$

Autrement dit (poly, Corollaire VII.3.8, p. 135) : pour $s,t\in I$ et $x,y\in U$, $\ (s,t,x)\in D$ et $F(s,t,x)=y$ $\iff$ $(t,s,y)\in D$ et $F(t,s,y)=x$.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Sans elle, le flot global n'est pas défini : il faut l'unicité globale ([[ch07-unicite-globale]]) pour parler de **la** courbe intégrale maximale $\alpha_{s,x}$ ([[ch07-courbe-integrale-maximale-def]]) et poser $F(s,t,x)=\alpha_{s,x}(t)$. C'est aussi l'unicité qui donne (VII.3.5).

**Si on la retire.** Pour $X(t,x)=2\abs x^{1/2}$ sur $I=U=\R$, choisissons « à la main » une solution pour chaque condition initiale, et appelons $G(s,t,x)$ sa valeur en $t$. Rien n'empêche de choisir $G(0,t,0)=0$ (solution nulle) et, pour la condition initiale $(1,0)$, la courbe $\beta(t)=-(1-t)^2$ pour $t<1$, $\beta(t)=0$ pour $t\ge1$ (elle est $C^1$ et $\beta'(t)=2(1-t)=2\abs{\beta(t)}^{1/2}$ pour $t<1$). Alors $G\big(1,0,G(0,1,0)\big)=G(1,0,0)=\beta(0)=-1\neq0$ : (VII.3.5) est fausse.

### H2 — $(s,t,x)\in D$

**Rôle.** Les formules n'ont de sens que si la particule partie de $x$ à l'instant $s$ existe encore à l'instant $t$, i.e. $t\in J_s(x)$.

**Si on l'oublie.** Pour $X(t,x)=x^2$, l'expression algébrique $\frac{x}{1-x(t-s)}$ donne « $F(0,2,1)=-1$ », mais $(0,2,1)\notin D$ car $J_0(1)=\,]-\infty,1[$ : la particule partie de $1$ à l'instant $0$ a explosé en $t=1$ et n'est nulle part à l'instant $2$. La solution de condition initiale $(2,-1)$, elle, existe bien ($J_2(-1)=\,]1,+\infty[$) mais ne revient jamais à l'instant $0$ : $(2,0,-1)\notin D$. Les formules appliquées hors de $D$ mènent à des absurdités.

## Idée de la preuve

(VII.3.3) et (VII.3.4) sont la définition de la courbe intégrale maximale $t\mapsto F(s,t,x)$ de condition initiale $(s,x)$. Pour (VII.3.5), la courbe maximale issue de $(s,x)$ passe par $y=F(s,t,x)$ à l'instant $t$ : c'est donc aussi (par unicité et maximalité) la courbe maximale issue de $(t,y)$, qui vaut $x$ à l'instant $s$.

## Preuve

Pour $(s,x)\in I\times U$, notons $\alpha_{s,x} : J_s(x)\to U$ la courbe intégrale maximale de condition initiale $(s,x)$ ([[ch07-courbe-integrale-maximale-def]]), de sorte que $F(s,t,x)=\alpha_{s,x}(t)$ pour $t\in J_s(x)$.

**(VII.3.3).** Soit $(s,t,x)\in D$. L'application $u\mapsto F(s,u,x)=\alpha_{s,x}(u)$ est définie sur l'intervalle ouvert $J_s(x)\ni t$ et c'est une courbe intégrale de $X$ ; sa dérivée en $t$, qui est par définition $\frac{\partial F}{\partial t}(s,t,x)$, vaut $\alpha_{s,x}'(t)=X(t,\alpha_{s,x}(t))=X(t,F(s,t,x))$. (C'est l'analogue global de [[ch07-flot-local-equation]].)

**(VII.3.4).** Soit $(t,x)\in I\times U$. Par définition, $t\in J_t(x)$ (l'intervalle de la courbe maximale de condition initiale $(t,x)$ contient l'instant initial $t$), donc $(t,t,x)\in D$ et $F(t,t,x)=\alpha_{t,x}(t)=x$.

**(VII.3.5).** Soit $(s,t,x)\in D$ et $y=F(s,t,x)=\alpha_{s,x}(t)$. La courbe $\alpha_{s,x} : J_s(x)\to U$ est une courbe intégrale de $X$, définie sur un intervalle ouvert contenant $t$, et elle vaut $y$ en $t$ : c'est une courbe intégrale de condition initiale $(t,y)$. Par définition de $J_t(y)$ comme réunion de tous les intervalles de telles courbes, $J_s(x)\subset J_t(y)$, et par unicité globale ([[ch07-unicite-globale]]), $\alpha_{t,y}=\alpha_{s,x}$ sur $J_s(x)$. Comme $s\in J_s(x)$, on a $s\in J_t(y)$, c'est-à-dire $(t,s,y)\in D$, et
$$
F(t,s,y)=\alpha_{t,y}(s)=\alpha_{s,x}(s)=x.
$$
$\square$

*Variante du poly :* le poly obtient (VII.3.5) comme Corollaire VII.3.8 ([[ch07-flot-inverse]]) de la formule de composition $F(t_0,s+t,x)=F(s,s+t,F(t_0,s,x))$ ([[ch07-composition-flot]]), en remplaçant $t_0$ par $s$, $s$ par $t$ et $t$ par $s-t$ : $F(s,s,x)=F(t,s,F(s,t,x))$, puis en utilisant (VII.3.4). La preuve ci-dessus est le même argument d'unicité, écrit directement.

*Remarque.* En appliquant le raisonnement dans les deux sens, on obtient même $J_t(y)=J_s(x)$ et $\alpha_{t,y}=\alpha_{s,x}$ : deux points d'une même courbe maximale ont la même courbe maximale.

## Preuve à trous

(VII.3.3) et (VII.3.4) : $u\mapsto F(s,u,x)$ est <trou indice="définition du flot global">la courbe intégrale maximale $\alpha_{s,x}$ de condition initiale $(s,x)$</trou> ; sa dérivée en $t$ est $X(t,F(s,t,x))$ et sa valeur en $s$ est $x$.

(VII.3.5) : soit $y=F(s,t,x)$. La courbe $\alpha_{s,x}$ est une courbe intégrale <trou indice="quelle condition initiale vérifie-t-elle en l'instant $t$ ?">de condition initiale $(t,y)$, définie sur l'intervalle ouvert $J_s(x)\ni t$</trou>. Donc <trou indice="définition de $J_t(y)$ + unicité globale">$J_s(x)\subset J_t(y)$ et $\alpha_{t,y}=\alpha_{s,x}$ sur $J_s(x)$</trou>. Comme $s\in J_s(x)$, on obtient $(t,s,y)\in D$ et <trou>$F(t,s,y)=\alpha_{t,y}(s)=\alpha_{s,x}(s)=x$</trou>. $\square$

## Exemples

**Exemple 1 (champ linéaire non autonome).** $I=U=\R$, $X(t,x)=2tx$. La courbe maximale de condition initiale $(s,x)$ est $t\mapsto x\,e^{t^2-s^2}$, définie sur $\R$ ; donc $D=\R^3$ et $F(s,t,x)=x\,e^{t^2-s^2}$. Vérifications :
* (VII.3.3) : $\partial_tF=2t\,x\,e^{t^2-s^2}=2t\,F=X(t,F)$ ;
* (VII.3.4) : $F(t,t,x)=x\,e^0=x$ ;
* (VII.3.5) : $F\big(t,s,x\,e^{t^2-s^2}\big)=x\,e^{t^2-s^2}\,e^{s^2-t^2}=x$.

**Exemple 2 (champ quadratique, domaine non trivial).** $X(t,x)=x^2$ sur $\R\times\R$. La courbe maximale de condition initiale $(s,x)$ est $t\mapsto\frac{x}{1-x(t-s)}$ sur l'intervalle des $t$ où $1-x(t-s)>0$ (intervalle qui contient $s$, et au bord duquel la solution explose si $x\ne0$). Donc
$$
D=\{(s,t,x)\in\R^3\ :\ 1-x(t-s)>0\},\qquad F(s,t,x)=\frac{x}{1-x(t-s)}.
$$
Vérifions (VII.3.5) : soit $(s,t,x)\in D$, $u=1-x(t-s)>0$, $y=x/u$. Alors $1-y(s-t)=1+\frac{x(t-s)}{u}=\frac{u+x(t-s)}{u}=\frac1u>0$, donc $(t,s,y)\in D$, et $F(t,s,y)=\frac{y}{1/u}=y\,u=x$.

**Exemple 3 (transport).** Pour $X(t,x)=2tx$, la fonction $f(t,x)=f_0\big(F(t,0,x)\big)=f_0\big(x\,e^{-t^2}\big)$ est constante le long des trajectoires : $f\big(t,F(0,t,x_0)\big)=f_0\big(F(t,0,F(0,t,x_0))\big)=f_0(x_0)$ par (VII.3.5). Elle résout l'équation de transport $\partial_tf+2tx\,\partial_xf=0$, $f(0,\cdot)=f_0$ (vérification pour $f_0$ de classe $C^1$ : $\partial_tf=-2tx\,e^{-t^2}f_0'(xe^{-t^2})$ et $2tx\,\partial_xf=2tx\,e^{-t^2}f_0'(xe^{-t^2})$).

## Pièges

* > ⚠️ **Ordre des variables** : $F(s,t,x)$ — instant initial $s$, instant final $t$, point initial $x$. La dérivée (VII.3.3) porte sur la **deuxième** variable. La dérivée par rapport à la première n'est pas $X(s,\dots)$ : quand $F$ est $C^1$, $\frac{\partial F}{\partial s}(s,t,x)=-\frac{\partial F}{\partial x}(s,t,x)\cdot X(s,x)$ (en dérivant $F(s,t,x)=F(s+h,t,F(s,s+h,x))$ en $h=0$, [[ch07-composition-flot]]).
* > ⚠️ Toujours vérifier l'appartenance au domaine $D$ (H2) : une formule explicite de $F$ peut avoir un sens algébrique hors de $D$.
* (VII.3.5) dit $F(t,s,\cdot)\circ F(s,t,\cdot)=\id$ sur $\{x : (s,t,x)\in D\}$, et non $F(s,t,\cdot)\circ F(s,t,\cdot)=\id$.
* Dans le cas autonome, avec la notation $F_t(x)=F(0,t,x)$, (VII.3.5) devient $F_{-t}(F_t(x))=x$ ([[ch07-groupe-un-parametre]]) ; mais pour un champ **dépendant du temps**, $F(s,t,x)\ne F(0,t-s,x)$ en général.
