## CARD id=fc-ch03-001 ref=ch03-convergence-localement-uniforme tags=definition,enonce
### Q
Définir « $(f_n)_{n\in\mathbb N}$ converge localement uniformément » sur un ouvert $\Omega\subset\C$, et « localement uniformément de Cauchy ».
### R
$(f_n)$ (fonctions $\Omega\to\C$) converge **localement uniformément** vers $f$ si tout point $x\in\Omega$ possède un voisinage $U_x$ sur lequel $f_n\to f$ **uniformément**.

Elle est **localement uniformément de Cauchy** si tout $x\in\Omega$ possède un voisinage $U_x$ sur lequel $(f_n)$ est uniformément de Cauchy : $\forall\eps>0,\ \exists N,\ \forall p,q\ge N,\ \forall z\in U_x,\ |f_p(z)-f_q(z)|\le\eps$. (poly, Définition III.1.1, p. 59)

## CARD id=fc-ch03-002 ref=ch03-convergence-localement-uniforme tags=contre-exemple
### Q
La convergence localement uniforme implique-t-elle la convergence uniforme sur $\Omega$ ? Donner un exemple.
### R
Non. Sur $D(0,1)$, $f_n(z)=z^n$ converge localement uniformément vers $0$ (sur $\bar D(0,r)$, $r<1$, le sup vaut $r^n\to0$), mais $\sup_{D(0,1)}|f_n|=1$ pour tout $n$ : pas de convergence uniforme sur $D(0,1)$. (poly, Définition III.1.1, p. 59)

## CARD id=fc-ch03-003 ref=ch03-convergence-uniforme-compacts tags=enonce
### Q
Énoncer la caractérisation de la convergence localement uniforme par les compacts.
### R
Soit $\Omega$ un ouvert de $\C$ et $(f_n)$ une suite de fonctions $\Omega\to\C$. Alors $(f_n)$ converge localement uniformément vers $f$ si et seulement si, pour tout compact $K\subset\Omega$, $(f_n)$ converge uniformément sur $K$ vers $f$. De même, $(f_n)$ est localement uniformément de Cauchy si et seulement si elle est uniformément de Cauchy sur tout compact $K\subset\Omega$. (poly, Proposition III.1.2, p. 59)

## CARD id=fc-ch03-004 ref=ch03-convergence-uniforme-compacts tags=methode
### Q
Comment démontre-t-on l'équivalence « localement uniforme $\Leftrightarrow$ uniforme sur tout compact » ?
### R
(Local $\Rightarrow$ compact) on recouvre le compact $K$ par des voisinages $U_x$ où la convergence est uniforme et l'on extrait un sous-recouvrement **fini** (Borel-Lebesgue) ; (compact $\Rightarrow$ local) tout point de $\Omega$ a un voisinage compact contenu dans $\Omega$ (locale compacité de $\C$, $\Omega$ ouvert), par exemple un disque fermé $\bar D(x,\rho)$. (poly, Proposition III.1.2, p. 59)

## CARD id=fc-ch03-005 ref=ch03-weierstrass tags=enonce
### Q
Énoncer le théorème de Weierstraß sur les suites de fonctions holomorphes.
### R
Soit $\Omega$ un ouvert de $\C$ et $(f_n)$ une suite de fonctions **holomorphes** $\Omega\to\C$, **localement uniformément de Cauchy** sur $\Omega$, de limite $f$. Alors :
1. $f$ est holomorphe sur $\Omega$ ;
2. pour tout $k\ge1$, $(f_n^{(k)})_n$ converge localement uniformément sur $\Omega$ vers $f^{(k)}$.

(poly, Théorème III.1.4, p. 60)

## CARD id=fc-ch03-006 ref=ch03-weierstrass tags=hypothese
### Q
Dans le théorème de Weierstraß, quelles hypothèses sont utilisées et où servent-elles dans la preuve ?
### R
* $f_n$ **holomorphes** : la formule intégrale de Cauchy $f_n(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n(\zeta)}{\zeta-z}d\zeta$ (et sa version pour les dérivées) est le moteur de la preuve.
* Convergence **localement uniforme** (Cauchy $\Leftrightarrow$ convergence, Lemme III.1.3) : elle est uniforme sur le cercle $C(z_0,r)$, ce qui permet de passer à la limite sous l'intégrale ; la convergence simple ne suffit pas.
* $\bar D(z_0,r)\subset\Omega$ : pour intégrer sur le cercle. D'où une conclusion seulement **locale** (sur $D(z_0,r/2)$ pour les dérivées).

(poly, Théorème III.1.4, p. 60-61)

## CARD id=fc-ch03-007 ref=ch03-weierstrass tags=contre-exemple
### Q
Pourquoi le théorème de Weierstraß est-il faux pour des fonctions seulement réelles dérivables ?
### R
En variable réelle, une limite uniforme de fonctions $C^\infty$ n'est pas forcément dérivable : des polynômes (théorème d'approximation de Weierstrass réel) convergent uniformément vers $x\mapsto|x|$ sur $[-1,1]$, qui n'est pas dérivable en $0$. La dérivation ne passe donc pas à la limite uniforme. En complexe, c'est la formule de Cauchy (qui contrôle $f^{(k)}$ par le sup de $f$ sur un cercle) qui sauve la situation. (poly, Théorème III.1.4, p. 60)

## CARD id=fc-ch03-008 ref=ch03-weierstrass-estimation-derivees tags=formule
### Q
Donner l'estimation de $|f^{(k)}(z)-f_n^{(k)}(z)|$ utilisée dans la preuve de Weierstraß.
### R
Si $\bar D(z_0,r)\subset\Omega$ et $f,f_n$ sont holomorphes sur $\Omega$, alors pour tout $z\in D(z_0,r/2)$ et tout $k\ge0$ :
$$|f^{(k)}(z)-f_n^{(k)}(z)|=\left|\frac{k!}{2\pi}\int_{C(z_0,r)}\frac{f(\zeta)-f_n(\zeta)}{(\zeta-z)^{k+1}}\,d\zeta\right|\le\frac{k!\,2^{k+1}}{r^k}\sup_{|\zeta-z_0|=r}|f(\zeta)-f_n(\zeta)|.$$
(On a $|\zeta-z|\ge r/2$ sur le cercle.) (poly, preuve du Théorème III.1.4, p. 61)

