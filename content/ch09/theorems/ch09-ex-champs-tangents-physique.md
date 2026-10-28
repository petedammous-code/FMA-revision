---
id: ch09-ex-champs-tangents-physique
type: proposition
chapter: 9
title: "Champs tangents : sphère, champ hamiltonien $X_H$, moment cinétique"
ref: Exemples IX.8.2
page: 172
importance: 2
depends: [ch09-courbe-integrale-reste-dans-sous-variete-fermee, ch09-espace-tangent-graphe-equation, ch09-ex-sphere, ch09-sous-variete-equation-valeur-reguliere, ch07-restriction-domaine-c1-lipschitz]
tags: [champ-tangent, hamiltonien, conservation, energie, moment-cinetique, sphere, integrale-premiere]
---
## Intuition

> 💡 Trois lois de conservation de la physique sont des cas particuliers d'un seul énoncé géométrique : « si la vitesse est tangente à $S$, on reste sur $S$ » ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]). Une vitesse orthogonale au rayon garde sur une sphère ; le champ hamiltonien est tangent aux niveaux d'énergie (conservation de l'énergie) ; l'équation d'Euler $M'=\Omega\wedge M$ conserve la norme du moment cinétique.

Vocabulaire. Une **valeur régulière** $c$ de $H$ est une valeur telle que $dH_y\ne0$ (surjective sur $\R$) en tout point $y$ de $H^{-1}(c)$ ; alors $H^{-1}(c)$ est une sous-variété de codimension $1$ (une **hypersurface**) d'espace tangent $\ker dH_y$ ([[ch09-sous-variete-equation-valeur-reguliere]], [[ch09-espace-tangent-graphe-equation]]). On note $\frac{\partial H}{\partial p}=\big(\frac{\partial H}{\partial p_1},\dots,\frac{\partial H}{\partial p_n}\big)$, de même pour $q$, et $\wedge$ le produit vectoriel de $\R^3$. Une fonction conservée le long des courbes intégrales s'appelle une **intégrale première**.

## Énoncé

**Proposition (poly, Exemples IX.8.2, p. 172).**

1. **Sphères.** Soient $R>0$, $S_R=\{x\in\R^N\mid\|x\|=R\}$ et $X : I\times U\to\R^N$ comme dans la Proposition IX.8.1 ($U\supset S_R$ ouvert, $I\ni0$ intervalle ouvert, $X$ continu et localement lipschitzien en la seconde variable). Si $X(t,x)$ est orthogonal à $x$ pour tous $t\in I$ et $x\in S_R$, alors toute courbe intégrale $\gamma$ de $X$ définie sur $]a;b[\ni0$ avec $\|\gamma(0)\|=R$ reste sur la sphère : $\|\gamma(t)\|=R$ pour tout $t\in\,]a;b[$.
2. **Champ hamiltonien.** Soit $H(q,p)$ une fonction sur $\R^n\times\R^n$ et $X_H=\Big(\dfrac{\partial H}{\partial p},-\dfrac{\partial H}{\partial q}\Big)$. On suppose $H$ de classe $C^1$ et $c$ valeur régulière de $H$, de sorte que l'équation $H(q,p)=c$ définit une sous-variété. Alors $dH_{(q,p)}(X_H(q,p))=0$, et $X_H$ est un champ de vecteurs tangents aux hypersurfaces $H(q,p)=c$. Si de plus $H$ est de classe $C^2$, toute courbe intégrale $t\mapsto(q(t),p(t))$ de $X_H$ (c'est-à-dire de $q'=\frac{\partial H}{\partial p}$, $p'=-\frac{\partial H}{\partial q}$) avec $H(q(0),p(0))=c$ vérifie $H(q(t),p(t))=c$ pour tout $t$ : **l'énergie est conservée**.
3. **Moment cinétique.** Soit $\Omega : I\to\R^3$ continue. Toute solution $M$ de $M'(t)=\Omega(t)\wedge M(t)$ vérifie
$$
\frac{d}{dt}\Big(\frac12\|M(t)\|^2\Big)=\langle M'(t),M(t)\rangle=\langle\Omega(t)\wedge M(t),M(t)\rangle=0 :
$$
la norme du moment cinétique est préservée.

