---
id: ch09-localement-graphe-implique-sous-variete
type: proposition
chapter: 9
title: Un ensemble localement graphe (à isomorphisme linéaire près) est une sous-variété
ref: Proposition IX.5.2
page: 157
importance: 2
depends: [ch09-graphe-sous-variete, ch09-ex-image-diffeomorphisme, ch09-sous-variete-def]
tags: [sous-variete, graphe, isomorphisme-lineaire, critere, parametrage-local]
---
## Intuition

> 💡 Pour montrer qu'une partie $S$ de $\R^N$ est une sous-variété, il suffit de voir, **près de chaque point**, $S$ comme le graphe d'une fonction lisse, quitte à **tourner ou permuter les axes** avant. Exemple type : le cercle unité est, près de chacun de ses points, un morceau de graphe $y=\pm\sqrt{1-x^2}$ ou $x=\pm\sqrt{1-y^2}$.

Le **graphe** d'une application $f:U\to\R^{N-m}$ ($U$ ouvert de $\R^m$) est $\mathrm{Graphe}(f)=\{(u,f(u)) ;\ u\in U\}\subset\R^m\times\R^{N-m}=\R^N$ ; si $f$ est $C^k$, c'est une sous-variété de dimension $m$, paramétrée globalement par $u\mapsto(u,f(u))$ ([[ch09-graphe-sous-variete]]). Un **isomorphisme linéaire** $A:\R^N\to\R^N$ (matrice inversible : rotation, permutation des coordonnées...) transporte une sous-variété sur une sous-variété ([[ch09-ex-image-diffeomorphisme]]). Enfin, « être une sous-variété » ([[ch09-sous-variete-def]]) est une propriété **locale** : on ne demande qu'un paramétrage près de chaque point. Ces trois ingrédients donnent la proposition.

## Énoncé

**Proposition (poly, Proposition IX.5.2, p. 157).** Soit $S$ une partie de $\R^N$ et supposons que pour tout point $p$ de $S$, il existe un voisinage ouvert $V$ de $p$ dans $\R^N$, un isomorphisme linéaire $A:\R^N\to\R^N$, un ouvert $U$ de $\R^m$ et une application $f:U\to\R^{N-m}$ de classe $C^k$ tels que
$$
V\cap S=V\cap\{A((u,f(u))) ;\ u\in U\}.
$$
Alors $S$ est une sous-variété de dimension $m$ de $\R^N$ (de classe $C^k$).

Ici $m\le N$ et $k\ge 1$ sont **fixés** (les mêmes pour tous les points $p$) ; $V$, $A$, $U$, $f$ dépendent de $p$. Autrement dit : $V\cap S=V\cap A(\mathrm{Graphe}(f))$.

## Hypothèses

### H1 — $A$ est un isomorphisme linéaire

**Rôle.** $A$ est un $C^\infty$-difféomorphisme de $\R^N$ (linéaire, inverse linéaire) ; c'est ce qui rend $y=A\circ g$, avec $g(u)=(u,f(u))$, à la fois immersif ($dy_u=A\circ dg_u$, composée d'une injection et d'une bijection) et homéomorphe sur son image (inverse $z\mapsto \pi_1(A^{-1}z)$, où $\pi_1(a,b)=a$).

**Si on la retire.** Avec une application linéaire **non inversible**, c'est faux : $N=2$, $m=1$, $U=\R$, $f(u)=u^2$, $A(a,b)=(b,0)$. Alors $A(\mathrm{Graphe}(f))=\{(u^2,0) ;\ u\in\R\}=[0,+\infty[\times\{0\}$, et avec $V=\R^2$ on obtient $S=[0,+\infty[\times\{0\}$, la demi-droite fermée, qui n'est pas une sous-variété ([[ch09-contre-ex-demi-droite]]). Avec un simple **homéomorphisme** au lieu de $A$, c'est faux aussi : $\Phi(a,b)=(a,b+|a|)$ (inverse $(a,b)\mapsto(a,b-|a|)$) envoie le graphe de $f=0$ sur le graphe de $|u|$, qui n'est pas une sous-variété $C^1$ (voir H2). En revanche, la preuve marche telle quelle si l'on remplace $A$ par un $C^k$-difféomorphisme de $\R^N$.

### H2 — $f$ est de classe $C^k$ ($k\ge1$)

**Rôle.** Elle fait de $g:u\mapsto(u,f(u))$ un paramétrage $C^k$ ; la classe de $S$ est celle de $f$.

