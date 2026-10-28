---
id: ch07-restriction-domaine-c1-lipschitz
type: proposition
chapter: 7
title: On peut restreindre $U$ et $I$ ; un champ $C^1$ est localement lipschitzien
ref: Remarque VII.2.2
page: 128
importance: 2
depends: [ch05-accroissements-finis, ch05-accroissements-finis-borne, ch07-localement-lipschitzien-def, ch07-cauchy-lipschitz]
tags: [lipschitz, classe-c1, accroissements-finis, localite, cauchy-lipschitz, critere-pratique]
---
## Intuition

> 💡 Deux idées simples. **(a) Tout est local.** Le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) ne parle que de ce qui se passe pendant un court instant autour de $(\tau_0,x_0)$ : une solution n'a pas le temps de s'éloigner. On peut donc jeter tout ce que fait le champ $X$ loin de $(\tau_0,x_0)$, et en particulier supposer que $X$ est $k$-lipschitzien avec **une seule** constante $k$ sur toute la petite boîte restante. **(b) Pente bornée $\Rightarrow$ lipschitzien.** Si $X$ est de classe $C^1$, sa différentielle est continue, donc bornée par un $k$ près de $(t_1,x_1)$ ; l'inégalité des accroissements finis transforme cette borne sur la « pente » en une inégalité $\|X(t,x)-X(t,x')\|\le k\|x-x'\|$.

C'est (b) que l'on utilise en pratique : dans presque tous les exercices, le champ est $C^1$ ou $C^\infty$ (polynômes, $\sin$, $\exp$, produits de matrices...), et cette remarque dispense de vérifier le caractère lipschitzien à la main.

Vocabulaire. Un champ de vecteurs $X : I\times U\to E$ est **localement lipschitzien en la seconde variable** si autour de chaque $(t_0,x_0)$ il existe une boîte $J_0\times U_0$ et une constante $k$ avec $\|X(t,x_1)-X(t,x_2)\|\le k\|x_1-x_2\|$ pour $t\in J_0$, $x_1,x_2\in U_0$ ([[ch07-localement-lipschitzien-def]]). $X$ est de **classe $C^1$** sur l'ouvert $I\times U$ de $\R\times E$ si elle est différentiable en tout point avec $(t,x)\mapsto dX_{(t,x)}\in\mathcal L(\R\times E;E)$ continue ([[ch05-differentielle-def]]) ; on munit $\R\times E$ de la norme $\|(s,h)\|=|s|+\|h\|_E$, de sorte que $\|(0,h)\|=\|h\|_E$.

## Énoncé

**Proposition (poly, Remarque VII.2.2, p. 128).** Soit $X : I\times U\to E$ un champ de vecteurs dépendant du temps sur un ouvert $U$ d'un espace de Banach $E$, $I$ intervalle ouvert de $\R$.

**(a) Localité.** Le domaine $U$ peut être arbitrairement restreint sans changer la conclusion du théorème VII.2.1 : si $U'\subset U$ est un ouvert contenant $x_0$ et $I'\subset I$ un intervalle ouvert contenant $\tau_0$, la conclusion du théorème de Cauchy-Lipschitz en $(\tau_0,x_0)$ pour la restriction $X|_{I'\times U'}$ entraîne celle pour $X$ (quitte à diminuer $\epsilon$). On peut donc, pour démontrer le théorème, supposer que $X$ est $k$-lipschitzien en la seconde variable sur tout $I\times U$, avec une seule constante $k$.

**(b) Critère $C^1$.** Si $X$ est de classe $C^1$ sur $I\times U$, alors $X$ est localement lipschitzien en la seconde variable ; en particulier le théorème de Cauchy-Lipschitz s'applique. Précisément : soient $x_1\in U$ et $t_1\in I$. Par continuité de $(t,x)\mapsto dX_{(t,x)}$, il existe un voisinage $]t_1-a\,;t_1+a[\times B(x_1,b)$ de $(t_1,x_1)$ contenu dans $I\times U$ et une constante $k\ge0$ telle que $\|dX_{(t,x)}\|\le k$ pour tout $(t,x)$ dans ce voisinage. Le théorème des accroissements finis implique alors que $X$ est $k$-lipschitzien sur $]t_1-a\,;t_1+a[\times B(x_1,b)$, et en particulier $k$-lipschitzien en la seconde variable.

