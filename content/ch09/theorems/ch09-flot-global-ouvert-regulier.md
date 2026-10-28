---
id: ch09-flot-global-ouvert-regulier
type: theorem
chapter: 9
title: Le domaine du flot global est ouvert et le flot est $C^p$
ref: Théorème IX.8.8
page: 175
importance: 2
depends: [ch07-flot-global-ouvert-regulier, ch09-flot-local-sous-variete, ch09-flot-global-sous-variete-def, ch09-flot-propriete-groupe, ch09-champ-tangent-courbe-integrale-flot-local-def, ch09-ex-produit, ch09-ex-ouvert-de-sous-variete, ch09-remarques-applications-cr]
tags: [flot, flot-global, ouvert, regularite, classe-cp, connexite, sous-variete, champ-tangent]
---
## Intuition

> 💡 Même énoncé de stabilité qu'au chapitre VII ([[ch07-flot-global-ouvert-regulier]]), mais pour des trajectoires tracées **sur** la sous-variété $S$. (a) Si la particule partie de $x_0$ à l'instant $\tau_0$ est encore en vie à l'instant $t$, alors toute particule partie d'un point de $S$ voisin, à un instant voisin, est encore en vie à tout instant voisin de $t$ : le domaine $D$ est **ouvert**. (b) Le point d'arrivée dépend de façon $C^p$ de $(\tau_0,t,x_0)$ si le champ est $C^p$.

Le théorème du flot local sur $S$ ([[ch09-flot-local-sous-variete]]) le donne pour des temps courts ; on le **propage** le long de toute la trajectoire par un argument de connexité sur l'intervalle de vie, en recollant des flots locaux grâce à la formule de composition ([[ch09-flot-propriete-groupe]]).

Notations ([[ch09-flot-global-sous-variete-def]]). $X : I\times S\to\R^N$ est un champ de vecteurs tangents ($X(t,x)\in T_xS$, $X$ continu, [[ch09-champ-tangent-courbe-integrale-flot-local-def]]) ; $\alpha_{\tau_0,x_0} : J_{\tau_0}(x_0)\to S$ est la courbe intégrale maximale de condition initiale $(\tau_0,x_0)$ ; $D=\{(\tau_0,t,x_0)\in I\times I\times S\mid t\in J_{\tau_0}(x_0)\}$ et $F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t)$. Les ensembles $S$, $I\times I\times S$, $D$ sont munis de la topologie induite par l'espace ambiant ; $I\times I\times S$ est une sous-variété de $\R\times\R\times\R^N$ ([[ch09-ex-produit]]) et donc, si $D$ est ouvert, $D$ aussi ([[ch09-ex-ouvert-de-sous-variete]]) : « $F$ de classe $C^p$ sur $D$ » a un sens ([[ch09-application-cr-entre-sous-varietes-def]]). Convention : « de classe $C^0$ » signifie « continue ».

## Énoncé

**Théorème (poly, Théorème IX.8.8, p. 175).** Soit $X : I\times S\to\R^N$ un champ de vecteurs tangents dépendant du temps sur une sous-variété $S$ de $\R^N$. Supposons que $X$ soit localement lipschitzien en la seconde variable. Alors :

a. $D$ est un ouvert de $I\times I\times S$.

b. Si $X$ est de classe $C^p$, $F$ est de classe $C^p$ sur $D$.

(Pour $p\ge1$, on suppose implicitement $S$ de classe $C^k$ avec $k\ge p$, afin que « $X$ de classe $C^p$ sur $I\times S$ » ait un sens, [[ch09-fonction-differentiable-sur-sous-variete-def]].)

## Hypothèses

### H1 — $X$ est un champ **tangent** à $S$

**Rôle.** Sans tangence, il n'y a en général aucune courbe intégrale tracée sur $S$ ; c'est le cadre même de la définition de $D$ et de $F$.

**Si on la retire.** $S=\mathbb S^1$, $X(p)=e_1$ (constant). En $p=(1,0)$, $T_p\mathbb S^1=\R e_2$ ; une courbe $\alpha$ tracée sur $\mathbb S^1$ avec $\alpha(0)=p$ a $\alpha'(0)\in\R e_2$, donc ne peut vérifier $\alpha'(0)=e_1$. Il n'y a aucune courbe intégrale sur $S$ issue de $p$ : ni $J_0(p)$, ni $F(0,\cdot,p)$ n'ont de sens.

