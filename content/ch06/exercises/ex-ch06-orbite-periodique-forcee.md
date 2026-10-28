---
id: ex-ch06-orbite-periodique-forcee
type: exercise
chapters: [6, 7]
title: Une solution périodique qui survit à une petite perturbation
source: "Inventé (dans l'esprit de la méthode de continuation de Poincaré pour les solutions périodiques)"
difficulty: 3
time: 45
tools: [ch06-fonctions-implicites, ch07-flot-global-ouvert-regulier, ch07-flot-global-def, ch07-courbe-integrale-maximale-def, ch07-unicite-globale, ch07-cauchy-lipschitz, ch05-lemme-schwarz]
---
## Énoncé

Pour $\eps\in\R$, on considère l'équation différentielle scalaire
$$
(\mathcal E_\eps)\qquad x'(t)=-x(t)+\eps\big(\cos t+x(t)^2\big).
$$
Pour $(\eps,\xi)\in\R^2$, on note $t\mapsto x(t;\eps,\xi)$ la solution maximale de $(\mathcal E_\eps)$ telle que $x(0;\eps,\xi)=\xi$, et $J(\eps,\xi)$ son intervalle de définition. Une solution est dite **$2\pi$-périodique** si elle est définie sur $\R$ et vérifie $x(t+2\pi)=x(t)$ pour tout $t$.

1. Justifier l'existence et l'unicité de ces solutions maximales. Déterminer $x(t;0,\xi)$, et montrer que pour $\eps=0$ la seule solution $2\pi$-périodique est la fonction nulle.
2. Montrer qu'il existe un voisinage ouvert $W$ de $(0,0)$ dans $\R^2$ tel que $2\pi\in J(\eps,\xi)$ pour tout $(\eps,\xi)\in W$, et que l'application $\Phi:W\to\R$, $\Phi(\eps,\xi)=x(2\pi;\eps,\xi)$, est de classe $C^\infty$.
3. Soit $(\eps,\xi)\in W$. Montrer que la solution $x(\cdot\,;\eps,\xi)$ est $2\pi$-périodique si et seulement si $\Phi(\eps,\xi)=\xi$.
4. Montrer qu'il existe $\eps_0>0$, $\delta>0$ et une fonction $\xi^*:\,]-\eps_0,\eps_0[\,\to\,]-\delta,\delta[$ de classe $C^\infty$, avec $\xi^*(0)=0$, telles que pour tout $\eps\in\,]-\eps_0,\eps_0[$, l'équation $(\mathcal E_\eps)$ possède **exactement une** solution $2\pi$-périodique $x_\eps$ vérifiant $|x_\eps(0)|<\delta$, à savoir $x_\eps=x(\cdot\,;\eps,\xi^*(\eps))$.
5. On pose $u(t)=\dfrac{\partial x}{\partial\eps}(t;0,0)$. Montrer que $u'=-u+\cos t$ et $u(0)=0$, et calculer $u$. En déduire $(\xi^*)'(0)$, puis montrer que, pour tout $t\in\R$,
$$
\frac{d}{d\eps}\Big|_{\eps=0}x_\eps(t)=\frac{\cos t+\sin t}2 .
$$
Interpréter ce résultat.

## Indices

### Indice 1
Une solution périodique, c'est une condition initiale qui « revient à elle-même » au bout d'une période. On est donc ramené à résoudre une équation $H(\eps,\xi)=0$ à paramètre $\eps$, dont on connaît la solution $(0,0)$. Il faut savoir que $H$ est régulière : c'est ce que dit le cours sur le flot.

### Indice 2
Question 2 : pour faire jouer à $\eps$ le rôle d'une variable d'état, considérer le champ $Y(t,(e,x))=\big(0,\,-x+e(\cos t+x^2)\big)$ sur $\R\times\R^2$. Son flot global a un domaine **ouvert** et est $C^\infty$ ([[ch07-flot-global-ouvert-regulier]]). Question 4 : fonctions implicites ([[ch06-fonctions-implicites]]) pour $H(\eps,\xi)=\Phi(\eps,\xi)-\xi$. On a $\partial_\xi H(0,0)=e^{-2\pi}-1$, grâce à la formule explicite de la question 1.

