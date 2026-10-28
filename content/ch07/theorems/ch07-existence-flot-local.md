---
id: ch07-existence-flot-local
type: theorem
chapter: 7
title: Existence et unicité du flot local ; régularité $C^p$
ref: Théorème VII.2.12
page: 133
importance: 3
depends: [ch07-cauchy-lipschitz-parametres, ch07-flot-local-def, ch07-localement-lipschitzien-def, ch07-equation-integrale, ch07-cauchy-lipschitz]
tags: [flot, flot-local, cauchy-lipschitz, parametres, unicite, regularite, classe-cp]
---
## Intuition

> 💡 Près de n'importe quel réglage $(\lambda_0,\tau_0,x_0)$, on peut lancer **toutes** les particules voisines (paramètre $\lambda$ proche de $\lambda_0$, instant de départ $t_0$ proche de $\tau_0$, point de départ $x$ proche de $x_0$) et les suivre pendant une **même** durée $\epsilon$ vers le futur et vers le passé ; la position obtenue $F(\lambda,t_0,t,x)$ dépend aussi régulièrement de toutes les variables que le champ lui-même. Autrement dit : un champ $C^p$ localement lipschitzien admet un **flot local** ([[ch07-flot-local-def]]) en chaque point, et ce flot est $C^p$.

C'est le théorème de Cauchy-Lipschitz à paramètres ([[ch07-cauchy-lipschitz-parametres]]) reformulé dans le langage des flots, avec en prime un énoncé d'**unicité** un peu plus fort : toute solution de même condition initiale, définie sur un intervalle plus court, est une restriction de $t\mapsto F(\lambda,t_0,t,x)$. Cette forme d'unicité est celle qu'on utilise sans cesse ensuite (unicité globale [[ch07-unicite-globale]], courbe maximale, lemme des bouts [[ch07-lemme-des-bouts]]).

