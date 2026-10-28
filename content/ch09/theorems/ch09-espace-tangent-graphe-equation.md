---
id: ch09-espace-tangent-graphe-equation
type: proposition
chapter: 9
title: "Espace tangent d'un graphe et d'une sous-variété définie par équation : $T_pS=\ker dF_p$"
ref: Proposition IX.7.13
page: 162
importance: 3
depends: [ch09-espace-tangent-image-dx, ch09-graphe-sous-variete, ch09-sous-variete-equation-valeur-reguliere, ch09-point-critique-valeur-reguliere-def, ch09-vecteur-tangent-espace-tangent-def, ch05-composition-differentielles]
tags: [espace-tangent, graphe, equation, valeur-reguliere, noyau, sphere]
---
## Intuition

> 💡 **Graphe.** Le plan tangent à la surface $z=f(x,y)$ est le graphe de l'approximation linéaire de $f$ : là où la surface est « $z=f$ », le plan tangent est « $\delta z=df(\delta x,\delta y)$ ».
> **Équation.** Si $S$ est décrite par $F=0$, alors $F$ est constante (nulle) sur $S$ ; en se déplaçant **le long de $S$**, $F$ ne varie pas, donc la dérivée de $F$ dans une direction tangente est nulle : $T_pS\subset\ker dF_p$. Il y a égalité dès que les deux ont la même dimension, ce que garantit la surjectivité de $dF_p$.

Pour une hypersurface ($F$ à valeurs réelles), $\ker dF_p=\nabla F(p)^\perp$ : le **gradient est normal** à la surface (pour la sphère, $\nabla F(p)=2p$ et $T_p\mathbb S^n=p^\perp$).

Vocabulaire : $0$ est **valeur régulière** de $F$ si $dF_p$ est **surjective** en tout point $p$ tel que $F(p)=0$ ([[ch09-point-critique-valeur-reguliere-def]]) ; un tel ensemble $F^{-1}(0)$ est alors une sous-variété ([[ch09-sous-variete-equation-valeur-reguliere]]). Le graphe d'une application $C^k$ est une sous-variété ([[ch09-graphe-sous-variete]]). L'espace tangent $T_pS$ est défini dans [[ch09-vecteur-tangent-espace-tangent-def]] et [[ch09-notation-tps]].

## Énoncé

**Proposition (poly, Proposition IX.7.13, p. 162).**
1. Si $S=\{(u,f(u))\}$ est une sous-variété de $\R^N$ définie par le graphe d'une application $f : U\subset\R^m\to\R^{N-m}$ comme dans la section IX.5 (c'est-à-dire $U$ ouvert de $\R^m$ et $f$ de classe $C^k$, $k\ge1$), alors l'espace tangent en $p=(u,f(u))$ est le graphe de $df_u$ :
$$
T_pS=\{(h,df_u(h)),\ h\in\R^m\}.
$$
2. Si $S$ est une sous-variété de $\R^N$ définie par $S=\{x\in\R^N\mid F(x)=0\}$, où $0$ est valeur régulière de $F$ (avec, comme dans la section IX.4, $F : V\to\R^{N-m}$ de classe $C^k$ sur un ouvert $V$ de $\R^N$), alors pour tout $p\in S$,
$$
T_pS=\ker dF_p.
$$

(Le poly laisse la preuve en exercice : Exercice IX.7.14.)

## Hypothèses

### H1 — $f$ de classe $C^k$ ($k\ge1$) sur un ouvert $U$ (cas du graphe)

**Rôle.** Elle fait de $x(u)=(u,f(u))$ un paramétrage global de classe $C^1$, auquel on applique la Proposition IX.7.9 ; et elle donne un sens à $df_u$.

**Si on la retire.** Pour $f(t)=t^{1/3}$ sur $\R$ (continue, non dérivable en $0$), le graphe $G=\{(t,t^{1/3})\}=\{(s^3,s),\ s\in\R\}$ **est** une sous-variété de $\R^2$ (c'est le graphe de $s\mapsto s^3$ au-dessus du second axe), paramétrée par $y(s)=(s^3,s)$, immersion car $y'(s)=(3s^2,1)\neq0$. En $0$ : $T_0G=\R\,y'(0)=\{0\}\times\R$, droite **verticale**, qui n'est le graphe d'aucune application linéaire $\R\to\R$ (un tel graphe $\{(h,ch)\}$ n'est jamais vertical). La formule n'a plus de sens.

### H2 — $0$ est valeur régulière de $F$ ($dF_p$ surjective en tout $p\in S$)

