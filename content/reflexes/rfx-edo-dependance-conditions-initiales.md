---
id: rfx-edo-dependance-conditions-initiales
type: reflexe
situation: Montrer que la solution dépend continûment ou différentiablement de la condition initiale ou d'un paramètre, et calculer cette dérivée (flot, équation aux variations)
chapters: [7, 6, 5, 8]
---
## Situation

On note $F(t,x)$ (ou $F(\lambda,t_0,t,x)$) la valeur au temps $t$ de la solution de condition initiale $x$ (et de paramètre $\lambda$). L'énoncé demande : « montrer que $x\mapsto F(T,x)$ est continue / de classe $C^1$ », « montrer que l'ensemble des $x$ tels que la solution est définie sur $[0,T]$ (ou entre dans un ouvert $W$) est ouvert », « calculer $\frac{\partial F}{\partial x}(t,x^*)$ en un équilibre », « calculer la dérivée de la solution par rapport à $\lambda$ en $\lambda=0$ », « montrer que pour $\lambda$ petit la solution existe sur $[0,1]$ », « montrer que $F_t$ est un difféomorphisme », « montrer que le temps d'atteinte de l'hyperplan dépend de façon $C^1$ de $x$ ».

## Options

### [x] Domaine ouvert et régularité du flot global — [[ch07-flot-global-ouvert-regulier]]
**Quand.** $X$ localement lipschitzien en $x$ : le domaine $D$ du flot global est **ouvert** ; si $X$ est $C^p$, $F$ est $C^p$ sur $D$ (poly, Théorème VII.3.9, p. 135). Ouverture d'un ensemble de conditions initiales : $\{x : (T,x)\in D\text{ et }F(T,x)\in W\}$ est ouvert comme image réciproque d'un ouvert par une application continue sur un ouvert. Dans le cas autonome, $F_t$ est un $C^p$-difféomorphisme de $\{x : (t,x)\in D_0\}$ sur $\{x : (-t,x)\in D_0\}$, d'inverse $F_{-t}$ ([[ch07-groupe-un-parametre]]).
**Justification.** Recollement des flots locaux de Cauchy–Lipschitz à paramètres le long d'un segment de temps compact.
**Pièges.** « Proche au départ, proche à l'arrivée » ne vaut que pour un **temps fixé** (ou un intervalle compact de temps). Pour passer d'un point à un segment, utiliser la compacité : si $[0,T]\times\{x_0\}\subset D$ ouvert, il existe $\delta>0$ tel que $[0,T]\times B(x_0,\delta)\subset D$ (un compact inclus dans un ouvert est à distance $>0$ du complémentaire, [[ch08-voisinage-compact-dans-ouvert]]).

### [x] Cauchy–Lipschitz à paramètres — [[ch07-cauchy-lipschitz-parametres]]
**Quand.** Le champ dépend d'un paramètre : $\alpha'=X_\lambda(t,\alpha)$ avec $(\lambda,t,x)\mapsto X(\lambda,t,x)$ de classe $C^p$, localement lipschitzien en $x$. Alors $(\lambda,t_0,t,x)\mapsto\alpha_{\lambda,t_0,x}(t)$ est $C^p$, et $C^{p+1}$ en $t$ (poly, Théorème VII.2.8, p. 131). Astuce équivalente : ajouter le paramètre comme inconnue, $(\lambda,x)'=(0,X_\lambda(t,x))$, et appliquer le résultat sur le flot.
**Justification.** Point fixe à paramètre ([[ch06-point-fixe-parametre-cp]]) appliqué à l'opérateur de Picard.
**Pièges.** Il faut la régularité **jointe** en $(\lambda,t,x)$, pas seulement en $x$ pour chaque $\lambda$. Le paramètre peut être la condition initiale elle-même ou l'instant initial $t_0$.

