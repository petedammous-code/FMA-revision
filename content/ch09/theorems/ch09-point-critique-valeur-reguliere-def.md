---
id: ch09-point-critique-valeur-reguliere-def
type: definition
chapter: 9
title: Point critique, valeur critique, point régulier, valeur régulière
ref: Définition IX.1.3
page: 148
importance: 3
depends: [ch09-immersion-submersion-def]
tags: [point-critique, valeur-critique, valeur-reguliere, submersion, fibre]
---
## Intuition

> 💡 Un point $x$ est **régulier** pour $f$ quand $f$ y est une submersion ($df_x$ surjective, [[ch09-immersion-submersion-def]]) : près de $x$, $f$ se comporte comme une projection, et l'ensemble des points où $f$ prend la valeur $f(x)$ (la « ligne de niveau ») y est lisse. Un point **critique** est un point où cette surjectivité casse ; pour une fonction numérique, c'est un point où le gradient s'annule (sommet, fond de cuvette, col).

Une **valeur** $a$ est **régulière** quand **aucun** point de la fibre $f^{-1}(\{a\})=\{x\in V : f(x)=a\}$ n'est critique. C'est exactement l'hypothèse qui fera de $f^{-1}(\{a\})$ une sous-variété ([[ch09-sous-variete-equation-valeur-reguliere]]).

## Énoncé

**Définition (poly, Définition IX.1.3, p. 148).** Soit $f : V\to\R^N$ une fonction différentiable définie sur un ouvert $V$ de $\R^m$. Si $x\in V$ est tel que $df_x : \R^m\to\R^N$ n'est pas surjective, $x$ est appelé **point critique** de $f$ et $a=f(x)\in\R^N$ est appelée **valeur critique** de $f$.

Si $x\in V$ n'est pas un point critique, c'est un **point régulier**. Si $a\in\R^N$ n'est pas une valeur critique, c'est une **valeur régulière**. C'est en particulier le cas lorsque $a$ n'est pas dans l'image de $f$.

Autrement dit :
$$
a \text{ valeur régulière} \iff \forall x\in V,\ \big(f(x)=a\ \Rightarrow\ df_x \text{ surjective}\big)\iff \text{$f$ est une submersion en tout point de } f^{-1}(\{a\}).
$$

## Hypothèses

### H1 — « surjective », vers $\R^N$ tout entier

**Rôle.** La notion compare $df_x$ à l'espace d'arrivée $\R^N$. Si $N=1$, $df_x$ est une forme linéaire, surjective si et seulement si elle est non nulle : $x$ est critique $\iff df_x=0\iff\nabla f(x)=0$. On retrouve la notion usuelle de point critique d'une fonction numérique ([[ch06-point-critique-non-degenere-def]]).

**Si on l'oublie.** Si $N>m$, aucune application linéaire $\R^m\to\R^N$ n'est surjective : **tous** les points sont critiques et toutes les valeurs atteintes sont critiques. Ex. : pour $f(t)=(\cos t,\sin t)$ ($m=1$, $N=2$), qui est pourtant une immersion, chaque point du cercle est une valeur critique. La notion n'est intéressante que pour $m\ge N$.

### H2 — la valeur régulière porte sur **toute** la fibre

**Rôle.** Pour que $f^{-1}(\{a\})$ soit lisse partout, il faut contrôler $df_x$ en **chaque** $x$ de la fibre.

**Si on l'affaiblit.** Une valeur peut être atteinte à la fois en un point régulier et en un point critique : elle est alors critique. Ex. : $f(x)=x^3-3x$ sur $\R$, $f'(x)=3(x^2-1)$ : points critiques $\pm1$, valeurs critiques $f(1)=-2$ et $f(-1)=2$. Or $f(2)=8-6=2$ avec $f'(2)=9\neq0$ : $2$ est atteinte au point régulier $2$, mais reste une valeur critique.

## Exemples

* **$f(x,y)=x^2+y^2$** sur $\R^2$. $df_{(x,y)}(h,k)=2xh+2yk$, nulle si et seulement si $(x,y)=(0,0)$. Unique point critique : $(0,0)$ ; unique valeur critique : $0$. Toute valeur $a\neq0$ est régulière : pour $a>0$ la fibre est le cercle de rayon $\sqrt a$ (une sous-variété) ; pour $a<0$ la fibre est vide, et $a$ est régulière « par vacuité ». La fibre critique $f^{-1}(\{0\})=\{(0,0)\}$ est un point.
* **$f(x,y)=xy$**. $\nabla f=(y,x)$, nul seulement en $(0,0)$ ; $0=f(0,0)$ est la seule valeur critique. Pour $a\neq0$ la fibre est l'hyperbole $xy=a$ (lisse) ; pour $a=0$ c'est la croix $\{xy=0\}$, qui n'est **pas** une sous-variété ([[ch09-contre-ex-croix]]). Même phénomène pour $x^2-y^2$ (fibre en $0$ : deux droites sécantes).
* **Submersion partout.** $f(x,y,z)=z-g(x,y)$, avec $g$ de classe $C^1$ : $\partial_zf=1$, donc tout point est régulier et toute valeur $a$ est régulière ; la fibre $f^{-1}(\{a\})$ est le graphe de $g+a$.

## Pièges

* > ⚠️ « Valeur critique » ne veut **pas** dire que la fibre est singulière, seulement qu'on ne peut pas conclure : pour $f(x)=x^3$, $0$ est valeur critique ($f'(0)=0$) mais $f^{-1}(\{0\})=\{0\}$ est une très bonne sous-variété de dimension $0$ ; pour $f(x,y)=(x^2+y^2-1)^2$, $0$ est valeur critique (tout point du cercle unité est critique, car $\nabla f=4(x^2+y^2-1)(x,y)$ y est nul) alors que $f^{-1}(\{0\})$ est le cercle unité.
* Ne pas confondre **point** critique (dans l'espace de départ $V\subset\R^m$) et **valeur** critique (dans l'espace d'arrivée $\R^N$).
* Une valeur hors de l'image est **régulière** (fibre vide) : c'est une convention commode, pas un piège de calcul, mais il faut la connaître.
* Pour une fonction **sur une sous-variété**, la notion de point critique est différente (on teste $df_p$ sur l'espace tangent) : voir [[ch09-point-critique-sous-variete-def]].
