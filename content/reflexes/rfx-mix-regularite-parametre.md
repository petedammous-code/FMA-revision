---
id: rfx-mix-regularite-parametre
type: reflexe
situation: Montrer qu'une fonction définie par une intégrale ou une série est continue, de classe C^1 ou C^∞ en un paramètre réel, ou holomorphe en un paramètre complexe
chapters: [1, 3, 5, 7, 8]
---
## Situation

On a $\Phi(\lambda)=\int_Xf(\lambda,x)\,dx$, ou $\Phi(\lambda)=\sum_nf_n(\lambda)$, ou une fonctionnelle $\gamma\mapsto\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$, où le paramètre $\lambda$ est **réel** ($t\in I\subset\R$), **vectoriel** ($\lambda\in\R^n$, ou une courbe dans un espace de Banach) ou **complexe**. On veut : continuité, classe $C^1$ ou $C^\infty$, holomorphie, la formule de la dérivée — et, très souvent ensuite, une **équation différentielle** vérifiée par $\Phi$ qui permet de la calculer.

Le réflexe central : **si l'intégrande se prolonge holomorphiquement en le paramètre, passer en complexe** — une seule domination donne alors toutes les dérivées d'un coup.

## Options

### [x] Holomorphie sous le signe intégrale (et complexification d'un paramètre réel) — [[ch01-holomorphie-sous-integrale]]
**Quand.** $\lambda=z$ complexe, ou $\lambda=t$ réel mais $f(t,x)$ est la restriction d'une $F(z,x)$ holomorphe en $z$ sur une bande ou un disque contenant l'intervalle utile ($e^{tx}$, $x^{t}$, $\cos(tx)$, $1/(x+t)$...). Hypothèses : $F$ mesurable, holomorphe en $z$ pour $x$ fixé, et **domination locale** $|F(z,x)|\le g_{z_0}(x)$ sur un disque $D(z_0,r_0)$, $g_{z_0}$ intégrable.
**Justification.** Théorème I.9.1 (poly, p. 24) : $\Phi$ est holomorphe et $\Phi^{(k)}(z)=\int_X\partial_z^kF(z,x)\,dx$. La restriction à $\R$ d'une fonction holomorphe est $C^\infty$ ([[ch01-holomorphe-analytique]]) et ses dérivées réelles sont les dérivées complexes : **la classe $C^\infty$ est gratuite**, avec la formule pour toutes les dérivées.
**Pièges.** La domination doit valoir sur un **voisinage complexe** : prendre une bande $|\Re z|\le M$ ou $a\le\Re z\le b$, et écrire « pour tout $M$ ». Le prolongement peut échouer près d'un point : $\int_0^{+\infty}\frac{e^{-x}}{1+t^2x^2}\,dx$ a des pôles en $z=\pm i/x$, qui s'accumulent en $0$ ; la fonction est $C^\infty$ sur $\R$ (option suivante, $|\partial_t^k|\le C_kx^k$) mais pas développable en série entière en $0$ (sa série de Taylor $\sum(-1)^n(2n)!\,t^{2n}$ diverge pour tout $t\ne0$).

### [x] Dérivation réelle sous $\int$ (théorèmes de Lebesgue) — [[ch01-variantes-holomorphie-integrale]]
**Quand.** Paramètre réel sans prolongement holomorphe commode ($|t|$, $\max$, intégrande seulement $C^1$). Hypothèses à écrire, sur tout compact $[a,b]\subset I$ : (i) $t\mapsto f(t,x)$ est $C^1$ pour presque tout $x$ ; (ii) $f(t,\cdot)$ intégrable ; (iii) $|\partial_tf(t,x)|\le g(x)$ intégrable, **indépendant de $t\in[a,b]$**. Alors $\Phi\in C^1$ et $\Phi'=\int\partial_tf$. Itérer pour $C^k$.
**Justification.** La Remarque I.9.3 (b) (poly, p. 25) utilise précisément ces théorèmes de continuité et de dérivation sous $\int$ ; la preuve est accroissements finis + convergence dominée.
**Pièges.** Domination **locale** en $t$ seulement (sur $[a,b]$, pas sur $I$ entier). Pour des bornes variables $\int_{a(t)}^{b(t)}$, combiner avec [[ch05-primitive-integrale]] et la règle de la chaîne.

