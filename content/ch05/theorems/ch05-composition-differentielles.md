---
id: ch05-composition-differentielles
type: proposition
chapter: 5
title: Composition des différentielles (règle de la chaîne)
ref: Proposition V.3.12
page: 100
importance: 3
depends: [ch05-differentielle-def, ch05-differentiable-implique-continue, ch05-lef-banach-norme-algebre]
tags: [composition, regle-de-la-chaine, chain-rule, differentielle]
---
## Intuition

> 💡 Près de $a$, $f$ « ressemble » à l'application linéaire $df_a$ ; près de $b=f(a)$, $g$ ressemble à $dg_b$. Donc, près de $a$, $g\circ f$ ressemble à la composée des deux approximations : $dg_{f(a)}\circ df_a$. Un petit déplacement $h$ au départ devient $df_a(h)$ (plus une erreur négligeable) après $f$, puis $dg_{f(a)}(df_a(h))$ (plus une erreur négligeable) après $g$.

Toute la difficulté est de vérifier que les deux erreurs restent négligeables devant $\|h\|$ : l'erreur de $f$ est transportée par l'application linéaire continue $dg_b$ (qui ne l'amplifie que d'un facteur $\|dg_b\|$), et l'erreur de $g$ est petite devant $\|f(a+h)-f(a)\|$, qui est lui-même au plus de l'ordre de $\|h\|$. En dimension finie, cela redonne la formule « jacobienne de la composée = produit des jacobiennes » ([[ch05-matrice-jacobienne]]).

Rappels : différentiabilité et notation $o(h)$ : [[ch05-differentielle-def]], [[ch05-petit-o-def]] ; la norme d'opérateur $\|T\|$ d'un $T\in\mathcal L(F;G)$ vérifie $\|T(y)\|_G\le\|T\|\,\|y\|_F$ ([[ch05-norme-operateur-def]]).

## Énoncé

**Proposition (poly, Proposition V.3.12, p. 100).** Soient $E$, $F$ et $G$ des espaces vectoriels normés, $U$ un ouvert de $E$, $f:U\to F$ une application différentiable en un point $a$ de $U$, $V$ un ouvert de $F$ contenant $f(a)$ et $g:V\to G$ une application différentiable en $f(a)$. Alors $g\circ f$ est différentiable en $a$, et
$$
d(g\circ f)_a=dg_{f(a)}\circ df_a .
$$
*Précision.* $g\circ f$ est définie sur $f^{-1}(V)=\{x\in U : f(x)\in V\}$ ; comme $f$ est continue en $a$ ([[ch05-differentiable-implique-continue]]) et $V$ est un voisinage de $f(a)$, cet ensemble contient une boule ouverte $B_E(a,r)$, ce qui suffit pour parler de différentiabilité en $a$ (si $f$ est continue sur $U$, $f^{-1}(V)$ est un ouvert).

## Hypothèses

### H1 — $f$ différentiable en $a$

**Rôle.** Elle fournit $f(a+h)-f(a)=df_a(h)+s(h)$ avec $s(h)=o(h)$, et la continuité de $f$ en $a$.

**Si on la retire.** $f(x)=|x|$ sur $\R$, $g=\id_\R$, $a=0$ : $g$ est différentiable partout, mais $g\circ f=|\cdot|$ n'est pas dérivable en $0$.

### H2 — $g$ différentiable en $f(a)$ (au sens fort de la définition V.3.1)

**Rôle.** Elle fournit $g(y)=g(b)+dg_b(y-b)+r(y,b)$ avec $r(y,b)=o(y-b)$, **uniformément dans toutes les directions** : c'est ce qui permet de contrôler $r$ le long de $y=f(a+h)$, quelle que soit la manière dont $y$ approche $b$.

**Si on la retire.** (a) $f=\id_\R$, $g=|\cdot|$, $a=0$ : $g\circ f=|\cdot|$ n'est pas dérivable en $0$. (b) *Des dérivées directionnelles ne suffisent pas.* Sur $\R^2$, soit $g(x,y)=1$ si $y=x^2$ et $x\neq0$, et $g(x,y)=0$ sinon. Toute droite passant par $0$ ne rencontre la parabole qu'en au plus un point autre que $0$ (la droite $y=mx$ la rencontre en $x=m$, la droite $x=0$ seulement en $0$) : donc $g$ est nulle sur un voisinage de $0$ dans chaque droite, et toutes ses dérivées directionnelles en $0$ sont nulles. Pourtant, avec $\alpha(t)=(t,t^2)$ (application $C^\infty$, $\alpha(0)=0$), on a $g\circ\alpha(t)=1$ pour $t\neq0$ et $g\circ\alpha(0)=0$ : $g\circ\alpha$ n'est même pas continue en $0$, alors que la « règle de la chaîne » prédirait $(g\circ\alpha)'(0)=0$. (c) La condition n'est que **suffisante** : $f(x)=x^2$, $g=|\cdot|$, $a=0$ : $g\circ f(x)=x^2$ est dérivable en $0$ bien que $g$ ne soit pas dérivable en $f(0)=0$ (la formule $dg_{f(a)}\circ df_a$ n'a alors aucun sens).

