---
id: ch06-point-critique-non-degenere-def
type: definition
chapter: 6
title: Point critique, point critique non dégénéré, signature de $d^2f_a$
ref: non numéroté, Exercice VI.3.4, p. 120
page: 120
importance: 2
depends: [ch05-lemme-schwarz, ch05-differentielle-seconde-def]
tags: [point critique, hessienne, non dégénéré, signature, forme quadratique]
---
## Intuition

> 💡 Un **point critique** d'une fonction réelle $f$ est un point où le plan tangent au graphe est horizontal : la partie linéaire $df_a$ de $f$ est nulle, et c'est le terme d'ordre deux, la **hessienne**, qui décrit la forme du graphe : une cuvette (minimum), un dôme (maximum) ou une selle (col).

Le point critique est **non dégénéré** quand ce terme d'ordre deux « voit » toutes les directions : aucune direction où la forme quadratique s'annule identiquement. Sa **signature** $(r,s)$ compte les directions où le graphe monte ($r$) et celles où il descend ($s$). Le lemme de Morse ([[ch06-lemme-de-morse]]) dit qu'alors, à changement de variables près, $f$ **est** exactement cette forme quadratique.

Rappel : la différentielle seconde $d^2f_a$ est la différentielle en $a$ de $x\mapsto df_x$, vue comme forme bilinéaire ([[ch05-differentielle-seconde-def]]) ; elle est symétrique par le lemme de Schwarz ([[ch05-lemme-schwarz]]).

## Énoncé

**Définition (poly, Exercice VI.3.4, p. 120).** Soit $U$ un ouvert de $\R^m$ et $f:U\to\R$ de classe $C^\infty$ (la classe $C^2$ suffit pour la définition).

* Un point $a\in U$ est un **point critique** de $f$ si $df_a=0$, c'est-à-dire si toutes les dérivées partielles $\dfrac{\partial f}{\partial x_i}(a)$ sont nulles.
* En un point critique, $d^2f_a$ est une forme bilinéaire symétrique sur $\R^m$ ; sa matrice dans la base canonique est la **hessienne** $\mathrm{Hess}_af=\Big(\dfrac{\partial^2 f}{\partial x_i\partial x_j}(a)\Big)_{1\le i,j\le m}$, de sorte que $d^2f_a(h,k)={}^th\,\mathrm{Hess}_af\,k$ (on identifie $\R^m$ aux matrices colonnes).
* Le point critique $a$ est **non dégénéré** si la forme $d^2f_a$ est non dégénérée, c'est-à-dire si $\det(\mathrm{Hess}_af)\ne0$.
* La **signature** de $d^2f_a$ est le couple $(r,s)$ où $r$ (resp. $s$) est le nombre de carrés affectés d'un coefficient $>0$ (resp. $<0$) dans une décomposition de la forme quadratique $h\mapsto d^2f_a(h,h)$ en combinaison de carrés de formes linéaires indépendantes (réduction de Gauss) ; elle ne dépend pas de la décomposition (loi d'inertie de Sylvester) et $r$, $s$ sont aussi les nombres de valeurs propres $>0$ et $<0$ de $\mathrm{Hess}_af$. Le point est non dégénéré si et seulement si $r+s=m$.
* On note $I_{r,s}=\begin{pmatrix}I_r&0\\0&-I_s\end{pmatrix}\in\Sym_m$ la matrice normale de signature $(r,s)$.

## Hypothèses

### H1 — $f$ de classe (au moins) $C^2$ sur un ouvert

Il faut que $d^2f_a$ existe et soit symétrique (Schwarz) pour parler de forme quadratique et de signature ; l'ouvert $U$ garantit que $f$ est définie autour de $a$.

### H2 — la notion n'a de sens intrinsèque qu'en un point critique

Si $\psi$ est un difféomorphisme avec $\psi(0)=a$, la règle de la chaîne appliquée deux fois donne
$$
d^2(f\circ\psi)_0(h,k)=d^2f_a\big(d\psi_0h,\,d\psi_0k\big)+df_a\big(d^2\psi_0(h,k)\big).
$$
Le second terme disparaît **exactement** quand $df_a=0$ : en un point critique, la hessienne se transforme par congruence $H\mapsto{}^tP\,H\,P$ ($P$ la matrice de $d\psi_0$, inversible), qui conserve le rang et la signature. En un point non critique, la « hessienne » dépend des coordonnées choisies et sa signature ne veut rien dire.

## Exemples

* $f(x,y)=x^2-y^2$ : $df_{(x,y)}=(2x,-2y)$, seul point critique $(0,0)$, $\mathrm{Hess}=\begin{pmatrix}2&0\\0&-2\end{pmatrix}=2I_{1,1}$ : non dégénéré, signature $(1,1)$ (col).
* $f(x,y)=xy$ : point critique $(0,0)$, $\mathrm{Hess}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, déterminant $-1$ ; la réduction de Gauss $xy=\frac14(x+y)^2-\frac14(x-y)^2$ donne la signature $(1,1)$ : c'est encore un col, tourné de $45^\circ$.
* $f(x,y)=\cos x+\cos y$ : points critiques $(k\pi,l\pi)$, $\mathrm{Hess}=\begin{pmatrix}-\cos x&0\\0&-\cos y\end{pmatrix}$. En $(0,0)$ : $-I_2$, signature $(0,2)$ (maximum) ; en $(\pi,0)$ : $\mathrm{diag}(1,-1)$, signature $(1,1)$ (col) ; en $(\pi,\pi)$ : $I_2$, signature $(2,0)$ (minimum). Tous sont non dégénérés.
* **Dégénérés** : $x^2+y^3$, $x^2+y^4$, $x^2-y^4$ en $(0,0)$ ont la même hessienne $\mathrm{diag}(2,0)$, de déterminant nul ; pourtant $x^2+y^4$ a un minimum strict, alors que $x^2+y^3$ et $x^2-y^4$ prennent des valeurs des deux signes près de $0$. La hessienne ne décide plus rien.

## Pièges

* > ⚠️ « Non dégénéré » ne veut pas dire « défini positif » : c'est $\det\mathrm{Hess}_af\ne0$, la signature pouvant être quelconque. Signature $(m,0)$ : minimum local strict ; $(0,m)$ : maximum local strict ; $r\ge1$ et $s\ge1$ : col (ni minimum ni maximum).
* En dimension $2$ : $\det\mathrm{Hess}\gt0$ et $\mathrm{tr}\,\mathrm{Hess}\gt0$ donne un minimum, $\det\gt0$ et $\mathrm{tr}\lt0$ un maximum, $\det\lt0$ un col, $\det=0$ : on ne peut pas conclure à l'ordre $2$.
* La signature se lit sur les **signes** des valeurs propres (ou des coefficients d'une réduction de Gauss), pas sur les signes des coefficients diagonaux de la hessienne (exemple $xy$ : diagonale nulle).
* Ne pas confondre avec les points critiques d'une application $f:\R^n\to\R^p$, $p\ge2$ (rang de $df_a$ non maximal, [[ch09-point-critique-valeur-reguliere-def]]).
