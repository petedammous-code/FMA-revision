---
id: rfx-diff-taylor-ordre-deux
type: reflexe
situation: Utiliser une formule de Taylor ou un développement limité à l'ordre 2 dans un espace de Banach (estimer un reste, factoriser une fonction près d'un point critique, lemme de Morse)
chapters: [5, 6, 9]
---
## Situation

On a $f:U\to F$ de classe $C^2$ (ou plus) sur un ouvert d'un evn, et on a besoin de son comportement **à l'ordre $2$** autour d'un point $a$ : « donner un développement limité de $f$ à l'ordre $2$ en $a$ », « montrer que $\|f(a+h)-f(a)-df_a(h)\|\le C\|h\|^2$ », « montrer qu'il existe $B$ de classe $C^\infty$ à valeurs symétriques telle que $f(x)={}^tx\,B(x)\,x$ », « montrer qu'il existe un changement de variables $\psi$ tel que $f\circ\psi(u,v)=u^2-v^2$ », « décrire l'ensemble $\{f=f(a)\}$ près de $a$ ». La difficulté : **choisir la bonne formule de Taylor** selon qu'on veut un $o$, une constante explicite, ou une identité exacte.

## Options

### [x] Taylor–Young (local, qualitatif) — [[ch05-taylor-young]]
**Quand.** On veut un **équivalent** ou un **signe** local, une limite, un développement limité : $f(a+h)=f(a)+df_a(h)+\frac12d^2f_a(h,h)+o(\|h\|^2)$. Hypothèses minimales : $f$ une fois différentiable sur $U$ et deux fois différentiable **en $a$** (poly, Théorème V.5.13, p. 111). Outil des conditions d'ordre $2$ ([[rfx-diff-extremum-hessienne]]).
**Justification.** Accroissements finis appliqués au reste $R(h)=f(a+h)-f(a)-df_a(h)-\frac12d^2f_a(h,h)$, dont la différentielle est $o(\|h\|)$.
**Pièges.** Le $o$ ne donne **aucune constante** : inutilisable pour prouver une contraction, une inégalité globale, ou une convergence quantitative.

### [x] Taylor–Lagrange (inégalité avec constante) — [[ch05-taylor-lagrange]]
**Quand.** On veut une **majoration explicite** du reste : si $\|d^2f_x\|\le C$ sur le segment $[a,a+h]\subset U$, alors $\|f(a+h)-f(a)-df_a(h)\|\le\frac C2\|h\|^2$ (poly, Théorème V.5.12, p. 111). Sert pour les estimations de Newton, de l'erreur d'une linéarisation, des inégalités de convexité.
**Justification.** Lemme 1D (V.5.10) appliqué à $t\mapsto f(a+th)$.
**Pièges.** Le segment doit être dans $U$ et la borne valable **sur tout le segment**. Valable dans un evn quelconque (pas besoin de complétude).

### [x] Taylor avec reste intégral (identité exacte, « division ») — [[ch05-taylor-reste-integral]]
**Quand.** On veut **factoriser** ou garder la **régularité** du reste : pour $f$ de classe $C^{p+1}$ à valeurs dans un Banach, $f(a+h)=\sum_{j\le p}\frac{d^jf_a(h,\dots,h)}{j!}+\int_0^1\frac{(1-t)^p}{p!}d^{p+1}f_{a+th}(h,\dots,h)\,dt$ (poly, Théorème V.5.11, p. 111). Avec $a=0$, $f(0)=0$, $df_0=0$ sur une boule : $f(x)={}^tx\,B(x)\,x$ avec $B(x)=\int_0^1(1-t)\,\mathrm{Hess}_{tx}f\,dt$, symétrique, $C^\infty$ si $f$ l'est (dérivation sous l'intégrale), et $B(0)=\frac12\mathrm{Hess}_0f$.
**Justification.** Intégrations par parties successives sur $t\mapsto f(a+th)$ (Lemme V.5.9).
**Pièges.** Demande $C^{p+1}$ (pas seulement $p+1$ fois différentiable) et un but **complet** ; il faut un domaine **étoilé** en $a$ (boule) pour que $tx\in U$.

### [x] Lemme de Morse (forme normale au voisinage d'un point critique non dégénéré) — [[ch06-lemme-de-morse]]
**Quand.** $f:U\subset\R^m\to\R$ de classe $C^\infty$, $df_a=0$, $d^2f_a$ non dégénérée de signature $(r,s)$ : il existe un $C^\infty$-difféomorphisme $\psi$ d'un voisinage de $0$ sur un voisinage de $a$, $\psi(0)=a$, avec $f(\psi(h))=f(a)+\sum_{i\le r}h_i^2-\sum_{i>r}h_i^2$ (poly, Exercice VI.3.4, p. 120 ; version sur une sous-variété : [[ch09-lemme-morse-sous-variete]]). Conséquences : points critiques non dégénérés **isolés** ; en dimension $2$ au col ($r=s=1$), $\{f=f(a)\}$ est localement la réunion de **deux courbes $C^\infty$ transverses** ; au minimum ($s=0$), les lignes de niveau voisines sont des « cercles déformés ».
**Justification.** Translation et changement linéaire (Sylvester) pour avoir $a=0$, $f(0)=0$ et $\frac12\mathrm{Hess}_0f=I_{r,s}$ ; reste intégral ($f={}^txB(x)x$, $B(0)=I_{r,s}$), racine carrée lisse $\eta(S)$ de $S$ pour la congruence près de $I_{r,s}$ par inversion locale, puis $\varphi(x)=\eta(B(x))\,x$ a $d\varphi_0=\mathrm{Id}$ et l'on prend $\psi=\varphi^{-1}$.
**Pièges.** Exige la **non-dégénérescence** ; la signature est celle de $d^2f_a$ (compter les valeurs propres positives/négatives de la hessienne).

