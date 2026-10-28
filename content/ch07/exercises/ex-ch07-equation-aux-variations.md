---
id: ex-ch07-equation-aux-variations
type: exercise
chapters: [7, 5]
title: Différentielle du flot et équation aux variations
source: "Classique (équation aux variations, cf. Arnold, *Équations différentielles ordinaires*) — rédaction et exemple inventés"
difficulty: 3
time: 45
tools: [ch07-flot-global-ouvert-regulier, ch07-proprietes-flot-formules, ch07-groupe-un-parametre, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-restriction-domaine-c1-lipschitz, ch05-lemme-schwarz, ch05-composition-differentielles]
---
## Énoncé

Soit $X:\R^n\to\R^n$ un champ de vecteurs (indépendant du temps) de classe $C^2$. Pour $x\in\R^n$, on note $J(x)$ l'intervalle de définition de la courbe intégrale maximale de $X$ valant $x$ en $t=0$, $F(t,x)$ sa valeur au temps $t\in J(x)$, et $D_0=\{(t,x) : t\in J(x)\}$. On fixe $x\in\R^n$ et, pour $t\in J(x)$, on note
$$
M(t)=\frac{\partial F}{\partial x}(t,x)\in\Mat_n(\R)\qquad(\text{matrice jacobienne de } y\mapsto F(t,y) \text{ en } y=x),\qquad A(t)=dX_{F(t,x)}\in\Mat_n(\R).
$$

1. Justifier que $M(t)$ est bien défini pour $t\in J(x)$, que $t\mapsto M(t)$ est de classe $C^1$ et que
$$
M'(t)=A(t)\,M(t),\qquad M(0)=I_n .
$$
2. Montrer que $M$ est l'unique solution sur $J(x)$ de ce problème de Cauchy (d'inconnue à valeurs dans $\Mat_n(\R)$).
3. Montrer que $M(t)\,X(x)=X\big(F(t,x)\big)$ pour tout $t\in J(x)$.
4. On suppose que $X(p)=0$. Montrer que $J(p)=\R$ et que $\dfrac{\partial F}{\partial x}(t,p)=\exp\big(t\,dX_p\big)$ pour tout $t\in\R$.
5. On suppose $X(x)\neq0$ et qu'il existe $T>0$ tel que $F(T,x)=x$. Montrer que $1$ est valeur propre de $\dfrac{\partial F}{\partial x}(T,x)$.
6. Dans cette question $n=1$ et $X(x)=x-x^3$.
   a) Vérifier que $F(t,x)=\dfrac{x\,e^t}{\sqrt{1-x^2+x^2e^{2t}}}$ et déterminer $J(x)$ selon la valeur de $|x|$.
   b) Calculer $\dfrac{\partial F}{\partial x}(t,0)$ et $\dfrac{\partial F}{\partial x}(t,1)$ sans dériver la formule de a), puis contrôler l'un des deux par un calcul direct. Interpréter.
   c) Pour $x\notin\{-1,0,1\}$, exprimer $\dfrac{\partial F}{\partial x}(t,x)$ à l'aide de $X$ et $F$ seulement.

## Indices

### Indice 1
Le flot d'un champ régulier est régulier : quel théorème le dit, et avec quelle classe ? Il s'agit ensuite de dériver $\partial_tF(t,y)=X(F(t,y))$ par rapport à $y$ et d'échanger l'ordre des dérivations.

### Indice 2
$F$ est $C^2$ sur l'ouvert $D_0$ (car $X$ est $C^2$) : le lemme de Schwarz permet d'écrire $\partial_t\partial_{y_j}F=\partial_{y_j}\partial_tF$, et la règle de la chaîne donne $\partial_{y_j}\big(X\circ F\big)=dX_F\big(\partial_{y_j}F\big)$. Pour 2 et 3, l'équation $Z'=A(t)Z$ est linéaire à coefficient continu : unicité.

### Indice 3
Pour 3, vérifier que $t\mapsto X(F(t,x))$ et $t\mapsto M(t)X(x)$ résolvent toutes deux $z'=A(t)z$, $z(0)=X(x)$ (ou dériver $F(t,F(s,x))=F(t+s,x)$ en $s=0$). Pour 4, $F(t,p)=p$ rend $A$ constant. Pour 6.b, $dX_0=1$ et $dX_1=1-3=-2$.

## Corrigé

