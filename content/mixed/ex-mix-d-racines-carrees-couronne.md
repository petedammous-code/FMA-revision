---
id: ex-mix-d-racines-carrees-couronne
type: exercise
chapters: [6, 5, 2, 3]
title: Racines carrées dans l'algèbre des fonctions holomorphes bornées d'une couronne
source: "Inventé (idée classique des algèbres de Banach : l'ensemble des carrés inversibles est ouvert, et sa topologie reflète celle du domaine ; cf. Rudin, *Functional Analysis*, ch. 10, pour le cadre général)"
difficulty: 3
time: 50
tools: [ch03-weierstrass, ch05-differentielle-bilineaire, ch05-lineaire-c-infini, ch06-inversion-locale, ch06-diffeomorphisme-def, ch02-indice-def, ch02-indice-invariance-homotopie, ch02-indice-cercle, ch01-derivee-f-rond-gamma, ch02-logarithme-determination-principale-def, ch03-montel]
---
## Énoncé

Soient $0<r<1<R$ et $A=\{z\in\C : r<|z|<R\}$. On note $E$ l'espace des fonctions holomorphes **bornées** sur $A$, muni de la norme $\norm f=\sup_{z\in A}|f(z)|$, puis
$$
\mathcal U=\{f\in E : \inf_{z\in A}|f(z)|>0\},\qquad S:E\to E,\quad S(f)=f^2 .
$$
On note $\iota\in E$ la fonction $\iota(z)=z$, et l'on dit que $g\in E$ est un **carré** s'il existe $f\in\Hol(A)$ telle que $f^2=g$.

1. Montrer que $(E,\norm\cdot)$ est un espace de Banach et que $\norm{fg}\le\norm f\,\norm g$.
2. Montrer que $S$ est de classe $C^\infty$ et calculer $dS_f$.
3. Montrer que $dS_f$ est un isomorphisme bicontinu de $E$ sur $E$ si et seulement si $f\in\mathcal U$.
4. a) Montrer que $\mathcal U$ et $S(\mathcal U)$ sont des ouverts de $E$, et que pour tout $f_0\in\mathcal U$ il existe un voisinage $W$ de $f_0^2$ sur lequel on dispose d'une « racine carrée » $\sqrt{\cdot}:W\to E$ de classe $C^\infty$, avec $\sqrt{f_0^2}=f_0$. Calculer sa différentielle en $f_0^2$.
   b) Pour $f_0=\iota$, montrer qu'on peut prendre pour $W$ la boule ouverte $B(\iota^2,r^2)$, avec une formule explicite.
5. Montrer que toute $g\in E$ telle que $\norm{g-\iota}<r$ appartient à $\mathcal U$ mais n'est pas un carré.
6. Montrer que $S(\mathcal U)$ est fermé dans $\mathcal U$. En déduire que l'ouvert $\mathcal U$ de $E$ n'est pas connexe.

## Indices

### Indice 1
$S$ est la restriction à la diagonale d'une application bilinéaire continue : sa différentielle se calcule en développant $(f+h)^2$. L'obstruction à l'existence d'une racine carrée sur une couronne est topologique : regarder comment $g$ fait tourner le cercle unité autour de $0$.

### Indice 2
3 : si $dS_f$ est surjective, résoudre $dS_f(h)=1$. 4 a) : théorème d'inversion locale dans un espace de Banach ; les hypothèses sont « $C^1$ » et « différentielle isomorphisme bicontinu ». 4 b) : écrire $g=z^2(1+u)$ et utiliser la détermination principale du logarithme.

### Indice 3
5 : si $\gamma(t)=e^{it}$ et $g=f^2$, alors $\frac1{2i\pi}\int_\gamma\frac{g'}{g}=2\cdot\frac1{2i\pi}\int_\gamma\frac{f'}{f}$, et chacune de ces quantités est un indice. Comparer $g\circ\gamma$ à $\gamma$ par l'homotopie $(1-s)\gamma+s\,g\circ\gamma$.

### Indice 4
6 : si $f_n^2\to g\in\mathcal U$, la suite $(f_n)$ est bornée dans $E$ : extraire une sous-suite convergeant localement uniformément (on ne peut pas espérer mieux : $f_n$ et $-f_n$ ont le même carré). Pour la non-connexité : un ouvert fermé non vide et distinct de $\mathcal U$.

