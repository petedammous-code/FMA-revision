---
id: ex-ch04-points-arret-lignes-courant
type: exercise
chapters: [4, 1, 2]
title: Lignes de courant au voisinage d'un point d'arrêt
source: Inventé
difficulty: 3
time: 30
tools: [ch01-def-multiplicite-zero, ch02-logarithme-existence, ch01-inversion-locale-holomorphe, ch04-holomorphe-conserve-angles, ch04-lignes-niveau-orthogonales]
---
## Énoncé

Soit $\Omega$ un ouvert de $\C$ et $G\in\Hol(\Omega)$, vue comme le **potentiel complexe** d'un écoulement plan : la vitesse au point $z$ est $\overline{G'(z)}$, les **lignes de courant** sont les lignes de niveau de $\Im(G)$, et un **point d'arrêt** est un point $z_0$ où la vitesse s'annule, c'est-à-dire $G'(z_0)=0$.

Soit $z_0\in\Omega$ tel que $G'(z_0)=0$ et $G''(z_0)\neq0$. On note $c=\Im\big(G(z_0)\big)$ et $L=\{z\in\Omega : \Im(G(z))=c\}$ la ligne de courant passant par $z_0$.

1. Montrer qu'il existe un ouvert $U\ni z_0$, un réel $r>0$ et un biholomorphisme $\psi:U\to D(0,r)$ tels que $\psi(z_0)=0$ et
$$
G(z)=G(z_0)+\psi(z)^2\qquad(z\in U).
$$
2. En déduire que $L\cap U$ est la réunion de deux arcs réguliers qui se coupent en $z_0$ **à angle droit**, et exprimer les directions de leurs tangentes en $z_0$ à l'aide de $\arg G''(z_0)$.
3. Exemple : $G(z)=z+\dfrac1z$ sur $\C^*$ (écoulement uniforme autour du disque unité). Trouver les points d'arrêt, la ligne de courant qui passe par eux, et vérifier le résultat de la question 2.
4. On suppose maintenant $G'(z_0)=\dots=G^{(m-1)}(z_0)=0$ et $G^{(m)}(z_0)\neq0$ pour un entier $m\ge2$. Décrire $L$ au voisinage de $z_0$. Vérifier sur $G(z)=z^3$ en $z_0=0$.

## Indices

### Indice 1
Écrire $G(z)-G(z_0)$ en faisant apparaître la multiplicité du zéro $z_0$, puis chercher une « racine carrée » holomorphe du facteur qui ne s'annule pas.

### Indice 2
$G(z)-G(z_0)=(z-z_0)^2h(z)$ avec $h$ holomorphe et $h(z_0)=G''(z_0)/2\neq0$. Sur un petit disque où $h$ ne s'annule pas (disque = simplement connexe), $h$ a un logarithme, donc une racine carrée $k$. Poser $\psi(z)=(z-z_0)k(z)$ : $\psi'(z_0)=k(z_0)\neq0$, et le théorème d'inversion locale holomorphe s'applique.

### Indice 3
Dans la coordonnée $w=\psi(z)=s+it$, la ligne $L$ devient $\{\Im(w^2)=0\}=\{2st=0\}$ : la réunion des deux axes. Que fait $\psi^{-1}$ aux angles ?

## Corrigé

