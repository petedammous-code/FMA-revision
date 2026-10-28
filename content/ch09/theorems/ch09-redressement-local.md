---
id: ch09-redressement-local
type: proposition
chapter: 9
title: Caractérisation par redressement : une sous-variété est localement difféomorphe à $\mathbb R^m\times\{0\}$
ref: Proposition IX.3.1
page: 151
importance: 3
depends: [ch09-sous-variete-def, ch06-inversion-locale, ch06-diffeomorphisme-def]
tags: [sous-variete, redressement, diffeomorphisme, inversion-locale, carte]
---
## Intuition

> 💡 Une sous-variété de dimension $m$, c'est une feuille ($m$-dimensionnelle) posée dans $\R^N$, éventuellement courbée. Le redressement dit : près de chaque point, on peut **déformer tout l'espace ambiant** (par un difféomorphisme $\Phi$) de façon à rendre la feuille **plate**, c'est-à-dire à l'envoyer sur un morceau du sous-espace $\R^m\times\{0\}$ — comme on aplatit une nappe froissée en déformant la pièce entière.

Rappels. Un **$C^k$-difféomorphisme** $\Phi:V'\to W$ entre deux ouverts de $\R^N$ est une bijection de classe $C^k$ dont l'inverse est aussi de classe $C^k$ ([[ch06-diffeomorphisme-def]]). Une **sous-variété** de dimension $m$ et de classe $C^k$ est une partie $S\subset\R^N$ admettant en chaque point un **paramétrage local** $x:U\to V\cap S$ ($U$ ouvert de $\R^m$, $V$ ouvert de $\R^N$) qui est $C^k$, homéomorphisme sur $V\cap S$ et immersion ([[ch09-sous-variete-def]]). On identifie $\R^N=\R^m\times\R^{N-m}$.

C'est la « deuxième définition » des sous-variétés, celle que l'on utilise pour **raisonner** : on redresse $S$, on travaille dans $\R^m\times\{0\}$, puis on revient par $\Phi^{-1}$.

## Énoncé

**Proposition (poly, Proposition IX.3.1, p. 151).** Soient $m\in\N$ et $k\in\N^\times\cup\{\infty\}$ et $S$ une partie de $\R^N$. Alors $S$ est une sous-variété de dimension $m$ de classe $C^k$ si et seulement si pour tout $p\in S$, il existe un voisinage ouvert $V'$ de $p$ dans $\R^N$, un ouvert $W$ dans $\R^N$ et un $C^k$-difféomorphisme $\Phi:V'\to W$ tels que
$$
\Phi(V'\cap S)=(\R^m\times\{0\})\cap W.
$$

## Hypothèses

### H1 — $\Phi$ est un $C^k$-difféomorphisme (pas seulement un homéomorphisme)

**Rôle.** Dans le sens « $\Leftarrow$ », c'est ce qui rend le paramétrage $u\mapsto\Phi^{-1}(u,0)$ de classe $C^k$ et **immersif** ($d(\Phi^{-1})$ est un isomorphisme). Dans le sens « $\Rightarrow$ », c'est ce que fournit le théorème d'inversion locale.

**Si on la retire.** Le cusp $C=\{(t^2,t^3),\ t\in\R\}=\{(u,v)\in\R^2,\ u=|v|^{2/3}\}$ est redressé par l'**homéomorphisme** $\Phi(u,v)=(v,\ u-|v|^{2/3})$ de $\R^2$ (inverse : $(a,b)\mapsto(b+|a|^{2/3},a)$) : $\Phi(C)=\R\times\{0\}$. Pourtant $C$ n'est pas une sous-variété $C^1$ (poly, Exercice IX.2.13, p. 150). En effet, si $y=(a,b):I\to C\cap V$ était un paramétrage $C^1$ en $(0,0)$ avec $y(s_0)=(0,0)$ : $a\ge0$ sur $C$ et $a(s_0)=0$, donc $a$ est minimale en $s_0$ et $a'(s_0)=0$ ; l'immersion impose alors $b'(s_0)\neq0$ ; mais $a=|b|^{2/3}$ donne $\dfrac{a(s)}{|s-s_0|}=\dfrac{|b(s)|^{2/3}}{|s-s_0|}\sim\dfrac{|b'(s_0)|^{2/3}}{|s-s_0|^{1/3}}\to+\infty$, ce qui contredit $a'(s_0)=0$.