## CARD id=fc-ch03-009 ref=ch03-weierstrass-series tags=enonce
### Q
Énoncer le théorème de Weierstraß pour les séries de fonctions holomorphes (dérivation terme à terme).
### R
Soit $f:=\sum_{n\ge0}f_n$ une série de fonctions holomorphes sur $\Omega$ qui converge localement normalement (uniformément). Alors la série des dérivées complexes $g:=\sum_{n\ge0}f_n'$ converge localement normalement (uniformément), $f$ est holomorphe et $f'=g$. (poly, Théorème III.1.5, p. 61)

## CARD id=fc-ch03-010 ref=ch03-weierstrass-series tags=hypothese
### Q
Dans le théorème III.1.5 (séries), pourquoi la conclusion est-elle locale, et que donne-t-on si la série ne converge que localement uniformément ?
### R
Les estimées de Cauchy font perdre du rayon (on contrôle $f'$ sur $D(z_0,r/2)$ à partir de $f$ sur $\bar D(z_0,r)$) : on obtient la convergence de $\sum f_n'$ localement, jamais uniformément sur tout $\Omega$ a priori. Si $\sum f_n$ converge seulement localement uniformément, le théorème III.1.4 appliqué aux sommes partielles donne $f$ holomorphe et $f^{(k)}=\lim S_n^{(k)}$ avec convergence localement uniforme (a priori seulement uniforme, pas normale). (poly, Théorèmes III.1.4 et III.1.5, p. 60-61)

## CARD id=fc-ch03-011 ref=ch03-convergence-normale-definition tags=definition
### Q
Définir la convergence normale et la convergence uniforme d'une série de fonctions $\sum_{n\ge0}f_n$ sur un ouvert $U$. Laquelle implique l'autre ?
### R
$\sum f_n$ **converge normalement** sur $U$ si la série numérique $\sum_{n\ge0}\|f_n\|_{\infty,U}$ converge, où $\|h\|_{\infty,U}=\sup_{z\in U}|h(z)|$. Elle **converge uniformément** si la suite des sommes partielles $\big(\sum_{j=0}^nf_j\big)_n$ converge uniformément. La convergence normale entraîne la convergence uniforme. « Localement normalement » = normalement sur un voisinage de chaque point (équivalent : sur tout compact). (poly, p. 61)

## CARD id=fc-ch03-012 ref=ch03-convergence-normale-definition tags=contre-exemple
### Q
Donner une série qui converge uniformément mais pas normalement.
### R
$\sum_{n\ge1}(-1)^nx^n/n$ sur $[0,1]$ : critère des séries alternées uniforme (reste majoré par $1/(N+1)$), donc convergence uniforme ; mais $\|x^n/n\|_{\infty,[0,1]}=1/n$ et $\sum1/n$ diverge, donc pas de convergence normale. (contre-exemple hors poly ; définitions rappelées p. 61)

## CARD id=fc-ch03-013 ref=ch03-hurwitz tags=enonce
### Q
Énoncer le théorème de Hurwitz.
### R
Soit $\Omega$ un ouvert **connexe** de $\C$ et $(f_n)$ une suite de fonctions holomorphes $\Omega\to\C$, localement uniformément convergente vers $f$.
1. Si chaque $f_n$ ne s'annule pas sur $\Omega$, alors soit $f$ ne s'annule pas sur $\Omega$, soit $f\equiv0$.
2. Si chaque $f_n$ est injective sur $\Omega$, alors soit $f$ est injective sur $\Omega$, soit $f$ est constante.

(poly, Théorème III.2.1, p. 62)

## CARD id=fc-ch03-014 ref=ch03-hurwitz tags=hypothese
### Q
Que se passe-t-il dans Hurwitz si l'on retire la connexité de $\Omega$ ?
### R
Le théorème tombe en défaut. Prendre $\Omega=D(0,1)\sqcup D(3,1)$, $f_n=1/n$ sur le premier disque et $f_n=1$ sur le second : chaque $f_n$ ne s'annule pas, mais la limite est $0$ sur une composante et $1$ sur l'autre (ni partout non nulle, ni identiquement nulle). La connexité sert à utiliser les zéros isolés de la limite : si $f\not\equiv0$ sur la composante, ses zéros sont isolés. (poly, Théorème III.2.1, p. 62)

## CARD id=fc-ch03-015 ref=ch03-hurwitz tags=contre-exemple
### Q
Dans Hurwitz, l'alternative « $f\equiv0$ » (point 1) ou « $f$ constante » (point 2) se produit-elle vraiment ? Donner des exemples.
### R
Oui. Point 1 : $\Omega=D(0,1)\setminus\{0\}$, $f_n(z)=z^n$ ne s'annule pas et converge uniformément sur tout compact vers $0$ (poly, Remarque III.2.2, p. 63). Point 2 : $f_n(z)=z/n$ sont injectives et convergent vers la constante $0$.

## CARD id=fc-ch03-016 ref=ch03-hurwitz-contre-exemple tags=enonce
### Q
Énoncer la remarque III.2.2 (Hurwitz : le cas $f\equiv0$ arrive).
### R
Il peut arriver que $f_n$ ne s'annule jamais et que la limite $f$ soit identiquement nulle. Exemple : $\Omega=D(0,1)\setminus\{0\}$, $f_n(z)=z^n$ ($n\ge1$) : $f_n(z)\ne0$ pour tout $z\in\Omega$ et $f_n\to0$ uniformément sur tout compact de $\Omega$. (poly, Remarque III.2.2, p. 63)

## CARD id=fc-ch03-017 ref=ch03-hurwitz-zeros-locaux tags=enonce
### Q
Énoncer la forme forte de Hurwitz (comptage des zéros dans un petit disque).
### R
Soit $\Omega$ ouvert connexe et $(f_n)$ holomorphes sur $\Omega$, localement uniformément convergente vers $f$ (avec $f\not\equiv0$). Pour tout $z\in\Omega$, il existe $r>0$ tel que, avec $D:=D(z,r)$, $Z(f_n,D)\to Z(f,D)$ quand $n\to\infty$, où $Z(\cdot,D)$ est le nombre de zéros dans $D$ **comptés avec multiplicité**. (poly, Remarque III.2.3, p. 63)

## CARD id=fc-ch03-018 ref=ch03-hurwitz tags=methode
### Q
Comment prouve-t-on le point 1 de Hurwitz (non-annulation) ?
### R
Si $f\not\equiv0$ et $f(z_0)=0$, les zéros de $f$ sont isolés (Ω connexe) : on choisit $r$ avec $\bar D(z_0,r)\subset\Omega$ et $f\ne0$ sur $C(z_0,r)$. Alors $|f|\ge2\eps$ sur le cercle, donc $|f_n|\ge\eps$ pour $n$ grand, $f_n'/f_n\to f'/f$ uniformément sur le cercle (Weierstraß), et le nombre de zéros $\frac1{2i\pi}\int_{C(z_0,r)}f_n'/f_n$ (principe de l'argument) converge vers $\frac1{2i\pi}\int f'/f\ge1$. Un entier qui est limite d'entiers nuls est nul : contradiction. (poly, Théorème III.2.1, p. 62)