**Si on la retire.** Pour $f(u)=|u|$ (continue, non dérivable en $0$), $S=\mathrm{Graphe}(f)$ (avec $A=\id$, $V=\R^2$) n'est pas une sous-variété $C^1$. Supposons en effet que $y=(y_1,y_2)$ soit un paramétrage local en $(0,0)=y(s_0)$, $C^1$ avec $y'(s_0)\neq0$. Comme $y_2=|y_1|\ge0$ et $y_2(s_0)=0$, $y_2$ est minimale en $s_0$, donc $y_2'(s_0)=0$, d'où $y_1'(s_0)\neq0$. Mais alors $\dfrac{y_2(s)-y_2(s_0)}{s-s_0}=\dfrac{|y_1(s)|}{s-s_0}$ tend vers $|y_1'(s_0)|>0$ quand $s\to s_0^+$ et vers $-|y_1'(s_0)|$ quand $s\to s_0^-$ : contradiction avec $y_2'(s_0)=0$.

### H3 — l'égalité $V\cap S=V\cap A(\mathrm{Graphe}(f))$ (et pas une simple inclusion)

**Rôle.** C'est elle qui dit que, **dans $V$**, il n'y a ni plus ni moins de points de $S$ que ceux du graphe : le paramétrage du graphe restreint à $V$ est alors un paramétrage de $S$.