### [ ] Inégalité des accroissements finis (ordre 1) — [[ch05-accroissements-finis]]
**Pourquoi ce n'est pas l'outil ici.** Elle ne voit que $df$ : elle donne $\|f(a+h)-f(a)\|\le\sup\|df\|\,\|h\|$, un $O(\|h\|)$, et ne capte pas le **terme quadratique** $\frac12d^2f_a(h,h)$ dont on a besoin (signe, équivalent, développement limité, factorisation, Morse). Seule la simple majoration du reste d'ordre $1$ lui est accessible (voir ci-dessous).
**Quand il le serait.** Appliquée à $g=f-df_a$ (variante centrée) elle redonne une estimation d'ordre $2$ si $df$ est **lipschitzienne** : $\|f(a+h)-f(a)-df_a(h)\|\le M\|h\|^2$ (constante moins bonne que Taylor–Lagrange, mais hypothèse plus faible que $C^2$).

## Démarche

1. **Ce qu'on veut** : un signe/équivalent/limite alors Taylor–Young ; une inégalité avec constante alors Taylor–Lagrange (borne de $\|d^2f\|$ sur un convexe) ; une identité exploitable ou une factorisation régulière alors reste intégral.
2. **Calculer $d^2f_a(h,h)$** sans matrice : développer $f(a+th)$ en $t$ jusqu'à l'ordre $2$ ; le coefficient de $t^2$ est $\frac12d^2f_a(h,h)$ ([[ch05-formule-pratique-dpf]]).
3. **Composer les DL** (fonction implicite, inverse, composée) : écrire $\varphi(x)=a+L(x-x_0)+Q(x-x_0)+o$ et identifier dans l'équation, plutôt que de dériver deux fois des formules.
4. **Point critique non dégénéré, question géométrique** (lignes de niveau, changement de variables) alors Morse ; vérifier $df_a=0$ et $\det\mathrm{Hess}_af\ne0$, donner la signature.
5. **Point critique dégénéré** : aucune de ces formules à l'ordre $2$ ne conclut ; pousser le développement à l'ordre $3$ ou $4$ le long de directions bien choisies.

## Pièges

* Utiliser Taylor–Young (un $o$) pour une majoration **globale** ou une contraction : il faut Lagrange ou le reste intégral.
* Oublier le facteur $\frac1{2!}$ devant $d^2f_a(h,h)$.
* Appliquer le reste intégral avec $f$ seulement deux fois différentiable, ou sur un domaine non étoilé.
* Croire que Morse s'applique en un point critique dégénéré ($x^3$, $x^2y$...).
* En matrices : $d^2f_A(H,H)$ fait intervenir l'ordre des produits ($\mathrm{tr}(AH^2)$, pas $\mathrm{tr}(A)\,\mathrm{tr}(H^2)$).

## Mini-exemple

*Énoncé.* (a) Développement à l'ordre $2$ de $f(H)=\det(I+H)$ en $H=0$ dans $\mathrm M_n(\R)$. (b) Décrire $\{g=0\}$ près de $0$ pour $g(x,y)=x^2-y^2+y^3$.

*Solution.* (a) $\det(I+tH)=\prod_i(1+t\mu_i)$ ($\mu_i$ valeurs propres complexes de $H$) $=1+t\sum\mu_i+t^2\sum_{i<j}\mu_i\mu_j+O(t^3)$, et $\sum_{i<j}\mu_i\mu_j=\frac12\big((\mathrm{tr}H)^2-\mathrm{tr}(H^2)\big)$. Donc $df_0(H)=\mathrm{tr}H$, $d^2f_0(H,H)=(\mathrm{tr}H)^2-\mathrm{tr}(H^2)$, et Taylor–Young donne $\det(I+H)=1+\mathrm{tr}H+\frac12\big((\mathrm{tr}H)^2-\mathrm{tr}(H^2)\big)+o(\|H\|^2)$. Contrôle $n=2$, $H=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ : $\det(I+H)=1+a+d+ad-bc$ et $\frac12\big((a+d)^2-(a^2+2bc+d^2)\big)=ad-bc$. (b) $dg_0=0$, $\mathrm{Hess}_0g=\mathrm{diag}(2,-2)$ non dégénérée de signature $(1,1)$ : par Morse, $\{g=0\}$ est près de $0$ l'image de $\{h_1^2=h_2^2\}$ (deux droites) par un difféomorphisme, donc deux courbes $C^\infty$ transverses. Vérification : $x^2=y^2(1-y)$ ⇔ $x=\pm y\sqrt{1-y}$, deux courbes de pentes $\pm1$ en $0$.
