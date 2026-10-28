---
id: ex-ch04-partie-reelle-conjuguee
type: exercise
chapters: [4, 1, 2]
title: Retrouver une fonction holomorphe à partir de sa partie réelle
source: "Classique (conjuguée harmonique ; contre-exemple de ln|z| sur le plan épointé)"
difficulty: 1
time: 15
tools: [ch04-harmonique-def, ch04-holomorphe-implique-harmonique, ch04-harmonique-reelle-partie-reelle, ch04-harmonique-decomposition-locale, ch01-cauchy-riemann, ch01-integrale-primitive, ch02-logarithme-determination-principale-def]
---
## Énoncé

On identifie $\C$ à $\R^2$ en écrivant $z=x+iy$.

1. Soit $u:\R^2\to\R$ définie par $u(x,y)=x^3-3xy^2+e^{-y}\sin x$. Montrer que $u$ est harmonique sur $\R^2$, puis déterminer **toutes** les fonctions $F\in\Hol(\C)$ telles que $\Re(F)=u$.
2. Soit $v:\C^*\to\R$ définie par $v(x,y)=\ln(x^2+y^2)$.
   * (a) Montrer que $v$ est harmonique sur $\C^*$.
   * (b) Existe-t-il $F\in\Hol(\C\setminus\R_-)$ telle que $\Re(F)=v$ ? (Ici $\R_-=\,]-\infty,0]$.)
   * (c) Existe-t-il $F\in\Hol(\C^*)$ telle que $\Re(F)=v$ ?
3. Montrer que $v$ est néanmoins, au voisinage de chaque point de $\C^*$, la partie réelle d'une fonction holomorphe. Quelle hypothèse d'un théorème du cours la question 2(c) montre-t-elle indispensable ?

## Indices

### Indice 1
Si $F=u+iw$ est holomorphe, les conditions de Cauchy–Riemann permettent d'exprimer $F'$ à l'aide des seules dérivées partielles de $u$. Reconnaître ensuite une expression en $z$.

### Indice 2
Pour $F=u+iw$ holomorphe : $F'=\partial_xF=u_x+iw_x=u_x-iu_y$ (car $w_x=-u_y$). L'existence d'un $F$ est garantie sur $\C$, qui est simplement connexe ([[ch04-harmonique-reelle-partie-reelle]]) ; l'unicité est « à constante imaginaire pure près ».

### Indice 3
Pour 2(c) : si $F$ existait, on aurait $F'=v_x-iv_y=\dfrac{2(x-iy)}{x^2+y^2}=\dfrac{2}{z}$. Une dérivée a une intégrale nulle sur tout lacet. Calculer $\displaystyle\int_{C(0,1)}\frac{2}{z}\,dz$.

## Corrigé

**Rappel.** Une fonction $h$ de classe $C^2$ est harmonique si $\Delta h=h_{xx}+h_{yy}=0$ ([[ch04-harmonique-def]], poly, Définition IV.2.1, p. 76). Si $F=u+iw$ est holomorphe, les conditions de Cauchy réelles $u_x=w_y$, $u_y=-w_x$ et $F'=\partial F/\partial x$ ([[ch01-cauchy-riemann]], poly, Corollaire I.2.4, p. 8) donnent
$$
F'=u_x+iw_x=u_x-iu_y. \qquad (\star)
$$

**1.** $u$ est $C^\infty$ sur $\R^2$ et
$$
u_x=3x^2-3y^2+e^{-y}\cos x,\quad u_{xx}=6x-e^{-y}\sin x,\qquad u_y=-6xy-e^{-y}\sin x,\quad u_{yy}=-6x+e^{-y}\sin x,
$$
donc $\Delta u=0$ : $u$ est harmonique sur $\R^2$.

*Existence.* $\C$ est simplement connexe (étoilé) et $u$ est harmonique réelle : d'après [[ch04-harmonique-reelle-partie-reelle]] (poly, Corollaire IV.2.4, p. 77), il existe $F\in\Hol(\C)$ avec $\Re(F)=u$, unique à une constante additive imaginaire pure près.

*Calcul.* Soit $F$ une telle fonction. Par $(\star)$,
$$
F'(z)=u_x-iu_y=3(x^2-y^2)+6ixy+e^{-y}(\cos x+i\sin x)=3(x+iy)^2+e^{-y}e^{ix}=3z^2+e^{iz},
$$
car $e^{iz}=e^{i(x+iy)}=e^{-y}e^{ix}$. Une primitive de $3z^2+e^{iz}$ sur $\C$ est $z^3-ie^{iz}$ ; deux primitives sur l'ouvert connexe $\C$ diffèrent d'une constante, donc $F(z)=z^3-ie^{iz}+C$ avec $C\in\C$. Or
$$
\Re(z^3)=x^3-3xy^2,\qquad \Re(-ie^{iz})=\Re\big(-ie^{-y}(\cos x+i\sin x)\big)=e^{-y}\sin x,
$$
donc $\Re(F)=u+\Re(C)$, et $\Re(F)=u$ si et seulement si $\Re(C)=0$. **Conclusion :**
$$
F(z)=z^3-ie^{iz}+i\beta,\qquad \beta\in\R .
$$

