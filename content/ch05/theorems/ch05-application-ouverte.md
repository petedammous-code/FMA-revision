---
id: ch05-application-ouverte
type: theorem
chapter: 5
title: Théorème de l'application ouverte (Schauder, 1930)
ref: Théorème V.2.2
page: 96
importance: 2
depends: [ch05-baire, ch05-banach-series-absolument-convergentes]
tags: [application-ouverte, banach, baire, surjective, schauder]
---
## Intuition

> 💡 Une application linéaire continue **surjective** entre deux espaces de Banach ne peut pas « écraser » les boules : l'image de la boule unité de $E$ contient toute une boule centrée en $0$ de $F$. Autrement dit, tout $y$ petit dans $F$ est atteint par un antécédent $x$ petit dans $E$, avec un contrôle uniforme $\|x\|\le\frac1c\|y\|$ (à un facteur près).

Une application $f:E\to F$ est **ouverte** si l'image de tout ouvert de $E$ est un ouvert de $F$. En dimension finie, le résultat est élémentaire (on choisit des antécédents d'une base). En dimension infinie, il faut les deux complétudes : celle de $F$ pour appliquer le **théorème de Baire** ([[ch05-baire]]), celle de $E$ pour faire converger une série d'approximations successives ([[ch05-banach-series-absolument-convergentes]]).

Notations : $B_E(0,r)$ boule ouverte, $\bar B_E(0,r)$ boule fermée, $\overline{A}$ adhérence de $A$.

## Énoncé

**Théorème (poly, Théorème V.2.2, p. 96).** Soient $E$ et $F$ des espaces de Banach, et soit $f:E\to F$ une application linéaire continue et surjective. Alors l'image par $f$ d'un ouvert de $E$ est un ouvert de $F$.

**Forme quantitative (établie dans la preuve).** Il existe $c>0$ tel que
$$
B_F(0,c)\subset f\big(B_E(0,1)\big).
$$

## Hypothèses

### H1 — $E$ de Banach

**Rôle.** À la dernière étape, on obtient une suite $(x_n)$ avec $\sum_n\|x_n\|_E<1$ ; c'est la complétude de $E$ qui assure que la série $\sum x_n$ converge vers un $x$ de $E$ (Proposition V.1.1).

**Si on la retire.** Soit $F$ un Banach de dimension infinie et $\varphi:F\to\R$ une forme linéaire **non continue** (il en existe, grâce à l'axiome du choix : on prend une base algébrique normalisée, on pose $\varphi=n$ sur une suite $(e_n)$ de vecteurs de cette base et $\varphi=0$ sur les autres). Sur l'espace vectoriel $F$, la quantité $N(x)=\|x\|_F+|\varphi(x)|$ est une norme. L'identité $\mathrm{Id}:(F,N)\to(F,\|\cdot\|_F)$ est linéaire, surjective, et continue ($\|x\|_F\le N(x)$). Si elle était ouverte, son inverse serait continu, donc $N(x)\le C\|x\|_F$, d'où $|\varphi(x)|\le C\|x\|_F$ : $\varphi$ serait continue. Donc $\mathrm{Id}$ n'est pas ouverte (et $(F,N)$ n'est pas complet).

### H2 — $F$ de Banach

**Rôle.** On applique le théorème de Baire **dans $F$** au recouvrement $F=\bigcup_{n\ge1}n\,\overline{f(B)}$.

**Si on la retire.** $E=(C([0,1]),\|\cdot\|_\infty)$ (Banach) et $F=(C([0,1]),\|\cdot\|_1)$ avec $\|g\|_1=\int_0^1|g|$ (non complet). $f=\mathrm{Id}$ est linéaire, bijective, continue ($\|g\|_1\le\|g\|_\infty$). Mais $f(B_E(0,1))=B_\infty(0,1)$ ne contient aucune boule $B_1(0,c)$ : $h_n(t)=2t^n$ vérifie $\|h_n\|_1=\frac{2}{n+1}<c$ pour $n$ grand, alors que $\|h_n\|_\infty=2$. Donc $f$ n'est pas ouverte.

