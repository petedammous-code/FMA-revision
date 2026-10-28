---
id: rfx-edo-sous-variete-tangent
type: reflexe
situation: Montrer qu'une partie de R^N est une sous-variété (ou qu'elle n'en est pas une), donner sa dimension et calculer son espace tangent
chapters: [9, 6, 5]
---
## Situation

On donne une partie $S\subset\R^N$ : par des **équations** ($\{F=0\}$, $\{x^2+y^2-z^2=c\}$, $\{A\in\Mat_n(\R) : {}^tAA=I_n\}$, $\{\det A=1\}$, une intersection de deux surfaces), par un **paramétrage** ($u\mapsto x(u)$, une courbe $t\mapsto(\cos t,\sin 2t)$, une surface de révolution), comme un **graphe**, ou comme une image $\Phi(S_0)$. L'énoncé demande : « montrer que $S$ est une sous-variété de $\R^N$ et préciser sa dimension », « déterminer $T_pS$ », « donner une base de l'espace tangent », « l'ensemble est-il une sous-variété ? », « pour quelles valeurs de $c$ ? ».

## Options

### [x] Image réciproque d'une valeur régulière (submersion) — [[ch09-sous-variete-equation-valeur-reguliere]]
**Quand.** $S=\{x\in V : F(x)=a\}$ avec $F:V\to\R^{q}$ de classe $C^k$ sur un **ouvert** $V$ et $dF_p$ **surjective en tout point $p\in S$** (rang $q$). Alors $S$ est une sous-variété de dimension $N-q$, de classe $C^k$ (poly, Proposition IX.4.1, p. 152), et $T_pS=\ker dF_p$ ([[ch09-espace-tangent-graphe-equation]], Proposition IX.7.13, p. 162). Pour une seule équation : $\nabla F(p)\ne0$ sur $S$, et $T_pS=\nabla F(p)^\perp$. Version locale : il suffit que $S\cap V_p=\{\Psi_p=0\}$ près de chaque point avec $0$ valeur régulière ([[ch09-caracterisation-equations-locales]]).
**Justification.** Fonctions implicites : près de $p$, on résout $q$ coordonnées en fonction des $N-q$ autres, donc $S$ est localement un graphe.
**Pièges.** La surjectivité se vérifie **seulement sur $S$** (utiliser l'équation pour exclure les points critiques : $\nabla F=0$ en $0$, mais $0\notin S$). Pour des matrices, choisir le **bon espace d'arrivée** : $F(A)={}^tAA$ va dans $\Sym_n(\R)$ (dimension $\frac{n(n+1)}2$), pas dans $\Mat_n(\R)$, sinon $dF_A$ n'est jamais surjective.

### [x] Graphe d'une application — [[ch09-graphe-sous-variete]]
**Quand.** On peut **résoudre explicitement** : $S=\{(u,f(u)) : u\in U\}$ avec $f:U\to\R^{N-m}$ de classe $C^k$ sur un ouvert $U$ de $\R^m$ (éventuellement après permutation des coordonnées, [[ch09-localement-graphe-implique-sous-variete]]). Alors $S$ est une sous-variété de dimension $m$ et $T_{(u,f(u))}S=\{(h,df_u(h)) : h\in\R^m\}$ (poly, Proposition IX.5.1, p. 156).
**Justification.** $u\mapsto(u,f(u))$ est une immersion injective, d'inverse continu la projection sur les $m$ premières coordonnées.
**Pièges.** Il faut un **ouvert** $U$ de départ : $z=\sqrt{x^2+y^2}$ n'est pas $C^1$ en $(0,0)$, le graphe (le demi-cône) n'est pas une sous-variété en ce point.

### [x] Paramétrage : immersion **et** homéomorphisme sur l'image — [[ch09-sous-variete-def]]
**Quand.** $S$ est donnée comme image $x(U)$, ou on en a un paramétrage naturel (angles, coordonnées sphériques, révolution). Vérifier les **trois** conditions de la définition (poly, Définition IX.2.1, p. 148) : $x$ de classe $C^k$, $dx_q$ **injective** en tout $q$, et $x$ **homéomorphisme** de $U$ sur $V\cap S$. Alors $T_{x(q)}S=dx_q(\R^m)$, de base $\big(\frac{\partial x}{\partial u_1}(q),\dots,\frac{\partial x}{\partial u_m}(q)\big)$ ([[ch09-espace-tangent-image-dx]], [[ch09-base-espace-tangent]]).
**Justification.** C'est la définition ; pour l'homéomorphisme, donner une **formule continue** de l'inverse ou utiliser : une application continue injective d'un **compact** est un homéomorphisme sur son image (appliquer sur des petites boules fermées, puis vérifier que l'image d'un ouvert est ouverte dans $S$).
**Pièges.** Il faut un paramétrage local **autour de chaque point** de $S$ ; un seul paramétrage peut manquer des points (pôles de la sphère en coordonnées sphériques).

### [x] Montrer que ce n'est **pas** une sous-variété — [[ch09-contre-ex-croix]]
**Quand.** Il existe $p\in S$ où toutes les équations dégénèrent ($dF_p$ non surjective) et la figure a un point singulier (cône, croix, point de rebroussement, bord). Deux arguments du poly : (a) **topologique** : retirer $p$ et compter les composantes connexes d'un petit voisinage (poly, Exemple IX.2.12, p. 150 ; [[ch09-contre-ex-demi-droite]]) ; (b) **tangent** : exhiber des courbes $C^1$ tracées sur $S$ passant par $p$ dont les vitesses ne forment pas un sous-espace vectoriel, ou engendrent un espace de dimension trop grande (contradiction avec la Proposition IX.7.9 : $T_pS$ est un sous-espace de dimension $m$).
**Justification.** En un point d'une sous-variété, $S$ est localement homéomorphe à une boule de $\R^m$ et $T_pS$ est un sous-espace de dimension $m$.
**Pièges.** $dF_p$ non surjective **ne prouve pas** que $S$ n'est pas une sous-variété : $\{x^2=0\}$ est la droite $x=0$ alors que $d(x^2)=0$ sur cette droite. Il faut un vrai argument.

### [ ] Image d'une immersion injective — [[ch09-contre-ex-folium]]
**Pourquoi ce n'est pas l'outil ici.** Immersion + injectivité **ne suffit pas** : le folium de Descartes $t\mapsto\big(\frac{3t}{1+t^3},\frac{3t^2}{1+t^3}\big)$ sur $]-1,+\infty[$ est une immersion injective dont l'image n'est pas une sous-variété en $(0,0)$ (poly, Exemple IX.2.15, p. 150) ; la condition d'homéomorphisme manque.
**Quand il le serait.** **Localement** : l'image d'un petit voisinage d'un point où $dx_q$ est injective est une sous-variété ([[ch09-ex-image-immersion-locale]]) ; ou globalement si l'on prouve en plus que $x$ est un homéomorphisme sur son image.

### [ ] Théorème du rang constant — [[ch06-theoreme-rang-constant]]
**Pourquoi ce n'est pas l'outil ici.** Si $dF_p$ est surjective sur $S$, la Proposition IX.4.1 suffit ; le rang constant est plus lourd à vérifier (rang constant **sur un voisinage** dans $\R^N$, pas seulement sur $S$).
**Quand il le serait.** Équations **redondantes** : $dF_x$ de rang constant $r$ strictement inférieur au nombre d'équations sur un voisinage de $S$ ; alors $S$ est localement une sous-variété de dimension $N-r$. Souvent plus simple : supprimer les équations redondantes, ou changer d'espace d'arrivée.

## Démarche

1. **Identifier la forme des données** : équations, paramétrage, graphe, image par un difféomorphisme ([[ch09-ex-image-diffeomorphisme]]), produit ([[ch09-ex-produit]]), ouvert d'une sous-variété ([[ch09-ex-ouvert-de-sous-variete]]).
2. Si $S$ est donnée par des équations, alors poser $F$, calculer $dF_x$ (matrice jacobienne), chercher les points où elle n'est pas surjective, et vérifier qu'ils ne sont **pas sur $S$** (ou les traiter à part). Dimension $=N-$(nombre d'équations indépendantes).
3. Si l'on peut résoudre une variable explicitement, alors graphe (le plus court à rédiger).
4. Si $S$ est un paramétrage, alors vérifier immersion et homéomorphisme ; sinon chercher des équations ou des graphes locaux.
5. Si un point est suspect, alors tester les deux obstructions (composantes connexes, vitesses de courbes).
6. **Espace tangent** : $\ker dF_p$ (équations), graphe de $df_u$ (graphe), $\mathrm{Im}\,dx_q$ (paramétrage) ; contrôler que la dimension trouvée est $m$. Pour les groupes de matrices, dériver une courbe $A(t)$ de $S$ avec $A(0)=A_0$ : par exemple $T_{I_n}\{{}^tAA=I_n\}=\{H : H+{}^tH=0\}$.

## Pièges

* Vérifier la surjectivité de $dF$ sur tout $\R^N$ (inutile, et souvent faux en des points hors de $S$).
* Oublier de donner la **dimension** (c'est une question à part entière).
* Confondre espace tangent vectoriel $T_pS$ (passe par $0$) et espace tangent affine $p+T_pS$ ([[ch09-notation-tps]]).
* Pour une intersection de deux surfaces : il faut l'**indépendance** des deux gradients en chaque point de l'intersection (transversalité), pas seulement leur non-nullité.
* Paramétrage non injectif (point double, [[ch09-contre-ex-point-multiple]]) ou non homéomorphique (folium).
* Une sous-variété n'est ni supposée fermée ni connexe ([[ch09-remarque-fermeture]]).

## Mini-exemple

*Énoncé.* Pour $c\in\R$, $S_c=\{(x,y,z)\in\R^3 : x^2+y^2-z^2=c\}$. Pour quels $c$ est-ce une sous-variété ? Donner $T_pS_c$.

*Solution.* $F(x,y,z)=x^2+y^2-z^2$ est $C^\infty$, $dF_p(h,k,l)=2(xh+yk-zl)$, surjective sur $\R$ sauf en $p=0$. Si $c\ne0$, $0\notin S_c$ : $c$ est valeur régulière, $S_c$ est une surface (dimension $2$) et $T_pS_c=\{(h,k,l) : xh+yk-zl=0\}$. Si $c=0$ (cône) : $0\in S_0$. Les courbes $t\mapsto t(\cos\theta,\sin\theta,\pm1)$ sont tracées sur $S_0$, passent par $0$, de vitesses $(\cos\theta,\sin\theta,\pm1)$ ; parmi elles $(1,0,1)$, $(-1,0,1)$, $(0,1,1)$ sont libres (déterminant $-2$). Si $S_0$ était une sous-variété de dimension $m$ près de $0$, $T_0S_0$ serait un sous-espace de dimension $m$ contenant ces trois vecteurs, donc $m=3$ et $S_0$ serait un voisinage de $0$ dans $\R^3$ (un paramétrage de dimension $3$ est un difféomorphisme local par inversion locale) ; or $(0,0,\eps)\notin S_0$ pour $\eps\ne0$. Donc $S_0$ n'est pas une sous-variété ; $S_0\setminus\{0\}$ en est une.