### H2 — l'égalité $\Phi(V'\cap S)=(\R^m\times\{0\})\cap W$ (pas une simple inclusion)

**Rôle.** Elle garantit que le paramétrage $u\mapsto\Phi^{-1}(u,0)$ atteint **tous** les points de $S$ proches de $p$, et seulement eux.

**Si on la retire.** Avec l'inclusion $\subset$ seule, n'importe quelle partie d'une droite conviendrait : la demi-droite fermée $S=[0;+\infty[\times\{0\}\subset\R^2$ vérifie $\Phi(V'\cap S)\subset(\R\times\{0\})\cap W$ avec $\Phi=\id$, $V'=W=\R^2$, mais n'est pas une sous-variété ([[ch09-contre-ex-demi-droite]], dont l'argument est purement topologique et vaut dans $\R^2$).

### H3 — le même $m$ en tout point $p$

**Rôle.** La dimension d'une sous-variété est fixée dans la définition ; tous les paramétrages partent d'ouverts du même $\R^m$.

**Si on la retire.** $S=(\R\times\{0\})\cup\{(0,1)\}$ se redresse en chaque point, avec $m=1$ le long de la droite ($\Phi=\id$ sur $V'=\R\times]-\frac12;\frac12[$) et $m=0$ en $(0,1)$ ($\Phi(u,v)=(u,v-1)$ sur $V'=D((0,1),\frac12)$). Mais $S$ n'est pas une sous-variété au sens du poly (dimension non constante) ; c'est seulement une réunion disjointe de sous-variétés de dimensions différentes.

## Idée de la preuve

$\Rightarrow$ : on « épaissit » le paramétrage $x$ en $F(u,t)=x(u)+\varphi(t)$, où $\varphi$ envoie $\R^{N-m}$ sur un supplémentaire de $dx_q(\R^m)$ ; $dF_{(q,0)}$ est inversible, l'inversion locale fait de $F$ un difféomorphisme local et $\Phi=F^{-1}$ redresse $S$. $\Leftarrow$ : $u\mapsto\Phi^{-1}(u,0)$ est un paramétrage local.

## Preuve

**Sens direct.** Supposons que $S$ soit une sous-variété. Soient $p\in S$ et $x:U\to V\cap S$ un paramétrage local de $S$ en $p$ (notations de [[ch09-sous-variete-def]]), et $q=x^{-1}(p)$. Comme $dx_q$ est injective, $dx_q(\R^m)$ est de dimension $m$ ; soit $H$ un supplémentaire,
$$
\R^N=dx_q(\R^m)\oplus H,
$$
sous-espace de dimension $N-m$, et choisissons un isomorphisme linéaire $\varphi:\R^{N-m}\to H$. On étend $x$ en
$$
F:U\times\R^{N-m}\to\R^N,\qquad F(u,t)=x(u)+\varphi(t).
$$
$F$ est de classe $C^k$ sur l'ouvert $U\times\R^{N-m}$ de $\R^N$, et
$$
dF_{(q,0)}:\R^m\times\R^{N-m}\to\R^N,\qquad (h,w)\mapsto dx_q(h)+\varphi(w).
$$
Son image contient $dx_q(\R^m)$ et $H$, donc vaut $\R^N$ : $dF_{(q,0)}$ est surjective, donc un isomorphisme par égalité des dimensions.

Le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit un voisinage ouvert de $(q,0)$ sur lequel $F$ est un $C^k$-difféomorphisme sur un ouvert ; quitte à le rétrécir, on le prend de la forme $U'\times Y$, avec $U'\subset U$ ouvert contenant $q$ et $Y$ ouvert de $\R^{N-m}$ contenant $0$, et assez petit pour que $V'_0=F(U'\times Y)$ (ouvert contenant $p=F(q,0)$) soit inclus dans $V$.

