---
id: ch02-automorphismes-de-c
type: proposition
chapter: 2
title: Automorphismes holomorphes de $\mathbb C$
ref: Exercice II.7.5
page: 51
importance: 2
depends: [ch02-classification-singularites, ch01-dalembert-gauss, ch02-laurent-couronne-cauchy, ch01-holomorphe-analytique]
tags: [automorphisme, biholomorphisme, casorati-weierstrass, polynome, fonction entiere, affine]
---
## Intuition

> 💡 Une bijection holomorphe de $\C$ sur $\C$ doit être « sage à l'infini » : elle envoie un voisinage de $\infty$ (l'extérieur d'un disque) sur le complémentaire de l'image d'un disque, qui évite donc un ouvert. Or une fonction entière non polynomiale a en $\infty$ une singularité essentielle, et prend alors près de $\infty$ des valeurs proches de **tout** nombre complexe (Casorati-Weierstrass). Donc $f$ est un polynôme ; et un polynôme injectif est de degré $1$. Conclusion : les seuls automorphismes de $\C$ sont les **similitudes directes** $z\mapsto az+b$.

Vocabulaire. Un **automorphisme** de $\C$ est une bijection holomorphe $f:\C\to\C$ dont la réciproque $f^{-1}$ est aussi holomorphe ([[ch01-def-biholomorphisme]]). « Le comportement de $f$ en $\infty$ » se lit sur $g(z)=f(1/z)$ près de $z=0$. Une **singularité essentielle** en $0$ est une singularité isolée qui n'est ni effaçable ni un pôle ; Casorati-Weierstrass dit que l'image de tout disque épointé est alors dense ([[ch02-classification-singularites]]).

## Énoncé

**Proposition (poly, Exercice II.7.5, p. 51).** Soit $f:\C\to\C$ un automorphisme de $\C$, c'est-à-dire une bijection holomorphe de $\C$ dans lui-même dont la réciproque $f^{-1}$ est aussi holomorphe. On suppose $f(0)=0$. Alors $z\mapsto g(z)=f(\frac1z)$ est méromorphe en $0$, et $f$ est de la forme $z\mapsto az$ pour un certain $a\in\C^\times$.

**Forme générale.** Les automorphismes de $\C$ sont exactement les applications $z\mapsto az+b$, avec $a\in\C^\times$ et $b\in\C$.

## Hypothèses

### H1 — $f$ injective

**Rôle.** Elle sert deux fois : $f(\{|z|>1\})$ est disjoint de l'ouvert non vide $f(D(0,1))$ (donc n'est pas dense), et un polynôme injectif est de degré $1$.

**Si on la retire.** $f(z)=z^2$ est entière, surjective, $f(0)=0$, mais n'est pas de la forme $az$ ($f(1)=f(-1)$). $f(z)=e^{z}-1$ est entière, $f(0)=0$, non injective ($f(2i\pi)=f(0)$) et pas polynomiale : $g(z)=e^{1/z}-1$ a une singularité essentielle en $0$.

### H2 — $f$ surjective, de réciproque holomorphe

**Rôle.** Dans la preuve ci-dessous, la continuité de $f^{-1}$ donne immédiatement que $f(D(0,1))$ est ouvert, et l'holomorphie de $f^{-1}$ donne $f'\neq0$.

