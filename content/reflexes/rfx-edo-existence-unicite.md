---
id: rfx-edo-existence-unicite
type: reflexe
situation: Montrer qu'un problème de Cauchy (EDO d'ordre 1 ou supérieur, système, équation matricielle) admet une unique solution maximale
chapters: [7, 6, 5]
---
## Situation

On donne une équation différentielle et une condition initiale : $\alpha'=X(t,\alpha)$, $\alpha(t_0)=x_0$ ; ou bien $y''=f(t,y,y')$ avec $y(t_0)=a$, $y'(t_0)=b$ ; ou un système dans $\R^N$ ; ou une équation matricielle $M'=A(t)M+M B(t)$, $M(0)=M_0$ dans $\Mat_n(\R)$ ; parfois une équation intégrale $\alpha(t)=x+\int_{t_0}^tX(s,\alpha(s))\,ds$. L'énoncé demande : « montrer qu'il existe une unique solution maximale », « justifier l'existence et l'unicité d'une solution définie au voisinage de $0$ », « montrer que le problème est bien posé ». Mots-clés : *unique solution*, *solution maximale*, *condition initiale*, *(Cours)*. C'est presque toujours la **question d'amorce** d'un exercice d'EDO : elle rapporte des points si les hypothèses sont vérifiées **explicitement**.

## Options

### [x] Théorème de Cauchy–Lipschitz (local) — [[ch07-cauchy-lipschitz]]
**Quand.** $X:I\times U\to E$ est **continue**, $I$ intervalle ouvert, $U$ **ouvert** d'un Banach $E$ (en pratique $\R^N$ ou $\Mat_n(\R)$), et $X$ est **localement lipschitzienne en la seconde variable** ([[ch07-localement-lipschitzien-def]]) : constante $k$ valable sur un voisinage $J_0\times U_0$ de chaque point. Le critère pratique : **$X$ de classe $C^1$** sur $I\times U$ suffit ([[ch07-restriction-domaine-c1-lipschitz]], par les accroissements finis). Conclusion : pour $(t_0,x)$ voisin de $(\tau_0,x_0)$, une unique solution sur $]t_0-\epsilon,t_0+\epsilon[$, avec $\epsilon$ **uniforme** (poly, Théorème VII.2.1, p. 128).
**Justification.** La solution est un point fixe de l'opérateur intégral de Picard $\varphi\mapsto x+\int_{t_0}^tX(s,\varphi(s))\,ds$ ([[ch07-equation-integrale]]), qui est $\tfrac12$-contractant sur un petit intervalle ([[ch07-lemme-operateur-integral]]).
**Pièges.** Vérifier que le domaine $U$ est **ouvert** (pour $\ln x$ ou $1/x$ : $U=\,]0,+\infty[$, pas $[0,+\infty[$). Polynômes, $\exp$, $\sin$, fractions à dénominateur non nul, produits matriciels : $C^\infty$, donc on écrit une phrase et c'est fini. Les points dangereux sont ceux où $X$ contient $\abs{x}^{a}$ avec $0<a<1$, $\sqrt{x}$, $x\ln\abs{x}$ : là, $X$ est continue mais pas lipschitzienne.

### [x] Courbe intégrale maximale et unicité globale — [[ch07-courbe-integrale-maximale-def]]
**Quand.** L'énoncé dit « solution **maximale** » ou veut identifier deux solutions sur des intervalles différents. Sous les hypothèses de Cauchy–Lipschitz, deux courbes intégrales de même condition initiale coïncident sur l'**intersection** de leurs intervalles ([[ch07-unicite-globale]], Proposition VII.3.1, p. 134) ; la réunion de tous les intervalles d'existence donne $J_{\tau_0}(x_0)$, ouvert, et une unique solution $\alpha_{\tau_0,x_0}$ définie dessus (poly, Définition VII.3.3, p. 134).
**Justification.** L'ensemble des instants où deux solutions coïncident est fermé (continuité) et ouvert (unicité locale) dans l'intervalle connexe $J_1\cap J_2$.
**Pièges.** Toute solution est la **restriction** de la solution maximale : c'est la phrase à écrire. L'intervalle maximal est **ouvert** et contenu dans $I$ ; il n'est pas forcément $I$ (voir [[rfx-edo-globale-explosion]]).

### [x] Réduction d'une équation d'ordre $k$ à un système d'ordre $1$ — [[ch07-reduction-ordre-un]]
**Quand.** Équation $y^{(k)}=f(t,y,\dots,y^{(k-1)})$ ou système mécanique $x''=-\nabla V(x)$ (ou une équation d'Euler–Lagrange, [[ch08-systeme-premier-ordre-cauchy-lipschitz]]). On pose $Y=(y,y',\dots,y^{(k-1)})$ et $Y'=\big(y',\dots,y^{(k-1)},f(t,Y)\big)$ (poly, Formule (VII.1.2), p. 127). La condition initiale porte sur **toutes** les composantes de $Y$.
**Justification.** $Y\mapsto(Y_2,\dots,Y_k,f(t,Y))$ a la régularité de $f$ ; Cauchy–Lipschitz s'applique au système.
**Pièges.** Pour l'ordre $2$, il faut **deux** conditions ($y(t_0)$ et $y'(t_0)$) ; avec une seule, il y a une famille de solutions. Une condition aux deux bouts ($y(0)=y(1)=0$) n'est **pas** un problème de Cauchy.

