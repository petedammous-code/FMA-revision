---
id: rfx-mix-sous-variete-holomorphe
type: reflexe
situation: Reconnaître une sous-variété définie par des équations ou un paramétrage holomorphes (fibres de f, courbes de niveau de Re f, courbes complexes de C^2, surfaces minimales de Weierstrass–Enneper)
chapters: [9, 4, 6, 1]
---
## Situation

On a une partie $S$ de $\C\simeq\R^2$, de $\C^2\simeq\R^4$ ou de $\R^3$ décrite par des données holomorphes : une fibre $f^{-1}(\{w_0\})$, une courbe de niveau $\{\Re f=c\}$ ou $\{|f|=c\}$, une « courbe complexe » $\{(z,w)\in\C^2 : F(z,w)=0\}$ avec $F$ polynomiale, l'image d'un paramétrage $z\mapsto X(z)=\Re\int_{z_0}^z\varphi(w)\,dw$ (Weierstrass–Enneper). On veut : montrer que $S$ est une sous-variété, donner sa **dimension réelle**, son espace tangent, l'écrire localement comme un graphe, repérer les points singuliers, puis souvent chercher un extremum sur $S$.

Le réflexe : **calculer avec le rang complexe**. Une application $\C$-linéaire $\C^n\to\C^k$ est surjective comme application $\R$-linéaire si et seulement si elle l'est comme application $\C$-linéaire ; la codimension réelle est alors $2k$.

## Options

### [x] Valeur régulière, rang calculé en complexe — [[ch09-sous-variete-equation-valeur-reguliere]]
**Quand.** $S=F^{-1}(\{0\})$ avec $F:\Omega\subset\C^n\to\C^k$ holomorphe en chaque variable et $C^1$ (polynômes en $z_1,\dots,z_n$ notamment). Sa différentielle réelle est $dF_p(h)=\sum_j\frac{\partial F}{\partial z_j}(p)\,h_j$ (différentielles partielles [[ch05-differentielles-partielles]], chacune $\C$-linéaire), donc $\C$-linéaire.
**Justification.** Si la matrice complexe $\big(\frac{\partial F_i}{\partial z_j}(p)\big)$ est de rang $k$ en tout point de $S$, $dF_p$ est surjective de $\R^{2n}$ sur $\R^{2k}$ et la Proposition IX.4.1 (poly, p. 152) fait de $S$ une sous-variété de **dimension réelle $2(n-k)$**, d'espace tangent $T_pS=\ker dF_p$ ([[ch09-espace-tangent-graphe-equation]]), qui est un sous-espace **complexe**. Cas $n=k=1$ : la fibre d'une $f$ non constante sur un connexe est discrète (zéros isolés), sous-variété de dimension $0$ ([[ch09-ex-dimension-zero]]).
**Pièges.** Codimension réelle $2k$, pas $k$. Ne pas écrire la matrice réelle $2k\times2n$ : chaque coefficient complexe $a+ib$ y devient le bloc $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ et le rang réel est le double du rang complexe. Système à résoudre pour les points singuliers : $F=0$ **et** toutes les $\partial F/\partial z_j=0$.

