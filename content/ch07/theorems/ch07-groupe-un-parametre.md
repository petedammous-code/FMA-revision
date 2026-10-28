---
id: ch07-groupe-un-parametre
type: proposition
chapter: 7
title: Propriété de groupe du flot autonome : $F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x$
ref: Remarque VII.3.6
page: 135
importance: 3
depends: [ch07-translation-temps-autonome, ch07-flot-global-def]
tags: [flot, autonome, groupe-un-parametre, morphisme, bijection, difféomorphisme]
---
## Intuition

> 💡 Pour un champ autonome, notons $F_t$ l'application « laisser couler le temps pendant $t$ » : $F_t\cdot x$ est la position à l'instant $t$ de la particule partie de $x$ à l'instant $0$. Couler pendant $t$ puis pendant $s$, c'est couler pendant $t+s$ : $F_s\circ F_t=F_{t+s}$. Couler pendant $0$ ne fait rien : $F_0=\id$. Couler pendant $-t$ défait ce que $F_t$ a fait : $F_{-t}\circ F_t=\id$. Les $F_t$ forment donc un **groupe à un paramètre** de transformations de $U$ — exactement comme $t\mapsto e^{tA}$ pour l'équation linéaire $\alpha'=A\alpha$.

Ce n'est rien d'autre que le théorème d'invariance par translation ([[ch07-translation-temps-autonome]]) réécrit avec le flot : la particule partie de $F_t\cdot x$ suit la même trajectoire que celle partie de $x$, avec $t$ d'avance. La seule subtilité est le **domaine** : $F_t\cdot x$ n'est défini que si $t\in J(x)$ (durée de vie de $x$, [[ch07-courbe-integrale-maximale-def]]), et la formule n'a de sens que là où les deux membres existent. Lorsque toutes les solutions sont globales ($D_0=\R\times U$), on obtient un vrai morphisme de groupes $(\R,+)\to\mathrm{Bij}(U)$.

Notations ([[ch07-flot-global-def]]) : $X : U\to E$ autonome et lipschitzien, $I=\R$, $\tau_0=0$ ; $D_0=\{(t,x)\in\R\times U\ ;\ t\in J(x)\}$ est le domaine du flot $F : D_0\to U$, $F(t,x)=\alpha_x(t)$, où $\alpha_x$ est la courbe intégrale maximale de condition initiale $(0,x)$.

## Énoncé

**Proposition (poly, Remarque VII.3.6, p. 135 — reformulation du Théorème VII.3.5).** Soit $X : U\to E$ un champ de vecteurs autonome et lipschitzien sur l'ouvert $U$ de l'espace de Banach $E$. Pour tout $(t,x)\in D_0$, posons
$$
F_t\cdot x=\alpha_x(t)=F(t,x),
$$
où $\alpha_x$ est la courbe intégrale maximale de $X$ de condition initiale $x$. Alors, lorsque $(t,x)$ et $(s,F_t\cdot x)$ sont dans $D_0$, on a $(t+s,x)\in D_0$ et
$$
\text{(VII.3.1)}\qquad F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x .
$$
Si $D_0=\R\times U$, alors $F_t$ est défini sur $U$ tout entier pour tout $t\in\R$, et $t\mapsto F_t$ est un morphisme de groupes de $(\R,+)$ dans le groupe des bijections de $U$ : $F_0=\id_U$, $F_s\circ F_t=F_{t+s}$, et $F_t$ est une bijection de $U$ d'inverse $F_{-t}$.

*Complément (cas général).* Pour $t\in\R$, notons $U_t=\{x\in U\ ;\ (t,x)\in D_0\}$ le domaine de $F_t$. Alors $F_t$ est une bijection de $U_t$ sur $U_{-t}$, d'inverse $F_{-t}$.

## Hypothèses

### H1 — $X$ est autonome

**Rôle.** C'est l'hypothèse du théorème [[ch07-translation-temps-autonome]] : la translatée en temps d'une courbe intégrale est encore une courbe intégrale. Sans elle, les « $F_t=F(0,t,\cdot)$ » ne composent pas selon (VII.3.1).

