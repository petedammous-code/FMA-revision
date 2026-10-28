---
id: ch05-taylor-lagrange
type: theorem
chapter: 5
title: Inégalité de Taylor-Lagrange
ref: Théorème V.5.12
page: 111
importance: 2
depends: [ch05-taylor-lagrange-1d, ch05-composition-differentielles, ch05-differentielle-lineaire, ch05-espace-multilineaires-norme, ch05-formule-pratique-dpf]
tags: [taylor, lagrange, inegalite, majoration, ordre-superieur]
---
## Intuition

> 💡 Si la différentielle d'ordre $p+1$ reste bornée par $C$, alors $f(a+h)$ s'écarte de son polynôme de Taylor d'ordre $p$ d'au plus $\frac{C\norm{h}^{p+1}}{(p+1)!}$ : exactement la borne que l'on obtiendrait en majorant brutalement le reste intégral ([[ch05-taylor-reste-integral]]), mais **sans intégrale**, donc sans continuité de $d^{p+1}f$ ni complétude de $F$.

Pour $p=0$ c'est l'inégalité des accroissements finis ([[ch05-accroissements-finis]]) : $\norm{f(a+h)-f(a)}\le C\norm{h}$. Comme toujours, on se ramène à la fonction d'une variable $g(t)=f(a+th)$ et au lemme 1D ([[ch05-taylor-lagrange-1d]]).

Vocabulaire. « $f$ est $(p+1)$ fois différentiable sur $U$ » : $f$, $df$, …, $d^pf$ sont différentiables en tout point de $U$ (sans exiger la continuité de $d^{p+1}f$). La norme $\norm{d^{p+1}f_x}$ est celle des applications $(p+1)$-linéaires continues, $\norm{\omega}=\sup\{\norm{\omega(h_1,\dots,h_{p+1})}_F:\ \norm{h_i}_E\le1\}$ ([[ch05-espace-multilineaires-norme]]), égale à la norme d'opérateur itérée ; elle donne $\norm{\omega(h,\dots,h)}_F\le\norm{\omega}\,\norm{h}_E^{p+1}$.

## Énoncé

**Théorème (poly, Théorème V.5.12, p. 111).** Soit $f$ une fonction $p+1$-différentiable d'un ouvert $U$ d'un espace vectoriel normé $E$ à valeurs dans un espace vectoriel normé $F$. Supposons de plus que pour tout $x\in U$, on ait $\norm{d^{p+1}f_x}\le C$ pour une certaine constante $C>0$. Soit $a\in U$, $h\in E$ et supposons que le segment $\{a+th,\ t\in[0;1]\}$ soit contenu dans $U$. On a alors
$$
\Big\|f(a+h)-f(a)-df_a(h)-\frac{d^2f_a(h,h)}{2!}-\cdots-\frac{d^pf_a(h,\dots,h)}{p!}\Big\|_F\le\frac{C\,\norm{h}_E^{p+1}}{(p+1)!}.
$$

## Hypothèses

### H1 — $f$ est $(p+1)$ fois différentiable sur $U$

**Rôle.** Elle rend $g(t)=f(a+th)$ $(p+1)$ fois dérivable, avec $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$, pour appliquer le lemme 1D.

**Si on la retire.** Le terme $d^{p+1}f_x$ n'est plus défini partout et l'hypothèse de borne perd son sens. Comme pour le lemme 1D, on ne peut pas se contenter d'une borne valable « presque partout » : avec $p=0$, $E=F=\R$, la fonction de Cantor (prolongée par $0$ à gauche de $0$ et par $1$ à droite de $1$) a une dérivée nulle hors de l'ensemble de Cantor, mais $\abs{f(1)-f(0)}=1>C\cdot1$ pour $C<1$ (voir [[ch05-taylor-lagrange-1d]]).

### H2 — $\norm{d^{p+1}f_x}\le C$

**Rôle.** Elle donne $\norm{g^{(p+1)}(t)}_F\le C\norm{h}^{p+1}$, hypothèse du lemme 1D. Seuls les points $x$ du segment $[a,a+h]$ servent : la borne sur $U$ entier est plus que nécessaire.

