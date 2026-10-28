---
id: ch09-differentielle-nulle-constante
type: theorem
chapter: 9
title: Différentielle nulle sur une sous-variété connexe implique application constante
ref: Théorème IX.7.30
page: 167
importance: 2
depends: [ch05-differentielle-nulle-constante, ch09-differentielle-entre-sous-varietes-def, ch09-application-cr-entre-sous-varietes-def, ch09-sous-variete-def]
tags: [sous-variete, connexite, differentielle-nulle, constante, localement-constante]
---
## Intuition

> 💡 Si, en chaque point, la fonction « ne bouge pas au premier ordre » dans aucune direction où l'on peut se déplacer sur $S_1$, alors elle est **localement** constante : sur chaque petite carte, c'est le résultat classique sur un ouvert de $\R^m$. Pour passer de « localement constante » à « constante », il faut pouvoir aller de n'importe quel point à n'importe quel autre sans « sauter » : c'est la **connexité** de $S_1$.

Rappels : une partie $A$ (avec la topologie induite par $\R^N$) est **connexe** si les seules parties à la fois ouvertes et fermées dans $A$ sont $\emptyset$ et $A$. La différentielle $df_p:T_pS_1\to T_{f(p)}S_2$ est définie dans [[ch09-differentielle-entre-sous-varietes-def]] : si $x$ est un paramétrage local de $S_1$ avec $x(q)=p$, alors $df_p(dx_q(w))=d(f\circ x)_q(w)$.

## Énoncé

**Théorème (poly, Théorème IX.7.30, p. 167).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$) avec $S_1$ connexe, et soit $f : S_1\to S_2$ une application différentiable telle que $df_p=0$ pour tout $p\in S_1$. Alors $f$ est constante.

(Ici « différentiable » est au sens de la Définition IX.7.5 ([[ch09-application-cr-entre-sous-varietes-def]]), qui porte sur des applications continues.)

## Hypothèses

### H1 — $S_1$ connexe

**Rôle.** Elle sert à la dernière étape : l'ensemble $A=\{p\in S_1\mid f(p)=f(p_0)\}$ est non vide, ouvert et fermé dans $S_1$, donc égal à $S_1$.

**Si on la retire.** L'hyperboloïde à deux nappes $S_1=\{(x,y,z)\in\R^3\mid x^2+y^2-z^2=-1\}$ est une sous-variété ($-1$ est valeur régulière de $F=x^2+y^2-z^2$, car $dF=(2x,2y,-2z)$ ne s'annule qu'en $0\notin S_1$), mais n'est pas connexe : $|z|\ge1$ sur $S_1$, et $S_1$ est la réunion des ouverts disjoints $\{z>0\}\cap S_1$ et $\{z<0\}\cap S_1$. La fonction $f:S_1\to\R$ valant $1$ sur la nappe $z>0$ et $0$ sur la nappe $z<0$ est localement constante, donc différentiable de différentielle nulle (dans un paramétrage à valeurs dans une seule nappe, $f\circ x$ est constante), et n'est pas constante. Plus simplement : $S_1=\R\setminus\{0\}$ (ouvert de $\R$) et $f=$ signe.

### H2 — $f$ différentiable, avec $df_p=0$ en **tout** point

**Rôle.** Elle donne, dans chaque carte, une fonction $f\circ x$ différentiable sur un ouvert de $\R^m$ de différentielle identiquement nulle, à laquelle on applique le Corollaire V.4.5.

**Si on la retire.** On ne peut pas se contenter de « $df_p=0$ sauf sur un ensemble négligeable ». Sur $S_1=]0,1[$, l'escalier de Cantor $c$ est continu, non constant ($c$ croît de $0$ à $1$ sur $[0,1]$ et vaut $\frac12$ sur $]\frac13,\frac23[$, $\frac14$ sur $]\frac19,\frac29[$), et il est constant sur chaque intervalle ouvert du complémentaire de l'ensemble de Cantor $K$ : il est donc dérivable de dérivée nulle sur $]0,1[\setminus K$, ensemble de mesure pleine. Le théorème montre a posteriori que $c$ ne peut pas être dérivable de dérivée nulle en tout point de $]0,1[$.

## Idée de la preuve

Dans un paramétrage $x$ défini sur une boule, $f\circ x$ a une différentielle nulle, donc est constante (cas d'un ouvert connexe de $\R^m$) : $f$ est localement constante. L'ensemble où $f$ prend la valeur $f(p_0)$ est alors ouvert, fermé et non vide dans $S_1$ connexe.

## Preuve

Le poly n'écrit pas la preuve (« découle aisément » du cas d'un ouvert de $\R^m$) ; la voici. Notons $m=\dim S_1$.

**Étape 1 : $f$ est localement constante.** Soit $p\in S_1$ et $x:U\to S_1$ un paramétrage local en $p$, $x(q)=p$. Quitte à remplacer $U$ par une boule ouverte $B$ centrée en $q$ et contenue dans $U$ (la restriction $x|_B$ est encore un paramétrage local : $x(B)$ est un ouvert de $x(U)$, donc de $S_1$), on peut supposer $U=B$ convexe, donc connexe. L'application $G=f\circ x:B\to\R^{N_2}$ est différentiable (lecture de $f$ dans un paramétrage, comme à l'étape 0 de [[ch09-differentielle-entre-sous-varietes-def]]) et, pour tout $u\in B$, $x$ est aussi un paramétrage local en $x(u)$, donc par la propriété 1 de la Définition IX.7.15,
$$
dG_u(w)=d(f\circ x)_u(w)=df_{x(u)}\big(dx_u(w)\big)=0\qquad(w\in\R^m).
$$
Ainsi $dG\equiv0$ sur l'ouvert connexe $B$ ; par le Corollaire V.4.5 ([[ch05-differentielle-nulle-constante]]), $G$ est constante sur $B$, c'est-à-dire $f$ est constante sur $x(B)$, qui est un voisinage ouvert de $p$ dans $S_1$.