### H3 — $f$ linéaire continue

**Rôle.** La continuité sert deux fois : $f(\bar B)\subset\overline{f(B)}$ au début, et $f\big(\sum x_n\big)=\sum f(x_n)$ à la fin. La linéarité sert partout (homothéties, translations, convexité de $f(B)$).

**Si on la retire.** Avec $F$ et $\varphi$ comme en H1, et $x_0\in\ker\varphi\setminus\{0\}$ (il en existe : $\ker\varphi$ est un hyperplan d'un espace de dimension infinie), soit $g:F\to F$, $g(y)=y-\varphi(y)x_0$. Elle est linéaire et bijective, d'inverse $x\mapsto x+\varphi(x)x_0$ (car $\varphi(x_0)=0$). Pour une bijection, « ouverte » équivaut à « d'inverse continu » ; or si $x\mapsto x+\varphi(x)x_0$ était continue, $\varphi(x)x_0$ le serait, donc $\varphi$ aussi. Donc $g$, surjective entre Banach mais non continue, n'est pas ouverte.

### H4 — $f$ surjective

**Rôle.** Elle donne $F=f(E)=\bigcup_n n\,f(\bar B)$, point de départ de l'argument de Baire.

**Si on la retire.** $f:\R\to\R^2$, $f(x)=(x,0)$ : linéaire continue entre Banach, mais $f(\R)=\R\times\{0\}$ n'est pas ouvert dans $\R^2$. En fait, pour $f$ linéaire, « ouverte » **entraîne** « surjective » : $f(E)$ contient une boule $B_F(0,c)$, donc tout $y\ne0$ s'écrit $y=\frac{2\|y\|}{c}\,y'$ avec $y'\in B_F(0,c)\subset f(E)$.

## Idée de la preuve

Baire dans $F=\bigcup_n n\,\overline{f(B)}$ donne une boule $\bar B_F(0,\alpha)\subset\overline{f(B)}$ (convexité et symétrie). Pour enlever l'adhérence, on atteint $y$ par **approximations successives** $f(x_1)+f(x_2)+\cdots$ avec $\sum\|x_n\|<1$, et la complétude de $E$ fait converger $\sum x_n$.

## Preuve

On note $B=B_E(0,1)$ la boule unité ouverte de $E$ et $\bar B$ son adhérence.

**Étape 0 : réduction.** Il suffit de trouver $c>0$ tel que $B_F(0,c)\subset f(B)$. En effet, soit $U$ ouvert de $E$ et $y=f(x)$ avec $x\in U$ ; soit $r>0$ tel que $B_E(x,r)\subset U$. Par linéarité, $f(B_E(x,r))=f(x)+r\,f(B)\supset y+r\,B_F(0,c)=B_F(y,rc)$. Donc $f(U)$ contient une boule autour de chacun de ses points : il est ouvert.

**Étape 1 : Baire.** Tout $x\in E$ est dans $n\bar B$ pour $n\ge\|x\|$, donc $E=\bigcup_{n\ge1}n\bar B$. Comme $f$ est surjective et que, par continuité, $f(\bar B)\subset\overline{f(B)}$ :
$$
F=f(E)=f\Big(\bigcup_{n\ge1}n\,\bar B\Big)=\bigcup_{n\ge1}n\,f(\bar B)=\bigcup_{n\ge1}n\,\overline{f(B)} .
$$
Chaque $n\,\overline{f(B)}$ est fermé (image d'un fermé par l'homéomorphisme $y\mapsto ny$). Comme $F$ est complet (et non vide), le théorème de Baire ([[ch05-baire]]) assure que l'un des $n\,\overline{f(B)}$ est d'intérieur non vide ; en appliquant l'homéomorphisme $y\mapsto y/n$, $\overline{f(B)}$ est d'intérieur non vide.

**Étape 2 : une boule centrée en $0$ dans $\overline{f(B)}$.** L'ensemble $f(B)$ est convexe (image linéaire d'un convexe) et symétrique ($B=-B$), donc son adhérence aussi. Soit $B_F(y_0,r)\subset\overline{f(B)}$. Par symétrie, $B_F(-y_0,r)\subset\overline{f(B)}$, et pour $\|z\|_F<r$, $z=\frac12(y_0+z)+\frac12(-y_0+z)\in\overline{f(B)}$ par convexité. Avec $\alpha=r/2$ : $\bar B_F(0,\alpha)\subset\overline{f(B)}$.

