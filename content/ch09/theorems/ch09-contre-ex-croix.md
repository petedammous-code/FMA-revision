---
id: ch09-contre-ex-croix
type: proposition
chapter: 9
title: Contre-exemple : la croix $(\mathbb R\times\{0\})\cup(\{0\}\times\mathbb R)$
ref: Exemple IX.2.12
page: 150
importance: 2
depends: [ch09-sous-variete-def]
tags: [sous-variete, contre-exemple, croix, connexite, valeur-critique]
---
## Intuition

> 💡 La croix formée des deux axes de coordonnées est une réunion de deux droites, et chacune des deux droites est une sous-variété. Mais **à l'origine** les deux droites se croisent : un petit voisinage de $(0,0)$ dans la croix ressemble à un « $+$ » à quatre branches, et pas à un intervalle (deux branches).

On le prouve, comme pour [[ch09-contre-ex-demi-droite]], en comptant les **composantes connexes** (morceaux d'un seul tenant) après avoir retiré un point : un « $+$ » privé de son centre a $4$ morceaux, une boule de $\R^m$ privée d'un point en a au plus $2$. Un **homéomorphisme** (bijection continue d'inverse continu), tel qu'un paramétrage local ([[ch09-sous-variete-def]]), conserve ce nombre.

C'est aussi l'ensemble d'équation $xy=0$ : l'exemple type d'un ensemble de niveau en une **valeur critique** ([[ch09-point-critique-valeur-reguliere-def]]).

## Énoncé

**Proposition (poly, Exemple IX.2.12, p. 150).** Soit $S=(\R\times\{0\})\cup(\{0\}\times\R)=\{(x,y)\in\R^2,\ xy=0\}$. Alors $S$ n'est pas une sous-variété de $\R^2$ (d'aucune dimension, d'aucune classe). En effet, tout voisinage connexe de $(0,0)$ dans $S$ est encore homéomorphe à $S$ ; or $S\setminus\{(0,0)\}$ possède $4$ composantes connexes, ce qui montre que $S$ ne peut être homéomorphe à un ouvert de $\R^m$ : un tel ouvert connexe privé d'un point a au plus deux composantes connexes.

## Hypothèses

### H1 — l'origine appartient à $S$

**Rôle.** C'est le seul point où la définition échoue : en tout autre point, $S$ coïncide localement avec une droite.

**Si on la retire.** $S\setminus\{(0,0)\}$ est la réunion des quatre demi-axes ouverts ; c'est un ouvert de $S$... et surtout c'est une sous-variété de dimension $1$, $C^\infty$, de $\R^2$ : en un point $(a,0)$, $a\neq0$, le paramétrage $x(t)=(t,0)$ sur $U=\,]a-|a|/2;a+|a|/2[$ avec $V=\{(u,v) : |u-a|<|a|/2\}$ convient (on a bien $V\cap S=U\times\{0\}$ car $u\neq0$ sur $V$) ; idem sur l'axe vertical.

### H2 — les deux droites se coupent

**Rôle.** Le point d'intersection est le point singulier.

**Si on la retire.** Deux droites **parallèles** distinctes, par exemple $(\R\times\{0\})\cup(\R\times\{1\})$, forment une sous-variété de dimension $1$ (paramétrage $t\mapsto(t,0)$ ou $t\mapsto(t,1)$ avec $V$ une bande horizontale de hauteur $1/2$) : une sous-variété n'a pas à être connexe ([[ch09-remarque-connexite]]).

## Idée de la preuve

On suppose un paramétrage local $x$ en $(0,0)$ et on prend une petite boule $B$ autour de $q=x^{-1}(0,0)$. Alors $x(B)\setminus\{(0,0)\}$, qui rencontre les quatre demi-axes ouverts (disjoints et ouverts dans $S\setminus\{0\}$), a au moins $4$ composantes connexes, alors que $B\setminus\{q\}$ en a au plus $2$.

## Preuve

Supposons par l'absurde que $S$ soit une sous-variété de dimension $m$ de $\R^2$. Par la définition ([[ch09-sous-variete-def]]) appliquée en $p=(0,0)$, il existe un ouvert $U$ de $\R^m$, un ouvert $V\ni(0,0)$ de $\R^2$ et un homéomorphisme $x : U\to V\cap S$. Posons $q=x^{-1}(0,0)$ et prenons une boule $B=B(q,r)\subset U$.

*Cas $m=0$.* Alors $B=\{q\}$ et $x(B)=\{(0,0)\}$ serait ouvert dans $S$ : faux, car tout disque centré en $(0,0)$ contient des points $(t,0)\in S$ avec $t\ne0$.

*Cas $m\ge1$.* L'ensemble $x(B)$ est ouvert dans $V\cap S$ ($x$ est un homéomorphisme), donc dans $S$ : il existe $\eps>0$ tel que $D((0,0),\eps)\cap S\subset x(B)$. Notons $A_1=\,]0;+\infty[\times\{0\}$, $A_2=\,]-\infty;0[\times\{0\}$, $A_3=\{0\}\times\,]0;+\infty[$, $A_4=\{0\}\times\,]-\infty;0[$ les quatre demi-axes ouverts. On a
$$
x(B)\setminus\{(0,0)\}=\bigsqcup_{i=1}^4 \big(x(B)\cap A_i\big),
$$
réunion disjointe de quatre parties **non vides** (chacune contient le point de $A_i$ à distance $\eps/2$ de l'origine) et **ouvertes** dans $S\setminus\{(0,0)\}$ (par exemple $A_1=S\cap\{(u,v) : u>0\}$). Une partie connexe de $x(B)\setminus\{(0,0)\}$ est contenue dans un seul des $A_i$ (sinon elle serait réunion de deux ouverts disjoints non vides). Donc $x(B)\setminus\{(0,0)\}$ a **au moins $4$** composantes connexes.

Mais $x$ induit un homéomorphisme de $B\setminus\{q\}$ sur $x(B)\setminus\{(0,0)\}$, et $B\setminus\{q\}$ a $2$ composantes connexes si $m=1$ (deux intervalles ouverts) et $1$ si $m\ge2$ (une boule de $\R^m$, $m\ge2$, privée d'un point est connexe par arcs). Contradiction. $\square$

*Remarque sur l'énoncé du poly.* L'affirmation « tout voisinage connexe de $(0,0)$ dans $S$ est homéomorphe à $S$ » est vraie pour les voisinages **ouverts** connexes (ils sont de la forme $\{0\}\cup$ quatre segments $]0;a_i[$ portés par les demi-axes), mais la preuve ci-dessus n'en a pas besoin : il suffit de compter les composantes de $x(B)\setminus\{(0,0)\}$.

*Variante (différentielle, pour $m=1$) :* soit $x=(x_1,x_2) : J\to V\cap S$ un paramétrage, $J$ intervalle ouvert contenant $s_0=x^{-1}(0,0)$, avec $x'(s_0)=(\alpha,\beta)\neq0$. Si $\alpha\neq0$, alors $x_1(s)\neq0$ pour $s\neq s_0$ proche de $s_0$, donc $x_2(s)=0$ (car $x_1x_2=0$ sur $S$) : un voisinage de $s_0$ est envoyé dans l'axe horizontal. Mais son image est un voisinage de $(0,0)$ dans $S$ (homéomorphisme), qui doit contenir des points $(0,t)$, $t\neq0$ : contradiction. Même raisonnement si $\beta\neq0$.

## Preuve à trous

Supposons un paramétrage $x : U\to V\cap S$ en $(0,0)$, $U\subset\R^m$, $q=x^{-1}(0,0)$, $B=B(q,r)\subset U$. Si $m=0$, <trou>$\{(0,0)\}$ serait ouvert dans $S$, ce qui est faux</trou>. Si $m\ge1$, $x(B)$ est <trou indice="propriété des homéomorphismes">ouvert dans $S$, donc contient $D((0,0),\eps)\cap S$ pour un $\eps>0$</trou>. Ainsi $x(B)\setminus\{0\}$ <trou indice="les quatre demi-axes ouverts">est la réunion disjointe de ses intersections avec les quatre demi-axes ouverts, qui sont non vides et ouvertes dans $S\setminus\{0\}$ ; il a donc au moins $4$ composantes connexes</trou>. Mais $x$ induit un homéomorphisme $B\setminus\{q\}\to x(B)\setminus\{0\}$ et <trou>$B\setminus\{q\}$ a au plus $2$ composantes connexes ($2$ si $m=1$, $1$ si $m\ge2$)</trou>. Contradiction. $\square$

## Exemples

* **Équation $xy=0$.** Pour $f(x,y)=xy$, $df_{(x,y)}(h,k)=yh+xk$ ; $df_{(0,0)}=0$ n'est pas surjective, donc $0$ est une **valeur critique** et la [[ch09-sous-variete-equation-valeur-reguliere]] ne s'applique pas. Pour $a\neq0$, $f^{-1}(\{a\})$ est une hyperbole : $df_{(x,y)}=0$ seulement en $(0,0)\notin f^{-1}(\{a\})$, donc $a$ est valeur régulière et l'hyperbole est une sous-variété de dimension $1$.
* **Réunion de deux droites sécantes quelconques** $D_1\cup D_2$ (sécantes en $p_0$) : l'application affine inversible qui envoie $D_1,D_2$ sur les deux axes est un difféomorphisme de $\R^2$ ; par [[ch09-ex-image-diffeomorphisme]], si $D_1\cup D_2$ était une sous-variété, la croix en serait une. Ce n'est donc pas une sous-variété.
* **Le cône** $\{x^2+y^2=z^2\}\subset\R^3$ : même phénomène (deux nappes qui se touchent en $0$) ; retirer le sommet laisse deux composantes, alors qu'une boule de $\R^2$ privée d'un point est connexe.

## Pièges

* > ⚠️ « réunion de deux sous-variétés » n'est **pas** en général une sous-variété : le problème vient des points d'intersection.
* Chaque droite est paramétrée par une immersion injective ; c'est le **recollement** en $(0,0)$ qui casse la condition 2 (homéomorphisme sur un **voisinage** $V\cap S$ de $p$ dans $S$) : un paramétrage d'une seule droite ne recouvre pas tout $V\cap S$.
* Un ensemble de niveau $f^{-1}(\{a\})$ avec $a$ valeur critique **peut** être une sous-variété (par exemple $f(x,y)=(x^2+y^2-1)^2$, $a=0$, donne le cercle) : la croix est un exemple où ça échoue, pas une règle.
* Ne pas confondre « $4$ composantes après retrait du point » (propriété de la croix) avec « $4$ demi-axes » : il faut prouver que les $A_i$ sont **ouverts** dans $S\setminus\{0\}$ pour conclure.
