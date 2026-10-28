---
id: rfx-mix-holomorphe-application-plan
type: reflexe
situation: Étudier une fonction holomorphe comme application de R^2 dans R^2 (différentielle, jacobien, conformité, difféomorphisme local ou global)
chapters: [1, 4, 5, 6]
---
## Situation

On a une application $\Phi:U\subset\R^2\to\R^2$ donnée en coordonnées, $\Phi(x,y)=(P(x,y),Q(x,y))$, ou une fonction $f\in\Hol(\Omega)$ « vue comme application de $\R^2$ dans $\R^2$ ». On demande sa différentielle $d\Phi_{(x,y)}$, son jacobien, ses points critiques, de montrer que c'est un $C^\infty$-difféomorphisme local, ou un difféomorphisme de $U$ sur un ouvert $V$ à identifier, ou d'étudier l'image d'un quadrillage, les angles entre courbes, l'orthogonalité de deux familles de courbes.

Mots-clés : *jacobien*, *difféomorphisme de classe $C^\infty$*, *conserve les angles*, *réseau orthogonal*, *isothermes et lignes de flux*, *déterminer l'image*. Le réflexe : **reconnaître une fonction holomorphe cachée** derrière $(P,Q)$ ; tout devient alors un calcul sur le seul nombre complexe $f'(z)$.

## Options

### [x] Jacobienne d'une holomorphe = similitude directe, jacobien $=|f'|^2$ — [[ch01-similitude-conforme]]
**Quand.** $\Phi=(P,Q)$ vérifie les conditions de Cauchy réelles $P_x=Q_y$, $P_y=-Q_x$ ([[ch01-cauchy-riemann]]), autrement dit $\Phi(x,y)=f(x+iy)$ avec $f$ holomorphe. Test pratique : remplacer $x=\frac{z+\bar z}2$, $y=\frac{z-\bar z}{2i}$ et vérifier que $\bar z$ disparaît.
**Justification.** Par (I.2.4) ([[ch01-operateurs-dz-dzbar]]) avec $\partial f/\partial\bar z=0$ : $df_z(\omega)=f'(z)\,\omega$. Pour $f'(z)=\alpha+i\beta$, la matrice jacobienne ([[ch05-matrice-jacobienne]]) est $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$, de déterminant $\alpha^2+\beta^2=|f'(z)|^2\ge0$ (poly, Remarque I.2.5, p. 8). Points critiques de $\Phi$ = zéros de $f'$, isolés si $f$ n'est pas localement constante ([[ch04-zeros-derivee-isoles]]).
**Pièges.** $f'=P_x+iQ_x$ (et non $P_x+iP_y$) ; on a aussi $f'=\partial f/\partial x=-i\,\partial f/\partial y$. Si $\Phi$ n'est **pas** holomorphe, (I.2.4) donne encore $df_z(\omega)=a\omega+b\bar\omega$ avec $a=\partial_zf$, $b=\partial_{\bar z}f$, et le jacobien vaut $|a|^2-|b|^2$ : il peut être négatif ($\bar z$ a pour jacobien $-1$).

