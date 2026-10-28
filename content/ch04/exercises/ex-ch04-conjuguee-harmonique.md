---
id: ex-ch04-conjuguee-harmonique
type: exercise
chapters: [4, 1, 2]
title: Retrouver une fonction holomorphe à partir de sa partie réelle
source: "Inventé (sur un thème classique : conjuguée harmonique)"
difficulty: 1
time: 15
tools: [ch04-harmonique-def, ch04-harmonique-reelle-partie-reelle, ch01-cauchy-riemann, ch01-integrale-primitive, ch02-primitive-simplement-connexe]
---
## Énoncé

On identifie $\R^2$ à $\C$ par $(x,y)\mapsto z=x+iy$. Soit $u:\R^2\to\R$ définie par
$$
u(x,y)=e^{x}\big(x\cos y-y\sin y\big).
$$
1. Vérifier que $u$ est harmonique sur $\C$.
2. Déterminer **toutes** les fonctions $F\in\Hol(\C)$ telles que $\Re(F)=u$ ; expliciter celle qui vérifie $F(0)=0$.
3. Existe-t-il une fonction $F$ holomorphe sur $\C^\times=\C\setminus\{0\}$ telle que $\Re F(z)=\log(x^2+y^2)$ pour tout $z\in\C^\times$ ? Et sur $\C\setminus\R_-$ ?

## Indices

### Indice 1
Question 1 : calcul direct de $\partial^2u/\partial x^2+\partial^2u/\partial y^2$. Question 2 : si $F=u+iv$ est holomorphe, sa dérivée $F'$ ne dépend que de $u$ ; laquelle ?

### Indice 2
Conditions de Cauchy réelles : $F'=\dfrac{\partial F}{\partial x}=u_x+iv_x=u_x-iu_y$. Calculer $u_x-iu_y$ et l'écrire comme une fonction de $z$ seulement.

### Indice 3
On trouve $u_x-iu_y=(z+1)e^z$. Primitive ? Puis comparer les parties réelles pour fixer la constante. Pour la question 3, faire le même calcul de $F'$ et intégrer $F'$ sur le cercle unité.

## Corrigé

On note $u_x=\partial u/\partial x$, $u_{xx}=\partial^2u/\partial x^2$, etc.

**1.** $u$ est de classe $C^\infty$ sur $\R^2$ (produit et somme de fonctions $C^\infty$). On calcule
$$
\begin{aligned}
u_x &= e^x\big((x+1)\cos y-y\sin y\big), & u_{xx}&=e^x\big((x+2)\cos y-y\sin y\big),\\
u_y &= -e^x\big((x+1)\sin y+y\cos y\big), & u_{yy}&=-e^x\big((x+2)\cos y-y\sin y\big).
\end{aligned}
$$
(Pour $u_{yy}$ : la dérivée en $y$ de $(x+1)\sin y+y\cos y$ est $(x+1)\cos y+\cos y-y\sin y=(x+2)\cos y-y\sin y$.) Donc $\Delta u=u_{xx}+u_{yy}=0$ : $u$ est harmonique sur $\C$ au sens de [[ch04-harmonique-def]].

**2.** *Existence a priori.* $\C$ est étoilé, donc simplement connexe, et $u$ est harmonique réelle : d'après [[ch04-harmonique-reelle-partie-reelle]] (Corollaire IV.2.4, p. 77), il existe $F\in\Hol(\C)$ avec $\Re F=u$, unique à une constante imaginaire pure près. Déterminons-la explicitement.

*Condition nécessaire.* Soit $F=u+iv\in\Hol(\C)$ avec $v=\Im F$. D'après les conditions de Cauchy réelles ([[ch01-cauchy-riemann]]) $u_x=v_y$, $u_y=-v_x$, et $F'(z)=\dfrac{\partial F}{\partial x}(z)=u_x+iv_x=u_x-iu_y$. Avec les calculs de la question 1,
$$
u_x-iu_y=e^x\Big[(x+1)\cos y-y\sin y+i\big((x+1)\sin y+y\cos y\big)\Big].
$$
Or $(x+1+iy)(\cos y+i\sin y)=(x+1)\cos y-y\sin y+i\big((x+1)\sin y+y\cos y\big)$, et $e^x(\cos y+i\sin y)=e^z$. Donc
$$
F'(z)=(z+1)e^z\qquad(z\in\C).
$$
La fonction $z\mapsto ze^z$ a pour dérivée $e^z+ze^z=(z+1)e^z$ ; ainsi $(F-ze^z)'=0$ sur $\C$ connexe, et $F(z)=ze^z+c$ avec $c\in\C$ constante.

