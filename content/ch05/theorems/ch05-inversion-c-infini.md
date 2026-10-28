---
id: ch05-inversion-c-infini
type: theorem
chapter: 5
title: "$\mathrm{Iso}(E;F)$ est ouvert et $f\mapsto f^{-1}$ est $C^\infty$, de différentielle $g\mapsto-f^{-1}gf^{-1}$"
ref: Théorème V.5.7
page: 109
importance: 3
depends: [ch05-serie-neumann, ch05-banach-series-absolument-convergentes, ch05-lef-banach-norme-algebre, ch05-differentielle-bilineaire, ch05-composition-differentielles, ch05-differentielle-def, ch05-differentielle-lineaire, ch05-lineaire-c-infini, ch05-differentiabilite-composantes, ch05-classe-ck-def]
tags: [inversion, iso, neumann, classe-c-infini, banach, operateurs]
---
## Intuition

> 💡 En dimension 1, l'application $x\mapsto 1/x$ est définie sur l'ouvert $\R^*$ et y est $C^\infty$, de dérivée $-1/x^2$. Le théorème dit exactement la même chose pour les **opérateurs** : si $f$ est inversible, tout opérateur $f+g$ assez proche de $f$ l'est encore, et $f^{-1}$ dépend de $f$ de façon infiniment différentiable, avec $d\Psi_f(g)=-f^{-1}gf^{-1}$ (l'analogue de $-g/x^2$, mais l'ordre des facteurs compte car la composition n'est pas commutative).

Le moteur est la **série géométrique** : $\frac{1}{1-h}=1+h+h^2+\cdots$ si $|h|<1$, version opérateurs = série de Neumann ([[ch05-serie-neumann]]). On écrit $f_0+g=f_0(\mathrm{Id}_E-h)$ avec $h=-f_0^{-1}g$ petit, et on inverse terme à terme.

Vocabulaire. $\mathcal L(E;F)$ est l'espace des applications linéaires continues de $E$ dans $F$, muni de la norme d'opérateur $\norm{u}=\sup_{\norm{x}_E\le1}\norm{u(x)}_F$ ([[ch05-norme-operateur-def]]), qui vérifie $\norm{u\circ v}\le\norm{u}\,\norm{v}$ ([[ch05-lef-banach-norme-algebre]]) ; on note $\mathcal L(E)=\mathcal L(E;E)$. $\mathrm{Iso}(E;F)$ est l'ensemble des **isomorphismes bicontinus** : les $f\in\mathcal L(E;F)$ bijectifs dont la réciproque $f^{-1}$ est aussi continue ($f^{-1}\in\mathcal L(F;E)$). Un **espace de Banach** est un evn complet. « De classe $C^\infty$ » : voir [[ch05-classe-ck-def]].

## Énoncé

Soient $E$ et $F$ des espaces de Banach.

**Théorème (poly, Théorème V.5.7, p. 109).** L'ensemble $\mathrm{Iso}(E;F)$ des isomorphismes linéaires bicontinus de $E$ dans $F$ est un ouvert de $\mathcal L(E;F)$ et l'application
$$
\Psi:\mathrm{Iso}(E;F)\to\mathrm{Iso}(F;E),\qquad f\mapsto f^{-1}
$$
est de classe $C^\infty$, sa différentielle en $f$ étant donnée par
$$
d\Psi_f(g)=-f^{-1}\circ g\circ f^{-1},\qquad (g\in\mathcal L(E;F)).
$$

