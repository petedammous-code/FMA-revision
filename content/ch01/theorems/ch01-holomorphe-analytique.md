---
id: ch01-holomorphe-analytique
type: theorem
chapter: 1
title: "Holomorphe $\Leftrightarrow$ analytique ; les fonctions holomorphes sont $C^\infty$"
ref: Théorème I.7.4
page: 20
importance: 3
depends: [ch01-serie-entiere-holomorphe, ch01-cauchy-formule-disque, ch01-integrale-sur-cercle, ch01-def-analytique, ch01-stabilite-operations, ch01-c-derivable-ssi-df-c-lineaire]
tags: [analytique, holomorphe, serie-entiere, cauchy, c-infini, rigidite]
---
## Intuition

> 💡 Être holomorphe, c'est a priori très peu demander : être dérivable au sens complexe avec une dérivée continue (« $C^1$ au sens complexe », [[ch01-def-holomorphe]]). Le théorème dit que c'est en fait énorme : une telle fonction est, autour de chaque point, la somme d'une **série entière** ([[ch01-def-analytique]]), donc indéfiniment dérivable. Une seule dérivée complexe en entraîne une infinité.

D'où vient ce miracle ? De la formule intégrale de Cauchy ([[ch01-cauchy-formule-disque]]) : $f(z)=\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega$ exprime $f$ comme une superposition de fonctions $z\mapsto\frac{1}{\omega-z}$, et chacune de celles-ci se développe en série géométrique en $(z-z_0)$. En variable réelle, rien de tel : il existe des fonctions $C^1$ non $C^2$ et des fonctions $C^\infty$ non développables en série entière.

## Énoncé

**Théorème (poly, Théorème I.7.4, p. 20).** Soit $\Omega$ un ouvert de $\C$. Une fonction est holomorphe sur $\Omega$ si et seulement si elle est analytique sur $\Omega$.

En particulier, les fonctions holomorphes sont de classe $C^\infty$, alors que leur définition ne leur demandait a priori que d'être de classe $C^1$. (Plus précisément : si $f\in\Hol(\Omega)$, alors $f'\in\Hol(\Omega)$, $f$ admet des dérivées complexes $f^{(k)}$ de tout ordre, toutes holomorphes, et $f$ est $C^\infty$ au sens réel.)

## Hypothèses

### H1 — $\Omega$ est un ouvert de $\C$

**Rôle.** Pour tout $z_0\in\Omega$, il existe $r>0$ avec $\bar D(z_0,r)\subset\Omega$, ce qui permet d'écrire la formule de Cauchy sur $C(z_0,r)$ (sens direct) ; et les deux notions (holomorphe, analytique) sont définies sur des ouverts.

**Si on la retire.** C'est une hypothèse de cadre : sans ouvert, ni la $\C$-dérivabilité en tout point au sens de la définition I.1.1, ni l'analyticité ne sont définies ; il n'y a pas d'énoncé à contredire.

### H2 — la continuité de $f'$ dans la définition de « holomorphe »

**Rôle.** Elle est utilisée dans la preuve de la formule de Cauchy (dérivation sous le signe somme et lemme I.5.10, [[ch01-derivee-f-rond-gamma]]), donc dans le sens « holomorphe $\Rightarrow$ analytique ».

**Si on la retire.** *Hypothèse de confort :* la conclusion reste vraie pour une fonction seulement $\C$-dérivable en tout point (théorème de Goursat, [[ch01-goursat]], qui passe par le théorème de Morera, [[ch01-morera]]) ; la preuve change : on montre d'abord la nullité des intégrales sur les triangles par découpage, sans dériver $f'$.

### H3 — la dérivabilité est au sens **complexe**

**Rôle.** C'est la $\C$-dérivabilité qui donne la formule de Cauchy, source de toute la régularité.

**Si on la retire.** En variable réelle, l'énoncé est faux à deux niveaux :
* $x\mapsto x|x|$ est $C^1$ sur $\R$ (dérivée $2|x|$, continue) mais pas deux fois dérivable en $0$ ;
* $\varphi(x)=e^{-1/x^2}$ ($\varphi(0)=0$) est $C^\infty$ avec $\varphi^{(n)}(0)=0$ pour tout $n$, donc sa série de Taylor en $0$ est nulle alors que $\varphi\neq0$ près de $0$ : $\varphi$ n'est pas analytique.
De même $f(z)=|z|^2$ est $C^\infty$ au sens réel sur $\C$ mais pas analytique (elle n'est $\C$-dérivable qu'en $0$, [[ch01-exemple-zbar-rez-module]]).

## Idée de la preuve

Analytique $\Rightarrow$ holomorphe : une série entière est holomorphe sur son disque de convergence, et l'holomorphie est locale. Holomorphe $\Rightarrow$ analytique : dans la formule de Cauchy sur $C(z_0,r)$, on développe $\frac{1}{\omega-z}$ en série géométrique de raison $\frac{z-z_0}{\omega-z_0}$, et l'on intervertit somme et intégrale grâce à la convergence normale.

