## CARD id=fc-ch06-001 ref=ch06-lipschitz-contractante-def tags=enonce,definition
### Q
Définir : application $a$-lipschitzienne entre espaces métriques, puis application contractante.
### R
Soient $(X,d_X)$, $(Y,d_Y)$ des espaces métriques. $T:X\to Y$ est **$a$-lipschitzienne** ($a\ge0$ constante réelle) si
$$\forall x,y\in X,\quad d_Y(T(x),T(y))\le a\,d_X(x,y).$$
Une application lipschitzienne est continue. Si $(Y,d_Y)=(X,d_X)$ et $a<1$ (**strictement**), $T:X\to X$ est dite **contractante**. (poly, §VI.1, p. 115)

## CARD id=fc-ch06-002 ref=ch06-lipschitz-contractante-def tags=contre-exemple,hypothese
### Q
Une application $T:X\to X$ vérifiant $d(T(x),T(y))\lt d(x,y)$ pour tous $x\ne y$ est-elle « contractante » ? Contre-exemple ?
### R
Non : contractante exige une constante **uniforme** $a<1$ avec $d(T(x),T(y))\le a\,d(x,y)$. Contre-exemples : $T(x)=x+1/x$ sur $[1,+\infty[$ et $T(x)=\sqrt{x^2+1}$ sur $\R$ vérifient l'inégalité stricte mais n'ont **aucun point fixe** (alors que ces espaces sont complets).

## CARD id=fc-ch06-003 ref=ch06-point-fixe-banach tags=enonce
### Q
Énoncer le théorème de point fixe de Banach (Picard).
### R
Soient $(X,d)$ un espace métrique **complet**, $a\in[0\,;1[$ et $T:X\to X$ une application $a$-lipschitzienne. Alors $T$ admet un **unique** point fixe $x\in X$. (poly, Théorème VI.1.1, p. 115)
La preuve montre de plus que pour tout $x_0\in X$ la suite $x_{n+1}=T(x_n)$ converge vers $x$.

## CARD id=fc-ch06-004 ref=ch06-point-fixe-banach tags=formule
### Q
Dans la preuve de Banach, quelle estimation sur les itérées $x_{n+1}=T(x_n)$ montre que la suite est de Cauchy ? Que donne-t-elle sur la vitesse de convergence ?
### R
Pour $n\ge m$ :
$$d(x_n,x_m)\le \frac{a^m}{1-a}\,d(T(x_0),x_0)$$
(on écrit $d(x_n,x_m)\le a^m d(T^{n-m}(x_0),x_0)$ puis on somme la série géométrique $\sum a^{j-1}$). En faisant $n\to\infty$ : $d(x_m,x)\le\dfrac{a^m}{1-a}d(T(x_0),x_0)$, convergence **géométrique** de raison $a$. (poly, preuve du Théorème VI.1.1, p. 115)

## CARD id=fc-ch06-005 ref=ch06-point-fixe-banach tags=hypothese
### Q
Quelles sont les trois hypothèses du théorème de point fixe de Banach, et où sert chacune dans la preuve ?
### R
1. $(X,d)$ **complet** : pour que la suite de Cauchy $(x_n)$ converge.
2. $T$ à valeurs **dans $X$** ($T(X)\subset X$) : pour pouvoir itérer.
3. $a<1$ **uniforme** : pour sommer la série géométrique (Cauchy) et pour l'unicité ($d(x_1,x)\le a\,d(x_1,x)$ force $x_1=x$).
La continuité de $T$ (lipschitzienne) sert à passer à la limite dans $x_{n+1}=T(x_n)$.

## CARD id=fc-ch06-006 ref=ch06-point-fixe-banach tags=contre-exemple
### Q
Donner un contre-exemple à Banach (a) sans complétude, (b) avec $a=1$, (c) sans $T(X)\subset X$.
### R
(a) $X=\,]0,1]$, $T(x)=x/2$ : contractante ($a=1/2$) mais le seul point fixe candidat $0\notin X$.
(b) $a=1$ : $T(x)=x+1$ sur $\R$ (1-lipschitzienne, sans point fixe) ; ou $T(x)=x+1/x$ sur $[1,+\infty[$ (inégalité stricte, sans point fixe).
(c) $T(x)=x/2+1$ de $[0,1]$ dans $[1,3/2]\not\subset X$ : son point fixe $2$ est hors de $X$.

## CARD id=fc-ch06-007 ref=ch06-point-fixe-parametre-continu tags=enonce
### Q
Énoncer le théorème de point fixe de Banach à paramètre I (continuité).
### R
Soient $\Lambda$ un espace topologique, $(X,d)$ un espace métrique complet, $g:\Lambda\times X\to X$ **continue** et $a\in[0\,;1[$. On suppose que pour tout $\lambda\in\Lambda$, $g_\lambda:x\mapsto g(\lambda,x)$ est $a$-lipschitzienne. Alors pour tout $\lambda$, $g_\lambda$ admet un unique point fixe $\varphi(\lambda)$, et $\lambda\mapsto\varphi(\lambda)$ est **continue** $\Lambda\to X$. (poly, Théorème VI.1.2, p. 116)

## CARD id=fc-ch06-008 ref=ch06-point-fixe-parametre-continu tags=formule,methode
### Q
Quelle est l'inégalité clé de la preuve du Théorème VI.1.2 (continuité du point fixe en le paramètre) ? Comment l'obtient-on ?
### R
$$(1-a)\,d(\varphi(\lambda_1),\varphi(\lambda_2))\le d\big(g(\lambda_1,\varphi(\lambda_1)),\,g(\lambda_2,\varphi(\lambda_1))\big).$$
On écrit $\varphi(\lambda_i)=g(\lambda_i,\varphi(\lambda_i))$, on **insère le terme intermédiaire** $g(\lambda_2,\varphi(\lambda_1))$, on majore le second écart par $a\,d(\varphi(\lambda_1),\varphi(\lambda_2))$ ($g_{\lambda_2}$ est $a$-lipschitzienne) et on passe $a\,d(\cdot)$ à gauche. Le membre de droite tend vers $0$ quand $\lambda_2\to\lambda_1$ par continuité de $\lambda\mapsto g(\lambda,x)$ à $x$ fixé. (poly, p. 116)

## CARD id=fc-ch06-009 ref=ch06-point-fixe-parametre-continu tags=contre-exemple,hypothese
### Q
Dans VI.1.2, que devient la conclusion si la constante de Lipschitz $a(\lambda)<1$ dépend de $\lambda$ sans être uniformément $<1$ ? Exemple.
### R
L'existence et l'unicité de $\varphi(\lambda)$ subsistent pour chaque $\lambda$ (chaque $g_\lambda$ reste contractante), mais la preuve de la continuité ne s'applique plus telle quelle : le facteur $1-a(\lambda)$ dans l'inégalité clé n'est plus minoré et l'on perd toute estimation **uniforme** (la continuité reste vraie là où $a(\lambda)$ est localement majoré par un $a'<1$ : appliquer le théorème sur ce voisinage). Exemple : $g(\lambda,x)=\lambda x+1$ sur $X=\R$, $\Lambda=[0,1[$ : $g_\lambda$ est $\lambda$-lipschitzienne, $\varphi(\lambda)=\dfrac1{1-\lambda}$ est continue sur $\Lambda$ mais non bornée quand $\lambda\to1$, et $\varphi'(\lambda)=\dfrac1{(1-\lambda)^2}\to+\infty$ : aucune uniformité.

## CARD id=fc-ch06-010 ref=ch06-differentiable-sur-partie-def tags=definition
### Q
Que signifie « $f$ est de classe $C^p$ sur une partie $X$ non ouverte » d'un evn $E$ ?
### R
$f:X\to F$ est différentiable (resp. de classe $C^p$, $p\in\N\cup\{+\infty\}$) s'il existe un **voisinage ouvert** $U$ de $X$ dans $E$ et une application $g:U\to F$ différentiable (resp. $C^p$) dont $f$ est la **restriction** à $X$. (poly, Définition VI.1.3, p. 116)
Usage : énoncer VI.1.4 pour $g$ sur $\Lambda\times X$ avec $X$ fermé convexe.

## CARD id=fc-ch06-011 ref=ch06-point-fixe-parametre-cp tags=enonce
### Q
Énoncer le théorème de point fixe de Banach à paramètre II (régularité $C^p$).
### R
Soient $\Lambda$ un ouvert d'un espace de Banach $E$, $X$ un **fermé convexe** d'un espace de Banach $F$, $g:\Lambda\times X\to X$ de classe $C^p$, $p\in(\N\setminus\{0\})\cup\{+\infty\}$, et $a\in[0\,;1[$ tels que
$$\Big\|\frac{\partial g}{\partial x}(\lambda,x)\Big\|\le a\quad\text{pour tout }(\lambda,x)\in\Lambda\times X.$$
Alors pour tout $\lambda$, $g_\lambda$ admet un unique point fixe $\varphi(\lambda)$, $\lambda\mapsto\varphi(\lambda)$ est de classe $C^p$ et
$$d\varphi_\lambda=\Big(\mathrm{Id}_F-\frac{\partial g}{\partial x}(\lambda,\varphi(\lambda))\Big)^{-1}\circ\frac{\partial g}{\partial\lambda}(\lambda,\varphi(\lambda)).$$
(poly, Théorème VI.1.4, p. 117)

## CARD id=fc-ch06-012 ref=ch06-point-fixe-parametre-cp tags=formule,methode
### Q
Comment retrouver (formellement) la formule de $d\varphi_\lambda$ du Théorème VI.1.4 ? Comment la justifie-t-on ?
### R
On différentie $\varphi(\lambda)=g(\lambda,\varphi(\lambda))$ : $d\varphi_\lambda=\dfrac{\partial g}{\partial x}\circ d\varphi_\lambda+\dfrac{\partial g}{\partial\lambda}$, d'où $(\mathrm{Id}_F-A)\,d\varphi_\lambda=B$ avec $A=\frac{\partial g}{\partial x}(\lambda,\varphi(\lambda))$, $B=\frac{\partial g}{\partial \lambda}(\lambda,\varphi(\lambda))$. Justification : $\mathrm{Id}_F-A$ est inversible car $\|A\|\le a<1$ (série de Neumann) ; on montre d'abord que $\varphi$ est **localement lipschitzienne** ($\|\gamma(h)\|\le\frac{C}{1-a}\|h\|$, $\gamma(h)=\varphi(\lambda+h)-\varphi(\lambda)$), ce qui permet de transformer le reste $o(\|h\|+\|\gamma(h)\|)$ en $o(\|h\|)$. (poly, p. 117)

## CARD id=fc-ch06-013 ref=ch06-point-fixe-parametre-cp tags=hypothese
### Q
Dans VI.1.4, pourquoi $X$ doit-il être fermé, convexe, et pourquoi $g$ doit-elle envoyer $\Lambda\times X$ dans $X$ ?
### R
* **Fermé** dans un Banach : $X$ est alors un espace métrique complet, ce qui permet d'appliquer VI.1.2 (existence/unicité du point fixe).
* **Convexe** : le segment $[x_1,x_2]$ reste dans $X$, donc l'inégalité des accroissements finis et $\|\partial g/\partial x\|\le a$ donnent $\|g(\lambda,x_1)-g(\lambda,x_2)\|\le a\|x_1-x_2\|$ (Étape 0).
* **$g(\Lambda\times X)\subset X$** : pour que $g_\lambda$ soit une application de $X$ dans $X$ que l'on puisse itérer.
* **$\|\partial g/\partial x\|\le a<1$ uniforme** : rend $\mathrm{Id}-A$ inversible et donne la contraction.

## CARD id=fc-ch06-014 ref=ch06-point-fixe-parametre-cp tags=contre-exemple
### Q
Contre-exemples à VI.1.4 : (a) sans convexité de $X$, (b) avec $\|\partial g/\partial x\|\lt1$ seulement point par point.
### R
(a) $X=[0,1]\cup[2,3]$ (fermé, non convexe), $g\equiv0$ sur $[0,1]$ et $g\equiv3$ sur $[2,3]$ : $\partial g/\partial x=0$ mais $g_\lambda$ a **deux** points fixes, $0$ et $3$.
(b) $X=[0,+\infty[$, $g(x)=x+e^{-x}$ : $0\lt g'(x)=1-e^{-x}\lt1$ pour tout $x$, mais $\sup\|g'\|=1$ et $g(x)\gt x$ : **aucun** point fixe.

## CARD id=fc-ch06-015 ref=ch06-neumann-inverse-id-moins-l tags=enonce
### Q
Énoncer le lemme de la série de Neumann (inversibilité de $\mathrm{Id}-L$).
### R
Soit $E$ un espace de **Banach** et $a\in[0\,;1[$. Pour tout $L\in\mathcal L(E)$ avec $\|L\|\le a$, $\mathrm{Id}_E-L$ est inversible, d'inverse borné de norme $\le(1-a)^{-1}$, et l'application $B_{\mathcal L(E)}(0,a)\to\mathcal L(E)$, $L\mapsto(\mathrm{Id}-L)^{-1}$ est de classe $C^\infty$. (poly, Exercice VI.1.5, p. 118)

## CARD id=fc-ch06-016 ref=ch06-neumann-inverse-id-moins-l tags=formule
### Q
Donner la formule explicite de $(\mathrm{Id}-L)^{-1}$ pour $\|L\|\lt1$ et justifier la convergence.
### R
$$(\mathrm{Id}-L)^{-1}=\sum_{n\ge0}L^n,\qquad \Big\|\sum_{n\ge0}L^n\Big\|\le\sum_{n\ge0}\|L\|^n=\frac1{1-\|L\|}.$$
La série est **normalement convergente** dans $\mathcal L(E)$, qui est un Banach car $E$ l'est ; et $(\mathrm{Id}-L)\sum_{n\le N}L^n=\mathrm{Id}-L^{N+1}\to\mathrm{Id}$. (poly, Exercice VI.1.5, p. 118)

## CARD id=fc-ch06-017 ref=ch06-fonctions-implicites tags=enonce
### Q
Énoncer le théorème des fonctions implicites.
### R
Soient $E,F,G$ trois espaces de Banach, $U$ ouvert de $E$, $V$ ouvert de $F$, $f:U\times V\to G$ de classe $C^p$, $p\ge1$, et $(x_0,y_0)\in U\times V$ tel que $\dfrac{\partial f}{\partial y}(x_0,y_0)$ soit un **isomorphisme bicontinu** de $F$ dans $G$. Alors il existe un ouvert $U_0\ni x_0$ de $U$, un ouvert $V_0\ni y_0$ de $V$ et $\varphi:U_0\to V_0$ de classe $C^p$ tels que
$$\varphi(x_0)=y_0\quad\text{et}\quad\forall(x,y)\in U_0\times V_0,\ \ f(x,y)=f(x_0,y_0)\iff y=\varphi(x).$$
De plus $d\varphi_x=-\Big(\dfrac{\partial f}{\partial y}(x,\varphi(x))\Big)^{-1}\circ\dfrac{\partial f}{\partial x}(x,\varphi(x))$, et si $U_0$ est connexe il existe au plus une application continue $\varphi:U_0\to V_0$ avec $\varphi(x_0)=y_0$ et $f(x,\varphi(x))=f(x_0,y_0)$. (poly, Théorème VI.2.1, p. 118)

## CARD id=fc-ch06-018 ref=ch06-fonctions-implicites tags=formule
### Q
Formule de la différentielle de la fonction implicite $\varphi$ ($f(x,\varphi(x))=f(x_0,y_0)$). Comment la retrouver en une ligne ? En dimension finie, que devient-elle pour $f:\R^2\to\R$ ?
### R
$$d\varphi_x=-\Big(\frac{\partial f}{\partial y}(x,\varphi(x))\Big)^{-1}\circ\frac{\partial f}{\partial x}(x,\varphi(x)).$$
On différentie $f(x,\varphi(x))=\text{cste}$ : $\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\circ d\varphi_x=0$. Pour $f:\R^2\to\R$ : $\varphi'(x)=-\dfrac{\partial_xf}{\partial_yf}(x,\varphi(x))$. (poly, Théorème VI.2.1, p. 118)

## CARD id=fc-ch06-019 ref=ch06-fonctions-implicites tags=formule
### Q
Quel signe et quel ordre de composition dans $d\varphi$ : comparer la formule de VI.1.4 (point fixe) et celle de VI.2.1 (implicites).
### R
VI.1.4 (équation $\varphi=g(\lambda,\varphi)$) : $d\varphi_\lambda=(\mathrm{Id}_F-\partial_xg)^{-1}\circ\partial_\lambda g$, **sans** signe moins.
VI.2.1 (équation $f(x,\varphi)=\text{cste}$) : $d\varphi_x=-(\partial_yf)^{-1}\circ\partial_xf$, **avec** signe moins.
Dans les deux cas l'inverse est à gauche (appliqué en dernier) : en dimension infinie l'ordre compte.

## CARD id=fc-ch06-020 ref=ch06-fonctions-implicites tags=methode
### Q
Comment le poly démontre-t-il le théorème des fonctions implicites (idée de la preuve) ?
### R
On écrit $f(x,y)=f(x_0,y_0)$ comme un point fixe en $y$ : $y=g(x,y)$ avec
$$g(x,y)=y-\Big(\frac{\partial f}{\partial y}(x_0,y_0)\Big)^{-1}\big(f(x,y)-f(x_0,y_0)\big).$$
Alors $\partial g/\partial y(x_0,y_0)=0$, donc $\|\partial g/\partial y\|\le\frac12$ sur $\bar B(x_0,r_0)\times\bar B(y_0,s)$ (continuité). On choisit $r=\min\big(r_0,\frac{s}{2M\|(\partial_yf(x_0,y_0))^{-1}\|}\big)$ pour que $g_x(\bar B(y_0,s))\subset\bar B(y_0,s)$, et on applique VI.1.4 à $g:B(x_0,r)\times\bar B(y_0,s)\to\bar B(y_0,s)$ ; $U_0=B(x_0,r)$, $V_0=B(y_0,s)$. (poly, p. 118--119)

## CARD id=fc-ch06-021 ref=ch06-fonctions-implicites tags=hypothese
### Q
Quelles hypothèses du théorème des fonctions implicites sont essentielles, et que se passe-t-il si $\partial f/\partial y(x_0,y_0)$ n'est pas inversible ?
### R
Essentielles : (i) $f$ de classe $C^p$, $p\ge1$ (**en toutes les variables**) ; (ii) $\partial f/\partial y(x_0,y_0)$ isomorphisme bicontinu (en dimension finie : $\dim F=\dim G$ et jacobien partiel $\ne0$) ; (iii) $E,F,G$ Banach (complétude de $F$ pour le point fixe). Le résultat est **local** et résout l'équation au niveau $f(x_0,y_0)$.
Si $\partial_yf(x_0,y_0)$ n'est pas inversible, $\varphi$ peut ne pas exister : $f(x,y)=y^2-x$ en $(0,0)$, $y=\pm\sqrt x$, rien pour $x\lt0$. Ou exister sans être $C^1$ : $y^3-x$, $\varphi(x)=x^{1/3}$.

## CARD id=fc-ch06-022 ref=ch06-fonctions-implicites tags=contre-exemple
### Q
Contre-exemple : $f$ non $C^1$ en $x$ mais $\partial f/\partial y$ inversible, et $\varphi$ non dérivable. Contre-exemple pour l'unicité.
### R
$f(x,y)=y-h(x)$, $h(x)=x\sin(1/x)$, $h(0)=0$ : $\partial_yf=1$ est inversible, la fonction implicite est $\varphi=h$, continue mais **non dérivable en $0$** : la régularité de $f$ en **toutes** les variables est nécessaire.
Unicité : seulement parmi les $\varphi$ **continues à valeurs dans $V_0$** : pour $f(x,y)=y^2-x^2$ en $(1,1)$, $\varphi(x)=x$ est la seule branche proche de $y_0=1$ mais $y=-x$ est aussi solution de $f=0$ loin de $V_0$. Pour le cercle $x^2+y^2=1$ : deux branches $\pm\sqrt{1-x^2}$.

## CARD id=fc-ch06-023 ref=ch06-diffeomorphisme-def tags=enonce,definition
### Q
Définir un $C^k$-difféomorphisme entre ouverts de Banach.
### R
Soient $U$ ouvert d'un Banach $E$, $V$ ouvert d'un Banach $F$, $f:U\to V$. C'est un **$C^k$-difféomorphisme** si $f$ est une **bijection** de $U$ sur $V$, de classe $C^k$, **ainsi que $f^{-1}$**. (poly, Définition VI.3.1, p. 119)
Si $f$ est un $C^1$-difféomorphisme, $df_x$ est inversible pour tout $x$ (différentier $f^{-1}\circ f=\mathrm{Id}$) et $d(f^{-1})_{f(x)}=(df_x)^{-1}$.

## CARD id=fc-ch06-024 ref=ch06-diffeomorphisme-def tags=contre-exemple
### Q
Une bijection $C^\infty$ est-elle un difféomorphisme ? Exemple.
### R
Non : la régularité de l'**inverse** n'est pas automatique. $x\mapsto x^3$ est une bijection $C^\infty$ de $\R$ sur $\R$ mais son inverse $x\mapsto x^{1/3}$ n'est pas dérivable en $0$ (et $df_0=0$ n'est pas inversible) : c'est un homéomorphisme, pas un $C^1$-difféomorphisme.

## CARD id=fc-ch06-025 ref=ch06-inversion-locale tags=enonce
### Q
Énoncer le théorème d'inversion locale.
### R
Soient $U$ un ouvert d'un espace de Banach **réel**, $F$ un espace de Banach, $f:U\to F$ de classe $C^k$, $k\ge1$, et $x_0\in U$. Si $df_{x_0}$ est un **isomorphisme bicontinu**, il existe un voisinage ouvert $U_0$ de $x_0$ dans $U$ et un voisinage ouvert $V_0$ de $f(x_0)$ tels que $f$ se restreigne en un **$C^k$-difféomorphisme** de $U_0$ sur $V_0$. (poly, Théorème VI.3.2, p. 120)

## CARD id=fc-ch06-026 ref=ch06-inversion-locale tags=formule
### Q
Formule de la différentielle de l'inverse local dans le théorème d'inversion locale.
### R
Pour $y=f(x)\in V_0$ avec $x\in U_0$ :
$$d(f^{-1})_{y}=(df_x)^{-1}.$$
(On différentie $f^{-1}\circ f=\mathrm{Id}$.) En dimension finie, la matrice jacobienne de $f^{-1}$ en $f(x)$ est l'inverse de celle de $f$ en $x$ ; $\dim E=\dim F$ est nécessaire.

## CARD id=fc-ch06-027 ref=ch06-inversion-locale tags=methode
### Q
Comment déduit-on l'inversion locale du théorème des fonctions implicites ?
### R
On pose $g:F\times U\to F$, $g(y,x)=f(x)-y$ : $g(y,x)=0\iff f(x)=y$, $g(f(x_0),x_0)=0$, et $\dfrac{\partial g}{\partial x}(f(x_0),x_0)=df_{x_0}$ est un isomorphisme. Le paramètre est $y$ : on obtient $V_0\times U_1$ et $\varphi:V_0\to U_1$ de classe $C^k$ avec $\{f(x)=y\}=\{x=\varphi(y)\}$. Alors $U_0=\varphi(V_0)=U_1\cap f^{-1}(V_0)$ est ouvert et $\varphi=(f|_{U_0})^{-1}$. (poly, preuve de VI.3.2, p. 120)

## CARD id=fc-ch06-028 ref=ch06-inversion-locale tags=hypothese
### Q
Dans l'inversion locale, peut-on remplacer « $f$ de classe $C^k$, $k\ge1$ » par « $f$ différentiable en $x_0$ avec $df_{x_0}$ inversible » ?
### R
Non. Contre-exemple : $f(x)=x+2x^2\sin(1/x)$, $f(0)=0$ : dérivable partout, $f'(0)=1\ne0$, mais $f'(x)=1+4x\sin(1/x)-2\cos(1/x)$ vaut exactement $-1$ aux points $x=1/(2\pi n)$ et change de signe arbitrairement près de $0$ : $f$ n'est **injective sur aucun voisinage** de $0$. Il faut la continuité de $df$ (classe $C^1$) pour que $df_x$ reste proche de $df_{x_0}$ (donc la contraction de la preuve).

## CARD id=fc-ch06-029 ref=ch06-inversion-locale tags=contre-exemple
### Q
Donner des exemples où $df_{x_0}$ n'est pas inversible et la conclusion de l'inversion locale échoue ; et un exemple où $df_x$ est inversible partout mais $f$ n'est pas injective.
### R
$f(x)=x^2$ en $0$ : non injective près de $0$. $f(x)=x^3$ en $0$ : bijective mais l'inverse n'est pas dérivable en $0$.
Résultat **local** seulement : $\exp:\C\simeq\R^2\to\C$ (ou $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ sur $]0,+\infty[\times\R$) a une différentielle inversible partout mais n'est pas injective.

## CARD id=fc-ch06-030 ref=ch06-inversion-globale tags=enonce
### Q
Énoncer le théorème d'inversion globale.
### R
Soit $f:U\to F$ de classe $C^k$ ($k\ge1$), $U$ ouvert d'un Banach réel, $F$ Banach. Si $f$ est **injective** et si pour **tout** $x\in U$, $df_x$ est un isomorphisme bicontinu, alors $f(U)$ est **ouvert** et la bijection réciproque $f(U)\to U$ est de classe $C^k$ ($f$ est un $C^k$-difféomorphisme de $U$ sur $f(U)$). (poly, Corollaire VI.3.3, p. 120)

## CARD id=fc-ch06-031 ref=ch06-inversion-globale tags=hypothese,contre-exemple
### Q
Dans l'inversion globale, à quoi servent « injective » et « $df_x$ inversible pour tout $x$ » ? Que devient la conclusion si l'on retire l'une d'elles ?
### R
« $df_x$ inversible en tout $x$ » + inversion locale en chaque point : $f(U)$ est ouvert et $f$ est un difféomorphisme local. « Injective » : sert à définir la réciproque globale, qui coïncide localement avec les inverses locaux $C^k$.
Sans injectivité : $\exp:\C\to\C^*$, polaires $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ : pas de réciproque globale.
Sans $df_x$ inversible partout : $x\mapsto x^3$ est injective, $C^\infty$, d'image ouverte, mais sa réciproque $x^{1/3}$ n'est pas $C^1$ en $0$.

## CARD id=fc-ch06-032 ref=ch06-inversion-globale tags=methode
### Q
Pour montrer qu'une application $f$ est un $C^k$-difféomorphisme de $U$ sur son image, que vérifie-t-on ?
### R
(1) $f$ est de classe $C^k$ ($k\ge1$) sur l'ouvert $U$ ; (2) $f$ est **injective** sur $U$ (à vérifier à la main : en général en résolvant $f(x)=y$) ; (3) $df_x$ est inversible pour **tout** $x\in U$ (en dimension finie : jacobien $\ne0$). Alors $f(U)$ est ouvert et $f:U\to f(U)$ est un $C^k$-difféomorphisme (Corollaire VI.3.3). Exemple : coordonnées polaires sur $]0,+\infty[\times\,]-\pi,\pi[$.

## CARD id=fc-ch06-033 ref=ch06-point-critique-non-degenere-def tags=enonce,definition
### Q
Définir : point critique, point critique non dégénéré, signature, d'une fonction $f:U\subset\R^m\to\R$.
### R
Soit $f$ de classe $C^2$ au moins. $a\in U$ est un **point critique** si $df_a=0$. En un point critique, $d^2f_a$ est une forme bilinéaire symétrique (Théorème V.5.3) ; le point critique est **non dégénéré** si $d^2f_a$ est non dégénérée (hessienne inversible, $\det\ne0$). Sa **signature** est $(r,s)$, $r+s=m$ : nombres de carrés positifs / négatifs dans une réduction de Gauss. (poly, Exercice VI.3.4, p. 120)

## CARD id=fc-ch06-034 ref=ch06-point-critique-non-degenere-def tags=contre-exemple
### Q
Donner des points critiques dégénérés, et dire comment la signature se lit sur la nature du point.
### R
Dégénérés : $f(x,y)=x^2+y^3$ et $x^2+y^4$ en $0$ (hessienne de rang $1$) : le comportement n'est pas déterminé par la hessienne ($x^2+y^4$ : minimum ; $x^2+y^3$ : pas d'extremum).
Non dégénéré : signature $(m,0)$ : minimum local strict ; $(0,m)$ : maximum local strict ; $(r,s)$ avec $r,s\ge1$ : col (selle).

## CARD id=fc-ch06-035 ref=ch06-lemme-de-morse tags=enonce
### Q
Énoncer le lemme de Morse.
### R
Soit $U$ un ouvert de $\R^m$, $f:U\to\R$ de classe $C^\infty$, $a\in U$ un point critique ($df_a=0$) tel que $d^2f_a$ soit non dégénérée, de signature $(r,s)$, $r+s=m$. Il existe un voisinage ouvert $W$ de $0$ dans $\R^m$ et un $C^\infty$-difféomorphisme $\psi$ de $W$ sur un voisinage ouvert de $a$ dans $U$, avec $\psi(0)=a$, tels que
$$f(\psi(h))=f(a)+\sum_{i=1}^rh_i^2-\sum_{i=r+1}^mh_i^2,\qquad h\in W.$$
(poly, Exercice VI.3.4, p. 120)

## CARD id=fc-ch06-036 ref=ch06-lemme-de-morse tags=methode
### Q
Quelles sont les quatre étapes de la preuve du lemme de Morse ?
### R
1. Réduction : $a=0$, $f(0)=0$, matrice de $d^2f_0$ égale à $2I_{r,s}$ (translation, changement linéaire, Sylvester).
2. Taylor avec reste intégral : $f(x)={}^txB(x)x$, $B:U_0\to\mathrm{Sym}_m$ de classe $C^\infty$, $B(0)=I_{r,s}$.
3. Racine carrée lisse pour la congruence : par inversion locale sur $g(C)={}^tCI_{r,s}C$ (restreinte à un supplémentaire du noyau de $dg_{I_m}$), $\eta:Y\to\mathrm{GL}(m,\R)$, $S={}^t\eta(S)I_{r,s}\eta(S)$, $\eta(I_{r,s})=I_m$.
4. $\varphi(x)=\eta(B(x))\,x$ vérifie $f(x)={}^t\varphi(x)I_{r,s}\varphi(x)$, $d\varphi_0=\mathrm{Id}$ ; par inversion locale $\varphi$ est un difféomorphisme local et $\psi=\varphi^{-1}$. (poly, p. 120--121)

## CARD id=fc-ch06-037 ref=ch06-lemme-de-morse tags=formule
### Q
Dans la preuve du lemme de Morse : formule de $B(x)$ et calcul de $dg_{I_m}$ pour $g(C)={}^tC\,I_{r,s}\,C$.
### R
Si $a=0$, $f(0)=0$, $df_0=0$ et $d^2f_0=2I_{r,s}$ : Taylor avec reste intégral donne
$$f(x)={}^txB(x)x,\qquad B(x)=\int_0^1(1-t)\,\mathrm{Hess}_{tx}f\,dt,\quad B(0)=I_{r,s}.$$
Pour $g:\mathrm M_m(\R)\to\mathrm{Sym}_m$, $g(C)={}^tCI_{r,s}C$ : $dg_{I_m}(X)={}^tX\,I_{r,s}+I_{r,s}\,X$, et $\mathrm M_m(\R)=\mathcal E\oplus\ker dg_{I_m}$ avec $\mathcal E=\{X\,;\,I_{r,s}X\in\mathrm{Sym}_m\}$. (poly, Exercice VI.3.4, p. 120--121)

## CARD id=fc-ch06-038 ref=ch06-lemme-de-morse tags=hypothese
### Q
Quelles hypothèses du lemme de Morse sont nécessaires ? Que dire de la régularité de $\psi$ si $f$ n'est que $C^k$ ?
### R
(i) $a$ **critique** : sinon $f$ est une submersion en $a$, donc localement une coordonnée, pas une forme quadratique. (ii) $d^2f_a$ **non dégénérée** (hessienne inversible) : sinon pas de forme normale quadratique. (iii) $f$ de classe $C^\infty$ pour avoir $\psi$ de classe $C^\infty$ ; avec $f$ de classe $C^k$, $k\ge3$, on perd deux ordres de dérivation : $B(x)=\int_0^1(1-t)\,\mathrm{Hess}_{tx}f\,dt$ ne fait intervenir que $d^2f$, donc n'est que $C^{k-2}$ ; la racine carrée $\eta$ est $C^\infty$, donc $\varphi(x)=\eta(B(x))\,x$ est $C^{k-2}$ et $\psi=\varphi^{-1}$ aussi (inversion locale, qui exige $k-2\ge1$). Conséquence : les points critiques non dégénérés sont **isolés**.

## CARD id=fc-ch06-039 ref=ch06-lemme-de-morse tags=contre-exemple
### Q
Contre-exemples au lemme de Morse sans non-dégénérescence.
### R
$f(x,y)=x^2+y^3$ en $0$ (hessienne $\mathrm{diag}(2,0)$, de rang $1$) : si l'on avait $f=Q\circ\varphi$ avec $\varphi$ difféomorphisme local, $\varphi(0)=0$, et $Q=\pm(h_1^2+h_2^2)$, alors $0$ serait un extremum local strict, or $f(0,y)=y^3$ change de signe ; et avec $Q=\pm(h_1^2-h_2^2)$, le lieu $\{f=0\}=\varphi^{-1}(\{Q=0\})$ serait deux arcs $C^\infty$ se coupant transversalement en $0$, or c'est la cuspide $x^2=-y^3$, i.e. $y=-|x|^{2/3}$, qui n'est même pas une courbe $C^1$ en $0$. De même $f(x)=x^4$ en $0$ : $x^4=h(x)^2$ impose $|h(x)|=x^2$, donc $h'(0)=0$ : $h$ n'est pas un difféomorphisme local en $0$.

## CARD id=fc-ch06-040 ref=ch06-point-fixe-iteree-contractante tags=enonce
### Q
Énoncer la variante de Picard où une itérée est contractante.
### R
Soit $(X,d)$ un espace métrique complet et $T:X\to X$ telle qu'il existe $n\in\N^\times$ avec $T^n$ contractante. Alors $T$ admet un unique point fixe $x$ et, pour tout $x_0\in X$, $T^k(x_0)\to x$ quand $k\to\infty$. (poly, Exercice VI.4.1, p. 121)
Aucune continuité de $T$ n'est supposée.

## CARD id=fc-ch06-041 ref=ch06-point-fixe-iteree-contractante tags=methode,contre-exemple
### Q
Idée de la preuve du Théorème VI.4.1 ($T^n$ contractante) ; $T$ doit-elle être continue ?
### R
$T^n$ a un unique point fixe $x$ (Banach). Alors $T(x)$ est aussi un point fixe de $T^n$ ($T^n(T(x))=T(T^n(x))=T(x)$), donc $T(x)=x$ ; l'unicité pour $T$ vient de ce que tout point fixe de $T$ l'est de $T^n$. Les $n$ sous-suites $(T^{nk+j}(x_0))_k$ convergent vers $T^j(x)=x$.
Non, pas de continuité : $X=[0,1]$, $T(x)=0$ pour $x\ne1$, $T(1)=1/2$ : $T^2\equiv0$ est contractante, $T$ discontinue en $1$, point fixe $0$. Utilité : l'opérateur de Picard $S$ d'une EDO lipschitzienne vérifie $\|S^n\alpha-S^n\beta\|\le\frac{(kT)^n}{n!}\|\alpha-\beta\|$.

## CARD id=fc-ch06-042 ref=ch06-methode-de-newton tags=enonce
### Q
Énoncer (hypothèses et conclusion) la méthode de Newton dans un espace de Banach.
### R
Soit $U$ ouvert convexe d'un Banach $E$, $f:U\to F$ de classe $C^1$ ($F$ Banach), avec $df_{x_0}$ isomorphisme en un $x_0\in U$ et $\|df_b-df_a\|\le M\|b-a\|$ pour tous $a,b\in U$ ; $C=\|df_{x_0}^{-1}\|$. Si $\delta<(2MC)^{-1}$ (avec $\bar B_E(x_0,\delta)\subset U$) et $\|f(x_0)\|_F$ sont assez petits, alors $\phi(r)=df_{x_0+r}^{-1}\big(f(x_0+r)-df_{x_0+r}(r)\big)$ est $K$-lipschitzienne sur $B_E(0,\delta)$ avec $K<1$ ; si de plus $C\|f(x_0)\|_F\le(1-K)\delta$, on a $\|\phi(r)\|_E\le\delta$ pour $\|r\|_E<\delta$ ($\phi$ est une contraction de $B_E(0,\delta)$ « dans elle-même » ; pour conclure proprement on travaille sur la boule fermée, complète). Alors la suite $x_{n+1}=x_n-df_{x_n}^{-1}(f(x_n))$ est bien définie, converge vers $z$ avec $f(z)=0$, et $\|x_{n+1}-z\|\le2CM\|x_n-z\|^2$ (convergence **quadratique**). (poly, Exercice VI.4.2, p. 121--122)

## CARD id=fc-ch06-043 ref=ch06-methode-de-newton tags=formule
### Q
Itération de Newton dans un Banach et inégalité des accroissements finis « centrée » utilisée dans l'exercice.
### R
$$x_{n+1}=x_n-df_{x_n}^{-1}\big(f(x_n)\big).$$
Pour $a,b,c\in U$ convexe : $\|f(b)-f(a)-df_c(b-a)\|_F\le\Big(\sup_{u\in[a,b]}\|df_u-df_c\|\Big)\|b-a\|_E$, avec $[a,b]=\{ta+(1-t)b\,;\,t\in[0;1]\}$. Contrôle de l'inverse : $\|df_{x_0+r}^{-1}\|\le\dfrac{C}{1-MC\|r\|}\le2C$. (poly, Exercice VI.4.2, p. 121--122)

## CARD id=fc-ch06-044 ref=ch06-methode-de-newton tags=contre-exemple,hypothese
### Q
Newton peut-il diverger ? Que devient la vitesse si $df_z=0$ en la racine ?
### R
Oui si $x_0$ est loin d'une racine ou si $df$ n'est pas lipschitzienne : $f(x)=x^3-2x+2$ depuis $x_0=0$ oscille entre $0$ et $1$ ; $f=\arctan$ diverge pour $|x_0|\gt1{,}39$ environ. Si $df_z=0$ (racine multiple), la convergence n'est plus quadratique : $f(x)=x^2$ donne $x_{n+1}=x_n/2$ (linéaire).

## CARD id=fc-ch06-045 ref=ch06-perturbation-racines-mercure tags=enonce
### Q
Énoncer le résultat de perturbation des racines de $P_\varepsilon(x)=(x-a)(b-x)+\varepsilon x^3$ ($a\lt b$).
### R
Pour $\varepsilon\gt0$ assez petit, $P_\varepsilon$ a trois racines réelles distinctes $x_a(\varepsilon)\lt x_b(\varepsilon)\lt x_c(\varepsilon)$ ; $\varepsilon\mapsto x_a(\varepsilon)$, $x_b(\varepsilon)$ sont $C^\infty$ près de $0$ avec $x_a(0)=a$, $x_b(0)=b$ (fonctions implicites, $\partial_xP_0(a)=b-a\ne0$), et $x_c(\varepsilon)\sim1/\varepsilon$. Ensuite $I(\varepsilon)=\displaystyle\int_{x_a(\varepsilon)}^{x_b(\varepsilon)}\frac{dx}{\sqrt{P_\varepsilon(x)}}=\pi+\frac{3\pi(a+b)}4\varepsilon+O(\varepsilon^2)$. (poly, Exercice VI.4.3, p. 122--123)

## CARD id=fc-ch06-046 ref=ch06-perturbation-racines-mercure tags=formule,methode
### Q
Comment obtient-on le développement à l'ordre $1$ de $x_a(\varepsilon)$ et $x_b(\varepsilon)$ ? Résultat ?
### R
Par fonctions implicites : $x'(0)=-\dfrac{\partial_\varepsilon P}{\partial_xP}$ en $\varepsilon=0$, avec $\partial_\varepsilon P_\varepsilon=x^3$, $\partial_xP_0(a)=b-a$, $\partial_xP_0(b)=a-b$ :
$$x_a(\varepsilon)=a-\frac{a^3}{b-a}\varepsilon+O(\varepsilon^2),\qquad x_b(\varepsilon)=b+\frac{b^3}{b-a}\varepsilon+O(\varepsilon^2).$$
Pour $0\lt a\lt b$ les racines s'écartent : $x_a\lt a$, $x_b\gt b$. (poly, Exercice VI.4.3, p. 122)

## CARD id=fc-ch06-047 ref=ch06-submersion-ouverte tags=enonce
### Q
Énoncer la surjectivité locale d'une application dont la différentielle est surjective (à noyau scindé).
### R
Soient $E,F$ des Banach, $U$ ouvert de $E$, $f:U\to F$ de classe $C^1$, $a\in U$ tel que $df_a$ soit **surjective** et que $\ker df_a$ admette un **supplémentaire fermé** $E_2$ dans $E$. Alors $f(U)$ contient un voisinage ouvert de $f(a)$. (poly, Exercice VI.4.5, p. 124)

## CARD id=fc-ch06-048 ref=ch06-submersion-ouverte tags=methode,contre-exemple
### Q
Comment prouve-t-on VI.4.5 ? Contre-exemple sans surjectivité de $df_a$ ?
### R
$df_a|_{E_2}:E_2\to F$ est bijective continue entre Banach, donc un isomorphisme bicontinu (V.2.3) ; on applique l'**inversion locale** à la restriction de $f$ à l'ouvert $U\cap(a+E_2)$ de $E_2$.
Sans surjectivité : $f(x,y)=(x,y^2)$ en $(0,0)$ : l'image est $\{v\ge0\}$, qui ne contient aucun voisinage de $f(0)=0$.

## CARD id=fc-ch06-049 ref=ch06-valeurs-propres-simples-lisses tags=enonce
### Q
Énoncer la dépendance lisse des valeurs et vecteurs propres simples d'une matrice.
### R
Soit $A_0\in\mathrm M_n(\R)$ avec $n$ valeurs propres réelles **distinctes** $\lambda_1(0),\dots,\lambda_n(0)$. (1) Il existe un voisinage $U$ de $A_0$ dans $\mathrm M_n(\R)$ et des fonctions $\lambda_i:U\to\R$ de classe $C^\infty$ telles que, pour $A\in U$, $\lambda_1(A),\dots,\lambda_n(A)$ soient les valeurs propres de $A$ et restent distinctes. (2) Pour $i$ fixé, quitte à restreindre $U$, il existe $v_i:U\to\R^n$ de classe $C^\infty$ avec $v_i(A)$ vecteur propre non nul de $A$ pour $\lambda_i(A)$. (poly, Exercice VI.4.7, p. 124)

## CARD id=fc-ch06-050 ref=ch06-valeurs-propres-simples-lisses tags=methode,contre-exemple
### Q
Quelle équation implicite utilise-t-on pour (1), puis pour (2) ? Que se passe-t-il pour une valeur propre double ?
### R
(1) $(A,\lambda)\mapsto\chi_A(\lambda)=\det(\lambda I-A)$, de $\mathrm M_n(\R)\times\R$ dans $\R$, avec $\partial_\lambda\chi_{A_0}(\lambda_i(0))\ne0$ car racine **simple** ; $\lambda_i(A)$ est la racine de $\chi_A$ proche de $\lambda_i(0)$.
(2) On résout en le **couple** $(v,\mu)\in\R^n\times\R$ ($n+1$ inconnues pour $n+1$ équations) :
$$F(A,v,\mu)=\big((A-\mu I)v,\ \langle v,v_i(0)\rangle-\|v_i(0)\|^2\big)\in\R^n\times\R.$$
En $(A_0,v_i(0),\lambda_i(0))$, $\partial_{(v,\mu)}F:(h,\nu)\mapsto\big((A_0-\lambda_i(0)I)h-\nu\,v_i(0),\ \langle h,v_i(0)\rangle\big)$ est injective, donc un isomorphisme de $\R^{n+1}$ : comme la valeur propre est simple, $v_i(0)\notin\mathrm{Im}(A_0-\lambda_i(0)I)$, d'où $\nu=0$ ; puis $h\in\ker(A_0-\lambda_i(0)I)=\R v_i(0)$ et $h\perp v_i(0)$ donnent $h=0$. Les fonctions implicites fournissent $(v_i(A),\mu(A))$ de classe $C^\infty$ avec $v_i(A)\ne0$ (normalisation) et $(A-\mu(A)I)v_i(A)=0$ ; $\mu(A)$ est une valeur propre de $A$ proche de $\lambda_i(0)$, donc $\mu(A)=\lambda_i(A)$. Attention : $(A,v)\mapsto\big((A-\lambda_i(A)I)v,\langle v,v_i(0)\rangle\big)$ ne convient **pas** tel quel ($n+1$ équations pour $n$ inconnues : la différentielle partielle en $v$ n'est jamais un isomorphisme).
Valeur double : $A(t)=\begin{pmatrix}0&t\\1&0\end{pmatrix}$ a pour valeurs propres $\pm\sqrt t$, non lisses (ni réelles pour $t\lt0$) en $t=0$.

## CARD id=fc-ch06-051 ref=ch06-immersion-submersion-def tags=enonce,definition
### Q
Définir : immersion en $a$, submersion en $a$, rang de $f$ en $a$, rang constant au voisinage de $a$.
### R
Soit $f:U\to\R^m$ de classe $C^p$, $p\ge1$, $U$ ouvert de $\R^n$, $a\in U$. $f$ est une **immersion en $a$** si $df_a$ est injective (donc $n\le m$), une **submersion en $a$** si $df_a$ est surjective ($n\ge m$). Le **rang** de $f$ en $a$ est $\mathrm{rang}(df_a)$ = rang de la jacobienne $\big(\frac{\partial f_i}{\partial x_j}(a)\big)$. $f$ est de rang constant $r$ au voisinage de $a$ si $\mathrm{rang}(df_x)=r$ pour tout $x$ d'un voisinage de $a$. (poly, Exercice VI.4.9, p. 125)

## CARD id=fc-ch06-052 ref=ch06-immersion-submersion-def tags=hypothese
### Q
Pourquoi immersion et submersion en $a$ sont-elles des conditions ouvertes, alors que « rang constant » intermédiaire ne l'est pas ?
### R
Le rang est semi-continu **inférieurement** : si $\mathrm{rang}(df_a)=r$ alors $\mathrm{rang}(df_x)\ge r$ près de $a$ (un mineur $r\times r$ non nul le reste). Rang maximal ($n$ ou $m$) $\Rightarrow$ rang constant près de $a$ automatiquement. Ce n'est pas le cas pour un rang intermédiaire : $f(x,y)=(x,xy)$ a pour rang $2$ hors de $\{x=0\}$ et $1$ sur $\{x=0\}$.

## CARD id=fc-ch06-053 ref=ch06-theoreme-rang-constant tags=enonce
### Q
Énoncer le théorème du rang constant (avec les cas immersion et submersion).
### R
Soit $f:U\to\R^m$ de classe $C^p$ ($p\ge1$), $U$ ouvert de $\R^n$, $a\in U$.
1. **Immersion** ($df_a$ injective) : il existe $U_1\ni a$, $W_1\ni f(a)$ ouverts et un difféomorphisme $\Psi:W_1\to W_2$ avec $f(U_1)\subset W_1$ et $\Psi\circ f(x_1,\dots,x_n)=(x_1,\dots,x_n,0,\dots,0)$ sur $U_1$.
2. **Submersion** ($df_a$ surjective) : il existe $U_1\ni a$, $U_2$ ouverts et un difféomorphisme $\Phi:U_2\to U_1$ avec $f\circ\Phi(x_1,\dots,x_n)=(x_1,\dots,x_m)$.
3. **Rang constant** : si $r=\mathrm{rang}(df_a)$ et $\mathrm{rang}(df_x)=r$ pour tout $x$ proche de $a$, il existe des difféomorphismes $\Phi:U_2\to U_1\ni a$, $\Psi:W_1\to W_2$ ($W_1\ni f(a)$), avec $f(U_1)\subset W_1$ et $\Psi\circ f\circ\Phi(x_1,\dots,x_n)=(x_1,\dots,x_r,0,\dots,0)$.
(poly, Exercice VI.4.9, p. 125)

## CARD id=fc-ch06-054 ref=ch06-theoreme-rang-constant tags=methode
### Q
Comment démontre-t-on le cas 3 (rang constant) du théorème du rang constant ?
### R
Normaliser ($a=0$, $f(0)=0$, bloc $r\times r$ supérieur gauche de la jacobienne inversible). Poser $\Theta(x)=(f_1(x),\dots,f_r(x),x_{r+1},\dots,x_n)$ : $d\Theta_0$ est inversible, donc (inversion locale) $\Phi=\Theta^{-1}$ ; $g=f\circ\Phi$ vérifie $g(y)=(y_1,\dots,y_r,g_{r+1}(y),\dots,g_m(y))$ et $dg_y=\begin{pmatrix}I_r&0\\ *&B(y)\end{pmatrix}$. Le rang constant $r$ force $B\equiv0$, donc $g_{r+1},\dots,g_m$ ne dépendent que de $y_1,\dots,y_r$ ; on redresse au but par $\Psi(z)=(z_1,\dots,z_r,z_{r+1}-g_{r+1}(z_1,\dots,z_r),\dots,z_m-g_m(z_1,\dots,z_r))$. Pour l'immersion : $F(u,t)=f(u)+\phi(t)$ avec $\phi:\R^{m-n}\to H$ isomorphisme sur un supplémentaire $H$ de $\mathrm{Im}\,df_a$, $\Psi=F^{-1}$. (poly, Exercice VI.4.9, p. 125--126)

## CARD id=fc-ch06-055 ref=ch06-theoreme-rang-constant tags=hypothese
### Q
Dans le cas 3 du théorème du rang constant, l'hypothèse « rang $r$ en $a$ » suffit-elle ?
### R
Non : il faut le rang **constant sur un voisinage** de $a$ (c'est elle qui force $B\equiv0$). Pour les rangs maximaux (immersion, submersion) elle est automatique par semi-continuité du rang. Il faut aussi $f$ de classe $C^p$, $p\ge1$ (les difféomorphismes obtenus sont $C^p$). Attention : « immersion » veut dire $df_a$ injective, **pas** $f$ injective.

## CARD id=fc-ch06-056 ref=ch06-theoreme-rang-constant tags=contre-exemple
### Q
Contre-exemples au théorème du rang constant : rang non constant ; forme normale seulement locale.
### R
Rang non constant : $f(x)=x^2$ en $0$ (l'image d'un voisinage de $0$ est $[0,\epsilon[$, pas l'image d'une application linéaire) ; $f(x,y)=(x,xy)$ en $0$ (rang $2$ hors de $\{x=0\}$, rang $1$ sur $\{x=0\}$).
Local seulement : $t\mapsto(\cos t,\sin t)$ est une immersion non injective ; $t\mapsto(\sin2t,\sin t)$ est une immersion **injective** sur $]-\pi,\pi[$ mais son image (en 8) n'est pas une sous-variété.

## CARD id=fc-ch06-057 ref=none tags=notation
### Q
Que notent $a\in[0\,;1[$, $g_\lambda$, $\varphi(\lambda)$ dans les théorèmes de point fixe à paramètre ?
### R
$[0\,;1[$ est l'intervalle semi-ouvert (notation du poly) : $a$ est la constante de contraction. $g_\lambda:X\to X$, $x\mapsto g(\lambda,x)$ est l'application partielle à paramètre $\lambda$ fixé. $\varphi(\lambda)$ est l'unique point fixe de $g_\lambda$, et $\varphi:\Lambda\to X$. (poly, p. 116)

## CARD id=fc-ch06-058 ref=none tags=notation
### Q
Quels sont les types de $\dfrac{\partial g}{\partial x}(\lambda,x)$ et $\dfrac{\partial g}{\partial\lambda}(\lambda,x)$ pour $g:\Lambda\times X\to X$, $\Lambda\subset E$, $X\subset F$ ?
### R
$\dfrac{\partial g}{\partial x}(\lambda,x)\in\mathcal L(F)$ (différentielle partielle en la seconde variable) et $\dfrac{\partial g}{\partial\lambda}(\lambda,x)\in\mathcal L(E;F)$ (en la première). Dans la preuve on pose $A=\frac{\partial g}{\partial x}(\lambda,\varphi(\lambda))$, $B=\frac{\partial g}{\partial \lambda}(\lambda,\varphi(\lambda))$, de sorte que $d\varphi_\lambda=(\mathrm{Id}_F-A)^{-1}\circ B$. (poly, p. 117)

## CARD id=fc-ch06-059 ref=none tags=notation
### Q
Notations des boules dans le chapitre VI : $B(x_0,r)$, $\bar B(y_0,s)$, $B_E(0,\delta)$, $B_{\mathcal L(E)}(0,a)$.
### R
$B$ : boule **ouverte**, $\bar B$ : boule **fermée**, de centre et rayon indiqués ; l'indice précise l'espace (par ex. $B_{\mathcal L(E)}(0,a)=\{L\in\mathcal L(E)\,;\,\|L\|\lt a\}$). Les théorèmes de point fixe exigent un **complet** : on travaille donc sur $\bar B(y_0,s)$ puis on prend $V_0=B(y_0,s)$. (poly, p. 117--118)

## CARD id=fc-ch06-060 ref=none tags=notation
### Q
Que signifie « isomorphisme bicontinu » ? Quand se simplifie-t-il ?
### R
Une application linéaire **bijective, continue, d'inverse continu**. Entre espaces de Banach, bijective + continue suffit (Théorème V.2.3, dit de Banach, conséquence du théorème de l'application ouverte) ; en dimension finie cela se lit $\det\ne0$ (donc $\dim E=\dim F$). (poly, p. 118 ; notation $\mathrm{Iso}(E;F)$ au chapitre V)

## CARD id=fc-ch06-061 ref=none tags=notation
### Q
Dans le chapitre VI, $C^p$ ou $C^k$ ? Quelles notations pour $\mathrm{Id}-L$, $f(U)$, $C^k$-difféomorphisme ?
### R
Le poly note $p$ l'ordre de régularité dans point fixe et fonctions implicites, et $k$ dans inversion locale/globale ; même sens ($\ge1$, ou $+\infty$). $\mathrm{Id}_F$ est l'identité de $F$ ; $\mathrm{Id}-L$ désigne $\mathrm{Id}_E-L$ ; $f(U)$ est l'image de $U$ par $f$ ; un $C^k$-difféomorphisme est une bijection $C^k$ entre ouverts dont l'inverse est $C^k$. (poly, p. 117--120)

## CARD id=fc-ch06-062 ref=none tags=notation
### Q
Notations du lemme de Morse : $I_{r,s}$, $\mathrm{Sym}_m$, ${}^thSk$, $\mathrm M_m(\R)$, $\mathrm{GL}(m,\R)$.
### R
$I_{r,s}=\begin{pmatrix}I_r&0\\0&-I_s\end{pmatrix}\in\mathrm{Sym}_m$ (forme normale de signature $(r,s)$) ; $\mathrm M_m(\R)$ : matrices carrées réelles $m\times m$ ; $\mathrm{Sym}_m$, $\mathrm{ASym}_m$ : symétriques, antisymétriques ; $\mathrm{GL}(m,\R)$ : inversibles. On identifie $\R^m$ aux matrices colonnes : la forme bilinéaire symétrique de matrice $S$ est $(h,k)\mapsto{}^thSk$. (poly, p. 120)

## CARD id=fc-ch06-063 ref=none tags=notation
### Q
Notations de la preuve du théorème du rang constant : $\Theta$, $\Phi$, $\Psi$, $g$, $B(y)$.
### R
$\Theta(x)=(f_1(x),\dots,f_r(x),x_{r+1},\dots,x_n)$ (changement de coordonnées à la source), $\Phi=\Theta^{-1}$, $g=f\circ\Phi$, $dg_y=\begin{pmatrix}I_r&0\\ *&B(y)\end{pmatrix}$ avec $B(y)$ de taille $(m-r)\times(n-r)$ ; $\Psi$ est le difféomorphisme **au but** qui redresse l'image. Dans VI.4.5 : $E_1=\ker df_a$ et $E_2$ un supplémentaire fermé. (poly, p. 124--126)

## CARD id=fc-ch06-064 ref=ch06-point-fixe-banach tags=methode
### Q
Checklist : pour appliquer le théorème de point fixe de Banach à une équation $y=g(y)$, que doit-on vérifier ?
### R
1. L'espace $X$ est **complet** : un fermé d'un Banach, une boule **fermée** (pas ouverte).
2. **Stabilité** $g(X)\subset X$ (souvent le point délicat : on contrôle $\|g_x(y)-y_0\|\le\|g_x(y)-g_x(y_0)\|+\|g_x(y_0)-g_{x_0}(y_0)\|\le\frac s2+(\text{petit})$ en choisissant $r$ petit).
3. **Contraction** uniforme $a<1$ : par l'inégalité des accroissements finis sur un **convexe**, avec $\|\partial g/\partial y\|\le a$.

## CARD id=fc-ch06-065 ref=ch06-fonctions-implicites tags=methode
### Q
Pour montrer qu'une équation $F(x,y)=c$ définit localement $y=\varphi(x)$ de classe $C^1$ autour de $(x_0,y_0)$ (et calculer $\varphi'(x_0)$), que fait-on ?
### R
1. Vérifier $F(x_0,y_0)=c$ et $F$ de classe $C^1$ près de $(x_0,y_0)$.
2. Vérifier que $\partial_yF(x_0,y_0)$ est **inversible** (en dimension finie : jacobien partiel $\ne0$ ; pour $y\in\R$, $\partial_yF\ne0$).
3. Conclure par VI.2.1 ; puis $\varphi'(x_0)=-(\partial_yF(x_0,y_0))^{-1}\partial_xF(x_0,y_0)$ (ou dériver $F(x,\varphi(x))=c$).
Pour les dérivées d'ordre supérieur : dériver à nouveau cette identité.

## CARD id=fc-ch06-066 ref=ch06-submersion-ouverte tags=methode
### Q
Pour montrer qu'une équation non linéaire $\Psi(f)=g$ a une solution pour $g$ petit (ex. $f'+tf^2=g$ sur $[0;1]$), quelle stratégie ?
### R
Montrer que $\Psi:E\to F$ est de classe $C^1$ entre Banach (normes $C^1\to C^0$), que $d\Psi_0=\frac d{dt}$ est **surjective**, et que son noyau (les constantes) admet un **supplémentaire fermé** $E_2=\{f\,;\,f(0)=0\}$. Alors, par VI.4.5, $\Psi(E)$ contient un voisinage de $\Psi(0)=0$ : il existe $\epsilon\gt0$ tel que pour tout $g\in B_F(0,\epsilon)$ il existe $f\in E$ avec $f'+tf^2=g$. On n'a que l'**existence**, pas l'unicité. (poly, Exercice VI.4.6, p. 124)
