## CARD id=fc-ch01-001 ref=ch01-def-c-derivable tags=definition,enonce
### Q
Définir : $f$ est **$\C$-dérivable** en un point $z\in\Omega$, et la dérivée au sens complexe $f'(z)$.
### R
Soit $\Omega$ un ouvert non vide de $\C$ et $f:\Omega\to\C$ continue. $f$ est $\C$-dérivable (dérivable au sens complexe) en $z\in\Omega$ si la limite
$$\lim_{\omega\to 0}\frac{f(z+\omega)-f(z)}{\omega}$$
existe dans $\C$ ($\omega\to0$ **dans $\C$**, donc dans toutes les directions). On note alors $f'(z)$ cette limite. (poly, § I.1, p. 5)

Contre-exemple : pour $z\mapsto\bar z$, le taux vaut $\bar\omega/\omega$, égal à $1$ sur l'axe réel et à $-1$ sur l'axe imaginaire : pas de limite.

## CARD id=fc-ch01-002 ref=ch01-def-holomorphe tags=definition,enonce
### Q
Définir une fonction **holomorphe** sur un ouvert $\Omega$ et l'espace $\Hol(\Omega)$.
### R
Soit $\Omega$ un ouvert de $\C$. Une fonction **continue** $f:\Omega\to\C$ est holomorphe si elle est $\C$-dérivable **en tout point** de $\Omega$ et si $z\mapsto f'(z)$ est **continue** sur $\Omega$. $\Hol(\Omega)$ désigne l'espace vectoriel (sur $\C$) des fonctions holomorphes sur $\Omega$. (poly, Définition I.1.1, p. 5)

Ce sont les fonctions « de classe $C^1$ au sens complexe ».

## CARD id=fc-ch01-003 ref=ch01-def-holomorphe tags=hypothese,contre-exemple
### Q
Dans la Définition I.1.1, quel est le statut de l'hypothèse « $f'$ continue » ? Pourquoi exiger la $\C$-dérivabilité en **tout point d'un ouvert** ? Contre-exemples.
### R
* « $f'$ continue » est une hypothèse **de confort** : elle est automatiquement satisfaite dès que $f$ est $\C$-dérivable en tout point de $\Omega$ (théorème de Goursat, [[ch01-goursat]]). Le poly la garde car elle simplifie les premières preuves (formule de Cauchy).
* $\C$-dérivable en un point ne suffit pas : $z\mapsto|z|^2$ est $\C$-dérivable en $0$ et nulle part ailleurs, donc holomorphe sur **aucun** ouvert non vide (poly, Exemple I.2.7, p. 9).
* La régularité réelle ne suffit pas : $z\mapsto\bar z$ est $C^\infty$ au sens réel et $\C$-dérivable nulle part.