## Preuve

**Analytique $\Rightarrow$ holomorphe.** Supposons $f$ analytique sur $\Omega$ et soit $z_0\in\Omega$. Il existe $\eps>0$ avec $D(z_0,\eps)\subset\Omega$ et $f(z)=\sum_{n\ge0}a_n(z-z_0)^n$ sur $D(z_0,\eps)$, la série ayant un rayon $R\ge\eps$. La Proposition I.3.3 ([[ch01-serie-entiere-holomorphe]]) dit que $u\mapsto\sum_na_nu^n$ est holomorphe sur $D(0,R)$, de dérivée $\sum_{n\ge1}na_nu^{n-1}$ ; en composant avec la translation $z\mapsto z-z_0$ ([[ch01-stabilite-operations]]), $f$ est holomorphe sur $D(z_0,\eps)$, avec $f'(z)=\sum_{n\ge1}na_n(z-z_0)^{n-1}$. La propriété d'être holomorphe étant locale (la continuité de $f$, la $\C$-dérivabilité en un point et la continuité de $f'$ en un point ne dépendent que des valeurs de $f$ près de ce point), ceci montre que $f\in\Hol(\Omega)$.

**Holomorphe $\Rightarrow$ analytique.** Supposons $f\in\Hol(\Omega)$. Soient $z_0\in\Omega$ et $r>0$ tel que $\bar D(z_0,r)\subset\Omega$ (il en existe car $\Omega$ est ouvert). Notons $\Gamma:=C(z_0,r)$, parcouru dans le sens trigonométrique. Grâce à la formule intégrale de Cauchy ([[ch01-cauchy-formule-disque]]),
$$
\forall z\in D(z_0,r),\qquad f(z)=\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega .
$$
En posant $\omega=z_0+re^{i\theta}$ ($d\omega=ire^{i\theta}d\theta$, [[ch01-integrale-sur-cercle]]), on trouve
$$
f(z)=\frac{1}{2\pi}\int_0^{2\pi}\frac{f(z_0+re^{i\theta})}{re^{i\theta}+z_0-z}\,re^{i\theta}\,d\theta=\frac{1}{2\pi}\int_0^{2\pi}\frac{f(z_0+re^{i\theta})}{1-\frac{z-z_0}{r}e^{-i\theta}}\,d\theta
=\frac{1}{2\pi}\int_0^{2\pi}\sum_{n\ge0}\Bigl(\frac{z-z_0}{r}\Bigr)^nf(z_0+re^{i\theta})\,e^{-in\theta}\,d\theta,
$$
où l'on a développé $\frac{1}{1-q}=\sum_{n\ge0}q^n$ avec $q=\frac{z-z_0}{r}e^{-i\theta}$, $|q|=\frac{|z-z_0|}{r}<1$. La majoration
$$
\Bigl|\Bigl(\frac{z-z_0}{r}\Bigr)^nf(z_0+re^{i\theta})\,e^{-in\theta}\Bigr|\le\sup_\Gamma|f|\,\Bigl(\frac{|z-z_0|}{r}\Bigr)^n,
$$
($\sup_\Gamma|f|<+\infty$ car $f$ est continue sur le compact $\Gamma$) et le fait que $|z-z_0|<r$ assurent la convergence normale de la série sur $[0,2\pi]$, ce qui permet d'intervertir intégration et sommation :
$$
f(z)=\sum_{n\ge0}a_n(z-z_0)^n\qquad\text{pour tout }z\in D(z_0,r),\qquad\text{où}\qquad a_nr^n=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\,e^{-in\theta}\,d\theta .
$$
La série $\sum a_n(z-z_0)^n$ converge sur $D(z_0,r)$, donc a un rayon $\ge r>0$, et elle vaut $f$ sur ce disque : $f$ est développable en série entière au voisinage de $z_0$. Ceci pour tout $z_0\in\Omega$ : $f$ est analytique sur $\Omega$.

**Conséquence : régularité $C^\infty$.** Soit $f\in\Hol(\Omega)$. Par ce qui précède, au voisinage de chaque $z_0$, $f=\sum a_n(z-z_0)^n$ et $f'=\sum_{n\ge1}na_n(z-z_0)^{n-1}$, série entière de même rayon (Proposition I.3.3) ; donc $f'$ est analytique, donc holomorphe sur $\Omega$ (premier sens). Par récurrence, $f^{(k)}$ existe et appartient à $\Hol(\Omega)$ pour tout $k$. Enfin, pour $g\in\Hol(\Omega)$, $dg_z$ est la multiplication par $g'(z)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]), donc $\frac{\partial g}{\partial x}=dg_z(1)=g'$ et $\frac{\partial g}{\partial y}=dg_z(i)=ig'$. Par récurrence sur $k$, toute dérivée partielle d'ordre $k$ de $f$ existe et vaut $i^jf^{(k)}$ ($j$ = nombre de dérivations en $y$), qui est continue : $f$ est $C^\infty$ au sens réel. $\square$

## Preuve à trous

*Analytique $\Rightarrow$ holomorphe :* près de $z_0$, $f$ est la somme d'une série entière, holomorphe sur son disque de convergence (Proposition I.3.3), et <trou indice="pourquoi cela suffit-il pour conclure sur tout Ω ?">l'holomorphie est une propriété locale (elle ne dépend que des valeurs de $f$ au voisinage de chaque point)</trou>.

*Holomorphe $\Rightarrow$ analytique :* soit $\bar D(z_0,r)\subset\Omega$ et $z\in D(z_0,r)$. Par la formule de Cauchy et $\omega=z_0+re^{i\theta}$,
$$
f(z)=\frac{1}{2\pi}\int_0^{2\pi}\frac{f(z_0+re^{i\theta})}{1-\frac{z-z_0}{r}e^{-i\theta}}\,d\theta .
$$
On développe <trou indice="série géométrique">$\frac{1}{1-\frac{z-z_0}{r}e^{-i\theta}}=\sum_{n\ge0}\bigl(\frac{z-z_0}{r}\bigr)^ne^{-in\theta}$</trou> ; la majoration <trou indice="du terme général, uniformément en θ">$\bigl|\bigl(\frac{z-z_0}{r}\bigr)^nf(z_0+re^{i\theta})e^{-in\theta}\bigr|\le\sup_\Gamma|f|\,\bigl(\frac{|z-z_0|}{r}\bigr)^n$, terme d'une série géométrique convergente</trou> justifie l'interversion, d'où $f(z)=\sum_{n\ge0}a_n(z-z_0)^n$ sur $D(z_0,r)$ avec
<trou indice="coefficient de Fourier">$a_nr^n=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})e^{-in\theta}\,d\theta$</trou>. $\square$

