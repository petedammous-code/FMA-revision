---
id: ex-ch09-courbes-niveau-cubique
type: exercise
chapters: [9]
title: Les lignes de niveau d'une cubique plane
source: Inventé
difficulty: 1
time: 15
tools: [ch09-point-critique-valeur-reguliere-def, ch09-sous-variete-equation-valeur-reguliere, ch09-espace-tangent-graphe-equation, ch09-ex-dimension-zero]
---
## Énoncé

On considère la fonction $F:\R^2\to\R$, $F(x,y)=y^2-x^3+3x$, et pour $c\in\R$ la ligne de niveau
$$
S_c=\{(x,y)\in\R^2 \;;\; F(x,y)=c\}.
$$
1. Déterminer les points critiques et les valeurs critiques de $F$.
2. Montrer que pour tout $c\in\R\setminus\{-2,2\}$, $S_c$ est une sous-variété de dimension $1$ de $\R^2$ (une courbe).
3. On prend $c=0$. Vérifier que $p_1=(0,0)$ et $p_2=(2,\sqrt2)$ sont dans $S_0$, puis déterminer les espaces tangents $T_{p_1}S_0$, $T_{p_2}S_0$ et une équation de la droite tangente affine en $p_2$.
4. L'ensemble $S_{-2}$ est-il une sous-variété de $\R^2$ ?

## Indices

### Indice 1
Une ligne de niveau d'une fonction de $\R^2$ dans $\R$ est une courbe dès que la différentielle de la fonction ne s'annule en aucun de ses points : il faut donc d'abord savoir où $dF$ s'annule.

