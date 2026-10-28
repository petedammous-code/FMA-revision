## CARD id=fc-ch08-001 ref=ch08-cadre-espace-courbes tags=definition,enonce
### Q
Décrire le cadre du chapitre VIII : l'espace $V$, l'identification de $V$ avec son dual, l'espace de courbes $E$ et sa norme, l'ensemble $E_{a,b}$.
### R
* $(V,\langle\cdot,\cdot\rangle)$ est un **espace de Hilbert de dimension finie**, de norme $\norm{\cdot}_V$.
* On identifie systématiquement $V$ et son dual $L(V;\R)$ par le produit scalaire : à une forme linéaire $\ell$ sur $V$ correspond l'unique $w\in V$ tel que $\ell(h)=\langle w,h\rangle$ pour tout $h\in V$.
* $E=C^1([0;1];V)$, muni de la norme $C^1$ :
$$\norm{\gamma}_E=\sup_{t\in[0;1]}\norm{\gamma(t)}_V+\sup_{t\in[0;1]}\norm{\gamma'(t)}_V .$$
* Pour $a,b\in V$ fixés, $E_{a,b}=\{\gamma\in E : \gamma(0)=a,\ \gamma(1)=b\}$ (courbes à extrémités fixées). C'est un fermé du Banach $E$ (donc complet) et un espace affine d'espace directeur $E_{0,0}$ (Question 1).

(poly, chap. VIII, p. 143)

## CARD id=fc-ch08-002 ref=ch08-lagrangien-fonctionnelle tags=definition,enonce
### Q
Qu'est-ce qu'un Lagrangien dans le chapitre VIII, et quelle fonctionnelle $\hat L$ lui associe-t-on ?
### R
Soit $I$ un **intervalle ouvert contenant $[0,1]$**. Un Lagrangien est une application de classe $C^1$
$$L : I\times V\times V\to\R,\qquad (u,q,v)\mapsto L(u,q,v),$$
($u$ : temps, $q$ : position, $v$ : vitesse). On lui associe l'**action**
$$\hat L : E\to\R,\qquad \hat L(\gamma)=\int_0^1 L(t,\gamma(t),\gamma'(t))\,dt .$$
(poly, chap. VIII, p. 143)

## CARD id=fc-ch08-003 ref=none tags=notation
### Q
Dans le chapitre VIII, que désignent $u$, $q$, $v$, $t$, $\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$, $\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$, le point « $\cdot$ » et (E.L) ? Quelles lettres ont deux sens ?
### R
* $u,q,v$ : variables du Lagrangien $L(u,q,v)$ (temps, position, vitesse — les physiciens notent $\dot q$ la vitesse) ; $t$ : variable **réservée à la courbe** $\gamma$. On n'écrit donc jamais $\partial L/\partial t$.
* $\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$, $\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ : différentielles partielles de $L$ par rapport à la 2e et à la 3e variable ([[ch05-differentielles-partielles]]), **évaluées le long de la courbe** : ce sont des fonctions de $t$, à valeurs dans $L(V;\R)\simeq V$.
* « $\ell\cdot w$ » : évaluation de la forme linéaire $\ell$ sur le vecteur $w$ (soit $\langle\ell,w\rangle$ après identification).
* (E.L) : l'équation d'Euler-Lagrange $\frac{d}{dt}\Big(\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))\Big)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$.
* Collisions du poly : $U$ = potentiel (Q7) **et** ouvert de $V$ (Q8-Q12) ; $X$ = espace métrique (Q8) puis champ de vecteurs (Q11) ; $F$ = fermé $X\setminus U$ (Q8) puis flot (Q11) ; $V$ = l'espace et, en calligraphique $\mathcal V$, un ouvert (Q10).

(poly, chap. VIII, p. 143-145)