**Si on la retire.** Pas de majoration. La constante est optimale : $E=F=\R$, $f(x)=x^{p+1}$, $a=0$ : $d^{p+1}f_x(h,\dots,h)=(p+1)!\,h^{p+1}$, donc $C=(p+1)!$, et le membre de gauche vaut $\abs{h}^{p+1}=\frac{C\abs{h}^{p+1}}{(p+1)!}$ : égalité.

### H3 — Le segment $[a,a+h]$ est contenu dans $U$

**Rôle.** Définir $g(t)=f(a+th)$ sur un intervalle ouvert contenant $[0,1]$.

**Si on la retire.** Soit $U=\{(x,y)\in\R^2:\ x^2+y^2>\frac12\}\setminus\{(x,0):x\le0\}$ (norme euclidienne) et $\theta$ l'argument principal, $C^\infty$ sur $U$ avec $\norm{d\theta_{(x,y)}}=\frac{1}{\sqrt{x^2+y^2}}<\sqrt2$ (gradient $\frac{(-y,x)}{x^2+y^2}$). Prenons $p=0$, $C=\sqrt2$, $a=(-1,1)$, $h=(0,-2)$ : $a$ et $a+h$ sont dans $U$ mais le segment passe par $(-1,0)\notin U$, et $\abs{\theta(a+h)-\theta(a)}=\frac{3\pi}{2}\approx4{,}71>C\norm{h}=2\sqrt2\approx2{,}83$. L'inégalité est fausse.

### H4 — $F$ evn quelconque (aucune complétude)

**Rôle.** Ce n'est pas une restriction mais une **absence** d'hypothèse, à remarquer : la preuve passe par l'inégalité V.4.1 ([[ch05-accroissements-finis-vectoriel]]), valable dans tout evn ; aucune intégrale n'intervient.