**Si on la retire.** $X(t,x)=2t$ sur $\R\times\R$ : $F(0,t,x)=x+t^2$. En posant $F_t\cdot x=F(0,t,x)$, on trouve $F_s\cdot(F_t\cdot x)=x+t^2+s^2$ alors que $F_{t+s}\cdot x=x+(t+s)^2$ : différents dès que $ts\ne0$. Pour un champ dépendant du temps, la bonne relation est $F(t_0,s+t,x)=F(s,s+t,F(t_0,s,x))$ ([[ch07-composition-flot]]), qui fait intervenir l'instant absolu $s$.

### H2 — $X$ lipschitzien

**Rôle.** Garantit l'unicité, donc l'existence du flot. Comme dans [[ch07-translation-temps-autonome]], « localement lipschitzien » suffit.

**Si on la retire.** Sans condition de Lipschitz, le flot n'est pas défini (non-unicité, [[ch07-peano-non-unicite]]). Hypothèse de confort pour ce qui est de « lipschitzien » contre « localement lipschitzien ».

### H3 — $(t,x)\in D_0$ et $(s,F_t\cdot x)\in D_0$

**Rôle.** Ce sont les conditions pour que le membre de gauche soit défini ; la preuve montre qu'alors le membre de droite l'est aussi. La relation (VII.3.1) est une égalité « là où elle a un sens ».

**Si on la retire.** Pour $\alpha'=\alpha^2$ sur $U=\R$ : $F_t\cdot x=\dfrac{x}{1-tx}$ sur $D_0=\{tx<1\}$ ([[ch07-flot-global-def]]). Avec $x=1$, $t=\tfrac12$ : $F_{1/2}\cdot1=2$ ; puis $s=\tfrac12$ : $(\tfrac12,2)\notin D_0$ car $\tfrac12\cdot2=1\not<1$. Le membre de gauche $F_{1/2}\cdot(F_{1/2}\cdot1)$ n'est pas défini, et de fait $(1,1)\notin D_0$ : le membre de droite non plus. Là où les deux sont définis, la formule est vraie (exemple 2).

### H4 — $D_0=\R\times U$ (pour le morphisme de groupes)

**Rôle.** Pour que $F_t$ soit une application de $U$ dans $U$ pour **tout** $t$, il faut que toutes les solutions soient définies sur $\R$ (champ « complet »).

**Si on la retire.** Pour $\alpha'=\alpha^2$, $F_1$ n'est défini que sur $U_1=\{x<1\}$ et n'est pas une bijection de $\R$. On garde seulement la version « locale » : $F_t : U_t\to U_{-t}$ est une bijection (complément de l'énoncé).

## Idée de la preuve

Appliquer [[ch07-translation-temps-autonome]] avec $x_0=x$, $t_1=t$ : $J(F_t\cdot x)=J(x)-t$ et $\alpha_{F_t\cdot x}(s)=\alpha_x(s+t)$. Pour le groupe : $F_0=\id$ et (VII.3.1) donnent $F_{-t}\circ F_t=F_t\circ F_{-t}=\id$.

## Preuve

**Formule (VII.3.1).** Soient $(t,x)\in D_0$ et $y=F_t\cdot x=\alpha_x(t)$, avec $(s,y)\in D_0$, c'est-à-dire $s\in J(y)$. D'après [[ch07-translation-temps-autonome]] appliqué à $x_0=x$ et $t_1=t\in J(x)$, la courbe intégrale maximale de condition initiale $y=\alpha_x(t)$ est
$$
\alpha_y : J(x)-t\to U,\qquad \alpha_y(u)=\alpha_x(u+t),\qquad\text{et}\qquad J(y)=J(x)-t .
$$
Comme $s\in J(y)=J(x)-t$, on a $s+t\in J(x)$, c'est-à-dire $(t+s,x)\in D_0$, et
$$
F_s\cdot(F_t\cdot x)=\alpha_y(s)=\alpha_x(s+t)=F_{t+s}\cdot x .
$$

