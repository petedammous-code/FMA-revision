---
id: ch02-residu-integrale-cercle
type: proposition
chapter: 2
title: Le résidu comme intégrale sur un petit cercle
ref: Proposition II.4.11
page: 46
importance: 3
depends: [ch02-laurent-developpement, ch02-residu-def, ch01-integrale-sur-cercle, ch01-longueur-majoration-integrale]
tags: [residu, cercle, integrale, laurent, convergence normale, terme a terme]
---
## Intuition

> 💡 Le résidu, défini algébriquement comme un coefficient ([[ch02-residu-def]]), a une interprétation **analytique** : c'est la « circulation » de $f$ autour de $z_0$, divisée par $2i\pi$. Sur un petit cercle, chaque terme $a_n(z-z_0)^n$ de la série de Laurent tourne $n+1$ fois sur lui-même et sa contribution s'annule par symétrie, **sauf** pour $n=-1$ où $\frac{dz}{z-z_0}=i\,d\theta$ ne tourne pas du tout et s'accumule en $2i\pi$.

C'est la brique élémentaire de la formule des résidus ([[ch02-formule-residus]]) : celle-ci dit qu'une intégrale sur un lacet quelconque se décompose en somme de telles « petites intégrales » autour des pôles.

Notations : $C(z_0,r)$ est le cercle de centre $z_0$ et de rayon $r$, parcouru dans le sens trigonométrique, c'est-à-dire le lacet $\theta\mapsto z_0+re^{i\theta}$, $\theta\in[0,2\pi]$ ; on a $\int_{C(z_0,r)}f(z)\,dz=ir\int_0^{2\pi}f(z_0+re^{i\theta})e^{i\theta}\,d\theta$ ([[ch01-integrale-sur-cercle]]).

## Énoncé

**Proposition (poly, Proposition II.4.11, p. 46).** Soit $z_0\in\Omega$ un pôle de la fonction méromorphe $f$. Alors, pour tout $r>0$ assez petit, on a
$$
\mathrm{res}_{z_0}(f)=\frac1{2i\pi}\int_{C(z_0,r)}f(z)\,dz,
$$
où $C(z_0,r)$ désigne le cercle de centre $z_0$ et de rayon $r$, que l'on suppose parcouru dans le sens trigonométrique.

