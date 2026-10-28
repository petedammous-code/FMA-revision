---
id: ch07-cauchy-lipschitz
type: theorem
chapter: 7
title: Théorème de Cauchy-Lipschitz (existence et unicité locales)
ref: Théorème VII.2.1
page: 128
importance: 3
depends: [ch07-equation-integrale, ch07-lemme-operateur-integral, ch07-restriction-domaine-c1-lipschitz, ch07-localement-lipschitzien-def, ch05-accroissements-finis-borne]
tags: [cauchy-lipschitz, existence, unicite, point-fixe, picard, equation-differentielle]
---
## Intuition

> 💡 **Déterminisme local.** Si le champ de vecteurs est assez régulier (localement lipschitzien en $x$), connaître la position $x$ à l'instant $t_0$ détermine entièrement le mouvement pendant un petit laps de temps $]t_0-\epsilon;t_0+\epsilon[$ : il existe une trajectoire, et une seule. De plus la durée $2\epsilon$ garantie est **la même** pour toutes les conditions initiales $(t_0,x)$ proches d'un point de référence $(\tau_0,x_0)$.

Le mécanisme. L'équation $\alpha'=X(t,\alpha)$ avec $\alpha(t_0)=x$ équivaut à l'équation intégrale $\alpha(t)=x+\int_{t_0}^tX(s,\alpha(s))\,ds$ ([[ch07-equation-integrale]]) : la solution est un **point fixe** de l'opérateur de Picard $S : \varphi\mapsto\big(t\mapsto x+\int_{t_0}^tX(s,\varphi(s))\,ds\big)$, qui « corrige » une trajectoire approchée $\varphi$ en intégrant le champ le long d'elle. Sur un intervalle de temps de demi-longueur $b$, deux trajectoires $\varphi_1,\varphi_2$ donnent des corrections qui diffèrent d'au plus $kb\,\|\varphi_1-\varphi_2\|_\infty$ : si $kb\le\frac12$, $S$ **contracte** les distances et le théorème du point fixe de Banach (poly, Théorème VI.1.1, p. 115) donne un unique point fixe. Image : les itérées de Picard $\varphi_{n+1}=S(\varphi_n)$ convergent vers la solution comme une suite géométrique de raison $\frac12$.

