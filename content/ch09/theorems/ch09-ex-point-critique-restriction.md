---
id: ch09-ex-point-critique-restriction
type: proposition
chapter: 9
title: "Point critique de la restriction d'une fonction : $T_pS\subset\ker dg_p$"
ref: Exemple IX.7.33
page: 168
importance: 2
depends: [ch09-remarques-differentielle-cas-euclidien, ch09-point-critique-sous-variete-def, ch09-differentielle-entre-sous-varietes-def, ch05-composition-differentielles]
tags: [point-critique, restriction, gradient, espace-tangent, lignes-de-niveau, lagrange]
---
## Intuition

> 💡 En pratique, une fonction sur une sous-variété est presque toujours la **restriction** d'une fonction $g$ définie dans l'espace ambiant (altitude, distance, énergie...). Sur $S$ on ne « voit » que les variations de $g$ dans les directions tangentes. Donc $p$ est critique pour $g|_S$ exactement quand $g$ ne varie pas au premier ordre le long de $T_pS$ : le gradient $\nabla g(p)$ est **orthogonal** à $S$ en $p$. Image : dans le plan, une courbe $S$ et les lignes de niveau de $g$ ; les points critiques de $g|_S$ sont les points où $S$ est **tangente** à une ligne de niveau.

Rappels : $T_pS$ est l'espace tangent ([[ch09-vecteur-tangent-espace-tangent-def]]) ; le **gradient** $\nabla g(p)\in\R^N$ est le vecteur tel que $dg_p(v)=\langle\nabla g(p),v\rangle$ pour tout $v$ (produit scalaire euclidien) ; un point critique de $f:S\to\R$ est un point où $df_p=0$ ([[ch09-point-critique-sous-variete-def]]).

## Énoncé

**Proposition (poly, Exemple IX.7.33, p. 168).** Soit $S$ une sous-variété de $\R^N$ et $f:S\to\R$ une fonction différentiable. Supposons que $f$ soit la restriction à $S$ d'une fonction différentiable $g$ définie sur un ouvert $U$ de $\R^N$ contenant $S$. Alors $p\in S$ est un point critique de $f$ si et seulement si $dg_p(T_pS)=0$, autrement dit $T_pS\subset\ker dg_p$.

De façon équivalente (reformulation euclidienne) : $p$ est critique pour $f$ si et seulement si $\nabla g(p)\perp T_pS$, c'est-à-dire $\nabla g(p)\in(T_pS)^\perp$.

## Hypothèses

### H1 — $g$ différentiable sur un ouvert $U$ contenant $S$

