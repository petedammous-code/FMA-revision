---
id: ch05-c1-ssi-partielles-continues
type: proposition
chapter: 5
title: $f$ est $C^1$ si et seulement si ses dérivées partielles existent et sont continues
ref: Proposition V.5.1
page: 106
importance: 3
depends: [ch05-differentielles-partielles, ch05-accroissements-finis, ch05-linearite-differentielle, ch05-differentielle-lineaire, ch05-projections-injections-canoniques, ch05-classe-ck-def]
tags: [derivees-partielles, classe-c1, differentiabilite, critere]
---
## Intuition

> 💡 Les dérivées partielles ne regardent $f$ que **le long des axes** ; seules, elles ne voient pas ce qui se passe dans les directions obliques, et elles ne suffisent pas à la différentiabilité ([[ch05-partielles-sans-differentiabilite]]). Mais si elles existent **autour** de $a$ et varient **continûment**, on peut aller de $a$ à $x$ par un chemin « en escalier » (une coordonnée à la fois) : sur chaque marche, la variation de $f$ est contrôlée par une seule dérivée partielle, presque constante près de $a$. On recolle et on obtient l'approximation linéaire.

C'est le **critère pratique** pour montrer qu'une fonction est $C^1$ : on calcule les dérivées partielles (des dérivées de fonctions d'une seule variable) et on vérifie qu'elles sont continues.

Cadre et notations ([[ch05-differentielles-partielles]]). $E=E_1\times\cdots\times E_m$ est un produit d'evn, muni de la norme $\|(x_1,\dots,x_m)\|=\sum_i\|x_i\|_{E_i}$ (ou d'une norme équivalente). Pour $a\in U$, l'**application partielle** $f_{[i]}:x_i\mapsto f(a_1,\dots,a_{i-1},x_i,a_{i+1},\dots,a_m)$ est définie près de $a_i$ dans $E_i$ ; si elle est différentiable en $a_i$, sa différentielle est la **dérivée partielle** $\frac{\partial f}{\partial x_i}(a)\in\mathcal L(E_i;F)$. On note $\iota_i:E_i\to E$ l'injection canonique et $p_i:E\to E_i$ la projection canonique ([[ch05-projections-injections-canoniques]]).

## Énoncé

**Proposition (poly, Proposition V.5.1, p. 106).** Soient $E=E_1\times\cdots\times E_m$ un produit d'espaces vectoriels normés, $U$ un ouvert de $E$ et $f:U\to F$ une application à valeurs dans un espace vectoriel normé $F$.

1. Pour que $f$ soit de classe $C^1$ sur $U$, il faut et il suffit que $f$ admette des dérivées partielles $\frac{\partial f}{\partial x_i}$ en tout point de $U$ ($i=1,\dots,m$), et que celles-ci soient continues (comme applications $U\to\mathcal L(E_i;F)$).
2. Pour que $f$ soit différentiable au point $a$, il suffit que les dérivées partielles existent en tout point $x$ d'un voisinage de $a$ et qu'elles soient continues en $a$. On a alors $df_a(h)=\sum_{k=1}^m\frac{\partial f}{\partial x_k}(a)(h_k)$ pour $h=(h_1,\dots,h_m)\in E$.

## Hypothèses

### H1 — $E$ est un produit **fini** $E_1\times\cdots\times E_m$

**Rôle.** La preuve découpe le déplacement $x-a$ en $m$ marches et somme $m$ majorations $\eps\|x_k-a_k\|$ : on obtient $\eps\|x-a\|$ grâce à la norme somme. Avec une infinité de facteurs, il n'y aurait plus de chemin en escalier fini, et la norme du produit ne serait plus la somme des normes.

**Si on la retire.** L'énoncé n'a pas de version directe pour un produit infini : il n'y a pas de norme canonique, et même les « dérivées partielles » suivant chaque vecteur d'une base infinie ne contrôlent pas la différentiabilité. C'est une hypothèse de cadre plutôt qu'une hypothèse technique.

