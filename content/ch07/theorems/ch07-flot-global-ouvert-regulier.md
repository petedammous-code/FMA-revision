---
id: ch07-flot-global-ouvert-regulier
type: theorem
chapter: 7
title: Le domaine $D$ du flot global est ouvert et $F$ est de classe $C^p$
ref: Théorème VII.3.9
page: 135
importance: 3
depends: [ch07-existence-flot-local, ch07-composition-flot, ch07-flot-local-def, ch07-flot-global-def, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch05-composition-differentielles]
tags: [flot, ouvert, regularite, classe-cp, connexite, flot-local, difféomorphisme]
---
## Intuition

> 💡 Deux affirmations de « stabilité ». (a) Si la particule partie de $x_0$ à l'instant $\tau_0$ vit jusqu'à l'instant $t$, alors toute particule partie d'un point voisin à un instant voisin vit aussi jusqu'à un instant voisin de $t$ : le domaine $D$ du flot est **ouvert**. (b) La position d'arrivée dépend de façon $C^p$ des trois données $(\tau_0,t,x_0)$ dès que le champ est $C^p$. Image : un faisceau de trajectoires voisines reste un faisceau, et il se déforme régulièrement.

Localement (sur un petit intervalle de temps), c'est le théorème du flot local ([[ch07-existence-flot-local]]) : le flot est défini sur un ouvert produit $\mathcal E(J,\epsilon)\times U'$ et y est $C^p$. La difficulté est de **propager** cette information le long d'une trajectoire entière, sur un temps long. L'outil est un argument de connexité sur l'intervalle de vie $J=J_{\tau_0}(x_0)$ : l'ensemble $A$ des instants $s\in J$ où tout va bien est non vide (en $\tau_0$), ouvert (trivialement) et fermé ; pour la fermeture, on recolle le flot déjà connu jusqu'à un instant $t_2$ proche de $b$ avec un flot local autour du point $F(\tau_0,b,x_0)$, grâce à la formule de composition ([[ch07-composition-flot]]).