**Étape 3 : on enlève l'adhérence.** Montrons que $\bar B_F(0,\beta)\subset f(B)$ pour tout $\beta<\alpha$. Quitte à remplacer $f$ par $\frac1\alpha f$ (qui vérifie toutes les hypothèses, et $\overline{\tfrac1\alpha f(B)}=\tfrac1\alpha\overline{f(B)}\supset\bar B_F(0,1)$), il suffit de montrer, pour tout $\lambda\in\,]0,1[$ :
$$
\bar B_F(0,1)\subset\overline{f(B)}\ \Longrightarrow\ \bar B_F(0,\lambda)\subset f(B).
$$
Remarquons d'abord que pour tout $\rho>0$, par homogénéité,
$$
\bar B_F(0,\rho)=\rho\,\bar B_F(0,1)\subset\rho\,\overline{f(B)}=\overline{f(B_E(0,\rho))}. \qquad (\ast)
$$
Soient des réels $\eps_n>0$ ($n\ge1$) tels que $\sum_{n\ge1}\eps_n=1-\lambda$ (par exemple $\eps_n=(1-\lambda)2^{-n}$), et soit $y\in\bar B_F(0,\lambda)$.

* Par $(\ast)$ avec $\rho=\lambda$, il existe $x_1\in E$ tel que $\|x_1\|_E<\lambda$ et $\|y-f(x_1)\|_F\le\eps_1$.
* Alors $y-f(x_1)\in\bar B_F(0,\eps_1)\subset\overline{f(B_E(0,\eps_1))}$ par $(\ast)$ : il existe $x_2$ tel que $\|x_2\|_E<\eps_1$ et $\|y-f(x_1)-f(x_2)\|_F\le\eps_2$.
* Par récurrence, on obtient des $x_n\in E$, $n\ge1$, tels que pour $n\ge2$
$$
\|x_n\|_E<\eps_{n-1},\qquad \|y-f(x_1)-f(x_2)-\cdots-f(x_n)\|_F\le\eps_n .
$$

Alors $\sum_{n\ge1}\|x_n\|_E<\lambda+\sum_{n\ge1}\eps_n=1$. Comme $E$ est complet, la série $\sum x_n$, absolument convergente, converge dans $E$ ([[ch05-banach-series-absolument-convergentes]]) ; notons $x$ sa somme : $\|x\|_E\le\sum_n\|x_n\|_E<1$, i.e. $x\in B$. Comme $f$ est linéaire continue,
$$
f(x)=\lim_{n\to\infty}f\Big(\sum_{k=1}^nx_k\Big)=\lim_{n\to\infty}\sum_{k=1}^nf(x_k)=y,
$$
puisque $\big\|y-\sum_{k\le n}f(x_k)\big\|_F\le\eps_n\to0$. Donc $y\in f(B)$.

**Conclusion.** En revenant à $f$ : $\bar B_F(0,\lambda\alpha)\subset f(B)$ pour tout $\lambda<1$ ; avec $c=\alpha/2$, $B_F(0,c)\subset f(B)$, et l'étape 0 conclut. $\square$

## Preuve à trous

