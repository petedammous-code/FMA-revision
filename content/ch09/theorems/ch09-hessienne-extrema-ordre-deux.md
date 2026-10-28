---
id: ch09-hessienne-extrema-ordre-deux
type: proposition
chapter: 9
title: "Conditions d'ordre 2 : signe de la hessienne et extrema locaux"
ref: non numéroté, section IX.7.6, p. 171
page: 171
importance: 2
depends: [ch09-hessienne-def, ch09-point-critique-sous-variete-def, ch09-espace-tangent-image-dx, ch09-sous-variete-def, ch05-lemme-schwarz, ch05-taylor-young]
tags: [hessienne, extremum, point-critique, ordre-deux, sous-variete, taylor]
---
## Intuition

> 💡 En un point critique $p$ de $f : S\to\R$, la « pente » de $f$ le long de $S$ est nulle dans toutes les directions tangentes : c'est la condition d'ordre 1 ([[ch09-extremum-local-differentielle-nulle]]). Pour savoir si l'on est au fond d'une cuvette, au sommet d'une bosse ou sur un col, on regarde la **courbure** de $f$ le long de $S$, c'est-à-dire la forme quadratique $v\mapsto d^2f_p(v,v)$ sur le plan tangent $T_pS$ : cuvette si elle est $>0$ dans toutes les directions, bosse si elle est $<0$ partout.

Rappels. $S$ est une sous-variété de dimension $m$ de $\R^N$, $x : U\to S$ un **paramétrage local** en $p$ (application $C^k$, homéomorphisme de l'ouvert $U\subset\R^m$ sur un ouvert $V\cap S$ de $S$, de différentielle injective : [[ch09-sous-variete-def]]), $q=x^{-1}(p)$. Un **point critique** de $f$ est un point où $df_p=0$ sur $T_pS$ ([[ch09-point-critique-sous-variete-def]]). La **hessienne** $d^2f_p$ n'est définie qu'en un point critique, par $d^2f_p(v,w)=d^2(f\circ x)_q\big(dx^{-1}_p(v),dx^{-1}_p(w)\big)$ ([[ch09-hessienne-def]]) : on « lit » $f$ dans une carte, et l'on prend la différentielle seconde usuelle.

Une forme bilinéaire symétrique $b$ sur un espace vectoriel $T$ est **positive** si $b(v,v)\ge0$ pour tout $v$, **définie positive** si de plus $b(v,v)>0$ pour $v\ne0$ (de même **négative**, **définie négative** avec $\le0$, $<0$).

## Énoncé

**Proposition (poly, section IX.7.6, p. 171, non numérotée).** Soit $S$ une sous-variété de $\R^N$ de dimension $m$ (de classe au moins $C^2$), $f : S\to\R$ une fonction de classe $C^2$ et $p\in S$ un point critique de $f$. Alors :

1. $d^2f_p$ est une forme bilinéaire symétrique sur $T_pS$ (appelée la **hessienne** de $f$ au point critique $p$) ;
2. si $f$ admet un maximum (resp. minimum) local en $p$, alors $d^2f_p$ est négative (resp. positive) ;
3. inversement, sous l'hypothèse plus forte où $d^2f_p$ est définie négative (resp. définie positive), $f$ admet un maximum (resp. minimum) local **isolé** en $p$.

(« Maximum local isolé » signifie maximum local **strict** : il existe un voisinage $W$ de $p$ dans $S$ tel que $f(y)<f(p)$ pour tout $y\in W\setminus\{p\}$. Les voisinages sont pris pour la topologie de $S$ induite par celle de $\R^N$.)

## Hypothèses

### H1 — $f$ (et $S$) de classe $C^2$

**Rôle.** Elle donne un sens à $d^2(f\circ x)_q$ (et la classe $C^2$ de $S$ rend la notion « $f$ de classe $C^2$ » indépendante du paramétrage, les changements de paramétrage étant alors des $C^2$-difféomorphismes : [[ch09-changement-parametrage]]). Elle sert aussi à appliquer le lemme de Schwarz et la formule de Taylor-Young à l'ordre $2$ à $g=f\circ x$.

**Si on la retire.** La hessienne n'est plus définie. Sur $S=\R$, $f(u)=|u|^{3/2}$ est $C^1$, a un point critique en $0$ ($f'(0)=\lim_{u\to0}|u|^{3/2}/u=0$) et un minimum strict, mais $f'(u)=\frac32\,\mathrm{sgn}(u)|u|^{1/2}$ n'est pas dérivable en $0$ : il n'y a pas de $d^2f_0$ dont on pourrait étudier le signe.

### H2 — $p$ est un point critique ($df_p=0$)

