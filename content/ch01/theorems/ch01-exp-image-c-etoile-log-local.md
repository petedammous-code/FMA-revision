---
id: ch01-exp-image-c-etoile-log-local
type: corollary
chapter: 1
title: "L'exponentielle est un biholomorphisme local d'image $\C^\times$ ; logarithme complexe local"
ref: Corollaire I.4.5
page: 14
importance: 2
depends: [ch01-inversion-locale-holomorphe, ch06-inversion-locale, ch01-exp-trigo-hyperboliques, ch01-def-biholomorphisme, ch01-sens-de-local]
tags: [exponentielle, logarithme, biholomorphisme-local, connexite, ouvert-ferme]
---
## Intuition

> 💡 $e^{x+iy}=e^x e^{iy}$ : la partie réelle $x$ fixe le module $e^x\in\,]0,+\infty[$, la partie imaginaire $y$ fixe l'argument. Tout nombre non nul $w=\rho e^{i\varphi}$ est donc atteint (prendre $x=\ln\rho$, $y=\varphi$), et $0$ ne l'est jamais. Mais $y$ n'est défini qu'à $2\pi$ près : $\exp$ n'est pas injective, et un « logarithme » de $w$ n'existe que **localement**, une fois choisi un antécédent.

Le poly démontre la surjectivité sans utiliser l'écriture polaire, par un argument topologique très instructif (et réutilisable) : l'image est un sous-groupe de $\C^\times$ à la fois **ouvert** et **fermé**, donc tout $\C^\times$ puisque $\C^\times$ est connexe.

Vocabulaire. $\C^\times:=\C\setminus\{0\}$. Une fonction holomorphe $f:U\to\C$ est un **biholomorphisme local** si tout point $z\in U$ admet un voisinage ouvert $\Omega_1$ tel que $f(\Omega_1)$ est ouvert et $f|_{\Omega_1}:\Omega_1\to f(\Omega_1)$ est un biholomorphisme ([[ch01-def-biholomorphisme]], [[ch01-sens-de-local]]). Un **logarithme** sur un ouvert $V\subset\C^\times$ est une fonction holomorphe $\mathrm{Log}:V\to\C$ telle que $e^{\mathrm{Log}(z)}=z$ pour tout $z\in V$.

## Énoncé

**Corollaire (poly, Corollaire I.4.5, p. 14).** L'exponentielle complexe $z\mapsto e^z$ est un biholomorphisme local, dont l'image est $\C^\times:=\C\setminus\{0\}$.

En particulier, pour tout point $z_0\in\C^\times$, on peut définir localement (par exemple sur un disque $D(z_0,r)$ assez petit contenu dans $\C^\times$) un « logarithme complexe » $z\mapsto\mathrm{Log}(z)$ holomorphe, c'est-à-dire vérifiant $e^{\mathrm{Log}(z)}=z$ sur $D(z_0,r)$ ; il dépend du choix d'un antécédent $a$ de $z_0$ par $\exp$ (on a $\mathrm{Log}(z_0)=a$), et $\mathrm{Log}'(z)=\dfrac1z$.

## Hypothèses

L'énoncé porte sur une fonction précise ; les « hypothèses » sont les trois propriétés de $\exp$ et de $\C^\times$ sur lesquelles repose la preuve.

### H1 — $(e^z)'=e^z\neq0$ pour tout $z$

**Rôle.** Elle permet d'appliquer l'inversion locale holomorphe ([[ch01-inversion-locale-holomorphe]]) en **chaque** point : d'où le caractère de biholomorphisme local, l'ouverture de l'image, et l'existence des logarithmes locaux.

**Si on la retire.** Pour $f(z)=z^2$ (dont l'image est aussi $\C$), $f'(0)=0$ et $f$ n'est injective sur aucun voisinage de $0$ : ce n'est pas un biholomorphisme local, et il n'y a pas de racine carrée holomorphe au voisinage de $0$.

### H2 — $\C^\times$ est connexe

**Rôle.** C'est la clé de l'argument ouvert–fermé : une partie non vide, ouverte et fermée d'un connexe est le tout. $\C^\times$ est connexe par arcs (deux points non nuls se joignent par un arc de cercle centré en $0$ suivi d'un segment radial), donc connexe.

**Si on la retire.** L'analogue réel montre que la connexité est indispensable : $x\mapsto e^x$ de $\R$ dans $\R^\times$ a une dérivée qui ne s'annule pas, son image $]0,+\infty[$ est un sous-groupe de $\R^\times$ ouvert **et** fermé dans $\R^\times$, mais elle n'est pas égale à $\R^\times$, qui n'est pas connexe.

### H3 — $e^{z_1+z_2}=e^{z_1}e^{z_2}$ : l'image est un sous-groupe

**Rôle.** Elle sert à montrer que l'image est **fermée** dans $\C^\times$ : le complémentaire est une réunion de « translatés multiplicatifs » $z\,\Omega$, ce qui n'a de sens que parce que $\Omega$ est un sous-groupe.

**Si on la retire.** L'ouverture seule ne suffit pas : la restriction de $\exp$ au demi-plan $\{\Re(z)<0\}$ est encore un biholomorphisme local à valeurs dans $\C^\times$, mais son image $\{0<|w|<1\}$ est ouverte et **non fermée** dans $\C^\times$. Elle est stable par produit mais pas par inverse ($w\mapsto1/w$ en sort) : ce n'est pas un sous-groupe, et l'argument tombe.

## Idée de la preuve

$\Omega:=\exp(\C)$ est contenu dans $\C^\times$, non vide, ouvert (inversion locale) et c'est un sous-groupe ; son complémentaire dans $\C^\times$ est la réunion des ouverts $z\,\Omega$, $z\notin\Omega$, donc $\Omega$ est aussi fermé ; par connexité, $\Omega=\C^\times$. Le logarithme local est la réciproque locale donnée par l'inversion locale en un antécédent de $z_0$.

## Preuve

**Biholomorphisme local.** $\exp\in\Hol(\C)$ et $\exp'=\exp$ ([[ch01-exp-trigo-hyperboliques]]). Comme $e^ze^{-z}=e^0=1$, $\exp$ ne s'annule pas, donc $\exp'(z)\neq0$ pour tout $z$. La Proposition I.4.4 ([[ch01-inversion-locale-holomorphe]]) s'applique en tout point : $\exp$ est un biholomorphisme local.

**L'image $\Omega:=\exp(\C)$ est $\C^\times$.** Comme $\C^\times$ est connexe par arcs, donc connexe, il suffit de montrer que $\Omega$ est une partie non vide, ouverte et fermée de $\C^\times$.

* *$\Omega\subset\C^\times$ et $\Omega\neq\emptyset$.* On vient de voir que $\exp$ ne s'annule pas ; et $1=e^0\in\Omega$.
* *$\Omega$ est ouvert.* Si $w=e^a\in\Omega$, l'inversion locale en $a$ ([[ch01-inversion-locale-holomorphe]], ou directement [[ch06-inversion-locale]]) fournit un ouvert $\Omega_1\ni a$ tel que $\exp(\Omega_1)$ est un ouvert contenant $w$ ; et $\exp(\Omega_1)\subset\Omega$. Donc $\Omega$ est un voisinage de chacun de ses points : il est ouvert dans $\C$, donc dans $\C^\times$.
* *$\Omega$ est un sous-groupe multiplicatif de $\C^\times$.* $e^{z_1}e^{z_2}=e^{z_1+z_2}\in\Omega$, $(e^z)^{-1}=e^{-z}\in\Omega$, $1\in\Omega$.
* *$\Omega$ est fermé dans $\C^\times$.* Soit $z\in\C^\times\setminus\Omega$. Alors $z\,\Omega:=\{zw:w\in\Omega\}\subset\C^\times\setminus\Omega$ : sinon il existerait $u,v\in\Omega$ avec $zu=v$, d'où $z=v/u=vu^{-1}\in\Omega$ (sous-groupe), contradiction. De plus $z\,\Omega$ est ouvert, image de l'ouvert $\Omega$ par l'homéomorphisme $w\mapsto zw$ de $\C$ (de réciproque $w\mapsto w/z$). Comme $z\in z\,\Omega$ (car $1\in\Omega$), on obtient
$$
\C^\times\setminus\Omega=\bigcup_{z\in\C^\times\setminus\Omega}z\,\Omega,
$$
réunion d'ouverts, donc ouvert ; son complémentaire $\Omega$ est fermé dans $\C^\times$.

$\Omega$ étant non vide, ouvert et fermé dans le connexe $\C^\times$, on a $\Omega=\C^\times$.

**Logarithme local** (*détails non écrits dans le poly*). Soit $z_0\in\C^\times$. Par ce qui précède, il existe $a\in\C$ avec $e^a=z_0$. L'inversion locale en $a$ fournit un ouvert $\Omega_1\ni a$ tel que $\Omega_2:=\exp(\Omega_1)$ est un ouvert contenant $z_0$, contenu dans $\C^\times$, et que $\exp:\Omega_1\to\Omega_2$ est un biholomorphisme. Choisissons $r>0$ avec $D(z_0,r)\subset\Omega_2$ et posons $\mathrm{Log}:=(\exp|_{\Omega_1})^{-1}$ restreint à $D(z_0,r)$. C'est une fonction holomorphe telle que $e^{\mathrm{Log}(z)}=z$, $\mathrm{Log}(z_0)=a$, et
$$
\mathrm{Log}'(z)=\frac1{\exp'(\mathrm{Log}(z))}=\frac1{e^{\mathrm{Log}(z)}}=\frac1z
$$
(formule $(f^{-1})'=1/(f'\circ f^{-1})$ de [[ch01-inversion-locale-holomorphe]]). Si l'on choisit un autre antécédent $a+2ik\pi$ de $z_0$, la même construction donne $\mathrm{Log}+2ik\pi$ (près de $z_0$) : d'où la dépendance dans le choix de l'antécédent. $\square$