## CARD id=fc-ch03-019 ref=ch03-hurwitz tags=methode
### Q
Comment déduit-on le point 2 de Hurwitz (injectivité) du point 1 (non-annulation) ?
### R
On fixe $a\in\Omega$ et on pose $g_n(z)=f_n(z)-f_n(a)$ sur $\Omega\setminus\{a\}$, qui est encore connexe. Comme $f_n$ est injective, $g_n$ ne s'annule pas ; $g_n\to f-f(a)$ localement uniformément. Par le point 1, soit $f-f(a)$ ne s'annule pas sur $\Omega\setminus\{a\}$, soit $f\equiv f(a)$. Si $f$ n'est pas constante, c'est donc que $f(z)\ne f(a)$ pour tout $z\ne a$ ; $a$ étant arbitraire, $f$ est injective. (poly, Théorème III.2.1, p. 62-63)

## CARD id=fc-ch03-020 ref=ch03-famille-localement-uniformement-bornee tags=definition,enonce
### Q
Définir « famille localement uniformément bornée » $\mathcal F\subset\Hol(\Omega)$, et sa reformulation sur les compacts.
### R
$\mathcal F\subset\Hol(\Omega)$ est **localement uniformément bornée** si pour tout $x\in\Omega$ il existe un voisinage $U_x$ et une constante $C>0$ (dépendant de $U_x$) tels que $|f(z)|\le C$ pour tout $f\in\mathcal F$ et tout $z\in U_x$. De façon équivalente (Remarque III.3.2) : pour tout compact $K\subset\Omega$ il existe $C(K)>0$ avec $|f(z)|\le C(K)$ pour tout $f\in\mathcal F$ et tout $z\in K$. (poly, Définition III.3.1 et Remarque III.3.2, p. 64)

## CARD id=fc-ch03-021 ref=ch03-famille-localement-uniformement-bornee tags=contre-exemple
### Q
Une famille de fonctions chacune localement bornée est-elle localement uniformément bornée ? Exemple.
### R
Non : la constante doit être la même pour toutes les $f\in\mathcal F$. $\{z\mapsto nz\}_{n\ge1}$ sur $\C$ : chaque fonction est bornée sur tout compact, mais $\sup_n\sup_{\bar D(0,1)}|nz|=+\infty$. À l'inverse $\{z^n\}_n$ est localement uniformément bornée sur $D(0,1)$ (par $1$). (poly, Définition III.3.1, p. 64)

## CARD id=fc-ch03-022 ref=ch03-famille-normale tags=definition,enonce
### Q
Définir une famille normale $\mathcal F\subset\Hol(\Omega)$.
### R
$\mathcal F\subset\Hol(\Omega)$ est **normale** si toute suite d'éléments de $\mathcal F$ admet une sous-suite qui converge localement uniformément sur $\Omega$. On n'exige **pas** que la limite appartienne à $\mathcal F$ (relative compacité, pas compacité). (poly, Définition III.3.3, p. 64)

## CARD id=fc-ch03-023 ref=ch03-famille-normale tags=contre-exemple
### Q
Donner une famille normale dont la limite sort de la famille, et une famille non normale.
### R
$\{z^n\}_{n\ge1}$ sur $D(0,1)$ est normale : d'une suite $(z^{n_k})_k$ on extrait soit une sous-suite constante ($n_k$ borné), soit une sous-suite avec $n_k\to\infty$, qui converge localement uniformément vers $0$ (sur $\bar D(0,r)$, $\sup|z^{n_k}|=r^{n_k}\to0$) ; la limite $0$ n'appartient pas à la famille. $\{z+n\}_{n\ge1}$ sur $\C$ n'est pas normale : $|z+n|\to\infty$ en tout point, aucune sous-suite ne converge même simplement. (poly, Définition III.3.3, p. 64)

## CARD id=fc-ch03-024 ref=ch03-montel tags=enonce
### Q
Énoncer le théorème de Montel.
### R
Soit $\Omega\subset\C$ un ouvert et $\mathcal F\subset\Hol(\Omega)$. Les assertions suivantes sont équivalentes :
1. $\mathcal F$ est localement uniformément bornée sur $\Omega$ ;
2. $\mathcal F$ est normale sur $\Omega$.

(poly, Théorème III.3.4, p. 64)

## CARD id=fc-ch03-025 ref=ch03-montel tags=hypothese
### Q
Dans Montel, quel rôle jouent l'holomorphie et la borne locale uniforme ? Où sont-elles utilisées ?
### R
* **Holomorphie** (essentielle pour $1\Rightarrow2$) : les inégalités de Cauchy transforment la borne sur $f$ en borne sur $f'$, donc en équicontinuité (estimation lipschitzienne (III.3.1)) ; sans cela, pas d'équicontinuité.
* **Borne locale uniforme** en $f\in\mathcal F$ : condition de bornitude ponctuelle d'Ascoli. Dans $2\Rightarrow1$ on raisonne par l'absurde : si $\limsup|f_n(z_n)|=+\infty$ sur un compact $K$, aucune sous-suite ne peut converger uniformément sur $K$.
* Aucune hypothèse de connexité sur $\Omega$ (ouvert quelconque).

(poly, Théorème III.3.4, p. 64-65)