**Complément : $F_t$ est une bijection de $U_t$ sur $U_{-t}$.** Soit $x\in U_t$ et $y=F_t\cdot x$. Alors $J(y)=J(x)-t$ contient $0-t=-t$ (car $0\in J(x)$), donc $y\in U_{-t}$ : $F_t$ envoie $U_t$ dans $U_{-t}$. Par (VII.3.1) avec $s=-t$ : $F_{-t}\cdot(F_t\cdot x)=F_0\cdot x=\alpha_x(0)=x$. En échangeant les rôles de $t$ et $-t$, $F_t\cdot(F_{-t}\cdot y)=y$ pour tout $y\in U_{-t}$. Donc $F_t : U_t\to U_{-t}$ et $F_{-t} : U_{-t}\to U_t$ sont des bijections réciproques l'une de l'autre.

**Cas $D_0=\R\times U$.** Alors $U_t=U$ pour tout $t\in\R$ : chaque $F_t$ est une application $U\to U$, et d'après ce qui précède une bijection de $U$ d'inverse $F_{-t}$. On a $F_0=\id_U$ (car $\alpha_x(0)=x$) et, pour tous $s,t\in\R$ et $x\in U$, la relation (VII.3.1) s'écrit $F_s\circ F_t=F_{t+s}=F_{s+t}$. Ainsi $t\mapsto F_t$ est un morphisme du groupe $(\R,+)$ dans le groupe $(\mathrm{Bij}(U),\circ)$ des bijections de $U$. $\square$

*Remarque.* Si de plus $X$ est de classe $C^p$ ($p\ge1$), $F$ est de classe $C^p$ sur $D_0$ ([[ch07-flot-global-ouvert-regulier]]), donc $F_t$ et $F_{-t}$ sont $C^p$ : $F_t$ est un $C^p$-difféomorphisme de l'ouvert $U_t$ sur l'ouvert $U_{-t}$, et le morphisme est à valeurs dans le groupe des difféomorphismes de $U$ lorsque $D_0=\R\times U$.

## Preuve à trous

Soient $(t,x)\in D_0$, $y=F_t\cdot x$ et $(s,y)\in D_0$. Par <trou indice="le théorème précédent, avec $x_0=x$ et $t_1=t$">le théorème d'invariance par translation (VII.3.5) : $J(y)=J(x)-t$ et $\alpha_y(u)=\alpha_x(u+t)$</trou>. Comme $s\in J(y)$, <trou indice="traduire $s\in J(x)-t$">$s+t\in J(x)$, donc $(t+s,x)\in D_0$</trou>, et $F_s\cdot(F_t\cdot x)=\alpha_y(s)=\alpha_x(s+t)=F_{t+s}\cdot x$.

Si $D_0=\R\times U$ : $F_0=\id_U$ car $\alpha_x(0)=x$, et (VII.3.1) donne $F_s\circ F_t=F_{s+t}$ ; en particulier <trou indice="prendre $s=-t$">$F_{-t}\circ F_t=F_0=\id_U=F_t\circ F_{-t}$, donc $F_t$ est une bijection d'inverse $F_{-t}$</trou>. D'où le morphisme de groupes $(\R,+)\to\mathrm{Bij}(U)$. $\square$

## Exemples

