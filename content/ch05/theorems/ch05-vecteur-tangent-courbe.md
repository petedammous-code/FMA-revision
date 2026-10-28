---
id: ch05-vecteur-tangent-courbe
type: corollary
chapter: 5
title: "Interprétation géométrique : $df_a$ transporte les vecteurs tangents aux courbes"
ref: Remarque V.3.13
page: 100
importance: 2
depends: [ch05-composition-differentielles, ch05-derivee-variable-reelle]
tags: [vecteur-tangent, courbe, geometrie, regle-de-la-chaine, espace-tangent]
---
## Intuition

> 💡 Imaginez un point qui se déplace dans $E$ le long d'une courbe $\alpha(t)$ et passe en $a$ à l'instant $t=0$ avec la vitesse $h=\alpha'(0)$. L'application $f$ transforme cette courbe en une courbe $\beta=f\circ\alpha$ de $F$, qui passe en $f(a)$. Quelle est la vitesse de l'image ? Réponse : $df_a(h)$. La différentielle est exactement l'application qui **transforme les vitesses** (vecteurs tangents) au point $a$.

Conséquence frappante : la vitesse de l'image ne dépend **que de la vitesse $h$** de la courbe en $a$, pas de la forme de la courbe. Toutes les courbes passant en $a$ avec la même vitesse ont des images de même vitesse. C'est le point de départ de la définition de l'espace tangent à une sous-variété (chapitre IX).