## CARD id=fc-ch03-026 ref=ch03-montel tags=contre-exemple
### Q
Montrer que Montel est faux sans holomorphie, et que la borne locale est nécessaire.
### R
Sans holomorphie : $f_n(x)=\sin(nx)$ sur $\R$ est bornée par $1$ mais n'admet aucune sous-suite uniformément convergente sur un intervalle (pas d'équicontinuité). Sans borne locale : $\{nz\}$ et $\{z+n\}$ sur $\C$ ne sont pas normales. (poly, Remarque III.3.6, p. 65-66)

## CARD id=fc-ch03-027 ref=ch03-montel-equilipschitz tags=formule
### Q
Donner l'estimation équilipschitzienne (III.3.1) de la preuve de Montel.
### R
Si $K:=\bar D(z_0,r+\delta)\subset\Omega$ et $|f_n|\le C(K)$ sur $K$ pour tout $n$, alors les inégalités de Cauchy donnent $|f_n'(z)|\le\sup_{|\zeta-z|=\delta}|f_n(\zeta)|/\delta\le C(K)/\delta$ pour $z\in\bar D(z_0,r)$, et le théorème des accroissements finis (sur parties réelle et imaginaire, segment $[z,z']$) donne
$$|f_n(z)-f_n(z')|\le\frac{2C(K)}{\delta}|z-z'|\qquad\text{pour tout }n\text{ et }z,z'\in D(z_0,r).$$
(poly, Formule (III.3.1), p. 65)

## CARD id=fc-ch03-028 ref=ch03-ascoli tags=enonce
### Q
Énoncer le théorème d'Ascoli (version du poly) et la définition d'équicontinuité.
### R
Soient $X$ localement compact séparé, $Y$ un espace vectoriel normé de dimension finie, $\mathscr C(X,Y)$ muni de la topologie de la convergence uniforme sur les compacts. $\mathcal H\subset\mathscr C(X,Y)$ est **équicontinue** en $x_0$ si $\forall\eps>0,\ \exists V\ni x_0,\ \forall f\in\mathcal H,\ \forall x\in V,\ \|f(x)-f(x_0)\|\le\eps$ (le même $V$ pour toute la famille). **Ascoli** : $\mathcal H$ est relativement compacte si et seulement si (1) $\mathcal H$ est équicontinue en tout point et (2) pour tout $x$, $\mathcal H(x)=\{f(x),\,f\in\mathcal H\}$ est borné. Si $X$ est de plus métrisable et $\sigma$-compact (ex. un ouvert de $\C$), de toute suite de $\mathcal H$ on extrait une sous-suite uniformément convergente sur tout compact. (poly, Remarque III.3.5, p. 65)

## CARD id=fc-ch03-029 ref=ch03-montel tags=methode
### Q
Comment démontre-t-on $1\Rightarrow2$ dans Montel (stratégie de la preuve) ?
### R
(i) Prendre une partie dénombrable dense $S=\{y_n\}$ de $\Omega$ ; par bornitude et **extraction diagonale** ($\varphi_0\circ\cdots\circ\varphi_n(n)$) obtenir une sous-suite $(f_{\varphi(n)})$ convergente en chaque point de $S$. (ii) Sur un disque, l'estimation équilipschitzienne (III.3.1) (Cauchy + accroissements finis) donne l'équicontinuité. (iii) Argument en $\eps/3$ : $|f_p(z)-f_q(z)|\le|f_p(z)-f_p(y)|+|f_p(y)-f_q(y)|+|f_q(y)-f_q(z)|$ avec $y\in S$ proche de $z$, puis recouvrement fini d'un compact : la sous-suite est uniformément de Cauchy sur les compacts, donc converge (Lemme III.1.3). (poly, Théorème III.3.4, p. 64-65)

## CARD id=fc-ch03-030 ref=ch03-montel tags=methode
### Q
Pour montrer qu'une suite $(f_n)$ de fonctions holomorphes converge (toute la suite), quel schéma d'examen combine Montel et l'unicité de la limite ?
### R
1. Montrer que $(f_n)$ est localement uniformément bornée. 2. Par Montel, toute sous-suite admet une sous-suite localement uniformément convergente, dont la limite est holomorphe (Weierstraß). 3. Identifier la limite indépendamment de la sous-suite (valeur en un point, théorème des zéros isolés, Hurwitz...). 4. Alors toute la suite converge vers cette limite commune (sinon, une sous-suite resterait à distance $\ge\eps$ de la limite sur un compact, contradiction). (poly, Théorème III.3.4 ; Exercice III.7.1, p. 64 et 73)

## CARD id=fc-ch03-031 ref=ch03-conformement-equivalent tags=definition,enonce
### Q
Qu'appelle-t-on transformation conforme et « conformément équivalent » ?
### R
Un **biholomorphisme** est une bijection holomorphe de réciproque holomorphe (la réciproque est automatiquement holomorphe, Remarque I.14.3). Un biholomorphisme $h:\Omega\to\mathbb D=D(0,1)$ est une **transformation conforme** et $\Omega$ est dit **conformément équivalent** à $\mathbb D$ ; plus généralement deux ouverts sont conformément équivalents s'il existe un biholomorphisme de l'un sur l'autre. (poly, section III.4, p. 66)

## CARD id=fc-ch03-032 ref=ch03-riemann-representation-conforme tags=enonce
### Q
Énoncer le théorème de représentation conforme de Riemann.
### R
Tout ouvert **connexe** et **simplement connexe** $\Omega$ de $\C$, **distinct de $\C$**, est conformément équivalent au disque unité $\mathbb D$ : il existe un biholomorphisme $h:\Omega\to\mathbb D$. (poly, Théorème III.4.1, p. 66)

## CARD id=fc-ch03-033 ref=ch03-riemann-representation-conforme tags=hypothese
### Q
Dans le théorème de Riemann, où sert chacune des hypothèses (connexe, simplement connexe, $\Omega\ne\C$) ?
### R
* **Simplement connexe** : existence d'un logarithme, donc d'une racine carrée holomorphe de $z-\omega_0$ (Proposition II.9.3), pour construire un élément de $\Sigma$ et pour l'étape extrémale.
* **$\Omega\ne\C$** : permet de choisir $\omega_0\notin\Omega$ ; nécessaire car une fonction holomorphe $\C\to\mathbb D$ est bornée donc constante (Liouville).
* **Connexe** : $\mathbb D$ est connexe et un homéomorphisme préserve la connexité ; sert aussi à utiliser Hurwitz.

(poly, Théorème III.4.1, p. 66-67)

## CARD id=fc-ch03-034 ref=ch03-riemann-representation-conforme tags=contre-exemple
### Q
Donner deux exemples d'ouverts qui ne sont pas conformément équivalents à $\mathbb D$, illustrant la nécessité des hypothèses de Riemann.
### R
$\Omega=\C$ : une fonction holomorphe $\C\to\mathbb D$ est bornée donc constante (Liouville, I.10.1), pas de bijection. $\Omega=\{1<|z|<2\}$ ou $\C^\times$ (non simplement connexes) : un biholomorphisme est un homéomorphisme et $\mathbb D$ est simplement connexe, donc $\Omega$ ne peut pas lui être biholomorphe. (poly, Théorème III.4.1, p. 66)

## CARD id=fc-ch03-035 ref=ch03-riemann-representation-conforme tags=formule
### Q
Le biholomorphisme de Riemann est-il unique ? Sous quelle normalisation ?
### R
Non : on peut le composer par un automorphisme de $\mathbb D$ (de la forme $\lambda f_a$, $|\lambda|=1$, $a\in\mathbb D$, Proposition I.13.3). Il devient unique si l'on impose $h(z_0)=0$ et $h'(z_0)>0$ pour un $z_0\in\Omega$ fixé. (poly, Théorème III.4.1, p. 66-67)

## CARD id=fc-ch03-036 ref=ch03-riemann-sigma-non-vide tags=enonce
### Q
Dans la preuve de Riemann, définir $\Sigma$, $\Sigma_{z_0}$ et énoncer l'étape 1.
### R
$\Sigma=\{f\in\Hol(\Omega):f(\Omega)\subset\mathbb D,\ f\text{ injective}\}$ et $\Sigma_{z_0}=\{f\in\Sigma\mid f(z_0)=0\}$. **Étape 1** : si $\Omega$ est ouvert connexe, simplement connexe, $\Omega\ne\C$, alors $\Sigma\ne\emptyset$ et $\Sigma_{z_0}\ne\emptyset$ pour tout $z_0\in\Omega$. Construction : $\omega_0\notin\Omega$, $\varphi=\exp(u/2)$ avec $e^u=z-\omega_0$ ; $a\in\varphi(\Omega)$ et $D(a,r)\subset\varphi(\Omega)$ avec $0<r<|a|$ ($\varphi$ ouverte), donc $D(-a,r)\cap\varphi(\Omega)=\emptyset$ ; $\psi=r/(\varphi+a)$ vérifie $|\psi|\le1$, puis $|\psi|<1$ par le principe du maximum, et $\psi$ est injective : $\psi\in\Sigma$ ; puis composer avec $f_{\psi(z_0)}$. (poly, preuve du Théorème III.4.1, p. 66)

## CARD id=fc-ch03-037 ref=ch03-riemann-etape-koebe tags=enonce
### Q
Énoncer l'étape clé de la preuve de Riemann (élément non surjectif de $\Sigma_{z_0}$) et la conséquence sur l'extrémal.
### R
Si $\psi\in\Sigma_{z_0}$ n'est **pas surjective** sur $\mathbb D$, il existe $\psi_1\in\Sigma_{z_0}$ avec $|\psi_1'(z_0)|>|\psi'(z_0)|$. Conséquence : $\eta:=\sup\{|\psi'(z_0)|:\psi\in\Sigma_{z_0}\}$ est fini (estimée de Cauchy : $|\psi'(z_0)|\le1/\rho$ si $\bar D(z_0,\rho)\subset\Omega$) et tout $h\in\Sigma_{z_0}$ avec $|h'(z_0)|=\eta$ vérifie $h(\Omega)=\mathbb D$, donc est un biholomorphisme. (poly, preuve du Théorème III.4.1, p. 66-67)

## CARD id=fc-ch03-038 ref=ch03-riemann-etape-koebe tags=formule
### Q
Dans l'étape clé de Riemann, quelle est la factorisation $\psi=F\circ\psi_1$ et pourquoi $|F'(0)|<1$ ?
### R
Soit $\alpha\in\mathbb D\setminus\psi(\Omega)$ ; $f_\alpha\circ\psi$ ne s'annule pas, donc $g^2=f_\alpha\circ\psi$ avec $g\in\Sigma$ ; $\beta=g(z_0)$, $\psi_1=f_\beta\circ g\in\Sigma_{z_0}$. Alors
$$\psi=F\circ\psi_1,\qquad F=f_{-\alpha}\circ s\circ f_{-\beta},\quad s(z)=z^2.$$
$F:\mathbb D\to\mathbb D$ est holomorphe, $F(0)=0$ et **non injective** (à cause de $s$), donc pas un automorphisme : le lemme de Schwarz donne $|F'(0)|<1$, et $\psi'(z_0)=F'(0)\psi_1'(z_0)$ d'où $|\psi'(z_0)|<|\psi_1'(z_0)|$. (poly, p. 66-67)

## CARD id=fc-ch03-039 ref=ch03-riemann-representation-conforme tags=methode
### Q
Quelle est la stratégie globale (méthode extrémale) de la preuve de Riemann ?
### R
1. $\Sigma_{z_0}\ne\emptyset$ (racine carrée holomorphe + homographie). 2. $\Sigma_{z_0}$ est localement uniformément bornée par $1$, donc normale (Montel) ; $\eta=\sup|\psi'(z_0)|<\infty$ (Cauchy). 3. Soit $\psi_n$ une suite avec $|\psi_n'(z_0)|\to\eta$ ; extraire $\psi_{n_k}\to h$ localement uniformément ; $\psi_{n_k}'(z_0)\to h'(z_0)$ (Weierstraß), donc $|h'(z_0)|=\eta>0$ et $h$ non constante. 4. $h$ injective (Hurwitz, point 2) à valeurs dans $\overline{\mathbb D}$, donc dans $\mathbb D$ (ouverte/maximum), $h(z_0)=0$ : $h\in\Sigma_{z_0}$. 5. $h$ extrémal $\Rightarrow$ surjectif (étape clé). (poly, Théorème III.4.1, p. 66-67)

## CARD id=fc-ch03-040 ref=ch03-riemann-sigma-non-vide tags=methode
### Q
Comment obtient-on une racine carrée holomorphe d'une fonction sans zéro sur un ouvert simplement connexe ?
### R
Si $\Omega$ est simplement connexe et $F\in\Hol(\Omega)$ ne s'annule pas, il existe $u\in\Hol(\Omega)$ avec $e^u=F$ (Proposition II.9.3, logarithme holomorphe). Alors $\varphi:=\exp(u/2)$ vérifie $\varphi^2=F$. Application dans Riemann : $F(z)=z-\omega_0$ avec $\omega_0\notin\Omega$ (injectivité : $\varphi(z)=\pm\varphi(z')\Rightarrow z=z'$). (poly, preuve du Théorème III.4.1, p. 66)