*Point délicat (le poly passe vite ; c'est ici que sert la condition 2 de la définition).* Les points de $V'_0\cap S$ sont de la forme $x(u)$ avec $u\in U$, mais pas forcément avec $u\in U'$. On utilise que $x$ est un **homéomorphisme** de $U$ sur $V\cap S$ : $x(U')$ est un ouvert de $V\cap S$, donc de $S$, donc il existe un ouvert $O$ de $\R^N$ tel que $x(U')=O\cap S$. Posons
$$
V'=V'_0\cap O,\qquad \Phi=F^{-1}|_{V'}:V'\to W=\Phi(V').
$$
$V'$ est un ouvert contenant $p$, $W$ est ouvert (image d'un ouvert par l'homéomorphisme $F^{-1}$), et $\Phi$ est un $C^k$-difféomorphisme. Vérifions $\Phi(V'\cap S)=(\R^m\times\{0\})\cap W$ :
* si $z\in V'\cap S$, alors $z\in O\cap S=x(U')$, donc $z=x(u)=F(u,0)$ avec $(u,0)\in U'\times Y$, et $\Phi(z)=(u,0)\in(\R^m\times\{0\})\cap W$ ;
* si $(u,0)\in W\subset U'\times Y$, alors $z=\Phi^{-1}(u,0)=F(u,0)=x(u)\in S$ et $z\in V'$, donc $(u,0)=\Phi(z)\in\Phi(V'\cap S)$.

**Réciproque.** Soient $p\in S$ et $\Phi:V'\to W$ comme dans l'énoncé. Posons $U=\{u\in\R^m,\ (u,0)\in W\}$ : c'est un ouvert de $\R^m$ (image réciproque de l'ouvert $W$ par $u\mapsto(u,0)$), non vide car $\Phi(p)\in(\R^m\times\{0\})\cap W$. Définissons
$$
x:U\to\R^N,\qquad x(u)=\Phi^{-1}(u,0).
$$
1. $x$ est de classe $C^k$ (composée de $\Phi^{-1}$, $C^k$, et d'une application linéaire).
2. $x(U)=\Phi^{-1}((\R^m\times\{0\})\cap W)=V'\cap S$ par l'hypothèse ; $x$ est injective ($\Phi^{-1}$ l'est) ; son inverse $V'\cap S\to U$ est $z\mapsto$ (les $m$ premières coordonnées de $\Phi(z)$), continue. Donc $x$ est un homéomorphisme de $U$ sur $V'\cap S$.
3. $dx_u(h)=d(\Phi^{-1})_{(u,0)}(h,0)$ ; comme $d(\Phi^{-1})_{(u,0)}$ est un isomorphisme (différentielle d'un difféomorphisme) et $h\mapsto(h,0)$ est injective, $dx_u$ est injective.

Donc $x$ est un paramétrage local de $S$ en $p$ (avec $V=V'$), et $S$ est une sous-variété de dimension $m$ et de classe $C^k$. $\square$

## Preuve à trous

**Sens direct.** Soit $x:U\to V\cap S$ un paramétrage en $p=x(q)$. On choisit un supplémentaire $H$ de $dx_q(\R^m)$, un isomorphisme $\varphi:\R^{N-m}\to H$, et on pose <trou indice="épaissir le paramétrage dans les directions de H">$F(u,t)=x(u)+\varphi(t)$ sur $U\times\R^{N-m}$</trou>. Alors $dF_{(q,0)}(h,w)=dx_q(h)+\varphi(w)$ est <trou>surjective (son image contient $dx_q(\R^m)\oplus H=\R^N$), donc un isomorphisme par égalité des dimensions</trou>. Par inversion locale, $F$ est un $C^k$-difféomorphisme de $U'\times Y$ sur un ouvert $V'_0\subset V$ contenant $p$.

Pour que $\Phi=F^{-1}$ envoie **exactement** $V'\cap S$ sur $\R^m\times\{0\}$, on rétrécit : <trou indice="condition 2 de la définition">$x$ étant un homéomorphisme, $x(U')=O\cap S$ pour un ouvert $O$ de $\R^N$, et on prend $V'=V'_0\cap O$</trou>. Alors tout $z\in V'\cap S$ s'écrit $x(u)=F(u,0)$ avec $u\in U'$, d'où $\Phi(V'\cap S)=(\R^m\times\{0\})\cap\Phi(V')$.

**Réciproque.** Avec $U=\{u,\ (u,0)\in W\}$, l'application <trou>$x(u)=\Phi^{-1}(u,0)$</trou> est $C^k$, est un homéomorphisme de $U$ sur $V'\cap S$ (inverse : premières coordonnées de $\Phi$), et est une immersion car <trou>$dx_u(h)=d(\Phi^{-1})_{(u,0)}(h,0)$ avec $d(\Phi^{-1})_{(u,0)}$ isomorphisme</trou>. $\square$

## Exemples

* **Le cercle en coordonnées polaires.** $S=\{x^2+y^2=1\}$, $V'=\R^2\setminus\{(x,0),\ x\le0\}$, $\Phi(x,y)=(\theta,\ r-1)$ où $r=\sqrt{x^2+y^2}$ et $\theta\in\,]-\pi;\pi[$ est l'argument de $(x,y)$. $\Phi$ est un $C^\infty$-difféomorphisme de $V'$ sur $W=\,]-\pi;\pi[\times]-1;+\infty[$, d'inverse $(\theta,s)\mapsto((1+s)\cos\theta,(1+s)\sin\theta)$, et $\Phi(V'\cap S)=\,]-\pi;\pi[\times\{0\}=(\R\times\{0\})\cap W$. Le point $(-1,0)$ se traite avec l'argument dans $]0;2\pi[$.
* **Un graphe.** Si $g:U\to\R^{N-m}$ est $C^k$ sur un ouvert $U$ de $\R^m$ et $S$ est le graphe de $g$, alors $\Phi(u,v)=(u,\ v-g(u))$ est un $C^k$-difféomorphisme de $U\times\R^{N-m}$ sur lui-même (inverse $(u,w)\mapsto(u,w+g(u))$), et $\Phi(S)=U\times\{0\}$. Voir [[ch09-graphe-sous-variete]].
* **La construction de la preuve, et pourquoi il faut rétrécir.** Cercle unité, $p=(1,0)$, $x(\theta)=(\cos\theta,\sin\theta)$, $q=0$, $dx_0(\R)=\R(0,1)$, $H=\R(1,0)$, $\varphi(t)=(t,0)$ : $F(\theta,t)=(\cos\theta+t,\ \sin\theta)$, $\det dF_{(\theta,t)}=\det\begin{pmatrix}-\sin\theta&1\\ \cos\theta&0\end{pmatrix}=-\cos\theta\neq0$ sur $U'=\,]-\frac\pi2;\frac\pi2[$, et $F$ est injective sur $U'\times\R$ (inverse $(X,Y)\mapsto(\arcsin Y,\ X-\sqrt{1-Y^2})$). Avec $Y=\,]-\frac12;\frac12[$, l'ouvert $V'_0=F(U'\times Y)$ contient le point $(-\sqrt{1-0.99^2},\ 0.99)\approx(-0.14;\,0.99)$ du **demi-cercle gauche**, dont l'image par $F^{-1}$ est $\approx(1.43;\,-0.28)\notin\R\times\{0\}$ : sans l'étape de rétrécissement par $O=\{X>0\}$, l'égalité serait fausse.

## Pièges

* > ⚠️ Le difféomorphisme $\Phi$ est défini sur un **ouvert de $\R^N$** (il déforme l'espace ambiant), pas seulement sur $S$. C'est ce qui distingue le redressement d'une carte $x^{-1}:V\cap S\to U$.
* L'étape « $x$ homéomorphisme $\Rightarrow$ on peut rétrécir $V'$ » est indispensable : pour le folium de Descartes ([[ch09-contre-ex-folium]]), $x$ est une immersion injective, on peut construire $F$ en $q=0$, mais tout voisinage de $(0,0)$ contient des points $x(t)$, $t$ grand, que $F^{-1}$ n'envoie pas dans $\R\times\{0\}$ : aucun redressement n'existe.
* Le redressement est l'outil de base des preuves du chapitre : équations locales ([[ch09-sous-variete-localement-equation]], $\Psi=p_2\circ\Phi$), changement de paramétrage ([[ch09-changement-parametrage]]), courbes intégrales ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]).
* Conséquence utile : $V'\cap S=\Phi^{-1}((\R^m\times\{0\})\cap W)$ est **fermé dans $V'$** ; une sous-variété est localement fermée (mais pas forcément fermée, [[ch09-remarque-fermeture]]).
