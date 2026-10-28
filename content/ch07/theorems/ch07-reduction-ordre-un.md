---
id: ch07-reduction-ordre-un
type: proposition
chapter: 7
title: Réduction d'une équation d'ordre $k$ à un système d'ordre 1
ref: Formule (VII.1.2)
page: 127
importance: 2
depends: [ch05-classe-ck-def, ch05-differentiabilite-composantes]
tags: [equation-differentielle, ordre-k, systeme, espace-des-phases, reduction]
---
## Intuition

> 💡 Une équation d'ordre $k$ dit comment la dérivée $k$-ième dépend de la position et des dérivées précédentes (« l'accélération dépend de la position et de la vitesse »). Elle devient une équation d'ordre $1$ dès que l'on accepte de suivre non plus la seule position $\alpha(t)$, mais le **paquet** $\big(\alpha(t),\alpha'(t),\dots,\alpha^{(k-1)}(t)\big)$ : la dérivée de ce paquet s'exprime en fonction du paquet lui-même. On perd en lisibilité (la dimension est multipliée par $k$), on gagne un cadre unique : **tout** le chapitre ne traite que d'équations $\alpha'(t)=X(t,\alpha(t))$.

Image mentale : l'oscillateur $q''=-\omega^2 q$. Dans le plan $(q,q')$ (l'**espace des phases**), la courbe $t\mapsto(q(t),q'(t))$ est, en chaque point, tangente au vecteur $(q',-\omega^2q)$ : l'équation d'ordre $2$ sur la droite est devenue un champ de flèches dans le plan, et la solution une courbe qui suit les flèches.

Vocabulaire. Pour une fonction $\alpha$ d'une variable réelle à valeurs dans $\R^N$, $\alpha^{(j)}$ désigne sa dérivée $j$-ième ($\alpha^{(0)}=\alpha$, $\alpha^{(1)}=\alpha'$) ; $\alpha$ est de **classe $C^k$** si elle est $k$ fois dérivable et si $\alpha^{(k)}$ est continue ([[ch05-classe-ck-def]]). Le vocabulaire géométrique (champ de vecteurs, courbe intégrale) qui va servir à parler de $\alpha'(t)=X(t,\alpha(t))$ est introduit dans [[ch07-champ-vecteurs-courbe-integrale-def]].

## Énoncé