### H3 — $V$ ouvert contenant $f(a)$

**Rôle.** Pour que « $g$ différentiable en $f(a)$ » ait un sens, $g$ doit être définie sur un voisinage de $f(a)$ ; et c'est ce voisinage qui garantit, avec la continuité de $f$ en $a$, que $g\circ f$ est définie près de $a$.

**Si on la retire.** C'est une hypothèse de cadre plutôt qu'une vraie restriction : on peut toujours remplacer $V$ par n'importe quel ouvert contenant $f(a)$ sur lequel $g$ est définie. Mais si $f(a)$ est sur le bord du domaine de $g$ (par exemple $g=\sqrt{\cdot}$ sur $[0,+\infty[$ et $f(x)=x^2$, $a=0$), le théorème ne s'applique pas — ici $g\circ f=|\cdot|$ n'est d'ailleurs pas dérivable en $0$.

## Idée de la preuve

Écrire $y-b=f(a+h)-f(a)=df_a(h)+s(h)$, puis $g(y)-g(b)=dg_b(y-b)+r(y,b)$. Le reste total est $dg_b(s(h))+r(y,b)$ : le premier terme est $\le\|dg_b\|\,\|s(h)\|=o(h)$ ; pour le second, $\|y-b\|\le(\|df_a\|+\eps)\|h\|$ et $y\to b$, donc $r(y,b)=o(h)$.

## Preuve

Notons $b=f(a)$ et, pour $h$ assez petit, $y=f(a+h)$. Par différentiabilité de $g$ en $b$,
$$
g(y)=g(b)+dg_b(y-b)+r(y,b),\qquad\text{avec}\quad\lim_{y\to b}\frac{\|r(y,b)\|_G}{\|y-b\|_F}=0
$$
(et $r(b,b)=0$). Par différentiabilité de $f$ en $a$,
$$
y-b=f(a+h)-f(a)=df_a(h)+s(h),\qquad\text{avec}\quad\lim_{h\to0}\frac{\|s(h)\|_F}{\|h\|_E}=0 .
$$
Par linéarité de $dg_b$, on obtient
$$
g\circ f(a+h)-g\circ f(a)-dg_{f(a)}\circ df_a(h)=dg_b(y-b)+r(y,b)-dg_b(df_a(h))=dg_b(s(h))+r(y,b).
$$
Il reste à montrer que ces deux termes sont des $o(h)$.

*Premier terme.* $\|dg_b(s(h))\|_G\le\|dg_b\|\,\|s(h)\|_F=o(h)$, car $dg_b$ est continue ($\|dg_b\|<+\infty$).

*Second terme.* Soit $\eps>0$. Pour $h$ assez petit, $\|s(h)\|_F\le\eps\|h\|_E$, donc
$$
\|y-b\|_F=\|df_a(h)+s(h)\|_F\le(\|df_a\|+\eps)\,\|h\|_E .
$$
Par ailleurs, il existe $\eta>0$ tel que $\|y-b\|_F<\eta$ entraîne $\|r(y,b)\|_G\le\eps\|y-b\|_F$. Comme $f$ est continue en $a$ ([[ch05-differentiable-implique-continue]]), $y=f(a+h)\to b$ lorsque $h\to0$ : pour $h$ assez petit, $\|y-b\|_F<\eta$, et donc
$$
\|r(y,b)\|_G\le\eps\,\|y-b\|_F\le\eps\,(\|df_a\|+\eps)\,\|h\|_E .
$$
Comme $\eps(\|df_a\|+\eps)\to0$ quand $\eps\to0$, on a $r(y,b)=o(h)$.