Cadre ([[ch07-cauchy-lipschitz-parametres]]) : $E$ espace de Banach, $U$ ouvert de $E$, $I$ intervalle ouvert de $\R$, $\Lambda$ ouvert d'un espace métrique (si $p=0$) ou d'un espace de Banach (si $p\ge1$) ; $X : \Lambda\times I\times U\to E$, $X(\lambda,t,x)=X_\lambda(t,x)$, est de classe $C^p$ et **localement lipschitzien en $x$** ([[ch07-localement-lipschitzien-def]]) : tout point $(\lambda_1,t_1,x_1)$ a un voisinage sur lequel $\norm{X(\lambda,t,x)-X(\lambda,t,x')}\le k\norm{x-x'}$.

## Énoncé

**Théorème (poly, Théorème VII.2.12, p. 133).** Soient $X : \Lambda\times I\times U\to E$ comme dans le théorème VII.2.8 (de classe $C^p$, $p\ge0$, localement lipschitzien en la variable $x\in U$) et $(\lambda_0,\tau_0,x_0)\in\Lambda\times I\times U$. Alors il existe un voisinage ouvert $W$ de $\lambda_0$ dans $\Lambda$, un intervalle $J$ ouvert contenant $\tau_0$, un voisinage ouvert $U'$ de $x_0$ dans $U$ et une constante $\epsilon>0$ définissant un flot local $F : W\times\mathcal E(J,\epsilon)\times U'\to U$ en $(\lambda_0,\tau_0,x_0)$. Si le champ de vecteurs $X$ est de classe $C^p$, alors $F$ aussi, et $F$ est de classe $C^{p+1}$ en $t$.

L'énoncé d'unicité est le suivant : soient $\lambda\in W$, $t_0\in J$, $x\in U'$. Si
$$
\gamma : \,]t_0-\epsilon',t_0+\epsilon'[\,\to E
$$
avec $\epsilon'\le\epsilon$ vérifie $\gamma'(t)=X_\lambda(t,\gamma(t))$ et $\gamma(t_0)=x$, alors $\gamma(t)=\alpha_{\lambda,t_0,x}(t)=F(\lambda,t_0,t,x)$ pour tout $t\in\,]t_0-\epsilon',t_0+\epsilon'[$.

(Dans l'énoncé d'unicité, $\gamma$ est implicitement à valeurs dans $U$, pour que $X_\lambda(t,\gamma(t))$ ait un sens.)

## Hypothèses

### H1 — $X$ continue (et de classe $C^p$ pour la régularité)

**Rôle.** La continuité de $X$ fait de l'opérateur de Picard $\varphi\mapsto x+\int_{t_0}^t X_\lambda(s,\varphi(s))\,\dd s$ une application continue et rend l'équation différentielle équivalente à l'équation intégrale ([[ch07-equation-integrale]]) ; la classe $C^p$ de $X$ se transmet à $F$ via le point fixe à paramètre (preuve de [[ch07-cauchy-lipschitz-parametres]]).

**Si on la retire.** Sans continuité, il peut n'exister **aucune** courbe intégrale. Sur $I=U=E=\R$, sans paramètre, soit $X(t,x)=H(t)$ avec $H(t)=1$ si $t\ge0$ et $H(t)=0$ si $t<0$ ($X$ est constant en $x$, donc lipschitzien en $x$). Une courbe intégrale $\alpha$ sur un intervalle contenant $0$ aurait pour dérivée $H$, qui prend les valeurs $0$ et $1$ mais aucune valeur intermédiaire : c'est impossible, une dérivée vérifiant la propriété des valeurs intermédiaires (théorème de Darboux). Pas de flot local en $(0,x_0)$.

Pour la régularité : le gain « $C^{p+1}$ en $t$ » est optimal et ne s'étend pas aux autres variables. Avec $X(t,x)=\abs t$ ($p=0$), $F(t_0,t,x)=x+\frac12\big(t\abs t-t_0\abs{t_0}\big)$ (car $\frac{\dd}{\dd t}\frac{t\abs t}2=\abs t$) est $C^1$ en $t$ mais $\frac{\partial^2F}{\partial t^2}=\operatorname{signe}(t)$ est discontinue en $0$ : $F$ n'est pas $C^2$ en $t$.

### H2 — $X$ localement lipschitzien en $x$

**Rôle.** C'est l'ingrédient de l'**unicité** : il donne la contraction de l'opérateur de Picard (constante $k\epsilon\le\frac12$) dans [[ch07-cauchy-lipschitz-parametres]], et l'inégalité $\norm{\gamma(t)-\alpha(t)}\le k\abs{t-t_1}\sup\norm{\gamma-\alpha}$ dans la preuve de l'énoncé d'unicité ci-dessous.

**Si on la retire.** Pour $X(t,x)=2\abs x^{1/2}$ sur $\R\times\R$ (continu, non lipschitzien au voisinage de $x=0$), il n'existe pas de flot local en $(\tau_0,x_0)=(0,0)$ : pour tout $\epsilon>0$, $\alpha_1=0$ et $\alpha_2(t)=\operatorname{signe}(t)\,t^2$ sont deux courbes intégrales sur $]-\epsilon,\epsilon[$ de condition initiale $(0,0)$ (en effet $\alpha_2'(t)=2\abs t=2\abs{\alpha_2(t)}^{1/2}$). L'existence demeure (théorème de Peano, [[ch07-peano-non-unicite]]), mais pas l'unicité exigée par la définition du flot local.

### H3 — $\Lambda$ ouvert d'un espace métrique ($p=0$) ou d'un Banach ($p\ge1$)

**Rôle.** Hypothèse de structure : il faut pouvoir parler de voisinage $W=B(\lambda_0,\sigma)$ de $\lambda_0$, et pour $p\ge1$ de différentielle en $\lambda$ ; le point fixe à paramètre $C^p$ demande un ouvert d'un Banach.

**Si on la retire.** Pas de contre-exemple pertinent : sans structure sur $\Lambda$, l'énoncé « $F$ de classe $C^p$ » n'a simplement plus de sens. Sans paramètre ($\Lambda$ réduit à un point, [[ch07-sans-parametre-remarque]]), le théorème reste vrai tel quel.

### H4 — Unicité : $\gamma$ définie sur $]t_0-\epsilon',t_0+\epsilon'[$ avec $\epsilon'\le\epsilon$

