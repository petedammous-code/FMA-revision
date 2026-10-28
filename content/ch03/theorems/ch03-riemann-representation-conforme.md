---
id: ch03-riemann-representation-conforme
type: theorem
chapter: 3
title: Théorème de représentation conforme de Riemann
ref: Théorème III.4.1
page: 66
importance: 3
depends: [ch03-riemann-sigma-non-vide, ch03-riemann-etape-koebe, ch02-logarithme-existence, ch01-application-ouverte, ch01-principe-maximum, ch01-automorphismes-disque, ch01-lemme-schwarz, ch01-estimees-cauchy, ch03-montel, ch03-weierstrass, ch03-hurwitz, ch01-bijection-holomorphe-reciproque-holomorphe]
tags: [riemann, representation-conforme, biholomorphisme, montel, hurwitz, schwarz, extremal]
---
## Intuition

> 💡 Prenez n'importe quel ouvert « d'un seul tenant et sans trou », aussi tordu soit-il (un carré, une bande, le plan privé d'une demi-droite, l'intérieur d'un flocon de von Koch...), pourvu que ce ne soit pas $\C$ tout entier : il existe une bijection holomorphe de cet ouvert sur le disque unité $\mathbb D=D(0,1)$. Pour l'analyse complexe, tous ces ouverts **sont** des disques.

La stratégie est un **problème d'optimisation** : parmi toutes les fonctions holomorphes injectives $\psi:\Omega\to\mathbb D$ qui envoient un point fixé $z_0$ sur $0$, on cherche celle qui « étire le plus » en $z_0$, c'est-à-dire qui maximise $|\psi'(z_0)|$. Intuitivement, si $\psi$ ne remplit pas tout $\mathbb D$, il reste de la place pour l'étirer davantage : la maximisante doit être surjective. L'existence de la maximisante vient de la compacité donnée par Montel ([[ch03-montel]]).

Vocabulaire : **simplement connexe** = connexe et tout lacet est homotope à un lacet constant ([[ch02-homotopie-simplement-connexe]]) ; **conformément équivalent** = il existe un biholomorphisme ([[ch03-conformement-equivalent]]) ; $f_a(z)=\dfrac{z-a}{1-\bar az}$ ($a\in\mathbb D$) sont les automorphismes de $\mathbb D$ de l'Exercice I.13.2 ([[ch01-automorphismes-disque]]) ; $f_a(a)=0$, $f_a^{-1}=f_{-a}$.

## Énoncé

**Théorème (poly, Théorème III.4.1, p. 66).** Tout ouvert connexe et simplement connexe $\Omega$ de $\C$, qui est distinct de $\C$, est conformément équivalent au disque unité $\mathbb D$. Autrement dit, il existe un biholomorphisme $h$ de $\Omega$ dans $\mathbb D$.

(« dans » est à lire « sur » : $h$ est une bijection de $\Omega$ **sur** $\mathbb D$.)

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** Le principe du maximum ([[ch01-principe-maximum]]), le théorème de l'application ouverte ([[ch01-application-ouverte]]) et Hurwitz ([[ch03-hurwitz]]) sont énoncés sur un ouvert connexe : ils servent à montrer que $\psi(\Omega)\subset\mathbb D$ (et non seulement $\bar{\mathbb D}$) et que la limite extrémale est injective. (Dans le poly, la connexité fait d'ailleurs partie de la définition de « simplement connexe ».)

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ : chaque lacet de $\Omega$ est contenu dans un des deux disques (image connexe de $[0,1]$), donc contractile, mais $\Omega$ n'est pas connexe. Un biholomorphisme $h:\Omega\to\mathbb D$ serait un homéomorphisme, et $\mathbb D$ est connexe : impossible.

### H2 — $\Omega$ simplement connexe

**Rôle.** Elle garantit (Proposition II.9.3, [[ch02-logarithme-existence]]) qu'une fonction holomorphe **qui ne s'annule pas** sur $\Omega$ a un logarithme, donc une racine carrée holomorphe. On s'en sert deux fois : pour $z-\omega_0$ (étape 1, [[ch03-riemann-sigma-non-vide]]) et pour $f_\alpha\circ\psi$ (étape 2, [[ch03-riemann-etape-koebe]]).

