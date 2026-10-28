---
id: ex-ch09-flot-antisymetrique-orthogonal
type: exercise
chapters: [9, 7, 5]
title: Équation linéaire à coefficients antisymétriques et groupe orthogonal
source: "PC Équations différentielles ex. 6 (adapté)"
difficulty: 2
time: 25
tools: [ch09-espace-tangent-graphe-equation, ch09-vecteur-tangent-espace-tangent-def, ch09-courbe-integrale-reste-dans-sous-variete-fermee, ch05-differentielle-bilineaire, ch07-cauchy-lipschitz]
---
## Énoncé

On note $\mathrm M_n(\R)$ l'espace des matrices réelles $n\times n$ ($n\ge2$), $\Sym_n$ le sous-espace des matrices symétriques, $\mathcal A_n$ celui des matrices antisymétriques (${}^tK=-K$), et
$$
O(n)=\{M\in\mathrm M_n(\R)\;;\;{}^tMM=I_n\}.
$$
On admet que $O(n)$ est une sous-variété de $\mathrm M_n(\R)$ définie par l'équation $\Phi(M)=0$, où $\Phi:\mathrm M_n(\R)\to\Sym_n$, $\Phi(M)={}^tMM-I_n$, et que $0$ est valeur régulière de $\Phi$.

1. Montrer que pour $M\in O(n)$, $T_MO(n)=\{MK\;;\;K\in\mathcal A_n\}$. Quelle est la dimension de $O(n)$ ?
2. Soit $A:\R\to\mathrm M_n(\R)$ continue, telle que $A(t)\in\mathcal A_n$ pour tout $t$. Soit $\alpha:J\to\mathrm M_n(\R)$ une solution, définie sur un intervalle ouvert $J$, de
$$
\alpha'(t)=A(t)\,\alpha(t),
$$
telle que $\alpha(t_0)\in O(n)$ pour un $t_0\in J$. Montrer, en raisonnant sur la sous-variété $O(n)$, que $\alpha(t)\in O(n)$ pour tout $t\in J$.
3. Retrouver ce résultat par un calcul direct.
4. Réciproquement, soit $A:\R\to\mathrm M_n(\R)$ continue telle que toute solution de $\alpha'=A(t)\alpha$ qui prend une valeur dans $O(n)$ reste dans $O(n)$ sur son intervalle de définition. Montrer que $A(t)\in\mathcal A_n$ pour tout $t$.

## Indices

### Indice 1
Une sous-variété fermée et un champ de vecteurs tangent à cette sous-variété : les courbes intégrales qui partent de la sous-variété y restent. Il faut donc d'abord savoir décrire les vecteurs tangents à $O(n)$.

### Indice 2
$T_MO(n)=\ker d\Phi_M$ et, $\Phi$ étant la composée d'une application bilinéaire et d'une translation, $d\Phi_M(H)={}^tHM+{}^tMH$. Écrire $H=MK$ avec $K=M^{-1}H={}^tMH$.

### Indice 3
Le champ $X(t,M)=A(t)M$ est tangent à $O(n)$ parce que $A(t)M=M\,({}^tMA(t)M)$ et que ${}^tMA(t)M$ est antisymétrique. Pour la question 4, regarder la solution qui vaut $I_n$ à l'instant $t_0$ et sa dérivée en $t_0$.

## Corrigé

**1.** L'application $B:(M,N)\mapsto{}^tMN$ est bilinéaire (continue, en dimension finie), donc $\Phi(M)=B(M,M)-I_n$ est différentiable et ([[ch05-differentielle-bilineaire]])
$$
d\Phi_M(H)=B(H,M)+B(M,H)={}^tHM+{}^tMH .
$$
Comme $0$ est valeur régulière de $\Phi$, la Proposition IX.7.13 ([[ch09-espace-tangent-graphe-equation]]) donne $T_MO(n)=\ker d\Phi_M$ pour $M\in O(n)$. Soit $H\in\mathrm M_n(\R)$ et $K={}^tMH$ ; comme $M{}^tM=I_n$ ($M$ est inversible d'inverse ${}^tM$), $H=MK$, et
$$
{}^tHM+{}^tMH={}^tK\,{}^tMM+{}^tMMK={}^tK+K .
$$
Donc $H\in T_MO(n)\iff K\in\mathcal A_n$, i.e. $T_MO(n)=M\mathcal A_n$. L'application $K\mapsto MK$ étant un isomorphisme linéaire, $\dim O(n)=\dim T_MO(n)=\dim\mathcal A_n=\frac{n(n-1)}2$ (Proposition IX.7.9). Contrôle : $\dim\mathrm M_n(\R)-\dim\Sym_n=n^2-\frac{n(n+1)}2=\frac{n(n-1)}2$, la codimension étant égale à la dimension de l'espace d'arrivée de l'équation.

**2.** On vérifie les hypothèses de la Proposition IX.8.1 ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]).

