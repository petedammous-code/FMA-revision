---
id: ch05-normes-comparables-equivalentes
type: corollary
chapter: 5
title: Deux normes complètes comparables sont équivalentes
ref: Corollaire V.2.4
page: 97
importance: 1
depends: [ch05-isomorphisme-banach, ch05-norme-operateur-def]
tags: [banach, normes-equivalentes, isomorphisme, completude]
---
## Intuition

> 💡 Sur un même espace vectoriel, deux normes **complètes** ne peuvent pas être « à moitié » comparables : dès que l'une domine l'autre ($\|x\|_1\le k\|x\|_2$), l'inégalité dans l'autre sens est gratuite.

Vocabulaire. Deux normes $\|\cdot\|_1$, $\|\cdot\|_2$ sur $E$ sont **comparables** s'il existe $k>0$ tel que $\|x\|_1\le k\|x\|_2$ pour tout $x$ (on dit que $\|\cdot\|_2$ est **plus fine** : elle a plus d'ouverts). Elles sont **équivalentes** s'il existe $a,b>0$ avec $a\|x\|_2\le\|x\|_1\le b\|x\|_2$ pour tout $x$ (mêmes ouverts, mêmes suites convergentes). Un espace est **complet** si toute suite de Cauchy converge (espace de Banach).

L'astuce : « $\|x\|_1\le k\|x\|_2$ » dit exactement que l'identité $(E,\|\cdot\|_2)\to(E,\|\cdot\|_1)$ est continue. C'est une bijection linéaire continue entre deux Banach : par le théorème d'isomorphisme de Banach ([[ch05-isomorphisme-banach]]), son inverse est continu, ce qui est l'autre inégalité.

## Énoncé

**Corollaire (poly, Corollaire V.2.4, p. 97).** Soit $E$ un espace vectoriel muni de deux normes $\|\cdot\|_1$ et $\|\cdot\|_2$ telles que $E$ soit complet pour chacune d'elles. Alors si ces deux normes sont comparables (il existe $k>0$ tel que $\|x\|_1\le k\|x\|_2$ pour tout $x\in E$), elles sont équivalentes : il existe $k'>0$ tel que $\|x\|_2\le k'\|x\|_1$ pour tout $x\in E$.

## Hypothèses

### H1 — $E$ complet pour chacune des deux normes

**Rôle.** C'est l'hypothèse « $E$ et $F$ de Banach » du théorème d'isomorphisme de Banach, appliqué à $\mathrm{Id}:(E,\|\cdot\|_2)\to(E,\|\cdot\|_1)$ : il faut que **les deux** espaces $(E,\|\cdot\|_2)$ et $(E,\|\cdot\|_1)$ soient complets.

