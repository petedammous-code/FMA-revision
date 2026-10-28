---
id: ch09-inversion-locale-sous-varietes
type: theorem
chapter: 9
title: Théorème d'inversion locale sur les sous-variétés
ref: Théorème IX.7.26
page: 166
importance: 3
depends: [ch06-inversion-locale, ch09-composition-differentielles, ch09-espace-tangent-image-dx, ch09-ex-parametrages-cartes-cr, ch09-application-cr-entre-sous-varietes-def, ch09-diffeomorphisme-sous-varietes-def, ch09-differentielle-diffeomorphisme-isomorphisme, ch09-ex-ouvert-de-sous-variete, ch09-remarques-applications-cr]
tags: [sous-variete, inversion-locale, diffeomorphisme-local, parametrage-local, carte]
---
## Intuition

> 💡 Sur un ouvert de $\R^m$, le théorème d'inversion locale dit : si la différentielle est inversible en un point, l'application est inversible (avec un inverse lisse) près de ce point ([[ch06-inversion-locale]]). Sur des sous-variétés, **c'est le même théorème lu dans des cartes** : on descend dans $\R^m$ par des paramétrages, on applique l'inversion locale usuelle, et on remonte.

Le schéma à garder en tête :
$$
U_1\xrightarrow{\ x_1\ }S_1\xrightarrow{\ \varphi\ }S_2\xrightarrow{\ x_2^{-1}\ }U_2 ,\qquad \psi=x_2^{-1}\circ\varphi\circ x_1 .
$$
Ici $x_1:U_1\to S_1$ et $x_2:U_2\to S_2$ sont des **paramétrages locaux** (homéomorphismes $C^k$ immersifs d'un ouvert de $\R^m$ sur un ouvert de la sous-variété, [[ch09-sous-variete-def]]), $x_2^{-1}$ est une **carte**, $T_pS$ est l'**espace tangent** ([[ch09-espace-tangent-image-dx]]), $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ la **différentielle** ([[ch09-differentielle-entre-sous-varietes-def]]) et un **$C^k$-difféomorphisme** est une bijection $C^k$ d'inverse $C^k$ ([[ch09-diffeomorphisme-sous-varietes-def]]).

## Énoncé

**Théorème (poly, Théorème IX.7.26 — Inversion locale, p. 166).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$) de classe au moins $C^k$, soit $p\in S_1$, soit
$$
\varphi:S_1\longrightarrow S_2
$$
une application de classe $C^k$ telle que
$$
d\varphi_p:T_pS_1\longrightarrow T_{\varphi(p)}S_2
$$
soit un isomorphisme linéaire. Alors il existe un voisinage ouvert $V_1$ de $p$ dans $S_1$ et un voisinage ouvert $V_2$ de $\varphi(p)$ dans $S_2$ tels que $\varphi(V_1)=V_2$ et la restriction de $\varphi$ à $V_1$ réalise un $C^k$-difféomorphisme de $V_1$ sur $V_2$.