## Preuve à trous

$\exp'=\exp$ et <trou indice="calculer $e^ze^{-z}$">$e^ze^{-z}=1$, donc $\exp$ ne s'annule jamais</trou> : l'inversion locale s'applique partout, $\exp$ est un biholomorphisme local et $\Omega=\exp(\C)\subset\C^\times$ est non vide.

$\Omega$ est ouvert car <trou>l'inversion locale en un antécédent $a$ de $w\in\Omega$ donne un ouvert $\exp(\Omega_1)\ni w$ contenu dans $\Omega$</trou>. Par l'équation fonctionnelle, $\Omega$ est un sous-groupe de $\C^\times$.

Si $z\in\C^\times\setminus\Omega$, alors <trou indice="utiliser la structure de groupe">$z\,\Omega\cap\Omega=\emptyset$, car $zu=v$ avec $u,v\in\Omega$ donnerait $z=v/u\in\Omega$</trou>, et $z\,\Omega$ est ouvert. Donc $\C^\times\setminus\Omega=\bigcup_{z\notin\Omega}z\,\Omega$ est ouvert, et $\Omega$ est fermé dans $\C^\times$.

Enfin <trou indice="quelle propriété topologique de $\C^\times$ ?">$\C^\times$ est connexe (par arcs), et $\Omega$ y est non vide, ouvert et fermé, donc $\Omega=\C^\times$</trou>. Le logarithme local est la réciproque locale de $\exp$ près d'un antécédent de $z_0$. $\square$

