---
id: ch01-trois-cercles-hadamard
type: theorem
chapter: 1
title: Théorème des trois cercles d'Hadamard — $\log M(\rho)$ est une fonction convexe de $\log\rho$
ref: Exercice I.12.5
page: 31
importance: 2
depends: [ch01-maximum-sur-le-bord, ch01-stabilite-operations, ch01-zeros-isoles]
tags: [hadamard, trois-cercles, principe-maximum, couronne, convexite]
---
## Intuition

> 💡 On regarde une fonction holomorphe $f$ sur une couronne et la taille maximale $M(\rho)$ de $|f|$ sur le cercle de rayon $\rho$. Le principe du maximum dit que $|f|$ ne peut pas « bomber » à l'intérieur : $M$ est contrôlé par ses valeurs sur les deux cercles du bord. Le théorème d'Hadamard précise **comment** : en coordonnées logarithmiques ($s=\log\rho$, $\log M$), la courbe est **sous sa corde** — elle est convexe.

L'astuce est de corriger $f$ par une puissance de $z$ : $z^pf(z)^q$ reste holomorphe sur la couronne (car $0$ n'y est pas, même si $p<0$), on lui applique le principe du maximum, puis on règle l'exposant pour équilibrer les deux cercles du bord.

Notations. Pour $0<r<R$, la **couronne fermée** est $\mathcal C:=\{z\in\C : r\le|z|\le R\}$ ; $M(\rho):=\sup_{|z|=\rho}|f(z)|$ est le sup de $|f|$ sur le cercle $C(0,\rho)$ (il est atteint, $f$ étant continue sur ce compact). On utilise [[ch01-maximum-sur-le-bord]] : sur un ouvert connexe borné, le sup du module est atteint au bord.

## Énoncé