**Exemple 1 (champ linéaire).** $E=\R^n$, $X(x)=Ax$ avec $A\in\Mat_n(\R)$. Ici $F_t=e^{tA}$ (car $t\mapsto e^{tA}x$ est la solution de $\alpha'=A\alpha$, $\alpha(0)=x$, définie sur $\R$), $D_0=\R\times\R^n$, et (VII.3.1) est l'identité $e^{sA}e^{tA}=e^{(s+t)A}$. Le morphisme $t\mapsto e^{tA}$ est un **sous-groupe à un paramètre** de $\GL_n(\R)$ (exercice VII.4.3 du poly). Avec $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, $e^{tA}$ est la rotation d'angle $t$ : le morphisme $\R\to\mathrm{SO}(2)$ est surjectif mais **non injectif** ($F_{2\pi}=\id$).

**Exemple 2 ($\alpha'=\alpha^2$ : groupe « local »).** $F_t\cdot x=\dfrac{x}{1-tx}$ sur $D_0=\{tx<1\}$. Vérifions (VII.3.1) directement, pour $tx<1$ et $s\,F_t\cdot x<1$ :
$$
F_s\cdot(F_t\cdot x)=\frac{\dfrac{x}{1-tx}}{1-s\dfrac{x}{1-tx}}=\frac{x}{1-tx-sx}=\frac{x}{1-(t+s)x}=F_{t+s}\cdot x,
$$
et le dénominateur $1-(t+s)x=(1-tx)\big(1-s\,F_t\cdot x\big)$ est bien $>0$ : $(t+s,x)\in D_0$. Ici $U_t=\{x\ ;\ tx<1\}$ et $F_t$ est l'homographie $x\mapsto x/(1-tx)$, bijection de $U_t$ sur $U_{-t}=\{y\ ;\ -ty<1\}$ d'inverse $y\mapsto y/(1+ty)$. Pour $t=1$ : $F_1 : \,]-\infty\,;1[\,\to\,]-1\,;+\infty[$. Pas de groupe global : $D_0\ne\R\times\R$.

**Exemple 3 (champ complet non linéaire).** Sur $U=\R$, $X(x)=\dfrac{1}{1+x^2}$ (lipschitzien, borné par $1$). Toute solution vérifie $\abs{\alpha(t)-x}\le\abs t$, donc reste dans un compact sur tout intervalle borné : par le lemme des bouts ([[ch07-lemme-des-bouts]]), $J(x)=\R$ et $D_0=\R\times\R$. L'équation $\alpha'(1+\alpha^2)=1$ s'intègre en $\alpha+\alpha^3/3=t+x+x^3/3$ : $F_t\cdot x=\varphi^{-1}(\varphi(x)+t)$ où $\varphi(u)=u+u^3/3$ est un difféomorphisme croissant de $\R$. On lit directement $F_s\circ F_t=F_{s+t}$ : le flot est conjugué par $\varphi$ au groupe des translations de $\R$.

## Pièges

* > ⚠️ (VII.3.1) n'a de sens que là où ses membres sont définis : toujours vérifier $(t,x)\in D_0$ **puis** $(s,F_t\cdot x)\in D_0$. On n'a pas le droit d'écrire $F_s\circ F_t=F_{t+s}$ comme égalité d'applications de $U$ si $D_0\ne\R\times U$.
* « Morphisme de groupes » ne signifie pas « injectif » : pour une rotation, $F_{2\pi}=F_0$. Le noyau de $t\mapsto F_t$ est un sous-groupe fermé de $\R$ ($\{0\}$, $\R$ pour un champ nul, ou $T\Z$ si toutes les trajectoires sont $T$-périodiques).
* Les $F_t$ commutent entre eux ($F_s\circ F_t=F_t\circ F_s=F_{s+t}$) : c'est un groupe **commutatif** de transformations ; cela ne veut pas dire que $F_t$ commute avec d'autres applications.
* L'hypothèse $D_0=\R\times U$ (champ complet) est forte : elle est fausse dès qu'une solution explose en temps fini ou atteint le bord de $U$. Critères pour l'obtenir : champ globalement lipschitzien sur $E$ (Gronwall, exercice VII.4.2), ou trajectoires confinées dans des compacts ([[ch07-lemme-des-bouts]]).
* Pour un champ **dépendant du temps**, il n'y a pas de groupe à un paramètre : la famille à deux indices $\Phi_{s,t}=F(s,t,\cdot)$ vérifie seulement $\Phi_{s,u}\circ\Phi_{t,s}=\Phi_{t,u}$ ([[ch07-composition-flot]]) et $\Phi_{s,t}^{-1}=\Phi_{t,s}$ ([[ch07-flot-inverse]]).
