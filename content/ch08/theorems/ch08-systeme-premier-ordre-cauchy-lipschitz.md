---
id: ch08-systeme-premier-ordre-cauchy-lipschitz
type: proposition
chapter: 8
title: "Réécriture locale de (E.L) en un système du premier ordre en $(\gamma,p)$ vérifiant Cauchy-Lipschitz ; régularité $C^2$ des solutions"
ref: "Question 14, p. 146 (non numérotée, section VIII)"
page: 146
importance: 2
depends: [ch08-legendre-inversion-locale, ch08-lagrangien-regulier, ch08-euler-lagrange, ch07-cauchy-lipschitz, ch07-restriction-domaine-c1-lipschitz, ch07-champ-vecteurs-courbe-integrale-def, ch05-accroissements-finis, ch05-composition-differentielles, ch05-differentiabilite-composantes]
tags: [euler-lagrange, cauchy-lipschitz, systeme-premier-ordre, hamiltonien, impulsion, lagrangien-regulier]
---
## Intuition

> 💡 L'équation d'Euler-Lagrange ([[ch08-euler-lagrange]]) $\frac{d}{dt}\big(\frac{\partial L}{\partial v}(t,\gamma,\gamma')\big)=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ ne donne pas $\gamma''$ directement : elle dit comment évolue l'**impulsion** $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$. L'idée est donc de prendre comme inconnue le couple $(\gamma,p)$ (position, impulsion) au lieu de $(\gamma,\gamma')$ (position, vitesse).

Deux équations suffisent alors : (E.L) donne $p'=\frac{\partial L}{\partial q}$, et la transformation de Legendre ([[ch08-legendre-inversion-locale]]) permet de retrouver la vitesse à partir de l'impulsion, $\gamma'=g(t,\gamma,p)$. On obtient un système **du premier ordre** $\alpha'=Y(t,\alpha)$ pour $\alpha=(\gamma,p)$, c'est-à-dire la recherche d'une **courbe intégrale** d'un champ de vecteurs dépendant du temps ([[ch07-champ-vecteurs-courbe-integrale-def]]). Comme $Y$ est $C^1$, le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) s'applique.

Bonus : $\gamma'=g(t,\gamma,p)$ est une composée de fonctions $C^1$, donc toute solution de (E.L) est automatiquement $C^2$, alors qu'on ne la supposait que $C^1$.

Rappels : $L$ est **régulier** ([[ch08-lagrangien-regulier]]) si $\frac{\partial^2L}{\partial v^2}(u,q,v)$, vue comme application linéaire $V\to L(V;\R)$, est un isomorphisme en tout point ; un champ $X$ est **localement lipschitzien en la seconde variable** ([[ch07-localement-lipschitzien-def]]) si, près de tout point, $\norm{X(t,x_1)-X(t,x_2)}\le k\norm{x_1-x_2}$ avec $k$ indépendant de $t$.

## Énoncé

**Proposition (poly, Question 14, p. 146).** Soit $L:I\times V\times V\to\R$ de classe $C^2$ et régulier. Soit $(u_0,q_0,v_0)\in I\times V\times V$ et, selon [[ch08-legendre-inversion-locale]], $\mathcal U_0\ni(u_0,q_0,v_0)$ et $\mathcal V_0\ni\Phi(u_0,q_0,v_0)$ des ouverts tels que $\Phi:(u,q,v)\mapsto(u,q,\frac{\partial L}{\partial v}(u,q,v))$ soit un $C^1$-difféomorphisme de $\mathcal U_0$ sur $\mathcal V_0$, de réciproque $(u,q,p)\mapsto(u,q,g(u,q,p))$. On pose
$$
Y:\mathcal V_0\to V\times L(V;\R),\qquad Y(u,q,p)=\Big(g(u,q,p),\ \frac{\partial L}{\partial q}\big(u,q,g(u,q,p)\big)\Big).
$$
On dit qu'une courbe $\gamma:J\to V$ de classe $C^1$ ($J\subset I$ intervalle ouvert) **vérifie l'équation d'Euler-Lagrange sur $J$** si, pour tout $t\in J$, la fonction $t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ est dérivable en $t$, de dérivée $\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$.

1. **Réécriture.** En remplaçant $(u,q,v)$ par $(t,\gamma(t),\gamma'(t))$ et $p$ par $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$, l'équation d'Euler-Lagrange se réécrit, pour les $t$ tels que $(t,\gamma(t),\gamma'(t))\in\mathcal U_0$, sous la forme du système
$$
\begin{cases}\gamma'(t)=g\big(t,\gamma(t),p(t)\big)\\ p'(t)=\dfrac{\partial L}{\partial q}\Big(t,\gamma(t),g\big(t,\gamma(t),p(t)\big)\Big),\end{cases}
\qquad\text{c'est-à-dire}\qquad \alpha'(t)=Y(t,\alpha(t)),\quad \alpha=(\gamma,p).
$$
Précisément : (a) si $\gamma$ vérifie (E.L) sur $J$ et $(t,\gamma(t),\gamma'(t))\in\mathcal U_0$ pour tout $t\in J$, alors $p$ est $C^1$, $(t,\gamma(t),p(t))\in\mathcal V_0$ et $\alpha=(\gamma,p)$ vérifie ce système sur $J$ ; (b) réciproquement, si $\alpha=(\gamma,p):J\to V\times L(V;\R)$ est dérivable, avec $(t,\alpha(t))\in\mathcal V_0$ et $\alpha'(t)=Y(t,\alpha(t))$ pour tout $t\in J$, alors $\gamma$ est $C^1$, $(t,\gamma(t),\gamma'(t))\in\mathcal U_0$, $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ et $\gamma$ vérifie (E.L) sur $J$.
2. **Hypothèses de Cauchy-Lipschitz.** $Y$ est de classe $C^1$ sur $\mathcal V_0$. Pour tout produit $J_0\times U'\subset\mathcal V_0$ ($J_0$ intervalle ouvert, $U'$ ouvert de $V\times L(V;\R)$), la restriction de $Y$ à $J_0\times U'$ est un champ de vecteurs dépendant du temps, localement lipschitzien en la seconde variable : le théorème de Cauchy-Lipschitz (poly, Théorème VII.2.1, p. 128) s'applique au système.
3. **Régularité.** Toute courbe $\gamma:J\to V$ de classe $C^1$ vérifiant (E.L) sur $J$ est de classe $C^2$.

## Hypothèses

### H1 — $L$ est de classe $C^2$

**Rôle.** Elle intervient deux fois : (i) pour que $\Phi$ soit $C^1$ et que la question 13 fournisse $g$ de classe $C^1$ ; (ii) pour que $\frac{\partial L}{\partial q}$ soit $C^1$. Ensemble, elles rendent $Y$ de classe $C^1$, donc localement lipschitzien.

**Si on la retire.** On peut parfois encore écrire le système, mais $Y$ n'est plus lipschitzien et l'unicité tombe. Exemple vérifié : $V=\R$, $L(u,q,v)=\tfrac12v^2+F(q)$ avec $F(q)=8\,\mathrm{signe}(q)\abs q^{3/2}$. On a $F'(q)=12\abs q^{1/2}$ (pour $q>0$ : $8\cdot\tfrac32q^{1/2}$ ; pour $q<0$ : $F=-8(-q)^{3/2}$, $F'=12(-q)^{1/2}$ ; en $0$ : taux $F(h)/h=8\,\mathrm{signe}(h)\abs h^{3/2}/h=8\abs h^{1/2}\to0$), continue : $L$ est $C^1$ mais pas $C^2$ ($F'$ n'est pas dérivable en $0$). Ici $\frac{\partial L}{\partial v}=v$, donc $\Phi=\mathrm{Id}$, $g(u,q,p)=p$ et $Y(u,q,p)=(p,\,12\abs q^{1/2})$, qui n'est pas lipschitzien en $q$ près de $q=0$ (le quotient $12\abs q^{1/2}/\abs q$ tend vers $+\infty$). Et en effet $\gamma''=12\abs\gamma^{1/2}$ a deux solutions avec $\gamma(\tfrac12)=0$, $\gamma'(\tfrac12)=0$ : $\gamma_1\equiv0$ et $\gamma_2(t)=(t-\tfrac12)^4$ pour $t\ge\tfrac12$, $\gamma_2(t)=0$ pour $t\le\tfrac12$ (on vérifie $\gamma_2''=12(t-\tfrac12)^2=12\abs{\gamma_2}^{1/2}$ pour $t\ge\tfrac12$). C'est le même phénomène que le contre-exemple de Peano ([[ch07-peano-non-unicite]]).

### H2 — $L$ est régulier

**Rôle.** Sans elle, pas de fonction $g$ : on ne peut pas exprimer la vitesse en fonction de l'impulsion, et (E.L) reste une équation **implicite** en $\gamma''$, hors du cadre des équations ordinaires ([[ch07-equations-implicites-remarque]]). C'est aussi elle qui donne la régularité $C^2$ (point 3).

**Si on la retire.** Exemple vérifié : $V=\R$, $L(u,q,v)=qv$ ($C^\infty$, $\frac{\partial^2L}{\partial v^2}=0$). Alors $\frac{\partial L}{\partial v}(t,\gamma,\gamma')=\gamma(t)$, dont la dérivée est $\gamma'(t)$, et $\frac{\partial L}{\partial q}(t,\gamma,\gamma')=\gamma'(t)$ : (E.L) est l'identité $\gamma'=\gamma'$, vérifiée par **toute** courbe $C^1$. En particulier $\gamma(t)=\abs{t-\tfrac12}^{3/2}$ (de dérivée $\tfrac32\,\mathrm{signe}(t-\tfrac12)\abs{t-\tfrac12}^{1/2}$, continue) est solution sans être $C^2$ : le point 3 tombe, et aucun système $\alpha'=Y(t,\alpha)$ ne peut décrire cet ensemble de solutions.

### H3 — La trajectoire $t\mapsto(t,\gamma(t),\gamma'(t))$ reste dans $\mathcal U_0$

**Rôle.** La fonction $g$ n'est définie que sur $\mathcal V_0$ et n'inverse $\frac{\partial L}{\partial v}$ que sur $\mathcal U_0$ : la réécriture n'a de sens que pour les $t$ où la courbe reste dans ce domaine. C'est le sens du mot « localement » du poly.

**Si on la retire.** Ce n'est pas une hypothèse que l'on peut supprimer mais une limite de validité ; en dehors de $\mathcal U_0$, la formule $\gamma'=g(t,\gamma,p)$ peut être fausse. Exemple : $V=\R^2$, $L=e^{v_1}\cos v_2$ (régulier, voir [[ch08-legendre-inversion-locale]]) ; si $\mathcal U_0$ est pris dans $\{\abs{v_2}<\pi\}$, une courbe avec $\gamma'(t)=(0,2\pi)$ a la même impulsion que si $\gamma'(t)=(0,0)$, et $g$ renvoie la vitesse $(0,0)$. Pour une courbe qui sort de $\mathcal U_0$, on change de point de base et l'on recolle des réécritures locales : c'est ce que font le point 3 ci-dessous et la preuve de [[ch08-existence-unicite-locale]].

## Idée de la preuve

Sur $\mathcal U_0$, $\Phi(t,\gamma,\gamma')=(t,\gamma,p)$ et sa réciproque donnent $\gamma'=g(t,\gamma,p)$ ; (E.L) donne $p'=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$. $Y$ est $C^1$ par composition, donc localement lipschitzien par les accroissements finis sur une boule. Enfin $\gamma'=g(t,\gamma,p)$ est une composée $C^1$ : $\gamma$ est $C^2$.

## Preuve

Notons $\Psi:\mathcal V_0\to\mathcal U_0$, $\Psi(u,q,p)=(u,q,g(u,q,p))$, la réciproque de $\Phi|_{\mathcal U_0}$ ; elle est de classe $C^1$ ([[ch08-legendre-inversion-locale]]).

*Point 1 (a).* Soit $\gamma:J\to V$ de classe $C^1$ vérifiant (E.L) sur $J$, avec $(t,\gamma(t),\gamma'(t))\in\mathcal U_0$ pour tout $t\in J$, et $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$. Par (E.L), $p$ est dérivable et $p'(t)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$ ; cette dérivée est continue en $t$ (composée de $\frac{\partial L}{\partial q}$, continue car $L$ est $C^1$, et de $t\mapsto(t,\gamma(t),\gamma'(t))$, continue car $\gamma$ est $C^1$), donc $p$ est $C^1$. Ensuite $(t,\gamma(t),p(t))=\Phi(t,\gamma(t),\gamma'(t))\in\Phi(\mathcal U_0)=\mathcal V_0$, et en appliquant $\Psi$ :
$$
(t,\gamma(t),\gamma'(t))=\Psi\big(t,\gamma(t),p(t)\big)=\big(t,\gamma(t),g(t,\gamma(t),p(t))\big),\qquad\text{donc}\qquad \gamma'(t)=g\big(t,\gamma(t),p(t)\big).
$$
En reportant dans l'expression de $p'$ : $p'(t)=\frac{\partial L}{\partial q}\big(t,\gamma(t),g(t,\gamma(t),p(t))\big)$. C'est le système, soit $\alpha'(t)=Y(t,\alpha(t))$ avec $\alpha=(\gamma,p)$ ([[ch05-differentiabilite-composantes]] pour dériver composante par composante).

*Point 1 (b).* Soit $\alpha=(\gamma,p):J\to V\times L(V;\R)$ dérivable, avec $(t,\alpha(t))\in\mathcal V_0$ et $\alpha'(t)=Y(t,\alpha(t))$ sur $J$. Comme $\alpha$ est continue et $Y$ continue (point 2), $\alpha'$ est continue ; en particulier $\gamma'(t)=g(t,\gamma(t),p(t))$ est continue et $\gamma$ est $C^1$. Puis $(t,\gamma(t),\gamma'(t))=\Psi(t,\gamma(t),p(t))\in\mathcal U_0$ et, en appliquant $\Phi$, $\Phi(t,\gamma(t),\gamma'(t))=(t,\gamma(t),p(t))$, c'est-à-dire $\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))=p(t)$. Donc $t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))=p(t)$ est dérivable, de dérivée
$$
p'(t)=\frac{\partial L}{\partial q}\big(t,\gamma(t),g(t,\gamma(t),p(t))\big)=\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big) :
$$
$\gamma$ vérifie (E.L) sur $J$.

*Point 2 : $Y$ est $C^1$, puis localement lipschitzien.* La fonction $g$ est la troisième composante de $\Psi$, donc $C^1$ ([[ch05-differentiabilite-composantes]]). Comme $L$ est $C^2$, $\frac{\partial L}{\partial q}=(T\mapsto T\circ\iota_2)\circ dL$ est $C^1$ (même argument que pour $\frac{\partial L}{\partial v}$ dans [[ch08-legendre-inversion-locale]], avec $\iota_2:h\mapsto(0,h,0)$). Donc $(u,q,p)\mapsto\frac{\partial L}{\partial q}(u,q,g(u,q,p))=\frac{\partial L}{\partial q}\circ\Psi$ est $C^1$ par la règle de la chaîne ([[ch05-composition-differentielles]]), et $Y$, dont les deux composantes sont $C^1$, est $C^1$.

Soit $J_0\times U'\subset\mathcal V_0$ un produit d'un intervalle ouvert et d'un ouvert de l'espace de Banach $V\times L(V;\R)$ (il en existe autour de chaque point de $\mathcal V_0$, puisque $\mathcal V_0$ est ouvert pour la norme produit). La restriction $X=Y|_{J_0\times U'}$ est continue : c'est un champ de vecteurs dépendant du temps sur $U'$ (poly, Définition VII.1.1, p. 128, [[ch07-champ-vecteurs-courbe-integrale-def]]). Montrons qu'il est localement lipschitzien en la seconde variable (c'est la Remarque VII.2.2, [[ch07-restriction-domaine-c1-lipschitz]]). Soit $(t_1,x_1)\in J_0\times U'$. Par continuité de $(t,x)\mapsto dX_{(t,x)}$, il existe $a,b>0$ et $k\ge0$ tels que $]t_1-a,t_1+a[\times B(x_1,b)\subset J_0\times U'$ et $\norm{dX_{(t,x)}}\le k$ sur ce produit. Pour $t$ fixé dans $]t_1-a,t_1+a[$, l'application $x\mapsto X(t,x)$ est différentiable sur la boule $B(x_1,b)$, convexe, de différentielle $dX_{(t,x)}\circ\iota$ (où $\iota:x\mapsto(0,x)$, de norme $1$), majorée en norme par $k$. L'inégalité des accroissements finis ([[ch05-accroissements-finis]]) donne, pour $x,x'\in B(x_1,b)$,
$$
\norm{X(t,x)-X(t,x')}\le k\,\norm{x-x'} .
$$
Les hypothèses du théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) sont donc satisfaites par le système $\alpha'=X(t,\alpha)$.

*Point 3 : régularité $C^2$.* Soit $\gamma:J\to V$ de classe $C^1$ vérifiant (E.L) sur $J$, et $t_1\in J$. Appliquons ce qui précède au point $(u_0,q_0,v_0)=(t_1,\gamma(t_1),\gamma'(t_1))$ : on obtient des ouverts $\mathcal U_1$, $\mathcal V_1$ et une fonction $g_1$ de classe $C^1$. L'application $t\mapsto(t,\gamma(t),\gamma'(t))$ étant continue et $\mathcal U_1$ ouvert, il existe un intervalle ouvert $K\ni t_1$, $K\subset J$, tel que $(t,\gamma(t),\gamma'(t))\in\mathcal U_1$ pour $t\in K$. Par le point 1 (a) sur $K$, $p$ est $C^1$ sur $K$ et $\gamma'(t)=g_1(t,\gamma(t),p(t))$ pour $t\in K$. L'application $t\mapsto(t,\gamma(t),p(t))$ est $C^1$ (composantes $C^1$) et $g_1$ est $C^1$, donc $\gamma'$ est $C^1$ sur $K$ par la règle de la chaîne. Comme $t_1$ est arbitraire, $\gamma'$ est $C^1$ sur $J$ : $\gamma$ est de classe $C^2$. $\square$

## Preuve à trous

Soit $\Psi(u,q,p)=(u,q,g(u,q,p))$ la réciproque $C^1$ de $\Phi:\mathcal U_0\to\mathcal V_0$, et $\gamma$ une solution $C^1$ de (E.L) sur $J$ avec $(t,\gamma(t),\gamma'(t))\in\mathcal U_0$. Posons $p(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$.

*Réécriture.* D'une part (E.L) donne $p'(t)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$, continue, donc $p$ est $C^1$. D'autre part $(t,\gamma(t),p(t))=\Phi(t,\gamma(t),\gamma'(t))\in\mathcal V_0$ et <trou indice="appliquer la réciproque Ψ">$(t,\gamma(t),\gamma'(t))=\Psi(t,\gamma(t),p(t))$, d'où $\gamma'(t)=g(t,\gamma(t),p(t))$</trou> ; en reportant, $p'(t)=\frac{\partial L}{\partial q}(t,\gamma(t),g(t,\gamma(t),p(t)))$. Réciproquement, si $\alpha=(\gamma,p)$ résout le système dans $\mathcal V_0$, alors <trou indice="appliquer Φ à (t, γ(t), γ'(t))">$(t,\gamma,\gamma')=\Psi(t,\gamma,p)\in\mathcal U_0$ et $\Phi(t,\gamma,\gamma')=(t,\gamma,p)$, donc $p=\frac{\partial L}{\partial v}(t,\gamma,\gamma')$</trou>, et l'équation $p'=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ est (E.L).

*Cauchy-Lipschitz.* Le champ $Y(u,q,p)=\big(g(u,q,p),\frac{\partial L}{\partial q}(u,q,g(u,q,p))\big)$ est <trou indice="régularité de g, de ∂L/∂q, et composition">$C^1$, car $g$ est $C^1$, $\frac{\partial L}{\partial q}$ est $C^1$ ($L$ étant $C^2$) et $\frac{\partial L}{\partial q}\circ\Psi$ est $C^1$ par la règle de la chaîne</trou>. Sur un produit $J_0\times U'\subset\mathcal V_0$, autour de tout point, <trou indice="borner la différentielle sur un petit produit, puis quel théorème sur une boule convexe ?">$\norm{dY}\le k$ sur $]t_1-a,t_1+a[\times B(x_1,b)$ par continuité, et l'inégalité des accroissements finis sur la boule convexe $B(x_1,b)$ donne $\norm{Y(t,x)-Y(t,x')}\le k\norm{x-x'}$</trou> : $Y$ est localement lipschitzien en la seconde variable.

*Régularité.* Autour de tout $t_1\in J$, en se plaçant au point $(t_1,\gamma(t_1),\gamma'(t_1))$, on a <trou indice="écrire γ' comme une composée">$\gamma'(t)=g_1(t,\gamma(t),p(t))$ avec $g_1$ de classe $C^1$ et $t\mapsto(t,\gamma(t),p(t))$ de classe $C^1$, donc $\gamma'$ est $C^1$</trou> : $\gamma$ est $C^2$. $\square$

## Exemples

* **Newton.** $V=\R^n$, $L(u,q,v)=\tfrac12\norm v^2-U(q)$ avec $U$ de classe $C^2$. Avec l'identification $V\simeq L(V;\R)$ : $p=\frac{\partial L}{\partial v}=v$, $g(u,q,p)=p$ (globalement : $\mathcal U_0=\mathcal V_0=I\times V\times V$), $\frac{\partial L}{\partial q}=-\nabla U(q)$. Le système est
$$
\gamma'=p,\qquad p'=-\nabla U(\gamma),\qquad Y(u,q,p)=\big(p,-\nabla U(q)\big) :
$$
c'est la réduction à l'ordre $1$ ([[ch07-reduction-ordre-un]]) de l'équation de Newton $\gamma''=-\nabla U(\gamma)$ ([[ch08-equation-newton]]). Le champ $Y$ est $C^1$ car $U$ est $C^2$.
* **Graphe de longueur minimale, avec potentiel.** $V=\R$, $L(u,q,v)=\sqrt{1+v^2}-U(q)$. D'après [[ch08-legendre-inversion-locale]], $p=v/\sqrt{1+v^2}$, $g(u,q,p)=p/\sqrt{1-p^2}$ sur $\mathcal V_0=I\times\R\times\,]-1,1[$, et le système est
$$
\gamma'=\frac{p}{\sqrt{1-p^2}},\qquad p'=-U'(\gamma).
$$
Pour $U=0$ : $p$ est constante, donc $\gamma'$ aussi, et $\gamma$ est affine (les droites minimisent la longueur des graphes). La contrainte $\abs p<1$ montre que le système ne vit pas sur tout l'espace des $(t,q,p)$.
* **Forme hamiltonienne (hors poly).** Posons $H(u,q,p)=p\big(g(u,q,p)\big)-L\big(u,q,g(u,q,p)\big)$ sur $\mathcal V_0$, de classe $C^1$. Pour $\delta p\in L(V;\R)$, en utilisant $\frac{\partial L}{\partial v}(u,q,g(u,q,p))=p$ :
$$
\frac{\partial H}{\partial p}\cdot\delta p=\delta p\big(g\big)+p\Big(\frac{\partial g}{\partial p}\delta p\Big)-\frac{\partial L}{\partial v}(u,q,g)\Big(\frac{\partial g}{\partial p}\delta p\Big)=\delta p\big(g(u,q,p)\big),
$$
et de même $\frac{\partial H}{\partial q}\cdot\delta q=p\big(\frac{\partial g}{\partial q}\delta q\big)-\frac{\partial L}{\partial q}(u,q,g)\delta q-p\big(\frac{\partial g}{\partial q}\delta q\big)=-\frac{\partial L}{\partial q}(u,q,g)\,\delta q$. Le système s'écrit donc $\gamma'=\frac{\partial H}{\partial p}$, $p'=-\frac{\partial H}{\partial q}$ (avec $\frac{\partial H}{\partial p}\in L(L(V;\R);\R)\simeq V$). Pour Newton, $H(u,q,p)=\norm p^2-\tfrac12\norm p^2+U(q)=\tfrac12\norm p^2+U(q)$ : c'est l'énergie de [[ch08-energie-conservee]].

## Pièges

* > ⚠️ Pourquoi ne pas simplement développer (E.L) en $\frac{\partial^2L}{\partial u\partial v}+\frac{\partial^2L}{\partial q\partial v}\gamma'+\frac{\partial^2L}{\partial v^2}\gamma''=\frac{\partial L}{\partial q}$ et isoler $\gamma''$ ? Deux défauts : cela suppose $\gamma$ de classe $C^2$, ce qu'on ignore a priori ; et le champ obtenu $\gamma''=\big(\frac{\partial^2L}{\partial v^2}\big)^{-1}\big(\frac{\partial L}{\partial q}-\frac{\partial^2L}{\partial u\partial v}-\frac{\partial^2L}{\partial q\partial v}\gamma'\big)$ fait intervenir des dérivées **secondes** de $L$, seulement continues si $L$ est $C^2$ : il n'est pas localement lipschitzien en général. Le passage par $(\gamma,p)$ n'utilise que $g$ et $\frac{\partial L}{\partial q}$, qui sont $C^1$.
* > ⚠️ Le théorème de Cauchy-Lipschitz est énoncé pour un champ défini sur un **produit** $I\times U$. Or $\mathcal V_0$ n'est en général pas un produit : il faut le réduire à un $J_0\times U'$ autour du point considéré.
* L'inconnue est $(\gamma,p)$ (position, impulsion), pas $(\gamma,\gamma')$. Ce n'est que pour $L=\tfrac12\norm v^2-U(q)$ que $p=\gamma'$ (après identification $V\simeq L(V;\R)$).
* La réécriture est **locale** : elle dépend du point $(u_0,q_0,v_0)$ et n'est valable que tant que $(t,\gamma(t),\gamma'(t))$ reste dans $\mathcal U_0$. Le caractère global du point 3 vient d'un recollement.
* La régularité $C^2$ des solutions n'est pas gratuite : elle utilise la régularité du Lagrangien (contre-exemple $L=qv$ en H2). Sans elle, la seule information est la dérivabilité de $t\mapsto\frac{\partial L}{\partial v}(t,\gamma,\gamma')$ fournie par du Bois-Reymond.
* Le Lagrangien n'étant que $C^2$, $Y$ n'est que $C^1$ : on ne peut pas en déduire que $\gamma$ est $C^3$ (il faudrait $L$ de classe $C^3$, et alors une récurrence donne $\gamma\in C^{k}$ si $L\in C^{k}$).