Notations : $X : I\times U\to E$ est un champ de vecteurs dépendant du temps, localement lipschitzien en la seconde variable ; $D=\{(\tau_0,t,x_0)\ ;\ t\in J_{\tau_0}(x_0)\}$ et $F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t)$ ([[ch07-flot-global-def]]). Un flot local en $(\tau_0,x_0)$ (sans paramètre, [[ch07-flot-local-def]]) est noté $(J',\epsilon,U',F)$ : $J'\ni\tau_0$ intervalle ouvert, $U'\ni x_0$ ouvert, $\epsilon>0$, et pour tout $(t_0,x)\in J'\times U'$ la courbe intégrale maximale de condition initiale $(t_0,x)$ est définie sur $]t_0-\epsilon\,;t_0+\epsilon[$. On convient que « de classe $C^0$ » signifie « continue ».

## Énoncé

**Théorème (poly, Théorème VII.3.9, p. 135).** Soit $U$ un ouvert d'un espace de Banach $E$. Soit $X : I\times U\to E$ un champ de vecteurs dépendant du temps. Supposons que $X$ soit localement lipschitzien en la seconde variable. Alors :

a. $D$ est un ouvert de $I\times I\times U$.

b. Si $X$ est de classe $C^p$ ($p\ge0$), $F$ est de classe $C^p$ sur $D$.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable (et continue)

**Rôle.** Donne l'existence du flot global (unicité, [[ch07-unicite-globale]]) et surtout le théorème du flot local ([[ch07-existence-flot-local]]) avec sa longueur d'existence $2\epsilon$ **uniforme** sur un voisinage : c'est ce qui permet de prolonger simultanément toutes les trajectoires voisines au-delà de $b$ dans l'étape « $A$ fermé ».

**Si on la retire.** Le flot global n'est plus défini (non-unicité, [[ch07-peano-non-unicite]]), l'énoncé perd son sens. (Même en choisissant une solution par condition initiale, la dépendance continue en la condition initiale tombe : pour $\alpha'=2\abs\alpha^{1/2}$ et $x_0=0$, on peut choisir la solution nulle, alors que pour $x_0=\eta>0$ la solution est $(t+\sqrt\eta)^2$, qui ne tend pas vers $0$ quand $\eta\to0$ pour $t>0$ fixé.)

### H2 — $X$ de classe $C^p$ (pour b.)

**Rôle.** Le flot local est de classe $C^p$ lorsque $X$ l'est ([[ch07-existence-flot-local]], issu du théorème de Cauchy-Lipschitz à paramètres [[ch07-cauchy-lipschitz-parametres]]) ; la régularité globale s'obtient en composant des flots locaux ([[ch05-composition-differentielles]]).

**Si on la retire.** Avec $X$ seulement continue et localement lipschitzienne, $F$ est continue ($p=0$) mais pas forcément $C^1$. Sur $U=\R$, $X(x)=\abs x$ est lipschitzien mais pas $C^1$. Le flot est $F(t,x)=xe^{t}$ si $x\ge0$ (car $\alpha=xe^t\ge0$ et $\alpha'=\alpha=\abs\alpha$) et $F(t,x)=xe^{-t}$ si $x<0$ (car $\alpha=xe^{-t}<0$ et $\alpha'=-\alpha=\abs\alpha$). Pour $t\ne0$ fixé, $x\mapsto F(t,x)$ a pour dérivée à droite $e^t$ et à gauche $e^{-t}$ en $x=0$ : $F$ n'est pas différentiable en $(t,0)$, bien que $D_0=\R\times\R$ soit ouvert et $F$ continue.

### H3 — Cadre : $E$ Banach, $U$ ouvert, $I$ intervalle ouvert

**Rôle.** Hypothèses de tout le chapitre, nécessaires au théorème de Cauchy-Lipschitz ; l'ouverture de $U$ et de $I$ sert à ce que les voisinages produits $O\times U'$ existent autour de chaque point.

**Si on la retire.** Hypothèses structurelles ; hors de ce cadre, la section VII.2 ne s'applique pas.

## Idée de la preuve

Pour $(\tau_0,x_0)$ fixé, soit $A\subset J=J_{\tau_0}(x_0)$ l'ensemble des instants $s$ tels que $(\tau_0,s,x_0)$ ait un voisinage produit dans $D$ sur lequel $F$ est $C^p$. $A$ est non vide (flot local en $(\tau_0,x_0)$), ouvert (évident), fermé (flot local en $(b,F(\tau_0,b,x_0))$ recollé par la formule de composition) ; $J$ connexe donne $A=J$.

## Preuve

Soit $p\ge0$ tel que $X$ soit de classe $C^p$ (pour a. seul, on prend $p=0$ : $X$ est continue). Fixons $(\tau_0,x_0)\in I\times U$, posons $J:=J_{\tau_0}(x_0)$ (intervalle ouvert contenant $\tau_0$), et notons $A$ l'ensemble des $s\in J$ tels que $(\tau_0,s,x_0)$ admette dans $D$ un **voisinage produit** $O\times U'$, où $O$ est un ouvert de $I\times I$ contenant $(\tau_0,s)$ et $U'$ un ouvert de $U$ contenant $x_0$, avec $O\times U'\subset D$, sur lequel $F$ est de classe $C^p$.

**Réduction.** Il suffit de montrer que $A=J$, et ce pour tout choix de $(\tau_0,x_0)$. En effet, tout point $(\tau_0,t,x_0)$ de $D$ vérifie $t\in J_{\tau_0}(x_0)=J=A$, donc possède un voisinage (produit) contenu dans $D$ : $D$ est ouvert (a.), et $F$ est de classe $C^p$ au voisinage de chacun de ses points, donc sur $D$ (b.). Comme $J$ est un intervalle, donc connexe, il suffit de vérifier que $A$ est non vide, ouvert et fermé dans $J$.

**$A$ est non vide.** Le théorème d'existence du flot local ([[ch07-existence-flot-local]], sans paramètre) en $(\tau_0,x_0)$ fournit $(J',\epsilon,U',F_{\mathrm{loc}})$ avec $F_{\mathrm{loc}} : \mathcal E(J',\epsilon)\times U'\to U$ de classe $C^p$, où $\mathcal E(J',\epsilon)=\{(t_0,t)\in J'\times\R\ ;\ \abs{t-t_0}<\epsilon\}$ est un ouvert de $\R^2$ contenu dans $I\times I$ (une courbe intégrale est définie sur un intervalle contenu dans $I$, donc $]t_0-\epsilon\,;t_0+\epsilon[\subset I$ pour tout $t_0\in J'$). Pour $(t_0,t,x)\in\mathcal E(J',\epsilon)\times U'$, la courbe $u\mapsto F_{\mathrm{loc}}(t_0,u,x)$ est une courbe intégrale de condition initiale $(t_0,x)$ sur $]t_0-\epsilon\,;t_0+\epsilon[$ ; par définition de $J_{t_0}(x)$ ([[ch07-courbe-integrale-maximale-def]]) et unicité globale ([[ch07-unicite-globale]]), $]t_0-\epsilon\,;t_0+\epsilon[\subset J_{t_0}(x)$ et $F_{\mathrm{loc}}(t_0,u,x)=F(t_0,u,x)$ sur cet intervalle. Ainsi $O\times U'$, avec $O=\mathcal E(J',\epsilon)\ni(\tau_0,\tau_0)$, est contenu dans $D$ et $F=F_{\mathrm{loc}}$ y est de classe $C^p$ : c'est un voisinage produit convenable de $(\tau_0,\tau_0,x_0)$, donc $\tau_0\in A$.

