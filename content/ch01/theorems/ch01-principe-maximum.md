---
id: ch01-principe-maximum
type: theorem
chapter: 1
title: Principe du maximum
ref: Théorème I.12.1
page: 29
importance: 3
depends: [ch01-prolongement-analytique, ch01-estimees-cauchy, ch01-formule-moyenne]
tags: [principe-maximum, module, moyenne, parseval, rigidite, connexite]
---
## Intuition

> 💡 Dessinons le « paysage » $z\mapsto|f(z)|$ au-dessus du domaine $\Omega$. Pour une fonction holomorphe non constante, ce paysage n'a **aucun sommet** à l'intérieur : seulement des pentes, des cols, et des « trous » (au niveau $0$, aux zéros de $f$). Les maxima ne peuvent se trouver que sur le bord.

Raison n°1 (formule de la moyenne, [[ch01-formule-moyenne]]) : $f(z_0)$ est la **moyenne** des valeurs de $f$ sur tout petit cercle centré en $z_0$. Or le module d'une moyenne est toujours $\le$ au plus grand des modules moyennés ; s'il lui est **égal** (ce qu'impose un maximum en $z_0$), c'est que toutes les valeurs moyennées sont égales à $f(z_0)$ — c'est ce que Parseval rend rigoureux.

Raison n°2 (développement local) : près de $z_0$, $f(z)\approx f(z_0)+a_N(z-z_0)^N$ ; quand $z$ tourne autour de $z_0$, le terme $a_N(z-z_0)^N$ prend **toutes les directions**, en particulier celle de $f(z_0)$, ce qui augmente $|f|$.

Rappel : $|f|$ admet un **maximum local** en $z_0\in\Omega$ s'il existe $R>0$ tel que $|f(z)|\le|f(z_0)|$ pour tout $z\in\Omega\cap D(z_0,R)$ (inégalité large). Un ouvert est **connexe** s'il n'est pas réunion de deux ouverts disjoints non vides.

## Énoncé

**Théorème (poly, Théorème I.12.1 — Principe du maximum (Riemann 1851), p. 29).** Soit $f$ une fonction holomorphe sur un ouvert connexe $\Omega$. On suppose que la fonction $z\mapsto|f(z)|$ admet un maximum local en $z_0\in\Omega$. Alors $f$ est constante sur $\Omega$.

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** La preuve montre que $f$ est constante **au voisinage** de $z_0$ ; c'est le prolongement analytique ([[ch01-prolongement-analytique]]), valable sur un ouvert connexe, qui étend la constance à tout $\Omega$.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ (réunion disjointe), $f=1$ sur $D(0,1)$ et $f=2$ sur $D(3,1)$ : $f$ est holomorphe, $|f|$ a un maximum local en $0$ (elle est constante près de $0$), mais $f$ n'est pas constante sur $\Omega$. La conclusion correcte sans connexité : $f$ est constante sur la composante connexe de $z_0$.

### H2 — $f$ holomorphe

**Rôle.** Elle fournit la formule de la moyenne, ou le développement en série entière de $f$ en $z_0$.

**Si on la retire.** $f(z)=1-|z|^2$ est $C^\infty$ sur $\C$ (connexe), $|f|$ a un maximum local (strict) en $0$ où elle vaut $1$, et $f$ n'est pas constante. En variable réelle, $x\mapsto1-x^2$ a de même un maximum intérieur : le phénomène est propre à l'holomorphie.

### H3 — Maximum local de $|f|$ en un point **intérieur** $z_0\in\Omega$

**Rôle.** On a besoin de **tout** un disque $\bar D(z_0,r)\subset\Omega$ autour de $z_0$ pour écrire la formule de la moyenne ou faire tourner $z$ autour de $z_0$.

**Si on la retire.**
* *Maximum au bord.* Sur $\bar D(0,1)$, $|z|$ atteint son maximum $1$ en tout point du cercle, et $z\mapsto z$ n'est pas constante : un maximum au bord est **normal** (c'est même le cas général, voir [[ch01-maximum-sur-le-bord]]).
* *Minimum au lieu de maximum.* $f(z)=z$ sur $\C$ : $|f|$ a un minimum (global) en $0$ et $f$ n'est pas constante. Il n'y a de **principe du minimum** que pour $f$ **sans zéro** (appliquer le théorème à $1/f$, voir Exemples).

## Idée de la preuve

