---
id: ch05-differentielles-partielles
type: proposition
chapter: 5
title: Différentielles (dérivées) partielles $\frac{\partial f}{\partial x_i}(a)$ et formule $df_a=\sum_i\frac{\partial f}{\partial x_i}(a)(h_i)$
ref: Proposition V.3.17
page: 102
importance: 3
depends: [ch05-composition-differentielles, ch05-differentielle-lineaire, ch05-projections-injections-canoniques, ch05-linearite-differentielle]
tags: [derivees-partielles, differentielle, produit, applications-partielles, jacobienne]
---
## Intuition

> 💡 Quand la variable est un $m$-uplet $x=(x_1,\dots,x_m)$, on peut « geler » toutes les variables sauf une, $x_i$, et regarder comment $f$ varie quand seule $x_i$ bouge : c'est l'**application partielle** $f_{[i]}$, et sa différentielle est la **dérivée partielle** $\frac{\partial f}{\partial x_i}(a)$. Si $f$ est différentiable, la variation totale au premier ordre est la **somme** des variations dues à chaque variable : $df_a(h_1,\dots,h_m)=\sum_i\frac{\partial f}{\partial x_i}(a)(h_i)$.

Image : sur une surface $z=f(x,y)$, couper par le plan $y=a_2$ donne une courbe dont la pente en $a_1$ est $\frac{\partial f}{\partial x}(a)$ ; idem avec $x=a_1$. Si $f$ est différentiable, le plan tangent est engendré par ces deux tangentes. **Attention** : connaître les pentes dans deux directions ne garantit pas l'existence d'un plan tangent (la réciproque est fausse, voir H2).

Ici chaque $E_i$ est un espace vectoriel normé quelconque (pas forcément $\R$), donc $\frac{\partial f}{\partial x_i}(a)$ est une application linéaire continue $E_i\to F$, élément de $\mathcal L(E_i;F)$ ; quand $E_i=\R$ on l'identifie à un vecteur de $F$ ([[ch05-derivee-variable-reelle]]). Les projections $p_i:E\to E_i$ et injections $\iota_i:E_i\to E$ canoniques sont celles de [[ch05-projections-injections-canoniques]], avec $\sum_{i=1}^m\iota_i\circ p_i=\id_E$.

## Énoncé

**Proposition (poly, Proposition V.3.17, p. 102).** Soit $E=E_1\times\cdots\times E_m$ un produit d'espaces vectoriels normés (muni de la norme $\|(x_1,\dots,x_m)\|=\sum_i\|x_i\|_{E_i}$), $U$ un ouvert de $E$ et $f:U\to F$ une application à valeurs dans un espace vectoriel normé $F$. Fixons un point $a=(a_1,\dots,a_m)$ de $U$, et pour tout $i=1,\dots,m$, considérons les applications partielles
$$
f_{[i]}:x_i\mapsto f(a_1,\dots,a_{i-1},x_i,a_{i+1},\dots,a_m)
$$
définies respectivement sur des voisinages ouverts de $a_i$ dans $E_i$. Si $f$ est différentiable au point $a\in U$, pour tout $i=1,\dots,m$, l'application partielle $f_{[i]}$ est différentiable en $a_i$. On note $\frac{\partial f}{\partial x_i}(a)$ la différentielle de $f_{[i]}$ en $a_i$. C'est un élément de $\mathcal L(E_i;F)$ que l'on appelle la **dérivée partielle** de $f$ par rapport à la variable $x_i$. En outre, $\frac{\partial f}{\partial x_i}(a)=df_a\circ\iota_i$, et
$$
df_a(h_1,\dots,h_m)=\sum_{i=1}^m\frac{\partial f}{\partial x_i}(a)(h_i),\qquad(h_1\in E_1,\dots,h_m\in E_m).\qquad\text{(V.3.3)}
$$

## Hypothèses

### H1 — $E$ est un produit **fini** d'e.v.n.

**Rôle.** La décomposition $\id_E=\sum_{i=1}^m\iota_i\circ p_i$ est une somme finie, ce qui donne la formule (V.3.3) avec une somme finie. La norme somme est un choix de confort : toute norme équivalente (par exemple $\max_i\|x_i\|$) donne les mêmes différentielles ([[ch05-differentielle-normes-equivalentes]]).

**Si on la retire.** Hypothèse de cadre : sans structure de produit, les « variables » $x_i$ et les applications partielles ne sont pas définies. (Pour une décomposition d'un espace en somme directe topologique $E=E_1\oplus E_2$, le même raisonnement s'applique en identifiant $E$ au produit $E_1\times E_2$.)

### H2 — $f$ différentiable en $a$

