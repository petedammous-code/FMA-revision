---
id: ch07-cauchy-lipschitz-parametres
type: theorem
chapter: 7
title: Théorème de Cauchy-Lipschitz à paramètres (dépendance $C^p$ en $(\lambda,t_0,x)$)
ref: Théorème VII.2.8
page: 131
importance: 3
depends: [ch07-lemme-operateur-integral, ch06-point-fixe-parametre-continu, ch06-point-fixe-parametre-cp, ch07-cauchy-lipschitz, ch07-equation-integrale, ch07-localement-lipschitzien-def, ch05-composition-differentielles, ch05-theoreme-fondamental, ch06-differentiable-sur-partie-def, ch05-accroissements-finis-borne]
tags: [cauchy-lipschitz, parametres, dependance-reguliere, point-fixe, flot, classe-cp, condition-initiale]
---
## Intuition

> 💡 **Le théorème de Cauchy-Lipschitz, avec tous les boutons réglables.** On ne résout plus une seule équation mais une **famille** $\alpha'=X_\lambda(t,\alpha)$, où $\lambda$ est un paramètre (une masse, une constante de raideur, un coefficient...). Le théorème dit : si le champ dépend de façon $C^p$ du paramètre, la solution aussi. Mieux : la **condition initiale** $(t_0,x)$ est elle-même un paramètre comme les autres. La fonction $F(\lambda,t_0,t,x)$ = « position à l'instant $t$ de la particule qui était en $x$ à l'instant $t_0$, pour le réglage $\lambda$ » est de classe $C^p$ en **toutes** ses variables, et même $C^{p+1}$ en $t$ (puisque $\partial F/\partial t=X_\lambda(t,F)$ est déjà $C^p$).

Pourquoi c'est vrai : la solution est le point fixe de l'opérateur de Picard $T_\theta$ ([[ch07-cauchy-lipschitz]]), et $T_\theta$ dépend de façon $C^p$ du paramètre $\theta=(\lambda,t_0,x)$. Le théorème du point fixe **à paramètre** ([[ch06-point-fixe-parametre-continu]] pour $p=0$, [[ch06-point-fixe-parametre-cp]] pour $p\ge1$) dit exactement que le point fixe d'une contraction qui dépend de façon $C^p$ d'un paramètre est $C^p$ en ce paramètre. Toute la difficulté technique est de faire vivre tous les points fixes dans **un même** espace $\mathcal X$, indépendant de $\theta$ : c'est le rôle du changement de variable en temps qui ramène l'instant initial $t_0$ à l'instant de référence $\tau_0$.

Image : une nappe de trajectoires. Au-dessus de chaque condition initiale $(t_0,x)$ et de chaque réglage $\lambda$, une petite courbe de longueur $2\epsilon$ en temps ; le théorème dit que cette nappe est lisse, sans pli ni déchirure.

Vocabulaire. Un **champ de vecteurs dépendant du temps** $X : I\times U\to E$ et ses **courbes intégrales** sont définis dans [[ch07-champ-vecteurs-courbe-integrale-def]] ; **localement lipschitzien en la seconde variable** dans [[ch07-localement-lipschitzien-def]]. Pour $p\ge1$, « $X$ de classe $C^p$ » s'entend sur l'ouvert $\Lambda\times I\times U$ de l'espace de Banach $\Lambda$-ambiant $\times\R\times E$ ([[ch05-classe-ck-def]]) ; pour $p=0$ c'est la continuité. $B(\lambda_0,\sigma)$ est la boule ouverte de centre $\lambda_0$ et de rayon $\sigma$ ; $\mathcal L(E;F)$ l'espace des applications linéaires continues.

## Énoncé

**Théorème (poly, Théorème VII.2.8, p. 131 — Théorème de Cauchy-Lipschitz à paramètres).** Soit $X : \Lambda\times I\times U\to E$ une application de classe $C^p$, $p\ge0$, où $\Lambda$ est un ouvert d'un espace métrique si $p=0$ et d'un espace de Banach si $p\ge1$, $I$ est un intervalle ouvert de $\R$ et $U$ est un ouvert d'un espace de Banach $E$ (on voit $X$ comme une famille $(X_\lambda)_{\lambda\in\Lambda}$ de champs de vecteurs sur $U$). Supposons $X$ localement lipschitzien en la variable $x\in U$. Notons $X(\lambda,t,x)=X_\lambda(t,x)$.