**Complément quantitatif (contenu dans la preuve du poly).** Si $f_0\in\mathrm{Iso}(E;F)$, $g\in\mathcal L(E;F)$ et $h=-f_0^{-1}g$ vérifie $\norm{h}<1$ (c'est le cas dès que $\norm{f_0^{-1}}\,\norm{g}<1$), alors $f_0+g\in\mathrm{Iso}(E;F)$ et
$$
\norm{(f_0+g)^{-1}-f_0^{-1}}\le\frac{\norm{h}}{1-\norm{h}}\,\norm{f_0^{-1}},\qquad \norm{(f_0+g)^{-1}-f_0^{-1}+f_0^{-1}gf_0^{-1}}\le\frac{\norm{h}^2}{1-\norm{h}}\,\norm{f_0^{-1}}.
$$

**Remarque (poly, Remarque V.5.8, p. 109).** Grâce au théorème d'isomorphisme de Banach ([[ch05-isomorphisme-banach]]), il suffit d'exiger la continuité et la bijectivité : la continuité de l'inverse est automatique ([[ch05-iso-bicontinu-automatique]]).

## Hypothèses

### H1 — $E$ et $F$ sont des espaces de Banach

**Rôle.** La complétude de $E$ entraîne celle de $\mathcal L(E)$ ([[ch05-lef-banach-norme-algebre]]), ce qui fait converger la série normalement convergente $\sum_n h^n$ dans $\mathcal L(E)$ ([[ch05-banach-series-absolument-convergentes]]) : c'est la série de Neumann qui fournit l'inverse de $\mathrm{Id}_E-h$. Remarque : dès que $\mathrm{Iso}(E;F)\neq\emptyset$, $E$ est complet si et seulement si $F$ l'est (un isomorphisme bicontinu envoie suites de Cauchy sur suites de Cauchy et suites convergentes sur suites convergentes, dans les deux sens).

**Si on la retire.** Soit $E=F=c_{00}$ l'espace des suites réelles à support fini, muni de la norme $\norm{x}_1=\sum_n|x_n|$ (non complet), et $S(x_0,x_1,\dots)=(0,x_0,x_1,\dots)$ le décalage, qui est une isométrie : $\norm{S}=1$. Pour tout $t\neq0$, l'opérateur $\mathrm{Id}-tS$ n'est **pas surjectif** : résoudre $(\mathrm{Id}-tS)x=e_0$ (où $e_0=(1,0,0,\dots)$) donne $x_0=1$ et $x_n=t\,x_{n-1}$, donc $x_n=t^n\neq0$ pour tout $n$, ce qui n'est pas une suite à support fini. Or $\norm{(\mathrm{Id}-tS)-\mathrm{Id}}=|t|$ : toute boule centrée en $\mathrm{Id}\in\mathrm{Iso}(E;E)$ contient des non-inversibles, donc $\mathrm{Iso}(E;E)$ **n'est pas ouvert**. (Dans le complété $\ell^1$, $\mathrm{Id}-tS$ est inversible pour $|t|<1$, d'inverse $\sum_n t^nS^n$ : c'est bien la complétude qui manque.)

### H2 — Isomorphismes **bicontinus**

**Rôle.** On a besoin que $f_0^{-1}$ soit **continue** pour former $h=-f_0^{-1}g\in\mathcal L(E)$, mesurer $\norm{h}\le\norm{f_0^{-1}}\,\norm{g}$ et composer les inverses dans $\mathcal L$.

**Si on la retire.** Dans le cadre du théorème ($E$, $F$ de Banach), rien ne change : une bijection linéaire continue entre Banach a automatiquement un inverse continu ([[ch05-iso-bicontinu-automatique]]). L'hypothèse n'est donc qu'une précaution de définition ; elle ne deviendrait restrictive qu'hors du cadre de Banach, déjà exclu par H1.

## Idée de la preuve

On écrit $f_0+g=f_0\circ(\mathrm{Id}_E-h)$ avec $h=-f_0^{-1}g$ de norme $<1$, que l'on inverse par la série de Neumann $\sum_{n\ge0}h^n$. Les restes $\sum_{n\ge1}h^n$ et $\sum_{n\ge2}h^n$ sont en $O(\norm{g})$ et $O(\norm{g}^2)$ : continuité puis différentiabilité. Enfin $d\Psi=\Phi\circ\Psi$ avec $\Phi(u)=(g\mapsto-ugu)$ de classe $C^\infty$, et une récurrence donne $C^\infty$.

## Preuve

Si $\mathrm{Iso}(E;F)=\emptyset$, il n'y a rien à démontrer. Supposons-le non vide et fixons $f_0\in\mathrm{Iso}(E;F)$.

**Étape 1 : $\mathrm{Iso}(E;F)$ est ouvert.** Soit $g\in\mathcal L(E;F)$ tel que $\norm{f_0^{-1}}\,\norm{g}<1$. Posons $h=-f_0^{-1}\circ g\in\mathcal L(E)$ ; par la norme d'algèbre ([[ch05-lef-banach-norme-algebre]]), $\norm{h}\le\norm{f_0^{-1}}\,\norm{g}<1$. On a
$$
f_0+g=f_0\circ(\mathrm{Id}_E+f_0^{-1}g)=f_0\circ(\mathrm{Id}_E-h).
$$
Comme $E$ est un Banach, $\mathcal L(E)$ en est un, et $\sum_n\norm{h^n}\le\sum_n\norm{h}^n<+\infty$ ; la série $\sum_{n\ge0}h^n$ converge donc dans $\mathcal L(E)$ ([[ch05-banach-series-absolument-convergentes]]) et sa somme est l'inverse de $\mathrm{Id}_E-h$ dans $\mathcal L(E)$ ([[ch05-serie-neumann]]) : en effet $(\mathrm{Id}_E-h)\sum_{n=0}^Nh^n=\sum_{n=0}^Nh^n\,(\mathrm{Id}_E-h)=\mathrm{Id}_E-h^{N+1}\to\mathrm{Id}_E$. Ainsi $f_0+g$ est la composée de deux bijections linéaires continues d'inverses continus, donc
$$
f_0+g\in\mathrm{Iso}(E;F),\qquad (f_0+g)^{-1}=\Big(\sum_{n\ge0}h^n\Big)\circ f_0^{-1}\in\mathcal L(F;E).
$$
La boule ouverte de centre $f_0$ et de rayon $1/\norm{f_0^{-1}}$ (rayon $+\infty$ si $f_0^{-1}=0$, cas trivial $E=F=\{0\}$) est donc contenue dans $\mathrm{Iso}(E;F)$ : c'est un ouvert.

**Étape 2 : $\Psi$ est continue en $f_0$.** Avec les notations précédentes et $f=f_0+g$,
$$
f^{-1}-f_0^{-1}=\Big(\sum_{n\ge1}h^n\Big)f_0^{-1},\qquad\text{donc}\qquad \norm{f^{-1}-f_0^{-1}}\le\Big(\sum_{n\ge1}\norm{h}^n\Big)\norm{f_0^{-1}}=\frac{\norm{h}}{1-\norm{h}}\,\norm{f_0^{-1}}.
$$
Quand $f\to f_0$, $g\to0$, donc $\norm{h}\le\norm{f_0^{-1}}\,\norm{g}\to0$, et $f^{-1}\to f_0^{-1}$.

**Étape 3 : $\Psi$ est différentiable en $f_0$.** L'application $L:g\mapsto-f_0^{-1}\circ g\circ f_0^{-1}$ est linéaire de $\mathcal L(E;F)$ dans $\mathcal L(F;E)$, et continue car $\norm{L(g)}\le\norm{f_0^{-1}}^2\norm{g}$. Comme $f_0^{-1}g=-h$, on a $f_0^{-1}gf_0^{-1}=-hf_0^{-1}$, d'où
$$
f^{-1}-f_0^{-1}+f_0^{-1}gf_0^{-1}=\Big(\sum_{n\ge1}h^n\Big)f_0^{-1}-hf_0^{-1}=\Big(\sum_{n\ge2}h^n\Big)f_0^{-1},
$$
et donc
$$
\norm{\Psi(f_0+g)-\Psi(f_0)-L(g)}\le\frac{\norm{h}^2}{1-\norm{h}}\,\norm{f_0^{-1}}\le\frac{\norm{f_0^{-1}}^3}{1-\norm{f_0^{-1}}\,\norm{g}}\,\norm{g}^2=o(\norm{g}).
$$
Par définition ([[ch05-differentielle-def]]), $\Psi$ est différentiable en $f_0$ et $d\Psi_{f_0}(g)=-f_0^{-1}\circ g\circ f_0^{-1}$.

**Étape 4 : écriture de $d\Psi$ comme composée.** Soit
$$
\beta:\mathcal L(F;E)\times\mathcal L(F;E)\to\mathcal L\big(\mathcal L(E;F);\mathcal L(F;E)\big),\qquad \beta(u_1,u_2)=\big(g\mapsto u_1\circ g\circ u_2\big)
$$
(le « $L\times R$ » du poly). Elle est bilinéaire et continue car $\norm{\beta(u_1,u_2)}\le\norm{u_1}\,\norm{u_2}$. Soit $j:u\mapsto(-u,u)$, linéaire continue, et $\Phi=\beta\circ j$, c'est-à-dire $\Phi(u)=(g\mapsto-u\circ g\circ u)$. L'étape 3 dit exactement
$$
d\Psi=\Phi\circ\Psi .
$$

**Étape 5 : un lemme de composition.** *Si $u:V\to W$ et $v:W\to G$ (ouverts d'evn) sont de classe $C^k$, alors $v\circ u$ est de classe $C^k$.* Le poly l'utilise implicitement (« par récurrence ») ; on le prouve par récurrence sur $k$, pour toutes les applications à la fois. Pour $k=0$ : une composée de continues est continue. Si c'est vrai au rang $k-1\ge0$ et si $u$, $v$ sont $C^k$ : par la règle de la chaîne ([[ch05-composition-differentielles]]), $d(v\circ u)_x=dv_{u(x)}\circ du_x=c\big(dv\circ u(x),\,du(x)\big)$ où $c(A,B)=A\circ B$ est bilinéaire continue ($\norm{A\circ B}\le\norm{A}\,\norm{B}$). Une application bilinéaire continue est $C^\infty$ (sa différentielle $(a,b)\mapsto c(a,B)+c(A,b)$ dépend linéairement et continûment de $(A,B)$, [[ch05-differentielle-bilineaire]], et une application linéaire continue est $C^\infty$, [[ch05-lineaire-c-infini]]). Par hypothèse de récurrence $dv\circ u$ est $C^{k-1}$ ; $du$ est $C^{k-1}$ ; donc le couple $(dv\circ u,du)$ est $C^{k-1}$ (composante par composante, [[ch05-differentiabilite-composantes]]) et, encore par l'hypothèse de récurrence, $c\circ(dv\circ u,du)=d(v\circ u)$ est $C^{k-1}$. Donc $v\circ u$ est $C^k$. En particulier $\Phi=\beta\circ j$ est $C^\infty$.

**Étape 6 : récurrence.** $\Psi$ est $C^0$ (étape 2) et différentiable avec $d\Psi=\Phi\circ\Psi$ (étapes 3-4). Si $\Psi$ est de classe $C^k$, alors $d\Psi=\Phi\circ\Psi$ est $C^k$ (étape 5, $\Phi$ étant $C^\infty$), donc $\Psi$ est $C^{k+1}$ ([[ch05-classe-ck-def]]). Ainsi $\Psi$ est $C^k$ pour tout $k$ : elle est de classe $C^\infty$. $\square$

## Preuve à trous

Soit $f_0\in\mathrm{Iso}(E;F)$ et $g\in\mathcal L(E;F)$ avec $\norm{f_0^{-1}}\,\norm{g}<1$. On pose <trou indice="factoriser par f_0 à gauche">$h=-f_0^{-1}g$, de sorte que $f_0+g=f_0\circ(\mathrm{Id}_E-h)$ et $\norm{h}\le\norm{f_0^{-1}}\,\norm{g}<1$</trou>. Comme $E$ est complet, $\mathcal L(E)$ l'est, et <trou indice="série géométrique d'opérateurs">la série normalement convergente $\sum_{n\ge0}h^n$ converge et est l'inverse de $\mathrm{Id}_E-h$ (série de Neumann)</trou>. Donc $f_0+g\in\mathrm{Iso}(E;F)$, $(f_0+g)^{-1}=\big(\sum_{n\ge0}h^n\big)f_0^{-1}$ : $\mathrm{Iso}(E;F)$ est ouvert.

Avec $f=f_0+g$ : $f^{-1}-f_0^{-1}=\big(\sum_{n\ge1}h^n\big)f_0^{-1}$, de norme $\le\frac{\norm{h}}{1-\norm{h}}\norm{f_0^{-1}}\to0$ : $\Psi$ est continue. Puis, comme $f_0^{-1}gf_0^{-1}=-hf_0^{-1}$,
$$
f^{-1}-f_0^{-1}+f_0^{-1}gf_0^{-1}=\Big(\sum_{n\ge2}h^n\Big)f_0^{-1},
$$
dont la norme est <trou>$\le\frac{\norm{h}^2}{1-\norm{h}}\norm{f_0^{-1}}=O(\norm{g}^2)=o(\norm{g})$</trou> : $d\Psi_{f_0}(g)=-f_0^{-1}gf_0^{-1}$.

Enfin <trou indice="exprimer f ↦ dΨ_f à l'aide de Ψ">$d\Psi=\Phi\circ\Psi$ avec $\Phi(u)=(g\mapsto-ugu)$, composée d'une application linéaire continue et d'une bilinéaire continue, donc $C^\infty$</trou> ; par récurrence, si $\Psi$ est $C^k$ alors $d\Psi$ est $C^k$, donc $\Psi$ est $C^{k+1}$ : $\Psi$ est $C^\infty$. $\square$

## Exemples

* **Dimension 1.** $E=F=\R$ : $\mathcal L(\R;\R)\simeq\R$, $\mathrm{Iso}(\R;\R)\simeq\R^*$ (ouvert), $\Psi(x)=1/x$ et $d\Psi_x(g)=-x^{-1}gx^{-1}=-g/x^2$ : on retrouve $(1/x)'=-1/x^2$.
* **Matrices.** $E=F=\R^n$ : $\mathrm{Iso}(\R^n;\R^n)=\GL_n(\R)$. Prenons $n=2$, $f_0=I_2$, $g=\begin{pmatrix}0&\eps\\ \eps&0\end{pmatrix}$ avec $|\eps|<1$. Alors $(I_2+g)^{-1}=\frac{1}{1-\eps^2}\begin{pmatrix}1&-\eps\\ -\eps&1\end{pmatrix}$ tandis que l'approximation linéaire vaut $I_2-g=\begin{pmatrix}1&-\eps\\ -\eps&1\end{pmatrix}$. L'erreur est $\frac{\eps^2}{1-\eps^2}\begin{pmatrix}1&-\eps\\ -\eps&1\end{pmatrix}=O(\eps^2)$, et c'est bien $\sum_{n\ge2}(-g)^n=g^2(I_2+g)^{-1}=\eps^2(I_2+g)^{-1}$ puisque $g^2=\eps^2I_2$.
* **Différentielle seconde.** En dérivant $f\mapsto d\Psi_f(g_1)=-\Psi(f)\,g_1\,\Psi(f)$ dans la direction $g_2$ (Leibniz, [[ch05-formule-leibniz]]) : $d^2\Psi_f(g_2,g_1)=f^{-1}g_2f^{-1}g_1f^{-1}+f^{-1}g_1f^{-1}g_2f^{-1}$, symétrique comme le veut le lemme de Schwarz ([[ch05-lemme-schwarz]]). En dimension 1 : $d^2\Psi_x(g,g)=2g^2/x^3$, et $(1/x)''=2/x^3$.

## Pièges

* > ⚠️ La différentielle est $-f^{-1}\circ g\circ f^{-1}$ et **pas** $-g\circ f^{-2}$ ni $-f^{-2}\circ g$ : la composition n'est pas commutative (et $f^{-2}$ n'a même pas de sens si $E\neq F$ : $g\in\mathcal L(E;F)$, $f^{-1}\in\mathcal L(F;E)$, seul l'ordre $f^{-1}gf^{-1}$ est bien typé).
* Moyen mnémotechnique (une fois la différentiabilité acquise) : dériver $\Psi(f)\circ f=\mathrm{Id}_E$ par Leibniz donne $d\Psi_f(g)\circ f+f^{-1}\circ g=0$. Mais ce calcul **suppose** $\Psi$ différentiable : il ne remplace pas la preuve.
* La condition d'ouverture est $\norm{f_0^{-1}}\,\norm{g}<1$ (ou $\norm{f_0^{-1}g}<1$), pas $\norm{g}<1$ ni $\norm{g}<\norm{f_0}$.
* La complétude est indispensable (contre-exemple $c_{00}$ ci-dessus) ; en dimension finie elle est automatique, et l'on peut aussi voir $\GL_n(\R)=\{\det\neq0\}$ ouvert et $A\mapsto A^{-1}=\frac{1}{\det A}{}^t\mathrm{com}(A)$ rationnelle donc $C^\infty$ ; la preuve par Neumann, elle, marche en toute dimension.
* Ce théorème est l'ingrédient clé de la régularité de l'inverse dans l'inversion locale ([[ch06-inversion-locale]]) : $d(f^{-1})_y=\Psi\big(df_{f^{-1}(y)}\big)$.
