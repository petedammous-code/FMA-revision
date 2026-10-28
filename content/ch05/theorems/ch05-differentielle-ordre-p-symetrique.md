---
id: ch05-differentielle-ordre-p-symetrique
type: theorem
chapter: 5
title: Symétrie de la différentielle d'ordre $p$
ref: Théorème V.5.5
page: 108
importance: 2
depends: [ch05-lemme-schwarz, ch05-differentielle-seconde-def, ch05-classe-ck-def, ch05-derivee-directionnelle-unicite, ch05-isometrie-bilineaire-curryfication]
tags: [schwarz, differentielle-ordre-superieur, symetrie, multilineaire]
---
## Intuition

> 💡 Le lemme de Schwarz dit qu'on peut échanger deux directions de dérivation. Toute permutation de $p$ objets s'obtient en échangeant successivement des paires : la différentielle $p$-ième $d^pf_a(h_1,\dots,h_p)$ ne dépend donc pas de l'**ordre** dans lequel on donne les directions $h_1,\dots,h_p$.

Concrètement, pour $f:\R^n\to\R$ de classe $C^p$, toutes les dérivées partielles d'ordre $p$ qui font intervenir les mêmes variables le même nombre de fois coïncident : $\frac{\partial^3f}{\partial x\,\partial y\,\partial x}=\frac{\partial^3f}{\partial x^2\,\partial y}=\frac{\partial^3 f}{\partial y\,\partial x^2}$.

Notations. $d^pf=d(d^{p-1}f)$ ([[ch05-classe-ck-def]]) et $d^pf_a$ est vue comme application $p$-linéaire continue $E^p\to F$ par $d^pf_a(h_1,h_2,\dots,h_p)=\big(d(d^{p-1}f)_a(h_1)\big)(h_2,\dots,h_p)$ ([[ch05-differentielle-seconde-def]]) : le **premier** argument est la direction de la **dernière** différentiation. $\mathfrak S_p$ désigne le groupe des permutations de $\{1,\dots,p\}$.

## Énoncé

**Théorème (poly, Théorème V.5.5, p. 108).** Soit $f:U\to F$ une application d'un ouvert $U$ d'un espace vectoriel normé $E$ à valeurs dans un espace vectoriel normé $F$, de classe $C^{p-1}$ ($p\ge2$). Soit $a\in U$ tel que $d^{p-1}f$ soit différentiable en $a$. La différentielle $d^pf_a$ est alors une application $p$-linéaire symétrique de $E^p$ dans $F$, c'est-à-dire que pour tout $h=(h_1,\dots,h_p)\in E^p$ et pour toute permutation $\sigma\in\mathfrak S_p$,
$$
d^pf_a(h_1,\dots,h_p)=d^pf_a(h_{\sigma(1)},\dots,h_{\sigma(p)}).
$$

## Hypothèses

### H1 — $f$ de classe $C^{p-1}$

**Rôle.** Elle assure que $d^{p-1}f$ est définie sur tout $U$ (condition pour parler de sa différentiabilité en $a$), que $d^{p-1}f_x$ est **symétrique en tout point $x\in U$** (par récurrence, puisque $d^{p-2}f$ est différentiable en $x$), et que $d^{p-2}f$ est de classe $C^1$, ce qui permet d'appliquer le lemme de Schwarz à $d^{p-2}f$.

**Si on la retire.** Hypothèse en partie de confort : la preuve ci-dessous n'utilise que l'existence de $d^{p-1}f$ sur un voisinage de $a$ (pour que $d^{p-1}f$ soit différentiable en $a$, il la faut de toute façon) ; la continuité de $d^{p-1}f$ ne sert pas. On ne peut pas retirer l'existence de $d^{p-1}f$ autour de $a$, sans laquelle $d^pf_a$ n'est pas défini.

### H2 — $d^{p-1}f$ différentiable en $a$

**Rôle.** C'est la définition de l'existence de $d^pf_a$, et c'est l'hypothèse « $df$ différentiable en $a$ » du lemme de Schwarz appliqué à $d^{p-2}f$.

