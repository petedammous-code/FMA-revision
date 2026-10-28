---
id: rfx-diff-point-fixe
type: reflexe
situation: Montrer qu'une équation non linéaire (algébrique, intégrale, fonctionnelle) admet une unique solution, éventuellement limite d'itérées
chapters: [6, 5, 7]
---
## Situation

On a une équation non linéaire $f(x)=y$ ou $x=T(x)$ dans un espace complet : $\R^n$, un espace de fonctions $C^0([0,a])$ muni de $\|\cdot\|_\infty$, $\ell^\infty$... Formes typiques : équation intégrale $u(t)=g(t)+\lambda\int_0^1K(t,s)\,h(u(s))\,ds$ (Fredholm) ou $u(t)=g(t)+\int_0^th(s,u(s))\,ds$ (Volterra), équation $x=\eps\,\phi(x)+c$, suite récurrente $x_{n+1}=T(x_n)$. L'énoncé : « montrer que l'équation admet une **unique** solution », « montrer que la suite converge et majorer l'erreur », « montrer que pour $|\lambda|$ petit... », « montrer que la solution dépend continûment / $C^1$ de $\lambda$ ».

## Options

### [x] Théorème du point fixe de Banach (Picard) — [[ch06-point-fixe-banach]]
**Quand.** On trouve $X$ **complet** (un fermé d'un Banach : boule fermée, ensemble de fonctions à valeurs dans un fermé, sous-espace affine fermé) tel que $T(X)\subset X$ et $d(T(x),T(y))\le a\,d(x,y)$ avec $a<1$ **uniforme** (poly, Théorème VI.1.1, p. 115). Conclusion : unique point fixe, limite des itérées depuis **n'importe quel** $x_0$, avec $d(x_m,x)\le\frac{a^m}{1-a}d(T(x_0),x_0)$.
**Justification.** Les itérées forment une suite de Cauchy (série géométrique) ; la limite est un point fixe par continuité ; l'unicité vient de $d(x,x')\le a\,d(x,x')$.
**Pièges.** Les **trois** hypothèses sont à écrire : complétude, stabilité, constante $<1$. Pour la **stabilité d'une boule** $\bar B(x_0,r)$ : si $\|T(x_0)-x_0\|\le(1-a)r$ et $T$ est $a$-lipschitzienne sur la boule, alors $\|T(x)-x_0\|\le\|T(x)-T(x_0)\|+\|T(x_0)-x_0\|\le ar+(1-a)r=r$. « $d(T(x),T(y))<d(x,y)$ » ne suffit pas : $T(x)=x+1/x$ sur $[1,+\infty[$ vérifie $|T(x)-T(y)|=|x-y|\,|1-\frac1{xy}|<|x-y|$ pour $x\ne y$ et n'a pas de point fixe. Un **ouvert** n'est pas complet.

### [x] Une itérée $T^n$ contractante (équations de Volterra) — [[ch06-point-fixe-iteree-contractante]]
**Quand.** $T$ n'est pas contractante mais ses itérées le deviennent, typiquement pour un opérateur **intégral à borne variable** : $T(u)(t)=g(t)+\int_0^th(s,u(s))\,ds$ sur $C^0([0,a])$ avec $h$ $L$-lipschitzienne en $u$. Par récurrence $|T^nu(t)-T^nv(t)|\le\frac{(Lt)^n}{n!}\|u-v\|_\infty$, et $\frac{(La)^n}{n!}<1$ pour $n$ grand, **sans condition de petitesse sur $a$** (poly, Exercice VI.4.1, p. 121).
**Justification.** Unique point fixe $x$ de $T^n$ ; $T(x)$ est aussi point fixe de $T^n$ ($T^n(Tx)=T(T^nx)=Tx$) donc $T(x)=x$.
**Pièges.** Variante équivalente : la **norme à poids** $\|u\|_\lambda=\sup_te^{-\lambda t}|u(t)|$, équivalente à $\|\cdot\|_\infty$, pour laquelle $T$ est $\frac L\lambda$-lipschitzienne. C'est le cœur de la preuve de Cauchy–Lipschitz ([[ch07-equation-integrale]]) : une EDO se réécrit comme point fixe.

### [x] Point fixe à paramètre (continuité, régularité $C^p$) — [[ch06-point-fixe-parametre-cp]]
**Quand.** L'équation dépend d'un paramètre $\lambda$ ($T_\lambda(x)=g(\lambda,x)$) et l'on demande la dépendance de la solution en $\lambda$ : continuité si $g$ est continue et $g_\lambda$ $a$-lipschitzienne uniformément ([[ch06-point-fixe-parametre-continu]]) ; classe $C^p$ si $g$ est $C^p$ sur $\Lambda\times X$ ($X$ fermé **convexe**) et $\|\partial_xg\|\le a<1$ ; alors $d\varphi_\lambda=(\mathrm{Id}-\partial_xg)^{-1}\circ\partial_\lambda g$ en $(\lambda,\varphi(\lambda))$ (poly, Théorème VI.1.4, p. 117).
**Justification.** Uniformité de la contraction en $\lambda$ ; Neumann pour $(\mathrm{Id}-\partial_xg)^{-1}$.
**Pièges.** Même hypothèse de stabilité $g(\lambda,X)\subset X$ **pour tout** $\lambda$. Le calcul de $d\varphi$ se retrouve en dérivant $\varphi(\lambda)=g(\lambda,\varphi(\lambda))$.

### [ ] Théorème d'inversion locale — [[ch06-inversion-locale]]
**Pourquoi ce n'est pas l'outil ici.** Il donne une solution de $f(x)=y$ seulement pour $y$ **proche** d'une valeur $f(x_0)$ déjà atteinte, et une unicité seulement dans un voisinage **non explicite** de $x_0$ ; l'énoncé « unique solution dans tout l'espace » exige un argument global.
**Quand il le serait.** Résolution **locale** près d'une solution connue, avec régularité de l'inverse ; ou en complément du point fixe pour obtenir la régularité $C^k$ de $y\mapsto x(y)$.

### [ ] Méthode de Newton — [[ch06-methode-de-newton]]
**Pourquoi ce n'est pas l'outil ici.** Elle demande davantage ($df$ lipschitzienne, $df_{x_0}$ inversible, $\|f(x_0)\|$ assez petit) et ne fournit qu'une solution **locale** : inutile quand une contraction globale est disponible.
**Quand il le serait.** On dispose d'une **solution approchée** $x_0$ (résidu $f(x_0)$ petit) et l'on veut une vraie solution proche avec convergence **quadratique** $\|x_{n+1}-z\|\le2CM\|x_n-z\|^2$.

## Démarche

1. **Réécrire** l'équation sous forme $x=T(x)$ (isoler la partie linéaire inversible : $f(x)=y$ ⇔ $x=x-L^{-1}(f(x)-y)$ avec $L\approx df$ ; une EDO ⇔ équation intégrale).
2. **Choisir l'espace** $X$ : complet (fermé d'un Banach) et stable ; en dimension infinie, une boule fermée de $C^0$ pour $\|\cdot\|_\infty$.
3. **Estimer la constante de Lipschitz** par le TAF ([[rfx-diff-accroissements-finis]]) ou à la main ($|\sin a-\sin b|\le|a-b|$...). Si $<1$ alors Banach. Si $T$ est de type Volterra alors itérée $T^n$ (ou norme à poids). Si la constante dépend d'un paramètre alors restreindre ($|\lambda|$ petit, boule petite) **explicitement**.
4. **Conclure** : existence, unicité **dans $X$**, convergence des itérées et vitesse $\frac{a^m}{1-a}\|T(x_0)-x_0\|$ si demandé.
5. **Paramètre** : point fixe à paramètre pour la continuité / régularité.
6. **Unicité dans tout l'espace** si $X$ n'est qu'une boule : montrer qu'une solution quelconque est forcément dans $X$ (estimation a priori), sinon ne revendiquer que l'unicité dans $X$.