### H2 — $X$ localement lipschitzien en la seconde variable

**Rôle.** Assure l'existence des flots locaux sur $S$ (théorème IX.8.5, [[ch09-flot-local-sous-variete]]) et l'unicité des courbes intégrales, donc l'existence même de la courbe intégrale maximale et du flot global. Les flots locaux sont les briques de la preuve.

**Si on la retire.** $S=\R$ (ouvert de $\R$, donc sous-variété), $X(x)=2\abs x^{1/2}$ : les courbes $t\mapsto0$ et $t\mapsto t^2\mathbf 1_{t\ge0}$ sont deux courbes intégrales issues de $(0,0)$ ; il n'y a pas « la » courbe intégrale maximale, et $F$ n'est pas défini.

### H3 — $X$ de classe $C^p$ (pour b)

**Rôle.** Le flot local sur $S$ est alors de classe $C^p$ (théorème IX.8.5), et la preuve propage cette régularité par composition.

**Si on la retire.** Avec seulement H2 (et $X$ continu par définition), $F$ est continu (c'est le cas $p=0$ de b) mais pas mieux en général. Exemple : $S=\R$, $X(x)=\abs x$, lipschitzien, non $C^1$. On trouve $F(0,t,x)=x\,e^{t}$ si $x\ge0$ et $F(0,t,x)=x\,e^{-t}$ si $x\le0$ (le signe de $x$ est conservé par unicité, $0$ étant un point fixe). Pour $t\ne0$, $x\mapsto F(0,t,x)$ a pour dérivée à droite $e^t$ et à gauche $e^{-t}$ en $x=0$ : $F$ n'est pas différentiable en $(0,t,0)$.

## Idée de la preuve

Fixer $(\tau_0,x_0)$ et considérer l'ensemble $A$ des $s\in J_{\tau_0}(x_0)$ tels que $F$ soit défini et $C^p$ sur un voisinage produit de $(\tau_0,s,x_0)$. $A$ contient $\tau_0$ (flot local), est ouvert (trivial) et fermé (recollement avec un flot local en $(b,F(\tau_0,b,x_0))$ par la formule de composition) : $A=J_{\tau_0}(x_0)$ par connexité.

## Preuve

*Le poly ne rédige pas la preuve (« on obtient aussi bien sûr l'analogue du théorème VII.3.9 »). On reprend celle du théorème VII.3.9 ([[ch07-flot-global-ouvert-regulier]]), en remplaçant le flot local VII.2.12 par le flot local sur $S$ (théorème IX.8.5) et la formule de composition VII.3.7 par sa version sur $S$ ([[ch09-flot-propriete-groupe]]).*

On fixe $p\ge0$ ; pour démontrer a seul, on prend $p=0$ (le champ $X$ est continu par définition, et le flot local est alors continu).

**Lemme (flot local et flot global).** Soit $(E(J_1,\epsilon_1),U_1,F_{\rm loc})$ un flot local de $X$ en un point $(\tau,z)\in I\times S$, fourni par le théorème IX.8.5. Alors $E(J_1,\epsilon_1)\times U_1\subset D$ et $F=F_{\rm loc}$ sur $E(J_1,\epsilon_1)\times U_1$ ; en particulier $F$ est de classe $C^p$ sur cet ensemble, qui est un voisinage ouvert de $(\tau,\tau,z)$ dans $I\times I\times S$.

*Preuve du lemme.* Pour $(t_0,x)\in J_1\times U_1$, la courbe $\alpha_{t_0,x}$ du flot local est une courbe intégrale de condition initiale $(t_0,x)$ définie sur $]t_0-\epsilon_1,t_0+\epsilon_1[$ ; par définition de l'intervalle de vie comme réunion, $]t_0-\epsilon_1,t_0+\epsilon_1[\subset J_{t_0}(x)$ et, par unicité, la courbe intégrale maximale la prolonge : $F(t_0,t,x)=F_{\rm loc}(t_0,t,x)$. L'ensemble $E(J_1,\epsilon_1)=\{(t_0,t)\mid t_0\in J_1,\ \abs{t-t_0}<\epsilon_1\}$ est un ouvert de $\R^2$ contenu dans $I\times I$ et $U_1$ est un ouvert de $S$. Enfin $F_{\rm loc}$ est $C^p$ par le théorème IX.8.5.

**Mise en place.** Fixons $(\tau_0,x_0)\in I\times S$, posons $J=J_{\tau_0}(x_0)$ et notons $A$ l'ensemble des $s\in J$ tels qu'il existe un ouvert $O$ de $I\times I$ contenant $(\tau_0,s)$ et un ouvert $U'$ de $S$ contenant $x_0$ avec $O\times U'\subset D$ et $F$ de classe $C^p$ sur $O\times U'$. Il suffit de montrer $A=J$ pour tout $(\tau_0,x_0)$ : alors tout point $(\tau_0,t,x_0)\in D$ vérifie $t\in J=A$, donc possède un voisinage dans $I\times I\times S$ contenu dans $D$ sur lequel $F$ est $C^p$ ; cela donne a, et b puisque la classe $C^p$ est une propriété locale. Comme $J$ est un intervalle, donc connexe, il suffit de voir que $A$ est non vide, ouvert et fermé dans $J$.

**$A$ est non vide.** Le lemme appliqué à un flot local en $(\tau_0,x_0)$ fournit $O=E(J_0,\epsilon_0)\ni(\tau_0,\tau_0)$ et $U'=U_0\ni x_0$ : $\tau_0\in A$.

**$A$ est ouvert dans $J$.** Si $O\times U'$ convient pour $s$, il convient pour tout $s'\in J$ tel que $(\tau_0,s')\in O$, ce qui est le cas pour $s'$ assez proche de $s$ puisque $O$ est ouvert.

**$A$ est fermé dans $J$.** Soit $b\in J$ adhérent à $A$ et $x_1=F(\tau_0,b,x_0)\in S$. Soit $(E(J_1,2\epsilon_1),U_1,F_{\rm loc})$ un flot local en $(b,x_1)$ (théorème IX.8.5). La courbe $t\mapsto F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t)$ est continue et vaut $x_1$ en $b$ ; $J_1$ est un ouvert contenant $b$ et $U_1$ un ouvert de $S$ contenant $x_1$ : on peut donc choisir
$$
t_2\in A,\qquad \abs{t_2-b}<\epsilon_1,\qquad t_2\in J_1,\qquad F(\tau_0,t_2,x_0)\in U_1 .
$$
Soit $O_2\times U_2$ un voisinage produit de $(\tau_0,t_2,x_0)$ associé à $t_2\in A$. L'ensemble des $(t_0,t,x)\in O_2\times U_2$ tels que $t\in J_1$ et $F(t_0,t,x)\in U_1$ est un ouvert de $O_2\times U_2$ ($F$ y est continue) contenant $(\tau_0,t_2,x_0)$ ; il contient donc un produit de la même forme, et quitte à restreindre $O_2$ et $U_2$, on suppose
$$
t\in J_1\quad\text{et}\quad F(t_0,t,x)\in U_1\qquad\text{pour tout }(t_0,t,x)\in O_2\times U_2 .
$$
Pour un tel $(t_0,t,x)$, notons $y=F(t_0,t,x)$. Le flot local fournit une courbe intégrale de condition initiale $(t,y)$ définie sur $]t-2\epsilon_1,t+2\epsilon_1[$, donc $]t-2\epsilon_1,t+2\epsilon_1[\subset J_t(y)$ ; or $J_t(y)=J_{t_0}(x)$ (complément de la formule de composition, [[ch09-flot-propriete-groupe]]). Ainsi, pour $\abs s<2\epsilon_1$, $(t_0,t+s,x)\in D$ et, par la formule de composition et le lemme,
$$
F(t_0,t+s,x)=F\big(t,t+s,F(t_0,t,x)\big)=F_{\rm loc}\big(t,t+s,F(t_0,t,x)\big).\qquad(\ast)
$$
Posons $O_3=\{(t_0,t+s)\mid(t_0,t)\in O_2,\ \abs s<2\epsilon_1\}$, ouvert de $\R^2$ comme réunion des translatés $O_2+(0,s)$. D'après ce qui précède, $O_3\subset I\times I$ et $O_3\times U_2\subset D$ ; de plus $(\tau_0,b)\in O_3$ puisque $(\tau_0,t_2)\in O_2$ et $\abs{b-t_2}<\epsilon_1<2\epsilon_1$.

Reste la régularité de $F$ sur $O_3\times U_2$. Soit $(t_0^*,u^*,x^*)\in O_3\times U_2$, avec $u^*=t^*+s^*$, $(t_0^*,t^*)\in O_2$, $\abs{s^*}<2\epsilon_1$. L'ensemble
$$
\Omega=\{(t_0,u,x)\in\R\times\R\times U_2\mid(t_0,t^*)\in O_2,\ \abs{u-t^*}<2\epsilon_1\}
$$
est un voisinage ouvert de $(t_0^*,u^*,x^*)$ dans $\R\times\R\times S$, contenu dans $O_3\times U_2$, et d'après $(\ast)$ (avec $t=t^*$, $s=u-t^*$),
$$
F(t_0,u,x)=F_{\rm loc}\big(t^*,u,F(t_0,t^*,x)\big)\qquad\text{sur }\Omega .
$$
L'application $(t_0,u,x)\mapsto(t^*,u,F(t_0,t^*,x))$ est de classe $C^p$ sur $\Omega$ (composée de $(t_0,u,x)\mapsto(t_0,t^*,x)$, affine, et de $F$, de classe $C^p$ sur $O_2\times U_2$), à valeurs dans $E(J_1,2\epsilon_1)\times U_1$ (car $t^*\in J_1$, $\abs{u-t^*}<2\epsilon_1$ et $F(t_0,t^*,x)\in U_1$) ; $F_{\rm loc}$ est $C^p$ sur cet ensemble. Par composition ([[ch09-remarques-applications-cr]]), $F$ est $C^p$ sur $\Omega$. Donc $F$ est $C^p$ sur $O_3\times U_2$, et $b\in A$.

**Conclusion.** $A$ est non vide, ouvert et fermé dans l'intervalle $J$, donc $A=J$. $\square$

## Preuve à trous

On fixe $(\tau_0,x_0)$, $J=J_{\tau_0}(x_0)$, et l'on note $A$ l'ensemble des $s\in J$ tels que $(\tau_0,s,x_0)$ admette un voisinage produit $O\times U'\subset D$ sur lequel $F$ est $C^p$. Il suffit de montrer $A=J$, et pour cela, <trou indice="quelle propriété de J utiliser ?">$J$ étant un intervalle donc connexe, que $A$ est non vide, ouvert et fermé dans $J$</trou>.

Non vide : <trou indice="en temps court">un flot local en $(\tau_0,x_0)$ (théorème IX.8.5) coïncide avec $F$ sur $E(J_0,\epsilon_0)\times U_0$ et y est $C^p$, donc $\tau_0\in A$</trou>. Ouvert : immédiat, $O$ étant ouvert.

Fermé : soit $b$ adhérent à $A$, $x_1=F(\tau_0,b,x_0)$, et $(E(J_1,2\epsilon_1),U_1,F_{\rm loc})$ un flot local en $(b,x_1)$. On choisit $t_2\in A\cap J_1$ avec $\abs{t_2-b}<\epsilon_1$ et $F(\tau_0,t_2,x_0)\in U_1$, puis un voisinage $O_2\times U_2$ de $(\tau_0,t_2,x_0)$ sur lequel $F$ est $C^p$, $t\in J_1$ et $F(t_0,t,x)\in U_1$. Pour $\abs s<2\epsilon_1$, <trou indice="recoller avec le flot local">la formule de composition donne $F(t_0,t+s,x)=F_{\rm loc}(t,t+s,F(t_0,t,x))$, défini et $C^p$</trou>. Donc $F$ est défini et $C^p$ sur $O_3\times U_2$, où $O_3=\bigcup_{\abs s<2\epsilon_1}\big(O_2+(0,s)\big)$, et <trou indice="pourquoi ce voisinage contient-il le point voulu ?">$(\tau_0,b)\in O_3$ car $(\tau_0,t_2)\in O_2$ et $\abs{b-t_2}<\epsilon_1<2\epsilon_1$</trou> : $b\in A$. $\square$

## Exemples

**Exemple 1 (un cercle privé d'un point).** $S=\mathbb S^1\setminus\{(1,0)\}$, sous-variété de $\R^2$ (ouvert de la sous-variété $\mathbb S^1$, [[ch09-ex-ouvert-de-sous-variete]]), non compacte. $X(p)=(-p_2,p_1)$, tangent (orthogonal à $p$), indépendant du temps. Tout $p\in S$ s'écrit $p=(\cos\theta(p),\sin\theta(p))$ avec $\theta(p)\in\,]0,2\pi[$, et $\theta : S\to\,]0,2\pi[$ est continue (c'est une carte). La courbe $\alpha(t)=(\cos(\theta(p)+t),\sin(\theta(p)+t))$ est la courbe intégrale issue de $p$ tant qu'elle reste dans $S$, c'est-à-dire pour $0<\theta(p)+t<2\pi$ ; elle ne se prolonge pas au-delà, car sa limite quand $t\to2\pi-\theta(p)$ est $(1,0)\notin S$. Donc
$$
J(p)=\,]-\theta(p),\,2\pi-\theta(p)[,\qquad D_0=\{(t,p)\in\R\times S\mid0<\theta(p)+t<2\pi\},
$$
ouvert de $\R\times S$ par continuité de $\theta$ (et différent de $\R\times S$), et $F(t,p)=R_t\,p$ ($R_t$ rotation d'angle $t$), restriction d'une application $C^\infty$ de $\R\times\R^2$ : $F$ est $C^\infty$ sur $D_0$. Avec trois arguments : $D=\{(t_0,t,p)\mid0<\theta(p)+t-t_0<2\pi\}$.

**Exemple 2 (explosion, $S=\R$, $X(x)=x^2$).** $F(t_0,t,x)=\dfrac{x}{1-(t-t_0)x}$ sur $D=\{(t_0,t,x)\in\R^3\mid(t-t_0)x<1\}$ : ouvert (image réciproque de $]-\infty,1[$ par une fonction continue) et $F$ est $C^\infty$ sur $D$, comme $X$. Le point $(0,1,1)$ n'est pas dans $D$, mais tout $(0,t,1)$ avec $t<1$ y est, avec une marge : pour $\abs{t_0}$, $\abs{t'-t}$, $\abs{x-1}$ petits, $(t'-t_0)x<1$.

**Exemple 3 (champ dépendant du temps sur $\mathbb S^2$).** $X(t,p)=a(t)\,(e_3\wedge p)$ avec $a : I\to\R$ de classe $C^p$, et $A$ une primitive de $a$. Comme $\frac{d}{dt}R_{A(t)-A(\tau_0)}p=a(t)\,e_3\wedge R_{A(t)-A(\tau_0)}p$, on a $F(\tau_0,t,p)=R_{A(t)-A(\tau_0)}\,p$ sur $D=I\times I\times\mathbb S^2$, et $F$ est de classe $C^{p+1}$, donc a fortiori $C^p$.

## Pièges

* > ⚠️ « $D$ ouvert de $I\times I\times S$ » s'entend pour la topologie **induite** : $D$ est l'intersection de $I\times I\times S$ avec un ouvert de $\R\times\R\times\R^N$, pas un ouvert de $\R^{N+2}$ (une sous-variété de dimension $m<N$ n'est jamais ouverte dans $\R^N$).
* $D$ ouvert ne veut pas dire $D=I\times I\times S$ : les courbes intégrales peuvent exploser ou sortir de $S$ (exemples 1 et 2). Pour un flot défini partout, il faut un argument de plus, par exemple la compacité de $S$ ([[ch09-flot-complet-compacte]]).
* $F$ n'est en général pas plus régulier que $X$ en la variable d'espace (hypothèse H3) ; en revanche $t\mapsto F(\tau_0,t,x_0)$ est $C^{p+1}$ puisque sa dérivée est $X(t,F(\tau_0,t,x_0))$.
* La preuve ne passe pas par un prolongement de $X$ à un ouvert de $\R^N$ : tout se fait sur $S$, avec les flots locaux du théorème IX.8.5 (eux-mêmes obtenus via les paramétrages locaux).
* Conséquence utile : pour $X$ autonome et $t$ fixé, $D_t=\{x\in S\mid t\in J(x)\}$ est un ouvert de $S$ et $x\mapsto F_t\cdot x$ y est $C^p$.
