---
id: ch09-sous-variete-equation-valeur-reguliere
type: proposition
chapter: 9
title: Image réciproque d'une valeur régulière (sous-variété définie par une équation)
ref: Proposition IX.4.1
page: 152
importance: 3
depends: [ch06-inversion-locale, ch09-point-critique-valeur-reguliere-def, ch09-sous-variete-def, ch09-immersion-submersion-def]
tags: [sous-variete, equation, valeur-reguliere, submersion, inversion-locale, niveau]
---
## Intuition

> 💡 $N$ inconnues réelles, $N-m$ équations « indépendantes » : il reste $m$ degrés de liberté. L'ensemble des solutions de $f(x)=a$ (avec $f:\R^N\supset V\to\R^{N-m}$) est donc, en général, un objet de dimension $m$. Le mot « indépendantes » se traduit par : la différentielle $df_p$ est **surjective** (les $N-m$ équations linéarisées sont indépendantes). C'est la version non linéaire du théorème du rang : $\ker df_p$ est de dimension $m$, et l'ensemble de niveau ressemble près de $p$ à $p+\ker df_p$.

Vocabulaire ([[ch09-point-critique-valeur-reguliere-def]]) : $p$ est un **point critique** de $f$ si $df_p$ n'est pas surjective ; $a$ est une **valeur régulière** si aucun point de $f^{-1}(\{a\})$ n'est critique (c'est le cas en particulier si $f^{-1}(\{a\})=\emptyset$). Une **sous-variété** est définie dans [[ch09-sous-variete-def]].

C'est **l'outil n°1** pour montrer qu'un ensemble défini par des équations est une sous-variété (sphère, quadriques, tore, groupes de matrices...).

## Énoncé

**Proposition (poly, Proposition IX.4.1, p. 152).** Soient $N$ et $m$ deux entiers, $N>m$. Soit $f:V\to\R^{N-m}$ une fonction de classe $C^k$ définie sur un ouvert $V$ de $\R^N$.
1. Soit $p\in V$ tel que $df_p$ soit surjective. Posons $a=f(p)$. Alors il existe un voisinage ouvert $V_1$ de $p$ dans $V$ tel que $f^{-1}(\{a\})\cap V_1$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\R^N$.
2. Soit $a$ une valeur régulière de $f$. Alors $S=f^{-1}(\{a\})$ est une sous-variété de dimension $m$ et de classe $C^k$ de $\R^N$.

## Hypothèses

### H1 — $f$ de classe $C^k$ ($k\ge1$) sur un ouvert $V$

**Rôle.** Le théorème d'inversion locale ([[ch06-inversion-locale]]) exige une application $C^1$ (au moins) sur un ouvert ; la classe $C^k$ de $f$ se transmet au paramétrage construit.

**Si on la retire.** La surjectivité de la différentielle **en un seul point**, sans continuité de $df$, ne suffit pas. Soit $f:\R^2\to\R$, $f(x,y)=y-2x^2\sin(y/x^2)$ si $x\neq0$, $f(0,y)=y$. Comme $|f(x,y)-y|\le2x^2$, $f$ est différentiable en $(0,0)$ avec $df_{(0,0)}=(0,1)$, surjective (et même différentiable partout ; mais $\partial f/\partial y=1-2\cos(y/x^2)$ n'est pas continue en $(0,0)$). Pour $x\neq0$, en posant $s=y/x^2$, $f(x,y)=0\iff s=2\sin s\iff s\in\{0,s^*,-s^*\}$, où $s^*\approx1.90$ est l'unique racine de $s=2\sin s$ dans $]0;2[$ (il n'y en a pas pour $|s|\ge 2$, et $s\mapsto2\sin s-s$ est concave sur $]0;\pi[$, positive près de $0$, négative en $2$). Donc
$$
f^{-1}(\{0\})=\{y=0\}\cup\{y=s^*x^2,\ x\neq0\}\cup\{y=-s^*x^2,\ x\neq0\},
$$
trois courbes passant par l'origine : dans tout voisinage $V_1$ de $(0,0)$, $f^{-1}(\{0\})\cap V_1$ privé de l'origine contient $6$ demi-branches séparées (par la fonction continue $(x,y)\mapsto(\mathrm{signe}(x),y/x^2)$), et le comptage de composantes connexes de [[ch09-contre-ex-croix]] montre que ce n'est pas une sous-variété.

### H2 — (point 1) $df_p$ surjective

**Rôle.** C'est elle qui rend inversible la différentielle de l'application auxiliaire $\Psi$ de la preuve.

**Si on la retire.** $f(x,y)=xy$, $p=(0,0)$, $a=0$ : $df_{(0,0)}=0$ n'est pas surjective, et $f^{-1}(\{0\})$ est la croix, dont la trace sur un voisinage de $(0,0)$, si petit soit-il, n'est jamais une sous-variété ([[ch09-contre-ex-croix]]). De même le cône $\{x^2+y^2-z^2=0\}$ en $(0,0,0)$ (poly, Exercice IX.7.12).

### H3 — (point 2) $a$ valeur régulière : $df_p$ surjective en **tout** $p\in f^{-1}(\{a\})$

**Rôle.** Le point 1 s'applique alors en chaque point de $S$, ce qui donne un paramétrage local partout.

**Si on la retire.** Pour $f(x,y)=x^2-y^2$ et $a=0$, seul $(0,0)$ est critique dans $f^{-1}(\{0\})$, mais cela suffit : $f^{-1}(\{0\})$ est la réunion des deux droites $y=\pm x$, pas une sous-variété. En revanche, $f^{-1}(\{0\})\setminus\{(0,0)\}=f|_{V}^{-1}(\{0\})$ avec $V=\R^2\setminus\{(0,0)\}$ en est une : on peut toujours **retirer les points critiques** de l'ouvert de départ.

### H4 — $N>m$

**Rôle.** Hypothèse de confort : elle assure que $\R^{N-m}$ n'est pas réduit à $\{0\}$.

**Si on la retire.** Pour $m=N$, $f$ est à valeurs dans $\R^0=\{0\}$, toute différentielle est surjective et $f^{-1}(\{0\})=V$ est un ouvert, qui est bien une sous-variété de dimension $N$ ([[ch09-ex-ouvert-sous-variete]]) : l'énoncé reste vrai.

## Idée de la preuve

On complète $f$ par $m$ coordonnées linéaires prises le long de $E=\ker df_p$ : $\Psi(p+v+w)=(\varphi(v),f(p+v+w))$ a une différentielle inversible en $p$, donc est un difféomorphisme local. Dans les coordonnées $\Psi$, l'ensemble $\{f=a\}$ devient $\{(u,a)\}$ : $x(u)=\Psi^{-1}(u,a)$ est un paramétrage local.

## Preuve

**Point 1.** Soit $p\in V$ tel que $df_p$ soit surjective, et $a=f(p)$. Soit $E=\ker df_p\subset\R^N$ et $F$ un supplémentaire de $E$. Par le théorème du rang, $\dim E=N-(N-m)=m$ ; soit $\varphi:E\to\R^m$ un isomorphisme linéaire. Tout point de $\R^N$ s'écrit de façon unique $p+v+w$ avec $v\in E$, $w\in F$ ; on définit
$$
\Psi:V\to\R^m\times\R^{N-m},\qquad p+v+w\longmapsto\big(\varphi(v),\ f(p+v+w)\big).
$$
$\Psi$ est de classe $C^k$ (les applications $p+v+w\mapsto v$ et $p+v+w\mapsto w$ sont affines) et, pour $v\in E$, $w\in F$,
$$
d\Psi_p(v+w)=\big(\varphi(v),\ df_p(v+w)\big)=\big(\varphi(v),\ df_p(w)\big),
$$
car $df_p(v)=0$. Par le théorème du rang, $df_p|_F:F\to\R^{N-m}$ est injective (son noyau est $F\cap E=\{0\}$) et surjective ($df_p(\R^N)=df_p(F)$) : c'est un isomorphisme. Donc $d\Psi_p$ est surjective (pour $(\alpha,\beta)$ donné, prendre $v=\varphi^{-1}(\alpha)$, $w=(df_p|_F)^{-1}(\beta)$), donc un isomorphisme de $\R^N$ sur $\R^m\times\R^{N-m}$ par égalité des dimensions.

Par le théorème d'inversion locale ([[ch06-inversion-locale]]), $\Psi$ est un $C^k$-difféomorphisme d'un voisinage ouvert de $p$ sur un voisinage ouvert de $\Psi(p)=(0,a)$ ; ce dernier contient un produit $U\times W$, avec $U$ ouvert de $\R^m$ contenant $0$ et $W$ ouvert de $\R^{N-m}$ contenant $a$ ; on note $V_1\subset V$ l'image réciproque de $U\times W$, de sorte que $\Psi:V_1\to U\times W$ est un $C^k$-difféomorphisme.

Soit $\iota_1:U\to U\times W$, $u\mapsto(u,a)$, et $x=\Psi^{-1}\circ\iota_1:U\to V_1$. Notons $p_2:\R^m\times\R^{N-m}\to\R^{N-m}$ la seconde projection ; par construction $f=p_2\circ\Psi$ sur $V_1$.
* $x$ est de classe $C^k$ (composée).
* $f(x(u))=p_2(\Psi(\Psi^{-1}(u,a)))=a$, donc $x(U)\subset f^{-1}(\{a\})\cap V_1$. Réciproquement, si $z\in V_1$ et $f(z)=a$, alors $\Psi(z)=(u,a)$ avec $u\in U$, donc $z=x(u)$. Ainsi $x(U)=f^{-1}(\{a\})\cap V_1$.
* $x$ est injective, d'inverse $z\mapsto p_1(\Psi(z))$ ($p_1$ = première projection), continu : $x$ est un homéomorphisme de $U$ sur $f^{-1}(\{a\})\cap V_1$.
* $dx_u=d(\Psi^{-1})_{(u,a)}\circ d(\iota_1)_u$, où $d(\iota_1)_u:h\mapsto(h,0)$ est injective et $d(\Psi^{-1})_{(u,a)}$ un isomorphisme : $x$ est une immersion.

Ainsi $x$ est un paramétrage de $S_1=f^{-1}(\{a\})\cap V_1$ **en chacun de ses points** (avec l'ouvert $V_1$) : $S_1$ est une sous-variété de dimension $m$ et de classe $C^k$ ([[ch09-sous-variete-def]]).

**Point 2.** Si $a$ est une valeur régulière, $df_p$ est surjective pour tout $p\in S=f^{-1}(\{a\})$. Pour un tel $p$, la construction précédente fournit un ouvert $V_1\ni p$ et un homéomorphisme $x:U\to f^{-1}(\{a\})\cap V_1=V_1\cap S$, $C^k$ et immersif : c'est un paramétrage local de $S$ en $p$. Donc $S$ est une sous-variété de dimension $m$ et de classe $C^k$. $\square$

## Preuve à trous

**Point 1.** Soit $E=\ker df_p$ ; par le théorème du rang, <trou>$\dim E=m$</trou>. Avec $F$ supplémentaire de $E$ et $\varphi:E\to\R^m$ isomorphisme, on pose <trou indice="compléter f par m coordonnées">$\Psi(p+v+w)=(\varphi(v),f(p+v+w))$</trou>. Alors $d\Psi_p(v+w)=(\varphi(v),df_p(w))$ est un isomorphisme car <trou>$df_p|_F:F\to\R^{N-m}$ est un isomorphisme (injective car $F\cap E=\{0\}$, surjective car $df_p(\R^N)=df_p(F)$)</trou>.

Par inversion locale, $\Psi:V_1\to U\times W$ est un $C^k$-difféomorphisme, avec $(0,a)\in U\times W$. Comme $f=p_2\circ\Psi$, le paramétrage est <trou indice="dans les coordonnées Ψ, {f=a} est une tranche horizontale">$x(u)=\Psi^{-1}(u,a)$, et $x(U)=f^{-1}(\{a\})\cap V_1$</trou> ; $x$ est $C^k$, homéomorphisme (inverse $p_1\circ\Psi$) et immersion (composée de $h\mapsto(h,0)$ et d'un isomorphisme).

**Point 2.** <trou>On applique le point 1 en chaque $p\in f^{-1}(\{a\})$, ce qui est possible car $a$ est valeur régulière</trou>. $\square$

## Exemples

* **Sphère.** $f(x)=\norm x^2$ sur $\R^{n+1}\setminus\{0\}$, $df_x(v)=2\langle x,v\rangle$ : $1$ est valeur régulière, $\mathbb S^n=f^{-1}(\{1\})$ est une sous-variété de dimension $n$ ([[ch09-ex-sphere]]).
* **Hyperboloïdes et cône.** $f(x,y,z)=x^2+y^2-z^2$ sur $\R^3$, $df_{(x,y,z)}=(2x,2y,-2z)$ ne s'annule qu'en $0$, et $f(0)=0$. Donc toute valeur $a\neq0$ est régulière : $\{f=1\}$ (hyperboloïde à une nappe) et $\{f=-1\}$ (à deux nappes) sont des surfaces. Pour $a=0$, le théorème ne s'applique pas, et le cône $\{f=0\}$ n'est pas une sous-variété en son sommet (poly, Exercice IX.7.12).
* **Groupe spécial linéaire.** $\det:\Mat_n(\R)\simeq\R^{n^2}\to\R$, $d(\det)_A(H)=\mathrm{tr}(\mathrm{com}(A)^{\mathsf T}H)$ ; en $A\in SL_n(\R)$, $d(\det)_A(A)=\mathrm{tr}(\mathrm{com}(A)^{\mathsf T}A)=n\det A=n\neq0$, donc $d(\det)_A$ est surjective : $1$ est valeur régulière et $SL_n(\R)=\det^{-1}(\{1\})$ est une sous-variété de dimension $n^2-1$.

## Pièges

* > ⚠️ La **réciproque est fausse** : $f^{-1}(\{a\})$ peut être une sous-variété avec $a$ valeur critique. Ex. : $f(x,y)=(x^2+y^2-1)^2$, $df$ s'annule sur tout le cercle unité, et pourtant $f^{-1}(\{0\})$ est le cercle. Un point critique sur la fibre **n'entraîne pas** que la fibre soit singulière ; il empêche seulement d'appliquer le théorème.
* > ⚠️ La dimension obtenue est $m=N-(\text{nombre d'équations})$, pas le nombre d'équations.
* Vérifier la surjectivité **sur la fibre** $f^{-1}(\{a\})$ seulement : les points critiques hors de la fibre sont sans importance (pour $\norm x^2$, le point critique $0$ n'est pas dans $f^{-1}(\{1\})$).
* Pour $f$ à valeurs réelles ($N-m=1$), « $df_p$ surjective » signifie simplement « $df_p\neq0$ », i.e. $\nabla f(p)\neq0$.
* Le point 1 ne dit **pas** que $f^{-1}(\{a\})$ tout entier est une sous-variété, seulement sa trace sur un petit voisinage de $p$.
