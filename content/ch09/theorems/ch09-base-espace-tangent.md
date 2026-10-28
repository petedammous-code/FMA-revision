---
id: ch09-base-espace-tangent
type: corollary
chapter: 9
title: Base $(x_{u_1}(u),\dots,x_{u_m}(u))$ de l'espace tangent ; formule (IX.7.1)
ref: Corollaire IX.7.11
page: 161
importance: 2
depends: [ch09-espace-tangent-image-dx, ch05-differentielles-partielles, ch09-sous-variete-def]
tags: [espace-tangent, base, derivees-partielles, parametrage-local]
---
## Intuition

> 💡 Sur une carte de géographe $U\subset\R^m$, on peut se déplacer dans $m$ directions de base : « vers l'est » ($e_1$), « vers le nord » ($e_2$)... Le paramétrage $x$ transporte ces déplacements sur la surface : le vecteur $x_{u_i}(u)$ est la vitesse en $x(u)$ de la courbe obtenue en ne faisant varier **que** la $i$-ème coordonnée. Sur un globe, $x_\theta$ est la vitesse le long d'un parallèle, $x_\varphi$ le long d'un méridien. Ces $m$ vecteurs forment une base du plan tangent.

Rappels : un **paramétrage local** $x : U\to S$ est $C^k$, homéomorphisme sur un ouvert de $S$, et **immersion** ($dx_u$ injective en tout $u\in U$) ([[ch09-sous-variete-def]]) ; l'espace tangent $T_{x(u)}S$ est égal à $dx_u(\R^m)$ ([[ch09-espace-tangent-image-dx]]). La **dérivée partielle** $\frac{\partial x}{\partial u_i}(u)$ est $dx_u(e_i)$ ([[ch05-differentielles-partielles]]).

## Énoncé

**Corollaire (poly, Corollaire IX.7.11, p. 161).** Soient $S$ une sous-variété de dimension $m$ de $\R^N$, $p$ un point de $S$ et $x : U\to S$ un paramétrage local de $S$ en $p$. Notons $u=(u_1,\dots,u_m)$ la variable d'une fonction définie sur $U\subset\R^m$. Soit $(e_1,\dots,e_m)$ la base canonique de $\R^m$. Posons
$$
\text{(IX.7.1)}\qquad x_{u_i}(u)=dx_u(e_i)=\frac{d}{dt}_{|t=0}x(u+te_i)=\frac{\partial x}{\partial u_i}(u).
$$
Alors pour tout $u\in U$, $(x_{u_1}(u),\dots,x_{u_m}(u))$ est une base de $T_{x(u)}S$.

## Hypothèses

### H1 — $x$ est un paramétrage local (en particulier une immersion en tout point de $U$)

**Rôle.** L'injectivité de $dx_u$ en **chaque** $u\in U$ (et pas seulement en $q=x^{-1}(p)$) donne la liberté de la famille ; le fait que $x$ soit un paramétrage local en $x(u)$ permet d'appliquer la Proposition IX.7.9 en ce point.

**Si on la retire.** Pour $S=\R\times\{0\}\subset\R^2$ et $x(t)=(t^3,0)$ (homéomorphisme $C^\infty$ de $\R$ sur $S$, pas une immersion en $0$), on a $x_t(0)=(3t^2,0)_{|t=0}=(0,0)$ : la « famille » $(x_t(0))$ n'est pas libre, et n'est pas une base de $T_0S=\R\times\{0\}$. Pour la sphère en coordonnées sphériques étendues aux pôles ($\varphi=\pm\frac\pi2$), $x_\theta=(-\sin\theta\cos\varphi,\cos\theta\cos\varphi,0)$ s'annule : ce n'est plus une base.

### H2 — base canonique $(e_1,\dots,e_m)$

**Rôle.** Elle fait apparaître les dérivées partielles, commodes pour le calcul.

