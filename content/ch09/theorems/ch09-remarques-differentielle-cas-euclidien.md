---
id: ch09-remarques-differentielle-cas-euclidien
type: proposition
chapter: 9
title: "Différentielle quand $S_2=\mathbb R^{N_2}$ : cas d'un ouvert, d'une restriction, développement limité"
ref: Remarques IX.7.16
page: 163
importance: 2
depends: [ch09-differentielle-entre-sous-varietes-def, ch09-espace-tangent-image-dx, ch09-remarque-un-parametrage-suffit, ch09-ex-ouvert-sous-variete, ch05-composition-differentielles, ch05-differentielle-def]
tags: [differentielle, restriction, prolongement, developpement-limite, sous-variete]
---
## Intuition

> 💡 Quand l'application arrive dans un espace vectoriel $\R^{N_2}$, trois réflexes de calcul :
> 1. sur un **ouvert**, rien de nouveau : c'est la différentielle du chapitre V ;
> 2. si $\varphi$ est la **restriction** à $S_1$ d'une fonction $F$ définie autour de $S_1$ (cas de presque toutes les fonctions « explicites » : $\norm{p-p_0}^2$, une coordonnée, un produit scalaire...), on calcule $dF_p$ comme d'habitude et on **ne garde que les directions tangentes** ;
> 3. lue dans un paramétrage, $d\varphi_p$ est la partie linéaire du développement limité de $h\mapsto\varphi(x(q+h))$.

Rappels : la différentielle $d\varphi_p : T_pS_1\to T_{\varphi(p)}S_2$ d'une application entre sous-variétés est définie par $d\varphi_p(dx_q(\vec w))=d(\varphi\circ x)_q(\vec w)$, ou par $d\varphi_p(\alpha'(0))=(\varphi\circ\alpha)'(0)$ ([[ch09-differentielle-entre-sous-varietes-def]]) ; $T_pS_1=dx_q(\R^m)$ ([[ch09-espace-tangent-image-dx]]) ; la notation $o(h)$ désigne une fonction de la forme $\norm h\,\eps(h)$ avec $\eps(h)\to0$ quand $h\to0$.

## Énoncé

