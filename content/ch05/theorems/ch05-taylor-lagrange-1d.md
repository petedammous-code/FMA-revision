---
id: ch05-taylor-lagrange-1d
type: lemma
chapter: 5
title: Inégalité de Taylor-Lagrange pour une fonction d'une variable réelle
ref: Lemme V.5.10
page: 111
importance: 1
depends: [ch05-accroissements-finis-vectoriel, ch05-formule-leibniz, ch05-derivee-variable-reelle]
tags: [taylor, lagrange, inegalite, variable-reelle, accroissements-finis]
---
## Intuition

> 💡 Même énoncé que la formule avec reste intégral ([[ch05-taylor-reste-integral-1d]]), mais on ne garde que la **taille** du reste : si la dérivée $(p+1)$-ième est bornée par $C$, l'écart entre $f(1)$ et son polynôme de Taylor en $0$ est au plus $C\int_0^1\frac{(1-t)^p}{p!}dt=\frac{C}{(p+1)!}$.

Avantage : on n'intègre plus rien, donc on n'a besoin ni de la continuité de $f^{(p+1)}$, ni (en réalité) de la complétude de $F$. L'outil est l'inégalité des accroissements finis « à fonction de contrôle » ([[ch05-accroissements-finis-vectoriel]]) : si $\norm{\gamma'(t)}\le G'(t)$, alors $\norm{\gamma(1)-\gamma(0)}\le G(1)-G(0)$.

Vocabulaire. « $f$ est $(p+1)$ fois différentiable » : $f,f',\dots,f^{(p)}$ existent et sont dérivables sur $I$, sans exiger la continuité de $f^{(p+1)}$ ; $f'(t)=df_t(1)$ ([[ch05-derivee-variable-reelle]]).

## Énoncé

**Lemme (poly, Lemme V.5.10, p. 111).** Soit $f$ une fonction d'un intervalle ouvert $I$ contenant $0$ et $1$, à valeurs dans un espace de Banach $F$ et $p+1$-différentiable. Supposons de plus que pour tout $t\in[0;1]$, on ait $\norm{f^{(p+1)}(t)}_F\le C$ pour une certaine constante $C>0$. On a alors
$$
\Big\|f(1)-f(0)-f'(0)-\frac{f''(0)}{2!}-\cdots-\frac{f^{(p)}(0)}{p!}\Big\|_F\le\frac{C}{(p+1)!}.
$$

## Hypothèses

### H1 — $f$ est $(p+1)$ fois dérivable sur $I$

**Rôle.** Elle rend la fonction auxiliaire $g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$ dérivable, avec $g'(t)=\frac{(1-t)^p}{p!}f^{(p+1)}(t)$, et donne un sens à l'hypothèse de borne.

**Si on la retire.** On peut tolérer un ensemble **dénombrable** de points de non-dérivabilité ([[ch05-accroissements-finis-denombrable]]), mais pas plus : pour $p=0$, la fonction de Cantor $c$ (prolongée par $0$ sur $\left]-1,0\right[$ et par $1$ sur $\left]1,2\right[$) est continue, localement constante — donc dérivable de dérivée nulle — hors de l'ensemble de Cantor $K$ (non dénombrable, de mesure nulle), et pourtant $\abs{c(1)-c(0)}=1$, qui dépasse $C/1!$ dès que $C<1$.

### H2 — $\norm{f^{(p+1)}(t)}_F\le C$ pour $t\in[0;1]$

**Rôle.** C'est l'inégalité $\norm{g'(t)}\le G'(t)$ avec $G(t)=-\frac{C(1-t)^{p+1}}{(p+1)!}$. Seules les valeurs sur $[0,1]$ comptent.

**Si on la retire.** Aucune majoration n'est possible ; et la constante est optimale : $f(t)=t^{p+1}$, $F=\R$, a $f^{(p+1)}\equiv(p+1)!$ et $f(1)-\sum_{k\le p}\frac{f^{(k)}(0)}{k!}=1=\frac{(p+1)!}{(p+1)!}$ : égalité, donc l'inégalité est fausse avec tout $C'<(p+1)!$.

### H3 — $F$ espace de Banach

**Rôle.** Aucun dans cette preuve : le théorème V.4.1 ([[ch05-accroissements-finis-vectoriel]]) vaut dans tout evn.

**Si on la retire.** La conclusion reste vraie avec la même preuve (hypothèse de confort, conservée par parallélisme avec [[ch05-taylor-reste-integral-1d]]) ; c'est ce qui permet au théorème [[ch05-taylor-lagrange]] d'être énoncé pour $F$ evn quelconque.

## Idée de la preuve

Même fonction auxiliaire $g$ que pour le reste intégral, de dérivée $\frac{(1-t)^p}{p!}f^{(p+1)}(t)$, majorée en norme par $G'(t)$ où $G(t)=-\frac{C(1-t)^{p+1}}{(p+1)!}$ ; le théorème V.4.1 donne $\norm{g(1)-g(0)}\le G(1)-G(0)=\frac{C}{(p+1)!}$.

## Preuve

Soit $g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$ pour $t\in I$. Comme $f^{(k)}$ est dérivable pour $k\le p$, la formule de Leibniz ([[ch05-formule-leibniz]]) appliquée au produit bilinéaire continu $\R\times F\to F$ montre que $g$ est dérivable sur $I$, et le même calcul télescopique que dans [[ch05-taylor-reste-integral-1d]] donne
$$
g'(t)=\frac{(1-t)^p}{p!}f^{(p+1)}(t).
$$
Soit $G(t)=-\frac{C(1-t)^{p+1}}{(p+1)!}$ ; alors $G'(t)=\frac{C(1-t)^p}{p!}$. Pour $t\in\left]0,1\right[$, $(1-t)^p\ge0$ et donc
$$
\norm{g'(t)}_F=\frac{(1-t)^p}{p!}\norm{f^{(p+1)}(t)}_F\le\frac{C(1-t)^p}{p!}=G'(t).
$$
Les fonctions $g$ et $G$ sont dérivables sur $I\supset[0,1]$, donc continues sur $[0,1]$ et dérivables sur $\left]0,1\right[$. Le théorème V.4.1 ([[ch05-accroissements-finis-vectoriel]]) donne
$$
\norm{g(1)-g(0)}_F\le G(1)-G(0)=0+\frac{C}{(p+1)!}.
$$
Comme $g(1)=f(1)$ et $g(0)=\sum_{k=0}^p\frac{f^{(k)}(0)}{k!}$, c'est l'inégalité annoncée. $\square$

## Preuve à trous

Avec $g(t)=\sum_{k=0}^p\frac{(1-t)^k}{k!}f^{(k)}(t)$, dérivable, on a <trou indice="télescopage">$g'(t)=\frac{(1-t)^p}{p!}f^{(p+1)}(t)$</trou>. On choisit la fonction de contrôle <trou indice="une primitive de C(1-t)^p/p!">$G(t)=-\frac{C(1-t)^{p+1}}{(p+1)!}$, qui vérifie $\norm{g'(t)}\le G'(t)=\frac{C(1-t)^p}{p!}$ sur $\left]0,1\right[$</trou>. Le théorème des accroissements finis V.4.1 donne alors <trou>$\norm{g(1)-g(0)}\le G(1)-G(0)=\frac{C}{(p+1)!}$</trou>, et $g(1)-g(0)=f(1)-\sum_{k=0}^p\frac{f^{(k)}(0)}{k!}$. $\square$

## Exemples

* **$e^{it}$.** $F=\C$, $f(t)=e^{it}$ : $\abs{f^{(p+1)}(t)}=1$, donc $\Big|e^i-\sum_{k=0}^p\frac{i^k}{k!}\Big|\le\frac1{(p+1)!}$. Pour $p=1$ : $\abs{e^i-1-i}\le\frac12$ ; numériquement $e^i-1-i\approx-0{,}4597-0{,}1585\,i$, de module $\approx0{,}486$.
* **Cas d'égalité.** $f(t)=t^{p+1}$ (voir H2) : la borne $\frac{C}{(p+1)!}$ est atteinte avec $C=(p+1)!$.

## Pièges

* > ⚠️ C'est une **inégalité** : en dimension $\ge2$ il n'existe pas en général de point $c$ avec $f(1)-\sum_{k\le p}\frac{f^{(k)}(0)}{k!}=\frac{f^{(p+1)}(c)}{(p+1)!}$ (contre-exemple $e^{2i\pi t}$ pour $p=0$ : $f(1)-f(0)=0$, $f'(c)\neq0$).
* Ici $f^{(p+1)}$ n'a pas besoin d'être continue, contrairement au reste intégral ([[ch05-taylor-reste-integral-1d]]).
* La borne n'est demandée que sur $[0,1]$, pas sur tout $I$.
