---
id: ch05-taylor-young
type: theorem
chapter: 5
title: Formule de Taylor-Young
ref: Théorème V.5.13
page: 111
importance: 3
depends: [ch05-differentielle-def, ch05-differentielle-ordre-p-symetrique, ch05-accroissements-finis, ch05-derivee-forme-diagonale, ch05-linearite-differentielle, ch05-lemme-schwarz, ch05-composition-differentielles, ch05-petit-o-def]
tags: [taylor, young, developpement-limite, petit-o, ordre-superieur, local]
---
## Intuition

> 💡 Près de $a$, $f(a+h)$ ressemble à son polynôme de Taylor $f(a)+df_a(h)+\frac{1}{2!}d^2f_a(h,h)+\cdots+\frac{1}{p!}d^pf_a(h,\dots,h)$, avec une erreur **négligeable devant $\norm{h}^p$** quand $h\to0$. C'est la généralisation à l'ordre $p$ de la définition même de la différentielle (qui est le cas $p=1$ : $f(a+h)=f(a)+df_a(h)+o(\norm h)$).

C'est la formule de Taylor la plus économe en hypothèses : on ne demande la différentielle $p$-ième **qu'au point $a$**, sans borne ni continuité, et $E$, $F$ sont des evn quelconques. En échange, la conclusion est seulement **asymptotique** (un $o$, sans constante explicite), contrairement à Taylor-Lagrange ([[ch05-taylor-lagrange]]) et au reste intégral ([[ch05-taylor-reste-integral]]).

Vocabulaire. $\varphi(h)=o(\norm h^p)$ signifie : pour tout $\eps>0$ il existe $\eta>0$ tel que $\norm h\le\eta\Rightarrow\norm{\varphi(h)}\le\eps\norm h^p$ ([[ch05-petit-o-def]]). « $f$ est $(p-1)$ fois différentiable sur $U$ » : $f,df,\dots,d^{p-2}f$ sont différentiables en tout point de $U$, de sorte que $d^{p-1}f:U\to\mathcal L(E;\dots;\mathcal L(E;F))$ existe ; « $f$ est $p$ fois différentiable en $a$ » : de plus, $d^{p-1}f$ est différentiable au point $a$, et $d^pf_a=d(d^{p-1}f)_a$, vue comme application $p$-linéaire continue (convention $d^pf_a(h_1,\dots,h_p)=d^pf_a(h_1)(h_2)\cdots(h_p)$).

## Énoncé

**Théorème (poly, Théorème V.5.13, p. 111).** Soit $p\ge1$. Soit $f$ une fonction $p-1$-différentiable d'un ouvert $U$ d'un espace vectoriel normé $E$ à valeurs dans un espace vectoriel normé $F$. Supposons de plus que $f$ soit $p$-différentiable en $a\in U$. On a alors
$$
\Big\|f(a+h)-f(a)-df_a(h)-\frac{d^2f_a(h,h)}{2!}-\cdots-\frac{d^pf_a(h,h,\dots,h)}{p!}\Big\|_F=o(\norm h_E^p).
$$

## Hypothèses

### H1 — $f$ est $(p-1)$ fois différentiable sur $U$

**Rôle.** Elle est nécessaire pour que $d^pf_a=d(d^{p-1}f)_a$ ait un sens ($d^{p-1}f$ doit être défini au voisinage de $a$). Dans la preuve (pour $p\ge2$), elle rend $f$ différentiable sur $U$, donc le reste $g$ différentiable au voisinage de $0$, ce qui permet d'appliquer le théorème des accroissements finis à $g$, et elle permet d'appliquer l'hypothèse de récurrence à $df$.

