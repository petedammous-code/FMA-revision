---
id: ch05-integrale-fonctions-reglees
type: definition
chapter: 5
title: Intégrale d'une fonction réglée à valeurs dans un espace de Banach ; majoration $\|\int_a^b f\|\le(b-a)\|f\|_0$
ref: "non numéroté, section V.4.2, p. 105"
page: 105
importance: 1
depends: []
tags: [integrale, fonctions-reglees, banach, escalier, completude]
---
## Intuition

> 💡 Pour intégrer une fonction à valeurs dans un espace vectoriel $F$ (vecteurs, matrices, fonctions...), on fait comme pour les aires : on approche $f$ par des fonctions **en escalier** (constantes par morceaux), dont l'intégrale est une somme finie « longueur du morceau $\times$ valeur », puis on passe à la limite. Pour que la limite existe **dans $F$**, il faut que $F$ soit **complet** (de Banach) : les intégrales approchées forment une suite de Cauchy, et l'on a besoin que les suites de Cauchy convergent.

Les fonctions qu'on peut traiter ainsi sont les fonctions **réglées** : limites uniformes de fonctions en escalier. Elles incluent toutes les fonctions continues sur un segment, ce qui suffit pour ce cours. Un **espace de Banach** est un espace vectoriel normé complet.

## Énoncé

**Définition (poly, section V.4.2, p. 105).** Soient $a<b$ deux réels et $F$ un espace de Banach.

* Une **subdivision** de $[a;b]$ est une suite finie $a=t_0<t_1<\cdots<t_n=b$. Une fonction $\varphi:[a;b]\to F$ est **en escalier** s'il existe une subdivision et des vecteurs $c_1,\dots,c_n\in F$ tels que $\varphi(t)=c_k$ pour tout $t\in\,]t_{k-1};t_k[$ (les valeurs aux points $t_k$ sont quelconques). Son intégrale est
$$
\int_a^b\varphi(t)\,dt=\sum_{k=1}^n(t_k-t_{k-1})\,c_k\in F,
$$
qui ne dépend pas de la subdivision adaptée choisie (raffiner une subdivision ne change pas la somme).
* Une fonction $f:[a;b]\to F$ est **réglée** si elle est limite uniforme de fonctions en escalier : il existe des fonctions en escalier $\varphi_p$ telles que $\|f-\varphi_p\|_0\to0$, où $\|f\|_0=\sup_{t\in[a;b]}\|f(t)\|_F$.
* L'**intégrale** d'une fonction réglée est alors
$$
\int_a^bf(t)\,dt=\lim_{p\to\infty}\int_a^b\varphi_p(t)\,dt,
$$
limite qui existe parce que $F$ est complet et qui ne dépend pas de la suite $(\varphi_p)$ choisie.

Les propriétés usuelles (relation de Chasles, linéarité, etc.) sont immédiates. Avec la convention $\int_b^af=-\int_a^bf$ et $\int_a^af=0$, Chasles $\int_\alpha^\gamma f=\int_\alpha^\beta f+\int_\beta^\gamma f$ vaut pour tous $\alpha,\beta,\gamma\in[a;b]$. Les **fonctions continues sont réglées**, et
$$
\Big\|\int_a^bf(t)\,dt\Big\|_F\le(b-a)\,\|f\|_0,\qquad\text{où }\|f\|_0=\sup_{t\in[a;b]}\|f(t)\|_F.
$$