### Indice 2
Si $c$ est une valeur régulière de $F$ (aucun point de $S_c$ n'est critique), alors $S_c=F^{-1}(\{c\})$ est une sous-variété de dimension $2-1=1$ et $T_pS_c=\ker dF_p$ ; ici $dF_{(x,y)}(h,k)=(3-3x^2)h+2yk$.

### Indice 3
Pour la question 4, factoriser $x^3-3x-2$ : on trouve $(x+1)^2(x-2)$. Regarder ce qui se passe près du point $(-1,0)$ (le signe de $x-2$ y est imposé), puis près d'un autre point de $S_{-2}$, par exemple $(2,0)$.

## Corrigé

**1.** $F$ est polynomiale, donc de classe $C^\infty$ sur l'ouvert $\R^2$, et
$$
dF_{(x,y)}(h,k)=\frac{\partial F}{\partial x}(x,y)\,h+\frac{\partial F}{\partial y}(x,y)\,k=(3-3x^2)\,h+2y\,k .
$$
L'application linéaire $dF_{(x,y)}:\R^2\to\R$ est surjective si et seulement si elle n'est pas nulle. Un point $(x,y)$ est donc critique ([[ch09-point-critique-valeur-reguliere-def]]) si et seulement si $3-3x^2=0$ et $2y=0$, c'est-à-dire $(x,y)\in\{(1,0),(-1,0)\}$. Les valeurs critiques sont
$$
F(1,0)=0-1+3=2,\qquad F(-1,0)=0+1-3=-2 .
$$

**2.** Soit $c\notin\{-2,2\}$. Alors $c$ n'est pas une valeur critique : c'est une valeur régulière de $F$ (si $p\in S_c$, $p$ n'est pas critique puisque $F(p)=c\ne\pm2$). On applique la Proposition IX.4.1, point 2 ([[ch09-sous-variete-equation-valeur-reguliere]]) avec $N=2$, $m=1$ (on a bien $N>m$), l'ouvert $V=\R^2$ et $f=F:V\to\R^{N-m}=\R$ de classe $C^\infty$ : $S_c=F^{-1}(\{c\})$ est une sous-variété de dimension $1$ et de classe $C^\infty$ de $\R^2$. Elle n'est pas vide : pour $x$ assez grand, $x^3-3x+c\ge0$ et $y=\sqrt{x^3-3x+c}$ convient.

**3.** $F(0,0)=0$ et $F(2,\sqrt2)=2-8+6=0$, donc $p_1,p_2\in S_0$. Comme $0$ est valeur régulière de $F$ (question 2), la Proposition IX.7.13 ([[ch09-espace-tangent-graphe-equation]]), appliquée à $F$ (ou à $F-0$), donne $T_pS_0=\ker dF_p$.

* En $p_1=(0,0)$ : $dF_{p_1}(h,k)=3h$, donc $T_{p_1}S_0=\{(h,k)\;;\;h=0\}=\R\,(0,1)$ : la tangente est verticale (c'est l'axe des $y$).
* En $p_2=(2,\sqrt2)$ : $dF_{p_2}(h,k)=(3-12)h+2\sqrt2\,k=-9h+2\sqrt2\,k$, donc
$$
T_{p_2}S_0=\{(h,k)\;;\;9h=2\sqrt2\,k\}=\R\,(2\sqrt2,\,9).
$$
La droite tangente affine $\mathbf T_{p_2}S_0=p_2+T_{p_2}S_0$ a pour équation $9(x-2)-2\sqrt2\,(y-\sqrt2)=0$, soit $9x-2\sqrt2\,y=14$ (vérification : $18-4=14$ en $p_2$).

**4.** On a $F(x,y)=-2\iff y^2=x^3-3x-2=(x+1)^2(x-2)$ (développer : $(x^2+2x+1)(x-2)=x^3-3x-2$).

* *Le point $(-1,0)$ est isolé dans $S_{-2}$.* Si $(x,y)\in S_{-2}$ avec $x<2$, alors $y^2=(x+1)^2(x-2)\le0$, donc $y=0$ et $(x+1)^2(x-2)=0$, d'où $x=-1$. Ainsi $S_{-2}\cap\big(]-\infty,2[\times\R\big)=\{(-1,0)\}$ : le voisinage ouvert $V=]-\infty,2[\times\R$ de $(-1,0)$ vérifie $V\cap S_{-2}=\{(-1,0)\}$, et
$$
S_{-2}=\{(-1,0)\}\ \cup\ \{(x,y)\;;\;x\ge2,\ y^2=(x+1)^2(x-2)\}.
$$
* Supposons que $S_{-2}$ soit une sous-variété de dimension $m$. Un paramétrage local $\psi:U\to V'$ en $(-1,0)$ (avec $V'\subset V$ quitte à restreindre) est un homéomorphisme de l'ouvert non vide $U\subset\R^m$ sur $V'\cap S_{-2}=\{(-1,0)\}$ : $U$ est réduit à un point, ce qui impose $m=0$.
* Mais le point $(2,0)\in S_{-2}$ est un point régulier de $F$ : $dF_{(2,0)}(h,k)=-9h\ne0$. Par la Proposition IX.4.1, point 1 ([[ch09-sous-variete-equation-valeur-reguliere]]), il existe un voisinage ouvert $V_1$ de $(2,0)$ tel que $S_{-2}\cap V_1$ soit une sous-variété de dimension $1$ : $(2,0)$ a des voisinages dans $S_{-2}$ homéomorphes à un intervalle ouvert, donc n'est pas un point isolé de $S_{-2}$. Or une sous-variété de dimension $0$ est un ensemble discret ([[ch09-ex-dimension-zero]]) : contradiction.

Donc $S_{-2}$ **n'est pas** une sous-variété de $\R^2$ (ni de dimension $0$, ni de dimension $1$). En revanche $S_{-2}\setminus\{(-1,0)\}$ en est une, de dimension $1$ : c'est l'image réciproque de la valeur régulière $-2$ par la restriction de $F$ à l'ouvert $\R^2\setminus\{(-1,0)\}$.

## Pièges et variantes

* « $c$ est une valeur critique, donc $S_c$ n'est pas une sous-variété » est **faux** en général : la Proposition IX.4.1 donne une condition suffisante, pas nécessaire. Exemple : $\{y^2=0\}$ est la droite $y=0$, une sous-variété, bien que $0$ soit valeur critique de $(x,y)\mapsto y^2$. Ici il faut un argument spécifique (point isolé).
* Ne pas oublier que, dans la définition d'une sous-variété, la dimension $m$ est **la même en tout point** : un point isolé ajouté à une courbe suffit à tout casser.
* Variante : $c=2$. Alors $y^2=(x-1)^2(x+2)$ ; près de $(1,0)$, $S_2$ est la réunion des deux graphes $y=\pm(x-1)\sqrt{x+2}$, qui se croisent transversalement en $(1,0)$ (pentes $\pm\sqrt3$). Comme pour la croix ([[ch09-contre-ex-croix]]), un voisinage connexe de $(1,0)$ dans $S_2$ privé de ce point a $4$ composantes connexes : $S_2$ n'est pas une sous-variété.
* Variante : pour quelles valeurs de $c$ la courbe $S_c$ est-elle connexe ? (Réponse : pour $|c|>2$ ; pour $c\in\,]-2,2[$ elle a une composante compacte, un « ovale », et une composante non bornée. On le lit sur le tableau de variation de $P(x)=x^3-3x+c$, qui a un maximum local $P(-1)=c+2$ et un minimum local $P(1)=c-2$ : $S_c$ est la réunion des graphes de $\pm\sqrt P$ au-dessus de $\{P\ge0\}$, qui est un intervalle $[x_0,+\infty[$ si $|c|>2$ et la réunion de deux intervalles disjoints si $|c|<2$.)