**Si on la retire.** La couronne $A=\{1<|z|<2\}$ est connexe, distincte de $\C$, mais pas conformément équivalente à $\mathbb D$. En effet, si $h:A\to\mathbb D$ était un biholomorphisme, $A$ serait simplement connexe : pour tout lacet $\gamma$ de $A$, $h\circ\gamma$ est homotope dans $\mathbb D$ (convexe) à un lacet constant par $H(s,t)=(1-s)\,h(\gamma(t))$, et $h^{-1}\circ H$ est une homotopie de $\gamma$ vers un lacet constant dans $A$. Or $A$ n'est pas simplement connexe : $z\mapsto1/z$ est holomorphe sur $A$ et $\int_{C(0,3/2)}\frac{dz}{z}=2i\pi\ne0$, ce qui contredirait le théorème de Cauchy sur un simplement connexe ([[ch02-cauchy-simplement-connexe]]). Même argument pour $\C^\times$ ou $\mathbb D\setminus\{0\}$.

### H3 — $\Omega\ne\C$

**Rôle.** Elle fournit un point $\omega_0\notin\Omega$, donc une fonction $z\mapsto z-\omega_0$ qui ne s'annule pas sur $\Omega$, dont on prend la racine carrée pour construire un premier élément de la famille $\Sigma$ (étape 1).

**Si on la retire.** $\Omega=\C$ est connexe et simplement connexe (étoilé), mais toute fonction holomorphe $h:\C\to\mathbb D$ est bornée par $1$ donc constante (Liouville, [[ch01-liouville]]) : il n'existe même pas de fonction holomorphe injective de $\C$ dans $\mathbb D$.

## Idée de la preuve

On considère $\Sigma_{z_0}=\{\psi:\Omega\to\mathbb D$ holomorphe injective, $\psi(z_0)=0\}$, non vide grâce à une racine carrée de $z-\omega_0$. Si $\psi\in\Sigma_{z_0}$ n'est pas surjective, une autre racine carrée et le lemme de Schwarz donnent $\psi_1\in\Sigma_{z_0}$ avec $|\psi_1'(z_0)|>|\psi'(z_0)|$. Montel + Weierstraß + Hurwitz donnent un $h\in\Sigma_{z_0}$ qui **maximise** $|h'(z_0)|$ : il est donc surjectif.

## Preuve

Posons
$$
\Sigma=\{f\in\Hol(\Omega):\ f(\Omega)\subset\mathbb D,\ \text{et } f \text{ est injective}\},\qquad \Sigma_{z_0}=\{f\in\Sigma\mid f(z_0)=0\},
$$
où $z_0\in\Omega$ est fixé.