## CARD id=fc-ch03-041 ref=ch03-riemann-sigma-non-vide tags=formule
### Q
Donner l'automorphisme $f_\alpha$ du disque envoyant $\alpha$ sur $0$ et son inverse.
### R
Pour $\alpha\in\mathbb D$ : $f_\alpha(z)=\dfrac{z-\alpha}{1-\bar\alpha z}$, automorphisme de $\mathbb D$ avec $f_\alpha(\alpha)=0$ et $f_\alpha^{-1}=f_{-\alpha}$. (poly, Exercice I.13.2 et Proposition I.13.3, utilisés p. 66)

## CARD id=fc-ch03-042 ref=ch03-riemann-demi-plan tags=formule
### Q
Quel biholomorphisme relie le disque unité $\mathbb D$ et le demi-plan de Poincaré $\mathbb H$ ?
### R
$\mathbb H=\{z\in\C\mid\Im(z)>0\}$ et $z\mapsto i\dfrac{1-z}{1+z}$ envoie $\mathbb D$ sur $\mathbb H$. On peut donc remplacer $\mathbb D$ par $\mathbb H$ dans l'énoncé du théorème de Riemann. (poly, Remarque III.4.2, p. 67)

## CARD id=fc-ch03-043 ref=ch03-produits-infinis tags=enonce
### Q
Énoncer le théorème sur les produits infinis $\prod(1+f_n)$.
### R
Soit $\sum_{n\ge0}f_n$ une série de fonctions holomorphes sur un ouvert $\Omega$ qui converge **localement normalement**, et $g_n=1+f_n$. Alors $G_n=\prod_{j=0}^ng_j$ converge localement uniformément vers une fonction holomorphe $G=\prod_{j=0}^\infty(1+f_j)$ sur $\Omega$. $G$ s'annule en un point exactement lorsqu'un facteur s'y annule (ce qui n'arrive que pour un nombre fini de facteurs), et l'ordre du zéro de $G$ est la somme des ordres des facteurs. De plus
$$\frac{G'}{G}=\sum_{n\in\mathbb N}\frac{g_n'}{g_n},$$
la série convergeant uniformément sur tout compact $K$ à partir d'un rang $n_0$ où $g_n$ ne s'annule plus sur $K$. (poly, Théorème III.5.1, p. 68)