### [x] Cas linéaire, ou champ globalement lipschitzien : point fixe sur tout l'intervalle — [[ch06-point-fixe-iteree-contractante]]
**Quand.** $X(t,x)=A(t)x+b(t)$ avec $A:I\to\mathcal L(E)$, $b:I\to E$ continues (systèmes linéaires, $M'=A(t)M$), ou plus généralement $\norm{X(t,x)-X(t,y)}\le k(t)\norm{x-y}$ sur $I\times E$ entier avec $k$ continue. On obtient directement une unique solution **définie sur tout $I$**.
**Justification.** Sur $[a,b]\subset I$, l'opérateur de Picard $T$ vérifie par récurrence $\norm{T^n\varphi-T^n\psi}_\infty\le\frac{(K(b-a))^n}{n!}\norm{\varphi-\psi}_\infty$ avec $K=\sup_{[a,b]}k$ ; une itérée est contractante, d'où un unique point fixe dans $C^0([a,b],E)$ (poly, Exercice VI.4.1, p. 121). On recolle quand $[a,b]$ grandit.
**Pièges.** Le champ $x\mapsto x^2$ est localement lipschitzien mais **pas** globalement : on n'a alors qu'une solution maximale, éventuellement non globale.

### [ ] Théorème de Peano (continuité seule) — [[ch07-peano-non-unicite]]
**Pourquoi ce n'est pas l'outil ici.** Peano donne seulement l'**existence** (et n'est pas démontré dans le poly) ; l'unicité est fausse en général : $\alpha'=2\abs{\alpha}^{1/2}$, $\alpha(0)=0$ a les solutions $0$ et $\mathrm{signe}(t)\,t^2$ (poly, Remarque VII.2.5, p. 129).
**Quand il le serait.** Quand on demande de **construire un contre-exemple** à l'unicité, ou de montrer qu'en un point où $X$ n'est pas lipschitzienne plusieurs solutions partent du même point.

