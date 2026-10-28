---
id: ch09-flot-local-sous-variete
type: theorem
chapter: 9
title: Existence et unicité du flot local d'un champ tangent (Cauchy-Lipschitz sur une sous-variété)
ref: Théorème IX.8.5
page: 174
importance: 3
depends: [ch07-existence-flot-local, ch09-courbe-integrale-reste-dans-sous-variete-fermee, ch09-redressement-local, ch09-champ-tangent-courbe-integrale-flot-local-def, ch09-sous-variete-def, ch09-espace-tangent-image-dx, ch09-ex-parametrages-cartes-cr, ch09-remarques-applications-cr, ch07-unicite-globale, ch07-localement-lipschitzien-def]
tags: [cauchy-lipschitz, flot-local, champ-tangent, sous-variete, parametrage, existence, unicite]
---
## Intuition

> 💡 Sur une surface, « suivre les flèches tangentes » a toujours une solution, et une seule, pendant un petit moment : il suffit de **lire le problème dans une carte**. Dans les coordonnées locales $u\in\R^m$ d'un paramétrage $x$, l'équation $\alpha'=X(t,\alpha)$ sur $S$ devient une équation différentielle ordinaire $u'=Z(t,u)$ sur un ouvert de $\R^m$, à laquelle on applique le théorème de Cauchy-Lipschitz du chapitre VII ; on revient sur $S$ par $x$.