### H2 — les dérivées partielles existent sur un **voisinage** de $a$ (assertion 2)

**Rôle.** Sur chaque marche de l'escalier (qui ne passe pas par $a$), on applique le théorème des accroissements finis à une application partielle, qui doit donc être différentiable en tous les points de la marche, c'est-à-dire en des points $x\ne a$ proches de $a$.

**Si on la retire.** L'existence des dérivées partielles en $a$ seul ne donne même pas la continuité. Exemple : $f(x,y)=1$ si $xy\neq0$, $f(x,y)=0$ si $xy=0$. On a $f(x,0)=f(0,y)=0$, donc $\frac{\partial f}{\partial x}(0,0)=\frac{\partial f}{\partial y}(0,0)=0$, mais $f(t,t)=1\not\to f(0,0)=0$ : $f$ n'est pas continue, donc pas différentiable, en $(0,0)$. (Ici les dérivées partielles n'existent pas aux points $(x,0)$ avec $x\ne0$, puisque $y\mapsto f(x,y)$ y saute de $0$ à $1$.)

### H3 — continuité des dérivées partielles **en $a$** (assertion 2)

**Rôle.** C'est elle qui fournit le $\eps$ : $\big\|\frac{\partial f}{\partial x_k}(x)-\frac{\partial f}{\partial x_k}(a)\big\|\le\eps$ pour $x$ proche de $a$, donc une borne uniforme sur la différentielle de chaque marche.

**Si on la retire.** Les dérivées partielles peuvent exister partout sans que $f$ soit différentiable. Exemple : $f(x,y)=\frac{xy}{x^2+y^2}$ si $(x,y)\ne(0,0)$, $f(0,0)=0$. Sur $\R^2\setminus\{0\}$, $f$ est une fraction rationnelle, donc ses dérivées partielles existent ; en $0$, $f(x,0)=f(0,y)=0$ donne $\frac{\partial f}{\partial x}(0,0)=\frac{\partial f}{\partial y}(0,0)=0$. Mais $f(t,t)=\frac12\not\to0$ : $f$ n'est pas continue en $0$, donc pas différentiable ; ses dérivées partielles ne sont pas continues en $0$ (sinon l'assertion 2 donnerait la différentiabilité). On le voit d'ailleurs directement : hors de $0$, $\frac{\partial f}{\partial x}(x,y)=\frac{y(y^2-x^2)}{(x^2+y^2)^2}$, donc $\frac{\partial f}{\partial x}(0,y)=\frac1y$, non bornée près de $0$.

En revanche la condition n'est **pas nécessaire** à la différentiabilité en **un** point : $f(x,y)=(x^2+y^2)\sin\frac1{x^2+y^2}$, $f(0,0)=0$, vérifie $|f(x,y)|\le\|(x,y)\|_2^2$, donc est différentiable en $0$ avec $df_0=0$ ; mais $\frac{\partial f}{\partial x}(x,0)=2x\sin\frac1{x^2}-\frac2x\cos\frac1{x^2}$ n'est pas bornée près de $0$, donc pas continue en $0$.

### H4 — $F$ evn quelconque

**Rôle.** Aucune complétude n'est utilisée : le théorème des accroissements finis ([[ch05-accroissements-finis]]) est valable dans tout evn. C'est un point fort de l'énoncé, pas une restriction.

## Idée de la preuve

La nécessité vient de $\frac{\partial f}{\partial x_i}(x)=df_x\circ\iota_i$. Pour la suffisance, on retranche à $f$ sa partie linéaire candidate : $g(x)=f(x)-f(a)-\sum_k\frac{\partial f}{\partial x_k}(a)(x_k-a_k)$ a des dérivées partielles petites près de $a$ ; on va de $a$ à $x$ en changeant une coordonnée à la fois et on applique les accroissements finis sur chaque marche : $\|g(x)\|\le\eps\|x-a\|$.