Enfin $dg_{f(a)}\circ df_a$ est linéaire continue (composée d'applications linéaires continues, $\|dg_b\circ df_a\|\le\|dg_b\|\,\|df_a\|$ : [[ch05-lef-banach-norme-algebre]]). Donc $g\circ f$ est différentiable en $a$ et $d(g\circ f)_a=dg_{f(a)}\circ df_a$ ([[ch05-differentielle-def]]). $\square$

## Preuve à trous

Soit $b=f(a)$ et $y=f(a+h)$. On écrit $g(y)=g(b)+dg_b(y-b)+r(y,b)$ avec $r(y,b)=o(y-b)$, et $y-b=df_a(h)+s(h)$ avec $s(h)=o(h)$. Par linéarité de $dg_b$,
$$
g\circ f(a+h)-g\circ f(a)-dg_b\circ df_a(h)=\ ?
$$
la réponse étant <trou indice="remplacer y−b par son développement dans dg_b(y−b)">$dg_b(s(h))+r(y,b)$</trou>.

Le premier terme est un $o(h)$ car <trou indice="dg_b est linéaire continue">$\|dg_b(s(h))\|\le\|dg_b\|\,\|s(h)\|$</trou>.

Pour le second, on contrôle d'abord la taille de $y-b$ : pour $h$ petit, <trou indice="inégalité triangulaire et ‖s(h)‖ ≤ ε‖h‖">$\|y-b\|\le(\|df_a\|+\eps)\|h\|$</trou>. Comme <trou indice="quelle propriété de f en a assure que y est proche de b ?">$f$ est continue en $a$, $y\to b$ quand $h\to0$, donc pour $h$ petit $\|r(y,b)\|\le\eps\|y-b\|$</trou>, d'où $\|r(y,b)\|\le\eps(\|df_a\|+\eps)\|h\|$, et $r(y,b)=o(h)$. $\square$

## Exemples

* **Vérification sur $\R^2$.** $f(x,y)=(x^2-y^2,\,2xy)$ et $g(u,v)=u^2+v^2$, de sorte que $g\circ f(x,y)=(x^2+y^2)^2$. On a $df_{(x,y)}(h,k)=(2xh-2yk,\ 2yh+2xk)$ et $dg_{(u,v)}(p,q)=2up+2vq$. La règle de la chaîne donne
$$
\begin{aligned}
d(g\circ f)_{(x,y)}(h,k)&=2(x^2-y^2)(2xh-2yk)+4xy(2yh+2xk)\\
&=4\big(x^3h+xy^2h+x^2yk+y^3k\big)=4(x^2+y^2)(xh+yk),
\end{aligned}
$$
ce qui coïncide avec le calcul direct $d\big((x^2+y^2)^2\big)=2(x^2+y^2)(2xh+2yk)$.
* **Norme hilbertienne.** Sur un Hilbert $E$, $N(x)=\|x\|=\sqrt{q(x)}$ avec $q(x)=\|x\|^2$, $dq_a(h)=2\langle a,h\rangle$. Pour $a\neq0$, $q(a)\in V=]0,+\infty[$ ouvert, où $\sqrt{\cdot}$ est dérivable de dérivée $\frac1{2\sqrt t}$. Donc $dN_a(h)=\frac{1}{2\|a\|}\cdot2\langle a,h\rangle=\big\langle\frac{a}{\|a\|},h\big\rangle$ : $\nabla N(a)=a/\|a\|$. En $a=0$, $N$ n'est pas différentiable ($N(th)=|t|\,\|h\|$).
* **Inverse d'une fonction réelle.** Si $\varphi:U\to\R$ est différentiable en $a$ avec $\varphi(a)\neq0$, alors avec $g(t)=1/t$ sur $V=\R^*$ : $d(1/\varphi)_a(h)=-\dfrac{d\varphi_a(h)}{\varphi(a)^2}$.

## Pièges

* > ⚠️ **L'ordre** : $d(g\circ f)_a=dg_{f(a)}\circ df_a$ — d'abord $df_a$ (de $E$ dans $F$), puis $dg$ (de $F$ dans $G$). En général $df_a\circ dg_{f(a)}$ n'a même pas de sens (espaces incompatibles).
* > ⚠️ **Le point** : $dg$ est évaluée en $f(a)$, pas en $a$. Écrire $dg_a$ est une faute fréquente (et souvent dénuée de sens : $a\in E$, alors que $g$ est définie sur $V\subset F$).
* La différentiabilité de $g$ **au sens fort** est indispensable : l'existence de toutes les dérivées directionnelles, même linéaires en la direction, ne suffit pas (contre-exemple de la parabole ci-dessus).
* La proposition donne une condition **suffisante** : $g\circ f$ peut être différentiable sans que $g$ le soit en $f(a)$ ($g=|\cdot|$, $f(x)=x^2$).
* Version « application tangente » : $T(g\circ f)=Tg\circ Tf$ ([[ch05-application-tangente]]) ; version géométrique : $df_a$ transporte les vecteurs tangents aux courbes ([[ch05-vecteur-tangent-courbe]]).