## Pièges

* Oublier la stabilité $T(X)\subset X$ ou la complétude de $X$ (prendre une boule ouverte, ou $C^0$ muni d'une norme $L^1$).
* Constante de contraction qui dépend du point ou qui tend vers $1$.
* Revendiquer l'unicité globale alors qu'on n'a travaillé que dans une boule.
* Oublier que $T(u)$ doit être **continue** (si $X\subset C^0$) : la continuité d'une intégrale à paramètre se justifie.

## Mini-exemple

*Énoncé.* Montrer que $u(t)=1+\frac12\int_0^1\sin\big(t\,s\,u(s)\big)\,ds$ a une unique solution $u\in C^0([0,1])$, limite des itérées depuis $u_0=1$, et majorer $\|u_n-u\|_\infty$.

*Solution.* $X=C^0([0,1])$ muni de $\|\cdot\|_\infty$ est complet. $T(u)(t)=1+\frac12\int_0^1\sin(tsu(s))\,ds$ est continue en $t$ (intégrande continue sur le compact $[0,1]^2$), donc $T(X)\subset X$. Comme $|\sin a-\sin b|\le|a-b|$ : $|Tu(t)-Tv(t)|\le\frac12\int_0^1ts|u(s)-v(s)|\,ds\le\frac14\|u-v\|_\infty$. $T$ est $\frac14$-contractante : par Banach [[ch06-point-fixe-banach]], unique solution, limite des $u_n$. Enfin $\|u_1-u_0\|_\infty=\sup_t\frac12\big|\int_0^1\sin(ts)\,ds\big|\le\frac12\int_0^1s\,ds=\frac14$, d'où $\|u_n-u\|_\infty\le\frac{(1/4)^n}{1-1/4}\cdot\frac14=\frac13\,4^{-n}$.
