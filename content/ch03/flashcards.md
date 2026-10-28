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
Les estimées de Cauchy font perdre du rayon (on contrôle $f'$ sur $D(z_0,r/2)$ à partir de $f$ sur $\bar D(z_0,r)$) : on obtient la convergence de $\sum f_n'$ localement, jamais uniformément sur tout $\Omega$ a priori. Si $\sum f_n$ converge seulement localement uniformément, le théorème III.1.4 appliqué aux sommes partielles donne $f$ holomorphe et $f^{(k)}=\lim S_n^{(k)}$ avec convergence localement uniforme (non normale). (poly, Théorèmes III.1.4 et III.1.5, p. 60-61)

## CARD id=fc-ch03-011 ref=ch03-convergence-normale-definition tags=definition
### Q
Définir la convergence normale et la convergence uniforme d'une série de fonctions $\sum_{n\ge0}f_n$ sur un ouvert $U$. Laquelle implique l'autre ?
### R
$\sum f_n$ **converge normalement** sur $U$ si la série numérique $\sum_{n\ge0}\|f_n\|_{\infty,U}$ converge, où $\|h\|_{\infty,U}=\sup_{z\in U}|h(z)|$. Elle **converge uniformément** si la suite des sommes partielles $\big(\sum_{j=0}^nf_j\big)_n$ converge uniformément. La convergence normale entraîne la convergence uniforme. « Localement normalement » = normalement sur un voisinage de chaque point (équivalent : sur tout compact). (poly, p. 61)

## CARD id=fc-ch03-012 ref=ch03-convergence-normale-definition tags=contre-exemple
### Q
Donner une série qui converge uniformément mais pas normalement.
### R
$\sum_{n\ge1}(-1)^nx^n/n$ sur $[0,1]$ : critère des séries alternées uniforme (reste majoré par $1/(N+1)$), donc convergence uniforme ; mais $\|x^n/n\|_{\infty,[0,1]}=1/n$ et $\sum1/n$ diverge, donc pas de convergence normale. (Rappel p. 61)

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