## Corrigé

**1.** $\norm\cdot$ est une norme (sup d'une fonction bornée). Soit $(f_n)$ de Cauchy dans $E$ : pour tout $z$, $(f_n(z))$ est de Cauchy dans $\C$, donc converge vers $f(z)$, et en passant à la limite dans $|f_n(z)-f_m(z)|\le\eps$ ($n,m\ge N$) on obtient $\sup_A|f_n-f|\le\eps$ pour $n\ge N$ : la convergence est uniforme sur $A$. *A fortiori* la suite est localement uniformément de Cauchy, donc $f$ est holomorphe par le théorème de Weierstrass ([[ch03-weierstrass]]) ; elle est bornée ($\norm f\le\norm{f_N}+\eps$). Ainsi $f\in E$ et $\norm{f_n-f}\to0$. Enfin $|f(z)g(z)|\le\norm f\norm g$ pour tout $z$.

**2.** L'application $P:E\times E\to E$, $P(f,g)=fg$ est bilinéaire et continue ($\norm{P(f,g)}\le\norm f\norm g$), et $S(f)=P(f,f)$. On a
$$
S(f+h)-S(f)-2fh=h^2,\qquad\norm{h^2}\le\norm h^2=o(\norm h),
$$
donc $S$ est différentiable et $dS_f(h)=2fh$ (c'est la formule $dP_{(f,g)}(h,k)=hg+fk$ de [[ch05-differentielle-bilineaire]] composée avec $h\mapsto(h,h)$). L'application $f\mapsto dS_f$ est linéaire de $E$ dans $\mathcal L(E)$ et continue ($\norm{dS_f}\le2\norm f$) ; elle est donc $C^\infty$ ([[ch05-lineaire-c-infini]]), et par suite $S$ est $C^\infty$ (sa différentielle est $C^\infty$).

**3.** *Si $f\in\mathcal U$*, posons $c=\inf_A|f|>0$. $f$ ne s'annule pas, donc $1/f$ est holomorphe sur $A$, et $|1/f|\le1/c$ : $1/f\in E$. L'application $k\mapsto\frac{k}{2f}$ est linéaire continue de $E$ dans $E$ (norme $\le\frac1{2c}$) et c'est un inverse à gauche et à droite de $dS_f$ : $dS_f$ est un isomorphisme bicontinu.

*Réciproquement*, si $dS_f$ est surjective, il existe $h\in E$ avec $2fh=1$. Alors $h\neq0$ et, pour tout $z\in A$, $|f(z)|=\frac1{2|h(z)|}\ge\frac1{2\norm h}$ : $f\in\mathcal U$.

**4. a)** *$\mathcal U$ est ouvert* : si $f\in\mathcal U$, $c=\inf|f|$ et $\norm{g-f}<c/2$, alors $|g|\ge|f|-|g-f|\ge c/2$ sur $A$, donc $B(f,c/2)\subset\mathcal U$.

*Inversion locale.* Soit $f_0\in\mathcal U$. $S$ est $C^\infty$ sur l'ouvert $\mathcal U$ de l'espace de Banach $E$ (question 2), et $dS_{f_0}$ est un isomorphisme bicontinu (question 3). Le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit un voisinage ouvert $V\subset\mathcal U$ de $f_0$ et un voisinage ouvert $W$ de $f_0^2$ tels que $S:V\to W$ soit un $C^\infty$-difféomorphisme ([[ch06-diffeomorphisme-def]]). On pose $\sqrt{\cdot}=(S_{|V})^{-1}:W\to V$ ; elle est $C^\infty$, vérifie $(\sqrt g)^2=g$ et $\sqrt{f_0^2}=f_0$. En particulier $W=S(V)\subset S(\mathcal U)$ : tout point $f_0^2$ de $S(\mathcal U)$ est intérieur, donc **$S(\mathcal U)$ est ouvert**.

*Différentielle.* En différentiant $S\circ\sqrt{\cdot}=\id_W$ en $f_0^2$ : $dS_{f_0}\circ d(\sqrt\cdot)_{f_0^2}=\id_E$, donc
$$
d(\sqrt\cdot)_{f_0^2}(k)=(dS_{f_0})^{-1}(k)=\frac{k}{2f_0}.
$$
(C'est la règle « $(\sqrt x)'=\frac1{2\sqrt x}$ », valable dans l'algèbre $E$.)

**b)** Soit $g\in E$ avec $\norm{g-\iota^2}<r^2$. Posons $u(z)=\frac{g(z)-z^2}{z^2}$, holomorphe sur $A$ (car $0\notin A$) et, puisque $|z|>r$ sur $A$,
$$
|u(z)|\le\frac{\norm{g-\iota^2}}{r^2}=:q<1\qquad(z\in A).
$$
La détermination principale $\mathrm{Log}$ ([[ch02-logarithme-determination-principale-def]]) est holomorphe sur $\C\setminus\R_-\supset D(1,1)$, donc
$$
f(z)=z\,\exp\Big(\tfrac12\mathrm{Log}\big(1+u(z)\big)\Big)
$$
est holomorphe sur $A$, vérifie $f^2=z^2(1+u)=g$, et $r\sqrt{1-q}\le|f(z)|\le R\sqrt{1+q}$ : $f\in\mathcal U$. Pour $g=\iota^2$ ($u=0$) on trouve $f=\iota$. Notons $\Sigma(g)=f$.

*Régularité.* $g\mapsto u$ est affine et $\frac1{r^2}$-lipschitzienne de $E$ dans $E$, et $w\mapsto\exp(\frac12\mathrm{Log}(1+w))$ est holomorphe sur $D(0,1)$, donc lipschitzienne sur le disque compact convexe $\bar D(0,q')$ pour tout $q'<1$ ; ainsi $\Sigma$ est continue de $B(\iota^2,r^2)$ dans $E$ (majorations uniformes sur $A$). Soit $g_1\in B(\iota^2,r^2)$ et $f_1=\Sigma(g_1)\in\mathcal U$ ; le a) appliqué en $f_1$ fournit $V_1\ni f_1$, $W_1\ni g_1$ et une racine carrée $C^\infty$, $\sqrt\cdot:W_1\to V_1$. Par continuité, $\Sigma(g)\in V_1$ pour $g$ proche de $g_1$ ; comme $\Sigma(g)$ et $\sqrt g$ sont deux éléments de $V_1$ de même carré et que $S$ est injective sur $V_1$, $\Sigma(g)=\sqrt g$ près de $g_1$. Donc $\Sigma$ est $C^\infty$ au voisinage de chaque point : $W=B(\iota^2,r^2)$ convient, avec $\sqrt g=\Sigma(g)$, et $d\Sigma_{\iota^2}(k)=\frac{k}{2\iota}$. (Vérification numérique : pour $g=z^2+0{,}2$ et $r=\frac12$, $f^2-g$ est de l'ordre de $10^{-16}$ en plusieurs points de $A$.)

**5.** Soit $g\in E$ avec $\delta=\norm{g-\iota}<r$.

*$g\in\mathcal U$* : pour $z\in A$, $|g(z)|\ge|z|-|g(z)-z|\ge r-\delta>0$.

*$g$ n'est pas un carré.* Soit $\gamma(t)=e^{it}$, $t\in[0,2\pi]$ : c'est un lacet de $A$ (car $r<1<R$). Pour $h\in\Hol(A)$ sans zéro, $h\circ\gamma$ est un lacet $C^1$ de $\C^\times$ et, par la règle de dérivation $\frac{d}{dt}h(\gamma(t))=h'(\gamma(t))\gamma'(t)$ ([[ch01-derivee-f-rond-gamma]]),
$$
\Ind_0(h\circ\gamma)=\frac1{2i\pi}\int_0^{2\pi}\frac{(h\circ\gamma)'(t)}{h(\gamma(t))}\,dt=\frac1{2i\pi}\int_\gamma\frac{h'(z)}{h(z)}\,dz\qquad(\text{[[ch02-indice-def]]}).
$$
*Indice de $g\circ\gamma$.* L'application $H(s,t)=(1-s)\gamma(t)+s\,g(\gamma(t))$, $(s,t)\in[0,1]\times[0,2\pi]$, est continue, chaque $H(s,\cdot)$ est un lacet, et
$$
|H(s,t)|\ge|\gamma(t)|-s\,|g(\gamma(t))-\gamma(t)|\ge1-\delta>0 .
$$
C'est donc une homotopie de lacets dans $\C\setminus\{0\}$ entre $\gamma$ et $g\circ\gamma$, d'où ([[ch02-indice-invariance-homotopie]], [[ch02-indice-cercle]]) $\Ind_0(g\circ\gamma)=\Ind_0(\gamma)=1$.

*Si $g=f^2$* avec $f\in\Hol(A)$, alors $f$ ne s'annule pas (car $g$ ne s'annule pas), $g'=2ff'$ et $\frac{g'}{g}=2\frac{f'}{f}$, donc
$$
1=\Ind_0(g\circ\gamma)=2\,\Ind_0(f\circ\gamma)\in2\Z,
$$
ce qui est absurde (l'indice d'un lacet est un entier, [[ch02-indice-entier-localement-constant]]). Donc $g$ n'est pas un carré. En particulier $\iota\in\mathcal U\setminus S(\mathcal U)$, et la boule $B(\iota,r)$, contenue dans $\mathcal U$, ne rencontre pas $S(\mathcal U)$.

**6.** *$S(\mathcal U)$ est fermé dans $\mathcal U$.* Soit $(g_n)$ une suite de $S(\mathcal U)$, $g_n=f_n^2$ avec $f_n\in\mathcal U$, convergeant dans $E$ vers $g\in\mathcal U$ ; soit $c=\inf_A|g|>0$. Comme $\sup_A|f_n|^2=\sup_A|f_n^2|$, on a $\norm{f_n}=\norm{g_n}^{1/2}$, borné. La famille $\{f_n\}$ est uniformément bornée sur $A$, donc normale par le théorème de Montel ([[ch03-montel]]) : une sous-suite $(f_{n_k})$ converge localement uniformément sur $A$ vers une fonction $f$, holomorphe par [[ch03-weierstrass]]. Pour tout $z\in A$, $f(z)^2=\lim_k f_{n_k}(z)^2=\lim_k g_{n_k}(z)=g(z)$ ; donc $|f|=|g|^{1/2}\in[\sqrt c,\norm g^{1/2}]$ : $f\in\mathcal U$ et $g=S(f)\in S(\mathcal U)$.

*Non-connexité.* $S(\mathcal U)$ est ouvert dans $E$ (question 4), donc dans $\mathcal U$, fermé dans $\mathcal U$, non vide ($1=S(1)$) et distinct de $\mathcal U$ ($\iota\notin S(\mathcal U)$, question 5). Un espace topologique connexe n'a pas d'autre partie à la fois ouverte et fermée que $\emptyset$ et lui-même : $\mathcal U$ n'est pas connexe.

## Pièges et variantes

> ⚠️ L'inversion locale ne donne qu'un voisinage **non explicite** : le 4 b) le précise dans un cas particulier. Elle ne dit rien de global : $S$ n'est pas injective ($S(f)=S(-f)$) et $S(\mathcal U)\neq\mathcal U$.