### [x] Équation aux variations (dériver l'EDO) — [[ch07-flot-local-equation]]
**Quand.** On veut **calculer** $R(t)=\frac{\partial F}{\partial x}(t,x_0)\in\mathcal L(E)$ ou $S(t)=\frac{\partial F}{\partial\lambda}(\lambda_0,t,x_0)$. On dérive $\frac{\partial F}{\partial t}(t,x)=X(t,F(t,x))$ et $F(t_0,x)=x$ ([[ch07-flot-local-equation]]) par rapport à $x$ ou $\lambda$ :
$$R'(t)=\frac{\partial X}{\partial x}(t,\alpha(t))\circ R(t),\quad R(t_0)=\id,\qquad S'(t)=\frac{\partial X}{\partial x}(\lambda_0,t,\alpha(t))\,S(t)+\frac{\partial X}{\partial\lambda}(\lambda_0,t,\alpha(t)),\quad S(t_0)=0,$$
où $\alpha=F(\cdot,x_0)$ (pour un champ autonome, $\frac{\partial X}{\partial x}(t,\alpha(t))=dX_{\alpha(t)}$). Ce sont des **EDO linéaires** le long de la solution de référence. En un équilibre $x^*$ d'un champ autonome : $R(t)=e^{t\,dX_{x^*}}$.
**Justification.** Si $X$ est $C^2$, $F$ est $C^2$ et le lemme de Schwarz ([[ch05-lemme-schwarz]]) permet d'échanger $\partial_t$ et $\partial_x$. Si $X$ est seulement $C^1$, dériver plutôt la forme intégrale $F(t,x)=x+\int_{t_0}^tX(s,F(s,x))\,ds$ sous le signe intégrale (intégrande $C^1$ en $x$, continu en $(s,x)$).
**Pièges.** Ne pas oublier le terme source $\frac{\partial X}{\partial\lambda}$ dans l'équation de $S$, ni les conditions initiales ($\id$ pour $R$, $0$ pour $S$ car $F(\lambda,t_0,t_0,x)=x$ ne dépend pas de $\lambda$).

### [x] Estimation de Gronwall (dépendance lipschitzienne explicite) — [[ch07-equation-integrale]]
**Quand.** L'énoncé veut une **inégalité** : $\norm{\alpha_1(t)-\alpha_2(t)}\le\norm{x_1-x_2}e^{k\abs{t-t_0}}$ quand $X$ est $k$-lipschitzien en $x$ (poly, Exercice VII.4.2, p. 137), ou $\norm{\alpha_\lambda(t)-\alpha_\mu(t)}\le\eta\,\abs{t-t_0}e^{k\abs{t-t_0}}$ quand $\norm{X_\lambda-X_\mu}_\infty\le\eta$.
**Justification.** Soustraire les formes intégrales et appliquer Gronwall à $u=\norm{\alpha_1-\alpha_2}$.
**Pièges.** La constante $k$ doit être valable sur une région qui **contient les deux trajectoires** ; avec un champ seulement localement lipschitzien, commencer par confiner les solutions dans un compact.