(En mécanique classique, $H$ est le hamiltonien d'un système, $q$ la position, $p$ l'impulsion ; au point 3, $M$ est le moment cinétique et $\Omega$ la vitesse angulaire d'un solide en mouvement libre.)

## Hypothèses

### H1 — Champ localement lipschitzien ($H$ de classe $C^2$ au point 2)

**Rôle.** C'est l'hypothèse de Cauchy-Lipschitz de la Proposition IX.8.1, qui fournit l'unicité utilisée dans la preuve. Au point 2, si $H$ est $C^2$, $X_H$ est $C^1$ donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]) ; le poly ne suppose que $H$ de classe $C^1$, ce qui suffit pour la tangence mais pas pour appliquer IX.8.1.

**Si on la retire.** Au point 1, quand l'orthogonalité n'a lieu **que sur la sphère**, c'est indispensable : sur $U=\R^2\setminus\{0\}$, le champ $X(x)=2\sqrt{|\|x\|-1|}\,\dfrac{x}{\|x\|}$ est continu, nul (donc orthogonal à $x$) sur $S_1$, mais la courbe $\gamma(t)=e_1$ pour $t\le0$, $\gamma(t)=(1+t^2)e_1$ pour $t\ge0$ est une courbe intégrale ($\gamma'(t)=2te_1=2\sqrt{t^2}\,e_1=X(\gamma(t))$ pour $t\ge0$) qui quitte $S_1$. En revanche au point 2 l'hypothèse est **de confort** : comme $dH(X_H)=0$ en **tout** point, pour toute courbe intégrale $C^1$, $(H\circ\gamma)'(t)=dH_{\gamma(t)}(X_H(\gamma(t)))=0$, et l'énergie est conservée même si $H$ n'est que $C^1$ (sans unicité des solutions).

### H2 — $c$ valeur régulière de $H$

**Rôle.** Elle fait de $S_c=H^{-1}(c)$ une sous-variété (fermée, car $H$ est continue), d'espace tangent $\ker dH$, ce qui donne un sens à « $X_H$ est tangent » et permet d'appliquer IX.8.1.

**Si on la retire.** Pour $n=1$, $H(q,p)=\frac12(p^2-q^2)$ et $c=0$ : $dH_{(0,0)}=0$, et $H^{-1}(0)$ est la croix $\{p=\pm q\}$, qui n'est pas une sous-variété ([[ch09-contre-ex-croix]]). La phrase « $X_H$ tangent à $H^{-1}(0)$ » perd son sens ; mais la conservation de l'énergie reste vraie par le calcul direct de H1 (par exemple $q(t)=p(t)=e^t$ résout $q'=p$, $p'=q$ et reste sur la diagonale).

### H3 — Au point 1, orthogonalité sur $S_R$ seulement ou partout

**Rôle.** Si $\langle X(t,x),x\rangle=0$ pour **tout** $x\in U$, la conclusion est immédiate : $\frac{d}{dt}\|\gamma(t)\|^2=2\langle X(t,\gamma(t)),\gamma(t)\rangle=0$, pour n'importe quelle courbe intégrale. Si on ne la suppose que **sur $S_R$**, ce calcul n'est valable que là où l'on sait déjà que $\gamma(t)\in S_R$ : il faut la Proposition IX.8.1.

**Si on la retire.** Sans orthogonalité sur $S_R$, la courbe sort : $X(x)=x$ sur $\R^N$, $\gamma(t)=e^t\gamma(0)$, $\|\gamma(t)\|=e^tR\ne R$ pour $t\ne0$.

## Idée de la preuve

