---
id: ch07-flot-global-def
type: definition
chapter: 7
title: Flot global $F : D\to U$ et son domaine $D$
ref: Définition VII.3.4
page: 134
importance: 3
depends: [ch07-courbe-integrale-maximale-def, ch07-unicite-globale, ch07-champ-vecteurs-courbe-integrale-def]
tags: [flot, flot-global, domaine, courbe-integrale-maximale, autonome, notation]
---
## Intuition

> 💡 Le **flot** est la « machine à trajectoires » du champ de vecteurs : on lui donne un instant de départ $\tau_0$, un point de départ $x_0$ et un instant d'arrivée $t$, et il renvoie la position $F(\tau_0,t,x_0)$ atteinte à l'instant $t$ par la particule partie de $x_0$ à l'instant $\tau_0$. Image : une rivière dont le courant $X(t,x)$ peut varier avec l'heure ; un bouchon lâché en $x_0$ à l'heure $\tau_0$ se trouve en $F(\tau_0,t,x_0)$ à l'heure $t$.

Deux difficultés rendent la définition un peu lourde. D'abord, pour que « la » trajectoire existe, il faut l'unicité des courbes intégrales : c'est l'hypothèse « $X$ localement lipschitzien en la seconde variable » ([[ch07-localement-lipschitzien-def]]), qui donne l'unicité globale ([[ch07-unicite-globale]]) et donc une courbe intégrale **maximale** $\alpha_{\tau_0,x_0}$ définie sur l'intervalle $J_{\tau_0}(x_0)$ ([[ch07-courbe-integrale-maximale-def]]). Ensuite, le bouchon peut sortir de la rivière (quitter $U$) ou partir à l'infini en temps fini : $F(\tau_0,t,x_0)$ n'a de sens que si $t\in J_{\tau_0}(x_0)$. Le **domaine** $D$ du flot est exactement l'ensemble de ces triplets admissibles ; il n'est pas un produit en général.

Rappel du cadre ([[ch07-champ-vecteurs-courbe-integrale-def]]) : $E$ est un espace de Banach, $U$ un ouvert de $E$, $I$ un intervalle ouvert de $\R$, $X : I\times U\to E$ une application continue (le champ de vecteurs dépendant du temps) ; une courbe intégrale de condition initiale $(\tau_0,x_0)$ est une application $\alpha : J\to U$ de classe $C^1$ sur un intervalle ouvert $J\ni\tau_0$ avec $\alpha'(t)=X(t,\alpha(t))$ et $\alpha(\tau_0)=x_0$.

## Énoncé

**Définition (poly, Définition VII.3.4, p. 134).** Soit $X : I\times U\to E$ un champ de vecteurs dépendant du temps, localement lipschitzien en la seconde variable. Pour $(\tau_0,x_0)\in I\times U$, on note $\alpha_{\tau_0,x_0} : J_{\tau_0}(x_0)\to U$ la courbe intégrale maximale de $X$ de condition initiale $(\tau_0,x_0)$ ([[ch07-courbe-integrale-maximale-def]]). Posons
$$
D=\{(\tau_0,t,x_0)\in I\times I\times U\ |\ t\in J_{\tau_0}(x_0)\}.
$$
L'application
$$
F : D\to U,\qquad F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t)
$$
est appelée **flot global** de $X$, et $D$ est son **domaine de définition**. Pour tout $\tau_0\in I$, on pose
$$
D_{\tau_0}=\{(t,x_0)\in I\times U\ |\ t\in J_{\tau_0}(x_0)\}.
$$

**Conventions dans le cas autonome.** Lorsque le champ de vecteurs $X : U\to E$ ne dépend pas du temps ([[ch07-equation-autonome-def]]), on prend $I=\R$ ([[ch07-autonome-i-egal-r-remarque]]) et l'on fixe $\tau_0=0$. On note alors simplement
$$
J(x_0)=J_0(x_0),\qquad F(t,x_0)=F(0,t,x_0),\qquad \alpha_{x_0}=\alpha_{0,x_0},\quad\text{etc.}
$$
**Notation.** Si $I$ est un intervalle de $\R$ et $c\in\R$, on note $I+c$ l'intervalle $\{t\in\R\ ;\ t-c\in I\}$ (translaté de $I$ par $c$) ; de même $I-c=I+(-c)$.