**Rôle.** L'inclusion $T_pS\subset\ker dF_p$ est toujours vraie dès que $F$ est $C^1$ et nulle sur $S$. La surjectivité donne $\dim\ker dF_p=N-(N-m)=m=\dim T_pS$, d'où l'égalité. Elle garantit aussi que $S$ est une sous-variété de dimension $m$.

**Si on la retire.** (a) **$S$ reste une sous-variété mais l'égalité tombe.** $F(x)=(\norm x^2-1)^2$ sur $\R^3$ : $F^{-1}(0)=\mathbb S^2$ est une sous-variété, mais $dF_p(\vec v)=2(\norm p^2-1)\cdot2\langle p,\vec v\rangle=0$ pour $p\in\mathbb S^2$ : $\ker dF_p=\R^3\neq T_p\mathbb S^2=p^\perp$. (b) **$S$ n'est plus une sous-variété.** Pour le cône $F(x,y,z)=x^2+y^2-z^2$, $dF_0=0$ donc $\ker dF_0=\R^3$, tandis que l'ensemble des vecteurs tangents en $0$ est le cône lui-même ([[ch09-vecteur-tangent-espace-tangent-def]]).

### H3 — $F$ à valeurs dans $\R^{N-m}$

**Rôle.** Fixe la dimension : le nombre d'équations indépendantes est la codimension $N-m$.

**Si on la retire.** Hypothèse de cohérence des notations : si $F : V\to\R^n$ a $0$ pour valeur régulière, $S=F^{-1}(0)$ est de dimension $N-n$ et l'on a encore $T_pS=\ker dF_p$ (même preuve, avec $\dim\ker dF_p=N-n$).

## Idée de la preuve

Graphe : appliquer $T_pS=dx_u(\R^m)$ au paramétrage $x(u)=(u,f(u))$, de différentielle $h\mapsto(h,df_u(h))$.
Équation : dériver $F\circ\alpha=0$ donne $T_pS\subset\ker dF_p$ ; puis égalité des dimensions ($m$ des deux côtés, théorème du rang).

## Preuve

**1. Cas du graphe.** D'après la Proposition IX.5.1 ([[ch09-graphe-sous-variete]]), l'application
$$
x : U\to\R^N=\R^m\times\R^{N-m},\qquad u\mapsto(u,f(u))
$$
est un paramétrage (global) de $S$ : elle est $C^k$ ; c'est un homéomorphisme de $U$ sur $S$, d'inverse la restriction à $S$ de la projection $(u,y)\mapsto u$ (continue) ; et sa différentielle
$$
dx_u(h)=(h,df_u(h)),\qquad h\in\R^m,
$$
est injective (sa première composante est $h$). Soit $p=(u,f(u))=x(u)$. La Proposition IX.7.9 ([[ch09-espace-tangent-image-dx]]) donne
$$
T_pS=dx_u(\R^m)=\{(h,df_u(h)),\ h\in\R^m\},
$$
qui est le graphe de l'application linéaire $df_u : \R^m\to\R^{N-m}$.

**2. Cas d'une équation.** Comme $0$ est valeur régulière de $F$, $S=F^{-1}(0)$ est une sous-variété de dimension $m$ de $\R^N$ (Proposition IX.4.1, [[ch09-sous-variete-equation-valeur-reguliere]]). Soit $p\in S$.

*Inclusion $T_pS\subset\ker dF_p$.* Soit $\vec v\in T_pS$ : il existe ([[ch09-vecteur-tangent-espace-tangent-def]]) une courbe $\alpha : I\to\R^N$ de classe $C^1$, de trace dans $S\subset V$, avec $\alpha(0)=p$ et $\alpha'(0)=\vec v$. Pour tout $t\in I$, $\alpha(t)\in S$, donc $F(\alpha(t))=0$. La fonction $F\circ\alpha$ est identiquement nulle sur $I$, donc de dérivée nulle en $0$ ; par la règle de la chaîne ([[ch05-composition-differentielles]]),
$$
0=(F\circ\alpha)'(0)=dF_{\alpha(0)}(\alpha'(0))=dF_p(\vec v).
$$
Donc $\vec v\in\ker dF_p$.

*Égalité des dimensions.* $dF_p : \R^N\to\R^{N-m}$ est surjective (car $0=F(p)$ est valeur régulière), donc par le théorème du rang $\dim\ker dF_p=N-(N-m)=m$. Par ailleurs $\dim T_pS=m$ (Proposition IX.7.9). Un sous-espace vectoriel inclus dans un autre de même dimension finie lui est égal : $T_pS=\ker dF_p$. $\square$

