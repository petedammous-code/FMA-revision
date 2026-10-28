---
id: ch09-lemme-morse-sous-variete
type: proposition
chapter: 9
title: Lemme de Morse sur une sous-variété
ref: Remarque IX.7.40
page: 171
importance: 2
depends: [ch06-lemme-de-morse, ch09-hessienne-def, ch09-espace-tangent-image-dx, ch09-sous-variete-def, ch06-point-critique-non-degenere-def]
tags: [morse, hessienne, point-critique, signature, parametrage, sous-variete]
---
## Intuition

> 💡 Près d'un point critique **non dégénéré**, une fonction sur une sous-variété ressemble exactement (pas seulement à l'ordre $2$) à sa partie quadratique : en choisissant bien les coordonnées locales, $f$ **devient** $f(p)+u_1^2+\dots+u_r^2-u_{r+1}^2-\dots-u_m^2$. Il n'y a donc, localement, que $m+1$ « modèles » de points critiques non dégénérés : le bol ($r=m$), la bosse ($r=0$) et les cols ($0<r<m$).

Vocabulaire. $p$ est un **point critique** de $f : S\to\R$ si $df_p=0$ sur l'espace tangent $T_pS$ ; on peut alors définir la **hessienne** $d^2f_p$, forme bilinéaire symétrique sur $T_pS$ ([[ch09-hessienne-def]]). Elle est **non dégénérée** si $d^2f_p(v,\cdot)=0$ entraîne $v=0$ ; sa **signature** $(r,s)$ compte les carrés positifs et négatifs dans une réduction de Gauss (loi d'inertie de Sylvester, [[ch06-point-critique-non-degenere-def]]) ; non dégénérée équivaut à $r+s=m=\dim T_pS$. Un **paramétrage local** $x : U\to S$ est une immersion $C^k$ qui est un homéomorphisme de l'ouvert $U\subset\R^m$ sur un ouvert de $S$ ([[ch09-sous-variete-def]]).

Le poly le dit : il n'y a « rien à démontrer de plus » que sur un ouvert de $\R^m$ ([[ch06-lemme-de-morse]]) — tout se transporte par un paramétrage.

## Énoncé

**Proposition (poly, Remarque IX.7.40 — Lemme de Morse sur une sous-variété, p. 171).** Soient $S$ une sous-variété de dimension $m$ de $\R^N$ de classe $C^\infty$, $f : S\to\R$ une fonction de classe $C^\infty$ et $p$ un point critique de $f$. Supposons que la hessienne $d^2f_p$ soit une forme bilinéaire symétrique non dégénérée sur $T_pS$, de signature $(r,s)$, avec $r+s=m$. Alors il existe un paramétrage local $x : U\to S$ de $S$ en $p$, avec $0\in U$ et $x(0)=p$, tel que
$$
f\big(x(u)\big)=f(p)+\sum_{i=1}^r u_i^2-\sum_{i=r+1}^m u_i^2,\qquad u=(u_1,\dots,u_m)\in U.
$$

## Hypothèses

### H1 — $S$ et $f$ de classe $C^\infty$

**Rôle.** Le lemme de Morse sur un ouvert de $\R^m$ ([[ch06-lemme-de-morse]]) est énoncé pour une fonction $C^\infty$ ; ici on l'applique à $g=f\circ y$, qui est $C^\infty$ parce que $f$ l'est (et le paramétrage $y$ aussi, $S$ étant $C^\infty$). Le paramétrage obtenu $x=y\circ\psi$ est alors $C^\infty$.

**Si on la retire.** Hypothèse de confort : si $S$ et $f$ sont seulement de classe $C^k$ avec $k\ge3$, la preuve du lemme de Morse sur un ouvert fournit encore un difféomorphisme $\psi$ de classe $C^{k-2}$ (voir les hypothèses de [[ch06-lemme-de-morse]]), et $x=y\circ\psi$ est un paramétrage local de classe $C^{k-2}$ seulement : la conclusion subsiste, avec une perte de régularité. Le cas $C^2$ n'est pas traité par cette preuve.