**Proposition (poly, Remarques IX.7.16, p. 163).** Plaçons-nous dans le cas où $S_2=\R^{N_2}$. Soit $S_1$ une sous-variété de dimension $m$ de $\R^{N_1}$ et $\varphi : S_1\to\R^{N_2}$ continue.
1. Si $S_1$ est un ouvert de $\R^{N}$ ($N=N_1$), on a pour tout $p\in S_1$, $T_pS_1=\R^N$, et l'on retrouve la définition usuelle de $d\varphi$ : si $\varphi$ est différentiable en $p$, $d\varphi_p$ est la différentielle usuelle de $\varphi$ en $p$.
2. Si $\varphi$ est la restriction d'une fonction différentiable $F$ définie sur un voisinage ouvert $V$ de $S_1$ dans $\R^{N_1}$ (à valeurs dans $\R^{N_2}$), alors $\varphi$ est différentiable en tout point $p\in S_1$ et $d\varphi_p$ est la restriction de $dF_p$ à $T_pS_1$ :
$$
d\varphi_p=dF_{p\,|T_pS_1}.
$$
3. Si $\varphi$ est différentiable en $p$ et si $x : U\to S_1$ est un paramétrage local en $p$ avec $x(q)=p$, l'application linéaire $d\varphi_p : T_pS_1\to\R^{N_2}$ est caractérisée par la propriété suivante
$$
\varphi(x(q+h))=\varphi(p)+d\varphi_p(dx_q(h))+o(h)
$$
(comme fonction de $h$ définie dans un voisinage approprié de $0$ dans $\R^m$, c'est-à-dire pour $q+h$ dans un voisinage de $q$) : c'est l'**unique** application linéaire $L : T_pS_1\to\R^{N_2}$ telle que $\varphi(x(q+h))=\varphi(p)+L(dx_q(h))+o(h)$.

## Hypothèses

### H1 — $S_2=\R^{N_2}$

**Rôle.** Elle permet de soustraire des valeurs de $\varphi$ (point 3) et de parler d'un prolongement $F$ à valeurs dans un espace vectoriel (point 2). Elle simplifie aussi la différentiabilité : pour $\varphi$ à valeurs dans $\R^{N_2}$, « $\varphi$ différentiable en $p$ » équivaut à « $\varphi\circ x$ différentiable en $q$ » pour **un** paramétrage local $x$ en $p$ (Remarques IX.7.2 et IX.7.4, [[ch09-remarque-un-parametrage-suffit]]).

**Si on la retire.** Hypothèse de confort : si $S_2$ est une sous-variété de $\R^{N_2}$, on peut voir $\varphi$ comme application à valeurs dans $\R^{N_2}$ (Remarques IX.7.7, point 2) et les points 2 et 3 restent vrais tels quels ; la seule information supplémentaire est que $d\varphi_p$ prend ses valeurs dans $T_{\varphi(p)}S_2$.

### H2 — (point 2) $\varphi=F_{|S_1}$ avec $F$ différentiable sur un ouvert $V\supset S_1$

**Rôle.** Elle permet d'appliquer la règle de la chaîne à $F\circ x$ ; c'est l'outil de calcul principal.

**Si on la retire.** (a) **Prolongement non différentiable.** $S_1=\R\times\{0\}\subset\R^2$ et $F(a,b)=|b|$ : $\varphi=F_{|S_1}\equiv0$ est différentiable de différentielle nulle, mais $dF_p$ n'existe en aucun point de $S_1$ : le point 2 est un moyen de calcul (condition suffisante), pas une condition nécessaire. (b) **Oublier la restriction.** $F(a,b)=a$ et $\tilde F(a,b)=a+b$ ont la même restriction $\varphi(a,0)=a$ à $S_1=\R\times\{0\}$ ; $dF_p=(1,0)\neq d\tilde F_p=(1,1)$ (matrices lignes), mais les deux coïncident sur $T_pS_1=\R\times\{0\}$. Seule la restriction est intrinsèque.

### H3 — (point 3) $x$ est un paramétrage local en $p$ (immersion en $q$)

**Rôle.** L'unicité de $L$ repose sur la **surjectivité** de $dx_q : \R^m\to T_pS_1$ (Proposition IX.7.9), qui découle du fait que $x$ est un paramétrage local.

**Si on la retire.** $S_1=\R$, $x(t)=t^3$ (homéomorphisme $C^\infty$ de $\R$ sur $\R$, $dx_0=0$), $\varphi$ différentiable en $0$. Alors $\varphi(x(h))-\varphi(0)=\varphi(h^3)-\varphi(0)=O(|h|^3)=o(h)$, et $L(dx_0(h))=L(0)=0$ : l'égalité $\varphi(x(0+h))=\varphi(0)+L(dx_0(h))+o(h)$ est vraie pour **toute** application linéaire $L$. Elle ne caractérise plus rien.

## Idée de la preuve

Tout se lit sur la propriété 1 de la définition, $d\varphi_p\circ dx_q=d(\varphi\circ x)_q$. (1) Sur un ouvert, on prend $x=\mathrm{id}$. (2) Règle de la chaîne : $d(F\circ x)_q=dF_p\circ dx_q$. (3) C'est le développement limité de $\varphi\circ x$ en $q$ ; l'unicité vient de l'unicité de la différentielle et de la surjectivité de $dx_q$ sur $T_pS_1$.

## Preuve

Rappelons que, $S_2$ étant ici l'ouvert $\R^{N_2}$ (de paramétrage $\mathrm{id}$), $\varphi$ est différentiable en $p$ si et seulement si $\varphi\circ x$ est différentiable en $q=x^{-1}(p)$ pour un paramétrage local $x$ de $S_1$ en $p$ (Remarques IX.7.2 et IX.7.4) ; et dans ce cas, pour tout $\vec w\in\R^m$,
$$
(\ast)\qquad d\varphi_p(dx_q(\vec w))=d(\varphi\circ x)_q(\vec w)\qquad\text{(Définition IX.7.15, propriété 1).}
$$

**1.** Un ouvert $S_1$ de $\R^N$ est une sous-variété de dimension $N$ ([[ch09-ex-ouvert-sous-variete]]) : en $p$, un paramétrage local est l'identité $x=\mathrm{id} : S_1\to S_1$ (avec $U=V=S_1$), de différentielle $\mathrm{id}_{\R^N}$. Par la Proposition IX.7.9, $T_pS_1=d(\mathrm{id})_p(\R^N)=\R^N$. Avec ce paramétrage, $q=p$, $\varphi\circ x=\varphi$ : « différentiable en $p$ » a le sens usuel, et $(\ast)$ s'écrit $d\varphi_p(\vec w)=d\varphi_p^{\text{usuelle}}(\vec w)$ pour tout $\vec w\in\R^N$.

**2.** Soit $p\in S_1$ et $x : U\to S_1$ un paramétrage local en $p$, $x(q)=p$. Comme $x(U)\subset S_1\subset V$, on a $\varphi\circ x=F\circ x$ sur $U$. L'application $x$ est différentiable en $q$ et $F$ est différentiable en $x(q)=p$ (point de l'ouvert $V$) : par la règle de la chaîne ([[ch05-composition-differentielles]]), $F\circ x$ est différentiable en $q$ et $d(F\circ x)_q=dF_p\circ dx_q$. Donc $\varphi$ est différentiable en $p$ (et continue, comme restriction de $F$ continue), et pour tout $\vec v=dx_q(\vec w)\in T_pS_1$, par $(\ast)$,
$$
d\varphi_p(\vec v)=d(\varphi\circ x)_q(\vec w)=dF_p(dx_q(\vec w))=dF_p(\vec v).
$$
Comme tout $\vec v\in T_pS_1$ est de cette forme (Proposition IX.7.9), $d\varphi_p=dF_{p\,|T_pS_1}$.

