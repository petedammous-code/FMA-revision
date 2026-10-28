---
id: ch03-weierstrass-series
type: theorem
chapter: 3
title: Séries de fonctions holomorphes localement normalement convergentes
ref: Théorème III.1.5
page: 61
importance: 3
depends: [ch03-weierstrass, ch03-convergence-normale-definition, ch01-estimees-cauchy, ch03-cauchy-locale-equivaut-convergence, ch01-longueur-majoration-integrale]
tags: [weierstrass, series-de-fonctions, convergence-normale, derivation-terme-a-terme, holomorphe]
---
## Intuition

> 💡 C'est le théorème de Weierstraß ([[ch03-weierstrass]]) appliqué aux **sommes partielles** d'une série. Conséquence pratique majeure : une série de fonctions holomorphes qui converge localement normalement (ou seulement localement uniformément) a une somme holomorphe, et on peut la **dériver terme à terme**, sans aucune hypothèse sur la série des dérivées.

En plus, la convergence **normale** se transmet aux dérivées : les estimées de Cauchy contrôlent $|f_n'|$ sur un petit disque par $|f_n|$ sur un cercle un peu plus grand, au prix d'un facteur $4/r$ indépendant de $n$.

Rappels : convergence (localement) **normale** ou **uniforme** d'une série de fonctions : [[ch03-convergence-normale-definition]] ; $f_n'$ est la dérivée complexe de $f_n$ ; $\Omega$ désigne un ouvert de $\C$.

## Énoncé

**Théorème (poly, Théorème III.1.5, p. 61).** Soit
$$
f:=\sum_{n\ge0}f_n
$$
une série de fonctions holomorphes sur $\Omega$, qui converge localement normalement (uniformément). Alors
$$
g:=\sum_{n\ge0}f_n',
$$
la série des dérivées complexes, converge localement normalement (uniformément) et $f$ est une fonction holomorphe dont la dérivée est donnée par $g$.

(Lecture de la parenthèse : si $\sum f_n$ converge localement normalement, alors $\sum f_n'$ converge localement normalement ; si $\sum f_n$ converge localement uniformément, alors $\sum f_n'$ converge localement uniformément. Dans les deux cas $f$ est holomorphe et $f'=g$. En itérant, $f^{(k)}=\sum_nf_n^{(k)}$ pour tout $k$.)

## Hypothèses

### H1 — chaque $f_n$ est holomorphe sur $\Omega$

**Rôle.** Elle permet d'appliquer le théorème de Weierstraß aux sommes partielles (qui sont holomorphes comme sommes finies), et les estimées de Cauchy à chaque $f_n$.

**Si on la retire.** La fonction de Weierstraß $W(x)=\sum_{n\ge0}2^{-n}\cos(13^n\pi x)$ est une série de fonctions $C^\infty$ (réelles) qui converge normalement sur $\R$ ($\norm{2^{-n}\cos(13^n\pi x)}_\infty=2^{-n}$), mais $W$ n'est dérivable en **aucun** point (théorème de Weierstraß de 1872, conditions $0<a<1$, $b$ entier impair, $ab>1+\frac{3\pi}2$, ici $a=1/2$, $b=13$, $ab=6{,}5>5{,}72$). Et la série des dérivées $-\sum_n(13/2)^n\pi\sin(13^n\pi x)$ diverge, par exemple en $x=1/2$ : comme $13^n$ est impair, $|\sin(13^n\pi/2)|=1$ et le terme général a pour module $(13/2)^n\pi\to+\infty$.

### H2 — convergence localement normale (ou localement uniforme)

**Rôle.** Elle fournit la convergence uniforme des sommes partielles sur chaque cercle $C(z_0,r)$ avec $\bar D(z_0,r)\subset\Omega$, ce qu'utilise Weierstraß ; dans le cas normal, elle fournit la série numérique $\sum\norm{f_n}_{\infty,U}$ qui domine.

**Si on la retire.** On ne peut pas la remplacer par une convergence normale **globale** de la série dérivée, qui est souvent fausse : $\sum_{n\ge1}z^n/n^2$ converge normalement sur $D(0,1)$ tout entier ($\norm{z^n/n^2}_{\infty,D(0,1)}=1/n^2$), mais la série dérivée $\sum_{n\ge1}z^{n-1}/n$ ne converge ni normalement ($\norm{z^{n-1}/n}_{\infty,D(0,1)}=1/n$) ni uniformément sur $D(0,1)$ : sa somme $-\mathrm{Log}(1-z)/z$ n'est pas bornée sur $D(0,1)$ (elle tend vers $+\infty$ quand $z\to1^-$ réel), alors qu'une limite uniforme de polynômes bornés sur $D(0,1)$ le serait. La conclusion du théorème est donc **locale** et ne peut pas être améliorée en globale. Avec la seule convergence simple, la situation est celle du théorème de Weierstraß sans convergence localement uniforme : conclusion fausse en général.

## Idée de la preuve

Cas uniforme : on applique Weierstraß aux sommes partielles $S_N=\sum_{n\le N}f_n$, dont les dérivées sont $\sum_{n\le N}f_n'$. Cas normal : les estimées de Cauchy donnent $\norm{f_n'}_{\infty,D(z_0,r/2)}\le\frac4r\norm{f_n}_{\infty,C(z_0,r)}$, ce qui transmet la sommabilité ; et normale $\Rightarrow$ uniforme ramène au premier cas.