### H2 — $p$ est un point critique

**Rôle.** Sans cela la hessienne $d^2f_p$ n'est même pas définie (elle dépend du paramétrage, [[ch09-changement-parametrage-differentielle-seconde]]) ; et c'est $dg_{q_0}=0$ qui permet d'appliquer le lemme de Morse à $g$.

**Si on la retire.** La conclusion est impossible : si $f\circ x=f(p)+Q$ avec $Q$ quadratique, alors $d(f\circ x)_0=dQ_0=0$, donc $df_p\circ dx_0=0$ et, $dx_0$ étant un isomorphisme de $\R^m$ sur $T_pS$, $df_p=0$. Exemple : $S=\R$, $f(u)=u$, $p=0$ : pour tout paramétrage $x$ avec $x(0)=0$, $(f\circ x)'(0)=x'(0)\ne0$, alors que $(\pm u^2)'(0)=0$.

### H3 — $d^2f_p$ non dégénérée

**Rôle.** Elle se transporte à $d^2g_{q_0}$ (non dégénérée, même signature), hypothèse essentielle du lemme de Morse sur un ouvert.

**Si on la retire.** $S=\R$, $f(u)=u^3$, $p=0$ : critique, $d^2f_0=0$ dégénérée. Ici $m=1$ et la conclusion demanderait $f(x(u))=\pm u^2$. Or si $x(u)^3=u^2\ge0$ on aurait $x(u)\ge0$ près de $0$, ce qui est impossible pour un homéomorphisme d'un intervalle ouvert contenant $0$ sur un voisinage de $0$ avec $x(0)=0$ (il prend des valeurs négatives d'un côté) ; même raisonnement pour $-u^2$. Autre phénomène : $f(u_1,u_2)=u_1^2$ sur $S=\R^2$ a tous les points de la droite $u_1=0$ comme points critiques (dégénérés), alors qu'un point critique non dégénéré est **isolé** (voir Exemples).

## Idée de la preuve

On choisit un paramétrage quelconque $y$ en $p$ ; $g=f\circ y$ a un point critique non dégénéré de même signature, car $dy_{q_0}$ est un isomorphisme $\R^m\to T_pS$. Le lemme de Morse sur un ouvert fournit $\psi$ avec $g\circ\psi$ quadratique ; le paramétrage cherché est $x=y\circ\psi$.

## Preuve

Soit $y : U_1\to V\cap S$ un paramétrage local quelconque de $S$ en $p$ ($U_1$ ouvert de $\R^m$, $V$ ouvert de $\R^N$), avec $y(q_0)=p$, et posons $g=f\circ y$, fonction de classe $C^\infty$ sur l'ouvert $U_1$ de $\R^m$.

**$q_0$ est un point critique de $g$.** En effet $dg_{q_0}=df_p\circ dy_{q_0}=0$.

**Hessienne de $g$.** La définition même de la hessienne ([[ch09-hessienne-def]]), appliquée avec le paramétrage $y$ et les vecteurs $v=dy_{q_0}(h)$, $w=dy_{q_0}(k)$, donne
$$
d^2g_{q_0}(h,k)=d^2f_p\big(dy_{q_0}(h),dy_{q_0}(k)\big),\qquad(h,k\in\R^m).
$$
Comme $dy_{q_0}$ est un isomorphisme de $\R^m$ sur $T_pS$ ([[ch09-espace-tangent-image-dx]]), la forme $d^2g_{q_0}$ est **congruente** à $d^2f_p$ : si $(e_1,\dots,e_m)$ est une base de $T_pS$ dans laquelle $d^2f_p$ a pour matrice $\mathrm{diag}(1,\dots,1,-1,\dots,-1)$ ($r$ signes $+$, $s$ signes $-$), alors $d^2g_{q_0}$ a la même matrice dans la base $(dy_{q_0}^{-1}(e_i))_i$ de $\R^m$. Elle est donc non dégénérée et de même signature $(r,s)$.

