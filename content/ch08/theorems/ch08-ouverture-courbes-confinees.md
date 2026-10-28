---
id: ch08-ouverture-courbes-confinees
type: proposition
chapter: 8
title: "$E(\mathcal U_1,\mathcal U_2)$ et $E_{a,b}(\mathcal U_1,\mathcal U_2)$ sont ouverts ; les résultats des questions 2 à 7 subsistent"
ref: "Question 9, p. 145 (non numérotée, section VIII)"
page: 145
importance: 1
depends: [ch08-voisinage-compact-dans-ouvert, ch08-courbes-confinees-ouverts, ch08-lhat-c1-differentielle, ch08-euler-lagrange, ch08-energie-conservee, ch08-equation-newton, ch05-theoreme-fondamental, ch05-differentielles-partielles]
tags: [calcul-des-variations, ouvert, compacite, norme-c1, potentiel-singulier]
---
## Intuition

> 💡 Si une courbe $\gamma_0$ reste dans l'ouvert $\mathcal U_1$ et ses vitesses dans l'ouvert $\mathcal U_2$, alors toute courbe **assez proche** de $\gamma_0$ pour la norme $C^1$ (positions proches **et** vitesses proches, uniformément en $t$) fait de même. C'est le lemme du tube ([[ch08-voisinage-compact-dans-ouvert]]) appliqué à l'image de $\gamma_0$ et à l'image de $\gamma_0'$, qui sont compactes.