## CARD id=fc-ch08-004 ref=ch08-lhat-c1-differentielle tags=enonce,formule
### Q
Énoncer la régularité de $\hat L$ et donner la formule de $d\hat L_\gamma$.
### R
Si $L : I\times V\times V\to\R$ est de classe $C^1$, alors $\hat L : E\to\R$ est de classe $C^1$ et, pour tous $\gamma,h\in E$,
$$d\hat L_\gamma(h)=\int_0^1\Big(\Big\langle\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t)),h(t)\Big\rangle+\Big\langle\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t)),h'(t)\Big\rangle\Big)\,dt .$$
Moyen mnémotechnique : on « dérive sous l'intégrale », la variation de $q$ est $h(t)$, celle de $v$ est $h'(t)$. (poly, chap. VIII, Question 2, p. 143)

## CARD id=fc-ch08-005 ref=ch08-lhat-c1-differentielle tags=hypothese,contre-exemple
### Q
Pour la différentiabilité de $\hat L$ : pourquoi faut-il la norme $C^1$ sur $E$ (et pas seulement $\sup\norm{\gamma}$) ? Que se passe-t-il si $L$ est seulement continue ?
### R
* $\hat L$ dépend de $\gamma'$ : la variation $h'$ apparaît dans $d\hat L_\gamma(h)$, et pour que le reste soit un $o(\norm h_E)$ il faut que $\norm h_E$ contrôle aussi $\sup\norm{h'}$. Avec la seule norme $\sup\norm\gamma$, $\gamma\mapsto\int_0^1\norm{\gamma'}^2$ n'est même pas continue : $\gamma_n(t)=\frac1n\sin(n^2t)\,e$ ($\norm e=1$) tend vers $0$ uniformément mais $\gamma_n'(t)=n\cos(n^2t)\,e$ explose.
* Si $L$ est seulement continue, $\hat L$ n'est pas différentiable en général : $V=\R$, $L(u,q,v)=\abs q$, $\hat L(\gamma)=\int_0^1\abs{\gamma}$ ; en $\gamma=0$, $\hat L(\eps h)=\abs\eps\int_0^1\abs h$ n'est pas linéaire en $\eps$.
* La compacité de $\gamma([0;1])$ et $\gamma'([0;1])$ (dimension finie) sert à contrôler le reste uniformément en $t$.

## CARD id=fc-ch08-006 ref=ch08-du-bois-reymond tags=enonce
### Q
Énoncer le lemme de du Bois-Reymond.
### R
Soit $B:[0;1]\to V$ une fonction **continue** telle que pour toute fonction $h\in C^1([0;1];V)$ vérifiant $h(0)=h(1)=0$, on a
$$\int_0^1\langle B(t),h'(t)\rangle\,dt=0 .$$
Alors $B$ est **constante**. (poly, chap. VIII, Question 3, p. 144)

## CARD id=fc-ch08-007 ref=ch08-du-bois-reymond tags=hypothese,contre-exemple
### Q
Dans le lemme de du Bois-Reymond, pourquoi la conclusion est-elle « $B$ constante » et non « $B=0$ » ? Que donnerait l'hypothèse pour toutes les $h\in C^1$, sans condition aux bords ?
### R
* Une constante $B\equiv c\neq0$ vérifie l'hypothèse : $\int_0^1\langle c,h'\rangle=\langle c,h(1)-h(0)\rangle=0$ dès que $h(0)=h(1)=0$. On ne peut donc pas espérer mieux que « constante ».
* Si l'identité valait pour **toutes** les $h\in C^1$ (sans condition aux bords) : le lemme donne déjà $B\equiv c$, puis $h(t)=t\,c$ fournit $\int_0^1\langle c,c\rangle=\norm c^2=0$, donc $B=0$.
* La continuité de $B$ sert à ce que la fonction test $h(t)=\int_0^t(B(s)-c)\,ds$ soit $C^1$.

## CARD id=fc-ch08-008 ref=ch08-du-bois-reymond tags=methode
### Q
Méthode : comment prouve-t-on le lemme de du Bois-Reymond (choix de la fonction test) ?
### R
On pose $c=\int_0^1 B(s)\,ds\in V$ et $h(t)=\int_0^t\big(B(s)-c\big)\,ds$. Alors $h$ est $C^1$ ($B$ continue), $h(0)=0$, $h(1)=\int_0^1B-c=0$, et $h'=B-c$. L'hypothèse donne $\int_0^1\langle B,B-c\rangle=0$ ; de plus $\int_0^1\langle c,B-c\rangle=\langle c,\int_0^1(B-c)\rangle=0$. En soustrayant :
$$\int_0^1\norm{B(t)-c}^2\,dt=0,$$
et comme $t\mapsto\norm{B(t)-c}^2$ est continue et positive, $B\equiv c$.