**Rôle.** Garantit que l'intervalle de $\gamma$ est contenu dans $]t_0-\epsilon,t_0+\epsilon[$, où $F(\lambda,t_0,\cdot,x)$ est défini : la conclusion $\gamma=F(\lambda,t_0,\cdot,x)$ a un sens.

**Si on la retire.** Si $\epsilon'>\epsilon$, la conclusion n'a plus de sens au-delà de $t_0+\epsilon$ ; elle reste vraie sur $]t_0-\epsilon,t_0+\epsilon[$ (appliquer l'énoncé à la restriction de $\gamma$). La forme « centrée en $t_0$ » est de confort : la preuve ci-dessous marche telle quelle pour $\gamma$ définie sur **n'importe quel** intervalle ouvert contenant $t_0$ et contenu dans $]t_0-\epsilon,t_0+\epsilon[$ ; c'est l'unicité globale ([[ch07-unicite-globale]]).

## Idée de la preuve

Existence et régularité : on prend $W=B(\lambda_0,\sigma)$, $J=\,]\tau_0-\delta,\tau_0+\delta[$, $U'=B(x_0,\eta)$ et $\epsilon$ fournis par [[ch07-cauchy-lipschitz-parametres]]. Unicité sur un intervalle plus court : l'ensemble où $\gamma$ et $F(\lambda,t_0,\cdot,x)$ coïncident est non vide, fermé, et ouvert grâce à l'estimation lipschitzienne ; on conclut par connexité.

## Preuve

**Étape 1 : existence et régularité.** Le théorème de Cauchy-Lipschitz à paramètres ([[ch07-cauchy-lipschitz-parametres]]) appliqué en $(\lambda_0,\tau_0,x_0)$ fournit $\sigma,\eta,\delta,\epsilon>0$ tels que, pour $\lambda\in B(\lambda_0,\sigma)$, $t_0\in\,]\tau_0-\delta,\tau_0+\delta[$, $x\in B(x_0,\eta)$, le problème $\alpha'=X_\lambda(t,\alpha)$, $\alpha(t_0)=x$ possède une unique solution $\alpha_{\lambda,t_0,x}$ définie sur $]t_0-\epsilon,t_0+\epsilon[$, et tels que $F : (\lambda,t_0,t,x)\mapsto\alpha_{\lambda,t_0,x}(t)$ soit de classe $C^p$ sur $B(\lambda_0,\sigma)\times\mathcal E\times B(x_0,\eta)$, et $C^{p+1}$ en $t$. Posons
$$
W=B(\lambda_0,\sigma),\qquad J=\,]\tau_0-\delta,\tau_0+\delta[,\qquad U'=B(x_0,\eta).
$$
Vérifions les conditions de la définition [[ch07-flot-local-def]]. Dans la construction de [[ch07-cauchy-lipschitz-parametres]], $\sigma$ est choisi avec $B(\lambda_0,\sigma)\subset\Lambda$, $\eta$ avec $\bar B(x_0,2\eta)\subset U$, et $\delta,\epsilon$ avec $\delta+\epsilon\le a'$ où $[\tau_0-2a',\tau_0+2a']\subset I$. Donc $W$ est un voisinage ouvert de $\lambda_0$ dans $\Lambda$, $U'$ un voisinage ouvert de $x_0$ dans $U$, $J$ un intervalle ouvert contenant $\tau_0$ et contenu dans $I$, et pour $t_0\in J$, $]t_0-\epsilon,t_0+\epsilon[\subset I$. Les solutions sont à valeurs dans $\bar B(x_0,2\eta)\subset U$, donc $F$ est à valeurs dans $U$. Enfin, pour $(\lambda,t_0,x)\in W\times J\times U'$, $t\mapsto F(\lambda,t_0,t,x)$ est l'unique courbe intégrale de $X_\lambda$ sur $]t_0-\epsilon,t_0+\epsilon[$ de condition initiale $(t_0,x)$ : $F$ est un flot local en $(\lambda_0,\tau_0,x_0)$, de classe $C^p$, et $C^{p+1}$ en $t$.

**Étape 2 : unicité sur un intervalle plus court.** Le théorème VII.2.8 donne l'unicité parmi les solutions définies sur **tout** $]t_0-\epsilon,t_0+\epsilon[$ ; il faut l'étendre aux solutions définies sur $]t_0-\epsilon',t_0+\epsilon'[$, $\epsilon'\le\epsilon$. *Variante du poly :* le poly présente le théorème comme une simple reformulation de VII.2.8 ; on peut obtenir l'unicité sur l'intervalle plus court en refaisant la preuve de [[ch07-cauchy-lipschitz]] avec $b'=\epsilon'\le b$ (les contraintes $b\ell<a$, $bk\le\frac12$ restent vraies pour $b'$) ; voici un argument direct.

Soient $\lambda\in W$, $t_0\in J$, $x\in U'$, $\gamma$ comme dans l'énoncé, $J'=\,]t_0-\epsilon',t_0+\epsilon'[$ et $\alpha=\alpha_{\lambda,t_0,x}$ restreinte à $J'$. Posons
$$
A=\{t\in J'\ :\ \gamma(t)=\alpha(t)\}.
$$
* $A$ est **non vide** : $t_0\in A$ car $\gamma(t_0)=x=\alpha(t_0)$.
* $A$ est **fermé dans $J'$** : c'est l'image réciproque de $\{0\}$ par l'application continue $\gamma-\alpha$.
* $A$ est **ouvert**. Soit $t_1\in A$ et $y=\gamma(t_1)=\alpha(t_1)\in U$. Comme $X$ est localement lipschitzien en $x$, il existe un intervalle ouvert $J_1\ni t_1$, un rayon $r>0$ avec $B(y,r)\subset U$ et $k\ge0$ tels que $\norm{X_\lambda(s,z)-X_\lambda(s,z')}\le k\norm{z-z'}$ pour $s\in J_1$ et $z,z'\in B(y,r)$. Par continuité de $\gamma$ et $\alpha$ en $t_1$, on choisit $h>0$ tel que $[t_1-h,t_1+h]\subset J_1\cap J'$, que $\gamma(s),\alpha(s)\in B(y,r)$ pour $\abs{s-t_1}\le h$, et que $kh\le\frac12$. Soit $M=\sup_{\abs{s-t_1}\le h}\norm{\gamma(s)-\alpha(s)}$, fini par continuité sur un compact. Les courbes $\gamma$ et $\alpha$ sont de classe $C^1$ (leurs dérivées $X_\lambda(s,\gamma(s))$, $X_\lambda(s,\alpha(s))$ sont continues) et coïncident en $t_1$, donc ([[ch07-equation-integrale]]), pour $\abs{t-t_1}\le h$,
$$
\norm{\gamma(t)-\alpha(t)}=\Big\lVert\int_{t_1}^{t}\big(X_\lambda(s,\gamma(s))-X_\lambda(s,\alpha(s))\big)\dd s\Big\rVert\le k\,\abs{t-t_1}\,M\le\frac M2.
$$
En passant au sup sur $t$, $M\le M/2$, donc $M=0$ : $]t_1-h,t_1+h[\subset A$.

L'intervalle $J'$ étant connexe, la partie non vide, ouverte et fermée $A$ est égale à $J'$ : $\gamma(t)=F(\lambda,t_0,t,x)$ pour tout $t\in J'$. $\square$

## Preuve à trous

**Existence.** On applique [[ch07-cauchy-lipschitz-parametres]] en $(\lambda_0,\tau_0,x_0)$, qui fournit $\sigma,\eta,\delta,\epsilon$, et on pose <trou indice="trois voisinages fournis par le théorème à paramètres">$W=B(\lambda_0,\sigma)$, $J=\,]\tau_0-\delta,\tau_0+\delta[$, $U'=B(x_0,\eta)$</trou>. Les choix faits dans la construction ($\bar B(x_0,2\eta)\subset U$, $\delta+\epsilon\le a'$ avec $[\tau_0-2a',\tau_0+2a']\subset I$) garantissent $J\subset I$, $]t_0-\epsilon,t_0+\epsilon[\subset I$ et $F$ à valeurs dans $U$ ; la régularité $C^p$ (et $C^{p+1}$ en $t$) est celle du théorème à paramètres.

**Unicité.** Soit $A=\{t\in J'\ :\ \gamma(t)=\alpha(t)\}$, où $J'=\,]t_0-\epsilon',t_0+\epsilon'[$ et $\alpha=F(\lambda,t_0,\cdot,x)$. Il contient $t_0$ et il est fermé par continuité. Pour l'ouverture, en $t_1\in A$, $y=\gamma(t_1)$, on choisit $h>0$ tel que les deux courbes restent pour $\abs{s-t_1}\le h$ dans une boule $B(y,r)$ où $X_\lambda$ est $k$-lipschitzien en $x$, et <trou indice="condition de contraction">$kh\le\frac12$</trou>. Avec $M=\sup_{\abs{s-t_1}\le h}\norm{\gamma-\alpha}$, la forme intégrale donne <trou indice="écrire $\gamma-\alpha$ comme une intégrale entre $t_1$ et $t$">$\norm{\gamma(t)-\alpha(t)}\le\abs{\int_{t_1}^t k\norm{\gamma(s)-\alpha(s)}\dd s}\le kh M\le M/2$</trou>, d'où $M=0$. Enfin <trou indice="propriété topologique de $J'$">$J'$ est connexe, et $A$ est une partie non vide, ouverte et fermée de $J'$, donc $A=J'$</trou>. $\square$

## Exemples

**Exemple 1 (non autonome, explicite).** $I=U=E=\R$, sans paramètre, $X(t,x)=2tx$ (de classe $C^\infty$). La solution de condition initiale $(t_0,x)$ est $t\mapsto x\,e^{t^2-t_0^2}$ (dérivée $2t\,x\,e^{t^2-t_0^2}$). Le flot local en tout point peut être pris avec $J=U'=\R$ et $\epsilon$ quelconque : $F(t_0,t,x)=x\,e^{t^2-t_0^2}$, de classe $C^\infty$ comme $X$.

**Exemple 2 (les voisinages sont vraiment nécessaires).** Pour $X(t,x)=x^2$, la solution issue de $(t_0,x)$, $x>0$, explose en $t_0+1/x$ : le flot local en $(\tau_0,x_0)$ existe avec $U'=\,]x_0-r,x_0+r[$ et $\epsilon=1/(\abs{x_0}+r)$ (voir [[ch07-flot-local-def]]), mais aucun $\epsilon$ ne convient pour $U'=\R$. Le théorème ne promet qu'un voisinage $U'$ de $x_0$.

**Exemple 3 (régularité optimale en $t$).** $X(t,x)=\abs t$ est continu ($p=0$) et lipschitzien en $x$. Le flot $F(t_0,t,x)=x+\frac12(t\abs t-t_0\abs{t_0})$ est continu, $C^1$ en $t$ comme annoncé ($\partial_tF=\abs t$), mais pas $C^2$ en $t$ en $t=0$.

## Pièges

* > ⚠️ Le flot local est **local** : $W$, $J$, $U'$ et $\epsilon$ dépendent du point $(\lambda_0,\tau_0,x_0)$. Pour obtenir un $\epsilon$ uniforme sur un compact, il faut un argument de recouvrement fini (comme dans [[ch07-lemme-des-bouts]]).
* > ⚠️ L'unicité de la définition du flot local porte sur les solutions définies sur tout $]t_0-\epsilon,t_0+\epsilon[$ ; l'énoncé d'unicité du théorème couvre les intervalles plus courts. C'est cette version qu'on cite pour montrer que deux courbes intégrales coïncident près d'un point ([[ch07-unicite-globale]]).
* « $C^{p+1}$ en $t$ » ne veut pas dire « $C^{p+1}$ » : en $(\lambda,t_0,x)$ on n'a que $C^p$.
* $F$ est à valeurs dans $U$, pas forcément dans $U'$.
* Sans hypothèse lipschitzienne (seulement $X$ continu), Peano donne l'existence mais **pas** de flot local ([[ch07-peano-non-unicite]]).
