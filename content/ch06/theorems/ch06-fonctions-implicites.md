---
id: ch06-fonctions-implicites
type: theorem
chapter: 6
title: Théorème des fonctions implicites
ref: Théorème VI.2.1
page: 118
importance: 3
depends: [ch06-point-fixe-parametre-cp, ch05-accroissements-finis, ch05-differentielles-partielles, ch06-differentiable-sur-partie-def, ch05-isomorphisme-banach, ch05-lineaire-c-infini, ch06-neumann-inverse-id-moins-l]
tags: [fonctions-implicites, point-fixe, isomorphisme, differentielle-partielle, banach, theoreme-central]
---
## Intuition

> 💡 On veut résoudre une équation $f(x,y)=c$ en exprimant l'inconnue $y$ **en fonction** du paramètre $x$ : $y=\varphi(x)$. Exemple : le cercle $x^2+y^2=1$ ; près du point $(0,1)$, c'est le graphe de $y=\sqrt{1-x^2}$ ; près de $(1,0)$, ce n'est le graphe d'aucune fonction de $x$ (la tangente est verticale). Le théorème dit : si, au point de départ $(x_0,y_0)$, la **linéarisée en $y$** de l'équation est inversible, alors on peut résoudre localement, de manière unique et régulière.

Pourquoi : à $x$ fixé, $f(x,y)=c$ ressemble près de $y_0$ à l'équation linéaire $f(x,y_0)+\frac{\partial f}{\partial y}(x_0,y_0)(y-y_0)=c$, que l'on sait résoudre si $\frac{\partial f}{\partial y}(x_0,y_0)$ est inversible. La « méthode de Newton simplifiée » $y\mapsto y-\big(\frac{\partial f}{\partial y}(x_0,y_0)\big)^{-1}(f(x,y)-c)$ est alors contractante près de $(x_0,y_0)$, et son point fixe est la solution : tout repose sur le point fixe à paramètre ([[ch06-point-fixe-parametre-cp]]).

Notations : $\frac{\partial f}{\partial x}(x,y)\in\mathcal L(E;G)$ et $\frac{\partial f}{\partial y}(x,y)\in\mathcal L(F;G)$ sont les différentielles partielles ([[ch05-differentielles-partielles]]). Un **isomorphisme bicontinu** de $F$ dans $G$ est une bijection linéaire continue d'inverse continu ; entre Banach, la continuité de l'inverse est automatique ([[ch05-isomorphisme-banach]]). $B(x_0,r)$ et $\bar B(x_0,r)$ désignent les boules ouverte et fermée.

## Énoncé

**Théorème (poly, Théorème VI.2.1, p. 118) — Fonctions implicites.** Soient $E$, $F$ et $G$ trois espaces de Banach, $U$ un ouvert de $E$, $V$ un ouvert de $F$, $f$ une application de classe $C^p$, $p\ge1$, de $U\times V$ dans $G$ et $(x_0,y_0)$ un point de $U\times V$ tel que la différentielle partielle $\dfrac{\partial f}{\partial y}(x_0,y_0)$ soit un isomorphisme bicontinu de $F$ dans $G$. Alors il existe un ouvert $U_0$ de $U$ contenant $x_0$, un ouvert $V_0$ de $V$ contenant $y_0$ et une application $\varphi$ de classe $C^p$, définie sur $U_0$ à valeurs dans $V_0$ telle que :
$$
\varphi(x_0)=y_0\quad\text{et}\quad\forall(x,y)\in U_0\times V_0,\quad f(x,y)=f(x_0,y_0)\iff y=\varphi(x).
$$
La différentielle de $\varphi$ est donnée par
$$
d\varphi_x=-\Big(\frac{\partial f}{\partial y}(x,\varphi(x))\Big)^{-1}\circ\frac{\partial f}{\partial x}(x,\varphi(x)).
$$
En outre, si $U_0$ est connexe, il existe au plus une application continue $\varphi : U_0\to V_0$ vérifiant $\varphi(x_0)=y_0$ et $f(x,\varphi(x))=f(x_0,y_0)$ pour tout $x\in U_0$.