Principe général : pour passer de « $\int(\ldots)=0$ pour toute variation $h$ » à une égalité ponctuelle, on choisit $h$ construite à partir de l'intégrande lui-même.

## CARD id=fc-ch08-009 ref=ch08-du-bois-reymond-derivee tags=enonce,methode
### Q
Énoncer la variante du lemme de du Bois-Reymond avec un terme en $h$, et dire comment on la ramène au lemme.
### R
Soient $A,B:[0;1]\to V$ **continues** telles que pour toute $h\in C^1([0;1];V)$ vérifiant $h(0)=h(1)=0$,
$$\int_0^1\big(\langle A(t),h(t)\rangle+\langle B(t),h'(t)\rangle\big)\,dt=0 .$$
Alors $B$ est **différentiable** et $B'=A$ (donc $B$ est $C^1$). (poly, chap. VIII, Question 4, p. 144)

Méthode : avec $\tilde A(t)=\int_0^tA(s)\,ds$ (de classe $C^1$, $\tilde A'=A$), une intégration par parties sans terme de bord ($h(0)=h(1)=0$) donne $\int_0^1\langle A,h\rangle=-\int_0^1\langle\tilde A,h'\rangle$. Donc $\int_0^1\langle B-\tilde A,h'\rangle=0$ pour toute $h$, et du Bois-Reymond donne $B=\tilde A+c$. On **démontre** la dérivabilité de $B$, on ne la suppose pas.

## CARD id=fc-ch08-010 ref=ch08-euler-lagrange tags=enonce,formule
### Q
Énoncer l'équation d'Euler-Lagrange (E.L) : hypothèses et conclusion.
### R
Soit $L:I\times V\times V\to\R$ de classe $C^1$ et $\gamma\in E_{a,b}$. Si $\gamma$ est un **point critique de la restriction de $\hat L$ à $E_{a,b}$** (c'est-à-dire $d\hat L_\gamma(h)=0$ pour tout $h\in E_{0,0}$), alors pour tout $t\in[0;1]$,
$$\text{(E.L)}\qquad \frac{d}{dt}\Big(t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))\Big)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t)) .$$
En particulier $t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ est dérivable. (poly, chap. VIII, Question 5, p. 144)

