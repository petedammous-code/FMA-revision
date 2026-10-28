---
id: rfx-res-series-produits
type: reflexe
situation: Calculer la somme d'une série numérique ou d'une série de fonctions, ou un produit infini, grâce à la cotangente, au sinus ou aux résidus
chapters: [2, 3]
---
## Situation

On veut une valeur exacte pour $\sum_{n\in\Z}R(n)$, $\sum_{n\ge1}R(n)$ ou $\sum(-1)^nR(n)$ avec $R$ fraction rationnelle ($\frac1{n^2+a^2}$, $\frac{1}{(n+a)^2}$, $\frac1{n^4}$...), ou identifier une série de fonctions $\sum_nf_n(z)$ ($\sum\frac1{(z-n)^2}$, $\sum\frac{2z}{z^2-n^2}$) ou un produit infini $\prod_n(1+f_n(z))$ ($\prod(1-\frac{z^2}{n^2})$, $\prod(1+\frac{a^2}{n^2})$, produit de Wallis) avec une fonction connue.

Mots-clés : *$\pi\cot(\pi z)$*, *$\frac{\pi^2}{\sin^2(\pi z)}$*, *formule d'Euler*, *produit infini*, *dérivée logarithmique*, *carrés $C_N$ de sommets $(N+\frac12)(\pm1\pm i)$*.

## Options

### [x] Formule de la cotangente — [[ch03-cotangente]]
**Quand.** La série est (ou se ramène par décomposition en éléments simples à) $\sum\frac{1}{z-n}$ symétrisée, ou $\sum\frac{2z}{z^2-n^2}$ : par exemple $\sum\frac1{n^2-a^2}$ ($z=a$), $\sum\frac1{n^2+a^2}$ ($z=ia$), et, par développement en $0$, les $\sum_{n\ge1}\frac{1}{n^{2k}}$.
**Justification.** $\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$ pour $z\in\C\setminus\Z$ (poly, Formule (III.6.2), p. 69) : on évalue en un point bien choisi, on dérive terme à terme, ou on compare les DSE en $0$ ($\pi z\cot(\pi z)=1-2\sum_{k\ge1}\big(\sum_{n\ge1}n^{-2k}\big)z^{2k}$).
**Pièges.** $\sum_{n\in\Z}\frac1{z-n}$ ne converge pas absolument : utiliser la forme $\frac1{z-n}+\frac1n$ ou la forme regroupée $\frac{2z}{z^2-n^2}$. Pour $z=ia$, $\cot(i\pi a)=-i\coth(\pi a)$ (vérifier le signe).

### [x] Formule d'Euler pour $\pi^2/\sin^2$ — [[ch03-euler-sinus-carre]]
**Quand.** Dénominateurs **carrés** : $\sum_{n\in\Z}\frac1{(z-n)^2}$, $\sum_{n\ge0}\frac1{(n+a)^2}$, ou une série de fonctions à identifier par la méthode du poly : différence holomorphe sur $\C$, périodique, bornée dans une bande, donc constante par Liouville ([[ch01-liouville]]).
**Justification.** $\frac{\pi^2}{\sin^2(\pi z)}=\sum_{n\in\Z}\frac1{(z-n)^2}$ (poly, Formule (III.6.1), p. 69) ; c'est aussi la dérivée de $-\pi\cot(\pi z)$.
**Pièges.** Pour **identifier** une série de fonctions méromorphes, il faut d'abord vérifier que les parties principales coïncident en chaque pôle (sinon la différence n'est pas entière), puis la bornitude **uniforme** dans la bande, pas seulement sur $\R$.

### [x] Résidus avec le noyau $\pi\cot(\pi z)$ sur des carrés — [[ch02-formule-residus-pratique]]
**Quand.** $\sum_{n\in\Z}R(n)$ avec $R=P/Q$, $\deg Q\ge\deg P+2$, sans pôle entier (ou avec, en les traitant à part). Série alternée : noyau $\frac{\pi}{\sin(\pi z)}$, de résidu $(-1)^n$ en $n$.
**Justification.** $f(z)=\pi\cot(\pi z)R(z)$ a en chaque entier $n$ (non pôle de $R$) un pôle simple de résidu $R(n)$ ([[ch02-residu-pole-simple]]). Sur le bord $C_N$ du carré de sommets $(N+\frac12)(\pm1\pm i)$ : sur les côtés verticaux $|\cot(\pi z)|=|\tanh(\pi\Im z)|\le1$, sur les côtés horizontaux $|\cot(\pi z)|\le\coth(\pi/2)$ (car $|\cot(x+iy)|^2=\frac{\cos^2x+\sinh^2y}{\sin^2x+\sinh^2y}$). Donc $\big|\int_{C_N}f\big|\le8(N+\tfrac12)\cdot\pi\coth(\tfrac\pi2)\sup_{C_N}|R|\to0$, et $\sum_{n\in\Z}R(n)=-\sum_{s\text{ pôle de }R}\Res_s\big(\pi\cot(\pi z)R(z)\big)$.
**Pièges.** Ces majorations de $\cot$ ne sont **pas** dans le poly : les écrire. Si $R$ a un pôle en un entier (par exemple $\frac1{n^2}$ en $0$), le résidu en ce point combine les deux : le calculer par Laurent.

