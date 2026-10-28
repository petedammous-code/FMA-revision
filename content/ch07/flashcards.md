## CARD id=fc-ch07-001 ref=ch07-champ-vecteurs-courbe-integrale-def tags=definition,enonce
### Q
Définir : champ de vecteurs dépendant du temps sur un ouvert $U$ d'un espace de Banach $E$ ; courbe intégrale de classe $C^p$ ; condition initiale.
### R
* **Champ de vecteurs dépendant du temps** : une application **continue** $X : I\times U\to E$, où $I$ est un intervalle ouvert non vide de $\R$.
* **Courbe intégrale de classe $C^p$** de $X$ : une courbe $\alpha : J\to U$ de classe $C^p$, définie sur un intervalle **ouvert** $J\subset I$, telle que $\alpha'(t)=X(t,\alpha(t))$ pour tout $t\in J$.
* Elle est **de condition initiale** $(t_0,x)\in J\times U$ si $\alpha(t_0)=x$.

(poly, Définition VII.1.1, p. 128)

## CARD id=fc-ch07-002 ref=ch07-champ-vecteurs-courbe-integrale-def tags=hypothese
### Q
Dans la définition d'une courbe intégrale $\alpha : J\to U$ de $X : I\times U\to E$, quelles contraintes porte-t-on sur $J$ et sur les valeurs de $\alpha$ ? Pourquoi est-ce important ?
### R
$J$ est un intervalle **ouvert** contenu dans $I$ (pour que $X(t,\alpha(t))$ ait un sens et que l'on puisse dériver partout, sans « bord »), et $\alpha$ est à valeurs dans l'**ouvert** $U$. Conséquence clé : l'intervalle maximal $J_{\tau_0}(x_0)$ est ouvert, une solution maximale n'est jamais définie en une borne finie de son intervalle (mécanisme du [[ch07-lemme-des-bouts]]). (poly, Définition VII.1.1, p. 128)

## CARD id=fc-ch07-003 ref=ch07-reduction-ordre-un tags=enonce,methode
### Q
Comment ramène-t-on l'équation d'ordre $k$ $\alpha^{(k)}(t)=X(t,\alpha(t),\dots,\alpha^{(k-1)}(t))$ (VII.1.1) à un système d'ordre 1 ? Quelle condition initiale faut-il alors donner ?
### R
On pose $\alpha_0=\alpha,\ \alpha_1=\alpha',\dots,\alpha_{k-1}=\alpha^{(k-1)}$ ; l'équation devient
$$\alpha_0'=\alpha_1,\quad \alpha_1'=\alpha_2,\quad\dots,\quad \alpha_{k-1}'=X(t,\alpha_0,\dots,\alpha_{k-1}),$$
soit $\alpha'(t)=X(t,\alpha(t))$ (VII.1.2) pour l'inconnue vectorielle $(\alpha_0,\dots,\alpha_{k-1})$ (dimension $k$ fois plus grande). La condition initiale porte sur **tout le vecteur** : $\alpha(t_0),\alpha'(t_0),\dots,\alpha^{(k-1)}(t_0)$. (poly, Formules (VII.1.1)-(VII.1.2), p. 127)

## CARD id=fc-ch07-004 ref=ch07-localement-lipschitzien-def tags=definition,enonce
### Q
Que signifie « $X : I\times U\to E$ est localement lipschitzien en la seconde variable » ?
### R
Pour tout $t_0\in I$ et tout $x_0\in U$, il existe un voisinage $J_0$ de $t_0$ dans $I$, un voisinage $U_0$ de $x_0$ dans $U$ et une constante $k\ge 0$ tels que
$$\forall t\in J_0,\ \forall x_1,x_2\in U_0,\qquad \norm{X(t,x_1)-X(t,x_2)}_E\le k\norm{x_1-x_2}_E .$$
La constante $k$ est **uniforme en $t\in J_0$**. (poly, section VII.2, p. 128)

## CARD id=fc-ch07-005 ref=ch07-cauchy-lipschitz tags=enonce
### Q
Énoncer le théorème de Cauchy-Lipschitz (version locale du poly).
### R
Soit $X : I\times U\to E$ un champ de vecteurs ($X$ continu) sur un ouvert $U$ d'un espace de **Banach** $E$, **localement lipschitzien en la seconde variable**. Alors pour tout $\tau_0\in I$ et tout $x_0\in U$, il existe $\eta>0$, $\delta>0$ et $\epsilon>0$ tels que si $x\in B(x_0,\eta)$ et $t_0\in\,]\tau_0-\delta\,;\tau_0+\delta[$, le problème
$$\begin{cases}\alpha'(t)=X(t,\alpha(t))\\ \alpha(t_0)=x\end{cases}$$
possède une **unique** solution définie sur $]t_0-\epsilon\,;t_0+\epsilon[$, notée $\alpha_{t_0,x}$. (poly, Théorème VII.2.1, p. 128)

## CARD id=fc-ch07-006 ref=ch07-cauchy-lipschitz tags=hypothese
### Q
Cauchy-Lipschitz : à quoi sert chaque hypothèse ($E$ Banach, $X$ continu, localement lipschitzien) ? Qu'a de particulier le $\epsilon$ obtenu ?
### R
* $E$ **Banach** : rend complet l'espace $\mathcal X=C^0([t_0-b\,;t_0+b],\bar B(x_0,2a))$ où l'on applique le point fixe de Banach.
* $X$ **continu** : l'équation équivaut à l'équation intégrale (VII.2.2) et $X$ est borné (par $\ell$) près de $(\tau_0,x_0)$.
* **Localement lipschitzien en $x$** : donne la contraction ($bk\le\frac12$) donc l'**unicité** ; sans elle, seule l'existence subsiste (Peano) et l'unicité tombe.
* Le $\epsilon$ est **uniforme** en $x\in B(x_0,\eta)$ et $t_0\in\,]\tau_0-\delta;\tau_0+\delta[$ : c'est ce qui permet de définir un flot local (poly, Remarque VII.2.3, p. 129).

## CARD id=fc-ch07-007 ref=ch07-peano-non-unicite tags=contre-exemple,enonce
### Q
Donner le contre-exemple du poly montrant que la continuité de $X$ ne suffit pas pour l'unicité.
### R
$\alpha'(t)=2\abs{\alpha(t)}^{1/2}$, $\alpha(0)=0$ : deux solutions $\alpha_1(t)=0$ et $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ (en fait une infinité : $0$ pour $t\le c$, $(t-c)^2$ pour $t\ge c$, $c\ge0$). Le champ $x\mapsto 2\abs{x}^{1/2}$ est continu mais pas lipschitzien près de $0$. Un théorème de Peano affirme que la continuité suffit pour l'**existence** (le poly ne le démontre pas ; c'est un résultat de dimension finie). Le même exemple montre que le théorème tombe pour les équations implicites : $\alpha'(t)^2-4\alpha(t)=0$ a deux solutions avec $\alpha(0)=0$. (poly, Remarque VII.2.5, p. 129)

## CARD id=fc-ch07-008 ref=ch07-cauchy-lipschitz tags=contre-exemple
### Q
Cauchy-Lipschitz donne-t-il une solution définie sur tout $I$ quand $X$ est $C^\infty$ ? Contre-exemple.
### R
Non, le résultat est **local**. $\alpha'=\alpha^2$, $\alpha(0)=1$ ($X(x)=x^2$ est $C^\infty$ sur $U=\R$, $I=\R$) : $\alpha(t)=\dfrac1{1-t}$, qui explose en $t=1$ ; l'intervalle maximal est $J_0(1)=\,]-\infty,1[\ne\R$.

## CARD id=fc-ch07-009 ref=ch07-restriction-domaine-c1-lipschitz tags=enonce
### Q
Pourquoi Cauchy-Lipschitz s'applique-t-il à tout champ $X$ de classe $C^1$ ? La réciproque est-elle vraie ?
### R
Soit $(t_1,x_1)\in I\times U$. Par continuité de $(t,x)\mapsto dX_{(t,x)}$, il existe un voisinage $]t_1-a\,;t_1+a[\times B(x_1,b)\subset I\times U$ et $k\ge0$ avec $\norm{dX_{(t,x)}}\le k$ dessus ; par les **accroissements finis** (sur ce convexe) $X$ y est $k$-lipschitzien, en particulier en la seconde variable. De plus on peut restreindre $U$ et $I$ sans changer la conclusion. (poly, Remarque VII.2.2, p. 128-129)
Réciproque fausse : $x\mapsto\abs{x}$ est lipschitzienne sans être $C^1$.

## CARD id=fc-ch07-010 ref=ch07-equation-autonome-def tags=definition,enonce
### Q
Qu'est-ce qu'une équation autonome ? Quelles conventions le poly adopte-t-il dans ce cas ?
### R
C'est le cas où le champ ne dépend pas du temps : $X : U\to E$ continu (et localement lipschitzien pour Cauchy-Lipschitz), équation $\alpha'(t)=X(\alpha(t))$ (poly, Remarque VII.2.6, p. 129). On prend alors $I=\R$ (Remarque VII.3.2, p. 134), on fixe $\tau_0=0$ et on note $J(x_0)=J_0(x_0)$, $F(t,x_0)=F(0,t,x_0)$ (poly, p. 134).

## CARD id=fc-ch07-011 ref=ch07-equation-integrale tags=formule,enonce
### Q
Écrire l'équation intégrale équivalente au problème de Cauchy $\alpha'=X(t,\alpha)$, $\alpha(t_0)=x$, et dire sous quelle hypothèse l'équivalence vaut.
### R
Pour $X$ **continu**, une fonction continue $\alpha$ (sur un intervalle contenant $t_0$) est solution ($C^1$) du problème de Cauchy si et seulement si
$$\alpha(t)=x+\int_{t_0}^t X(s,\alpha(s))\,ds\qquad\text{(VII.2.2)}.$$
Les solutions sont donc les **points fixes** de l'opérateur de Picard $S_{t_0,x}:\varphi\mapsto\big(t\mapsto x+\int_{t_0}^t X(s,\varphi(s))\,ds\big)$. (poly, Formule (VII.2.2), p. 130)

## CARD id=fc-ch07-012 ref=ch07-lemme-operateur-integral tags=enonce
### Q
Énoncer le lemme d'estimations pour l'opérateur intégral (Lemme VII.2.7).
### R
Soient $E$ Banach, $x_0\in E$, $\rho>0$, $c\in\R$, $\epsilon>0$ et $Y : [c-\epsilon\,;c+\epsilon]\times\bar B(x_0,2\rho)\to E$ continue, **majorée en norme par $\ell>0$** et **$k$-lipschitzienne en la seconde variable** ($k>0$). Soit $\mathcal X=C^0([c-\epsilon\,;c+\epsilon],\bar B(x_0,2\rho))$ muni de $\norm{\cdot}_\infty$ : c'est un fermé convexe de $C^0([c-\epsilon;c+\epsilon],E)$, donc complet. Si
$$\epsilon\ell\le\rho\qquad\text{et}\qquad \epsilon k\le\tfrac12,$$
alors pour tout $x\in\bar B(x_0,\rho)$, $T_x:\varphi\mapsto\big(t\mapsto x+\int_c^tY(s,\varphi(s))\,ds\big)$ envoie $\mathcal X$ dans $\mathcal X$ et est $\frac12$-lipschitzien. (poly, Lemme VII.2.7, p. 130)

## CARD id=fc-ch07-013 ref=ch07-lemme-operateur-integral tags=hypothese
### Q
Dans le Lemme VII.2.7, quel rôle jouent respectivement $\epsilon\ell\le\rho$, $\epsilon k\le\frac12$ et la marge entre $\bar B(x_0,\rho)$ (conditions initiales) et $\bar B(x_0,2\rho)$ (valeurs) ?
### R
* $\epsilon\ell\le\rho$ et $x\in\bar B(x_0,\rho)$ : **stabilité**, $\norm{T_x\varphi(t)-x_0}\le\norm{x-x_0}+\epsilon\ell\le\rho+\rho=2\rho$, donc $T_x(\mathcal X)\subset\mathcal X$.
* $\epsilon k\le\frac12$ : **contraction**, $\norm{T_x\varphi_1(t)-T_x\varphi_2(t)}\le k\epsilon\norm{\varphi_1-\varphi_2}_\infty\le\frac12\norm{\varphi_1-\varphi_2}_\infty$.
Sans la marge de rayon $\rho$, $T_x\varphi$ pourrait sortir de la boule. (poly, Lemme VII.2.7, p. 130)

## CARD id=fc-ch07-014 ref=ch07-cauchy-lipschitz tags=methode
### Q
Décrire en 4 étapes la preuve de Cauchy-Lipschitz (choix des constantes compris).
### R
1. Réécrire le problème en équation intégrale (VII.2.2).
2. Choisir $k$ (Lipschitz), $a,a'$ avec $\bar B(x_0,2a)\subset U$, $[\tau_0-2a';\tau_0+2a']\subset I$, $X$ $k$-lipschitzien en $x$ et borné sur la boîte ; $\ell=1+\sup\norm X$ ; puis $b$ avec $b\ell<a$, $bk\le\frac12$, $b<a'$.
3. Pour $x\in B(x_0,a)$, $t_0\in\,]\tau_0-a';\tau_0+a'[$, le Lemme VII.2.7 ($c=t_0,\rho=a,\epsilon=b$) rend $S_{t_0,x}$ $\frac12$-contractant sur $\mathcal X=C^0([t_0-b;t_0+b],\bar B(x_0,2a))$ complet : **point fixe de Banach** (Théorème VI.1.1).
4. Unicité renforcée par **connexité** : toute solution reste dans $\bar B(x_0,2a)$ car $\norm{\alpha(t)-x_0}\le\norm{x-x_0}+\ell\abs{t-t_0}<a+\ell b<2a$. On prend $\epsilon=b$, $\delta=a'$, $\eta=a$. (poly, p. 130-131)

## CARD id=fc-ch07-015 ref=ch07-cauchy-lipschitz-parametres tags=enonce
### Q
Énoncer le théorème de Cauchy-Lipschitz à paramètres.
### R
Soit $X : \Lambda\times I\times U\to E$ de classe $C^p$, $p\ge0$, où $\Lambda$ est un ouvert d'un espace **métrique** si $p=0$ et d'un espace de **Banach** si $p\ge1$, $I$ intervalle ouvert, $U$ ouvert d'un Banach $E$ ; on note $X_\lambda(t,x)=X(\lambda,t,x)$. Supposons $X$ localement lipschitzien en $x\in U$. Alors pour tous $\lambda_0\in\Lambda$, $\tau_0\in I$, $x_0\in U$, il existe $\sigma,\eta,\delta,\epsilon>0$ tels que si $\lambda\in B(\lambda_0,\sigma)$, $x\in B(x_0,\eta)$, $t_0\in\,]\tau_0-\delta;\tau_0+\delta[$, le problème $\alpha'=X_\lambda(t,\alpha)$, $\alpha(t_0)=x$ a une unique solution $\alpha_{\lambda,t_0,x}$ sur $]t_0-\epsilon;t_0+\epsilon[$. Avec $\mathcal E=\{(t_0,t)\in\,]\tau_0-\delta,\tau_0+\delta[\times\R\mid t\in\,]t_0-\epsilon,t_0+\epsilon[\}$ (ouvert connexe de $\R^2$), l'application $F:(\lambda,t_0,t,x)\mapsto\alpha_{\lambda,t_0,x}(t)$ sur $B(\lambda_0,\sigma)\times\mathcal E\times B(x_0,\eta)$ est de classe $C^p$, et de classe $C^{p+1}$ en $t$. (poly, Théorème VII.2.8, p. 131)

## CARD id=fc-ch07-016 ref=ch07-cauchy-lipschitz-parametres tags=hypothese
### Q
Cauchy-Lipschitz à paramètres : pourquoi $\Lambda$ peut-il être seulement métrique pour $p=0$ mais doit être un Banach pour $p\ge1$ ? Quels théorèmes de point fixe sont utilisés ?
### R
Pour $p=0$, on ne demande que la **continuité** en $\lambda$ : la version I du point fixe à paramètre (Théorème VI.1.2) suffit, un espace métrique suffit. Pour $p\ge1$, il faut **différentier** par rapport à $\lambda$, donc un espace vectoriel normé complet : version II (Théorème VI.1.4), avec $\norm{\partial T/\partial\varphi}\le k\epsilon\le\frac12$. La constante de Lipschitz $k$ et la borne $\ell$ doivent être choisies **uniformes** en $\lambda$ près de $\lambda_0$. (poly, preuve du Théorème VII.2.8, p. 132)

## CARD id=fc-ch07-017 ref=ch07-cauchy-lipschitz-parametres tags=contre-exemple
### Q
Dans Cauchy-Lipschitz à paramètres, peut-on espérer $F$ de classe $C^{p+1}$ en $(\lambda,x)$ ? Contre-exemple pour $p=0$.
### R
Non : on a seulement $C^p$ en $(\lambda,t_0,t,x)$ et $C^{p+1}$ **en $t$** (par récurrence à partir de $\partial_tF=X_\lambda(t,F)$). Exemple : $\Lambda=\R$, $X_\lambda(x)=\abs{\lambda}$ ($C^0$, lipschitzien en $x$) ; $F(\lambda,0,t,x)=x+\abs{\lambda}t$ est continue, $C^\infty$ en $t$, mais pas $C^1$ en $\lambda$.

## CARD id=fc-ch07-018 ref=ch07-cauchy-lipschitz-parametres tags=methode
### Q
Comment, dans la preuve de Cauchy-Lipschitz à paramètres, se débarrasse-t-on de la dépendance de l'espace fonctionnel en l'instant initial $t_0$ ?
### R
On **transforme $t_0$ en paramètre** par translation en temps : $\tilde X_{\lambda,t_0}(t,y)=X_\lambda\big(t-(\tau_0-t_0),y\big)$ et $\beta(t)=\alpha_{\lambda,t_0,x}(t-(\tau_0-t_0))$ vérifie $\beta'=\tilde X_{\lambda,t_0}(t,\beta)$, $\beta(\tau_0)=x$. On résout donc toujours en $\tau_0$, sur $\mathcal X=C^0([\tau_0-\epsilon;\tau_0+\epsilon],\bar B(x_0,2\eta))$ **indépendant** de $\theta=(\lambda,t_0,x)$, puis on applique le point fixe à paramètre. (poly, p. 132)

## CARD id=fc-ch07-019 ref=ch07-flot-local-def tags=definition,enonce
### Q
Définir un flot local en $(\lambda_0,\tau_0,x_0)$ de $X:\Lambda\times I\times U\to E$.
### R
C'est la donnée d'un voisinage ouvert $W$ de $\lambda_0$ dans $\Lambda$, d'un voisinage ouvert $U'$ de $x_0$ dans $U$, d'un intervalle ouvert $J$ avec $\tau_0\in J\subset I$, d'une constante $\epsilon>0$ et d'une application $F : W\times\mathcal E\times U'\to U$, où
$$\mathcal E=\mathcal E(J,\epsilon)=\{(t_0,t)\in J\times\R\mid t\in\,]t_0-\epsilon,t_0+\epsilon[\},$$
telles que pour tous $\lambda\in W$, $t_0\in J$, $x\in U'$, $t\mapsto\alpha_{\lambda,t_0,x}(t)=F(\lambda,t_0,t,x)$ soit l'**unique** courbe intégrale de $X_\lambda$ définie sur $]t_0-\epsilon,t_0+\epsilon[$ de condition initiale $(t_0,x)$. La longueur $2\epsilon$ ne dépend pas de $(\lambda,t_0,x)$ ; $\mathcal E$ est un ouvert connexe de $\R^2$. (poly, Définition VII.2.9 et Remarque VII.2.10, p. 133)

## CARD id=fc-ch07-020 ref=ch07-flot-local-equation tags=formule,enonce
### Q
Quelles équations un flot local $F(\lambda,t_0,t,x)$ vérifie-t-il ?
### R
Pour tout $(\lambda,t_0,t,x)$ du domaine de $F$ :
$$\frac{\partial F}{\partial t}(\lambda,t_0,t,x)=X_\lambda\big(t,F(\lambda,t_0,t,x)\big),\qquad F(\lambda,t_0,t_0,x)=x.$$
(poly, Proposition VII.2.11, p. 133)

## CARD id=fc-ch07-021 ref=ch07-existence-flot-local tags=enonce
### Q
Énoncer le théorème d'existence et d'unicité du flot local (Théorème VII.2.12).
### R
Soient $X:\Lambda\times I\times U\to E$ comme dans Cauchy-Lipschitz à paramètres ($C^p$, $p\ge0$, localement lipschitzien en $x$) et $(\lambda_0,\tau_0,x_0)\in\Lambda\times I\times U$. Il existe un voisinage ouvert $W$ de $\lambda_0$, un intervalle ouvert $J\ni\tau_0$, un voisinage ouvert $U'$ de $x_0$ et $\epsilon>0$ définissant un flot local $F$ en $(\lambda_0,\tau_0,x_0)$ ; $F$ est de classe $C^p$, et $C^{p+1}$ en $t$.
**Unicité** : si $\lambda\in W$, $t_0\in J$, $x\in U'$ et $\gamma:\,]t_0-\epsilon',t_0+\epsilon'[\to E$ avec $\epsilon'\le\epsilon$ vérifie $\gamma'(t)=X_\lambda(t,\gamma(t))$ et $\gamma(t_0)=x$, alors $\gamma(t)=F(\lambda,t_0,t,x)$ pour tout $t\in\,]t_0-\epsilon',t_0+\epsilon'[$. (poly, Théorème VII.2.12, p. 133)

## CARD id=fc-ch07-022 ref=ch07-existence-flot-local tags=hypothese
### Q
Dans le Théorème VII.2.12, pourquoi l'énoncé d'unicité porte-t-il sur des $\gamma$ définies sur $]t_0-\epsilon',t_0+\epsilon'[$ avec $\epsilon'\le\epsilon$, et que se passe-t-il sans l'hypothèse lipschitzienne ?
### R
L'unicité doit valoir pour **toute** solution sur un sous-intervalle, même petit (et sans supposer a priori qu'elle reste dans une boule) : c'est ce qui sert à montrer que l'ensemble de coïncidence de deux solutions est **ouvert** ([[ch07-unicite-globale]]). Sans lipschitz en $x$, l'unicité locale tombe ($\alpha'=2\abs{\alpha}^{1/2}$, $\alpha(0)=0$) et l'application $F$ n'est même pas bien définie.