### Indice 3
Question 3 : si $\Phi(\eps,\xi)=\xi$, la fonction $y(t)=x(t+2\pi;\eps,\xi)$ est encore une solution maximale de $(\mathcal E_\eps)$ (le champ est $2\pi$-périodique en $t$), avec $y(0)=\xi$. Question 5 : $x$ est $C^\infty$ en $(t,\eps,\xi)$ ; dériver l'équation par rapport à $\eps$ et permuter $\partial_t$ et $\partial_\eps$ (lemme de Schwarz).

## Corrigé

**1.** Le champ $(t,x)\mapsto-x+\eps(\cos t+x^2)$ est de classe $C^\infty$ sur $\R\times\R$, donc localement lipschitzien en $x$. Le théorème de Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]) donnent l'existence et l'unicité de la solution maximale de condition initiale $(0,\xi)$, définie sur un intervalle ouvert $J(\eps,\xi)\ni0$ ([[ch07-courbe-integrale-maximale-def]]).

Pour $\eps=0$, $t\mapsto\xi e^{-t}$ est une solution de $x'=-x$ définie sur $\R$, donc maximale : $x(t;0,\xi)=\xi e^{-t}$ et $J(0,\xi)=\R$. Si elle est $2\pi$-périodique, alors $\xi e^{-2\pi}=x(2\pi)=x(0)=\xi$, donc $\xi=0$. Réciproquement, la fonction nulle est $2\pi$-périodique.

**2.** Considérons le champ dépendant du temps $Y:\R\times\R^2\to\R^2$, $Y\big(t,(e,x)\big)=\big(0,\,-x+e(\cos t+x^2)\big)$, de classe $C^\infty$, donc localement lipschitzien en $(e,x)$. Notons $F$ son flot global et $D\subset\R\times\R\times\R^2$ le domaine de $F$ ([[ch07-flot-global-def]], poly Définition VII.3.4, p. 134).

*Lien avec $(\mathcal E_\eps)$.* Si $t\mapsto(e(t),x(t))$ est une courbe intégrale de $Y$ avec $(e(0),x(0))=(\eps,\xi)$, alors $e'=0$, donc $e\equiv\eps$, et $x$ est solution de $(\mathcal E_\eps)$ avec $x(0)=\xi$. Réciproquement, $t\mapsto(\eps,x(t;\eps,\xi))$ est une courbe intégrale de $Y$ sur $J(\eps,\xi)$. La courbe intégrale maximale de $Y$ de condition initiale $(0,(\eps,\xi))$ est donc $t\mapsto(\eps,x(t;\eps,\xi))$, définie sur $J(\eps,\xi)$. Autrement dit,
$$
(0,t,(\eps,\xi))\in D\iff t\in J(\eps,\xi),\qquad F\big(0,t,(\eps,\xi)\big)=\big(\eps,\,x(t;\eps,\xi)\big).
$$
*Ouverture et régularité.* D'après le théorème VII.3.9 ([[ch07-flot-global-ouvert-regulier]], p. 135), $D$ est ouvert et $F$ est $C^\infty$ sur $D$. Comme $J(0,0)=\R$ (question 1), $(0,2\pi,(0,0))\in D$. L'application $(\eps,\xi)\mapsto(0,2\pi,(\eps,\xi))$ est continue, donc l'image réciproque de l'ouvert $D$ est un ouvert $W$ de $\R^2$ contenant $(0,0)$. Pour $(\eps,\xi)\in W$, $2\pi\in J(\eps,\xi)$. Enfin, $\Phi(\eps,\xi)$ est la seconde composante de $F(0,2\pi,(\eps,\xi))$ : composée d'applications $C^\infty$, $\Phi$ est $C^\infty$ sur $W$.

**3.** Notons $x=x(\cdot\,;\eps,\xi)$ et $J=J(\eps,\xi)$.

($\Rightarrow$) Si $x$ est $2\pi$-périodique, alors $\Phi(\eps,\xi)=x(2\pi)=x(0)=\xi$.