Preuve en une ligne : appliquer [[ch08-du-bois-reymond-derivee]] à $A(t)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$ et $B(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$, continues, grâce à la formule de $d\hat L_\gamma$.

## CARD id=fc-ch08-011 ref=ch08-euler-lagrange tags=hypothese,contre-exemple
### Q
(E.L) est-elle une condition suffisante de minimum ? Pourquoi ne teste-t-on que les directions $h\in E_{0,0}$, et que se passe-t-il si l'on ne fixe pas les extrémités ?
### R
* **Condition nécessaire seulement.** Contre-exemple : $V=\R$, $L=\frac12v^2-\frac12k^2q^2$ avec $k>\pi$, $a=b=0$. $\gamma=0$ vérifie (E.L) ($\gamma''=-k^2\gamma$) et $\hat L(0)=0$, mais pour $h(t)=\sin(\pi t)$, $\hat L(\eps h)=\frac{\eps^2}{4}(\pi^2-k^2)<0$, et pour $h(t)=\sin(n\pi t)$ avec $n\pi>k$, $\hat L(\eps h)=\frac{\eps^2}{4}(n^2\pi^2-k^2)>0$ : ni minimum ni maximum.
* $E_{a,b}$ est un espace **affine** d'espace directeur $E_{0,0}$ : $\gamma+h\in E_{a,b}$ exactement quand $h\in E_{0,0}$. C'est $h(0)=h(1)=0$ qui supprime les termes de bord dans l'intégration par parties.
* Extrémités libres (toutes les $h\in E$) : on obtient (E.L) **et** les conditions aux bords naturelles $\frac{\partial L}{\partial v}(0,\gamma(0),\gamma'(0))=\frac{\partial L}{\partial v}(1,\gamma(1),\gamma'(1))=0$.

## CARD id=fc-ch08-012 ref=ch08-energie-conservee tags=enonce,formule
### Q
Énoncer la conservation de l'énergie pour un Lagrangien autonome.
### R
Si $L$ **ne dépend pas de la première variable $u$** (on écrit $L(q,v)$) et si $\gamma$ est une solution de l'équation d'Euler-Lagrange **de classe $C^2$**, alors la fonction
$$H(t)=\frac{\partial L}{\partial v}(\gamma(t),\gamma'(t))\cdot\gamma'(t)-L(\gamma(t),\gamma'(t))$$
est constante. (poly, chap. VIII, Question 6, p. 144)

Calcul : $H'=\Big(\frac{d}{dt}\frac{\partial L}{\partial v}\Big)\cdot\gamma'+\frac{\partial L}{\partial v}\cdot\gamma''-\frac{\partial L}{\partial q}\cdot\gamma'-\frac{\partial L}{\partial v}\cdot\gamma''=\Big(\frac{d}{dt}\frac{\partial L}{\partial v}-\frac{\partial L}{\partial q}\Big)\cdot\gamma'=0$. Si $L$ dépend de $u$, il reste $H'(t)=-\frac{\partial L}{\partial u}(t,\gamma(t),\gamma'(t))$.

## CARD id=fc-ch08-013 ref=ch08-equation-newton tags=enonce,formule
### Q
Que devient (E.L) pour $V=\R^n$ euclidien et $L=T-U$, $T(v)=\frac12\norm v^2$, $U$ ne dépendant que de $q$ ?
### R
L'équation de Newton
$$\gamma''(t)=-\nabla U(\gamma(t)),$$
où $\nabla U$ est le gradient de $U$ ([[ch05-gradient-hilbert]]). En effet $\frac{\partial L}{\partial v}(q,v)=v$ et $\frac{\partial L}{\partial q}(q,v)=-\nabla U(q)$ (après identification $V\simeq L(V;\R)$), donc (E.L) s'écrit $\frac{d}{dt}\gamma'(t)=-\nabla U(\gamma(t))$. L'énergie conservée est $H=\frac12\norm{\gamma'}^2+U(\gamma)$. (poly, chap. VIII, Question 7, p. 144)

## CARD id=fc-ch08-014 ref=ch08-voisinage-compact-dans-ouvert tags=enonce
### Q
Énoncer le lemme de topologie de la Question 8 (compact dans un ouvert) et dire à quoi il sert.
### R
Soient $K$ un **compact** et $U$ un **ouvert** d'un espace métrique $(X,d)$, avec $K\subset U$. Pour $\eps>0$, soit $K_\eps=\bigcup_{x\in K}B(x,\eps)$. Si $F=X\setminus U\neq\emptyset$, alors $\inf_{(x,y)\in K\times F}d(x,y)>0$ (par l'absurde, en extrayant dans le compact $K$), et donc $K_\eps\subset U$ pour $\eps$ assez petit. (poly, chap. VIII, Question 8, p. 144)

Usage (Q9) : avec $K=\gamma_0([0;1])\subset U_1$ et $K'=\gamma_0'([0;1])\subset U_2$, toute $\gamma$ avec $\norm{\gamma-\gamma_0}_E<\eps$ reste confinée : $E(U_1,U_2)$ et $E_{a,b}(U_1,U_2)$ sont ouverts.

> ⚠️ Faux si $K$ est seulement fermé : $K=\R\times\{0\}$, $U=\{(x,y):\abs y<e^{-x^2}\}$ dans $\R^2$.

## CARD id=fc-ch08-015 ref=ch08-changement-de-variables tags=enonce
### Q
Énoncer le comportement de (E.L) par changement de variables $\phi$.
### R
Soit $L$ de classe $C^1$ sur $I\times U\times V$, $U$ ouvert de $V$, et $\phi:\mathcal V\to U$ un difféomorphisme (**au moins $C^2$**) d'un ouvert $\mathcal V$ de $V$ sur $U$. On pose
$$L_1:I\times\mathcal V\times V\to\R,\qquad (u,q_1,v_1)\mapsto L(u,\phi(q_1),d\phi_{q_1}(v_1)).$$
Si $\beta=\phi\circ\gamma$ vérifie l'équation d'Euler-Lagrange pour $L$, où $\gamma:[0;1]\to\mathcal V$, alors $\gamma$ vérifie l'équation d'Euler-Lagrange pour $L_1$. (poly, chap. VIII, Question 10, p. 145)

