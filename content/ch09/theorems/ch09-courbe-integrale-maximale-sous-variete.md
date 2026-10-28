---
id: ch09-courbe-integrale-maximale-sous-variete
type: definition
chapter: 9
title: Intervalle de vie $J_{\tau_0}(x_0)$ et courbe intégrale maximale sur une sous-variété
ref: non numéroté, section IX.8.1, p. 174
page: 174
importance: 2
depends: [ch09-flot-local-sous-variete, ch07-courbe-integrale-maximale-def, ch07-flot-global-def, ch07-unicite-globale, ch09-champ-tangent-courbe-integrale-flot-local-def]
tags: [courbe-integrale-maximale, intervalle-de-vie, champ-tangent, sous-variete, unicite]
---
## Intuition

> 💡 Le théorème de Cauchy-Lipschitz sur $S$ ([[ch09-flot-local-sous-variete]]) ne donne la courbe intégrale que pendant un petit temps $2\epsilon$. Mais on peut **la prolonger** tant que c'est possible, en recollant des morceaux : l'unicité garantit que les morceaux s'accordent. On obtient une courbe définie sur le plus grand intervalle possible, son **intervalle de vie** $J_{\tau_0}(x_0)$.

C'est exactement la construction des définitions VII.3.3 et VII.3.4 ([[ch07-courbe-integrale-maximale-def]]), avec $S$ à la place de l'ouvert $U$. Rappel : une **courbe intégrale** de condition initiale $(\tau_0,x_0)$ du champ tangent $X : I\times S\to\R^N$ est une courbe $\alpha : J\to S$ ($J\subset I$ intervalle ouvert) avec $\alpha'(t)=X(t,\alpha(t))$ et $\alpha(\tau_0)=x_0$ ([[ch09-champ-tangent-courbe-integrale-flot-local-def]]).

## Énoncé

**Définition (poly, section IX.8.1, p. 174, non numérotée).** Soit $X : I\times S\to\R^N$ un champ de vecteurs tangents dépendant du temps sur une sous-variété $S$ de $\R^N$. Supposons que $X$ soit localement lipschitzien en la seconde variable. Soit $(\tau_0,x_0)\in I\times S$. Comme dans les définitions VII.3.3 et VII.3.4, on définit $J_{\tau_0}(x_0)$ comme l'**union de tous les intervalles ouverts $J$ contenant $\tau_0$ tels qu'il existe une courbe intégrale $\alpha : J\to S$ de condition initiale $(\tau_0,x_0)$**, et l'on montre qu'il existe une unique courbe intégrale $\alpha_{\tau_0,x_0}$ de condition initiale $(\tau_0,x_0)$ définie sur $J_{\tau_0}(x_0)$ : c'est la **courbe intégrale maximale** de $X$ de condition initiale $(\tau_0,x_0)$.

(Le poly écrit « $\alpha : J\to U$ » : lire $\alpha : J\to S$.)

*Pourquoi la définition a un sens.*