## CARD id=fc-ch03-044 ref=ch03-produits-infinis tags=hypothese
### Q
Dans le théorème III.5.1, pourquoi faut-il la convergence **normale** locale de $\sum f_n$ ?
### R
Elle garantit que sur un compact $K$, $\sup_K|f_n|<1/2$ à partir d'un rang $m$ et $M=\sum_{k\ge m}\|f_k\|_{\infty,K}<\infty$ ; on écrit alors $\prod_{k\ge m}(1+f_k)=\exp\big(\sum_{k\ge m}\mathrm{Log}(1+f_k)\big)$ avec $|\mathrm{Log}(1+f_k)|\le C|f_k|$, d'où convergence uniforme et minoration $|\tilde G_n|\ge e^{-CM}>0$ : la queue ne s'annule jamais. Sans cela, le produit peut s'annuler sans qu'aucun facteur ne s'annule. (poly, Théorème III.5.1 et Remarque III.5.2, p. 68)

## CARD id=fc-ch03-045 ref=ch03-produits-infinis tags=contre-exemple
### Q
Donner des exemples de produits $\prod(1+f_n)$ qui tendent vers $0$ sans qu'aucun facteur ne s'annule.
### R
$\prod_{n\ge2}(1-1/n)$ : produits partiels $=1/n\to0$ (Remarque III.5.2) ; ici $\sum 1/n$ diverge, pas de convergence normale. Plus subtil : $f_n=(-1)^n/\sqrt n$ ($n\ge2$) : $\sum f_n$ converge (simplement) mais $\prod(1+f_n)\to0$, car $\mathrm{Log}(1+f_n)=f_n-\frac1{2n}+O(n^{-3/2})$ et $\sum\frac1{2n}=+\infty$. La convergence simple de $\sum f_n$ ne suffit pas. (poly, Remarque III.5.2, p. 68)

## CARD id=fc-ch03-046 ref=ch03-produits-infinis tags=formule
### Q
Quelle est la formule de la dérivée logarithmique d'un produit infini, et quelle précaution prendre ?
### R
Avec $G=\prod(1+f_n)$, $g_n=1+f_n$ : $\dfrac{G'}{G}=\sum_{n\ge0}\dfrac{g_n'}{g_n}$. Précaution : sur un compact $K$, la série ne converge uniformément qu'à partir du rang $n_0$ après lequel plus aucun $g_n$ ne s'annule sur $K$ ; les premiers termes peuvent avoir des pôles, et la formule n'a pas de sens en un zéro de $G$. (poly, Théorème III.5.1, p. 68)

## CARD id=fc-ch03-047 ref=ch03-log-estimation tags=formule
### Q
Quelle estimation sur $\mathrm{Log}(1+\omega)$ sert dans la preuve du théorème sur les produits infinis ?
### R
Il existe $C>0$ (on peut prendre $C=2\log2\le2$) avec $|\mathrm{Log}(1+\omega)|\le C|\omega|$ pour tout $\omega\in D(0,1/2)$, où $\mathrm{Log}$ est la détermination principale sur $\C\setminus\R_-$ (conséquence de $\mathrm{Log}(1+\omega)=\sum_{k\ge1}(-1)^{k-1}\omega^k/k$). Il en découle $\big|\prod_{k=m}^ng_k\big|=e^{\Re\sum\mathrm{Log}(1+f_k)}\ge e^{-CM}$ avec $M=\sum_{k\ge m}\|f_k\|_{\infty,K}$. (poly, section III.5, p. 68)