*Condition suffisante et constante.* On calcule $\Re(ze^z)=\Re\big((x+iy)e^x(\cos y+i\sin y)\big)=e^x(x\cos y-y\sin y)=u$. Donc $\Re F=u+\Re c$, et $\Re F=u$ si et seulement si $\Re c=0$.

**Conclusion :** les solutions sont exactement les $F(z)=ze^z+i\beta$, $\beta\in\R$ ; celle qui vérifie $F(0)=0$ est $F(z)=ze^z$ (et $\Im F=v=e^x(x\sin y+y\cos y)$ est la conjuguée harmonique de $u$ nulle en $0$).

**3.** Posons $w(x,y)=\log(x^2+y^2)=2\log|z|$, de classe $C^\infty$ sur $\C^\times$ et harmonique : $w_x=\frac{2x}{x^2+y^2}$, $w_{xx}=\frac{2(y^2-x^2)}{(x^2+y^2)^2}$ et, par symétrie des rôles, $w_{yy}=\frac{2(x^2-y^2)}{(x^2+y^2)^2}$, donc $\Delta w=0$.

*Sur $\C^\times$ : non.* Supposons $F\in\Hol(\C^\times)$ avec $\Re F=w$. Comme à la question 2, $F'=w_x-iw_y=\dfrac{2x-2iy}{x^2+y^2}=\dfrac{2\bar z}{|z|^2}=\dfrac{2}{z}$. Mais $F'$ admet la primitive holomorphe $F$ sur $\C^\times$, donc son intégrale sur tout lacet de $\C^\times$ est nulle ([[ch01-integrale-primitive]]) ; or sur le cercle unité $\gamma(t)=e^{it}$, $t\in[0,2\pi]$ :
$$
\int_\gamma \frac{2}{z}\,dz=\int_0^{2\pi}\frac{2}{e^{it}}\,ie^{it}\,dt=4i\pi\neq0.
$$
Contradiction : aucune telle $F$ n'existe.

*Sur $\C\setminus\R_-$ : oui.* $F(z)=2\,\mathrm{Log}(z)$ convient, puisque $\Re\,\mathrm{Log}(z)=\log|z|$ ([[ch02-logarithme-determination-principale-def]]) ; les solutions sont $2\,\mathrm{Log}(z)+i\beta$, $\beta\in\R$ ($\C\setminus\R_-$ est étoilé par rapport à $1$, donc connexe et simplement connexe).

## Pièges et variantes

* **Oublier la constante imaginaire** : $\Re F$ ne détermine $F$ qu'à $i\beta$ près, $\beta\in\R$ ; une constante **réelle** ajoutée à $F$ change $\Re F$.
* **Confondre $u_x-iu_y$ et $u_x+iu_y$** : c'est $F'=u_x-iu_y=2\,\partial u/\partial z$ (et $u_x+iu_y=\overline{F'}$, l'affixe du gradient de $u$).
* **Appliquer le Corollaire IV.2.4 hors de son domaine** : la question 3 montre que la simple connexité n'est pas décorative ; $\log|z|$ est harmonique sur $\C^\times$ sans être la partie réelle d'une fonction holomorphe sur $\C^\times$.
* Variante : $u(x,y)=x^3-3xy^2+2y$ ; on trouve $u_x-iu_y=3x^2-3y^2+6ixy-2i=3z^2-2i$, d'où $F(z)=z^3-2iz+i\beta$.
* Variante : pour quelles valeurs de $a\in\R$ la fonction $x^3+axy^2$ est-elle harmonique ? ($\Delta=6x+2ax$, donc $a=-3$, et c'est $\Re(z^3)$.)