**Lemme de Morse sur un ouvert.** L'exercice VI.3.4 ([[ch06-lemme-de-morse]]) fournit un voisinage ouvert $W$ de $0$ dans $\R^m$ et un $C^\infty$-difféomorphisme $\psi$ de $W$ sur un voisinage ouvert $\psi(W)\subset U_1$ de $q_0$, avec $\psi(0)=q_0$, tel que
$$
g\big(\psi(u)\big)=g(q_0)+\sum_{i=1}^r u_i^2-\sum_{i=r+1}^m u_i^2,\qquad u\in W.
$$

**$x=y\circ\psi$ est un paramétrage local en $p$.** Posons $U=W$ et $x=y\circ\psi : U\to S$. Alors :
* $x$ est de classe $C^\infty$ (composée) ;
* $x$ est un homéomorphisme de $U$ sur $y(\psi(W))$ : $\psi$ est un homéomorphisme de $W$ sur l'ouvert $\psi(W)$ de $U_1$, et $y$ un homéomorphisme de $U_1$ sur $V\cap S$, qui envoie l'ouvert $\psi(W)$ sur un ouvert de $V\cap S$, donc de la forme $V'\cap S$ avec $V'\subset V$ ouvert de $\R^N$ contenant $p$ ;
* $dx_u=dy_{\psi(u)}\circ d\psi_u$ est injective, composée d'une injection et d'un isomorphisme.

Donc $x : U\to V'\cap S$ est un paramétrage local de $S$ en $p$ ([[ch09-sous-variete-def]]), avec $0\in U$ et $x(0)=y(q_0)=p$.

**Conclusion.** Pour $u\in U$, $f(x(u))=g(\psi(u))=g(q_0)+\sum_{i\le r}u_i^2-\sum_{i>r}u_i^2$, et $g(q_0)=f(p)$. $\square$

## Preuve à trous

Soit $y : U_1\to S$ un paramétrage local en $p$, $y(q_0)=p$, et $g=f\circ y$, de classe $C^\infty$ sur l'ouvert $U_1$. Comme <trou>$dg_{q_0}=df_p\circ dy_{q_0}=0$</trou>, $q_0$ est critique pour $g$, et par définition de la hessienne $d^2g_{q_0}(h,k)=d^2f_p\big(dy_{q_0}(h),dy_{q_0}(k)\big)$.

Comme <trou indice="que sait-on de dy en q0 ?">$dy_{q_0}$ est un isomorphisme de $\R^m$ sur $T_pS$, $d^2g_{q_0}$ est congruente à $d^2f_p$, donc non dégénérée de même signature $(r,s)$</trou>.

Le <trou indice="chapitre VI">lemme de Morse sur un ouvert (exercice VI.3.4) fournit un difféomorphisme $\psi$ d'un voisinage $W$ de $0$ sur un voisinage de $q_0$, $\psi(0)=q_0$, avec $g\circ\psi(u)=g(q_0)+\sum_{i\le r}u_i^2-\sum_{i>r}u_i^2$</trou>.

Enfin <trou>$x=y\circ\psi$</trou> est un paramétrage local en $p$ ($C^\infty$, homéomorphisme sur un ouvert de $S$, différentielle $dy_{\psi(u)}\circ d\psi_u$ injective), et $f\circ x=g\circ\psi$ a la forme voulue. $\square$

## Exemples