* *$O(n)$ est fermée* dans $\mathrm M_n(\R)$ : c'est $\Phi^{-1}(\{0\})$, image réciproque d'un fermé par une application continue.
* *Le champ.* On se ramène à l'instant initial $0$ : posons $\tilde A(s)=A(t_0+s)$, $\tilde\alpha(s)=\alpha(t_0+s)$ pour $s\in\tilde J=J-t_0$ (intervalle ouvert contenant $0$). Alors $\tilde\alpha'(s)=\tilde A(s)\tilde\alpha(s)$ et $\tilde\alpha(0)\in O(n)$. Le champ $X(s,M)=\tilde A(s)M$ est défini sur $I\times U$ avec $I=\R$ et $U=\mathrm M_n(\R)$ (ouvert contenant $O(n)$) ; il est continu, et localement lipschitzien en $M$ : pour une norme d'algèbre sur $\mathrm M_n(\R)$ et $s$ dans un compact $[\sigma_1,\sigma_2]$,
$$
\norm{X(s,M)-X(s,M')}\le\Big(\max_{[\sigma_1,\sigma_2]}\norm{\tilde A}\Big)\norm{M-M'} .
$$
Il vérifie donc les conditions de Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]).
* *Le champ est tangent.* Pour $M\in O(n)$, $X(s,M)=\tilde A(s)M=M\,K$ avec $K={}^tM\tilde A(s)M$, et ${}^tK={}^tM\,{}^t\tilde A(s)\,M=-K$. Par la question 1, $X(s,M)\in T_MO(n)$.

$\tilde\alpha$ est une courbe intégrale de $X$ sur $\tilde J$ avec $\tilde\alpha(0)\in O(n)$ : la Proposition IX.8.1 donne $\tilde\alpha(s)\in O(n)$ pour tout $s\in\tilde J$, i.e. $\alpha(t)\in O(n)$ pour tout $t\in J$.

**3.** Par la formule de dérivation d'un produit (bilinéarité, [[ch05-differentielle-bilineaire]]), $t\mapsto{}^t\alpha(t)\alpha(t)$ est dérivable sur $J$ et
$$
\frac{d}{dt}\big({}^t\alpha\alpha\big)={}^t\alpha'\alpha+{}^t\alpha\alpha'={}^t\alpha\,{}^tA\,\alpha+{}^t\alpha\,A\,\alpha={}^t\alpha\,({}^tA+A)\,\alpha=0 .
$$
Sur l'intervalle $J$, ${}^t\alpha\alpha$ est donc constante, égale à sa valeur $I_n$ en $t_0$ : $\alpha(t)\in O(n)$ pour tout $t\in J$. (Ici le calcul direct est plus court ; l'intérêt de la question 2 est qu'elle ne demande que la *tangence* du champ, ce qui s'adapte à des contraintes non quadratiques.)

**4.** Fixons $t_0\in\R$. L'équation $\alpha'=A(t)\alpha$ relève de Cauchy–Lipschitz (question 2) : il existe une solution $\alpha$ définie sur un intervalle ouvert $J\ni t_0$ avec $\alpha(t_0)=I_n\in O(n)$ ([[ch07-cauchy-lipschitz]]). Par hypothèse $\alpha(J)\subset O(n)$. La courbe $s\mapsto\alpha(t_0+s)$ est $C^1$, tracée dans $O(n)$, vaut $I_n$ en $s=0$ et a pour vecteur vitesse $\alpha'(t_0)=A(t_0)\alpha(t_0)=A(t_0)$ : par définition ([[ch09-vecteur-tangent-espace-tangent-def]]), $A(t_0)\in T_{I_n}O(n)$, qui vaut $\mathcal A_n$ d'après la question 1 (avec $M=I_n$). Donc $A(t_0)$ est antisymétrique, et ce pour tout $t_0$.

## Pièges et variantes

* Dans la Proposition IX.8.1, l'hypothèse « $S$ **fermée** » est essentielle : sans elle, une courbe intégrale peut sortir de $S$ par un point de $\bar S\setminus S$. Elle est ici immédiate, mais il faut la dire.
* Le champ doit être tangent en **tout** point de $O(n)$ et à **tout** instant, pas seulement au point initial.
* Ne pas confondre $T_MO(n)=M\mathcal A_n$ avec $\mathcal A_n$ : c'est seulement en $M=I_n$ que l'espace tangent est $\mathcal A_n$. (On a aussi $T_MO(n)=\mathcal A_nM$, car $MK=(MK{}^tM)M$.)
* Variante : l'équation $\alpha'=\alpha A(t)$ préserve aussi $O(n)$ ($\alpha A=\alpha K$ avec $K=A$). En revanche $\alpha'=A(t)\alpha+\alpha$ ne la préserve pas ($\frac{d}{dt}({}^t\alpha\alpha)=2\,{}^t\alpha\alpha$).
* Variante : $\det\alpha(t)\in\{-1,1\}$ est continue sur l'intervalle $J$ donc constante : si $\alpha(t_0)\in SO(n)$, $\alpha$ reste dans $SO(n)$. Pour $n=2$ et $A(t)=\omega(t)\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, la solution valant $I_2$ en $0$ est la rotation d'angle $\int_0^t\omega$.