**Si on la retire.** Sans objet. (Le lemme 1D est énoncé dans le poly avec $F$ de Banach, mais sa preuve n'utilise pas la complétude.)

## Idée de la preuve

On pose $g(t)=f(a+th)$ : $g^{(p+1)}(t)=d^{p+1}f_{a+th}(h,\dots,h)$ a une norme $\le C\norm{h}^{p+1}$, et le lemme V.5.10 appliqué à $g$ avec la constante $C\norm{h}^{p+1}$ donne le résultat.

## Preuve

Si $h=0$, les deux membres sont nuls. Supposons $h\neq0$.

Comme dans la preuve de [[ch05-taylor-reste-integral]], l'ensemble ouvert $\{t\in\R:\ a+th\in U\}$ contient le compact $[0,1]$, donc un intervalle ouvert $I\supset[0,1]$, et l'on pose $g(t)=f(a+th)$ pour $t\in I$.

Montrons par récurrence sur $k\in\{0,\dots,p+1\}$ que $g$ est $k$ fois dérivable sur $I$ et $g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$. C'est clair pour $k=0$. Si c'est vrai au rang $k\le p$ : l'application $x\mapsto d^kf_x$ est différentiable sur $U$ (car $f$ est $(p+1)$ fois différentiable et $k\le p$), de différentielle $d^{k+1}f_x$ ; l'application $\Lambda_k:\omega\mapsto\omega(h,\dots,h)$ est linéaire continue ; par la règle de la chaîne ([[ch05-composition-differentielles]], [[ch05-differentielle-lineaire]]),
$$
g^{(k+1)}(t)=\Lambda_k\big(d^{k+1}f_{a+th}(h)\big)=d^{k+1}f_{a+th}(h,h,\dots,h)
$$
(voir aussi [[ch05-formule-pratique-dpf]]). Ainsi $g$ est $(p+1)$ fois dérivable sur $I$ et, pour $t\in[0,1]$, comme $a+th\in U$,
$$
\norm{g^{(p+1)}(t)}_F=\norm{d^{p+1}f_{a+th}(h,\dots,h)}_F\le\norm{d^{p+1}f_{a+th}}\,\norm{h}_E^{p+1}\le C\norm{h}_E^{p+1}.
$$
Le lemme V.5.10 ([[ch05-taylor-lagrange-1d]]), appliqué à $g$ avec la constante $C\norm{h}^{p+1}>0$ (sa preuve n'utilise pas la complétude de $F$), donne
$$
\Big\|g(1)-\sum_{k=0}^p\frac{g^{(k)}(0)}{k!}\Big\|_F\le\frac{C\norm{h}_E^{p+1}}{(p+1)!}.
$$
Comme $g(1)=f(a+h)$ et $g^{(k)}(0)=d^kf_a(h,\dots,h)$, c'est l'inégalité voulue. $\square$

## Preuve à trous

On restreint $f$ au segment : <trou indice="fonction d'une variable réelle">$g(t)=f(a+th)$, définie sur un intervalle ouvert contenant $[0,1]$</trou>. Par récurrence et règle de la chaîne, <trou>$g^{(k)}(t)=d^kf_{a+th}(h,\dots,h)$ pour $k\le p+1$</trou>. Pour $t\in[0,1]$, <trou indice="norme d'une application multilinéaire">$\norm{g^{(p+1)}(t)}\le\norm{d^{p+1}f_{a+th}}\,\norm{h}^{p+1}\le C\norm{h}^{p+1}$</trou>. Le lemme de Taylor-Lagrange 1D appliqué à $g$ avec la constante $C\norm{h}^{p+1}$ donne $\big\|g(1)-\sum_{k\le p}\frac{g^{(k)}(0)}{k!}\big\|\le\frac{C\norm{h}^{p+1}}{(p+1)!}$, ce qui est l'inégalité annoncée. $\square$

## Exemples

* **Cosinus de deux variables.** $f(x,y)=\cos(x+y)$ sur $\R^2$ muni de la norme $\norm{(u,v)}_1=\abs u+\abs v$, $a=0$, $p=1$. On a $df_0=0$ et $d^2f_x(h,h)=-\cos(x_1+x_2)(u+v)^2$, d'où $\abs{d^2f_x(h,k)}\le\norm h_1\norm k_1$ : $C=1$. Donc $\abs{\cos(u+v)-1}\le\frac{(\abs u+\abs v)^2}{2}$, ce qui est cohérent avec $\abs{1-\cos s}\le\frac{s^2}2$.
* **Inverse d'opérateur.** Avec $\Psi(f)=f^{-1}$ ([[ch05-inversion-c-infini]]) et $p=0$ : sur la boule ouverte $U=\{f:\ \norm{f-f_0}<r\}$ avec $r\norm{f_0^{-1}}\le\frac12$ (contenue dans $\mathrm{Iso}(E;F)$), on a $\norm{f^{-1}}\le\frac{1}{1-\norm h}\norm{f_0^{-1}}\le2\norm{f_0^{-1}}$ (série de Neumann, $\norm h\le\frac12$), donc $\norm{d\Psi_f}\le\norm{f^{-1}}^2\le4\norm{f_0^{-1}}^2$, et la boule est convexe : pour $f\in U$, $\norm{f^{-1}-f_0^{-1}}\le4\norm{f_0^{-1}}^2\norm{f-f_0}$.
* **$p=0$.** On retrouve exactement le théorème des accroissements finis V.4.4 ([[ch05-accroissements-finis]]) avec $C=\sup\norm{df_x}$.

## Pièges

* > ⚠️ C'est une **inégalité**, jamais une égalité « $=\frac{d^{p+1}f_c(h,\dots,h)}{(p+1)!}$ » avec un point $c$ du segment dès que $\dim F\ge2$ : pour $p=0$, $f(t)=(\cos2\pi t,\sin2\pi t)$ donne $f(1)-f(0)=0$ alors que $f'(c)\neq0$ pour tout $c$.
* La norme $\norm{d^{p+1}f_x}$ est une norme d'application **multilinéaire** et dépend des normes choisies sur $E$ et $F$ ; la constante $C$ change si l'on change de norme (voir l'exemple du cosinus).
* Le segment doit être dans $U$ ; si $U$ est convexe et $\sup_U\norm{d^{p+1}f}\le C$, l'inégalité vaut pour tous $a,a+h\in U$.
* Comparaison : reste intégral = égalité, hypothèses fortes ; Taylor-Lagrange = majoration **globale explicite** sur le segment ; Taylor-Young ([[ch05-taylor-young]]) = information **locale**, $o(\norm h^p)$, sans constante.