## CARD id=fc-ch01-004 ref=ch01-def-differentiable-r2 tags=definition,enonce
### Q
Définir la différentiabilité (réelle) de $f=P+iQ:\Omega\to\C$ en $z=x+iy$, la différentielle $df_z$, sa matrice, et la classe $C^1$.
### R
On identifie $\C$ à $\R^2$ ($x=\Re(z)$, $y=\Im(z)$) et $f(x,y)=(P(x,y),Q(x,y))$. $f$ est différentiable en $(x,y)$ s'il existe une application **linéaire** $df_{(x,y)}:\R^2\to\R^2$ telle que
$$\norm{f(x+h,y+k)-f(x,y)-df_{(x,y)}(h,k)}=o(\norm{(h,k)})\qquad\text{(I.2.1)}$$
(unique : c'est la différentielle). Sa matrice dans la base canonique est la jacobienne
$$\begin{pmatrix}\frac{\partial P}{\partial x}&\frac{\partial P}{\partial y}\\ \frac{\partial Q}{\partial x}&\frac{\partial Q}{\partial y}\end{pmatrix}.\qquad\text{(I.2.2)}$$
$f$ est $C^1$ si elle est différentiable en tout point et si les quatre dérivées partielles sont continues sur $\Omega$. En complexe : $|f(z+\omega)-f(z)-df_z(\omega)|=o(|\omega|)$ (I.2.3), $df_z$ étant vue comme application $\R$-linéaire de $\C$ dans $\C$. (poly, § I.2, p. 6)

## CARD id=fc-ch01-005 ref=ch01-decomposition-r-lineaire tags=enonce,formule
### Q
Énoncer le Lemme I.2.1 (décomposition d'une application $\R$-linéaire $L:\C\to\C$), avec les formules des coefficients.
### R
Toute application $\R$-linéaire $L:\C\to\C$ s'écrit de manière unique
$$L(\omega)=a\,\omega+b\,\bar\omega\quad(\omega\in\C),\qquad a=\tfrac12\bigl(L(1)-i\,L(i)\bigr),\quad b=\tfrac12\bigl(L(1)+i\,L(i)\bigr).$$
De plus, $L$ est $\C$-linéaire si et seulement si $b=0$, et elle est alors la multiplication par $a$. (poly, Lemme I.2.1, p. 6)

Preuve : $\omega=s+it$ avec $s=\frac{\omega+\bar\omega}2$, $t=\frac{\omega-\bar\omega}{2i}$, et $L(\omega)=sL(1)+tL(i)$.

## CARD id=fc-ch01-006 ref=ch01-operateurs-dz-dzbar tags=definition,enonce,formule
### Q
Définir $\frac{\partial}{\partial z}$ et $\frac{\partial}{\partial\bar z}$, et écrire la décomposition (I.2.4) de $df_z$.
### R
$$\frac{\partial}{\partial z}:=\frac12\Bigl(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Bigr),\qquad \frac{\partial}{\partial\bar z}:=\frac12\Bigl(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Bigr).$$
Si $f$ est différentiable en $z$, le Lemme I.2.1 appliqué à $L=df_z$ (avec $df_z(1)=\frac{\partial f}{\partial x}(z)$, $df_z(i)=\frac{\partial f}{\partial y}(z)$) donne
$$df_z(\omega)=\frac{\partial f}{\partial z}(z)\,\omega+\frac{\partial f}{\partial\bar z}(z)\,\bar\omega\qquad(\omega\in\C).\qquad\text{(I.2.4)}$$
(poly, Remarque I.2.2, p. 7)

## CARD id=fc-ch01-007 ref=ch01-c-derivable-ssi-df-c-lineaire tags=enonce
### Q
Énoncer la Proposition I.2.3 (lien entre $\C$-dérivabilité et différentielle réelle).
### R
Les conditions suivantes sont équivalentes :
(i) $f$ est différentiable au point $z$ et $df_z$ est $\C$-linéaire ;
(ii) $f$ est $\C$-dérivable en $z$.
Lorsqu'elles sont réalisées, $df_z$ est la multiplication par $f'(z)$. (poly, Proposition I.2.3, p. 7)

## CARD id=fc-ch01-008 ref=ch01-cauchy-riemann tags=enonce,formule
### Q
Énoncer les conditions de Cauchy réelles (Corollaire I.2.4), sous forme complexe et sous forme réelle, avec la formule de $f'(z)$.
### R
Soit $f$ **différentiable** au point $z$. Alors $f$ est $\C$-dérivable en $z$ si et seulement si
$$\frac{\partial f}{\partial\bar z}(z)=0,\qquad\text{(I.2.5)}$$
c'est-à-dire, avec $f=P+iQ$,
$$\frac{\partial P}{\partial x}(z)=\frac{\partial Q}{\partial y}(z)\quad\text{et}\quad\frac{\partial P}{\partial y}(z)=-\frac{\partial Q}{\partial x}(z).\qquad\text{(I.2.6)}$$
On a alors $f'(z)=\dfrac{\partial f}{\partial z}(z)$ (I.2.7). (poly, Corollaire I.2.4, p. 8)

## CARD id=fc-ch01-009 ref=ch01-cauchy-riemann tags=hypothese,contre-exemple
### Q
Dans le Corollaire I.2.4, que se passe-t-il si l'on retire « $f$ différentiable en $z$ » ? Et les équations en un seul point suffisent-elles pour l'holomorphie ?
### R
* Sans différentiabilité, les équations (I.2.6) en $z$ n'impliquent pas la $\C$-dérivabilité : $f(z)=\exp(-z^{-4})$, $f(0)=0$. Sur les axes, $f(x)=e^{-x^{-4}}$ et $f(iy)=e^{-y^{-4}}$, donc toutes les dérivées partielles en $0$ sont nulles et (I.2.6) est vraie en $0$ ; mais pour $z=re^{i\pi/4}$, $z^4=-r^4$ et $f(z)=e^{r^{-4}}\to+\infty$ : $f$ n'est même pas continue en $0$.
* En un seul point, la $\C$-dérivabilité ne donne rien d'holomorphe : $|z|^2$ vérifie (I.2.5) en $0$ seulement.
* Pour l'holomorphie sur $\Omega$, il faut $C^1$ **et** $\partial f/\partial\bar z=0$ partout ([[ch01-holomorphe-ssi-c1-et-dzbar-nul]]).

## CARD id=fc-ch01-010 ref=ch01-similitude-conforme tags=enonce
### Q
Interprétation géométrique de Cauchy–Riemann (Remarque I.2.5) : forme de la jacobienne, conformité, déterminant.
### R
Une application $\C$-linéaire est la multiplication par $\lambda=\alpha+i\beta$ ; vue de $\R^2$ dans $\R^2$, c'est une similitude directe (éventuellement nulle) de matrice $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$ (I.2.8). Les conditions (I.2.6) disent exactement que la jacobienne de $f$ en $z$ est de cette forme, avec $\alpha=\frac{\partial P}{\partial x}(z)$, $\beta=\frac{\partial Q}{\partial x}(z)$. Si $\lambda\neq0$ : homothétie de rapport $|\lambda|$ composée avec la rotation d'angle $\arg\lambda$. Donc en tout point où $f'(z)\neq0$, une fonction holomorphe **conserve les angles orientés** (elle est **conforme** en $z$) et son déterminant jacobien vaut $\alpha^2+\beta^2=|f'(z)|^2>0$ (elle préserve l'orientation). (poly, Remarque I.2.5, p. 8)

## CARD id=fc-ch01-011 ref=ch01-holomorphe-ssi-c1-et-dzbar-nul tags=enonce
### Q
Caractériser l'holomorphie sur $\Omega$ à l'aide de la régularité réelle et de $\partial/\partial\bar z$ (Remarque I.2.6).
### R
Pour $f$ $\C$-dérivable en tout point de $\Omega$, $z=x+iy\mapsto f'(z)$ est continue si et seulement si $f$ est $C^1$ comme fonction des deux variables réelles $x,y$. Ainsi : $f$ est holomorphe sur $\Omega$ **si et seulement si** $f$ est de classe $C^1$ sur $\Omega$ et $\frac{\partial f}{\partial\bar z}=0$ en tout point de $\Omega$. (poly, Remarque I.2.6, p. 8)

## CARD id=fc-ch01-012 ref=ch01-formulaire-dz-dzbar tags=enonce,formule
### Q
Règles de calcul (I.2.9)–(I.2.12) pour $\partial/\partial z$ et $\partial/\partial\bar z$ (fonctions $C^1$ au sens réel).
### R
* Conjugaison : $\overline{\dfrac{\partial f}{\partial z}}=\dfrac{\partial\bar f}{\partial\bar z}$ et $\overline{\dfrac{\partial f}{\partial\bar z}}=\dfrac{\partial\bar f}{\partial z}$ (I.2.9).
* Linéarité et Leibniz, pour $\partial/\partial z$ comme pour $\partial/\partial\bar z$ : $\partial(\lambda f+\mu g)=\lambda\,\partial f+\mu\,\partial g$ ($\lambda,\mu\in\C$), $\partial(fg)=(\partial f)g+f(\partial g)$ (I.2.10), (I.2.11).
* Inverse (où $f\neq0$) : $\dfrac{\partial(1/f)}{\partial z}=-\dfrac{\partial f/\partial z}{f^2}$, $\dfrac{\partial(1/f)}{\partial\bar z}=-\dfrac{\partial f/\partial\bar z}{f^2}$ (I.2.12).

(poly, p. 8–9 ; fonctions $C^1$, **pas nécessairement holomorphes**.)

## CARD id=fc-ch01-013 ref=ch01-exemple-zbar-rez-module tags=enonce,contre-exemple
### Q
Où $z\mapsto\bar z$, $z\mapsto\Re(z)$ et $z\mapsto|z|^2$ sont-elles $\C$-dérivables ? Justifier par $\partial/\partial\bar z$.
### R
$\dfrac{\partial\bar z}{\partial\bar z}=1$, $\dfrac{\partial(z\bar z)}{\partial\bar z}=z$, $\dfrac{\partial}{\partial\bar z}\Re(z)=\dfrac{\partial}{\partial\bar z}\dfrac{z+\bar z}{2}=\dfrac12$.
Donc $\bar z$ et $\Re(z)$ ne sont $\C$-dérivables **en aucun point** ; $|z|^2=z\bar z$ est $\C$-dérivable **en $0$ seulement**, donc holomorphe sur aucun ouvert non vide. La $\C$-dérivabilité en un point isolé est bien plus faible que l'holomorphie sur un ouvert. (poly, Exemple I.2.7, p. 9)

## CARD id=fc-ch01-014 ref=ch01-laplacien-harmonique tags=enonce,formule
### Q
Exprimer le laplacien avec $\partial/\partial z$, $\partial/\partial\bar z$ ; que peut-on dire de $\Re f$ et $\Im f$ pour $f$ holomorphe ?
### R
Pour $u$ de classe $C^2$, $\Delta u=\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}$ ; $u$ est harmonique si $\Delta u=0$. Pour $f$ de classe $C^2$, le théorème de Schwarz donne
$$\Delta=4\frac{\partial^2}{\partial z\,\partial\bar z}.$$
Si $f=P+iQ$ est holomorphe (et $C^2$), $\partial f/\partial\bar z=0$ entraîne $\Delta f=0$, soit $\Delta P=\Delta Q=0$ : **les parties réelle et imaginaire d'une fonction holomorphe sont harmoniques**. L'hypothèse $C^2$ est superflue (holomorphe $\Rightarrow C^\infty$, Théorème I.7.4). (poly, Remarque I.2.8, p. 9)

## CARD id=fc-ch01-015 ref=ch01-chaine-dz-dzbar tags=enonce,formule
### Q
Énoncer la règle de la chaîne pour $\partial(f\circ g)/\partial z$ et $\partial(f\circ g)/\partial\bar z$ (Lemme I.2.9).
### R
Pour $g:\Omega\to\Omega'$ et $f:\Omega'\to\C$ de classe $C^1$ (au sens réel) :
$$\frac{\partial(f\circ g)}{\partial z}=\Bigl(\frac{\partial f}{\partial z}\circ g\Bigr)\frac{\partial g}{\partial z}+\Bigl(\frac{\partial f}{\partial\bar z}\circ g\Bigr)\frac{\partial\bar g}{\partial z},\qquad \frac{\partial(f\circ g)}{\partial\bar z}=\Bigl(\frac{\partial f}{\partial z}\circ g\Bigr)\frac{\partial g}{\partial\bar z}+\Bigl(\frac{\partial f}{\partial\bar z}\circ g\Bigr)\frac{\partial\bar g}{\partial\bar z}.$$
(poly, Lemme I.2.9, p. 10) Preuve : $d(f\circ g)_z=df_{g(z)}\circ dg_z$, puis (I.2.4) et identification des coefficients de $\omega$ et $\bar\omega$.

## CARD id=fc-ch01-016 ref=ch01-stabilite-operations tags=enonce
### Q
Énoncer la stabilité de l'holomorphie par les opérations usuelles (Proposition I.3.1).
### R
Les combinaisons linéaires et produits de fonctions holomorphes définies sur un même ouvert sont holomorphes sur cet ouvert. Si $f$ est holomorphe, $1/f$ est holomorphe sur l'ouvert où $f$ ne s'annule pas. Si $f\in\Hol(\Omega)$, $g\in\Hol(\Omega')$ et $g(\Omega')\subset\Omega$, alors $f\circ g\in\Hol(\Omega')$. (poly, Proposition I.3.1, p. 10)

Attention : la conjugaison casse tout ($\bar f$, $|f|$ ne sont pas holomorphes, [[ch01-module-conjugue-non-holomorphes]]).

## CARD id=fc-ch01-017 ref=ch01-formules-derivation tags=enonce,formule
### Q
Formules (I.3.1)–(I.3.4) de dérivation complexe.
### R
Pour $f,g$ holomorphes :
$$(f+g)'=f'+g',\qquad (fg)'=f'g+fg',\qquad \Bigl(\frac fg\Bigr)'=\frac{f'g-fg'}{g^2}\ (g\neq0),\qquad (f\circ g)'(z)=f'(g(z))\,g'(z).$$
Et $(z^n)'=nz^{n-1}$ pour $n\in\N\setminus\{0\}$. (poly, p. 10–11)

## CARD id=fc-ch01-018 ref=ch01-def-rayon-convergence tags=definition,enonce,formule
### Q
Définir le rayon de convergence $R$ d'une série entière $\sum a_nz^n$ (deux caractérisations + formule de Cauchy–Hadamard).
### R
$R\in[0,+\infty]$ est le sup des $\rho\ge0$ tels que la série est **normalement convergente** sur le disque fermé de rayon $\rho$ ; c'est aussi le sup des $\rho\ge0$ tels que $(|a_n|\rho^n)_{n\ge0}$ est **bornée**. Cauchy–Hadamard : $R^{-1}=\limsup_{n\to+\infty}|a_n|^{1/n}$. $D(0,R)$ est le disque ouvert de convergence. (poly, § I.3, p. 11)

Sur le cercle $|z|=R$ tout peut arriver : $\sum z^n$ diverge partout, $\sum z^n/n^2$ converge partout.

## CARD id=fc-ch01-019 ref=ch01-serie-entiere-holomorphe tags=enonce
### Q
Énoncer la Proposition I.3.3 (holomorphie des séries entières).
### R
Une série entière $f(z):=\sum_{n\ge0}a_nz^n$ à coefficients complexes, de rayon de convergence $R>0$, définit une fonction holomorphe sur son **disque ouvert** de convergence $D(0,R)$, et
$$f'(z)=\sum_{n\ge1}n\,a_nz^{n-1}$$
(la série dérivée a le même rayon de convergence). (poly, Proposition I.3.3, p. 11)

## CARD id=fc-ch01-020 ref=ch01-serie-entiere-derivees-tout-ordre tags=enonce,formule
### Q
Dérivées successives d'une série entière (Corollaire I.3.4) ; formule des coefficients.
### R
Si $f(z)=\sum_{n\ge0}a_nz^n$ a un rayon $R>0$, $f$ admet des dérivées complexes de tout ordre, données par des séries entières de même rayon $R$ :
$$f^{(k)}(z)=\sum_{n\ge k}n(n-1)\cdots(n-k+1)\,a_n\,z^{n-k}.$$
(poly, Corollaire I.3.4, p. 12) En $z=0$ : $a_k=\dfrac{f^{(k)}(0)}{k!}$.

## CARD id=fc-ch01-021 ref=ch01-exp-trigo-hyperboliques tags=enonce,formule
### Q
Définir $e^z$, $\cos z$, $\sin z$, $\cosh z$, $\sinh z$ ; liens entre trigonométriques et hyperboliques ; domaines de $\tan$ et $\tanh$.
### R
$e^z:=\sum_{n\ge0}\frac{z^n}{n!}$ (rayon infini), holomorphe sur $\C$, $(e^z)'=e^z$, $e^{z_1+z_2}=e^{z_1}e^{z_2}$.
$$\cos z=\frac{e^{iz}+e^{-iz}}2,\quad \sin z=\frac{e^{iz}-e^{-iz}}{2i},\quad \cosh z=\frac{e^z+e^{-z}}2=\cos(iz),\quad \sinh z=\frac{e^z-e^{-z}}2=-i\sin(iz),$$
$\tan=\sin/\cos$ sur $\C\setminus(\frac\pi2+\pi\Z)$, $\tanh=\sinh/\cosh=-i\tan(iz)$ sur $\C\setminus(i\frac\pi2+i\pi\Z)$ ; toutes holomorphes sur leur domaine. (poly, Exemple I.3.5, p. 12–13)

$\sin$, $\cos$ ne sont **pas** bornées sur $\C$ : $\sin(iy)=i\sinh y$.

## CARD id=fc-ch01-022 ref=ch01-module-conjugue-non-holomorphes tags=enonce
### Q
$f$ holomorphe : $|f|$ et $\bar f$ sont-elles holomorphes ? (Remarque I.3.6) Justifier rapidement.
### R
Essentiellement **jamais** : $z\mapsto|f(z)|$ et $z\mapsto\overline{f(z)}$ ne sont holomorphes que si $f$ est constante sur chaque composante connexe de son domaine. (poly, Remarque I.3.6, p. 13)

Pour $\bar f$ : si $\bar f$ est holomorphe, $P=\Re f=\frac{f+\bar f}{2}$ est holomorphe à valeurs réelles ; Cauchy–Riemann pour $P+i\cdot0$ donne $\nabla P=0$, donc $P$ est constante sur chaque composante connexe, de même $Q=\frac{f-\bar f}{2i}$ (Exercice I.2.10).

Pour $|f|$ : si $|f|$ est holomorphe, elle est à valeurs réelles donc constante ($=c$) sur chaque composante connexe ; si $c=0$, $f=0$ ; sinon $f$ ne s'annule pas et $\bar f=c^2/f$ est holomorphe, ce qui ramène au cas précédent.

## CARD id=fc-ch01-023 ref=ch01-def-biholomorphisme tags=definition,enonce
### Q
Définir un biholomorphisme et un automorphisme holomorphe ; qu'est-ce que $\mathrm{Aut}_{hol}(\Omega)$ ?
### R
Une fonction holomorphe $h:\Omega_1\to\Omega_2$ entre ouverts de $\C$ est un **biholomorphisme** si $h$ est une bijection de $\Omega_1$ sur $\Omega_2$ dont la réciproque $h^{-1}$ est holomorphe sur $\Omega_2$. Un biholomorphisme de $\Omega$ sur lui-même est un **automorphisme (holomorphe)** de $\Omega$. (poly, Définition I.4.1, p. 13) Ils forment un groupe pour la composition, $\mathrm{Aut}_{hol}(\Omega)$ (Remarque I.4.2).

En fait l'holomorphie de $h^{-1}$ est automatique ([[ch01-bijection-holomorphe-reciproque-holomorphe]]).

## CARD id=fc-ch01-024 ref=ch01-cayley-disque-demi-plan tags=enonce,formule
### Q
Donner un biholomorphisme du disque unité $D$ sur le demi-plan de Poincaré $H$ (Exemple I.4.3).
### R
$D=D(0,1)$, $H=\{z\in\C\mid\Im(z)>0\}$. L'application
$$z\mapsto i\,\frac{1-z}{1+z}$$
est un biholomorphisme de $D$ sur $H$ (transformation de Cayley). (poly, Exemple I.4.3, p. 13) Réciproque : $w\mapsto\dfrac{i-w}{i+w}$ ; $0\mapsto i$.

## CARD id=fc-ch01-025 ref=ch01-inversion-locale-holomorphe tags=enonce,formule
### Q
Énoncer l'inversion locale holomorphe (Proposition I.4.4) et la formule de la dérivée de la réciproque.
### R
Soit $f\in\Hol(\Omega)$ et $z_0\in\Omega$ tel que $f'(z_0)\neq0$. Alors il existe un ouvert $\Omega_1\subset\Omega$ contenant $z_0$ tel que :
(i) $\Omega_2:=f(\Omega_1)$ est un ouvert de $\C$ ;
(ii) la restriction de $f$ à $\Omega_1$ est une application biholomorphe de $\Omega_1$ sur $\Omega_2$.
(poly, Proposition I.4.4, p. 14) Dans la preuve : $f'\neq0$ sur $\Omega_1$ et
$$(f^{-1})'=\frac{1}{f'\circ f^{-1}}.$$
Preuve : inversion locale réelle (la jacobienne est une similitude de rapport $|f'(z_0)|\neq0$), puis l'inverse d'une similitude directe est une similitude directe, donc $f^{-1}$ est $\C$-dérivable (Proposition I.2.3).

## CARD id=fc-ch01-026 ref=ch01-inversion-locale-holomorphe tags=hypothese,contre-exemple
### Q
Inversion locale holomorphe : que se passe-t-il si $f'(z_0)=0$ ? La conclusion est-elle globale ?
### R
* Si $f'(z_0)=0$ : $f(z)=z^2$ en $z_0=0$ n'est injective sur **aucun** voisinage de $0$ ($z$ et $-z$ ont même image). Plus généralement, si $f'(z_0)=0$ et $f$ non constante au voisinage de $z_0$, $f(z)-f(z_0)$ a en $z_0$ un zéro d'ordre $N\ge2$, $f$ se comporte comme $z\mapsto z^N$ et n'est injective sur aucun voisinage de $z_0$ (Remarque I.14.3).
* Seulement **locale** : $\exp$ vérifie $\exp'=\exp\neq0$ partout mais n'est pas injective sur $\C$ ($e^{z+2i\pi}=e^z$).

## CARD id=fc-ch01-027 ref=ch01-exp-image-c-etoile-log-local tags=enonce
### Q
Énoncer le Corollaire I.4.5 (exponentielle et logarithme local), et l'idée de la preuve de « image $=\C^\times$ ».
### R
L'exponentielle complexe $z\mapsto e^z$ est un biholomorphisme local, dont l'image est $\C^\times:=\C\setminus\{0\}$. En particulier, pour tout $z_0\in\C^\times$, on peut définir localement (par exemple sur un disque $D(z_0,r)$ assez petit contenu dans $\C^\times$) un « logarithme complexe » holomorphe $z\mapsto\mathrm{Log}(z)$, dépendant du choix d'un antécédent de $z_0$ par $\exp$. (poly, Corollaire I.4.5, p. 14)

Preuve : l'image $\exp(\C)$ est un sous-groupe de $\C^\times$, ouvert (inversion locale, $\exp'\neq0$), fermé (son complémentaire est réunion de classes $z\exp(\C)$ ouvertes), non vide ; $\C^\times$ connexe $\Rightarrow$ image $=\C^\times$. Pas de logarithme **global** sur $\C^\times$ ($\int_{C(0,1)}dz/z=2i\pi\neq0$).

## CARD id=fc-ch01-028 ref=ch01-def-chemin-lacet tags=definition,enonce
### Q
Définir un chemin, un lacet, le chemin opposé, et deux chemins composables / le chemin composé.
### R
Un **chemin** (orienté) de $\Omega$ est une application **continue**, $C^1$ par morceaux, $\gamma:[a,b]\to\Omega$ avec $a<b$ (la dérivée a des limites à gauche et à droite aux points de discontinuité, donc est **bornée**, Remarque I.5.2). Si $\gamma(a)=\gamma(b)$, c'est un **lacet**. Le **chemin opposé** est $\gamma^{opp}(t):=\gamma(a+b-t)$ sur $[a,b]$. (poly, Définition I.5.1, p. 15)

$\gamma_1:[a_1,b_1]\to\Omega$ et $\gamma_2:[a_2,b_2]\to\Omega$ sont **composables** si $\gamma_1(b_1)=\gamma_2(a_2)$ ; $\gamma_1\vee\gamma_2:[a_1,b_1+b_2-a_2]\to\Omega$ vaut $\gamma_1(t)$ sur $[a_1,b_1]$ et $\gamma_2(t+a_2-b_1)$ sur $[b_1,b_1+b_2-a_2]$ (p. 15).

## CARD id=fc-ch01-029 ref=ch01-cercle-sens-direct tags=enonce,formule
### Q
Quel est le paramétrage standard du cercle $C(z_0,r)$ dans le sens direct, et que vaut $d\omega$ ?
### R
Le lacet $\gamma(t)=z_0+re^{it}$, $t\in[0,2\pi]$, décrit le cercle de centre $z_0$ et de rayon $r>0$ parcouru dans le sens direct (trigonométrique). (poly, Exemple I.5.3, p. 15) On a $\gamma'(t)=ire^{it}$, soit « $d\omega=ire^{it}\,dt$ ».

## CARD id=fc-ch01-030 ref=ch01-def-integrale-chemin tags=definition,enonce,formule
### Q
Définir $\int_\gamma f(z)\,dz$. Quelles hypothèses sur $f$ et $\gamma$ ?
### R
Pour $f:\Omega\to\C$ **continue** et $\gamma:[a,b]\to\Omega$ un chemin :
$$\int_\gamma f(z)\,dz:=\int_a^b f(\gamma(t))\,\gamma'(t)\,dt.$$
Bien définie car $\gamma'$, même discontinue, est bornée. (poly, Définition I.5.4, p. 16) Aucune holomorphie n'est requise : par exemple $\int_{C(0,1)}\bar z\,dz=2i\pi$.

## CARD id=fc-ch01-031 ref=ch01-integrale-sur-cercle tags=enonce,formule
### Q
Formule de l'intégrale sur le cercle $C(z_0,r)$ parcouru dans le sens direct (Exemple I.5.5).
### R
Si $f$ est continue sur un ouvert contenant le cercle de centre $z_0$ et de rayon $r>0$ :
$$\int_\gamma f(z)\,dz=i\,r\int_0^{2\pi}f(z_0+re^{it})\,e^{it}\,dt.$$
(poly, Exemple I.5.5, p. 16) Notation abrégée $\int_\Gamma f(z)\,dz$ avec $\Gamma=C(z_0,r)$, sous-entendu parcouru dans le sens trigonométrique (Remarque I.5.8, p. 17).

## CARD id=fc-ch01-032 ref=ch01-integrale-reparametrage-oppose-concatenation tags=enonce
### Q
Énoncer les trois propriétés de la Proposition I.5.6 (reparamétrage, chemin opposé, concaténation).
### R
Soit $f$ continue sur $\Omega$.
(i) Si $\gamma:[a,b]\to\Omega$ est un chemin et $\varphi:[\tilde a,\tilde b]\to[a,b]$ un $C^1$-difféomorphisme **croissant**, $\int_\gamma f(z)\,dz=\int_{\tilde\gamma}f(z)\,dz$ où $\tilde\gamma:=\gamma\circ\varphi$.
(ii) $\int_\gamma f(z)\,dz=-\int_{\gamma^{opp}}f(z)\,dz$.
(iii) Si $\gamma_1,\gamma_2$ sont composables, $\int_{\gamma_1\vee\gamma_2}f(z)\,dz=\int_{\gamma_1}f(z)\,dz+\int_{\gamma_2}f(z)\,dz$.
(poly, Proposition I.5.6, p. 16) L'intégrale ne dépend que du sens de parcours.

## CARD id=fc-ch01-033 ref=ch01-longueur-majoration-integrale tags=enonce,formule
### Q
Définir la longueur $L(\gamma)$ et énoncer la majoration (I.5.1).
### R
Pour un chemin $\gamma:[a,b]\to\Omega$, $L(\gamma):=\int_a^b|\gamma'(t)|\,dt$ (finie car $\gamma'$ bornée). Pour toute $f$ **continue** sur $\Omega$ :
$$\Bigl|\int_\gamma f(z)\,dz\Bigr|\le\Bigl(\sup_{t\in[a,b]}|f(\gamma(t))|\Bigr)\,L(\gamma).\qquad\text{(I.5.1)}$$
$L(\gamma)$ ne dépend pas du paramétrage. (poly, Proposition I.5.7, p. 16–17) Ex. : $L(C(z_0,r))=2\pi r$.

## CARD id=fc-ch01-034 ref=ch01-longueur-majoration-integrale tags=hypothese,contre-exemple
### Q
Dans (I.5.1), d'où vient l'inégalité et peut-on espérer une égalité ? À quoi sert-elle typiquement ?
### R
Preuve : $\bigl|\int_a^b f(\gamma)\gamma'\bigr|\le\int_a^b|f(\gamma)||\gamma'|\le\sup|f\circ\gamma|\int_a^b|\gamma'|$. Il faut $f$ continue (donc bornée sur le compact $\gamma([a,b])$) et $\gamma'$ bornée pour que $L(\gamma)<+\infty$.
L'inégalité est souvent stricte : $f\equiv1$ sur le lacet $C(0,1)$ donne $|\int_\gamma 1\,dz|=0<2\pi$ (le module d'une intégrale n'est pas l'intégrale du module).
Usage : montrer qu'une intégrale **tend vers $0$** ($\sup|f|\cdot L\to0$), et toutes les estimées de Cauchy.

