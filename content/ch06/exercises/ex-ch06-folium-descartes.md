---
id: ex-ch06-folium-descartes
type: exercise
chapters: [6]
title: Le folium de Descartes, graphe local ou non
source: "Classique (folium de Descartes, exemple standard des fonctions implicites) ; questions et rédaction adaptées"
difficulty: 2
time: 20
tools: [ch06-fonctions-implicites, ch05-differentielles-partielles, ch05-composition-differentielles]
---
## Énoncé

On pose $F(x,y)=x^3+y^3-3xy$ pour $(x,y)\in\R^2$, et $\mathcal C=\{(x,y)\in\R^2 : F(x,y)=0\}$ (le « folium de Descartes »).

1. Vérifier que $\big(\tfrac32,\tfrac32\big)\in\mathcal C$. Montrer qu'il existe des intervalles ouverts $I\ni\tfrac32$, $J\ni\tfrac32$ et une fonction $\varphi:I\to J$ de classe $C^\infty$ tels que $\mathcal C\cap(I\times J)$ soit le graphe de $\varphi$. Calculer $\varphi'(\tfrac32)$ et $\varphi''(\tfrac32)$, et donner l'équation de la tangente à $\mathcal C$ en ce point.
2. Déterminer les points de $\mathcal C$ en lesquels $\dfrac{\partial F}{\partial y}$ s'annule. En chacun d'eux autre que l'origine, montrer que $\mathcal C$ est localement un graphe de la forme $x=\psi(y)$, mais **pas** un graphe de la forme $y=\varphi(x)$.
3. Montrer qu'au voisinage de $(0,0)$, $\mathcal C$ n'est ni un graphe $y=\varphi(x)$, ni un graphe $x=\psi(y)$ : pour tous intervalles ouverts $I,J$ contenant $0$, $\mathcal C\cap(I\times J)$ n'est le graphe d'aucune fonction de $I$ dans $J$ (ni de $J$ dans $I$).

## Indices

### Indice 1
« $\mathcal C$ est localement le graphe d'une fonction $C^\infty$ de $x$ » : c'est la conclusion d'un théorème dont l'hypothèse porte sur une seule dérivée partielle de $F$, au point considéré.

### Indice 2
Théorème des fonctions implicites avec $E=F=G=\R$ : il faut $F$ de classe $C^1$ (ici polynomiale) et $\frac{\partial F}{\partial y}(x_0,y_0)\ne0$. Pour $\varphi''$, dériver deux fois l'identité $F(x,\varphi(x))=0$. Pour la question 2, échanger les rôles de $x$ et $y$, puis regarder le signe de $\psi''$.

### Indice 3
Question 3 : pour $x>0$ petit, étudier $g_x(y)=y^3-3xy+x^3$ en $y=0$, $y=\sqrt x$ et $y=2\sqrt x$ (théorème des valeurs intermédiaires), puis utiliser la symétrie $F(x,y)=F(y,x)$.

## Corrigé

**1.** $F(\tfrac32,\tfrac32)=\tfrac{27}8+\tfrac{27}8-\tfrac{27}4=0$, donc $(\tfrac32,\tfrac32)\in\mathcal C$. La fonction $F$ est polynomiale, donc de classe $C^\infty$ sur l'ouvert $\R\times\R$, et
$$
\frac{\partial F}{\partial x}=3x^2-3y,\qquad \frac{\partial F}{\partial y}=3y^2-3x,\qquad \frac{\partial F}{\partial y}\big(\tfrac32,\tfrac32\big)=\tfrac{27}4-\tfrac92=\tfrac94\ne0 .
$$
En dimension $1$, la différentielle partielle $k\mapsto\frac{\partial F}{\partial y}(\tfrac32,\tfrac32)\,k$ est un isomorphisme bicontinu de $\R$ sur $\R$. Le théorème des fonctions implicites ([[ch06-fonctions-implicites]], avec $E=F=G=\R$, $p=\infty$) donne des ouverts $U_0\ni\tfrac32$, $V_0\ni\tfrac32$ et $\varphi:U_0\to V_0$ de classe $C^\infty$ avec $\varphi(\tfrac32)=\tfrac32$ et, pour $(x,y)\in U_0\times V_0$, $F(x,y)=0\iff y=\varphi(x)$. Quitte à remplacer $U_0$, $V_0$ par des intervalles ouverts $J\subset V_0$ contenant $\tfrac32$ et $I\subset U_0\cap\varphi^{-1}(J)$ contenant $\tfrac32$ ($\varphi$ est continue), on obtient exactement l'énoncé : $\mathcal C\cap(I\times J)$ est le graphe de $\varphi|_I$.

