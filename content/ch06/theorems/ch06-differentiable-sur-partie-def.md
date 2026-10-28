---
id: ch06-differentiable-sur-partie-def
type: definition
chapter: 6
title: Application différentiable / de classe $C^p$ sur une partie non ouverte
ref: Définition VI.1.3
page: 116
importance: 1
depends: [ch05-differentielle-def, ch05-classe-ck-def]
tags: [differentiabilite, classe-cp, prolongement, partie-quelconque, definition]
---
## Intuition

> 💡 La différentielle ([[ch05-differentielle-def]]) n'est définie que sur un **ouvert** : pour comparer $f(x+h)$ à $f(x)$, il faut pouvoir bouger $x$ dans toutes les directions. Or on a souvent besoin de fonctions définies sur une boule **fermée** ou un convexe fermé (c'est là qu'on applique le point fixe de Banach, qui exige la complétude). La solution du poly : $f$ est dite différentiable (ou $C^p$) sur la partie $X$ si elle est la **restriction** d'une fonction différentiable (ou $C^p$) définie sur un ouvert un peu plus gros.

Image : on « déborde » légèrement de $X$ pour pouvoir dériver, puis on oublie le débordement.

Rappel : un **voisinage ouvert** de $X$ dans $E$ est un ouvert $U$ de $E$ tel que $X\subset U$. La classe $C^p$ sur un ouvert est définie en [[ch05-classe-ck-def]].

## Énoncé

**Définition (poly, Définition VI.1.3, p. 116).** On dit qu'une application $f$ définie sur une partie $X$ d'un espace vectoriel normé $E$ et à valeurs dans un espace vectoriel normé $F$ est **différentiable** (resp. **de classe $C^p$**, $p\in\N\cup\{+\infty\}$), s'il existe un voisinage ouvert $U$ de $X$ dans $E$ et une application $g$ différentiable (resp. de classe $C^p$) de l'ouvert $U$ à valeurs dans $F$ telle que $f$ soit la restriction de $g$ à $X$.

**Convention d'usage.** Lorsqu'on écrit ensuite $df_x$, ou $\dfrac{\partial f}{\partial x}(\lambda,x)$ pour $x\in X$ (comme dans [[ch06-point-fixe-parametre-cp]]), on entend $dg_x$ (resp. la différentielle partielle de $g$) pour un prolongement $g$ fixé.

## Hypothèses

### H1 — l'ouvert $U$ doit contenir **tout** $X$

**Rôle.** Aux points du bord de $X$, c'est le prolongement $g$ qui donne un sens à la différentielle.

**Si on la retire.** Si l'on ne demandait la différentiabilité que sur l'intérieur de $X$, on accepterait $f(x)=\sqrt x$ sur $X=[0,1]$, alors que $\sqrt x$ n'est **pas** différentiable sur $[0,1]$ au sens de la définition : si $g$ prolongeait $\sqrt{\cdot}$ à un ouvert contenant $0$ et était dérivable en $0$, on aurait $g'(0)=\lim_{h\to0^+}\frac{\sqrt h}{h}=\lim_{h\to0^+}\frac1{\sqrt h}=+\infty$ : absurde.

### H2 — la différentielle sur $X$ peut dépendre du prolongement

**Rôle.** La définition ne fixe pas $g$ ; il faut savoir quand $df_x:=dg_x$ est intrinsèque.

**Si on la retire** (c'est-à-dire si l'on croit $dg_x$ toujours déterminé par $f$). Si $X=\{0\}\subset\R$ et $f(0)=0$, les prolongements $g_1(x)=0$ et $g_2(x)=x$ sont $C^\infty$ et $g_1'(0)=0\ne1=g_2'(0)$. En revanche, si $X$ est **convexe d'intérieur non vide**, $dg_x$ ne dépend pas du prolongement pour tout $x\in X$ : pour $y$ intérieur à $X$, le segment $[x,y]$ est dans $X$, donc $dg_x(y-x)=\lim_{t\to0^+}\frac{f(x+t(y-x))-f(x)}{t}$ ne dépend que de $f$ ; et les vecteurs $y-x$, $y$ décrivant l'intérieur de $X$, forment un ouvert non vide de $E$, qui engendre $E$, donc l'application linéaire $dg_x$ est déterminée.

## Exemples

* **Boule fermée.** La restriction à $\bar B(0,1)\subset\R^n$ de $g(x)=\|x\|_2^2$ (définie sur $U=\R^n$) est $C^\infty$ sur $\bar B(0,1)$ au sens de la définition, de différentielle $h\mapsto2\langle x,h\rangle$, y compris aux points de la sphère.
* **La régularité dépend de $X$.** $f(x)=|x|$ est $C^\infty$ sur $X=[0,1]$ (c'est la restriction de $g(x)=x$, définie sur $U=\R$), alors que $|\cdot|$ n'est pas dérivable en $0$ sur $\R$. Sur $X=[-1,1]$, en revanche, $|\cdot|$ n'est pas différentiable : tout prolongement $g$ coïnciderait avec $|\cdot|$ sur $[-1,1]$, donc aurait des dérivées à gauche et à droite $-1\ne1$ en $0$.
* **Usage typique.** Dans [[ch06-fonctions-implicites]], on applique le point fixe à paramètre à $g : B(x_0,r)\times\bar B(y_0,s)\to\bar B(y_0,s)$ ; $g$ est de classe $C^p$ sur la partie non ouverte $B(x_0,r)\times\bar B(y_0,s)$ parce qu'elle est la restriction d'une application $C^p$ définie sur l'ouvert $U\times V$ qui la contient.

## Pièges

* > ⚠️ Être $C^p$ « sur $X$ » au sens de la définition est plus fort qu'être $C^p$ sur l'intérieur de $X$ (exemple $\sqrt x$ sur $[0,1]$).
* Si $X$ est d'intérieur vide (un point, un segment de $\R^2$, …), la différentielle « de $f$ » n'est pas bien définie : il faut fixer un prolongement.
* Si $X$ est lui-même ouvert, on retrouve la définition usuelle (prendre $U=X$, $g=f$).