**Étape 2 : connexité.** Fixons $p_0\in S_1$ (si $S_1=\emptyset$ il n'y a rien à montrer) et posons $A=\{p\in S_1\mid f(p)=f(p_0)\}$.
* $A\neq\emptyset$ car $p_0\in A$.
* $A$ est ouvert dans $S_1$ : si $p\in A$, $f$ vaut $f(p)=f(p_0)$ sur un voisinage ouvert de $p$ (étape 1), contenu dans $A$.
* $A$ est fermé dans $S_1$ : c'est l'image réciproque du fermé $\{f(p_0)\}$ par l'application continue $f$ (on peut aussi dire : $S_1\setminus A$ est ouvert, par l'étape 1 appliquée aux points où $f\neq f(p_0)$).

Comme $S_1$ est connexe, $A=S_1$ : $f$ est constante. $\square$

*Variante :* si $S_1$ est connexe, deux points de $S_1$ sont reliés par une courbe $C^1$ $\alpha:[0,1]\to S_1$ (poly, Exercice IX.9.12) ; alors $(f\circ\alpha)'(t)=df_{\alpha(t)}(\alpha'(t))=0$ et $f\circ\alpha$ est constante.

## Preuve à trous

**Étape 1.** Soit $p\in S_1$ et $x:B\to S_1$ un paramétrage local en $p$, où l'on a choisi $B$ <trou indice="quelle propriété de l'ouvert de départ faut-il pour appliquer le cas euclidien ?">une boule ouverte, donc connexe (en restreignant un paramétrage quelconque)</trou>. Pour tout $u\in B$ et $w\in\R^m$, on a $d(f\circ x)_u(w)=$ <trou indice="propriété 1 de la définition de la différentielle">$df_{x(u)}(dx_u(w))=0$, car $x$ est aussi un paramétrage local en $x(u)$</trou>. Donc $f\circ x$ est constante sur $B$ (Corollaire V.4.5), et $f$ est constante sur le voisinage ouvert $x(B)$ de $p$.

**Étape 2.** Soit $A=\{p\in S_1\mid f(p)=f(p_0)\}$. Il est non vide, <trou indice="utiliser l'étape 1">ouvert dans $S_1$ car $f$ est localement constante</trou>, et <trou indice="continuité">fermé dans $S_1$, image réciproque du fermé $\{f(p_0)\}$ par $f$ continue</trou>. Par <trou>connexité de $S_1$</trou>, $A=S_1$. $\square$

## Exemples

* **Hypersurface dont toutes les normales sont concourantes** (poly, Exercice IX.7.37). Soit $S$ une hypersurface connexe de $\R^N$ dont toutes les droites normales passent par $p_0$, c'est-à-dire $p-p_0\perp T_pS$ pour tout $p\in S$. La fonction $f(p)=\norm{p-p_0}^2$ a pour différentielle $df_p(v)=2\langle v,p-p_0\rangle$ ([[ch09-ex-distance-carre]]), qui est nulle sur $T_pS$ pour tout $p$. Par le théorème, $f$ est constante égale à $R^2$ : $S$ est contenue dans la sphère de centre $p_0$ et de rayon $R$.
* **$O(n)$ n'est pas connexe.** Le groupe orthogonal $O(n)=\{A\in\Mat_n(\R)\mid A^{\mathsf T}A=I_n\}$ est une sous-variété de $\Mat_n(\R)$ ($I_n$ est valeur régulière de $A\mapsto A^{\mathsf T}A$, à valeurs dans les matrices symétriques). La fonction $\det:O(n)\to\R$ est continue à valeurs dans $\{-1,1\}$, donc localement constante, donc différentiable de différentielle nulle. Elle prend les deux valeurs ($I_n$ et $\mathrm{diag}(-1,1,\dots,1)$). Par contraposée du théorème, $O(n)$ n'est pas connexe.
* **La sphère $\mathbb S^n$ ($n\ge1$) est connexe** : c'est l'image de $\R^{n+1}\setminus\{0\}$, connexe par arcs, par l'application continue $x\mapsto x/\norm{x}$. Toute application $f:\mathbb S^n\to S_2$ avec $df\equiv0$ y est donc constante — alors que sur $\mathbb S^0=\{-1,1\}$ (dimension $0$, non connexe) n'importe quelle fonction a une différentielle nulle ($T_p\mathbb S^0=\{0\}$).

## Pièges

* > ⚠️ Sans connexité, la conclusion est seulement « **localement constante** » (constante sur chaque composante connexe). Une sous-variété n'est **pas** supposée connexe ([[ch09-remarque-connexite]]) : vérifier la connexité avant d'invoquer le théorème (ou raisonner composante par composante).
* La condition porte sur $df_p:T_pS_1\to T_{f(p)}S_2$, c'est-à-dire sur les **directions tangentes** à $S_1$ seulement. Si $f=g|_{S_1}$, il ne faut **pas** demander $dg_p=0$ sur tout $\R^{N_1}$ : par exemple $g(x)=\norm{x}^2$ restreinte à $\mathbb S^{N-1}$ est constante alors que $dg_p\neq0$.
* En dimension $0$, $T_pS_1=\{0\}$ et la condition $df_p=0$ est vide : c'est cohérent, car une sous-variété de dimension $0$ connexe est un point.
