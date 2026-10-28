---
id: ch05-differentiable-implique-continue
type: proposition
chapter: 5
title: Différentiable en $a$ entraîne continue en $a$ ; rôle de la continuité de $df_a$
ref: Remarque V.3.2
page: 98
importance: 2
depends: [ch05-differentielle-def, ch05-petit-o-def, ch05-norme-operateur-def]
tags: [differentiable, continuite, dimension-infinie, application-lineaire]
---
## Intuition

> 💡 Si $f(a+h)\approx f(a)+df_a(h)$ avec $df_a$ continue, alors quand $h\to0$, $df_a(h)\to0$ et l'erreur aussi : $f(a+h)\to f(a)$. Différentiable $\Rightarrow$ continue, exactement comme en variable réelle.

La subtilité est en dimension infinie : une application **linéaire** peut ne pas être continue (exemple ci-dessous). La définition ([[ch05-differentielle-def]]) exige donc que $df_a$ soit continue, et c'est cette exigence qui donne la continuité de $f$. Le poly remarque qu'on peut échanger les rôles : si l'on exige plutôt que $f$ soit continue en $a$, la continuité de l'application linéaire est alors automatique. Rappel : une application linéaire est continue si et seulement si elle est **bornée**, $\|T(x)\|_F\le C\|x\|_E$ ([[ch05-norme-operateur-def]]).

## Énoncé

**Proposition (poly, Remarque V.3.2, p. 98).** Soient $E,F$ des espaces vectoriels normés, $U$ un ouvert de $E$, $f:U\to F$ et $a\in U$.
1. Si $f$ est différentiable en $a$ (avec, comme l'exige la Définition V.3.1, $df_a$ linéaire **continue**), alors $f$ est continue en $a$. Plus précisément, il existe $\delta>0$ tel que $\|f(a+h)-f(a)\|_F\le(\|df_a\|+1)\|h\|_E$ pour $\|h\|_E<\delta$.
2. Réciproquement (définition alternative), si $f$ est continue en $a$ et si $L:E\to F$ est une application **linéaire** (non supposée continue) vérifiant $\|f(a+h)-f(a)-L(h)\|_F=o(h)$, alors $L$ est nécessairement continue ; ainsi $f$ est différentiable en $a$ et $df_a=L$.
3. En dimension finie, une application linéaire est toujours continue : les deux points de vue coïncident.

## Hypothèses

### H1 — $df_a$ continue (pour le point 1)

**Rôle.** Elle donne $\|df_a(h)\|_F\le\|df_a\|\,\|h\|_E\to0$.

**Si on la retire.** Soit $c_{00}$ l'espace des suites réelles nulles à partir d'un certain rang, muni de $\|x\|_\infty=\max_n|x_n|$, et $\varphi(x)=\sum_n x_n$ (somme finie). $\varphi$ est linéaire mais pas continue : pour $u_N=\frac1N(e_1+\dots+e_N)$ (où $e_j$ vaut $1$ au rang $j$, $0$ ailleurs), $\|u_N\|_\infty=\frac1N\to0$ alors que $\varphi(u_N)=1$. Or $\varphi(a+h)-\varphi(a)-\varphi(h)=0$ : la condition (V.3.1) est satisfaite avec la linéaire non continue $L=\varphi$, et pourtant $\varphi$ n'est continue en **aucun** point (si elle l'était en $a$, elle le serait en $0$ par translation, puis partout). Sans l'exigence de continuité de $df_a$, « différentiable » n'entraînerait pas « continue ».

### H2 — $f$ continue en $a$ (pour le point 2)

**Rôle.** Elle borne $f(a+h)-f(a)$ près de $0$, donc borne $L$ sur une boule, ce qui équivaut à sa continuité.

**Si on la retire.** Le même $\varphi$ sur $c_{00}$ : $L=\varphi$ vérifie (V.3.1) sans être continue, parce que $f=\varphi$ n'est pas continue.

### H3 — Dimension finie (pour le point 3)

**Rôle.** Si $(e_1,\dots,e_n)$ est une base de $E$ et $x=\sum x_ie_i$, alors $\|T(x)\|_F\le\big(\max_i\|T(e_i)\|_F\big)\sum_i|x_i|$, et $\sum_i|x_i|$ est une norme sur $E$, équivalente à $\|\cdot\|_E$ (toutes les normes le sont en dimension finie).

**Si on la retire.** L'exemple $\varphi$ sur $c_{00}$ ci-dessus : en dimension infinie, il existe des applications linéaires non continues, et les points 1 et 2 deviennent des énoncés distincts.

## Idée de la preuve

Point 1 : inégalité triangulaire $\|f(a+h)-f(a)\|\le\|df_a(h)\|+\|\text{reste}\|\le(\|df_a\|+1)\|h\|$. Point 2 : $L(h)=f(a+h)-f(a)-\text{reste}$ est borné pour $h$ dans une petite boule, donc $L$ est bornée, donc continue.

## Preuve

