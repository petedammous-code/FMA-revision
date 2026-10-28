---
id: ch09-ex-tore
type: proposition
chapter: 9
title: Le tore $(\sqrt{x^2+y^2}-a)^2+z^2=r^2$
ref: Exemple IX.4.4
page: 154
importance: 2
depends: [ch09-sous-variete-equation-valeur-reguliere, ch09-point-critique-valeur-reguliere-def]
tags: [tore, valeur-reguliere, equation, surface, exemple-type]
---
## Intuition

> 💡 Le tore est la « chambre à air » obtenue en faisant tourner autour de l'axe vertical $D=\{x=y=0\}$ un cercle de rayon $r$ dont le centre est à distance $a$ de l'axe. Si $0<r<a$, le cercle ne touche pas l'axe et la surface obtenue est lisse partout.

Pour le **démontrer**, on écrit le tore comme une **fibre** $f^{-1}(\{r^2\})$ d'une fonction $f$ et on vérifie que $r^2$ est une **valeur régulière** de $f$, c'est-à-dire que $df_p$ est surjective (ici : non nulle, puisque $f$ est à valeurs réelles) en tout point $p$ de la fibre ([[ch09-point-critique-valeur-reguliere-def]]). Le théorème de la fibre régulière ([[ch09-sous-variete-equation-valeur-reguliere]]) fait le reste. C'est **l'exemple type** de la méthode « $df_p\neq0$ sur la fibre ».

Notation : $\rho=\sqrt{x^2+y^2}$ est la distance du point $(x,y,z)$ à l'axe $D$ ; l'équation dit que le point $(\rho,z)$ du demi-plan méridien est sur le cercle de centre $(a,0)$ et de rayon $r$.

## Énoncé

**Proposition (poly, Exemple IX.4.4, p. 154).** Soient $a$ et $r$ deux réels tels que $0<r<a$, et soit $S$ le tore d'axe $D=\{x=y=0\}$ dont les distances respectivement minimale et maximale à l'axe sont $a-r$ et $a+r$, défini par l'équation
$$
\left(\sqrt{x^2+y^2}-a\right)^2+z^2=r^2 .
$$
Alors $S\cap D=\emptyset$, $S=f^{-1}(\{r^2\})$ où
$$
f : \R^3\setminus D\to\R,\qquad f(x,y,z)=\left(\sqrt{x^2+y^2}-a\right)^2+z^2,
$$
la fonction $f$ est différentiable sur l'ouvert $\R^3\setminus D$ avec
$$
\frac{\partial f}{\partial x}=\frac{2x\left(\sqrt{x^2+y^2}-a\right)}{\sqrt{x^2+y^2}},\quad\frac{\partial f}{\partial y}=\frac{2y\left(\sqrt{x^2+y^2}-a\right)}{\sqrt{x^2+y^2}},\quad\frac{\partial f}{\partial z}=2z,
$$
$df_p$ ne s'annule en aucun point $p\in S$, et donc $S$ est une sous-variété de $\R^3$ (de dimension $2$, de classe $C^\infty$). On note $\mathbb T^2$ le tore obtenu en prenant $a=2$ et $r=1$.

## Hypothèses

### H1 — $0<r<a$

**Rôle.** Elle sert deux fois. (i) $S\cap D=\emptyset$ : sur l'axe, $\rho=0$ et l'équation devient $a^2+z^2=r^2$, impossible car $r^2<a^2$ ; donc $S$ est contenu dans l'ouvert $\R^3\setminus D$ où $f$ est $C^\infty$ (la racine carrée n'est pas différentiable en $0$). (ii) En un point de $S$ avec $z=0$, on a $\rho=a\pm r$, qui est $\neq a$ (car $r>0$) et $\neq0$ : c'est ce qui rend $\partial f/\partial x$ ou $\partial f/\partial y$ non nulle.