Vocabulaire : une **courbe paramétrée** de classe $C^1$ est une application $\alpha:]-\eps;\eps[\to E$ différentiable, de dérivée continue ; pour une fonction d'une variable réelle, $\alpha'(t):=d\alpha_t(1)\in E$ (identification $\mathcal L(\R;E)\simeq E$, [[ch05-derivee-variable-reelle]]).

## Énoncé

**Corollaire (poly, Remarque V.3.13, p. 100).** Soient $E$, $F$ des espaces vectoriels normés, $U$ un ouvert de $E$, $f:U\to F$ une application différentiable en un point $a\in U$. Soit $\eps>0$ et soit $\alpha:]-\eps;\eps[\to E$ une application de classe $C^1$ (une courbe paramétrée par $t\in]-\eps;\eps[$ dans l'espace $E$). Supposons que $\alpha(0)=a$ et posons $h=\alpha'(0)=d\alpha_0(1)$ (le vecteur tangent à la courbe en $t=0$). Considérons $\beta=f\circ\alpha:]-\eps;\eps[\to F$. C'est une courbe dans $F$, différentiable en $0$, et
$$
\beta'(0)=d\beta_0(1)=df_a(d\alpha_0(1))=df_a(h).
$$
La différentielle $df_a$ envoie donc le vecteur tangent $h$ à la courbe $\alpha$ en $t=0$ sur le vecteur tangent en $t=0$ à la courbe image $\beta=f\circ\alpha$.

*Précision.* Le poly sous-entend que $\alpha$ prend ses valeurs dans $U$ (pour que $\beta$ soit définie) ; c'est toujours vrai quitte à réduire $\eps$, puisque $\alpha$ est continue et $U$ est un voisinage ouvert de $a=\alpha(0)$.

## Hypothèses

### H1 — $\alpha$ de classe $C^1$, avec $\alpha(0)=a$

**Rôle.** La preuve n'utilise que la **différentiabilité de $\alpha$ en $0$** (pour appliquer la règle de la chaîne) et $\alpha(0)=a$ (pour que $df$ soit prise au bon point). Le caractère $C^1$ est une hypothèse de confort, naturelle en géométrie.

**Si on la retire.** Si $\alpha$ n'est pas dérivable en $0$, il n'y a plus de vecteur tangent : avec $\alpha(t)=(t,|t|)$ dans $E=\R^2$ et $f=\id$, $\beta=\alpha$ n'est pas dérivable en $0$ (dérivées à droite $(1,1)$ et à gauche $(1,-1)$). En revanche, si $\alpha$ est seulement dérivable en $0$ (pas $C^1$), la conclusion reste vraie avec la même preuve.

### H2 — $f$ différentiable en $a$

**Rôle.** C'est l'hypothèse de la règle de la chaîne ([[ch05-composition-differentielles]]).

**Si on la retire.** Même si $f$ a des dérivées dans toutes les directions en $a$, la conclusion peut tomber. Sur $E=\R^2$, $F=\R$, soit $f(x,y)=1$ si $y=x^2$ et $x\neq0$, et $f(x,y)=0$ sinon ; $a=(0,0)$. Chaque droite issue de $0$ ne coupe la parabole qu'en au plus un point autre que $0$, donc $f$ est nulle près de $0$ sur chaque droite : toutes les dérivées directionnelles en $0$ sont nulles. Mais pour $\alpha(t)=(t,t^2)$, de vecteur tangent $h=(1,0)$, $\beta(t)=f(\alpha(t))$ vaut $1$ pour $t\neq0$ et $0$ en $t=0$ : $\beta$ n'est pas continue en $0$, a fortiori pas dérivable ; alors que la droite $t\mapsto(t,0)$, de même vecteur tangent, a une image constante, de dérivée $0$.

## Idée de la preuve

Règle de la chaîne appliquée à $\beta=f\circ\alpha$ en $0$ : $d\beta_0=df_{\alpha(0)}\circ d\alpha_0=df_a\circ d\alpha_0$, puis évaluation en $1$.

## Preuve

Quitte à réduire $\eps$, $\alpha(]-\eps;\eps[)\subset U$, donc $\beta=f\circ\alpha$ est définie sur $]-\eps;\eps[$. L'application $\alpha$ est différentiable en $0$ (elle est $C^1$), et $f$ est différentiable en $\alpha(0)=a$, sur l'ouvert $U$ contenant $\alpha(0)$. Par la règle de la chaîne ([[ch05-composition-differentielles]]), $\beta$ est différentiable en $0$ et
$$
d\beta_0=df_{\alpha(0)}\circ d\alpha_0=df_a\circ d\alpha_0\ \in\mathcal L(\R;F).
$$
Pour une fonction d'une variable réelle, on note $\beta'(0)=d\beta_0(1)$ et $\alpha'(0)=d\alpha_0(1)=h$ ([[ch05-derivee-variable-reelle]]). En évaluant en $1$ :
$$
\beta'(0)=d\beta_0(1)=df_a\big(d\alpha_0(1)\big)=df_a(h).\qquad\square
$$

## Preuve à trous

Quitte à réduire $\eps$, $\beta=f\circ\alpha$ est définie sur $]-\eps;\eps[$ car <trou indice="α continue en 0, U ouvert">$\alpha$ est continue et $U$ est un voisinage de $\alpha(0)=a$</trou>. Comme $\alpha$ est différentiable en $0$ et $f$ en $\alpha(0)=a$, la règle de la chaîne donne <trou>$d\beta_0=df_a\circ d\alpha_0$</trou>. Enfin, avec l'identification $\mathcal L(\R;F)\simeq F$, on <trou indice="comment passe-t-on d'une différentielle en dimension 1 à un vecteur ?">évalue en $1$ : $\beta'(0)=d\beta_0(1)=df_a(d\alpha_0(1))=df_a(\alpha'(0))=df_a(h)$</trou>. $\square$

## Exemples

* **Deux courbes, même vitesse, même image de vitesse.** $f:\R^2\to\R^2$, $f(x,y)=(x^2-y^2,\,2xy)$ (c'est $z\mapsto z^2$), $a=(1,1)$. On a $df_{(x,y)}(h_1,h_2)=(2xh_1-2yh_2,\ 2yh_1+2xh_2)$, donc pour $h=(1,2)$ : $df_a(h)=(2-4,\ 2+4)=(-2,6)$. Avec la droite $\alpha(t)=(1+t,1+2t)$ : $\beta(t)=\big((1+t)^2-(1+2t)^2,\ 2(1+t)(1+2t)\big)=(-2t-3t^2,\ 2+6t+4t^2)$, donc $\beta'(0)=(-2,6)$. Avec la courbe $\tilde\alpha(t)=(1+t+t^2,\ 1+2t-t^3)$, de même vitesse $(1,2)$ en $0$, on trouve aussi $\tilde\beta'(0)=(-2,6)$ (les termes $t^2$, $t^3$ ne contribuent qu'à l'ordre $\ge2$). En complexe : $2z\cdot h=2(1+i)(1+2i)=-2+6i$.
* **Droites : dérivée directionnelle.** Pour $\alpha(t)=a+th$, on retrouve $df_a(h)=\frac{d}{dt}f(a+th)\big|_{t=0}$ ([[ch05-derivee-directionnelle-unicite]]).
* **Tangentes aux lignes de niveau.** $f(x,y)=x^2+y^2$, $\alpha(t)=(\cos t,\sin t)$, $a=(1,0)$, $h=(0,1)$. Comme $f\circ\alpha\equiv1$, $\beta'(0)=0$, donc $df_a(h)=2\cdot1\cdot0+2\cdot0\cdot1=0$ : le vecteur tangent au cercle est dans $\ker df_a$. En général, toute courbe tracée dans une ligne de niveau $\{f=c\}$ a son vecteur tangent dans $\ker df_a$ (et orthogonal au gradient : [[ch05-gradient-hilbert]]).

## Pièges

* > ⚠️ C'est $df_a$ (au point **de départ** $a=\alpha(0)$) qui agit sur $h$ ; et $h$ est un vecteur de $E$, $df_a(h)$ un vecteur de $F$.
* $\beta'(0)$ ne dépend que de $h=\alpha'(0)$ : deux courbes de même vitesse en $a$ ont des images de même vitesse — mais cela **exige** que $f$ soit différentiable en $a$ (contre-exemple de la parabole).
* Si $h=0$, $\beta'(0)=0$ : une courbe qui « s'arrête » en $a$ a une image qui s'arrête aussi, quel que soit $f$ différentiable.
* Ne pas confondre $\beta'(0)\in F$ (un vecteur) et $d\beta_0\in\mathcal L(\R;F)$ (une application linéaire) : on passe de l'un à l'autre en évaluant en $1$.