Dans les trois cas, on identifie une sous-variété fermée $S$ (sphère, niveau d'énergie) dont l'espace tangent est un noyau ($x^\perp$, $\ker dH$), on vérifie que le champ y est tangent par un calcul d'une ligne, et l'on applique la Proposition IX.8.1. Aux points 2 et 3 le calcul direct de la dérivée de l'intégrale première suffit même.

## Preuve

**Point 1.** La sphère $S_R=F^{-1}(R^2)$ avec $F(x)=\|x\|^2$ : $dF_x(v)=2\langle x,v\rangle$ est non nulle pour $x\ne0$, donc $R^2$ est valeur régulière et $S_R$ est une sous-variété de dimension $N-1$ (cf. [[ch09-ex-sphere]]), d'espace tangent $T_xS_R=\ker dF_x=x^\perp$ ([[ch09-espace-tangent-graphe-equation]]). Elle est fermée ($F$ continue). L'hypothèse « $X(t,x)\perp x$ pour $x\in S_R$ » dit exactement $X(t,x)\in T_xS_R$. La Proposition IX.8.1 ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]) s'applique à $S=S_R$ : si $\gamma(0)\in S_R$, alors $\gamma(t)\in S_R$ pour tout $t\in\,]a;b[$.

**Point 2.** Calcul de $dH(X_H)$ : pour $(q,p)\in\R^n\times\R^n$,
$$
dH_{(q,p)}\big(X_H(q,p)\big)=\sum_{i=1}^n\frac{\partial H}{\partial q_i}\cdot\frac{\partial H}{\partial p_i}+\sum_{i=1}^n\frac{\partial H}{\partial p_i}\cdot\Big(-\frac{\partial H}{\partial q_i}\Big)=0.
$$
Si $c$ est valeur régulière, $S_c=H^{-1}(c)$ est une hypersurface fermée d'espace tangent $T_{(q,p)}S_c=\ker dH_{(q,p)}$ ([[ch09-sous-variete-equation-valeur-reguliere]], [[ch09-espace-tangent-graphe-equation]]) ; le calcul montre $X_H(q,p)\in T_{(q,p)}S_c$ : $X_H$ est tangent à $S_c$. Si $H$ est $C^2$, $X_H$ est $C^1$ donc localement lipschitzien sur $U=\R^{2n}$ (avec $I=\R$), et la Proposition IX.8.1 donne : une courbe intégrale issue de $S_c$ reste dans $S_c$, i.e. $H(q(t),p(t))=c$.