($\Leftarrow$) Supposons $x(2\pi)=\xi$. Posons $y(t)=x(t+2\pi)$ pour $t\in J-2\pi$. Comme $\cos$ est $2\pi$-périodique,
$$
y'(t)=-x(t+2\pi)+\eps\big(\cos(t+2\pi)+x(t+2\pi)^2\big)=-y(t)+\eps\big(\cos t+y(t)^2\big),
$$
donc $y$ est solution de $(\mathcal E_\eps)$, et $y(0)=x(2\pi)=\xi$. De plus $y$ est maximale. En effet, si $\tilde y$ prolongeait $y$ à un intervalle strictement plus grand, $t\mapsto\tilde y(t-2\pi)$ serait, par le même calcul, une solution prolongeant strictement $x$. Par unicité de la solution maximale de condition initiale $(0,\xi)$, $y=x$ et $J-2\pi=J$. Un intervalle ouvert non vide invariant par la translation de $-2\pi$ (donc aussi par celle de $+2\pi$) est non borné des deux côtés : $J=\R$. Enfin $x(t+2\pi)=y(t)=x(t)$ pour tout $t$.

**4.** Posons $H(\eps,\xi)=\Phi(\eps,\xi)-\xi$ sur $W$. Soit $]-a,a[\,\times\,]-b,b[\,\subset W$. La fonction $H$ y est de classe $C^\infty$ et $H(0,0)=x(2\pi;0,0)-0=0$. D'après la question 1, $\Phi(0,\xi)=\xi e^{-2\pi}$ pour $|\xi|<b$, donc
$$
\frac{\partial H}{\partial\xi}(0,0)=e^{-2\pi}-1\neq0 .
$$
Une application linéaire non nulle de $\R$ dans $\R$ est un isomorphisme bicontinu. Le théorème des fonctions implicites ([[ch06-fonctions-implicites]], poly Théorème VI.2.1, p. 118) fournit des ouverts $U_0\ni0$, $V_0\ni0$ et une fonction $\xi^*:U_0\to V_0$ de classe $C^\infty$, avec $\xi^*(0)=0$, tels que pour $(\eps,\xi)\in U_0\times V_0$ : $H(\eps,\xi)=0\iff\xi=\xi^*(\eps)$. On peut prendre $V_0=\,]-\delta,\delta[\,\subset\,]-b,b[$, puis $U_0=\,]-\eps_0,\eps_0[\,\subset\,]-a,a[$ avec $\xi^*(U_0)\subset V_0$ (continuité de $\xi^*$) ; l'équivalence reste vraie sur ce produit plus petit.

Soit alors $|\eps|<\eps_0$. Une solution $2\pi$-périodique de $(\mathcal E_\eps)$ est définie sur $\R$, donc maximale. Si $\xi$ désigne sa valeur en $0$, c'est $x(\cdot\,;\eps,\xi)$. Si $|\xi|<\delta$, alors $(\eps,\xi)\in U_0\times V_0\subset W$, et la question 3 dit que $x(\cdot\,;\eps,\xi)$ est $2\pi$-périodique si et seulement si $H(\eps,\xi)=0$, c'est-à-dire $\xi=\xi^*(\eps)$. D'où l'existence et l'unicité de $x_\eps=x(\cdot\,;\eps,\xi^*(\eps))$.

**5.** *Régularité.* L'ensemble $\Omega=\{(t,\eps,\xi) : (0,t,(\eps,\xi))\in D\}$ est ouvert, et sur $\Omega$, $(t,\eps,\xi)\mapsto x(t;\eps,\xi)$ est $C^\infty$, comme seconde composante de $F(0,t,(\eps,\xi))$. Il contient $\R\times\{(0,0)\}$. Sur $\Omega$, on a
$$
\partial_t x(t;\eps,\xi)=-x(t;\eps,\xi)+\eps\big(\cos t+x(t;\eps,\xi)^2\big).
$$
*Équation de $u$.* Dérivons cette identité par rapport à $\eps$. Comme $x$ est de classe $C^2$, le lemme de Schwarz ([[ch05-lemme-schwarz]]) donne $\partial_\eps\partial_tx=\partial_t\partial_\eps x$, d'où
$$
\partial_t\big(\partial_\eps x\big)=-\partial_\eps x+\cos t+x^2+2\eps\,x\,\partial_\eps x .
$$
En $(\eps,\xi)=(0,0)$, où $x(t;0,0)=0$ pour tout $t$, cela donne $u'(t)=-u(t)+\cos t$. De plus $x(0;\eps,\xi)=\xi$ pour tout $\eps$, donc $u(0)=\partial_\eps\xi=0$.

*Calcul de $u$.* La fonction $p(t)=\frac{\cos t+\sin t}2$ vérifie $p'=\frac{-\sin t+\cos t}2=-p+\cos t$. Les solutions de $u'=-u+\cos t$ sont donc les $p+Ce^{-t}$ (la différence de deux solutions vérifie $w'=-w$). La condition $u(0)=\frac12+C=0$ impose
$$
u(t)=\frac{\cos t+\sin t-e^{-t}}2 .
$$
*Dérivée de $\xi^*$.* On a $\partial_\eps H(0,0)=\partial_\eps\Phi(0,0)=u(2\pi)=\frac{1-e^{-2\pi}}2$, d'où, par la formule des fonctions implicites,
$$
(\xi^*)'(0)=-\frac{\partial_\eps H(0,0)}{\partial_\xi H(0,0)}=-\frac{(1-e^{-2\pi})/2}{e^{-2\pi}-1}=\frac12 .
$$
*Dérivée de $x_\eps(t)$.* Pour $t\in\R$ fixé, $(t,\eps,\xi^*(\eps))\in\Omega$ pour $|\eps|<\eps_0$, car $x_\eps$ est définie sur $\R$. La règle de la chaîne donne
$$
\frac{d}{d\eps}\Big|_{\eps=0}x\big(t;\eps,\xi^*(\eps)\big)=\partial_\eps x(t;0,0)+\partial_\xi x(t;0,0)\,(\xi^*)'(0)=u(t)+e^{-t}\cdot\frac12=\frac{\cos t+\sin t}2,
$$
car $\partial_\xi x(t;0,\xi)=\partial_\xi(\xi e^{-t})=e^{-t}$.

*Interprétation.* $x_\eps(t)=\eps\,p(t)+o(\eps)$, où $p$ est l'**unique** solution $2\pi$-périodique de l'équation linéarisée $p'=-p+\cos t$ : la réponse du système amorti $x'=-x$ au forçage $\eps\cos t$. Le terme non linéaire $\eps x^2$ n'intervient qu'à l'ordre $\eps^2$. Contrôle numérique : en résolvant $\Phi(\eps,\xi)=\xi$ par la méthode de la sécante avec un schéma de Runge–Kutta, on trouve $\xi^*(\eps)/\eps\approx0{,}5015$ pour $\eps=0{,}1$ et $0{,}50001$ pour $\eps=0{,}01$.

## Pièges et variantes

* > ⚠️ Avant d'évaluer $\Phi(\eps,\xi)$, il faut savoir que la solution **existe jusqu'au temps $2\pi$** : le terme $x^2$ peut faire exploser des solutions en temps fini. C'est l'ouverture du domaine du flot qui le garantit près de $(0,0)$.
* Le paramètre $\eps$ n'est pas une condition initiale : on le transforme en variable d'état avec $e'=0$. C'est l'astuce standard pour déduire la régularité en les paramètres du théorème sur le flot.
* Dans la question 3, on utilise la **périodicité en $t$ du champ** : sans elle, $x(t+2\pi)$ ne serait pas solution de la même équation, et $\Phi(\xi)=\xi$ ne donnerait pas une solution périodique.
* L'hypothèse clé du théorème des fonctions implicites est $\partial_\xi\Phi(0,0)\neq1$, c'est-à-dire que $1$ n'est pas valeur propre de la différentielle de l'application de premier retour : la solution périodique non perturbée est **non dégénérée**. Pour $x'=\eps\cos t$ (sans amortissement), $\Phi(0,\xi)=\xi$, on a $\partial_\xi H(0,0)=0$ et la méthode échoue (et en effet toute condition initiale donne une solution périodique quand $\eps\neq0$).
* Variante : $x'=-x+\eps f(t,x)$ avec $f$ de classe $C^\infty$ et $T$-périodique en $t$. Même conclusion, et $\frac{d}{d\eps}x_\eps|_{\eps=0}$ est l'unique solution $T$-périodique de $p'=-p+f(t,0)$.
