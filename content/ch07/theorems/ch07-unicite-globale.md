---
id: ch07-unicite-globale
type: proposition
chapter: 7
title: "Unicité globale : deux courbes intégrales de même condition initiale coïncident sur l'intersection de leurs domaines"
ref: Proposition VII.3.1
page: 134
importance: 3
depends: [ch07-existence-flot-local, ch07-champ-vecteurs-courbe-integrale-def, ch07-localement-lipschitzien-def]
tags: [unicite, courbe-integrale, connexite, cauchy-lipschitz]
---
## Intuition

> 💡 Le théorème de Cauchy-Lipschitz ne donne l'unicité que **pendant un petit moment** autour de l'instant initial. Mais deux trajectoires qui partent ensemble ne peuvent jamais se séparer : si elles se séparaient, il y aurait un **premier instant** de séparation, où elles seraient au même endroit au même moment ; et Cauchy-Lipschitz, appliqué **à partir de ce point**, dit qu'elles restent ensemble encore un peu. Contradiction.

Mathématiquement, ce « premier instant » est remplacé par un argument de **connexité** : l'ensemble des instants où les deux courbes coïncident est fermé (continuité), ouvert (unicité locale du flot local [[ch07-existence-flot-local]]) et non vide (condition initiale) dans l'intervalle $J_1\cap J_2$, qui est connexe ; il est donc égal à tout l'intervalle.

Rappel ([[ch07-champ-vecteurs-courbe-integrale-def]]) : une courbe intégrale de $X : I\times U\to E$ de condition initiale $(\tau_0,x_0)$ est une courbe $\alpha : J\to U$ de classe $C^1$ sur un intervalle **ouvert** $J\subset I$ contenant $\tau_0$, avec $\alpha'(t)=X(t,\alpha(t))$ sur $J$ et $\alpha(\tau_0)=x_0$.

## Énoncé

**Proposition (poly, Proposition VII.3.1, p. 134).** Soit $U$ un ouvert d'un espace de Banach $E$. Soit $X : I\times U\to E$ un champ de vecteurs dépendant du temps. Supposons que $X$ soit localement lipschitzien en la seconde variable, de sorte que le théorème VII.2.12 s'applique. Soient $(\tau_0,x_0)\in I\times U$ et $\alpha_1$ et $\alpha_2$, définies respectivement sur des intervalles ouverts $J_1$ et $J_2$ contenus dans $I$ et contenant $\tau_0$, des courbes intégrales de $X$ ayant même condition initiale $(\tau_0,x_0)$. Alors elles coïncident sur $J_1\cap J_2$.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** C'est ce qui permet d'appliquer le théorème d'existence et d'unicité du flot local ([[ch07-existence-flot-local]]) en **n'importe quel** point $(t_1,y)$ de la trajectoire, pour montrer que l'ensemble de coïncidence est ouvert.