**Point 3.** Le champ $X(t,M)=\Omega(t)\wedge M$ est continu sur $I\times\R^3$ et $\|X(t,M_1)-X(t,M_2)\|=\|\Omega(t)\wedge(M_1-M_2)\|\le\|\Omega(t)\|\,\|M_1-M_2\|$, avec $\|\Omega\|$ bornée sur tout compact de $I$ : il est localement lipschitzien en $M$. Pour une solution $M$,
$$
\frac{d}{dt}\Big(\frac12\|M(t)\|^2\Big)=\langle M'(t),M(t)\rangle=\langle\Omega(t)\wedge M(t),M(t)\rangle=\det\big(\Omega(t),M(t),M(t)\big)=0,
$$
le produit mixte ayant deux colonnes égales. Donc $\|M(t)\|$ est constante. (On peut aussi invoquer le point 1 avec $R=\|M(0)\|$ si $M(0)\ne0$ ; si $M(0)=0$, la solution nulle est l'unique solution, par Cauchy-Lipschitz.) $\square$

## Preuve à trous

**Point 1.** La sphère $S_R$ est la sous-variété fermée $F^{-1}(R^2)$, $F(x)=\|x\|^2$, d'espace tangent <trou indice="noyau de dF">$T_xS_R=\ker dF_x=x^\perp$</trou>. L'orthogonalité de $X(t,x)$ à $x$ sur $S_R$ est donc la tangence, et <trou>la Proposition IX.8.1 (sous-variété fermée, champ tangent lipschitzien)</trou> conclut.

**Point 2.** On calcule <trou indice="développer dH appliquée à X_H">$dH(X_H)=\sum_i\frac{\partial H}{\partial q_i}\frac{\partial H}{\partial p_i}-\sum_i\frac{\partial H}{\partial p_i}\frac{\partial H}{\partial q_i}=0$</trou> ; comme $T_{(q,p)}H^{-1}(c)=\ker dH_{(q,p)}$ pour $c$ valeur régulière, $X_H$ est tangent à $H^{-1}(c)$, et IX.8.1 s'applique dès que $X_H$ est localement lipschitzien, par exemple $H$ de classe $C^2$.

**Point 3.** $\frac{d}{dt}\frac12\|M\|^2=\langle\Omega\wedge M,M\rangle=$ <trou indice="produit mixte">$\det(\Omega,M,M)=0$</trou>. $\square$

## Exemples

* **Oscillateur harmonique.** $n=1$, $H(q,p)=\frac12(q^2+p^2)$, $X_H=(p,-q)$ : $q'=p$, $p'=-q$, solutions $q(t)=q_0\cos t+p_0\sin t$, $p(t)=p_0\cos t-q_0\sin t$, et $q(t)^2+p(t)^2=q_0^2+p_0^2$ : on tourne sur le cercle d'énergie $c=\frac12(q_0^2+p_0^2)$ (valeur régulière dès que $c>0$).

* **Pendule.** $n=1$, $H(q,p)=\frac12p^2-\cos q$, $X_H=(p,-\sin q)$, d'où $q''=-\sin q$. On a $dH_{(q,p)}=(\sin q,\,p)$, nul exactement aux points $(k\pi,0)$, $k\in\Z$, de valeurs $-\cos(k\pi)=\mp1$. Les valeurs régulières sont donc les $c\notin\{-1,1\}$ : pour $-1<c<1$, $H^{-1}(c)$ est une réunion de courbes fermées autour des $(2k\pi,0)$ (oscillations) ; pour $c>1$, ce sont les deux graphes $p=\pm\sqrt{2(c+\cos q)}$ (rotations complètes). Chaque trajectoire reste sur sa ligne de niveau.

* **Solide libre (équations d'Euler).** Avec $\Omega=\mathcal I^{-1}M$, où $\mathcal I$ est la matrice d'inertie (symétrique définie positive), le champ $X(M)=(\mathcal I^{-1}M)\wedge M$ est polynomial, orthogonal à $M$ en tout point : $\|M\|$ est conservée (point 1). De plus $\frac{d}{dt}\langle\mathcal I^{-1}M,M\rangle=2\langle\mathcal I^{-1}M,M'\rangle=2\langle\Omega,\Omega\wedge M\rangle=0$ : l'énergie cinétique est aussi conservée, et $M(t)$ reste sur l'intersection d'une sphère et d'un ellipsoïde.

## Pièges

* > ⚠️ Au point 1, l'argument direct $\frac{d}{dt}\|\gamma\|^2=0$ exige l'orthogonalité **en tout point de $U$** ; si elle n'est donnée que sur la sphère, il faut passer par la Proposition IX.8.1 et donc par le caractère lipschitzien.
* Bien placer le signe : $X_H=\big(\frac{\partial H}{\partial p},-\frac{\partial H}{\partial q}\big)$, i.e. $q'=\partial_pH$, $p'=-\partial_qH$ ; avec le mauvais signe on obtient le champ $(\partial_pH,\partial_qH)$, qui n'est pas tangent en général.
* « $c$ valeur régulière » n'est nécessaire que pour parler de sous-variété ; la conservation de $H$ est vraie pour toute valeur.
* La conservation de $\|M\|$ ne dit pas que $M$ est constant : $M(t)$ bouge sur une sphère.