Conséquence pratique : l'ensemble des courbes admissibles ([[ch08-courbes-confinees-ouverts]]) est un **ouvert** de $E$, et tout le calcul différentiel des questions 2 à 7 (différentielle de l'action, équation d'Euler-Lagrange, énergie, Newton) se transporte tel quel, car il est **local** : il ne regarde $L$ qu'au voisinage du graphe $\{(t,\gamma(t),\gamma'(t))\}$.

Rappel : $E=C^1([0;1];V)$, $\norm\gamma_E=\sup_t\norm{\gamma(t)}_V+\sup_t\norm{\gamma'(t)}_V$, $E(\mathcal U_1,\mathcal U_2)=\{\gamma\in E:\forall t,\ \gamma(t)\in\mathcal U_1,\ \gamma'(t)\in\mathcal U_2\}$ et $E_{a,b}(\mathcal U_1,\mathcal U_2)=E(\mathcal U_1,\mathcal U_2)\cap E_{a,b}$.

## Énoncé

**Proposition (poly, Question 9, p. 145).** Soient $\mathcal U_1,\mathcal U_2$ deux ouverts de $V$.

1. $E(\mathcal U_1,\mathcal U_2)$ est ouvert dans $E$ et $E_{a,b}(\mathcal U_1,\mathcal U_2)$ est ouvert dans $E_{a,b}$. Plus précisément, pour tout $\gamma_0\in E(\mathcal U_1,\mathcal U_2)$, il existe $\epsilon>0$ tel que : si $\gamma\in E$ et $\norm{\gamma-\gamma_0}_E<\epsilon$, alors $\gamma\in E(\mathcal U_1,\mathcal U_2)$.
2. Les résultats établis aux questions 2 à 7 restent valides pour un Lagrangien $L$ de classe $C^1$ sur $I\times\mathcal U_1\times\mathcal U_2$ : l'action $\hat L$ est de classe $C^1$ sur l'ouvert $E(\mathcal U_1,\mathcal U_2)$, avec la même formule pour $d\hat L_\gamma$ ([[ch08-lhat-c1-differentielle]]) ; un point critique de la restriction de $\hat L$ à $E_{a,b}(\mathcal U_1,\mathcal U_2)$ vérifie l'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]) ; l'énergie est conservée dans le cas autonome ([[ch08-energie-conservee]]) ; et pour $L=\tfrac12\norm v^2-U(q)$ avec $U$ de classe $C^1$ sur $\mathcal U_1$, (E.L) est l'équation de Newton ([[ch08-equation-newton]]).

## Hypothèses

### H1 — $\mathcal U_1$ et $\mathcal U_2$ ouverts

**Rôle.** Ils permettent d'appliquer le lemme [[ch08-voisinage-compact-dans-ouvert]] aux compacts $K=\gamma_0([0;1])\subset\mathcal U_1$ et $K'=\gamma_0'([0;1])\subset\mathcal U_2$.

**Si on la retire.** $V=\R$, $\mathcal U_1=[-1,1]$, $\mathcal U_2=\R$ : $\gamma_0\equiv1$ est admissible mais $\gamma_0+\eta$ ne l'est pas, pour tout $\eta>0$, alors que $\norm{(\gamma_0+\eta)-\gamma_0}_E=\eta$. L'ensemble n'est pas ouvert.

### H2 — La norme de $E$ contrôle aussi $\gamma'$ (norme $C^1$)

**Rôle.** La condition $\gamma'(t)\in\mathcal U_2$ n'est stable par petite perturbation que si la perturbation est petite **en vitesse** ; c'est le terme $\sup_t\norm{\gamma'(t)-\gamma_0'(t)}_V\le\norm{\gamma-\gamma_0}_E$ qui le garantit.

**Si on la retire.** Munissons $E$ de la seule norme $\sup_t\norm{\gamma(t)}_V$. Avec $V=\R$, $\mathcal U_1=\R$, $\mathcal U_2=]0,+\infty[$, $\gamma_0(t)=t$ et $\gamma_n(t)=t+\frac1n\sin(n^2t)$ : $\sup_t\abs{\gamma_n-\gamma_0}\le\frac1n\to0$, mais $\gamma_n'(t)=1+n\cos(n^2t)$ vaut $1-n<0$ en $t=\pi/n^2\in[0;1]$ ($n\ge2$). Aucune boule de cette norme centrée en $\gamma_0$ n'est contenue dans $E(\mathcal U_1,\mathcal U_2)$.

### H3 — Le paramètre $t$ décrit le compact $[0;1]$

**Rôle.** Il rend $K=\gamma_0([0;1])$ et $K'=\gamma_0'([0;1])$ compacts (images d'un compact par des applications continues), ce qu'exige le lemme du tube.

**Si on la retire.** Sur $[0,+\infty[$ (courbes $C^1$ bornées ainsi que leur dérivée, avec la même norme « sup + sup »), prenons $V=\R$, $\mathcal U_1=]0,+\infty[$, $\mathcal U_2=\R$ et $\gamma_0(t)=e^{-t}$ : pour tout $\eta>0$, $\gamma_0-\eta$ est à distance $\eta$ de $\gamma_0$ mais $e^{-t}-\eta<0$ pour $t>\ln(1/\eta)$. L'ensemble n'est pas ouvert : l'image $]0,1]$ de $\gamma_0$ n'est pas compacte et « touche » le bord de $\mathcal U_1$ à l'infini.

### H4 — $L$ de classe $C^1$ sur $I\times\mathcal U_1\times\mathcal U_2$ (pour la partie 2)

**Rôle.** C'est l'hypothèse des questions 2 à 7, simplement restreinte à l'ouvert où $L$ est défini ; on s'en sert via la continuité uniforme de $dL$ sur un compact de $I\times\mathcal U_1\times\mathcal U_2$.

**Si on la retire.** Comme dans [[ch08-euler-lagrange]] (H1) : avec $L(u,q,v)=\abs q$, $\hat L$ n'est pas différentiable en la courbe nulle et (E.L) n'a pas de sens.

## Idée de la preuve

Le lemme du tube donne $\epsilon>0$ tel que $K_\epsilon\subset\mathcal U_1$ et $K'_\epsilon\subset\mathcal U_2$ ; si $\norm{\gamma-\gamma_0}_E<\epsilon$, alors $\gamma(t)\in B(\gamma_0(t),\epsilon)\subset K_\epsilon$ et $\gamma'(t)\in B(\gamma_0'(t),\epsilon)\subset K'_\epsilon$. Pour la partie 2, on refait les preuves en n'utilisant $L$ que sur un voisinage compact du graphe de $\gamma_0$, contenu dans $I\times\mathcal U_1\times\mathcal U_2$.

## Preuve

*1. Ouverture.* Soit $\gamma_0\in E(\mathcal U_1,\mathcal U_2)$. Les applications $\gamma_0$ et $\gamma_0'$ sont continues sur le compact $[0;1]$, donc $K=\{\gamma_0(t):t\in[0;1]\}$ et $K'=\{\gamma_0'(t):t\in[0;1]\}$ sont des compacts de $V$, et $K\subset\mathcal U_1$, $K'\subset\mathcal U_2$ par hypothèse. Le lemme [[ch08-voisinage-compact-dans-ouvert]], appliqué dans l'espace métrique $X=V$ (distance $d(x,y)=\norm{x-y}_V$), fournit $\epsilon_1,\epsilon_2>0$ tels que $K_{\epsilon_1}\subset\mathcal U_1$ et $K'_{\epsilon_2}\subset\mathcal U_2$. Posons $\epsilon=\min(\epsilon_1,\epsilon_2)$ et soit $\gamma\in E$ avec $\norm{\gamma-\gamma_0}_E<\epsilon$. Pour tout $t\in[0;1]$,
$$
\norm{\gamma(t)-\gamma_0(t)}_V\le\sup_{s}\norm{\gamma(s)-\gamma_0(s)}_V\le\norm{\gamma-\gamma_0}_E<\epsilon,
$$
donc $\gamma(t)\in B(\gamma_0(t),\epsilon)\subset K_{\epsilon_1}\subset\mathcal U_1$ ; de même $\norm{\gamma'(t)-\gamma_0'(t)}_V\le\norm{\gamma-\gamma_0}_E<\epsilon$, donc $\gamma'(t)\in K'_{\epsilon_2}\subset\mathcal U_2$. Ainsi la boule $B_E(\gamma_0,\epsilon)$ est contenue dans $E(\mathcal U_1,\mathcal U_2)$, qui est donc ouvert dans $E$. Enfin $E_{a,b}(\mathcal U_1,\mathcal U_2)=E(\mathcal U_1,\mathcal U_2)\cap E_{a,b}$ est ouvert dans $E_{a,b}$ pour la topologie induite (trace d'un ouvert).

*2. Différentiabilité de $\hat L$ (question 2).* Fixons $\gamma_0\in E(\mathcal U_1,\mathcal U_2)$. En appliquant le lemme du tube comme ci-dessus, on obtient $\epsilon>0$ tel que $K_{2\epsilon}\subset\mathcal U_1$ et $K'_{2\epsilon}\subset\mathcal U_2$. L'ensemble
$$
C=\{(t,x,y):\ t\in[0;1],\ \norm{x-\gamma_0(t)}_V\le\epsilon,\ \norm{y-\gamma_0'(t)}_V\le\epsilon\}
$$
est l'image du compact $[0;1]\times\bar B(0,\epsilon)\times\bar B(0,\epsilon)$ (dimension finie) par l'application continue $(t,x,y)\mapsto(t,\gamma_0(t)+x,\gamma_0'(t)+y)$ ; il est donc compact, et contenu dans $[0;1]\times K_{2\epsilon}\times K'_{2\epsilon}\subset I\times\mathcal U_1\times\mathcal U_2$. Comme $L$ est $C^1$, $dL$ est continue, donc **uniformément continue** sur $C$ (Heine) : notons $\omega(r)=\sup\{\norm{dL_P-dL_{P'}}:P,P'\in C,\ \norm{P-P'}\le r\}$, qui tend vers $0$ quand $r\to0$ (sur $\R\times V\times V$ on prend la norme $\abs u+\norm q+\norm v$).

Soient $\gamma,\gamma+h\in B_E(\gamma_0,\epsilon)$. Pour $t\in[0;1]$ et $\theta\in[0;1]$, posons $P_t=(t,\gamma(t),\gamma'(t))$ et $H_t=(0,h(t),h'(t))$ ; la boule $B_E(\gamma_0,\epsilon)$ étant convexe, $P_t+\theta H_t\in C$. Le théorème fondamental du calcul différentiel ([[ch05-theoreme-fondamental]]) appliqué à $L$ sur le segment $[P_t,P_t+H_t]\subset C$ donne
$$
L(P_t+H_t)-L(P_t)-dL_{P_t}(H_t)=\int_0^1\big(dL_{P_t+\theta H_t}-dL_{P_t}\big)(H_t)\,d\theta,
$$
de norme $\le\omega(\norm{H_t})\norm{H_t}\le\omega(\norm h_E)\norm h_E$, car $\norm{H_t}=\norm{h(t)}+\norm{h'(t)}\le\norm h_E$. Or $dL_{P_t}(H_t)=\frac{\partial L}{\partial q}(P_t)\cdot h(t)+\frac{\partial L}{\partial v}(P_t)\cdot h'(t)$ ([[ch05-differentielles-partielles]]). En intégrant en $t$ :
$$
\Big|\hat L(\gamma+h)-\hat L(\gamma)-\int_0^1\Big(\frac{\partial L}{\partial q}(P_t)\cdot h(t)+\frac{\partial L}{\partial v}(P_t)\cdot h'(t)\Big)dt\Big|\le\omega(\norm h_E)\,\norm h_E=o(\norm h_E).
$$
L'application linéaire $h\mapsto\int_0^1\big(\frac{\partial L}{\partial q}(P_t)\cdot h+\frac{\partial L}{\partial v}(P_t)\cdot h'\big)dt$ est continue (de norme $\le\sup_C\norm{dL}$), donc $\hat L$ est différentiable en $\gamma$ avec la formule de [[ch08-lhat-c1-differentielle]]. Enfin, pour $\gamma,\tilde\gamma\in B_E(\gamma_0,\epsilon)$, $\norm{d\hat L_\gamma-d\hat L_{\tilde\gamma}}\le\sup_t\norm{dL_{P_t}-dL_{\tilde P_t}}\le\omega(\norm{\gamma-\tilde\gamma}_E)$ : $\gamma\mapsto d\hat L_\gamma$ est continue, et $\hat L$ est $C^1$ sur $B_E(\gamma_0,\epsilon)$, donc sur l'ouvert $E(\mathcal U_1,\mathcal U_2)$.

*3. Euler-Lagrange (questions 3 à 5).* Les questions 3 et 4 (lemmes de du Bois-Reymond) ne font pas intervenir $L$. Soit $\gamma$ un point critique de la restriction de $\hat L$ à l'ouvert $E_{a,b}(\mathcal U_1,\mathcal U_2)$ de l'espace affine $E_{a,b}$ : pour $h\in E_{0,0}$, $\gamma+sh\in E_{a,b}(\mathcal U_1,\mathcal U_2)$ pour $\abs s$ petit (partie 1), et la condition de point critique est $d\hat L_\gamma(h)=0$ pour tout $h\in E_{0,0}$. Les fonctions $A(t)=\frac{\partial L}{\partial q}(P_t)$ et $B(t)=\frac{\partial L}{\partial v}(P_t)$ sont continues ($t\mapsto P_t$ est continue à valeurs dans $I\times\mathcal U_1\times\mathcal U_2$, où les différentielles partielles de $L$ sont continues). La preuve de [[ch08-euler-lagrange]] s'applique alors mot pour mot.

*4. Énergie et Newton (questions 6 et 7).* Ces preuves sont des calculs **ponctuels** en $(t,\gamma(t),\gamma'(t))$ (règle de la chaîne pour $t\mapsto L(\gamma(t),\gamma'(t))$, calcul de $\frac{\partial L}{\partial v}=v$ et $\frac{\partial L}{\partial q}=-\nabla U(q)$), qui n'utilisent la différentiabilité de $L$ qu'aux points $(\gamma(t),\gamma'(t))\in\mathcal U_1\times\mathcal U_2$ : elles restent valides. $\square$

## Preuve à trous

*Ouverture.* Soit $\gamma_0\in E(\mathcal U_1,\mathcal U_2)$. Les ensembles $K=\gamma_0([0;1])$ et $K'=\gamma_0'([0;1])$ sont <trou indice="images de quoi par quoi ?">compacts, comme images du compact $[0;1]$ par les applications continues $\gamma_0$ et $\gamma_0'$</trou>, et contenus dans $\mathcal U_1$, $\mathcal U_2$. Par <trou indice="question 8">le lemme du tube (question 8), il existe $\epsilon>0$ avec $K_\epsilon\subset\mathcal U_1$ et $K'_\epsilon\subset\mathcal U_2$</trou>. Si $\norm{\gamma-\gamma_0}_E<\epsilon$, alors pour tout $t$, <trou indice="que contrôle chacun des deux termes de la norme de E ?">$\norm{\gamma(t)-\gamma_0(t)}<\epsilon$ et $\norm{\gamma'(t)-\gamma_0'(t)}<\epsilon$, donc $\gamma(t)\in K_\epsilon\subset\mathcal U_1$ et $\gamma'(t)\in K'_\epsilon\subset\mathcal U_2$</trou>. Donc $B_E(\gamma_0,\epsilon)\subset E(\mathcal U_1,\mathcal U_2)$.

*Résultats 2 à 7.* On choisit $\epsilon$ tel que le compact $C=\{(t,x,y):t\in[0;1],\ \norm{x-\gamma_0(t)}\le\epsilon,\ \norm{y-\gamma_0'(t)}\le\epsilon\}$ soit contenu dans $I\times\mathcal U_1\times\mathcal U_2$ ; sur $C$, <trou indice="théorème de Heine">$dL$ est uniformément continue</trou>, ce qui donne, exactement comme dans la question 2, $\hat L(\gamma+h)-\hat L(\gamma)-d\hat L_\gamma(h)=o(\norm h_E)$ et la continuité de $\gamma\mapsto d\hat L_\gamma$ sur $B_E(\gamma_0,\epsilon)$. Les questions 3 à 7 sont des arguments qui n'utilisent $L$ qu'aux points $(t,\gamma(t),\gamma'(t))$ : elles restent valides. $\square$

## Exemples

* **Kepler, orbite circulaire.** $V=\R^2$, $L(u,q,v)=\tfrac12\norm v^2+\frac1{\norm q}$ sur $I\times(\R^2\setminus\{0\})\times\R^2$ (potentiel $U(q)=-\frac1{\norm q}$, $\nabla U(q)=\frac{q}{\norm q^3}$). Ici $\mathcal U_1=\R^2\setminus\{0\}$, $\mathcal U_2=\R^2$. Pour $\gamma_0(t)=R(\cos\omega t,\sin\omega t)$, $K$ est le cercle de rayon $R$ et $\dist(K,\{0\})=R$ : toute $\gamma$ avec $\norm{\gamma-\gamma_0}_E<R$ évite $0$. L'équation de Newton, valide sur cet ouvert, s'écrit $\gamma''=-\frac{\gamma}{\norm\gamma^3}$ ; comme $\gamma_0''=-\omega^2\gamma_0$, $\gamma_0$ est solution si et seulement si $\omega^2R^3=1$ (troisième loi de Kepler).
* **Particule relativiste.** $L(u,q,v)=-\sqrt{1-\norm v^2}$ sur $I\times V\times B(0,1)$. Pour le segment $\gamma_0(t)=a+t(b-a)$ avec $\norm{b-a}<1$, $K'=\{b-a\}$ et $\dist(K',V\setminus B(0,1))=1-\norm{b-a}$ : toute $\gamma$ avec $\norm{\gamma-\gamma_0}_E<1-\norm{b-a}$ est admissible. Ici $\frac{\partial L}{\partial v}=\frac{v}{\sqrt{1-\norm v^2}}$ et $\frac{\partial L}{\partial q}=0$, donc (E.L) donne $\frac{\gamma'}{\sqrt{1-\norm{\gamma'}^2}}=c$ constant ; en prenant les normes, $\norm{\gamma'}^2=\frac{\norm c^2}{1+\norm c^2}$, et $\gamma'$ est colinéaire à $c$ de même sens : $\gamma'$ est constant, les solutions sont les segments parcourus à vitesse constante $<1$.

## Pièges

* > ⚠️ Avec une norme qui ne contrôle que les positions, $E(\mathcal U_1,\mathcal U_2)$ n'est pas ouvert dès que $\mathcal U_2\ne V$ (H2) : c'est une raison de plus pour munir $E$ de la norme $C^1$.
* Le $\epsilon$ dépend de $\gamma_0$ : il n'existe en général pas de $\epsilon$ uniforme sur tout $E(\mathcal U_1,\mathcal U_2)$ (une courbe peut passer aussi près qu'on veut de la singularité).
* $E_{a,b}(\mathcal U_1,\mathcal U_2)$ est ouvert dans $E_{a,b}$, **pas** dans $E$ ($E_{a,b}$ est d'intérieur vide dans $E$ : on peut toujours bouger $\gamma(0)$).
* Un point critique de $\hat L$ sur $E_{a,b}(\mathcal U_1,\mathcal U_2)$ se définit avec les mêmes directions $h\in E_{0,0}$ que dans le cas global : l'ouverture garantit que $\gamma+sh$ reste admissible pour $s$ petit.
