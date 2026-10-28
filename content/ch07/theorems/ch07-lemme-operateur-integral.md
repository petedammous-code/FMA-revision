---
id: ch07-lemme-operateur-integral
type: lemma
chapter: 7
title: Estimations pour l'opérateur intégral (de Picard)
ref: Lemme VII.2.7
page: 130
importance: 2
depends: [ch05-integrale-fonctions-reglees, ch05-primitive-integrale]
tags: [picard, operateur-integral, contraction, lipschitz, norme-uniforme, cauchy-lipschitz]
---
## Intuition

> 💡 L'opérateur de Picard $T_x$ prend une courbe candidate $\varphi$ et lui associe la courbe « position initiale $x$ plus cumul des vitesses $Y(s,\varphi(s))$ ». Sur un intervalle de temps assez court ($\epsilon$ petit), deux choses se produisent : (i) on ne peut pas s'éloigner de plus de $\epsilon\ell$ de $x$, donc une courbe qui part d'un point à distance au plus $\rho$ de $x_0$ reste dans la boule de rayon $2\rho$ — c'est la **stabilité** ; (ii) deux courbes candidates à distance uniforme $d$ produisent des vitesses à distance au plus $kd$, donc des positions à distance au plus $\epsilon k\,d\le d/2$ — c'est la **contraction**. Le lemme met en forme ces deux majorations élémentaires : c'est le moteur commun des preuves de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) et de sa version à paramètres ([[ch07-cauchy-lipschitz-parametres]]).

Notations : $E$ est un espace de Banach, $\bar B(x_0,r)=\{y\in E : \norm{y-x_0}\le r\}$ la boule fermée ; $C^0(K,A)$ désigne l'ensemble des applications continues du compact $K$ dans $A\subset E$, et $\norm\varphi_\infty=\sup_{t\in K}\norm{\varphi(t)}$ la **norme de la convergence uniforme**. L'intégrale d'une fonction continue à valeurs dans $E$ est celle de [[ch05-integrale-fonctions-reglees]].

## Énoncé

**Lemme (poly, Lemme VII.2.7, p. 130).** Soient $E$ un espace de Banach, $x_0\in E$, $\rho>0$, $c\in\R$ et $\epsilon>0$. Soit
$$
Y : [c-\epsilon\,;c+\epsilon]\times\bar B(x_0,2\rho)\longrightarrow E
$$
une application continue, majorée en norme par une constante $\ell>0$ et $k$-lipschitzienne en la seconde variable, avec $k>0$ : pour tous $s\in[c-\epsilon\,;c+\epsilon]$ et $y_1,y_2\in\bar B(x_0,2\rho)$, $\norm{Y(s,y_1)-Y(s,y_2)}\le k\norm{y_1-y_2}$. Posons
$$
\mathcal X=C^0\big([c-\epsilon\,;c+\epsilon],\bar B(x_0,2\rho)\big),
$$
muni de la norme de la convergence uniforme $\norm{\cdot}_\infty$. Alors $\mathcal X$ est un fermé convexe de l'espace de Banach $C^0([c-\epsilon\,;c+\epsilon],E)$, donc un espace métrique complet, et si
$$
\epsilon\,\ell\le\rho\qquad\text{et}\qquad\epsilon\,k\le\tfrac12,
$$
alors, pour tout $x\in\bar B(x_0,\rho)$, l'opérateur
$$
T_x : \varphi\longmapsto\Big(t\mapsto x+\int_c^tY(s,\varphi(s))\,ds\Big)
$$
envoie $\mathcal X$ dans $\mathcal X$ et y est $\tfrac12$-lipschitzien :
$$
\norm{T_x(\varphi_1)-T_x(\varphi_2)}_\infty\le\tfrac12\norm{\varphi_1-\varphi_2}_\infty .
$$

## Hypothèses

### H1 — $E$ est un espace de Banach

**Rôle.** C'est ce qui rend $C^0([c-\epsilon\,;c+\epsilon],E)$ complet (une suite uniformément de Cauchy converge point par point dans $E$, la limite est continue et la convergence uniforme), donc $\mathcal X$ complet comme fermé d'un complet. Sans complétude, le théorème de point fixe de Banach (poly, Théorème VI.1.1, p. 115) ne s'applique pas.