Soit $B=B_E(0,1)$. Il suffit de trouver $c>0$ tel que $B_F(0,c)\subset f(B)$ (translation et homothétie). Par surjectivité et continuité,
$$
F=\bigcup_{n\ge1}n\,f(\bar B)=\bigcup_{n\ge1}n\,\overline{f(B)},
$$
et comme <trou indice="F est complet et les n·adh(f(B)) sont fermés">par le théorème de Baire, l'un des $n\,\overline{f(B)}$, donc $\overline{f(B)}$, est d'intérieur non vide</trou>. Comme $\overline{f(B)}$ est <trou>convexe et symétrique, il contient une boule $\bar B_F(0,\alpha)$</trou>.

On se ramène à $\alpha=1$ et on fixe $\lambda\in\,]0,1[$, des $\eps_n>0$ de somme $1-\lambda$, et $y\in\bar B_F(0,\lambda)$. Comme $\bar B_F(0,\rho)\subset\overline{f(B_E(0,\rho))}$ pour tout $\rho>0$, on construit par récurrence <trou indice="approximations successives : à chaque étape on approche l'erreur précédente">des $x_n$ avec $\|x_1\|<\lambda$, $\|x_n\|<\eps_{n-1}$ ($n\ge2$) et $\|y-f(x_1)-\cdots-f(x_n)\|\le\eps_n$</trou>. Alors $\sum\|x_n\|<1$ et, <trou indice="où sert la complétude de E ?">$E$ étant complet, $\sum x_n$ converge vers un $x$ avec $\|x\|<1$</trou> ; par continuité $f(x)=\sum f(x_n)=y$. Donc $\bar B_F(0,\lambda)\subset f(B)$. $\square$

## Exemples

* **Projection.** $p:\R^2\to\R$, $p(x_1,x_2)=x_1$, avec la norme euclidienne : $p(B(0,1))=\,]-1,1[$, donc $c=1$ convient. L'image d'un disque ouvert est un intervalle ouvert, celle d'un ouvert quelconque est une réunion d'intervalles ouverts.
* **Dérivation sur $C^1$.** $E=C^1([0,1])$ muni de $\|g\|_{C^1}=\|g\|_\infty+\|g'\|_\infty$ (Banach), $F=(C([0,1]),\|\cdot\|_\infty)$, $f(g)=g'$. Elle est linéaire, continue ($\|g'\|_\infty\le\|g\|_{C^1}$), surjective : pour $h\in F$, $G(t)=\int_0^th$ vérifie $G'=h$ et $\|G\|_{C^1}\le\|h\|_\infty+\|h\|_\infty=2\|h\|_\infty$. Donc $B_F(0,\tfrac12)\subset f(B_E(0,1))$ : $c=\frac12$ convient (ici on le voit directement ; le théorème le garantit sans calcul). $f$ n'est pas injective (les constantes ont pour image $0$).
* **Conséquence principale.** Si de plus $f$ est bijective, la forme quantitative donne la continuité de $f^{-1}$ : c'est [[ch05-isomorphisme-banach]], puis [[ch05-normes-comparables-equivalentes]] et [[ch05-graphe-ferme]].

## Pièges

* > ⚠️ Les **deux** espaces doivent être complets, et $f$ doit être **surjective** : penser au contre-exemple $\|\cdot\|_\infty$ vers $\|\cdot\|_1$ sur $C([0,1])$.
* Baire donne seulement $\bar B_F(0,\alpha)\subset\overline{f(B)}$ (avec une **adhérence**) : l'étape des approximations successives est indispensable pour l'enlever.
* L'indice dans $\|x_n\|<\eps_{n-1}$ est décalé : $x_n$ corrige l'erreur commise à l'étape $n-1$.
* Ouverte ne veut pas dire que $f$ envoie la boule unité **sur** une boule : seulement que $f(B)$ **contient** une boule centrée en $0$.