*Dérivées.* La formule du théorème donne $\varphi'(x)=-\dfrac{\partial_xF(x,\varphi(x))}{\partial_yF(x,\varphi(x))}$, d'où $\varphi'(\tfrac32)=-\dfrac{9/4}{9/4}=-1$. Pour $\varphi''$, on dérive deux fois $F(x,\varphi(x))=0$ (règle de la chaîne, [[ch05-composition-differentielles]]) :
$$
\partial_xF+\partial_yF\,\varphi'=0,\qquad \partial_{xx}F+2\,\partial_{xy}F\,\varphi'+\partial_{yy}F\,\varphi'^2+\partial_yF\,\varphi''=0 .
$$
Au point $(\tfrac32,\tfrac32)$ : $\partial_{xx}F=6x=9$, $\partial_{xy}F=-3$, $\partial_{yy}F=6y=9$, $\varphi'=-1$, donc
$$
9+2(-3)(-1)+9\cdot1+\tfrac94\,\varphi''(\tfrac32)=0\quad\Longrightarrow\quad \varphi''(\tfrac32)=-\frac{24}{9/4}=-\frac{32}3 .
$$
La tangente est la droite $y-\tfrac32=-(x-\tfrac32)$, c'est-à-dire $x+y=3$ (et la courbe est localement en dessous, puisque $\varphi''<0$).

**2.** On cherche $(x,y)$ avec $F(x,y)=0$ et $3y^2-3x=0$. La seconde équation donne $x=y^2$ ; en reportant : $y^6+y^3-3y^3=y^3(y^3-2)=0$, donc $y=0$ (et $x=0$) ou $y=2^{1/3}$ (et $x=2^{2/3}$). Les points cherchés sont $(0,0)$ et $M_0=(2^{2/3},2^{1/3})$.