**3.** *Le développement.* $\varphi\circ x$ est différentiable en $q$ ; par définition de la différentielle ([[ch05-differentielle-def]]), pour $h$ assez petit (de sorte que $q+h\in U$),
$$
\varphi(x(q+h))=\varphi(x(q))+d(\varphi\circ x)_q(h)+o(h)=\varphi(p)+d\varphi_p(dx_q(h))+o(h)
$$
d'après $(\ast)$ appliquée à $\vec w=h$.

*L'unicité.* Soit $L : T_pS_1\to\R^{N_2}$ linéaire telle que $\varphi(x(q+h))=\varphi(p)+L(dx_q(h))+o(h)$. Alors $L\circ dx_q : \R^m\to\R^{N_2}$ est linéaire et vérifie $(\varphi\circ x)(q+h)=(\varphi\circ x)(q)+(L\circ dx_q)(h)+o(h)$ : par unicité de la différentielle, $L\circ dx_q=d(\varphi\circ x)_q=d\varphi_p\circ dx_q$. Comme $dx_q$ est **surjective** de $\R^m$ sur $T_pS_1$ (Proposition IX.7.9, [[ch09-espace-tangent-image-dx]]), on en déduit $L=d\varphi_p$. $\square$

## Preuve à trous

On utilise la propriété 1 de la définition : <trou indice="relation entre $d\varphi_p$, $dx_q$ et $d(\varphi\circ x)_q$">$d\varphi_p\circ dx_q=d(\varphi\circ x)_q$</trou>.

**1.** Sur un ouvert, on prend le paramétrage <trou>$x=\mathrm{id}$, d'où $T_pS_1=\R^N$ et $d\varphi_p=d(\varphi\circ\mathrm{id})_p$, la différentielle usuelle</trou>.

**2.** Si $\varphi=F_{|S_1}$, alors $\varphi\circ x=F\circ x$ et <trou indice="règle de la chaîne">$d(F\circ x)_q=dF_p\circ dx_q$</trou>, donc $d\varphi_p(dx_q(\vec w))=dF_p(dx_q(\vec w))$ pour tout $\vec w$, c'est-à-dire $d\varphi_p=dF_{p\,|T_pS_1}$.