**Si on la retire.** $\mathcal X$ n'est plus complet. Prenons $E=\R[X]$ muni de $\norm P=\sup_{[0;1]}\abs P$ : les polynômes de Taylor $y_n=\sum_{j\le n}X^j/j!$ forment une suite de Cauchy ($\norm{y_n-y_m}\le\sum_{j>m}1/j!$) sans limite dans $E$ (la limite uniforme est $\exp$, qui n'est pas un polynôme). Les $y_n$ sont bornés par $M=e$ ; les fonctions constantes $\varphi_n\equiv x_0+\frac{2\rho}{M}y_n$ appartiennent à $\mathcal X$, forment une suite de Cauchy pour $\norm\cdot_\infty$ et n'ont pas de limite dans $\mathcal X$ (une limite serait constante, égale à une limite des $x_0+\frac{2\rho}{M}y_n$).

### H2 — $Y$ est continue

**Rôle.** Pour $\varphi\in\mathcal X$, $s\mapsto Y(s,\varphi(s))$ est continue, donc intégrable et $T_x(\varphi)$ est continue (même $C^1$, [[ch05-primitive-integrale]]) : $T_x(\varphi)$ a une chance d'appartenir à $\mathcal X$.

**Si on la retire.** Hypothèse de cadre (un champ de vecteurs est continu par définition) : sans elle l'intégrale peut ne pas être définie, et même quand elle l'est, $T_x(\varphi)$ n'est plus $C^1$ ; l'équivalence avec l'équation différentielle ([[ch07-equation-integrale]]) est perdue (exemple de la fonction de Heaviside donné dans cette fiche).

### H3 — $Y$ est bornée par $\ell$ sur la boîte, avec $\epsilon\ell\le\rho$

**Rôle.** Donne $\norm{T_x(\varphi)(t)-x}\le\epsilon\ell\le\rho$ : c'est la **stabilité** de $\mathcal X$. Attention : en dimension infinie, $\bar B(x_0,2\rho)$ n'est pas compacte et la continuité de $Y$ n'entraîne **pas** qu'elle soit bornée ; c'est pourquoi $\ell$ est une hypothèse explicite (dans la preuve de [[ch07-cauchy-lipschitz]], on l'obtient en rétrécissant la boîte grâce à la continuité de $X$ en un point).

**Si on la retire.** Sur $E=\R$, $x_0=0$, $Y\equiv\ell$ (constante, donc $k$-lipschitzienne pour tout $k>0$) et $x=\rho\in\bar B(0,\rho)$ : $T_x(\varphi)(t)=\rho+\ell(t-c)$ pour toute $\varphi$, et $T_x(\varphi)(c+\epsilon)=\rho+\epsilon\ell>2\rho$ dès que $\epsilon\ell>\rho$. Donc $T_x(\varphi)\notin\mathcal X$. Avec $\epsilon\ell=\rho$ exactement, on atteint $2\rho$ au bord : la boule cible doit être **fermée**.

### H4 — $Y$ est $k$-lipschitzienne en la seconde variable, avec $\epsilon k\le\frac12$

**Rôle.** Donne la **contraction** : $\norm{Y(s,\varphi_1(s))-Y(s,\varphi_2(s))}\le k\norm{\varphi_1-\varphi_2}_\infty$, puis le facteur $\epsilon k\le\frac12$ après intégration.