**1.** $X$ est $C^2$, donc $C^1$ et localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). Par le théorème [[ch07-flot-global-ouvert-regulier]] (cas autonome, $\tau_0=0$), le domaine $D$ du flot est ouvert et $F$ est de classe $C^2$ ; donc $D_0$, image réciproque de $D$ par $(t,y)\mapsto(0,t,y)$, est un ouvert de $\R\times\R^n$ et $(t,y)\mapsto F(t,y)$ est $C^2$ sur $D_0$. Pour $t\in J(x)$, $(t,x)\in D_0$ ouvert, donc $y\mapsto F(t,y)$ est définie et $C^2$ au voisinage de $x$ : $M(t)$ est bien défini, et $t\mapsto M(t)$, dont les coefficients sont des dérivées partielles premières de $F$, est $C^1$.

D'après [[ch07-proprietes-flot-formules]], $\partial_tF(t,y)=X(F(t,y))$ sur $D_0$. Le membre de droite est $C^1$ ; par la règle de la chaîne ([[ch05-composition-differentielles]]), pour $j=1,\dots,n$,
$$
\partial_{y_j}\big(\partial_tF\big)(t,y)=dX_{F(t,y)}\big(\partial_{y_j}F(t,y)\big).
$$
$F$ étant $C^2$ sur l'ouvert $D_0$, le lemme de Schwarz [[ch05-lemme-schwarz]] donne $\partial_t\partial_{y_j}F=\partial_{y_j}\partial_tF$. En $y=x$, la $j$-ième colonne $\partial_{y_j}F(t,x)$ de $M(t)$ vérifie donc $\frac{d}{dt}\partial_{y_j}F(t,x)=A(t)\,\partial_{y_j}F(t,x)$, c'est-à-dire $M'(t)=A(t)M(t)$. Enfin $F(0,y)=y$ pour tout $y$ (formule (VII.3.4)), donc $M(0)=I_n$.

**2.** $A(t)=dX_{F(t,x)}$ est continue sur $J(x)$ (composée de $t\mapsto F(t,x)$ continue et de $z\mapsto dX_z$ continue). Le champ $G:J(x)\times\Mat_n(\R)\to\Mat_n(\R)$, $G(t,Z)=A(t)Z$, est continu et, sur tout $[t_1-a,t_1+a]\subset J(x)$, $\|G(t,Z_1)-G(t,Z_2)\|\le\big(\max_{[t_1-a,t_1+a]}\|A\|\big)\|Z_1-Z_2\|$ : il est localement lipschitzien en $Z$. Par l'unicité globale [[ch07-unicite-globale]], deux solutions sur $J(x)$ valant $I_n$ en $0$ coïncident : $M$ est l'unique solution.

**3.** Posons $y(t)=X(F(t,x))$ et $z(t)=M(t)X(x)$ pour $t\in J(x)$.
* $y$ est $C^1$ et $y'(t)=dX_{F(t,x)}\big(\partial_tF(t,x)\big)=A(t)\,X(F(t,x))=A(t)y(t)$, $y(0)=X(x)$.
* $z'(t)=M'(t)X(x)=A(t)z(t)$, $z(0)=X(x)$.

Le champ $(t,w)\mapsto A(t)w$ sur $J(x)\times\R^n$ est localement lipschitzien en $w$ (même argument qu'en 2.), donc $y=z$ par [[ch07-unicite-globale]].

*Autre preuve.* Pour $t\in J(x)$ et $s$ voisin de $0$, $(s,x)\in D_0$ et $(t,F(s,x))\in D_0$ (car $D_0$ est ouvert et $(t,F(s,x))\to(t,x)$), donc la propriété de groupe [[ch07-groupe-un-parametre]] donne $F\big(t,F(s,x)\big)=F(t+s,x)$. En dérivant en $s=0$ : $M(t)\,\partial_sF(0,x)=\partial_tF(t,x)$, soit $M(t)X(x)=X(F(t,x))$.

**4.** La fonction constante égale à $p$ est une courbe intégrale de $X$ définie sur $\R$ (sa dérivée $0$ vaut $X(p)$) : par maximalité ([[ch07-courbe-integrale-maximale-def]]) $J(p)=\R$ et $F(t,p)=p$. Alors $A(t)=dX_p=:L$ est constante et le problème de 1. devient $M'=LM$, $M(0)=I_n$. Or $t\mapsto\exp(tL)=\sum_{k\ge0}\frac{t^kL^k}{k!}$ en est solution sur $\R$ (dérivation terme à terme d'une série entière de rayon infini ; poly, Exercice VII.4.3, p. 138). Par 2., $\dfrac{\partial F}{\partial x}(t,p)=\exp(t\,dX_p)$.

**5.** $F(T,x)$ est défini, donc $T\in J(x)$, et la question 3 en $t=T$ donne
$$
\frac{\partial F}{\partial x}(T,x)\,X(x)=X\big(F(T,x)\big)=X(x).
$$
Comme $X(x)\neq0$, c'est un vecteur propre associé à la valeur propre $1$. (Interprétation : un petit déplacement **le long** de l'orbite périodique revient à lui-même après une période.)