En $M_0$ : $\partial_xF(M_0)=3(2^{4/3}-2^{1/3})=3\cdot2^{1/3}(2-1)=3\cdot2^{1/3}\ne0$. Le théorème des fonctions implicites, appliqué cette fois en résolvant en $x$ (les rôles de $x$ et $y$ échangés), donne des intervalles ouverts $J'\ni2^{1/3}$, $I'\ni2^{2/3}$ et $\psi:J'\to I'$ de classe $C^\infty$, $\psi(2^{1/3})=2^{2/3}$, tels que $\mathcal C\cap(I'\times J')=\{(\psi(y),y) : y\in J'\}$. On a $\psi'=-\partial_yF/\partial_xF$, donc $\psi'(2^{1/3})=0$ : la tangente est verticale. En dérivant deux fois $F(\psi(y),y)=0$ et en utilisant $\psi'(2^{1/3})=0$ :
$$
\partial_xF\,\psi''+\partial_{yy}F=0\quad\Longrightarrow\quad \psi''(2^{1/3})=-\frac{6\cdot2^{1/3}}{3\cdot2^{1/3}}=-2<0 .
$$
Donc $\psi$ admet un maximum local strict en $y_0=2^{1/3}$ : il existe $\delta>0$ tel que $\psi$ soit strictement croissante sur $[y_0-\delta,y_0]$ et strictement décroissante sur $[y_0,y_0+\delta]$ (car $\psi'(y_0)=0$ et $\psi''<0$ près de $y_0$). Soient $I\ni 2^{2/3}$ et $J\ni y_0$ deux intervalles ouverts ; quitte à réduire $\delta$, $[y_0-\delta,y_0+\delta]\subset J\cap J'$. Pour $x<2^{2/3}$ assez proche de $2^{2/3}$ (plus précisément $x\in I$ et $x>\max(\psi(y_0-\delta),\psi(y_0+\delta))$), le théorème des valeurs intermédiaires fournit $y_1\in\,]y_0-\delta,y_0[$ et $y_2\in\,]y_0,y_0+\delta[$ avec $\psi(y_1)=\psi(y_2)=x$ : les deux points distincts $(x,y_1)$ et $(x,y_2)$ sont dans $\mathcal C\cap(I\times J)$, qui n'est donc pas un graphe au-dessus de $I$.

**3.** Soit $x>0$ et $g_x(y)=F(x,y)=y^3-3xy+x^3$, continue en $y$. On a
$$
g_x(0)=x^3>0,\qquad g_x(\sqrt x)=x^{3/2}-3x^{3/2}+x^3=x^{3/2}\big(x^{3/2}-2\big)<0\ \text{si } x<2^{2/3},\qquad g_x(2\sqrt x)=8x^{3/2}-6x^{3/2}+x^3>0 .
$$
Par le théorème des valeurs intermédiaires, $g_x$ a (au moins) une racine dans $]0,\sqrt x[$ et une autre dans $]\sqrt x,2\sqrt x[$ : il y a deux points distincts de $\mathcal C$ d'abscisse $x$ et d'ordonnée dans $]0,2\sqrt x[$. Soient maintenant $I,J$ des intervalles ouverts contenant $0$ : pour $x>0$ assez petit, $x\in I$ et $]0,2\sqrt x[\,\subset J$, donc $\mathcal C\cap(I\times J)$ contient deux points de même abscisse $x$ : ce n'est pas le graphe d'une fonction de $I$ dans $J$. Comme $F(x,y)=F(y,x)$, $\mathcal C$ est symétrique par rapport à la première bissectrice, et le même argument (avec $y>0$ petit) montre que ce n'est pas non plus un graphe $x=\psi(y)$.

> 💡 En fait $\mathcal C$ a un point double en $0$ : deux branches s'y croisent, l'une tangente à l'axe des $x$ ($y\approx x^2/3$), l'autre tangente à l'axe des $y$ ($x\approx y^2/3$). Aucun changement de variable « graphe » ne peut décrire deux branches à la fois.

## Pièges et variantes

* Le théorème des fonctions implicites ne s'applique qu'aux points **de la courbe** : vérifier $F(x_0,y_0)=0$ (ou résoudre au niveau $F(x_0,y_0)$).
* $\partial_yF(x_0,y_0)=0$ n'implique **pas** à lui seul que $\mathcal C$ n'est pas un graphe en $y=\varphi(x)$ : le théorème est une condition suffisante. Exemple : $F(x,y)=y^3-x$ a $\partial_yF(0,0)=0$ mais $\mathcal C$ est le graphe de $x\mapsto x^{1/3}$ (seulement continu en $0$, pas $C^1$). Il faut un argument supplémentaire, comme ici le signe de $\psi''$ ou le comptage de solutions.
* Ne pas oublier de **restreindre** les ouverts : le théorème décrit $\mathcal C\cap(U_0\times V_0)$, pas $\mathcal C$ tout entier ; pour $x=\tfrac32$, il existe d'autres points de $\mathcal C$ d'abscisse $\tfrac32$ hors de $V_0$ ($y^3-\tfrac92y+\tfrac{27}8=(y-\tfrac32)(y^2+\tfrac32y-\tfrac94)$ a aussi les racines $\frac{-3\pm3\sqrt5}4$).
* Variante : avec le paramétrage $t\mapsto\big(\frac{3t}{1+t^3},\frac{3t^2}{1+t^3}\big)$, retrouver la pente $-1$ en $t=1$ et les deux branches en $0$ (correspondant à $t\to0$ et $t\to\pm\infty$).