**$A$ est ouvert dans $J$.** Si $O\times U'$ convient pour $s\in A$, alors $O$ est un ouvert contenant $(\tau_0,s)$, donc contient $(\tau_0,s')$ pour tout $s'$ assez proche de $s$ ; pour ces $s'$ (qui sont dans $J$, ouvert), le même $O\times U'$ convient : $s'\in A$.

**$A$ est fermé dans $J$.** Soit $b\in J$ adhérent à $A$ et $x_1=F(\tau_0,b,x_0)\in U$. Soit $(J_1,2\epsilon_1,U_1,F_{\mathrm{loc}})$ un flot local en $(b,x_1)$ : $J_1\ni b$ intervalle ouvert, $U_1\ni x_1$ ouvert, et pour tout $(t_0,z)\in J_1\times U_1$, la courbe intégrale maximale de condition initiale $(t_0,z)$ est définie sur $]t_0-2\epsilon_1\,;t_0+2\epsilon_1[$, c'est-à-dire $]t_0-2\epsilon_1\,;t_0+2\epsilon_1[\subset J_{t_0}(z)$ ; de plus $F_{\mathrm{loc}}=F$ est de classe $C^p$ sur $\mathcal E(J_1,2\epsilon_1)\times U_1$.

*Choix de $t_2$.* L'application $t\mapsto F(\tau_0,t,x_0)$ est continue sur $J$ (c'est $\alpha_{\tau_0,x_0}$, de classe $C^1$) et vaut $x_1$ en $b$. L'ensemble des $t\in J$ tels que $\abs{t-b}<\epsilon_1$, $t\in J_1$ et $F(\tau_0,t,x_0)\in U_1$ est donc un ouvert de $J$ contenant $b$ ; comme $b$ est adhérent à $A$, il contient un point $t_2\in A$ :
$$
t_2\in A,\qquad \abs{t_2-b}<\epsilon_1,\qquad t_2\in J_1,\qquad F(\tau_0,t_2,x_0)\in U_1 .
$$