**Si on la retire.**
* *La norme la plus faible n'est pas complète.* Sur $E=C([0,1])$ (fonctions continues réelles), $\|u\|_1=\int_0^1|u|$ et $\|u\|_\infty=\sup_{[0,1]}|u|$ vérifient $\|u\|_1\le\|u\|_\infty$ (comparables). Mais $u_n(t)=t^n$ donne $\|u_n\|_\infty=1$ et $\|u_n\|_1=\frac1{n+1}\to0$ : aucune constante $k'$ ne vérifie $\|u\|_\infty\le k'\|u\|_1$. Ici $\|\cdot\|_\infty$ est complète, $\|\cdot\|_1$ ne l'est pas.
* *Les deux normes ne sont pas complètes.* Sur $c_{00}$ (suites réelles nulles à partir d'un certain rang), $\|x\|_\infty=\max_n|x_n|\le\|x\|_1=\sum_n|x_n|$, mais $x=e_1+\dots+e_n$ (où $e_j$ est la suite valant $1$ au rang $j$ et $0$ ailleurs) donne $\|x\|_\infty=1$, $\|x\|_1=n$ : non équivalentes.
* *La norme la plus fine n'est pas complète.* Exemple non constructif (axiome du choix) : soit $(F,\|\cdot\|)$ un Banach de dimension infinie et $\varphi$ une forme linéaire **non continue** sur $F$ (il en existe, via une base algébrique). La norme $N(x)=\|x\|+|\varphi(x)|$ vérifie $\|x\|\le N(x)$ ; si l'on avait $N\le k'\|\cdot\|$, alors $|\varphi(x)|\le k'\|x\|$ et $\varphi$ serait continue. Donc $\|\cdot\|$ (complète) et $N$ sont comparables, non équivalentes ; d'après le corollaire, $N$ n'est donc pas complète.

### H2 — Les deux normes sont comparables

**Rôle.** Elle fournit la continuité de l'identité dans un sens, sans laquelle le théorème de Banach ne s'applique pas.

**Si on la retire.** Deux normes complètes peuvent ne pas être équivalentes (donc, par le corollaire, ne pas être comparables). Exemple (axiome du choix) : $F$, $\varphi$ comme ci-dessus et $x_0\in F$ avec $\varphi(x_0)=1$. L'application linéaire $S(y)=y-2\varphi(y)x_0$ vérifie $\varphi(Sy)=-\varphi(y)$, donc $S\circ S=\mathrm{Id}$ : $S$ est une bijection. La norme $N'(y)=\|S y\|$ est complète ($S$ est une isométrie bijective de $(F,N')$ sur le Banach $(F,\|\cdot\|)$). Si $N'$ était équivalente à $\|\cdot\|$, $S$ serait continue, donc $y\mapsto 2\varphi(y)x_0=y-Sy$ aussi, et $\varphi$ serait continue : contradiction.

## Idée de la preuve

« Comparables » = l'identité $(E,\|\cdot\|_2)\to(E,\|\cdot\|_1)$ est continue. C'est une bijection linéaire continue entre Banach : son inverse est continu (Banach), ce qui donne l'inégalité inverse.

## Preuve

Supposons $\|x\|_1\le k\|x\|_2$ pour tout $x\in E$. Considérons
$$
\mathrm{Id}:(E,\|\cdot\|_2)\longrightarrow(E,\|\cdot\|_1),\qquad x\mapsto x .
$$
Elle est linéaire et bijective, et continue puisque $\|\mathrm{Id}(x)\|_1\le k\|x\|_2$ (une application linéaire bornée est continue, [[ch05-norme-operateur-def]]). Les espaces de départ et d'arrivée sont complets par hypothèse. Par le théorème d'isomorphisme de Banach ([[ch05-isomorphisme-banach]]), son inverse $\mathrm{Id}:(E,\|\cdot\|_1)\to(E,\|\cdot\|_2)$ est continu : en notant $k'$ sa norme d'opérateur, $\|x\|_2\le k'\|x\|_1$ pour tout $x\in E$. Avec $\|x\|_1\le k\|x\|_2$, les deux normes sont équivalentes. $\square$

## Preuve à trous

Supposons $\|x\|_1\le k\|x\|_2$. Alors l'application <trou indice="quelle application très simple relie les deux espaces normés ?">$\mathrm{Id}:(E,\|\cdot\|_2)\to(E,\|\cdot\|_1)$</trou> est linéaire, bijective et continue, entre deux espaces <trou>complets (hypothèse H1)</trou>. Par <trou indice="un inverse continu gratuit">le théorème d'isomorphisme de Banach, son inverse est continu, d'où $k'>0$ avec $\|x\|_2\le k'\|x\|_1$</trou>, et les normes sont équivalentes. $\square$

## Exemples

* **Sur $C^1([0,1])$.** Soient $N_1(u)=\|u\|_\infty+\|u'\|_\infty$ et $N_2(u)=|u(0)|+\|u'\|_\infty$. On a $N_2\le N_1$. Les deux sont complètes : $N_1$ classiquement, et $N_2$ parce que $u\mapsto(u(0),u')$ est une isométrie bijective de $(C^1([0,1]),N_2)$ sur $\R\times C([0,1])$ muni de $|a|+\|v\|_\infty$ (complet), d'inverse $(a,v)\mapsto\big(t\mapsto a+\int_0^t v\big)$. Le corollaire donne $N_1\le k'N_2$ sans calcul. Vérification directe : $|u(t)|=|u(0)+\int_0^tu'|\le|u(0)|+\|u'\|_\infty$, donc $N_1\le 2N_2$.
* **Usage typique.** C'est l'outil de la preuve du théorème du graphe fermé ([[ch05-graphe-ferme]]) : on compare $\|\cdot\|_E$ à la norme du graphe $\|x\|_E+\|f(x)\|_F$.
* **Dimension finie.** Le résultat y est vide de contenu : toutes les normes sont équivalentes (et complètes).

## Pièges

* > ⚠️ Il faut la complétude pour **les deux** normes : l'exemple $\|\cdot\|_1\le\|\cdot\|_\infty$ sur $C([0,1])$ est le contre-exemple standard.
* Le corollaire ne dit **pas** que deux normes complètes sont équivalentes : il faut d'abord une inégalité dans un sens.
* La constante $k'$ n'est pas explicite : la preuve passe par Baire (via l'application ouverte, [[ch05-application-ouverte]]).