### [x] Plusieurs paramètres : dérivées partielles continues ⇒ $C^1$ — [[ch05-c1-ssi-partielles-continues]]
**Quand.** $\lambda=(\lambda_1,\dots,\lambda_n)$, ou paramètre dans un produit d'espaces normés. On calcule chaque $\partial_i\Phi$ sous l'intégrale (option précédente), on montre que ces dérivées partielles sont **continues** en $\lambda$, et la Proposition V.5.1 (poly, p. 106) donne $\Phi\in C^1$ avec $d\Phi_\lambda=\sum_i\partial_i\Phi(\lambda)\,d\lambda_i$.
**Justification.** C'est la seule façon propre de passer des dérivées partielles à la différentielle. Pour une fonctionnelle sur un espace de courbes, même schéma : calculer la dérivée directionnelle, puis montrer la continuité de $\gamma\mapsto d\hat L_\gamma$ ([[ch08-lhat-c1-differentielle]]).
**Pièges.** L'existence des dérivées partielles seule ne donne pas la différentiabilité ([[ch05-partielles-sans-differentiabilite]]), ni même la continuité : $\frac{xy}{x^2+y^2}$ prolongée par $0$ a des dérivées partielles en $(0,0)$ mais vaut $\frac12$ sur la diagonale.

### [x] Séries : convergence localement normale (et Weierstraß gratuit en complexe) — [[ch03-weierstrass-series]]
**Quand.** $\Phi=\sum f_n$. En **complexe**, $f_n$ holomorphes : la convergence localement normale de $\sum f_n$ suffit, et $\Phi'=\sum f_n'$ sans rien vérifier de plus (Théorème III.1.5, poly, p. 61). En **réel** : il faut la convergence localement uniforme de $\sum f_n'$ et la convergence en un point.
**Justification.** En complexe, la formule de Cauchy contrôle les dérivées par les fonctions ([[ch03-weierstrass-estimation-derivees]]) ; rien de tel en réel.
**Pièges.** Majorant indépendant de $\lambda$ sur chaque compact : pour $K\subset D(0,1)$, choisir $r<1$ avec $K\subset\bar D(0,r)$ et majorer par des termes en $r^n$.

### [ ] Théorème de Weierstraß appliqué à des fonctions d'une variable réelle — [[ch03-weierstrass]]
**Pourquoi ce n'est pas l'outil ici.** « Limite uniforme ⇒ dérivées convergent » est **propre aux fonctions holomorphes**. En réel, $\frac{\sin(n^2t)}n\to0$ uniformément mais les dérivées $n\cos(n^2t)$ divergent, et $\sqrt{t^2+1/n}\to|t|$ uniformément (écart $\le1/\sqrt n$) vers une fonction non dérivable en $0$.
**Quand il le serait.** Si les $f_n$ se prolongent holomorphiquement à un voisinage complexe de l'intervalle avec convergence localement uniforme **sur ce voisinage** : alors les dérivées réelles convergent aussi.