**Rôle.** C'est elle qui permet d'appliquer la règle de la chaîne à $f_{[i]}=f\circ\lambda_i$, et surtout qui donne la formule (V.3.3) : la différentielle **totale** existe et on la décompose.

**Si on la retire.** La **réciproque est fausse** (poly, Remarque V.3.18, p. 102 ; [[ch05-partielles-sans-differentiabilite]]) :

* $f(x,y)=\dfrac{xy}{x^2+y^2}$ si $(x,y)\neq(0,0)$, $f(0,0)=0$. On a $f(x,0)=0$ et $f(0,y)=0$, donc $\frac{\partial f}{\partial x}(0,0)=\frac{\partial f}{\partial y}(0,0)=0$. Mais $f(t,t)=\frac12$ pour $t\neq0$ : $f$ n'est pas continue en $0$, donc pas différentiable ([[ch05-differentiable-implique-continue]]).
* Même avec $f$ continue : $f(x,y)=\dfrac{x^2y}{x^2+y^2}$, $f(0,0)=0$. On a $|f(x,y)|\le|y|$ (car $x^2\le x^2+y^2$), donc $f$ est continue en $0$, et $f(x,0)=f(0,y)=0$ donne des dérivées partielles nulles. Si $f$ était différentiable en $0$, (V.3.3) imposerait $df_0=0$, donc $f(t,t)/t\to0$ ; or $f(t,t)/t=\frac{t^3}{2t^2}\cdot\frac1t=\frac12$. Donc $f$ n'est pas différentiable en $0$.

La bonne réciproque demande la **continuité** des dérivées partielles au voisinage de $a$ ([[ch05-c1-ssi-partielles-continues]]).

## Idée de la preuve

$f_{[i]}=f\circ\lambda_i$ avec $\lambda_i(x_i)=a+\iota_i(x_i-a_i)$ affine continue, de différentielle $\iota_i$ : la règle de la chaîne donne $\frac{\partial f}{\partial x_i}(a)=df_a\circ\iota_i$. Puis $df_a=df_a\circ\sum_i\iota_i\circ p_i=\sum_i\frac{\partial f}{\partial x_i}(a)\circ p_i$.

## Preuve

Notons $\iota_i:E_i\to E$ l'injection canonique et $p_i:E\to E_i$ la projection canonique (linéaires continues), et posons
$$
\lambda_i:E_i\to E,\qquad\lambda_i(x_i)=a+\iota_i(x_i-a_i)=(a_1,\dots,a_{i-1},x_i,a_{i+1},\dots,a_m).
$$
Alors $f_{[i]}=f\circ\lambda_i$, définie sur $\lambda_i^{-1}(U)$, qui est un ouvert de $E_i$ (car $\lambda_i$ est continue) contenant $a_i$ (car $\lambda_i(a_i)=a\in U$) : c'est le « voisinage ouvert de $a_i$ » de l'énoncé.

*Différentielle de $\lambda_i$.* On a $\lambda_i(x_i)=\big(a-\iota_i(a_i)\big)+\iota_i(x_i)$ : constante plus application linéaire continue. Une constante a une différentielle nulle (le reste est identiquement nul) et $\iota_i$ est sa propre différentielle ([[ch05-differentielle-lineaire]]) ; par linéarité ([[ch05-linearite-differentielle]]), $\lambda_i$ est différentiable partout et $d(\lambda_i)_{x_i}=\iota_i$.

*Différentiabilité de $f_{[i]}$.* Si $f$ est différentiable en $a=\lambda_i(a_i)$, la règle de la chaîne ([[ch05-composition-differentielles]]) montre que $f_{[i]}=f\circ\lambda_i$ est différentiable en $a_i$ et
$$
\frac{\partial f}{\partial x_i}(a)=d(f_{[i]})_{a_i}=df_{\lambda_i(a_i)}\circ d(\lambda_i)_{a_i}=df_a\circ\iota_i\ \in\mathcal L(E_i;F).
$$

*Formule (V.3.3).* Comme $\sum_{i=1}^m\iota_i\circ p_i=\id_E$ (poly, (V.3.2), p. 101) et que $df_a$ est linéaire,
$$
df_a=df_a\circ\sum_{i=1}^m\iota_i\circ p_i=\sum_{i=1}^m df_a\circ\iota_i\circ p_i=\sum_{i=1}^m\frac{\partial f}{\partial x_i}(a)\circ p_i .
$$
En évaluant en $(h_1,\dots,h_m)$, et puisque $p_i(h_1,\dots,h_m)=h_i$ : $df_a(h_1,\dots,h_m)=\sum_{i=1}^m\frac{\partial f}{\partial x_i}(a)(h_i)$. $\square$

## Preuve à trous

