---
id: ch09-notation-tps
type: definition
chapter: 9
title: Notation $T_pS$ ; espace tangent affine
ref: Définition IX.7.10
page: 161
importance: 2
depends: [ch09-espace-tangent-image-dx]
tags: [espace-tangent, notation, plan-tangent, affine]
---
## Intuition

> 💡 Il y a deux objets qu'on appelle tous deux « plan tangent ». Le premier, $T_pS$, est l'ensemble des **vitesses** possibles en $p$ d'une courbe tracée sur $S$ : c'est un sous-espace **vectoriel**, il passe par l'origine $0$ de $\R^N$. Le second, $\mathcal T_pS$, est le plan qu'on **dessine** collé contre la surface au point $p$ : c'est le translaté $p+T_pS$, un sous-espace **affine** passant par $p$.

Rappel : l'espace tangent à $S$ en $p$ est l'ensemble des vecteurs $\alpha'(0)$, pour $\alpha$ courbe $C^1$ tracée sur $S$ avec $\alpha(0)=p$ ([[ch09-vecteur-tangent-espace-tangent-def]]) ; c'est un sous-espace vectoriel de dimension $m=\dim S$, égal à $dx_q(\R^m)$ pour tout paramétrage local $x$ en $p$, $q=x^{-1}(p)$ ([[ch09-espace-tangent-image-dx]]). Un **sous-espace affine** de $\R^N$ est un ensemble de la forme $a+E=\{a+\vec v,\ \vec v\in E\}$ avec $E$ sous-espace vectoriel (sa **direction**) ; il est « parallèle à $E$ ».

## Énoncé

**Définition (poly, Définition IX.7.10, p. 161).** Soit $S$ une sous-variété. On note $T_pS$ l'espace tangent à $S$ en un point $p\in S$. C'est un sous-espace vectoriel de l'espace ambiant $\R^N$. On note $\mathcal T_pS$ le **sous-espace tangent affine** à $S$ en $p$, c'est-à-dire le sous-espace affine passant par $p$ et parallèle à $T_pS$ :
$$
\mathcal T_pS=p+T_pS=\{p+\vec v,\ \vec v\in T_pS\}.
$$

(Le fait que $T_pS$ soit un sous-espace vectoriel, de dimension $m$ si $S$ est de dimension $m$, est la Proposition IX.7.9, [[ch09-espace-tangent-image-dx]].)

## Hypothèses

### H1 — $S$ est une sous-variété et $p\in S$

**Rôle.** Sans cela, l'ensemble des vecteurs tangents n'est pas forcément un sous-espace vectoriel et la notion de « sous-espace affine parallèle » n'a pas de sens.

**Si on la retire.** Pour le cône $\{x^2+y^2=z^2\}$ en $0$, l'ensemble des vecteurs tangents est le cône lui-même ([[ch09-vecteur-tangent-espace-tangent-def]]), qui n'est pas un sous-espace vectoriel : la notation $T_0S$ désignerait un objet qui n'a pas les propriétés attendues.

## Exemples

* **Cercle unité en $p=(1,0)$.** $T_p\mathbb S^1=\{0\}\times\R$ (axe vertical passant par l'origine), tandis que $\mathcal T_p\mathbb S^1=\{1\}\times\R$ est la droite verticale d'équation $x=1$, tangente au cercle au sens du dessin.
* **Sphère $\mathbb S^n\subset\R^{n+1}$.** $T_p\mathbb S^n=p^\perp=\{\vec v : \langle\vec v,p\rangle=0\}$ ([[ch09-espace-tangent-graphe-equation]]). Le plan tangent affine est
$$
\mathcal T_p\mathbb S^n=\{y\in\R^{n+1} : \langle y-p,p\rangle=0\}=\{y : \langle y,p\rangle=1\}\quad(\text{car }\langle p,p\rangle=1).
$$
* **Graphe $z=f(x,y)$.** Si $f$ est $C^1$ sur un ouvert de $\R^2$ et $p=(a,b,f(a,b))$, on a $T_pS=\{(h,k,df_{(a,b)}(h,k))\}$ ([[ch09-espace-tangent-graphe-equation]]), donc
$$
\mathcal T_pS=\Big\{(x,y,z) : z=f(a,b)+\frac{\partial f}{\partial x}(a,b)(x-a)+\frac{\partial f}{\partial y}(a,b)(y-b)\Big\},
$$
la formule usuelle du « plan tangent » : c'est le graphe de l'approximation affine de $f$ en $(a,b)$. Par exemple pour $f(x,y)=x^2+y^2$ en $(1,1)$ : $\mathcal T_pS=\{z=2+2(x-1)+2(y-1)\}=\{z=2x+2y-2\}$.

## Pièges

* > ⚠️ **Ne pas confondre** $T_pS$ (vectoriel, contient $0$) et $\mathcal T_pS=p+T_pS$ (affine, contient $p$). Une phrase comme « $p\in T_pS$ » est en général **fausse** : pour la sphère, $\langle p,p\rangle=1\neq0$ donc $p\notin T_p\mathbb S^n$. Elle n'est vraie que dans des cas particuliers (par exemple si $S$ est un ouvert d'un sous-espace vectoriel).
* Les différentielles $d\varphi_p$ ([[ch09-differentielle-entre-sous-varietes-def]]) sont définies sur l'espace **vectoriel** $T_pS$, jamais sur $\mathcal T_pS$.
* La **droite normale** (pour une hypersurface) est elle aussi affine : $p+(T_pS)^\perp$ ; la direction normale est $(T_pS)^\perp$.
* Le poly distingue les deux par la police ($T_pS$ en italique ordinaire, $\mathcal T_pS$ en calligraphique, deux symboles faciles à confondre) : à l'écrit, préférer la notation $p+T_pS$, sans ambiguïté.