1. **Unicité globale sur $S$.** Si $\alpha_1 : J_1\to S$ et $\alpha_2 : J_2\to S$ sont deux courbes intégrales de même condition initiale $(\tau_0,x_0)$, elles coïncident sur $J_1\cap J_2$. En effet $A=\{t\in J_1\cap J_2\mid\alpha_1(t)=\alpha_2(t)\}$ contient $\tau_0$ et est fermé dans l'intervalle $J_1\cap J_2$ (continuité). Il est ouvert : si $s\in A$ et $y=\alpha_1(s)=\alpha_2(s)$, le théorème IX.8.5 ([[ch09-flot-local-sous-variete]]) appliqué en $(s,y)$ donne un flot local $(E(J',\epsilon),U',F)$ avec $s\in J'$, $y\in U'$ ; pour $\epsilon'\le\epsilon$ tel que $]s-\epsilon',s+\epsilon'[\subset J_1\cap J_2$, l'énoncé d'unicité donne $\alpha_1=F(s,\cdot,y)=\alpha_2$ sur $]s-\epsilon',s+\epsilon'[$. Par connexité, $A=J_1\cap J_2$. (C'est l'analogue de [[ch07-unicite-globale]].)
2. **$J_{\tau_0}(x_0)$ est un intervalle ouvert contenu dans $I$ et contenant $\tau_0$.** La famille est non vide (le théorème IX.8.5 en $(\tau_0,x_0)$ donne une courbe intégrale sur $]\tau_0-\epsilon,\tau_0+\epsilon[$) ; une réunion d'intervalles ouverts contenant tous $\tau_0$ est un intervalle ouvert contenant $\tau_0$, contenu dans $I$ puisque chacun l'est.
3. **Recollement.** Pour $t\in J_{\tau_0}(x_0)$, on choisit un $J\ni t$ de la famille et une courbe $\alpha_J$ correspondante, et l'on pose $\alpha_{\tau_0,x_0}(t)=\alpha_J(t)$ ; par le point 1, ce choix n'influe pas sur la valeur. Sur chaque $J$, $\alpha_{\tau_0,x_0}=\alpha_J$, donc $\alpha_{\tau_0,x_0}$ est dérivable, tracée sur $S$, et $\alpha_{\tau_0,x_0}'(t)=X(t,\alpha_{\tau_0,x_0}(t))$ : c'est une courbe intégrale, de condition initiale $(\tau_0,x_0)$.
4. **Maximalité et unicité.** Toute courbe intégrale $\beta : J\to S$ de condition initiale $(\tau_0,x_0)$ vérifie $J\subset J_{\tau_0}(x_0)$ et $\beta=\alpha_{\tau_0,x_0}$ sur $J$ (point 1). En particulier $\alpha_{\tau_0,x_0}$ est la seule courbe intégrale définie sur $J_{\tau_0}(x_0)$ de condition initiale $(\tau_0,x_0)$, et elle n'a aucun prolongement en une courbe intégrale sur un intervalle plus grand.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Il donne l'unicité locale (théorème IX.8.5), donc l'unicité globale du point 1, sans laquelle le recollement serait mal défini.

**Si on la retire.** Sur $S=\R$ (sous-variété de $\R$), $X(y)=2\sqrt{|y|}$ : les courbes $\alpha_c(t)=(t-c)^2$ pour $t\ge c$, $0$ pour $t\le c$ ($c\ge0$) sont toutes des courbes intégrales sur $\R$ de condition initiale $(0,0)$, deux à deux distinctes : il n'y a pas « une » courbe intégrale maximale.

### H2 — La courbe est tracée sur $S$

**Rôle.** Les courbes intégrales sont à valeurs dans $S$ (c'est la seule chose qui ait un sens, $X$ n'étant défini que sur $S$). Quand $S$ n'est pas fermée, cela peut **raccourcir** l'intervalle de vie par rapport à celui d'un champ ambiant (voir le premier exemple).

## Exemples

* **Le cercle épointé : vie finie sans explosion.** $S=\mathbb S^1\setminus\{(1,0)\}$ (ouvert de $\mathbb S^1$, donc sous-variété), $X(y)=(-y_2,y_1)$ (autonome, $I=\R$, tangent, lipschitzien). Toute courbe intégrale $\beta : J\to S$ de condition initiale $(0,(-1,0))$ est aussi une courbe intégrale du champ linéaire $(-y_2,y_1)$ de $\R^2$, donc (unicité dans $\R^2$) $\beta(t)=(\cos(\pi+t),\sin(\pi+t))$ sur $J$. Elle est dans $S$ si et seulement si $\pi+t\notin2\pi\Z$ ; $J$ étant un intervalle contenant $0$, $J\subset\,]-\pi,\pi[$, et $]-\pi,\pi[$ convient. Donc $J_0((-1,0))=\,]-\pi,\pi[$ : la courbe atteint le « trou » $(1,0)$ au temps $\pm\pi$, bien que le champ soit borné.

* **Une parabole : explosion en temps fini.** $S=\{(y_1,y_2)\mid y_2=y_1^2\}$ (graphe, fermée), $X(y_1,y_2)=(y_1^2,2y_1^3)$ : on a $T_{(y_1,y_1^2)}S=\R(1,2y_1)$ et $X=y_1^2(1,2y_1)$, donc $X$ est tangent ; c'est la restriction d'un champ polynomial, donc localement lipschitzien. Avec $\alpha(t)=(z(t),z(t)^2)$, l'équation devient $z'=z^2$ (la seconde composante, $2zz'=2z^3$, est alors automatique). Pour $\alpha(0)=(1,1)$ : $z(t)=\frac1{1-t}$, et $J_0((1,1))=\,]-\infty,1[$ ; la courbe part à l'infini quand $t\to1^-$, donc ne se prolonge pas.

* **Vie infinie.** Sur $\mathbb S^1$, pour le champ $X(y)=(1-y_1)(-y_2,y_1)$ de [[ch09-flot-local-sous-variete]], la formule $\theta(t)=2\,\mathrm{arccot}\big(\cot(\theta_0/2)-t\big)$ est définie pour tout $t\in\R$ : $J_0(x_0)=\R$ pour tout $x_0$ (ce qu'on retrouvera en général pour $S$ compacte, Théorème IX.8.9 : [[ch09-flot-complet-compacte]]).

## Pièges

* > ⚠️ $J_{\tau_0}(x_0)$ dépend de la condition initiale $(\tau_0,x_0)$, et peut être strictement plus petit que $I$.
* Une durée de vie finie n'implique pas que la courbe « part à l'infini » si $S$ n'est pas fermée : elle peut aussi approcher un point de $\bar S\setminus S$ (cercle épointé).
* Le recollement repose sur l'**unicité globale**, qui se démontre par connexité à partir de l'unicité **locale** du théorème IX.8.5 : c'est l'argument à savoir refaire.
* Lire « $\alpha : J\to S$ » là où le poly écrit « $\alpha : J\to U$ ».