## Hypothèses

### H1 — $X$ localement lipschitzien en la seconde variable

**Rôle.** C'est la condition cachée indispensable : elle donne, via le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]), l'existence d'**une unique** courbe intégrale maximale $\alpha_{\tau_0,x_0}$ pour chaque condition initiale. Sans unicité, « $F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t)$ » ne désigne rien.

**Si on la retire.** Pour $X(x)=2\abs{x}^{1/2}$ sur $U=\R$ (continu, non lipschitzien en $0$, [[ch07-peano-non-unicite]]), les fonctions $\alpha_1\equiv0$ et $\alpha_2(t)=\operatorname{signe}(t)\,t^2$ sont deux courbes intégrales de condition initiale $(0,0)$ définies sur $\R$ : il n'y a pas de courbe maximale privilégiée, et $F(0,t,0)$ vaudrait aussi bien $0$ que $t^2$ pour $t>0$. Le flot n'est pas défini.

### H2 — $J_{\tau_0}(x_0)$ est un intervalle ouvert contenant $\tau_0$

**Rôle.** $J_{\tau_0}(x_0)$ est une réunion d'intervalles ouverts contenant tous $\tau_0$ : c'est donc un intervalle ouvert contenant $\tau_0$, contenu dans $I$. En particulier $(\tau_0,\tau_0,x_0)\in D$ pour tout $(\tau_0,x_0)\in I\times U$, et $F(\tau_0,\tau_0,x_0)=x_0$ : le flot est défini au moins « à l'instant de départ ». De plus $D\ne\varnothing$ et la tranche $D_{\tau_0}$ contient $\{\tau_0\}\times U$.

**Si on la retire.** Ce n'est pas une hypothèse mais une propriété : on ne peut pas la retirer. Elle explique pourquoi $D$ est « fibré » au-dessus de $I\times U$ par des intervalles ouverts $J_{\tau_0}(x_0)$ de longueurs variables.

### H3 — $U$ ouvert d'un Banach, $I$ intervalle ouvert, $X$ continue

**Rôle.** Cadre du chapitre : l'ouverture de $U$ et de $I$ permet d'appliquer Cauchy-Lipschitz en tout point ; la continuité de $X$ est incluse dans la définition d'un champ de vecteurs ([[ch07-champ-vecteurs-courbe-integrale-def]]).

**Si on la retire.** Hypothèses structurelles : hors de ce cadre, les résultats de la section VII.2 ne s'appliquent pas et la notion de courbe intégrale maximale n'est plus disponible.

## Exemples