**Théorème (poly, Exercice I.12.5 — Théorème des trois cercles d'Hadamard, p. 31).** Soient $0<r<R$, $\Omega\subset\C$ un ouvert connexe contenant la couronne $\mathcal C:=\{z\in\C : r\le|z|\le R\}$ et $f\in\Hol(\Omega)$. Pour tout $\rho\in[r,R]$, on pose $M(\rho):=\sup_{|z|=\rho}|f(z)|$. Alors :

1. pour tout $\rho\in[r,R]$ et tous $p,q\in\Z$ avec $q>0$, on a $\rho^pM(\rho)^q\le\max\{r^pM(r)^q,\,R^pM(R)^q\}$ ;
2. pour tout $\rho\in[r,R]$ et tout $\alpha\in\R$, on a $\rho^\alpha M(\rho)\le\max\{r^\alpha M(r),\,R^\alpha M(R)\}$ ;
3. pour tout $t\in[0,1]$, on a $M(r^tR^{1-t})\le M(r)^t\,M(R)^{1-t}$.

Reformulation de 3 (lorsque $f\not\equiv0$) : la fonction $\varphi(s):=\log M(e^s)$ vérifie, pour $s=t\log r+(1-t)\log R$, l'inégalité $\varphi(s)\le t\,\varphi(\log r)+(1-t)\,\varphi(\log R)$ ; comme cela vaut pour toute sous-couronne $r\le r'<R'\le R$, $\varphi$ est **convexe** sur $[\log r,\log R]$.

## Hypothèses

### H1 — $f$ holomorphe sur un ouvert contenant la couronne **fermée**

**Rôle.** La fonction auxiliaire $z^pf(z)^q$ doit être continue sur la couronne fermée et holomorphe sur la couronne ouverte pour appliquer [[ch01-maximum-sur-le-bord]].

**Si on la retire.** Avec $r=1$, $R=2$ et $f(z)=\dfrac{1}{z-3/2}$ (pôle en $3/2$, **dans** la couronne) : $M(1)=\dfrac{1}{3/2-1}=2$ (atteint en $z=1$) et $M(2)=\dfrac{1}{2-3/2}=2$ (atteint en $z=2$), mais $|f|$ n'est pas bornée sur $C(0,3/2)$ : $M(3/2)=+\infty$ et le point 1 (avec $p=0$, $q=1$) est faux. En revanche, une singularité dans le **trou** $\{|z|<r\}$ ne gêne pas : $f(z)=1/z$ convient parfaitement (et donne $M(\rho)=1/\rho$, $\log M$ affine en $\log\rho$).

### H2 — (point 1) $q$ entier **strictement positif**, $p\in\Z$

**Rôle.** Avec $p\in\Z$ et $q\in\N^*$, $z\mapsto z^pf(z)^q$ est une fonction holomorphe bien définie sur $\Omega\setminus\{0\}\supset\mathcal C$ (produits et inverse de $z$, [[ch01-stabilite-operations]]), sans choix de détermination, et $|z^pf(z)^q|=|z|^p|f(z)|^q$.

**Si on la retire.** Avec $q=-1$, $p=0$, l'inégalité deviendrait $M(\rho)\ge\min\{M(r),M(R)\}$ (un « principe du minimum »), qui est fausse : $f(z)=z+\dfrac1z$, $r=\tfrac12$, $R=2$. On a $M(\rho)=\rho+\dfrac1\rho$ (car $|\rho e^{i\theta}+\rho^{-1}e^{-i\theta}|\le\rho+\rho^{-1}$ avec égalité en $\theta=0$), donc $M(\tfrac12)=M(2)=\tfrac52$ mais $M(1)=2<\tfrac52$. (Ici $f^{-1}$ a des pôles en $\pm i$, sur le cercle $|z|=1$.) Pour $q$ non entier, $f^q$ n'est en général même pas définie.

### H3 — $\Omega$ connexe

**Rôle.** Utilisée seulement dans le cas dégénéré $M(r)=0$ ou $M(R)=0$ du point 3, pour en déduire $f\equiv0$ par [[ch01-zeros-isoles]].

**Si on la retire.** La conclusion reste vraie : la couronne $\mathcal C$ est connexe, donc contenue dans une seule composante connexe $\Omega_0$ de $\Omega$, et on applique le résultat à $f_{|\Omega_0}$. C'est une hypothèse de confort.

## Idée de la preuve

1 : principe du maximum sur la couronne ouverte pour $h=z^pf^q$. 2 : racine $q$-ième, puis densité de $\Q$ dans $\R$. 3 : choisir $\alpha$ qui égalise $r^\alpha M(r)$ et $R^\alpha M(R)$, puis calculer.

## Preuve

**Point 1.** Soient $p\in\Z$, $q\in\N^*$. Notons $A:=\{z: r<|z|<R\}$ la couronne ouverte : elle est ouverte, bornée, connexe (connexe par arcs : on joint deux points par un arc de cercle puis un segment radial), d'adhérence $\bar A=\mathcal C$ et de bord $\partial A=C(0,r)\cup C(0,R)$. Comme $0\notin\mathcal C$, la fonction $h(z):=z^pf(z)^q$ est holomorphe sur l'ouvert $\Omega\setminus\{0\}$, qui contient $\mathcal C$ ([[ch01-stabilite-operations]]) ; elle est donc continue sur $\bar A$ et holomorphe sur $A$. Par [[ch01-maximum-sur-le-bord]] (poly, Corollaire I.12.2, p. 31),
$$
\sup_{\mathcal C}|h|=\sup_{C(0,r)\cup C(0,R)}|h| .
$$
Pour $|z|=\rho$, on a $|h(z)|=\rho^p|f(z)|^q$ ; comme $x\mapsto x^q$ est croissante sur $\R_+$, $\sup_{|z|=\rho}|h(z)|=\rho^pM(\rho)^q$. Donc, pour tout $\rho\in[r,R]$,
$$
\rho^pM(\rho)^q\le\sup_{\mathcal C}|h|=\max\{r^pM(r)^q,\,R^pM(R)^q\}.
$$

**Point 2.** Soit d'abord $\alpha=p/q\in\Q$ avec $p\in\Z$, $q\in\N^*$. La fonction $x\mapsto x^{1/q}$ est croissante sur $\R_+$, donc $(\max\{a,b\})^{1/q}=\max\{a^{1/q},b^{1/q}\}$ pour $a,b\ge0$. En prenant la racine $q$-ième du point 1 :
$$
\rho^{p/q}M(\rho)\le\max\{r^{p/q}M(r),\,R^{p/q}M(R)\}.
$$
Soit maintenant $\alpha\in\R$ et $(\alpha_n)$ une suite de rationnels tendant vers $\alpha$. Pour $x>0$, $\beta\mapsto x^\beta=e^{\beta\log x}$ est continue, et $\max$ est continue sur $\R^2$ ; en passant à la limite dans l'inégalité écrite pour $\alpha_n$, on obtient $\rho^\alpha M(\rho)\le\max\{r^\alpha M(r),\,R^\alpha M(R)\}$.

**Point 3.** Soit $t\in[0,1]$ et $\rho:=r^tR^{1-t}\in[r,R]$. Si $t=0$ ou $t=1$, l'inégalité s'écrit $M(R)\le M(R)$ ou $M(r)\le M(r)$ (avec la convention $x^0=1$) : rien à montrer. Soit donc $t\in]0,1[$.

* Si $M(r)=0$, $f$ est nulle sur le cercle $C(0,r)$, donc ses zéros ne sont pas isolés ; $\Omega$ étant connexe, [[ch01-zeros-isoles]] donne $f\equiv0$, donc $M(\rho)=0$ et l'inégalité $0\le0$ est vraie. Idem si $M(R)=0$.
* Sinon $M(r)>0$ et $M(R)>0$. On choisit $\alpha$ tel que $r^\alpha M(r)=R^\alpha M(R)$, c'est-à-dire
$$
\alpha:=\frac{\log M(r)-\log M(R)}{\log R-\log r}.
$$
Le point 2 donne $\rho^\alpha M(\rho)\le r^\alpha M(r)$, soit $\log M(\rho)\le\log M(r)+\alpha(\log r-\log\rho)$. Or $\log r-\log\rho=\log r-t\log r-(1-t)\log R=-(1-t)(\log R-\log r)$, donc
$$
\log M(\rho)\le\log M(r)-(1-t)\big(\log M(r)-\log M(R)\big)=t\log M(r)+(1-t)\log M(R),
$$
ce qui est $M(r^tR^{1-t})\le M(r)^tM(R)^{1-t}$. $\square$

## Preuve à trous

**1.** La fonction auxiliaire <trou indice="corriger f par une puissance de z">$h(z)=z^pf(z)^q$, holomorphe sur $\Omega\setminus\{0\}\supset\mathcal C$ car $0\notin\mathcal C$</trou> est continue sur la couronne fermée et holomorphe sur la couronne ouverte $A$, connexe et bornée. Le principe du maximum donne <trou>$\sup_{\mathcal C}|h|=\max\{\sup_{C(0,r)}|h|,\sup_{C(0,R)}|h|\}=\max\{r^pM(r)^q,R^pM(R)^q\}$</trou>, d'où $\rho^pM(\rho)^q\le\max\{r^pM(r)^q,R^pM(R)^q\}$.

**2.** Racine $q$-ième (croissante) : l'inégalité vaut pour $\alpha=p/q\in\Q$ ; puis <trou indice="Q est dense dans R">on passe à la limite $\alpha_n\to\alpha$ grâce à la continuité de $\beta\mapsto x^\beta$ et de $\max$</trou>.

**3.** Si $M(r)M(R)=0$, $f\equiv0$ par les zéros isolés. Sinon on choisit <trou indice="équilibrer les deux cercles du bord">$\alpha=\dfrac{\log M(r)-\log M(R)}{\log R-\log r}$, de sorte que $r^\alpha M(r)=R^\alpha M(R)$</trou> ; alors pour $\rho=r^tR^{1-t}$, $\log M(\rho)\le\log M(r)+\alpha(\log r-\log\rho)=t\log M(r)+(1-t)\log M(R)$. $\square$

## Exemples

* **Cas d'égalité.** $f(z)=z^k$, $k\in\Z$ ($k<0$ est permis : $0$ n'est pas dans la couronne). Alors $M(\rho)=\rho^k$ et $M(r^tR^{1-t})=r^{kt}R^{k(1-t)}=M(r)^tM(R)^{1-t}$ : égalité. En coordonnées logarithmiques, $\varphi(s)=ks$ est affine.
* **$f(z)=z+1/z$.** On a vu $M(\rho)=\rho+\rho^{-1}$, donc $\varphi(s)=\log M(e^s)=\log(2\cosh s)$, convexe (dérivée $\tanh s$ croissante). Avec $r=\tfrac12$, $R=2$, $t=\tfrac12$ : $\rho=1$, $M(1)=2\le\sqrt{5/2}\cdot\sqrt{5/2}=\tfrac52$. ✓
* **$f(z)=e^z$.** $M(\rho)=\sup_\theta e^{\rho\cos\theta}=e^\rho$, donc $\varphi(s)=e^s$, convexe. Pour $r=1$, $R=e^2$, $t=\tfrac12$ : $\rho=e$, et $M(e)=e^{e}\approx15{,}2\le M(1)^{1/2}M(e^2)^{1/2}=e^{(1+e^2)/2}\approx e^{4{,}19}\approx66{,}3$. ✓

## Pièges

* > ⚠️ $\log M$ est convexe en $\log\rho$, **pas** en $\rho$ : pour $f(z)=z$, $\log M(\rho)=\log\rho$ est **concave** en $\rho$.
* $M(\rho)$ est un sup sur le **cercle** $|z|=\rho$, pas sur le disque : on ne suppose rien à l'intérieur du trou $|z|<r$ ($f$ peut y avoir des singularités, ou $\Omega$ ne pas contenir $0$).
* L'exposant $p$ peut être **négatif** : c'est légitime uniquement parce que $0\notin\mathcal C$. En revanche $q$ doit être un entier $\ge1$ (voir H2).
* Le passage de $\Q$ à $\R$ (point 2) n'est pas automatique : il faut invoquer la continuité en $\alpha$.
* Dans le point 3, ne pas oublier les cas dégénérés $M(r)=0$ ou $M(R)=0$ (où $\log$ n'est pas défini) et $t\in\{0,1\}$.