**6. a)** Notons $N(t)=1-x^2+x^2e^{2t}$ et $\phi(t)=xe^tN(t)^{-1/2}$. On a $\phi(0)=x$. Pour $x\neq0$, posons $u=1/\phi^2=\dfrac{N(t)e^{-2t}}{x^2}=1+\dfrac{1-x^2}{x^2}e^{-2t}$ ; alors $u'=-2(u-1)$, et comme $u'=-2\phi'/\phi^3$,
$$
\phi'=-\tfrac12\phi^3u'=\phi^3(u-1)=\phi^3\Big(\frac1{\phi^2}-1\Big)=\phi-\phi^3=X(\phi).
$$
(Pour $x=0$, $\phi\equiv0$ est la solution.) Domaine : si $|x|\le1$, $N(t)\ge x^2e^{2t}>0$ pour $x\neq0$ (et $N=1$ si $x=0$), donc $\phi$ est définie sur $\R$ et $J(x)=\R$. Si $|x|>1$, $N(t)>0\iff e^{2t}>1-x^{-2}\iff t>t_*:=\tfrac12\ln(1-x^{-2})$ ($t_*<0$) ; $\phi$ est solution sur $]t_*,+\infty[$ et $|\phi(t)|\to+\infty$ quand $t\to t_*^+$, ce qui interdit tout prolongement : $J(x)=\,]\tfrac12\ln(1-x^{-2}),+\infty[$.

**b)** $X(0)=0$, $X(1)=0$ et $X'(x)=1-3x^2$, donc $dX_0=1$, $dX_1=-2$. Par 4. (avec $n=1$, $\exp(tL)=e^{tL}$) :
$$
\frac{\partial F}{\partial x}(t,0)=e^{t},\qquad\frac{\partial F}{\partial x}(t,1)=e^{-2t}.
$$
*Contrôle direct en $x=1$.* $\partial_xN=2x(e^{2t}-1)$ et $\partial_xF=e^tN^{-1/2}-\tfrac12xe^tN^{-3/2}\partial_xN$. En $x=1$, $N=e^{2t}$ :
$$
\partial_xF(t,1)=e^te^{-t}-\tfrac12e^te^{-3t}\cdot2(e^{2t}-1)=1-(1-e^{-2t})=e^{-2t}.
$$
*Interprétation.* Un écart initial $\delta$ autour de l'équilibre $0$ devient $\approx\delta e^t$ (l'équilibre $0$ est répulsif) ; autour de $1$ il devient $\approx\delta e^{-2t}$ (l'équilibre $1$ est attractif ; de même pour $-1$).

**c)** Pour $x\notin\{-1,0,1\}$, $X(x)\neq0$ et, en dimension $1$, $M(t)$ est un réel : la question 3 donne
$$
\frac{\partial F}{\partial x}(t,x)=\frac{X\big(F(t,x)\big)}{X(x)}=\frac{F(t,x)-F(t,x)^3}{x-x^3}\qquad(t\in J(x)).
$$
Par exemple, pour $x=\tfrac12$ et $t=\ln2$ : $F=\big(1-\tfrac14+1\big)^{-1/2}=\sqrt{4/7}\approx0{,}756$ et $\partial_xF\approx\dfrac{0{,}756-0{,}432}{0{,}375}\approx0{,}864$ (valeur confirmée par différences finies).

## Pièges et variantes

* Écrire $\frac{d}{dt}\partial_xF=\partial_x\frac{d}{dt}F$ sans justification : c'est le lemme de Schwarz, qui demande $F$ de classe $C^2$ — d'où l'hypothèse $X\in C^2$ (via [[ch07-flot-global-ouvert-regulier]]). Le résultat reste vrai pour $X$ seulement $C^1$, mais la preuve est plus délicate (dérivation du point fixe de Picard à paramètre).
* Confondre $A(t)=dX_{F(t,x)}$, qui dépend du temps le long de la trajectoire, avec $dX_x$ : la formule $M(t)=e^{t\,dX_x}$ est **fausse** en général ; elle ne vaut qu'aux équilibres (question 4). En dimension $1$, la bonne formule est $M(t)=\exp\int_0^tX'(F(s,x))\,ds$.
* En 5., on ne peut rien dire de plus en général sur les autres valeurs propres : ce sont elles (les « multiplicateurs de Floquet ») qui décident de la stabilité de l'orbite périodique.
* Variante : avec la formule de Liouville $\frac{d}{dt}\det M(t)=\mathrm{Tr}\,A(t)\,\det M(t)$, on retrouve qu'un champ de divergence nulle a un flot qui préserve le volume (poly, Exercice VII.4.8).