**Exemple 1 (explosion en temps fini : $D$ n'est pas un produit).** Sur $U=E=\R$, champ autonome $X(x)=x^2$, équation $\alpha'=\alpha^2$. Pour $x_0\ne0$, en séparant les variables, $-1/\alpha(t)=t+C$ avec $-1/x_0=C$, d'où
$$
\alpha_{x_0}(t)=\frac{x_0}{1-tx_0},\qquad \alpha_{x_0}'(t)=\frac{x_0^2}{(1-tx_0)^2}=\alpha_{x_0}(t)^2 .
$$
Cette fonction est définie et $C^1$ sur la composante connexe de $\{t\ ;\ 1-tx_0\ne0\}$ contenant $0$, et $\abs{\alpha_{x_0}(t)}\to+\infty$ au bord fini de cet intervalle, donc elle ne se prolonge pas : c'est la courbe intégrale maximale et
$$
J(x_0)=\begin{cases}\ ]-\infty\,;\,1/x_0[ & \text{si } x_0>0,\\ \ \R & \text{si } x_0=0\ (\alpha_0\equiv0),\\ \ ]1/x_0\,;\,+\infty[ & \text{si } x_0<0.\end{cases}
$$
Ainsi $D_0=\{(t,x)\in\R\times\R\ ;\ tx<1\}$ : l'ouvert du plan situé « entre les deux branches » de l'hyperbole $tx=1$, et $F(t,x)=\dfrac{x}{1-tx}$ sur $D_0$. En notation non autonome, $\alpha_{\tau_0,x_0}(t)=\dfrac{x_0}{1-(t-\tau_0)x_0}$ et $D=\{(\tau_0,t,x_0)\ ;\ (t-\tau_0)x_0<1\}$. On voit que $D\subsetneq I\times I\times U=\R\times\R\times\R$.

**Exemple 2 (champ linéaire : $D=\R\times\R\times E$).** Sur $E=\R^n$ (ou tout Banach), $X(x)=Ax$ avec $A\in\mathcal L(E)$. La courbe intégrale de condition initiale $(0,x_0)$ est $\alpha_{x_0}(t)=e^{tA}x_0$, définie sur $\R$ (dérivée $Ae^{tA}x_0=A\alpha_{x_0}(t)$). Donc $J(x_0)=\R$ pour tout $x_0$, $D_0=\R\times E$ et $F(t,x)=e^{tA}x$. Plus généralement $F(\tau_0,t,x_0)=e^{(t-\tau_0)A}x_0$.

**Exemple 3 (champ dépendant du temps : $F$ ne dépend pas seulement de $t-\tau_0$).** Sur $I=\R$, $U=\R$, $X(t,x)=x+t$, équation $\alpha'=\alpha+t$. La solution de condition initiale $(\tau_0,x_0)$ est
$$
F(\tau_0,t,x_0)=(x_0+\tau_0+1)\,e^{t-\tau_0}-t-1 .
$$
Vérification : $F(\tau_0,\tau_0,x_0)=x_0+\tau_0+1-\tau_0-1=x_0$ et $\dfrac{\partial F}{\partial t}=(x_0+\tau_0+1)e^{t-\tau_0}-1=F(\tau_0,t,x_0)+t$. La solution est définie pour tout $t\in\R$ (unicité globale : toute courbe intégrale de même condition initiale coïncide avec celle-ci), donc $D=\R\times\R\times\R$. Mais $F(0,1,0)=e-2$ tandis que $F(1,2,0)=2e-3$ : à durée écoulée égale ($1$), le point d'arrivée dépend de l'instant de départ. Contrairement au cas autonome, on ne peut pas réduire $F$ à une fonction de $(t-\tau_0,x_0)$.

## Pièges

* > ⚠️ $D$ n'est **pas** $I\times I\times U$ en général : avant d'écrire $F(\tau_0,t,x_0)$, vérifier que $t\in J_{\tau_0}(x_0)$ (exemple 1 : $F(0,1,1)$ n'existe pas pour $\alpha'=\alpha^2$).
* Ordre des arguments : $F(\tau_0,t,x_0)$ = (instant **initial**, instant **courant**, point initial). Le poly écrit aussi $F(s,t,x)$ avec $s$ l'instant initial (formules (VII.3.3)–(VII.3.5), [[ch07-proprietes-flot-formules]]). Dans le cas autonome, $F(t,x)$ signifie $F(0,t,x)$.
* $J_{\tau_0}(x_0)$ dépend de **toute** la condition initiale $(\tau_0,x_0)$ ; dans le cas autonome, $J_{\tau_0}(x_0)=J(x_0)+\tau_0$ (conséquence de [[ch07-translation-temps-autonome]]), ce qui justifie la convention $\tau_0=0$.
* Le domaine $D$ est **ouvert** dans $I\times I\times U$ et $F$ y est aussi régulière que $X$ : c'est un théorème ([[ch07-flot-global-ouvert-regulier]]), pas une évidence. En revanche $D$ n'est pas fermé (exemple 1 : $(1-1/n,1)\in D_0$ et $(1,1)\notin D_0$).
* Ne pas confondre le flot **global** $F : D\to U$ et un flot **local** $F : \mathcal E(J,\epsilon)\times U'\to U$ ([[ch07-flot-local-def]]) : le second est la restriction du premier à un petit ouvert produit, sur lequel la longueur $2\epsilon$ de l'intervalle d'existence est uniforme.
* La notation $I+c=\{t\ ;\ t-c\in I\}$ est un **translaté** : $]a\,;b[+c=\,]a+c\,;b+c[$ ; attention au signe dans $J(x_0)-t_1$ ([[ch07-translation-temps-autonome]]).