**Si on la retire.** (a) *Sans caractère lipschitzien.* $E=\R$, $x_0=0$, $x=0$, $Y(s,y)=2\abs y^{1/2}$ (continue, bornée par $\ell=2\sqrt{2\rho}$). Pour $h\in\,]0\,;2\rho]$, $\varphi_1\equiv h$ et $\varphi_2\equiv0$ : $\norm{T_0(\varphi_1)-T_0(\varphi_2)}_\infty=\sup_t\big|\int_c^t2\sqrt h\,ds\big|=2\epsilon\sqrt h=\frac{2\epsilon}{\sqrt h}\norm{\varphi_1-\varphi_2}_\infty$, et $\frac{2\epsilon}{\sqrt h}\to+\infty$ quand $h\to0$ : $T_0$ n'est lipschitzien pour **aucune** constante. De fait, si $\epsilon^2\le2\rho$, $T_0$ possède deux points fixes dans $\mathcal X$, $0$ et $t\mapsto\operatorname{signe}(t-c)(t-c)^2$ ([[ch07-peano-non-unicite]]). (b) *Avec $\epsilon k>\frac12$.* $E=\R$, $x_0=0$, $x=0$, $Y(s,y)=ky$ : pour $\varphi_1\equiv h$, $\varphi_2\equiv0$ ($0<h\le2\rho$), $\norm{T_0(\varphi_1)-T_0(\varphi_2)}_\infty=k\epsilon h=k\epsilon\norm{\varphi_1-\varphi_2}_\infty$. La constante de Lipschitz de $T_0$ sur $\mathcal X$ vaut donc exactement $k\epsilon$ : la conclusion « $\frac12$-lipschitzien » est fausse si $k\epsilon>\frac12$, et $T_0$ n'est même plus contractant si $k\epsilon\ge1$. (Ici le point fixe $0$ existe quand même et est unique — c'est la **méthode** qui tombe, pas la conclusion du théorème de Cauchy-Lipschitz, qui est de nature locale.)

### H5 — $x\in\bar B(x_0,\rho)$ : la marge entre les deux boules

**Rôle.** La condition initiale est prise dans la **petite** boule de rayon $\rho$, les courbes dans la **grande** boule de rayon $2\rho$ : la marge $\rho$ est exactement ce que l'intégrale est autorisée à consommer ($\epsilon\ell\le\rho$). L'estimation $\norm{T_x(\varphi)(t)-x_0}\le\norm{x-x_0}+\epsilon\ell$ a besoin des **deux** inégalités $\norm{x-x_0}\le\rho$ et $\epsilon\ell\le\rho$.

**Si on la retire.** $E=\R$, $x_0=0$, $Y\equiv\ell>0$, et $x=2\rho$ (dans la grande boule, pas dans la petite) : $T_x(\varphi)(c+\epsilon)=2\rho+\epsilon\ell>2\rho$, donc $T_x(\varphi)\notin\mathcal X$. Prendre la même boule pour les conditions initiales et pour les courbes ne marche pas.

## Idée de la preuve

Deux majorations d'intégrales, $\big\lVert\int_c^tf\big\rVert\le\abs{t-c}\sup\norm f\le\epsilon\sup\norm f$ : avec $\sup\norm f\le\ell$ on obtient la stabilité (la marge $\rho$ absorbe $\norm{x-x_0}$), avec $\sup\norm f\le k\norm{\varphi_1-\varphi_2}_\infty$ la contraction de rapport $\epsilon k\le\frac12$.

## Preuve

Notons $K=[c-\epsilon\,;c+\epsilon]$. L'espace $C^0(K,E)$ des applications continues de $K$ dans $E$, muni de $\norm\cdot_\infty$, est un espace de Banach parce que $E$ l'est (une suite uniformément de Cauchy converge en chaque point, sa limite est continue comme limite uniforme de fonctions continues, et la convergence est uniforme).

**Étape 1 : $\mathcal X$ est fermé, convexe, complet.** Soit $(\varphi_n)$ une suite de $\mathcal X$ convergeant uniformément vers $\varphi\in C^0(K,E)$. Pour tout $t\in K$, $\varphi_n(t)\to\varphi(t)$ et $\varphi_n(t)\in\bar B(x_0,2\rho)$, qui est fermée ; donc $\varphi(t)\in\bar B(x_0,2\rho)$ et $\varphi\in\mathcal X$ : $\mathcal X$ est fermé. Si $\varphi_1,\varphi_2\in\mathcal X$ et $u\in[0;1]$, pour tout $t$,
$$
\norm{u\varphi_1(t)+(1-u)\varphi_2(t)-x_0}=\norm{u(\varphi_1(t)-x_0)+(1-u)(\varphi_2(t)-x_0)}\le2u\rho+2(1-u)\rho=2\rho,
$$
donc $\mathcal X$ est convexe (la boule $\bar B(x_0,2\rho)$ l'est). Un fermé d'un espace métrique complet est complet pour la distance induite : $\mathcal X$ est complet.

**Étape 2 : $T_x$ envoie $\mathcal X$ dans $\mathcal X$.** Soit $\varphi\in\mathcal X$. L'application $s\mapsto Y(s,\varphi(s))$ est continue sur $K$ (composée de $s\mapsto(s,\varphi(s))$, continue à valeurs dans $K\times\bar B(x_0,2\rho)$, et de $Y$). Son intégrale $t\mapsto\int_c^tY(s,\varphi(s))\,ds$ est donc bien définie ([[ch05-integrale-fonctions-reglees]]) et continue sur $K$ — même de classe $C^1$, de dérivée $Y(t,\varphi(t))$ ([[ch05-primitive-integrale]]). Ainsi $T_x(\varphi)\in C^0(K,E)$. Pour $t\in K$, en utilisant $\big\lVert\int_c^tf\big\rVert\le\abs{t-c}\sup_K\norm f$ (pour $t<c$, $\int_c^t=-\int_t^c$), $\abs{t-c}\le\epsilon$ et $\norm{Y}\le\ell$ :
$$
\norm{T_x(\varphi)(t)-x_0}\le\norm{x-x_0}+\Big\lVert\int_c^tY(s,\varphi(s))\,ds\Big\rVert\le\rho+\epsilon\,\ell\le2\rho .
$$
Donc $T_x(\varphi)$ est à valeurs dans $\bar B(x_0,2\rho)$ : $T_x(\varphi)\in\mathcal X$.

**Étape 3 : $T_x$ est $\frac12$-lipschitzien.** Soient $\varphi_1,\varphi_2\in\mathcal X$ et $t\in K$. Par linéarité de l'intégrale, le terme $x$ disparaît :
$$
T_x(\varphi_1)(t)-T_x(\varphi_2)(t)=\int_c^t\big(Y(s,\varphi_1(s))-Y(s,\varphi_2(s))\big)\,ds .
$$
Comme $\varphi_1(s),\varphi_2(s)\in\bar B(x_0,2\rho)$ et $Y$ est $k$-lipschitzienne en la seconde variable, $\norm{Y(s,\varphi_1(s))-Y(s,\varphi_2(s))}\le k\norm{\varphi_1(s)-\varphi_2(s)}\le k\norm{\varphi_1-\varphi_2}_\infty$ pour tout $s\in K$, d'où
$$
\norm{T_x(\varphi_1)(t)-T_x(\varphi_2)(t)}\le\abs{t-c}\,k\,\norm{\varphi_1-\varphi_2}_\infty\le k\,\epsilon\,\norm{\varphi_1-\varphi_2}_\infty\le\tfrac12\norm{\varphi_1-\varphi_2}_\infty .
$$
Le majorant ne dépend pas de $t$ ; en passant à la borne supérieure sur $t\in K$ on obtient $\norm{T_x(\varphi_1)-T_x(\varphi_2)}_\infty\le\frac12\norm{\varphi_1-\varphi_2}_\infty$. $\square$

## Preuve à trous

Posons $K=[c-\epsilon\,;c+\epsilon]$ ; $C^0(K,E)$ est de Banach car $E$ l'est.

*$\mathcal X$ est fermé convexe complet.* Si $\varphi_n\in\mathcal X$ converge uniformément vers $\varphi$, alors pour tout $t$, <trou indice="utiliser que la boule cible est fermée">$\varphi(t)=\lim\varphi_n(t)\in\bar B(x_0,2\rho)$ car cette boule est fermée</trou> ; la convexité de $\mathcal X$ vient de celle de $\bar B(x_0,2\rho)$ ; un fermé d'un complet est complet.

*Stabilité.* Pour $\varphi\in\mathcal X$, $s\mapsto Y(s,\varphi(s))$ est continue, donc $T_x(\varphi)$ est continue, et pour $t\in K$,
<trou indice="inégalité triangulaire puis majoration de l'intégrale par la longueur fois le sup">$\norm{T_x(\varphi)(t)-x_0}\le\norm{x-x_0}+\abs{t-c}\,\ell\le\rho+\epsilon\ell\le2\rho$</trou>, donc $T_x(\varphi)\in\mathcal X$.

*Contraction.* Pour $\varphi_1,\varphi_2\in\mathcal X$ et $t\in K$, le terme $x$ se simplifie et
<trou indice="le caractère $k$-lipschitzien en la seconde variable, puis la longueur de l'intervalle">$\norm{T_x(\varphi_1)(t)-T_x(\varphi_2)(t)}\le\int_{[c,t]}\norm{Y(s,\varphi_1(s))-Y(s,\varphi_2(s))}\,ds\le\abs{t-c}\,k\,\norm{\varphi_1-\varphi_2}_\infty\le k\epsilon\norm{\varphi_1-\varphi_2}_\infty$</trou>, et <trou>$k\epsilon\le\frac12$ ; on passe au sup en $t$</trou>. $\square$

## Exemples

1. **$Y(s,y)=y$ sur $E=\R$, $x_0=0$, $\rho>0$ quelconque.** Ici $k=1$ et $\ell=\sup_{\abs y\le2\rho}\abs y=2\rho$. Les conditions $\epsilon\ell\le\rho$ et $\epsilon k\le\frac12$ s'écrivent toutes deux $\epsilon\le\frac12$ : prenons $\epsilon=\frac12$, $c=0$. Pour $x\in[-\rho\,;\rho]$, en itérant à partir de $\varphi_0\equiv x$ : $\varphi_1(t)=x+\int_0^tx\,ds=x(1+t)$, $\varphi_2(t)=x\big(1+t+\frac{t^2}{2}\big)$, et $\varphi_n(t)=x\sum_{j\le n}\frac{t^j}{j!}\to x\,e^t$ uniformément sur $[-\frac12\,;\frac12]$. On vérifie la contraction : $\norm{\varphi_{n+1}-\varphi_n}_\infty=\abs x\frac{(1/2)^{n+1}}{(n+1)!}=\frac{1}{2(n+1)}\norm{\varphi_n-\varphi_{n-1}}_\infty\le\frac12\norm{\varphi_n-\varphi_{n-1}}_\infty$. Le point fixe $x e^t$ vérifie bien $\sup\abs{xe^t}\le\rho\,e^{1/2}\approx1{,}65\rho\le2\rho$, en accord avec la stabilité.

2. **La borne $2\rho$ est atteinte (rôle de la marge).** $E=\R$, $x_0=0$, $\rho=1$, $Y\equiv1$ ($\ell=1$, $k$ quelconque), $\epsilon=1$ : on a $\epsilon\ell=1=\rho$. Pour $x=1=\rho$, $T_x(\varphi)(t)=1+(t-c)$ quelle que soit $\varphi$, et $T_x(\varphi)(c+1)=2=2\rho$ : la courbe image touche le bord de la grande boule. La marge $\rho$ est donc exactement calibrée, et la boule cible doit être fermée.

3. **Un champ plan (oscillateur harmonique).** $E=\R^2$ euclidien, $Y(s,(q,p))=(p,-q)$, $x_0=0$. $Y$ est linéaire de norme $1$, donc $k=1$ et $\ell=\sup_{\norm y\le2\rho}\norm{Y(s,y)}=2\rho$ ; $\epsilon=\frac12$ convient. Pour $x=(q_0,p_0)\in\bar B(0,\rho)$ et $\varphi_0\equiv x$, $T_x(\varphi_0)(t)=\big(q_0+p_0(t-c),\ p_0-q_0(t-c)\big)$ : la première itérée de Picard est la tangente au cercle solution $t\mapsto(q_0\cos(t-c)+p_0\sin(t-c),\,-q_0\sin(t-c)+p_0\cos(t-c))$ au point $x$, et l'on a bien $\norm{T_x(\varphi_0)(t)-x}=\norm x\abs{t-c}\le\rho\cdot\frac12\le\rho$.

## Pièges

* > ⚠️ **Deux boules, pas une** : conditions initiales dans $\bar B(x_0,\rho)$, courbes dans $\bar B(x_0,2\rho)$. La marge $\rho$ est ce que l'intégrale peut consommer ($\epsilon\ell\le\rho$). Avec une seule boule, l'opérateur sort de l'espace (H5).
* La contraction est pour la **norme uniforme** sur le compact $[c-\epsilon\,;c+\epsilon]$ ; la majoration $\abs{t-c}\le\epsilon$ vaut des deux côtés de $c$.
* En dimension infinie, « $Y$ continue » n'entraîne pas « $Y$ bornée » sur la boîte (boule fermée non compacte) : la constante $\ell$ est une vraie hypothèse.
* Le $\frac12$ est une commodité : toute constante $a<1$ (c'est-à-dire $\epsilon k\le a$) suffirait au théorème de point fixe de Banach ; le poly fixe $\frac12$ pour alléger et pour la borne $\norm{\partial T/\partial\varphi}\le\frac12$ utilisée dans [[ch07-cauchy-lipschitz-parametres]].
* Les hypothèses $k>0$, $\ell>0$ évitent seulement les divisions par zéro dans le choix de $\epsilon$ ; une application constante en $y$ est $k$-lipschitzienne pour tout $k>0$.
* Le lemme ne fournit **ni** l'existence **ni** l'unicité du point fixe : c'est le théorème de Banach (poly, Théorème VI.1.1, p. 115) qui les donne, et seulement parmi les fonctions à valeurs dans $\bar B(x_0,2\rho)$. L'unicité parmi **toutes** les solutions est un argument supplémentaire de connexité dans [[ch07-cauchy-lipschitz]].