(Ici $k\ge1$ ou $k=\infty$, convention du chapitre. L'hypothèse impose $\dim S_1=\dim S_2$.)

## Hypothèses

### H1 — $S_1$, $S_2$ de classe au moins $C^k$

**Rôle.** Elle donne des paramétrages $x_1$, $x_2$ de classe $C^k$, donc des cartes $x_1^{-1}$, $x_2^{-1}$ de classe $C^k$ ([[ch09-ex-parametrages-cartes-cr]]) : c'est ce qui rend l'inverse $x_1\circ\psi^{-1}\circ x_2^{-1}$ de classe $C^k$. Elle est aussi requise pour que « $\varphi$ de classe $C^k$ » ait un sens ([[ch09-application-cr-entre-sous-varietes-def]]).

**Si on la retire.** C'est une hypothèse de cadre : dans le poly, la classe $C^k$ d'une application n'est définie qu'entre sous-variétés de classe au moins $C^k$. Si $S_1,S_2$ ne sont que $C^1$, la même preuve (avec $k=1$) donne un $C^1$-difféomorphisme local.

### H2 — $\varphi$ de classe $C^k$, $k\ge1$

**Rôle.** $\psi=x_2^{-1}\circ\varphi\circ x_1$ est alors de classe $C^k$ entre ouverts de $\R^m$, ce qu'exige le théorème d'inversion locale VI.3.2.

**Si on la retire.** Différentiable ne suffit pas, il faut la continuité de la différentielle. Sur $S_1=S_2=\R$, soit $\varphi(t)=t+2t^2\sin(1/t)$ pour $t\ne0$, $\varphi(0)=0$. Elle est dérivable partout, avec $\varphi'(0)=\lim_{t\to0}(1+2t\sin(1/t))=1$ : $d\varphi_0$ est un isomorphisme. Mais pour $t\ne0$, $\varphi'(t)=1+4t\sin(1/t)-2\cos(1/t)$, d'où $\varphi'\big(\tfrac1{2\pi n}\big)=1-2=-1$ et $\varphi'\big(\tfrac1{(2n+1)\pi}\big)=1+2=3$. Ainsi $\varphi'$ change de signe dans tout voisinage de $0$ : $\varphi$ n'est monotone sur aucun intervalle contenant $0$, donc (étant continue) n'est injective sur aucun voisinage de $0$. Pas d'inverse local.

### H3 — $d\varphi_p$ isomorphisme

**Rôle.** Elle rend $d\psi_{q_1}$ inversible (composée de trois isomorphismes), hypothèse centrale de VI.3.2.

**Si on la retire.**
* *Différentielle non injective.* $\varphi:\mathbb S^1\to\R$, $(X,Y)\mapsto X$, en $p=(1,0)$ : $T_p\mathbb S^1=\R e_2$ et $d\varphi_p(e_2)=0$. Aucun voisinage de $p$ n'est envoyé injectivement : $(X,Y)$ et $(X,-Y)$ ont même image. De même $t\mapsto t^3$ en $0$ est un homéomorphisme mais pas un difféomorphisme local ($\varphi^{-1}$ non dérivable en $0$).
* *Différentielle seulement injective* ($\dim S_1<\dim S_2$). L'inclusion de l'équateur $\mathbb S^1\times\{0\}\to\mathbb S^2$ a une différentielle injective, mais l'image d'un voisinage de $p$ est un arc, qui n'est pas un ouvert de $\mathbb S^2$ : on obtient une immersion ([[ch09-immersion-submersion-sous-varietes-def]]), pas un difféomorphisme local.

## Idée de la preuve

Choisir des paramétrages $x_1$ en $p$ et $x_2$ en $\varphi(p)$ avec $\varphi(x_1(U_1))\subset x_2(U_2)$ ; $\psi=x_2^{-1}\circ\varphi\circ x_1$ a pour différentielle en $q_1$ une composée de trois isomorphismes ; l'inversion locale usuelle donne un difféomorphisme $U_0\to V_0$, que l'on remonte en $V_1=x_1(U_0)\to V_2=x_2(V_0)$.

## Preuve

*Étape 1 : choix des paramétrages.* Soient $x_1:U_1\to S_1$ et $x_2:U_2\to S_2$ des paramétrages locaux de classe $C^k$ de $S_1$ en $p$ et de $S_2$ en $\varphi(p)$. L'ensemble $x_2(U_2)$ est un ouvert de $S_2$ contenant $\varphi(p)$ ; $\varphi$ étant continue, $\varphi^{-1}(x_2(U_2))$ est un ouvert de $S_1$ contenant $p$. Quitte à remplacer $U_1$ par l'ouvert $x_1^{-1}\big(\varphi^{-1}(x_2(U_2))\big)$ (ouvert de $U_1$ par continuité de $x_1$, contenant $q_1=x_1^{-1}(p)$) — la restriction de $x_1$ restant un paramétrage —, on peut supposer
$$
x_1(U_1)\subset\varphi^{-1}(x_2(U_2)).
$$
L'application $\psi=x_2^{-1}\circ\varphi\circ x_1:U_1\to U_2$ est alors bien définie sur tout $U_1$, et elle est de classe $C^k$ par définition de « $\varphi$ de classe $C^k$ » ([[ch09-application-cr-entre-sous-varietes-def]]). Posons $q_2=\psi(q_1)=x_2^{-1}(\varphi(p))$.

*Étape 2 : la différentielle de $\psi$ est un isomorphisme.* Les applications $x_1:U_1\to S_1$ et $x_2^{-1}:x_2(U_2)\to U_2$ sont de classe $C^k$ entre sous-variétés ([[ch09-ex-parametrages-cartes-cr]] ; $x_2(U_2)$ est une sous-variété comme ouvert de $S_2$, [[ch09-ex-ouvert-de-sous-variete]]). Par la règle de composition ([[ch09-composition-differentielles]]) — et comme sur les ouverts $U_1$, $U_2$ la différentielle au sens des sous-variétés est la différentielle usuelle —
$$
d\psi_{q_1}=d(x_2^{-1})_{\varphi(p)}\circ d\varphi_p\circ d(x_1)_{q_1}.
$$
Or :
* $d(x_1)_{q_1}:\R^{m_1}\to T_pS_1$ est injective (définition d'un paramétrage) et d'image $T_pS_1$ ([[ch09-espace-tangent-image-dx]]) : c'est un isomorphisme ;
* $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ est un isomorphisme par hypothèse ;
* $x_2:U_2\to x_2(U_2)$ est un $C^k$-difféomorphisme d'inverse $x_2^{-1}$ (homéomorphisme par définition d'un paramétrage, $x_2$ et $x_2^{-1}$ de classe $C^k$ par [[ch09-ex-parametrages-cartes-cr]]), donc $d(x_2^{-1})_{\varphi(p)}:T_{\varphi(p)}S_2\to\R^{m_2}$ est un isomorphisme ([[ch09-differentielle-diffeomorphisme-isomorphisme]]) ; on a utilisé $T_{\varphi(p)}\big(x_2(U_2)\big)=T_{\varphi(p)}S_2$, les deux espaces étant égaux à $d(x_2)_{q_2}(\R^{m_2})$ ([[ch09-espace-tangent-image-dx]]).

Donc $d\psi_{q_1}:\R^{m_1}\to\R^{m_2}$ est un isomorphisme ; en particulier $m_1=m_2=:m$, et, en dimension finie, cet isomorphisme est bicontinu.

*Étape 3 : inversion locale usuelle.* Le théorème d'inversion locale ([[ch06-inversion-locale]], Théorème VI.3.2) appliqué à $\psi:U_1\to\R^m$, de classe $C^k$, en $q_1$, fournit un voisinage ouvert $U_0\subset U_1$ de $q_1$ et un voisinage ouvert $V_0$ de $q_2$ tels que $\psi$ se restreigne en un $C^k$-difféomorphisme de $U_0$ sur $V_0$. Comme $\psi(U_1)\subset U_2$, on a $V_0=\psi(U_0)\subset U_2$.

*Étape 4 : retour sur les sous-variétés.* Posons $V_1=x_1(U_0)$ et $V_2=x_2(V_0)$.
* $V_1$ est un ouvert de $S_1$ contenant $p$ : $x_1$ est un homéomorphisme de $U_1$ sur l'ouvert $x_1(U_1)$ de $S_1$, donc envoie l'ouvert $U_0$ sur un ouvert de $x_1(U_1)$, donc de $S_1$. De même $V_2$ est un ouvert de $S_2$ contenant $x_2(q_2)=\varphi(p)$.
* Sur $U_1$, $\varphi\circ x_1=x_2\circ\psi$, donc $\varphi(V_1)=x_2(\psi(U_0))=x_2(V_0)=V_2$.
* Sur $V_1$, $\varphi|_{V_1}=x_2\circ\psi\circ x_1^{-1}$ est la composée des bijections $x_1^{-1}:V_1\to U_0$, $\psi:U_0\to V_0$, $x_2:V_0\to V_2$ ; c'est donc une bijection de $V_1$ sur $V_2$, d'inverse $x_1\circ\psi^{-1}\circ x_2^{-1}:V_2\to V_1$.
* $\varphi|_{V_1}$ est de classe $C^k$ (restriction d'une application $C^k$ à l'ouvert $V_1$) et son inverse $x_1\circ\psi^{-1}\circ x_2^{-1}$ est une composée d'applications $C^k$ entre sous-variétés (carte, difféomorphisme entre ouverts de $\R^m$, paramétrage ; [[ch09-ex-parametrages-cartes-cr]], et stabilité par composition, [[ch09-remarques-applications-cr]]). Ces applications étant continues, $\varphi|_{V_1}$ est un homéomorphisme.

Ainsi $\varphi|_{V_1}:V_1\to V_2$ est un $C^k$-difféomorphisme ([[ch09-diffeomorphisme-sous-varietes-def]]). $\square$

## Preuve à trous

*Paramétrages.* On prend $x_1:U_1\to S_1$ en $p$ et $x_2:U_2\to S_2$ en $\varphi(p)$ et, par continuité de $\varphi$, on réduit $U_1$ pour avoir <trou indice="pour que la composée soit définie sur tout U_1">$x_1(U_1)\subset\varphi^{-1}(x_2(U_2))$</trou>. Alors $\psi=x_2^{-1}\circ\varphi\circ x_1:U_1\to U_2$ est $C^k$.

*Différentielle.* Par la règle de composition, <trou indice="trois facteurs">$d\psi_{q_1}=d(x_2^{-1})_{\varphi(p)}\circ d\varphi_p\circ d(x_1)_{q_1}$</trou>, composée de trois isomorphismes : $d(x_1)_{q_1}:\R^{m_1}\to T_pS_1$ car <trou indice="injectivité + Proposition IX.7.9">$d(x_1)_{q_1}$ est injective d'image $T_pS_1$</trou>, $d\varphi_p$ par hypothèse, et $d(x_2^{-1})_{\varphi(p)}$ comme différentielle d'un difféomorphisme. Donc $m_1=m_2=m$ et $d\psi_{q_1}\in\GL(\R^m)$.

*Inversion locale usuelle.* Le Théorème VI.3.2 donne $U_0\ni q_1$ et $V_0\ni q_2$ ouverts, $V_0\subset U_2$, avec $\psi:U_0\to V_0$ $C^k$-difféomorphisme.

*Remontée.* On pose <trou indice="images par les paramétrages">$V_1=x_1(U_0)$ et $V_2=x_2(V_0)$, ouverts de $S_1$, $S_2$ car $x_1,x_2$ sont des homéomorphismes sur des ouverts</trou>. Comme $\varphi\circ x_1=x_2\circ\psi$, $\varphi(V_1)=V_2$ et $\varphi|_{V_1}$ a pour inverse <trou>$x_1\circ\psi^{-1}\circ x_2^{-1}$, de classe $C^k$ comme composée d'applications $C^k$</trou>. $\square$

## Exemples

* **$z\mapsto z^2$ sur le cercle.** $\varphi:\mathbb S^1\to\mathbb S^1$, $(X,Y)\mapsto(X^2-Y^2,2XY)$, de classe $C^\infty$ (restriction d'un polynôme). En $p=(\cos t,\sin t)$, $T_p\mathbb S^1=\R(-\sin t,\cos t)$ et, avec la courbe $\alpha(s)=(\cos(t+s),\sin(t+s))$, $\varphi\circ\alpha(s)=(\cos2(t+s),\sin2(t+s))$, d'où $d\varphi_p(-\sin t,\cos t)=2(-\sin2t,\cos2t)\ne0$. Les deux espaces tangents étant de dimension $1$, $d\varphi_p$ est un isomorphisme en tout point : $\varphi$ est un difféomorphisme local partout. Concrètement, $V_1$ = un arc ouvert d'angle $<\pi$ autour de $p$, $V_2$ = l'arc d'angle double. Mais $\varphi$ n'est pas injective ($\varphi(-p)=\varphi(p)$) : le résultat est **local**.
* **Projection de la sphère sur le plan horizontal.** $\varphi:\mathbb S^2\to\R^2$, $(x,y,z)\mapsto(x,y)$. Sur $T_p\mathbb S^2=p^\perp$, $d\varphi_p(v)=(v_1,v_2)$ a pour noyau $p^\perp\cap\R e_3$, non nul ssi $\langle p,e_3\rangle=0$. Donc :
  * si $p_3\ne0$, $d\varphi_p$ est un isomorphisme $p^\perp\to\R^2$ (dimensions $2$) et $\varphi$ est un difféomorphisme local en $p$ — par exemple de l'hémisphère $\{z>0\}$ sur le disque $D(0,1)$, d'inverse $(x,y)\mapsto(x,y,\sqrt{1-x^2-y^2})$ ;
  * si $p_3=0$ (équateur), $d\varphi_p(e_3)=0$ et $\varphi$ n'est injective sur aucun voisinage de $p$ : $(x,y,\pm z)$ ont la même image.
  C'est le prototype de [[ch09-graphe-au-dessus-du-plan-tangent]].
* **Lecture dans des cartes.** Pour $\varphi:\R\to\mathbb S^1$, $t\mapsto(\cos t,\sin t)$, et $x_2(s)=(\cos s,\sin s)$ sur $]t_0-\pi,t_0+\pi[$, on a $\psi=x_2^{-1}\circ\varphi=\mathrm{id}$ sur $]t_0-\pi,t_0+\pi[$ : $\varphi$ est un difféomorphisme de cet intervalle sur $\mathbb S^1$ privé d'un point. Globalement $\varphi$ est $2\pi$-périodique, donc non injective.

## Pièges

* > ⚠️ Le résultat est **local** : $d\varphi_p$ isomorphisme en tout point ne donne pas un difféomorphisme global ($z\mapsto z^2$ sur $\mathbb S^1$, $t\mapsto e^{it}$). Pour un difféomorphisme global, il faut en plus la **bijectivité** (voir [[ch09-diffeomorphisme-sous-varietes-def]]).
* > ⚠️ « $d\varphi_p$ isomorphisme » se teste sur $T_pS_1\to T_{\varphi(p)}S_2$, pas sur la différentielle d'un prolongement $\R^{N_1}\to\R^{N_2}$ (qui n'est même pas carrée en général). Quand $\dim S_1=\dim S_2$, il suffit de vérifier l'**injectivité** sur $T_pS_1$.
* $V_1$, $V_2$ sont des ouverts **des sous-variétés** (topologie induite), pas de $\R^{N_1}$, $\R^{N_2}$.
* Les dimensions des sous-variétés doivent être égales ; les dimensions ambiantes $N_1,N_2$ peuvent différer.
* Dans la preuve, ne pas oublier de réduire $U_1$ pour que $\varphi(x_1(U_1))\subset x_2(U_2)$ : sinon $x_2^{-1}\circ\varphi\circ x_1$ n'est pas définie sur tout $U_1$.