## Hypothèses

### H1 — $X$ est de classe $C^1$ (pour (b))

**Rôle.** La continuité de $dX$ fournit la borne $\|dX_{(t,x)}\|\le k$ sur un voisinage ; la différentiabilité permet d'appliquer le théorème des accroissements finis.

**Si on la retire.** Le critère est **suffisant, pas nécessaire** : $X(x)=|x|$ sur $\R$ est $1$-lipschitzien mais n'est pas dérivable en $0$ ; Cauchy-Lipschitz s'applique pourtant (unique solution $\alpha(t)=x\,e^{\pm t}$ selon le signe de $x$, et $\alpha\equiv0$ pour $x=0$). En revanche, sans aucune régularité au-delà de la continuité, l'unicité tombe : $X(x)=2|x|^{1/2}$ est continue, non lipschitzienne en $0$, et $\alpha'=2|\alpha|^{1/2}$, $\alpha(0)=0$ a une infinité de solutions ([[ch07-peano-non-unicite]]). Enfin « différentiable » ne suffit pas : $X(x)=x^2\sin(1/x^2)$ (prolongée par $X(0)=0$) est dérivable sur $\R$ avec $X'(0)=0$, mais $X'(x)=2x\sin(1/x^2)-\frac2x\cos(1/x^2)$ n'est pas bornée près de $0$ (en $x_n=(2\pi n)^{-1/2}$, $X'(x_n)=-2\sqrt{2\pi n}\to-\infty$), donc $X$ n'est lipschitzienne sur aucun voisinage de $0$ (une fonction $k$-lipschitzienne dérivable vérifie $|X'|\le k$).

### H2 — Le voisinage $]t_1-a\,;t_1+a[\times B(x_1,b)$ est convexe

**Rôle.** Le théorème des accroissements finis majore $\|X(t,x)-X(t',x')\|$ par $k$ fois la distance **à condition que le segment** joignant $(t,x)$ à $(t',x')$ reste dans la zone où $\|dX\|\le k$ : un produit d'un intervalle et d'une boule est convexe, donc contient tous ces segments.

**Si on la retire.** Hypothèse de confort : la continuité de $dX$ fournit d'abord un voisinage quelconque de $(t_1,x_1)$ où $\|dX\|\le k$, et l'on y choisit une boîte convexe plus petite. Sur un ouvert **non convexe** où $\|dX\|\le k$, la conclusion « $k$-lipschitzien sur tout l'ouvert » peut être fausse (deux points proches en norme mais reliés seulement par un long chemin dans l'ouvert) ; c'est pourquoi la définition est **locale**.

### H3 — Pour (a) : $X$ continue et $U'$, $I'$ ouverts contenant $x_0$, $\tau_0$

**Rôle.** La continuité de $X$ borne $\|X\|$ par $\ell$ sur une petite boîte autour de $(\tau_0,x_0)$ : c'est ce qui empêche une solution de sortir de $U'$ en temps $\epsilon$ petit (estimation $\|\alpha(t)-x_0\|\le\|x-x_0\|+\ell|t-t_0|$). L'ouverture de $U'$ et $I'$ permet d'y loger une boule fermée $\bar B(x_0,2r)$ et un segment.