## CARD id=fc-ch07-023 ref=ch07-unicite-globale tags=enonce
### Q
Énoncer la proposition d'unicité globale (Proposition VII.3.1).
### R
Soit $U$ un ouvert d'un Banach $E$ et $X : I\times U\to E$ un champ de vecteurs localement lipschitzien en la seconde variable. Soient $(\tau_0,x_0)\in I\times U$ et $\alpha_1,\alpha_2$, définies sur des intervalles ouverts $J_1,J_2\subset I$ **contenant $\tau_0$**, deux courbes intégrales de $X$ de même condition initiale $(\tau_0,x_0)$. Alors $\alpha_1=\alpha_2$ sur $J_1\cap J_2$. (poly, Proposition VII.3.1, p. 134)

## CARD id=fc-ch07-024 ref=ch07-unicite-globale tags=hypothese,methode
### Q
Preuve de l'unicité globale : quel argument, et où sert chaque hypothèse ?
### R
**Connexité.** $A=\{t\in J_1\cap J_2:\alpha_1(t)=\alpha_2(t)\}$ est :
* non vide ($\tau_0\in A$, même condition initiale) ;
* fermé dans $J_1\cap J_2$ (continuité de $\alpha_1,\alpha_2$) ;
* ouvert (unicité du flot local, Théorème VII.2.12, qui demande **localement lipschitzien**).
$J_1\cap J_2$ est un intervalle ouvert non vide (les $J_i$ sont des **intervalles contenant $\tau_0$**), donc connexe : $A=J_1\cap J_2$. (poly, p. 134)