## CARD id=fc-ch01-035 ref=ch01-integrale-primitive tags=enonce
### Q
Énoncer le Théorème I.5.9 (intégrale d'une fonction admettant une primitive holomorphe).
### R
Soit $f:\Omega\to\C$ continue et $\gamma:[a,b]\to\Omega$ un chemin de $\Omega$. On suppose que $f$ admet une primitive holomorphe $F$ **sur $\Omega$**, i.e. $F\in\Hol(\Omega)$ et $f=F'$. Alors
$$\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a)).$$
En particulier, si $\gamma$ est un lacet, $\int_\gamma f(z)\,dz=0$. (poly, Théorème I.5.9, p. 17) Preuve : $(F\circ\gamma)'=F'(\gamma)\gamma'$ (Lemme I.5.10).

## CARD id=fc-ch01-036 ref=ch01-integrale-primitive tags=hypothese,contre-exemple
### Q
Théorème I.5.9 : pourquoi faut-il une primitive sur **tout** $\Omega$ (contenant tout le chemin) ? Contre-exemple, et conséquence.
### R
$f(z)=1/z$ sur $\Omega=\C^\times$ a des primitives **locales** (un $\mathrm{Log}$ sur chaque petit disque, [[ch01-primitive-locale]]) mais
$$\int_{C(0,1)}\frac{dz}{z}=\int_0^{2\pi}\frac{ie^{it}}{e^{it}}\,dt=2i\pi\neq0.$$
Contraposée du théorème : $1/z$ n'a **pas** de primitive holomorphe sur $\C^\times$ (donc pas de logarithme holomorphe sur $\C^\times$). De même $\bar z$ (continue) : $\int_{C(0,1)}\bar z\,dz=2i\pi$, pas de primitive holomorphe.