**Si on la retire.**
* **$r=a$ (tore « à collier nul »).** L'ensemble $S_a=\{(\rho-a)^2+z^2=a^2\}\subset\R^3$ contient l'origine ($\rho=0$, $z=0$). Il n'est pas une sous-variété de dimension $2$ en $0$. En effet, l'équation équivaut à $\rho^2+z^2=2a\rho$ ; près de $0$, elle s'écrit $\rho=a-\sqrt{a^2-z^2}$ (l'autre branche $\rho=a+\sqrt{a^2-z^2}\approx 2a$ est loin). Un point de $S_a$ proche de $0$ avec $z=0$ a $\rho=0$, donc est l'origine : $S_a\cap B(0,\eps)\setminus\{0\}$ est réunion des deux ouverts disjoints non vides $\{z>0\}$ et $\{z<0\}$ (non vides : ils contiennent $(a-\sqrt{a^2-z^2},0,z)$ pour $z$ petit $\neq0$). Si $x:U\to V\cap S_a$ était un paramétrage en $0=x(q)$, en restreignant $x$ à un petit disque $U_0$ centré en $q$ on aurait $x(U_0)\subset B(0,\eps)$ voisinage de $0$ dans $S_a$, et $x(U_0\setminus\{q\})=x(U_0)\setminus\{0\}$ serait connexe (image continue d'un disque épointé, connexe) tout en rencontrant $\{z>0\}$ et $\{z<0\}$ : contradiction.
* **$r=0$.** L'ensemble $\{(\rho-a)^2+z^2=0\}$ est le cercle horizontal $\{\rho=a,z=0\}$ : c'est une sous-variété, mais **de dimension $1$**, et $0$ est une valeur **critique** de $f$ (sur ce cercle, $\rho=a$ et $z=0$ annulent les trois dérivées partielles). La proposition ne s'applique pas : la régularité de la valeur est suffisante, pas nécessaire.
* **$r>a$.** Sur $f^{-1}(\{r^2\})\subset\R^3\setminus D$ : si $z=0$, $(\rho-a)^2=r^2$ force $\rho=a+r$ (car $a-r<0$), donc $\rho\neq a$ et $df\neq0$ ; si $z\neq0$, $\partial f/\partial z\neq0$. C'est donc encore une sous-variété, mais elle n'est plus fermée dans $\R^3$ : son adhérence contient les deux points $(0,0,\pm\sqrt{r^2-a^2})$ de l'axe. Si on les rajoute, l'ensemble obtenu a deux pointes coniques (près de $(0,0,z_0)$, $z_0=\sqrt{r^2-a^2}$, il s'écrit $z=h(\rho)$ avec $h(0)=z_0$, $h'(0)=a/z_0\neq0$) : toute courbe $C^1$ tracée dedans passant par la pointe y a une vitesse nulle (sinon $\alpha_3(t)-z_0\sim \frac{a}{z_0}\abs{t}\,\norm{(\alpha_1',\alpha_2')(0)}$ ne serait pas dérivable en $0$, et si $(\alpha_1',\alpha_2')(0)=0$ alors $\alpha_3'(0)=0$), ce qui est impossible pour une surface, dont l'espace tangent est de dimension $2$ ([[ch09-espace-tangent-image-dx]]).

## Idée de la preuve

On écrit $S=f^{-1}(\{r^2\})$ avec $f$ lisse sur l'ouvert $\R^3\setminus D$ (qui contient $S$), on calcule le gradient de $f$ et on montre qu'il ne s'annule pas sur $S$ en distinguant $z\neq0$ et $z=0$ ; on conclut par le théorème de la fibre régulière.

## Preuve

**1. $S$ évite l'axe.** Si $(0,0,z)\in S$, alors $a^2+z^2=r^2$, donc $z^2=r^2-a^2<0$ : impossible. Ainsi $S\subset\R^3\setminus D$ et $S=f^{-1}(\{r^2\})$ où $f$ est définie sur l'ouvert $\R^3\setminus D$ (complémentaire du fermé $D$).

**2. Régularité de $f$.** Sur $\R^3\setminus D$, $(x,y)\neq(0,0)$, donc $\rho=\sqrt{x^2+y^2}$ est $C^\infty$ (composée de $x^2+y^2>0$ et de $\sqrt{\cdot}$, $C^\infty$ sur $]0,+\infty[$), avec $\partial\rho/\partial x=x/\rho$, $\partial\rho/\partial y=y/\rho$. Donc $f=(\rho-a)^2+z^2$ est $C^\infty$ et, par la règle de la chaîne,
$$
\frac{\partial f}{\partial x}=2(\rho-a)\frac{x}{\rho},\qquad \frac{\partial f}{\partial y}=2(\rho-a)\frac{y}{\rho},\qquad \frac{\partial f}{\partial z}=2z .
$$

**3. $df_p\neq0$ pour $p=(x,y,z)\in S$.** Comme $f$ est à valeurs dans $\R$, « $df_p$ surjective » équivaut à « $df_p\neq0$ ».
* Si $z\neq0$, alors $\partial f/\partial z(p)=2z\neq0$.
* Si $z=0$, l'équation donne $(\rho-a)^2=r^2$, donc $\rho=a\pm r$. Comme $r>0$, $\rho\neq a$ ; comme $r<a$, $\rho>0$ donc $(x,y)\neq(0,0)$. Alors $\frac{2(\rho-a)}{\rho}\neq0$ et l'un des deux nombres $x,y$ est non nul, donc $\partial f/\partial x(p)$ ou $\partial f/\partial y(p)$ est non nul.

Ainsi $r^2$ est une valeur régulière de $f : \R^3\setminus D\to\R$ ([[ch09-point-critique-valeur-reguliere-def]]).

**4. Conclusion.** Par la Proposition IX.4.1 (2) ([[ch09-sous-variete-equation-valeur-reguliere]]) appliquée avec $N=3$, $N-m=1$, $V=\R^3\setminus D$ et $k=\infty$, $S=f^{-1}(\{r^2\})$ est une sous-variété de dimension $m=2$ et de classe $C^\infty$ de $\R^3$. $\square$

## Preuve à trous

On remarque d'abord que <trou indice="que donne l'équation sur l'axe x = y = 0 ?">$S\cap D=\emptyset$, car sur l'axe l'équation devient $a^2+z^2=r^2$, impossible puisque $r<a$</trou> ; ainsi $S=f^{-1}(\{r^2\})$ avec $f$ de classe $C^\infty$ sur l'ouvert $\R^3\setminus D$, où $\rho=\sqrt{x^2+y^2}$ est lisse.

Les dérivées partielles sont $\partial_xf=2(\rho-a)x/\rho$, $\partial_yf=2(\rho-a)y/\rho$, $\partial_zf=2z$. Soit $p\in S$. Si $z\neq0$, $\partial_zf(p)\neq0$. Si $z=0$, <trou indice="résoudre l'équation en ρ quand z = 0">$(\rho-a)^2=r^2$ donne $\rho=a\pm r$, qui est $\neq a$ (car $r>0$) et $>0$ (car $r<a$) ; donc $\rho-a\neq0$ et $(x,y)\neq(0,0)$, et $\partial_xf(p)$ ou $\partial_yf(p)$ est non nul</trou>.

Donc <trou indice="quelle propriété de la valeur r² a-t-on établie ?">$r^2$ est une valeur régulière de $f$</trou>, et par <trou>le théorème de la fibre régulière (Proposition IX.4.1)</trou>, $S$ est une sous-variété de dimension $3-1=2$ de $\R^3$. $\square$

## Exemples

* **Le tore $\mathbb T^2$ ($a=2$, $r=1$) en quelques points.** En $p=(3,0,0)$ : $\rho=3$, $\partial_xf=2\cdot1\cdot3/3=2$, $\partial_yf=0$, $\partial_zf=0$, donc $df_p(h)=2h_1$. En $p=(2,0,1)$ : $\rho=2=a$, donc $\partial_xf=\partial_yf=0$ mais $\partial_zf=2$, $df_p(h)=2h_3$. En $p=(1,0,0)$ (cercle intérieur) : $\partial_xf=2\cdot(-1)\cdot1/1=-2$. Le gradient ne s'annule jamais, mais ce n'est jamais **la même** dérivée partielle qui sauve la mise : il faut bien la discussion $z\neq0$ / $z=0$.
* **Un paramétrage explicite.** $X(\theta,\varphi)=\big((a+r\cos\varphi)\cos\theta,\ (a+r\cos\varphi)\sin\theta,\ r\sin\varphi\big)$. On a $\rho=a+r\cos\varphi$ (positif car $r<a$), donc $(\rho-a)^2+z^2=r^2\cos^2\varphi+r^2\sin^2\varphi=r^2$ : $X$ est à valeurs dans $S$, et $X$ est surjective sur $S$ (tout point de $S$ a des coordonnées cylindriques $(\rho,\theta,z)$ avec $(\rho-a,z)$ sur le cercle de rayon $r$). Ses dérivées partielles $X_\theta=(a+r\cos\varphi)(-\sin\theta,\cos\theta,0)$ et $X_\varphi=r(-\sin\varphi\cos\theta,-\sin\varphi\sin\theta,\cos\varphi)$ sont non nulles et orthogonales, donc $dX$ est injective. Restreint à $]-\pi,\pi[^2$, $X$ est un homéomorphisme sur l'ouvert de $S$ privé des deux cercles $\{\theta=\pi\}$ et $\{\varphi=\pi\}$ (inverse continu : $\theta=2\arctan\frac{y}{\rho+x}$, $\varphi=2\arctan\frac{z}{r+\rho-a}$, par la formule $\tan\frac t2=\frac{\sin t}{1+\cos t}$) : c'est un paramétrage local.
* **Les quadriques comme variante.** Même méthode pour la sphère $\{\norm{x}^2=1\}$ ($df_x(v)=2\langle x,v\rangle\neq0$ si $x\neq0$, [[ch09-ex-sphere]]) et pour les quadriques $\sum a_ix_i^2=1$ ([[ch09-ex-quadriques]]).

## Pièges

* > ⚠️ Ne pas oublier de vérifier que l'ensemble **évite les points où $f$ n'est pas différentiable** (ici l'axe $D$, à cause de $\sqrt{x^2+y^2}$). On choisit l'ouvert de définition $V=\R^3\setminus D$ en conséquence.
* « $df_p\neq0$ » doit être vérifié **en tout point de la fibre** $f^{-1}(\{r^2\})$, pas partout : $f$ a des points critiques hors de $S$ (le cercle $\{\rho=a, z=0\}$, où $f=0$).
* Pour une fonction à valeurs réelles, « valeur régulière » $\iff$ $df_p\neq0$ sur la fibre $\iff$ gradient non nul ; pour une fonction à valeurs dans $\R^{N-m}$, il faut la **surjectivité** de $df_p$ (rang $N-m$).
* La dimension se lit : $N$ moins le nombre d'équations scalaires indépendantes, ici $3-1=2$.
* Le cas limite $r=a$ n'est **pas** une sous-variété (point singulier à l'origine), et le cas $r=0$ donne une sous-variété de dimension $1$ obtenue à une valeur critique : la condition de valeur régulière est suffisante, non nécessaire.