**Si on la retire.** Hypothèse de confort : pour **toute** base $(w_1,\dots,w_m)$ de $\R^m$, $(dx_u(w_1),\dots,dx_u(w_m))$ est une base de $T_{x(u)}S$, par le même argument (image d'une base par un isomorphisme $\R^m\to T_{x(u)}S$).

## Idée de la preuve

Pour $u\in U$, $x$ est un paramétrage local en $x(u)$, donc $dx_u$ est une bijection linéaire de $\R^m$ sur $T_{x(u)}S$ (Proposition IX.7.9 + injectivité). L'image de la base canonique par un isomorphisme est une base. Les trois écritures de $x_{u_i}$ sont la définition de la dérivée partielle.

## Preuve

*Les trois expressions de (IX.7.1) coïncident.* La courbe $t\mapsto u+te_i$ est définie pour $|t|$ petit ($U$ ouvert), dérivable de dérivée $e_i$ ; par la règle de la chaîne, $\frac{d}{dt}_{|t=0}x(u+te_i)=dx_u(e_i)$. Par définition, c'est la dérivée partielle $\frac{\partial x}{\partial u_i}(u)$ ([[ch05-differentielles-partielles]]).

*Base.* Fixons $u\in U$ et posons $p'=x(u)$. L'application $x : U\to S$ est aussi un paramétrage local de $S$ **en $p'$** : les conditions 1 à 3 de la Définition IX.2.1 ([[ch09-sous-variete-def]]) ne font pas référence au point $p$, sauf l'appartenance $p'\in x(U)$, qui est vraie. La Proposition IX.7.9 ([[ch09-espace-tangent-image-dx]]), appliquée en $p'$ avec $x^{-1}(p')=u$, donne
$$
T_{x(u)}S=dx_u(\R^m).
$$
Ainsi $dx_u$ est une application linéaire de $\R^m$ **sur** $T_{x(u)}S$, injective par la condition d'immersion : c'est un isomorphisme linéaire $\R^m\to T_{x(u)}S$. L'image d'une base par un isomorphisme est une base ; donc $(dx_u(e_1),\dots,dx_u(e_m))=(x_{u_1}(u),\dots,x_{u_m}(u))$ est une base de $T_{x(u)}S$. $\square$

## Preuve à trous

Pour $u\in U$, $x$ est encore un paramétrage local de $S$ en $x(u)$, donc par la Proposition IX.7.9, <trou indice="appliquer la proposition IX.7.9 au point $x(u)$">$T_{x(u)}S=dx_u(\R^m)$</trou>. De plus <trou indice="condition 3 de la définition d'un paramétrage">$dx_u$ est injective (immersion)</trou>, donc $dx_u : \R^m\to T_{x(u)}S$ est <trou>un isomorphisme linéaire, qui envoie la base canonique $(e_i)$ sur une base</trou>. Enfin $dx_u(e_i)=\frac{d}{dt}_{|t=0}x(u+te_i)=\frac{\partial x}{\partial u_i}(u)$ par <trou indice="dériver une composée avec $t\mapsto u+te_i$">la règle de la chaîne appliquée à $t\mapsto x(u+te_i)$</trou>. $\square$

## Exemples

* **Coordonnées polaires.** $U=\,]0,+\infty[\times]-\pi,\pi[$, $x(r,\theta)=(r\cos\theta,r\sin\theta)$ paramètre l'ouvert $S=\R^2\setminus(]-\infty,0]\times\{0\})$. On a $x_r=(\cos\theta,\sin\theta)$ et $x_\theta=(-r\sin\theta,r\cos\theta)$, de déterminant $r>0$ : c'est une base de $T_pS=\R^2$ (comme il se doit pour un ouvert).
* **Le tore.** Pour $0<r<a$, $x(\theta,\varphi)=\big((a+r\cos\varphi)\cos\theta,\ (a+r\cos\varphi)\sin\theta,\ r\sin\varphi\big)$ paramètre le tore $\{(\sqrt{x^2+y^2}-a)^2+z^2=r^2\}$ ([[ch09-ex-tore]]), par exemple sur $]-\pi,\pi[^2$. On calcule
$$
x_\theta=\big(-(a+r\cos\varphi)\sin\theta,\ (a+r\cos\varphi)\cos\theta,\ 0\big),\qquad x_\varphi=\big(-r\sin\varphi\cos\theta,\ -r\sin\varphi\sin\theta,\ r\cos\varphi\big).
$$
On a $\norm{x_\theta}=a+r\cos\varphi\ge a-r>0$, $\norm{x_\varphi}=r>0$ et $\langle x_\theta,x_\varphi\rangle=(a+r\cos\varphi)\,r\sin\varphi\,(\sin\theta\cos\theta-\cos\theta\sin\theta)=0$ : deux vecteurs orthogonaux non nuls, donc libres, base de $T_{x(\theta,\varphi)}S$, où $S$ désigne le tore. Vérification avec l'équation $f=(\rho-a)^2+z^2$, $\rho=\sqrt{x^2+y^2}$ : en $x(\theta,\varphi)$, $\rho-a=r\cos\varphi$ et $\nabla f=2r(\cos\varphi\cos\theta,\ \cos\varphi\sin\theta,\ \sin\varphi)$ ; on trouve $\langle\nabla f,x_\theta\rangle=0$ et $\langle\nabla f,x_\varphi\rangle=2r\cos\varphi(-r\sin\varphi)+2r\sin\varphi\cdot r\cos\varphi=0$, conformément à $T_pS=\ker df_p$ ([[ch09-espace-tangent-graphe-equation]]).
* **Graphe.** Pour $x(u)=(u,f(u))$, $u\in U\subset\R^m$, on a $x_{u_i}(u)=\big(e_i,\frac{\partial f}{\partial u_i}(u)\big)$ : les $m$ premières coordonnées forment la base canonique, d'où la liberté sans calcul.

## Pièges

* > ⚠️ $x_{u_i}(u)$ est un vecteur de $\R^N$ (l'espace ambiant), pas de $\R^m$ : c'est l'image de $e_i\in\R^m$.
* La base dépend du paramétrage : un autre paramétrage donne une autre base du **même** espace $T_{x(u)}S$ (reliée par la matrice jacobienne du changement de paramétrage).
* Ce n'est en général **pas** une base orthonormée (ni même orthogonale) : pour le paraboloïde $x(u,v)=(u,v,u^2+v^2)$, $\langle x_u,x_v\rangle=4uv$.
* Aux points où $x$ n'est pas une immersion (pôles en coordonnées sphériques), la famille dégénère : ce n'est pas que $T_pS$ y est plus petit, c'est que $x$ n'est pas un paramétrage local en ces points.