**2.(a)** Sur $\C^*$, $v$ est $C^\infty$, $v_x=\dfrac{2x}{x^2+y^2}$ et $v_{xx}=\dfrac{2(x^2+y^2)-4x^2}{(x^2+y^2)^2}=\dfrac{2(y^2-x^2)}{(x^2+y^2)^2}$ ; par symétrie des rôles, $v_{yy}=\dfrac{2(x^2-y^2)}{(x^2+y^2)^2}$. Donc $\Delta v=0$.

**2.(b)** Oui. Sur $\C\setminus\R_-$, la détermination principale du logarithme vérifie $\mathrm{Log}(z)=\ln|z|+i\,\mathrm{Arg}(z)$ ([[ch02-logarithme-determination-principale-def]], poly, p. 56). Donc $F=2\,\mathrm{Log}$ est holomorphe sur $\C\setminus\R_-$ et $\Re(F)=2\ln|z|=\ln(x^2+y^2)=v$. (C'est cohérent avec le Corollaire IV.2.4 : $\C\setminus\R_-$ est étoilé par rapport à $1$, donc simplement connexe.)

**2.(c)** Non. Supposons par l'absurde qu'il existe $F\in\Hol(\C^*)$ avec $\Re(F)=v$. Par $(\star)$, pour tout $z\in\C^*$,
$$
F'(z)=v_x-iv_y=\frac{2x-2iy}{x^2+y^2}=\frac{2\bar z}{|z|^2}=\frac{2}{z}.
$$
Ainsi $z\mapsto 2/z$, continue sur $\C^*$, admet la primitive holomorphe $F$ sur $\C^*$. Le cercle $C(0,1)$ parcouru une fois dans le sens direct est un lacet de $\C^*$, donc ([[ch01-integrale-primitive]], poly, Théorème I.5.9, p. 17) $\int_{C(0,1)}\frac{2}{z}\,dz=0$. Mais, avec la paramétrisation $z=e^{it}$ ([[ch01-integrale-sur-cercle]], poly, Exemple I.5.5, p. 16),
$$
\int_{C(0,1)}\frac{2}{z}\,dz=i\int_0^{2\pi}\frac{2}{e^{it}}\,e^{it}\,dt=4i\pi\neq 0 .
$$
Contradiction : aucune fonction holomorphe sur $\C^*$ n'a $v$ pour partie réelle.

**3.** Soit $z_0\in\C^*$ et $D=D(z_0,|z_0|)\subset\C^*$. Le disque $D$ est simplement connexe, donc (Corollaire IV.2.4 appliqué à $v|_D$, ou directement [[ch04-harmonique-decomposition-locale]], poly, Remarque IV.2.3, p. 77) il existe $F_D\in\Hol(D)$ avec $\Re(F_D)=v$ sur $D$. Explicitement : $D$ ne contient pas $0$, donc est contenu dans un demi-plan ouvert $\{z:\Re(z\,\bar z_0)>0\}$ ; sur ce demi-plan, $z\mapsto 2\,\mathrm{Log}(z/z_0)+v(z_0)$ convient.

La question 2(c) montre que l'hypothèse **« $\Omega$ simplement connexe »** du Théorème IV.2.2 et du Corollaire IV.2.4 ne peut pas être supprimée : sur $\C^*$, $v$ est harmonique réelle mais n'est la partie réelle d'aucune fonction holomorphe globale. L'obstruction est exactement la « période » $\int_{C(0,1)}F'\,dz=4i\pi$ de la conjuguée harmonique $2\arg z$, qui augmente de $4\pi$ à chaque tour.

## Pièges et variantes

* Écrire $F'=u_x+iu_y$ (erreur de signe) : on trouverait $3\bar z^2+\dots$, qui n'est pas holomorphe — c'est un bon signal d'alerte. La bonne formule est $F'=u_x-iu_y$.
* Oublier la constante : la réponse à « toutes les $F$ » est une famille $F_0+i\beta$, $\beta\in\R$, pas une seule fonction ; une constante réelle non nulle changerait la partie réelle.
* Croire que « harmonique » suffit pour être partie réelle d'une holomorphe : c'est vrai **localement** (Remarque IV.2.3), **globalement** seulement sur un ouvert simplement connexe.
* Variante : $v(x,y)=\ln\big((x-1)^2+y^2\big)-\ln\big((x+1)^2+y^2\big)$ sur $\C\setminus\{\pm1\}$ (non simplement connexe). Là, $F'=\frac{2}{z-1}-\frac{2}{z+1}$, et l'intégrale sur un lacet entourant $1$ seulement vaut $4i\pi\neq0$ : pas de $F$ globale sur $\C\setminus\{\pm1\}$. En revanche, sur $\C\setminus[-1,1]$, l'intégrale sur tout lacet vaut $4i\pi(\Ind_1(\gamma)-\Ind_{-1}(\gamma))=0$ (un lacet de $\C\setminus[-1,1]$ a le même indice en $1$ et en $-1$, l'indice étant constant sur le segment connexe $[-1,1]$) : $F=2\log\frac{z-1}{z+1}$ existe sur $\C\setminus[-1,1]$ bien que cet ouvert ne soit pas simplement connexe.