## Preuve

**Nécessité.** Si $f$ est $C^1$, elle est différentiable en tout $x\in U$, donc ([[ch05-differentielles-partielles]]) ses dérivées partielles existent en tout point et $\frac{\partial f}{\partial x_i}(x)=df_x\circ\iota_i$. L'application $T\mapsto T\circ\iota_i$ est linéaire de $\mathcal L(E;F)$ dans $\mathcal L(E_i;F)$ et continue, puisque $\|T\circ\iota_i\|\le\|T\|\,\|\iota_i\|\le\|T\|$ (norme somme : $\|\iota_i(h_i)\|=\|h_i\|$). Donc $x\mapsto\frac{\partial f}{\partial x_i}(x)$, composée de $df$ (continue) et de cette application, est continue.

**L'assertion 2 implique la suffisance dans l'assertion 1.** Si les dérivées partielles existent sur $U$ et y sont continues, l'assertion 2 appliquée en chaque point $x\in U$ montre que $f$ est différentiable sur $U$, avec, d'après la formule (V.3.3),
$$
df_x=\sum_{k=1}^m\frac{\partial f}{\partial x_k}(x)\circ p_k .
$$
Chaque $x\mapsto\frac{\partial f}{\partial x_k}(x)\circ p_k$ est continue (composée de $\frac{\partial f}{\partial x_k}$, continue, et de $S\mapsto S\circ p_k$, linéaire de norme $\le\|p_k\|\le1$), donc $df$ est continue et $f$ est $C^1$.

**Preuve de l'assertion 2.** Soit $a=(a_1,\dots,a_m)\in U$ ; supposons que les dérivées partielles existent sur une boule $B_E(a,r)\subset U$ et sont continues en $a$. Posons
$$
g:U\to F,\qquad g(x)=f(x)-f(a)-\sum_{k=1}^m\frac{\partial f}{\partial x_k}(a)(x_k-a_k).
$$
La somme est une application affine continue en $x$ (composée de projections et d'applications linéaires continues), dont la dérivée partielle en $x_k$ est la constante $\frac{\partial f}{\partial x_k}(a)$ ([[ch05-differentielle-lineaire]], [[ch05-linearite-differentielle]]). Donc $g$ admet des dérivées partielles sur $B_E(a,r)$ et
$$
\frac{\partial g}{\partial x_k}(x)=\frac{\partial f}{\partial x_k}(x)-\frac{\partial f}{\partial x_k}(a).
$$
Soit $\eps>0$. Par continuité des dérivées partielles en $a$, il existe $\delta\in\,]0,r]$ tel que pour tout $x\in B_E(a,\delta)$ et tout $k$, $\big\|\frac{\partial g}{\partial x_k}(x)\big\|\le\eps$.