*Voisinage produit en $t_2$.* Puisque $t_2\in A$, il existe un voisinage produit $O_2\times U_2$ de $(\tau_0,t_2,x_0)$ contenu dans $D$ sur lequel $F$ est de classe $C^p$, en particulier continue. L'application $(t_0,t,x)\mapsto(t,F(t_0,t,x))$ est continue sur $O_2\times U_2$ et envoie $(\tau_0,t_2,x_0)$ sur $(t_2,F(\tau_0,t_2,x_0))\in J_1\times U_1$, ouvert : l'image réciproque de $J_1\times U_1$ est un ouvert contenant $(\tau_0,t_2,x_0)$, dans lequel on peut choisir un plus petit voisinage produit. Quitte à restreindre $O_2\times U_2$, on suppose donc
$$
(t,F(t_0,t,x))\in J_1\times U_1\qquad\text{pour tout }(t_0,t,x)\in O_2\times U_2 .
$$

*Prolongement par la formule de composition.* Soit $(t_0,t,x)\in O_2\times U_2$ et $z=F(t_0,t,x)$. Comme $(t,z)\in J_1\times U_1$, la courbe intégrale maximale de condition initiale $(t,z)$ est définie sur $]t-2\epsilon_1\,;t+2\epsilon_1[$. Or $t\in J_{t_0}(x)$ et $z=F(t_0,t,x)$, donc d'après le complément du théorème de composition ([[ch07-composition-flot]]), $J_t(z)=J_{t_0}(x)$ : ainsi $t+s\in J_{t_0}(x)$ pour tout $\abs s<2\epsilon_1$, c'est-à-dire $(t_0,t+s,x)\in D$, et la formule de composition donne
$$
F(t_0,t+s,x)=F\big(t,\,t+s,\,F(t_0,t,x)\big)=F_{\mathrm{loc}}\big(t,\,t+s,\,F(t_0,t,x)\big),\qquad \abs s<2\epsilon_1 .
$$
Le membre de droite est la composée de $(t_0,t,x,s)\mapsto(t,t+s,F(t_0,t,x))$, de classe $C^p$ sur $O_2\times U_2\times]-2\epsilon_1\,;2\epsilon_1[$ à valeurs dans l'ouvert $\mathcal E(J_1,2\epsilon_1)\times U_1$, et de $F_{\mathrm{loc}}$, de classe $C^p$ sur cet ouvert : il est de classe $C^p$ ([[ch05-composition-differentielles]]). Donc $G : (t_0,t,x,s)\mapsto F(t_0,t+s,x)$ est définie et de classe $C^p$ sur $O_2\times U_2\times]-2\epsilon_1\,;2\epsilon_1[$.

*Le nouveau voisinage produit.* Posons
$$
O_3:=\{(t_0,t+s)\ ;\ (t_0,t)\in O_2,\ \abs s<2\epsilon_1\}=\bigcup_{\abs s<2\epsilon_1}\big(O_2+(0,s)\big),
$$
ouvert de $\R^2$ comme réunion de translatés de l'ouvert $O_2$, et contenu dans $I\times I$ (car $t_0\in I$ et $t+s\in J_{t_0}(x)\subset I$). D'après ce qui précède, $O_3\times U_2\subset D$. Montrons que $F$ est de classe $C^p$ sur $O_3\times U_2$ : soit $(t_0^*,u^*,x^*)\in O_3\times U_2$, avec $u^*=t^*+s^*$, $(t_0^*,t^*)\in O_2$, $\abs{s^*}<2\epsilon_1$. Pour $(t_0,u,x)$ assez proche de $(t_0^*,u^*,x^*)$, on a encore $(t_0,t^*)\in O_2$ ($O_2$ ouvert) et $\abs{u-t^*}<2\epsilon_1$, de sorte que $F(t_0,u,x)=G(t_0,t^*,x,u-t^*)$ : composée de $G$ et d'une application affine, donc de classe $C^p$ au voisinage de $(t_0^*,u^*,x^*)$.

Enfin $O_3\times U_2$ est un voisinage de $(\tau_0,b,x_0)$ : $x_0\in U_2$, $(\tau_0,t_2)\in O_2$ et $b=t_2+(b-t_2)$ avec $\abs{b-t_2}<\epsilon_1<2\epsilon_1$, donc $(\tau_0,b)\in O_3$. Donc $b\in A$, et $A$ est fermé dans $J$.

**Conclusion.** $A$ est une partie non vide, ouverte et fermée de l'intervalle $J$ (connexe) : $A=J$. D'après la réduction, $D$ est ouvert et $F$ est de classe $C^p$ sur $D$. $\square$

*Remarque.* Le flot local est de classe $C^{p+1}$ en $t$ ([[ch07-existence-flot-local]]) ; il en est de même de $F$ : $\partial_tF(s,t,x)=X(t,F(s,t,x))$ ([[ch07-proprietes-flot-formules]]) est de classe $C^p$ comme composée.

## Preuve à trous

Fixons $(\tau_0,x_0)$, $J=J_{\tau_0}(x_0)$, et $A$ l'ensemble des $s\in J$ tels que $(\tau_0,s,x_0)$ ait un voisinage produit $O\times U'\subset D$ sur lequel $F$ est $C^p$. Il suffit de montrer $A=J$ pour tout $(\tau_0,x_0)$, et pour cela, <trou indice="quelle propriété de $J$ exploite-t-on ?">par connexité de l'intervalle $J$, que $A$ est non vide, ouvert et fermé dans $J$</trou>.

*Non vide* : <trou indice="théorème VII.2.12">le flot local en $(\tau_0,x_0)$ fournit $\mathcal E(J',\epsilon)\times U'\subset D$ sur lequel $F$ coïncide avec le flot local (unicité), donc $\tau_0\in A$</trou>. *Ouvert* : si $O\times U'$ convient pour $s$, il convient pour $s'$ proche car $O$ est ouvert.

*Fermé* : soit $b\in J$ adhérent à $A$, $x_1=F(\tau_0,b,x_0)$, et $(J_1,2\epsilon_1,U_1,F_{\mathrm{loc}})$ un flot local en $(b,x_1)$. Par continuité de $t\mapsto F(\tau_0,t,x_0)$, on choisit $t_2\in A$ avec $\abs{t_2-b}<\epsilon_1$, $t_2\in J_1$, $F(\tau_0,t_2,x_0)\in U_1$, puis un voisinage produit $O_2\times U_2$ de $(\tau_0,t_2,x_0)$ dans $D$, restreint de sorte que $(t,F(t_0,t,x))\in J_1\times U_1$ sur $O_2\times U_2$. Pour un tel $(t_0,t,x)$, la courbe intégrale issue de $(t,F(t_0,t,x))$ vit sur $]t-2\epsilon_1\,;t+2\epsilon_1[$, et <trou indice="la formule qui recolle les deux flots">la formule de composition $F(t_0,t+s,x)=F_{\mathrm{loc}}(t,t+s,F(t_0,t,x))$, $\abs s<2\epsilon_1$, montre que le membre de gauche est défini et $C^p$ en $(t_0,t,x,s)$</trou>. Avec <trou indice="épaissir $O_2$ en temps">$O_3=\{(t_0,t+s)\ ;\ (t_0,t)\in O_2,\ \abs s<2\epsilon_1\}$, ouvert, on a $O_3\times U_2\subset D$, $F$ y est $C^p$, et c'est un voisinage de $(\tau_0,b,x_0)$ car $\abs{b-t_2}<\epsilon_1<2\epsilon_1$</trou>. Donc $b\in A$. $\square$

## Exemples

**Exemple 1 ($\alpha'=\alpha^2$ : ouvert, pas fermé, pas produit).** $D_0=\{(t,x)\ ;\ tx<1\}$ est l'image réciproque de $]-\infty\,;1[$ par la fonction continue $(t,x)\mapsto tx$ : un ouvert de $\R^2$, conformément au a. Il n'est ni fermé ($(1-\tfrac1n,1)\in D_0$, $(1,1)\notin D_0$) ni un produit. Sur $D_0$, $F(t,x)=\dfrac{x}{1-tx}$ est $C^\infty$ (fraction rationnelle à dénominateur non nul), conformément au b. avec $p=\infty$. En trois variables, $D=\{(\tau_0,t,x_0)\ ;\ (t-\tau_0)x_0<1\}$ et $F=\dfrac{x_0}{1-(t-\tau_0)x_0}$.

**Exemple 2 (continu mais pas $C^1$).** $X(x)=\abs x$ sur $\R$ (H2) : $F(t,x)=xe^{t\operatorname{signe}(x)}$ est continue sur $D_0=\R^2$ — en $x=0$, $\abs{F(t,x)}=\abs xe^{\abs t}\to0$ — mais $x\mapsto F(t,x)$ n'est pas dérivable en $0$ pour $t\ne0$. Le théorème est optimal : $C^p$ pour $X$ donne $C^p$ pour $F$, et l'on ne peut pas espérer mieux en $x$ en général (ici $p=0$).

**Exemple 3 (les $F_t$ sont des difféomorphismes).** Cas autonome avec $X$ de classe $C^p$, $p\ge1$. Pour $t\in\R$, $U_t=\{x\ ;\ (t,x)\in D_0\}$ est ouvert (tranche de l'ouvert $D_0$) et $F_t=F(t,\cdot) : U_t\to U_{-t}$ est $C^p$ ; sa réciproque est $F_{-t}$ ([[ch07-groupe-un-parametre]]), également $C^p$. Donc $F_t$ est un **$C^p$-difféomorphisme** de $U_t$ sur $U_{-t}$. Pour $X(x)=Ax$ : $F_t=e^{tA}$, difféomorphisme linéaire de $E$ ; pour $\alpha'=\alpha^2$ : $F_1 : \,]-\infty\,;1[\,\to\,]-1\,;+\infty[$, $x\mapsto\dfrac{x}{1-x}$, difféomorphisme $C^\infty$ d'inverse $y\mapsto\dfrac{y}{1+y}$. C'est ce qui fait de l'exponentielle de matrices une application $C^\infty$ (exercice VII.4.3).

## Pièges

* > ⚠️ « $D$ ouvert » ne dit pas « $D=I\times I\times U$ » : les solutions peuvent exploser en temps fini. Il dit qu'une **petite** perturbation de $(\tau_0,t,x_0)$ garde la trajectoire vivante jusqu'à l'instant perturbé, sans aucune uniformité en $t$ : plus $t$ est proche du bord de $J_{\tau_0}(x_0)$, plus le voisinage est petit.
* La régularité $C^p$ est **conjointe** en les trois variables $(\tau_0,t,x_0)$, pas seulement en $t$ (ce qui serait immédiat) ni seulement en $x_0$. C'est ce qui donne les difféomorphismes de l'exemple 3 et permet de dériver $F$ par rapport à la condition initiale.
* En $t$, $F$ est même $C^{p+1}$ (remarque de la preuve) ; en $x_0$ et $\tau_0$, pas mieux que $C^p$ en général (exemple 2).
* Dans la preuve, l'ensemble $A$ dépend de $(\tau_0,x_0)$ fixés ; la conclusion sur $D$ vient de ce que **tout** point de $D$ est de la forme $(\tau_0,t,x_0)$ avec $t\in J_{\tau_0}(x_0)$.
* Le flot local est de longueur $2\epsilon_1$ et l'on choisit $\abs{t_2-b}<\epsilon_1$ : la marge $\epsilon_1$ est ce qui garantit que $O_3$ « déborde » au-delà de $b$. Oublier cette marge ferait échouer la fermeture.
* Sans hypothèse de Lipschitz, aucune de ces propriétés n'a de sens (H1) ; avec Lipschitz mais sans $C^1$, on a seulement la continuité (H2).