Le $C^2$ sert à ce que $L_1$ soit $C^1$ : $\frac{\partial L_1}{\partial q_1}$ fait intervenir $d^2\phi$.

## CARD id=fc-ch08-016 ref=ch08-groupe-un-parametre-invariance tags=definition,enonce
### Q
Définir : groupe à un paramètre de difféomorphismes engendré par un champ $X$, et Lagrangien invariant sous son action.
### R
$L$ ($C^1$) est défini sur $I\times U\times V$, $U$ ouvert de $V$. Soit $X$ un champ de vecteurs $C^\infty$ sur $U$ **ne dépendant pas du temps**, de flot $(s,x)\mapsto F(s,x)=F_s(x)$ **supposé défini sur $\R\times U$**. Chaque $F_s$ est un difféomorphisme de $U$ et $F_{s_1}\circ F_{s_2}=F_{s_1+s_2}$ : $(F_s)_{s\in\R}$ est un groupe à un paramètre de difféomorphismes. $L$ est **invariant** sous son action si pour tout $s\in\R$ et tout $(u,q,v)\in I\times U\times V$,
$$L\big(u,F_s(q),d(F_s)_q(v)\big)=L(u,q,v).$$
(poly, chap. VIII, p. 145)

## CARD id=fc-ch08-017 ref=ch08-invariance-infinitesimale tags=enonce,formule
### Q
Quelle identité obtient-on en dérivant l'invariance $L(u,F_s(q),d(F_s)_q(v))=L(u,q,v)$ par rapport à $s$ en $s=0$ ?
### R
Pour tout $(u,q,v)\in I\times U\times V$ :
$$\frac{\partial L}{\partial q}(u,q,v)\cdot X(q)+\frac{\partial L}{\partial v}(u,q,v)\cdot dX_q(v)=0 .$$
On utilise $F_0=\id_U$ (donc $d(F_0)_q=\id$), $\frac{\partial F}{\partial s}(0,q)=X(q)$ et $\frac{\partial}{\partial s}\big[d(F_s)_q(v)\big]_{|s=0}=dX_q(v)$, ce dernier par échange de $\partial_s$ et $d_q$ ([[ch05-lemme-schwarz]], le flot étant $C^\infty$). (poly, chap. VIII, Question 11, p. 145)

## CARD id=fc-ch08-018 ref=ch08-noether tags=enonce,formule
### Q
Énoncer le théorème de Noether (chapitre VIII).
### R
Soit $L$ de classe $C^1$ sur $I\times U\times V$, **invariant** sous l'action du groupe à un paramètre de difféomorphismes $(F_s)_{s\in\R}$, flot d'un champ $X$ de classe $C^\infty$ sur $U$. Soit $\gamma\in E$ une courbe à valeurs dans $U$ vérifiant l'équation d'Euler-Lagrange. Alors la fonction
$$t\mapsto Q(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))\cdot\Big(\frac{\partial F}{\partial s}(s,\gamma(t))\Big)_{|s=0}=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))\cdot X(\gamma(t))$$
est **constante**. Slogan : à une symétrie à un paramètre du Lagrangien correspond une quantité conservée. (poly, chap. VIII, Question 12 et Remarque, p. 145)