Fixons $x\in B_E(a,\delta)$ et considérons les points « en escalier »
$$
z^{(k)}=(x_1,\dots,x_k,a_{k+1},\dots,a_m)\qquad(k=0,\dots,m),
$$
de sorte que $z^{(0)}=a$, $z^{(m)}=x$ et $g(a)=0$. Alors
$$
g(x)=\sum_{k=1}^m\big(g(z^{(k)})-g(z^{(k-1)})\big).
$$
Les points $z^{(k-1)}$ et $z^{(k)}$ ne diffèrent que par la $k$-ième coordonnée ($a_k$ devient $x_k$). Considérons $\varphi_k:y\mapsto g(x_1,\dots,x_{k-1},y,a_{k+1},\dots,a_m)$, définie pour $y$ proche du segment $[a_k,x_k]$ de $E_k$. Pour $y\in[a_k,x_k]$, le point $w=(x_1,\dots,x_{k-1},y,a_{k+1},\dots,a_m)$ vérifie
$$
\|w-a\|=\sum_{i<k}\|x_i-a_i\|+\|y-a_k\|\le\sum_{i\le k}\|x_i-a_i\|\le\|x-a\|<\delta,
$$
donc $w\in B_E(a,\delta)$ ; en ce point $\varphi_k$ est différentiable (c'est l'application partielle de $g$ en $w$ par rapport à la $k$-ième variable) et $d(\varphi_k)_y=\frac{\partial g}{\partial x_k}(w)$, de norme $\le\eps$. Le théorème des accroissements finis ([[ch05-accroissements-finis]]), appliqué à $\varphi_k$ sur un voisinage ouvert du segment $[a_k,x_k]$ où elle est différentiable (par exemple $\{y\in E_k : \|y-a_k\|<\delta-\sum_{i<k}\|x_i-a_i\|\}$, qui contient ce segment), donne
$$
\|g(z^{(k)})-g(z^{(k-1)})\|_F=\|\varphi_k(x_k)-\varphi_k(a_k)\|_F\le\eps\,\|x_k-a_k\|_{E_k}.
$$
En sommant :
$$
\|g(x)\|_F\le\sum_{k=1}^m\eps\|x_k-a_k\|=\eps\|x-a\|_E .
$$
Ceci valant pour tout $\eps>0$ (avec $\delta$ adapté), $g(x)=o(x-a)$, c'est-à-dire
$$
f(x)=f(a)+\sum_{k=1}^m\frac{\partial f}{\partial x_k}(a)(x_k-a_k)+o(x-a).
$$
L'application $h\mapsto\sum_k\frac{\partial f}{\partial x_k}(a)(h_k)$ est linéaire continue de $E$ dans $F$ : $f$ est différentiable en $a$, et $df_a(h)=\sum_{k=1}^m\frac{\partial f}{\partial x_k}(a)(h_k)$. $\square$

## Preuve à trous

**Nécessité.** Si $f$ est $C^1$, $\frac{\partial f}{\partial x_i}(x)=$ <trou indice="lien entre dérivée partielle et différentielle via l'injection canonique">$df_x\circ\iota_i$</trou>, continue en $x$ car $T\mapsto T\circ\iota_i$ est linéaire continue.

**Suffisance (assertion 2).** Soit $a\in U$, les dérivées partielles existant sur $B_E(a,r)\subset U$ et continues en $a$. On pose
$$
g(x)=f(x)-f(a)-\sum_{k=1}^m\frac{\partial f}{\partial x_k}(a)(x_k-a_k),
$$
de sorte que $\frac{\partial g}{\partial x_k}(x)=\frac{\partial f}{\partial x_k}(x)-\frac{\partial f}{\partial x_k}(a)$. Pour $\eps>0$, on choisit $\delta\le r$ tel que <trou indice="utiliser la continuité en a">$\big\|\frac{\partial g}{\partial x_k}(x)\big\|\le\eps$ pour tout $x\in B_E(a,\delta)$ et tout $k$</trou>.

Pour $x\in B_E(a,\delta)$, on introduit les points $z^{(k)}=$ <trou indice="un chemin en escalier de a à x">$(x_1,\dots,x_k,a_{k+1},\dots,a_m)$</trou>, tous dans $B_E(a,\delta)$ ainsi que les segments qui les relient, et on écrit $g(x)=\sum_{k=1}^m\big(g(z^{(k)})-g(z^{(k-1)})\big)$. Sur la $k$-ième marche, seule la $k$-ième variable bouge, et <trou indice="quel théorème, appliqué à quelle application partielle ?">le théorème des accroissements finis appliqué à $y\mapsto g(x_1,\dots,x_{k-1},y,a_{k+1},\dots,a_m)$ donne $\|g(z^{(k)})-g(z^{(k-1)})\|\le\eps\|x_k-a_k\|$</trou>. En sommant, <trou>$\|g(x)\|\le\eps\sum_k\|x_k-a_k\|=\eps\|x-a\|$</trou>, donc $g(x)=o(x-a)$ et $f$ est différentiable en $a$ avec $df_a(h)=\sum_k\frac{\partial f}{\partial x_k}(a)(h_k)$.