**Si on la retire.** Pour $p=2$ c'est exactement le contre-exemple du lemme de Schwarz ([[ch05-lemme-schwarz]]). Pour $p=3$ : soit $g(x,y)=\frac{xy(x^2-y^2)}{x^2+y^2}$, $g(0,0)=0$, et $f=x\,g$, c'est-à-dire $f(x,y)=\frac{x^2y(x^2-y^2)}{x^2+y^2}$. Elle est homogène de degré $3$ ($f(\lambda x,\lambda y)=\lambda^3f(x,y)$ pour tout $\lambda\in\R$) et $C^\infty$ hors de $0$ ; ses dérivées partielles d'ordre $k\le2$ sont homogènes de degré $3-k\ge1$, nulles en $0$ et majorées par $C\,r^{3-k}$ ($r=\sqrt{x^2+y^2}$), donc continues : $f$ est $C^2$ ([[ch05-c1-ssi-partielles-continues]] appliqué deux fois). Un calcul donne $\frac{\partial^2f}{\partial x^2}(0,1)=2\frac{\partial g}{\partial x}(0,1)=-2$ et $\frac{\partial}{\partial y}\frac{\partial f}{\partial x}(1,0)=\frac{\partial g}{\partial y}(1,0)+\frac{\partial^2 g}{\partial y\,\partial x}(1,0)=1+1=2$. Par homogénéité de degré $1$ des dérivées secondes, si $d^2f$ était différentiable en $0$ on aurait
$$
d^3f_0(e_2,e_1,e_1)=\lim_{t\to0}\frac{d^2f_{(0,t)}(e_1,e_1)}{t}=\frac{\partial^2f}{\partial x^2}(0,1)=-2,\qquad d^3f_0(e_1,e_2,e_1)=\lim_{t\to0}\frac{d^2f_{(t,0)}(e_2,e_1)}{t}=\frac{\partial}{\partial y}\frac{\partial f}{\partial x}(1,0)=2,
$$
contredisant la symétrie. Donc $f$ est $C^2$ mais $d^2f$ n'est pas différentiable en $0$, et l'on n'a pas de $d^3f_0$ symétrique.

## Idée de la preuve