## CARD id=fc-ch08-019 ref=ch08-noether tags=hypothese,contre-exemple
### Q
Noether pour $L=\frac12\norm v^2-U(q)$ sur $\R^3$ : quelle quantité est conservée pour les translations, pour les rotations ? Que se passe-t-il sans invariance ? L'énergie relève-t-elle de ce théorème ?
### R
* Translations $F_s(q)=q+se$ ($X=e$) : $L$ invariant ssi $U(q+se)=U(q)$ ; alors $Q=\langle\gamma',e\rangle$ (impulsion selon $e$) est conservée.
* Rotations d'axe $e$ unitaire ($X(q)=e\wedge q$), $U$ à symétrie sphérique (ex. $U(q)=-\frac1{\norm q}$ sur $\R^3\setminus\{0\}$) : $Q=\langle\gamma',e\wedge\gamma\rangle=\langle e,\gamma\wedge\gamma'\rangle$ ; en faisant varier $e$, le moment cinétique $\gamma\wedge\gamma'$ est conservé.
* Sans invariance, rien : pesanteur $U(q)=g\,q_3$ ($g\neq0$) ; $L$ est invariant par translation selon $e_1,e_2$ ($\gamma_1',\gamma_2'$ conservées) mais pas selon $e_3$, et $\gamma_3''=-g$ : $\gamma_3'$ n'est pas conservée.
* L'énergie (Q6) vient de l'invariance en **temps** $u$, qui n'est pas une action sur $q$ : ce n'est pas ce théorème.