## CARD id=fc-ch03-048 ref=ch03-produits-infinis tags=methode
### Q
Pour montrer qu'un produit infini $\prod(1+f_n)$ définit une fonction holomorphe, que vérifier concrètement ?
### R
Vérifier que $\sum_n\|f_n\|_{\infty,K}<\infty$ pour tout compact $K$ (par exemple pour tout disque $\bar D(0,R)$) : on majore $|f_n(z)|$ sur $\bar D(0,R)$ par le terme général d'une série numérique convergente. Si ce n'est pas le cas (ex. $f_k=z/k$), insérer des **facteurs de convergence** $e^{-z/k}$ et utiliser $|(1+z)e^{-z}-1|\le C|z|^2$. (poly, Théorème III.5.1 et Exemple III.6.4, p. 68 et 72)

## CARD id=fc-ch03-049 ref=ch03-euler-sinus-carre tags=enonce
### Q
Énoncer la formule d'Euler pour $\pi^2/\sin^2(\pi z)$.
### R
Pour tout $z\in\C\setminus\Z$ :
$$\frac{\pi^2}{\sin^2(\pi z)}=\sum_{n\in\Z}\frac1{(z-n)^2}.$$
(poly, Exemple III.6.1, formule (III.6.1), p. 69)

## CARD id=fc-ch03-050 ref=ch03-euler-sinus-carre tags=methode
### Q
Comment démontre-t-on la formule (III.6.1) (stratégie « somme des parties polaires + Liouville ») ?
### R
$g(z)=\pi^2/\sin^2(\pi z)$ est méromorphe, $1$-périodique, de pôles les entiers avec partie singulière $1/(z-n)^2$ en $n$. $f=\sum_{n\in\Z}1/(z-n)^2$ converge normalement sur $\bar D(0,R)$ pour les $|n|>R$ (terme $\le1/(|n|-R)^2$), donc est méromorphe avec les mêmes parties singulières. La différence $h=g-f$ se prolonge en une fonction **entière**, $1$-périodique, bornée sur la bande $B=\{0\le\Re(z)\le1\}$ et tendant vers $0$ quand $|\Im(z)|\to\infty$ dans $B$ (car $2|\sin^2(\pi z)|=\cosh(2\pi\Im z)-\cos(2\pi\Re z)$) : bornée sur $\C$, donc constante par Liouville, donc nulle. (poly, Exemple III.6.1, p. 69)

## CARD id=fc-ch03-051 ref=ch03-cotangente tags=enonce
### Q
Énoncer la formule de décomposition de $\pi\cot(\pi z)$ en éléments simples.
### R
Pour tout $z\in\C\setminus\Z$ :
$$\pi\cot(\pi z)=\frac1z+\sum_{n\in\Z\setminus\{0\}}\left(\frac1{z-n}+\frac1n\right)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}.$$
La fonction $\pi\cot(\pi z)$ est méromorphe, $1$-périodique, avec des pôles simples de résidu $1$ en chaque entier. (poly, Exemple III.6.2, formule (III.6.2), p. 69)

## CARD id=fc-ch03-052 ref=ch03-cotangente tags=contre-exemple
### Q
Pourquoi écrit-on $\frac1{z-n}+\frac1n$ et non simplement $\sum\frac1{z-n}$ pour $\pi\cot(\pi z)$ ? Comment fixe-t-on la constante ?
### R
$\sum_{n\ne0}\frac1{z-n}$ n'est pas normalement (ni absolument) convergente : $\|1/(z-n)\|_{\bar D(0,R)}\sim1/|n|$, série harmonique ; d'où les termes correcteurs $+\frac1n$, qui donnent $\frac{z}{n(z-n)}$ de norme $\le R/(|n|(|n|-R))$ sur $\bar D(0,R)$. Preuve : le membre de droite $g$ a pour dérivée $-\sum1/(z-n)^2=-\pi^2/\sin^2(\pi z)=(\pi\cot\pi z)'$, donc $g-\pi\cot(\pi z)$ est constante sur $\C\setminus\Z$ (connexe) ; elle est impaire, donc nulle. (poly, Exemple III.6.2, p. 69)

## CARD id=fc-ch03-053 ref=ch03-produit-sinus tags=enonce
### Q
Énoncer le développement en produit infini du sinus.
### R
Pour tout $z\in\C$ :
$$\sin(\pi z)=\pi z\prod_{n\ge1}\left(1-\frac{z^2}{n^2}\right).$$
(poly, Exemple III.6.3, formule (III.6.3), p. 70)

## CARD id=fc-ch03-054 ref=ch03-produit-sinus tags=methode
### Q
Comment prouve-t-on le produit infini de $\sin(\pi z)$ à partir de la cotangente ?
### R
$\sum z^2/n^2$ converge normalement sur tout compact, donc par le théorème III.5.1, $F(z)=\pi z\prod_{n\ge1}(1-z^2/n^2)$ est entière, de zéros simples les entiers. Pour $z\notin\Z$ : $F'/F=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}=\pi\cot(\pi z)=(\sin\pi z)'/\sin(\pi z)$. Donc $(F/\sin(\pi z))'=0$, $F=c\sin(\pi z)$ et $c=1$ en comparant les dérivées en $0$ ($F'(0)=\pi=(\sin\pi z)'(0)$). Il faut comparer les **dérivées logarithmiques**, pas seulement les zéros (deux fonctions entières de mêmes zéros diffèrent d'un facteur $e^{g}$). (poly, Exemple III.6.3, p. 70)

## CARD id=fc-ch03-055 ref=ch03-gamma-definition-prolongement tags=definition,enonce
### Q
Définir $\Gamma$, donner son équation fonctionnelle et son prolongement méromorphe.
### R
Pour $\Re(z)>0$ : $\Gamma(z):=\int_0^\infty e^{-t}t^{z-1}dt$ (avec $t^{z-1}=e^{(z-1)\ln t}$), holomorphe sur ce demi-plan. On a $\Gamma(z+1)=z\Gamma(z)$, donc $\Gamma(n+1)=n!$ pour $n\in\N$. Cette relation ($\Gamma(z)=\Gamma(z+1)/z$) prolonge $\Gamma$ sur $\Re(z)>-1$ avec seul pôle $0$, puis par récurrence en fonction méromorphe sur $\C$ dont les pôles sont les entiers négatifs ou nuls, tous simples. (poly, Exemple III.6.4, p. 71)

