---
id: rfx-mix-equation-parametre-complexe
type: reflexe
situation: Montrer qu'une équation F(λ, z) = 0 à paramètre complexe λ admet une solution z = φ(λ) qui dépend holomorphiquement de λ
chapters: [6, 2, 1, 3]
---
## Situation

On a une équation $F(\lambda,z)=0$ où $F$ est holomorphe en $z$ **et** en $\lambda$ : polynôme en $z$ à coefficients holomorphes en $\lambda$, équation transcendante ($z=\lambda e^z$, $e^z=\lambda z$, $z-\lambda\sin z=a$), perturbation $P(z)+\lambda Q(z)=0$. On connaît une solution $z_0$ pour $\lambda=\lambda_0$ (souvent $\lambda_0=0$). On veut : pour $\lambda$ proche de $\lambda_0$, ou pour $\lambda$ dans un disque **explicite**, l'existence et l'unicité d'une solution $\varphi(\lambda)$ dans un disque $D(z_0,r)$ donné, l'holomorphie de $\varphi$, sa dérivée, son développement en série entière.

Mots-clés : *racine simple*, *pour $|\lambda|$ assez petit*, *pour $|\lambda|<\rho$*, *unique solution dans $D(0,1)$*, *dépend holomorphiquement*, *développable en série entière*.

## Options