## CARD id=fc-ch01-037 ref=ch01-derivee-f-rond-gamma tags=enonce,formule
### Q
Dérivée de $t\mapsto f(\gamma(t))$ (Lemme I.5.10), cas général et cas holomorphe.
### R
Si $f:\Omega\to\C$ est de classe $C^1$ et $\gamma$ un chemin de classe $C^1$ de $\Omega$ :
$$\frac{d(f\circ\gamma)}{dt}(t)=\frac{\partial f}{\partial z}(\gamma(t))\,\gamma'(t)+\frac{\partial f}{\partial\bar z}(\gamma(t))\,\overline{\gamma'(t)}.$$
Si $f$ est holomorphe : $\dfrac{d(f\circ\gamma)}{dt}(t)=f'(\gamma(t))\,\gamma'(t)$. (poly, Lemme I.5.10, p. 17)

## CARD id=fc-ch01-038 ref=ch01-cauchy-formule-disque tags=enonce,formule
### Q
Énoncer la formule intégrale de Cauchy sur un disque (Théorème I.6.1).
### R
Soit $z_0\in\Omega$ et $r>0$ avec $\bar D(z_0,r)\subset\Omega$ ; on note $\Gamma:=C(z_0,r)$ le bord de ce disque, orienté positivement (sens trigonométrique). Soit $f\in\Hol(\Omega)$. Alors
$$f(z)=\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega\qquad\text{pour tout }z\in D(z_0,r).$$
(poly, Théorème I.6.1, p. 18)

Preuve en 2 étapes : $\int_\Gamma\frac{d\omega}{\omega-z}=2i\pi$ (série géométrique) et $\int_\Gamma\frac{f(\omega)-f(z)}{\omega-z}d\omega=0$ (on rétracte $\Gamma$ sur $z$ par $\Gamma_t=C(tz,1-t)$ et $I'(t)=0$).

## CARD id=fc-ch01-039 ref=ch01-cauchy-formule-disque tags=hypothese,contre-exemple
### Q
Formule de Cauchy : contre-exemples si l'on retire « $f$ holomorphe » ou « $\bar D(z_0,r)\subset\Omega$ ». Que vaut l'intégrale pour $|z-z_0|>r$ ?
### R
Sur $C(0,1)$, $\bar\omega=1/\omega$ et $\frac{1}{\omega(\omega-z)}=\frac1z\bigl(\frac1{\omega-z}-\frac1\omega\bigr)$, d'où pour $z\in D(0,1)^\times$ : $\frac1{2i\pi}\int_{C(0,1)}\frac{d\omega}{\omega(\omega-z)}=\frac1z(1-1)=0$.
* Sans holomorphie : $f(\omega)=\bar\omega$ donne $0\neq\bar z$.
* Sans $\bar D\subset\Omega$ : $f(\omega)=1/\omega$ sur $\Omega=\C^\times$ (holomorphe, mais $0\notin\Omega$) donne $0\neq1/z$.
* Pour $|z-z_0|>r$ (et $f$ holomorphe sur un disque $D(z_0,r')$ avec $r<r'<|z-z_0|$), $\omega\mapsto\frac{f(\omega)}{\omega-z}$ a une primitive sur $D(z_0,r')$, donc l'intégrale vaut **$0$**, pas $f(z)$.

## CARD id=fc-ch01-040 ref=ch01-cauchy-formule-disque tags=formule
### Q
Valeurs à connaître : $\int_{C(z_0,r)}\frac{d\omega}{\omega-z}$ pour $z\in D(z_0,r)$, et $\int_{C(z_0,r)}(\omega-z_0)^n\,d\omega$ pour $n\in\Z$.
### R
* $\displaystyle\int_{C(z_0,r)}\frac{d\omega}{\omega-z}=2i\pi$ pour tout $z\in D(z_0,r)$ (Théorème I.6.1, étape 1 : avec $z_0=0$, $r=1$, $\omega=e^{i\theta}$, $\frac{1}{1-ze^{-i\theta}}=\sum_{n\ge0}z^ne^{-in\theta}$ normalement convergente, seul $n=0$ contribue).
* $\displaystyle\int_{C(z_0,r)}(\omega-z_0)^n\,d\omega=ir^{n+1}\int_0^{2\pi}e^{i(n+1)t}\,dt=\begin{cases}2i\pi&\text{si }n=-1,\\ 0&\text{si }n\neq-1.\end{cases}$

(poly, p. 18)

## CARD id=fc-ch01-041 ref=ch01-formule-moyenne tags=enonce,formule
### Q
Énoncer la formule de la moyenne (Corollaire I.6.2) et sa conséquence sur $|f(z_0)|$.
### R
Si $f\in\Hol(\Omega)$ et $\bar D(z_0,r)\subset\Omega$ :
$$f(z_0)=\frac{1}{2\pi}\int_0^{2\pi}f\bigl(z_0+re^{i\theta}\bigr)\,d\theta.\qquad\text{(I.6.2)}$$
La valeur au centre d'un disque est la moyenne des valeurs sur le bord. En particulier $|f(z_0)|\le\sup_{C(z_0,r)}|f|$. (poly, Corollaire I.6.2, p. 19) Preuve : $z=z_0$ dans Cauchy, $d\omega=ire^{i\theta}d\theta$, $\omega-z_0=re^{i\theta}$.

## CARD id=fc-ch01-042 ref=ch01-formule-moyenne tags=hypothese,contre-exemple
### Q
Formule de la moyenne : contre-exemples sans holomorphie, et sans $\bar D(z_0,r)\subset\Omega$.
### R
* Non holomorphe : $f(z)=|z|^2$, moyenne sur $C(0,r)$ égale à $r^2\neq f(0)=0$.
* Disque fermé non inclus dans $\Omega$ : $f(z)=\frac{1}{z-1/2}$ sur $\Omega=\C\setminus\{\frac12\}$, $z_0=0$, $r=1$. Avec $\omega=e^{i\theta}$, $d\theta=\frac{d\omega}{i\omega}$ : $\frac1{2\pi}\int_0^{2\pi}\frac{d\theta}{e^{i\theta}-\frac12}=\frac1{2i\pi}\int_{C(0,1)}\frac{d\omega}{\omega(\omega-\frac12)}=2(1-1)=0\neq f(0)=-2$.

## CARD id=fc-ch01-043 ref=ch01-def-analytique tags=definition,enonce
### Q
Définir une fonction **analytique** sur $\Omega$.
### R
$f$ est analytique sur $\Omega$ si, **pour tout** $z_0\in\Omega$, $f$ admet un développement en série entière
$$f(z)=\sum_{n\ge0}a_n(z-z_0)^n$$
convergent dans un voisinage de $z_0$ (rayon de convergence strictement positif, dépendant a priori de $z_0$). (poly, Définition I.7.1, p. 20)

Une série entière de rayon $\rho>0$ en $z_0$ est analytique sur $D(z_0,\rho)$, avec rayon $\ge\rho-|\omega-z_0|$ en $\omega$ (Remarque I.7.2).

## CARD id=fc-ch01-044 ref=ch01-holomorphe-analytique tags=enonce
### Q
Énoncer le Théorème I.7.4 et sa conséquence sur la régularité.
### R
Une fonction est holomorphe sur $\Omega$ **si et seulement si** elle est analytique sur $\Omega$. En particulier les fonctions holomorphes sont de classe $C^\infty$, alors que leur définition ne demandait que $C^1$. (poly, Théorème I.7.4, p. 20)

Preuve : analytique $\Rightarrow$ holomorphe par la Proposition I.3.3 (propriété locale) ; holomorphe $\Rightarrow$ analytique par la formule de Cauchy sur $C(z_0,r)$ et le développement de $\frac1{\omega-z}$ en série géométrique.

## CARD id=fc-ch01-045 ref=ch01-holomorphe-analytique tags=hypothese,contre-exemple
### Q
L'équivalence « $C^\infty$ / dérivable $\Leftrightarrow$ analytique » est-elle vraie en variable réelle ? Contre-exemples.
### R
Non, c'est une rigidité propre au complexe :
* $x\mapsto e^{-1/x^2}$ (prolongée par $0$ en $0$) est $C^\infty$ sur $\R$ avec toutes ses dérivées nulles en $0$ ; sa série de Taylor en $0$ est nulle, donc elle n'est pas analytique en $0$.
* $x\mapsto x|x|$ est $C^1$ mais pas $C^2$ ; en complexe, une fois $\C$-dérivable sur un ouvert, $f$ est $C^\infty$.
L'hypothèse essentielle est la $\C$-dérivabilité **sur un ouvert** (pas en un point : $|z|^2$).

## CARD id=fc-ch01-046 ref=ch01-holomorphe-analytique tags=formule
### Q
Formule des coefficients $a_n$ du développement de $f\in\Hol(\Omega)$ en $z_0$ en termes des valeurs de $f$ sur $C(z_0,r)$ (preuve du Théorème I.7.4).
### R
Pour $\bar D(z_0,r)\subset\Omega$ et $z\in D(z_0,r)$, $f(z)=\sum_{n\ge0}a_n(z-z_0)^n$ avec
$$a_n\,r^n=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\,e^{-in\theta}\,d\theta,$$
i.e. $a_nr^n$ est le $n$-ième coefficient de Fourier de $\theta\mapsto f(z_0+re^{i\theta})$, et $a_n=\frac{f^{(n)}(z_0)}{n!}$. (poly, p. 21–22)

## CARD id=fc-ch01-047 ref=ch01-estimees-cauchy tags=enonce,formule
### Q
Énoncer le Corollaire I.7.5 : rayon de la série de Taylor, formule (I.7.1) des dérivées, estimées de Cauchy.
### R
Soit $f\in\Hol(\Omega)$ et $z_0\in\Omega$. Le développement en série entière de $f$ en $z_0$ a un rayon de convergence **au moins**
$$\rho(z_0)=\sup\{r>0\mid\bar D(z_0,r)\subset\Omega\},$$
et $f(z)=\sum_{n\ge0}\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n$ pour tout $z\in D(z_0,\rho(z_0))$. Pour tout $0<r<\rho(z_0)$ et tout $z\in D(z_0,r)$ :
$$\frac{f^{(n)}(z)}{n!}=\frac{1}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z)^{n+1}}\,d\omega.\qquad\text{(I.7.1)}$$
Estimées de Cauchy : pour tout $n\ge0$,
$$\frac{|f^{(n)}(z_0)|}{n!}\le\frac{\sup_{C(z_0,r)}|f|}{r^n}.$$
(poly, Corollaire I.7.5, p. 22)

## CARD id=fc-ch01-048 ref=ch01-estimees-cauchy tags=hypothese,contre-exemple
### Q
Corollaire I.7.5 : le rayon de convergence vaut-il exactement $\rho(z_0)$ ? Y a-t-il un analogue réel des estimées de Cauchy ?
### R
* Rayon **au moins** $\rho(z_0)$, pas égal : $\exp$ restreinte à $\Omega=D(0,1)$ a $\rho(0)=1$ mais un rayon $+\infty$. Égalité possible : $\frac1{1+z^2}$ sur $\C\setminus\{\pm i\}$, $\rho(0)=1$, rayon $1$ — ce qui explique pourquoi la série de Taylor réelle de $\frac1{1+x^2}$, fonction lisse sur tout $\R$, a un rayon $1$ (pôles cachés en $\pm i$).
* Pas d'analogue réel : $x\mapsto\sin(kx)$ est bornée par $1$ sur $\R$ mais sa dérivée $n$-ième en $0$ vaut $\pm k^n$ pour $n$ impair, non bornée en $k$. (En complexe il n'y a pas de contradiction : $\sup_{|z|=r}|\sin(kz)|\ge|\sin(ikr)|=\sinh(kr)$ croît exponentiellement avec $k$, et l'estimée $|f^{(n)}(0)|/n!\le\sup_{C(0,r)}|f|/r^n$ reste vraie.)
* Il faut $r<\rho(z_0)$, c'est-à-dire $\bar D(z_0,r)\subset\Omega$.

## CARD id=fc-ch01-049 ref=ch01-primitive-locale tags=enonce
### Q
Énoncer l'existence locale de primitives (Corollaire I.7.6). Qu'est-ce qui est réellement utilisé ?
### R
Toute fonction holomorphe admet localement une primitive : si $f$ est holomorphe sur un **disque ouvert** $D$, il existe $F\in\Hol(D)$ avec $F'=f$ sur $D$. (poly, Corollaire I.7.6, p. 22)

Preuve : $D=D(z_0,\rho)$ ; par le Corollaire I.7.5 **une seule** série $f=\sum a_n(z-z_0)^n$ converge sur tout $D$, et $F=\sum\frac{a_n}{n+1}(z-z_0)^{n+1}$ convient. Pas de primitive globale en général ($1/z$ sur $\C^\times$).

## CARD id=fc-ch01-050 ref=ch01-morera tags=enonce
### Q
Énoncer le théorème de Morera (Exercice I.8.1) et sa réciproque.
### R
Soit $f$ **continue** sur un ouvert $\Omega$ telle que
$$\int_{[a,b]}f(z)\,dz+\int_{[b,c]}f(z)\,dz+\int_{[c,a]}f(z)\,dz=0\qquad\text{(I.8.1)}$$
pour tous $a,b,c\in\Omega$ tels que le **triangle plein** de sommets $a,b,c$ est inclus dans $\Omega$. Alors $f$ est holomorphe sur $\Omega$. Inversement, si $f$ est holomorphe sur $\Omega$, (I.8.1) est vérifiée pour tous ces triangles. (poly, Exercice I.8.1, p. 23)

Schéma : sur $D(z_0,r)\subset\Omega$, $F(z)=\int_{[z_0,z]}f(\zeta)\,d\zeta$ vérifie $F'=f$ ; $F$ holomorphe donc $C^\infty$, et $f=F'$ est holomorphe. Sans continuité : $f=\mathbf 1_{\{0\}}$ vérifie (I.8.1) sans être holomorphe.

## CARD id=fc-ch01-051 ref=ch01-goursat tags=enonce
### Q
Énoncer le théorème de Goursat (Exercice I.8.2). Que dit-il de la Définition I.1.1 ?
### R
Si $f:\Omega\to\C$ est continue et admet une dérivée au sens complexe $f'(z)$ **en tout point** $z\in\Omega$, alors $f$ est holomorphe (la continuité de $f'$ est automatique). (poly, Exercice I.8.2, p. 23, à démontrer avec Morera)