## CARD id=fc-ch03-056 ref=ch03-gamma-definition-prolongement tags=formule
### Q
Quel est le résidu de $\Gamma$ en $-n$ ($n\in\N$) ?
### R
$\mathrm{Res}_{-n}(\Gamma)=\dfrac{(-1)^n}{n!}$. Calcul : $\Gamma(z)=\dfrac{\Gamma(z+n+1)}{z(z+1)\cdots(z+n)}$ ; en $z=-n$ le numérateur vaut $\Gamma(1)=1$, et le produit des facteurs $z+k$ avec $k\ne n$ vaut $\prod_{k=0}^{n-1}(k-n)=(-1)^nn!$ ; le facteur restant $z+n$ donne le pôle simple. (poly, Exemple III.6.4, p. 71)

## CARD id=fc-ch03-057 ref=ch03-gamma-produit-weierstrass tags=formule,enonce
### Q
Donner la formule de Gauss et le produit de Weierstrass pour $\Gamma$ et $1/\Gamma$.
### R
Pour $\Re(z)>0$ :
$$\Gamma(z)=\lim_{n\to\infty}\int_0^n\Big(1-\frac tn\Big)^nt^{z-1}dt=\lim_{n\to\infty}\frac{n^z\,n!}{z(z+1)\cdots(z+n)},$$
et, pour tout $z\in\C$,
$$\frac1{\Gamma(z)}=z\,e^{\gamma z}\prod_{k=1}^\infty\Big(1+\frac zk\Big)e^{-z/k},\qquad\gamma=\lim_{n\to\infty}\Big(\sum_{k=1}^n\frac1k-\log n\Big).$$
Donc $1/\Gamma$ est entière et $\Gamma$ ne s'annule jamais. (poly, Exemple III.6.4, p. 71-72)

## CARD id=fc-ch03-058 ref=ch03-gamma-produit-weierstrass tags=methode
### Q
Pourquoi le produit de Weierstrass de $1/\Gamma$ contient-il les facteurs $e^{-z/k}$ ? Quelle estimation permet de conclure ?
### R
Le produit $\prod(1+z/k)$ diverge car $\sum z/k$ ne converge pas normalement. On pose $u_k(z)=(1+z/k)e^{-z/k}-1$ ; comme $(1+w)e^{-w}-1=O(w^2)$, on a $|u_k(z)|\le CR^2/k^2$ sur $\bar D(0,R)$, donc $\sum u_k$ converge normalement sur tout compact et le théorème III.5.1 s'applique. Le facteur $e^{\gamma z}$ vient de $n^{-z}\prod_{k=1}^n e^{z/k}=e^{-z(\log n-\sum_{k=1}^n1/k)}\to e^{\gamma z}$ (uniformément sur tout compact), où $\gamma$ est la constante d'Euler. (poly, Exemple III.6.4, p. 72)

## CARD id=fc-ch03-059 ref=ch03-exp-estimation tags=formule
### Q
Quelle majoration de $(1+z)e^{-z}-1$ est utilisée pour le produit de Weierstrass de $\Gamma$ ?
### R
Pour tout $R>0$, il existe $C>0$ tel que $|(1+z)e^{-z}-1|\le C|z|^2$ pour $z\in\bar D(0,R)$ (car $(1+z)e^{-z}=1-z^2/2+O(z^3)$ et $((1+z)e^{-z}-1)/z^2$ est entière donc bornée sur $\bar D(0,R)$). (poly, Exemple III.6.4, p. 72)

## CARD id=fc-ch03-060 ref=none tags=notation
### Q
Que signifie $\|f\|_{\infty,U}$ ? Que signifie « localement normalement » ?
### R
$\|f\|_{\infty,U}=\sup_{x\in U}\|f(x)\|_V$ : norme de la convergence uniforme sur $U$ (pour $V=\C$, $\sup_{z\in U}|f(z)|$). $\sum f_n$ converge **normalement** sur $U$ si $\sum\|f_n\|_{\infty,U}<\infty$ ; **localement normalement** si c'est le cas sur un voisinage de chaque point (équivalent : sur tout compact). (poly, p. 59 et 61)

## CARD id=fc-ch03-061 ref=none tags=notation
### Q
Notations du chapitre : $Z(f,D)$, $C(K)$, $f^n$ dans les exercices III.7.2 à III.7.5.
### R
$Z(f,D)$ : nombre de zéros de $f$ dans le disque $D$, **comptés avec multiplicité**. $C(K)$ : constante dépendant du compact $K$ (borne de la famille sur $K$). $f^n=f\circ\cdots\circ f$ ($n$ fois), $f^0=\mathrm{id}_\Omega$ : itérée, **pas** la puissance $n$-ième. (poly, p. 63, 64, 73)

## CARD id=fc-ch03-062 ref=none tags=notation
### Q
Notations de la preuve de Riemann : $\mathbb D$, $\mathbb H$, $\Sigma_{z_0}$, $\eta$.
### R
$\mathbb D=D(0,1)$ disque unité ouvert ; $\mathbb H=\{\Im(z)>0\}$ demi-plan de Poincaré ; $\Sigma_{z_0}=\{f\in\Hol(\Omega):f \text{ injective},\ f(\Omega)\subset\mathbb D,\ f(z_0)=0\}$ ; $\eta=\sup\{|\psi'(z_0)|:\psi\in\Sigma_{z_0}\}$, la quantité maximisée (et non $\sup|\psi|$, qui vaut $1$ partout). (poly, p. 66-67)

## CARD id=fc-ch03-063 ref=none tags=notation
### Q
Notations des produits infinis : $g_n$, $G_n$, $G$, $\tilde G_n$, $m$, $M$.
### R
$g_n=1+f_n$ ; $G_n=\prod_{j=0}^ng_j$ produit partiel ; $G=\prod_{j=0}^\infty(1+f_j)$ produit infini. Sur un compact $K$ : $m$ est un rang tel que $\sup_K|f_n|<1/2$ pour $n\ge m$ ; $\tilde G_n=\prod_{k=m}^ng_k$ (produit « queue ») et $\tilde G=\exp\big(\sum_{j\ge m}\mathrm{Log}(1+f_j)\big)$ ; $M=\sum_{k\ge m}\|f_k\|_{\infty,K}$. (poly, p. 68)