### [ ] Intégrale sur un chemin sans domination (Corollaire I.9.4) sur un domaine non compact — [[ch01-integrale-chemin-parametre]]
**Pourquoi ce n'est pas l'outil ici.** Le Corollaire I.9.4 (poly, p. 26) suppose un **chemin** (paramétré par un segment compact) et $F$ continue sur $\Omega\times U$ ; sur $]0,+\infty[$, ou avec une singularité intégrable en une borne ($x^{z-1}$ en $0$), la continuité ne fournit ni l'intégrabilité ni un contrôle uniforme : il faut une domination.
**Quand il le serait.** Intégrale de Cauchy sur un cercle, intégrale sur $[0,1]$ d'un intégrande continu sur $\Omega\times[0,1]$ (par exemple $\int_0^1e^{zx^2}\,dx$).

## Démarche

1. **Quelle est la nature du paramètre ?** Complexe → 2 ; réel → 3 ; plusieurs ou de dimension infinie → 4.
2. **Complexe.** Intégrale : domination locale sur des disques ou des bandes (I.9.1), ou chemin compact et intégrande continu (I.9.4). Série : convergence localement normale (III.1.5). Limite : localement uniforme (III.1.4). Les dérivées viennent ensuite **sans travail supplémentaire** : le dire.
3. **Réel.** Tenter d'abord la complexification : si l'intégrande se prolonge en une fonction holomorphe dominée sur une bande autour de $I$, on a $C^\infty$ d'un coup. Sinon : continuité (convergence dominée), $C^1$ (domination de $\partial_tf$ sur chaque compact), $C^k$ par récurrence.
4. **Plusieurs paramètres.** Dérivées partielles sous $\int$ + continuité de chacune ⇒ $C^1$ (V.5.1). Bornes variables : V.4.6 et la chaîne.
5. **Rédaction.** Écrire le majorant **explicite**, son intégrabilité (en $0$ et en $\infty$ séparément), et la phrase « $z_0$ étant arbitraire, $\Phi$ est holomorphe sur $\Omega$ ».
6. **Exploiter.** Avec $\Phi'$ en main, une intégration par parties donne souvent une équation différentielle linéaire satisfaite par $\Phi$ ; la résoudre avec la condition en un point (valeur en $0$, limite en $+\infty$). Pour une fonctionnelle de courbes, la différentielle obtenue mène à Euler–Lagrange ([[rfx-diff-euler-lagrange]]).

## Pièges

* Majorant qui dépend du paramètre (« $|f(t,x)|\le e^{tx-x^2}$ » n'est pas une domination).
* Domination exigée sur tout le domaine au lieu de localement, d'où une conclusion trop faible.
* Croire qu'une limite uniforme de fonctions $C^1$ réelles est $C^1$.
* Confondre « $C^\infty$ » et « développable en série entière » en réel (exemple $\int_0^\infty\frac{e^{-x}}{1+t^2x^2}dx$ en $0$).
* Dériver sous $\int$ avant d'avoir justifié l'intégrabilité de l'intégrande lui-même.

## Mini-exemple

*Énoncé.* Montrer que $\Phi(t)=\int_0^{+\infty}e^{-x^2+tx}\,dx$ est $C^\infty$ sur $\R$ et la calculer.

*Solution.* Posons $F(z,x)=e^{-x^2+zx}$, holomorphe en $z$, continue. Pour $|\Re z|\le M$, $|F(z,x)|=e^{-x^2+x\Re z}\le e^{-x^2+Mx}$, intégrable sur $[0,+\infty[$ ; tout $z_0$ a un disque $D(z_0,1)$ inclus dans une telle bande ($M=|\Re z_0|+1$). Par I.9.1, $\Phi$ se prolonge en une fonction entière, donc $\Phi\in C^\infty(\R)$ et $\Phi'(t)=\int_0^{+\infty}xe^{-x^2+tx}\,dx$. Par parties avec $xe^{-x^2}=\frac{d}{dx}\big(-\frac12e^{-x^2}\big)$ :
$$\Phi'(t)=\Big[-\tfrac12e^{-x^2+tx}\Big]_0^{+\infty}+\frac t2\int_0^{+\infty}e^{-x^2+tx}\,dx=\frac12+\frac t2\,\Phi(t),\qquad\Phi(0)=\frac{\sqrt\pi}2.$$
Variation de la constante ($\Phi=e^{t^2/4}H$, $H'=\frac12e^{-t^2/4}$) : $\Phi(t)=e^{t^2/4}\Big(\dfrac{\sqrt\pi}2+\dfrac12\displaystyle\int_0^te^{-s^2/4}\,ds\Big)$.