Notons $r(h)=f(a+h)-f(a)-L(h)$, avec $L=df_a$ au point 1. Comme $U$ est ouvert, fixons $r_0>0$ avec $B_E(a,r_0)\subset U$. L'hypothèse $\|r(h)\|_F=o(h)$ ([[ch05-petit-o-def]]) avec $\eps=1$ fournit $\delta_1\in\,]0,r_0]$ tel que $\|r(h)\|_F\le\|h\|_E$ pour $\|h\|_E<\delta_1$.

*Point 1.* Pour $\|h\|_E<\delta_1$, comme $df_a$ est linéaire continue, $\|df_a(h)\|_F\le\|df_a\|\,\|h\|_E$ ([[ch05-norme-operateur-def]]), d'où
$$
\|f(a+h)-f(a)\|_F\le\|df_a(h)\|_F+\|r(h)\|_F\le(\|df_a\|+1)\,\|h\|_E\xrightarrow[h\to0]{}0 .
$$
Donc $f$ est continue en $a$.

*Point 2.* Par continuité de $f$ en $a$, il existe $\delta_2>0$ tel que $\|f(a+h)-f(a)\|_F\le1$ pour $\|h\|_E<\delta_2$ (et $a+h\in U$). Posons $\delta=\min(\delta_1,\delta_2,1)$. Pour $\|h\|_E<\delta$ :
$$
\|L(h)\|_F\le\|f(a+h)-f(a)\|_F+\|r(h)\|_F\le1+\|h\|_E\le2 .
$$
Soit alors $x\in E\setminus\{0\}$ et $h=\frac{\delta}{2\|x\|_E}x$, de norme $\frac\delta2<\delta$. Par linéarité,
$$
\|L(x)\|_F=\frac{2\|x\|_E}{\delta}\,\|L(h)\|_F\le\frac4\delta\,\|x\|_E .
$$
$L$ est bornée, donc continue : $L\in\mathcal L(E;F)$, et (V.3.1) dit alors que $f$ est différentiable en $a$ avec $df_a=L$.

*Point 3.* Voir H3. $\square$

## Preuve à trous

Soit $r(h)=f(a+h)-f(a)-L(h)$ ; avec $\eps=1$, $\|r(h)\|_F\le\|h\|_E$ pour $\|h\|_E<\delta_1$.

*Point 1.* Pour $\|h\|_E<\delta_1$ : <trou indice="inégalité triangulaire + norme d'opérateur">$\|f(a+h)-f(a)\|_F\le\|df_a\|\,\|h\|_E+\|h\|_E$</trou>, qui tend vers $0$.

*Point 2.* La continuité de $f$ en $a$ donne $\|f(a+h)-f(a)\|_F\le1$ pour $h$ petit, d'où <trou>$\|L(h)\|_F\le1+\|h\|_E\le2$ pour $\|h\|_E<\delta$</trou>. Pour $x\ne0$, on applique cela à <trou indice="ramener x dans la petite boule">$h=\frac{\delta}{2\|x\|_E}x$, ce qui donne par linéarité $\|L(x)\|_F\le\frac4\delta\|x\|_E$</trou> : $L$ est bornée donc continue. $\square$

## Exemples

* **Continue mais pas différentiable.** $x\mapsto|x|$ sur $\R$ est continue en $0$ mais pas différentiable ($\frac{|t|}t$ n'a pas de limite en $0$) : la réciproque du point 1 est fausse. Même chose pour la norme euclidienne de $\R^n$ en $0$.
* **Usage en contraposée.** $f(x,y)=\dfrac{x^2y}{x^4+y^2}$, $f(0,0)=0$, vérifie $f(t,t^2)=\frac12$ pour $t\ne0$ : elle n'est pas continue en $0$, donc pas différentiable en $0$, bien qu'elle admette toutes ses dérivées directionnelles en $0$ ([[ch05-derivee-directionnelle-unicite]]).
* **Estimation lipschitzienne en un point.** Pour $f(x)=\|x\|^2$ dans un Hilbert, $df_a(h)=2\langle a,h\rangle$, $\|df_a\|=2\|a\|$ ; le point 1 donne $|\,\|a+h\|^2-\|a\|^2|\le(2\|a\|+1)\|h\|$ pour $\|h\|\le1$, ce qu'on vérifie directement : $|2\langle a,h\rangle+\|h\|^2|\le2\|a\|\|h\|+\|h\|^2$.

## Pièges

* > ⚠️ « Continue » n'implique **pas** « différentiable » ($|x|$).
* > ⚠️ En dimension infinie, une application linéaire n'est pas forcément continue ; ne jamais oublier de vérifier $\|df_a(h)\|\le C\|h\|$ quand on propose une différentielle.
* Le point 1 donne une continuité **en $a$** seulement, pas sur un voisinage (une fonction peut être différentiable en un seul point : $x\mapsto x^2\mathbf 1_{\Q}(x)$ sur $\R$ est différentiable en $0$, de dérivée nulle, et discontinue partout ailleurs).
