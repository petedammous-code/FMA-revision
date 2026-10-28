---
id: ch06-submersion-ouverte
type: proposition
chapter: 6
title: Une application de différentielle surjective (à noyau scindé) est localement surjective (submersion ouverte)
ref: Exercice VI.4.5
page: 124
importance: 2
depends: [ch06-inversion-locale, ch05-isomorphisme-banach, ch05-restriction-sous-espace, ch05-composition-differentielles]
tags: [submersion, surjectivité locale, inversion locale, supplémentaire fermé, Banach]
---
## Intuition

> 💡 Si la différentielle $df_a$ est **surjective**, l'approximation linéaire de $f$ atteint toutes les directions de l'espace d'arrivée ; on s'attend donc à ce que $f$ atteigne toutes les valeurs proches de $f(a)$. L'astuce : jeter les directions « inutiles » (le noyau de $df_a$) et ne garder qu'un sous-espace $E_2$ sur lequel $df_a$ devient un **isomorphisme** ; l'inversion locale ([[ch06-inversion-locale]]) s'applique alors à $f$ restreinte à $a+E_2$.

Image : $f:\R^3\to\R$, $f(x,y,z)=x^2+y^2-z^2$ près de $a=(1,0,0)$. Le gradient pointe selon $x$ ; en bougeant seulement $x$ autour de $1$, $f$ prend déjà toutes les valeurs proches de $1$.

Vocabulaire. $E_1=\ker df_a$ ; un **supplémentaire fermé** de $E_1$ est un sous-espace vectoriel **fermé** $E_2$ avec $E=E_1\oplus E_2$ (somme directe algébrique). Fermé dans un Banach, $E_2$ est lui-même un espace de Banach. En dimension finie, tout sous-espace est fermé. Une application dont la différentielle en $a$ est surjective est appelée **submersion** en $a$ ([[ch06-immersion-submersion-def]]).

## Énoncé

**Proposition (poly, Exercice VI.4.5, p. 124).** Soient $E$ et $F$ des espaces de Banach, $U$ un ouvert de $E$ et $f:U\to F$ une application de classe $C^1$. Supposons qu'il existe un point $a\in U$ tel que $df_a:E\to F$ soit surjective et supposons qu'il existe un supplémentaire fermé $E_2$ de $E_1=\ker df_a$ dans $E$. Alors $f(U)$ contient un voisinage ouvert de $f(a)$.

## Hypothèses

### H1 — $E$, $F$ de Banach et $f$ de classe $C^1$

**Rôle.** Ce sont les hypothèses de l'inversion locale, appliquée à $h(x_2)=f(a+x_2)$ sur un ouvert du Banach $E_2$ ; la complétude sert aussi au théorème d'isomorphisme de Banach.

**Si on la retire.** La seule différentiabilité en $a$ ne suffit pas, même en dimension $1$. Soit $f:\R\to\R$, $f(x)=x+x^2\,\mathbf 1_{\Q}(x)$ ($\mathbf 1_\Q$ indicatrice des rationnels). Comme $|f(x)-x|\le x^2$, $f$ est dérivable en $0$ avec $f'(0)=1$ (surjective, noyau $\{0\}$). Mais pour $j\ge1$, $q=10^{-2j}$ n'est pas atteint : un irrationnel $x$ donne $f(x)=x\ne q$ ; un rationnel $x$ avec $x+x^2=q$ imposerait que $\sqrt{1+4q}$ soit rationnel, c'est-à-dire que $10^{2j}+4$ soit un carré parfait, ce qui est faux car $(10^j)^2\lt10^{2j}+4\lt(10^j+1)^2$. Donc $f(\R)$ ne contient aucun voisinage de $f(0)=0$.

### H2 — $df_a$ surjective

**Rôle.** Elle fait de $df_a|_{E_2}:E_2\to F$ une bijection, donc un isomorphisme bicontinu.