Alors, pour tout $\lambda_0\in\Lambda$, pour tout $\tau_0\in I$ et pour tout $x_0\in U$, il existe $\sigma>0$, $\eta>0$, $\delta>0$ et $\epsilon>0$ tels que si $\lambda\in B(\lambda_0,\sigma)$, $x$ est dans $B(x_0,\eta)$ et $t_0$ est dans $]\tau_0-\delta\,;\tau_0+\delta[$, l'équation différentielle avec condition initiale
$$
\text{(VII.2.3)}\qquad
\begin{cases}
\alpha'(t)=X_\lambda(t,\alpha(t))\\
\alpha(t_0)=x
\end{cases}
$$
possède une unique solution $\alpha_{\lambda,t_0,x}$ définie sur $]t_0-\epsilon\,;t_0+\epsilon[$. Notons
$$
\mathcal E=\big\{(t_0,t)\in\,]\tau_0-\delta\,;\tau_0+\delta[\times\R\ \big|\ t\in\,]t_0-\epsilon\,;t_0+\epsilon[\big\}.
$$
C'est un ouvert connexe de $\R^2$. L'application
$$
F : (\lambda,t_0,t,x)\mapsto\alpha_{\lambda,t_0,x}(t)
$$
définie sur $B(\lambda_0,\sigma)\times\mathcal E\times B(x_0,\eta)$ est de classe $C^p$, et de classe $C^{p+1}$ en $t$.

*Lecture des hypothèses.* « $X$ localement lipschitzien en la variable $x$ » signifie : pour tout $(\lambda_1,t_1,x_1)\in\Lambda\times I\times U$, il existe un voisinage $W_1\times J_1\times U_1$ de ce point et $k\ge0$ tels que $\|X(\lambda,t,x)-X(\lambda,t,x')\|\le k\|x-x'\|$ pour tous $\lambda\in W_1$, $t\in J_1$, $x,x'\in U_1$ : la constante $k$ est **uniforme en $(\lambda,t)$** près du point. Pour $p\ge1$ cette hypothèse est automatiquement satisfaite ([[ch07-restriction-domaine-c1-lipschitz]]). « Unique » s'entend parmi **toutes** les courbes intégrales de $X_\lambda$ définies sur $]t_0-\epsilon\,;t_0+\epsilon[$ et valant $x$ en $t_0$ (pas seulement celles à valeurs dans une petite boule).

## Hypothèses

### H1 — $X$ est de classe $C^p$ en $(\lambda,t,x)$

**Rôle.** C'est ce qui rend l'opérateur de Picard $T : (\theta,\varphi)\mapsto T_\theta(\varphi)$ de classe $C^p$ en le couple (paramètre, fonction), condition d'entrée du théorème du point fixe à paramètre II ; pour $p=0$, la continuité de $T$ est la condition d'entrée de la version I.

**Si on la retire.** Si l'on garde seulement la continuité ($p=0$), $F$ n'est que continue : pour $X_\lambda(x)=|\lambda|$ ($\Lambda=\R$, $U=E=\R$ ; champ continu, constant donc lipschitzien en $x$), la solution de $\alpha'=|\lambda|$, $\alpha(0)=x$ est $F(\lambda,0,t,x)=x+|\lambda|t$, qui n'est pas dérivable en $\lambda=0$ pour $t\ne0$. La régularité $C^p$ de la conclusion ne peut donc pas dépasser celle de $X$ en $\lambda$. (Pour $X_\lambda(x)=\lambda$, $C^\infty$, on trouve bien $F=x+\lambda t$ de classe $C^\infty$.)

### H2 — $\Lambda$ est un ouvert d'un espace de Banach ($p\ge1$), d'un espace métrique ($p=0$)

**Rôle.** Pour $p\ge1$, différentier en $\lambda$ n'a de sens que sur un ouvert d'un espace vectoriel normé, et la version II du point fixe à paramètre exige un ouvert d'un **Banach**. Pour $p=0$, la structure métrique sert seulement à écrire la boule $B(\lambda_0,\sigma)$.

**Si on la retire.** Hypothèse de structure. Pour $p=0$, un espace topologique $\Lambda$ quelconque convient en remplaçant $B(\lambda_0,\sigma)$ par un voisinage ouvert $W$ de $\lambda_0$ (la version I est énoncée pour un espace topologique) : la preuve est inchangée. Pour $p\ge1$ la question ne se pose pas : sans structure vectorielle, « $C^p$ en $\lambda$ » n'a pas de sens.

### H3 — $X$ est localement lipschitzien en $x$, uniformément en $(\lambda,t)$

**Rôle.** Fournit la constante de contraction $k\epsilon\le\frac12$ **commune à tous les $\theta=(\lambda,t_0,x)$** : c'est elle qui donne l'unicité, et l'uniformité de $k$ est indispensable pour que le même $\epsilon$ serve pour tous les paramètres et que le point fixe à paramètre s'applique (constante $a<1$ uniforme en $\lambda$ dans [[ch06-point-fixe-parametre-continu]] et [[ch06-point-fixe-parametre-cp]]).

**Si on la retire.** Pour $p\ge1$, elle est automatique (le champ $C^1$ a une différentielle partielle $\partial X/\partial x$ bornée près de chaque point, [[ch07-restriction-domaine-c1-lipschitz]]) : on ne peut pas la retirer. Pour $p=0$, sans aucune hypothèse lipschitzienne, l'unicité tombe et $F$ n'est même pas définie : $X_\lambda(x)=2|x|^{1/2}$ (indépendant de $\lambda$) a une infinité de solutions issues de $(0,0)$ ([[ch07-peano-non-unicite]]). Si l'on suppose seulement chaque $X_\lambda$ lipschitzien avec une constante $k(\lambda)$ non bornée près de $\lambda_0$ (exemple : $X(\lambda,x)=|\lambda|\sin(x/\lambda^2)$ pour $\lambda\ne0$, $X(0,x)=0$, continu, $\frac1{|\lambda|}$-lipschitzien en $x$), l'hypothèse tombe et la preuve ne fonctionne plus (pas de contraction uniforme). Dans cet exemple particulier la conclusion reste néanmoins vraie : pour $\lambda\ne0$ le théorème s'applique au voisinage de $(\lambda,\tau_0,x_0)$, chaque $X_\lambda$ étant borné par $|\lambda|$ et globalement lipschitzien les solutions sont définies sur $\R$ tout entier, et l'estimation $|F(\lambda,t_0,t,x)-x|\le|\lambda|\,|t-t_0|$ (intégrer $|\alpha'|\le|\lambda|$) donne la continuité de $F$ en $\lambda=0$, où $F(0,t_0,t,x)=x$. Mais cela se vérifie à la main ; en général, pour un champ seulement continu dont les solutions sont uniques, la continuité du flot est un résultat de dimension finie (théorème de Kamke, hors programme) et non une conséquence de la preuve du poly.

### H4 — $E$ est un espace de Banach, $U$ est ouvert, $I$ est un intervalle ouvert

**Rôle.** Identique à [[ch07-cauchy-lipschitz]] (H1, H2) : complétude de $\mathcal X=C^0([\tau_0-\epsilon\,;\tau_0+\epsilon],\bar B(x_0,2\eta))$ pour le point fixe, place pour une boule fermée $\bar B(x_0,2\eta)\subset U$ et un segment $[\tau_0-2a'\,;\tau_0+2a']\subset I$.

**Si on la retire.** Les contre-exemples de [[ch07-cauchy-lipschitz]] s'appliquent mot pour mot (décalage sur l'espace $c_{00}$ des suites à support fini : pas de solution ; $U=[0\,;+\infty[$ et $X=-1$ : la solution sort de $U$).

## Idée de la preuve

Un changement de variable en temps ($\beta(t)=\alpha(t-\tau_0+t_0)$) transforme l'instant initial $t_0$ en un paramètre et ramène tous les problèmes à l'instant $\tau_0$, dans un **même** espace $\mathcal X$. L'opérateur de Picard $T_\theta$, $\theta=(\lambda,t_0,x)$, est alors une contraction de $\mathcal X$ dépendant de façon $C^p$ de $\theta$ (lemme [[ch07-lemme-operateur-integral]]) ; le point fixe à paramètre (version I si $p=0$, version II si $p\ge1$) donne $\theta\mapsto\beta_\theta$ de classe $C^p$. On revient à $\alpha$, et $\partial F/\partial t=X_\lambda(t,F)$ donne la régularité $C^{p+1}$ en $t$.

## Preuve

Fixons $(\lambda_0,\tau_0,x_0)\in\Lambda\times I\times U$.

**Étape 1 : les constantes.** Par l'hypothèse « localement lipschitzien en $x$ » au point $(\lambda_0,\tau_0,x_0)$ et par ouverture de $\Lambda$, $I$, $U$, il existe $\sigma>0$, $a>0$, $a'>0$ et $k>0$ tels que $B(\lambda_0,\sigma)\subset\Lambda$, $\bar B(x_0,2a)\subset U$, $[\tau_0-2a'\,;\tau_0+2a']\subset I$, et
$$
\|X(\lambda,t,x)-X(\lambda,t,x')\|\le k\|x-x'\|\qquad\text{pour }\lambda\in B(\lambda_0,\sigma),\ t\in[\tau_0-2a'\,;\tau_0+2a'],\ x,x'\in\bar B(x_0,2a).
$$
Par continuité de $X$ en $(\lambda_0,\tau_0,x_0)$, quitte à diminuer $\sigma$, $a$, $a'$, on a $\|X(\lambda,t,x)-X(\lambda_0,\tau_0,x_0)\|\le1$ sur cette boîte, donc $\|X\|\le\ell:=1+\|X(\lambda_0,\tau_0,x_0)\|$ sur la boîte $B(\lambda_0,\sigma)\times[\tau_0-2a'\,;\tau_0+2a']\times\bar B(x_0,2a)$. (Le poly dit : « exactement comme dans la démonstration précédente », [[ch07-cauchy-lipschitz]], étape 1.) Quitte à diminuer encore $a$, on suppose aussi la boule **ouverte** $B(x_0,3a)$ contenue dans $U$ (possible car $U$ est ouvert ; cette marge servira à l'étape 5 — attention, en dimension infinie $\bar B(x_0,2a)\subset U$ ne donne pas à elle seule une boule plus grande dans $U$, la boule fermée n'étant pas compacte). Posons $\eta:=a$, et choisissons $\delta>0$ et $\epsilon>0$ tels que
$$
\epsilon+\delta\le a',\qquad\epsilon\,\ell\le\eta,\qquad\epsilon\,k\le\tfrac12.
$$

**Étape 2 : réduction à $t_0=\tau_0$.** Pour $(\lambda,t_0)\in B(\lambda_0,\sigma)\times\,]\tau_0-\delta\,;\tau_0+\delta[$, $t\in[\tau_0-\epsilon\,;\tau_0+\epsilon]$ et $y\in U$ tel que $(\lambda,t-\tau_0+t_0,y)$ soit dans le domaine de $X$, posons
$$
\tilde X_{\lambda,t_0}(t,y):=X_\lambda\big(t-(\tau_0-t_0),\,y\big)=X(\lambda,\,t-\tau_0+t_0,\,y).
$$
L'instant $t-\tau_0+t_0$ s'écarte de $\tau_0$ d'au plus $|t-\tau_0|+|t_0-\tau_0|<\epsilon+\delta\le a'$, donc appartient à $[\tau_0-2a'\,;\tau_0+2a']\subset I$ : $\tilde X_{\lambda,t_0}$ est bien définie sur $[\tau_0-\epsilon\,;\tau_0+\epsilon]\times\bar B(x_0,2\eta)$. C'est $X$ composée avec l'application affine $(\lambda,t_0,t,y)\mapsto(\lambda,t-\tau_0+t_0,y)$ : $\tilde X$ est donc de classe $C^p$ en $(\lambda,t_0,t,y)$ ([[ch05-composition-differentielles]]), continue, et, à $(\lambda,t_0)$ fixé, **$k$-lipschitzienne en $y$ et majorée par $\ell$** sur $[\tau_0-\epsilon\,;\tau_0+\epsilon]\times\bar B(x_0,2\eta)$, avec les mêmes constantes que $X$ (une translation en temps ne change rien).

Le bénéfice : si $\alpha$ est une courbe intégrale de $X_\lambda$ définie sur $]t_0-\epsilon\,;t_0+\epsilon[$ avec $\alpha(t_0)=x$, alors $\beta(t):=\alpha(t-\tau_0+t_0)$, définie sur $]\tau_0-\epsilon\,;\tau_0+\epsilon[$, vérifie
$$
\beta'(t)=\alpha'(t-\tau_0+t_0)=X_\lambda\big(t-\tau_0+t_0,\alpha(t-\tau_0+t_0)\big)=\tilde X_{\lambda,t_0}(t,\beta(t)),\qquad\beta(\tau_0)=\alpha(t_0)=x,
$$
et réciproquement $\alpha(t)=\beta(t+\tau_0-t_0)$ redonne $\alpha$ à partir de $\beta$. Autrement dit, **$t_0$ cesse d'être un instant initial pour devenir un paramètre**, au même titre que $\lambda$ et $x$ : il suffit de résoudre tous les problèmes à l'instant $\tau_0$.

**Étape 3 : l'opérateur de Picard à paramètre.** Posons
$$
\mathcal X:=C^0\big([\tau_0-\epsilon\,;\tau_0+\epsilon],\,\bar B(x_0,2\eta)\big),\qquad
\Theta:=B(\lambda_0,\sigma)\times\,]\tau_0-\delta\,;\tau_0+\delta[\,\times B(x_0,\eta),
$$
et, pour $\theta=(\lambda,t_0,x)\in\Theta$ et $\varphi\in\mathcal X$,
$$
T : \Theta\times\mathcal X\to\mathcal X,\qquad T_\theta(\varphi)(t)=T(\theta,\varphi)(t)=x+\int_{\tau_0}^t\tilde X_{\lambda,t_0}(s,\varphi(s))\,ds.
$$
L'espace $\mathcal X$ **ne dépend plus d'aucun paramètre** : c'est là tout le bénéfice de la réduction. Le lemme [[ch07-lemme-operateur-integral]], appliqué avec $c=\tau_0$, $\rho=\eta$, $\epsilon$, et $Y=\tilde X_{\lambda,t_0}$ (continue, majorée par $\ell$, $k$-lipschitzienne en $y$), montre, puisque $\epsilon\ell\le\eta$ et $\epsilon k\le\frac12$ et $x\in B(x_0,\eta)\subset\bar B(x_0,\rho)$ : $\mathcal X$ est un fermé convexe de l'espace de Banach $C^0([\tau_0-\epsilon\,;\tau_0+\epsilon],E)$ (donc complet), $T_\theta$ envoie $\mathcal X$ dans $\mathcal X$, et $T_\theta$ est $\frac12$-lipschitzienne pour $\|\cdot\|_\infty$, **pour tout $\theta\in\Theta$**. Enfin, d'après [[ch07-equation-integrale]], $\varphi\in\mathcal X$ est un point fixe de $T_\theta$ si et seulement si $\varphi$ est $C^1$ et vérifie $\varphi'(t)=\tilde X_{\lambda,t_0}(t,\varphi(t))$ sur $[\tau_0-\epsilon\,;\tau_0+\epsilon]$ avec $\varphi(\tau_0)=x$.

**Étape 4 : cas $p=0$.** Montrons que $T$ est continue sur $\Theta\times\mathcal X$. Soient $(\theta,\varphi)\in\Theta\times\mathcal X$ et $(\theta_n,\varphi_n)\to(\theta,\varphi)$. L'ensemble $K=\{(\lambda,t_0,s,\varphi(s))\ :\ |s-\tau_0|\le\epsilon\}$ est compact (image continue d'un segment). Comme $\tilde X$ (vue comme fonction continue de $(\lambda,t_0,s,y)$) est continue en chaque point de $K$, pour tout $\eta'>0$ il existe $r>0$ tel que $\|\tilde X(q)-\tilde X(p)\|\le\eta'$ dès que $p\in K$ et $d(q,p)<r$ : on recouvre $K$ par un nombre fini de boules $B(p_i,r_i)$ sur chacune desquelles l'oscillation de $\tilde X$ sur $B(p_i,2r_i)$ est $\le\eta'/2$, et $r=\min r_i$ convient. Pour $n$ grand, $d(\theta_n,\theta)+\|\varphi_n-\varphi\|_\infty<r$, donc pour tout $s$, le point $(\lambda_n,t_{0,n},s,\varphi_n(s))$ est à distance $<r$ de $(\lambda,t_0,s,\varphi(s))\in K$, d'où
$$
\|T(\theta_n,\varphi_n)-T(\theta,\varphi)\|_\infty\le\|x_n-x\|+\epsilon\,\eta'.
$$
Ainsi $T$ est continue. La version I du théorème du point fixe à paramètre ([[ch06-point-fixe-parametre-continu]] : $\Theta$ espace topologique, $\mathcal X$ complet, $T$ continue, chaque $T_\theta$ $\frac12$-lipschitzienne) donne, pour tout $\theta\in\Theta$, l'existence et l'unicité du point fixe $\beta_\theta\in\mathcal X$ de $T_\theta$, et la **continuité** de $\theta\mapsto\beta_\theta$ de $\Theta$ dans $\mathcal X$.

**Étape 5 : cas $p\ge1$.** Ici $\Theta$ est un ouvert de l'espace de Banach $\Lambda\times\R\times E$ ($\Lambda$ désignant l'espace de Banach ambiant) et $\mathcal X$ un fermé convexe de l'espace de Banach $C^0([\tau_0-\epsilon\,;\tau_0+\epsilon],E)$. L'application $T$ est de classe $C^p$ sur $\Theta\times\mathcal X$ au sens de [[ch06-differentiable-sur-partie-def]] : elle se prolonge par la même formule à l'ouvert $\Theta\times\mathcal X'$, où $\mathcal X'=C^0([\tau_0-\epsilon\,;\tau_0+\epsilon],B(x_0,3\eta))$ est un ouvert de $C^0([\tau_0-\epsilon\,;\tau_0+\epsilon],E)$ contenant $\mathcal X$ (on a choisi $B(x_0,3\eta)\subset U$ à l'étape 1, de sorte que $\tilde X_{\lambda,t_0}(s,\varphi(s))$ garde un sens pour $\varphi\in\mathcal X'$), et le prolongement est $C^p$. En effet $T(\theta,\varphi)=x+\mathcal I\big(\Phi(\theta,\varphi)\big)$, où $\mathcal I(\psi)(t)=\int_{\tau_0}^t\psi(s)\,ds$ est linéaire continue de $C^0$ dans $C^0$ (norme $\le\epsilon$), $\theta\mapsto x$ est linéaire continue, et $\Phi(\theta,\varphi) : s\mapsto\tilde X_{\lambda,t_0}(s,\varphi(s))$ est l'opérateur de composition, de classe $C^p$ par l'argument de l'exercice V.6.6 du poly (p. 113), que voici pour $p=1$ : $\Phi$ est différentiable en $(\theta,\varphi)$, de différentielle
$$
d\Phi_{(\theta,\varphi)}(h,\psi) : s\mapsto d\tilde X_{(\theta,s,\varphi(s))}\cdot(h,0,\psi(s)),
$$
car, par le théorème fondamental ([[ch05-theoreme-fondamental]]) appliqué à $\tilde X$ entre $(\theta,s,\varphi(s))$ et $(\theta+h,s,\varphi(s)+\psi(s))$, le reste vaut $\int_0^1\big[d\tilde X_{(\theta+uh,s,\varphi(s)+u\psi(s))}-d\tilde X_{(\theta,s,\varphi(s))}\big]\cdot(h,0,\psi(s))\,du$, de norme $\le\omega(\|(h,\psi)\|)\,\|(h,\psi)\|$ **uniformément en $s$**, où $\omega(r)\to0$ est l'oscillation de $d\tilde X$ à distance $\le r$ du compact $K$ (même argument de recouvrement fini qu'à l'étape 4, appliqué à $d\tilde X$) ; la continuité de $(\theta,\varphi)\mapsto d\Phi_{(\theta,\varphi)}$ s'obtient de la même façon, et la classe $C^p$ par récurrence (la formule de $d\Phi$ a la même forme avec $d\tilde X$, de classe $C^{p-1}$, à la place de $\tilde X$). La différentielle partielle de $T$ en $\varphi$ s'écrit
$$
\Big(\frac{\partial T}{\partial\varphi}(\theta,\varphi)\cdot\psi\Big)(t)=\int_{\tau_0}^t\frac{\partial\tilde X_{\lambda,t_0}}{\partial y}\big(s,\varphi(s)\big)\cdot\psi(s)\,ds,
$$
et comme $\tilde X_{\lambda,t_0}$ est $k$-lipschitzienne en $y$ sur $\bar B(x_0,2\eta)$, $\big\|\frac{\partial\tilde X_{\lambda,t_0}}{\partial y}(s,y)\big\|\le k$ pour $y\in\bar B(x_0,2\eta)$ (pour une application différentiable et $k$-lipschitzienne, $\|dY_y(h)\|=\lim_{u\to0^+}\|Y(y+uh)-Y(y)\|/u\le k\|h\|$ aux points $y$ de la boule ouverte, puis aux points de la boule fermée par continuité de $\partial\tilde X/\partial y$), d'où
$$
\Big\|\frac{\partial T}{\partial\varphi}(\theta,\varphi)\Big\|\le k\,\epsilon\le\tfrac12\qquad\text{pour tout }(\theta,\varphi)\in\Theta\times\mathcal X.
$$
Les hypothèses de la version II ([[ch06-point-fixe-parametre-cp]]) sont réunies — $\Theta$ ouvert d'un Banach, $\mathcal X$ fermé convexe d'un Banach, $T(\Theta\times\mathcal X)\subset\mathcal X$ de classe $C^p$, différentielle partielle de norme $\le\frac12<1$ — donc, pour tout $\theta\in\Theta$, $T_\theta$ possède un unique point fixe $\beta_\theta\in\mathcal X$, et $\theta\mapsto\beta_\theta$ est de classe $C^p$ de $\Theta$ dans $\mathcal X\subset C^0([\tau_0-\epsilon\,;\tau_0+\epsilon],E)$.

**Étape 6 : retour à $\alpha$ ; existence et unicité.** Soit $\theta=(\lambda,t_0,x)\in\Theta$. Posons, pour $t\in\,]t_0-\epsilon\,;t_0+\epsilon[$,
$$
\alpha_{\lambda,t_0,x}(t):=\beta_\theta\big(t+(\tau_0-t_0)\big).
$$
D'après l'étape 2, c'est une courbe intégrale de $X_\lambda$ de condition initiale $(t_0,x)$, à valeurs dans $\bar B(x_0,2\eta)\subset U$ : **existence**. **Unicité** : soit $\gamma : ]t_0-\epsilon\,;t_0+\epsilon[\to U$ une courbe intégrale quelconque de $X_\lambda$ avec $\gamma(t_0)=x$, et $\tilde\gamma(t)=\gamma(t-\tau_0+t_0)$, solution de $\tilde\gamma'=\tilde X_{\lambda,t_0}(t,\tilde\gamma)$, $\tilde\gamma(\tau_0)=x$ sur $]\tau_0-\epsilon\,;\tau_0+\epsilon[$. Comme dans l'étape 4 de [[ch07-cauchy-lipschitz]], $\tilde\gamma$ reste dans $\bar B(x_0,2\eta)$ : sur l'ensemble $J$ des $t$ tels que $\|\tilde\gamma(s)-x_0\|<2\eta$ pour tout $s$ entre $\tau_0$ et $t$ (intervalle contenant $\tau_0$, ouvert par continuité), on a $\|\tilde\gamma'\|\le\ell$, donc par l'inégalité des accroissements finis ([[ch05-accroissements-finis-borne]]) $\|\tilde\gamma(t)-x_0\|\le\|x-x_0\|+\ell|t-\tau_0|<\eta+\epsilon\ell\le2\eta$ (inégalité stricte car $x\in B(x_0,\eta)$), majoration par une constante $<2\eta$ qui passe à la limite : $J$ est fermé, donc égal à $]\tau_0-\epsilon\,;\tau_0+\epsilon[$ par connexité. Pour tout $\epsilon''<\epsilon$, la restriction de $\tilde\gamma$ à $[\tau_0-\epsilon''\,;\tau_0+\epsilon'']$ est alors un point fixe de l'opérateur $T_\theta$ défini sur $C^0([\tau_0-\epsilon''\,;\tau_0+\epsilon''],\bar B(x_0,2\eta))$ (les conditions $\epsilon''\ell\le\eta$, $\epsilon''k\le\frac12$ sont a fortiori vraies, et le lemme s'applique), tout comme la restriction de $\beta_\theta$ : par unicité du point fixe, $\tilde\gamma=\beta_\theta$ sur chaque tel segment, donc sur $]\tau_0-\epsilon\,;\tau_0+\epsilon[$, et $\gamma=\alpha_{\lambda,t_0,x}$.

**L'ensemble $\mathcal E$.** $\mathcal E=\{(t_0,t)\ :\ |t_0-\tau_0|<\delta,\ |t-t_0|<\epsilon\}$ est l'image du rectangle ouvert convexe $]\tau_0-\delta\,;\tau_0+\delta[\times]-\epsilon\,;\epsilon[$ par l'isomorphisme linéaire $(t_0,u)\mapsto(t_0,t_0+u)$ de $\R^2$ : c'est un ouvert convexe, donc connexe, de $\R^2$ (un parallélogramme). Pour $(\lambda,t_0,t,x)\in B(\lambda_0,\sigma)\times\mathcal E\times B(x_0,\eta)$, $F(\lambda,t_0,t,x)=\alpha_{\lambda,t_0,x}(t)=\beta_{(\lambda,t_0,x)}(t+\tau_0-t_0)$ est bien défini.

**Étape 7 : régularité de $F$.** Le poly conclut ainsi : $\theta\mapsto\beta_\theta$ étant de classe $C^p$ à valeurs dans $\mathcal X$, $F$ est de classe $C^p$ en $(\lambda,t_0,x)$ ; elle est de classe $C^1$ en $t$ avec $\partial F/\partial t=X_\lambda(t,F)$, et une récurrence immédiate montre qu'elle est $C^{p+1}$ en $t$ ; « on en déduit que $F$ est de classe $C^p$ ». Le passage de la régularité en $\theta$ à $\varphi$ fixée (dans $\mathcal X$, norme uniforme) à la régularité **jointe** en $(\theta,t)$ mérite une justification, que voici.

*Variante du poly (régularité jointe par un second paramètre).* Pour $(\theta,s)\in\Theta':=\Theta\times\,]\tau_0-\epsilon\,;\tau_0+\epsilon[$ et $u\in[-1\,;1]$, posons $\gamma_{\theta,s}(u):=\beta_\theta\big(\tau_0+u(s-\tau_0)\big)$ (bien défini : $|u(s-\tau_0)|\le|s-\tau_0|<\epsilon$). Le changement de variable $r'=\tau_0+v(s-\tau_0)$, $dr'=(s-\tau_0)\,dv$, dans l'équation intégrale $\beta_\theta(r)=x+\int_{\tau_0}^r\tilde X_{\lambda,t_0}(r',\beta_\theta(r'))\,dr'$ écrite en $r=\tau_0+u(s-\tau_0)$ montre que $\gamma_{\theta,s}$ est un point fixe, dans $\mathcal Y:=C^0([-1\,;1],\bar B(x_0,2\eta))$, de
$$
R_{(\theta,s)}(\gamma)(u)=x+\int_0^u\hat Y(\theta,s,v,\gamma(v))\,dv,\qquad\hat Y(\theta,s,v,y):=(s-\tau_0)\,\tilde X_{\lambda,t_0}\big(\tau_0+v(s-\tau_0),\,y\big).
$$
Le champ $\hat Y$ est continu, de classe $C^p$ en $(\theta,s,v,y)$ (composée de $\tilde X$ et d'une application polynomiale ; pour $|v|\le1$ l'instant $\tau_0+v(s-\tau_0)$ reste dans $]\tau_0-\epsilon\,;\tau_0+\epsilon[$), majoré en norme par $\hat\ell:=\epsilon\ell\le\eta$ et $\hat k$-lipschitzien en $y$ avec $\hat k:=\epsilon k\le\frac12$. Le lemme [[ch07-lemme-operateur-integral]], appliqué avec $c=0$, demi-longueur $\epsilon_{\text{lemme}}=1$, $\rho=\eta$ et $Y=\hat Y(\theta,s,\cdot,\cdot)$ (conditions : $1\cdot\hat\ell\le\eta$ et $1\cdot\hat k\le\frac12$), montre que $R_{(\theta,s)}$ envoie $\mathcal Y$ dans $\mathcal Y$ et y est $\frac12$-lipschitzien ; $\gamma_{\theta,s}$ est donc **son unique** point fixe. Les étapes 4 et 5, recopiées avec $\Theta'$ (ouvert de $\Lambda\times\R\times E\times\R$) à la place de $\Theta$, $[-1\,;1]$ à la place de $[\tau_0-\epsilon\,;\tau_0+\epsilon]$ et $\hat Y$ à la place de $\tilde X$ (la borne $\|\partial R/\partial\gamma\|\le1\cdot\hat k\le\frac12$ remplace $k\epsilon\le\frac12$), donnent que $(\theta,s)\mapsto\gamma_{\theta,s}$ est de classe $C^p$ de $\Theta'$ dans $\mathcal Y$ (continue si $p=0$). Comme l'évaluation $\mathrm{ev}_1 : \gamma\mapsto\gamma(1)$ est linéaire continue sur $C^0([-1\,;1],E)$,
$$
G(\theta,s):=\beta_\theta(s)=\gamma_{\theta,s}(1)=\mathrm{ev}_1(\gamma_{\theta,s})
$$
est de classe $C^p$ sur $\Theta'$, et $F(\lambda,t_0,t,x)=G\big((\lambda,t_0,x),\,t+\tau_0-t_0\big)$ est de classe $C^p$ sur $B(\lambda_0,\sigma)\times\mathcal E\times B(x_0,\eta)$ comme composée avec une application affine ([[ch05-composition-differentielles]]).

*Régularité $C^{p+1}$ en $t$.* À $(\lambda,t_0,x)$ fixé, $t\mapsto F(\lambda,t_0,t,x)=\alpha_{\lambda,t_0,x}(t)$ est $C^1$ et
$$
\frac{\partial F}{\partial t}(\lambda,t_0,t,x)=X_\lambda\big(t,F(\lambda,t_0,t,x)\big)=X\big(\lambda,t,F(\lambda,t_0,t,x)\big).
$$
Le membre de droite est composé de $X$ (classe $C^p$) et de $(\lambda,t_0,t,x)\mapsto(\lambda,t,F(\lambda,t_0,t,x))$ (classe $C^p$) : $\partial F/\partial t$ est de classe $C^p$, en particulier $C^p$ en $t$, donc $t\mapsto F$ est de classe $C^{p+1}$. (C'est la « récurrence immédiate » du poly : si $\alpha$ est $C^j$ avec $j\le p$, alors $\alpha'=X_\lambda(t,\alpha)$ est $C^j$, donc $\alpha$ est $C^{j+1}$.) $\square$

## Preuve à trous

**Réduction.** Pour $\theta=(\lambda,t_0,x)$, on pose $\tilde X_{\lambda,t_0}(t,y)=X_\lambda(t-\tau_0+t_0,y)$ : si $\alpha$ résout (VII.2.3), alors <trou indice="translater le temps pour ramener $t_0$ en $\tau_0$">$\beta(t)=\alpha(t-\tau_0+t_0)$ vérifie $\beta'=\tilde X_{\lambda,t_0}(t,\beta)$, $\beta(\tau_0)=x$</trou>, et réciproquement ; $t_0$ devient un **paramètre**, et tous les problèmes vivent dans le même espace $\mathcal X=C^0([\tau_0-\epsilon\,;\tau_0+\epsilon],\bar B(x_0,2\eta))$.

**Contraction uniforme.** Constantes $k,\ell$ uniformes en $\lambda\in B(\lambda_0,\sigma)$ (localement lipschitzien + continuité en $(\lambda_0,\tau_0,x_0)$) ; on choisit $\epsilon,\delta$ avec <trou indice="trois conditions : rester dans $I$, stabilité de la boule, contraction">$\epsilon+\delta\le a'$, $\epsilon\ell\le\eta$, $\epsilon k\le\frac12$</trou>. Le Lemme VII.2.7 ($c=\tau_0$, $\rho=\eta$) montre que $T_\theta(\varphi)(t)=x+\int_{\tau_0}^t\tilde X_{\lambda,t_0}(s,\varphi(s))\,ds$ envoie $\mathcal X$ dans $\mathcal X$ et y est $\frac12$-lipschitzien pour **tout** $\theta\in\Theta=B(\lambda_0,\sigma)\times]\tau_0-\delta\,;\tau_0+\delta[\times B(x_0,\eta)$.

**Point fixe à paramètre.** Cas $p=0$ : $T$ est continue sur $\Theta\times\mathcal X$ (continuité uniforme de $\tilde X$ près d'un compact), et <trou indice="quel théorème du chapitre VI ?">la version I du point fixe à paramètre (Théorème VI.1.2) donne $\theta\mapsto\beta_\theta$ continue</trou>. Cas $p\ge1$ : $T$ est $C^p$ (opérateur de composition, exercice V.6.6), et <trou indice="borne sur la différentielle partielle en $\varphi$">$\big\|\frac{\partial T}{\partial\varphi}\big\|\le k\epsilon\le\frac12$ car $\big(\frac{\partial T}{\partial\varphi}\cdot\psi\big)(t)=\int_{\tau_0}^t\frac{\partial\tilde X}{\partial y}(s,\varphi(s))\cdot\psi(s)\,ds$ et $\|\partial\tilde X/\partial y\|\le k$</trou> ; la version II (Théorème VI.1.4) donne $\theta\mapsto\beta_\theta$ de classe $C^p$.

**Retour.** $\alpha_{\lambda,t_0,x}(t)=\beta_\theta(t+\tau_0-t_0)$ : existence ; unicité parmi toutes les solutions par l'argument de connexité ($\|\tilde\gamma(t)-x_0\|<\eta+\epsilon\ell\le2\eta$). $F$ est $C^p$ en $(\lambda,t_0,t,x)$ (régularité jointe : second paramètre $s$ par changement d'échelle en temps, ou argument du poly), et <trou indice="dériver en $t$ et regarder la régularité du second membre">$\partial F/\partial t=X_\lambda(t,F)$ est $C^p$, donc $F$ est $C^{p+1}$ en $t$</trou>. $\square$

## Exemples

* **$\alpha'=\lambda\alpha$, $\alpha(t_0)=x$** ($\Lambda=\R$, $U=E=\R$, $X(\lambda,t,x)=\lambda x$, $C^\infty$). La solution est $F(\lambda,t_0,t,x)=x\,e^{\lambda(t-t_0)}$ : $\partial F/\partial t=\lambda F=X_\lambda(F)$ ✓, $F(\lambda,t_0,t_0,x)=x$ ✓. Elle est $C^\infty$ en les quatre variables, conformément au théorème ($p=\infty$). La dérivée par rapport au paramètre, $\dfrac{\partial F}{\partial\lambda}=(t-t_0)\,x\,e^{\lambda(t-t_0)}$, vérifie l'**équation linéarisée** $\dfrac{d}{dt}\dfrac{\partial F}{\partial\lambda}=F+\lambda\dfrac{\partial F}{\partial\lambda}$ (dériver $\alpha'=\lambda\alpha$ en $\lambda$) avec $\dfrac{\partial F}{\partial\lambda}(t_0)=0$ : on vérifie $\frac{d}{dt}\big[(t-t_0)xe^{\lambda(t-t_0)}\big]=xe^{\lambda(t-t_0)}+\lambda(t-t_0)xe^{\lambda(t-t_0)}$ ✓. Ici $\mathcal E$ peut être pris égal à $\R^2$ tout entier.
* **La régularité $C^p$ en $\lambda$ est optimale.** $X_\lambda(x)=|\lambda|$ : champ $C^0$ (pas $C^1$ en $\lambda=0$), lipschitzien en $x$ ; $F(\lambda,t_0,t,x)=x+|\lambda|(t-t_0)$ est continue mais pas dérivable en $\lambda=0$ dès que $t\ne t_0$. Le théorème donne $p=0$, c'est tout ce qu'on peut dire. Avec $X_\lambda(x)=\lambda$ ($C^\infty$) : $F=x+\lambda(t-t_0)$, $C^\infty$.
* **La régularité $C^{p+1}$ en $t$ est optimale.** $X(t,x)=|t|$ (pas de paramètre, $p=0$, lipschitzien en $x$ car indépendant de $x$). La solution de $\alpha'=|t|$, $\alpha(t_0)=x$ est $F(t_0,t,x)=x+\dfrac{t|t|-t_0|t_0|}{2}$ (vérification : $\frac{d}{dt}\frac{t|t|}{2}=|t|$, y compris en $0$ où le taux d'accroissement $\frac{t|t|}{2t}=\frac{|t|}{2}\to0$). Elle est $C^1$ en $t$ (dérivée $|t|$) mais pas $C^2$ en $t=0$ : exactement $C^{p+1}$ avec $p=0$.

## Pièges

* > ⚠️ La condition initiale $(t_0,x)$ est **un paramètre** : la dépendance en $x$ et en $t_0$ est $C^p$ (comme en $\lambda$), la dépendance en **$t$** est $C^{p+1}$. Ne pas écrire « $F$ est $C^{p+1}$ » tout court.
* > ⚠️ « Localement lipschitzien en $x$ » doit être **uniforme en $(\lambda,t)$** au voisinage de chaque point : c'est ce qui donne un $\epsilon$ commun à tous les paramètres. Lipschitzien pour chaque $\lambda$ séparément ne suffit pas pour la preuve.
* Le domaine de $F$ n'est pas un produit : $\mathcal E$ est une **bande** $|t-t_0|<\epsilon$ au-dessus de $|t_0-\tau_0|<\delta$ (un parallélogramme), pas $]\tau_0-\delta\,;\tau_0+\delta[^2$.
* Pour $p=0$, seule la **continuité** de $F$ est obtenue (version I du point fixe) ; la formule $d\varphi_\lambda=(\mathrm{Id}-\partial g/\partial x)^{-1}\partial g/\partial\lambda$ de la version II n'a pas de sens.
* L'unicité du point fixe ne porte que sur les fonctions à valeurs dans $\bar B(x_0,2\eta)$ : l'unicité parmi **toutes** les solutions exige l'argument de connexité (étape 6), comme dans [[ch07-cauchy-lipschitz]].
* Le théorème est **local** en temps : $\epsilon$ dépend de $(\lambda_0,\tau_0,x_0)$ et peut être minuscule ; voir [[ch07-flot-global-def]] et [[ch07-flot-global-ouvert-regulier]] pour la version globale.
