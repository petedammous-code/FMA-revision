---
id: ch09-multiplicateurs-lagrange
type: proposition
chapter: 9
title: Multiplicateurs de Lagrange (extrema liés)
ref: Proposition IX.7.35
page: 168
importance: 3
depends: [ch09-espace-tangent-graphe-equation, ch09-ex-point-critique-restriction, ch09-point-critique-sous-variete-def, ch09-sous-variete-equation-valeur-reguliere, ch09-extremum-local-differentielle-nulle]
tags: [lagrange, extrema-lies, multiplicateurs, point-critique, contrainte, valeur-reguliere, optimisation]
---
## Intuition

> 💡 On veut optimiser $g$ sous les contraintes $F_1=\dots=F_{N-m}=0$. Sur la surface des contraintes $S$, un point est critique quand $g$ ne varie pas dans les directions **tangentes** à $S$ ; or les directions tangentes sont celles qui ne font varier **aucune** contrainte au premier ordre ($T_pS=\ker dF_p$). Dire « tout ce qui laisse les contraintes fixes laisse $g$ fixe » revient à dire que $dg_p$ est une **combinaison linéaire** des $d(F_i)_p$ : géométriquement, $\nabla g(p)$ est dans l'espace engendré par les normales $\nabla F_i(p)$. Avec une seule contrainte dans le plan : la ligne de niveau de $g$ est tangente à la courbe $F=0$, et $\nabla g\parallel\nabla F$.

Vocabulaire : $0$ est **valeur régulière** de $F:V\to\R^{N-m}$ si $dF_p$ est surjective pour tout $p\in F^{-1}(\{0\})$ ([[ch09-point-critique-valeur-reguliere-def]]) ; alors $S=F^{-1}(\{0\})$ est une sous-variété de dimension $m$ ([[ch09-sous-variete-equation-valeur-reguliere]]). Un **point critique** de $f:S\to\R$ est un point où $df_p=0$ ([[ch09-point-critique-sous-variete-def]]).

## Énoncé

**Proposition (poly, Proposition IX.7.35, p. 168).** Soit $F : V\to\R^{N-m}$ une application de classe $C^k$ définie sur un ouvert $V$ de $\R^N$ dont $0$ est valeur régulière et soit $S$ la sous-variété de dimension $m$ de $\R^N$ définie par
$$
S=\{x\in V\mid F(x)=0\}.
$$
Soit $g : V\to\R$ une fonction différentiable définie sur $V$ et soit $f$ la restriction de $g$ à $S$. Posons $F(x)=(F_1(x),\dots,F_{N-m}(x))$. Alors un point $p\in S$ est point critique de $f$, c'est-à-dire $df_p=0$, si et seulement s'il existe des réels $w_1,\dots,w_{N-m}$ tels que
$$
dg_p=w_1\,d(F_1)_p+\dots+w_{N-m}\,d(F_{N-m})_p .
$$
Les composantes du vecteur $w=(w_1,\dots,w_{N-m})$ s'appellent les **multiplicateurs de Lagrange**.

*Compléments (conséquences de la preuve).* Les $w_i$ sont alors **uniques**. En termes de gradients : $\nabla g(p)=\sum_i w_i\nabla F_i(p)$. Avec le Théorème IX.7.31 ([[ch09-extremum-local-differentielle-nulle]]) : tout extremum local de $g|_S$ vérifie cette condition.

## Hypothèses

### H1 — $0$ valeur régulière de $F$ (les $d(F_i)_p$ sont linéairement indépendantes en tout $p\in S$)

**Rôle.** Elle fait de $S$ une sous-variété de dimension $m$ et donne la description $T_pS=\ker dF_p$ ([[ch09-espace-tangent-graphe-equation]]), cœur de la preuve. Elle donne aussi l'unicité des $w_i$. (Pour une application linéaire $L=(\ell_1,\dots,\ell_r):\R^N\to\R^r$, $L$ surjective $\iff$ $\ell_1,\dots,\ell_r$ linéairement indépendantes, car le rang de $L$ est le rang de la famille de ses lignes.)

**Si on la retire.** *Cusp.* $F(x,y)=y^2-x^3$, $g(x,y)=x$. Sur $\{F=0\}$ on a $x^3=y^2\ge0$, donc $x\ge0$ : le minimum de $g$ sous la contrainte vaut $0$, atteint en $(0,0)$. Or $dF_{(0,0)}=(-3x^2,2y)|_{(0,0)}=0$ et $dg_{(0,0)}=dx\neq w\cdot0$ : **la règle de Lagrange ne détecte pas le minimum.** *Même si l'ensemble est une sous-variété :* $F(x,y)=y^2$ définit la droite $S=\R\times\{0\}$, mais $dF_p=2y\,dy=0$ sur $S$ ($0$ n'est pas valeur régulière). Pour $g(x,y)=y+x^2$, $f(x,0)=x^2$ a un minimum en $(0,0)$, alors que $dg_{(0,0)}=dy$ n'est pas multiple de $dF_{(0,0)}=0$. Le sens « $\Leftarrow$ » reste vrai (si $dg_p=\sum w_i\,d(F_i)_p$, alors $dg_p$ s'annule sur $\bigcap\ker d(F_i)_p\supset T_pS$), c'est le sens « $\Rightarrow$ » qui tombe.