Précisément (cf. la preuve) : si $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ sur $D(z_0,R)^\times$ (Proposition II.4.6), la formule vaut pour **tout** $r\in]0,R[$.

## Hypothèses

### H1 — $z_0$ est un pôle de $f\in\mathcal M(\Omega)$

**Rôle.** Elle fournit le développement de Laurent à partie polaire finie sur un disque épointé (Proposition II.4.6).

**Si on la retire.** Hypothèse de confort : en un point régulier (ou une fausse singularité) $z_0$, le développement de Laurent est une série entière et la même preuve donne $\frac1{2i\pi}\int_{C(z_0,r)}f=0=\mathrm{res}_{z_0}(f)$ (c'est aussi le théorème de Cauchy sur un disque). En revanche pour une singularité essentielle, $f$ n'est pas méromorphe et la définition du poly ne s'applique plus ; la formule reste vraie avec le coefficient $a_{-1}$ de la série de Laurent bilatère ([[ch02-laurent-couronne-cauchy]]) : $\int_{C(0,1)}e^{1/z}\,dz=2i\pi$.

### H2 — $r$ assez petit

**Rôle.** Il faut que le cercle $C(z_0,r)$ soit contenu dans le disque épointé $D(z_0,R)^\times$ où le développement de Laurent est valable, et même dans une couronne $C_{\eps,\bar\eps}$ ($\eps<r<\bar\eps<R$) sur laquelle la série converge **normalement** : c'est ce qui autorise l'intégration terme à terme. En particulier $\bar D(z_0,r)$ ne doit contenir aucune autre singularité de $f$.

**Si on la retire.** $f(z)=\dfrac1{z(z-1)}=\dfrac1{z-1}-\dfrac1z$, $z_0=0$, $\mathrm{res}_0(f)=-1$. Pour $r=\frac12$ on trouve bien $-1$. Pour $r=2$ : $\int_{C(0,2)}\frac{dz}{z-1}=2i\pi\,\Ind_1(C(0,2))=2i\pi$ et $\int_{C(0,2)}\frac{dz}z=2i\pi$ ([[ch02-indice-cercle]]), donc $\frac1{2i\pi}\int_{C(0,2)}f=1-1=0\neq-1$ : le grand cercle « voit » aussi le pôle $1$ (et donne la somme des deux résidus). Pour $r=1$, l'intégrale n'est même pas définie (le pôle $1$ est sur le cercle).

### H3 — Sens trigonométrique

**Rôle.** Le calcul $\int_{C(z_0,r)}\frac{dz}{z-z_0}=2i\pi$ utilise le paramétrage $\theta\mapsto z_0+re^{i\theta}$, $\theta$ croissant.

**Si on la retire.** Parcouru dans le sens horaire (chemin opposé), l'intégrale change de signe ([[ch01-integrale-reparametrage-oppose-concatenation]]) : on obtient $-\mathrm{res}_{z_0}(f)$. Parcouru $k$ fois, on obtient $k\,\mathrm{res}_{z_0}(f)$.

## Idée de la preuve

La série de Laurent converge normalement sur le cercle $C(z_0,r)$, donc s'intègre terme à terme. Or $\int_{C(z_0,r)}(z-z_0)^n\,dz=ir^{n+1}\int_0^{2\pi}e^{i(n+1)\theta}\,d\theta$ vaut $2i\pi$ si $n=-1$ et $0$ sinon : il ne reste que $2i\pi\,a_{-1}$.

## Preuve

Par la Proposition II.4.6 ([[ch02-laurent-developpement]]), il existe $m\in\N$ et $R>0$ tels que $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$ sur $D(z_0,R)^\times$, la série convergeant normalement sur toute couronne $C_{\eps,\bar\eps}=\{\eps<|z-z_0|<\bar\eps\}$, $0<\eps<\bar\eps<R$. Soit $r\in]0,R[$ ; en choisissant $\eps<r<\bar\eps<R$, le cercle $C(z_0,r)$ est contenu dans $C_{\eps,\bar\eps}$, donc la série converge **normalement** sur $C(z_0,r)$ : $\sum_n\sup_{C(z_0,r)}|a_n(z-z_0)^n|<+\infty$.

*Intégration terme à terme.* Notons $S_N(z)=\sum_{n=-m}^Na_n(z-z_0)^n$. Par la majoration fondamentale ([[ch01-longueur-majoration-integrale]]), avec $L(C(z_0,r))=2\pi r$,
$$
\Big|\int_{C(z_0,r)}f(z)\,dz-\int_{C(z_0,r)}S_N(z)\,dz\Big|\le2\pi r\sup_{C(z_0,r)}|f-S_N|\le2\pi r\sum_{n>N}\sup_{C(z_0,r)}|a_n(z-z_0)^n|\xrightarrow[N\to\infty]{}0 .
$$
Donc $\int_{C(z_0,r)}f(z)\,dz=\sum_{n\ge-m}a_n\int_{C(z_0,r)}(z-z_0)^n\,dz$.

*Calcul des intégrales élémentaires.* Avec $z=z_0+re^{i\theta}$, $dz=ire^{i\theta}\,d\theta$ ([[ch01-integrale-sur-cercle]]) :
$$
\int_{C(z_0,r)}(z-z_0)^n\,dz=\int_0^{2\pi}r^ne^{in\theta}\,ire^{i\theta}\,d\theta=i\,r^{1+n}\int_0^{2\pi}e^{i(1+n)\theta}\,d\theta=\begin{cases}2i\pi&\text{si }n=-1,\\0&\text{si }n\neq-1,\end{cases}
$$
car pour $n\neq-1$, $\int_0^{2\pi}e^{i(1+n)\theta}\,d\theta=\Big[\dfrac{e^{i(1+n)\theta}}{i(1+n)}\Big]_0^{2\pi}=0$.

*Conclusion.*
$$
\int_{C(z_0,r)}f(z)\,dz=\int_{C(z_0,r)}\Big(\sum_{n\ge-m}a_n(z-z_0)^n\Big)dz=\sum_{n\ge-m}\Big(\int_{C(z_0,r)}a_n(z-z_0)^n\,dz\Big)=2i\pi\,a_{-1}=2i\pi\,\mathrm{res}_{z_0}(f)
$$
par la définition [[ch02-residu-def]], ce qui termine la démonstration. $\square$

## Preuve à trous

Sur $D(z_0,R)^\times$, $f(z)=\sum_{n\ge-m}a_n(z-z_0)^n$. Pour $0<r<R$, <trou indice="sur quel type d'ensemble la série de Laurent converge-t-elle normalement ?">le cercle $C(z_0,r)$ est contenu dans une couronne $\eps<|z-z_0|<\bar\eps$ avec $0<\eps<r<\bar\eps<R$, sur laquelle la série converge normalement</trou>, ce qui permet <trou indice="majoration |∫γ g| ≤ L(γ) sup|g| appliquée au reste de la série">d'intégrer terme à terme : $\big|\int_{C(z_0,r)}(f-S_N)\big|\le2\pi r\sum_{n>N}\sup_{C(z_0,r)}|a_n(z-z_0)^n|\to0$</trou>. Ensuite
$$
\int_{C(z_0,r)}(z-z_0)^n\,dz=i\,r^{1+n}\int_0^{2\pi}e^{i(1+n)\theta}\,d\theta,
$$
qui vaut <trou>$2i\pi$ si $n=-1$ et $0$ sinon (car $e^{i(1+n)\theta}$ a pour primitive $\frac{e^{i(1+n)\theta}}{i(1+n)}$, $2\pi$-périodique)</trou>. Donc $\int_{C(z_0,r)}f(z)\,dz=2i\pi\,a_{-1}=2i\pi\,\mathrm{res}_{z_0}(f)$. $\square$

## Exemples

* **$\dfrac{e^z}{z^2}$.** Pour tout $r>0$ ($R=+\infty$), $\int_{C(0,r)}\dfrac{e^z}{z^2}\,dz=2i\pi\,\mathrm{res}_0=2i\pi$ (coefficient de $\frac1z$ : $1$). Cohérent avec la formule de Cauchy pour la dérivée : $\frac{1!}{2i\pi}\int_{C(0,r)}\frac{e^z}{z^2}\,dz=(\exp)'(0)=1$ ([[ch01-estimees-cauchy]]).
* **$\dfrac1{\sin z}$.** Le développement $\frac1z+\frac z6+\dots$ vaut sur $0<|z|<\pi$, donc pour $0<r<\pi$ : $\int_{C(0,r)}\dfrac{dz}{\sin z}=2i\pi$. Pour $\pi<r<2\pi$, le cercle entoure aussi les pôles $\pm\pi$ (résidus $-1$ chacun, [[ch02-residu-pole-simple]]) et la formule des résidus donne $2i\pi(1-1-1)=-2i\pi$ : la formule « petit cercle » est fausse dès que $r>\pi$.
* **Calcul d'un coefficient par une intégrale (réciproque utile).** Pour $n\in\Z$, appliquer la proposition à $(z-z_0)^{-n-1}f(z)$ (qui est méromorphe et dont le coefficient d'indice $-1$ est $a_n$) donne $a_n=\dfrac1{2i\pi}\int_{C(z_0,r)}\dfrac{f(z)}{(z-z_0)^{n+1}}\,dz$ pour $r$ petit : on retrouve les formules de Cauchy pour les coefficients de Taylor ($n\ge0$, $f$ holomorphe).

## Pièges

* > ⚠️ « $r$ assez petit » : le disque fermé $\bar D(z_0,r)$ ne doit contenir **aucun autre pôle** ; sinon on obtient la somme de plusieurs résidus (formule des résidus).
* Le facteur est $\frac1{2i\pi}$, pas $\frac1{2\pi}$ : $\int_{C(z_0,r)}\frac{dz}{z-z_0}=2i\pi$.
* Le cercle est parcouru **une fois, dans le sens trigonométrique**. Sens horaire : signe $-$.
* L'intégration terme à terme se justifie par la convergence **normale sur le cercle** (série de Laurent sur une couronne fermée $\eps\le|z-z_0|\le\bar\eps$ ne touchant pas $z_0$), pas sur le disque épointé entier où il n'y a pas convergence normale.
* Les termes $n\le-2$ (pôle d'ordre $\ge2$) ne contribuent pas : $\frac1{(z-z_0)^2}$ a pour primitive $-\frac1{z-z_0}$ sur $\C\setminus\{z_0\}$. Seul $n=-1$ n'a pas de primitive.