Vocabulaire utilisé : champ de vecteurs, courbe intégrale, condition initiale ([[ch07-champ-vecteurs-courbe-integrale-def]]) ; localement lipschitzien en la seconde variable ([[ch07-localement-lipschitzien-def]]) ; $B(x_0,\eta)$ est la boule ouverte de centre $x_0$ et de rayon $\eta$ dans $E$, $\bar B(x_0,r)$ la boule fermée ; $]a;b[$ désigne l'intervalle ouvert.

## Énoncé

**Théorème (poly, Théorème VII.2.1, p. 128 — Théorème de Cauchy-Lipschitz).** Soit $X : I\times U\to E$ un champ de vecteurs sur un ouvert $U$ d'un espace de Banach $E$ ($I$ intervalle ouvert de $\R$, $X$ continue). Supposons $X$ localement lipschitzien en la seconde variable. Alors, pour tout $\tau_0\in I$ et pour tout $x_0\in U$, il existe $\eta>0$, $\delta>0$ et $\epsilon>0$ tels que si $x$ est dans $B(x_0,\eta)$ et $t_0$ est dans $]\tau_0-\delta;\tau_0+\delta[$, l'équation différentielle avec condition initiale
$$
\text{(VII.2.1)}\qquad
\begin{cases}
\alpha'(t)=X(t,\alpha(t))\\
\alpha(t_0)=x
\end{cases}
$$
possède une unique solution définie sur $]t_0-\epsilon;t_0+\epsilon[$. Autrement dit, il existe une unique courbe intégrale $\alpha=\alpha_{t_0,x}$ de $X$ définie sur $]t_0-\epsilon;t_0+\epsilon[$ et vérifiant $\alpha(t_0)=x$.

*Lecture de l'énoncé.* Le point $(\tau_0,x_0)$ est un point de référence ; les constantes $\eta,\delta,\epsilon$ ne dépendent que de lui (et de $X$). La condition initiale effective $(t_0,x)$ parcourt le voisinage $]\tau_0-\delta;\tau_0+\delta[\times B(x_0,\eta)$, et l'intervalle d'existence $]t_0-\epsilon;t_0+\epsilon[$ est centré en $t_0$ avec une demi-longueur $\epsilon$ **indépendante de $(t_0,x)$** ([[ch07-uniformite-epsilon-remarque]], [[ch07-intervalle-centre-tau0-remarque]]). « Unique » signifie : deux courbes intégrales définies sur $]t_0-\epsilon;t_0+\epsilon[$ et valant $x$ en $t_0$ coïncident.

## Hypothèses

### H1 — $E$ est un espace de Banach (complet)

**Rôle.** L'espace $\mathcal X=C^0([t_0-b;t_0+b],\bar B(x_0,2a))$ des fonctions continues à valeurs dans une boule fermée de $E$ doit être **complet** pour appliquer le théorème du point fixe de Banach ; c'est le cas parce que $E$ l'est ([[ch07-lemme-operateur-integral]]). La complétude sert aussi à définir l'intégrale $\int X(s,\varphi(s))\,ds$ dans $E$ ([[ch05-integrale-fonctions-reglees]]).

**Si on la retire.** L'existence peut tomber, même pour un champ linéaire $C^\infty$. Soit $E=c_{00}$ l'espace des suites réelles $x=(x_n)_{n\ge0}$ **à support fini**, muni de $\|x\|_\infty=\sup_n|x_n|$ (non complet), et $X(x)=(0,x_0,x_1,x_2,\dots)$ le décalage à droite : $X$ est linéaire et $\|X(x)\|_\infty=\|x\|_\infty$, donc $1$-lipschitzien. Le problème $\alpha'=X(\alpha)$, $\alpha(0)=e_0=(1,0,0,\dots)$ n'a **aucune** solution sur aucun intervalle $]-\epsilon;\epsilon[$. En effet, les formes coordonnées $\pi_n : x\mapsto x_n$ sont linéaires continues ($|x_n|\le\|x\|_\infty$), donc $\alpha_n=\pi_n\circ\alpha$ est $C^1$ avec $\alpha_0'=0$, $\alpha_n'=\alpha_{n-1}$ ($n\ge1$), $\alpha_0(0)=1$, $\alpha_n(0)=0$ ; par récurrence $\alpha_n(t)=t^n/n!$, non nul pour tout $n$ dès que $t\ne0$ : $\alpha(t)\notin c_{00}$, contradiction. (Dans le complété $\ell^\infty$, la solution existe : $\alpha_n(t)=t^n/n!$.) L'unicité, elle, subsiste sans complétude : une application $\frac12$-lipschitzienne a **au plus** un point fixe (si $S\alpha=\alpha$ et $S\beta=\beta$, alors $\|\alpha-\beta\|_\infty\le\frac12\|\alpha-\beta\|_\infty$, donc $\alpha=\beta$) sans aucune hypothèse de complétude, et l'étape 4 ci-dessous (connexité) n'en utilise pas non plus ; seule l'**existence** du point fixe demande $E$ complet.

### H2 — $U$ est ouvert et $I$ est un intervalle ouvert

**Rôle.** On a besoin d'une boule fermée $\bar B(x_0,2a)\subset U$ et d'un segment $[\tau_0-2a';\tau_0+2a']\subset I$ sur lesquels $X$ est définie, bornée et $k$-lipschitzienne : c'est la « boîte » de la preuve. L'ouverture de $U$ sert aussi à ce que la solution puisse bouger autour de $x$ sans quitter $U$.

**Si on la retire.** Sur $U=[0;+\infty[$ (fermé, non ouvert) avec $X(x)=-1$, $x_0=0$, $\tau_0=0$ : toute solution de $\alpha'=-1$, $\alpha(0)=0$ est $\alpha(t)=-t$, qui sort de $U$ pour $t>0$ ; aucune courbe intégrale à valeurs dans $U$ n'existe sur un intervalle ouvert contenant $0$. De même, si $\tau_0$ est une borne de $I$, aucune solution bilatère n'existe autour de $\tau_0$.

### H3 — $X$ est continue sur $I\times U$

**Rôle.** Pour toute $\varphi$ continue, $s\mapsto X(s,\varphi(s))$ est continue : l'opérateur $S$ est bien défini et à valeurs dans les fonctions $C^1$, ce qui donne l'équivalence avec l'équation intégrale ([[ch07-equation-integrale]]). La continuité au point $(\tau_0,x_0)$ fournit aussi la borne $\ell$ sur $\|X\|$ (stabilité de la boule $\bar B(x_0,2a)$ par $S$).

**Si on la retire.** Plus d'existence : $X(x)=1$ si $x\le0$, $X(x)=-1$ si $x>0$ (lipschitzien de chaque côté de $0$). Si $\alpha$ est une solution $C^1$ de $\alpha'=X(\alpha)$, $\alpha(0)=0$, alors $\alpha'(0)=X(0)=1>0$ ; par continuité de $\alpha'$, $\alpha'>0$ près de $0$, donc $\alpha(t)>0$ pour $t>0$ petit, donc $\alpha'(t)=X(\alpha(t))=-1<0$ : contradiction.

### H4 — $X$ est localement lipschitzien en la seconde variable

**Rôle.** C'est l'hypothèse de **contraction** : $\|S(\varphi_1)-S(\varphi_2)\|_\infty\le kb\,\|\varphi_1-\varphi_2\|_\infty\le\frac12\|\varphi_1-\varphi_2\|_\infty$. Sans elle, $S$ est encore bien défini mais rien n'empêche deux points fixes distincts.

**Si on la retire.** L'existence subsiste en dimension finie (théorème de Peano) mais pas l'unicité : pour $X(x)=2|x|^{1/2}$ sur $\R$ (continu, non lipschitzien en $0$), le problème $\alpha'=2|\alpha|^{1/2}$, $\alpha(0)=0$ admet les deux solutions $\alpha_1=0$ et $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ sur $\R$ : pour $t>0$, $\alpha_2'=2t=2\sqrt{t^2}$ ; pour $t<0$, $\alpha_2'=-2t=2|t|=2\sqrt{t^2}$ ; en $0$, $\alpha_2'(0)=0=2|0|^{1/2}$. Voir [[ch07-peano-non-unicite]] (il y a même une infinité de solutions).

## Idée de la preuve

Réécrire (VII.2.1) en équation intégrale (VII.2.2) ; sur une boîte $[t_0-b;t_0+b]\times\bar B(x_0,2a)$ où $X$ est bornée par $\ell$ et $k$-lipschitzienne, l'opérateur de Picard $S_{t_0,x}$ envoie $\mathcal X=C^0([t_0-b;t_0+b],\bar B(x_0,2a))$ dans lui-même et y est $\frac12$-lipschitzien dès que $b\ell\le a$ et $bk\le\frac12$ (Lemme VII.2.7) ; le point fixe de Banach donne existence et unicité dans $\mathcal X$. Enfin, par connexité et l'estimation $\|\alpha(t)-x_0\|<a+\ell b<2a$, toute solution reste dans $\bar B(x_0,2a)$, d'où l'unicité complète.

## Preuve

*Étape 0 : reformulation intégrale.* D'après [[ch07-equation-integrale]], une fonction continue $\alpha$ définie sur un intervalle contenant $t_0$, à valeurs dans $U$, est solution de (VII.2.1) (elle est alors automatiquement $C^1$) si et seulement si, pour tout $t$,
$$
\text{(VII.2.2)}\qquad \alpha(t)=x+\int_{t_0}^tX(s,\alpha(s))\,ds.
$$
Nous allons trouver une telle application $\alpha$ comme point fixe d'un opérateur, grâce au théorème du point fixe de Banach (poly, Théorème VI.1.1, p. 115) : *une application $a$-lipschitzienne, $a\in[0;1[$, d'un espace métrique complet dans lui-même possède un unique point fixe.*

*Étape 1 : la boîte et les constantes $k$, $a$, $a'$, $\ell$.* Par définition du caractère localement lipschitzien ([[ch07-localement-lipschitzien-def]], mise en forme dans [[ch07-restriction-domaine-c1-lipschitz]]), il existe $k>0$, $a>0$ et $a'>0$ tels que $\bar B(x_0,2a)\subset U$, $[\tau_0-2a';\tau_0+2a']\subset I$, et $X$ soit $k$-lipschitzienne en la seconde variable sur la boîte $[\tau_0-2a';\tau_0+2a']\times\bar B(x_0,2a)$. Quitte à diminuer encore $a$ et $a'$, on peut supposer de plus que $X$ est bornée sur cette boîte : par continuité de $X$ au point $(\tau_0,x_0)$, il existe un voisinage de ce point sur lequel $\|X(t,x)-X(\tau_0,x_0)\|\le1$, et il suffit que la boîte y soit contenue. Posons
$$
\ell=1+\sup_{t\in[\tau_0-2a';\tau_0+2a'],\ x\in\bar B(x_0,2a)}\|X(t,x)\|\ >0,
$$
de sorte que $\|X(t,x)\|\le\ell$ sur la boîte.

*Étape 2 : choix de $b$.* Choisissons $b>0$ tel que
$$
b\,\ell<a,\qquad b\,k\le\tfrac12,\qquad b<a'.
$$

*Étape 3 : existence, et unicité parmi les solutions à valeurs dans $\bar B(x_0,2a)$.* Soient $x\in B(x_0,a)$ et $t_0\in\,]\tau_0-a';\tau_0+a'[$. Pour $t\in[t_0-b;t_0+b]$, $|t-\tau_0|\le|t-t_0|+|t_0-\tau_0|<b+a'<2a'$ : donc $[t_0-b;t_0+b]\subset[\tau_0-2a';\tau_0+2a']\subset I$. Appliquons le lemme [[ch07-lemme-operateur-integral]] avec $c=t_0$, $\rho=a$, $\epsilon=b$ et $Y$ la restriction de $X$ à $[t_0-b;t_0+b]\times\bar B(x_0,2a)$ : $Y$ est continue, majorée en norme par $\ell$, $k$-lipschitzienne en la seconde variable ; on a $\epsilon\ell=b\ell\le a=\rho$ et $\epsilon k=bk\le\frac12$ ; et $x\in B(x_0,a)\subset\bar B(x_0,\rho)$. Le lemme montre que l'opérateur
$$
S=S_{t_0,x} : \varphi\mapsto S_{t_0,x}(\varphi),\qquad S_{t_0,x}(\varphi)(t)=x+\int_{t_0}^tX(s,\varphi(s))\,ds,
$$
envoie $\mathcal X=C^0\big([t_0-b;t_0+b],\bar B(x_0,2a)\big)$ dans lui-même et y est $\frac12$-lipschitzien pour la norme $\|\cdot\|_\infty$, et que $\mathcal X$ est complet. Le théorème de Banach fournit un unique point fixe $\alpha$ de $S$ dans $\mathcal X$ : c'est l'unique solution de (VII.2.2) définie sur $[t_0-b;t_0+b]$ et à valeurs dans $\bar B(x_0,2a)$. Par l'étape 0, sa restriction à $]t_0-b;t_0+b[$ est une courbe intégrale de $X$ de condition initiale $(t_0,x)$ : c'est l'**existence**.

*Étape 4 : unicité renforcée.* L'unicité dans l'énoncé est un peu plus forte que celle du point fixe, qui ne concerne que les fonctions à valeurs dans $\bar B(x_0,2a)$. Pour l'établir, il suffit de vérifier que **toute** solution $\alpha$ de (VII.2.1) définie sur $[t_0-b;t_0+b]$ est à valeurs dans $\bar B(x_0,2a)$ (elle est alors dans $\mathcal X$, donc égale au point fixe). Soit
$$
J=\big\{t\in[t_0-b;t_0+b]\ :\ \|\alpha(s)-x_0\|<2a\ \text{pour tout }s\text{ entre }t_0\text{ et }t\big\}.
$$
C'est un intervalle contenant $t_0$ (car $\|\alpha(t_0)-x_0\|=\|x-x_0\|<a<2a$). Il est **ouvert** dans $[t_0-b;t_0+b]$ : si $t\in J$, la fonction continue $s\mapsto\|\alpha(s)-x_0\|$ est $<2a$ sur le segment compact d'extrémités $t_0$ et $t$, donc son maximum y est $<2a$, et par continuité elle reste $<2a$ sur un segment légèrement plus grand ; les points voisins de $t$ sont donc dans $J$. Pour $t\in J$ et tout $s$ entre $t_0$ et $t$, le point $(s,\alpha(s))$ est dans la boîte, donc $\|\alpha'(s)\|=\|X(s,\alpha(s))\|\le\ell$ ; l'inégalité des accroissements finis ([[ch05-accroissements-finis-borne]]) sur le segment d'extrémités $t_0$ et $t$ donne $\|\alpha(t)-x\|\le\ell\,|t-t_0|$, d'où
$$
\|\alpha(t)-x_0\|\le\|x-x_0\|+\ell\,|t-t_0|<a+\ell b<2a,
$$
la dernière inégalité venant de $b\ell<a$. Il est **fermé** dans $[t_0-b;t_0+b]$ : si $t_n\in J$ tend vers $t$, tout $s$ strictement entre $t_0$ et $t$ est entre $t_0$ et $t_n$ pour $n$ grand, donc $\|\alpha(s)-x_0\|<2a$ ; et $\|\alpha(t)-x_0\|=\lim_n\|\alpha(t_n)-x_0\|\le a+\ell b<2a$, car la majoration par la constante $a+\ell b$ passe à la limite. Donc $t\in J$. Par connexité de l'intervalle $[t_0-b;t_0+b]$, $J$ est l'intervalle tout entier : $\alpha\in\mathcal X$, et $\alpha$ est le point fixe de l'étape 3.

*Précision pour l'intervalle ouvert.* Si une solution $\beta$ de (VII.2.1) n'est définie que sur $]t_0-b;t_0+b[$, on applique les étapes 3 et 4 sur $[t_0-b';t_0+b']$ pour chaque $b'<b$ (les conditions $b'\ell<a$, $b'k\le\frac12$, $b'<a'$ restent vraies) : $\beta$ coïncide avec le point fixe $\alpha$ sur chacun de ces segments, donc sur $]t_0-b;t_0+b[$.

*Conclusion.* Pour revenir aux notations de l'énoncé, on prend $\epsilon=b$, $\delta=a'$ et $\eta=a$. Ces constantes ont été choisies en fonction de $(\tau_0,x_0)$ seulement, avant de fixer $(t_0,x)$ : la demi-longueur $\epsilon$ est bien uniforme. $\square$

## Preuve à trous

*Étape 0.* (VII.2.1) équivaut à l'équation intégrale (VII.2.2) $\alpha(t)=x+\int_{t_0}^tX(s,\alpha(s))\,ds$ : on cherche $\alpha$ comme <trou indice="quel théorème du chapitre VI ?">point fixe de l'opérateur de Picard $S_{t_0,x}$, grâce au théorème du point fixe de Banach dans un espace complet</trou>.

*Étapes 1-2.* On fixe une boîte $[\tau_0-2a';\tau_0+2a']\times\bar B(x_0,2a)\subset I\times U$ sur laquelle $X$ est $k$-lipschitzienne en la seconde variable et bornée par $\ell=1+\sup\|X\|$. On choisit ensuite $b>0$ tel que <trou indice="trois conditions : stabilité de la boule, contraction, rester dans la boîte en temps">$b\ell<a$, $bk\le\frac12$ et $b<a'$</trou>.

*Étape 3.* Pour $x\in B(x_0,a)$ et $t_0\in\,]\tau_0-a';\tau_0+a'[$, le Lemme VII.2.7 (avec $c=t_0$, $\rho=a$, $\epsilon=b$) montre que $S_{t_0,x}$ <trou indice="les deux conclusions du lemme sur l'espace $\mathcal X$">envoie $\mathcal X=C^0([t_0-b;t_0+b],\bar B(x_0,2a))$ dans lui-même et y est $\frac12$-lipschitzien ; $\mathcal X$ étant complet, $S$ a un unique point fixe $\alpha$</trou> : c'est l'unique solution de (VII.2.2) sur $[t_0-b;t_0+b]$ à valeurs dans $\bar B(x_0,2a)$.

*Étape 4.* Pour l'unicité complète, soit $\alpha$ une solution quelconque sur $[t_0-b;t_0+b]$ et $J$ l'ensemble des $t$ tels que $\|\alpha(s)-x_0\|<2a$ pour tout $s$ entre $t_0$ et $t$. $J$ est un intervalle contenant $t_0$, ouvert par continuité. Pour $t\in J$, <trou indice="borner $\|\alpha'\|$ par $\ell$ puis accroissements finis">$\|\alpha'(s)\|=\|X(s,\alpha(s))\|\le\ell$ entre $t_0$ et $t$, donc $\|\alpha(t)-x_0\|\le\|x-x_0\|+\ell|t-t_0|<a+\ell b<2a$</trou>. Cette majoration stricte par une constante passe à la limite : $J$ est fermé, et <trou indice="quelle propriété topologique d'un intervalle conclut ?">par connexité $J=[t_0-b;t_0+b]$</trou>, donc $\alpha\in\mathcal X$ est le point fixe. On prend $\epsilon=b$, $\delta=a'$, $\eta=a$. $\square$

## Exemples

* **Itérées de Picard pour $\alpha'=\alpha$, $\alpha(0)=1$.** Ici $X(x)=x$, $k=1$. En partant de $\varphi_0\equiv1$, $\varphi_{n+1}(t)=1+\int_0^t\varphi_n(s)\,ds$ donne $\varphi_1=1+t$, $\varphi_2=1+t+\frac{t^2}{2}$, ..., $\varphi_n(t)=\sum_{j=0}^n\frac{t^j}{j!}$ : la suite converge vers $e^t$, l'unique solution. Constantes de la preuve autour de $(\tau_0,x_0)=(0,1)$ : $a=\frac12$ (boîte $\bar B(1,1)=[0;2]\subset\R$), $\ell=1+\sup_{[0;2]}|x|=3$, $a'=1$ (disons) ; il faut $b<\min\big(\frac a\ell,\frac1{2k},a'\big)=\min\big(\frac16,\frac12,1\big)=\frac16$. Le théorème garantit donc existence et unicité sur $]t_0-b;t_0+b[$, $b<\frac16$, pour tout $x\in B(1,\frac12)$ et $t_0\in\,]-1;1[$, alors que la solution $x\,e^{t-t_0}$ est définie sur $\R$ : le théorème est **local et pessimiste**.

* **Explosion en temps fini : $\alpha'=\alpha^2$, $\alpha(0)=1$.** Le champ $X(x)=x^2$ est $C^\infty$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]) : il y a une unique solution locale. C'est $\alpha(t)=\frac1{1-t}$ sur $]-\infty;1[$ (on vérifie $\alpha'=\frac{1}{(1-t)^2}=\alpha^2$, $\alpha(0)=1$), qui tend vers $+\infty$ quand $t\to1^-$ : la régularité $C^\infty$ du champ ne donne aucune existence globale. (Avec $a=\frac12$, boîte $[0;2]$ : $\ell=5$, $k=4$ car $|x_1^2-x_2^2|\le4|x_1-x_2|$ sur $[0;2]$, d'où $b<\frac1{10}$.)

* **Champ dépendant du temps : $\alpha'=2t\alpha$, $\alpha(t_0)=x$.** $X(t,x)=2tx$ vérifie $|X(t,x_1)-X(t,x_2)|=2|t|\,|x_1-x_2|$ : sur $J_0=[\tau_0-1;\tau_0+1]$ on a la constante uniforme $k=2(|\tau_0|+1)$, donc $X$ est localement lipschitzien en la seconde variable ([[ch07-localement-lipschitzien-def]]). L'unique solution est $\alpha(t)=x\,e^{t^2-t_0^2}$ ($\alpha'=2t\alpha$, $\alpha(t_0)=x$), ici globale.

## Pièges

* > ⚠️ Le théorème est **local** : il ne donne qu'un petit intervalle $]t_0-\epsilon;t_0+\epsilon[$. Même pour $X$ de classe $C^\infty$, la solution peut exploser en temps fini ($\alpha'=\alpha^2$). Pour une solution globale, il faut un argument supplémentaire : lemme des bouts ([[ch07-lemme-des-bouts]]), Gronwall, linéarité, quantité conservée.
* > ⚠️ L'**unicité** vient du caractère lipschitzien, pas de la continuité : $\alpha'=2|\alpha|^{1/2}$, $\alpha(0)=0$ a une infinité de solutions ([[ch07-peano-non-unicite]]).
* L'unicité fournie par le point fixe ne porte que sur les solutions à valeurs dans $\bar B(x_0,2a)$ ; l'étape 4 (estimation $\|\alpha(t)-x_0\|<a+\ell b<2a$ et connexité) est indispensable pour conclure que toute solution coïncide avec le point fixe. Oublier cette étape est l'erreur classique à l'écrit.
* Deux conditions distinctes sur $b$ : $b\ell\le a$ (l'opérateur **stabilise** la boule $\bar B(x_0,2a)$ ; la marge entre $B(x_0,a)$ et $\bar B(x_0,2a)$ est essentielle) et $bk\le\frac12$ (**contraction**) ; plus $b<a'$ pour rester dans $I$.
* Ne pas confondre le point de référence $(\tau_0,x_0)$, qui fixe les constantes $\eta,\delta,\epsilon$, et la condition initiale $(t_0,x)$, qui varie dans $]\tau_0-\delta;\tau_0+\delta[\times B(x_0,\eta)$. C'est l'uniformité de $\epsilon$ en $(t_0,x)$ qui rend l'énoncé « compliqué » et qui permettra de définir le flot ([[ch07-uniformite-epsilon-remarque]], [[ch07-flot-local-def]]).
* L'intervalle d'existence est centré en $t_0$, pas en $\tau_0$ ; pour un intervalle centré en $\tau_0$, voir [[ch07-intervalle-centre-tau0-remarque]].
* $E$ doit être **complet** : le contre-exemple du décalage dans $c_{00}$ (H1) montre que l'existence peut tomber sinon, même pour un champ linéaire.
* Le théorème ne demande pas $X$ lipschitzien sur tout $U$ (seulement localement) et ne demande pas $X$ de classe $C^1$ ($|x|$ convient) ; en pratique on vérifie $C^1$ via [[ch07-restriction-domaine-c1-lipschitz]].
* La solution donnée est de classe $C^1$ ; si $X$ est $C^p$, elle est automatiquement $C^{p+1}$ en $t$ ([[ch07-cauchy-lipschitz-parametres]]).