Donc l'hypothèse « $f'$ continue » de la Définition I.1.1 est superflue. Contraste réel : $x\mapsto x^2\sin(1/x)$ ($0$ en $0$) est dérivable partout sur $\R$ avec dérivée discontinue en $0$.

## CARD id=fc-ch01-052 ref=ch01-holomorphie-sous-integrale tags=enonce,formule
### Q
Énoncer le Théorème I.9.1 (holomorphie d'une intégrale à paramètre) avec ses hypothèses exactes.
### R
Soit $\Omega$ ouvert de $\C$, $X$ mesurable de $\R^N$ (mesure de Lebesgue $dx$), $F$ définie sur $\Omega\times X$. On suppose :
(i) $F$ mesurable sur $\Omega\times X$ et, pour tout $x\in X$, $z\mapsto F(z,x)$ holomorphe sur $\Omega$ ;
(ii) pour tout $z_0\in\Omega$, il existe $r_0>0$ avec $D(z_0,r_0)\subset\Omega$ et $g_{z_0}$ intégrable sur $X$ tels que $|F(z,x)|\le g_{z_0}(x)$ pour tout $z\in D(z_0,r_0)$ et tout $x\in X$.
Alors $f(z)=\int_XF(z,x)\,dx$ est bien définie et holomorphe sur $\Omega$, et pour tout $k\in\N$
$$f^{(k)}(z)=\int_X\frac{\partial^kF}{\partial z^k}(z,x)\,dx.$$
(poly, Théorème I.9.1, p. 24) Preuve : Cauchy pour $F(\cdot,x)$ + Fubini $\Rightarrow$ $f$ vérifie la formule de Cauchy.

## CARD id=fc-ch01-053 ref=ch01-holomorphie-sous-integrale tags=hypothese,contre-exemple
### Q
Théorème I.9.1 : rôle de la domination (ii) ; pourquoi « locale » ; que se passe-t-il sans elle ?
### R
* (ii) assure que l'intégrale existe et justifie Fubini (échange $\int_X$ / $\int_{C(z_0,r_0)}$) : $\bigl|\frac{F(\omega,x)}{\omega-z}\bigr|\le\frac{g_{z_0}(x)}{r_0-|z-z_0|}$. La dominante doit être **indépendante de $z$** sur un disque autour de chaque point.
* Seulement **locale** : pour $\Gamma$, aucune dominante intégrable ne vaut sur tout $\{\Re z>0\}$ ; on domine sur les bandes $\alpha\le\Re z\le\beta$ par $(t^{\alpha-1}+t^{\beta-1})e^{-t}$.
* Sans domination, $f$ peut ne pas être définie : $F(z,x)=e^{-xz}$ sur $\C\times\,]0,+\infty[$ est holomorphe en $z$, mais $\int_0^{+\infty}e^{-xz}dx$ diverge dès que $\Re z\le0$ (et vaut $1/z$ si $\Re z>0$).

## CARD id=fc-ch01-054 ref=ch01-fonction-gamma tags=enonce,formule
### Q
Fonction $\Gamma$ d'Euler : définition, domaine d'holomorphie, dérivées, équation fonctionnelle.
### R
Pour $\Re(z)>0$, $\Gamma(z)=\int_0^{+\infty}t^{z-1}e^{-t}\,dt$ avec $t^{z-1}:=e^{(z-1)\ln t}$ ($t>0$), donc $|t^{z-1}|=t^{\Re(z)-1}$. Pour $0<\alpha\le\Re(z)\le\beta$, $|t^{z-1}e^{-t}|\le(t^{\alpha-1}+t^{\beta-1})e^{-t}$, intégrable sur $]0,+\infty[$ : par le Théorème I.9.1, $\Gamma$ est holomorphe sur $\{\Re z>0\}$ et
$$\Gamma^{(k)}(z)=\int_0^{+\infty}(\ln t)^k\,t^{z-1}e^{-t}\,dt.$$
IPP : $\Gamma(z+1)=z\,\Gamma(z)$, $\Gamma(1)=1$, d'où $\Gamma(n+1)=n!$. (poly, Exemple I.9.2, p. 25)

## CARD id=fc-ch01-055 ref=ch01-integrale-chemin-parametre tags=enonce
### Q
Énoncer le Corollaire I.9.4 (intégrale le long d'un chemin dépendant d'un paramètre holomorphe).
### R
Soient $\Omega$ et $U$ deux ouverts de $\C$ et $F$ **continue** sur $\Omega\times U$, holomorphe en $z$ pour tout $u\in U$. Alors pour tout chemin $\gamma$ dans $U$,
$$f(z)=\int_\gamma F(z,u)\,du$$
définit une fonction holomorphe sur $\Omega$. (poly, Corollaire I.9.4, p. 26)

Preuve : $X=[a,b]$ ; $F$ est bornée par $M$ sur le compact $\bar D(z_0,r_0)\times\gamma([a,b])$, $|\gamma'|\le M'$, et la constante $MM'$ est la dominante.

## CARD id=fc-ch01-056 ref=ch01-liouville tags=enonce
### Q
Énoncer le théorème de Liouville et sa preuve en une ligne.
### R
Soit $f\in\Hol(\C)$ **bornée** sur $\C$. Alors $f$ est constante. (poly, Théorème I.10.1, p. 26)

Preuve : $|f|\le M$ ; estimées de Cauchy sur $C(0,r)$ : $|f^{(k)}(0)|\le k!\,M/r^k\to0$ quand $r\to+\infty$ pour $k\ge1$ ; la série de Taylor en $0$ a un rayon infini ($\rho(0)=+\infty$), donc $f\equiv f(0)$.

## CARD id=fc-ch01-057 ref=ch01-liouville tags=hypothese,contre-exemple
### Q
Liouville : contre-exemples si l'on retire « sur $\C$ tout entier », « bornée », ou si l'on passe en variable réelle.
### R
* Pas sur tout $\C$ : $z\mapsto z$ est holomorphe bornée sur $D(0,1)$ ; $1/z$ est holomorphe et bornée par $1$ sur $\{|z|>1\}$.
* Pas bornée : $z$, $e^z$ ($e^z$ est bornée sur chaque demi-plan $\{\Re z\le a\}$, pas sur $\C$).
* Réel : $\sin$ est bornée et non constante sur $\R$ (mais $\sin(iy)=i\sinh y$ n'est pas bornée sur $\C$).

## CARD id=fc-ch01-058 ref=ch01-dalembert-gauss tags=enonce
### Q
Énoncer le théorème de d'Alembert–Gauss et le prouver par Liouville.
### R
Tout polynôme non constant à coefficients complexes possède une racine dans $\C$ ; autrement dit $\C$ est algébriquement clos. (poly, Corollaire I.10.2, p. 26)

Preuve : si $P$ non constant ne s'annule pas, $1/P$ est entière ; $|P(z)|\to+\infty$ quand $|z|\to+\infty$, donc $1/P$ est bornée (petite hors d'un grand disque, continue sur ce disque compact) ; Liouville : $1/P$ constante, donc $P$ constant, contradiction.

## CARD id=fc-ch01-059 ref=ch01-dalembert-gauss tags=hypothese,contre-exemple
### Q
d'Alembert–Gauss : contre-exemples sur $\R$ et pour les fonctions entières non polynomiales. Où sert « non constant » ?
### R
* Sur $\R$ : $X^2+1$ n'a pas de racine réelle.
* Fonction entière non polynomiale : $e^z$ ne s'annule jamais. La preuve échoue car $1/e^z=e^{-z}$ n'est pas bornée (pas de $|f(z)|\to+\infty$ à l'infini).
* « Non constant » : un polynôme constant non nul n'a pas de racine ; c'est aussi ce qui donne $|P(z)|\to+\infty$.

## CARD id=fc-ch01-060 ref=ch01-liouville-consequences-image-dense-croissance-polynomiale tags=enonce
### Q
Exercice I.10.3, questions 4–5 : image d'une fonction entière non constante ; fonction entière à croissance polynomiale.
### R
* Si $h$ est holomorphe sur $\C$ et **non constante**, $h(\C)$ est **dense** dans $\C$. (Sinon $h(\C)$ évite un disque $D(w,\eps)$, et $1/(h-w)$ est entière, bornée par $1/\eps$, donc constante.)
* Si $f\in\Hol(\C)$ et s'il existe $a,b>0$, $m\in\N$ avec $|f(z)|\le a+b|z|^m$ pour tout $z\in\C$, alors $f$ est un **polynôme de degré $\le m$**. (Estimées de Cauchy : $\frac{|f^{(n)}(0)|}{n!}\le\frac{a+bR^m}{R^n}\to0$ pour $n>m$.)

(poly, Exercice I.10.3, p. 26–27)

## CARD id=fc-ch01-061 ref=ch01-zeros-isoles tags=enonce
### Q
Énoncer le principe des zéros isolés (Théorème I.11.1).
### R
Soit $\Omega$ un ouvert **connexe** et $f$ holomorphe sur $\Omega$ **non identiquement nulle**. Alors les zéros de $f$ sont isolés : si $f(z_0)=0$, il existe $\eps>0$ tel que $f(z)\neq0$ pour tout $z\in\Omega\cap(D(z_0,\eps)\setminus\{z_0\})$. (poly, Théorème I.11.1, p. 27)

Preuve : $U=\{z\in\Omega:f^{(n)}(z)=0\ \forall n\ge0\}$ est fermé et ouvert (Taylor), $\neq\Omega$, donc vide ; puis $f(z)=(z-z_0)^N\bigl(a_N+\sum_{n>N}a_n(z-z_0)^{n-N}\bigr)$, $a_N\neq0$.

## CARD id=fc-ch01-062 ref=ch01-zeros-isoles tags=hypothese,contre-exemple
### Q
Zéros isolés : contre-exemples sans connexité, en variable réelle, et zéros qui s'accumulent au bord.
### R
* Sans connexité : $\Omega=D(0,1)\cup D(3,1)$, $f=0$ sur $D(0,1)$ et $f=1$ sur $D(3,1)$ : $f\not\equiv0$ et ses zéros ne sont pas isolés (la preuve donne seulement : $f$ est nulle sur une composante connexe, Remarque I.11.3).
* Réel : $x\mapsto e^{-1/x^2}\mathbf 1_{x>0}$ est $C^\infty$ sur $\R$, nulle sur $\R_-$, non identiquement nulle.
* Accumulation au bord (permise) : $\sin\bigl(\frac{\pi}{1-z}\bigr)$ sur $D(0,1)$ s'annule en $z=1-\frac1k$, $k\ge1$, qui s'accumulent en $1\notin D(0,1)$.

## CARD id=fc-ch01-063 ref=ch01-def-multiplicite-zero tags=definition,enonce
### Q
Définir la multiplicité (ordre) $m(z_0)$ d'un zéro $z_0$ de $f$ ; caractérisation par factorisation ; zéro simple.
### R
$\Omega$ connexe, $f\in\Hol(\Omega)$ non identiquement nulle, $f(z_0)=0$ :
$$m(z_0):=\min\{n\ge0:\ f^{(n)}(z_0)\neq0\}\ \ (\ge1).$$
De manière équivalente, $m(z_0)$ est l'unique entier $m\ge1$ tel que
$$f(z)=(z-z_0)^m\,h(z)$$
au voisinage de $z_0$, avec $h$ holomorphe et $h(z_0)\neq0$. Un zéro de multiplicité $1$ est **simple** (i.e. $f'(z_0)\neq0$). (poly, Définition I.11.2, p. 27)

## CARD id=fc-ch01-064 ref=ch01-def-multiplicite-zero tags=hypothese,contre-exemple
### Q
Pourquoi la Définition I.11.2 suppose-t-elle $\Omega$ connexe et $f$ non identiquement nulle ? Exemple de calcul d'ordre.
### R
* C'est ce qui garantit, via la preuve des zéros isolés, l'existence d'un $n$ avec $f^{(n)}(z_0)\neq0$. Si $f$ est nulle sur la composante connexe de $z_0$ (par ex. $f=0$ sur $D(0,1)$, $f=1$ sur $D(3,1)$), toutes les dérivées en $z_0\in D(0,1)$ sont nulles : le min porte sur l'ensemble vide.
* Exemples : $z^2$ en $0$ : $m=2$, $f'(0)=0$. $\sin z$ en $0$ : $\sin'(0)=1\neq0$, zéro simple. $1-\cos z$ en $0$ : dérivée nulle, dérivée seconde $\cos 0=1$, $m=2$.

## CARD id=fc-ch01-065 ref=ch01-ensemble-zeros-discret-ferme tags=enonce
### Q
Que dire de l'ensemble $Z(f,\Omega)$ des zéros (Remarque I.11.4) ?
### R
Pour $\Omega$ connexe et $f\in\Hol(\Omega)$ non identiquement nulle, $Z(f,\Omega)$ est **discret et fermé dans $\Omega$**, donc **localement fini** (tout compact de $\Omega$ n'en contient qu'un nombre fini). (poly, Remarque I.11.4, p. 28)

Fermé dans $\Omega$ seulement, pas dans $\C$ : les zéros $1-\frac1k$ de $\sin\bigl(\frac{\pi}{1-z}\bigr)$ s'accumulent en $1\in\partial D(0,1)$.

## CARD id=fc-ch01-066 ref=ch01-isole-ne-signifie-pas-fini tags=enonce,contre-exemple
### Q
« Zéros isolés » veut-il dire « en nombre fini » ?
### R
Non : $z\mapsto\sin(\pi z)$ sur $\C$ est holomorphe, non identiquement nulle, et ses zéros sont exactement les entiers relatifs $\Z$ (infinité de zéros isolés). Ce qui est garanti, c'est d'être **localement fini**, propriété plus faible que la finitude. (poly, Remarque I.11.5, p. 28)

## CARD id=fc-ch01-067 ref=ch01-prolongement-analytique tags=enonce
### Q
Énoncer le principe du prolongement analytique (Corollaire I.11.6). Qu'est-ce qu'un point d'accumulation ?
### R
Deux fonctions holomorphes $f$ et $g$ sur un ouvert **connexe** $\Omega$ qui coïncident sur une partie $X$ de $\Omega$ ayant un **point d'accumulation dans $\Omega$** coïncident partout. (poly, Corollaire I.11.6, p. 28)

Un point d'accumulation de $X$ est un point $a$ tel que tout voisinage de $a$ rencontre $X\setminus\{a\}$. Preuve : $a$ est un zéro non isolé de $f-g$. Cas usuels : coïncidence sur un ouvert non vide, ou sur un arc (par exemple un segment de $\R$).

## CARD id=fc-ch01-068 ref=ch01-prolongement-analytique tags=hypothese,contre-exemple
### Q
Prolongement analytique : contre-exemples si le point d'accumulation est au bord, si $X$ n'a pas de point d'accumulation, si $\Omega$ n'est pas connexe.
### R
* Au bord : $\sin\bigl(\frac{\pi}{1-z}\bigr)$ et $0$ coïncident sur $X=\{1-\frac1k,\ k\ge1\}\subset D(0,1)$, qui s'accumule en $1\notin D(0,1)$, sans être égales.
* $X$ infini sans point d'accumulation dans $\Omega$ : $\sin(\pi z)$ et $0$ coïncident sur $\Z$.
* Sans connexité : sur $D(0,1)\cup D(3,1)$, $f=0$ et $g=\mathbf 1_{D(3,1)}$ coïncident sur $D(0,1)$.

## CARD id=fc-ch01-069 ref=ch01-densite-polynomes-l2-gaussien tags=enonce
### Q
Énoncer la Proposition I.11.8 et l'idée de preuve.
### R
Les fonctions polynômes sont denses dans $L^2(\R,e^{-x^2}dx)$, et aussi dans $L^2(]0,+\infty[,e^{-x}dx)$. (poly, Proposition I.11.8, p. 28)

Idée : si $f$ est orthogonale à tous les polynômes, $F(z)=\int_\R f(x)e^{zx}e^{-x^2}dx$ est entière (§ I.9) avec $F^{(n)}(0)=\int_\R x^nf(x)e^{-x^2}dx=0$ pour tout $n$, donc $F\equiv0$ ; alors $F(-i\xi)=0$ : la transformée de Fourier de $f(x)e^{-x^2}$ est nulle, d'où $f=0$.

## CARD id=fc-ch01-070 ref=ch01-principe-maximum tags=enonce
### Q
Énoncer le principe du maximum (Théorème I.12.1).
### R
Soit $f$ holomorphe sur un ouvert **connexe** $\Omega$. Si $z\mapsto|f(z)|$ admet un **maximum local** en un point $z_0\in\Omega$, alors $f$ est constante sur $\Omega$. (poly, Théorème I.12.1, p. 29)

Preuves du poly : (1) $f=f(z_0)+(z-z_0)^Ng(z)$, $g(z_0)\neq0$, et l'on choisit la direction $\beta$ telle que $\Re\bigl(e^{iN\beta}g(z_0)\overline{f(z_0)}\bigr)>0$, qui fait croître $|f|$ ; (2) formule de la moyenne + Parseval : $c_n=0$ pour $n\neq0$. Puis prolongement analytique.

## CARD id=fc-ch01-071 ref=ch01-principe-maximum tags=hypothese,contre-exemple
### Q
Principe du maximum : contre-exemples sans connexité, en variable réelle ; y a-t-il un principe du minimum ?
### R
* Sans connexité : $\Omega=D(0,1)\cup D(3,1)$, $f=1$ sur $D(0,1)$, $f(z)=z-3$ sur $D(3,1)$ : $|f|$ a un maximum local en $0$ mais $f$ n'est pas constante sur $\Omega$.
* Réel : $x\mapsto1-x^2$ a un maximum intérieur en $0$ sans être constante.
* Minimum : faux en général, $|z|$ est minimal en $0$. Vrai si $f$ **ne s'annule pas** : appliquer le principe du maximum à $1/f$.

## CARD id=fc-ch01-072 ref=ch01-maximum-sur-le-bord tags=enonce
### Q
Énoncer le Corollaire I.12.2 (maximum atteint sur le bord).
### R
Soit $\Omega$ un ouvert connexe non vide de $\C$ dont l'adhérence $\bar\Omega$ est **bornée** (donc compacte), et $f:\bar\Omega\to\C$ **continue** et holomorphe sur $\Omega$. Alors $\sup_{\bar\Omega}|f|<+\infty$ est atteint, et il est atteint sur le bord $\partial\Omega=\bar\Omega\setminus\Omega$ :
$$\sup_{\bar\Omega}|f|=\sup_{\partial\Omega}|f|.$$
(poly, Corollaire I.12.2, p. 31) Preuve : si le sup est atteint dans $\Omega$, $f$ est constante par le Théorème I.12.1.

## CARD id=fc-ch01-073 ref=ch01-maximum-sur-le-bord tags=hypothese,contre-exemple
### Q
Corollaire I.12.2 : que se passe-t-il si $\Omega$ n'est pas borné ?
### R
Faux : $f(z)=e^{-iz}$ sur le demi-plan $\Omega=\{\Im z>0\}$, continue sur $\bar\Omega$. On a $|f(x+iy)|=e^{y}$ : $|f|=1$ sur le bord $\partial\Omega=\R$, mais $\sup_{\bar\Omega}|f|=+\infty$. La compacité de $\bar\Omega$ sert à ce que le sup soit atteint ; la continuité sur $\bar\Omega$ est nécessaire pour que l'énoncé ait un sens.

## CARD id=fc-ch01-074 ref=ch01-hol-integre tags=enonce
### Q
Exercice I.12.3 : intégrité de $\Hol(\Omega)$ ; version « produit nul sur le bord ».
### R
$D$ disque unité ouvert, $\bar D$ son adhérence.
1. Si le produit de deux fonctions holomorphes sur $D$ est nul, l'une des deux est nulle.
2. Si $f,g$ sont continues sur $\bar D$, holomorphes sur $D$, et si $fg$ est nulle sur le cercle $\partial\bar D=\bar D\setminus D$, alors $f$ ou $g$ est nulle sur $\bar D$.
3. Généralisation à un ouvert connexe (borné) $\Omega$ : pour $\Omega$ connexe, $\Hol(\Omega)$ est une **algèbre intègre**.
(poly, Exercice I.12.3, p. 31) Outils : zéros isolés (1), Corollaire I.12.2 appliqué à $fg$ (2). Faux sans connexité ($\mathbf 1_{\Omega_1}\cdot\mathbf 1_{\Omega_2}=0$).

## CARD id=fc-ch01-075 ref=ch01-trois-cercles-hadamard tags=enonce,formule
### Q
Énoncer le théorème des trois cercles d'Hadamard (Exercice I.12.5).
### R
Soient $0<r<R$, $\Omega$ un ouvert connexe contenant la couronne $\{r\le|z|\le R\}$, $f\in\Hol(\Omega)$, et $M(\rho):=\sup_{|z|=\rho}|f(z)|$. Alors :
1. pour tout $\rho\in[r,R]$ et tous $p,q\in\Z$ avec $q>0$ : $\rho^pM(\rho)^q\le\max\{r^pM(r)^q,R^pM(R)^q\}$ ;
2. pour tout $\rho\in[r,R]$ et tout $\alpha\in\R$ : $\rho^\alpha M(\rho)\le\max\{r^\alpha M(r),R^\alpha M(R)\}$ ;
3. pour tout $t\in[0,1]$ : $M(r^tR^{1-t})\le M(r)^tM(R)^{1-t}$.
(poly, Exercice I.12.5, p. 31) Autrement dit $\log M$ est convexe en $\log\rho$. Point 1 : principe du maximum pour $z^pf(z)^q$.

## CARD id=fc-ch01-076 ref=ch01-lemme-schwarz tags=enonce
### Q
Énoncer le lemme de Schwarz (Lemme I.13.1), les quatre points.
### R
$D=D(0,1)$, $D^\times=D\setminus\{0\}$. Soit $f\in\Hol(D)$ telle que $f(D)\subset\bar D(0,1)$ et $f(0)=0$. Alors
1. $|f(z)|\le|z|$ pour tout $z\in D$ et $|f'(0)|\le1$ ;
2. s'il existe $z\in D^\times$ avec $|f(z)|=|z|$, ou si $|f'(0)|=1$, alors $f$ est une rotation : $f(z)=e^{i\theta}z$ ($\theta\in\R$) sur $D$ ;
3. si $f$ est un automorphisme de $D$, $f$ est une rotation ;
4. si $f$ n'est pas un automorphisme de $D$, $|f(z)|<|z|$ pour tout $z\in D\setminus\{0\}$.
(poly, Lemme I.13.1, p. 32) Preuve : principe du maximum pour $g(z)=f(z)/z$ sur $\bar D(0,r)$, puis $r\to1$.

## CARD id=fc-ch01-077 ref=ch01-lemme-schwarz tags=hypothese,contre-exemple
### Q
Lemme de Schwarz : contre-exemples si l'on retire $f(0)=0$, $f(D)\subset\bar D$, ou le domaine $D$.
### R
* Sans $f(0)=0$ : $f\equiv\frac12$ vérifie $f(D)\subset\bar D$ mais $|f(z)|=\frac12>|z|$ pour $|z|<\frac12$. (Remède : composer avec un automorphisme $f_a$.)
* Sans $f(D)\subset\bar D$ : $f(z)=2z$, $|f(z)|>|z|$.
* Sur $\C$ (pas de borne) : $f(z)=z^2$, $f(0)=0$, mais $|f(z)|>|z|$ pour $|z|>1$.
* Non holomorphe : $f(z)=\bar z$ est une bijection de $D$ avec $|f(z)|=|z|$ sans être une rotation.

## CARD id=fc-ch01-078 ref=ch01-automorphismes-disque tags=enonce,formule
### Q
Décrire tous les automorphismes holomorphes du disque unité (Proposition I.13.3).
### R
Pour $a\in D$ et $z\in D$, $f_a(z)=\dfrac{z-a}{1-\bar az}$. Les automorphismes holomorphes de $D$ sont exactement les fonctions $\lambda\cdot f_a$, avec $a\in D$ et $|\lambda|=1$, c'est-à-dire
$$z\mapsto e^{i\theta}\,\frac{z-a}{1-\bar az},\qquad a\in D,\ \theta\in\R.$$
(poly, Proposition I.13.3, p. 32 ; Exercice I.13.2) $f_a$ envoie $a$ sur $0$, et $f_a^{-1}=f_{-a}$. Preuve : si $f$ est un automorphisme et $a=f^{-1}(0)$, $f\circ f_a^{-1}$ fixe $0$, donc est une rotation (point 3 de Schwarz).

## CARD id=fc-ch01-079 ref=ch01-automorphismes-disque tags=hypothese,contre-exemple
### Q
Pourquoi faut-il $a\in D$ et $|\lambda|=1$ ? Une surjection holomorphe de $D$ sur $D$ est-elle un automorphisme ?
### R
* $|a|>1$ : $f_a$ a un pôle en $1/\bar a\in D$, donc n'est pas holomorphe sur $D$. $|a|=1$ : $1/\bar a=a$, donc $1-\bar az=-\bar a(z-a)$ et $f_a\equiv-1/\bar a=-a$ est constante (hors de $z=a$).
* $|\lambda|\neq1$ : $\lambda f_a(D)=D(0,|\lambda|)\neq D$.
* $z\mapsto z^2$ envoie $D$ **sur** $D$ mais n'est pas injective : ce n'est pas un automorphisme (et ce n'est pas de la forme $\lambda f_a$).

## CARD id=fc-ch01-080 ref=ch01-application-ouverte tags=enonce
### Q
Énoncer le théorème de l'application ouverte (Théorème I.14.1).
### R
Soit $\Omega$ un ouvert **connexe** non vide de $\C$ et $f:\Omega\to\C$ holomorphe **non constante**. Alors $f(\Omega)$ est un ouvert de $\C$. (poly, Théorème I.14.1, p. 33)

Preuve (Exercice I.14.2) : par l'absurde, $\alpha_n\notin f(\Omega)$, $\alpha_n\to f(z_0)$ ; principe du maximum pour $1/(f-\alpha_n)$ sur $\bar D(z_0,r)$, avec $\eps=\min_{C(z_0,r)}|f-f(z_0)|>0$ (zéros isolés + compacité).

## CARD id=fc-ch01-081 ref=ch01-application-ouverte tags=hypothese,contre-exemple
### Q
Application ouverte : contre-exemples en variable réelle, pour une fonction non holomorphe, et sans connexité.
### R
* Réel : $x\mapsto x^2$ envoie $]-1,1[$ sur $[0,1[$, non ouvert.
* Non holomorphe : $z\mapsto|z|^2$ envoie $\C$ sur $\R_+$, $z\mapsto\Re(z)$ envoie $\C$ sur $\R$ (d'intérieur vide dans $\C$).
* Constante : image réduite à un point.
* Sans connexité : $\Omega=D(0,1)\cup D(3,1)$, $f=5$ sur $D(0,1)$, $f(z)=z-3$ sur $D(3,1)$ : $f$ est non constante mais $f(\Omega)=D(0,1)\cup\{5\}$ n'est pas ouvert. (Il faut « non constante sur chaque composante ».)

## CARD id=fc-ch01-082 ref=ch01-bijection-holomorphe-reciproque-holomorphe tags=enonce
### Q
Une bijection holomorphe entre deux ouverts est-elle un biholomorphisme ? (Remarque I.14.3) Idée de preuve.
### R
Oui : si $f:\Omega_1\to\Omega_2$ est une bijection holomorphe entre ouverts de $\C$, $f^{-1}$ est automatiquement holomorphe. (poly, Remarque I.14.3, p. 33)

Il suffit (inversion locale, Proposition I.4.4) que $f'$ ne s'annule pas. Si $f'(z_0)=0$ et $f(z_0)=0$ : $f(z)=a_N(z-z_0)^N\bigl(1+\sum_{n\ge1}\frac{a_{N+n}}{a_N}(z-z_0)^n\bigr)$, $N\ge2$, la parenthèse a une racine $N$-ième holomorphe (log sur $D(1,1/2)$), donc $f=h^N$ ; $h(D(z_0,\eps))\supset D(0,\eta)$ (application ouverte) et $z\mapsto z^N$ n'est injective sur aucun disque centré en $0$. Contraste réel : $x\mapsto x^3$ est une bijection $C^\infty$ de $\R$ de réciproque non dérivable en $0$.

## CARD id=fc-ch01-083 ref=none tags=notation
### Q
Notations du poly pour disques et cercles : $D(z_0,r)$, $\bar D(z_0,r)$, $D(z_0,r)^\times$, $C(z_0,r)$, $D$, $D^\times$, $H$, $\C^\times$.
### R
* $D(z_0,r)=\{z\in\C,\ |z-z_0|<r\}$ disque **ouvert** ; $\bar D(z_0,r)=\{|z-z_0|\le r\}$ disque **fermé** ; $D(z_0,r)^\times=D(z_0,r)\setminus\{z_0\}$ ; $C(z_0,r)=\{|z-z_0|=r\}$ cercle (p. 5).
* $D=D(0,1)$ disque unité, $\bar D$ son adhérence, $D^\times=D\setminus\{0\}$ (p. 32).
* $H=\{z\in\C\mid\Im(z)>0\}$ demi-plan de Poincaré (p. 13) ; $\C^\times=\C\setminus\{0\}$ (p. 14).
* $\Re(z)$, $\Im(z)$ : parties réelle et imaginaire (le poly écrit $\Re e(z)$, $\Im m(z)$).

## CARD id=fc-ch01-084 ref=none tags=notation
### Q
Notations du poly : $\Hol(\Omega)$, $f'$, $f^{(k)}$, $P,Q$, $df_z$, $\frac{\partial}{\partial z}$, $\frac{\partial}{\partial\bar z}$, $\bar f$, $\Delta$, $\mathrm{Aut}_{hol}(\Omega)$, $\mathrm{Log}$.
### R
* $\Hol(\Omega)$ : fonctions holomorphes sur l'ouvert $\Omega$ ; $f'(z)$ dérivée complexe, $f^{(k)}$ dérivée complexe $k$-ième.
* $f=P+iQ$, $P=\Re(f)$, $Q=\Im(f)$ ; $df_z$ (ou $df_{(x,y)}$) différentielle **réelle**, $\R$-linéaire $\C\to\C$.
* $\frac{\partial}{\partial z}=\frac12(\partial_x-i\partial_y)$, $\frac{\partial}{\partial\bar z}=\frac12(\partial_x+i\partial_y)$ ; $\bar f:z\mapsto\overline{f(z)}$ ; $\Delta=\partial_x^2+\partial_y^2=4\frac{\partial^2}{\partial z\partial\bar z}$.
* $\mathrm{Aut}_{hol}(\Omega)$ : groupe des automorphismes holomorphes de $\Omega$ ; $\mathrm{Log}$ : logarithme complexe **local** (Corollaire I.4.5).

## CARD id=fc-ch01-085 ref=none tags=notation
### Q
Notations du poly : $\gamma^{opp}$, $\gamma_1\vee\gamma_2$, $\int_\Gamma$, $\int_{[a,b]}$, $L(\gamma)$, $\rho(z_0)$, $m(z_0)$, $Z(f,\Omega)$, $\partial\Omega$, $M(r)$, $f_a$.
### R
* $\gamma^{opp}(t)=\gamma(a+b-t)$ chemin opposé ; $\gamma_1\vee\gamma_2$ chemin composé ; $\int_\Gamma f(z)\,dz$ avec $\Gamma=C(z_0,r)$ parcouru dans le sens trigonométrique ; $\int_{[a,b]}$ intégrale sur le segment orienté de $a$ vers $b$ ; $L(\gamma)=\int_a^b|\gamma'(t)|dt$.
* $\rho(z_0)=\sup\{r>0\mid\bar D(z_0,r)\subset\Omega\}$ (Corollaire I.7.5).
* $m(z_0)$ multiplicité d'un zéro ; $Z(f,\Omega)$ ensemble des zéros de $f$ dans $\Omega$.
* $\partial\Omega=\bar\Omega\setminus\Omega$ bord ; $M(r)=\sup_{|z|=r}|f(z)|$ ; $f_a(z)=\frac{z-a}{1-\bar az}$ ($a\in D$).

## CARD id=fc-ch01-086 ref=ch01-holomorphe-ssi-c1-et-dzbar-nul tags=methode
### Q
Pour montrer qu'une fonction est holomorphe (ou qu'elle ne l'est pas), quels outils du chapitre I ?
### R
* Opérations : sommes, produits, quotients (là où le dénominateur ne s'annule pas), composées de fonctions holomorphes ([[ch01-stabilite-operations]]).
* Série entière de rayon $R>0$ : holomorphe sur $D(0,R)$ ([[ch01-serie-entiere-holomorphe]]).
* Calcul réel : vérifier $C^1$ puis $\frac{\partial f}{\partial\bar z}=0$ (ou Cauchy–Riemann) partout ; si $\frac{\partial f}{\partial\bar z}(z)\neq0$, $f$ n'est pas $\C$-dérivable en $z$ (ex. $\bar z$, $|z|^2$).
* Intégrale à paramètre : domination locale ([[ch01-holomorphie-sous-integrale]]) ou intégrale sur un chemin compact ([[ch01-integrale-chemin-parametre]]).
* Morera : $f$ continue et intégrale nulle sur le bord de tout triangle plein inclus dans $\Omega$.

## CARD id=fc-ch01-087 ref=ch01-estimees-cauchy tags=methode
### Q
Pour montrer qu'une fonction **entière** est constante ou polynomiale, comment procède-t-on ?
### R
1. Borne globale $\Rightarrow$ Liouville ; sinon, chercher une **fonction auxiliaire** entière bornée : $1/P$ (d'Alembert–Gauss), $1/(h-w)$ si $h(\C)$ évite $D(w,\eps)$, $e^{f}$ si $\Re f\le a$ ($|e^f|=e^{\Re f}\le e^a$), $e^{if}$ si $\Im f\ge -a$...
2. Croissance polynomiale $|f(z)|\le a+b|z|^m$ : estimées de Cauchy sur $C(0,R)$, $\frac{|f^{(n)}(0)|}{n!}\le\frac{a+bR^m}{R^n}\to0$ ($n>m$, $R\to+\infty$), et série de Taylor de rayon infini $\Rightarrow$ polynôme de degré $\le m$.

## CARD id=fc-ch01-088 ref=ch01-prolongement-analytique tags=methode
### Q
Pour montrer une identité entre fonctions holomorphes sur un ouvert connexe, comment utiliser le prolongement analytique ? Exemple.
### R
On vérifie l'identité sur un ensemble ayant un point d'accumulation **dans** $\Omega$ (un segment réel, un petit disque, une suite convergente dans $\Omega$), puis on applique le Corollaire I.11.6 à la différence.
Exemple : $\cos^2z+\sin^2z=1$ sur $\C$ : la fonction entière $\cos^2+\sin^2-1$ est nulle sur $\R$, qui a des points d'accumulation dans $\C$, donc nulle sur $\C$. De même $e^{z_1+z_2}=e^{z_1}e^{z_2}$ se déduit du cas réel en fixant une variable puis l'autre.

## CARD id=fc-ch01-089 ref=ch01-zeros-isoles tags=methode
### Q
Deux techniques de preuve récurrentes du chapitre : l'argument « ouvert–fermé » et la factorisation locale. Où servent-elles ?
### R
* **Ouvert–fermé** : sur un connexe, une partie non vide, ouverte et fermée est le tout. Sert pour : image de $\exp$ $=\C^\times$ (Corollaire I.4.5) ; zéros isolés via $U=\{z:f^{(n)}(z)=0\ \forall n\}$ (Théorème I.11.1) ; passage local $\to$ global dans le principe du maximum.
* **Factorisation** $f(z)=f(z_0)+(z-z_0)^Ng(z)$, $g(z_0)\neq0$, lue sur la série de Taylor : zéros isolés et multiplicité, choix de la direction qui fait croître $|f|$ (maximum), $f=h^N$ localement et non-injectivité quand $f'(z_0)=0$ (Remarque I.14.3).

## CARD id=fc-ch01-090 ref=ch01-cauchy-formule-disque tags=methode
### Q
Pour calculer une intégrale sur un cercle ou développer en série une fonction donnée par une intégrale de Cauchy, quelle est la technique standard ?
### R
1. Paramétrer : $\omega=z_0+re^{i\theta}$, $d\omega=ire^{i\theta}d\theta$, $\theta\in[0,2\pi]$.
2. Développer $\frac1{\omega-z}=\frac{1}{(\omega-z_0)\bigl(1-\frac{z-z_0}{\omega-z_0}\bigr)}=\sum_{n\ge0}\frac{(z-z_0)^n}{(\omega-z_0)^{n+1}}$ pour $|z-z_0|<r$ (série géométrique, convergence **normale** en $\theta$ car $\bigl|\frac{z-z_0}{r}\bigr|<1$).
3. Intervertir $\sum$ et $\int$, et utiliser $\int_0^{2\pi}e^{ik\theta}d\theta=2\pi$ si $k=0$, $0$ sinon.
C'est la preuve de l'étape 1 de Cauchy et de « holomorphe $\Rightarrow$ analytique ».

## CARD id=fc-ch01-091 ref=ch01-lemme-schwarz tags=methode
### Q
Comment utiliser le lemme de Schwarz quand $f:D\to D$ holomorphe ne fixe pas $0$ ? En déduire l'inégalité de Schwarz–Pick en $a$.
### R
On normalise avec les automorphismes $f_b(z)=\frac{z-b}{1-\bar bz}$ (et $f_b^{-1}=f_{-b}$) : pour $a\in D$ et $b=f(a)\in D$, $g=f_b\circ f\circ f_{-a}$ est holomorphe de $D$ dans $D$ avec $g(0)=0$. Schwarz : $|g'(0)|\le1$. Or $f_{-a}'(0)=1-|a|^2$ et $f_b'(b)=\frac1{1-|b|^2}$, donc
$$|f'(a)|\le\frac{1-|f(a)|^2}{1-|a|^2}.$$
