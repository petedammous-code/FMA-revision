---
id: ch09-courbe-integrale-reste-dans-sous-variete-fermee
type: proposition
chapter: 9
title: Une courbe intégrale d'un champ tangent à une sous-variété fermée y reste
ref: Proposition IX.8.1
page: 172
importance: 3
depends: [ch09-redressement-local, ch07-cauchy-lipschitz, ch07-existence-flot-local, ch07-unicite-globale, ch09-vecteur-tangent-espace-tangent-def, ch07-localement-lipschitzien-def, ch07-champ-vecteurs-courbe-integrale-def, ch07-peano-non-unicite]
tags: [champ-tangent, courbe-integrale, sous-variete-fermee, cauchy-lipschitz, redressement, invariance]
---
## Intuition

> 💡 Un mobile dont la vitesse, chaque fois qu'il est sur la surface $S$, est **tangente** à $S$ ne peut pas quitter $S$ : pour décoller, il lui faudrait à un moment une vitesse qui « pointe hors » de $S$. Mais deux subtilités se cachent : (1) il faut l'**unicité** des solutions (sinon le mobile pourrait « hésiter » et partir hors de $S$ avec une vitesse initiale tangente nulle) ; (2) il faut que $S$ soit **fermée** (sinon le mobile peut atteindre en temps fini un « trou » de $S$, un point limite qui n'est pas dans $S$, et continuer au-delà).

Vocabulaire. Un **champ de vecteurs dépendant du temps** sur un ouvert $U$ de $\R^N$ est une application continue $X : I\times U\to\R^N$ ; une **courbe intégrale** est une courbe $C^1$ $\gamma$ avec $\gamma'(t)=X(t,\gamma(t))$ ([[ch07-champ-vecteurs-courbe-integrale-def]]). Les **conditions du théorème VII.2.12** sont : $X$ continu et **localement lipschitzien en la seconde variable** ([[ch07-localement-lipschitzien-def]]) ; elles garantissent existence et unicité locales des courbes intégrales ([[ch07-cauchy-lipschitz]], [[ch07-existence-flot-local]]). Le champ est **tangent** à $S$ si $X(t,x)\in T_xS$ (espace tangent, [[ch09-vecteur-tangent-espace-tangent-def]]) pour tout $x\in S$. $S$ est **fermée** si c'est une partie fermée de $\R^N$.

## Énoncé

**Proposition (poly, Proposition IX.8.1, p. 172).** Soit $S$ une sous-variété fermée de $\R^N$ et $X : I\times U\to\R^N$ un champ de vecteurs dépendant du temps, vérifiant les conditions du théorème VII.2.12, où $U$ est un ouvert de $\R^N$ contenant $S$ et $I$ un intervalle ouvert de $\R$ contenant $0$. Supposons que pour tout $t\in I$, pour tout $x\in S$, $X(t,x)\in T_xS$. Soit $\gamma$ une courbe intégrale de $X$ définie sur un intervalle $]a;b[$ contenant $0$, telle que $\gamma(0)\in S$, alors pour tout $t\in\,]a;b[$, $\gamma(t)\in S$.

(Ici $\gamma : ]a;b[\to U$, avec $]a;b[\subset I$. Le champ $X$ est défini sur un ouvert **ambiant** $U$, et la tangence n'est exigée qu'aux points de $S$.)

## Hypothèses

### H1 — $S$ est fermée dans $\R^N$

**Rôle.** Au temps $\tau$ « de sortie » (borne supérieure des temps de séjour dans $S$), $\gamma(\tau)$ est limite de points $\gamma(s)\in S$ ; la fermeture donne $\gamma(\tau)\in S$, ce qui permet de redresser $S$ au voisinage de $\gamma(\tau)$.

**Si on la retire.** $S=(\R\times\{0\})\setminus\{(0,0)\}\subset\R^2$ est une sous-variété de dimension $1$ (ouvert de la droite $\R\times\{0\}$, [[ch09-ex-ouvert-de-sous-variete]]), non fermée. Le champ constant $X(t,x)=(1,0)$ sur $I\times U=\R\times\R^2$ est $C^\infty$, et tangent à $S$ ($T_xS=\R\times\{0\}$). La courbe intégrale $\gamma(t)=(t-1,0)$, définie sur $\R$, vérifie $\gamma(0)=(-1,0)\in S$ mais $\gamma(1)=(0,0)\notin S$.

### H2 — Tangence : $X(t,x)\in T_xS$ pour $x\in S$

**Rôle.** Après redressement $\Phi$ de $S$ sur $\R^m\times\{0\}$, elle dit que le champ transporté $Y$ est « horizontal » sur $\R^m\times\{0\}$ : sa composante verticale $B$ y est nulle, ce qui permet de fabriquer une solution qui reste dans $\R^m\times\{0\}$.

**Si on la retire.** $S=\mathbb S^1\subset\R^2$ (fermée) et $X=(1,0)$ constant : en $(1,0)$, $T_{(1,0)}\mathbb S^1=\{0\}\times\R$ ne contient pas $X$, et la courbe intégrale $\gamma(t)=(1+t,0)$ issue de $(1,0)$ vérifie $\|\gamma(t)\|=1+t>1$ pour $t>0$ : elle quitte le cercle immédiatement.

### H3 — Conditions de Cauchy-Lipschitz (localement lipschitzien en la seconde variable)

**Rôle.** Elles donnent l'**unicité** : la courbe $\Phi\circ\gamma$ coïncide avec la solution « horizontale » construite à la main.

**Si on la retire.** $S=\R\times\{0\}\subset\R^2$ (fermée), $X(x_1,x_2)=(0,2\sqrt{|x_2|})$, continu, non lipschitzien près de $x_2=0$, et tangent à $S$ puisque $X=(0,0)$ sur $S$. La courbe $\gamma(t)=(0,0)$ pour $t\le0$, $\gamma(t)=(0,t^2)$ pour $t\ge0$ est $C^1$ et vérifie $\gamma'(t)=(0,2t)=(0,2\sqrt{t^2})=X(\gamma(t))$ pour $t\ge0$ (et $0=X(0,0)$ pour $t\le0$) : c'est une courbe intégrale avec $\gamma(0)\in S$, mais $\gamma(1)=(0,1)\notin S$. (C'est le contre-exemple de Peano $\alpha'=2|\alpha|^{1/2}$, [[ch07-peano-non-unicite]], placé dans la direction normale.)

### H4 — $\gamma(0)\in S$

**Rôle.** Point de départ de l'argument de borne supérieure.

**Si on la retire.** Évidemment faux : avec $X=0$, la courbe constante en un point hors de $S$ ne rencontre jamais $S$.

## Idée de la preuve

Soit $\tau$ la borne supérieure des temps $t\ge0$ jusqu'auxquels $\gamma$ est restée dans $S$. Si $\tau<b$, $\gamma(\tau)\in S$ ($S$ fermée) ; on redresse $S$ près de $\gamma(\tau)$. Dans la carte, le champ est horizontal sur $\R^m\times\{0\}$, donc l'équation possède une solution horizontale issue de $\Phi(\gamma(\tau))$, et par unicité c'est $\Phi\circ\gamma$ : $\gamma$ reste dans $S$ un peu après $\tau$, contradiction.

## Preuve

On note $m$ la dimension de $S$ et l'on écrit $\R^N=\R^m\times\R^{N-m}$. On suppose $S$ de classe $C^k$ avec $k\ge2$ (voir la variante à la fin pour $k=1$).

**Le temps de sortie.** Posons
$$
\tau=\sup\{t\in[0;b[\ \mid\ \gamma(s)\in S\ \text{pour tout } s\in[0;t]\}.
$$
L'ensemble est non vide (il contient $0$ car $\gamma(0)\in S$), donc $0\le\tau\le b$. Supposons par l'absurde $\tau<b$. Pour tout $s\in[0;\tau[$, il existe $t$ de l'ensemble avec $t>s$, donc $\gamma(s)\in S$. Comme $\gamma$ est continue et $S$ **fermée**, $\gamma(\tau)=\lim_{s\to\tau^-}\gamma(s)\in S$ (si $\tau=0$, c'est l'hypothèse $\gamma(0)\in S$).

**Redressement.** D'après [[ch09-redressement-local]] (Proposition IX.3.1), il existe un ouvert $V$ de $\R^N$ contenant $\gamma(\tau)$, un ouvert $W$ de $\R^N$ et un $C^k$-difféomorphisme $\Phi : V\to W$ tels que $\Phi(V\cap S)=(\R^m\times\{0\})\cap W$. Quitte à remplacer $V$ par $V\cap U$ (et $W$ par $\Phi(V\cap U)$), on suppose $V\subset U$.

*$d\Phi_x$ envoie $T_xS$ dans $\R^m\times\{0\}$ pour $x\in V\cap S$.* Si $v\in T_xS$, il existe une courbe $C^1$ $\alpha$ tracée sur $S$ avec $\alpha(0)=x$, $\alpha'(0)=v$ ; pour $|t|$ petit, $\alpha(t)\in V\cap S$, donc $\Phi(\alpha(t))\in\R^m\times\{0\}$, et $d\Phi_x(v)=(\Phi\circ\alpha)'(0)\in\R^m\times\{0\}$.

**Le champ transporté.** Définissons sur $I\times W$ le champ $Y$ par
$$
Y\big(t,\Phi(x)\big)=d\Phi_x\big(X(t,x)\big),\qquad (x\in V),
$$
c'est-à-dire $Y(t,z)=d\Phi_{\Phi^{-1}(z)}\big(X(t,\Phi^{-1}(z))\big)$. Il est continu, et localement lipschitzien en $z$ : près de $(t_0,z_0)$, choisissons une boule fermée $\bar B\subset W$ centrée en $z_0$ et un intervalle compact $J_0\ni t_0$ tels que $X$ soit $\kappa$-lipschitzien en la seconde variable sur $J_0\times\Phi^{-1}(\bar B)$ ; sur $\bar B$, l'application $z\mapsto d\Phi_{\Phi^{-1}(z)}$ est de classe $C^1$ (car $k\ge2$) donc $L_1$-lipschitzienne (inégalité des accroissements finis sur le convexe $\bar B$) et bornée par $L_2$, $\Phi^{-1}$ est $L_3$-lipschitzienne, et $\|X\|\le M$ sur le compact $J_0\times\Phi^{-1}(\bar B)$. Alors pour $t\in J_0$, $z_1,z_2\in\bar B$, en notant $x_i=\Phi^{-1}(z_i)$,
$$
\|Y(t,z_1)-Y(t,z_2)\|\le\|d\Phi_{x_1}-d\Phi_{x_2}\|\,\|X(t,x_1)\|+\|d\Phi_{x_2}\|\,\|X(t,x_1)-X(t,x_2)\|\le(L_1M+L_2\kappa L_3)\|z_1-z_2\|.
$$
Ainsi $Y$ vérifie lui aussi les conditions du théorème de Cauchy-Lipschitz.

Par continuité de $\gamma$, il existe $\eta>0$ tel que $]\tau-\eta;\tau+\eta[\subset\,]a;b[$ et $\gamma(]\tau-\eta;\tau+\eta[)\subset V$. Sur cet intervalle, la courbe $\sigma=\Phi\circ\gamma$ vérifie
$$
\text{(IX.8.1)}\qquad\sigma'(t)=d\Phi_{\gamma(t)}(\gamma'(t))=d\Phi_{\gamma(t)}\big(X(t,\gamma(t))\big)=Y(t,\sigma(t)),
$$
et $\sigma(\tau)\in\Phi(V\cap S)\subset\R^m\times\{0\}$.

**Le champ transporté est horizontal sur $\R^m\times\{0\}$.** Si $z\in(\R^m\times\{0\})\cap W$, alors $z=\Phi(x)$ avec $x\in V\cap S$, et $Y(t,z)=d\Phi_x(X(t,x))\in\R^m\times\{0\}$ par la **tangence** et le point précédent.

**Système en coordonnées.** Écrivons $\sigma(t)=(x(t),y(t))$ avec $x(t)\in\R^m$, $y(t)\in\R^{N-m}$, et notons $A(t,(x,y))$ et $B(t,(x,y))$ les projections de $Y(t,(x,y))$ sur $\R^m$ et $\R^{N-m}$. L'équation (IX.8.1) s'écrit
$$
\text{(IX.8.2)}\qquad\begin{cases}x'(t)=A\big(t,(x(t),y(t))\big)\\ y'(t)=B\big(t,(x(t),y(t))\big)\end{cases}
$$
avec $x(\tau)=x_0$ et $y(\tau)=0$. Sur l'ouvert $W_0=\{u\in\R^m\mid(u,0)\in W\}$ de $\R^m$, le champ $(t,u)\mapsto A(t,(u,0))$ vérifie les conditions de Cauchy-Lipschitz (restriction de $Y$). Soit $\tilde x$ la solution de
$$
\tilde x'(t)=A\big(t,(\tilde x(t),0)\big),\qquad\tilde x(\tau)=x_0,
$$
qui existe sur un intervalle ouvert contenant $\tau$ par le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]). Alors $(\tilde x(t),0)$ est solution de (IX.8.2) : la première équation est la définition de $\tilde x$, la seconde dit $0=B(t,(\tilde x(t),0))$, vrai car $Y$ est horizontal sur $\R^m\times\{0\}$. Les deux courbes $\sigma$ et $(\tilde x,0)$ sont des courbes intégrales de $Y$ de même condition initiale $(\tau,(x_0,0))$ ; par unicité ([[ch07-unicite-globale]]), elles coïncident sur un intervalle $]\tau-\eta';\tau+\eta'[$, $0<\eta'\le\eta$. Donc $y$ reste nul sur cet intervalle, et
$$
\gamma(t)=\Phi^{-1}(\sigma(t))\in\Phi^{-1}\big((\R^m\times\{0\})\cap W\big)=V\cap S\subset S,\qquad t\in\,]\tau-\eta';\tau+\eta'[.
$$

**Contradiction.** Avec ce qui précède, $\gamma(s)\in S$ pour tout $s\in[0;\tau+\eta'[$, donc $\tau+\eta'/2$ appartient à l'ensemble dont $\tau$ est la borne supérieure : contradiction. Donc $\tau=b$, c'est-à-dire $\gamma(t)\in S$ pour tout $t\in[0;b[$.

**Temps négatifs.** La courbe $\tilde\gamma(t)=\gamma(-t)$, définie sur $]-b;-a[\ni0$, est une courbe intégrale du champ $\tilde X(t,x)=-X(-t,x)$ sur $(-I)\times U$, qui vérifie les mêmes hypothèses (continuité, caractère lipschitzien, tangence : $T_xS$ est un sous-espace vectoriel). Ce qui précède donne $\tilde\gamma(t)\in S$ pour $t\in[0;-a[$, i.e. $\gamma(t)\in S$ pour $t\in\,]a;0]$. $\square$

*Variante (si $S$ n'est que de classe $C^1$).* Alors $d\Phi$ n'est que continue et $Y$ peut ne pas être lipschitzien. On obtient encore $\tilde x$ par le théorème de Peano (existence sans unicité, [[ch07-peano-non-unicite]]), et l'on fait jouer l'unicité **pour $X$** au lieu de $Y$ : la courbe $\beta(t)=\Phi^{-1}(\tilde x(t),0)$ est tracée sur $V\cap S$ et vérifie $\beta'(t)=(d\Phi_{\beta(t)})^{-1}\big(\tilde x'(t),0\big)=(d\Phi_{\beta(t)})^{-1}\big(Y(t,(\tilde x(t),0))\big)=X(t,\beta(t))$, avec $\beta(\tau)=\gamma(\tau)$ ; par unicité des courbes intégrales de $X$, $\gamma=\beta$ près de $\tau$, et la fin est identique.

## Preuve à trous

Soit $\tau=\sup\{t\in[0;b[\mid\gamma([0;t])\subset S\}$ et supposons $\tau<b$. Comme <trou indice="quelle hypothèse sur S ?">$S$ est fermée et $\gamma$ continue, $\gamma(\tau)\in S$</trou>.

On redresse $S$ près de $\gamma(\tau)$ : $\Phi : V\to W$ difféomorphisme, $V\subset U$, $\Phi(V\cap S)=(\R^m\times\{0\})\cap W$. On pose $Y(t,\Phi(x))=d\Phi_x(X(t,x))$ ; alors $\sigma=\Phi\circ\gamma$ vérifie $\sigma'=Y(t,\sigma)$ et $\sigma(\tau)=(x_0,0)$. De plus, pour $z\in(\R^m\times\{0\})\cap W$, <trou indice="tangence + redressement">$Y(t,z)\in\R^m\times\{0\}$, car $X(t,x)\in T_xS$ et $d\Phi_x(T_xS)\subset\R^m\times\{0\}$</trou>.

En écrivant $Y=(A,B)$, soit $\tilde x$ la solution de $\tilde x'=A(t,(\tilde x,0))$, $\tilde x(\tau)=x_0$. Alors <trou>$(\tilde x,0)$ est une courbe intégrale de $Y$, puisque $B(t,(\tilde x,0))=0$</trou>, de même condition initiale que $\sigma$ ; par <trou indice="quel théorème ?">unicité dans le théorème de Cauchy-Lipschitz, $\sigma=(\tilde x,0)$ près de $\tau$</trou>, donc $\gamma=\Phi^{-1}\circ\sigma$ reste dans $V\cap S$ sur $]\tau-\eta';\tau+\eta'[$.

Cela contredit la définition de $\tau$ ; donc $\tau=b$. Les temps négatifs se traitent avec <trou>$\tilde\gamma(t)=\gamma(-t)$, courbe intégrale de $-X(-t,x)$</trou>. $\square$

## Exemples

* **Rotations de la sphère.** $S=\mathbb S^2$ (fermée, [[ch09-ex-sphere]]), $X(x)=e_3\wedge x=(-x_2,x_1,0)$ sur $U=\R^3$, linéaire donc lipschitzien. Comme $\langle e_3\wedge x,x\rangle=0$ et $T_x\mathbb S^2=x^\perp$, $X$ est tangent. Les courbes intégrales sont $\gamma(t)=(x_1\cos t-x_2\sin t,\ x_1\sin t+x_2\cos t,\ x_3)$, rotations d'angle $t$ autour de l'axe $e_3$ : elles restent bien sur la sphère.

* **Une hyperbole.** $S=\{(x,y)\in\R^2\mid xy=1\}$ est fermée et c'est une sous-variété ($F(x,y)=xy$, $dF_{(x,y)}=(y,x)\ne0$ sur $S$, donc $1$ est valeur régulière : [[ch09-sous-variete-equation-valeur-reguliere]]), avec $T_{(x,y)}S=\ker dF_{(x,y)}$. Le champ $X(x,y)=(x,-y)$ vérifie $dF(X)=yx-xy=0$ : il est tangent. Les courbes intégrales $\gamma(t)=(x_0e^t,y_0e^{-t})$ issues de $(x_0,y_0)\in S$ vérifient bien $x_0e^t\cdot y_0e^{-t}=1$.

* **Champ tangent seulement sur $S$.** $S=\mathbb S^1$, $X(x)=(-x_2,x_1)+(1-\|x\|^2)\,x$. Sur $S$, $X(x)=(-x_2,x_1)\in x^\perp=T_x\mathbb S^1$ ; hors de $S$ le champ a une composante radiale. Ici $\frac{d}{dt}\|\gamma\|^2=2\langle X(\gamma),\gamma\rangle=2(1-\|\gamma\|^2)\|\gamma\|^2$ n'est pas identiquement nul sur $\R^2$, mais la proposition affirme que les courbes intégrales issues de $\mathbb S^1$ y restent (ce qu'on vérifie aussi : $\rho=\|\gamma\|^2$ résout $\rho'=2\rho(1-\rho)$, $\rho(0)=1$, dont l'unique solution est $\rho\equiv1$).

## Pièges

* > ⚠️ La tangence n'est supposée **que sur $S$**. L'argument naïf « $\frac{d}{dt}F(\gamma(t))=dF_{\gamma(t)}(X)=0$ » (pour $S=F^{-1}(c)$) n'est valable que **si l'on sait déjà** que $\gamma(t)\in S$ : il est circulaire, sauf si $dF(X)=0$ sur tout l'ouvert $U$ (cas de l'hyperbole ci-dessus).
* > ⚠️ Sans fermeture, la conclusion est fausse (droite privée d'un point) ; sans unicité aussi (contre-exemple de Peano dans la direction normale).
* Le champ est défini sur un **ouvert ambiant** $U\supset S$ ; comparer avec le théorème IX.8.5 ([[ch09-flot-local-sous-variete]]), où le champ n'est défini que sur $S$.
* Ne pas oublier les **temps négatifs** : l'argument de borne supérieure ne traite que $t\ge0$.
* $d\Phi_x$ envoie $T_xS$ dans $\R^m\times\{0\}$ : cela se prouve avec des courbes tracées sur $S$, et c'est ce qui convertit la tangence en « $B=0$ sur $\R^m\times\{0\}$ ».