**Si on la retire.** Une inclusion $V\cap S\subset V\cap A(\mathrm{Graphe}(f))$ ne suffit pas : $S=[0,+\infty[\times\{0\}$ est contenu dans le graphe de $f=0$ sur $U=\R$, mais n'est pas une sous-variété (au point $p=(0,0)$, $V\cap S$ est une demi-droite).

### H4 — la même dimension $m$ en tout point

**Rôle.** Une sous-variété a **une** dimension (Définition IX.2.1) ; $m$ est la dimension des ouverts $U$ qui paramètrent.

**Si on la retire.** $S=\{(0,0)\}\cup(\R\times\{1\})\subset\R^2$ est localement un graphe en tout point, mais avec $m=0$ près de $(0,0)$ (prendre $V=D((0,0),1/2)$, $U=\R^0$, $f$ constante égale à $(0,0)$) et $m=1$ près des points de la droite. Ce n'est pas une sous-variété au sens du poly : pas de dimension $0$ (la droite n'est pas discrète), ni de dimension $1$ (le point isolé $(0,0)$ n'est l'image d'aucun ouvert non vide de $\R$ par un homéomorphisme, un tel ouvert étant infini).

## Idée de la preuve

$y(u)=A(u,f(u))$ est un paramétrage global $C^k$ de $A(\mathrm{Graphe}(f))$ ; en le restreignant à l'ouvert $y^{-1}(V)$, l'égalité $V\cap S=V\cap A(\mathrm{Graphe}(f))$ en fait un paramétrage local de $S$ en $p$.

## Preuve

*Le poly se contente de dire que $A(\mathrm{Graphe}(f))$ est une sous-variété ([[ch09-graphe-sous-variete]] et [[ch09-ex-image-diffeomorphisme]]) et que la définition est locale ; on détaille.*

Soit $p\in S$, et $V$, $A$, $U$, $f$ comme dans l'énoncé. Posons
$$
g:U\to\R^N,\ g(u)=(u,f(u)),\qquad y=A\circ g:U\to\R^N,\ y(u)=A((u,f(u))).
$$

**$y$ est un paramétrage global de $\Sigma=A(\mathrm{Graphe}(f))$.** $g$ est $C^k$ (ses composantes le sont) et $A$ est linéaire, donc $y$ est $C^k$. Pour $u\in U$ et $h\in\R^m$, $dg_u(h)=(h,df_u(h))$, injective (la première composante redonne $h$), donc $dy_u=A\circ dg_u$ est injective ($A$ est bijective). Enfin $y$ est une bijection de $U$ sur $\Sigma$, d'inverse $z\mapsto\pi_1(A^{-1}(z))$ où $\pi_1:\R^m\times\R^{N-m}\to\R^m$ est la première projection : cet inverse est la restriction à $\Sigma$ d'une application linéaire, donc continu. Ainsi $y$ est un homéomorphisme de $U$ sur $\Sigma$.

**Localisation.** Posons $U'=y^{-1}(V)=\{u\in U : A((u,f(u)))\in V\}$ : c'est un ouvert de $\R^m$ ($y$ continue, $V$ ouvert), non vide car $p\in V\cap S=V\cap\Sigma$ s'écrit $p=y(u_0)$ avec $u_0\in U'$. Considérons $y|_{U'}:U'\to V$. Elle est $C^k$ et immersive (restriction de $y$ à un ouvert), et c'est un homéomorphisme de $U'$ sur $y(U')=V\cap\Sigma$ (restriction d'un homéomorphisme). Par hypothèse $V\cap\Sigma=V\cap S$ : donc $y|_{U'}$ est un homéomorphisme de $U'$ sur $V\cap S$.

Les trois conditions de [[ch09-sous-variete-def]] sont vérifiées : $y|_{U'}$ est un paramétrage local de classe $C^k$ de $S$ en $p$, défini sur un ouvert de $\R^m$. Comme $p\in S$ est quelconque, $S$ est une sous-variété de dimension $m$ et de classe $C^k$. $\square$

## Preuve à trous

Soit $p\in S$ et $V,A,U,f$ donnés par l'hypothèse. On pose $y(u)=A((u,f(u)))$ pour $u\in U$.

$y$ est $C^k$ ; elle est immersive car <trou indice="différentielle de u ↦ (u, f(u)), puis composer par A">$dy_u(h)=A(h,df_u(h))$, et $(h,df_u(h))=0$ force $h=0$, $A$ étant injective</trou>. C'est un homéomorphisme de $U$ sur $\Sigma=A(\mathrm{Graphe}(f))$ car <trou indice="écrire explicitement l'inverse">son inverse est $z\mapsto\pi_1(A^{-1}z)$, restriction d'une application linéaire, donc continue</trou>.

On restreint ensuite $y$ à <trou indice="quel ouvert de U correspond à V ?">$U'=y^{-1}(V)$, ouvert de $\R^m$ contenant $y^{-1}(p)$</trou> : $y|_{U'}$ est un homéomorphisme de $U'$ sur $V\cap\Sigma$, qui est égal à <trou>$V\cap S$ par hypothèse</trou>. C'est donc un paramétrage local de $S$ en $p$, et $S$ est une sous-variété de dimension $m$. $\square$

## Exemples

* **Le cercle unité $\mathbb S^1$.** Près d'un point avec $y>0$ : $V=\{y>0\}$, $A=\id$, $U=]-1,1[$, $f(u)=\sqrt{1-u^2}$ ; on a bien $V\cap\mathbb S^1=\{(u,\sqrt{1-u^2}) ;\ u\in]-1,1[\}$. De même avec $V=\{y<0\}$ et $f=-\sqrt{1-u^2}$. Près de $(1,0)$, aucun graphe au-dessus de l'axe des $x$ ne convient, mais $V=\{x>0\}$, $A(a,b)=(b,a)$ (échange des coordonnées), $f(v)=\sqrt{1-v^2}$ donnent $A((v,f(v)))=(\sqrt{1-v^2},v)$, et $V\cap\mathbb S^1$ est exactement l'ensemble de ces points pour $v\in]-1,1[$. Idem en $(-1,0)$. Donc $\mathbb S^1$ est une sous-variété $C^\infty$ de dimension $1$ de $\R^2$.
* **La sphère $\mathbb S^2$.** Six hémisphères ouverts : $\{z>0\}\cap\mathbb S^2$ est le graphe de $(u,v)\mapsto\sqrt{1-u^2-v^2}$ sur le disque $\{u^2+v^2<1\}$, et les cinq autres s'obtiennent en permutant les coordonnées ou en changeant les signes (des isomorphismes linéaires $A$). On retrouve que $\mathbb S^2$ est une surface $C^\infty$ (comparer avec [[ch09-ex-sphere]]).
* **Parabole couchée.** $S=\{(x,y)\in\R^2 : x=y^2\}$ n'est un graphe $y=f(x)$ au voisinage d'aucun point (deux points $(x,\pm\sqrt x)$ ont même abscisse, et en $(0,0)$ il n'y a même aucun point d'abscisse $x<0$), mais avec $A(a,b)=(b,a)$, $U=\R$, $f(v)=v^2$, $V=\R^2$ : $S=A(\mathrm{Graphe}(f))$. C'est une sous-variété $C^\infty$ de dimension $1$.

## Pièges

* > ⚠️ L'égalité porte sur $V\cap S$ et $V\cap A(\mathrm{Graphe}(f))$ : il faut couper **les deux** ensembles par le même ouvert $V$. Montrer seulement $S\subset$ graphe ne prouve rien (H3).
* L'isomorphisme $A$ est indispensable en général : un ensemble n'est pas forcément un graphe au-dessus d'un plan de coordonnées **fixé** (cercle en $(1,0)$). En pratique, $A$ est presque toujours une permutation des coordonnées.
* La dimension $m$ et la classe $k$ doivent être les mêmes partout (H4) ; seuls $V,A,U,f$ varient avec $p$.
* C'est la réciproque de [[ch09-sous-variete-localement-graphe]] ; les deux ensemble donnent une définition équivalente des sous-variétés ([[ch09-remarque-def-par-graphes]]).