On écrit l'application partielle comme une composée : $f_{[i]}=f\circ\lambda_i$ avec <trou indice="une application affine de E_i dans E qui place x_i à la i-ème place">$\lambda_i(x_i)=a+\iota_i(x_i-a_i)$</trou>. Cette application est affine continue, de différentielle <trou>$\iota_i$ en tout point</trou>. Par la règle de la chaîne, si $f$ est différentiable en $a=\lambda_i(a_i)$,
$$
\frac{\partial f}{\partial x_i}(a)=d(f_{[i]})_{a_i}=\ ?
$$
la réponse étant <trou indice="d(f∘λ_i) = df_{λ_i(a_i)} ∘ dλ_i">$df_a\circ\iota_i$</trou>. Enfin, en utilisant <trou indice="la relation (V.3.2)">$\sum_{i=1}^m\iota_i\circ p_i=\id_E$</trou> et la linéarité de $df_a$ : $df_a=\sum_i df_a\circ\iota_i\circ p_i=\sum_i\frac{\partial f}{\partial x_i}(a)\circ p_i$, ce qui, évalué en $(h_1,\dots,h_m)$, donne (V.3.3). $\square$

## Exemples

* **Variables vectorielles : $f(t,x)=tx$.** $E=\R\times E_2$ ($E_2$ un e.v.n.), $F=E_2$, $f(t,x)=tx$, bilinéaire continue ($\|tx\|=|t|\,\|x\|$), donc différentiable avec $df_{(t,x)}(s,h)=sx+th$ ([[ch05-differentielle-bilineaire]]). Les dérivées partielles : $\frac{\partial f}{\partial t}(t,x)\in\mathcal L(\R;E_2)$ est $s\mapsto sx$ (identifiée au vecteur $x$), et $\frac{\partial f}{\partial x}(t,x)=t\,\id_{E_2}\in\mathcal L(E_2;E_2)$. Leur somme redonne bien $sx+th$.
* **Matrice et vecteur : $f(A,x)=\langle Ax,x\rangle$** sur $\Mat_n(\R)\times\R^n$. $f$ est différentiable par Leibniz ([[ch05-formule-leibniz]]) : $f=b\circ(\varphi_1,\varphi_2)$ avec $b=\langle\cdot,\cdot\rangle$, $\varphi_1(A,x)=Ax$ (bilinéaire), $\varphi_2(A,x)=x$. À $x$ fixé, $A\mapsto\langle Ax,x\rangle$ est linéaire, donc $\frac{\partial f}{\partial A}(A,x)(H)=\langle Hx,x\rangle$. À $A$ fixé, $x\mapsto\langle Ax,x\rangle$ a pour différentielle $\frac{\partial f}{\partial x}(A,x)(k)=\langle Ak,x\rangle+\langle Ax,k\rangle=\langle(A+A^{T})x,k\rangle$. Donc $df_{(A,x)}(H,k)=\langle Hx,x\rangle+\langle(A+A^{T})x,k\rangle$.
* **Cas $\R^m\to\R$.** Pour $f$ différentiable en $a\in\R^m$, $E_i=\R$ et $\frac{\partial f}{\partial x_i}(a)$ s'identifie au nombre $\lim_{t\to0}\frac{f(a+te_i)-f(a)}{t}$ ; (V.3.3) devient $df_a(h)=\sum_i\frac{\partial f}{\partial x_i}(a)h_i$. Exemple : $f(x,y)=x^2y$ (polynôme, différentiable par Leibniz), $df_{(x,y)}(h,k)=2xy\,h+x^2\,k$. Avec plusieurs composantes, cela donne la matrice jacobienne ([[ch05-matrice-jacobienne]]).

## Pièges

* > ⚠️ **La réciproque est fausse** : dérivées partielles existantes en $a$ $\not\Rightarrow$ $f$ différentiable en $a$, ni même continue ($xy/(x^2+y^2)$). Pour conclure à la différentiabilité à partir des dérivées partielles, il faut leur **continuité** ([[ch05-c1-ssi-partielles-continues]]).
* Contraste avec les produits **à l'arrivée** : là, il y a équivalence ([[ch05-differentiabilite-composantes]]).
* $\frac{\partial f}{\partial x_i}(a)$ est une **application linéaire** $E_i\to F$, pas un nombre en général ; ce n'est un « nombre » (ou un vecteur de $F$) que si $E_i=\R$.
* $\frac{\partial f}{\partial x_i}(a)=df_a\circ\iota_i$ (on **injecte** d'abord $h_i$ dans $E$), à ne pas confondre avec $p_j\circ df_a$ (composante $j$ à l'arrivée).
* Pour calculer une dérivée partielle, on fixe les **autres** variables à leur valeur **en $a$** : ce sont $a_1,\dots,a_{i-1},a_{i+1},\dots,a_m$ qui apparaissent, pas des variables libres.