**Proposition (poly, Formule (VII.1.2), p. 127).** Soient $N\ge1$ et $k\ge1$ des entiers, $I$ un intervalle ouvert de $\R$, $U$ un ouvert de $(\R^N)^k$ et $X : I\times U\to\R^N$ une fonction continue. On s'intéresse aux équations différentielles de la forme
$$
\text{(VII.1.1)}\qquad \alpha^{(k)}(t)=X\big(t,\alpha(t),\alpha'(t),\dots,\alpha^{(k-1)}(t)\big),
$$
dont on cherche les solutions $\alpha$ de classe $C^k$ définies sur un intervalle ouvert $J\subset I$, à valeurs dans $\R^N$ et telles que $\big(\alpha(t),\dots,\alpha^{(k-1)}(t)\big)\in U$ pour tout $t\in J$.

Posons $\alpha_0=\alpha$ et $\alpha_j=\alpha^{(j)}$ pour $0\le j\le k-1$. Alors $\alpha$ est solution de (VII.1.1) si et seulement si $\beta=(\alpha_0,\dots,\alpha_{k-1}) : J\to U$ est de classe $C^1$ et vérifie le système d'ordre $1$
$$
\begin{cases}
\alpha_0'(t)=\alpha_1(t)\\
\alpha_1'(t)=\alpha_2(t)\\
\qquad\vdots\\
\alpha_{k-2}'(t)=\alpha_{k-1}(t)\\
\alpha_{k-1}'(t)=X\big(t,\alpha_0(t),\alpha_1(t),\dots,\alpha_{k-1}(t)\big).
\end{cases}
$$
Réciproquement, si $\beta=(\beta_0,\dots,\beta_{k-1}) : J\to U$ est une solution de classe $C^1$ de ce système, alors $\beta_0$ est de classe $C^k$, $\beta_j=\beta_0^{(j)}$ pour $0\le j\le k-1$, et $\beta_0$ est solution de (VII.1.1).

Ce procédé permet de ne considérer que des systèmes d'ordre $1$. Plus généralement, un système d'équations différentielles d'ordre quelconque se ramène toujours de cette manière à un système d'ordre un en dimension plus grande, dont la forme générale est
$$
\alpha_i'(t)=X_i\big(t,\alpha_1(t),\dots,\alpha_r(t)\big),\qquad 1\le i\le r,
$$
et, de manière abrégée,
$$
\text{(VII.1.2)}\qquad \alpha'(t)=X(t,\alpha(t)),
$$
où $t\mapsto\alpha(t)=(\alpha_1(t),\dots,\alpha_r(t))$ est une fonction de classe $C^1$ d'un intervalle ouvert $J\subset I$ à valeurs dans $\R^r$, et $X=(X_1,\dots,X_r) : I\times U\to\R^r$, $U$ ouvert de $\R^r$, est au moins continue. Sous cette forme, on peut remplacer $\R^r$ par un espace de Banach quelconque $E$ (espace vectoriel normé complet).

*Complément (régularité du champ réduit).* Le système ci-dessus s'écrit $\beta'(t)=\tilde X(t,\beta(t))$ avec
$$
\tilde X : I\times U\to(\R^N)^k,\qquad \tilde X(t,y_0,\dots,y_{k-1})=\big(y_1,\dots,y_{k-1},X(t,y_0,\dots,y_{k-1})\big).
$$
Le champ $\tilde X$ est continu ; il est de classe $C^p$ si $X$ l'est ; et si, sur une partie $A\subset I\times U$, $X$ est $\kappa$-lipschitzienne en la seconde variable ($\|X(t,y)-X(t,z)\|\le\kappa\|y-z\|$), alors $\tilde X$ y est $\max(1,\kappa)$-lipschitzienne en la seconde variable pour la norme $\|y\|=\max_j\|y_j\|$ sur $(\R^N)^k$. Les hypothèses du théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) passent donc de $X$ à $\tilde X$.

## Hypothèses

### H1 — $X$ est continue sur $I\times U$

**Rôle.** La continuité ne sert pas dans le calcul d'équivalence lui-même (qui est un calcul de dérivées) ; elle sert à ce que le champ réduit $\tilde X$ soit un champ de vecteurs au sens de [[ch07-champ-vecteurs-courbe-integrale-def]], c'est-à-dire que les théorèmes du chapitre s'appliquent au système d'ordre $1$. Elle assure aussi qu'une solution $k$ fois dérivable est automatiquement $C^k$ (voir H2).

**Si on la retire.** L'équivalence reste vraie mot pour mot, mais le système réduit n'a plus de raison d'avoir des solutions. Exemple ($k=1$, $N=1$) : $X(x)=1$ si $x\le0$ et $X(x)=-1$ si $x>0$. Si $\alpha$ était une solution $C^1$ de $\alpha'=X(\alpha)$ avec $\alpha(0)=0$ sur un intervalle ouvert contenant $0$, on aurait $\alpha'(0)=X(0)=1>0$, donc, $\alpha'$ étant continue, $\alpha'>0$ près de $0$ et $\alpha(t)>0$ pour $t>0$ petit ; mais alors $\alpha'(t)=X(\alpha(t))=-1<0$ pour ces $t$ : contradiction. Aucune solution.

### H2 — Les solutions cherchées sont de classe $C^k$ (resp. $\beta$ de classe $C^1$)

**Rôle.** On dérive $\alpha$ exactement $k$ fois : la classe $C^k$ garantit que chaque $\alpha_j=\alpha^{(j)}$ ($j\le k-1$) est de classe $C^1$, donc que $\beta$ est $C^1$ ; dans l'autre sens, elle est ce que l'on reconstruit par récurrence.

**Si on la retire.** Hypothèse de confort : si $\alpha$ est seulement $k$ fois dérivable et vérifie (VII.1.1), alors $\alpha^{(k)}=X(t,\alpha,\dots,\alpha^{(k-1)})$ est continue comme composée de fonctions continues, donc $\alpha$ est automatiquement de classe $C^k$. De même, une solution seulement dérivable du système réduit est automatiquement $C^1$ (sa dérivée $\tilde X(t,\beta(t))$ est continue). Rien ne change.

### H3 — $U$ est un ouvert de $(\R^N)^k$ (la contrainte porte sur tout le paquet)

**Rôle.** Le domaine naturel d'une équation d'ordre $k$ est l'espace des phases $(\R^N)^k$ des $k$-uplets (position, vitesse, ..., dérivée $(k-1)$-ième) : c'est sur un ouvert de cet espace que vit le champ réduit $\tilde X$, et c'est lui qui jouera le rôle de l'ouvert $U$ dans la Définition VII.1.1 et dans Cauchy-Lipschitz (où l'on a besoin de boules fermées $\bar B(x_0,2a)\subset U$).

**Si on la retire.** Si l'on ne contraint que la position, $\alpha(t)\in V$ avec $V$ ouvert de $\R^N$, on est dans le cas particulier $U=V\times(\R^N)^{k-1}$, qui est bien un ouvert de $(\R^N)^k$ : rien ne change. Si $U$ n'est pas ouvert, la réduction reste valable (c'est une identité), mais les théorèmes d'existence ne s'appliquent plus (voir les hypothèses de [[ch07-cauchy-lipschitz]]).

## Idée de la preuve

Dériver $\alpha_j=\alpha^{(j)}$ donne $\alpha_j'=\alpha_{j+1}$, et la dernière ligne du système n'est autre que (VII.1.1). Réciproquement on « remonte » : $\beta_0'=\beta_1$ est $C^1$, donc $\beta_0$ est $C^2$ avec $\beta_0''=\beta_2$, etc.

## Preuve

*Sens direct.* Soit $\alpha : J\to\R^N$ de classe $C^k$, solution de (VII.1.1). Pour $0\le j\le k-1$, $\alpha_j=\alpha^{(j)}$ est de classe $C^{k-j}$, donc au moins $C^1$, et $\alpha_j'=\alpha^{(j+1)}$. Pour $j\le k-2$ cela s'écrit $\alpha_j'=\alpha_{j+1}$, et pour $j=k-1$, $\alpha_{k-1}'=\alpha^{(k)}=X\big(t,\alpha_0(t),\dots,\alpha_{k-1}(t)\big)$ d'après (VII.1.1). Ainsi $\beta=(\alpha_0,\dots,\alpha_{k-1})$ est de classe $C^1$ (ses composantes le sont, [[ch05-differentiabilite-composantes]]), à valeurs dans $U$ par hypothèse, et vérifie le système.

*Sens réciproque.* Soit $\beta=(\beta_0,\dots,\beta_{k-1}) : J\to U$ de classe $C^1$ solution du système. Montrons par récurrence sur $j\in\{0,\dots,k-1\}$ que $\beta_0$ est de classe $C^{j+1}$ et $\beta_0^{(j)}=\beta_j$. Pour $j=0$ c'est l'hypothèse. Si c'est vrai pour un $j\le k-2$, alors $\beta_0^{(j)}=\beta_j$ est de classe $C^1$ de dérivée $\beta_j'=\beta_{j+1}$ ; donc $\beta_0$ est $C^{j+1}$ avec $\beta_0^{(j+1)}=\beta_{j+1}$, et comme $\beta_{j+1}$ est $C^1$, $\beta_0$ est même $C^{j+2}$. Au rang $j=k-1$ : $\beta_0$ est $C^k$, $\beta_0^{(k-1)}=\beta_{k-1}$, et
$$
\beta_0^{(k)}=\beta_{k-1}'=X\big(t,\beta_0(t),\dots,\beta_{k-1}(t)\big)=X\big(t,\beta_0(t),\beta_0'(t),\dots,\beta_0^{(k-1)}(t)\big),
$$
c'est-à-dire que $\beta_0$ est solution de (VII.1.1), avec $(\beta_0,\dots,\beta_0^{(k-1)})=\beta\in U$.

*Régularité du champ réduit.* Les $k-1$ premières composantes de $\tilde X$ sont des projections $(t,y)\mapsto y_{j}$, linéaires continues donc $C^\infty$, et la dernière est $X$ : $\tilde X$ est continue, et de classe $C^p$ si $X$ l'est ([[ch05-differentiabilite-composantes]]). Pour la norme $\|y\|=\max_{0\le j\le k-1}\|y_j\|$ sur $(\R^N)^k$ (toutes les normes y sont équivalentes), si $X$ est $\kappa$-lipschitzienne en la seconde variable sur $A$, alors pour $(t,y),(t,z)\in A$,
$$
\|\tilde X(t,y)-\tilde X(t,z)\|=\max\big(\|y_1-z_1\|,\dots,\|y_{k-1}-z_{k-1}\|,\|X(t,y)-X(t,z)\|\big)\le\max(1,\kappa)\,\|y-z\|.
$$

*Systèmes d'ordre quelconque et espaces de Banach.* Pour un système de $m$ équations d'ordres $k_1,\dots,k_m$ portant sur des inconnues $\alpha^1,\dots,\alpha^m$, on introduit pour chaque inconnue ses dérivées jusqu'à l'ordre $k_i-1$ : on obtient un système d'ordre $1$ à $r=\sum_i k_i$ inconnues (à valeurs dans $\R^N$ chacune), de la forme (VII.1.2). Enfin, tout ce qui précède n'utilise que la dérivation des fonctions d'une variable réelle à valeurs vectorielles et la régularité composante par composante : cela reste valable si $\R^N$ est remplacé par un espace de Banach $E$ (on dérive dans $E$ : $\alpha'(t)=d\alpha_t(1)$, [[ch05-derivee-variable-reelle]]). $\square$

## Preuve à trous

*Sens direct.* Si $\alpha$ est $C^k$ et vérifie (VII.1.1), on pose <trou indice="quel paquet de fonctions forme la nouvelle inconnue ?">$\alpha_j=\alpha^{(j)}$ pour $0\le j\le k-1$ et $\beta=(\alpha_0,\dots,\alpha_{k-1})$</trou>. Chaque $\alpha_j$ est $C^{k-j}$, donc $C^1$, avec $\alpha_j'=\alpha_{j+1}$ pour $j\le k-2$ et <trou indice="c'est l'équation (VII.1.1) elle-même">$\alpha_{k-1}'=\alpha^{(k)}=X(t,\alpha_0,\dots,\alpha_{k-1})$</trou>.

*Sens réciproque.* Si $\beta=(\beta_0,\dots,\beta_{k-1})$ est une solution $C^1$ du système, on montre par récurrence que <trou indice="on remonte la régularité d'un cran à chaque ligne du système">$\beta_0$ est $C^{j+1}$ et $\beta_0^{(j)}=\beta_j$, car $\beta_0^{(j)}=\beta_j$ est $C^1$ de dérivée $\beta_{j+1}$</trou> ; au rang $k-1$, $\beta_0^{(k)}=\beta_{k-1}'=X(t,\beta_0,\dots,\beta_0^{(k-1)})$.

*Transfert des hypothèses.* Pour la norme $\max$ sur $(\R^N)^k$, si $X$ est $\kappa$-lipschitzienne en $y$, alors $\tilde X$ est <trou indice="les premières composantes de la différence sont des $y_j-z_j$">$\max(1,\kappa)$-lipschitzienne en $y$</trou>. $\square$

## Exemples

* **Oscillateur harmonique.** $\alpha''=-\omega^2\alpha$ ($\omega>0$, $N=1$, $k=2$, $X(t,y_0,y_1)=-\omega^2y_0$, $U=\R^2$). Avec $(q,p)=(\alpha,\alpha')$, le système réduit est $q'=p$, $p'=-\omega^2q$, soit $\tilde X(q,p)=(p,-\omega^2q)$ : un champ **linéaire** du plan. La solution de condition initiale $(q(0),p(0))=(q_0,p_0)$ est
$$
q(t)=q_0\cos\omega t+\frac{p_0}{\omega}\sin\omega t,\qquad p(t)=q'(t)=-\omega q_0\sin\omega t+p_0\cos\omega t,
$$
et l'on vérifie $p'(t)=-\omega^2q_0\cos\omega t-\omega p_0\sin\omega t=-\omega^2q(t)$. Les trajectoires dans le plan des phases sont les ellipses $\omega^2q^2+p^2=\omega^2q_0^2+p_0^2$, car $\frac{d}{dt}(\omega^2q^2+p^2)=2\omega^2qp+2p(-\omega^2q)=0$.

* **Profil d'onde de Korteweg-de Vries** (poly, Exercice VII.4.13, p. 141). L'équation $Q''-Q+Q^p=0$ ($p\in\{2,3\}$) devient, avec $(x,y)=(Q,Q')$, le système $x'=y$, $y'=x-x^p$, de champ $\tilde X(x,y)=(y,x-x^p)$, polynomial donc $C^\infty$ sur $\R^2$ : le théorème de Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]], via [[ch07-restriction-domaine-c1-lipschitz]]) donne, pour chaque donnée $(Q(0),Q'(0))=(a,b)$, une unique solution locale. L'énergie $E(x,y)=\frac12y^2-\frac12x^2+\frac1{p+1}x^{p+1}$ est constante le long des solutions : $\frac{d}{dt}E(Q,Q')=Q'Q''-QQ'+Q^pQ'=Q'(Q''-Q+Q^p)=0$.

* **Équation linéaire scalaire d'ordre $k$.** $\alpha^{(k)}+a_{k-1}(t)\alpha^{(k-1)}+\dots+a_0(t)\alpha=f(t)$ avec $a_0,\dots,a_{k-1},f$ continues sur $I$. Ici $X(t,y_0,\dots,y_{k-1})=f(t)-\sum_{j=0}^{k-1}a_j(t)y_j$, $U=\R^k$, et le système réduit s'écrit $\beta'=A(t)\beta+f(t)e_k$ avec $A(t)$ la matrice « compagnon » (des $1$ sur la sur-diagonale, dernière ligne $(-a_0(t),\dots,-a_{k-1}(t))$). On a $\|\tilde X(t,y)-\tilde X(t,z)\|\le\|A(t)\|\,\|y-z\|$ avec $\|A(t)\|$ borné sur tout segment de $I$ : $\tilde X$ est localement lipschitzien en la seconde variable ([[ch07-localement-lipschitzien-def]]). Cauchy-Lipschitz exige alors de prescrire les $k$ nombres $\alpha(t_0),\alpha'(t_0),\dots,\alpha^{(k-1)}(t_0)$ : c'est pour cela que la solution générale dépend de $k$ constantes.

## Pièges

* > ⚠️ La **condition initiale** d'une équation d'ordre $k$ comporte $k$ données $\alpha(t_0),\alpha'(t_0),\dots,\alpha^{(k-1)}(t_0)$ (un point de l'espace des phases), pas seulement $\alpha(t_0)$ : $\alpha''=-\alpha$ avec la seule donnée $\alpha(0)=0$ a l'infinité de solutions $c\sin t$, $c\in\R$.
* Coquille du poly, p. 127 : la dernière ligne du système est écrite $X(t,\alpha_1(t),\dots,\alpha_{k-1}(t))$ ; il faut lire $X\big(t,\alpha_0(t),\alpha_1(t),\dots,\alpha_{k-1}(t)\big)$ ($k$ arguments après $t$, en commençant par $\alpha_0=\alpha$).
* La dimension change : $\alpha$ est à valeurs dans $\R^N$, mais le système réduit vit dans $(\R^N)^k$ ; le poly réutilise ensuite la lettre $\alpha$ pour l'inconnue du système (VII.1.2), à valeurs dans $\R^r$ ou dans $E$. Ne pas confondre les deux « $\alpha$ ».
* La réduction ne rend pas l'équation plus simple ni linéaire : c'est un changement de point de vue, qui permet d'appliquer un seul théorème (Cauchy-Lipschitz) à toutes les équations.
* La norme choisie sur $(\R^N)^k$ ne joue aucun rôle (normes équivalentes en dimension finie), mais la constante de Lipschitz de $\tilde X$ dépend de ce choix.
* Les équations **implicites** $f(t,\alpha,\alpha')=0$ ne sont pas de la forme (VII.1.2) : voir [[ch07-equations-implicites-remarque]] et le contre-exemple $\alpha'^2=4\alpha$ dans [[ch07-peano-non-unicite]].