(En particulier, $\frac{\partial f}{\partial y}(x,\varphi(x))$ est un isomorphisme bicontinu pour tout $x\in U_0$ : c'est établi dans la preuve.)

## Hypothèses

### H1 — $E$, $F$, $G$ espaces de Banach (surtout : $F$ complet)

**Rôle.** La complétude de $F$ rend complète la boule fermée $\bar B(y_0,s)$ sur laquelle on applique le point fixe. (Dans la preuve, celle de $E$ et $G$ ne sert pas directement, car l'énoncé suppose déjà $\frac{\partial f}{\partial y}(x_0,y_0)$ **bicontinu** ; elle sert à rendre cette bicontinuité automatique.)

**Si on la retire.** $E=\R$, $F=G=c_{00}$ (suites à support fini, norme $\|\cdot\|_\infty$, non complet), $S$ le décalage à droite ($(Sy)_1=0$, $(Sy)_{n+1}=y_n$, $\|S\|=1$), $e_1=(1,0,0,\dots)$ et
$$
f(x,y)=y-x\,S(y)-x\,e_1 .
$$
$f$ est $C^\infty$ (somme d'une application linéaire continue et de l'application bilinéaire continue $(x,y)\mapsto xS(y)$), $f(0,0)=0$ et $\frac{\partial f}{\partial y}(0,0)=\id$. Mais pour $x\ne0$, l'équation $f(x,y)=0$ s'écrit $y_1=x$, $y_{n+1}=x\,y_n$, d'unique solution $y_n=x^n$ — jamais à support fini. Aucune solution dans $F$ : pas de fonction implicite.

### H2 — $f$ de classe $C^p$ avec $p\ge1$

**Rôle.** La continuité de $\frac{\partial f}{\partial y}$ en $(x_0,y_0)$ rend $g_x$ $\frac12$-contractante sur une boule ; la continuité de $\frac{\partial f}{\partial x}$ donne la borne $M$ ; et la régularité $C^p$ de $g$ donne celle de $\varphi$ via [[ch06-point-fixe-parametre-cp]].

**Si on la retire.** *Différentiable mais pas $C^1$ :* $E=F=G=\R$, $k(y)=y+2y^2\sin(1/y)$ ($k(0)=0$) et $f(x,y)=k(y)-x$. On a $\frac{\partial f}{\partial y}(0,0)=k'(0)=\lim_{y\to0}(1+2y\sin(1/y))=1$, inversible. Mais $k'(y)=1+4y\sin(1/y)-2\cos(1/y)$ pour $y\ne0$, donc $k'\big(\frac1{2\pi n}\big)=-1<0$ et $k'\big(\frac1{(2n+1)\pi}\big)=3>0$ : $k$ n'est monotone sur aucun intervalle contenant $0$, donc (étant continue) injective sur aucun. Si $U_0,V_0,\varphi$ existaient, on choisirait $\delta>0$ avec $]-\delta,\delta[\subset V_0$ et $k(]-\delta,\delta[)\subset U_0$, puis $y_1\ne y_2$ dans $]-\delta,\delta[$ avec $k(y_1)=k(y_2)=:x\in U_0$ : les deux couples $(x,y_i)$ vérifient $f=0$, d'où $y_1=\varphi(x)=y_2$, absurde. *Pas $C^1$ en $x$ :* $f(x,y)=y-h(x)$ avec $h(x)=x\sin(1/x)$, $h(0)=0$ : $\frac{\partial f}{\partial y}=1$, la solution $\varphi=h$ existe et est continue, mais elle n'est pas dérivable en $0$.

### H3 — $\frac{\partial f}{\partial y}(x_0,y_0)$ isomorphisme bicontinu de $F$ sur $G$

**Rôle.** C'est elle qui permet de transformer l'équation en problème de point fixe $y=g(x,y)$ avec $\frac{\partial g}{\partial y}(x_0,y_0)=0$.

**Si on la retire.** $f(x,y)=y^2-x$ en $(0,0)$ ($\frac{\partial f}{\partial y}(0,0)=0$) : pour $x<0$ il n'y a aucune solution, donc aucune $\varphi$ définie sur un voisinage de $0$ ; pour $x>0$ il y en a deux, $\pm\sqrt x$. Et $f(x,y)=y^3-x$ en $(0,0)$ : la solution $\varphi(x)=x^{1/3}$ existe et est unique, mais n'est pas dérivable en $0$. L'hypothèse n'est donc pas nécessaire à l'existence, mais elle l'est à la régularité $C^1$ : si $\varphi$ est $C^1$ avec $f(x,\varphi(x))=c$, alors $\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\circ d\varphi=0$, ce qui ici donnerait $-1+3\varphi(0)^2\varphi'(0)=-1=0$.

### H4 — conclusion locale, au niveau $c=f(x_0,y_0)$

**Rôle.** La résolution n'est garantie que dans $U_0\times V_0$ : hors de $V_0$, il peut y avoir d'autres solutions.

**Si on l'oublie.** $f(x,y)=y^2-x^2$ en $(1,1)$ : $\frac{\partial f}{\partial y}(1,1)=2$, et la fonction implicite est $\varphi(x)=x$ ; mais $y=-x$ est aussi solution, loin de $y_0=1$. Sur $\R$ tout entier, $x\mapsto|x|$ est une autre solution **continue** valant $1$ en $1$ : l'unicité n'est vraie que pour les solutions à valeurs dans $V_0$ (ici, près de $y=0$, en $x=0$, $\frac{\partial f}{\partial y}(0,0)=0$ et les deux branches se croisent).

## Idée de la preuve

On pose $T=\frac{\partial f}{\partial y}(x_0,y_0)$ et $g(x,y)=y-T^{-1}\big(f(x,y)-f(x_0,y_0)\big)$, dont les points fixes en $y$ sont les solutions. Comme $\frac{\partial g}{\partial y}(x_0,y_0)=0$, $g_x$ est $\frac12$-contractante sur $\bar B(y_0,s)$ et, pour $x$ proche de $x_0$, envoie $\bar B(y_0,s)$ dans elle-même : le point fixe à paramètre donne $\varphi$ de classe $C^p$ et la formule de $d\varphi$.

## Preuve

Notons $c=f(x_0,y_0)$ et $T=\frac{\partial f}{\partial y}(x_0,y_0)\in\mathcal L(F;G)$, isomorphisme bicontinu. Si $F=\{0\}$, alors $G=\{0\}$ et tout est trivial ; on suppose $F\ne\{0\}$, de sorte que $\|T^{-1}\|>0$.

**Mise en forme de point fixe.** Pour $(x,y)\in U\times V$, on pose
$$
g(x,y)=y-T^{-1}\big(f(x,y)-c\big)\in F.
$$
Comme $T^{-1}$ est injective, $f(x,y)=c\iff g(x,y)=y$. L'application $g:U\times V\to F$ est de classe $C^p$ (différence de la projection $(x,y)\mapsto y$, linéaire continue, et de la composée de $f-c$ avec l'application linéaire continue $T^{-1}$, [[ch05-lineaire-c-infini]]), $g(x_0,y_0)=y_0$ et
$$
\frac{\partial g}{\partial y}(x,y)=\id_F-T^{-1}\circ\frac{\partial f}{\partial y}(x,y),\qquad\frac{\partial g}{\partial x}(x,y)=-T^{-1}\circ\frac{\partial f}{\partial x}(x,y),\qquad\text{en particulier}\quad\frac{\partial g}{\partial y}(x_0,y_0)=\id_F-T^{-1}T=0.
$$

**Choix de $r_0$, $s$, $M$.** Par continuité de $\frac{\partial g}{\partial y}$ et de $\frac{\partial f}{\partial x}$ en $(x_0,y_0)$ ($f$ est $C^1$), il existe $r_0>0$ et $s>0$ tels que $\bar B(x_0,r_0)\times\bar B(y_0,s)\subset U\times V$ et, sur $\bar B(x_0,r_0)\times\bar B(y_0,s)$,
$$
\Big\|\frac{\partial g}{\partial y}\Big\|\le\frac12\qquad\text{et}\qquad\Big\|\frac{\partial f}{\partial x}\Big\|\le M,
$$
pour une constante $M$, que l'on peut supposer $>0$ (quitte à l'augmenter).