### [ ] Fonctions implicites appliquées directement à l'EDO — [[ch06-fonctions-implicites]]
**Pourquoi ce n'est pas l'outil ici.** La solution d'une EDO n'est pas définie par une équation $G(x,y)=0$ en dimension finie : la régularité en $x$ vient du théorème sur le flot, pas des implicites.
**Quand il le serait.** **Après** avoir obtenu la régularité de $F$ : pour un temps d'atteinte $\tau(x)$ défini par $g(F(\tau,x))=0$, si $\frac{\partial}{\partial t}g(F(t,x))=dg_{F(t,x)}(X(F(t,x)))\ne0$ au point (champ **transverse** à l'hypersurface), les implicites donnent $\tau$ de classe $C^p$. Même chose pour une méthode de tir ($u'(0)=s$ ajusté pour avoir $u(1)=0$, [[rfx-diff-fonctions-implicites]]).

## Démarche

1. **Nommer le flot** : $F(t,x)$ ou $F(\lambda,t_0,t,x)$, son domaine $D$, et la régularité de $X$ (classe $C^p$ en toutes les variables).
2. Si l'on demande continuité ou régularité, alors citer le Théorème VII.3.9 (ou VII.2.8 avec paramètre) en vérifiant les hypothèses.
3. Si l'on demande l'**ouverture** d'un ensemble de conditions initiales, alors l'écrire comme image réciproque d'un ouvert par $F(T,\cdot)$ sur l'ouvert $\{x : (T,x)\in D\}$ ; si un **segment de temps** intervient, utiliser la compacité de $[0,T]$.
4. Si l'on demande une **dérivée**, alors écrire l'équation aux variations le long de la solution de référence et la résoudre (EDO linéaire : facteur intégrant, variation de la constante, exponentielle de matrice en un équilibre).
5. Si l'on demande une **inégalité**, alors Gronwall.
6. Si une quantité est définie implicitement à partir du flot (temps d'atteinte, valeur de tir), alors fonctions implicites avec une condition de transversalité.

## Pièges

* Appliquer la continuité du flot sur $[0,+\infty[$ : elle n'est valable que sur des intervalles de temps compacts.
* Oublier que $D$ n'est pas un produit : $x$ proche de $x_0$ peut avoir un temps de vie plus court (pour $x'=x^2$, $D_0=\{tx<1\}$).
* Écrire $R'=R\circ dX$ au lieu de $R'=dX_{\alpha(t)}\circ R$ (l'ordre compte en dimension $\ge2$).
* Calculer $\partial_x F$ en un point non équilibre avec $e^{t\,dX_{x_0}}$ : faux, le coefficient $dX_{\alpha(t)}$ dépend du temps.
* Ne pas justifier l'échange $\partial_t\partial_x=\partial_x\partial_t$.

## Mini-exemple

*Énoncé.* Soit $x_\lambda$ la solution maximale de $x'=\lambda x+x^2$, $x(0)=1$. Montrer que $x_\lambda$ est définie sur $[0,\frac12]$ pour $\abs\lambda$ petit et calculer $S(t)=\frac{\partial x_\lambda(t)}{\partial\lambda}\big|_{\lambda=0}$.

*Solution.* Le champ $(\lambda,x)\mapsto(0,\lambda x+x^2)$ sur $\R^2$ est $C^\infty$ ; le domaine de son flot est ouvert et contient le compact $[0,\frac12]\times\{(0,1)\}$ car $x_0(t)=\frac1{1-t}$ est définie sur $]-\infty,1[$. Par compacité, il existe $\sigma>0$ tel que $[0,\frac12]\times\big(]-\sigma,\sigma[\times\{1\}\big)$ y soit contenu : $x_\lambda$ existe sur $[0,\frac12]$ pour $\abs\lambda<\sigma$, et $(\lambda,t)\mapsto x_\lambda(t)$ est $C^\infty$. En dérivant l'équation en $\lambda$ (Schwarz) : $S'=x_0+2x_0S$, $S(0)=0$, soit $S'=\frac{2}{1-t}S+\frac1{1-t}$. La solution homogène est $\frac1{(1-t)^2}$ ; en posant $S=\frac{C(t)}{(1-t)^2}$, on trouve $C'=1-t$, d'où $S(t)=\frac{t-t^2/2}{(1-t)^2}$. Contrôle par la solution exacte : $u=1/x_\lambda$ vérifie $u'=-\lambda u-1$, $u(0)=1$, donc $u=e^{-\lambda t}+\frac{e^{-\lambda t}-1}{\lambda}=1-t+\lambda\big(\frac{t^2}2-t\big)+O(\lambda^2)$, et $\partial_\lambda x=-\frac{\partial_\lambda u}{u^2}=\frac{t-t^2/2}{(1-t)^2}$ en $\lambda=0$.