### [x] Fonctions implicites (réelles) puis $\C$-linéarité de $d\varphi$ — [[ch06-fonctions-implicites]]
**Quand.** Résultat **local** demandé et racine **simple** : $\partial_zF(\lambda_0,z_0)\ne0$. On voit $F$ comme application $C^1$ de $\R^2\times\R^2$ dans $\R^2$ (c'est le cas pour un polynôme ou une composée de fonctions holomorphes usuelles en $(\lambda,z)$).
**Justification.** La différentielle partielle en $z$ est la multiplication par $\partial_zF(\lambda_0,z_0)\ne0$, isomorphisme de $\R^2$ ; le Théorème VI.2.1 (poly, p. 118) donne $\varphi$ de classe $C^1$ avec $d\varphi_\lambda=-\big(\partial_zF\big)^{-1}\circ\partial_\lambda F$ en $(\lambda,\varphi(\lambda))$. C'est une composée de multiplications par des nombres complexes, donc $d\varphi_\lambda$ est $\C$-linéaire et $\varphi$ est holomorphe ([[ch01-c-derivable-ssi-df-c-lineaire]]), avec $\varphi'(\lambda)=-\dfrac{\partial_\lambda F}{\partial_zF}(\lambda,\varphi(\lambda))$.
**Pièges.** Le théorème réel ne donne que $\varphi\in C^1$ : **l'étape « $d\varphi$ est $\C$-linéaire » doit être écrite**. Les voisinages $U_0,V_0$ ne sont pas explicites : impossible d'en tirer « pour $|\lambda|<1/e$ ». Méthode sœur sans paramètre : [[rfx-diff-fonctions-implicites]].

### [x] Théorème de Rouché (existence et unicité quantitatives) — [[ch02-rouche]]
**Quand.** On veut un domaine **explicite** en $\lambda$ ou en $z$. On compare $z\mapsto F(\lambda,z)$ à une fonction simple $G$ (souvent $G=F(\lambda_0,\cdot)$, ou $G(z)=z-z_0$) sur le cercle $C(z_0,r)$ : si $|F(\lambda,z)-G(z)|<|G(z)|$ pour tout $z\in C(z_0,r)$, alors $F(\lambda,\cdot)$ et $G$ ont le même nombre de zéros dans $D(z_0,r)$.
**Justification.** Théorème II.8.4 (poly, p. 54) : le nombre de zéros est l'indice de $F(\lambda,\cdot)\circ C(z_0,r)$ autour de $0$, inchangé par une petite perturbation. Si $G$ a exactement un zéro, simple, dans le disque, $F(\lambda,\cdot)$ en a exactement un, **comptés avec multiplicité** : il est donc simple, et $\partial_zF(\lambda,\varphi(\lambda))\ne0$, ce qui permet d'enchaîner sur les fonctions implicites en **chaque** $\lambda$.
**Pièges.** Inégalité **stricte** sur **tout** le cercle, uniforme en $\lambda$ dans le domaine annoncé ; $F(\lambda,\cdot)$ doit être holomorphe sur un voisinage du disque fermé. Voir [[rfx-res-compter-zeros]] pour le choix du cercle.

### [x] Formule intégrale de la racine et holomorphie sous $\int$ — [[ch02-formule-residus]]
**Quand.** Une fois établi qu'il y a exactement une racine $\varphi(\lambda)$ dans $D(z_0,r)$, pour obtenir l'holomorphie **directement** sur tout le domaine, ou une formule de $\varphi$.
**Justification.** La fonction $z\mapsto z\,\partial_zF(\lambda,z)/F(\lambda,z)$ a un pôle simple en $\varphi(\lambda)$ de résidu $\varphi(\lambda)$ ([[ch02-principe-argument]] pour le cas $z\mapsto1$), d'où
$$\varphi(\lambda)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{z\,\partial_zF(\lambda,z)}{F(\lambda,z)}\,dz.$$
L'intégrande est continu en $(\lambda,z)$ et holomorphe en $\lambda$ tant que $F$ ne s'annule pas sur le cercle : [[ch01-integrale-chemin-parametre]] donne $\varphi$ holomorphe. Avec $z^k$ au lieu de $z$, on obtient la somme des puissances $k$-ièmes des racines, holomorphe **même si des racines se confondent**.
**Pièges.** Vérifier que $F(\lambda,z)\ne0$ sur le cercle pour $\lambda$ dans un **voisinage** de chaque $\lambda_1$ (raisonner localement en $\lambda$).

### [ ] Théorème de Hurwitz (forme globale) — [[ch03-hurwitz]]
**Pourquoi ce n'est pas l'outil ici.** Il porte sur une **suite** $f_n\to f$ et conclut à la non-annulation ou à l'injectivité de la limite ; il ne construit pas $\varphi$ et ne dit rien de sa régularité en un paramètre continu. Sa forme locale ([[ch03-hurwitz-zeros-locaux]]) n'est qu'un Rouché déguisé, qu'il vaut mieux appliquer directement.
**Quand il le serait.** Pour une suite de fonctions holomorphes : zéros ou injectivité de la limite, ou suite $\lambda_n\to\lambda_0$ (continuité de $\varphi$, pas holomorphie).

### [ ] Principe du prolongement analytique — [[ch01-prolongement-analytique]]
**Pourquoi ce n'est pas l'outil ici.** Il donne l'**unicité** d'une fonction holomorphe connue sur un ensemble à point d'accumulation ; il ne fabrique pas la solution $\varphi$ et ne prouve pas son existence.
**Quand il le serait.** Une fois $\varphi$ holomorphe construite, pour étendre une identité (une formule, une série) vraie pour $\lambda$ réel petit à tout le domaine connexe.

## Démarche

1. **Mettre l'équation sous la forme** $F(\lambda,z)=0$, $F$ holomorphe en chaque variable ; repérer $(\lambda_0,z_0)$ ; calculer $\partial_zF(\lambda_0,z_0)$.
2. **Si la racine est simple et qu'on veut un résultat local** : fonctions implicites + $\C$-linéarité ⇒ $\varphi$ holomorphe, $\varphi'=-\partial_\lambda F/\partial_zF$. Développement : dériver l'identité $F(\lambda,\varphi(\lambda))=0$, ou injecter $\varphi=\sum a_n(\lambda-\lambda_0)^n$ et identifier (licite car $\varphi$ est analytique, [[ch01-holomorphe-analytique]]).
3. **Si l'on veut un domaine explicite** : Rouché sur $C(z_0,r)$ uniformément pour $\lambda\in D(\lambda_0,\rho)$ ⇒ une seule racine, simple ; puis holomorphie par fonctions implicites en chaque $\lambda_1$ **plus unicité** (la branche locale reste dans $D(z_0,r)$ par continuité, donc coïncide avec $\varphi$), ou par la formule intégrale.
4. **Si la racine est multiple** ($\partial_zF(\lambda_0,z_0)=0$, ordre $m\ge2$) : Rouché donne $m$ racines proches, mais **pas de branche holomorphe en général** ($z^2=\lambda$). Ce qui reste holomorphe : les fonctions symétriques des racines (formule avec $z^k$).
5. **Si le paramètre est réel** ($\lambda\in\R$) : même raisonnement ; $\varphi$ est alors restriction d'une fonction holomorphe, donc $C^\infty$ et développable en série entière.
6. **Alternative** : si l'équation s'écrit $z=\lambda g(z)$ avec une contraction explicite, les itérées de Picard sont holomorphes en $\lambda$ et convergent uniformément, et le théorème de Weierstraß [[ch03-weierstrass]] conclut ([[ch06-point-fixe-parametre-cp]] ne donne que la régularité réelle).

## Pièges

* S'arrêter à « $\varphi$ est $C^1$ par le théorème des fonctions implicites » sans prouver l'holomorphie.
* Annoncer un domaine explicite ($|\lambda|<\rho$) en ne citant que les fonctions implicites, qui sont purement locales.
* Oublier que Rouché compte **avec multiplicité** : c'est précisément ce qui donne la simplicité de la racine.
* Appliquer Rouché avec une inégalité large, ou seulement en quelques points du cercle.
* Chercher une branche holomorphe près d'une racine double.

## Mini-exemple

*Énoncé.* Montrer que pour $|\lambda|<1/e$, l'équation $z=\lambda e^z$ a une unique solution $\varphi(\lambda)\in D(0,1)$, que $\varphi$ est holomorphe sur $D(0,1/e)$, et donner son développement à l'ordre $3$.

*Solution.* Sur $C(0,1)$, $|\lambda e^z|=|\lambda|e^{\Re z}\le|\lambda|e<1=|z|$ : par Rouché avec $G(z)=z$, la fonction $z-\lambda e^z$ a exactement un zéro dans $D(0,1)$, compté avec multiplicité, donc simple. En ce zéro, $\partial_z(z-\lambda e^z)=1-\lambda e^{\varphi}=1-\varphi(\lambda)\ne0$ car $|\varphi|<1$ : les fonctions implicites en chaque $\lambda_1$ donnent une branche holomorphe qui reste dans $D(0,1)$ près de $\lambda_1$, donc égale à $\varphi$ par unicité ; ainsi $\varphi\in\Hol(D(0,1/e))$. On a $\varphi(0)=0$ ; en injectant $\varphi=\lambda+a_2\lambda^2+a_3\lambda^3+O(\lambda^4)$ dans $\varphi=\lambda e^{\varphi}=\lambda\big(1+\varphi+\frac{\varphi^2}2+\dots\big)=\lambda+\lambda^2+\frac32\lambda^3+O(\lambda^4)$, on obtient
$$\varphi(\lambda)=\lambda+\lambda^2+\tfrac32\lambda^3+O(\lambda^4).$$
