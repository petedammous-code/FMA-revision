---
id: ex-ch07-domaine-flot-non-autonome
type: exercise
chapters: [7]
title: Intervalle maximal et domaine du flot pour x' = 2t x²
source: Inventé
difficulty: 1
time: 15
tools: [ch07-cauchy-lipschitz, ch07-restriction-domaine-c1-lipschitz, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-flot-global-def, ch07-flot-global-ouvert-regulier, ch07-translation-temps-autonome]
---
## Énoncé

On considère l'équation différentielle scalaire
$$
x'(t) = 2t\,x(t)^2 , \qquad t\in\R,\ x(t)\in\R .
$$

1. Montrer que pour tout $(\tau_0,x_0)\in\R^2$ il existe une unique solution maximale $x$ vérifiant $x(\tau_0)=x_0$, définie sur un intervalle ouvert $J_{\tau_0}(x_0)$ contenant $\tau_0$. Montrer que si $x_0\neq 0$, cette solution ne s'annule jamais.
2. On prend $\tau_0=0$. Calculer explicitement la solution maximale de condition initiale $(0,x_0)$ et déterminer $J_0(x_0)$ selon le signe de $x_0$.
3. Décrire l'ensemble $D_0=\{(t,x_0)\in\R^2 : t\in J_0(x_0)\}$. Est-il ouvert ? Est-il égal à $\R^2$ ?
4. On prend maintenant $\tau_0=2$ et $x_0=-1$. Calculer la solution maximale et son intervalle de définition. La solution de condition initiale $(2,-1)$ s'obtient-elle en translatant dans le temps celle de condition initiale $(0,-1)$ ?

## Indices

### Indice 1
Le champ $X(t,x)=2tx^2$ est très régulier : quel théorème donne existence et unicité ? Pour la non-annulation, quelle est la solution de condition initiale $(t_1,0)$ ?

### Indice 2
$X$ est de classe $C^1$ sur $\R\times\R$, donc localement lipschitzien en $x$ : Cauchy–Lipschitz et l'unicité globale s'appliquent. Si $x(t_1)=0$, comparer $x$ avec la fonction nulle.