**Rôle.** C'est ce qui rend la définition de $d^2f_p$ indépendante du paramétrage (formule (IX.7.3), [[ch09-changement-parametrage-differentielle-seconde]]), et ce qui fait disparaître le terme d'ordre $1$ dans le développement de Taylor de $g=f\circ x$.

**Si on la retire.** En un point non critique, « le signe de $d^2(f\circ x)_q$ » dépend du paramétrage : sur $S=\R$, $f(u)=u$, en $p=0$, le paramétrage $x(u)=u$ donne $(f\circ x)''(0)=0$, alors que $x_1(u)=u+u^2$ (difféomorphisme de $]-\frac12,\frac12[$ sur un voisinage de $0$, car $x_1'(u)=1+2u>0$) donne $(f\circ x_1)''(0)=2$. De toute façon un point non critique n'est jamais un extremum local ([[ch09-extremum-local-differentielle-nulle]]).

### H3 — Pour le point 3 : $d^2f_p$ **définie** (et pas seulement positive ou négative)

**Rôle.** La définie-positivité donne, par compacité de la sphère unité de $\R^m$, une minoration uniforme $d^2g_q(h,h)\ge c\|h\|^2$ avec $c>0$, qui l'emporte sur le reste $o(\|h\|^2)$ de Taylor-Young.

**Si on la retire.** La réciproque du point 2 est fausse. Sur $S=\R$, $f(u)=u^3$ : $0$ est critique, $d^2f_0=0$ est à la fois positive et négative, mais $f$ change de signe en $0$ : pas d'extremum. Sur $S=\R^2$, $f(u_1,u_2)=u_1^2-u_2^4$ : $df_0=0$, $d^2f_0(h,h)=2h_1^2\ge0$ (positive non définie), mais $f(t,0)=t^2>0=f(0)$ et $f(0,t)=-t^4<0$ pour $t\ne0$ : $0$ est un col, pas un minimum.

### H4 — Le caractère « défini » n'est pas nécessaire

**Rôle.** Ce n'est pas une hypothèse mais une limite de l'énoncé : le point 3 est une condition **suffisante** seulement.

**Si on la retire.** $f(u)=u^4$ sur $S=\R$ a un minimum strict en $0$ avec $d^2f_0=0$, qui n'est pas définie positive. Quand la hessienne est dégénérée, l'ordre $2$ ne permet pas de conclure.

## Idée de la preuve

On lit tout dans un paramétrage $x$ en $p$ : $g=f\circ x$ a un point critique en $q$, sa différentielle seconde usuelle est la hessienne transportée par l'isomorphisme $dx_q : \R^m\to T_pS$, et $x$ étant un homéomorphisme, $p$ est extremum (strict) de $f$ si et seulement si $q$ l'est de $g$. On conclut par Taylor-Young à l'ordre $2$ sur l'ouvert $U$.

## Preuve

**Étape 0 : transport par un paramétrage.** Soit $x : U\to V\cap S$ un paramétrage local de $S$ en $p$, $q=x^{-1}(p)$, et $g=f\circ x : U\to\R$, de classe $C^2$ sur l'ouvert $U$ de $\R^m$ (c'est la définition de « $f$ de classe $C^2$ » : [[ch09-fonction-differentiable-sur-sous-variete-def]]). D'après [[ch09-espace-tangent-image-dx]], $dx_q$ est injective d'image $T_pS$, donc $dx_q : \R^m\to T_pS$ est un isomorphisme ; son inverse est $d(x^{-1})_p$ (règle de composition appliquée à $x^{-1}\circ x=\id_U$, [[ch09-composition-differentielles]]). Comme $p$ est critique, $dg_q=df_p\circ dx_q=0$ : $q$ est un point critique de $g$. Par définition de la hessienne ([[ch09-hessienne-def]]), pour $v,w\in T_pS$,
$$
d^2f_p(v,w)=d^2g_q\big(dx_q^{-1}(v),dx_q^{-1}(w)\big),\qquad\text{soit}\qquad d^2g_q(h,k)=d^2f_p\big(dx_q(h),dx_q(k)\big)\quad(h,k\in\R^m).
$$

**Point 1.** $d^2g_q$ est bilinéaire, et symétrique par le lemme de Schwarz ([[ch05-lemme-schwarz]], $g$ étant $C^2$). Composée avec l'application linéaire $dx_q^{-1}$ en chaque variable, $d^2f_p$ est donc bilinéaire symétrique sur $T_pS$.