**1.** $G-G(z_0)$ est holomorphe sur $\Omega$, s'annule en $z_0$ ainsi que sa dérivée, et $G''(z_0)\neq0$ : $z_0$ est un zéro de multiplicité exactement $2$ de $G-G(z_0)$ ([[ch01-def-multiplicite-zero]], poly, Définition I.11.2, p. 27, appliquée sur la composante connexe de $\Omega$ contenant $z_0$). Il existe donc $\delta>0$ et $h\in\Hol(D(z_0,\delta))$ avec
$$
G(z)-G(z_0)=(z-z_0)^2h(z)\quad\text{sur } D(z_0,\delta),\qquad h(z_0)=\frac{G''(z_0)}{2}\neq0 .
$$
Par continuité de $h$, quitte à diminuer $\delta$, $h$ ne s'annule pas sur $D(z_0,\delta)$. Ce disque est simplement connexe (étoilé) et $h$ y est holomorphe sans zéro : $h$ admet un logarithme holomorphe $\ell$, $e^{\ell}=h$ ([[ch02-logarithme-existence]], poly, Proposition II.9.3, p. 56). On pose $k=e^{\ell/2}$, holomorphe, avec $k^2=h$, et
$$
\psi_0(z)=(z-z_0)\,k(z)\qquad\text{sur }D(z_0,\delta).
$$
Alors $\psi_0^2=G-G(z_0)$, $\psi_0(z_0)=0$ et $\psi_0'(z_0)=k(z_0)\neq0$. Par l'inversion locale holomorphe ([[ch01-inversion-locale-holomorphe]], poly, Proposition I.4.4, p. 14), il existe un ouvert $U_1\ni z_0$ tel que $\psi_0(U_1)$ soit ouvert et $\psi_0:U_1\to\psi_0(U_1)$ biholomorphe. Comme $0\in\psi_0(U_1)$ ouvert, on choisit $r>0$ avec $D(0,r)\subset\psi_0(U_1)$ et on pose $U=U_1\cap\psi_0^{-1}(D(0,r))$, $\psi=\psi_0|_U$ : c'est un biholomorphisme de $U$ sur $D(0,r)$ qui convient.