## CARD id=fc-ch08-020 ref=ch08-noether tags=methode
### Q
Méthode : pour montrer qu'une quantité est conservée le long d'une solution de (E.L) (énergie, Noether), que fait-on ?
### R
On dérive en $t$ par la règle de la chaîne et l'on remplace $\frac{d}{dt}\frac{\partial L}{\partial v}(t,\gamma,\gamma')$ par $\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ grâce à (E.L). Pour Noether :
$$Q'(t)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))\cdot X(\gamma(t))+\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))\cdot dX_{\gamma(t)}(\gamma'(t))=0,$$
par l'identité infinitésimale [[ch08-invariance-infinitesimale]] appliquée en $(u,q,v)=(t,\gamma(t),\gamma'(t))$. La dérivabilité de $t\mapsto\frac{\partial L}{\partial v}(t,\gamma,\gamma')$ est fournie par (E.L) elle-même ; pour l'énergie, on a besoin en plus de $\gamma''$, d'où l'hypothèse $\gamma\in C^2$.

## CARD id=fc-ch08-021 ref=ch08-lagrangien-regulier tags=definition,enonce
### Q
Définir un Lagrangien régulier. Donner un exemple et un non-exemple.
### R
$L : I\times V\times V\to\R$ est de **classe $C^2$**. En tout $(u,q,v)$, $\frac{\partial^2L}{\partial v^2}(u,q,v)$ est une forme bilinéaire symétrique sur $V$, et l'on voit
$$\ell_1\in V\mapsto\frac{\partial^2L}{\partial v^2}(u,q,v)\cdot(\ell_1,\,\cdot\,)\in L(V;\R)$$
comme une application linéaire. $L$ est **régulier** si, en tout point $(u,q,v)$, c'est un **isomorphisme** de $V$ sur $L(V;\R)$ (forme bilinéaire non dégénérée). (poly, chap. VIII, p. 145)

Exemple : $L=\frac12\norm v^2-U(q)$, $\frac{\partial^2L}{\partial v^2}=\langle\cdot,\cdot\rangle$. Non-exemple : $L$ affine en $v$ (dérivée seconde nulle), ou $V=\R$, $L=\frac14v^4$ (dégénéré en $v=0$).

## CARD id=fc-ch08-022 ref=ch08-legendre-inversion-locale tags=enonce,formule
### Q
Énoncer le résultat de la Question 13 sur $\Phi(u,q,v)=\big(u,q,\frac{\partial L}{\partial v}(u,q,v)\big)$. Pourquoi $d\Phi$ est-elle inversible ?
### R
Soit $L$ de classe $C^2$ régulier et $\Phi:I\times V\times V\to I\times V\times L(V;\R)$, $(u,q,v)\mapsto\big(u,q,\frac{\partial L}{\partial v}(u,q,v)\big)$. En tout point $(u_0,q_0,v_0)$, $d\Phi_{(u_0,q_0,v_0)}$ est un isomorphisme ; donc, en posant $p=\frac{\partial L}{\partial v}(u,q,v)\in L(V;\R)$, on peut **localement** autour de $(u_0,q_0,v_0)$ écrire $v=g(u,q,p)$ avec $g$ **de classe $C^1$**. (poly, chap. VIII, Question 13, p. 146)

$d\Phi$ est triangulaire par blocs :
$$d\Phi_{(u_0,q_0,v_0)}=\begin{pmatrix}1&0&0\\ 0&\id_V&0\\ \frac{\partial^2L}{\partial u\partial v}&\frac{\partial^2L}{\partial q\partial v}&\frac{\partial^2L}{\partial v^2}\end{pmatrix},$$
inversible car ses blocs diagonaux le sont (régularité) ; on conclut par l'inversion locale [[ch06-inversion-locale]]. $g$ n'est que $C^1$ car $\Phi$ n'est que $C^1$.

## CARD id=fc-ch08-023 ref=ch08-systeme-premier-ordre-cauchy-lipschitz tags=enonce,formule
### Q
Comment réécrit-on localement (E.L), pour un Lagrangien $C^2$ régulier, en un système du premier ordre ? Pourquoi Cauchy-Lipschitz s'applique-t-il ?
### R
Avec $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ et $g$ de la Question 13 :
$$\begin{cases}\gamma'(t)=g(t,\gamma(t),p(t))\\ p'(t)=\dfrac{\partial L}{\partial q}\big(t,\gamma(t),g(t,\gamma(t),p(t))\big).\end{cases}$$
C'est $\alpha'=Y(t,\alpha)$ avec $\alpha=(\gamma,p)$ et $Y(u,q,p)=\big(g(u,q,p),\frac{\partial L}{\partial q}(u,q,g(u,q,p))\big)$, de classe $C^1$ ($g$ et $\frac{\partial L}{\partial q}$ le sont), donc localement lipschitzien en la seconde variable : hypothèses de [[ch07-cauchy-lipschitz]] satisfaites. Au passage, une solution de (E.L) est **$C^2$** ($\gamma'=g(t,\gamma,p)$ est $C^1$). (poly, chap. VIII, Question 14, p. 146)

## CARD id=fc-ch08-024 ref=ch08-existence-unicite-locale tags=enonce
### Q
Énoncer le théorème d'existence et d'unicité locales pour l'équation d'Euler-Lagrange.
### R
Soit $L:I\times V\times V\to\R$ de **classe $C^2$** et **régulier**. Si l'on se donne $(t_0,q_0,v_0)\in\,]0;1[\times V\times V$, il existe un intervalle ouvert $J\subset\,]0,1[$ contenant $t_0$ tel qu'il existe une **unique** courbe $\gamma:J\to V$ vérifiant l'équation d'Euler-Lagrange avec $\gamma(t_0)=q_0$ et $\gamma'(t_0)=v_0$. (poly, chap. VIII, Question 15, p. 146)

Idée : Cauchy-Lipschitz pour le système en $(\gamma,p)$ de condition initiale $\big(q_0,\frac{\partial L}{\partial v}(t_0,q_0,v_0)\big)$.

## CARD id=fc-ch08-025 ref=ch08-existence-unicite-locale tags=hypothese,contre-exemple
### Q
Dans l'existence-unicité locale pour (E.L), que se passe-t-il si l'on remplace les données $(\gamma(t_0),\gamma'(t_0))$ par les extrémités $(\gamma(0),\gamma(1))$ ? Et si $L$ n'est pas régulier ?
### R
* **Problème aux deux bouts : ni existence ni unicité en général.** $V=\R$, $L=\frac12v^2-\frac12\pi^2q^2$ : (E.L) est $\gamma''=-\pi^2\gamma$, de solutions $c_1\cos(\pi t)+c_2\sin(\pi t)$. Avec $a=b=0$ : une infinité de solutions $c_2\sin(\pi t)$ ; avec $a=0$, $b\neq0$ : aucune ($\gamma(1)=-c_1=-a$).
* **Sans régularité**, (E.L) reste implicite en $\gamma''$ : pas de forme $\alpha'=Y(t,\alpha)$, et l'unicité peut tomber (pour $L=\norm v$, longueur d'arc, toute reparamétrisation d'une solution est solution).
* Le résultat est **local** : $J$ peut être strictement plus petit que $]0;1[$.
