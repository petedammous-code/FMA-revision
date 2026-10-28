---
id: ch08-eab-complet-affine
type: proposition
chapter: 8
title: "$E_{a,b}$ est complet et est un espace affine d'espace vectoriel sous-jacent $E_{0,0}$"
ref: "Question 1, p. 143 (non numérotée, section VIII)"
page: 143
importance: 1
depends: [ch08-cadre-espace-courbes, ch05-primitive-integrale, ch05-theoreme-fondamental, ch05-integrale-fonctions-reglees]
tags: [banach, complet, espace-affine, extremites-fixees]
---
## Intuition

> 💡 Les courbes de $a$ à $b$ ne forment pas un espace vectoriel (la somme de deux telles courbes va de $2a$ à $2b$), mais la **différence** de deux telles courbes est une courbe qui part de $0$ et revient en $0$. C'est exactement la structure d'un **espace affine** : un ensemble de « points » ($E_{a,b}$) sur lequel un espace vectoriel de « déplacements » ($E_{0,0}$) agit par translation.

La complétude, elle, dit qu'une suite de courbes qui se rapprochent les unes des autres en norme $C^1$ (positions **et** vitesses) a une limite qui est encore une courbe $C^1$ de $a$ à $b$. C'est ce qui fait de $E$ un **espace de Banach** (espace vectoriel normé complet), cadre du calcul différentiel du chapitre V.