On montre que $f$ est constante sur un disque $D(z_0,R)$, puis on conclut par prolongement analytique. Pour la constance locale : formule de la moyenne $+$ égalité de Parseval sur le cercle $C(z_0,r)$ : $|c_0|^2\le\sum|c_n|^2=\frac1{2\pi}\int|f|^2\le|c_0|^2$ force $c_n=0$ pour $n\neq0$ (ou bien : si $f\neq f(z_0)$ près de $z_0$, le terme $a_N(z-z_0)^N$ fait croître $|f|$ dans une direction bien choisie).

## Preuve

**Réduction.** Quitte à diminuer $R$, il existe $R>0$ tel que le disque fermé $\bar D(z_0,R)$ soit contenu dans $\Omega$ et que $|f(z)|\le|f(z_0)|$ pour tout $z\in\bar D(z_0,R)$. Il suffit de montrer que $f$ est constante sur $D(z_0,R)$ : en effet, $f$ et la fonction constante $f(z_0)$ sont holomorphes sur l'ouvert connexe $\Omega$ et coïncident sur $D(z_0,R)$, qui a des points d'accumulation dans $\Omega$ (par exemple $z_0$) ; par le principe du prolongement analytique ([[ch01-prolongement-analytique]]), $f\equiv f(z_0)$ sur $\Omega$.

Si $f(z_0)=0$, alors $|f|\le0$ sur $\bar D(z_0,R)$, donc $f=0$ sur ce disque, et c'est terminé. On suppose désormais $f(z_0)\neq0$.