### Indice 3
Comme $x$ ne s'annule pas, on peut diviser : $\left(\dfrac1{x}\right)'=-\dfrac{x'}{x^2}=-2t$. Intégrer entre $\tau_0$ et $t$, puis chercher le plus grand intervalle contenant $\tau_0$ sur lequel le dénominateur obtenu ne s'annule pas.

## Corrigé

**1.** Le champ $X:\R\times\R\to\R$, $X(t,x)=2tx^2$ est polynomial, donc de classe $C^1$ sur l'ouvert $\R\times\R$ ; par la remarque [[ch07-restriction-domaine-c1-lipschitz]] il est localement lipschitzien en la seconde variable. Le théorème de Cauchy–Lipschitz [[ch07-cauchy-lipschitz]] donne l'existence de solutions locales ; l'unicité globale [[ch07-unicite-globale]] permet de définir la courbe intégrale maximale de condition initiale $(\tau_0,x_0)$ sur l'intervalle ouvert $J_{\tau_0}(x_0)\ni\tau_0$ ([[ch07-courbe-integrale-maximale-def]]).

Supposons $x_0\neq0$ et qu'il existe $t_1\in J_{\tau_0}(x_0)$ avec $x(t_1)=0$. La fonction nulle est une courbe intégrale de $X$ définie sur $\R$ (car $X(t,0)=0$) de condition initiale $(t_1,0)$, de même que $x$. Par [[ch07-unicite-globale]], elles coïncident sur $J_{\tau_0}(x_0)\cap\R=J_{\tau_0}(x_0)$, donc $x(\tau_0)=0$ : contradiction. Ainsi $x$ ne s'annule pas et, étant continue sur un intervalle, garde le signe de $x_0$.

**2.** Si $x_0=0$, la solution maximale est la fonction nulle et $J_0(0)=\R$.

Si $x_0\neq0$, $x$ ne s'annule pas (question 1), donc $1/x$ est $C^1$ et $\left(1/x\right)'(t)=-x'(t)/x(t)^2=-2t$. En intégrant de $0$ à $t$ :
$$
\frac1{x(t)}=\frac1{x_0}-t^2 ,\qquad\text{soit}\qquad x(t)=\frac{x_0}{1-x_0t^2}\qquad (t\in J_0(x_0)).
$$
Réciproquement, sur tout intervalle contenant $0$ où $1-x_0t^2\neq0$, cette formule définit une solution : $x'(t)=\dfrac{x_0\cdot 2x_0t}{(1-x_0t^2)^2}=2t\,x(t)^2$ et $x(0)=x_0$.

* Si $x_0<0$ : $1-x_0t^2=1+|x_0|t^2\ge1$ ne s'annule jamais, la formule définit une solution sur $\R$, donc $J_0(x_0)=\R$.
* Si $x_0>0$ : $1-x_0t^2>0$ exactement sur $]-1/\sqrt{x_0},1/\sqrt{x_0}[$, qui contient donc $J_0(x_0)$ par maximalité. Inversement, sur $J_0(x_0)$ la formule est valable, donc $1-x_0t^2$ ne s'y annule pas ; comme $J_0(x_0)$ est un intervalle contenant $0$, il est inclus dans $]-1/\sqrt{x_0},1/\sqrt{x_0}[$. D'où
$$
J_0(x_0)=\left]-\tfrac1{\sqrt{x_0}},\tfrac1{\sqrt{x_0}}\right[ ,
$$
et $x(t)\to+\infty$ quand $t\to\pm1/\sqrt{x_0}$ : la solution explose en temps fini dans les deux sens.

**3.** D'après 2., $t\in J_0(x_0)$ si et seulement si $x_0t^2<1$ (pour $x_0\le0$ c'est toujours vrai ; pour $x_0>0$ c'est $|t|<1/\sqrt{x_0}$). Donc
$$
D_0=\{(t,x_0)\in\R^2 : x_0t^2<1\}.
$$
C'est l'image réciproque de l'ouvert $]-\infty,1[$ par l'application continue $(t,x_0)\mapsto x_0t^2$ : $D_0$ est **ouvert**, conformément au théorème [[ch07-flot-global-ouvert-regulier]] (dont $D_0$ est la tranche $\tau_0=0$ du domaine $D$ de la définition [[ch07-flot-global-def]]). Il n'est pas égal à $\R^2$ : $(1,1)\notin D_0$. Sur $D_0$, le flot $F(0,t,x_0)=\dfrac{x_0}{1-x_0t^2}$ est bien $C^\infty$.

**4.** Avec $x(2)=-1\neq0$, la question 1 s'applique encore et le même calcul (intégration de $(1/x)'=-2t$ entre $2$ et $t$) donne
$$
\frac1{x(t)}=\frac1{x(2)}-(t^2-4)=-1-t^2+4=3-t^2,\qquad\text{soit}\qquad x(t)=\frac{1}{3-t^2}.
$$
Vérification : $x(2)=\frac1{3-4}=-1$ et $x'(t)=\dfrac{2t}{(3-t^2)^2}=2t\,x(t)^2$.

Le dénominateur s'annule en $t=\pm\sqrt3$ ; l'intervalle maximal contenant $\tau_0=2$ est (même argument qu'en 2.)
$$
J_2(-1)=\left]\sqrt3,+\infty\right[ ,
$$
et $x(t)\to-\infty$ quand $t\to\sqrt3^{\,+}$. Au contraire, la solution de condition initiale $(0,-1)$ est $t\mapsto -1/(1+t^2)$, définie sur $\R$ ; sa translatée $t\mapsto -1/(1+(t-2)^2)$ vaut $-1$ en $2$ mais **n'est pas** solution : sa dérivée en $t=2$ vaut $0$, alors que $2t\,x^2=4$ en ce point. Le théorème d'invariance par translation en temps [[ch07-translation-temps-autonome]] ne s'applique pas : le champ dépend de $t$.

## Pièges et variantes

* Diviser par $x$ sans avoir justifié que $x$ ne s'annule pas : c'est l'unicité ([[ch07-unicite-globale]]) avec la solution nulle qui l'autorise, pas un calcul.
* Confondre « la formule a un sens » et « intervalle maximal » : l'intervalle maximal est la **composante connexe contenant $\tau_0$** de l'ensemble où le dénominateur ne s'annule pas (en 4., ce n'est pas $\R\setminus\{\pm\sqrt3\}$, qui n'est pas un intervalle).
* Croire que le signe de $x_0$ suffit à décider de l'explosion : en 4., une donnée négative explose (vers le passé) parce que l'instant initial est $\tau_0=2$ ; pour un champ non autonome, $J_{\tau_0}(x_0)$ dépend vraiment de $\tau_0$.
* Variante : pour $x'=x^2$ (autonome), $J_{\tau_0}(x_0)=J_0(x_0)+\tau_0$ et le flot vérifie $F(\tau_0,t,x_0)=F(0,t-\tau_0,x_0)$ ; comparer avec 4.
* Variante : $x'=-2tx^2$ ; tout s'échange ($x_0<0$ explose, $x_0>0$ globale si $\tau_0=0$).