### [ ] Théorème des fonctions implicites — [[ch06-fonctions-implicites]]
**Pourquoi ce n'est pas l'outil ici.** Il ne produit pas de solution d'EDO ; il ne sert qu'à **mettre sous forme résolue** une équation implicite $f(t,\alpha,\alpha')=0$.
**Quand il le serait.** Si l'énoncé donne une équation implicite avec $\frac{\partial f}{\partial v}(t_0,x_0,v_0)$ inversible : on résout localement $\alpha'=g(t,\alpha)$ avec $g$ de classe $C^1$, puis on applique Cauchy–Lipschitz ([[ch07-equations-implicites-remarque]]). Sans cette inversibilité, l'unicité peut tomber : $\alpha'^2=4\alpha$ a deux solutions nulles en $0$.

## Démarche

1. **Mettre sous forme résolue d'ordre 1** : $\alpha'=X(t,\alpha)$ sur $I\times U$. Si l'ordre est $k\ge2$, alors réduire ([[ch07-reduction-ordre-un]]). Si l'équation est implicite, alors fonctions implicites d'abord.
2. **Nommer** $E$, $I$ (intervalle ouvert), $U$ (ouvert), et écrire $X$ explicitement.
3. Si $X$ est $C^1$ sur $I\times U$ (cas de 95 % des énoncés) alors écrire : « $X$ est $C^1$, donc localement lipschitzienne en $x$ (Remarque VII.2.2) ; par Cauchy–Lipschitz et la Proposition VII.3.1, il existe une unique solution maximale $\alpha:J\to U$, $J$ intervalle ouvert contenant $t_0$, et toute solution en est une restriction ».
4. Sinon, repérer les points où la régularité tombe. Si la condition initiale est **hors** de ces points, alors restreindre $U$ à un ouvert où $X$ est $C^1$ ; l'unicité vaut tant que la solution reste dans cet ouvert. Si la condition initiale est **sur** un tel point, alors chercher deux solutions explicites (non-unicité) ou prouver l'unicité à la main (Gronwall, monotonie).
5. Si $X$ est **affine en $x$** à coefficients continus (ou globalement lipschitzien), alors annoncer directement : solution unique définie sur **tout $I$**.
6. Si l'énoncé demande « existence locale » seulement, s'arrêter là ; s'il demande l'intervalle maximal, passer à [[rfx-edo-globale-explosion]].

## Pièges

* Oublier de dire **pourquoi** $X$ est localement lipschitzien : le correcteur attend « $X$ est $C^1$ (polynomiale) ».
* Prendre un domaine **fermé** ($x\ge0$) : Cauchy–Lipschitz est énoncé sur un ouvert.
* « Localement lipschitzien en $x$ » doit être **uniforme en $t$** près de $t_0$ : $X(t,x)=x/t$ pose problème en $t=0$, qu'il faut exclure de $I$.
* Confondre « unique solution sur $]t_0-\epsilon,t_0+\epsilon[$ » et « unique solution maximale » : c'est la Proposition VII.3.1 qui fait le lien.
* Pour une équation d'ordre $2$, oublier la condition sur $y'(t_0)$.
* Croire que « continue » suffit pour l'unicité (contre-exemple de Peano).

## Mini-exemple

*Énoncé.* (a) Montrer que $y''=-\sin y+\cos t$, $y(0)=a$, $y'(0)=b$ a une unique solution maximale. (b) Étudier $x'=3x^{2/3}$ (où $x^{2/3}=(x^{1/3})^2$) avec $x(0)=0$, puis $x(0)=1$.

*Solution.* (a) Avec $Y=(u,v)=(y,y')$ : $Y'=X(t,Y)=(v,\,-\sin u+\cos t)$ sur $\R\times\R^2$, champ $C^\infty$. Mieux : $\abs{\sin u_1-\sin u_2}\le\abs{u_1-u_2}$ donne $\norm{X(t,Y_1)-X(t,Y_2)}_2\le\norm{Y_1-Y_2}_2$, donc $X$ est **globalement** $1$-lipschitzien : unique solution, définie sur $\R$ entier.
(b) $X(x)=3x^{2/3}$ est continue mais $\abs{X(x)-X(0)}/\abs{x}=3\abs{x}^{-1/3}\to+\infty$ : pas lipschitzienne en $0$. Et en effet $x\equiv0$ et $x(t)=t^3$ ($x'=3t^2=3(t^3)^{2/3}$) sont deux solutions avec $x(0)=0$. Pour $x(0)=1$, on travaille sur $U=\,]0,+\infty[$ où $X$ est $C^\infty$ : unique solution maximale **dans $U$**, $x(t)=(1+t)^3$ sur $]-1,+\infty[$ (elle atteint le bord $0$ de $U$ quand $t\to-1$, où l'unicité redevient fausse).