## Exemples

* **Coefficients de l'exponentielle par la formule.** $f=\exp$, $z_0$ quelconque : $a_nr^n=\frac{1}{2\pi}\int_0^{2\pi}e^{z_0}e^{re^{i\theta}}e^{-in\theta}\,d\theta=e^{z_0}\sum_{k\ge0}\frac{r^k}{k!}\cdot\frac1{2\pi}\int_0^{2\pi}e^{i(k-n)\theta}\,d\theta=e^{z_0}\frac{r^n}{n!}$, d'où $a_n=\frac{e^{z_0}}{n!}$ : on retrouve $e^z=\sum_n\frac{e^{z_0}}{n!}(z-z_0)^n$.
* **Une fraction rationnelle.** $f(z)=\frac{1}{1+z^2}$ est holomorphe sur $\Omega=\C\setminus\{i,-i\}$, donc analytique : en $0$, $f(z)=\sum_{n\ge0}(-1)^nz^{2n}$ pour $|z|<1$. Noter que le rayon ($1$) est la distance de $0$ aux points $\pm i$ où $f$ n'est pas définie, alors que la fonction réelle $x\mapsto\frac1{1+x^2}$ est parfaitement régulière sur $\R$ : c'est la géométrie complexe qui explique le rayon.
* **Parties réelles et imaginaires.** Si $f=P+iQ$ est holomorphe, $P$ et $Q$ sont $C^\infty$, donc l'hypothèse « $C^2$ » de la Remarque I.2.8 est superflue : $\Delta P=\Delta Q=0$ pour toute $f\in\Hol(\Omega)$ ([[ch01-laplacien-harmonique]]).

## Pièges

* > ⚠️ Le théorème donne une série **par point** : il ne dit pas qu'une seule série représente $f$ sur tout $\Omega$. Le rayon en $z_0$ est au moins le rayon du plus grand disque centré en $z_0$ inclus dans $\Omega$ : c'est le Corollaire I.7.5 ([[ch01-estimees-cauchy]]).
* Les coefficients $a_n$ définis par $a_nr^n=\frac1{2\pi}\int f(z_0+re^{i\theta})e^{-in\theta}d\theta$ ne dépendent pas de $r$ : ils valent $\frac{f^{(n)}(z_0)}{n!}$ (dérivation terme à terme, [[ch01-serie-entiere-derivees-tout-ordre]]).
* « $C^\infty$ au sens réel » ne suffit pas pour être holomorphe ($|z|^2$, $\bar z$) : il faut les conditions de Cauchy–Riemann ([[ch01-cauchy-riemann]]).
* En variable réelle, l'analogue est faux ($x|x|$, $e^{-1/x^2}$) : ne jamais transposer ce théorème aux fonctions de $\R$ dans $\R$.
