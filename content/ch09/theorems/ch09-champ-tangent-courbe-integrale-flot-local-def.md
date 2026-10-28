---
id: ch09-champ-tangent-courbe-integrale-flot-local-def
type: definition
chapter: 9
title: Champ de vecteurs tangents dépendant du temps, courbe intégrale, flot local sur une sous-variété
ref: Définition IX.8.3
page: 173
importance: 2
depends: [ch09-vecteur-tangent-espace-tangent-def, ch07-champ-vecteurs-courbe-integrale-def, ch07-flot-local-def]
tags: [champ-tangent, courbe-integrale, flot-local, sous-variete, equation-differentielle]
---
## Intuition

> 💡 On veut faire des équations différentielles **sur** une surface, sans jamais en sortir : à chaque instant $t$ et en chaque point $x$ de $S$, on se donne une flèche $X(t,x)$ **posée sur le plan tangent** $T_xS$ ; une courbe intégrale est un chemin tracé sur $S$ qui suit ces flèches ; le flot local regroupe toutes ces courbes, issues de points voisins de $x_0$ et d'instants voisins de $\tau_0$, sur une même durée $2\epsilon$.

C'est la transposition à une sous-variété $S$ des notions du chapitre VII sur un ouvert $U$ d'un espace de Banach : champ de vecteurs et courbe intégrale ([[ch07-champ-vecteurs-courbe-integrale-def]]), flot local ([[ch07-flot-local-def]]). La seule différence : les points vivent dans $S$ et les vitesses dans les espaces tangents $T_xS$ ([[ch09-vecteur-tangent-espace-tangent-def]]), qui varient avec $x$. À comparer avec la Proposition IX.8.1 ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]), où le champ était défini sur un ouvert ambiant : ici le champ n'est défini **que sur $S$** (énoncé « intrinsèque »).

## Énoncé

**Définition (poly, Définition IX.8.3, p. 173).** On appelle **champ de vecteurs tangents dépendant du temps** sur une sous-variété $S$ de $\R^N$ une application continue
$$
X : I\times S\longrightarrow\R^N,
$$
où $I$ est un intervalle ouvert et où pour tout $t\in I$ et pour tout $x\in S$, $X(t,x)\in T_xS$.

On appelle **courbe intégrale** de classe $C^p$ du champ de vecteurs $X$ une courbe paramétrée $\alpha : J\to S$ de classe $C^p$ définie sur un intervalle ouvert $J$ de $\R$ contenu dans $I$, telle que pour tout $t\in J$, $\alpha'(t)=X(t,\alpha(t))$. Cette courbe intégrale est dite de **condition initiale** $(t_0,x)\in I\times S$ si $\alpha(t_0)=x$.

On appelle **flot local** de $X$ en $(\tau_0,x_0)\in I\times S$ la donnée d'un voisinage ouvert $U$ de $x_0$ dans $S$, d'un intervalle ouvert $J$ contenu dans $I$ et contenant $\tau_0$, d'un $\epsilon>0$ tels que pour tout $t_0\in J$, pour tout $x\in U$, il existe une unique courbe intégrale $\alpha_{t_0,x}$ de $X$ de condition initiale $(t_0,x)$ définie sur $]t_0-\epsilon,t_0+\epsilon[$. On note alors
$$
E=E(J,\epsilon)=\{(t_0,t)\in J\times\R\mid t\in\,]t_0-\epsilon,t_0+\epsilon[\}
$$
et
$$
F : E\times U\to S,\qquad(t_0,t,x)\mapsto\alpha_{t_0,x}(t).
$$
On note $(E(J,\epsilon),U,F)$ ce flot local.

(Dans « $E\times U$ », on identifie $((t_0,t),x)$ au triplet $(t_0,t,x)$ : $t_0$ est l'instant initial, $t$ l'instant courant, $x$ la position initiale.)

**Cas autonome (poly, Remarque IX.8.4, p. 173).** Si $X$ ne dépend pas du temps, il n'y a plus de contrainte « $J\subset I$ » : on peut prendre $I=\R$.

## Hypothèses

### H1 — Continuité de $X$ sur $I\times S$

**Rôle.** $I\times S$ est muni de la topologie induite par $\R\times\R^N$. La continuité est le minimum pour que $t\mapsto X(t,\alpha(t))$ soit continue, donc qu'une courbe intégrale de classe $C^1$ ait un sens ; elle ne suffit pas à l'unicité (il faudra « localement lipschitzien en la seconde variable » dans le théorème IX.8.5, [[ch09-flot-local-sous-variete]]).