**Première démonstration (développement en série entière).** Par [[ch01-estimees-cauchy]], $f$ est développable en série entière près de $z_0$ : $f(z)=f(z_0)+\sum_{n\ge1}a_n(z-z_0)^n$ sur un disque $D(z_0,\delta)$, $0<\delta\le R$. Supposons par l'absurde $f$ non constante sur $D(z_0,\delta)$ : il existe $n\ge1$ avec $a_n\neq0$ ; soit $N$ le plus petit. Alors
$$
f(z)=f(z_0)+(z-z_0)^Ng(z),\qquad g(z):=\sum_{n\ge N}a_n(z-z_0)^{n-N},
$$
où $g$ est holomorphe sur $D(z_0,\delta)$ et $g(z_0)=a_N\neq0$. En développant $|u+v|^2=|u|^2+2\Re(v\bar u)+|v|^2$ :
$$
|f(z)|^2=|f(z_0)|^2+2\Re\Big((z-z_0)^Ng(z)\,\overline{f(z_0)}\Big)+|z-z_0|^{2N}|g(z)|^2 .
$$
Posons $z=z_0+te^{i\beta}$, $t\in[0,\delta[$, $\beta\in\R$. Comme $g$ est de classe $C^1$, $g(z)=g(z_0)+O(t)$ ; et $t^{2N}=O(t^{N+1})$ puisque $N\ge1$. D'où
$$
|f(z_0+te^{i\beta})|^2=|f(z_0)|^2+2\,\Re\Big(e^{iN\beta}g(z_0)\overline{f(z_0)}\Big)\,t^N+O(t^{N+1}).
$$
Comme $g(z_0)\overline{f(z_0)}\neq0$, écrivons $g(z_0)\overline{f(z_0)}=\rho e^{i\varphi}$ avec $\rho>0$, et choisissons $\beta=-\varphi/N$ : alors $\Re\big(e^{iN\beta}g(z_0)\overline{f(z_0)}\big)=\rho>0$, et $|f(z_0+te^{i\beta})|^2-|f(z_0)|^2=2\rho t^N+O(t^{N+1})>0$ pour $t>0$ assez petit. Cela contredit $|f|\le|f(z_0)|$ sur $\bar D(z_0,R)$. Donc $f$ est constante sur $D(z_0,\delta)$, et on conclut comme dans la réduction (le prolongement analytique s'applique aussi bien à partir de $D(z_0,\delta)$).

**Seconde démonstration (formule de la moyenne et Parseval).** Fixons $0<r<R$ et considérons la fonction continue $2\pi$-périodique $f_r:\theta\mapsto f(z_0+re^{i\theta})$, de coefficients de Fourier
$$
c_n:=\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})e^{-in\theta}d\theta\qquad(n\in\Z).
$$
La formule de la moyenne ([[ch01-formule-moyenne]]) donne $c_0=f(z_0)$, donc
$$
|c_0|=|f(z_0)|=\sup_{\bar D(z_0,r)}|f|.
$$
L'égalité de Parseval pour $f_r$ donne alors
$$
|c_0|^2\le\sum_{n\in\Z}|c_n|^2=\frac1{2\pi}\int_0^{2\pi}|f(z_0+re^{i\theta})|^2d\theta\le\frac1{2\pi}\int_0^{2\pi}\sup_{z\in\bar D(z_0,r)}|f(z)|^2d\theta=|c_0|^2 .
$$
Toutes les inégalités sont des égalités, donc $c_n=0$ pour tout $n\neq0$. La fonction continue $f_r-c_0$ a alors tous ses coefficients de Fourier nuls, donc, par Parseval, $\frac1{2\pi}\int_0^{2\pi}|f_r-c_0|^2d\theta=0$, d'où $f_r\equiv c_0=f(z_0)$ : $f$ vaut $f(z_0)$ sur tout le cercle $C(z_0,r)$. Ceci valant pour tout $r\in\,]0,R[$ (et en $z_0$), $f$ est constante sur $D(z_0,R)$. On conclut par la réduction. $\square$

## Preuve à trous

Soit $R>0$ avec $\bar D(z_0,R)\subset\Omega$ et $|f|\le|f(z_0)|$ sur $\bar D(z_0,R)$. Il suffit de prouver que $f$ est constante sur $D(z_0,R)$, car alors <trou indice="comment passer du disque à tout $\Omega$ ?">$f$ et la constante $f(z_0)$ coïncident sur un ouvert non vide de l'ouvert connexe $\Omega$, donc partout par prolongement analytique</trou>.
Pour $0<r<R$, soient $c_n$ les coefficients de Fourier de $\theta\mapsto f(z_0+re^{i\theta})$. Par <trou indice="valeur au centre d'un cercle">la formule de la moyenne, $c_0=f(z_0)$, donc $|c_0|=\sup_{\bar D(z_0,r)}|f|$</trou>. Alors
<trou indice="Parseval puis majoration par le sup">$|c_0|^2\le\sum_n|c_n|^2=\frac1{2\pi}\int_0^{2\pi}|f(z_0+re^{i\theta})|^2d\theta\le|c_0|^2$</trou>,
donc <trou>$c_n=0$ pour $n\neq0$ et $f\equiv f(z_0)$ sur $C(z_0,r)$</trou>, pour tout $r\in\,]0,R[$ : $f$ est constante sur $D(z_0,R)$. $\square$

## Exemples

* **$|e^z|$ sur $\bar D(0,1)$.** $|e^z|=e^{\Re z}$ est maximal là où $\Re z$ l'est, c'est-à-dire en $z=1$, sur le bord ; à l'intérieur, en tout point $z_0$, la direction $\beta=0$ fait croître $|e^z|$ (ici $N=1$, $g(z_0)\overline{f(z_0)}=e^{z_0}\overline{e^{z_0}}=|e^{z_0}|^2>0$, donc $\beta=0$ convient, comme dans la première preuve).
* **Principe du minimum.** Si $f\in\Hol(\Omega)$, $\Omega$ connexe, **ne s'annule pas** et si $|f|$ a un minimum local en $z_0\in\Omega$, alors $1/f$ est holomorphe et $|1/f|=1/|f|$ a un maximum local en $z_0$ : $1/f$, donc $f$, est constante. L'hypothèse « sans zéro » est indispensable : $f(z)=z$ a un minimum de $|f|$ en $0$.
* **Maximum de la partie réelle.** Si $\Re f$ a un maximum local en $z_0\in\Omega$ connexe, alors $|e^f|=e^{\Re f}$ a un maximum local en $z_0$, donc $e^f$ est constante ; en dérivant, $f'e^f=0$, donc $f'=0$ sur $\Omega$ connexe et $f$ est constante. (Version harmonique au chapitre IV, [[ch04-harmonique-moyenne-maximum]].)

## Pièges

* > ⚠️ C'est un énoncé sur le **module** $|f|$ (ou sur $\Re f$), jamais sur « $f$ maximale » : $\C$ n'est pas ordonné.
* > ⚠️ Pas de principe du **minimum** sans hypothèse : il faut que $f$ ne s'annule pas (les zéros de $f$ sont les minima de $|f|$).
* Le maximum doit être atteint en un point **de $\Omega$** (intérieur) ; un maximum sur le bord est la règle, pas une contradiction.
* « Maximum local » s'entend au sens large ($\le$) : une fonction constante près de $z_0$ convient, et c'est bien compatible avec la conclusion.
* Sans connexité, on conclut seulement que $f$ est constante sur la **composante connexe** de $z_0$.
* Rien de tel pour les fonctions de classe $C^\infty$ d'une ou deux variables réelles ($1-x^2$, $1-|z|^2$).