**2.** Pour $z\in U$, notons $w=\psi(z)=s+it$. Alors $\Im(G(z))-c=\Im(\psi(z)^2)=\Im\big((s+it)^2\big)=2st$. Donc
$$
L\cap U=\psi^{-1}\big(\{2st=0\}\cap D(0,r)\big)=\psi^{-1}(]-r,r[)\ \cup\ \psi^{-1}(i\,]-r,r[).
$$
Ce sont les images des arcs $\sigma_1(\tau)=\tau$ et $\sigma_2(\tau)=i\tau$ ($\tau\in]-r,r[$) par $\psi^{-1}$, holomorphe : les arcs $\gamma_j=\psi^{-1}\circ\sigma_j$ sont $C^\infty$, passent par $z_0$ en $\tau=0$, et
$$
\gamma_1'(0)=(\psi^{-1})'(0)=\frac{1}{\psi'(z_0)}=\frac1{k(z_0)},\qquad \gamma_2'(0)=\frac{i}{k(z_0)},
$$
tous deux non nuls : les arcs sont réguliers. Comme $(\psi^{-1})'(0)\neq0$, $\psi^{-1}$ conserve les angles en $0$ ([[ch04-holomorphe-conserve-angles]], poly, section IV.1, p. 75) ; les axes se coupent à angle droit en $0$, donc $\gamma_1,\gamma_2$ se coupent **à angle droit** en $z_0$ (directement : $\gamma_2'(0)/\gamma_1'(0)=i$).

*Directions.* $k(z_0)^2=G''(z_0)/2$, donc $\arg k(z_0)\equiv\frac12\arg G''(z_0)\pmod\pi$ et les tangentes en $z_0$ ont pour angles polaires
$$
\theta\equiv-\tfrac12\arg G''(z_0)\pmod{\pi/2}.
$$
Contrôle : au second ordre, $\Im\big(G(z)-G(z_0)\big)\approx\Im\big(\tfrac{G''(z_0)}2(z-z_0)^2\big)$, nul pour $z-z_0=\rho e^{i\theta}$ exactement quand $\sin(\arg G''(z_0)+2\theta)=0$, ce qui donne les mêmes $\theta$.

**3.** $G'(z)=1-\dfrac1{z^2}$ s'annule en $z=\pm1$ ; $G''(z)=\dfrac{2}{z^3}$, donc $G''(1)=2\neq0$ et $G''(-1)=-2\neq0$ : deux points d'arrêt simples. On a $G(\pm1)=\pm2$, donc $c=0$. Pour $z=x+iy\neq0$,
$$
\Im(G(z))=y-\frac{y}{x^2+y^2}=y\Big(1-\frac1{|z|^2}\Big),
$$
donc $L=\{y=0\}\cup C(0,1)$ privé de $0$ : l'axe réel et le cercle unité, qui se coupent en $\pm1$. En $z_0=1$, la question 2 prédit des tangentes d'angles $\theta\equiv-\frac12\arg 2=0\pmod{\pi/2}$ : horizontale (l'axe réel) et verticale (la tangente au cercle unité en $1$) ; en $z_0=-1$, $\theta\equiv-\frac\pi2\equiv0\pmod{\pi/2}$ : même conclusion. C'est bien ce qu'on observe : le cercle coupe l'axe réel orthogonalement en $\pm1$. Physiquement, le fluide arrivant le long de l'axe réel se partage en $-1$ entre le haut et le bas du cylindre, à angle droit.

**4.** Même preuve avec une racine $m$-ième : $G(z)-G(z_0)=(z-z_0)^mh(z)$, $h(z_0)=G^{(m)}(z_0)/m!\neq0$, $h=k^m$ sur un petit disque, $\psi(z)=(z-z_0)k(z)$ biholomorphe de $U$ sur $D(0,r)$ et $G=G(z_0)+\psi^m$. Pour $w=\rho e^{i\varphi}\neq0$, $\Im(w^m)=\rho^m\sin(m\varphi)=0$ si et seulement si $\varphi\in\frac{\pi}{m}\Z$ : $\{\Im(w^m)=0\}$ est la réunion de $m$ droites passant par $0$ (soit $2m$ demi-droites d'angles consécutifs $\pi/m$). Par conservation des angles ($\psi^{-1}$ a une dérivée non nulle en $0$), $L\cap U$ est la réunion de $m$ arcs réguliers passant par $z_0$, dont les tangentes forment $2m$ demi-droites d'angles consécutifs $\pi/m$.

Pour $G(z)=z^3$ et $z_0=0$ ($m=3$, $\psi(z)=z$) : $\Im(z^3)=3x^2y-y^3=y(3x^2-y^2)$, nul si et seulement si $y=0$ ou $y=\pm\sqrt3\,x$ : trois droites d'angles polaires $0,\pi/3,2\pi/3$. C'est l'écoulement dans un coin d'angle $\pi/3$ (poly, section IV.4.1, p. 83, avec $1/(2\alpha)=3$).

## Pièges et variantes

* Croire que la conservation des angles s'applique à $G$ en $z_0$ : c'est faux, $G'(z_0)=0$. L'astuce est de l'appliquer à $\psi^{-1}$, qui, elle, a une dérivée non nulle. En un point d'arrêt d'ordre $m-1$, $G$ **multiplie les angles par $m$** (les deux demi-droites $\varphi=0$ et $\varphi=\pi/m$ sont envoyées par $w\mapsto w^m$ sur $\R_+$ et $\R_-$).
* Oublier de justifier l'existence de la racine carrée $k$ : il faut que $h$ ne s'annule pas **et** un domaine simplement connexe (un disque). Sur une couronne, une fonction sans zéro n'a pas toujours de racine carrée ($z\mapsto z$).
* Hors des points d'arrêt ($G'(z_0)\neq0$), le même raisonnement avec $m=1$ montre que $L$ est, près de $z_0$, un **seul** arc régulier, orthogonal à l'équipotentielle $\{\Re(G)=\Re(G(z_0))\}$ ([[ch04-lignes-niveau-orthogonales]]).
* Variante : écoulement avec circulation, $G(z)=z+\frac1z-\frac{i\kappa}{2\pi}\log z$ ($\kappa>0$ ; $G$ n'est définie que localement, mais $\Im(G)=y\big(1-\frac1{|z|^2}\big)-\frac{\kappa}{2\pi}\ln|z|$ est bien définie sur $\C^*$, et $G'(z)=1-\frac1{z^2}-\frac{i\kappa}{2\pi z}$ aussi). Les points d'arrêt sont les racines de $z^2-\frac{i\kappa}{2\pi}z-1=0$. Pour $0<\kappa<4\pi$, ce sont deux points du cercle unité (produit des racines $-1$, et $|z|^2=1$ par calcul direct), symétriques par rapport à l'axe imaginaire, d'ordonnée $\frac{\kappa}{4\pi}$. Pour $\kappa=4\pi$, ils fusionnent en $z_0=i$ : $G'(i)=G''(i)=0$ et $G'''(i)=-2\neq0$, donc $m=3$ et **trois** arcs de la ligne de courant $\{\Im(G)=0\}$ (dont le cercle unité) se croisent en $i$, avec six demi-tangentes d'angles consécutifs $\pi/3$.