### [x] Inversion locale (holomorphe ou réelle) — [[ch01-inversion-locale-holomorphe]]
**Quand.** On veut un difféomorphisme **local** près de $z_0$ : il suffit que $f'(z_0)\ne0$, c'est-à-dire jacobien non nul.
**Justification.** Proposition I.4.4 (poly, p. 14) : $f$ est un biholomorphisme d'un voisinage $\Omega_1$ de $z_0$ sur l'ouvert $f(\Omega_1)$, et $(f^{-1})'=1/(f'\circ f^{-1})$. Version réelle équivalente : $\Phi$ est $C^\infty$ ([[ch01-holomorphe-analytique]]) et $d\Phi_{z_0}$ est inversible, donc le théorème d'inversion locale [[ch06-inversion-locale]] s'applique ; la différentielle de l'inverse est l'inverse d'une similitude, donc $\C$-linéaire, donc l'inverse est holomorphe ([[ch01-c-derivable-ssi-df-c-lineaire]]).
**Pièges.** Si $f'(z_0)=0$, $f$ n'est **injective sur aucun voisinage** de $z_0$ (elle s'écrit $h^N$, $N\ge2$, poly, Remarque I.14.3, p. 33) : contrairement au cas réel ($x\mapsto x^3$), un point critique d'une holomorphe n'est jamais un point d'injectivité locale.

### [x] Injectivité + holomorphie ⇒ biholomorphisme (donc difféomorphisme global) — [[ch01-bijection-holomorphe-reciproque-holomorphe]]
**Quand.** On demande « $\Phi$ est un $C^\infty$-difféomorphisme de $U$ sur $V$ ». Plan en trois temps : (a) **injectivité** de $f$ sur $U$, prouvée à la main (factoriser $f(z_1)-f(z_2)$, périodicité, ou compter les antécédents, [[rfx-holo-injective-ouverte]]) ; (b) **image** $f(U)=V$ par double inclusion, souvent en exhibant l'inverse avec une détermination de $\mathrm{Log}$ ou de $\sqrt{\cdot}$ ; (c) conclusion : une bijection holomorphe entre ouverts a une réciproque holomorphe ($f'$ ne s'annule pas automatiquement).
**Justification.** Remarque I.14.3 (poly, p. 33) ; côté réel, c'est le théorème d'inversion globale [[ch06-inversion-globale]] (injective + différentielle partout inversible ⇒ difféomorphisme sur l'image ouverte).
**Pièges.** L'image se prouve dans les **deux** sens : $f(U)\subset V$ ne suffit pas. Le correcteur attend que l'injectivité soit démontrée, pas lue sur le jacobien.

### [x] Conservation des angles, lignes de niveau orthogonales — [[ch04-lignes-niveau-orthogonales]]
**Quand.** Questions géométriques : angle entre deux courbes images, image d'un quadrillage, orthogonalité des familles $\{P=c\}$ et $\{Q=c'\}$ (« équipotentielles et lignes de champ »).
**Justification.** Un vecteur tangent $\gamma'(0)$ est envoyé sur $f'(z_0)\gamma'(0)$ : rotation d'angle $\arg f'(z_0)$ et homothétie de rapport $|f'(z_0)|$ ([[ch04-holomorphe-conserve-angles]]). En coordonnées : $\nabla Q=(Q_x,Q_y)=(-P_y,P_x)$ est $\nabla P$ tourné de $\pi/2$, et $|\nabla P|=|\nabla Q|=|f'|$.
**Pièges.** Aux points où $f'(z_0)=0$, les angles sont **multipliés** par l'ordre $N$ du zéro de $f-f(z_0)$ : pour $z^2$ en $0$, les lignes $\{x^2-y^2=0\}$ et $\{2xy=0\}$ se coupent à $45°$, pas à $90°$.

### [ ] Inversion globale avec seulement « jacobien partout non nul » — [[ch06-inversion-globale]]
**Pourquoi ce n'est pas l'outil ici.** Un jacobien $|f'|^2>0$ partout ne donne **pas** l'injectivité : $\exp$ a pour jacobien $e^{2x}>0$ et n'est pas injective ($2i\pi$-périodique). Le Corollaire VI.3.3 (poly, p. 120) exige l'injectivité en hypothèse.
**Quand il le serait.** Une fois l'injectivité établie séparément, ou pour une application $\Phi$ **non holomorphe** (où la Remarque I.14.3 ne s'applique pas).