Récurrence sur $p$, le cas $p=2$ étant le lemme de Schwarz. On montre que $d^pf_a$ est symétrique en ses $p-1$ derniers arguments (limite d'applications symétriques par hypothèse de récurrence) et en ses deux premiers (Schwarz appliqué à $d^{p-2}f$) ; ces deux familles de permutations engendrent $\mathfrak S_p$.

## Preuve

*Le poly laisse la démonstration au lecteur ; voici une preuve par récurrence sur $p\ge2$.*

**Notation.** Pour $x\in U$ et $h_2,\dots,h_p\in E$, on identifie $d^{p-1}f_x$ à une application $(p-1)$-linéaire continue (identifications successives de [[ch05-isometrie-bilineaire-curryfication]]). L'évaluation $\mathrm{ev}:T\mapsto T(h_2,\dots,h_p)$ est linéaire continue de l'espace où vit $d^{p-1}f_x$ dans $F$, de norme $\le\|h_2\|\cdots\|h_p\|$.

**Cas $p=2$.** C'est exactement le lemme de Schwarz ([[ch05-lemme-schwarz]]) : $f$ de classe $C^1$, $df$ différentiable en $a$.

**Hérédité.** Soit $p\ge3$ ; supposons le théorème vrai à l'ordre $p-1$ (pour toute application et tout point). Soit $f$ de classe $C^{p-1}$ avec $d^{p-1}f$ différentiable en $a$.

*(a) Symétrie en $(h_2,\dots,h_p)$.* Pour tout $x\in U$, $f$ est $C^{p-2}$ et $d^{p-2}f$ est différentiable en $x$ (car $f$ est $C^{p-1}$) : par hypothèse de récurrence, $d^{p-1}f_x$ est $(p-1)$-linéaire symétrique. Fixons $h_1,\dots,h_p$ et $\tau$ une permutation de $\{2,\dots,p\}$. La dérivée directionnelle de $d^{p-1}f$ en $a$ dans la direction $h_1$ ([[ch05-derivee-directionnelle-unicite]]) et la continuité de $\mathrm{ev}$ donnent
$$
d^pf_a(h_1,h_2,\dots,h_p)=\lim_{t\to0}\frac{d^{p-1}f_{a+th_1}(h_2,\dots,h_p)-d^{p-1}f_a(h_2,\dots,h_p)}{t}.
$$
Le quotient est inchangé si l'on remplace $(h_2,\dots,h_p)$ par $(h_{\tau(2)},\dots,h_{\tau(p)})$, par symétrie de $d^{p-1}f_{a+th_1}$ et de $d^{p-1}f_a$. Donc la limite aussi : $d^pf_a(h_1,h_2,\dots,h_p)=d^pf_a(h_1,h_{\tau(2)},\dots,h_{\tau(p)})$.

*(b) Symétrie en $(h_1,h_2)$.* Posons $\varphi=d^{p-2}f:U\to G$, où $G$ est l'evn où vit $d^{p-2}f_x$. Comme $f$ est $C^{p-1}$, $\varphi$ est de classe $C^1$ ([[ch05-classe-ck-def]]), et $d\varphi=d^{p-1}f$ est différentiable en $a$. Le lemme de Schwarz appliqué à $\varphi$ donne $d^2\varphi_a(h_1,h_2)=d^2\varphi_a(h_2,h_1)$ dans $G$. Or $d^2\varphi_a(h_1,h_2)=\big(d(d^{p-1}f)_a(h_1)\big)(h_2)$, qui, évalué en $(h_3,\dots,h_p)$, vaut $d^pf_a(h_1,h_2,h_3,\dots,h_p)$. Donc $d^pf_a(h_1,h_2,h_3,\dots,h_p)=d^pf_a(h_2,h_1,h_3,\dots,h_p)$.

*(c) Conclusion.* Soit $H$ l'ensemble des $\sigma\in\mathfrak S_p$ telles que $d^pf_a(h_{\sigma(1)},\dots,h_{\sigma(p)})=d^pf_a(h_1,\dots,h_p)$ pour tout $h\in E^p$ ; c'est un sous-groupe de $\mathfrak S_p$ (stable par composition et inverse). D'après (a) et (b), $H$ contient toutes les permutations fixant $1$ et la transposition $(1\,2)$. Pour $k\ge3$, $(1\,k)=(2\,k)(1\,2)(2\,k)\in H$ ; et pour $2\le i<j\le p$, $(i\,j)\in H$ par (a). Toutes les transpositions sont dans $H$, et elles engendrent $\mathfrak S_p$ : $H=\mathfrak S_p$. $\square$

## Preuve à trous

Récurrence sur $p\ge2$. Le cas $p=2$ est <trou>le lemme de Schwarz</trou>. Supposons le résultat vrai à l'ordre $p-1$ et soit $f$ de classe $C^{p-1}$ avec $d^{p-1}f$ différentiable en $a$.

(a) Pour tout $x\in U$, <trou indice="appliquer l'hypothèse de récurrence en chaque point">$d^{p-1}f_x$ est symétrique, car $f$ est $C^{p-2}$ et $d^{p-2}f$ est différentiable en $x$</trou>. Comme
$$
d^pf_a(h_1,h_2,\dots,h_p)=\lim_{t\to0}\frac{d^{p-1}f_{a+th_1}(h_2,\dots,h_p)-d^{p-1}f_a(h_2,\dots,h_p)}{t},
$$
$d^pf_a$ est symétrique en $(h_2,\dots,h_p)$.

(b) <trou indice="à quelle application appliquer Schwarz ?">On applique le lemme de Schwarz à $\varphi=d^{p-2}f$, de classe $C^1$, avec $d\varphi=d^{p-1}f$ différentiable en $a$</trou> : $d^2\varphi_a(h_1,h_2)=d^2\varphi_a(h_2,h_1)$, et en évaluant en $(h_3,\dots,h_p)$, $d^pf_a$ est symétrique en $(h_1,h_2)$.

(c) Les permutations laissant $d^pf_a$ invariante forment un sous-groupe de $\mathfrak S_p$ contenant les permutations de $\{2,\dots,p\}$ et $(1\,2)$ ; or <trou indice="écrire (1 k) à l'aide de (1 2) et (2 k)">$(1\,k)=(2\,k)(1\,2)(2\,k)$</trou>, donc il contient toutes les transpositions, qui engendrent $\mathfrak S_p$. $\square$

## Exemples

* **Monôme sur $\R^2$.** $f(x,y)=x^2y$, $p=3$ : la seule dérivée partielle troisième non nulle est obtenue en dérivant deux fois en $x$ et une fois en $y$, dans n'importe quel ordre : $\frac{\partial}{\partial x}\frac{\partial}{\partial x}\frac{\partial f}{\partial y}=\frac{\partial}{\partial x}\frac{\partial}{\partial x}(x^2)=2$, $\frac{\partial}{\partial y}\frac{\partial}{\partial x}\frac{\partial f}{\partial x}=\frac{\partial}{\partial y}(2y)=2$, $\frac{\partial}{\partial x}\frac{\partial}{\partial y}\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}(2x)=2$. Donc $d^3f_a(h,k,l)=2\big(h_1k_1l_2+h_1k_2l_1+h_2k_1l_1\big)$, expression symétrique.
* **Cube matriciel.** $f(A)=A^3$ sur $\mathrm M_n(\R)$ : $d^3f_A(U,V,W)=\sum_{\sigma\in\mathfrak S_3}X_{\sigma(1)}X_{\sigma(2)}X_{\sigma(3)}$ avec $(X_1,X_2,X_3)=(U,V,W)$ (somme des six produits), visiblement symétrique ; on l'obtient par la formule pratique ([[ch05-formule-pratique-dpf]]) comme coefficient de $t_1t_2t_3$ dans $(A+t_1U+t_2V+t_3W)^3$.
* **Conséquence : la forme diagonale suffit.** Une application $p$-linéaire symétrique $\Phi$ est déterminée par $h\mapsto\Phi(h,\dots,h)$ (polarisation ; pour $p=2$, $\Phi(u,v)=\frac14(\Phi(u+v,u+v)-\Phi(u-v,u-v))$). C'est pourquoi les formules de Taylor ne font intervenir que $d^pf_a(h,\dots,h)$ ([[ch05-taylor-young]]).

## Pièges

* > ⚠️ Comme pour Schwarz, il faut la **différentiabilité** de $d^{p-1}f$ en $a$ (par exemple $f$ de classe $C^p$) ; l'existence des dérivées partielles d'ordre $p$ en $a$ ne suffit pas.
* La convention d'ordre des arguments ($h_1$ = direction de la dernière dérivation) n'a plus d'importance **une fois** le théorème démontré, mais elle est nécessaire pour l'énoncer et le prouver.
* Dans $\R^n$, le nombre de dérivées partielles d'ordre $p$ **distinctes** d'une fonction $C^p$ est le nombre de multi-indices $\alpha\in\N^n$ avec $|\alpha|=p$, soit $\binom{n+p-1}{p}$, et non $n^p$.
