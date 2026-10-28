---
id: ch06-point-fixe-parametre-cp
type: theorem
chapter: 6
title: Point fixe de Banach à paramètre II (régularité $C^p$)
ref: Théorème VI.1.4
page: 117
importance: 3
depends: [ch06-point-fixe-parametre-continu, ch05-accroissements-finis, ch06-neumann-inverse-id-moins-l, ch05-differentielle-bilineaire, ch05-composition-differentielles, ch06-differentiable-sur-partie-def, ch05-differentielles-partielles, ch05-classe-ck-def, ch05-differentiabilite-composantes]
tags: [point-fixe, parametre, regularite, classe-cp, contractante, differentielle]
---
## Intuition

> 💡 On résout $x=g(\lambda,x)$ par point fixe, pour chaque valeur du paramètre $\lambda$ ; on obtient une fonction $\lambda\mapsto\varphi(\lambda)$. Si $g$ est régulière ($C^p$) et contractante en $x$ **uniformément**, alors $\varphi$ hérite de la régularité de $g$. La formule de $d\varphi$ se devine en dérivant l'identité $\varphi(\lambda)=g(\lambda,\varphi(\lambda))$ par la règle de la chaîne :
$$
d\varphi_\lambda=\frac{\partial g}{\partial x}(\lambda,\varphi(\lambda))\circ d\varphi_\lambda+\frac{\partial g}{\partial\lambda}(\lambda,\varphi(\lambda)),
$$
puis en « isolant » $d\varphi_\lambda$, ce qui demande d'inverser $\id_F-\frac{\partial g}{\partial x}$ : c'est possible car sa norme est $\le a<1$ ([[ch06-neumann-inverse-id-moins-l]]). Tout le travail de la preuve est de **justifier** que $\varphi$ est bien différentiable (on ne peut pas dériver une identité avant de savoir que $\varphi$ est dérivable !).