### [ ] Lemme de Morse au point où $f'(z_0)=0$ — [[ch06-lemme-de-morse]]
**Pourquoi ce n'est pas l'outil ici.** Morse concerne une fonction **à valeurs réelles** ; l'application $\Phi$ elle-même est, près d'un zéro d'ordre $N-1$ de $f'$, conjuguée à $z\mapsto z^N$ : elle est $N$ contre $1$, et c'est la Remarque I.14.3 qui décrit sa forme locale.
**Quand il le serait.** Pour la fonction réelle $P=\Re f$ en un point où $f'(z_0)=0$ et $f''(z_0)=a+ib\ne0$ : sa hessienne est $\begin{pmatrix}a&-b\\-b&-a\end{pmatrix}$, de trace nulle ($P$ est harmonique) et de déterminant $-|f''(z_0)|^2<0$, donc point col non dégénéré, de signature $(1,1)$.

## Démarche

1. **Reconnaître $f$.** Si $\Phi=(P,Q)$ est donnée, tester Cauchy réelles ou réécrire en $z$. Si c'est holomorphe, travailler en complexe ; sinon, passer par la méthode réelle ([[rfx-diff-diffeomorphisme]]) en gardant la formule $|\partial_zf|^2-|\partial_{\bar z}f|^2$.
2. **Différentielle et jacobien.** $d\Phi_z=$ multiplication par $f'(z)$, jacobien $|f'(z)|^2$. Points critiques : résoudre $f'(z)=0$.
3. **Local.** Si $f'(z_0)\ne0$ : biholomorphisme local (I.4.4), donc $C^\infty$-difféomorphisme local, et l'inverse a pour dérivée $1/f'$. Si $f'(z_0)=0$ : pas d'injectivité locale.
4. **Global.** Si l'on veut un difféomorphisme $U\to V$ : injectivité à la main, puis image exacte par double inclusion, puis Remarque I.14.3 (ou VI.3.3).
5. **Géométrie.** Angles conservés là où $f'\ne0$ ; images des droites $x=c$, $y=c'$ = lignes de niveau de $\Re f^{-1}$, $\Im f^{-1}$ ; si l'énoncé rappelle la formule du changement de variables, l'aire de $f(U)$ vaut $\iint_U|f'|^2\,dx\,dy$ pour $f$ injective.

## Pièges

* Lire l'injectivité sur le jacobien (l'exemple $\exp$ le réfute).
* Écrire $f'=P_x+iP_y$ : c'est $P_x-iP_y$ (car $Q_x=-P_y$).
* Oublier que la conformité est **locale** et ne vaut qu'aux points où $f'\ne0$.
* Identifier l'image par une seule inclusion, ou utiliser une détermination de la racine carrée discontinue sur le domaine.
* Pour une $\Phi$ non holomorphe (avec du $\bar z$), affirmer que le jacobien est $|f'|^2$.

## Mini-exemple

*Énoncé.* $\Phi(x,y)=(x^2-y^2+x,\;2xy+y)$ sur $U=\{x>-\frac12\}$. Montrer que $\Phi$ est un $C^\infty$-difféomorphisme de $U$ sur $\R^2\setminus\,]-\infty,-\frac14]\times\{0\}$.

*Solution.* $\Phi(x,y)=f(x+iy)$ avec $f(z)=z^2+z$ (on a bien $\Re(z^2+z)=x^2-y^2+x$ et $\Im(z^2+z)=2xy+y$). Jacobien : $|f'(z)|^2=|2z+1|^2=(2x+1)^2+4y^2>0$ sur $U$. Injectivité : $f(z_1)=f(z_2)\iff(z_1-z_2)(z_1+z_2+1)=0$, et $\Re(z_1+z_2+1)>0$ sur $U$, donc $z_1=z_2$. Image : $f(z)=\zeta^2-\frac14$ avec $\zeta=z+\frac12$ décrivant $\{\Re\zeta>0\}$, et $\zeta\mapsto\zeta^2$ envoie ce demi-plan sur $\C\setminus\,]-\infty,0]$ (inverse : racine carrée principale) ; donc $f(U)=\C\setminus\,]-\infty,-\frac14]$, d'inverse $w\mapsto-\frac12+\sqrt{w+\frac14}$. Bijection holomorphe, donc biholomorphisme (Remarque I.14.3), donc $C^\infty$-difféomorphisme.