**Si on la retire.** On ne peut pas la supprimer (l'énoncé perd son sens), mais on peut la **localiser** : il suffit que $f$ soit $(p-1)$ fois différentiable sur un voisinage ouvert $V$ de $a$ (appliquer le théorème à $f|_V$, la conclusion ne portant que sur les petits $h$).

### H2 — $f$ est $p$ fois différentiable au point $a$

**Rôle.** C'est elle qui fournit le terme $\frac{1}{p!}d^pf_a(h,\dots,h)$ ; dans la récurrence, elle dit que $df$ est $(p-1)$ fois différentiable en $a$.

**Si on la retire.** $E=F=\R$, $p=2$, $f(x)=x\abs x$ : $f$ est $C^1$ avec $f'(x)=2\abs x$, non dérivable en $0$, donc $f$ n'est pas $2$ fois différentiable en $0$. Et il n'existe **aucun** développement $f(h)=c_0+c_1h+c_2h^2+o(h^2)$ : l'ordre $1$ impose $c_0=f(0)=0$, $c_1=f'(0)=0$, puis $\frac{h\abs h}{h^2}=\mathrm{signe}(h)$ devrait tendre vers $c_2$, ce qui est impossible ($\pm1$ selon le côté).

### H3 — $E$ et $F$ evn quelconques, $p\ge1$

**Rôle.** Absence d'hypothèse à remarquer : ni complétude (pas d'intégrale), ni dimension finie ; la preuve n'utilise que la définition de la différentielle et le TAF ([[ch05-accroissements-finis]]), valables dans tout evn.