**3.** Le développement limité de $\varphi\circ x$ en $q$ donne $\varphi(x(q+h))=\varphi(p)+d\varphi_p(dx_q(h))+o(h)$. Si $L$ vérifie la même relation, alors <trou indice="unicité de la différentielle de $\varphi\circ x$">$L\circ dx_q=d(\varphi\circ x)_q=d\varphi_p\circ dx_q$</trou>, et <trou indice="que sait-on de l'image de $dx_q$ ?">comme $dx_q(\R^m)=T_pS_1$, $L=d\varphi_p$</trou>. $\square$

## Exemples

* **Fonction hauteur** (Exemple IX.7.20, [[ch09-ex-fonction-hauteur]]). $h(p)=\langle p-p_0,a\rangle$ est la restriction de $H(y)=\langle y-p_0,a\rangle$, affine, de différentielle $dH_y(\vec v)=\langle\vec v,a\rangle$. Donc $dh_p(\vec v)=\langle\vec v,a\rangle$ pour $\vec v\in T_pS$. Sur la sphère $\mathbb S^2$ avec $a=(0,0,1)$, $p_0=0$ : au pôle nord $p=(0,0,1)$, $T_p\mathbb S^2=\{v_3=0\}$, donc $dh_p=0$, alors que $dH_p\neq0$.
* **Distance au carré et distance** (Exemples IX.7.21–IX.7.22, Exercice IX.7.23). $f(p)=\norm{p-p_0}^2$ est la restriction de $F(y)=\langle y-p_0,y-p_0\rangle$, et $dF_y(\vec v)=2\langle\vec v,y-p_0\rangle$, donc $df_p(\vec v)=2\langle\vec v,p-p_0\rangle$ sur $T_pS$. Si $p_0\notin S$, $g(p)=\norm{p-p_0}$ est la restriction de $G=\sqrt F$ sur l'ouvert $\R^N\setminus\{p_0\}$ (qui contient $S$), et $dG_y(\vec v)=\dfrac{dF_y(\vec v)}{2\sqrt{F(y)}}$, d'où $dg_p(\vec v)=\dfrac{\langle\vec v,p-p_0\rangle}{\norm{p-p_0}}$ sur $T_pS$.
* **Vérification du point 3 sur le cercle.** $\varphi(a,b)=a$ sur $\mathbb S^1$, $x(\theta)=(\cos\theta,\sin\theta)$, $q=\frac\pi2$, $p=(0,1)$. D'un côté $\varphi(x(q+h))=\cos(\frac\pi2+h)=-\sin h=-h+o(h)$. De l'autre, $dx_q(h)=h(-\sin q,\cos q)=(-h,0)$ et, par le point 2, $d\varphi_p(-h,0)=-h$. Les deux coïncident.

## Pièges

* > ⚠️ **$d\varphi_p=0$ n'équivaut pas à $dF_p=0$.** Le point 2 ne garde que la restriction à $T_pS_1$ : au pôle nord, la hauteur a $dh_p=0$ (point critique sur la sphère) bien que $dF_p\neq0$. C'est le point de départ des multiplicateurs de Lagrange ([[ch09-multiplicateurs-lagrange]]).
* Deux prolongements différents de $\varphi$ ont des différentielles qui coïncident sur $T_pS_1$ mais pas ailleurs : ne jamais évaluer « $d\varphi_p$ » sur un vecteur non tangent.
* Dans le point 3, le reste est un $o(h)$ avec $h\in\R^m$ (variable du paramétrage), pas un $o(\vec v)$ dans $\R^{N_1}$ ; et le terme linéaire est $d\varphi_p(dx_q(h))$, pas $d\varphi_p(h)$ (qui n'a pas de sens : $h\notin T_pS_1$ en général).
* Le point 2 suppose $F$ différentiable sur un **ouvert** contenant $S_1$ (au moins un voisinage de $p$) ; une fonction définie seulement sur $S_1$ n'a pas de « $dF_p$ » au sens du chapitre V.
