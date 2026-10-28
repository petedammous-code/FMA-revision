---
id: ch07-flot-local-def
type: definition
chapter: 7
title: Flot local en $(\lambda_0,\tau_0,x_0)$
ref: Définition VII.2.9
page: 133
importance: 2
depends: [ch07-cauchy-lipschitz-parametres, ch07-champ-vecteurs-courbe-integrale-def, ch07-localement-lipschitzien-def]
tags: [flot, flot-local, cauchy-lipschitz, parametres, condition-initiale, notation]
---
## Intuition

> 💡 Un **flot local** est une « table des trajectoires courtes ». Autour d'un réglage de référence $(\lambda_0,\tau_0,x_0)$, on se donne une petite zone de paramètres $W$, une plage d'instants de départ $J$ et une petite zone de points de départ $U'$. Pour **chaque** choix $(\lambda,t_0,x)$ dans cette zone, la table donne la trajectoire de la particule lâchée en $x$ à l'instant $t_0$ dans le champ $X_\lambda$, pendant une durée $\epsilon$ **la même pour tous** vers le passé et vers le futur. On range ces trajectoires dans une seule application $F(\lambda,t_0,t,x)$ = « position à l'instant $t$ ».

Le mot important est « uniforme » : la durée de vie garantie $2\epsilon$ ne dépend pas du point de départ. C'est ce qui permet ensuite de travailler avec toutes les solutions à la fois (recollements, compacité, régularité du flot global).

Vocabulaire. Un **champ de vecteurs dépendant du temps** est une application continue $X : I\times U\to E$, où $E$ est un espace de Banach, $U$ un ouvert de $E$ et $I$ un intervalle ouvert de $\R$ ; une **courbe intégrale** de $X$ de **condition initiale** $(t_0,x)$ est une courbe $\alpha : J'\to U$ de classe $C^1$ sur un intervalle ouvert $J'\subset I$ contenant $t_0$, avec $\alpha'(t)=X(t,\alpha(t))$ pour tout $t\in J'$ et $\alpha(t_0)=x$ ([[ch07-champ-vecteurs-courbe-integrale-def]]). Ici on considère une **famille** $X : \Lambda\times I\times U\to E$, $X(\lambda,t,x)=X_\lambda(t,x)$, comme dans le théorème de Cauchy-Lipschitz à paramètres ([[ch07-cauchy-lipschitz-parametres]]) : $\Lambda$ est un ouvert d'un espace métrique (ou d'un Banach), et $X$ est localement lipschitzien en $x$ ([[ch07-localement-lipschitzien-def]]).

## Énoncé

**Définition (poly, Définition VII.2.9, p. 133).** Soit $X : \Lambda\times I\times U\to E$ comme dans le théorème VII.2.8 ([[ch07-cauchy-lipschitz-parametres]]) et $(\lambda_0,\tau_0,x_0)\in\Lambda\times I\times U$. Un **flot local** en $(\lambda_0,\tau_0,x_0)$ de $X$ est la donnée

* d'un voisinage ouvert $W$ de $\lambda_0$ dans $\Lambda$,
* d'un voisinage ouvert $U'$ de $x_0$ dans $U$,
* d'un intervalle ouvert $J$ contenant $\tau_0$ et contenu dans $I$,
* d'une constante $\epsilon>0$,
* et d'une application
$$
F : W\times\mathcal E\times U'\to U,\qquad\text{où}\qquad \mathcal E=\mathcal E(J,\epsilon)=\{(t_0,t)\in J\times\R\ |\ t\in\,]t_0-\epsilon,t_0+\epsilon[\},
$$

tels que pour tout $\lambda\in W$, pour tout $t_0\in J$, pour tout $x\in U'$,
$$
t\mapsto\alpha_{\lambda,t_0,x}(t)=F(\lambda,t_0,t,x)
$$
soit l'unique courbe intégrale de $X_\lambda$ définie sur $]t_0-\epsilon,t_0+\epsilon[$ de condition initiale $(t_0,x)$.

On note souvent un flot local $(W,J,2\epsilon,U',F)$ (le poly écrit par exemple « $(J_1,2\epsilon_1,U_1,F)$ un flot local en $(b,x_1)$ »). L'ensemble $\mathcal E$ est une bande « diagonale » ouverte et connexe de $\R^2$ : au-dessus de chaque instant initial $t_0\in J$, les instants $t$ admis forment l'intervalle $]t_0-\epsilon,t_0+\epsilon[$ (poly, Remarque VII.2.10, p. 133).

## Hypothèses

### H1 — Une durée $\epsilon$ uniforme

**Rôle.** $\epsilon$ ne dépend ni de $\lambda\in W$, ni de $t_0\in J$, ni de $x\in U'$ (poly, Remarque VII.2.10). C'est tout l'intérêt de la notion : dans le lemme des bouts ([[ch07-lemme-des-bouts]]) ou dans la preuve que le domaine du flot global est ouvert ([[ch07-flot-global-ouvert-regulier]]), on recouvre un compact par un nombre fini de flots locaux et on prend le plus petit des $\epsilon$.

**Si on l'oublie.** Pour un $x$ isolé, Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) donne bien une durée $\epsilon_x$, mais elle peut tendre vers $0$ : pour $X(x)=x^2$ sur $U=\R$ (sans paramètre), la solution de condition initiale $(t_0,x)$ avec $x>0$ est $t\mapsto x/(1-x(t-t_0))$, qui explose en $t_0+1/x$. Aucun $\epsilon>0$ ne convient pour tous les $x\in\R$ : c'est pourquoi $U'$ n'est qu'un **voisinage** de $x_0$ (voir l'exemple 2).

### H2 — L'unicité est imposée