**Si on la retire.** $f(x,y)=(x,y^2)$ sur $\R^2$, $a=(0,0)$ : $df_a=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ n'est pas surjective, et $f(\R^2)=\{(u,v):v\ge0\}$ ne contient aucun voisinage de $f(a)=(0,0)$.

### H3 — $\ker df_a$ admet un supplémentaire **fermé**

**Rôle.** Pouvoir restreindre $f$ à un espace **de Banach** ($E_2$ complet) sur lequel $df_a$ est un isomorphisme.

**Si on la retire.** Hypothèse de confort : elle est automatique en dimension finie, et plus généralement dès que $F$ est de dimension finie (alors $E_1$ est de codimension finie, et tout supplémentaire algébrique, de dimension finie, est fermé) ou que $E$ est un espace de Hilbert ($E_2=E_1^\perp$). Sans elle, la conclusion reste vraie (théorème de Lyusternik–Graves, qui repose sur le théorème de l'application ouverte), mais la preuve est différente et hors programme.

## Idée de la preuve

$df_a$ restreinte à $E_2$ est une bijection linéaire continue entre Banach, donc un isomorphisme bicontinu (Banach). L'inversion locale appliquée à $x_2\mapsto f(a+x_2)$ au voisinage de $0$ dans $E_2$ donne un voisinage ouvert $V_0$ de $f(a)$ entièrement atteint.

## Preuve

*Étape 1 : $df_a|_{E_2}$ est un isomorphisme bicontinu.* Notons $L=df_a|_{E_2}:E_2\to F$, linéaire continue. Elle est injective : si $x_2\in E_2$ et $L(x_2)=0$, alors $x_2\in E_1\cap E_2=\{0\}$. Elle est surjective : pour $y\in F$, il existe $x\in E$ avec $df_a(x)=y$ ; on écrit $x=x_1+x_2$ ($x_1\in E_1$, $x_2\in E_2$), et $y=df_a(x_1)+df_a(x_2)=L(x_2)$. Comme $E_2$ est fermé dans le Banach $E$, c'est un Banach ; $L$ est donc une bijection linéaire continue entre espaces de Banach, et sa réciproque est continue par le théorème d'isomorphisme de Banach ([[ch05-isomorphisme-banach]]).

*Étape 2 : restriction de $f$ à $a+E_2$.* Soit $\Omega=\{x_2\in E_2 : a+x_2\in U\}$ : c'est un ouvert de $E_2$ (image réciproque de l'ouvert $U$ par l'application continue $x_2\mapsto a+x_2$) qui contient $0$. Posons
$$
h:\Omega\to F,\qquad h(x_2)=f(a+x_2).
$$
$h$ est la composée de l'application affine continue $x_2\mapsto a+x_2$ (de $E_2$ dans $E$, de différentielle l'injection $E_2\hookrightarrow E$) et de $f$ : elle est $C^1$ et $dh_{x_2}=df_{a+x_2}|_{E_2}$ ([[ch05-restriction-sous-espace]], [[ch05-composition-differentielles]]). En particulier $dh_0=L$ est un isomorphisme bicontinu.

*Étape 3 : inversion locale.* Par le théorème d'inversion locale ([[ch06-inversion-locale]]) appliqué à $h$ en $0$, il existe un voisinage ouvert $\Omega_0$ de $0$ dans $\Omega$ et un voisinage ouvert $V_0$ de $h(0)=f(a)$ dans $F$ tels que $h:\Omega_0\to V_0$ soit un $C^1$-difféomorphisme ; en particulier $h(\Omega_0)=V_0$. Donc
$$
V_0=h(\Omega_0)=f(a+\Omega_0)\subset f(U),
$$
et $f(U)$ contient le voisinage ouvert $V_0$ de $f(a)$. $\square$

## Preuve à trous