**$g_x$ est $\frac12$-lipschitzienne.** Pour $x\in U$, notons $g_x : V\to F$, $y\mapsto g(x,y)$. Pour $x\in\bar B(x_0,r_0)$ et $y\in\bar B(y_0,s)$, $d(g_x)_y=\frac{\partial g}{\partial y}(x,y)$ est de norme $\le\frac12$ ; la boule $\bar B(y_0,s)$ étant convexe, l'inégalité des accroissements finis ([[ch05-accroissements-finis]]) montre que $g_x$ est $\frac12$-lipschitzienne sur $\bar B(y_0,s)$.

**Stabilité de $\bar B(y_0,s)$.** Soient $r\le r_0$, $x\in\bar B(x_0,r)$ et $y\in\bar B(y_0,s)$. Comme $g_{x_0}(y_0)=y_0$,
$$
\begin{aligned}
\|g_x(y)-y_0\|&=\|g_x(y)-g_{x_0}(y_0)\|\le\|g_x(y)-g_x(y_0)\|+\|g_x(y_0)-g_{x_0}(y_0)\|\\
&\le\frac12\|y-y_0\|+\big\|T^{-1}\big(f(x,y_0)-f(x_0,y_0)\big)\big\|\le\frac s2+\|T^{-1}\|\,M\,\|x-x_0\|,
\end{aligned}
$$
où l'on a utilisé, pour le dernier terme, les accroissements finis appliqués à $x'\mapsto f(x',y_0)$ sur le segment $[x_0,x]\subset\bar B(x_0,r_0)$. Prenons
$$
r=\min\Big(r_0,\ \frac{s}{2M\|T^{-1}\|}\Big).
$$
Pour $x\in B(x_0,r)$ (boule **ouverte**), $\|T^{-1}\|M\|x-x_0\|<\frac s2$, donc $\|g_x(y)-y_0\|<s$ : $g_x(\bar B(y_0,s))\subset B(y_0,s)\subset\bar B(y_0,s)$.

**Application du point fixe à paramètre.** Le Théorème VI.1.4 ([[ch06-point-fixe-parametre-cp]]) s'applique à
$$
g : B(x_0,r)\times\bar B(y_0,s)\to\bar B(y_0,s),
$$
avec $\Lambda=B(x_0,r)$ ouvert du Banach $E$, $X=\bar B(y_0,s)$ fermé convexe du Banach $F$, $g$ de classe $C^p$ au sens de [[ch06-differentiable-sur-partie-def]] (restriction de $g$ définie sur l'ouvert $U\times V$, qui contient $B(x_0,r)\times\bar B(y_0,s)$), et $\|\frac{\partial g}{\partial y}\|\le a=\frac12$. On en déduit que, pour tout $x\in B(x_0,r)$, $g_x$ a un unique point fixe $\varphi(x)$ dans $\bar B(y_0,s)$, et que $x\mapsto\varphi(x)$ est de classe $C^p$. De plus $\varphi(x_0)=y_0$ par unicité (car $g_{x_0}(y_0)=y_0$), et $\varphi(x)=g_x(\varphi(x))\in B(y_0,s)$ par l'étape de stabilité.

On pose donc $U_0=B(x_0,r)$ et $V_0=B(y_0,s)$ ; $\varphi$ est à valeurs dans $V_0$. Pour $(x,y)\in U_0\times V_0$ : si $y=\varphi(x)$, alors $g_x(y)=y$, donc $f(x,y)=c$ ; réciproquement, si $f(x,y)=c$, alors $y$ est un point fixe de $g_x$ dans $\bar B(y_0,s)$, donc $y=\varphi(x)$ par unicité. Ceci prouve la première assertion.

*Clarification par rapport au poly :* le poly prend $V_0=B(y_0,s)$ en notant que l'unicité dans $\bar B(y_0,s)$ la donne a fortiori dans $B(y_0,s)$ ; l'inégalité stricte ci-dessus (boule ouverte $B(x_0,r)$, $M>0$) garantit en outre que $\varphi$ est bien **à valeurs dans** $V_0$.

**Calcul de la différentielle.** Le Théorème VI.1.4 donne aussi
$$
d\varphi_x=\Big(\id_F-\frac{\partial g}{\partial y}(x,\varphi(x))\Big)^{-1}\circ\frac{\partial g}{\partial x}(x,\varphi(x)),
$$
où $\id_F-\frac{\partial g}{\partial y}(x,\varphi(x))$ est inversible ([[ch06-neumann-inverse-id-moins-l]], car $\|\frac{\partial g}{\partial y}\|\le\frac12$). Or
$$
\frac{\partial g}{\partial x}(x,\varphi(x))=-T^{-1}\circ\frac{\partial f}{\partial x}(x,\varphi(x)),\qquad\id_F-\frac{\partial g}{\partial y}(x,\varphi(x))=T^{-1}\circ\frac{\partial f}{\partial y}(x,\varphi(x)).
$$
La seconde identité montre que $D:=\frac{\partial f}{\partial y}(x,\varphi(x))=T\circ\big(\id_F-\frac{\partial g}{\partial y}(x,\varphi(x))\big)$ est un isomorphisme bicontinu (composée de deux tels isomorphismes), et que l'inverse de $\id_F-\frac{\partial g}{\partial y}(x,\varphi(x))=T^{-1}\circ D$ est $D^{-1}\circ T$. Donc
$$
d\varphi_x=D^{-1}\circ T\circ\Big(-T^{-1}\circ\frac{\partial f}{\partial x}(x,\varphi(x))\Big)=-\Big(\frac{\partial f}{\partial y}(x,\varphi(x))\Big)^{-1}\circ\frac{\partial f}{\partial x}(x,\varphi(x)).
$$

**Dernière assertion (unicité de la branche continue).** *Le poly l'énonce sans démonstration ; en voici une.* Avec les $U_0$, $V_0$ construits ci-dessus, elle découle directement de l'équivalence : si $\psi:U_0\to V_0$ vérifie $f(x,\psi(x))=c$ pour tout $x$, alors $(x,\psi(x))\in U_0\times V_0$ donc $\psi(x)=\varphi(x)$ (sans même utiliser la connexité ni la continuité). La connexité sert pour la version suivante, plus forte et d'usage courant : *si $W\subset U$ est un ouvert connexe contenant $x_0$ et $\psi_1,\psi_2:W\to V$ sont continues, avec $\psi_i(x_0)=y_0$, $f(x,\psi_i(x))=c$ et $\frac{\partial f}{\partial y}(x,\psi_1(x))$ isomorphisme bicontinu pour tout $x\in W$, alors $\psi_1=\psi_2$.* En effet, $Z=\{x\in W:\psi_1(x)=\psi_2(x)\}$ est fermé dans $W$ (continuité), non vide ($x_0\in Z$), et ouvert : si $x_1\in Z$, posons $y_1=\psi_1(x_1)=\psi_2(x_1)$ ; la première partie appliquée en $(x_1,y_1)$ (où $f(x_1,y_1)=c$) fournit $U_1\ni x_1$, $V_1\ni y_1$ et $\varphi_1$ ; sur l'ouvert $W_1=U_1\cap\psi_1^{-1}(V_1)\cap\psi_2^{-1}(V_1)\ni x_1$, on a $(x,\psi_i(x))\in U_1\times V_1$ et $f(x,\psi_i(x))=c$, donc $\psi_1(x)=\varphi_1(x)=\psi_2(x)$, soit $W_1\subset Z$. $W$ étant connexe, $Z=W$. $\square$

## Preuve à trous

Soit $T=\frac{\partial f}{\partial y}(x_0,y_0)$ et $c=f(x_0,y_0)$. On réécrit $f(x,y)=c$ comme un problème de point fixe $y=g(x,y)$ avec <trou indice="Newton simplifié : on corrige y par l'erreur f(x,y)-c ramenée dans F">$g(x,y)=y-T^{-1}\big(f(x,y)-c\big)$</trou>. Alors $g$ est $C^p$ et <trou>$\frac{\partial g}{\partial y}(x_0,y_0)=\id_F-T^{-1}T=0$</trou>. Par continuité, il existe $r_0,s>0$ avec $\|\frac{\partial g}{\partial y}\|\le\frac12$ et $\|\frac{\partial f}{\partial x}\|\le M$ sur $\bar B(x_0,r_0)\times\bar B(y_0,s)$ ; par les accroissements finis sur le convexe $\bar B(y_0,s)$, chaque $g_x$ y est $\frac12$-lipschitzienne. Pour $\|x-x_0\|<r\le r_0$ et $y\in\bar B(y_0,s)$,
$$
\|g_x(y)-y_0\|\le\|g_x(y)-g_x(y_0)\|+\|g_x(y_0)-g_{x_0}(y_0)\|\le\frac s2+\|T^{-1}\|M\|x-x_0\|,
$$
donc avec <trou>$r=\min\big(r_0,\frac{s}{2M\|T^{-1}\|}\big)$, $g_x$ envoie $\bar B(y_0,s)$ dans elle-même</trou>. Le point fixe à paramètre II, appliqué à $g:B(x_0,r)\times\bar B(y_0,s)\to\bar B(y_0,s)$ avec $a=\frac12$, donne $\varphi$ de classe $C^p$, et $U_0=B(x_0,r)$, $V_0=B(y_0,s)$. Enfin, comme $\id_F-\frac{\partial g}{\partial y}(x,\varphi(x))=T^{-1}\circ\frac{\partial f}{\partial y}(x,\varphi(x))$ et $\frac{\partial g}{\partial x}=-T^{-1}\circ\frac{\partial f}{\partial x}$, la formule de VI.1.4 devient <trou>$d\varphi_x=-\big(\frac{\partial f}{\partial y}(x,\varphi(x))\big)^{-1}\circ\frac{\partial f}{\partial x}(x,\varphi(x))$</trou>. $\square$

## Exemples

* **Le cercle.** $f(x,y)=x^2+y^2$ sur $\R\times\R$, $(x_0,y_0)=(0,1)$, $c=1$ : $\frac{\partial f}{\partial y}(0,1)=2\ne0$. Le théorème donne $\varphi$ $C^\infty$ près de $0$ avec $\varphi(0)=1$, et $\varphi'(x)=-\dfrac{2x}{2\varphi(x)}=-\dfrac{x}{\varphi(x)}$ ; on reconnaît $\varphi(x)=\sqrt{1-x^2}$, de dérivée $-x/\sqrt{1-x^2}$. Au point $(1,0)$, $\frac{\partial f}{\partial y}(1,0)=0$ : le théorème ne s'applique pas, et en effet le cercle n'est le graphe d'aucune fonction de $x$ au voisinage de $(1,0)$ (deux solutions $\pm\sqrt{1-x^2}$ pour $x<1$, aucune pour $x>1$).
* **Développement limité d'une fonction implicite (fonction $W$ de Lambert).** $f(x,y)=y\,e^y-x$ en $(0,0)$ : $\frac{\partial f}{\partial y}(0,0)=(1+y)e^y\big|_{y=0}=1$. Il existe donc $\varphi$ $C^\infty$ près de $0$, $\varphi(0)=0$, avec $\varphi(x)e^{\varphi(x)}=x$. En dérivant : $\varphi'(1+\varphi)e^\varphi=1$, donc $\varphi'(0)=1$ ; en dérivant encore : $\varphi''(1+\varphi)e^\varphi+\varphi'^2e^\varphi+\varphi'^2(1+\varphi)e^\varphi=0$, donc en $0$ : $\varphi''(0)+1+1=0$, $\varphi''(0)=-2$. D'où $\varphi(x)=x-x^2+o(x^2)$. (Le théorème ne s'applique plus en $y=-1$, où $(1+y)e^y=0$ : c'est le point $x=-1/e$ où les deux branches de $W$ se rejoignent.)
* **Racine carrée de matrices (dimension $n^2$).** $E=F=G=\mathrm M_n(\R)$, $f(A,Y)=Y^2-A$, $(A_0,Y_0)=(I_n,I_n)$. Par Leibniz, $\frac{\partial f}{\partial Y}(A,Y)(H)=YH+HY$, d'où $\frac{\partial f}{\partial Y}(I_n,I_n)(H)=2H$ : isomorphisme. Donc pour $A$ proche de $I_n$, il existe une unique $Y=\varphi(A)$ proche de $I_n$ avec $Y^2=A$, et $\varphi$ est $C^\infty$. Comme $\frac{\partial f}{\partial A}=-\id$, la formule donne $d\varphi_A(K)=H$, où $H$ est l'unique solution de l'équation de Sylvester $\varphi(A)H+H\varphi(A)=K$ (unique car $\frac{\partial f}{\partial Y}(A,\varphi(A))$ est un isomorphisme) ; en $A=I_n$ : $d\varphi_{I_n}(K)=\frac12K$, soit $\sqrt{I_n+K}=I_n+\frac12K+o(\|K\|)$.

## Pièges

* > ⚠️ C'est la différentielle partielle **par rapport à la variable que l'on veut exprimer** ($y$) qui doit être inversible, et **au point** $(x_0,y_0)$ seulement ; la conclusion est **locale** ($U_0\times V_0$).
* > ⚠️ Dans la formule $d\varphi_x=-\big(\frac{\partial f}{\partial y}\big)^{-1}\circ\frac{\partial f}{\partial x}$, les différentielles partielles sont évaluées en $(x,\varphi(x))$, pas en $(x_0,y_0)$ ; et l'ordre de composition compte (d'abord $\frac{\partial f}{\partial x}:E\to G$, puis l'inverse $G\to F$).
* Pour retrouver la formule, dériver $f(x,\varphi(x))=c$ : $\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\circ d\varphi_x=0$. Mais ce calcul suppose $\varphi$ différentiable : c'est le théorème qui le garantit.
* En dimension finie, « $\frac{\partial f}{\partial y}(x_0,y_0)$ isomorphisme de $F$ sur $G$ » impose $\dim F=\dim G$ (autant d'équations que d'inconnues $y$) et se vérifie par un déterminant jacobien partiel non nul.
* L'unicité porte sur les solutions **dans $V_0$** (ou sur les branches **continues** passant par $(x_0,y_0)$ sur un connexe, le long desquelles $\frac{\partial f}{\partial y}$ reste inversible) : ailleurs il peut y avoir d'autres solutions (exemple $y^2=x^2$).
* Lien avec l'inversion locale : appliqué à $f(x,y)=h(y)-x$, le théorème redonne le théorème d'inversion locale pour $h$ ([[ch06-inversion-locale]]).
