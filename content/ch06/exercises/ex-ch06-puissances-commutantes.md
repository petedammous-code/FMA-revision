---
id: ex-ch06-puissances-commutantes
type: exercise
chapters: [6, 5]
title: Quand a-t-on x^y = y^x ? Deux branches qui se croisent
source: "Classique (équation $x^y=y^x$, Euler et Goldbach) ; traitement par fonctions implicites et factorisation inventé pour ce site"
difficulty: 2
time: 30
tools: [ch06-fonctions-implicites, ch05-theoreme-fondamental, ch05-differentielles-partielles]
---
## Énoncé

Pour $x,y>0$ on note $x^y=e^{y\ln x}$. On cherche l'ensemble
$$
\Gamma=\{(x,y)\in\,]0,+\infty[^2 \ :\ x^y=y^x\},
$$
qui contient évidemment la diagonale $\Delta=\{(x,x) : x>0\}$. On pose $h(t)=\dfrac{\ln t}{t}$ pour $t>0$.

1. Montrer que $(x,y)\in\Gamma$ si et seulement si $h(x)=h(y)$. Étudier $h$ et en déduire :
   * si $x\in\,]0,1]$ ou $x=e$, le seul $y>0$ tel que $(x,y)\in\Gamma$ est $y=x$ ;
   * si $x\in\,]1,e[$, il existe exactement un $y\neq x$ tel que $(x,y)\in\Gamma$ ; on le note $\sigma(x)$, et l'on a $\sigma(x)>e$.

   Que vaut $\sigma(2)$ ?
2. Montrer que $\sigma$ est de classe $C^\infty$ et décroissante sur $]1,e[$, et exprimer $\sigma'(x)$ en fonction de $x$ et de $\sigma(x)$.
3. Montrer qu'il existe une fonction $G:\,]0,+\infty[^2\to\R$ de classe $C^\infty$ telle que
$$
h(x)-h(y)=(x-y)\,G(x,y)\quad\text{et}\quad G(x,x)=h'(x)\qquad(x,y>0).
$$
Calculer $G(e,e)$ et le gradient $\nabla G(e,e)$. Pourquoi ne peut-on pas étudier $\Gamma$ près de $(e,e)$ en appliquant directement le théorème des fonctions implicites à $F(x,y)=h(x)-h(y)$ ?
4. En déduire qu'il existe deux intervalles ouverts $I$, $J$ contenant $e$ et une fonction $\psi:I\to J$ de classe $C^\infty$, avec $\psi(e)=e$ et $\psi'(e)=-1$, tels que
$$
\Gamma\cap(I\times J)=\big(\Delta\cap(I\times J)\big)\cup\{(x,\psi(x)) : x\in I\}.
$$
Montrer enfin que $\sigma(x)\to e$ et $\dfrac{\sigma(x)-e}{x-e}\to-1$ quand $x\to e^-$.
5. Pour $t>0$, on pose $x_t=(1+1/t)^t$ et $y_t=(1+1/t)^{t+1}$. Vérifier que $x_t\in\,]1,e[$ et que $\sigma(x_t)=y_t$. Retrouver le résultat de la question 4 à l'aide de cette paramétrisation.

## Indices

### Indice 1
Ensemble défini par une équation $F(x,y)=0$ : là où $\partial F/\partial y\neq0$, c'est localement un graphe. Le point $(e,e)$ est spécial, car deux « morceaux » de $\Gamma$ s'y rencontrent. Il faut d'abord retirer la diagonale de l'équation.

### Indice 2
Question 2 : appliquer le théorème des fonctions implicites ([[ch06-fonctions-implicites]]) à $F(x,y)=h(x)-h(y)$ en $(x_0,\sigma(x_0))$. On a $\partial_yF=-h'(y)\neq0$ car $\sigma(x_0)>e$. Il faut ensuite expliquer pourquoi la fonction implicite obtenue **est** $\sigma$ : c'est l'unicité de la question 1. Question 3 : le théorème fondamental du calcul différentiel ([[ch05-theoreme-fondamental]]) appliqué à $h$ sur le segment $[y,x]$.

### Indice 3
$G(x,y)=\displaystyle\int_0^1h'\big(y+t(x-y)\big)\,dt$. Avec $h''(t)=(2\ln t-3)/t^3$, on trouve $\partial_xG(e,e)=\tfrac12h''(e)=\partial_yG(e,e)$. Appliquer alors les fonctions implicites à $G$, et non à $F$, au point $(e,e)$.

## Corrigé

**1.** Pour $x,y>0$, la fonction $\exp$ est injective, donc $x^y=y^x$ équivaut à $y\ln x=x\ln y$, puis, en divisant par $xy>0$, à $h(x)=h(y)$.

*Étude de $h$.* $h$ est $C^\infty$ sur $]0,+\infty[$ et $h'(t)=\dfrac{1-\ln t}{t^2}$, qui est $>0$ sur $]0,e[$ et $<0$ sur $]e,+\infty[$. Donc $h$ est strictement croissante sur $]0,e]$ et strictement décroissante sur $[e,+\infty[$. De plus $h(t)\to-\infty$ en $0^+$, $h(1)=0$, $h(e)=1/e$, et $h(t)\to0$ en $+\infty$ avec $h>0$ sur $]1,+\infty[$.

* Si $x\in\,]0,1]$ : $h(x)\le0$. Si $h(y)=h(x)$, alors $h(y)\le0$, donc $y\le1$ (car $h>0$ sur $]1,+\infty[$). Comme $h$ est injective sur $]0,1]\subset\,]0,e]$, on a $y=x$.
* Si $x=e$ : $h(y)=1/e=\max h$, et ce maximum n'est atteint qu'en $e$ par stricte monotonie de chaque côté, donc $y=e$.
* Si $x\in\,]1,e[$ : $h(x)\in\,]0,1/e[$. Sur $]0,e]$, $h$ est injective, donc le seul $y\le e$ convenable est $y=x$. Sur $]e,+\infty[$, $h$ est continue et strictement décroissante, de limites $1/e$ en $e^+$ et $0$ en $+\infty$. C'est donc une bijection de $]e,+\infty[$ sur $]0,1/e[$, et il existe un unique $y>e$ tel que $h(y)=h(x)$. C'est $\sigma(x)$.

Comme $h(4)=\dfrac{\ln 4}{4}=\dfrac{2\ln2}{4}=h(2)$ et $4>e$, on a $\sigma(2)=4$ : c'est le célèbre $2^4=4^2$.

**2.** Fixons $x_0\in\,]1,e[$ et $y_0=\sigma(x_0)>e$. La fonction $F(x,y)=h(x)-h(y)$ est $C^\infty$ sur l'ouvert $]0,+\infty[^2$, $F(x_0,y_0)=0$, et
$$
\frac{\partial F}{\partial y}(x_0,y_0)=-h'(y_0)=\frac{\ln y_0-1}{y_0^2}>0 .
$$
Une application linéaire $\R\to\R$ non nulle est un isomorphisme bicontinu. Le théorème des fonctions implicites ([[ch06-fonctions-implicites]], poly Théorème VI.2.1, p. 118) fournit des ouverts $U_0\ni x_0$, $V_0\ni y_0$ et $\varphi:U_0\to V_0$ de classe $C^\infty$ tels que, pour $(x,y)\in U_0\times V_0$, $F(x,y)=0\iff y=\varphi(x)$.

On peut supposer $V_0\subset\,]e,+\infty[$ et $U_0\subset\,]1,e[$. Pour cela, on remplace $V_0$ par $V_0\cap\,]e,+\infty[$ et $U_0$ par $U_0\cap\,]1,e[\,\cap\,\varphi^{-1}(]e,+\infty[)$. Cet ensemble est ouvert par continuité de $\varphi$ et contient $x_0$. L'équivalence reste vraie sur le produit plus petit.

Alors, pour $x\in U_0$, on a $(x,\varphi(x))\in\Gamma$ et $\varphi(x)>e>x$, donc $\varphi(x)\neq x$. Par l'unicité de la question 1, $\varphi(x)=\sigma(x)$. Ainsi $\sigma$ coïncide au voisinage de chaque point de $]1,e[$ avec une fonction $C^\infty$ : $\sigma$ est $C^\infty$ sur $]1,e[$. La formule du théorème donne
$$
\sigma'(x)=-\frac{\partial_xF}{\partial_yF}\big(x,\sigma(x)\big)=\frac{h'(x)}{h'(\sigma(x))}=\frac{(1-\ln x)\,\sigma(x)^2}{x^2\,\big(1-\ln\sigma(x)\big)} .
$$
Le numérateur est $>0$ ($x<e$) et le dénominateur $<0$ ($\sigma(x)>e$), donc $\sigma'<0$ et $\sigma$ est strictement décroissante. Contrôle : $\sigma'(2)=\dfrac{16(1-\ln2)}{4(1-2\ln2)}\approx-3{,}18$, ce que confirme un calcul numérique de $\sigma$ au voisinage de $2$.

**3.** Soient $x,y>0$. Le segment $\{y+t(x-y) : t\in[0,1]\}$ est contenu dans $]0,+\infty[$ (intervalle). Le théorème fondamental du calcul différentiel ([[ch05-theoreme-fondamental]], poly Théorème V.4.7, p. 105), appliqué à $h$ de classe $C^1$ entre $y$ et $x$, donne
$$
h(x)-h(y)=\int_0^1h'\big(y+t(x-y)\big)(x-y)\,dt=(x-y)\,G(x,y),\qquad G(x,y):=\int_0^1h'\big(y+t(x-y)\big)\,dt .
$$
L'intégrande $(t,x,y)\mapsto h'(y+t(x-y))$ est $C^\infty$ sur $[0,1]\times\,]0,+\infty[^2$, et l'on intègre sur le compact $[0,1]$. Le théorème de dérivation sous le signe intégrale montre donc que $G$ est $C^\infty$, avec
$$
\partial_xG(x,y)=\int_0^1t\,h''\big(y+t(x-y)\big)\,dt,\qquad \partial_yG(x,y)=\int_0^1(1-t)\,h''\big(y+t(x-y)\big)\,dt .
$$
Pour $x=y$, l'intégrande de $G$ est constant égal à $h'(x)$, d'où $G(x,x)=h'(x)$. En particulier $G(e,e)=h'(e)=0$.

On a $h''(t)=\dfrac{-1}{t^3}-\dfrac{2(1-\ln t)}{t^3}=\dfrac{2\ln t-3}{t^3}$, donc $h''(e)=-\dfrac1{e^3}$, et
$$
\nabla G(e,e)=\Big(\tfrac12h''(e),\ \tfrac12h''(e)\Big)=-\frac1{2e^3}\,(1,1)\neq(0,0).
$$

*Pourquoi pas $F$ directement ?* $\partial_yF(e,e)=-h'(e)=0$ et $\partial_xF(e,e)=h'(e)=0$ : $(e,e)$ est un point critique de $F$. L'hypothèse du théorème des fonctions implicites tombe en défaut, que l'on cherche $y$ en fonction de $x$ ou l'inverse. D'ailleurs la conclusion serait fausse : on va voir que deux courbes de $\Gamma$ se croisent en $(e,e)$, et $\Gamma$ n'y est un graphe dans aucune direction.

**4.** On applique le théorème des fonctions implicites à $G$ au point $(e,e)$. $G$ est $C^\infty$ sur l'ouvert $]0,+\infty[^2$, $G(e,e)=0$ et $\partial_yG(e,e)=-\dfrac1{2e^3}\neq0$. On obtient des ouverts $I\ni e$, $J\ni e$ et $\psi:I\to J$ de classe $C^\infty$ tels que $\psi(e)=e$ et, pour $(x,y)\in I\times J$, $G(x,y)=0\iff y=\psi(x)$. Quitte à remplacer $J$ par un intervalle ouvert contenu dans $J$ et contenant $e$, puis $I$ par un intervalle ouvert contenant $e$, contenu dans $]1,+\infty[$ et sur lequel $\psi$ prend ses valeurs dans ce nouvel intervalle (continuité de $\psi$), on peut supposer que $I$ et $J$ sont des intervalles et que $I\subset\,]1,+\infty[$. De plus
$$
\psi'(e)=-\frac{\partial_xG(e,e)}{\partial_yG(e,e)}=-1 .
$$
Pour $(x,y)\in I\times J$ : $(x,y)\in\Gamma\iff (x-y)G(x,y)=0\iff y=x$ ou $y=\psi(x)$. C'est la description annoncée.

*Lien avec $\sigma$.* Si $x\in I$ et $\psi(x)=x$, alors $G(x,x)=h'(x)=0$, donc $x=e$. Ainsi, pour $x\in I\cap\,]1,e[$, $(x,\psi(x))\in\Gamma\setminus\Delta$, et la question 1 donne $\psi(x)=\sigma(x)$. Par continuité et dérivabilité de $\psi$ en $e$ :
$$
\sigma(x)=\psi(x)\xrightarrow[x\to e^-]{}\psi(e)=e,\qquad \frac{\sigma(x)-e}{x-e}=\frac{\psi(x)-\psi(e)}{x-e}\xrightarrow[x\to e^-]{}\psi'(e)=-1 .
$$
Géométriquement, $\Gamma$ est, près de $(e,e)$, la réunion de deux courbes $C^\infty$ qui se coupent à angle droit : la diagonale (pente $1$) et le graphe de $\psi$ (pente $-1$).

**5.** On a $\ln x_t=t\ln(1+1/t)$ et $\ln y_t=(t+1)\ln(1+1/t)$, donc $y_t=x_t\,(1+1/t)$. Alors
$$
y_t\ln x_t=x_t\Big(1+\frac1t\Big)\,t\ln\Big(1+\frac1t\Big)=x_t\,(t+1)\ln\Big(1+\frac1t\Big)=x_t\ln y_t ,
$$
donc $(x_t,y_t)\in\Gamma$, et $y_t>x_t$, donc $(x_t,y_t)\notin\Delta$. Comme $0<\ln(1+u)<u$ pour $u>0$, on a $0<\ln x_t<t\cdot\frac1t=1$, soit $x_t\in\,]1,e[$. D'après la question 1, $y_t=\sigma(x_t)$.

Quand $t\to+\infty$, $\ln(1+1/t)=\frac1t-\frac1{2t^2}+O(t^{-3})$ donne $\ln x_t=1-\frac1{2t}+O(t^{-2})$ et $\ln y_t=1+\frac1{2t}+O(t^{-2})$. D'où $x_t-e=-\frac{e}{2t}+O(t^{-2})$ et $y_t-e=\frac{e}{2t}+O(t^{-2})$, donc $x_t\to e^-$ et
$$
\frac{\sigma(x_t)-e}{x_t-e}=\frac{y_t-e}{x_t-e}\longrightarrow-1,
$$
en accord avec la question 4. (Comme $t\mapsto\ln x_t$ est continue, tend vers $0$ en $0^+$ et vers $1$ en $+\infty$, tout $x\in\,]1,e[$ est un $x_t$ : la paramétrisation décrit toute la branche non diagonale.)

## Pièges et variantes

* > ⚠️ Avoir trouvé une fonction implicite $\varphi$ près de $(x_0,\sigma(x_0))$ ne dit pas encore que $\varphi=\sigma$. Il faut un argument d'**unicité** : ici, la question 1 et le choix de $V_0\subset\,]e,+\infty[$, qui garantit $\varphi(x)\neq x$.
* Au point $(e,e)$, les deux dérivées partielles de $F$ s'annulent : le théorème ne s'applique dans **aucune** direction. L'astuce est de diviser par l'équation de la branche connue (ici $x-y$), ce qui est possible grâce au [[ch05-theoreme-fondamental|théorème fondamental]]. Le quotient $G$ a, lui, un gradient non nul.
* Pour $x\in I\cap\,]e,+\infty[$, $\psi(x)$ est l'unique $y\in\,]1,e[$ tel que $\sigma(y)=x$, soit $\psi=\sigma^{-1}$. La fonction égale à $\sigma$ sur $]1,e[$, à $e$ en $e$ et à $\sigma^{-1}$ sur $]e,+\infty[$ est donc une **involution** $C^\infty$ de $]1,+\infty[$ (régularité en dehors de $e$ : question 2 et symétrie).
* Variante : on aurait pu invoquer le lemme de Morse ([[ch06-lemme-de-morse]]). $(e,e)$ est un point critique non dégénéré de $F$, de hessienne $\mathrm{diag}(-1/e^3,\,1/e^3)$, de signature $(1,1)$. Donc $F^{-1}(0)$ est, près de $(e,e)$, l'image de deux droites sécantes par un difféomorphisme : deux courbes transverses, de pentes $\pm1$ (directions isotropes de la hessienne).
* Variante : les solutions **rationnelles** de $x^y=y^x$ avec $x<y$ sont exactement les $(x_t,y_t)$ avec $t\in\N^*$ : $(2,4)$, $(9/4,27/8)$, ...