* Au 6, on n'obtient la convergence que d'une **sous-suite** : la suite $(f_n)$ elle-même peut osciller entre deux racines $\pm f$. Sur $A$ connexe, les racines carrées de $g=f^2$ sont exactement $f$ et $-f$ : $(f_1/f)^2=1$, donc $f_1/f$ est continue à valeurs dans $\{\pm1\}$, donc constante.
* L'hypothèse $\inf|f|>0$ (et non seulement « $f$ ne s'annule pas ») est indispensable au 3 : il faut $1/f$ **bornée** pour inverser $dS_f$ dans $E$.
* Ne pas oublier que l'inversion locale exige que la différentielle soit un isomorphisme **bicontinu** : ici la continuité de l'inverse $k\mapsto k/(2f)$ est explicite (sans recourir au théorème de Banach).
* Variante : la même preuve montre que $N(g)=\Ind_0(g\circ\gamma)$ est localement constant sur $\mathcal U$ ; comme $N(\iota^k)=k$, l'ouvert $\mathcal U$ a une infinité de composantes connexes. On peut montrer que $g\in\mathcal U$ est un carré si et seulement si $N(g)$ est pair.
* Variante : sur le disque $D$ (simplement connexe), toute fonction holomorphe bornée $g$ avec $\inf|g|>0$ est un carré (elle admet un logarithme holomorphe, [[ch02-logarithme-existence]]) : l'obstruction du 5 disparaît.