## Preuve

*Le poly se contente de « arguments semblables » à ceux du théorème III.1.4 ; voici la preuve détaillée.*

**Cas de la convergence localement uniforme.** Posons $S_N=\sum_{n=0}^Nf_n$, holomorphe sur $\Omega$ comme somme finie de fonctions holomorphes. Par hypothèse, $(S_N)_N$ converge localement uniformément vers $f$ ; elle est donc localement uniformément de Cauchy ([[ch03-cauchy-locale-equivaut-convergence]]). Le théorème de Weierstraß ([[ch03-weierstrass]]) donne :

1. $f$ est holomorphe sur $\Omega$ ;
2. $S_N'=\sum_{n=0}^Nf_n'$ converge localement uniformément vers $f'$.

Le point 2 dit exactement que la série $\sum_nf_n'$ converge localement uniformément et que sa somme $g$ vaut $f'$.

**Cas de la convergence localement normale.** Soit $z_0\in\Omega$. Par hypothèse il existe un voisinage $U$ de $z_0$ dans $\Omega$ tel que $\sum_n\norm{f_n}_{\infty,U}<+\infty$. Choisissons $r>0$ tel que $\bar D(z_0,r)\subset U$ (possible car $U$ contient un disque ouvert centré en $z_0$). Soit $z\in D(z_0,r/2)$. La formule (I.7.1) des estimées de Cauchy ([[ch01-estimees-cauchy]]) pour $k=1$, appliquée à $f_n$, donne
$$
f_n'(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f_n(\zeta)}{(\zeta-z)^2}\,d\zeta .
$$
Pour $\zeta\in C(z_0,r)$, $|\zeta-z|\ge r-r/2=r/2$ ; le cercle est de longueur $2\pi r$, d'où ([[ch01-longueur-majoration-integrale]])
$$
|f_n'(z)|\le\frac1{2\pi}\cdot2\pi r\cdot\frac{\norm{f_n}_{\infty,C(z_0,r)}}{(r/2)^2}=\frac4r\,\norm{f_n}_{\infty,C(z_0,r)}\le\frac4r\,\norm{f_n}_{\infty,U}.
$$
Donc $\norm{f_n'}_{\infty,D(z_0,r/2)}\le\frac4r\norm{f_n}_{\infty,U}$ et
$$
\sum_{n\ge0}\norm{f_n'}_{\infty,D(z_0,r/2)}\le\frac4r\sum_{n\ge0}\norm{f_n}_{\infty,U}<+\infty .
$$
La série $\sum f_n'$ converge normalement sur le voisinage $D(z_0,r/2)$ de $z_0$ : elle converge localement normalement sur $\Omega$.

Enfin, la convergence localement normale de $\sum f_n$ entraîne sa convergence localement uniforme ([[ch03-convergence-normale-definition]]) ; le premier cas s'applique : $f$ est holomorphe et $f'=\sum_nf_n'=g$. $\square$

## Preuve à trous

**Cas uniforme.** Les sommes partielles $S_N=\sum_{n\le N}f_n$ sont holomorphes et convergent localement uniformément vers $f$. Par <trou indice="quel théorème sur les suites ?">le théorème de Weierstraß appliqué à $(S_N)$</trou>, $f$ est holomorphe et <trou>$S_N'=\sum_{n\le N}f_n'$ converge localement uniformément vers $f'$</trou>, c'est-à-dire $\sum f_n'$ converge localement uniformément vers $f'$.

**Cas normal.** Soit $U$ un voisinage de $z_0$ avec $\sum\norm{f_n}_{\infty,U}<\infty$ et $\bar D(z_0,r)\subset U$. Pour $z\in D(z_0,r/2)$, la formule de Cauchy pour $f_n'$ donne <trou indice="longueur 2πr et |ζ − z| ≥ r/2">$|f_n'(z)|\le\frac4r\norm{f_n}_{\infty,C(z_0,r)}\le\frac4r\norm{f_n}_{\infty,U}$</trou>, d'où $\sum_n\norm{f_n'}_{\infty,D(z_0,r/2)}<\infty$. Enfin <trou>la convergence normale entraîne la convergence uniforme</trou>, et l'on conclut par le cas uniforme. $\square$

## Exemples

* **Séries entières.** $f(z)=\sum_{n\ge0}a_nz^n$ de rayon $R>0$ : sur $\bar D(0,r)$, $r<R$, $\norm{a_nz^n}_\infty=|a_n|r^n$ est sommable, donc convergence localement normale sur $D(0,R)$. Le théorème redonne que $f$ est holomorphe et $f'(z)=\sum_{n\ge1}na_nz^{n-1}$ sur $D(0,R)$.
* **Fonction zêta de Riemann.** $\zeta(s)=\sum_{n\ge1}n^{-s}$ ; $|n^{-s}|=n^{-\Re(s)}$, donc la série converge normalement sur $\{\Re(s)\ge\sigma_0\}$ pour tout $\sigma_0>1$, donc localement normalement sur $\{\Re(s)>1\}$. Ainsi $\zeta$ est holomorphe sur $\{\Re(s)>1\}$ et $\zeta'(s)=-\sum_{n\ge2}\frac{\ln n}{n^s}$.
* **Série d'Euler (formule III.6.1).** $\sum_{n\in\Z}\frac1{(z-n)^2}$ : sur $\bar D(0,R)$ et pour $|n|\ge2R$, $|z-n|\ge|n|-R\ge|n|/2$, donc $\big|\frac1{(z-n)^2}\big|\le\frac4{n^2}$, sommable. La série (privée de ses termes d'indice $|n|<2R$, en nombre fini) converge normalement sur $\bar D(0,R)$ : la somme est holomorphe sur $\C\setminus\Z$ et se dérive terme à terme. Voir [[ch03-euler-sinus-carre]].

## Pièges

* > ⚠️ La conclusion est **locale** : la convergence normale de $\sum f_n$ sur $\Omega$ tout entier n'entraîne pas celle de $\sum f_n'$ sur $\Omega$ (exemple $\sum z^n/n^2$ sur $D(0,1)$).
* Il ne faut **aucune** hypothèse sur $\sum f_n'$ : c'est la grande différence avec le théorème réel de dérivation terme à terme, qui exige la convergence uniforme de la série dérivée.
* Ne pas oublier de vérifier que les $f_n$ sont holomorphes sur **le même** ouvert $\Omega$ (attention aux pôles : dans l'exemple d'Euler, on travaille sur $\C\setminus\Z$).
* Les termes en nombre fini qui empêchent une majoration uniforme (ici $|n|<2R$) n'affectent pas la convergence : on peut les retirer, ils sont holomorphes.