**Rôle.** La définition demande que $t\mapsto F(\lambda,t_0,t,x)$ soit **l'unique** courbe intégrale de $X_\lambda$ sur $]t_0-\epsilon,t_0+\epsilon[$ de condition initiale $(t_0,x)$. Cela suppose implicitement l'unicité des solutions, garantie par l'hypothèse « localement lipschitzien en $x$ » ([[ch07-cauchy-lipschitz-parametres]]).

**Si on la retire.** Pour $X(t,x)=2\abs{x}^{1/2}$ sur $\R\times\R$, en $(\tau_0,x_0)=(0,0)$, il n'existe **aucun** flot local : pour tout $\epsilon>0$, les courbes $\alpha_1=0$ et $\alpha_2(t)=\operatorname{signe}(t)\,t^2$ sont deux courbes intégrales sur $]-\epsilon,\epsilon[$ de condition initiale $(0,0)$ (vérification : $\alpha_2'(t)=2\abs t=2\abs{\alpha_2(t)}^{1/2}$) ; voir [[ch07-peano-non-unicite]].

### H3 — Condition cachée : $]t_0-\epsilon,t_0+\epsilon[\subset I$

**Rôle.** Une courbe intégrale est définie sur un intervalle **contenu dans $I$** (là où le champ est défini). La définition impose donc implicitement $]t_0-\epsilon,t_0+\epsilon[\subset I$ pour tout $t_0\in J$ : $J$ doit être « loin » des bords de $I$ d'au moins $\epsilon$. Dans la construction du poly ($J=\,]\tau_0-\delta,\tau_0+\delta[$), c'est la condition $\epsilon+\delta\le a'$ avec $[\tau_0-2a',\tau_0+2a']\subset I$.

**Si on l'oublie.** Pour $I=\,]0,1[$, $J$ ne peut pas être $I$ tout entier : pour $t_0$ proche de $0$, l'intervalle $]t_0-\epsilon,t_0+\epsilon[$ déborde de $I$ et la « courbe intégrale » n'aurait pas de sens.

## Exemples

**Exemple 1 (champ linéaire à paramètre).** $\Lambda=I=U=E=\R$, $X_\lambda(t,x)=\lambda x$. La courbe intégrale de condition initiale $(t_0,x)$ est $t\mapsto x\,e^{\lambda(t-t_0)}$ (dérivée $\lambda x e^{\lambda(t-t_0)}$, valeur $x$ en $t_0$), définie sur $\R$. En tout point $(\lambda_0,\tau_0,x_0)$, on peut prendre $W=\R$, $J=\R$, $U'=\R$, n'importe quel $\epsilon>0$ et
$$
F(\lambda,t_0,t,x)=x\,e^{\lambda(t-t_0)}.
$$
L'unicité est celle de [[ch07-cauchy-lipschitz-parametres]] ($X$ est $C^\infty$ donc localement lipschitzien en $x$).

**Exemple 2 (un flot local qui ne peut pas être global en $x$).** Sans paramètre, $I=U=\R$, $X(t,x)=x^2$. Pour $(t_0,x)$ donné, $\alpha(t)=\dfrac{x}{1-x(t-t_0)}$ vérifie $\alpha(t_0)=x$ et
$$
\alpha'(t)=\frac{x\cdot x}{(1-x(t-t_0))^2}=\alpha(t)^2,
$$
sur l'intervalle où $1-x(t-t_0)>0$. Fixons $x_0\in\R$, $r>0$, $M=\abs{x_0}+r$, et prenons $U'=\,]x_0-r,x_0+r[$, $J=\R$, $\epsilon=1/M$. Si $x\in U'$ et $\abs{t-t_0}<\epsilon$, alors $\abs{x(t-t_0)}<M\cdot\frac1M=1$, donc $1-x(t-t_0)>0$ : $F(t_0,t,x)=\dfrac{x}{1-x(t-t_0)}$ est un flot local en $(\tau_0,x_0)$ (pour tout $\tau_0$). En revanche aucun flot local n'a $U'=\R$ : pour $x>1/\epsilon$, la solution explose avant $t_0+\epsilon$.

**Exemple 3 (le domaine $\mathcal E$).** Pour $J=\,]-1,1[$ et $\epsilon=\frac12$, $\mathcal E=\{(t_0,t)\ :\ -1<t_0<1,\ \abs{t-t_0}<\tfrac12\}$ est le parallélogramme ouvert de sommets $(-1,-\frac32)$, $(-1,-\frac12)$, $(1,\frac12)$, $(1,\frac32)$ dans le plan $(t_0,t)$ : une bande diagonale autour de la droite $t=t_0$. Il est convexe, donc connexe.

## Pièges

* > ⚠️ L'ordre des variables : $F(\lambda,t_0,t,x)$ = position à l'instant $t$ de la particule partie de $x$ à l'instant $t_0$. L'instant **initial** vient avant l'instant **courant**. Ne pas confondre avec $F(t,x)$ du cas autonome ([[ch07-flot-global-def]]).
* Le domaine de $F$ n'est **pas** $W\times J\times\,]\tau_0-\epsilon,\tau_0+\epsilon[\times U'$ : l'intervalle des $t$ est centré en $t_0$ (variable), d'où la bande $\mathcal E$.
* $F$ est à valeurs dans $U$, pas dans $U'$ : la trajectoire peut sortir du voisinage $U'$ de départ.
* Un flot local n'est **pas** le flot global ([[ch07-flot-global-def]]) : il ne donne que des morceaux de trajectoires de durée $2\epsilon$ ; le flot global recolle ces morceaux jusqu'à la durée de vie maximale.
* L'existence d'un flot local n'est pas dans la définition : c'est un théorème ([[ch07-existence-flot-local]]).