**Si on la retire.** Si $U'$ n'est pas un voisinage de $x_0$ (par exemple $U'=\{x_0\}$), les solutions de la restriction n'ont aucun sens : il n'y a plus de courbe intégrale non constante possible, et la conclusion du théorème pour $X$ ne se déduit de rien.

## Idée de la preuve

(a) Une solution pour la restriction est une solution pour $X$ ; réciproquement, pour $\epsilon\ell\le r$, toute solution pour $X$ reste dans $\bar B(x_0,2r)\subset U'$ (argument de connexité de [[ch07-cauchy-lipschitz]]), donc est une solution pour la restriction. (b) Continuité de $dX$ $\Rightarrow$ $\|dX\|\le k$ sur une boîte convexe $\Rightarrow$ accroissements finis $\Rightarrow$ $k$-lipschitzien.

## Preuve

**(b) Critère $C^1$.** Soient $(t_1,x_1)\in I\times U$ et $k_1=\|dX_{(t_1,x_1)}\|$. L'application $(t,x)\mapsto dX_{(t,x)}$ étant continue en $(t_1,x_1)$, il existe un voisinage $V$ de $(t_1,x_1)$ dans $I\times U$ sur lequel $\|dX_{(t,x)}-dX_{(t_1,x_1)}\|\le1$, donc $\|dX_{(t,x)}\|\le k:=k_1+1$. Comme $I\times U$ est ouvert dans $\R\times E$, on peut choisir $a>0$ et $b>0$ tels que la boîte
$$
V_0=\,]t_1-a\,;t_1+a[\times B(x_1,b)
$$
soit contenue dans $V\cap(I\times U)$. L'ensemble $V_0$ est **convexe** (produit de deux convexes), et $X$ est différentiable sur $V_0$ avec $\sup_{V_0}\|dX\|\le k$. Le théorème des accroissements finis ([[ch05-accroissements-finis]], cas d'un ouvert convexe) donne donc, pour tous $(t,x),(t',x')\in V_0$,
$$
\|X(t,x)-X(t',x')\|_E\le k\,\|(t,x)-(t',x')\|_{\R\times E}=k\,\big(|t-t'|+\|x-x'\|_E\big).
$$
C'est dire que $X$ est $k$-lipschitzien sur $V_0$. En particulier, pour $t=t'\in\,]t_1-a\,;t_1+a[$ et $x,x'\in B(x_1,b)$,
$$
\|X(t,x)-X(t,x')\|_E\le k\,\|x-x'\|_E :
$$
$X$ est $k$-lipschitzien en la seconde variable sur la boîte $J_0\times U_0=\,]t_1-a\,;t_1+a[\times B(x_1,b)$, avec $k$ indépendant de $t\in J_0$. Ceci valant pour tout $(t_1,x_1)$, $X$ est localement lipschitzien en la seconde variable au sens de [[ch07-localement-lipschitzien-def]], et le théorème [[ch07-cauchy-lipschitz]] s'applique.

*Variante (plus faible et plus souvent utile).* Il suffit que $X$ soit continue, différentiable par rapport à $x$, avec $\dfrac{\partial X}{\partial x} : I\times U\to\mathcal L(E;E)$ continue ([[ch05-differentielles-partielles]]) : on applique les accroissements finis à l'application partielle $x\mapsto X(t,x)$ sur la boule convexe $B(x_1,b)$, où $\|\partial X/\partial x\|\le k$ par continuité, pour chaque $t$ fixé dans $]t_1-a\,;t_1+a[$.

**(a) Localité.** Fixons $(\tau_0,x_0)\in I\times U$, un intervalle ouvert $I'\subset I$ contenant $\tau_0$ et un ouvert $U'\subset U$ contenant $x_0$, et notons $X'=X|_{I'\times U'}$. Supposons la conclusion du théorème VII.2.1 acquise pour $X'$ en $(\tau_0,x_0)$ : il existe $\eta',\delta',\epsilon'>0$ tels que pour $x\in B(x_0,\eta')$ et $t_0\in\,]\tau_0-\delta'\,;\tau_0+\delta'[$, le problème $\alpha'=X(t,\alpha)$, $\alpha(t_0)=x$ possède une unique solution **à valeurs dans $U'$** définie sur $]t_0-\epsilon'\,;t_0+\epsilon'[$.

*Préparation.* Comme $U'$ et $I'$ sont ouverts, il existe $r>0$ et $a'>0$ avec $\bar B(x_0,2r)\subset U'$ et $[\tau_0-2a'\,;\tau_0+2a']\subset I'$ ; par continuité de $X$ en $(\tau_0,x_0)$, quitte à diminuer $r$ et $a'$, on a $\|X(t,x)-X(\tau_0,x_0)\|\le1$ sur la boîte $[\tau_0-2a'\,;\tau_0+2a']\times\bar B(x_0,2r)$, donc $\|X\|\le\ell:=1+\|X(\tau_0,x_0)\|$ sur cette boîte. Posons
$$
\eta=\min(\eta',r),\qquad\delta=\min(\delta',a'),\qquad\epsilon=\min\big(\epsilon',\,a',\,r/\ell\big).
$$

*Existence.* Soient $x\in B(x_0,\eta)$ et $t_0\in\,]\tau_0-\delta\,;\tau_0+\delta[$. La solution $\alpha$ fournie par l'hypothèse pour $X'$ est à valeurs dans $U'\subset U$ et vérifie $\alpha'(t)=X'(t,\alpha(t))=X(t,\alpha(t))$ : sa restriction à $]t_0-\epsilon\,;t_0+\epsilon[$ est une courbe intégrale de $X$ de condition initiale $(t_0,x)$.

*Unicité.* Soit $\beta : ]t_0-\epsilon\,;t_0+\epsilon[\to U$ une courbe intégrale quelconque de $X$ avec $\beta(t_0)=x$. Montrons que $\beta$ reste dans $\bar B(x_0,2r)\subset U'$ : elle sera alors une solution pour $X'$ sur cet intervalle, donc égale à $\alpha$ par l'unicité acquise pour $X'$ (appliquée sur chaque $]t_0-\epsilon''\,;t_0+\epsilon''[$, $\epsilon''<\epsilon$, comme dans la preuve de [[ch07-cauchy-lipschitz]]). Soit
$$
J=\big\{t\in\,]t_0-\epsilon\,;t_0+\epsilon[\ :\ \|\beta(s)-x_0\|<2r\text{ pour tout }s\text{ entre }t_0\text{ et }t\big\}.
$$
C'est un intervalle contenant $t_0$ (car $\|x-x_0\|<\eta\le r<2r$), ouvert par continuité de $\beta$. Pour $t\in J$ et $s$ entre $t_0$ et $t$ : $|s-\tau_0|\le|s-t_0|+|t_0-\tau_0|<\epsilon+\delta\le2a'$ et $\beta(s)\in\bar B(x_0,2r)$, donc $(s,\beta(s))$ est dans la boîte et $\|\beta'(s)\|=\|X(s,\beta(s))\|\le\ell$. L'inégalité des accroissements finis ([[ch05-accroissements-finis-borne]]) donne alors
$$
\|\beta(t)-x_0\|\le\|x-x_0\|+\ell\,|t-t_0|<\eta+\ell\epsilon\le r+r=2r.
$$
Cette majoration par la constante $\eta+\ell\epsilon<2r$ passe à la limite : $J$ est fermé dans $]t_0-\epsilon\,;t_0+\epsilon[$. Par connexité, $J$ est l'intervalle tout entier, et $\beta$ est à valeurs dans $\bar B(x_0,2r)\subset U'$. D'où l'unicité pour $X$, avec les constantes $\eta,\delta,\epsilon$.

*Conséquence pour la démonstration du théorème.* Par définition du caractère localement lipschitzien, il existe une boîte $]\tau_0-2a'\,;\tau_0+2a'[\times B(x_0,2a)$ sur laquelle $X$ est $k$-lipschitzien en la seconde variable avec **un seul** $k$ ; d'après (a), il suffit de démontrer le théorème pour la restriction de $X$ à cette boîte, c'est-à-dire en supposant $X$ globalement $k$-lipschitzien en la seconde variable. $\square$

## Preuve à trous

**(b)** Soit $(t_1,x_1)\in I\times U$. Par <trou indice="quelle propriété de $dX$ donne une borne près du point ?">continuité de $(t,x)\mapsto dX_{(t,x)}$ en $(t_1,x_1)$, il existe un voisinage où $\|dX_{(t,x)}\|\le k:=1+\|dX_{(t_1,x_1)}\|$</trou> ; on y loge une boîte $V_0=\,]t_1-a\,;t_1+a[\times B(x_1,b)\subset I\times U$. Comme $V_0$ est <trou indice="propriété géométrique nécessaire pour les accroissements finis">convexe (produit d'un intervalle et d'une boule), le théorème des accroissements finis donne $\|X(t,x)-X(t',x')\|\le k\,(|t-t'|+\|x-x'\|)$ sur $V_0$</trou>. En prenant $t=t'$ : $\|X(t,x)-X(t,x')\|\le k\|x-x'\|$ pour $t\in\,]t_1-a\,;t_1+a[$, $x,x'\in B(x_1,b)$, avec $k$ indépendant de $t$.

**(a)** Si la conclusion de VII.2.1 vaut pour $X|_{I'\times U'}$, l'existence pour $X$ est immédiate. Pour l'unicité, on choisit $\bar B(x_0,2r)\subset U'$, une borne $\ell$ de $\|X\|$ sur une boîte autour de $(\tau_0,x_0)$, et <trou indice="quelle condition sur $\epsilon$ empêche de sortir de la boule ?">$\epsilon\le r/\ell$, $\eta\le r$</trou>. Toute solution $\beta$ pour $X$ vérifie alors, tant qu'elle reste dans la boîte, <trou indice="accroissements finis avec $\|\beta'\|\le\ell$">$\|\beta(t)-x_0\|\le\|x-x_0\|+\ell|t-t_0|<\eta+\ell\epsilon\le2r$</trou>, et par connexité elle reste dans $\bar B(x_0,2r)\subset U'$ : c'est une solution pour la restriction, donc la solution. $\square$

## Exemples

* **$X(x)=x^2$ sur $\R$.** $dX_x(h)=2xh$, $\|dX_x\|=2|x|$. Sur $B(x_1,b)=\,]x_1-b\,;x_1+b[$, $\|dX\|\le k=2(|x_1|+b)$, et en effet $|x^2-x'^2|=|x+x'|\,|x-x'|\le2(|x_1|+b)|x-x'|$. Le champ n'est pas globalement lipschitzien ($k\to\infty$ avec $|x_1|$), mais il l'est **localement** : Cauchy-Lipschitz s'applique en tout point ; la solution $\alpha(t)=\frac{x_0}{1-x_0t}$ (pour $\alpha(0)=x_0$) explose néanmoins en temps fini.
* **$X(t,x)=\sin(tx)$ sur $\R\times\R$.** $\dfrac{\partial X}{\partial x}(t,x)=t\cos(tx)$, donc $\big|\frac{\partial X}{\partial x}\big|\le|t|\le|t_1|+a$ sur $]t_1-a\,;t_1+a[\times\R$ : $X$ est $k$-lipschitzien en $x$ avec $k=|t_1|+a$, **uniformément en $t$** proche de $t_1$, comme l'exige la définition.
* **$X(A)=A^2$ sur $E=\mathrm{M}_n(\R)$** (norme d'opérateur, sous-multiplicative). $dX_A(H)=AH+HA$ donc $\|dX_A\|\le2\|A\|$ et $X$ est $2(\|A_1\|+b)$-lipschitzien sur $B(A_1,b)$ : l'équation matricielle $A'=A^2$ relève de Cauchy-Lipschitz. Même méthode pour tout champ polynomial en les coefficients.

## Pièges

* > ⚠️ $C^1\Rightarrow$ localement lipschitzien, **jamais la réciproque** : $|x|$ est lipschitzien non $C^1$. Et « lipschitzien » n'est pas « continu » : $2|x|^{1/2}$ est continu, non lipschitzien en $0$, et l'unicité tombe ([[ch07-peano-non-unicite]]).
* « Localement » : la constante $k$ dépend du point $(t_1,x_1)$ ; $x^2$ ou $A^2$ ne sont pas globalement lipschitziens. Ne pas en déduire d'existence globale ([[ch07-lemme-des-bouts]] pour cela).
* La constante $k$ doit être **uniforme en $t$** près de $t_1$ : c'est automatique si $\partial X/\partial x$ est continue en $(t,x)$, pas si l'on suppose seulement $x\mapsto X(t,x)$ lipschitzien pour chaque $t$ avec une constante $k(t)$ non bornée.
* Dans (a), restreindre $U$ ne change la conclusion que **quitte à diminuer $\epsilon$** : c'est l'estimation $\epsilon\ell\le r$ qui garantit que la solution n'a pas le temps de quitter $U'$.
* Le théorème des accroissements finis s'applique sur un **convexe** : choisir une boule et un intervalle, pas un ouvert quelconque.