## Exemples

* **Résoudre $e^z=1+i$.** $1+i=\sqrt2\,e^{i\pi/4}$, donc $z=\ln\sqrt2+i\frac\pi4$ convient ($e^{\ln\sqrt2}e^{i\pi/4}=\sqrt2\big(\frac{\sqrt2}2+i\frac{\sqrt2}2\big)=1+i$), et les solutions sont exactement $\frac12\ln2+i\big(\frac\pi4+2k\pi\big)$, $k\in\Z$ (car $e^{z_1}=e^{z_2}\iff z_1-z_2\in2i\pi\Z$, [[ch01-exp-trigo-hyperboliques]]).
* **Un logarithme explicite sur $D(1,1)$.** Posons $\mathrm{Log}(z)=\sum_{n\ge1}\frac{(-1)^{n+1}}{n}(z-1)^n$ (série de rayon $1$, holomorphe sur $D(1,1)\subset\C^\times$, [[ch01-serie-entiere-holomorphe]]). Sa dérivée est $\sum_{n\ge1}(1-z)^{n-1}=\frac1z$, donc $\frac{d}{dz}\big(z\,e^{-\mathrm{Log}(z)}\big)=e^{-\mathrm{Log}(z)}-z\cdot\frac1z e^{-\mathrm{Log}(z)}=0$ : $ze^{-\mathrm{Log}(z)}$ est constante sur le disque (connexe), égale à sa valeur $1$ en $z=1$. Ainsi $e^{\mathrm{Log}(z)}=z$ : c'est le logarithme local en $z_0=1$ associé à l'antécédent $a=0$.
* **Pas de logarithme global sur $\C^\times$.** Si $L\in\Hol(\C^\times)$ vérifiait $e^{L(z)}=z$, en dérivant on aurait $L'(z)e^{L(z)}=1$, soit $L'(z)=\frac1z$ : $\frac1z$ aurait une primitive holomorphe sur $\C^\times$, donc son intégrale sur le cercle $C(0,1)$ serait nulle ([[ch01-integrale-primitive]]). Or, avec $\gamma(t)=e^{it}$, $\int_\gamma\frac{dz}{z}=\int_0^{2\pi}\frac{ie^{it}}{e^{it}}\,dt=2i\pi\neq0$. Le logarithme n'existe que localement (ou sur des ouverts simplement connexes, [[ch02-logarithme-existence]]).

## Pièges

* > ⚠️ « Biholomorphisme local » n'est **pas** « biholomorphisme » : $\exp$ est surjective sur $\C^\times$ mais pas injective ($e^{z+2i\pi}=e^z$).
* > ⚠️ Un logarithme n'est défini qu'**après le choix d'un antécédent** ; deux logarithmes sur un même disque diffèrent d'une constante $2ik\pi$. En particulier $\mathrm{Log}(z_1z_2)=\mathrm{Log}(z_1)+\mathrm{Log}(z_2)$ n'est vrai qu'à $2i\pi\Z$ près.
* Le corollaire ne donne qu'un rayon $r$ « assez petit » ; le fait qu'on puisse prendre $r=|z_0|$ (et plus généralement tout ouvert simplement connexe de $\C^\times$) est un résultat du chapitre II ([[ch02-logarithme-existence]]).
* Ne pas oublier, dans l'argument ouvert–fermé, de vérifier que $\Omega$ est **non vide** et que l'on travaille **dans $\C^\times$** (dans $\C$, $\Omega$ n'est pas fermé : $0$ est adhérent à $\Omega$ sans y être).