**Si on la retire.** Sans objet. Pour $p=0$ l'énoncé n'a pas de sens dans le poly (on aurait « $f(a+h)-f(a)=o(1)$ », c'est-à-dire la continuité de $f$ en $a$).

## Idée de la preuve

Récurrence sur $p$ ; $p=1$ est la définition de $df_a$. Pour $p\ge2$, le reste $g(h)$ a pour différentielle $dg_h=df_{a+h}-df_a-\sum_{i=1}^{p-1}\frac1{i!}d^i(df)_a(h,\dots,h)$ (grâce à la symétrie des $d^jf_a$), qui est $o(\norm h^{p-1})$ par hypothèse de récurrence appliquée à $df$ ; le TAF donne alors $\norm{g(h)}\le\eps\norm h^p$.

## Preuve

**Cas $p=1$.** L'hypothèse est que $f$ est différentiable en $a$, et la conclusion $\norm{f(a+h)-f(a)-df_a(h)}=o(\norm h)$ est exactement la définition de la différentielle ([[ch05-differentielle-def]]).

**Hérédité.** Soit $p\ge2$ ; supposons le théorème vrai au rang $p-1$, **pour tous** evn $E'$, $F'$ et toute fonction. Soit $f$ comme dans l'énoncé.

*Symétrie.* Pour $2\le j\le p$, $d^jf_a$ est $j$-linéaire **symétrique** (théorème V.5.5, [[ch05-differentielle-ordre-p-symetrique]]). Remarque : le poly énonce V.5.5 pour $f$ de classe $C^{j-1}$ ; ici on sait seulement que $f$ est $(j-1)$ fois différentiable au voisinage de $a$ et $d^{j-1}f$ différentiable en $a$. Cela suffit : la preuve du lemme de Schwarz ([[ch05-lemme-schwarz]]) n'utilise que la différentiabilité de $f$ au voisinage de $a$ et celle de $df$ en $a$ (inégalité (V.5.1) et accroissements finis), jamais la continuité de $df$. Appliquée à $d^{j-2}f$, elle donne la symétrie de $d^jf_a$ en ses deux premiers arguments ; et $d^jf_a(h_1)=d(d^{j-1}f)_a(h_1)$ est symétrique en ses $j-1$ derniers arguments car c'est la dérivée d'une application à valeurs dans le sous-espace fermé des formes $(j-1)$-linéaires symétriques (par récurrence sur $j$, $d^{j-1}f_x$ est symétrique pour tout $x$ voisin de $a$). Ces transpositions engendrant le groupe symétrique, $d^jf_a$ est symétrique.

*Différentielle du reste.* Soit $V=\{h\in E:\ a+h\in U\}$, ouvert contenant $0$, et
$$
g(h)=f(a+h)-f(a)-df_a(h)-\frac{d^2f_a(h,h)}{2!}-\cdots-\frac{d^pf_a(h,\dots,h)}{p!},\qquad h\in V.
$$
Pour $1\le j\le p$, posons $\phi_j(h)=d^jf_a(h,\dots,h)$. Comme $d^jf_a$ est $j$-linéaire continue et symétrique, $\phi_j$ est différentiable et ([[ch05-derivee-forme-diagonale]])
$$
d(\phi_j)_h(k)=d^jf_a(k,h,\dots,h)+d^jf_a(h,k,h,\dots,h)+\cdots+d^jf_a(h,\dots,h,k)=j\,d^jf_a(h,\dots,h,k).
$$
Puisque $p\ge2$, $f$ est différentiable sur $U$, donc $h\mapsto f(a+h)$ est différentiable sur $V$ de différentielle $df_{a+h}$ ([[ch05-composition-differentielles]]). Par linéarité de la différentielle ([[ch05-linearite-differentielle]]), $g$ est différentiable sur $V$ et, pour $k\in E$,
$$
dg_h(k)=df_{a+h}(k)-df_a(k)-\sum_{j=2}^p\frac{j}{j!}\,d^jf_a(h,\dots,h,k)=df_{a+h}(k)-df_a(k)-\sum_{j=2}^p\frac{d^jf_a(h,\dots,h,k)}{(j-1)!}.
$$

*Hypothèse de récurrence.* L'application $df:U\to\mathcal L(E;F)$ est $(p-2)$ fois différentiable sur $U$ et $(p-1)$ fois différentiable en $a$, car $d^i(df)=d^{i+1}f$ pour tout $i$ (récurrence immédiate : $d^{i+1}(df)=d(d^i(df))=d(d^{i+1}f)=d^{i+2}f$). Le rang $p-1$ appliqué à $df$ (à valeurs dans l'evn $F'=\mathcal L(E;F)$) donne
$$
R(h):=df_{a+h}-df_a-\sum_{i=1}^{p-1}\frac{d^{i+1}f_a(h,\dots,h,\cdot)}{i!}\quad\text{vérifie}\quad\norm{R(h)}_{\mathcal L(E;F)}=o(\norm h^{p-1}),
$$
où $d^{i+1}f_a(h,\dots,h,\cdot)=d^i(df)_a(h,\dots,h)\in\mathcal L(E;F)$ ($i$ fois $h$). En posant $j=i+1$, on reconnaît exactement $dg_h=R(h)$.

*Accroissements finis.* Soit $\eps>0$. Il existe $\eta>0$ tel que la boule ouverte $B(0,\eta)$ soit contenue dans $V$ et que $\norm{dg_x}\le\eps\norm x^{p-1}$ pour $\norm x<\eta$. Soit $h$ avec $\norm h<\eta$ : le segment $[0,h]$ est dans la boule (convexe), et pour $t\in[0,1]$, $\norm{dg_{th}}\le\eps\,t^{p-1}\norm h^{p-1}\le\eps\norm h^{p-1}$. Le théorème des accroissements finis ([[ch05-accroissements-finis]]) donne, comme $g(0)=0$,
$$
\norm{g(h)}_F=\norm{g(h)-g(0)}_F\le\sup_{t\in[0,1]}\norm{dg_{th}}\,\norm h\le\eps\norm h^p .
$$
Ainsi $g(h)=o(\norm h^p)$, ce qui achève la récurrence. $\square$

## Preuve à trous

Récurrence sur $p$ ; pour $p=1$, <trou>c'est la définition de la différentiabilité de $f$ en $a$</trou>. Pour $p\ge2$, on pose $g(h)=f(a+h)-f(a)-\sum_{j=1}^p\frac{1}{j!}d^jf_a(h,\dots,h)$. Comme $d^jf_a$ est $j$-linéaire **symétrique**, la différentielle de $h\mapsto d^jf_a(h,\dots,h)$ est <trou indice="dériver une forme multilinéaire sur la diagonale">$k\mapsto j\,d^jf_a(h,\dots,h,k)$</trou>, d'où
$$
dg_h=df_{a+h}-df_a-\sum_{j=2}^p\frac{d^jf_a(h,\dots,h,\cdot)}{(j-1)!}.
$$
On reconnaît <trou indice="appliquer le rang p-1 à quelle fonction ?">le reste de Taylor-Young à l'ordre $p-1$ de $df$ en $a$ (car $d^i(df)=d^{i+1}f$), donc $\norm{dg_h}=o(\norm h^{p-1})$ par hypothèse de récurrence</trou>. Ainsi, pour $\eps>0$, il existe $\eta>0$ tel que $\norm{dg_x}\le\eps\norm x^{p-1}$ si $\norm x<\eta$, et <trou indice="g(0)=0 et la boule est convexe">le théorème des accroissements finis sur le segment $[0,h]$ donne $\norm{g(h)}=\norm{g(h)-g(0)}\le\eps\norm h^{p-1}\cdot\norm h=\eps\norm h^p$</trou> pour $\norm h<\eta$ : $g(h)=o(\norm h^p)$. $\square$

## Exemples

* **Deux variables.** $f(u,v)=e^u\cos v$ en $a=0$, $p=2$ : $f_u=e^u\cos v$, $f_v=-e^u\sin v$, $f_{uu}=e^u\cos v$, $f_{uv}=-e^u\sin v$, $f_{vv}=-e^u\cos v$ ; en $0$ : $df_0(h)=u$ et $d^2f_0(h,h)=u^2-v^2$. Donc
$$
e^u\cos v=1+u+\frac{u^2-v^2}{2}+o(\norm{(u,v)}^2),
$$
ce que confirme le produit des développements $e^u=1+u+\frac{u^2}2+o(u^2)$ et $\cos v=1-\frac{v^2}2+o(v^2)$.
* **Inverse d'opérateur à l'ordre 2.** Pour $\Psi(f)=f^{-1}$ ([[ch05-inversion-c-infini]]), $d^2\Psi_{f_0}(g,g)=2f_0^{-1}gf_0^{-1}gf_0^{-1}$, donc
$$
(f_0+g)^{-1}=f_0^{-1}-f_0^{-1}gf_0^{-1}+f_0^{-1}gf_0^{-1}gf_0^{-1}+o(\norm g^2).
$$
Vérification directe : avec $h=-f_0^{-1}g$, l'erreur est $\big(\sum_{n\ge3}h^n\big)f_0^{-1}$, de norme $\le\frac{\norm h^3}{1-\norm h}\norm{f_0^{-1}}=O(\norm g^3)$ (et $h^2f_0^{-1}=f_0^{-1}gf_0^{-1}gf_0^{-1}$).
* **Extremum local.** Si $df_a=0$ et $d^2f_a(h,h)\ge c\norm h^2$ avec $c>0$, Taylor-Young à l'ordre $2$ donne $f(a+h)-f(a)\ge\frac c2\norm h^2-\frac c4\norm h^2>0$ pour $0<\norm h$ assez petit : $a$ est un minimum local strict. Ex. : $f(x,y)=x^2+xy+y^2$ en $0$, $d^2f_0(h,h)=2(u^2+uv+v^2)\ge u^2+v^2$ (car $u^2+2uv+v^2\ge0$).

## Pièges

* > ⚠️ Le $o(\norm h^p)$ est **local et non quantitatif** : il ne donne aucune borne pour un $h$ donné, et il n'est pas uniforme en $a$. Pour une majoration explicite, utiliser Taylor-Lagrange ([[ch05-taylor-lagrange]]).
* La réciproque est fausse : avoir un développement $f(a+h)=P(h)+o(\norm h^p)$ n'entraîne pas que $f$ soit $p$ fois différentiable en $a$ dès $p\ge2$. Exemple $f(x)=x^3\sin(1/x)$, $f(0)=0$ : $f(h)=o(h^2)$, mais $f'(h)/h=3h\sin(1/h)-\cos(1/h)$ n'a pas de limite, donc $f'$ n'est pas dérivable en $0$.
* Hypothèse « $p$ fois différentiable **en $a$** » : elle sous-entend $d^{p-1}f$ défini **au voisinage** de $a$ (H1) ; ne pas croire qu'une information au seul point $a$ suffit.
* Le terme d'ordre $2$ est $\frac12d^2f_a(h,h)=\frac12\sum_{i,j}\frac{\partial^2f}{\partial x_i\partial x_j}(a)h_ih_j$ : ne pas oublier le $\frac12$ ni le facteur $2$ des termes croisés.