* **Pôle nord de la sphère, signature $(0,2)$.** $S=\mathbb S^2$, $f(y)=y_3$, $p=e_3$ : la hessienne est $-(v_1^2+v_2^2)$ (voir [[ch09-hessienne-extrema-ordre-deux]]). Un paramétrage de Morse explicite : $x(u)=\big(u\sqrt{2-\|u\|^2},\,1-\|u\|^2\big)$ pour $u\in D(0,1)\subset\R^2$. On vérifie $\|u\|^2(2-\|u\|^2)+(1-\|u\|^2)^2=1$, donc $x(u)\in\mathbb S^2$, et $x$ est une bijection de $D(0,1)$ sur l'hémisphère ouvert $\{y_3>0\}$, d'inverse $G(y)=(y_1,y_2)/\sqrt{1+y_3}$ (car $2-\|u\|^2=1+y_3$), restriction d'une application $C^\infty$ sur l'ouvert $\{y_3>-1\}$ de $\R^3$. De $G\circ x=\id$ on tire $dG\circ dx=\id$, donc $dx$ injective : $x$ est un paramétrage local, et $f(x(u))=1-u_1^2-u_2^2$.

* **Le tore et ses quatre points critiques.** Sur le tore $T$ de [[ch09-ex-tore]] ($0<r<a$), paramétré par $X(\theta,\varphi)=\big((a+r\cos\varphi)\cos\theta,(a+r\cos\varphi)\sin\theta,r\sin\varphi\big)$, prenons $f(y)=y_1$, d'où $g(\theta,\varphi)=(a+r\cos\varphi)\cos\theta$. On a $g_\theta=-(a+r\cos\varphi)\sin\theta$, $g_\varphi=-r\sin\varphi\cos\theta$ ; comme $a+r\cos\varphi>0$, les points critiques sont $\theta,\varphi\in\{0,\pi\}$. Aux points critiques, $g_{\theta\theta}=-(a+r\cos\varphi)\cos\theta$, $g_{\varphi\varphi}=-r\cos\varphi\cos\theta$, $g_{\theta\varphi}=r\sin\varphi\sin\theta=0$ :

| $(\theta,\varphi)$ | point | $(g_{\theta\theta},g_{\varphi\varphi})$ | signature | nature |
|---|---|---|---|---|
| $(0,0)$ | $(a+r,0,0)$ | $(-(a+r),-r)$ | $(0,2)$ | maximum |
| $(0,\pi)$ | $(a-r,0,0)$ | $(-(a-r),r)$ | $(1,1)$ | col |
| $(\pi,\pi)$ | $(-(a-r),0,0)$ | $(a-r,-r)$ | $(1,1)$ | col |
| $(\pi,0)$ | $(-(a+r),0,0)$ | $(a+r,r)$ | $(2,0)$ | minimum |

Les quatre sont non dégénérés ; près d'un col, il existe des coordonnées où $f=f(p)+u_1^2-u_2^2$ : les lignes de niveau $f=f(p)$ forment localement une **croix**.

* **Isolement.** Si $p$ est un point critique non dégénéré, dans le paramétrage de Morse $d(f\circ x)_u=2(u_1,\dots,u_r,-u_{r+1},\dots,-u_m)$ ne s'annule qu'en $u=0$ ; comme $dx_u$ est un isomorphisme sur $T_{x(u)}S$, $p$ est le seul point critique de $f$ dans l'ouvert $x(U)$ : **les points critiques non dégénérés sont isolés**.

## Pièges

* > ⚠️ Le lemme donne un **paramétrage** (des coordonnées locales sur $S$), pas un changement de variables de $\R^N$ ; et ce paramétrage n'est pas quelconque : il dépend de $f$.
* La signature $(r,s)$ se lit sur la hessienne **intrinsèque** $d^2f_p$ sur $T_pS$, pas sur la différentielle seconde d'une extension de $f$ à $\R^N$ restreinte à $T_pS$ (terme de courbure, voir [[ch09-hessienne-extrema-ordre-deux]]).
* $r$ est le nombre de carrés **positifs** : $r=m$ minimum local strict, $r=0$ maximum local strict, $0<r<m$ col (ni maximum ni minimum).
* Hypothèse « non dégénérée » indispensable : $u^3$, $u^4$, $u_1^2$ n'admettent pas de forme normale quadratique non dégénérée.
* L'égalité $f(x(u))=f(p)+Q(u)$ est **exacte** sur $U$, pas seulement un développement limité.