## CARD id=fc-ch07-025 ref=ch07-unicite-globale tags=contre-exemple
### Q
Contre-exemple à l'unicité globale quand $X$ n'est que continu.
### R
$X(x)=2\abs{x}^{1/2}$ sur $\R$ : $\alpha_1\equiv0$ et $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ sont deux courbes intégrales définies sur $\R$, de même condition initiale $(0,0)$, qui ne coïncident nulle part sauf en $0$. (poly, Remarque VII.2.5, p. 129)

## CARD id=fc-ch07-026 ref=ch07-courbe-integrale-maximale-def tags=definition,enonce
### Q
Définir $J_{\tau_0}(x_0)$ et la courbe intégrale maximale de condition initiale $(\tau_0,x_0)$.
### R
Pour $X : I\times U\to E$ localement lipschitzien en la seconde variable et $(\tau_0,x_0)\in I\times U$, $J_{\tau_0}(x_0)$ est la **réunion de tous les intervalles ouverts $J$ contenant $\tau_0$** tels qu'il existe une courbe intégrale $\alpha:J\to U$ de condition initiale $(\tau_0,x_0)$. Par l'unicité globale (Proposition VII.3.1), les solutions se recollent : il existe une unique courbe intégrale $\alpha_{\tau_0,x_0}$ de condition initiale $(\tau_0,x_0)$ définie sur $J_{\tau_0}(x_0)$, appelée **courbe intégrale maximale**. (poly, Définition VII.3.3, p. 134)