**Transport des extrema.** Montrons que $p$ est un maximum local (resp. strict) de $f$ si et seulement si $q$ est un maximum local (resp. strict) de $g$.
Si $f(y)\le f(p)$ pour $y$ dans un voisinage ouvert $W$ de $p$ dans $S$, alors $U'=x^{-1}(W\cap V)$ est un ouvert de $U$ contenant $q$ ($x$ est continue et $W\cap V$ est un ouvert de $V\cap S$), et $g(u)=f(x(u))\le f(p)=g(q)$ pour $u\in U'$. Réciproquement, si $g(u)\le g(q)$ sur un ouvert $U'\ni q$ de $U$, alors $x(U')$ est un ouvert de $V\cap S$ ($x$ est un homéomorphisme sur $V\cap S$), donc de $S$ ($V\cap S$ est ouvert dans $S$), il contient $p$ et $f\le f(p)$ sur $x(U')$. Comme $x$ est injective, $u\ne q\iff x(u)\ne p$, ce qui transporte aussi les inégalités strictes. Même chose pour les minima.

**Point 2.** Supposons que $p$ soit un maximum local de $f$, donc $q$ un maximum local de $g$ : $g(q+th)\le g(q)$ pour $h\in\R^m$ fixé et $|t|$ assez petit. La formule de Taylor-Young à l'ordre $2$ ([[ch05-taylor-young]]), avec $dg_q=0$, donne
$$
g(q+th)-g(q)=\frac{t^2}{2}\,d^2g_q(h,h)+o(t^2)\qquad(t\to0).
$$
En divisant par $t^2>0$ et en faisant $t\to0$, on obtient $\frac12 d^2g_q(h,h)\le0$. Pour $v\in T_pS$, en prenant $h=dx_q^{-1}(v)$ : $d^2f_p(v,v)=d^2g_q(h,h)\le0$. Donc $d^2f_p$ est négative. Le cas du minimum s'obtient en remplaçant $f$ par $-f$.

**Point 3.** Supposons $d^2f_p$ définie négative. Pour $h\in\R^m\setminus\{0\}$, $v=dx_q(h)\ne0$ ($dx_q$ injective), donc $Q(h):=d^2g_q(h,h)=d^2f_p(v,v)<0$ : $d^2g_q$ est définie négative sur $\R^m$. La fonction continue $Q$ atteint son maximum sur la sphère unité (compacte) de $\R^m$ ; ce maximum vaut $-c$ avec $c>0$, et par homogénéité $Q(h)\le-c\|h\|^2$ pour tout $h$. Par Taylor-Young, il existe $\delta>0$ tel que $\bar B(q,\delta)\subset U$ et, pour $\|h\|\le\delta$,
$$
\Big|g(q+h)-g(q)-\tfrac12 Q(h)\Big|\le\frac c4\|h\|^2,\qquad\text{d'où}\qquad g(q+h)-g(q)\le-\frac c2\|h\|^2+\frac c4\|h\|^2=-\frac c4\|h\|^2 .
$$
Ainsi $g(q+h)<g(q)$ pour $0<\|h\|<\delta$ : $q$ est un maximum local strict de $g$, donc $p$ est un maximum local strict (isolé) de $f$ par le transport ci-dessus. Le cas défini positif s'obtient avec $-f$. $\square$

*Remarque.* Le poly se contente de dire que ces propriétés « découlent des propriétés des différentielles secondes en calcul différentiel ordinaire » ; la preuve ci-dessus détaille ce transport et les conditions d'ordre $2$ sur un ouvert de $\R^m$.

## Preuve à trous

Soit $x$ un paramétrage local en $p$, $q=x^{-1}(p)$, $g=f\circ x$, de classe $C^2$ sur l'ouvert $U$. Comme $dg_q=df_p\circ dx_q=0$, $q$ est critique pour $g$ et $d^2g_q(h,k)=$ <trou indice="définition de la hessienne, lue à l'envers">$d^2f_p\big(dx_q(h),dx_q(k)\big)$, où $dx_q:\R^m\to T_pS$ est un isomorphisme</trou>. La symétrie vient du lemme de Schwarz appliqué à $g$.

Comme $x$ est <trou indice="propriété topologique d'un paramétrage local">un homéomorphisme de $U$ sur l'ouvert $V\cap S$ de $S$, injectif</trou>, $p$ est un maximum local (strict) de $f$ si et seulement si $q$ en est un de $g$.

Si $q$ est un maximum local de $g$, Taylor-Young donne $g(q+th)-g(q)=\frac{t^2}{2}d^2g_q(h,h)+o(t^2)\le0$ ; on divise par $t^2$ et on fait $t\to0$ : $d^2g_q(h,h)\le0$, donc $d^2f_p$ est négative.

Si $d^2f_p$ est définie négative, $Q(h)=d^2g_q(h,h)$ l'est aussi et <trou indice="compacité">$Q$ atteint sur la sphère unité un maximum $-c<0$, d'où $Q(h)\le-c\|h\|^2$</trou>. Taylor-Young donne alors, pour $\|h\|\le\delta$, <trou>$g(q+h)-g(q)\le-\frac c2\|h\|^2+\frac c4\|h\|^2=-\frac c4\|h\|^2$</trou>, donc $g(q+h)<g(q)$ pour $0<\|h\|<\delta$ : maximum strict. $\square$

## Exemples

* **Fonction hauteur sur la sphère.** Sur $S=\mathbb S^2\subset\R^3$ ([[ch09-ex-sphere]]), $f(y)=y_3$. On a $T_y\mathbb S^2=y^\perp$ et $df_y(v)=v_3$ ; $df_y$ est nulle sur $y^\perp$ si et seulement si $e_3\in(y^\perp)^\perp=\R y$, i.e. $y=\pm e_3$. Au pôle nord $N=e_3$, paramétrage $x(u)=(u_1,u_2,\sqrt{1-u_1^2-u_2^2})$ sur $D(0,1)$, $q=0$ : $g(u)=\sqrt{1-\|u\|^2}=1-\frac12\|u\|^2+O(\|u\|^4)$, donc $d^2g_0(h,h)=-\|h\|^2$. Comme $dx_0(h)=(h_1,h_2,0)$, on obtient $d^2f_N(v,v)=-(v_1^2+v_2^2)$ pour $v\in T_N\mathbb S^2=\R^2\times\{0\}$ : définie négative, $N$ est un maximum local strict (c'est même le maximum global). De même le pôle sud est un minimum strict.

* **$f(x,y)=xy$ sur le cercle unité.** Avec $x(\theta)=(\cos\theta,\sin\theta)$, $g(\theta)=\cos\theta\sin\theta=\frac12\sin2\theta$, $g'(\theta)=\cos2\theta$, $g''(\theta)=-2\sin2\theta$. Points critiques : $\theta\in\frac\pi4+\frac\pi2\Z$. En $\theta=\frac\pi4$ (point $p=(\frac1{\sqrt2},\frac1{\sqrt2})$), $g''=-2<0$ : maximum strict, de valeur $\frac12$ ; en $\theta=\frac{3\pi}4$, $g''=2>0$ : minimum strict, de valeur $-\frac12$. Le vecteur tangent unitaire en $p$ est $v=x'(\frac\pi4)=(-\frac1{\sqrt2},\frac1{\sqrt2})$ et $d^2f_p(v,v)=g''(\frac\pi4)=-2$.

* **Le piège de la courbure, sur le même exemple.** La fonction ambiante $G(x,y)=xy$ a pour différentielle seconde $d^2G(v,v)=2v_1v_2$, et $2v_1v_2=-1$ pour le $v$ ci-dessus : **ce n'est pas** $d^2f_p(v,v)=-2$. La différence vient de la courbure du cercle : pour $\alpha(\theta)=x(\frac\pi4+\theta)$, $(G\circ\alpha)''(0)=d^2G_p(v,v)+dG_p(\alpha''(0))=-1+dG_p(-p)=-1-1=-2$ (car $dG_p(w)=p_2w_1+p_1w_2$ et $\alpha''(0)=-p$).

## Pièges

* > ⚠️ La hessienne n'a de sens **intrinsèque** qu'en un point critique. Parler du « signe de la hessienne » en un point non critique n'a pas de sens.
* > ⚠️ Si $f=G|_S$ avec $G$ définie sur un ouvert de $\R^N$, en général $d^2f_p\ne d^2G_p|_{T_pS\times T_pS}$ : il faut ajouter le terme $dG_p(\alpha''(0))$ dû à la courbure de $S$ (Exercice IX.7.39, p. 171 : $d^2f_p(v,v)=(f\circ\alpha)''(0)$ pour une courbe $\alpha$ tracée sur $S$ avec $\alpha(0)=p$, $\alpha'(0)=v$). Les deux coïncident si $dG_p=0$ ou si $S$ est un ouvert d'un sous-espace affine.
* Positive (ou négative) **non définie** : on ne peut rien conclure ($u^3$, $u^4$, $u_1^2-u_2^4$, $u_1^2+u_2^4$).
* Les conditions portent sur les directions **tangentes** $v\in T_pS$ seulement, pas sur tout $\R^N$.
* La condition nécessaire est une inégalité **large** ; la condition suffisante une inégalité **stricte** (définie) et donne un extremum **strict**.
* Extremum **local** seulement : le point 3 ne dit rien d'un extremum global (sauf argument de compacité supplémentaire).