### H2 — $F$ de classe $C^k$ ($k\ge1$) sur un ouvert $V$

**Rôle.** Avec H1, elle permet d'appliquer la Proposition IX.4.1 (inversion locale) : $S$ est une sous-variété et $T_pS=\ker dF_p$.

**Si on la retire.** Hypothèse de cadre : sans régularité $C^1$, $F^{-1}(\{0\})$ peut ne pas être une sous-variété même si $dF_p$ est surjective en un point (voir l'exemple de H1 dans [[ch09-fibres-submersion-image-immersion]]), et la notion même de point critique de $f$ disparaît.

### H3 — $g$ différentiable sur l'ouvert $V$, $f=g|_S$

**Rôle.** Elle permet d'écrire $dg_p$ et d'identifier $df_p=dg_p|_{T_pS}$ ([[ch09-ex-point-critique-restriction]]).

**Si on la retire.** Hypothèse de confort : si $f$ n'est définie que sur $S$, on teste directement $df_p=0$ (par exemple $d(f\circ x)_q=0$ dans un paramétrage), mais il n'y a plus de « $dg_p$ » à décomposer. Il suffit d'ailleurs que $g$ soit différentiable sur un voisinage ouvert de $p$.

## Idée de la preuve

$p$ critique $\iff dg_p$ nulle sur $T_pS=\ker dF_p=\bigcap_i\ker d(F_i)_p$. Lemme d'algèbre linéaire : une forme linéaire nulle sur $\bigcap_i\ker\ell_i$ est combinaison linéaire des $\ell_i$ (on factorise $\ell$ à travers $L=(\ell_1,\dots,\ell_r)$).

## Preuve

**Étape 1 : réduction à l'algèbre linéaire.** Par l'Exemple IX.7.33 ([[ch09-ex-point-critique-restriction]]), $p$ est critique pour $f$ si et seulement si $dg_p$ s'annule sur $T_pS$. Par la Proposition IX.7.13 ([[ch09-espace-tangent-graphe-equation]]), $T_pS=\ker dF_p$. Comme $dF_p(v)=\big(d(F_1)_p(v),\dots,d(F_{N-m})_p(v)\big)$,
$$
\ker dF_p=\bigcap_{i=1}^{N-m}\ker d(F_i)_p .
$$
Donc $p$ est critique si et seulement si la forme linéaire $dg_p$ s'annule sur $\bigcap_i\ker d(F_i)_p$.

**Étape 2 : lemme d'algèbre linéaire** (le poly demande de le faire « absolument en exercice »). *Soient $\ell,\ell_1,\dots,\ell_r$ des formes linéaires sur $\R^N$. Alors $\ell$ s'annule sur $K=\bigcap_i\ker\ell_i$ si et seulement s'il existe $w\in\R^r$ avec $\ell=\sum_iw_i\ell_i$.*

* « $\Leftarrow$ » : si $\ell=\sum_iw_i\ell_i$ et $v\in K$, alors $\ell(v)=\sum_iw_i\ell_i(v)=0$.
* « $\Rightarrow$ » : soit $L=(\ell_1,\dots,\ell_r):\R^N\to\R^r$, de sorte que $\ker L=K\subset\ker\ell$. Sur le sous-espace $\mathrm{Im}\,L\subset\R^r$, posons $\lambda(L(v))=\ell(v)$ : c'est bien défini, car si $L(v)=L(v')$ alors $v-v'\in\ker L\subset\ker\ell$, donc $\ell(v)=\ell(v')$ ; et $\lambda$ est linéaire. Prolongeons $\lambda$ en une forme linéaire sur $\R^r$ (en la prenant nulle sur un supplémentaire de $\mathrm{Im}\,L$) ; elle s'écrit $\lambda(y)=\sum_iw_iy_i$. Alors pour tout $v$, $\ell(v)=\lambda(L(v))=\sum_iw_i\ell_i(v)$.

**Étape 3 : conclusion.** On applique le lemme à $\ell=dg_p$, $\ell_i=d(F_i)_p$, $r=N-m$ : $p$ est critique si et seulement s'il existe des réels $w_1,\dots,w_{N-m}$ avec $dg_p=\sum_iw_i\,d(F_i)_p$.

*Unicité.* Comme $0$ est valeur régulière, $dF_p$ est surjective : les $d(F_i)_p$ sont linéairement indépendantes, donc les $w_i$ sont uniques (et, dans l'étape 2, $\mathrm{Im}\,L=\R^r$ : aucun prolongement n'est nécessaire). $\square$

## Preuve à trous