**Si on la retire.** La conclusion reste vraie mais la preuve change : pour $f$ entière **injective**, $f(D(0,1))$ est ouvert par le théorème de l'application ouverte ([[ch01-application-ouverte]]), et l'on conclut à l'étape 3 par l'argument de variante (non-injectivité d'un polynôme de degré $\ge2$), qui n'utilise pas $f^{-1}$. Ainsi toute fonction entière injective est de la forme $az+b$, donc automatiquement surjective.

### H3 — $f(0)=0$

**Rôle.** Normalisation qui tue la constante $b$.

**Si on la retire.** On obtient $f(z)=az+b$ avec $b=f(0)$ : appliquer le résultat à $f-f(0)$.

### H4 — le domaine est $\C$ tout entier

**Rôle.** C'est ce qui permet de regarder $f$ près de $\infty$, via $g(z)=f(1/z)$ holomorphe sur $\C^\times$.

**Si on la retire.** Sur d'autres ouverts, les automorphismes ne sont plus affines : $z\mapsto\frac{z-\frac12}{1-\frac z2}$ est un automorphisme du disque $D(0,1)$ ([[ch01-automorphismes-disque]]) ; $z\mapsto\frac1z$ est un automorphisme de $\C^\times$.

## Idée de la preuve

$g(D(0,1)\setminus\{0\})=f(\{|w|>1\})$ évite l'ouvert non vide $f(D(0,1))$, donc n'est pas dense : par Casorati-Weierstrass, $g$ est méromorphe en $0$. Les coefficients de Laurent de $g$ en $0$ sont les coefficients de Taylor de $f$ : il n'y en a qu'un nombre fini, $f$ est un polynôme. Comme $f'$ ne s'annule pas, $\deg f=1$.

## Preuve

**Étape 1 — $g$ est méromorphe en $0$.** La fonction $g(z)=f(1/z)$ est holomorphe sur $\C^\times$ (composée). L'ensemble $V:=f(D(0,1))=(f^{-1})^{-1}(D(0,1))$ est ouvert ($f^{-1}$ est continue) et non vide ($0=f(0)\in V$). Par injectivité de $f$,
$$
g\big(D(0,1)\setminus\{0\}\big)=f\big(\{w\,;\,|w|>1\}\big)\quad\text{est disjoint de}\quad V=f\big(D(0,1)\big).
$$
Un ensemble qui évite un ouvert non vide n'est pas dense. Par le théorème de Casorati-Weierstrass (question 8 de [[ch02-classification-singularites]], par contraposée, avec $\eps=1$), $0$ n'est pas une singularité essentielle de $g$ : $g$ est méromorphe en $0$.

**Étape 2 — $f$ est un polynôme** (c'est le sens direct de l'Exercice II.7.2). Comme $f$ est entière, elle est somme de sa série de Taylor en $0$, de rayon de convergence infini ([[ch01-holomorphe-analytique]]) : $f(w)=\sum_{n\ge0}c_nw^n$ pour tout $w\in\C$. Donc, pour $z\neq0$, $g(z)=\sum_{n\ge0}c_nz^{-n}$, la série convergeant normalement sur chaque cercle $C(0,\rho)$ (car $\sum|c_n|\rho^{-n}<\infty$). Par unicité du développement de Laurent ([[ch02-laurent-couronne-cauchy]]), les coefficients de Laurent de $g$ en $0$ sont $a_{-n}=c_n$ ($n\ge0$) et $a_n=0$ ($n\ge1$). Puisque $g$ est méromorphe en $0$, il n'y a qu'un nombre fini de $a_n\neq0$ avec $n\le-1$ (synthèse de [[ch02-classification-singularites]]) : il existe $m$ tel que $c_n=0$ pour $n>m$. Ainsi $f(w)=\sum_{n=0}^{m}c_nw^n$ est un polynôme ; il n'est pas constant car $f$ est bijective. Notons $d\ge1$ son degré.

**Étape 3 — $d=1$.** En dérivant $f\circ f^{-1}=\id_\C$ : $f'(f^{-1}(w))\,(f^{-1})'(w)=1$ pour tout $w$, donc $f'$ ne s'annule pas sur $\C$. Si l'on avait $d\ge2$, $f'$ serait un polynôme de degré $d-1\ge1$, qui a une racine par le théorème de d'Alembert-Gauss ([[ch01-dalembert-gauss]]) : contradiction. Donc $d=1$, $f(z)=az+b$ avec $a\neq0$, et $f(0)=0$ donne $b=0$.

*Variante (n'utilisant que l'injectivité).* Si $d\ge2$, l'ensemble $E$ des racines de $f'$ est fini ; pour $c\notin f(E)$ (ensemble fini), le polynôme $f-c$ de degré $d$ n'a que des racines simples (une racine multiple $z_0$ vérifierait $f'(z_0)=0$ et $c=f(z_0)$), et il en a $d$ comptées avec multiplicité par d'Alembert-Gauss : il a donc $d\ge2$ racines **distinctes**, et $f$ n'est pas injective.

