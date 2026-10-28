---
id: ex-ch04-trigonometrique-dirichlet-disque
type: exercise
chapters: [4]
title: Problème de Dirichlet sur le disque pour une donnée trigonométrique
source: "Classique (problème de Dirichlet sur le disque, données trigonométriques)"
difficulty: 1
time: 15
tools: [ch04-holomorphe-implique-harmonique, ch04-maximum-unicite-bord, ch04-harmonique-moyenne-maximum]
---
## Énoncé

On note $D=D(0,1)$ et $\bar D$ le disque fermé. Toutes les fonctions sont à valeurs réelles.

1. Déterminer une fonction $u:\bar D\to\R$, continue sur $\bar D$ et harmonique sur $D$, telle que $u(e^{i\theta})=\cos^2\theta$ pour tout $\theta\in\R$. Montrer qu'elle est unique.
2. Sans utiliser la formule obtenue, donner $u(0)$, puis montrer que $0<u(z)<1$ pour tout $z\in D$.
3. Existe-t-il une fonction $v$ continue sur $\bar D$, harmonique sur $D$, telle que $v(e^{i\theta})=|\sin\theta|$ pour tout $\theta$ et $v(0)=\frac12$ ?

## Indices

### Indice 1
Linéariser $\cos^2\theta$, et reconnaître $\cos(k\theta)$ comme la valeur sur le cercle de la partie réelle d'une fonction holomorphe très simple.

### Indice 2
Unicité et encadrement : principe du maximum pour les fonctions harmoniques réelles sur un ouvert connexe borné, avec continuité jusqu'au bord. Valeur en $0$ : propriété de la moyenne — mais elle est énoncée pour $\bar D(0,r)\subset D$, donc $r<1$ ; passer à la limite $r\to1$.

### Indice 3
$\cos^2\theta=\frac12+\frac12\cos(2\theta)$ et $\cos(2\theta)=\Re\big((e^{i\theta})^2\big)$. Pour la question 3, calculer $\frac1{2\pi}\int_0^{2\pi}|\sin\theta|\,d\theta$.

## Corrigé

**1.** *Existence.* $\cos^2\theta=\frac12+\frac12\cos(2\theta)$ et $\cos(2\theta)=\Re(e^{2i\theta})$. Posons
$$
u(z)=\frac12+\frac12\Re(z^2)=\frac12+\frac{x^2-y^2}{2}\qquad(z=x+iy\in\bar D).
$$
$u$ est un polynôme en $(x,y)$, donc continue sur $\bar D$ et $C^\infty$. Elle est harmonique : partie réelle de la fonction holomorphe $\frac12+\frac12z^2$ ([[ch04-holomorphe-implique-harmonique]], poly, p. 76) — ou directement $\Delta u=\frac12(2-2)=0$. Enfin $u(e^{i\theta})=\frac12+\frac12\cos(2\theta)=\cos^2\theta$.

*Unicité.* Soit $\tilde u$ une autre solution. $w=u-\tilde u$ est harmonique sur $D$, ouvert **connexe et borné**, continue sur le compact $\bar D$ et nulle sur $\partial D=C(0,1)$. Par le principe du maximum ([[ch04-maximum-unicite-bord]], poly, Remarque IV.2.6, p. 77) : $w$ atteint son maximum sur $\bar D$ ; s'il était $>0$, il serait atteint en un point de $D$, et $w$ serait constante sur $D$ ([[ch04-harmonique-moyenne-maximum]], poly, Corollaire IV.2.5, p. 77), donc par continuité égale à $0$ sur le cercle, contradiction. Donc $w\le0$, et de même (avec $-w$) $w\ge0$ : $\tilde u=u$.

**2.** *Valeur en $0$.* Pour $0<r<1$, $\bar D(0,r)\subset D$, et la propriété de la moyenne (Corollaire IV.2.5) donne
$$
u(0)=\frac{1}{2\pi}\int_0^{2\pi}u(re^{i\theta})\,d\theta .
$$
La fonction $u$ est continue sur le compact $\bar D$, donc uniformément continue : $u(re^{i\theta})\to u(e^{i\theta})$ **uniformément** en $\theta$ quand $r\to1$. On peut donc passer à la limite sous l'intégrale :
$$
u(0)=\frac1{2\pi}\int_0^{2\pi}\cos^2\theta\,d\theta=\frac12 .
$$
(Contrôle avec la formule : $u(0)=\frac12$.)

*Encadrement.* Sur le cercle, $0\le u\le1$. Le maximum de $u$ sur le compact $\bar D$ vaut donc au moins $u(1)=1$ ; s'il était atteint en un point $z_0\in D$, ce serait un maximum local de $u$ sur l'ouvert connexe $D$, et $u$ serait constante sur $D$ (Corollaire IV.2.5), donc sur $\bar D$ par continuité — impossible car $u(1)=1\neq0=u(i)$. Donc le maximum est atteint seulement sur le cercle, où $u\le1$ : on a $u\le1$ sur $\bar D$ et $u(z)\neq1$ pour $z\in D$, c'est-à-dire $u<1$ sur $D$. Le même argument appliqué à $-u$ (minimum) donne $u>0$ sur $D$.

(Contrôle avec la formule : pour $|z|<1$, $|x^2-y^2|\le x^2+y^2<1$, donc $0<\frac12+\frac{x^2-y^2}2<1$.)

**3.** Non. Si une telle $v$ existait, le raisonnement de la question 2 (moyenne sur $C(0,r)$ puis $r\to1$ par continuité uniforme sur $\bar D$) donnerait
$$
v(0)=\frac1{2\pi}\int_0^{2\pi}|\sin\theta|\,d\theta=\frac{1}{2\pi}\cdot2\int_0^\pi\sin\theta\,d\theta=\frac{4}{2\pi}=\frac2\pi\neq\frac12 .
$$
Donc aucune fonction harmonique sur $D$, continue sur $\bar D$, de valeurs $|\sin\theta|$ au bord, ne vaut $\frac12$ en $0$ : la valeur au centre est **imposée** par la donnée au bord.

## Pièges et variantes

* Appliquer la propriété de la moyenne directement sur le cercle $C(0,1)$ : le Corollaire IV.2.5 demande $\bar D(0,r)\subset\Omega=D$, donc $r<1$. Le passage à la limite $r\to1$ utilise la **continuité uniforme** de $u$ sur le compact $\bar D$.
* Pour l'inégalité **stricte** $u<1$, il ne suffit pas de dire « le maximum est au bord » : il faut le principe du maximum « fort » (un maximum intérieur force la constance) et constater que $u$ n'est pas constante.
* Ne pas confondre le principe du maximum pour $|f|$, $f$ holomorphe, et celui pour $u$ harmonique réelle (maximum de $u$ lui-même, et donc aussi minimum en passant à $-u$).
* Variante : donnée $\sin^3\theta=\frac{3\sin\theta-\sin(3\theta)}4$ ; on trouve $u=\frac{3\,\Im(z)-\Im(z^3)}{4}=\frac{3y-3x^2y+y^3}{4}$, et $u(0)=0$, moyenne de $\sin^3$. Plus généralement une donnée $a_0+\sum_{k=1}^N(a_k\cos k\theta+b_k\sin k\theta)$ a pour solution $a_0+\sum_{k=1}^N\Re\big((a_k-ib_k)z^k\big)$.