**Si on la retire.** Pour $X(t,x)=2\abs x^{1/2}$ sur $I=U=\R$ (continu, non lipschitzien près de $0$), $\alpha_1=0$ et $\alpha_2(t)=\operatorname{signe}(t)\,t^2$, définies sur $J_1=J_2=\R$, sont des courbes intégrales de condition initiale $(0,0)$ ($\alpha_2'(t)=2\abs t=2\abs{\alpha_2(t)}^{1/2}$) qui ne coïncident en aucun $t\ne0$ ([[ch07-peano-non-unicite]]). On peut même les faire coïncider longtemps puis se séparer : $\alpha_3(t)=0$ pour $t\le1$, $\alpha_3(t)=(t-1)^2$ pour $t>1$, est aussi une courbe intégrale ($C^1$, de dérivée $2(t-1)=2\abs{\alpha_3}^{1/2}$ pour $t>1$) qui coïncide avec $\alpha_1$ sur $]-\infty,1]$ puis la quitte.

### H2 — $J_1$ et $J_2$ sont des intervalles (contenant $\tau_0$)

**Rôle.** $J_1\cap J_2$ est alors un intervalle ouvert non vide (il contient $\tau_0$), donc **connexe** : c'est ce qui permet de passer de « ouvert, fermé, non vide » à « tout ».

**Si on la retire.** Si l'on autorisait des domaines non connexes, la conclusion tomberait : avec $X=0$ sur $\R\times\R$ et $J_1=J_2=\,]-1,1[\,\cup\,]2,3[$, les fonctions $\alpha_1=0$ et $\alpha_2$ valant $0$ sur $]-1,1[$ et $1$ sur $]2,3[$ vérifient $\alpha'=0=X$ et $\alpha(0)=0$, mais diffèrent sur $]2,3[$. Le morceau $]2,3[$ n'est relié à l'instant initial par rien. (C'est pourquoi la définition d'une courbe intégrale impose un **intervalle**.)

### H3 — Même condition initiale : même point **au même instant**

**Rôle.** Fournit $\tau_0\in A$ (l'ensemble de coïncidence est non vide).

**Si on la retire.** Passer par le même point à des instants différents ne suffit pas : pour $X=1$ sur $\R\times\R$, $\alpha_1(t)=t$ et $\alpha_2(t)=t-1$ passent toutes deux par $0$ (en $t=0$ et en $t=1$), mais diffèrent partout. (Pour un champ **autonome**, elles décrivent cependant la même trajectoire décalée en temps : [[ch07-translation-temps-autonome]].)

## Idée de la preuve

$A=\{t\in J_1\cap J_2 : \alpha_1(t)=\alpha_2(t)\}$ contient $\tau_0$, est fermé par continuité et ouvert par l'unicité du flot local appliquée en chaque point de $A$ ; $J_1\cap J_2$ étant connexe, $A=J_1\cap J_2$.

## Preuve

Posons $J=J_1\cap J_2$ : c'est une intersection de deux intervalles ouverts contenant $\tau_0$, donc un intervalle ouvert non vide, donc une partie **connexe** de $\R$. Soit
$$
A=\{t\in J\ :\ \alpha_1(t)=\alpha_2(t)\}.
$$

* **$A$ est non vide** : $\alpha_1(\tau_0)=x_0=\alpha_2(\tau_0)$, donc $\tau_0\in A$.
* **$A$ est fermé dans $J$** : $A=(\alpha_1-\alpha_2)^{-1}(\{0\})$, image réciproque d'un fermé par une application continue sur $J$.
* **$A$ est ouvert** (d'après le théorème VII.2.12). Soit $t_1\in A$ et $y=\alpha_1(t_1)=\alpha_2(t_1)\in U$. Le théorème d'existence et d'unicité du flot local ([[ch07-existence-flot-local]], sans paramètre) appliqué au point $(t_1,y)\in I\times U$ fournit un intervalle ouvert $J'\ni t_1$, un voisinage ouvert $U'$ de $y$, un $\epsilon>0$ et un flot local $F$ en $(t_1,y)$. Comme $J$ est ouvert, il existe $\epsilon'\in\,]0,\epsilon]$ tel que $]t_1-\epsilon',t_1+\epsilon'[\subset J$. Les restrictions de $\alpha_1$ et de $\alpha_2$ à $]t_1-\epsilon',t_1+\epsilon'[$ sont des courbes intégrales de $X$ de condition initiale $(t_1,y)$, avec $t_1\in J'$ et $y\in U'$. L'énoncé d'unicité du théorème VII.2.12 donne, pour $\abs{t-t_1}<\epsilon'$,
$$
\alpha_1(t)=F(t_1,t,y)=\alpha_2(t).
$$
Donc $]t_1-\epsilon',t_1+\epsilon'[\subset A$.

Ainsi $A$ est une partie non vide, ouverte et fermée du connexe $J$ : $A=J$, c'est-à-dire $\alpha_1=\alpha_2$ sur $J_1\cap J_2$. $\square$

## Preuve à trous

Soit $J=J_1\cap J_2$ et $A=\{t\in J : \alpha_1(t)=\alpha_2(t)\}$. On a $\tau_0\in A$, et $A$ est fermé dans $J$ car <trou>$A=(\alpha_1-\alpha_2)^{-1}(\{0\})$ avec $\alpha_1-\alpha_2$ continue</trou>. Pour l'ouverture, soit $t_1\in A$ et $y=\alpha_1(t_1)=\alpha_2(t_1)$ : <trou indice="quel théorème appliquer, et en quel point ?">le théorème d'existence et d'unicité du flot local en $(t_1,y)$ fournit $\epsilon>0$ et un flot local $F$, et pour $\epsilon'\le\epsilon$ avec $]t_1-\epsilon',t_1+\epsilon'[\subset J$, l'énoncé d'unicité donne $\alpha_1(t)=F(t_1,t,y)=\alpha_2(t)$ pour $\abs{t-t_1}<\epsilon'$</trou>. Enfin <trou indice="quelle propriété de $J_1\cap J_2$ ?">$J$ est un intervalle ouvert non vide, donc connexe, et $A$ y est non vide, ouvert et fermé : $A=J$</trou>. $\square$

## Exemples

**Exemple 1 (recollement).** Pour $X(t,x)=x^2$, $(\tau_0,x_0)=(0,1)$ : $\alpha_1(t)=\frac1{1-t}$ sur $J_1=\,]-1,\frac12[$ et $\alpha_2(t)=\frac1{1-t}$ sur $J_2=\,]-5,1[$ sont des courbes intégrales de même condition initiale ; elles coïncident sur $J_1\cap J_2=J_1$. La proposition garantit qu'**aucune** autre courbe intégrale issue de $(0,1)$ ne peut différer de $t\mapsto\frac1{1-t}$ : par exemple, toute courbe intégrale définie sur $]-2,\frac12[$ de condition initiale $(0,1)$ est $t\mapsto\frac1{1-t}$.

**Exemple 2 (un champ $C^1$).** Tout champ de classe $C^1$ est localement lipschitzien en la seconde variable ([[ch07-restriction-domaine-c1-lipschitz]]). Pour l'oscillateur $X(t,(x,y))=(y,-x)$ sur $\R^2$, la seule courbe intégrale issue de $(0,(1,0))$, quel que soit son intervalle de définition, est la restriction de $t\mapsto(\cos t,-\sin t)$ (vérification : la dérivée $(-\sin t,-\cos t)$ est bien $(y,-x)$ évalué en $(\cos t,-\sin t)$).

**Exemple 3 (conséquence : les trajectoires ne se croisent pas).** Pour un champ autonome localement lipschitzien, si deux courbes intégrales $\alpha$, $\beta$ vérifient $\alpha(t_1)=\beta(t_1)$ à **un** instant $t_1$ commun, la proposition (appliquée avec la condition initiale $(t_1,\alpha(t_1))$) donne $\alpha=\beta$ sur l'intersection de leurs domaines. Par exemple, une solution de $\alpha'=\alpha(1-\alpha)$ avec $0<\alpha(0)<1$ ne peut jamais valoir $0$ ni $1$ : elle coïnciderait alors avec une solution constante $0$ ou $1$, donc serait constante, ce qui contredit $0<\alpha(0)<1$.

## Pièges

* > ⚠️ La conclusion porte sur $J_1\cap J_2$ **seulement** ; elle ne dit pas que $J_1=J_2$. C'est la définition de la courbe intégrale maximale ([[ch07-courbe-integrale-maximale-def]]) qui recolle toutes ces courbes en une seule.
* > ⚠️ Sans hypothèse lipschitzienne, deux solutions peuvent coïncider sur un intervalle puis se séparer (exemple de $\alpha_3$ en H1). La proposition est fausse pour un champ seulement continu.
* « Ouvert » se démontre avec la forme d'unicité de [[ch07-existence-flot-local]] valable sur des intervalles **plus courts** que $]t_1-\epsilon,t_1+\epsilon[$ : on ne peut pas imposer que $J$ contienne cet intervalle entier.
* Même condition initiale veut dire même point **et** même instant.