Par l'Exemple IX.7.33, $p$ est critique pour $f=g|_S$ si et seulement si $dg_p$ s'annule sur $T_pS$, et <trou indice="espace tangent d'une sous-variété définie par une équation régulière">$T_pS=\ker dF_p=\bigcap_i\ker d(F_i)_p$</trou>. Il reste à voir qu'une forme $\ell$ nulle sur $\bigcap_i\ker\ell_i$ est combinaison des $\ell_i$. Avec $L=(\ell_1,\dots,\ell_r)$, on a $\ker L\subset\ker\ell$, ce qui permet de définir <trou indice="factoriser ℓ à travers L">$\lambda$ sur $\mathrm{Im}\,L$ par $\lambda(L(v))=\ell(v)$, bien défini car $L(v)=L(v')\Rightarrow v-v'\in\ker L\subset\ker\ell$</trou>. On prolonge $\lambda$ en une forme linéaire $y\mapsto\sum_iw_iy_i$ sur $\R^r$, et alors <trou>$\ell(v)=\lambda(L(v))=\sum_iw_i\ell_i(v)$ pour tout $v$</trou>. Réciproque immédiate. Les $w_i$ sont uniques car <trou indice="que dit la régularité de la valeur 0 ?">$dF_p$ surjective équivaut à l'indépendance linéaire des $d(F_i)_p$</trou>. $\square$

## Exemples

* **Maximum de $x+y+z$ sur la sphère.** $F(x,y,z)=x^2+y^2+z^2-1$, $dF_p=2\langle p,\cdot\rangle\neq0$ sur $S=\mathbb S^2$ ($0$ est valeur régulière) ; $g=x+y+z$, $dg=(1,1,1)$. Condition : $(1,1,1)=2w\,p$, donc $p=\pm\frac1{\sqrt3}(1,1,1)$ et $w=\pm\frac{\sqrt3}2$. Par compacité, $g$ atteint ses extrema sur $\mathbb S^2$, qui sont parmi ces deux points : $\max=\sqrt3$, $\min=-\sqrt3$.
* **Rectangle d'aire maximale inscrit dans une ellipse.** Maximiser $g=4xy$ sur $F=\frac{x^2}{a^2}+\frac{y^2}{b^2}-1=0$ (avec $a,b>0$ ; $dF=(\frac{2x}{a^2},\frac{2y}{b^2})\neq0$ sur l'ellipse). Lagrange : $4y=\frac{2w x}{a^2}$ et $4x=\frac{2wy}{b^2}$. Aux points où $xy\neq0$ (le maximum est $>0$), en divisant : $\frac{y}{x}=\frac{b^2x}{a^2y}$, soit $\frac{y^2}{b^2}=\frac{x^2}{a^2}=\frac12$. D'où $x=\pm\frac a{\sqrt2}$, $y=\pm\frac b{\sqrt2}$ et $\max g=4\cdot\frac{a}{\sqrt2}\cdot\frac{b}{\sqrt2}=2ab$ (pour $xy>0$).
* **Deux contraintes : plus haut point d'un grand cercle.** $S=\{x^2+y^2+z^2=1,\ x+y+z=0\}$, $F=(x^2+y^2+z^2-1,\ x+y+z)$. Les lignes $d(F_1)_p=2(x,y,z)$ et $d(F_2)_p=(1,1,1)$ sont indépendantes sur $S$ (sinon $p\parallel(1,1,1)$, mais alors $x+y+z=\pm\sqrt3\neq0$). On maximise $g=z$ : $(0,0,1)=w_1(2x,2y,2z)+w_2(1,1,1)$. Les deux premières composantes donnent $2w_1x=2w_1y=-w_2$ ; si $w_1=0$ alors $w_2=0$ et la troisième donne $1=0$, absurde ; donc $x=y$, puis $z=-2x$ et $6x^2=1$ : $p=\pm\frac1{\sqrt6}(1,1,-2)$. Le maximum est $z=\frac2{\sqrt6}=\sqrt{2/3}$, atteint en $\frac1{\sqrt6}(-1,-1,2)$ (cohérent : c'est la norme de la projection de $e_3$ sur le plan $x+y+z=0$, $\sqrt{1-\frac13}$).

## Pièges

* > ⚠️ **Vérifier que $0$ est valeur régulière** (au moins aux points candidats) : aux points de $S$ où les $d(F_i)_p$ sont liées, la règle peut échouer (cusp $y^2=x^3$), et ces points doivent être étudiés à part.
* > ⚠️ Lagrange donne des **points critiques**, pas des extrema : il faut ensuite un argument d'existence (compacité de $S$ et continuité de $g$) et comparer les valeurs, ou étudier la hessienne ([[ch09-hessienne-def]]).
* Il y a **autant de multiplicateurs que d'équations** ($N-m$, la codimension de $S$), pas autant que de variables. Le signe des $w_i$ n'a pas de signification ici (contrairement aux conditions de Karush-Kuhn-Tucker pour des inégalités).
* Ne pas oublier les équations de contrainte elles-mêmes : le système à résoudre est $dg_p=\sum_iw_i\,d(F_i)_p$ **et** $F(p)=0$ ($N+(N-m)$ équations pour les $N+(N-m)$ inconnues $p,w$).
* Ne pas confondre avec $dg_p=0$ (extremum libre sur l'ouvert $V$) : sur $\mathbb S^2$, $g=x+y+z$ n'a aucun point critique dans $\R^3$, mais deux sur la sphère.
