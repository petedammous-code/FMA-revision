---
id: rfx-mix-flot-champ-holomorphe
type: reflexe
situation: Étudier le flot d'un champ de vecteurs holomorphe z' = f(z), ou une équation différentielle à coefficients ou paramètre holomorphes
chapters: [7, 1, 2, 5]
---
## Situation

Trois formes typiques d'énoncé :
* un champ de vecteurs du plan $X(x,y)=(P,Q)$ avec $P+iQ=f(x+iy)$, $f$ holomorphe, c'est-à-dire l'équation $z'(t)=f(z(t))$ en **temps réel** $t$ ;
* une famille d'équations $\alpha'=X_\lambda(t,\alpha)$ dont le champ dépend holomorphiquement d'un paramètre $\lambda\in\C$ (ou de la condition initiale $x_0\in\C^n$) ;
* une équation en **variable complexe** $w'(z)=a(z)w(z)+b(z)$, $w''+a(z)w=0$, à coefficients holomorphes, dont on cherche une solution holomorphe.

On veut : existence et unicité, trajectoires explicites, intervalle maximal, quantité conservée, holomorphie du flot en $x_0$ ou en $\lambda$, solution en série entière et son rayon.

## Options

### [x] Cauchy–Lipschitz dans $\C\simeq\R^2$ — [[ch07-cauchy-lipschitz]]
**Quand.** $z'=f(t,z)$ avec $f$ holomorphe en $z$ (et continue en $(t,z)$, $C^1$ en $z$) : $f$ est $C^1$ au sens réel, donc localement lipschitzienne ([[ch07-restriction-domaine-c1-lipschitz]]) ; $\C$ est un espace de Banach réel de dimension $2$.
**Justification.** Théorème VII.2.1 (poly, p. 128), puis unicité globale [[ch07-unicite-globale]] et lemme des bouts [[ch07-lemme-des-bouts]] pour l'intervalle maximal. Les équilibres sont les zéros de $f$ ; par unicité, une trajectoire issue d'un point où $f\ne0$ n'atteint jamais un zéro de $f$. Linéarisation en un équilibre $z^*$ : $dX_{z^*}$ est la multiplication par $f'(z^*)=a+ib$, de valeurs propres $a\pm ib$ (foyer attractif si $a<0$, répulsif si $a>0$, rotation si $a=0$ pour la partie linéaire).
**Pièges.** Le temps $t$ est **réel** : le Cauchy–Lipschitz du poly ne traite pas une équation en variable complexe $z$. Écrire le champ réel $(P,Q)$ si l'énoncé le demande ; pour un champ donné en $(x,y)$, tester Cauchy réelles avant de parler de $f$.