### [x] Courbes de niveau de $\Re f$, $\Im f$, $|f|$ — [[ch04-lignes-niveau-orthogonales]]
**Quand.** $S=\{z\in\Omega : \Re f(z)=c\}$ : une **seule équation réelle**. Pour $u=\Re f$, Cauchy réelles donnent $f'=u_x-iu_y$, donc $|\nabla u|=|f'|$ : les points réguliers de $u$ sont les points où $f'\ne0$.
**Justification.** Hors des zéros de $f'$, $S$ est une sous-variété de dimension $1$ (IX.4.1), de tangente $\ker du$, orthogonale aux lignes $\{\Im f=c'\}$ ; c'est localement l'image par $f^{-1}$ d'une droite verticale. Pour $\{|f|=c\}$, $c>0$ : localement $\ln|f|=\Re\,\mathrm{Log}f$, de gradient de norme $|f'/f|$. En dimension supérieure, $\{\Re F=c\}$ avec $F:\C^n\to\C$ est une hypersurface réelle dès que $dF_p\ne0$ (une forme $\C$-linéaire non nulle est surjective sur $\C$, donc sa partie réelle l'est sur $\R$).
**Pièges.** En un point où $f'(z_0)=0$ et $\Re f(z_0)=c$, le niveau ressemble à $2N$ demi-branches qui se croisent ($\Re z^2=0$ est la croix $\{x=\pm y\}$) : ce n'est pas une sous-variété ([[ch09-contre-ex-croix]]).

### [x] Surface paramétrée holomorphiquement : immersion (Weierstrass–Enneper) — [[ch04-weierstrass-enneper-esquisse]]
**Quand.** $X(z)=X(z_0)+\Re\int_{[z_0,z]}\varphi(w)\,dw$ avec $\varphi:\Omega\to\C^3$ holomorphe, $\varphi\cdot\varphi=\varphi_1^2+\varphi_2^2+\varphi_3^2=0$. Alors $X_u-iX_v=\varphi$, $|X_u|=|X_v|$, $\langle X_u,X_v\rangle=0$, et $|X_u|^2=\frac12\sum_j|\varphi_j|^2$.
**Justification.** $dX_z$ est de rang $2$ si et seulement si $X_u\ne0$, c'est-à-dire $\varphi(z)\ne0$ ; alors $X$ est une immersion en $z$ et son image locale est une sous-variété de dimension $2$ ([[ch09-ex-image-immersion-locale]]). Avec les données $(f,g)$, $\varphi=\big((1-g^2)f,\,i(1+g^2)f,\,2gf\big)$ et $\sum_j|\varphi_j|^2=2|f|^2(1+|g|^2)^2$ : immersion là où $f\ne0$ ($g$ holomorphe).
**Pièges.** $X$ n'est bien définie que si la **condition de périodes** est satisfaite quand $\Omega$ n'est pas simplement connexe ([[ch04-condition-periodes]]). L'immersion ne donne qu'une sous-variété **locale** : l'image globale peut s'auto-intersecter (surface d'Enneper), cf. [[ch09-contre-ex-point-multiple]].

### [x] Graphe local d'une fonction holomorphe — [[ch09-graphe-sous-variete]]
**Quand.** $F(z,w)=0$ avec $\partial_wF(p)\ne0$ : les fonctions implicites, plus la $\C$-linéarité de la différentielle, donnent localement $w=\varphi(z)$ avec $\varphi$ holomorphe ([[rfx-mix-equation-parametre-complexe]]). Si plutôt $\partial_zF(p)\ne0$, on écrit $z=\psi(w)$.
**Justification.** Proposition IX.5.1 (poly, p. 156) : un graphe $C^k$ est une sous-variété ; ici dimension réelle $2$ dans $\R^4$, d'espace tangent le graphe de $h\mapsto\varphi'(z)h$, droite complexe.
**Pièges.** Le graphe est au-dessus du **plan** des $z$ (deux variables réelles), pas d'une droite.

### [ ] Conclure « pas une sous-variété » dès qu'il y a une valeur critique — [[ch09-point-critique-valeur-reguliere-def]]
**Pourquoi ce n'est pas l'outil ici.** La Proposition IX.4.1 est une condition **suffisante**. Pour $f(z)=z^2$, $0$ est valeur critique mais $f^{-1}(\{0\})=\{0\}$ est une sous-variété de dimension $0$ ; $\{w^2=0\}\subset\C^2$ a $dF=0$ partout sur lui, et c'est pourtant la droite complexe $\{w=0\}$ (changer d'équation).
**Quand il le serait.** Jamais seul : pour prouver qu'un ensemble **n'est pas** une sous-variété, il faut un argument propre (composantes connexes après retrait d'un point comme pour la croix, ou espace tangent qui n'est pas un sous-espace vectoriel).

### [ ] Multiplicateurs de Lagrange — [[ch09-multiplicateurs-lagrange]]
**Pourquoi ce n'est pas l'outil ici.** Ils **supposent** que $S$ est une sous-variété définie par une équation régulière et cherchent les points critiques d'une fonction sur $S$ ; ils ne prouvent pas que $S$ en est une.
**Quand il le serait.** À la question suivante, par exemple minimiser $|z|^2+|w|^2$ sur $\{F=0\}$ : avec les deux contraintes réelles $\Re F$, $\Im F$, les conditions s'écrivent $\bar z=\mu\,\partial_zF$, $\bar w=\mu\,\partial_wF$ avec $\mu\in\C$.

## Démarche

1. **Traduire** : $S\subset\C^n\simeq\R^{2n}$ ; repérer si l'équation est **complexe** ($F=0$, $k$ équations complexes = $2k$ réelles) ou **réelle** ($\Re F=c$, $|f|=c$ : une équation réelle), ou s'il s'agit d'un **paramétrage**.
2. **Équation complexe** : calculer les $\partial F/\partial z_j$ ; résoudre $F=0=\nabla F$. Sans solution : valeur régulière, $S$ sous-variété de dimension réelle $2(n-k)$, $T_pS=\ker dF_p$ sous-espace complexe. Localement graphe holomorphe par rapport à une variable où $\partial F/\partial z_j\ne0$.
3. **Équation réelle** $\Re F=c$ : régulière là où $dF_p\ne0$, hypersurface de dimension $2n-1$ ; dans $\C$, courbe là où $f'\ne0$.
4. **Paramétrage** : immersion ⇔ dérivée non nulle ($\varphi\ne0$ pour Weierstrass–Enneper) ; sous-variété locale ; pour une affirmation globale, injectivité et homéomorphisme sur l'image ([[ch09-contre-ex-folium]]).
5. **Points singuliers** : les examiner à part (changer d'équation, ou argument topologique).
6. **Ensuite** : espace tangent, graphe local, extrema (Lagrange).

## Pièges

* Annoncer une dimension réelle égale à la dimension complexe ($\{F=0\}\subset\C^2$ est une **surface** réelle, pas une courbe réelle).
* Calculer le rang de la matrice réelle en oubliant la structure en blocs, ou en confondant $\partial/\partial z$ et $\partial/\partial x$.
* Traiter $\{\Re f=c\}$ comme une équation complexe (codimension $2$ au lieu de $1$).
* Conclure « pas une sous-variété » d'un simple point critique.
* Oublier la condition de périodes pour un paramétrage de Weierstrass–Enneper sur un ouvert non simplement connexe.

## Mini-exemple

*Énoncé.* Montrer que $S=\{(z,w)\in\C^2 : w^2=z^3-z\}$ est une sous-variété de $\R^4$, donner sa dimension et $T_{(0,0)}S$.

*Solution.* $F(z,w)=w^2-z^3+z$ est polynomiale, $\partial_zF=1-3z^2$, $\partial_wF=2w$. Un point singulier de $S$ vérifierait $w=0$, $z^2=\frac13$, et alors $F=-z^3+z=z(1-z^2)=\frac23z\ne0$ : impossible. Donc $0$ est valeur régulière, et $S$ est une sous-variété de $\R^4$ de dimension réelle $2(2-1)=2$. En $p=(0,0)\in S$, $dF_p(h,k)=1\cdot h+0\cdot k$, d'où $T_pS=\ker dF_p=\{0\}\times\C$ (la droite complexe des $w$) ; comme $\partial_zF(p)=1\ne0$, $S$ est près de $p$ le graphe $z=\psi(w)$ d'une fonction holomorphe avec $\psi(w)=-w^2+O(w^6)$ (car $z=z^3-w^2$).