## CARD id=fc-ch07-027 ref=ch07-courbe-integrale-maximale-def tags=hypothese
### Q
Pourquoi la définition de la courbe intégrale maximale exige-t-elle « localement lipschitzien » ? Quelle est la nature de $J_{\tau_0}(x_0)$ ?
### R
Sans unicité, deux solutions sur des intervalles différents ne se recolleraient pas en une seule fonction (Peano : plusieurs solutions issues du même point), donc « la » solution maximale ne serait pas définie. $J_{\tau_0}(x_0)$ est un **intervalle ouvert** (réunion d'intervalles ouverts contenant $\tau_0$), contenu dans $I$, non vide par Cauchy-Lipschitz : la solution maximale n'est jamais définie en une borne finie de $J_{\tau_0}(x_0)$.

## CARD id=fc-ch07-028 ref=ch07-courbe-integrale-maximale-def tags=contre-exemple
### Q
Donner un exemple où $J_{\tau_0}(x_0)\ne I$ pour un champ $C^\infty$.
### R
$X(x)=x^2$ sur $U=\R$, $I=\R$, condition initiale $(0,1)$ : $\alpha_{0,1}(t)=\dfrac1{1-t}$ et $J_0(1)=\,]-\infty,1[$. Plus généralement pour $x\gt0$, $J(x)=\,]-\infty,1/x[$.

## CARD id=fc-ch07-029 ref=ch07-flot-global-def tags=definition,enonce
### Q
Définir le flot global $F$ de $X : I\times U\to E$ et son domaine $D$ ; que devient la notation dans le cas autonome ?
### R
$$D=\{(\tau_0,t,x_0)\in I\times I\times U\mid t\in J_{\tau_0}(x_0)\},\qquad F:D\to U,\quad F(\tau_0,t,x_0)=\alpha_{\tau_0,x_0}(t),$$
où $\alpha_{\tau_0,x_0}$ est la courbe intégrale maximale. On pose aussi $D_{\tau_0}=\{(t,x_0)\in I\times U\mid t\in J_{\tau_0}(x_0)\}$. Cas autonome : $I=\R$, $\tau_0=0$, $J(x_0)=J_0(x_0)$, $F(t,x_0)=F(0,t,x_0)$. (poly, Définition VII.3.4, p. 134)

## CARD id=fc-ch07-030 ref=ch07-flot-global-def tags=contre-exemple,hypothese
### Q
Le domaine $D$ du flot global est-il en général égal à $I\times I\times U$ ? Calculer $D_0$ et $F$ pour $\alpha'=\alpha^2$ sur $U=\R$.
### R
Non. Pour $X(x)=x^2$ : $F(t,x)=\dfrac{x}{1-tx}$ et $D_0=\{(t,x)\in\R^2: tx\lt 1\}$, ouvert bordé par l'hyperbole $tx=1$, différent de $\R\times\R$. (Pour $x=0$ la solution nulle est définie sur $\R$, ce qui est cohérent avec $tx=0\lt1$.) L'hypothèse « localement lipschitzien » est nécessaire pour que $F$ soit défini.

## CARD id=fc-ch07-031 ref=ch07-translation-temps-autonome tags=enonce
### Q
Énoncer le théorème d'invariance par translation en temps (cas autonome).
### R
Soit $U$ un ouvert d'un Banach $E$ et $X:U\to E$ un champ **ne dépendant pas du temps** et lipschitzien. Soient $x_0\in U$, $\alpha$ la courbe intégrale maximale de condition initiale $x_0$, définie sur $J(x_0)$, et $t_1\in J(x_0)$. Alors
$$\beta : J(x_0)-t_1\to U,\qquad \beta(t)=\alpha(t+t_1)$$
est la courbe intégrale **maximale** de condition initiale $x_1=\alpha(t_1)$ ; donc $J(\alpha(t_1))=J(x_0)-t_1$. (poly, Théorème VII.3.5, p. 135 ; $J-t_1$ désigne le translaté $\{t: t+t_1\in J\}$)

## CARD id=fc-ch07-032 ref=ch07-translation-temps-autonome tags=hypothese
### Q
Dans le Théorème VII.3.5, quelle hypothèse rend $t\mapsto\alpha(t+t_1)$ encore courbe intégrale ? Comment obtient-on la maximalité ?
### R
L'**autonomie** : $\beta'(t)=\alpha'(t+t_1)=X(\alpha(t+t_1))=X(\beta(t))$ ; avec un champ $X(t,x)$ on obtiendrait $X(t+t_1,\beta(t))$. Maximalité : réciproquement $t\mapsto\alpha_{x_1}(t-t_1)$ est une courbe intégrale valant $x_1$ en $t_1$, donc coïncide avec $\alpha$ (unicité globale) et se recolle à elle : $J(x_1)+t_1\subset J(x_0)$. Le poly suppose $X$ lipschitzien ; localement lipschitzien suffit à la preuve.

## CARD id=fc-ch07-033 ref=ch07-translation-temps-autonome tags=contre-exemple
### Q
Montrer par un exemple que l'invariance par translation en temps est fausse pour un champ dépendant du temps.
### R
$X(t,x)=2t$ sur $\R\times\R$ : $\alpha(t)=t^2$ est la solution avec $\alpha(0)=0$, mais $\beta(t)=\alpha(t+1)=(t+1)^2$ vérifie $\beta'(t)=2t+2\ne 2t$ : ce n'est pas une courbe intégrale. Il faut alors la formule de composition [[ch07-composition-flot]].

## CARD id=fc-ch07-034 ref=ch07-groupe-un-parametre tags=enonce,formule
### Q
Énoncer la propriété de groupe du flot d'un champ autonome (Remarque VII.3.6).
### R
Pour $X$ autonome (lipschitzien), on pose $F_t\cdot x=\alpha_x(t)=F(t,x)$ pour $(t,x)\in D_0$. Lorsque $(t,x)$ et $(s,F_t\cdot x)$ sont dans $D_0$,
$$F_s\cdot(F_t\cdot x)=F_{t+s}\cdot x\qquad\text{(VII.3.1)}.$$
Si $D_0=\R\times U$, $F_t$ est défini pour tout $t$ et $t\mapsto F_t$ est un **morphisme de groupes** de $(\R,+)$ dans le groupe des bijections de $U$. (poly, Remarque VII.3.6, p. 135)

## CARD id=fc-ch07-035 ref=ch07-groupe-un-parametre tags=hypothese
### Q
Propriété de groupe $F_s\circ F_t=F_{s+t}$ : sous quelles conditions a-t-elle un sens, et quand obtient-on un vrai groupe à un paramètre ?
### R
Il faut $X$ **autonome**, et la formule n'a de sens que là où les deux membres sont définis : $(t,x)\in D_0$ et $(s,F_t\cdot x)\in D_0$. On n'obtient un morphisme $t\mapsto F_t$ de $(\R,+)$ vers les bijections de $U$ que si $D_0=\R\times U$ (toutes les solutions sont globales). Exemple : $X(x)=x$ sur $\R$, $F_t\cdot x=e^tx$, $F_s\circ F_t=F_{s+t}$, $F_t^{-1}=F_{-t}$.

## CARD id=fc-ch07-036 ref=ch07-groupe-un-parametre tags=contre-exemple
### Q
Contre-exemple : la relation $F(0,s,F(0,t,x))=F(0,s+t,x)$ pour un champ non autonome.
### R
$X(t,x)=2t$ : $F(t_0,t,x)=x+t^2-t_0^2$. Alors $F(0,s,F(0,t,x))=x+t^2+s^2$ alors que $F(0,s+t,x)=x+(s+t)^2$ : différent dès que $st\ne0$. La bonne formule est $F(t_0,s+t,x)=F(s,s+t,F(t_0,s,x))$.

## CARD id=fc-ch07-037 ref=ch07-composition-flot tags=enonce,formule
### Q
Énoncer la formule de composition du flot pour un champ dépendant du temps (Théorème VII.3.7).
### R
Soit $X:I\times U\to E$ localement lipschitzien en la seconde variable, de flot global $F$. Soit $(t_0,x)\in I\times U$ et supposons $s$ et $s+t$ dans $J_{t_0}(x)$. Alors
$$F(t_0,s+t,x)=F\big(s,s+t,F(t_0,s,x)\big).$$
(poly, Théorème VII.3.7, p. 135) Lecture : aller de l'instant $t_0$ à l'instant $s+t$ revient à aller de $t_0$ à $s$, puis de $s$ à $s+t$.

## CARD id=fc-ch07-038 ref=ch07-composition-flot tags=methode
### Q
Comment le poly démontre-t-il la formule de composition $F(t_0,s+t,x)=F(s,s+t,F(t_0,s,x))$ ?
### R
Les deux fonctions de $t$, $t\mapsto F(t_0,s+t,x)$ et $t\mapsto F(s,s+t,F(t_0,s,x))$, vérifient la **même équation différentielle** $y'(t)=X(s+t,y(t))$ avec la **même condition initiale** $(0,F(t_0,s,x))$ : elles coïncident par unicité (Proposition VII.3.1). Méthode générale : pour prouver une identité entre deux fonctions du temps, montrer qu'elles résolvent le même problème de Cauchy. (poly, p. 135)

## CARD id=fc-ch07-039 ref=ch07-flot-inverse tags=enonce,formule
### Q
Énoncer le Corollaire VII.3.8 (inversibilité du flot) et sa conséquence.
### R
En remplaçant dans VII.3.7 $t_0$ par $s$, $s$ par $t$ et $t$ par $s-t$ (là où c'est défini) :
$$F(s,s,x)=x=F\big(t,s,F(s,t,x)\big)\qquad\text{(VII.3.2)},$$
autrement dit $F(s,t,x)=y\iff F(t,s,y)=x$. Ainsi $x\mapsto F(s,t,x)$ est bijective (sur son domaine), d'inverse $y\mapsto F(t,s,y)$ : remonter le temps de $t$ à $s$ inverse le transport de $s$ à $t$. (poly, Corollaire VII.3.8, p. 135)

## CARD id=fc-ch07-040 ref=ch07-flot-global-ouvert-regulier tags=enonce
### Q
Énoncer le théorème d'ouverture du domaine et de régularité du flot global (Théorème VII.3.9).
### R
Soit $U$ un ouvert d'un Banach $E$ et $X:I\times U\to E$ un champ de vecteurs localement lipschitzien en la seconde variable. Alors :
* a. $D$ est un **ouvert** de $I\times I\times U$ ;
* b. si $X$ est de classe $C^p$, $F$ est de classe $C^p$ sur $D$.

(poly, Théorème VII.3.9, p. 135)

## CARD id=fc-ch07-041 ref=ch07-flot-global-ouvert-regulier tags=hypothese,methode
### Q
Structure de la preuve du Théorème VII.3.9 : quel ensemble $A$, quel argument ?
### R
On fixe $(\tau_0,x_0)$, $J=J_{\tau_0}(x_0)$, et $A$ = ensemble des $s\in J$ tels que $(\tau_0,s,x_0)$ admette dans $D$ un voisinage produit $O\times U'$ sur lequel $F$ est $C^p$. **Connexité** de l'intervalle $J$ : $A$ est non vide ($\tau_0\in A$ par le flot local VII.2.12), ouvert (évident, $O$ ouvert), fermé (flot local en $(b,x_1)$ pour $b$ adhérent à $A$ et formule de composition VII.3.7 pour prolonger le voisinage). Donc $A=J$, ce qui donne a. et b. à la fois. Hypothèse lipschitzienne : nécessaire pour les flots locaux (existence, unicité). (poly, p. 135-136)

## CARD id=fc-ch07-042 ref=ch07-flot-global-ouvert-regulier tags=contre-exemple
### Q
Le domaine $D$ du flot est-il fermé ? Donner un exemple.
### R
Non en général. Pour $X(x)=x^2$ sur $\R$ : $D_0=\{(t,x):tx\lt1\}$ est ouvert mais pas fermé (les points de l'hyperbole $tx=1$ sont adhérents sans y appartenir), et $F(t,x)=\dfrac{x}{1-tx}$ est $C^\infty$ sur $D_0$ mais n'a pas de limite finie au bord.

## CARD id=fc-ch07-043 ref=ch07-proprietes-flot-formules tags=formule
### Q
Écrire les trois formules résumant les propriétés du flot global $F(s,t,x)$ d'un champ $X(t,x)$.
### R
Là où les quantités sont définies :
$$\frac{\partial F}{\partial t}(s,t,x)=X\big(t,F(s,t,x)\big)\quad\text{(VII.3.3)},\qquad F(t,t,x)=x\quad\text{(VII.3.4)},$$
$$F\big(t,s,F(s,t,x)\big)=x\quad\text{(VII.3.5)}.$$
(poly, p. 136)

## CARD id=fc-ch07-044 ref=ch07-lemme-des-bouts tags=enonce
### Q
Énoncer le lemme des bouts (Théorème VII.3.10).
### R
Soit $U$ un ouvert d'un Banach $E$ et $X:U\to E$ un champ **ne dépendant pas du temps** et lipschitzien. Soit $(\tau_0,x_0)\in\R\times U$ et $\alpha_{\tau_0,x_0}$ la courbe intégrale maximale, définie sur $J_{\tau_0}(x_0)$. Soit $b=\sup J_{\tau_0}(x_0)$ et supposons que $\alpha_{\tau_0,x_0}([\tau_0,b[)$ reste dans une partie **compacte $K$ de $U$**. Alors $b=+\infty$. Énoncé analogue pour la borne inférieure. (poly, Théorème VII.3.10, p. 136)
Contraposée : si $b\lt+\infty$, la solution sort de tout compact de $U$ quand $t\to b^-$.

## CARD id=fc-ch07-045 ref=ch07-lemme-des-bouts tags=hypothese
### Q
Lemme des bouts : pourquoi faut-il un compact **de $U$** (et pas seulement une partie bornée, ou un compact de $E$) ? Pourquoi le champ est-il supposé autonome ?
### R
* Compact **de $U$** : la solution peut aussi « mourir » en s'approchant du bord de $U$. Ex. : $U=\,]0,+\infty[$, $X\equiv-1$, $\alpha(t)=1-t$ : $b=1$, la trajectoire reste dans $[0,1]$, compact de $\R$ mais pas de $U$.
* En dimension infinie, borné n'implique pas relativement compact.
* **Autonome** : on translate en temps les solutions (Théorème VII.3.5) pour repartir de $\alpha(b-\epsilon)$ avec un $\epsilon$ indépendant de l'instant. Pour un champ $X(t,x)$ sur $I\ne\R$, $b$ peut être fini parce que $I$ l'est ($I=\,]-\infty,1[$, $X\equiv0$).

## CARD id=fc-ch07-046 ref=ch07-lemme-des-bouts tags=contre-exemple
### Q
Exemple d'explosion en temps fini montrant le lemme des bouts « en action ».
### R
$\alpha'=\alpha^2$, $\alpha(0)=1$ : $\alpha(t)=\dfrac1{1-t}$, $J_0(1)=\,]-\infty,1[$, $b=1\lt+\infty$ et $\alpha(t)\to+\infty$ quand $t\to1^-$ : la trajectoire ne reste dans aucun compact de $U=\R$, conformément à la contraposée.

## CARD id=fc-ch07-047 ref=ch07-lemme-des-bouts tags=methode
### Q
Idée de la preuve du lemme des bouts.
### R
1. **Compacité** : pour chaque $x\in K$, un flot local en $(0,x)$ donne un voisinage $U_x$ et un intervalle de vie commun ; on extrait un recouvrement fini $K\subset\bigcup_{i=1}^n U_{x_i}$ et on obtient $\epsilon>0$ tel que $]-2\epsilon;2\epsilon[\subset J_0(y)$ pour tout $y\in K$.
2. Si $b\lt+\infty$ : $y_0=\alpha(b-\epsilon)\in K$, la solution $\beta$ issue de $(0,y_0)$ vit sur $]-2\epsilon;2\epsilon[$, donc $t\mapsto\beta(t+b-\epsilon)$ vit sur $]b-3\epsilon;b+\epsilon[$ et coïncide avec $\alpha$ (même valeur en $b-\epsilon$).
3. On **prolonge** $\alpha$ au-delà de $b$ : contradiction avec la maximalité. (poly, p. 137)

## CARD id=fc-ch07-048 ref=ch07-lemme-des-bouts tags=methode
### Q
Pour montrer qu'une solution d'un champ autonome est définie pour tout temps, on ...
### R
... cherche une information **a priori** qui confine la trajectoire dans un **compact de $U$**, puis on applique le lemme des bouts : quantité conservée (intégrale première) dont les lignes de niveau sont compactes (énergie, exercice VII.4.13), contrainte géométrique ($\alpha(t)$ orthogonale donc bornée dans $\Mat_n(\R)$, exercice VII.4.6), ou estimation de Gronwall. Pour un champ linéaire on conclut aussi par Gronwall (pas d'explosion).

## CARD id=fc-ch07-049 ref=none tags=formule
### Q
Énoncer le lemme de Gronwall (Exercice VII.4.1).
### R
Soient $T\gt0$, $u:[0,T]\to\R_+$ continue et $a,b:[0,T]\to\R_+$ continues telles que
$$u(t)\le b(t)+\int_0^t a(s)u(s)\,ds\qquad\forall t\in[0,T].$$
Alors pour tout $t\in[0,T]$ :
$$u(t)\le b(t)+\int_0^t b(s)a(s)\exp\Big(\int_s^t a(\tau)\,d\tau\Big)ds.$$
Indication : poser $v(t)=\int_0^t a(s)u(s)\,ds$, montrer $v'\le ab+av$ et intégrer $\big(v(t)e^{-\int_0^t a}\big)'$. Cas $b$ constant : $u(t)\le b\exp\big(\int_0^ta\big)$. (poly, Exercice VII.4.1, p. 137)

## CARD id=fc-ch07-050 ref=none tags=formule
### Q
Dépendance lipschitzienne en la condition initiale : si $f$ est continue et $k$-lipschitzienne en la seconde variable, quelle estimation relie deux solutions $y_1,y_2$ de $y'=f(t,y)$ avec $y_i(t_0)=x_i$ ?
### R
$$\norm{y_1(t)-y_2(t)}\le\norm{x_1-x_2}\exp\big(k\abs{t-t_0}\big)$$
pour tout $t$ de l'intervalle commun. Elle se déduit de Gronwall appliqué à $u=\norm{y_1-y_2}$ ($u(t)\le\norm{x_1-x_2}+k\int_{t_0}^tu$). En particulier $x_1=x_2$ donne l'unicité. (poly, Exercice VII.4.2, p. 137)

## CARD id=fc-ch07-051 ref=none tags=formule
### Q
Exponentielle de matrice et équation différentielle : quel problème de Cauchy $t\mapsto\exp(tX)$ résout-il ? Qu'est-ce qu'un sous-groupe à un paramètre de $\GL(n,K)$ ?
### R
Pour $X\in\Mat_n(K)$, $\exp X=\sum_{n\ge0}\frac{X^n}{n!}$ et $t\mapsto\exp(tX)$ est l'**unique** solution différentiable de $a'(t)=X\,a(t)$, $a(0)=I_n$ ; de plus $\exp(sX)\exp(tX)=\exp((s+t)X)$. Un **sous-groupe à un paramètre** est un morphisme de groupes continu $\R\to\GL(n,K)$ ; tous sont de la forme $t\mapsto\exp(tX)$. (poly, Exercice VII.4.3, p. 138)

## CARD id=fc-ch07-052 ref=none tags=formule
### Q
Formule de dérivation du déterminant et critère de conservation du volume par un flot (Exercice VII.4.8).
### R
Si $t\mapsto A(t)$ est $C^1$ à valeurs dans $\GL_n(\R)$ :
$$\frac{d}{dt}\det A(t)=\det A(t)\,\mathrm{Tr}\big(A(t)^{-1}A'(t)\big).$$
Pour un champ autonome $C^1$ sur $U\subset\R^n$ de flot défini sur $\R\times U$, les difféomorphismes $F_t$ préservent le volume ($\det d(F_t)_x=1$ pour tous $t,x$) si et seulement si $\mathrm{Tr}\,dX_x=0$ pour tout $x\in U$. (poly, Exercice VII.4.8, p. 140)

## CARD id=fc-ch07-053 ref=none tags=methode
### Q
Pour montrer qu'une fonction $f$ ($C^1$) est constante le long des courbes intégrales d'un champ autonome $X$, on ...
### R
... vérifie que $\nabla f(a)\perp X(a)$ en tout point $a\in U$, c'est-à-dire $df_a(X(a))=0$ : en effet $\frac{d}{dt}f(\alpha(t))=df_{\alpha(t)}(\alpha'(t))=\langle\nabla f(\alpha(t)),X(\alpha(t))\rangle$. C'est une équivalence. Ex. : $X(x,y)=(y-y^5,x)$ et $f(x,y)=3x^2-3y^2+y^6$. (poly, Exercice VII.4.11, p. 140)

## CARD id=fc-ch07-054 ref=none tags=methode
### Q
Méthode des caractéristiques : quelle est la solution de l'équation de transport $\partial_tf+\langle A(t,x),\nabla_xf\rangle=0$, $f(0,\cdot)=f_0$ ?
### R
Le long d'une courbe intégrale $t\mapsto\gamma(t)$ de $A$, $\frac{d}{dt}f(t,\gamma(t))=\partial_tf+\langle\gamma'(t),\nabla_xf\rangle=0$ : $f$ est constante. D'où, avec $F$ le flot de $A$ ($F(s,t,x)$ = position en $t$ partant de $x$ en $s$) :
$$f(t,x)=f_0\big(F(t,0,x)\big),$$
on remonte la caractéristique passant par $x$ à l'instant $t$ jusqu'à l'instant $0$ (la valeur initiale est « transportée »). (poly, Exercice VII.4.12, p. 141)

## CARD id=fc-ch07-055 ref=ch07-cauchy-lipschitz tags=methode
### Q
Pour montrer que deux fonctions du temps sont égales (ex. $\alpha(t)$ orthogonale pour tout $t$, $\exp(sX)\exp(tX)=\exp((s+t)X)$, formule de composition du flot), on ...
### R
... montre qu'elles vérifient **la même équation différentielle** (à champ localement lipschitzien) avec **la même condition initiale**, puis on invoque l'unicité de Cauchy-Lipschitz / l'unicité globale (Proposition VII.3.1). Ex. (exercice VII.4.6) : si $\alpha'=A(t)\alpha$ avec $A(t)$ antisymétrique, $\beta={}^t\alpha\,\alpha$ vérifie $\beta'=0$ ($ {}^t\alpha({}^tA+A)\alpha=0$), donc ${}^t\alpha\alpha=I_n$ si c'est vrai en $t_0$.

## CARD id=fc-ch07-056 ref=ch07-unicite-globale tags=methode
### Q
Quel argument topologique revient trois fois dans le chapitre VII, et où ?
### R
L'argument de **connexité** : dans un intervalle (connexe), une partie non vide, ouverte et fermée est l'intervalle entier. Utilisé pour : l'unicité renforcée dans Cauchy-Lipschitz (ensemble des temps où la solution reste dans $B(x_0,2a)$) ; l'unicité globale VII.3.1 (ensemble de coïncidence) ; l'ouverture de $D$ et la régularité de $F$ dans VII.3.9 (ensemble $A$ des bons instants).

## CARD id=fc-ch07-057 ref=none tags=notation
### Q
Que désignent $\alpha_{t_0,x}$, $\alpha_{\lambda,t_0,x}$ et $X_\lambda$ ?
### R
* $\alpha_{t_0,x}$ : l'unique courbe intégrale de condition initiale $(t_0,x)$, i.e. $\alpha(t_0)=x$ (locale dans VII.2.1, maximale dans VII.3.3).
* $X_\lambda(t,x)=X(\lambda,t,x)$ : le champ de la famille $(X_\lambda)_{\lambda\in\Lambda}$ de paramètre $\lambda$.
* $\alpha_{\lambda,t_0,x}$ : la solution de $\alpha'=X_\lambda(t,\alpha)$, $\alpha(t_0)=x$. (poly, p. 128 et 131)

## CARD id=fc-ch07-058 ref=none tags=notation
### Q
Que désignent $J_{\tau_0}(x_0)$, $D$, $D_{\tau_0}$, et dans le cas autonome $J(x_0)$, $F(t,x)$, $F_t\cdot x$ ?
### R
* $J_{\tau_0}(x_0)$ : intervalle (ouvert) maximal de définition de la solution de condition initiale $(\tau_0,x_0)$.
* $D=\{(\tau_0,t,x_0):t\in J_{\tau_0}(x_0)\}$ : domaine du flot global $F(\tau_0,t,x_0)$ (instant initial, instant final, point initial).
* $D_{\tau_0}=\{(t,x_0):t\in J_{\tau_0}(x_0)\}$ : tranche à instant initial fixé.
* Autonome ($\tau_0=0$) : $J(x_0)=J_0(x_0)$, $F(t,x)=F(0,t,x)$, $F_t\cdot x=F(t,x)$ (flot au temps $t$ vu comme application de $U$ dans $U$). (poly, p. 134-135)

## CARD id=fc-ch07-059 ref=none tags=notation
### Q
Que désignent $\mathcal E(J,\epsilon)$, $I+c$, $]a\,;b[$ et $\bar B(x_0,r)$ dans le chapitre VII ?
### R
* $\mathcal E(J,\epsilon)=\{(t_0,t)\in J\times\R\mid t\in\,]t_0-\epsilon,t_0+\epsilon[\}$ : domaine temporel (instant initial, instant courant) d'un flot local, bande ouverte connexe de $\R^2$.
* $I+c=\{t\in\R\,;\,t-c\in I\}$ : translaté de l'intervalle $I$ (ainsi $J(x_0)-t_1$).
* $]a\,;b[$ : intervalle ouvert (bornes séparées par un point-virgule).
* $B(x_0,r)$, $\bar B(x_0,r)$ : boules ouverte et fermée de l'espace de Banach $E$. (poly, p. 128-134)

## CARD id=fc-ch07-060 ref=none tags=notation
### Q
Dans la preuve de Cauchy-Lipschitz, que désignent $k$, $\ell$, $\mathcal X$ et $S_{t_0,x}$ ?
### R
* $k$ : constante de Lipschitz en la seconde variable, $\norm{X(t,x_1)-X(t,x_2)}\le k\norm{x_1-x_2}$.
* $\ell$ : majorant de $\norm X$ sur la boîte, $\ell=1+\sup_{[\tau_0-2a';\tau_0+2a']\times\bar B(x_0,2a)}\norm{X}$.
* $\mathcal X=C^0([t_0-b;t_0+b],\bar B(x_0,2a))$ muni de $\norm{\cdot}_\infty$ (convergence uniforme), espace métrique complet.
* $S_{t_0,x}(\varphi)(t)=x+\int_{t_0}^tX(s,\varphi(s))\,ds$ : opérateur de Picard, dont la solution est l'unique point fixe dans $\mathcal X$. (poly, p. 130-131)