Notations : $\frac{\partial g}{\partial x}(\lambda,x)\in\mathcal L(F)$ et $\frac{\partial g}{\partial\lambda}(\lambda,x)\in\mathcal L(E;F)$ sont les différentielles partielles ([[ch05-differentielles-partielles]]) ; « $g$ de classe $C^p$ sur la partie $\Lambda\times X$ » est au sens de [[ch06-differentiable-sur-partie-def]] (restriction d'une application $C^p$ définie sur un ouvert contenant $\Lambda\times X$). Un **espace de Banach** est un espace vectoriel normé complet.

## Énoncé

**Théorème (poly, Théorème VI.1.4, p. 117) — Point fixe de Banach à paramètre II.** Soient $\Lambda$ un ouvert d'un espace de Banach $E$, $X$ un fermé convexe d'un espace de Banach $F$ et
$$
g : \Lambda\times X\to X
$$
une application de classe $C^p$, $p\in(\N\setminus\{0\})\cup\{+\infty\}$. Soit $a\in[0\,;1[$. On suppose que
$$
\Big\|\frac{\partial g}{\partial x}(\lambda,x)\Big\|\le a\qquad\text{pour tout }(\lambda,x)\in\Lambda\times X.
$$
Alors, pour tout $\lambda\in\Lambda$, l'application $g_\lambda : x\mapsto g(\lambda,x)$ admet un unique point fixe $\varphi(\lambda)$ et l'application $\Lambda\to X$, $\lambda\mapsto\varphi(\lambda)$ est de classe $C^p$ et
$$
d\varphi_\lambda=\Big(\id_F-\frac{\partial g}{\partial x}(\lambda,\varphi(\lambda))\Big)^{-1}\circ\frac{\partial g}{\partial\lambda}(\lambda,\varphi(\lambda)).
$$

**Complément (estimation (VI.1.1) de la preuve).** Pour tout $\lambda\in\Lambda$, il existe $\rho>0$ et $C\ge0$ tels que $\|\varphi(\lambda+h)-\varphi(\lambda)\|_F\le\dfrac{C}{1-a}\|h\|_E$ pour $\|h\|_E\le\rho$ : $\varphi$ est localement lipschitzienne.

## Hypothèses

### H1 — $X$ fermé dans un Banach $F$

**Rôle.** Un fermé d'un espace complet est complet : c'est ce qui permet d'appliquer le point fixe de Banach ([[ch06-point-fixe-banach]]).

**Si on la retire.** $X=\,]0,1]$ (convexe, non fermé dans $\R$), $\Lambda=\R$, $g(\lambda,x)=x/2$ : $g$ est $C^\infty$ (restriction de $(\lambda,x)\mapsto x/2$ sur $\R^2$), $\frac{\partial g}{\partial x}=\frac12$, $g(\Lambda\times X)\subset X$, mais $g_\lambda$ n'a pas de point fixe dans $X$.

### H2 — $X$ convexe

**Rôle.** Elle sert **uniquement** à l'étape 0 : pour $x_1,x_2\in X$, le segment $[x_1,x_2]$ est dans $X$, et l'inégalité des accroissements finis transforme la borne $\|\partial g/\partial x\|\le a$ en « $g_\lambda$ est $a$-lipschitzienne sur $X$ ».

**Si on la retire.** $X=[0,1]\cup[2,3]$ (fermé, non convexe), $\Lambda=\R$, $g(\lambda,x)=0$ si $x\in[0,1]$, $g(\lambda,x)=3$ si $x\in[2,3]$. C'est la restriction de l'application localement constante (donc $C^\infty$) définie sur l'ouvert $\R\times(\,]-\frac12,\frac32[\,\cup\,]\frac32,\frac72[\,)$ ; $\frac{\partial g}{\partial x}=0$ ; $g(\Lambda\times X)=\{0,3\}\subset X$. Pourtant $g_\lambda$ a **deux** points fixes, $0$ et $3$ : l'unicité tombe (et $g_\lambda$ n'est pas lipschitzienne de constante $<1$ : $|g(\lambda,2)-g(\lambda,1)|=3>|2-1|$).

### H3 — $g$ de classe $C^p$ avec $p\ge1$ (en les deux variables)

**Rôle.** La différentiabilité de $g$ au point $(\lambda,\varphi(\lambda))$ donne le développement limité de l'étape 3 ; la continuité de $\partial g/\partial\lambda$ donne la constante $C$ de l'étape 2 ; le caractère $C^p$ de $\partial g/\partial x$ et $\partial g/\partial\lambda$ donne la récurrence de l'étape 4.

**Si on la retire.** $\Lambda=X=\R$, $g(\lambda,x)=\frac x2+|\lambda|$ : $g$ est continue, $\frac{\partial g}{\partial x}=\frac12$ partout, $g_\lambda$ est $\frac12$-lipschitzienne, mais $g$ n'est pas différentiable en $\lambda=0$. Le point fixe est $\varphi(\lambda)=2|\lambda|$ (car $x=\frac x2+|\lambda|\iff x=2|\lambda|$), non dérivable en $0$. De même, $g(\lambda,x)=\frac x2+\lambda|\lambda|$ est $C^1$ mais pas $C^2$, et $\varphi(\lambda)=2\lambda|\lambda|$ est $C^1$ mais pas $C^2$ : on ne gagne pas de régularité.

### H4 — $\|\partial g/\partial x\|\le a<1$ **uniformément** sur $\Lambda\times X$

**Rôle.** Elle donne la contraction (étape 0, avec la même constante pour tous les $\lambda$, ce qu'exige [[ch06-point-fixe-parametre-continu]]), l'inversibilité de $\id_F-A$ avec $\|(\id_F-A)^{-1}\|\le(1-a)^{-1}$ (étapes 1 et 3), et le facteur $\frac1{1-a}$ de (VI.1.1).

**Si on la retire.** $X=[0,+\infty[$ (fermé convexe), $g(\lambda,x)=x+e^{-x}$ (indépendante de $\lambda$) : $g(\Lambda\times X)\subset[1,+\infty[\subset X$, $0\le\frac{\partial g}{\partial x}=1-e^{-x}<1$ en chaque point, mais $\sup=1$, et $g_\lambda$ n'a pas de point fixe ($x+e^{-x}=x$ est impossible).

### H5 — $g$ est à valeurs dans $X$

**Rôle.** Pour itérer $g_\lambda$ sur $X$. C'est souvent la vérification la plus délicate en pratique (voir la preuve de [[ch06-fonctions-implicites]], où l'on doit choisir $r$ pour que $g_x$ envoie $\bar B(y_0,s)$ dans elle-même).

**Si on la retire.** $g(\lambda,x)=\frac x2+1$ sur $X=[0,1]$ : l'unique solution de $x=g(\lambda,x)$ est $2\notin X$.

### H6 — $\Lambda$ ouvert de $E$

**Rôle.** Pour parler de différentiabilité de $\varphi$ sur $\Lambda$, et pour trouver une boule $\bar B(\lambda,\rho)\subset\Lambda$ à l'étape 2. Hypothèse de **cadre** plutôt que de fond : la complétude de $E$ ne sert pas dans la preuve (un evn suffit) ; si $\Lambda$ n'est pas ouvert, la preuve s'applique à tout ouvert contenu dans $\Lambda$.

## Idée de la preuve

Convexité + accroissements finis : $g_\lambda$ est $a$-contractante, d'où $\varphi$ (version I). On insère $g(\lambda+h,\varphi(\lambda))$ pour obtenir $\|\varphi(\lambda+h)-\varphi(\lambda)\|=O(\|h\|)$, puis on développe $g$ à l'ordre $1$ en $(\lambda,\varphi(\lambda))$ et on inverse $\id_F-A$ par Neumann. Enfin $d\varphi=\big(\id-\partial_xg(\cdot,\varphi)\big)^{-1}\circ\partial_\lambda g(\cdot,\varphi)$ et une récurrence donne $C^p$.

## Preuve

Par hypothèse ([[ch06-differentiable-sur-partie-def]]), il existe un ouvert $W$ de $E\times F$ contenant $\Lambda\times X$ et $G : W\to F$ de classe $C^p$ dont $g$ est la restriction ; les différentielles partielles de $g$ sur $\Lambda\times X$ sont par définition celles de $G$. On munit $E\times F$ de la norme $\|(h,k)\|=\|h\|_E+\|k\|_F$. Fixons $\lambda\in\Lambda$ et, une fois $\varphi(\lambda)$ construit, posons
$$
A:=\frac{\partial g}{\partial x}(\lambda,\varphi(\lambda))\in\mathcal L(F),\qquad B:=\frac{\partial g}{\partial\lambda}(\lambda,\varphi(\lambda))\in\mathcal L(E;F).
$$

**Étape 0 : $g_\lambda$ est $a$-lipschitzienne sur $X$ ; existence, unicité et continuité de $\varphi$.** C'est ici que sert la convexité de $X$. Soient $\mu\in\Lambda$ et $x_1,x_2\in X$. L'application $y\mapsto G(\mu,y)$ est définie et différentiable sur l'ouvert $W_\mu=\{y\in F : (\mu,y)\in W\}$, qui contient $X$, de différentielle $\frac{\partial G}{\partial x}(\mu,y)$ ([[ch05-differentielles-partielles]]). Le segment $[x_1,x_2]$ est contenu dans $X\subset W_\mu$ et, sur ce segment, $\|\frac{\partial g}{\partial x}(\mu,\cdot)\|\le a$. L'inégalité des accroissements finis ([[ch05-accroissements-finis]]) donne
$$
\|g(\mu,x_1)-g(\mu,x_2)\|\le a\,\|x_1-x_2\|.
$$
Un fermé d'un espace de Banach est un espace métrique complet ; $g$ est continue (elle est $C^p$, $p\ge1$). La version I ([[ch06-point-fixe-parametre-continu]]) donne donc : pour tout $\mu\in\Lambda$, $g_\mu$ a un unique point fixe $\varphi(\mu)\in X$, et $\varphi$ est continue.

**Étape 1 : $\id_F-A$ est inversible.** Par hypothèse $\|A\|\le a<1$. Par [[ch06-neumann-inverse-id-moins-l]], $\id_F-A$ est inversible, d'inverse $\sum_{n\ge0}A^n$, et $\|(\id_F-A)^{-1}\|\le(1-a)^{-1}$.

**Étape 2 : $\varphi$ est localement lipschitzienne.** L'application $\mu\mapsto\frac{\partial g}{\partial\lambda}(\mu,\varphi(\lambda))$ est continue sur $\Lambda$ ($G$ est $C^1$). Comme $\Lambda$ est ouvert, on peut fixer $\rho>0$ tel que $\bar B(\lambda,\rho)\subset\Lambda$ et
$$
C:=\sup_{\mu\in\bar B(\lambda,\rho)}\Big\|\frac{\partial g}{\partial\lambda}(\mu,\varphi(\lambda))\Big\|<+\infty
$$
(en dimension finie, par continuité sur le compact $\bar B(\lambda,\rho)$ ; dans le cas général, quitte à diminuer $\rho$, par continuité en $\lambda$ : par exemple $C\le\|B\|+1$ pour $\rho$ assez petit). Pour $\|h\|_E\le\rho$, posons $\gamma(h)=\varphi(\lambda+h)-\varphi(\lambda)$. Comme $\varphi(\mu)=g(\mu,\varphi(\mu))$, en insérant un terme intermédiaire,
$$
\gamma(h)=\big[g(\lambda+h,\varphi(\lambda+h))-g(\lambda+h,\varphi(\lambda))\big]+\big[g(\lambda+h,\varphi(\lambda))-g(\lambda,\varphi(\lambda))\big].
$$
Le premier crochet est de norme $\le a\|\gamma(h)\|$, car $g_{\lambda+h}$ est $a$-lipschitzienne (étape 0) avec la même constante $a$. Le second est de norme $\le C\|h\|$ par l'inégalité des accroissements finis appliquée à $\mu\mapsto g(\mu,\varphi(\lambda))$ sur l'ouvert $\Lambda$, le long du segment $[\lambda,\lambda+h]\subset\bar B(\lambda,\rho)$. D'où $\|\gamma(h)\|\le a\|\gamma(h)\|+C\|h\|$, c'est-à-dire
$$
\|\gamma(h)\|_F\le\frac{C}{1-a}\|h\|_E\qquad(\|h\|_E\le\rho).\qquad\text{(VI.1.1)}
$$
On retrouve au passage la continuité de $\varphi$.

**Étape 3 : différentiabilité en $\lambda$.** $G$ est différentiable en $(\lambda,\varphi(\lambda))\in W$, de différentielle $(h,k)\mapsto Bh+Ak$ (formule (V.3.3), [[ch05-differentielles-partielles]]) : il existe une fonction $\eps$, de limite nulle en $(0,0)$, telle que
$$
G(\lambda+h,\varphi(\lambda)+k)-G(\lambda,\varphi(\lambda))=Ak+Bh+\big(\|h\|+\|k\|\big)\,\eps(h,k)
$$
pour $(\lambda+h,\varphi(\lambda)+k)\in W$. Prenons $k=\gamma(h)$ : le point $(\lambda+h,\varphi(\lambda)+\gamma(h))=(\lambda+h,\varphi(\lambda+h))$ est dans $\Lambda\times X$, où $G=g$, et $g(\lambda+h,\varphi(\lambda+h))=\varphi(\lambda+h)$, $g(\lambda,\varphi(\lambda))=\varphi(\lambda)$. Donc
$$
\gamma(h)=A\gamma(h)+Bh+r(h),\qquad r(h)=\big(\|h\|+\|\gamma(h)\|\big)\,\eps(h,\gamma(h)).
$$
Par (VI.1.1), $\|h\|+\|\gamma(h)\|\le\big(1+\frac{C}{1-a}\big)\|h\|$ et $\gamma(h)\to0$ quand $h\to0$, donc $\eps(h,\gamma(h))\to0$ : $r(h)=o(\|h\|)$. Ainsi $(\id_F-A)\gamma(h)=Bh+r(h)$ et, en composant par $(\id_F-A)^{-1}$ (étape 1),
$$
\varphi(\lambda+h)-\varphi(\lambda)=(\id_F-A)^{-1}\circ B\,(h)+(\id_F-A)^{-1}r(h),\qquad\big\|(\id_F-A)^{-1}r(h)\big\|\le\frac{\|r(h)\|}{1-a}=o(\|h\|).
$$
Comme $(\id_F-A)^{-1}\circ B\in\mathcal L(E;F)$, $\varphi$ est différentiable en $\lambda$, avec $d\varphi_\lambda=(\id_F-A)^{-1}\circ B$, ce qui est la formule annoncée.

**Étape 4 : régularité $C^p$.** Notons, pour $\mu\in\Lambda$, $A(\mu)=\frac{\partial g}{\partial x}(\mu,\varphi(\mu))$ et $B(\mu)=\frac{\partial g}{\partial\lambda}(\mu,\varphi(\mu))$, de sorte que, par l'étape 3,
$$
d\varphi_\mu=c\big(\Psi(A(\mu)),B(\mu)\big),\qquad\Psi(L)=(\id_F-L)^{-1},\qquad c(P,Q)=P\circ Q.
$$
Ici $\Psi$ est $C^\infty$ sur la boule ouverte $B_{\mathcal L(F)}(0,1)$, qui contient tous les $A(\mu)$ puisque $\|A(\mu)\|\le a<1$ ([[ch06-neumann-inverse-id-moins-l]]), et $c:\mathcal L(F)\times\mathcal L(E;F)\to\mathcal L(E;F)$ est bilinéaire continue ($\|P\circ Q\|\le\|P\|\,\|Q\|$), donc $C^\infty$ ([[ch05-differentielle-bilineaire]]). Montrons par récurrence que $\varphi$ est $C^k$ pour tout entier $k$ avec $0\le k\le p$. Pour $k=0$ : étape 0. Supposons $\varphi$ de classe $C^{k-1}$, avec $1\le k\le p$. Alors $\mu\mapsto(\mu,\varphi(\mu))$ est $C^{k-1}$ (composante par composante, [[ch05-differentiabilite-composantes]]) à valeurs dans $\Lambda\times X\subset W$ ; $\frac{\partial G}{\partial x}=dG\circ\iota_2$ et $\frac{\partial G}{\partial\lambda}=dG\circ\iota_1$ sont $C^{p-1}$ sur $W$, donc $C^{k-1}$ puisque $k-1\le p-1$. Par composition (règle de la chaîne [[ch05-composition-differentielles]] et lemme « composée de $C^{k-1}$ est $C^{k-1}$ », étape 5 de [[ch05-inversion-c-infini]]), $\mu\mapsto A(\mu)$, $\mu\mapsto B(\mu)$, puis $\mu\mapsto\Psi(A(\mu))$ et $\mu\mapsto d\varphi_\mu=c(\Psi(A(\mu)),B(\mu))$ sont $C^{k-1}$. Comme $\varphi$ est différentiable de différentielle $C^{k-1}$, $\varphi$ est $C^k$ ([[ch05-classe-ck-def]]). Si $p=+\infty$, ceci vaut pour tout $k$, et $\varphi$ est $C^\infty$. $\square$

## Preuve à trous

Soit $G$ un prolongement $C^p$ de $g$ à un ouvert $W\supset\Lambda\times X$. Fixons $\lambda$, $A=\frac{\partial g}{\partial x}(\lambda,\varphi(\lambda))$, $B=\frac{\partial g}{\partial\lambda}(\lambda,\varphi(\lambda))$.

*Étape 0.* Pour $x_1,x_2\in X$, <trou indice="quelle hypothèse sur X, et quel théorème ?">le segment $[x_1,x_2]$ est dans $X$ (convexité) et les accroissements finis donnent $\|g(\mu,x_1)-g(\mu,x_2)\|\le a\|x_1-x_2\|$</trou> ; $X$ étant complet (fermé d'un Banach), la version I fournit $\varphi$, continue.

*Étape 1.* $\|A\|\le a<1$, donc $\id_F-A$ est inversible d'inverse $\sum_nA^n$, de norme $\le(1-a)^{-1}$.

*Étape 2.* Avec $\gamma(h)=\varphi(\lambda+h)-\varphi(\lambda)$, on insère le terme <trou>$g(\lambda+h,\varphi(\lambda))$</trou> :
$$
\gamma(h)=\big[g(\lambda+h,\varphi(\lambda+h))-g(\lambda+h,\varphi(\lambda))\big]+\big[g(\lambda+h,\varphi(\lambda))-g(\lambda,\varphi(\lambda))\big],
$$
d'où $\|\gamma(h)\|\le a\|\gamma(h)\|+C\|h\|$ et <trou>$\|\gamma(h)\|\le\frac{C}{1-a}\|h\|$, c'est-à-dire $\gamma(h)=O(\|h\|)$</trou>.

*Étape 3.* La différentiabilité de $G$ en $(\lambda,\varphi(\lambda))$ appliquée à l'accroissement $(h,\gamma(h))$ donne $\gamma(h)=A\gamma(h)+Bh+o(\|h\|+\|\gamma(h)\|)$, et le reste est un $o(\|h\|)$ grâce à l'étape 2. Donc <trou indice="on compose par l'inverse obtenu à l'étape 1">$\varphi(\lambda+h)-\varphi(\lambda)=(\id_F-A)^{-1}B\,h+o(\|h\|)$</trou>.

*Étape 4.* $d\varphi_\mu=\big(\id_F-A(\mu)\big)^{-1}\circ B(\mu)$ ; si $\varphi$ est $C^{k-1}$ ($k\le p$), alors $A(\cdot)$, $B(\cdot)$ sont $C^{k-1}$ et, comme <trou>$L\mapsto(\id_F-L)^{-1}$ est $C^\infty$ sur $\|L\|<1$ et la composition $(P,Q)\mapsto P\circ Q$ est bilinéaire continue</trou>, $d\varphi$ est $C^{k-1}$, donc $\varphi$ est $C^k$. $\square$

## Exemples

* **Une équation scalaire.** $\Lambda=E=\R$, $X=F=\R$, $g(\lambda,x)=\lambda+\frac12\sin x$ : $g$ est $C^\infty$, $\big|\frac{\partial g}{\partial x}\big|=\frac12|\cos x|\le\frac12$. Pour tout $\lambda$, l'équation $x-\frac12\sin x=\lambda$ a une unique solution $\varphi(\lambda)$, et $\varphi$ est $C^\infty$ avec
$$
\varphi'(\lambda)=\Big(1-\tfrac12\cos\varphi(\lambda)\Big)^{-1}\cdot1\in\big[\tfrac23,2\big].
$$
En $\lambda=0$ : $\varphi(0)=0$ (car $0=\frac12\sin0$ et unicité) et $\varphi'(0)=\frac1{1-1/2}=2$. Vérification : $\varphi$ est la réciproque de $x\mapsto x-\frac12\sin x$, de dérivée $\frac12$ en $0$.
* **Équation de Kepler, dépendance en l'excentricité.** $\Lambda=\R\times\,]-\tfrac12,\tfrac12[$ (ouvert de $E=\R^2$), $X=\R$, $g((M,e),x)=M+e\sin x$ : $\big|\frac{\partial g}{\partial x}\big|=|e\cos x|\le\frac12$. La solution $\varphi(M,e)$ de $x=M+e\sin x$ est $C^\infty$ et
$$
d\varphi_{(M,e)}(\delta M,\delta e)=\frac{\delta M+\sin\varphi(M,e)\,\delta e}{1-e\cos\varphi(M,e)}.
$$
En $e=0$ : $\varphi(M,0)=M$ et $\frac{\partial\varphi}{\partial e}(M,0)=\sin M$, d'où l'approximation classique $\varphi(M,e)=M+e\sin M+o(e)$.
* **Cas linéaire.** $E=F$, $\Lambda=E$, $X=F$, $g(\lambda,x)=Ax+\lambda$ avec $A\in\mathcal L(F)$, $\|A\|\le a<1$ : $\varphi(\lambda)=(\id_F-A)^{-1}\lambda$, et la formule donne $d\varphi_\lambda=(\id_F-A)^{-1}\circ\id_F$, comme il se doit pour une application linéaire continue.

## Pièges

* > ⚠️ On ne peut **pas** démontrer la différentiabilité de $\varphi$ en dérivant $\varphi(\lambda)=g(\lambda,\varphi(\lambda))$ : cela suppose $\varphi$ différentiable. La dérivation formelle sert à **retrouver la formule**, la preuve (étapes 2–3) sert à la justifier.
* > ⚠️ $X$ doit être **fermé** (complétude) **et convexe** (pour passer de $\|\partial g/\partial x\|\le a$ à « $a$-lipschitzienne ») ; une boule fermée convient toujours.
* La borne doit être **uniforme** : $\|\partial g/\partial x\|\le a<1$ sur tout $\Lambda\times X$, et pas seulement $<1$ en chaque point (contre-exemple $x+e^{-x}$).
* L'ordre de composition dans la formule : d'abord $\frac{\partial g}{\partial\lambda}$ (de $E$ dans $F$), puis $(\id_F-\frac{\partial g}{\partial x})^{-1}$ (de $F$ dans $F$).
* En dimension infinie, la boule fermée $\bar B(\lambda,\rho)$ n'est pas compacte : la finitude de $C$ s'obtient en réduisant $\rho$ grâce à la continuité de $\partial g/\partial\lambda$, pas par compacité.
* Sur la partie $\Lambda\times X$ (non ouverte), $\frac{\partial g}{\partial x}$ s'entend comme la différentielle partielle d'un prolongement $C^p$ fixé ([[ch06-differentiable-sur-partie-def]]).