### [x] Redresser le champ par une primitive de $1/f$ — [[ch01-derivee-f-rond-gamma]]
**Quand.** Champ autonome $z'=f(z)$, $f(z_0)\ne0$, et $G$ holomorphe avec $G'=1/f$ sur un ouvert contenant la trajectoire (sur un disque : [[ch01-primitive-locale]] ; sur un simplement connexe sans zéro de $f$ : [[ch02-primitive-simplement-connexe]]).
**Justification.** Par le Lemme I.5.10 (poly, p. 17), $(G\circ z)'(t)=G'(z(t))\,z'(t)=1$, donc $G(z(t))=G(z_0)+t$ : **dans la carte $G$, le flot est la translation $w\mapsto w+t$**. Conséquences : $\Im G$ est une intégrale première, les trajectoires sont les lignes de niveau de $\Im G$, orthogonales à celles de $\Re G$ ([[ch04-lignes-niveau-orthogonales]]), et $z(t)=G^{-1}(G(z_0)+t)$ est holomorphe en $z_0$.
**Pièges.** $G$ peut n'exister que localement (pour $f(z)=z$, $G=\mathrm{Log}$) : une formule obtenue ainsi doit être **vérifiée** comme solution sur tout l'intervalle, puis l'unicité conclut. L'intervalle maximal se lit sur la formule explicite (dénominateur qui s'annule, module qui explose).

### [x] Dépendance holomorphe en un paramètre : argument $\partial/\partial\bar\lambda$ — [[ch07-cauchy-lipschitz-parametres]]
**Quand.** $X(\lambda,t,x)$ holomorphe en $(\lambda,x)\in\C\times\C^n$ ; on veut $\lambda\mapsto\alpha_\lambda(t)$ (ou $x_0\mapsto F(t,t_0,x_0)$) holomorphe.
**Justification.** VII.2.8 (poly, p. 131) donne $\alpha$ de classe $C^p$ en $(\lambda,t)$ pour tout $p$, au sens réel. Posons $y=\partial\alpha/\partial\bar\lambda$. Par le lemme de Schwarz [[ch05-lemme-schwarz]], $\partial_t$ et $\partial_{\bar\lambda}$ commutent ; par la règle de la chaîne [[ch01-chaine-dz-dzbar]] et l'holomorphie de $X$ (les termes en $\partial X/\partial\bar\lambda$, $\partial X/\partial\bar x_j$ sont nuls),
$$y'(t)=\frac{\partial X}{\partial x}(\lambda,t,\alpha_\lambda(t))\,y(t),\qquad y(t_0)=0 ;$$
par unicité pour cette équation linéaire, $y\equiv0$ : $\alpha_\lambda(t)$ est holomorphe en $\lambda$.
**Pièges.** Cet argument **n'est pas dans le poly** : le rédiger entièrement. Travailler sur un intervalle de temps compact où la solution existe pour tous les $\lambda$ voisins (le domaine du flot est ouvert, [[ch07-flot-global-ouvert-regulier]]). La condition initiale doit être indépendante de $\lambda$ (ou holomorphe en $\lambda$).

### [x] Solution en série entière (équation en variable complexe) — [[ch01-serie-entiere-holomorphe]]
**Quand.** Équation linéaire en variable complexe à coefficients polynomiaux ou entiers ($w''+zw=0$, $w'=a(z)w$) : on cherche $w=\sum c_n(z-z_0)^n$.
**Justification.** On injecte la série, on obtient une récurrence sur les $c_n$, on minore le rayon (règle de d'Alembert, ou majoration $|c_n|\le CM^n$ par récurrence) ; sur le disque de convergence, la série est holomorphe et se dérive terme à terme : c'est une solution. Unicité : toute solution holomorphe est analytique ([[ch01-holomorphe-analytique]]) et ses coefficients vérifient la même récurrence. Sa restriction à une droite réelle $z=z_0+te^{i\theta}$ résout l'équation en temps réel $u'=e^{i\theta}a(z_0+te^{i\theta})u$, et coïncide donc avec la solution de Cauchy–Lipschitz.
**Pièges.** Le rayon n'est pas « évident » : il faut une majoration des $c_n$. Les estimées de Cauchy [[ch01-estimees-cauchy]] donnent la taille des coefficients de $a(z)$.

### [ ] Flot complet sur une sous-variété compacte — [[ch09-flot-complet-compacte]]
**Pourquoi ce n'est pas l'outil ici.** $\C$ (ou l'ouvert $\Omega$) n'est pas compact, et les champs holomorphes explosent souvent en temps fini ($z'=z^2$). Affirmer « défini pour tout $t$ » sans contrôle est faux.
**Quand il le serait.** Si l'on a montré que la trajectoire reste dans un compact (cercle invariant, $|z(t)|$ décroissant) : alors le lemme des bouts donne $J=\R$ ; ou si le champ est tangent à une sous-variété compacte.

### [ ] Théorème de Peano (existence sans unicité) — [[ch07-peano-non-unicite]]
**Pourquoi ce n'est pas l'outil ici.** Un champ holomorphe est $C^1$, donc localement lipschitzien : l'unicité est **toujours** acquise, et Peano n'apporte rien.
**Quand il le serait.** Pour un champ seulement continu en $z$ (du type $|z|^{1/2}$), où l'unicité peut tomber.

## Démarche

1. **Traduire en complexe.** $(P,Q)\leftrightarrow f=P+iQ$ ; vérifier l'holomorphie. Exemples : $(x^2-y^2,2xy)\leftrightarrow z^2$ ; $(-y,x)\leftrightarrow iz$ ; $(x,-y)\leftrightarrow\bar z$, **non** holomorphe.
2. **Existence, unicité, équilibres** : Cauchy–Lipschitz, zéros de $f$, linéarisation par $f'(z^*)$.
3. **Résolution explicite** (autonome, $f(z_0)\ne0$) : chercher $G$ avec $G'=1/f$ ; $G(z(t))=G(z_0)+t$ ; inverser ; vérifier la formule ; lire l'intervalle maximal et le comportement aux bornes (lemme des bouts).
4. **Trajectoires** : lignes de niveau de $\Im G$ ; isochrones : lignes de niveau de $\Re G$.
5. **Paramètre ou condition initiale complexe** : régularité réelle par VII.2.8, puis argument $\partial/\partial\bar\lambda$ ; ou formule explicite holomorphe.
6. **Variable complexe** : série entière + récurrence + rayon ; ou restriction aux rayons $z_0+te^{i\theta}$ pour se ramener au temps réel.

## Pièges

* Appliquer le Cauchy–Lipschitz du poly à une équation en variable complexe $z$ sans se ramener au temps réel.
* Utiliser une primitive $G$ multiforme (logarithme) sur tout le domaine sans précaution.
* Conclure $J=\R$ sans argument de confinement.
* Oublier que la condition initiale doit être holomorphe en $\lambda$ dans l'argument $\partial/\partial\bar\lambda$.
* Confondre le champ $f$ et son conjugué : $(x,-y)$ correspond à $\bar z$, pas à $z$.

## Mini-exemple

*Énoncé.* Résoudre $z'=z^2$, $z(0)=z_0\ne0$ ($t$ réel), donner l'intervalle maximal et les trajectoires.

*Solution.* Le champ $(x^2-y^2,2xy)$ est $C^1$ : Cauchy–Lipschitz s'applique, et $z(t)\ne0$ pour tout $t$ ($0$ est un équilibre). Avec $G(z)=-1/z$, $G'=1/z^2$, on obtient $-1/z(t)=-1/z_0+t$, soit
$$z(t)=\frac{z_0}{1-tz_0},$$
qui est bien solution tant que $1-tz_0\ne0$. Si $z_0\notin\R$, ce dénominateur ne s'annule jamais : $J=\R$ et $z(t)\to0$ quand $t\to\pm\infty$. Si $z_0>0$, $J=\,]-\infty,1/z_0[$ et $|z(t)|\to+\infty$ (cohérent avec le lemme des bouts) ; symétriquement si $z_0<0$. Intégrale première : $\Im G=\Im(-1/z)=\dfrac{y}{x^2+y^2}=c$ ; pour $c\ne0$, c'est le cercle $x^2+y^2-y/c=0$, de centre $(0,\frac1{2c})$, tangent à l'axe réel en $0$. Le flot $z_0\mapsto z_0/(1-tz_0)$ est holomorphe en $z_0$, comme prévu.
