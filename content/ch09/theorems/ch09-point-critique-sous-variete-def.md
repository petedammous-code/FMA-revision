---
id: ch09-point-critique-sous-variete-def
type: definition
chapter: 9
title: Point critique d'une application entre sous-variétés
ref: Définition IX.7.32
page: 168
importance: 2
depends: [ch09-differentielle-entre-sous-varietes-def, ch09-point-critique-valeur-reguliere-def, ch09-immersion-submersion-sous-varietes-def]
tags: [point-critique, valeur-reguliere, valeur-critique, submersion, sous-variete, differentielle]
---
## Intuition

> 💡 Un point est **critique** quand la différentielle « perd des directions » : elle n'atteint pas toutes les directions tangentes possibles à l'arrivée. Pour une fonction à valeurs réelles, l'arrivée est une droite, et perdre des directions veut dire tout perdre : la différentielle est **nulle**, la fonction est « plate » au premier ordre. C'est là que se cachent les maxima et minima ([[ch09-extremum-local-differentielle-nulle]]) et les singularités des fibres.

C'est la même définition qu'entre ouverts de $\R^m$ et $\R^N$ ([[ch09-point-critique-valeur-reguliere-def]]), en remplaçant $\R^m$ et $\R^N$ par les espaces tangents : $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ est la différentielle de $\varphi$ en $p$ ([[ch09-differentielle-entre-sous-varietes-def]]). Un point est **non critique** exactement quand $\varphi$ est une **submersion** en ce point ([[ch09-immersion-submersion-sous-varietes-def]]).

## Énoncé

**Définition (poly, Définition IX.7.32, p. 168).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$), et soit $\varphi : S_1\to S_2$ une application différentiable. Si, en un point $p\in S_1$, la différentielle
$$
d\varphi_p : T_pS_1\longrightarrow T_{\varphi(p)}S_2
$$
n'est pas surjective, on dit que $p$ est un **point critique** de $\varphi$.

Dans le cas d'une fonction différentiable $f : S\to\R$ d'une sous-variété $S$ de $\R^N$, remarquons que $p\in S$ est un point critique de $f$ si et seulement si $df_p$ s'annule.

On définit de même comme dans la définition IX.1.3 les **points réguliers**, **valeurs critiques** et **valeurs régulières**. Explicitement :
* $p\in S_1$ est un **point régulier** de $\varphi$ s'il n'est pas critique, c'est-à-dire si $d\varphi_p$ est surjective ;
* $c\in S_2$ est une **valeur critique** de $\varphi$ s'il existe un point critique $p$ avec $\varphi(p)=c$ ;
* $c\in S_2$ est une **valeur régulière** si ce n'est pas une valeur critique, c'est-à-dire si tout $p\in\varphi^{-1}(\{c\})$ est régulier — en particulier toute valeur $c\notin\varphi(S_1)$ est régulière.

*Justification de la remarque pour $f:S\to\R$.* Ici $T_{f(p)}\R=\R$, et une forme linéaire $df_p:T_pS\to\R$ est soit nulle, soit surjective (son image est un sous-espace de $\R$, donc $\{0\}$ ou $\R$). Donc $p$ est critique $\iff df_p=0$. Lu dans un paramétrage $x$ avec $x(q)=p$ : $p$ est critique $\iff d(f\circ x)_q=0$, car $df_p(dx_q(w))=d(f\circ x)_q(w)$ et $dx_q(\R^m)=T_pS$ (poly, Exemple IX.7.34).

## Hypothèses

### H1 — Le but de la différentielle est $T_{\varphi(p)}S_2$

Condition cachée essentielle : la surjectivité est testée vers l'espace tangent $T_{\varphi(p)}S_2$, de dimension $\dim S_2$, **pas** vers $\R^{N_2}$. Par exemple $\mathrm{Id}:\mathbb S^1\to\mathbb S^1$ n'a aucun point critique, alors que l'inclusion $\mathbb S^1\to\R^2$ (même application, autre sous-variété d'arrivée) n'a que des points critiques.

### H2 — $\varphi$ différentiable en $p$

Sans elle, $d\varphi_p$ n'existe pas et la notion n'a pas de sens. Pour les applications de la notion (fibres régulières, extrema), on suppose $\varphi$ de classe $C^k$, $k\ge1$.

### H3 — Dimensions

Si $\dim S_1<\dim S_2$, $d\varphi_p$ ne peut jamais être surjective : **tous** les points sont critiques, et l'image $\varphi(S_1)$ est formée de valeurs critiques.

## Exemples

* **Altitude sur la sphère.** $f:\mathbb S^2\to\R$, $f(x,y,z)=z$, $df_p(v)=\langle v,e_3\rangle$ sur $T_p\mathbb S^2=p^\perp$ ([[ch09-ex-fonction-hauteur]]). $df_p=0\iff e_3\in(p^\perp)^\perp=\R p\iff p=\pm e_3$. Points critiques : les deux pôles ; valeurs critiques : $\pm1$ ; valeurs régulières : tout $c\in\R\setminus\{-1,1\}$ (pour $|c|>1$, parce que $f^{-1}(\{c\})=\emptyset$). Pour $|c|<1$, $f^{-1}(\{c\})$ est un cercle, sous-variété de dimension $1$ ([[ch09-fibres-submersion-image-immersion]]).
* **Projection de la sphère sur le plan.** $\varphi:\mathbb S^2\to\R^2$, $(x,y,z)\mapsto(x,y)$ ; $d\varphi_p$ est la restriction à $p^\perp$ de $(v_1,v_2,v_3)\mapsto(v_1,v_2)$, dont le noyau est $\R e_3\cap p^\perp$. Elle est surjective (donc bijective, dimensions $2$) ssi $e_3\notin p^\perp$, c'est-à-dire $p_3\neq0$. Points critiques : l'**équateur** $\{z=0\}$ ; valeurs critiques : le cercle unité de $\R^2$ ; valeurs régulières : $\{x^2+y^2\neq1\}$ (deux antécédents si $x^2+y^2<1$, aucun si $>1$).
* **Quotient de Rayleigh.** $A$ symétrique, $f(v)=\langle Av,v\rangle$ sur $\mathbb S^{N-1}$ : $df_v(w)=2\langle Av,w\rangle$ sur $v^\perp$, donc $v$ est critique $\iff Av\in\R v$. Points critiques : les vecteurs propres unitaires ; valeurs critiques : les valeurs propres de $A$ (car $f(v)=\lambda$ si $Av=\lambda v$, $\norm{v}=1$).

## Pièges

* > ⚠️ Pour $f=g|_S$, « $p$ critique pour $f$ » signifie $dg_p(T_pS)=0$, **pas** $dg_p=0$ ([[ch09-ex-point-critique-restriction]]) : les pôles sont critiques pour l'altitude sur $\mathbb S^2$, alors que $d(z)=dz\neq0$ sur $\R^3$.
* Une valeur qui n'est pas atteinte est **régulière** (par convention) : « valeur régulière » n'implique pas « fibre non vide ».
* La critique porte sur la **surjectivité** (pas l'injectivité) : une immersion stricte ($\dim S_1<\dim S_2$) n'a que des points critiques, même si elle est « parfaitement régulière » au sens des courbes.
* Si $c$ est une valeur régulière de $\varphi:S_1\to S_2$, alors $\varphi^{-1}(\{c\})$ est une sous-variété de dimension $\dim S_1-\dim S_2$ : on applique le point 1 de [[ch09-fibres-submersion-image-immersion]] en chaque point de la fibre (être une sous-variété est une propriété locale).