*Remarque.* Le même argument montre, pour une sous-variété $S$ et une application $F$ de classe $C^1$ sur un ouvert de $\R^N$ contenant $S$, constante sur $S$, que $T_pS\subset\ker dF_p$ en tout point — sans aucune hypothèse de surjectivité.

## Preuve à trous

**Graphe.** L'application $x(u)=(u,f(u))$ est un paramétrage global de $S$, de différentielle <trou>$dx_u(h)=(h,df_u(h))$, injective</trou>. Par la Proposition IX.7.9, $T_pS=dx_u(\R^m)$, qui est le graphe de $df_u$.

**Équation.** Soit $\vec v=\alpha'(0)\in T_pS$, avec $\alpha$ courbe $C^1$ tracée sur $S$, $\alpha(0)=p$. Comme <trou indice="que vaut $F$ le long de la courbe ?">$F\circ\alpha\equiv0$ sur $I$, en dérivant en $0$ : $dF_p(\alpha'(0))=0$</trou>, on a $T_pS\subset\ker dF_p$. Or <trou indice="théorème du rang">$dF_p$ est surjective sur $\R^{N-m}$, donc $\dim\ker dF_p=N-(N-m)=m$</trou>, et <trou indice="Proposition IX.7.9">$\dim T_pS=m$</trou>. D'où <trou>l'égalité $T_pS=\ker dF_p$ (inclusion entre sous-espaces de même dimension finie)</trou>. $\square$

## Exemples

* **Sphère.** $\mathbb S^n=F^{-1}(0)$ avec $F(x)=\norm x^2-1$ sur $\R^{n+1}$, $dF_p(\vec v)=2\langle p,\vec v\rangle$, surjective sur $\R$ dès que $p\neq0$ (prendre $\vec v=p$). Donc
$$
T_p\mathbb S^n=\ker dF_p=\{\vec v\in\R^{n+1} : \langle p,\vec v\rangle=0\}=p^\perp.
$$
* **Paraboloïde, deux façons.** $S=\{z=x^2+y^2\}$. Comme graphe de $f(u,v)=u^2+v^2$ : $T_{(u,v,f(u,v))}S=\{(h_1,h_2,2uh_1+2vh_2)\}$. Comme $F^{-1}(0)$ avec $F(x,y,z)=x^2+y^2-z$ ($dF=(2x,2y,-1)\neq0$, donc $0$ est valeur régulière) : $T_pS=\{2xh_1+2yh_2-h_3=0\}$. En $p=(u,v,u^2+v^2)$ c'est le même plan.
* **Un cercle de $\R^3$ (codimension 2).** $S=\{x^2+y^2+z^2=1,\ x+y+z=0\}=F^{-1}(0)$ avec $F(x,y,z)=(x^2+y^2+z^2-1,\ x+y+z)$. La matrice de $dF_p$ a pour lignes $2p$ et $(1,1,1)$ ; elle est de rang $2$ sauf si $p$ est colinéaire à $(1,1,1)$, ce qui est impossible sur $S$ ($p\neq0$ et $p\perp(1,1,1)$). Donc $0$ est valeur régulière et $T_pS=p^\perp\cap(1,1,1)^\perp$. En $p=\frac1{\sqrt2}(1,-1,0)$ : $T_pS=\{h_1-h_2=0,\ h_1+h_2+h_3=0\}=\R\,(1,1,-2)$.

## Pièges

* > ⚠️ L'inclusion $T_pS\subset\ker dF_p$ est **toujours** vraie ; l'**égalité** exige la surjectivité de $dF_p$ (exemple $F=(\norm x^2-1)^2$, où $\ker dF_p=\R^3$).
* Pour un niveau $a\neq0$ ($S=F^{-1}(a)$, $a$ valeur régulière), on applique la proposition à $F-a$ : $T_pS=\ker dF_p$ aussi.
* L'espace tangent d'un graphe est le graphe de $df_u$ — un sous-espace **vectoriel** ; le plan tangent dessiné est son translaté $p+T_pS$ ([[ch09-notation-tps]]), d'équation $y=f(u)+df_u(\cdot-u)$.
* $dF_p$ est la différentielle de $F$ sur l'ouvert $V$ de $\R^N$ (au sens usuel du chapitre V), évaluée au point $p\in S$ ; ne pas la confondre avec la différentielle de la restriction $F_{|S}$ (qui est nulle, puisque $F_{|S}\equiv0$).
* Hypersurface : $T_pS=\nabla F(p)^\perp$ et la droite normale affine est $p+\R\nabla F(p)$.