*Justifications (non détaillées dans le poly).*
1. *Majoration pour une fonction en escalier* : $\big\|\sum_k(t_k-t_{k-1})c_k\big\|_F\le\sum_k(t_k-t_{k-1})\|c_k\|_F\le(b-a)\|\varphi\|_0$.
2. *Existence de la limite* : par linéarité et le point 1, $\big\|\int\varphi_p-\int\varphi_q\big\|_F\le(b-a)\|\varphi_p-\varphi_q\|_0\le(b-a)\big(\|\varphi_p-f\|_0+\|f-\varphi_q\|_0\big)$, donc $\big(\int\varphi_p\big)_p$ est de Cauchy dans $F$, et converge car **$F$ est complet**.
3. *Indépendance* : si $(\psi_p)$ est une autre suite en escalier convergeant uniformément vers $f$, la suite alternée $\varphi_1,\psi_1,\varphi_2,\psi_2,\dots$ converge aussi uniformément vers $f$, donc ses intégrales convergent : les deux limites sont égales.
4. *Majoration pour $f$ réglée* : passer à la limite dans $\|\int\varphi_p\|\le(b-a)\|\varphi_p\|_0$, en notant que $\|\varphi_p\|_0\to\|f\|_0$.
5. *Les fonctions continues sont réglées* : si $f$ est continue sur le compact $[a;b]$, elle y est uniformément continue (Heine) ; pour $\eps>0$, soit $\delta>0$ tel que $|s-t|\le\delta\Rightarrow\|f(s)-f(t)\|_F\le\eps$. Avec une subdivision de pas $\le\delta$, la fonction en escalier $\varphi$ égale à $f(t_{k-1})$ sur $[t_{k-1};t_k[$ (et $\varphi(b)=f(b)$) vérifie $\|f-\varphi\|_0\le\eps$.

## Hypothèses

### H1 — $F$ complet (espace de Banach)

**Rôle.** C'est exactement ce qui assure l'existence de la limite des intégrales des fonctions en escalier (point 2). Le poly le souligne : c'est « dans cette étape que l'hypothèse de complétude de l'espace $F$ est indispensable ».

**Si on la retire.** Soit $F=c_{00}$, l'espace des suites réelles nulles à partir d'un certain rang, muni de $\|x\|_\infty=\sup_n|x_n|$ (non complet). Pour $n\ge1$, soit $\theta_n$ la fonction « triangle » sur $[0;1]$, nulle hors de $\big[\frac1{n+1};\frac1n\big]$, affine par morceaux, de hauteur $\frac1n$ au milieu de cet intervalle. Posons $f(t)=\sum_{n\ge1}\theta_n(t)\,e_n$ ($e_n$ = $n$-ième vecteur de base), et $f(0)=0$. Pour chaque $t$, au plus un $\theta_n(t)$ est non nul, donc $f(t)\in c_{00}$ ; $f$ est continue sur $]0;1]$ (localement une seule bosse) et en $0$ car $\|f(t)\|_\infty\le\frac1n$ pour $t\le\frac1n$. Dans le complété $c_0$ (suites tendant vers $0$, qui est de Banach et contient $c_{00}$ isométriquement), l'intégrale existe et vaut $\int_0^1f=\big(\int_0^1\theta_n\big)_{n\ge1}$, de coordonnées $\int_0^1\theta_n=\frac12\big(\frac1n-\frac1{n+1}\big)\frac1n>0$ **toutes non nulles** : ce n'est pas un élément de $c_{00}$. Les intégrales des fonctions en escalier approchant $f$ (qu'on peut prendre à valeurs dans $c_{00}$) convergent dans $c_0$ vers ce vecteur ; par unicité de la limite dans $c_0$, elles n'ont **pas de limite dans $c_{00}$** : $f$ est continue mais non intégrable dans $c_{00}$.

### H2 — $f$ réglée (par exemple continue), sur un **segment**

**Rôle.** La définition par limite uniforme ne s'applique qu'à ces fonctions, et la majoration utilise $\|f\|_0<\infty$ (une fonction réglée est bornée, comme limite uniforme de fonctions en escalier, qui le sont).

**Si on la retire.** La fonction $\mathbf 1_{\Q\cap[0;1]}$ n'est pas réglée (elle est à distance uniforme $\ge\frac12$ de toute fonction en escalier, car toute fonction en escalier est constante sur un intervalle ouvert qui contient des rationnels et des irrationnels) : elle n'a pas d'intégrale dans cette théorie. Sur un intervalle non borné, la majoration $(b-a)\|f\|_0$ n'a pas de sens.

## Exemples

* **Composante par composante.** Pour $f(t)=(\cos t,\sin t)\in\R^2$ sur $[0;\pi/2]$ : $\int_0^{\pi/2}f=\big(\int_0^{\pi/2}\cos,\int_0^{\pi/2}\sin\big)=(1,1)$. (Plus généralement, pour $T\in\mathcal L(F;G)$ linéaire continue, $T\big(\int f\big)=\int T\circ f$ : vrai pour les fonctions en escalier, puis par passage à la limite ; on l'applique ici aux projections $p_1$, $p_2$.) Vérification de la majoration en norme euclidienne : $\|(1,1)\|_2=\sqrt2\approx1{,}414\le\frac\pi2\cdot1\approx1{,}571$.
* **Dans un espace de fonctions.** $F=C([0;1];\R)$ avec $\|\cdot\|_\infty$ (Banach), et $f:[0;1]\to F$, $f(t)=(x\mapsto e^{tx})$. Alors $\int_0^1f(t)\,dt$ est la fonction $x\mapsto\int_0^1e^{tx}\,dt=\frac{e^x-1}{x}$ (prolongée par $1$ en $0$), car l'évaluation $\mathrm{ev}_x:F\to\R$ est linéaire continue et commute avec l'intégrale.
* **Majoration en pratique.** Pour $f$ continue, on a aussi $\big\|\int_a^bf\big\|_F\le\int_a^b\|f(t)\|_F\,dt$ (même preuve : vrai en escalier, puis limite), plus fine que $(b-a)\|f\|_0$.

## Pièges

* > ⚠️ **La complétude de $F$ est indispensable** pour définir l'intégrale d'une fonction réglée (contre-exemple dans $c_{00}$). C'est pourquoi les Théorèmes V.4.6 et V.4.7 ([[ch05-primitive-integrale]], [[ch05-theoreme-fondamental]]) supposent $F$ de Banach, alors que le TAF ([[ch05-accroissements-finis]]) n'en a pas besoin.
* La majoration $(b-a)\|f\|_0$ suppose $a<b$ ; pour des bornes dans un ordre quelconque, écrire $|b-a|\,\|f\|_0$.
* Une fonction réglée peut être discontinue (une fonction en escalier l'est) ; sa « primitive » $t\mapsto\int_a^tf$ n'est alors pas dérivable aux discontinuités (voir [[ch05-primitive-integrale]]).