Soit $L=df_a|_{E_2}:E_2\to F$. Elle est injective car <trou>$\ker L=E_1\cap E_2=\{0\}$</trou>, et surjective car <trou indice="décomposer un antécédent selon E = E_1 ⊕ E_2">si $df_a(x_1+x_2)=y$ avec $x_1\in E_1$, $x_2\in E_2$, alors $y=df_a(x_2)=L(x_2)$</trou>. Comme $E_2$ est fermé, c'est un Banach, et <trou indice="quel théorème donne la continuité de l'inverse ?">par le théorème d'isomorphisme de Banach, $L$ est un isomorphisme bicontinu</trou>.

On pose $h(x_2)=f(a+x_2)$ sur l'ouvert $\Omega=\{x_2\in E_2: a+x_2\in U\}$ de $E_2$ ; $h$ est $C^1$ et $dh_0=L$. Par <trou>l'inversion locale appliquée à $h$ en $0$ (dans le Banach $E_2$), $h$ envoie un voisinage ouvert $\Omega_0$ de $0$ sur un voisinage ouvert $V_0$ de $f(a)$</trou>, et $V_0=f(a+\Omega_0)\subset f(U)$. $\square$

## Exemples

* **Une fonction réelle.** $f(x,y,z)=x^2+y^2-z^2$ sur $\R^3$, $a=(1,0,0)$ : $df_a=(2,0,0)$ est surjective sur $\R$, $E_1=\{h_1=0\}$, et l'on peut prendre $E_2=\R e_1$. Alors $h(t)=f(1+t,0,0)=(1+t)^2$, avec $h'(0)=2\ne0$ : $h$ envoie $]-\frac12,\frac12[$ sur $]\frac14,\frac94[$, voisinage de $f(a)=1$ contenu dans $f(\R^3)$.
* **Une équation différentielle non linéaire** ([[ch06-edo-non-lineaire-surjectivite]]). $E=C^1([0,1];\R)$ avec $\norm{f}_1=\sup|f|+\sup|f'|$, $F=C^0([0,1];\R)$ avec $\norm{\cdot}_0=\sup|\cdot|$, et $\Psi(f)=f'+tf^2$. On a $\Psi(f)-\Psi(0)=f'+tf^2$ avec $\norm{tf^2}_0\le\norm{f}_1^2$, donc $d\Psi_0=\frac{d}{dt}$, surjective ($g=\frac{d}{dt}\int_0^tg$). Son noyau est formé des constantes, de supplémentaire fermé $E_2=\{f:f(0)=0\}$ (noyau de l'évaluation en $0$, continue). Conclusion : il existe $\eps\gt0$ tel que, pour tout $g$ avec $\norm{g}_0\lt\eps$, l'équation $f'+tf^2=g$ ait une solution $f\in E$.
* **Cas linéaire.** Si $f=T$ est linéaire continue surjective entre Banach, la conclusion est que $T(E)=F$ contient un voisinage de $0$ : c'est trivial ici, mais la version quantitative (l'image de la boule unité contient une boule) est le théorème de l'application ouverte ([[ch05-application-ouverte]]).

## Pièges

* > ⚠️ La conclusion porte sur un voisinage de $f(a)$ **dans $F$** : $f$ n'est pas pour autant injective (le noyau donne des directions où $f$ varie peu) ; ce n'est pas un difféomorphisme local, sauf si $\ker df_a=\{0\}$.
* > ⚠️ La surjectivité de $df_a$ est **suffisante, pas nécessaire** : $f(x)=x^3$ a $f'(0)=0$ mais $f(\R)=\R$.
* En dimension finie, $df_a$ surjective impose $\dim E\ge\dim F$ ; en appliquant le résultat en chaque point, une submersion sur un ouvert est une **application ouverte**.
* Dans l'inversion locale appliquée à $h$, l'espace de départ est $E_2$ (et non $E$) : c'est pour cela qu'on a besoin que $E_2$ soit **complet**, donc fermé.
* La forme normale des submersions (« à changement de variables près, $f$ est une projection ») est plus forte : c'est la question 2 du théorème du rang constant ([[ch06-theoreme-rang-constant]]).