**Étape 1 : $\Sigma_{z_0}\ne\emptyset$.** (Détails : [[ch03-riemann-sigma-non-vide]].) Soit $\omega_0\in\C\setminus\Omega$ (H3). Comme $\Omega$ est simplement connexe et $z-\omega_0\ne0$ sur $\Omega$, la Proposition II.9.3 ([[ch02-logarithme-existence]]) donne $u\in\Hol(\Omega)$ avec $e^{u(z)}=z-\omega_0$ ; $\varphi:=e^{u/2}$ vérifie $\varphi(z)^2=z-\omega_0$. Si $\varphi(z)=\pm\varphi(z')$, alors $z-\omega_0=z'-\omega_0$, donc $z=z'$ : $\varphi$ est injective, et $\varphi(z)=-\varphi(z')$ est impossible (cela donnerait $z=z'$ puis $\varphi(z)=0$, alors que $\varphi(z)^2=z-\omega_0\ne0$). Soit $a\in\varphi(\Omega)$ ; $\varphi$ étant non constante sur le connexe $\Omega$, $\varphi(\Omega)$ est ouvert ([[ch01-application-ouverte]]) : il existe $D(a,r)\subset\varphi(\Omega)$ avec $0<r<|a|$ (possible car $a\ne0$). Alors $D(-a,r)\cap\varphi(\Omega)=\emptyset$ (si $\varphi(z)\in D(-a,r)$, $-\varphi(z)\in D(a,r)\subset\varphi(\Omega)$, soit $-\varphi(z)=\varphi(z')$, impossible). Posons $\psi=\dfrac{r}{\varphi+a}$ : $|\varphi(z)+a|\ge r$ sur $\Omega$, donc $\psi$ est holomorphe et $|\psi|\le1$ ; $\psi$ est injective (composée de $\varphi$ et d'une homographie injective), donc non constante, et le principe du maximum ([[ch01-principe-maximum]]) interdit $|\psi(z)|=1$ (ce serait un maximum de $|\psi|$) : $\psi(\Omega)\subset\mathbb D$, $\psi\in\Sigma$. Enfin $f_{\psi(z_0)}\circ\psi\in\Sigma_{z_0}$, car $f_{\psi(z_0)}$ est une bijection holomorphe de $\mathbb D$ sur $\mathbb D$ qui envoie $\psi(z_0)$ sur $0$.

**Étape 2 : un élément non surjectif n'est pas extrémal.** (Détails : [[ch03-riemann-etape-koebe]].) Soit $\psi\in\Sigma_{z_0}$ non surjective et $\alpha\in\mathbb D\setminus\psi(\Omega)$. La fonction $f_\alpha\circ\psi$ est dans $\Sigma$ et ne s'annule pas sur $\Omega$ (car $f_\alpha(w)=0\iff w=\alpha$). Comme à l'étape 1, il existe $g\in\Hol(\Omega)$ avec $g^2=f_\alpha\circ\psi$. Si $g(z)=g(z')$, alors $f_\alpha\circ\psi(z)=f_\alpha\circ\psi(z')$ donc $z=z'$ : $g$ est injective ; et $|g(z)|^2=|f_\alpha\circ\psi(z)|<1$ : $g\in\Sigma$. Posons $\beta:=g(z_0)\in\mathbb D$, $s:z\mapsto z^2$, $\psi_1:=f_\beta\circ g\in\Sigma_{z_0}$. Alors $g=f_{-\beta}\circ\psi_1$ et
$$
\psi=f_{-\alpha}\circ g^2=f_{-\alpha}\circ s\circ g=f_{-\alpha}\circ s\circ f_{-\beta}\circ\psi_1=F\circ\psi_1,\qquad F:=f_{-\alpha}\circ s\circ f_{-\beta}.
$$
Comme $\psi_1(z_0)=0$, la dérivation des fonctions composées donne $\psi'(z_0)=F'(0)\,\psi_1'(z_0)$. Or $F\in\Hol(\mathbb D)$, $F(\mathbb D)\subset\mathbb D$, $F(0)=F(\psi_1(z_0))=\psi(z_0)=0$, et $F$ n'est pas injective ($f_{-\alpha}$, $f_{-\beta}$ sont bijectives, $s$ ne l'est pas : $s(w)=s(-w)$), donc $F$ n'est pas une rotation. Le lemme de Schwarz ([[ch01-lemme-schwarz]], point 2) donne $|F'(0)|<1$. Comme $\psi_1'(z_0)\ne0$ ($\psi_1$ injective, [[ch01-bijection-holomorphe-reciproque-holomorphe]]), on obtient
$$
|\psi'(z_0)|<|\psi_1'(z_0)| .
$$

**Étape 3 : $\eta:=\sup\{|\psi'(z_0)|,\ \psi\in\Sigma_{z_0}\}$ est fini et $>0$.** Soit $\rho>0$ avec $\bar D(z_0,\rho)\subset\Omega$. Pour $\psi\in\Sigma_{z_0}$, l'estimée de Cauchy ([[ch01-estimees-cauchy]]) donne $|\psi'(z_0)|\le\frac{1}{\rho}\sup_{C(z_0,\rho)}|\psi|\le\frac1\rho$. Donc $\eta\le1/\rho<+\infty$. Et $\eta>0$ car $\Sigma_{z_0}\ne\emptyset$ et tout $\psi\in\Sigma_{z_0}$, injectif, vérifie $\psi'(z_0)\ne0$.

D'après l'étape 2, **si $h\in\Sigma_{z_0}$ vérifie $|h'(z_0)|=\eta$, alors $h$ est surjective**, i.e. $h(\Omega)=\mathbb D$ (sinon il existerait $\psi_1\in\Sigma_{z_0}$ avec $|\psi_1'(z_0)|>\eta$). Il reste à montrer qu'un tel $h$ existe.

**Étape 4 : existence d'un extrémal.** Par définition de $\eta$, il existe $(\psi_n)\subset\Sigma_{z_0}$ avec $|\psi_n'(z_0)|\to\eta$. Comme $\sup_\Omega|\psi|\le1$ pour tout $\psi\in\Sigma_{z_0}$, la famille $\Sigma_{z_0}$ est localement uniformément bornée, donc normale (Montel, [[ch03-montel]]) : il existe une sous-suite $(\psi_{n_k})$ qui converge localement uniformément sur $\Omega$ vers une fonction $h$, holomorphe par Weierstraß ([[ch03-weierstrass]], point 1). De plus :

* $|h(z)|=\lim|\psi_{n_k}(z)|\le1$ et $h(z_0)=\lim\psi_{n_k}(z_0)=0$ ;
* par le point 2 du théorème de Weierstraß, $\psi_{n_k}'(z_0)\to h'(z_0)$, donc $|h'(z_0)|=\eta>0$ : $h$ n'est pas constante ;
* $h$ non constante sur le connexe $\Omega$ et $|h|\le1$ : par le principe du maximum, $|h|$ n'atteint pas la valeur $1$ (ce serait un maximum), donc $h(\Omega)\subset\mathbb D$ ;
* les $\psi_{n_k}$ sont injectives et $h$ n'est pas constante : par le théorème de Hurwitz ([[ch03-hurwitz]], point 2), $h$ est injective.

Donc $h\in\Sigma_{z_0}$ et $|h'(z_0)|=\eta$ : par l'étape 3, $h$ est surjective. C'est une bijection holomorphe de $\Omega$ sur $\mathbb D$.

**Étape 5 : biholomorphisme.** D'après la Remarque I.14.3 ([[ch01-bijection-holomorphe-reciproque-holomorphe]]), la réciproque d'une bijection holomorphe entre deux ouverts de $\C$ est automatiquement holomorphe : $h$ est un biholomorphisme de $\Omega$ sur $\mathbb D$. $\square$

## Preuve à trous

Soient $z_0\in\Omega$ et $\Sigma_{z_0}$ l'ensemble des $f\in\Hol(\Omega)$ injectives, à valeurs dans $\mathbb D$, avec $f(z_0)=0$.

*Étape 1.* Pour $\omega_0\notin\Omega$, on construit <trou indice="Ω simplement connexe, z − ω₀ ne s'annule pas">une racine carrée holomorphe $\varphi=e^{u/2}$ de $z-\omega_0$, injective et telle que $\varphi(\Omega)\cap(-\varphi(\Omega))=\emptyset$</trou> ; avec $D(a,r)\subset\varphi(\Omega)$, $0<r<|a|$, la fonction $\psi=r/(\varphi+a)$ est dans $\Sigma$, et $f_{\psi(z_0)}\circ\psi\in\Sigma_{z_0}$.

*Étape 2.* Si $\psi\in\Sigma_{z_0}$ omet $\alpha\in\mathbb D$, soit $g$ une racine carrée holomorphe de $f_\alpha\circ\psi$, $\beta=g(z_0)$, $\psi_1=f_\beta\circ g\in\Sigma_{z_0}$. Alors $\psi=F\circ\psi_1$ avec <trou indice="remonter les compositions">$F=f_{-\alpha}\circ s\circ f_{-\beta}$, $s(w)=w^2$</trou>, et $F:\mathbb D\to\mathbb D$, $F(0)=0$, $F$ non injective ; donc <trou indice="quel lemme, quel cas d'égalité ?">par le lemme de Schwarz, $|F'(0)|<1$ (sinon $F$ serait une rotation, donc injective)</trou>, d'où $|\psi'(z_0)|=|F'(0)|\,|\psi_1'(z_0)|<|\psi_1'(z_0)|$.

*Étape 3.* $\eta=\sup_{\Sigma_{z_0}}|\psi'(z_0)|\le1/\rho$ par Cauchy si $\bar D(z_0,\rho)\subset\Omega$, et $\eta>0$. Un $h\in\Sigma_{z_0}$ avec $|h'(z_0)|=\eta$ est surjectif par l'étape 2.

*Étape 4.* Soit $(\psi_n)\subset\Sigma_{z_0}$ avec $|\psi_n'(z_0)|\to\eta$. La famille étant bornée par $1$, <trou indice="compacité dans Hol(Ω)">le théorème de Montel donne une sous-suite convergeant localement uniformément vers $h$, holomorphe par Weierstraß, avec $\psi_{n_k}'(z_0)\to h'(z_0)$</trou>. Alors $|h'(z_0)|=\eta>0$, donc $h$ n'est pas constante, $h(\Omega)\subset\mathbb D$ (principe du maximum), et <trou indice="limite de fonctions injectives">$h$ est injective par le théorème de Hurwitz</trou>. Donc $h\in\Sigma_{z_0}$ est extrémal, donc surjectif ; sa réciproque est holomorphe (Remarque I.14.3). $\square$

## Exemples

* **Le plan fendu, et la valeur de $\eta$.** $\Omega=\C\setminus\R_-$, $z_0=1$. La fonction $h(z)=\dfrac{\sqrt z-1}{\sqrt z+1}$ ($\sqrt{\ }$ principale) est un biholomorphisme de $\Omega$ sur $\mathbb D$ ([[ch03-conformement-equivalent]]) avec $h(1)=0$ et $h'(1)=\dfrac{2}{(\sqrt1+1)^2}\cdot\dfrac{1}{2\sqrt1}=\dfrac14$. Elle est extrémale : si $\psi\in\Sigma_1$, $\psi\circ h^{-1}:\mathbb D\to\mathbb D$ fixe $0$, donc (Schwarz) $|(\psi\circ h^{-1})'(0)|=|\psi'(1)|/|h'(1)|\le1$. Ainsi $\eta=1/4$, conforme à la borne de Cauchy $\eta\le1/\rho$ pour tout $\rho<\dist(1,\R_-)=1$.
* **Bande et demi-plan.** $B=\{0<\Im(z)<\pi\}$ : $z\mapsto\frac{e^z-i}{e^z+i}$ ; $H=\{\Im(z)>0\}$ : $z\mapsto\frac{z-i}{z+i}$ (calculs dans [[ch03-conformement-equivalent]]). Riemann garantit aussi l'existence pour un carré ou un triangle, sans formule élémentaire (formule de Schwarz–Christoffel, hors programme).
* **Unicité (complément).** Si $h_1,h_2:\Omega\to\mathbb D$ sont deux biholomorphismes avec $h_j(z_0)=0$, alors $h_2\circ h_1^{-1}$ est un automorphisme de $\mathbb D$ fixant $0$, donc une rotation (Schwarz, point 3) : $h_2=e^{i\theta}h_1$. Si l'on impose de plus $h_j'(z_0)>0$, alors $e^{i\theta}=1$ : le biholomorphisme normalisé est **unique**.

## Pièges

* > ⚠️ Vérifier les **trois** hypothèses : ouvert connexe, simplement connexe, $\ne\C$. Oublier « $\ne\C$ » est l'erreur classique ($\C$ est simplement connexe !).
* Le théorème est purement **existentiel** : il ne donne pas de formule ; en exercice on construit $h$ par composition de transformations explicites (homographies, $\exp$, $\mathrm{Log}$, puissances).
* Dans l'étape 4, la limite d'une suite de $\Sigma_{z_0}$ pourrait a priori être constante (alors non injective) ou toucher le cercle unité : c'est $|h'(z_0)|=\eta>0$ qui exclut la constante, puis le principe du maximum et Hurwitz qui remettent $h$ dans $\Sigma_{z_0}$.
* Le lemme de Schwarz est utilisé dans sa forme « $|F'(0)|=1\Rightarrow F$ rotation » : c'est la **non-injectivité** de $F$ (due à $s:w\mapsto w^2$) qui donne l'inégalité **stricte**.
* « Biholomorphisme de $\Omega$ dans $\mathbb D$ » signifie bijection de $\Omega$ **sur** $\mathbb D$ ; injectif à valeurs dans $\mathbb D$ ne suffit pas (c'est $\Sigma$).
* On peut remplacer $\mathbb D$ par le demi-plan $H$ ([[ch03-riemann-demi-plan]]), mais pas par $\C$.