Notations : $E=C^1([0;1];V)$, $\norm\gamma_E=\sup_t\norm{\gamma(t)}_V+\sup_t\norm{\gamma'(t)}_V$, $E_{a,b}=\{\gamma\in E:\gamma(0)=a,\ \gamma(1)=b\}$ ([[ch08-cadre-espace-courbes]]).

## Énoncé

**Proposition (poly, Question 1, p. 143).** Soit $(V,\langle\cdot,\cdot\rangle)$ un espace de Hilbert de dimension finie, $E=C^1([0;1];V)$ muni de la norme $\norm\cdot_E$, et $a,b\in V$. Alors :

1. $(E,\norm\cdot_E)$ est un espace de Banach ;
2. $E_{a,b}$ est un fermé non vide de $E$ ; muni de la distance $d(\gamma,\tilde\gamma)=\norm{\tilde\gamma-\gamma}_E$, c'est donc un espace métrique **complet** ;
3. $E_{0,0}$ est un sous-espace vectoriel fermé de $E$, et $E_{a,b}$ est un espace affine d'espace vectoriel sous-jacent $E_{0,0}$ : pour tout $\gamma_0\in E_{a,b}$, $E_{a,b}=\gamma_0+E_{0,0}$ ; autrement dit, pour $\gamma,\tilde\gamma\in E_{a,b}$ on a $\tilde\gamma-\gamma\in E_{0,0}$, et pour $\gamma\in E_{a,b}$, $h\in E_{0,0}$ on a $\gamma+h\in E_{a,b}$.

(Le poly ajoute : passer en revue le cours pour se convaincre que le cadre naturel du calcul différentiel est celui des espaces affines associés à des espaces vectoriels normés.)

## Hypothèses

### H1 — $V$ est complet (ici : de dimension finie)

**Rôle.** Une suite de Cauchy uniforme de fonctions à valeurs dans $V$ converge uniformément parce que $V$ est complet ; de plus l'intégrale des fonctions continues à valeurs dans $V$ (et le [[ch05-primitive-integrale]]) est faite dans un espace de Banach.

**Si on la retire.** Les courbes constantes forment une copie isométrique de $V$ dans $E$ ($\norm{t\mapsto c}_E=\norm c_V$). Si $V$ n'est pas complet, une suite de Cauchy $(c_n)$ de $V$ sans limite donne une suite de Cauchy de courbes constantes dans $E$ ; si elle convergeait vers $\gamma\in E$, on aurait $c_n=\gamma_n(0)\to\gamma(0)\in V$, absurde. Exemple : $V$ = suites réelles à support fini, avec le produit scalaire $\sum x_ky_k$, et $c_n=(1,\frac12,\dots,\frac1n,0,0,\dots)$.

### H2 — La norme $C^1$ sur $E$

**Rôle.** Elle force la convergence uniforme **des dérivées**, ce qui permet d'identifier la dérivée de la limite.

**Si on la retire.** Pour la norme uniforme seule, $E$ n'est pas complet. Exemple vérifié ($V=\R$) : $\gamma_n(t)=\sqrt{(t-\frac12)^2+\frac1{n^2}}$ est $C^\infty$ et $0\le\gamma_n(t)-|t-\frac12|\le\frac1n$ (car $\sqrt{x^2+\eps^2}\le|x|+\eps$) ; $(\gamma_n)$ converge donc uniformément vers $|t-\frac12|$, qui n'est pas dérivable en $\frac12$. La suite est de Cauchy pour $\norm\cdot_\infty$, et elle n'a pas de limite dans $E$ (une limite uniforme est unique et devrait être $|t-\frac12|\notin E$).

### H3 — Les extrémités sont des conditions **linéaires continues**

**Rôle.** Les évaluations $\mathrm{ev}_s:\gamma\mapsto\gamma(s)$ ($s=0,1$) sont linéaires et $\norm{\gamma(s)}_V\le\norm\gamma_E$ : elles sont continues, ce qui rend $E_{a,b}$ fermé et $E_{0,0}$ sous-espace vectoriel.

**Si on la retire.** Une contrainte non affine ne donne plus un espace affine : par exemple $\{\gamma\in E:\norm{\gamma(1)}_V=1\}$ (extrémité libre sur la sphère unité) est fermé mais n'est pas un espace affine (pour $e\in V$ unitaire) : les courbes constantes $\gamma_1=e$ et $\gamma_2=-e$ y sont, mais pas leur milieu $\frac12(\gamma_1+\gamma_2)=0$, alors qu'un sous-espace affine est stable par barycentres. C'est le cadre des sous-variétés (chapitre IX).

## Idée de la preuve

Une suite de Cauchy $(\gamma_n)$ de $E$ a des positions et des vitesses uniformément de Cauchy, de limites $\gamma$ et $\delta$ ; on passe à la limite dans $\gamma_n(t)=\gamma_n(0)+\int_0^t\gamma_n'$ pour obtenir $\gamma'=\delta$. $E_{a,b}$ et $E_{0,0}$ sont des images réciproques par les évaluations continues $\gamma\mapsto(\gamma(0),\gamma(1))$.

## Preuve

*1. $E$ est complet.* Soit $(\gamma_n)$ une suite de Cauchy de $E$. Comme $\sup_t\norm{\gamma_n(t)-\gamma_m(t)}_V\le\norm{\gamma_n-\gamma_m}_E$ et $\sup_t\norm{\gamma_n'(t)-\gamma_m'(t)}_V\le\norm{\gamma_n-\gamma_m}_E$, les suites $(\gamma_n)$ et $(\gamma_n')$ sont uniformément de Cauchy sur $[0;1]$. Pour chaque $t$, $(\gamma_n(t))$ et $(\gamma'_n(t))$ sont de Cauchy dans $V$, complet (dimension finie), donc convergent vers des limites notées $\gamma(t)$ et $\delta(t)$ ; en faisant $m\to\infty$ dans les inégalités de Cauchy, la convergence est **uniforme**, donc $\gamma$ et $\delta$ sont continues (limite uniforme de fonctions continues).

Pour chaque $n$ et $t\in[0;1]$,
$$
\gamma_n(t)=\gamma_n(0)+\int_0^t\gamma_n'(s)\,ds .
$$
En effet, $G_n(t)=\int_0^t\gamma_n'(s)\,ds$ est continue sur $[0;1]$ et dérivable sur $]0;1[$ de dérivée $\gamma_n'$ ([[ch05-primitive-integrale]]) ; la différence $\gamma_n-G_n$ est continue sur $[0;1]$ et de dérivée nulle sur $]0;1[$, donc constante (c'est l'argument de la preuve de [[ch05-theoreme-fondamental]]), égale à sa valeur $\gamma_n(0)$ en $0$.

Passons à la limite : $\big\|\int_0^t\gamma_n'(s)\,ds-\int_0^t\delta(s)\,ds\big\|_V\le t\,\sup_s\norm{\gamma_n'(s)-\delta(s)}_V\to0$ ([[ch05-integrale-fonctions-reglees]]). Donc, pour tout $t\in[0;1]$,
$$
\gamma(t)=\gamma(0)+\int_0^t\delta(s)\,ds .
$$
Comme $\delta$ est continue, le [[ch05-primitive-integrale]] montre que $\gamma$ est dérivable de dérivée $\delta$ sur $]0;1[$ ; sa preuve, qui majore $\norm{G(t+k)-G(t)-\delta(t)k}\le|k|\sup_{|s-t|\le|k|}\norm{\delta(s)-\delta(t)}$, vaut aussi pour des accroissements unilatéraux en $t=0$ ($k>0$) et $t=1$ ($k<0$). Donc $\gamma\in C^1([0;1];V)$, $\gamma'=\delta$, et
$$
\norm{\gamma_n-\gamma}_E=\sup_t\norm{\gamma_n(t)-\gamma(t)}_V+\sup_t\norm{\gamma'_n(t)-\delta(t)}_V\xrightarrow[n\to\infty]{}0 .
$$
Ainsi $E$ est un espace de Banach.

*2. $E_{a,b}$ est fermé non vide.* Pour $s\in\{0,1\}$, l'évaluation $\mathrm{ev}_s:E\to V$, $\gamma\mapsto\gamma(s)$, est linéaire et vérifie $\norm{\mathrm{ev}_s(\gamma)}_V\le\norm\gamma_E$ : elle est continue. Donc $E_{a,b}=\mathrm{ev}_0^{-1}(\{a\})\cap\mathrm{ev}_1^{-1}(\{b\})$ est fermé dans $E$. Il est non vide : il contient le segment $\gamma_0(t)=a+t(b-a)$. Un fermé d'un espace métrique complet est complet (une suite de Cauchy de $E_{a,b}$ converge dans $E$, et sa limite reste dans le fermé $E_{a,b}$).

*3. Structure affine.* $E_{0,0}=\ker\mathrm{ev}_0\cap\ker\mathrm{ev}_1$ est un sous-espace vectoriel fermé de $E$ (intersection de noyaux d'applications linéaires continues). Si $\gamma,\tilde\gamma\in E_{a,b}$, alors $(\tilde\gamma-\gamma)(0)=a-a=0$ et $(\tilde\gamma-\gamma)(1)=b-b=0$ : $\tilde\gamma-\gamma\in E_{0,0}$. Si $\gamma\in E_{a,b}$ et $h\in E_{0,0}$, alors $(\gamma+h)(0)=a$, $(\gamma+h)(1)=b$ : $\gamma+h\in E_{a,b}$. Pour $\gamma_0\in E_{a,b}$ fixé, on a donc $E_{a,b}=\gamma_0+E_{0,0}$, et l'application $(\gamma,h)\mapsto\gamma+h$ fait agir $E_{0,0}$ sur $E_{a,b}$ de façon libre et transitive : $E_{a,b}$ est un espace affine de direction $E_{0,0}$. $\square$

*Sur la remarque du poly.* La définition de la différentielle ([[ch05-differentielle-def]]) n'utilise que des **différences** $f(a+h)-f(a)$ et des accroissements $h$ dans un espace vectoriel normé : elle a donc un sens pour une fonction définie sur un ouvert d'un espace affine $\mathcal A$ dirigé par un espace normé $\vec{\mathcal A}$, la différentielle étant une application linéaire continue sur $\vec{\mathcal A}$. Ici : la différentielle de $\hat L|_{E_{a,b}}$ en $\gamma$ est la restriction de $d\hat L_\gamma$ à $E_{0,0}$, ce qui définit les points critiques de [[ch08-euler-lagrange]].

## Preuve à trous

*1.* Soit $(\gamma_n)$ de Cauchy dans $E$. Alors <trou indice="que contrôle chacun des deux termes de la norme ?">$(\gamma_n)$ et $(\gamma'_n)$ sont uniformément de Cauchy, donc convergent uniformément (car $V$ est complet) vers des fonctions continues $\gamma$ et $\delta$</trou>. On écrit $\gamma_n(t)=\gamma_n(0)+\int_0^t\gamma_n'(s)\,ds$ et l'on passe à la limite grâce à $\big\|\int_0^t(\gamma_n'-\delta)\big\|_V\le\sup\norm{\gamma'_n-\delta}_V$ : <trou>$\gamma(t)=\gamma(0)+\int_0^t\delta(s)\,ds$, donc $\gamma$ est $C^1$ et $\gamma'=\delta$ par le théorème de dérivation d'une primitive</trou>. Ainsi $\norm{\gamma_n-\gamma}_E\to0$.

*2.* Les évaluations $\gamma\mapsto\gamma(0)$ et $\gamma\mapsto\gamma(1)$ sont <trou indice="quelle inégalité les relie à la norme E ?">linéaires et continues car $\norm{\gamma(s)}_V\le\norm\gamma_E$</trou> ; $E_{a,b}$, intersection d'images réciproques de singletons, est fermé, non vide (il contient $t\mapsto a+t(b-a)$), donc complet.

*3.* $E_{0,0}$ est l'intersection des noyaux de ces évaluations, et <trou>la différence de deux courbes de $E_{a,b}$ est nulle en $0$ et en $1$, tandis que $\gamma+h\in E_{a,b}$ pour $\gamma\in E_{a,b}$, $h\in E_{0,0}$</trou> : $E_{a,b}=\gamma_0+E_{0,0}$. $\square$

## Exemples

* **Variations d'une courbe.** $V=\R$, $a=0$, $b=1$, $\gamma_0(t)=t$. Pour $h(t)=\sin(\pi t)\in E_{0,0}$ et $s\in\R$, $\gamma_0+sh\in E_{0,1}$ : c'est une droite affine de courbes passant toutes par $0$ en $t=0$ et par $1$ en $t=1$. Ce sont ces droites qu'on utilise pour calculer $\frac{d}{ds}\hat L(\gamma_0+sh)\big|_{s=0}=d\hat L_{\gamma_0}(h)$.
* **Le choix de l'origine est arbitraire.** Toute $\gamma\in E_{0,1}$ s'écrit $\gamma=\gamma_0+h$ avec $h=\gamma-\gamma_0\in E_{0,0}$ ; par exemple $\gamma(t)=t^2$ correspond à $h(t)=t^2-t$. On aurait pu choisir $\gamma_0(t)=t^3$ comme origine : la direction $E_{0,0}$ ne change pas.
* **Une suite convergente dans $E$.** $\gamma_n(t)=t+\frac1n\sin(\pi t)$ est dans $E_{0,1}$ et $\norm{\gamma_n-\gamma_0}_E=\frac1n+\frac\pi n\to0$ ; sa limite $\gamma_0$ est bien dans $E_{0,1}$, comme le prévoit la fermeture.

## Pièges

* > ⚠️ $E_{a,b}$ est un espace métrique complet, mais **pas un espace vectoriel** si $(a,b)\neq(0,0)$ : ne pas y faire de combinaisons linéaires $\lambda\gamma+\mu\tilde\gamma$ (seulement des combinaisons affines, $\lambda+\mu=1$).
* La différentielle d'une fonction sur $E_{a,b}$ en $\gamma$ est une forme linéaire sur $E_{0,0}$ (les directions admissibles), pas sur $E$ : un point critique de $\hat L|_{E_{a,b}}$ ne vérifie $d\hat L_\gamma(h)=0$ que pour $h(0)=h(1)=0$.
* La complétude vient de la norme $C^1$ : pour la norme uniforme, des courbes lisses peuvent converger vers une courbe à coin (H2).
* Le théorème de dérivation d'une primitive est énoncé dans le poly sur l'intervalle ouvert ; aux extrémités $0$ et $1$, la même preuve donne les dérivées unilatérales, ce qui est exactement ce qu'exige $C^1([0;1];V)$.