**Rôle.** Elle permet d'écrire $dg_p$, de prouver que $df_p$ est la restriction de $dg_p$ à $T_pS$ (règle de la chaîne $(g\circ\alpha)'(0)=dg_p(\alpha'(0))$, qui demande $g$ différentiable en $p$ sur un ouvert), et donc de calculer $df_p$ sans paramétrage.

**Si on la retire.** Le critère n'a plus de sens, même quand $f$ est très régulière. Sur $S=\R\times\{0\}\subset\R^2$, $g(x,y)=|y|$ prolonge $f\equiv0$ : tout point de $S$ est critique pour $f$, mais $dg_p$ n'existe en aucun point $p\in S$ ($y\mapsto|y|$ n'est pas dérivable en $0$). Il faut alors revenir à la définition intrinsèque ($d(f\circ x)_q=0$). Seule la différentiabilité de $g$ **au voisinage de $S$** compte : il suffit d'ailleurs de la supposer sur un ouvert contenant $p$.

### H2 — $S$ est une sous-variété

**Rôle.** $T_pS$ est alors un sous-espace vectoriel, égal à l'ensemble des vitesses $\alpha'(0)$ des courbes $C^1$ tracées sur $S$ par $p$ ; c'est ce qui permet de transporter la dérivée le long des courbes.

**Si on la retire.** Pour la croix $C=(\R\times\{0\})\cup(\{0\}\times\R)$, qui n'est pas une sous-variété ([[ch09-contre-ex-croix]]), l'ensemble des vitesses en $0$ des courbes $C^1$ tracées sur $C$ est $(\R\times\{0\})\cup(\{0\}\times\R)$, qui n'est pas un sous-espace vectoriel ; la notion de « point critique » de $g|_C$ en $0$ n'est pas définie dans ce cadre.

## Idée de la preuve

Pour $v=\alpha'(0)\in T_pS$, $f\circ\alpha=g\circ\alpha$ car $\alpha$ reste dans $S$ ; la règle de la chaîne donne $df_p(v)=dg_p(v)$. Donc $df_p=dg_p|_{T_pS}$, qui est nulle si et seulement si $T_pS\subset\ker dg_p$.

## Preuve

**Étape 1 : $df_p$ est la restriction de $dg_p$ à $T_pS$** (c'est la Remarque IX.7.16, point 2, [[ch09-remarques-differentielle-cas-euclidien]]). Soit $v\in T_pS$ ; par définition, $v=\alpha'(0)$ pour une courbe $\alpha:I\to\R^N$ de classe $C^1$, à valeurs dans $S$, avec $\alpha(0)=p$. Comme $\alpha(I)\subset S$ et $f=g$ sur $S$, on a $f\circ\alpha=g\circ\alpha$ sur $I$. D'une part, par la propriété 2 de la Définition IX.7.15 ([[ch09-differentielle-entre-sous-varietes-def]]), $(f\circ\alpha)'(0)=df_p(v)$. D'autre part, $g$ est différentiable en $p$ sur l'ouvert $U$ et $\alpha$ est dérivable en $0$ à valeurs dans $U$, donc par la règle de la chaîne ([[ch05-composition-differentielles]]), $(g\circ\alpha)'(0)=dg_p(\alpha'(0))=dg_p(v)$. Ainsi $df_p(v)=dg_p(v)$ pour tout $v\in T_pS$.

**Étape 2 : conclusion.** Par la Définition IX.7.32 ([[ch09-point-critique-sous-variete-def]]), $p$ est critique pour $f$ si et seulement si $df_p=0$, c'est-à-dire, d'après l'étape 1, si et seulement si $dg_p(v)=0$ pour tout $v\in T_pS$ : $dg_p(T_pS)=0$, ou encore $T_pS\subset\ker dg_p$.

**Étape 3 : forme euclidienne.** Comme $dg_p(v)=\langle\nabla g(p),v\rangle$, la condition $dg_p(T_pS)=0$ s'écrit $\langle\nabla g(p),v\rangle=0$ pour tout $v\in T_pS$, c'est-à-dire $\nabla g(p)\in(T_pS)^\perp$. $\square$

## Preuve à trous

Soit $v\in T_pS$, et $\alpha$ une courbe $C^1$ tracée sur $S$ avec $\alpha(0)=p$, $\alpha'(0)=v$. Comme $\alpha$ reste dans $S$, <trou indice="sur S, f et g coïncident">$f\circ\alpha=g\circ\alpha$</trou>. En dérivant en $0$ : à gauche <trou indice="définition de df_p par les courbes">$(f\circ\alpha)'(0)=df_p(v)$</trou>, à droite <trou indice="g est définie sur un ouvert">$(g\circ\alpha)'(0)=dg_p(v)$ par la règle de la chaîne</trou>. Donc $df_p=dg_p|_{T_pS}$, et $p$ est critique $\iff df_p=0\iff$ <trou>$dg_p$ s'annule sur $T_pS$, i.e. $T_pS\subset\ker dg_p$, i.e. $\nabla g(p)\perp T_pS$</trou>. $\square$

## Exemples

* **Distance à un point** (poly, Exemple IX.7.21 et Exercice IX.7.37). $g(x)=\norm{x-p_0}^2$, $\nabla g(p)=2(p-p_0)$ ([[ch09-ex-distance-carre]]). Donc $p$ est critique pour $f=g|_S$ si et seulement si $p-p_0\perp T_pS$ : **la droite normale à $S$ en $p$ passe par $p_0$**. Si $S$ est compacte, $f$ atteint son minimum en un tel point : il existe toujours une normale à $S$ passant par $p_0$.
* **Une forme linéaire sur le cercle.** $S=\mathbb S^1$, $g(x,y)=x+y$, $\nabla g=(1,1)$, $T_p\mathbb S^1=p^\perp$. Critique $\iff(1,1)\in(p^\perp)^\perp=\R p\iff p=\pm\frac{1}{\sqrt2}(1,1)$, valeurs $\pm\sqrt2$ : maximum et minimum de $x+y$ sur le cercle (la droite de niveau $x+y=\pm\sqrt2$ est tangente au cercle).
* **$g(x,y)=xy$ sur le cercle.** $\nabla g(p)=(y,x)$ doit être colinéaire à $p=(x,y)$ : $\det\begin{pmatrix}y&x\\x&y\end{pmatrix}=y^2-x^2=0$, d'où $y=\pm x$, et les quatre points $\big(\pm\frac1{\sqrt2},\pm\frac1{\sqrt2}\big)$, de valeurs $\frac12$ (si $x=y$) et $-\frac12$ (si $x=-y$) : maximum et minimum de $xy$ sur $\mathbb S^1$ (les hyperboles $xy=\pm\frac12$ sont tangentes au cercle).

## Pièges

* > ⚠️ $dg_p=0$ est **suffisant** mais **pas nécessaire**. Pour $g(x)=\norm{x}^2$ restreinte à $\mathbb S^{N-1}$, $f\equiv1$ : tout point est critique, alors que $dg_p(v)=2\langle p,v\rangle$ n'est jamais nulle sur $\R^N$ ; elle s'annule seulement sur $T_p\mathbb S^{N-1}=p^\perp$.
* L'inclusion est $T_pS\subset\ker dg_p$ (et non l'inverse) ; si $dg_p\neq0$, $\ker dg_p$ est un hyperplan, et la condition dit que l'hyperplan tangent à la ligne de niveau de $g$ contient $T_pS$.
* Quand $S$ est donnée par des équations $F=0$, $T_pS=\ker dF_p$ ([[ch09-espace-tangent-graphe-equation]]) et la condition devient la règle des **multiplicateurs de Lagrange** ([[ch09-multiplicateurs-lagrange]]).
* Le gradient dépend du produit scalaire ; la condition $T_pS\subset\ker dg_p$, elle, n'en dépend pas.