**Suffisance (assertion 1).** Par l'assertion 2, $f$ est différentiable partout et $df_x=\sum_k\frac{\partial f}{\partial x_k}(x)\circ p_k$, continue en $x$. $\square$

## Exemples

* **Une fonction usuelle.** $f(x,y)=e^{x}\cos y+x^2y^3$ sur $\R^2$ : $\frac{\partial f}{\partial x}=e^x\cos y+2xy^3$ et $\frac{\partial f}{\partial y}=-e^x\sin y+3x^2y^2$ existent partout et sont continues, donc $f$ est $C^1$ et $df_{(x,y)}(h,k)=(e^x\cos y+2xy^3)h+(-e^x\sin y+3x^2y^2)k$. En itérant (les dérivées partielles sont elles-mêmes à dérivées partielles continues, etc.), $f$ est $C^\infty$ ([[ch05-classe-ck-def]]).
* **Un exemple $C^1$ délicat en $0$.** $f(x,y)=\frac{xy(x^2-y^2)}{x^2+y^2}$, $f(0,0)=0$. Hors de $0$, $\frac{\partial f}{\partial x}=\frac{y(x^4+4x^2y^2-y^4)}{(x^2+y^2)^2}$ et, en $0$, $\frac{\partial f}{\partial x}(0,0)=\lim_{x\to0}\frac{f(x,0)}{x}=0$. Avec $r=\sqrt{x^2+y^2}$, $\big|\frac{\partial f}{\partial x}\big|\le\frac{r(r^4+4r^4+r^4)}{r^4}=6r\to0$ : $\frac{\partial f}{\partial x}$ est continue en $0$ ; de même pour $\frac{\partial f}{\partial y}$ (car $f(y,x)=-f(x,y)$). Donc $f$ est $C^1$ sur $\R^2$ (et c'est le contre-exemple du lemme de Schwarz, [[ch05-lemme-schwarz]]).
* **En dimension infinie.** $E=E_1\times E_2$ avec $E_1=E_2=H$ un espace de Hilbert, $f(x,y)=\langle x,y\rangle\,x$ à valeurs dans $H$. On a $\frac{\partial f}{\partial x}(x,y)(h)=\langle h,y\rangle x+\langle x,y\rangle h$ et $\frac{\partial f}{\partial y}(x,y)(k)=\langle x,k\rangle x$, qui dépendent continûment de $(x,y)$ dans $\mathcal L(H;H)$ (par exemple $\big\|\frac{\partial f}{\partial y}(x,y)-\frac{\partial f}{\partial y}(x',y')\big\|\le\|x\|\,\|x-x'\|+\|x-x'\|\,\|x'\|$). Donc $f$ est $C^1$.

## Pièges

* > ⚠️ Existence des dérivées partielles en un point $\not\Rightarrow$ différentiabilité, ni même continuité (exemple $\frac{xy}{x^2+y^2}$). Il faut l'existence **au voisinage** et la continuité **en $a$**.
* La condition de l'assertion 2 est **suffisante, pas nécessaire** pour la différentiabilité en un point (exemple $(x^2+y^2)\sin\frac1{x^2+y^2}$). En revanche, l'assertion 1 est une **équivalence** pour la classe $C^1$ sur tout $U$.
* En dimension infinie, « continues » s'entend pour la **norme d'opérateur** de $\mathcal L(E_i;F)$, pas seulement « $x\mapsto\frac{\partial f}{\partial x_i}(x)(h_i)$ continue pour chaque $h_i$ ».
* Pour $\R^n$, on applique la proposition avec $E_i=\R$ : $\frac{\partial f}{\partial x_i}(x)\in\mathcal L(\R;F)\simeq F$ est le vecteur dérivée usuel, et la continuité se vérifie composante par composante.
