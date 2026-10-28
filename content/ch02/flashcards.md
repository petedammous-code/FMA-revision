## CARD id=fc-ch02-001 ref=ch02-homotopie-simplement-connexe tags=definition,enonce
### Q
Définir : homotopie entre $\gamma_0$ et $\gamma_1$ dans $\Omega$, homotopie **de lacets**, ouvert **simplement connexe**.
### R
Soient $\Omega$ un ouvert non vide de $\C$ et $\gamma_0,\gamma_1:[0,1]\to\Omega$ continues. Une **homotopie** entre $\gamma_0$ et $\gamma_1$ dans $\Omega$ est une application $\gamma\in C([0,1]^2;\Omega)$ telle que $\gamma(0,t)=\gamma_0(t)$ et $\gamma(1,t)=\gamma_1(t)$ pour tout $t\in[0,1]$.

C'est une **homotopie de lacets** (ou homotopie *libre* de lacets) si de plus $\gamma(s,0)=\gamma(s,1)$ pour tout $s\in[0,1]$ : chaque $\gamma(s,\cdot)$ est fermé, le point base $\gamma(s,0)$ a le droit de bouger avec $s$.

$\Omega$ est **simplement connexe** s'il est **connexe** et si tout lacet de $\Omega$ est homotope (homotopie de lacets) à un lacet constant. (poly, Définition II.1.1, p. 35)

On n'exige pas que les $t\mapsto\gamma(s,t)$ intermédiaires soient $C^1$ par morceaux : ils sont seulement continus (poly, p. 36).

## CARD id=fc-ch02-002 ref=ch02-homotopie-simplement-connexe tags=hypothese,contre-exemple
### Q
Donner un ouvert connexe **non** simplement connexe, et un ouvert dont chaque composante est simplement connexe mais qui ne l'est pas. Comment prouve-t-on la non-simple-connexité ?
### R
* $\C^\times=\C\setminus\{0\}$ (ou une couronne $\{1<|z|<2\}$) : le cercle unité n'y est pas homotope à un lacet constant. Preuve : sinon, par invariance par homotopie, $\int_{C(0,1)}\frac{dz}{z}=0$, or cette intégrale vaut $2i\pi$ ($1/z$ est holomorphe sur $\C^\times$).
* Deux disques disjoints : chaque composante est un disque, mais l'ouvert n'est pas **connexe**, donc pas simplement connexe par définition.

## CARD id=fc-ch02-003 ref=ch02-ouvert-etoile-def tags=definition
### Q
Définir un ouvert **étoilé**. Donner des exemples et un contre-exemple.
### R
$\Omega$ est étoilé s'il existe $\omega\in\Omega$ tel que pour tout $z\in\Omega$ le segment $[\omega,z]$ est contenu dans $\Omega$ ; on dit que $\Omega$ est étoilé en $\omega$. Un ouvert convexe est étoilé. (poly, § II.1, p. 36)

Exemples : disques, demi-plans, $\C$ (convexes) ; le plan coupé $\C\setminus\R_-$ (étoilé en $1$). Contre-exemple : la couronne $\{1<|z|<2\}$ n'est étoilée en aucun point.

## CARD id=fc-ch02-004 ref=ch02-etoile-simplement-connexe tags=enonce
### Q
Énoncer le lien entre « étoilé » et « simplement connexe », avec l'homotopie qui le prouve. La réciproque est-elle vraie ?
### R
Un ouvert étoilé est simplement connexe. (poly, Proposition II.1.5, p. 37)

Si $\Omega$ est étoilé en $\omega$ et $\gamma_0$ est un lacet de $\Omega$, $\gamma(s,t):=s\,\omega+(1-s)\gamma_0(t)$ est une homotopie de lacets (dans $\Omega$ car $[\omega,\gamma_0(t)]\subset\Omega$) entre $\gamma_0$ et le lacet constant $\omega$.

Réciproque fausse : un domaine en fer à cheval est simplement connexe sans être étoilé.

## CARD id=fc-ch02-005 ref=ch02-invariance-homotopie-integrale tags=enonce
### Q
Énoncer le théorème d'invariance par homotopie de l'intégrale sur un lacet.
### R
Soient $\Omega$ un ouvert de $\C$, $\gamma$ une **homotopie de lacets** entre $\gamma_0$ et $\gamma_1$ dans $\Omega$, et $f\in\Hol(\Omega)$. Alors
$$\int_{\gamma_0}f(z)\,dz=\int_{\gamma_1}f(z)\,dz.$$
(poly, Théorème II.2.1, p. 37)

## CARD id=fc-ch02-006 ref=ch02-invariance-homotopie-integrale tags=hypothese
### Q
Dans le Théorème II.2.1, où servent les hypothèses « $f\in\Hol(\Omega)$ » et « homotopie de lacets **à valeurs dans $\Omega$** » ? L'homotopie doit-elle être $C^1$ ?
### R
* L'image compacte $\gamma([0,1]^2)$ est recouverte par des disques **inclus dans $\Omega$** où $f$ a une primitive (primitive locale, [[ch01-primitive-locale]]) : il faut donc $f$ holomorphe en **tout** point balayé par l'homotopie.
* La condition $\gamma(s,0)=\gamma(s,1)$ fait que le chemin du point base $v(s)=\gamma(s,0)$ est parcouru une fois dans chaque sens : sa contribution s'annule.
* Non : l'homotopie est seulement **continue** ; la preuve remplace les chemins par des chemins affines par morceaux.

## CARD id=fc-ch02-007 ref=ch02-invariance-homotopie-integrale tags=contre-exemple
### Q
Contre-exemples à l'invariance par homotopie si (a) $f$ a une singularité dans la zone balayée ; (b) on n'a qu'une homotopie de **chemins** (extrémités libres).
### R
(a) $f(z)=1/z$, $\gamma_0=C(0,1)$, $\gamma_1$ = lacet constant $0$... plus précisément constant égal à $1$ : ils sont homotopes dans $\C$ (homotopie $(1-s)e^{2i\pi t}+s$), mais $f\notin\Hol(\C)$ et $\int_{\gamma_0}f=2i\pi\neq0=\int_{\gamma_1}f$.

(b) $f\equiv1$ : deux chemins d'extrémités différentes sont homotopes dans $\C$ (comme applications continues), mais $\int_\gamma 1\,dz=\gamma(1)-\gamma(0)$ diffère.

## CARD id=fc-ch02-008 ref=ch02-cauchy-simplement-connexe tags=enonce
### Q
Énoncer le théorème de Cauchy sur un ouvert simplement connexe.
### R
On suppose $\Omega$ simplement connexe. Alors pour tout lacet $\gamma$ de $\Omega$ et toute $f\in\Hol(\Omega)$,
$$\int_\gamma f(z)\,dz=0.$$
(poly, Corollaire II.2.2, p. 39) Preuve : homotopie de lacets entre $\gamma$ et un lacet constant, puis Théorème II.2.1.

## CARD id=fc-ch02-009 ref=ch02-cauchy-simplement-connexe tags=hypothese,contre-exemple
### Q
Corollaire II.2.2 : que se passe-t-il si $\Omega$ n'est pas simplement connexe, ou si $f$ n'est que méromorphe ?
### R
* $\Omega=\C^\times$, $f(z)=1/z\in\Hol(\Omega)$, $\gamma=C(0,1)$ : $\int_\gamma f=2i\pi\neq0$. Le « trou » $0$ de $\Omega$ agit comme une singularité cachée.
* $\Omega=\C$ (simplement connexe) mais $f=1/z$ seulement méromorphe : même calcul, $2i\pi$. Il faut alors la formule des résidus.