**Forme générale.** Si $f$ est un automorphisme de $\C$, $\tilde f:=f-f(0)$ en est un (composée de $f$ avec la translation $w\mapsto w-f(0)$, automorphisme d'inverse $w\mapsto w+f(0)$), et $\tilde f(0)=0$ : $\tilde f(z)=az$, donc $f(z)=az+b$ avec $b=f(0)$. Réciproquement, pour $a\neq0$, $z\mapsto az+b$ est holomorphe, bijective, d'inverse $w\mapsto\frac{w-b}{a}$ holomorphe. $\square$

## Preuve à trous

**Étape 1.** $g(z)=f(1/z)$ est holomorphe sur $\C^\times$, et <trou indice="que vaut g sur le disque épointé ? que peut-on dire de f(D(0,1)) ?">$g(D(0,1)\setminus\{0\})=f(\{|w|>1\})$ évite l'ouvert non vide $f(D(0,1))$ par injectivité, donc n'est pas dense</trou>. Par <trou>Casorati-Weierstrass (contraposée), $0$ n'est pas une singularité essentielle de $g$</trou> : $g$ est méromorphe en $0$.

**Étape 2.** Avec $f(w)=\sum_{n\ge0}c_nw^n$ sur $\C$, on a <trou indice="unicité du développement de Laurent">$g(z)=\sum_{n\ge0}c_nz^{-n}$, donc les coefficients de Laurent négatifs de $g$ sont les $c_n$, et il n'y en a qu'un nombre fini de non nuls</trou> : $f$ est un polynôme non constant.

**Étape 3.** <trou indice="dériver f∘f⁻¹">$f'(f^{-1}(w))(f^{-1})'(w)=1$, donc $f'$ ne s'annule jamais</trou> ; par d'Alembert-Gauss, le polynôme $f'$ est constant non nul, donc $f(z)=az+b$, $a\neq0$, et $f(0)=0$ impose $b=0$. $\square$

## Exemples

* **Le groupe $\mathrm{Aut}(\C)$.** C'est le groupe affine $\{z\mapsto az+b\}$ ; la composée de $z\mapsto az+b$ et $z\mapsto a'z+b'$ est $z\mapsto aa'z+(ab'+b)$. Pour $a\neq1$, $z\mapsto az+b$ a un unique point fixe $z^*=\frac{b}{1-a}$ et s'écrit $z-z^*\mapsto a(z-z^*)$ : rotation d'angle $\arg a$ composée d'une homothétie de rapport $|a|$, de centre $z^*$ ; pour $a=1$, c'est une translation.
* **Un automorphisme est déterminé par deux valeurs.** Trouver l'automorphisme de $\C$ tel que $f(1)=1$ et $f(i)=2$ : $a+b=1$ et $ai+b=2$, d'où $a(i-1)=1$, $a=\frac{1}{i-1}=\frac{-1-i}{2}$ et $b=1-a=\frac{3+i}{2}$. Vérification : $ai+b=\frac{-i+1}{2}+\frac{3+i}{2}=2$. ✓
* **$\exp$ n'est pas un automorphisme.** Elle n'est ni injective ($e^{2i\pi}=e^{0}$) ni surjective ($0$ n'est pas atteint), et $e^{1/z}$ a une singularité essentielle en $0$ : le comportement à l'infini d'une fonction entière non polynomiale est « sauvage ».

## Pièges

* > ⚠️ L'étape clé est de **regarder $f$ en $\infty$** via $g(z)=f(1/z)$ ; l'injectivité sert à montrer que $g$ « rate » un ouvert près de $0$.
* « $g$ méromorphe en $0$ $\Rightarrow$ $f$ polynôme » repose sur l'identification des coefficients de Laurent de $g$ avec les coefficients de Taylor de $f$ (unicité du développement) ; ne pas l'affirmer sans le dire.
* Ne pas confondre avec les automorphismes du disque ([[ch01-automorphismes-disque]]), qui sont des homographies, ni avec ceux de $\C^\times$, parmi lesquels $z\mapsto1/z$, qui n'est pas affine.
* Une fonction entière surjective n'est pas forcément injective ($z^2$) ; c'est l'injectivité qui force le degré $1$.