Vocabulaire. Un **champ de vecteurs tangents** $X : I\times S\to\R^N$ est continu avec $X(t,x)\in T_xS$ ; une **courbe intégrale** est une courbe $\alpha$ tracée sur $S$ avec $\alpha'(t)=X(t,\alpha(t))$ ; un **flot local** $(E(J,\epsilon),U,F)$ en $(\tau_0,x_0)$ est la donnée d'un voisinage $U$ de $x_0$ dans $S$, d'un intervalle $J\ni\tau_0$ et d'un $\epsilon>0$ tels que, pour toute condition initiale $(t_0,x)\in J\times U$, il existe une **unique** courbe intégrale $\alpha_{t_0,x}=F(t_0,\cdot,x)$ sur $]t_0-\epsilon,t_0+\epsilon[$ ([[ch09-champ-tangent-courbe-integrale-flot-local-def]]). **Localement lipschitzien en la seconde variable** signifie : pour tout $(t_1,y_1)\in I\times S$, il existe un voisinage $J_1$ de $t_1$ dans $I$, un voisinage $U_1$ de $y_1$ dans $S$ et $\kappa\ge0$ tels que $\|X(t,y)-X(t,y')\|\le\kappa\|y-y'\|$ pour $t\in J_1$, $y,y'\in U_1$ (comme en [[ch07-localement-lipschitzien-def]], avec la norme de $\R^N$).

## Énoncé

**Théorème (poly, Théorème IX.8.5, p. 174).** Soient $X : I\times S\to\R^N$ un champ de vecteurs tangents dépendant du temps sur une sous-variété $S$ de $\R^N$ et $(\tau_0,x_0)\in I\times S$. Supposons que $X$ soit localement lipschitzien en la seconde variable. Alors il existe un intervalle $J$ ouvert contenant $\tau_0$, une constante $\epsilon>0$ et un voisinage ouvert $U$ de $x_0$ dans $S$ définissant un flot local $(E(J,\epsilon),U,F)$ en $(\tau_0,x_0)$. Si le champ de vecteurs tangents $X$ est de classe $C^p$, alors $F$ aussi.

De plus, on a un énoncé d'unicité : soient $t_0\in J$, $x\in U$. Si $\gamma : ]t_0-\epsilon',t_0+\epsilon'[\to\R^N$ avec $\epsilon'\le\epsilon$ vérifie $\gamma'(t)=X(t,\gamma(t))$ et $\gamma(t_0)=x$, alors $\gamma(t)=\alpha_{t_0,x}(t)=F(t_0,t,x)$ pour tout $t\in\,]t_0-\epsilon',t_0+\epsilon'[$.

(Précision implicite dans le poly : dans l'énoncé d'unicité, $\gamma$ est à valeurs dans $S$, sinon $X(t,\gamma(t))$ n'a pas de sens. « $X$ de classe $C^p$ » s'entend sur la sous-variété $I\times S$ de $\R^{1+N}$, c'est-à-dire que $(t,u)\mapsto X(t,x(u))$ est $C^p$ pour tout paramétrage local $x$. Le poly ne précise pas la classe $C^k$ de $S$ ; la preuve rédigée ci-dessous suppose $k\ge2$, et $k\ge p+1$ pour l'assertion de régularité — voir H3 : ce sont des hypothèses de **cette preuve**, pas de l'énoncé.)

**Remarque (poly, Remarque IX.8.6, p. 174).** Un ouvert d'une sous-variété étant une sous-variété ([[ch09-ex-ouvert-de-sous-variete]]), il n'y a pas lieu d'énoncer le théorème avec un ouvert de $S$ à la place de $S$.

## Hypothèses

### H1 — Tangence ($X$ est un champ de vecteurs **tangents**)

**Rôle.** Elle garantit que la courbe $x\circ u$, image d'une solution de l'équation lue en carte, a bien pour vitesse $X$ : la « projection » $L(u)$ sur les coordonnées ne perd aucune information sur un vecteur tangent ($dx_u L(u)w=w$ pour $w\in T_{x(u)}S$).

**Si on la retire.** Il n'y a plus de courbe intégrale du tout. $S=\R\times\{0\}\subset\R^2$, $X(t,y)=(0,1)$ : une courbe tracée sur $S$ a une vitesse dans $\R\times\{0\}$, jamais égale à $(0,1)$. Aucun flot local n'existe.

### H2 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Il se transmet au champ $Z$ lu en carte, ce qui permet d'appliquer le théorème de Cauchy-Lipschitz (existence **et unicité**).

**Si on la retire.** $S=\R\times\{0\}$, $X(t,(s,0))=(2\sqrt{|s|},0)$ (continu, tangent, non lipschitzien près de $s=0$). Les courbes $\alpha_1(t)=(0,0)$ et $\alpha_2(t)=(t^2,0)$ pour $t\ge0$, $(0,0)$ pour $t\le0$ sont deux courbes intégrales de condition initiale $(0,(0,0))$, distinctes sur tout intervalle $]-\epsilon,\epsilon[$ : pas d'unicité, donc pas de flot local en $(0,(0,0))$ (cf. [[ch07-peano-non-unicite]]).

### H3 — $S$ de classe $C^k$, $k\ge2$ (implicite)

**Rôle.** La matrice $L(u)$ qui « inverse » $dx_u$ sur $T_{x(u)}S$ est de classe $C^{k-1}$ ; pour $k\ge2$ elle est localement lipschitzienne, ce qui rend le champ en carte $Z$ localement lipschitzien.

**Si on la retire.** Hypothèse de confort pour cette preuve, toujours satisfaite dans les exemples du cours. Pour $S$ seulement $C^1$, on peut encore obtenir l'existence (théorème de Peano en carte) et l'unicité (directement dans $\R^N$, par un argument de Gronwall, puisque $\|\alpha'-\beta'\|\le\kappa\|\alpha-\beta\|$) ; nous ne le détaillons pas.

### H4 — Pour la régularité : $X$ de classe $C^p$

**Rôle.** $Z$ est alors de classe $C^p$ (si $k\ge p+1$), et le théorème VII.2.12 donne un flot $G$ de classe $C^p$, d'où $F$.

**Si on la retire.** Un champ seulement lipschitzien a un flot continu mais pas forcément différentiable : $S=\R$, $X(y)=|y|$. Le flot est $F(0,t,y)=ye^t$ si $y\ge0$, $ye^{-t}$ si $y\lt0$ ; pour $t\ne0$, $y\mapsto F(0,t,y)$ a en $0$ une dérivée à droite $e^t$ et à gauche $e^{-t}$ : elle n'est pas dérivable.

## Idée de la preuve

On prend un paramétrage $x : \Omega\to S$ en $x_0$ et un inverse à gauche $C^{k-1}$ $L(u)$ de $dx_u$. Le champ $Z(t,u)=L(u)X(t,x(u))$ sur $I\times\Omega$ est localement lipschitzien, et $u$ est courbe intégrale de $Z$ si et seulement si $x\circ u$ l'est de $X$. Le flot local $G$ de $Z$ (théorème VII.2.12) donne $F=x\circ G\circ x^{-1}$ ; l'unicité s'obtient par connexité.

## Preuve

*Le poly laisse la démonstration au lecteur, en indiquant de se ramener au théorème VII.2.12 par les paramétrages locaux (en s'inspirant de la preuve de la Proposition IX.8.1, [[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]). Voici cette réduction rédigée.*

Soit $m$ la dimension de $S$ et $x : \Omega\to V\cap S$ un paramétrage local de $S$ en $x_0$ ([[ch09-sous-variete-def]]), $\Omega$ ouvert de $\R^m$, $x(u_0)=x_0$, de classe $C^k$, $k\ge2$.

**Étape 1 : un inverse à gauche régulier de $dx_u$.** On voit $dx_u$ comme une matrice $N\times m$ de rang $m$. La matrice de Gram ${}^t dx_u\,dx_u$ ($m\times m$) est inversible (si ${}^tdx_u\,dx_u h=0$ alors $\|dx_uh\|^2=0$ donc $h=0$). Posons
$$
L(u)=\big({}^t dx_u\,dx_u\big)^{-1}\,{}^t dx_u\in\mathcal L(\R^N,\R^m).
$$
Alors $u\mapsto L(u)$ est de classe $C^{k-1}$ (donc $C^1$), et $L(u)\,dx_u=\id_{\R^m}$. Comme $T_{x(u)}S=dx_u(\R^m)$ ([[ch09-espace-tangent-image-dx]]), pour $w=dx_u(h)\in T_{x(u)}S$ on a $dx_u(L(u)w)=dx_u(h)=w$.

**Étape 2 : le champ lu en carte.** Posons, pour $(t,u)\in I\times\Omega$,
$$
Z(t,u)=L(u)\,X\big(t,x(u)\big)\in\R^m .
$$
$Z$ est continu. Il est localement lipschitzien en $u$ : soit $(t_1,u_1)\in I\times\Omega$ ; soient $J_1$, $U_1$, $\kappa$ donnés par l'hypothèse en $(t_1,x(u_1))$ ; choisissons un intervalle compact $J_1'\subset J_1$ voisinage de $t_1$ dans $I$ et une boule fermée $\bar B=\bar B(u_1,r)\subset\Omega$ avec $x(\bar B)\subset U_1$. Sur le convexe compact $\bar B$, $L$ (de classe $C^1$) est $L_1$-lipschitzienne et bornée par $L_2$, $x$ est $L_3$-lipschitzienne (accroissements finis), et $\|X\|\le M$ sur le compact $J_1'\times x(\bar B)$. Pour $t\in J_1'$ et $u,u'\in\bar B$ :
$$
\|Z(t,u)-Z(t,u')\|\le\|L(u)-L(u')\|\,\|X(t,x(u))\|+\|L(u')\|\,\|X(t,x(u))-X(t,x(u'))\|\le(L_1M+L_2\kappa L_3)\|u-u'\|.
$$

**Étape 3 : correspondance des courbes intégrales.** Soit $J'\subset I$ un intervalle ouvert.
* Si $u : J'\to\Omega$ est une courbe intégrale de $Z$, alors $\alpha=x\circ u$ est tracée sur $V\cap S$ et $\alpha'(t)=dx_{u(t)}(u'(t))=dx_{u(t)}\big(L(u(t))X(t,\alpha(t))\big)=X(t,\alpha(t))$, par l'étape 1 et la **tangence** $X(t,\alpha(t))\in T_{\alpha(t)}S$.
* Réciproquement, si $\alpha : J'\to V\cap S$ est une courbe intégrale de $X$, alors $u=x^{-1}\circ\alpha$ est de classe $C^1$ (la carte $x^{-1}$ est $C^k$ sur $V\cap S$, [[ch09-ex-parametrages-cartes-cr]], et la composée d'applications $C^1$ entre sous-variétés est $C^1$, [[ch09-remarques-applications-cr]]) ; de $\alpha=x\circ u$ on tire $\alpha'=dx_u(u')$, d'où $u'=L(u)\alpha'=L(u)X(t,x(u))=Z(t,u)$.

**Étape 4 : existence du flot local.** Le théorème VII.2.12 ([[ch07-existence-flot-local]], sans paramètre) appliqué à $Z$ en $(\tau_0,u_0)$ fournit un intervalle ouvert $J\subset I$ contenant $\tau_0$, un $\epsilon>0$, un voisinage ouvert $\Omega'\subset\Omega$ de $u_0$ et un flot local $G : E(J,\epsilon)\times\Omega'\to\Omega$ : pour $t_0\in J$, $u\in\Omega'$, $t\mapsto G(t_0,t,u)$ est l'unique courbe intégrale de $Z$ sur $]t_0-\epsilon,t_0+\epsilon[$ valant $u$ en $t_0$. Posons
$$
U=x(\Omega'),\qquad F(t_0,t,y)=x\Big(G\big(t_0,t,x^{-1}(y)\big)\Big)\quad\big((t_0,t)\in E(J,\epsilon),\ y\in U\big).
$$
$U$ est un voisinage ouvert de $x_0$ dans $S$ ($x$ est un homéomorphisme de $\Omega$ sur l'ouvert $V\cap S$ de $S$). Par l'étape 3, $\alpha_{t_0,y}=F(t_0,\cdot,y)$ est une courbe intégrale de $X$ sur $]t_0-\epsilon,t_0+\epsilon[$, tracée sur $S$, avec $\alpha_{t_0,y}(t_0)=x(x^{-1}(y))=y$.

**Étape 5 : unicité.** Soient $t_0\in J$, $y\in U$ et $\gamma : ]t_0-\epsilon',t_0+\epsilon'[\to S$, $\epsilon'\le\epsilon$, une courbe intégrale de $X$ avec $\gamma(t_0)=y$. Soit $A=\{t\in\,]t_0-\epsilon',t_0+\epsilon'[\ \mid\gamma(t)=\alpha_{t_0,y}(t)\}$. Il contient $t_0$, il est fermé dans l'intervalle (continuité). Il est ouvert : si $s\in A$, le point $\gamma(s)=\alpha_{t_0,y}(s)$ est dans $V\cap S$, ouvert de $S$, donc par continuité $\gamma(t)$ et $\alpha_{t_0,y}(t)$ restent dans $V\cap S$ pour $t$ voisin de $s$ ; par l'étape 3, $x^{-1}\circ\gamma$ et $x^{-1}\circ\alpha_{t_0,y}$ sont alors deux courbes intégrales de $Z$ prenant la même valeur en $s$, donc égales près de $s$ par l'unicité de Cauchy-Lipschitz ([[ch07-unicite-globale]]), et $\gamma=\alpha_{t_0,y}$ près de $s$. L'intervalle étant connexe, $A$ est l'intervalle entier : $\gamma=\alpha_{t_0,y}=F(t_0,\cdot,y)$. En particulier (cas $\epsilon'=\epsilon$), $\alpha_{t_0,y}$ est l'**unique** courbe intégrale de condition initiale $(t_0,y)$ sur $]t_0-\epsilon,t_0+\epsilon[$ : $(E(J,\epsilon),U,F)$ est un flot local en $(\tau_0,x_0)$.

**Étape 6 : régularité.** Si $X$ est de classe $C^p$ et $k\ge p+1$, alors $(t,u)\mapsto X(t,x(u))$ est $C^p$ et $L$ est $C^{k-1}$, donc $Z$ est $C^p$ ; le théorème VII.2.12 dit que $G$ est $C^p$. Comme la carte $x^{-1}$ est $C^k$ sur $V\cap S$ et $x$ est $C^k$, la composée $F=x\circ G\circ(\id\times\id\times x^{-1})$ est de classe $C^p$ sur $E(J,\epsilon)\times U$. $\square$

*Variante :* on peut aussi, comme dans la preuve de IX.8.1, redresser $S$ par un difféomorphisme $\Phi$ ([[ch09-redressement-local]]) et travailler avec le champ $d\Phi(X)$ sur $\R^m\times\{0\}$ ; c'est la même idée.

## Preuve à trous

Soit $x : \Omega\to V\cap S$ un paramétrage local en $x_0=x(u_0)$. On pose <trou indice="un inverse à gauche de dx_u, régulier en u">$L(u)=({}^tdx_u\,dx_u)^{-1}\,{}^tdx_u$, de classe $C^{k-1}$, avec $L(u)dx_u=\id$ et $dx_uL(u)w=w$ pour $w\in T_{x(u)}S$</trou>, puis $Z(t,u)=L(u)X(t,x(u))$, continu et localement lipschitzien en $u$.

Si $u$ est courbe intégrale de $Z$, alors <trou indice="utiliser la tangence">$(x\circ u)'=dx_u(L(u)X(t,x\circ u))=X(t,x\circ u)$</trou> ; réciproquement, si $\alpha$ est courbe intégrale de $X$ dans $V\cap S$, $u=x^{-1}\circ\alpha$ est $C^1$ et $u'=L(u)\alpha'=Z(t,u)$.

Le théorème VII.2.12 appliqué à $Z$ en $(\tau_0,u_0)$ donne $J$, $\epsilon$, $\Omega'$ et un flot $G$ ; on pose <trou>$U=x(\Omega')$ et $F(t_0,t,y)=x\big(G(t_0,t,x^{-1}(y))\big)$</trou>, ce qui donne l'existence.

Pour l'unicité, si $\gamma$ est une courbe intégrale sur $S$ avec $\gamma(t_0)=y$, l'ensemble des $t$ où $\gamma(t)=F(t_0,t,y)$ est <trou indice="topologie de l'intervalle">non vide, fermé, et ouvert (près d'un point commun, les deux courbes restent dans $V\cap S$ et leurs relevés par $x^{-1}$ sont des courbes intégrales de $Z$ de même valeur, donc égales par Cauchy-Lipschitz) ; par connexité c'est tout l'intervalle</trou>.

Enfin, si $X$ est $C^p$ (et $k\ge p+1$), $Z$ est $C^p$, donc $G$ aussi, et $F=x\circ G\circ x^{-1}$ est $C^p$. $\square$

## Exemples

* **Rotation de la sphère lue en carte.** $S=\mathbb S^2$, $X(y)=e_3\wedge y$ (autonome, $I=\R$), paramétrage $x(\theta,\varphi)=(\cos\varphi\cos\theta,\cos\varphi\sin\theta,\sin\varphi)$ sur $\Omega=\,]-\pi,\pi[\times]-\frac\pi2,\frac\pi2[$. On a $\partial_\theta x=(-\cos\varphi\sin\theta,\cos\varphi\cos\theta,0)=e_3\wedge x(\theta,\varphi)$, donc $Z(t,(\theta,\varphi))=L\,\partial_\theta x=(1,0)$ : en carte, le champ est **constant**. Son flot est $G(t_0,t,(\theta,\varphi))=(\theta+t-t_0,\varphi)$. En $x_0=(1,0,0)=x(0,0)$ : $\Omega'=\,]-\frac\pi2,\frac\pi2[^2$, $J=\R$, $\epsilon=\frac\pi2$ conviennent ($|\theta+t-t_0|\lt\pi$), et $F(t_0,t,y)$ est la rotation d'angle $t-t_0$ autour de $e_3$ appliquée à $y$.

* **Un champ sur le cercle avec un point d'équilibre.** $S=\mathbb S^1$, $X(y)=(1-y_1)\,(-y_2,y_1)$ : tangent (orthogonal à $y$), restriction d'un champ polynomial de $\R^2$ donc localement lipschitzien. Dans la carte $\theta\mapsto(\cos\theta,\sin\theta)$, $\theta\in\,]0,2\pi[$, on obtient $Z(\theta)=1-\cos\theta=2\sin^2(\theta/2)$. Comme $\frac{d}{dt}\cot(\theta/2)=-\frac{\theta'}{2\sin^2(\theta/2)}=-1$, la solution valant $\theta$ en $t_0$ est $G(t_0,t,\theta)=2\,\mathrm{arccot}\big(\cot(\theta/2)-(t-t_0)\big)$ (avec $\mathrm{arccot} : \R\to\,]0,\pi[$). Le point $(1,0)$ ($\theta=0$) est un équilibre ($X=0$) ; les autres points tournent dans le sens direct, en s'en approchant sans l'atteindre.

## Pièges

* > ⚠️ Le champ n'est défini **que sur $S$** : on ne peut pas appliquer directement le théorème VII.2.12 dans $\R^N$ (il faut un ouvert). D'où le passage en carte (ou le redressement).
* > ⚠️ Lire le champ en carte demande d'**inverser $dx_u$ sur $T_{x(u)}S$** : $Z=L(u)X$, et non « $X$ composé avec $x$ ». Le champ en carte dépend de la carte.
* Dans l'énoncé d'unicité, $\gamma$ est à valeurs dans $S$ (implicitement).
* La preuve de l'unicité doit gérer le fait qu'une courbe intégrale peut **sortir du domaine de la carte** : on raisonne par connexité, localement.
* C'est un résultat **local** : $U$ et $\epsilon$ dépendent de $(\tau_0,x_0)$. Le passage au global se fait avec la courbe intégrale maximale ([[ch09-courbe-integrale-maximale-sous-variete]]).