### H2 — Tangence $X(t,x)\in T_xS$

**Rôle.** C'est une condition **nécessaire** à l'existence de courbes intégrales : si $\alpha$ est une courbe $C^1$ tracée sur $S$ avec $\alpha(t_0)=x$, alors $\alpha'(t_0)\in T_xS$ par définition même de l'espace tangent ; l'égalité $\alpha'(t_0)=X(t_0,x)$ force donc $X(t_0,x)\in T_xS$. Sans tangence, il n'y aurait en général aucune courbe intégrale à valeurs dans $S$.

### H3 — Les courbes intégrales sont à valeurs dans $S$ et définies sur un intervalle contenu dans $I$

**Rôle.** $\alpha : J\to S$ (et pas seulement dans $\R^N$) : c'est ce qui donne un sens à $X(t,\alpha(t))$, puisque $X$ n'est défini que sur $I\times S$. Pour le flot local, l'intervalle $]t_0-\epsilon,t_0+\epsilon[$ doit donc être contenu dans $I$ pour tout $t_0\in J$ ; la longueur $2\epsilon$ est la **même** pour toutes les conditions initiales $(t_0,x)\in J\times U$.

## Exemples

* **Rotation non autonome sur la sphère.** $S=\mathbb S^2$, $I=\R$, $X(t,x)=t\,(e_3\wedge x)$. On a $\langle e_3\wedge x,x\rangle=0$, donc $X(t,x)\in x^\perp=T_x\mathbb S^2$ : c'est un champ tangent, continu. Notons $R_\theta$ la rotation d'angle $\theta$ d'axe $e_3$ ; comme $\frac{d}{d\theta}R_\theta x=e_3\wedge R_\theta x$, la courbe $\alpha(t)=R_{(t^2-t_0^2)/2}\,x$ vérifie $\alpha'(t)=t\,e_3\wedge\alpha(t)=X(t,\alpha(t))$ et $\alpha(t_0)=x$. Elle est tracée sur $\mathbb S^2$. Pour tous $U$, $J$, $\epsilon$, on a un flot local avec $F(t_0,t,x)=R_{(t^2-t_0^2)/2}\,x$ (l'unicité vient de Cauchy-Lipschitz dans $\R^3$, le champ $t\,e_3\wedge x$ étant linéaire en $x$).

* **Un flot qui n'est que local.** $S=\,]0,1[\subset\R$ (ouvert de $\R$, donc sous-variété de dimension $1$), $X(x)=1$ (autonome, $I=\R$, $T_xS=\R$). Les courbes intégrales tracées sur $S$ sont $\alpha_{t_0,x}(t)=x+t-t_0$, tant que cette quantité reste dans $]0,1[$. En $x_0=\frac12$, $\tau_0=0$ : $U=\,]\frac14,\frac34[$, $J=\R$, $\epsilon=\frac14$ définissent un flot local, $F(t_0,t,x)=x+t-t_0$ (pour $x\in U$ et $|t-t_0|<\frac14$, on reste dans $]0,1[$). On ne peut pas prendre $U=S$ avec un $\epsilon>0$ uniforme : pour $x$ proche de $0$, la courbe sort de $S$ au temps $t_0-x$.

* **Un champ qui n'est pas tangent.** Sur $\mathbb S^2$, $X(x)=x$ n'est pas un champ tangent ($\langle x,x\rangle=1\ne0$) : aucune courbe intégrale ne peut être tracée sur la sphère (sa vitesse devrait être orthogonale au rayon).

## Pièges

* > ⚠️ $X$ est à valeurs dans $\R^N$, mais la condition $X(t,x)\in T_xS$ fait partie de la définition ; et la courbe intégrale doit être **tracée sur $S$** ($\alpha : J\to S$).
* $U$ est un **voisinage ouvert de $x_0$ dans $S$** (de la forme $V\cap S$, $V$ ouvert de $\R^N$), pas un ouvert de $\R^N$.
* $E(J,\epsilon)$ n'est pas un produit : c'est une bande « diagonale » de $\R^2$, au-dessus de chaque $t_0\in J$ les $t$ admis forment $]t_0-\epsilon,t_0+\epsilon[$.
* L'ordre des variables de $F$ : $F(t_0,t,x)$ = position à l'instant $t$ de la courbe qui passait par $x$ à l'instant $t_0$.
* L'unicité fait partie de la définition du flot local ; c'est le théorème IX.8.5 ([[ch09-flot-local-sous-variete]]) qui en garantit l'existence sous une hypothèse de Lipschitz.