## CARD id=fc-ch02-010 ref=ch02-indice-def tags=definition,formule
### Q
Définir l'indice $\Ind_{z_0}(\gamma)$ d'un lacet $\gamma$ en un point $z_0$ (avec les conditions).
### R
Soit $\gamma:[0,1]\to\C$ un lacet, d'image $\Gamma$, et $z_0\notin\Gamma$. Alors
$$\Ind_{z_0}(\gamma):=\frac{1}{2i\pi}\int_\gamma\frac{dz}{z-z_0}=\frac{1}{2i\pi}\int_0^1\frac{\gamma'(t)}{\gamma(t)-z_0}\,dt.$$
De plus $\Ind_{z_0}(\gamma^{\mathrm{opp}})=-\Ind_{z_0}(\gamma)$. (poly, Définition II.3.1, p. 40)

Interprétation : nombre algébrique de tours de $\gamma$ autour de $z_0$. Non défini si $z_0\in\Gamma$.

## CARD id=fc-ch02-011 ref=ch02-indice-entier-localement-constant tags=enonce
### Q
Énoncer les propriétés de $z\mapsto\Ind_z(\gamma)$ (Proposition II.3.2) et l'astuce qui prouve que l'indice est entier.
### R
Soit $\gamma$ un lacet de $\C$ d'image $\Gamma$. Pour tout $z\in\C\setminus\Gamma$, $\Ind_z(\gamma)\in\Z$ ; $z\mapsto\Ind_z(\gamma)$ est constante sur les composantes connexes de $\C\setminus\Gamma$ et **nulle sur l'unique composante connexe non bornée**. (poly, Proposition II.3.2, p. 40)

Astuce : $f(t):=\exp\big(\int_0^t\frac{\gamma'(u)}{\gamma(u)-z_0}du\big)$ vérifie $f'/f=(\gamma-z_0)'/(\gamma-z_0)$, donc $f(t)/f(0)=\frac{\gamma(t)-z_0}{\gamma(0)-z_0}$ ; comme $\gamma(1)=\gamma(0)$, $f(1)=1$, i.e. $e^{2i\pi\Ind_{z_0}(\gamma)}=1$. Puis : continue à valeurs entières $\Rightarrow$ localement constante.

## CARD id=fc-ch02-012 ref=ch02-indice-entier-localement-constant tags=hypothese,contre-exemple
### Q
Pourquoi faut-il que $\gamma$ soit **fermé** pour que $\frac{1}{2i\pi}\int_\gamma\frac{dz}{z-z_0}$ soit entier ? Contre-exemple.
### R
L'astuce de la preuve utilise $\gamma(1)=\gamma(0)$ pour obtenir $f(1)=1$. Pour un chemin non fermé, c'est faux : sur le segment $[1,i]$ et $z_0=0$, l'argument varie de $\pi/2$ et le module ne change pas, donc $\frac{1}{2i\pi}\int_{[1,i]}\frac{dz}{z}=\frac{1}{2i\pi}\cdot\frac{i\pi}{2}=\frac14\notin\Z$.

## CARD id=fc-ch02-013 ref=ch02-indice-cercle tags=enonce,formule
### Q
Que vaut l'indice d'un cercle $C=\partial D$ parcouru dans le sens trigonométrique ? Comment le justifie le poly ?
### R
$\Ind_{z_0}(C)=1$ pour tout $z_0\in D$ (formule de Cauchy pour $f\equiv1$, [[ch01-cauchy-formule-disque]]) ; $\Ind_{z_0}(C)=0$ pour $z_0\in\C\setminus\bar D$ (série géométrique de $\theta\mapsto 1/(1+\frac{re^{i\theta}}{a-z_0})$, $a$ centre, $r$ rayon). (poly, Exemple II.3.3, p. 41)

Sens horaire : $-1$ à l'intérieur.

## CARD id=fc-ch02-014 ref=ch02-indice-invariance-homotopie tags=enonce
### Q
Énoncer l'invariance de l'indice par homotopie. Quelle est la condition cruciale ?
### R
S'il existe une homotopie (de lacets) **dans $\C\setminus\{z_0\}$** entre deux lacets $\gamma_0$ et $\gamma_1$, alors $\Ind_{z_0}(\gamma_0)=\Ind_{z_0}(\gamma_1)$. (poly, Proposition II.3.4, p. 41) C'est le Théorème II.2.1 appliqué à $z\mapsto1/(z-z_0)$ sur $\C\setminus\{z_0\}$.

Condition cruciale : **aucun** lacet intermédiaire $\gamma_s$ ne passe par $z_0$. Sinon : $C(0,1)$ et un lacet constant sont homotopes dans $\C$ mais d'indices $1$ et $0$ en $0$.

## CARD id=fc-ch02-015 ref=ch02-discret-accumulation-localement-fini-def tags=definition
### Q
Définir : partie **discrète**, **point d'accumulation**, partie **localement finie** dans un ouvert $\Omega$.
### R
* $P\subset\C$ est discrète si tout $a\in P$ est isolé : il existe $r>0$ avec $D(a,r)\cap P=\{a\}$.
* $a\in\C$ est point d'accumulation de $P$ s'il est limite d'une suite de points de $P\setminus\{a\}$ (tout voisinage de $a$ rencontre $P\setminus\{a\}$).
* $P\subset\Omega$ est localement finie dans $\Omega$ si tout $a\in\Omega$ a un voisinage rencontrant $P$ en un nombre fini de points ; de façon équivalente, $P\cap K$ est fini pour tout compact $K\subset\Omega$.

(poly, § II.4, p. 42)

## CARD id=fc-ch02-016 ref=ch02-localement-fini-caracterisations tags=enonce
### Q
Énoncer les caractérisations des parties localement finies (Proposition II.4.1). Donner un ensemble discret non localement fini.
### R
Soient $\Omega$ un ouvert et $P\subset\Omega$. Équivalent : (1) $P$ est discret et fermé **dans $\Omega$** ; (2) $P$ est localement fini dans $\Omega$ ; (3) $P$ n'a pas de point d'accumulation **dans $\Omega$**. (poly, Proposition II.4.1, p. 42)

$\{1/n,\ n\ge1\}$ est discret mais pas localement fini dans $\C$ (accumulation en $0$) ; il l'est dans $\C\setminus\{0\}$ (Remarque II.4.4, p. 43).

## CARD id=fc-ch02-017 ref=ch02-pole-meromorphe-def tags=definition,enonce
### Q
Définir : pôle, multiplicité d'un pôle, fonction **méromorphe** sur $\Omega$.
### R
Soit $f:\Omega\setminus\{z_0\}\to\C$ holomorphe. $z_0$ est un **pôle** de $f$ si (i) $f$ ne se prolonge pas en une fonction holomorphe en $z_0$ ; (ii) il existe $m\in\N\setminus\{0\}$ tel que $(z-z_0)^mf$ est bornée au voisinage de $z_0$. Le plus petit tel $m$ est la **multiplicité** (ordre) $m(z_0)$ ; c'est l'unique $m\ge1$ tel que $f(z)=(z-z_0)^{-m}h(z)$ sur un voisinage épointé, avec $h$ holomorphe en $z_0$ et $h(z_0)\neq0$. Pôle **simple** : $m=1$.

$f$ est **méromorphe** sur $\Omega$ si $f$ est holomorphe hors d'une partie $P$ **localement finie** de $\Omega$ et si les points de $P$ vérifient (ii) : ce sont des pôles ou des points où $f$ se prolonge holomorphiquement. (poly, Définition II.4.2, p. 43)

## CARD id=fc-ch02-018 ref=ch02-pole-meromorphe-def tags=contre-exemple
### Q
Pourquoi $\sin(1/z)$ n'est-elle pas méromorphe sur $\C$ ? et $1/\sin(1/z)$ ? Le point $0$ est-il un pôle de $(1-\cos z)/z^2$ ?
### R
* $\sin(1/z)$ : aucun $z^m\sin(1/z)$ n'est borné près de $0$ (singularité **essentielle**) : (ii) échoue.
* $1/\sin(1/z)$ : pôles en $1/(k\pi)$, $k\in\Z^\times$, qui s'accumulent en $0\in\C$ : l'ensemble n'est pas localement fini dans $\C$. Elle est méromorphe sur $\C^\times$.
* $(1-\cos z)/z^2\to1/2$ : bornée près de $0$, donc fausse singularité (prolongeable holomorphiquement), **pas** un pôle ; on peut quand même mettre $0$ dans $P$ (Remarque II.4.3, p. 43).

## CARD id=fc-ch02-019 ref=ch02-meromorphes-operations tags=enonce
### Q
Énoncer la Proposition II.4.5 (opérations sur les fonctions méromorphes).
### R
Si $f,g$ sont méromorphes sur $\Omega$ et $\alpha,\beta\in\C$, alors $\alpha f+\beta g$ et $fg$ sont méromorphes sur $\Omega$. Si $f$ est holomorphe **non identiquement nulle** sur un ouvert **connexe** $\Omega$, alors $1/f$ est méromorphe sur $\Omega$. (poly, Proposition II.4.5, p. 43)

Sans connexité : $f$ nulle sur une composante et égale à $1$ sur l'autre est non identiquement nulle, mais $1/f$ n'a pas de sens sur la première (zéros non isolés).

## CARD id=fc-ch02-020 ref=ch02-laurent-developpement tags=enonce
### Q
Énoncer l'existence et l'unicité du développement de Laurent d'une fonction méromorphe (Proposition II.4.6).
### R
Soient $f$ méromorphe sur $\Omega$ et $z_0\in\Omega$. Il existe $m\in\N$ et $r>0$ tels que
$$f(z)=\sum_{n\ge-m}a_n(z-z_0)^n\quad\text{sur }D(z_0,r)^\times.$$
Ce développement est **unique**, et la série converge **normalement** sur la couronne $C_{\eps,\bar\eps}=\{z\in\Omega:\eps<|z-z_0|<\bar\eps\}$ pour tous $0<\eps<\bar\eps<r$. Enfin $f$ a un pôle en $z_0$ si et seulement s'il existe $n\le-1$ avec $a_n\neq0$, et la multiplicité est alors $-\min\{n\,;\,a_n\neq0\}$. (poly, Proposition II.4.6, p. 44)

## CARD id=fc-ch02-021 ref=ch02-laurent-developpement tags=hypothese,contre-exemple
### Q
Développement de Laurent : sur quel domaine vaut-il ? Que se passe-t-il sur une couronne plus grande, ou en une singularité essentielle ?
### R
Seulement sur un **petit** disque épointé $D(z_0,r)^\times$ ne contenant aucun autre point singulier. Sur une couronne plus grande les coefficients changent : $\frac{1}{z(z-1)}=-\frac1z-1-z-z^2-\cdots$ sur $0<|z|<1$, mais $=\sum_{n\ge2}z^{-n}$ sur $|z|>1$ (où le coefficient de $z^{-1}$ est $0\neq\Res_0$).

Hors du cadre méromorphe ($e^{1/z}=\sum_{n\ge0}\frac{z^{-n}}{n!}$) : une infinité de puissances négatives (Exercice II.7.4).

## CARD id=fc-ch02-022 ref=ch02-singularite-effacable-riemann tags=enonce
### Q
Énoncer le théorème de Riemann sur les singularités effaçables.
### R
Soient $f$ méromorphe sur $\Omega$ et $z_0\in P$ (partie localement finie de la Définition II.4.2). Si $f$ reste **bornée** au voisinage de $z_0$ (par exemple si $f$ se prolonge par continuité en $z_0$), alors $f$ se prolonge en une fonction holomorphe en $z_0$. (poly, Corollaire II.4.7, p. 45)

En particulier : $f$ holomorphe sur $\Omega\setminus\{z_0\}$ et bornée près de $z_0$ (alors (ii) vaut avec $m=1$) se prolonge holomorphiquement en $z_0$. Exemple : $\sin z/z$.

## CARD id=fc-ch02-023 ref=ch02-singularite-effacable-riemann tags=hypothese,contre-exemple
### Q
Riemann : que se passe-t-il sans « bornée » ? L'analogue réel est-il vrai ?
### R
Sans « bornée » : $1/z$ (pôle) ou $e^{1/z}$ (singularité essentielle) ne se prolongent pas en $0$.

Analogue réel faux : $x\mapsto|x|$ est bornée et $C^\infty$ sur $\R^\times$ mais ne se prolonge pas en fonction dérivable en $0$. La rigidité vient du développement de Laurent : borné $\Rightarrow$ pas de puissance négative.

## CARD id=fc-ch02-024 ref=ch02-meromorphes-corps tags=enonce
### Q
Quand $\mathcal M(\Omega)$ est-il un corps ? Contre-exemple sinon.
### R
Si $\Omega$ est **connexe**, $\mathcal M(\Omega)$ est un corps (extension de dimension infinie de $\C$). (poly, Proposition II.4.8, p. 45)

Si $\Omega=\Omega_1\sqcup\Omega_2$ n'est pas connexe, $f=\mathbf 1_{\Omega_1}$ est méromorphe non nulle mais non inversible ($f\cdot\mathbf 1_{\Omega_2}=0$ : diviseurs de zéro).

## CARD id=fc-ch02-025 ref=ch02-residu-def tags=definition
### Q
Définir le résidu $\Res_{z_0}(f)$ d'une fonction méromorphe en $z_0$.
### R
Si $f$ est méromorphe sur $\Omega$, $z_0\in\Omega$ et $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ est son développement de Laurent au voisinage de $z_0$ (unique), alors
$$\Res_{z_0}(f):=a_{-1}.$$
(poly, Définition II.4.9, p. 45 ; le poly écrit $\mathrm{res}_{z_0}(f)$.) L'application $f\mapsto\Res_{z_0}(f)$ est une forme **linéaire** sur $\mathcal M(\Omega)$ (Corollaire II.4.10, p. 45).

## CARD id=fc-ch02-026 ref=ch02-residu-def tags=contre-exemple
### Q
Vrai ou faux : (a) en un pôle le résidu est non nul ; (b) $\Res_{z_0}(fg)=\Res_{z_0}(f)\Res_{z_0}(g)$.
### R
(a) Faux : $\Res_0(1/z^2)=0$ alors que $0$ est un pôle double.

(b) Faux : $\Res_0\big(\frac1z\cdot\frac1z\big)=0\neq1=\Res_0(1/z)^2$. Le résidu est linéaire, pas multiplicatif.

## CARD id=fc-ch02-027 ref=ch02-residu-integrale-cercle tags=enonce,formule
### Q
Énoncer la formule qui exprime le résidu comme une intégrale. Quelles précautions ?
### R
Soit $z_0\in\Omega$ un pôle de $f$ méromorphe. Pour tout $r>0$ **assez petit**,
$$\Res_{z_0}(f)=\frac{1}{2i\pi}\int_{C(z_0,r)}f(z)\,dz,$$
$C(z_0,r)$ parcouru dans le sens **trigonométrique**. (poly, Proposition II.4.11, p. 46)

Précautions : $r$ assez petit pour que la série de Laurent converge normalement sur $C(z_0,r)$ (aucun autre pôle dans $\bar D(z_0,r)$ ; sinon on obtient la somme des résidus intérieurs) ; sens horaire $\Rightarrow$ signe opposé.

## CARD id=fc-ch02-028 ref=ch02-residu-integrale-cercle tags=formule
### Q
Calculer $\int_{C(z_0,r)}(z-z_0)^n\,dz$ pour $n\in\Z$.
### R
Avec $z=z_0+re^{i\theta}$, $\theta\in[0,2\pi]$ : $\int_{C(z_0,r)}(z-z_0)^n\,dz=i\,r^{1+n}\int_0^{2\pi}e^{i(1+n)\theta}d\theta$, qui vaut
$$2i\pi\ \text{si } n=-1,\qquad 0\ \text{si } n\neq-1.$$
(poly, preuve de la Proposition II.4.11, p. 46) Pour $n\neq-1$, $(z-z_0)^n$ a une primitive $\frac{(z-z_0)^{n+1}}{n+1}$ sur $\C\setminus\{z_0\}$.

## CARD id=fc-ch02-029 ref=ch02-residu-pole-simple tags=enonce,formule
### Q
Comment calculer le résidu en un **pôle simple** ? (formule du poly + deux formules pratiques)
### R
Poly : si $f$ est holomorphe au voisinage de $z_0$ et $g$ méromorphe avec un **pôle simple** en $z_0$, alors
$$\Res_{z_0}(fg)=f(z_0)\Res_{z_0}(g).$$
(poly, Remarque II.4.12, p. 46)

Pratique (pôle simple de $F$) : $\Res_{z_0}(F)=\lim_{z\to z_0}(z-z_0)F(z)$ (utilisé dans les Exemples II.6.1 et II.9.7) ; si $F=f/q$ avec $f,q$ holomorphes en $z_0$, $q(z_0)=0$, $q'(z_0)\neq0$ : $\Res_{z_0}(F)=\dfrac{f(z_0)}{q'(z_0)}$.

## CARD id=fc-ch02-030 ref=ch02-residu-def tags=formule
### Q
Formule du résidu en un pôle d'ordre $m$ (hors poly, conséquence directe du développement de Laurent).
### R
Si $z_0$ est un pôle d'ordre (au plus) $m$ de $f$ :
$$\Res_{z_0}(f)=\frac{1}{(m-1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\Big[(z-z_0)^mf(z)\Big].$$
Raison : $(z-z_0)^mf(z)=\sum_{n\ge-m}a_n(z-z_0)^{n+m}$ est holomorphe en $z_0$ et $a_{-1}$ est son coefficient de degré $m-1$. Exemple : $\Res_0(e^z/z^2)=\frac{1}{1!}(e^z)'|_{0}=1$ (et non $e^0\Res_0(1/z^2)=0$ : la Remarque II.4.12 exige un pôle **simple**).

## CARD id=fc-ch02-031 ref=ch02-formule-residus tags=enonce
### Q
Énoncer la formule des résidus (Théorème II.5.1).
### R
On suppose $\Omega$ **simplement connexe**. Soit $f$ méromorphe sur $\Omega$ et $\gamma$ un lacet inclus dans $\Omega\setminus\mathcal P(f,\Omega)$. Alors
$$\frac{1}{2i\pi}\int_\gamma f(z)\,dz=\sum_{s\in\mathcal P(f,\Omega)}\Res_s(f)\,\Ind_s(\gamma),$$
la somme étant à support fini (Remarque II.5.2). (poly, Théorème II.5.1, p. 47)

## CARD id=fc-ch02-032 ref=ch02-formule-residus tags=hypothese
### Q
Formule des résidus : rôle de chaque hypothèse. Peut-on affaiblir « $\Omega$ simplement connexe » ?
### R
* $\Omega$ simplement connexe : sert à appliquer Cauchy (Corollaire II.2.2) à $f-\sum_sQ_s$ (holomorphe) et à garantir que l'indice est nul hors de $\Omega$ (pôles en nombre fini dans la somme). Il suffit en fait que **$\gamma$ soit homotope à un lacet constant dans $\Omega$** (Remarque II.5.3, p. 48).
* $f$ **méromorphe** (pas de singularité essentielle) : on soustrait des parties polaires **finies**.
* $\gamma$ ne passe par **aucun pôle** : sinon l'intégrale n'a pas de sens.
* Chaque pôle compte avec son indice : $0$ s'il est hors du lacet, $-1$ si le lacet tourne en sens horaire, etc.

## CARD id=fc-ch02-033 ref=ch02-formule-residus tags=contre-exemple
### Q
Contre-exemple à la formule des résidus quand $\Omega$ n'est pas simplement connexe.
### R
$\Omega=\C^\times$, $f(z)=1/z$ holomorphe sur $\Omega$ (donc $\mathcal P(f,\Omega)=\emptyset$), $\gamma=C(0,1)$ : la formule donnerait $0$, or $\frac{1}{2i\pi}\int_\gamma f=1$. Le « trou » $0\notin\Omega$ se comporte comme un pôle caché ; $\gamma$ n'est pas homotope à un lacet constant dans $\Omega$.

## CARD id=fc-ch02-034 ref=ch02-support-fini-remarque tags=enonce
### Q
Pourquoi la somme de la formule des résidus est-elle finie (Remarque II.5.2) ?
### R
Sous les hypothèses de II.5.1, l'ensemble des pôles $s$ avec $\Ind_s(\gamma)\neq0$ est fini. Soit $V=\{z\notin\Gamma\,;\,\Ind_z(\gamma)\neq0\}$ : $V$ est **borné** (indice nul sur la composante non bornée de $\C\setminus\Gamma$) et $V\subset\Omega$ (indice nul hors de $\Omega$ car $\gamma$ est homotope à un lacet constant dans $\Omega$) ; son bord est dans $\Gamma$, donc $\bar V\subset V\cup\Gamma$ est un **compact de $\Omega$**, qui ne contient qu'un nombre fini de pôles ($\mathcal P(f,\Omega)$ localement fini). (poly, Remarque II.5.2, p. 47)

## CARD id=fc-ch02-035 ref=ch02-residus-hypothese-homotope-remarque tags=enonce
### Q
Énoncer la Remarque II.5.3 et l'illustrer sur une couronne.
### R
Dans le Théorème II.5.1, l'hypothèse « $\Omega$ simplement connexe » peut être remplacée par « le lacet $\gamma$ est homotope à un lacet constant (dans $\Omega$) ». (poly, Remarque II.5.3, p. 48)

Dans $\Omega=\{1<|z|<3\}$ : un petit cercle contenu dans $\Omega$ est contractile, la formule s'applique. Mais $\gamma=C(0,2)$ ne l'est pas : $\int_\gamma dz/z=2i\pi$ alors que $1/z$ n'a aucun pôle dans $\Omega$.

## CARD id=fc-ch02-036 ref=ch02-formule-residus-pratique tags=enonce,formule
### Q
Énoncer la forme pratique (II.6.1) de la formule des résidus pour le bord d'un domaine.
### R
Soit $U$ un ouvert connexe borné dont le bord est l'image d'un lacet **simple** $\gamma$, $C^1$ par morceaux, orienté dans le sens direct (intérieur à gauche : $\gamma(t)+i\eps\gamma'(t)\in U$ pour $\eps>0$ petit) ; alors $\Ind_z(\gamma)=1$ pour $z\in U$. Soit $\Omega$ un ouvert **simplement connexe contenant $\bar U$** et $f$ méromorphe sur $\Omega$ **sans pôle sur $\gamma$**. L'ensemble $S$ des pôles de $f$ dans $U$ est fini et
$$\int_\gamma f(z)\,dz=2i\pi\sum_{s\in S}\Res_s(f).$$
(poly, Formule (II.6.1), p. 48 ; méthode donnée sans preuve, à justifier au cas par cas)

## CARD id=fc-ch02-037 ref=ch02-formule-residus-pratique tags=hypothese,contre-exemple
### Q
Pièges dans l'application de (II.6.1) : orientation, pôle sur le bord, indice $1$.
### R
* Sens horaire : signe $-$ (indice $-1$).
* Pôle sur $\gamma$ : intégrale non définie ; il faut contourner le pôle (petit demi-cercle) ou changer de contour.
* « Indice $=1$ dans $U$ » n'est démontré dans le poly que via Jordan (admis) : en copie, le justifier par **homotopie vers un cercle** dans $\C\setminus\{z_0\}$ (Proposition II.3.4) ou se placer sur un disque (Exemple II.3.3).
* Ne pas oublier de pôle : $z^4+1=0$ a **deux** racines ($e^{i\pi/4}$, $e^{3i\pi/4}$) dans le demi-plan supérieur.

## CARD id=fc-ch02-038 ref=ch02-exemple-integrale-fourier tags=enonce
### Q
Résultat et schéma de calcul de $\displaystyle\int_{-\infty}^{+\infty}\frac{\cos(kx)}{x^2+a^2}dx$ pour $k,a>0$ (Exemple II.6.1).
### R
$$\int_{-\infty}^{+\infty}\frac{\cos(kx)}{x^2+a^2}dx=\frac{\pi}{a}e^{-ka}.$$
On intègre $f(z)=\frac{e^{ikz}}{z^2+a^2}$ (pôles simples $\pm ia$) sur $\Gamma_R=[-R,R]\vee C_R^+$ (demi-cercle supérieur, sens direct). Pour $R>a$ : seul $ia$ est intérieur, $\Res_{ia}(f)=\frac{e^{-ka}}{2ia}$, donc $\int_{\Gamma_R}f=\frac{\pi}{a}e^{-ka}$. Sur $C_R^+$ : $|e^{ikz}|=e^{-kR\sin\theta}\le1$, d'où $\big|\int_{C_R^+}f\big|\le\frac{\pi R}{R^2-a^2}\to0$. Partie réelle à la limite. (poly, Exemple II.6.1, p. 48)

## CARD id=fc-ch02-039 ref=ch02-principe-argument tags=enonce
### Q
Énoncer le principe de l'argument (Lemme II.8.1) et l'identité clé de la preuve.
### R
Soient $\Omega$ **simplement connexe**, $g$ méromorphe sur $\Omega$ **non identiquement nulle**, $\gamma$ un lacet de $\Omega$ dont l'image ne contient **ni pôle ni zéro** de $g$. Alors
$$\frac{1}{2i\pi}\int_\gamma\frac{g'(z)}{g(z)}dz=\sum_{s\in\mathcal Z(g,\Omega)}\Ind_s(\gamma)\,m(s)-\sum_{s\in\mathcal P(g,\Omega)}\Ind_s(\gamma)\,m(s),$$
$m(s)$ = multiplicité de $s$ comme zéro ou pôle ; sommes à support fini. (poly, Lemme II.8.1, p. 53)

Clé : $g(z)=(z-z_0)^Ng_1(z)$ avec $g_1(z_0)\neq0$, $N\in\Z$, donne $\frac{g'}{g}=\frac{N}{z-z_0}+\frac{g_1'}{g_1}$ : $\Res_{z_0}(g'/g)=N$ ($=m$ pour un zéro, $=-m$ pour un pôle). Puis formule des résidus.

## CARD id=fc-ch02-040 ref=ch02-principe-argument tags=hypothese
### Q
Principe de l'argument : à quoi servent « $g\not\equiv0$ », « ni zéro ni pôle sur $\gamma$ », « $\Omega$ simplement connexe » ?
### R
* $g\not\equiv0$ (et $\Omega$ connexe) : les zéros sont isolés, $g'/g$ est méromorphe (corps $\mathcal M(\Omega)$).
* Ni zéro ni pôle sur $\gamma$ : ce sont les pôles de $g'/g$ ; sinon l'intégrale diverge.
* Simple connexité : pour appliquer la formule des résidus à $g'/g$ ; d'après la Remarque II.5.3, il suffit que $\gamma$ soit homotope à un lacet constant dans $\Omega$.

## CARD id=fc-ch02-041 ref=ch02-principe-argument tags=contre-exemple
### Q
Deux erreurs classiques avec $\frac{1}{2i\pi}\int_\gamma g'/g$ : oubli des multiplicités, ouvert non simplement connexe.
### R
* $g(z)=z^2$, $\gamma=C(0,1)$ : $\frac{1}{2i\pi}\int_\gamma\frac{2z}{z^2}dz=2$, pas $1$ (zéro **double**).
* $\Omega=\C^\times$, $g(z)=z$ : ni zéro ni pôle dans $\Omega$, mais $\frac{1}{2i\pi}\int_{C(0,1)}\frac{g'}{g}=1\neq0$.

## CARD id=fc-ch02-042 ref=ch02-principe-argument-domaine tags=enonce
### Q
Énoncer le principe de l'argument pour le bord d'un domaine (Corollaire II.8.2).
### R
Soit $g$ méromorphe sur un ouvert $\Omega$ et $U$ un ouvert avec $\bar U\subset\Omega$. On suppose que le bord $\Gamma$ de $U$ est un lacet **orienté positivement** ne contenant ni pôle ni zéro de $g$. Alors
$$\frac{1}{2i\pi}\int_\Gamma\frac{g'(z)}{g(z)}dz=Z(g,U)-P(g,U),$$
nombres de zéros et de pôles de $g$ dans $U$ **comptés avec multiplicité**. (poly, Corollaire II.8.2, p. 53)

## CARD id=fc-ch02-043 ref=ch02-principe-argument-domaine tags=hypothese
### Q
Quels faits **admis** utilise le Corollaire II.8.2 ? Comment s'en passer en pratique ?
### R
Le poly admet que $\Ind_z(\Gamma)=1$ pour tout $z\in U$ et le théorème de Jordan (Remarque II.8.3, p. 53). En pratique on ne l'utilise que là où c'est facile : $U$ disque (Exemple II.3.3), ou contour déformable en cercle sans traverser le point (Proposition II.3.4). Orientation négative : signe opposé. Il faut aussi $\bar U\subset\Omega$ (pas seulement $U$).

## CARD id=fc-ch02-044 ref=ch02-rouche tags=enonce
### Q
Énoncer le théorème de Rouché.
### R
Soient $f,g$ méromorphes sur un ouvert $\Omega$ et $U$ un ouvert avec $\bar U\subset\Omega$. On suppose que le bord $\Gamma$ de $U$ est un lacet orienté positivement, ne contenant ni pôle ni zéro de $f$ et $g$, et que
$$|f(z)-g(z)|<|g(z)|\quad\text{pour tout }z\in\Gamma.$$
Alors $Z(f,U)-P(f,U)=Z(g,U)-P(g,U)$ (zéros et pôles dans $U$ comptés avec multiplicité). (poly, Théorème II.8.4, p. 54)

## CARD id=fc-ch02-045 ref=ch02-rouche tags=hypothese
### Q
Rouché : pourquoi l'inégalité **stricte** et **en tout point** de $\Gamma$ ? Contre-exemple avec $\le$.
### R
L'inégalité stricte force $g(z)\neq0$ et $f(z)\neq0$ sur $\Gamma$ (si $f(z)=0$ : $|g|<|g|$), et donne $h=f/g$ avec $h(\Gamma)\subset D(1,1)\not\ni0$.

Contre-exemple : $f(z)=z-1$, $g(z)=z$ sur $C(0,1)$ : $|f-g|=1=|g|$ ; $Z(g,D(0,1))=1$ mais $Z(f,D(0,1))=0$ (le zéro de $f$ est **sur** $\Gamma$). De même $z^2-\frac14$ vs $z^2$ marche sur $C(0,1)$ mais pas sur $C(0,\frac12)$ (égalité partout, zéros $\pm\frac12$ sur le bord).

## CARD id=fc-ch02-046 ref=ch02-rouche tags=contre-exemple
### Q
Pour des fonctions **méromorphes**, Rouché donne-t-il $Z(f,U)=Z(g,U)$ ? Contre-exemple.
### R
Non, seulement $Z-P$. Sur $C(0,1)$, $f\equiv1$ et $g(z)=\frac{z-1/5}{z+1/5}$ : $|f-g|=\frac{2/5}{|z+1/5|}\le\frac12<\frac23\le|g|$. On a $Z-P=0$ pour les deux, mais $Z(g,D)=1\neq0=Z(f,D)$ et $P(g,D)=1\neq0=P(f,D)$. Si $f,g$ sont **holomorphes**, $P=0$ et on compare bien les zéros.

## CARD id=fc-ch02-047 ref=ch02-dalembert-gauss-rouche tags=enonce
### Q
Démontrer d'Alembert-Gauss par Rouché.
### R
Soit $P\in\C[X]$ de degré $n\ge1$, de coefficient dominant $a_n$ ; $f:=P$, $g(z):=a_nz^n$. Pour $|z|=R$ : $|f(z)-g(z)|\le\sum_{k<n}|a_k|R^k<|a_n|R^n=|g(z)|$ pour $R$ assez grand. Par Rouché ($f,g$ holomorphes), $f$ et $g$ ont le même nombre de zéros comptés avec multiplicité dans $D(0,R)$ : $P$ a exactement $n$ zéros dans $D(0,R)$. (poly, § II.8, p. 54) Bonus : localisation des racines.

## CARD id=fc-ch02-048 ref=ch02-primitive-simplement-connexe tags=enonce
### Q
Énoncer l'existence de primitives sur un ouvert simplement connexe, et la construction de la primitive.
### R
Toute $f$ holomorphe sur un ouvert $\Omega$ simplement connexe admet sur $\Omega$ une primitive holomorphe, unique à une constante additive près (deux primitives diffèrent d'une fonction de dérivée nulle sur $\Omega$ connexe). (poly, Théorème II.9.1, p. 55)

Construction : $z_0\in\Omega$ fixé, $F(\omega):=\int_{\gamma_\omega}f(z)\,dz$ pour un chemin $\gamma_\omega$ de $z_0$ à $\omega$ ; indépendant du chemin car $\gamma'_\omega\vee\gamma_\omega^{\mathrm{opp}}$ est un lacet homotope à un lacet constant (Théorème II.2.1) ; puis $\frac{F(\omega+h)-F(\omega)}{h}=\int_0^1f(\omega+th)dt\to f(\omega)$.

## CARD id=fc-ch02-049 ref=ch02-primitive-simplement-connexe tags=hypothese,contre-exemple
### Q
Théorème II.9.1 : contre-exemple sans simple connexité ; à quoi sert la connexité ?
### R
$f(z)=1/z$ sur $\C^\times$ n'a pas de primitive holomorphe : sinon $\int_{C(0,1)}\frac{dz}{z}=0$ (Théorème I.5.9, [[ch01-integrale-primitive]]), or cette intégrale vaut $2i\pi$.

La connexité sert à l'unicité à constante près (sur deux composantes, deux constantes différentes) et à relier tout point à $z_0$ par un chemin.

## CARD id=fc-ch02-050 ref=ch02-logarithme-def tags=definition
### Q
Définir un **logarithme** d'une fonction holomorphe $h$. Est-il unique ?
### R
Soit $h\in\Hol(\Omega)$ **ne s'annulant pas**. Un logarithme de $h$, noté $\mathrm{Log}(h)$, est toute primitive holomorphe (si elle existe) de $h'/h$ vérifiant de plus $e^{\mathrm{Log}(h)}=h$. (poly, Définition II.9.2, p. 56)

Sur un ouvert connexe, la normalisation est toujours possible ($he^{-F}$ est une constante $C\neq0$ ; on remplace $F$ par $F+c$ avec $e^c=C$) et un logarithme est défini à un multiple entier de $2i\pi$ près.

## CARD id=fc-ch02-051 ref=ch02-logarithme-existence tags=enonce
### Q
Énoncer l'existence d'un logarithme complexe (Proposition II.9.3).
### R
Si $\Omega$ est un ouvert **simplement connexe** et si $h\in\Hol(\Omega)$ **ne s'annule pas**, alors $h$ admet un logarithme complexe. (poly, Proposition II.9.3, p. 56) Preuve : primitive de $h'/h\in\Hol(\Omega)$ (Théorème II.9.1) puis normalisation.

## CARD id=fc-ch02-052 ref=ch02-logarithme-existence tags=hypothese,contre-exemple
### Q
Logarithme : contre-exemples si $\Omega$ n'est pas simplement connexe ou si $h$ s'annule. La simple connexité est-elle nécessaire pour **toute** $h$ ?
### R
* $h(z)=z$ sur $\C^\times$ (ou sur $\{1<|z|<2\}$) : pas de logarithme, sinon $1/z=h'/h$ aurait une primitive et $\int_{C(0,3/2)}\frac{dz}{z}=0$.
* Si $h$ s'annule, $h'/h$ a un pôle (de résidu la multiplicité) : pas de logarithme au voisinage du zéro.
* Non : $h=e^z$ a le logarithme $z$ sur n'importe quel ouvert. L'obstruction est $\int_\gamma h'/h\neq0$ pour un lacet $\gamma$.

## CARD id=fc-ch02-053 ref=ch02-logarithme-determination-principale-def tags=definition,formule
### Q
Définir la **détermination principale** du logarithme ; formule explicite et propriétés.
### R
Sur $\C\setminus\R_-$ (coupure $\R_-$ ; ouvert étoilé en $1$), $\mathrm{Log}$ est la primitive de $z\mapsto1/z$ **nulle en $z=1$** ; elle coïncide avec $\log$ sur $\R_+^\times$. (poly, § II.9, p. 56)

Propriétés (Exercice II.9.4, p. 56) :
$$\mathrm{Log}(z)=\log r+i\,\mathrm{Arg}(z)\quad(z=re^{i\theta},\ \mathrm{Arg}(z)=\theta\in\,]-\pi,\pi[),$$
$\exp(\mathrm{Log}\,z)=z$ sur $\C\setminus\R_-$ ; $\mathrm{Log}(\exp z)=z$ si $-\pi<\Im(z)<\pi$ ; $\mathrm{Log}(z_1)+\mathrm{Log}(z_2)=\mathrm{Log}(z_1z_2)\bmod 2i\pi$.

## CARD id=fc-ch02-054 ref=ch02-logarithme-determination-principale-def tags=contre-exemple
### Q
Vrai ou faux : $\mathrm{Log}(z_1z_2)=\mathrm{Log}\,z_1+\mathrm{Log}\,z_2$ ; $\mathrm{Log}(e^z)=z$ ; $\mathrm{Log}$ se prolonge continûment à $\R_-^\times$.
### R
Tous faux en général.
* $z_1=z_2=e^{2i\pi/3}$ : $\mathrm{Log}(z_1z_2)=\mathrm{Log}(e^{-2i\pi/3})=-\frac{2i\pi}{3}\neq\frac{4i\pi}{3}$.
* $\mathrm{Log}(e^{2i\pi})=\mathrm{Log}(1)=0\neq2i\pi$.
* En $x<0$, limites $\log|x|+i\pi$ (par le haut) et $\log|x|-i\pi$ (par le bas) : saut de $2i\pi$.

## CARD id=fc-ch02-055 ref=ch02-puissance-complexe-def tags=definition
### Q
Définir $h^\alpha$ et $z^\alpha$ ($\alpha\in\C$). Propriétés d'holomorphie.
### R
Si $\mathrm{Log}(h)$ est un logarithme de $h$ : $h^\alpha(z):=e^{\alpha\,\mathrm{Log}(h(z))}$ (dépend du logarithme choisi). Avec la détermination principale : $z^\alpha:=e^{\alpha\,\mathrm{Log}(z)}$ sur $\C\setminus\R_-$ ; $z\mapsto z^\alpha$ est holomorphe sur $\C\setminus\R_-$ et $\alpha\mapsto z^\alpha$ est holomorphe sur $\C$. Cas $\alpha=\frac12$ : racine carrée principale $\sqrt z$, qui prolonge la racine usuelle de $\R_+^\times$ et ne se prolonge pas holomorphiquement à $\C$. (poly, § II.9, p. 56)

> ⚠️ $(z_1z_2)^\alpha\neq z_1^\alpha z_2^\alpha$ en général.

## CARD id=fc-ch02-056 ref=ch02-exemple-trou-de-serrure tags=enonce
### Q
Résultat et schéma de calcul de $\displaystyle\int_0^{+\infty}\frac{x^{\alpha-1}}{1+x}dx$, $0<\alpha<1$ (Exemple II.9.7).
### R
$$\int_0^{+\infty}\frac{x^{\alpha-1}}{1+x}dx=\frac{\pi}{\sin(\alpha\pi)}.$$
$f(z)=\frac{z^{\alpha-1}}{1+z}$ avec $z^{\alpha-1}=e^{(\alpha-1)\mathrm{Log}z}$ pour la détermination de **coupure $\R_+$**, argument dans $]0,2\pi[$ (pas la principale !). Pôle simple $-1=e^{i\pi}$, $\Res_{-1}(f)=e^{(\alpha-1)i\pi}=-e^{i\alpha\pi}$. Contour en trou de serrure : $C_R$ ($\le2\pi R^{\alpha-1}\to0$ car $\alpha<1$), $C_\eps$ ($\le2\pi\eps^\alpha\to0$ car $\alpha>0$), $\gamma_+\to J$, $\gamma_-\to-e^{2i\pi\alpha}J$. D'où $J(1-e^{2i\pi\alpha})=-2i\pi e^{i\alpha\pi}$. (poly, Exemple II.9.7, p. 57)

## CARD id=fc-ch02-057 ref=ch02-laurent-couronne-cauchy tags=enonce,formule
### Q
Développement de Laurent d'une fonction holomorphe sur un disque épointé (Exercice II.7.4, questions 1-4) : énoncé et formule des coefficients.
### R
Soit $f$ holomorphe sur $D(0,1)\setminus\{0\}$ (aucune hypothèse de méromorphie). Pour $0<s<|z|<r<1$ :
$$f(z)=\frac{1}{2i\pi}\int_{\partial D(0,r)}\frac{f(\zeta)}{\zeta-z}d\zeta-\frac{1}{2i\pi}\int_{\partial D(0,s)}\frac{f(\zeta)}{\zeta-z}d\zeta,$$
et $f(z)=\sum_{n\in\Z}a_nz^n$ sur $D(0,1)\setminus\{0\}$ avec
$$a_n=\frac{1}{2i\pi}\int_{\partial D(0,r)}\frac{f(z)}{z^{n+1}}dz,$$
indépendant de $r\in\,]0,1[$ (l'intégrale sur $\partial D(0,r)$ d'une fonction holomorphe sur le disque épointé ne dépend pas de $r$). (poly, Exercice II.7.4, p. 50)

## CARD id=fc-ch02-058 ref=ch02-classification-singularites tags=enonce
### Q
Classification des singularités isolées et théorème de Casorati-Weierstrass (Exercice II.7.4, questions 5-8).
### R
Soit $f$ holomorphe sur $D(0,1)\setminus\{0\}$.
* $f$ se prolonge holomorphiquement à $D(0,1)$ $\iff$ $|f(z)|$ reste borné quand $z\to0$ (effaçable).
* $0$ est un pôle ($f$ méromorphe non holomorphe sur $D(0,1)$) $\iff$ $|f(z)|\to+\infty$ quand $z\to0$.
* Sinon ($f$ non méromorphe en $0$ : **singularité essentielle**), pour tout $\eps>0$, $f(D(0,\eps)\setminus\{0\})$ est **dense** dans $\C$ (Casorati-Weierstrass). Outil : si $D(a,r)$ évite cette image, $\frac{1}{f-a}$ est bornée donc se prolonge.

(poly, Exercice II.7.4, p. 50-51 ; Picard : l'image est $\C$ ou $\C$ privé d'un point.) Exemple : $e^{1/z}$.

## CARD id=fc-ch02-059 ref=ch02-automorphismes-de-c tags=enonce
### Q
Quels sont les automorphismes holomorphes de $\C$ ? Idée de preuve.
### R
Si $f:\C\to\C$ est bijective holomorphe de réciproque holomorphe et $f(0)=0$, alors $f(z)=az$ avec $a\in\C^\times$ ; en général $f(z)=az+b$, $a\in\C^\times$, $b\in\C$. (poly, Exercice II.7.5, p. 51)

Idée : $f(\{|z|>1\})$ évite l'ouvert $f(D(0,1))$ (injectivité), donc n'est pas dense : $g(z)=f(1/z)$ n'a pas de singularité essentielle en $0$ (Casorati-Weierstrass), elle y est méromorphe, donc $f$ est polynomiale (Exercice II.7.2) ; injective $\Rightarrow$ degré $1$.

## CARD id=fc-ch02-060 ref=ch02-schwarz-reflexion tags=enonce
### Q
Énoncer le principe de réflexion de Schwarz (Exercice II.7.9).
### R
$D$ disque unité, $D^\pm=\{z\in D:\pm\Im(z)\ge0\}$.
1. Si $f:D\to\C$ est continue sur $D$ et holomorphe sur $D\setminus\,]-1,1[$, alors $f$ est holomorphe sur $D$.
2. Si $f:D^+\to\C$ est continue sur $D^+$, holomorphe sur $D^+\setminus\,]-1,1[$ et **réelle sur $]-1,1[$**, alors $F(z)=f(z)$ sur $D^+$, $F(z)=\overline{f(\bar z)}$ sur $D^-$ définit une fonction holomorphe sur $D$.

(poly, Exercice II.7.9, p. 51-52 ; se généralise à $\Omega$ rencontrant $\R$, stable par conjugaison pour 2.) Sans « réelle » : $f\equiv i$ donne $F=i$ en haut, $-i$ en bas, discontinue.

## CARD id=fc-ch02-061 ref=ch02-weierstrass-p-fonction tags=enonce
### Q
Fonction $\wp$ de Weierstrass (Exercice II.7.10) : définition et propriétés à retenir.
### R
$\Lambda=\Z\omega_1\oplus\Z\omega_2$ réseau ($\omega_1,\omega_2$ $\R$-libres) ; $\sum_{\lambda\neq0}|\lambda|^{-k}$ converge pour $k\ge3$.
* Une fonction **entière** $\Lambda$-périodique est constante (bornée sur un parallélogramme compact, Liouville).
* $\wp(z)=\frac{1}{z^2}+\sum_{\lambda\in\Lambda\setminus\{0\}}\Big(\frac{1}{(z+\lambda)^2}-\frac{1}{\lambda^2}\Big)$ est méromorphe sur $\C$, paire, $\Lambda$-périodique (via $\wp'$), à pôles doubles exactement aux points de $\Lambda$.
* Avec $E_k(\Lambda)=\sum_{\lambda\neq0}\lambda^{-k}$ ($E_k=0$ pour $k$ impair) : $\wp'^2=4\wp^3-60E_4(\Lambda)\wp-140E_6(\Lambda)$.

(poly, Exercice II.7.10, p. 52)

## CARD id=fc-ch02-062 ref=none tags=notation
### Q
Notations : $\mathcal M(\Omega)$, $\mathcal Z(f,\Omega)$, $\mathcal P(f,\Omega)$, $Z(f,\Omega)$, $P(f,\Omega)$, $m(s)$.
### R
* $\mathcal M(\Omega)$ : espace des fonctions méromorphes sur $\Omega$ (un corps si $\Omega$ connexe).
* $\mathcal Z(f,\Omega)$, $\mathcal P(f,\Omega)$ : **ensembles** des zéros, des pôles de $f$ dans $\Omega$.
* $m(s)$ : multiplicité de $s$ comme zéro ou comme pôle.
* $Z(f,\Omega)=\sum_{s\in\mathcal Z(f,\Omega)}m(s)$, $P(f,\Omega)=\sum_{s\in\mathcal P(f,\Omega)}m(s)$ : **nombres** de zéros, de pôles comptés avec multiplicité (quand c'est fini) ; idem $Z(f,U)$, $P(f,U)$.

(poly, Définition II.4.2, p. 43)

## CARD id=fc-ch02-063 ref=none tags=notation
### Q
Notations : $D(z_0,r)$, $\bar D(z_0,r)$, $D(z_0,r)^\times$, $C(z_0,r)$, $\partial D(0,r)$, $C_{\eps,\bar\eps}$, $\C^\times$, $\R_-$, $\R_+^\times$.
### R
* $D(z_0,r)$ / $\bar D(z_0,r)$ : disque ouvert / fermé de centre $z_0$, rayon $r$.
* $D(z_0,r)^\times=D(z_0,r)\setminus\{z_0\}$ : disque **épointé**.
* $C(z_0,r)$ (ou $\partial D(z_0,r)$) : cercle, parcouru dans le sens **trigonométrique**.
* $C_{\eps,\bar\eps}=\{z\in\Omega:\eps<|z-z_0|<\bar\eps\}$ : couronne (Proposition II.4.6).
* $\C^\times=\C\setminus\{0\}$ ; $\R_-=\,]-\infty,0]$ (la coupure) ; $\R_+^\times=\,]0,+\infty[$.

## CARD id=fc-ch02-064 ref=none tags=notation
### Q
Notations : $\Gamma$, $\gamma^{\mathrm{opp}}$, $\gamma_1\vee\gamma_2$, $\Ind_{z_0}(\gamma)$, $\Res_{z_0}(f)$, $\mathrm{Log}$, $\mathrm{Arg}$.
### R
* $\Gamma=\gamma([0,1])$ : image (compacte) du lacet $\gamma$.
* $\gamma^{\mathrm{opp}}$ : chemin parcouru en sens inverse ; $\gamma_1\vee\gamma_2$ : composé (concaténation) de deux chemins composables (Définition I.5.1, p. 15).
* $\Ind_{z_0}(\gamma)$ : indice de $\gamma$ en $z_0\notin\Gamma$ (point en indice, lacet entre parenthèses).
* $\Res_{z_0}(f)$ : résidu (le poly écrit $\mathrm{res}_{z_0}(f)$).
* $\mathrm{Log}$ : un logarithme ; par défaut la détermination principale sur $\C\setminus\R_-$ ; $\log$ : logarithme réel ; $\mathrm{Arg}(z)\in\,]-\pi,\pi[$ : argument principal.

## CARD id=fc-ch02-065 ref=ch02-invariance-homotopie-integrale tags=methode
### Q
Méthode du « grillage » (preuve du Théorème II.2.1) : les étapes.
### R
1. Recouvrir le compact $\gamma([0,1]^2)$ par des disques $D_\alpha\subset\Omega$ où $f$ a une primitive (primitive locale).
2. Prendre un **nombre de Lebesgue** $\delta$ du recouvrement (Proposition II.2.4) ; par **uniforme continuité** (Heine), choisir $n$ tel que l'image de chaque petit carré $K^{(n)}_{i,j}$ de côté $1/n$ soit dans un $D_\alpha$.
3. Remplacer les images des bords par des quadrilatères **affines par morceaux** $\Gamma_{i,j}$ (contenus dans $D_\alpha$ convexe) : $\int_{\Gamma_{i,j}}f=0$.
4. Sommer : les côtés intérieurs se compensent ; il reste $\int_{\gamma_1}f-\int_{\gamma_0}f$ (le chemin du point base $v$ est parcouru aller-retour), d'où $0$.

## CARD id=fc-ch02-066 ref=ch02-formule-residus tags=methode
### Q
Méthode de preuve de la formule des résidus : comment se ramène-t-on à Cauchy ?
### R
1. Se ramener à un nombre **fini** de pôles $S$ (compacité de l'image d'une homotopie de $\gamma$ vers un lacet constant ; les pôles hors de cette zone ont un indice nul).
2. En chaque $s\in S$, **partie polaire** $Q_s(z)=\sum_{-N\le n\le-1}a_n(z-s)^n$ ; $f-\sum_{s\in S}Q_s$ est holomorphe sur $\Omega$ simplement connexe, donc d'intégrale nulle sur $\gamma$ (Corollaire II.2.2).
3. Pour $n\neq-1$, $(z-s)^n$ a une primitive près de $\gamma$ : seul $a_{-1}\int_\gamma\frac{dz}{z-s}=2i\pi\Res_s(f)\Ind_s(\gamma)$ survit.

## CARD id=fc-ch02-067 ref=ch02-rouche tags=methode
### Q
Méthode de preuve du théorème de Rouché.
### R
Poser $h=f/g$ (méromorphe). L'hypothèse s'écrit $|1-h(z)|<1$ sur $\Gamma$, donc $h(\Gamma)\subset D(1,1)$, convexe donc simplement connexe et ne contenant pas $0$ : l'indice de $0$ par rapport au lacet $h\circ\Gamma$ est nul (Cauchy pour $1/w$ sur $D(1,1)$). Changement de variable :
$$0=\frac{1}{2i\pi}\int_{h(\Gamma)}\frac{dw}{w}=\frac{1}{2i\pi}\int_\Gamma\frac{h'}{h}=\frac{1}{2i\pi}\int_\Gamma\frac{f'}{f}-\frac{1}{2i\pi}\int_\Gamma\frac{g'}{g},$$
puis principe de l'argument (Corollaire II.8.2) des deux côtés.

## CARD id=fc-ch02-068 ref=ch02-rouche tags=methode
### Q
Pour compter les zéros d'un polynôme dans un disque ou une couronne, on fait quoi ? Exemple : $Q(z)=z^4-6z+3$ dans $\{1<|z|<2\}$.
### R
Sur chaque cercle, on choisit le **terme dominant** $g$ (zéros connus) et on vérifie $|Q-g|<|g|$ par inégalité triangulaire ; Rouché donne $Z(Q,D)=Z(g,D)$.
* $|z|=1$, $g=-6z+3$ : $|Q-g|=|z|^4=1<3\le|6z-3|$ ; $g$ a un zéro ($\frac12$) : **1** zéro de $Q$ dans $D(0,1)$.
* $|z|=2$, $g=z^4$ : $|Q-g|=|-6z+3|\le15<16$ : **4** zéros dans $D(0,2)$.

L'inégalité stricte exclut les zéros sur $|z|=1$ : **3** zéros dans la couronne. (poly, Exercice II.8.5, p. 54)

## CARD id=fc-ch02-069 ref=ch02-formule-residus-pratique tags=methode
### Q
Méthode générale pour calculer une intégrale réelle par les résidus.
### R
1. Choisir une fonction auxiliaire $f$ méromorphe : $e^{ikz}$ au lieu de $\cos(kz)$ (qui explose en $e^{k|\Im z|}$), $z^{\alpha-1}$ ou $\mathrm{Log}$ avec une **coupure adaptée** (qui ne passe pas par les pôles).
2. Choisir un contour fermé : demi-disque, secteur, rectangle, trou de serrure ; orienté dans le sens direct.
3. Lister les pôles **à l'intérieur**, calculer les résidus, appliquer (II.6.1).
4. Majorer les arcs parasites par $\big|\int_\gamma f\big|\le\mathrm{long}(\gamma)\sup_\gamma|f|$ et faire $R\to\infty$, $\eps\to0$.
5. Identifier l'intégrale cherchée (partie réelle, facteur $1-e^{2i\pi\alpha}$...).

## CARD id=fc-ch02-070 ref=ch02-indice-invariance-homotopie tags=methode
### Q
En copie, comment justifier proprement que l'indice d'un contour usuel (demi-disque, rectangle) vaut $1$ en un point $z_0$ intérieur ?
### R
Exhiber une homotopie de lacets **dans $\C\setminus\{z_0\}$** entre le contour et un cercle $C(z_0,\rho)$ parcouru dans le sens direct (par exemple la projection radiale $\gamma_s(t)=z_0+\big((1-s)+\frac{s\rho}{|\gamma(t)-z_0|}\big)(\gamma(t)-z_0)$ si le domaine est étoilé en $z_0$), puis appliquer la Proposition II.3.4 et l'Exemple II.3.3. Sinon, utiliser que l'indice est constant sur les composantes connexes de $\C\setminus\Gamma$ et nul sur la composante non bornée (Proposition II.3.2).