### [x] Produits infinis de fonctions holomorphes — [[ch03-produits-infinis]]
**Quand.** Produit $\prod_n(1+f_n(z))$ à identifier ou à évaluer : $\sin(\pi z)=\pi z\prod_{n\ge1}(1-\frac{z^2}{n^2})$ ([[ch03-produit-sinus]]) évalué en $z=\frac12$ (Wallis), en $z=ia$ ($\sinh$) ; $\cos(\pi z)=\prod_{n\ge1}\big(1-\frac{4z^2}{(2n-1)^2}\big)$ ; produits dont on connaît les zéros.
**Justification.** Si $\sum f_n$ converge **normalement sur tout compact**, le produit est holomorphe, ses zéros sont ceux des facteurs (avec multiplicités), et $\frac{G'}{G}=\sum\frac{g_n'}{g_n}$ (poly, Théorème III.5.1, p. 68). Pour identifier $G$ à une fonction connue $S$ : $\frac{G'}{G}=\frac{S'}{S}$ hors des zéros, donc $(G/S)'=0$ et $G=cS$ ; on fixe $c$ en un point.
**Pièges.** Avoir **les mêmes zéros** ne suffit pas : $G$ et $e^{\varphi}G$ ont les mêmes zéros ; il faut la dérivée logarithmique (ou un autre argument) puis la constante. Un produit $\prod(1+u_n)$ avec $\sum|u_n|$ non convergente peut converger vers une limite non nulle sans que le théorème s'applique : rester dans le cadre normalement convergent ([[ch03-produits-infinis-remarque]]).

### [ ] Théorème de Weierstraß pour les séries — [[ch03-weierstrass-series]]
**Pourquoi ce n'est pas l'outil ici.** Il dit que la somme d'une série localement normalement convergente de fonctions holomorphes est holomorphe et se dérive terme à terme ; il ne donne **pas** la valeur de la somme.
**Quand il le serait.** C'est la première étape obligatoire (montrer que $\sum f_n$ définit une fonction méromorphe sur $\C$ avant de l'identifier) et l'outil pour dériver une formule déjà connue (passer de la cotangente à $\pi^2/\sin^2$, ou d'un produit à sa dérivée logarithmique).

## Démarche

1. **Série numérique $\sum R(n)$.** Si $R$ est paire, $\sum_{n\ge1}R(n)=\frac12\big(\sum_{n\in\Z}R(n)-R(0)\big)$.
   * $R(n)=\frac{1}{n^2\pm a^2}$ ou combinaison de tels termes → évaluer la cotangente en $z=a$ ou $z=ia$.
   * Dénominateurs carrés, $(n+a)^2$ → formule d'Euler $\pi^2/\sin^2$, ou dériver la cotangente.
   * $R$ quelconque avec $\deg Q\ge\deg P+2$ → résidus de $\pi\cot(\pi z)R(z)$ sur les carrés $C_N$ (alternée : $\pi/\sin(\pi z)$).
   * $\sum_{n\ge1}n^{-2k}$ → DSE de $\pi z\cot(\pi z)$ en $0$.
2. **Produit infini.** Vérifier la convergence normale sur les compacts de $\sum|f_n|$ ; repérer les zéros ; identifier par la dérivée logarithmique ; fixer la constante ; puis évaluer en un point.
3. **Série de fonctions à identifier.** Convergence (Weierstraß) ; mêmes parties principales que la fonction candidate ; différence entière, périodique, bornée dans une bande de période → constante (Liouville) ; calculer la constante par une limite (souvent $\Im z\to\pm\infty$).
4. **Vérifier** le résultat : limite quand le paramètre tend vers $0$ (on doit retrouver $\zeta(2)=\frac{\pi^2}6$ ou autre valeur connue), positivité, valeur numérique approchée.

## Pièges

* Écrire $\sum_{n\in\Z}\frac1{z-n}$ sans symétrisation.
* Oublier le terme $n=0$ (ou le compter deux fois) en passant de $\sum_{\Z}$ à $\sum_{n\ge1}$.
* Se tromper de signe dans $\cot(ix)=-i\coth x$, $\sin(ix)=i\sinh x$, $\cos(ix)=\cosh x$.
* Dans la méthode des résidus, oublier que les pôles de $R$ contribuent avec le signe moins, ou ne pas majorer $\cot$ sur les carrés.
* Conclure qu'un produit est égal à une fonction parce qu'ils ont les mêmes zéros.

## Mini-exemple

*Énoncé.* Pour $a>0$, calculer $S(a)=\sum_{n\ge1}\frac{1}{n^2+a^2}$ et $P(a)=\prod_{n\ge1}\big(1+\frac{a^2}{n^2}\big)$.

*Solution.* **Série.** En $z=ia\notin\Z$, la formule de la cotangente donne $\pi\cot(i\pi a)=\frac1{ia}+\sum_{n\ge1}\frac{2ia}{-a^2-n^2}$, soit, avec $\cot(i\pi a)=-i\coth(\pi a)$ : $-i\pi\coth(\pi a)=-\frac ia-2ia\,S(a)$. D'où $S(a)=\dfrac{\pi a\coth(\pi a)-1}{2a^2}$. Contrôle : $\pi a\coth(\pi a)=1+\frac{(\pi a)^2}3+O(a^4)$, donc $S(a)\to\frac{\pi^2}6=\sum\frac1{n^2}$ quand $a\to0$.
**Produit.** $\sum_n\frac{|z|^2}{n^2}$ converge normalement sur tout compact, et la formule du produit du sinus en $z=ia$ donne $\sin(i\pi a)=i\pi a\,P(a)$ ; comme $\sin(i\pi a)=i\sinh(\pi a)$, $P(a)=\dfrac{\sinh(\pi a)}{\pi a}$. Cohérence : $\frac{d}{da}\ln P(a)=\sum_{n\ge1}\frac{2a}{n^2+a^2}=2aS(a)=\pi\coth(\pi a)-\frac1a$, qui est bien la dérivée de $\ln\frac{\sinh(\pi a)}{\pi a}$.
